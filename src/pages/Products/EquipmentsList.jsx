import React, { useState, useEffect } from "react";
import { NavLink, useLocation, useParams } from "react-router-dom";
import styled from "styled-components";
import { getSubCategories } from "../../Firebase";

import buttonArrow from "./../../assets/svg/arrowBlack.svg";

const EquipmentsListStyles = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 50px 0px;

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

  .navigation {
    .path {
    }
    .search {
    }
  }
  .equipments {
    .title {
      margin-bottom: 50px;

      h1 {
        font-family: "Montserrat", sans-serif;
        font-weight: 700;
        font-size: 35px;
      }
    }

    &__list {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      grid-gap: 20px;

      .equipment {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;
        min-height: 200px;
        padding: 20px;

        &_img {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;

          img {
            width: 100%;
            max-height: 100%;
          }
        }
        &_title {
          width: 100%;
          display: flex;
          justify-content: center;

          h2 {
            font-family: "Montserrat", sans-serif;
            font-weight: 600;
            font-size: 20px;
            text-align: center;
            line-height: 120%;
            font-style: normal;
          }
        }
        &_button {
          display: flex;
          justify-content: center;
          width: fit-content;
          font-family: "Montserrat", sans-serif;
          font-weight: 600;
          padding: 12px 18px;
          background-color: #ffc729;
          font-size: 14px;
          gap: 10px;
          color: black;

          .icon {
            height: 100%;
            width: auto;
          }
        }
      }
    }
  }

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
`;

export default function EquipmentList(props) {
  const [equipments, setEquipments] = useState(null);

  let { category } = useParams();

  useEffect(() => {
    if (equipments == null) {
      getSubCategories(category).then((snap) => setEquipments(snap));
    }
  }, []);

  return (
    <EquipmentsListStyles>
      <div className="container">
        <div className="navigation">
          <div className="path"></div>
          <div className="search"></div>
        </div>
        <div className="equipments">
          <div className="title">
            <h1>{category}</h1>
          </div>
          <div className="equipments__list">
            {equipments != null
              ? equipments.map((equipment, index) => (
                  <div className="equipment" key={index}>
                    <button className="equipment_img">
                      {equipment.isSubcategory ? (
                        <NavLink
                          onClick={() => (props.state.product = equipment)}
                          to={`/product/${equipment.name}`}
                        >
                          Show Product
                        </NavLink>
                      ) : (
                        <NavLink to={`/products/${equipment.name}`}>
                          <img src={equipment.img} alt="" />
                        </NavLink>
                      )}
                    </button>
                    <div className="equipment_title">
                      <h2>{equipment.name}</h2>
                    </div>
                    {equipment.isSubcategory ? (
                      <button className="equipment_button">change list</button>
                    ) : (
                      <NavLink
                        className="equipment_button"
                        to={`/products/${equipment.name}`}
                      >
                        Подробнее
                        <img className="icon" src={buttonArrow} alt="" />
                      </NavLink>
                    )}
                  </div>
                ))
              : ""}
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
                  <a href="#">Контрольно-измерительные приборы и автоматика</a>
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
    </EquipmentsListStyles>
  );
}
