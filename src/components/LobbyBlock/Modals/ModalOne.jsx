import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

import modalBackgroundImg from "./../../../assets/img/MainPage/ModalOne/background.png";
import modalFrontImg from "./../../../assets/img/MainPage/ModalOne/front.png";
import modalBackImg from "./../../../assets/img/MainPage/ModalOne/back.svg";

const ModalOneStyles = styled.div`
  .modal__one {
    display: none;
    z-index: -1;
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100vw;
    min-height: 100vh;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    overflow: hidden;
    overflow-y: scroll;
    background: linear-gradient(0deg, #000000 -2.88%, rgba(0, 0, 0, 0) 50%),
      #1d1d1d;

    .modal_close-button {
      position: absolute;
      -ms-flex-item-align: end;
      align-self: flex-end;
      margin-bottom: 40px;
      right: 32px;
      top: 32px;
      width: 32px;
      height: 32px;
      opacity: 0.5;
      z-index: 101;
      cursor: pointer;

      &:hover {
        opacity: 1;
      }
      &:before,
      &:after {
        position: absolute;
        left: 15px;
        content: " ";
        height: 33px;
        width: 2px;
        background-color: #ffc729;
      }
      &:before {
        -webkit-transform: rotate(45deg);
        transform: rotate(45deg);
      }
      &:after {
        -webkit-transform: rotate(-45deg);
        transform: rotate(-45deg);
      }
    }

    .line {
      position: absolute;
      left: 50px;
      top: 0px;
      height: 300px;
      width: 3px;
      background-color: white;

      @media (max-width: 479.98px) {
        height: 100px;
      }
    }

    .block {
      height: 100%;
      width: 100%;
      display: -ms-grid;
      display: grid;
      grid-gap: 50px;

      @media (max-width: 767.98px) {
        grid-template-columns: 1fr;
        grid-gap: 0px;
      }

      &__image {
        height: 100%;
        position: relative;
        -ms-grid-column: 1;
        -ms-grid-column-span: 1;
        grid-column: 1/2;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;

        @media (max-width: 767.98px) {
          height: 800px;
          -ms-grid-row: 1;
          -ms-grid-row-span: 1;
          grid-row: 1/2;
        }

        @media (max-width: 767.98px) {
          height: 800px;
          -ms-grid-row: 1;
          -ms-grid-row-span: 1;
          grid-row: 1/2;
        }

        @media (max-width: 479.98px) {
          height: 400px;
        }

        img {
          width: 100%;
        }

        .modal__one_front {
          position: absolute;
          width: 120%;
          margin-left: 20px;
          margin-bottom: 80%;
          z-index: 3;

          @media (max-width: 767.98px) {
            top: 0;
            width: 400px;
            margin-left: 0;
            margin-bottom: 0;
          }

          @media (max-width: 479.98px) {
            top: -20px;
            width: 200px;
          }
        }

        .modal__one_background {
          position: absolute;
          width: 200%;
          padding-top: 120%;
          left: -30%;
          z-index: 1;

          @media (max-width: 767.98px) {
            width: 600px;
            left: auto;
            padding-top: 400px;
            padding-left: 80px;
          }

          @media (max-width: 479.98px) {
            padding-top: 200px;
            width: 400px;
          }
        }

        .back {
          position: absolute;
          width: 100%;
          height: 400px;
          margin-bottom: 100%;
          left: -10%;
          z-index: 2;

          @media (max-width: 767.98px) {
            top: 0px;
            left: auto;
            margin-bottom: 0;
          }

          @media (max-width: 479.98px) {
            width: auto;
            height: 200px;
          }
        }
      }
      &__info {
        height: 100%;
        -ms-grid-column: 2;
        -ms-grid-column-span: 2;
        grid-column: 2/4;
        color: white;
        font-family: "Montserrat", sans-serif;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        padding-left: 100px;

        @media (max-width: 1199.98px) {
          padding-left: 80px;
        }

        @media (max-width: 991.98px) {
          padding-left: 60px;
        }
        @media (max-width: 767.98px) {
          -ms-grid-column: 1;
          -ms-grid-column-span: 1;
          grid-column: 1/2;
          -ms-grid-row: 2;
          -ms-grid-row-span: 1;
          grid-row: 2/3;
          padding-left: 0;
        }

        &_title {
          padding-bottom: 50px;

          @media (max-width: 1199.98px) {
            padding-bottom: 40px;
          }

          @media (max-width: 991.98px) {
            padding-bottom: 30px;
          }

          @media (max-width: 767.98px) {
            padding-bottom: 25px;
          }

          @media (max-width: 479.98px) {
            padding-bottom: 20px;
          }

          h1 {
            font-weight: 500;
            font-size: 48px;

            @media (max-width: 1199.98px) {
              font-size: 38px;
            }

            @media (max-width: 991.98px) {
              font-size: 30px;
            }

            @media (max-width: 767.98px) {
              font-size: 20px;
            }

            @media (max-width: 479.98px) {
              font-size: 18px;
            }
          }
        }

        &_text {
          padding-bottom: 50px;

          @media (max-width: 1199.98px) {
            padding-bottom: 40px;
          }

          @media (max-width: 991.98px) {
            padding-bottom: 30px;
          }

          @media (max-width: 767.98px) {
            padding-bottom: 25px;
          }

          @media (max-width: 479.98px) {
            padding-bottom: 20px;
          }

          p {
            padding: 20px 0px;
            font-weight: 300;
            font-size: 16px;
            line-height: 130%;

            @media (max-width: 1199.98px) {
              font-size: 15px;
              padding: 18px 0px;
            }

            @media (max-width: 991.98px) {
              font-size: 14px;
              padding: 16px 0px;
            }

            @media (max-width: 767.98px) {
              font-size: 13px;
              padding: 14px 0px;
            }

            @media (max-width: 479.98px) {
              font-size: 12px;
              padding: 10px 0px;
            }
          }
        }

        .buttons {
          display: flex;
          -webkit-box-pack: justify;
          -ms-flex-pack: justify;
          justify-content: space-between;
          -webkit-column-gap: 10px;
          column-gap: 10px;

          @media (max-width: 767.98px) {
            height: fit-content;
            -webkit-box-orient: vertical;
            -webkit-box-direction: normal;
            -ms-flex-direction: column;
            flex-direction: column;
            width: 200px;
            row-gap: 20px;
            margin-bottom: 50px;
          }

          .button {
            width: 100%;
            height: 100%;
            display: flex;
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            justify-content: center;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            color: white;
            font-weight: 400;
            font-size: 18px;
            text-transform: uppercase;
            border: 1px solid white;
            -webkit-transition: all 0.2s ease-in-out;
            transition: all 0.2s ease-in-out;
            min-width: fit-content;
            padding: 0px 5px;
            height: 50px;

            &:hover {
              color: black;
              border: 1px solid #ffc729;
              background: #ffc729;
            }

            @media (max-width: 1199.98px) {
              font-size: 16px;
              height: 40px;
            }

            @media (max-width: 991.98px) {
              font-size: 14px;
              height: 30px;
            }

            @media (max-width: 767.98px) {
              font-size: 13px;
              height: 25px;
            }

            @media (max-width: 479.98px) {
              font-size: 12px;
            }
          }
        }
      }
    }
  }
`;

