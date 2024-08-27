import { assets } from "@/Assets/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Sidebar = () => {
  return (
    <div className="flex flex-col bg-slate-100 p-4 ">
        <div className="flex justify-between items-center shadow-[1px_1px_10px_#AEB6B7] p-4 rounded-md">
          <Link href={"/"}>
            <Image src={assets.logo} width={180} alt='' className="w-[130] sm:w-auto" />
          </Link>
        </div>

      <div className="sm:w-80 sm:h-[150vh] h-[40vh] flex justify-center py-12  shadow-[1px_1px_10px_#AEB6B7] p-4 rounded-md mt-4">
        <div className="w-[50%] sm:w-[80%]  right-0 ">
          <Link
            href="/admin/addProduct"
            className="flex items-center pl-2 gap-3 font-medium px3 py-2 bg-white shadow-[1px_1px_5px_#AEB6B7] rounded-md hover:scale-110"
          >
            <Image src={assets.add_icon} alt="" width={28}/>
            <p>Add Blogs</p>
          </Link>
          <Link
            href="/admin/blogList"
            className=" mt-5 flex items-center pl-2 gap-3 font-medium px3 py-2 bg-white shadow-[1px_1px_5px_#AEB6B7] rounded-md hover:scale-110"
          >
            <Image src={assets.blog_icon} alt="" width={28} />
            <p>Blog Lists</p>
          </Link>
          <Link
            href="/admin/subscriptions"
            className="mt-5 flex items-center pl-2 gap-3 font-medium px3 py-2 bg-white shadow-[1px_1px_5px_#AEB6B7] rounded-md hover:scale-110"
          >
            <Image src={assets.email_icon} alt="" width={28} />
            <p>Subscriptions</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
