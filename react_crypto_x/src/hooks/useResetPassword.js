import { useMutation } from "@tanstack/react-query";
import { resetPassword } from "../utils/queries/userQuery";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const useResetPassword = () => {
  const navigate = useNavigate();
  const [err, setErr] = useState("");
  const { mutate, isPending } = useMutation({
    mutationKey: ["reset-password"],
    mutationFn: resetPassword,
    onSuccess: (data) => {
      console.log("success:", data);
      setErr("");
      navigate("/reset-done");
    },
    onError: (error) => {
      setErr(error.message);
      console.error(error.message);
    },
  });

  return { mutate, isPending, err, setErr };
};

export default useResetPassword;
