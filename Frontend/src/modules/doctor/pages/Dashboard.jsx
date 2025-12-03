// src/pages/DoctorDashboard.jsx
import React, { useState } from "react";

export default function Dashboard() {
  const [appointments, setAppointments] = useState([]);
  const [formData, setFormData] = useState({
    patientName: "",
    email: "",
    phone: "",
    doctor: "",
    date: "",
    time: "",
  });

  const doctors = ["Dr. Smith", "Dr. Johnson", "Dr. Williams", "Dr. Brown"];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setAppointments([...appointments, formData]);
    setFormData({
      patientName: "",
      email: "",
      phone: "",
      doctor: "",
      date: "",
      time: "",
    });
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-blue-800 text-white flex flex-col">
        <div className="p-6 text-2xl font-bold">Doctor Dashboard</div>
        <nav className="flex flex-col mt-6 space-y-2">
          <a href="#" className="px-6 py-2 hover:bg-blue-700 rounded">Appointments</a>
          <a href="#" className="px-6 py-2 hover:bg-blue-700 rounded">Patients</a>
          <a href="#" className="px-6 py-2 hover:bg-blue-700 rounded">Profile</a>
          <a href="#" className="px-6 py-2 hover:bg-blue-700 rounded">Settings</a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-auto">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">Appointments</h1>

        {/* Appointment Form */}
        <div className="bg-white shadow rounded-xl p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Book New Appointment</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="patientName"
                value={formData.patientName}
                onChange={handleChange}
                placeholder="Patient Name"
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <select
                name="doctor"
                value={formData.doctor}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select Doctor</option>
                {doctors.map((doc, idx) => (
                  <option key={idx} value={doc}>{doc}</option>
                ))}
              </select>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
            >
              Schedule Appointment
            </button>
          </form>
        </div>

        {/* Appointments Table */}
        <div className="bg-white shadow rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-4">Scheduled Appointments</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse block md:table">
              <thead className="block md:table-header-group">
                <tr className="border md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto md:relative">
                  <th className="p-2 text-left font-medium text-gray-700 md:border md:border-gray-300 md:table-cell">Patient Name</th>
                  <th className="p-2 text-left font-medium text-gray-700 md:border md:border-gray-300 md:table-cell">Email</th>
                  <th className="p-2 text-left font-medium text-gray-700 md:border md:border-gray-300 md:table-cell">Phone</th>
                  <th className="p-2 text-left font-medium text-gray-700 md:border md:border-gray-300 md:table-cell">Doctor</th>
                  <th className="p-2 text-left font-medium text-gray-700 md:border md:border-gray-300 md:table-cell">Date</th>
                  <th className="p-2 text-left font-medium text-gray-700 md:border md:border-gray-300 md:table-cell">Time</th>
                </tr>
              </thead>
              <tbody className="block md:table-row-group">
                {appointments.length === 0 ? (
                  <tr className="block md:table-row">
                    <td colSpan="6" className="p-2 text-center block md:table-cell">No appointments scheduled yet.</td>
                  </tr>
                ) : (
                  appointments.map((appt, idx) => (
                    <tr key={idx} className="block md:table-row border md:border-none">
                      <td className="p-2 block md:table-cell">{appt.patientName}</td>
                      <td className="p-2 block md:table-cell">{appt.email}</td>
                      <td className="p-2 block md:table-cell">{appt.phone}</td>
                      <td className="p-2 block md:table-cell">{appt.doctor}</td>
                      <td className="p-2 block md:table-cell">{appt.date}</td>
                      <td className="p-2 block md:table-cell">{appt.time}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
