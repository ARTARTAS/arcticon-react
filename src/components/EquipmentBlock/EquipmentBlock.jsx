import React from "react";
import arrowBlack from "./../../assets/svg/arrowBlack.svg";
import arrowOrange from "./../../assets/svg/arrowOrange.svg";
import img1 from "./../../assets/img/Products/Equipment/01.png";

export default function EquipmentBlock() {
  return (
    <section class="eight">
      <div class="container">
        <div class="eight__block">
          <div class="eight__block_title">
            <h1>Оборудование</h1>
          </div>
          <div class="eight__block_list">
            <div class="card">
              <div class="card__info">
                <a href="#" class="card__info_img">
                  <img src={img1} alt="" />
                </a>
                <div class="card__info_bottom">
                  <h3>Трансформаторы</h3>
                  <a href="#">
                    Подробнее
                    <img src={arrowOrange} alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="eight__block_button">
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
