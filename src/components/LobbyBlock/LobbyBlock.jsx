import React, { useEffect, useState } from "react";
import $ from "jquery";
import styled from "styled-components";
import BlockOne from "./Blocks/BlockOne";
import BlockTwo from "./Blocks/BlockTwo";
import BlockThree from "./Blocks/BlockThree";

const LobbyBlockStyles = styled.div`
  overflow: hidden;
  width: 100%;
  height: calc(100vh - 120px);
  background: black;
`;

export default function LobbyBlock() {
  const [section, setSection] = useState(0);

  const animationTime = 500;

  function hideBlock(name) {
    if (name == sections[sections.length - 1]) {
      $(".side-navigation").css("display", "none");
    }

    $("body").css("overflow", "hidden");

    const block = ".one__" + name;
    $(block + "_block .info")
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
    $(block + " .images .front")
      .delay(100)
      .animate({ right: "-100%" }, animationTime);
    $(block + " .images .back").animate({ right: "-100%" }, animationTime);

    setTimeout(() => {
      $(block).css("display", "none");
    }, animationTime + 100);
  }

  // set sections to array
  const sections = ["one", "two", "three"];

  let startPosition = 0;
  let endPosition = 0;
  var scrollPosition = section;
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

    if (scrollPosition < sections.length) hideBlock(sections[scrollPosition]);

    --scrollPosition;

    setTimeout(() => {
      setSection(scrollPosition);
      UnlockScroll();
    }, cahngeBlockTime);
  }

  function ScrollBottom() {
    if (scrollPosition > sections.length - 2) return;
    scroll = true;

    if (scrollPosition != sections.length - 1)
      hideBlock(sections[scrollPosition]);

    ++scrollPosition;

    setTimeout(() => {
      setSection(scrollPosition);
      UnlockScroll();
    }, cahngeBlockTime);
  }

  function UnlockScroll() {
    setTimeout(() => {
      scroll = false;
    }, cahngeBlockTime);
  }

  function setScrollSettings() {
    window.onwheel = function (e) {
      if (scroll == false && $(document).scrollTop() == 0) {
        if (e.wheelDelta >= 0) {
          ScrollTop();
        } else {
          ScrollBottom();
        }
      }
    };
    window.ontouchstart = function (e) {
      startPosition = e.touches[0].pageY;
    };
    window.ontouchend = function (e) {
      endPosition = e.changedTouches[0].pageY;
      if (startPosition < endPosition && startPosition < endPosition - 70) {
        ScrollTop();
      } else if (
        startPosition > endPosition &&
        startPosition - 70 > endPosition
      ) {
        ScrollBottom();
      }
    };
  }

  function getSection() {
    switch (section) {
      case 0:
        return (
          <BlockOne
            scrollSetting={setScrollSettings}
            animationTime={animationTime}
          />
        );
      case 1:
        return (
          <BlockTwo
            scrollSetting={setScrollSettings}
            animationTime={animationTime}
          />
        );
      case 2:
        return (
          <BlockThree
            scrollSetting={setScrollSettings}
            animationTime={animationTime}
          />
        );
    }
  }

  useEffect(() => {
    setScrollSettings();
    if (window.scrollY > 0) {
      $(".side-navigation").css("display", "flex");
      scrollPosition = 2;
      setSection(2);
      $("body").css("overflow", "overlay");
    }
  }, []);

  return <LobbyBlockStyles>{getSection()}</LobbyBlockStyles>;
}
