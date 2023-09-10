import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import './Data.css';
import { Link } from 'react-router-dom';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const Data = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const type = searchParams.get('type');
    const [apiData, setApiData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://academics.newtonschool.co/api/v1/ott/show?filter={"type" : "${type}"}&page=${currentPage}&limit=14`, {
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
    }, [type, currentPage]);
    const handlePageChange = (event, newPage) => {
        setCurrentPage(newPage);
    };

    return (
        <div className='data_container'>
            <div className='navbar_background'></div>
            <div className='data_body'>
                <div className='data_body_title'>{type}</div>
                <div className='data_body_content'>
                    {apiData?.map(item => (
                        <div key={item._id} className='all_item'>
                            <Link to={`/show/${item._id}`}>
                                <img src={item.thumbnail} alt={item.title} />
                            </Link>
                        </div>
                    ))}
                </div>
                <div className='pagination_body'>
                <div className='pagination'>
                    <Stack spacing={2}>
                        <Pagination
                            count={10}
                            page={currentPage}
                            onChange={handlePageChange}
                        />
                    </Stack>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Data;