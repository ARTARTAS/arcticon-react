import React from "react";
import img1 from "./../../assets/svg/home/details_black.svg";

import styled from "styled-components";

const ServicesStyles = styled.div`
  .container {
    position: relative;
    margin: 0px 50px;
    max-width: 1200px;
    height: 100%;
    width: 100%;
  }

  @media (max-width: 767.98px) {
    .container {
      margin: 0px 30px;
    }
  }

  @media (max-width: 479.98px) {
    .container {
      margin: 0px 20px;
    }
  }

  section {
    width: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    background: #e5e5e5;
    font-family: "Montserrat", sans-serif;
    padding: 0px 50px;
  }

  @media (max-width: 767.98px) {
    section {
      padding: 0px 20px;
    }
  }

  section .title {
    width: 100%;
    padding: 100px 0px 60px 0px;
  }

  @media (max-width: 1199.98px) {
    section .title {
      padding: 80px 0px 50px 0px;
    }
  }

  @media (max-width: 991.98px) {
    section .title {
      padding: 70px 0px 40px 0px;
    }
  }

  @media (max-width: 991.98px) {
    section .title {
      padding: 50px 0px 30px 0px;
    }
  }

  section .title h1 {
    font-weight: 700;
    font-size: 35px;
  }

  @media (max-width: 1199.98px) {
    section .title h1 {
      font-size: 30px;
    }
  }

  @media (max-width: 991.98px) {
    section .title h1 {
      font-size: 25px;
    }
  }

  section .pallet {
    width: 100%;
  }

  section .pallet__grid {
    width: 100%;
    display: -ms-grid;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 30px;
    grid-auto-rows: -webkit-min-content;
    grid-auto-rows: min-content;
  }

  @media (max-width: 991.98px) {
    section .pallet__grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 479.98px) {
    section .pallet__grid {
      -ms-grid-columns: 1fr;
      grid-template-columns: 1fr;
    }
  }

  section .pallet__grid_section {
    position: relative;
    background: #ffffff;
    padding: 30px;
    -webkit-transition: all 0.5s ease-in-out;
    transition: all 0.5s ease-in-out;
    min-height: 200px;
  }

  @media (max-width: 1199.98px) {
    section .pallet__grid_section {
      padding: 25px;
      min-height: 170px;
    }
  }

  @media (max-width: 991.98px) {
    section .pallet__grid_section {
      padding: 20px;
      min-height: 100px;
    }
  }

  section .pallet__grid_section:hover {
    background: #ffd600;
  }

  section .pallet__grid_section:hover .block {
    z-index: 2;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    min-height: 200px;
    height: fit-content;
    padding: 30px;
    background: #ffd600;
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }

  @media (max-width: 1199.98px) {
    section .pallet__grid_section:hover .block {
      padding: 25px;
      min-height: 100px;
    }
  }

  @media (max-width: 991.98px) {
    section .pallet__grid_section:hover .block {
      padding: 20px;
    }
  }

  section .pallet__grid_section:hover .block__title a {
    display: block;
  }

  section .pallet__grid_section:hover .block__title_line {
    display: block;
  }

  section .pallet__grid_section:hover .block__info {
    display: block;
  }

  section .pallet__grid_section .block__title {
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    width: -webkit-fit-content;
    width: -moz-fit-content;
    width: fit-content;
    max-width: 100%;
    -webkit-transition: all 0.2s ease-in-out;
    transition: all 0.2s ease-in-out;
  }

  section .pallet__grid_section .block__title h1 {
    font-weight: 700;
    font-size: 22px;
    padding: 0px 0px 30px 0px;
    line-height: 130%;
    width: fit-content;
  }

  @media (max-width: 1199.98px) {
    section .pallet__grid_section .block__title h1 {
      font-size: 16px;
    }
  }

  @media (max-width: 991.98px) {
    section .pallet__grid_section .block__title h1 {
      font-size: 10px;
    }
  }

  @media (max-width: 767.98px) {
    section .pallet__grid_section .block__title h1 {
      font-size: 12px;
    }
  }

  section .pallet__grid_section .block__title a {
    display: none;
    padding-left: 15px;
    -webkit-transition: all 0.2s ease-in-out;
    transition: all 0.2s ease-in-out;
  }

  section .pallet__grid_section .block__title a:hover {
    transform: scale(1.1);
  }

  section .pallet__grid_section .block__title a .icon {
    fill: none;
    width: 40px;
    height: 40px;
    margin: 0px 0px 30px 0px;
  }

  @media (max-width: 1199.98px) {
    section .pallet__grid_section .block__title a .icon {
      width: 46px;
      height: 49px;
    }
  }

  @media (max-width: 991.98px) {
    section .pallet__grid_section .block__title a .icon {
      width: 29px;
      height: 32px;
    }
  }

  @media (max-width: 767.98px) {
    section .pallet__grid_section .block__title a .icon {
      width: 27px;
      height: 40px;
    }
  }

  section .pallet__grid_section .block__title_line {
    display: none;
    position: absolute;
    width: 100%;
    height: 2px;
    background: black;
    bottom: 0px;
    -webkit-transition: all 0.5s ease-in-out;
    transition: all 0.5s ease-in-out;
    margin: 0px 0px 15px 0px;
  }

  section .pallet__grid_section .block__info {
    display: none;
    -webkit-transition: all 0.5s ease-in-out;
    transition: all 0.5s ease-in-out;
  }

  section .pallet__grid_section .block__info p {
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
  }

  @media (max-width: 1199.98px) {
    section .pallet__grid_section .block__info p {
      font-size: 12px;
    }
  }

  @media (max-width: 991.98px) {
    section .pallet__grid_section .block__info p {
      font-size: 8px;
    }
  }

  section .menu {
    width: 100%;
    padding: 100px 0px 80px 0px;
  }

  section .menu .nav {
    width: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    gap: 20px;
  }

  @media (max-width: 991.98px) {
    section .menu .nav {
      gap: 10px;
    }
  }

  @media (max-width: 767.98px) {
    section .menu .nav {
      display: -ms-grid;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 479.98px) {
    section .menu .nav {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      -ms-flex-direction: column;
      flex-direction: column;
    }
  }

  @media (max-width: 767.98px) {
    section .menu .nav__column {
      margin-bottom: 30px;
    }
  }

  @media (max-width: 479.98px) {
    section .menu .nav__column {
      margin-bottom: 10px;
    }
  }

  section .menu .nav__column:hover .nav__column_title a {
    color: #ffd600;
  }

  section .menu .nav__column_title {
    margin-bottom: 20px;
  }

  section .menu .nav__column_title a {
    font-weight: 400;
    font-size: 18px;
    color: #3a3c41;
  }

  @media (max-width: 479.98px) {
    section .menu .nav__column_list {
      display: none;
    }
  }

  section .menu .nav__column_list li a {
    font-weight: 300;
    font-size: 12px;
    line-height: 200%;
    color: #3a3c41;
  }

  section .menu .nav__column_list li a:hover {
    text-decoration: underline;
  }
`;

