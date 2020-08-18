import React,{Component} from 'react';

// PACKAGES
import {Link} from "react-router-dom";
import AOS from 'aos';
import "aos/dist/aos.css";
import axios from 'axios';
import SwiperMain from '../../Components/swiper-main'

// COMPONENTS
import CarouselLanding from '../../Components/CarouselLanding';
import Header from '../../Components/Header';
import ReadMoreAndLess from 'react-read-more-less';
import ShowMoreText from 'react-show-more-text';

// IMAGES
import HotelRound from "../../Assets/icons/tbilisee-hotel-round-white.svg";
import GalleryRound from '../../Assets/icons/hotel-badge.svg';

// SCSS
import "./Landing.scss";


export default class Landing extends Component {
  state = {
    arrayLanding: undefined
  }

  componentDidMount(){
    axios.get('https://core.tbilisee.ge/api/mainPage').then(res => {
      this.setState( {arrayLanding: res.data} ); 
    })
    AOS.init({
			duration: 2000
		});
  }
  render(){
    if(!this.state.arrayLanding) {
      return <div className="loading"></div>; //TODO: Need Loading State
    }

    const Tbilisee = 'https://core.tbilisee.ge/';
    const {arrayLanding} = this.state;
    console.log(arrayLanding,"212222222222222222222222222222")
    const half = 3;
    const eatsFirstHalf = arrayLanding.eat_drinks.image_500.splice(0, half)
    const eatsSecondHalf = arrayLanding.eat_drinks.image_500.splice(-half)
    const {t, i18n} = this.props;
  return (
    <>
    <Header t={t}/>
    <div className="landing">
      <div className="landing-head__swiper">
      <div className="header-title">
      </div>
      
      <img className="landing-badge" src={HotelRound} alt="badge"/>
       <CarouselLanding
        t={t}        
        sliders={arrayLanding.sliders}
       />
      </div>       
      <h2  className="exploring-title">{(() => {
        if (i18n.language === 'KA') {
          return (
            arrayLanding.exploring.title_ge
          )
        } else if (i18n.language === 'RU') {
          return (
            arrayLanding.exploring.title_ru
          )
        } else {
          return (
            arrayLanding.exploring.title_en
          )
        }
      })()}</h2>      
        <section data-aos="fade-up"
            data-aos-anchor-placement = "top-center" className="exploring container-own">
              
            <div className="exploring-one">
              <h3>Tbilise <span className="white">hotel</span></h3>
<p >{(() => {
        if (i18n.language == 'KA') {
          return (
            arrayLanding.exploring.description_ge
          )
        } else if (i18n.language === 'RU') {
          return (
            arrayLanding.exploring.description_ru
          )
        } else {
          return (
            arrayLanding.exploring.description_en
          )
        }
      })()}</p>
              
            </div>
            <div className="exploring-two">
              <div className="background-image__cover height" style={{backgroundImage: `url(${(Tbilisee + arrayLanding.exploring.big_image)})`}}></div>
            </div>
            <div className="relative exploring-three">
              <div className="background-image__cover height-half" style={{backgroundImage: `url(${Tbilisee + arrayLanding.exploring.small_image})`}}></div>
            </div>           
        </section>
      <section data-aos="fade-up"
            data-aos-anchor-placement = "top-center" className="landing-gallery">
              <div className="landing-gallery__absolute absolute"/>
        <div>
        <div className="background-image__cover height full gallery-big__image" style={{backgroundImage: `url(${Tbilisee + arrayLanding.gallery.big_image})`}}></div>
        </div>
        <div>
<p className="elipsis-9">{(() => {
        if (i18n.language === 'KA') {
          return (
            arrayLanding.gallery.description_ge
          )
        } else if (i18n.language === 'RU') {
          return (
            arrayLanding.gallery.description_ru
          )
        } else {
          return (
            arrayLanding.gallery.description_en
          )
        }
      })()}</p>
          
        </div>
        <div className="relative">
          <h3>{(() => {
        if (i18n.language === 'KA') {
          return (
            arrayLanding.gallery.title_ge
          )
        } else if (i18n.language === 'RU') {
          return (
            arrayLanding.gallery.title_ru
          )
        } else {
          return (
            arrayLanding.gallery.title_en
          )
        }
      })()}</h3>
          <div className="background-image__cover height-half landing-neighborhood__img absolute" style={{backgroundImage: `url(${(Tbilisee + arrayLanding.gallery.medium_image_200)})`}}></div>
          {/* <img src={Tbilisee + arrayLanding.gallery.medium_image} alt="Landing Gallery" className="landing-neighborhood__img absolute"/> */}
        </div>
        <div className="relative">
        <img className="gallery-badge absolute" src={GalleryRound}/>
        </div>
        <div>
        <div className="background-image__cover landing-neighborhood__img2" style={{backgroundImage: `url(${Tbilisee + arrayLanding.gallery.small_image})`}}></div>
          {/* <img src={Tbilisee + arrayLanding.gallery.small_image} alt="*" className="landing-neighborhood__img2"/> */}
        </div>
        <div className="relative">
          <Link to="/gallery" className="landing-gallery__btn absolute">{t('See More')}</Link>
        </div>
      </section>
      <section data-aos="fade-up"
            data-aos-anchor-placement = "top-center" className="landing-swiper relative">
              <div className="landing-swiper__absolute absolute"/>
              <h2 className="landing-swiper__title container-own">{t('rooms')}</h2>
              <SwiperMain arrayLandingRooms={arrayLanding.rooms}/>
      </section>
      <section  className="landing_eats container-own" data-aos="fade-up"
            data-aos-anchor-placement = "top-center">
              <div>
          <div style={{position: "sticky", top: "100px"}}>
          <h3 className="eats-title">{(() => {
        if (i18n.language === 'KA') {
          return (
            arrayLanding.eat_drinks.title_ge
          )
        } else if (i18n.language === 'RU') {
          return (
            arrayLanding.eat_drinks.title_ru
          )
        } else {
          return (
            arrayLanding.eat_drinks.title_en
          )
        }
      })()}</h3>
                <p className="eats-paragraph elipsis-7">{(() => {
        if (i18n.language === 'KA') {
          return (
            arrayLanding.eat_drinks.description_ge
          )
        } else if (i18n.language === 'RU') {
          return (
            arrayLanding.eat_drinks.description_ru
          )
        } else {
          return (
            arrayLanding.eat_drinks.description_en
          )
        }
      })()}</p>
              
                 <Link to="/restaurant" className="eats-button">{t('See More')}</Link>
                 </div>
          </div>
          <div className="landing-eats__img">
          {
              eatsFirstHalf.map((image,index) =>
              <div className="background-image__cover full" style={{backgroundImage: `url(${Tbilisee + image})`}} key={index}></div>
              )
            }
          
          </div>
          <div className="landing-eats__img2">
            {
              eatsSecondHalf.map((image,index) => 
              <div className="background-image__cover full" style={{backgroundImage: `url(${Tbilisee + image})`}} key={index}></div>
              )
            }
          </div>
      </section>
      <section data-aos="fade-up"
            data-aos-anchor-placement = "top-center" className="landing-neighborhood">
          <div className="landing-neighborhood__txt">   
              <h3>{(() => {
        if (i18n.language === 'KA') {
          return (
            arrayLanding.neighborhood.title_ge
          )
        } else if (i18n.language === 'RU') {
          return (
            arrayLanding.neighborhood.title_ru
          )
        } else {
          return (
            arrayLanding.neighborhood.title_en
          )
        }
      })()}</h3>
              <p className="elipsis-7">{(() => {
        if (i18n.language === 'KA') {
          return (
            arrayLanding.neighborhood.description_ge
          )
        } else if (i18n.language === 'RU') {
          return (
            arrayLanding.neighborhood.description_ru
          )
        } else {
          return (
            arrayLanding.neighborhood.description_en
          )
        }
      })()}</p>
                <Link to="/location" className="neighborhood-more">{t('View More')}</Link>
          </div>
          <div className="background-image__cover full" style={{backgroundImage: `url(${Tbilisee +  arrayLanding.neighborhood.big_image})`}}></div>
          <div className="background-image__cover height-half neigborhood-img2" style={{backgroundImage: `url(${Tbilisee + arrayLanding.neighborhood.small_image})`}}></div>
            <div className="landing-absolute__bottom"/>
          </section>
          
    </div>
    
    </>
  );
}
}
