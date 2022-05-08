import React from "react";
import styled from "styled-components";

import arrowBlack from "./../../assets/svg/arrowBlack.svg";
import img1 from "./../../assets/img/MainPage/BlockTwo/01.jpg";
import img2 from "./../../assets/img/MainPage/BlockTwo/02.png";
import img3 from "./../../assets/img/MainPage/BlockTwo/03.png";
import img4 from "./../../assets/img/MainPage/BlockTwo/04.jpg";

const NewsStyled = styled.div`
  .two {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    background: #323232;

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

    .head__block {
      width: 100%;
      display: flex;
      justify-content: center;
      margin: 50px 0px;

      h1 {
        font-family: "Montserrat", sans-serif;
        font-weight: 700;
        font-size: 40px;
        color: white;

        @media (max-width: 1199.98px) {
          font-size: 35px;
        }
        @media (max-width: 991.98px) {
          font-size: 30px;
        }
        @media (max-width: 767.98px) {
          font-size: 25px;
        }
        @media (max-width: 479.98px) {
          font-size: 20px;
        }
      }
    }

    .block {
      position: relative;
      width: 100%;
      display: flex;
      justify-content: center;
      margin-bottom: 50px;
    }

    .list {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0px;
      left: 0px;
      display: flex;

      &__white {
        position: relative;
        height: 100%;
        width: 60%;
        background-color: white;

        &_orange {
          position: absolute;
          left: 0px;
          top: 0px;
          width: 100%;
          height: 60px;
          background-color: #ffee49;
        }
      }

      &__block {
        position: absolute;
        width: 100%;
        display: flex;
        justify-content: center;
        z-index: 3;

        .container {
          height: 60px;
          display: flex;
          align-items: center;

          h2 {
            font-family: "Montserrat", sans-serif;
            font-weight: 600;
            font-size: 25px;

            @media (max-width: 1199.98px) {
              font-size: 22px;
            }
            @media (max-width: 991.98px) {
              font-size: 18px;
            }
            @media (max-width: 767.98px) {
              font-size: 15px;
            }
            @media (max-width: 479.98px) {
              font-size: 12px;
            }
          }
        }
      }
    }

    &__block {
      position: relative;
      height: fit-content;
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-top: 100px;
      margin-bottom: 50px;

      &_column {
        position: relative;
        margin: 15px 0px;
        z-index: 2;

        @media (max-width: 991.98px) {
          margin: 30px 0px;
        }
        @media (max-width: 767.98px) {
          margin: 25px 0px;
        }
        @media (max-width: 479.98px) {
          margin: 15px 0px;
        }

        .column {
          position: relative;
          display: flex;
          height: 270px;

          @media (max-width: 1199.98px) {
            height: 208px;
          }
          @media (max-width: 991.98px) {
            height: 174px;
          }
          @media (max-width: 767.98px) {
            height: auto;
            flex-direction: column;
          }

          &__title {
            width: 40%;
            font-family: "Inter", sans-serif;

            @media (max-width: 767.98px) {
              height: 130px;
              width: 100%;
              background-color: white;
              display: flex;
              flex-direction: row;
            }
            @media (max-width: 479.98px) {
              height: 115px;
            }

            .info {
              height: 100%;
              display: flex;
              justify-content: center;
              flex-direction: column;
              padding: 0px 30px 0px 0px;

              @media (max-width: 1199.98px) {
                padding: 0px 20px 0px 0px;
              }
              @media (max-width: 991.98px) {
                padding: 0px 15px 0px 0px;
              }
              @media (max-width: 767.98px) {
                padding: 0px 10px 0px 0px;
              }

              h2 {
                font-weight: 700;
                color: #3a3c41;
                margin-bottom: 20px;
                font-size: 24px;

                @media (max-width: 1199.98px) {
                  font-size: 22px;
                }
                @media (max-width: 991.98px) {
                  font-size: 18px;
                }
                @media (max-width: 767.98px) {
                  font-size: 16px;
                  margin-bottom: 18px;
                }
                @media (max-width: 479.98px) {
                  font-size: 14px;
                  margin-bottom: 15px;
                }
              }

              h3 {
                font-weight: 400;
                color: #3a3c41;
                font-size: 16px;
                line-height: 187%;

                @media (max-width: 1199.98px) {
                  font-size: 14px;
                }
                @media (max-width: 991.98px) {
                  font-size: 12px;
                }
                @media (max-width: 767.98px) {
                  font-size: 11px;
                }
                @media (max-width: 479.98px) {
                  font-size: 10px;
                }
              }
            }

            a {
              display: none;

              @media (max-width: 767.98px) {
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100%;
                width: 120px;
                z-index: 2;
                background-color: white;
              }
              @media (max-width: 479.98px) {
                width: 100px;
              }
            }
          }

          &__image {
            height: 100%;
            position: relative;
            display: flex;
            align-items: center;
            overflow: hidden;
            width: 60%;

            @media (max-width: 767.98px) {
              height: 130px;
              width: 100%;
            }
            @media (max-width: 479.98px) {
              height: fit-content;
              display: flex;
              justify-content: center;
              align-items: center;
            }

            a {
              position: absolute;
              display: flex;
              justify-content: center;
              align-items: center;
              height: 70%;
              width: 100px;
              z-index: 2;
              background-color: white;

              @media (max-width: 1199.98px) {
                width: 80px;
              }
              @media (max-width: 991.98px) {
                width: 60px;
              }

              @media (max-width: 767.98px) {
                display: none;
              }
            }

            img {
              z-index: 1;

              @media (max-width: 767.98px) {
                position: absolute;
                width: 100%;
                bottom: 0px;
              }
              @media (max-width: 479.98px) {
                position: relative;
                top: 0px;
              }
            }
          }
        }
      }
    }
  }
`;

