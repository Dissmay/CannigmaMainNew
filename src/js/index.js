$(function() {
  // SLIDERS
  $(".d_slideBlock").slick({
    dots: true,
    arrows: false
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

  $(".d_slideWrap").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
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

  popapListCloser.on("click", e => {
    $(".d_popapListHuman").addClass("d-n");
    $(".d_popapUlHuman").removeClass("active");
    $(".d_popapSliderImg__img").removeClass("active");
    let dataIdImg = $(".d_popapSliderImg__img");
  });
  let copyDataImg = null;
  openPopapListBtnWoman.on("click", e => {
    let target = $(e.target);
    let link = target.attr("href");
    let content = $(link);
    content.addClass("active");

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
  });
  let newDataIdImg = null;

  openPopapListBtnMan.on("click", e => {
    let target = $(e.target);
    let link = target.attr("href");
    let content = $(link);
    content.addClass("active");

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
        arrowHeart[0].style.marginTop = "-31px";
        arrowHeart[0].style.marginLeft = "-102px";
        arrowHeart[0].style.transform = "rotate(37deg)";
        arrowHeart[0].style.height = "90px";
        break;
      case "1":
        arrowHeart[0].style.marginTop = "40px";
        arrowHeart[0].style.marginLeft = "-100px";
        arrowHeart[0].style.transform = "rotate(1deg)";
        arrowHeart[0].style.height = "140px";
        break;
      case "2":
        arrowHeart[0].style.marginTop = "25px";
        arrowHeart[0].style.marginLeft = "-148px";
        arrowHeart[0].style.transform = "rotate(9deg)";
        arrowHeart[0].style.height = "172px";
        break;
      case "3":
        arrowHeart[0].style.marginTop = "72px";
        arrowHeart[0].style.marginLeft = "-41px";
        arrowHeart[0].style.transform = "rotate(-14deg)";
        arrowHeart[0].style.height = "107px";
        break;
      case "4":
        arrowHeart[0].style.marginTop = "60px";
        arrowHeart[0].style.marginLeft = "-114px";
        arrowHeart[0].style.transform = "rotate(-7deg)";
        arrowHeart[0].style.height = "171px";
        break;
      case "5":
        arrowHeart[0].style.marginTop = "79px";
        arrowHeart[0].style.marginLeft = "-184px";
        arrowHeart[0].style.transform = "rotate(-16deg)";
        arrowHeart[0].style.height = "287px";
        break;
      case "6":
        arrowHeart[0].style.marginTop = "89px";
        arrowHeart[0].style.marginLeft = "-149px";
        arrowHeart[0].style.transform = "rotate(-18deg)";
        arrowHeart[0].style.height = "277px";
    }
  };
  let switchFuncMan = id => {
    switch (id) {
      case "0":
        arrowHeartMan[0].style.marginTop = "-31px";
        arrowHeartMan[0].style.marginLeft = "-102px";
        arrowHeartMan[0].style.transform = "rotate(37deg)";
        arrowHeartMan[0].style.height = "90px";
        break;
      case "1":
        arrowHeartMan[0].style.marginTop = "40px";
        arrowHeartMan[0].style.marginLeft = "-100px";
        arrowHeartMan[0].style.transform = "rotate(1deg)";
        arrowHeartMan[0].style.height = "140px";
        break;
      case "2":
        arrowHeartMan[0].style.marginTop = "25px";
        arrowHeartMan[0].style.marginLeft = "-148px";
        arrowHeartMan[0].style.transform = "rotate(9deg)";
        arrowHeartMan[0].style.height = "172px";
        break;
      case "3":
        arrowHeartMan[0].style.marginTop = "72px";
        arrowHeartMan[0].style.marginLeft = "-41px";
        arrowHeartMan[0].style.transform = "rotate(-14deg)";
        arrowHeartMan[0].style.height = "107px";
        break;

      case "4":
        arrowHeartMan[0].style.marginTop = "79px";
        arrowHeartMan[0].style.marginLeft = "-184px";
        arrowHeartMan[0].style.transform = "rotate(-16deg)";
        arrowHeartMan[0].style.height = "287px";
        break;
      case "5":
        arrowHeartMan[0].style.marginTop = "89px";
        arrowHeartMan[0].style.marginLeft = "-149px";
        arrowHeartMan[0].style.transform = "rotate(-18deg)";
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
  $('.d_human__list__h')[0].innerText = $(massElipsColor)[1].getAttribute('data-Text')
  
  // mouseover MOUSEOVER
  let dMobailDotsWoman = $(slidersGirl)
    .find(".slick-dots")
    .children();
  elipsYellow.on("mouseover", e => {
    e.preventDefault();
    let target = $(e.target);
    arrowHeartMan[0].style.opacity = "0";
    arrowHeart[0].style.opacity = "1";
    console.log(target[0].getAttribute('data-Text'));
    
     $('.d_human__list__h')[0].innerText = target[0].getAttribute('data-Text')
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
    console.log(target[0].getAttribute('data-Text'));
    
    $('.d_human__list__h')[0].innerText = target[0].getAttribute('data-Text')
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
      
       $('.d_human__list__h')[0].innerText = $(curValue)[0].getAttribute('data-Text')
      }
      if (dataId >= array.length) {
        massElipsColor[0].classList.add("active");
        $('.d_human__list__h')[0].innerText = massElipsColor[0].getAttribute('data-Text')
       
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
        $('.d_human__list__h')[0].innerText = $(curValue)[0].getAttribute('data-Text')
      }
      if (dataId >= array.length) {
        massElipsColorMan[0].classList.add("active");
        $('.d_human__list__h')[0].innerText = massElipsColorMan[0].getAttribute('data-Text')
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
        $('.d_human__list__h')[0].innerText = $(curValue)[0].getAttribute('data-Text')
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
        $('.d_human__list__h')[0].innerText = $(curValue)[0].getAttribute('data-Text')
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
        let activeElips = document.querySelector('.d_human__img_girl__elips.active');
        getImgHuman($(activeElips)[0].getAttribute('data-id'));
        $('.d_human__list__h')[0].innerText = $(activeElips)[0].getAttribute('data-Text')

        
        console.log();
        
        arrowHeartMan[0].style.opacity = "0";
        arrowHeart[0].style.opacity = "1";
        let dnblockUl = $(".d_popapUlHuman");
        $(dnblockUl[3]).removeClass("d-n");
        let dnblockImg = $(".d_popapSliderImg__img");
        $(dnblockImg[3]).removeClass("d-n");
      }
      if (e.parentNode.getAttribute("id") == "blockMan") {
        
        findAttrMan();
        let activeElipsTwo = document.querySelector('.d_human__img_man__elips.active');
        
        
        getImgHuman($(activeElipsTwo)[0].getAttribute('data-id'));
        $('.d_human__list__h')[0].innerText = $(activeElipsTwo)[0].getAttribute('data-Text')
        
       
        arrowHeart[0].style.opacity = "0";
        arrowHeartMan[0].style.opacity = "1";
        let dnblockUl = $(".d_popapUlHuman");
        $(dnblockUl[3]).addClass("d-n");
        let dnblockImg = $(".d_popapSliderImg__img");
        $(dnblockImg[3]).addClass("d-n");
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
});
