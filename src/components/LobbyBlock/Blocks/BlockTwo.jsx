import React, { useEffect } from "react";
import $ from "jquery";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

import button from "./../../../assets/svg/arrowOrangeWithCircle.svg";
import backImg from "./../../../assets/img/MainPage/BlockOne/SecondSection/back.png";
import frontImg from "./../../../assets/img/MainPage/BlockOne/SecondSection/front.png";
import modalBackImg from "./../../../assets/img/MainPage/ModalTwo/back.svg";
import modalFrontImg from "./../../../assets/img/MainPage/ModalTwo/front.png";

const BlockTwoStyles = styled.div`
  .one__two {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
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
        width: 50%;
        font-family: "Montserrat", sans-serif;
        z-index: 3;

        @media (max-width: 767.98px) {
          width: 100%;
        }

        h2 {
          font-size: 25px;
          line-height: 125%;
          color: #ffffff;
          padding-bottom: 50px;
          padding-left: 50px;
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
            padding-left: 20px;
          }
          @media (max-width: 479.98px) {
            font-size: 12px;
            line-height: 15px;
          }
        }

        h1 {
          color: #ffd600;
          font-weight: 800;
          text-transform: uppercase;
          line-height: 125%;
          font-size: 48px;
          padding-bottom: 50px;
          opacity: 0;

          @media (max-width: 1199.98px) {
            font-size: 40px;
          }
          @media (max-width: 991.98px) {
            font-size: 30px;
          }
          @media (max-width: 767.98px) {
            font-size: 27px;
          }
          @media (max-width: 479.98px) {
            font-size: 20px;
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
        top: calc(5% + 70px);
        height: calc(90% - 70px);
        right: -100%;
        max-width: none;

        @media (max-width: 991.98px) {
          height: calc(90% - 50px);
          top: calc(5% + 50px);
        }
        @media (max-width: 767.98px) {
          top: -100px;
          height: calc(100% + 100px);
        }
      }
      .front {
        position: absolute;
        height: 80%;
        right: -100%;
        bottom: 0;
      }
    }
  }
`;

export default function BlockTwo(props) {
  const animationTime = props.animationTime;

  function show() {
    $(".one__two_block .info a").on("click", function () {
      $(".modal__two").css("z-index", "100");
      $(".modal__two").animate({ opacity: 1 }, 500);
      $(".modal__two").css("display", "flex");
      $(".wrapper").css("overflow", "visible");
      $("body").css("overflow", "hidden");
      window.onwheel = () => {};
      window.ontouchstart = () => {};
      window.ontouchend = () => {};
    });
    // Modal close button
    $(".modal__two .modal_close-button").on("click", function () {
      $(".modal__two").animate({ opacity: 0 }, 500, function () {
        $(".modal__two").css("display", "none");
        $(".wrapper").css("overflow", "hidden");
      });
      props.scrollSetting();
    });

    // show section two
    $(".one__two").css("display", "flex");
    // Show info block
    $(".one__two_block .info")
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
    $(".one__two .images .front")
      .delay(100)
      .animate({ right: 0 }, animationTime);
    // Back
    $(".one__two .images .back").animate({ right: 0 }, animationTime);
  }

  useEffect(() => {
    show();
  }, []);

  return (
    <BlockTwoStyles>
      <section className="one__two">
        <div className="container">
          <div className="one__two_block">
            <div className="info">
              <h2>
                Мы проектируем,
                <br />
                комплектуем, строим
                <br />
                и поддерживаем
                <br />
                инфраструктуру для
              </h2>
              <h1>
                энергетических
                <br /> отраслей
              </h1>
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
      <section className="modal__two">
        <div className="modal_close-button"></div>
        <div className="line"></div>
        <div className="container">
          <div className="block">
            <div className="block__info_text">
              <p>
                ООО «Арктик Энергострой» начала свою деятельность в 2010 году с
                проекта строительства воздушной линии электропередачи 35 кВ
                «Харьяга – ЦПС Инзырей» для нужд ООО «Лукойл-Коми».
              </p>
              <p>
                После успешной реализации проекта, компания заработала авторитет
                и ее стали приглашать к участию в крупных и технически сложных
                проектах Тимано-Печорской нефтегазоносной провинции, например,
                для поставки, шеф-монтажа и пусконаладочных работ
                трансформаторов типа ТДНС 16000/35 в северном исполнении УХЛ 1
                для Энергоцентра №2 на базе ГТУ ЭГЭС-12 для нужд ООО «СК
                «РУСВЬЕТПЕТРО».
              </p>
              <p>
                Получив опыт и признание Заказчиков, компания продолжает свою
                деятельность в Республике Коми и Ненецком автономном округе,
                объем и сложность работ с каждым годом увеличивалась, штат
                компании пополнялся квалифицированными, компетентными кадрами,
                благодаря которым ООО «Арктик Энергострой» пополнило свой
                портфель контрактов такими значимыми и статусными как «Поставка
                котельной с разработкой конструкторской документации и
                выполнением шеф-монтажных и пусконаладочных работ, выполнение
                инспекции давальческого котельного оборудования Заказчика»,
                «Выполнение комплекса пусконаладочных работ и испытаний
                оборудования по объекту 'Газотурбинная установка выработки
                электроэнергии' (ГТУ Solar TITAN 130)» и пр.
              </p>
            </div>
            <div className="block__info_text-bottom">
              <p>
                Помимо нефтегазовых компаний, ООО «Арктик Энергострой» имеет
                хороший опыт реализации контрактов в энергоснабжении гражданских
                объектов, например участие в проекте внешнего электроснабжения
                госпиталя в Мурманской области для ФГУП «Главное
                военно-строительное управление №14», а так же для атомной
                промышленности, в проекте поставки модуля очистки для Курской
                АЭС.
              </p>
              <p>
                С более подробной информацией об опыте Компании, оборудовании
                предоставляемых услугах Вы сможете ознакомится в разделах сайта
                (идет активная ссылка на разделы):
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
            <div className="block__image">
              <img
                className="modal__two_front"
                src={modalFrontImg}
                alt="front image"
              />
              <img className="back" src={modalBackImg} alt="back image" />
            </div>
          </div>
        </div>
      </section>
    </BlockTwoStyles>
  );
}
