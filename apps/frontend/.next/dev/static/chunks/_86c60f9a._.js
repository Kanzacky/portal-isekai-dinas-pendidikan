(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/lib/axios/postData.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-auth/react.js [app-client] (ecmascript)");
;
;
const Axios = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].create({
    baseURL: ("TURBOPACK compile-time truthy", 1) ? window.location.origin : "TURBOPACK unreachable",
    headers: {
        'Content-Type': 'application/json'
    },
    withCredentials: true
});
Axios.interceptors.response.use((r)=>r, async (error)=>{
    if (error.response?.status === 401) {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["signOut"])({
            callbackUrl: "/auth/login"
        });
    }
    return Promise.reject(error);
});
async function postData(endpoint, data = {}, customHeader = {}) {
    try {
        const timestamp = new Date().toISOString();
        const header = {
            'X-ENDPOINT': endpoint,
            'X-Timestamp': timestamp,
            'X-Custom-Header': JSON.stringify({
                'X-Level': "1",
                ...customHeader
            })
        };
        const response = await Axios.post('/api/bridge/login', data, {
            headers: header
        });
        return response;
    } catch (error) {
        throw error;
    }
}
const __TURBOPACK__default__export__ = postData;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/tools/data:1f09a8 [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "encryptChunkRSA",
    ()=>$$RSC_SERVER_ACTION_0
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"40ae624e1e2d8466554756e3ec5e42bb1a1f99437e":"encryptChunkRSA"},"lib/tools/serverTools.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("40ae624e1e2d8466554756e3ec5e42bb1a1f99437e", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "encryptChunkRSA");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vc2VydmVyVG9vbHMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzZXJ2ZXInXHJcblxyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7IGNvb2tpZXMgfSBmcm9tICduZXh0L2hlYWRlcnMnO1xyXG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcclxuaW1wb3J0IGZzIGZyb20gJ2ZzJztcclxuaW1wb3J0IGNyeXB0byBmcm9tICdjcnlwdG8nO1xyXG5pbXBvcnQgeyBwYXJzZSB9IGZyb20gJ2RhdGUtZm5zJztcclxuaW1wb3J0IHsgZmluZFRvVmFsdWVzUmVjdXJzaXZlIH0gZnJvbSBcIi4vZ2VuZXJhbFRvb2xzXCI7XHJcbmltcG9ydCB7IGF1dGggfSBmcm9tIFwiLi9hdXRoVG9vbHNcIjsgXHJcblxyXG4vKipcclxuICogRU5LUklQU0kgUlNBIC0gV0FKSUIgREkgU0VSVkVSXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgZW5jcnlwdENodW5rUlNBID0gYXN5bmMgKHBheWxvYWQ6IHN0cmluZykgPT4ge1xyXG4gICAgY29uc3QgY2h1bmtTaXplID0gMjE0O1xyXG4gICAgY29uc3QgY2h1bmtzID0gcGF5bG9hZC5tYXRjaChuZXcgUmVnRXhwKGAuezEsJHtjaHVua1NpemV9fWAsICdnJykpIHx8IFtdO1xyXG4gICAgY29uc3QgZW5jcnlwdGVkQ2h1bmtzID0gW107XHJcblxyXG4gICAgLy8gQ2FyaSBwYXRoIHlhbmcgbGViaWggYWJzb2x1dFxyXG4gICAgY29uc3QgcHViS2V5UGF0aCA9IHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCAnbGliJywgJ2tleScsICdwdWJsaWMucGVtJyk7XHJcblxyXG4gICAgY29uc29sZS5sb2coXCJNZW5jYXJpIEtleSBkaTpcIiwgcHViS2V5UGF0aCk7IC8vIENlayBpbmkgZGkgdGVybWluYWwga2FtdSFcclxuXHJcbiAgICBpZiAoIWZzLmV4aXN0c1N5bmMocHViS2V5UGF0aCkpIHtcclxuICAgICAgICAvLyBGYWxsYmFjayBqaWthIGJlcmFkYSBkaSBkYWxhbSBzdWJmb2xkZXIgYXBwcy9mcm9udGVuZFxyXG4gICAgICAgIGNvbnN0IGFsdFBhdGggPSBwYXRoLmpvaW4ocHJvY2Vzcy5jd2QoKSwgJ2FwcHMnLCAnZnJvbnRlbmQnLCAnbGliJywgJ2tleScsICdwdWJsaWMucGVtJyk7XHJcbiAgICAgICAgaWYgKGZzLmV4aXN0c1N5bmMoYWx0UGF0aCkpIHtcclxuICAgICAgICAgICAgdmFyIHB1YktleSA9IGZzLnJlYWRGaWxlU3luYyhhbHRQYXRoLCAndXRmOCcpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgUHVibGljIGtleSBOT1QgRk9VTkQuIFRlcmRldGVrc2kgZGk6ICR7cHViS2V5UGF0aH1gKTtcclxuICAgICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHZhciBwdWJLZXkgPSBmcy5yZWFkRmlsZVN5bmMocHViS2V5UGF0aCwgJ3V0ZjgnKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBQcm9zZXMgZW5rcmlwc2kgdGV0YXAgc2FtYS4uLlxyXG4gICAgZm9yIChjb25zdCBjaHVuayBvZiBjaHVua3MpIHtcclxuICAgICAgICBjb25zdCBlbmNyeXB0ZWQgPSBjcnlwdG8ucHVibGljRW5jcnlwdChcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAga2V5OiBwdWJLZXksXHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiBjcnlwdG8uY29uc3RhbnRzLlJTQV9QS0NTMV9PQUVQX1BBRERJTkcsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIEJ1ZmZlci5mcm9tKGNodW5rKVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgZW5jcnlwdGVkQ2h1bmtzLnB1c2goZW5jcnlwdGVkLnRvU3RyaW5nKCdiYXNlNjQnKSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZW5jcnlwdGVkQ2h1bmtzLmpvaW4oJ3x8Jyk7XHJcbn1cclxuLyoqXHJcbiAqIExPR09VVCBBQ1RJT05cclxuICovXHJcblxyXG5leHBvcnQgY29uc3QgbG9nb3V0QWN0aW9uID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3QgY29va2llU3RvcmUgPSBhd2FpdCBjb29raWVzKCk7IFxyXG4gICAgY29va2llU3RvcmUuZGVsZXRlKFwiX0EyUlwiKTtcclxuICAgIGNvb2tpZVN0b3JlLmRlbGV0ZShcIl9BMkZcIik7XHJcbn07XHJcblxyXG4vKipcclxuICogUk9VVEUgTUlERExFV0FSRSAmIE1FTlUgQ0hFQ0tcclxuICovXHJcbmV4cG9ydCBjb25zdCByb3V0ZU1pZGRsZXdhcmUgPSBhc3luYyAoc2VhcmNoVXJsOiBzdHJpbmcpID0+IHtcclxuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKCk7XHJcblxyXG4gICAgaWYgKCFzZXNzaW9uPy51c2VyKSByZXR1cm4gJzk5JzsgLy8gTm90IExvZ2dlZCBJblxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgLy8gMS4gQ2VrIEV4cGlyeSBTZXNzaW9uXHJcbiAgICAgICAgY29uc3QgZFNlc3Npb25FeHAgPSBwYXJzZShzZXNzaW9uLmV4cGlyZXMsICd5eXl5LU1NLWRkIEhIOm1tOnNzJywgbmV3IERhdGUoKSk7XHJcbiAgICAgICAgaWYgKG5ldyBEYXRlKCkuZ2V0VGltZSgpID4gZFNlc3Npb25FeHAuZ2V0VGltZSgpKSByZXR1cm4gJzk5JztcclxuXHJcbiAgICAgICAgaWYgKCFzZXNzaW9uLnVzZXIudW5pcXVlSWQpIHJldHVybiAnOTknO1xyXG5cclxuICAgICAgICAvLyAyLiBGZXRjaCBNZW51IGRhcmkgQmFja2VuZCBQZXJ1c2FoYWFuXHJcbiAgICAgICAgY29uc3QgcmVzcCA9IGF3YWl0IGF4aW9zLnBvc3QoXHJcbiAgICAgICAgICAgIGAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FQSV9ESVJfUEFUSH1gLFxyXG4gICAgICAgICAgICB7IFVuaXF1ZUlkOiBzZXNzaW9uLnVzZXIudW5pcXVlSWQgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICAgICdYLUVORFBPSU5UJzogXCIvc2V0dXAvbmF2L3VzZXItZGF0YVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICdYLUxldmVsJzogXCIxXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1gtVGltZXN0YW1wJzogbmV3IERhdGUoKS50b0lTT1N0cmluZygpIC8vIE1lbXBlcmJhaWtpIGJ1ZyBNaXNzaW5nIFRpbWVzdGFtcFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgY29uc3QgbWVudSA9IHJlc3AuZGF0YS5kYXRhO1xyXG4gICAgICAgIGNvbnN0IHVybEZpeCA9IHNlYXJjaFVybC5sZW5ndGggPiAxID8gc2VhcmNoVXJsLnJlcGxhY2UoL1xcLyQvLCAnJykgOiBzZWFyY2hVcmw7XHJcblxyXG4gICAgICAgIC8vIDMuIFZhbGlkYXNpIEhhayBBa3NlcyBNZW51XHJcbiAgICAgICAgY29uc3QgcmVzID0gZmluZFRvVmFsdWVzUmVjdXJzaXZlKG1lbnUsIHVybEZpeCk7XHJcbiAgICAgICAgcmV0dXJuIHJlcy5sZW5ndGggPCAxID8gJzk4JyA6ICcwMCc7IC8vIDk4ID0gTm8gQWNjZXNzLCAwMCA9IEF1dGhvcml6ZWRcclxuXHJcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkF1dGggTWlkZGxld2FyZSBFcnJvcjpcIiwgZXJyb3IucmVzcG9uc2U/LmRhdGEgfHwgZXJyb3IubWVzc2FnZSk7XHJcbiAgICAgICAgcmV0dXJuIGVycm9yLnJlc3BvbnNlPy5zdGF0dXMgPT09IDQwMSA/ICc5OScgOiAnNTAwJztcclxuICAgIH1cclxufTsiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjRSQWNhLDRMQUFBIn0=
}),
"[project]/components/LoginPage.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-auth/react.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$axios$2f$postData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/axios/postData.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tools$2f$data$3a$1f09a8__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/lib/tools/data:1f09a8 [app-client] (ecmascript) <text/javascript>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
const LoginPage = ()=>{
    _s();
    const [username, setUsername] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [password, setPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setError('');
        setLoading(true);
        try {
            const encryptedPassword = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tools$2f$data$3a$1f09a8__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["encryptChunkRSA"])(password);
            const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$axios$2f$postData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('/login', {
                username: username,
                password: encryptedPassword
            });
            if (response.data.status === '00') {
                const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["signIn"])('credentials', {
                    userData: JSON.stringify(response.data.data),
                    redirect: false
                });
                if (result?.error) {
                    setError("Gagal sinkronisasi sesi.");
                } else {
                    router.push('/dashboard');
                    router.refresh();
                }
            } else {
                setError(response.data.message || "Gagal masuk ke sistem.");
            }
        } catch (err) {
            console.error("Login Error Details:", err);
            const message = err.response?.data?.message || "Kredensial salah atau server bermasalah.";
            setError(message);
        } finally{
            setLoading(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen w-full flex items-center justify-center bg-slate-50 dark:bg-slate-900 px-4 font-public",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full max-w-[450px] relative",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center mb-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/",
                            className: "inline-flex items-center gap-3 mb-6",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "size-12 bg-primary rounded-xl flex items-center justify-center text-white shadow-lg",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "material-symbols-outlined text-3xl",
                                    children: "school"
                                }, void 0, false, {
                                    fileName: "[project]/components/LoginPage.tsx",
                                    lineNumber: 62,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/components/LoginPage.tsx",
                                lineNumber: 61,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/components/LoginPage.tsx",
                            lineNumber: 60,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-3xl font-black text-slate-900 dark:text-white tracking-tight",
                            children: "Selamat Datang"
                        }, void 0, false, {
                            fileName: "[project]/components/LoginPage.tsx",
                            lineNumber: 65,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/LoginPage.tsx",
                    lineNumber: 59,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-xl border border-slate-100 dark:border-slate-700",
                    children: [
                        error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-6 p-4 bg-red-50 border-l-4 border-red-500 text-red-700 text-sm flex items-center gap-3 font-medium",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "material-symbols-outlined text-lg",
                                    children: "error"
                                }, void 0, false, {
                                    fileName: "[project]/components/LoginPage.tsx",
                                    lineNumber: 71,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                error
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/LoginPage.tsx",
                            lineNumber: 70,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            onSubmit: handleSubmit,
                            className: "space-y-5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "text-xs font-bold uppercase tracking-widest text-slate-400 ml-1",
                                            children: "Username"
                                        }, void 0, false, {
                                            fileName: "[project]/components/LoginPage.tsx",
                                            lineNumber: 78,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            required: true,
                                            value: username,
                                            onChange: (e)=>setUsername(e.target.value),
                                            className: "w-full px-4 py-4 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl focus:ring-2 focus:ring-primary/20 outline-none text-slate-900 dark:text-white transition-all",
                                            placeholder: "admin@disdik.go.id"
                                        }, void 0, false, {
                                            fileName: "[project]/components/LoginPage.tsx",
                                            lineNumber: 79,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/LoginPage.tsx",
                                    lineNumber: 77,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "text-xs font-bold uppercase tracking-widest text-slate-400 ml-1",
                                            children: "Password"
                                        }, void 0, false, {
                                            fileName: "[project]/components/LoginPage.tsx",
                                            lineNumber: 90,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "password",
                                            required: true,
                                            value: password,
                                            onChange: (e)=>setPassword(e.target.value),
                                            className: "w-full px-4 py-4 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl focus:ring-2 focus:ring-primary/20 outline-none text-slate-900 dark:text-white transition-all",
                                            placeholder: "••••••••••••"
                                        }, void 0, false, {
                                            fileName: "[project]/components/LoginPage.tsx",
                                            lineNumber: 91,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/LoginPage.tsx",
                                    lineNumber: 89,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "submit",
                                    disabled: loading,
                                    className: "w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-2xl shadow-lg transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2",
                                    children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "animate-spin h-5 w-5 border-2 border-white/30 border-t-white rounded-full"
                                            }, void 0, false, {
                                                fileName: "[project]/components/LoginPage.tsx",
                                                lineNumber: 108,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            "Memproses..."
                                        ]
                                    }, void 0, true) : 'Masuk Ke Sistem'
                                }, void 0, false, {
                                    fileName: "[project]/components/LoginPage.tsx",
                                    lineNumber: 101,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/LoginPage.tsx",
                            lineNumber: 76,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/LoginPage.tsx",
                    lineNumber: 68,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/components/LoginPage.tsx",
            lineNumber: 58,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/LoginPage.tsx",
        lineNumber: 57,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(LoginPage, "sPrJ7uLbm6K5pif71gOHbJqcY9c=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = LoginPage;
const __TURBOPACK__default__export__ = LoginPage;
var _c;
__turbopack_context__.k.register(_c, "LoginPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_86c60f9a._.js.map