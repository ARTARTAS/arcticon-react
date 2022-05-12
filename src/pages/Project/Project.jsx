import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

import ExtraMenu from "../../components/ExtraMenu/ExtraMenu";

import arrow from "./../../assets/svg/arrowBlack.svg";

const ProjectStyles = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Montserrat", sans-serif;

  .container {
    position: relative;
    margin: 0px 50px;
    max-width: 1200px;
    height: 100%;
    width: 100%;

    @media (max-width: 767.98px) {
      margin: 0px 30px;
    }
    @media (max-width: 479.98px) {
      margin: 0px 20px;
    }
  }

  .block {
    height: 100%;
    width: 100%;
    padding-top: 100px;

    @media (max-width: 1199.98px) {
      padding-top: 80px;
    }
    @media (max-width: 1991.98px) {
      padding-top: 70px;
    }
    @media (max-width: 767.98px) {
      padding-top: 55px;
    }
    @media (max-width: 479.98px) {
      padding-top: 40px;
    }

    &__title {
      margin-bottom: 40px;

      h1 {
        font-weight: 600;
        font-size: 48px;

        @media (max-width: 1199.98px) {
          font-size: 35px;
        }
        @media (max-width: 1991.98px) {
          font-size: 25px;
        }
        @media (max-width: 767.98px) {
          font-size: 22px;
        }
        @media (max-width: 479.98px) {
          font-size: 20px;
        }
      }
    }
    &__page-nav {
      padding-bottom: 50px;

      ul {
        display: flex;
        align-items: center;
        padding: 10px 0px;
        height: fit-content;

        li {
          margin-right: 10px;
          display: flex;
          justify-content: center;
          align-items: center;

          .button {
            font-weight: 400;
            font-size: 16px;
            cursor: pointer;

            &:hover {
              color: rgb(212, 212, 212);
            }

            @media (max-width: 1991.98px) {
              font-size: 14px;
            }
            @media (max-width: 767.98px) {
              font-size: 13px;
            }
            @media (max-width: 479.98px) {
              font-size: 12px;
            }
          }
          .icon {
            width: 22px;
            height: 10px;
          }
        }
        li:last-child {
          margin-right: 0;
        }

        .to-left {
          transform: rotate(180deg);
        }
      }
    }
    &__list {
      ul {
        li {
          font-weight: 400;
          font-size: 20px;
          padding: 10px 0px;
          line-height: 130%;
          list-style: inside;

          @media (max-width: 1199.98px) {
            font-size: 18px;
            padding: 8px 0px;
          }
          @media (max-width: 1991.98px) {
            font-size: 14px;
            padding: 6px 0px;
          }
          @media (max-width: 767.98px) {
            font-size: 12px;
            padding: 5px 0px;
          }
          @media (max-width: 479.98px) {
            font-size: 10px;
            padding: 4px 0px;
          }
        }
      }
    }
  }
`;

export default function Project(props) {
  window.scrollTo(0, 0);
  return (
    <ProjectStyles>
      <div className="container">
        <div className="block">
          <div className="block__title">
            <h1>Реализованные проекты</h1>
          </div>
          <div className="block__page-nav">
            <nav>
              <ul>
                <li>
                  <NavLink className="button" to={"/"}>
                    Главная
                  </NavLink>
                </li>
                <li>
                  <img className="icon" src={arrow} alt="" />
                </li>
                <li>
                  <NavLink
                    className="button"
                    to="/projects"
                    onClick={props.back}
                  >
                    Реализованные проекты
                  </NavLink>
                </li>
                <li>
                  <img className="icon" src={arrow} alt="" />
                </li>
                <li>
                  <a src="#" className="button">
                    ООО «ЗапСибНефтехим»
                  </a>
                </li>
              </ul>
              <ul>
                <li className="to-left">
                  <img className="icon" src={arrow} alt="" />
                </li>
                <li>
                  <NavLink
                    className="button"
                    to="/projects"
                    onClick={props.back}
                  >
                    Назад
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
          <div className="block__list">
            <ul>
              {props.project[0].list.map((text, index) => (
                <li key={index}>{text}</li>
              ))}
            </ul>
          </div>
          <ExtraMenu></ExtraMenu>
        </div>
      </div>
    </ProjectStyles>
  );
}
