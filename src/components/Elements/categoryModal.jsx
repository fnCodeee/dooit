import { useEffect, useState } from "react";
import { Icons } from "../../../public/icons/Icons";

export default function CategoryModal({ onClose }) {
    const [show, setShow] = useState(false);

    useEffect(() => {
        setShow(true);
    }, []);
    return (
        <section className=" h-screen py-4 absolute top-0 left-0 z-20 pl-6 w-full flex bg-black/50">
            <form
                className={`w-104 px-6 rounded-2xl bg-white flex flex-col justify-between h-fit gap-14 py-6 transform transition-all duration-300 ${show ? "translate-x-0" : "-translate-x-full"}`}
            >
                {/* Modal Header */}
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3 ">
                        <i className="bx bx-calendar text-blue1 text-3xl" />
                        <h1 className="font-semibold text-3xl">Create Categories</h1>
                    </div>
                    <button className="cursor-pointer" type="button" onClick={onClose}>
                        <i className="bx bx-x text-2xl text-abu-one" />
                    </button>
                </div>

                {/* Modal Body */}
                <div className="flex flex-col gap-6">
                    {/*  */}
                    <div className="flex flex-col gap-2">
                        <h1 className="font-semibold text-xl">
                            Categories Name <span className="text-red-500">*</span>
                        </h1>
                        <input
                            className="focus:outline-blue1 py-2 w-full bg-s2-blue rounded-xl px-2.5"
                            type="text"
                            placeholder="Enter Task Name"
                        />
                    </div>

                    {/*  */}
                    <div className="flex flex-col gap-2">
                        <h1 className="font-semibold text-xl">Chose Icons</h1>
                        <div className="flex justify-between gap-2.5">
                            {Icons.map((icon) => (
                                <button key={icon} className="text-white flex items-center flex-col text-lg bg-blue1 rounded-xl w-full py-3">
                                    <i className={`bx bx-${icon}`} />
                                </button>
                            ))}
                        </div>
                    </div>


                </div>

                {/*  */}
                <div className="flex gap-3">
                    <button onClick={onClose} className="text-lg cursor-pointer hover:bg-abu-one border border-abu-one px-6 py-3 rounded-xl">
                        Cancel
                    </button>
                    <button className="text-lg text-white bg-blue1 py-3 w-full rounded-xl">
                        Save
                    </button>
                </div>
            </form>
        </section>
    )
}