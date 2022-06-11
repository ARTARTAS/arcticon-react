import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import { getSubCategories } from "../../../../Firebase";

import triangle from "./../../../../assets/svg/admin-panel/triangle.svg";

const CategoryStyles = styled.div`
  .category {
    .main {
      background: white;
      padding: 10px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      cursor: pointer;
      &:hover {
        background: #f9fafb;
      }
      .data {
        display: flex;
        justify-content: center;
        gap: 10px;
        padding-left: ${(props) => props.padding}px;
        .transform {
          width: 18px;
          height: 18px;
          transform: rotate(180deg);
          transition: all 0.2s ease-in-out;
        }
        .icon {
          width: 18px;
          height: 18px;
          transition: all 0.2s ease-in-out;
        }
        h2 {
          font-size: 16px;
          font-weight: 600;
        }
      }
      .buttons {
        display: flex;
        gap: 10px;
        height: 100%;
        .button {
          border-radius: 50%;
          width: 40px;
          height: 40px;
          box-shadow: none;
          z-index: 10;
        }
      }
    }
  }
`;

export default function Category(props) {
  const [subcategories, setSubcategories] = useState(null);
  const [open, setOpen] = useState(false);

  function addSubcategoryList() {
    setOpen(!open);
    if (subcategories == null) {
      getSubCategories(props.category.name).then((list) => {
        setSubcategories(list);
      });
    }
  }

  return (
    <CategoryStyles padding={props.padding}>
      <div className="category">
        <div className="main" onClick={addSubcategoryList}>
          <div className="data">
            <img
              className={!open ? "icon" : "transform"}
              src={triangle}
              alt=""
            />
            <h2>{props.category.name}</h2>
          </div>
          <div className="buttons">
            <Fab
              size="small"
              className="button add-category-button"
              color="primary"
              variant="extended"
              onClick={() => {}}
            >
              <AddIcon />
            </Fab>
            <Fab
              size="small"
              className="button edit-category-button"
              color="secondary"
              aria-label="edit"
            >
              <EditIcon />
            </Fab>
          </div>
        </div>
        <div className="subcategories">
          {subcategories != null && open == true
            ? subcategories.map((category, index) => (
                <Category
                  padding={props.padding + 15}
                  key={index}
                  category={category}
                />
              ))
            : ""}
        </div>
      </div>
    </CategoryStyles>
  );
}