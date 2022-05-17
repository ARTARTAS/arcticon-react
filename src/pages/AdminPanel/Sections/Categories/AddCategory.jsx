import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";

const AddCategoriesStyles = styled.div`
  .add-categories {
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

export default function AddCategory(props) {
  return (
    <AddCategoriesStyles>
      <div className="add-categories">
        <div className="title">
          <h1>Добавление категории</h1>
          <div className="form">
            <form action="">
                {/* choose subcategory */}
                
            </form>
          </div>
        </div>
      </div>
    </AddCategoriesStyles>
  );
}
