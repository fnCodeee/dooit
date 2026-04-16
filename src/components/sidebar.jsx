"use client";
import { useEffect, useState } from "react";
import Modal from "./Elements/Modal.jsx";
import authService from "@/services/auth.service.js";
import { usePathname } from "next/navigation";
import CategoryModal from "./Elements/categoryModal.jsx";

export default function SideBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [profile, setProfile] = useState([])
  const pathname = usePathname();
  const handleLogout = () => {
    localStorage.removeItem("token")
  }
  const fetchMe = async () => {
    try {
      const data = await authService.me();
      setProfile(data.data)
      console.log("fetch", data)
    } catch (error) {
      console.error(error.message)
    }
  }

  useEffect(() => {
    fetchMe()
  }, [])

  console.log(profile)
  return (
    <>
      {isOpen && (
        pathname === "/test" ? (
          <CategoryModal onClose={() => setIsOpen(false)} />
        ) : (
          <Modal onClose={() => setIsOpen(false)} />
        )
      )}
      <section className="max-w-[5%] fixed h-full z-10">
        <div className="px-4 py-3 flex flex-col justify-between items-center h-full bg-white">
          <div>
            <div className="w-12 h-12 rounded-full bg-abu-one"></div>
            <p className="text-xs text-center mt-4">{profile.name}</p>
          </div>
          <div className="flex flex-col gap-12">
            <div className="flex flex-col items-center">
              <i className="bx bx-home-alt-2 text-abu-one" />
              <span className="text-abu-one">Home</span>
            </div>

            <button
              onClick={() => setIsOpen(true)}
              className="bg-blue1 py-3 hover:bg-black transition-all cursor-pointer flex items-center justify-center rounded-xl"
            >
              <i className="bx bx-plus text-white" />
            </button>

            <div className="flex flex-col items-center">
              <i className="bx bx-categories text-abu-one" />
              <span className="text-abu-one">Cat.</span>
            </div>
          </div>

          <button onClick={() => handleLogout()}>
            <i className="bx text-red-600 transition-all hover:text-abu-one bx-arrow-out-left-square-half text-2xl" />
          </button>
        </div>
      </section>
    </>
  );
}
