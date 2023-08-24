import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import SectionTitle from "../SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useLoaderData } from "react-router-dom";

const IMAGE_HOSTING_KEY = `${import.meta.env.VITE_IMAGE_TOKEN}`;
const UpdateItems = () => {
  const item = useLoaderData();

  const image_url = `https://api.imgbb.com/1/upload?key=${IMAGE_HOSTING_KEY}`;
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [axiosSecure] = useAxiosSecure();

  const onSubmit = (data) => {
    const formData = new FormData();
    const [image, setImage] = useState("");
    formData.append("image", data.image[0]);

    const updateItem = {
      name: data.name,
      price: parseFloat(data.price),
      image,
      category: data.category,
      recipe: data.recipe,
    };

    fetch(image_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imageResponse) => {
        setImage(imageResponse.data.display_url);
      });
  };
  return (
    <div className="lg:px-10 ">
      <Helmet>
        <title>Update Item || Big Boss</title>
      </Helmet>

      <SectionTitle
        heading="Update an Item"
        subHeading="update's item"
      ></SectionTitle>

      <div className="bg-base-100 px-8 py-6">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="w-full">
            <label
              htmlFor="name"
              className="block text-xl font-semibold text-gray-900 mb-4"
            >
              Recipe Name<span className="text-red-600"></span>
            </label>
            <input
              defaultValue={item.name}
              type="text"
              {...register("name", { maxLength: 100 })}
              placeholder="Recipe name"
              className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-4  focus:border-orange-400  focus:ring-orange-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>

          <div className="lg:flex lg:gap-x-7 my-5">
            <div className="w-full">
              <label
                htmlFor="name"
                className="block text-xl font-semibold text-gray-900 mb-4"
              >
                Category
              </label>
              <select
                defaultValue={item.category}
                {...register("category")}
                className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-4  focus:border-orange-400  focus:ring-orange-300 focus:outline-none focus:ring focus:ring-opacity-40"
              >
                <option className="capitalize" value="pizza">
                  pizza
                </option>
                <option className="capitalize" value="soup">
                  soup
                </option>
                <option className="capitalize" value="dessert">
                  dessert
                </option>
                <option className="capitalize" value="salad">
                  salad
                </option>
                <option className="capitalize" value="drinks">
                  drinks
                </option>
                <option className="capitalize" value="bengali">
                  bengali
                </option>
              </select>
            </div>

            <div className="w-full">
              <label
                htmlFor="name"
                className="block text-xl font-semibold text-gray-900 mb-4"
              >
                Price
              </label>
              <input
                defaultValue={item.price}
                type="number"
                placeholder="Price"
                {...register("price")}
                className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-4  focus:border-orange-400  focus:ring-orange-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
          </div>

          <div className="mb-5">
            <label
              htmlFor="details"
              className="block text-xl font-semibold text-gray-900 mb-4"
            >
              Recipe Details
            </label>
            <textarea
              defaultValue={item.recipe}
              placeholder="Recipe Details"
              {...register("recipe")}
              className="block  mt-2 w-full placeholder-gray-400/70 rounded-lg border border-gray-200 bg-white px-4 h-32 py-2.5 text-gray-700 focus:border-orange-400 focus:outline-none focus:ring focus:ring-orange-300 focus:ring-opacity-40 "
            ></textarea>
          </div>

          <div className="lg:w-1/2" w-full>
            <input
              type="file"
              {...register("image")}
              className="file-input file-input-bordered w-full max-w-xs"
            />
          </div>
          <input
            type="submit"
            value="Update Item"
            className="px-10 cursor-pointer py-3 text-xl font-semibold rounded text-white bg-orange-400 hover:bg-orange-500 mt-5"
          />
        </form>
      </div>
    </div>
  );
};

export default UpdateItems;
