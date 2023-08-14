import { Link } from "react-router-dom";
import Cover from "../../shared/cover/Cover";
import MenuItem from "../../shared/menuItem/MenuItem";

const MenuCategory = ({ items, title, coverImg }) => {
  console.log(title);
  return (
    <div className="py-5">
      {title && <Cover title={title} bgImage={coverImg}></Cover>}
      <div className="grid md:grid-cols-2 gap-6 my-10">
        {items?.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      {title && (
        <div className="text-center mt-6">
          <Link to={`/order/${title}`}>
            <button className=" px-10 btn btn-outline border-0 border-b-4 featured-button ">
              ORDER YOUR FAVORITE FOOD
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default MenuCategory;
