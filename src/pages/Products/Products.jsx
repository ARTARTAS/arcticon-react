import React, { useEffect, useState } from "react";
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

import arrowOrange from "./../../assets/svg/arrowOrange.svg";

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

  .title {
    h1 {
    }
  }
  .search {
    &__block {
      input {
      }
      img {
      }
    }
  }
  .sort {
  }
  .products {
    .list {
      width: 100%;
      display: -webkit-box;
      display: -ms-flexbox;
      display: grid;
      grid-gap: 20px;
      grid-template-columns: repeat(5, 1fr);
      grid-template-rows: repeat(2, 1fr);

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
      }

      .card__info {
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
      }

      .card__info:hover {
        border: 3px solid #ffc729;
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
        height: fit-content;
        min-height: 100%;
        z-index: 20;
      }

      .card__info:hover a {
        display: flex;
        gap: 10px;
      }

      .card__info_img {
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        height: 150px;
      }

      .card__info_img img {
        width: 100%;
        max-height: 100%;
      }

      .card__info_bottom {
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
      }

      .card__info_bottom h3 {
        font-weight: 600;
        font-size: 12px;
        line-height: 130%;
      }

      @media (max-width: 1199.98px) {
        .card__info_bottom h3 {
          font-size: 10px;
        }
      }

      @media (max-width: 767.98px) {
        .card__info_bottom h3 {
          font-size: 9px;
        }
      }

      @media (max-width: 479.98px) {
        .card__info_bottom h3 {
          font-size: 8px;
        }
      }

      .card__info_bottom a {
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
      }

      .card__info_bottom a .icon {
        width: 20px;
        height: 10px;
      }

      .card__info_bottom a svg {
        margin-left: 10px;
      }
    }
  }
`;
export default function Products() {
  const products = [
    {
      img: img1,
      title: "Тренсформаторы",
    },
    {
      img: img2,
      title: "Сетевое и коммутационное оборудование",
    },
    {
      img: img3,
      title: "Кабели и провода",
    },
    {
      img: img4,
      title: "Емкостное и теплообменное оборудование",
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
    },
    {
      img: img8,
      title: "Контрольно-измерительные приборы и автоматика",
    },
    {
      img: img9,
      title: "Осветительное оборудование",
    },
    {
      img: img10,
      title: "Кабеленесущие системы",
    },
  ];

  return (
    <ProductsStyles>
      <div className="container">
        <div className="title">
          <h1>Оборудование</h1>
        </div>

        <div className="search">
          <div className="search__block">
            <input type="text" placeholder="Найти в каталоге" />
            <img src="" alt="лупа" />
          </div>
        </div>
        <div className="sort">
          <h2>Типы оборудования</h2>
          <h2>Производители</h2>
        </div>
        <div className="products">
          <div className="list">
            {products.map((product) => (
              <div className="card">
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
            ))}
          </div>
          <div className="button"></div>
        </div>
      </div>
    </ProductsStyles>
  );
}
