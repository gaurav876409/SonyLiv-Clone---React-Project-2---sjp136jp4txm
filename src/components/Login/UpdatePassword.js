import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { updatePassword } from '../../Redux/Action';
import { useNavigate } from 'react-router';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';

const UpdatePassword = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [name, setName] = useState('')
  const [email, setEmail] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [isDisplay, setIsDisplay] = useState(false);

  const error = useSelector((state) => state.user.error);

  const handleUpdatePassword = () => {
    dispatch(updatePassword(name, email, currentPassword, newPassword));
    setTimeout(() => {
      setIsDisplay(true);
    }, 1000)
    // setIsAlertOpen(true);
  };
  // setTimeout(() => {
  //   navigate('/home')
  // }, 2000)
  const handleCloseAlert = () => {
    setIsAlertOpen(false);
  };
  return (
    <div className='login_container'>
      <div className='login_body'>
        <div className='login_body_title'>Update Password</div>
        <div className='login_body_input'>
          <input type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
        </div>
        <div className='login_body_input'>
          <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
        </div>
        <div className='login_body_input'>
          <input
            type="password"
            placeholder="Current Password"
            value={currentPassword}
            onChange={e => setCurrentPassword(e.target.value)}
          />
        </div>
        <div className='login_body_input'>
          <input
            type="password"
            placeholder="New Password"
            value={newPassword}
            onChange={e => setNewPassword(e.target.value)}
          />
        </div>
        {error !== null && (<div className='error_message' style={{display: isDisplay ? 'block' : 'none'}}>{error.message}</div>)}
        <div className='login_body_button'>
          <button onClick={handleUpdatePassword}>Update Password</button>
        </div>
      </div>
      <Snackbar open={isAlertOpen} autoHideDuration={6000} onClose={handleCloseAlert}>
        <Stack sx={{ width: '100%' }} spacing={2}>
          <Alert severity="success" onClose={handleCloseAlert}>
            password updated Successful!
          </Alert>
        </Stack>
      </Snackbar>
    </div>
  )
}

export default UpdatePassword;