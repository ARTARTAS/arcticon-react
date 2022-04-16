import React from "react";
import CertificatesCarousel from "../CertificatesCarousel/CertificatesCarousel";

export default function CertificatesBlock() {
  return (
    <section className="ten">
      <h1>Сертификаты</h1>
      <div className="container">
        <div className="ten__block">
          <div className="ten__block_images">
            <CertificatesCarousel />
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
