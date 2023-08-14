import { Parallax, Background } from "react-parallax";
import "./Cover.css";

const Cover = ({ bgImage, pageTitle, title }) => {
  return (
    <Parallax
      blur={{ min: -150, max: 150 }}
      bgImage={bgImage}
      bgImageAlt="the dog"
      strength={-200}
    >
      <div
        className="hero h-[500px]"
        style={{
          backgroundImage: `url("${bgImage}")`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md cover-content px-10 py-6">
            <h1 className="mb-5 text-5xl font-bold text-white">{pageTitle}</h1>
            <h2 className="text-white text-4xl font-bold mb-3 uppercase">
              {title}
            </h2>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            </p>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default Cover;
