import React, { useEffect } from "react";
import $ from "jquery";
import styled from "styled-components";
import button from "./../../../assets/svg/arrowOrangeWithCircle.svg";
import backImg from "./../../../assets/img/MainPage/BlockOne/FirstSection/back.png";
import frontImg from "./../../../assets/img/MainPage/BlockOne/FirstSection/front.png";
import ModalOne from "../Modals/ModalOne";

const BlockOneStyles = styled.div`
  .one__one {
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
        width: 40%;
        font-family: "Montserrat", sans-serif;
        z-index: 3;

        @media (max-width: 991.98px) {
          width: 45%;
        }
        @media (max-width: 767.98px) {
          width: 60%;
        }
        @media (max-width: 479.98px) {
          width: 80%;
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

            img {
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

          img {
            margin-left: 5px;
            transition: 0.2s ease-in-out;
          }
        }
      }
    }

    .images {
      overflow: hidden;

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
        top: 70px;
        height: calc(100% - 70px);
        right: -100%;
        max-width: none;

        @media (max-width: 991.98px) {
          height: calc(90% - 50px);
          top: calc(5% + 50px);
          right: -60px;
        }
        @media (max-width: 767.98px) {
          top: -100px;
          height: calc(100% + 100px);
        }
      }
      .front {
        position: absolute;
        height: 56%;
        top: 32%;
        right: -100%;
        max-width: none;

        @media (max-width: 991.98px) {
          height: 50%;
          top: 34%;
          right: 70px;
        }
        @media (max-width: 767.98px) {
          top: 0;
          height: 90%;
          right: 20px;
        }
        @media (max-width: 479.98px) {
          height: auto;
          right: 0;
          width: 100%;
          min-width: 400px;
        }
      }
    }
  }
`;

export default function BlockOne(props) {
  const animationTime = props.animationTime;
  const windowWidth = $(window).width();

  // media points
  const md2 = 991.98;
  const md3 = 767.98;
  const md4 = 479.98;

  function show() {
    $(".one__one_block .info a").on("click", function () {
      $(".modal__one").css("z-index", "100");
      $(".modal__one").animate({ opacity: 1 }, 500);
      $(".modal__one").css("display", "flex");
      $(".wrapper").css("overflow", "visible");
      $("body").css("overflow", "hidden");
      window.onwheel = () => {};
      window.ontouchstart = () => {};
      window.ontouchend = () => {};
    });
    // Modal close button
    $(".modal__one .modal_close-button").on("click", function () {
      $(".modal__one").animate({ opacity: 0 }, 500, function () {
        $(".modal__one").css("display", "none");
        $(".wrapper").css("overflow", "hidden");
      });
      props.scrollSetting();
    });

    // Show section
    $(".one__one").css("display", "flex");
    // Show info block
    $(".one__one_block .info")
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
    if (windowWidth < md4) {
      $(".one__one .images .front")
        .delay(100)
        .animate({ right: 0 }, animationTime);
    } else if (windowWidth < md3) {
      $(".one__one .images .front").animate(
        {
          right: "20px",
        },
        animationTime
      );
    } else if (windowWidth < md2) {
      $(".one__one .images .front").animate(
        {
          right: "70px",
        },
        animationTime
      );
    } else {
      $(".one__one .images .front").animate(
        {
          right: "10%",
        },
        animationTime
      );
    }
    //Back
    if (windowWidth < md2) {
      $(".one__one .images .back").animate(
        {
          right: "-60px",
        },
        animationTime - 100
      );
    } else {
      $(".one__one .images .back").animate(
        {
          right: "0px",
        },
        animationTime - 100
      );
    }
  }

  useEffect(() => {
    show();
  }, []);

  return (
    <BlockOneStyles>
      <section className="one__one">
        <div className="container">
          <div className="one__one_block">
            <div className="info">
              <h1>
                передовые <br /> технологии
              </h1>
              <h2>
                и эффективные решения для производственных, транспортных
                строительных и сельскохозяйственных предприятий
              </h2>
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

      <ModalOne></ModalOne>
    </BlockOneStyles>
  );
}
