import { Helmet } from "react-helmet-async";
import Banner from "./Banner/Banner";
import BistroDetails from "./Bistro-Boss-Details/BistroDetails";
import Category from "./Category/Category";
import Featured from "./Featured/Featured";
import PopularMenu from "./PopularMenu/PopularMenu";
import Testimonials from "./Testimonials/Testimonials";
import CallUs from "./CallUs/CallUs";
import ChefRecommends from "./ChefRecommends/ChefRecommends";


const Home = () => {
    return (
        <div>
             <Helmet><title>Mozzo | Home</title></Helmet>
            <Banner></Banner>
            <Category></Category>
            <BistroDetails></BistroDetails>
            <PopularMenu></PopularMenu>
            <CallUs></CallUs>
            <ChefRecommends/>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;