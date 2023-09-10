import React, {useState} from 'react';
import './Subscribe.css';
import { useSelector } from 'react-redux';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaRupeeSign } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Subscribe = () => {
  const showDetails = useSelector(state => state.showDetails.showDetails);
  const [selectedOption, setSelectedOption] = useState('599');
  const settings = {
    dots: false,
    infinite: true,
    speed: 100000,
    slidesToShow: 8,
    slidesToScroll: 100,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: 'linear',
  };
  const handleOptionChange = (price) => {
    setSelectedOption(price);
  };
  const handlePayButtonClick = () => {
    alert('Payment successful!'); 
  };
  const userName = JSON.parse(localStorage.getItem('user'))
  return (
    <div className='subscribe_container'>
      <Slider {...settings}>
        {showDetails?.data?.map(item => (
          <div key={item._id} className="subscribe_slider">
            <img src={item.thumbnail} alt={item.title} />
          </div>
        ))}
      </Slider>
      <div className='linear_background'></div>
      <div className='subscribe_container_body'>
        <div className='subscribe_header'>
          <Link to='/home'>
          <div className='subscribe_header_logo'><img src='https://images.slivcdn.com/UI_icons/New_Final_Icons_30052020/liv_icon.png?q=high&fr=webp' /></div>
          </Link>
          <div className='subscribe_header_name'>{userName.data.name}</div>
        </div>
        <div className='subscribe_table_body'>
          <h1 className='subscribe_table_title'>Subscribe to watch all content on Sony LIV</h1>
          <div className='subscribe_table'>
            <table>
              <thead>
                <tr>
                  <th colSpan='1' rowSpan='2' style={{ height: '100px' }}>
                    <div className='subscribe_table_header'>
                      <h5>Access All Content</h5>
                      <p>Movies, Originals And Live Sports</p>
                    </div>
                  </th>
                  <th className={selectedOption === '599' ? 'selected_th' : ''}>
                    <div className='subscribe_table_head'>
                      <div><input type='radio' style={{ width: '16px', height: '16px', marginBottom: '5px' }} onChange={() => handleOptionChange('599')}
                    checked={selectedOption === '599'}/></div>
                      <div style={{ fontSize: '14px', fontWeight: '500', marginBottom: '5px' }} className={selectedOption === '599' ? 'selected_th' : ''}>Mobile Only</div>
                      <div>
                        <span className={selectedOption === '599' ? 'selected_th' : 'un_selected'}><FaRupeeSign style={{ fontSize: '14px' }} />599</span>
                        <span style={{ fontSize: '12px', fontWeight: '500' }} className={selectedOption === '599' ? 'selected_th' : ''}>Yearly</span>
                      </div>
                    </div>
                  </th>
                  <th className={selectedOption === '999' ? 'selected_th' : ''}>
                    <div className='subscribe_table_head'>
                      <div><input type='radio' style={{ width: '16px', height: '16px', marginBottom: '5px' }} onChange={() => handleOptionChange('999')}
                    checked={selectedOption === '999'}/></div>
                      <div style={{ fontSize: '14px', fontWeight: '500', marginBottom: '5px' }}>LIV Premium</div>
                      <div>
                        <span className={selectedOption === '999' ? 'selected_th' : 'un_selected'}><FaRupeeSign style={{ fontSize: '14px' }} />999</span>
                        <span style={{ fontSize: '12px', fontWeight: '500' }}>Yearly</span>
                      </div>
                    </div>
                  </th>
                  <th className={selectedOption === '699' ? 'selected_th' : ''}>
                    <div className='subscribe_table_head'>
                      <div><input type='radio' style={{ width: '16px', height: '16px', marginBottom: '5px' }} onChange={() => handleOptionChange('699')}
                    checked={selectedOption === '699'}/></div>
                      <div style={{ fontSize: '14px', fontWeight: '500', marginBottom: '5px' }}>LIV Premium</div>
                      <div>
                        <span className={selectedOption === '699' ? 'selected_th' : 'un_selected'}><FaRupeeSign style={{ fontSize: '14px' }} />699</span>
                        <span style={{ fontSize: '12px', fontWeight: '500' }}>6 Months</span>
                      </div>
                    </div>
                  </th>
                  <th className={selectedOption === '299' ? 'selected_th' : ''}>
                    <div className='subscribe_table_head'>
                      <div><input type='radio' style={{ width: '16px', height: '16px', marginBottom: '5px' }} onChange={() => handleOptionChange('299')}
                    checked={selectedOption === '299'}/></div>
                      <div style={{ fontSize: '14px', fontWeight: '500', marginBottom: '5px' }}>LIV Premium</div>
                      <div>
                        <span className={selectedOption === '299' ? 'selected_th' : 'un_selected'}><FaRupeeSign style={{ fontSize: '14px' }} />299</span>
                        <span style={{ fontSize: '12px', fontWeight: '500' }}>Monthly</span>
                      </div>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th style={{ height: '50px' }}>
                    <div className='subscribe_table_row'>
                      <span style={{ fontSize: '14px', fontWeight: '500' }}>Number of logged in devicesinfo_icon</span>
                      <span style={{ marginLeft: '20px', marginTop: '5px' }}><img src='https://images.slivcdn.com/UI_icons/info_new.png?q=high&fr=webp' width={'16px'} height={'16px'} /></span>
                    </div>
                  </th>
                  <td className={selectedOption === '599' ? 'selected_td' : ''}>1</td>
                  <td className={selectedOption === '999' ? 'selected_td' : ''}>5</td>
                  <td className={selectedOption === '699' ? 'selected_td' : ''}>5</td>
                  <td className={selectedOption === '299' ? 'selected_td' : ''}>5</td>
                </tr>
                <tr>
                  <th style={{ height: '50px' }}>
                    <div className='subscribe_table_row'>
                      <span style={{ fontSize: '14px', fontWeight: '500' }}>Watch on devices at same timeinfo_icon</span>
                      <span style={{ marginLeft: '20px', marginTop: '5px' }}><img src='https://images.slivcdn.com/UI_icons/info_new.png?q=high&fr=webp' width={'16px'} height={'16px'} /></span>
                    </div>
                  </th>
                  <td className={selectedOption === '599' ? 'selected_td' : ''}>1</td>
                  <td className={selectedOption === '999' ? 'selected_td' : ''}>2</td>
                  <td className={selectedOption === '699' ? 'selected_td' : ''}>2</td>
                  <td className={selectedOption === '299' ? 'selected_td' : ''}>1</td>
                </tr>
                <tr>
                  <th style={{ height: '50px' }}>
                    <div className='subscribe_table_row'>
                      <span style={{ fontSize: '14px', fontWeight: '500' }}>Max Video Qualityinfo_icon</span>
                      <span style={{ marginLeft: '20px', marginTop: '5px' }}><img src='https://images.slivcdn.com/UI_icons/info_new.png?q=high&fr=webp' width={'16px'} height={'16px'} /></span>
                    </div>
                  </th>
                  <td className={selectedOption === '599' ? 'selected_td' : ''}>HD (720p)</td>
                  <td className={selectedOption === '999' ? 'selected_td' : ''}>FULL HD (1080p)</td>
                  <td className={selectedOption === '699' ? 'selected_td' : ''}>FULL HD (1080p)</td>
                  <td className={selectedOption === '299' ? 'selected_td' : ''}>FULL HD (1080p)</td>
                </tr>
                <tr>
                  <th style={{ height: '50px' }}>
                    <div className='subscribe_table_row'>
                      <span style={{ fontSize: '14px', fontWeight: '500' }}>Max Audio Qualityinfo_icon</span>
                      <span style={{ marginLeft: '20px', marginTop: '5px' }}><img src='https://images.slivcdn.com/UI_icons/info_new.png?q=high&fr=webp' width={'16px'} height={'16px'} /></span>
                    </div>
                  </th>
                  <td style={{ color: '#b9b9b9' }} className={selectedOption === '599' ? 'selected_td' : ''}>Stereo 2.1</td>
                  <td style={{ color: '#b9b9b9' }} className={selectedOption === '999' ? 'selected_td' : ''}>Stereo 2.1</td>
                  <td style={{ color: '#b9b9b9' }} className={selectedOption === '699' ? 'selected_td' : ''}>Stereo 2.1</td>
                  <td style={{ color: '#b9b9b9' }} className={selectedOption === '299' ? 'selected_td' : ''}>Stereo 2.1</td>
                </tr>
                <tr>
                  <th style={{ height: '50px' }}>
                    <div className='subscribe_table_row'>
                      <span style={{ fontSize: '14px', fontWeight: '500' }}>Advertisementinfo_icon</span>
                      <span style={{ marginLeft: '20px', marginTop: '5px' }}><img src='https://images.slivcdn.com/UI_icons/info_new.png?q=high&fr=webp' width={'16px'} height={'16px'} /></span>
                    </div>
                  </th>
                  <td className={selectedOption === '599' ? 'selected_td' : ''}>On Live Sports, Channels & Reality TV Shows</td>
                  <td className={selectedOption === '999' ? 'selected_td' : ''}>On Live Sports, Channels & Reality TV Shows</td>
                  <td className={selectedOption === '699' ? 'selected_td' : ''}>On Live Sports, Channels & Reality TV Shows</td>
                  <td className={selectedOption === '299' ? 'selected_td' : ''}>On Live Sports, Channels & Reality TV Shows</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className='subscribe_button'>
          <button onClick={handlePayButtonClick}>Pay <FaRupeeSign style={{ fontSize: '14px', marginTop: '5px' }}/>{selectedOption}</button>
        </div>
        <div className='subscribe_list'>
          <ul>
            <li>Terms and Conditions<span className='subscribe_list_dot'></span></li>
            <li>Privacy Policy<span className='subscribe_list_dot'></span></li>
            <li>FAQ</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Subscribe;