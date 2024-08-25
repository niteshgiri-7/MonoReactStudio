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
    <Button name="Login" bgColor="red" textColor="white"/>
    </div>
  );
};

export default Nav;
