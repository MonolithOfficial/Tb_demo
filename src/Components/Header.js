import React, { Component } from 'react';
import {Link} from "react-router-dom";

//Styles
import "../Styles/header.scss";
import "../Styles/common.scss"

//Component
import Button from './Button';
import DropdownMenu from "./DropDownMenu";
import i18next from 'i18next';

//Icons
import BurgerMenuWhite from "../Assets/icons/white-burger-menu.svg";
import LogoWhite from '../Assets/icons/white-logo.svg';


class Header extends Component  {
  constructor(props) {
		super(props);
		this.state = {
      burgerMenuOpen: true,
      currentLang: 'EN',
      inactiveLang: ['RU', 'GE']
    };
  }

  toggleClass = () => {
    const currentState = this.state.burgerMenuOpen;
    this.setState({ burgerMenuOpen: !currentState });
  };

 handleClick = (lang) => {
   console.log(lang)
  //  console.log(this.state)
  //  this.state.currentLang = lang
    this.setState({
      currentLang: lang
    })
    i18next.changeLanguage(lang);
  }

  dropList() {
    let n = document.querySelector(".language-bar__white").options.length;
    document.querySelector(".language-bar__white").size = n;
  }

  collapseList() {
    document.querySelector(".language-bar__white").size = 1;
  }

  handleSelect(elm){
    window.location = elm.value;
  }

  render(){
    const {t} = this.props;
    const {burgerMenuOpen} = this.state;
    let lang = i18next.language
    // console.log(this.state)
    const otherLang = ['RU', 'KA'];
    const index = otherLang.indexOf(lang);
    if (index > -1) {  
    otherLang.splice(index, 1);
    }
    return (     
      <>       
          {
            burgerMenuOpen ? 
            <header className="header"> 
            <div className="header-wr container-own">
            <div className="flex">
             <img src={ BurgerMenuWhite } className="header-burger_menu" alt="Burger Menu" onClick={this.toggleClass}/>
              <select
               className="language-bar__white" onMouseEnter={() => this.dropList()}
               onMouseLeave={() => this.collapseList()} style=
               {{"border": "none", "outline": "0px", "-webkit-appearance": "none", "-moz-appearance": "none",
                "appearance": "none", "background-color": "rgba(0, 0, 0, 0.3)", "scrollbar-width": "none"}}>
              {/* <option value="" selected disabled hidden style={{"color": "red"}}>Choose here</option> */}
              <option onClick={() => this.handleClick("EN")} className="language-first" value={this.state.currentLang}>{this.state.currentLang}</option>
              <option onClick={() => this.handleClick("RU")} key={index} value="RU">RU</option>
              <option onClick={() => this.handleClick("KA")} key={index} value="GE">GE</option>
                            </select>
       </div>
       <Link to="/">           
             <img src={LogoWhite} style={{"display": "block", "margin": "auto"}} className="header-logo" alt="website logo" onClick={this.whiteHeader}/> 
       </Link>
       <Button 
         title="book now"
         className="book-now__white"
       />
     </div> </header>:
            
        <DropdownMenu 
          t={t}
          menuHandler  = { this.toggleClass } 
          burgerMenuOpen = {burgerMenuOpen}/>
          }     
    </>
  );
}}

export default Header;
