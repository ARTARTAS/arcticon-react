import React, { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import styled from "styled-components";
import { getSubCategory, getProducts, getCategory } from "../../Firebase";
import translitRusEng from "translit-rus-eng";
import ExtraMenu from "../../components/ExtraMenu/ExtraMenu";

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
  const [thisCategory, setCategory] = useState(null);
  const [thisSubcategory, setSubCategory] = useState(null);
  const [products, setProducts] = useState(null);

  let { category, subcategory } = useParams();

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
    if (thisCategory == null) {
      console.log("category is " + category);
      console.log("subcategory is " + subcategory);

      getCategory(category).then((snap) => {
        console.log("get category is " + snap.name);
        setCategory(snap);

        getSubCategory(snap.name, subcategory).then((snap) => {
          console.log("get subcategory is " + snap.name);
          setSubCategory(snap);

          getProducts(snap.name).then((snap) => {
            console.log("get products is ");
            setProducts(snap);
          });
        });
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
                    {thisSubcategory != null ? thisSubcategory.name : ""}{" "}
                    <img className="icon" src={arrow} alt="" />
                  </NavLink>
                </li>
              ) : (
                ""
              )}
              <li>
                <button className="button active">
                  {thisCategory != null ? thisCategory.name : ""}
                </button>
              </li>
            </ul>
            <div className="back">
              {subcategory != undefined ? (
                <NavLink
                  className="back_button"
                  to={`/equipment-list/${subcategory}`}
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
          <div className="search">
            <div className="search__block">
              <input
                type="text"
                placeholder="?????????? ?? ????????????????"
                onKeyDown={makeSearch}
              />
              <button onClick={makeSearch}>
                <img src={loupBlack} alt="????????" />
              </button>
            </div>
          </div>
        </div>
        <div className="equipments">
          <div className="title">
            <h1>{thisCategory != null ? thisCategory.name : ""}</h1>
          </div>
          <div className="equipments__list">
            {products != null
              ? products.map((product, index) => (
                  <div className="equipment" key={index}>
                    <button className="equipment_img">
                      <NavLink
                        className="image"
                        onClick={() => (props.state.product = product)}
                        to={`/product/${subcategory}/${category}/${product.link}`}
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
                      to={`/product/${subcategory}/${category}/${product.link}`}
                    >
                      ??????????????????
                      <img className="icon" src={buttonArrow} alt="" />
                    </NavLink>
                  </div>
                ))
              : ""}
          </div>
        </div>
        <ExtraMenu></ExtraMenu>
      </div>
    </ProductsStyles>
  );
}
