import "dotenv/config";
import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST || "",
  port: process.env.MAIL_PORT || 465,
  secure: true,
  auth: {
    user: process.env.MAIL_USER || "",
    pass: process.env.MAIL_PASS || "",
  },
});
