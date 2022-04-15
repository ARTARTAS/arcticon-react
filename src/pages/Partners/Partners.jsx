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

export default function Partners() {
  return (
    <>
      <div class="back-call">
        <div class="block">
          <button class="exit"></button>
          <form action="">
            <div class="title">
              <h2>Телефон для связи</h2>
              <h2 class="phone">+7 (495) 409-32-14</h2>
              <div class="line"></div>
            </div>
            <div class="info">
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
              <img className="icon" src={img15} alt="" />
            </button>
          </form>
        </div>
      </div>

      <section>
        <div class="right_line"></div>
        <div class="section__block">
          <div class="container">
            <div class="block">
              <h1>Партнёры</h1>
              <div class="block__info">
                <div class="info">
                  <h2>
                    Наши партнёры, поставщики - это лидеры рынка в своих
                    направлениях.
                  </h2>
                  <div class="line__box">
                    <div class="line"></div>
                  </div>
                  <a href="#">
                    Реализованные проекты
                    <img className="icon" src={img13} alt="" />
                  </a>
                </div>
                <div class="cards">
                  <div class="owl-carousel owl-theme">
                    <div class="cards__block">
                      <div class="cards__block_img">
                        <img src={img1} alt="" />
                      </div>
                      <div class="cards__block_img">
                        <img src={img2} alt="" />
                      </div>
                      <div class="cards__block_img">
                        <img src={img3} alt="" />
                      </div>
                      <div class="cards__block_img">
                        <img src={img4} alt="" />
                      </div>
                      <div class="cards__block_img">
                        <img src={img5} alt="" />
                      </div>
                      <div class="cards__block_img">
                        <img src={img6} alt="" />
                      </div>
                      <div class="cards__block_img">
                        <img src={img7} alt="" />
                      </div>
                      <div class="cards__block_img">
                        <img src={img8} alt="" />
                      </div>
                      <div class="cards__block_img">
                        <img src={img9} alt="" />
                      </div>
                      <div class="cards__block_img">
                        <img src={img10} alt="" />
                      </div>
                      <div class="cards__block_img">
                        <img src={img11} alt="" />
                      </div>
                      <div class="cards__block_img">
                        <img src={img12} alt="" />
                      </div>
                    </div>
                    <div class="cards__block">
                      <div class="cards__block_img">
                        <img src={img1} alt="" />
                      </div>
                      <div class="cards__block_img">
                        <img src={img2} alt="" />
                      </div>
                      <div class="cards__block_img">
                        <img src={img3} alt="" />
                      </div>
                      <div class="cards__block_img">
                        <img src={img4} alt="" />
                      </div>
                      <div class="cards__block_img">
                        <img src={img5} alt="" />
                      </div>
                      <div class="cards__block_img">
                        <img src={img6} alt="" />
                      </div>
                      <div class="cards__block_img">
                        <img src={img7} alt="" />
                      </div>
                      <div class="cards__block_img">
                        <img src={img8} alt="" />
                      </div>
                      <div class="cards__block_img">
                        <img src={img9} alt="" />
                      </div>
                      <div class="cards__block_img">
                        <img src={img10} alt="" />
                      </div>
                      <div class="cards__block_img">
                        <img src={img11} alt="" />
                      </div>
                      <div class="cards__block_img">
                        <img src={img12} alt="" />
                      </div>
                    </div>
                  </div>
                  <div class="button">
                    <a href="#" class="next-button">
                      Далее
                      <img className="icon" src={img13} alt="" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="background_image">
          <img src={img14} alt="" />
        </div>
      </section>
    </>
  );
}
