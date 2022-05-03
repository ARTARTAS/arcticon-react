import React, { useEffect, useState } from "react";
import styled from "styled-components";

import AboutBlock from "../../components/AboutBlock/AboutBlock";
import CarrierBlock from "../../components/CarrierBlock/CarrierBlock";
import CertificatesBlock from "../../components/CertificatesBlock/CertificatesBlock";
import ChoiceBlock from "../../components/ChoiceBlock/ChoiceBlock";
import EquipmentBlock from "../../components/EquipmentBlock/EquipmentBlock";
import LobbyBlock from "../../components/LobbyBlock/LobbyBlock";
import MapBlock from "../../components/MapBlock/MapBlock";
import NewsBlock from "../../components/NewsBlock/NewsBlock";
import ServicesBlock from "../../components/ServicesBlock/ServicesBlock";
import Preloader from "../../components/Preloader/Preloader";
import SideNav from "../../components/SideNav/SideNav";
import store from "../../redux/store";
import { AddData, fetchData } from "../../redux/actions";

const HomeStyled = styled.div`
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

  .modal__one {
    display: none;
    z-index: -1;
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100vw;
    min-height: 100vh;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    overflow: hidden;
    overflow-y: scroll;
    background: linear-gradient(0deg, #000000 -2.88%, rgba(0, 0, 0, 0) 50%),
      #1d1d1d;
  }

  .modal__one .modal_close-button {
    position: absolute;
    -ms-flex-item-align: end;
    align-self: flex-end;
    margin-bottom: 40px;
    right: 32px;
    top: 32px;
    width: 32px;
    height: 32px;
    opacity: 0.5;
    z-index: 101;
    cursor: pointer;
  }

  .modal__one .modal_close-button:hover {
    opacity: 1;
  }

  .modal__one .modal_close-button:before,
  .modal__one .modal_close-button:after {
    position: absolute;
    left: 15px;
    content: " ";
    height: 33px;
    width: 2px;
    background-color: #ffc729;
  }

  .modal__one .modal_close-button:before {
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
  }

  .modal__one .modal_close-button:after {
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
  }

  .modal__one .line {
    position: absolute;
    left: 50px;
    top: 0px;
    height: 300px;
    width: 3px;
    background-color: white;
  }

  @media (max-width: 479.98px) {
    .modal__one .line {
      height: 100px;
    }
  }

  .modal__one .block {
    height: 100%;
    width: 100%;
    display: -ms-grid;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 50px;
  }

  @media (max-width: 767.98px) {
    .modal__one .block {
      grid-template-columns: 1fr;
      grid-template-rows: repeat(2, 1fr);
      grid-gap: 0px;
    }
  }

  .modal__one .block__image {
    height: 100%;
    position: relative;
    -ms-grid-column: 1;
    -ms-grid-column-span: 1;
    grid-column: 1/2;
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

  @media (max-width: 767.98px) {
    .modal__one .block__image {
      height: 800px;
      -ms-grid-row: 1;
      -ms-grid-row-span: 1;
      grid-row: 1/2;
    }
  }

  @media (max-width: 479.98px) {
    .modal__one .block__image {
      height: 400px;
    }
  }

  .modal__one .block__image img {
    width: 100%;
  }

  .modal__one .block__image .modal__one_front {
    position: absolute;
    width: 120%;
    margin-left: 20px;
    margin-bottom: 80%;
    z-index: 3;
  }

  @media (max-width: 767.98px) {
    .modal__one .block__image .modal__one_front {
      top: 0;
      width: 400px;
      margin-left: 0;
      margin-bottom: 0;
    }
  }

  @media (max-width: 479.98px) {
    .modal__one .block__image .modal__one_front {
      top: -20px;
      width: 200px;
    }
  }

  .modal__one .block__image .modal__one_background {
    position: absolute;
    width: 200%;
    padding-top: 120%;
    left: -30%;
    z-index: 1;
  }

  @media (max-width: 767.98px) {
    .modal__one .block__image .modal__one_background {
      width: 600px;
      left: auto;
      padding-top: 400px;
      padding-left: 80px;
    }
  }

  @media (max-width: 479.98px) {
    .modal__one .block__image .modal__one_background {
      padding-top: 200px;
      width: 400px;
    }
  }

  .modal__one .block__image .back {
    position: absolute;
    width: 100%;
    height: 400px;
    margin-bottom: 100%;
    left: -10%;
    z-index: 2;
  }

  @media (max-width: 767.98px) {
    .modal__one .block__image .back {
      top: 0px;
      left: auto;
      margin-bottom: 0;
    }
  }

  @media (max-width: 479.98px) {
    .modal__one .block__image .back {
      width: auto;
      height: 200px;
    }
  }

  .modal__one .block__info {
    height: 100%;
    -ms-grid-column: 2;
    -ms-grid-column-span: 2;
    grid-column: 2/4;
    color: white;
    font-family: "Montserrat", sans-serif;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    padding-left: 100px;
  }

  @media (max-width: 1199.98px) {
    .modal__one .block__info {
      padding-left: 80px;
    }
  }

  @media (max-width: 991.98px) {
    .modal__one .block__info {
      padding-left: 60px;
    }
  }

  @media (max-width: 767.98px) {
    .modal__one .block__info {
      -ms-grid-column: 1;
      -ms-grid-column-span: 1;
      grid-column: 1/2;
      -ms-grid-row: 2;
      -ms-grid-row-span: 1;
      grid-row: 2/3;
      padding-left: 0;
    }
  }

  .modal__one .block__info_title {
    padding-bottom: 50px;
  }

  @media (max-width: 1199.98px) {
    .modal__one .block__info_title {
      padding-bottom: 40px;
    }
  }

  @media (max-width: 991.98px) {
    .modal__one .block__info_title {
      padding-bottom: 30px;
    }
  }

  @media (max-width: 767.98px) {
    .modal__one .block__info_title {
      padding-bottom: 25px;
    }
  }

  @media (max-width: 479.98px) {
    .modal__one .block__info_title {
      padding-bottom: 20px;
    }
  }

  .modal__one .block__info_title h1 {
    font-weight: 500;
    font-size: 48px;
  }

  @media (max-width: 1199.98px) {
    .modal__one .block__info_title h1 {
      font-size: 38px;
    }
  }

  @media (max-width: 991.98px) {
    .modal__one .block__info_title h1 {
      font-size: 30px;
    }
  }

  @media (max-width: 767.98px) {
    .modal__one .block__info_title h1 {
      font-size: 20px;
    }
  }

  @media (max-width: 479.98px) {
    .modal__one .block__info_title h1 {
      font-size: 18px;
    }
  }

  .modal__one .block__info_text {
    padding-bottom: 50px;
  }

  @media (max-width: 1199.98px) {
    .modal__one .block__info_text {
      padding-bottom: 40px;
    }
  }

  @media (max-width: 991.98px) {
    .modal__one .block__info_text {
      padding-bottom: 30px;
    }
  }

  @media (max-width: 767.98px) {
    .modal__one .block__info_text {
      padding-bottom: 25px;
    }
  }

  @media (max-width: 479.98px) {
    .modal__one .block__info_text {
      padding-bottom: 20px;
    }
  }

  .modal__one .block__info_text p {
    padding: 20px 0px;
    font-weight: 300;
    font-size: 16px;
    line-height: 130%;
  }

  @media (max-width: 1199.98px) {
    .modal__one .block__info_text p {
      font-size: 15px;
      padding: 18px 0px;
    }
  }

  @media (max-width: 991.98px) {
    .modal__one .block__info_text p {
      font-size: 14px;
      padding: 16px 0px;
    }
  }

  @media (max-width: 767.98px) {
    .modal__one .block__info_text p {
      font-size: 13px;
      padding: 14px 0px;
    }
  }

  @media (max-width: 479.98px) {
    .modal__one .block__info_text p {
      font-size: 12px;
      padding: 10px 0px;
    }
  }

  .modal__one .block__info .buttons {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-column-gap: 10px;
    column-gap: 10px;
  }

  @media (max-width: 767.98px) {
    .modal__one .block__info .buttons {
      height: -webkit-fit-content;
      height: -moz-fit-content;
      height: fit-content;
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      -ms-flex-direction: column;
      flex-direction: column;
      width: 200px;
      row-gap: 20px;
      margin-bottom: 50px;
    }
  }

  .modal__one .block__info .buttons a {
    width: 100%;
    height: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    color: white;
    font-weight: 400;
    font-size: 18px;
    text-transform: uppercase;
    border: 1px solid white;
    -webkit-transition: all 0.2s ease-in-out;
    transition: all 0.2s ease-in-out;
    min-width: -webkit-fit-content;
    min-width: -moz-fit-content;
    min-width: fit-content;
    padding: 0px 5px;
    height: 50px;
  }

  .modal__one .block__info .buttons a:hover {
    color: black;
    border: 1px solid #ffc729;
    background: #ffc729;
  }

  @media (max-width: 1199.98px) {
    .modal__one .block__info .buttons a {
      font-size: 16px;
      height: 40px;
    }
  }

  @media (max-width: 991.98px) {
    .modal__one .block__info .buttons a {
      font-size: 14px;
      height: 30px;
    }
  }

  @media (max-width: 767.98px) {
    .modal__one .block__info .buttons a {
      font-size: 13px;
      height: 25px;
    }
  }

  @media (max-width: 479.98px) {
    .modal__one .block__info .buttons a {
      font-size: 12px;
    }
  }

  .modal__two {
    display: none;
    z-index: -1;
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100vw;
    min-height: 100vh;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    overflow: hidden;
    overflow-y: scroll;
    background: linear-gradient(0deg, #000000 -2.88%, rgba(0, 0, 0, 0) 50%),
      #1d1d1d;
  }

  .modal__two .modal_close-button {
    position: absolute;
    -ms-flex-item-align: end;
    align-self: flex-end;
    margin-bottom: 40px;
    right: 32px;
    top: 32px;
    width: 32px;
    height: 32px;
    opacity: 0.5;
    z-index: 101;
    cursor: pointer;
  }

  .modal__two .modal_close-button:hover {
    opacity: 1;
  }

  .modal__two .modal_close-button:before,
  .modal__two .modal_close-button:after {
    position: absolute;
    left: 15px;
    content: " ";
    height: 33px;
    width: 2px;
    background-color: #ffc729;
  }

  .modal__two .modal_close-button:before {
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
  }

  .modal__two .modal_close-button:after {
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
  }

  .modal__two .line {
    position: absolute;
    left: 20px;
    top: 0px;
    height: 300px;
    width: 3px;
    background-color: white;
  }

  @media (max-width: 479.98px) {
    .modal__two .line {
      height: 100px;
    }
  }

  .modal__two .container {
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

  .modal__two .block {
    position: relative;
    padding-top: 100px;
    height: 100%;
    width: 100%;
    display: -ms-grid;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-column-gap: 50px;
    font-family: "Montserrat", sans-serif;
    color: white;
    margin-bottom: 50px;
  }

  @media (max-width: 767.98px) {
    .modal__two .block {
      -ms-grid-columns: 1fr;
      grid-template-columns: 1fr;
      grid-template-rows: repeat(4, 1fr);
      grid-gap: 0px;
      padding-top: 0;
    }
  }

  .modal__two .block__image {
    height: 100%;
    position: relative;
    -ms-grid-column: 4;
    -ms-grid-column-span: 2;
    grid-column: 4/6;
    -ms-grid-row: 1;
    -ms-grid-row-span: 1;
    grid-row: 1/2;
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

  @media (max-width: 767.98px) {
    .modal__two .block__image {
      grid-column: auto;
      width: 100%;
      height: 400px;
    }
    .modal__two .block__image img {
      height: auto;
    }
  }

  .modal__two .block__image img {
    width: 100%;
  }

  .modal__two .block__image .modal__two_front {
    position: absolute;
    width: 120%;
    z-index: 3;
  }

  @media (max-width: 767.98px) {
    .modal__two .block__image .modal__two_front {
      width: auto;
      height: 100%;
    }
  }

  @media (max-width: 479.98px) {
    .modal__two .block__image .modal__two_front {
      width: 100%;
      height: auto;
      max-height: 100%;
    }
  }

  .modal__two .block__image .back {
    position: absolute;
    width: 100%;
    height: 400px;
    margin-top: 100px;
    z-index: 2;
  }

  @media (max-width: 767.98px) {
    .modal__two .block__image .back {
      top: 0px;
      left: auto;
      margin-bottom: 0;
      margin-top: 0;
      height: 400px;
    }
  }

  .modal__two .block__info_text {
    -ms-grid-column: 1;
    -ms-grid-column-span: 3;
    grid-column: 1/4;
    -ms-grid-row: 1;
    -ms-grid-row-span: 1;
    grid-row: 1/2;
  }

  @media (max-width: 767.98px) {
    .modal__two .block__info_text {
      grid-column: auto;
      -ms-grid-row: 2;
      -ms-grid-row-span: 1;
      grid-row: 2/3;
    }
  }

  .modal__two .block__info_text p {
    padding: 20px 0px;
    font-weight: 300;
    font-size: 16px;
    line-height: 130%;
  }

  @media (max-width: 1199.98px) {
    .modal__two .block__info_text p {
      font-size: 15px;
      padding: 18px 0px;
    }
  }

  @media (max-width: 991.98px) {
    .modal__two .block__info_text p {
      font-size: 14px;
      padding: 16px 0px;
    }
  }

  @media (max-width: 767.98px) {
    .modal__two .block__info_text p {
      font-size: 13px;
      padding: 14px 0px;
    }
  }

  @media (max-width: 479.98px) {
    .modal__two .block__info_text p {
      font-size: 12px;
      padding: 10px 0px;
    }
  }

  .modal__two .block__info_text-bottom {
    -ms-grid-column: 1;
    -ms-grid-column-span: 5;
    grid-column: 1/6;
    -ms-grid-row: 2;
    -ms-grid-row-span: 1;
    grid-row: 2/3;
  }

  @media (max-width: 767.98px) {
    .modal__two .block__info_text-bottom {
      grid-column: auto;
      -ms-grid-row: 3;
      -ms-grid-row-span: 1;
      grid-row: 3/4;
    }
  }

  .modal__two .block__info_text-bottom p {
    padding: 20px 0px;
    font-weight: 300;
    font-size: 16px;
    line-height: 130%;
  }

  @media (max-width: 1199.98px) {
    .modal__two .block__info_text-bottom p {
      font-size: 15px;
      padding: 18px 0px;
    }
  }

  @media (max-width: 991.98px) {
    .modal__two .block__info_text-bottom p {
      font-size: 14px;
      padding: 16px 0px;
    }
  }

  @media (max-width: 767.98px) {
    .modal__two .block__info_text-bottom p {
      font-size: 13px;
      padding: 14px 0px;
    }
  }

  @media (max-width: 479.98px) {
    .modal__two .block__info_text-bottom p {
      font-size: 12px;
      padding: 10px 0px;
    }
  }

  .modal__two .block .buttons {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-column-gap: 10px;
    column-gap: 10px;
    -ms-grid-column: 1;
    -ms-grid-column-span: 3;
    grid-column: 1/4;
    -ms-grid-row: 3;
    -ms-grid-row-span: 1;
    grid-row: 3/4;
  }

  @media (max-width: 767.98px) {
    .modal__two .block .buttons {
      grid-column: auto;
      -ms-grid-row: 4;
      -ms-grid-row-span: 1;
      grid-row: 4/5;
      height: -webkit-fit-content;
      height: -moz-fit-content;
      height: fit-content;
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      -ms-flex-direction: column;
      flex-direction: column;
      width: 200px;
      row-gap: 20px;
      padding-bottom: 50px;
    }
  }

  .modal__two .block .buttons a {
    width: 100%;
    height: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    color: white;
    font-weight: 400;
    font-size: 18px;
    text-transform: uppercase;
    border: 1px solid white;
    -webkit-transition: all 0.2s ease-in-out;
    transition: all 0.2s ease-in-out;
    min-width: -webkit-fit-content;
    min-width: -moz-fit-content;
    min-width: fit-content;
    padding: 0px 5px;
    height: 50px;
  }

  .modal__two .block .buttons a:hover {
    color: black;
    border: 1px solid #ffc729;
    background: #ffc729;
  }

  @media (max-width: 1199.98px) {
    .modal__two .block .buttons a {
      font-size: 16px;
      height: 40px;
    }
  }

  @media (max-width: 991.98px) {
    .modal__two .block .buttons a {
      font-size: 14px;
      height: 30px;
    }
  }

  @media (max-width: 767.98px) {
    .modal__two .block .buttons a {
      font-size: 13px;
      height: 25px;
    }
  }

  @media (max-width: 479.98px) {
    .modal__two .block .buttons a {
      font-size: 12px;
    }
  }

  .modal__three {
    display: none;
    opacity: 0;
    z-index: -1;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100vw;
    height: 100vh;
    min-height: 100vh;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    overflow: hidden;
    overflow-y: scroll;
    background: -webkit-gradient(
        linear,
        left bottom,
        left top,
        color-stop(-2.88%, #000000),
        color-stop(50%, rgba(0, 0, 0, 0))
      ),
      #1d1d1d;
    background: linear-gradient(0deg, #000000 -2.88%, rgba(0, 0, 0, 0) 50%),
      #1d1d1d;
  }

  .modal__three .modal_close-button {
    position: absolute;
    -ms-flex-item-align: end;
    align-self: flex-end;
    margin-bottom: 40px;
    right: 32px;
    top: 32px;
    width: 32px;
    height: 32px;
    opacity: 0.5;
    z-index: 101;
    cursor: pointer;
  }

  .modal__three .modal_close-button:hover {
    opacity: 1;
  }

  .modal__three .modal_close-button:before,
  .modal__three .modal_close-button:after {
    position: absolute;
    left: 15px;
    content: " ";
    height: 33px;
    width: 2px;
    background-color: #ffc729;
  }

  .modal__three .modal_close-button:before {
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
  }

  .modal__three .modal_close-button:after {
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
  }

  .modal__three .line {
    position: absolute;
    left: 20px;
    top: 0px;
    height: 300px;
    width: 3px;
    background-color: white;
  }

  @media (max-width: 479.98px) {
    .modal__three .line {
      height: 100px;
    }
  }

  .modal__three .block {
    height: 100%;
    width: 100%;
    display: -ms-grid;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    padding-top: 50px;
  }

  @media (max-width: 767.98px) {
    .modal__three .block {
      -ms-grid-columns: 1fr;
      grid-template-columns: 1fr;
      grid-template-rows: repeat(2, 1fr);
      grid-gap: 0px;
    }
  }

  .modal__three .block__image {
    height: 100%;
    width: 100%;
    position: relative;
    -ms-grid-column: 3;
    -ms-grid-column-span: 1;
    grid-column: 3/4;
    -ms-grid-row: 1;
    -ms-grid-row-span: 1;
    grid-row: 1/2;
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

  @media (max-width: 767.98px) {
    .modal__three .block__image {
      -ms-grid-column: 1;
      -ms-grid-column-span: 1;
      grid-column: 1/2;
      -ms-grid-row: 1;
      -ms-grid-row-span: 1;
      grid-row: 1/2;
      height: 500px;
    }
  }

  @media (max-width: 479.98px) {
    .modal__three .block__image {
      height: 300px;
    }
  }

  .modal__three .block__image img {
    width: 100%;
  }

  .modal__three .block__image .modal__one_front {
    position: absolute;
    width: 140%;
    margin-left: 20px;
    z-index: 3;
  }

  @media (max-width: 767.98px) {
    .modal__three .block__image .modal__one_front {
      top: 0;
      width: auto;
      height: 500px;
      margin-left: 0;
      margin-bottom: 0;
    }
  }

  @media (max-width: 479.98px) {
    .modal__three .block__image .modal__one_front {
      height: 300px;
    }
  }

  .modal__three .block__image .back {
    position: absolute;
    width: 150%;
    height: 600px;
    z-index: 2;
  }

  @media (max-width: 767.98px) {
    .modal__three .block__image .back {
      top: 0px;
      left: auto;
      height: 100%;
      margin-bottom: 0;
    }
  }

  @media (max-width: 479.98px) {
    .modal__three .block__image .back {
      width: auto;
    }
  }

  .modal__three .block__info {
    height: 100%;
    width: 100%;
    position: relative;
    -ms-grid-column: 1;
    -ms-grid-column-span: 2;
    grid-column: 1/3;
    -ms-grid-row: 1;
    -ms-grid-row-span: 1;
    grid-row: 1/2;
    color: white;
    font-family: "Montserrat", sans-serif;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    margin-bottom: 50px;
  }

  @media (max-width: 767.98px) {
    .modal__three .block__info {
      -ms-grid-column: 1;
      -ms-grid-column-span: 1;
      grid-column: 1/2;
      -ms-grid-row: 2;
      -ms-grid-row-span: 1;
      grid-row: 2/3;
    }
  }

  .modal__three .block__info_text {
    padding-bottom: 50px;
  }

  @media (max-width: 1199.98px) {
    .modal__three .block__info_text {
      padding-bottom: 40px;
    }
  }

  @media (max-width: 991.98px) {
    .modal__three .block__info_text {
      padding-bottom: 30px;
    }
  }

  @media (max-width: 767.98px) {
    .modal__three .block__info_text {
      padding-bottom: 25px;
    }
  }

  @media (max-width: 479.98px) {
    .modal__three .block__info_text {
      padding-bottom: 20px;
    }
  }

  .modal__three .block__info_text p {
    padding: 20px 0px;
    font-weight: 300;
    font-size: 16px;
    line-height: 130%;
  }

  @media (max-width: 1199.98px) {
    .modal__three .block__info_text p {
      font-size: 15px;
      padding: 18px 0px;
    }
  }

  @media (max-width: 991.98px) {
    .modal__three .block__info_text p {
      font-size: 14px;
      padding: 16px 0px;
    }
  }

  @media (max-width: 767.98px) {
    .modal__three .block__info_text p {
      font-size: 13px;
      padding: 14px 0px;
    }
  }

  @media (max-width: 479.98px) {
    .modal__three .block__info_text p {
      font-size: 12px;
      padding: 10px 0px;
    }
  }

  .modal__three .block__info_text ul {
    width: 100%;
    list-style-position: inside;
  }

  .modal__three .block__info_text ul li {
    list-style: disc inside;
    font-weight: 300;
    font-size: 16px;
    line-height: 130%;
  }

  @media (max-width: 1199.98px) {
    .modal__three .block__info_text ul li {
      font-size: 15px;
    }
  }

  @media (max-width: 991.98px) {
    .modal__three .block__info_text ul li {
      font-size: 14px;
    }
  }

  @media (max-width: 767.98px) {
    .modal__three .block__info_text ul li {
      font-size: 13px;
    }
  }

  @media (max-width: 479.98px) {
    .modal__three .block__info_text ul li {
      font-size: 12px;
    }
  }

  .modal__three .block__info .buttons {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-column-gap: 10px;
    column-gap: 10px;
  }

  @media (max-width: 767.98px) {
    .modal__three .block__info .buttons {
      height: -webkit-fit-content;
      height: -moz-fit-content;
      height: fit-content;
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      -ms-flex-direction: column;
      flex-direction: column;
      width: 200px;
      row-gap: 20px;
    }
  }

  .modal__three .block__info .buttons a {
    width: 100%;
    height: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    color: white;
    font-weight: 400;
    font-size: 18px;
    text-transform: uppercase;
    border: 1px solid white;
    -webkit-transition: all 0.2s ease-in-out;
    transition: all 0.2s ease-in-out;
    min-width: -webkit-fit-content;
    min-width: -moz-fit-content;
    min-width: fit-content;
    padding: 0px 5px;
    height: 50px;
  }

  .modal__three .block__info .buttons a:hover {
    color: black;
    border: 1px solid #ffc729;
    background: #ffc729;
  }

  @media (max-width: 1199.98px) {
    .modal__three .block__info .buttons a {
      font-size: 16px;
      height: 40px;
    }
  }

  @media (max-width: 991.98px) {
    .modal__three .block__info .buttons a {
      font-size: 14px;
      height: 30px;
    }
  }

  @media (max-width: 767.98px) {
    .modal__three .block__info .buttons a {
      font-size: 13px;
      height: 25px;
    }
  }

  @media (max-width: 479.98px) {
    .modal__three .block__info .buttons a {
      font-size: 12px;
    }
  }

  .two {
    position: relative;
    height: -webkit-fit-content;
    height: -moz-fit-content;
    height: fit-content;
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
    background: -webkit-gradient(
        linear,
        left top,
        left bottom,
        from(#0c0c0c),
        color-stop(34.75%, #0c0c0c),
        color-stop(86.82%, #323232)
      ),
      #323232;
    background: linear-gradient(
        180deg,
        #0c0c0c 0%,
        #0c0c0c 34.75%,
        #323232 86.82%
      ),
      #323232;
  }

  .two h1 {
    z-index: 2;
    font-family: "Montserrat", sans-serif;
    font-size: 120px;
    color: #ffd600;
    font-weight: bold;
    position: absolute;
    -webkit-transform: rotate(-90deg);
    transform: rotate(-90deg);
    top: 190px;
    left: -250px;
    margin: 0;
    margin-left: 5%;
  }

  @media (max-width: 1199.98px) {
    .two h1 {
      font-size: 100px;
      left: -200px;
      top: 150px;
    }
  }

  @media (max-width: 767.98px) {
    .two h1 {
      font-size: 80px;
      left: -160px;
      top: 120px;
    }
  }

  @media (max-width: 479.98px) {
    .two h1 {
      font-size: 50px;
      left: -95px;
      top: 75px;
    }
  }

  .two .white-list {
    position: absolute;
    left: 0px;
    z-index: 1;
    height: 100%;
    background-color: white;
    width: 60%;
  }

  @media (max-width: 1199.98px) {
    .two .white-list {
      width: 70%;
    }
  }

  @media (max-width: 991.98px) {
    .two .white-list {
      width: 80%;
    }
  }

  .two__block {
    position: relative;
    height: -webkit-fit-content;
    height: -moz-fit-content;
    height: fit-content;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    padding: 30px;
    padding-left: 10%;
  }

  @media (max-width: 991.98px) {
    .two__block {
      padding-left: 120px;
    }
  }

  @media (max-width: 767.98px) {
    .two__block {
      padding-left: 100px;
    }
  }

  @media (max-width: 479.98px) {
    .two__block {
      padding-left: 60px;
    }
  }

  .two__block_column {
    position: relative;
    margin: 15px 0px;
    z-index: 2;
  }

  @media (max-width: 991.98px) {
    .two__block_column {
      margin: 30px 0px;
    }
  }

  @media (max-width: 767.98px) {
    .two__block_column {
      margin: 25px 0px;
    }
  }

  @media (max-width: 479.98px) {
    .two__block_column {
      margin: 15px 0px;
    }
  }

  .two__block_column .column {
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    height: 270px;
  }

  @media (max-width: 1199.98px) {
    .two__block_column .column {
      height: 208px;
    }
  }

  @media (max-width: 991.98px) {
    .two__block_column .column {
      height: 174px;
    }
  }

  @media (max-width: 767.98px) {
    .two__block_column .column {
      height: auto;
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      -ms-flex-direction: column;
      flex-direction: column;
    }
  }

  .two__block_column .column__title {
    width: 40%;
    font-family: "Inter", sans-serif;
  }

  @media (max-width: 767.98px) {
    .two__block_column .column__title {
      height: 130px;
      width: 100%;
      background-color: white;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-orient: horizontal;
      -webkit-box-direction: normal;
      -ms-flex-direction: row;
      flex-direction: row;
    }
  }

  @media (max-width: 479.98px) {
    .two__block_column .column__title {
      height: 115px;
    }
  }

  .two__block_column .column__title .info {
    height: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    padding: 0px 30px;
  }

  @media (max-width: 1199.98px) {
    .two__block_column .column__title .info {
      padding: 0px 20px;
    }
  }

  @media (max-width: 991.98px) {
    .two__block_column .column__title .info {
      padding: 0px 15px;
    }
  }

  @media (max-width: 767.98px) {
    .two__block_column .column__title .info {
      padding: 0px 10px;
    }
  }

  .two__block_column .column__title .info h2 {
    font-weight: 700;
    color: #3a3c41;
    margin-bottom: 20px;
    font-size: 24px;
  }

  @media (max-width: 1199.98px) {
    .two__block_column .column__title .info h2 {
      font-size: 22px;
    }
  }

  @media (max-width: 991.98px) {
    .two__block_column .column__title .info h2 {
      font-size: 18px;
    }
  }

  @media (max-width: 767.98px) {
    .two__block_column .column__title .info h2 {
      font-size: 16px;
      margin-bottom: 18px;
    }
  }

  @media (max-width: 479.98px) {
    .two__block_column .column__title .info h2 {
      font-size: 14px;
      margin-bottom: 15px;
    }
  }

  .two__block_column .column__title .info h3 {
    font-weight: 400;
    color: #3a3c41;
    font-size: 16px;
    line-height: 187%;
  }

  @media (max-width: 1199.98px) {
    .two__block_column .column__title .info h3 {
      font-size: 14px;
    }
  }

  @media (max-width: 991.98px) {
    .two__block_column .column__title .info h3 {
      font-size: 12px;
    }
  }

  @media (max-width: 767.98px) {
    .two__block_column .column__title .info h3 {
      font-size: 11px;
    }
  }

  @media (max-width: 479.98px) {
    .two__block_column .column__title .info h3 {
      font-size: 10px;
    }
  }

  .two__block_column .column__title a {
    display: none;
  }

  @media (max-width: 767.98px) {
    .two__block_column .column__title a {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      justify-content: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      height: 100%;
      width: 120px;
      z-index: 2;
      background-color: white;
    }
  }

  @media (max-width: 479.98px) {
    .two__block_column .column__title a {
      width: 100px;
    }
  }

  .two__block_column .column__image {
    height: 100%;
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    overflow: hidden;
    width: 60%;
  }

  @media (max-width: 767.98px) {
    .two__block_column .column__image {
      height: 130px;
      width: 100%;
    }
  }

  @media (max-width: 479.98px) {
    .two__block_column .column__image {
      height: -webkit-fit-content;
      height: -moz-fit-content;
      height: fit-content;
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
  }

  .two__block_column .column__image a {
    position: absolute;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    height: 70%;
    width: 100px;
    z-index: 2;
    background-color: white;
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
  }

  @media (max-width: 1199.98px) {
    .two__block_column .column__image a {
      width: 80px;
    }
  }

  @media (max-width: 991.98px) {
    .two__block_column .column__image a {
      width: 60px;
    }
  }

  @media (max-width: 767.98px) {
    .two__block_column .column__image a {
      display: none;
    }
  }

  .two__block_column .column__image a:hover {
    padding-left: 10px;
  }

  .two__block_column .column__image img {
    z-index: 1;
  }

  @media (max-width: 767.98px) {
    .two__block_column .column__image img {
      position: absolute;
      width: 100%;
      bottom: 0px;
    }
  }

  @media (max-width: 479.98px) {
    .two__block_column .column__image img {
      position: relative;
      top: 0px;
    }
  }

  .three {
    width: 100%;
    position: relative;
    background: #fff;
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

  .three .back {
    top: 0;
    left: 0;
    position: absolute;
    width: 100%;
    height: 350px;
    background: #323232;
  }

  @media (max-width: 1199.98px) {
    .three .back {
      height: 260px;
    }
  }

  @media (max-width: 991.98px) {
    .three .back {
      height: 170px;
    }
  }

  @media (max-width: 767.98px) {
    .three .back {
      height: 0px;
    }
  }

  @media (max-width: 767.98px) {
    .three .container {
      margin: 0;
    }
  }

  .three .block {
    display: -ms-grid;
    display: grid;
    width: 100%;
    grid-template-columns: 250px 250px repeat(2, 1fr);
    padding: 100px 0px;
    font-family: "Montserrat", sans-serif;
    height: -webkit-fit-content;
    height: -moz-fit-content;
    height: fit-content;
  }

  @media (max-width: 1199.98px) {
    .three .block {
      grid-template-columns: 200px 200px repeat(2, 1fr);
      padding: 60px 0px;
    }
  }

  @media (max-width: 991.98px) {
    .three .block {
      grid-template-columns: 130px 130px repeat(2, 1fr);
      padding: 40px 0px;
    }
  }

  @media (max-width: 767.98px) {
    .three .block {
      grid-template-columns: repeat(2, 1fr);
      padding-top: 0px;
    }
  }

  .three .block .square {
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
    .three .block .square {
      height: 200px;
      width: 200px;
      padding: 24px 15px;
    }
  }

  @media (max-width: 991.98px) {
    .three .block .square {
      height: 130px;
      width: 130px;
      padding: 10px;
    }
  }

  @media (max-width: 767.98px) {
    .three .block .square {
      height: 160px;
      width: auto;
    }
  }

  .three .block .square h1 {
    font-weight: 700;
    font-size: 36px;
  }

  @media (max-width: 1199.98px) {
    .three .block .square h1 {
      font-size: 30px;
    }
  }

  @media (max-width: 991.98px) {
    .three .block .square h1 {
      font-size: 20px;
    }
  }

  .three .block .square h3 {
    font-weight: 600;
    font-size: 20px;
    line-height: 150%;
    text-align: center;
  }

  @media (max-width: 1199.98px) {
    .three .block .square h3 {
      font-size: 18px;
    }
  }

  @media (max-width: 991.98px) {
    .three .block .square h3 {
      font-size: 14px;
      line-height: 120%;
    }
  }

  .three .block__expirience {
    -ms-grid-column: 2;
    -ms-grid-column-span: 1;
    grid-column: 2/3;
    -ms-grid-row: 1;
    -ms-grid-row-span: 1;
    grid-row: 1/2;
    background: #ffd600;
  }

  @media (max-width: 767.98px) {
    .three .block__expirience {
      -ms-grid-column: 1;
      -ms-grid-column-span: 1;
      grid-column: 1/2;
      -ms-grid-row: 1;
      -ms-grid-row-span: 1;
      grid-row: 1/2;
    }
  }

  .three .block__logo {
    -ms-grid-column: 1;
    -ms-grid-column-span: 1;
    grid-column: 1/2;
    -ms-grid-row: 2;
    -ms-grid-row-span: 1;
    grid-row: 2/3;
    background: #c4c4c4;
  }

  @media (max-width: 767.98px) {
    .three .block__logo {
      -ms-grid-column: 2;
      -ms-grid-column-span: 1;
      grid-column: 2/3;
      -ms-grid-row: 1;
      -ms-grid-row-span: 2;
      grid-row: 1/3;
    }
  }

  @media (max-width: 991.98px) {
    .three .block__logo img {
      width: 100%;
    }
  }

  @media (max-width: 767.98px) {
    .three .block__logo img {
      height: 100%;
      max-height: 100px;
      width: auto;
    }
  }

  @media (max-width: 479.98px) {
    .three .block__logo img {
      height: auto;
      width: 100%;
      max-width: 120px;
    }
  }

  .three .block__contracts {
    -ms-grid-column: 2;
    -ms-grid-column-span: 1;
    grid-column: 2/3;
    -ms-grid-row: 2;
    -ms-grid-row-span: 1;
    grid-row: 2/3;
  }

  @media (max-width: 767.98px) {
    .three .block__contracts {
      -ms-grid-column: 1;
      -ms-grid-column-span: 1;
      grid-column: 1/2;
      -ms-grid-row: 2;
      -ms-grid-row-span: 1;
      grid-row: 2/3;
    }
  }

  .three .block__turnover.square {
    -ms-grid-column: 2;
    -ms-grid-column-span: 1;
    grid-column: 2/3;
    -ms-grid-row: 3;
    -ms-grid-row-span: 1;
    grid-row: 3/4;
    background: #bfcdff;
  }

  @media (max-width: 767.98px) {
    .three .block__turnover.square {
      -ms-grid-column: 2;
      -ms-grid-column-span: 1;
      grid-column: 2/3;
      -ms-grid-row: 2;
      -ms-grid-row-span: 1;
      grid-row: 2/3;
    }
  }

  .three .block__turnover.square h1 {
    font-size: 24px;
  }

  @media (max-width: 1199.98px) {
    .three .block__turnover.square h1 {
      font-size: 18px;
    }
  }

  @media (max-width: 991.98px) {
    .three .block__turnover.square h1 {
      font-size: 12px;
    }
  }

  .three .block__turnover.square h3 {
    width: 80%;
  }

  .three .block__video {
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
    display: flex;
    height: fit-content;
    width: 100%;

    .video {
      height: 100%;
      width: 100%;
    }
  }

  @media (max-width: 991.98px) {
    .three .block__video {
      max-height: 260px;
    }
  }

  @media (max-width: 767.98px) {
    .three .block__video {
      -ms-grid-column: 1;
      -ms-grid-column-span: 2;
      grid-column: 1/3;
      -ms-grid-row: 3;
      -ms-grid-row-span: 1;
      grid-row: 3/4;
      width: 100%;
    }
  }

  .three .block__video img {
    max-height: 100%;
    width: 100%;
  }

  .three .block__title {
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
    .three .block__title {
      padding: 35px 0px 0px 25px;
    }
  }

  @media (max-width: 991.98px) {
    .three .block__title {
      padding: 20px 0px 0px 20px;
    }
  }

  @media (max-width: 767.98px) {
    .three .block__title {
      -ms-grid-column: 1;
      -ms-grid-column-span: 2;
      grid-column: 1/3;
      -ms-grid-row: 4;
      -ms-grid-row-span: 1;
      grid-row: 4/5;
      padding: 20px 20px 10px 20px;
    }
  }

  .three .block__title h1 {
    font-weight: 600;
    font-size: 35px;
  }

  @media (max-width: 1199.98px) {
    .three .block__title h1 {
      font-size: 30px;
    }
  }

  @media (max-width: 991.98px) {
    .three .block__title h1 {
      font-size: 25px;
    }
  }

  @media (max-width: 767.98px) {
    .three .block__title h1 {
      margin-bottom: 20px;
    }
  }

  .three .block__title p {
    font-weight: 400;
    font-size: 18px;
    line-height: 150%;
    text-align: justify;
  }

  @media (max-width: 1199.98px) {
    .three .block__title p {
      font-size: 15px;
    }
  }

  @media (max-width: 991.98px) {
    .three .block__title p {
      font-size: 12px;
    }
  }

  @media (max-width: 767.98px) {
    .three .block__title p {
      line-height: 125%;
    }
  }

  .three .block__text {
    -ms-grid-column: 2;
    -ms-grid-column-span: 3;
    grid-column: 2 / 5;
    padding-top: 20px;
    margin-bottom: 30px;
  }

  @media (max-width: 767.98px) {
    .three .block__text {
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

  .three .block__text p {
    padding: 15px 0px;
    font-weight: 400;
    font-size: 18px;
    line-height: 150%;
    text-align: justify;
  }

  @media (max-width: 1199.98px) {
    .three .block__text p {
      font-size: 15px;
      padding: 14px;
    }
  }

  @media (max-width: 991.98px) {
    .three .block__text p {
      font-size: 12px;
      padding: 10px;
    }
  }

  @media (max-width: 767.98px) {
    .three .block__text p {
      line-height: 125%;
      padding: 0;
    }
  }

  .three .block__text p:last-child {
    display: none;
  }

  .three .block a {
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

  .three .block a:hover {
    color: gray;
    margin-left: 10px;
  }

  .three .block a:hover svg {
    margin-left: 10px;
  }

  @media (max-width: 1199.98px) {
    .three .block a {
      font-size: 16px;
    }
  }

  @media (max-width: 991.98px) {
    .three .block a {
      font-size: 14px;
    }
  }

  @media (max-width: 767.98px) {
    .three .block a {
      font-size: 12px;
      margin-left: 20px;
      -ms-grid-column: 1;
      -ms-grid-column-span: 2;
      grid-column: 1/3;
    }
  }

  @media (max-width: 479.98px) {
    .three .block a {
      font-size: 10px;
    }
  }

  .three .block a .icon {
    fill: none;
    width: 51px;
    height: 54px;
  }

  @media (max-width: 1199.98px) {
    .three .block a .icon {
      width: 48px;
      height: 51px;
    }
  }

  @media (max-width: 991.98px) {
    .three .block a .icon {
      width: 45px;
      height: 48px;
    }
  }

  @media (max-width: 767.98px) {
    .three .block a .icon {
      width: 42px;
      height: 45px;
    }
  }

  .three .block a svg {
    margin-left: 5px;
    -webkit-transition: 0.2s ease-in-out;
    transition: 0.2s ease-in-out;
  }

  .four {
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

  .four .image {
    position: absolute;
    height: 100%;
    width: 50%;
    top: 0;
    right: 0;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    overflow: hidden;
  }

  .four .image img {
    position: absolute;
    left: 0;
    width: auto;
    min-height: 100%;
    min-width: 100%;
    max-width: none;
    max-height: none;
  }

  .four .block {
    width: 100%;
    display: -ms-grid;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  .four .block__info {
    font-family: "Montserrat", sans-serif;
    -ms-grid-column: 1;
    -ms-grid-column-span: 1;
    grid-column: 1/2;
    padding: 50px 20px 50px 0px;
  }

  .four .block__info h1 {
    font-weight: 600;
    font-size: 50px;
    line-height: 127%;
    margin-bottom: 55px;
  }

  @media (max-width: 1199.98px) {
    .four .block__info h1 {
      font-size: 50px;
      margin-bottom: 40px;
    }
  }

  @media (max-width: 991.98px) {
    .four .block__info h1 {
      font-size: 30px;
    }
  }

  @media (max-width: 767.98px) {
    .four .block__info h1 {
      font-size: 20px;
    }
  }

  @media (max-width: 479.98px) {
    .four .block__info h1 {
      font-size: 16px;
      margin-bottom: 20px;
    }
  }

  .four .block__info p {
    font-weight: 300;
    font-size: 18px;
    line-height: 194%;
    margin-bottom: 55px;
  }

  @media (max-width: 1199.98px) {
    .four .block__info p {
      font-size: 16px;
      margin-bottom: 40px;
    }
  }

  @media (max-width: 991.98px) {
    .four .block__info p {
      font-size: 12px;
    }
  }

  @media (max-width: 479.98px) {
    .four .block__info p {
      margin-bottom: 20px;
    }
  }

  .four .block__info a {
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

  .four .block__info a:hover {
    color: gray;
    margin-left: 10px;
  }

  .four .block__info a:hover svg {
    margin-left: 10px;
  }

  @media (max-width: 1199.98px) {
    .four .block__info a {
      font-size: 16px;
    }
  }

  @media (max-width: 991.98px) {
    .four .block__info a {
      font-size: 14px;
    }
  }

  @media (max-width: 767.98px) {
    .four .block__info a {
      font-size: 12px;
    }
  }

  @media (max-width: 479.98px) {
    .four .block__info a {
      font-size: 10px;
    }
  }

  .four .block__info a .icon {
    fill: none;
    width: 51px;
    height: 54px;
  }

  @media (max-width: 1199.98px) {
    .four .block__info a .icon {
      width: 48px;
      height: 51px;
    }
  }

  @media (max-width: 991.98px) {
    .four .block__info a .icon {
      width: 45px;
      height: 48px;
    }
  }

  @media (max-width: 767.98px) {
    .four .block__info a .icon {
      width: 42px;
      height: 45px;
    }
  }

  .four .block__info a svg {
    margin-left: 5px;
    -webkit-transition: 0.2s ease-in-out;
    transition: 0.2s ease-in-out;
  }

  .six {
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
    background-color: #ffffff;
  }

  .six .container {
    overflow: hidden;
  }

  .six .next-button {
    display: none;
  }

  @media (max-width: 767.98px) {
    .six__block {
      margin: 0px 30px;
    }
  }

  @media (max-width: 479.98px) {
    .six__block {
      margin: 0px 20px;
    }
  }

  .six__block_title {
    padding: 100px 0px;
  }

  @media (max-width: 1199.98px) {
    .six__block_title {
      padding: 80px 0px;
    }
  }

  @media (max-width: 991.98px) {
    .six__block_title {
      padding: 60px 0px;
    }
  }

  @media (max-width: 767.98px) {
    .six__block_title {
      padding: 50px 0px;
    }
  }

  @media (max-width: 479.98px) {
    .six__block_title {
      padding: 40px 0px;
      padding-bottom: 20px;
    }
  }

  .six__block_title h1 {
    font-family: "Montserrat", sans-serif;
    font-weight: 700;
    font-size: 96px;
    color: #aaa9ad;
    text-transform: uppercase;
  }

  @media (max-width: 1199.98px) {
    .six__block_title h1 {
      font-size: 80px;
    }
  }

  @media (max-width: 991.98px) {
    .six__block_title h1 {
      font-size: 60px;
    }
  }

  @media (max-width: 767.98px) {
    .six__block_title h1 {
      font-size: 40px;
    }
  }

  @media (max-width: 479.98px) {
    .six__block_title h1 {
      font-size: 30px;
    }
  }

  .six__block_part .part {
    width: 100%;
    padding: 20px 0px;
  }

  .six__block_part .part__title {
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    margin-bottom: 40px;
  }

  .six__block_part .part__title h1 {
    font-family: "Montserrat", sans-serif;
    font-weight: 700;
    text-transform: uppercase;
    color: black;
    font-size: 35px;
    margin-bottom: 35px;
  }

  @media (max-width: 1199.98px) {
    .six__block_part .part__title h1 {
      font-size: 30px;
      margin-bottom: 30px;
    }
  }

  @media (max-width: 991.98px) {
    .six__block_part .part__title h1 {
      font-size: 24px;
      margin-bottom: 25px;
    }
  }

  @media (max-width: 767.98px) {
    .six__block_part .part__title h1 {
      font-size: 20px;
      margin-bottom: 20px;
    }
  }

  @media (max-width: 479.98px) {
    .six__block_part .part__title h1 {
      font-size: 16px;
      margin-bottom: 15px;
    }
  }

  .six__block_part .part__title .line {
    height: 2px;
    width: 240px;
    background-color: #ffd600;
  }

  .six__block_part .part .block {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    width: 100%;
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: flex-start;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
  }

  .six__block_part .part .block .next {
    display: none;
  }

  .six__block_part .part .block .owl-carousel {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
  }

  .six__block_part .part .block .owl-dots {
    display: none;
  }

  .six__block_part .part .block .owl-item {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    width: 100%;
  }

  .six__block_part .part .block .owl-nav {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    padding-left: 20px;
    padding: 10px;
    -webkit-transition: all 0.2s ease-in-out;
    transition: all 0.2s ease-in-out;
  }

  .six__block_part .part .block .owl-nav:hover {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }

  @media (max-width: 767.98px) {
    .six__block_part .part .block .owl-nav {
      display: none;
    }
  }

  .six__block_part .part .block .owl-nav .owl-prev {
    display: none;
  }

  .six__block_part .part .block .owl-nav .owl-next {
    cursor: pointer;
    -webkit-transition: 0.2s ease-in-out;
    transition: 0.2s ease-in-out;
  }

  .six__block_part .part .block .owl-nav .owl-next .icon {
    width: 51px;
    height: 54px;
  }

  @media (max-width: 1199.98px) {
    .six__block_part .part .block .owl-nav .owl-next .icon {
      width: 48px;
      height: 51px;
    }
  }

  @media (max-width: 991.98px) {
    .six__block_part .part .block .owl-nav .owl-next .icon {
      width: 45px;
      height: 48px;
    }
  }

  @media (max-width: 767.98px) {
    .six__block_part .part .block .owl-nav .owl-next .icon {
      width: 42px;
      height: 45px;
    }
  }

  .seven {
    position: relative;
    width: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    background-color: #ffffff;
  }

  .seven__block {
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
  }

  .seven__block img {
    width: 100%;
  }

  .nine {
    position: relative;
    width: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    font-family: "Montserrat", sans-serif;
    background-color: #dfdfdf;
    height: 1500px;
  }

  .nine img {
    position: absolute;
    bottom: 0px;
    z-index: 1;
    width: 100%;
  }

  .nine__block h1 {
    font-weight: 700;
    font-size: 35px;
    margin: 90px 0px;
    text-align: left;
    padding-left: 50px;
  }

  @media (max-width: 1199.98px) {
    .nine__block h1 {
      margin: 70px 0px;
      font-size: 30px;
    }
  }

  @media (max-width: 991.98px) {
    .nine__block h1 {
      margin: 55px 0px;
      font-size: 29px;
    }
  }

  @media (max-width: 767.98px) {
    .nine__block h1 {
      margin: 40px 0px;
      font-size: 28px;
    }
  }

  @media (max-width: 479.98px) {
    .nine__block h1 {
      margin: 25px 0px;
      font-size: 25px;
    }
  }

  .nine__block_table {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: left;
    -ms-flex-pack: left;
    justify-content: left;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
  }

  .nine__block_table .block {
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    height: -webkit-fit-content;
    height: -moz-fit-content;
    height: fit-content;
    padding: 30px;
    margin: 20px;
    background-color: rgba(255, 255, 255, 0.8);
    border-radius: 10px;
    z-index: 2;
    min-width: 300px;
    -webkit-transition: all 0.2s ease-in-out;
    transition: all 0.2s ease-in-out;
  }

  .nine__block_table .block:hover {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }

  .nine__block_table .block:hover .title {
    color: #ffa800;
  }

  @media (max-width: 1199.98px) {
    .nine__block_table .block {
      padding: 28px;
      margin: 18px;
    }
  }

  @media (max-width: 991.98px) {
    .nine__block_table .block {
      padding: 25px;
      margin: 16px;
    }
  }

  @media (max-width: 767.98px) {
    .nine__block_table .block {
      padding: 23px;
      margin: 14px;
    }
  }

  @media (max-width: 479.98px) {
    .nine__block_table .block {
      padding: 20px;
      margin: 10px;
    }
  }

  .nine__block_table .block .title {
    color: black;
    margin-bottom: 35px;
  }

  .nine__block_table .block .title h2 {
    font-weight: 700;
    font-size: 24px;
    text-align: center;
  }

  @media (max-width: 1199.98px) {
    .nine__block_table .block .title h2 {
      font-size: 19px;
    }
  }

  @media (max-width: 991.98px) {
    .nine__block_table .block .title h2 {
      font-size: 18px;
    }
  }

  @media (max-width: 767.98px) {
    .nine__block_table .block .title h2 {
      font-size: 17 px;
    }
  }

  @media (max-width: 479.98px) {
    .nine__block_table .block .title h2 {
      font-size: 16px;
    }
  }

  .nine__block_table .block p {
    font-weight: 400;
    font-size: 18px;
    line-height: 140%;
    max-height: 100px;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-bottom: 10px;
  }

  @media (max-width: 1199.98px) {
    .nine__block_table .block p {
      font-size: 16px;
    }
  }

  @media (max-width: 991.98px) {
    .nine__block_table .block p {
      font-size: 12px;
    }
  }

  @media (max-width: 767.98px) {
    .nine__block_table .block p {
      font-size: 11px;
    }
  }

  @media (max-width: 479.98px) {
    .nine__block_table .block p {
      font-size: 10px;
    }
  }

  .nine__block_table .block .more {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-item-align: end;
    align-self: flex-end;
    font-family: "Montserrat", sans-serif;
    font-weight: 600;
    font-size: 14px;
    color: #2d2d2d;
    -webkit-transition: all 0.2s ease-in-out;
    transition: all 0.2s ease-in-out;
    margin-right: 5px;
  }

  .nine__block_table .block .more:hover {
    color: gray;
    margin-right: 0px;
  }

  .nine__block_table .block .more:hover svg {
    margin-left: 10px;
  }

  .nine__block_table .block .more .icon {
    width: 0px;
    height: 54px;
    position: relative;
    opacity: 0;
    transition: all 0.2s ease-in-out;
  }
  .nine__block_table .block:hover .more .icon {
    width: 51px;
    opacity: 1;
  }

  @media (max-width: 1199.98px) {
    .nine__block_table .block .more .icon {
      width: 48px;
      height: 51px;
    }
  }

  @media (max-width: 991.98px) {
    .nine__block_table .block .more .icon {
      width: 45px;
      height: 48px;
    }
  }

  @media (max-width: 767.98px) {
    .nine__block_table .block .more .icon {
      width: 42px;
      height: 45px;
    }
  }

  .nine__block_table .block .more svg {
    -webkit-transition: all 0.2s ease-in-out;
    transition: all 0.2s ease-in-out;
    margin-left: 5px;
  }

  .ten {
    position: relative;
    height: -webkit-fit-content;
    height: -moz-fit-content;
    height: fit-content;
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
    background: #ffffff;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    font-family: "Montserrat", sans-serif;
  }

  .ten h1 {
    z-index: 2;
    font-size: 75px;
    color: #8d8d8d;
    font-weight: 700;
    position: absolute;
    -webkit-transform: rotate(-90deg);
    transform: rotate(-90deg);
    top: 320px;
    left: -270px;
    margin: 0;
    margin-left: 5%;
    text-transform: uppercase;

    @media (max-width: 1199.98px) {
      font-size: 70px;
    }

    @media (max-width: 991.98px) {
      font-size: 65px;
    }

    @media (max-width: 767.98px) {
      font-size: 60px;
      transform: rotate(0deg);
      top: 0px;
      left: 0px;
      margin-left: 30px;
      position: relative;
      padding: 30px 0px;
      font-size: 40px;
      margin-right: auto;
    }

    @media (max-width: 479.98px) {
      font-size: 30px;
      margin-left: 20px;
    }
  }

  .ten__block {
    width: 80%;
    height: -webkit-fit-content;
    height: -moz-fit-content;
    height: fit-content;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    margin: 0 auto;
    padding: 80px 0px 40px 0px;

    @media (max-width: 1199.98px) {
      padding: 70px 0px 30px 0px;
    }

    @media (max-width: 991.98px) {
      padding: 45px 0px 30px 0px;
    }

    @media (max-width: 767.98px) {
      padding: 30px 0px 30px 0px;
    }
    @media (max-width: 467.98px) {
      padding: 0px;
    }
  }

  .ten__block_images {
    position: relative;
    display: -ms-grid;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    height: 400px;
    width: 100%;

    @media (max-width: 767.98px) {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 300px;
    }
  }

  .ten__block_images .shown {
    position: relative;
    width: 270px;
    height: 380px;
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

  .ten__block_images .shown .image {
    width: 100%;
    height: 100%;
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

  .ten__block_images .list {
    position: relative;
    width: 900px;
    height: 380px;
  }

  .ten__block_images .list .image {
    width: 100%;
    height: 100%;
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

  .ten__block_buttons {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-item-align: end;
    align-self: flex-end;
    width: -webkit-fit-content;
    width: -moz-fit-content;
    width: fit-content;
  }

  .ten__block_buttons .left_arrow {
    padding-left: 20px;
    -webkit-transition: all 0.2s ease-in-out;
    transition: all 0.2s ease-in-out;
  }

  .ten__block_buttons .left_arrow:hover {
    padding-left: 25px;
  }

  .ten__block_buttons .right_arrow {
    padding-left: 5px;
    padding-right: 10px;
    -webkit-transition: all 0.2s ease-in-out;
    transition: all 0.2s ease-in-out;
  }

  .ten__block_buttons .right_arrow:hover {
    padding-left: 10px;
    padding-right: 5px;
  }

  .ten__block_buttons a {
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
  }

  .ten__block_buttons a .icon {
    width: 41px;
    height: 44px;
    fill: none;
  }

  @media (max-width: 1199.98px) {
    .ten__block_buttons a .icon {
      width: 39px;
      height: 42px;
    }
  }

  @media (max-width: 991.98px) {
    .ten__block_buttons a .icon {
      width: 35px;
      height: 38px;
    }
  }

  @media (max-width: 767.98px) {
    .ten__block_buttons a .icon {
      width: 31px;
      height: 34px;
    }
  }

  .ten__block_buttons a svg {
    margin-left: 5px;
  }

  .ten .line {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    width: 100%;
    padding: 30px 14%;
    background: #ffd600;
    margin-bottom: 60px;

    @media (max-width: 767.98px) {
      padding: 30px;
    }
  }

  .ten .line p {
    font-weight: 400;
    font-size: 20px;
    line-height: 150%;

    @media (max-width: 1199.98px) {
      font-size: 18px;
    }

    @media (max-width: 991.98px) {
      font-size: 16px;
    }

    @media (max-width: 767.98px) {
      font-size: 14px;
    }
  }
  /*# sourceMappingURL=index.css.map */
`;

export default function Home() {
  let preloader = sessionStorage.getItem("preloader");
  const [isLoading, setLoading] = useState(preloader == null ? true : false);

  function scrollToTop() {
    window.scrollTo(0, 0);
  }

  const videoIsLoaded = () => {
    setLoading(false);
    sessionStorage.setItem("preloader", true);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    // fetchData();
  }, []);

  // const newData = "dcp";

  // const addNewData = (newData) => {
  //   AddData(newData);
  // }
  // addNewData(newData);

  return (
    <HomeStyled>
      {isLoading ? (
        <Preloader loaded={videoIsLoaded}></Preloader>
      ) : (
        <div>
          <SideNav scrollToTop={scrollToTop} />
          <LobbyBlock />
          <NewsBlock />
          <AboutBlock />
          <CarrierBlock />
          <ChoiceBlock />
          <MapBlock />
          <EquipmentBlock />
          <ServicesBlock />
          <CertificatesBlock />
        </div>
      )}
    </HomeStyled>
  );
}
