import { AuthContext } from "./AuthContextProvider";
import { useContext } from "react";

import React from 'react'

const PrivateRoute = (children) => {
  
    const {isLoggedIn} = useContext(Authcontext);

if(!IsLoggedIn){
    <Navigate to={'/login'}/>
}

return children;
}

export default PrivateRoute