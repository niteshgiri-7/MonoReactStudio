import React from "react";
import Button from "./Button";

const HeroText = () => {
  return (
    <div className="w-1/2 h-[85vh] text-start ">
      <h1 className="font-black text-[100px] ">YOUR FEET DESERVE <br></br>THE BEST</h1>
      <p className="text-[20px] font-bold text-gray-800 pr-[2%] w-[80%]">
        YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES.
        DISCOVER UNMATCHED COMFORT AND STYLE. STEP INTO A NEW LEVEL OF LUXURY.
        ELEVATE YOUR EVERYDAY WALK WITH US.<br></br>
        FIND THE PERFECT FIT FOR YOUR FEET TODAY!
      </p>
      <div className="text-[25px] flex w-[80%] justify-items-start gap-10 mt-3">
          <Button name="Shop now" bgColor="red" textColor="white"/>
     
          <Button name="Category" bgColor="gray" textColor="black" />
      
      </div>
      <div className="text-[20px] mt-3 text-gray-700">
        <h3>Also Available On</h3>
        <div className="flex gap-5 mt-2">
          <img src="/flipkart.png" alt="flipkart"></img>
          <img src="/amazon.png" alt="amazon"></img>
        </div>
      </div>
    </div>
  );
};

export default HeroText;
