import React, { Component } from "react";
import Carousel from "react-spring-3d-carousel";
import { v4 as uuidv4 } from "uuid";
import { config } from "react-spring";
import "./style.scss";

const getTouches = (evt) => {
  return (
    evt.touches || evt.originalEvent.touches // browser API
  );
};

export default class Example extends Component {
  state = {
    goToSlide: 0,
    offsetRadius: 2,
    showNavigation: true,
    enableSwipe: true,
    config: config.gentle,
  };

  slides = [
    {
      key: uuidv4(),
      content: (
        <div id="projetos_carousel_1" className="projetos_carousel_card">
          <div className="portfolio_carousel_button">
            {" "}
            <a
              className="button home_button"
              href="https://barrosconsultoriaeconcessoes.com"
              rel="noreferrer"
              target="_blank"
            >
              Acessar site
            </a>
          </div>
        </div>
      ),
    },
    {
      key: uuidv4(),
      content: (
        <div id="projetos_carousel_2" className="projetos_carousel_card">
          <div className="portfolio_carousel_button">
            {" "}
            <a
              className="button home_button"
              href="https://itsimoes.github.io/clinica-veterinaria"
              rel="noreferrer"
              target="_blank"
            >
              Acessar site
            </a>
          </div>
        </div>
      ),
    },
    {
      key: uuidv4(),
      content: (
        <div id="projetos_carousel_3" className="projetos_carousel_card">
          <div className="portfolio_carousel_button">
            {" "}
            <a
              className="button home_button"
              href="https://itsimoes.github.io/restaurante-01"
              rel="noreferrer"
              target="_blank"
            >
              Acessar site
            </a>
          </div>
        </div>
      ),
    },
    {
      key: uuidv4(),
      content: (
        <div id="projetos_carousel_4" className="projetos_carousel_card">
          <div className="portfolio_carousel_button">
            {" "}
            <a
              className="button home_button"
              href="https://andreviniciussg.github.io/studio"
              rel="noreferrer"
              target="_blank"
            >
              Acessar site
            </a>
          </div>
        </div>
      ),
    },
    {
      key: uuidv4(),
      content: (
        <div id="projetos_carousel_5" className="projetos_carousel_card">
          <div className="portfolio_carousel_button">
            {" "}
            <a
              className="button home_button"
              href="https://andreviniciussg.github.io/projeto_iphone15"
              rel="noreferrer"
              target="_blank"
            >
              Acessar site
            </a>
          </div>
        </div>
      ),
    },
  ].map((slide, index) => {
    return { ...slide, onClick: () => this.setState({ goToSlide: index }) };
  });

  onChangeInput = (e) => {
    this.setState({
      [e.target.name]: parseInt(e.target.value, 10) || 0,
    });
  };

  handleTouchStart = (evt) => {
    if (!this.state.enableSwipe) {
      return;
    }

    const firstTouch = getTouches(evt)[0];
    this.setState({
      ...this.state,
      xDown: firstTouch.clientX,
      yDown: firstTouch.clientY,
    });
  };

  handleTouchMove = (evt) => {
    if (!this.state.enableSwipe || (!this.state.xDown && !this.state.yDown)) {
      return;
    }

    let xUp = evt.touches[0].clientX;
    let yUp = evt.touches[0].clientY;

    let xDiff = this.state.xDown - xUp;
    let yDiff = this.state.yDown - yUp;
    if (Math.abs(xDiff) > Math.abs(yDiff)) {
      if (xDiff > 0) {
        /* left swipe */
        this.setState({
          goToSlide: this.state.goToSlide + 1,
          xDown: null,
          yDown: null,
        });
      } else {
        /* right swipe */
        this.setState({
          goToSlide: this.state.goToSlide - 1,
          xDown: null,
          yDown: null,
        });
      }
    }
  };

  render() {
    return (
      <div
        className="projetos_carousel_wrapper"
        onTouchStart={this.handleTouchStart}
        onTouchMove={this.handleTouchMove}
      >
        <Carousel
          slides={this.slides}
          goToSlide={this.state.goToSlide}
          offsetRadius={this.state.offsetRadius}
          animationConfig={this.state.config}
        />
      </div>
    );
  }
}