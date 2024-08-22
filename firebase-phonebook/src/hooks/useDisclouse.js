import { useState } from "react";

const useDisclouse = () => {
  const [isOpen, setOpen] = useState(false);
  const [isUpdate, setUpdate] = useState(false);
  const [currentContact, setCurrentContact] = useState(null);//to store the clicked contact to show on edit ui
  const onOpen = () => {
    console.log("clicked");
    setUpdate(false);
    setOpen(true);
    console.log(isOpen);
  };
  const onClose = () => {
    console.log("clicked");
    setOpen(false);
  };
  const onUpdate = () => {
    setUpdate(true);
  };
  const onEditContact = (contact) => {
    setCurrentContact(contact);
    console.log(currentContact)
  };
  return { isOpen,isUpdate,currentContact, onOpen, onClose, onUpdate, onEditContact  };
};

export default useDisclouse;
