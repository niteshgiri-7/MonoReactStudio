import React from "react";
import Button from "./Button";

const Home = ({ setPlay }) => {
  return (
    <div className="w-[1182px] bg- h-[522px] m-auto my-[180px] flex">
      <img src="/dices.png" alt="dices"></img>
      <div className="flex flex-col  justify-center">
        <h1 className="text-[96px] font-black">Dice Game</h1>
        <div className="self-end" onClick={()=>setPlay(true)}>
          <Button name="Play Now" />
        </div>
      </div>
    </div>
  );
};

export default Home;
