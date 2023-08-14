import { Helmet } from "react-helmet-async";
import Cover from "../../shared/cover/Cover";
import image from "../../../assets/menu/banner3.jpg";
import pizzaImage from "../../../assets/menu/pizza-bg.jpg";
import saladImage from "../../../assets/menu/salad-bg.jpg";
import MenuCategory from "../menuCategory/MenuCategory";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import dessertsImage from "../../../assets/menu/dessert-bg.jpeg";
import soupImage from "../../../assets/menu/soup-bg.jpg";
import useFilterCategory from "../../../hooks/useFilterCategory";

const Menu = () => {
  const dessert = useFilterCategory("dessert");
  const soup = useFilterCategory("soup");
  const pizza = useFilterCategory("pizza");
  const salad = useFilterCategory("salad");
  const offered = useFilterCategory("offered");

  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <Cover title="Our Menu" bgImage={image}></Cover>
      <SectionTitle
        subHeading="Don't miss"
        heading="Todays offer"
      ></SectionTitle>
      <MenuCategory items={offered}></MenuCategory>

      <MenuCategory
        items={dessert}
        title={"desserts"}
        coverImg={dessertsImage}
      />

      <MenuCategory
        items={pizza}
        title="pizza"
        coverImg={pizzaImage}
      ></MenuCategory>

      <MenuCategory items={salad} coverImg={saladImage} title="salads" />

      <MenuCategory items={soup} title={"soups"} coverImg={soupImage} />
    </div>
  );
};

export default Menu;
