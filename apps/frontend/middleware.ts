import { auth } from "@/lib/tools/authTools";
import { NextResponse } from "next/server";

export default auth((req) => {
  const isLoggedIn = !!req.auth;
  const { nextUrl } = req;

  const isAuthPage = nextUrl.pathname.startsWith("/auth");
  const isDashboardPage = nextUrl.pathname.startsWith("/dashboard");

  // 1. Jika di halaman login tapi sudah login, lempar ke dashboard
  if (isAuthPage) {
    if (isLoggedIn) {
      return NextResponse.redirect(new URL("/dashboard", nextUrl));
    }
    return NextResponse.next();
  }

  // 2. Jika mencoba akses dashboard tapi belum login, lempar ke login
  if (isDashboardPage && !isLoggedIn) {
    return NextResponse.redirect(new URL("/auth/login", nextUrl));
  }

  return NextResponse.next();
});

export const config = {
  // Melindungi semua route kecuali asset statis, image, dan favicon
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};