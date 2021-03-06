import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import translitRusEng from "translit-rus-eng";

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

import next from "./../../assets/svg/home/details_black.svg";
import loupBlack from "./../../assets/svg/home/loup_black.svg";
import arrowOrange from "./../../assets/svg/arrowOrange.svg";
import DropDownList from "../../components/DropDownList/DropDownList";
import { getCategories } from "../../Firebase";
import ExtraMenu from "../../components/ExtraMenu/ExtraMenu";

const EquipnetsStyles = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px 0px;

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

  .title {
    margin-bottom: 50px;

    h1 {
      font-family: "Montserrat", sans-serif;
      font-weight: 700;
      font-size: 35px;
    }
  }

  .search {
    width: 100%;
    margin-bottom: 30px;

    &__block {
      width: 50%;
      border-bottom: 1px solid black;
      padding: 10px 20px;
      display: flex;
      justify-content: space-between;
      gap: 20px;
      min-width: 240px;

      @media (max-width: 767.98px) {
        width: 55%;
      }

      @media (max-width: 479.98px) {
        width: 90%;
      }

      input {
        font-family: "Montserrat", sans-serif;
        font-size: 18px;
        font-weight: 300;
        width: 100%;
      }
      button {
        background: none;
        cursor: pointer;

        img {
          width: 15px;
        }
      }
    }
  }
  .sort {
    width: 100%;
    display: flex;
    gap: 30px;
    margin-bottom: 50px;
    flex-wrap: wrap;
  }
  .products {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 40px;

    .list {
      width: 100%;
      display: grid;
      grid-gap: 20px;
      grid-template-columns: repeat(5, 1fr);

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

      .card {
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

        &__info {
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

          &:hover {
            border: 3px solid #ffc729;
            -webkit-transform: scale(1.1);
            transform: scale(1.1);
            height: fit-content;
            min-height: 100%;
            z-index: 20;

            a {
              display: flex;
              gap: 10px;
            }
          }

          &_img {
            display: flex;
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            justify-content: center;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            height: 150px;

            img {
              width: 100%;
              max-height: 100%;
            }
          }

          &_bottom {
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

            h3 {
              font-weight: 600;
              font-size: 12px;
              line-height: 130%;

              @media (max-width: 1199.98px) {
                font-size: 10px;
              }

              @media (max-width: 767.98px) {
                font-size: 9px;
              }

              @media (max-width: 479.98px) {
                font-size: 8px;
              }
            }

            a {
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

              .icon {
                width: 20px;
                height: 10px;
              }
            }
          }
        }
      }
    }
    .button {
      width: 100%;
      display: flex;
      justify-content: center;

      button {
        display: flex;
        justify-content: center;
        align-items: center;
        background: none;

        font-family: "Montserrat", sans-serif;
        font-weight: 600;
        font-size: 14px;
        color: #2d2d2d;
        transition: 0.2s ease-in-out;
        gap: 20px;

        &:hover {
          padding-left: 10px;
          color: gray;
        }

        img {
          width: 40px;
        }
      }
    }
  }
