import { jwtDecode } from "jwt-decode";
import { useCookies } from "react-cookie";

const { createContext, useState } = require("react");

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);
  const [cookie, setCookie, removeCookie] = useCookies(["jwt"]);

  const logIn = (tokenStr) => {
    if (tokenStr) {
      setToken(tokenStr);
      const { exp, firstName, } = jwtDecode(tokenStr);
      console.log(firstName)
      setUser(firstName);
      console.log(user)
      setCookie("jwt", tokenStr, {
        path: "/",
        maxAge: exp,
        sameSite: true,
      });
    }
    console.log(cookie,token,user);
  };

  const logOut = () => {
    setToken(null);
    setUser(null);
    removeCookie("jwt", { path: "/" });
  };
  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        logIn,
        logOut,
        cookie,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
