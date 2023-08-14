import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../shared/menuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";

const PopularMenu = () => {
  const [menu] = useMenu();
  const popularItems = menu.filter((item) => item.category === "popular");

  return (
    <section className="mb-12">
      <SectionTitle
        heading="From our menu"
        subHeading="check it out"
      ></SectionTitle>

      <div className="grid md:grid-cols-2 gap-10">
        {popularItems?.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <div className="text-center mt-6">
        <button className=" px-10 btn btn-outline border-0 border-b-4 featured-button ">
          view full menu
        </button>
      </div>
    </section>
  );
};

export default PopularMenu;
