import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { signUpFormSchema } from "../../utils/formSchema";

import Button from "../Button";
import useAuth from "../../hooks/useAuth";
const SignUp = () => {
  const [email, setEmail] = useState("");
  const { mutate, isPending, err } = useAuth("signUp",email);

  return (
    <div className="w-screen h-screen flex justify-center p-10 bg-gray-100">
      <div className="w-full h-fit max-w-lg p-8 border border-gray-300 shadow-gray-400 shadow-md rounded-lg bg-white">
        <h1 className="font-bold text-xl sm:text-2xl text-left whitespace-nowrap">
          Welcome to React CryptoX
        </h1>
        <h3 className="text-left text-gray-700 mt-3 text-xs sm:text-sm">
          Create a free account by filling the form below
        </h3>
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            repeatPassword: "",
          }}
          validationSchema={signUpFormSchema}
          onSubmit={(values) => {
            const { url, repeatPassword, ...newValue } = values;
            setEmail(values.email)
            mutate(newValue);
          }}
        >
          <Form className="flex flex-col gap-6 mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col">
                <label className="font-bold">Name</label>
                <Field
                  className="px-4 py-2 rounded-md w-full border border-gray-400"
                  placeholder="James"
                  name="firstName"
                />
                <ErrorMessage
                  name="firstName"
                  component="span"
                  className="text-red-500 text-sm"
                />
              </div>
              <div className="flex flex-col">
                <label className="font-bold">Surname</label>
                <Field
                  className="px-4 py-2 rounded-md w-full border border-gray-400"
                  placeholder="Arthur"
                  name="lastName"
                />
                <ErrorMessage
                  name="lastName"
                  component="span"
                  className="text-red-500 text-sm"
                />
              </div>
            </div>
            <div className="flex flex-col gap-5 mt-5">
              <div className="flex flex-col">
                <label className="font-bold">Email</label>
                <Field
                  className="px-4 py-2 rounded-md w-full border border-gray-400"
                  placeholder="name@mail.com"
                  name="email"
                />
                <ErrorMessage
                  name="email"
                  component="span"
                  className="text-red-500 text-sm"
                />
                <span className="text-red-500 text-sm">{err}</span>
              </div>
              <div className="flex flex-col">
                <label className="font-bold">Password</label>
                <Field
                  type="password"
                  className="px-4 py-2 rounded-md w-full border border-gray-400"
                  placeholder="********"
                  name="password"
                />
                <ErrorMessage
                  name="password"
                  component="span"
                  className="text-red-500 text-sm"
                />
              </div>
              <div className="flex flex-col">
                <label className="font-bold">Repeat Password</label>
                <Field
                  type="password"
                  className="px-4 py-2 rounded-md w-full border border-gray-400"
                  placeholder="********"
                  name="repeatPassword"
                />
                <ErrorMessage
                  name="repeatPassword"
                  component="span"
                  className="text-red-500 text-sm"
                />
              </div>
            </div>
            <div className="flex items-center gap-2 mt-4">
              <Field type="checkbox" id="terms" className="w-4 h-4" />
              <label htmlFor="terms" className="text-sm">
                I agree with{" "}
                <span className="text-purple-900">Terms & Conditions</span>
              </label>
            </div>
            <div className="flex flex-col gap-3 font-bold mt-6 text-center">
              <div className="w-full flex flex-col">
                <Button text="Create Account" isSpin={isPending} />
              </div>
              <h1 className="text-sm text-gray-600">
                Already have an account?{" "}
                <Link to="/login">
                  <span className="font-bold text-md cursor-pointer text-purple-600">
                    Log In
                  </span>
                </Link>
              </h1>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default SignUp;
