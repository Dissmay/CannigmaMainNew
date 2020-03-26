export default function() {
    const expertsComments = document.querySelectorAll(
        ".d_experts__sliderExpert_p"
      );
      const expertsName = document.querySelectorAll(".d_experts__sliderExpert_h");
      const humanListNameA = document.querySelectorAll(".d_news__h");
      const mainSlideTextH = document.querySelectorAll(".d_slide__text_h");
      const mainNewsBigCardH = document.querySelectorAll(".d_moreNews__bigCard_h");
      const mainNewsLeftCardH = document.querySelectorAll(".d_moreNews__card_h");
      const mainNewsSmallCardH = document.querySelectorAll(
        ".d_moreNews__smallCard_h"
      );
      const mainleftLastnews = document.querySelectorAll(".d_paddingRight");
      const smallCardMoreNews = document.querySelectorAll(
        ".d_moreNews__smallCard_p"
      );
      const d_sliderFirstTextH = document.querySelectorAll(
        ".d_sliderFirst__text_h"
      );
      const d_sliderLastVideoH = document.querySelectorAll(
        ".d_sliderLast__video_hA"
      );

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
  
  if ($(window).width() >= 767) {
    substrFunction(expertsComments, 100);
  }
  substrFunction(expertsName, 22);
  substrFunction(humanListNameA, 37);
  substrFunction(mainSlideTextH, 60);
  substrFunction(mainNewsBigCardH, 67);
  substrFunction(mainNewsLeftCardH, 40);
  substrFunction(mainNewsSmallCardH, 45);
  substrFunction(mainleftLastnews, 50);
  // substrFunction(smallCardMoreNews, 42);
  substrFunction(d_sliderFirstTextH, 60);
  substrFunction(d_sliderLastVideoH, 60);

  if ($(window).width() <= 375) {
    // substrFunction(expertsComments, 40);
    substrFunction(humanListNameA, 33);
  }
  if ($(window).width() <= 458) {
    substrFunction(humanListNameA, 33);
  }
  if ($(window).width() <= 420) {
    // substrFunction(expertsComments, 50);
    substrFunction(humanListNameA, 33);
  }
  console.log(1);

}
