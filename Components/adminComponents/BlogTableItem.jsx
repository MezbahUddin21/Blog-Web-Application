import { assets } from "@/Assets/assets";
import Image from "next/image";
import React from "react";

const BlogTableItem = ({author_img, title, author,date, deleteBlog, mongoId}) => {
    const BlogDate= new Date(date);
  return (
    <tr className="bg-slate-50 border-b">
        <th scope="row" className="items-center gap-3 flex px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
            <Image className="rounded-full" width={40} height={40} src={author_img? author_img:assets.profile_icon} alt="" />
            <p>{author?author:"No author"}</p>
        </th>

        <td className="px-6 py-4">
            {title?title:"no title"}
        </td>
        
        <td className="px-6 py-4">
            {BlogDate.toDateString()}
        </td>

        <td onClick={()=>deleteBlog(mongoId)} className="px-6 py-4 cursor-pointer text-red-800 flex justify-center text-lg">
            x
        </td>

    </tr>
  )
};

export default BlogTableItem;
