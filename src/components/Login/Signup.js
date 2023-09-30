import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { signup } from '../../Redux/Action';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isDisplay, setIsDisplay] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const error = useSelector((state) => state.user.error);
  
  const handleSignup = () => {
    if(!password){
      setPasswordError(true);
    }
    dispatch(signup(name, email, password))
      setTimeout(() => {
          setIsDisplay(true);
      }, 1000)
  };
  
  const sign_up_user = useSelector(state => state.user.signupUser);
  if (sign_up_user && sign_up_user.token && !passwordError) {
    localStorage.setItem('sign_up_user', JSON.stringify(sign_up_user));
    setTimeout(() => {
      navigate('/home')
    }, 2000)
  }


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
        {/* {(error !== null && passwordError) ? (<div className='error_message' style={{display: isDisplay ? 'block' : 'none'}}>{error.message}</div>) : (<div className='success_message'>{sign_up_user?.status}</div>)} */}
        {passwordError ? (<div className='error_message'>Please Enter Password</div>) : (error !== null ? (<div className='error_message' style={{display: isDisplay ? 'block' : 'none'}}>{error.message}</div>) : (<div className='success_message'>{sign_up_user?.status}</div>))}
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
    </div>
  )
}

export default Signup;
