import { useState } from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "../redux/slices/authSlice";

const Signup = () => {
  const dispatch = useDispatch();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "patient",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerUser(form)); // Register → Redux
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <form onSubmit={handleSubmit} className="p-6 shadow-md rounded-md w-96">
        <h2 className="text-xl font-bold mb-4">Signup</h2>

        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          className="border w-full p-2 mb-3"
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          className="border w-full p-2 mb-3"
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          className="border w-full p-2 mb-3"
          onChange={handleChange}
          required
        />

        {/* ROLE SE DECIDE HOGA PATIENT/DOCTOR/HOSPITAL */}
        <select
          name="role"
          className="border w-full p-2 mb-3"
          onChange={handleChange}
        >
          <option value="patient">Patient</option>
          <option value="doctor">Doctor</option>
          <option value="hospital">Hospital Admin</option>
          <option value="explorer">Free Explorer</option>
        </select>

        <button
          type="submit"
          className="bg-green-600 text-white w-full py-2 rounded"
        >
          Signup
        </button>
      </form>
    </div>
  );
};

export default Signup;