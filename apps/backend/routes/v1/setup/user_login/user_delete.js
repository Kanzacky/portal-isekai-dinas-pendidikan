import express from "express";
import { datetime, formatDateSystem, status } from "../../components/tools/general.js";
import Joi from "joi";
import DB from "../../../../core/config/knex.js";
import { Logging, validatePayload } from "../../components/tools/servertool.js";

const router = express.Router();

router.post("/", async (req, res) => {
  const { body } = req;
  const oPayload = body;
  const username = req?.auth?.username || "";

  try {
    // Validasi body kosong
    if (!oPayload || Object.keys(oPayload).length < 1) {
      return res.status(400).json({
        status: status.BAD_REQUEST,
        message: "Invalid request body",
        datetime: formatDateSystem(),
      });
    }

    // Validasi schema → hanya butuh kode
    const cValidation = await validatePayload(
      {
        UniqueId: Joi.array().required().label("UniqueId"),
      },
      {
        "string.base": "{#label} harus berupa string",
        "string.empty": "{#label} tidak boleh kosong",
        "string.max": "{#label} tidak boleh lebih dari {#limit} karakter",
        "any.required": "{#label} wajib diisi",
      },
      oPayload
    );

    if (cValidation) {
      const oResult = {
        status: status.BAD_REQUEST,
        message: cValidation || "Terdapat kesalahan pada data anda",
        datetime: datetime(),
      };

      Logging(null, {
        file: "user_delete.js",
        func: "delete",
        request: oPayload,
        response: oResult,
        user: username,
      });

      return res.status(422).json(oResult);
    }

    // Hapus data berdasarkan kode
    const exists = await DB("user_credential")
      .whereIn('UniqueId', oPayload.UniqueId)
      .del();

    if (!exists) {
      return res.status(404).json({
        status: status.NOT_FOUND,
        message: "Data dengan kode tersebut tidak ditemukan",
        datetime: formatDateSystem(),
      });
    } 

      await DB("user_navigation")
        .whereIn('UniqueId', oPayload.UniqueId)
        .del();

    return res.status(200).json({
      status: status.SUKSES,
      message: "Data berhasil dihapus",
      datetime: formatDateSystem(),
    });
  } catch (error) {
    const oResult = {
      status: status.BAD_REQUEST,
      message: "Sistem sedang maintenance harap tunggu sebentar",
      datetime: datetime(),
    };

    Logging(error, {
      file: "user_delete.js",
      func: "delete",
      request: oPayload,
      response: oResult,
      user: username,
    });

    return res.status(500).json(oResult);
  }
});

export default router;
