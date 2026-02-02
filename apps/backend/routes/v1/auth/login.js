import "dotenv/config";

import express from "express";
import {
  datetime,
  formatDateSystem,
  hashEquals,
  hmac,
  status,
} from "../components/tools/general.js";
import { Logging, validatePayload } from "../components/tools/servertool.js";
import Joi from "joi";
import DB from "../../../core/config/knex.js";
import { jwtVerify, SignJWT } from "jose";

const router = express.Router();

router.post("/", async (req, res) => {
  const { body } = req;

  const cCredential = req.headers["x-credential"];
  const cAuth = req.headers["authorization"];
  const cForwardedFor = req.headers["x-forwarded-for"];
  const cIp = cForwardedFor ? cForwardedFor.split(",")[0].trim() : "";
  const cEndpoint = req.originalUrl;

  let oPayload = body;

  try {
    if (!oPayload || Object.keys(oPayload).length < 1) {
      return res.status(400).json({
        status: status.BAD_REQUEST,
        message: "Invalid request body",
        datetime: formatDateSystem(),
      });
    }

    const cValidation = await validatePayload(
      {
        username: Joi.string().required().label("Username"),
        password: Joi.string().required().label("Password"),
      },
      {
        "string.base": "{#label} harus berupa string",
        "string.empty": "{#label} tidak boleh kosong",
        "any.required": "{#label} wajib diisi",
      },
      oPayload
    );

    if (cValidation) {
      const oResult = {
        status: status.BAD_REQUEST,
        message: cValidation || "Terdapat kesalahan pada data anda",
        datetime: formatDateSystem(),
      };

      Logging(null, {
        file: "login.js",
        func: "login",
        request: oPayload,
        response: oResult,
        user: oPayload?.username || "",
      });

      return res.status(422).json(oResult);
    }

    const oUser = await DB("user_credential")
      .where("Username", oPayload.username)
      .select(
        "UniqueId",
        "Password",
        "Username",
        "Role",
        "Fullname",
        "Status",
        "Telp",
        "CreatedAt"
      )
      .first();

    if (oUser) {
      const secret = process.env.USER_SECRET;
      const cPassword =
        process.env.USER_KEY + oUser.UniqueId + oPayload.password;

      const computedHash = hmac(cPassword, secret, "sha512");

      if (!hashEquals(computedHash, oUser.Password)) {
        return res.status(400).json({
          status: status.GAGAL,
          message: "Password salah",
          datetime: formatDateSystem(),
        });
      }

     

      const dDatetime = formatDateSystem(
        oUser.CreatedAt,
        "yyyy-MM-dd HH:mm:ss"
      );
      // const cPassword =
      // process.env.USER_KEY + oUser.UniqueId + oPayload.password;
      

      if (!hashEquals(hmac(cPassword, secret, "sha512"), oUser.Password)) {
        return res.status(400).json({
          status: status.GAGAL,
          message: "Password salah",
          datetime: formatDateSystem(),
        });
      }

      if (oUser.Status != "1") {
        return res.status(400).json({
          status: status.GAGAL,
          message: "User belum aktif",
          datetime: formatDateSystem(),
        });
      }

      const oNavigation = await DB("user_navigation")
        .select("Menu as menu")
        .where("UniqueId", oUser.UniqueId)
        .first();

      if (!oNavigation && !oNavigation?.menu) {
        return res.status(400).json({
          status: status.GAGAL,
          message: "User tidak memiliki credential terdaftar di database",
          datetime: formatDateSystem(),
        });
      }

      const credential = {
        uniqueId: oUser.UniqueId,
        username: oUser.Username,
        fullname: oUser.Fullname,
        role: oUser.Role,
      };


      const secretKey = new TextEncoder().encode(process.env.USER_KEY);

      const jwtCredential = await new SignJWT(credential)
        .setProtectedHeader({ alg: "HS512" })
        .sign(secretKey);

      return res.status(200).json({
        status: status.SUKSES,
        message: "Login Berhasil",
        datetime: formatDateSystem(),
        credential: jwtCredential,
      });
    }

    return res.status(400).json({
      status: status.GAGAL,
      message: "Username tidak ditemukan",
      datetime: formatDateSystem(),
    });
  } catch (error) {
    const oResult = {
      status: status.BAD_REQUEST,
      message: "Sistem sedang maintenance harap tunggu sebentar",
      datetime: formatDateSystem(),
    };

    Logging(error, {
      file: "login.js",
      func: "login",
      request: oPayload,
      response: oResult,
      user: oPayload?.username || "",
    });

    return res.status(500).json(oResult);
  }
});

export default router;
