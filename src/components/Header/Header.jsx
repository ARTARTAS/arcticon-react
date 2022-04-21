import React, { useState } from "react";
import img1 from "./../../assets/img/logo.png";
import img1_1 from "./../../assets/img/logo_black.png";
import locationIcon from "./../../assets/svg/home/location.svg";
import locationBlack from "./../../assets/svg/home/location_black.svg";
import mail from "./../../assets/svg/home/mail.svg";
import mailBlack from "./../../assets/svg/home/mail_black.svg";
import facebook from "./../../assets/svg/home/facebook.svg";
import facebook_black from "./../../assets/svg/home/facebook_black.svg";
import loup from "./../../assets/svg/home/loup.svg";
import loupBlack from "./../../assets/svg/home/loup_black.svg";
import dots from "./../../assets/svg/home/menu.svg";
import dotsBlack from "./../../assets/svg/home/menu_black.svg";

import styled from "styled-components";
import MobileMenu from "../MobileMenu/MobileMenu";
import { NavLink, useLocation } from "react-router-dom";

const HeaderStyles = styled.div`
  .container {
    position: relative;
    margin: 0px 50px;
    max-width: 1200px;
    height: 100%;
    width: 100%;

    @media (max-width: 767.98px) {
      margin: 0px 30px;
    }
    @media (max-width: 479.98px) {
      margin: 0px 20px;
    }
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

  .header__menu .menu__sub .open-main-nav {
    cursor: pointer;
  }

  .header__menu .menu__sub .icon a {
    height: 100%;
  }

  .header__menu .menu__sub .search {
    width: 19px;
    height: 19px;
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

  .white {
    background: white;
    .menu__sub .line {
      background: black;
    }
    .menu__main .menu .contacts a {
      color: black;
    }
    .menu__main .menu nav ul .active a {
      color: black;
    }
  }
`;

export default function Header() {
  const [menu, setMenu] = useState(false);

  const visibleScroll = () => {
    document.body.style.overflow = "visible";
  };

  const hiddenScroll = () => {
    document.body.style.overflow = "hidden";
  };

  let location = useLocation();

  return (
    <HeaderStyles>
      {menu ? (
        <MobileMenu setMenu={setMenu} visibleScroll={visibleScroll} />
      ) : (
        ""
      )}
      <header className="header">
        <div
          className={
            location.pathname === "/"
              ? "header__container"
              : "header__container white"
          }
        >
          <div className="header__menu">
            <menu className="menu__main">
              <NavLink className="logo" to={"/"}>
                {location.pathname === "/" ? (
                  <img src={img1} alt="" />
                ) : (
                  <img src={img1_1} alt="" />
                )}
              </NavLink>
              <div className="menu">
                <div className="contacts">
                  <div className="phone">
                    <a href="tel:+74954093214">+7 (495) 409-32-14</a>
                  </div>
                  <div className="mail">
                    <a href="mailto:info@arcticcon.ru">info@arcticcon.ru</a>
                  </div>
                  <div className="icons">
                    <NavLink to="/contacts">
                      {location.pathname === "/" ? (
                        <img src={locationIcon} alt="" />
                      ) : (
                        <img src={locationBlack} alt="" />
                      )}
                    </NavLink>
                    <a href="">
                      {location.pathname === "/" ? (
                        <img src={mail} alt="" />
                      ) : (
                        <img src={mailBlack} alt="" />
                      )}
                    </a>
                    <a href="">
                      {location.pathname === "/" ? (
                        <img src={facebook} alt="" />
                      ) : (
                        <img src={facebook_black} alt="" />
                      )}
                    </a>
                  </div>
                </div>
                <nav>
                  <ul>
                    <li className="active">
                      <NavLink to={"/about"}>О нас</NavLink>
                    </li>
                    <li>
                      <NavLink to={"/"}>Продукция</NavLink>
                    </li>
                    <li className="active">
                      <NavLink id="button" to={"/services"}>
                        Услуги и сервис
                      </NavLink>
                    </li>
                    <li className="active">
                      <NavLink to={"/customers"}>Заказчики</NavLink>
                    </li>
                    <li className="active">
                      <NavLink to={"/partners"}>Партнеры</NavLink>
                    </li>
                    <li className="active">
                      <NavLink to={"/contacts"}>Контакты</NavLink>
                    </li>
                  </ul>
                </nav>
              </div>
            </menu>
            <menu className="menu__sub">
              <a href="#">
                {location.pathname === "/" ? (
                  <img className="search" src={loup} alt="" />
                ) : (
                  <img className="search" src={loupBlack} alt="" />
                )}
              </a>
              <div className="line"></div>
              <div
                className="open-main-nav"
                onClick={() => {
                  setMenu(true);
                  hiddenScroll();
                }}
              >
                {location.pathname === "/" ? (
                  <img className="dots" src={dots} alt="" />
                ) : (
                  <img className="dots" src={dotsBlack} alt="" />
                )}
              </div>
            </menu>
          </div>
        </div>
      </header>
    </HeaderStyles>
  );
}
