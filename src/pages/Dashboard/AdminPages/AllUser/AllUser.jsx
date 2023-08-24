import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import { FaRegEdit, FaTrash, FaUserShield } from "react-icons/fa";
import profileImage from "../../../../assets/others/profile.png";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";

const AllUser = () => {
  const [axiosSecure] = useAxiosSecure();
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await axiosSecure.get(`/users`);
    return res.data;
  });

  const handleMakeAdmin = (user) => {
    fetch(`${import.meta.env.VITE_SERVER_URL}/users/admin/${user._id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          refetch();

          Swal.fire({
            position: "top-center",
            icon: "success",
            title: `${user.name} is admin now`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  const handleUserDelete = (user) => {
    fetch(`${import.meta.env.VITE_SERVER_URL}/users/${user?._id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          refetch();
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: `${user.name} is deleted`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  return (
    <div>
      <Helmet>
        <title>All Users | Big Boss</title>
      </Helmet>

      <div className="flex items-center justify-center flex-col mt-10">
        <h2 className="text-3xl text-gray-900 font-bold">
          Total Items: {users.length}
        </h2>

        <div className=" w-full lg:px-10 mt-5">
          <div className="overflow-x-auto">
            <table className="table ">
              {/* head */}
              <thead className="bg-indigo-600 text-white ">
                <tr>
                  <th></th>
                  <th> Name</th>
                  <th>Email</th>
                  <th>Action</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr key={user._id} className="border bg-base-100">
                    <td>{index + 1}</td>

                    <td>
                      <p className="text-gray-900 text-lg font-normal capitalize">
                        {user.name}
                      </p>
                    </td>

                    <td>
                      <span>{user.email}</span>
                    </td>

                    <td>
                      {user?.role === "admin" ? (
                        "admin"
                      ) : (
                        <>
                          <button
                            onClick={() => handleMakeAdmin(user)}
                            className="btn bg-indigo-200 text-gray-900 btn-xs flex items-center justify-center w-12 h-9"
                          >
                            <FaUserShield className="text-base" />
                          </button>
                        </>
                      )}
                    </td>
                    <td>
                      <button
                        onClick={() => handleUserDelete(user)}
                        className="btn bg-indigo-200 text-gray-900 btn-xs flex items-center justify-center w-12 h-9"
                      >
                        <FaTrash className="text-base" />
                      </button>
                    </td>
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

export default AllUser;
