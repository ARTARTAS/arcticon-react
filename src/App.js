import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import $ from "jquery";

import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

import Home from "./pages/Home/Home";
import AboutUs from "./pages/AboutUs/AboutUs";
import Services from "./pages/Services/Services";
import ServicesPage from "./pages/ServicesPage/ServicesPage";
import Customers from "./pages/Customers/Customers";
import Partners from "./pages/Partners/Partners";
import Contacts from "./pages/Contacts/Contacts";
import Feedback from "./pages/Feedback/Feedback";
import Projects from "./pages/Projects/Projects";
import Project from "./pages/Project/Project";
import News from "./pages/News/News";
import Equipments from "./pages/Products/Equipments";
import EquipmentList from "./pages/Products/EquipmentsList";
import Products from "./pages/Products/Products";
import Product from "./pages/Products/Product";
import AdminPane from "./pages/AdminPanel/AdminPanel";
import AdminPanel from "./pages/AdminPanel/AdminPanel";

function App(props) {
  let location = useLocation();

  if (location.pathname === "/") $("body").css("overflow", "hidden");
  else $("body").css("overflow", "overlay");

  return (
    <>
      <Header />
      <Routes>
        <Route
          exact
          path=""
          element={
            <Home
              equipments={props.state.equipments}
              services={props.state.services}
            />
          }
        />
        <Route exact path="/about" element={<AboutUs />} />
        <Route
          exact
          path="/services"
          element={<Services services={props.state.services} />}
        />
        <Route
          exact
          path="/services/:name"
          element={<ServicesPage services={props.state.services} />}
        />
        <Route exact path="/customers" element={<Customers />} />
        <Route exact path="/partners" element={<Partners />} />
        <Route exact path="/contacts" element={<Contacts />} />
        <Route exact path="/feedback" element={<Feedback />} />
        <Route exact path="/projects" element={<Projects />} />
        <Route exact path="/project" element={<Project />} />
        <Route exact path="/news" element={<News />} />
        <Route
          exact
          path="/equipments"
          element={<Equipments equipments={props.state.equipments} />}
        />
        <Route
          exact
          path="/equipment-list/:category"
          element={<EquipmentList state={props.state} />}
        />
        <Route
          exact
          path="/products/:subcategory/:category"
          element={<Products state={props.state} />}
        />
        <Route
          exact
          path="/product/:subcategory/:category/:name"
          element={<Product product={props.state.product} />}
        />
        <Route exact path="/admin-panel" element={<AdminPanel />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
