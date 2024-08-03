import { useContext, useState } from "react";
import { FaSearch, FaBell, FaEnvelope, FaUserCircle } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import { GiHamburger } from "react-icons/gi";
import { MdOutlineSettings } from "react-icons/md";
import { MdInsertChartOutlined } from "react-icons/md";
import { BsClipboard2Check } from "react-icons/bs";
import { Link } from "react-router-dom";
import { IoBagCheckOutline } from "react-icons/io5";
import { BiWalletAlt } from "react-icons/bi";
import Toggle from "./togglebutton";
import MyContext from "./ThemeContext";

const Header = () => {
  const { isDarkMode } = useContext(MyContext);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("dashboard");
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const onClickOption = (option) => {
    setActiveItem(option);
    setIsMobileMenuOpen(false);
  };

  return (
    <div
      className={`bg-[#202028] text-white p-4 flex justify-between items-center relative  ${
        isDarkMode ? "bg-white" : "bg-black"
      }`}
    >
      <div
        className={`flex items-center space-x-2 p-2 rounded w-1/2 lg:w-[20%] ${
          isDarkMode ? "bg-[#f1eff8]" : "bg-gray-700"
        }`}
      >
        <FaSearch className="text-gray-500" />
        <input
          type="text"
          placeholder="Search"
          className={`${
            isDarkMode ? "text-black" : "text-white"
          } bg-transparent outline-none w-full`}
        />
      </div>
      <div className="flex items-center space-x-4">
        <Toggle />
        <div className="items-center space-x-4 hidden lg:flex">
          <Link to={"/messages"}>
            <div className="bg-[#44454a] p-2 rounded-full">
              <FaEnvelope color="#ffffff" className="cursor-pointer" />
            </div>
          </Link>
          <Link to={"/notificatons"}>
            <div className="bg-[#44454a] p-2 rounded-full">
              <FaBell color="#ffffff" className="cursor-pointer" />
            </div>
          </Link>
          <Link to={"/settings"}>
            <div className="bg-[#44454a] p-2 rounded-full">
              <MdOutlineSettings color="#ffffff" className="cursor-pointer" />
            </div>
          </Link>
        </div>
        <Link to="/profile">
          <FaUserCircle
            color={`${isDarkMode ? "44454a" : "white"}`}
            className="cursor-pointer w-6 h-6 lg:w-10 lg:h-10"
          />
        </Link>
        <div
          className="lg:hidden flex items-center transform transition-transform duration-250 ease-in-out active:scale-110"
          onClick={toggleMobileMenu}
        >
          <GiHamburger size={30} color="yellow" />
        </div>
      </div>
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          className={`lg:hidden absolute top-[73px] right-0 py-10 ${
            isDarkMode ? "bg-white" : "bg-[#141415]"
          } text-white w-48 rounded shadow-lg p-4 z-50`}
        >
          <div className="flex flex-col items-center justify-center space-y-6">
            <div className="flex items-center space-x-6">
              <Link to="/messages">
                <FaEnvelope
                  color={`${isDarkMode ? "44454a" : "white"}`}
                  className="cursor-pointer"
                  onClick={() => setIsMobileMenuOpen(false)}
                />
              </Link>

              <Link to={"/notificatons"}>
                <FaBell
                  color={`${isDarkMode ? "44454a" : "white"}`}
                  className="cursor-pointer"
                  onClick={() => setIsMobileMenuOpen(false)}
                />
              </Link>
              <Link to="/settings">
                <MdOutlineSettings
                  color={`${isDarkMode ? "44454a" : "white"}`}
                  className="cursor-pointer"
                  onClick={() => setIsMobileMenuOpen(false)}
                />
              </Link>
            </div>
            <div className="space-y-6">
              <Link
                to="/"
                className={`flex items-center space-x-2 cursor-pointer hover:text-blue-500 ${
                  activeItem === "dashboard"
                    ? "text-blue-500"
                    : isDarkMode
                    ? "text-black"
                    : "text-white"
                }`}
                onClick={() => onClickOption("dashboard")}
              >
                <AiFillHome size={25} />
                <span className="text-bold">Dashboard</span>
              </Link>

              <Link
                to="/orders"
                className={`flex items-center space-x-2 cursor-pointer hover:text-blue-500 ${
                  activeItem === "orders"
                    ? "text-blue-500"
                    : isDarkMode
                    ? "text-black"
                    : "text-white"
                }`}
                onClick={() => onClickOption("orders")}
              >
                <BsClipboard2Check size={25} />
                <span>Orders</span>
              </Link>

              <Link
                to="/activity"
                className={`flex items-center space-x-2 cursor-pointer hover:text-blue-500 ${
                  activeItem === "activity"
                    ? "text-blue-500"
                    : isDarkMode
                    ? "text-black"
                    : "text-white"
                }`}
                onClick={() => onClickOption("activity")}
              >
                <MdInsertChartOutlined size={25} />
                <span>Activity</span>
              </Link>

              <Link
                to="/finance"
                className={`flex items-center space-x-2 cursor-pointer hover:text-blue-500 ${
                  activeItem === "finance"
                    ? "text-blue-500"
                    : isDarkMode
                    ? "text-black"
                    : "text-white"
                }`}
                onClick={() => onClickOption("finance")}
              >
                <BiWalletAlt size={25} />
                <span>Finance</span>
              </Link>

              <Link
                to="/deliveries"
                className={`flex items-center space-x-2 cursor-pointer hover:text-blue-500 ${
                  activeItem === "deliveries"
                    ? "text-blue-500"
                    : isDarkMode
                    ? "text-black"
                    : "text-white"
                }`}
                onClick={() => onClickOption("deliveries")}
              >
                <IoBagCheckOutline size={25} />
                <span>Deliveries</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
