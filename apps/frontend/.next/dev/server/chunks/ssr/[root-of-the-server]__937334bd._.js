module.exports = [
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/http [external] (http, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}),
"[externals]/https [external] (https, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("https", () => require("https"));

module.exports = mod;
}),
"[externals]/url [external] (url, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/http2 [external] (http2, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http2", () => require("http2"));

module.exports = mod;
}),
"[externals]/assert [external] (assert, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("assert", () => require("assert"));

module.exports = mod;
}),
"[externals]/zlib [external] (zlib, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}),
"[externals]/events [external] (events, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}),
"[project]/lib/tools/generalTools.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "findMatchingItem",
    ()=>findMatchingItem,
    "findToValuesRecursive",
    ()=>findToValuesRecursive,
    "notify",
    ()=>notify
]);
const findMatchingItem = (menuData, url)=>{
    for (const item of menuData){
        if (item.to && new RegExp(`^${item.to}(/|$)`).test(url)) return true;
        if (item.items && findMatchingItem(item.items, url)) return true;
    }
    return false;
};
const findToValuesRecursive = (data, searchToValue)=>{
    const matching = [];
    function search(items) {
        for (const item of items){
            if (item.to === searchToValue) matching.push(item);
            if (item.items) search(item.items);
        }
    }
    search(data);
    return matching;
};
const notify = (type, message)=>{
    console.log(`[${type.toUpperCase()}]: ${message}`);
};
}),
"[project]/lib/tools/authTools.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "auth",
    ()=>auth,
    "handlers",
    ()=>handlers,
    "signIn",
    ()=>signIn,
    "signOut",
    ()=>signOut
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next-auth/index.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$providers$2f$credentials$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next-auth/providers/credentials.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$auth$2f$core$2f$providers$2f$credentials$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@auth/core/providers/credentials.js [app-rsc] (ecmascript)");
;
;
const { handlers, auth, signIn, signOut } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"])({
    providers: [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$auth$2f$core$2f$providers$2f$credentials$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])({
            credentials: {
                userData: {}
            },
            async authorize (credentials) {
                if (credentials?.userData) {
                    return JSON.parse(credentials.userData);
                }
                return null;
            }
        })
    ],
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
        async jwt ({ token, user }) {
            if (user) token.user = user;
            return token;
        },
        async session ({ session, token }) {
            session.user = token.user;
            return session;
        }
    }
});
}),
"[project]/lib/tools/serverTools.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"006b9e20f52a4f45e8c731bc46af9c5a078cfaca92":"logoutAction","40406488588ad9999ac2ebce31bfd557b07ebc3660":"routeMiddleware","40ae624e1e2d8466554756e3ec5e42bb1a1f99437e":"encryptChunkRSA"},"",""] */ __turbopack_context__.s([
    "encryptChunkRSA",
    ()=>encryptChunkRSA,
    "logoutAction",
    ()=>logoutAction,
    "routeMiddleware",
    ()=>routeMiddleware
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/headers.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/path [external] (path, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/fs [external] (fs, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/crypto [external] (crypto, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$parse$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/date-fns/parse.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tools$2f$generalTools$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/tools/generalTools.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tools$2f$authTools$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/tools/authTools.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
;
const encryptChunkRSA = async (payload)=>{
    const chunkSize = 214;
    const chunks = payload.match(new RegExp(`.{1,${chunkSize}}`, 'g')) || [];
    const encryptedChunks = [];
    const pubKeyPath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(process.cwd(), 'lib', 'key', 'public.pem');
    console.log("Mencari Key di:", pubKeyPath);
    if (!__TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].existsSync(pubKeyPath)) {
        const altPath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(process.cwd(), 'apps', 'frontend', 'lib', 'key', 'public.pem');
        if (__TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].existsSync(altPath)) {
            var pubKey = __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].readFileSync(altPath, 'utf8');
        } else {
            throw new Error(`Public key NOT FOUND. Terdeteksi di: ${pubKeyPath}`);
        }
    } else {
        var pubKey = __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].readFileSync(pubKeyPath, 'utf8');
    }
    // Proses enkripsi tetap sama...
    for (const chunk of chunks){
        const encrypted = __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["default"].publicEncrypt({
            key: pubKey,
            padding: __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["default"].constants.RSA_PKCS1_OAEP_PADDING
        }, Buffer.from(chunk));
        encryptedChunks.push(encrypted.toString('base64'));
    }
    return encryptedChunks.join('||');
};
const logoutAction = async ()=>{
    const cookieStore = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])();
    cookieStore.delete("_A2R");
    cookieStore.delete("_A2F");
};
const routeMiddleware = async (searchUrl)=>{
    const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tools$2f$authTools$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"])();
    if (!session?.user) return '99'; // Not Logged In
    try {
        // 1. Cek Expiry Session
        const dSessionExp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$parse$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["parse"])(session.expires, 'yyyy-MM-dd HH:mm:ss', new Date());
        if (new Date().getTime() > dSessionExp.getTime()) return '99';
        if (!session.user.uniqueId) return '99';
        // 2. Fetch Menu dari Backend Perusahaan
        const resp = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].post(`${("TURBOPACK compile-time value", "http://127.0.0.1:8000/api/v1")}`, {
            UniqueId: session.user.uniqueId
        }, {
            headers: {
                'X-ENDPOINT': "/setup/nav/user-data",
                'X-Level': "1",
                'X-Timestamp': new Date().toISOString() // Memperbaiki bug Missing Timestamp
            }
        });
        const menu = resp.data.data;
        const urlFix = searchUrl.length > 1 ? searchUrl.replace(/\/$/, '') : searchUrl;
        // 3. Validasi Hak Akses Menu
        const res = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tools$2f$generalTools$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["findToValuesRecursive"])(menu, urlFix);
        return res.length < 1 ? '98' : '00'; // 98 = No Access, 00 = Authorized
    } catch (error) {
        console.error("Auth Middleware Error:", error.response?.data || error.message);
        return error.response?.status === 401 ? '99' : '500';
    }
};
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    encryptChunkRSA,
    logoutAction,
    routeMiddleware
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(encryptChunkRSA, "40ae624e1e2d8466554756e3ec5e42bb1a1f99437e", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(logoutAction, "006b9e20f52a4f45e8c731bc46af9c5a078cfaca92", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(routeMiddleware, "40406488588ad9999ac2ebce31bfd557b07ebc3660", null);
}),
"[project]/.next-internal/server/app/(full-page)/auth/login/page/actions.js { ACTIONS_MODULE0 => \"[project]/lib/tools/serverTools.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tools$2f$serverTools$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/tools/serverTools.ts [app-rsc] (ecmascript)");
;
;
;
}),
"[project]/.next-internal/server/app/(full-page)/auth/login/page/actions.js { ACTIONS_MODULE0 => \"[project]/lib/tools/serverTools.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "006b9e20f52a4f45e8c731bc46af9c5a078cfaca92",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tools$2f$serverTools$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logoutAction"],
    "40406488588ad9999ac2ebce31bfd557b07ebc3660",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tools$2f$serverTools$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["routeMiddleware"],
    "40ae624e1e2d8466554756e3ec5e42bb1a1f99437e",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tools$2f$serverTools$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["encryptChunkRSA"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$full$2d$page$292f$auth$2f$login$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$lib$2f$tools$2f$serverTools$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/(full-page)/auth/login/page/actions.js { ACTIONS_MODULE0 => "[project]/lib/tools/serverTools.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tools$2f$serverTools$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/tools/serverTools.ts [app-rsc] (ecmascript)");
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__937334bd._.js.map