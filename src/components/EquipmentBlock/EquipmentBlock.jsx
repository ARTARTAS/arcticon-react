import React from "react";
import arrowBlack from "./../../assets/svg/arrowBlack.svg";
import arrowOrange from "./../../assets/svg/arrowOrange.svg";
import img1 from "./../../assets/img/Products/Equipment/01.png";

export default function EquipmentBlock() {
  return (
    <section className="eight">
      <div className="container">
        <div className="eight__block">
          <div className="eight__block_title">
            <h1>Оборудование</h1>
          </div>
          <div className="eight__block_list">
            <div className="card">
              <div className="card__info">
                <a href="#" className="card__info_img">
                  <img src={img1} alt="" />
                </a>
                <div className="card__info_bottom">
                  <h3>Трансформаторы</h3>
                  <a href="#">
                    Подробнее
                    <img src={arrowOrange} alt="" />
                  </a>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card__info">
                <a href="#" className="card__info_img">
                  <img src={img1} alt="" />
                </a>
                <div className="card__info_bottom">
                  <h3>Трансформаторы</h3>
                  <a href="#">
                    Подробнее
                    <img src={arrowOrange} alt="" />
                  </a>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card__info">
                <a href="#" className="card__info_img">
                  <img src={img1} alt="" />
                </a>
                <div className="card__info_bottom">
                  <h3>Трансформаторы</h3>
                  <a href="#">
                    Подробнее
                    <img src={arrowOrange} alt="" />
                  </a>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card__info">
                <a href="#" className="card__info_img">
                  <img src={img1} alt="" />
                </a>
                <div className="card__info_bottom">
                  <h3>Трансформаторы</h3>
                  <a href="#">
                    Подробнее
                    <img src={arrowOrange} alt="" />
                  </a>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card__info">
                <a href="#" className="card__info_img">
                  <img src={img1} alt="" />
                </a>
                <div className="card__info_bottom">
                  <h3>Трансформаторы</h3>
                  <a href="#">
                    Подробнее
                    <img src={arrowOrange} alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="eight__block_button">
            <a href="#">
              Ещё
              <img src={arrowBlack} alt="" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
