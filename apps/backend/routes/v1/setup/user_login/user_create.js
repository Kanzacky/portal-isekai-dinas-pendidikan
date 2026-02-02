import express from "express";
import { datetime, formatDateSystem, hmac, status } from "../../components/tools/general.js";
import Joi from "joi";
import DB from "../../../../core/config/knex.js";
import { Logging, validatePayload } from "../../components/tools/servertool.js";
import { jwtVerify } from "jose";

const router = express.Router();

router.post("/", async (req, res) => {
  const { body: oPayload } = req;
  const username = req?.auth?.username || "";


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
          .pattern(new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^a-zA-Z0-9]).+$"))
          .required()
          .label("Password"),
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
      allowUnknown: true
    });

    if (cValidation) {
      const oResult = {
        status: status.BAD_REQUEST,
        message: cValidation || "Terdapat kesalahan pada data anda",
        datetime: datetime(),
      };

      Logging(null, {
        file: "user_create.js",
        func: "create",
        request: oPayload,
        response: oResult,
        user: username,
      });

      return res.status(422).json(oResult);
    }

    const lastUser = await DB("user_credential")
      .select("UniqueId")
      .orderBy("UniqueId", "desc")
      .first();

    let cUniqueId = "USR000001";
    if (lastUser && lastUser.UniqueId) {
      const lastNumber = parseInt(lastUser.UniqueId.replace("USR", ""), 10);
      const nextNumber = lastNumber + 1;
      cUniqueId = "USR" + nextNumber.toString().padStart(6, "0");
    }

    const oData = {
      Fullname: oPayload.Fullname,
      Username: oPayload.Username,
      Telp: oPayload.Telp,
      Role: oPayload.Role,
      Status: oPayload.Status,
      Divisioncode: oPayload.Divisioncode,
      UniqueId: cUniqueId,
      CreatedAt: formatDateSystem(),
      UpdatedAt: formatDateSystem(),
    };

    if (oPayload.Password) {

      const cPassword =
        process.env.USER_KEY + cUniqueId + oPayload.Password;

      const secret = process.env.USER_SECRET;
      oData['Password'] = hmac(cPassword, secret, "sha512")

    }

    let cRole = oPayload.Role;

    if (oPayload.Role === 'superadmin' || oPayload.Role === 'admin') {
        cRole = 'master'; 
    } else if (oPayload.Role === 'guru') {
        cRole = 'guru';   
    } else if (oPayload.Role === 'siswa') {
        cRole = 'siswa';  
    } else if (oPayload.Role === 'masyarakat') {
        cRole = 'masyarakat';
    }

    const oNavigation = await DB("mst_navigation")
      .select("Menu as menu")
      .where("Role", cRole)
      .first();

    if (!oNavigation && !oNavigation?.menu) {
      return res.status(400).json({
        status: status.GAGAL,
        message: "User tidak memiliki credential terdaftar di database",
        datetime: formatDateSystem(),
      });
    }

    await DB('user_navigation').insert({
      Menu: oNavigation.menu,
      UniqueId: cUniqueId,
      CreatedAt: formatDateSystem(),
      UpdatedAt: formatDateSystem(),
    })

    await DB("user_credential").insert(oData);

    return res.status(200).json({
      status: status.SUKSES,
      message: "Data berhasil dibuat",
      datetime: formatDateSystem(),
    });
  } catch (error) {
    const oResult = {
      status: status.BAD_REQUEST,
      message: "Sistem sedang maintenance harap tunggu sebentar",
      datetime: datetime(),
    };

    Logging(error, {
      file: "user_create.js",
      func: "create",
      request: body,
      response: oResult,
      user: username,
    });

    return res.status(500).json(oResult);
  }
});

export default router;
