import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { signUpUser, signInUser } from "../utils/queries/userQuery";
import { useNavigate } from "react-router-dom";
import useAuthContext from "../utils/context/useAuthContext";

const useAuth = (type, email) => {
  const [err, setErr] = useState("");
  const navigate = useNavigate();
  const { logIn } = useAuthContext();
  const { mutate, isPending } = useMutation({
    mutationKey: [type],
    mutationFn: type === "signIn" ? signInUser : signUpUser,
    onSuccess: (data) => {
      const { token } = data;
      console.log(data);
      console.log("sucess");
      console.log(token);
      setErr("");
     
      if (type === "signUp") {
        navigate(`/register-email/${email}`);
      } else {
        if (token) {
          logIn(token);
          console.log(`${type} success :`, data);
        
        navigate("/");
        }
      }
    },
    onError: (error) => {
      console.log(`${type} error :`, error);
      setErr(error.message);
    },
  });

  return { mutate, isPending, err };
};

export default useAuth;
