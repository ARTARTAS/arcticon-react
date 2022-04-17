// $(document).download(function () {
//    // Установить карточки в блоке Оборудование
//    SetEquipmentCards();
// })

import $ from 'jquery';

// let list = document.querySelector(".owl-carousel");

// function ready () {
//   $(".ten__block_images .shown").slick({
//     infinite: true,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     arrows: false,
//     centerMode: true,
//     centerPadding: 100,
//     fade: true
//   });
//   $(".ten__block_images .list").slick({
//     infinite: true,
//     slidesToShow: 4,
//     slidesToScroll: 1,
//     asNavFor: ".ten__block_images .shown"
//   });
//   // Modal close button
//   $(".modal__one .modal_close-button").click(function () {
//     $(".modal__one").animate({ opacity: 0 }, 500, function () {
//       $(".modal__one").css("display", "none");
//       let wrapper = $(".wrapper");

//       wrapper.css("overflow", "hidden");
//     });
//   });

//   // Update button next
//   var icon = $(".next-button .icon");

//   $(".owl-carousel").owlCarousel({
//     loop: true,
//     items: 4.5,
//     margin: 0,
//   });

//   var button = $(".owl-nav").find(".owl-next");
//   button.empty();
//   button.append(icon);

//   // Hide scroll on first block
//   if ($(document).scrollTop() != 0) {
//     $("body").css("overflow", "visible");
//   }

//   SetCertificates();

//   SetEquipmentCards();
// };

// ready();

// $(window).resize(function () {
//   SetEquipmentCards();
//   SetCertificates();
// });

function SetEquipmentCards() {
  var cards = $(".eight__block_list .card").toArray();
  let listWidth = $(".eight__block_list").width();
  var cardInnerWidth = $(cards[0]).width();
  var cardMargin = $(cards[0]).css("margin").split("px")[0] * 2 - 1;

  var cardWidth = cardInnerWidth + cardMargin;

  var count = parseInt(listWidth / cardWidth, 10);

  var canBeCount = count * 2;

  for (let i = canBeCount; i > 0; i--) {
    $(cards[i]).css("display", "flex");
  }

  for (let i = canBeCount; i < cards.length; i++) {
    $(cards[i]).css("display", "none");
  }
}

function SetCertificates() {
  var list = $(".ten__block_images .list");
  var images = $(list).children();
  var listWidth = $(list).width();
  let count = $(images).length;
  var margin = listWidth / count;

  // var count = $(images).length;

  $(images).each(function (i) {
    $(this).css("z-index", count);
    $(this).css("margin-left", margin + "px");
    count--;
  });

  var buttons = $(".ten__block_buttons").children();

  $(buttons[0]).css({ transform: "rotate(180deg)" });
}

let md1 = 1199.98;
let md2 = 991.98;
let md3 = 767.98;
let md4 = 479.98;

const animationTime = 500;

let windowWidth = $(window).width();

var scrollPosition = 0;
var scroll = false;

export const blockOne = {
  button: $(".one__one_block .info a"),
  section: $(".one__one"),
  infoChildren: $(".one__one_block .info").children(),
  front: $(".one__one .images .front"),
  back: $(".one__one .images .back"),

  // Show section
  show: function () {
    $(this.button).on('click', function () {
      $(".modal__one").css("z-index", "100");
      $(".modal__one").animate({ opacity: 1 }, 500);
      $(".modal__one").css("display", "flex");

      let wrapper = $(".wrapper");

      wrapper.css("overflow", "visible");
      $("body").css("overflow", "hidden");
    });
    // Modal close button
    $(".modal__one .modal_close-button").click(function () {
      $(".modal__one").animate({ opacity: 0 }, 500, function () {
        $(".modal__one").css("display", "none");
        let wrapper = $(".wrapper");

        wrapper.css("overflow", "hidden");
        $("body").css("overflow", "visible");
      });
    });

    // Show section
    $(this.section).css("display", "flex");
    // Show info block
    $(this.infoChildren).each(function (position) {
      if (position == 2) {
        $(this).animate({ opacity: 1 }, animationTime - 200);
      } else {
        $(this)
          .delay(position * 200)
          .animate({ opacity: 1 }, animationTime);
      }
    });
    // Show images
    // Front
    if (windowWidth < md4) {
      $(this.front).animate(
        {
          right: "0px",
        },
        animationTime
      );
    } else if (windowWidth < md3) {
      $(this.front).animate(
        {
          right: "20px",
        },
        animationTime
      );
    } else if (windowWidth < md2) {
      $(this.front).animate(
        {
          right: "70px",
        },
        animationTime
      );
    } else {
      $(this.front).animate(
        {
          right: "10%",
        },
        animationTime
      );
    }
    //Back
    if (windowWidth < md2) {
      $(this.back).animate(
        {
          right: "-60px",
        },
        animationTime - 100
      );
    } else {
      $(this.back).animate(
        {
          right: "0px",
        },
        animationTime - 100
      );
    }
  },
  // Hide section
  hide: function () {
    this.infoChildren.each(function (position) {
      if (position == 2) {
        $(this).animate({ opacity: 0 }, animationTime - 200);
      } else {
        $(this)
          .delay(position * 200)
          .animate({ opacity: 0 }, animationTime);
      }
    });
    $(this.front).animate({ right: "-100%" }, animationTime);
    $(this.back).delay(100).animate({ right: "-100%" }, animationTime);

    setTimeout(() => {
      $(this.section).css("display", "none");
    }, animationTime + 100);
  },
};

