import { useContext, useEffect, useRef, useState } from "react";
import { FaSearch, FaBell, FaEnvelope, FaUserCircle } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import { GiHamburger } from "react-icons/gi";
import { MdOutlineSettings, MdInsertChartOutlined } from "react-icons/md";
import { BsClipboard2Check } from "react-icons/bs";
import { Link } from "react-router-dom";
import { IoBagCheckOutline } from "react-icons/io5";
import { BiWalletAlt } from "react-icons/bi";
import Toggle from "./togglebutton";
import MyContext from "./ThemeContext";
import { AnimatePresence, motion } from "framer-motion";
import { RxCross2 } from "react-icons/rx";

const menuVariants = {
  hidden: {
    x: "100%", // Start off-screen to the right
    opacity: 0, // Invisible initially
    transition: { stiffness: 100, damping: 15 },
  },
  visible: {
    x: "0%", // Slide into view
    opacity: 1, // Fully visible
    transition: { stiffness: 100, damping: 15 },
  },
  exit: {
    x: "100%", // Slide back to the right
    opacity: 0, // Fade out
    transition: { type: "spring", stiffness: 100, damping: 15 },
  },
};

const Header = () => {
  const { isDarkMode } = useContext(MyContext);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("dashboard");
  const menuRef = useRef(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const onClickOption = (option) => {
    setActiveItem(option);
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const textColor = isDarkMode ? "text-black" : "text-white";
  const bgColor = isDarkMode ? "bg-[#f1eff8]" : "bg-[#2a2b30]";
  const iconColor = isDarkMode ? "#47484d" : "white";

  return (
    <div
      className={`bg-[#202028] text-white p-4 flex justify-between items-center relative ${
        isDarkMode ? "bg-white" : "bg-[#202028]"
      }`}
    >
      <div
        className={`flex items-center space-x-2 p-2 rounded w-1/2 lg:w-[20%] ${bgColor}`}
      >
        <FaSearch className="text-gray-500" />
        <input
          type="text"
          placeholder="Search"
          className={`bg-transparent outline-none w-full ${textColor}`}
        />
      </div>
      <div className="flex items-center space-x-4">
        <Toggle />
        <div className="items-center space-x-4 hidden lg:flex">
          <Link to="/messages">
            <div className="bg-[#47484d] p-2 rounded-full">
              <FaEnvelope color="#ffffff" className="cursor-pointer" />
            </div>
          </Link>
          <Link to="/notifications">
            <div className="bg-[#47484d] p-2 rounded-full">
              <FaBell color="#ffffff" className="cursor-pointer" />
            </div>
          </Link>
          <Link to="/settings">
            <div className="bg-[#47484d] p-2 rounded-full">
              <MdOutlineSettings color="#ffffff" className="cursor-pointer" />
            </div>
          </Link>
        </div>
        <Link to="/profile">
          <FaUserCircle
            color={iconColor}
            className="cursor-pointer w-6 h-6 lg:w-10 lg:h-10"
          />
        </Link>
        <div
          className="lg:hidden flex items-center transform transition-transform duration-250 ease-in-out active:scale-110"
          onClick={toggleMobileMenu}
          aria-label="Toggle Mobile Menu"
        >
          <GiHamburger size={30} color="yellow" />
        </div>
      </div>
      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className={`fixed top-0 right-0 w-3/4 h-full z-40 p-6 shadow-lg overflow-auto lg:hidden  ${
              isDarkMode ? "bg-white" : "bg-[#202028]"
            }`}
            ref={menuRef}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
          >
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 p-2 text-gray-700"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Close Menu"
            >
              <RxCross2 className="h-6 w-6" />
            </button>

            {/* Navigation Links */}
            <nav className="flex flex-col space-y-6 mt-10">
              <Link
                to="/"
                className={`flex items-center space-x-2 cursor-pointer hover:text-blue-500 ${
                  activeItem === "dashboard" ? "text-blue-500" : textColor
                }`}
                onClick={() => onClickOption("dashboard")}
              >
                <AiFillHome size={25} />
                <span className="text-bold">Dashboard</span>
              </Link>
              <Link
                to="/orders"
                className={`flex items-center space-x-2 cursor-pointer hover:text-blue-500 ${
                  activeItem === "orders" ? "text-blue-500" : textColor
                }`}
                onClick={() => onClickOption("orders")}
              >
                <BsClipboard2Check size={25} />
                <span>Orders</span>
              </Link>
              <Link
                to="/activity"
                className={`flex items-center space-x-2 cursor-pointer hover:text-blue-500 ${
                  activeItem === "activity" ? "text-blue-500" : textColor
                }`}
                onClick={() => onClickOption("activity")}
              >
                <MdInsertChartOutlined size={25} />
                <span>Activity</span>
              </Link>
              <Link
                to="/finance"
                className={`flex items-center space-x-2 cursor-pointer hover:text-blue-500 ${
                  activeItem === "finance" ? "text-blue-500" : textColor
                }`}
                onClick={() => onClickOption("finance")}
              >
                <BiWalletAlt size={25} />
                <span>Finance</span>
              </Link>
              <Link
                to="/deliveries"
                className={`flex items-center space-x-2 cursor-pointer hover:text-blue-500 ${
                  activeItem === "deliveries" ? "text-blue-500" : textColor
                }`}
                onClick={() => onClickOption("deliveries")}
              >
                <IoBagCheckOutline size={25} />
                <span>Deliveries</span>
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Header;
