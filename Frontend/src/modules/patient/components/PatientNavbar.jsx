import React from "react";
import { NavLink } from "react-router-dom";

export default function PatientNavbar() {
  return (
    <nav className="w-full bg-white shadow-md px-8 py-4 flex items-center justify-between">
      <h2 className="text-2xl font-bold text-blue-600">Patient Panel</h2>

      <ul className="flex gap-6 text-lg font-medium">
        <NavLink
          to="/patient"
          className={({ isActive }) =>
            `hover:text-blue-600 ${isActive ? "text-blue-600 font-bold" : "text-gray-700"}`
          }
        >
          Dashboard
        </NavLink>

        <NavLink
          to="/patient/appointments"
          className={({ isActive }) =>
            `hover:text-blue-600 ${isActive ? "text-blue-600 font-bold" : "text-gray-700"}`
          }
        >
          Appointments
        </NavLink>

        <NavLink
          to="/patient/billing"
          className={({ isActive }) =>
            `hover:text-blue-600 ${isActive ? "text-blue-600 font-bold" : "text-gray-700"}`
          }
        >
          Billing
        </NavLink>

        <NavLink
          to="/patient/labreports"
          className={({ isActive }) =>
            `hover:text-blue-600 ${isActive ? "text-blue-600 font-bold" : "text-gray-700"}`
          }
        >
          Lab Reports
        </NavLink>

        <NavLink
          to="/patient/medicalrecords"
          className={({ isActive }) =>
            `hover:text-blue-600 ${isActive ? "text-blue-600 font-bold" : "text-gray-700"}`
          }
        >
          Medical Records
        </NavLink>

        <NavLink
          to="/patient/profile"
          className={({ isActive }) =>
            `hover:text-blue-600 ${isActive ? "text-blue-600 font-bold" : "text-gray-700"}`
          }
        >
          Profile
        </NavLink>

        <NavLink
          to="/patient/settings"
          className={({ isActive }) =>
            `hover:text-blue-600 ${isActive ? "text-blue-600 font-bold" : "text-gray-700"}`
          }
        >
          Settings
        </NavLink>
      </ul>
    </nav>
  );
}
