import React from "react";
import img1 from "./../../assets/img/Contacts/clock.png";
import img2 from "./../../assets/img/Contacts/pin.png";
import img3 from "./../../assets/img/Contacts/phone.png";
import img4 from "./../../assets/img/Contacts/email.png";

import img5 from "./../../assets/svg/contacts/viber.svg";
import img6 from "./../../assets/svg/contacts/telegram.svg";
import img7 from "./../../assets/svg/contacts/phone.svg";

import styled from "styled-components";

const ContactsStyled = styled.div`
  width: 100%;
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;

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

  .block {
    width: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    padding: 70px 0px;
  }

  @media (max-width: 767.98px) {
    .block {
      -webkit-box-orient: vertical;
      -webkit-box-direction: reverse;
      -ms-flex-direction: column-reverse;
      flex-direction: column-reverse;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      padding-bottom: 0px;
    }
  }

  .block__map {
    width: 100%;
    margin-right: 70px;
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
    height: 400px;
    -webkit-box-flex: 2;
    -ms-flex: 2;
    flex: 2;
  }

  @media (max-width: 1199.98px) {
    .block__map {
      height: 340px;
    }
  }

  @media (max-width: 991.98px) {
    .block__map {
      height: 250px;
    }
  }

  @media (max-width: 767.98px) {
    .block__map {
      margin-right: 0;
      -webkit-box-flex: 0;
      -ms-flex: none;
      flex: none;
      display: none;
    }
  }

  @media (max-width: 479.98px) {
    .block__map {
      height: 200px;
    }
  }

  .block__map iframe {
    position: absolute;
    height: 100%;
    width: 100%;
  }

  .block__info {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    width: 100%;
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
  }

  @media (max-width: 1199.98px) {
    .block__info {
      width: 540px;
    }
  }

  @media (max-width: 991.98px) {
    .block__info {
      width: 460px;
    }
  }

  @media (max-width: 767.98px) {
    .block__info {
      width: 100%;
      padding-left: 50px;
      -webkit-box-flex: 0;
      -ms-flex: none;
      flex: none;
    }
  }

  .block__info h1 {
    font-family: "Montserrat", sans-serif;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 40px;
    margin-bottom: 70px;
  }

  @media (max-width: 1199.98px) {
    .block__info h1 {
      font-size: 35px;
      margin-bottom: 20px;
    }
  }

  @media (max-width: 991.98px) {
    .block__info h1 {
      font-size: 30px;
    }
  }

  @media (max-width: 767.98px) {
    .block__info h1 {
      font-size: 25px;
    }
  }

  @media (max-width: 479.98px) {
    .block__info h1 {
      font-size: 20px;
    }
  }

  .block__info .data__info {
    height: 100%;
    width: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
  }

  @media (max-width: 1199.98px) {
    .block__info .data__info {
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      -ms-flex-direction: column;
      flex-direction: column;
    }
  }

  .block__info .data__info .info {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    padding: 20px 10px 0px 0px;
  }

  @media (max-width: 1199.98px) {
    .block__info .data__info .info {
      height: 265px;
      margin-bottom: 20px;
    }
  }

  @media (max-width: 991.98px) {
    .block__info .data__info .info {
      height: 180px;
    }
  }

  .block__info .data__info .info__row {
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  }

  .block__info .data__info .info__row img {
    position: absolute;
    left: -40px;
  }

  .block__info .data__info .info__row .top {
    font-family: "Montserrat", sans-serif;
    font-weight: 700;
    font-size: 18px;
    line-height: 125%;
  }

  @media (max-width: 1199.98px) {
    .block__info .data__info .info__row .top {
      font-size: 16px;
    }
  }

  @media (max-width: 991.98px) {
    .block__info .data__info .info__row .top {
      font-size: 14px;
    }
  }

  .block__info .data__info .info__row .bottom {
    font-family: "Open Sans", sans-serif;
    font-weight: 600;
    font-size: 24px;
  }

  @media (max-width: 1199.98px) {
    .block__info .data__info .info__row .bottom {
      font-size: 22px;
    }
  }

  @media (max-width: 991.98px) {
    .block__info .data__info .info__row .bottom {
      font-size: 18px;
    }
  }

  .block__info .data__info .info__row .bottom.email {
    border: 2px solid #ffd600;
    padding: 8px 12px;
    border-radius: 15px;
  }

  .block__info .data__info .buttons {
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    border-left: 2px solid black;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
  }

  @media (max-width: 1199.98px) {
    .block__info .data__info .buttons {
      border-left: none;
      -webkit-box-orient: horizontal;
      -webkit-box-direction: normal;
      -ms-flex-direction: row;
      flex-direction: row;
      padding-right: 50px;
    }
  }

  @media (max-width: 1199.98px) {
    .block__info .data__info .buttons .line {
      top: 0px;
      width: 100%;
      height: 2px;
      background-color: black;
      position: absolute;
    }
  }

  .block__info .data__info .buttons a {
    width: 50px;
    height: 50px;
    margin: 20px;
    border-radius: 50%;
    background-color: #ffd600;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-transition: all 0.2s ease-in-out;
    transition: all 0.2s ease-in-out;
  }

  .block__info .data__info .buttons a:hover {
    background-color: gray;
  }

  @media (max-width: 991.98px) {
    .block__info .data__info .buttons a {
      width: 33px;
      height: 33px;
    }
  }

  @media (max-width: 479.98px) {
    .block__info .data__info .buttons a {
      margin: 20px 10px;
    }
  }

  .block__info .data__info .buttons .icon {
    width: 30px;
    height: 30px;
  }

  @media (max-width: 991.98px) {
    .block__info .data__info .buttons .icon {
      width: 20px;
      height: 20px;
    }
  }

  .block__info .data__info .buttons .icon.telegram {
    padding-right: 2px;
  }

  .block__map_laptop {
    display: none;
  }

  @media (max-width: 767.98px) {
    .block__map_laptop {
      display: block;
      width: 100%;
      height: 300px;
    }
    .block__map_laptop iframe {
      width: 100%;
      height: 100%;
    }
  }

  @media (max-width: 767.98px) {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
  }

  @media (max-width: 767.98px) {
    .container {
      width: auto;
    }
  }
`;

