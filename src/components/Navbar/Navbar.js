import React from 'react'
import "./Navbar.css"
import {AiOutlineSearch} from 'react-icons/ai'

const Navbar = () => {
  return (
    <div className='navbar_container'>
        <div className='navbar_logo'>
            <div className='navbar_image'>
                <img src='https://images.slivcdn.com/UI_icons/sonyliv_new_revised_header_logo.png?w=40&q=high&fr=webp'/>
            </div>
            <div className='navbar_subscription'>
                <button className='navbar_subscription_button'>Subscribe<img src='https://images.slivcdn.com/UI_icons/smart_hook/arrow_image.png?h=8&w=4&q=high&fr=webp'/></button>
            </div>
            <div className='navbar_logo_seperator_div'>
                <div className='navbar_logo_seperator'></div>
            </div>
        </div>
        <div className='navbar_items'>
            <span><a href='#' className='navbar_item'>Movie</a></span>
            <span><a href='#' className='navbar_item'>Video Song</a></span>
            <span><a href='#' className='navbar_item'>Documentary</a></span>
            <span><a href='#' className='navbar_item'>TV Show</a></span>
            <span><a href='#' className='navbar_item'>Short Film</a></span>
            <span><a href='#' className='navbar_item'>Trailer</a></span>
            <span><a href='#' className='navbar_item'>Web Series</a></span>
        </div>
        <div className='navbar_search'>
            <a href='#'><AiOutlineSearch/></a>
            <div className='navbar_avatar'><img src='https://images.slivcdn.com/UI_icons/Multiprofile/profile-00.png?h=28&w=28&q=high&fr=webp'/></div>
        </div>
    </div>
  )
}

export default Navbar;