import { useQuery } from "@tanstack/react-query";
import UseAxiosPublic from "./UseAxiosPublic";
// import { useEffect, useState } from "react";

const useMenu = () => {
    const axiosPublic = UseAxiosPublic();

    // const [menu, setMenu] = useState([]);
    // const [loading, setLoading] = useState(true);

    // useEffect(() => {
    //     fetch('https://bistro-boss-server-wheat-one.vercel.app/menu')
    //     .then(res => res.json())
    //     .then(data =>{
    //         setMenu(data);
    //         setLoading(false);
    //     });
    // }, [])

    const {data: menu = [], isPending: loading, refetch} = useQuery({
        queryKey: ['menu'],
        queryFn: async() => {
            const res = await axiosPublic.get('/menu');
            return res.data;
        }
    })

    return [menu, loading, refetch]
}
export default useMenu;