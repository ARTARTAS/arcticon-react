import React, { Component } from "react";
import Slider from "react-slick";
import img1 from "./../../assets/img/MainPage/BlockTen/01.jpg";
import img2 from "./../../assets/img/MainPage/BlockTen/02.jpg";
import img3 from "./../../assets/img/MainPage/BlockTen/03.jpg";
import img4 from "./../../assets/img/MainPage/BlockTen/04.jpg";
import img5 from "./../../assets/img/MainPage/BlockTen/05.jpg";
import img13 from "./../../assets/svg/home/details_black.svg";
import styled from "styled-components";

const StyledCarouselLeft = styled.div`
  width: 250px;
  margin: auto 0;
  z-index: 3;
  overflow: hidden;

  @media (max-width: 768px) {
    width: 500px;
  }

  .slick-slider {
    padding-top: 0;
  }
  .slick-slide {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .image {
    width: 200px;
    height: 300px;
    img {
      width: 200px;
      height: 300px;
    }
    @media (max-width: 768px) {
      width: 250px;
      height: auto;
      margin: 0px 5px;
      img {
        width: 100%;
        height: auto;
      }
    }
  }
  .button_next {
    width: fit-content;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .slick-arrow,
  .slick-prev::before {
    display: none;
    pointer-events: none;
  }
`;

const StyledCarouselRight = styled.div`
  width: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 40px;
  flex-direction: column;

  @media (max-width: 992px) {
    width: 300px;
  }
  @media (max-width: 768px) {
    display: none;
  }

  .slick-slider {
    padding-top: 0;
    width: 100%;
  }
  .slick-slide {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .slick-list {
    padding-bottom: 30px;
  }
  .image {
    width: 150px;
    height: 200px;
    img {
      width: 150px;
      height: 200px;
    }

    @media (max-width: 992px) {
      width: 100px;

      img {
        width: 150px;
      }
    }
  }
  .buttons {
    display: flex;
    width: fit-content;
    margin-left: auto;
    gap: 20px;
  }
  .button_prev {
    width: fit-content;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    transform: rotate(180deg);
    cursor: pointer;
    height: 40px;
    width: 40px;
    background: none;
  }
  .button_next {
    width: fit-content;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    height: 40px;
    width: 40px;
    background: none;
  }

  .slick-arrow,
  .slick-prev::before {
    display: none;
    pointer-events: none;
  }
`;

export default class CertificatesCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navLeft: null,
      navRight: null,
    };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }

  next() {
    this.sliderRight.slickNext();
  }
  previous() {
    this.sliderRight.slickPrev();
  }

  componentDidMount() {
    this.setState({
      navLeft: this.sliderLeft,
      navRight: this.sliderRight,
    });
  }
  render() {
    const settingsLeft = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: 0,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
      ],
    };
    const settingsRight = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      variableWidth: true,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
      ],
    };

    return (
      <>
        {" "}
        <StyledCarouselLeft>
          <Slider
            {...settingsLeft}
            styles={{ width: "500px" }}
            asNavFor={this.state.navLeft}
            ref={(slider) => (this.sliderRight = slider)}
          >
            <div className="image">
              <img src={img1} alt="" />
            </div>
            <div className="image">
              <img src={img2} alt="" />
            </div>
            <div className="image">
              <img src={img3} alt="" />
            </div>
            <div className="image">
              <img src={img4} alt="" />
            </div>
            <div className="image">
              <img src={img5} alt="" />
            </div>
          </Slider>
        </StyledCarouselLeft>
        <StyledCarouselRight>
          <Slider
            {...settingsRight}
            asNavFor={this.state.navRight}
            ref={(slider) => (this.sliderLeft = slider)}
          >
            <div className="image">
              <img src={img1} alt="" />
            </div>
            <div className="image">
              <img src={img2} alt="" />
            </div>
            <div className="image">
              <img src={img3} alt="" />
            </div>
            <div className="image">
              <img src={img4} alt="" />
            </div>
            <div className="image">
              <img src={img5} alt="" />
            </div>
          </Slider>
          <div className="buttons">
            <button className="button_prev" onClick={this.previous}>
              <img src={img13} alt="" />
            </button>
            <button className="button_next" onClick={this.next}>
              <img src={img13} alt="" />
            </button>
          </div>
        </StyledCarouselRight>
      </>
    );
  }
}
