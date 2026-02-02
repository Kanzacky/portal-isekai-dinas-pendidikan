import express from "express";
import Joi from "joi";
import DB from "../../../../core/config/knex.js";
import { Logging, validatePayload } from "../../components/tools/servertool.js";
import { formatDateSystem, status } from "../../components/tools/general.js";
import multer from "multer";
import fs from "fs";
import path from "path";

const router = express.Router();

const upload = multer({
    dest: "temp/",
    limits: { fileSize: 15 * 1024 * 1024 }, // 15MB per file
});

router.post("/", upload.any(), async (req, res) => {
    const oPayload = req.body;
    const files = req.files
    const username = req?.auth?.username || "";

    try {
        console.log(oPayload)
        const cValidation = await validatePayload(
            {
                Kode: Joi.string().required().label("Kode"),
                Keterangan: Joi.string().required().label("Keterangan"),
            },
            {
                "any.required": "{#label} wajib diisi",
                "array.base": "{#label} harus berupa array",
                "string.base": "{#label} harus berupa string",
                "string.empty": "{#label} tidak boleh kosong",
            },
            oPayload
        );

        if (cValidation) {
            const oResult = {
                status: status.GAGAL,
                message: cValidation,
                datetime: formatDateSystem(),
            };
            Logging(null, {
                file: "info_perusahaan_create.js",
                func: "create",
                request: oPayload,
                response: oResult,
                user: username,
            });
            return res.status(422).json(oResult);
        }

        let { Kode, Keterangan } = oPayload;


        Kode = JSON.parse(Kode);
        Keterangan = JSON.parse(Keterangan);
        console.log(files)

        if (Kode.length !== Keterangan.length) {
            const oResult = {
                status: status.BAD_REQUEST,
                message: "Jumlah data kode dan keterangan tidak sama.",
                datetime: formatDateSystem(),
            };
            Logging(null, {
                file: "info_perusahaan_create.js",
                func: "create",
                request: oPayload,
                response: oResult,
                user: username,
            });
            return res.status(422).json(oResult);
        }

        const oldData = await DB("config")
            .select("Kode", "Keterangan")
            .where("Kode", "msLogoPerusahaan")
            .first();

        let filename = oldData?.Keterangan || '';
        const file = files[0];

        if (file) {
            const uploadDir = path.join(process.cwd(), "public", "uploads", "config", "logo_perusahaan");
            if (!fs.existsSync(uploadDir)) {
                fs.mkdirSync(uploadDir, { recursive: true });
            }

            const ext = path.extname(file.originalname) || mimeToExt[file.mimetype] || "";
            filename = `logo_perusahaan${ext}`;
            const filepath = path.join(uploadDir, filename);

            // hapus file lama kalau ada
            const oldPath = path.join(uploadDir, oldData?.Keterangan || "");
            if (oldData?.Keterangan && fs.existsSync(oldPath)) {
                fs.unlinkSync(oldPath);
            }

            fs.renameSync(file.path, filepath);
        }

        Kode.push("msLogoPerusahaan")
        Keterangan.push(filename)

        for (let i = 0; i < Kode.length; i++) {
            const cKode = Kode[i];
            const cKeterangan = Keterangan[i] ?? null;

            const existing = await DB("config")
                .select("Keterangan")
                .where("Kode", cKode)
                .first();

            if (existing) {
                if (existing.kode !== cKode) {
                    await DB("config")
                        .where("Kode", cKode)
                        .update({ Keterangan: cKeterangan });
                }
            } else {
                await DB("config").insert({ Kode: cKode, Keterangan: cKeterangan });
            }
        }

        const oResult = {
            status: status.SUKSES,
            message: "Berhasil Menambahkan Data",
            datetime: formatDateSystem(),
        };

        return res.status(200).json(oResult);

    } catch (error) {
        console.log(error)
        const oResult = {
            status: status.BAD_REQUEST,
            message: "Sistem sedang maintenance harap tunggu sebentar",
            datetime: formatDateSystem(),

        };
        Logging(error, {
            file: "info_perusahaan_create.js",
            func: "create",
            request: oPayload,
            response: oResult,
            user: username,
        });

        return res.status(500).json(oResult);
    }
});

export default router;
