import React from "react";
import { Formik, Field, Form } from "formik";
import { db } from "../config/firebase";
import { addDoc, collection } from "firebase/firestore";
const AddAndUpdate = ({ onClose }) => {
  const addContact = async (contact) => {
    try {
      const contactRef = collection(db, "contacts");
      await addDoc(contactRef, contact);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="flex flex-col gap-3 p-2 mr-1 ">
        <Formik
          initialValues={{
            name: "",
            email: "",
          }}
          onSubmit={(values) => {
            console.log(values);
            addContact(values);
            onclose(false);
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
                Add Contact
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </>
  );
};

export default AddAndUpdate;
