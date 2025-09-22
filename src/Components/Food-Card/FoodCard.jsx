import Swal from "sweetalert2";
import UseAuth from "../../Hooks/UseAuth";
import { useLocation, useNavigate } from "react-router-dom";

import UseAxiosSecure from "../../Hooks/UseAxiosSecure";
import UseCart from "../../Hooks/UseCart";

const FoodCard = ({ item }) => {
  const { name, image, price, recipe, _id } = item;
  const { user } = UseAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = UseAxiosSecure();
  const [, refetch] = UseCart();

  const handleAddToCart = () => {
    if (user && user.email) {
      const cartItem = {
        menuId: _id,
        email: user.email,
        name,
        image,
        price,
      };
      axiosSecure.post("/carts", cartItem).then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${name} added to your cart`,
            showConfirmButton: false,
            timer: 1500,
          });
          refetch();
        }
      });
    } else {
      Swal.fire({
        title: "You are not logged in",
        text: "Please login to add to the cart",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Login!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

  return (
    <div className="relative group bg-white rounded-3xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl">
      {/* Image */}
      <div className="relative w-full h-64 md:h-52 lg:h-64 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {/* Price Tag */}
        <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-1 rounded-full font-semibold shadow-lg text-lg">
          ${price}
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6 flex flex-col items-center text-center">
        <h2 className="text-xl md:text-2xl font-bold mb-2 text-gray-800">{name}</h2>
        <p className="text-gray-600 mb-4">{recipe}</p>
        <button
          onClick={handleAddToCart}
          className="px-6 py-2 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-semibold shadow-lg hover:scale-105 transition transform duration-300"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default FoodCard;
