!function(t){var e={};function a(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,a),i.l=!0,i.exports}a.m=t,a.c=e,a.d=function(t,e,r){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)a.d(r,i,function(e){return t[e]}.bind(null,i));return r},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="js/",a(a.s=0)}([function(t,e){$(function(){$(".d_slideBlock").slick({dots:!0,arrows:!1,autoplay:!0,autoplaySpeed:6e3}),$(".d_human__slidersGirl").on("init",function(t,e){$(t.target).find("li")[1].click()}),$(".d_human__slidersMan").on("init",function(t,e){$(t.target).find("li")[1].click()}),$(".d_slideWrap").slick({slidesToShow:1,slidesToScroll:1,arrows:!0,speed:3e3,autoplay:!0,autoplaySpeed:6e3,asNavFor:".d_slideWrapLast",prevArrow:$(".d_slideFirst__prev"),nextArrow:$(".d_slideFirst__next"),dots:!0,responsive:[{breakpoint:800,settings:{slidesToShow:1,slidesToScroll:1,dots:!1}}]}),$(".d_slideWrapLast").slick({slidesToShow:2,slidesToScroll:1,asNavFor:".d_slideWrap",dots:!0,speed:3e3,centerMode:!1,variableWidth:!0,focusOnSelect:!1,prevArrow:$(".d_slideLast__prev"),nextArrow:$(".d_slideLast__next"),responsive:[{breakpoint:800,settings:{slidesToShow:1,slidesToScroll:1}}]}),$(".d_educationCenter__slider").slick({slidesToShow:4,slidesToScroll:1,arrows:!0,prevArrow:$(".d_educationCenter__slider_prev"),nextArrow:$(".d_educationCenter__slider_next"),responsive:[{breakpoint:770,settings:"unslick"}]}),$(".d_experts__sliders").slick({slidesToShow:2,slidesToScroll:1,arrows:!0,dots:!0,prevArrow:$(".d_experts__prev"),nextArrow:$(".d_experts__next"),responsive:[{breakpoint:769,settings:{slidesToShow:1}}]}),$(".d_human__slidersGirl").slick({slidesToShow:1,slidesToScroll:1,dots:!0,arrows:!1}),$(window).scrollTop(0);var t=$(".d_essentials__tabLink"),e=$(".d_human__img_girl__arrowHeart"),a=$(".d_human__img_girl__arrowHeart_man"),r=$(".d_human__img_girl__heart"),i=($(".d_human__img_girl"),$(".d_human__list_girl__next")),n=$(".d_human__list_girl__prev"),s=$(".d_human__list_man__next"),l=$(".d_human__list_man__prev"),o=$(".d_human__list_ul"),d=$(".d_human__img_girl__elips"),c=$(".d_human__img_man__elips"),_=$(".d_human__img_changeGender__img"),p=$(".d_human__list_girl__btns"),u=$(".d_human__list_man__btns"),m=$(".d_human__slidersGirl"),g=$(".d_human__slidersMan"),h=$(".d_human__sliderMan_btn"),v=$(".d_human__sliderGirl_btn"),f=$(".d_popapListHuman__closerBtn"),y=$(".d_popapSliderBtn__prev"),b=$(".d_popapSliderBtn__next"),x=$(".d_popapVideo"),T=$(".d_popapVideo__closer"),A=document.querySelectorAll(".d_experts__sliderExpert_p"),C=document.querySelectorAll(".d_experts__sliderExpert_h"),L=document.querySelectorAll(".d_news__h"),k=document.querySelectorAll(".d_slide__text_h"),S=document.querySelectorAll(".d_moreNews__bigCard_h"),w=document.querySelectorAll(".d_moreNews__card_h"),E=document.querySelectorAll(".d_moreNews__smallCard_h"),H=document.querySelectorAll(".d_paddingRight"),N=document.querySelectorAll(".d_moreNews__smallCard_p"),M=document.querySelectorAll(".d_sliderFirst__text_h"),q=document.querySelectorAll(".d_sliderLast__video_hA"),D=function(t,e){t.forEach(function(t){var a=t.innerHTML;t.innerHTML.length>e&&(a=a.substr(0,e),t.innerHTML=a+"...")})};(D(A,100),D(C,22),D(L,37),D(k,60),D(S,70),D(w,40),D(E,45),D(H,50),D(N,42),D(M,60),D(q,60),$(window).width()<=420&&(D(A,50),D(L,25)),$(window).width()<=375&&D(A,40),$(window).height()<=667)&&(T[0].style.top="149px",m.find("li").children().on("click",function(t){t.preventDefault(),t.target.disabled=!0}));$(".d_popapListHuman").length&&$(window).on("scroll",function(t){var e=$(t.target).scrollTop();$(".d_popapListHuman")[0].style.top=e>=108?"44px":"109px"}),$(".d_slideFirst").on("click",function(t){var e=$(t.target).attr("data-srcVideo");$(".d_modal-video__height").children().attr("src",e)}),$(".d_sliderLast__video").on("click",function(t){var e=$(t.target).attr("data-srcVideo");$(".d_modal-video__height").children().attr("src",e)}),x.on("click",function(t){t.target!==$(".d_modal-video__height")&&($(".d_popapVideo").addClass("d-none"),$(".d_modal-video__height").find("iframe").attr("src",""),$("main").removeClass("d_blur"),$(".d_popapVideo")[0].style.zIndex="0",$("#masthead").removeClass("blurred"),$("#colophon").removeClass("blurred"))}),T.on("click",function(){$(".d_popapVideo").addClass("d-none"),$(".d_modal-video__height").find("iframe").attr("src",""),$("main").removeClass("d_blur"),$(".d_popapVideo")[0].style.zIndex="0",$("#masthead").removeClass("blurred"),$("#colophon").removeClass("blurred")}),$(".d_sliderFirst__video_a").on("click",function(t){t.preventDefault(),$("main").addClass("d_blur"),$(".d_popapVideo")[0].style.zIndex="200",$(".d_modal-video__height").find("iframe").attr("src",""),$(".d_popapVideo").removeClass("d-none"),$("#masthead").addClass("blurred"),$("#colophon").addClass("blurred")}),$(".d_sliderLast__video_a").on("click",function(t){t.preventDefault(),$("main").addClass("d_blur"),$(".d_popapVideo")[0].style.zIndex="200",$(".d_popapVideo").removeClass("d-none"),$("#masthead").addClass("blurred"),$("#colophon").addClass("blurred")}),f.on("click",function(t){$(".d_popapListHuman").addClass("d-n"),$(".d_popapUlHuman").removeClass("active"),$(".d_popapSliderImg__img").removeClass("active");$(".d_popapSliderImg__img");$("body").css("overflowY","auto")});v.on("click",function(t){var e=$(t.target),a=e.attr("href");$(a).addClass("active"),$(window).scrollTop(0),$("body").css("overflowY","hidden"),$(".d_popapListHuman")[0].style.top="108px",$(".d_experts__h")[1].innerText=e.attr("data-btnText"),$(".d_popapListHuman").removeClass("d-n"),$(".d_popapSliderImg").children().map(function(t,e){var a=$(".d_human__img_girl__elips").map(function(t,e){if($(e).hasClass("active"))return e}),r=$(a).attr("href"),i=$(r);$(e).attr("data-id")==i.attr("id")&&$(e).addClass("active")})}),b.on("click",function(t){var e=$(".d_popapSliderImg").children(),a=$(".d_popapUlHuman"),r=null,i=e.filter(function(t,e){return!$(e).hasClass("d-n")}),n=a.filter(function(t,e){return!$(e).hasClass("d-n")});$(n).map(function(t,e){$(e).hasClass("active")&&(r=t<n.length-1?t+=1:0),$(e).removeClass("active")}),$(n[r]).addClass("active");var s=null;$(i).map(function(t,e){$(e).hasClass("active")&&(s=t<i.length-1?t+=1:0),$(e).removeClass("active")});var l=$(i[s]).attr("data-Text");$(".d_experts__h")[1].innerText=l,$(i[s]).addClass("active")}),y.on("click",function(t){var e=$(".d_popapSliderImg").children(),a=$(".d_popapUlHuman"),r=null,i=a.filter(function(t,e){return!$(e).hasClass("d-n")});$(i).map(function(t,e){$(e).hasClass("active")&&(r=t>0&&t<=i.length-1?t-=1:t<=0?i.length-1:0),$(e).removeClass("active")}),$(i[r]).addClass("active");var n=null,s=e.filter(function(t,e){return!$(e).hasClass("d-n")});$(s).map(function(t,e){$(e).hasClass("active")&&(t>0&&t<=s.length-1?n=t-=1:t<=0?n=s.length-1:console.log(1)),$(e).removeClass("active")}),$(s[n]).addClass("active");var l=$(s[n]).attr("data-Text");$(".d_experts__h")[1].innerText=l});h.on("click",function(t){var e=$(t.target),a=e.attr("href");$(a).addClass("active"),$(window).scrollTop(0),$("body").css("overflowY","hidden"),$(".d_popapListHuman")[0].style.top="108px",$(".d_experts__h")[1].innerText=e.attr("data-btnText");$(".d_popapSliderImg__img");$(".d_popapListHuman").removeClass("d-n"),$(".d_popapSliderImg").children().filter(function(t,e){return!$(e).hasClass("d-n")}).map(function(t,e){var a=$(".d_human__img_man__elips").map(function(t,e){if($(e).hasClass("active"))return e}),r=$(a).attr("href"),i=$(r);$(e).attr("data-id")==i.attr("id")&&$(e).addClass("active")})}),t.on("click",function(t){t.preventDefault();var e=$(t.target),a=e.attr("href"),r=$(a);$(".d_essentials-tab .active, .d_essentials-content .active ").removeClass("active"),e.parent().addClass("active"),r.addClass("active")});var I=function(t){r.map(function(e,a){if(a.setAttribute("src",""),t==a.getAttribute("data-id")){var r=a.getAttribute("data-srcTwo");a.setAttribute("src",r)}})},V=function(){W.forEach(function(t){t.classList.contains("active")&&$(t.getAttribute("href")).addClass("active")})},G=function(){F.forEach(function(t){t.classList.contains("active")&&$(t.getAttribute("href")).addClass("active")})},O=function(t){switch(t){case"0":e[0].style.marginTop="-11px",e[0].style.marginLeft="-86px",e[0].style.transform="rotate(28deg)",e[0].style.height="77px";break;case"1":e[0].style.marginTop="48px",e[0].style.marginLeft="-61px",e[0].style.transform="rotate(1deg)",e[0].style.height="96px";break;case"2":e[0].style.marginTop="25px",e[0].style.marginLeft="-148px",e[0].style.transform="rotate(0deg)",e[0].style.height="172px";break;case"3":e[0].style.marginTop="72px",e[0].style.marginLeft="-41px",e[0].style.transform="rotate(-16deg)",e[0].style.height="110px";break;case"4":e[0].style.marginTop="60px",e[0].style.marginLeft="-89px",e[0].style.transform="rotate(-7deg)",e[0].style.height="139px";break;case"5":e[0].style.marginTop="63px",e[0].style.marginLeft="-122px",e[0].style.transform="rotate(-15deg)",e[0].style.height="187px";break;case"6":e[0].style.marginTop="79px",e[0].style.marginLeft="-184px",e[0].style.transform="rotate(-16deg)",e[0].style.height="301px";break;case"7":e[0].style.marginTop="89px",e[0].style.marginLeft="-149px",e[0].style.transform="rotate(-25deg)",e[0].style.height="285px"}},j=function(t){switch(t){case"0":a[0].style.marginTop="-2px",a[0].style.marginLeft="-79px",a[0].style.transform="rotate(37deg)",a[0].style.height="70px";break;case"1":a[0].style.marginTop="52px",a[0].style.marginLeft="-82px",a[0].style.transform="rotate(-4deg)",a[0].style.height="117px";break;case"2":a[0].style.marginTop="42px",a[0].style.marginLeft="-147px",a[0].style.transform="rotate(5deg)",a[0].style.height="176px";break;case"3":a[0].style.marginTop="72px",a[0].style.marginLeft="-41px",a[0].style.transform="rotate(-9deg)",a[0].style.height="126px";break;case"4":a[0].style.marginTop="60px",a[0].style.marginLeft="-114px",a[0].style.transform="rotate(-11deg)",a[0].style.height="171px";break;case"5":a[0].style.marginTop="79px",a[0].style.marginLeft="-184px",a[0].style.transform="rotate(-18deg)",a[0].style.height="287px";break;case"6":a[0].style.marginTop="89px",a[0].style.marginLeft="-149px",a[0].style.transform="rotate(-27deg)",a[0].style.height="277px"}},W=[],F=[];d.map(function(t,e){W.push(e)}),c.map(function(t,e){F.push(e)}),$(".d_human__list__h")[0].innerText=$(W)[1].getAttribute("data-Text");var P=$(m).find(".slick-dots").children();d.on("mouseover",function(t){t.preventDefault();var r=$(t.target);a[0].style.opacity="0",e[0].style.opacity="1",$(".d_human__list__h")[0].innerText=r[0].getAttribute("data-Text"),o.map(function(t,e){e.classList.remove("active")}),I(t.target.getAttribute("data-id")),d.map(function(t,e){e.classList.remove("active")}),"blockGirl"==t.target.parentElement.getAttribute("id")&&O(t.target.getAttribute("data-id")),"blockMan"==t.target.parentElement.getAttribute("id")&&j(t.target.getAttribute("data-id")),r.addClass("active"),V();var i=t.target.getAttribute("data-id"),n=$(P[i]).children();document.documentElement.clientWidth<=577&&n.click()}),c.on("mouseover",function(t){t.preventDefault();var r=$(t.target);a[0].style.opacity="1",e[0].style.opacity="0",$(".d_human__list__h")[0].innerText=r[0].getAttribute("data-Text"),Array.prototype.forEach.call(o,function(t){t.classList.remove("active")}),I(t.target.getAttribute("data-id")),Array.prototype.forEach.call(c,function(t){t.classList.remove("active")}),"blockGirl"==t.target.parentElement.getAttribute("id")&&O(t.target.getAttribute("data-id")),"blockMan"==t.target.parentElement.getAttribute("id")&&j(t.target.getAttribute("data-id")),r.addClass("active"),G();var i=t.target.getAttribute("data-id"),n=$(U[i]).children();document.documentElement.clientWidth<=577&&n.click()}),d.on("click",function(t){t.preventDefault()}),c.on("click",function(t){t.preventDefault()}),i.on("click",function(t){t.preventDefault(),e[0].style.opacity="1",Array.prototype.forEach.call(o,function(t){t.classList.remove("active")});var a=null;W.forEach(function(t,e){t.classList.contains("active")&&(a=t)});var r=String(Number(a.getAttribute("data-id"))+1);W.forEach(function(t,e,a){t.classList.remove("active"),e==r&&(t.classList.add("active"),$(".d_human__list__h")[0].innerText=$(t)[0].getAttribute("data-Text")),r>=a.length&&(W[0].classList.add("active"),$(".d_human__list__h")[0].innerText=W[0].getAttribute("data-Text"))});var i=String(Number(a.getAttribute("data-id"))+1)>=W.length?"0":String(Number(a.getAttribute("data-id"))+1);O(i),I(i),V()}),s.on("click",function(t){t.preventDefault(),a[0].style.opacity="1",Array.prototype.forEach.call(o,function(t){t.classList.remove("active")});var e=null;F.forEach(function(t,a){t.classList.contains("active")&&(e=t)});var r=String(Number(e.getAttribute("data-id"))+1);F.forEach(function(t,e,a){t.classList.remove("active"),e==r&&(t.classList.add("active"),$(".d_human__list__h")[0].innerText=$(t)[0].getAttribute("data-Text")),r>=a.length&&(F[0].classList.add("active"),$(".d_human__list__h")[0].innerText=F[0].getAttribute("data-Text"))});var i=String(Number(e.getAttribute("data-id"))+1)>=F.length?"0":String(Number(e.getAttribute("data-id"))+1);j(i),I(i),G()}),n.on("click",function(t){t.preventDefault(),Array.prototype.forEach.call(o,function(t){t.classList.remove("active")}),a[0].style.opacity="1",e[0].style.opacity="1";var r=null;W.forEach(function(t,e){t.classList.contains("active")&&(r=t)});var i=String(Number(r.getAttribute("data-id"))-1)<0?String(W.length-1):String(Number(r.getAttribute("data-id"))-1);W.forEach(function(t,e){t.classList.remove("active"),e==i&&(t.classList.add("active"),$(".d_human__list__h")[0].innerText=$(t)[0].getAttribute("data-Text"))}),O(i),I(i),V()}),l.on("click",function(t){t.preventDefault(),Array.prototype.forEach.call(o,function(t){t.classList.remove("active")}),a[0].style.opacity="1",e[0].style.opacity="1";var r=null;F.forEach(function(t,e){t.classList.contains("active")&&(r=t)});var i=String(Number(r.getAttribute("data-id"))-1)<0?String(F.length-1):String(Number(r.getAttribute("data-id"))-1);F.forEach(function(t,e){t.classList.remove("active"),e==i&&(t.classList.add("active"),$(".d_human__list__h")[0].innerText=$(t)[0].getAttribute("data-Text"))}),j(i),I(i),G()});var U=null;_.on("click",function(t){t.preventDefault();var r=$(t.target),i=r.parent().attr("href"),n=$(i),s=$(".d_human__img"),l=s.children();Array.prototype.forEach.call(l,function(t,e){t.classList.remove("active")}),Array.prototype.forEach.call(o,function(t){t.classList.remove("active")});var d=r.parent().parent().attr("class");$(".".concat(d," .active")).removeClass("active"),r.addClass("active"),s.removeClass("active");var c=n.children();if(Array.prototype.forEach.call($(c),function(t,r){if("blockGirl"==t.parentNode.getAttribute("id")){V();var i=document.querySelector(".d_human__img_girl__elips.active");I($(i)[0].getAttribute("data-id")),$(".d_human__list__h")[0].innerText=$(i)[0].getAttribute("data-Text"),a[0].style.opacity="0",e[0].style.opacity="1";var n=$(".d_popapUlHuman");$(n[4]).removeClass("d-n");var s=$(".d_popapSliderImg__img");$(s[4]).removeClass("d-n")}if("blockMan"==t.parentNode.getAttribute("id")){G();var l=document.querySelector(".d_human__img_man__elips.active");I($(l)[0].getAttribute("data-id")),$(".d_human__list__h")[0].innerText=$(l)[0].getAttribute("data-Text"),e[0].style.opacity="0",a[0].style.opacity="1";var o=$(".d_popapUlHuman");$(o[4]).addClass("d-n");var d=$(".d_popapSliderImg__img");$(d[4]).addClass("d-n")}}),n.addClass("active"),"blockGirl"==n[0].getAttribute("id"))V(),p[0].classList.add("active"),u[0].classList.remove("active"),$(m).addClass("active"),$(g).removeClass("active"),$(".d_human__slidersMan").slick("unslick");else{if(u[0].classList.add("active"),p[0].classList.remove("active"),$(g).addClass("active"),$(m).removeClass("active"),document.documentElement.clientWidth<=577)$(".d_human__slidersMan").slick({slidesToShow:1,slidesToScroll:1,dots:!0,arrows:!1}),g.find("li").children().on("click",function(t){t.preventDefault(),t.target.disabled=!0});U=$(g).find(".slick-dots").children()}}),$(".d_human__slidersGirl").on("afterChange",function(t,e,a,r){W.forEach(function(t){t.classList.remove("active")}),W[a].classList.add("active")}),$(".d_human__slidersMan").on("afterChange",function(t,e,a,r){F.forEach(function(t){t.classList.remove("active")}),F[a].classList.add("active")});document.querySelector("#EllipseOrangStroke");var z=document.querySelector(".d_backToTop");$(z).on("click",function(t){$(t.target);$("html, body").animate({scrollTop:$("html, body").offset().top},1e3)})})}]);