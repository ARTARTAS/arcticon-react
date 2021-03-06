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

import { md1, md2, md3, md4 } from "./../../assets/media-points";

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
          line-height: 130%;

          @media (max-width: 767.98px) {
            font-size: 24px;
          }
          @media (max-width: ${md4}) {
            font-size: 20px;
          }
        }

        p {
          font-size: 18px;
          line-height: 130%;

          @media (max-width: 767.98px) {
            font-size: 16px;
          }
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

              @media (max-width: 767.98px) {
                padding: 0px;
              }

              button {
                width: 100%;
                height: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 16px;
                background: none;
                padding: 10px;

                @media (max-width: 767.98px) {
                  font-size: 14px;
                  padding: 5px 8px;
                }
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

        @media (max-width: 767.98px) {
          gap: 20px;
        }
        h2 {
          font-weight: 600;
          font-size: 24px;

          @media (max-width: 767.98px) {
            font-size: 19px;
          }
        }
        p {
          font-size: 18px;
          line-height: 130%;

          @media (max-width: 767.98px) {
            font-size: 16px;
          }
        }
      }

      .characters {
        display: flex;
        flex-direction: column;
        gap: 30px;

        @media (max-width: 767.98px) {
          gap: 20px;
        }

        h2 {
          font-weight: 600;
          font-size: 24px;

          @media (max-width: 767.98px) {
            font-size: 19px;
          }
        }
        ul {
          width: 70%;
          background: #efefef;
          padding: 20px 30px;
          @media (max-width: 767.98px) {
            width: 100%;
            padding: 10px 15px;
          }
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
              line-height: 160%;
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

        @media (max-width: 767.98px) {
          gap: 20px;
        }
        h2 {
          font-weight: 600;
          font-size: 24px;

          @media (max-width: 767.98px) {
            font-size: 19px;
          }
        }
        .conditions-body {
          font-size: 18px;
          line-height: 130%;

          @media (max-width: 767.98px) {
            font-size: 16px;
          }
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

          img {
            @media (max-width: 767.98px) {
              height: 60px;
            }
          }
          .title {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            font-weight: 600;

            .icon {
              padding-top: 2px;
              height: auto;
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
        gap: 20px;
        font-size: 16px;
        line-height: 130%;
        @media (max-width: ${md4}) {
          font-size: 14px;
        }

        h2 {
          margin-bottom: 10px;
          font-size: 18px;
          line-height: 130%;
          @media (max-width: ${md4}) {
            font-size: 16px;
          }
        }

        p {
          font-size: 16px;
          line-height: 130%;
          @media (max-width: ${md4}) {
            font-size: 14px;
          }
        }
        h4 {
          color: gray;
          font-size: 16px;
          line-height: 130%;
          @media (max-width: ${md4}) {
            font-size: 14px;
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
          font-size: 18px;
          line-height: 130%;
          @media (max-width: ${md4}) {
            font-size: 16px;
          }
        }

        h3 {
          font-size: 17px;
          line-height: 130%;
          @media (max-width: ${md4}) {
            font-size: 15px;
          }
        }

        p {
          font-size: 16px;
          line-height: 130%;
          @media (max-width: ${md4}) {
            font-size: 14px;
          }
        }
      }
    }
  }
`;

export default function Product(props) {
  const [product, setProduct] = useState(null);
  const [characters, setCharacters] = useState(null);
  const [navigation, setNavigation] = useState("??????????");
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
      case "??????????":
        return (
          <div className="product">
            <div className="top">
              <div className="title">
                <h1>{product.name}</h1>
                <p>{product.description}</p>
                <div className="product_navigation">
                  <ul>
                    <li className="active">
                      <button>??????????</button>
                    </li>
                    <li>
                      <button onClick={() => setNavigation("??????????????")}>
                        ??????????????
                      </button>
                    </li>
                    <li>
                      <button onClick={() => setNavigation("??????????????????????????")}>
                        ??????????????????????????
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="image">
                <img src={product.img} alt="?????????????????????? ????????????????" />
              </div>
            </div>
            <div className="bottom">
              <div className="purpose">
                <h2>????????????????????:</h2>
                <p>{product.purpose}</p>
              </div>
              <div className="characters">
                <h2>???????????????? ?????????????????????? ????????????????????????????:</h2>
                <ul>
                  {characters != null && characters.length > 0
                    ? characters.map((character, index) => (
                        <li key={index}>
                          <div className="key">{character.key}</div>
                          <div className="line"></div>
                          <Markup className="value" content={character.value} />
                        </li>
                      ))
                    : ""}
                </ul>
              </div>
              <div className="conditions">
                <h2>?????????????? ????????????????????????:</h2>
                <Markup
                  className="conditions-body"
                  content={product.conditions}
                />
              </div>
              <div className="download">
                <button>
                  <img src={pdf} alt="?????????????? ??????????????" />
                  <div className="title">
                    ?????????????? ??????????????{" "}
                    <img className="icon" src={download} alt="" />
                  </div>
                  <h4>(20????)</h4>
                </button>
              </div>
            </div>
          </div>
        );
      case "??????????????":
        return (
          <div className="product">
            <div className="top">
              <div className="title">
                <h1>{product.name}</h1>
                <p>{product.description}</p>
                <div className="product_navigation">
                  <ul>
                    <li className="remove-border">
                      <button onClick={() => setNavigation("??????????")}>
                        ??????????
                      </button>
                    </li>
                    <li className="active">
                      <button>??????????????</button>
                    </li>
                    <li>
                      <button onClick={() => setNavigation("??????????????????????????")}>
                        ??????????????????????????
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="image">
                <img src={product.img} alt="?????????????????????? ????????????????" />
              </div>
            </div>
            <div className="bottom">
              {product.projects != null ? (
                <Markup className="projects" content={product.projects} />
              ) : (
                ""
              )}
            </div>
          </div>
        );
      case "??????????????????????????":
        return (
          <div className="product">
            <div className="top">
              <div className="title">
                <h1>{product.name}</h1>
                <p>{product.description}</p>
                <div className="product_navigation">
                  <ul>
                    <li>
                      <button onClick={() => setNavigation("??????????")}>
                        ??????????
                      </button>
                    </li>
                    <li className="remove-border">
                      <button onClick={() => setNavigation("??????????????")}>
                        ??????????????
                      </button>
                    </li>
                    <li className="active">
                      <button>??????????????????????????</button>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="image">
                <img src={product.img} alt="?????????????????????? ????????????????" />
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
      console.log("product");
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
                  ?????????????? <img className="icon" src={arrow} alt="" />
                </NavLink>
              </li>
              <li>
                <NavLink className="button" to="/equipments">
                  ???????????????????????? <img className="icon" src={arrow} alt="" />
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
                  ??????????
                </NavLink>
              ) : (
                <NavLink className="back_button" to="/equipments">
                  <img className="icon" src={arrow} alt="" />
                  ??????????
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
