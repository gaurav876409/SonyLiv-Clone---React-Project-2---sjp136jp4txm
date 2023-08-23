import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { updatePassword } from '../../Redux/Action';

const UpdatePassword = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState('')
    const [email, setEmail] = useState('');
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');

    const handleUpdatePassword = () => {
        dispatch(updatePassword(name, email, currentPassword, newPassword));
    };
    return (
        <div className="update-password-container">
            <h2>Update Password</h2>
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
                placeholder="Current Password"
                value={currentPassword}
                onChange={e => setCurrentPassword(e.target.value)}
            />
            <input
                type="password"
                placeholder="New Password"
                value={newPassword}
                onChange={e => setNewPassword(e.target.value)}
            />
            <button onClick={handleUpdatePassword}>Update Password</button>
        </div>
    )
}

export default UpdatePassword;