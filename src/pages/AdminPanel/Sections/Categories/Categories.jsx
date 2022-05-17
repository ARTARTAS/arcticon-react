import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";

const CategoriesStyles = styled.div`
  .categories {
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

export default function Categories(props) {

    function addCategory() {
        props.AddCategory("Добавление категории");
        console.log("add category");
    }

  return (
    <CategoriesStyles>
      <div className="categories">
        <div className="title">
          <h1>Категории</h1>
          <div className="add-category">
            <Fab color="primary" variant="extended" onClick={addCategory}>
              <AddIcon />
              <h2>новая категория</h2>
            </Fab>
          </div>
        </div>
      </div>
    </CategoriesStyles>
  );
}
