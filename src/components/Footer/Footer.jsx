import React from "react";
import img1 from "./../../assets/img/logo.png";
import img2 from "./../../assets/img/MainPage/Footer/Ellipse.png";

export default function Footer() {
  return (
    <footer>
      <div class="top">
        <div class="container">
          <div class="block">
            <div class="logo">
              <img src={img1} alt="" />
            </div>
            <div class="menu">
              <div class="company">
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
              <div class="solutions">
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
              <div class="services">
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
              <div class="contacts">
                <h2>Контакты</h2>
                <ul>
                  <li>
                    <a href="">Пресс-центр</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="follow__mobile">
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
      <div class="line"></div>
      <div class="bottom">
        <div class="container">
          <div class="block">
            <div class="info">
              <p>
                © 2010—2021 «Арктик Энергострой». Все права защищены.
                <br />
                Копирование материлов возможно с письменного разрешения
                владельцев сайта.
              </p>
            </div>
            <div class="follow">
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
