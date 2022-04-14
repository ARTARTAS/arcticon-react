import React from "react";
import arrowBlack from "./../../assets/svg/arrowBlack.svg";
import img1 from "./../../assets/img/MainPage/BlockFive/01.jpg";

export default function CarrierBlock() {
  return (
    <section class="four">
      <div class="image">
        <img src={img1} alt="" />
      </div>
      <div class="container">
        <div class="block">
          <div class="block__info">
            <h1>Карьера в Arctic Energostroy</h1>
            <p>
              Мы всегда рады принять в нашу команду талантливых и трудолюбивых
              специалистов. Если вы мечтаете об интересной работе, которая
              позволит раскрыть ваши профессиональные возможности – мы ждем вас!
            </p>
            <a href="#">
              Подробнее
              <img src={arrowBlack} alt="" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
