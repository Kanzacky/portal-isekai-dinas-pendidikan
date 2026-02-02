"use client";

import React, { useState } from 'react';
import Link from 'next/link'; 
import { useSession, signOut } from 'next-auth/react'; 

const Dashboard: React.FC = () => {
  const { data: session } = useSession(); 
  const [activeCategory, setActiveCategory] = useState('student');

  const getTitle = () => {
    switch (activeCategory) {
      case 'student': return 'Popular Student Services';
      case 'teacher': return 'Teacher & Staff Services';
      case 'facility': return 'School Facilities Services';
      case 'public': return 'General Public Services';
      default: return 'Popular Services';
    }
  };

  const services = {
    student: [
      { icon: 'assignment_turned_in', color: 'blue', title: 'Legalisir Ijazah Online', desc: 'Digital validation of diploma and certificates.', est: 'Est. 3-5 Days', action: 'Apply Now' },
      { icon: 'move_up', color: 'emerald', title: 'Mutasi Siswa', desc: 'Process transfer requests between institutions.', est: 'Est. 7 Days', action: 'Apply Now' },
      { icon: 'workspace_premium', color: 'amber', title: 'Beasiswa Unggulan', desc: 'Regional scholarship program applications.', est: 'Seasonal', action: 'Apply Now' }
    ],
    teacher: [
      { icon: 'badge', color: 'indigo', title: 'NUPTK Proposal', desc: 'National Educator Identification Number.', est: 'Est. 14 Days', action: 'Apply Now' },
      { icon: 'trending_up', color: 'violet', title: 'Kenaikan Pangkat', desc: 'Functional position promotion assessment.', est: 'Seasonal', action: 'Submit' }
    ],
    facility: [
        { icon: 'history_edu', color: 'rose', title: 'Izin Operasional', desc: 'Establishment permits for private foundations.', est: 'Est. 30 Days', action: 'Apply Now' }
    ],
    public: [
        { icon: 'campaign', color: 'violet', title: 'Layanan Pengaduan', desc: 'Submit complaints or feedback regarding ethics.', est: 'Response 24h', action: 'Submit Case' }
    ]
  };

  const currentServices = services[activeCategory as keyof typeof services] || [];

  return (
    <div className="flex min-h-screen bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100">
      {/* Sidebar */}
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
            {['student', 'teacher', 'facility', 'public'].map((cat) => (
                <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${activeCategory === cat ? 'bg-primary text-white shadow-md shadow-primary/20' : 'hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400'}`}
                >
                    <span className="material-symbols-outlined">
                        {cat === 'student' ? 'school' : cat === 'teacher' ? 'co_present' : cat === 'facility' ? 'domain' : 'groups'}
                    </span>
                    <span className="text-sm font-medium capitalize">{cat} Services</span>
                </button>
            ))}
          </nav>
        </div>

        {/* Logout Button (Tambahan Baru) */}
        <div className="mt-auto p-6">
          <button 
            onClick={() => signOut({ callbackUrl: '/auth/login' })}
            className="w-full flex items-center justify-center gap-2 bg-red-50 dark:bg-red-900/10 text-red-600 py-3 rounded-xl font-bold text-sm hover:bg-red-100 transition-all"
          >
            <span className="material-symbols-outlined text-sm">logout</span> Sign Out
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 lg:ml-72 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-primary/5 via-background-light to-background-light dark:from-primary/10 dark:via-background-dark dark:to-background-dark">
        <header className="sticky top-0 z-40 w-full px-6 py-4 flex items-center justify-between bg-white/50 dark:bg-background-dark/50 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-4">
            <button className="lg:hidden material-symbols-outlined">menu</button>
            <h2 className="text-xl font-bold hidden sm:block">Dashboard</h2>
          </div>
          
          <div className="flex items-center gap-6">
            <div className="hidden md:flex items-center gap-4 text-sm font-medium text-slate-600 dark:text-slate-400">
              <Link href="/" className="hover:text-primary transition-colors">Home</Link>
              <Link href="/profile" className="hover:text-primary transition-colors">About Us</Link>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex items-center gap-3 pl-1">
                {/* Data Dinamis dari Session */}
                <div className="bg-slate-200 rounded-full size-10 border-2 border-primary/20 flex items-center justify-center font-bold text-primary">
                  {session?.user?.name?.charAt(0) || 'U'}
                </div>
                <div className="hidden sm:block">
                  <p className="text-xs font-bold leading-tight">{session?.user?.name || 'User Portal'}</p>
                  <p className="text-[10px] text-slate-500">{session?.user?.email || 'Masyarakat'}</p>
                </div>
              </div>
            </div>
          </div>
        </header>

        <div className="max-w-6xl mx-auto p-6 md:p-10">
          {/* Section Tracking dkk... (Tetap Sama dengan JSX Anda) */}
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">{getTitle()}</h2>
              <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">Select a service below to start your digital application.</p>
            </div>
            <Link href="/services" className="text-primary text-sm font-bold flex items-center gap-1 hover:underline">
              View All <span className="material-symbols-outlined text-[18px]">chevron_right</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {currentServices.map((item, index) => (
              <div key={index} className="glass-card p-6 rounded-2xl group hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 transform hover:-translate-y-1">
                <div className={`size-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform`}>
                  <span className="material-symbols-outlined text-[28px]">{item.icon}</span>
                </div>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-6">{item.desc}</p>
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">{item.est}</span>
                  <button className="bg-primary text-white text-sm font-bold px-5 py-2 rounded-lg shadow-md hover:shadow-lg transition-all">{item.action}</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;