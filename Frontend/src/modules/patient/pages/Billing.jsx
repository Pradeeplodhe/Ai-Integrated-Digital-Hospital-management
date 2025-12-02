import React, { useState } from "react";

export default function BillingPage() {
  const [patient, setPatient] = useState({
    name: "",
    id: "",
    age: "",
    gender: "",
    contact: ""
  });

  const [services, setServices] = useState([
    { name: "Consultation Fee", amount: 500 },
    { name: "Blood Test", amount: 800 },
    { name: "X-Ray", amount: 1200 },
  ]);

  const subtotal = services.reduce((acc, s) => acc + s.amount, 0);
  const tax = subtotal * 0.05; // 5% tax
  const total = subtotal + tax;

  const handlePayment = (method) => {
    alert(`Payment of ₹${total} successful via ${method} for ${patient.name}`);
    console.log({ patient, services, subtotal, tax, total, method });
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex justify-center items-start">
      <div className="w-full max-w-5xl bg-white rounded-3xl shadow-xl p-8 space-y-6">

        <h2 className="text-4xl font-bold text-blue-700 text-center">Patient Billing</h2>

        {/* ===== Patient Info ===== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-blue-50 p-6 rounded-2xl shadow-inner">
          <input
            type="text"
            placeholder="Patient Name"
            value={patient.name}
            onChange={(e) => setPatient({ ...patient, name: e.target.value })}
            className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="Patient ID"
            value={patient.id}
            onChange={(e) => setPatient({ ...patient, id: e.target.value })}
            className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="number"
            placeholder="Age"
            value={patient.age}
            onChange={(e) => setPatient({ ...patient, age: e.target.value })}
            className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
          />
          <select
            value={patient.gender}
            onChange={(e) => setPatient({ ...patient, gender: e.target.value })}
            className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select Gender</option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>
          <input
            type="tel"
            placeholder="Contact Number"
            value={patient.contact}
            onChange={(e) => setPatient({ ...patient, contact: e.target.value })}
            className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 md:col-span-2"
          />
        </div>

        {/* ===== Services Table ===== */}
        <div className="overflow-x-auto">
          <table className="w-full table-auto border-collapse border border-gray-200">
            <thead className="bg-blue-100">
              <tr>
                <th className="border px-4 py-2 text-left">Service</th>
                <th className="border px-4 py-2 text-right">Amount (₹)</th>
              </tr>
            </thead>
            <tbody>
              {services.map((s, idx) => (
                <tr key={idx} className={idx % 2 === 0 ? "bg-white hover:bg-blue-50 transition" : "bg-blue-50 hover:bg-blue-100 transition"}>
                  <td className="border px-4 py-2">{s.name}</td>
                  <td className="border px-4 py-2 text-right">{s.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* ===== Summary Section ===== */}
        <div className="bg-gray-50 p-6 rounded-2xl shadow-inner flex flex-col md:flex-row justify-between items-center">
          <div className="space-y-2">
            <p className="text-gray-700">Subtotal: <span className="font-semibold">₹{subtotal}</span></p>
            <p className="text-gray-700">Tax (5%): <span className="font-semibold">₹{tax.toFixed(2)}</span></p>
            <p className="text-gray-800 text-lg font-bold">Total: ₹{total.toFixed(2)}</p>
          </div>

          {/* ===== Payment Buttons ===== */}
          <div className="mt-4 md:mt-0 flex gap-4">
            {["Cash", "Card", "UPI"].map((method) => (
              <button
                key={method}
                onClick={() => handlePayment(method)}
                className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 shadow-md"
              >
                Pay via {method}
              </button>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
