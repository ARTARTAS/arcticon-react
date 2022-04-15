import React from "react";

export default function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__menu">
          <menu className="menu__main">
            <a className="logo" href="/">
              <img src="./img/logo.png" alt="" />
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
                    <svg className="icon" style="width: 13px; height: 18px;">
                      <use xlinkHref="./svg/home.svg#location"></use>
                    </svg>
                  </a>
                  <a href="">
                    <svg className="icon" style="width: 13px; height: 11px;">
                      <use xlinkHref=".>/svg/home.svg#mail"></use>
                    </svg>
                  </a>
                  <a href="">
                    <svg className="icon" style="width: 14px; height: 14px;">
                      <use xlinkHref="./svg/home.svg#facebook"></use>
                    </svg>
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
              <svg className="search">
                <use xlinkHref="./svg/home.svg#loup"></use>
              </svg>
            </a>
            <div className="line"></div>
            <a href="#" id="burger" className="open-main-nav">
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
