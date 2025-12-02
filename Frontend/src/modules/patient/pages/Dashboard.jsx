import React, { useState } from "react";
import { User, Calendar, DollarSign, Stethoscope, Bell } from "lucide-react";

export default function DashboardPage() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const summary = [
    { title: "Total Patients", count: 1200, icon: <User className="w-6 h-6" /> },
    { title: "Appointments Today", count: 75, icon: <Calendar className="w-6 h-6" /> },
    { title: "Total Revenue", count: "₹5,00,000", icon: <DollarSign className="w-6 h-6" /> },
    { title: "Active Doctors", count: 25, icon: <Stethoscope className="w-6 h-6" /> },
  ];

  const appointments = [
    { id: 1, patient: "Rohan Sharma", doctor: "Dr. Amit Sharma", time: "10:00 AM", status: "Pending" },
    { id: 2, patient: "Neha Verma", doctor: "Dr. Neha Patel", time: "11:30 AM", status: "Completed" },
    { id: 3, patient: "Amit Kumar", doctor: "Dr. Raj Singh", time: "1:00 PM", status: "Cancelled" },
    { id: 4, patient: "Priya Mehra", doctor: "Dr. Priya Mehra", time: "2:30 PM", status: "Pending" },
  ];

  return (
    <div className="min-h-screen flex bg-gray-100">

      {/* ===== Sidebar ===== */}
      {sidebarOpen && (
        <div className="w-64 bg-white shadow-xl p-6 flex flex-col transition-all duration-300">
          <h2 className="text-2xl font-bold text-blue-700 mb-6">Hospital Admin</h2>
          <nav className="flex flex-col gap-4">
            <button className="text-gray-700 font-semibold hover:text-blue-600 hover:bg-blue-50 px-3 py-2 rounded-lg transition">Dashboard</button>
            <button className="text-gray-700 font-semibold hover:text-blue-600 hover:bg-blue-50 px-3 py-2 rounded-lg transition">Appointments</button>
            <button className="text-gray-700 font-semibold hover:text-blue-600 hover:bg-blue-50 px-3 py-2 rounded-lg transition">Billing</button>
            <button className="text-gray-700 font-semibold hover:text-blue-600 hover:bg-blue-50 px-3 py-2 rounded-lg transition">Doctors</button>
            <button className="text-gray-700 font-semibold hover:text-blue-600 hover:bg-blue-50 px-3 py-2 rounded-lg transition">Reports</button>
          </nav>
        </div>
      )}

      {/* ===== Main Content ===== */}
      <div className="flex-1 p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-blue-700">Dashboard</h1>
          <div className="flex items-center gap-4">
            <Bell className="w-6 h-6 text-gray-600 cursor-pointer hover:text-blue-600 transition" />
            <div className="bg-blue-600 text-white px-3 py-1 rounded-full font-semibold">Admin</div>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {summary.map((item, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl shadow-md flex items-center justify-between hover:shadow-xl transition">
              <div>
                <p className="text-gray-500">{item.title}</p>
                <p className="text-2xl font-bold text-gray-800">{item.count}</p>
              </div>
              <div className="text-blue-600">{item.icon}</div>
            </div>
          ))}
        </div>

        {/* Appointments Table */}
        <div className="bg-white rounded-2xl shadow-md overflow-x-auto mb-8">
          <table className="w-full table-auto border-collapse border border-gray-200">
            <thead className="bg-blue-100">
              <tr>
                <th className="border px-4 py-2 text-left">Patient</th>
                <th className="border px-4 py-2 text-left">Doctor</th>
                <th className="border px-4 py-2 text-left">Time</th>
                <th className="border px-4 py-2 text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              {appointments.map((a) => (
                <tr key={a.id} className="hover:bg-blue-50 transition">
                  <td className="border px-4 py-2">{a.patient}</td>
                  <td className="border px-4 py-2">{a.doctor}</td>
                  <td className="border px-4 py-2">{a.time}</td>
                  <td className={`border px-4 py-2 font-semibold rounded-lg text-center ${
                    a.status === "Completed" ? "text-green-600 bg-green-50" :
                    a.status === "Pending" ? "text-yellow-600 bg-yellow-50" :
                    "text-red-600 bg-red-50"
                  }`}>{a.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <button className="bg-green-600 text-white py-3 rounded-xl font-semibold hover:bg-green-700 shadow-md transition">
            Book Appointment
          </button>
          <button className="bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 shadow-md transition">
            Generate Bill
          </button>
          <button className="bg-yellow-600 text-white py-3 rounded-xl font-semibold hover:bg-yellow-700 shadow-md transition">
            View Reports
          </button>
        </div>
      </div>
    </div>
  );
}
