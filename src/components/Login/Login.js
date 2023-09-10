import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../Redux/Action';
import './Login.css';
import { Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    dispatch(login(email, password));
  };

  const user = useSelector(state => state.user.user);
  if (user && user.token) {
    localStorage.setItem('user', JSON.stringify(user));
    navigate('/home')
  }
  console.log("line 18", user?.status)

  return (
    <div className='login_container'>
      <div className='login_body' style={{height: '400px'}}>
        <div className='login_body_title'>Sign In</div>
        <div className='login_body_input'>
          <input type="text" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
        </div>
        <div className='login_body_input'>
          <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
        </div>
        <div className='login_body_button'>
          <button onClick={handleLogin}>Sign In</button>
        </div>
        <div className='new_login_user'>
          <span className='new_login_user1'>New to sonyLiv?</span>
          <Link to='/signup'>
            <span className='new_login_user2'>sign up now</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Login;