export default function News() {
  return (
    <NewsStyled>
      <section className="two">
        <div className="head__block">
          <div className="container">
            <h1>ПРЕСС-ЦЕНТР</h1>
          </div>
        </div>
        <div className="block">
          <div className="list">
            <div className="list__white">
              <div className="list__white_orange"></div>
            </div>
            <div className="list__block">
              <div className="container">
                <h2>НОВОСТИ КОМПАНИИ</h2>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="two__block">
              <div className="two__block_column">
                <div className="column">
                  <div className="column__title">
                    <div className="info">
                      <h2>Sed ut perspiciatis</h2>
                      <h3>
                        Nemo enim ipsam voluptatem quia voluptas sit aspernatur
                        aut odit aut fugit, sed quia.
                      </h3>
                    </div>
                    <a href="">
                      <img src={arrowBlack} alt="arrow" />
                    </a>
                  </div>
                  <div className="column__image">
                    <a href="">
                      <img src={arrowBlack} alt="arrow" />
                    </a>
                    <img src={img1} alt="" />
                  </div>
                </div>
              </div>
              <div className="two__block_column">
                <div className="column">
                  <div className="column__title">
                    <div className="info">
                      <h2>Sed ut perspiciatis</h2>
                      <h3>
                        Nemo enim ipsam voluptatem quia voluptas sit aspernatur
                        aut odit aut fugit, sed quia.
                      </h3>
                    </div>
                    <a href="">
                      <img src={arrowBlack} alt="arrow" />
                    </a>
                  </div>
                  <div className="column__image">
                    <a href="">
                      <img src={arrowBlack} alt="arrow" />
                    </a>
                    <img src={img2} alt="" />
                  </div>
                </div>
              </div>
              <div className="two__block_column">
                <div className="column">
                  <div className="column__title">
                    <div className="info">
                      <h2>Sed ut perspiciatis</h2>
                      <h3>
                        Nemo enim ipsam voluptatem quia voluptas sit aspernatur
                        aut odit aut fugit, sed quia.
                      </h3>
                    </div>
                    <a href="">
                      <img src={arrowBlack} alt="arrow" />
                    </a>
                  </div>
                  <div className="column__image">
                    <a href="">
                      <img src={arrowBlack} alt="arrow" />
                    </a>
                    <img src={img3} alt="" />
                  </div>
                </div>
              </div>
              <div className="two__block_column">
                <div className="column">
                  <div className="column__title">
                    <div className="info">
                      <h2>Sed ut perspiciatis</h2>
                      <h3>
                        Nemo enim ipsam voluptatem quia voluptas sit aspernatur
                        aut odit aut fugit, sed quia.
                      </h3>
                    </div>
                    <a href="">
                      <img src={arrowBlack} alt="arrow" />
                    </a>
                  </div>
                  <div className="column__image">
                    <a href="">
                      <img src={arrowBlack} alt="arrow" />
                    </a>
                    <img src={img4} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </NewsStyled>
  );
}
