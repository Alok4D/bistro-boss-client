import { FaAd, FaBook, FaCalendar, FaEnvelope, FaHome, FaList, FaSearch, FaShoppingCart, FaUser, FaUtensils, FaVoicemail } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import UseCart from "../../Hooks/UseCart";
import UseAdmin from "../../Hooks/UseAdmin";


const Dashboard = () => {
    const [cart] = UseCart();
    console.log(cart);
    
    // TODO: get isAdmin value from the database
    const [isAdmin] = UseAdmin();


    return (
        <div className="flex">
              {/* dashboard side bar */}
            <div className="w-64 min-h-screen bg-orange-400">
                <ul className="menu p-4">
                  {
                    isAdmin ?  <>
                      <li> <NavLink to="/dashboard/adminHome"><FaHome></FaHome>Admin Home</NavLink></li>
                    <li> <NavLink to="/dashboard/addItems"><FaUtensils></FaUtensils>Add Items</NavLink></li>
                    <li> <NavLink to="/dashboard/manageItems"><FaList></FaList>manage Items</NavLink></li>
                    <li> <NavLink to="/dashboard/booking"><FaBook></FaBook>Manage Bookings</NavLink></li>
                    <li> <NavLink to="/dashboard/users"><FaUser></FaUser>All Users</NavLink></li>
                    </>
                    :
                    <>
                      <li> <NavLink to="/dashboard/userHome"><FaHome></FaHome>User Home</NavLink></li>
                    <li> <NavLink to="/dashboard/paymentHistory"><FaCalendar></FaCalendar>Payment History</NavLink></li>
                    <li> <NavLink to="/dashboard/cart"><FaShoppingCart></FaShoppingCart>My Cart ({cart.length})</NavLink></li>
                    <li> <NavLink to="/dashboard/review"><FaAd></FaAd>Review</NavLink></li>
                    <li> <NavLink to="/dashboard/paymentHistory"><FaList></FaList>Payment History</NavLink></li>
                    </>
                  }

             {/* Shared nav links */}
                    <div className="divider"></div>
                    <li> <NavLink to="/"><FaHome></FaHome> Home</NavLink></li>
                    <li> <NavLink to="/order/salad"><FaSearch></FaSearch>Menu</NavLink></li>
                    <li> <NavLink to="/order/contact"><FaEnvelope></FaEnvelope>Contact</NavLink></li>
                  
                </ul>
            </div>
            {/* dashboard content */}
            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;