import authService from "@/services/auth.service.js";
import { useEffect, useState } from "react";

const useAuth = () => {
  const [profile, setProfile] = useState([]);

  const fetchMe = async () => {
    try {
      const data = await authService.me();
      setProfile(data.data);
      console.log("fetch", data);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    fetchMe();
  }, []);
  return { profile }
};

export default useAuth;
