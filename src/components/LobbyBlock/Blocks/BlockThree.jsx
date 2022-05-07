import React, { useEffect } from "react";
import $ from "jquery";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

import button from "./../../../assets/svg/arrowOrangeWithCircle.svg";
import backImg from "./../../../assets/img/MainPage/BlockOne/ThreeSection/back.png";
import frontImg from "./../../../assets/img/MainPage/BlockOne/ThreeSection/front.png";
import modalBackImg from "./../../../assets/img/MainPage/ModalThree/back.svg";
import modalFrontImg from "./../../../assets/img/MainPage/ModalThree/front.png";

const BlockTwoStyles = styled.div`
  .one__three {
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    display: none;
    justify-content: center;
    align-items: center;
    background-color: #0c0c0c;

    @media (max-width: 767.98px) {
      flex-direction: column;
    }

    .container {
      @media (max-width: 767.98px) {
        height: fit-content;
      }
    }

    &_block {
      height: 100%;
      width: 100%;
      display: flex;
      align-items: center;

      @media (max-width: 767.98px) {
        height: fit-content;
        padding: 0px 20px;
        margin-top: 60px;
        padding-top: 50px;
      }

      .info {
        height: fit-content;
        width: 40%;
        font-family: "Montserrat", sans-serif;
        z-index: 3;

        @media (max-width: 991.98px) {
          width: 45%;
        }
        @media (max-width: 767.98px) {
          width: 100%;
        }

        h1 {
          color: #ffd600;
          font-weight: 800;
          text-transform: uppercase;
          line-height: 125%;
          font-size: 48px;
          padding-bottom: 50px;
          padding-left: 50px;
          opacity: 0;

          @media (max-width: 1199.98px) {
            font-size: 40px;
          }
          @media (max-width: 991.98px) {
            font-size: 30px;
          }
          @media (max-width: 767.98px) {
            font-size: 27px;
            padding-left: 20px;
          }
          @media (max-width: 479.98px) {
            font-size: 20px;
          }
        }

        h2 {
          font-size: 25px;
          line-height: 125%;
          color: #ffffff;
          padding-bottom: 50px;
          text-transform: uppercase;
          opacity: 0;

          @media (max-width: 1199.98px) {
            font-size: 20px;
            line-height: 24px;
          }
          @media (max-width: 991.98px) {
            font-size: 16px;
            line-height: 20px;
          }
          @media (max-width: 767.98px) {
            font-size: 14px;
            line-height: 17px;
          }
          @media (max-width: 479.98px) {
            font-size: 12px;
            line-height: 15px;
          }
        }

        a {
          width: fit-content;
          font-weight: 600;
          color: #ffc729;
          font-size: 18px;
          padding-left: 50px;
          display: flex;
          justify-content: center;
          align-items: center;
          transition: 0.2s ease-in-out;
          opacity: 0;

          &:hover {
            color: white;
            margin-left: 10px;

            svg {
              margin-left: 10px;
            }
          }

          @media (max-width: 1199.98px) {
            font-size: 16px;
          }
          @media (max-width: 991.98px) {
            font-size: 14px;
          }
          @media (max-width: 767.98px) {
            font-size: 13px;
            padding-left: 20px;
          }
          @media (max-width: 479.98px) {
            font-size: 12px;
          }

          .icon {
            fill: none;
            width: 51px;
            height: 54px;

            @media (max-width: 1199.98px) {
              width: 48px;
              height: 51px;
            }
            @media (max-width: 991.98px) {
              width: 45px;
              height: 48px;
            }
            @media (max-width: 767.98px) {
              width: 42px;
              height: 45px;
            }
          }

          svg {
            margin-left: 5px;
            transition: 0.2s ease-in-out;
          }
        }
      }
    }

    .images {
      @media (max-width: 991.98px) {
        display: flex;
        justify-content: center;
        align-items: center;
      }
      @media (max-width: 767.98px) {
        position: relative;
        height: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
      }
      .back {
        position: absolute;
        top: 120px;
        width: 100%;
        right: -100%;
        max-width: none;

        @media (max-width: 991.98px) {
          top: auto;
          // height: 100%;
          width: auto;
        }
      }
      .front {
        position: absolute;
        height: 70%;
        top: 25%;
        right: -100%;
        max-width: none;

        @media (max-width: 1199.98px) {
          right: 0px;
        }

        @media (max-width: 991.98px) {
          height: 50%;
          top: 34%;
        }
        @media (max-width: 767.98px) {
          top: 0;
          height: 90%;
        }
      }
    }
  }
`;

