import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { signup } from '../../Redux/Action';

const Signup = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignup = () => {
        dispatch(signup(name, email, password));
      };
    return (
        <div className="signup-container">
      <h2>Sign Up</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <button onClick={handleSignup}>signup
      </button>
    </div>
    )
}

export default Signup;