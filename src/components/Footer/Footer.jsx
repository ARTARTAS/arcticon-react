import React from "react";
import img1 from "./../../assets/img/logo.png";
import img2 from "./../../assets/img/MainPage/Footer/Ellipse.png";

export default function Footer() {
  return (
    <footer>
      <div className="top">
        <div className="container">
          <div className="block">
            <div className="logo">
              <img src={img1} alt="" />
            </div>
            <div className="menu">
              <div className="company">
                <h2>Компания</h2>
                <ul>
                  <li>
                    <a href="">О нас</a>
                  </li>
                  <li>
                    <a href="">Ключевые проэкты</a>
                  </li>
                  <li>
                    <a href="">Партнеры</a>
                  </li>
                  <li>
                    <a href="">Заказчики</a>
                  </li>
                  <li>
                    <a href="">Сертификаты</a>
                  </li>
                  <li>
                    <a href="">Вакансии</a>
                  </li>
                </ul>
              </div>
              <div className="solutions">
                <h2>Решения</h2>
                <ul>
                  <li>
                    <a href="">Всё оборудование</a>
                  </li>
                  <li>
                    <a href="">Реальная защита. Автоматизация и управление</a>
                  </li>
                  <li>
                    <a href="">Преобразовательное оборудование</a>
                  </li>
                  <li>
                    <a href="">Распределительное оборудование</a>
                  </li>
                  <li>
                    <a href="">Судовое электрооборудование</a>
                  </li>
                  <li>
                    <a href="">Автоматизация технологических процессов</a>
                  </li>
                  <li>
                    <a href="">Электрооборудование в специальном исполнении</a>
                  </li>
                  <li>
                    <a href="">Никзовольтная аппаратура</a>
                  </li>
                  <li>
                    <a href="">Комплексные решения</a>
                  </li>
                  <li>
                    <a href="">Навигационные и связные системы</a>
                  </li>
                </ul>
              </div>
              <div className="services">
                <h2>Услуги</h2>
                <ul>
                  <li>
                    <a href="">ЕРСМ</a>
                  </li>
                  <li>
                    <a href="">Проектирование</a>
                  </li>
                  <li>
                    <a href="">Комплексные поставки</a>
                  </li>
                  <li>
                    <a href="">Строительно-монтажные работы</a>
                  </li>
                  <li>
                    <a href="">Шеф-монтаж и ПНР</a>
                  </li>
                  <li>
                    <a href="">Гарантийное обслуживание</a>
                  </li>
                  <li>
                    <a href="">Сервис</a>
                  </li>
                  <li>
                    <a href="">Автоматизация объектов</a>
                  </li>
                </ul>
              </div>
              <div className="contacts">
                <h2>Контакты</h2>
                <ul>
                  <li>
                    <a href="">Пресс-центр</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="follow__mobile">
            <h4>Follow us: </h4>
            <a href="">
              {" "}
              <img src={img2} alt="" />
            </a>
            <a href="">
              {" "}
              <img src={img2} alt="" />
            </a>
            <a href="">
              {" "}
              <img src={img2} alt="" />
            </a>
            <a href="">
              {" "}
              <img src={img2} alt="" />
            </a>
          </div>
        </div>
      </div>
      <div className="line"></div>
      <div className="bottom">
        <div className="container">
          <div className="block">
            <div className="info">
              <p>
                © 2010—2021 «Арктик Энергострой». Все права защищены.
                <br />
                Копирование материлов возможно с письменного разрешения
                владельцев сайта.
              </p>
            </div>
            <div className="follow">
              <h4>Follow us: </h4>
              <a href="">
                {" "}
                <img src={img2} alt="" />
              </a>
              <a href="">
                {" "}
                <img src={img2} alt="" />
              </a>
              <a href="">
                {" "}
                <img src={img2} alt="" />
              </a>
              <a href="">
                {" "}
                <img src={img2} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
