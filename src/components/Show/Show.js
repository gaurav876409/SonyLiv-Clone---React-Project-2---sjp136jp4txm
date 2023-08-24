import React from 'react'
import './Show.css';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { LiaCrownSolid } from 'react-icons/lia'
import { FiCheck } from 'react-icons/fi'
import { BsPlusLg } from 'react-icons/bs'
import { PiShareFat } from 'react-icons/pi'
import { Carousel } from '@mantine/carousel';
import { Link } from 'react-router-dom';
import { IoIosArrowForward } from 'react-icons/io'
import { useDispatch } from 'react-redux';
import { addToWatchlist, removeFromWatchlist } from '../../Redux/Action';

const Show = () => {
  const { id } = useParams();
  const showDetails = useSelector(state => state.showDetails.showDetails);
  const selectedShow = showDetails?.data?.find(item => item._id === id);
  const movie = showDetails?.data?.filter(item => item.type === 'movie');
  const videoSong = showDetails?.data?.filter(item => item.type === 'video song');
  const documentry = showDetails?.data?.filter(item => item.type === 'documentary');
  const tvShow = showDetails?.data?.filter(item => item.type === 'tv show');
  const shortFilm = showDetails?.data?.filter(item => item.type === 'short film');
  const trailer = showDetails?.data?.filter(item => item.type === 'trailer');
  const webSeries = showDetails?.data?.filter(item => item.type === 'web series');
  const dispatch = useDispatch();
  const watchlist = useSelector(state => state.watchlist.watchlist);
  const isAddedToWatchlist = watchlist.some(item => item.data._id === id);
  console.log("line 28 show", watchlist)
  console.log("line 29", isAddedToWatchlist)
  const handleAddToWatchlist = () => {
    dispatch(addToWatchlist(id)); 
  };
  const handleRemoveFromWatchlist = () => {
    dispatch(removeFromWatchlist(id)); 
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
          <p>{selectedShow?.appType}</p>
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
        <button className='show_body_subscribe'>
          <div className='show_body_subscribe_div1'>
            <span><LiaCrownSolid style={{ width: "30px", height: "30px" }} /></span>
            <span>Subscribe Now</span>
          </div>
          <div className='show_body_subscribe_div2'><span>Stream Live Sports and Ad-Free Originals</span></div>
        </button>
        {isAddedToWatchlist ? (
          <button className='show_body_list' onClick={handleRemoveFromWatchlist}>
          <span><FiCheck style={{ width: "23px", height: "23px", fontWeight: "700" }} /></span>
          <span>My List</span>
        </button>
        ): (
          <button className='show_body_list' onClick={handleAddToWatchlist}>
          <span><BsPlusLg style={{ width: "23px", height: "23px", fontWeight: "700" }} /></span>
          <span>My List</span>
        </button>
        )}
        <button className='show_body_share'>
          <span><PiShareFat style={{ width: "23px", height: "23px" }} /></span>
          <span>Share</span>
        </button>
      </div>


      <div className='show_carousel'>
      {selectedShow?.type === "movie" && movie?.length > 0 && (
        <>
        <h1>More Like This <span className='arrow_react_icon'><IoIosArrowForward /></span></h1>
        <Carousel
          height={400}
          slideSize="10%"
          slideGap="md"
          loop
          align="start"
          slidesToScroll={5}
        >
          {movie?.map(item => (
            <Carousel.Slide key={item._id} >
              <div className="thumbnail_item">
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
      <div className='show_carousel'>
      {selectedShow?.type === "video song" && videoSong?.length > 0 && (
        <>
        <h1>More Like This <span className='arrow_react_icon'><IoIosArrowForward /></span></h1>
        <Carousel
          height={400}
          slideSize="10%"
          slideGap="md"
          loop
          align="start"
          slidesToScroll={5}
        >
          {videoSong?.map(item => (
            <Carousel.Slide key={item._id}>
              <div  className="thumbnail_item">
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
      <div className='show_carousel'>
      {selectedShow?.type === "documentary" && documentry?.length > 0 && (
        <>
        <h1>More Like This <span className='arrow_react_icon'><IoIosArrowForward /></span></h1>
        <Carousel
          height={400}
          slideSize="10%"
          slideGap="md"
          loop
          align="start"
          slidesToScroll={5}
        >
          {documentry?.map(item => (
            <Carousel.Slide key={item._id}>
              <div  className="thumbnail_item">
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
      <div className='show_carousel'>
      {selectedShow?.type === "tv show" && tvShow?.length > 0 && (
        <>
        <h1>More Like This <span className='arrow_react_icon'><IoIosArrowForward /></span></h1>
        <Carousel
          height={400}
          slideSize="10%"
          slideGap="md"
          loop
          align="start"
          slidesToScroll={5}
        >
          {tvShow?.map(item => (
            <Carousel.Slide key={item._id}>
              <div  className="thumbnail_item">
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
      <div className='show_carousel'>
      {selectedShow?.type === "short film" && shortFilm?.length > 0 && (
        <>
        <h1>More Like This <span className='arrow_react_icon'><IoIosArrowForward /></span></h1>
        <Carousel
          height={400}
          slideSize="10%"
          slideGap="md"
          loop
          align="start"
          slidesToScroll={5}
        >
          {shortFilm?.map(item => (
            <Carousel.Slide key={item._id}>
              <div  className="thumbnail_item">
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
      <div className='show_carousel'>
      {selectedShow?.type === "trailer" && trailer?.length > 0 && (
        <>
        <h1>More Like This <span className='arrow_react_icon'><IoIosArrowForward /></span></h1>
        <Carousel
          height={400}
          slideSize="10%"
          slideGap="md"
          loop
          align="start"
          slidesToScroll={5}
        >
          {trailer?.map(item => (
            <Carousel.Slide key={item._id}>
              <div  className="thumbnail_item">
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
      <div className='show_carousel'>
      {selectedShow?.type === "web series" && webSeries?.length > 0 && (
        <>
        <h1>More Like This <span className='arrow_react_icon'><IoIosArrowForward /></span></h1>
        <Carousel
          height={400}
          slideSize="10%"
          slideGap="md"
          loop
          align="start"
          slidesToScroll={5}
        >
          {webSeries?.map(item => (
            <Carousel.Slide key={item._id}>
              <div  className="thumbnail_item">
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