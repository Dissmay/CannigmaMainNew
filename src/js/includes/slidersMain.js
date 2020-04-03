export default function(){
   
    $(".d_slideBlock").slick({
        dots: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 6000
      });
      $(".d_slideWrap").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        speed: 3000,
        autoplay: true,
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
        slidesToShow: 2,
        slidesToScroll: 1,
      
        asNavFor: ".d_slideWrap",
        dots: true,
        speed: 3000,
      
        centerMode: false,
        variableWidth: true,
        focusOnSelect: false,
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
      
      
}

