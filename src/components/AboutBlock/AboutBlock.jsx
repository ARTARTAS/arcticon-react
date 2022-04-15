import React from "react";
import arrowBlack from "./../../assets/svg/home/arrow_black.svg";
import img1 from "./../../assets/img/MainPage/BlockThree/logo_img.png";
import img2 from "./../../assets/img/MainPage/BlockThree/01.png";

export default function AboutBlock() {
  return (
    <section className="three">
      <div className="back"></div>
      <div className="container">
        <div className="block">
          <div className="block__expirience square">
            <h1>11 лет</h1>
            <h3>Опыта</h3>
          </div>
          <div className="block__logo square">
            <img src={img1} alt="" />
          </div>
          <div className="block__contracts square">
            <h1>800+</h1>
            <h3>Успешно реализованных контрактов</h3>
          </div>
          <div className="block__turnover square">
            <h1>4 000 000 000 ₽</h1>
            <h3>Оборот компании</h3>
          </div>
          <div className="block__video">
            <img src={img2} alt="" />
          </div>
          <div className="block__title">
            <h1>О нас</h1>
            <p>
              Многолетний опыт лежит в основе всего, что мы делаем. Наша команда
              состоит и высококвалифицированных специалистов способных решать
              сложные технологические задачи.
            </p>
          </div>
          <div className="block__text">
            <p>
              ОО «Арктик Энергострой» является поставщиком услуг для
              энергетической отрасли с разнообразным портфелем клиентов, включая
              ведущие нефтегазодобывающие компании.
            </p>
            <p>
              Мы проектируем, комплектуем, строим, управляем и поддерживаем
              инфраструктуру для энергетических отраслей. Наше комплексное и
              индивидуальное предложение услуг охватывает каждый этап жизненного
              цикла проекта и различные коммерческие модели, предоставляя нашим
              клиентам необходимую гибкость.
            </p>
          </div>
          <a href="#">
            Далее
            <img className="icon" src={arrowBlack} alt="" />
          </a>
        </div>
      </div>
    </section>
  );
}
