import { assets } from "@/Assets/assets";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { toast } from "react-toastify";

const Header = () => {

  const [email, setEmail] = useState("");

  const onSubmitHandler = async(e)=>{
    e.preventDefault();
    const formData = new FormData();
    formData.append("email",email);
    const response = await axios.post('/api/email', formData);
    if(response.data.success){
      toast.success(response.data.msg);
      setEmail("");
    }else{
      toast.error("Error")
    }
  }

  return (
    <div className="px-5 md:px-12 lg:px-28 py-10">
        <div className="flex justify-between items-center shadow-[1px_1px_10px_#AEB6B7] p-4 rounded-md">
          <Link href={"/"}>
            <Image src={assets.logo} width={180} alt='' className="w-[130] sm:w-auto" />
          </Link>
          <Link href={"/register"}>
              <button className="flex items-center gap-2 mr-4 font-medium py-1 px-3 sm:py-3 sm:px-6 rounded-md bg-white hover:bg-slate-200">Get Start <Image width={15} src={assets.arrow} alt=''/> </button>
          </Link>
        </div>
        <br />
        <br />

        <div className="text-center my-8">
            <h1 className="text-3xl sm:text-5xl font-medium">Latest Blogs</h1>
            <p className="mt-10 max-w-[740px] m-auto test-xs sm:text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, velit?</p>

            <form onSubmit={onSubmitHandler} className="flex justify-between max-w-[500px] scale-75 sm:scale-100 mx-auto mt-10 shadow-[1px_1px_10px_#AEB6B7] rounded-md" action="">
                <input onChange={(e)=>setEmail(e.target.value)} value={email} type="email" placeholder="Enter your email.." className="pl-4 outline-none w-[100%] rounded-md"></input>
                <button className="py-4 px-4 sm:px-8 hover:bg-slate-200 active:text-slate-400" type="submit">Subscribe</button>
            </form>
        </div>
    </div>
  )
};

export default Header;
