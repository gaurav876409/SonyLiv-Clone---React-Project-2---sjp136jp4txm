import React from 'react'
import '../styles/App.css';
import Navbar from './Navbar/Navbar';
import Home from './Home/Home';
import Show from './Show/Show';
import Login from './Login/Login';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import Video from './Video/Video';
import Signup from './Login/Signup';
import UpdatePassword from './Login/UpdatePassword';
import Logout from './Login/Logout';
const App = () => {

  return (
    <div id="main">
      <Router basename='/'>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/home' element={[<Navbar/>, <Home/> ]}/>
          <Route path='/show/:id' element={[<Navbar/>, <Show/> ]}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/updatePassword' element={<UpdatePassword/>}/>
          <Route path='/logout' element={<Logout/>}/>
          <Route path='/video/:id' element={<Video/>}/>
        </Routes>
      </Router>
      
    </div>
  )
}


export default App;
