import React from "react";
import img1 from "./../../assets/img/logo.png";
import img2 from "./../../assets/img/MainPage/Footer/Ellipse.png";

import styled from "styled-components";

const FooterStyles = styled.div`
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
  footer {
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    width: 100%;
    color: #ffffff;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    background: black;
  }

  footer .top {
    width: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    padding: 25px 0px;
  }

  footer .top .block {
    width: 100%;
    display: -ms-grid;
    display: grid;
    -ms-grid-columns: 1fr 4fr;
    grid-template-columns: 1fr 4fr;
  }

  @media (max-width: 1199.98px) {
    footer .top .block {
      -ms-grid-columns: 1fr 5fr;
      grid-template-columns: 1fr 5fr;
    }
  }

  @media (max-width: 767.98px) {
    footer .top .block {
      -ms-grid-columns: none;
      grid-template-columns: none;
      grid-template-rows: repeat(5, 1fr);
      margin-bottom: 30px;
    }
  }

  footer .top .block .logo {
    -ms-grid-column: 1;
    -ms-grid-column-span: 1;
    grid-column: 1/2;
  }

  @media (max-width: 767.98px) {
    footer .top .block .logo {
      -ms-grid-row: 1;
      -ms-grid-row-span: 1;
      grid-row: 1/2;
      margin-bottom: 30px;
    }
  }

  footer .top .block .logo img {
    width: 100px;
  }

  @media (max-width: 1199.98px) {
    footer .top .block .logo img {
      width: 90px;
    }
  }

  @media (max-width: 991.98px) {
    footer .top .block .logo img {
      width: 80px;
    }
  }

  @media (max-width: 767.98px) {
    footer .top .block .logo img {
      width: 70px;
    }
  }

  footer .top .block .menu {
    font-family: "Inter", sans-serif;
    -ms-grid-column: 2;
    -ms-grid-column-span: 4;
    grid-column: 2/6;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
  }

  @media (max-width: 1199.98px) {
    footer .top .block .menu {
      -ms-grid-column: 2;
      -ms-grid-column-span: 5;
      grid-column: 2/7;
    }
  }

  @media (max-width: 767.98px) {
    footer .top .block .menu {
      -ms-grid-column: 1;
      -ms-grid-column-span: 1;
      grid-column: 1/2;
      -ms-grid-row: 2;
      -ms-grid-row-span: 4;
      grid-row: 2/6;
      display: -ms-grid;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 30px 20px;
    }
  }

  @media (max-width: 767.98px) {
    footer .top .block .menu div:nth-child(1) {
      -ms-grid-column: 1;
      -ms-grid-column-span: 1;
      grid-column: 1/2;
      -ms-grid-row: 1;
      -ms-grid-row-span: 1;
      grid-row: 1/2;
    }
  }

  @media (max-width: 767.98px) {
    footer .top .block .menu div:nth-child(2) {
      -ms-grid-column: 2;
      grid-column: 2/2;
      -ms-grid-row: 1;
      -ms-grid-row-span: 1;
      grid-row: 1/2;
    }
  }

  @media (max-width: 767.98px) {
    footer .top .block .menu div:nth-child(3) {
      -ms-grid-column: 1;
      -ms-grid-column-span: 1;
      grid-column: 1/2;
      -ms-grid-row: 2;
      grid-row: 2/2;
    }
  }

  @media (max-width: 767.98px) {
    footer .top .block .menu div:nth-child(4) {
      -ms-grid-column: 2;
      grid-column: 2/2;
      -ms-grid-row: 2;
      grid-row: 2/2;
    }
  }

  footer .top .block .menu div:hover h2 {
    color: #ffee49;
  }

  footer .top .block .menu div h2 {
    font-weight: 700;
    font-size: 15px;
    margin-bottom: 15px;
    -webkit-transition: all 0.2s ease-in-out;
    transition: all 0.2s ease-in-out;
  }

  @media (max-width: 1199.98px) {
    footer .top .block .menu div h2 {
      font-size: 14px;
    }
  }

  @media (max-width: 991.98px) {
    footer .top .block .menu div h2 {
      font-size: 13px;
    }
  }

  @media (max-width: 767.98px) {
    footer .top .block .menu div h2 {
      font-size: 12px;
    }
  }

  @media (max-width: 479.98px) {
    footer .top .block .menu div h2 {
      font-size: 11px;
    }
  }

  footer .top .block .menu div ul li {
    line-height: 200%;
  }

  @media (max-width: 991.98px) {
    footer .top .block .menu div ul li {
      line-height: 160%;
    }
  }

  footer .top .block .menu div ul li a {
    color: white;
    font-weight: 400;
    font-size: 12px;
    -webkit-transition: all 0.2s ease-in-out;
    transition: all 0.2s ease-in-out;
  }

  footer .top .block .menu div ul li a:hover {
    text-decoration: underline;
  }

  @media (max-width: 1199.98px) {
    footer .top .block .menu div ul li a {
      font-size: 10px;
    }
  }

  @media (max-width: 991.98px) {
    footer .top .block .menu div ul li a {
      font-size: 9px;
    }
  }

  @media (max-width: 767.98px) {
    footer .top .block .menu div ul li a {
      font-size: 8px;
    }
  }

  @media (max-width: 479.98px) {
    footer .top .block .menu div ul li a {
      font-size: 7px;
    }
  }

  footer .top .follow__mobile {
    display: none;
  }

  @media (max-width: 767.98px) {
    footer .top .follow__mobile {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-pack: end;
      -ms-flex-pack: end;
      justify-content: flex-end;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      width: -webkit-fit-content;
      width: -moz-fit-content;
      width: fit-content;
      margin-left: auto;
      margin-right: 50px;
      font-family: "Montserrat", sans-serif;
    }
  }

  footer .top .follow__mobile h4 {
    font-weight: 400;
    font-size: 15px;
  }

  @media (max-width: 1199.98px) {
    footer .top .follow__mobile h4 {
      font-size: 14px;
    }
  }

  @media (max-width: 991.98px) {
    footer .top .follow__mobile h4 {
      font-size: 13px;
    }
  }

  @media (max-width: 767.98px) {
    footer .top .follow__mobile h4 {
      font-size: 12px;
    }
  }

  @media (max-width: 479.98px) {
    footer .top .follow__mobile h4 {
      font-size: 11px;
    }
  }

  footer .top .follow__mobile a {
    margin-left: 10px;
  }

  footer .top .follow__mobile a img {
    height: 25px;
    width: 25px;
  }

  footer .line {
    width: 100%;
    height: 1px;
    background-color: #ffee49;
  }

  footer .bottom {
    width: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    font-family: "Montserrat", sans-serif;
  }

  footer .bottom .block {
    width: 100%;
    padding: 25px 0px;
    display: -ms-grid;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 767.98px) {
    footer .bottom .block {
      -ms-grid-columns: 1fr;
      grid-template-columns: 1fr;
    }
  }

  footer .bottom .block .info p {
    font-weight: 400;
    font-size: 12px;
    line-height: 200%;
  }

  @media (max-width: 1199.98px) {
    footer .bottom .block .info p {
      font-size: 11px;
      line-height: 190%;
    }
  }

  @media (max-width: 991.98px) {
    footer .bottom .block .info p {
      font-size: 10px;
      line-height: 180%;
    }
  }

  @media (max-width: 767.98px) {
    footer .bottom .block .info p {
      font-size: 9px;
      line-height: 170%;
    }
  }

  @media (max-width: 479.98px) {
    footer .bottom .block .info p {
      font-size: 8px;
      line-height: 160%;
    }
  }

  footer .bottom .block .follow {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: end;
    -ms-flex-pack: end;
    justify-content: flex-end;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  }

  @media (max-width: 767.98px) {
    footer .bottom .block .follow {
      display: none;
    }
  }

  footer .bottom .block .follow h4 {
    font-weight: 400;
    font-size: 15px;
  }

  @media (max-width: 1199.98px) {
    footer .bottom .block .follow h4 {
      font-size: 14px;
    }
  }

  @media (max-width: 991.98px) {
    footer .bottom .block .follow h4 {
      font-size: 13px;
    }
  }

  @media (max-width: 767.98px) {
    footer .bottom .block .follow h4 {
      font-size: 12px;
    }
  }

  @media (max-width: 479.98px) {
    footer .bottom .block .follow h4 {
      font-size: 11px;
    }
  }

  footer .bottom .block .follow a {
    margin-left: 10px;
  }
  /*# sourceMappingURL=footer.css.map */
`;

