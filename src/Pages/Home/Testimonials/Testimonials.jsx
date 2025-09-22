import SectionTitle from "../../../Components/SectionsTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { useEffect, useState } from "react";

import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("https://bistro-boss-server-wheat-one.vercel.app/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <section className="bg-gradient-to-br from-gray-50 via-white to-gray-100 mb-8">
      <div className="container mx-auto sm:px-2 md:px-2 lg:px-0">
        {/* Section Title */}
        <SectionTitle
          subHeading="What Our Clients Say"
          heading="Testimonials"
        ></SectionTitle>

        {/* Swiper */}
        <Swiper
          navigation={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          modules={[Navigation, Autoplay]}
          className="mySwiper mt-10"
        >
          {reviews.map((review) => (
            <SwiperSlide key={review._id}>
              <div className="flex justify-center items-center px-4 py-8">
                {/* Card */}
                <div className="bg-white shadow-lg hover:shadow-2xl transition duration-300 ease-in-out rounded-xl p-8 md:p-10 container mx-auto w-full border-t-4 border-yellow-400">
                  {/* Rating */}
                  <Rating
                    style={{ maxWidth: 140 }}
                    value={review.Rating}
                    readOnly
                    className="mx-auto mb-6"
                  />

                  {/* Quote */}
                  <p className="text-gray-700 text-base md:text-lg leading-relaxed text-center">
                    “{review.details}”
                  </p>

                  {/* Divider */}
                  <div className="w-20 h-1 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 mx-auto my-6 rounded-full"></div>

                  {/* Name */}
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 text-center">
                    {review.name}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1 text-center">
                    Valued Customer
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
