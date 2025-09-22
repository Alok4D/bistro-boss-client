import "./BistroDetails.css";

const BistroDetails = () => {
  return (
    <div className="bistroBoss-Details hero min-h-[572px] relative">
      {/* Dark overlay */}
      <div className="hero-overlay bg-black/50"></div>

      {/* Content */}
      <div className="flex justify-center items-center h-full px-4 md:px-6 lg:px-0">
        <div className="w-full  bg-white/95 backdrop-blur-md px-6 md:px-10 lg:px-16 py-8 md:py-12 rounded-xl shadow-xl border border-gray-200 text-center">
          
          {/* Title */}
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-wide">
            Mozzo Bazar
          </h2>

          {/* Divider */}
          <div className="w-20 md:w-24 h-1 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 mx-auto my-4 rounded-full"></div>

          {/* Paragraph */}
          <p className="mt-4 text-sm md:text-base lg:text-lg text-gray-700 leading-relaxed">
            You can add your favorite food in our section. If you want to add,
            please scroll down and find the add button. Everyone will see your
            favorite food in our section along with your name.
          </p>
          <p className="mt-3 text-sm md:text-base lg:text-lg text-gray-700 leading-relaxed">
            It will be my pleasure if you add your favorite food and share your
            experience. You can also share our specialty.
          </p>

         
        </div>
      </div>
    </div>
  );
};

export default BistroDetails;
