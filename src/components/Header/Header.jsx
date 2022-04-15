import React from "react";
import img1 from "./../../assets/img/logo.png";
import img2 from "./../../assets/svg/home/location.svg";
import img3 from "./../../assets/svg/home/mail.svg";
import img4 from "./../../assets/svg/home/facebook.svg";
import img5 from "./../../assets/svg/home/loup.svg";
import img6 from "./../../assets/svg/home/menu.svg";

export default function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__menu">
          <menu className="menu__main">
            <a className="logo" href="/">
              <img src={img1} alt="" />
            </a>
            <div className="menu">
              <div className="contacts">
                <div className="phone">
                  <a href="tel:+74954093214">+7 (495) 409-32-14</a>
                </div>
                <div className="mail">
                  <a href="mailto:info@arcticcon.ru">info@arcticcon.ru</a>
                </div>
                <div className="icons">
                  <a href="">
                    <img src={img2} alt="" />
                  </a>
                  <a href="">
                    <img src={img3} alt="" />
                  </a>
                  <a href="">
                    <img src={img4} alt="" />
                  </a>
                </div>
              </div>
              <nav>
                <ul>
                  <li className="active">
                    <a href="/about">О нас</a>
                  </li>
                  <li>
                    <a href="#">Продукция</a>
                  </li>
                  <li className="active">
                    <a id="button" href="/services">
                      Услуги и сервис
                    </a>
                  </li>
                  <li className="active">
                    <a href="/customers">Заказчики</a>
                  </li>
                  <li className="active">
                    <a href="/partners">Партнеры</a>
                  </li>
                  <li className="active">
                    <a href="/contacts">Контакты</a>
                  </li>
                </ul>
              </nav>
            </div>
          </menu>
          <menu className="menu__sub">
            <a href="#">
              <img src={img5} alt="" />
              <svg className="search">
                <use xlinkHref="./svg/home.svg#loup"></use>
              </svg>
            </a>
            <div className="line"></div>
            <a href="#" id="burger" className="open-main-nav">
              <img src={img6} alt="" />
              <svg className="dots">
                <use xlinkHref="./svg/home.svg#menu"></use>
              </svg>
            </a>
          </menu>
        </div>
      </div>
    </header>
  );
}
