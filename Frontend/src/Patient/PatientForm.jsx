// PatientForm.jsx
import React, { useState } from "react";

export default function PatientForm() {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    phone: "",
    email: "",
    address: "",
    bloodGroup: "",
    medicalHistory: "",
    allergies: "",
    currentMedication: "",
    surgeries: "",
    smoking: "",
    alcohol: "",
    exercise: "",
    emergencyContactName: "",
    emergencyContactPhone: "",
    insuranceProvider: "",
    insuranceNumber: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Patient Data Submitted:", formData);
    alert("Form submitted! Check console for details.");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 via-white to-blue-300 py-10">
      <div className="max-w-4xl mx-auto p-8 bg-white rounded-2xl shadow-xl">
        <h2 className="text-3xl font-bold mb-8 text-center text-blue-800">
          Patient Medical Details Form
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">

          {/* Personal Info */}
          <h3 className="text-xl font-semibold mb-4 text-blue-600 border-b pb-2">Personal Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              className="border p-3 rounded-lg w-full focus:ring-2 focus:ring-blue-400 focus:outline-none"
              required
            />
            <input
              type="number"
              name="age"
              placeholder="Age"
              value={formData.age}
              onChange={handleChange}
              className="border p-3 rounded-lg w-full focus:ring-2 focus:ring-blue-400 focus:outline-none"
              required
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="border p-3 rounded-lg w-full focus:ring-2 focus:ring-blue-400 focus:outline-none"
              required
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
            <input
              type="text"
              name="bloodGroup"
              placeholder="Blood Group"
              value={formData.bloodGroup}
              onChange={handleChange}
              className="border p-3 rounded-lg w-full focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
          </div>
          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="border p-3 rounded-lg w-full focus:ring-2 focus:ring-blue-400 focus:outline-none"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="border p-3 rounded-lg w-full focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
          <input
            type="text"
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
            className="border p-3 rounded-lg w-full focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />

          {/* Medical Info */}
          <h3 className="text-xl font-semibold mt-6 mb-4 text-blue-600 border-b pb-2">Medical Information</h3>
          <textarea
            name="medicalHistory"
            placeholder="Medical History"
            value={formData.medicalHistory}
            onChange={handleChange}
            className="border p-3 rounded-lg w-full h-24 focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
          <textarea
            name="allergies"
            placeholder="Allergies"
            value={formData.allergies}
            onChange={handleChange}
            className="border p-3 rounded-lg w-full h-24 focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
          <textarea
            name="currentMedication"
            placeholder="Current Medications"
            value={formData.currentMedication}
            onChange={handleChange}
            className="border p-3 rounded-lg w-full h-24 focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
          <textarea
            name="surgeries"
            placeholder="Past Surgeries"
            value={formData.surgeries}
            onChange={handleChange}
            className="border p-3 rounded-lg w-full h-24 focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />

          {/* Lifestyle Info */}
          <h3 className="text-xl font-semibold mt-6 mb-4 text-blue-600 border-b pb-2">Lifestyle</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input
              type="text"
              name="smoking"
              placeholder="Smoking (Yes/No)"
              value={formData.smoking}
              onChange={handleChange}
              className="border p-3 rounded-lg w-full focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
            <input
              type="text"
              name="alcohol"
              placeholder="Alcohol (Yes/No)"
              value={formData.alcohol}
              onChange={handleChange}
              className="border p-3 rounded-lg w-full focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
            <input
              type="text"
              name="exercise"
              placeholder="Exercise (Daily/Weekly/None)"
              value={formData.exercise}
              onChange={handleChange}
              className="border p-3 rounded-lg w-full focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
          </div>

          {/* Emergency Contact */}
          <h3 className="text-xl font-semibold mt-6 mb-4 text-blue-600 border-b pb-2">Emergency Contact</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="emergencyContactName"
              placeholder="Contact Name"
              value={formData.emergencyContactName}
              onChange={handleChange}
              className="border p-3 rounded-lg w-full focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
            <input
              type="text"
              name="emergencyContactPhone"
              placeholder="Contact Phone"
              value={formData.emergencyContactPhone}
              onChange={handleChange}
              className="border p-3 rounded-lg w-full focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
          </div>

          {/* Insurance */}
          <h3 className="text-xl font-semibold mt-6 mb-4 text-blue-600 border-b pb-2">Insurance Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="insuranceProvider"
              placeholder="Insurance Provider"
              value={formData.insuranceProvider}
              onChange={handleChange}
              className="border p-3 rounded-lg w-full focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
            <input
              type="text"
              name="insuranceNumber"
              placeholder="Insurance Number"
              value={formData.insuranceNumber}
              onChange={handleChange}
              className="border p-3 rounded-lg w-full focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white font-semibold py-3 px-6 rounded-xl hover:bg-blue-700 shadow-lg transition w-full mt-6"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
