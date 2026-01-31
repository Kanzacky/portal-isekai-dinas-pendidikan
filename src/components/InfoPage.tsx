import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

const InfoPage: React.FC = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark text-[#0d141b] dark:text-slate-50 min-h-screen transition-colors duration-200 font-public">
      <Navbar />
      <main className="max-w-[1280px] mx-auto px-4 md:px-10 py-8 mt-16">
        <nav className="flex items-center gap-2 mb-6">
          <Link to="/" className="text-[#4c739a] hover:text-primary text-sm font-medium flex items-center gap-1">
            <span className="material-symbols-outlined text-sm">home</span>
            Beranda
          </Link>
          <span className="text-[#4c739a] text-sm">/</span>
          <span className="text-[#0d141b] dark:text-slate-300 text-sm font-medium">Informasi & Transparansi</span>
        </nav>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-10">
          <div className="max-w-2xl">
            <h1 className="text-[#0d141b] dark:text-white text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight mb-3">Informasi & Transparansi</h1>
            <p className="text-[#4c739a] dark:text-slate-400 text-lg md:text-xl leading-relaxed">Akses publik untuk laporan kinerja, anggaran, regulasi pendidikan, dan dokumen resmi lainnya guna mendukung tata kelola yang terbuka.</p>
          </div>
          <Link to="/contact" className="flex items-center gap-2 bg-white dark:bg-slate-800 border border-[#cfdbe7] dark:border-slate-700 text-[#0d141b] dark:text-slate-200 py-2.5 px-6 rounded-lg font-bold text-sm hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
            <span className="material-symbols-outlined text-lg">mail</span>
            Hubungi Kami
          </Link>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-8">
            <div className="border-b border-[#cfdbe7] dark:border-slate-800 mb-8 flex items-center overflow-x-auto gap-8 no-scrollbar">
              <button className="border-b-[3px] border-primary text-primary pb-3 pt-2 font-bold text-sm whitespace-nowrap">Semua Dokumen</button>
              <button className="border-b-[3px] border-transparent text-[#4c739a] pb-3 pt-2 font-bold text-sm hover:text-primary transition-colors whitespace-nowrap">Laporan Tahunan</button>
              <button className="border-b-[3px] border-transparent text-[#4c739a] pb-3 pt-2 font-bold text-sm hover:text-primary transition-colors whitespace-nowrap">Kalender Pendidikan</button>
              <button className="border-b-[3px] border-transparent text-[#4c739a] pb-3 pt-2 font-bold text-sm hover:text-primary transition-colors whitespace-nowrap">Regulasi</button>
              <button className="border-b-[3px] border-transparent text-[#4c739a] pb-3 pt-2 font-bold text-sm hover:text-primary transition-colors whitespace-nowrap">Anggaran</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white dark:bg-slate-900 p-5 rounded-xl border border-[#e7edf3] dark:border-slate-800 hover:shadow-md transition-shadow group">
                <div className="flex items-start justify-between mb-4">
                  <div className="size-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-3xl">description</span>
                  </div>
                  <button className="text-[#4c739a] hover:text-primary">
                    <span className="material-symbols-outlined">download</span>
                  </button>
                </div>
                <h3 className="text-[#0d141b] dark:text-white font-bold text-lg md:text-xl mb-1 group-hover:text-primary transition-colors">Laporan Akuntabilitas 2023</h3>
                <p className="text-xs text-[#4c739a] uppercase tracking-wider font-bold mb-3">Laporan Tahunan</p>
                <div className="flex items-center gap-4 text-sm text-[#4c739a] dark:text-slate-500">
                  <span className="flex items-center gap-1"><span className="material-symbols-outlined text-base">picture_as_pdf</span> 4.5 MB</span>
                  <span className="flex items-center gap-1"><span className="material-symbols-outlined text-base">calendar_today</span> 12 Jan 2024</span>
                </div>
              </div>
              <div className="bg-white dark:bg-slate-900 p-5 rounded-xl border border-[#e7edf3] dark:border-slate-800 hover:shadow-md transition-shadow group">
                <div className="flex items-start justify-between mb-4">
                  <div className="size-12 bg-green-500/10 rounded-lg flex items-center justify-center text-green-500">
                    <span className="material-symbols-outlined text-3xl">event_note</span>
                  </div>
                  <button className="text-[#4c739a] hover:text-primary">
                    <span className="material-symbols-outlined">download</span>
                  </button>
                </div>
                <h3 className="text-[#0d141b] dark:text-white font-bold text-lg md:text-xl mb-1 group-hover:text-primary transition-colors">Kalender Pendidikan 2024/2025</h3>
                <p className="text-xs text-[#4c739a] uppercase tracking-wider font-bold mb-3">Kalender Pendidikan</p>
                <div className="flex items-center gap-4 text-sm text-[#4c739a] dark:text-slate-500">
                  <span className="flex items-center gap-1"><span className="material-symbols-outlined text-base">picture_as_pdf</span> 1.2 MB</span>
                  <span className="flex items-center gap-1"><span className="material-symbols-outlined text-base">calendar_today</span> 05 Jan 2024</span>
                </div>
              </div>
              <div className="bg-white dark:bg-slate-900 p-5 rounded-xl border border-[#e7edf3] dark:border-slate-800 hover:shadow-md transition-shadow group">
                <div className="flex items-start justify-between mb-4">
                  <div className="size-12 bg-amber-500/10 rounded-lg flex items-center justify-center text-amber-500">
                    <span className="material-symbols-outlined text-3xl">gavel</span>
                  </div>
                  <button className="text-[#4c739a] hover:text-primary">
                    <span className="material-symbols-outlined">download</span>
                  </button>
                </div>
                <h3 className="text-[#0d141b] dark:text-white font-bold text-lg md:text-xl mb-1 group-hover:text-primary transition-colors">Regulasi PPDB Jalur Prestasi</h3>
                <p className="text-xs text-[#4c739a] uppercase tracking-wider font-bold mb-3">Regulasi</p>
                <div className="flex items-center gap-4 text-sm text-[#4c739a] dark:text-slate-500">
                  <span className="flex items-center gap-1"><span className="material-symbols-outlined text-base">picture_as_pdf</span> 850 KB</span>
                  <span className="flex items-center gap-1"><span className="material-symbols-outlined text-base">calendar_today</span> 20 Des 2023</span>
                </div>
              </div>
              <div className="bg-white dark:bg-slate-900 p-5 rounded-xl border border-[#e7edf3] dark:border-slate-800 hover:shadow-md transition-shadow group">
                <div className="flex items-start justify-between mb-4">
                  <div className="size-12 bg-purple-500/10 rounded-lg flex items-center justify-center text-purple-500">
                    <span className="material-symbols-outlined text-3xl">payments</span>
                  </div>
                  <button className="text-[#4c739a] hover:text-primary">
                    <span className="material-symbols-outlined">download</span>
                  </button>
                </div>
                <h3 className="text-[#0d141b] dark:text-white font-bold text-lg md:text-xl mb-1 group-hover:text-primary transition-colors">Realisasi Anggaran Triwulan IV</h3>
                <p className="text-xs text-[#4c739a] uppercase tracking-wider font-bold mb-3">Anggaran</p>
                <div className="flex items-center gap-4 text-sm text-[#4c739a] dark:text-slate-500">
                  <span className="flex items-center gap-1"><span className="material-symbols-outlined text-base">table_view</span> 2.1 MB</span>
                  <span className="flex items-center gap-1"><span className="material-symbols-outlined text-base">calendar_today</span> 15 Des 2023</span>
                </div>
              </div>
            </div>
            <div className="mt-16">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-6 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">help</span>
                Pertanyaan Sering Diajukan (FAQ)
              </h2>
              <div className="space-y-4">
                <details className="group bg-white dark:bg-slate-900 border border-[#e7edf3] dark:border-slate-800 rounded-lg overflow-hidden transition-all duration-200">
                  <summary className="flex items-center justify-between p-4 cursor-pointer font-bold text-[#0d141b] dark:text-white hover:bg-slate-50 dark:hover:bg-slate-800 list-none">
                    <span>Bagaimana cara mengajukan permohonan informasi publik?</span>
                    <span className="material-symbols-outlined group-open:rotate-180 transition-transform">expand_more</span>
                  </summary>
                  <div className="p-4 pt-0 text-[#4c739a] dark:text-slate-400 text-sm leading-relaxed border-t border-[#e7edf3] dark:border-slate-800 mt-2">
                    Anda dapat mengajukan permohonan secara daring melalui portal PPID kami atau datang langsung ke loket informasi Dinas Pendidikan dengan membawa identitas diri yang sah.
                  </div>
                </details>
                <details className="group bg-white dark:bg-slate-900 border border-[#e7edf3] dark:border-slate-800 rounded-lg overflow-hidden transition-all duration-200">
                  <summary className="flex items-center justify-between p-4 cursor-pointer font-bold text-[#0d141b] dark:text-white hover:bg-slate-50 dark:hover:bg-slate-800 list-none">
                    <span>Kapan kalender pendidikan tahun ajaran baru dirilis?</span>
                    <span className="material-symbols-outlined group-open:rotate-180 transition-transform">expand_more</span>
                  </summary>
                  <div className="p-4 pt-0 text-[#4c739a] dark:text-slate-400 text-sm leading-relaxed border-t border-[#e7edf3] dark:border-slate-800 mt-2">
                    Biasanya dirilis 2 bulan sebelum tahun ajaran baru dimulai (sekitar bulan Mei setiap tahunnya).
                  </div>
                </details>
                <details className="group bg-white dark:bg-slate-900 border border-[#e7edf3] dark:border-slate-800 rounded-lg overflow-hidden transition-all duration-200">
                  <summary className="flex items-center justify-between p-4 cursor-pointer font-bold text-[#0d141b] dark:text-white hover:bg-slate-50 dark:hover:bg-slate-800 list-none">
                    <span>Apakah dokumen anggaran tersedia untuk umum?</span>
                    <span className="material-symbols-outlined group-open:rotate-180 transition-transform">expand_more</span>
                  </summary>
                  <div className="p-4 pt-0 text-[#4c739a] dark:text-slate-400 text-sm leading-relaxed border-t border-[#e7edf3] dark:border-slate-800 mt-2">
                    Ya, sesuai dengan prinsip transparansi, dokumen realisasi anggaran kami publikasikan setiap triwulan dalam format yang dapat diakses publik.
                  </div>
                </details>
              </div>
            </div>
          </div>
          <aside className="lg:col-span-4 space-y-8">
            <div className="bg-white dark:bg-slate-900 rounded-xl border border-[#e7edf3] dark:border-slate-800 overflow-hidden">
              <div className="p-5 border-b border-[#e7edf3] dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 flex items-center justify-between">
                <h3 className="font-bold text-[#0d141b] dark:text-white flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">campaign</span>
                  Pengumuman Terbaru
                </h3>
                <a href="#" className="text-xs text-primary font-bold hover:underline">Lihat Semua</a>
              </div>
              <div className="divide-y divide-[#e7edf3] dark:divide-slate-800">
                <div className="p-5 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                  <span className="text-[10px] font-bold text-primary uppercase bg-primary/10 px-2 py-0.5 rounded-full">Akademik</span>
                  <h4 className="font-bold text-sm mt-2 mb-1">Perubahan Jadwal Libur Semester Genap</h4>
                  <p className="text-xs text-[#4c739a] dark:text-slate-500">Diterbitkan 2 jam yang lalu</p>
                </div>
                <div className="p-5 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                  <span className="text-[10px] font-bold text-green-600 uppercase bg-green-100 px-2 py-0.5 rounded-full">Infrastruktur</span>
                  <h4 className="font-bold text-sm mt-2 mb-1">Pendaftaran Bantuan Sarana Laboratorium TIK</h4>
                  <p className="text-xs text-[#4c739a] dark:text-slate-500">Kemarin, 14:20 WIB</p>
                </div>
                <div className="p-5 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                  <span className="text-[10px] font-bold text-amber-600 uppercase bg-amber-100 px-2 py-0.5 rounded-full">Kepegawaian</span>
                  <h4 className="font-bold text-sm mt-2 mb-1">Sosialisasi Sertifikasi Guru Gelombang II</h4>
                  <p className="text-xs text-[#4c739a] dark:text-slate-500">22 Jan 2024</p>
                </div>
              </div>
            </div>
            <div className="bg-primary rounded-xl p-6 text-white relative overflow-hidden group">
              <div className="relative z-10">
                <h3 className="font-bold text-xl mb-2">Butuh Bantuan?</h3>
                <p className="text-white/80 text-sm mb-4">Tim kami siap membantu Anda menjawab pertanyaan mengenai layanan pendidikan dan keterbukaan informasi.</p>
                <button className="w-full bg-white text-primary font-bold py-2 rounded-lg hover:bg-slate-100 transition-colors text-sm">
                  Buka Live Chat
                </button>
              </div>
              <div className="absolute -right-4 -bottom-4 opacity-20">
                <span className="material-symbols-outlined text-9xl">contact_support</span>
              </div>
            </div>
            <div className="bg-white dark:bg-slate-900 rounded-xl border border-[#e7edf3] dark:border-slate-800 p-5">
              <h3 className="font-bold text-[#0d141b] dark:text-white mb-2">Langganan Update</h3>
              <p className="text-[#4c739a] text-xs mb-4">Dapatkan notifikasi langsung ke email Anda saat ada dokumen atau regulasi baru yang dirilis.</p>
              <div className="space-y-3">
                <input className="w-full text-sm rounded-lg border-[#e7edf3] dark:border-slate-800 bg-background-light dark:bg-slate-800 focus:ring-primary focus:border-primary" placeholder="Alamat email Anda" type="email" />
                <button className="w-full bg-slate-900 dark:bg-primary text-white font-bold py-2 rounded-lg text-sm hover:opacity-90 transition-opacity">
                  Berlangganan
                </button>
              </div>
            </div>
          </aside>
        </div>
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
                <li><Link to="/profile" className="text-slate-500 dark:text-slate-400 text-sm hover:text-primary font-medium">Profil Dinas</Link></li>
                <li><a href="#" className="text-slate-500 dark:text-slate-400 text-sm hover:text-primary font-medium">Struktur Organisasi</a></li>
                <li><a href="#" className="text-slate-500 dark:text-slate-400 text-sm hover:text-primary font-medium">Visi & Misi</a></li>
                <li><Link to="/info" className="text-slate-500 dark:text-slate-400 text-sm hover:text-primary font-medium">Kalender Pendidikan</Link></li>
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

export default InfoPage;