import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import AboutUs from "./pages/AboutUs/AboutUs";
import Contacts from "./pages/Contacts/Contacts";
import Customers from "./pages/Customers/Customers";

import Home from "./pages/Home/Home";
import Partners from "./pages/Partners/Partners";
import Services from "./pages/Services/Services";
import ServicesPage from "./pages/ServicesPage/ServicesPage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="" element={<Home />} />
        <Route exact path="/about" element={<AboutUs />} />
        <Route exact path="/services" element={<Services />} />
        <Route exact path="/service-page" element={<ServicesPage />} />
        <Route exact path="/customers" element={<Customers />} />
        <Route exact path="/partners" element={<Partners />} />
        <Route exact path="/contacts" element={<Contacts />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
