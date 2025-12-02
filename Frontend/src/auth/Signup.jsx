import React, { useState } from "react";
import { Link } from "react-router-dom";

export function Signup() {

  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();  // stop page refresh

    console.log({
      name,
      mail,
      password,
      role,
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-center mb-6 text-green-600">Signup</h2>

        <form className="space-y-4" onSubmit={handleSubmit}>

          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            value={mail}
            onChange={(e) => setMail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Create Password"
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <label className="font-semibold text-gray-700">Select Role:</label>
          <select
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option>Select</option>
            <option>Patient</option>
            <option>Doctor</option>
            <option>Hospital Admin</option>
            <option>Free Explorer</option>
          </select>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700"
          >
            Create Account
          </button>

        </form>

        <p className="text-center mt-4 text-sm">
          Already have an account?
          <Link to="/login" className="text-green-600 font-semibold ml-1">Login</Link>
        </p>
      </div>
    </div>
  );
}
