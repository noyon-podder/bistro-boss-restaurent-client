const MenuItem = ({ item }) => {
  const { image, name, price, recipe } = item;
  return (
    <div className="flex  space-x-2 mb-3">
      <img
        src={image}
        alt=""
        className="w-[100px] object-cover"
        style={{ borderRadius: "0 200px 200px 200px", height: "104px" }}
      />
      <div>
        <h3 className="uppercase text-black font-normal">
          {name} ---------------
        </h3>
        <p className="text-gray-500 mt-2">{recipe}</p>
      </div>
      <span className="text-yellow-500">${price}</span>
    </div>
  );
};

export default MenuItem;
