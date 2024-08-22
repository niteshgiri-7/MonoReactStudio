import React from "react";
import { RiEditCircleLine } from "react-icons/ri";
import { MdDelete } from "react-icons/md";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../config/firebase";
const Contact = ({ data, onOpen, onUpdate, onEditContact }) => {
  const handleClick = () => {
    onEditContact(data);
    onOpen();
    onUpdate();
  };
  const deleteContact = async (id) => {
    try {
      console.log(id);
      const docRef = doc(db, "contacts", id);
      await deleteDoc(docRef);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="w-[380px] h-[64px] bg-yellow-200 p-2 rounded-md mx-auto flex justify-between gap-2">
      <div className="flex justify-center items-center">
        <img className="min-w-[50px]" src="/Vector.png" alt="userLogo" />
      </div>
      <div className="flex flex-col">
        <h1 className="font-bold text-lg">{data.name}</h1>
        <h1>{data.email}</h1>
      </div>
      <div className=" w-[45%] flex justify-end self-end">
        <div className="font-bold text-4xl flex items-center gap-3 ">
          <RiEditCircleLine onClick={handleClick} className="cursor-pointer" />
          <MdDelete
            onClick={() => deleteContact(data.id)}
            className="text-red-600 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
