// src/pages/DoctorProfile.jsx
import React, { useState } from "react";

export default function Profile() {
  const [profile, setProfile] = useState({
    name: "Dr. John Smith",
    email: "dr.john@example.com",
    phone: "123-456-7890",
    specialization: "Cardiology",
    experience: "10 years",
    hospital: "City Hospital",
  });

  const [editMode, setEditMode] = useState(false);

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSave = (e) => {
    e.preventDefault();
    setEditMode(false);
    alert("Profile updated successfully!");
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
      <main className="flex-1 p-8">
        <div className="max-w-3xl mx-auto bg-white shadow rounded-xl p-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold text-gray-800">Profile</h1>
            <button
              onClick={() => setEditMode(!editMode)}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            >
              {editMode ? "Cancel" : "Edit Profile"}
            </button>
          </div>

          {editMode ? (
            <form onSubmit={handleSave} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  value={profile.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="email"
                  name="email"
                  value={profile.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="tel"
                  name="phone"
                  value={profile.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="text"
                  name="specialization"
                  value={profile.specialization}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="experience"
                  value={profile.experience}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="text"
                  name="hospital"
                  value={profile.hospital}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
              >
                Save Profile
              </button>
            </form>
          ) : (
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="font-semibold text-gray-600">Name:</span>
                <span className="text-gray-800">{profile.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold text-gray-600">Email:</span>
                <span className="text-gray-800">{profile.email}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold text-gray-600">Phone:</span>
                <span className="text-gray-800">{profile.phone}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold text-gray-600">Specialization:</span>
                <span className="text-gray-800">{profile.specialization}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold text-gray-600">Experience:</span>
                <span className="text-gray-800">{profile.experience}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold text-gray-600">Hospital:</span>
                <span className="text-gray-800">{profile.hospital}</span>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
