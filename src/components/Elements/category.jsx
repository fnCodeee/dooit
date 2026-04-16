'use client';
import { useState } from "react";
import EditCategories from "./editCategories";

export default function Category() {
    const [isOpen, setIsOpen] = useState(false);
    
    return (
        <button>
            {isOpen && <EditCategories onClose={() => setIsOpen(false)} />}
            <div className="flex items-center justify-between gap-8 p-6 bg-s2-blue rounded-2xl">
                <div className="flex gap-2.5 items-center h-full">
                    <div className="flex px-3.5 bg-blue1 py-3 rounded-2xl h-full items-center justify-center">
                        <i className="bx bx-movie-play text-2xl text-white" />
                    </div>
                    <h1 className="text-lg text-start font-semibold max-w-25.5">Name Category</h1>
                </div>
                <button  className="cursor-pointer z-10" onClick={() => setIsOpen(true)}>
                    <i className="bx bx-edit text-3xl text-abu-one" />
                </button>
            </div>
        </button>
    )
}