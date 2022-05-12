import React, { useState, useEffect } from "react";
import arrow from "./../../assets/svg/services/arrow.svg";

import styled from "styled-components";
import { NavLink, useParams } from "react-router-dom";
import ExtraMenu from "../../components/ExtraMenu/ExtraMenu";

const ServicesPageStyles = styled.div`
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

  .navigation {
    width: 100%;
    display: flex;
    gap: 50px;
    margin-bottom: 40px;
    .path {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 20px;
      font-family: "Montserrat", sans-serif;

      ul {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        gap: 20px;

        li {
          display: flex;
          align-items: center;
          width: fit-content;

          .button {
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 15px;
            font-size: 16px;

            &:visited {
              color: black;
            }

            img {
              height: 40%;
              width: 25px;
            }
          }
          .this {
            background: none;
            font-weight: 600;
          }
        }
      }
      .back {
        width: fit-content;
        &_button {
          font-size: 16px;
          background: none;
          display: flex;
          color: black;
          align-items: center;
          gap: 15px;

          .icon {
            transform: rotate(180deg);
            height: 40%;
            width: 25px;
          }
        }
      }
    }
  }

  section {
    width: 100%;
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
    font-family: "Montserrat", sans-serif;
    padding: 0px 50px;
  }

  @media (max-width: 767.98px) {
    section {
      padding: 0px 20px;
    }
  }

  section .block__title {
    padding: 80px 0px 50px 0px;
  }

  section .block__title h1 {
    font-weight: 700;
    font-size: 35px;
    text-transform: uppercase;
  }

  @media (max-width: 1199.98px) {
    section .block__title h1 {
      font-weight: 600;
    }
  }

  @media (max-width: 991.98px) {
    section .block__title h1 {
      font-size: 25px;
    }
  }

  @media (max-width: 767.98px) {
    section .block__title h1 {
      font-size: 22px;
    }
  }

  @media (max-width: 479.98px) {
    section .block__title h1 {
      font-size: 20px;
    }
  }

  section .block__page-nav {
    padding-bottom: 50px;
  }

  section .block__page-nav ul {
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    padding: 10px 0px;
    height: fit-content;
  }

  section .block__page-nav ul li {
    margin-right: 10px;
  }

  section .block__page-nav ul li a {
    font-weight: 400;
    font-size: 16px;
  }

  section .block__page-nav ul li a:hover {
    color: #d4d4d4;
  }

  @media (max-width: 991.98px) {
    section .block__page-nav ul li a {
      font-size: 14px;
    }
  }

  @media (max-width: 767.98px) {
    section .block__page-nav ul li a {
      font-size: 13px;
    }
  }

  @media (max-width: 479.98px) {
    section .block__page-nav ul li a {
      font-size: 12px;
    }
  }

  section .block__page-nav ul li .icon {
    width: 22px;
    height: 10px;
  }

  section .block__page-nav ul li:last-child {
    margin-right: 0;
  }

  section .block__page-nav ul .to-left {
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg);
  }

  section .block__info {
    div {
      display: flex;
      flex-direction: column;
      gap: 20px;
      ul {
        display: flex;
        flex-direction: column;
        gap: 5px;
        li {
          font-size: 16px;
          font-weight: 400;
          line-height: 130%;
        }
      }
      ul.inside {
        li {
          list-style: circle;
          list-style-position: inside;
        }
      }
    }
  }

  section .block__info p {
    font-size: 20px;
    font-weight: 400;
    line-height: 130%;
  }

  @media (max-width: 1199.98px) {
    section .block__info p {
      font-size: 18px;
    }
  }

  @media (max-width: 991.98px) {
    section .block__info p {
      font-size: 14px;
    }
  }

  @media (max-width: 767.98px) {
    section .block__info p {
      font-size: 12px;
    }
  }

  @media (max-width: 479.98px) {
    section .block__info p {
      font-size: 10px;
    }
  }
`;

export default function ServicesPage(props) {
  const [service, setService] = useState(null);

  let { name } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
    if (service == null) {
      const data = props.services.find((x) => x.link == name);
      setService(data);
    }
  }, []);

  return (
    <ServicesPageStyles>
      <section>
        <div className="container">
          <div className="block">
            <div className="block__title">
              <h1>{service != null ? service.name : ""}</h1>
            </div>
            <div className="navigation">
              <div className="path">
                <ul>
                  <li>
                    <NavLink className="button" to="/">
                      Главная <img className="icon" src={arrow} alt="" />
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="button" to="/services">
                      Услуги и сервис
                      <img className="icon" src={arrow} alt="" />
                    </NavLink>
                  </li>
                  <li>
                    <button className="button this">
                      {service != null ? service.name : ""}
                    </button>
                  </li>
                </ul>
                <div className="back">
                  <NavLink className="back_button" to="/services">
                    <img className="icon" src={arrow} alt="" />
                    Назад
                  </NavLink>
                </div>
              </div>
            </div>

            <div className="block__info">
              {service != null ? service.data : ""}
            </div>

            <ExtraMenu></ExtraMenu>

          </div>
        </div>
      </section>
    </ServicesPageStyles>
  );
}