export default function Services() {
  window.scrollTo(0, 0);
  return (
    <ServicesStyles>
      <section>
        <div className="container">
          <div className="title">
            <h1>Услуги и сервис</h1>
          </div>
          <div className="pallet">
            <div className="pallet__grid">
              <div className="pallet__grid_section">
                <div className="block">
                  <div className="block__title">
                    <h1>ШМР и ПНР</h1>
                    <a href="/service-page/">
                      <img className="icon" src={img1} alt="" />
                    </a>
                    <div className="block__title_line"></div>
                  </div>
                  <div className="block__info">
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    </p>
                  </div>
                </div>
              </div>
              <div className="pallet__grid_section">
                <div className="block">
                  <div className="block__title">
                    <h1>Проектирование</h1>
                    <a href="/service-page/">
                      <img className="icon" src={img1} alt="" />
                    </a>
                    <div className="block__title_line"></div>
                  </div>
                  <div className="block__info">
                    <p>
                      ООО «Арктик Энергострой» выступает в качестве генерального
                      подрядчика
                    </p>
                  </div>
                </div>
              </div>
              <div className="pallet__grid_section">
                <div className="block">
                  <div className="block__title">
                    <h1>EPCM</h1>
                    <a href="/service-page/">
                      <img className="icon" src={img1} alt="" />
                    </a>
                    <div className="block__title_line"></div>
                  </div>
                  <div className="block__info">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Nemo, est!
                    </p>
                  </div>
                </div>
              </div>
              <div className="pallet__grid_section">
                <div className="block">
                  <div className="block__title">
                    <h1>Строительно-монтажные работы</h1>
                    <a href="/service-page/">
                      <img className="icon" src={img1} alt="" />
                    </a>
                    <div className="block__title_line"></div>
                  </div>
                  <div className="block__info">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Dolor repudiandae vitae provident.
                    </p>
                  </div>
                </div>
              </div>
              <div className="pallet__grid_section">
                <div className="block">
                  <div className="block__title">
                    <h1>Гарантийное обслуживание</h1>
                    <a href="/service-page/">
                      <img className="icon" src={img1} alt="" />
                    </a>
                    <div className="block__title_line"></div>
                  </div>
                  <div className="block__info">
                    <p>
                      ООО «Арктик Энергострой» выступает в качестве генерального
                      подрядчика, результатом работы которого является
                      функционирующий объект или система на условиях «под ключ».
                    </p>
                  </div>
                </div>
              </div>
              <div className="pallet__grid_section">
                <div className="block">
                  <div className="block__title">
                    <h1>Сервис</h1>
                    <a href="/service-page/">
                      <img className="icon" src={img1} alt="" />
                    </a>
                    <div className="block__title_line"></div>
                  </div>
                  <div className="block__info">
                    <p>
                      ООО «Арктик Энергострой» выступает в качестве генерального
                      подрядчика, результатом работы которого является
                      функционирующий объект или система на условиях «под ключ».
                    </p>
                  </div>
                </div>
              </div>
              <div className="pallet__grid_section">
                <div className="block">
                  <div className="block__title">
                    <h1>EPCM</h1>
                    <a href="/service-page/">
                      <img className="icon" src={img1} alt="" />
                    </a>
                    <div className="block__title_line"></div>
                  </div>
                  <div className="block__info">
                    <p>
                      ООО «Арктик Энергострой» выступает в качестве генерального
                      подрядчика, результатом работы которого является
                      функционирующий объект или система на условиях «под ключ».
                    </p>
                  </div>
                </div>
              </div>
              <div className="pallet__grid_section">
                <div className="block">
                  <div className="block__title">
                    <h1>Комплексные поставки</h1>
                    <a href="/service-page/">
                      <img className="icon" src={img1} alt="" />
                    </a>
                    <div className="block__title_line"></div>
                  </div>
                  <div className="block__info">
                    <p>
                      ООО «Арктик Энергострой» выступает в качестве генерального
                      подрядчика, результатом работы которого является
                      функционирующий объект или система на условиях «под ключ».
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <menu className="menu">
            <nav className="nav">
              <div className="nav__column">
                <div className="nav__column_title">
                  <a href="#">Структура организации</a>
                </div>
                <ul className="nav__column_list">
                  <li>
                    <a href="#">Руководство</a>
                  </li>
                  <li>
                    <a href="#">Отдел снабжения</a>
                  </li>
                  <li>
                    <a href="#">Отдел проектных продаж</a>
                  </li>
                  <li>
                    <a href="#">Финансовый отдел</a>
                  </li>
                  <li>
                    <a href="#">Административный отдел</a>
                  </li>
                </ul>
              </div>
              <div className="nav__column">
                <div className="nav__column_title">
                  <a href="#">Оборудование</a>
                </div>
                <ul className="nav__column_list">
                  <li>
                    <a href="#">Трансформаторы</a>
                  </li>
                  <li>
                    <a href="#">Сетевое и коммутационное оборудование</a>
                  </li>
                  <li>
                    <a href="#">Кабели и провода</a>
                  </li>
                  <li>
                    <a href="#">Емкостное и теплообменное оборудование</a>
                  </li>
                  <li>
                    <a href="#">
                      Частотные преобразователи и устройства плавного пуска
                    </a>
                  </li>
                  <li>
                    <a href="#">Металлоконструкции</a>
                  </li>
                  <li>
                    <a href="#">Терминалы мобильной связи</a>
                  </li>
                  <li>
                    <a href="#">
                      Контрольно-измерительные приборы и автоматика
                    </a>
                  </li>
                  <li>
                    <a href="#">Дизельные электростанции</a>
                  </li>
                  <li>
                    <a href="#">Высоковольтное оборудование</a>
                  </li>
                  <li>
                    <a href="#">Системы бесперебойного питания</a>
                  </li>
                  <li>
                    <a href="#">Оборудование для крепления скважин</a>
                  </li>
                  <li>
                    <a href="#">Осветительное оборудование</a>
                  </li>
                  <li>
                    <a href="#">Низковольтное комплектное устройство</a>
                  </li>
                  <li>
                    <a href="#">Системы видеонаблюдения</a>
                  </li>
                  <li>
                    <a href="#">
                      Блочно-модульные здания и энергетические комплексы
                    </a>
                  </li>
                  <li>
                    <a href="#">Водоснабжение и канализация</a>
                  </li>
                  <li>
                    <a href="#">Сэндвич-панели</a>
                  </li>
                </ul>
              </div>
              <div className="nav__column">
                <div className="nav__column_title">
                  <a href="#">Услуги и сервис</a>
                </div>
                <ul className="nav__column_list">
                  <li>
                    <a href="#">ЕРСМ</a>
                  </li>
                  <li>
                    <a href="#">Проектирование</a>
                  </li>
                  <li>
                    <a href="#">Строительно-монтажные работы</a>
                  </li>
                  <li>
                    <a href="#">ШМР и ПНР</a>
                  </li>
                  <li>
                    <a href="#">Гарантийное обслуживание</a>
                  </li>
                  <li>
                    <a href="#">Сервис</a>
                  </li>
                  <li>
                    <a href="#">Комплексные поставки</a>
                  </li>
                  <li>
                    <a href="#">Автоматизация объектов</a>
                  </li>
                </ul>
              </div>
              <div className="nav__column">
                <div className="nav__column_title">
                  <a href="#">О нас</a>
                </div>
                <ul className="nav__column_list">
                  <li>
                    <a href="#">Ключевые проекты</a>
                  </li>
                  <li>
                    <a href="#">Вакансии</a>
                  </li>
                  <li>
                    <a href="#">Стажировка</a>
                  </li>
                  <li>
                    <a href="#">Лицензия и сертификаты</a>
                  </li>
                  <li>
                    <a href="#">Отзывы</a>
                  </li>
                </ul>
              </div>
              <div className="nav__column">
                <div className="nav__column_title">
                  <a href="#">Контакты</a>
                </div>
                <ul className="nav__column_list">
                  <li>
                    <a href="#">Пресс-центр</a>
                  </li>
                  <li>
                    <a href="#">Мероприятия</a>
                  </li>
                </ul>
              </div>
            </nav>
          </menu>
        </div>
      </section>
    </ServicesStyles>
  );
}
