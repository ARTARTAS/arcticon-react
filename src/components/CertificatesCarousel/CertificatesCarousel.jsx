import React, { Component } from "react";
import Slider from "react-slick";
import img1 from "./../../assets/img/MainPage/BlockTen/01.jpg";
import img2 from "./../../assets/img/MainPage/BlockTen/02.jpg";
import img3 from "./../../assets/img/MainPage/BlockTen/03.jpg";
import img4 from "./../../assets/img/MainPage/BlockTen/04.jpg";
import img5 from "./../../assets/img/MainPage/BlockTen/05.jpg";
import img13 from "./../../assets/svg/home/details_black.svg";
import styled from "styled-components";

const StyledCarousel1 = styled.div`
  width: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 40px;
  flex-direction: column;

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
const StyledCarousel2 = styled.div`
  width: 250px;
  margin: auto 0;

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

export default class CertificatesCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null,
    };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }

  next() {
    this.slider1.slickNext();
  }
  previous() {
    this.slider1.slickPrev();
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2,
    });
  }
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
    };
    const settings2 = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: 0,
    };

    return (
      <>
        {" "}
        <StyledCarousel2>
          <Slider
            {...settings2}
            styles={{ width: "500px" }}
            asNavFor={this.state.nav2}
            ref={(slider) => (this.slider1 = slider)}
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
        </StyledCarousel2>
        <StyledCarousel1>
          <Slider
            {...settings}
            asNavFor={this.state.nav1}
            ref={(slider) => (this.slider2 = slider)}
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
        </StyledCarousel1>
      </>
    );
  }
}
