import React, { useState } from "react";
import { Search, Download, Eye } from "lucide-react";

export default function LabReport() {
  const initialReports = [
    { name: "Blood Test - CBC", date: "02 Dec 2025", status: "Completed", fileUrl: "https://example.com/cbc.pdf" },
    { name: "X-Ray Scan", date: "01 Dec 2025", status: "Pending", fileUrl: "#" },
    { name: "MRI Brain Scan", date: "28 Nov 2025", status: "Completed", fileUrl: "https://example.com/mri.pdf" },
    { name: "COVID RTPCR Test", date: "22 Nov 2025", status: "Completed", fileUrl: "https://example.com/covid.pdf" }
  ];

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const filteredReports = initialReports.filter((r) =>
    r.name.toLowerCase().includes(search.toLowerCase()) &&
    (filter === "All" || r.status === filter)
  );

  return (
    <section className="py-20 max-w-7xl mx-auto px-10">
      <h2 className="text-5xl font-bold mb-10 text-center tracking-wide">Patient Lab Reports</h2>

      {/* Search + Filter */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
        <div className="flex items-center gap-3 px-5 py-3 bg-white shadow-lg rounded-xl w-full md:w-1/2 border border-gray-200">
          <Search size={22} className="text-gray-500" />
          <input
            type="text"
            placeholder="Search reports..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="outline-none w-full text-lg"
          />
        </div>

        <select
          className="px-6 py-3 rounded-xl border shadow bg-white text-lg cursor-pointer"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="All">All Reports</option>
          <option value="Completed">Completed</option>
          <option value="Pending">Pending</option>
        </select>
      </div>

      {filteredReports.length === 0 ? (
        <p className="text-gray-600 text-center text-2xl font-semibold mt-10">No matching reports found.</p>
      ) : (
        <div className="overflow-x-auto rounded-2xl shadow-2xl bg-white">
          <table className="min-w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-200 text-xl font-semibold">
                <th className="p-6">Report Name</th>
                <th className="p-6">Date</th>
                <th className="p-6">Status</th>
                <th className="p-6 text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="text-lg">
              {filteredReports.map((report, index) => (
                <tr key={index} className="border-b hover:bg-gray-50 transition-all">
                  <td className="p-6 font-semibold">{report.name}</td>
                  <td className="p-6">{report.date}</td>
                  <td className="p-6">
                    <span
                      className={`px-4 py-2 rounded-full font-semibold shadow-md ${
                        report.status === "Completed"
                          ? "bg-green-100 text-green-700 border border-green-300"
                          : "bg-yellow-100 text-yellow-700 border border-yellow-300"
                      }`}
                    >
                      {report.status}
                    </span>
                  </td>
                  <td className="p-6 flex justify-center gap-4">
                    <button
                      className="p-3 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition"
                      onClick={() => window.open(report.fileUrl, "_blank")}
                    >
                      <Eye size={22} />
                    </button>
                    <button className="p-3 rounded-full bg-gray-800 text-white hover:bg-black transition">
                      <Download size={22} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
}