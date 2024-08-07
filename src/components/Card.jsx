import PropTypes from "prop-types";
import MyContext from "./ThemeContext";
import { useContext } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Card = ({ title, children, className }) => {
  const { isDarkMode, isLoading } = useContext(MyContext);
  
  return (
    <div
      className={`${className} ${
        isDarkMode ? "bg-white text-black" : "bg-[#202028] text-white"
      } rounded-lg shadow-md`}
    >
      {isLoading ? (
        <Skeleton height={200} width={"100%"} />
      ) : (
        <>
          <div className="flex text-3xl font-bold p-2">
            <p>{title}</p>
          </div>
          <div>{children}</div>
        </>
      )}
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Card;
