"use client";
import { useState } from "react";
import Modal from "./Elements/Modal.jsx";
import { usePathname } from "next/navigation";
import CategoryModal from "./Elements/categoryModal.jsx";
import useAuth from "@/hooks/useAuth.jsx";

export default function SideBar() {
  const [isOpen, setIsOpen] = useState(false);
  const { profile } = useAuth();

  const pathname = usePathname();

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };


  return (
    <>
      {isOpen &&
        (pathname === "/category" ? (
          <CategoryModal onClose={() => setIsOpen(false)} />
        ) : (
          <Modal onClose={() => setIsOpen(false)}/>
        ))}
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
