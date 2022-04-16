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
  .slick-slider {
    padding-top: 0;
  }
  .image {
    width: 150px;
    height: 200px;
    img {
      width: 150px;
      height: 200px;
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
const StyledCarousel2 = styled.div`
  width: 250px;
  .slick-slider {
    padding-top: 0;
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
//  <div
//       className={className}
//       style={{ ...style, display: "block", background: "red" }}
//       onClick={onClick}
//     />

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div className={"button_next"} onClick={onClick}>
      <p>Далее</p>
      <img src={img13} alt="" style={{ width: "50px" }} />
    </div>
  );
}
export default class CertificatesCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null,
    };
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
      nextArrow: <SampleNextArrow />,
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
        </StyledCarousel1>
      </>
    );
  }
}
