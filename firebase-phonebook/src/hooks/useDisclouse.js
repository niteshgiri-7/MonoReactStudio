import { useState } from "react";

const useDisclouse = () => {
  const [isOpen, setOpen] = useState(false);
  const [isUpdate, setUpdate] = useState(false);
  const [currentContact, setCurrentContact] = useState(null);//to store the clicked contact to show on edit ui
  const onOpen = () => {
    setUpdate(false);
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const onUpdate = () => {
    setUpdate(true);
  };
  const onEditContact = (contact) => {
    setCurrentContact(contact);
  };
  return { isOpen,isUpdate,currentContact, onOpen, onClose, onUpdate, onEditContact  };
};

export default useDisclouse;
