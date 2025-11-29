import React from "react";
import { 
  Calendar, FileText, User, HeartPulse, LogOut, Stethoscope, 
  Bell, MessageCircle 
} from "lucide-react";

export default function PatientHome() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-gray-200">

      {/* ================= HEADER ================= */}
      <header className="backdrop-blur-xl bg-white/5 border-b border-gray-700 sticky top-0 z-20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          
          <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            Patient Dashboard
          </h1>

          <div className="flex items-center gap-6">
            <Bell className="text-blue-400 cursor-pointer hover:scale-110 transition" size={26} />
            <MessageCircle className="text-blue-400 cursor-pointer hover:scale-110 transition" size={26} />
            <div className="flex items-center gap-3">
              <img 
                src="https://i.pravatar.cc/50?img=12"
                className="w-10 h-10 rounded-full border border-blue-500"
                alt="profile"
              />
              <p className="font-semibold text-blue-400">Pradeep</p>
            </div>
          </div>
        </div>
      </header>

      {/* ================ MAIN CONTENT LAYOUT ================= */}
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 lg:grid-cols-4 gap-8">

        {/* Sidebar */}
        <aside className="lg:col-span-1 bg-white/10 backdrop-blur-xl border border-gray-700 shadow-xl rounded-2xl p-6 space-y-6">
          <h2 className="text-xl font-semibold text-blue-400 mb-4 uppercase">Menu</h2>

          <div className="space-y-4">
            <MenuItem title="My Profile" icon={<User size={22} />} />
            <MenuItem title="My Reports" icon={<FileText size={22} />} />
            <MenuItem title="Appointments" icon={<Calendar size={22} />} />
            <MenuItem title="Consult Doctor" icon={<Stethoscope size={22} />} />
            <MenuItem title="Health Meter" icon={<HeartPulse size={22} />} />
          </div>

          <button className="flex w-full items-center justify-center gap-3 bg-gradient-to-r from-red-500 to-red-700 text-white py-3 rounded-xl hover:scale-105 transition">
            <LogOut size={20} /> Logout
          </button>
        </aside>

        {/* MAIN CONTENT */}
        <main className="lg:col-span-3 space-y-10">

          <section>
            <h2 className="text-4xl font-bold text-white">👋 Welcome Back, Pradeep</h2>
            <p className="text-gray-400 mt-1 text-lg">Here's your health summary for today.</p>
          </section>

          {/* Stats */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <StatCard title="Total Appointments" value="12" icon={<Calendar size={40} />} />
            <StatCard title="Reports Uploaded" value="8" icon={<FileText size={40} />} />
            <StatCard title="Doctors Consulted" value="5" icon={<Stethoscope size={40} />} />
          </section>

          {/* Actions */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ActionCard title="Book Appointment" desc="Schedule your visit with a doctor." icon={<Calendar size={34} />} />
            <ActionCard title="View Reports" desc="Check your lab and diagnosis results." icon={<FileText size={34} />} />
            <ActionCard title="Update Profile" desc="Edit personal details & contact info." icon={<User size={34} />} />
          </section>

          {/* Appointment */}
          <section className="bg-white/10 border border-blue-600 shadow-xl rounded-2xl p-6">
            <h3 className="text-2xl font-bold mb-4 text-blue-400 tracking-wide">Upcoming Appointment</h3>

            <div className="flex justify-between items-center p-4 bg-blue-950/30 rounded-xl border border-blue-800">
              <div>
                <p className="text-xl font-semibold text-white">Dr. Rahul Sharma</p>
                <p className="text-gray-400">Cardiologist</p>
                <p className="text-gray-300 mt-2">📅 02 Dec 2025</p>
                <p className="text-gray-300">⏰ 10:30 AM</p>
              </div>

              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl transition hover:scale-105">
                View Details
              </button>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

/* ================= COMPONENTS ================= */
function MenuItem({ title, icon }) {
  return (
    <button className="flex items-center gap-4 text-gray-300 hover:bg-blue-600/20 border border-transparent hover:border-blue-600 p-3 rounded-xl w-full transition">
      {icon}
      <span className="font-medium">{title}</span>
    </button>
  );
}

function StatCard({ title, value, icon }) {
  return (
    <div className="bg-white/10 border border-gray-700 rounded-2xl p-6 flex items-center gap-6 hover:border-blue-500 hover:shadow-blue-700/40 hover:shadow-xl transition">
      <div className="text-blue-400">{icon}</div>
      <div>
        <p className="text-gray-400">{title}</p>
        <h3 className="text-3xl font-bold text-white">{value}</h3>
      </div>
    </div>
  );
}

function ActionCard({ title, desc, icon }) {
  return (
    <div className="bg-white/10 border border-gray-700 rounded-2xl p-6 cursor-pointer hover:border-blue-500 hover:scale-[1.05] transition hover:shadow-blue-700/40 hover:shadow-xl">
      <div className="text-blue-400 mb-3">{icon}</div>
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <p className="text-gray-400 mt-1">{desc}</p>
    </div>
  );
}
