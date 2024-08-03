import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { MdInsertChartOutlined } from "react-icons/md";
import { IoMdLogIn, IoMdLogOut } from "react-icons/io";
import { BsClipboard2Check } from "react-icons/bs";
import { BiWalletAlt } from "react-icons/bi";
import { IoBagCheckOutline } from "react-icons/io5";
import MyContext from "./ThemeContext";

const Sidebar = () => {
  const { isDarkMode } = useContext(MyContext);
  const [activeItem, setActiveItem] = useState("dashboard");
  const [isLogout, setLogout] = useState(false);

  return (
    <div
      className={`bg-[#202028] text-white min-h-screen p-4 flex-col space-y-40 hidden lg:flex ${
        isDarkMode ? "bg-white text-black" : "bg-black text-white"
      }`}
    >
      <div className="space-y-10">
        <div className="font-bold text-4xl mb-4 text-blue-500 font-serif">FitPeo</div>
        <div className="space-y-10">
          <Link
            to="/"
            className={`font-bold flex items-center space-x-2 cursor-pointer hover:text-blue-500 ${
              activeItem === "dashboard"
                ? "text-blue-500"
                : isDarkMode
                ? "text-black"
                : "text-white"
            }`}
            onClick={() => setActiveItem("dashboard")}
          >
            <AiFillHome size={25} />
            <span>Dashboard</span>
          </Link>
          <Link
            to="/orders"
            className={`font-bold flex items-center space-x-2 cursor-pointer hover:text-blue-500 ${
              activeItem === "orders"
                ? "text-blue-500"
                : isDarkMode
                ? "text-black"
                : "text-white"
            }`}
            onClick={() => setActiveItem("orders")}
          >
            <BsClipboard2Check size={25} />
            <span>Orders</span>
          </Link>
          <Link
            to="/activity"
            className={`font-bold flex items-center space-x-2 cursor-pointer hover:text-blue-500 ${
              activeItem === "activity"
                ? "text-blue-500"
                : isDarkMode
                ? "text-black"
                : "text-white"
            }`}
            onClick={() => setActiveItem("activity")}
          >
            <MdInsertChartOutlined size={25} />
            <span>Activity</span>
          </Link>
          <Link
            to="/finance"
            className={`font-bold flex items-center space-x-2 cursor-pointer hover:text-blue-500 ${
              activeItem === "finance"
                ? "text-blue-500"
                : isDarkMode
                ? "text-black"
                : "text-white"
            }`}
            onClick={() => setActiveItem("finance")}
          >
            <BiWalletAlt size={25} />
            <span>Finance</span>
          </Link>
          <Link
            to="/deliveries"
            className={`font-bold flex items-center space-x-2 cursor-pointer hover:text-blue-500 ${
              activeItem === "deliveries"
                ? "text-blue-500"
                : isDarkMode
                ? "text-black"
                : "text-white"
            }`}
            onClick={() => setActiveItem("deliveries")}
          >
            <IoBagCheckOutline size={25} />
            <span>Deliveries</span>
          </Link>
        </div>
      </div>
      <div
        className="flex items-center space-x-2 cursor-pointer"
        onClick={() => setLogout(!isLogout)}
      >
        {isLogout ? (
          <>
            <IoMdLogOut size={25} className="text-red-500" />
            <span
              className={`font-bold ${
                isDarkMode ? "text-black" : "text-white"
              }`}
            >
              Logout
            </span>
          </>
        ) : (
          <>
            <IoMdLogIn size={25} className="text-green-600" />
            <span
              className={`font-bold ${
                isDarkMode ? "text-black" : "text-white"
              }`}
            >
              LogIn
            </span>
          </>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
