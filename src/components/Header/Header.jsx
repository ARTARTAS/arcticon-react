import React from "react";
import img1 from "./../../assets/img/logo.png";
import img2 from "./../../assets/svg/home/location.svg";
import img3 from "./../../assets/svg/home/mail.svg";
import img4 from "./../../assets/svg/home/facebook.svg";
import img5 from "./../../assets/svg/home/loup.svg";
import img6 from "./../../assets/svg/home/menu.svg";

import styled from "styled-components";

const HeaderStyles = styled.div`
  .container {
    position: relative;
    margin: 0px 50px;
    max-width: 1200px;
    height: 100%;
    width: 100%;

    @media (max-width: $md3 + px) {
      margin: 0px 30px;
    }
    @media (max-width: $md4 + px) {
      margin: 0px 20px;
    }
  }

  /* Main menu positionning */
  .main-nav {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    text-align: center;
    background: #fff;
    opacity: 0;
    z-index: -1;
    visibility: hidden;
    -webkit-transition: all 0.375s;
    transition: all 0.375s;
    visibility: visible;
    height: 100vh;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: right;
    -ms-flex-pack: right;
    justify-content: right;
    -webkit-box-align: end;
    -ms-flex-align: end;
    align-items: flex-end;
  }

  .main-nav .exit {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    height: 50px;
    width: 50px;
    margin-bottom: 50px;
  }

  .main-nav .exit .close-button {
    display: block;
    width: 40px;
    height: 40px;
    position: relative;
    overflow: hidden;
  }

  .main-nav .exit .close-button > div {
    position: relative;
  }

  .main-nav .exit .close-button-block {
    width: 40px;
    height: 20px;
    position: relative;
    overflow: hidden;
  }

  .main-nav .exit .close-button-block:before,
  .main-nav .exit .close-button-block:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: calc(55% - 4px);
    display: block;
    width: 4px;
    height: 25px;
    -webkit-transform-origin: bottom center;
    transform-origin: bottom center;
    background: white;
    -webkit-transition: all ease-out 280ms;
    transition: all ease-out 280ms;
  }

  .main-nav .exit .close-button-block:last-of-type {
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg);
  }

  .main-nav .exit .close-button .in {
    position: absolute;
    top: 0;
    left: 0;
  }

  .main-nav .exit .close-button .in .close-button-block:before {
    -webkit-transition-delay: 280ms;
    transition-delay: 280ms;
    -webkit-transform: translateX(20px) translateY(-20px) rotate(45deg);
    transform: translateX(20px) translateY(-20px) rotate(45deg);
  }

  .main-nav .exit .close-button .in .close-button-block:after {
    -webkit-transition-delay: 280ms;
    transition-delay: 280ms;
    -webkit-transform: translateX(-22px) translateY(-22px) rotate(-45deg);
    transform: translateX(-22px) translateY(-22px) rotate(-45deg);
  }

  .main-nav .exit .close-button .out {
    position: absolute;
    top: 0;
    left: 0;
  }

  .main-nav .exit .close-button .out .close-button-block:before {
    -webkit-transform: translateX(-5px) translateY(5px) rotate(45deg);
    transform: translateX(-5px) translateY(5px) rotate(45deg);
  }

  .main-nav .exit .close-button .out .close-button-block:after {
    -webkit-transform: translateX(5px) translateY(5px) rotate(-45deg);
    transform: translateX(5px) translateY(5px) rotate(-45deg);
  }

  .main-nav .exit .close-button:hover .in .close-button-block:before {
    -webkit-transform: translateX(-5px) translateY(5px) rotate(45deg);
    transform: translateX(-5px) translateY(5px) rotate(45deg);
  }

  .main-nav .exit .close-button:hover .in .close-button-block:after {
    -webkit-transform: translateX(5px) translateY(5px) rotate(-45deg);
    transform: translateX(5px) translateY(5px) rotate(-45deg);
  }

  .main-nav .exit .close-button:hover .out .close-button-block:before {
    -webkit-transform: translateX(-20px) translateY(20px) rotate(45deg);
    transform: translateX(-20px) translateY(20px) rotate(45deg);
  }

  .main-nav .exit .close-button:hover .out .close-button-block:after {
    -webkit-transform: translateX(20px) translateY(20px) rotate(-45deg);
    transform: translateX(20px) translateY(20px) rotate(-45deg);
  }

  .main-nav ul {
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    height: 100%;
    -webkit-box-align: end;
    -ms-flex-align: end;
    align-items: flex-end;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-transform: translateX(-18%) skew(-16deg);
    transform: translateX(-18%) skew(-16deg);
    padding: 100px 40px 100px 120px;
    background: #fedc2a;
    -webkit-transform-origin: 0 0;
    transform-origin: 0 0;
    -webkit-transition: all 0.275s 0.1s;
    transition: all 0.275s 0.1s;
  }

  .main-nav li {
    display: block;
    margin: 0.5rem 0;
    text-align: right;
    -webkit-transform: skew(16deg);
    transform: skew(16deg);
  }

  /* Apparition effect on links */
  .main-nav a {
    opacity: 0;
    -webkit-transform: translateY(-10px);
    transform: translateY(-10px);
  }

  .main-nav a {
    opacity: 1;
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }

  .main-nav li:nth-child(1) a {
    -webkit-transition: all 275ms 175ms;
    transition: all 275ms 175ms;
  }

  .main-nav li:nth-child(2) a {
    -webkit-transition: all 275ms 225ms;
    transition: all 275ms 225ms;
  }

  .main-nav li:nth-child(3) a {
    -webkit-transition: all 275ms 275ms;
    transition: all 275ms 275ms;
  }

  .main-nav li:nth-child(4) a {
    -webkit-transition: all 275ms 325ms;
    transition: all 275ms 325ms;
  }

  .main-nav li:nth-child(5) a {
    -webkit-transition: all 275ms 375ms;
    transition: all 275ms 375ms;
  }

  /* Decoration */
  .main-nav a {
    display: block;
    padding: 12px 0;
    color: #5a3b5d;
    font-size: 1.4em;
    text-decoration: none;
    font-weight: bold;
  }

  .burger {
    position: relative;
    display: block;
    width: 28px;
    height: 4px;
    margin: 0 auto;
    background: #5a3b5d;
    -webkit-transform: skew(5deg);
    transform: skew(5deg);
    -webkit-transition: all 0.275s;
    transition: all 0.275s;
  }

  .burger:after,
  .burger:before {
    content: "";
    display: block;
    height: 100%;
    background: #5a3b5d;
    -webkit-transition: all 0.275s;
    transition: all 0.275s;
  }

  .burger:after {
    -webkit-transform: translateY(-12px) translateX(-2px) skew(-20deg);
    transform: translateY(-12px) translateX(-2px) skew(-20deg);
  }

  .burger:before {
    -webkit-transform: translateY(-16px) skew(-10deg);
    transform: translateY(-16px) skew(-10deg);
  }

  /* Toggle State part */
  .is-open .burger {
    -webkit-transform: skew(5deg) translateY(-8px) rotate(-45deg);
    transform: skew(5deg) translateY(-8px) rotate(-45deg);
  }

  .is-open .burger:before {
    -webkit-transform: translateY(0px) skew(-10deg) rotate(75deg);
    transform: translateY(0px) skew(-10deg) rotate(75deg);
  }

  .is-open .burger:after {
    -webkit-transform: translateY(-12px) translateX(10px) skew(-20deg);
    transform: translateY(-12px) translateX(10px) skew(-20deg);
    opacity: 0;
  }

  .body-block {
    overflow: hidden;
  }

  .wrapper {
    width: 100%;
    position: relative;
    overflow: hidden;
    background: #0c0c0c;
  }

  .header {
    width: 100%;
    height: 120px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    position: relative;
    z-index: 10;
  }

  @media (max-width: 1199.98px) {
    .header {
      height: 75px;
    }
  }

  @media (max-width: 991.98px) {
    .header {
      height: 70px;
    }
  }

  @media (max-width: 767.98px) {
    .header {
      height: 65px;
    }
  }

  @media (max-width: 479.98px) {
    .header {
      height: 60px;
    }
  }

  .header__container {
    height: 100%;
    width: 100%;
  }

  @media (max-width: 767.98px) {
    .header__container {
      margin: 0;
    }
  }

  .header__container {
    padding: 0px 50px;
    background: black;
  }

  @media (max-width: 767.98px) {
    .header__container {
      padding: 0px 20px;
    }
  }

  .hover {
    color: red;
  }

  .header__menu {
    width: 100%;
    height: 100%;
    max-width: 1200px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    margin: 0 auto;
  }

  @media (max-width: 991.98px) {
    .header__menu {
      background: none;
    }
  }

  .header__menu .menu__main {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    width: 100%;
    margin-right: 50px;
  }

  @media (max-width: 1199.98px) {
    .header__menu .menu__main {
      margin-right: 13%;
    }
  }

  .header__menu .menu__main .logo {
    margin-right: 40px;
    height: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  }

  .header__menu .menu__main .logo img {
    max-width: none;
  }

  @media (max-width: 1199.98px) {
    .header__menu .menu__main .logo img {
      padding: 10px 0px;
      height: 100%;
    }
  }

  .header__menu .menu__main .menu {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    padding: 10px 0px;
    font-family: "Montserrat", sans-serif;
    text-transform: uppercase;
  }

  @media (max-width: 1199.98px) {
    .header__menu .menu__main .menu {
      padding: 5px 0px;
    }
  }

  @media (max-width: 991.98px) {
    .header__menu .menu__main .menu {
      display: none;
    }
  }

  .header__menu .menu__main .menu .contacts {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    height: 100%;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    font-size: 0.9rem;
  }

  .header__menu .menu__main .menu .contacts a {
    color: white;
    font-size: 10px;
    font-weight: 400;
    letter-spacing: 0.05em;
  }

  .header__menu .menu__main .menu .contacts a:hover {
    color: #ffd600;
  }

  @media (max-width: 1199.98px) {
    .header__menu .menu__main .menu .contacts a {
      font-size: 8px;
    }
  }

  .header__menu .menu__main .menu .contacts .phone {
    padding-right: 20px;
    color: white;
  }

  .header__menu .menu__main .menu .contacts .mail {
    padding-right: 50px;
  }

  .header__menu .menu__main .menu .contacts .icons {
    width: 70px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  }

  .header__menu .menu__main .menu .contacts .icons a img {
    width: 20px;
    height: 20px;
    fill: #c4c4c4;
  }

  .header__menu .menu__main .menu nav {
    height: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  }

  .header__menu .menu__main .menu nav ul {
    width: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
  }

  .header__menu .menu__main .menu nav ul li a {
    cursor: auto;
    color: gray;
    font-size: 13px;
    font-weight: 400;
    letter-spacing: 0.05em;
  }

  @media (max-width: 1199.98px) {
    .header__menu .menu__main .menu nav ul li a {
      font-size: 10px;
    }
  }

  .header__menu .menu__main .menu nav ul .active a {
    cursor: pointer;
    color: white;
  }

  .header__menu .menu__main .menu nav ul .active a:hover {
    color: #ffd600;
  }

  .header__menu .menu__sub {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    margin-top: auto;
    padding-bottom: 10px;
  }

  @media (max-width: 1199.98px) {
    .header__menu .menu__sub {
      padding-bottom: 5px;
    }
  }

  @media (max-width: 991.98px) {
    .header__menu .menu__sub {
      height: 100%;
    }
  }

  .header__menu .menu__sub .icon a {
    height: 100%;
  }

  .header__menu .menu__sub .search {
    width: 19px;
    height: 19px;
    color: white;
    fill: white;
  }

  @media (max-width: 1199.98px) {
    .header__menu .menu__sub .search {
      height: 14px;
      width: 14px;
    }
  }

  .header__menu .menu__sub .dots {
    width: 23px;
    height: 43px;
    fill: white;
  }

  @media (max-width: 1199.98px) {
    .header__menu .menu__sub .dots {
      width: 13px;
      height: 23px;
    }
  }

  .header__menu .menu__sub .line {
    height: 50px;
    width: 1px;
    background: white;
    margin: 0px 20px;
  }

  @media (max-width: 1199.98px) {
    .header__menu .menu__sub .line {
      height: 35px;
      margin: 0px 18px;
    }
  }

  @media (max-width: 991.98px) {
    .header__menu .menu__sub .line {
      margin: 0px 16px;
    }
  }
  /*# sourceMappingURL=header.css.map */
`;

export default function Header() {
  return (
    <HeaderStyles>
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
                <img className="search" src={img5} alt="" />
              </a>
              <div className="line"></div>
              <a href="#" id="burger" className="open-main-nav">
                <img className="dots" src={img6} alt="" />
              </a>
            </menu>
          </div>
        </div>
      </header>
    </HeaderStyles>
  );
}
