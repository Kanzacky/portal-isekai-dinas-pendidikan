import express from "express";
import DB from "../../../../core/config/knex.js";
import { datetime, formatDateSystem, status } from "../../components/tools/general.js";
import { Logging, validatePayload } from "../../components/tools/servertool.js";
import Joi from "joi";

const router = express.Router();

router.post("/", async (req, res) => {
    const { body } = req;
    const oPayload = body;
    const username = req?.auth?.username || "";

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
                Role: Joi.string().required().label("Role"),
            },
            {
                "string.base": "{#label} harus berupa string",
                "string.empty": "{#label} tidak boleh kosong",
                "any.required": "{#label} wajib diisi",
            },
            oPayload, {
        });


        if (cValidation) {
            const oResult = {
                status: status.BAD_REQUEST,
                message: cValidation || "Terdapat kesalahan pada data anda",
                datetime: datetime(),
            };

            Logging(null, {
                file: "mst_navigation_data.js",
                func: "get",
                request: oPayload,
                response: oResult,
                user: username,
            });

            return res.status(422).json(oResult);
        }


        const oData = await DB("mst_navigation")
            .select('Menu as menu')
            .where('Role', oPayload?.Role)

        if (!oData) {
            const oResult = {
                status: status.GAGAL,
                message: "Menu tidak ditemukan",
                datetime: datetime(),
            };

            Logging(error, {
                file: "mst_navigation_data.js",
                func: "get",
                request: oPayload,
                response: oResult,
                user: username,
            });

            return res.status(400).json(oResult);
        }

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
            datetime: datetime(),
        };

        Logging(error, {
            file: "mst_navigation_data.js",
            func: "get",
            request: oPayload,
            response: oResult,
            user: username,
        });

        return res.status(500).json(oResult);
    }
});

export default router;
