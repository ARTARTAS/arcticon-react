import React, { useState, useEffect } from "react";
import arrow from "./../../assets/svg/services/arrow.svg";

import styled from "styled-components";
import { NavLink, useParams } from "react-router-dom";

const ServicesPageStyles = styled.div`
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

  .navigation {
    width: 100%;
    display: flex;
    gap: 50px;
    margin-bottom: 40px;
    .path {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 20px;
      font-family: "Montserrat", sans-serif;

      ul {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        gap: 20px;

        li {
          display: flex;
          align-items: center;
          width: fit-content;

          .button {
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 15px;
            font-size: 16px;

            &:visited {
              color: black;
            }

            img {
              height: 40%;
              width: 25px;
            }
          }
          .this {
            background: none;
            font-weight: 600;
          }
        }
      }
      .back {
        width: fit-content;
        &_button {
          font-size: 16px;
          background: none;
          display: flex;
          color: black;
          align-items: center;
          gap: 15px;

          .icon {
            transform: rotate(180deg);
            height: 40%;
            width: 25px;
          }
        }
      }
    }
  }

  section {
    width: 100%;
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
    font-family: "Montserrat", sans-serif;
    padding: 0px 50px;
  }

  @media (max-width: 767.98px) {
    section {
      padding: 0px 20px;
    }
  }

  section .block__title {
    padding: 80px 0px 50px 0px;
  }

  section .block__title h1 {
    font-weight: 700;
    font-size: 35px;
    text-transform: uppercase;
  }

  @media (max-width: 1199.98px) {
    section .block__title h1 {
      font-weight: 600;
    }
  }

  @media (max-width: 991.98px) {
    section .block__title h1 {
      font-size: 25px;
    }
  }

  @media (max-width: 767.98px) {
    section .block__title h1 {
      font-size: 22px;
    }
  }

  @media (max-width: 479.98px) {
    section .block__title h1 {
      font-size: 20px;
    }
  }

  section .block__page-nav {
    padding-bottom: 50px;
  }

  section .block__page-nav ul {
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    padding: 10px 0px;
    height: fit-content;
  }

  section .block__page-nav ul li {
    margin-right: 10px;
  }

  section .block__page-nav ul li a {
    font-weight: 400;
    font-size: 16px;
  }

  section .block__page-nav ul li a:hover {
    color: #d4d4d4;
  }

  @media (max-width: 991.98px) {
    section .block__page-nav ul li a {
      font-size: 14px;
    }
  }

  @media (max-width: 767.98px) {
    section .block__page-nav ul li a {
      font-size: 13px;
    }
  }

  @media (max-width: 479.98px) {
    section .block__page-nav ul li a {
      font-size: 12px;
    }
  }

  section .block__page-nav ul li .icon {
    width: 22px;
    height: 10px;
  }

  section .block__page-nav ul li:last-child {
    margin-right: 0;
  }

  section .block__page-nav ul .to-left {
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg);
  }

  section .block__info {
    div {
      display: flex;
      flex-direction: column;
      gap: 20px;
      ul {
        display: flex;
        flex-direction: column;
        gap: 5px;
        li {
          font-size: 16px;
          font-weight: 400;
          line-height: 130%;
        }
      }
      ul.inside {
        li {
          list-style: circle;
          list-style-position: inside;
        }
      }
    }
  }

  section .block__info p {
    font-size: 20px;
    font-weight: 400;
    line-height: 130%;
  }

  @media (max-width: 1199.98px) {
    section .block__info p {
      font-size: 18px;
    }
  }

  @media (max-width: 991.98px) {
    section .block__info p {
      font-size: 14px;
    }
  }

  @media (max-width: 767.98px) {
    section .block__info p {
      font-size: 12px;
    }
  }

  @media (max-width: 479.98px) {
    section .block__info p {
      font-size: 10px;
    }
  }

  section .block .menu {
    width: 100%;
    padding: 100px 0px 80px 0px;
  }

  section .block .menu .nav {
    width: 100%;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    gap: 20px;
  }

  @media (max-width: 991.98px) {
    section .block .menu .nav {
      gap: 10px;
    }
  }

  @media (max-width: 767.98px) {
    section .block .menu .nav {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 479.98px) {
    section .block .menu .nav {
      display: flex;
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      -ms-flex-direction: column;
      flex-direction: column;
    }
  }

  @media (max-width: 767.98px) {
    section .block .menu .nav__column {
      margin-bottom: 30px;
    }
  }

  @media (max-width: 479.98px) {
    section .block .menu .nav__column {
      margin-bottom: 10px;
    }
  }

  section .block .menu .nav__column:hover .nav__column_title a {
    color: #ffd600;
  }

  section .block .menu .nav__column_title {
    margin-bottom: 20px;
  }

  section .block .menu .nav__column_title a {
    font-weight: 400;
    font-size: 18px;
    color: #3a3c41;
  }

  @media (max-width: 479.98px) {
    section .block .menu .nav__column_list {
      display: none;
    }
  }

  section .block .menu .nav__column_list li a {
    font-weight: 300;
    font-size: 12px;
    line-height: 200%;
    color: #3a3c41;
  }

  section .block .menu .nav__column_list li a:hover {
    text-decoration: underline;
  }
`;

export default function ServicesPage(props) {
  const [service, setService] = useState(null);

  let { name } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
    if (service == null) {
      const data = props.services.find((x) => x.link == name);
      setService(data);
    }
  }, []);

  return (
    <ServicesPageStyles>
      <section>
        <div className="container">
          <div className="block">
            <div className="block__title">
              <h1>{service != null ? service.name : ""}</h1>
            </div>
            <div className="navigation">
              <div className="path">
                <ul>
                  <li>
                    <NavLink className="button" to="/">
                      Главная <img className="icon" src={arrow} alt="" />
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="button" to="/services">
                      Услуги и сервис
                      <img className="icon" src={arrow} alt="" />
                    </NavLink>
                  </li>
                  <li>
                    <button className="button this">
                      {service != null ? service.name : ""}
                    </button>
                  </li>
                </ul>
                <div className="back">
                  <NavLink className="back_button" to="/services">
                    <img className="icon" src={arrow} alt="" />
                    Назад
                  </NavLink>
                </div>
              </div>
            </div>

            <div className="block__info">
              {service != null ? service.data : ""}
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
        </div>
      </section>
    </ServicesPageStyles>
  );
}
