"use client"; 

import React, { useState } from 'react';
import Link from 'next/link'; 
import Navbar from './Navbar';

const ServicesPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('all');

  const services = {
    student: [
      {
        icon: 'school',
        title: 'Pendaftaran Beasiswa',
        desc: 'Pengajuan bantuan biaya pendidikan untuk siswa berprestasi dan kurang mampu tingkat SD, SMP, SMA.',
        action: 'Pelajari Selengkapnya'
      },
      {
        icon: 'swap_horiz',
        title: 'Mutasi Siswa',
        desc: 'Prosedur perpindahan siswa antar sekolah baik di dalam maupun ke luar daerah secara digital.',
        action: 'Pelajari Selengkapnya'
      },
      {
        icon: 'verified',
        title: 'Legalisir Ijazah',
        desc: 'Verifikasi dan pengesahan fotokopi ijazah untuk keperluan administrasi pendidikan atau pekerjaan.',
        action: 'Pelajari Selengkapnya'
      },
      {
        icon: 'card_membership',
        title: 'Kartu Cerdas',
        desc: 'Pendaftaran dan pengecekan status penerima bantuan kartu pendidikan daerah.',
        action: 'Cek Status'
      },
      {
        icon: 'science',
        title: 'Izin Penelitian',
        desc: 'Pengajuan izin riset atau pengambilan data di satuan pendidikan untuk mahasiswa.',
        action: 'Ajukan Izin'
      },
      {
        icon: 'psychology',
        title: 'Konseling Online',
        desc: 'Layanan bimbingan konseling dan pengaduan perundungan bagi peserta didik.',
        action: 'Konsultasi'
      }
    ],
    teacher: [
      {
        icon: 'badge',
        title: 'Pengajuan NUPTK',
        desc: 'Proses penerbitan Nomor Unik Pendidik dan Tenaga Kependidikan untuk guru PNS maupun Non-PNS.',
        action: 'Pelajari Selengkapnya'
      },
      {
        icon: 'trending_up',
        title: 'Kenaikan Pangkat',
        desc: 'Sistem informasi untuk pengusulan kenaikan golongan dan pangkat fungsional guru secara berkala.',
        action: 'Pelajari Selengkapnya'
      },
      {
        icon: 'workspace_premium',
        title: 'Sertifikasi Guru',
        desc: 'Informasi seputar pelaksanaan Pendidikan Profesi Guru (PPG) dan pencairan tunjangan sertifikasi.',
        action: 'Pelajari Selengkapnya'
      },
      {
        icon: 'person_search',
        title: 'Info GTK',
        desc: 'Validasi data guru dan pengecekan SKTP untuk pencairan tunjangan profesi.',
        action: 'Cek Info'
      },
      {
        icon: 'beach_access',
        title: 'Cuti Online',
        desc: 'Pengajuan cuti tahunan, cuti besar, atau cuti sakit bagi ASN Guru secara digital.',
        action: 'Ajukan Cuti'
      },
      {
        icon: 'cast_for_education',
        title: 'Pelatihan Kurikulum',
        desc: 'Pendaftaran bimbingan teknis dan workshop implementasi Kurikulum Merdeka.',
        action: 'Daftar'
      }
    ],
    public: [
      {
        icon: 'query_stats',
        title: 'Data Pendidikan',
        desc: 'Akses data statistik sekolah, siswa, dan guru untuk keperluan riset dan publik.',
        action: 'Lihat Data'
      },
      {
        icon: 'local_library',
        title: 'Pendaftaran LKP',
        desc: 'Daftar lembaga kursus dan pelatihan masyarakat serta program pendidikan kesetaraan.',
        action: 'Cari Lembaga'
      },
      {
        icon: 'campaign',
        title: 'Layanan Pengaduan',
        desc: 'Sampaikan keluhan atau saran terkait kualitas pendidikan melalui kanal resmi.',
        action: 'Buat Laporan'
      },
      {
        icon: 'apartment',
        title: 'Sewa Fasilitas',
        desc: 'Peminjaman gedung aula atau fasilitas olahraga sekolah untuk kegiatan masyarakat.',
        action: 'Cek Jadwal'
      },
      {
        icon: 'menu_book',
        title: 'Perizinan Pendirian',
        desc: 'Layanan perizinan operasional pendirian sekolah swasta atau lembaga non-formal.',
        action: 'Panduan'
      },
      {
        icon: 'volunteer_activism',
        title: 'Program CSR',
        desc: 'Portal kemitraan perusahaan dan dunia industri untuk dukungan pendidikan daerah.',
        action: 'Mitra'
      }
    ]
  };

  return (
    <div className="font-display bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen transition-colors duration-300">
      <Navbar />
      <section className="relative py-16 bg-white dark:bg-slate-900 overflow-hidden mt-20">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <img alt="Background pattern" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCJl6kRjOV4gYkSSgoPbargGQO1HARWp3b9wvJIQxYNtW-HKfy6gRePpw4GLtw_x_LniU4_8EBAHaT2diNQ-ErK3Wkth91BEcVZdC0bHLj2_UGlgrF7aWSE_qp1ytpel6sMLhGrcdk8RImp28XBo6YwzIg2ZkD-JyMKoIyZ8U12K4HxQVti7MwGf8zU_VUyYT-p2dzGtNXsvFvqr-ftD13SCSmP4x4dGCQ7JcLbIjeKitUwoSPajM0rAlrHYMRprQoF8eOS91MtqhjZ" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center max-w-3xl">
          <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-tight mb-4 text-slate-900 dark:text-white">Pusat Layanan Publik</h2>
          <div className="w-20 h-1.5 bg-accent rounded-full mb-6 mx-auto"></div>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-xl mx-auto mb-8">
            Akses mudah ke berbagai layanan administrasi pendidikan untuk siswa, guru, dan masyarakat umum secara transparan dan efisien.
          </p>
          <div className="relative group">
            <span className="material-icons absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">search</span>
            <input className="w-full pl-12 pr-4 py-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="Cari layanan (contoh: Beasiswa, Mutasi Siswa, NUPTK)..." type="text" />
          </div>
        </div>
      </section>

      <div className="sticky top-20 z-40 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md py-4 border-b border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-6 py-2 rounded-full text-xs md:text-sm font-bold tracking-wide uppercase transition-all ${activeTab === 'all' ? 'bg-primary text-white shadow-md' : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-primary'}`}
            >
              Panduan
            </button>
            <button
              onClick={() => setActiveTab('student')}
              className={`px-6 py-2 rounded-full text-xs md:text-sm font-bold tracking-wide uppercase transition-all ${activeTab === 'student' ? 'bg-primary text-white shadow-md' : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-primary'}`}
            >
              Layanan Siswa
            </button>
            <button
              onClick={() => setActiveTab('teacher')}
              className={`px-6 py-2 rounded-full text-xs md:text-sm font-bold tracking-wide uppercase transition-all ${activeTab === 'teacher' ? 'bg-primary text-white shadow-md' : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-primary'}`}
            >
              Layanan Guru
            </button>
            <button
              onClick={() => setActiveTab('public')}
              className={`px-6 py-2 rounded-full text-xs md:text-sm font-bold tracking-wide uppercase transition-all ${activeTab === 'public' ? 'bg-primary text-white shadow-md' : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-primary'}`}
            >
              Masyarakat Umum
            </button>
          </div>
        </div>
      </div>

      <main className="container mx-auto px-4 py-12">
        {(activeTab === 'student') && (
          <div className="mb-16 animate-fade-in">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-8 w-2 bg-primary rounded-full"></div>
              <h3 className="text-2xl font-bold">Layanan Siswa & Mahasiswa</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.student.map((item, index) => (
                <div key={index} className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 hover:shadow-lg transition-all group">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                    <span className="material-icons text-primary group-hover:text-white">{item.icon}</span>
                  </div>
                  <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                  <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 leading-relaxed bg-transparent">{item.desc}</p>
                  <button className="flex items-center gap-2 text-primary font-bold text-sm hover:gap-3 transition-all">
                    {item.action} <span className="material-icons text-sm">arrow_forward</span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {(activeTab === 'teacher') && (
          <div className="mb-16 animate-fade-in">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-8 w-2 bg-primary rounded-full"></div>
              <h3 className="text-2xl font-bold">Layanan Guru & Tenaga Kependidikan</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.teacher.map((item, index) => (
                <div key={index} className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 hover:shadow-lg transition-all group">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                    <span className="material-icons text-primary group-hover:text-white">{item.icon}</span>
                  </div>
                  <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                  <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 leading-relaxed bg-transparent">{item.desc}</p>
                  <button className="flex items-center gap-2 text-primary font-bold text-sm hover:gap-3 transition-all">
                    {item.action} <span className="material-icons text-sm">arrow_forward</span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {(activeTab === 'all') && (
          <section className="bg-primary rounded-3xl p-8 md:p-12 mb-16 text-white overflow-hidden relative">
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
              <div className="w-full md:w-1/2">
                <div className="inline-block px-4 py-1.5 bg-white/20 backdrop-blur-md rounded-full text-xs font-bold uppercase tracking-widest mb-6 border border-white/30">
                  Panduan
                </div>
                <h3 className="text-3xl md:text-4xl font-black mb-6 leading-tight">Alur Layanan Digital</h3>
                <p className="text-white/80 text-base md:text-lg leading-relaxed mb-8">Nikmati kemudahan mengurus administrasi pendidikan dari mana saja dengan 3 langkah mudah.</p>
                <div className="flex flex-col gap-6">
                  <div className="flex gap-4">
                    <div className="size-10 bg-white text-primary rounded-full flex items-center justify-center font-black text-lg shadow-lg">1</div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">Pilih Layanan</h4>
                      <p className="text-sm text-white/70 leading-relaxed">Pilih kategori layanan yang Anda butuhkan pada menu di atas.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="size-10 bg-white text-primary rounded-full flex items-center justify-center font-black text-lg shadow-lg">2</div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">Isi Formulir & Upload</h4>
                      <p className="text-sm text-white/70 leading-relaxed">Lengkapi data diri dan unggah dokumen persyaratan digital.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="size-10 bg-white text-primary rounded-full flex items-center justify-center font-black text-lg shadow-lg">3</div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">Verifikasi & Selesai</h4>
                      <p className="text-sm text-white/70 leading-relaxed">Pantau status pengajuan Anda melalui dashboard pengguna.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {(activeTab === 'public') && (
          <div className="mb-16 animate-fade-in">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-8 w-2 bg-primary rounded-full"></div>
              <h3 className="text-2xl font-bold">Masyarakat Umum & Orang Tua</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.public.map((item, index) => (
                <div key={index} className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 hover:shadow-lg transition-all group">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                    <span className="material-icons text-primary group-hover:text-white">{item.icon}</span>
                  </div>
                  <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                  <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 leading-relaxed bg-transparent">{item.desc}</p>
                  <button className="flex items-center gap-2 text-primary font-bold text-sm hover:gap-3 transition-all">
                    {item.action} <span className="material-icons text-sm">arrow_forward</span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Helper & Footer Section - Always Visible */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-16">
          <div className="lg:col-span-3">
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold mb-6">Butuh Bantuan?</h3>
                <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-100 dark:border-slate-700 shadow-sm">
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">Jika Anda mengalami kendala dalam menggunakan layanan kami, hubungi tim support kami.</p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
            </div>
          </div>
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

export default ServicesPage;