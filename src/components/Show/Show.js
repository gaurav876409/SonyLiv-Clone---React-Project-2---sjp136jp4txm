import React, { useState, useEffect } from 'react'
import './Show.css';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { LiaCrownSolid } from 'react-icons/lia'
import { FiCheck } from 'react-icons/fi'
import { BsPlusLg } from 'react-icons/bs'
import { PiShareFat } from 'react-icons/pi'
import { FaTwitter } from 'react-icons/fa'
import { FaFacebook } from 'react-icons/fa'
import { BsWhatsapp } from 'react-icons/bs'
import { FiLink } from 'react-icons/fi'
import { Carousel } from '@mantine/carousel';
import { Link } from 'react-router-dom';
import { IoIosArrowForward } from 'react-icons/io'
import { useDispatch } from 'react-redux';
import { addToWatchlist } from '../../Redux/Action';
import axios from 'axios';
import Modal from 'react-modal';
import { useMediaQuery } from 'react-responsive';
const customStyles = {
  content: {
    top: '72%',
    left: '0%',
    right: 'auto',
    bottom: 'auto',
  },
};
const customMobileStyles = {
  content: {
    // top: '50%', 
    // left: 'auto', 
    // right: 'auto',
    // bottom: 'auto',
    justifyContent: 'center',
    top: '50%',
  },
};

