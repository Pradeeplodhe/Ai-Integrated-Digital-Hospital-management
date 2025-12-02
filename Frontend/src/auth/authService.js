import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api", // backend base URL
});

// LOGIN
export const loginService = async (data) => {
  const res = await API.post("/auth/login", data);
  return res.data;
};

// REGISTER
export const signupService = async (data) => {
  const res = await API.post("/auth/signup", data);
  return res.data;
};