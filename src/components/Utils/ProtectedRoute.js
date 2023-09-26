import React from 'react'
import {useSelector} from "react-redux"
import {Navigate, useLocation} from "react-router-dom"

const ProtectedRoute = ({children}) => {
    const user1 = useSelector((state) => state.user.signinUser);
    const user2 = useSelector((state) => state.user.signupUser);
    let location = useLocation();
    console.log('line 9', user1)
    console.log('line 10', user2)
    if(!user1 && !user2) {
        return <Navigate to="/"/>
    }
  return children
}

export default ProtectedRoute;
