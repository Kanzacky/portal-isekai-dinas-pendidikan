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
"[project]/lib/tools/data:c3ea7f [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
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
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vc2VydmVyVG9vbHMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzZXJ2ZXInXHJcblxyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7IGNvb2tpZXMgfSBmcm9tICduZXh0L2hlYWRlcnMnO1xyXG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcclxuaW1wb3J0IGZzIGZyb20gJ2ZzJztcclxuaW1wb3J0IGNyeXB0byBmcm9tICdjcnlwdG8nO1xyXG5pbXBvcnQgeyBwYXJzZSB9IGZyb20gJ2RhdGUtZm5zJztcclxuaW1wb3J0IHsgZmluZFRvVmFsdWVzUmVjdXJzaXZlIH0gZnJvbSBcIi4vZ2VuZXJhbFRvb2xzXCI7XHJcbmltcG9ydCB7IGF1dGggfSBmcm9tIFwiLi9hdXRoVG9vbHNcIjsgXHJcblxyXG4vKipcclxuICogRU5LUklQU0kgUlNBIC0gV0FKSUIgREkgU0VSVkVSXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgZW5jcnlwdENodW5rUlNBID0gYXN5bmMgKHBheWxvYWQ6IHN0cmluZykgPT4ge1xyXG4gICAgY29uc3QgY2h1bmtTaXplID0gMjE0O1xyXG4gICAgY29uc3QgY2h1bmtzID0gcGF5bG9hZC5tYXRjaChuZXcgUmVnRXhwKGAuezEsJHtjaHVua1NpemV9fWAsICdnJykpIHx8IFtdO1xyXG4gICAgY29uc3QgZW5jcnlwdGVkQ2h1bmtzID0gW107XHJcblxyXG4gICAgY29uc3QgcHViS2V5UGF0aCA9IHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCAnbGliJywgJ2tleScsICdwdWJsaWMucGVtJyk7XHJcblxyXG4gICAgY29uc29sZS5sb2coXCJNZW5jYXJpIEtleSBkaTpcIiwgcHViS2V5UGF0aCk7IC8vIENlayBpbmkgZGkgdGVybWluYWwga2FtdSFcclxuXHJcbiAgICBpZiAoIWZzLmV4aXN0c1N5bmMocHViS2V5UGF0aCkpIHtcclxuICAgICAgICBjb25zdCBhbHRQYXRoID0gcGF0aC5qb2luKHByb2Nlc3MuY3dkKCksICdhcHBzJywgJ2Zyb250ZW5kJywgJ2xpYicsICdrZXknLCAncHVibGljLnBlbScpO1xyXG4gICAgICAgIGlmIChmcy5leGlzdHNTeW5jKGFsdFBhdGgpKSB7XHJcbiAgICAgICAgICAgIHZhciBwdWJLZXkgPSBmcy5yZWFkRmlsZVN5bmMoYWx0UGF0aCwgJ3V0ZjgnKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFB1YmxpYyBrZXkgTk9UIEZPVU5ELiBUZXJkZXRla3NpIGRpOiAke3B1YktleVBhdGh9YCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB2YXIgcHViS2V5ID0gZnMucmVhZEZpbGVTeW5jKHB1YktleVBhdGgsICd1dGY4Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUHJvc2VzIGVua3JpcHNpIHRldGFwIHNhbWEuLi5cclxuICAgIGZvciAoY29uc3QgY2h1bmsgb2YgY2h1bmtzKSB7XHJcbiAgICAgICAgY29uc3QgZW5jcnlwdGVkID0gY3J5cHRvLnB1YmxpY0VuY3J5cHQoXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGtleTogcHViS2V5LFxyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogY3J5cHRvLmNvbnN0YW50cy5SU0FfUEtDUzFfT0FFUF9QQURESU5HLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBCdWZmZXIuZnJvbShjaHVuaylcclxuICAgICAgICApO1xyXG4gICAgICAgIGVuY3J5cHRlZENodW5rcy5wdXNoKGVuY3J5cHRlZC50b1N0cmluZygnYmFzZTY0JykpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGVuY3J5cHRlZENodW5rcy5qb2luKCd8fCcpO1xyXG59XHJcbi8qKlxyXG4gKiBMT0dPVVQgQUNUSU9OXHJcbiAqL1xyXG5cclxuZXhwb3J0IGNvbnN0IGxvZ291dEFjdGlvbiA9IGFzeW5jICgpID0+IHtcclxuICAgIGNvbnN0IGNvb2tpZVN0b3JlID0gYXdhaXQgY29va2llcygpOyBcclxuICAgIGNvb2tpZVN0b3JlLmRlbGV0ZShcIl9BMlJcIik7XHJcbiAgICBjb29raWVTdG9yZS5kZWxldGUoXCJfQTJGXCIpO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIFJPVVRFIE1JRERMRVdBUkUgJiBNRU5VIENIRUNLXHJcbiAqL1xyXG5leHBvcnQgY29uc3Qgcm91dGVNaWRkbGV3YXJlID0gYXN5bmMgKHNlYXJjaFVybDogc3RyaW5nKSA9PiB7XHJcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpO1xyXG5cclxuICAgIGlmICghc2Vzc2lvbj8udXNlcikgcmV0dXJuICc5OSc7IC8vIE5vdCBMb2dnZWQgSW5cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIC8vIDEuIENlayBFeHBpcnkgU2Vzc2lvblxyXG4gICAgICAgIGNvbnN0IGRTZXNzaW9uRXhwID0gcGFyc2Uoc2Vzc2lvbi5leHBpcmVzLCAneXl5eS1NTS1kZCBISDptbTpzcycsIG5ldyBEYXRlKCkpO1xyXG4gICAgICAgIGlmIChuZXcgRGF0ZSgpLmdldFRpbWUoKSA+IGRTZXNzaW9uRXhwLmdldFRpbWUoKSkgcmV0dXJuICc5OSc7XHJcblxyXG4gICAgICAgIGlmICghc2Vzc2lvbi51c2VyLnVuaXF1ZUlkKSByZXR1cm4gJzk5JztcclxuXHJcbiAgICAgICAgLy8gMi4gRmV0Y2ggTWVudSBkYXJpIEJhY2tlbmQgUGVydXNhaGFhblxyXG4gICAgICAgIGNvbnN0IHJlc3AgPSBhd2FpdCBheGlvcy5wb3N0KFxyXG4gICAgICAgICAgICBgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUElfRElSX1BBVEh9YCxcclxuICAgICAgICAgICAgeyBVbmlxdWVJZDogc2Vzc2lvbi51c2VyLnVuaXF1ZUlkIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAnWC1FTkRQT0lOVCc6IFwiL3NldHVwL25hdi91c2VyLWRhdGFcIixcclxuICAgICAgICAgICAgICAgICAgICAnWC1MZXZlbCc6IFwiMVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICdYLVRpbWVzdGFtcCc6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSAvLyBNZW1wZXJiYWlraSBidWcgTWlzc2luZyBUaW1lc3RhbXBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIGNvbnN0IG1lbnUgPSByZXNwLmRhdGEuZGF0YTtcclxuICAgICAgICBjb25zdCB1cmxGaXggPSBzZWFyY2hVcmwubGVuZ3RoID4gMSA/IHNlYXJjaFVybC5yZXBsYWNlKC9cXC8kLywgJycpIDogc2VhcmNoVXJsO1xyXG5cclxuICAgICAgICAvLyAzLiBWYWxpZGFzaSBIYWsgQWtzZXMgTWVudVxyXG4gICAgICAgIGNvbnN0IHJlcyA9IGZpbmRUb1ZhbHVlc1JlY3Vyc2l2ZShtZW51LCB1cmxGaXgpO1xyXG4gICAgICAgIHJldHVybiByZXMubGVuZ3RoIDwgMSA/ICc5OCcgOiAnMDAnOyAvLyA5OCA9IE5vIEFjY2VzcywgMDAgPSBBdXRob3JpemVkXHJcblxyXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJBdXRoIE1pZGRsZXdhcmUgRXJyb3I6XCIsIGVycm9yLnJlc3BvbnNlPy5kYXRhIHx8IGVycm9yLm1lc3NhZ2UpO1xyXG4gICAgICAgIHJldHVybiBlcnJvci5yZXNwb25zZT8uc3RhdHVzID09PSA0MDEgPyAnOTknIDogJzUwMCc7XHJcbiAgICB9XHJcbn07Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI0UkFjYSw0TEFBQSJ9
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
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tools$2f$data$3a$c3ea7f__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/lib/tools/data:c3ea7f [app-client] (ecmascript) <text/javascript>");
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
            const encryptedPassword = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tools$2f$data$3a$c3ea7f__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["encryptChunkRSA"])(password);
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

//# sourceMappingURL=_90a5c255._.js.map