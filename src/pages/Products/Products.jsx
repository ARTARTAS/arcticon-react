import React, { useState, useEffect } from "react";
import styled from "styled-components";

import img1 from "./../../assets/img/Products/Equipment/01.png";
import img2 from "./../../assets/img/Products/Equipment/02.png";
import img3 from "./../../assets/img/Products/Equipment/03.png";
import img4 from "./../../assets/img/Products/Equipment/04.png";
import img5 from "./../../assets/img/Products/Equipment/05.png";
import img6 from "./../../assets/img/Products/Equipment/06.png";
import img7 from "./../../assets/img/Products/Equipment/07.png";
import img8 from "./../../assets/img/Products/Equipment/08.png";
import img9 from "./../../assets/img/Products/Equipment/09.png";
import img10 from "./../../assets/img/Products/Equipment/10.png";

import next from "./../../assets/svg/home/details_black.svg";
import loupBlack from "./../../assets/svg/home/loup_black.svg";
import arrowOrange from "./../../assets/svg/arrowOrange.svg";
import DropDownList from "../../components/DropDownList/DropDownList";

const ProductsStyles = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
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

  .title {
    margin-bottom: 50px;

    h1 {
      font-family: "Montserrat", sans-serif;
      font-weight: 700;
      font-size: 35px;
    }
  }
  .search {
    width: 100%;
    margin-bottom: 30px;

    &__block {
      width: 50%;
      border-bottom: 1px solid black;
      padding: 10px 20px;
      display: flex;
      justify-content: space-between;
      gap: 20px;

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
  .sort {
    width: 100%;
    display: flex;
    gap: 30px;
    margin-bottom: 50px;
    flex-wrap: wrap;
  }
  .products {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 40px;

    .list {
      width: 100%;
      display: grid;
      grid-gap: 20px;
      grid-template-columns: repeat(5, 1fr);

      @media (max-width: 1199.98px) {
        grid-template-columns: repeat(4, 1fr);
        grid-gap: 19px;
      }
      @media (max-width: 991.98px) {
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 18px;
      }

      @media (max-width: 767.98px) {
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 17px;
      }

      .card {
        position: relative;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        height: 250px;
        min-width: 200px;
        width: auto;

        @media (max-width: 1199.98px) {
          min-width: 167px;
        }
        @media (max-width: 767.98px) {
          min-width: 126px;
        }

        &__info {
          display: flex;
          width: 100%;
          height: 100%;
          position: absolute;
          -webkit-box-orient: vertical;
          -webkit-box-direction: normal;
          -ms-flex-direction: column;
          flex-direction: column;
          -webkit-box-align: center;
          -ms-flex-align: center;
          align-items: center;
          -webkit-box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.2);
          box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.2);
          -webkit-transition: all 0.2s ease-in-out;
          transition: all 0.2s ease-in-out;
          padding: 10px;
          padding-bottom: 20px;
          background-color: white;
          text-align: center;
          gap: 20px;

          &:hover {
            border: 3px solid #ffc729;
            -webkit-transform: scale(1.1);
            transform: scale(1.1);
            height: fit-content;
            min-height: 100%;
            z-index: 20;

            a {
              display: flex;
              gap: 10px;
            }
          }

          &_img {
            display: flex;
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            justify-content: center;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            height: 150px;

            img {
              width: 100%;
              max-height: 100%;
            }
          }

          &_bottom {
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
            gap: 20px;

            h3 {
              font-weight: 600;
              font-size: 12px;
              line-height: 130%;

              @media (max-width: 1199.98px) {
                font-size: 10px;
              }

              @media (max-width: 767.98px) {
                font-size: 9px;
              }

              @media (max-width: 479.98px) {
                font-size: 8px;
              }
            }

            a {
              display: none;
              -webkit-box-pack: center;
              -ms-flex-pack: center;
              justify-content: center;
              -webkit-box-align: center;
              -ms-flex-align: center;
              align-items: center;
              font-weight: 700;
              color: #ffc729;
              font-size: 12px;
              border: 1px solid #ffc729;
              padding: 10px 14px;

              @media (max-width: 1199.98px) {
                font-size: 11px;
                padding: 9px 13px;
              }

              @media (max-width: 991.98px) {
                font-size: 10px;
                padding: 8px 11px;
              }

              @media (max-width: 479.98px) {
                font-size: 8px;
                padding: 8px 10px;
              }

              .icon {
                width: 20px;
                height: 10px;
              }
            }
          }
        }
      }
    }
    .button {
      width: 100%;
      display: flex;
      justify-content: center;

      button {
        display: flex;
        justify-content: center;
        align-items: center;
        background: none;

        font-family: "Montserrat", sans-serif;
        font-weight: 600;
        font-size: 14px;
        color: #2d2d2d;
        transition: 0.2s ease-in-out;
        gap: 20px;

        &:hover {
          padding-left: 10px;
          color: gray;
        }

        img {
          width: 40px;
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
    }
  }

  @media (max-width: 767.98px) {
    .menu .nav__column {
      margin-bottom: 30px;
    }
  }

  @media (max-width: 479.98px) {
    .menu .nav__column {
      margin-bottom: 10px;
    }
  }

  .menu .nav__column:hover .nav__column_title a {
    color: #ffd600;
  }

  .menu .nav__column_title {
    margin-bottom: 20px;
  }

  .menu .nav__column_title a {
    font-weight: 400;
    font-size: 18px;
    color: #3a3c41;
  }

  @media (max-width: 479.98px) {
    section .menu .nav__column_list {
      display: none;
    }
  }

  .menu .nav__column_list li a {
    font-weight: 300;
    font-size: 12px;
    line-height: 200%;
    color: #3a3c41;
  }

  .menu .nav__column_list li a:hover {
    text-decoration: underline;
  }
`;

export default function Products() {
  const [productsObject, changeProductsObject] = useState(null);
  const [col, setCol] = useState(5);

  const products = [
    {
      img: img1,
      title: "Трансформаторы",
      type: "Трансформаторы",
      creator: "Cisco",
    },
    {
      img: img2,
      title: "Сетевое и коммутационное оборудование",
      type: "Трансформаторы",
      creator: "Polycom",
    },
    {
      img: img3,
      title: "Кабели и провода",
      creator: "Cisco",
    },
    {
      img: img4,
      title: "Емкостное и теплообменное оборудование",
      creator: "Cisco",
    },
    {
      img: img5,
      title: "Высоковольтное оборудование",
    },
    {
      img: img6,
      title: "Щитовое оборудование",
    },
    {
      img: img7,
      title: "Системы бесперебойного питания",
      creator: "Polycom",
    },
    {
      img: img8,
      title: "Контрольно-измерительные приборы и автоматика",
      creator: "Polycom",
    },
    {
      img: img9,
      title: "Осветительное оборудование",
      creator: "Polycom",
    },
    {
      img: img10,
      title: "Кабеленесущие системы",
      creator: "Polycom",
    },
  ];

  const equipmentType = [
    "Трансформаторы",
    "Сетевое и коммутационное оборудование",
    "Кабели и провода",
    "Емкостное и теплообменное оборудование",
    "Высоковольтное оборудование",
    "Щитовое оборудование",
    "Системы бесперебойного питания",
    "Контрольно-измерительные приборы и автоматика",
    "Осветительное оборудование",
    "Кабеленесущие системы",
  ];

  const manufacturers = ["Cisco", "Polycom"];

  let productsState = {
    type: productsObject != null ? productsObject.type : "",
    creator: productsObject != null ? productsObject.creator : "",
    products: products,
    equipmentType: equipmentType,
    manufacturers: manufacturers,
  };

  function makeSort() {
    if (productsState.type != "" && productsState.creator != "") {
      productsState.products = productsState.products.filter(
        (x) =>
          x.creator == productsState.creator && x.type == productsState.type
      );
    } else if (productsState.type != "") {
      productsState.products = productsState.products.filter(
        (x) => x.type == productsState.type
      );
    } else if (productsState.creator != "") {
      productsState.products = productsState.products.filter(
        (x) => x.creator == productsState.creator
      );
    } else {
      productsState.products = products;
    }

    changeProductsObject(productsState);
  }

  function changeType(text) {
    productsState.type = text !== undefined ? text : "";
    makeSort();
  }

  function changeCreator(text) {
    productsState.creator = text !== undefined ? text : "";
    makeSort();
  }

  function makeSearch(event) {
    if (event.type == "click") {
      console.log("click");
    }
    if (event.key === "Enter") {
      console.log("press enter");
    }
  }

  useEffect(() => {
    if (productsObject == null) changeProductsObject(productsState);
  }, []);

  return (
    <ProductsStyles>
      <div className="container">
        <div className="title">
          <h1>Оборудование</h1>
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
        <div className="sort">
          <DropDownList
            className="equipment"
            type="subcategory-name"
            name="subcategory-name"
            list={productsState.equipmentType}
            title="Тип оборудования"
            change={changeType}
          />
          <DropDownList
            className="manufacturer"
            type="subcategory-name"
            name="subcategory-name"
            list={productsState.manufacturers}
            title="Производитель"
            change={changeCreator}
          />
        </div>
        <div className="products">
          <div className="list">
            {productsObject != null
              ? productsObject.products.slice(0, col).map((product, index) => (
                  <div className="card" key={index}>
                    <div className="card__info">
                      <a href="" className="card__info_img">
                        <img src={product.img} alt="" />
                      </a>
                      <div className="card__info_bottom">
                        <h3>{product.title}</h3>
                        <a href="">
                          Подробнее
                          <img className="icon" src={arrowOrange} alt="" />
                        </a>
                      </div>
                    </div>
                  </div>
                ))
              : ""}
          </div>
          <div className="button">
            <button
              onClick={() => {
                setCol((col + 5));
              }}
            >
              Ещё
              <img className="icon" src={next} alt="button" />
            </button>
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
