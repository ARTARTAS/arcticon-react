import React from "react";
import arrowBlack from "./../../assets/svg/arrowBlack.svg";
import arrowBlackLeft from "./../../assets/svg/arrowBlackLeft.svg";
import img1 from "./../../assets/img/MainPage/BlockTen/01.jpg";
import img2 from "./../../assets/img/MainPage/BlockTen/02.jpg";
import img3 from "./../../assets/img/MainPage/BlockTen/03.jpg";
import img4 from "./../../assets/img/MainPage/BlockTen/04.jpg";
import img5 from "./../../assets/img/MainPage/BlockTen/05.jpg";

export default function CertificatesBlock() {
  return (
    <section class="ten">
      <h1>Сертификаты</h1>
      <div class="container">
        <div class="ten__block">
          <div class="ten__block_images">
            <div class="shown">
              <img src={img1} alt="" />
            </div>
            <div class="list">
              <div class="image">
                <img src={img2} alt="" />
              </div>
              <div class="image">
                <img src={img3} alt="" />
              </div>
              <div class="image">
                <img src={img4} alt="" />
              </div>
              <div class="image">
                <img src={img5} alt="" />
              </div>
            </div>
          </div>
          <div class="ten__block_buttons">
            <a href="#" class="left_arrow">
              <img src={arrowBlackLeft} alt="" />
            </a>
            <a href="#" class="right_arrow">
              <img src={arrowBlack} alt="" />
            </a>
          </div>
        </div>
      </div>
      <div class="line">
        <p>
          В данном разделе размещены сертификаты и письма, выданные компании ООО
          "Арктик Энергострой" и подтверждающие ее полномочия, а также
          компетенцию и опыт в сфере комплектации объектов.
        </p>
      </div>
    </section>
  );
}
