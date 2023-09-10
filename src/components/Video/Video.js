import React, {useEffect, useState} from 'react'
import './Video.css'
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Video = () => {
  const { id } = useParams();
  const [dataDetails, setDataDetails] = useState([]);
  useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://academics.newtonschool.co/api/v1/ott/show/${id}`, {
                    headers: {
                        projectId: 'sjp136jp4txm',
                    },
                });
                console.log("API Response: line 328", response?.data?.data);
                 setDataDetails(response?.data);
            } catch (error) {
                console.error('Error fetching data: line 30', error);
            }
        };
        fetchData();
      }, [id]);
  const selectedShow = dataDetails?.data;
  return (
    <div className='video_container'>
    {selectedShow?.video_url && (
     <video controls autoPlay className='fullscreen_video'>
       <source src={selectedShow?.video_url} type="video/mp4" />
     </video>
     )} 
  </div>
  )
}

export default Video;