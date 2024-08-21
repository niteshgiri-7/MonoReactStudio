import handleSearch from "../utils/handleSearch";

const Nav = ({ searchValue, data, setFilterData, setSearchValue }) => {
  const Buttons = ["All", "Breakfast", "Lunch", "Dinner"];

  const onSearch = (e) => {
    const newSearchValue = e.target.value;
    setSearchValue(newSearchValue);
    handleSearch(newSearchValue, data, setFilterData);
  };

  return (
    <div className=" bg-[#323335]  h-[150px] px-[10%] pt-[1%] pb-[13px]">
      <div className="flex flex-wrap justify-between w-[80%]  mx-auto ">
        <img src="/food.svg" alt="logo" />
        <input
          placeholder="Search Food "
          className="py-2 px-4 rounded-md w-auto"
          onChange={(e) => onSearch(e)}
        ></input>
      </div>
      <div className="flex justify-center  ">
        <div className="text-white   flex  gap-4 justify-between p-2  mt-[2%]">
          {Buttons.map((button, index) => (
            <button key={index} className="bg-[#ff4343] px-4 py-1 rounded-md">
              {button}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Nav;
