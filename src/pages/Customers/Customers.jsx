import React from "react";
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
import img15 from "./../../assets/svg/back-call.svg";
import img14 from "./../../assets/img/Customers/background.png";

export default function Customers() {
  return (
    <>
      <div className="back-call">
        <div className="block">
          <button className="exit"></button>
          <form action="">
            <div className="title">
              <h2>Телефон для связи</h2>
              <h2 className="phone">+7 (495) 409-32-14</h2>
              <div className="line"></div>
            </div>
            <div className="info">
              <p>Оставьте свой номер телефона и мы Вам перезвоним.</p>
            </div>
            <input
              type="tel"
              name="number"
              id="number"
              placeholder="Введите номер..."
            />
            <button>
              Перезвонить
              <img classNameName="icon" src={img15} alt="" />
            </button>
          </form>
        </div>
      </div>

      <section>
        <div className="right_line"></div>
        <div className="section__block">
          <div className="container">
            <div className="block">
              <h1>Заказчики</h1>
              <div className="block__info">
                <div className="info">
                  <h2>Компании, которые доверили нам выполнить работы.</h2>
                  <div className="line__box">
                    <div className="line"></div>
                  </div>
                  <a href="#">
                    Реализованные проекты
                    <img classNameName="icon" src={img13} alt="" />
                  </a>
                </div>
                <div className="cards">
                  <div className="owl-carousel owl-theme">
                    <div className="cards__block">
                      <div className="cards__block_img">
                        <img src={img1} alt="" />
                      </div>
                      <div className="cards__block_img">
                        <img src={img2} alt="" />
                      </div>
                      <div className="cards__block_img">
                        <img src={img3} alt="" />
                      </div>
                      <div className="cards__block_img">
                        <img src={img4} alt="" />
                      </div>
                      <div className="cards__block_img">
                        <img src={img5} alt="" />
                      </div>
                      <div className="cards__block_img">
                        <img src={img6} alt="" />
                      </div>
                      <div className="cards__block_img">
                        <img src={img7} alt="" />
                      </div>
                      <div className="cards__block_img">
                        <img src={img8} alt="" />
                      </div>
                      <div className="cards__block_img">
                        <img src={img9} alt="" />
                      </div>
                      <div className="cards__block_img">
                        <img src={img10} alt="" />
                      </div>
                      <div className="cards__block_img">
                        <img src={img11} alt="" />
                      </div>
                      <div className="cards__block_img">
                        <img src={img12} alt="" />
                      </div>
                    </div>
                    <div className="cards__block">
                      <div className="cards__block_img">
                        <img src={img1} alt="" />
                      </div>
                      <div className="cards__block_img">
                        <img src={img2} alt="" />
                      </div>
                      <div className="cards__block_img">
                        <img src={img3} alt="" />
                      </div>
                      <div className="cards__block_img">
                        <img src={img4} alt="" />
                      </div>
                      <div className="cards__block_img">
                        <img src={img5} alt="" />
                      </div>
                      <div className="cards__block_img">
                        <img src={img6} alt="" />
                      </div>
                      <div className="cards__block_img">
                        <img src={img7} alt="" />
                      </div>
                      <div className="cards__block_img">
                        <img src={img8} alt="" />
                      </div>
                      <div className="cards__block_img">
                        <img src={img9} alt="" />
                      </div>
                      <div className="cards__block_img">
                        <img src={img10} alt="" />
                      </div>
                      <div className="cards__block_img">
                        <img src={img11} alt="" />
                      </div>
                      <div className="cards__block_img">
                        <img src={img12} alt="" />
                      </div>
                    </div>
                  </div>
                  <div className="button">
                    <a href="#" className="next-button">
                      Далее
                      <img classNameName="icon" src={img13} alt="" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="background_image">
          <img src={img14} alt="" />
        </div>
      </section>
    </>
  );
}
