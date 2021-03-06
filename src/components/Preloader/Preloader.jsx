import React from "react";
import styled from "styled-components";
import preloader from "../../assets/img/MainPage/Preloader/Preloader.mp4";

const PreloaderStyle = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 100;
  background: black;
  display: flex;
  justify-content: center;
  align-items: center;

  .preloader {
    width: 100%;
    height: auto;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    .video {
      width: 100%;
      height: auto;
      min-height: 100vh;
    }
  }
`;

export default function Preloader(props) {
  return (
    <PreloaderStyle>
      <div className="preloader">
        <video
          muted
          autoPlay
          src={preloader}
          preload={"auto"}
          type={"video/mp4"}
          className="video"
          onEnded={() => props.loaded()}
        ></video>
      </div>
    </PreloaderStyle>
  );
}
