import PopularMenu from "../popularMenu/PopularMenu";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Featured from "../featured/Featured";
import Testimonials from "../Testimonials/Testimonials";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Bistro Boss | Home</title>
      </Helmet>

      <Banner />
      <Category />
      <PopularMenu />
      <Featured />
      <Testimonials />
    </>
  );
};

export default Home;
