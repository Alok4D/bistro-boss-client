import { useState } from "react";
import orderCover from "../../../assets/shop/banner2.jpg";
import Cover from "../../Shared/Cover/Cover";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import useMenu from "../../../Hooks/UseMenu";
import FoodCard from "../../../Components/Food-Card/FoodCard";

const Ordered = () => {

  const categories = ["salad", "pizza", "soup", "dessert", "drinks"];
  const { category } = useParams();
  const initialIndex = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initialIndex >= 0 ? initialIndex : 0);
  const [menu] = useMenu();

  const filteredItems = {
    salad: menu.filter((item) => item.category === "salad"),
    pizza: menu.filter((item) => item.category === "pizza"),
    soup: menu.filter((item) => item.category === "soup"),
    dessert: menu.filter((item) => item.category === "dessert"),
    drinks: menu.filter((item) => item.category === "drinks"),
  };

  return (
    <div className="">
      <Helmet>
        <title>Mozzo Bazar | Order Food</title>
      </Helmet>

      <Cover img={orderCover} title="Order Food" />

      <div className="container mx-auto sm:px-2 md:px-4 lg:px-0 py-12">
        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {categories.map((cat, index) => (
            <button
              key={cat}
              onClick={() => setTabIndex(index)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300
                ${tabIndex === index
                  ? "bg-gradient-to-r from-yellow-400 to-orange-500 text-white shadow-lg scale-105"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredItems[categories[tabIndex]].map((item) => (
            <FoodCard key={item._id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Ordered;
