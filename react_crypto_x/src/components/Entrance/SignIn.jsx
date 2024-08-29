import React from "react";
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useMutation } from "@tanstack/react-query";
import { signInFormSchema } from "../../utils/formSchema";
import { signInUser } from "../../utils/queries/userQuery";

const SignIn = () => {
  const { mutate } = useMutation({
    mutationKey: ["signIn"],
    mutationFn: signInUser,
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (error) => {
      console.log(error);
    },
  });


  return (
    <div className="w-screen h-screen flex justify-center p-10 bg-gray-">
      <div className="w-full h-fit max-w-lg p-8 border border-gray-300 shadow-gray-400 shadow-md rounded-lg bg-white">
        <h1 className="font-bold text-xl sm:text-2xl  text-left">
          Welcome to React CryptoX
        </h1>
        <h3 className="text-left text-gray-700 mt-3 text-xs sm:text-sm">
          Enter your credentials to access the account
        </h3>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={signInFormSchema}
          onSubmit={(values) => {
            mutate(values);
          }}
        >
          <Form className="flex flex-col gap-6 mt-6">
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
            </div>
            <div className="flex  justify-between gap-2 mt-4">
              <div className="flex items-center gap-2">
                <label className="flex gap-2">
                  <Field type="checkbox" name="checked" value="One" />
                  Remember Me
                </label>
              </div>

              <button className="font-bold text-purple-600 cursor-pointer">
                Forgot Password?
              </button>
            </div>
            <div className="flex flex-col gap-3 font-bold mt-6 text-center">
              <button
                className="px-4 py-2 bg-gray-400 rounded-lg text-gray-700"
                type="submit"
              >
                Log In
              </button>
              <Link to="/signUp">
                <button className="px-4 py-2 bg-gray-200 rounded-lg text-gray-900 w-full">
                  Create New Account
                </button>
              </Link>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default SignIn;
