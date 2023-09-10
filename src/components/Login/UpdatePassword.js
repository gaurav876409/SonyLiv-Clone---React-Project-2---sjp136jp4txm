import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { updatePassword } from '../../Redux/Action';
import { useNavigate } from 'react-router';

const UpdatePassword = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [name, setName] = useState('')
  const [email, setEmail] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const handleUpdatePassword = () => {
    dispatch(updatePassword(name, email, currentPassword, newPassword));
    navigate('/');
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
        <div className='login_body_button'>
          <button onClick={handleUpdatePassword}>Update Password</button>
        </div>
      </div>
    </div>
  )
}

export default UpdatePassword;