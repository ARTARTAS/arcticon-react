import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";

const AddProductsStyles = styled.div`
  .add-products {
    width: 100%;
    .title {
      display: flex;
      align-items: center;
      justify-content: space-between;
      h1 {
        height: fit-content;
      }
    }
  }
`;

export default function AddProduct(props) {
  return (
    <AddProductsStyles>
      <div className="add-products">
        <div className="title">
          <h1>Добавление продукта</h1>
          <div className="form">
            <form action="">{/* choose subcategory */}</form>
          </div>
        </div>
      </div>
    </AddProductsStyles>
  );
}
