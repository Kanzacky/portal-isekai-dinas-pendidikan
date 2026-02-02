import DB from "../core/config/knex.js.js";
import { formatDateSystem, status } from "../tools/general.js";
import { Logging } from "../tools/servertool.js";

// export const ipWhitelistMiddleware = async (req, res, next) => {
//   try {
//     const user = req.user;
//     if (!user) {
//       return res.status(401).json({
//         status: status.BAD_REQUEST,
//         message: "Missing user request",
//         datetime: formatDateSystem(),
//       });
//     }

//     const ip = req.ip || req.connection.remoteAddress;
//     const cleanIp = ip.replace("::ffff:", "");

//     const [record] = await DB("client_credential").select("IP");

// if (!record) {
//   return res.status(401).json({
//     status: status.BAD_REQUEST,
//     message: "IP Whitelist not found",
//     datetime: formatDateSystem(),
//   });
// }

//     const allowIP = JSON.parse(record.IP);
//     if (!allowIP.includes(cleanIp)) {
//       return res.status(401).json({
//         status: status.BAD_REQUEST,
//         message: "IP not allowed",
//         datetime: formatDateSystem(),
//       });
//     }

//     next();
//   } catch (error) {
//     await DB("error_log").insert({
//       Url: req.originalUrl,
//       Method: req.method,
//       Status: 500,
//       Error: error.message,
//       Stack: error.stack,
//       ErrorResponse,
//       CreatedAt: formatDateSystem(),
//       UpdatedAt: formatDateSystem(),
//     });

//     return res.status(500).json({
//       status: status.BAD_REQUEST,
//       message: "Internal server error",
//       datetime: formatDateSystem(),
//     });
//   }
// };

const getClientIp = (req) => {
  const forwarded = req.headers["x-forwarded-for"]?.split(",")[0]?.trim();
  const rawIp = forwarded || req.socket.remoteAddress || "";

  return rawIp.replace(/^::ffff:/, "");
};

export const ipWhitelistMiddleware = async (req, res, next) => {
  try {
    const clientIp = getClientIp(req);
    console.log("Client IP:", clientIp);

    const ipRecords = await DB("client_credential").select("IP");

    const allowedIp = (ipRecords || [])
      .flatMap(row => {
        if (!row?.IP) return [];
        return row.IP.split(',').map(v => v.trim()).filter(Boolean);
      });

    console.log("Allowed IPs:", allowedIp);

    const isAllowed = allowedIp.includes(clientIp);

    if (!isAllowed) {
      return res.status(403).json({
        status: status.BAD_REQUEST,
        message: "Access denied: IP not allowed",
        clientIp,
        datetime: formatDateSystem(),
      });
    }


    next();
  } catch (error) {
    Logging(error)

    return res.status(500).json({
      status: status.BAD_REQUEST,
      message: "Internal server error",
      datetime: formatDateSystem(),
    });
  }
};
