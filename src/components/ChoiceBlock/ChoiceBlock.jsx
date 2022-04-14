import React from "react";
import arrowBlack from "./../../assets/svg/arrowBlack.svg";
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

export default function ChoiceBlock() {
  return (
    <section class="six">
      <button class="next-button">
        <img src={arrowBlack} alt="" />
      </button>
      <div class="container">
        <div class="six__block">
          <div class="six__block_title">
            <h1>нас выбирают</h1>
          </div>
          <div class="six__block_part">
            <div class="part">
              <div class="part__title">
                <h1>Заказчики</h1>
                <div class="line"></div>
              </div>
              <div class="block">
                <div class="owl-carousel owl-theme">
                  <div class="owl__item">
                    <img src={img1} alt="" />
                    <img src={img2} alt="" />
                  </div>
                  <div class="owl__item">
                    <img src={img3} alt="" />
                    <img src={img4} alt="" />
                  </div>
                  <div class="owl__item">
                    <img src={img5} alt="" />
                    <img src={img6} alt="" />
                  </div>
                  <div class="owl__item">
                    <img src={img7} alt="" />
                    <img src={img8} alt="" />
                  </div>
                  <div class="owl__item">
                    <img src={img9} alt="" />
                    <img src={img10} alt="" />
                  </div>
                  <div class="owl__item">
                    <img src={img11} alt="" />
                    <img src={img12} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="six__block_part">
            <div class="part">
              <div class="part__title">
                <h1>Партнеры</h1>
                <div class="line"></div>
              </div>
              <div class="block">
                <div class="owl-carousel owl-theme">
                  <div class="owl__item">
                    <img src={img1} alt="" />
                    <img src={img2} alt="" />
                  </div>
                  <div class="owl__item">
                    <img src={img3} alt="" />
                    <img src={img4} alt="" />
                  </div>
                  <div class="owl__item">
                    <img src={img5} alt="" />
                    <img src={img6} alt="" />
                  </div>
                  <div class="owl__item">
                    <img src={img7} alt="" />
                    <img src={img8} alt="" />
                  </div>
                  <div class="owl__item">
                    <img src={img9} alt="" />
                    <img src={img10} alt="" />
                  </div>
                  <div class="owl__item">
                    <img src={img11} alt="" />
                    <img src={img12} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
