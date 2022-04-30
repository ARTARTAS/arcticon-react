import React from "react";
import arrowBlack from "./../../assets/svg/home/arrow_black.svg";
import arrowOrange from "./../../assets/svg/arrowOrange.svg";
import img1 from "./../../assets/img/Products/Equipment/01.png";
import img2 from "./../../assets/img/Products/Equipment/02.png";
import img3 from "./../../assets/img/Products/Equipment/03.png";
import img4 from "./../../assets/img/Products/Equipment/04.png";
import img5 from "./../../assets/img/Products/Equipment/05.png";
import img6 from "./../../assets/img/Products/Equipment/06.png";
import img7 from "./../../assets/img/Products/Equipment/07.png";
import img8 from "./../../assets/img/Products/Equipment/08.png";
import img9 from "./../../assets/img/Products/Equipment/09.png";
import img10 from "./../../assets/img/Products/Equipment/10.png";
import styled from "styled-components";

const EquipmentBlockStyles = styled.div`
  .eight {
    position: relative;
    width: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    background-color: #ffffff;
    padding-top: 80px;
    z-index: 1;
  }

  .eight__block {
    width: 100%;
  }

  .eight__block_title {
    padding-left: 50px;
  }

  .eight__block_title h1 {
    font-family: "Montserrat", sans-serif;
    font-weight: 700;
    font-size: 35px;
    margin-bottom: 90px;
    text-transform: uppercase;
  }

  @media (max-width: 1199.98px) {
    .eight__block_title h1 {
      font-size: 32px;
      margin-bottom: 80px;
    }
  }

  @media (max-width: 991.98px) {
    .eight__block_title h1 {
      font-size: 30px;
      margin-bottom: 70px;
    }
  }

  @media (max-width: 767.98px) {
    .eight__block_title h1 {
      font-size: 27px;
      margin-bottom: 50px;
    }
  }

  @media (max-width: 479.98px) {
    .eight__block_title h1 {
      font-size: 25px;
      margin-bottom: 40px;
    }
  }

  .eight__block_list {
    width: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(2, 1fr);

    @media (max-width: 1199.98px) {
      grid-template-columns: repeat(4, 1fr);
      grid-gap: 19px;
    }
    @media (max-width: 991.98px) {
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 18px;
    }

    @media (max-width: 767.98px) {
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 17px;
    }
  }

  .eight__block_list .card {
    position: relative;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    height: 250px;
    min-width: 200px;
    width: auto;

    @media (max-width: 1199.98px) {
      min-width: 167px;
    }
    @media (max-width: 767.98px) {
      min-width: 126px;
    }
  }

  .eight__block_list .card__info {
    display: flex;
    width: 100%;
    height: 100%;
    position: absolute;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.2);
    box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.2);
    -webkit-transition: all 0.2s ease-in-out;
    transition: all 0.2s ease-in-out;
    padding: 10px;
    padding-bottom: 20px;
    background-color: white;
    text-align: center;
    gap: 20px;
  }

  .eight__block_list .card__info:hover {
    border: 3px solid #ffc729;
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
    height: fit-content;
    min-height: 100%;
    z-index: 20;
  }

  .eight__block_list .card__info:hover a {
    display: flex;
    gap: 10px;
  }

  .eight__block_list .card__info_img {
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    height: 150px;
  }

  .eight__block_list .card__info_img img {
    width: 100%;
    max-height: 100%;
  }

  .eight__block_list .card__info_bottom {
    width: 100%;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    font-family: "Montserrat", sans-serif;
    gap: 20px;
  }

  .eight__block_list .card__info_bottom h3 {
    font-weight: 600;
    font-size: 12px;
    line-height: 130%;
  }

  @media (max-width: 1199.98px) {
    .eight__block_list .card__info_bottom h3 {
      font-size: 10px;
    }
  }

  @media (max-width: 767.98px) {
    .eight__block_list .card__info_bottom h3 {
      font-size: 9px;
    }
  }

  @media (max-width: 479.98px) {
    .eight__block_list .card__info_bottom h3 {
      font-size: 8px;
    }
  }

  .eight__block_list .card__info_bottom a {
    display: none;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    font-weight: 700;
    color: #ffc729;
    font-size: 12px;
    border: 1px solid #ffc729;
    padding: 10px 14px;

    @media (max-width: 1199.98px) {
      font-size: 11px;
      padding: 9px 13px;
    }

    @media (max-width: 991.98px) {
      font-size: 10px;
      padding: 8px 11px;
    }

    @media (max-width: 479.98px) {
      font-size: 8px;
      padding: 8px 10px;
    }
  }

  .eight__block_list .card__info_bottom a .icon {
    width: 20px;
    height: 10px;
  }

  .eight__block_list .card__info_bottom a svg {
    margin-left: 10px;
  }

  .eight__block_button {
    width: 100%;
    padding: 50px 0px 80px 0px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    font-weight: 600;
    font-family: "Montserrat", sans-serif;
    font-size: 18px;
  }

  .eight__block_button a {
    width: fit-content;
    font-weight: 600;
    color: black;
    font-size: 18px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-transition: 0.2s ease-in-out;
    transition: 0.2s ease-in-out;
    gap: 20px;
  }

  .eight__block_button a:hover {
    color: gray;
    margin-left: 10px;
  }

  .eight__block_button a:hover svg {
    margin-left: 10px;
  }

  @media (max-width: 1199.98px) {
    .eight__block_button a {
      font-size: 16px;
    }
  }

  @media (max-width: 991.98px) {
    .eight__block_button a {
      font-size: 14px;
    }
  }

  @media (max-width: 767.98px) {
    .eight__block_button a {
      font-size: 12px;
    }
  }

  @media (max-width: 479.98px) {
    .eight__block_button a {
      font-size: 10px;
    }
  }

  .eight__block_button a .icon {
    width: 51px;
    height: 54px;
    fill: none;
  }

  @media (max-width: 1199.98px) {
    .eight__block_button a .icon {
      width: 48px;
      height: 51px;
    }
  }

  @media (max-width: 991.98px) {
    .eight__block_button a .icon {
      width: 45px;
      height: 48px;
    }
  }

  @media (max-width: 767.98px) {
    .eight__block_button a .icon {
      width: 42px;
      height: 45px;
    }
  }

  .eight__block_button a svg {
    margin-left: 5px;
    -webkit-transition: all 0.2s ease-in-out;
    transition: all 0.2s ease-in-out;
  }
`;

