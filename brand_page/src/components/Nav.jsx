import React from "react";
import Button from "./Button";
const Nav = () => {
  return (
    <div className="flex h-[8vh] justify-between py-4 px-[6%]">
      <div>
        <img src="/brand_logo.png" alt="brand_logo"></img>
      </div>
      <ul className="flex w-[30%] justify-evenly font-bold text-2xl bg- items-center">
        <li>Menu</li>
        <li>Location</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="bg-red-600 text-white px-4 py-2 rounded-md font-bold">
        <Button name="Login"/>
      </div>
    </div>
  );
};

export default Nav;
