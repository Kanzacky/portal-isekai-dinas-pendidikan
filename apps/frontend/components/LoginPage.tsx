"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';
import postData from '@/lib/axios/postData'; 
import { encryptChunkRSA } from '@/lib/tools/serverTools'; 


const LoginPage: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    
    try {

      const response = await postData("/auth/login", {
        username,
        password,
      });

      if (response.data.status === "00") {
        const result = await signIn("credentials", {
          credential: response.data.credential,
          redirect: false,
        });

        if (result?.error) {
          setError("Gagal sinkronisasi sesi.");
        } else {
          router.push("/dashboard");
        }
      }
    } catch (err: any) {
      console.error("Login Error Details:", err);
      const message = err.response?.data?.message || "Kredensial salah atau server bermasalah.";
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-slate-50 dark:bg-slate-900 px-4 font-public">
      <div className="w-full max-w-[450px] relative">
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-3 mb-6">
            <div className="size-12 bg-primary rounded-xl flex items-center justify-center text-white shadow-lg">
              <span className="material-symbols-outlined text-3xl">school</span>
            </div>
          </Link>
          <h1 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">Selamat Datang</h1>
        </div>

        <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-xl border border-slate-100 dark:border-slate-700">
          {error && (
            <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 text-red-700 text-sm flex items-center gap-3 font-medium">
              <span className="material-symbols-outlined text-lg">error</span>
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-1">Username</label>
              <input
                type="text"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-4 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl focus:ring-2 focus:ring-primary/20 outline-none text-slate-900 dark:text-white transition-all"
                placeholder="admin@disdik.go.id"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-1">Password</label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-4 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl focus:ring-2 focus:ring-primary/20 outline-none text-slate-900 dark:text-white transition-all"
                placeholder="••••••••••••"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-2xl shadow-lg transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <span className="animate-spin h-5 w-5 border-2 border-white/30 border-t-white rounded-full"></span>
                  Memproses...
                </>
              ) : 'Masuk Ke Sistem'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;