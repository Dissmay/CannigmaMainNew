!function(e){var t={};function a(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,a),i.l=!0,i.exports}a.m=e,a.c=t,a.d=function(e,t,r){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)a.d(r,i,function(t){return e[t]}.bind(null,i));return r},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="js/",a(a.s=0)}([function(e,t,a){"use strict";a.r(t);let r=[],i=[];var l=function(){r.forEach(e=>{if(e.classList.contains("active")){$(e.getAttribute("href")).addClass("active")}})},s=function(){i.forEach(e=>{if(e.classList.contains("active")){$(e.getAttribute("href")).addClass("active")}})};let d=$(".d_human__img_girl__arrowHeart");var n=function(e){switch(e){case"0":d[0].style.marginTop="-11px",d[0].style.marginLeft="-86px",d[0].style.transform="rotate(28deg)",d[0].style.height="77px";break;case"1":d[0].style.marginTop="48px",d[0].style.marginLeft="-61px",d[0].style.transform="rotate(1deg)",d[0].style.height="96px";break;case"2":d[0].style.marginTop="72px",d[0].style.marginLeft="-41px",d[0].style.transform="rotate(-16deg)",d[0].style.height="110px";break;case"3":d[0].style.marginTop="60px",d[0].style.marginLeft="-89px",d[0].style.transform="rotate(-7deg)",d[0].style.height="139px";break;case"4":d[0].style.marginTop="63px",d[0].style.marginLeft="-122px",d[0].style.transform="rotate(-15deg)",d[0].style.height="187px";break;case"5":d[0].style.marginTop="89px",d[0].style.marginLeft="-149px",d[0].style.transform="rotate(-25deg)",d[0].style.height="285px"}},o=function(e){$(".d_human__img_girl__heart").map((t,a)=>{if(a.setAttribute("src",""),e==a.getAttribute("data-id")){let e=a.getAttribute("data-srcTwo");a.setAttribute("src",e)}})};let _=$(".d_human__img_girl__arrowHeart_man");var c=function(e){switch(e){case"0":_[0].style.marginTop="-2px",_[0].style.marginLeft="-79px",_[0].style.transform="rotate(37deg)",_[0].style.height="70px";break;case"1":_[0].style.marginTop="52px",_[0].style.marginLeft="-82px",_[0].style.transform="rotate(-4deg)",_[0].style.height="117px";break;case"2":_[0].style.marginTop="72px",_[0].style.marginLeft="-41px",_[0].style.transform="rotate(-9deg)",_[0].style.height="126px";break;case"3":_[0].style.marginTop="60px",_[0].style.marginLeft="-114px",_[0].style.transform="rotate(-11deg)",_[0].style.height="171px";break;case"4":_[0].style.marginTop="89px",_[0].style.marginLeft="-149px",_[0].style.transform="rotate(-27deg)",_[0].style.height="277px"}},p=function(){let e=$(".d_human__img_girl__arrowHeart"),t=$(".d_human__img_girl__arrowHeart_man"),a=($(".d_human__img_girl__heart"),$(".d_human__img_girl")),d=$(".d_human__list_girl__next"),_=$(".d_human__list_girl__prev"),p=$(".d_human__list_man__next"),u=$(".d_human__list_man__prev"),m=$(".d_human__list_ul"),h=$(".d_human__img_girl__elips"),g=$(".d_human__img_man__elips"),v=$(".d_human__img_changeGender__img"),f=$(".d_human__list_girl__btns"),y=$(".d_human__list_man__btns"),b=$(".d_human__slidersGirl"),x=$(".d_human__slidersMan"),w=($(".d_human__sliderMan_btn"),$(".d_human__sliderGirl_btn"),$(".d_popapListHuman__closerBtn"),$(".d_popapSliderBtn__prev"),$(".d_popapSliderBtn__next"),$(".d_headbtn"),document.querySelectorAll(".d_popapUlHuman")),T=$(".d_popapVideo__closer");h.map((e,t)=>{r.push(t)}),g.map((e,t)=>{i.push(t)}),$(".d_human__list__h")[0].innerText=$(r)[0].getAttribute("data-Text");let C=$(b).find(".slick-dots").children();h.on("mouseover",a=>{a.preventDefault();let r=$(a.target);t[0].style.opacity="0",e[0].style.opacity="1",$(".d_human__list__h")[0].innerText=r[0].getAttribute("data-Text"),m.map((e,t)=>{t.classList.remove("active")}),o(a.target.getAttribute("data-id")),h.map((e,t)=>{t.classList.remove("active")}),"blockGirl"==a.target.parentElement.getAttribute("id")&&n(a.target.getAttribute("data-id")),"blockMan"==a.target.parentElement.getAttribute("id")&&c(a.target.getAttribute("data-id")),r.addClass("active"),l();let i=a.target.getAttribute("data-id"),s=$(C[i]).children();document.documentElement.clientWidth<=577&&s.click()}),g.on("mouseover",a=>{a.preventDefault();let r=$(a.target);t[0].style.opacity="1",e[0].style.opacity="0",$(".d_human__list__h")[0].innerText=r[0].getAttribute("data-Text"),Array.prototype.forEach.call(m,e=>{e.classList.remove("active")}),o(a.target.getAttribute("data-id")),Array.prototype.forEach.call(g,e=>{e.classList.remove("active")}),"blockGirl"==a.target.parentElement.getAttribute("id")&&n(a.target.getAttribute("data-id")),"blockMan"==a.target.parentElement.getAttribute("id")&&c(a.target.getAttribute("data-id")),r.addClass("active"),s();let i=a.target.getAttribute("data-id"),l=$(A[i]).children();document.documentElement.clientWidth<=577&&l.click()}),h.on("click",e=>{e.preventDefault()}),g.on("click",e=>{e.preventDefault()}),d.on("click",t=>{t.preventDefault(),e[0].style.opacity="1",Array.prototype.forEach.call(m,e=>{e.classList.remove("active")});let a=null;r.forEach((e,t)=>{e.classList.contains("active")&&(a=e)});let i=String(Number(a.getAttribute("data-id"))+1);r.forEach((e,t,a)=>{e.classList.remove("active"),t==i&&(e.classList.add("active"),$(".d_human__list__h")[0].innerText=$(e)[0].getAttribute("data-Text")),i>=a.length&&(r[0].classList.add("active"),$(".d_human__list__h")[0].innerText=r[0].getAttribute("data-Text"))});let s=String(Number(a.getAttribute("data-id"))+1)>=r.length?"0":String(Number(a.getAttribute("data-id"))+1);n(s),o(s),l()}),p.on("click",e=>{e.preventDefault(),t[0].style.opacity="1",Array.prototype.forEach.call(m,e=>{e.classList.remove("active")});let a=null;i.forEach((e,t)=>{e.classList.contains("active")&&(a=e)});let r=String(Number(a.getAttribute("data-id"))+1);i.forEach((e,t,a)=>{e.classList.remove("active"),t==r&&(e.classList.add("active"),$(".d_human__list__h")[0].innerText=$(e)[0].getAttribute("data-Text")),r>=a.length&&(i[0].classList.add("active"),$(".d_human__list__h")[0].innerText=i[0].getAttribute("data-Text"))});let l=String(Number(a.getAttribute("data-id"))+1)>=i.length?"0":String(Number(a.getAttribute("data-id"))+1);c(l),o(l),s()}),_.on("click",a=>{a.preventDefault(),Array.prototype.forEach.call(m,e=>{e.classList.remove("active")}),t[0].style.opacity="1",e[0].style.opacity="1";let i=null;r.forEach((e,t)=>{e.classList.contains("active")&&(i=e)});let s=String(Number(i.getAttribute("data-id"))-1)<0?String(r.length-1):String(Number(i.getAttribute("data-id"))-1);r.forEach((e,t)=>{e.classList.remove("active"),t==s&&(e.classList.add("active"),$(".d_human__list__h")[0].innerText=$(e)[0].getAttribute("data-Text"))}),n(s),o(s),l()}),u.on("click",a=>{a.preventDefault(),Array.prototype.forEach.call(m,e=>{e.classList.remove("active")}),t[0].style.opacity="1",e[0].style.opacity="1";let r=null;i.forEach((e,t)=>{e.classList.contains("active")&&(r=e)});let l=String(Number(r.getAttribute("data-id"))-1)<0?String(i.length-1):String(Number(r.getAttribute("data-id"))-1);i.forEach((e,t)=>{e.classList.remove("active"),t==l&&(e.classList.add("active"),$(".d_human__list__h")[0].innerText=$(e)[0].getAttribute("data-Text"))}),c(l),o(l),s()});let A=null;v.on("click",a=>{a.preventDefault();let r=$(a.target),i=r.parent().attr("href"),d=$(i);var n=$(".d_human__img");let _=n.children();Array.prototype.forEach.call(_,(e,t)=>{e.classList.remove("active")}),Array.prototype.forEach.call(m,e=>{e.classList.remove("active")});let c=r.parent().parent().attr("class");$(`.${c} .active`).removeClass("active"),r.addClass("active"),n.removeClass("active");let u=d.children();if(Array.prototype.forEach.call($(u),(a,r)=>{if("blockGirl"==a.parentNode.getAttribute("id")){$(window).width()>=768&&(clearInterval(S),S=setInterval(e=>{k()},5e3)),l();let a=document.querySelector(".d_human__img_girl__elips.active");o($(a)[0].getAttribute("data-id")),$(".d_human__list__h")[0].innerText=$(a)[0].getAttribute("data-Text"),t[0].style.opacity="0",e[0].style.opacity="1";let r=$(".d_popapUlHuman");$(r[4]).removeClass("d-n");let i=$(".d_popapSliderImg__img");$(i[4]).removeClass("d-n")}if("blockMan"==a.parentNode.getAttribute("id")){s();let a=document.querySelector(".d_human__img_man__elips.active");$(window).width()>=768&&(clearInterval(S),S=setInterval(e=>{p.click()},5e3)),o($(a)[0].getAttribute("data-id")),$(".d_human__list__h")[0].innerText=$(a)[0].getAttribute("data-Text"),e[0].style.opacity="0",t[0].style.opacity="1";let r=$(".d_popapUlHuman");$(r[4]).addClass("d-n");let i=$(".d_popapSliderImg__img");$(i[4]).addClass("d-n")}}),d.addClass("active"),"blockGirl"==d[0].getAttribute("id"))l(),f[0].classList.add("active"),y[0].classList.remove("active"),$(b).addClass("active"),$(x).removeClass("active"),$(window).width()<=520&&($(".d_human__slidersMan").slick("unslick"),$(".d_human__slidersGirl").slick({slidesToShow:1,slidesToScroll:1,dots:!0,autoplay:!0,speed:100,autoplaySpeed:5e3,arrows:!1})),C=$(".d_human__slidersGirl").find(".slick-dots").children();else{if(y[0].classList.add("active"),f[0].classList.remove("active"),$(x).addClass("active"),$(b).removeClass("active"),document.documentElement.clientWidth<=577){$(".d_human__slidersMan").slick({slidesToShow:1,slidesToScroll:1,dots:!0,autoplay:!0,autoplaySpeed:5e3,arrows:!1}),$(".d_human__slidersGirl").slick("unslick"),x.find("li").children().on("click",e=>{e.preventDefault(),e.target.disabled=!0})}A=$(x).find(".slick-dots").children()}}),$(".d_human__slidersGirl").on("afterChange",(function(e,t,a,i){r.forEach(e=>{e.classList.remove("active")}),r[a].classList.add("active")})),$(".d_human__slidersMan").on("afterChange",(function(e,t,a,r){i.forEach(e=>{e.classList.remove("active")}),i[a].classList.add("active")}));let S=null;function k(){d.click()}if($(window).width()>=768&&$(a[0]).hasClass("active")&&(clearInterval(S),S=setInterval(e=>{k()},5e3)),$(window).height()<=667){T[0].style.top="149px",b.find("li").children().on("click",e=>{e.preventDefault(),e.target.disabled=!0})}if(812==$(window).height()&&$(w).map((e,t)=>{t.style.height="60vh"}),$(window).height()<=812){b.find("li").children().on("click",e=>{e.preventDefault(),e.target.disabled=!0})}};$((function(){let e=$(".d_essentials__tabLink"),t=$(".d_popapVideo"),a=$(".d_popapVideo__closer"),r=$(".d_human__sliderMan_btn"),i=$(".d_human__sliderGirl_btn"),l=$(".d_popapListHuman__closerBtn"),s=$(".d_popapSliderBtn__prev"),d=$(".d_popapSliderBtn__next");$(".d_headbtn");$(window).width()<=520&&$(".d_human").length&&$(".d_human__slidersGirl").slick({slidesToShow:1,slidesToScroll:1,dots:!0,autoplay:!0,autoplaySpeed:5e3,arrows:!1}),$(".d_slideFirst").on("click",e=>{let t=$(e.target).attr("data-srcVideo");$(".d_modal-video__height").children().attr("src",t)}),$(".d_sliderLast__video").on("click",e=>{let t=$(e.target).attr("data-srcVideo");$(".d_modal-video__height").children().attr("src",t)}),t.on("click",e=>{if(e.target!==$(".d_modal-video__height")){$(".d_popapVideo").addClass("d-none"),$(".d_modal-video__height").find("iframe").attr("src",""),$("main").removeClass("d_blur"),$(".d_popapVideo")[0].style.zIndex="0",$("#masthead").removeClass("blurred"),$("#colophon").removeClass("blurred")}}),a.on("click",()=>{$(".d_popapVideo").addClass("d-none"),$(".d_modal-video__height").find("iframe").attr("src",""),$("main").removeClass("d_blur"),$(".d_popapVideo")[0].style.zIndex="0",$("#masthead").removeClass("blurred"),$("#colophon").removeClass("blurred")}),$(".d_sliderFirst__video_a").length>0&&$(".d_sliderFirst__video_a").on("click",e=>{e.preventDefault(),$("main").addClass("d_blur"),$(".d_popapVideo")[0].style.zIndex="200",$(".d_modal-video__height").find("iframe").attr("src",""),$(".d_popapVideo").removeClass("d-none"),$("#masthead").addClass("blurred"),$("#colophon").addClass("blurred")}),$(".d_sliderLast__video_a").length>0&&$(".d_sliderLast__video_a").on("click",e=>{e.preventDefault(),$("main").addClass("d_blur"),$(".d_popapVideo")[0].style.zIndex="200",$(".d_popapVideo").removeClass("d-none"),$("#masthead").addClass("blurred"),$("#colophon").addClass("blurred")}),$(".d_hubPageSliderTwo__a").length>0&&$(".d_hubPageSliderTwo__a").on("click",e=>{e.preventDefault(),$("main").addClass("d_blur"),$(".d_popapVideo")[0].style.zIndex="200",$(".d_modal-video__height").find("iframe").attr("src",""),$(".d_popapVideo").removeClass("d-none"),$("#masthead").addClass("blurred"),$("#colophon").addClass("blurred");let t=$(e.target).attr("data-srcVideo");$(".d_modal-video__height").children().attr("src",t)}),$(".d_popapListHuman").length>0&&$(window).on("scroll",e=>{let t=$(e.target).scrollTop();$(".d_popapListHuman")[0].style.top=t>=108?"58px":"109px"});$(".d_human").length>0&&($(window).scrollTop(0),$(".d_slideBlock").slick({dots:!0,arrows:!1,autoplaySpeed:6e3}),$(".d_slideWrap").slick({slidesToShow:1,slidesToScroll:1,arrows:!0,speed:3e3,autoplay:!0,autoplaySpeed:6e3,asNavFor:".d_slideWrapLast",prevArrow:$(".d_slideFirst__prev"),nextArrow:$(".d_slideFirst__next"),dots:!0,responsive:[{breakpoint:800,settings:{slidesToShow:1,slidesToScroll:1,dots:!1}}]}),$(".d_slideWrapLast").slick({slidesToShow:2,slidesToScroll:1,asNavFor:".d_slideWrap",dots:!0,speed:3e3,centerMode:!1,variableWidth:!0,focusOnSelect:!1,prevArrow:$(".d_slideLast__prev"),nextArrow:$(".d_slideLast__next"),responsive:[{breakpoint:800,settings:{slidesToShow:1,slidesToScroll:1}}]}),$(".d_educationCenter__slider").slick({slidesToShow:4,slidesToScroll:1,arrows:!0,prevArrow:$(".d_educationCenter__slider_prev"),nextArrow:$(".d_educationCenter__slider_next"),responsive:[{breakpoint:770,settings:"unslick"}]}),$(".d_experts__sliders").slick({slidesToShow:2,slidesToScroll:1,arrows:!0,dots:!0,prevArrow:$(".d_experts__prev"),nextArrow:$(".d_experts__next"),responsive:[{breakpoint:769,settings:{slidesToShow:1}}]}),function(){const e=document.querySelectorAll(".d_experts__sliderExpert_p"),t=document.querySelectorAll(".d_experts__sliderExpert_h"),a=document.querySelectorAll(".d_news__h"),r=document.querySelectorAll(".d_slide__text_h"),i=document.querySelectorAll(".d_moreNews__bigCard_h"),l=document.querySelectorAll(".d_moreNews__card_h"),s=document.querySelectorAll(".d_moreNews__smallCard_h"),d=document.querySelectorAll(".d_paddingRight"),n=(document.querySelectorAll(".d_moreNews__smallCard_p"),document.querySelectorAll(".d_sliderFirst__text_h")),o=document.querySelectorAll(".d_sliderLast__video_hA");let _=(e,t)=>{e.forEach(e=>{let a=e.innerHTML;e.innerHTML.length>t&&(a=a.substr(0,t),e.innerHTML=a+"...")})};$(window).width()>=767&&_(e,100),_(t,22),_(a,37),_(r,60),_(i,67),_(l,40),_(s,45),_(d,50),_(n,60),_(o,60),$(window).width()<=375&&_(a,33),$(window).width()<=458&&_(a,33),$(window).width()<=420&&_(a,33)}(),p(),l.on("click",e=>{$(".d_popapListHuman").addClass("d-n"),$(".d_popapUlHuman").removeClass("active"),$(".d_popapSliderImg__img").removeClass("active");$(".d_popapSliderImg__img");$("body").css("overflowY","auto")}),i.on("click",e=>{let t=$(e.target),a=t.attr("href");$(a).addClass("active"),$("body").css("overflowY","hidden"),$(".d_popapDivTextH")[0].innerText=t.attr("data-btnText"),$(".d_popapListHuman").removeClass("d-n"),$(".d_popapSliderImg").children().map((e,t)=>{let a=$(".d_human__img_girl__elips").map((e,t)=>{if($(t).hasClass("active"))return t}),r=$(a).attr("href"),i=$(r);$(t).attr("data-id")==i.attr("id")&&$(t).addClass("active")})}),d.on("click",e=>{let t=$(".d_popapSliderImg").children(),a=$(".d_popapUlHuman"),r=null;const i=t.filter((e,t)=>!$(t).hasClass("d-n")),l=a.filter((e,t)=>!$(t).hasClass("d-n"));$(l).map((e,t)=>{$(t).hasClass("active")&&(r=e<l.length-1?e+=1:0),$(t).removeClass("active")}),$(l[r]).addClass("active");let s=null;$(i).map((e,t)=>{$(t).hasClass("active")&&(s=e<i.length-1?e+=1:0),$(t).removeClass("active")});let d=$(i[s]).attr("data-Text");$(".d_popapDivTextH")[0].innerText=d,$(i[s]).addClass("active")}),s.on("click",e=>{let t=$(".d_popapSliderImg").children(),a=$(".d_popapUlHuman"),r=null;const i=a.filter((e,t)=>!$(t).hasClass("d-n"));$(i).map((e,t)=>{$(t).hasClass("active")&&(r=e>0&&e<=i.length-1?e-=1:e<=0?i.length-1:0),$(t).removeClass("active")}),$(i[r]).addClass("active");let l=null;const s=t.filter((e,t)=>!$(t).hasClass("d-n"));$(s).map((e,t)=>{$(t).hasClass("active")&&(e>0&&e<=s.length-1?l=e-=1:e<=0?l=s.length-1:console.log(1)),$(t).removeClass("active")}),$(s[l]).addClass("active");let d=$(s[l]).attr("data-Text");$(".d_popapDivTextH")[0].innerText=d}),r.on("click",e=>{let t=$(e.target),a=t.attr("href");$(a).addClass("active"),$("body").css("overflowY","hidden"),$(".d_popapDivTextH")[0].innerText=t.attr("data-btnText");$(".d_popapSliderImg__img");$(".d_popapListHuman").removeClass("d-n"),$(".d_popapSliderImg").children().filter((e,t)=>!$(t).hasClass("d-n")).map((e,t)=>{let a=$(".d_human__img_man__elips").map((e,t)=>{if($(t).hasClass("active"))return t}),r=$(a).attr("href"),i=$(r);$(t).attr("data-id")==i.attr("id")&&$(t).addClass("active")})}),e.on("click",e=>{e.preventDefault();let t=$(e.target),a=t.attr("href"),r=$(a);$(".d_essentials-tab .active, .d_essentials-content .active ").removeClass("active"),t.parent().addClass("active"),r.addClass("active")}));let n=document.querySelector(".d_backToTop");$(n).on("click",e=>{$(e.target);$("html, body").animate({scrollTop:$("html, body").offset().top},1e3)})}))}]);