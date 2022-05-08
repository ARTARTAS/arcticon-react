import React from "react";
import styled from "styled-components";

import home from "./../../assets/svg/home/side_nav/home.svg";
import mail from "./../../assets/svg/home/side_nav/mail.svg";
import phone from "./../../assets/svg/home/side_nav/phone.svg";
import loup from "./../../assets/svg/home/side_nav/loup.svg";

const SideNavStyles = styled.div`
  .side-navigation {
    position: fixed;
    right: 0px;
    top: calc(50% - 100px);
    display: none;
    flex-direction: column;
    z-index: 30;
    width: 36px;
    .block {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #ffd600;
      height: 36px;

      &:not(:last-child) .block__info {
        border-bottom: 1px solid black;
      }

      &__info {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        margin: 4px;
        background: none;
      }
    }

    .top {
      display: flex;
      flex-direction: column;
    }
    .line {
      margin: 8px 0px;
      height: 22px;
      display: flex;
      justify-content: center;
      align-items: center;

      span {
        height: 100%;
        width: 1px;
        background-color: #ffd600;
      }
    }
  }
`;

export default function SideNav() {
  return (
    <SideNavStyles>
      <div className="side-navigation">
        <div className="top">
          <button className="block" onClick={() => window.scrollTo(0, 0)}>
            <div className="block__info">
              <img src={home} alt="home" />
            </div>
          </button>
          <button className="block">
            <div className="block__info">
              <img src={mail} alt="email" />
            </div>
          </button>
          <button className="block">
            <div className="block__info">
              <a href="tel:+74954093214">
                <img src={phone} alt="phone" />
              </a>
            </div>
          </button>
        </div>
        <div className="line">
          <span></span>
        </div>
        <button className="block">
          <div className="block__info">
            <img src={loup} alt="search" />
          </div>
        </button>
      </div>
    </SideNavStyles>
  );
}
