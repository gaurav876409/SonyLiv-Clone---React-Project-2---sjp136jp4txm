import React from 'react'
import './Video.css'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const Video = () => {
  const { id } = useParams();
  const showDetails = useSelector(state => state.showDetails.showDetails);
  console.log("line 9", showDetails)
  const selectedShow = showDetails?.data?.find(item => item._id === id);
  console.log("line 11", selectedShow)
  return (
    <div>
    {selectedShow?.video_url && (
     <video controls width={"300px"} height={"400px"}>
       <source src={selectedShow?.video_url} type="video/mp4" />
     </video>
     )} 
     gaurav
  </div>
  )
}

export default Video;