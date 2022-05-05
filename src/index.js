import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { getCategories } from "./Firebase";

const root = ReactDOM.createRoot(document.getElementById("root"));

const state = {
  equipments: null,
  products: null,
  product: null
};

function RenderApp(state) {
  root.render(
    <BrowserRouter>
      <App state={state} />
    </BrowserRouter>
  );
}

try {
  getCategories(0).then((list) => {
    state.equipments = list;
    RenderApp(state);
  });
} catch (error) {
  RenderApp([]);
}

reportWebVitals();
