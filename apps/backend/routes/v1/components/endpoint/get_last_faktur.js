import express from "express";
import { formatDateSystem, status } from "../tools/general.js";
import {
  getLastFaktur,
  Logging,
  validatePayload,
} from "../tools/servertool.js";
import Joi from "joi";

const router = express.Router();

router.post("/", async (req, res) => {
  const { body } = req;
  const username = req?.auth?.username || "";
  const oPayload = body;

  try {
    // Validasi
    if (!oPayload || Object.keys(oPayload).length < 1) {
      return res.status(400).json({
        status: status.BAD_REQUEST,
        message: "Invalid request body",
        datetime: formatDateSystem(),
      });
    }

    const cValidation = await validatePayload(
      {
        Key: Joi.string().required().label("Key"),
        Len: Joi.number().required().label("Len"),
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
      oPayload,
      {
        uniqueField: ["Code"],
        table: "nomor_faktur",
      }
    );

    if (cValidation) {
      const oResult = {
        status: status.BAD_REQUEST,
        message: cValidation || "Terdapat kesalahan pada data anda",
        datetime: formatDateSystem(),
      };

      Logging(null, {
        file: "get_last_faktur.js",
        func: "get",
        request: oPayload,
        response: oResult,
        user: username,
      });

      return res.status(422).json(oResult);
    }

    const oData = await getLastFaktur(oPayload.Key, oPayload.Len, req);

    return res.status(200).json({
      status: status.SUKSES,
      message: "Data ditemukan",
      datetime: formatDateSystem(),
      data: oData,
    });
  } catch (error) {
    const oResult = {
      status: status.BAD_REQUEST,
      message: "Sistem sedang maintenance harap tunggu sebentar",
      datetime: formatDateSystem(),
    };

    Logging(error, {
      file: "get_last_faktur.js",
      func: "get",
      request: oPayload,
      response: oResult,
      user: username,
    });

    return res.status(500).json(oResult);
  }
});

export default router;
