import React from "react";
import img1 from "./../../assets/img/Contacts/clock.png";
import img2 from "./../../assets/img/Contacts/pin.png";
import img3 from "./../../assets/img/Contacts/phone.png";
import img4 from "./../../assets/img/Contacts/email.png";

import img5 from "./../../assets/svg/contacts/viber.svg";
import img6 from "./../../assets/svg/contacts/telegram.svg";
import img7 from "./../../assets/svg/contacts/phone.svg";
import "../../styles/contacts.css"

export default function Contacts() {
  return (
    <section>
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
                  <img src={img5} alt="" />
                </a>
                <a href="">
                  <img src={img6} alt="" />
                </a>
                <a href="">
                  <img src={img7} alt="" />
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
    </section>
  );
}
