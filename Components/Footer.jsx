import { assets } from "@/Assets/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className=" my-10">
      <div className="flex justify-around flex-col gap-2 sm:gap-0 sm:flex-row bg-black py-4 rounded-md shadow-[1px_1px_10px_#FFFFFF] items-center px-10 mx-[8%] ">
          <Link href={"/"}>
            <Image src={assets.logo_light} alt="" width={150} />
          </Link>
          <p className="text-sm text-white">All right reserved. Copyright @Mezbah Uddin Maruf</p>
          <div className="flex">
              <Image src={assets.facebook_icon} alt="" width={40}/>
              <Image src={assets.twitter_icon} alt="" width={40}/>
              <Image src={assets.googleplus_icon} alt="" width={40}/>
          </div>
      </div>
    </div>
      
  )
};

export default Footer;
