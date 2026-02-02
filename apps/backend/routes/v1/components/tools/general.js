import crypto, { publicEncrypt, sign } from "crypto";
import path from "path";
import fs from "fs";
import * as jose from "jose";
import { fileURLToPath } from "url";
import { format, parse } from "date-fns";
import { formatInTimeZone } from "date-fns-tz";

const __filename = fileURLToPath(import.meta.url);

export const __dirname = path.dirname(__filename);

export const timeZoneMap = {
  WIB: "Asia/Jakarta",
  WITA: "Asia/Makassar",
  WIT: "Asia/Jayapura",
  UTC: "UTC",
};


export const status = {
  SUKSES: "00",
  GAGAL: "01",
  PENDING: "02",
  NOT_FOUND: "03",
  BAD_REQUEST: "99",
};

export const parseYmdHis = (input) => {
  if (!/^\d{14}$/.test(input)) return null; // invalid format

  const yyyy = input.slice(0, 4);
  const MM = input.slice(4, 6);
  const dd = input.slice(6, 8);
  const HH = input.slice(8, 10);
  const mm = input.slice(10, 12);
  const ss = input.slice(12, 14);

  return new Date(`${yyyy}-${MM}-${dd}T${HH}:${mm}:${ss}`);
}


export const formatDateSystem = (
  date = new Date(),
  formatStr = "yyyy-MM-dd HH:mm:ss",
  timeZoneKey
) => {
  const dateObj = typeof date === "string" || typeof date === "number"
    ? new Date(date)
    : date;

  if (timeZoneKey) {
    const tz = timeZoneMap[timeZoneKey] || "Asia/Jakarta";
    return formatInTimeZone(dateObj, tz, formatStr);
  } else {
    return format(dateObj, formatStr);
  }
}


export function datetime() {
  const now = new Date();
  const datetime =
    now.getFullYear() +
    String(now.getMonth() + 1).padStart(2, "0") +
    String(now.getDate()).padStart(2, "0") +
    String(now.getHours()).padStart(2, "0") +
    String(now.getMinutes()).padStart(2, "0") +
    String(now.getSeconds()).padStart(2, "0");

  return datetime;
}

export function datetimeIso(now = "") {
  if (!now) {
    now = new Date();
  }
  return now?.toISOString().slice(0, 19).replace("T", " ");
}

export const isoDateNowYmd = () =>
  new Date().toISOString().split("T")[0].replace(/-/g, "");
export const isoDateNow = () => new Date().toISOString().split("T")[0];


export const hash = (text, alg = "sha256") => {
  return crypto.createHash(alg).update(text).digest("hex");
};
export const hmac = (text, secret, alg = "sha256") => {
  return crypto.createHmac(alg, secret).update(text).digest("hex");
};

export const hashEquals = (hashedInput, storedHash) => {
  const bufferInput = Buffer.from(hashedInput, "hex");
  const bufferStored = Buffer.from(storedHash, "hex");

  if (bufferInput.length !== bufferStored.length) return false;

  return crypto.timingSafeEqual(bufferInput, bufferStored);
};

export const uniqueId = () =>
  Date.now().toString(36) + Math.random().toString(36).substr(2, 5);


export const getXMinutesFromNow = (x) => {
  const now = new Date();
  now.setMinutes(now.getMinutes() + x);
  return now;
};

export const rupiahConverter = (number = 0) => {
  const formattedNumber = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(number);

  return formattedNumber.replace("Rp", "Rp.");
};

export const generateRandomClientSecret = () => {
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@$%&";
  const randomValues = new Uint32Array(32);
  crypto.getRandomValues(randomValues);
  let result = "";
  randomValues.forEach((value) => {
    result += chars[value % chars.length];
  });
  return result + Date.now().toString(36);
};

export const generateRandomClientUser = () => {
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < 32; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
};

