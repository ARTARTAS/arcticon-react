import React, { useState } from "react";
import styled from "styled-components";
import img1 from "./../../assets/img/MainPage/BlockSeven/map.png";
import facility from "./../../assets/img/MainPage/BlockSeven/facility.png";
import facility2 from "./../../assets/img/MainPage/BlockSeven/Ellipse64.png";

const StyledMapBlock = styled.section`
  padding: 0 43px;
  margin-top: 103px;
  margin-bottom: 67px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  .cont {
    position: relative;
    .map {
      width: 100%;
      max-width: 1279.86px;
      height: auto;
    }
    .canvas {
      position: absolute;
      top: 0px;
      left: 0px;
      bottom: 0px;
      right: 0px;
      .dot1 {
        cursor: pointer;
        user-select: none;
        position: relative;
        background: #ffc729;
        width: 15px;
        height: 15px;
        border-radius: 50%;
        top: 45%; // align dot on map vertical
        left: 23%; // align dot on map horizontal
        :hover {
          box-shadow: 0 0 10px 5px #ffc729;
        }
      }
      .dot2 {
        cursor: pointer;
        user-select: none;
        position: relative;
        background: #ffc729;
        width: 15px;
        height: 15px;
        border-radius: 50%;
        top: 55%; // align dot on map vertical
        left: 65%; // align dot on map horizontal
        :hover {
          box-shadow: 0 0 10px 5px #ffc729;
        }
      }
    }
  }
`;

const StyledInfo = styled.div`
  opacity: ${({ shown }) => (shown ? `1` : "0")};
  transition: opacity 1s;
  pointer-events: none;
  user-select: none;
  position: relative;

  width: 201.62px;
  display: flex;
  align-items: center;
  top: ${({ top }) => (top ? `-150px` : "50px")};

  img {
    z-index: 2;
    width: 125px;
    height: 125px;
  }
  .texBlock {
    z-index: 1;
    margin-left: 100px;
    position: absolute;

    height: 94.15px;
    width: 0px;
    overflow: hidden;

    background: #ffd600;
    animation: ${({ shown }) =>
      shown ? `slideRight 1.5s 0.5s forwards ease` : ""};
    transition: all 0.5s;
    p {
      width: 116px;
      font-family: "Inter";
      font-style: normal;
      font-weight: 400;
      font-size: 10px;
      line-height: 15px;
      /* or 150% */

      letter-spacing: -0.015em;

      color: #000000;
    }
  }
  @keyframes slideRight {
    0% {
      width: 0px;
      padding: 19px 0px 19px 0px;
    }
    100% {
      padding: 19px 11px 19px 30px;
      width: 157.21px;
    }
  }
`;

function HoveredInfo({ text1, facility, top, shown }) {
  return (
    <StyledInfo top={top} shown={shown}>
      <img src={facility} alt="" />
      <div className="texBlock">
        <p>{text1}</p>
      </div>
    </StyledInfo>
  );
}

export default function MapBlock() {
  const [info1, setInfo1] = useState(false);
  const [info2, setInfo2] = useState(false);
  const text1 =
    "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia.";
  const text2 =
    "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia.";
  return (
    <StyledMapBlock>
      <div className="cont">
        <img className="map" src={img1} alt="" />
        <div className="canvas">
          <div
            className="dot1"
            onMouseOver={() => setInfo1(true)}
            onMouseLeave={() => setInfo1(false)}
          >
            <HoveredInfo
              shown={info1}
              text1={text1}
              facility={facility}
              top={true} // positioning
            />
          </div>
          <div
            className="dot2"
            onMouseOver={() => setInfo2(true)}
            onMouseLeave={() => setInfo2(false)}
          >
            <HoveredInfo
              shown={info2}
              text1={text2}
              facility={facility2}
              top={false} // positioning
            />
          </div>
        </div>
      </div>
    </StyledMapBlock>
  );
}
