import PropTypes from "prop-types";
import { useContext } from "react";
import MyContext from "./ThemeContext";
import Skeleton from "react-loading-skeleton";

const StatusCard = ({
  title = "",
  className = "",
  iconBg = "",
  icon = null,
  subIconBg = "",
  subIcon = null,
  children = null,
}) => {
  const { isDarkMode, isLoading } = useContext(MyContext);

  return (
    <div
      className={`rounded-lg shadow-md ${className} ${
        isDarkMode ? "bg-white text-black" : "bg-[#202028] text-white"
      }`}
    >
      {isLoading ? (
        <Skeleton height={205} width="100%" />
      ) : (
        <div className="p-4 space-y-2">
          <div className={`relative p-2 w-10 rounded-lg ${iconBg}`}>
            {icon || (
              <div className="w-6 h-6 bg-gray-400 rounded animate-pulse" />
            )}
            <div
              className={`absolute left-[22px] bottom-1 ${subIconBg} rounded-full p-[2px]`}
            >
              {subIcon || (
                <div className="w-6 h-6 bg-gray-400 rounded animate-pulse" />
              )}
            </div>
          </div>
          <p className="font-bold text-md text-[#919195]">{title}</p>
          {children}
        </div>
      )}
    </div>
  );
};

StatusCard.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string,
  icon: PropTypes.element,
  subIcon: PropTypes.element,
  iconBg: PropTypes.string,
  subIconBg: PropTypes.string,
  children: PropTypes.node,
};

export default StatusCard;
