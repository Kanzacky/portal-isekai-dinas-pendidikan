import React from 'react';
import Link from 'next/link';

export default function ContactPage() {
  return (
    <div className="bg-background-light dark:bg-background-dark text-[#0d141b] dark:text-slate-50 transition-colors duration-200">
      <header className="fixed top-0 left-0 right-0 z-50 w-full bg-white/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-solid border-[#e7edf3] dark:border-slate-800 px-4 md:px-20 lg:px-40 py-3">
        <div className="max-w-[1200px] mx-auto flex items-center justify-between whitespace-nowrap">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-3">
              <div className="text-primary">
                <svg className="size-8" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                  <path d="M44 4H30.6666V17.3334H17.3334V30.6666H4V44H44V4Z" fill="currentColor"></path>
                </svg>
              </div>
              <h2 className="text-lg font-bold leading-tight tracking-tight">Dinas Pendidikan</h2>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">Beranda</Link>
              <Link href="/services" className="text-sm font-medium hover:text-primary transition-colors">Layanan</Link>
              <Link href="/info" className="text-sm font-medium hover:text-primary transition-colors">Berita</Link>
              <Link href="/contact" className="text-sm font-medium text-primary">Hubungi Kami</Link>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <label className="hidden lg:flex items-stretch rounded-lg bg-[#e7edf3] dark:bg-slate-800 h-10 w-64">
              <div className="flex items-center justify-center pl-4 text-[#4c739a]">
                <span className="material-symbols-outlined text-xl">search</span>
              </div>
              <input className="w-full border-none bg-transparent focus:ring-0 text-sm placeholder:text-[#4c739a] px-2" placeholder="Cari informasi..." type="text" />
            </label>
            <button className="bg-primary text-white text-sm font-bold px-5 h-10 rounded-lg hover:bg-primary/90 transition-all">
              Login
            </button>
          </div>
        </div>
      </header>
      <main className="max-w-[1200px] mx-auto px-4 md:px-20 lg:px-40 py-10 mt-16">
        <div className="mb-10">
          <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4">Hubungi Kami</h1>
          <p className="text-[#4c739a] dark:text-slate-400 text-lg max-w-2xl">Kami berkomitmen untuk memberikan pelayanan pendidikan terbaik bagi masyarakat. Silakan hubungi kami melalui saluran di bawah ini.</p>
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
              <h2 className="text-2xl font-bold mb-6">Informasi Kontak</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4 p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm">
                  <div className="bg-primary/10 p-3 rounded-lg text-primary">
                    <span className="material-symbols-outlined text-3xl">home</span>
                  </div>
                  <div>
                    <p className="font-bold text-lg">Alamat Kantor</p>
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
                    <p className="font-bold text-lg">Layanan Hotline</p>
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
                    <p className="font-bold text-lg">Email Resmi</p>
                    <p className="text-[#4c739a] dark:text-slate-400">info@disdik.go.id<br />pengaduan@disdik.go.id</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm">
                  <div className="bg-primary/10 p-3 rounded-lg text-primary">
                    <span className="material-symbols-outlined text-3xl">schedule</span>
                  </div>
                  <div>
                    <p className="font-bold text-lg">Jam Operasional</p>
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
            <h2 className="text-2xl font-bold mb-2">Kirim Pesan</h2>
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
      <footer className="mt-20 py-10 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-background-dark px-4 md:px-20 lg:px-40">
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3 opacity-60">
            <div className="text-[#0d141b] dark:text-white">
              <svg className="size-6" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path d="M44 4H30.6666V17.3334H17.3334V30.6666H4V44H44V4Z" fill="currentColor"></path>
              </svg>
            </div>
            <p className="text-sm font-bold">© 2024 Dinas Pendidikan. Hak Cipta Dilindungi.</p>
          </div>
          <div className="flex gap-8 text-sm font-medium text-[#4c739a] dark:text-slate-400">
            <a href="#" className="hover:text-primary">Kebijakan Privasi</a>
            <a href="#" className="hover:text-primary">Syarat & Ketentuan</a>
            <a href="#" className="hover:text-primary">Peta Situs</a>
          </div>
        </div>
      </footer>
    </div>
  );
}