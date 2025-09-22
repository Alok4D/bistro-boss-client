import axios from "axios";
import { useNavigate } from "react-router-dom";
import UseAuth from "./UseAuth";


export const axiosSecure = axios.create({
    baseURL: 'https://bistro-boss-server-wheat-one.vercel.app/'
})
const UseAxiosSecure = () => {

    const navigate = useNavigate();
    const {logOut} = UseAuth();

    axiosSecure.interceptors.request.use(function(config){
        const token = localStorage.getItem('access-token')
        // console.log('request stopped by interceptors', token);
        config.headers.authorization = `Bearer ${token}`;
        return config;
    }, function(error) {
        // Do something with req error
        return Promise.reject(error);
    })

    // add a response interceptors 401 & 403
    axiosSecure.interceptors.response.use(function(response) {
        return response;
    }, async (error) => {
        const status = error.response.status;
        // console.log('Status Error in the interceptors', status);
        // for 401 or 403 logOut the user and move the user to the login page
        if(status === 401 || status === 403) {
            await logOut();
            navigate('/login');
        }
        return Promise.reject(error);
    })


   return axiosSecure;
};

export default UseAxiosSecure;