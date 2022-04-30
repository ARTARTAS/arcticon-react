import React from "react";
import ChoiceBlockCarousel from "../ChoiceBlockCarousel/ChoiceBlockCarousel";

export default function ChoiceBlock() {
  return (
    <section className="six">
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
