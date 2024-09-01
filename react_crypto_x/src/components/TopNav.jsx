import React, { useState } from "react";
import { FaRegUserCircle } from "react-icons/fa";
import useAuthContext from "../utils/context/useAuthContext";

const TopNav = ({ name }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { logOut ,user} = useAuthContext();
  const handleLogout = () => {
    setIsDropdownOpen(false);
    logOut();
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="w-[calc(100vw-260px)] h-[70px] text-3xl flex justify-center py-2 bg-white">
      <div className="w-[80%] flex justify-between font-bold relative">
        <h1>{name}</h1>

        <div className="relative">
          <FaRegUserCircle
            className="text-gray-600 cursor-pointer"
            onClick={toggleDropdown}
          />

          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-fit bg-white border border-gray-200 rounded-md shadow-lg flex flex-col">
              <span className="px-4 py-2 text-[16px] font-bold text-gray-700 text-purple-500">{user}</span>
              <button
                onClick={handleLogout}
                className="block w-full text-left text-[16px] px-4 py-2 font-bold text-gray-700 hover:bg-gray-100"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TopNav;
