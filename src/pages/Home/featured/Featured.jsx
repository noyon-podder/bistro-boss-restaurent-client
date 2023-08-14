import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImage from "../../../assets/home/featured.jpg";
import "./Featured.css";
const Featured = () => {
  return (
    <section className="featured-item text-white py-10">
      <SectionTitle
        subHeading="check it out"
        heading="From Our Menu"
      ></SectionTitle>

      <div className="md:flex items-center justify-center py-12 px-16 z-50">
        <div>
          <img src={featuredImage} alt="" />
        </div>
        <div className="md: ml-10">
          <p>Sep 23, 2032</p>
          <p className="uppercase font-semibold my-2">where can i get some?</p>
          <p className="mb-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
            facilis repellat doloribus, nulla quibusdam, illum incidunt delectus
            veniam corrupti a mollitia? Necessitatibus nulla unde, magnam
            deleniti excepturi, id minima ab eligendi incidunt laboriosam iure
            pariatur, rem natus perferendis temporibus assumenda?
          </p>
          <button className="btn btn-outline border-0 border-b-4 featured-button text-white">
            Order Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Featured;
