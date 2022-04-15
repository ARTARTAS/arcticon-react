import React from "react";
import img1 from "./../../assets/img/About/background.png";
import img2 from "./../../assets/img/About/logo.png";
import img3 from "./../../assets/svg/home/details_black.svg";

import img4 from "./../../assets/img/MainPage/BlockThree/logo_img.png";
import img5 from "./../../assets/img/MainPage/BlockThree/01.png";

import img6 from "./../../assets/img/MainPage/BlockFive/01.jpg";

import styled from "styled-components";

const AboutUsStyles = styled.div`
  .container {
    position: relative;
    margin: 0px 50px;
    max-width: 1200px;
    height: 100%;
    width: 100%;
  }

  @media (max-width: 767.98px) {
    .container {
      margin: 0px 30px;
    }
  }

  @media (max-width: 479.98px) {
    .container {
      margin: 0px 20px;
    }
  }

  .about_one {
    position: relative;
    height: 100%;
    width: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    z-index: 2;
  }

  .about_one .background {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: auto;
  }

  .about_one .background img {
    width: 100%;
    height: auto;
  }

  @media (max-width: 991.98px) {
    .about_one .block__info_right p:last-child {
      display: none;
    }
  }

  @media (max-width: 767.98px) {
    .about_one .block__info_right p:last-child {
      display: block;
    }
  }

  .about_one .block {
    width: 100%;
    height: 100%;
    display: -ms-grid;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    font-family: "Montserrat", sans-serif;
    padding-top: 100px;
    margin-bottom: 50px;
  }

  @media (max-width: 1199.98px) {
    .about_one .block {
      padding-top: 80px;
    }
  }

  @media (max-width: 991.98px) {
    .about_one .block {
      padding-top: 70px;
    }
  }

  @media (max-width: 767.98px) {
    .about_one .block {
      padding-top: 55px;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      -ms-flex-direction: column;
      flex-direction: column;
    }
  }

  @media (max-width: 479.98px) {
    .about_one .block {
      padding-top: 40px;
    }
  }

  .about_one .block p {
    font-weight: 400;
    line-height: 170%;
    font-size: 18px;
  }

  @media (max-width: 1199.98px) {
    .about_one .block p {
      font-size: 14px;
    }
  }

  @media (max-width: 991.98px) {
    .about_one .block p {
      font-size: 12px;
    }
  }

  @media (max-width: 767.98px) {
    .about_one .block p {
      font-size: 11px;
    }
  }

  @media (max-width: 479.98px) {
    .about_one .block p {
      font-size: 10px;
    }
  }

  .about_one .block .bottom-mobile {
    display: none;
  }

  @media (max-width: 991.98px) {
    .about_one .block .bottom-mobile {
      display: block;
      margin-bottom: 20px;
    }
  }

  @media (max-width: 767.98px) {
    .about_one .block .bottom-mobile {
      display: none;
    }
  }

  .about_one .block__logo {
    padding: 0px 40px 40px 0px;
    -ms-grid-column: 1;
    -ms-grid-column-span: 2;
    grid-column: 1/3;
    -ms-grid-row: 1;
    -ms-grid-row-span: 2;
    grid-row: 1/3;
  }

  @media (max-width: 1199.98px) {
    .about_one .block__logo {
      padding: 0px 35px 35px 0px;
    }
  }

  @media (max-width: 991.98px) {
    .about_one .block__logo {
      padding: 0px 30px 30px 0px;
    }
  }

  @media (max-width: 767.98px) {
    .about_one .block__logo {
      padding: 0px 25px 25px 0px;
    }
  }

  @media (max-width: 479.98px) {
    .about_one .block__logo {
      padding: 0px 20px 20px 0px;
    }
  }

  .about_one .block__info_right {
    -ms-grid-column: 3;
    -ms-grid-column-span: 3;
    grid-column: 3/6;
    -ms-grid-row: 1;
    -ms-grid-row-span: 2;
    grid-row: 1/3;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    row-gap: 40px;
    margin-bottom: 35px;
  }

  @media (max-width: 1199.98px) {
    .about_one .block__info_right {
      row-gap: 30px;
    }
  }

  @media (max-width: 991.98px) {
    .about_one .block__info_right {
      row-gap: 20px;
    }
  }

  @media (max-width: 767.98px) {
    .about_one .block__info_right {
      row-gap: 15px;
      margin-bottom: 15px;
    }
  }

  .about_one .block__info_bottom {
    -ms-grid-column: 1;
    -ms-grid-column-span: 5;
    grid-column: 1/6;
    -ms-grid-row: 3;
    -ms-grid-row-span: 1;
    grid-row: 3/4;
    margin-bottom: 35px;
  }

  @media (max-width: 479.98px) {
    .about_one .block__info_bottom {
      margin-bottom: 30px;
    }
  }

  .about_one .block a {
    -ms-grid-column: 1;
    -ms-grid-column-span: 1;
    grid-column: 1/2;
    width: -webkit-fit-content;
    width: -moz-fit-content;
    width: fit-content;
    height: -webkit-fit-content;
    height: -moz-fit-content;
    height: fit-content;
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

  .about_one .block a:hover {
    color: gray;
    margin-left: 10px;
  }

  .about_one .block a:hover svg {
    margin-left: 10px;
  }

  @media (max-width: 1199.98px) {
    .about_one .block a {
      font-size: 16px;
    }
  }

  @media (max-width: 991.98px) {
    .about_one .block a {
      font-size: 14px;
    }
  }

  @media (max-width: 767.98px) {
    .about_one .block a {
      font-size: 12px;
      margin-left: 20px;
      -ms-grid-column: 1;
      -ms-grid-column-span: 2;
      grid-column: 1/3;
    }
  }

  @media (max-width: 479.98px) {
    .about_one .block a {
      font-size: 10px;
    }
  }

  .about_one .block a .icon {
    fill: none;
    width: 51px;
    height: 54px;
  }

  @media (max-width: 1199.98px) {
    .about_one .block a .icon {
      width: 48px;
      height: 51px;
    }
  }

  @media (max-width: 991.98px) {
    .about_one .block a .icon {
      width: 45px;
      height: 48px;
    }
  }

  @media (max-width: 767.98px) {
    .about_one .block a .icon {
      width: 42px;
      height: 45px;
    }
  }

  .about_one .block a svg {
    margin-left: 5px;
    -webkit-transition: 0.2s ease-in-out;
    transition: 0.2s ease-in-out;
  }

  .about_two {
    width: 100%;
    position: relative;
    background: #e5e5e5;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  }

  .about_two .back {
    top: 0;
    left: 0;
    position: absolute;
    width: 100%;
    height: 350px;
    background: #e5e5e5;
  }

  @media (max-width: 1199.98px) {
    .about_two .back {
      height: 260px;
    }
  }

  @media (max-width: 991.98px) {
    .about_two .back {
      height: 170px;
    }
  }

  @media (max-width: 767.98px) {
    .about_two .back {
      height: 0px;
    }
  }

  @media (max-width: 767.98px) {
    .about_two .container {
      margin: 0;
    }
  }

  .about_two .block {
    display: -ms-grid;
    display: grid;
    width: 100%;
    grid-template-columns: 250px 250px repeat(2, 1fr);
    margin-bottom: 100px;
    font-family: "Montserrat", sans-serif;
    height: -webkit-fit-content;
    height: -moz-fit-content;
    height: fit-content;
  }

  @media (max-width: 1199.98px) {
    .about_two .block {
      grid-template-columns: 200px 200px repeat(2, 1fr);
      margin-bottom: 60px;
    }
  }

  @media (max-width: 991.98px) {
    .about_two .block {
      grid-template-columns: 130px 130px repeat(2, 1fr);
      margin-bottom: 40px;
    }
  }

  @media (max-width: 767.98px) {
    .about_two .block {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  .about_two .block .square {
    z-index: 3;
    height: 250px;
    width: 250px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -ms-flex-pack: distribute;
    justify-content: space-around;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    padding: 30px 20px;
  }

  @media (max-width: 1199.98px) {
    .about_two .block .square {
      height: 200px;
      width: 200px;
      padding: 24px 15px;
    }
  }

  @media (max-width: 991.98px) {
    .about_two .block .square {
      height: 130px;
      width: 130px;
      padding: 10px;
    }
  }

  @media (max-width: 767.98px) {
    .about_two .block .square {
      height: 160px;
      width: auto;
    }
  }

  .about_two .block .square h1 {
    font-weight: 700;
    font-size: 36px;
  }

  @media (max-width: 1199.98px) {
    .about_two .block .square h1 {
      font-size: 30px;
    }
  }

  @media (max-width: 991.98px) {
    .about_two .block .square h1 {
      font-size: 20px;
    }
  }

  .about_two .block .square h3 {
    font-weight: 600;
    font-size: 20px;
    line-height: 150%;
    text-align: center;
  }

  @media (max-width: 1199.98px) {
    .about_two .block .square h3 {
      font-size: 18px;
    }
  }

  @media (max-width: 991.98px) {
    .about_two .block .square h3 {
      font-size: 14px;
      line-height: 120%;
    }
  }

  .about_two .block__expirience {
    -ms-grid-column: 2;
    -ms-grid-column-span: 1;
    grid-column: 2/3;
    -ms-grid-row: 1;
    -ms-grid-row-span: 1;
    grid-row: 1/2;
    background: #ffd600;
  }

  @media (max-width: 767.98px) {
    .about_two .block__expirience {
      -ms-grid-column: 1;
      -ms-grid-column-span: 1;
      grid-column: 1/2;
      -ms-grid-row: 1;
      -ms-grid-row-span: 1;
      grid-row: 1/2;
    }
  }

  .about_two .block__logo {
    -ms-grid-column: 1;
    -ms-grid-column-span: 1;
    grid-column: 1/2;
    -ms-grid-row: 2;
    -ms-grid-row-span: 1;
    grid-row: 2/3;
    background: #c4c4c4;
  }

  @media (max-width: 767.98px) {
    .about_two .block__logo {
      -ms-grid-column: 2;
      -ms-grid-column-span: 1;
      grid-column: 2/3;
      -ms-grid-row: 1;
      -ms-grid-row-span: 2;
      grid-row: 1/3;
    }
  }

  @media (max-width: 991.98px) {
    .about_two .block__logo img {
      width: 100%;
    }
  }

  @media (max-width: 767.98px) {
    .about_two .block__logo img {
      height: 100%;
      max-height: 100px;
      width: auto;
    }
  }

  @media (max-width: 479.98px) {
    .about_two .block__logo img {
      height: auto;
      width: 100%;
      max-width: 120px;
    }
  }

  .about_two .block__contracts {
    -ms-grid-column: 2;
    -ms-grid-column-span: 1;
    grid-column: 2/3;
    -ms-grid-row: 2;
    -ms-grid-row-span: 1;
    grid-row: 2/3;
  }

  @media (max-width: 767.98px) {
    .about_two .block__contracts {
      -ms-grid-column: 1;
      -ms-grid-column-span: 1;
      grid-column: 1/2;
      -ms-grid-row: 2;
      -ms-grid-row-span: 1;
      grid-row: 2/3;
    }
  }

  .about_two .block__turnover.square {
    -ms-grid-column: 2;
    -ms-grid-column-span: 1;
    grid-column: 2/3;
    -ms-grid-row: 3;
    -ms-grid-row-span: 1;
    grid-row: 3/4;
    background: #bfcdff;
  }

  @media (max-width: 767.98px) {
    .about_two .block__turnover.square {
      -ms-grid-column: 2;
      -ms-grid-column-span: 1;
      grid-column: 2/3;
      -ms-grid-row: 2;
      -ms-grid-row-span: 1;
      grid-row: 2/3;
    }
  }

  .about_two .block__turnover.square h1 {
    font-size: 24px;
  }

  @media (max-width: 1199.98px) {
    .about_two .block__turnover.square h1 {
      font-size: 18px;
    }
  }

  @media (max-width: 991.98px) {
    .about_two .block__turnover.square h1 {
      font-size: 12px;
    }
  }

  .about_two .block__turnover.square h3 {
    width: 80%;
  }

  .about_two .block__video {
    z-index: 3;
    -ms-grid-column: 3;
    -ms-grid-column-span: 2;
    grid-column: 3/5;
    -ms-grid-row: 1;
    -ms-grid-row-span: 2;
    grid-row: 1/3;
    justify-self: flex-start;
    -ms-flex-item-align: end;
    align-self: flex-end;
    overflow: hidden;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  }

  @media (max-width: 991.98px) {
    .about_two .block__video {
      max-height: 260px;
    }
  }

  @media (max-width: 767.98px) {
    .about_two .block__video {
      -ms-grid-column: 1;
      -ms-grid-column-span: 2;
      grid-column: 1/3;
      -ms-grid-row: 3;
      -ms-grid-row-span: 1;
      grid-row: 3/4;
      width: 100%;
    }
  }

  .about_two .block__video img {
    max-height: 100%;
    width: 100%;
  }

  .about_two .block__title {
    z-index: 3;
    -ms-grid-column: 3;
    -ms-grid-column-span: 2;
    grid-column: 3/5;
    -ms-grid-row: 3;
    -ms-grid-row-span: 1;
    grid-row: 3/4;
    padding: 50px 0px 0px 30px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -ms-flex-pack: distribute;
    justify-content: space-around;
  }

  @media (max-width: 1199.98px) {
    .about_two .block__title {
      padding: 35px 0px 0px 25px;
    }
  }

  @media (max-width: 991.98px) {
    .about_two .block__title {
      padding: 20px 0px 0px 20px;
    }
  }

  @media (max-width: 767.98px) {
    .about_two .block__title {
      -ms-grid-column: 1;
      -ms-grid-column-span: 2;
      grid-column: 1/3;
      -ms-grid-row: 4;
      -ms-grid-row-span: 1;
      grid-row: 4/5;
      padding: 20px 20px 10px 20px;
    }
  }

  .about_two .block__title h1 {
    font-weight: 600;
    font-size: 35px;
  }

  @media (max-width: 1199.98px) {
    .about_two .block__title h1 {
      font-size: 30px;
    }
  }

  @media (max-width: 991.98px) {
    .about_two .block__title h1 {
      font-size: 25px;
    }
  }

  @media (max-width: 767.98px) {
    .about_two .block__title h1 {
      margin-bottom: 20px;
    }
  }

  .about_two .block__title p {
    font-weight: 400;
    font-size: 18px;
    line-height: 150%;
    text-align: justify;
  }

  @media (max-width: 1199.98px) {
    .about_two .block__title p {
      font-size: 15px;
    }
  }

  @media (max-width: 991.98px) {
    .about_two .block__title p {
      font-size: 12px;
    }
  }

  @media (max-width: 767.98px) {
    .about_two .block__title p {
      line-height: 125%;
    }
  }

  .about_two .block__text {
    -ms-grid-column: 2;
    -ms-grid-column-span: 3;
    grid-column: 2 / 5;
    padding-top: 20px;
    margin-bottom: 30px;
  }

  @media (max-width: 767.98px) {
    .about_two .block__text {
      padding: 0px 20px 20px 20px;
      -ms-grid-column: 1;
      -ms-grid-column-span: 2;
      grid-column: 1/3;
      -ms-grid-row: 5;
      -ms-grid-row-span: 1;
      grid-row: 5/6;
      margin-bottom: 0;
    }
  }

  .about_two .block__text p {
    padding: 15px 0px;
    font-weight: 400;
    font-size: 18px;
    line-height: 150%;
    text-align: justify;
  }

  @media (max-width: 1199.98px) {
    .about_two .block__text p {
      font-size: 15px;
      padding: 14px;
    }
  }

  @media (max-width: 991.98px) {
    .about_two .block__text p {
      font-size: 12px;
      padding: 10px;
    }
  }

  @media (max-width: 767.98px) {
    .about_two .block__text p {
      line-height: 125%;
      padding: 0;
    }
  }

  .about_two .block__text p:last-child {
    display: none;
  }

  .about_two .block a {
    -ms-grid-column: 2;
    -ms-grid-column-span: 1;
    grid-column: 2/3;
    width: -webkit-fit-content;
    width: -moz-fit-content;
    width: fit-content;
    height: -webkit-fit-content;
    height: -moz-fit-content;
    height: fit-content;
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

  .about_two .block a:hover {
    color: gray;
    margin-left: 10px;
  }

  .about_two .block a:hover svg {
    margin-left: 10px;
  }

  @media (max-width: 1199.98px) {
    .about_two .block a {
      font-size: 16px;
    }
  }

  @media (max-width: 991.98px) {
    .about_two .block a {
      font-size: 14px;
    }
  }

  @media (max-width: 767.98px) {
    .about_two .block a {
      font-size: 12px;
      margin-left: 20px;
      -ms-grid-column: 1;
      -ms-grid-column-span: 2;
      grid-column: 1/3;
    }
  }

  @media (max-width: 479.98px) {
    .about_two .block a {
      font-size: 10px;
    }
  }

  .about_two .block a .icon {
    fill: none;
    width: 51px;
    height: 54px;
  }

  @media (max-width: 1199.98px) {
    .about_two .block a .icon {
      width: 48px;
      height: 51px;
    }
  }

  @media (max-width: 991.98px) {
    .about_two .block a .icon {
      width: 45px;
      height: 48px;
    }
  }

  @media (max-width: 767.98px) {
    .about_two .block a .icon {
      width: 42px;
      height: 45px;
    }
  }

  .about_two .block a svg {
    margin-left: 5px;
    -webkit-transition: 0.2s ease-in-out;
    transition: 0.2s ease-in-out;
  }

  .about_three {
    width: 100%;
    margin-bottom: 60px;
    overflow: hidden;
    .fixed_bottom_one {
      animation: horizontalScroll 20s alternate infinite ease-in-out;
    }
    .fixed_bottom_two {
      animation: horizontalScroll 15s alternate infinite ease-in-out;
    }
    .fixed_bottom_three {
      animation: horizontalScroll 25s alternate infinite ease-in-out;
    }
  }
  @keyframes horizontalScroll {
    0% {
      transform: translateX(-50%);
    }
    100% {
      transform: translateX(0);
    }
  }

  .about_three div {
    position: relative;
    white-space: nowrap;
    width: auto;
    font-family: "Montserrat", sans-serif;
    font-weight: 700;
    color: black;
    font-size: 16px;
    padding: 4px 0px;
    bottom: 0;
    left: 0;
    text-transform: uppercase;
    word-spacing: 27px;
  }

  .about_four {
    position: relative;
    width: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    background: #ffd600;
  }

  .about_four .image {
    position: absolute;
    height: 100%;
    width: 50%;
    top: 0;
    left: 0;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    overflow: hidden;
  }

  .about_four .image img {
    position: absolute;
    right: 0;
    width: auto;
    min-height: 100%;
    min-width: 100%;
    max-width: none;
    max-height: none;
    -webkit-transform: scale(-1, 1);
    transform: scale(-1, 1);
  }

  .about_four .block {
    width: 100%;
    display: -ms-grid;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  .about_four .block__info {
    font-family: "Montserrat", sans-serif;
    -ms-grid-column: 2;
    -ms-grid-column-span: 1;
    grid-column: 2/3;
    padding: 50px 0px 50px 50px;
  }

  .about_four .block__info h1 {
    font-weight: 600;
    font-size: 50px;
    line-height: 127%;
    margin-bottom: 55px;
  }

  @media (max-width: 1199.98px) {
    .about_four .block__info h1 {
      font-size: 50px;
      margin-bottom: 40px;
    }
  }

  @media (max-width: 991.98px) {
    .about_four .block__info h1 {
      font-size: 30px;
    }
  }

  @media (max-width: 767.98px) {
    .about_four .block__info h1 {
      font-size: 20px;
    }
  }

  @media (max-width: 479.98px) {
    .about_four .block__info h1 {
      font-size: 16px;
      margin-bottom: 20px;
    }
  }

  .about_four .block__info p {
    font-weight: 300;
    font-size: 18px;
    line-height: 194%;
    margin-bottom: 55px;
  }

  @media (max-width: 1199.98px) {
    .about_four .block__info p {
      font-size: 16px;
      margin-bottom: 40px;
    }
  }

  @media (max-width: 991.98px) {
    .about_four .block__info p {
      font-size: 12px;
    }
  }

  @media (max-width: 479.98px) {
    .about_four .block__info p {
      margin-bottom: 20px;
    }
  }

  .about_four .block__info a {
    width: -webkit-fit-content;
    width: -moz-fit-content;
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

  .about_four .block__info a:hover {
    color: gray;
    margin-left: 10px;
  }

  .about_four .block__info a:hover svg {
    margin-left: 10px;
  }

  @media (max-width: 1199.98px) {
    .about_four .block__info a {
      font-size: 16px;
    }
  }

  @media (max-width: 991.98px) {
    .about_four .block__info a {
      font-size: 14px;
    }
  }

  @media (max-width: 767.98px) {
    .about_four .block__info a {
      font-size: 12px;
    }
  }

  @media (max-width: 479.98px) {
    .about_four .block__info a {
      font-size: 10px;
    }
  }

  .about_four .block__info a .icon {
    fill: none;
    width: 51px;
    height: 54px;
  }

  @media (max-width: 1199.98px) {
    .about_four .block__info a .icon {
      width: 48px;
      height: 51px;
    }
  }

  @media (max-width: 991.98px) {
    .about_four .block__info a .icon {
      width: 45px;
      height: 48px;
    }
  }

  @media (max-width: 767.98px) {
    .about_four .block__info a .icon {
      width: 42px;
      height: 45px;
    }
  }

  .about_four .block__info a svg {
    margin-left: 5px;
    -webkit-transition: 0.2s ease-in-out;
    transition: 0.2s ease-in-out;
  }
  /*# sourceMappingURL=about.css.map */
`;

