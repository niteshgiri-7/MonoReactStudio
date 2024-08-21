import Nav from "./Nav";
import Main from "./Main";
import { useState, useEffect } from "react";
import fetchData from "../utils/fetchData";
const Body = () => {
  const [data, setData] = useState(null);
  const [filterData, setFilterData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [found, setFound] = useState(true);
  const [err, setErr] = useState(null);

  useEffect(() => {
    fetchData(setData, setFilterData, setLoading, setErr);
  }, []);

  return (
    <>
      <Nav data={data} setFilterData={setFilterData} setFound={setFound}/>
      <Main loading={loading} err={err} filterData={filterData} found={found}/>
    </>
  );
};

export default Body;
