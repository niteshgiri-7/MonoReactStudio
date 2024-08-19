import React, {  useState } from "react";
import Home from "./Home";
import PlayGame from "./PlayGame";

const Body = () => {
  const [play, setPlay] = useState(false);

  return (
    <>
      {play ? (
        <PlayGame  />
      ) : (
        <Home setPlay={setPlay} />
      )}
    </>
  );
};

export default Body;
