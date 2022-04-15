import React from "react";
import arrowBlack from "./../../assets/svg/home/arrow_black.svg";
import img1 from "./../../assets/img/MainPage/BlockNine/01.jpg";

export default function ServicesBlock() {
  return (
    <section className="nine">
      <div className="container">
        <div className="nine__block">
          <h1>УСЛУГИ И СЕРВИС</h1>
          <div className="nine__block_table">
            <div className="block">
              <a href="#" className="title">
                <h2>EPCM</h2>
              </a>
              <p>
                ООО «Арктик Энергострой» выступает в качестве генерального
                подрядчика, результатом работы ...
              </p>
              <a href="#" className="more">
                Ещё
                <img class="icon" src={arrowBlack} alt="" />
              </a>
            </div>
            <div className="block">
              <a href="#" className="title">
                <h2>СТРОИТЕЛЬНО-МОНТАЖНЫЕ РАБОТЫ</h2>
              </a>
              <p>
                ООО «Арктик Энергострой» было основано в 2010 году. Деятельность
                компании началась с обустройства месторождений Тимано-Печорской
                нефтегазоносной провинции...
              </p>
              <a href="#" className="more">
                Ещё
                <img class="icon" src={arrowBlack} alt="" />
              </a>
            </div>
            <div className="block">
              <a href="#" className="title">
                <h2>ШМР и ПНР</h2>
              </a>
              <p>
                Специалисты ООО «Арктик Энергострой» осуществляют выполнение
                работ по монтажу, подключению ...
              </p>
              <a href="#" className="more">
                Ещё
                <img class="icon" src={arrowBlack} alt="" />
              </a>
            </div>
            <div className="block">
              <a href="#" className="title">
                <h2>ПРОЕКТИРОВАНИЕ</h2>
              </a>
              <p>
                ООО «Арктик Энергострой» осуществляет проектирование
                инфраструктуры ...
              </p>
              <a href="#" className="more">
                Ещё
                <img class="icon" src={arrowBlack} alt="" />
              </a>
            </div>
            <div className="block">
              <a href="#" className="title">
                <h2>ГАРАНТИЙНОЕ ОБСЛУЖИВАНИЕ</h2>
              </a>
              <p>
                Для помощи службам эксплуатации предприятий-заказчиков
                специалисты ООО «Арктик Энергострой» выполняют целый ...
              </p>
              <a href="#" className="more">
                Ещё
                <img class="icon" src={arrowBlack} alt="" />
              </a>
            </div>
            <div className="block">
              <a href="#" className="title">
                <h2>СЕРВИС</h2>
              </a>
              <p>
                Высокое качество работы оборудования, поставляемого
                предприятиями ООО «Арктик Энергострой» ...
              </p>
              <a href="#" className="more">
                Ещё
                <img class="icon" src={arrowBlack} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <img src={img1} alt="" />
    </section>
  );
}
