export default function SideBar() {
    return(
        <section className="max-w-[5%] fixed h-full ">
            <div className="px-4 py-3 flex flex-col justify-between items-center h-full bg-white">
                <div className="w-12 h-12 rounded-full bg-abu-one"></div>

                <div className="flex flex-col gap-12">
                    <div className="flex flex-col items-center">
                        <i className="bx bx-home-alt-2 text-abu-one" />
                        <span className="text-abu-one">Home</span>
                    </div>

                    <button className="bg-blue1 py-3 flex items-center justify-center rounded-xl">
                        <i className="bx bx-plus text-white" />
                    </button>

                    <div className="flex flex-col items-center">
                        <i className="bx bx-categories text-abu-one" />
                        <span className="text-abu-one">Cat.</span>
                    </div>
                </div>

                <button>
                    <i className="bx bx-arrow-out-left-square-half text-2xl" />
                </button>
            </div>
        </section>
    )
}