/* eslint-disable react/prop-types */
"use client";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";

import Card from "../components/Card";
import { useContext, useEffect } from "react";
import MyContext from "../components/ThemeContext";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import { ImTarget } from "react-icons/im";
import StatusCard from "../components/StatusCard";
import { FiChevronRight } from "react-icons/fi";
import { LiaHamburgerSolid } from "react-icons/lia";
import { BiDish } from "react-icons/bi";
import { FaStar } from "react-icons/fa";

const CustomizedLabel = ({ cx, cy, label, isDarkMode }) => (
  <g>
    <text
      x={cx}
      y={cy}
      dy={8}
      textAnchor="middle"
      fill={`${isDarkMode ? "black" : "white"}`}
      fontSize="30"
      fontWeight={700}
    >
      {label}%
    </text>
    <text
      x={cx}
      y={cy}
      dy={20}
      textAnchor="middle"
      fill={`${isDarkMode ? "black" : "white"}`}
      fontSize="10"
    >
      Goal completed
    </text>
  </g>
);

const getStatusClasses = (status) => {
  switch (status) {
    case "Delivered":
      return "text-green-500";
    case "Cancelled":
      return "text-red-500";
    case "Pending":
      return "text-yellow-500";
    default:
      return "";
  }
};

const Dashboard = () => {
  const { isDarkMode, fetchData, fetchedData, isLoading } =
    useContext(MyContext);
  useEffect(() => {
    fetchData();
  }, []);

  const formatYAxisTick = (tick) => {
    if (tick >= 1000) {
      return `${(tick / 1000).toFixed(0)}k`;
    }
    return tick;
  };

  return (
    <div className="flex flex-col w-full">
      <div className="px-4 py-2">
        <p
          className={`text-2xl font-bold ${
            isDarkMode ? "text-black" : "text-white"
          }`}
        >
          Dashboard
        </p>
      </div>
      <div className="p-4 grid grid-cols-8 lg:grid-cols-6 gap-2 lg:gap-5">
        {isLoading
          ? Array.from({ length: 4 }).map((_, index) => (
              <StatusCard
                key={index}
                title=""
                iconBg=""
                icon=""
                className="col-span-4 lg:col-span-1"
              />
            ))
          : fetchedData?.analyticsData?.map((card, index) => (
              <StatusCard
                key={index}
                title={card.title || ""}
                iconBg={card.iconBg || ""}
                icon={card.icon || null}
                subIconBg={card.subIconBg || ""}
                subIcon={card.subIcon || null}
                className="col-span-4 lg:col-span-1"
              >
                <div className="flex justify-between items-center pt-3">
                  <p
                    className={`font-bold text-3xl ${
                      isDarkMode ? "text-black" : "text-white"
                    }`}
                  >
                    {card.value || "N/A"}
                  </p>
                  {card.percentage < 0 ? (
                    <div className="flex items-center">
                      <FaCaretDown color="#ef4444" />
                      <p className="text-red-500 font-semibold text-lg">
                        {Math.abs(card.percentage) || "0"}%
                      </p>
                    </div>
                  ) : (
                    <div className="flex items-center">
                      <FaCaretUp color="#07956d" />
                      <p className="text-[#22c55e] font-semibold text-lg">
                        {card.percentage || "0"}%
                      </p>
                    </div>
                  )}
                </div>
              </StatusCard>
            ))}
        <Card title="" className={"col-span-8 lg:col-span-2"}>
          <div className="flex w-full justify-center p-1">
            <div className="w-full md:w-1/2 space-y-5 flex flex-col justify-center pl-2 lg:6">
              <p className="font-semibold text-[#919195] text-md">Net Profit</p>
              <p className="font-bold text-3xl lg:text-4xl">
                ${fetchedData?.financialData?.netProfit.toFixed(2)}
              </p>
              <div className="flex items-center">
                <FaCaretUp color="#07956d" />
                <p className="text-[#22c55e] font-semibold text-lg">
                  {fetchedData?.financialData?.profitChangePercentage}%
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2 flex flex-col items-center">
              <ResponsiveContainer width="100%" height={130}>
                <PieChart>
                  <Pie
                    data={fetchedData?.financialData?.pieChartData}
                    innerRadius={45}
                    outerRadius={65}
                    labelLine={false}
                    label={(props) => (
                      <CustomizedLabel
                        {...props}
                        label={fetchedData?.financialData?.Revenue}
                        isDarkMode={isDarkMode}
                      />
                    )}
                    fill="#293266"
                    dataKey="value"
                    startAngle={90}
                    endAngle={-270}
                    stroke="none"
                  >
                    <Cell fill="#7193fe" />
                    <Cell fill="#293266" />
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
              <p className="font-semibold text-[#919195] text-[10px] mt-2">
                *The values here have been rounded off.
              </p>
            </div>
          </div>
        </Card>
        <Card className={"col-span-8 lg:col-span-4"} title="">
          <div className="flex w-full justify-between items-center pb-4 px-4">
            <p className="flex text-3xl font-bold">Activity</p>
            <select
              className={`${
                isDarkMode ? "bg-[#f1eff8]" : "bg-[#4c4d52]"
              } rounded-full px-4 py-2 text-sm outline-none pl-1`}
            >
              <option value="" disabled defaultValue>
                Weekly
              </option>
              <option value="activity1">Daily</option>
              <option value="activity2">Monthly</option>
              <option value="activity3">Querterly</option>
              <option value="activity4">Yearly</option>
            </select>
          </div>
          <ResponsiveContainer width="95%" height={200}>
            <BarChart
              data={fetchedData?.activityData}
              padding={20}
              barSize={25}
              barGap={10}
            >
              <CartesianGrid vertical={false} strokeWidth={1 / 2} />
              <XAxis
                dataKey="name"
                axisLine={false}
                tickLine={false}
                interval={1}
                tickMargin={10}
              />
              <YAxis
                tickFormatter={formatYAxisTick}
                axisLine={false}
                tickMargin={10}
              />
              <Bar dataKey="pv" fill="#7294ff" radius={10} />
            </BarChart>
          </ResponsiveContainer>
        </Card>
        <Card title="" className={"col-span-8 lg:col-span-2"}>
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center gap-2">
              <div className={`p-4 rounded-full bg-[#5f3237]`}>
                <ImTarget size={25} color="#b75129" />
              </div>
              <p className="font-semibold text-[#919195] text-xl">Goals</p>
            </div>
            <div className={`p-1 rounded-full bg-[#47484d]`}>
              <FiChevronRight size={20} color="white" />
            </div>
          </div>
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center gap-2">
              <div className={`p-4 rounded-full bg-[#293368]`}>
                <LiaHamburgerSolid size={25} color="#546dc5" />
              </div>
              <p className="font-semibold text-[#919195] text-xl">
                Popular Dishes
              </p>
            </div>

            <div className={`p-1 rounded-full bg-[#47484d]`}>
              <FiChevronRight size={20} color="white" />
            </div>
          </div>
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center gap-2">
              <div className={`p-4 rounded-full bg-[#214a60]`}>
                <BiDish size={25} color="#258dc0" />
              </div>
              <p className="font-semibold text-[#919195] text-xl">Menus</p>
            </div>

            <div className={`p-1 rounded-full bg-[#47484d]`}>
              <FiChevronRight size={20} color="white" />
            </div>
          </div>
        </Card>
        <Card className="col-span-8 lg:col-span-4" title="Recent Orders">
          <div className="p-4 overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr>
                  <th className="pb-2">Customer</th>
                  <th className="pb-2">Order No.</th>
                  <th className="pb-2">Amount</th>
                  <th className="pb-2">Status</th>
                </tr>
              </thead>
              <tbody>
                {fetchedData?.ordersData?.map((order, index) => (
                  <tr key={index} className="border-b border-gray-700">
                    <td className="flex gap-2 items-center py-2">
                      {order?.avatar}
                      {order?.customer}
                    </td>
                    <td className="py-2">{order?.orderNo}</td>
                    <td className="py-2">{order?.amount}</td>
                    <td className={`py-2 ${getStatusClasses(order.status)}`}>
                      {order?.status}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
        <Card className="col-span-8 lg:col-span-2" title="Customer's Feedback">
          <div
            className="h-96 overflow-y-scroll p-4"
            style={{
              scrollbarWidth: "thin",
              scrollbarColor: "#888 #f1f1f1",
            }}
          >
            {fetchedData?.feedbackData?.map((feedback) => (
              <div key={feedback.id} className="mb-4">
                <div className="flex items-center mb-2">
                  <div className="rounded-full w-10 h-10 mr-2">
                    {feedback?.avatar}
                  </div>
                  <div>
                    <p className="font-semibold">{feedback?.name}</p>
                    <div className="flex">
                      {Array(5)
                        .fill(0)
                        .map((_, index) => (
                          <FaStar
                            key={index}
                            className={
                              index < feedback?.rating
                                ? "text-yellow-500"
                                : "text-gray-300"
                            }
                          />
                        ))}
                    </div>
                  </div>
                </div>
                <p className="text-[#6b6c71]">{feedback?.feedback}</p>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
