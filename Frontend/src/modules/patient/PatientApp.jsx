import React from "react"
import Appointment from "./pages/Appointments"
import Billing from "./pages/Billing"
import Dashboard from "./pages/Dashboard"
import LabReport from "./pages/LabReports"
import MedicalReport from "./pages/MedicalRecords"
import PatientProfile from "./pages/Profile"
import Settings from "./pages/Settings"
import { Routes, Route } from "react-router-dom";
import PatientNavbar from "./components/PatientNavbar"
export default function PatientApp() {
  return (
    <>
     
  <PatientNavbar/>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/appointments" element={<Appointment />} />
        <Route path="/billing" element={<Billing />} />
        <Route path="/labreports" element={<LabReport />} />
        <Route path="/medicalrecords" element={<MedicalReport />} />
        <Route path="/profile" element={<PatientProfile />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </>
  );
}
