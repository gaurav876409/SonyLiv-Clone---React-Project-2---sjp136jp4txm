import React, { useState, useEffect } from 'react'
import "./Navbar.css"
import { AiOutlineSearch } from 'react-icons/ai'
import { FaArrowRight } from 'react-icons/fa'
import axios from 'axios'

const Navbar = () => {
    const [webSeriesData, setWebSeriesData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get('https://academics.newtonschool.co/api/v1/ott/show?filter={"type" : "web series"}', {
                    headers: {
                        projectId: 'sjp136jp4txm',
                    },
                });
                setWebSeriesData(response.data);
                console.log("navbar", response.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }
        fetchData();
    }, []);
    const filterByKeyword = (keyword) => {
        const filtered = webSeriesData?.data.filter(item => item.keywords.includes(keyword));
        setFilteredData(filtered);
    };
    console.log("state", webSeriesData?.data)

    return (
        <div className='navbar_container'>
            <div className='navbar_logo'>
                <div className='navbar_image'>
                    <img src='https://images.slivcdn.com/UI_icons/sonyliv_new_revised_header_logo.png?w=40&q=high&fr=webp' />
                </div>
                <div className='navbar_subscription'>
                    <button className='navbar_subscription_button'>Subscribe<img src='https://images.slivcdn.com/UI_icons/smart_hook/arrow_image.png?h=8&w=4&q=high&fr=webp' /></button>
                </div>
                <div className='navbar_logo_seperator_div'>
                    <div className='navbar_logo_seperator'></div>
                </div>
            </div>
            <div className='navbar_items'>
                <span><a href='#' className='navbar_item check1'>Movie
                    <div className='check'>
                        <div className='check2'>
                            <div className='top_left'>All Movies <span className='fa_icon'><FaArrowRight /></span></div>
                            <div className='top_right'>
                                <button className='top_right_btn' onClick={() => filterByKeyword('romance')}>Romance</button>
                                <button className='top_right_btn' onClick={() => filterByKeyword('thriller')}>Thriller</button>
                                <button className='top_right_btn' onClick={() => filterByKeyword('fantasy')}>Fantasy</button>
                                <button className='top_right_btn' onClick={() => filterByKeyword('action')}>Action</button>
                            </div>
                        </div>
                        <div className='check_center'>
                            <div className='filtered_data'>
                                {filteredData?.map(item => (
                                    <div key={item._id} className='filtered_item'>
                                        <img src={item.thumbnail} alt={item.title} width={'100px'}/>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </a></span>
                <span><a href='#' className='navbar_item'>Video Song</a></span>
                <span><a href='#' className='navbar_item'>Documentary</a></span>
                <span><a href='#' className='navbar_item'>TV Show</a></span>
                <span><a href='#' className='navbar_item'>Short Film</a></span>
                <span><a href='#' className='navbar_item'>Trailer</a></span>
                <span><a href='#' className='navbar_item'>Web Series</a></span>
            </div>
            <div className='navbar_search'>
                <a href='#'><AiOutlineSearch /></a>
                <div className='navbar_avatar'><img src='https://images.slivcdn.com/UI_icons/Multiprofile/profile-00.png?h=28&w=28&q=high&fr=webp' /></div>
            </div>
        </div>
    )
}

export default Navbar;