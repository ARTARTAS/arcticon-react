import React, { useState } from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

import styled from "styled-components";
import LoginForm from "./LoginForm";

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

    .block {
      width: 100%;

      h1 {
        padding-bottom: 20px;
      }

      .categories {

      }
      .products {

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
        return (
          <div className="categories">
            <h1>Категории</h1>
          </div>
        );
      case "Продукты":
        return (
          <div className="products">
            <h1>Продукты</h1>
            
          </div>
        );
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
                <Button variant="contained">Категории</Button>
                <Button variant="outlined">Продукты</Button>
              </Stack>
            </div>
            <div className="block">{getSection()}</div>
          </div>
        )}
      </div>
    </AdminPanelStyles>
  );
}
