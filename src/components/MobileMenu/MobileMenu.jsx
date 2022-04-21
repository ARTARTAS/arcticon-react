import React from "react";
import { NavLink } from "react-router-dom";

import styled from "styled-components";

const MobileMenuStyles = styled.div`
  position: absolute;
  z-index: 1000;
  width: 100%;
  height: 100%;

  .device {
    /* Main menu positionning */
    .main-nav {
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
      text-align: center;
      background: #fff;
      z-index: 1000;
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
      cursor: pointer;
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
  }
`;

export default function MobileMenu({ setMenu, visibleScroll }) {
  return (
    <MobileMenuStyles>
      <div className="device">
        <nav className="main-nav" id="main-nav">
          <ul>
            <li className="exit">
              <div
                href="#"
                className="close-button"
                id="close-button"
                onClick={() => {
                  setMenu(false);
                }}
              >
                <div className="in">
                  <div className="close-button-block"></div>
                  <div className="close-button-block"></div>
                </div>
                <div className="out">
                  <div className="close-button-block"></div>
                  <div className="close-button-block"></div>
                </div>
              </div>
            </li>
            <li>
              <NavLink
                to={"/about"}
                onClick={() => {
                  setMenu(false);
                  visibleScroll();
                }}
              >
                О нас
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"#"}
                onClick={() => {
                  setMenu(false);
                  visibleScroll();
                }}
              >
                Продукция
              </NavLink>
            </li>
            <li className="active">
              <NavLink
                to={"/services"}
                onClick={() => {
                  setMenu(false);
                  visibleScroll();
                }}
              >
                Услуги и сервис
              </NavLink>
            </li>
            <li className="active">
              <NavLink
                to={"/customers"}
                onClick={() => {
                  setMenu(false);
                  visibleScroll();
                }}
              >
                Заказчики
              </NavLink>
            </li>
            <li className="active">
              <NavLink
                to={"/partners"}
                onClick={() => {
                  setMenu(false);
                  visibleScroll();
                }}
              >
                Партнеры
              </NavLink>
            </li>
            <li className="active">
              <NavLink
                to={"/contacts"}
                onClick={() => {
                  setMenu(false);
                  visibleScroll();
                }}
              >
                Контакты
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </MobileMenuStyles>
  );
}