export default function ModalOne() {
  return (
    <ModalOneStyles>
      <section className="modal__one">
        <div className="modal_close-button"></div>
        <div className="line"></div>
        <div className="container">
          <div className="block">
            <div className="block__image">
              <img
                className="modal__one_front"
                src={modalFrontImg}
                alt="front image"
              />
              <img
                className="modal__one_background"
                src={modalBackgroundImg}
                alt="background iamge"
              />
              <img className="back" src={modalBackImg} alt="svg" />
            </div>
            <div className="block__info">
              <div className="block__info_title">
                <h1>ООО «Артик Энергострой» </h1>
              </div>
              <div className="block__info_text">
                <p>
                  Предоставляет полный комплекс услуг по проектированию, сборке,
                  поставке, внедрению и сопровождению автоматизированных систем
                  управления технологическими процессами (АСУТП) любой
                  сложности, включая подсистемы противоаварийной и
                  противопожарной защиты, системы управления энергообеспечением,
                  системы телемеханики, локальные системы управления блочным
                  оборудованием, производственно-диспетчерские службы и пр.
                </p>
                <p>
                  Компания является официальным поставщиком таких компаний как
                  Cisco, Lenovo, Emerson и др., а так же имеет опыт реализации
                  крупных проектов для таки Заказчиков как ООО ИК «СИБИНТЕК»
                  (Изготовление и поставка программно-технического комплекса
                  автоматизированной системы управления с проведением
                  шеф-монтажных и пусконаладочных работ для центрального пункта
                  сбора нефти Куюмбинского нефтегазоконденсатного
                  месторождения), АО «Мурманский морской торговый порт»
                  (Поставка коммутационного оборудования) и др.
                </p>
                <p>
                  С более подробной информацией об опыте Компании, оборудовании
                  предоставляемых услугах Вы сможете ознакомится в разделах
                  сайта (идет активная ссылка на разделы):
                </p>
              </div>
              <div className="buttons">
                <NavLink className="button" to="/equipments">
                  ПРОДУКЦИЯ
                </NavLink>
                <NavLink className="button" to="/services">
                  УСЛУГИ И СЕРВИС
                </NavLink>
                <NavLink className="button" to="/projects">
                  Проекты
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ModalOneStyles>
  );
}
