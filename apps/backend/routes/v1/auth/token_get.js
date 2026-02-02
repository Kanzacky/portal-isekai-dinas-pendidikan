import "dotenv/config";
import express from "express";
import crypto from "crypto";
import {
  datetime,
  datetimeIso,
  status,
  uniqueId,
} from "../components/tools/general.js";
import { getClientSecret } from "../../../core/config/secret.js";
import DB from "../../../core/config/knex.js";
import { Logging } from "../components/tools/servertool.js";

const router = express.Router();

//get Token
router.get("/", async (req, res) => {
  try {
    const accessToken = crypto.randomBytes(32).toString("hex");

    await DB("access_token").insert({
      Token: accessToken,
      Expired: "0",
      Datetime: datetimeIso(),
    });

    return res.status(200).json({
      status: status.SUKSES,
      message: "Token created",
      datetime: datetime(),
      access_token: accessToken,
      token_type: "Bearer",
    });
  } catch (error) {
    console.log(error);

    Logging(error)

    return res.status(404).json({
      status: status.BAD_REQUEST,
      message: "Terjadi kesalahan pada sistem harap coba lagi nanti",
      datetime: datetime(),
    });
  }
});

export default router;
