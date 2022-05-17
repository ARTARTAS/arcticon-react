import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";

const ProductsStyles = styled.div`
  .products {
    width: 100%;
    .title {
      display: flex;
      align-items: center;
      justify-content: space-between;
      h1 {
        height: fit-content;
      }
      .add-category {
        h2 {
          padding-top: 2px;
          padding-left: 5px;
        }
      }
    }
  }
`;

export default function Products(props) {
  function addProduct() {
    props.AddProduct("Добавление продукта");
  }

  return (
    <ProductsStyles>
      <div className="products">
        <div className="title">
          <h1>Продукты</h1>
          <div className="add-product">
            <Fab color="primary" variant="extended" onClick={addProduct}>
              <AddIcon />
              <h2>Новый продукт</h2>
            </Fab>
          </div>
        </div>
      </div>
    </ProductsStyles>
  );
}