export default function BlockThree(props) {
  const animationTime = props.animationTime;
  const windowWidth = $(window).width();

  // media points
  const md1 = 1199.98;

  function show() {
    $("body").css({
      overflowY: "visible",
    });
    $(".one__three_block .info a").on("click", function () {
      $(".modal__three").css("z-index", "100");
      $(".modal__three").animate({ opacity: 1 }, 500);
      $(".modal__three").css("display", "flex");
      $(".wrapper").css("overflow", "visible");
      $("body").css("overflow", "hidden");
      window.onwheel = () => {};
      window.ontouchstart = () => {};
      window.ontouchend = () => {};
    });
    // Modal close button
    $(".modal__three .modal_close-button").on("click", function () {
      $(".modal__three").animate({ opacity: 0 }, 500, function () {
        $(".modal__three").css("display", "none");
        $(".wrapper").css("overflow", "hidden");
      });
      props.scrollSetting();
      $("body").css({
        overflowY: "visible",
      });
    });
    $(".one__three").css("display", "flex");
    // Show info block
    $(".one__three_block .info")
      .children()
      .each(function (position) {
        if (position == 2) {
          $(this).animate({ opacity: 1 }, animationTime - 200);
        } else {
          $(this)
            .delay(position * 200)
            .animate({ opacity: 1 }, animationTime);
        }
      });
    // Show images
    // Front
    if (windowWidth < md1) {
      $(".one__three .images .front").delay(100).animate({ right: 0 }, 500);
    } else {
      $(".one__three .images .front").animate({ right: "5%" }, 500);
    }
    // Back
    $(".one__three .images .back").animate({ right: 0 }, 500);
  }

  useEffect(() => {
    show();
  }, []);

  return (
    <BlockTwoStyles>
      <section className="one__three">
        <div className="container">
          <div className="one__three_block">
            <div className="info">
              <h1>Решения</h1>
              <h2>для топливно-энергетического комплекса</h2>
              <a href="#">
                Подробнее
                <img className="icon" src={button} alt="" />
              </a>
            </div>
          </div>
        </div>
        <div className="images">
          <img className="back" src={backImg} alt="" />
          <img className="front" src={frontImg} alt="" />
        </div>
      </section>
      <section className="modal__three">
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
              <img className="back" src={modalBackImg} alt="svg" />
            </div>
            <div className="block__info">
              <div className="block__info_text">
                <p>
                  Существенную часть портфеля заказов ООО « Арктик Энергострой»
                  формируют крупнейшие компании топливно-энергетического
                  комплекса России, такие как: ПАО «СИБУР Холдинг»,
                  Госкорпорация «Росатом», ООО «Славнефть-Красноярскнефтегаз»,
                  ПАО «ЯТЭК», ООО «ЗАРУБЕЖНЕФТЬ-добыча Харьяга», ПАО
                  «Криогенмаш», АО «РОСАН ИНТЕРНЕШНЛ», АО «Ангарская
                  нефтехимическая компания».
                </p>
                <p>
                  За время деятельности нами запроектировано, поставлено,
                  смонтировано и введено в эксплуатацию в различных регионах
                  страны, в том числе в районах крайнего севера с суровыми
                  климатическими условиями, такое оборудование, как:
                </p>
                <ul>
                  <li>емкостное и теплообменное оборудование</li>
                  <li>запорно-регулирующая арматура</li>
                  <li>контрольно-пропускные пункты</li>
                  <li>терминалы мобильной связи</li>
                  <li>сетевое и коммутационное оборудование</li>
                  <li>взрывозащищенное оборудование</li>
                  <li>газоанализаторы</li>
                  <li>контрольно-измерительные приборы и автоматика</li>
                  <li>кабельная арматуры и муфты</li>
                  <li>кабельнесущие системы</li>
                  <li>кабельно-проводниковая продукция</li>
                  <li>стальные опоры</li>
                  <li>электрощитовое оборудование</li>
                  <li>источники бесперебойного питания</li>
                  <li>вентиляционное оборудование</li>
                  <li>частотные преобразователи</li>
                  <li>трансформаторы и трансформаторные подстанции</li>
                  <li>котельное оборудование</li>
                  <li>оборудование для крепления скважин и прочее</li>
                </ul>
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
    </BlockTwoStyles>
  );
}
