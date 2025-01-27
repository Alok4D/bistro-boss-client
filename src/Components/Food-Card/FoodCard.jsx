import Swal from "sweetalert2";
import UseAuth from "../../Hooks/UseAuth";
import { useLocation, useNavigate } from "react-router-dom";

import UseAxiosSecure from "../../Hooks/UseAxiosSecure";
import UseCart from "../../Hooks/UseCart";



const FoodCard = ({item}) => {

    const {name, image, price, recipe, _id} = item;
    const {user} = UseAuth();
    console.log(user);
    const navigate = useNavigate();
    const location = useLocation();
    const axiosSecure = UseAxiosSecure();
    const [, refetch] = UseCart();

    const handleAddToCart = () => {
     if(user && user.email){
      // console.log(user.email, food);
      const cartItem = {
        menuId: _id,
        email: user.email,
        name,
        image,
        price
      }
      axiosSecure.post('/carts', cartItem)
      .then(res => {
        console.log(res.data)
        if(res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${name} added to your cart`,
            showConfirmButton: false,
            timer: 1500
          });
          // refetch cart to update to the cart
          refetch();
        }
      })
     }
     else{
      Swal.fire({
        title: "Your are not logged In",
        text: "Please login add to the cart?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Login!"
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/login', {state: {from: location}});
        }
      });
     }
    }
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={image} alt="Shoes" /></figure>
  <p className="bg-slate-900 text-white absolute right-0  mr-4 mt-4 px-4">${price}</p>
  <div className="card-body flex flex-col items-center">
    <h2 className="card-title">{name}</h2>
    <p>{recipe}</p>
    <div className="card-actions justify-end">
    <button
    onClick={handleAddToCart}
     className="btn btn-outline bg-slate-200 border-orange-400 border-0 border-b-4 mt-4">Add to Cart</button>
    </div>
  </div>
</div>
    );
};

export default FoodCard;