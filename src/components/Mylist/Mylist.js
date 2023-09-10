import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Mylist.css'

const Mylist = () => {
  const [myList, setMyList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const storedUser = JSON.parse(localStorage.getItem('user'));
        const token = storedUser.token;
        const response = await axios.get('https://academics.newtonschool.co/api/v1/ott/watchlist/like', {
          headers: {
            projectId: 'sjp136jp4txm',
            Authorization: `Bearer ${token}`,
          },
        });
        setMyList(response.data?.data?.shows);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className='mylist_container'>
      <div className='navbar_background'></div>
      <div className='mylist_body'>
        <div className='mylist_body_title'>My List</div>
        <div className='mylist_body_content'>
          {myList?.map(item => (
            <div key={item._id} className='mylist_item'>
              <Link to={`/show/${item._id}`}>
                <img src={item.thumbnail} alt={item.title} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Mylist;

