import React from 'react';
import Link from 'next/link';

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100">
      <aside className="w-72 fixed h-full bg-white/80 dark:bg-background-dark/80 backdrop-blur-xl border-r border-slate-200 dark:border-slate-800 hidden lg:flex flex-col z-50">
        <div className="p-6">
          <div className="flex items-center gap-3 mb-10">
            <div className="size-10 bg-primary flex items-center justify-center rounded-xl shadow-lg shadow-primary/20">
              <span className="material-symbols-outlined text-white">account_balance</span>
            </div>
            <div>
              <h1 className="text-lg font-bold leading-tight">Dinas Pendidikan</h1>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-medium tracking-wide uppercase">Public Portal</p>
            </div>
          </div>
          <nav className="flex flex-col gap-2">
            <p className="px-3 text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Service Categories</p>
            <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-xl bg-primary text-white shadow-md shadow-primary/20">
              <span className="material-symbols-outlined">school</span>
              <span className="text-sm font-medium">Student Services</span>
            </a>
            <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400 transition-all">
              <span className="material-symbols-outlined">co_present</span>
              <span className="text-sm font-medium">Teacher Services</span>
            </a>
            <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400 transition-all">
              <span className="material-symbols-outlined">domain</span>
              <span className="text-sm font-medium">School Facilities</span>
            </a>
            <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400 transition-all">
              <span className="material-symbols-outlined">groups</span>
              <span className="text-sm font-medium">General Public</span>
            </a>
          </nav>
        </div>
        <div className="mt-auto p-6">
          <div className="bg-primary/10 dark:bg-primary/5 p-4 rounded-xl border border-primary/20">
            <p className="text-xs font-semibold text-primary mb-2">Need Help?</p>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 mb-3 leading-relaxed">Contact our support center for any application difficulties.</p>
            <button className="w-full bg-primary text-white text-xs font-bold py-2 rounded-lg hover:opacity-90 transition-opacity">Contact Support</button>
          </div>
        </div>
      </aside>
      <main className="flex-1 lg:ml-72 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-primary/5 via-background-light to-background-light dark:from-primary/10 dark:via-background-dark dark:to-background-dark">
        <header className="sticky top-0 z-40 w-full px-6 py-4 flex items-center justify-between bg-white/50 dark:bg-background-dark/50 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-4">
            <button className="lg:hidden material-symbols-outlined">menu</button>
            <h2 className="text-xl font-bold hidden sm:block">Dashboard</h2>
          </div>
          <div className="flex items-center gap-6">
            <div className="hidden md:flex items-center gap-4 text-sm font-medium text-slate-600 dark:text-slate-400">
              <Link href="/" className="hover:text-primary transition-colors">Home</Link>
              <a href="#" className="hover:text-primary transition-colors">News</a>
              <Link href="/profile" className="hover:text-primary transition-colors">About Us</Link>
            </div>
            <div className="flex items-center gap-3">
              <button className="size-10 flex items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                <span className="material-symbols-outlined text-[20px]">notifications</span>
              </button>
              <div className="h-10 w-[1px] bg-slate-200 dark:border-slate-800"></div>
              <div className="flex items-center gap-3 pl-1">
                <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 border-2 border-primary/20" data-alt="Profile picture of an official user" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC7vhXJGx4PZu5mwW6UH4k-JYG3uOwm92q41RL5_gPuh8N_2-i_VnCk-tv32127sjIjSh_aQRNKkuw-m8Vz4WLVG395_dehVce_czbo5QOcpnZ5RGJ4vQP6wTPsWkfQ43Xs66Vu31AM0E5T5-8A_nyQuasJIbErTB0o59nVAyBHlYaZyEv8PxevHqOsYHDreLxbA389DLbXUeDUANAHdjqjxls5Xo1QuGqDXEwz2biRtr8ihRGwIqkD_7dFpaVnybsrnOqoES0w3iI0")' }}></div>
                <div className="hidden sm:block">
                  <p className="text-xs font-bold leading-tight">Admin Portal</p>
                  <p className="text-[10px] text-slate-500">Super User</p>
                </div>
              </div>
            </div>
          </div>
        </header>
        <div className="max-w-6xl mx-auto p-6 md:p-10">
          <section className="mb-12">
            <div className="text-center mb-8">
              <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-3">Application Tracking</h1>
              <p className="text-slate-500 dark:text-slate-400 max-w-xl mx-auto">Check the status of your ongoing educational service request by entering your reference number below.</p>
            </div>
            <div className="max-w-2xl mx-auto">
              <div className="relative flex items-center group">
                <div className="absolute left-4 text-slate-400 group-focus-within:text-primary transition-colors">
                  <span className="material-symbols-outlined">search</span>
                </div>
                <input className="w-full h-14 pl-12 pr-32 rounded-2xl bg-white dark:bg-slate-900 border-none shadow-xl shadow-primary/5 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary text-base transition-all" placeholder="Enter your reference number (e.g., REG-2023-XXXX)" type="text" />
                <button className="absolute right-2 bg-primary text-white font-bold px-6 py-2.5 rounded-xl hover:opacity-90 transition-opacity shadow-lg shadow-primary/30">
                  Track
                </button>
              </div>
              <div className="flex gap-4 justify-center mt-4">
                <div className="flex items-center gap-1.5 px-3 py-1 bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 rounded-full text-[10px] font-bold uppercase tracking-wider">
                  <span className="size-1.5 rounded-full bg-amber-500"></span> 2 Processing
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 rounded-full text-[10px] font-bold uppercase tracking-wider">
                  <span className="size-1.5 rounded-full bg-emerald-500"></span> 1 Completed
                </div>
              </div>
            </div>
          </section>
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Popular Student Services</h2>
              <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">Select a service below to start your digital application.</p>
            </div>
            <Link href="/services" className="text-primary text-sm font-bold flex items-center gap-1 hover:underline">
              View All <span className="material-symbols-outlined text-[18px]">chevron_right</span>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            <div className="glass-card p-6 rounded-2xl group hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 transform hover:-translate-y-1">
              <div className="size-12 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-[28px]">assignment_turned_in</span>
              </div>
              <h3 className="text-lg font-bold mb-2">Legalisir Ijazah Online</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-6">Digital validation of diploma and certificates for academic or professional purposes.</p>
              <div className="flex items-center justify-between mt-auto">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">Est. 3-5 Days</span>
                <button className="bg-primary text-white text-sm font-bold px-5 py-2 rounded-lg shadow-md shadow-primary/20 hover:shadow-lg transition-all">Apply Now</button>
              </div>
            </div>
            <div className="glass-card p-6 rounded-2xl group hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 transform hover:-translate-y-1">
              <div className="size-12 rounded-xl bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-600 mb-6 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-[28px]">move_up</span>
              </div>
              <h3 className="text-lg font-bold mb-2">Mutasi Siswa</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-6">Process transfer requests for students between educational institutions or regions.</p>
              <div className="flex items-center justify-between mt-auto">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">Est. 7 Days</span>
                <button className="bg-primary text-white text-sm font-bold px-5 py-2 rounded-lg shadow-md shadow-primary/20 hover:shadow-lg transition-all">Apply Now</button>
              </div>
            </div>
            <div className="glass-card p-6 rounded-2xl group hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 transform hover:-translate-y-1">
              <div className="size-12 rounded-xl bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-600 mb-6 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-[28px]">badge</span>
              </div>
              <h3 className="text-lg font-bold mb-2">NUPTK Proposal</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-6">Application for National Educator and Education Personnel Identification Number.</p>
              <div className="flex items-center justify-between mt-auto">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">Est. 14 Days</span>
                <button className="bg-primary text-white text-sm font-bold px-5 py-2 rounded-lg shadow-md shadow-primary/20 hover:shadow-lg transition-all">Apply Now</button>
              </div>
            </div>
            <div className="glass-card p-6 rounded-2xl group hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 transform hover:-translate-y-1">
              <div className="size-12 rounded-xl bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center text-amber-600 mb-6 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-[28px]">workspace_premium</span>
              </div>
              <h3 className="text-lg font-bold mb-2">Beasiswa Unggulan</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-6">Regional scholarship program applications for high-achieving local students.</p>
              <div className="flex items-center justify-between mt-auto">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">Seasonal</span>
                <button className="bg-primary text-white text-sm font-bold px-5 py-2 rounded-lg shadow-md shadow-primary/20 hover:shadow-lg transition-all">Apply Now</button>
              </div>
            </div>
            <div className="glass-card p-6 rounded-2xl group hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 transform hover:-translate-y-1">
              <div className="size-12 rounded-xl bg-rose-100 dark:bg-rose-900/30 flex items-center justify-center text-rose-600 mb-6 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-[28px]">history_edu</span>
              </div>
              <h3 className="text-lg font-bold mb-2">Izin Operasional</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-6">Establishment and operational permits for private educational foundations.</p>
              <div className="flex items-center justify-between mt-auto">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">Est. 30 Days</span>
                <button className="bg-primary text-white text-sm font-bold px-5 py-2 rounded-lg shadow-md shadow-primary/20 hover:shadow-lg transition-all">Apply Now</button>
              </div>
            </div>
            <div className="glass-card p-6 rounded-2xl group hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 transform hover:-translate-y-1">
              <div className="size-12 rounded-xl bg-violet-100 dark:bg-violet-900/30 flex items-center justify-center text-violet-600 mb-6 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-[28px]">campaign</span>
              </div>
              <h3 className="text-lg font-bold mb-2">Layanan Pengaduan</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-6">Submit complaints or feedback regarding educational services and ethics.</p>
              <div className="flex items-center justify-between mt-auto">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">Response 24h</span>
                <button className="bg-primary text-white text-sm font-bold px-5 py-2 rounded-lg shadow-md shadow-primary/20 hover:shadow-lg transition-all">Submit Case</button>
              </div>
            </div>
          </div>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-primary/5 dark:bg-primary/10 p-8 rounded-3xl border border-primary/10">
            <div>
              <h3 className="text-xl font-bold mb-2">Digital Transformation Program</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-4">We are committed to providing transparent, efficient, and accessible educational services for all citizens in the province.</p>
              <div className="flex gap-4">
                <div className="flex flex-col">
                  <span className="text-2xl font-extrabold text-primary">12k+</span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Applications/Mo</span>
                </div>
                <div className="w-[1px] h-10 bg-slate-200 dark:bg-slate-800"></div>
                <div className="flex flex-col">
                  <span className="text-2xl font-extrabold text-primary">98%</span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Satisfaction Rate</span>
                </div>
              </div>
            </div>
            <div className="flex justify-center md:justify-end">
              <div className="relative w-full max-w-xs h-48 rounded-2xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-indigo-800 opacity-90"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6 text-center">
                  <span className="material-symbols-outlined text-5xl mb-3">verified</span>
                  <p className="font-bold text-lg leading-tight">ISO 27001 Certified Service Portal</p>
                  <p className="text-[10px] opacity-70 mt-2">Data security and privacy is our priority</p>
                </div>
                <div className="absolute -bottom-4 -right-4 size-24 bg-white/10 rounded-full blur-2xl"></div>
              </div>
            </div>
          </div>
        </div>
        <footer className="mt-auto px-6 py-8 border-t border-slate-200 dark:border-slate-800 text-center">
          <p className="text-[11px] text-slate-500 font-medium tracking-wide">© 2024 Dinas Pendidikan Portal. Powered by Digital Governance Initiative.</p>
        </footer>
      </main>
    </div>
  );
}