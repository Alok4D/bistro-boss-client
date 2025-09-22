import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuImg from '../../../assets/menu/banner3.jpg'
import dessertImg from '../../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
import saladImg from '../../../assets/menu/salad-bg.jpg'
import soupImg from '../../../assets/menu/soup-bg.jpg'
import useMenu from "../../../Hooks/UseMenu";
import SectionTitle from "../../../Components/SectionsTitle/SectionTitle";
import MenuCategory from "./MenuCategory/MenuCategory";



const Menu = () => {
    const [menu] = useMenu();
    const desserts = menu.filter(item => item.category === 'dessert'); 
    const soup = menu.filter(item => item.category === 'soup'); 
    const salad = menu.filter(item => item.category === 'salad'); 
    const pizza = menu.filter(item => item.category === 'pizza'); 
    const offered = menu.filter(item => item.category === 'offered'); 
    return (
        <div className="">
            <Helmet><title>Mozzo | Menu</title></Helmet>
            <Cover img={menuImg} title="Our Menu"></Cover>
            <div className="container mx-auto">
            <SectionTitle subHeading="Don't Miss" heading="TODAY'S OFFER"></SectionTitle>
            <MenuCategory items={offered}></MenuCategory>
            <MenuCategory items={desserts} title="dessert" img={dessertImg} ></MenuCategory>
            <MenuCategory items={pizza} title="pizza" img={pizzaImg} ></MenuCategory>
            <MenuCategory items={salad} title="salad" img={saladImg} ></MenuCategory>
            <MenuCategory items={soup} title="soup" img={soupImg} ></MenuCategory>
            </div>

        </div>
    );
};

export default Menu;