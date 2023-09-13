import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { signup } from '../../Redux/Action';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';

const Signup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  
  const handleSignup = () => {
    dispatch(signup(name, email, password));
    setIsAlertOpen(true);
    setTimeout(() => {
      navigate('/home');
    }, 3000);
  };
  const handleCloseAlert = () => {
    setIsAlertOpen(false);
  };
  return (
    <div className='login_container'>
      <div className='login_body'>
        <div className='login_body_title'>Sign Up</div>
        <div className='login_body_input'>
          <input type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
        </div>
        <div className='login_body_input'>
          <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
        </div>
        <div className='login_body_input'>
          <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
        </div>
        <div className='login_body_button'>
          <button onClick={handleSignup}>Sign Up</button>
        </div>
        <div className='new_login_user'>
          <span className='new_login_user1'>Already sign up?</span>
          <Link to='/'>
            <span className='new_login_user2'>Please sign in</span>
          </Link>
        </div>
      </div>
      <Snackbar open={isAlertOpen} autoHideDuration={3000} onClose={handleCloseAlert}>
        <Stack sx={{ width: '100%' }} spacing={2}>
          <Alert severity="success" onClose={handleCloseAlert}>
            Signup Successful!
          </Alert>
        </Stack>
      </Snackbar>
    </div>
  )
}

export default Signup;