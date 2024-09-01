import { useContext } from "react";
import { AuthContext } from "./AuthContext";

const useAuthContext = () => {
  const { user, token, logIn, logOut ,cookie } = useContext(AuthContext);

  return { user, token, logIn, logOut ,cookie };
};

export default useAuthContext;
