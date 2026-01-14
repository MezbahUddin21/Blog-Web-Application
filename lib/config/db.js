import mongoose from "mongoose";

export const ConnectDB = async()=>{
    await mongoose.connect(process.env.DATABASE);
    console.log("DB Connected");

}
