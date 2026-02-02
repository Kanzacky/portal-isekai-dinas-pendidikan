"use client";

import React, { useState } from 'react';
import Link from 'next/link'; 
import Navbar from './Navbar';

const ContactPage: React.FC = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark text-[#0d141b] dark:text-slate-50 transition-colors duration-200">
      <Navbar />
      <main className="max-w-[1200px] mx-auto px-4 md:px-20 lg:px-40 py-10 mt-16">
        <div className="mb-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight mb-4">Hubungi Kami</h1>
          <p className="text-[#4c739a] dark:text-slate-400 text-lg md:text-xl leading-relaxed max-w-2xl">Kami berkomitmen untuk memberikan pelayanan pendidikan terbaik bagi masyarakat. Silakan hubungi kami melalui saluran di bawah ini.</p>
        </div>
        <section className="mb-12 rounded-xl overflow-hidden shadow-sm border border-slate-200 dark:border-slate-800">
          <div className="relative w-full h-[400px] bg-slate-200 dark:bg-slate-800 bg-cover bg-center" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDUkII_Jc9UNedw7nHqdcj-0hQhM-ShUCJcTjbMY3FKH9ZCcRYgTJ2z7h9_8fT1orOmTWC66ICsBGdVFc3V5A0xH8uacsLi2satObBj9fJqNIFBg-t7p4Vxm0y4cOHZmHHI8HAf6_mvxatuMVck5KN05NBxHWagZ0w83aT6DZwcISeml-NhPgIwGUYY0cPbYe3QrcJT8Rofw_IVtaA9g4g0QWcB82JzUsSRYSbHuXiaKgtWk2rp9TbTdckxPGgLmUbn4TQWgMcnI0Th")' }}>
            <div className="absolute inset-0 bg-black/5 pointer-events-none"></div>
            <div className="absolute top-4 left-4 right-4 flex justify-between items-start pointer-events-auto">
              <div className="flex bg-white dark:bg-background-dark rounded-lg shadow-lg overflow-hidden w-full max-w-md">
                <div className="flex items-center justify-center px-4 text-primary">
                  <span className="material-symbols-outlined">location_on</span>
                </div>
                <input className="flex-1 border-none bg-transparent h-12 focus:ring-0 text-sm" placeholder="Cari lokasi terdekat..." type="text" defaultValue="Jl. Pendidikan No. 123, Jakarta Pusat" />
              </div>
            </div>
            <div className="absolute bottom-4 right-4 flex flex-col gap-2">
              <div className="flex flex-col bg-white dark:bg-background-dark rounded-lg shadow-lg overflow-hidden">
                <button className="p-2 border-b border-slate-100 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800"><span className="material-symbols-outlined">add</span></button>
                <button className="p-2 hover:bg-slate-50 dark:hover:bg-slate-800"><span className="material-symbols-outlined">remove</span></button>
              </div>
              <button className="p-2 bg-white dark:bg-background-dark rounded-lg shadow-lg hover:bg-slate-50 dark:hover:bg-slate-800">
                <span className="material-symbols-outlined">my_location</span>
              </button>
            </div>
          </div>
        </section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-6">Informasi Kontak</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4 p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm">
                  <div className="bg-primary/10 p-3 rounded-lg text-primary">
                    <span className="material-symbols-outlined text-3xl">home</span>
                  </div>
                  <div>
                    <p className="font-bold text-lg md:text-xl">Alamat Kantor</p>
                    <p className="text-[#4c739a] dark:text-slate-400">Gedung Pendidikan Utama, Lantai 4<br />Jl. Pendidikan No. 123, Jakarta 12345</p>
                    <button className="mt-2 text-primary text-sm font-semibold flex items-center gap-1 hover:underline">
                      <span className="material-symbols-outlined text-sm">content_copy</span> Salin Alamat
                    </button>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm">
                  <div className="bg-primary/10 p-3 rounded-lg text-primary">
                    <span className="material-symbols-outlined text-3xl">call</span>
                  </div>
                  <div>
                    <p className="font-bold text-lg md:text-xl">Layanan Hotline</p>
                    <p className="text-[#4c739a] dark:text-slate-400">Telp: (021) 123-4567<br />WhatsApp: +62 812 3456 7890</p>
                    <div className="mt-3 flex items-center gap-2">
                      <span className="size-2 rounded-full bg-emerald-500 animate-pulse"></span>
                      <span className="text-xs font-medium text-emerald-600">Online Sekarang</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm">
                  <div className="bg-primary/10 p-3 rounded-lg text-primary">
                    <span className="material-symbols-outlined text-3xl">mail</span>
                  </div>
                  <div>
                    <p className="font-bold text-lg md:text-xl">Email Resmi</p>
                    <p className="text-[#4c739a] dark:text-slate-400">info@disdik.go.id<br />pengaduan@disdik.go.id</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm">
                  <div className="bg-primary/10 p-3 rounded-lg text-primary">
                    <span className="material-symbols-outlined text-3xl">schedule</span>
                  </div>
                  <div>
                    <p className="font-bold text-lg md:text-xl">Jam Operasional</p>
                    <p className="text-[#4c739a] dark:text-slate-400">Senin - Jumat: 08:00 - 16:00<br />Sabtu - Minggu: Tutup</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Ikuti Kami</h3>
              <div className="flex gap-3">
                <a href="#" className="size-12 rounded-full bg-white dark:bg-slate-900 flex items-center justify-center text-primary shadow-sm border border-slate-100 dark:border-slate-800 hover:bg-primary hover:text-white transition-all">
                  <span className="material-symbols-outlined">public</span>
                </a>
                <a href="#" className="size-12 rounded-full bg-white dark:bg-slate-900 flex items-center justify-center text-primary shadow-sm border border-slate-100 dark:border-slate-800 hover:bg-primary hover:text-white transition-all">
                  <span className="material-symbols-outlined">play_circle</span>
                </a>
                <a href="#" className="size-12 rounded-full bg-white dark:bg-slate-900 flex items-center justify-center text-primary shadow-sm border border-slate-100 dark:border-slate-800 hover:bg-primary hover:text-white transition-all">
                  <span className="material-symbols-outlined">camera</span>
                </a>
                <a href="#" className="size-12 rounded-full bg-white dark:bg-slate-900 flex items-center justify-center text-primary shadow-sm border border-slate-100 dark:border-slate-800 hover:bg-primary hover:text-white transition-all">
                  <span className="material-symbols-outlined">share</span>
                </a>
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-xl shadow-primary/5">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-2">Kirim Pesan</h2>
            <p className="text-[#4c739a] dark:text-slate-400 mb-8">Punya keluhan atau pertanyaan? Sampaikan kepada kami.</p>
            <form className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-sm font-semibold">Nama Lengkap</label>
                  <input className="w-full rounded-lg border-slate-200 dark:border-slate-700 bg-transparent focus:ring-primary focus:border-primary" placeholder="Contoh: Budi Santoso" type="text" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold">Alamat Email</label>
                  <input className="w-full rounded-lg border-slate-200 dark:border-slate-700 bg-transparent focus:ring-primary focus:border-primary" placeholder="budi@email.com" type="email" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold">Kategori Layanan</label>
                <select className="w-full rounded-lg border-slate-200 dark:border-slate-700 bg-transparent focus:ring-primary focus:border-primary">
                  <option>Pilih Kategori</option>
                  <option>Penerimaan Peserta Didik Baru (PPDB)</option>
                  <option>Sertifikasi Guru</option>
                  <option>Beasiswa Pendidikan</option>
                  <option>Pengaduan Sekolah</option>
                  <option>Lainnya</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold">Subjek</label>
                <input className="w-full rounded-lg border-slate-200 dark:border-slate-700 bg-transparent focus:ring-primary focus:border-primary" placeholder="Judul pesan Anda" type="text" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold">Pesan Anda</label>
                <textarea className="w-full rounded-lg border-slate-200 dark:border-slate-700 bg-transparent focus:ring-primary focus:border-primary" placeholder="Tuliskan detail pertanyaan atau laporan Anda..." rows={5}></textarea>
              </div>
              <div className="pt-2">
                <button className="w-full bg-primary text-white font-bold py-4 rounded-xl hover:bg-primary/90 shadow-lg shadow-primary/20 transition-all flex items-center justify-center gap-2" type="button">
                  <span className="material-symbols-outlined">send</span>
                  Kirim Pesan Sekarang
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
      <div className="fixed bottom-8 right-8 z-[100] group">
        <div className="absolute -top-12 right-0 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 px-4 py-2 rounded-lg shadow-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          Butuh bantuan cepat? Hubungi Live Chat
        </div>
        <button className="size-16 rounded-full bg-primary text-white shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all">
          <span className="material-symbols-outlined text-3xl">chat</span>
        </button>
      </div>
      <footer className="bg-white dark:bg-background-dark border-t border-slate-200 dark:border-slate-800 pt-16 pb-8">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-1 flex flex-col gap-6">
              <div className="flex items-center gap-3 text-primary">
                <div className="size-8 bg-primary rounded-lg flex items-center justify-center text-white">
                  <span className="material-symbols-outlined">school</span>
                </div>
                <h2 className="text-slate-900 dark:text-white text-xl font-extrabold tracking-tight">Dinas Pendidikan</h2>
              </div>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                Melayani dengan sepenuh hati untuk mencerdaskan kehidupan bangsa melalui layanan pendidikan yang prima dan transparan.
              </p>
              <div className="flex gap-4">
                <a href="#" className="size-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500 hover:bg-primary hover:text-white transition-all">
                  <span className="material-symbols-outlined text-xl">language</span>
                </a>
                <a href="#" className="size-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500 hover:bg-primary hover:text-white transition-all">
                  <span className="material-symbols-outlined text-xl">contact_support</span>
                </a>
                <a href="#" className="size-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500 hover:bg-primary hover:text-white transition-all">
                  <span className="material-symbols-outlined text-xl">alternate_email</span>
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-slate-900 dark:text-white font-bold mb-6">Tautan Cepat</h4>
              <ul className="flex flex-col gap-4">
                <li><Link href="/profile" className="text-slate-500 dark:text-slate-400 text-sm hover:text-primary font-medium">Profil Dinas</Link></li>
                <li><a href="#" className="text-slate-500 dark:text-slate-400 text-sm hover:text-primary font-medium">Struktur Organisasi</a></li>
                <li><a href="#" className="text-slate-500 dark:text-slate-400 text-sm hover:text-primary font-medium">Visi & Misi</a></li>
                <li><Link href="/info" className="text-slate-500 dark:text-slate-400 text-sm hover:text-primary font-medium">Kalender Pendidikan</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-slate-900 dark:text-white font-bold mb-6">Layanan</h4>
              <ul className="flex flex-col gap-4">
                <li><a href="#" className="text-slate-500 dark:text-slate-400 text-sm hover:text-primary font-medium">Layanan PPDB Online</a></li>
                <li><a href="#" className="text-slate-500 dark:text-slate-400 text-sm hover:text-primary font-medium">Sertifikasi & TPG</a></li>
                <li><a href="#" className="text-slate-500 dark:text-slate-400 text-sm hover:text-primary font-medium">Mutasi Siswa</a></li>
                <li><a href="#" className="text-slate-500 dark:text-slate-400 text-sm hover:text-primary font-medium">Pengaduan Masyarakat</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-slate-900 dark:text-white font-bold mb-6">Kontak Kami</h4>
              <ul className="flex flex-col gap-4">
                <li className="flex gap-3">
                  <span className="material-symbols-outlined text-primary">location_on</span>
                  <span className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">Jl. Pendidikan No. 123, Pusat Pemerintahan Kota, Indonesia 12345</span>
                </li>
                <li className="flex gap-3">
                  <span className="material-symbols-outlined text-primary">call</span>
                  <span className="text-slate-500 dark:text-slate-400 text-sm">(021) 1234-5678</span>
                </li>
                <li className="flex gap-3">
                  <span className="material-symbols-outlined text-primary">mail</span>
                  <span className="text-slate-500 dark:text-slate-400 text-sm">info@disdik-daerah.go.id</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-100 dark:border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-xs font-medium">© 2026 Dinas Pendidikan. Hak Cipta Dilindungi.</p>
            <div className="flex gap-6">
              <a href="#" className="text-slate-400 text-xs hover:text-primary font-medium">Kebijakan Privasi</a>
              <a href="#" className="text-slate-400 text-xs hover:text-primary font-medium">Syarat & Ketentuan</a>
              <a href="#" className="text-slate-400 text-xs hover:text-primary font-medium">Peta Situs</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ContactPage;