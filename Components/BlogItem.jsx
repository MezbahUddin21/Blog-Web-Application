import { assets } from "@/Assets/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";


const BlogItem = ({image, title, description, category, id}) => {
  return (

    <div className="max-w-[330px] sm:max-w-[300px] bg-white  shadow-[1px_1px_5px_#889193] hover:shadow-[1px_1px_10px_#889193] rounded-sm  p-1">
        <Link href={`/blogs/${id}`}>
            <Image src={image} alt='' width={400} height={400} className="rounded-sm" />
        </Link>
        <p className="ml-5 mt-5 px-1 inline-block bg-black text-white text-sm">{category}</p>
        <div className="p-5">
            <h5 className="mb-2 text-lg font-medium tracking-tight text-gray-900">
                {title}
            </h5>
            <p className="mb-3 text-sm tracking-tight text-gray-700 inline" 
            dangerouslySetInnerHTML={{__html:description.slice(0,100)}}>
                </p>
            <span  className={(description.length>100)?"text-gray-500":"text-gray-50"}>...</span>

            <Link href={`/blogs/${id}`} className="flex items-center py-2 font-semibold text-center">Read More <Image width={12} className="mx-2" src={assets.arrow} alt=''/></Link>
        </div>
    </div>
 )
};

export default BlogItem;


