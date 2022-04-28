import React, { useState } from "react";
import map from "./../../assets/img/MainPage/BlockSeven/map.png";
import button from "./../../assets/svg/home/arrow_black.svg";
import styled from "styled-components";
import Project from "../Project/Project";

const state = {
  projects: [
    {
      name: "ООО «ЗАРУБЕЖНЕФТЬ – добыча Харьяга»",
      list: [
        "Поставка приборов КИП",
        "Поставка приборов КИП",
        "Поставка насосного оборудования и ЗИП",
        "Поставка оборудования связи",
        "Поставка преобразователей термосопротивления",
        "Поставка узлов мониторинга коррозии",
        "Поставка электротехнического оборудования и материалов для СГЭ",
        "Поставка датчиков давления, датчиков температуры",
        "Поставка волноводных радарных уровнемеров, датчиков давления и сигнализаторов",
        "Поставка извещателей пламени пожарных и датчиков газа",
        "Поставка волноводных радарных уровнемеров, датчиков давления, термопреобразователей и датчиков вибрации",
        "Поставка дренажной ёмкости",
        "Выполнение комплекса пусконаладочных работ и испытаний оборудования по объекту 'Газотурбинная установка выработки электроэнергии' (Solar TITAN 130)",
        "Выполнение шеф-монтажных и пусконаладочных работ в отношении Оборудования «Здание пропускного пункта в административную зону в блочно-модульном исполнении 100% заводской готовности» на объекте  «Благоустройство ЦПС», «Здание пункта сбора в блочно-модульном исполнении 100% заводской готовности» на объекте «Куст скважин WP-1»",
        "Поставка котельной мощностью 3,3 МВт с выполнением шеф-монтажных и пусконаладочных работ, выполнение инспекции давальческого котельного оборудования заказчика",
        "Поставка щитов управления и пунктов распределительных",
        "Поставка источников бесперебойного питания для ИСУБ",
        "Поставка и выполнение шеф-монтажных и пусконаладочных работ в отношении блок-боксов",
        "Поставка оборудования радиосвязи для ВЖК",
        "Поставка провода сталеалюминиевого и арматуры кабельных и воздушных линий для WP-1",
        "Поставка IT материалов",
      ],
    },
    {
      name: "ООО «ЗапСибНефтехим»",
      list: [
        "Поставка Пробоотборного устройства",
        "Поставка металлорукава и комплектующих",
        "Поставка кабельных муфт",
        "Поставка мачтовых опор",
        "Поставка фасадных ламельных систем",
        "Поставка листов стеклопластиковых",
        "Поставка постов управления",
        "Поставка панелей ПСТ",
        "Поставка коммутационного оборудования",
        "Поставка опор ОГС",
        "Поставка блоков коммутации и управления",
        "Поставка антенно-мачтового сооружения для размещения оборудования радиосвязи",
        "Поставка кабельно-проводниковой продукции",
        "Поставка опор освещения",
        "Поставка компьютерного оборудования",
        "Поставка кабельно-проводниковой продукции",
      ],
    },
    {
      name: "ООО «Славнефть-Красноярскнефтегаз»",
      list: [
        "Поставка кабеленесущих систем",
        "Поставка видеонаблюдения на ЦПС Куюмбинского нефтяного месторождения ООО «Славнефть-Красноярскнефтегаз»",
        "Поставка кабельно-проводниковой продукции на ЦПС Куюмбинского нефтяного месторождения ООО «Славнефть-Красноярскнефтегаз»",
        "Поставка кабеленесущих систем на ЦПС Куюмбинского нефтяного месторождения ООО «Славнефть-Красноярскнефтегаз»",
        "Электрооборудование на ЦПС Куюмбинского нефтяного месторождения ООО «Славнефть-Красноярскнефтегаз»",
        "Кабеленесущие системы на ЦПС Куюмбинского нефтяного месторождения ООО «Славнефть-Красноярскнефтегаз»",
        "Поставка кабельно-проводниковой продукции на ЦПС Куюмбинского нефтяного месторождения ООО «Славнефть-Красноярскнефтегаз»",
        "Поставка электротехнической продукции на ЦПС Куюмбинского нефтяного месторождения ООО «Славнефть-Красноярскнефтегаз»",
        "Поставка кабеленесущих систем на ЦПС Куюмбинского нефтяного месторождения ООО «Славнефть-Красноярскнефтегаз»",
        "Поставка источников и систем бесперебойного питания на ЦПС Куюмбинского нефтяного месторождения ООО «Славнефть-Красноярскнефтегаз»",
        "Поставка приборов охранно-пожарной сигнализации на ЦПС Куюмбинского нефтяного месторождения ООО «Славнефть-Красноярскнефтегаз»",
        "Поставка запорно-регулирующей арматуры на ЦПС Куюмбинского нефтяного месторождения ООО «Славнефть-Красноярскнефтегаз»",
        "Поставка кабеленесущих систем на ЦПС Куюмбинского нефтяного месторождения ООО «Славнефть-Красноярскнефтегаз»",
        "Контрольно-измерительные приборы на ЦПС Куюмбинского нефтяного месторождения ООО «Славнефть-Красноярскнефтегаз»",
        "Электротехническая продукция",
      ],
    },
    {
      name: "АО «Роспан Интернешнл»",
      list: [
        "Поставка шкафов ПРС",
        "Поставка коммутационного оборудования Cisco",
        "Поставка электрооборудования",
        "Поставка Шкафов Schneider Electric и боксов приборных Intertec на объект подготовки газа и газового конденсата",
      ],
    },
    {
      name: "ООО «ПРОЕКТБИЗНЕССТРОЙ»",
      list: [
        "Поставка труб",
        "Поставка задвижек",
        "Поставка расходомеров",
        "Поставка кранов шаровых",
        "Поставка труб",
        "Запорно-регулирующая арматура",
        "Теплообменное оборудование",
      ],
    },
    {
      name: "ООО «ГК ЭФЭСК» Московский филиал",
      list: [
        "Поставка, шефмонтаж и пусконаладка силовых трансформаторов типа ТДНС 16000/35 в северном исполнении УХЛ 1",
        "Услуги по погружению свай для нужд ООО «ЛУКОЙЛ-Коми» на Линии электропередач ВЛ 35кВ Харьяга – ЦПС – Инзырей",
      ],
    },
    {
      name: "ПАО «Мечел»",
      list: [
        "Поставка светильников",
        "Поставка электротехнического оборудования для нужд ООО «Мечел-Транс»",
      ],
    },
    {
      name: "ООО ИК «СИБИНТЕК»",
      list: [
        "Проведение шеф-монтажных и пусконаладочных работ в отношении Оборудования системы ИАСУБ",
        "Изготовление и поставка программно-технического комплекса автоматизированной системы управления",
      ],
    },
    {
      name: "Филиал ОАО «Белэлектромонтажналадка» в г. Москве",
      list: [
        "Низковольтное оборудование",
        "Низковольтное оборудование",
        "Низковольтное оборудование",
        "Низковольтное оборудование",
      ],
    },
    {
      name: "Филиал СУ № 111 ФГУП «ГУССТ №1 при Спецстрое России»",
      list: [
        "Поставка кабельной и электротехнической продукции",
        "Поставка шкафов КП-А (Б)",
      ],
    },
    {
      name: "ООО «СИБУР Тольятти»",
      list: ["Поставка транспортеров"],
    },
    {
      name: "АО «СибурТюменьГаз»",
      list: ["Поставка контрольно-измерительных приборов."],
    },
    {
      name: "АО «Ангарская нефтехимическая компания»",
      list: ["Поставка кабельно-проводниковой продукции"],
    },
    {
      name: "ЗАО «Аэродромы Мосты Дороги»",
      list: [
        "Поставка насосов ЭВЦ, станций управления насосами и кабельно-проводниковой продукции",
      ],
    },
    {
      name: "АО «Мурманский морской торговый порт»",
      list: ["Поставка коммутационного оборудования"],
    },
    {
      name: "ООО «НЭТМЕХАНИК АБС»",
      list: ["Поставка КИП, СОПиГ"],
    },
    {
      name: "Московская областная таможня",
      list: ["Поставка вентиляционных вытяжек"],
    },
    {
      name: "ООО «Термокапитал»",
      list: ["Поставка силовой кабельно-проводниковой продукции"],
    },
    {
      name: "ЦЕНТРАЛЬНАЯ БАЗОВАЯ ТАМОЖНЯ",
      list: ["Поставка электротехнического оборудования"],
    },
    {
      name: "СЛУЖБА ОХРАНЫ НА КАВКАЗЕ ФЕДЕРАЛЬНОЙ СЛУЖБЫ ОХРАНЫ РОССИЙСКОЙ ФЕДЕРАЦИИ",
      list: ["Поставка поршневых помп"],
    },
    {
      name: "ФГУП «Главное военно-строительное управление №14»",
      list: ["Поставка высоковольтных опор для линии электропередач"],
    },
    {
      name: "Федеральное агентство железнодорожного транспорта",
      list: ["Поставка водогрейного оборудования"],
    },
    {
      name: "Прокуратура Московской области",
      list: ["Поставка телемеханических установок"],
    },
    {
      name: "Центральная таможня (Кинологического центра ФТС России)",
      list: ["Поставка металлоконструкций"],
    },
    {
      name: "Филиал АО «Концерн Росэнергоатом» «Курская атомная станция»",
      list: ["Поставка модуля очистки"],
    },
    {
      name: "ООО «Энергосервис»",
      list: ["Поставка монтажных проводов"],
    },
    {
      name: "ПАО 'Криогенмаш'",
      list: ["Поставка кабельных муфт"],
    },
    {
      name: "АО «СибурТюменьГаз»",
      list: ["Поставка контрольно-измерительных приборов."],
    },
  ],
};

