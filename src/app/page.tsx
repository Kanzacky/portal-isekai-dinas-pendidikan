import React from 'react';
import Link from 'next/link';

export default function LandingPage() {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <header className="fixed top-0 left-0 right-0 z-[100] nav-glass shadow-sm border-b border-white/20 dark:border-slate-800/50">
          <div className="max-w-[1280px] mx-auto px-6 py-4 flex items-center justify-between whitespace-nowrap">
            <div className="flex items-center gap-3 group cursor-pointer">
              <div className="size-10 bg-gradient-to-br from-primary to-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-primary/20 transition-transform group-hover:scale-105">
                <span className="material-symbols-outlined text-2xl">school</span>
              </div>
              <div className="flex flex-col">
                <h2 className="text-[#0d141b] dark:text-white text-lg font-black leading-none tracking-tight">DINAS PENDIDIKAN</h2>
                <span className="text-[10px] text-slate-500 dark:text-slate-400 font-bold uppercase tracking-[0.2em]">Pusat Layanan Terpadu</span>
              </div>
            </div>
            <nav className="hidden md:flex items-center gap-10">
              <Link href="/" className="relative text-primary text-sm font-semibold transition-all duration-300">Home</Link>
              <Link href="/profile" className="relative text-slate-700 dark:text-slate-200 text-sm font-semibold transition-all duration-300 hover:text-primary">Profile</Link>
              <Link href="/services" className="relative text-slate-700 dark:text-slate-200 text-sm font-semibold transition-all duration-300 hover:text-primary">Services</Link>
              <Link href="/info" className="relative text-slate-700 dark:text-slate-200 text-sm font-semibold transition-all duration-300 hover:text-primary">Information</Link>
              <Link href="/contact" className="relative text-slate-700 dark:text-slate-200 text-sm font-semibold transition-all duration-300 hover:text-primary">Contact</Link>
            </nav>
            <div className="flex items-center gap-4">
              <Link href="/dashboard" className="hidden lg:block text-slate-600 dark:text-slate-300 text-sm font-bold hover:text-primary transition-colors">
                Masuk
              </Link>
              <Link href="/services" className="flex min-w-[140px] cursor-pointer items-center justify-center rounded-full h-11 px-6 bg-primary text-white text-sm font-bold shadow-lg shadow-primary/30 hover:bg-primary/90 hover:shadow-xl hover:-translate-y-0.5 transition-all">
                <span>Layanan Online</span>
              </Link>
            </div>
          </div>
        </header>
        <main className="flex-1 mt-20">
          <div className="max-w-[1280px] mx-auto px-6 py-12 md:py-20">
            <div className="@container">
              <div className="flex flex-col gap-10 @[864px]:flex-row items-center">
                <div className="w-full relative group @[864px]:w-1/2">
                  <div className="absolute -inset-4 bg-primary/10 rounded-2xl blur-2xl group-hover:bg-primary/20 transition duration-500"></div>
                  <div className="relative w-full aspect-[4/3] bg-center bg-no-repeat bg-cover rounded-2xl shadow-2xl border-4 border-white dark:border-slate-800 overflow-hidden" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCJwsZA2zdoH1fCL3ODxHhF8aLoev3rj4rICwyT8DZQ0zONPESChRI7E3jYKYJX9c0WEv_o13V0XOyWUX2Z69pJDQRPJOPlGPPrj6MjNQ73PH7PbAkOQIVNN7YPzfYgFZA0iqVduzd6nRB8l6sFvWlnm8BqQT1T3_ftzMrCKQ6zEy506g04wNPp6tVfARsyL1yEFc-Rn6M30xhjzlu0hHuIcjXZJATyxyi0lxoO42RsWzoOCbDoZbMimalJLCLjp9agVPy48a79G9A4")' }}>
                  </div>
                  <div className="absolute -bottom-6 -right-6 bg-accent p-6 rounded-2xl shadow-xl hidden lg:block text-white">
                    <p className="text-3xl font-black">100%</p>
                    <p className="text-xs font-bold uppercase tracking-widest">Akses Pendidikan</p>
                  </div>
                </div>
                <div className="flex flex-col gap-8 w-full @[864px]:w-1/2">
                  <div className="flex flex-col gap-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary rounded-full w-fit">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                      </span>
                      <span className="text-xs font-bold uppercase tracking-wider">Portal Informasi Resmi</span>
                    </div>
                    <h1 className="text-slate-900 dark:text-white text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight">
                      Membangun Masa Depan Melalui <span className="text-primary underline decoration-accent/30">Pendidikan</span> Berkualitas
                    </h1>
                    <p className="text-slate-600 dark:text-slate-400 text-lg font-medium leading-relaxed max-w-[540px]">
                      Portal resmi pelayanan informasi, administrasi, dan sumber daya pendidikan terpadu untuk masyarakat.
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row w-full max-w-[560px] gap-2 p-2 bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-slate-100 dark:border-slate-700">
                    <div className="flex flex-1 items-center px-4 gap-3">
                      <span className="material-symbols-outlined text-slate-400">search</span>
                      <input className="w-full border-none bg-transparent focus:ring-0 text-slate-900 dark:text-white placeholder:text-slate-400 font-medium py-3" placeholder="Cari sumber daya, sekolah, atau layanan..." />
                    </div>
                    <button className="bg-primary text-white px-8 py-3 rounded-lg font-bold hover:bg-primary/90 transition-all shadow-md">
                      Cari
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <section className="bg-primary py-16 dark:bg-primary/20">
            <div className="max-w-[1280px] mx-auto px-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 text-white flex items-center gap-6">
                  <div className="size-16 bg-white/20 rounded-xl flex items-center justify-center">
                    <span className="material-symbols-outlined text-4xl">school</span>
                  </div>
                  <div>
                    <p className="text-white/70 text-sm font-bold uppercase tracking-widest">Total Sekolah</p>
                    <p className="text-4xl font-black mt-1">1,240+</p>
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 text-white flex items-center gap-6">
                  <div className="size-16 bg-white/20 rounded-xl flex items-center justify-center">
                    <span className="material-symbols-outlined text-4xl">supervisor_account</span>
                  </div>
                  <div>
                    <p className="text-white/70 text-sm font-bold uppercase tracking-widest">Total Guru</p>
                    <p className="text-4xl font-black mt-1">15,800+</p>
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 text-white flex items-center gap-6">
                  <div className="size-16 bg-white/20 rounded-xl flex items-center justify-center">
                    <span className="material-symbols-outlined text-4xl">group</span>
                  </div>
                  <div>
                    <p className="text-white/70 text-sm font-bold uppercase tracking-widest">Total Siswa</p>
                    <p className="text-4xl font-black mt-1">245,000+</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="py-20 max-w-[1280px] mx-auto px-6">
            <div className="flex items-end justify-between mb-12 border-l-4 border-accent pl-6">
              <div>
                <h2 className="text-slate-900 dark:text-white text-3xl font-black">Akses Cepat Layanan</h2>
                <p className="text-slate-500 dark:text-slate-400 mt-2 font-medium">Temukan layanan administrasi dan informasi dengan mudah</p>
              </div>
              <Link href="/services" className="hidden md:flex items-center gap-2 text-primary font-bold hover:underline">
                Lihat Semua Layanan <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="group bg-white dark:bg-slate-800 p-8 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                <div className="size-14 bg-accent/10 rounded-xl flex items-center justify-center text-accent mb-6 group-hover:bg-accent group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-3xl">how_to_reg</span>
                </div>
                <h3 className="text-slate-900 dark:text-white text-xl font-bold mb-2">PPDB</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-6">Pendaftaran Peserta Didik Baru tingkat TK, SD, dan SMP.</p>
                <a href="#" className="inline-flex items-center text-primary font-bold text-sm gap-2">
                  Daftar Sekarang <span className="material-symbols-outlined text-sm">arrow_outward</span>
                </a>
              </div>
              <div className="group bg-white dark:bg-slate-800 p-8 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                <div className="size-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-3xl">badge</span>
                </div>
                <h3 className="text-slate-900 dark:text-white text-xl font-bold mb-2">Sertifikasi Guru</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-6">Layanan administrasi, tunjangan, dan pengembangan profesi guru.</p>
                <a href="#" className="inline-flex items-center text-primary font-bold text-sm gap-2">
                  Portal Guru <span className="material-symbols-outlined text-sm">arrow_outward</span>
                </a>
              </div>
              <div className="group bg-white dark:bg-slate-800 p-8 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                <div className="size-14 bg-green-500/10 rounded-xl flex items-center justify-center text-green-500 mb-6 group-hover:bg-green-500 group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-3xl">featured_play_list</span>
                </div>
                <h3 className="text-slate-900 dark:text-white text-xl font-bold mb-2">Info Beasiswa</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-6">Informasi bantuan pendidikan daerah untuk siswa berprestasi.</p>
                <a href="#" className="inline-flex items-center text-primary font-bold text-sm gap-2">
                  Lihat Syarat <span className="material-symbols-outlined text-sm">arrow_outward</span>
                </a>
              </div>
              <div className="group bg-white dark:bg-slate-800 p-8 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                <div className="size-14 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-500 mb-6 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-3xl">database</span>
                </div>
                <h3 className="text-slate-900 dark:text-white text-xl font-bold mb-2">Dapodik</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-6">Sinkronisasi Data Pokok Pendidikan untuk sekolah-sekolah.</p>
                <a href="#" className="inline-flex items-center text-primary font-bold text-sm gap-2">
                  Akses Data <span className="material-symbols-outlined text-sm">arrow_outward</span>
                </a>
              </div>
            </div>
          </section>
          <section className="bg-slate-50 dark:bg-slate-900/50 py-24">
            <div className="max-w-[1280px] mx-auto px-6">
              <div className="text-center mb-16">
                <h2 className="text-slate-900 dark:text-white text-4xl font-black mb-4">Berita Terbaru</h2>
                <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto font-medium">Informasi terkini mengenai kebijakan, prestasi, dan agenda pendidikan di wilayah kami.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="flex flex-col bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-md group border border-slate-100 dark:border-slate-700">
                  <div className="relative h-56 overflow-hidden">
                    <div className="absolute top-4 left-4 z-10 bg-accent text-white px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">Prestasi</div>
                    <div className="w-full h-full bg-center bg-no-repeat bg-cover group-hover:scale-110 transition-transform duration-700" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB6XWOfWoCS-7fB_gG0Ak5wvFk48CSDoRKHVek5qfVNjHdPSghLtcBZi2dlcl7U7PGHcdy2n44ve8WWdjMJLIa3eNnluVbJtHdj1BX74ShIG5iDIvUMt2Odma31xMtd_p78ZQ0v6_9QuvpeuUSwR4Lk6tcF3CULKvyaFsFqZgI6SiFMhDCZIskvqulB5zsqRyG1zdkMx199XTMuobLf-2WcJAoDi5catX9detKndYZtnlaYRDsnq6Aj-YLK1VvvPZclzpwbRv77tyTx")' }}></div>
                  </div>
                  <div className="p-6 flex flex-col gap-3">
                    <span className="text-slate-400 text-xs font-bold uppercase tracking-widest">24 Mei 2024</span>
                    <h3 className="text-slate-900 dark:text-white text-xl font-bold leading-tight group-hover:text-primary transition-colors">Juara Umum Olimpiade Sains Nasional Tingkat Provinsi</h3>
                    <p className="text-slate-500 dark:text-slate-400 text-sm line-clamp-2">Siswa-siswi kami berhasil memborong 15 medali emas dalam ajang OSN tahun ini...</p>
                    <a href="#" className="mt-4 font-bold text-primary text-sm inline-flex items-center gap-1 group/link">
                      Baca Selengkapnya <span className="material-symbols-outlined group-hover/link:translate-x-1 transition-transform">chevron_right</span>
                    </a>
                  </div>
                </div>
                <div className="flex flex-col bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-md group border border-slate-100 dark:border-slate-700">
                  <div className="relative h-56 overflow-hidden">
                    <div className="absolute top-4 left-4 z-10 bg-primary text-white px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">Kebijakan</div>
                    <div className="w-full h-full bg-center bg-no-repeat bg-cover group-hover:scale-110 transition-transform duration-700" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCdPfb7sBfNN5-OXTN-ZKdq5pRoTC6pyLWJX0ebhTfz2_7ektE_oe0wwdPg77VtsLK1s88PRhYLWZUyZogjCTgQXLBdNuFgKoVl7m3LW1SUvVdUYnG2bNt1rYWkUBXRvya37VxGmexrLh3iCeJG0OS3afELVkU0CozBjwkfW8x495jdnKkOpvvfF8g3IDatOZU1yMgWmLp0OpwIdYKnHmmnBkQqnKZNnPPxqfuHtJ2ovNmeXH4w0bTMHpjd6zXh15aYEdmJeg4dtik1")' }}></div>
                  </div>
                  <div className="p-6 flex flex-col gap-3">
                    <span className="text-slate-400 text-xs font-bold uppercase tracking-widest">20 Mei 2024</span>
                    <h3 className="text-slate-900 dark:text-white text-xl font-bold leading-tight group-hover:text-primary transition-colors">Digitalisasi Sekolah Menuju Kurikulum Merdeka</h3>
                    <p className="text-slate-500 dark:text-slate-400 text-sm line-clamp-2">Pemberian 5.000 unit tablet untuk mendukung pembelajaran digital di daerah terpencil...</p>
                    <a href="#" className="mt-4 font-bold text-primary text-sm inline-flex items-center gap-1 group/link">
                      Baca Selengkapnya <span className="material-symbols-outlined group-hover/link:translate-x-1 transition-transform">chevron_right</span>
                    </a>
                  </div>
                </div>
                <div className="flex flex-col bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-md group border border-slate-100 dark:border-slate-700">
                  <div className="relative h-56 overflow-hidden">
                    <div className="absolute top-4 left-4 z-10 bg-green-500 text-white px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">Agenda</div>
                    <div className="w-full h-full bg-center bg-no-repeat bg-cover group-hover:scale-110 transition-transform duration-700" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBKyQ89ziSIupWb2MhrTET9Ros34uHYRGgouuOJeByXP2yWt90EQpPNOcFzeaW8dsy2yglJu6YbYoLxA0Y6i9cSnxB7RHdd3On_2ggzC4PkVQZg2NMxOjxGnUtf7dy-hk-lYMtWRH6tEyhNnLlFai8NGMw_TCYmNvUDp4lY2nyqmOHP8gDCsJkx3rO_OYgfnviZVsMAmk7crU0EsxuTU_fhvlRTh59ozkxCnPw7959yTLDb7FwpHTuJEff1tASZiYNPZqCDRjoWUK7D")' }}></div>
                  </div>
                  <div className="p-6 flex flex-col gap-3">
                    <span className="text-slate-400 text-xs font-bold uppercase tracking-widest">18 Mei 2024</span>
                    <h3 className="text-slate-900 dark:text-white text-xl font-bold leading-tight group-hover:text-primary transition-colors">Workshop Peningkatan Kompetensi Tenaga Pendidik</h3>
                    <p className="text-slate-500 dark:text-slate-400 text-sm line-clamp-2">Pelatihan intensif untuk 500 guru mengenai metode pengajaran kreatif dan inklusif...</p>
                    <a href="#" className="mt-4 font-bold text-primary text-sm inline-flex items-center gap-1 group/link">
                      Baca Selengkapnya <span className="material-symbols-outlined group-hover/link:translate-x-1 transition-transform">chevron_right</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
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
              <p className="text-slate-400 text-xs font-medium">© 2024 Dinas Pendidikan. All rights reserved.</p>
              <div className="flex gap-6">
                <a href="#" className="text-slate-400 text-xs hover:text-primary font-medium">Kebijakan Privasi</a>
                <a href="#" className="text-slate-400 text-xs hover:text-primary font-medium">Syarat & Ketentuan</a>
                <a href="#" className="text-slate-400 text-xs hover:text-primary font-medium">Peta Situs</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}