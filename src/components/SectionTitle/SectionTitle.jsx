const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="mx-auto md:w-4/12 text-center my-7">
      <p className="text-yellow-500 mb-3">--- {subHeading} ---</p>
      <h3 className="text-3xl uppercase border-y-2 font-medium py-2">
        {heading}
      </h3>
    </div>
  );
};

export default SectionTitle;
