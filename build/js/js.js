!function(t){var e={};function a(i){if(e[i])return e[i].exports;var r=e[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=t,a.c=e,a.d=function(t,e,i){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(a.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)a.d(i,r,function(e){return t[e]}.bind(null,r));return i},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="js/",a(a.s=0)}([function(t,e){$((function(){$(".d_slideBlock").slick({dots:!0,arrows:!1,autoplaySpeed:6e3}),$(window).scrollTop(0),$(".d_slideWrap").slick({slidesToShow:1,slidesToScroll:1,arrows:!0,speed:3e3,autoplay:!0,autoplaySpeed:6e3,asNavFor:".d_slideWrapLast",prevArrow:$(".d_slideFirst__prev"),nextArrow:$(".d_slideFirst__next"),dots:!0,responsive:[{breakpoint:800,settings:{slidesToShow:1,slidesToScroll:1,dots:!1}}]}),$(".d_slideWrapLast").slick({slidesToShow:2,slidesToScroll:1,asNavFor:".d_slideWrap",dots:!0,speed:3e3,centerMode:!1,variableWidth:!0,focusOnSelect:!1,prevArrow:$(".d_slideLast__prev"),nextArrow:$(".d_slideLast__next"),responsive:[{breakpoint:800,settings:{slidesToShow:1,slidesToScroll:1}}]}),$(".d_educationCenter__slider").slick({slidesToShow:4,slidesToScroll:1,arrows:!0,prevArrow:$(".d_educationCenter__slider_prev"),nextArrow:$(".d_educationCenter__slider_next"),responsive:[{breakpoint:770,settings:"unslick"}]}),$(".d_experts__sliders").slick({slidesToShow:2,slidesToScroll:1,arrows:!0,dots:!0,prevArrow:$(".d_experts__prev"),nextArrow:$(".d_experts__next"),responsive:[{breakpoint:769,settings:{slidesToShow:1}}]});var t=$(".d_essentials__tabLink"),e=$(".d_human__img_girl__arrowHeart"),a=$(".d_human__img_girl__arrowHeart_man"),i=$(".d_human__img_girl__heart"),r=$(".d_human__img_girl"),n=$(".d_human__list_girl__next"),s=$(".d_human__list_girl__prev"),l=$(".d_human__list_man__next"),d=$(".d_human__list_man__prev"),o=$(".d_human__list_ul"),c=$(".d_human__img_girl__elips"),_=$(".d_human__img_man__elips"),u=$(".d_human__img_changeGender__img"),p=$(".d_human__list_girl__btns"),m=$(".d_human__list_man__btns"),v=$(".d_human__slidersGirl"),h=$(".d_human__slidersMan"),f=$(".d_human__sliderMan_btn"),g=$(".d_human__sliderGirl_btn"),y=$(".d_popapListHuman__closerBtn"),b=$(".d_popapSliderBtn__prev"),x=$(".d_popapSliderBtn__next"),w=$(".d_popapVideo"),C=$(".d_popapVideo__closer"),T=($(".d_headbtn"),document.querySelectorAll(".d_popapUlHuman")),A=document.querySelectorAll(".d_experts__sliderExpert_p"),S=document.querySelectorAll(".d_experts__sliderExpert_h"),k=document.querySelectorAll(".d_news__h"),L=document.querySelectorAll(".d_slide__text_h"),E=document.querySelectorAll(".d_moreNews__bigCard_h"),H=document.querySelectorAll(".d_moreNews__card_h"),D=document.querySelectorAll(".d_moreNews__smallCard_h"),I=document.querySelectorAll(".d_paddingRight"),N=(document.querySelectorAll(".d_moreNews__smallCard_p"),document.querySelectorAll(".d_sliderFirst__text_h")),q=document.querySelectorAll(".d_sliderLast__video_hA"),M=function(t,e){t.forEach((function(t){var a=t.innerHTML;t.innerHTML.length>e&&(a=a.substr(0,e),t.innerHTML=a+"...")}))};$(window).width()>=767&&M(A,100),M(S,22),M(k,37),M(L,60),M(E,67),M(H,40),M(D,45),M(I,50),M(N,60),M(q,60),$(window).width()<=520&&$(".d_human__slidersGirl").slick({slidesToShow:1,slidesToScroll:1,dots:!0,autoplay:!0,autoplaySpeed:5e3,arrows:!1}),$(window).width()<=375&&M(k,33),$(window).width()<=458&&M(k,33),$(window).width()<=420&&M(k,33);var V=null;function G(){n.click()}($(window).width()>=768&&$(r[0]).hasClass("active")&&(clearInterval(V),V=setInterval((function(t){G()}),5e3)),$(window).height()<=667)&&(C[0].style.top="149px",v.find("li").children().on("click",(function(t){t.preventDefault(),t.target.disabled=!0})));(812==$(window).height()&&$(T).map((function(t,e){e.style.height="60vh"})),$(window).height()<=812)&&v.find("li").children().on("click",(function(t){t.preventDefault(),t.target.disabled=!0}));$(".d_popapListHuman").length&&$(window).on("scroll",(function(t){var e=$(t.target).scrollTop();$(".d_popapListHuman")[0].style.top=e>=108?"58px":"109px"})),$(".d_slideFirst").on("click",(function(t){var e=$(t.target).attr("data-srcVideo");$(".d_modal-video__height").children().attr("src",e)})),$(".d_sliderLast__video").on("click",(function(t){var e=$(t.target).attr("data-srcVideo");$(".d_modal-video__height").children().attr("src",e)})),w.on("click",(function(t){t.target!==$(".d_modal-video__height")&&($(".d_popapVideo").addClass("d-none"),$(".d_modal-video__height").find("iframe").attr("src",""),$("main").removeClass("d_blur"),$(".d_popapVideo")[0].style.zIndex="0",$("#masthead").removeClass("blurred"),$("#colophon").removeClass("blurred"))})),C.on("click",(function(){$(".d_popapVideo").addClass("d-none"),$(".d_modal-video__height").find("iframe").attr("src",""),$("main").removeClass("d_blur"),$(".d_popapVideo")[0].style.zIndex="0",$("#masthead").removeClass("blurred"),$("#colophon").removeClass("blurred")})),$(".d_sliderFirst__video_a").on("click",(function(t){t.preventDefault(),$("main").addClass("d_blur"),$(".d_popapVideo")[0].style.zIndex="200",$(".d_modal-video__height").find("iframe").attr("src",""),$(".d_popapVideo").removeClass("d-none"),$("#masthead").addClass("blurred"),$("#colophon").addClass("blurred")})),$(".d_sliderLast__video_a").on("click",(function(t){t.preventDefault(),$("main").addClass("d_blur"),$(".d_popapVideo")[0].style.zIndex="200",$(".d_popapVideo").removeClass("d-none"),$("#masthead").addClass("blurred"),$("#colophon").addClass("blurred")})),$(".d_hubPageSliderTwo__a").on("click",(function(t){t.preventDefault(),$("main").addClass("d_blur"),$(".d_popapVideo")[0].style.zIndex="200",$(".d_modal-video__height").find("iframe").attr("src",""),$(".d_popapVideo").removeClass("d-none"),$("#masthead").addClass("blurred"),$("#colophon").addClass("blurred");var e=$(t.target).attr("data-srcVideo");$(".d_modal-video__height").children().attr("src",e)})),y.on("click",(function(t){$(".d_popapListHuman").addClass("d-n"),$(".d_popapUlHuman").removeClass("active"),$(".d_popapSliderImg__img").removeClass("active");$(".d_popapSliderImg__img");$("body").css("overflowY","auto")}));g.on("click",(function(t){var e=$(t.target),a=e.attr("href");$(a).addClass("active"),$("body").css("overflowY","hidden"),$(".d_popapDivTextH")[0].innerText=e.attr("data-btnText"),$(".d_popapListHuman").removeClass("d-n"),$(".d_popapSliderImg").children().map((function(t,e){var a=$(".d_human__img_girl__elips").map((function(t,e){if($(e).hasClass("active"))return e})),i=$(a).attr("href"),r=$(i);$(e).attr("data-id")==r.attr("id")&&$(e).addClass("active")}))})),x.on("click",(function(t){var e=$(".d_popapSliderImg").children(),a=$(".d_popapUlHuman"),i=null,r=e.filter((function(t,e){return!$(e).hasClass("d-n")})),n=a.filter((function(t,e){return!$(e).hasClass("d-n")}));$(n).map((function(t,e){$(e).hasClass("active")&&(i=t<n.length-1?t+=1:0),$(e).removeClass("active")})),$(n[i]).addClass("active");var s=null;$(r).map((function(t,e){$(e).hasClass("active")&&(s=t<r.length-1?t+=1:0),$(e).removeClass("active")}));var l=$(r[s]).attr("data-Text");$(".d_popapDivTextH")[0].innerText=l,$(r[s]).addClass("active")})),b.on("click",(function(t){var e=$(".d_popapSliderImg").children(),a=$(".d_popapUlHuman"),i=null,r=a.filter((function(t,e){return!$(e).hasClass("d-n")}));$(r).map((function(t,e){$(e).hasClass("active")&&(i=t>0&&t<=r.length-1?t-=1:t<=0?r.length-1:0),$(e).removeClass("active")})),$(r[i]).addClass("active");var n=null,s=e.filter((function(t,e){return!$(e).hasClass("d-n")}));$(s).map((function(t,e){$(e).hasClass("active")&&(t>0&&t<=s.length-1?n=t-=1:t<=0?n=s.length-1:console.log(1)),$(e).removeClass("active")})),$(s[n]).addClass("active");var l=$(s[n]).attr("data-Text");$(".d_popapDivTextH")[0].innerText=l}));f.on("click",(function(t){var e=$(t.target),a=e.attr("href");$(a).addClass("active"),$("body").css("overflowY","hidden"),$(".d_popapDivTextH")[0].innerText=e.attr("data-btnText");$(".d_popapSliderImg__img");$(".d_popapListHuman").removeClass("d-n"),$(".d_popapSliderImg").children().filter((function(t,e){return!$(e).hasClass("d-n")})).map((function(t,e){var a=$(".d_human__img_man__elips").map((function(t,e){if($(e).hasClass("active"))return e})),i=$(a).attr("href"),r=$(i);$(e).attr("data-id")==r.attr("id")&&$(e).addClass("active")}))})),t.on("click",(function(t){t.preventDefault();var e=$(t.target),a=e.attr("href"),i=$(a);$(".d_essentials-tab .active, .d_essentials-content .active ").removeClass("active"),e.parent().addClass("active"),i.addClass("active")}));var O=function(t){i.map((function(e,a){if(a.setAttribute("src",""),t==a.getAttribute("data-id")){var i=a.getAttribute("data-srcTwo");a.setAttribute("src",i)}}))},j=function(){U.forEach((function(t){t.classList.contains("active")&&$(t.getAttribute("href")).addClass("active")}))},W=function(){z.forEach((function(t){t.classList.contains("active")&&$(t.getAttribute("href")).addClass("active")}))},F=function(t){switch(t){case"0":e[0].style.marginTop="-11px",e[0].style.marginLeft="-86px",e[0].style.transform="rotate(28deg)",e[0].style.height="77px";break;case"1":e[0].style.marginTop="48px",e[0].style.marginLeft="-61px",e[0].style.transform="rotate(1deg)",e[0].style.height="96px";break;case"2":e[0].style.marginTop="72px",e[0].style.marginLeft="-41px",e[0].style.transform="rotate(-16deg)",e[0].style.height="110px";break;case"3":e[0].style.marginTop="60px",e[0].style.marginLeft="-89px",e[0].style.transform="rotate(-7deg)",e[0].style.height="139px";break;case"4":e[0].style.marginTop="63px",e[0].style.marginLeft="-122px",e[0].style.transform="rotate(-15deg)",e[0].style.height="187px";break;case"5":e[0].style.marginTop="89px",e[0].style.marginLeft="-149px",e[0].style.transform="rotate(-25deg)",e[0].style.height="285px"}},P=function(t){switch(t){case"0":a[0].style.marginTop="-2px",a[0].style.marginLeft="-79px",a[0].style.transform="rotate(37deg)",a[0].style.height="70px";break;case"1":a[0].style.marginTop="52px",a[0].style.marginLeft="-82px",a[0].style.transform="rotate(-4deg)",a[0].style.height="117px";break;case"2":a[0].style.marginTop="72px",a[0].style.marginLeft="-41px",a[0].style.transform="rotate(-9deg)",a[0].style.height="126px";break;case"3":a[0].style.marginTop="60px",a[0].style.marginLeft="-114px",a[0].style.transform="rotate(-11deg)",a[0].style.height="171px";break;case"4":a[0].style.marginTop="89px",a[0].style.marginLeft="-149px",a[0].style.transform="rotate(-27deg)",a[0].style.height="277px"}},U=[],z=[];c.map((function(t,e){U.push(e)})),_.map((function(t,e){z.push(e)})),$(".d_human__list__h")[0].innerText=$(U)[0].getAttribute("data-Text");var B=$(v).find(".slick-dots").children();c.on("mouseover",(function(t){t.preventDefault();var i=$(t.target);a[0].style.opacity="0",e[0].style.opacity="1",$(".d_human__list__h")[0].innerText=i[0].getAttribute("data-Text"),o.map((function(t,e){e.classList.remove("active")})),O(t.target.getAttribute("data-id")),c.map((function(t,e){e.classList.remove("active")})),"blockGirl"==t.target.parentElement.getAttribute("id")&&F(t.target.getAttribute("data-id")),"blockMan"==t.target.parentElement.getAttribute("id")&&P(t.target.getAttribute("data-id")),i.addClass("active"),j();var r=t.target.getAttribute("data-id"),n=$(B[r]).children();document.documentElement.clientWidth<=577&&n.click()})),_.on("mouseover",(function(t){t.preventDefault();var i=$(t.target);a[0].style.opacity="1",e[0].style.opacity="0",$(".d_human__list__h")[0].innerText=i[0].getAttribute("data-Text"),Array.prototype.forEach.call(o,(function(t){t.classList.remove("active")})),O(t.target.getAttribute("data-id")),Array.prototype.forEach.call(_,(function(t){t.classList.remove("active")})),"blockGirl"==t.target.parentElement.getAttribute("id")&&F(t.target.getAttribute("data-id")),"blockMan"==t.target.parentElement.getAttribute("id")&&P(t.target.getAttribute("data-id")),i.addClass("active"),W();var r=t.target.getAttribute("data-id"),n=$(Y[r]).children();document.documentElement.clientWidth<=577&&n.click()})),c.on("click",(function(t){t.preventDefault()})),_.on("click",(function(t){t.preventDefault()})),n.on("click",(function(t){t.preventDefault(),e[0].style.opacity="1",Array.prototype.forEach.call(o,(function(t){t.classList.remove("active")}));var a=null;U.forEach((function(t,e){t.classList.contains("active")&&(a=t)}));var i=String(Number(a.getAttribute("data-id"))+1);U.forEach((function(t,e,a){t.classList.remove("active"),e==i&&(t.classList.add("active"),$(".d_human__list__h")[0].innerText=$(t)[0].getAttribute("data-Text")),i>=a.length&&(U[0].classList.add("active"),$(".d_human__list__h")[0].innerText=U[0].getAttribute("data-Text"))}));var r=String(Number(a.getAttribute("data-id"))+1)>=U.length?"0":String(Number(a.getAttribute("data-id"))+1);F(r),O(r),j()})),l.on("click",(function(t){t.preventDefault(),a[0].style.opacity="1",Array.prototype.forEach.call(o,(function(t){t.classList.remove("active")}));var e=null;z.forEach((function(t,a){t.classList.contains("active")&&(e=t)}));var i=String(Number(e.getAttribute("data-id"))+1);z.forEach((function(t,e,a){t.classList.remove("active"),e==i&&(t.classList.add("active"),$(".d_human__list__h")[0].innerText=$(t)[0].getAttribute("data-Text")),i>=a.length&&(z[0].classList.add("active"),$(".d_human__list__h")[0].innerText=z[0].getAttribute("data-Text"))}));var r=String(Number(e.getAttribute("data-id"))+1)>=z.length?"0":String(Number(e.getAttribute("data-id"))+1);P(r),O(r),W()})),s.on("click",(function(t){t.preventDefault(),Array.prototype.forEach.call(o,(function(t){t.classList.remove("active")})),a[0].style.opacity="1",e[0].style.opacity="1";var i=null;U.forEach((function(t,e){t.classList.contains("active")&&(i=t)}));var r=String(Number(i.getAttribute("data-id"))-1)<0?String(U.length-1):String(Number(i.getAttribute("data-id"))-1);U.forEach((function(t,e){t.classList.remove("active"),e==r&&(t.classList.add("active"),$(".d_human__list__h")[0].innerText=$(t)[0].getAttribute("data-Text"))})),F(r),O(r),j()})),d.on("click",(function(t){t.preventDefault(),Array.prototype.forEach.call(o,(function(t){t.classList.remove("active")})),a[0].style.opacity="1",e[0].style.opacity="1";var i=null;z.forEach((function(t,e){t.classList.contains("active")&&(i=t)}));var r=String(Number(i.getAttribute("data-id"))-1)<0?String(z.length-1):String(Number(i.getAttribute("data-id"))-1);z.forEach((function(t,e){t.classList.remove("active"),e==r&&(t.classList.add("active"),$(".d_human__list__h")[0].innerText=$(t)[0].getAttribute("data-Text"))})),P(r),O(r),W()}));var Y=null;u.on("click",(function(t){t.preventDefault();var i=$(t.target),r=i.parent().attr("href"),n=$(r),s=$(".d_human__img"),d=s.children();Array.prototype.forEach.call(d,(function(t,e){t.classList.remove("active")})),Array.prototype.forEach.call(o,(function(t){t.classList.remove("active")}));var c=i.parent().parent().attr("class");$(".".concat(c," .active")).removeClass("active"),i.addClass("active"),s.removeClass("active");var _=n.children();if(Array.prototype.forEach.call($(_),(function(t,i){if("blockGirl"==t.parentNode.getAttribute("id")){$(window).width()>=768&&(clearInterval(V),V=setInterval((function(t){G()}),5e3)),j();var r=document.querySelector(".d_human__img_girl__elips.active");O($(r)[0].getAttribute("data-id")),$(".d_human__list__h")[0].innerText=$(r)[0].getAttribute("data-Text"),a[0].style.opacity="0",e[0].style.opacity="1";var n=$(".d_popapUlHuman");$(n[4]).removeClass("d-n");var s=$(".d_popapSliderImg__img");$(s[4]).removeClass("d-n")}if("blockMan"==t.parentNode.getAttribute("id")){W();var d=document.querySelector(".d_human__img_man__elips.active");$(window).width()>=768&&(clearInterval(V),V=setInterval((function(t){l.click()}),5e3)),O($(d)[0].getAttribute("data-id")),$(".d_human__list__h")[0].innerText=$(d)[0].getAttribute("data-Text"),e[0].style.opacity="0",a[0].style.opacity="1";var o=$(".d_popapUlHuman");$(o[4]).addClass("d-n");var c=$(".d_popapSliderImg__img");$(c[4]).addClass("d-n")}})),n.addClass("active"),"blockGirl"==n[0].getAttribute("id"))j(),p[0].classList.add("active"),m[0].classList.remove("active"),$(v).addClass("active"),$(h).removeClass("active"),$(window).width()<=520&&($(".d_human__slidersMan").slick("unslick"),$(".d_human__slidersGirl").slick({slidesToShow:1,slidesToScroll:1,dots:!0,autoplay:!0,speed:100,autoplaySpeed:5e3,arrows:!1})),B=$(".d_human__slidersGirl").find(".slick-dots").children();else{if(m[0].classList.add("active"),p[0].classList.remove("active"),$(h).addClass("active"),$(v).removeClass("active"),document.documentElement.clientWidth<=577)$(".d_human__slidersMan").slick({slidesToShow:1,slidesToScroll:1,dots:!0,autoplay:!0,autoplaySpeed:5e3,arrows:!1}),$(".d_human__slidersGirl").slick("unslick"),h.find("li").children().on("click",(function(t){t.preventDefault(),t.target.disabled=!0}));Y=$(h).find(".slick-dots").children()}})),$(".d_human__slidersGirl").on("afterChange",(function(t,e,a,i){U.forEach((function(t){t.classList.remove("active")})),U[a].classList.add("active")})),$(".d_human__slidersMan").on("afterChange",(function(t,e,a,i){z.forEach((function(t){t.classList.remove("active")})),z[a].classList.add("active")}));document.querySelector("#EllipseOrangStroke");var R=document.querySelector(".d_backToTop");$(R).on("click",(function(t){$(t.target);$("html, body").animate({scrollTop:$("html, body").offset().top},1e3)}))}))}]);