'use client'
import React, { useState } from "react";
import Link from "next/link";
import axios from "axios";
import { toast } from "react-toastify";

const RegisterForm = () => {


    const [data, setData] = useState({
        name: "",
        email: "",
        password: "",
      });

    
    const onChangeHandler = (event) => {
        const ename = event.target.name;
        const value = event.target.value;
        setData((data) => ({ ...data, [ename]: value }));
    
        console.log(data);
      };   


      const onSubmitHandler = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("name", data.name);
        formData.append("email", data.email);
        formData.append("password", data.password);
    
        const response = await axios.post("/api/user", formData);
    
        if (response.data.success) {
          setData({
            name: "",
            email: "",
            password: "",
          });
        } else {
          toast.error("Error");
        }
      };

  return (
    <div className="grid place-items-center">
            <div className="shadow-lg p-5 rounded-lg border-t-4 border-green-400
        ">
                <h1 className="text-xl font-bold my-4">Enter the details</h1>

                <form className="flex flex-col gap-3" onSubmit={onSubmitHandler}>

                    <input name="name" onChange={onChangeHandler} value={data.name} className="pl-4 outline-none w-[100%] rounded-md mt-5 p-5" type="text"  placeholder="Full Name"/>

                    
                    <input name="email" onChange={onChangeHandler}  value={data.email} className="pl-4 outline-none w-[100%] rounded-md mt-5 p-5" type="email"  placeholder="Email"/>

                    <input name="password" onChange={onChangeHandler} value={data.password} className="pl-4 outline-none w-[100%] rounded-md mt-5 p-5" type="password"  placeholder="Password"/>

                    <button type="submit"  className="bg-green-400 text-white font-bold cursor-pointer px-6 py-2">Register</button>

{/* 
                        <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded">
                            
                        </div> */}

                    <Link className="text-sm mt-3 text-right" href={"/login"}>
                    Already have an account? <span className="underlined">Login</span>
                    
                    </Link>


                </form>
            </div>
        </div>
  )
};

export default RegisterForm;
