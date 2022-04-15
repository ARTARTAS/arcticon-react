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

import styled from "styled-components";

const AppStyles = styled.div`
@import url(https://fonts.googleapis.com/css?family=Montserrat:regular,300,400,500,600,700);
@import url(https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap);
@import url(https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap);
* {
  padding: 0;
  margin: 0;
  border: 0;
}

*, *:before, *:after {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

:focus, :active {
  outline: none;
}

a:focus, a:active {
  outline: none;
}

nav, footer, header, aside {
  display: block;
}

html, body {
  height: 100%;
  width: 100%;
  font-size: 100%;
  line-height: 1;
  font-size: 14px;
  -ms-text-size-adjust: 100%;
  -moz-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
}

input, button, textarea {
  font-family: inherit;
}

input::-ms-clear {
  display: none;
}

button {
  cursor: pointer;
}

button::-moz-focus-inner {
  padding: 0;
  border: 0;
}

a, a:visited {
  text-decoration: none;
}

a:hover {
  text-decoration: none;
}

ul li {
  list-style: none;
}

img {
  vertical-align: top;
  pointer-events: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

h1, h2, h3, h4, h5, h6 {
  font-size: inherit;
  font-weight: inherit;
}
`;

function App() {
  return (
    <AppStyles>
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
    </AppStyles>
  );
}

export default App;
