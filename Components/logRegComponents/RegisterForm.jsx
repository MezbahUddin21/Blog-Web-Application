'use client'
import React, { useState } from "react";
import Link from "next/link";
import axios from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const RegisterForm = () => {

    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    const [data, setData] = useState({
        name: "",
        email: "",
        password: "",
      });

    const router=useRouter();

    
    const onChangeHandler = (event) => {
        const ename = event.target.name;
        const value = event.target.value;
        setData((data) => ({ ...data, [ename]: value }));
        console.log(data);
        setEmail(data.email);
        setPassword(data.password);
      };   


      const onSubmitHandler = async (e) => {
        e.preventDefault();


        if(!data.name || !data.email || !data.password){
          toast.error("All fields are required!");
          return;
        }
        if(password.length<8){
          toast.error("Password must contain 8 carecters!");
          return;
        }

        const resUserExists = await fetch("api/userExists", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email }),
        });
  
        const { user } = await resUserExists.json();
  
        if (user) {
          toast.error("User already exists.");
          return;
        }

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

          toast.success("Registered Successfully!")
        } else {
          toast.error("Error");
        }

        setTimeout(router.push("/login"), 10000);


      };

  return (
    <div className="grid place-items-center my-24">
            <div className="shadow-lg p-5 rounded-lg border-t-4 border-slate-900 sm:w-[40%] w-[80%]
        ">
                <h1 className="text-xl font-bold my-4">Enter the details</h1>

                <form className="flex flex-col gap-3" onSubmit={onSubmitHandler}>

                    <input name="name" onChange={onChangeHandler} value={data.name} className="pl-4 outline-none w-[100%] rounded-md mt-5 p-3" type="text"  placeholder="Full Name"/>

                    
                    <input name="email" onChange={onChangeHandler}  value={data.email} className="pl-4 outline-none w-[100%] rounded-md mt-5 p-3" type="email"  placeholder="Email"/>

                    <input name="password" onChange={onChangeHandler} value={data.password} className="pl-4 outline-none w-[100%] rounded-md mt-5 p-3" type="password"  placeholder="Password"/>

                    <button type="submit"  className="mt-8 flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 text-white rounded-md bg-slate-900 hover:bg-slate-700 justify-center">Register</button>
{/* 
                    {error && 
                        <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded">
                            {error}
                    </div>} */}

                    <Link className="text-sm mt-3 text-right underline" href={"/login"}>
                    Already have an account? <span className="underlined">Login</span>
                    
                    </Link>


                </form>
            </div>
        </div>
  )
};

export default RegisterForm;
