"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSession, signOut } from "next-auth/react";

const Navbar: React.FC = () => {
  const pathname = usePathname();
  const { data: session, status } = useSession();
  
  if (status === "loading") {
    return (
      <header className="fixed top-0 left-0 right-0 z-[100] nav-glass h-[72px] flex items-center px-6">
        <p className="text-sm animate-pulse">Memuat...</p>
      </header>
    );
  }

  const navItems = [
    { path: "/", label: "Beranda" },
    { path: "/profile", label: "Profil" },
    { path: "/services", label: "Layanan" },
    { path: "/info", label: "Informasi" },
    { path: "/contact", label: "Kontak" },
  ];

  const nameToDisplay = (session?.user?.fullname || session?.user?.username || "User").split(" ")[0];

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] nav-glass border-b border-slate-200/50 dark:border-slate-800/50 shadow-sm transition-all duration-300">
      <div className="max-w-[1280px] mx-auto px-6 py-4 flex items-center justify-between whitespace-nowrap">
        
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-3.5 group cursor-pointer">
          <div className="size-11 bg-gradient-to-br from-primary to-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-primary/25 transition-transform duration-300 group-hover:scale-105 group-hover:rotate-3">
            <span className="material-symbols-outlined text-2xl">school</span>
          </div>
          <div className="flex flex-col">
            <h2 className="text-slate-900 dark:text-white text-[19px] font-black leading-none tracking-tight group-hover:text-primary transition-colors uppercase">
              Dinas Pendidikan
            </h2>
            <span className="text-[10px] text-slate-900 dark:text-white font-bold uppercase tracking-[0.2em] mt-1">
              Pusat Layanan Terpadu
            </span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-2 p-1 bg-white/50 dark:bg-slate-900/50 border border-white/20 rounded-full backdrop-blur-md shadow-sm">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`relative px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
                pathname === item.path
                  ? "bg-primary text-white shadow-md shadow-primary/25"
                  : "text-slate-900 dark:text-white hover:bg-white/80 dark:hover:bg-slate-800 hover:text-primary"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-5">
          {status === "authenticated" ? (
            <div className="flex items-center gap-6">
              <Link
                href="/dashboard"
                className="flex items-center gap-2 text-primary text-sm font-extrabold hover:opacity-80 transition-opacity"
              >
                <span className="material-symbols-outlined text-lg">dashboard</span>
                <span>Halo, <span className="capitalize">{nameToDisplay}</span></span>
              </Link>

              <button
                onClick={() => signOut({ callbackUrl: "/auth/login" })}
                className="relative overflow-hidden flex min-w-[130px] cursor-pointer items-center justify-center rounded-full h-11 px-6 bg-gradient-to-r from-red-500 to-red-600 text-white text-sm font-bold shadow-lg shadow-red-500/30 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 group"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <span>Logout</span>
                  <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">
                    logout
                  </span>
                </span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              </button>
            </div>
          ) : (
            <Link
              href="/auth/login"
              className="px-6 py-2.5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-full text-sm font-extrabold hover:bg-primary hover:text-white transition-all"
            >
              Masuk
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;