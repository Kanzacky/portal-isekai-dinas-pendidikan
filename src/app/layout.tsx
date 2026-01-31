import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dinas Pendidikan Portal',
  description: 'Portal layanan terpadu Dinas Pendidikan.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="light">
      <head>
        <script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
        <link href="https://fonts.googleapis.com/css2?family=Lexend:wght@100..900&family=Public+Sans:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
        <script dangerouslySetInnerHTML={{__html: `
            tailwind.config = {
                darkMode: "class",
                theme: {
                    extend: {
                        colors: {
                            "primary": "#2b8cee",
                            "accent": "#f97316",
                            "background-light": "#f6f7f8",
                            "background-dark": "#101922",
                        },
                        fontFamily: {
                            "display": ["Lexend", "sans-serif"],
                            "public": ["Public Sans", "sans-serif"]
                        },
                        borderRadius: {
                            "DEFAULT": "0.25rem",
                            "lg": "0.5rem",
                            "xl": "0.75rem",
                            "full": "9999px"
                        },
                    },
                },
            }
        `}} />
        <style dangerouslySetInnerHTML={{__html: `
            body {
                font-family: 'Lexend', sans-serif;
            }
            .material-symbols-outlined {
                font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
            }
            .glass-card {
                background: rgba(255, 255, 255, 0.65);
                backdrop-filter: blur(12px);
                -webkit-backdrop-filter: blur(12px);
                border: 1px solid rgba(255, 255, 255, 0.3);
            }
            .dark .glass-card {
                background: rgba(25, 35, 45, 0.7);
                border: 1px solid rgba(255, 255, 255, 0.1);
            }
            .nav-glass {
                background-color: rgba(255, 255, 255, 0.6);
                backdrop-filter: blur(12px);
            }
            .dark .nav-glass {
                background-color: rgba(16, 25, 34, 0.6);
            }
            .no-scrollbar::-webkit-scrollbar {
              display: none;
            }
            .no-scrollbar {
              -ms-overflow-style: none;
              scrollbar-width: none;
            }
        `}} />
      </head>
      <body className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 transition-colors duration-300">
        {children}
      </body>
    </html>
  );
}