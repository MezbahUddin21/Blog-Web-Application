import { NextResponse } from "next/server";
import { ConnectDB } from '@/lib/config/db';
import BlogModel from '@/lib/models/BlogModel';
import {writeFile} from 'fs/promises';
const fs = require('fs')

const LoadDB = async ()=>{
    await ConnectDB();
}

LoadDB();

//API endpoint to get all blogs

export async function GET(request){

    const blogId =request.nextUrl.searchParams.get("id");
    if(blogId){
        const blog = await BlogModel.findById(blogId);
        return NextResponse.json(blog);
    }else{
        const blogs=await BlogModel.find({});
        return NextResponse.json({blogs});
    }


}

//API endpoint for uploading blog

export async function POST(request) {
    const formData = await request.formData();
    const timestamp= Date.now();

    const image=formData.get('image');
    const imageByteData = await image.arrayBuffer();
    const buffer = Buffer.from(imageByteData);
    const path = `./public/${timestamp}_${image.name}`;
    await writeFile(path, buffer);
    const imgUrl = `/${timestamp}_${image.name}`;

    const author_img=formData.get('author_img');
    const author_imgByteData = await author_img.arrayBuffer();
    const authBuffer = Buffer.from(author_imgByteData);
    const authPath = `./public/${timestamp}_${author_img.name}`;
    await writeFile(authPath, authBuffer);
    const authImgUrl = `/${timestamp}_${author_img.name}`;

    const blogData = {
        title: `${formData.get('title')}`,
        description: `${formData.get('description')}`,
        category: `${formData.get('category')}`,
        author: `${formData.get('author')}`,
        image: `${imgUrl}`,
        author_img: `${authImgUrl}`
    }

    await BlogModel.create(blogData);
    console.log("Blog Saved");


    return NextResponse.json({success:true, msg:"Blog Added"});

}


    //Creating API endpoint to delete blog

    export async function DELETE(request) {
        const id = await request.nextUrl.searchParams.get('id');
        const blog = await BlogModel.findById(id);
        fs.unlink(`./public${blog.image}`,()=>{});
        fs.unlink(`./public${blog.author_img}`,()=>{});
        await BlogModel.findByIdAndDelete(id);
        return NextResponse.json({msg:"Blog Deleted"});
    }