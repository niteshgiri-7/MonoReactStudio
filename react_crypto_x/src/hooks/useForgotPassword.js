

import { useMutation } from "@tanstack/react-query";
import { forgotPassword } from "../utils/queries/userQuery";
import { useNavigate } from "react-router-dom";

const useForgotPassword = (email,setError) => {
  console.log("called",email)
  const navigate = useNavigate();
  const { mutate, isPending, isSuccess } = useMutation({
    mutationKey: ["forgot-password"],
    mutationFn: forgotPassword,
   onMutate:()=>{
    console.log("mutating started")
   },
    onSuccess: (data) => {
      console.log("success :", data);
      navigate(`/email-sent`,{
        state:email
      });
    },
    onError: (error) => {
      setError(error.message); 
      console.error("error:", error.message); 
    },
  });

  return { mutate, isPending, isSuccess };
};

export default useForgotPassword;
