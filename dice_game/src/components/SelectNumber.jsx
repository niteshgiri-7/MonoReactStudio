import React from "react";

const SelectNumber = ({ setSelectedNum, setErrMsg ,errMsg }) => {
  const numbers = [1, 2, 3, 4, 5, 6];
  const handleClick = (value) => {
    setSelectedNum(value);
    setErrMsg("");
  };
  return (
    <div className="flex mt-[45px]">
      <div className=" h-[138px] flex flex-col items-end gap-[30px]">
        <h2 className="font-bold text-red-600">{errMsg}</h2>
        <div className="flex  gap-[24px]">
          {numbers.map((value, index) => (
            <div
              key={index}
              className="w-[72px] h-[72px] border-black border-2  font-black text-[24px] flex justify-center items-center hover:bg-black hover:text-white cursor-pointer"
              onClick={() => handleClick(value)}
            >
              <h1 className="">{value}</h1>
            </div>
          ))}
        </div>

        <span className="text-[24px] font-bold">Select a number</span>
      </div>
    </div>
  );
};

export default SelectNumber;
