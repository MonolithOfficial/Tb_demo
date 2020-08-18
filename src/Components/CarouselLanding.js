// import Swiper core and required components
import React from 'react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import '../Styles/common.scss';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import { Link } from 'react-router-dom';

// install Swiper components
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

export default (props) => {
  const {t} = props;
  const Tbilisee = 'https://core.tbilisee.ge/';
  const {sliders} = props;
  const params = {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  }
  return (
    <Swiper {...params}
      slidesPerView = {1}  
    >
       
      {
        sliders.map((slide,index) => {           
         return (        
           <>            
        <SwiperSlide>                    
            <Link to={"/" + slide.link} className="landing-open__btn">{t('open')}</Link>
            <div className="background-image__cover height" style={{backgroundImage: `url(${Tbilisee + slide.background})`}}>
              <img className="door" src={Tbilisee + slide.door} alt="Door"/>
            </div>
        </SwiperSlide>
        </>
          )
        }
        )
      }

    </Swiper>
  );
};