`;

export default function Equipments(props) {
  const [equipments, setEquipments] = useState(null);
  const [col, setCol] = useState(props.equipments.length);
  const [input, setInput] = useState("");

  const categories = [
    {
      img: img1,
      title: "????????????????????????????",
      type: "????????????????????????????",
      creator: "Cisco",
    },
    {
      img: img2,
      title: "?????????????? ?? ???????????????????????????? ????????????????????????",
      type: "????????????????????????????",
      creator: "Polycom",
    },
    {
      img: img3,
      title: "???????????? ?? ??????????????",
      creator: "Cisco",
    },
    {
      img: img4,
      title: "?????????????????? ?? ?????????????????????????? ????????????????????????",
      creator: "Cisco",
    },
    {
      img: img5,
      title: "???????????????????????????? ????????????????????????",
    },
    {
      img: img6,
      title: "?????????????? ????????????????????????",
    },
    {
      img: img7,
      title: "?????????????? ???????????????????????????? ??????????????",
      creator: "Polycom",
    },
    {
      img: img8,
      title: "????????????????????-?????????????????????????? ?????????????? ?? ????????????????????",
      creator: "Polycom",
    },
    {
      img: img9,
      title: "?????????????????????????? ????????????????????????",
      creator: "Polycom",
    },
    {
      img: img10,
      title: "?????????????????????????? ??????????????",
      creator: "Polycom",
    },
  ];

  const equipmentType = [
    "????????????????????????????",
    "?????????????? ?? ???????????????????????????? ????????????????????????",
    "???????????? ?? ??????????????",
    "?????????????????? ?? ?????????????????????????? ????????????????????????",
    "???????????????????????????? ????????????????????????",
    "?????????????? ????????????????????????",
    "?????????????? ???????????????????????????? ??????????????",
    "????????????????????-?????????????????????????? ?????????????? ?? ????????????????????",
    "?????????????????????????? ????????????????????????",
    "?????????????????????????? ??????????????",
  ];

  const manufacturers = ["Cisco", "Polycom"];

  let equipmentState = {
    type: equipments != null ? equipments.type : "",
    creator: equipments != null ? equipments.creator : "",
    categories: props.equipments,
    equipmentType: equipmentType,
    manufacturers: manufacturers,
  };

  function addMoreCategories() {
    getCategories(col + 1).then((result) => {
      result.forEach((item) => props.equipments.push(item));
      setCol(col + 5);
    });
  }

  function makeSort() {
    if (equipmentState.type != "" && equipmentState.creator != "") {
      equipmentState.categories = props.equipments.filter(
        (x) =>
          x.creator == equipmentState.creator && x.type == equipmentState.type
      );
    } else if (equipmentState.type != "") {
      equipmentState.categories = props.equipments.filter(
        (x) => x.type == equipmentState.type
      );
    } else if (equipmentState.creator != "") {
      equipmentState.categories = props.equipments.filter(
        (x) => x.creator == equipmentState.creator
      );
    } else {
      equipmentState.categories = props.equipments;
    }

    setEquipments(equipmentState);
  }

  function changeType(text) {
    equipmentState.type = text !== undefined ? text : "";
    makeSort();
  }

  function changeCreator(text) {
    equipmentState.creator = text !== undefined ? text : "";
    makeSort();
  }

  function buttonClick(event) {
    if (event.type == "click" || event.key === "Enter") {
      makeSearch();
    } else if (event.key === "Backspace" && input.length == 1) {
      equipmentState.categories = props.equipments;
      setEquipments(equipmentState);
    }
  }

  function mouseClick() {
    makeSearch();
  }

  function makeSearch() {
    equipmentState.categories = props.equipments.filter((x) =>
      x.name.includes(input)
    );
    setEquipments(equipmentState);
  }

  useEffect(() => {
    window.scrollTo(0, 0);
    if (equipments == null) setEquipments(equipmentState);
  }, []);

  return (
    <EquipnetsStyles>
      <div className="container">
        <div className="title">
          <h1>????????????????????????</h1>
        </div>
        <div className="search">
          <div className="search__block">
            <input
              type="text"
              placeholder="?????????? ?? ????????????????"
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={buttonClick}
            />
            <button onClick={mouseClick}>
              <img src={loupBlack} alt="????????" />
            </button>
          </div>
        </div>
        <div className="sort">
          <DropDownList
            className="equipment"
            type="subcategory-name"
            name="subcategory-name"
            list={equipmentState.equipmentType}
            title="?????? ????????????????????????"
            change={changeType}
          />
          <DropDownList
            className="manufacturer"
            type="subcategory-name"
            name="subcategory-name"
            list={equipmentState.manufacturers}
            title="??????????????????????????"
            change={changeCreator}
          />
        </div>
        <div className="products">
          <div className="list">
            {equipments != null
              ? equipments.categories.slice(0, col).map((equipment, index) => (
                  <div className="card" key={index}>
                    <div className="card__info">
                      {equipment.isSubcategory ? (
                        <NavLink
                          className="card__info_img"
                          to={`/equipment-list/${translitRusEng(
                            equipment.name,
                            {
                              slug: true,
                            }
                          )}`}
                        >
                          <img src={equipment.img} alt="" />
                        </NavLink>
                      ) : (
                        <NavLink
                          onClick={() =>
                            console.log(
                              translitRusEng(equipment.name, { slug: true })
                            )
                          }
                          className="card__info_img"
                          to={`/products/${equipment.link}`}
                        >
                          <img src={equipment.img} alt="" />
                        </NavLink>
                      )}
                      <div className="card__info_bottom">
                        <h3>{equipment.name}</h3>
                        {equipment.isSubcategory ? (
                          <NavLink
                            to={`/equipment-list/${equipment.link}`}
                          >
                            ??????????????????
                            <img className="icon" src={arrowOrange} alt="" />
                          </NavLink>
                        ) : (
                          <NavLink
                            to={`/products/${equipment.link}`}
                          >
                            ??????????????????
                            <img className="icon" src={arrowOrange} alt="" />
                          </NavLink>
                        )}
                      </div>
                    </div>
                  </div>
                ))
              : ""}
          </div>
          <div className="button">
            <button
              onClick={() => {
                addMoreCategories();
              }}
            >
              ??????
              <img className="icon" src={next} alt="button" />
            </button>
          </div>
        </div>
        <ExtraMenu></ExtraMenu>
      </div>
    </EquipnetsStyles>
  );
}