export default function Footer() {
  return (
    <FooterStyles>
      <footer>
        <div className="top">
          <div className="container">
            <div className="block">
              <div className="logo">
                <img src={img1} alt="" />
              </div>
              <div className="menu">
                <div className="company">
                  <h2>Компания</h2>
                  <ul>
                    <li>
                      <a href="">О нас</a>
                    </li>
                    <li>
                      <a href="">Ключевые проэкты</a>
                    </li>
                    <li>
                      <a href="">Партнеры</a>
                    </li>
                    <li>
                      <a href="">Заказчики</a>
                    </li>
                    <li>
                      <a href="">Сертификаты</a>
                    </li>
                    <li>
                      <a href="">Вакансии</a>
                    </li>
                  </ul>
                </div>
                <div className="solutions">
                  <h2>Решения</h2>
                  <ul>
                    <li>
                      <a href="">Всё оборудование</a>
                    </li>
                    <li>
                      <a href="">Реальная защита. Автоматизация и управление</a>
                    </li>
                    <li>
                      <a href="">Преобразовательное оборудование</a>
                    </li>
                    <li>
                      <a href="">Распределительное оборудование</a>
                    </li>
                    <li>
                      <a href="">Судовое электрооборудование</a>
                    </li>
                    <li>
                      <a href="">Автоматизация технологических процессов</a>
                    </li>
                    <li>
                      <a href="">
                        Электрооборудование в специальном исполнении
                      </a>
                    </li>
                    <li>
                      <a href="">Никзовольтная аппаратура</a>
                    </li>
                    <li>
                      <a href="">Комплексные решения</a>
                    </li>
                    <li>
                      <a href="">Навигационные и связные системы</a>
                    </li>
                  </ul>
                </div>
                <div className="services">
                  <h2>Услуги</h2>
                  <ul>
                    <li>
                      <a href="">ЕРСМ</a>
                    </li>
                    <li>
                      <a href="">Проектирование</a>
                    </li>
                    <li>
                      <a href="">Комплексные поставки</a>
                    </li>
                    <li>
                      <a href="">Строительно-монтажные работы</a>
                    </li>
                    <li>
                      <a href="">Шеф-монтаж и ПНР</a>
                    </li>
                    <li>
                      <a href="">Гарантийное обслуживание</a>
                    </li>
                    <li>
                      <a href="">Сервис</a>
                    </li>
                    <li>
                      <a href="">Автоматизация объектов</a>
                    </li>
                  </ul>
                </div>
                <div className="contacts">
                  <h2>Контакты</h2>
                  <ul>
                    <li>
                      <a href="">Пресс-центр</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="follow__mobile">
              <h4>Follow us: </h4>
              <a href="">
                {" "}
                <img src={img2} alt="" />
              </a>
              <a href="">
                {" "}
                <img src={img2} alt="" />
              </a>
              <a href="">
                {" "}
                <img src={img2} alt="" />
              </a>
              <a href="">
                {" "}
                <img src={img2} alt="" />
              </a>
            </div>
          </div>
        </div>
        <div className="line"></div>
        <div className="bottom">
          <div className="container">
            <div className="block">
              <div className="info">
                <p>
                  © 2010—2021 «Арктик Энергострой». Все права защищены.
                  <br />
                  Копирование материлов возможно с письменного разрешения
                  владельцев сайта.
                </p>
              </div>
              <div className="follow">
                <h4>Follow us: </h4>
                <a href="">
                  {" "}
                  <img src={img2} alt="" />
                </a>
                <a href="">
                  {" "}
                  <img src={img2} alt="" />
                </a>
                <a href="">
                  {" "}
                  <img src={img2} alt="" />
                </a>
                <a href="">
                  {" "}
                  <img src={img2} alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </FooterStyles>
  );
}
