import React from "react";
import "./style.scss";
import { elastic as Menu } from "react-burger-menu";
import { Link as ReactLink } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

import MenuLogoColor from "../../assets/images/logo_main_color.png";

//icons
import { HiOutlineHome } from "react-icons/hi2";
import { HiOutlineCodeBracketSquare } from "react-icons/hi2";
import { HiOutlineWrenchScrewdriver } from "react-icons/hi2";
import { HiOutlineChatBubbleLeftRight } from "react-icons/hi2";
import { HiOutlinePhoto } from "react-icons/hi2";
import { CgWebsite } from "react-icons/cg";



class Navbar extends React.Component {
  showSettings(event) {
    event.preventDefault();
  }

  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false,
    };
  }

  // This keeps your state in sync with the opening/closing of the menu
  // via the default means, e.g. clicking the X, pressing the ESC key etc.
  handleStateChange(state) {
    this.setState({ menuOpen: state.isOpen });
  }

  // This can be used to close the menu, e.g. when a user clicks a menu item
  closeMenu() {
    this.setState({ menuOpen: false });
  }

  // This can be used to toggle the menu, e.g. when using a custom icon
  // Tip: You probably want to hide either/both default icons if using a custom icon
  // See https://github.com/negomi/react-burger-menu#custom-icons
  toggleMenu() {
    this.setState((state) => ({ menuOpen: !state.menuOpen }));
  }

  render() {
    // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
    return (
      <Menu
        isOpen={this.state.menuOpen}
        onStateChange={(state) => this.handleStateChange(state)}
      >
        {/* <div className="darkmode_container"><DarkMode className="menu-item"/></div> */}
        <ReactLink
          to="/"
          className="menu-item"
          onClick={() => {
            this.closeMenu();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <HiOutlineHome />
          Início
        </ReactLink>
        <ReactLink
          to="/about"
          className="menu-item"
          onClick={() => {
            this.closeMenu();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <HiOutlineCodeBracketSquare />
          Quem Somos?
        </ReactLink>
        <HashLink
          to="/#services"
          smooth
          className="menu-item"
          onClick={() => {
            this.closeMenu();
            // window.scrollTo({bottom: -1200, behavior: "smooth" });
          }}
        >
          <HiOutlineWrenchScrewdriver />
          Serviços
        </HashLink>
        <ReactLink
          to="/portfolio"
          className="menu-item"
          onClick={() => {
            this.closeMenu();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <CgWebsite />
          Portfolio
        </ReactLink>
        <ReactLink
          to="/gallery"
          className="menu-item"
          onClick={() => {
            this.closeMenu();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <HiOutlinePhoto />
          Galeria
        </ReactLink>
        <HashLink
          to="/#contact"
          smooth
          className="menu-item"
          onClick={() => {
            this.closeMenu();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <HiOutlineChatBubbleLeftRight />
          Contato
        </HashLink>
        <img src={MenuLogoColor} className="navbar_menu_logo" alt="" />
        {/* <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a> */}
      </Menu>
    );
  }
}
export default Navbar;
