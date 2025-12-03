import React, { useState } from "react";

export default function MedicalReport() {
  const [search, setSearch] = useState("");
  const [reports] = useState([
    {
      id: 1,
      patient: "Rahul Sharma",
      test: "Blood Test",
      date: "2025-11-28",
      status: "Completed",
      link: "#"
    },
    {
      id: 2,
      patient: "Priya Gupta",
      test: "X-Ray",
      date: "2025-11-26",
      status: "Pending",
      link: "#"
    },
    {
      id: 3,
      patient: "Amit Verma",
      test: "MRI Scan",
      date: "2025-11-21",
      status: "Completed",
      link: "#"
    }
  ]);

  return (
    <section className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Medical Reports</h1>

      {/* Search */}
      <div className="mb-5 flex justify-end">
        <input
          type="text"
          placeholder="Search by name/test..."
          className="border px-4 py-2 rounded-lg w-72 shadow-sm focus:ring focus:outline-none"
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
        />
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded-xl shadow-xl">
        <table className="w-full border-collapse text-left">
          <thead className="bg-gray-900 text-white">
            <tr>
              <th className="p-4">Patient</th>
              <th className="p-4">Test Name</th>
              <th className="p-4">Date</th>
              <th className="p-4">Status</th>
              <th className="p-4">Action</th>
            </tr>
          </thead>

          <tbody>
            {reports
              .filter((r) =>
                r.patient.toLowerCase().includes(search) ||
                r.test.toLowerCase().includes(search)
              )
              .map((report) => (
                <tr
                  key={report.id}
                  className="border-b hover:bg-gray-100 transition"
                >
                  <td className="p-4 font-medium">{report.patient}</td>
                  <td className="p-4">{report.test}</td>
                  <td className="p-4">{report.date}</td>
                  <td
                    className={`p-4 font-semibold ${
                      report.status === "Completed"
                        ? "text-green-600"
                        : "text-yellow-600"
                    }`}
                  >
                    {report.status}
                  </td>
                  <td className="p-4">
                    <a
                      href={report.link}
                      className="px-4 py-2 rounded-lg font-medium border hover:bg-gray-900 hover:text-white transition"
                    >
                      Download
                    </a>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
