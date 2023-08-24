import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../../components/SectionTitle/SectionTitle";
import useMenu from "../../../../hooks/useMenu";
import { Link } from "react-router-dom";
import { FaRegEdit, FaTrash } from "react-icons/fa";
import placeholderMenu from "../../../../assets/others/placeholderManu.png";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";

const ManageItems = () => {
  const [menu, , refetch] = useMenu();

  const [axiosSecure] = useAxiosSecure();
  const handleMenuDelete = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // Swal.fire(
        //   'Deleted!',
        //   'Your file has been deleted.',
        //   'success'
        // )
        axiosSecure.delete(`/menu/${item._id}`).then((res) => {
          refetch();
        });
      }
    });
  };
  return (
    <div>
      <SectionTitle
        heading="manage all items"
        subHeading="Hurry up"
      ></SectionTitle>
      <Helmet>
        <title>Manage Items | Big Boss</title>
      </Helmet>

      <div className="px-5">
        <h1 className="text-center mb-5 text-2xl capitalize text-gray-900 font-semibold">
          total menu: {menu?.length}
        </h1>
        <div>
          <div className="overflow-x-auto">
            <table className="table ">
              {/* head */}
              <thead>
                <tr className="bg-[#D1A054] text-white text-xl font-bold">
                  <th></th>
                  <th>Item Image</th>
                  <th>Item Name</th>
                  <th>Price Color</th>
                  <th>Action</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {menu.map((item, index) => (
                  <tr key={item._id}>
                    <th>{index + 1}</th>
                    <td>
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={!item?.image ? item.image : placeholderMenu}
                            alt="Manu image"
                          />
                        </div>
                      </div>
                    </td>
                    <td>
                      <h2 className="text-gray-800 text-base capitalize font-normal">
                        {item.name}
                      </h2>
                    </td>
                    <td>
                      <span className="font-semibold">${item.price}</span>
                    </td>
                    <td>
                      <div className="w-10 rounded h-10 bg-[#D1A054] flex items-center justify-center">
                        <Link to={`update/${item._id}`}>
                          <FaRegEdit className=" text-center text-white text-xl" />
                        </Link>
                      </div>
                    </td>
                    <th>
                      <button
                        onClick={() => handleMenuDelete(item)}
                        className="btn bg-red-400 text-white btn-xs flex items-center justify-center w-12 h-9"
                      >
                        <FaTrash className="text-lg" />
                      </button>
                    </th>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageItems;
