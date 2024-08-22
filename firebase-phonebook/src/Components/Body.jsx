import Nav from "./Nav";
import NotFound from "./NotFound";
import Contact from "./Contact";
import Modal from "./Modal";
import AddAndUpdate from "./Form";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../config/firebase";
import { useEffect, useState } from "react";

const Body = () => {
  const [contacts, setContacts] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    getContacts();
  }, []);

  const getContacts = async () => {
    try {
      const contactsRef = collection(db, "contacts");

      onSnapshot(contactsRef, (snapshot) => {
        const contactLists = snapshot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        });
        console.log("from api", contactLists);
        setContacts(contactLists);
        console.log("form varibal", contacts);
        return contactLists;
      });
    } catch (error) {
      console.log(error);
    }
  };
  const getSearch = (e) => {
    const value = e.target.value;

    const contactsRef = collection(db, "contacts");

    onSnapshot(contactsRef, (snapshot) => {
      const contactLists = snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });

      const filteredContacts = contactLists.filter((contact) =>
        contact.name.toLowerCase().includes(value.toLowerCase())
      );

      setContacts(filteredContacts);

      return filteredContacts;
    });
  };
  return (
    <>
      <div className="flex justify-center bg-gray-600">
        <div className=" bg-[#323335] w-[455px] h-screen relative">
          <Nav onChanges={getSearch} onOpen={setIsOpen}/>
          <div className=" w-full flex flex-col gap-2 ">
            {contacts?.map((contact) => {
              return <Contact key={contact.id} data={contact} />;
            })}
          </div>
      
        <Modal isOpen={isOpen} onClose={setIsOpen}>
         <AddAndUpdate onClose={setIsOpen}/>
        </Modal>
        </div>
      </div>
    </>
  );
};

export default Body;
