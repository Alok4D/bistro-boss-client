import { Link } from "react-router-dom";
import Cover from "../../../Shared/Cover/Cover";
import MenuItem from "../../../Shared/MenuItemsCard/MenuItem";

const MenuCategory = ({ items, title, img }) => {
  return (
    <section className="pt-5 sm:px-4 md:px-5 lg:px-0 pb-5">
      {/* Cover Section */}
      {title && <Cover img={img} title={title} />}

      {/* Items Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 my-12">
        {items.map((item) => (
          <MenuItem key={item._id} item={item} />
        ))}
      </div>

      {/* Order Button */}
      <div className="flex justify-center">
        <Link to={`/order/${title}`}>
          <button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
           ORDER YOUR FAVOURITE FOOD
          </button>
        </Link>
      </div>
    </section>
  );
};

export default MenuCategory;
