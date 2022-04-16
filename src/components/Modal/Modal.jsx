import React from "react";
import img15 from "./../../assets/svg/back-call.svg";

export default function Modal({ setModal }) {
  return (
    <div className="back-call">
      <div className="block">
        <button className="exit" onClick={() => setModal(false)}></button>
        <form action="">
          <div className="title">
            <h2>Телефон для связи</h2>
            <h2 className="phone">+7 (495) 409-32-14</h2>
            <div className="line"></div>
          </div>
          <div className="info">
            <p>Оставьте свой номер телефона и мы Вам перезвоним.</p>
          </div>
          <input
            type="tel"
            name="number"
            id="number"
            placeholder="Введите номер..."
          />
          <button>
            Перезвонить
            <img className="icon" src={img15} alt="" />
          </button>
        </form>
      </div>
    </div>
  );
}
