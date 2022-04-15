import React from "react";
import img1 from "./../../assets/img/About/background.png";
import img2 from "./../../assets/img/About/logo.png";
import img3 from "./../../assets/svg/home/details_black.svg";

import img4 from "./../../assets/img/MainPage/BlockThree/logo_img.png";
import img5 from "./../../assets/img/MainPage/BlockThree/01.png";

import img6 from "./../../assets/img/MainPage/BlockFive/01.jpg";

import "../../styles/about.css"

export default function AboutUs() {
  return (
    <>
      <section className="one">
        <div className="background">
          <img src={img1} alt="background" />
        </div>
        <div className="container">
          <div className="block">
            <div className="block__logo">
              <img src={img2} alt="logo" />
            </div>
            <div className="block__info_right">
              <p>
                ОО «Арктик Энергострой» является поставщиком услуг для
                энергетической отрасли с разнообразным портфелем клиентов,
                включая ведущие нефтегазодобывающие компании.
              </p>
              <p>
                Многолетний опыт лежит в основе всего, что мы делаем. Наша
                команда состоит и высококвалифицированных специалистов способных
                решать сложные технологические задачи.
              </p>
            </div>
            <div className="block__info_bottom">
              <p className="bottom-mobile">
                Многолетний опыт лежит в основе всего, что мы делаем. Наша
                команда состоит и высококвалифицированных специалистов способных
                решать сложные технологические задачи.
              </p>
              <p>
                Мы проектируем, комплектуем, строим, управляем и поддерживаем
                инфраструктуру для энергетических отраслей. Наше комплексное и
                индивидуальное предложение услуг охватывает каждый этап
                жизненного цикла проекта и различные коммерческие модели,
                предоставляя нашим клиентам необходимую гибкость.
              </p>
            </div>
            <a href="#">
              Далее
              <img src={img3} alt="" />
            </a>
          </div>
        </div>
      </section>

      <section className="two">
        <div className="back"></div>
        <div className="container">
          <div className="block">
            <div className="block__expirience square">
              <h1>11 лет</h1>
              <h3>Опыта</h3>
            </div>
            <div className="block__logo square">
              <img src={img4} alt="" />
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
              <img src={img5} alt="" />
            </div>
            <div className="block__title">
              <h1>О нас</h1>
              <p>
                Многолетний опыт лежит в основе всего, что мы делаем. Наша
                команда состоит и высококвалифицированных специалистов способных
                решать сложные технологические задачи.
              </p>
            </div>
            <div className="block__text">
              <p>
                ОО «Арктик Энергострой» является поставщиком услуг для
                энергетической отрасли с разнообразным портфелем клиентов,
                включая ведущие нефтегазодобывающие компании.
              </p>
              <p>
                Мы проектируем, комплектуем, строим, управляем и поддерживаем
                инфраструктуру для энергетических отраслей. Наше комплексное и
                индивидуальное предложение услуг охватывает каждый этап
                жизненного цикла проекта и различные коммерческие модели,
                предоставляя нашим клиентам необходимую гибкость.
              </p>
            </div>
            <a href="#">
              Далее
              <img src={img3} alt="" />
            </a>
          </div>
        </div>
      </section>

      <section className="three">
        <div className="fixed_bottom_one">
          Заказчики Услуги и сервис Партнеры Контакты Продукция Заказчики О
          нас&nbsp; Заказчики Услуги и сервис Партнеры Контакты Продукция
          Заказчики О нас&nbsp; Заказчики Услуги и сервис Партнеры Контакты
          Продукция Заказчики О нас&nbsp; Заказчики Услуги и сервис Партнеры
          Контакты Продукция Заказчики О нас&nbsp; Заказчики Услуги и сервис
          Партнеры Контакты Продукция Заказчики О нас&nbsp;
        </div>
        <div className="fixed_bottom_two">
          Заказчики Услуги и сервис Партнеры Контакты Продукция Заказчики О
          нас&nbsp; Заказчики Услуги и сервис Партнеры Контакты Продукция
          Заказчики О нас&nbsp; Заказчики Услуги и сервис Партнеры Контакты
          Продукция Заказчики О нас&nbsp; Заказчики Услуги и сервис Партнеры
          Контакты Продукция Заказчики О нас&nbsp; Заказчики Услуги и сервис
          Партнеры Контакты Продукция Заказчики О нас&nbsp;
        </div>
        <div className="fixed_bottom_three">
          Заказчики Услуги и сервис Партнеры Контакты Продукция Заказчики О
          нас&nbsp; Заказчики Услуги и сервис Партнеры Контакты Продукция
          Заказчики О нас&nbsp; Заказчики Услуги и сервис Партнеры Контакты
          Продукция Заказчики О нас&nbsp; Заказчики Услуги и сервис Партнеры
          Контакты Продукция Заказчики О нас&nbsp; Заказчики Услуги и сервис
          Партнеры Контакты Продукция Заказчики О нас&nbsp;
        </div>
      </section>

      <section className="four">
        <div className="image">
          <img src={img6} alt="" />
        </div>
        <div className="container">
          <div className="block">
            <div className="block__info">
              <h1>Карьера в Arctic Energostroy</h1>
              <p>
                Мы всегда рады принять в нашу команду талантливых и трудолюбивых
                специалистов. Если вы мечтаете об интересной работе, которая
                позволит раскрыть ваши профессиональные возможности – мы ждем
                вас!
              </p>
              <a href="#">
                Подробнее
                <img src={img3} alt="" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
