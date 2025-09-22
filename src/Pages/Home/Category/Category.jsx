import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpg";
import SectionTitle from "../../../Components/SectionsTitle/SectionTitle";

const Category = () => {
  return (
    <section className="container mx-auto px-3 lg:px-0">
      <SectionTitle
        subHeading={"From 11.00am to 10.00pm"}
        heading={"Order online"}
      />
      <Swiper
        spaceBetween={20}
        centeredSlides={false}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper mb-10"
      >
        <SwiperSlide className="relative">
          <img src={slide1} alt="" className="rounded-lg w-full object-cover h-[390px]" />
          <h3 className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-2xl md:text-4xl uppercase text-white font-bold drop-shadow-lg text-center">
            Salads
          </h3>
        </SwiperSlide>

        <SwiperSlide className="relative">
          <img src={slide2} alt="" className="rounded-lg w-full  object-cover  h-[390px]" />
          <h3 className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-2xl md:text-4xl uppercase text-white font-bold drop-shadow-lg text-center">
            Pizza
          </h3>
        </SwiperSlide>

        <SwiperSlide className="relative">
          <img src={slide3} alt="" className="rounded-lg w-full  object-cover  h-[390px]" />
          <h3 className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-2xl md:text-4xl uppercase text-white font-bold drop-shadow-lg text-center">
            Soups
          </h3>
        </SwiperSlide>

        <SwiperSlide className="relative">
          <img src={slide4} alt="" className="rounded-lg w-full object-cover  h-[390px]" />
          <h3 className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-2xl md:text-4xl uppercase text-white font-bold drop-shadow-lg text-center">
            Desserts
          </h3>
        </SwiperSlide>

        <SwiperSlide className="relative">
          <img src={slide5} alt="" className="rounded-lg w-full object-cover  h-[390px]" />
          <h3 className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-2xl md:text-4xl uppercase text-white font-bold drop-shadow-lg text-center">
            Salads
          </h3>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <img src="https://www.shutterstock.com/image-photo/fried-salmon-steak-cooked-green-600nw-2489026949.jpg" alt="" className="rounded-lg w-full object-cover  h-[390px]" />
          <h3 className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-xl md:text-xl uppercase text-white font-bold drop-shadow-lg text-center">
           Grilled Dry-Aged
          </h3>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <img src="https://hips.hearstapps.com/hmg-prod/images/comfort-food-recipes-66d9e90d4efa9.jpg?crop=0.6666666666666667xw:1xh;center,top&resize=1200:*" alt="" className="rounded-lg w-full object-cover  h-[390px]" />
          <h3 className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-2xl md:text-4xl uppercase text-white font-bold drop-shadow-lg text-center">
          Sup
          </h3>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <img src="https://media.cnn.com/api/v1/images/stellar/prod/140430115517-06-comfort-foods.jpg?q=w_1110,c_fill" alt="" className="rounded-lg w-full object-cover  h-[390px]" />
          <h3 className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-2xl md:text-4xl uppercase text-white font-bold drop-shadow-lg text-center">
        dishes
          </h3>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <img src="https://images.immediate.co.uk/production/volatile/sites/30/2022/08/Corndogs-7832ef6.jpg?quality=90&resize=556,505" alt="" className="rounded-lg w-full object-cover  h-[390px]" />
          <h3 className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-xl md:text-4xl uppercase text-white font-bold drop-shadow-lg text-center">
       Cuisines recipes
          </h3>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Category;
