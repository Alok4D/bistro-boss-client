import { Link } from "react-router-dom";
import SectionTitle from "../../../Components/SectionsTitle/SectionTitle";
import featuredImage from "../../../assets/home/featured.jpg";
import "./Featured.css";

const Featured = () => {
  return (
    <section className="featured-item bg-fixed text-white py-10 relative">
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
      <div className="relative z-10">
        <SectionTitle
          heading="Featured Items"
          subHeading="Check it out"
        ></SectionTitle>

        {/* Main container */}
        <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center bg-white/10 backdrop-blur-sm rounded-2xl shadow-xl p-6 md:p-12">
          {/* Left - Image */}
          <div className="overflow-hidden rounded-xl shadow-lg">
            <img
              src={featuredImage}
              alt="Featured Food"
              className="w-full h-full object-cover transform hover:scale-105 transition duration-500"
            />
          </div>

          {/* Right - Content */}
          <div className="text-white space-y-4">
            <p className="text-sm md:text-base text-yellow-400 font-medium">
              Aug 20, 2029
            </p>
            <h3 className="text-2xl md:text-3xl font-extrabold uppercase tracking-wide">
              Where Can I Get Some?
            </h3>
            <p className="text-sm md:text-base leading-relaxed text-gray-200">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              voluptate facere, deserunt dolores maiores quod nobis quas quasi.
              Eaque repellat recusandae ad laudantium tempore consequatur
              consequuntur omnis ullam maxime tenetur.
            </p>

            {/* Button */}
           <Link to="/order/salad">
            <button className="px-6 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-semibold rounded-full shadow-lg hover:scale-105 transition-transform duration-300">
              Order Now
            </button>
           </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featured;
