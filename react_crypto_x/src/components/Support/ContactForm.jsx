import React from "react";

const ContactForm = () => {
  return (
    <div className="px-8 py-5 ">
           <h1 className="font-bold">You will receive response within 24 hours of time of submit</h1>
      <form className="flex flex-col gap-4 mt-6">
        <div className="flex justify-between">
          <div className="flex flex-col ">
            <label className="font-bold" >Name</label>
            <input className="px-4 py-2 rounded-md" placeholder="James"></input>
          </div>
          <div className="flex flex-col">
            <label className="font-bold" >Surname</label>
            <input className="px-4 py-2 rounded-md" placeholder="Arthur"></input>
          </div>
        </div>
        <div className="flex flex-col gap-5 mt-5">
      <div className="flex flex-col">

        <label className="font-bold" >Email</label>
        <input className="px-4 py-2 rounded-md" placeholder="name@mail.com"></input>
      </div>
      <div className="flex flex-col">
        <label className="font-bold" >Message</label>
        <textarea className="px-4 py-2 rounded-md min-h-[100px]" placeholder="your message"></textarea>
        </div>
        </div>
        <div className="flex gap-2">

       <input type="radio"></input>
        <h1>I agree with <span className="text-purple-900">Terms & Conditions</span></h1>
        </div>
        <div className="flex flex-col gap-3 font-bold">
            <button className="px-4 py-2 bg-gray-400 rounded-lg text-gray-700" >Send a Message</button>
            <button className="px-4 py-2 bg-gray-300 rounded-lg" >Book a Meeting</button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
