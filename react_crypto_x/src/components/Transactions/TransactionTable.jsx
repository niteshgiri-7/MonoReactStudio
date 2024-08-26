import React from "react";
import { tableData } from "./tableData";
const TransactionTable = () => {
  return (

      <table className="w-[80%] h-[510px] bg-white rounded-lg shadow-md">
        <thead className=" text-left text-md font-medium text-gray-500 uppercase tracking-wider">
          <tr>
            <th className="px-6 py-4">ID</th>
            <th className="px-6 py-4">Date & Time</th>
            <th className="px-6 py-4">Type</th>
            <th className="px-6 py-4">Amount</th>
            <th className="px-6 py-4">Status</th>
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-300">
          {tableData.map((data) => (
            <tr key={data.id} className="hover:bg-gray-50">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {data.id}
              </td>
              <td className="px-6 py-4 whitespace-nowrap ">
                <div className="flex flex-col">
                  <span className="font-bold text-black">{data.date}</span>
                  <span className="text-gray-400 text-xs">{data.time}</span>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap ">
                <div className="flex flex-col">
                  <span className="font-bold text-black">{data.type.name}</span>
                  <span className="text-gray-400 text-xs">{data.type.tag}</span>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap font-bold text-black">
                <span>{data.amount}</span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm">
                <span
                  className={`
                ${data.status === "pending" ? "bg-gray-400 text-white" : ""}
                ${
                  data.status === "processing" ? "bg-yellow-400 text-white" : ""
                }
                ${data.status === "cancelled" ? "bg-red-500 text-white" : ""}
                ${data.status === "completed" ? "bg-green-500 text-white" : ""}
                px-2 py-1 rounded-full text-sm font-semibold
              `}
                >
                  {data.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
 
  );
};

export default TransactionTable;
