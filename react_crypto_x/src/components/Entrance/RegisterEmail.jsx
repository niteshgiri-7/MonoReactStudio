import React, { useEffect } from "react";
import { MdEmail } from "react-icons/md";
import {useSendVerificationEmail } from "../../hooks/useEmailVerify";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../Button";

const RegisterEmail = () => {
  const navigate = useNavigate();
 const {email} = useParams()
  const { mutate, isPending } = useSendVerificationEmail(email);

  useEffect(() => {
    mutate(email);
  }, [email, mutate]);

  if (!email) {
    return navigate("/signUp");
  }
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-gray-300 p-2">
      <div className="bg-white rounded-lg px-16 py-8 flex flex-col gap-3 max-w-md md:max-w-xl">
        <div className="flex justify-center">
          <MdEmail className="text-purple-600 font-bold text-6xl place-self-center" />
        </div>
        <h1 className="font-black text-xl text-center">Email Verification</h1>
        <h3 className="text-gray-700 text-sm ">
          We have sent an email verication to{" "}
          <span className=" text-[16px] text-black">{email}</span> if you didn't
          receive it, click the button below
        </h3>

        <div className="flex flex-col" onClick={() => mutate(email)}>
          <Button text="Resend Email" isSpin={isPending} />
        </div>
      </div>
    </div>
  );
};

export default RegisterEmail;
