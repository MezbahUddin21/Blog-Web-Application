'use client'
import BlogTableItem from "@/Components/adminComponents/BlogTableItem";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const page = () => {

  const [blogs,setBlogs] = useState([]);

  const fetchBlogs = async () => {
    const response = await axios.get('/api/blog');
    setBlogs(response.data.blogs);
    
  }

  const deleteBlog = async (mongoId)=>{
    const response = await axios.delete('/api/blog', {
      params:{
        id:mongoId
      }
    })
    toast.success(response.data.msg);
    fetchBlogs();
  }

  useEffect(()=>{
    fetchBlogs();
  },[]);

  return (
    <div className="flex-1 pt-5 pr-5 sm:pr-10 sm:pt-12 sm:pl-16 shadow-[1px_1px_10px_#AEB6B7] p-4 rounded-md mt-5 mb-10">
      <h1 className="text font-bold text-slate-700">Blog List</h1>
      <div className="h-[100vh] max-w-[850px] overflow-x-auto mt-4">
        <table className="w-full text-sm text-gray-500 ">
          <thead className="text-sm text-gray-700 text-left uppercase bg-white border-y">
            <tr>
              <th scope="col" className="px-6 py-4 ">
                Author name
              </th>
              <th scope="col" className="px-6 py-4">
                Blog Title
              </th>
              <th scope="col" className="px-6 py-4">
                Date
              </th>
              <th scope="col" className="px-6 py-4">
                Action
              </th>
            </tr>
          </thead>
          
          <tbody>
            {blogs.map((item,index)=>{
              return <BlogTableItem key={index} mongoId={item._id} title={item.title} author={item.author} author_img={item.author_img} date={item.date} deleteBlog={deleteBlog} />
            })}
          </tbody>

        </table>
      </div>
    </div>

  )
};

export default page;
