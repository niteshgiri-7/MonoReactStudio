import Nav from "./Nav";
import Main from "./Main";
import { useState, useEffect } from "react";
import fetchData from "../utils/fetchData";
const Body = () => {
  const [searchValue, setSearchValue] = useState("");

  const [data, setData] = useState(null);
  const [filterData, setFilterData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(null);

  useEffect(() => {
    fetchData(setData, setFilterData, setLoading, setErr);
  }, []);

  return (
    <>
      <Nav
         searchValue={searchValue}
        setSearchValue={setSearchValue}
        data={data}
        setFilterData={setFilterData}
      />
      <Main
       
        loading={loading}
        err={err}
        filterData={filterData}
      />
    </>
  );
};

export default Body;
