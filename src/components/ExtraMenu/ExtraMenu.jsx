import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import styled from "styled-components";

const ExtraMenuStyles = styled.div`
  .menu {
    width: 100%;
    padding: 100px 0px 80px 0px;
    font-family: "Montserrat", sans-serif;

    .nav {
      width: 100%;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-pack: justify;
      -ms-flex-pack: justify;
      justify-content: space-between;
      gap: 20px;
      @media (max-width: 991.98px) {
        gap: 10px;
      }
      @media (max-width: 767.98px) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
      }
      @media (max-width: 479.98px) {
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
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
          .nav__column_title a {
            color: #ffd600;
          }
        }

        &_title {
          margin-bottom: 20px;
          a {
            font-weight: 400;
            font-size: 18px;
            color: #2a2b2e;
          }
        }
        &_list {
          @media (max-width: 479.98px) {
            display: none;
          }

          li {
            a,
            .link {
              font-weight: 400;
              font-size: 12px;
              line-height: 200%;
              color: #4b4c52;

              &:hover,
              .link:hover {
                text-decoration: underline;
              }
            }
            a.disable,
            .link.disable {
              color: #a5a59360;
            }
            a.disable:hover,
            .link.disable:hover {
              cursor: default;
              text-decoration: none;
            }
          }
        }
      }
    }
  }
`;

export default function ExtraMenu() {
  return (
    <ExtraMenuStyles>
      <menu className="menu">
        <nav className="nav">
          <div className="nav__column">
            <div className="nav__column_title">
              <a href="#">Структура организации</a>
            </div>
            <ul className="nav__column_list">
              <li>
                <a href="#" className="disable">
                  Руководство
                </a>
              </li>
              <li>
                <a href="#" className="disable">
                  Отдел снабжения
                </a>
              </li>
              <li>
                <a href="#" className="disable">
                  Отдел проектных продаж
                </a>
              </li>
              <li>
                <a href="#" className="disable">
                  Финансовый отдел
                </a>
              </li>
              <li>
                <a href="#" className="disable">
                  Административный отдел
                </a>
              </li>
            </ul>
          </div>
          <div className="nav__column">
            <div className="nav__column_title">
              <NavLink to="/equipments">Оборудование</NavLink>
            </div>
            <ul className="nav__column_list">
              <li>
                <NavLink to="/equipment-list/Transformatory">
                  Трансформаторы
                </NavLink>
              </li>
              <li>
                <NavLink to="/equipment-list/Setevoe_i_kommutaczionnoe_oborudovanie">
                  Сетевое и коммутационное оборудование
                </NavLink>
              </li>
              <li>
                <NavLink to="/equipment-list/Kabeli_i_provoda">
                  Кабели и провода
                </NavLink>
              </li>
              <li>
                <NavLink to="/equipment-list/Emkostnoe_i_teploobmennoe_oborudovanie">
                  Емкостное и теплообменное оборудование
                </NavLink>
              </li>
              <li>
                <a href="#" className="disable">
                  Частотные преобразователи и устройства плавного пуска
                </a>
              </li>
              <li>
                <a href="#" className="disable">
                  Металлоконструкции
                </a>
              </li>
              <li>
                <a href="#" className="disable">
                  Терминалы мобильной связи
                </a>
              </li>
              <li>
                <a href="#" className="disable">
                  Контрольно-измерительные приборы и автоматика
                </a>
              </li>
              <li>
                <a href="#" className="disable">
                  Дизельные электростанции
                </a>
              </li>
              <li>
                <NavLink to="/equipment-list/Vysokovoltnoe_oborudovanie">
                  Высоковольтное оборудование
                </NavLink>
              </li>
              <li>
                <NavLink to="/equipment-list/Sistemy_besperebojnogo_pitaniya">
                  Системы бесперебойного питания
                </NavLink>
              </li>
              <li>
                <a href="#" className="disable">
                  Оборудование для крепления скважин
                </a>
              </li>
              <li>
                <a href="#" className="disable">
                  Осветительное оборудование
                </a>
              </li>
              <li>
                <a href="#" className="disable">
                  Низковольтное комплектное устройство
                </a>
              </li>
              <li>
                <NavLink to="/equipment-list/Shhitovoe_oborudovanie">
                  Щитовое оборудование
                </NavLink>
              </li>
              <li>
                <a href="#" className="disable">
                  Системы видеонаблюдения
                </a>
              </li>
              <li>
                <a href="#" className="disable">
                  Блочно-модульные здания и энергетические комплексы
                </a>
              </li>
              <li>
                <a href="#" className="disable">
                  Водоснабжение и канализация
                </a>
              </li>
              <li>
                <a href="#" className="disable">
                  Сэндвич-панели
                </a>
              </li>
            </ul>
          </div>
          <div className="nav__column">
            <div className="nav__column_title">
              <NavLink to="/services">Услуги и сервис</NavLink>
            </div>
            <ul className="nav__column_list">
              <li>
                <NavLink className="link" to={`/services/ЕРСМ`}>
                  ЕРСМ
                </NavLink>
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
                <a href="#" className="disable">
                  Автоматизация объектов
                </a>
              </li>
            </ul>
          </div>
          <div className="nav__column">
            <div className="nav__column_title">
              <NavLink to="/about">О нас</NavLink>
            </div>
            <ul className="nav__column_list">
              <li>
                <a href="#" className="disable">
                  Ключевые проекты
                </a>
              </li>
              <li>
                <a href="#" className="disable">
                  Вакансии
                </a>
              </li>
              <li>
                <a href="#" className="disable">
                  Стажировка
                </a>
              </li>
              <li>
                <a href="#" className="disable">
                  Лицензия и сертификаты
                </a>
              </li>
              <li>
                <a href="#" className="disable">
                  Отзывы
                </a>
              </li>
            </ul>
          </div>
          <div className="nav__column">
            <div className="nav__column_title">
              <a href="#">Контакты</a>
            </div>
            <ul className="nav__column_list">
              <li>
                <a href="#" className="disable">
                  Пресс-центр
                </a>
              </li>
              <li>
                <a href="#" className="disable">
                  Мероприятия
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </menu>
    </ExtraMenuStyles>
  );
}
