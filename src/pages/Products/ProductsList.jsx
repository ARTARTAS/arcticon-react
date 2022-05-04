import React, { useState, useEffect } from "react";
import { NavLink, useLocation, useParams } from "react-router-dom";
import styled from "styled-components";

import img1 from "./../../assets/img/Products/Transformators/1.jpg";
import img2 from "./../../assets/img/Products/Transformators/2.jpg";
import img3 from "./../../assets/img/Products/Transformators/3.png";

import buttonArrow from "./../../assets/svg/arrowBlack.svg";

const ProductsListStyles = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

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
`;

export default function ProductsList(props) {
  // let location = useLocation();
  // console.log(location)

  let { id } = useParams();

  console.log(id)

  const products = [
    {
      img: img1,
      title: "НТМИ 6/10",
      about:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      img: img2,
      title: "НОМ 6/10",
      about:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      img: img3,
      title: "НАМИТ 6/10",
      about:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];

  useEffect(() => {
    // console.log(fromCategories)
  }, []);

  return (
    <ProductsListStyles>
      <div className="container">
        <div className="navigation">
          <div className="path"></div>
          <div className="search"></div>
        </div>
        <div className="products">
          <div className="title">
            <h1></h1>
          </div>
          <div className="products__list">
            {/* {products.map((product) => (
              <div className="product">
                <div className="product_img">
                  <img src={product.img} alt="" />
                </div>
                <div className="product_title">
                  <h2>{product.title}</h2>
                </div>
                <div className="product_discribe">{product.about}</div>
                <div className="product_button">
                  <NavLink to={{
                    pathname: '/product',
                    state: {

                    }
                  }} >
                    Подробнее
                    <img className="icon" src={buttonArrow} alt="" />
                    </NavLink>
                </div>
              </div>
            ))} */}
          </div>
        </div>
      </div>
    </ProductsListStyles>
  );
}
