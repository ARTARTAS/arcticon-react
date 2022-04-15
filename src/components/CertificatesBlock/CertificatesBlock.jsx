import React from "react";
import arrowBlack from "./../../assets/svg/home/arrow_black.svg";
import img1 from "./../../assets/img/MainPage/BlockTen/01.jpg";
import img2 from "./../../assets/img/MainPage/BlockTen/02.jpg";

export default function CertificatesBlock() {
  return (
    <section className="ten">
      <h1>Сертификаты</h1>
      <div className="container">
        <div className="ten__block">
          <div className="ten__block_images">
            <div className="shown">
              <img src={img1} alt="" />
            </div>
            <div className="list">
              <div className="image">
                <img src={img2} alt="" />
              </div>
              {/* <div className="image">
                <img src={img3} alt="" />
              </div>
              <div className="image">
                <img src={img4} alt="" />
              </div>
              <div className="image">
                <img src={img5} alt="" />
              </div> */}
            </div>
          </div>
        </div>
      </div>
      <div className="line">
        <p>
          В данном разделе размещены сертификаты и письма, выданные компании ООО
          "Арктик Энергострой" и подтверждающие ее полномочия, а также
          компетенцию и опыт в сфере комплектации объектов.
        </p>
      </div>
    </section>
  );
}
