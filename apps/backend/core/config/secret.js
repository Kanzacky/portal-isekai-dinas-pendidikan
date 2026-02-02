import "dotenv/config";
import { formatDateSystem } from "../../routes/v1/components/tools/general.js";

export const getClientKey = () => `${process.env.USER_KEY}#${formatDateSystem(new Date(), "yyyyMMdd")}#Key`;
export const getClientPassKey = () => `${process.env.USER_PAS_KEY}#${formatDateSystem(new Date(), "yyyyMMdd")}#PassKey`;
export const getClientSecret = () => `${process.env.USER_SECRET}#${formatDateSystem(new Date(), "yyyyMMdd")}#SecretKey`;

