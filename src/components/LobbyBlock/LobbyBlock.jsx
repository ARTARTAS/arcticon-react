import React, { useEffect, useRef, useState } from "react";
import arrowBlack from "./../../assets/svg/arrowBlack.svg";
import img1 from "./../../assets/img/MainPage/BlockOne/FirstSection/back.png";
import img2 from "./../../assets/img/MainPage/BlockOne/FirstSection/front.png";
import img3 from "./../../assets/img/MainPage/BlockOne/SecondSection/back.png";
import img4 from "./../../assets/img/MainPage/BlockOne/SecondSection/front.png";
import img5 from "./../../assets/img/MainPage/BlockOne/ThreeSection/back.png";
import img6 from "./../../assets/img/MainPage/BlockOne/ThreeSection/front.png";

export default function LobbyBlock() {
  const [isScroll, setScroll] = useState(false);
  const [section, setSection] = useState(0);

  const minute = 60000;

  const animationTime = minute / 2;

  const unlockScroll = () => {
    setInterval(function () {
      setScroll(false);
      console.log("unlock scroll");
    }, animationTime);
  };

  const lockScroll = () => {
    setScroll(true);
    console.log("lock scroll");
  };

  const visibleScroll = () => {
    document.body.style.overflow = "visible";
    console.log("visible scroll");
  };

  const hiddenScroll = () => {
    document.body.style.overflow = "hidden";
    console.log("hidden scroll");
  };

  function setSettings() {
    hiddenScroll();

    window.onwheel = function (e) {
      console.log(isScroll);
      if (isScroll == false) {
        if (e.wheelDelta >= 0) {
          console.log("scroll top");
        } else {
          console.log("scroll down");
        }
        lockScroll();
        unlockScroll();
      }
    };
  }

  useEffect(() => {
    return () => {
      setSettings();
    };
  }, []);

  // $(".one__one, .one__two, .one__three").on("touchstart", function (e) {
  //   startPosition = e.originalEvent.touches[0].pageY;
  // });
  // $(".one__one, .one__two, .one__three").on("touchend", function (e) {
  //   endPosition = e.originalEvent.changedTouches[0].pageY;
  //   if (startPosition < endPosition && startPosition < endPosition - 70) {
  //     ScrollTop();
  //   } else if (startPosition > endPosition && startPosition - 70 > endPosition) {
  //     ScrollBottom();
  //   }
  // });

  return (
    <div>
      <section className="one__one">
        <div className="container">
          <div className="one__one_block">
            <div className="info">
              <h1>
                передовые <br /> технологии
              </h1>
              <h2>
                и эффективные решения для производственных, транспортных
                строительных и сельскохозяйственных предприятий
              </h2>
              <a href="#">
                Подробнее
                <img src={arrowBlack} alt="" />
              </a>
            </div>
          </div>
        </div>
        <div className="images">
          <img className="back" src={img1} alt="" />
          <img className="front" src={img2} alt="" />
        </div>
      </section>

      {/* <section className="one__two">
        <div className="container">
          <div className="one__two_block">
            <div className="info">
              <h2>
                Мы проектируем,
                <br />
                комплектуем, строим
                <br />
                и поддерживаем
                <br />
                инфраструктуру для
              </h2>
              <h1>
                энергетических
                <br /> отраслей
              </h1>
              <a href="#">
                Подробнее
                <img src={arrowBlack} alt="" />
              </a>
            </div>
          </div>
        </div>
        <div className="images">
          <img className="back" src={img3} alt="" />
          <img className="front" src={img4} alt="" />
        </div>
      </section>

      <section className="one__three">
        <div className="container">
          <div className="one__three_block">
            <div className="info">
              <h1>Решения</h1>
              <h2>для топливно-энергетического комплекса</h2>
              <a href="#">
                Подробнее
                <img src={arrowBlack} alt="" />
              </a>
            </div>
          </div>
        </div>
        <div className="images">
          <img className="back" src={img5} alt="" />
          <img className="front" src={img6} alt="" />
        </div>
      </section>

      <section className="modal__one">
        <div className="modal_close-button"></div>
        <div className="line"></div>
        <div className="container">
          <div className="block">
            <div className="block__image">
              <img
                className="modal__one_front"
                src="<?php echo get_template_directory_uri(); ?>/img/MainPage/ModalOne/front.png"
                alt="front image"
              />
              <img
                className="modal__one_background"
                src="<?php echo get_template_directory_uri(); ?>/img/MainPage/ModalOne/background.png"
                alt="background iamge"
              />
              <img src="" alt="svg" />
            </div>
            <div className="block__info">
              <div className="block__info_title">
                <h1>ООО «Артик Энергострой» </h1>
              </div>
              <div className="block__info_text">
                <p>
                  Предоставляет полный комплекс услуг по проектированию, сборке,
                  поставке, внедрению и сопровождению автоматизированных систем
                  управления технологическими процессами (АСУТП) любой
                  сложности, включая подсистемы противоаварийной и
                  противопожарной защиты, системы управления энергообеспечением,
                  системы телемеханики, локальные системы управления блочным
                  оборудованием, производственно-диспетчерские службы и пр.
                </p>
                <p>
                  Компания является официальным поставщиком таких компаний как
                  Cisco, Lenovo, Emerson и др., а так же имеет опыт реализации
                  крупных проектов для таки Заказчиков как ООО ИК «СИБИНТЕК»
                  (Изготовление и поставка программно-технического комплекса
                  автоматизированной системы управления с проведением
                  шеф-монтажных и пусконаладочных работ для центрального пункта
                  сбора нефти Куюмбинского нефтегазоконденсатного
                  месторождения), АО «Мурманский морской торговый порт»
                  (Поставка коммутационного оборудования) и др.
                </p>
                <p>
                  С более подробной информацией об опыте Компании, оборудовании
                  предоставляемых услугах Вы сможете ознакомится в разделах
                  сайта (идет активная ссылка на разделы):
                </p>
              </div>
              <div className="buttons">
                <a href="">ПРОДУКЦИЯ</a>
                <a href="">УСЛУГИ И СЕРВИС</a>
                <a href="">Проекты</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="modal__two">
        <div className="modal_close-button"></div>
        <div className="line"></div>
        <div className="container">
          <div className="block">
            <div className="block__info_text">
              <p>
                ООО «Арктик Энергострой» начала свою деятельность в 2010 году с
                проекта строительства воздушной линии электропередачи 35 кВ
                «Харьяга – ЦПС Инзырей» для нужд ООО «Лукойл-Коми».
              </p>
              <p>
                После успешной реализации проекта, компания заработала авторитет
                и ее стали приглашать к участию в крупных и технически сложных
                проектах Тимано-Печорской нефтегазоносной провинции, например,
                для поставки, шеф-монтажа и пусконаладочных работ
                трансформаторов типа ТДНС 16000/35 в северном исполнении УХЛ 1
                для Энергоцентра №2 на базе ГТУ ЭГЭС-12 для нужд ООО «СК
                «РУСВЬЕТПЕТРО».
              </p>
              <p>
                Получив опыт и признание Заказчиков, компания продолжает свою
                деятельность в Республике Коми и Ненецком автономном округе,
                объем и сложность работ с каждым годом увеличивалась, штат
                компании пополнялся квалифицированными, компетентными кадрами,
                благодаря которым ООО «Арктик Энергострой» пополнило свой
                портфель контрактов такими значимыми и статусными как «Поставка
                котельной с разработкой конструкторской документации и
                выполнением шеф-монтажных и пусконаладочных работ, выполнение
                инспекции давальческого котельного оборудования Заказчика»,
                «Выполнение комплекса пусконаладочных работ и испытаний
                оборудования по объекту "Газотурбинная установка выработки
                электроэнергии" (ГТУ Solar TITAN 130)» и пр.
              </p>
            </div>
            <div className="block__info_text-bottom">
              <p>
                Помимо нефтегазовых компаний, ООО «Арктик Энергострой» имеет
                хороший опыт реализации контрактов в энергоснабжении гражданских
                объектов, например участие в проекте внешнего электроснабжения
                госпиталя в Мурманской области для ФГУП «Главное
                военно-строительное управление №14», а так же для атомной
                промышленности, в проекте поставки модуля очистки для Курской
                АЭС.
              </p>
              <p>
                С более подробной информацией об опыте Компании, оборудовании
                предоставляемых услугах Вы сможете ознакомится в разделах сайта
                (идет активная ссылка на разделы):
              </p>
            </div>
            <div className="buttons">
              <a href="">ПРОДУКЦИЯ</a>
              <a href="">УСЛУГИ И СЕРВИС</a>
              <a href="">Проекты</a>
            </div>
            <div className="block__image">
              <img
                className="modal__one_front"
                src="<?php echo get_template_directory_uri(); ?>/img/MainPage/ModalTwo/front.png"
                alt="front image"
              />
              <img src="" alt="svg" />
            </div>
          </div>
        </div>
      </section>

      <section className="modal__three">
        <div className="modal_close-button"></div>
        <div className="line"></div>
        <div className="container">
          <div className="block">
            <div className="block__image">
              <img
                className="modal__one_front"
                src="<?php echo get_template_directory_uri(); ?>/img/MainPage/ModalThree/front.png"
                alt="front image"
              />
              <img src="" alt="svg" />
            </div>
            <div className="block__info">
              <div className="block__info_text">
                <p>
                  Существенную часть портфеля заказов ООО « Арктик Энергострой»
                  формируют крупнейшие компании топливно-энергетического
                  комплекса России, такие как: ПАО «СИБУР Холдинг»,
                  Госкорпорация «Росатом», ООО «Славнефть-Красноярскнефтегаз»,
                  ПАО «ЯТЭК», ООО «ЗАРУБЕЖНЕФТЬ-добыча Харьяга», ПАО
                  «Криогенмаш», АО «РОСАН ИНТЕРНЕШНЛ», АО «Ангарская
                  нефтехимическая компания».
                </p>
                <p>
                  За время деятельности нами запроектировано, поставлено,
                  смонтировано и введено в эксплуатацию в различных регионах
                  страны, в том числе в районах крайнего севера с суровыми
                  климатическими условиями, такое оборудование, как:
                </p>
                <ul>
                  <li>емкостное и теплообменное оборудование</li>
                  <li>запорно-регулирующая арматура</li>
                  <li>контрольно-пропускные пункты</li>
                  <li>терминалы мобильной связи</li>
                  <li>сетевое и коммутационное оборудование</li>
                  <li>взрывозащищенное оборудование</li>
                  <li>газоанализаторы</li>
                  <li>контрольно-измерительные приборы и автоматика</li>
                  <li>кабельная арматуры и муфты</li>
                  <li>кабельнесущие системы</li>
                  <li>кабельно-проводниковая продукция</li>
                  <li>стальные опоры</li>
                  <li>электрощитовое оборудование</li>
                  <li>источники бесперебойного питания</li>
                  <li>вентиляционное оборудование</li>
                  <li>частотные преобразователи</li>
                  <li>трансформаторы и трансформаторные подстанции</li>
                  <li>котельное оборудование</li>
                  <li>оборудование для крепления скважин и прочее</li>
                </ul>
                <p>
                  С более подробной информацией об опыте Компании, оборудовании
                  предоставляемых услугах Вы сможете ознакомится в разделах
                  сайта (идет активная ссылка на разделы):
                </p>
              </div>
              <div className="buttons">
                <a href="">ПРОДУКЦИЯ</a>
                <a href="">УСЛУГИ И СЕРВИС</a>
                <a href="">Проекты</a>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
}
