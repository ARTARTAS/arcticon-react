import React, { useEffect, useRef, useState } from "react";
import $ from "jquery";
import arrowBlack from "./../../../assets/svg/arrowBlack.svg";
import img5 from "./../../../assets/img/MainPage/BlockOne/ThreeSection/back.png";
import img6 from "./../../../assets/img/MainPage/BlockOne/ThreeSection/front.png";

export default function BlockThree() {
  const animationTime = 500;
  const windowWidth = $(window).width();

  // media points
  const md1 = 1199.98;
  const md2 = 991.98;
  const md3 = 767.98;
  const md4 = 479.98;

  function show() {
    console.log("show block three");
    $(".one__three_block .info a").on("click", function () {
      $(".modal__three").css("z-index", "100");
      $(".modal__three").animate({ opacity: 1 }, 500);
      $(".modal__three").css("display", "flex");

      let wrapper = $(".wrapper");

      wrapper.css("overflow", "visible");
      $("body").css("overflow", "hidden");
    });
    // Modal close button
    $(".modal__three .modal_close-button").on("click", function () {
      $(".modal__three").animate({ opacity: 0 }, 500, function () {
        $(".modal__three").css("display", "none");
        let wrapper = $(".wrapper");

        wrapper.css("overflow", "hidden");
        $("body").css("overflow", "visible");
      });
    });
    $(".one__three").css("display", "flex");
    // Show info block
    $(".one__three_block .info")
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
    if (windowWidth < md1) {
      $(".one__three .images .front").delay(100).animate({ right: 0 }, 500);
    } else {
      $(".one__three .images .front").animate({ right: "5%" }, 500);
    }
    // Back
    $(".one__three .images .back").animate({ right: 0 }, 500);
  }

  useEffect(() => {
    show();
  }, []);

  return (
    <>
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
      </section>
    </>
  );
}
