import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import { getAllCategories, getSubCategories } from "../../../../Firebase";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import StarBorder from "@mui/icons-material/StarBorder";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

import triangle from "./../../../../assets/svg/admin-panel/triangle.svg";
import Category from "./Category";

const CategoriesStyles = styled.div`
  .categories {
    width: 100%;
    .title {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 30px;
      h1 {
        height: fit-content;
      }
      .add-category {
        .add-main-category-button {
          z-index: 10;
          h2 {
            padding-top: 2px;
            padding-left: 5px;
          }
        }
      }
    }
    .category-list {
      background: #f9fafb;
      display: flex;
      flex-direction: column;
      gap: 2px;
    }
  }
`;

export default function Categories(props) {
  const [categories, setCategories] = useState(null);

  function addCategory() {
    // props.AddCategory("Добавление категории");
    console.log("add category");
  }

  useEffect(() => {
    if (categories == null)
      getAllCategories().then((result) => {
        setCategories(result);
      });
  }, []);

  return (
    <CategoriesStyles>
      <div className="categories">
        <div className="title">
          <h1>Категории</h1>
          <div className="add-category">
            <Fab
              className="add-main-category-button"
              color="primary"
              variant="extended"
              onClick={addCategory}
            >
              <AddIcon />
              <h2>новая категория</h2>
            </Fab>
          </div>
        </div>
        <div className="category-list">
          {categories != null
            ? categories.map((category, index) => (
                <Category padding={0} key={index} category={category} />
              ))
            : ""}
        </div>
      </div>
    </CategoriesStyles>
  );
}
