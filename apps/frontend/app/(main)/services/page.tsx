import React from 'react';
import Link from 'next/link';

export default function ServicesPage() {
  return (
    <div className="font-display bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen transition-colors duration-300">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 w-full">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white">
              <span className="material-icons">account_balance</span>
            </div>
            <div>
              <h1 className="text-lg font-bold leading-tight">Dinas Pendidikan</h1>
              <p className="text-xs text-slate-500 dark:text-slate-400">Portal Layanan Terpadu</p>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">Beranda</Link>
            <Link href="/services" className="text-sm font-medium text-primary border-b-2 border-primary pb-1">Layanan</Link>
            <Link href="/info" className="text-sm font-medium hover:text-primary transition-colors">Berita</Link>
            <Link href="/contact" className="text-sm font-medium hover:text-primary transition-colors">Kontak</Link>
          </nav>
          <div className="flex items-center gap-4">
            <button className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800">
              <span className="material-icons text-slate-600 dark:text-slate-300">dark_mode</span>
            </button>
            <button className="bg-primary text-white px-5 py-2 rounded-lg font-medium text-sm hover:bg-primary/90 transition-all">
              Masuk
            </button>
          </div>
        </div>
      </header>
      <section className="relative py-16 bg-white dark:bg-slate-900 overflow-hidden mt-20">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <img alt="Background pattern" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCJl6kRjOV4gYkSSgoPbargGQO1HARWp3b9wvJIQxYNtW-HKfy6gRePpw4GLtw_x_LniU4_8EBAHaT2diNQ-ErK3Wkth91BEcVZdC0bHLj2_UGlgrF7aWSE_qp1ytpel6sMLhGrcdk8RImp28XBo6YwzIg2ZkD-JyKMoIyZ8U12K4HxQVti7MwGf8zU_VUyYT-p2dzGtNXsvFvqr-ftD13SCSmP4x4dGCQ7JcLbIjeKitUwoSPajM0rAlrHYMRprQoF8eOS91MtqhjZ" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center max-w-3xl">
          <h2 className="text-4xl font-extrabold mb-4 tracking-tight">Pusat Layanan Publik</h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg mb-8">Temukan berbagai layanan kependidikan digital untuk siswa, guru, dan masyarakat umum secara transparan dan akuntabel.</p>
          <div className="relative group">
            <span className="material-icons absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">search</span>
            <input className="w-full pl-12 pr-4 py-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="Cari layanan (contoh: Beasiswa, Mutasi Siswa, NUPTK)..." type="text" />
          </div>
        </div>
      </section>
      <div className="sticky top-20 z-40 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md py-4 border-b border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-3">
            <button className="bg-primary text-white px-6 py-2 rounded-full text-sm font-medium shadow-md">Semua Layanan</button>
            <button className="bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 px-6 py-2 rounded-full text-sm font-medium border border-slate-200 dark:border-slate-700 hover:border-primary transition-all">Layanan Siswa</button>
            <button className="bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 px-6 py-2 rounded-full text-sm font-medium border border-slate-200 dark:border-slate-700 hover:border-primary transition-all">Layanan Guru</button>
            <button className="bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 px-6 py-2 rounded-full text-sm font-medium border border-slate-200 dark:border-slate-700 hover:border-primary transition-all">Masyarakat Umum</button>
          </div>
        </div>
      </div>
      <main className="container mx-auto px-4 py-12">
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-8 w-2 bg-primary rounded-full"></div>
            <h3 className="text-2xl font-bold">Layanan Siswa & Mahasiswa</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 hover:shadow-lg transition-all group">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                <span className="material-icons text-primary group-hover:text-white">school</span>
              </div>
              <h4 className="text-xl font-bold mb-2">Pendaftaran Beasiswa</h4>
              <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 leading-relaxed">Pengajuan bantuan biaya pendidikan untuk siswa berprestasi dan kurang mampu tingkat SD, SMP, SMA.</p>
              <button className="flex items-center gap-2 text-primary font-bold text-sm hover:gap-3 transition-all">
                Pelajari Selengkapnya <span className="material-icons text-sm">arrow_forward</span>
              </button>
            </div>
            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 hover:shadow-lg transition-all group">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                <span className="material-icons text-primary group-hover:text-white">swap_horiz</span>
              </div>
              <h4 className="text-xl font-bold mb-2">Mutasi Siswa</h4>
              <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 leading-relaxed">Prosedur perpindahan siswa antar sekolah baik di dalam maupun ke luar daerah secara digital.</p>
              <button className="flex items-center gap-2 text-primary font-bold text-sm hover:gap-3 transition-all">
                Pelajari Selengkapnya <span className="material-icons text-sm">arrow_forward</span>
              </button>
            </div>
            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 hover:shadow-lg transition-all group">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                <span className="material-icons text-primary group-hover:text-white">verified</span>
              </div>
              <h4 className="text-xl font-bold mb-2">Legalisir Ijazah</h4>
              <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 leading-relaxed">Verifikasi dan pengesahan fotokopi ijazah untuk keperluan administrasi pendidikan atau pekerjaan.</p>
              <button className="flex items-center gap-2 text-primary font-bold text-sm hover:gap-3 transition-all">
                Pelajari Selengkapnya <span className="material-icons text-sm">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-8 w-2 bg-primary rounded-full"></div>
            <h3 className="text-2xl font-bold">Layanan Guru & Tenaga Kependidikan</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 hover:shadow-lg transition-all group">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                <span className="material-icons text-primary group-hover:text-white">badge</span>
              </div>
              <h4 className="text-xl font-bold mb-2">Pengajuan NUPTK</h4>
              <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 leading-relaxed">Proses penerbitan Nomor Unik Pendidik dan Tenaga Kependidikan untuk guru PNS maupun Non-PNS.</p>
              <button className="flex items-center gap-2 text-primary font-bold text-sm hover:gap-3 transition-all">
                Pelajari Selengkapnya <span className="material-icons text-sm">arrow_forward</span>
              </button>
            </div>
            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 hover:shadow-lg transition-all group">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                <span className="material-icons text-primary group-hover:text-white">trending_up</span>
              </div>
              <h4 className="text-xl font-bold mb-2">Kenaikan Pangkat</h4>
              <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 leading-relaxed">Sistem informasi untuk pengusulan kenaikan golongan dan pangkat fungsional guru secara berkala.</p>
              <button className="flex items-center gap-2 text-primary font-bold text-sm hover:gap-3 transition-all">
                Pelajari Selengkapnya <span className="material-icons text-sm">arrow_forward</span>
              </button>
            </div>
            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 hover:shadow-lg transition-all group">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                <span className="material-icons text-primary group-hover:text-white">workspace_premium</span>
              </div>
              <h4 className="text-xl font-bold mb-2">Sertifikasi Guru</h4>
              <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 leading-relaxed">Informasi seputar pelaksanaan Pendidikan Profesi Guru (PPG) dan pencairan tunjangan sertifikasi.</p>
              <button className="flex items-center gap-2 text-primary font-bold text-sm hover:gap-3 transition-all">
                Pelajari Selengkapnya <span className="material-icons text-sm">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>
        <section className="bg-primary rounded-3xl p-8 md:p-12 mb-16 text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-20 -mt-20 blur-3xl"></div>
          <div className="relative z-10">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold mb-4">Alur Layanan Digital</h3>
              <p className="text-white/80 max-w-2xl mx-auto">Ikuti 5 langkah mudah untuk menyelesaikan permohonan layanan pendidikan Anda secara online.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-primary mb-4 shadow-lg">
                  <span className="material-icons text-3xl font-bold">how_to_reg</span>
                </div>
                <h5 className="font-bold mb-1">1. Registrasi Akun</h5>
                <p className="text-xs text-white/70">Daftar menggunakan NIK atau NUPTK</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-primary mb-4 shadow-lg">
                  <span className="material-icons text-3xl font-bold">list_alt</span>
                </div>
                <h5 className="font-bold mb-1">2. Pilih Layanan</h5>
                <p className="text-xs text-white/70">Tentukan jenis layanan yang dibutuhkan</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-primary mb-4 shadow-lg">
                  <span className="material-icons text-3xl font-bold">cloud_upload</span>
                </div>
                <h5 className="font-bold mb-1">3. Unggah Berkas</h5>
                <p className="text-xs text-white/70">Lampirkan dokumen pendukung digital</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-primary mb-4 shadow-lg">
                  <span className="material-icons text-3xl font-bold">rule</span>
                </div>
                <h5 className="font-bold mb-1">4. Verifikasi</h5>
                <p className="text-xs text-white/70">Tim kami memeriksa kelengkapan data</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-primary mb-4 shadow-lg">
                  <span className="material-icons text-3xl font-bold">download</span>
                </div>
                <h5 className="font-bold mb-1">5. Selesai</h5>
                <p className="text-xs text-white/70">Unduh hasil layanan atau sertifikat</p>
              </div>
            </div>
          </div>
        </section>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-8 w-2 bg-primary rounded-full"></div>
              <h3 className="text-2xl font-bold">Masyarakat Umum</h3>
            </div>
            <div className="space-y-4">
              <div className="bg-white dark:bg-slate-800 p-5 rounded-xl border border-slate-100 dark:border-slate-700 flex items-center gap-4 hover:border-primary/50 transition-all cursor-pointer">
                <div className="p-3 bg-slate-100 dark:bg-slate-700 rounded-lg text-primary">
                  <span className="material-icons">query_stats</span>
                </div>
                <div className="flex-1">
                  <h5 className="font-bold">Permohonan Data Pendidikan</h5>
                  <p className="text-sm text-slate-500">Akses data statistik sekolah untuk keperluan riset.</p>
                </div>
                <span className="material-icons text-slate-300">chevron_right</span>
              </div>
              <div className="bg-white dark:bg-slate-800 p-5 rounded-xl border border-slate-100 dark:border-slate-700 flex items-center gap-4 hover:border-primary/50 transition-all cursor-pointer">
                <div className="p-3 bg-slate-100 dark:bg-slate-700 rounded-lg text-primary">
                  <span className="material-icons">local_library</span>
                </div>
                <div className="flex-1">
                  <h5 className="font-bold">Pendaftaran Kursus LKP</h5>
                  <p className="text-sm text-slate-500">Daftar lembaga kursus dan pelatihan masyarakat.</p>
                </div>
                <span className="material-icons text-slate-300">chevron_right</span>
              </div>
              <div className="bg-white dark:bg-slate-800 p-5 rounded-xl border border-slate-100 dark:border-slate-700 flex items-center gap-4 hover:border-primary/50 transition-all cursor-pointer">
                <div className="p-3 bg-slate-100 dark:bg-slate-700 rounded-lg text-primary">
                  <span className="material-icons">campaign</span>
                </div>
                <div className="flex-1">
                  <h5 className="font-bold">Layanan Pengaduan</h5>
                  <p className="text-sm text-slate-500">Sampaikan keluhan atau saran terkait kualitas pendidikan.</p>
                </div>
                <span className="material-icons text-slate-300">chevron_right</span>
              </div>
            </div>
          </div>
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold mb-6">Butuh Bantuan?</h3>
              <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-100 dark:border-slate-700 shadow-sm">
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">Jika Anda mengalami kendala dalam menggunakan layanan kami, hubungi tim support kami.</p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="material-icons text-primary text-xl">phone</span>
                    <div>
                      <p className="text-xs text-slate-500">Call Center</p>
                      <p className="font-bold text-sm">(021) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="material-icons text-primary text-xl">email</span>
                    <div>
                      <p className="text-xs text-slate-500">Email Support</p>
                      <p className="font-bold text-sm">helpdesk@disdik.go.id</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="material-icons text-primary text-xl">schedule</span>
                    <div>
                      <p className="text-xs text-slate-500">Jam Operasional</p>
                      <p className="font-bold text-sm">Senin - Jumat | 08:00 - 16:00</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-slate-900 rounded-xl p-6 text-white">
              <h4 className="font-bold mb-2">Unduh Aplikasi Mobile</h4>
              <p className="text-xs text-slate-400 mb-4">Akses semua layanan dalam genggaman Anda melalui aplikasi Disdik Mobile.</p>
              <div className="flex gap-2">
                <div className="bg-white/10 hover:bg-white/20 p-2 rounded-lg cursor-pointer transition-all flex items-center gap-2 border border-white/10 flex-1">
                  <span className="material-icons text-lg">play_arrow</span>
                  <span className="text-[10px] font-medium">Google Play</span>
                </div>
                <div className="bg-white/10 hover:bg-white/20 p-2 rounded-lg cursor-pointer transition-all flex items-center gap-2 border border-white/10 flex-1">
                  <span className="material-icons text-lg">apple</span>
                  <span className="text-[10px] font-medium">App Store</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-primary rounded flex items-center justify-center text-white">
                  <span className="material-icons text-sm">account_balance</span>
                </div>
                <h2 className="font-bold text-lg">Dinas Pendidikan</h2>
              </div>
              <p className="text-sm text-slate-500 leading-relaxed">Berkomitmen memajukan kualitas pendidikan melalui transformasi layanan digital yang inklusif dan transparan.</p>
            </div>
            <div>
              <h5 className="font-bold mb-6">Tautan Cepat</h5>
              <ul className="space-y-3 text-sm text-slate-500">
                <li><Link href="/profile" className="hover:text-primary transition-colors">Profil Dinas</Link></li>
                <li><a href="#" className="hover:text-primary transition-colors">Struktur Organisasi</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Visi & Misi</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Program Strategis</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold mb-6">Layanan Populer</h5>
              <ul className="space-y-3 text-sm text-slate-500">
                <li><a href="#" className="hover:text-primary transition-colors">Beasiswa Daerah</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">PPDB Online</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Portal Guru</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Sertifikasi GTK</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold mb-6">Lokasi Kami</h5>
              <div className="rounded-lg overflow-hidden h-32 mb-4 grayscale opacity-70">
                <img alt="Location map" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBo0SO48GO5p6ue0Xp_7Vg-5ZjPJJWFi2iQO9gfBijxbp0YBgHjGdk5jsDyPmFOAumdFFIKELW9dsBQI_GxA_eTGIehV9PaLzv4BmOKjMjq2pVJZRu4S5c1oqe3tDz56CaRAQMmFSLtG2310_q1BHfMe1AF0fd-waMQhrWHr5nMk2EXXZh6m4udF7v4YrM3qId2FQpw5Kq56Koi_fRGtF4tESTrr8zNo6ZYq4mNAGFk76OvdS10QtdHNq2tbhBCwo8Hw1EQwRhcwpln" />
              </div>
              <p className="text-xs text-slate-500">Jl. Pendidikan No. 123, Kompleks Perkantoran Pemerintah Daerah.</p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-slate-100 dark:border-slate-800 text-slate-400 text-xs gap-4">
            <p>© 2024 Dinas Pendidikan. All Rights Reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-primary">Kebijakan Privasi</a>
              <a href="#" className="hover:text-primary">Syarat & Ketentuan</a>
              <a href="#" className="hover:text-primary">Peta Situs</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}