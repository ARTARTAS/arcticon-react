import React, { useEffect, useState } from "react";
import $ from "jquery";

import styled from "styled-components";
import BlockOne from "./Blocks/BlockOne";
import BlockTwo from "./Blocks/BlockTwo";
import BlockThree from "./Blocks/BlockThree";

const LobbyBlockStyles = styled.div`
  overflow: hidden;
  width: 100%;
  height: calc(100vh - 170px);
  background: black;

  .one {
    width: 100%;
    height: calc(100vh - 120px);
    position: relative;
    background-color: #000000;

    @media (max-width: 1199.98px) {
      height: calc(100vh - 75px);
    }
    @media (max-width: 991.98px) {
      height: calc(100vh - 70px);
    }
    @media (max-width: 767.98px) {
      height: calc(100vh - 65px);
    }
    @media (max-width: 479.98px) {
      height: calc(100vh - 60px);
    }
  }

  .one__one {
    position: absolute;
    /* display: none; */
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    justify-content: center;
    align-items: center;
    background-color: #0c0c0c;

    @media (max-width: 767.98px) {
      flex-direction: column;
    }

    .container {
      @media (max-width: 767.98px) {
        height: fit-content;
      }
    }

    &_block {
      height: 100%;
      width: 100%;
      display: flex;
      align-items: center;

      @media (max-width: 767.98px) {
        height: fit-content;
        padding: 0px 20px;
        margin-top: 60px;
        padding-top: 50px;
      }

      .info {
        height: fit-content;
        width: 40%;
        font-family: "Montserrat", sans-serif;
        z-index: 3;

        @media (max-width: 991.98px) {
          width: 45%;
        }
        @media (max-width: 767.98px) {
          width: 100%;
        }

        h1 {
          color: #ffd600;
          font-weight: 800;
          text-transform: uppercase;
          line-height: 125%;
          font-size: 48px;
          padding-bottom: 50px;
          padding-left: 50px;
          opacity: 0;

          @media (max-width: 1199.98px) {
            font-size: 40px;
          }
          @media (max-width: 991.98px) {
            font-size: 30px;
          }
          @media (max-width: 767.98px) {
            font-size: 27px;
            padding-left: 20px;
          }
          @media (max-width: 479.98px) {
            font-size: 20px;
          }
        }

        h2 {
          font-size: 25px;
          line-height: 125%;
          color: #ffffff;
          padding-bottom: 50px;
          text-transform: uppercase;
          opacity: 0;

          @media (max-width: 1199.98px) {
            font-size: 20px;
            line-height: 24px;
          }
          @media (max-width: 991.98px) {
            font-size: 16px;
            line-height: 20px;
          }
          @media (max-width: 767.98px) {
            font-size: 14px;
            line-height: 17px;
          }
          @media (max-width: 479.98px) {
            font-size: 12px;
            line-height: 15px;
          }
        }

        a {
          width: fit-content;
          font-weight: 600;
          color: #ffc729;
          font-size: 18px;
          padding-left: 50px;
          display: flex;
          justify-content: center;
          align-items: center;
          transition: 0.2s ease-in-out;
          opacity: 0;

          &:hover {
            color: white;
            margin-left: 10px;

            img {
              margin-left: 10px;
            }
          }

          @media (max-width: 1199.98px) {
            font-size: 16px;
          }
          @media (max-width: 991.98px) {
            font-size: 14px;
          }
          @media (max-width: 767.98px) {
            font-size: 13px;
            padding-left: 20px;
          }
          @media (max-width: 479.98px) {
            font-size: 12px;
          }

          .icon {
            fill: none;
            width: 51px;
            height: 54px;

            @media (max-width: 1199.98px) {
              width: 48px;
              height: 51px;
            }
            @media (max-width: 991.98px) {
              width: 45px;
              height: 48px;
            }
            @media (max-width: 767.98px) {
              width: 42px;
              height: 45px;
            }
          }

          img {
            margin-left: 5px;
            transition: 0.2s ease-in-out;
          }
        }
      }
    }

    .images {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;

      @media (max-width: 767.98px) {
        position: relative;
        height: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
      }
      .back {
        position: absolute;
        top: 70px;
        height: calc(100% - 70px);
        right: -100%;
        max-width: none;

        @media (max-width: 991.98px) {
          height: calc(90% - 50px);
          top: calc(5% + 50px);
          right: -60px;
        }
        @media (max-width: 767.98px) {
          top: -100px;
          height: calc(100% + 100px);
        }
      }
      .front {
        position: absolute;
        height: 56%;
        top: 32%;
        right: -100%;
        max-width: none;

        @media (max-width: 991.98px) {
          height: 50%;
          top: 34%;
          right: 70px;
        }
        @media (max-width: 767.98px) {
          top: 0;
          height: 90%;
          right: 20px;
        }
        @media (max-width: 479.98px) {
          height: auto;
          right: 0;
          width: 100%;
          min-width: 400px;
        }
      }
    }
  }

  .one__two {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    display: none;
    justify-content: center;
    align-items: center;
    background-color: #0c0c0c;

    @media (max-width: 767.98px) {
      flex-direction: column;
    }

    .container {
      @media (max-width: 767.98px) {
        height: fit-content;
      }
    }

    &_block {
      height: 100%;
      width: 100%;
      display: flex;
      align-items: center;

      @media (max-width: 767.98px) {
        height: fit-content;
        padding: 0px 20px;
        margin-top: 60px;
        padding-top: 50px;
      }

      .info {
        height: fit-content;
        width: 50%;
        font-family: "Montserrat", sans-serif;
        z-index: 3;

        @media (max-width: 767.98px) {
          width: 100%;
        }

        h2 {
          font-size: 25px;
          line-height: 125%;
          color: #ffffff;
          padding-bottom: 50px;
          padding-left: 50px;
          text-transform: uppercase;
          opacity: 0;

          @media (max-width: 1199.98px) {
            font-size: 20px;
            line-height: 24px;
          }
          @media (max-width: 991.98px) {
            font-size: 16px;
            line-height: 20px;
          }
          @media (max-width: 767.98px) {
            font-size: 14px;
            line-height: 17px;
            padding-left: 20px;
          }
          @media (max-width: 479.98px) {
            font-size: 12px;
            line-height: 15px;
          }
        }

        h1 {
          color: #ffd600;
          font-weight: 800;
          text-transform: uppercase;
          line-height: 125%;
          font-size: 48px;
          padding-bottom: 50px;
          opacity: 0;

          @media (max-width: 1199.98px) {
            font-size: 40px;
          }
          @media (max-width: 991.98px) {
            font-size: 30px;
          }
          @media (max-width: 767.98px) {
            font-size: 27px;
          }
          @media (max-width: 479.98px) {
            font-size: 20px;
          }
        }

        a {
          width: fit-content;
          font-weight: 600;
          color: #ffc729;
          font-size: 18px;
          padding-left: 50px;
          display: flex;
          justify-content: center;
          align-items: center;
          transition: 0.2s ease-in-out;
          opacity: 0;

          &:hover {
            color: white;
            margin-left: 10px;

            svg {
              margin-left: 10px;
            }
          }

          @media (max-width: 1199.98px) {
            font-size: 16px;
          }
          @media (max-width: 991.98px) {
            font-size: 14px;
          }
          @media (max-width: 767.98px) {
            font-size: 13px;
            padding-left: 20px;
          }
          @media (max-width: 479.98px) {
            font-size: 12px;
          }

          .icon {
            fill: none;
            width: 51px;
            height: 54px;

            @media (max-width: 1199.98px) {
              width: 48px;
              height: 51px;
            }
            @media (max-width: 991.98px) {
              width: 45px;
              height: 48px;
            }
            @media (max-width: 767.98px) {
              width: 42px;
              height: 45px;
            }
          }

          svg {
            margin-left: 5px;
            transition: 0.2s ease-in-out;
          }
        }
      }
    }

    .images {
      @media (max-width: 767.98px) {
        position: relative;
        height: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
      }
      .back {
        position: absolute;
        top: calc(5% + 70px);
        height: calc(90% - 70px);
        right: -100%;
        max-width: none;

        @media (max-width: 991.98px) {
          height: calc(90% - 50px);
          top: calc(5% + 50px);
        }
        @media (max-width: 767.98px) {
          top: -100px;
          height: calc(100% + 100px);
        }
      }
      .front {
        position: absolute;
        height: 80%;
        right: -100%;
        bottom: 0;
      }
    }
  }

  .one__three {
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    display: none;
    justify-content: center;
    align-items: center;
    background-color: #0c0c0c;

    @media (max-width: 767.98px) {
      flex-direction: column;
    }

    .container {
      @media (max-width: 767.98px) {
        height: fit-content;
      }
    }

    &_block {
      height: 100%;
      width: 100%;
      display: flex;
      align-items: center;

      @media (max-width: 767.98px) {
        height: fit-content;
        padding: 0px 20px;
        margin-top: 60px;
        padding-top: 50px;
      }

      .info {
        height: fit-content;
        width: 40%;
        font-family: "Montserrat", sans-serif;
        z-index: 3;

        @media (max-width: 991.98px) {
          width: 45%;
        }
        @media (max-width: 767.98px) {
          width: 100%;
        }

        h1 {
          color: #ffd600;
          font-weight: 800;
          text-transform: uppercase;
          line-height: 125%;
          font-size: 48px;
          padding-bottom: 50px;
          padding-left: 50px;
          opacity: 0;

          @media (max-width: 1199.98px) {
            font-size: 40px;
          }
          @media (max-width: 991.98px) {
            font-size: 30px;
          }
          @media (max-width: 767.98px) {
            font-size: 27px;
            padding-left: 20px;
          }
          @media (max-width: 479.98px) {
            font-size: 20px;
          }
        }

        h2 {
          font-size: 25px;
          line-height: 125%;
          color: #ffffff;
          padding-bottom: 50px;
          text-transform: uppercase;
          opacity: 0;

          @media (max-width: 1199.98px) {
            font-size: 20px;
            line-height: 24px;
          }
          @media (max-width: 991.98px) {
            font-size: 16px;
            line-height: 20px;
          }
          @media (max-width: 767.98px) {
            font-size: 14px;
            line-height: 17px;
          }
          @media (max-width: 479.98px) {
            font-size: 12px;
            line-height: 15px;
          }
        }

        a {
          width: fit-content;
          font-weight: 600;
          color: #ffc729;
          font-size: 18px;
          padding-left: 50px;
          display: flex;
          justify-content: center;
          align-items: center;
          transition: 0.2s ease-in-out;
          opacity: 0;

          &:hover {
            color: white;
            margin-left: 10px;

            svg {
              margin-left: 10px;
            }
          }

          @media (max-width: 1199.98px) {
            font-size: 16px;
          }
          @media (max-width: 991.98px) {
            font-size: 14px;
          }
          @media (max-width: 767.98px) {
            font-size: 13px;
            padding-left: 20px;
          }
          @media (max-width: 479.98px) {
            font-size: 12px;
          }

          .icon {
            fill: none;
            width: 51px;
            height: 54px;

            @media (max-width: 1199.98px) {
              width: 48px;
              height: 51px;
            }
            @media (max-width: 991.98px) {
              width: 45px;
              height: 48px;
            }
            @media (max-width: 767.98px) {
              width: 42px;
              height: 45px;
            }
          }

          svg {
            margin-left: 5px;
            transition: 0.2s ease-in-out;
          }
        }
      }
    }

    .images {
      @media (max-width: 991.98px) {
        display: flex;
        justify-content: center;
        align-items: center;
      }
      @media (max-width: 767.98px) {
        position: relative;
        height: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
      }
      .back {
        position: absolute;
        top: 120px;
        width: 100%;
        right: -100%;
        max-width: none;

        @media (max-width: 991.98px) {
          top: auto;
          // height: 100%;
          width: auto;
        }
      }
      .front {
        position: absolute;
        height: 70%;
        top: 25%;
        right: -100%;
        max-width: none;

        @media (max-width: 1199.98px) {
          right: 0px;
        }

        @media (max-width: 991.98px) {
          height: 50%;
          top: 34%;
        }
        @media (max-width: 767.98px) {
          top: 0;
          height: 90%;
        }
      }
    }
  }
`;

