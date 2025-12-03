// src/pages/PatientList.jsx
import React, { useState } from "react";

export default function PatientList() {
  const [patients, setPatients] = useState([
    {
      name: "John Doe",
      email: "john@example.com",
      phone: "1234567890",
      lastAppointment: "2025-12-05",
      doctor: "Dr. Smith",
    },
    {
      name: "Jane Smith",
      email: "jane@example.com",
      phone: "9876543210",
      lastAppointment: "2025-12-02",
      doctor: "Dr. Johnson",
    },
  ]);

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
        <h1 className="text-3xl font-bold mb-6 text-gray-800">Patient List</h1>

        {/* Patients Table */}
        <div className="bg-white shadow rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-4">All Patients</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse block md:table">
              <thead className="block md:table-header-group">
                <tr className="border md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto md:relative">
                  <th className="p-2 text-left font-medium text-gray-700 md:border md:border-gray-300 md:table-cell">Name</th>
                  <th className="p-2 text-left font-medium text-gray-700 md:border md:border-gray-300 md:table-cell">Email</th>
                  <th className="p-2 text-left font-medium text-gray-700 md:border md:border-gray-300 md:table-cell">Phone</th>
                  <th className="p-2 text-left font-medium text-gray-700 md:border md:border-gray-300 md:table-cell">Last Appointment</th>
                  <th className="p-2 text-left font-medium text-gray-700 md:border md:border-gray-300 md:table-cell">Doctor</th>
                </tr>
              </thead>
              <tbody className="block md:table-row-group">
                {patients.length === 0 ? (
                  <tr className="block md:table-row">
                    <td colSpan="5" className="p-2 text-center block md:table-cell">No patients found.</td>
                  </tr>
                ) : (
                  patients.map((patient, idx) => (
                    <tr key={idx} className="block md:table-row border md:border-none">
                      <td className="p-2 block md:table-cell">{patient.name}</td>
                      <td className="p-2 block md:table-cell">{patient.email}</td>
                      <td className="p-2 block md:table-cell">{patient.phone}</td>
                      <td className="p-2 block md:table-cell">{patient.lastAppointment}</td>
                      <td className="p-2 block md:table-cell">{patient.doctor}</td>
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
