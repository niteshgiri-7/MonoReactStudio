import React from "react";

const Rules = () => {
  return (
    <div className="w-[450px] h-[208px]  mx-auto p-4">
      <h1 className="font-black text-[24px] ">How to play the game?</h1>
      <ol className="font-medium text-[18px]">
        <li >Select any number</li>
        <li>Click on dice image</li>
        <li>
          You get points as of your dice number
        </li>
        <li>If you get wrong then 2 points will be deducted</li>
      </ol>
    </div>
  );
};

export default Rules;
