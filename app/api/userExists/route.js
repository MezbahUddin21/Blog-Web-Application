import { ConnectDB } from "@/lib/config/db";
import { NextResponse } from "next/server";
import UserModel from "@/lib/models/UserModel";

export async function POST(req) {
    try {
      await ConnectDB();
      const { email } = await req.json();
      const user = await UserModel.findOne({ email }).select('_id');
      console.log("user: ", user);
      return NextResponse.json({ user });
    } catch (error) {
      console.log(error);
    }
  }