
  import React, { useRef } from 'react';
  import Swiper from 'react-id-swiper';
import { Link } from 'react-router-dom';
  const SwiperMain = (props) => {
    const params = {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
        loop: true,
        spaceBetween:    0,
        slidesPerView:   1,
        activeSlideKey:  '1',
        breakpoints: {
          768: {
            slidesPerView: 1.6,
            spaceBetween: 200
          },
          },
        centeredSlides: true,
        
    }
    const Tbilisee = 'https://core.tbilisee.ge/';
    const swiperRef = useRef(null);
    const goNext = () => {
      if (swiperRef.current && swiperRef.current.swiper) {
        swiperRef.current.swiper.slideNext();
      }
    };
    const goPrev = () => {
      if (swiperRef.current && swiperRef.current.swiper) {
        swiperRef.current.swiper.slidePrev();
      }
    };
    return (
      <>
      <Swiper ref={swiperRef} {...params} activeSlideKey='5' className="landing-swiper__rooms 	swiper-container">
        {
          props.arrayLandingRooms.map((item,index) => 
          <div>
            <div className="background-image__cover full swiper-slide" style={{backgroundImage: `url(${Tbilisee + item.main_image})`}} key='5'></div>
            <h4>{item.type_en}</h4>
            </div>)
        }
      </Swiper>
      <div className="landing-swiper__controller">
      <button onClick={goPrev} className="landing-rooms__prev">prev  <span>/ garden view</span></button>
      <div>
        
        <div className="flex relative">
          <Link to='/rooms' className="landing-swiper__seemore">see more</Link>
          <Link>book now</Link>
        </div>       
      </div>
      <button onClick={ goNext } className="landing-rooms__next"><span>city view / </span> next</button>
  </div>
  </>
    )
  };
  export default SwiperMain;