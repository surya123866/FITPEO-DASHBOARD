import { FaUserCircle } from "react-icons/fa";
import { FaBasketShopping } from "react-icons/fa6";
import { GiShoppingBag } from "react-icons/gi";
import { HiCurrencyDollar } from "react-icons/hi2";
import { IoMdAdd } from "react-icons/io";
import { BsCheckLg } from "react-icons/bs";
import { IoClose } from "react-icons/io5";
import { FaLongArrowAltDown } from "react-icons/fa";

export const dummyData = {
  analyticsData: [
    {
      title: "Total Orders",
      iconBg: "bg-[#293267]",
      icon: <FaBasketShopping size={25} color="#4264fe" />,
      subIconBg: "bg-[#2a3368]",
      subIcon: <IoMdAdd size={8} color="#ffffff" />,
      value: "75",
      percentage: 3,
    },
    {
      title: "Total Delivered",
      iconBg: "bg-[#155145]",
      icon: <GiShoppingBag size={25} color="#07956d" />,
      subIconBg: "bg-[#208369]",
      subIcon: <BsCheckLg size={8} color="#ffffff" />,
      value: "70",
      percentage: -3,
    },
    {
      title: "Total Cancelled",
      iconBg: "bg-[#5d3236]",
      icon: <GiShoppingBag size={25} color="#f25e5e" />,
      subIconBg: "bg-[#974749]",
      subIcon: <IoClose size={8} color="#ffffff" />,
      value: "05",
      percentage: 3,
    },
    {
      title: "Total Revenue",
      iconBg: "bg-[#5b294a]",
      icon: <HiCurrencyDollar size={25} color="#e541a2" />,
      subIconBg: "",
      subIcon: <FaLongArrowAltDown size={20} color="#e541a2" />,
      value: "$12k",
      percentage: -3,
    },
  ],
  activityData: [
    { name: "5", pv: 10000 },
    { name: "6", pv: 2000 },
    { name: "7", pv: 7000 },
    { name: "8", pv: 5000 },
    { name: "9", pv: 3000 },
    { name: "10", pv: 2000 },
    { name: "11", pv: 4000 },
    { name: "12", pv: 1000 },
    { name: "13", pv: 4000 },
    { name: "14", pv: 3000 },
    { name: "15", pv: 2000 },
    { name: "16", pv: 0 },
    { name: "17", pv: 6000 },
    { name: "18", pv: 5000 },
    { name: "19", pv: 8000 },
    { name: "20", pv: 11000 },
    { name: "21", pv: 15000 },
    { name: "22", pv: 10000 },
    { name: "23", pv: 8000 },
    { name: "24", pv: 9000 },
    { name: "25", pv: 6000 },
    { name: "26", pv: 7000 },
    { name: "27", pv: 5000 },
  ],
  ordersData: [
    {
      avatar: (
        <FaUserCircle className="text-gray-500 cursor-pointer w-10 h-10" />
      ),
      customer: "Wade Warren",
      orderNo: "15478256",
      amount: "$124.00",
      status: "Delivered",
    },
    {
      avatar: (
        <FaUserCircle className="text-gray-500 cursor-pointer w-10 h-10" />
      ),
      customer: "Jane Cooper",
      orderNo: "48965786",
      amount: "$365.02",
      status: "Delivered",
    },
    {
      avatar: (
        <FaUserCircle className="text-gray-500 cursor-pointer w-10 h-10" />
      ),
      customer: "Guy Hawkins",
      orderNo: "78958215",
      amount: "$45.88",
      status: "Cancelled",
    },
    {
      avatar: (
        <FaUserCircle className="text-gray-500 cursor-pointer w-10 h-10" />
      ),
      customer: "Kristin Watson",
      orderNo: "20965732",
      amount: "$65.00",
      status: "Pending",
    },
    {
      avatar: (
        <FaUserCircle className="text-gray-500 cursor-pointer w-10 h-10" />
      ),
      customer: "Cody Fisher",
      orderNo: "95715620",
      amount: "$545.00",
      status: "Delivered",
    },
    {
      avatar: (
        <FaUserCircle className="text-gray-500 cursor-pointer w-10 h-10" />
      ),
      customer: "Savannah Nguyen",
      orderNo: "78514568",
      amount: "$128.20",
      status: "Delivered",
    },
  ],
  financialData: {
    netProfit: 6759.25,
    profitChangePercentage: 3,
    Revenue: 70,
    pieChartData: [
      { name: "Revenue", value: 100 - 30 },
      { name: "Expenses", value: 100 - 70 },
    ],
  },
  feedbackData: [
    {
      id: 1,
      avatar: (
        <FaUserCircle className="text-gray-500 cursor-pointer w-10 h-10" />
      ),
      name: "Jenny Wilson",
      rating: 3,
      feedback:
        "The food was excellent and so was the service. I had the mushroom risotto with scallops which was awesome. I had a burger over greens (gluten-free) which was also very good. They were very conscientious about gluten allergies.",
    },
    {
      id: 2,
      avatar: (
        <FaUserCircle className="text-gray-500 cursor-pointer w-10 h-10" />
      ),
      name: "Dianne Russell",
      rating: 5,
      feedback:
        "We enjoyed the Eggs Benedict served on homemade focaccia bread and hot coffee. Perfect service.",
    },
    {
      id: 3,
      avatar: (
        <FaUserCircle className="text-gray-500 cursor-pointer w-10 h-10" />
      ),
      name: "Devon Lane",
      rating: 4,
      feedback:
        "Normally wings are wings, but theirs are lean, meaty, and tender.",
    },
    {
      id: 2,
      avatar: (
        <FaUserCircle className="text-gray-500 cursor-pointer w-10 h-10" />
      ),
      name: "Jenny Wilson",
      rating: 4,
      feedback:
        "The food was excellent and so was the service. I had the mushroom risotto with scallops which was awesome. I had a burger over greens (gluten-free) which was also very good. They were very conscientious about gluten allergies.",
    },
    {
      id: 5,
      avatar: (
        <FaUserCircle className="text-gray-500 cursor-pointer w-10 h-10" />
      ),
      name: "Dianne Russell",
      rating: 5,
      feedback:
        "We enjoyed the Eggs Benedict served on homemade focaccia bread and hot coffee. Perfect service.",
    },
    {
      id: 6,
      avatar: (
        <FaUserCircle className="text-gray-500 cursor-pointer w-10 h-10" />
      ),
      name: "Devon Lane",
      rating: 4,
      feedback:
        "Normally wings are wings, but theirs are lean, meaty, and tender.",
    },
  ],
};
