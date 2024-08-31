import React, {  useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import useForgotPassword from "../../hooks/useForgotPassword";
import { ReactComponent as Loader } from "../../assests/Loader.svg";
import "../../assests/Loader.css";
const ForgotPw = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);

  const { mutate, isPending } = useForgotPassword(email, setError);
  const handleClick = (e) => {
    e.preventDefault();
    const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    const isGmailValid = gmailRegex.test(email);
    if (email.length === 0) {
      return setError("Enter email");
    }
    if (!isGmailValid) {
      return setError("Enter Valid email");
    }
    setError("");
    console.log("hello");
    mutate(email);
  };
  return (
    <div className=" w-screen h-screen flex justify-center items-center bg-gray-300 p-2">
      <div className="bg-white rounded-lg p-10 max-w-sm md:max-w-xl">
        <div className="flex flex-col gap-2  font-bold text-3xl ">
          <Link to="/login">
          
          <FaArrowLeft className="cursor-pointer" />
          </Link>
          <h1 className="mt-2">Forgot Password</h1>
          <span className="text-xs md:text-lg">
            Enter your email address for which you want to reset the password
          </span>
        </div>
        <div>
          <form>
            <div className="flex flex-col gap-6 mt-3">
              <div className="flex flex-col gap-1 font-bold">
                <label>Email</label>
                <input
                  className="px-4 py-2 rounded-lg"
                  type="email"
                  placeholder="name@email.com"
                  onChange={(e) => setEmail(e.target.value)}
                ></input>
                <span className="text-red-500 text-xs">{error}</span>
              </div>
              <div className="flex flex-col">
                <button
                  className="bg-gray-500 text-gray-200 px-4 py-2 rounded-lg flex justify-center items-center"
                  onClick={(e) => handleClick(e)}
                  type="submit"
                >
               {!isPending? "Reset Password": <Loader className="spinner"/>}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPw;
