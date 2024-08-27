'use client'
import { assets, blog_data } from "@/Assets/assets";
import Footer from "@/Components/Footer";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const page = ({params}) => {

    const [data, setData] = useState(null);

    const fetchBlogData = async ()=>{
        const response = await axios.get('/api/blog',{
            params:{
                id:params.id
            }
        });

        setData(response.data);
    }

    useEffect(()=>{
        fetchBlogData();
    },[]) 


  return ( data?<>
    <div className="pt-10 px-5 md:px-12 lg:px-28">
        <div className="flex justify-between items-center shadow-[1px_1px_10px_#AEB6B7] p-4 rounded-md">
          <Link href={"/"}>
            <Image src={assets.logo} width={180} alt='' className="w-[130] sm:w-auto" />
          </Link>
            <button className="flex items-center gap-2 mr-4 font-medium py-1 px-3 sm:py-3 sm:px-6 rounded-md bg-white hover:bg-slate-200">Get Start <Image width={15} src={assets.arrow} alt=''/> </button>
        </div>

        <div className="text-center mt-24 mb-10">
            <h1 className="text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto ">{data.title}</h1>
            <div className="flex justify-center items-center">
                <Image className="  max-auto mt-6 border border-white rounded-full" src={data.author_img} width={60} height={60} alt=""/>
            </div>
            <p className="mt-1 pb-2 text-lg max-w-[740px] mx-auto">{data.author}</p>
        </div>
    </div>


    <div className="mx-5 max-w-[1000px] md:m-auto  bg-whiterelative bg-white p-7">
        <Image className="border-4 border-white " src={data.image} width={1280} height={720} alt=""/>
        
        <div className="blog-content pt-5" dangerouslySetInnerHTML={{__html:data.description}}>

        </div>

        <div className="py-24">
            <p className="text-black font font-semibold my-4">Share this article on social media</p>
            <div className="flex">
                <Image src={assets.facebook_icon} width={50} alt= ""/>
                <Image src={assets.twitter_icon} width={50} alt= ""/>
                <Image src={assets.googleplus_icon} width={50} alt= ""/>
            </div> 
        </div>
    </div>
    <Footer/>
    </>:<></>
 )
};

export default page;
