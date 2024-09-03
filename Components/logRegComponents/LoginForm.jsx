import Link from "next/link";
import React from "react";

const LoginForm = () => {
  return (
    <div className="grid place-items-center">
        <div className="shadow-lg p-5 rounded-lg border-t-4 border-green-400
    ">
            <h1 className="text-xl font-bold my-4">Login</h1>

            <form className="flex flex-col gap-3">

                <input className="pl-4 outline-none w-[100%] rounded-md mt-5 p-5" type="text"  placeholder="Email"/>

                <input className="pl-4 outline-none w-[100%] rounded-md mt-5 p-5" type="password"  placeholder="Password"/>

                <button className="bg-green-400 text-white font-bold cursor-pointer px-6 py-2">Login</button>

                <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded">
                    Error message
                </div>

                <Link className="text-sm mt-3 text-right" href={"/register"}>
                Don't have an account? <span className="underlined">Register</span>
                
                </Link>


            </form>
        </div>
    </div>
  )
};

export default LoginForm;
