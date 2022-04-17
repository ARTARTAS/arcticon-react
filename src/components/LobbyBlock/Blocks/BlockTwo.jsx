import React, { useEffect} from "react";
import $ from "jquery";
import button from "./../../../assets/svg/arrowOrangeWithCircle.svg";
import backImg from "./../../../assets/img/MainPage/BlockOne/SecondSection/back.png";
import frontImg from "./../../../assets/img/MainPage/BlockOne/SecondSection/front.png";
import modalBackImg from "./../../../assets/img/MainPage/ModalTwo/back.svg";
import modalFrontImg from "./../../../assets/img/MainPage/ModalTwo/front.png";

export default function BlockTwo(props) {
  const animationTime = props.animationTime;

  function show() {
    $(".one__two_block .info a").on("click", function () {
      $(".modal__two").css("z-index", "100");
      $(".modal__two").animate({ opacity: 1 }, 500);
      $(".modal__two").css("display", "flex");
      $(".wrapper").css("overflow", "visible");
      $("body").css("overflow", "hidden");
      window.onwheel = () => {};
    });
    // Modal close button
    $(".modal__two .modal_close-button").on("click", function () {
      $(".modal__two").animate({ opacity: 0 }, 500, function () {
        $(".modal__two").css("display", "none");
        $(".wrapper").css("overflow", "hidden");
      });
      props.scrollSetting();
    });

    // show section two
    $(".one__two").css("display", "flex");
    // Show info block
    $(".one__two_block .info")
      .children()
      .each(function (position) {
        if (position == 2) {
          $(this).animate({ opacity: 1 }, animationTime - 200);
        } else {
          $(this)
            .delay(position * 200)
            .animate({ opacity: 1 }, animationTime);
        }
      });
    // Show images
    // Front
    $(".one__two .images .front")
      .delay(100)
      .animate({ right: 0 }, animationTime);
    // Back
    $(".one__two .images .back").animate({ right: 0 }, animationTime);
  }

  useEffect(() => {
    show();
  }, []);

  return (
    <>
      <section className="one__two">
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
                <img className="icon" src={button} alt="" />
              </a>
            </div>
          </div>
        </div>
        <div className="images">
          <img className="back" src={backImg} alt="" />
          <img className="front" src={frontImg} alt="" />
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
                оборудования по объекту 'Газотурбинная установка выработки
                электроэнергии' (ГТУ Solar TITAN 130)» и пр.
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
              <img className="modal__two_front" src={modalFrontImg} alt="front image" />
              <img  className="back" src={modalBackImg} alt="back image" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
