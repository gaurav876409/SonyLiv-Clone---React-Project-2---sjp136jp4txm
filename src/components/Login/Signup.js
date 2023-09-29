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

  const error = useSelector((state) => state.user.error);
  
  const handleSignup = () => {
    dispatch(signup(name, email, password))
      setTimeout(() => {
        setIsDisplay(true);
      }, 1000)
  };
  
  const sign_up_user = useSelector(state => state.user.signupUser);
  if (sign_up_user && sign_up_user.token) {
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
        {error !== null ? (<div className='error_message' style={{display: isDisplay ? 'block' : 'none'}}>{error.message}</div>) : (<div className='success_message'>{sign_up_user?.status}</div>)}
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


// import React, { useState } from "react";
// import logo from "../../img/ytm_logo.png";
// import { TextField } from "@mui/material";
// import "../../styles/authpage.css";
// import { Link, useNavigate } from "react-router-dom";

// function Signup(props) {
//   const [user, setUser] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });
//   const [errMsg, setErrMsg] = useState("");
//   const [success, setSuccess] = useState("");
//   const navigate = useNavigate();

//   const signup = async (user) => {
//     try {
//       const res = await fetch(
//         "https://academics.newtonschool.co/api/v1/user/signup",
//         {
//           method: "POST",
//           headers: {
//             projectId: "ucnulw1bbazc",
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({
//             name: user.name,
//             email: user.email,
//             password: user.password,
//             appType: "music",
//           }),
//         }
//       );

//       const restojson = await res.json();
//       if (restojson.status === "fail") {
//         return setErrMsg(restojson.message);
//       }
//       setErrMsg("");
//       props.setTokenNo(restojson.token);
//       setSuccess(restojson.status);
//       setTimeout(() => {
//         navigate("/");
//       }, 1000);
//     } catch (err) {
//       console.error(err);
//     }
//   };
//   const handleSignup = () => {
//     signup(user);
//   };

//   return (
//     <div className="authpage">
//       <div className="authpage_overlay"></div>
//       <div className="logo">
//         <img src={logo} />
//       </div>
//       <div className="authpage_form_message">
//         <div className="authpage_message">
//           <h1>Sign up for free to start listening.</h1>
//         </div>
//         <div className="signup authpage_form">
//           <TextField
//             error={errMsg === "" ? false : true}
//             label="Name"
//             value={user.name}
//             onChange={(e) =>
//               setUser((prev) => ({ ...prev, name: e.target.value }))
//             }
//           />
//           <TextField
//             error={errMsg === "" ? false : true}
//             label="Email"
//             type="email"
//             onChange={(e) =>
//               setUser((prev) => ({ ...prev, email: e.target.value }))
//             }
//           />
//           <TextField
//             error={errMsg === "" ? false : true}
//             label="Password"
//             type="password"
//             onChange={(e) =>
//               setUser((prev) => ({ ...prev, password: e.target.value }))
//             }
//           />
//           {errMsg === "" ? (
//             <p
//               style={{
//                 color: "green",
//                 fontSize: "12px",
//                 fontWeight: 600,
//                 textAlign: "center",
//                 lineHeight: "22px",
//               }}
//             >
//               {success}
//             </p>
//           ) : (
//             <p
//               style={{
//                 color: "red",
//                 fontSize: "12px",
//                 fontWeight: 600,
//                 textAlign: "center",
//                 lineHeight: "22px",
//               }}
//             >
//               {errMsg}
//             </p>
//           )}
//           <button className="authpage_btn" onClick={handleSignup}>
//             Sign up
//           </button>
//           <p style={{ fontSize: "13px", display: "flex" }}>
//             Have an account?
//             <Link to="/">
//               <span className="hoverid">Log in</span>
//             </Link>
//             .
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Signup;