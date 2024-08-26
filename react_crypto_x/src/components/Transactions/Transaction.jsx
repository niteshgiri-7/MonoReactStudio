import React from "react";
import SideNav from "../SideNav";
import TopNav from "../TopNav";
import TransactionTable from "./TransactionTable";
import { AiOutlineExport } from "react-icons/ai";
const Transaction = () => {
  return (
    <div className="flex">
      <SideNav />
      <div>
        <TopNav name="Transactions" />
        <div className="h-[calc(100vh-70px)]   bg-[#f3f2f7] px-14">
          <div className=" flex flex-col gap-4 py-10   items-center">
            <div className=" w-[80%] flex justify-end">
              <button className="  flex  items-center  gap-2 font-bold bg-[#5f00d8] text-white px-4 py-2 rounded-lg">
                <AiOutlineExport className="font-extrabold" />
                Export CsV
              </button>
            </div>

            <TransactionTable />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transaction;
