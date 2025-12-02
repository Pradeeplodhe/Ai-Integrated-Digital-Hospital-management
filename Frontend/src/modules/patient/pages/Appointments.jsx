import React, { useState } from "react";
import { Calendar, Clock, User, Stethoscope } from "lucide-react";

export default function Appointment() {
  // ===== Form State =====
  const [department, setDepartment] = useState("");
  const [doctor, setDoctor] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [reason, setReason] = useState("");

  // ===== Handle Submit =====
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = { department, doctor, date, time, reason };
    console.log("Appointment Data:", formData);
    alert("Appointment Booked Successfully! Check console for details.");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 p-6 flex justify-center items-start">
      <div className="w-full max-w-5xl bg-white rounded-3xl shadow-xl p-8">

        {/* ===== Header ===== */}
        <h2 className="text-4xl font-bold text-center text-blue-700 mb-2">Book Your Appointment</h2>
        <p className="text-center text-gray-600 mb-6">
          Schedule a visit with our expert doctors in just a few clicks
        </p>

        {/* ===== Appointment Form ===== */}
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <div>
            <label className="font-semibold text-gray-700">Select Department</label>
            <select
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
              className="w-full mt-1 px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Select Department</option>
              <option>Cardiology</option>
              <option>Dentistry</option>
              <option>Orthopedics</option>
              <option>Dermatology</option>
              <option>General Physician</option>
            </select>
          </div>

          <div>
            <label className="font-semibold text-gray-700">Select Doctor</label>
            <select
              value={doctor}
              onChange={(e) => setDoctor(e.target.value)}
              className="w-full mt-1 px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Select Doctor</option>
              <option>Dr. Amit Sharma - Cardiologist</option>
              <option>Dr. Neha Patel - Dentist</option>
              <option>Dr. Raj Singh - Orthopedics</option>
              <option>Dr. Priya Mehra - Dermatology</option>
              <option>Dr. Abhishek Rao - Physician</option>
            </select>
          </div>

          <div>
            <label className="font-semibold text-gray-700">Select Date</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full mt-1 px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="font-semibold text-gray-700">Select Time</label>
            <input
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="w-full mt-1 px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="md:col-span-2">
            <label className="font-semibold text-gray-700">Reason for Appointment</label>
            <textarea
              placeholder="Describe symptoms or reason for visit"
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              className="w-full mt-1 px-4 py-3 border rounded-lg h-32 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <button
            type="submit"
            className="md:col-span-2 w-full mt-2 bg-blue-600 text-white py-3 rounded-xl text-lg font-semibold hover:bg-blue-700 shadow-md"
          >
            Confirm Appointment
          </button>
        </form>

        {/* ===== Specialist Doctors Section ===== */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          <div className="md:col-span-2 bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
            <h3 className="text-xl font-semibold text-blue-700 mb-3 flex items-center gap-2">
              <Stethoscope /> Our Specialist Doctors
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { name: "Dr. Amit Sharma", spec: "Cardiologist", avail: "10 AM - 2 PM" },
                { name: "Dr. Neha Patel", spec: "Dentist", avail: "11 AM - 5 PM" },
                { name: "Dr. Raj Singh", spec: "Orthopedics", avail: "9 AM - 1 PM" },
                { name: "Dr. Priya Mehra", spec: "Dermatologist", avail: "1 PM - 6 PM" },
              ].map((doc, idx) => (
                <div key={idx} className="border rounded-xl p-4 hover:shadow-md transition cursor-pointer">
                  <h4 className="font-bold text-gray-800">{doc.name}</h4>
                  <p className="text-sm text-gray-600">{doc.spec} - {doc.avail.split('-')[0].trim()} yrs Exp.</p>
                  <p className="mt-2 text-blue-600 font-semibold">Available: {doc.avail}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl text-white p-6 shadow-md flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-3 flex items-center gap-2"><Calendar /> Today</h3>
            <p className="text-lg">Book appointment with top certified doctors.</p>
            <p className="mt-4 text-sm text-blue-100 flex items-center gap-2"><Clock /> 24/7 Emergency Support</p>
            <p className="text-sm text-blue-100 flex items-center gap-2"><User /> 10K+ Happy Patients</p>
          </div>
        </div>

        {/* ===== Facilities Section ===== */}
        <section className="mt-14 bg-white rounded-3xl shadow-xl p-8 border border-gray-200">
          <h2 className="text-3xl font-bold text-blue-700 text-center mb-6">Hospital Facilities & Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "24/7 Emergency Care", desc: "Critical care & ambulance service available round the clock." },
              { title: "Online Reports", desc: "Download lab reports & test results anytime securely." },
              { title: "Modern Operation Theatre", desc: "Fully equipped latest technology based OT rooms." },
              { title: "Pharmacy & Medicine", desc: "All required medicines available inside hospital." },
              { title: "Diagnostic & Lab Tests", desc: "MRI, CT Scan, X-Ray, ECG, Blood tests & more." },
              { title: "Insurance & Cashless", desc: "Cashless facility for top insurance companies." },
            ].map((fac, idx) => (
              <div key={idx} className="p-6 border rounded-2xl shadow-sm hover:shadow-lg transition">
                <h3 className="font-bold text-lg text-gray-800">{fac.title}</h3>
                <p className="text-gray-600 mt-2">{fac.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ===== Why Choose Section ===== */}
        <section className="mt-14 bg-blue-600 text-white rounded-3xl p-10 shadow-xl">
          <h2 className="text-4xl font-bold text-center mb-6">Why Choose Our Hospital?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {[
              { num: "250+", label: "Specialist Doctors" },
              { num: "1M+", label: "Happy Patients" },
              { num: "500+", label: "Staff & Nurses" },
              { num: "15+", label: "Years of Excellence" },
            ].map((stat, idx) => (
              <div key={idx}>
                <p className="text-5xl font-bold">{stat.num}</p>
                <p className="text-xl">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
