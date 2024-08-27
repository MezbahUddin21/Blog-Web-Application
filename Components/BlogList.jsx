
import { assets, blog_data } from "@/Assets/assets";
import React, { useEffect } from "react";
import BlogItem from "./BlogItem";
import { useState } from "react";
import axios from "axios";

const BlogList = () => {

  const [menu,setMenu] = useState("All");
  const [blogs, setBlogs] = useState([]);

  
  const fetchBlogs = async ()=>{
    const response = await axios.get('/api/blog');
    setBlogs(response.data.blogs);
    console.log(response.data.blogs);
  }

  useEffect(()=>{
    fetchBlogs();
  },[]);

  return (
    <div>
        <div className="my-10 mx-10 md:flex md:justify-center lg:flex md:justify-center">
            <button onClick={()=>setMenu("All")} className={menu==="All"? "bg-black text-white py-1 px-4 rounded-sm mx-4 mt-4":"mx-4 mt-4"}>All</button>
            <button onClick={()=>setMenu("Technology")} className={menu==="Technology"? "bg-black text-white py-1 px-4 rounded-sm mx-4 mt-4":"mx-4 mt-4"}>Technology</button>
            <button onClick={()=>setMenu("Startup")} className={menu==="Startup"? "bg-black text-white py-1 px-4 rounded-sm mx-4 mt-4":"mx-4 mt-4"}>Startup</button>
            <button onClick={()=>setMenu("Lifestyle")} className={menu==="Lifestyle"? "bg-black text-white py-1 px-4 rounded-sm mx-4 mt-4":"mx-4 mt-4"}>Lifestyle</button>
            <button onClick={()=>setMenu("Politics")} className={menu==="Politics"? "bg-black text-white py-1 px-4 rounded-sm mx-4 mt-4":"mx-4 mt-4"}>Politics</button>

        </div>
        <div className="flex flex-wrap justify-around gap-1 gap-y-10 mb-16 xl:mx-24">
          {blogs.filter((item)=> menu==="All"?true:item.category===menu).map((item,index)=>(<BlogItem key={index} id={item._id} image={item.image} title={item.title} description={item.description} category={item.category}/>))}

        </div>
    </div>
  )
};

export default BlogList;
