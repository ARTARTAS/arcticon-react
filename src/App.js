import React from "react";
import { Route, Routes } from "react-router-dom";
import AboutUs from "./pages/AboutUs/AboutUs";
import Contacts from "./pages/Contacts/Contacts";
import Customers from "./pages/Customers/Customers";
import Footer from "./pages/Footer/Footer";
import Header from "./pages/Header/Header";
import Home from "./pages/Home/Home";
import Partners from "./pages/Partners/Partners";
import Services from "./pages/Services/Services";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="" element={<Home />} />
        <Route exact path="/about" element={<AboutUs />} />
        <Route exact path="/services" element={<Services />} />
        <Route exact path="/customers" element={<Customers />} />
        <Route exact path="/partners" element={<Partners />} />
        <Route exact path="/contacts" element={<Contacts />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
