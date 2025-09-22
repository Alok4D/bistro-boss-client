import { useQuery } from "@tanstack/react-query";
import UseAxiosPublic from "./UseAxiosPublic";


const useMenu = () => {
    const axiosPublic = UseAxiosPublic();


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