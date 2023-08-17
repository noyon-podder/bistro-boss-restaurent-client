import { FaTrash } from "react-icons/fa";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import useCart from "../../../../hooks/useCart";

const MyCart = () => {
  const [cart, refetch] = useCart();
  const totalPrice = cart.reduce((sum, item) => item.price + sum, 0);

  const handleCartDelete = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "delete this cart!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#506fd9 ",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/carts/${item?._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                position: "top-center",
                icon: "success",
                title: "Cart deleted successfully",
                showConfirmButton: false,
                timer: 1500,
              });
              refetch();
            }
          });
      }
    });
  };

  return (
    <section>
      <Helmet>
        <title>My cart | Big Boss</title>
      </Helmet>

      {cart.length <= 0 ? (
        <>
          <div className="lg:mt-12">
            <h6 className="text-indigo-500 text-center text-3xl font-bold my-4">
              Cart is empty!!
            </h6>
          </div>
        </>
      ) : (
        <>
          <div className="flex items-center justify-center flex-col">
            <div className="flex items-center justify-between px-10 w-full bg-base-100 py-3 uppercase font-bold text-gray-800 my-7">
              <h2>Total Order : {cart.length}</h2>
              <h3>Total price: ${totalPrice.toFixed(2)}</h3>
              <button className="px-5 py-2 bg-indigo-700 text-white font-semibold rounded capitalize text-base">
                pay
              </button>
            </div>

            <div className=" w-full lg:px-10">
              <div className="overflow-x-auto">
                <table className="table ">
                  {/* head */}
                  <thead className="bg-indigo-600 text-white ">
                    <tr>
                      <th>#</th>
                      <th>Item Image</th>
                      <th>Item Name</th>
                      <th>Price</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cart.map((item, index) => (
                      <tr key={item._id} className="border bg-base-100">
                        <td>{index + 1}</td>
                        <td>
                          <div className="flex items-center space-x-3">
                            <div className="avatar">
                              <div className="mask mask-squircle w-12 h-12">
                                <img
                                  src={item?.image}
                                  alt="Avatar Tailwind CSS Component"
                                />
                              </div>
                            </div>
                          </div>
                        </td>
                        <td>
                          <p className="text-gray-900 text-lg font-normal">
                            {item.name}
                          </p>
                        </td>
                        <td>
                          <span>${item.price}</span>
                        </td>
                        <th>
                          <button
                            onClick={() => handleCartDelete(item)}
                            className="btn bg-indigo-400 text-gray-900 btn-xs flex items-center justify-center w-12 h-9"
                          >
                            <FaTrash className="text-base" />
                          </button>
                        </th>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default MyCart;
