import mongoose from "mongoose";

export const ConnectDB = async()=>{
    await mongoose.connect('mongodb+srv://mezbahsc:mezbahsc@cluster0.erre5hi.mongodb.net/?appName=Cluster0/blog-app');
    console.log("DB Connected");

}
