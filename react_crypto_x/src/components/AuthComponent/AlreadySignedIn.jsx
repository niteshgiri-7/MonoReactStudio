import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import useAuthContext from "../../utils/context/useAuthContext";

const AlreadySignedIn = ({ children }) => {
  const { cookie } = useAuthContext();
  const [isSignedIn, setIsSignedIn] = useState(null);

  useEffect(() => {
    console.log(cookie)
    const token = cookie?.jwt;
    setIsSignedIn(!!token);
  }, [cookie?.jwt,cookie]);

  if(isSignedIn==null){
    return null;
  }

  return isSignedIn ? <Navigate to="/" /> : children;
};

export default AlreadySignedIn;
