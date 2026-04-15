export default function Login(){
    return(
        <section className="flex min-h-screen justify-between">
            <div className="bg-blue1 w-2/5 rounded-r-2xl">
                <div className="px-16 py-10 flex flex-col gap-20 items-center justify-between">
                    <div className="flex justify-center flex-col items-center">
                        <h1 className="font-semibold text-2xl text-white">Log In Account</h1>
                        <p className="text-white text-xs">Welcome back! Please enter your details</p>
                    </div>

                    <div className="flex flex-col w-full justify-between gap-11">
                        <div className="flex flex-col w-full justify-between gap-3.5">
                            {/* Input Email */}
                            <div className="flex flex-col gap-3">
                                <h1 className="text-white font-semibold text-sm">Email</h1>
                                <input placeholder="Enter Email" className="p-2.5 rounded-md bg-white border-0 w-full focus:outline-0" type="text" />
                            </div>
                            {/* Input Password */}
                            <div className="flex flex-col gap-3">
                                <h1 className="text-white font-semibold text-sm">Password</h1>
                                <input placeholder="Enter Password" className="p-2.5 rounded-md bg-white border-0 w-full focus:outline-0" type="text" />
                            </div>
                        </div>

                        <div className="flex flex-col items-center gap-1.5">
                            <button className="bg-black cursor-pointer text-white hover:bg-white hover:text-black transition flex items-center justify-center py-2.5 rounded-md w-full text-sm font-semibold">
                                Log In
                            </button>
                            <span className="text-black text-xs">Don't have an account? <a href="/register" className="text-white hover:underline">Sign up</a></span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="pl-16 flex flex-col items-start justify-center">
                <h1 className="text-9xl font-semibold max-w-171 text-blue1">Welcome Back!</h1>
                <p className="text-abu-one">Let’s get things done, one task at a time!</p>
            </div>
        </section>
    )
}