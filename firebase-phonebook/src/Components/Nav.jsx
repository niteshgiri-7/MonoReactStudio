import { FiSearch } from "react-icons/fi";
import { FaPlusCircle } from "react-icons/fa";
const Nav = ({ onChanges, onOpen }) => {
  const handleClick = () => {
    console.log("clicked");
    onOpen(true);
  };
  return (
    <>
      <div className="w-[361px] h-[120px] mx-auto flex flex-col gap-6 my-4">
        <div className=" w-[100%] flex justify-center gap-4 bg-white  rounded-md p-3">
          <img src="/firebase.svg" alt="logo" />
          <div className="flex  items-center">
            <h1 className="font-bold text-xl">Firebase Phonebook App</h1>
          </div>
        </div>
        <div className="text-white w-[100%] relative  flex flex-grow gap-3">
          <FiSearch className="absolute top-[8px] left-2 text-3xl" />
          <input
            className="w-[90%] bg-[#323335] box-border border-2 border-white  text-white font-bold pl-12 py-2 rounded-md"
            placeholder="Search Contact"
            onChange={(e) => onChanges(e)}
          ></input>
          <FaPlusCircle onClick={handleClick} className="text-4xl mt-1" />
        </div>
      </div>
    </>
  );
};

export default Nav;
