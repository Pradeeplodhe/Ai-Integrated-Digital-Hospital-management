import React, { useState } from "react";

export default function Settings() {
  const [form, setForm] = useState({
    name: "Rahul Sharma",
    phone: "+91 9876543210",
    email: "rahul.sharma@gmail.com",
    address: "Delhi, India",
    notifications: true,
    password: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-100 via-blue-100 to-indigo-200 p-6">
      <section className="max-w-4xl mx-auto space-y-8">

        {/* HEADER */}
        <div className="bg-gradient-to-r from-blue-700 to-indigo-700 text-white rounded-3xl shadow-2xl p-6 text-center">
          <h1 className="text-3xl font-bold tracking-wide">Patient Settings</h1>
          <p className="text-sm text-blue-200">
            Manage your personal information & account preferences
          </p>
        </div>

        {/* SETTINGS CARD */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-200 space-y-8">

          {/* PERSONAL INFO */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800">Personal Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-5">
              <Input label="Full Name" name="name" value={form.name} onChange={handleChange} />
              <Input label="Phone Number" name="phone" value={form.phone} onChange={handleChange} />
              <Input label="Email Address" name="email" value={form.email} onChange={handleChange} />
              <Input label="Address" name="address" value={form.address} onChange={handleChange} />
            </div>
            <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 shadow-md">
              Save Changes
            </button>
          </div>

          <hr />

          {/* PASSWORD CHANGE */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800">Change Password</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-5">
              <Input type="password" label="Current Password" name="password" onChange={handleChange} />
              <Input type="password" label="New Password" name="newPassword" onChange={handleChange} />
              <Input type="password" label="Confirm New Password" name="confirmPassword" onChange={handleChange} />
            </div>
            <button className="mt-4 px-6 py-2 bg-gray-900 text-white rounded-xl hover:bg-black shadow-md">
              Update Password
            </button>
          </div>

          <hr />

          {/* NOTIFICATIONS */}
          <div className="flex items-center justify-between bg-blue-50 p-4 rounded-xl">
            <div>
              <h2 className="text-xl font-semibold text-gray-800">Notifications</h2>
              <p className="text-gray-600 text-sm">Receive updates about reports & appointments</p>
            </div>
            <label className="inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="hidden"
                checked={form.notifications}
                onChange={() => setForm({ ...form, notifications: !form.notifications })}
              />
              <div
                className={`w-14 h-7 flex items-center rounded-full p-1 duration-300 ${
                  form.notifications ? "bg-blue-600" : "bg-gray-300"
                }`}
              >
                <div
                  className={`bg-white w-6 h-6 rounded-full transform duration-300 ${
                    form.notifications ? "translate-x-7" : ""
                  }`}
                ></div>
              </div>
            </label>
          </div>

          <hr />

          {/* DELETE ACCOUNT */}
          <div>
            <h2 className="text-2xl font-bold text-red-600">Danger Zone</h2>
            <p className="text-gray-500 text-sm">Once deleted, you won’t be able to recover this data.</p>
            <button className="mt-4 px-6 py-2 bg-red-600 text-white rounded-xl hover:bg-red-700 shadow-md">
              Delete Account
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

function Input({ label, name, value, onChange, type = "text" }) {
  return (
    <div className="flex flex-col">
      <label className="text-gray-600 text-sm font-medium mb-1">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className="border rounded-xl p-3 shadow-sm focus:ring-2 ring-blue-400 outline-none"
      />
    </div>
  );
}
