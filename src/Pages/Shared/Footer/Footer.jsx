import {
  FaFacebookF,
  FaTwitter,
  FaPinterestP,
  FaInstagram,
  FaCcVisa,
  FaCcApplePay,
  FaLock,
} from "react-icons/fa";
import { SiGoogleplay, SiAppstore } from "react-icons/si";
import masterCardLogo from "../../../assets/all/footerImg/Mastercard.png";
import footerBg from "../../../../src/assets/all/footerImg/541914333_1323336215865136_5356251598377798544_n.png";

export default function Footer() {
  return (
    <footer
      className="w-full bg-[#111111] text-gray-300 relative overflow-hidden"
      style={{
        backgroundImage: `url(${footerBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Main Footer */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-10 relative z-10">
        {/* Logo + About */}
        <div>
          <h2 className="flex items-center gap-2 text-white text-2xl font-bold mb-4">
            <img
              src="https://mozzo.vercel.app/assets/img/logo/logo-white.png"
              alt="Logo"
              className="h-8"
            />
          </h2>
          <p className="text-sm leading-relaxed mb-6">
            Morbi cursus porttitor enim lobortis molestie. Duis gravida turpis
            dui, eget bibendum magn.
          </p>
          {/* Social Icons */}
          <div className="flex items-center gap-4 text-lg text-white">
            <a href="#" className="bg-green-600 p-2 rounded-full hover:bg-green-700">
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

        {/* My Account & Helps */}
        <div className="sm:col-span-1 lg:col-span-2 flex flex-col sm:flex-row gap-8">
          <div className="flex-1">
            <h3 className="text-white font-semibold mb-4 border-b-2 border-green-500 pb-1">
              My Account
            </h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#">My Account</a></li>
              <li><a href="#">Order History</a></li>
              <li><a href="#">Shopping Cart</a></li>
              <li><a href="#">Wishlist</a></li>
            </ul>
          </div>
          <div className="flex-1">
            <h3 className="text-white font-semibold mb-4 border-b-2 border-green-500 pb-1">
              Helps
            </h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#">Contact</a></li>
              <li><a href="#">FAQs</a></li>
              <li><a href="#">Terms & Condition</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        {/* Proxy */}
        <div>
          <h3 className="text-white font-semibold mb-4 border-b-2 border-green-500 pb-1">
            Proxy
          </h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#">About</a></li>
            <li><a href="#">Shop</a></li>
            <li><a href="#">Product</a></li>
            <li><a href="#">Track Order</a></li>
          </ul>
        </div>

        {/* Download App */}
        <div>
          <h3 className="text-white font-semibold mb-4 border-b-2 border-green-500 pb-1">
            Download Mobile App
          </h3>
          <div className="flex flex-col gap-3">
            <a
              href="#"
              className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-200 w-fit"
            >
              <SiAppstore className="text-xl" /> App Store
            </a>
            <a
              href="#"
              className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-200 w-fit"
            >
              <SiGoogleplay className="text-xl" /> Google Play
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 px-4 sm:px-6 py-4 relative z-10">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          {/* Copyright */}
          <p className="text-sm text-gray-400">
            Mozzo © 2025. All Rights Reserved
          </p>

          {/* Payment Icons */}
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6">
            <div className="flex items-center gap-3">
              <FaCcApplePay className="text-2xl" />
              <FaCcVisa className="text-2xl" />
              <img src={masterCardLogo} alt="Mastercard" className="h-6 w-auto" />
            </div>
            <div className="flex items-center gap-1 border border-gray-500 rounded px-2 py-1 text-xs bg-gray-800">
              <FaLock className="text-green-500" />
              <span className="font-medium text-gray-200">Secure Payment</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
