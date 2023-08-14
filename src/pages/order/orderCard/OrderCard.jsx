import { useState } from "react";
import FoodCard from "../../shared/foodCard/FoodCard";

const OrderCard = ({ orderCategory }) => {
  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate start and end indices for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const currentItems = orderCategory?.slice(startIndex, endIndex);

  const totalPages = Math.ceil(orderCategory.length / itemsPerPage);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div>
      <div className="grid md:grid-cols-3 gap-10 mt-10">
        {currentItems?.map((item) => (
          <FoodCard key={item._id} item={item}></FoodCard>
        ))}
      </div>

      {/* Pagination controls */}
      <div className="flex justify-center items-center gap-x-5 my-6">
        <button
          disabled={currentPage === 1}
          onClick={() => handlePageChange(currentPage - 1)}
          className=" text-orange-600 text-lg font-semibold"
        >
          Previous
        </button>

        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className="w-7 h-7 text-center rounded-full bg-orange-300 text-gray-900 font-bold"
          >
            {index + 1}
          </button>
        ))}
        <button
          disabled={currentPage === totalPages}
          onClick={() => handlePageChange(currentPage + 1)}
          className="text-orange-600 text-lg font-semibold"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default OrderCard;
