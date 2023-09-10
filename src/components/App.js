import React from 'react'
import '../styles/App.css';
import Navbar from './Navbar/Navbar';
import Home from './Home/Home';
import Show from './Show/Show';
import Login from './Login/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Video from './Video/Video';
import Signup from './Login/Signup';
import UpdatePassword from './Login/UpdatePassword';
import Mylist from './Mylist/Mylist';
import Data from './AllData/Data';
import Subscribe from './Subscribe/Subscribe';
import Footer from './Footer/Footer';
import Upload from './Upload/Upload';
import ProtectedRoute from './Utils/ProtectedRoute';

const App = () => {
  return (
    <div id="main">
      <Router basename='/'>
        <Routes>
          <Route path='/home' element={<ProtectedRoute><Navbar/> <Home/> <Footer/></ProtectedRoute>}/>
          <Route path='/show/:id' element={<ProtectedRoute><Navbar/> <Show/> <Footer/></ProtectedRoute>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/updatePassword' element={<UpdatePassword/>}/>
          <Route path='/upload' element={<Upload/>}/>
          <Route path='/list' element={<ProtectedRoute><Navbar/> <Mylist/> <Footer/></ProtectedRoute>}/>
          <Route path='/data' element={<ProtectedRoute><Navbar/> <Data/> <Footer/></ProtectedRoute>}/>
          <Route path='/subscribe' element={<ProtectedRoute><Subscribe/></ProtectedRoute>}/>
          <Route path='/video/:id' element={<ProtectedRoute><Video/></ProtectedRoute>}/>
          <Route path='/' element={<Login/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App;
