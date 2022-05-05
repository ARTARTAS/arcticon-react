import React, { useState, useEffect } from "react";
import { NavLink, useLocation, useParams } from "react-router-dom";
import styled from "styled-components";

import { getProducts } from "../../Firebase";

import buttonArrow from "./../../assets/svg/arrowBlack.svg";

const ProductsStyles = styled.div`
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

export default function EquipmentsList(props) {
  const [products, setProducts] = useState(null);

  let { category } = useParams();

  useEffect(() => {
    if (products == null)
      getProducts(category).then((snap) => setProducts(snap));
  }, []);

  return (
    <ProductsStyles>
      <div className="container">
        <div className="navigation">
          <div className="path"></div>
          <div className="search"></div>
        </div>
        <div className="products">
          <div className="title">
            <h1></h1>
          </div>
          <div className="categories__list">
            {products != null
              ? products.map((cat, index) => (
                  <div className="category" key={index}>
                    <button className="category_img">
                      <img src={cat.img} alt="" />
                    </button>
                    <div className="category_title">
                      <h2>{cat.title}</h2>
                    </div>
                    <div className="category_discribe">{cat.about}</div>
                    <div className="category_button">
                      {cat.isSubcategory ? (
                        <button>
                          Подробнее
                          <img className="icon" src={buttonArrow} alt="" />
                        </button>
                      ) : (
                        <NavLink
                          onClick={() => (props.state.product = cat)}
                          to={`/product/${cat.name}`}
                        >
                          Show Product
                        </NavLink>
                      )}
                    </div>
                  </div>
                ))
              : ""}
          </div>
        </div>
      </div>
    </ProductsStyles>
  );
}
