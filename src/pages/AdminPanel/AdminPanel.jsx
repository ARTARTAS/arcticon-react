import React, { useState } from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

import styled from "styled-components";
import LoginForm from "./LoginForm";
import Categories from "./Sections/Categories/Categories";
import Products from "./Sections/Products/Products";
import AddCategory from "./Sections/Categories/AddCategory";
import AddProduct from "./Sections/Products/AddProduct";

const AdminPanelStyles = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  min-height: 100vh;
  padding: 50px 0px;

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

  .admin-panel {
    width: 100%;

    h1 {
      font-family: "Montserrat", sans-serif;
      font-size: 30px;
    }

    .navigation {
      width: 100%;
      padding: 30px 0px;

      .active {
        background: #d3d3e2;
      }
    }
  }
`;

export default function AdminPanel() {
  const [isAutorised, setAutorised] = useState(false);
  const [section, setSection] = useState("Категории");

  function getSection() {
    switch (section) {
      case "Категории":
        return <Categories AddCategory={setSection} />;
      case "Добавление категории":
        return <AddCategory />;
      case "Продукты":
        return <Products AddProduct={setSection} />;
        case "Добавление продукта":
        return <AddProduct />
    }
  }

  return (
    <AdminPanelStyles>
      <div className="container">
        {isAutorised == false ? (
          <LoginForm setAutorised={setAutorised} />
        ) : (
          <div className="admin-panel">
            <h1>Привет, дорогой администратор!</h1>
            <div className="navigation">
              <Stack direction="row" spacing={2}>
                <Button
                  variant={
                    section === "Категории" ||
                    section === "Добавление категории"
                      ? "contained"
                      : "outlined"
                  }
                  onClick={() => {
                    setSection("Категории");
                  }}
                >
                  Категории
                </Button>
                <Button
                  variant={section === "Продукты" ? "contained" : "outlined"}
                  onClick={() => setSection("Продукты")}
                >
                  Продукты
                </Button>
              </Stack>
            </div>
            <div className="block">{getSection()}</div>
          </div>
        )}
      </div>
    </AdminPanelStyles>
  );
}
