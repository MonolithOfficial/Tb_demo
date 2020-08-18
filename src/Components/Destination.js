
import React, { Component } from 'react';

// CSS
import 'swiper/swiper.scss';
import '../Styles/costumiseSwiper.scss';
import '../Pages/Location/Location.scss'
import '../Styles/common.scss';
import DestCardsSwiper from '../Components/DestCardsSwiper';
import Truncate from 'react-truncate';
import ShowMoreText from 'react-show-more-text';



export default class Destination extends Component {
  state = {
    testImages: this.props.arrayDestination[0],
    expanded: false,
    truncated: false
  }

  
  componentDidMount () {
    this.setState({testImages: this.props.arrayDestination[0]})
    
  }
  render () {
  const Tbilisee = 'https://core.tbilisee.ge/';
  const toggleImage = (item) => {
    this.setState({testImages: item})
  }
  const {t, i18n} = this.props;
  return (
<>
  <>
  
  <div className="dest container-own">
    <div>
      <div id="destination-main" className="background-image__cover height" style={{backgroundImage: `url(${Tbilisee + this.state.testImages.image_1000})`}}/>
    </div>
    <div className="dest-col">
        <div>
        <h2 className="destination-content__title">
              {(() => {
                    if (i18n.language === 'KA') {
                      return (
                        this.state.testImages.title_ge
                      )
                    } else if (i18n.language === 'RU') {
                      return (
                        this.state.testImages.title_ru
                      )
                    } else {
                      return (
                        this.state.testImages.title_en
                      )
                    }
      })()}</h2>
      <ShowMoreText
                /* Default options */
                lines={4}
                more='Show more'
                less='Show less'
                anchorClass='anchorClass'
                onClick={this.executeOnClick}
                expanded={true}
                anchorClass="anchorClass"
            >
                <p className="destination-content__paragraph " style={{ marginTop: "30px", marginBottom: "30px"}}>
        {(() => {
                    if (i18n.language === 'KA') {
                      return (
                        this.state.testImages.description_ge
                      )
                    } else if (i18n.language === 'RU') {
                      return (
                        this.state.testImages.description_ru
                      )
                    } else {
                      return (
                        this.state.testImages.description_en
                      )
                    }
      })()}</p>
            </ShowMoreText>
      
      <p className="destination-content__paragraph">{this.state.testImages.time} min trip</p>
        </div>
        <div className="dest-cards relative">
        <div className="dest-absolute"/>
          <div className="dest-cards__wr absolute">
        {
                  this.props.arrayDestination.map((item,index) => 
                  <div className="destination-card" key={index}>
                      <h3>{(() => {
                    if (i18n.language === 'KA') {
                      return (
                        item.title_ge
                      )
                    } else if (i18n.language === 'RU') {
                      return (
                        item.title_ru
                      )
                    } else {
                      return (
                        item.title_en
                      )
                    }
      })()
      }
      
      </h3>
                  <div id="destination-main" className="background-full height destination-card__image" style={{backgroundImage: `url(${Tbilisee + item.image})`}} onClick={() => toggleImage(item)}/>
                </div>
                  )
              }
      
              </div>
        </div>
    </div>
    <div className="dest-cards__mobile">
            <DestCardsSwiper i18n={i18n} t={t} toggleImage={toggleImage}arrayDestination={this.props.arrayDestination}/>
      </div>
  </div>
  </>
  
    
</>

   
  );
}
}
