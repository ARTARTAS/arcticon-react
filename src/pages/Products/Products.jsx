import React, { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import styled from "styled-components";
import { getProducts } from "../../Firebase";
import translitRusEng from "translit-rus-eng";

import arrow from "./../../assets/svg/services/arrow.svg";
import loupBlack from "./../../assets/svg/home/loup_black.svg";
import buttonArrow from "./../../assets/svg/arrowBlack.svg";

import { md1, md2, md3, md4 } from "./../../assets/media-points";

const ProductsStyles = styled.div`
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

    @media (max-width: ${md3}) {
      margin: 0px 30px;
    }

    @media (max-width: ${md4}) {
      margin: 0px 20px;
    }
  }

  .navigation {
    width: 100%;
    display: flex;
    gap: 50px;
    margin-bottom: 40px;

    @media (max-width: ${md3}) {
      flex-direction: column;
      gap: 30px;
    }
    @media (max-width: ${md4}) {
      display: none;
    }

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
          width: fit-content;
          display: flex;
          justify-content: center;
          align-items: center;
          .button {
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 15px;
            font-size: 16px;

            @media (max-width: ${md2}) {
              gap: 10px;
            }

            &:visited {
              color: black;
            }

            img {
              height: 40%;
              width: 25px;
            }
          }
          .active {
            background: none;
            font-weight: 600;
          }
        }
      }
      .back {
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
    .search {
      width: 100%;
      display: flex;
      justify-content: flex-end;
      margin-bottom: 30px;

      @media (max-width: ${md1}) {
        width: fit-content;
      }
      @media (max-width: ${md3}) {
        margin-bottom: 0px;
        width: 50%;
        justify-content: flex-start;
      }

      &__block {
        width: 50%;
        border-bottom: 1px solid black;
        padding: 10px 20px;
        display: flex;
        justify-content: space-between;
        gap: 20px;
        min-width: 240px;

        @media (max-width: ${md3}) {
          width: 100%;
        }

        input {
          font-family: "Montserrat", sans-serif;
          font-size: 18px;
          font-weight: 300;
          width: 100%;
        }
        button {
          background: none;
          cursor: pointer;

          img {
            width: 15px;
          }
        }
      }
    }
  }

  .equipments {
    .title {
      margin-bottom: 50px;

      h1 {
        font-family: "Montserrat", sans-serif;
        font-weight: 700;
        font-size: 35px;

        @media (max-width: ${md2}) {
          font-size: 30px;
        }
        @media (max-width: ${md3}) {
          font-size: 25px;
        }
        @media (max-width: ${md4}) {
          font-size: 20px;
        }
      }
    }

    &__list {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 20px;

      @media (max-width: ${md3}) {
        grid-template-columns: repeat(2, 1fr);
      }
      @media (max-width: ${md4}) {
        grid-template-columns: repeat(1, 1fr);
        grid-gap: 30px;
      }

      .equipment {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;
        min-height: 200px;
        padding: 20px;
        justify-content: space-between;

        @media (max-width: ${md3}) {
          padding: 15px;
        }
        @media (max-width: ${md4}) {
          padding: 10px;
        }

        &_img {
          width: 100%;
          height: 200px;
          background: none;

          @media (max-width: ${md2}) {
            height: 150px;
          }
          @media (max-width: ${md3}) {
            height: 180px;
          }
          @media (max-width: ${md4}) {
            height: 200px;
          }

          .image {
            height: 100%;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;

            img {
              max-width: 100%;
              max-height: 100%;
            }
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

            @media (max-width: ${md1}) {
              font-size: 17px;
            }
            @media (max-width: ${md2}) {
              font-size: 16px;
            }
            @media (max-width: ${md3}) {
              font-size: 15px;
            }
            @media (max-width: ${md4}) {
              font-size: 14px;
            }
          }
        }
        .button {
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

          @media (max-width: ${md1}) {
            font-size: 13px;
            padding: 11px 17px;
          }
          @media (max-width: ${md2}) {
            font-size: 12px;
            padding: 10px 16px;
          }
          @media (max-width: ${md4}) {
            font-size: 11px;
            padding: 9px 15px;
          }

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

export default function Products(props) {
  const [products, setProducts] = useState(null);

  let { subcategory, category } = useParams();

  const ruSubcategory = translitRusEng(subcategory, {
    engToRus: true,
  }).replaceAll("_", " ");

  const ruCategory = translitRusEng(category, {
    engToRus: true,
  }).replaceAll("_", " ");

  function makeSearch(event) {
    if (event.type == "click") {
      console.log("click");
    }
    if (event.key === "Enter") {
      console.log("press enter");
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0);
    if (products == null) {
      getProducts(ruCategory).then((snap) => {
        console.log(snap);
        setProducts(snap);
      });
    }
  }, []);

  return (
    <ProductsStyles>
      <div className="container">
        <div className="navigation">
          <div className="path">
            <ul>
              <li>
                <NavLink className="button" to="/">
                  Главная <img className="icon" src={arrow} alt="" />
                </NavLink>
              </li>
              <li>
                <NavLink className="button" to="/equipments">
                  Оборудование <img className="icon" src={arrow} alt="" />
                </NavLink>
              </li>
              {subcategory != undefined ? (
                <li>
                  <NavLink
                    className="button"
                    to={`/equipment-list/${subcategory}`}
                  >
                    {ruSubcategory} <img className="icon" src={arrow} alt="" />
                  </NavLink>
                </li>
              ) : (
                ""
              )}
              <li>
                <button className="button active">{ruCategory}</button>
              </li>
            </ul>
            <div className="back">
              {subcategory != undefined ? (
                <NavLink
                  className="back_button"
                  to={`/equipment-list/${subcategory}`}
                >
                  <img className="icon" src={arrow} alt="" />
                  Назад
                </NavLink>
              ) : (
                <NavLink className="back_button" to="/equipments">
                  <img className="icon" src={arrow} alt="" />
                  Назад
                </NavLink>
              )}
            </div>
          </div>
          <div className="search">
            <div className="search__block">
              <input
                type="text"
                placeholder="Найти в каталоге"
                onKeyDown={makeSearch}
              />
              <button onClick={makeSearch}>
                <img src={loupBlack} alt="лупа" />
              </button>
            </div>
          </div>
        </div>
        <div className="equipments">
          <div className="title">
            <h1>{ruCategory}</h1>
          </div>
          <div className="equipments__list">
            {products != null
              ? products.map((product, index) => (
                  <div className="equipment" key={index}>
                    <button className="equipment_img">
                      <NavLink
                        className="image"
                        onClick={() => (props.state.product = product)}
                        to={`/product/${subcategory}/${category}/${translitRusEng(
                          product.name,
                          { slug: true }
                        )}`}
                      >
                        <img src={product.img} alt="" />
                      </NavLink>
                    </button>
                    <div className="equipment_title">
                      <h2>{product.name}</h2>
                    </div>
                    <NavLink
                      className="button"
                      onClick={() => (props.state.product = product)}
                      to={`/product/${subcategory}/${category}/${translitRusEng(
                        product.name,
                        { slug: true }
                      )}`}
                    >
                      Подробнее
                      <img className="icon" src={buttonArrow} alt="" />
                    </NavLink>
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
    </ProductsStyles>
  );
}
