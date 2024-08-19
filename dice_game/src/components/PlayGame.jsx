import React, { useState } from "react";
import SelectNumber from "./SelectNumber";
import Button from "./Button";
import Rules from "./Rules";
const PlayGame = () => {
  const [showRules, setShowRules] = useState(false);
  const [totalScore, setTotalScore] = useState(0);
  const [selectedNum, setSelectedNum] = useState();
  const [randomNum, setRandomNum] = useState(1);
  const [errMsg, setErrMsg] = useState("");
  const generarateRandomNumber = () => {
    return Math.floor(Math.random() * (7 - 1) + 1);
  };
  const handleOnDiceClick = () => {
    if (!selectedNum) {
      return setErrMsg("please select a number first");
    }
    const randomNumber = generarateRandomNumber();
    console.log(randomNumber);
    setRandomNum(randomNumber);
    console.log("random number is ", randomNumber);
    console.log("selected number is", selectedNum);
    if (randomNumber === selectedNum) {
      console.log("point gained");
      setTotalScore((prev) => prev + randomNumber);
     
    } else {
      console.log("point lost");
      setTotalScore((prev) => prev - 2);
    }
    setSelectedNum(null);
  };
  const handleResetScore = () => {
    setTotalScore(0);
  };
  return (
    <>
      <div className="px-[100px] py-[50px] w-[1280px] mx-auto flex  justify-between ">
        <div className="font-bold ">
          <h1 className="text-[100px]">{totalScore}</h1>
          <span className="text-[24px]">Total Score</span>
        </div>

        <SelectNumber
          setSelectedNum={setSelectedNum}
          setErrMsg={setErrMsg}
          errMsg={errMsg}
        />
      </div>

      <div className="w-[250px] h-[449px] mx-auto flex flex-col justify-around cursor-pointer">
        <img
          src={`dice_${randomNum}.png`}
          alt="dice"
          onClick={() => handleOnDiceClick()}
        ></img>
        <span className="text-center font-medium text-[24px] ">
          Click on Dice to roll
        </span>
        <div className="w-full flex flex-col gap-[24px]">
          <div className="ml-[40px] cursor-pointer" onClick={() => handleResetScore()}>
            <Button name="Reset Score" />
          </div>
          <div
            className="ml-[40px] w-[190px] cursor-pointer"
            onClick={() => setShowRules((prev) => !prev)}
          >
            <Button name={!showRules ? "Show Rules" : "Hide  Rules"} />
          </div>
        </div>
      </div>
      {showRules && <Rules />}
    </>
  );
};

export default PlayGame;
