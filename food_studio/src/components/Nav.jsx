import handleSearch from "../utils/handleSearch";
import handleBtnFilter from "../utils/handleBtnFilter";
import { useState } from "react";
const Nav = ({ data, setFilterData, setFound }) => {
  const Buttons = ["All", "Breakfast", "Lunch", "Dinner"];
  const [btn, setBtn] = useState("All");

  const onSearch = (e) => {
    const newSearchValue = e.target.value;

    handleSearch(newSearchValue, data, setFilterData, setFound);
  };

  const onClicked = (btn) => {
    console.log("clicked");

    console.log(btn);
    handleBtnFilter(data, btn, setFilterData, setBtn);
  };

  return (
    <div className=" bg-[#323335]  h-[150px] px-[10%] pt-[1%] pb-[13px]">
      <div className="flex flex-wrap justify-between w-[80%]  mx-auto ">
        <img src="/food.svg" alt="logo" />
        <input
          type="search"
          placeholder="Search Food "
          className="py-2 px-4 rounded-md w-auto"
          onChange={(e) => onSearch(e)}
        ></input>
      </div>
      <div className="flex justify-center  ">
        <div className="text-white   flex  gap-4 justify-between p-2  mt-[2%]">
          {Buttons.map((b, index) => (
            <button
              key={index}
              className={` px-4 py-1 rounded-md ${
                btn === b ? "bg-red-400" : "bg-red-600"
              }`}
              onClick={() => onClicked(b)}
            >
              {b}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Nav;
