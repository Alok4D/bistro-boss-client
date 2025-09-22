import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import { FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import UseCart from "../../../Hooks/UseCart";
import UseAdmin from "../../../Hooks/UseAdmin";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false); // mobile dropdown toggle

  const [isAdmin] = UseAdmin();
  const { user, logOut } = useContext(AuthContext);
  const [cart] = UseCart();

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch(console.error);
  };

  const navOptions = (
    <>
      <li>
        <Link to="/" className="hover:text-yellow-400 transition" >
          Home
        </Link>
      </li>
      <li>
        <Link className="hover:text-yellow-400 transition" to="/menu">
          Our Menu
        </Link>
      </li>
      <li>
        <Link className="hover:text-yellow-400 transition" to="/order/salad">
          Our Shop
        </Link>
      </li>
      <li>
        <Link className="hover:text-yellow-400 transition" to="/contact">
          Contact Us
        </Link>
      </li>
      <li className="relative">
        <Link to="dashboard/cart" className="flex items-center justify-center">
          <button className="relative flex items-center justify-center w-10 h-10 rounded-full bg-[#ff5200] text-white transition duration-300">
            <FaShoppingCart size={20} />
            {/* Badge */}
            {cart.length > 0 && (
              <span className="absolute -top-1 -right-1  bg-[#ff5200] hover:bg-[#ff5200] text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-white">
                {cart.length}
              </span>
            )}
          </button>
        </Link>
      </li>
    </>
  );

  return (
    <nav className="fixed top-0 z-50 w-full bg-[#ff5200] bg-opacity-90 text-white shadow-lg backdrop-blur-md px-2 lg:px-0 md:px-2">
      <div className="container mx-auto flex items-center justify-between sm:px-4 lg:px-0 md:px-2 py-3">
        {/* Left: Logo */}
        <Link
          to="/"
          className="flex flex-col leading-tight select-none cursor-pointer"
        >
          <img
            src="https://mozzo.vercel.app/assets/img/logo/logo-white.png"
            alt=""
          />
        </Link>

        {/* Center: Desktop Menu */}
        <ul className="hidden lg:flex justify-center items-center gap-8 text-lg font-medium">
          {navOptions}
        </ul>

        {/* Right side: User & Hamburger */}
        <div className="flex items-center gap-4">
          {user ? (
            <>
              {/* User Dropdown */}
              <div className="dropdown dropdown-end">
                <label
                  tabIndex={0}
                  className="btn btn-ghost btn-circle avatar border-2 border-yellow-400"
                >
                  <div className="w-10 rounded-full overflow-hidden">
                    <img src={user.photoURL} alt="User Avatar" />
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu p-3 shadow bg-base-100 rounded-box w-52 text-black"
                >
                  <li>
                    <Link
                      to={
                        isAdmin ? "/dashboard/adminHome" : "/dashboard/userHome"
                      }
                      className="hover:text-yellow-400 transition"
                    >
                      Dashboard
                    </Link>
                  </li>
                  <li>
                    <button
                      onClick={handleLogOut}
                      className="hover:text-red-500 transition"
                    >
                      Log Out
                    </button>
                  </li>
                </ul>
              </div>
            </>
          ) : (
            <Link
              to="/login"
              className="btn bg-[#ff5200] hover:bg-orange-500 text-white font-semibold px-4 py-2 rounded-md"
            >
              Login
            </Link>
          )}

          {/* Mobile Hamburger */}
          <div className="lg:hidden relative">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white text-2xl z-50"
            >
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>

            {/* Mobile Dropdown */}
            {isOpen && (
              <ul className="absolute right-0 mt-3 w-52  bg-black text-white shadow-lg rounded-lg p-4 flex flex-col gap-3">
                {navOptions}
                {user && (
                  <>
                    <li className="">
                      <Link
                        to={
                          isAdmin
                            ? "/dashboard/adminHome"
                            : "/dashboard/userHome"
                        }
                      >
                        Dashboard
                      </Link>
                    </li>
                    <li>
                      <button onClick={handleLogOut}>Log Out</button>
                    </li>
                  </>
                )}
              </ul>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