export default function AboutUs() {
  return (
    <AboutUsStyles>
      <section className="about_one">
        <div className="background">
          <img src={img1} alt="background" />
        </div>
        <div className="container">
          <div className="block">
            <div className="block__logo">
              <img src={img2} alt="logo" />
            </div>
            <div className="block__info_right">
              <p>
                ОО «Арктик Энергострой» является поставщиком услуг для
                энергетической отрасли с разнообразным портфелем клиентов,
                включая ведущие нефтегазодобывающие компании.
              </p>
              <p>
                Многолетний опыт лежит в основе всего, что мы делаем. Наша
                команда состоит и высококвалифицированных специалистов способных
                решать сложные технологические задачи.
              </p>
            </div>
            <div className="block__info_bottom">
              <p className="bottom-mobile">
                Многолетний опыт лежит в основе всего, что мы делаем. Наша
                команда состоит и высококвалифицированных специалистов способных
                решать сложные технологические задачи.
              </p>
              <p>
                Мы проектируем, комплектуем, строим, управляем и поддерживаем
                инфраструктуру для энергетических отраслей. Наше комплексное и
                индивидуальное предложение услуг охватывает каждый этап
                жизненного цикла проекта и различные коммерческие модели,
                предоставляя нашим клиентам необходимую гибкость.
              </p>
            </div>
            <a href="#">
              Далее
              <img className="icon" src={img3} alt="" />
            </a>
          </div>
        </div>
      </section>

      <section className="about_two">
        <div className="back"></div>
        <div className="container">
          <div className="block">
            <div className="block__expirience square">
              <h1>11 лет</h1>
              <h3>Опыта</h3>
            </div>
            <div className="block__logo square">
              <img className="icon" src={img4} alt="" />
            </div>
            <div className="block__contracts square">
              <h1>800+</h1>
              <h3>Успешно реализованных контрактов</h3>
            </div>
            <div className="block__turnover square">
              <h1>4 000 000 000 ₽</h1>
              <h3>Оборот компании</h3>
            </div>
            <div className="block__video">
              <img className="icon" src={img5} alt="" />
            </div>
            <div className="block__title">
              <h1>О нас</h1>
              <p>
                Многолетний опыт лежит в основе всего, что мы делаем. Наша
                команда состоит и высококвалифицированных специалистов способных
                решать сложные технологические задачи.
              </p>
            </div>
            <div className="block__text">
              <p>
                ОО «Арктик Энергострой» является поставщиком услуг для
                энергетической отрасли с разнообразным портфелем клиентов,
                включая ведущие нефтегазодобывающие компании.
              </p>
              <p>
                Мы проектируем, комплектуем, строим, управляем и поддерживаем
                инфраструктуру для энергетических отраслей. Наше комплексное и
                индивидуальное предложение услуг охватывает каждый этап
                жизненного цикла проекта и различные коммерческие модели,
                предоставляя нашим клиентам необходимую гибкость.
              </p>
            </div>
            <a href="#">
              Далее
              <img className="icon" src={img3} alt="" />
            </a>
          </div>
        </div>
      </section>

      <section className="about_three">
        <div className="fixed_bottom_one">
          Заказчики Услуги и сервис Партнеры Контакты Продукция Заказчики О
          нас&nbsp; Заказчики Услуги и сервис Партнеры Контакты Продукция
          Заказчики О нас&nbsp; Заказчики Услуги и сервис Партнеры Контакты
          Продукция Заказчики О нас&nbsp; Заказчики Услуги и сервис Партнеры
          Контакты Продукция Заказчики О нас&nbsp; Заказчики Услуги и сервис
          Партнеры Контакты Продукция Заказчики О нас&nbsp;
        </div>
        <div className="fixed_bottom_two">
          Заказчики Услуги и сервис Партнеры Контакты Продукция Заказчики О
          нас&nbsp; Заказчики Услуги и сервис Партнеры Контакты Продукция
          Заказчики О нас&nbsp; Заказчики Услуги и сервис Партнеры Контакты
          Продукция Заказчики О нас&nbsp; Заказчики Услуги и сервис Партнеры
          Контакты Продукция Заказчики О нас&nbsp; Заказчики Услуги и сервис
          Партнеры Контакты Продукция Заказчики О нас&nbsp;
        </div>
        <div className="fixed_bottom_three">
          Заказчики Услуги и сервис Партнеры Контакты Продукция Заказчики О
          нас&nbsp; Заказчики Услуги и сервис Партнеры Контакты Продукция
          Заказчики О нас&nbsp; Заказчики Услуги и сервис Партнеры Контакты
          Продукция Заказчики О нас&nbsp; Заказчики Услуги и сервис Партнеры
          Контакты Продукция Заказчики О нас&nbsp; Заказчики Услуги и сервис
          Партнеры Контакты Продукция Заказчики О нас&nbsp;
        </div>
      </section>

      <section className="about_four">
        <div className="image">
          <img src={img6} alt="" />
        </div>
        <div className="container">
          <div className="block">
            <div className="block__info">
              <h1>Карьера в Arctic Energostroy</h1>
              <p>
                Мы всегда рады принять в нашу команду талантливых и трудолюбивых
                специалистов. Если вы мечтаете об интересной работе, которая
                позволит раскрыть ваши профессиональные возможности – мы ждем
                вас!
              </p>
              <a href="#">
                Подробнее
                <img className="icon" src={img3} alt="" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </AboutUsStyles>
  );
}
