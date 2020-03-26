export default function(id) {
  let humanImgHeart = $(".d_human__img_girl__heart");
  humanImgHeart.map((curValue, index) => {
    index.setAttribute("src", "");
    if (id == index.getAttribute("data-id")) {
      let dataSrc = index.getAttribute("data-srcTwo");
      index.setAttribute("src", dataSrc);
    }
  });
}
