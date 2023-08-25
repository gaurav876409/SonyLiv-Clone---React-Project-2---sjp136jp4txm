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
    console.log("mylist", response)
    console.log("mylist1", response?.data)
    console.log("mylist2", response?.data?.data)
    console.log("mylist3", response?.data?.data?.shows)
    console.log("mylist4", response?.data?.data?.shows.slice(-1)[0])
    console.log("mylist5", response?.data?.data?.shows.slice(-1)[0]?._id)
  return (
    <>
    <div>Mylist</div>
    
    </>
  )
}

export default Mylist;