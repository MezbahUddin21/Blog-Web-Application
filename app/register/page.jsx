import RegisterForm from "@/Components/logRegComponents/RegisterForm";
import React from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const page = () => {
  return (
    <div>
        <ToastContainer theme="dark"/>
        <RegisterForm/>
    </div>
  )
};

export default page;
