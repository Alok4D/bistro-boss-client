
import SectionTitle from "../../../Components/SectionsTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItemsCard/MenuItem";
import useMenu from "../../../Hooks/UseMenu";


const PopularMenu = () => {
    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === 'popular')
    // useEffect(() => {
    //     fetch('menu.json')
    //     .then(res => res.json())
    //     .then(data => {
    //         const popularItems = data.filter(item => item.category === 'popular');
    //         setMenu(popularItems)})
    // }, [])
    return (
        <section className="mb-12">
            <SectionTitle
            heading="Popular Menu"
            subHeading="Popular Items"
            ></SectionTitle>
            <div className="grid md:grid-cols-2 gap-10">
                {
                    popular.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
            <div className="flex justify-center items-center mt-7">
            <button className="btn btn-outline border-0 border-b-4 mt-4 uppercase text-[20px]">View Full Menu</button>
            </div>
        </section>
    );
};

export default PopularMenu;