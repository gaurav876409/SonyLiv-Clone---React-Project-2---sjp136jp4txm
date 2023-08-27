import React, {useState, useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import './Data.css';

const Data = () => {
    const location = useLocation();
    // const {allData} = location.state || {};
    const searchParams = new URLSearchParams(location.search);
    const type = searchParams.get('type');
    // console.log("data line 7", location.state)
    // console.log("data line 8", allData)
    const [apiData, setApiData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://academics.newtonschool.co/api/v1/ott/show?filter={"type" : "${type}"}`, {
                    headers: {
                        projectId: 'sjp136jp4txm',
                    },
                });
                setApiData(response?.data?.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, [type]);

  return (
    <div>
       {apiData?.map(item => (
                <div key={item._id} className='all_item'>
                    <img src={item.thumbnail} alt={item.title} />
                </div>
            ))}
    </div>
  )
}

export default Data;