import React, { useEffect } from 'react'
import './Home.css'
import { useRef } from 'react';
import Autoplay from 'embla-carousel-autoplay';
import { Carousel } from '@mantine/carousel';
import { IconArrowRight, IconArrowLeft } from '@tabler/icons-react';
import { createStyles, getStylesRef } from '@mantine/core';
import { RxPlus } from 'react-icons/rx'
import { PiShareFat } from 'react-icons/pi'
import { useDispatch, useSelector } from 'react-redux';
import { fetchShowDetails } from '../../Redux/action';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/swiper-bundle.min.css';
const Home = () => {
    const autoplay = useRef(Autoplay({ delay: 2000 }));
    const useStyles = createStyles(() => ({
        controls: {
            ref: getStylesRef('controls'),
            transition: 'opacity 150ms ease',
            opacity: 0,
        },
        root: {
            '&:hover': {
                [`& .${getStylesRef('controls')}`]: {
                    opacity: 1,
                },
            },
        },
    }));
    const { classes } = useStyles();


    const dispatch = useDispatch();
    const projectId = 'sjp136jp4txm';

    useEffect(() => {
        dispatch(fetchShowDetails(projectId));
    }, [dispatch, projectId]);

    const showDetails = useSelector(state => state.showDetails.showDetails);
    const error = useSelector(state => state.showDetails.error);
    console.log("api data at line 40 in home", showDetails?.data[0]?.title)
    const movie = showDetails?.data?.filter(item => item.type === 'movie');
    const videoSong = showDetails?.data?.filter(item => item.type === 'video song');
    const documentry = showDetails?.data?.filter(item => item.type === 'documentary');
    const tvShow = showDetails?.data?.filter(item => item.type === 'tv show');
    const shortFilm = showDetails?.data?.filter(item => item.type === 'short film');
    const trailer = showDetails?.data?.filter(item => item.type === 'trailer');
    const webSeries = showDetails?.data?.filter(item => item.type === 'web series');
    return (
        <>
            <Carousel
                maw={320}
                mx="auto"
                withIndicators
                height={640}
                classNames={classes}
                plugins={[autoplay.current]}
                onMouseEnter={autoplay.current.stop}
                onMouseLeave={autoplay.current.reset}
                nextControlIcon={<IconArrowRight size={16} />}
                previousControlIcon={<IconArrowLeft size={16} />}
                style={{ maxWidth: "86rem" }}
            >
                <Carousel.Slide>
                    <div className='slide'>
                        <div className='background_image'></div>
                        <img src='https://images.slivcdn.com/videoasset_images/porthozhil5_masthead_web_v1.jpg?h=auto&w=1366&q=high&fr=webp' />
                        <div className='slide_content'>
                            <img src='https://images.slivcdn.com/videoasset_images/porthozhil_10aug_multilang_masthead_logo_new_movie.png?w=400&q=high&fr=webp' />
                            <div className='slide_content_text'>
                                <span className='slide_content_text_type'>Thriller, Romance, Action</span>
                                <span className='dot'></span>
                                <span className='slide_content_text_type'>Hindi</span>
                                <span className='dot'></span>
                                <span className='slide_content_text_type'>2023</span>
                            </div>
                            <div className='slide_content_button'>
                                <div className='slide_content_add'>
                                    <RxPlus className='slide_content_add_plus' />
                                    <p>Add to My List</p>
                                </div>
                                <div className='slide_content_play'>
                                    <button>Play Now</button>
                                </div>
                                <div className='slide_content_share'>
                                    <PiShareFat className='slide_content_share_sign' />
                                    <p>Share</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Carousel.Slide>
                <Carousel.Slide>
                    <div className='slide'>
                        <div className='background_image'></div>
                        <img src='https://images.slivcdn.com/videoasset_images/broker_masthead_web_v1_rev.jpg?h=auto&w=1366&q=high&fr=webp' />
                        <div className='slide_content'>
                            <img src='https://images.slivcdn.com/videoasset_images/broker_hindi_multilang_masthead_logo_new_movie.png?w=400&q=high&fr=webp' />
                            <div className='slide_content_text'>
                                <span className='slide_content_text_type'>Thriller, Romance, Action</span>
                                <span className='dot'></span>
                                <span className='slide_content_text_type'>Hindi</span>
                                <span className='dot'></span>
                                <span className='slide_content_text_type'>2023</span>
                            </div>
                            <div className='slide_content_button'>
                                <div className='slide_content_add'>
                                    <RxPlus className='slide_content_add_plus' />
                                    <p>Add to My List</p>
                                </div>
                                <div className='slide_content_play'>
                                    <button>Play Now</button>
                                </div>
                                <div className='slide_content_share'>
                                    <PiShareFat className='slide_content_share_sign' />
                                    <p>Share</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Carousel.Slide>
                <Carousel.Slide>
                    <div className='slide'>
                        <div className='background_image'></div>
                        <img src='https://images.slivcdn.com/videoasset_images/barsatein_2_merged_image_web_v1.jpg?h=auto&w=1366&q=high&fr=webp' />
                        <div className='slide_content'>
                            <img src='https://images.slivcdn.com/videoasset_images/barsatein_2_masthead_logo.png?w=400&q=high&fr=webp' />
                            <div className='slide_content_text'>
                                <span className='slide_content_text_type'>Thriller, Romance, Action</span>
                                <span className='dot'></span>
                                <span className='slide_content_text_type'>Hindi</span>
                                <span className='dot'></span>
                                <span className='slide_content_text_type'>2023</span>
                            </div>
                            <div className='slide_content_button'>
                                <div className='slide_content_add'>
                                    <RxPlus className='slide_content_add_plus' />
                                    <p>Add to My List</p>
                                </div>
                                <div className='slide_content_play'>
                                    <button>Play Now</button>
                                </div>
                                <div className='slide_content_share'>
                                    <PiShareFat className='slide_content_share_sign' />
                                    <p>Share</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Carousel.Slide>
                <Carousel.Slide>
                    <div className='slide'>
                        <div className='background_image'></div>
                        <img src='https://images.slivcdn.com/videoasset_images/parasite_masthead_web_v1.jpg?h=auto&w=1366&q=high&fr=webp' />
                        <div className='slide_content'>
                            <img src='https://images.slivcdn.com/videoasset_images/parasite_hindi_multilang_masthead_logo_new_movie.png?w=400&q=high&fr=webp' />
                            <div className='slide_content_text'>
                                <span className='slide_content_text_type'>Thriller, Romance, Action</span>
                                <span className='dot'></span>
                                <span className='slide_content_text_type'>Hindi</span>
                                <span className='dot'></span>
                                <span className='slide_content_text_type'>2023</span>
                            </div>
                            <div className='slide_content_button'>
                                <div className='slide_content_add'>
                                    <RxPlus className='slide_content_add_plus' />
                                    <p>Add to My List</p>
                                </div>
                                <div className='slide_content_play'>
                                    <button>Play Now</button>
                                </div>
                                <div className='slide_content_share'>
                                    <PiShareFat className='slide_content_share_sign' />
                                    <p>Share</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Carousel.Slide>
                <Carousel.Slide>
                    <div className='slide'>
                        <div className='background_image'></div>
                        <img src='https://images.slivcdn.com/videoasset_images/thefabelmans_masthead_web_v1.jpg?h=auto&w=1366&q=high&fr=webp' />
                        <div className='slide_content'>
                            <img src='https://images.slivcdn.com/videoasset_images/thefabelmans_english_multilang_masthead_logo_new_movie.png?w=400&q=high&fr=webp' />
                            <div className='slide_content_text'>
                                <span className='slide_content_text_type'>Thriller, Romance, Action</span>
                                <span className='dot'></span>
                                <span className='slide_content_text_type'>Hindi</span>
                                <span className='dot'></span>
                                <span className='slide_content_text_type'>2023</span>
                            </div>
                            <div className='slide_content_button'>
                                <div className='slide_content_add'>
                                    <RxPlus className='slide_content_add_plus' />
                                    <p>Add to My List</p>
                                </div>
                                <div className='slide_content_play'>
                                    <button>Play Now</button>
                                </div>
                                <div className='slide_content_share'>
                                    <PiShareFat className='slide_content_share_sign' />
                                    <p>Share</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Carousel.Slide>
                <Carousel.Slide>
                    <div className='slide'>
                        <div className='background_image'></div>
                        <img src='https://images.slivcdn.com/videoasset_images/crs4_2_merged_image_web_v1.jpg?h=auto&w=1366&q=high&fr=webp' />
                        <div className='slide_content'>
                            <img src='https://images.slivcdn.com/videoasset_images/crs4_set3_hindi_multilang_13july_masthead_logo.png?w=400&q=high&fr=webp' />
                            <div className='slide_content_text'>
                                <span className='slide_content_text_type'>Thriller, Romance, Action</span>
                                <span className='dot'></span>
                                <span className='slide_content_text_type'>Hindi</span>
                                <span className='dot'></span>
                                <span className='slide_content_text_type'>2023</span>
                            </div>
                            <div className='slide_content_button'>
                                <div className='slide_content_add'>
                                    <RxPlus className='slide_content_add_plus' />
                                    <p>Add to My List</p>
                                </div>
                                <div className='slide_content_play'>
                                    <button>Play Now</button>
                                </div>
                                <div className='slide_content_share'>
                                    <PiShareFat className='slide_content_share_sign' />
                                    <p>Share</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Carousel.Slide>
                <Carousel.Slide>
                    <div className='slide'>
                        <div className='background_image'></div>
                        <img src='https://images.slivcdn.com/videoasset_images/scam_2003_promo_4aug_masthead_web_v1.jpg?h=auto&w=1366&q=high&fr=webp' />
                        <div className='slide_content'>
                            <img src='https://images.slivcdn.com/videoasset_images/scam_2003_promo_4aug_masthead_logo.png?w=400&q=high&fr=webp' />
                            <div className='slide_content_text'>
                                <span className='slide_content_text_type'>Thriller, Romance, Action</span>
                                <span className='dot'></span>
                                <span className='slide_content_text_type'>Hindi</span>
                                <span className='dot'></span>
                                <span className='slide_content_text_type'>2023</span>
                            </div>
                            <div className='slide_content_button'>
                                <div className='slide_content_add'>
                                    <RxPlus className='slide_content_add_plus' />
                                    <p>Add to My List</p>
                                </div>
                                <div className='slide_content_play'>
                                    <button>Play Now</button>
                                </div>
                                <div className='slide_content_share'>
                                    <PiShareFat className='slide_content_share_sign' />
                                    <p>Share</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Carousel.Slide>
                <Carousel.Slide>
                    <div className='slide'>
                        <div className='background_image'></div>
                        <img src='https://images.slivcdn.com/videoasset_images/kbc23_4_merged_image_web_v1_1.jpg?h=auto&w=1366&q=high&fr=webp' />
                        <div className='slide_content'>
                            <img src='https://images.slivcdn.com/videoasset_images/kbc23_3_masthead_logo_dated_1.png?w=400&q=high&fr=webp' />
                            <div className='slide_content_text'>
                                <span className='slide_content_text_type'>Thriller, Romance, Action</span>
                                <span className='dot'></span>
                                <span className='slide_content_text_type'>Hindi</span>
                                <span className='dot'></span>
                                <span className='slide_content_text_type'>2023</span>
                            </div>
                            <div className='slide_content_button'>
                                <div className='slide_content_add'>
                                    <RxPlus className='slide_content_add_plus' />
                                    <p>Add to My List</p>
                                </div>
                                <div className='slide_content_play'>
                                    <button>Play Now</button>
                                </div>
                                <div className='slide_content_share'>
                                    <PiShareFat className='slide_content_share_sign' />
                                    <p>Share</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Carousel.Slide>
                <Carousel.Slide>
                    <div className='slide'>
                        <div className='background_image'></div>
                        <img src='https://images.slivcdn.com/videoasset_images/jengaburu_review_11aug_masthead_web_v1.jpg?h=auto&w=1366&q=high&fr=webp' />
                        <div className='slide_content'>
                            <img src='https://images.slivcdn.com/videoasset_images/jengaburu_hindi_mulitlang_8aug_masthead_logo_new_movie.png?w=400&q=high&fr=webp' />
                            <div className='slide_content_text'>
                                <span className='slide_content_text_type'>Thriller, Romance, Action</span>
                                <span className='dot'></span>
                                <span className='slide_content_text_type'>Hindi</span>
                                <span className='dot'></span>
                                <span className='slide_content_text_type'>2023</span>
                            </div>
                            <div className='slide_content_button'>
                                <div className='slide_content_add'>
                                    <RxPlus className='slide_content_add_plus' />
                                    <p>Add to My List</p>
                                </div>
                                <div className='slide_content_play'>
                                    <button>Play Now</button>
                                </div>
                                <div className='slide_content_share'>
                                    <PiShareFat className='slide_content_share_sign' />
                                    <p>Share</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Carousel.Slide>
                <Carousel.Slide>
                    <div className='slide'>
                        <div className='background_image'></div>
                        <img src='https://images.slivcdn.com/videoasset_images/ca2_masthead_web_v1.jpg?h=auto&w=1366&q=high&fr=webp' />
                        <div className='slide_content'>
                            <img src='https://images.slivcdn.com/videoasset_images/ca2_hindi_multilang_mastheadr_logo_new_movie.png?w=400&q=high&fr=webp' />
                            <div className='slide_content_text'>
                                <span className='slide_content_text_type'>Thriller, Romance, Action</span>
                                <span className='dot'></span>
                                <span className='slide_content_text_type'>Hindi</span>
                                <span className='dot'></span>
                                <span className='slide_content_text_type'>2023</span>
                            </div>
                            <div className='slide_content_button'>
                                <div className='slide_content_add'>
                                    <RxPlus className='slide_content_add_plus' />
                                    <p>Add to My List</p>
                                </div>
                                <div className='slide_content_play'>
                                    <button>Play Now</button>
                                </div>
                                <div className='slide_content_share'>
                                    <PiShareFat className='slide_content_share_sign' />
                                    <p>Share</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Carousel.Slide>
            </Carousel>

            <div className='movie_header'>
                <h1>Movie</h1>
                <Carousel
                    height={400}
                    slideSize="10%"
                    slideGap="md"
                    loop
                    align="start"
                    slidesToScroll={5}
                >
                    {movie?.map(item => (
                        <Carousel.Slide>
                            <div key={item._id} className="thumbnail_item">
                                <img src={item.thumbnail} alt={item.title} />
                            </div>
                        </Carousel.Slide>
                    ))}
                </Carousel>
            </div>
            <div className='home_carousel'>
                <h1>Video Song</h1>
                <Carousel
                    height={400}
                    slideSize="10%"
                    slideGap="md"
                    loop
                    align="start"
                    slidesToScroll={5}
                >
                    {videoSong?.map(item => (
                        <Carousel.Slide>
                            <div key={item._id} className="thumbnail_item">
                                <img src={item.thumbnail} alt={item.title} />
                            </div>
                        </Carousel.Slide>
                    ))}
                </Carousel>
            </div>
            <div className='home_carousel'>
                <h1>Documentry</h1>
                <Carousel
                    height={400}
                    slideSize="10%"
                    slideGap="md"
                    loop
                    align="start"
                    slidesToScroll={5}
                >
                    {documentry?.map(item => (
                        <Carousel.Slide>
                            <div key={item._id} className="thumbnail_item">
                                <img src={item.thumbnail} alt={item.title} />
                            </div>
                        </Carousel.Slide>
                    ))}
                </Carousel>
            </div>
            <div className='home_carousel'>
                <h1>TV Show</h1>
                <Carousel
                    height={400}
                    slideSize="10%"
                    slideGap="md"
                    loop
                    align="start"
                    slidesToScroll={5}
                >
                    {tvShow?.map(item => (
                        <Carousel.Slide>
                            <div key={item._id} className="thumbnail_item">
                                <img src={item.thumbnail} alt={item.title} />
                            </div>
                        </Carousel.Slide>
                    ))}
                </Carousel>
            </div>
            <div className='home_carousel'>
                <h1>Short Film</h1>
                <Carousel
                    height={400}
                    slideSize="10%"
                    slideGap="md"
                    loop
                    align="start"
                    slidesToScroll={5}
                >
                    {shortFilm?.map(item => (
                        <Carousel.Slide>
                            <div key={item._id} className="thumbnail_item">
                                <img src={item.thumbnail} alt={item.title} />
                            </div>
                        </Carousel.Slide>
                    ))}
                </Carousel>
            </div>
            <div className='home_carousel'>
                <h1>Trailer</h1>
                <Carousel
                    height={400}
                    slideSize="10%"
                    slideGap="md"
                    loop
                    align="start"
                    slidesToScroll={5}
                >
                    {trailer?.map(item => (
                        <Carousel.Slide>
                            <div key={item._id} className="thumbnail_item">
                                <img src={item.thumbnail} alt={item.title} />
                            </div>
                        </Carousel.Slide>
                    ))}
                </Carousel>
            </div>
            <div className='home_carousel'>
                <h1>Web Series</h1>
                <Carousel
                    height={400}
                    slideSize="10%"
                    slideGap="md"
                    loop
                    align="start"
                    slidesToScroll={5}
                >
                    {webSeries?.map(item => (
                        <Carousel.Slide>
                            <div key={item._id} className="thumbnail_item">
                                <img src={item.thumbnail} alt={item.title} />
                            </div>
                        </Carousel.Slide>
                    ))}
                </Carousel>
            </div>
        </>
    )
}

export default Home;