"use client";

import Register from "@/components/register";
import authService from "@/services/auth.service.js";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();

  const handleRegister = async (payload) => {
    try {
      await authService.register(payload);

      alert("Register berhasil!");

      // redirect ke login
      router.push("/login");
    } catch (error) {
      console.error(error);
      alert("Register gagal!");
    }
  };

  return <Register onRegister={handleRegister} />;
}