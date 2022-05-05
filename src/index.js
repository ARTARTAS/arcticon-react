import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { getCategories } from "./Firebase";

const root = ReactDOM.createRoot(document.getElementById("root"));

function RenderApp(list) {
  root.render(
    <BrowserRouter>
      <App equipments={list} />
    </BrowserRouter>
  );
}

try {
  getCategories(0).then((list) => {
    RenderApp(list);
  });
} catch (error) {
  RenderApp([]);
}

reportWebVitals();
