import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from './auth/Login';
import { Signup } from './auth/Signup';
import PatientApp from './modules/patient/PatientApp';
import DoctorApp from './modules/doctor/DoctorApp';
function App() {
 
  return (
 <>
   <BrowserRouter>
      <Routes>
         <Route path="/" element={<Login />} />
      
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <Route path="/patient/*" element={<PatientApp/>} />
          
             



        <Route path="/doctor/*" element={< DoctorApp/>} />

        <Route path="/hospital/*" element={<Signup />} />

        <Route path="/explorer/*" element={<Signup />} />

        
      </Routes>
    </BrowserRouter> 
 


 </>
  )
}

export default App
