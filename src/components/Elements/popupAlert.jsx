'use client';
import { useEffect, useState } from "react";

export default function PopupAlert() {
    const [show, setShow] = useState(false);

    useEffect(() => {
        setShow(true);

        const timer = setTimeout(() => {
            setShow(false); 

            setTimeout(() => {
                setVisible(false); 
            }, 500);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <section className="w-fit right-0 absolute mr-3 mt-3 z-30">
            <div className={`flex items-center gap-28 px-6 bg-[#E6F7F1] rounded-xl py-2.5 shadow-lg
                transform transition-all duration-500 ease-in-out
                ${show ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}`}>
                <div className="flex items-center">
                    <i className="bx bx-checks text-4xl text-[#0AAA6C]" />
                    <h1 className="text-xl font-semibold">Log In Successful</h1>
                </div>
                <button className="cursor-pointer" type="button">
                    <i className="bx bx-x text-2xl text-abu-one" />
                </button>
            </div>
        </section>
    )
}