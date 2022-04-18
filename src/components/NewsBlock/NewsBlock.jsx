import React from "react";
import arrowBlack from "./../../assets/svg/arrowBlack.svg";
import img1 from "./../../assets/img/MainPage/BlockTwo/01.jpg";
import img2 from "./../../assets/img/MainPage/BlockTwo/02.png";
import img3 from "./../../assets/img/MainPage/BlockTwo/03.png";

export default function NewsBlock() {
  return (
    <section className="two">
      <h1>Новости</h1>
      <div className="white-list"></div>
      <div className="container">
        <div className="two__block">
          <div className="two__block_column">
            <div className="column">
              <div className="column__title">
                <div className="info">
                  <h2>Sed ut perspiciatis</h2>
                  <h3>
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                    odit aut fugit, sed quia.
                  </h3>
                </div>
                <a href="">
                  <img src={arrowBlack} alt="arrowBlack" />
                </a>
              </div>
              <div className="column__image">
                <a href="">
                  <img src={arrowBlack} alt="arrowBlack" />
                </a>
                <img src={img1} alt="" />
              </div>
            </div>
          </div>
          <div className="two__block_column">
            <div className="column">
              <div className="column__title">
                <div className="info">
                  <h2>Sed ut perspiciatis</h2>
                  <h3>
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                    odit aut fugit, sed quia.
                  </h3>
                </div>
                <a href="">
                  <img src={arrowBlack} alt="arrowBlack" />
                </a>
              </div>
              <div className="column__image">
                <a href="">
                  <img src={arrowBlack} alt="arrowBlack" />
                </a>
                <img src={img2} alt="" />
              </div>
            </div>
          </div>
          <div className="two__block_column">
            <div className="column">
              <div className="column__title">
                <div className="info">
                  <h2>Sed ut perspiciatis</h2>
                  <h3>
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                    odit aut fugit, sed quia.
                  </h3>
                </div>
                <a href="">
                  <img src={arrowBlack} alt="arrowBlack" />
                </a>
              </div>
              <div className="column__image">
                <a href="">
                  <img src={arrowBlack} alt="arrowBlack" />
                </a>
                <img src={img3} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
