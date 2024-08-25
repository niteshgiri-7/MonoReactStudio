import React from "react";
import { Link } from "react-router-dom";
import { GrTransaction } from "react-icons/gr";
import { RiDashboardHorizontalFill } from "react-icons/ri";
import { MdSupportAgent } from "react-icons/md";
const SideNav = () => {
  return (
    <div className="w-[260px]  h-[100vh] bg- flex flex-col justify-between p-[18px] pt-10">
      <div className="px-[18px]">
        <h1 className="font-medium text-[20px] text-purple-700">
          React CryptoX
        </h1>

        <div className="mt-[50px] font-bold text-lg flex flex-col gap-4">
          <Link to="/">
            <div className="flex  items-center gap-3">
              <RiDashboardHorizontalFill />
              <h1>DashBoard</h1>
            </div>
          </Link>

          <Link to="/transaction">
            <div className="flex items-center gap-3">
              <GrTransaction />
              <h1>Transaction</h1>
            </div>
          </Link>
        </div>
      </div>
      <Link to="/support">
        <div className="flex items-center gap-3 text-lg font-bold px-3">
          <MdSupportAgent />
          <h1>Support</h1>
        </div>
      </Link>
    </div>
  );
};

export default SideNav;
