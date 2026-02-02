import express from "express";

const router = express.Router();
import getLastFaktur from "./endpoint/get_last_faktur.js";

router.use("/get-last-faktur", getLastFaktur);

export default router;
