import React from "react";
import "./style.scss";
import { elastic as Menu } from "react-burger-menu";
import { Link } from "react-scroll";

import MenuLogoColor from "../../assets/images/logo_main_color.png";

//icons 
import { HiOutlineHome } from "react-icons/hi2";
import { HiOutlineCodeBracketSquare } from "react-icons/hi2";
import { HiOutlineWrenchScrewdriver } from "react-icons/hi2";
import { HiOutlineChatBubbleLeftRight } from "react-icons/hi2";
import { HiOutlinePhoto } from "react-icons/hi2";
import { CgWebsite } from "react-icons/cg";

class Navbar extends React.Component {
  showSettings (event) {
    event.preventDefault();  
  }

  render () {
    // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
    return (
      <Menu>
        {/* <div className="darkmode_container"><DarkMode className="menu-item"/></div> */}
        <Link to="home" smooth className="menu-item" ><HiOutlineHome/>Início</Link>
        <Link to="about" smooth className="menu-item" ><HiOutlineCodeBracketSquare />Quem Somos?</Link>
        <Link to="services" smooth className="menu-item" ><HiOutlineWrenchScrewdriver/>Serviços</Link>      
        <Link to="portfolio" smooth className="menu-item" ><CgWebsite/>Portfolio</Link>             
        <Link to="gallery" smooth className="menu-item" ><HiOutlinePhoto/>Galeria</Link>             
        <Link to="contact" smooth className="menu-item" ><HiOutlineChatBubbleLeftRight/>Contato</Link>   
        <img src={MenuLogoColor} className="navbar_menu_logo" alt="" />
        {/* <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a> */}
      </Menu>
    );
  }
} export default Navbar;