import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home copy/Home";

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
        <Footer />
      </Routes>
    </div>
  );
}

export default App;
