import React from "react";
import img1 from "./../../assets/svg/home/details_black.svg";
import translitRusEng from "translit-rus-eng";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import ExtraMenu from "../../components/ExtraMenu/ExtraMenu";

const ServicesStyles = styled.div`
  .container {
    position: relative;
    margin: 0px 50px;
    max-width: 1200px;
    height: 100%;
    width: 100%;
  }

  @media (max-width: 767.98px) {
    .container {
      margin: 0px 30px;
    }
  }

  @media (max-width: 479.98px) {
    .container {
      margin: 0px 20px;
    }
  }

  section {
    width: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    background: #e5e5e5;
    font-family: "Montserrat", sans-serif;
    padding: 0px 50px;
  }

  @media (max-width: 767.98px) {
    section {
      padding: 0px 20px;
    }
  }

  section .title {
    width: 100%;
    padding-top: 100px;
  }

  @media (max-width: 1199.98px) {
    section .title {
      padding-top: 80px;
    }
  }

  @media (max-width: 991.98px) {
    section .title {
      padding-top: 70px;
    }
  }

  @media (max-width: 767.98px) {
    section .title {
      padding-top: 50px;
    }
  }

  section .title h1 {
    font-weight: 700;
    font-size: 35px;
  }

  @media (max-width: 1199.98px) {
    section .title h1 {
      font-size: 30px;
    }
  }

  @media (max-width: 991.98px) {
    section .title h1 {
      font-size: 25px;
    }
  }

  section .pallet {
    width: 100%;
    padding: 50px 0px;
  }

  section .pallet__grid {
    width: 100%;
    display: -ms-grid;
    display: grid;
    position: relative;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 30px;
    grid-auto-rows: -webkit-min-content;
    grid-auto-rows: min-content;
  }

  @media (max-width: 991.98px) {
    section .pallet__grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 479.98px) {
    section .pallet__grid {
      -ms-grid-columns: 1fr;
      grid-template-columns: 1fr;
    }
  }

  section .pallet__grid_section {
    position: relative;
    background: #ffffff;
    -webkit-transition: all 0.5s ease-in-out;
    transition: all 0.5s ease-in-out;
    margin: 2px;
    z-index: 4;
    min-height: 200px;
    transition: all 0.1s ease-in-out;

    &::before {
      content: "";
      z-index: 2;
      position: absolute;
      top: -2px;
      left: -2px;
      height: 50px;
      width: 50px;
      background: #ffd600;
    }

    &::after {
      content: "";
      z-index: 2;
      position: absolute;
      right: -2px;
      bottom: -2px;
      height: 50px;
      width: 50px;
      background: #ffd600;
    }

    .block {
      position: relative;
      padding: 30px;
      background: #ffffff;
      z-index: 10;
      min-height: 200px;
      transition: all 0.2s ease-in-out;

      @media (max-width: 1199.98px) {
        padding: 25px;
      }
      @media (max-width: 991.98px) {
        padding: 20px;
      }
    }
  }

  @media (max-width: 1199.98px) {
    section .pallet__grid_section {
      padding: 25px;
      min-height: 170px;
    }
  }

  @media (max-width: 991.98px) {
    section .pallet__grid_section {
      padding: 20px;
      min-height: 100px;
    }
  }

  section .pallet__grid_section:hover {
    background: #ffd600;
    z-index: 12;
  }

  section .pallet__grid_section:hover .block {
    z-index: 12;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    min-height: 200px;
    height: fit-content;
    background: #ffd600;
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }

  @media (max-width: 1199.98px) {
    section .pallet__grid_section:hover .block {
      padding: 25px;
      min-height: 100px;
    }
  }

  @media (max-width: 991.98px) {
    section .pallet__grid_section:hover .block {
      padding: 20px;
    }
  }

  section .pallet__grid_section:hover .block__title a {
    display: block;
  }

  section .pallet__grid_section:hover .block__title_line {
    display: block;
  }

  section .pallet__grid_section:hover .block__info {
    display: block;
  }

  section .pallet__grid_section .block__title {
    position: relative;
    display: flex;
    width: fit-content;
    align-items: center;
    max-width: 100%;
    -webkit-transition: all 0.2s ease-in-out;
    transition: all 0.2s ease-in-out;
  }

  section .pallet__grid_section .block__title h1 {
    font-weight: 700;
    font-size: 22px;
    padding: 0px 0px 30px 0px;
    line-height: 130%;
    width: fit-content;
  }

  @media (max-width: 1199.98px) {
    section .pallet__grid_section .block__title h1 {
      font-size: 16px;
    }
  }

  @media (max-width: 991.98px) {
    section .pallet__grid_section .block__title h1 {
      font-size: 10px;
    }
  }

  @media (max-width: 767.98px) {
    section .pallet__grid_section .block__title h1 {
      font-size: 12px;
    }
  }

  section .pallet__grid_section .block__title a {
    display: none;
    padding-left: 15px;
    -webkit-transition: all 0.2s ease-in-out;
    transition: all 0.2s ease-in-out;
  }

  section .pallet__grid_section .block__title a:hover {
    transform: scale(1.1);
  }

  section .pallet__grid_section .block__title a .icon {
    fill: none;
    width: 40px;
    height: 40px;
    margin: 0px 0px 30px 0px;
  }

  @media (max-width: 1199.98px) {
    section .pallet__grid_section .block__title a .icon {
      width: 46px;
      height: 49px;
    }
  }

  @media (max-width: 991.98px) {
    section .pallet__grid_section .block__title a .icon {
      width: 29px;
      height: 32px;
    }
  }

  @media (max-width: 767.98px) {
    section .pallet__grid_section .block__title a .icon {
      width: 27px;
      height: 40px;
    }
  }

  section .pallet__grid_section .block__title_line {
    display: none;
    position: absolute;
    width: 100%;
    height: 2px;
    background: black;
    bottom: 0px;
    -webkit-transition: all 0.5s ease-in-out;
    transition: all 0.5s ease-in-out;
    margin: 0px 0px 15px 0px;
  }

  section .pallet__grid_section .block__info {
    display: none;
    -webkit-transition: all 0.5s ease-in-out;
    transition: all 0.5s ease-in-out;
  }

  section .pallet__grid_section .block__info p {
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
  }

  @media (max-width: 1199.98px) {
    section .pallet__grid_section .block__info p {
      font-size: 12px;
    }
  }

  @media (max-width: 991.98px) {
    section .pallet__grid_section .block__info p {
      font-size: 8px;
    }
  }
`;

export default function Services(props) {
  window.scrollTo(0, 0);
  return (
    <ServicesStyles>
      <section>
        <div className="container">
          <div className="title">
            <h1>Услуги и сервис</h1>
          </div>
          <div className="pallet">
            <div className="pallet__grid">
              {props.services.map((service, index) => (
                <div className="pallet__grid_section" key={index}>
                  <div className="block">
                    <div className="block__title">
                      <h1>{service.name}</h1>
                      <NavLink
                        to={`/services/${translitRusEng(service.name, {
                          slug: true,
                        })}`}
                        service={service}
                      >
                        <img className="icon" src={img1} alt="" />
                      </NavLink>
                      <div className="block__title_line"></div>
                    </div>
                    <div className="block__info">
                      <p>{service.title}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <ExtraMenu></ExtraMenu>
        </div>
      </section>
    </ServicesStyles>
  );
}
