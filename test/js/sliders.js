!function(e){var t={};function r(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=183)}({183:function(e,t){function r(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function n(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var i={default:{slidesPerView:1,spaceBetween:0},fade:{effect:"fade",fadeEffect:{crossFade:!0}},loop:{loop:!0,loopedSlides:1},autoHeight:{autoHeight:!0}};function l(e){return{slider:e.querySelector('[data-slider="slides"]'),arrowPrev:e.querySelector('[data-slider="prev"]'),arrowNext:e.querySelector('[data-slider="next"]'),paging:e.querySelector('[data-slider="paging"]')}}window.initSliders=function(){var e=document.querySelector(".js-slider-default");if(e){var t=l(e),r=t.slider,a=t.arrowPrev,o=t.arrowNext,u=t.paging,c=n({},i.default,{navigation:{prevEl:a,nextEl:o,disabledClass:"disabled"}});u&&(c.pagination={el:u,type:"bullets",clickable:!0,dynamicBullets:!0,dynamicMainBullets:1,bulletActiveClass:"active"}),new Swiper(r,c)}var s=document.querySelector(".js-slider-advantages");if(s){var d=l(s),f=d.slider,p=d.arrowPrev,b=d.arrowNext,v=s.querySelector('[data-slider="pagination"]'),y=v.dataset.pagination.split(","),g=n({},i.default,{},i.loop,{navigation:{prevEl:p,nextEl:b,disabledClass:"disabled"},pagination:{el:v,type:"bullets",clickable:!0,bulletClass:"slider-advantages__pagination-item",bulletActiveClass:"active",renderBullet:function(e,t){return'<span class="'.concat(t,'">').concat(y[e],"</span>")}}});new Swiper(f,g)}var w=document.querySelector(".js-slider-conversion");if(w){var O=l(w),j=O.slider,S=O.arrowPrev,P=O.arrowNext,m=n({},i.default,{},i.fade,{},i.autoHeight,{navigation:{prevEl:S,nextEl:P,disabledClass:"disabled"}});new Swiper(j,m)}}}});