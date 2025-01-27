import { Helmet } from "react-helmet-async";
import Banner from "./Banner/Banner";
import BistroDetails from "./Bistro-Boss-Details/BistroDetails";
import Category from "./Category/Category";
import Featured from "./Featured/Featured";
import PopularMenu from "./PopularMenu/PopularMenu";
import Testimonials from "./Testimonials/Testimonials";


const Home = () => {
    return (
        <div>
             <Helmet><title>Bistro Boss | Home</title></Helmet>
            <Banner></Banner>
            <Category></Category>
            <BistroDetails></BistroDetails>
            <PopularMenu></PopularMenu>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;