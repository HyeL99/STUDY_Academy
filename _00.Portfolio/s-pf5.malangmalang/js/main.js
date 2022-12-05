$(function () {
  let character = [
    {
      img: "./img/amogae.png",
      name: "./img/amogae-text.svg",
      color: "#b43bff",
    },
    {
      img: "./img/gigi.png",
      name: "./img/gigi-text.svg",
      color: "#ff457e",
    },
    {
      img: "./img/yaya.png",
      name: "./img/yaya-text.svg",
      color: "#ff5353",
    },
    {
      img: "./img/maman.png",
      name: "./img/maman-text.svg",
      color: "#ff8f4a",
    },
    {
      img: "./img/6b.png",
      name: "./img/6b-text.svg",
      color: "#4694ff",
    },
  ];
  let i = 1;
  let winW = $(window).width();
  $("#title div.inner ul.slide li.slideLi").append(
    '<span class="modelName"></span>'
  );
  for (let model of character) {
    $(`#title div.inner ul li:nth-of-type(${i})`).css({
      "font-size": "0",
      background: model.color,
    });
    $(`#title div.inner ul li:nth-of-type(${i})`)
      .children("span.modelName")
      .css(
        "background",
        "url('" + model.name + "') no-repeat center / contain"
      );
    $(`#title div.inner ul li:nth-of-type(${i})`)
      .children("span")
      .before('<span class="modelImage"></span>');
    $(`#title div.inner ul li:nth-of-type(${i})`)
      .children("span.modelImage")
      .css("background", `url('${model.img}') no-repeat bottom / contain`);
    let num1 = (i - 1) * 0.15;
    $(`#title div.inner ul li:nth-of-type(${i}) span`).css({
      "animation-name": "upChaAni",
      "animation-duration": "0.4s",
      "animation-timing-function": "linear",
      "animation-fill-mode": "forwards",
      "animation-delay": num1 + "s",
    });
    console.log(model.img);
    i++;
  }
  for (let j = 1; j < 4; j++) {
    let num2 = (j - 1) * 0.3;
    $(`#quick ul li:nth-of-type(${j}) a`).css({
      "animation-name": "downBtnAni",
      "animation-duration": "0.6s",
      "animation-timing-function": "linear",
      "animation-fill-mode": "forwards",
      "animation-delay": num2 + "s",
    });
  }
  $("#title div.inner div.text h2").css("opacity", "1");
  $(".select").children("ul").hide();
  $(".select").on("click", function () {
    $(".option-list").toggle();
  });
  $(".option")
    .children("a")
    .on("click", function () {
      $(".option-list").toggle();
      return false;
    });
  $("a").click(function () {
    return false;
  });
  doSlick(winW);
  let a = 0;

  $("header").before(
    '<div id="gnbBack" class="hide"><div class="inner"></div></div>'
  );
  $("#gnbBack").before("<span id='darkbg'></span>");
  $("header .inner").prepend('<span class="bar"></span>');
  let clk = false;
  if (winW > 991) {
    $(".menuItem").show();
  }

  $(".menuButton").on("click", function () {
    if (clk) {
      clk = false;
      closeMenu(winW);
    } else {
      clk = true;
      openMenu(winW);
    }
  });

  $(window).resize(function () {
    winW = $(window).width();
    doSlick(winW);
    if (winW > 991) {
      $(".menuItem").show();
      $("#gnbBack .inner").css("height", "20px");
      $("#gnbBack").css("height", "50px");
      $("#darkbg").hide();
    } else if (winW > 767) {
      $("#gnbBack").css({ height: "100vh", width: "0%" });
      if (clk) {
        openMenu(winW);
      } else {
        closeMenu(winW);
      }
    } else {
      $("#gnbBack").css({ height: "50px", width: "100%" });
      if (clk) {
        openMenu(winW);
      } else {
        closeMenu(winW);
      }
    }
  });

  // 함수 선언
  function doSlick(width) {
    $(".slide").filter(".slick-initialized").slick("unslick");
    if (width > 575) {
      $(".arrow").hide();
      $(".slide").filter(".slick-initialized").slick("unslick");
    } else {
      $(".arrow").show();
      $(".slide")
        .not(".slick-initialized")
        .slick({
          dots: true,
          prevArrow: $(".prev"),
          nextArrow: $(".next"),
          infinite: true,
          slidesToShow: 1.15,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
        });
    }
  }
  function openMenu(winW) {
    if (winW <= 730) {
      $("#gnbBack").css({ width: "244px", height: "100vh" });
      $("#gnbBack .inner").css("height", "355px");
      $(".bar").css({ top: "136px", opacity: "1" });
    } else if (winW <= 767) {
      $("#gnbBack").css({ height: "237px", width: "100%" });
      $("#gnbBack .inner").css("height", "205px");
      $(".bar").css({ top: "136px", opacity: "1" });
    } else if (winW <= 991) {
      $("#gnbBack").css({ height: "168px", width: "100%" });
      $("#gnbBack .inner").css("height", "136px");
    }
    $("#darkbg").show();
    setTimeout(function () {
      $(".menuItem").show();
    }, 180);
  }
  function closeMenu(winW) {
    if (winW <= 730) {
      $("#gnbBack").css("width", "0px");
    } else {
      $("#gnbBack").css("height", "50px");
    }
    $(".menuItem").hide();
    $(".bar").css({ top: "0px", opacity: "0" });
    $("#gnbBack .inner").css("height", "20px");
    setTimeout(function () {
      $("#darkbg").hide();
    }, 180);
  }
});
