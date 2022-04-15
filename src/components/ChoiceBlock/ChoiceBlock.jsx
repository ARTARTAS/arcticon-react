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

export default function ChoiceBlock() {
  return (
    <section className="six">
      <button className="next-button">
        <img class="icon" src={arrowBlack} alt="" />
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
                <div className="owl-carousel owl-theme">
                  <div className="owl__item">
                    <img src={img1} alt="" />
                    <img src={img2} alt="" />
                  </div>
                  <div className="owl__item">
                    <img src={img3} alt="" />
                    <img src={img4} alt="" />
                  </div>
                  <div className="owl__item">
                    <img src={img5} alt="" />
                    <img src={img6} alt="" />
                  </div>
                  <div className="owl__item">
                    <img src={img7} alt="" />
                    <img src={img8} alt="" />
                  </div>
                  <div className="owl__item">
                    <img src={img9} alt="" />
                    <img src={img10} alt="" />
                  </div>
                  <div className="owl__item">
                    <img src={img11} alt="" />
                    <img src={img12} alt="" />
                  </div>
                </div>
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
                <div className="owl-carousel owl-theme">
                  <div className="owl__item">
                    <img src={img1} alt="" />
                    <img src={img2} alt="" />
                  </div>
                  <div className="owl__item">
                    <img src={img3} alt="" />
                    <img src={img4} alt="" />
                  </div>
                  <div className="owl__item">
                    <img src={img5} alt="" />
                    <img src={img6} alt="" />
                  </div>
                  <div className="owl__item">
                    <img src={img7} alt="" />
                    <img src={img8} alt="" />
                  </div>
                  <div className="owl__item">
                    <img src={img9} alt="" />
                    <img src={img10} alt="" />
                  </div>
                  <div className="owl__item">
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