export default function Contacts() {
  window.scrollTo(0, 0);
  return (
    <ContactsStyled>
      <div className="container">
        <div className="block">
          <div className="block__map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2244.9586794306406!2d37.63846531604657!3d55.75921999896426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54a5fe4f0c079%3A0x4177349fdcc6fb93!2z0YPQuy4g0J_QvtC60YDQvtCy0LrQsCwgMy83INGB0YLRgNC-0LXQvdC40LUgMdCRLCDQnNC-0YHQutCy0LAsINCg0L7RgdGB0LjRjywgMTAxMDAw!5e0!3m2!1sru!2sua!4v1644229370419!5m2!1sru!2sua"
              allowFullScreen=""
              loading="lazy"
            />
          </div>
          <div className="block__info">
            <h1>Контакты</h1>
            <div className="data__info">
              <div className="info">
                <div className="info__row">
                  <img src={img1} alt="" />
                  <p className="top">Пн - Пт с 9:00 до 17:00</p>
                </div>
                <div className="info__row">
                  <img src={img2} alt="" />
                  <p className="top">г. Москва, ул. Покровка, д.3/7 стр. 1Б</p>
                </div>
                <div className="info__row">
                  <img src={img3} alt="" />
                  <p className="bottom">+7 (495) 409-32-14</p>
                </div>
                <div className="info__row">
                  <img src={img4} alt="" />
                  <p className="bottom email">info@arcticcon.ru</p>
                </div>
              </div>
              <div className="buttons">
                <div className="line"></div>
                <a href="">
                  <img className="icon" src={img5} alt="" />
                </a>
                <a href="">
                  <img className="icon" src={img6} alt="" />
                </a>
                <a href="">
                  <img className="icon" src={img7} alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="block__map_laptop">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2244.9586794306406!2d37.63846531604657!3d55.75921999896426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54a5fe4f0c079%3A0x4177349fdcc6fb93!2z0YPQuy4g0J_QvtC60YDQvtCy0LrQsCwgMy83INGB0YLRgNC-0LXQvdC40LUgMdCRLCDQnNC-0YHQutCy0LAsINCg0L7RgdGB0LjRjywgMTAxMDAw!5e0!3m2!1sru!2sua!4v1644229370419!5m2!1sru!2sua"
          allowFullScreen=""
          loading="lazy"
        />
      </div>
    </ContactsStyled>
  );
}
