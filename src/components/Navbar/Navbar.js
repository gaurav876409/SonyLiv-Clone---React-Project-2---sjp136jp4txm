import React, { useState, useEffect } from 'react';
import "./Navbar.css";
import { AiOutlineSearch } from 'react-icons/ai';
import { FaArrowRight } from 'react-icons/fa';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const categories = [
        { name: 'Movie', type: 'movie', class: 'class_movie' },
        { name: 'Video Song', type: 'video song', class: 'class_video_song' },
        { name: 'Web Series', type: 'web series', class: 'class_web_series' },
        { name: 'Documentary', type: 'documentary', class: 'class_documentry' },
        { name: 'TV Show', type: 'tv show', class: 'class_tv_show' },
        { name: 'Trailer', type: 'trailer', class: 'class_trailer' },
        { name: 'Short Film', type: 'short film', class: 'class_short_film' },
    ];
    const [activeCategory, setActiveCategory] = useState(categories[0].type);
    const [filteredData, setFilteredData] = useState([]);
    const [allData, setAllData] = useState([]);
    const [activeKeyword, setActiveKeyword] = useState('romance');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://academics.newtonschool.co/api/v1/ott/show?filter={"type" : "${activeCategory}"}`, {
                    headers: {
                        projectId: 'sjp136jp4txm',
                    },
                });
                setAllData(response?.data?.data)
                setFilteredData(response?.data?.data?.filter(item => item.keywords.includes(activeKeyword)));
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
        console.log("line 38", allData)
    }, [activeCategory, activeKeyword]);
    const filterByKeyword = (keyword) => {
        setActiveKeyword(keyword);
    };
    const handleCategoryChange = (categoryType) => {
        setActiveCategory(categoryType);
    };
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
                {categories.map(category => (
                    <span key={category.type}>
                        <a href='#' className={`navbar_item check1`} onMouseEnter={() => handleCategoryChange(category.type)}>
                            {category.name}
                            {activeCategory === category.type && (
                                <div className={`${category.class}`}>
                                    <div className='check2'>
                                        <Link to={`/data?type=${category.type}`}>
                                            <div className='top_left'>All {category.name} <span className='fa_icon'><FaArrowRight /></span></div>
                                        </Link>
                                        <div className='top_right'>
                                            <button className={`top_right_btn ${activeKeyword === 'romance' ? 'active' : ''}`} onClick={() => filterByKeyword('romance')}>Romance</button>
                                            <button className={`top_right_btn ${activeKeyword === 'thriller' ? 'active' : ''}`} onClick={() => filterByKeyword('thriller')}>Thriller</button>
                                            <button className={`top_right_btn ${activeKeyword === 'action' ? 'active' : ''}`} onClick={() => filterByKeyword('action')}>Action</button>
                                            <button className={`top_right_btn ${activeKeyword === 'fantasy' ? 'active' : ''}`} onClick={() => filterByKeyword('fantasy')}>Fantasy</button>
                                        </div>
                                    </div>
                                    <div className='check_center'>
                                        <div className='filtered_data'>
                                            {filteredData?.map(item => (
                                                <div key={item._id} className='filtered_item'>
                                                    <img src={item.thumbnail} alt={item.title}/>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )}
                        </a>
                    </span>
                ))}
            </div>
            <div className='navbar_search'>
                <a href='#'><AiOutlineSearch /></a>
                <div className='navbar_avatar'><img src='https://images.slivcdn.com/UI_icons/Multiprofile/profile-00.png?h=28&w=28&q=high&fr=webp' /></div>
            </div>
        </div>
    );
}

export default Navbar;
