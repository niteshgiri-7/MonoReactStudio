import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { db } from "../config/firebase";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as Yup from "yup";

const AddAndUpdate = ({ currentContact, onClose, isUpdate }) => {
  const contactValidationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
  });

  const addContact = async (contact) => {
    try {
      const contactRef = collection(db, "contacts");
      await addDoc(contactRef, contact);
      toast.success("Contact added successfully");
    } catch (error) {
    }
  };

  const updateContact = async (contact, id) => {
    try {
      const contactRef = doc(db, "contacts", id);
      await updateDoc(contactRef, contact);
      toast.success("Contact updated successfully");
    } catch (error) {
    }
  };

  return (
    <>
      <div className="flex flex-col gap-3 p-2 mr-1">
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
          validationSchema={contactValidationSchema}
          onSubmit={(values) => {
            if (isUpdate) {
              updateContact(values, currentContact.id);
            } else {
              addContact(values);
            }
            onClose(false);
          }}
        >
          <Form className="flex flex-col gap-2 max-w-full">
            <label htmlFor="name">Name</label>
            <Field
              className="p-2 rounded-md border border-black placeholder-black"
              name="name"
              type="text"
            />
            <ErrorMessage name="name" component="div" className="text-red-500 text-sm" />

            <label htmlFor="email">Email</label>
            <Field
              className="p-2 rounded-md border border-black placeholder-black"
              name="email"
              type="email"
            />
            <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />

            <div className="flex justify-end">
              <button
                className="bg-[#FCCA3F] px-3 py-2 rounded-lg font-bold"
                type="submit"
              >
                {isUpdate ? "Update" : "Add Contact"}
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </>
  );
};

export default AddAndUpdate;
