"use client";
import { assets } from "@/Assets/assets";
import axios from "axios";
import Image from "next/image";
import React, { useState } from "react";
import { toast } from "react-toastify";

const page = () => {
  const [image, setImage] = useState(false);
  const [author_img, setAuthor_img] = useState(false);
  const [data, setData] = useState({
    title: "",
    description: "",
    category: "Startup",
    author: "",
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));

    console.log(data);
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("category", data.category);
    formData.append("author", data.author);
    formData.append("author_img", author_img);
    formData.append("image", image);

    const response = await axios.post("/api/blog", formData);

    if (response.data.success) {
      toast.success(response.data.msg);
      setImage(false);
      setData({
        title: "",
        description: "",
        category: "Startup",
        author: "",
      });
    } else {
      toast.error("Error");
    }
  };

  return (
    <>
      <form
        onSubmit={onSubmitHandler}
        className="pt-5 px-5 pb-10 sm:pt-12 sm:pl-16 shadow-[1px_1px_10px_#AEB6B7] p-4 rounded-md mt-5 mb-10"
      >
        <p className="text-base">Thumbnail</p>
        <label htmlFor="image">
          <Image
            className="mt-2 cursor-pointer"
            src={!image ? assets.upload_area : URL.createObjectURL(image)}
            width={140}
            height={70}
            alt=""
          />
        </label>
        <input
          onChange={(e) => setImage(e.target.files[0])}
          type="file"
          id="image"
          hidden
          required
        />

        <br />

        {/* Author image upload  */}

        <p className="text-base">Author Image</p>
        <label htmlFor="author_img">
          <Image
            className="mt-2 rounded-full cursor-pointer"
            src={
              !author_img ? assets.upload_auth : URL.createObjectURL(author_img)
            }
            width={60}
            height={60}
            alt=""
          />
        </label>
        <input
          onChange={(e) => setAuthor_img(e.target.files[0])}
          type="file"
          id="author_img"
          hidden
          required
        />

        <p className="text-base mt-4">Author</p>
        <input
          name="author"
          onChange={onChangeHandler}
          value={data.author}
          className="w-full sm:w-[500px] mt-2 px-4 py-3 border"
          type="text"
          placeholder="Author name"
          required
        />

        <p className="text-base mt-4">Blog Title</p>
        <input
          name="title"
          onChange={onChangeHandler}
          value={data.title}
          className="w-full sm:w-[500px] mt-2 px-4 py-3 border"
          type="text"
          placeholder="Type here"
          required
        />

        <p className="text-base mt-4">Blog Description</p>
        <textarea
          name="description"
          onChange={onChangeHandler}
          value={data.description}
          className="w-full sm:w-[500px] mt-2 px-4 py-3 border"
          type="text"
          placeholder="Write content here"
          rows={6}
          required
        />

        <p className="text-base mt-4">Blog Category</p>
        <select
          name="category"
          onChange={onChangeHandler}
          value={data.category}
          className="w-40 mt-2 px-4 py-3 border text-grey-500 cursor-pointer"
        >
          <option className="cursor-pointer" value="Startup">Startup</option>
          <option className="cursor-pointer" value="Technology">Technology</option>
          <option className="cursor-pointer" value="Lifestyle">Lifestyle</option>
          <option className="cursor-pointer" value="Politics">Politics</option>
        </select>

        <br />
        <button type="submit" className="mt-8 w-40 h-12 bg-black text-white">
          ADD
        </button>
      </form>
    </>
  );
};

export default page;
