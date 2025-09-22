import { Parallax } from "react-parallax";

const Cover = ({ img, title }) => {
  return (
    <Parallax
      blur={{ min: -20, max: 20 }}
      bgImage={img}
      bgImageAlt="cover background"
      strength={-150}
      
    >
      <div className="relative h-[380px] md:h-[480px] lg:h-[550px] flex items-center justify-center">
        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80"></div>

        {/* Content */}
        <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
          {/* Title */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-wide uppercase drop-shadow-lg animate-fadeIn">
            {title}
          </h1>

          {/* Decorative Accent */}
          <div className="w-28 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto my-6 rounded-full shadow-md"></div>

          {/* Subtitle */}
          <p className="text-sm md:text-lg text-gray-200 leading-relaxed max-w-2xl mx-auto animate-fadeIn delay-200">
            Discover a variety of delicious dishes, carefully crafted with fresh
            ingredients and authentic flavors. Indulge yourself in an
            unforgettable dining experience.
          </p>
        </div>
      </div>
    </Parallax>
  );
};

export default Cover;
