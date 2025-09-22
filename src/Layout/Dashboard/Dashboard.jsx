import {
  FaAd,
  FaBook,
  FaCalendar,
  FaEnvelope,
  FaHome,
  FaList,
  FaSearch,
  FaShoppingCart,
  FaUser,
  FaUtensils,
} from "react-icons/fa";
import { Link, NavLink, Outlet } from "react-router-dom";
import UseCart from "../../Hooks/UseCart";
import UseAdmin from "../../Hooks/UseAdmin";

const Dashboard = () => {
  const [cart] = UseCart();
  const [isAdmin] = UseAdmin();

  const navLinkClass =
    "flex items-center gap-3 px-4 py-2 rounded-md font-medium transition duration-200 hover:bg-[#ff5200]/80 hover:text-white";

  const activeClassName = "bg-[#ff5200] text-white";

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-gradient-to-b from-[#f76b2b] to-orange-400 text-white shadow-lg p-4">
       <Link to="/">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold">🍽️ Mozzo Bazar</h2>
          <p className="text-sm text-orange-100 mt-1">Dashboard</p>
        </div>
       </Link>

        <nav>
          <ul className="space-y-2">
            {isAdmin ? (
              <>
                <li>
                  <NavLink
                    to="/dashboard/adminHome"
                    className={({ isActive }) =>
                      `${navLinkClass} ${isActive ? activeClassName : ""}`
                    }
                  >
                    <FaHome /> Admin Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/addItems"
                    className={({ isActive }) =>
                      `${navLinkClass} ${isActive ? activeClassName : ""}`
                    }
                  >
                    <FaUtensils /> Add Items
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/manageItems"
                    className={({ isActive }) =>
                      `${navLinkClass} ${isActive ? activeClassName : ""}`
                    }
                  >
                    <FaList /> Manage Items
                  </NavLink>
                </li>
                {/* <li>
                  <NavLink
                    to="/dashboard/booking"
                    className={({ isActive }) =>
                      `${navLinkClass} ${isActive ? activeClassName : ""}`
                    }
                  >
                    <FaBook /> Manage Bookings
                  </NavLink>
                </li> */}
                <li>
                  <NavLink
                    to="/dashboard/users"
                    className={({ isActive }) =>
                      `${navLinkClass} ${isActive ? activeClassName : ""}`
                    }
                  >
                    <FaUser /> All Users
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <li>
                  <NavLink
                    to="/dashboard/userHome"
                    className={({ isActive }) =>
                      `${navLinkClass} ${isActive ? activeClassName : ""}`
                    }
                  >
                    <FaHome /> User Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/paymentHistory"
                    className={({ isActive }) =>
                      `${navLinkClass} ${isActive ? activeClassName : ""}`
                    }
                  >
                    <FaCalendar /> Payment History
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/cart"
                    className={({ isActive }) =>
                      `${navLinkClass} ${isActive ? activeClassName : ""}`
                    }
                  >
                    <FaShoppingCart /> My Cart
                    <span className="ml-auto bg-white text-[#ff5200] text-xs font-bold px-2 py-0.5 rounded-full">
                      {cart.length}
                    </span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/review"
                    className={({ isActive }) =>
                      `${navLinkClass} ${isActive ? activeClassName : ""}`
                    }
                  >
                    <FaAd /> Review
                  </NavLink>
                </li>
              </>
            )}

            {/* Shared Nav Links */}
            <div className="divider my-4 border-white/20" />

            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `${navLinkClass} ${isActive ? activeClassName : ""}`
                }
              >
                <FaHome /> Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/order/salad"
                className={({ isActive }) =>
                  `${navLinkClass} ${isActive ? activeClassName : ""}`
                }
              >
                <FaSearch /> Menu
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `${navLinkClass} ${isActive ? activeClassName : ""}`
                }
              >
                <FaEnvelope /> Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 md:p-10 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default Dashboard;
