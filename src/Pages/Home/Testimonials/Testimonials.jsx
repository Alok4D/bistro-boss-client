import SectionTitle from "../../../Components/SectionsTitle/SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { useEffect, useState } from "react";

import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const Testimonials = () => {
    const [reviews, setReviews] = useState([]);
    console.log(reviews);
    useEffect( () => {
        fetch('https://bistro-boss-server-wheat-one.vercel.app/reviews')
        .then(res => res.json())
        .then(data => setReviews(data))
    }, [])
    return (
        <section className="my-20">
            <SectionTitle
            subHeading={"What our Client Say"}
            heading={"Testimonials"}></SectionTitle>
               <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {/* <SwiperSlide>Slide 1</SwiperSlide> */}
       {
        reviews.map(review => <SwiperSlide key={review._id}>
            <div className="flex flex-col items-center my-26 mx-24">
            <Rating
      style={{ maxWidth: 180 }}
      value={review.Rating}
      readOnly
    />
                <p className="py-6 text-center">{review.details}</p>
                <h3 className="text-2xl text-orange-400">{review.name}</h3>
            </div>
        </SwiperSlide>)
       }
      </Swiper>
        </section>
    );
};

export default Testimonials;