'use client';
import { assets } from "@/Assets/assets";
import Sidebar from "@/Components/adminComponents/Sidebar";
import Image from "next/image";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthProvider } from "../Providers";
import { signOut } from "next-auth/react";

export default function Layout({ children }) {


  return (
    <AuthProvider>
      <div className="sm:block md:flex lg:flex">
        <ToastContainer theme="dark"/>
        <Sidebar />
        <div className="flex flex-col w-full px-4">
          <div className="flex items-center justify-between w-full py-11 max-h-[60px] px-12 mt-4 shadow-[1px_1px_10px_#AEB6B7] p-4 rounded-md">
            <h3 className="text-xl">Admin Panel</h3>
            <Image className="rounded-full" src={assets.profile_icon} width={45} alt="" />
            <span className="underline">
                <button onClick={ ()=> signOut() }>Log Out</button>
            </span>
          </div>
          {children}
        </div>
      </div>
    </AuthProvider>
  );
}
