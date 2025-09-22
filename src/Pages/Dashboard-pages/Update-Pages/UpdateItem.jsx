import { useForm } from "react-hook-form";
import { useLoaderData, useNavigate } from "react-router-dom"; // ✅ Import useNavigate
import UseAxiosPublic from "../../../Hooks/UseAxiosPublic";
import UseAxiosSecure from "../../../Hooks/UseAxiosSecure";
import Swal from "sweetalert2";
import SectionTitle from "../../../Components/SectionsTitle/SectionTitle";
import { useState } from "react";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const UpdateItem = () => {
  const { name, category, recipe, price, image, _id } = useLoaderData();
  const navigate = useNavigate(); // ✅ Initialize navigate

  const { register, handleSubmit, reset } = useForm();
  const axiosPublic = UseAxiosPublic();
  const axiosSecure = UseAxiosSecure();

  const [preview, setPreview] = useState(image);

  const onSubmit = async (data) => {
    try {
      let imageUrl = image; // Use existing image by default

      // If new image is selected, upload it
      if (data.image && data.image.length > 0) {
        const formData = new FormData();
        formData.append("image", data.image[0]);

        const res = await axiosPublic.post(image_hosting_api, formData, {
          headers: { "content-type": "multipart/form-data" },
        });

        if (res.data.success) {
          imageUrl = res.data.data.display_url;
        } else {
          throw new Error("Image upload failed.");
        }
      }

      const updatedItem = {
        name: data.name,
        category: data.category,
        price: parseFloat(data.price),
        recipe: data.recipe,
        image: imageUrl,
      };

      const updateRes = await axiosSecure.patch(`/menu/${_id}`, updatedItem);
      if (updateRes.data.modifiedCount > 0) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${data.name} has been updated.`,
          showConfirmButton: false,
          timer: 1500,
        });

        // Optional: reset form (if you stay on the page)
        reset({
          name: data.name,
          category: data.category,
          price: data.price,
          recipe: data.recipe,
        });

        setPreview(imageUrl);

        // ✅ Redirect to manageItems page
        navigate("/dashboard/manageItems");
      }
    } catch (error) {
      console.error("Update failed:", error);
      Swal.fire({
        icon: "error",
        title: "Update Failed",
        text: "There was an issue updating the item.",
      });
    }
  };

  return (
    <div className="px-4 md:px-10 lg:px-20 py-12 bg-gray-50 min-h-screen">
      <SectionTitle heading="Update an Item" subHeading="Refresh item info" />

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white shadow-lg rounded-xl p-6 md:p-10 space-y-6 max-w-3xl mx-auto"
      >
        {/* Recipe Name */}
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text font-semibold">Recipe Name*</span>
          </label>
          <input
            type="text"
            defaultValue={name}
            placeholder="Recipe Name"
            {...register("name", { required: true })}
            className="input input-bordered w-full rounded-lg"
          />
        </div>

        {/* Category & Price */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* Category */}
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-semibold">Category*</span>
            </label>
            <select
              defaultValue={category}
              {...register("category", { required: true })}
              className="select select-bordered w-full rounded-lg"
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
          </div>

          {/* Price */}
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-semibold">Price*</span>
            </label>
            <input
              type="number"
              defaultValue={price}
              step="0.01"
              min="0"
              placeholder="Price"
              {...register("price", { required: true })}
              className="input input-bordered w-full rounded-lg"
            />
          </div>
        </div>

        {/* Recipe Details */}
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text font-semibold">Recipe Details*</span>
          </label>
          <textarea
            defaultValue={recipe}
            {...register("recipe", { required: true })}
            className="textarea textarea-bordered w-full h-32 rounded-lg"
            placeholder="Recipe description..."
          />
        </div>

        {/* Image Upload */}
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text font-semibold">Recipe Image</span>
          </label>
          <input
            {...register("image")}
            type="file"
            accept="image/*"
            className="file-input file-input-bordered file-input-secondary w-full max-w-xs"
            onChange={(e) => {
              const file = e.target.files[0];
              if (file) {
                setPreview(URL.createObjectURL(file));
              }
            }}
          />

          {preview && (
            <div className="mt-4">
              <p className="mb-1 text-sm text-gray-600">Current Preview:</p>
              <img
                src={preview}
                alt="Preview"
                className="w-40 h-40 object-cover rounded-lg border shadow"
              />
            </div>
          )}
        </div>

        {/* Submit Button */}
        <div>
          <button className="btn bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-3 rounded-full flex items-center gap-3 transition-transform transform hover:scale-105">
            Update Item
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateItem;
