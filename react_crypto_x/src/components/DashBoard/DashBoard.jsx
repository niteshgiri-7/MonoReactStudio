import React from "react";
import SideNav from "../SideNav";
import TopNav from "../TopNav";
import PortFolio from "./PortFolio";
import Graph from "./Graph";
import Transaction from "./DashRecent";
import DashBottom from "./DashBottom";
const DashBoard = () => {

  const description1 = "Learn more about Loans-Keep your Bitcoin, access it's value without selling it";
  const description2 = "Learn more about our real estate, mortgage, and corporate acount services"
  return (
    <div className="">
      <div className="flex ">
        <SideNav />
     
        <div className="min-h-screen max-w-[calc(100vw-260px) flex flex-col items-center bg-[#f3f2f7] ">
         
         
        <TopNav name="DashBoard"/>
          <div className="pt-[24px]">
            <div className="flex flex-col justify-center">
              <PortFolio />
              <div className="flex gap-5 mt-[24px]">

              <Graph/>
              <Transaction/>
              </div>
              <div className="flex  mt-4 gap-5">

              <DashBottom title="Loans" description={description1} bg="white"
              h1bgColor="#5f00d8"
              textColor="black"
              h1Color="white"/>
              <DashBottom title="Contact" description={description2} bg="#5f00d8" textColor="white"
              h1bgColor="white" h1Color="purple"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
