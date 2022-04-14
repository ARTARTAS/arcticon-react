import React from "react";
import arrowBlack from "./../../assets/svg/arrowBlack.svg";
import img1 from "./../../assets/img/MainPage/BlockNine/01.jpg";

export default function ServicesBlock() {
  return (
    <section class="nine">
      <div class="container">
        <div class="nine__block">
          <h1>УСЛУГИ И СЕРВИС</h1>
          <div class="nine__block_table">
            <div class="block">
              <a href="#" class="title">
                <h2>EPCM</h2>
              </a>
              <p>
                ООО «Арктик Энергострой» выступает в качестве генерального
                подрядчика, результатом работы ...
              </p>
              <a href="#" class="more">
                Ещё
                <img src={arrowBlack} alt="" />
              </a>
            </div>
            <div class="block">
              <a href="#" class="title">
                <h2>СТРОИТЕЛЬНО-МОНТАЖНЫЕ РАБОТЫ</h2>
              </a>
              <p>
                ООО «Арктик Энергострой» было основано в 2010 году. Деятельность
                компании началась с обустройства месторождений Тимано-Печорской
                нефтегазоносной провинции...
              </p>
              <a href="#" class="more">
                Ещё
                <img src={arrowBlack} alt="" />
              </a>
            </div>
            <div class="block">
              <a href="#" class="title">
                <h2>ШМР и ПНР</h2>
              </a>
              <p>
                Специалисты ООО «Арктик Энергострой» осуществляют выполнение
                работ по монтажу, подключению ...
              </p>
              <a href="#" class="more">
                Ещё
                <img src={arrowBlack} alt="" />
              </a>
            </div>
            <div class="block">
              <a href="#" class="title">
                <h2>ПРОЕКТИРОВАНИЕ</h2>
              </a>
              <p>
                ООО «Арктик Энергострой» осуществляет проектирование
                инфраструктуры ...
              </p>
              <a href="#" class="more">
                Ещё
                <img src={arrowBlack} alt="" />
              </a>
            </div>
            <div class="block">
              <a href="#" class="title">
                <h2>ГАРАНТИЙНОЕ ОБСЛУЖИВАНИЕ</h2>
              </a>
              <p>
                Для помощи службам эксплуатации предприятий-заказчиков
                специалисты ООО «Арктик Энергострой» выполняют целый ...
              </p>
              <a href="#" class="more">
                Ещё
                <img src={arrowBlack} alt="" />
              </a>
            </div>
            <div class="block">
              <a href="#" class="title">
                <h2>СЕРВИС</h2>
              </a>
              <p>
                Высокое качество работы оборудования, поставляемого
                предприятиями ООО «Арктик Энергострой» ...
              </p>
              <a href="#" class="more">
                Ещё
                <img src={arrowBlack} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <img src={img1} alt="" />
    </section>
  );
}
