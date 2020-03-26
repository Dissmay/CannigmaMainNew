import { massElipsColor } from "../elipsContext/massElipsColor";

export default function() {
  massElipsColor.forEach(e => {
    if (e.classList.contains("active")) {
      let lol = $(e.getAttribute("href"));
      lol.addClass("active");
    }
  });
}
