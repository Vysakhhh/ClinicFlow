import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import loginImg from "../assets/loginImg.png";
import toast from "react-hot-toast";

function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const success = login(formData.email, formData.password);
    if (success) {
      toast.success("Login successful!");
      navigate("/calendar");
    } else {
      toast.error("Invalid credentials");
    }
  };

  return (
    <>
    <div className="min-h-screen flex items-center justify-center px-4">

      <div className="flex flex-col lg:flex-row items-center bg-amber-50 border-t-3 border-b-3 border-emerald-600 rounded-xl shadow-xl h-auto 
      lg:h-[640px] p-6">
        
        <form onSubmit={handleSubmit} className="w-full max-w-sm p-4 lg:p-8 space-y-4 shadow-md rounded-xl md:mt-5" >
          <h2 className="font-bold text-2xl text-center text-emerald-600">
            ClinicFlow
          </h2>

          <input type="email"  name="email" placeholder="Email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" value={formData.email} onChange={handleChange} />

          <input type="password" name="password" placeholder="Password" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" value={formData.password} onChange={handleChange} />

          <button type="submit" className="w-full bg-emerald-600 text-white p-2 rounded hover:bg-emerald-400 cursor-pointer">
            Login
          </button>
        </form>

        <div className="mt-6 lg:mt-0 lg:ml-8">
          <img src={loginImg} alt="Login" className="max-w-full h-auto" />
        </div>
      </div>
    </div>

     <footer className="my-5  text-center font-medium">
        <span className="text-black " style={{fontSize:"14px"}}>&copy; 2025 ClinicFlow. All rights reserved.</span>
      </footer>

    </>
  );
}

export default Login;
