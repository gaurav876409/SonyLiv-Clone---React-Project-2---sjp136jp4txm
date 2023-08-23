import React from 'react'
import { useDispatch } from 'react-redux';
import { logout } from '../../Redux/Action';

const Logout = () => {
    const dispatch = useDispatch();
    const handleLogout = () => {
        dispatch(logout());
      };
  return (
    <div>
        <h1>Logout</h1>
        <br></br>
        <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Logout;