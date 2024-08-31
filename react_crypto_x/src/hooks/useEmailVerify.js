import { useMutation, useQuery } from "@tanstack/react-query";
import {
  sendVerificationEmail,
  verifyEmailAddressSignUp,
} from "../utils/queries/userQuery";

export const useSendVerificationEmail = (email) => {
  const { mutate, isPending } = useMutation({
    mutationKey: ["send-verification-email"],
    mutationFn: sendVerificationEmail,
    onSettled: (data) => {
      console.log("success:", data);
    },
    onError: (error) => {
      console.log(error);
    },
    enabled: !!email,
  });

  return { mutate, isPending };
};

export const useVerifyEmailSignUp = (token) => {
  const { data, isLoading, isSuccess } = useQuery({
    queryKey: ["verifyEmail"],
    queryFn: () => verifyEmailAddressSignUp(token),
    onSuccess: (data) => {
      console.log("success: ", data);
      console.log(data);
    },
    onError: (error) => {
      console.log("error :", error);
    },
    enabled:!!token,
  });
 
  return { isLoading, isSuccess ,data};
};
