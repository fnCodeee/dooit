import Todo from "./todo";
export default function Dashboard() {
    return(
        <section className="">
            <div className="bg-white">
                <div className="pr-16 pl-32 py-6 flex flex-col gap-6">
                    <span className="font-semibold text-sm text-dark-blue">Name App</span>
                    <div className="w-full h-0.5 bg-abu-one"></div>
                    <div className="flex justify-between items-center">
                        <div>
                            <h1 className="text-dark-blue font-semibold text-3xl">Active Task</h1>
                            <p className="text-sm text-abu-one">Heyy user, what do you want to do today?</p>
                        </div>
                        
                        <div className="flex gap-3">
                            <div className="flex items-center justify-between gap-1.5 px-3 py-2 rounded-xl border border-abu-one">
                                <i class="bx bx-calendar" />
                                <span>Pilihan</span>
                                <i class="bx bx-chevron-down" />
                            </div>
                            <div className="flex items-center justify-between gap-1.5 px-3 py-2 rounded-xl border border-abu-one">
                                <i class="bx bx-filter" />
                                <span>Filter</span>
                                <i class="bx bx-chevron-down" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="pr-16 pl-32 mt-3">
                <h1 className="font-semibold text-dark-blue text-base">Task</h1>
                <Todo/>
            </div>
        </section>
    )
}