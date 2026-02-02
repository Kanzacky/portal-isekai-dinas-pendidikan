import cors from "cors";
import express from "express";


import APIV1 from "./routes/v1/index.js";

import { formatDateSystem } from "./routes/v1/components/tools/general.js";
import { validateTimestamp } from "./middleware/validate_header.js";
import { useragentMiddleware } from "./middleware/allow_user_agent.js";
import secureHeader from "./middleware/secure_header.js";
import Logger from "./middleware/logger.js";

const app = express();

const allowedOrigins = [
  process.env.ORIGIN1,
];

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "X-Timestamp",
      "X-Signature",
      "X-Credential",
    ],
    methods: ["GET", "POST"],
    optionSuccessStatus: 200,
  })
);

// app.use(logger("dev"));
app.use(Logger);
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ limit: "10mb", extended: true }));



// useragentMiddleware,
// Middleware global untuk semua api
app.use(
  "/api/v1",
  [secureHeader, validateTimestamp],
  APIV1
);

app.use('/uploads', express.static('public/uploads'))

app.use((req, res, next) => {
  console.log(req.url)
  return res.status(404).json({
    status: "404",
    message: "Endpoint tidak ditemukan",
    datetime: formatDateSystem(),
  });
});




export default app;
