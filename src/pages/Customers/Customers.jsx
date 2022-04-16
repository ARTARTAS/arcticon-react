import React, { useEffect, useState } from "react";
import img1 from "./../../assets/img/Customers/01.jpg";
import img2 from "./../../assets/img/Customers/02.jpg";
import img3 from "./../../assets/img/Customers/03.jpg";
import img4 from "./../../assets/img/Customers/01.jpg";
import img5 from "./../../assets/img/Customers/02.jpg";
import img6 from "./../../assets/img/Customers/03.jpg";
import img7 from "./../../assets/img/Customers/01.jpg";
import img8 from "./../../assets/img/Customers/02.jpg";
import img9 from "./../../assets/img/Customers/03.jpg";
import img10 from "./../../assets/img/Customers/01.jpg";
import img11 from "./../../assets/img/Customers/02.jpg";
import img12 from "./../../assets/img/Customers/03.jpg";

import img13 from "./../../assets/svg/home/details_black.svg";
import img15 from "./../../assets/svg/back-call.svg";
import img14 from "./../../assets/img/Customers/background.png";

import styled from "styled-components";
import CustomersCarousel from "../../components/CustomersCarousel/CustomersCarousel";
import Modal from "../../components/Modal/Modal";

export default function Customers() {
  const [modal, setModal] = useState(false);

  const setTimer = () => {
    setInterval(function () {
      // setModal(true);
      console.log("modal set to true");
    }, 60000);
  };

  useEffect(() => {
    setTimer();
  }, []);

  return (
    <CustomersStyles>
      {modal ? <Modal setModal={setModal} /> : ""}

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

  .back-call {
    position: fixed;
    top: 30vh;
    right: -100%;
    z-index: 100;
    width: 300px;
    background: #000000;
    color: white;
    font-family: "Montserrat", sans-serif;
  }

  @media (max-width: 1199.98px) {
    .back-call {
      width: 250px;
    }
  }

  @media (max-width: 991.98px) {
    .back-call {
      width: 200px;
    }
  }

  .back-call .block {
    height: 100%;
    width: 100%;
    padding: 30px;
  }

  @media (max-width: 1199.98px) {
    .back-call .block {
      padding: 25px;
    }
  }

  @media (max-width: 991.98px) {
    .back-call .block {
      padding: 20px;
    }
  }

  .back-call .block .exit {
    position: absolute;
    left: -15px;
    top: -15px;
    -ms-flex-item-align: end;
    align-self: flex-end;
    margin-bottom: 40px;
    width: 32px;
    height: 32px;
    opacity: 1;
    z-index: 101;
    cursor: pointer;
    background: #ffd600;
  }

  .back-call .block .exit:hover {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }

  .back-call .block .exit:before,
  .back-call .block .exit:after {
    top: 6px;
    position: absolute;
    left: 15px;
    content: " ";
    height: 20px;
    width: 1px;
    background-color: black;
  }

  .back-call .block .exit:before {
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
  }

  .back-call .block .exit:after {
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
  }

  .back-call .block form .title {
    width: -webkit-fit-content;
    width: -moz-fit-content;
    width: fit-content;
    border-bottom: 1px solid #ffd600;
    padding: 10px 0px;
    margin-bottom: 30px;
  }

  @media (max-width: 1199.98px) {
    .back-call .block form .title {
      margin-bottom: 26px;
    }
  }

  @media (max-width: 991.98px) {
    .back-call .block form .title {
      margin-bottom: 22px;
    }
  }

  .back-call .block form .title h2 {
    font-weight: 300;
    font-size: 16px;
    padding-bottom: 8px;
  }

  @media (max-width: 1199.98px) {
    .back-call .block form .title h2 {
      font-size: 14px;
      padding-bottom: 7px;
    }
  }

  @media (max-width: 991.98px) {
    .back-call .block form .title h2 {
      font-size: 11px;
      padding-bottom: 6px;
    }
  }

  .back-call .block form .title .phone {
    font-weight: 600;
    font-size: 18px;
  }

  @media (max-width: 1199.98px) {
    .back-call .block form .title .phone {
      font-size: 16px;
    }
  }

  @media (max-width: 991.98px) {
    .back-call .block form .title .phone {
      font-size: 13px;
    }
  }

  .back-call .block form .info {
    margin-bottom: 30px;
  }

  @media (max-width: 1199.98px) {
    .back-call .block form .info {
      margin-bottom: 26px;
    }
  }

  @media (max-width: 991.98px) {
    .back-call .block form .info {
      margin-bottom: 22px;
    }
  }

  .back-call .block form .info p {
    font-weight: 400;
    font-size: 12px;
  }

  @media (max-width: 1199.98px) {
    .back-call .block form .info p {
      font-size: 10px;
    }
  }

  @media (max-width: 991.98px) {
    .back-call .block form .info p {
      font-size: 7px;
    }
  }

  .back-call .block form input {
    width: 100%;
    border: 1px solid white;
    background: none;
    padding: 10px 15px;
    margin-bottom: 30px;
    caret-color: white;
    color: white;
    font-size: 12px;
  }

  @media (max-width: 1199.98px) {
    .back-call .block form input {
      font-size: 10px;
      padding: 8px 12px;
    }
  }

  @media (max-width: 991.98px) {
    .back-call .block form input {
      font-size: 8px;
      padding: 5px 10px;
    }
  }

  .back-call .block form button {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    margin-left: auto;
    font-family: "Montserrat", sans-serif;
    font-weight: 600;
    font-size: 16px;
    background: none;
    color: #ffc729;
    -webkit-transition: 0.2s ease-in-out;
    transition: 0.2s ease-in-out;
  }

  .back-call .block form button:hover {
    color: white;
  }

  @media (max-width: 1199.98px) {
    .back-call .block form button {
      font-size: 12px;
    }
  }

  @media (max-width: 991.98px) {
    .back-call .block form button {
      font-size: 8px;
    }
  }

  .back-call .block form button .icon {
    width: 51px;
    height: 54px;
    fill: none;
  }

  @media (max-width: 1199.98px) {
    .back-call .block form button .icon {
      width: 48px;
      height: 51px;
    }
  }

  @media (max-width: 991.98px) {
    .back-call .block form button .icon {
      width: 45px;
      height: 48px;
    }
  }

  @media (max-width: 767.98px) {
    .back-call .block form button .icon {
      width: 42px;
      height: 45px;
    }
  }

  .back-call .block form button svg {
    padding-left: 5px;
    -webkit-transition: 0.2s ease-in-out;
    transition: 0.2s ease-in-out;
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

  section .owl-next-style {
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
  }

  @media (max-width: 1199.98px) {
    section .owl-next-style {
      font-size: 16px;
      top: 30px;
    }
  }

  @media (max-width: 991.98px) {
    section .owl-next-style {
      font-size: 14px;
      top: 60px;
    }
  }

  @media (max-width: 767.98px) {
    section .owl-next-style {
      font-size: 13px;
      top: 25px;
    }
  }

  @media (max-width: 479.98px) {
    section .owl-next-style {
      font-size: 12px;
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
    display: -ms-grid;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
  }

  @media (max-width: 767.98px) {
    section .section__block .block__info {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-pack: justify;
      -ms-flex-pack: justify;
      justify-content: space-between;
      gap: 20px;
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
    -ms-grid-column: 1;
    -ms-grid-column-span: 2;
    grid-column: 1/3;
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
    -ms-grid-column: 4;
    -ms-grid-column-span: 3;
    grid-column: 4/7;
    padding: 0px 10px;
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
    grid-gap: 20px;
    margin-bottom: 30px;
    padding: 0px 10px;
  }

  @media (max-width: 767.98px) {
    section .section__block .block__info .cards__block {
      margin-right: 0;
    }
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
    padding-left: 5px;
    -webkit-transition: all 0.2s ease-in-out;
    transition: all 0.2s ease-in-out;
  }

  section .background_image {
    z-index: 1;
    width: 100%;
  }

  section .background_image img {
    width: 100%;
  }
  /*# sourceMappingURL=customers.css.map */
`;
