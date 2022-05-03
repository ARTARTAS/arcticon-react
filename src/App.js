import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import AboutUs from "./pages/AboutUs/AboutUs";
import Contacts from "./pages/Contacts/Contacts";
import Customers from "./pages/Customers/Customers";
import Feedback from "./pages/Feedback/Feedback";

import Home from "./pages/Home/Home";
import Partners from "./pages/Partners/Partners";
import Services from "./pages/Services/Services";
import ServicesPage from "./pages/ServicesPage/ServicesPage";

import $ from "jquery";
import Projects from "./pages/Projects/Projects";
import Project from "./pages/Project/Project";
import News from "./pages/News/News";
import Products from "./pages/Products/Products";

function App(props) {
  let location = useLocation();
  if (location.pathname === "/") $("body").css("overflow", "hidden");
  else $("body").css("overflow", "visible");

  console.log(props.categories);
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="" element={<Home categories={props.categories} />} />
        <Route exact path="/about" element={<AboutUs />} />
        <Route exact path="/services" element={<Services />} />
        <Route exact path="/service-page" element={<ServicesPage />} />
        <Route exact path="/customers" element={<Customers />} />
        <Route exact path="/partners" element={<Partners />} />
        <Route exact path="/contacts" element={<Contacts />} />
        <Route exact path="/feedback" element={<Feedback />} />
        <Route exact path="/projects" element={<Projects />} />
        <Route exact path="/project" element={<Project />} />
        <Route exact path="/news" element={<News />} />
        <Route exact path="/products" element={<Products categories={props.categories} />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
