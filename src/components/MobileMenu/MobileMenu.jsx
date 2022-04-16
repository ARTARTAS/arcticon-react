import React from "react";
import img1 from "./../../assets/img/logo.png";
import img2 from "./../../assets/svg/home/location.svg";
import img3 from "./../../assets/svg/home/mail.svg";
import img4 from "./../../assets/svg/home/facebook.svg";
import img5 from "./../../assets/svg/home/loup.svg";
import img6 from "./../../assets/svg/home/menu.svg";

import styled from "styled-components";

const MobileMenuStyles = styled.div`
  position: absolute;
  z-index: 1000;
  width: 100%;
  height: 100%;
`;

export default function MobileMenu({ setMenu }) {
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
                onClick={() => setMenu(false)}
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
              <a href="#">О нас</a>
            </li>
            <li>
              <a href="#">Продукция</a>
            </li>
            <li className="active">
              <a href="/services">Услуги и сервис</a>
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
    </MobileMenuStyles>
  );
}
