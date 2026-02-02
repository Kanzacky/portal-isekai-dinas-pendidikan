import express from "express";
import { datetime, formatDateSystem, hmac, status } from "../../components/tools/general.js";
import Joi from "joi";
import DB from "../../../../core/config/knex.js";
import { Logging, validatePayload } from "../../components/tools/servertool.js";
import { jwtVerify } from "jose";

const router = express.Router();

router.post("/", async (req, res) => {
  const { body } = req;
  const oPayload = body;
  const username = req?.auth?.username || "";
  const cCredential = req.headers["x-credential"];
  const cAuth = req.headers["authorization"];
  const cEndpoint = req.originalUrl;


  try {

    const oPayload = body

    // Validasi body kosong
    if (!oPayload || Object.keys(oPayload).length < 1) {
      return res.status(400).json({
        status: status.BAD_REQUEST,
        message: "Invalid request body",
        datetime: formatDateSystem(),
      });
    }

    const cValidation = await validatePayload(
      {
        UniqueId: Joi.string().required().label("UniqueId"),
        Fullname: Joi.string().max(100).required().label("Fullname"),
        Username: Joi.string().max(100).required().label("Username"),
        Telp: Joi.string()
          .pattern(/^[0-9]+$/)
          .max(13)
          .required()
          .label("Telp"),
        Role: Joi.string().required().label("Role"),
        Password: Joi.string()
          .min(8)
          .pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^a-zA-Z0-9]).+$/)
          .label("Password")
          .optional()
          .allow(''),
        Status: Joi.string().required().label("Status"),
      },
      {
        "string.base": "{#label} harus berupa string",
        "string.empty": "{#label} tidak boleh kosong",
        "string.max": "{#label} tidak boleh lebih dari {#limit} karakter",
        "string.min": "{#label} minimal {#limit} karakter",
        "string.pattern.base": "{#label} memiliki format yang salah",
        "any.required": "{#label} wajib diisi",
        "number.base": "{#label} harus berupa angka",
      },
      oPayload, {
      uniqueField: ['Username', 'Telp'],
      table: "user_credential",
      excludedField: "UniqueId",
      allowUnknown: true

    });

    if (cValidation) {
      const oResult = {
        status: status.BAD_REQUEST,
        message: cValidation || "Terdapat kesalahan pada data anda",
        datetime: datetime(),
      };

      Logging(null, {
        file: "user_update.js",
        func: "update",
        request: oPayload,
        response: oResult,
        user: username,
      });

      return res.status(422).json(oResult);
    }

    // Masukkan data ke dalam tabel
    const oData = {
      Fullname: oPayload.Fullname,
      Username: oPayload.Username,
      Role: oPayload.Role,
      Status: oPayload.Status,
      DivisionCode: oPayload.DivisionCode,
      UpdatedAt: formatDateSystem(),
    };



    if (oPayload.Password) {

      const oUser = await DB("user_credential")
        .where('UniqueId', oPayload.UniqueId)
        .first()

      const cPassword =
        process.env.USER_KEY + oPayload.UniqueId + oPayload.Password;

      const secret = process.env.USER_SECRET;
      oData['Password'] = hmac(cPassword, secret, "sha512")

    }

    await DB("user_credential")
      .where('UniqueId', oPayload.UniqueId)
      .update(oData);

    return res.status(200).json({
      status: status.SUKSES,
      message: "Data berhasil diupdate",
      datetime: formatDateSystem(),
    });

  } catch (error) {
    const oResult = {
      status: status.BAD_REQUEST,
      message: "Sistem sedang maintenance harap tunggu sebentar",
      datetime: datetime(),
    };

    Logging(error, {
      file: "user_update.js",
      func: "update",
      request: oPayload,
      response: oResult,
      user: username,
    });

    return res.status(500).json(oResult);
  }
});

export default router;
