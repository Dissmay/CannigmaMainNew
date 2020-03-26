import { massElipsColorMan } from "../elipsContext/massElipsColor";
export default function() {
  massElipsColorMan.forEach(e => {
    if (e.classList.contains("active")) {
      let lol = $(e.getAttribute("href"));
      lol.addClass("active");
    }
  });
}
