import {
  FaFacebookF,
  FaTwitter,
  FaPinterestP,
  FaInstagram,
  FaCcVisa,
  FaCcApplePay,
  FaLock,
} from "react-icons/fa";
import footerLogo from "../../../../../../src/assets/navLogo/plant 1.png";
import masterCardLogo from "../../../../../../src/assets/footerImg/Mastercard.png";

// No footerBg image per your request

export default function HomeOutFooter() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your subscription logic here
    alert("Subscribed!");
  };

  return (
    <footer className="w-full bg-[#111111] text-gray-300 relative overflow-hidden">
      <div className="relative z-10">
        <section className="w-full bg-[#f7f7f7] py-6 px-6">
          <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-6">
            {/* Left Content */}
            <div className="text-center lg:text-left lg:w-1/2">
              <h2 className="text-xl lg:text-2xl font-semibold text-black mb-1">
                Subscribe our Newsletter
              </h2>
              <p className="text-sm text-gray-600">
                Pellentesque eu nibh eget mauris congue mattis mattis nec
                tellus. Phasellus imperdiet elit eu magna.
              </p>
            </div>

            {/* Right Content */}
            <div className="flex flex-col lg:flex-row justify-between gap-4 w-full lg:w-1/2">
              {/* Input + Button */}
              <form
                className="flex w-full max-w-lg"
                onSubmit={handleSubmit}
              >
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-grow px-4 py-2 text-sm text-gray-800 bg-white border border-gray-300 rounded-l-full focus:outline-none focus:ring-2 focus:ring-green-600"
                  required
                />
                <button
                  type="submit"
                  className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 text-sm font-medium rounded-r-full transition-all"
                >
                  Subscribe
                </button>
              </form>

              {/* Social Icons */}
              <div className="flex items-center gap-3 text-gray-600 text-lg">
                <a
                  href="#"
                  className="bg-green-600 text-white p-2 rounded-full hover:bg-green-700"
                  aria-label="Facebook"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="#"
                  className="hover:text-green-600"
                  aria-label="Twitter"
                >
                  <FaTwitter />
                </a>
                <a
                  href="#"
                  className="hover:text-green-600"
                  aria-label="Pinterest"
                >
                  <FaPinterestP />
                </a>
                <a
                  href="#"
                  className="hover:text-green-600"
                  aria-label="Instagram"
                >
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Main Footer columns */}
        <div className="container mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8">
          {/* Logo + About */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 text-white text-2xl font-bold mb-4">
              <img src={footerLogo} alt="Logo" className="h-8 w-8" />
              Ecobazar
            </div>
            <p className="text-sm leading-relaxed mb-6">
              Morbi cursus porttitor enim lobortis molestie. Duis gravida turpis
              dui, eget bibendum magn.
            </p>
            <div className="flex items-center gap-4 text-lg text-white">
              <a
                href="#"
                className="bg-green-600 p-2 rounded-full hover:bg-green-700"
              >
                <FaFacebookF />
              </a>
              <a href="#" className="hover:text-green-500">
                <FaTwitter />
              </a>
              <a href="#" className="hover:text-green-500">
                <FaPinterestP />
              </a>
              <a href="#" className="hover:text-green-500">
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* My Account section */}
          <div className="flex flex-col gap-4">
           <h3 className="text-white font-semibold mb-4 border-b-2 border-green-500 pb-1 inline-block w-[35%]">
  My Account
</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-white">
                  My Account
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Order History
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Shopping Cart
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Wishlist
                </a>
              </li>
            </ul>
          </div>

          {/* Helps section */}
          <div className="flex flex-col gap-4">
            <h3 className="text-white font-semibold mb-4 border-b-2 border-green-500 pb-1 inline-block w-[35%]">
              Helps
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-white">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Proxy / Info section */}
          <div className="flex flex-col gap-4">
            <h3 className="text-white font-semibold mb-4 border-b-2 border-green-500 pb-1 inline-block w-[35%]">
              Proxy
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-white">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Shop
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Product
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Track Order
                </a>
              </li>
            </ul>
          </div>

          {/* Categories section (instead of Download Mobile App) */}
          <div className="flex flex-col gap-4">
            <h3 className="text-white font-semibold mb-4 border-b-2 border-green-500 pb-1 inline-block w-[35%]">
              Categories
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-white">
                  Fruit & Vegetables
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Meat & Fish
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Bread & Bakery
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Beauty & Health
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-700 px-6 py-4">
          <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400 text-center md:text-left">
              Ecobazar eCommerce © {new Date().getFullYear()}. All Rights
              Reserved
            </p>
            <div className="flex items-center gap-6 mt-2 md:mt-0">
              <FaCcApplePay className="text-2xl text-white" />
              <FaCcVisa className="text-2xl text-white" />
              <img
                src={masterCardLogo}
                alt="Mastercard"
                className="h-6 w-auto"
              />
              <div className="flex items-center gap-1 border border-gray-400 rounded px-2 py-1 text-xs bg-gray-800">
                <FaLock className="text-green-500 text-sm" />
                <span className="font-medium text-gray-200">
                  Secure Payment
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
