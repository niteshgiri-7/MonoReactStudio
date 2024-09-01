import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import useAuthContext from "../../utils/context/useAuthContext";

const ProtectedRoute = ({ children }) => {
  const { cookie } = useAuthContext();
  const [isSignedIn, setIsSignedIn] = useState(null);
  useEffect(() => {
    const token = cookie?.jwt;
    setIsSignedIn(!!token);
  }, [cookie, cookie?.jwt]);
  if(isSignedIn==null){
    return null;
  }
  return !isSignedIn ? <Navigate to="/login" /> : children;
};

export default ProtectedRoute;
