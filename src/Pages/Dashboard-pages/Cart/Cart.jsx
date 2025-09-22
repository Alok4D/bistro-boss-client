import { FaTrashAlt } from "react-icons/fa";
import UseCart from "../../../Hooks/UseCart";
import Swal from "sweetalert2";
import UseAxiosSecure from "../../../Hooks/UseAxiosSecure";
import { Link } from "react-router-dom";

const Cart = () => {
  const axiosSecure = UseAxiosSecure();
  const [cart, refetch] = UseCart();
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#ff5200",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/carts/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Item has been removed from your cart.",
              icon: "success",
              confirmButtonColor: "#ff5200",
            });
          }
        });
      }
    });
  };

  return (
    <div className="p-6 md:p-10 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
          🛒 Items in Cart: <span className="text-[#ff5200]">{cart.length}</span>
        </h2>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
          💰 Total Price: <span className="text-[#ff5200]">${totalPrice.toFixed(2)}</span>
        </h2>

        {cart.length ? (
          <Link to="/dashboard/payment">
            <button className="px-6 py-2 rounded-lg bg-[#ff5200] text-white font-semibold shadow-md hover:bg-orange-600 transition duration-300">
              Pay Now
            </button>
          </Link>
        ) : (
          <button
            disabled
            className="px-6 py-2 rounded-lg bg-gray-300 text-white font-semibold shadow-md cursor-not-allowed"
          >
            Pay Now
          </button>
        )}
      </div>

      {/* Table */}
      <div className="overflow-x-auto bg-white rounded-xl shadow-lg">
        <table className="min-w-full divide-y divide-gray-200 text-sm text-gray-700">
          <thead className="bg-[#ff5200] text-white">
            <tr>
              <th className="px-4 py-3 text-left">#</th>
              <th className="px-4 py-3 text-left">Image</th>
              <th className="px-4 py-3 text-left">Name</th>
              <th className="px-4 py-3 text-left">Price</th>
              <th className="px-4 py-3 text-left">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {cart.map((item, index) => (
              <tr key={item._id} className="hover:bg-gray-50 transition">
                <td className="px-4 py-4">{index + 1}</td>
                <td className="px-4 py-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-12 w-12 rounded-lg object-cover shadow-md"
                  />
                </td>
                <td className="px-4 py-4 font-medium">{item.name}</td>
                <td className="px-4 py-4 text-[#ff5200] font-semibold">
                  ${item.price.toFixed(2)}
                </td>
                <td className="px-4 py-4">
                  <button
                    onClick={() => handleDelete(item._id)}
                    className="text-red-500 hover:text-red-700 transition"
                  >
                    <FaTrashAlt size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* No items message */}
        {cart.length === 0 && (
          <div className="text-center py-12 text-gray-500 text-lg font-medium">
            Your cart is empty 🛒
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
