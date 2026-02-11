import DashboardClient from "@/components/Dashboard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard | Dinas Pendidikan",
  description: "Panel kendali pusat layanan terpadu",
};

export default function DashboardPage() {
  // Page ini berjalan di SERVER
  // Kamu bisa fetch data dari DB di sini jika perlu, 
  // lalu kirim ke DashboardClient sebagai props
  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark pt-20">
      <DashboardClient />
    </div>
  );
}