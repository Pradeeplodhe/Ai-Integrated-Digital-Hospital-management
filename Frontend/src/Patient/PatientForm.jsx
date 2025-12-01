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
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
      <h2 className="text-3xl font-bold mb-6 text-center text-blue-700">
        Patient Medical Details Form
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">

        {/* Personal Info */}
        <h3 className="text-xl font-semibold mb-2">Personal Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="border p-2 rounded w-full"
            required
          />
          <input
            type="number"
            name="age"
            placeholder="Age"
            value={formData.age}
            onChange={handleChange}
            className="border p-2 rounded w-full"
            required
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="border p-2 rounded w-full"
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
            className="border p-2 rounded w-full"
          />
        </div>
        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          className="border p-2 rounded w-full"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="border p-2 rounded w-full"
        />
        <input
          type="text"
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
          className="border p-2 rounded w-full"
        />

        {/* Medical Info */}
        <h3 className="text-xl font-semibold mt-4 mb-2">Medical Information</h3>
        <textarea
          name="medicalHistory"
          placeholder="Medical History"
          value={formData.medicalHistory}
          onChange={handleChange}
          className="border p-2 rounded w-full h-20"
        />
        <textarea
          name="allergies"
          placeholder="Allergies"
          value={formData.allergies}
          onChange={handleChange}
          className="border p-2 rounded w-full h-20"
        />
        <textarea
          name="currentMedication"
          placeholder="Current Medications"
          value={formData.currentMedication}
          onChange={handleChange}
          className="border p-2 rounded w-full h-20"
        />
        <textarea
          name="surgeries"
          placeholder="Past Surgeries"
          value={formData.surgeries}
          onChange={handleChange}
          className="border p-2 rounded w-full h-20"
        />

        {/* Lifestyle Info */}
        <h3 className="text-xl font-semibold mt-4 mb-2">Lifestyle</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input
            type="text"
            name="smoking"
            placeholder="Smoking (Yes/No)"
            value={formData.smoking}
            onChange={handleChange}
            className="border p-2 rounded w-full"
          />
          <input
            type="text"
            name="alcohol"
            placeholder="Alcohol (Yes/No)"
            value={formData.alcohol}
            onChange={handleChange}
            className="border p-2 rounded w-full"
          />
          <input
            type="text"
            name="exercise"
            placeholder="Exercise (Daily/Weekly/None)"
            value={formData.exercise}
            onChange={handleChange}
            className="border p-2 rounded w-full"
          />
        </div>

        {/* Emergency Contact */}
        <h3 className="text-xl font-semibold mt-4 mb-2">Emergency Contact</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="emergencyContactName"
            placeholder="Contact Name"
            value={formData.emergencyContactName}
            onChange={handleChange}
            className="border p-2 rounded w-full"
          />
          <input
            type="text"
            name="emergencyContactPhone"
            placeholder="Contact Phone"
            value={formData.emergencyContactPhone}
            onChange={handleChange}
            className="border p-2 rounded w-full"
          />
        </div>

        {/* Insurance */}
        <h3 className="text-xl font-semibold mt-4 mb-2">Insurance Details</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="insuranceProvider"
            placeholder="Insurance Provider"
            value={formData.insuranceProvider}
            onChange={handleChange}
            className="border p-2 rounded w-full"
          />
          <input
            type="text"
            name="insuranceNumber"
            placeholder="Insurance Number"
            value={formData.insuranceNumber}
            onChange={handleChange}
            className="border p-2 rounded w-full"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white font-semibold py-2 px-4 rounded hover:bg-blue-700 transition w-full mt-4"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
