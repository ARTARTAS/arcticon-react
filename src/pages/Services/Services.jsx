import React from "react";
import img1 from "./../../assets/svg/home/details_black.svg";
import "../../styles/services.css"

export default function Services() {
  return (
    <section>
      <div className="container">
        <div className="title">
          <h1>Услуги и сервис</h1>
        </div>
        <div className="pallet">
          <div className="pallet__grid">
            <div className="pallet__grid_section">
              <div className="block">
                <div className="block__title">
                  <h1>ШМР и ПНР</h1>
                  <a href="/service-page/">
                    <img classNameName="icon" src={img1} alt="" />
                  </a>
                  <div className="block__title_line"></div>
                </div>
                <div className="block__info">
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>
            </div>
            <div className="pallet__grid_section">
              <div className="block">
                <div className="block__title">
                  <h1>Проектирование</h1>
                  <a href="/service-page/">
                    <img classNameName="icon" src={img1} alt="" />
                  </a>
                  <div className="block__title_line"></div>
                </div>
                <div className="block__info">
                  <p>
                    ООО «Арктик Энергострой» выступает в качестве генерального
                    подрядчика
                  </p>
                </div>
              </div>
            </div>
            <div className="pallet__grid_section">
              <div className="block">
                <div className="block__title">
                  <h1>EPCM</h1>
                  <a href="/service-page/">
                    <img classNameName="icon" src={img1} alt="" />
                  </a>
                  <div className="block__title_line"></div>
                </div>
                <div className="block__info">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Nemo, est!
                  </p>
                </div>
              </div>
            </div>
            <div className="pallet__grid_section">
              <div className="block">
                <div className="block__title">
                  <h1>Строительно-монтажные работы</h1>
                  <a href="/service-page/">
                    <img classNameName="icon" src={img1} alt="" />
                  </a>
                  <div className="block__title_line"></div>
                </div>
                <div className="block__info">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Dolor repudiandae vitae provident.
                  </p>
                </div>
              </div>
            </div>
            <div className="pallet__grid_section">
              <div className="block">
                <div className="block__title">
                  <h1>Гарантийное обслуживание</h1>
                  <a href="/service-page/">
                    <img classNameName="icon" src={img1} alt="" />
                  </a>
                  <div className="block__title_line"></div>
                </div>
                <div className="block__info">
                  <p>
                    ООО «Арктик Энергострой» выступает в качестве генерального
                    подрядчика, результатом работы которого является
                    функционирующий объект или система на условиях «под ключ».
                  </p>
                </div>
              </div>
            </div>
            <div className="pallet__grid_section">
              <div className="block">
                <div className="block__title">
                  <h1>Сервис</h1>
                  <a href="/service-page/">
                    <img classNameName="icon" src={img1} alt="" />
                  </a>
                  <div className="block__title_line"></div>
                </div>
                <div className="block__info">
                  <p>
                    ООО «Арктик Энергострой» выступает в качестве генерального
                    подрядчика, результатом работы которого является
                    функционирующий объект или система на условиях «под ключ».
                  </p>
                </div>
              </div>
            </div>
            <div className="pallet__grid_section">
              <div className="block">
                <div className="block__title">
                  <h1>EPCM</h1>
                  <a href="/service-page/">
                    <img classNameName="icon" src={img1} alt="" />
                  </a>
                  <div className="block__title_line"></div>
                </div>
                <div className="block__info">
                  <p>
                    ООО «Арктик Энергострой» выступает в качестве генерального
                    подрядчика, результатом работы которого является
                    функционирующий объект или система на условиях «под ключ».
                  </p>
                </div>
              </div>
            </div>
            <div className="pallet__grid_section">
              <div className="block">
                <div className="block__title">
                  <h1>Комплексные поставки</h1>
                  <a href="/service-page/">
                    <img className="icon" src={img1} alt="" />
                  </a>
                  <div className="block__title_line"></div>
                </div>
                <div className="block__info">
                  <p>
                    ООО «Арктик Энергострой» выступает в качестве генерального
                    подрядчика, результатом работы которого является
                    функционирующий объект или система на условиях «под ключ».
                  </p>
                </div>
              </div>
            </div>
          </div>
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
                  <a href="#">Контрольно-измерительные приборы и автоматика</a>
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
    </section>
  );
}