const ProjectsStyles = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Montserrat", sans-serif;

  .container {
    position: relative;
    margin: 0px 50px;
    max-width: 1200px;
    height: 100%;
    width: 100%;

    @media (max-width: 767.98px) {
      margin: 0px 30px;
    }
    @media (max-width: 479.98px) {
      margin: 0px 20px;
    }
  }

  .block {
    height: 100%;
    width: 100%;
    padding-top: 100px;

    @media (max-width: 1199.98px) {
      padding-top: 80px;
    }
    @media (max-width: 1991.98px) {
      padding-top: 70px;
    }
    @media (max-width: 767.98px) {
      padding-top: 55px;
    }
    @media (max-width: 479.98px) {
      padding-top: 40px;
    }

    &__title {
      margin-bottom: 20px;

      h1 {
        font-weight: 600;
        font-size: 48px;

        @media (max-width: 1199.98px) {
          font-size: 35px;
        }
        @media (max-width: 1991.98px) {
          font-size: 25px;
        }
        @media (max-width: 767.98px) {
          font-size: 22px;
        }
        @media (max-width: 479.98px) {
          font-size: 20px;
        }
      }
    }
    &__map {
      margin-bottom: 20px;
      img {
        width: 100%;
        height: auto;
      }
    }
    &__orders {
      display: flex;
      align-items: center;
      flex-direction: column;

      h2 {
        align-self: flex-start;
        font-weight: 600;
        font-size: 36px;
        margin-bottom: 40px;

        @media (max-width: 1199.98px) {
          font-size: 30px;
        }
        @media (max-width: 1991.98px) {
          font-size: 20px;
        }
        @media (max-width: 767.98px) {
          font-size: 17px;
        }
        @media (max-width: 479.98px) {
          font-size: 14px;
        }
      }
      &_grid {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 30px;
        margin-bottom: 30px;

        @media (max-width: 1991.98px) {
          grid-gap: 25px;
        }
        @media (max-width: 767.98px) {
          grid-template-columns: repeat(1, 1fr);
          grid-gap: 20px;
        }

        button {
          text-align: left;
          width: 100%;
          height: 100px;
          font-weight: 600;
          font-size: 18px;
          background: #efefef;
          display: flex;
          align-items: center;
          padding: 0px 60px;
          color: black;
          line-height: 130%;

          @media (max-width: 1199.98px) {
            font-size: 14px;
            height: 90px;
            padding: 0px 40px;
          }
          @media (max-width: 1991.98px) {
            font-size: 10px;
            height: 70px;
            padding: 0px 30px;
          }
          @media (max-width: 767.98px) {
            height: 60px;
            padding: 0px 20px;
          }
          @media (max-width: 479.98px) {
            height: 50px;
          }

          &:hover {
            background: #ffd600;
            font-size: 24px;

            @media (max-width: 1199.98px) {
              font-size: 18px;
            }
            @media (max-width: 1991.98px) {
              font-size: 14px;
            }
          }
        }
      }

      .more {
        width: fit-content;
        font-weight: 600;
        font-size: 18px;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: 0.2s ease-in-out;
        background: none;
        gap: 10px;

        &:hover {
          color: #ffc729;
          margin-left: 10px;

          svg {
            margin-left: 10px;
          }
        }

        @media (max-width: 1199.98px) {
          font-size: 16px;
        }
        @media (max-width: 1991.98px) {
          font-size: 14px;
        }
        @media (max-width: 767.98px) {
          font-size: 13px;
          padding-left: 20px;
        }
        @media (max-width: 479.98px) {
          font-size: 12px;
        }

        .icon {
          fill: none;
          width: 51px;
          height: 54px;

          @media (max-width: 1199.98px) {
            width: 48px;
            height: 51px;
          }
          @media (max-width: 1991.98px) {
            width: 45px;
            height: 48px;
          }
          @media (max-width: 767.98px) {
            width: 42px;
            height: 45px;
          }
        }

        svg {
          margin-left: 5px;
          transition: 0.2s ease-in-out;
        }
      }
    }
  }

  .menu {
    width: 100%;
    padding: 100px 0px 80px 0px;

    .nav {
      width: 100%;
      display: flex;
      justify-content: space-between;
      gap: 20px;

      @media (max-width: 1991.98px) {
        gap: 10px;
      }
      @media (max-width: 767.98px) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
      }
      @media (max-width: 479.98px) {
        display: flex;
        flex-direction: column;
      }

      &__column {
        @media (max-width: 767.98px) {
          margin-bottom: 30px;
        }
        @media (max-width: 479.98px) {
          margin-bottom: 10px;
        }

        &:hover {
          .nav__column_title {
            a {
              color: #ffd600;
            }
          }
        }

        &_title {
          margin-bottom: 20px;

          a {
            font-weight: 400;
            font-size: 18px;
            color: #3a3c41;
          }
        }
        &_list {
          @media (max-width: 479.98px) {
            display: none;
          }
          li {
            a {
              font-weight: 300;
              font-size: 12px;
              line-height: 200%;
              color: #3a3c41;

              &:hover {
                text-decoration: underline;
              }
            }
          }
        }
      }
    }
  }
