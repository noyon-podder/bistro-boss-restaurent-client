import React from "react";

const FoodCard = ({ item }) => {
  const { name, image, price, recipe } = item;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <p className="absolute right-5 top-4 rounded font-semibold bg-gray-900 text-white py-2 px-4  ">
        $ {price}
      </p>
      <div className="card-body">
        <h2 className="card-title text-center text-xl text-gray-900 font-bold my-2 flex justify-center">
          {name}
        </h2>
        <p className="text-base text-slate-500">{recipe}</p>
        <div className="card-actions justify-center">
          <button className="btn btn-outline border-0 border-b-4 border-orange-400 text-orange-600">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
