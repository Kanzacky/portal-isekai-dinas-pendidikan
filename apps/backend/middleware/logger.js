import DB from "../core/config/knex.js";
import { formatDateSystem } from "../routes/v1/components/tools/general.js";

const Logger = async (err, req, res, next) => {
  const { method, url, body, user } = req;

  res.on("finish", async () => {
    const message = err?.message || res.locals?.logMessage || "";
    const stack = err?.stack || "";

    let fileName = "";
    let functionName = "";
    if (err && err.stack) {
      const stackLines = err.stack.split("\n");
      const callerLine = stackLines[1] || "";
      const match =
        callerLine.match(/at\s+(.*?)\s+\((.*?):(\d+):(\d+)\)/) ||
        callerLine.match(/at\s+(.*?):(\d+):(\d+)/);
      if (match) {
        functionName = match[1] || "";
        fileName = match[2] || match[1];
      }
    }

    await DB("log").insert({
      Tgl: formatDateSystem(),
      Controller: fileName,
      Function: functionName,
      Request: JSON.stringify(body || {}),
      Response: message,
      Stack: stack,
      User: user?.id || "",
      Datetime: formatDateSystem(),
    });
  });

  next(err);
};

export default Logger;
