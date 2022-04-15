import React from "react";
import Slider from "react-slick";
import img1 from "./../../assets/img/Customers/01.jpg";
import img2 from "./../../assets/img/Customers/02.jpg";
import img3 from "./../../assets/img/Customers/03.jpg";
import img4 from "./../../assets/img/Customers/01.jpg";
import img5 from "./../../assets/img/Customers/02.jpg";
import img6 from "./../../assets/img/Customers/03.jpg";
import img7 from "./../../assets/img/Customers/01.jpg";
import img8 from "./../../assets/img/Customers/02.jpg";
import img9 from "./../../assets/img/Customers/03.jpg";
import img10 from "./../../assets/img/Customers/01.jpg";
import img11 from "./../../assets/img/Customers/02.jpg";
import img12 from "./../../assets/img/Customers/03.jpg";
import img13 from "./../../assets/svg/home/details_black.svg";
import styled from "styled-components";

const StyledCustomersCarousel = styled.div`
  width: 100%;
  .slick-slider {
    padding-top: 0;
  }
  .item {
    width: 75px;
    height: 75px;
    img {
      width: 100px;
      height: auto;
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

export default function CustomersCarousel() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    rows: 4,
    slidesPerRow: 1,
    nextArrow: <SampleNextArrow />,
  };
  return (
    <StyledCustomersCarousel>
      <Slider {...settings}>
        <div className="item">
          <img className="img" src={img1} alt="" />
        </div>
        <div className="item">
          <img className="img" src={img2} alt="" />
        </div>
        <div className="item">
          <img className="img" src={img3} alt="" />
        </div>
        <div className="item">
          <img className="img" src={img4} alt="" />
        </div>
        <div className="item">
          <img className="img" src={img5} alt="" />
        </div>
        <div className="item">
          <img className="img" src={img6} alt="" />
        </div>
        <div className="item">
          <img className="img" src={img7} alt="" />
        </div>
        <div className="item">
          <img className="img" src={img8} alt="" />
        </div>
        <div className="item">
          <img className="img" src={img9} alt="" />
        </div>
        <div className="item">
          <img className="img" src={img10} alt="" />
        </div>
        <div className="item">
          <img className="img" src={img11} alt="" />
        </div>
        <div className="item">
          <img className="img" src={img12} alt="" />
        </div>
        <div className="item">
          <img className="img" src={img1} alt="" />
        </div>
        <div className="item">
          <img className="img" src={img2} alt="" />
        </div>
        <div className="item">
          <img className="img" src={img3} alt="" />
        </div>
        <div className="item">
          <img className="img" src={img4} alt="" />
        </div>
        <div className="item">
          <img className="img" src={img5} alt="" />
        </div>
        <div className="item">
          <img className="img" src={img6} alt="" />
        </div>
        <div className="item">
          <img className="img" src={img7} alt="" />
        </div>
        <div className="item">
          <img className="img" src={img8} alt="" />
        </div>
        <div className="item">
          <img className="img" src={img9} alt="" />
        </div>
        <div className="item">
          <img className="img" src={img10} alt="" />
        </div>
        <div className="item">
          <img className="img" src={img11} alt="" />
        </div>
        <div className="item">
          <img className="img" src={img12} alt="" />
        </div>
      </Slider>
    </StyledCustomersCarousel>
  );
}
