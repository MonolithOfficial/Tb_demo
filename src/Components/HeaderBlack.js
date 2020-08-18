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
import BurgerMenu from "../Assets/icons/burger-menu-icon.svg";
import Logo from "../Assets/icons/logo-black.svg";


class Header extends Component  {
  constructor(props) {
		super(props);
		this.state = {
      burgerMenuOpen: true,
      whiteHeader: false,
      currentLang: 'EN'
    };
  }

  toggleClass = () => {
    const currentState = this.state.burgerMenuOpen;
    this.setState({ burgerMenuOpen: !currentState });
  };

  handleClick = (lang) => {
    i18next.changeLanguage(lang);
  }

  dropList() {
    let n = document.querySelector(".language-bar__black").options.length;
    document.querySelector(".language-bar__black").size = n;
  }

  collapseList() {
    document.querySelector(".language-bar__black").size = 1;
  }

  handleSelect(elm){
    window.location = elm.value;
  }

  render(){
    const {t} = this.props;
    const {burgerMenuOpen} = this.state;
    let lang = i18next.language
    const otherLang = ['EN','RU', 'KA'];
    const index = otherLang.indexOf(lang);
    if (index > -1) {  
    otherLang.splice(index, 1);
    }
    return (     
      <>       
          {
            burgerMenuOpen ? 
            <header className="header-black container-own"> 
            <div className="header-wr">
            <div className="flex">
             <img src={ BurgerMenu } className="header-burger_menu" alt="Burger Menu" onClick={this.toggleClass}/>
             <select
               className="language-bar__black" onMouseEnter={() => this.dropList()}
               onMouseLeave={() => this.collapseList()} style=
               {{"border": "none", "outline": "0px", "-webkit-appearance": "none", "-moz-appearance": "none",
                "appearance": "none", "background-color": "none", "scrollbar-width": "none"}}>
              {/* <option value="" selected disabled hidden style={{"color": "red"}}>Choose here</option> */}
              <option onClick={() => this.handleClick("EN")} className="language-first" value={this.state.currentLang}>{this.state.currentLang}</option>
              <option onClick={() => this.handleClick("RU")} key={index} value="RU">RU</option>
              <option onClick={() => this.handleClick("KA")} key={index} value="GE">GE</option>
                            </select>
       </div>
       <Link to="/">           
             <img src={Logo} style={{"display": "block", "margin": 'auto'}} className="header-logo" alt="website logo" onClick={this.whiteHeader}/> 
       </Link>
       <Button 
         title="book now"
         className="book-now"
       />
     </div> </header>:
            
        <DropdownMenu 
          t = {t}
          menuHandler  = { this.toggleClass } 
          whiteHeader  = { this.whiteHeader } 
          blackHeader  = { this.blackHeader }/>
          }     
    </>
  );
}}

export default Header;
