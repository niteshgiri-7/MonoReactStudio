import React, { useRef } from "react";
import { useParams } from "react-router-dom";
import useResetPassword from "../../hooks/useResetPassword";
import { ReactComponent as Loader } from "../../assests/Loader.svg";
import "../../assests/Loader.css";
const ResetPw = () => {
  const { token } = useParams();
  const pw = useRef();
  const repeatPw = useRef();
  let flag = true;
  const { mutate, isPending, err, setErr } = useResetPassword();
  const handleClick = () => {
    const password = pw.current.value;
    const repeatPassword = repeatPw.current.value;
    console.log(password, repeatPassword);
    if (password.trim().length === 0) {
      setErr("Enter Password");
      flag = false;
    }
    if (password !== repeatPassword) {
      setErr("Passwords must match");
      flag = false;
    }
    if (flag) {
      console.log(token, password);
      mutate({ token, password });
    }
  };
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-gray-300">
      <div className="w-full max-w-xs md:max-w-lg xl:max-w-xl h-fit flex flex-col gap-4 bg-white rounded-lg p-8 md:p-12 lg:p-16 shadow-md">
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-bold">Reset Password</h1>
          <h3 className="text-lg text-gray-700">Enter your new password</h3>
        </div>
        <form>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col">
              <label>New Password</label>
              <input
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
                type="password"
                placeholder="********"
                ref={pw}
              />
              <span className="text-red-500 text-xs">{err}</span>
            </div>
            <div className="flex flex-col">
              <label>Repeat New Password</label>
              <input
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
                type="password"
                placeholder="********"
                ref={repeatPw}
              />
            </div>
          </div>
          <div className="flex flex-col mt-6">
            <button
              className="bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-800 flex justify-center items-center"
              type="button"
              onClick={handleClick}
            >
              {!isPending ? "Reset Password" : <Loader className="spinner" />}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ResetPw;