export const mimeToExt = {
  // Images
  "image/jpeg": ".jpg",
  "image/jpg": ".jpg",
  "image/png": ".png",
  "image/gif": ".gif",
  "image/webp": ".webp",
  "image/svg+xml": ".svg",
  "image/bmp": ".bmp",
  "image/tiff": ".tiff",
  "image/x-icon": ".ico",
  "image/heic": ".heic",

  // Documents
  "application/pdf": ".pdf",
  "text/plain": ".txt",
  "text/csv": ".csv",
  "text/html": ".html",
  "application/json": ".json",
  "application/xml": ".xml",

  // Microsoft Office
  "application/msword": ".doc",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document": ".docx",
  "application/vnd.oasis.opendocument.text": ".odt",
  "application/vnd.ms-excel": ".xls",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": ".xlsx",
  "application/vnd.ms-powerpoint": ".ppt",
  "application/vnd.openxmlformats-officedocument.presentationml.presentation": ".pptx",

  // Archives
  "application/zip": ".zip",
  "application/x-7z-compressed": ".7z",
  "application/x-rar-compressed": ".rar",
  "application/gzip": ".gz",
  "application/x-tar": ".tar",

  // Audio
  "audio/mpeg": ".mp3",
  "audio/wav": ".wav",
  "audio/ogg": ".ogg",
  "audio/mp4": ".m4a",
  "audio/flac": ".flac",

  // Video
  "video/mp4": ".mp4",
  "video/x-msvideo": ".avi",
  "video/x-ms-wmv": ".wmv",
  "video/mpeg": ".mpeg",
  "video/ogg": ".ogv",
  "video/webm": ".webm",
  "video/3gpp": ".3gp",
  "video/quicktime": ".mov",
};

export const isAllowedFile = async (file, allowedExts = []) => {
  if (!file || !file.mimetype) return false;

  if (allowedExts.includes(file.mimetype)) return true;

  const ext = mimeToExt[file.mimetype];
  if (ext && allowedExts.includes(ext)) return true;

  const nameExt = (file.originalname && require('path').extname(file.originalname).toLowerCase()) || '';
  if (nameExt && allowedExts.includes(nameExt)) return true;

  return false;
}

// util sederhana tanpa lib eksternal
const decodeHtmlEntities = (str) => {
  if (!str) return str;
  // ganti beberapa entity umum
  let s = str.replace(/&lt;/gi, "<")
    .replace(/&gt;/gi, ">")
    .replace(/&amp;/gi, "&")
    .replace(/&quot;/gi, '"')
    .replace(/&#x27;/gi, "'")
    .replace(/&#x2F;/gi, "/");
  // numeric entities decimal &#123; dan hex &#x7B;
  s = s.replace(/&#(\d+);/g, (_, n) => String.fromCharCode(Number(n)));
  s = s.replace(/&#x([0-9a-fA-F]+);/g, (_, h) => String.fromCharCode(parseInt(h, 16)));
  return s;
};

const urlDecode = (str) => {
  try {
    return decodeURIComponent(str);
  } catch (e) {
    return str;
  }
};

export const sanitizeString = (str, { mode = "clean" } = {}) => {
  if (typeof str !== "string") return str;

  //normalisasi: URL decode + HTML entity decode + hapus null
  let s = urlDecode(str);
  s = decodeHtmlEntities(s);
  s = s.replace(/\0/g, "");

  //deteksi pola berbahaya 
  const suspiciousPatterns = [
    /<\s*script\b[^>]*>.*?<\s*\/\s*script\s*>/is,
    /<\s*script\b/ig,               // open script
    /<\?php\b.*?\?>/is,             // PHP block
    /<\s*\?[^>]+>/is,               // any <? ... > (caution)
    /on\w+\s*=\s*(['"]).*?\1/ig,    // inline event handlers
    /(system|exec|shell_exec|passthru|popen|`|eval)\s*\(/ig, // execution functions
    /base64_decode\s*\(/ig,
    /phpinfo\s*\(/ig,
    /\/\*\s*.*?\s*\*\//s,           // block comments (could hide payload)
    /<\s*iframe\b/ig,
    /<\s*img\b[^>]*on/i
  ];

  for (const p of suspiciousPatterns) {
    if (p.test(s)) {
      if (mode === "detect") return { dangerous: true, cleaned: s };
    }
  }

  // - Hapus semua tag HTML sederhana (keputusan: hilangkan semua <...>)
  s = s.replace(/<[^>]*>/g, "");

  // - Hapus pola PHP tersisa
  s = s.replace(/<\?[^>]*\?>/g, "");

  // - Hapus panggilan fungsi berbahaya (simple)
  s = s.replace(/\b(system|exec|shell_exec|passthru|popen|eval|base64_decode|phpinfo)\s*\([^)]*\)/ig, "");

  // - Hapus backticks (command substitution) dan suspicious chars berlebih
  s = s.replace(/`+/g, "");

  // - Hapus URL encoded scripts seperti %3C etc (sudah di-decode, tapi double-check)
  s = s.replace(/%3C/ig, "").replace(/%3E/ig, "");

  // trim dan return
  s = s.trim();

  // jika mode detect, return hasil detect + cleaned
  if (mode === "detect") {
    const isDangerous = suspiciousPatterns.some((p) => p.test(str) || p.test(s));
    return { dangerous: isDangerous, cleaned: s };
  }

  return s;
};
