import React, { useState, useEffect } from "react";
import { NavLink, useLocation, useParams } from "react-router-dom";
import styled from "styled-components";
import { getSubCategories } from "../../Firebase";

import img1 from "./../../assets/img/Products/Transformators/1.jpg";
import img2 from "./../../assets/img/Products/Transformators/2.jpg";
import img3 from "./../../assets/img/Products/Transformators/3.png";

import buttonArrow from "./../../assets/svg/arrowBlack.svg";

const EquipmentsListStyles = styled.div`
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

export default function EquipmentsList() {
  const [categories, setCategories] = useState(null);

  let { category } = useParams();

  useEffect(() => {
    if (categories == null)
      getSubCategories(category).then((snap) => setCategories(snap));
  }, []);

  return (
    <EquipmentsListStyles>
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
            {categories != null
              ? categories.map((category, index) => (
                  <div className="category" key={index}>
                    <button className="category_img">
                      <img src={category.img} alt="" />
                    </button>
                    <div className="category_title">
                      <h2>{category.title}</h2>
                    </div>
                    <div className="category_discribe">{category.about}</div>
                    <div className="category_button">
                      {category.isSubcategory ? (
                        <button>change list</button>
                      ) : (
                        <NavLink to={`/product/${category.name}`}>
                          Подробнее
                          <img className="icon" src={buttonArrow} alt="" />
                        </NavLink>
                      )}
                    </div>
                  </div>
                ))
              : ""}
          </div>
        </div>
      </div>
    </EquipmentsListStyles>
  );
}