const Show = () => {
  const isMobile = useMediaQuery({ maxWidth: 480 });
  const shareUrl = window.location.href; 

  const handleShare = (platform) => {
    switch (platform) {
      case 'facebook':
        const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
        window.open(facebookShareUrl, '_blank');
        break;
      case 'twitter':
        const twitterShareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}`;
        window.open(twitterShareUrl, '_blank');
        break;
      case 'whatsapp':
        const whatsappShareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(shareUrl)}`;
        window.open(whatsappShareUrl, '_blank');
        break;
      case 'copy':
        const tempInput = document.createElement('input');
        tempInput.value = shareUrl;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand('copy');
        document.body.removeChild(tempInput);
        alert('URL copied to clipboard');
        break;
      default:
        break;
    }
  };
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  const { id } = useParams();
  const [dataDetails, setDataDetails] = useState([]);
  const showDetails = useSelector(state => state.showDetails.showDetails);
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
  const movie = showDetails?.data?.filter(item => item.type === 'movie');
  const videoSong = showDetails?.data?.filter(item => item.type === 'video song');
  const documentry = showDetails?.data?.filter(item => item.type === 'documentary');
  const tvShow = showDetails?.data?.filter(item => item.type === 'tv show');
  const shortFilm = showDetails?.data?.filter(item => item.type === 'short film');
  const trailer = showDetails?.data?.filter(item => item.type === 'trailer');
  const webSeries = showDetails?.data?.filter(item => item.type === 'web series');
  const dispatch = useDispatch();
  const [isToggled, setIsToggled] = useState(false);
  useEffect(() => {
    const storedItem = localStorage.getItem(`watchlist_${id}`);
    if (storedItem) {
      setIsToggled(true);
    }
  }, [id]);
  const handleAddToWatchlist = () => {
    dispatch(addToWatchlist(id));
    setIsToggled(!isToggled);
    if (isToggled) {
      localStorage.removeItem(`watchlist_${id}`);
    } else {
      localStorage.setItem(`watchlist_${id}`, 'added');
    }
  };
  return (
    <div className='show_container'>
      <div className='navbar_background'></div>
      <div className='show_body_container'>
        <div className='show_main_image'>
          <img src={selectedShow?.thumbnail} />
        </div>
        <div className='gradient_1'></div>
        <div className='gradient_2'></div>
      </div>
      <div className='show_body_text'>
        <h1>{selectedShow?.title}</h1>
        <div className='show_body_text_p1'>
          <p>{selectedShow?.type}</p>
          <span className='dot'></span>
          <p>{selectedShow?.createdAt}</p>
          <span className='dot'></span>
          <p>{selectedShow?.keywords[0]}, {selectedShow?.keywords[1]}, {selectedShow?.keywords[2]}</p>
        </div>
        <div className='show_body_text_description'>
          <p>{selectedShow?.description}</p>
        </div>
        <div className='show_body_text_p2'>
          <span className='show_body_text_p2_1'>Director:</span>
          <span className='show_body_text_p2_2'>{selectedShow?.director}</span>
        </div>
        <div className='show_body_text_p2'>
          <span className='show_body_text_p2_1'>Cast:</span>
          <span className='show_body_text_p2_2'>{selectedShow?.cast[0]}, {selectedShow?.cast[1]}, {selectedShow?.cast[2]}</span>
        </div>
      </div>
      <div className='show_body_button'>
        <Link to={`/video/${id}`}>
          <button className='show_body_watch'>
            <span className='show_body_watch_image'><img src='https://images.slivcdn.com/UI_icons/New_Final_Icons_30052020/web_play_icon.png?h=24&w=24&q=high&fr=webp' /></span>
            <span className='show_body_watch_text'>Watch Free Preview</span>
          </button>
        </Link>
        <Link to='/subscribe'>
          <button className='show_body_subscribe'>
            <div className='show_body_subscribe_div1'>
              <span><LiaCrownSolid style={{ width: "30px", height: "30px" }} /></span>
              <span>Subscribe Now</span>
            </div>
            <div className='show_body_subscribe_div2'><span>Stream Live Sports and Ad-Free Originals</span></div>
          </button>
        </Link>
        <button className='show_body_list' onClick={handleAddToWatchlist}>
          {isToggled ? <span><FiCheck style={{ width: "23px", height: "23px", fontWeight: "700" }} /></span> : <span><BsPlusLg style={{ width: "23px", height: "23px", fontWeight: "700" }} /></span>}
          <span>My List</span>
        </button>
        <button className='show_body_share' onClick={openModal}>
          <span><PiShareFat style={{ width: "23px", height: "23px" }} /></span>
          <span>Share</span>
        </button>
        <Modal
          isOpen={modalIsOpen}
          // onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          // style={customStyles}
          style={isMobile ? customMobileStyles : customStyles}
          // className={custom-mobile-styles}
          // contentLabel="Example Modal"
        >
          <div className='share_icon'>
            <div><FaFacebook className='share_icon_fb' onClick={() => handleShare('facebook')}/></div>
            <div><FaTwitter className='share_icon_twitter' onClick={() => handleShare('twitter')}/></div>
            <div><BsWhatsapp className='share_icon_whatsapp' onClick={() => handleShare('whatsapp')}/></div>
            <div><FiLink className='share_icon_link' onClick={() => handleShare('copy')}/></div>
          </div>
        </Modal>
      </div>

      <div className={`show_carousel ${selectedShow?.type === 'movie' ? 'show_carousel' : 'hidden_carousel'}`}>
        {selectedShow?.type === "movie" && movie?.length > 0 && (
          <>
            <h1>More Like This <span className='arrow_react_icon'><IoIosArrowForward /></span></h1>
            <Carousel
              height={220}
              slideSize="10%"
              slideGap="md"
              loop
              align="start"
              slidesToScroll={5}
            >
              {movie?.map(item => (
                <Carousel.Slide key={item._id} >
                  <div className="home_item">
                    <Link to={`/show/${item._id}`}>
                      <img src={item.thumbnail} alt={item.title} />
                    </Link>
                  </div>
                </Carousel.Slide>
              ))}
            </Carousel>
          </>
        )}
      </div>
      <div className={`show_carousel ${selectedShow?.type === 'video song' ? 'show_carousel' : 'hidden_carousel'}`}>
        {selectedShow?.type === "video song" && videoSong?.length > 0 && (
          <>
            <h1>More Like This <span className='arrow_react_icon'><IoIosArrowForward /></span></h1>
            <Carousel
              height={220}
              slideSize="10%"
              slideGap="md"
              loop
              align="start"
              slidesToScroll={5}
            >
              {videoSong?.map(item => (
                <Carousel.Slide key={item._id}>
                  <div className="home_item">
                    <Link to={`/show/${item._id}`}>
                      <img src={item.thumbnail} alt={item.title} />
                    </Link>
                  </div>
                </Carousel.Slide>
              ))}
            </Carousel>
          </>
        )}
      </div>
      <div className={`show_carousel ${selectedShow?.type === 'documentary' ? 'show_carousel' : 'hidden_carousel'}`}>
        {selectedShow?.type === "documentary" && documentry?.length > 0 && (
          <>
            <h1>More Like This <span className='arrow_react_icon'><IoIosArrowForward /></span></h1>
            <Carousel
              height={220}
              slideSize="10%"
              slideGap="md"
              loop
              align="start"
              slidesToScroll={5}
            >
              {documentry?.map(item => (
                <Carousel.Slide key={item._id}>
                  <div className="home_item">
                    <Link to={`/show/${item._id}`}>
                      <img src={item.thumbnail} alt={item.title} />
                    </Link>
                  </div>
                </Carousel.Slide>
              ))}
            </Carousel>
          </>
        )}
      </div>
      <div className={`show_carousel ${selectedShow?.type === 'tv show' ? 'show_carousel' : 'hidden_carousel'}`}>
        {selectedShow?.type === "tv show" && tvShow?.length > 0 && (
          <>
            <h1>More Like This <span className='arrow_react_icon'><IoIosArrowForward /></span></h1>
            <Carousel
              height={220}
              slideSize="10%"
              slideGap="md"
              loop
              align="start"
              slidesToScroll={5}
            >
              {tvShow?.map(item => (
                <Carousel.Slide key={item._id}>
                  <div className="home_item">
                    <Link to={`/show/${item._id}`}>
                      <img src={item.thumbnail} alt={item.title} />
                    </Link>
                  </div>
                </Carousel.Slide>
              ))}
            </Carousel>
          </>
        )}
      </div>
      <div className={`show_carousel ${selectedShow?.type === 'short film' ? 'show_carousel' : 'hidden_carousel'}`}>
        {selectedShow?.type === "short film" && shortFilm?.length > 0 && (
          <>
            <h1>More Like This <span className='arrow_react_icon'><IoIosArrowForward /></span></h1>
            <Carousel
              height={220}
              slideSize="10%"
              slideGap="md"
              loop
              align="start"
              slidesToScroll={5}
            >
              {shortFilm?.map(item => (
                <Carousel.Slide key={item._id}>
                  <div className="home_item">
                    <Link to={`/show/${item._id}`}>
                      <img src={item.thumbnail} alt={item.title} />
                    </Link>
                  </div>
                </Carousel.Slide>
              ))}
            </Carousel>
          </>
        )}
      </div>
      <div className={`show_carousel ${selectedShow?.type === 'trailer' ? 'show_carousel' : 'hidden_carousel'}`}>
        {selectedShow?.type === "trailer" && trailer?.length > 0 && (
          <>
            <h1>More Like This <span className='arrow_react_icon'><IoIosArrowForward /></span></h1>
            <Carousel
              height={220}
              slideSize="10%"
              slideGap="md"
              loop
              align="start"
              slidesToScroll={5}
            >
              {trailer?.map(item => (
                <Carousel.Slide key={item._id}>
                  <div className="home_item">
                    <Link to={`/show/${item._id}`}>
                      <img src={item.thumbnail} alt={item.title} />
                    </Link>
                  </div>
                </Carousel.Slide>
              ))}
            </Carousel>
          </>
        )}
      </div>
      <div className={`show_carousel ${selectedShow?.type === 'web series' ? 'show_carousel' : 'hidden_carousel'}`}>
        {selectedShow?.type === "web series" && webSeries?.length > 0 && (
          <>
            <h1>More Like This <span className='arrow_react_icon'><IoIosArrowForward /></span></h1>
            <Carousel
              height={220}
              slideSize="10%"
              slideGap="md"
              loop
              align="start"
              slidesToScroll={5}
            >
              {webSeries?.map(item => (
                <Carousel.Slide key={item._id}>
                  <div className="home_item">
                    <Link to={`/show/${item._id}`}>
                      <img src={item.thumbnail} alt={item.title} />
                    </Link>
                  </div>
                </Carousel.Slide>
              ))}
            </Carousel>
          </>
        )}
      </div>
    </div>

  )
}

export default Show;