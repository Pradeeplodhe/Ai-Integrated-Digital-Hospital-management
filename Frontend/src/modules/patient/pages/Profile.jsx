import React, { useState } from "react";

export default function PatientProfile() {
  const [patient] = useState({
    name: "Rahul Sharma",
    age: 32,
    gender: "Male",
    bloodGroup: "B+",
    phone: "+91 9876543210",
    email: "rahul.sharma@example.com",
    address: "Delhi, India",
    disease: "Diabetes Type 2",
    lastVisit: "2025-11-22",
    doctor: "Dr. Priya Garg",
    status: "Under Treatment",
    profileImg: "https://i.pravatar.cc/200?img=15",
    upcomingAppointment: "10 Dec 2025, 2:00 PM",
  });

  return (
    <div className="min-h-screen p-6 bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-200">
      <section className="max-w-6xl mx-auto space-y-10">
        
        {/* HEADER */}
        <div className="bg-gradient-to-r from-blue-800 via-indigo-800 to-purple-700 text-white p-7 rounded-3xl shadow-2xl">
          <h1 className="text-4xl font-bold tracking-wide text-center">
            Patient Profile Dashboard
          </h1>
        </div>

        {/* PROFILE CARD */}
        <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-gray-200 p-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            
            {/* PROFILE IMAGE */}
            <img
              src={patient.profileImg}
              className="w-44 h-44 rounded-full border-4 border-white shadow-xl object-cover"
              alt="Patient"
            />

            {/* MAIN INFORMATION */}
            <div className="space-y-1 text-center md:text-left">
              <h2 className="text-3xl font-bold text-gray-900">{patient.name}</h2>
              <p className="text-lg text-blue-600 font-semibold">{patient.disease}</p>
              <p className="text-sm text-gray-600">Consulting: {patient.doctor}</p>

              {/* BUTTONS */}
              <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-5">
                <button className="px-6 py-2 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 hover:scale-105 shadow-md transition">
                  Edit Profile
                </button>
                <button className="px-6 py-2 bg-gray-900 text-white rounded-xl font-semibold hover:scale-105 shadow-md transition">
                  Download Report
                </button>
              </div>
            </div>

            {/* STATUS CARD */}
            <div className="bg-blue-50 p-5 rounded-xl shadow-lg border">
              <p className="text-sm font-semibold text-gray-600">Patient Status</p>
              <p className="text-xl font-bold text-blue-700">{patient.status}</p>
            </div>
          </div>

          {/* DETAILS GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            <Detail label="Age" value={patient.age} />
            <Detail label="Gender" value={patient.gender} />
            <Detail label="Blood Group" value={patient.bloodGroup} />
            <Detail label="Phone" value={patient.phone} />
            <Detail label="Email" value={patient.email} />
            <Detail label="Address" value={patient.address} />
            <Detail label="Last Visit" value={patient.lastVisit} />
            <Detail label="Next Appointment" value={patient.upcomingAppointment} />
          </div>
        </div>

        {/* SUMMARY CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Summary title="Total Reports" value="18" />
          <Summary title="Upcoming Tests" value="2" />
          <Summary title="Prescribed Medicines" value="7" />
        </div>

        {/* RECENT REPORTS */}
        <div className="bg-white rounded-2xl shadow-xl p-6 border">
          <h3 className="text-2xl font-bold mb-4">Recent Reports</h3>
          <table className="w-full text-left">
            <thead className="bg-gray-900 text-white">
              <tr>
                <th className="p-3">Report</th>
                <th className="p-3">Date</th>
                <th className="p-3">Status</th>
                <th className="p-3">Download</th>
              </tr>
            </thead>
            <tbody>
              <ReportRow name="Blood Test" date="01 Dec 2025" status="Completed" />
              <ReportRow name="X-Ray" date="27 Nov 2025" status="Completed" />
              <ReportRow name="Sugar Level Test" date="20 Nov 2025" status="Pending" />
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

// DETAILS BOX
function Detail({ label, value }) {
  return (
    <div className="bg-white shadow-md p-4 rounded-xl border hover:shadow-xl hover:border-blue-600 transition-all duration-300">
      <p className="text-gray-500 text-sm">{label}</p>
      <p className="text-xl font-semibold text-gray-900">{value}</p>
    </div>
  );
}

// SUMMARY CARDS
function Summary({ title, value }) {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-6 rounded-2xl shadow-xl text-center">
      <p className="text-lg">{title}</p>
      <h2 className="text-4xl font-bold">{value}</h2>
    </div>
  );
}

// REPORT ROW
function ReportRow({ name, date, status }) {
  return (
    <tr className="border-b hover:bg-gray-100 transition">
      <td className="p-3 font-medium">{name}</td>
      <td className="p-3">{date}</td>
      <td className={`p-3 font-semibold ${status === "Completed" ? "text-green-600" : "text-yellow-600"}`}>
        {status}
      </td>
      <td className="p-3">
        <button className="px-4 py-1 border rounded-lg hover:bg-gray-900 hover:text-white transition">
          Download
        </button>
      </td>
    </tr>
  );
}
