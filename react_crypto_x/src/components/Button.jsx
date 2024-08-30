import React from "react";
import { ReactComponent as Loader } from "../assests/Loader.svg";
import "../assests/Loader.css";
const Button = ({ text, isSpin }) => {
  return (
    <button
      className="px-4 py-2 bg-gray-200 rounded-lg text-gray-900 w-full flex justify-center items-center"
      disabled={isSpin}
    >
      {!isSpin ? text : <Loader className="spinner" />}
    </button>
  );
};

export default Button;
