import { useParams } from "react-router-dom";
import SectionTitle from "../../../Components/SectionsTitle/SectionTitle";
import { useQuery } from "@tanstack/react-query";
import UseAxiosPublic from "../../../Hooks/UseAxiosPublic";
// import { useForm } from "react-hook-form";
// import UseAxiosPublic from "../../../Hooks/UseAxiosPublic";
// import UseAxiosSecure from "../../../Hooks/UseAxiosSecure";
// import Swal from "sweetalert2";

// const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
// const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;


const UpdateItem = () => {
    const axiosPublic = UseAxiosPublic();
    const {id} = useParams();
  const {data: item = {}} = useQuery({
    queryKey: ['item', id],
    queryFn: async () => {
        const {data} = await axiosPublic(`/menu/${id}`)
        return data;
    }
  })
    console.log(item);

    // const { register, handleSubmit, reset } = useForm();
    // const axiosPublic = UseAxiosPublic();
    // const axiosSecure = UseAxiosSecure();

    // const onSubmit = async (data) => {
    //   console.log(data);
     
    //   const imageFile = { image: data.image[0] }
    //   const res = await axiosPublic.post(image_hosting_api, imageFile, {
    //       headers: {
    //           'Content-Type': 'multipart/form-data'
    //       }
    //   });
    //   if(res.data.success){
         
    //       const menuItem = {
    //           name: data.name,
    //           category: data.category,
    //           price: parseFloat(data.price),
    //           recipe: data.recipe,
    //           image: res.data.data.display_url
    //       }
    //       // 
    //       const menuRes = await axiosSecure.post('/menu', menuItem);
    //       console.log(menuRes.data)
    //       if(menuRes.data.insertedId){
    //           reset();
    //           Swal.fire({
    //               position: "top-end",
    //               icon: "success",
    //               title: `${data.name} is added to the Menu!`,
    //               showConfirmButton: false,
    //               timer: 1500
    //             });
    //       }
    //   }
    //   console.log('with image url', res.data);
    // };
    
    return (
        <div>
            <SectionTitle heading="Update an Item" subHeading="Refresh info"></SectionTitle>
            <div>
            <div>
      
      </div>
            </div>
        </div>
    );
};

export default UpdateItem;