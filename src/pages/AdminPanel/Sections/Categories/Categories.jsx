import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import { getAllCategories, getSubCategories } from "../../../../Firebase";

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
    }
  }
`;

export default function Categories(props) {
  const [categories, setCategories] = useState(null);
  const [subcategories, setSubcategories] = useState([]);

  function addCategory() {
    // props.AddCategory("Добавление категории");
    console.log("add category");
  }

  function addSubcategoryList(e) {
    var category = "";
    var subcategories = null;

    if (e.target.localName == "h2") {
      category = e.target.innerHTML;
      subcategories = e.target
        .closest(".category")
        .querySelector(".subcategories");
    } else if (e.target.className == "main") {
      category = e.target.querySelector("h2").innerHTML;
      subcategories = e.target
        .closest(".category")
        .querySelector(".subcategories");
    }

    if (subcategories != null && category.length > 0) {
      getSubCategories(category).then((result) => {
        var html = `${result.map((subcategory, index) => {
          return `<div key=${index}>${subcategory.name}</div>`;
        })}`.replaceAll(",", "");

        subcategories.innerHTML = html;
      });
    }

    if (category.length != 0) {
    }
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
                <div
                  className="category"
                  key={index}
                  onClick={addSubcategoryList}
                >
                  <div className="main">
                    <div className="data">
                      <h2>{category.name}</h2>
                    </div>
                    <div className="buttons">
                      <Fab
                        size="small"
                        className="button add-category-button"
                        color="primary"
                        variant="extended"
                        onClick={addCategory}
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
                  <div className="subcategories"></div>
                </div>
              ))
            : ""}
        </div>
      </div>
    </CategoriesStyles>
  );
}
