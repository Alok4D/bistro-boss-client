import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import UseCart from "../../../Hooks/UseCart";
import { FaClipboardList, FaMoneyCheckAlt, FaShoppingCart } from "react-icons/fa";


const UserHome = () => {
  const { user } = useContext(AuthContext);
  const [cart] = UseCart();

  return (
    <div className="p-6 md:p-10 bg-gray-50 min-h-screen">
      {/* Welcome Header */}
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-[#ff5200] mb-2">
          Welcome, {user?.displayName || "User"}! 👋
        </h1>
        <p className="text-gray-600 text-base">
          Here’s your personalized dashboard overview.
        </p>
      </div>

      {/* Dashboard Overview Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Orders Card */}
        <div className="bg-white shadow-md rounded-xl p-6 flex items-center gap-4 hover:shadow-xl transition duration-300">
          <FaClipboardList className="text-3xl text-[#ff5200]" />
          <div>
            <h2 className="text-xl font-semibold text-gray-800">Total Orders</h2>
            <p className="text-gray-500 text-sm">12 Orders Completed</p>
          </div>
        </div>

        {/* Cart Card */}
        <div className="bg-white shadow-md rounded-xl p-6 flex items-center gap-4 hover:shadow-xl transition duration-300">
          <FaShoppingCart className="text-3xl text-[#ff5200]" />
          <div>
            <h2 className="text-xl font-semibold text-gray-800">Cart Items</h2>
            <p className="text-gray-500 text-sm">{cart.length} items in cart</p>
          </div>
        </div>

        {/* Payments Card */}
        <div className="bg-white shadow-md rounded-xl p-6 flex items-center gap-4 hover:shadow-xl transition duration-300">
          <FaMoneyCheckAlt className="text-3xl text-[#ff5200]" />
          <div>
            <h2 className="text-xl font-semibold text-gray-800">Payments</h2>
            <p className="text-gray-500 text-sm">3 Transactions</p>
          </div>
        </div>
      </div>

   
    </div>
  );
};

export default UserHome;
