import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../Redux/Action';

const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    dispatch(login(email, password));
  };

  const user = useSelector(state => state.user.user);
  if (user && user.token) {
    localStorage.setItem('user', JSON.stringify(user));
  }

  
  return (
    <div>
      <h2>Login</h2>
      <input type="text" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
    </div>
  )
}

export default Login;