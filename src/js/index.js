import substrMain from "../js/includes/substrMain";
import sliderMain from "../js/includes/slidersMain";
import humanBlock from "../js/includes/humanBlock";
$(function() {
    let kso = document.querySelector('.kso');
    kso.addEventListener('click', async e =>{
      console.log(2);
      
    })
  /* Tabs */
  let d_tabLink = $(".d_essentials__tabLink");
  /* Tabs */
  let d_popapVideoHub = $(".d_popapVideo");
  let d_btnCloserPopapVideoHub = $(".d_popapVideo__closer");
  let openPopapListBtnMan = $(".d_human__sliderMan_btn");
  let openPopapListBtnWoman = $(".d_human__sliderGirl_btn");
  let popapListCloser = $(".d_popapListHuman__closerBtn");
  let popapListPrevbtn = $(".d_popapSliderBtn__prev");
  let popapListNextbtn = $(".d_popapSliderBtn__next");
  let autoClickSliderMobail = $(".d_headbtn");

  if ($(window).width() <= 520) {
    if ($(".d_human").length) {
      $(".d_human__slidersGirl").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false
      });
    }
    // autoClickSliderMobail[0].click();
  }

  //INIT слайдера
  // $(".d_human__slidersGirl").on("init", function(event, slick) {
  //   $(event.target)
  //     .find("li")[1]
  //     .click();
  // });
  // $(".d_human__slidersMan").on("init", function(event, slick) {
  //   $(event.target)
  //     .find("li")[1]
  //     .click();
  // });
  //INIT слайдера

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
      let d_Iframe = $(".d_modal-video__height").find("iframe");
      d_Iframe.attr("src", "");
      $("main").removeClass("d_blur");
      // $('main').style.zIndex= '0';
      $(".d_popapVideo")[0].style.zIndex = "0";
      $("#masthead").removeClass("blurred");
      $("#colophon").removeClass("blurred");
    }
  });

  d_btnCloserPopapVideoHub.on("click", () => {
    $(".d_popapVideo").addClass("d-none");
    let d_Iframe = $(".d_modal-video__height").find("iframe");
    d_Iframe.attr("src", "");

    $("main").removeClass("d_blur");
    // $('main').style.zIndex= '0';
    $(".d_popapVideo")[0].style.zIndex = "0";
    $("#masthead").removeClass("blurred");
    $("#colophon").removeClass("blurred");
  });
  if ($(".d_sliderFirst__video_a").length > 0) {
    $(".d_sliderFirst__video_a").on("click", e => {
      e.preventDefault();
      $("main").addClass("d_blur");
      // $('main').style.zIndex= '100';
      $(".d_popapVideo")[0].style.zIndex = "200";
      let d_Iframe = $(".d_modal-video__height").find("iframe");
      d_Iframe.attr("src", "");
      $(".d_popapVideo").removeClass("d-none");
      $("#masthead").addClass("blurred");
      $("#colophon").addClass("blurred");
    });
  }

  if ($(".d_sliderLast__video_a").length > 0 ) {
    $(".d_sliderLast__video_a").on("click", e => {
      e.preventDefault();
      $("main").addClass("d_blur");
      // $('main').style.zIndex= '100';
      $(".d_popapVideo")[0].style.zIndex = "200";
      $(".d_popapVideo").removeClass("d-none");
      $("#masthead").addClass("blurred");
      $("#colophon").addClass("blurred");
    });
  }

  if ($(".d_hubPageSliderTwo__a").length > 0) {
    $(".d_hubPageSliderTwo__a").on("click", e => {
      e.preventDefault();
      $("main").addClass("d_blur");
      // $('main').style.zIndex= '100';
      $(".d_popapVideo")[0].style.zIndex = "200";
      let d_Iframe = $(".d_modal-video__height").find("iframe");
      d_Iframe.attr("src", "");
      $(".d_popapVideo").removeClass("d-none");
      $("#masthead").addClass("blurred");
      $("#colophon").addClass("blurred");
      let target = $(e.target);

      let linkIframe = target.attr("data-srcVideo");
      let srcLink = $(".d_modal-video__height")
        .children()
        .attr("src", linkIframe);
    });
  }

  if ($(".d_popapListHuman").length > 0) {
    $(window).on("scroll", e => {
      let target = $(e.target);
      let scrolledPixels = target.scrollTop();
      if (scrolledPixels >= 108) {
        $(".d_popapListHuman")[0].style.top = "58px";
      } else {
        $(".d_popapListHuman")[0].style.top = "109px";
      }
    });
  }

  let copyDataImg = null;

  let newDataIdImg = null;


  if ($(".d_human").length > 0) {
    $(window).scrollTop(0);
    sliderMain();
    substrMain();
    humanBlock();
    popapListCloser.on("click", e => {
      $(".d_popapListHuman").addClass("d-n");
      $(".d_popapUlHuman").removeClass("active");
      $(".d_popapSliderImg__img").removeClass("active");
      let dataIdImg = $(".d_popapSliderImg__img");
      $("body").css("overflowY", "auto");
    });
    openPopapListBtnWoman.on("click", e => {
      let target = $(e.target);
      let link = target.attr("href");
      let content = $(link);

      content.addClass("active");
      // $(window).scrollTop(0);
      $("body").css("overflowY", "hidden");
      // $(".d_popapListHuman")[0].style.top = "108px";
      // console.log($(wi));

      $(".d_popapDivTextH")[0].innerText = target.attr("data-btnText");
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

      $(".d_popapDivTextH")[0].innerText = dataText;

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

      $(".d_popapDivTextH")[0].innerText = dataText;
    });
    openPopapListBtnMan.on("click", e => {
      let target = $(e.target);
      let link = target.attr("href");
      let content = $(link);
      content.addClass("active");
      // $(window).scrollTop(0);
      $("body").css("overflowY", "hidden");
      // $(".d_popapListHuman")[0].style.top = "108px";
      $(".d_popapDivTextH")[0].innerText = target.attr("data-btnText");

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

      var active = $(
        ".d_essentials-tab .active, .d_essentials-content .active "
      );

      active.removeClass("active");
      target.parent().addClass("active");
      content.addClass("active");
    });
    /* Tabs */
  }

  // let orangStroke = document.querySelector("#EllipseOrangStroke");
  let btnBackToTop = document.querySelector(".d_backToTop");
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
});
