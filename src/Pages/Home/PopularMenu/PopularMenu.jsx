import SectionTitle from "../../../Components/SectionsTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItemsCard/MenuItem";
import useMenu from "../../../Hooks/UseMenu";
import { Link } from "react-router-dom";

const PopularMenu = () => {
  const [menu] = useMenu();
  const popular = menu.filter((item) => item.category === "popular");

  return (
    <section className="mb- px-4 lg:px-8">
      {/* Section Title */}
      <SectionTitle heading="From Our Menu" subHeading="Popular Items" />

      {/* Menu Grid */}
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 container mx-auto">
        {popular.map((item) => (
          <div
            key={item._id}
          
          >
            {/* MenuItem Card */}
            <MenuItem item={item} />
       
          </div>
        ))}
      </div>

      {/* View Full Menu Button */}
      <div className="flex justify-center items-center mt-10">
      <Link to="/menu">
        <button className="px-8 py-3 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white font-semibold rounded-full shadow-lg hover:scale-105 transition-transform duration-300">
          View Full Menu
        </button>
      </Link>
      </div>
    </section>
  );
};

export default PopularMenu;
