"use client";

import Register from "@/components/register";
import authService from "@/services/auth.service.js";

export default function Page() {

  const handleRegister = async (payload) => {
    try {
      await authService.register(payload);

      alert("Register berhasil!");

      // redirect ke login
      window.location.href = "/login";
    } catch (error) {
      console.error(error);
      alert(error.response?.data.message);
    }
  };

  return <Register onRegister={handleRegister} />;
}