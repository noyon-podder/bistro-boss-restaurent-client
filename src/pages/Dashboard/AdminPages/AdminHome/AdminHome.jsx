import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../hooks/useAuth";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { GiWallet } from "react-icons/gi";
import { TbTruckDelivery } from "react-icons/tb";
import { FaUsers, FaGraduationCap } from "react-icons/fa";

const AdminHome = () => {
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();

  const { data: stats, refetch } = useQuery({
    queryKey: ["info"],
    queryFn: async () => {
      const res = await axiosSecure.get("/admin-stats");
      return res.data;
    },
  });
  console.log(stats);

  return (
    <div className="px-4">
      <h2 className="text-4xl font-semibold text-gray-900 py-4">
        Hi, {user.displayName}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-x-4 my-7 ">
        <div className="flex items-center gap-x-6 bg-indigo-300 px-4 py-3 rounded">
          <>
            <GiWallet className="text-white text-3xl " />
          </>
          <div>
            <span className="block text-3xl text-white font-bold">
              {stats?.revenue}
            </span>
            <span className="text-white text-xl font-normal">Revenue</span>
          </div>
        </div>
        <div className="flex items-center gap-x-6 bg-[#D3A256] px-4 py-3 rounded">
          <>
            <FaUsers className="text-white text-3xl " />
          </>
          <div>
            <span className="block text-3xl text-white font-bold">
              {stats?.users}
            </span>
            <span className="text-white text-xl font-normal">Cutomers</span>
          </div>
        </div>
        <div className="flex items-center gap-x-6 bg-[#FE4880] px-4 py-3 rounded">
          <>
            <FaGraduationCap className="text-white text-3xl " />
          </>
          <div>
            <span className="block text-3xl text-white font-bold">
              {stats?.products}
            </span>
            <span className="text-white text-xl font-normal">Products</span>
          </div>
        </div>
        <div className="flex items-center gap-x-6 bg-[#6AAEFF] px-4 py-3 rounded">
          <>
            <TbTruckDelivery className="text-white text-3xl " />
          </>
          <div>
            <span className="block text-3xl text-white font-bold">
              {stats?.orders}
            </span>
            <span className="text-white text-xl font-normal">orders</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
