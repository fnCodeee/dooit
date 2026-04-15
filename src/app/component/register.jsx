export default function Register(){
    return(
        <section className="flex min-h-screen justify-between">
            <div className="pl-16 flex flex-col items-start justify-center">
                <h1 className="text-9xl font-semibold max-w-171 text-blue1">Get Started.</h1>
                <p className="text-abu-one">Join and start organizing your tasks today!</p>
            </div>

            <div className="bg-blue1 w-2/5 rounded-l-2xl">
                <div className="px-16 py-10 flex flex-col gap-20 items-center justify-between">
                    <div className="flex justify-center flex-col items-center">
                        <h1 className="font-semibold text-2xl text-white">Sign up Account</h1>
                        <p className="text-white text-xs">Enter personal data to create account</p>
                    </div>

                    <div className="flex flex-col w-full justify-between gap-11">
                        <div className="flex flex-col w-full justify-between gap-3.5">
                            {/* Input Name */}
                            <div className="flex flex-col gap-3">
                                <h1 className="text-white font-semibold text-sm">Full name</h1>
                                <input placeholder="Enter Full Name" className="p-2.5 rounded-md bg-white border-0 w-full focus:outline-0" type="text" />
                            </div>
                            {/* Input Email */}
                            <div className="flex flex-col gap-3">
                                <h1 className="text-white font-semibold text-sm">Email</h1>
                                <input placeholder="Enter Email" className="p-2.5 rounded-md bg-white border-0 w-full focus:outline-0" type="text" />
                            </div>
                            {/* Input Password */}
                            <div className="flex flex-col gap-3">
                                <h1 className="text-white font-semibold text-sm">Password</h1>
                                <input placeholder="Enter Password" className="p-2.5 rounded-md bg-white border-0 w-full focus:outline-0" type="text" />
                                <p className="text-xs text-gray-500">Must be at least 8 characters.</p>
                            </div>
                        </div>

                        <div className="flex flex-col items-center gap-1.5">
                            <button className="bg-black cursor-pointer text-white hover:bg-white hover:text-black transition flex items-center justify-center py-2.5 rounded-md w-full text-sm font-semibold">
                                Sign Up
                            </button>
                            <span className="text-black text-xs">Already have an account? <a href="/login" className="text-white hover:underline">Log in</a></span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}