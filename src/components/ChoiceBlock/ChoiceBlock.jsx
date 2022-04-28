import React from "react";
import arrowBlack from "./../../assets/svg/home/arrow_black.svg";
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
