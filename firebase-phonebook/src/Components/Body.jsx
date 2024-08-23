import Nav from "./Nav";
import Contact from "./Contact";
import Modal from "./Modal";
import AddAndUpdate from "./AddAndUpdate";
import NotFound from "./NotFound";
import { collection, onSnapshot } from "firebase/firestore";

import { db } from "../config/firebase";
import { useEffect, useState } from "react";
import useDisclouse from "../hooks/useDisclouse";
import { ToastContainer, toast } from "react-toastify";

const Body = () => {
  const [contacts, setContacts] = useState([]);
  const {
    isOpen,
    onOpen,
    onClose,
    isUpdate,
    onUpdate,
    currentContact,
    onEditContact,
  } = useDisclouse();
  useEffect(() => {
    getContacts();
  }, []);

  const getContacts = async () => {
    try {
      const contactsRef = collection(db, "contacts");

      onSnapshot(contactsRef, (snapshot) => {
        const contactLists = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setContacts(contactLists);
      });
    } catch (error) {
      toast.error(error);
    }
  };

  const getSearch = (e) => {
    const value = e.target.value;

    const contactsRef = collection(db, "contacts");

    onSnapshot(contactsRef, (snapshot) => {
      const contactLists = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      const filteredContacts = contactLists.filter((contact) =>
        contact.name.toLowerCase().includes(value.toLowerCase())
      );

      setContacts(filteredContacts);
    });
  };

  return (
    <div className="min-h-screen flex justify-center bg-gray-600">
      <div className="bg-[#323335] w-[455px] min-h-full relative">
        <Nav onChanges={getSearch} onOpen={onOpen} />
        {contacts.length === 0 ? (
          <NotFound />
        ) : (
          <div className="flex flex-col gap-2">
            {contacts?.map((contact) => (
              <Contact
                key={contact.id}
                data={contact}
                onOpen={onOpen}
                onUpdate={onUpdate}
                onEditContact={onEditContact}
              />
            ))}
          </div>
        )}
        <Modal isOpen={isOpen} onClose={onClose}>
          <AddAndUpdate
            onOpen={onOpen}
            onClose={onClose}
            isUpdate={isUpdate}
            currentContact={currentContact}
          />
        </Modal>
        <ToastContainer position="top-center" />
      </div>
    </div>
  );
};

export default Body;
