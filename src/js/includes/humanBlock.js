import findAttr from "../adjectiveHuman/findAttrGirl";
import findAttrMan from "../adjectiveHuman/findAttrMan";
import switchFunc from "../adjectiveHuman/switchFuncGirl";
import getImgHuman from "../adjectiveHuman/getImgHuman";
import switchFuncMan from "../adjectiveHuman/switchFuncMan";
import {
  massElipsColor,
  massElipsColorMan
} from "../elipsContext/massElipsColor";
export default function() {
  let arrowHeart = $(".d_human__img_girl__arrowHeart");
  let arrowHeartMan = $(".d_human__img_girl__arrowHeart_man");
  let humanImgHeart = $(".d_human__img_girl__heart");
  let activeClassHuman = $(".d_human__img_girl");
  let btnGirlNext = $(".d_human__list_girl__next");
  let btnGirlPrev = $(".d_human__list_girl__prev");
  let btnManNext = $(".d_human__list_man__next");
  let btnManPrev = $(".d_human__list_man__prev");
  let ulActive = $(".d_human__list_ul");
  let elipsYellow = $(".d_human__img_girl__elips");
  let elipsYellowMan = $(".d_human__img_man__elips");
  let linkSwitchBlockHuman = $(".d_human__img_changeGender__img");
  let girlBtns = $(".d_human__list_girl__btns");
  let manBtns = $(".d_human__list_man__btns");
  let slidersGirl = $(".d_human__slidersGirl");
  let slidersMan = $(".d_human__slidersMan");
  let openPopapListBtnMan = $(".d_human__sliderMan_btn");
  let openPopapListBtnWoman = $(".d_human__sliderGirl_btn");
  let popapListCloser = $(".d_popapListHuman__closerBtn");
  let popapListPrevbtn = $(".d_popapSliderBtn__prev");
  let popapListNextbtn = $(".d_popapSliderBtn__next");
  let autoClickSliderMobail = $(".d_headbtn");
  let dPopapUlHuman = document.querySelectorAll(".d_popapUlHuman");
  let d_btnCloserPopapVideoHub = $(".d_popapVideo__closer");
  // let rightElipsGirl = document.querySelector(
  //   ".d_human__img_girl__elipsArmRight"
  // );
  // let cloneNodeRightGirl = rightElipsGirl.cloneNode(true);
  // cloneNodeRightGirl.style.marginLeft = "-157px";
  // // console.log(cloneNodeRightGirl);

  // $("#blockGirl")[0].appendChild(cloneNodeRightGirl);
  // $(cloneNodeRightGirl).on("mouseover", e => {
  //   e.preventDefault();
  //   let target = $(e.target);
  //   arrowHeartMan[0].style.opacity = "0";
  //   arrowHeart[0].style.opacity = "1";

  //   $(".d_human__list__h")[0].innerText = target[0].getAttribute("data-Text");
  //   ulActive.map((index, ul) => {
  //     ul.classList.remove("active");
  //   });
  //   getImgHuman(e.target.getAttribute("data-id"));

  //   elipsYellow.map((e, target) => {
  //     target.classList.remove("active");
  //   });
  //   if (e.target.parentElement.getAttribute("id") == "blockGirl") {
  //     switchFunc(e.target.getAttribute("data-id"));
  //   }
  //   if (e.target.parentElement.getAttribute("id") == "blockMan") {
  //     switchFuncMan(e.target.getAttribute("data-id"));
  //   }

  //   target.addClass("active");
  //   findAttr();
  //   let lolss = $(e.target.getAttribute("href"));
  //   lolss.addClass("active");

  //   let attrYellowCircle = e.target.getAttribute("data-id");
  //   let dMobailDotsWomanBtn = $(dMobailDotsWoman[attrYellowCircle]).children();
  //   // console.log(dMobailDotsWomanBtn);

  //   if (document.documentElement.clientWidth <= 577) {
  //     dMobailDotsWomanBtn.click();
  //   }
  //   $(rightElipsGirl).addClass("active");
  // });

  let copyDataImg = null;

  let newDataIdImg = null;

  // ELIPS COLOR AND WIDTH

  elipsYellow.map((e, target) => {
    massElipsColor.push(target);
  });
  elipsYellowMan.map((e, target) => {
    massElipsColorMan.push(target);
  });
  $(".d_human__list__h")[0].innerText = $(massElipsColor)[0].getAttribute(
    "data-Text"
  );

  // mouseover MOUSEOVER
  let dMobailDotsWoman = $(slidersGirl)
    .find(".slick-dots")
    .children();
  // console.log(dMobailDotsWoman);

  elipsYellow.on("mouseover", e => {
    e.preventDefault();
    let target = $(e.target);
    arrowHeartMan[0].style.opacity = "0";
    arrowHeart[0].style.opacity = "1";

    $(".d_human__list__h")[0].innerText = target[0].getAttribute("data-Text");
    ulActive.map((index, ul) => {
      ul.classList.remove("active");
    });
    getImgHuman(e.target.getAttribute("data-id"));

    elipsYellow.map((e, target) => {
      target.classList.remove("active");
    });
    if (e.target.parentElement.getAttribute("id") == "blockGirl") {
      switchFunc(e.target.getAttribute("data-id"));
    }
    if (e.target.parentElement.getAttribute("id") == "blockMan") {
      switchFuncMan(e.target.getAttribute("data-id"));
    }

    target.addClass("active");
    findAttr();

    // lol.addClass('active')
    let attrYellowCircle = e.target.getAttribute("data-id");
    let dMobailDotsWomanBtn = $(dMobailDotsWoman[attrYellowCircle]).children();
    // console.log(dMobailDotsWomanBtn);

    if (document.documentElement.clientWidth <= 577) {
      dMobailDotsWomanBtn.click();
    }
    // if ($(rightElipsGirl).hasClass("active")) {
    //   $(cloneNodeRightGirl).addClass("active");
    // } else if (!$(rightElipsGirl).hasClass("active")) {
    //   $(cloneNodeRightGirl).removeClass("active");
    // }
  });

  elipsYellowMan.on("mouseover", e => {
    e.preventDefault();
    let target = $(e.target);
    arrowHeartMan[0].style.opacity = "1";
    arrowHeart[0].style.opacity = "0";

    $(".d_human__list__h")[0].innerText = target[0].getAttribute("data-Text");

    Array.prototype.forEach.call(ulActive, ul => {
      ul.classList.remove("active");
    });
    getImgHuman(e.target.getAttribute("data-id"));

    Array.prototype.forEach.call(elipsYellowMan, target => {
      target.classList.remove("active");
    });

    if (e.target.parentElement.getAttribute("id") == "blockGirl") {
      switchFunc(e.target.getAttribute("data-id"));
    }
    if (e.target.parentElement.getAttribute("id") == "blockMan") {
      switchFuncMan(e.target.getAttribute("data-id"));
    }

    target.addClass("active");
    findAttrMan();
    let attrYellowCircle = e.target.getAttribute("data-id");
    let dMobailDotsManBtn = $(dMobailDotsMan[attrYellowCircle]).children();
    if (document.documentElement.clientWidth <= 577) {
      dMobailDotsManBtn.click();
    }
  });
  elipsYellow.on("click", e => {
    e.preventDefault();
  });
  elipsYellowMan.on("click", e => {
    e.preventDefault();
  });

  // btnGirlNext COLOR AND WIDTH

  btnGirlNext.on("click", e => {
    e.preventDefault();

    arrowHeart[0].style.opacity = "1";
    Array.prototype.forEach.call(ulActive, ul => {
      ul.classList.remove("active");
    });
    let value = null;

    massElipsColor.forEach((curValue, index) => {
      if (curValue.classList.contains("active")) {
        value = curValue;
      }
    });
    let dataId = String(Number(value.getAttribute("data-id")) + 1);

    massElipsColor.forEach((curValue, index, array) => {
      curValue.classList.remove("active");

      //
      if (index == dataId) {
        curValue.classList.add("active");

        $(".d_human__list__h")[0].innerText = $(curValue)[0].getAttribute(
          "data-Text"
        );
      }
      if (dataId >= array.length) {
        massElipsColor[0].classList.add("active");
        $(".d_human__list__h")[0].innerText = massElipsColor[0].getAttribute(
          "data-Text"
        );
      }
    });
    let datId =
      String(Number(value.getAttribute("data-id")) + 1) >= massElipsColor.length
        ? "0"
        : String(Number(value.getAttribute("data-id")) + 1);
    switchFunc(datId);
    getImgHuman(datId);

    findAttr();
    // if ($(rightElipsGirl).hasClass("active")) {
    //   $(cloneNodeRightGirl).addClass("active");
    // } else if (!$(rightElipsGirl).hasClass("active")) {
    //   $(cloneNodeRightGirl).removeClass("active");
    // }
  });
  btnManNext.on("click", e => {
    e.preventDefault();
    arrowHeartMan[0].style.opacity = "1";

    Array.prototype.forEach.call(ulActive, ul => {
      ul.classList.remove("active");
    });

    let value = null;

    massElipsColorMan.forEach((curValue, index) => {
      if (curValue.classList.contains("active")) {
        value = curValue;
      }
    });
    let dataId = String(Number(value.getAttribute("data-id")) + 1);

    massElipsColorMan.forEach((curValue, index, array) => {
      curValue.classList.remove("active");
      if (index == dataId) {
        curValue.classList.add("active");
        $(".d_human__list__h")[0].innerText = $(curValue)[0].getAttribute(
          "data-Text"
        );
      }
      if (dataId >= array.length) {
        massElipsColorMan[0].classList.add("active");
        $(".d_human__list__h")[0].innerText = massElipsColorMan[0].getAttribute(
          "data-Text"
        );
      }
    });

    let datId =
      String(Number(value.getAttribute("data-id")) + 1) >=
      massElipsColorMan.length
        ? "0"
        : String(Number(value.getAttribute("data-id")) + 1);
    switchFuncMan(datId);
    getImgHuman(datId);

    findAttrMan();
  });

  btnGirlPrev.on("click", e => {
    e.preventDefault();
    Array.prototype.forEach.call(ulActive, ul => {
      ul.classList.remove("active");
    });
    arrowHeartMan[0].style.opacity = "1";
    arrowHeart[0].style.opacity = "1";

    let value = null;
    massElipsColor.forEach((curValue, index) => {
      if (curValue.classList.contains("active")) {
        value = curValue;
      }
    });

    let dataId =
      String(Number(value.getAttribute("data-id")) - 1) < 0
        ? String(massElipsColor.length - 1)
        : String(Number(value.getAttribute("data-id")) - 1);

    massElipsColor.forEach((curValue, index) => {
      curValue.classList.remove("active");

      if (index == dataId) {
        curValue.classList.add("active");
        $(".d_human__list__h")[0].innerText = $(curValue)[0].getAttribute(
          "data-Text"
        );
      }
    });
    switchFunc(dataId);
    getImgHuman(dataId);
    findAttr();
    // if ($(rightElipsGirl).hasClass("active")) {
    //   $(cloneNodeRightGirl).addClass("active");
    // } else if (!$(rightElipsGirl).hasClass("active")) {
    //   $(cloneNodeRightGirl).removeClass("active");
    // }
  });
  btnManPrev.on("click", e => {
    e.preventDefault();
    Array.prototype.forEach.call(ulActive, ul => {
      ul.classList.remove("active");
    });
    arrowHeartMan[0].style.opacity = "1";
    arrowHeart[0].style.opacity = "1";
    let value = null;
    massElipsColorMan.forEach((curValue, index) => {
      if (curValue.classList.contains("active")) {
        value = curValue;
      }
    });

    let dataId =
      String(Number(value.getAttribute("data-id")) - 1) < 0
        ? String(massElipsColorMan.length - 1)
        : String(Number(value.getAttribute("data-id")) - 1);

    massElipsColorMan.forEach((curValue, index) => {
      curValue.classList.remove("active");

      if (index == dataId) {
        curValue.classList.add("active");
        $(".d_human__list__h")[0].innerText = $(curValue)[0].getAttribute(
          "data-Text"
        );
      }
    });
    switchFuncMan(dataId);
    getImgHuman(dataId);
    findAttrMan();
  });
  // btnGirlNext COLOR AND WIDTH
  // linkSwitchBlockHuman
  let dMobailDotsMan = null;

  linkSwitchBlockHuman.on("click", e => {
    e.preventDefault();
    let target = $(e.target);
    let link = target.parent().attr("href");

    let content = $(link);
    var activeImg = $(".d_human__img");

    let activeImgChildren = activeImg.children();
    Array.prototype.forEach.call(activeImgChildren, (e, n) => {
      e.classList.remove("active");
    });
    Array.prototype.forEach.call(ulActive, ul => {
      ul.classList.remove("active");
    });
    let parentImg = target.parent().parent();

    let clasParent = parentImg.attr("class");
    let octive = $(`.${clasParent} .active`);

    octive.removeClass("active");
    target.addClass("active");

    activeImg.removeClass("active");
    let children = content.children();

    Array.prototype.forEach.call($(children), (e, n) => {
      if (e.parentNode.getAttribute("id") == "blockGirl") {
        if ($(window).width() >= 768) {
          clearInterval(interval);
          interval = setInterval(e => {
            btnGirlNextInterval();
          }, 5000);
        }

        findAttr();
        let activeElips = document.querySelector(
          ".d_human__img_girl__elips.active"
        );
        getImgHuman($(activeElips)[0].getAttribute("data-id"));
        $(".d_human__list__h")[0].innerText = $(activeElips)[0].getAttribute(
          "data-Text"
        );

        arrowHeartMan[0].style.opacity = "0";
        arrowHeart[0].style.opacity = "1";
        let dnblockUl = $(".d_popapUlHuman");
        $(dnblockUl[4]).removeClass("d-n");
        let dnblockImg = $(".d_popapSliderImg__img");
        $(dnblockImg[4]).removeClass("d-n");
      }
      if (e.parentNode.getAttribute("id") == "blockMan") {
        findAttrMan();
        let activeElipsTwo = document.querySelector(
          ".d_human__img_man__elips.active"
        );
        if ($(window).width() >= 768) {
          clearInterval(interval);
          interval = setInterval(e => {
            btnManNextInterval();
          }, 5000);
        }

        getImgHuman($(activeElipsTwo)[0].getAttribute("data-id"));
        $(".d_human__list__h")[0].innerText = $(activeElipsTwo)[0].getAttribute(
          "data-Text"
        );

        arrowHeart[0].style.opacity = "0";
        arrowHeartMan[0].style.opacity = "1";
        let dnblockUl = $(".d_popapUlHuman");
        $(dnblockUl[4]).addClass("d-n");
        let dnblockImg = $(".d_popapSliderImg__img");
        $(dnblockImg[4]).addClass("d-n");
      }
    });
    content.addClass("active");

    if (content[0].getAttribute("id") == "blockGirl") {
      findAttr();
      girlBtns[0].classList.add("active");
      manBtns[0].classList.remove("active");
      $(slidersGirl).addClass("active");
      $(slidersMan).removeClass("active");
      if ($(window).width() <= 520) {
        $(".d_human__slidersMan").slick("unslick");

        $(".d_human__slidersGirl").slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          autoplay: true,
          speed: 100,
          autoplaySpeed: 5000,
          arrows: false
        });
      }
      dMobailDotsWoman = $(".d_human__slidersGirl")
        .find(".slick-dots")
        .children();
      // console.log(dMobailDotsWoman);
    } else {
      manBtns[0].classList.add("active");
      girlBtns[0].classList.remove("active");
      $(slidersMan).addClass("active");
      $(slidersGirl).removeClass("active");

      if (document.documentElement.clientWidth <= 577) {
        $(".d_human__slidersMan").slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          autoplay: true,
          autoplaySpeed: 5000,
          arrows: false
        });
        $(".d_human__slidersGirl").slick("unslick");

        let clickBtnSliderManPreventDefault = slidersMan.find("li").children();

        clickBtnSliderManPreventDefault.on("click", event => {
          event.preventDefault();
          event.target.disabled = true;
        });
      }

      dMobailDotsMan = $(slidersMan)
        .find(".slick-dots")
        .children();
    }
  });
  // linkSwitchBlockHuman

  $(".d_human__slidersGirl").on("afterChange", function(
    event,
    slick,
    currentSlide,
    nextSlide
  ) {
    massElipsColor.forEach(e => {
      e.classList.remove("active");
    });
    massElipsColor[currentSlide].classList.add("active");
    // if (massElipsColor[currentSlide].getAttribute("data-id") == 2) {
    //   $(cloneNodeRightGirl).addClass("active");
    // } else {
    //   $(cloneNodeRightGirl).removeClass("active");
    // }
  });

  $(".d_human__slidersMan").on("afterChange", function(
    event,
    slick,
    currentSlide,
    nextSlide
  ) {
    massElipsColorMan.forEach(e => {
      e.classList.remove("active");
    });
    massElipsColorMan[currentSlide].classList.add("active");
  });
  let interval = null;

  if ($(window).width() >= 768) {
    if ($(activeClassHuman[0]).hasClass("active")) {
      clearInterval(interval);

      interval = setInterval(e => {
        btnGirlNextInterval();
      }, 5000);
    }
  }
  function btnGirlNextInterval() {
    btnGirlNext.click();
  }
  function btnManNextInterval() {
    btnManNext.click();
  }

  if ($(window).height() <= 667) {
    d_btnCloserPopapVideoHub[0].style.top = "149px";
    // console.log(d_btnCloserPopapVideoHub);
    let clickBtnSliderGirlPreventDefault = slidersGirl.find("li").children();
    clickBtnSliderGirlPreventDefault.on("click", event => {
      event.preventDefault();
      event.target.disabled = true;
      // console.log(event);
    });
  }
  if ($(window).height() == 812) {
    $(dPopapUlHuman).map((index, target) => {
      target.style.height = "60vh";
    });
  }
  if ($(window).height() <= 812) {
    let clickBtnSliderGirlPreventDefault = slidersGirl.find("li").children();

    clickBtnSliderGirlPreventDefault.on("click", event => {
      event.preventDefault();
      event.target.disabled = true;
    });
  }
}
