import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Dashboard from "../components/dashboard";
import SideBar from "../components/sidebar";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      router.push("/login");
    } 
  }, [router]);

  return (
    <section className="h-full">
      <SideBar />
      <Dashboard />
    </section>
  );
}