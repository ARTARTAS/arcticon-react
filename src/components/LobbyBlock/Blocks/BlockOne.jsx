import React, { useEffect } from "react";
import $ from "jquery";
import button from "./../../../assets/svg/arrowOrangeWithCircle.svg";
import backImg from "./../../../assets/img/MainPage/BlockOne/FirstSection/back.png";
import frontImg from "./../../../assets/img/MainPage/BlockOne/FirstSection/front.png";
import modalBackgroundImg from "./../../../assets/img/MainPage/ModalOne/background.png";
import modalFrontImg from "./../../../assets/img/MainPage/ModalOne/front.png";
import modalBackImg from "./../../../assets/img/MainPage/ModalOne/back.svg";

export default function BlockOne(props) {
  const animationTime = props.animationTime;
  const windowWidth = $(window).width();

  // media points
  const md2 = 991.98;
  const md3 = 767.98;
  const md4 = 479.98;

  function show() {
    $(".one__one_block .info a").on("click", function () {
      $(".modal__one").css("z-index", "100");
      $(".modal__one").animate({ opacity: 1 }, 500);
      $(".modal__one").css("display", "flex");
      $(".wrapper").css("overflow", "visible");
      $("body").css("overflow", "hidden");
      window.onwheel = () => {};
    });
    // Modal close button
    $(".modal__one .modal_close-button").on("click", function () {
      $(".modal__one").animate({ opacity: 0 }, 500, function () {
        $(".modal__one").css("display", "none");
        $(".wrapper").css("overflow", "hidden");

        props.scrollSetting();
      });
    });
    // Show section

    $(".one__one").css("display", "flex");
    // Show info block
    $(".one__one_block .info")
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
    if (windowWidth < md4) {
      $(".one__one .images .front").animate(
        {
          right: "0px",
        },
        animationTime
      );
    } else if (windowWidth < md3) {
      $(".one__one .images .front").animate(
        {
          right: "20px",
        },
        animationTime
      );
    } else if (windowWidth < md2) {
      $(".one__one .images .front").animate(
        {
          right: "70px",
        },
        animationTime
      );
    } else {
      $(".one__one .images .front").animate(
        {
          right: "10%",
        },
        animationTime
      );
    }
    //Back
    if (windowWidth < md2) {
      $(".one__one .images .back").animate(
        {
          right: "-60px",
        },
        animationTime - 100
      );
    } else {
      $(".one__one .images .back").animate(
        {
          right: "0px",
        },
        animationTime - 100
      );
    }
  }

  useEffect(() => {
    show();
  }, []);

  return (
    <>
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

      <section className="modal__one">
        <div className="modal_close-button"></div>
        <div className="line"></div>
        <div className="container">
          <div className="block">
            <div className="block__image">
              <img
                className="modal__one_front"
                src={modalFrontImg}
                alt="front image"
              />
              <img
                className="modal__one_background"
                src={modalBackgroundImg}
                alt="background iamge"
              />
              <img className="back" src={modalBackImg} alt="svg" />
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
    </>
  );
}