`;

const Item = ({ index, project, showProject, col }) => {
  if (index <= col) {
    return (
      <button
        key={index}
        onClick={() => {
          showProject(project.name);
        }}
      >
        {project.name}
      </button>
    );
  } else {
    return;
  }
};

export default function Projects() {
  const [link, setLink] = useState(false);
  const [col, setCol] = useState(9);

  const [project, setProject] = useState(state.projects[0]);

  function showProject(name) {
    console.log("change state " + name);
    let projectData = state.projects.filter((x) => x.name == name);
    console.log(projectData);
    setProject(projectData);
    setLink(true);
  }

  function changeLink() {
    setLink(false);
  }

  return (
    <>
      {link == true ? (
        <Project project={project} back={changeLink} />
      ) : (
        <ProjectsStyles>
          <div className="container">
            <div className="block">
              <div className="block__title">
                <h1>Реализованные проекты</h1>
              </div>
              <div className="block__map">
                <img src={map} alt="map" />
              </div>
              <div className="block__orders">
                <h2>Заказчики</h2>
                <div className="block__orders_grid">
                  {state.projects.map((project, index) => (
                    <Item
                      project={project}
                      key={index}
                      index={index}
                      showProject={showProject}
                      col={col}
                    />
                  ))}
                </div>
                <button className="more" onClick={() => setCol(col + 10)}>
                  Еще
                  <img src={button} alt="button" />
                </button>
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
        </ProjectsStyles>
      )}
    </>
  );
}
