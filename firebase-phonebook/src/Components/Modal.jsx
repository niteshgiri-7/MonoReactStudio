import React from "react";
import { createPortal } from "react-dom";
import { AiOutlineClose } from "react-icons/ai";
function Modal({ isOpen, onClose, children }) {
  const handleClick=()=>{
    console.log("clicked")
    onClose(false)
  }
  return createPortal(
  
   <>
   {isOpen && (
    <>
      <div className=" w-screen h-screen fixed inset-0 flex justify-center items-center  z-50">
        <div className="bg-white rounded-md min-h-[300px] min-w-[350px] flex  p-2 relative">
          <div className="absolute left-80">

          <AiOutlineClose  onClick={handleClick} className="text-3xl cursor-pointer"/>
          </div>
          <div className="absolute top-8 w-[98%] ">
        {children}
         </div>
         </div>
    
      </div>
 
      <div className=" absolute top-0 z-40 h-screen w-screen backdrop-blur-[2px]"/>
    </>
   )} 
      

    </>,
    document.getElementById("modal-root")
    
  );
}

export default Modal;
