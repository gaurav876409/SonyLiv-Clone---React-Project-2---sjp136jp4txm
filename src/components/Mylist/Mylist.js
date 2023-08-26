import React from 'react'
import axios from 'axios';

const Mylist = async() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    const token = storedUser.token;
    const response = await axios.get('https://academics.newtonschool.co/api/v1/ott/watchlist/like', {
        headers: {
            projectId: 'sjp136jp4txm',
            Authorization: `Bearer ${token}`,
          },
    })
    console.log("mylist5", response?.data?.data?.shows.slice(-1)[0]?._id)
  return (
    <>
    <div>Mylist</div>
    
    </>
  )
}

export default Mylist;