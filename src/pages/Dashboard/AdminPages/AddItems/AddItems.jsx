import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../../components/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const IMAGE_HOSTING_KEY = `${import.meta.env.VITE_IMAGE_TOKEN}`;
const AddItems = () => {
  const image_url = `https://api.imgbb.com/1/upload?key=${IMAGE_HOSTING_KEY}`;
  const [axiosSecure] = useAxiosSecure();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("image", data.image[0]);

    fetch(image_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imageResponse) => {
        if (imageResponse.success) {
          const image = imageResponse.data.display_url;
          const newItem = {
            name: data.name,
            category: data.category,
            price: parseFloat(data.price),
            recipe: data.recipe,
            image,
          };
          axiosSecure.post("/menu", newItem).then((data) => {
            if (data.data.insertedId) {
              Swal.fire({
                position: "top-center",
                icon: "success",
                title: `Item is added`,
                showConfirmButton: false,
                timer: 1500,
              });
              reset();
            }
          });
        }
      });

    console.log(data);
  };

  console.log(errors);
  return (
    <div className="lg:px-10 ">
      <Helmet>
        <title>Add Items | Big Boss</title>
      </Helmet>

      <SectionTitle
        heading="Add an Item"
        subHeading="what's new"
      ></SectionTitle>

      <div className="bg-base-100 px-8 py-6">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="w-full">
            <label
              htmlFor="name"
              className="block text-xl font-semibold text-gray-900 mb-4"
            >
              Recipe Name<span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              {...register("name", { required: true, maxLength: 100 })}
              placeholder="Recipe name"
              className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-4  focus:border-orange-400  focus:ring-orange-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
            {errors.name && (
              <span className="text-red-600 text-sm mt-2">
                Recipe name is required
              </span>
            )}
          </div>

          <div className="lg:flex lg:gap-x-7 my-5">
            <div className="w-full">
              <label
                htmlFor="name"
                className="block text-xl font-semibold text-gray-900 mb-4"
              >
                Category<span className="text-red-600">*</span>
              </label>
              <select
                {...register("category", { required: true })}
                className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-4  focus:border-orange-400  focus:ring-orange-300 focus:outline-none focus:ring focus:ring-opacity-40"
              >
                <option className="capitalize" value="pizza">
                  pizza
                </option>
                <option className="capitalize" value="soup">
                  soup
                </option>
                <option className="capitalize" value="dessert">
                  dessert
                </option>
                <option className="capitalize" value="salad">
                  salad
                </option>
                <option className="capitalize" value="drinks">
                  drinks
                </option>
                <option className="capitalize" value="bengali">
                  bengali
                </option>
              </select>
              {errors.category && (
                <span className="text-red-600 text-sm mt-2">
                  Category is required
                </span>
              )}
            </div>

            <div className="w-full">
              <label
                htmlFor="name"
                className="block text-xl font-semibold text-gray-900 mb-4"
              >
                Price<span className="text-red-600">*</span>
              </label>
              <input
                type="number"
                placeholder="Price"
                {...register("price", { required: true })}
                className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-4  focus:border-orange-400  focus:ring-orange-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
              {errors.price && (
                <span className="text-red-600 text-sm mt-2">
                  Price is required
                </span>
              )}
            </div>
          </div>

          <div className="mb-5">
            <label
              htmlFor="details"
              className="block text-xl font-semibold text-gray-900 mb-4"
            >
              Recipe Details<span className="text-red-600">*</span>
            </label>
            <textarea
              placeholder="Recipe Details"
              {...register("recipe", { required: true })}
              class="block  mt-2 w-full placeholder-gray-400/70 rounded-lg border border-gray-200 bg-white px-4 h-32 py-2.5 text-gray-700 focus:border-orange-400 focus:outline-none focus:ring focus:ring-orange-300 focus:ring-opacity-40 "
            ></textarea>
            {errors.recipe && (
              <span className="text-red-600 text-sm mt-2">
                Recipe details is required
              </span>
            )}
          </div>

          <div className="lg:w-1/2" w-full>
            <input
              type="file"
              {...register("image", { required: true })}
              className="file-input file-input-bordered w-full max-w-xs"
            />
            {errors.image && (
              <span className="text-red-600 text-sm mt-2">
                Image is required
              </span>
            )}
          </div>
          <input
            type="submit"
            value="Add Item"
            className="px-10 cursor-pointer py-3 text-xl font-semibold rounded text-white bg-orange-400 hover:bg-orange-500 mt-5"
          />
        </form>
      </div>
    </div>
  );
};

export default AddItems;
