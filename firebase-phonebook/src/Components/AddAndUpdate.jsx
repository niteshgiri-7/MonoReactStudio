import React from "react";
import { Formik, Field, Form } from "formik";
import { db } from "../config/firebase";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
const AddAndUpdate = ({ currentContact, onClose, isUpdate }) => {

  const addContact = async (contact) => {
    try {
      console.log(contact);
      const contactRef = collection(db, "contacts");
      await addDoc(contactRef, contact);
    } catch (error) {
      console.log(error);
    }
  };
  const updateContact = async (contact, id) => {
    try {
      const contactRef = doc(db, "contacts", id);
      await updateDoc(contactRef, contact);
      onClose();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="flex flex-col gap-3 p-2 mr-1 ">
        <Formik
          initialValues={
            isUpdate
              ? {
                  name: currentContact.name,
                  email: currentContact.email,
                }
              : {
                  name: "",
                  email: "",
                }
          }
          onSubmit={(values) => {
            console.log(values);
            isUpdate
              ? updateContact(values, currentContact.id)
              : addContact(values);
            onClose(false);
          }}
        >
          <Form className="flex flex-col gap-2">
            <label htmlFor="name">Name</label>
            <Field
              className="p-2 rounded-md border border-black placeholder-black"
              name="name"
              type="text"
            />
            <label htmlFor="email">Email</label>
            <Field
              className="p-2  rounded-md border border-black placeholder-black"
              name="email"
              type="email"
            />
            <div className="flex justify-end">
              <button
                className="bg-[#FCCA3F] px-3 py-2 rounded-lg font-bold"
                type="submit"
              >
                {isUpdate ? "update" : "Add Contact"}
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </>
  );
};

export default AddAndUpdate;
