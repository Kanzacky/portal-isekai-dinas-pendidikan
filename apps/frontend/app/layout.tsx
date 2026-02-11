import React from 'react';
import { Metadata } from 'next';
import { SessionProvider } from "next-auth/react"; 
import Navbar from "@/components/Navbar"; 
import './globals.css';

export const metadata: Metadata = {
  title: 'Dinas Pendidikan Portal',
  description: 'Portal layanan terpadu Dinas Pendidikan.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap'" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      </head>
      <body className="bg-[#f6f7f8] dark:bg-[#101922] text-slate-900 dark:text-slate-100 transition-colors duration-300">
        <SessionProvider>
          <Navbar /> 
          <main>
            {children}
          </main>
        </SessionProvider>
      </body>
    </html>
  );
}