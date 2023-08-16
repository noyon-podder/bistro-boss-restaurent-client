import React, { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../../Provider/AuthProvider";
import useCart from "../../../hooks/useCart";

const FoodCard = ({ item }) => {
  const { name, image, price, recipe, _id } = item;
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [, refetch] = useCart();

  const handleAddToCart = (item) => {
    console.log(item);

    if (user && user.email) {
      const cartItem = {
        name,
        image,
        price,
        menuItemId: _id,
        email: user.email,
      };
      fetch(`${import.meta.env.VITE_SERVER_URL}/carts`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(cartItem),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.insertedId) {
            refetch();
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Item add to cart",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    } else {
      Swal.fire({
        title: "please login before!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };
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
          <button
            onClick={() => handleAddToCart(item)}
            className="btn btn-outline border-0 border-b-4 border-orange-400 text-orange-600"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
