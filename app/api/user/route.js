import { ConnectDB } from "@/lib/config/db";
import User from "@/lib/models/UserModel";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";


const LoadDB = async ()=>{
    await ConnectDB();
}

LoadDB();



export async function POST(request) {
    const formData = await request.formData();

    const hasedPassword = await bcrypt.hash(formData.get('password'),10);

    const userData = {
        name: `${formData.get('name')}`,
        email: `${formData.get('email')}`,
        password: `${hasedPassword}`
    }

    await User.create(userData);


    return NextResponse.json({success:true, msg:"user added"});

};




export async function GET(request){


    const users=await User.find({});
    return NextResponse.json({users});


};