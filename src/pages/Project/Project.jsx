import React from "react";
import map from "./../../assets/img/MainPage/BlockSeven/map.png";

import styled from "styled-components";
import { NavLink } from "react-router-dom";

const ProjectStyles = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Montserrat", sans-serif;

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

  .block {
    height: 100%;
    width: 100%;
    padding-top: 100px;

    @media (max-width: 1199.98px) {
      padding-top: 80px;
    }
    @media (max-width: 1991.98px) {
      padding-top: 70px;
    }
    @media (max-width: 767.98px) {
      padding-top: 55px;
    }
    @media (max-width: 479.98px) {
      padding-top: 40px;
    }

    &__title {
      margin-bottom: 40px;

      h1 {
        font-weight: 600;
        font-size: 48px;

        @media (max-width: 1199.98px) {
          font-size: 35px;
        }
        @media (max-width: 1991.98px) {
          font-size: 25px;
        }
        @media (max-width: 767.98px) {
          font-size: 22px;
        }
        @media (max-width: 479.98px) {
          font-size: 20px;
        }
      }
    }
    &__page-nav {
      padding-bottom: 50px;

      ul {
        display: flex;
        align-items: center;
        padding: 10px 0px;
        height: fit-content;

        li {
          margin-right: 10px;

          a {
            font-weight: 400;
            font-size: 16px;

            &:hover {
              color: rgb(212, 212, 212);
            }

            @media (max-width: 1991.98px) {
              font-size: 14px;
            }
            @media (max-width: 767.98px) {
              font-size: 13px;
            }
            @media (max-width: 479.98px) {
              font-size: 12px;
            }
          }
          .icon {
            width: 22px;
            height: 10px;
          }
        }
        li:last-child {
          margin-right: 0;
        }

        .to-left {
          transform: rotate(180deg);
        }
      }
    }
    &__list {
      ul {
        li {
          font-weight: 400;
          font-size: 20px;
          padding: 10px 0px;
          line-height: 130%;

          @media (max-width: 1199.98px) {
            font-size: 18px;
            padding: 8px 0px;
          }
          @media (max-width: 1991.98px) {
            font-size: 14px;
            padding: 6px 0px;
          }
          @media (max-width: 767.98px) {
            font-size: 12px;
            padding: 5px 0px;
          }
          @media (max-width: 479.98px) {
            font-size: 10px;
            padding: 4px 0px;
          }
        }
      }
    }
    .menu {
      width: 100%;
      padding: 100px 0px 80px 0px;

      .nav {
        width: 100%;
        display: flex;
        justify-content: space-between;
        gap: 20px;

        @media (max-width: 1991.98px) {
          gap: 10px;
        }
        @media (max-width: 767.98px) {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
        }
        @media (max-width: 479.98px) {
          display: flex;
          flex-direction: column;
        }

        &__column {
          @media (max-width: 767.98px) {
            margin-bottom: 30px;
          }
          @media (max-width: 479.98px) {
            margin-bottom: 10px;
          }

          &:hover {
            .nav__column_title {
              a {
                color: #ffd600;
              }
            }
          }

          &_title {
            margin-bottom: 20px;

            a {
              font-weight: 400;
              font-size: 18px;
              color: #3a3c41;
            }
          }
          &_list {
            @media (max-width: 479.98px) {
              display: none;
            }
            li {
              a {
                font-weight: 300;
                font-size: 12px;
                line-height: 200%;
                color: #3a3c41;

                &:hover {
                  text-decoration: underline;
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default function Project(props) {
  window.scrollTo(0, 0);
  return (
    <ProjectStyles>
      <div class="container">
        <div class="block">
          <div class="block__title">
            <h1>Реализованные проекты</h1>
          </div>
          <div class="block__page-nav">
            <nav>
              <ul>
                <li>
                  <NavLink to={"/"}>Главная</NavLink>
                </li>
                <li>
                  {/* <svg class="icon">
                    <use xlink:href="<?php echo get_template_directory_uri(); ?>/svg/service-page.svg#arrow"></use>
                  </svg> */}
                </li>
                <li>
                  <button className="second" onClick={props.changeLink}>
                    Реализованные проекты
                  </button>
                </li>
                <li>
                  {/* <svg class="icon">
                    <use xlink:href="<?php echo get_template_directory_uri(); ?>/svg/service-page.svg#arrow"></use>
                  </svg> */}
                </li>
                <li>
                  <button>ООО «ЗапСибНефтехим»</button>
                </li>
              </ul>
              <ul>
                <li class="to-left">
                  {/* <svg class="icon">
                    <use xlink:href="<?php echo get_template_directory_uri(); ?>/svg/service-page.svg#arrow"></use>
                  </svg> */}
                </li>
                <li>
                  <button onClick={props.changeLink}>Назад</button>
                </li>
              </ul>
            </nav>
          </div>
          <div class="block__list">
            <ul>
              {props.project[0].list.map((text, index) => (
                <li key={index}>{text}</li>
              ))}
            </ul>
          </div>
          <menu class="menu">
            <nav class="nav">
              <div class="nav__column">
                <div class="nav__column_title">
                  <a href="#">Структура организации</a>
                </div>
                <ul class="nav__column_list">
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
              <div class="nav__column">
                <div class="nav__column_title">
                  <a href="#">Оборудование</a>
                </div>
                <ul class="nav__column_list">
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
              <div class="nav__column">
                <div class="nav__column_title">
                  <a href="#">Услуги и сервис</a>
                </div>
                <ul class="nav__column_list">
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
              <div class="nav__column">
                <div class="nav__column_title">
                  <a href="#">О нас</a>
                </div>
                <ul class="nav__column_list">
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
              <div class="nav__column">
                <div class="nav__column_title">
                  <a href="#">Контакты</a>
                </div>
                <ul class="nav__column_list">
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
    </ProjectStyles>
  );
}
