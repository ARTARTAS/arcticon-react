import React from "react";
import Slider from "react-slick";
import img1 from "./../../assets/img/Customers/01.jpg";
import img2 from "./../../assets/img/Customers/02.jpg";
import img3 from "./../../assets/img/Customers/03.jpg";
import img4 from "./../../assets/img/Customers/04.jpg";
import img5 from "./../../assets/img/Customers/05.jpg";
import img6 from "./../../assets/img/Customers/06.jpg";
import img7 from "./../../assets/img/Customers/07.jpg";
import img8 from "./../../assets/img/Customers/08.jpg";
import img9 from "./../../assets/img/Customers/09.jpg";
import img10 from "./../../assets/img/Customers/10.jpg";
import img11 from "./../../assets/img/Customers/11.jpg";
import img12 from "./../../assets/img/Customers/12.jpg";
import img13 from "./../../assets/svg/home/details_black.svg";
import styled from "styled-components";

const StyledCarousel = styled.div`
  width: 100%;

  .slick-slider {
    padding-top: 0;
    display: flex;
  }
  .slick-slide {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .item {
    width: 100px;
    height: fit-content;
    @media (max-width: 767.98px) {
      width: 80px;
    }
    @media (max-width: 479.98px) {
      width: 60px;
    }
    img {
      width: 100px;
      height: auto;
      @media (max-width: 767.98px) {
        width: 80px;
      }
      @media (max-width: 479.98px) {
        width: 60px;
      }
    }
  }
  .button_next {
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    @media (max-width: 767.98px) {
      display: none;
    }
  }

  .slick-arrow,
  .slick-prev::before {
    display: none;
    pointer-events: none;
  }
`;

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div className={"button_next"} onClick={onClick}>
      <img src={img13} alt="" style={{ width: "50px" }} />
    </div>
  );
}

export default function ChoiceBlockCarousel() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
  };

  return (
    <StyledCarousel>
      <Slider {...settings}>
        <div className="item">
          <div
            className="top_img"
            onMouseOver={(e) => {
              e.target.childNodes[0].src = img2;
            }}
            onMouseOut={(e) => {
              e.target.childNodes[0].src = img1;
            }}
          >
            <img src={img1} alt="" />
          </div>
          <img src={img2} alt="" />
        </div>
        <div className="item">
          <img src={img3} alt="" />
          <img src={img4} alt="" />
        </div>
        <div className="item">
          <img src={img5} alt="" />
          <img src={img6} alt="" />
        </div>
        <div className="item">
          <img src={img7} alt="" />
          <img src={img8} alt="" />
        </div>
        <div className="item">
          <img src={img9} alt="" />
          <img src={img10} alt="" />
        </div>
        <div className="item">
          <img src={img11} alt="" />
          <img src={img12} alt="" />
        </div>
      </Slider>
    </StyledCarousel>
  );
}
