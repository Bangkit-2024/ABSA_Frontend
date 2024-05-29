import React, { ReactNode, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { RootState } from "slices";
import {  useDispatch, useSelector } from "react-redux";

import Loading from 'pages/StaticPage/Loading'

interface AuthProtectedProps {
  children: ReactNode;
}

const AuthProtected: React.FC<AuthProtectedProps> = ({ children }) => {

  // Check state if data stil loaded
  const {isLoading} = useSelector((state:RootState)=>state.Boot)

  if(isLoading){
    return <Loading /> 
  } 


  if (!localStorage.getItem("authUser")) {
    return <Navigate to={{ pathname: "/login" }} />;
  }

  return <React.Fragment>{children}</React.Fragment>;
};

export default AuthProtected;
