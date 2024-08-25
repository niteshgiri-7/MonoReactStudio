import React from "react";
import SideNav from "../SideNav";
import TopNav from "../TopNav";
import { FaEnvelope } from "react-icons/fa";
import ContactForm from "./ContactForm";
import SupportCard from "./SupportCard";
const Support = () => {
  return (
    <>
      <div className="flex">
        <SideNav />
        <div className="max-w-[100vw-260px] flex flex-col bg-[#f3f2f7]">
          <TopNav name="Transactions" />
          <div className="py-12 px-[100px]">


          <div className=' flex justify-around '>
          <div className="flex flex-col font-bold text-3xl gap-5 w-[390px]   ">
            <FaEnvelope className="text-purple-800"/>
            <h1>Contact Us</h1>

            <span className="text-sm text-gray-700">
              Have a question or just want to know more? Feel free to reach out
              to us
            </span>
          </div>
          <div className="flex flex-col  gap-5 w-[550px] min-h-[545px] bg-white rounded-lg shadow-gray-300 shadow-md">
           <ContactForm/>
          </div>
        </div>
        <div className="mt-10">
        <SupportCard/>
        </div>

          </div>

      </div>
      </div>
    </>
  );
};

export default Support;
