import { useContext } from "react";
import MyContext from "./ThemeContext";

const Footer = () => {
  const { isDarkMode } = useContext(MyContext);
  return (
    <footer
      className={`text-gray-700 py-8 ${
        isDarkMode ? "text-black bg-white" : "text-white bg-[#202028]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/3 px-4 mb-8 md:mb-0">
            <h3 className="text-lg font-semibold mb-3">About FitPeo</h3>
            <p className="text-sm">
              Your trusted source for healthy food delivery, providing
              nutritious options to keep you fit and energized.
            </p>
          </div>

          <div className="w-full md:w-1/3 px-4 mb-8 md:mb-0">
            <h3 className="text-lg font-semibold mb-3 ">Quick Links</h3>
            <ul className="text-sm space-y-2">
              <li>
                <a href="#" className="hover:text-blue-500 transition">
                  Dashboard
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500 transition">
                  Orders
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500 transition">
                  Activity
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500 transition">
                  Finance
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500 transition">
                  Deliveries
                </a>
              </li>
            </ul>
          </div>

          <div className="w-full md:w-1/3 px-4">
            <h3 className="text-lg font-semibold mb-3 ">Contact Us</h3>
            <p className="text-sm">Email: support@fitpeo.com</p>
            <p className="text-sm">Phone: +1 (234) 567-890</p>
            <p className="text-sm">Address: 123 Healthy St, Wellness City</p>
          </div>
        </div>

        <div className="border-t border-gray-300 mt-8 pt-4 text-center">
          <p className="text-sm text-gray-500">
            &copy; 2024 FitPeo. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
