import React, { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import styled from "styled-components";
import translitRusEng from "translit-rus-eng";
import { getProduct } from "../../Firebase";
import { Markup } from "interweave";

import arrow from "./../../assets/svg/services/arrow.svg";
import download from "./../../assets/svg/product/arrowDownload.svg";
import pdf from "./../../assets/img/Products/PDF.jpg";
import ExtraMenu from "../../components/ExtraMenu/ExtraMenu";

const ProductStyles = styled.div`
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
    width: 100%;
    display: flex;
    gap: 50px;
    margin-bottom: 50px;
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
          .button {
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: left;
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
  }
  .product {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 40px;
    font-family: "Montserrat", sans-serif;

    .top {
      width: 100%;
      display: grid;
      grid-template-columns: 2fr 1fr;
      gap: 40px;
      overflow: hidden;

      @media (max-width: 767.98px) {
        display: flex;
        flex-direction: column-reverse;
      }

      .title {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 30px;

        h1 {
          font-weight: 600;
          font-size: 36px;
        }
        p {
          font-size: 18px;
          line-height: 140%;
        }
        .product_navigation {
          width: 100%;
          ul {
            display: flex;
            height: 50px;
            width: 100%;
            li {
              height: 100%;
              width: 100%;
              background: #efefef;
              padding: 10px 0px;

              button {
                width: 100%;
                height: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 16px;
                background: none;
                padding: 10px;
              }
            }
            li:not(:last-child) button {
              border-right: 1px solid #c4c4c4;
            }
            li.active:not(:last-child) button {
              border-right: none;
            }
            .active {
              font-weight: 600;
              background: #ffd600;
            }
            li.remove-border button {
              border: none;
            }
          }
        }
      }
      .image {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-end;

        @media (max-width: 767.98px) {
          justify-content: center;
        }

        img {
          max-width: 100%;
          max-height: 100%;
        }
      }
    }
    .bottom {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 40px;

      .purpose {
        display: flex;
        flex-direction: column;
        gap: 30px;
        h2 {
          font-weight: 600;
          font-size: 24px;
        }
        p {
          font-size: 18px;
          line-height: 130%;
        }
      }

      .characters {
        display: flex;
        flex-direction: column;
        gap: 30px;

        h2 {
          font-weight: 600;
          font-size: 24px;
        }
        ul {
          width: 70%;
          background: #efefef;
          padding: 20px 30px;
          li {
            display: grid;
            justify-content: center;
            width: 100%;
            grid-template-columns: 59% 2% 39%;
            grid-column-gap: 10px;
            .key {
              display: flex;
              align-items: center;
              padding: 10px 0px;
              font-size: 14px;
              line-height: 130%;
              padding: 10px;
            }
            .line {
              height: 100%;
              width: 1px;
              background: #dbd9dc;
            }
            .value {
              display: flex;
              align-items: center;
              justify-content: center;
              padding: 10px 0px;
              font-size: 14px;
              line-height: 130%;
              padding: 10px;
              text-align: center;
            }
          }
          li:not(:last-child) {
            .key,
            .value {
              border-bottom: 1px solid #dbd9dc;
            }
          }
        }
      }

      .conditions {
        display: flex;
        flex-direction: column;
        gap: 30px;
        h2 {
          font-weight: 600;
          font-size: 24px;
        }
        p {
          font-size: 18px;
          line-height: 130%;
        }
      }

      .download {
        button {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 10px;
          font-family: "Montserrat", sans-serif;
          font-size: 14px;
          background: none;
          .title {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            font-weight: 600;

            .icon {
              padding-top: 2px;
              /* height: 10px;
              width: 20px; */
            }
          }
          h4 {
            font-weight: 300;
          }
        }
      }

      .projects {
        font-family: "Montserrat", sans-serif;
        display: flex;
        flex-direction: column;
        gap: 10px;
        .project {
          display: flex;
          flex-direction: column;
          gap: 5px;
          p {
            font-size: 16px;
            line-height: 130%;
            span {
              font-weight: 600;
            }
          }
        }
      }

      .manufacturer {
        font-family: "Montserrat", sans-serif;
        display: flex;
        flex-direction: column;
        gap: 20px;

        h2 {
          margin-bottom: 10px;
          font-size: 16px;
          line-height: 130%;
        }

        p {
          line-height: 130%;
        }

        .key {
          font-size: 30px;
          font-weight: 700;
        }
        .value {
          font-size: 16px;
        }
      }
    }
  }
`;

export default function Product(props) {
  const [product, setProduct] = useState(null);
  const [characters, setCharacters] = useState(null);
  const [navigation, setNavigation] = useState("Обзор");
  const [manufacturer, setManufacturer] = useState(null);

  let { subcategory, category, name } = useParams();

  const ruSubcategory = translateToRussian(subcategory);
  const ruCategory = translateToRussian(category);
  const ruName = translateToRussian(name);

  function translateToRussian(string) {
    return translitRusEng(string, { engToRus: true }).replaceAll("_", " ");
  }

  function getProductData() {
    switch (navigation) {
      case "Обзор":
        return (
          <div className="product">
            <div className="top">
              <div className="title">
                <h1>{product.name}</h1>
                <p>{product.description}</p>
                <div className="product_navigation">
                  <ul>
                    <li className="active">
                      <button>Обзор</button>
                    </li>
                    <li>
                      <button onClick={() => setNavigation("Проэкты")}>
                        Проэкты
                      </button>
                    </li>
                    <li>
                      <button onClick={() => setNavigation("Производитель")}>
                        Производитель
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="image">
                <img src={product.img} alt="изображение продукта" />
              </div>
            </div>
            <div className="bottom">
              <div className="purpose">
                <h2>Назначение:</h2>
                <p>{product.purpose}</p>
              </div>
              <div className="characters">
                <h2>Основные технические характеристики:</h2>
                <ul>
                  {characters != null && characters.length > 0
                    ? characters.map((character, index) => (
                        <li key={index}>
                          <div className="key">{character.key}</div>
                          <div className="line"></div>
                          <div className="value">{character.value}</div>
                        </li>
                      ))
                    : ""}
                </ul>
              </div>
              <div className="conditions">
                <h2>Условия эксплуатации:</h2>
                <p>{product.conditions}</p>
              </div>
              <div className="download">
                <button>
                  <img src={pdf} alt="скачать каталог" />
                  <div className="title">
                    Скачать каталог{" "}
                    <img className="icon" src={download} alt="" />
                  </div>
                  <h4>(20мб)</h4>
                </button>
              </div>
            </div>
          </div>
        );
      case "Проэкты":
        return (
          <div className="product">
            <div className="top">
              <div className="title">
                <h1>{product.name}</h1>
                <p>{product.description}</p>
                <div className="product_navigation">
                  <ul>
                    <li className="remove-border">
                      <button onClick={() => setNavigation("Обзор")}>
                        Обзор
                      </button>
                    </li>
                    <li className="active">
                      <button>Проэкты</button>
                    </li>
                    <li>
                      <button onClick={() => setNavigation("Производитель")}>
                        Производитель
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="image">
                <img src={product.img} alt="изображение продукта" />
              </div>
            </div>
            <div className="bottom">
              <div className="projects">
                {product.projects != null && product.projects.length > 0
                  ? product.projects.map((project, index) => (
                      <div key={index} className="project">
                        {project.split("*").map((text, textIndex) => (
                          <p>
                            {textIndex == 1 ? (
                              <span key={textIndex}>{text}</span>
                            ) : (
                              text
                            )}
                          </p>
                        ))}
                      </div>
                    ))
                  : ""}
              </div>
            </div>
          </div>
        );
      case "Производитель":
        return (
          <div className="product">
            <div className="top">
              <div className="title">
                <h1>{product.name}</h1>
                <p>{product.description}</p>
                <div className="product_navigation">
                  <ul>
                    <li>
                      <button onClick={() => setNavigation("Обзор")}>
                        Обзор
                      </button>
                    </li>
                    <li className="remove-border">
                      <button onClick={() => setNavigation("Проэкты")}>
                        Проэкты
                      </button>
                    </li>
                    <li className="active">
                      <button>Производитель</button>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="image">
                <img src={product.img} alt="изображение продукта" />
              </div>
            </div>
            <div className="bottom">
              {manufacturer != null ? (
                <Markup className="manufacturer" content={manufacturer} />
              ) : (
                ""
              )}
            </div>
          </div>
        );
    }
  }

  function createMap(obj) {
    const list = [];

    for (const [key, value] of Object.entries(obj)) {
      list.push({ key: key, value: value });
    }

    return list;
  }

  useEffect(() => {
    window.scrollTo(0, 0);
    if (product != null) {
      if (characters == null) {
        setCharacters(createMap(product.characters));
      }
      if (manufacturer == null) {
        setManufacturer(product.manufacturer);
      }
    }
    if (product == null) {
      if (props.product == null) {
        getProduct(ruCategory, name).then((snap) => {
          setProduct(snap);
          if (characters == null) {
            setCharacters(createMap(snap.characters));
          }
          if (manufacturer == null) {
            setManufacturer(snap.manufacturer);
          }
        });
      } else {
        setProduct(props.product);
        if (characters == null) {
          setCharacters(createMap(props.product.characters));
        }
        if (manufacturer == null) {
          setManufacturer(props.product.manufacturer);
        }
      }
    }
  }, []);

  return (
    <ProductStyles>
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
              {category != undefined ? (
                <li>
                  <NavLink
                    className="button"
                    to={`/products/${subcategory}/${category}`}
                  >
                    {ruCategory} <img className="icon" src={arrow} alt="" />
                  </NavLink>
                </li>
              ) : (
                ""
              )}
              <li>
                <button className="button active">
                  {product != null ? product.name : ""}
                </button>
              </li>
            </ul>
            <div className="back">
              {category != undefined ? (
                <NavLink
                  className="back_button"
                  to={`/products/${subcategory}/${category}`}
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
        </div>
        {product != null ? getProductData() : ""}
        <ExtraMenu></ExtraMenu>
      </div>
    </ProductStyles>
  );
}
