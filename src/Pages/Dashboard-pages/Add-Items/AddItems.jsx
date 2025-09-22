import { useForm } from "react-hook-form";
import SectionTitle from "../../../Components/SectionsTitle/SectionTitle";
import { FaUtensils } from "react-icons/fa";
import UseAxiosPublic from "../../../Hooks/UseAxiosPublic";
import UseAxiosSecure from "../../../Hooks/UseAxiosSecure";
import Swal from "sweetalert2";
import { useState } from "react";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddItems = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    setValue,
  } = useForm();

  const axiosPublic = UseAxiosPublic();
  const axiosSecure = UseAxiosSecure();
  const [preview, setPreview] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
      setValue("image", e.target.files, { shouldValidate: true });
    } else {
      setPreview(null);
      setValue("image", null, { shouldValidate: true });
    }
  };

  const {
    onChange: onImageChange,
    ref: imageRef,
    name: imageName,
    ...imageRest
  } = register("image", { required: "Image is required" });

  const onSubmit = async (data) => {
    try {
      if (!data.image || data.image.length === 0) {
        Swal.fire("Error", "Please upload an image!", "error");
        return;
      }

      const formData = new FormData();
      formData.append("image", data.image[0]);

      const res = await axiosPublic.post(image_hosting_api, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      if (res.data.success) {
        const menuItem = {
          name: data.name,
          category: data.category,
          price: parseFloat(data.price),
          recipe: data.recipe,
          image: res.data.data.display_url,
        };

        const menuRes = await axiosSecure.post("/menu", menuItem);
        if (menuRes.data.insertedId) {
          reset();
          setPreview(null);
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${data.name} has been added to the menu!`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      }
    } catch (error) {
      console.error(error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong while adding the item!",
      });
    }
  };

  return (
    <div className="px-4 md:px-10 lg:px-24 py-12">
      <SectionTitle heading="Add a New Item" subHeading="Share something tasty!" />

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white/90 backdrop-blur shadow-xl rounded-2xl p-6 md:p-12 space-y-10 max-w-4xl mx-auto border border-gray-200"
      >
        {/* Recipe Name */}
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text font-medium text-gray-700">
              Recipe Name <span className="text-red-500">*</span>
            </span>
          </label>
          <input
            type="text"
            placeholder="Enter recipe name"
            {...register("name", { required: "Recipe Name is required" })}
            className={`input input-bordered w-full rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 ${
              errors.name ? "border-red-500" : ""
            }`}
          />
          {errors.name && <p className="text-red-500 mt-1 text-sm">{errors.name.message}</p>}
        </div>

        {/* Category & Price */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* Category */}
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-medium text-gray-700">
                Category <span className="text-red-500">*</span>
              </span>
            </label>
            <select
              defaultValue="default"
              {...register("category", { required: "Category is required" })}
              className={`select select-bordered w-full rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 ${
                errors.category ? "border-red-500" : ""
              }`}
            >
              <option disabled value="default">
                Select a category
              </option>
              <option value="salad">Salad</option>
              <option value="pizza">Pizza</option>
              <option value="soup">Soup</option>
              <option value="dessert">Dessert</option>
              <option value="drinks">Drinks</option>
            </select>
            {errors.category && <p className="text-red-500 mt-1 text-sm">{errors.category.message}</p>}
          </div>

          {/* Price */}
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-medium text-gray-700">
                Price ($) <span className="text-red-500">*</span>
              </span>
            </label>
            <input
              type="number"
              step="0.01"
              placeholder="Enter price"
              {...register("price", {
                required: "Price is required",
                valueAsNumber: true,
                min: { value: 0.01, message: "Price must be positive" },
              })}
              className={`input input-bordered w-full rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 ${
                errors.price ? "border-red-500" : ""
              }`}
            />
            {errors.price && <p className="text-red-500 mt-1 text-sm">{errors.price.message}</p>}
          </div>
        </div>

        {/* Recipe Details */}
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text font-medium text-gray-700">
              Recipe Details <span className="text-red-500">*</span>
            </span>
          </label>
          <textarea
            {...register("recipe", { required: "Recipe details are required" })}
            placeholder="Describe the recipe..."
            className={`textarea textarea-bordered w-full h-32 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 ${
              errors.recipe ? "border-red-500" : ""
            }`}
          />
          {errors.recipe && <p className="text-red-500 mt-1 text-sm">{errors.recipe.message}</p>}
        </div>

        {/* Image Upload */}
        <div className="form-control w-full">
          <label className="label" htmlFor="file_input">
            <span className="label-text font-medium text-gray-700">
              Upload Image <span className="text-red-500">*</span>
            </span>
          </label>
          <input
            type="file"
            id="file_input"
            accept="image/*"
            name={imageName}
            {...imageRest}
            onChange={(e) => {
              handleImageChange(e);
              onImageChange(e);
            }}
            className={`block w-full text-sm text-gray-900 border border-gray-300 rounded-md cursor-pointer bg-white
              file:mr-4 file:py-2 file:px-4
              file:rounded-full file:border-0
              file:text-sm file:font-semibold
              file:bg-yellow-100 file:text-yellow-700
              hover:file:bg-yellow-200 focus:outline-none ${
                errors.image ? "border-red-500" : "border-gray-300"
              }`}
          />
          {errors.image && <p className="text-red-500 mt-1 text-sm">{errors.image.message}</p>}

          {preview && (
            <div className="mt-4">
              <img
                src={preview}
                alt="Preview"
                className="rounded-md w-44 h-44 object-cover border shadow-md"
              />
            </div>
          )}
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="btn bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-3 rounded-full flex items-center gap-3 transition-transform hover:scale-105 shadow-md"
          >
            <FaUtensils className="text-lg" /> Add Item
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddItems;
