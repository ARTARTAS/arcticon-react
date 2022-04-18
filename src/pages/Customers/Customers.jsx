import React, { useEffect, useState } from "react";
import img13 from "./../../assets/svg/home/details_black.svg";
import img14 from "./../../assets/img/Customers/background.png";
import emailjs from "@emailjs/browser";

import styled from "styled-components";
import CustomersCarousel from "../../components/CustomersCarousel/CustomersCarousel";
import Modal from "../../components/Modal/Modal";

const CustomersStyles = styled.div`
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
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  }

  section .right_line {
    position: absolute;
    width: 35px;
    background-color: #ffd600;
    height: 50%;
    z-index: 10;
    top: 0;
    right: 0;
  }

  @media (max-width: 1199.98px) {
    section .right_line {
      width: 30px;
    }
  }

  @media (max-width: 991.98px) {
    section .right_line {
      width: 20px;
    }
  }

  @media (max-width: 767.98px) {
    section .right_line {
      display: none;
    }
  }

  section .section__block {
    width: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    background: -webkit-gradient(
      linear,
      left top,
      left bottom,
      color-stop(50%, white),
      to(#dedede)
    );
    background: linear-gradient(180deg, white 50%, #dedede 100%);
    padding: 0px 50px;
  }

  @media (max-width: 767.98px) {
    section .section__block {
      padding: 0px 20px;
    }
  }

  section .section__block .block {
    width: 100%;
    position: relative;
    z-index: 2;
    padding-top: 100px;
  }

  @media (max-width: 479.98px) {
    section .section__block .block {
      padding-top: 80px;
      width: 100%;
    }
  }

  section .section__block .block h1 {
    font-family: "Montserrat", sans-serif;
    font-size: 35px;
    font-weight: 700;
    margin-bottom: 60px;
    text-transform: uppercase;
  }

  @media (max-width: 1199.98px) {
    section .section__block .block h1 {
      font-size: 30px;
      margin-bottom: 50px;
    }
  }

  @media (max-width: 991.98px) {
    section .section__block .block h1 {
      font-size: 25px;
      margin-bottom: 40px;
    }
  }

  @media (max-width: 767.98px) {
    section .section__block .block h1 {
      font-size: 22px;
      margin-bottom: 30px;
    }
  }

  @media (max-width: 479.98px) {
    section .section__block .block h1 {
      font-size: 20px;
      margin-bottom: 20px;
    }
  }

  section .section__block .block__info {
    width: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    gap: 20px;
    padding-right: 50px;
  }

  @media (max-width: 767.98px) {
    section .section__block .block__info {
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      -ms-flex-direction: column;
      flex-direction: column;
      padding-right: 0px;
    }
    section .section__block .block__info .owl-item {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      justify-content: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
    }
  }

  section .section__block .block__info .info {
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
    -webkit-box-align: start;
    -ms-flex-align: start;
    align-items: flex-start;
    width: 40%;
  }

  @media (max-width: 991.98px) {
    section .section__block .block__info .info {
      width: 50%;
    }
  }

  @media (max-width: 767.98px) {
    section .section__block .block__info .info {
      width: 100%;
      margin-bottom: 50px;
    }
  }

  section .section__block .block__info .info h2 {
    font-family: "Montserrat", sans-serif;
    font-size: 20px;
    font-weight: 700;
    line-height: 125%;
  }

  @media (max-width: 1199.98px) {
    section .section__block .block__info .info h2 {
      font-size: 16px;
    }
  }

  @media (max-width: 991.98px) {
    section .section__block .block__info .info h2 {
      font-size: 12px;
    }
  }

  @media (max-width: 767.98px) {
    section .section__block .block__info .info h2 {
      font-size: 11px;
    }
  }

  @media (max-width: 479.98px) {
    section .section__block .block__info .info h2 {
      font-size: 10px;
    }
  }

  section .section__block .block__info .info .line__box {
    position: relative;
    width: 100%;
    margin: 40px 0px;
  }

  @media (max-width: 1199.98px) {
    section .section__block .block__info .info .line__box {
      margin: 35px 0px;
    }
  }

  @media (max-width: 991.98px) {
    section .section__block .block__info .info .line__box {
      margin: 30px 0px;
    }
  }

  @media (max-width: 767.98px) {
    section .section__block .block__info .info .line__box {
      margin: 25px 0px;
    }
  }

  @media (max-width: 479.98px) {
    section .section__block .block__info .info .line__box {
      margin: 20px 0px;
    }
  }

  section .section__block .block__info .info .line__box .line {
    position: absolute;
    width: calc(100% + 1300px);
    height: 3px;
    background-color: #ffd600;
    left: -1300px;
  }

  section .section__block .block__info .info a {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    font-family: "Montserrat", sans-serif;
    font-weight: 600;
    font-size: 14px;
    color: #2d2d2d;
    -webkit-transition: 0.2s ease-in-out;
    transition: 0.2s ease-in-out;
    gap: 20px;
  }

  section .section__block .block__info .info a:hover {
    color: gray;
    margin-left: 10px;
  }

  section .section__block .block__info .info a:hover svg {
    margin-left: 10px;
  }

  @media (max-width: 1199.98px) {
    section .section__block .block__info .info a {
      font-size: 12px;
    }
  }

  section .section__block .block__info .info a .icon {
    width: 51px;
    height: 54px;
    fill: none;
  }

  @media (max-width: 1199.98px) {
    section .section__block .block__info .info a .icon {
      width: 48px;
      height: 51px;
    }
  }

  @media (max-width: 991.98px) {
    section .section__block .block__info .info a .icon {
      width: 45px;
      height: 48px;
    }
  }

  @media (max-width: 767.98px) {
    section .section__block .block__info .info a .icon {
      width: 42px;
      height: 45px;
    }
  }

  section .section__block .block__info .info a svg {
    padding-left: 5px;
    -webkit-transition: 0.2s ease-in-out;
    transition: 0.2s ease-in-out;
  }

  section .section__block .block__info .cards {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    width: 400px;
  }

  @media (max-width: 1199.98px) {
    section .section__block .block__info .cards {
      width: 350px;
    }
  }

  @media (max-width: 991.98px) {
    section .section__block .block__info .cards {
      width: 300px;
    }
  }

  @media (max-width: 767.98px) {
    section .section__block .block__info .cards {
      width: 100%;
    }
  }

  section .section__block .block__info .cards__block {
    display: -ms-grid;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-row-gap: 20px;
    grid-column-gap: 50px;
    margin-bottom: 30px;
  }

  section .section__block .block__info .cards__block_img {
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  }

  section .section__block .block__info .button {
    display: none;
  }

  section .section__block .block__info .owl-nav {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  }

  section .section__block .block__info .owl-prev {
    display: none;
  }

  section .section__block .block__info .owl-next {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-item-align: end;
    align-self: flex-end;
    font-family: "Montserrat", sans-serif;
    font-weight: 600;
    font-size: 18px;
    color: #2d2d2d;
    -webkit-transition: all 0.2s ease-in-out;
    transition: all 0.2s ease-in-out;
  }

  section .section__block .block__info .owl-next:hover {
    color: gray;
    margin-left: 10px;
  }

  section .section__block .block__info .owl-next:hover svg {
    margin-left: 10px;
  }

  @media (max-width: 1199.98px) {
    section .section__block .block__info .owl-next {
      font-size: 16px;
      top: 30px;
    }
  }

  @media (max-width: 991.98px) {
    section .section__block .block__info .owl-next {
      font-size: 14px;
      top: 60px;
    }
  }

  @media (max-width: 767.98px) {
    section .section__block .block__info .owl-next {
      font-size: 13px;
      top: 25px;
    }
  }

  @media (max-width: 479.98px) {
    section .section__block .block__info .owl-next {
      font-size: 12px;
    }
  }

  section .section__block .block__info .owl-next .icon {
    width: 51px;
    height: 54px;
    fill: none;
  }

  @media (max-width: 1199.98px) {
    section .section__block .block__info .owl-next .icon {
      width: 48px;
      height: 51px;
    }
  }

  @media (max-width: 991.98px) {
    section .section__block .block__info .owl-next .icon {
      width: 45px;
      height: 48px;
    }
  }

  @media (max-width: 767.98px) {
    section .section__block .block__info .owl-next .icon {
      width: 42px;
      height: 45px;
    }
  }

  section .section__block .block__info .owl-next svg {
    -webkit-transition: all 0.2s ease-in-out;
    transition: all 0.2s ease-in-out;
    padding-left: 5px;
  }

  section .background_image {
    z-index: 1;
    width: 100%;
  }

  section .background_image img {
    width: 100%;
  }
`;

export default function Customers() {
  const [modal, setModal] = useState(false);

  const closeModal = () => {
    setModal(false);
  };

  useEffect(() => {
    setTimeout(() => {
      setModal(true);
    }, 5000);
  }, []);

  return (
    <CustomersStyles>
      {modal ? <Modal close={closeModal} /> : ""}

      <section>
        <div className="right_line"></div>
        <div className="section__block">
          <div className="container">
            <div className="block">
              <h1>Заказчики</h1>
              <div className="block__info">
                <div className="info">
                  <h2>Компании, которые доверили нам выполнить работы.</h2>
                  <div className="line__box">
                    <div className="line"></div>
                  </div>
                  <a href="#">
                    Реализованные проекты
                    <img className="icon" src={img13} alt="" />
                  </a>
                </div>
                <div className="cards">
                  <CustomersCarousel />
                  {/* <div className="button">
                    <a href="#" className="next-button">
                      Далее
                      <img classNameName="icon" src={img13} alt="" />
                    </a>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="background_image">
          <img src={img14} alt="" />
        </div>
      </section>
    </CustomersStyles>
  );
}
