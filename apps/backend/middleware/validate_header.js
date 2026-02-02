import { jwtVerify } from "jose";
import {
  getClientKey,
  getClientPassKey,
  getClientSecret,
} from "../core/config/secret.js";
import {
  datetime,
  datetimeIso,
  formatDateSystem,
  hash,
  hashEquals,
  hmac,
  isoDateNow,
  isoDateNowYmd,
  status,
} from "../routes/v1/components/tools/general.js";
import DB from "../core/config/knex.js";
import { Logging } from "../routes/v1/components/tools/servertool.js";
import { AsyncLocalStorage } from "async_hooks"

const als = new AsyncLocalStorage();

export const validateTimestamp = async (req, res, next) => {
  try {
    const timestamp = req.headers["x-timestamp"];

    if (
      process.env.APP_DEBUG === "true" &&
      req.headers["x-uniqueid"]
    ) {
      return next();
    }

    if (!timestamp) {
      return res.status(400).json({
        status: status.BAD_REQUEST,
        message: "Missing timestamp header",
        datetime: formatDateSystem(),
      });
    }

    const inputTime = Date.parse(timestamp);
    const nowTime = Date.now();

    if (isNaN(inputTime)) {
      return res.status(400).json({
        status: status.BAD_REQUEST,
        message: "Invalid timestamp format",
        datetime: formatDateSystem(),
      });
    }

    const diffMs = Math.abs(nowTime - inputTime);
    const diffMinutes = diffMs / 1000 / 60;

    if (diffMinutes > 5) {
      return res.status(400).json({
        status: status.BAD_REQUEST,
        message: "Request timestamp expired",
        datetime: formatDateSystem(),
      });
    }

    return next();
  } catch (error) {
    Logging(error);
    return res.status(401).json({
      status: status.BAD_REQUEST,
      message: "Unauthorized",
      datetime: formatDateSystem(),
    });
  }
};

export const getRequestContext = () => als.getStore();

export const contextMiddleware = (req, res, next) => {
  const store = {
    requestId: Date.now(),
    method: req.method,
    url: req.url,
    body: req.body,
    auth: req?.auth || null
  };

  als.run(store, () => {
    next();
  });
};

export const validateSignature = async (req, res, next) => {
  try {

    if (!req.headers["x-uniqueid"]) {
      return res.status(400).json({
        status: status.BAD_REQUEST,
        message: "ID not found",
        datetime: formatDateSystem(),
      });
    }

    const cUserUnique = req.headers["x-uniqueid"]


    const oUser = await DB("user_credential").select(
      "Username",
      "Fullname",
      "Role",
      "Telp",
      "UniqueId"
    ).where('UniqueId', cUserUnique).first();

    if (!oUser) {
      return res.status(400).json({
        status: status.BAD_REQUEST,
        message: "Credential not found",
        datetime: formatDateSystem(),
      });
    }

    req.auth = {
      uniqueId: oUser.UniqueId,
      username: oUser.Username,
      telp: oUser.Telp,
      fullname: oUser.Fullname,
      role: oUser.Role,
    }

    next();
  } catch (error) {
    Logging(error)

    return res.status(401).json({
      status: status.BAD_REQUEST,
      message: "Unauthorized",
      datetime: formatDateSystem(),
    });
  }
};

export const validateBaseToken = async (req, res, next) => {
  const header = req.headers["authorization"];
  const token = header && header.split(" ")[1];

  if (process.env.APP_DEBUG && process.env.APP_DEBUG == 'true' && req.headers["x-uniqueid"]) {
    return next()
  }


  if (!token && header.startsWith("Basic ")) {
    return res.status(400).json({
      status: status.BAD_REQUEST,
      message: "No token provided",
      datetime: formatDateSystem(),
    });
  }

  try {
    const credentials = Buffer.from(token, "base64").toString("utf-8");
    const [username, password] = credentials.split(":");


    if (
      !hashEquals(username, hmac(getClientKey(), getClientSecret())) &&
      !hashEquals(password, hmac(getClientPassKey(), getClientSecret()))
    ) {
      return res.status(400).json({
        status: status.BAD_REQUEST,
        message: "Credential is Invalid",
        datetime: formatDateSystem(),
      });
    }

    return next();
  } catch (error) {
    Logging(error)

    return res.status(401).json({
      status: status.BAD_REQUEST,
      message: "Unauthorized",
      datetime: formatDateSystem(),
    });
  }
};

export const validateAccessToken = async (req, res, next) => {
  const header = req.headers["authorization"];
  const token = header && header.split(" ")[1];

  if (process.env.APP_DEBUG && process.env.APP_DEBUG == 'true' && req.headers["x-uniqueid"]) {
    return next()
  }

  if (!header || (header && !token && header.startsWith("Bearer "))) {
    return res.status(400).json({
      status: status.BAD_REQUEST,
      message: "No token provided or invalid format",
      datetime: formatDateSystem(),
    });
  }

  try {
    const oToken = await DB("access_token")
      .select("ID as Id")
      .where({
        Token: token,
        Expired: "0",
      })
      .first();

    if (!oToken) {
      return res.status(400).json({
        status: status.BAD_REQUEST,
        message: "Token is expired or invalid",
        datetime: formatDateSystem(),
      });
    }

    await DB("access_token").where({ ID: oToken.Id }).update({ Expired: "1" });

    return next();
  } catch (error) {
    Logging(error)

    res.status(401).json({
      status: status.BAD_REQUEST,
      message: "Unauthorized",
      datetime: formatDateSystem(),
    });
  }
};
