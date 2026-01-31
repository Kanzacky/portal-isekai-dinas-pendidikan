import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

const ProfilePage: React.FC = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark text-[#0d141b] dark:text-slate-50 min-h-screen overflow-x-hidden font-display">
      <Navbar />
      <main className="max-w-[1200px] mx-auto px-4 md:px-10 py-8 mt-16">
        <section className="mb-16">
          <div className="relative min-h-[500px] rounded-xl overflow-hidden flex items-center justify-center p-8 bg-cover bg-center" style={{ backgroundImage: 'linear-gradient(rgba(13, 20, 27, 0.7), rgba(13, 20, 27, 0.7)), url("https://lh3.googleusercontent.com/aida-public/AB6AXuAyPzZK-rFY07uNaVKgpFtGvMhnyHObkr-MmLd0c7mB1NhkHWCLCHS1fCkYLCo_QlygcuTP4DT-ZHgy6TZ91HFQ1PfA8RbAB-m0dBBilc6zaAFBtoYJKZfXMWWyCaJpwO4CItdTE1DcU6vcfouS8CbtNoBEqI__0tdi8y_-IiSxJAgYaPQAxjMMeUllXvFqNKjw64ufRBCoO65dgQTQZaxG6ZQbHEgFydMc-Ahqfb8zad5JtBO1XqsFAr1_uWW6UnCV7vuzIMC4AsbC")' }}>
            <div className="max-w-3xl text-center text-white space-y-6">
              <h1 className="text-4xl md:text-6xl font-black leading-tight tracking-tight">Visi & Misi</h1>
              <div className="p-6 bg-white/10 backdrop-blur-md rounded-xl border border-white/20">
                <p className="text-lg md:text-2xl font-light italic mb-4 leading-relaxed">"Mewujudkan Pendidikan Berkualitas, Inklusif, dan Berkarakter untuk Masa Depan Bangsa."</p>
                <div className="grid md:grid-cols-3 gap-6 text-sm text-left border-t border-white/20 pt-6 mt-6">
                  <div className="space-y-2">
                    <span className="text-primary font-bold uppercase tracking-wider text-xs md:text-sm">01. Kualitas</span>
                    <p className="text-slate-300 leading-relaxed text-sm md:text-base">Meningkatkan standar mutu pendidik dan sarana prasarana sekolah secara berkelanjutan.</p>
                  </div>
                  <div className="space-y-2">
                    <span className="text-primary font-bold uppercase tracking-wider text-xs md:text-sm">02. Aksesibilitas</span>
                    <p className="text-slate-300 leading-relaxed text-sm md:text-base">Menjamin akses pendidikan yang adil dan merata bagi seluruh lapisan masyarakat tanpa terkecuali.</p>
                  </div>
                  <div className="space-y-2">
                    <span className="text-primary font-bold uppercase tracking-wider text-xs md:text-sm">03. Integritas</span>
                    <p className="text-slate-300 leading-relaxed text-sm md:text-base">Membangun karakter peserta didik yang berintegritas, kreatif, dan berdaya saing global.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="mb-20">
          <div className="flex items-center gap-4 mb-10">
            <span className="material-symbols-outlined text-primary text-3xl">account_tree</span>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Struktur Organisasi</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="lg:col-span-4 flex justify-center mb-8">
              <div className="w-full max-w-sm bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm text-center hover:shadow-md transition-shadow group">
                <div className="mx-auto mb-4 relative w-32 h-32">
                  <div className="w-full h-full rounded-full bg-cover bg-center border-4 border-primary/20 group-hover:border-primary transition-all overflow-hidden" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAwXJqR_5xcNPlRDrSDHgr84NK91eTlJKHuXdMWIsy8VCLlEOomdKhUBuWrQat0vuHNQN83jQqKr5rEszP7Dl0RUAi5PTZekY2BKqNud6IawjMIcJ5A6RYk8kWaJ--BWHN-zu4gq727QtfJi8iF2xERCu-McHOYUdTO0EAZRJidlAD4TSvJbfd9HbFA9qu2zzylmWxEg-cExvvals6SqRnJRRaVyHEUc4yDYG5mnAX-farTsELSgnZ4qe9fO852QQSSPmfSWJbLwhwl")' }}></div>
                </div>
                <h3 className="text-xl font-bold">Dr. Budi Santoso, M.Pd.</h3>
                <p className="text-primary font-medium">Kepala Dinas Pendidikan</p>
                <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-700 flex justify-center gap-3">
                  <span className="material-symbols-outlined text-slate-400 text-lg">mail</span>
                  <span className="material-symbols-outlined text-slate-400 text-lg">call</span>
                </div>
              </div>
            </div>
            <div className="bg-white dark:bg-slate-800 p-5 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm text-center">
              <div className="mx-auto mb-3 w-20 h-20 rounded-full bg-cover bg-center bg-slate-200" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCkp9lejBtK0EnIvrpFQTCel8S2c9eeh8bdHsCllZ2aVKDY4V94px4g8OALKrkvfNDipo79Q1grZGSXlzU40CjKNjaIeJriSjH8TIi0Q3XSwhA617Q6cswh6pxeiGVEbyu9NyHoI0ln-bmWLm82aNS8y8b_R5Czw-Cb6smsykqnuRD-mLpa7N0kbVc0HzyS_vEkLTaODeWPB0Ps-wPQcGdz_EHKZVw5vTAbJOzn0i5BHjkjgEsTxcu_nuvSqW8H2tso3uClCRSIiMml")' }}></div>
              <h4 className="font-bold text-sm">Hj. Siti Aminah, S.Sos.</h4>
              <p className="text-xs text-[#4c739a]">Sekretaris Dinas</p>
            </div>
            <div className="bg-white dark:bg-slate-800 p-5 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm text-center">
              <div className="mx-auto mb-3 w-20 h-20 rounded-full bg-cover bg-center bg-slate-200" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAb7fJD0FtaYmCXGwGnUqG2P1aaF-ypuLbB92g67Am1J0rSBsbc2wmHnBDCesft8IJFpXzh9_NlS_UGkPB6iwxb2j5xB67T5vF0kymdw4Fmn3exyjJxys37N4EOUu0JNsRxct7IFXVKKA3xLOlIA6_A3_O3cHQXArf-xed-5l7g-E-dsHiFAqBlLimWizthg_fy7lAEU9TeZDi8RiHgJU2_vY7dAbbN03MdJUkBQU6aeuUzmdTdMyDtcM9WJvj2pMXy1kGn0kceqhkE")' }}></div>
              <h4 className="font-bold text-sm">Ir. Ahmad Fauzi</h4>
              <p className="text-xs text-[#4c739a]">Kabid Pendidikan Dasar</p>
            </div>
            <div className="bg-white dark:bg-slate-800 p-5 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm text-center">
              <div className="mx-auto mb-3 w-20 h-20 rounded-full bg-cover bg-center bg-slate-200" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDSGa8duckK4IWp152b72bdBIXCDSK0QFznClHodfF9N3TqbWeANUMP-jdvALNoXjCqlKCJdc5Tb46HQltHCXlZsdp8M-ASaD-EoCzdX9A3OYTA5tIyieXUQjw4o1Jwhq63o7tz0JSlG009Od7UbcbuUbbqQR03PH6ln-7fXAIc4xayYrQkTz8iSdsrLIWRjbZ8trDx2Ff_C2h82UQJFoBD2RUpwn-fHTaTTCsqEIemzhKGZ44PScw1Spzp5sYVthgnGxWNdyslaR0G")' }}></div>
              <h4 className="font-bold text-sm">Drs. Heru Prasetyo</h4>
              <p className="text-xs text-[#4c739a]">Kabid GTK</p>
            </div>
            <div className="bg-white dark:bg-slate-800 p-5 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm text-center">
              <div className="mx-auto mb-3 w-20 h-20 rounded-full bg-cover bg-center bg-slate-200" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAv7Ij1NS2hqrcYkYPN18eeiVwzv51c1l6MuY-fT8grryhO3RttfNfg_fKdT15768bHmAv2LMUi05lIWm6YEdYQYx5o1gREQon-nA0lUjKsXzUYl2VRwdfu6mqnhw-kdJtnOl_zZrH0vXSTv-p8F7S-7_cZXvwHEcmOHngihoRKd651oXNW53v_Yfw9HtxslGmYqO2fBSCHF57QAdwdw8jEiU18R0MABPMtxUvkgjEG_WQduhxPdYp7D8DfwmacKxS6uxBKqibth1kM")' }}></div>
              <h4 className="font-bold text-sm">Dra. Lilis Suryani</h4>
              <p className="text-xs text-[#4c739a]">Kabid Sarana & Prasarana</p>
            </div>
          </div>
        </section>
        <section className="mb-20 bg-primary/5 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-2">Sejarah Singkat</h2>
            <p className="text-slate-500">Perjalanan transformasi pendidikan dari masa ke masa</p>
          </div>
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-1/2 -translate-x-1/2 h-full w-1 bg-primary/20 hidden md:block"></div>
            <div className="space-y-12">
              <div className="relative flex flex-col md:flex-row items-center md:justify-between group">
                <div className="hidden md:block w-1/2 pr-12 text-right">
                  <h4 className="text-2xl font-bold text-primary">1990</h4>
                  <p className="text-slate-600 dark:text-slate-400 mt-2">Pendirian instansi sebagai bentuk otonomi daerah pertama dalam manajemen sekolah dasar.</p>
                </div>
                <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-white dark:border-background-dark z-10"></div>
                <div className="md:w-1/2 md:pl-12">
                  <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 md:hidden">
                    <h4 className="text-xl font-bold text-primary">1990</h4>
                    <p className="text-slate-600 dark:text-slate-400 mt-2">Pendirian instansi sebagai bentuk otonomi daerah pertama dalam manajemen sekolah dasar.</p>
                  </div>
                </div>
              </div>
              <div className="relative flex flex-col md:flex-row items-center md:justify-between group">
                <div className="md:w-1/2 md:pr-12 text-right"></div>
                <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-white dark:border-background-dark z-10"></div>
                <div className="md:w-1/2 md:pl-12">
                  <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700">
                    <h4 className="text-xl md:text-2xl font-bold text-primary">2005</h4>
                    <p className="text-slate-600 dark:text-slate-400 mt-2">Peluncuran Program Beasiswa Daerah untuk pelajar berprestasi dari keluarga kurang mampu.</p>
                  </div>
                </div>
              </div>
              <div className="relative flex flex-col md:flex-row items-center md:justify-between group">
                <div className="md:w-1/2 md:pr-12 text-right">
                  <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700">
                    <h4 className="text-xl md:text-2xl font-bold text-primary">2018</h4>
                    <p className="text-slate-600 dark:text-slate-400 mt-2">Digitalisasi sistem pendaftaran siswa baru (PPDB Online) untuk transparansi publik.</p>
                  </div>
                </div>
                <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-white dark:border-background-dark z-10"></div>
                <div className="md:w-1/2 md:pl-12"></div>
              </div>
              <div className="relative flex flex-col md:flex-row items-center md:justify-between group">
                <div className="md:w-1/2 md:pr-12 text-right"></div>
                <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-white dark:border-background-dark z-10"></div>
                <div className="md:w-1/2 md:pl-12">
                  <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700">
                    <h4 className="text-xl md:text-2xl font-bold text-primary">Sekarang</h4>
                    <p className="text-slate-600 dark:text-slate-400 mt-2">Fokus pada implementasi Kurikulum Merdeka dan integrasi AI dalam platform pembelajaran daerah.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="mb-16">
          <div className="flex items-center gap-4 mb-10">
            <span className="material-symbols-outlined text-primary text-3xl">assignment</span>
            <h2 className="text-3xl font-bold tracking-tight">Tugas Pokok & Fungsi</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-slate-800 p-8 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col gap-5 group hover:border-primary transition-colors">
              <div className="size-14 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                <span className="material-symbols-outlined text-3xl">policy</span>
              </div>
              <div>
                <h4 className="text-lg md:text-xl font-bold mb-3">Perumusan Kebijakan</h4>
                <ul className="space-y-2 text-sm md:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                  <li className="flex items-start gap-2"><span className="material-symbols-outlined text-primary text-base mt-0.5">check_circle</span> Menyusun rencana strategis pendidikan daerah.</li>
                  <li className="flex items-start gap-2"><span className="material-symbols-outlined text-primary text-base mt-0.5">check_circle</span> Menetapkan standar operasional pendidikan.</li>
                </ul>
              </div>
            </div>
            <div className="bg-white dark:bg-slate-800 p-8 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col gap-5 group hover:border-primary transition-colors">
              <div className="size-14 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                <span className="material-symbols-outlined text-3xl">school</span>
              </div>
              <div>
                <h4 className="text-lg md:text-xl font-bold mb-3">Manajemen Satuan</h4>
                <ul className="space-y-2 text-sm md:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                  <li className="flex items-start gap-2"><span className="material-symbols-outlined text-primary text-base mt-0.5">check_circle</span> Pembinaan sekolah tingkat PAUD, SD, dan SMP.</li>
                  <li className="flex items-start gap-2"><span className="material-symbols-outlined text-primary text-base mt-0.5">check_circle</span> Pengawasan akreditasi dan mutu sekolah.</li>
                </ul>
              </div>
            </div>
            <div className="bg-white dark:bg-slate-800 p-8 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col gap-5 group hover:border-primary transition-colors">
              <div className="size-14 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                <span className="material-symbols-outlined text-3xl">diversity_3</span>
              </div>
              <div>
                <h4 className="text-lg md:text-xl font-bold mb-3">Pengembangan SDM</h4>
                <ul className="space-y-2 text-sm md:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                  <li className="flex items-start gap-2"><span className="material-symbols-outlined text-primary text-base mt-0.5">check_circle</span> Sertifikasi dan pelatihan kompetensi guru.</li>
                  <li className="flex items-start gap-2"><span className="material-symbols-outlined text-primary text-base mt-0.5">check_circle</span> Pengelolaan tenaga kependidikan daerah.</li>
                </ul>
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

export default ProfilePage;