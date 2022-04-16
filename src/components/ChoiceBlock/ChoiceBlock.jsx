import React from "react";
import arrowBlack from "./../../assets/svg/home/arrow_black.svg";
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
import ChoiceBlockCarousel from "../ChoiceBlockCarousel/ChoiceBlockCarousel";

export default function ChoiceBlock() {
  return (
    <section className="six">
      <button className="next-button">
        <img className="icon" src={arrowBlack} alt="" />
      </button>
      <div className="container">
        <div className="six__block">
          <div className="six__block_title">
            <h1>нас выбирают</h1>
          </div>
          <div className="six__block_part">
            <div className="part">
              <div className="part__title">
                <h1>Заказчики</h1>
                <div className="line"></div>
              </div>
              <div className="block">
                <ChoiceBlockCarousel />
              </div>
            </div>
          </div>
          <div className="six__block_part">
            <div className="part">
              <div className="part__title">
                <h1>Партнеры</h1>
                <div className="line"></div>
              </div>
              <div className="block">
                <ChoiceBlockCarousel />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