export default function EquipmentBlock() {
  const products = [
    {
      img: img1,
      title: "Тренсформаторы",
    },
    {
      img: img2,
      title: "Сетевое и коммутационное оборудование",
    },
    {
      img: img3,
      title: "Кабели и провода",
    },
    {
      img: img4,
      title: "Емкостное и теплообменное оборудование",
    },
    {
      img: img5,
      title: "Высоковольтное оборудование",
    },
    {
      img: img6,
      title: "Щитовое оборудование",
    },
    {
      img: img7,
      title: "Системы бесперебойного питания",
    },
    {
      img: img8,
      title: "Контрольно-измерительные приборы и автоматика",
    },
    {
      img: img9,
      title: "Осветительное оборудование",
    },
    {
      img: img10,
      title: "Кабеленесущие системы",
    },
  ];

  return (
    <EquipmentBlockStyles>
      <section className="eight">
        <div className="container">
          <div className="eight__block">
            <div className="eight__block_title">
              <h1>Оборудование</h1>
            </div>
            <div className="eight__block_list">
              {products.map((product) => (
                <div className="card">
                  <div className="card__info">
                    <a href="" className="card__info_img">
                      <img src={product.img} alt="" />
                    </a>
                    <div className="card__info_bottom">
                      <h3>{product.title}</h3>
                      <a href="">
                        Подробнее
                        <img className="icon" src={arrowOrange} alt="" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="eight__block_button">
              <a href="">
                Ещё
                <img className="icon" src={arrowBlack} alt="" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </EquipmentBlockStyles>
  );
}
