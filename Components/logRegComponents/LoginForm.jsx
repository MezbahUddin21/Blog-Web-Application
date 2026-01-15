'use client';
import Link from "next/link";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const LoginForm = () => {

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const router= useRouter();

  const onSubmitHandler = async (e)=>{
    e.preventDefault();

    try {
      const res = await signIn("credentials",{
        email, password, redirect:false,
      });

      if(res.error){
        toast.error("Invalid Credential");
        return;
      };


      router.replace("admin");


    } catch (error) {
      toast.error("No User Found");

    }

    // console.log(e.target.value);
  }


  return (
    <div className="grid place-items-center my-24">
        <div className="shadow-lg p-5 rounded-lg border-t-4 border-slate-900 sm:w-[40%] w-[80%]">
            <h1 className="text-xl font-bold my-4">Login</h1>

            <form className="flex flex-col gap-3" onSubmit={onSubmitHandler}>

                <input className="pl-4 outline-none w-[100%] rounded-md mt-5 p-5" onChange={e=> setEmail(e.target.value)} type="text"  placeholder="Email"/>

                <input className="pl-4 outline-none w-[100%] rounded-md mt-5 p-5" onChange={e=> setPassword(e.target.value)}  type="password"  placeholder="Password"/>

                <button className="mt-8 flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 text-white rounded-md bg-slate-900 hover:bg-slate-700 justify-center">Login</button>
{/*     
                <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded">
                    Error message
                </div> */}

                <Link className="text-sm mt-3 text-right" href={"/register"}>
                Don't have an account? <span className="underlined">Register</span>
                
                </Link>


            </form>
        </div>
    </div>
  )
};

export default LoginForm;
