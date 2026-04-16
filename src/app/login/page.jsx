import Login from "@/components/login.jsx";
import authService from "@/services/auth.service.js";
import { useRouter } from "next/router.js";

const page = () => {
  const router = useRouter()
  const handleLogin = async (payload) => {
    try {
      const res = await authService.login(payload);
      localStorage.setItem("token", res.data.data.token);
      router.push('/')
    } catch (error) {
      console.error(error);
      alert("Login gagal!")
    }
  }
  return <Login onLogin={handleLogin}/>;
};

export default page;