export const blockTwo = {
  button: $(".one__two_block .info a"),
  section: $(".one__two"),
  infoChildren: $(".one__two_block .info").children(),
  front: $(".one__two .images .front"),
  back: $(".one__two .images .back"),

  // Show section
  show: function () {
    $(this.button).click(function () {
      $(".modal__two").css("z-index", "100");
      $(".modal__two").animate({ opacity: 1 }, 500);
      $(".modal__two").css("display", "flex");

      let wrapper = $(".wrapper");

      wrapper.css("overflow", "visible");
      $("body").css("overflow", "hidden");
    });
    // Modal close button
    $(".modal__two .modal_close-button").click(function () {
      $(".modal__two").animate({ opacity: 0 }, 500, function () {
        $(".modal__two").css("display", "none");
        let wrapper = $(".wrapper");

        wrapper.css("overflow", "hidden");
        $("body").css("overflow", "visible");
      });
    });
    $(this.section).css("display", "flex");
    // Show info block
    $(this.infoChildren).each(function (position) {
      if (position == 2) {
        $(this).animate({ opacity: 1 }, animationTime - 200);
      } else {
        $(this)
          .delay(position * 200)
          .animate({ opacity: 1 }, animationTime);
      }
    });
    // Show images
    // Front
    $(this.front).delay(100).animate({ right: 0 }, animationTime);
    // Back
    $(this.back).animate({ right: 0 }, animationTime);
  },
  // Hide section
  hide: function () {
    this.infoChildren.each(function (position) {
      if (position == 2) {
        $(this).animate({ opacity: 0 }, animationTime - 200);
      } else {
        $(this)
          .delay(position * 200)
          .animate({ opacity: 0 }, animationTime);
      }
    });
    $(this.front).delay(100).animate({ right: "-100%" }, animationTime);
    $(this.back).animate({ right: "-100%" }, animationTime);

    setTimeout(() => {
      $(this.section).css("display", "none");
    }, animationTime + 100);
  },
};

export const blockThree = {
  button: $(".one__three_block .info a"),
  section: $(".one__three"),
  infoChildren: $(".one__three_block .info").children(),
  front: $(".one__three .images .front"),
  back: $(".one__three .images .back"),
  show: function () {
    $(this.button).click(function () {
      $(".modal__three").css("z-index", "100");
      $(".modal__three").animate({ opacity: 1 }, 500);
      $(".modal__three").css("display", "flex");

      let wrapper = $(".wrapper");

      wrapper.css("overflow", "visible");
      $("body").css("overflow", "hidden");
    });
    // Modal close button
    $(".modal__three .modal_close-button").click(function () {
      $(".modal__three").animate({ opacity: 0 }, 500, function () {
        $(".modal__three").css("display", "none");
        let wrapper = $(".wrapper");

        wrapper.css("overflow", "hidden");
        $("body").css("overflow", "visible");
      });
    });
    $(this.section).css("display", "flex");
    // Show info block
    $(this.infoChildren).each(function (position) {
      if (position == 2) {
        $(this).animate({ opacity: 1 }, animationTime - 200);
      } else {
        $(this)
          .delay(position * 200)
          .animate({ opacity: 1 }, animationTime);
      }
    });
    // Show images
    // Front
    if (windowWidth < md1) {
      $(this.front).delay(100).animate({ right: 0 }, 500);
    } else {
      $(this.front).delay(100).animate({ right: "5%" }, 500);
    }
    // Back
    $(this.back).animate({ right: 0 }, 500);
  },
  // Hide section
  hide: function () {
    this.infoChildren.each(function (position) {
      if (position == 2) {
        $(this).animate({ opacity: 0 }, animationTime - 200);
      } else {
        $(this)
          .delay(position * 200)
          .animate({ opacity: 0 }, animationTime);
      }
    });
    $(this.front).delay(100).animate({ right: "-100%" }, 500);
    $(this.back).animate({ right: "-100%" }, 500);
    setTimeout(() => {
      $(this.section).css("display", "none");
    }, animationTime + 100);
  },
};

const cahngeBlockTime = 600;

// Manipulation of blocks
const sections = [blockOne, blockTwo, blockThree];

$(".one__one, .one__two, .one__three").on("wheel", function (e) {
  if (scroll == false && $(document).scrollTop() == 0) {
    e.originalEvent.wheelDelta >= 0 ? ScrollTop() : ScrollBottom();
  }
});

var startPosition;
var endPosition;

$(".one__one, .one__two, .one__three").on("touchstart", function (e) {
  startPosition = e.originalEvent.touches[0].pageY;
});
$(".one__one, .one__two, .one__three").on("touchend", function (e) {
  endPosition = e.originalEvent.changedTouches[0].pageY;
  if (startPosition < endPosition && startPosition < endPosition - 70) {
    ScrollTop();
  } else if (startPosition > endPosition && startPosition - 70 > endPosition) {
    ScrollBottom();
  }
});

function ScrollTop() {
  if (scrollPosition < 1) return;

  let bodyOverflow = $("body").css("overflow");
  if (bodyOverflow == "visible") {
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
    sections[scrollPosition].show();
    UnlockScroll();
  }, cahngeBlockTime);
}

function ScrollBottom() {
  if (scrollPosition > sections.length - 2) return;
  scroll = true;

  if (scrollPosition != sections.length - 1) sections[scrollPosition].hide();

  ++scrollPosition;

  setTimeout(() => {
    sections[scrollPosition].show();
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
