import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { signUpUser, signInUser } from "../utils/queries/userQuery";
import { useNavigate } from "react-router-dom";

const useAuth = (type,email) => {
  const [err, setErr] = useState("");
  const navigate = useNavigate();
  const { mutate, isPending } = useMutation({
    mutationKey: [type],
    mutationFn: type === "signIn" ? signInUser : signUpUser,
    onSuccess: (data) => {

      console.log(`${type} success :`, data);
      if (type === "signUp") {
        navigate(`/register-email/${email}`);
      }
      else{
        navigate("/")
      }
    },
    onError: (error) => {
      console.log(`${type} error :`, error);
      setErr(type === "signIn" ? "Invalid email or password" : error.message);
    },
  });

  return { mutate, isPending, err };
};

export default useAuth;
