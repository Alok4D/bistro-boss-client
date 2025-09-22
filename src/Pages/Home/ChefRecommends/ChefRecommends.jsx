import SectionTitle from "../../../Components/SectionsTitle/SectionTitle";
import useMenu from "../../../Hooks/UseMenu";
import Swal from "sweetalert2";
import { useNavigate, useLocation } from "react-router-dom";
import UseAuth from "../../../Hooks/UseAuth";
import UseAxiosSecure from "../../../Hooks/UseAxiosSecure";
import { useState } from "react";
import UseCart from "../../../Hooks/UseCart"; // Import UseCart to get the cart and refetch function

const ChefRecommends = () => {
    // Fetch the menu items
    const [menu] = useMenu();
    const [cart, refetch] = UseCart(); // Get the cart state and refetch function
    // Filter out the items with category 'salad'
    const salad = menu.filter(item => item.category === 'salad');
    // Limit to first 3 salad items
    const limitedSalad = salad.slice(0, 3);

    // Auth and navigation
    const { user } = UseAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const axiosSecure = UseAxiosSecure();

    // State for loading spinner
    const [isLoading, setIsLoading] = useState(false);

    // Handle add to cart
    const handleAddToCart = (item) => {
        if (user && user.email) {
            const cartItem = {
                menuId: item._id,
                email: user.email,
                name: item.name,
                image: item.image,
                price: item.price,
            };

            setIsLoading(true); // Show loading spinner

            axiosSecure.post("/carts", cartItem)
                .then((res) => {
                    setIsLoading(false); // Hide loading spinner
                    if (res.data.insertedId) {
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: `${item.name} added to your cart`,
                            showConfirmButton: false,
                            timer: 1500,
                        });

                        // Refetch the cart to update cart state immediately
                        refetch();
                    }
                })
                .catch((error) => {
                    setIsLoading(false); // Hide loading spinner
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Something went wrong. Please try again later.",
                    });
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
        <div className="py-10 bg-gray-50">
            {/* Section Title */}
            <div className="container mx-auto text-center mb-12">
                <SectionTitle subHeading="Should try" heading="CHEF RECOMMENDS" />
            </div>

            {/* Salad Items */}
            <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
                {limitedSalad.map((item, index) => (
                    <div key={index} className="relative bg-white border border-gray-200 rounded-lg shadow-xl overflow-hidden transform transition duration-300 hover:scale-105">
                        {/* Price on top of image */}
                        <div className="absolute top-4 left-4 z-10 bg-gray-50 bg-opacity-75 text-lg font-bold text-[#ff5200] px-3 py-1 rounded-md">
                            ${item.price.toFixed(2)}
                        </div>
                        
                        {/* Image */}
                        <img src={item.image} alt={item.name} className="w-full h-64 object-cover rounded-t-lg" />
                        
                        {/* Card Content */}
                        <div className="relative p-6 pt-12">
                            {/* Product Name */}
                            <h3 className="text-2xl font-bold text-gray-800 mb-3">{item.name}</h3>

                            {/* Recipe */}
                            <p className="text-gray-600 text-base mb-4">{item.recipe}</p>
                            
                            {/* Add to Cart Button */}
                            <button
                                onClick={() => handleAddToCart(item)}
                                className="w-full py-3 bg-[#ff5200] text-white font-semibold rounded-lg hover:bg-orange-600 transition duration-300"
                            >
                                {isLoading ? (
                                    <div className="animate-spin w-5 h-5 border-4 border-t-4 border-yellow-500 border-solid rounded-full"></div>
                                ) : (
                                    "Add to Cart"
                                )}
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ChefRecommends;
