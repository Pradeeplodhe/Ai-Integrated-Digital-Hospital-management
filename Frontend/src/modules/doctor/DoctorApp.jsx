
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import Appointment from "./pages/Appointments";
import Dashboard from "./pages/Dashboard";
import PatientList from "./pages/PatientList";
import Profile from "./pages/Profile";
import DoctorNavbar from "./components/DoctorNavbar";
export default function DoctorApp() {
  return (
    <> 
    
      {<DoctorNavbar/>}
      

      <div className="pt-16"> {/* Add top padding to prevent overlap with navbar */}
        <Routes>
          <Route path="/" element={<Dashboard/>} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/patientList" element={<PatientList />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
   
    </>
  );
}
