import React, { useState, useEffect } from 'react';
import "./Navbar.css";
import { AiOutlineSearch } from 'react-icons/ai';
import { FaArrowRight } from 'react-icons/fa';
import { BiLogIn } from 'react-icons/bi';
import { MdSystemUpdateAlt } from 'react-icons/md'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../../Redux/Action';
import { useDisclosure } from '@mantine/hooks';
import { Modal } from '@mantine/core';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const userName1 = JSON.parse(localStorage.getItem('sign_up_user'))
    const userName2 = JSON.parse(localStorage.getItem('sign_in_user'))
    const navigate = useNavigate();
    const [input, setInput] = useState("");
    const [result, setResult] = useState([]);

    const fetchData = async (value) => {
        const response = await fetch(`https://academics.newtonschool.co/api/v1/ott/show?filter={"title" : "${value}"}&limit=1000`, {
            headers: {
                projectId: 'sjp136jp4txm',
            }
        });
        const res = await response.json();
        const lowerCaseValue = value.toLowerCase();
        const results = res?.data?.filter((user) => {
            const lowerCaseTitle = user.title.toLowerCase();
            return (
                value &&
                user &&
                lowerCaseTitle.includes(lowerCaseValue)
            );
        });
        setResult(results);
    };
    const handleChange = (value) => {
        setInput(value);
        fetchData(value);
    };
    const [opened, { open, close }] = useDisclosure(false);
    const dispatch = useDispatch();
    const handleLogout = () => {
        dispatch(logout());
        navigate('/')
    };
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
                const response = await axios.get(`https://academics.newtonschool.co/api/v1/ott/show?filter={"type" : "${activeCategory}"}&limit=100`, {
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
                    <Link to='/home'>
                        <img src='https://images.slivcdn.com/UI_icons/sonyliv_new_revised_header_logo.png?w=40&q=high&fr=webp' />
                    </Link>
                </div>
                <div className='navbar_subscription'>
                    <Link to='/subscribe'>
                        <button className='navbar_subscription_button'>Subscribe<img src='https://images.slivcdn.com/UI_icons/smart_hook/arrow_image.png?h=8&w=4&q=high&fr=webp' /></button>
                    </Link>
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
                                                    <Link to={`/show/${item._id}`}>
                                                        <img src={item.thumbnail} alt={item.title} />
                                                    </Link>
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
                <a href='#' className='navbar_search_a'><AiOutlineSearch onClick={open} /></a>
                <Modal
                    opened={opened}
                    onClose={close}
                    // title="This is a fullscreen modal"
                    fullScreen
                    transitionProps={{ transition: 'fade', duration: 200 }}
                >
                    <div className='modal_search'>
                        <input type='text' placeholder='Search for movies, shows, sports etc.' value={input}
                            onChange={(e) => handleChange(e.target.value)} />
                    </div>
                    <div className='modal_search_result'>
                        {result?.map(item => (
                            <div key={item._id} className='modal_item'>
                                <Link to={`/show/${item._id}`}>
                                    <img src={item.thumbnail} alt={item.title} onClick={close} />
                                </Link>
                            </div>
                        ))}
                    </div>
                </Modal>
                <div className='navbar_avatar awatar'>
                    <img src='https://images.slivcdn.com/UI_icons/Multiprofile/profile-00.png?h=28&w=28&q=high&fr=webp' />
                    <div className='profile_hover'>
                        <div className='profile_detail'>
                            <div className='profile_image'><img src='https://images.slivcdn.com/UI_icons/Multiprofile/profile-00.png?w=132&q=high&fr=webp' /></div>
                            {userName1 ? (
                                <div className='profile_name'>{userName1.data.user?.name}</div>
                            ) : userName2 ? (
                                <div className='profile_name'>{userName2.data?.name}</div>
                            ) : null}
                        </div>
                        <div className='profile_lists'>
                            <Link to='/subscribe'>
                                <div className='profile_list'>
                                    <div><img src='https://images.slivcdn.com/UI_icons/Subscribe_Now.png?h=22&w=22&q=high&fr=webp' /></div>
                                    <div className='profile_list_title'>Subscribe Now</div>
                                </div>
                            </Link>
                            <Link to='/list'>
                                <div className='profile_list'>
                                    <div><img src='https://images.slivcdn.com/UI_icons/mylist_non_selecte.png?h=22&w=22&q=high&fr=webp' /></div>
                                    <div className='profile_list_title'>My List</div>
                                </div>
                            </Link>
                            {/* <Link to='/'>
                                <div className='profile_list'>
                                    <div className='profile_list_icon'><BiLogIn /></div>
                                    <div className='profile_list_title'>Login</div>
                                </div>
                            </Link> */}
                            <Link to='/updatePassword'>
                                <div className='profile_list'>
                                    <div className='profile_list_icon'><MdSystemUpdateAlt /></div>
                                    <div className='profile_list_title'>Update Password</div>
                                </div>
                            </Link>
                            <div className='profile_list'>
                                <div><img src='https://images.slivcdn.com/UI_icons/NEW_22052020/Iphone_Icons/logOut@3x.png?h=22&w=22&q=high&fr=webp' /></div>
                                <div className='profile_list_title' onClick={handleLogout}>Logout</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
