import { SignJWT } from "jose";
import {
  formatDateSystem,
  hmac,
  sanitizeString,
  status,
} from "./general.js";
import axios from "axios";

import DB from "../../../../core/config/knex.js";
import Joi from "joi";

export const getLastKodeRegister = async (key, len) => {
  const kode = key.replace(/\s/g, "");
  let record = await DB("nomor_faktur").where({ Kode: kode }).first();

  let id = 1;

  if (record) {
    id = record.Id + 1;
  } else {
    await DB("nomor_faktur").insert({ Kode: kode, Id: 0 });
    record = await DB("nomor_faktur").where({ Kode: kode }).first();
    if (record) {
      id = record.Id + 1;
    }
  }

  const padded = String(id).padStart(len, "0");
  return padded;
};

export const getLastFaktur = async (key, len) => {
  const tgl = new Date().toISOString().slice(0, 10).replace(/-/g, "");
  const tahunBulan = tgl.slice(0, 6);
  const faktur = await getLastKodeRegister(key + tahunBulan, len);
  const kode = key.replace(/\s/g, "") + tgl;
  return kode + faktur;
};

export const setLastFaktur = async (kode) => {
  const tahunBulan = new Date().toISOString().slice(0, 7).replace(/-/g, "");
  const fullKode = kode + tahunBulan;

  const record = await DB("nomor_faktur").where({ Kode: fullKode }).first();

  if (record) {
    await DB("nomor_faktur")
      .where({ Kode: fullKode })
      .update({ Id: record.Id + 1 });
  } else {
    await DB("nomor_faktur").insert({ Kode: fullKode, Id: 1 });
  }
};

export const setLastKodeRegister = async (kode) => {
  const vaData = await DB("nomor_faktur")
    .select("Kode", "Id")
    .where("Kode", kode)
    .first();

  if (vaData) {
    const nId = vaData.Id + 1;
    await DB("nomor_faktur").where("Kode", kode).update({ Id: nId });
  } else {
    const nId = 1;
    await DB("nomor_faktur").insert({ Kode: kode, Id: nId });
  }
};



export const getBalance = async (req, oJson, endpoint, baseURL) => {
  const { data: oToken } = await getToken(req);

  const oPayloadEncoded = await encodePayload(
    req,
    oJson,
    endpoint,
    oToken.access_token
  );

  const cSignature = await getSignature(
    req,
    oPayloadEncoded,
    oToken.access_token,
    endpoint
  );

  const { data: oBalance } = await axios.post(
    baseURL + endpoint,
    {
      orderdata: oPayloadEncoded,
    },
    {
      headers: {
        Authorization: `Bearer ${oToken.access_token}`,
        "X-Timestamp": formatDateSystem(),
        "X-Signature": cSignature,
      },
    }
  );

  return oBalance;
};

export const Logging = async (
  error = null,
  { file = "", func = "", request = "", response = "", user = "" } = {}
) => {
  let fileName = file;
  let functionName = func;
  let stack = "";
  let message = response;

  console.log(error);

  if (error) {
    const stackLines = (error.stack || "").split("\n");
    const callerLine = stackLines[1] || "";

    const match =
      callerLine.match(/at\s+(.*?)\s+\((.*?):(\d+):(\d+)\)/) ||
      callerLine.match(/at\s+(.*?):(\d+):(\d+)/);

    if (match) {
      functionName = functionName || match[1] || "";
      fileName = fileName || match[2] || match[1];
    }

    stack = error.stack;
    message = response || error.message;
  }

  await DB("log").insert({
    Tgl: formatDateSystem(),
    Controller: fileName || "",
    Function: functionName || "",
    Request: request || "",
    Response: message || "",
    Stack: stack || "",
    User: user || "",
    DateTime: formatDateSystem(),
  });
};

export const validatePayload = async (
  oValidation,
  oMessage,
  oPayload,
  {
    uniqueField = [],
    table = "",
    excludedField = "",
    allowUnknown = false,
  } = {}
) => {
  try {
    for (const k of Object.keys(oPayload)) {
      if (typeof oPayload[k] === "string") {
        const { dangerous } = sanitizeString(oPayload[k], { mode: "detect" });
        if (dangerous) {
          return `Field ${k} mengandung konten berbahaya`;
        }
      }
    }

    const oSchema = Joi.object(oValidation).messages(oMessage);
    await oSchema.validateAsync(oPayload, { abortEarly: true, allowUnknown });

    if (uniqueField.length > 0 && table) {
      const normalizedPayload = Object.fromEntries(
        Object.entries(oPayload).map(([k, v]) => [k.toLowerCase(), v])
      );

      for (const field of uniqueField) {
        const value = normalizedPayload[field.toLowerCase()];
        if (value !== undefined) {
          let query;
          if (typeof value === "number" || /^\d+$/.test(value)) {
            query = DB(table).where(field, value);
          } else {
            query = DB(table).whereILike(field, value);
          }

          if (excludedField) {
            query = query.andWhereNot(
              excludedField,
              normalizedPayload[excludedField.toLowerCase()]
            );
          }

          const exists = await query.first();
          if (exists) {
            return `Data dengan ${field} tersebut sudah digunakan`;
          }
        }
      }
    }

    return null;
  } catch (err) {
    console.log(err);
    const rawMessage = err?.details?.[0]?.message || "Invalid payload";
    const cleanMessage = rawMessage.replace(/"/g, "");
    return cleanMessage;
  }
};