export default function LobbyBlock() {
  const [section, setSection] = useState(0);

  const animationTime = 500;

  // craete animation objects for all blocks
  const blockOne = {
    hide: function () {
      $(".one__one_block .info")
        .children()
        .each(function (position) {
          if (position == 2) {
            $(this).animate({ opacity: 0 }, animationTime - 200);
          } else {
            $(this)
              .delay(position * 200)
              .animate({ opacity: 0 }, animationTime);
          }
        });
      $(".one__one .images .front").animate({ right: "-100%" }, animationTime);
      $(".one__one .images .back")
        .delay(100)
        .animate({ right: "-100%" }, animationTime);

      setTimeout(() => {
        $(".one__one").css("display", "none");
      }, animationTime + 100);
    },
  };
  const blockTwo = {
    // Hide section
    hide: function () {
      $(".one__two_block .info")
        .children()
        .each(function (position) {
          if (position == 2) {
            $(this).animate({ opacity: 0 }, animationTime - 200);
          } else {
            $(this)
              .delay(position * 200)
              .animate({ opacity: 0 }, animationTime);
          }
        });
      $(".one__two .images .front")
        .delay(100)
        .animate({ right: "-100%" }, animationTime);
      $(".one__two .images .back").animate({ right: "-100%" }, animationTime);

      setTimeout(() => {
        $(".one__two").css("display", "none");
      }, animationTime + 100);
    },
  };
  const blockThree = {
    hide: function () {
      $(".one__three_block .info")
        .children()
        .each(function (position) {
          if (position == 2) {
            $(this).animate({ opacity: 0 }, animationTime - 200);
          } else {
            $(this)
              .delay(position * 200)
              .animate({ opacity: 0 }, animationTime);
          }
        });
      $(".one__three .images .front")
        .delay(100)
        .animate({ right: "-100%" }, 500);
      $(".one__three .images .back").animate({ right: "-100%" }, 500);
      setTimeout(() => {
        $(".one__three").css("display", "none");
      }, animationTime + 100);
    },
  };

  // set sections to array
  const sections = [blockOne, blockTwo, blockThree];

  var scrollPosition = 0;
  var scroll = false;

  const cahngeBlockTime = 600;

  function ScrollTop() {
    if (scrollPosition < 1) return;

    if ($("body").css("overflow") == "hidden auto") {
      $("html, body").animate(
        {
          scrollTop: 0,
        },
        500
      );
      $("body").css("overflow", "hidden");
    }

    scroll = true;

    if (scrollPosition < sections.length) sections[scrollPosition].hide();

    --scrollPosition;

    setTimeout(() => {
      setSection(scrollPosition);
      UnlockScroll();
    }, cahngeBlockTime);
  }

  function ScrollBottom() {
    if (scrollPosition > sections.length - 2) return;
    scroll = true;

    if (scrollPosition != sections.length - 1) sections[scrollPosition].hide();

    ++scrollPosition;

    setTimeout(() => {
      setSection(scrollPosition);
      UnlockScroll();
    }, cahngeBlockTime);

    if (scrollPosition == sections.length - 1) {
      setTimeout(() => {
        $("body").css({
          overflowY: "visible",
        });
      }, cahngeBlockTime);
    }
  }

  function UnlockScroll() {
    setTimeout(() => {
      scroll = false;
    }, cahngeBlockTime);
  }

  function setScrollSettings() {
    $(".wrapper").css("overflow", "visible");
    window.onwheel = function (e) {
      if (scroll == false && $(document).scrollTop() == 0) {
        if (e.wheelDelta >= 0) {
          ScrollTop();
        } else {
          ScrollBottom();
        }
      }
    };
  }

  function getSection() {
    switch (section) {
      case 0:
        return <BlockOne scrollSetting={setScrollSettings} animationTime={animationTime} />;
      case 1:
        return <BlockTwo scrollSetting={setScrollSettings} animationTime={animationTime}  />;
      case 2:
        return <BlockThree scrollSetting={setScrollSettings} animationTime={animationTime}  />;
    }
  }

  useEffect(() => {
    return () => {
      setScrollSettings();
    };
  }, []);

  return <LobbyBlockStyles>{getSection()}</LobbyBlockStyles>;
}
