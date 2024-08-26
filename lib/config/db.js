import mongoose from "mongoose";

export const ConnectDB = async()=>{
    await mongoose.connect('mongodb+srv://mezbahsc:mezbahsc@cluster0.krsjb.mongodb.net/blog-app');
    console.log("DB Connected");

}