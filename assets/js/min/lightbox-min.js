"use strict";function Lightbox(){function t(){return window.innerHeight||document.documentElement.offsetHeight}function e(){return window.innerWidth||document.documentElement.offsetWidth}function n(t,e,n,o){t.addEventListener?t.addEventListener(e,n,o||!1):t.attachEvent&&t.attachEvent("on"+e,n)}function o(t,e){return t&&e?new RegExp("(^|\\s)"+e+"(\\s|$)").test(t.className):void 0}function i(t,e){return t&&e?(t.className=t.className.replace(new RegExp("(?:^|\\s)"+e+"(?!\\S)"),""),t):void 0}function r(t,e){return t&&e?(o(t,e)||(t.className+=" "+e),t):void 0}function a(t){return void 0!==t}function l(t,e){if(!t||!a(t))return!1;var n;return t.getAttribute?n=t.getAttribute(e):t.getAttributeNode&&(n=t.getAttributeNode(e).value),!(!a(n)||""===n)&&n}function p(t,e){if(!t||!a(t))return!1;var n;return t.getAttribute?n=t.getAttribute(e):t.getAttributeNode&&(n=t.getAttributeNode(e).value),"string"==typeof n}function s(t){n(t,"click",function(e){c(e),u(e),j=l(t,z+"-group")||!1,V=t,A(t,!1,!1,!1)},!1)}function c(t){t.stopPropagation?t.stopPropagation():t.returnValue=!1}function u(t){t.preventDefault?t.preventDefault():t.returnValue=!1}function m(t){for(var e=[],n=0;n<W.thumbnails.length;n++)l(W.thumbnails[n],z+"-group")===t&&e.push(W.thumbnails[n]);return e}function g(t,e){for(var n=m(e),o=0;o<n.length;o++)if(l(t,"src")===l(n[o],"src")&&l(t,z+"-index")===l(n[o],z+"-index")&&l(t,z)===l(n[o],z))return o}function d(){if(j){var t=new Image,e=new Image,n=g(V,j);n===P.length-1?(t.src=l(P[P.length-1],z)||P[P.length-1].src,e.src=l(P[0].src,z)||P[0].src):0===n?(t.src=l(P[P.length-1],z)||P[P.length-1].src,e.src=l(P[1],z)||P[1].src):(t.src=l(P[n-1],z)||P[n-1].src,e.src=l(P[n+1],z)||P[n+1].src)}}function f(){if(!M){h();var t=function(){if(r(W.box,O+"-loading"),!N&&"number"==typeof W.opt.loadingAnimation){var t=0;w=setInterval(function(){r(q[t],O+"-active"),setTimeout(function(){i(q[t],O+"-active")},W.opt.loadingAnimation),t=t>=q.length?0:t+=1},W.opt.loadingAnimation)}};I=setTimeout(t,500)}}function h(){if(!M&&(i(W.box,O+"-loading"),!N&&"string"!=typeof W.opt.loadingAnimation&&W.opt.loadingAnimation)){clearInterval(w);for(var t=0;t<q.length;t++)i(q[t],O+"-active")}}function v(){if(!X){if(X=document.createElement("span"),r(X,O+"-next"),W.opt.nextImg){var t=document.createElement("img");t.setAttribute("src",W.opt.nextImg),X.appendChild(t)}else r(X,O+"-no-img");n(X,"click",function(t){c(t),W.next()},!1),W.box.appendChild(X)}if(r(X,O+"-active"),!$){if($=document.createElement("span"),r($,O+"-prev"),W.opt.prevImg){var e=document.createElement("img");e.setAttribute("src",W.opt.prevImg),$.appendChild(e)}else r($,O+"-no-img");n($,"click",function(t){c(t),W.prev()},!1),W.box.appendChild($)}r($,O+"-active")}function b(){if(W.opt.responsive&&X&&$){var e=t()/2-X.offsetHeight/2;X.style.top=e+"px",$.style.top=e+"px"}}function x(t){function e(t){return"boolean"!=typeof t||t}if(t||(t={}),W.opt={boxId:t.boxId||!1,controls:e(t.controls),dimensions:e(t.dimensions),captions:e(t.captions),prevImg:"string"==typeof t.prevImg&&t.prevImg,nextImg:"string"==typeof t.nextImg&&t.nextImg,hideCloseBtn:t.hideCloseBtn||!1,closeOnClick:"boolean"!=typeof t.closeOnClick||t.closeOnClick,nextOnClick:e(t.nextOnClick),loadingAnimation:void 0===t.loadingAnimation||t.loadingAnimation,animElCount:t.animElCount||4,preload:e(t.preload),carousel:e(t.carousel),animation:"number"==typeof t.animation||!1===t.animation?t.animation:400,responsive:e(t.responsive),maxImgSize:t.maxImgSize||.8,keyControls:e(t.keyControls),hideOverflow:t.hideOverflow||!0,onopen:t.onopen||!1,onclose:t.onclose||!1,onload:t.onload||!1,onresize:t.onresize||!1,onloaderror:t.onloaderror||!1,onimageclick:"function"==typeof t.onimageclick&&t.onimageclick},W.opt.boxId){W.box=document.getElementById(W.opt.boxId);var o=W.box.getAttribute("class");o.search(O+" ")<0&&W.box.setAttribute("class",o+" "+O)}else if(!W.box){var a=document.getElementById(T);a||(a=document.createElement("div")),a.setAttribute("id",T),a.setAttribute("class",O),W.box=a,S.appendChild(W.box)}if(W.box.innerHTML=B,M&&r(W.box,O+"-ie8"),W.wrapper=document.getElementById(T+"-contentwrapper"),!W.opt.hideCloseBtn){var l=document.createElement("span");l.setAttribute("id",T+"-close"),l.setAttribute("class",O+"-close"),l.innerHTML="X",W.box.appendChild(l),n(l,"click",function(t){c(t),W.close()},!1)}if(!M&&W.opt.closeOnClick&&n(W.box,"click",function(t){c(t),W.close()},!1),"string"==typeof W.opt.loadingAnimation)(y=document.createElement("img")).setAttribute("src",W.opt.loadingAnimation),r(y,O+"-loading-animation"),W.box.appendChild(y);else if(W.opt.loadingAnimation){W.opt.loadingAnimation="number"==typeof W.opt.loadingAnimation?W.opt.loadingAnimation:200,r(y=document.createElement("div"),O+"-loading-animation");for(var p=0;p<W.opt.animElCount;)q.push(y.appendChild(document.createElement("span"))),p++;W.box.appendChild(y)}W.opt.responsive?(n(window,"resize",function(){W.resize()},!1),r(W.box,O+"-nooverflow")):i(W.box,O+"-nooverflow"),W.opt.keyControls&&n(document,"keydown",function(t){R&&(c(t),39===t.keyCode?W.next():37===t.keyCode?W.prev():27===t.keyCode&&W.close())},!1)}function A(t,e,i,p){if(!t&&!e)return!1;(j=e||j||l(t,z+"-group"))&&(P=m(j),"boolean"!=typeof t||t||(t=P[0])),D.img=new Image,V=t;var s;s="string"==typeof t?t:l(t,z)?l(t,z):l(t,"src"),L=!1,R||("number"==typeof W.opt.animation&&r(D.img,O+"-animate-transition "+O+"-animate-init"),R=!0,W.opt.onopen&&W.opt.onopen(D)),W.opt&&a(W.opt.hideOverflow)&&!W.opt.hideOverflow||S.setAttribute("style","overflow: hidden"),W.box.setAttribute("style","padding-top: 0"),W.wrapper.innerHTML="",W.wrapper.appendChild(D.img),W.opt.animation&&r(W.wrapper,O+"-animate");var u=l(t,z+"-caption");if(u&&W.opt.captions){var g=document.createElement("p");g.setAttribute("class",O+"-caption"),g.innerHTML=u,W.wrapper.appendChild(g)}r(W.box,O+"-active"),M&&r(W.wrapper,O+"-active"),W.opt.controls&&P.length>1&&(v(),b()),D.img.onerror=function(t){W.opt.onloaderror&&(t._happenedWhile=p||!1,W.opt.onloaderror(t))},D.img.onload=function(){if(D.originalWidth=this.naturalWidth||this.width,D.originalHeight=this.naturalHeight||this.height,M||N){var t=new Image;t.setAttribute("src",s),D.originalWidth=t.width,D.originalHeight=t.height}var e=setInterval(function(){o(W.box,O+"-active")&&(r(W.wrapper,O+"-wrapper-active"),"number"==typeof W.opt.animation&&r(D.img,O+"-animate-transition"),i&&i(),h(),clearTimeout(I),W.opt.preload&&d(),W.opt.nextOnClick&&(r(D.img,O+"-next-on-click"),n(D.img,"click",function(t){c(t),W.next()},!1)),W.opt.onimageclick&&n(D.img,"click",function(t){c(t),W.opt.onimageclick(D)},!1),W.opt.onload&&W.opt.onload(p),clearInterval(e),W.resize())},10)},D.img.setAttribute("src",s),f()}var y,w,I,C,k,E,H,O="jslghtbx",T="jslghtbx",z="data-jslghtbx",W=this,M=!1,N=!1,S=document.getElementsByTagName("body")[0],B='<div class="jslghtbx-contentwrapper" id="jslghtbx-contentwrapper" ></div>',L=!1,j=!1,V=!1,D={},P=[],R=!1,q=[],X=!1,$=!1;W.opt={},W.box=!1,W.wrapper=!1,W.thumbnails=[],W.thumbnails.push=function(){for(var t=0,e=arguments.length;e>t;t++)s(arguments[t]);return Array.prototype.push.apply(this,arguments)},W.load=function(t){navigator.appVersion.indexOf("MSIE 8")>0&&(M=!0),navigator.appVersion.indexOf("MSIE 9")>0&&(N=!0),x(t);for(var e=document.querySelectorAll("["+z+"]"),n=0;n<e.length;n++)p(e[n],z)&&(e[n].setAttribute(z+"-index",n),W.thumbnails.push(e[n]))},W.open=function(t,e){t&&e&&(e=!1),A(t,e,!1,!1)},W.resize=function(){if(D.img){C=e(),k=t();var n=W.box.offsetWidth,o=W.box.offsetHeight;!L&&D.img&&D.img.offsetWidth&&D.img.offsetHeight&&(L=D.img.offsetWidth/D.img.offsetHeight),Math.floor(n/L)>o?(E=o*L,H=o):(E=n,H=n/L),E=Math.floor(E*W.opt.maxImgSize),H=Math.floor(H*W.opt.maxImgSize),(W.opt.dimensions&&H>D.originalHeight||W.opt.dimensions&&E>D.originalWidth)&&(H=D.originalHeight,E=D.originalWidth),D.img.setAttribute("width",E),D.img.setAttribute("height",H),D.img.setAttribute("style","margin-top:"+(t()-H)/2+"px"),setTimeout(b,200),W.opt.onresize&&W.opt.onresize(D)}},W.next=function(){if(j){var t=g(V,j)+1;if(P[t])V=P[t];else{if(!W.opt.carousel)return;V=P[0]}"number"==typeof W.opt.animation?(i(D.img,O+"-animating-next"),setTimeout(function(){A(V,!1,function(){setTimeout(function(){r(D.img,O+"-animating-next")},W.opt.animation/2)},"next")},W.opt.animation/2)):A(V,!1,!1,"next")}},W.prev=function(){if(j){var t=g(V,j)-1;if(P[t])V=P[t];else{if(!W.opt.carousel)return;V=P[P.length-1]}"number"==typeof W.opt.animation?(i(D.img,O+"-animating-prev"),setTimeout(function(){A(V,!1,function(){setTimeout(function(){r(D.img,O+"-animating-next")},W.opt.animation/2)},"prev")},W.opt.animation/2)):A(V,!1,!1,"prev")}},W.close=function(){j=!1,V=!1;var t=D;D={},P=[],R=!1,i(W.box,O+"-active"),i(W.wrapper,O+"-wrapper-active"),i(X,O+"-active"),i($,O+"-active"),W.box.setAttribute("style","padding-top: 0px"),h(),M&&W.box.setAttribute("style","display: none"),W.opt&&a(W.opt.hideOverflow)&&!W.opt.hideOverflow||S.setAttribute("style","overflow: auto"),W.opt.onclose&&W.opt.onclose(t)}}