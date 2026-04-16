"use client";

import SideBar from "../sidebar";

export default function CategoriesLayout({ children }) {

    return (
        <>
        <SideBar/>
        <section className="h-screen overflow-hidden">
            <div className="bg-white">
                <div className="pr-16 pl-32 py-6 flex flex-col gap-6">
                    <span className="font-semibold text-sm text-dark-blue">Dooit</span>
                    <div className="w-full h-0.5 bg-abu-one"></div>
                    <div className="flex justify-between items-center">
                        <div>
                            <h1 className="text-dark-blue font-semibold text-3xl">
                                Categories
                            </h1>
                            <p className="text-sm text-abu-one">
                                Manage your categories and plan your tasks efficiently.
                            </p>
                        </div>

                        <div className="flex gap-3">
                            <div className="flex items-center justify-between gap-1.5 px-3 py-2 rounded-xl border border-abu-one">
                                <i className="bx bx-calendar" />
                                <span>Pilihan</span>
                                <i className="bx bx-chevron-down" />
                            </div>
                            <div className="flex items-center justify-between gap-1.5 px-3 py-2 rounded-xl border border-abu-one">
                                <i className="bx bx-filter" />
                                <span>Filter</span>
                                <i className="bx bx-chevron-down" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="h-full pr-16 pl-32 mt-3">
                <h1 className="font-semibold text-dark-blue text-base">Categories</h1>
                {/* <Todo/> */}
                <div className="grid grid-cols-4 grid-rows-5 gap-4 mt-3 overflow-y-scroll overflow-custom ">
                    {children}
                </div>
            </div>
        </section>
        </>
    )
}