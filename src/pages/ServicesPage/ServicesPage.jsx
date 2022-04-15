import React from "react";
import img1 from "./../../assets/svg/services/arrow.svg";
import "../../styles/service-page.css"

export default function ServicesPage() {
  return (
    <section>
      <div className="container">
        <div className="block">
          <div className="block__title">
            <h1>ерсм</h1>
          </div>
          <div className="block__page-nav">
            <nav>
              <ul>
                <li>
                  <a href="/">Главная</a>
                </li>
                <li>
                  <img className="icon" src={img1} alt="" />
                </li>
                <li>
                  <a href="/services/">Услуги и сервис</a>
                </li>
                <li>
                  <img className="icon" src={img1} alt="" />
                </li>
                <li>
                  <a href="">ЕРСМ</a>
                </li>
              </ul>
              <ul>
                <li className="to-left">
                  <img className="icon" src={img1} alt="" />
                </li>
                <li>
                  <a href="/services/">Назад</a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="block__info">
            <p>
              ООО «Арктик Энергострой» выступает в качестве генерального
              подрядчика, результатом работы которого является функционирующий
              объект или система на условиях «под ключ».
            </p>
            <p>
              Ключевыми компетенциями на данных проектах выступают
              квалифицированное управление процессами проектирования, закупки,
              логистики, таможенная очистка оборудования (при необходимости), а
              также разработка ключевых технических решений и профессиональное
              управление работами на строительных площадках.
            </p>
            <p>
              Для каждого проекта формируется команда необходимых
              квалифицированных специалистов, возглавляемая Руководителем
              проекта, ответственная за достижение ключевых показателей и общий
              риск-менеджмент проекта.
            </p>
          </div>

          <menu className="menu">
            <nav className="nav">
              <div className="nav__column">
                <div className="nav__column_title">
                  <a href="#">Структура организации</a>
                </div>
                <ul className="nav__column_list">
                  <li>
                    <a href="#">Руководство</a>
                  </li>
                  <li>
                    <a href="#">Отдел снабжения</a>
                  </li>
                  <li>
                    <a href="#">Отдел проектных продаж</a>
                  </li>
                  <li>
                    <a href="#">Финансовый отдел</a>
                  </li>
                  <li>
                    <a href="#">Административный отдел</a>
                  </li>
                </ul>
              </div>
              <div className="nav__column">
                <div className="nav__column_title">
                  <a href="#">Оборудование</a>
                </div>
                <ul className="nav__column_list">
                  <li>
                    <a href="#">Трансформаторы</a>
                  </li>
                  <li>
                    <a href="#">Сетевое и коммутационное оборудование</a>
                  </li>
                  <li>
                    <a href="#">Кабели и провода</a>
                  </li>
                  <li>
                    <a href="#">Емкостное и теплообменное оборудование</a>
                  </li>
                  <li>
                    <a href="#">
                      Частотные преобразователи и устройства плавного пуска
                    </a>
                  </li>
                  <li>
                    <a href="#">Металлоконструкции</a>
                  </li>
                  <li>
                    <a href="#">Терминалы мобильной связи</a>
                  </li>
                  <li>
                    <a href="#">
                      Контрольно-измерительные приборы и автоматика
                    </a>
                  </li>
                  <li>
                    <a href="#">Дизельные электростанции</a>
                  </li>
                  <li>
                    <a href="#">Высоковольтное оборудование</a>
                  </li>
                  <li>
                    <a href="#">Системы бесперебойного питания</a>
                  </li>
                  <li>
                    <a href="#">Оборудование для крепления скважин</a>
                  </li>
                  <li>
                    <a href="#">Осветительное оборудование</a>
                  </li>
                  <li>
                    <a href="#">Низковольтное комплектное устройство</a>
                  </li>
                  <li>
                    <a href="#">Системы видеонаблюдения</a>
                  </li>
                  <li>
                    <a href="#">
                      Блочно-модульные здания и энергетические комплексы
                    </a>
                  </li>
                  <li>
                    <a href="#">Водоснабжение и канализация</a>
                  </li>
                  <li>
                    <a href="#">Сэндвич-панели</a>
                  </li>
                </ul>
              </div>
              <div className="nav__column">
                <div className="nav__column_title">
                  <a href="#">Услуги и сервис</a>
                </div>
                <ul className="nav__column_list">
                  <li>
                    <a href="#">ЕРСМ</a>
                  </li>
                  <li>
                    <a href="#">Проектирование</a>
                  </li>
                  <li>
                    <a href="#">Строительно-монтажные работы</a>
                  </li>
                  <li>
                    <a href="#">ШМР и ПНР</a>
                  </li>
                  <li>
                    <a href="#">Гарантийное обслуживание</a>
                  </li>
                  <li>
                    <a href="#">Сервис</a>
                  </li>
                  <li>
                    <a href="#">Комплексные поставки</a>
                  </li>
                  <li>
                    <a href="#">Автоматизация объектов</a>
                  </li>
                </ul>
              </div>
              <div className="nav__column">
                <div className="nav__column_title">
                  <a href="#">О нас</a>
                </div>
                <ul className="nav__column_list">
                  <li>
                    <a href="#">Ключевые проекты</a>
                  </li>
                  <li>
                    <a href="#">Вакансии</a>
                  </li>
                  <li>
                    <a href="#">Стажировка</a>
                  </li>
                  <li>
                    <a href="#">Лицензия и сертификаты</a>
                  </li>
                  <li>
                    <a href="#">Отзывы</a>
                  </li>
                </ul>
              </div>
              <div className="nav__column">
                <div className="nav__column_title">
                  <a href="#">Контакты</a>
                </div>
                <ul className="nav__column_list">
                  <li>
                    <a href="#">Пресс-центр</a>
                  </li>
                  <li>
                    <a href="#">Мероприятия</a>
                  </li>
                </ul>
              </div>
            </nav>
          </menu>
        </div>
      </div>
    </section>
  );
}
