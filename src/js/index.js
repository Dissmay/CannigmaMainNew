$(function() {
  // SLIDERS
  $(".d_slideBlock").slick({
    dots: true,
    arrows: false,
    autoplay: true,
  autoplaySpeed: 6000,
  });
  //INIT слайдера
  $(".d_human__slidersGirl").on("init", function(event, slick) {
    $(event.target)
      .find("li")[1]
      .click();
  });
  $(".d_human__slidersMan").on("init", function(event, slick) {
    $(event.target)
      .find("li")[1]
      .click();
  });
  //INIT слайдера

  $(".d_slideWrap").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    speed: 3000,
    autoplay:true,
    autoplaySpeed: 6000,
    asNavFor: ".d_slideWrapLast",
    prevArrow: $(".d_slideFirst__prev"),
    nextArrow: $(".d_slideFirst__next"),
    dots: true,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false
        }
      }
    ]
  });
  $(".d_slideWrapLast").slick({
    slidesToShow: 3,
    slidesToScroll: 1,

    asNavFor: ".d_slideWrap",
    dots: true,
    speed: 3000,
    focusOnSelect: true,
    prevArrow: $(".d_slideLast__prev"),
    nextArrow: $(".d_slideLast__next"),
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
  $(".d_educationCenter__slider").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: $(".d_educationCenter__slider_prev"),
    nextArrow: $(".d_educationCenter__slider_next"),
    responsive: [
      {
        breakpoint: 770,
        settings: "unslick"
      }
    ]
  });
  $(".d_experts__sliders").slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    prevArrow: $(".d_experts__prev"),
    nextArrow: $(".d_experts__next"),
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });
  $(".d_human__slidersGirl").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false
  });
  // SLIDERS
  //GLOBAL WINDOW SCROLL TOP 0
  $(window).scrollTop(0);
  //GLOBAL WINDOW SCROLL TOP 0

  /* Tabs */
  let d_tabLink = $(".d_essentials__tabLink");
  /* Tabs */
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
  let d_popapVideoHub = $(".d_popapVideo");
  let d_btnCloserPopapVideoHub = $(".d_popapVideo__closer");

  //SUBSTRTEXT
  const expertsComments = document.querySelectorAll(
    ".d_experts__sliderExpert_p"
  );
  const expertsName = document.querySelectorAll(".d_experts__sliderExpert_h");
  const humanListNameA = document.querySelectorAll(".d_news__h");
  const mainSlideTextH = document.querySelectorAll('.d_slide__text_h');
  const mainNewsBigCardH = document.querySelectorAll('.d_moreNews__bigCard_h');
  const mainNewsLeftCardH = document.querySelectorAll('.d_moreNews__card_h');
  const mainNewsSmallCardH = document.querySelectorAll('.d_moreNews__smallCard_h');
  const mainleftLastnews = document.querySelectorAll('.d_paddingRight')

  const smallCardMoreNews = document.querySelectorAll('.d_moreNews__smallCard_p');
  // console.log(smallCardMoreNews);
  
  const endCharacter = "...";
  let substrFunction = (element, size) => {
    element.forEach(el => {
      let text = el.innerHTML;

      if (el.innerHTML.length > size) {
        text = text.substr(0, size);
        el.innerHTML = text + endCharacter;
      }
    });
  };

  substrFunction(expertsComments, 100);
  substrFunction(expertsName, 22);
  substrFunction(humanListNameA, 45);
  substrFunction(mainSlideTextH, 60);
  substrFunction(mainNewsBigCardH, 60);
  substrFunction(mainNewsLeftCardH, 40);
  substrFunction(mainNewsSmallCardH, 45);
  substrFunction(mainleftLastnews, 65);
  substrFunction(smallCardMoreNews, 22);




  if ($(window).width() <= 420) {
    substrFunction(expertsComments, 50);
    substrFunction(humanListNameA, 25);
  }
  if ($(window).width() <= 375) {
    substrFunction(expertsComments, 40);
  }
  // substrFunction(smallCardMoreNews, 20);

  //SUBSTRTEXT

  if ($(window).height() <= 667) {
    d_btnCloserPopapVideoHub[0].style.top = "149px";
    let clickBtnSliderGirlPreventDefault = slidersGirl.find("li").children();
    clickBtnSliderGirlPreventDefault.on("click", event => {
      event.preventDefault();
      event.target.disabled = true;
    });
  }

  if($('.d_popapListHuman').length){
    $(window).on("scroll", e => {
      let target = $(e.target);
      let scrolledPixels = target.scrollTop();
      if (scrolledPixels >= 108) {
        $(".d_popapListHuman")[0].style.top = "44px";
      } else {
        $(".d_popapListHuman")[0].style.top = "109px";
      }
    });
  }
  

  $(".d_slideFirst").on("click", e => {
    let target = $(e.target);

    let linkIframe = target.attr("data-srcVideo");
    let srcLink = $(".d_modal-video__height")
      .children()
      .attr("src", linkIframe);
  });
  $(".d_sliderLast__video").on("click", e => {
    let target = $(e.target);

    let linkIframe = target.attr("data-srcVideo");
    let srcLink = $(".d_modal-video__height")
      .children()
      .attr("src", linkIframe);
  });

  d_popapVideoHub.on("click", e => {
    if (e.target !== $(".d_modal-video__height")) {
      $(".d_popapVideo").addClass("d-none");
      let d_Iframe = $('.d_modal-video__height').find('iframe')
      d_Iframe.attr('src', '')
      $("main").removeClass("d_blur");
      // $('main').style.zIndex= '0';
      $(".d_popapVideo")[0].style.zIndex = "0";
      $("#masthead").removeClass("blurred");
      $("#colophon").removeClass("blurred");
    }
  });

  d_btnCloserPopapVideoHub.on("click", () => {
    $(".d_popapVideo").addClass("d-none");
    let d_Iframe = $('.d_modal-video__height').find('iframe')
    d_Iframe.attr('src', '')
    
    $("main").removeClass("d_blur");
    // $('main').style.zIndex= '0';
    $(".d_popapVideo")[0].style.zIndex = "0";
    $("#masthead").removeClass("blurred");
    $("#colophon").removeClass("blurred");
  });
  $(".d_sliderFirst__video_a").on("click", e => {
    e.preventDefault();
    $("main").addClass("d_blur");
    // $('main').style.zIndex= '100';
    $(".d_popapVideo")[0].style.zIndex = "200";
    let d_Iframe = $('.d_modal-video__height').find('iframe')
    d_Iframe.attr('src', '')
    $(".d_popapVideo").removeClass("d-none");
    $("#masthead").addClass("blurred");
    $("#colophon").addClass("blurred");
  });
  $(".d_sliderLast__video_a").on("click", e => {
    e.preventDefault();
    $("main").addClass("d_blur");
    // $('main').style.zIndex= '100';
    $(".d_popapVideo")[0].style.zIndex = "200";
    $(".d_popapVideo").removeClass("d-none");
    $("#masthead").addClass("blurred");
    $("#colophon").addClass("blurred");
  });

  popapListCloser.on("click", e => {
    $(".d_popapListHuman").addClass("d-n");
    $(".d_popapUlHuman").removeClass("active");
    $(".d_popapSliderImg__img").removeClass("active");
    let dataIdImg = $(".d_popapSliderImg__img");
    $("body").css("overflowY", "auto");
  });
  let copyDataImg = null;
  openPopapListBtnWoman.on("click", e => {
    let target = $(e.target);
    let link = target.attr("href");
    let content = $(link);

    content.addClass("active");
    $(window).scrollTop(0);
    $("body").css("overflowY", "hidden");
    $(".d_popapListHuman")[0].style.top = "108px";
    // console.log($(wi));

    $(".d_experts__h")[1].innerText = target.attr("data-btnText");
    $(".d_popapListHuman").removeClass("d-n");

    let listImg = $(".d_popapSliderImg").children();

    listImg.map((ind, elem) => {
      let activeElips = $(".d_human__img_girl__elips");

      let activeElip = activeElips.map((e, i) => {
        if ($(i).hasClass("active")) {
          return i;
        }
      });
      let activeUl = $(activeElip).attr("href");
      let contentUl = $(activeUl);
      if ($(elem).attr("data-id") == contentUl.attr("id")) {
        $(elem).addClass("active");
      }
    });

    // $(".d_popapSliderImg").slick({
    //   dots: false,
    //   arrows: true,
    //   slidesToShow: 1,
    //   slidesToScroll: 1,
    //   prevArrow: $(".d_popapSliderBtn__prev"),
    //   nextArrow: $(".d_popapSliderBtn__next ")
    // });
  });
  popapListNextbtn.on("click", e => {
    let slider = $(".d_popapSliderImg").children();
    let ulSliderList = $(".d_popapUlHuman");
    let indUl = null;

    const filteredList = slider.filter((i, e) => {
      return !$(e).hasClass("d-n");
    });
    const filteredListUl = ulSliderList.filter((i, e) => {
      return !$(e).hasClass("d-n");
    });

    $(filteredListUl).map((i, e) => {
      if ($(e).hasClass("active")) {
        if (i < filteredListUl.length - 1) {
          indUl = i += 1;
        } else {
          indUl = 0;
        }
      }
      $(e).removeClass("active");
    });
    $(filteredListUl[indUl]).addClass("active");

    let ind = null;
    $(filteredList).map((i, e) => {
      if ($(e).hasClass("active")) {
        if (i < filteredList.length - 1) {
          ind = i += 1;
        } else {
          ind = 0;
        }
      }

      $(e).removeClass("active");
    });
    let dataText = $(filteredList[ind]).attr("data-Text");

    $(".d_experts__h")[1].innerText = dataText;

    $(filteredList[ind]).addClass("active");
  });
  popapListPrevbtn.on("click", e => {
    let slider = $(".d_popapSliderImg").children();
    let ulSliderList = $(".d_popapUlHuman");
    let indUl = null;

    const filteredListUl = ulSliderList.filter((i, e) => {
      return !$(e).hasClass("d-n");
    });
    $(filteredListUl).map((i, e) => {
      if ($(e).hasClass("active")) {
        if (i > 0 && i <= filteredListUl.length - 1) {
          indUl = i = i - 1;
        } else if (i <= 0) {
          indUl = filteredListUl.length - 1;
        } else {
          indUl = 0;
        }
      }
      $(e).removeClass("active");
    });

    $(filteredListUl[indUl]).addClass("active");

    let ind = null;
    const filteredList = slider.filter((i, e) => {
      return !$(e).hasClass("d-n");

      // if($(e).attr('data-id') == 'Stomach'){
      //   console.log();

      // }
    });

    $(filteredList).map((i, e) => {
      if ($(e).hasClass("active")) {
        if (i > 0 && i <= filteredList.length - 1) {
          ind = i = i - 1;
        } else if (i <= 0) {
          ind = filteredList.length - 1;
        } else {
          console.log(1);
        }
      }
      $(e).removeClass("active");
    });

    $(filteredList[ind]).addClass("active");
    let dataText = $(filteredList[ind]).attr("data-Text");

    $(".d_experts__h")[1].innerText = dataText;
  });
  let newDataIdImg = null;

  openPopapListBtnMan.on("click", e => {
    let target = $(e.target);
    let link = target.attr("href");
    let content = $(link);
    content.addClass("active");
    $(window).scrollTop(0);
    $("body").css("overflowY", "hidden");
    $(".d_popapListHuman")[0].style.top = "108px";
    $(".d_experts__h")[1].innerText = target.attr("data-btnText");

    let dataIdImg = $(".d_popapSliderImg__img");

    $(".d_popapListHuman").removeClass("d-n");

    let listImg = $(".d_popapSliderImg").children();

    const filteredList = listImg.filter((i, e) => {
      return !$(e).hasClass("d-n");
    });

    filteredList.map((ind, elem) => {
      let activeElips = $(".d_human__img_man__elips");

      let activeElip = activeElips.map((e, i) => {
        if ($(i).hasClass("active")) {
          return i;
        }
      });
      let activeUl = $(activeElip).attr("href");

      let contentUl = $(activeUl);

      if ($(elem).attr("data-id") == contentUl.attr("id")) {
        $(elem).addClass("active");
      }
    });
  });

  /* Tabs */
  d_tabLink.on("click", e => {
    e.preventDefault();
    let target = $(e.target);
    let link = target.attr("href");

    let content = $(link);

    var active = $(".d_essentials-tab .active, .d_essentials-content .active ");

    active.removeClass("active");
    target.parent().addClass("active");
    content.addClass("active");
  });

  /* Tabs */
  let getImgHuman = id => {
    humanImgHeart.map((curValue, index) => {
      index.setAttribute("src", "");
      if (id == index.getAttribute("data-id")) {
        let dataSrc = index.getAttribute("data-srcTwo");
        index.setAttribute("src", dataSrc);
      }
    });
  };
  let findAttr = () => {
    massElipsColor.forEach(e => {
      if (e.classList.contains("active")) {
        let lol = $(e.getAttribute("href"));
        lol.addClass("active");
      }
    });
  };
  let findAttrMan = () => {
    massElipsColorMan.forEach(e => {
      if (e.classList.contains("active")) {
        let lol = $(e.getAttribute("href"));
        lol.addClass("active");
      }
    });
  };
  let switchFunc = id => {
    switch (id) {
      case "0":
        arrowHeart[0].style.marginTop = "-11px";
        arrowHeart[0].style.marginLeft = "-86px";
        arrowHeart[0].style.transform = "rotate(28deg)";
        arrowHeart[0].style.height = "77px";
        break;
      case "1":
        arrowHeart[0].style.marginTop = "48px";
        arrowHeart[0].style.marginLeft = "-61px";
        arrowHeart[0].style.transform = "rotate(1deg)";
        arrowHeart[0].style.height = "96px";
        break;
      case "2":
        arrowHeart[0].style.marginTop = "25px";
        arrowHeart[0].style.marginLeft = "-148px";
        arrowHeart[0].style.transform = "rotate(0deg)";
        arrowHeart[0].style.height = "172px";
        break;
      case "3":
        arrowHeart[0].style.marginTop = "72px";
        arrowHeart[0].style.marginLeft = "-41px";
        arrowHeart[0].style.transform = "rotate(-16deg)";
        arrowHeart[0].style.height = "110px";
        break;
      case "4":
        arrowHeart[0].style.marginTop = "60px";
        arrowHeart[0].style.marginLeft = "-89px";
        arrowHeart[0].style.transform = "rotate(-7deg)";
        arrowHeart[0].style.height = "139px";
        break;
      case "5":
        arrowHeart[0].style.marginTop = "63px";
        arrowHeart[0].style.marginLeft = "-122px";
        arrowHeart[0].style.transform = "rotate(-15deg)";
        arrowHeart[0].style.height = "187px";
        break;
      case "6":
        arrowHeart[0].style.marginTop = "79px";
        arrowHeart[0].style.marginLeft = "-184px";
        arrowHeart[0].style.transform = "rotate(-16deg)";
        arrowHeart[0].style.height = "301px";
        break;
      case "7":
        arrowHeart[0].style.marginTop = "89px";
        arrowHeart[0].style.marginLeft = "-149px";
        arrowHeart[0].style.transform = "rotate(-25deg)";
        arrowHeart[0].style.height = "285px";
    }
  };
  let switchFuncMan = id => {
    switch (id) {
      case "0":
        arrowHeartMan[0].style.marginTop = "-2px";
        arrowHeartMan[0].style.marginLeft = "-79px";
        arrowHeartMan[0].style.transform = "rotate(37deg)";
        arrowHeartMan[0].style.height = "70px";
        break;
      case "1":
        arrowHeartMan[0].style.marginTop = "52px";
        arrowHeartMan[0].style.marginLeft = "-82px";
        arrowHeartMan[0].style.transform = "rotate(-4deg)";
        arrowHeartMan[0].style.height = "117px";
        break;
      case "2":
        arrowHeartMan[0].style.marginTop = "42px";
        arrowHeartMan[0].style.marginLeft = "-147px";
        arrowHeartMan[0].style.transform = "rotate(5deg)";
        arrowHeartMan[0].style.height = "176px";
        break;
      case "3":
        arrowHeartMan[0].style.marginTop = "72px";
        arrowHeartMan[0].style.marginLeft = "-41px";
        arrowHeartMan[0].style.transform = "rotate(-9deg)";
        arrowHeartMan[0].style.height = "126px";
        break;
      case "4":
        arrowHeartMan[0].style.marginTop = "60px";
        arrowHeartMan[0].style.marginLeft = "-114px";
        arrowHeartMan[0].style.transform = "rotate(-11deg)";
        arrowHeartMan[0].style.height = "171px";
        break;

      case "5":
        arrowHeartMan[0].style.marginTop = "79px";
        arrowHeartMan[0].style.marginLeft = "-184px";
        arrowHeartMan[0].style.transform = "rotate(-18deg)";
        arrowHeartMan[0].style.height = "287px";
        break;
      case "6":
        arrowHeartMan[0].style.marginTop = "89px";
        arrowHeartMan[0].style.marginLeft = "-149px";
        arrowHeartMan[0].style.transform = "rotate(-27deg)";
        arrowHeartMan[0].style.height = "277px";
    }
  };

  // ELIPS COLOR AND WIDTH

  let massElipsColor = [];
  let massElipsColorMan = [];
  elipsYellow.map((e, target) => {
    massElipsColor.push(target);
  });
  elipsYellowMan.map((e, target) => {
    massElipsColorMan.push(target);
  });
  $(".d_human__list__h")[0].innerText = $(massElipsColor)[1].getAttribute(
    "data-Text"
  );

  // mouseover MOUSEOVER
  let dMobailDotsWoman = $(slidersGirl)
    .find(".slick-dots")
    .children();
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
    let attrYellowCircle = e.target.getAttribute("data-id");
    let dMobailDotsWomanBtn = $(dMobailDotsWoman[attrYellowCircle]).children();
    if (document.documentElement.clientWidth <= 577) {
      dMobailDotsWomanBtn.click();
    }
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
      $(".d_human__slidersMan").slick("unslick");
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
          arrows: false
        });
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
  let orangStroke = document.querySelector("#EllipseOrangStroke");
  let btnBackToTop = document.querySelector(".d_backToTop");
  // let funcBackToTop = function() {
  //   if (scrollTop >= 200) {
  //     btnBackToTop.classList.remove("d-n");
  //     targetTop = scrollTop + $(window).height();
  //   } else {
  //     btnBackToTop.classList.add("d-n");
  //     targetTop = scrollTop;
  //   }

  //   let BodyHeight = $("body").height();
  //   let resultProcentBody = (targetTop * 100) / BodyHeight + 100;

  //   let resultStokeOrange = (resultProcentBody * -251) / 100;
  //   orangStroke.style.strokeDashoffset = resultStokeOrange;
  // };
  $(btnBackToTop).on("click", e => {
    let target = $(e.target);

    $("html, body").animate(
      {
        scrollTop: $("html, body").offset().top
      },
      1000
    );
  });
  let trottled = func => {
    let isTrottle = false;
    return function() {
      if (isTrottle) return;
      else {
        let ctx = this;

        let args = arguments;

        func.apply(ctx, args);

        isTrottle = true;
        setInterval(() => {
          isTrottle = false;
        }, 100);
      }
    };
  };
  // let timer;

  // document.addEventListener(
  //   "scroll",
  //   trottled(e => {
    
     
  //     let target = $(e.target);
  //     let targetTop = null;
  //     let scrollTop = $(document).scrollTop();
  //     if (timer) {
  //       clearTimeout(timer);
  //     }
  //     timer = setTimeout(function() {
  //       btnBackToTop.classList.add("d-n");
  //     }, 1000);

  //     if (scrollTop >= 200) {
  //       btnBackToTop.classList.remove("d-n");
  //       targetTop = scrollTop + $(window).height();
     

  //     } else {
  //       btnBackToTop.classList.add("d-n");
  //       targetTop = scrollTop;
  //     }

  //     let BodyHeight = $(document).height();
  //     let resultProcentBody = (targetTop * 100) / BodyHeight + 100;

  //     let resultStokeOrange = (resultProcentBody * -251) / 100;
  //     orangStroke.style.strokeDashoffset = resultStokeOrange;

  //     if ($(document).scrollTop() == ($(document).height() - $(window).height()) ||
  //     $(document).scrollTop() > ($(document).height() - $(window).height())
  //     ) {
  //       btnBackToTop.classList.remove("d-n");
  //       clearTimeout(timer); 
  //     }
  //   })
  // );
});
