import "dotenv/config";

import express from "express";
import {
    datetime,
    formatDateSystem,
    hashEquals,
    hmac,
    status,
} from "../../components/tools/general.js";
import { Logging, validatePayload } from "../../components/tools/servertool.js";
import Joi from "joi";
import DB from "../../../../core/config/knex.js";

const router = express.Router();

router.post("/", async (req, res) => {
    const { body } = req;
    const oPayload = body;

    try {
        if (!oPayload || Object.keys(oPayload).length < 1) {
            return res.status(400).json({
                status: status.BAD_REQUEST,
                message: "Invalid request body",
                datetime: formatDateSystem(),
            });
        }

        const cValidation = await validatePayload({
            UniqueId: Joi.string().required().label("UniqueId"),
            Menu: Joi.string().required().label("Menu"),
        }, {
            "string.base": "{#label} harus berupa string",
            "string.empty": "{#label} tidak boleh kosong",
            "any.required": "{#label} wajib diisi",
        }, oPayload);


        if (cValidation) {
            const oResult = {
                status: status.BAD_REQUEST,
                message: cValidation || "Terdapat kesalahan pada data anda",
                datetime: formatDateSystem(),
            }

            Logging(null, {
                file: "user_navigation_insert.js",
                func: "insert",
                request: oPayload,
                response: oResult,
                user: req.auth.username || ""
            })

            return res.status(422).json(oResult);
        }

        await DB('user_navigation')
            .insert({
                UniqueId: oPayload.UniqueId,
                Menu: oPayload.Menu,
                CreatedAt: formatDateSystem(),
                UpdatedAt: formatDateSystem()
            })
            .onConflict('UniqueId')
            .merge({
                Menu: oPayload.Menu,
                UpdatedAt: formatDateSystem()
            });

        return res.status(200).json({
            status: status.SUKSES,
            message: "Data disimpan",
            datetime: formatDateSystem(),
        })

    } catch (error) {
        const oResult = {
            status: status.BAD_REQUEST,
            message: "Sistem sedang maintenance harap tunggu sebentar",
            datetime: formatDateSystem(),
        }

        Logging(error, {
            file: "user_navigation_insert.js",
            func: "insert",
            request: oPayload,
            response: oResult,
            user: req?.auth?.username || ""
        })

        return res.status(500).json(oResult);
    }
});

export default router;
