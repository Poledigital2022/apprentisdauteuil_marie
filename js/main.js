/*
 * Third party
 */
//= ../../bower_components/jquery/dist/jquery.js


/*
 * Custom
 */
/*!
 * fullPage 3.0.3
 * https://github.com/alvarotrigo/fullPage.js
 *
 * @license GPLv3 for open source use only
 * or Fullpage Commercial License for commercial use
 * http://alvarotrigo.com/fullPage/pricing/
 *
 * Copyright (C) 2018 http://alvarotrigo.com/fullPage - A project by Alvaro Trigo
 */
!function(e,t,n,o,i){"function"==typeof define&&define.amd?define(function(){return e.fullpage=o(t,n),e.fullpage}):"object"==typeof exports?module.exports=o(t,n):t.fullpage=o(t,n)}(this,window,document,function(e,t){"use strict";var n="fullpage-wrapper",o="."+n,i="fp-responsive",r="fp-notransition",l="fp-destroyed",a="fp-enabled",s="fp-viewing",c="active",u="."+c,f="fp-completely",d="."+f,v=".section",p="fp-section",h="."+p,g=h+u,m="fp-tableCell",S="."+m,b="fp-auto-height",w="fp-normal-scroll",y="fp-nav",E="#"+y,L="fp-tooltip",x="."+L,T="fp-show-active",A=".slide",k="fp-slide",M="."+k,O=M+u,C="fp-slides",H="."+C,I="fp-slidesContainer",R="."+I,B="fp-table",z="fp-slidesNav",N="."+z,j=N+" a",P="fp-controlArrow",D="."+P,V="fp-prev",Y=P+" "+V,U=D+("."+V),F="fp-next",W=P+" "+F,X=D+".fp-next";function _(t,n){e.console&&e.console[t]&&e.console[t]("fullPage: "+n)}function K(e,n){return(n=arguments.length>1?n:t)?n.querySelectorAll(e):null}function q(e){e=e||{};for(var t=1;t<arguments.length;t++){var n=arguments[t];if(n)for(var o in n)n.hasOwnProperty(o)&&("object"==typeof n[o]&&null!=n[o]?e[o]=q(e[o],n[o]):e[o]=n[o])}return e}function Q(e,t){return null!=e&&(e.classList?e.classList.contains(t):new RegExp("(^| )"+t+"( |$)","gi").test(e.className))}function G(){return"innerHeight"in e?e.innerHeight:t.documentElement.offsetHeight}function $(e,t){var n;for(n in e=re(e),t)if(t.hasOwnProperty(n)&&null!==n)for(var o=0;o<e.length;o++){e[o].style[n]=t[n]}return e}function J(e,t,n){for(var o=e[n];o&&!xe(o,t);)o=o[n];return o}function Z(e,t){return J(e,t,"previousElementSibling")}function ee(e,t){return J(e,t,"nextElementSibling")}function te(e){return e.previousElementSibling}function ne(e){return e.nextElementSibling}function oe(e){return e[e.length-1]}function ie(e,t){e=se(e)?e[0]:e;for(var n=null!=t?K(t,e.parentNode):e.parentNode.childNodes,o=0,i=0;i<n.length;i++){if(n[i]==e)return o;1==n[i].nodeType&&o++}return-1}function re(e){return se(e)?e:[e]}function le(e){e=re(e);for(var t=0;t<e.length;t++)e[t].style.display="none";return e}function ae(e){e=re(e);for(var t=0;t<e.length;t++)e[t].style.display="block";return e}function se(e){return"[object Array]"===Object.prototype.toString.call(e)||"[object NodeList]"===Object.prototype.toString.call(e)}function ce(e,t){e=re(e);for(var n=0;n<e.length;n++){var o=e[n];o.classList?o.classList.add(t):o.className+=" "+t}return e}function ue(e,t){e=re(e);for(var n=t.split(" "),o=0;o<n.length;o++){t=n[o];for(var i=0;i<e.length;i++){var r=e[i];r.classList?r.classList.remove(t):r.className=r.className.replace(new RegExp("(^|\\b)"+t.split(" ").join("|")+"(\\b|$)","gi")," ")}}return e}function fe(e,t){t.appendChild(e)}function de(e,n,o){var i;n=n||t.createElement("div");for(var r=0;r<e.length;r++){var l=e[r];(o&&!r||!o)&&(i=n.cloneNode(!0),l.parentNode.insertBefore(i,l)),i.appendChild(l)}return e}function ve(e,t){de(e,t,!0)}function pe(e,t){for("string"==typeof t&&(t=Ae(t)),e.appendChild(t);e.firstChild!==t;)t.appendChild(e.firstChild)}function he(e,t){return e&&1===e.nodeType?xe(e,t)?e:he(e.parentNode,t):null}function ge(e,t){Se(e,e.nextSibling,t)}function me(e,t){Se(e,e,t)}function Se(e,t,n){se(n)||("string"==typeof n&&(n=Ae(n)),n=[n]);for(var o=0;o<n.length;o++)e.parentNode.insertBefore(n[o],t)}function be(){var n=t.documentElement;return(e.pageYOffset||n.scrollTop)-(n.clientTop||0)}function we(e){return Array.prototype.filter.call(e.parentNode.children,function(t){return t!==e})}function ye(e){e.preventDefault?e.preventDefault():e.returnValue=!1}function Ee(e){if("function"==typeof e)return!0;var t=Object.prototype.toString(e);return"[object Function]"===t||"[object GeneratorFunction]"===t}function Le(n,o,i){var r;i=void 0===i?{}:i,"function"==typeof e.CustomEvent?r=new CustomEvent(o,{detail:i}):(r=t.createEvent("CustomEvent")).initCustomEvent(o,!0,!0,i),n.dispatchEvent(r)}function xe(e,t){return(e.matches||e.matchesSelector||e.msMatchesSelector||e.mozMatchesSelector||e.webkitMatchesSelector||e.oMatchesSelector).call(e,t)}function Te(e,t){if("boolean"==typeof t)for(var n=0;n<e.length;n++)e[n].style.display=t?"block":"none";return e}function Ae(e){var n=t.createElement("div");return n.innerHTML=e.trim(),n.firstChild}function ke(e){e=re(e);for(var t=0;t<e.length;t++){var n=e[t];n&&n.parentElement&&n.parentNode.removeChild(n)}}function Me(e,t,n){for(var o=e[n],i=[];o;)(xe(o,t)||null==t)&&i.push(o),o=o[n];return i}function Oe(e,t){return Me(e,t,"nextElementSibling")}function Ce(e,t){return Me(e,t,"previousElementSibling")}return e.NodeList&&!NodeList.prototype.forEach&&(NodeList.prototype.forEach=function(t,n){n=n||e;for(var o=0;o<this.length;o++)t.call(n,this[o],o,this)}),e.fp_utils={$:K,deepExtend:q,hasClass:Q,getWindowHeight:G,css:$,until:J,prevUntil:Z,nextUntil:ee,prev:te,next:ne,last:oe,index:ie,getList:re,hide:le,show:ae,isArrayOrList:se,addClass:ce,removeClass:ue,appendTo:fe,wrap:de,wrapAll:ve,wrapInner:pe,closest:he,after:ge,before:me,insertBefore:Se,getScrollTop:be,siblings:we,preventDefault:ye,isFunction:Ee,trigger:Le,matches:xe,toggle:Te,createElementFromHTML:Ae,remove:ke,filter:function(e,t){Array.prototype.filter.call(e,t)},untilAll:Me,nextAll:Oe,prevAll:Ce,showError:_},function(P,F){var J=F&&new RegExp("([\\d\\w]{8}-){3}[\\d\\w]{8}|OPEN-SOURCE-GPLV3-LICENSE").test(F.licenseKey)||t.domain.indexOf("alvarotrigo.com")>-1;if(!Q(K("html"),a)){var re=K("html, body"),se=K("body")[0],de={};F=q({menu:!1,anchors:[],lockAnchors:!1,navigation:!1,navigationPosition:"right",navigationTooltips:[],showActiveTooltip:!1,slidesNavigation:!1,slidesNavPosition:"bottom",scrollBar:!1,hybrid:!1,css3:!0,scrollingSpeed:700,autoScrolling:!0,fitToSection:!0,fitToSectionDelay:1e3,easing:"easeInOutCubic",easingcss3:"ease",loopBottom:!1,loopTop:!1,loopHorizontal:!0,continuousVertical:!1,continuousHorizontal:!1,scrollHorizontally:!1,interlockedSlides:!1,dragAndMove:!1,offsetSections:!1,resetSliders:!1,fadingEffect:!1,normalScrollElements:null,scrollOverflow:!1,scrollOverflowReset:!1,scrollOverflowHandler:e.fp_scrolloverflow?e.fp_scrolloverflow.iscrollHandler:null,scrollOverflowOptions:null,touchSensitivity:5,normalScrollElementTouchThreshold:5,bigSectionsDestination:null,keyboardScrolling:!0,animateAnchor:!0,recordHistory:!0,controlArrows:!0,controlArrowColor:"#fff",verticalCentered:!0,sectionsColor:[],paddingTop:0,paddingBottom:0,fixedElements:null,responsive:0,responsiveWidth:0,responsiveHeight:0,responsiveSlides:!1,parallax:!1,parallaxOptions:{type:"reveal",percentage:62,property:"translate"},sectionSelector:v,slideSelector:A,v2compatible:!1,afterLoad:null,onLeave:null,afterRender:null,afterResize:null,afterReBuild:null,afterSlideLoad:null,onSlideLeave:null,afterResponsive:null,lazyLoading:!0},F);var Se,Me,He,Ie,Re=!1,Be=navigator.userAgent.match(/(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/),ze="ontouchstart"in e||navigator.msMaxTouchPoints>0||navigator.maxTouchPoints,Ne="string"==typeof P?K(P)[0]:P,je=G(),Pe=!1,De=!0,Ve=!0,Ye=[],Ue={m:{up:!0,down:!0,left:!0,right:!0}};Ue.k=q({},Ue.m);var Fe,We,Xe,_e,Ke,qe,Qe,Ge,$e=e.PointerEvent?{down:"pointerdown",move:"pointermove"}:{down:"MSPointerDown",move:"MSPointerMove"},Je={touchmove:"ontouchmove"in e?"touchmove":$e.move,touchstart:"ontouchstart"in e?"touchstart":$e.down},Ze='a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]',et=q({},F);jn(),e.fp_easings=q(e.fp_easings,{easeInOutCubic:function(e,t,n,o){return(e/=o/2)<1?n/2*e*e*e+t:n/2*((e-=2)*e*e+2)+t}}),Ne&&(de.version="3.0.2",de.setAutoScrolling=ft,de.setRecordHistory=dt,de.setScrollingSpeed=vt,de.setFitToSection=pt,de.setLockAnchors=function(e){F.lockAnchors=e},de.setMouseWheelScrolling=ht,de.setAllowScrolling=gt,de.setKeyboardScrolling=St,de.moveSectionUp=bt,de.moveSectionDown=wt,de.silentMoveTo=yt,de.moveTo=Et,de.moveSlideRight=Lt,de.moveSlideLeft=xt,de.fitToSection=Bt,de.reBuild=Tt,de.setResponsive=At,de.getFullpageData=F,de.destroy=function(n){ft(!1,"internal"),gt(!0),mt(!1),St(!1),ce(Ne,l),clearTimeout(_e),clearTimeout(Xe),clearTimeout(We),clearTimeout(Ke),clearTimeout(qe),e.removeEventListener("scroll",Rt),e.removeEventListener("hashchange",on),e.removeEventListener("resize",hn),t.removeEventListener("keydown",ln),t.removeEventListener("keyup",an),["click","touchstart"].forEach(function(e){t.removeEventListener(e,kt)}),["mouseenter","touchstart","mouseleave","touchend"].forEach(function(e){t.removeEventListener(e,Ot,!0)}),clearTimeout(_e),clearTimeout(Xe),n&&(Rn(0),K("img[data-src], source[data-src], audio[data-src], iframe[data-src]",Ne).forEach(function(e){Gt(e,"src")}),K("img[data-srcset]").forEach(function(e){Gt(e,"srcset")}),ke(K(E+", "+N+", "+D)),$(K(h),{height:"","background-color":"",padding:""}),$(K(M),{width:""}),$(Ne,{height:"",position:"","-ms-touch-action":"","touch-action":""}),$(re,{overflow:"",height:""}),ue(K("html"),a),ue(se,i),se.className.split(/\s+/).forEach(function(e){0===e.indexOf(s)&&ue(se,e)}),K(h+", "+M).forEach(function(e){F.scrollOverflowHandler&&F.scrollOverflowHandler.remove(e),ue(e,B+" "+c+" "+f);var t=e.getAttribute("data-fp-styles");t&&e.setAttribute("style",e.getAttribute("data-fp-styles"))}),Sn(Ne),[S,R,H].forEach(function(e){K(e,Ne).forEach(function(e){e.outerHTML=e.innerHTML})}),$(Ne,{"-webkit-transition":"none",transition:"none"}),e.scrollTo(0,0),[p,k,I].forEach(function(e){ue(K("."+e),e)}))},de.getActiveSection=function(){return new Yn(K(g)[0])},de.getActiveSlide=function(){return Kt(K(O,K(g)[0])[0])},de.test={top:"0px",translate3d:"translate3d(0px, 0px, 0px)",translate3dH:function(){for(var e=[],t=0;t<K(F.sectionSelector,Ne).length;t++)e.push("translate3d(0px, 0px, 0px)");return e}(),left:function(){for(var e=[],t=0;t<K(F.sectionSelector,Ne).length;t++)e.push(0);return e}(),options:F,setAutoScrolling:ft},de.shared={afterRenderActions:It},e.fullpage_api=de,F.css3&&(F.css3=function(){var n,o=t.createElement("p"),i={webkitTransform:"-webkit-transform",OTransform:"-o-transform",msTransform:"-ms-transform",MozTransform:"-moz-transform",transform:"transform"};for(var r in o.style.display="block",t.body.insertBefore(o,null),i)void 0!==o.style[r]&&(o.style[r]="translate3d(1px,1px,1px)",n=e.getComputedStyle(o).getPropertyValue(i[r]));return t.body.removeChild(o),void 0!==n&&n.length>0&&"none"!==n}()),F.scrollBar=F.scrollBar||F.hybrid,function(){if(!F.anchors.length){var e="[data-anchor]",t=K(F.sectionSelector.split(",").join(e+",")+e,Ne);t.length&&t.forEach(function(e){F.anchors.push(e.getAttribute("data-anchor").toString())})}if(!F.navigationTooltips.length){var e="[data-tooltip]",n=K(F.sectionSelector.split(",").join(e+",")+e,Ne);n.length&&n.forEach(function(e){F.navigationTooltips.push(e.getAttribute("data-tooltip").toString())})}}(),function(){$(Ne,{height:"100%",position:"relative"}),ce(Ne,n),ce(K("html"),a),je=G(),ue(Ne,l),ce(K(F.sectionSelector,Ne),p),ce(K(F.slideSelector,Ne),k);for(var e=K(h),i=0;i<e.length;i++){var r=i,s=e[i],u=K(M,s),f=u.length;s.setAttribute("data-fp-styles",s.getAttribute("style")),m=s,(S=r)||null!=K(g)[0]||ce(m,c),Ie=K(g)[0],$(m,{height:je+"px"}),F.paddingTop&&$(m,{"padding-top":F.paddingTop}),F.paddingBottom&&$(m,{"padding-bottom":F.paddingBottom}),void 0!==F.sectionsColor[S]&&$(m,{"background-color":F.sectionsColor[S]}),void 0!==F.anchors[S]&&m.setAttribute("data-anchor",F.anchors[S]),d=s,v=r,void 0!==F.anchors[v]&&Q(d,c)&&bn(F.anchors[v],v),F.menu&&F.css3&&null!=he(K(F.menu)[0],o)&&se.appendChild(K(F.menu)[0]),f>0?Ct(s,u,f):F.verticalCentered&&yn(s)}var d,v,m,S;F.fixedElements&&F.css3&&K(F.fixedElements).forEach(function(e){se.appendChild(e)}),F.navigation&&function(){var e=t.createElement("div");e.setAttribute("id",y);var n=t.createElement("ul");e.appendChild(n),fe(e,se);var o=K(E)[0];ce(o,"fp-"+F.navigationPosition),F.showActiveTooltip&&ce(o,T);for(var i="",r=0;r<K(h).length;r++){var l="";F.anchors.length&&(l=F.anchors[r]),i+='<li><a href="#'+l+'"><span class="fp-sr-only">'+Ht(r,"Section")+"</span><span></span></a>";var a=F.navigationTooltips[r];void 0!==a&&""!==a&&(i+='<div class="'+L+" fp-"+F.navigationPosition+'">'+a+"</div>"),i+="</li>"}K("ul",o)[0].innerHTML=i,$(K(E),{"margin-top":"-"+K(E)[0].offsetHeight/2+"px"}),ce(K("a",K("li",K(E)[0])[ie(K(g)[0],h)]),c)}(),K('iframe[src*="youtube.com/embed/"]',Ne).forEach(function(e){var t,n,o;n="enablejsapi=1",o=(t=e).getAttribute("src"),t.setAttribute("src",o+(/\?/.test(o)?"&":"?")+n)}),F.scrollOverflow?Fe=F.scrollOverflowHandler.init(F):It()}(),gt(!0),mt(!0),ft(F.autoScrolling,"internal"),gn(),Cn(),"complete"===t.readyState&&nn(),e.addEventListener("load",nn),e.addEventListener("scroll",Rt),e.addEventListener("hashchange",on),e.addEventListener("blur",fn),e.addEventListener("resize",hn),t.addEventListener("keydown",ln),t.addEventListener("keyup",an),["click","touchstart"].forEach(function(e){t.addEventListener(e,kt)}),F.normalScrollElements&&(["mouseenter","touchstart"].forEach(function(e){Mt(e,!1)}),["mouseleave","touchend"].forEach(function(e){Mt(e,!0)})));var tt=!1,nt=0,ot=0,it=0,rt=0,lt=0,at=(new Date).getTime(),st=0,ct=0,ut=je;return de}function ft(e,t){e||Rn(0),Nn("autoScrolling",e,t);var n=K(g)[0];if(F.autoScrolling&&!F.scrollBar)$(re,{overflow:"hidden",height:"100%"}),dt(et.recordHistory,"internal"),$(Ne,{"-ms-touch-action":"none","touch-action":"none"}),null!=n&&Rn(n.offsetTop);else if($(re,{overflow:"visible",height:"initial"}),dt(!1,"internal"),$(Ne,{"-ms-touch-action":"","touch-action":""}),null!=n){var o=qt(n.offsetTop);o.element.scrollTo(0,o.options)}}function dt(e,t){Nn("recordHistory",e,t)}function vt(e,t){Nn("scrollingSpeed",e,t)}function pt(e,t){Nn("fitToSection",e,t)}function ht(n){n?(function(){var n,o="";e.addEventListener?n="addEventListener":(n="attachEvent",o="on");var i="onwheel"in t.createElement("div")?"wheel":void 0!==t.onmousewheel?"mousewheel":"DOMMouseScroll";"DOMMouseScroll"==i?t[n](o+"MozMousePixelScroll",Yt,!1):t[n](o+i,Yt,!1)}(),Ne.addEventListener("mousedown",sn),Ne.addEventListener("mouseup",cn)):(t.addEventListener?(t.removeEventListener("mousewheel",Yt,!1),t.removeEventListener("wheel",Yt,!1),t.removeEventListener("MozMousePixelScroll",Yt,!1)):t.detachEvent("onmousewheel",Yt),Ne.removeEventListener("mousedown",sn),Ne.removeEventListener("mouseup",cn))}function gt(e,t){void 0!==t?(t=t.replace(/ /g,"").split(",")).forEach(function(t){zn(e,t,"m")}):zn(e,"all","m")}function mt(e){e?(ht(!0),(Be||ze)&&(F.autoScrolling&&(se.removeEventListener(Je.touchmove,Nt,{passive:!1}),se.addEventListener(Je.touchmove,Nt,{passive:!1})),K(o)[0].removeEventListener(Je.touchstart,Dt),K(o)[0].removeEventListener(Je.touchmove,jt,{passive:!1}),K(o)[0].addEventListener(Je.touchstart,Dt),K(o)[0].addEventListener(Je.touchmove,jt,{passive:!1}))):(ht(!1),(Be||ze)&&(F.autoScrolling&&(se.removeEventListener(Je.touchmove,jt,{passive:!1}),se.removeEventListener(Je.touchmove,Nt,{passive:!1})),K(o)[0].removeEventListener(Je.touchstart,Dt),K(o)[0].removeEventListener(Je.touchmove,jt,{passive:!1})))}function St(e,t){void 0!==t?(t=t.replace(/ /g,"").split(",")).forEach(function(t){zn(e,t,"k")}):(zn(e,"all","k"),F.keyboardScrolling=e)}function bt(){var e=Z(K(g)[0],h);e||!F.loopTop&&!F.continuousVertical||(e=oe(K(h))),null!=e&&Wt(e,null,!0)}function wt(){var e=ee(K(g)[0],h);e||!F.loopBottom&&!F.continuousVertical||(e=K(h)[0]),null!=e&&Wt(e,null,!1)}function yt(e,t){vt(0,"internal"),Et(e,t),vt(et.scrollingSpeed,"internal")}function Et(e,t){var n=xn(e);void 0!==t?Tn(e,t):null!=n&&Wt(n)}function Lt(e){Ut("right",e)}function xt(e){Ut("left",e)}function Tt(t){if(!Q(Ne,l)){Pe=!0,je=G();for(var n=K(h),o=0;o<n.length;++o){var i=n[o],r=K(H,i)[0],a=K(M,i);F.verticalCentered&&$(K(S,i),{height:En(i)+"px"}),$(i,{height:je+"px"}),a.length>1&&vn(r,K(O,r)[0])}F.scrollOverflow&&Fe.createScrollBarForAll();var s=ie(K(g)[0],h);s&&yt(s+1),Pe=!1,Ee(F.afterResize)&&t&&F.afterResize.call(Ne,e.innerWidth,e.innerHeight),Ee(F.afterReBuild)&&!t&&F.afterReBuild.call(Ne)}}function At(e){var t=Q(se,i);e?t||(ft(!1,"internal"),pt(!1,"internal"),le(K(E)),ce(se,i),Ee(F.afterResponsive)&&F.afterResponsive.call(Ne,e)):t&&(ft(et.autoScrolling,"internal"),pt(et.autoScrolling,"internal"),ae(K(E)),ue(se,i),Ee(F.afterResponsive)&&F.afterResponsive.call(Ne,e))}function kt(e){var t=e.target;t&&he(t,E+" a")?function(e){ye(e);var t=ie(he(this,E+" li"));Wt(K(h)[t])}.call(t,e):xe(t,x)?function(){Le(te(this),"click")}.call(t):xe(t,D)?function(){var e=he(this,h);Q(this,V)?Ue.m.left&&xt(e):Ue.m.right&&Lt(e)}.call(t,e):(xe(t,j)||null!=he(t,j))&&function(e){ye(e);var t=K(H,he(this,h))[0],n=K(M,t)[ie(he(this,"li"))];vn(t,n)}.call(t,e)}function Mt(e,n){t["fp_"+e]=n,t.addEventListener(e,Ot,!0)}function Ot(e){e.target!=t&&F.normalScrollElements.split(",").forEach(function(n){xe(e.target,n)&&mt(t["fp_"+e.type])})}function Ct(e,n,o){var i=100*o,r=100/o,l=t.createElement("div");l.className=C,ve(n,l);var a,s,u=t.createElement("div");u.className=I,ve(n,u),$(K(R,e),{width:i+"%"}),o>1&&(F.controlArrows&&(a=e,s=[Ae('<div class="'+Y+'"></div>'),Ae('<div class="'+W+'"></div>')],ge(K(H,a)[0],s),"#fff"!==F.controlArrowColor&&($(K(X,a),{"border-color":"transparent transparent transparent "+F.controlArrowColor}),$(K(U,a),{"border-color":"transparent "+F.controlArrowColor+" transparent transparent"})),F.loopHorizontal||le(K(U,a))),F.slidesNavigation&&function(e,t){fe(Ae('<div class="'+z+'"><ul></ul></div>'),e);var n=K(N,e)[0];ce(n,"fp-"+F.slidesNavPosition);for(var o=0;o<t;o++)fe(Ae('<li><a href="#"><span class="fp-sr-only">'+Ht(o,"Slide")+"</span><span></span></a></li>"),K("ul",n)[0]);$(n,{"margin-left":"-"+n.innerWidth/2+"px"}),ce(K("a",K("li",n)[0]),c)}(e,o)),n.forEach(function(e){$(e,{width:r+"%"}),F.verticalCentered&&yn(e)});var f=K(O,e)[0];null!=f&&(0!==ie(K(g),h)||0===ie(K(g),h)&&0!==ie(f))?In(f,"internal"):ce(n[0],c)}function Ht(e,t){return F.navigationTooltips[e]||F.anchors[e]||t+" "+(e+1)}function It(){var e,t=K(g)[0];ce(t,f),$t(t),Jt(t),F.scrollOverflow&&F.scrollOverflowHandler.afterLoad(),(!(e=xn(rn().section))||void 0!==e&&ie(e)===ie(Ie))&&Ee(F.afterLoad)&&Xt("afterLoad",{activeSection:null,element:t,direction:null,anchorLink:t.getAttribute("data-anchor"),sectionIndex:ie(t,h)}),Ee(F.afterRender)&&Xt("afterRender")}function Rt(){var e,t,n,o,i,r;if(!F.autoScrolling||F.scrollBar){var l=be(),a=(n=(t=l)>nt?"down":"up",nt=t,st=t,n),s=0,u=l+G()/2,d=se.offsetHeight-G()===l,v=K(h);if(d)s=v.length-1;else if(l)for(var p=0;p<v.length;++p)v[p].offsetTop<=u&&(s=p);else s=0;if(o=a,i=K(g)[0].offsetTop,r=i+G(),("up"==o?r>=be()+G():i<=be())&&(Q(K(g)[0],f)||(ce(K(g)[0],f),ue(we(K(g)[0]),f))),!Q(e=v[s],c)){tt=!0;var m,S,b=K(g)[0],w=ie(b,h)+1,y=wn(e),E=e.getAttribute("data-anchor"),L=ie(e,h)+1,x=K(O,e)[0],T={activeSection:b,sectionIndex:L-1,anchorLink:E,element:e,leavingSection:w,direction:y};x&&(S=x.getAttribute("data-anchor"),m=ie(x)),Ve&&(ce(e,c),ue(we(e),c),Ee(F.onLeave)&&Xt("onLeave",T),Ee(F.afterLoad)&&Xt("afterLoad",T),en(b),$t(e),Jt(e),bn(E,L-1),F.anchors.length&&(Se=E),kn(m,S,E)),clearTimeout(Ke),Ke=setTimeout(function(){tt=!1},100)}F.fitToSection&&(clearTimeout(qe),qe=setTimeout(function(){F.fitToSection&&K(g)[0].offsetHeight<=je&&Bt()},F.fitToSectionDelay))}}function Bt(){Ve&&(Pe=!0,Wt(K(g)[0]),Pe=!1)}function zt(e){if(Ue.m[e]){var t="down"===e?wt:bt;if(F.scrollOverflow){var n=F.scrollOverflowHandler.scrollable(K(g)[0]),o="down"===e?"bottom":"top";if(null!=n){if(!F.scrollOverflowHandler.isScrolled(o,n))return!0;t()}else t()}else t()}}function Nt(e){F.autoScrolling&&Pt(e)&&ye(e)}function jt(t){var n=he(t.target,h);if(Pt(t)){F.autoScrolling&&ye(t);var o=Hn(t);rt=o.y,lt=o.x,K(H,n).length&&Math.abs(it-lt)>Math.abs(ot-rt)?!Re&&Math.abs(it-lt)>e.innerWidth/100*F.touchSensitivity&&(it>lt?Ue.m.right&&Lt(n):Ue.m.left&&xt(n)):F.autoScrolling&&Ve&&Math.abs(ot-rt)>e.innerHeight/100*F.touchSensitivity&&(ot>rt?zt("down"):rt>ot&&zt("up"))}}function Pt(e){return void 0===e.pointerType||"mouse"!=e.pointerType}function Dt(e){if(F.fitToSection&&(Ge=!1),Pt(e)){var t=Hn(e);ot=t.y,it=t.x}}function Vt(e,t){for(var n=0,o=e.slice(Math.max(e.length-t,1)),i=0;i<o.length;i++)n+=o[i];return Math.ceil(n/t)}function Yt(t){var n=(new Date).getTime(),o=Q(K(d)[0],w);if(!Ue.m.down&&!Ue.m.up)return ye(t),!1;if(F.autoScrolling&&!He&&!o){var i=(t=t||e.event).wheelDelta||-t.deltaY||-t.detail,r=Math.max(-1,Math.min(1,i)),l=void 0!==t.wheelDeltaX||void 0!==t.deltaX,a=Math.abs(t.wheelDeltaX)<Math.abs(t.wheelDelta)||Math.abs(t.deltaX)<Math.abs(t.deltaY)||!l;Ye.length>149&&Ye.shift(),Ye.push(Math.abs(i)),F.scrollBar&&ye(t);var s=n-at;return at=n,s>200&&(Ye=[]),Ve&&Vt(Ye,10)>=Vt(Ye,70)&&a&&zt(r<0?"down":"up"),!1}F.fitToSection&&(Ge=!1)}function Ut(e,t){var n=null==t?K(g)[0]:t,o=K(H,n)[0];if(!(null==o||Re||K(M,o).length<2)){var i=K(O,o)[0],r=null;if(null==(r="left"===e?Z(i,M):ee(i,M))){if(!F.loopHorizontal)return;var l=we(i);r="left"===e?l[l.length-1]:l[0]}Re=!de.test.isTesting,vn(o,r,e)}}function Ft(){for(var e=K(O),t=0;t<e.length;t++)In(e[t],"internal")}function Wt(e,t,n){if(null!=e){var o,i,r,l,a,s,u,f,d,v={element:e,callback:t,isMovementUp:n,dtop:(i=(o=e).offsetHeight,r=o.offsetTop,a=r>st,s=(l=r)-je+i,u=F.bigSectionsDestination,i>je?(a||u)&&"bottom"!==u||(l=s):(a||Pe&&null==ne(o))&&(l=s),st=l,l),yMovement:wn(e),anchorLink:e.getAttribute("data-anchor"),sectionIndex:ie(e,h),activeSlide:K(O,e)[0],activeSection:K(g)[0],leavingSection:ie(K(g),h)+1,localIsResizing:Pe};if(!(v.activeSection==e&&!Pe||F.scrollBar&&be()===v.dtop&&!Q(e,b))){if(null!=v.activeSlide&&(f=v.activeSlide.getAttribute("data-anchor"),d=ie(v.activeSlide)),Ee(F.onLeave)&&!v.localIsResizing){var p=v.yMovement;if(void 0!==n&&(p=n?"up":"down"),v.direction=p,!1===Xt("onLeave",v))return}F.autoScrolling&&F.continuousVertical&&void 0!==v.isMovementUp&&(!v.isMovementUp&&"up"==v.yMovement||v.isMovementUp&&"down"==v.yMovement)&&((m=v).isMovementUp?me(K(g)[0],Oe(m.activeSection,h)):ge(K(g)[0],Ce(m.activeSection,h).reverse()),Rn(K(g)[0].offsetTop),Ft(),m.wrapAroundElements=m.activeSection,m.dtop=m.element.offsetTop,m.yMovement=wn(m.element),m.leavingSection=ie(m.activeSection,h)+1,m.sectionIndex=ie(m.element,h),v=m),v.localIsResizing||en(v.activeSection),F.scrollOverflow&&F.scrollOverflowHandler.beforeLeave(),ce(e,c),ue(we(e),c),$t(e),F.scrollOverflow&&F.scrollOverflowHandler.onLeave(),Ve=de.test.isTesting,kn(d,f,v.anchorLink,v.sectionIndex),function(e){if(F.css3&&F.autoScrolling&&!F.scrollBar){var t="translate3d(0px, -"+Math.round(e.dtop)+"px, 0px)";Ln(t,!0),F.scrollingSpeed?(clearTimeout(Xe),Xe=setTimeout(function(){Qt(e)},F.scrollingSpeed)):Qt(e)}else{var n=qt(e.dtop);de.test.top=-e.dtop+"px",Pn(n.element,n.options,F.scrollingSpeed,function(){F.scrollBar?setTimeout(function(){Qt(e)},30):Qt(e)})}}(v),Se=v.anchorLink,bn(v.anchorLink,v.sectionIndex)}}var m}function Xt(e,t){var n,o,i,r,l=(o=e,i=t,(r=F.v2compatible?{afterRender:function(){return[Ne]},onLeave:function(){return[i.activeSection,i.leavingSection,i.sectionIndex+1,i.direction]},afterLoad:function(){return[i.element,i.anchorLink,i.sectionIndex+1]},afterSlideLoad:function(){return[i.destiny,i.anchorLink,i.sectionIndex+1,i.slideAnchor,i.slideIndex]},onSlideLeave:function(){return[i.prevSlide,i.anchorLink,i.sectionIndex+1,i.prevSlideIndex,i.direction,i.slideIndex]}}:{afterRender:function(){return{section:_t(K(g)[0]),slide:Kt(K(O,K(g)[0])[0])}},onLeave:function(){return{origin:_t(i.activeSection),destination:_t(i.element),direction:i.direction}},afterLoad:function(){return r.onLeave()},afterSlideLoad:function(){return{section:_t(i.section),origin:Kt(i.prevSlide),destination:Kt(i.destiny),direction:i.direction}},onSlideLeave:function(){return r.afterSlideLoad()}})[o]());if(F.v2compatible){if(!1===F[e].apply(l[0],l.slice(1)))return!1}else if(Le(Ne,e,l),!1===F[e].apply(l[Object.keys(l)[0]],(n=l,Object.keys(n).map(function(e){return n[e]}))))return!1;return!0}function _t(e){return e?new Yn(e):null}function Kt(e){return e?new function(e){Vn.call(this,e,M)}(e):null}function qt(t){var n={};return F.autoScrolling&&!F.scrollBar?(n.options=-t,n.element=K(o)[0]):(n.options=t,n.element=e),n}function Qt(e){var t;null!=(t=e).wrapAroundElements&&(t.isMovementUp?me(K(h)[0],t.wrapAroundElements):ge(K(h)[K(h).length-1],t.wrapAroundElements),Rn(K(g)[0].offsetTop),Ft()),Ee(F.afterLoad)&&!e.localIsResizing&&Xt("afterLoad",e),F.scrollOverflow&&F.scrollOverflowHandler.afterLoad(),e.localIsResizing||Jt(e.element),ce(e.element,f),ue(we(e.element),f),Ve=!0,Ee(e.callback)&&e.callback()}function Gt(e,t){e.setAttribute(t,e.getAttribute("data-"+t)),e.removeAttribute("data-"+t)}function $t(e){F.lazyLoading&&K("img[data-src], img[data-srcset], source[data-src], source[data-srcset], video[data-src], audio[data-src], iframe[data-src]",tn(e)).forEach(function(e){if(["src","srcset"].forEach(function(t){var n=e.getAttribute("data-"+t);null!=n&&n&&Gt(e,t)}),xe(e,"source")){var t=he(e,"video, audio");t&&t.load()}})}function Jt(e){var t=tn(e);K("video, audio",t).forEach(function(e){e.hasAttribute("data-autoplay")&&"function"==typeof e.play&&e.play()}),K('iframe[src*="youtube.com/embed/"]',t).forEach(function(e){e.hasAttribute("data-autoplay")&&Zt(e),e.onload=function(){e.hasAttribute("data-autoplay")&&Zt(e)}})}function Zt(e){e.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}',"*")}function en(e){var t=tn(e);K("video, audio",t).forEach(function(e){e.hasAttribute("data-keepplaying")||"function"!=typeof e.pause||e.pause()}),K('iframe[src*="youtube.com/embed/"]',t).forEach(function(e){/youtube\.com\/embed\//.test(e.getAttribute("src"))&&!e.hasAttribute("data-keepplaying")&&e.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}',"*")})}function tn(e){var t=K(O,e);return t.length&&(e=t[0]),e}function nn(){var e=rn(),t=e.section,n=e.slide;t&&(F.animateAnchor?Tn(t,n):yt(t,n))}function on(){if(!tt&&!F.lockAnchors){var e=rn(),t=e.section,n=e.slide,o=void 0===Se,i=void 0===Se&&void 0===n&&!Re;t&&t.length&&(t&&t!==Se&&!o||i||!Re&&Me!=n)&&Tn(t,n)}}function rn(){var t,n,o=e.location.hash;if(o.length){var i=o.replace("#","").split("/"),r=o.indexOf("#/")>-1;t=r?"/"+i[1]:decodeURIComponent(i[0]);var l=r?i[2]:i[1];l&&l.length&&(n=decodeURIComponent(l))}return{section:t,slide:n}}function ln(e){clearTimeout(Qe);var n=t.activeElement,o=e.keyCode;9===o?function(e){var n,o,i,r,l,a,s,c=e.shiftKey,u=t.activeElement,f=un(tn(K(g)[0]));function d(e){return ye(e),f[0]?f[0].focus():null}(n=e,o=un(t),i=o.indexOf(t.activeElement),r=n.shiftKey?i-1:i+1,l=o[r],a=Kt(he(l,M)),s=_t(he(l,h)),a||s)&&(u?null==he(u,g+","+g+" "+O)&&(u=d(e)):d(e),(!c&&u==f[f.length-1]||c&&u==f[0])&&ye(e))}(e):xe(n,"textarea")||xe(n,"input")||xe(n,"select")||"true"===n.getAttribute("contentEditable")||""===n.getAttribute("contentEditable")||!F.keyboardScrolling||!F.autoScrolling||([40,38,32,33,34].indexOf(o)>-1&&ye(e),He=e.ctrlKey,Qe=setTimeout(function(){!function(e){var t=e.shiftKey;if(Ve||!([37,39].indexOf(e.keyCode)<0))switch(e.keyCode){case 38:case 33:Ue.k.up&&bt();break;case 32:if(t&&Ue.k.up){bt();break}case 40:case 34:Ue.k.down&&wt();break;case 36:Ue.k.up&&Et(1);break;case 35:Ue.k.down&&Et(K(h).length);break;case 37:Ue.k.left&&xt();break;case 39:Ue.k.right&&Lt()}}(e)},150))}function an(e){De&&(He=e.ctrlKey)}function sn(e){2==e.which&&(ct=e.pageY,Ne.addEventListener("mousemove",dn))}function cn(e){2==e.which&&Ne.removeEventListener("mousemove",dn)}function un(e){return[].slice.call(K(Ze,e)).filter(function(e){return"-1"!==e.getAttribute("tabindex")&&null!==e.offsetParent})}function fn(){De=!1,He=!1}function dn(e){Ve&&(e.pageY<ct&&Ue.m.up?bt():e.pageY>ct&&Ue.m.down&&wt()),ct=e.pageY}function vn(e,t,n){var o,i,r=he(e,h),l={slides:e,destiny:t,direction:n,destinyPos:{left:t.offsetLeft},slideIndex:ie(t),section:r,sectionIndex:ie(r,h),anchorLink:r.getAttribute("data-anchor"),slidesNav:K(N,r)[0],slideAnchor:On(t),prevSlide:K(O,r)[0],prevSlideIndex:ie(K(O,r)[0]),localIsResizing:Pe};l.xMovement=(o=l.prevSlideIndex,i=l.slideIndex,o==i?"none":o>i?"left":"right"),l.localIsResizing||(Ve=!1),F.onSlideLeave&&!l.localIsResizing&&"none"!==l.xMovement&&Ee(F.onSlideLeave)&&!1===Xt("onSlideLeave",l)?Re=!1:(ce(t,c),ue(we(t),c),l.localIsResizing||(en(l.prevSlide),$t(t)),!F.loopHorizontal&&F.controlArrows&&(Te(K(U,r),0!==l.slideIndex),Te(K(X,r),null!=ne(t))),Q(r,c)&&!l.localIsResizing&&kn(l.slideIndex,l.slideAnchor,l.anchorLink,l.sectionIndex),function(e,t,n){var o=t.destinyPos;if(F.css3){var i="translate3d(-"+Math.round(o.left)+"px, 0px, 0px)";de.test.translate3dH[t.sectionIndex]=i,$(mn(K(R,e)),Bn(i)),_e=setTimeout(function(){n&&pn(t)},F.scrollingSpeed)}else de.test.left[t.sectionIndex]=Math.round(o.left),Pn(e,Math.round(o.left),F.scrollingSpeed,function(){n&&pn(t)})}(e,l,!0))}function pn(e){var t,n;t=e.slidesNav,n=e.slideIndex,F.slidesNavigation&&null!=t&&(ue(K(u,t),c),ce(K("a",K("li",t)[n]),c)),e.localIsResizing||(Ee(F.afterSlideLoad)&&Xt("afterSlideLoad",e),Ve=!0,Jt(e.destiny)),Re=!1}function hn(){if(gn(),Be){var e=t.activeElement;if(!xe(e,"textarea")&&!xe(e,"input")&&!xe(e,"select")){var n=G();Math.abs(n-ut)>20*Math.max(ut,n)/100&&(Tt(!0),ut=n)}}else clearTimeout(We),We=setTimeout(function(){Tt(!0)},350)}function gn(){var t=F.responsive||F.responsiveWidth,n=F.responsiveHeight,o=t&&e.innerWidth<t,i=n&&e.innerHeight<n;t&&n?At(o||i):t?At(o):n&&At(i)}function mn(e){var t="all "+F.scrollingSpeed+"ms "+F.easingcss3;return ue(e,r),$(e,{"-webkit-transition":t,transition:t})}function Sn(e){return ce(e,r)}function bn(e,t){var n,o,i,r;n=e,o=K(F.menu)[0],F.menu&&null!=o&&(ue(K(u,o),c),ce(K('[data-menuanchor="'+n+'"]',o),c)),i=e,r=t,F.navigation&&null!=K(E)[0]&&(ue(K(u,K(E)[0]),c),ce(i?K('a[href="#'+i+'"]',K(E)[0]):K("a",K("li",K(E)[0])[r]),c))}function wn(e){var t=ie(K(g)[0],h),n=ie(e,h);return t==n?"none":t>n?"up":"down"}function yn(e){if(!Q(e,B)){var n=t.createElement("div");n.className=m,n.style.height=En(e)+"px",ce(e,B),pe(e,n)}}function En(e){var t=je;if(F.paddingTop||F.paddingBottom){var n=e;Q(n,p)||(n=he(e,h));var o=parseInt(getComputedStyle(n)["padding-top"])+parseInt(getComputedStyle(n)["padding-bottom"]);t=je-o}return t}function Ln(e,t){t?mn(Ne):Sn(Ne),$(Ne,Bn(e)),de.test.translate3d=e,setTimeout(function(){ue(Ne,r)},10)}function xn(e){var t=K(h+'[data-anchor="'+e+'"]',Ne)[0];if(!t){var n=void 0!==e?e-1:0;t=K(h)[n]}return t}function Tn(e,t){var n=xn(e);if(null!=n){var o,i,r,l=(null==(r=K(M+'[data-anchor="'+(o=t)+'"]',i=n)[0])&&(o=void 0!==o?o:0,r=K(M,i)[o]),r);On(n)===Se||Q(n,c)?An(l):Wt(n,function(){An(l)})}}function An(e){null!=e&&vn(he(e,H),e)}function kn(e,t,n,o){var i="";F.anchors.length&&!F.lockAnchors&&(e?(null!=n&&(i=n),null==t&&(t=e),Me=t,Mn(i+"/"+t)):null!=e?(Me=t,Mn(n)):Mn(n)),Cn()}function Mn(t){if(F.recordHistory)location.hash=t;else if(Be||ze)e.history.replaceState(void 0,void 0,"#"+t);else{var n=e.location.href.split("#")[0];e.location.replace(n+"#"+t)}}function On(e){if(!e)return null;var t=e.getAttribute("data-anchor"),n=ie(e);return null==t&&(t=n),t}function Cn(){var e=K(g)[0],t=K(O,e)[0],n=On(e),o=On(t),i=String(n);t&&(i=i+"-"+o),i=i.replace("/","-").replace("#","");var r=new RegExp("\\b\\s?"+s+"-[^\\s]+\\b","g");se.className=se.className.replace(r,""),ce(se,s+"-"+i)}function Hn(e){var t=[];return t.y=void 0!==e.pageY&&(e.pageY||e.pageX)?e.pageY:e.touches[0].pageY,t.x=void 0!==e.pageX&&(e.pageY||e.pageX)?e.pageX:e.touches[0].pageX,ze&&Pt(e)&&F.scrollBar&&void 0!==e.touches&&(t.y=e.touches[0].pageY,t.x=e.touches[0].pageX),t}function In(e,t){vt(0,"internal"),void 0!==t&&(Pe=!0),vn(he(e,H),e),void 0!==t&&(Pe=!1),vt(et.scrollingSpeed,"internal")}function Rn(e){var t=Math.round(e);if(F.css3&&F.autoScrolling&&!F.scrollBar)Ln("translate3d(0px, -"+t+"px, 0px)",!1);else if(F.autoScrolling&&!F.scrollBar)$(Ne,{top:-t+"px"}),de.test.top=-t+"px";else{var n=qt(t);Dn(n.element,n.options)}}function Bn(e){return{"-webkit-transform":e,"-moz-transform":e,"-ms-transform":e,transform:e}}function zn(e,t,n){"all"!==t?Ue[n][t]=e:Object.keys(Ue[n]).forEach(function(t){Ue[n][t]=e})}function Nn(e,t,n){F[e]=t,"internal"!==n&&(et[e]=t)}function jn(){J||(_("error","Fullpage.js version 3 has changed its license to GPLv3 and it requires a `licenseKey` option. Read about it here:"),_("error","https://github.com/alvarotrigo/fullPage.js#options.")),Q(K("html"),a)?_("error","Fullpage.js can only be initialized once and you are doing it multiple times!"):(F.continuousVertical&&(F.loopTop||F.loopBottom)&&(F.continuousVertical=!1,_("warn","Option `loopTop/loopBottom` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled")),!F.scrollOverflow||!F.scrollBar&&F.autoScrolling||_("warn","Options scrollBar:true and autoScrolling:false are mutually exclusive with scrollOverflow:true. Sections with scrollOverflow might not work well in Firefox"),!F.continuousVertical||!F.scrollBar&&F.autoScrolling||(F.continuousVertical=!1,_("warn","Scroll bars (`scrollBar:true` or `autoScrolling:false`) are mutually exclusive with `continuousVertical`; `continuousVertical` disabled")),F.scrollOverflow&&null==F.scrollOverflowHandler&&(F.scrollOverflow=!1,_("error","The option `scrollOverflow:true` requires the file `scrolloverflow.min.js`. Please include it before fullPage.js.")),["fadingEffect","continuousHorizontal","scrollHorizontally","interlockedSlides","resetSliders","responsiveSlides","offsetSections","dragAndMove","scrollOverflowReset","parallax"].forEach(function(e){F[e]&&_("warn","fullpage.js extensions require fullpage.extensions.min.js file instead of the usual fullpage.js. Requested: "+e)}),F.anchors.forEach(function(e){var t=[].slice.call(K("[name]")).filter(function(t){return t.getAttribute("name")&&t.getAttribute("name").toLowerCase()==e.toLowerCase()}),n=[].slice.call(K("[id]")).filter(function(t){return t.getAttribute("id")&&t.getAttribute("id").toLowerCase()==e.toLowerCase()});(n.length||t.length)&&(_("error","data-anchor tags can not have the same value as any `id` element on the site (or `name` element for IE)."),n.length&&_("error",'"'+e+'" is is being used by another element `id` property'),t.length&&_("error",'"'+e+'" is is being used by another element `name` property'))}))}function Pn(t,n,o,i){var r,l=(r=t).self!=e&&Q(r,C)?r.scrollLeft:!F.autoScrolling||F.scrollBar?be():r.offsetTop,a=n-l,s=0;Ge=!0;var c=function(){if(Ge){var r=n;s+=20,o&&(r=e.fp_easings[F.easing](s,l,a,o)),Dn(t,r),s<o?setTimeout(c,20):void 0!==i&&i()}else s<o&&i()};c()}function Dn(t,n){!F.autoScrolling||F.scrollBar||t.self!=e&&Q(t,C)?t.self!=e&&Q(t,C)?t.scrollLeft=n:t.scrollTo(0,n):t.style.top=n+"px"}function Vn(e,t){this.anchor=e.getAttribute("data-anchor"),this.item=e,this.index=ie(e,t),this.isLast=this.index===K(t).length-1,this.isFirst=!this.index}function Yn(e){Vn.call(this,e,h)}jn()}}),window.jQuery&&window.fullpage&&function(e,t){"use strict";e&&t?e.fn.fullpage=function(n){var o=new t("#"+e(this).attr("id"),n);Object.keys(o).forEach(function(t){e.fn.fullpage[t]=o[t]})}:window.fp_utils.showError("error","jQuery is required to use the jQuery fullpage adapter!")}(window.jQuery,window.fullpage);
//# sourceMappingURL=fullpage.min.js.map

// function format(valeur, decimal, separateur) {
//
//     if(valeur) {
//         var re = /[0-9]+([.,][0-9]+)?/g;
//         valeur = re.exec(valeur)[0];
//
//         var deci=Math.round( Math.pow(10,decimal)*(Math.abs(valeur)-Math.floor(Math.abs(valeur)))) ;
//         var val=Math.floor(Math.abs(valeur));
//         if ((decimal==0)||(deci==Math.pow(10,decimal))) {val=Math.floor(Math.abs(valeur)); deci=0;}
//         var val_format=val+"";
//         var nb=val_format.length;
//         for (var i=1;i<4;i++) {
//             if (val>=Math.pow(10,(3*i))) {
//                 val_format=val_format.substring(0,nb-(3*i))+" "+val_format.substring(nb-(3*i));
//             }
//         }
//         if (decimal>0) {
//             var decim="";
//             for (var j=0;j<(decimal-deci.toString().length);j++) {decim+="0";}
//             deci=decim+deci.toString();
//             val_format=val_format+"."+deci;
//         }
//         if (parseFloat(valeur)<0) {val_format="-"+val_format;}
//         return val_format;
//     }
//
// }
(function ($) {
    // var player;
    // var player2;
   var video = $('#player01').children('video');
    var video2 = $('#player2').children('video');
  //  var videoElement = video.get(0);



    function detect_size() {
       // if(($(window).width() < 1024) || ($(window).height() < 651)){
        if(($(window).width() < 1024)){
            $('body').addClass('sect_wrapper');
            console.log('mobile');
            $('#fullpage').removeClass('desc');
        }
        else{
            function readyYoutube(){
                if((typeof YT !== "undefined") && YT && YT.Player){
                    player = new YT.Player('player', {
                        videoId: 'X_jUIzYAGF4',
                        host: 'http://www.youtube.com',
                        playerVars: {
                            mute: 1,
                            autoplay: 0,
                            loop: 1,
                            controls: 0,
                            showinfo: 0,
                            autohide: 0,
                            enablejsapi: 1,
                            modestbranding: 1,
                            playlist: 'X_jUIzYAGF4',
                            vq: 'hd1080'
                        },
                        events: {
                            // 'onReady': onPlayerReady,
                            'onStateChange': onPlayerStateChange
                            //         }
                        },
                        allowfullscreen: 1
                    });
                }else{
                    //console.log('ololo');
                    setTimeout(readyYoutube, 100);
                }
            }
            readyYoutube();
            $('body').removeClass('sect_wrapper');
            if(!$('#fullpage').hasClass('desc')){
                $('#fullpage').addClass('desc');
            }
            console.log('desc');
        }
        if(($(window).width() < 801) || ($('.sect_wrapper').length)){
            if(!$('#b_solution .flex-wrapper').hasClass('owl-carousel')){
                $('#b_solution .flex-wrapper').addClass('owl-carousel').owlCarousel({
                    loop: false,
                    nav: false,
                    dots:true,
                    items:1
                });
            }
        }else{
            $('#b_solution .flex-wrapper').owlCarousel('destroy');
            $('#b_solution .flex-wrapper').removeClass('owl-carousel');
        }
    }

    //function onPlayerReady(event) {
       //  console.log('ready');
       //
       // // player.unmute();
       //  player.playVideo();


  //  }
    function onPlayerStateChange(event) {
        if(event.data == YT.PlayerState.ENDED) {
            $('.background-video').removeClass('active');
            player.mute();
            player.stopVideo();
           // $('#player01').css('visibility','visible');
           // $('#player01').show();
            $('#player0').removeClass('active');

            // player.playVideo();
            $.fn.fullpage.setAllowScrolling(true);
        }
    }

    $(window).resize(function() {
        detect_size();
    });


    $(document).ready(function () {

        detect_size();

        // if (!videoElement.paused) {
        //     videoElement.play;
        // }

        // autoplay video



        $('.fp_pop_btn').on('click',function () {
            if($('#fullpage').length){
                $.fn.fullpage.setAllowScrolling(false);
                $('.fp_popup').addClass('active');
                $('#message').focus();
                $('#fp-nav').addClass('hidden')
            }else{
                $('body').addClass('oh');
            }


            $('.fp_popup').on('mousewheel DOMMouseScroll', function(e) {
                var scrollTo = null;
                if (e.type == 'mousewheel') {
                    scrollTo = (e.originalEvent.wheelDelta * -1);
                }
                else if (e.type == 'DOMMouseScroll') {
                    scrollTo = 40 * e.originalEvent.detail;
                }

                if (scrollTo) {
                    e.preventDefault();
                    $(this).find('.container').scrollTop(scrollTo + $(this).find('.container').scrollTop());
                }
            });

            //rebuild for close btn
            // $('.owl-reviews').owlCarousel('destroy');
            // console.log('destroy');
            // setTimeout(function () {
            //     $('.owl-reviews').owlCarousel({
            //         loop: true,
            //         nav: true,
            //         dots:false,
            //         navText: [ '<i class="fal fa-angle-left"></i>','<i class="fal fa-angle-right"></i>' ],
            //         responsive: {
            //             0: {
            //                 items:1
            //             },
            //             420: {
            //                 items:1,
            //                 stagePadding:30
            //             },
            //             720: {
            //                 items: 2
            //             },
            //             1200: {
            //                 items: 3
            //             }
            //
            //         }
            //     });
            // },3000)
        });
        $('.fp_close').on('click',function () {
            //rebuild for close btn
            $('.owl-reviews').owlCarousel('destroy');
            $('.owl-reviews').owlCarousel({
                loop: true,
                nav: true,
                dots:false,

                navText: [ '<i class="fa fa-angle-right"></i>','<i class="fa fa-angle-left"></i>' ],
                responsive: {
                    0: {
                        items:1,
                        slideBy: 1
                    },
                    420: {
                        items:1,
                        stagePadding:30,
                        slideBy: 1
                    },
                    720: {
                        items: 2,
                        slideBy: 2
                    },
                    1200: {
                        items: 3,
                        slideBy: 3
                    }

                }
            });
            if($('#fullpage').length){
                $.fn.fullpage.setAllowScrolling(true);
                console.log('fp - true');
                $('#fp-nav').removeClass('hidden')
                $('.fp_popup').removeClass('active');
            }else{
                $('body').removeClass('oh');
            }

        });

        //activate fullpage
        $('#fullpage').fullpage({
            //options here
            responsiveWidth:1024,
            responsiveHeight:651,
            css3:true,
            navigation: true,
            navigationPosition: 'right',
            //autoScrolling:true,
            //scrollHorizontally: true,
            //parallax:true,
            licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
            //scrollOverflow: false,
            //if enable anchors - change anchors in html
            anchors: ['header', 'probleme', 'solution', 'vosmots', 'soutien', 'auteuil'],
            // menu:'#dot_menu',
            normalScrollElements :'#llegales',
            afterRender: function(){
                $('#myVideo')[0].play();
                $('#myVideo2')[0].play();
                //dataLayer.push({'event':'LP-Marie-arrive-ecran-1','eventGroup':'ecran','eventAction':'arrive'});
		gtag('event', 'LP-Marie-arrive-ecran-1', { event_category: 'ecran', event_label: 'arrive', value: '1' });
            },
            // afterLoad: function(destination){
            //     var destination = destination;
            //     console.log(destination.index);
            //     // switch (destination) {
            //     //     case 0: console.log('header');
            //     //     case 1: console.log('sec');
            //     //     case 2:
            //     //     case 3:
            //     //     case 4:
            //     //     case 5:
            //     // }
            // },
            onLeave: function(origin, destination, direction) {
                var leavingSection = this;
                //after leaving section 1 to 2
                if (origin.index == 0 && direction == 'down') {
                    // $('.h_overlay').show();
                    setTimeout(function () {
                        //  console.log('animate');
                        $('#anim-11,#anim-22,#anim-33,#anim-44').addClass('animated');

                    },100);
                    setTimeout(function() {
                        //dataLayer.push({'event':'LP-Marie-passe-ecran-1','eventGroup':'ecran','eventAction':'passe'});
			gtag('event', 'LP-Marie-passe-ecran-1', { event_category: 'ecran', event_label: 'passe', value: '1' });
                    }, 5000);
                }
                //after leaving section 2 to 1
                if (origin.index == 1 && direction == 'up') {
                    //dataLayer.push({'event':'LP-Marie-arrive-ecran-1','eventGroup':'ecran','eventAction':'arrive'});
		    gtag('event', 'LP-Marie-arrive-ecran-1', { event_category: 'ecran', event_label: 'arrive', value: '1' });
                    setTimeout(function () {
                        $('.h_overlay').hide();
                    },100);
                    setTimeout(function() {
                        //dataLayer.push({'event':'LP-Marie-passe-ecran-2','eventGroup':'ecran','eventAction':'passe'});
			gtag('event', 'LP-Marie-passe-ecran-2', { event_category: 'ecran', event_label: 'passe', value: '1' });
                    }, 5000);
                    //  console.log(video);
                    // if (!videoElement.paused) {
                    //     videoElement.play;
                    // }
                    $('#myVideo')[0].play()

                    //  player.playVideo(); // restart player
                }
                //after leaving section 2 to 3
                if (origin.index == 1 && direction == 'down') {
                    //dataLayer.push({'event':'LP-Marie-arrive-ecran-3','eventGroup':'ecran','eventAction':'arrive'});
		    gtag('event', 'LP-Marie-arrive-ecran-3', { event_category: 'ecran', event_label: 'arrive', value: '1' });
                    setTimeout(function() {
                        //dataLayer.push({'event':'LP-Marie-passe-ecran-2','eventGroup':'ecran','eventAction':'passe'});
			gtag('event', 'LP-Marie-passe-ecran-2', { event_category: 'ecran', event_label: 'passe', value: '1' });
                    }, 5000);
                }
                //after leaving section 3 to 2
                if (origin.index == 2 && direction == 'up') {
                    //dataLayer.push({'event':'LP-Marie-arrive-ecran-2','eventGroup':'ecran','eventAction':'arrive'});
		     gtag('event', 'LP-Marie-arrive-ecran-2', { event_category: 'ecran', event_label: 'arrive', value: '1' });
                    setTimeout(function() {
                        //dataLayer.push({'event':'LP-Marie-passe-ecran-3','eventGroup':'ecran','eventAction':'passe'});
			gtag('event', 'LP-Marie-passe-ecran-3', { event_category: 'ecran', event_label: 'passe', value: '1' });
                    }, 5000);
                }
                //after leaving section 3 to 4
                if (origin.index == 2 && direction == 'down') {
                    //dataLayer.push({'event':'LP-Marie-arrive-ecran-4','eventGroup':'ecran','eventAction':'arrive'});
		    gtag('event', 'LP-Marie-arrive-ecran-4', { event_category: 'ecran', event_label: 'arrive', value: '1' });
                    setTimeout(function () {
                        $('#anim-111,#anim-222,#anim-333,#anim-444,#anim-555,#anim-666,#anim-777,#anim-888,#anim-999,#anim-100,#anim-110').addClass('animated');

                    },100);
                    setTimeout(function() {
                        //dataLayer.push({'event':'LP-Marie-passe-ecran-3','eventGroup':'ecran','eventAction':'passe'});
			gtag('event', 'LP-Marie-passe-ecran-3', { event_category: 'ecran', event_label: 'passe', value: '1' });
                    }, 5000);
                }
                //after leaving section 4 to 3
                if (origin.index == 3 && direction == 'up') {
                    //dataLayer.push({'event':'LP-Marie-arrive-ecran-3','eventGroup':'ecran','eventAction':'arrive'});
		    gtag('event', 'LP-Marie-arrive-ecran-3', { event_category: 'ecran', event_label: 'arrive', value: '1' });
                    setTimeout(function() {
                        //dataLayer.push({'event':'LP-Marie-passe-ecran-4','eventGroup':'ecran','eventAction':'passe'});
			gtag('event', 'LP-Marie-passe-ecran-4', { event_category: 'ecran', event_label: 'passe', value: '1' });
                    }, 5000);
                }
                //after leaving section 4 to 5
                if (origin.index == 3 && direction == 'down') {
                    //dataLayer.push({'event':'LP-Marie-arrive-ecran-5','eventGroup':'ecran','eventAction':'arrive'});
		    gtag('event', 'LP-Marie-arrive-ecran-5', { event_category: 'ecran', event_label: 'arrive', value: '1' });
                    setTimeout(function() {
                        //dataLayer.push({'event':'LP-Marie-passe-ecran-4','eventGroup':'ecran','eventAction':'passe'});
			gtag('event', 'LP-Marie-passe-ecran-4', { event_category: 'ecran', event_label: 'passe', value: '1' });
                    }, 5000);
                }
                //after leaving section 5 to 4
                if (origin.index == 4 && direction == 'up') {
                    //dataLayer.push({'event':'LP-Marie-arrive-ecran-4','eventGroup':'ecran','eventAction':'arrive'});
		    gtag('event', 'LP-Marie-arrive-ecran-4', { event_category: 'ecran', event_label: 'arrive', value: '1' });
                    setTimeout(function () {
                        // console.log('animate');
                        $('#anim-111,#anim-222,#anim-333,#anim-444,#anim-555,#anim-666,#anim-777,#anim-888,#anim-999,#anim-100,#anim-110').addClass('animated');

                    },100);
                    setTimeout(function() {
                        //dataLayer.push({'event':'LP-Marie-passe-ecran-5','eventGroup':'ecran','eventAction':'passe'});
			gtag('event', 'LP-Marie-passe-ecran-5', { event_category: 'ecran', event_label: 'passe', value: '1' });
                    }, 5000);
                }
                //after leaving section 5 to 6
                if (origin.index == 4 && direction == 'down') {
                    //dataLayer.push({'event':'LP-Marie-arrive-ecran-5','eventGroup':'ecran','eventAction':'arrive'});
		    gtag('event', 'LP-Marie-arrive-ecran-5', { event_category: 'ecran', event_label: 'arrive', value: '1' });
                    setTimeout(function () {
                        $('.h_overlay').hide();
                    },100);

                    $('#myVideo2')[0].play()
                    setTimeout(function() {
                        //dataLayer.push({'event':'LP-Marie-passe-ecran-6','eventGroup':'ecran','eventAction':'passe'});
			gtag('event', 'LP-Marie-passe-ecran-6', { event_category: 'ecran', event_label: 'passe', value: '1' });
                    }, 5000);
                }
                //after leaving section 6 to 5
                if (origin.index == 5 && direction == 'up') {
                    //dataLayer.push({'event':'LP-Marie-arrive-ecran-6','eventGroup':'ecran','eventAction':'arrive'});
		    gtag('event', 'LP-Marie-arrive-ecran-6', { event_category: 'ecran', event_label: 'arrive', value: '1' });
                    setTimeout(function() {
                        //dataLayer.push({'event':'LP-Marie-passe-ecran-5','eventGroup':'ecran','eventAction':'passe'});
			gtag('event', 'LP-Marie-passe-ecran-5', { event_category: 'ecran', event_label: 'passe', value: '1' });
                    }, 5000);
                }

            }
        });

        // setTimeout(function () {
        //     $('.onload').removeClass('onload');
        // },500);
       


        $('.white_btn').on('click',function () {
            console.log('go_to 3');
           // $.fn.fullpage.silentMoveTo('solution', 2);
            $.fn.fullpage.moveTo(3);
        });


        $('.owl-reviews').owlCarousel({
            loop: true,
            nav: true,
            dots:false,

            navText: [ '<i class="fa fa-angle-right"></i>','<i class="fa fa-angle-left"></i>' ],
            responsive: {
                0: {
                    items:1,
                    slideBy: 1
                },
                420: {
                    items:1,
                    stagePadding:30,
                    slideBy: 1
                },
                720: {
                    items: 2,
                    slideBy: 2
                },
                1200: {
                    items: 3,
                    slideBy: 3
                }

            }
        });


        var sout_link = $('.sout_btn').attr('href');
        var price = '&amount='+(parseInt($('input[name="price"]:checked').val())*100);
        $('.sout_btn').attr('href',sout_link+price);

        $('input[name="price"]').on('change',function () {
            var price = (parseInt($(this).val())*100);
            price = '&amount='+price;
            $('.sout_btn').attr('href',sout_link+price);
            console.log($('.sout_btn').attr('href'));
        });

        $('.radio.custom .indication').on('click',function () {
            $('#custom_price').focus();
        });

        $('#custom_price').click(function(){
            $('#radio4').trigger('click');
        });

        $.event.special.inputchange = {
            setup: function() {
                var self = this, val;
                $.data(this, 'timer', window.setInterval(function() {
                    val = self.value;
                    if ( $.data( self, 'cache') != val ) {
                        $.data( self, 'cache', val );
                        $( self ).trigger( 'inputchange' );
                    }
                }, 20));
            },
            teardown: function() {
                window.clearInterval( $.data(this, 'timer') );
            },
            add: function() {
                $.data(this, 'cache', this.value);
            }
        };


        $('#custom_price').on('inputchange',function () {
            var x = $(this).val();
            // console.log(format(x));
            x =  x.replace(/\s+/g, '');
            if ( x.length > 0){
                var customPrecent = (parseInt(x)/4).toFixed(2);
                if( parseInt(x) > 546 ){
                    var a = 546 * 0.75,
                        b = ( parseInt(x) - 546 ) * 0.66;

                    customPrecent = ( parseInt(x) - ( a + b ) ).toFixed(2);
                }
                $('.custom_percent').text(customPrecent);
                $('.after_custom').addClass('active');
                price = '&amount='+parseInt(x)*100;
                $('.sout_btn').attr('href',sout_link+price);
                x = x.replace(/[^\d]/g, '');
                //  x = x.replace(/^\$(\d{1,3}(\,\d{3})*|(\d+))(\.\d{2})?$/, '');
                //   x = x.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
                //x = x.replace(/[0-9]{1,3}([,]{0,1})?([0-9]{0,3})?([,]{0,1})?([0-9]{0,3})?(\.[0-9]{2})?$/, '$1 ');
                x = x.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
                //   x = x.replace(/([^0-9.])+/g, '');
                //   consol.log(x.)

                $(this).val(x);
            }else{
                $('.after_custom').removeClass('active');
            }
        });

        $('body').on('change','#message',function () {
            console.log('ta change');
            if (!$.trim($("#message").val())) {
                $('#message').removeClass('used');
            } else{
                $('#message').addClass('used');
            }
        });


        $('body').on('click','.video_btn', function () {
            $('.background-video').addClass('active');
            $('#site_header').fadeOut('slow');
           //$('#player01').hide();
           // $('#player01').css('visibility','hidden');
            $('#player').addClass('active');
            // $('#player01')[0].hide();
            // $('#player').show();
            // if( $("#myVideo").prop('muted', true) ){
            //     $("#myVideo").prop('muted', false);
            //     console.log('unmute')
            // }
            // $('#myVideo')[0].play();
            // player.stopVideo();

            player.playVideo();
            player.unMute();
            $.fn.fullpage.setAllowScrolling(false);
        });

        $('body').on('click','.hide_btn', function () {
            $('.background-video').removeClass('active');
            $('#site_header').fadeIn('slow');
            $('#player').removeClass('active');
            //$('#player01').show();
            $.fn.fullpage.setAllowScrolling(true);
             player.stopVideo();
             player.mute();

            // player.mute();
            // player.playVideo();
           // $('#myVideo')[0].pause();
           //  if( $("#myVideo").prop('muted', false) ){
           //      $("#myVideo").prop('muted', true);
           //      console.log('mute')
           //  }
            $('#myVideo')[0].play();

        });

        function true_scroll() {
            $.fn.fullpage.setAllowScrolling(true);
           // console.log('legales yes scroll');
        }
        function false_scroll() {
            $.fn.fullpage.setAllowScrolling(false);
              //  ,'#b_probleme','#b_solution','#b_vosmots','#b_soutien').hide();
           // console.log('legales no scroll');
        }



        // if ($(window).width() > 1024) {
        //
        //
        //     $(function () {
        //         var mouseY = 0;
        //         var topValue = 0;
        //         window.addEventListener("mouseout", function (e) {
        //                 mouseY = e.clientY;
        //                 if (mouseY < topValue) {
        //                     if (!$('body').hasClass('exit-once-opened')) {
        //                         setTimeout(function () {
        //                            //console.log('exit');
        //                             MicroModal.show('modal-3'); // show exit modal
        //                             $('body').addClass('exit-once-opened');
        //                         }, 500);
        //                     }
        //                 }
        //             },
        //             false);
        //         // $(document).bind('cbox_complete', function () {
        //         //
        //         // });
        //     });
        // }

        // MicroModal.init({
        //     onShow: false_scroll(),
        //     onClose: true_scroll()
        // });

        $('.mention_legales').on('click',function () {
            //console.log('click');
            // MicroModal.show('legales');
            false_scroll();
            MicroModal.show('legales', {
                closeTrigger: 'leg_close'
                // awaitCloseAnimation: true
            });
        });



        $('#leg_close').on('click', function () {true_scroll();
          //  console.log('legales_close');
            MicroModal.close('legales');
            true_scroll();
        });
      //  MicroModal.close('');


        $('#legales').on('mousewheel DOMMouseScroll', function(e) {
            var scrollTo = null;
            if (e.type == 'mousewheel') {
                scrollTo = (e.originalEvent.wheelDelta * -1);
            }
            else if (e.type == 'DOMMouseScroll') {
                scrollTo = 40 * e.originalEvent.detail;
            }

            if (scrollTo) {
                e.preventDefault();
                $(this).find('.modal__container').scrollTop(scrollTo + $(this).find('.modal__container').scrollTop());
            }
        });



        $(document).keyup(function(e) {
            if (e.key === "Escape") { // escape key maps to keycode `27`
                $.fn.fullpage.setAllowScrolling(true);
            }
        });




        // var element = $("#f_nom")[0];
        // element.setCustomValidity('Merci de renseigner ce champs afin d\'envoyer votre message.');
        // var element2 = $("#f_prenom")[0];
        // element2.setCustomValidity('Merci de renseigner ce champs afin d\'envoyer votre message.');
        // var element3 = $("#f_email")[0];
        // element3.setCustomValidity('Merci de renseigner ce champs afin d\'envoyer votre message.');
        // var element4 = $("#message")[0];
        // element4.setCustomValidity('Merci de renseigner ce champs afin d\'envoyer votre message.');

        // $('#form-1').find(':required').one('blur keydown', function() {
        //     console.log('touched', this);
        //     $(this).addClass('touched');
        // });

        // initialize tooltipster on text input elements



        // function updateScroll() {
        //     pos = $(document).scrollTop()+$(window).height()/2;
        //
        //     if (pos>=$("#b_header").offset().top && pos<$("#b_probleme").offset().top) {
        //         dataLayer.push({'event':'LP-Marie-arrive-ecran-1','eventGroup':'ecran','eventAction':'arrive'});
        //         console.log('1-2');
        //         setTimeout(function() {
        //             if (pos>=$("#b_header").offset().top && pos<$("#b_probleme").offset().top) {
        //                 dataLayer.push({'event':'LP-Marie-passe-ecran-1','eventGroup':'ecran','eventAction':'passe'});
        //             }
        //         }, 5000);
        //     }
        //
        //     if (pos>=$("#b_probleme").offset().top && pos<$("#b_solution").offset().top) {
        //         dataLayer.push({'event':'LP-Marie-arrive-ecran-2','eventGroup':'ecran','eventAction':'arrive'});
        //         console.log('2-3');
        //         setTimeout(function() {
        //             if (pos>=$("#b_probleme").offset().top && pos<$("#b_solution").offset().top) {
        //                 dataLayer.push({'event':'LP-Marie-passe-ecran-2','eventGroup':'ecran','eventAction':'passe'});
        //             }
        //         }, 5000);
        //     }
        //
        //     if (pos>=$("#b_solution").offset().top && pos<$("#b_vosmots").offset().top) {
        //         console.log('3-4');
        //         dataLayer.push({'event':'LP-Marie-arrive-ecran-3','eventGroup':'ecran','eventAction':'arrive'});
        //         setTimeout(function() {
        //             if (pos>=$("#b_solution").offset().top && pos<$("#b_vosmots").offset().top) {
        //                 dataLayer.push({'event':'LP-Marie-passe-ecran-3','eventGroup':'ecran','eventAction':'passe'});
        //             }
        //         }, 5000);
        //     }
        //
        //     if (pos>=$("#b_vosmots").offset().top && pos<$("#b_soutien").offset().top) {
        //         dataLayer.push({'event':'LP-Marie-arrive-ecran-4','eventGroup':'ecran','eventAction':'arrive'});
        //         setTimeout(function() {
        //             if (pos>=$("#b_vosmots").offset().top && pos<$("#b_soutien").offset().top) {
        //                 dataLayer.push({'event':'LP-Marie-passe-ecran-4','eventGroup':'ecran','eventAction':'passe'});
        //             }
        //         }, 5000);
        //     }
        //
        //     if (pos>=$("#b_soutien").offset().top && pos<$("#b_auteuil").offset().top) {
        //         dataLayer.push({'event':'LP-Marie-arrive-ecran-5','eventGroup':'ecran','eventAction':'arrive'});
        //         setTimeout(function() {
        //             if (pos>=$("#b_soutien").offset().top && pos<$("#b_auteuil").offset().top) {
        //                 dataLayer.push({'event':'LP-Marie-passe-ecran-5','eventGroup':'ecran','eventAction':'passe'});
        //             }
        //         }, 5000);
        //     }
        //
        //     if (pos>=$("#b_auteuil").offset().top) {
        //         dataLayer.push({'event':'LP-Marie-arrive-ecran-6','eventGroup':'ecran','eventAction':'arrive'});
        //         setTimeout(function() {
        //             if (pos>=$("#b_auteuil").offset().top) {
        //                 dataLayer.push({'event':'LP-Marie-passe-ecran-6','eventGroup':'ecran','eventAction':'passe'});
        //             }
        //         }, 5000);
        //     }
        // }
        //
        // updateScroll();
        //
        // $(window).scroll(function() {
        //     updateScroll();
        //     console.log('scrollllllllllllllling')
        // });

    });

        // $(".f_pop_form input[name=Password]")[0].oninvalid = function () {
        //     this.setCustomValidity("Please enter at least 5 characters.");
        //     this.setCustomValidity("");
        // };




})(jQuery);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBUaGlyZCBwYXJ0eVxuICovXG4vLz0gLi4vLi4vYm93ZXJfY29tcG9uZW50cy9qcXVlcnkvZGlzdC9qcXVlcnkuanNcblxuXG5cbi8qXG4gKiBDdXN0b21cbiAqL1xuLyohXG4gKiBmdWxsUGFnZSAzLjAuM1xuICogaHR0cHM6Ly9naXRodWIuY29tL2FsdmFyb3RyaWdvL2Z1bGxQYWdlLmpzXG4gKlxuICogQGxpY2Vuc2UgR1BMdjMgZm9yIG9wZW4gc291cmNlIHVzZSBvbmx5XG4gKiBvciBGdWxscGFnZSBDb21tZXJjaWFsIExpY2Vuc2UgZm9yIGNvbW1lcmNpYWwgdXNlXG4gKiBodHRwOi8vYWx2YXJvdHJpZ28uY29tL2Z1bGxQYWdlL3ByaWNpbmcvXG4gKlxuICogQ29weXJpZ2h0IChDKSAyMDE4IGh0dHA6Ly9hbHZhcm90cmlnby5jb20vZnVsbFBhZ2UgLSBBIHByb2plY3QgYnkgQWx2YXJvIFRyaWdvXG4gKi9cbiFmdW5jdGlvbihlLHQsbixvLGkpe1wiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoZnVuY3Rpb24oKXtyZXR1cm4gZS5mdWxscGFnZT1vKHQsbiksZS5mdWxscGFnZX0pOlwib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzP21vZHVsZS5leHBvcnRzPW8odCxuKTp0LmZ1bGxwYWdlPW8odCxuKX0odGhpcyx3aW5kb3csZG9jdW1lbnQsZnVuY3Rpb24oZSx0KXtcInVzZSBzdHJpY3RcIjt2YXIgbj1cImZ1bGxwYWdlLXdyYXBwZXJcIixvPVwiLlwiK24saT1cImZwLXJlc3BvbnNpdmVcIixyPVwiZnAtbm90cmFuc2l0aW9uXCIsbD1cImZwLWRlc3Ryb3llZFwiLGE9XCJmcC1lbmFibGVkXCIscz1cImZwLXZpZXdpbmdcIixjPVwiYWN0aXZlXCIsdT1cIi5cIitjLGY9XCJmcC1jb21wbGV0ZWx5XCIsZD1cIi5cIitmLHY9XCIuc2VjdGlvblwiLHA9XCJmcC1zZWN0aW9uXCIsaD1cIi5cIitwLGc9aCt1LG09XCJmcC10YWJsZUNlbGxcIixTPVwiLlwiK20sYj1cImZwLWF1dG8taGVpZ2h0XCIsdz1cImZwLW5vcm1hbC1zY3JvbGxcIix5PVwiZnAtbmF2XCIsRT1cIiNcIit5LEw9XCJmcC10b29sdGlwXCIseD1cIi5cIitMLFQ9XCJmcC1zaG93LWFjdGl2ZVwiLEE9XCIuc2xpZGVcIixrPVwiZnAtc2xpZGVcIixNPVwiLlwiK2ssTz1NK3UsQz1cImZwLXNsaWRlc1wiLEg9XCIuXCIrQyxJPVwiZnAtc2xpZGVzQ29udGFpbmVyXCIsUj1cIi5cIitJLEI9XCJmcC10YWJsZVwiLHo9XCJmcC1zbGlkZXNOYXZcIixOPVwiLlwiK3osaj1OK1wiIGFcIixQPVwiZnAtY29udHJvbEFycm93XCIsRD1cIi5cIitQLFY9XCJmcC1wcmV2XCIsWT1QK1wiIFwiK1YsVT1EKyhcIi5cIitWKSxGPVwiZnAtbmV4dFwiLFc9UCtcIiBcIitGLFg9RCtcIi5mcC1uZXh0XCI7ZnVuY3Rpb24gXyh0LG4pe2UuY29uc29sZSYmZS5jb25zb2xlW3RdJiZlLmNvbnNvbGVbdF0oXCJmdWxsUGFnZTogXCIrbil9ZnVuY3Rpb24gSyhlLG4pe3JldHVybihuPWFyZ3VtZW50cy5sZW5ndGg+MT9uOnQpP24ucXVlcnlTZWxlY3RvckFsbChlKTpudWxsfWZ1bmN0aW9uIHEoZSl7ZT1lfHx7fTtmb3IodmFyIHQ9MTt0PGFyZ3VtZW50cy5sZW5ndGg7dCsrKXt2YXIgbj1hcmd1bWVudHNbdF07aWYobilmb3IodmFyIG8gaW4gbiluLmhhc093blByb3BlcnR5KG8pJiYoXCJvYmplY3RcIj09dHlwZW9mIG5bb10mJm51bGwhPW5bb10/ZVtvXT1xKGVbb10sbltvXSk6ZVtvXT1uW29dKX1yZXR1cm4gZX1mdW5jdGlvbiBRKGUsdCl7cmV0dXJuIG51bGwhPWUmJihlLmNsYXNzTGlzdD9lLmNsYXNzTGlzdC5jb250YWlucyh0KTpuZXcgUmVnRXhwKFwiKF58IClcIit0K1wiKCB8JClcIixcImdpXCIpLnRlc3QoZS5jbGFzc05hbWUpKX1mdW5jdGlvbiBHKCl7cmV0dXJuXCJpbm5lckhlaWdodFwiaW4gZT9lLmlubmVySGVpZ2h0OnQuZG9jdW1lbnRFbGVtZW50Lm9mZnNldEhlaWdodH1mdW5jdGlvbiAkKGUsdCl7dmFyIG47Zm9yKG4gaW4gZT1yZShlKSx0KWlmKHQuaGFzT3duUHJvcGVydHkobikmJm51bGwhPT1uKWZvcih2YXIgbz0wO288ZS5sZW5ndGg7bysrKXtlW29dLnN0eWxlW25dPXRbbl19cmV0dXJuIGV9ZnVuY3Rpb24gSihlLHQsbil7Zm9yKHZhciBvPWVbbl07byYmIXhlKG8sdCk7KW89b1tuXTtyZXR1cm4gb31mdW5jdGlvbiBaKGUsdCl7cmV0dXJuIEooZSx0LFwicHJldmlvdXNFbGVtZW50U2libGluZ1wiKX1mdW5jdGlvbiBlZShlLHQpe3JldHVybiBKKGUsdCxcIm5leHRFbGVtZW50U2libGluZ1wiKX1mdW5jdGlvbiB0ZShlKXtyZXR1cm4gZS5wcmV2aW91c0VsZW1lbnRTaWJsaW5nfWZ1bmN0aW9uIG5lKGUpe3JldHVybiBlLm5leHRFbGVtZW50U2libGluZ31mdW5jdGlvbiBvZShlKXtyZXR1cm4gZVtlLmxlbmd0aC0xXX1mdW5jdGlvbiBpZShlLHQpe2U9c2UoZSk/ZVswXTplO2Zvcih2YXIgbj1udWxsIT10P0sodCxlLnBhcmVudE5vZGUpOmUucGFyZW50Tm9kZS5jaGlsZE5vZGVzLG89MCxpPTA7aTxuLmxlbmd0aDtpKyspe2lmKG5baV09PWUpcmV0dXJuIG87MT09bltpXS5ub2RlVHlwZSYmbysrfXJldHVybi0xfWZ1bmN0aW9uIHJlKGUpe3JldHVybiBzZShlKT9lOltlXX1mdW5jdGlvbiBsZShlKXtlPXJlKGUpO2Zvcih2YXIgdD0wO3Q8ZS5sZW5ndGg7dCsrKWVbdF0uc3R5bGUuZGlzcGxheT1cIm5vbmVcIjtyZXR1cm4gZX1mdW5jdGlvbiBhZShlKXtlPXJlKGUpO2Zvcih2YXIgdD0wO3Q8ZS5sZW5ndGg7dCsrKWVbdF0uc3R5bGUuZGlzcGxheT1cImJsb2NrXCI7cmV0dXJuIGV9ZnVuY3Rpb24gc2UoZSl7cmV0dXJuXCJbb2JqZWN0IEFycmF5XVwiPT09T2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGUpfHxcIltvYmplY3QgTm9kZUxpc3RdXCI9PT1PYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoZSl9ZnVuY3Rpb24gY2UoZSx0KXtlPXJlKGUpO2Zvcih2YXIgbj0wO248ZS5sZW5ndGg7bisrKXt2YXIgbz1lW25dO28uY2xhc3NMaXN0P28uY2xhc3NMaXN0LmFkZCh0KTpvLmNsYXNzTmFtZSs9XCIgXCIrdH1yZXR1cm4gZX1mdW5jdGlvbiB1ZShlLHQpe2U9cmUoZSk7Zm9yKHZhciBuPXQuc3BsaXQoXCIgXCIpLG89MDtvPG4ubGVuZ3RoO28rKyl7dD1uW29dO2Zvcih2YXIgaT0wO2k8ZS5sZW5ndGg7aSsrKXt2YXIgcj1lW2ldO3IuY2xhc3NMaXN0P3IuY2xhc3NMaXN0LnJlbW92ZSh0KTpyLmNsYXNzTmFtZT1yLmNsYXNzTmFtZS5yZXBsYWNlKG5ldyBSZWdFeHAoXCIoXnxcXFxcYilcIit0LnNwbGl0KFwiIFwiKS5qb2luKFwifFwiKStcIihcXFxcYnwkKVwiLFwiZ2lcIiksXCIgXCIpfX1yZXR1cm4gZX1mdW5jdGlvbiBmZShlLHQpe3QuYXBwZW5kQ2hpbGQoZSl9ZnVuY3Rpb24gZGUoZSxuLG8pe3ZhciBpO249bnx8dC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO2Zvcih2YXIgcj0wO3I8ZS5sZW5ndGg7cisrKXt2YXIgbD1lW3JdOyhvJiYhcnx8IW8pJiYoaT1uLmNsb25lTm9kZSghMCksbC5wYXJlbnROb2RlLmluc2VydEJlZm9yZShpLGwpKSxpLmFwcGVuZENoaWxkKGwpfXJldHVybiBlfWZ1bmN0aW9uIHZlKGUsdCl7ZGUoZSx0LCEwKX1mdW5jdGlvbiBwZShlLHQpe2ZvcihcInN0cmluZ1wiPT10eXBlb2YgdCYmKHQ9QWUodCkpLGUuYXBwZW5kQ2hpbGQodCk7ZS5maXJzdENoaWxkIT09dDspdC5hcHBlbmRDaGlsZChlLmZpcnN0Q2hpbGQpfWZ1bmN0aW9uIGhlKGUsdCl7cmV0dXJuIGUmJjE9PT1lLm5vZGVUeXBlP3hlKGUsdCk/ZTpoZShlLnBhcmVudE5vZGUsdCk6bnVsbH1mdW5jdGlvbiBnZShlLHQpe1NlKGUsZS5uZXh0U2libGluZyx0KX1mdW5jdGlvbiBtZShlLHQpe1NlKGUsZSx0KX1mdW5jdGlvbiBTZShlLHQsbil7c2Uobil8fChcInN0cmluZ1wiPT10eXBlb2YgbiYmKG49QWUobikpLG49W25dKTtmb3IodmFyIG89MDtvPG4ubGVuZ3RoO28rKyllLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKG5bb10sdCl9ZnVuY3Rpb24gYmUoKXt2YXIgbj10LmRvY3VtZW50RWxlbWVudDtyZXR1cm4oZS5wYWdlWU9mZnNldHx8bi5zY3JvbGxUb3ApLShuLmNsaWVudFRvcHx8MCl9ZnVuY3Rpb24gd2UoZSl7cmV0dXJuIEFycmF5LnByb3RvdHlwZS5maWx0ZXIuY2FsbChlLnBhcmVudE5vZGUuY2hpbGRyZW4sZnVuY3Rpb24odCl7cmV0dXJuIHQhPT1lfSl9ZnVuY3Rpb24geWUoZSl7ZS5wcmV2ZW50RGVmYXVsdD9lLnByZXZlbnREZWZhdWx0KCk6ZS5yZXR1cm5WYWx1ZT0hMX1mdW5jdGlvbiBFZShlKXtpZihcImZ1bmN0aW9uXCI9PXR5cGVvZiBlKXJldHVybiEwO3ZhciB0PU9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcoZSk7cmV0dXJuXCJbb2JqZWN0IEZ1bmN0aW9uXVwiPT09dHx8XCJbb2JqZWN0IEdlbmVyYXRvckZ1bmN0aW9uXVwiPT09dH1mdW5jdGlvbiBMZShuLG8saSl7dmFyIHI7aT12b2lkIDA9PT1pP3t9OmksXCJmdW5jdGlvblwiPT10eXBlb2YgZS5DdXN0b21FdmVudD9yPW5ldyBDdXN0b21FdmVudChvLHtkZXRhaWw6aX0pOihyPXQuY3JlYXRlRXZlbnQoXCJDdXN0b21FdmVudFwiKSkuaW5pdEN1c3RvbUV2ZW50KG8sITAsITAsaSksbi5kaXNwYXRjaEV2ZW50KHIpfWZ1bmN0aW9uIHhlKGUsdCl7cmV0dXJuKGUubWF0Y2hlc3x8ZS5tYXRjaGVzU2VsZWN0b3J8fGUubXNNYXRjaGVzU2VsZWN0b3J8fGUubW96TWF0Y2hlc1NlbGVjdG9yfHxlLndlYmtpdE1hdGNoZXNTZWxlY3Rvcnx8ZS5vTWF0Y2hlc1NlbGVjdG9yKS5jYWxsKGUsdCl9ZnVuY3Rpb24gVGUoZSx0KXtpZihcImJvb2xlYW5cIj09dHlwZW9mIHQpZm9yKHZhciBuPTA7bjxlLmxlbmd0aDtuKyspZVtuXS5zdHlsZS5kaXNwbGF5PXQ/XCJibG9ja1wiOlwibm9uZVwiO3JldHVybiBlfWZ1bmN0aW9uIEFlKGUpe3ZhciBuPXQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtyZXR1cm4gbi5pbm5lckhUTUw9ZS50cmltKCksbi5maXJzdENoaWxkfWZ1bmN0aW9uIGtlKGUpe2U9cmUoZSk7Zm9yKHZhciB0PTA7dDxlLmxlbmd0aDt0Kyspe3ZhciBuPWVbdF07biYmbi5wYXJlbnRFbGVtZW50JiZuLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobil9fWZ1bmN0aW9uIE1lKGUsdCxuKXtmb3IodmFyIG89ZVtuXSxpPVtdO287KSh4ZShvLHQpfHxudWxsPT10KSYmaS5wdXNoKG8pLG89b1tuXTtyZXR1cm4gaX1mdW5jdGlvbiBPZShlLHQpe3JldHVybiBNZShlLHQsXCJuZXh0RWxlbWVudFNpYmxpbmdcIil9ZnVuY3Rpb24gQ2UoZSx0KXtyZXR1cm4gTWUoZSx0LFwicHJldmlvdXNFbGVtZW50U2libGluZ1wiKX1yZXR1cm4gZS5Ob2RlTGlzdCYmIU5vZGVMaXN0LnByb3RvdHlwZS5mb3JFYWNoJiYoTm9kZUxpc3QucHJvdG90eXBlLmZvckVhY2g9ZnVuY3Rpb24odCxuKXtuPW58fGU7Zm9yKHZhciBvPTA7bzx0aGlzLmxlbmd0aDtvKyspdC5jYWxsKG4sdGhpc1tvXSxvLHRoaXMpfSksZS5mcF91dGlscz17JDpLLGRlZXBFeHRlbmQ6cSxoYXNDbGFzczpRLGdldFdpbmRvd0hlaWdodDpHLGNzczokLHVudGlsOkoscHJldlVudGlsOlosbmV4dFVudGlsOmVlLHByZXY6dGUsbmV4dDpuZSxsYXN0Om9lLGluZGV4OmllLGdldExpc3Q6cmUsaGlkZTpsZSxzaG93OmFlLGlzQXJyYXlPckxpc3Q6c2UsYWRkQ2xhc3M6Y2UscmVtb3ZlQ2xhc3M6dWUsYXBwZW5kVG86ZmUsd3JhcDpkZSx3cmFwQWxsOnZlLHdyYXBJbm5lcjpwZSxjbG9zZXN0OmhlLGFmdGVyOmdlLGJlZm9yZTptZSxpbnNlcnRCZWZvcmU6U2UsZ2V0U2Nyb2xsVG9wOmJlLHNpYmxpbmdzOndlLHByZXZlbnREZWZhdWx0OnllLGlzRnVuY3Rpb246RWUsdHJpZ2dlcjpMZSxtYXRjaGVzOnhlLHRvZ2dsZTpUZSxjcmVhdGVFbGVtZW50RnJvbUhUTUw6QWUscmVtb3ZlOmtlLGZpbHRlcjpmdW5jdGlvbihlLHQpe0FycmF5LnByb3RvdHlwZS5maWx0ZXIuY2FsbChlLHQpfSx1bnRpbEFsbDpNZSxuZXh0QWxsOk9lLHByZXZBbGw6Q2Usc2hvd0Vycm9yOl99LGZ1bmN0aW9uKFAsRil7dmFyIEo9RiYmbmV3IFJlZ0V4cChcIihbXFxcXGRcXFxcd117OH0tKXszfVtcXFxcZFxcXFx3XXs4fXxPUEVOLVNPVVJDRS1HUExWMy1MSUNFTlNFXCIpLnRlc3QoRi5saWNlbnNlS2V5KXx8dC5kb21haW4uaW5kZXhPZihcImFsdmFyb3RyaWdvLmNvbVwiKT4tMTtpZighUShLKFwiaHRtbFwiKSxhKSl7dmFyIHJlPUsoXCJodG1sLCBib2R5XCIpLHNlPUsoXCJib2R5XCIpWzBdLGRlPXt9O0Y9cSh7bWVudTohMSxhbmNob3JzOltdLGxvY2tBbmNob3JzOiExLG5hdmlnYXRpb246ITEsbmF2aWdhdGlvblBvc2l0aW9uOlwicmlnaHRcIixuYXZpZ2F0aW9uVG9vbHRpcHM6W10sc2hvd0FjdGl2ZVRvb2x0aXA6ITEsc2xpZGVzTmF2aWdhdGlvbjohMSxzbGlkZXNOYXZQb3NpdGlvbjpcImJvdHRvbVwiLHNjcm9sbEJhcjohMSxoeWJyaWQ6ITEsY3NzMzohMCxzY3JvbGxpbmdTcGVlZDo3MDAsYXV0b1Njcm9sbGluZzohMCxmaXRUb1NlY3Rpb246ITAsZml0VG9TZWN0aW9uRGVsYXk6MWUzLGVhc2luZzpcImVhc2VJbk91dEN1YmljXCIsZWFzaW5nY3NzMzpcImVhc2VcIixsb29wQm90dG9tOiExLGxvb3BUb3A6ITEsbG9vcEhvcml6b250YWw6ITAsY29udGludW91c1ZlcnRpY2FsOiExLGNvbnRpbnVvdXNIb3Jpem9udGFsOiExLHNjcm9sbEhvcml6b250YWxseTohMSxpbnRlcmxvY2tlZFNsaWRlczohMSxkcmFnQW5kTW92ZTohMSxvZmZzZXRTZWN0aW9uczohMSxyZXNldFNsaWRlcnM6ITEsZmFkaW5nRWZmZWN0OiExLG5vcm1hbFNjcm9sbEVsZW1lbnRzOm51bGwsc2Nyb2xsT3ZlcmZsb3c6ITEsc2Nyb2xsT3ZlcmZsb3dSZXNldDohMSxzY3JvbGxPdmVyZmxvd0hhbmRsZXI6ZS5mcF9zY3JvbGxvdmVyZmxvdz9lLmZwX3Njcm9sbG92ZXJmbG93LmlzY3JvbGxIYW5kbGVyOm51bGwsc2Nyb2xsT3ZlcmZsb3dPcHRpb25zOm51bGwsdG91Y2hTZW5zaXRpdml0eTo1LG5vcm1hbFNjcm9sbEVsZW1lbnRUb3VjaFRocmVzaG9sZDo1LGJpZ1NlY3Rpb25zRGVzdGluYXRpb246bnVsbCxrZXlib2FyZFNjcm9sbGluZzohMCxhbmltYXRlQW5jaG9yOiEwLHJlY29yZEhpc3Rvcnk6ITAsY29udHJvbEFycm93czohMCxjb250cm9sQXJyb3dDb2xvcjpcIiNmZmZcIix2ZXJ0aWNhbENlbnRlcmVkOiEwLHNlY3Rpb25zQ29sb3I6W10scGFkZGluZ1RvcDowLHBhZGRpbmdCb3R0b206MCxmaXhlZEVsZW1lbnRzOm51bGwscmVzcG9uc2l2ZTowLHJlc3BvbnNpdmVXaWR0aDowLHJlc3BvbnNpdmVIZWlnaHQ6MCxyZXNwb25zaXZlU2xpZGVzOiExLHBhcmFsbGF4OiExLHBhcmFsbGF4T3B0aW9uczp7dHlwZTpcInJldmVhbFwiLHBlcmNlbnRhZ2U6NjIscHJvcGVydHk6XCJ0cmFuc2xhdGVcIn0sc2VjdGlvblNlbGVjdG9yOnYsc2xpZGVTZWxlY3RvcjpBLHYyY29tcGF0aWJsZTohMSxhZnRlckxvYWQ6bnVsbCxvbkxlYXZlOm51bGwsYWZ0ZXJSZW5kZXI6bnVsbCxhZnRlclJlc2l6ZTpudWxsLGFmdGVyUmVCdWlsZDpudWxsLGFmdGVyU2xpZGVMb2FkOm51bGwsb25TbGlkZUxlYXZlOm51bGwsYWZ0ZXJSZXNwb25zaXZlOm51bGwsbGF6eUxvYWRpbmc6ITB9LEYpO3ZhciBTZSxNZSxIZSxJZSxSZT0hMSxCZT1uYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC8oaVBob25lfGlQb2R8aVBhZHxBbmRyb2lkfHBsYXlib29rfHNpbGt8QmxhY2tCZXJyeXxCQjEwfFdpbmRvd3MgUGhvbmV8VGl6ZW58QmFkYXx3ZWJPU3xJRU1vYmlsZXxPcGVyYSBNaW5pKS8pLHplPVwib250b3VjaHN0YXJ0XCJpbiBlfHxuYXZpZ2F0b3IubXNNYXhUb3VjaFBvaW50cz4wfHxuYXZpZ2F0b3IubWF4VG91Y2hQb2ludHMsTmU9XCJzdHJpbmdcIj09dHlwZW9mIFA/SyhQKVswXTpQLGplPUcoKSxQZT0hMSxEZT0hMCxWZT0hMCxZZT1bXSxVZT17bTp7dXA6ITAsZG93bjohMCxsZWZ0OiEwLHJpZ2h0OiEwfX07VWUuaz1xKHt9LFVlLm0pO3ZhciBGZSxXZSxYZSxfZSxLZSxxZSxRZSxHZSwkZT1lLlBvaW50ZXJFdmVudD97ZG93bjpcInBvaW50ZXJkb3duXCIsbW92ZTpcInBvaW50ZXJtb3ZlXCJ9Ontkb3duOlwiTVNQb2ludGVyRG93blwiLG1vdmU6XCJNU1BvaW50ZXJNb3ZlXCJ9LEplPXt0b3VjaG1vdmU6XCJvbnRvdWNobW92ZVwiaW4gZT9cInRvdWNobW92ZVwiOiRlLm1vdmUsdG91Y2hzdGFydDpcIm9udG91Y2hzdGFydFwiaW4gZT9cInRvdWNoc3RhcnRcIjokZS5kb3dufSxaZT0nYVtocmVmXSwgYXJlYVtocmVmXSwgaW5wdXQ6bm90KFtkaXNhYmxlZF0pLCBzZWxlY3Q6bm90KFtkaXNhYmxlZF0pLCB0ZXh0YXJlYTpub3QoW2Rpc2FibGVkXSksIGJ1dHRvbjpub3QoW2Rpc2FibGVkXSksIGlmcmFtZSwgb2JqZWN0LCBlbWJlZCwgW3RhYmluZGV4PVwiMFwiXSwgW2NvbnRlbnRlZGl0YWJsZV0nLGV0PXEoe30sRik7am4oKSxlLmZwX2Vhc2luZ3M9cShlLmZwX2Vhc2luZ3Mse2Vhc2VJbk91dEN1YmljOmZ1bmN0aW9uKGUsdCxuLG8pe3JldHVybihlLz1vLzIpPDE/bi8yKmUqZSplK3Q6bi8yKigoZS09MikqZSplKzIpK3R9fSksTmUmJihkZS52ZXJzaW9uPVwiMy4wLjJcIixkZS5zZXRBdXRvU2Nyb2xsaW5nPWZ0LGRlLnNldFJlY29yZEhpc3Rvcnk9ZHQsZGUuc2V0U2Nyb2xsaW5nU3BlZWQ9dnQsZGUuc2V0Rml0VG9TZWN0aW9uPXB0LGRlLnNldExvY2tBbmNob3JzPWZ1bmN0aW9uKGUpe0YubG9ja0FuY2hvcnM9ZX0sZGUuc2V0TW91c2VXaGVlbFNjcm9sbGluZz1odCxkZS5zZXRBbGxvd1Njcm9sbGluZz1ndCxkZS5zZXRLZXlib2FyZFNjcm9sbGluZz1TdCxkZS5tb3ZlU2VjdGlvblVwPWJ0LGRlLm1vdmVTZWN0aW9uRG93bj13dCxkZS5zaWxlbnRNb3ZlVG89eXQsZGUubW92ZVRvPUV0LGRlLm1vdmVTbGlkZVJpZ2h0PUx0LGRlLm1vdmVTbGlkZUxlZnQ9eHQsZGUuZml0VG9TZWN0aW9uPUJ0LGRlLnJlQnVpbGQ9VHQsZGUuc2V0UmVzcG9uc2l2ZT1BdCxkZS5nZXRGdWxscGFnZURhdGE9RixkZS5kZXN0cm95PWZ1bmN0aW9uKG4pe2Z0KCExLFwiaW50ZXJuYWxcIiksZ3QoITApLG10KCExKSxTdCghMSksY2UoTmUsbCksY2xlYXJUaW1lb3V0KF9lKSxjbGVhclRpbWVvdXQoWGUpLGNsZWFyVGltZW91dChXZSksY2xlYXJUaW1lb3V0KEtlKSxjbGVhclRpbWVvdXQocWUpLGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLFJ0KSxlLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJoYXNoY2hhbmdlXCIsb24pLGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLGhuKSx0LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsbG4pLHQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsYW4pLFtcImNsaWNrXCIsXCJ0b3VjaHN0YXJ0XCJdLmZvckVhY2goZnVuY3Rpb24oZSl7dC5yZW1vdmVFdmVudExpc3RlbmVyKGUsa3QpfSksW1wibW91c2VlbnRlclwiLFwidG91Y2hzdGFydFwiLFwibW91c2VsZWF2ZVwiLFwidG91Y2hlbmRcIl0uZm9yRWFjaChmdW5jdGlvbihlKXt0LnJlbW92ZUV2ZW50TGlzdGVuZXIoZSxPdCwhMCl9KSxjbGVhclRpbWVvdXQoX2UpLGNsZWFyVGltZW91dChYZSksbiYmKFJuKDApLEsoXCJpbWdbZGF0YS1zcmNdLCBzb3VyY2VbZGF0YS1zcmNdLCBhdWRpb1tkYXRhLXNyY10sIGlmcmFtZVtkYXRhLXNyY11cIixOZSkuZm9yRWFjaChmdW5jdGlvbihlKXtHdChlLFwic3JjXCIpfSksSyhcImltZ1tkYXRhLXNyY3NldF1cIikuZm9yRWFjaChmdW5jdGlvbihlKXtHdChlLFwic3Jjc2V0XCIpfSksa2UoSyhFK1wiLCBcIitOK1wiLCBcIitEKSksJChLKGgpLHtoZWlnaHQ6XCJcIixcImJhY2tncm91bmQtY29sb3JcIjpcIlwiLHBhZGRpbmc6XCJcIn0pLCQoSyhNKSx7d2lkdGg6XCJcIn0pLCQoTmUse2hlaWdodDpcIlwiLHBvc2l0aW9uOlwiXCIsXCItbXMtdG91Y2gtYWN0aW9uXCI6XCJcIixcInRvdWNoLWFjdGlvblwiOlwiXCJ9KSwkKHJlLHtvdmVyZmxvdzpcIlwiLGhlaWdodDpcIlwifSksdWUoSyhcImh0bWxcIiksYSksdWUoc2UsaSksc2UuY2xhc3NOYW1lLnNwbGl0KC9cXHMrLykuZm9yRWFjaChmdW5jdGlvbihlKXswPT09ZS5pbmRleE9mKHMpJiZ1ZShzZSxlKX0pLEsoaCtcIiwgXCIrTSkuZm9yRWFjaChmdW5jdGlvbihlKXtGLnNjcm9sbE92ZXJmbG93SGFuZGxlciYmRi5zY3JvbGxPdmVyZmxvd0hhbmRsZXIucmVtb3ZlKGUpLHVlKGUsQitcIiBcIitjK1wiIFwiK2YpO3ZhciB0PWUuZ2V0QXR0cmlidXRlKFwiZGF0YS1mcC1zdHlsZXNcIik7dCYmZS5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLGUuZ2V0QXR0cmlidXRlKFwiZGF0YS1mcC1zdHlsZXNcIikpfSksU24oTmUpLFtTLFIsSF0uZm9yRWFjaChmdW5jdGlvbihlKXtLKGUsTmUpLmZvckVhY2goZnVuY3Rpb24oZSl7ZS5vdXRlckhUTUw9ZS5pbm5lckhUTUx9KX0pLCQoTmUse1wiLXdlYmtpdC10cmFuc2l0aW9uXCI6XCJub25lXCIsdHJhbnNpdGlvbjpcIm5vbmVcIn0pLGUuc2Nyb2xsVG8oMCwwKSxbcCxrLEldLmZvckVhY2goZnVuY3Rpb24oZSl7dWUoSyhcIi5cIitlKSxlKX0pKX0sZGUuZ2V0QWN0aXZlU2VjdGlvbj1mdW5jdGlvbigpe3JldHVybiBuZXcgWW4oSyhnKVswXSl9LGRlLmdldEFjdGl2ZVNsaWRlPWZ1bmN0aW9uKCl7cmV0dXJuIEt0KEsoTyxLKGcpWzBdKVswXSl9LGRlLnRlc3Q9e3RvcDpcIjBweFwiLHRyYW5zbGF0ZTNkOlwidHJhbnNsYXRlM2QoMHB4LCAwcHgsIDBweClcIix0cmFuc2xhdGUzZEg6ZnVuY3Rpb24oKXtmb3IodmFyIGU9W10sdD0wO3Q8SyhGLnNlY3Rpb25TZWxlY3RvcixOZSkubGVuZ3RoO3QrKyllLnB1c2goXCJ0cmFuc2xhdGUzZCgwcHgsIDBweCwgMHB4KVwiKTtyZXR1cm4gZX0oKSxsZWZ0OmZ1bmN0aW9uKCl7Zm9yKHZhciBlPVtdLHQ9MDt0PEsoRi5zZWN0aW9uU2VsZWN0b3IsTmUpLmxlbmd0aDt0KyspZS5wdXNoKDApO3JldHVybiBlfSgpLG9wdGlvbnM6RixzZXRBdXRvU2Nyb2xsaW5nOmZ0fSxkZS5zaGFyZWQ9e2FmdGVyUmVuZGVyQWN0aW9uczpJdH0sZS5mdWxscGFnZV9hcGk9ZGUsRi5jc3MzJiYoRi5jc3MzPWZ1bmN0aW9uKCl7dmFyIG4sbz10LmNyZWF0ZUVsZW1lbnQoXCJwXCIpLGk9e3dlYmtpdFRyYW5zZm9ybTpcIi13ZWJraXQtdHJhbnNmb3JtXCIsT1RyYW5zZm9ybTpcIi1vLXRyYW5zZm9ybVwiLG1zVHJhbnNmb3JtOlwiLW1zLXRyYW5zZm9ybVwiLE1velRyYW5zZm9ybTpcIi1tb3otdHJhbnNmb3JtXCIsdHJhbnNmb3JtOlwidHJhbnNmb3JtXCJ9O2Zvcih2YXIgciBpbiBvLnN0eWxlLmRpc3BsYXk9XCJibG9ja1wiLHQuYm9keS5pbnNlcnRCZWZvcmUobyxudWxsKSxpKXZvaWQgMCE9PW8uc3R5bGVbcl0mJihvLnN0eWxlW3JdPVwidHJhbnNsYXRlM2QoMXB4LDFweCwxcHgpXCIsbj1lLmdldENvbXB1dGVkU3R5bGUobykuZ2V0UHJvcGVydHlWYWx1ZShpW3JdKSk7cmV0dXJuIHQuYm9keS5yZW1vdmVDaGlsZChvKSx2b2lkIDAhPT1uJiZuLmxlbmd0aD4wJiZcIm5vbmVcIiE9PW59KCkpLEYuc2Nyb2xsQmFyPUYuc2Nyb2xsQmFyfHxGLmh5YnJpZCxmdW5jdGlvbigpe2lmKCFGLmFuY2hvcnMubGVuZ3RoKXt2YXIgZT1cIltkYXRhLWFuY2hvcl1cIix0PUsoRi5zZWN0aW9uU2VsZWN0b3Iuc3BsaXQoXCIsXCIpLmpvaW4oZStcIixcIikrZSxOZSk7dC5sZW5ndGgmJnQuZm9yRWFjaChmdW5jdGlvbihlKXtGLmFuY2hvcnMucHVzaChlLmdldEF0dHJpYnV0ZShcImRhdGEtYW5jaG9yXCIpLnRvU3RyaW5nKCkpfSl9aWYoIUYubmF2aWdhdGlvblRvb2x0aXBzLmxlbmd0aCl7dmFyIGU9XCJbZGF0YS10b29sdGlwXVwiLG49SyhGLnNlY3Rpb25TZWxlY3Rvci5zcGxpdChcIixcIikuam9pbihlK1wiLFwiKStlLE5lKTtuLmxlbmd0aCYmbi5mb3JFYWNoKGZ1bmN0aW9uKGUpe0YubmF2aWdhdGlvblRvb2x0aXBzLnB1c2goZS5nZXRBdHRyaWJ1dGUoXCJkYXRhLXRvb2x0aXBcIikudG9TdHJpbmcoKSl9KX19KCksZnVuY3Rpb24oKXskKE5lLHtoZWlnaHQ6XCIxMDAlXCIscG9zaXRpb246XCJyZWxhdGl2ZVwifSksY2UoTmUsbiksY2UoSyhcImh0bWxcIiksYSksamU9RygpLHVlKE5lLGwpLGNlKEsoRi5zZWN0aW9uU2VsZWN0b3IsTmUpLHApLGNlKEsoRi5zbGlkZVNlbGVjdG9yLE5lKSxrKTtmb3IodmFyIGU9SyhoKSxpPTA7aTxlLmxlbmd0aDtpKyspe3ZhciByPWkscz1lW2ldLHU9SyhNLHMpLGY9dS5sZW5ndGg7cy5zZXRBdHRyaWJ1dGUoXCJkYXRhLWZwLXN0eWxlc1wiLHMuZ2V0QXR0cmlidXRlKFwic3R5bGVcIikpLG09cywoUz1yKXx8bnVsbCE9SyhnKVswXXx8Y2UobSxjKSxJZT1LKGcpWzBdLCQobSx7aGVpZ2h0OmplK1wicHhcIn0pLEYucGFkZGluZ1RvcCYmJChtLHtcInBhZGRpbmctdG9wXCI6Ri5wYWRkaW5nVG9wfSksRi5wYWRkaW5nQm90dG9tJiYkKG0se1wicGFkZGluZy1ib3R0b21cIjpGLnBhZGRpbmdCb3R0b219KSx2b2lkIDAhPT1GLnNlY3Rpb25zQ29sb3JbU10mJiQobSx7XCJiYWNrZ3JvdW5kLWNvbG9yXCI6Ri5zZWN0aW9uc0NvbG9yW1NdfSksdm9pZCAwIT09Ri5hbmNob3JzW1NdJiZtLnNldEF0dHJpYnV0ZShcImRhdGEtYW5jaG9yXCIsRi5hbmNob3JzW1NdKSxkPXMsdj1yLHZvaWQgMCE9PUYuYW5jaG9yc1t2XSYmUShkLGMpJiZibihGLmFuY2hvcnNbdl0sdiksRi5tZW51JiZGLmNzczMmJm51bGwhPWhlKEsoRi5tZW51KVswXSxvKSYmc2UuYXBwZW5kQ2hpbGQoSyhGLm1lbnUpWzBdKSxmPjA/Q3Qocyx1LGYpOkYudmVydGljYWxDZW50ZXJlZCYmeW4ocyl9dmFyIGQsdixtLFM7Ri5maXhlZEVsZW1lbnRzJiZGLmNzczMmJksoRi5maXhlZEVsZW1lbnRzKS5mb3JFYWNoKGZ1bmN0aW9uKGUpe3NlLmFwcGVuZENoaWxkKGUpfSksRi5uYXZpZ2F0aW9uJiZmdW5jdGlvbigpe3ZhciBlPXQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtlLnNldEF0dHJpYnV0ZShcImlkXCIseSk7dmFyIG49dC5jcmVhdGVFbGVtZW50KFwidWxcIik7ZS5hcHBlbmRDaGlsZChuKSxmZShlLHNlKTt2YXIgbz1LKEUpWzBdO2NlKG8sXCJmcC1cIitGLm5hdmlnYXRpb25Qb3NpdGlvbiksRi5zaG93QWN0aXZlVG9vbHRpcCYmY2UobyxUKTtmb3IodmFyIGk9XCJcIixyPTA7cjxLKGgpLmxlbmd0aDtyKyspe3ZhciBsPVwiXCI7Ri5hbmNob3JzLmxlbmd0aCYmKGw9Ri5hbmNob3JzW3JdKSxpKz0nPGxpPjxhIGhyZWY9XCIjJytsKydcIj48c3BhbiBjbGFzcz1cImZwLXNyLW9ubHlcIj4nK0h0KHIsXCJTZWN0aW9uXCIpK1wiPC9zcGFuPjxzcGFuPjwvc3Bhbj48L2E+XCI7dmFyIGE9Ri5uYXZpZ2F0aW9uVG9vbHRpcHNbcl07dm9pZCAwIT09YSYmXCJcIiE9PWEmJihpKz0nPGRpdiBjbGFzcz1cIicrTCtcIiBmcC1cIitGLm5hdmlnYXRpb25Qb3NpdGlvbisnXCI+JythK1wiPC9kaXY+XCIpLGkrPVwiPC9saT5cIn1LKFwidWxcIixvKVswXS5pbm5lckhUTUw9aSwkKEsoRSkse1wibWFyZ2luLXRvcFwiOlwiLVwiK0soRSlbMF0ub2Zmc2V0SGVpZ2h0LzIrXCJweFwifSksY2UoSyhcImFcIixLKFwibGlcIixLKEUpWzBdKVtpZShLKGcpWzBdLGgpXSksYyl9KCksSygnaWZyYW1lW3NyYyo9XCJ5b3V0dWJlLmNvbS9lbWJlZC9cIl0nLE5lKS5mb3JFYWNoKGZ1bmN0aW9uKGUpe3ZhciB0LG4sbztuPVwiZW5hYmxlanNhcGk9MVwiLG89KHQ9ZSkuZ2V0QXR0cmlidXRlKFwic3JjXCIpLHQuc2V0QXR0cmlidXRlKFwic3JjXCIsbysoL1xcPy8udGVzdChvKT9cIiZcIjpcIj9cIikrbil9KSxGLnNjcm9sbE92ZXJmbG93P0ZlPUYuc2Nyb2xsT3ZlcmZsb3dIYW5kbGVyLmluaXQoRik6SXQoKX0oKSxndCghMCksbXQoITApLGZ0KEYuYXV0b1Njcm9sbGluZyxcImludGVybmFsXCIpLGduKCksQ24oKSxcImNvbXBsZXRlXCI9PT10LnJlYWR5U3RhdGUmJm5uKCksZS5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLG5uKSxlLmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIixSdCksZS5hZGRFdmVudExpc3RlbmVyKFwiaGFzaGNoYW5nZVwiLG9uKSxlLmFkZEV2ZW50TGlzdGVuZXIoXCJibHVyXCIsZm4pLGUuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLGhuKSx0LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsbG4pLHQuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsYW4pLFtcImNsaWNrXCIsXCJ0b3VjaHN0YXJ0XCJdLmZvckVhY2goZnVuY3Rpb24oZSl7dC5hZGRFdmVudExpc3RlbmVyKGUsa3QpfSksRi5ub3JtYWxTY3JvbGxFbGVtZW50cyYmKFtcIm1vdXNlZW50ZXJcIixcInRvdWNoc3RhcnRcIl0uZm9yRWFjaChmdW5jdGlvbihlKXtNdChlLCExKX0pLFtcIm1vdXNlbGVhdmVcIixcInRvdWNoZW5kXCJdLmZvckVhY2goZnVuY3Rpb24oZSl7TXQoZSwhMCl9KSkpO3ZhciB0dD0hMSxudD0wLG90PTAsaXQ9MCxydD0wLGx0PTAsYXQ9KG5ldyBEYXRlKS5nZXRUaW1lKCksc3Q9MCxjdD0wLHV0PWplO3JldHVybiBkZX1mdW5jdGlvbiBmdChlLHQpe2V8fFJuKDApLE5uKFwiYXV0b1Njcm9sbGluZ1wiLGUsdCk7dmFyIG49SyhnKVswXTtpZihGLmF1dG9TY3JvbGxpbmcmJiFGLnNjcm9sbEJhcikkKHJlLHtvdmVyZmxvdzpcImhpZGRlblwiLGhlaWdodDpcIjEwMCVcIn0pLGR0KGV0LnJlY29yZEhpc3RvcnksXCJpbnRlcm5hbFwiKSwkKE5lLHtcIi1tcy10b3VjaC1hY3Rpb25cIjpcIm5vbmVcIixcInRvdWNoLWFjdGlvblwiOlwibm9uZVwifSksbnVsbCE9biYmUm4obi5vZmZzZXRUb3ApO2Vsc2UgaWYoJChyZSx7b3ZlcmZsb3c6XCJ2aXNpYmxlXCIsaGVpZ2h0OlwiaW5pdGlhbFwifSksZHQoITEsXCJpbnRlcm5hbFwiKSwkKE5lLHtcIi1tcy10b3VjaC1hY3Rpb25cIjpcIlwiLFwidG91Y2gtYWN0aW9uXCI6XCJcIn0pLG51bGwhPW4pe3ZhciBvPXF0KG4ub2Zmc2V0VG9wKTtvLmVsZW1lbnQuc2Nyb2xsVG8oMCxvLm9wdGlvbnMpfX1mdW5jdGlvbiBkdChlLHQpe05uKFwicmVjb3JkSGlzdG9yeVwiLGUsdCl9ZnVuY3Rpb24gdnQoZSx0KXtObihcInNjcm9sbGluZ1NwZWVkXCIsZSx0KX1mdW5jdGlvbiBwdChlLHQpe05uKFwiZml0VG9TZWN0aW9uXCIsZSx0KX1mdW5jdGlvbiBodChuKXtuPyhmdW5jdGlvbigpe3ZhciBuLG89XCJcIjtlLmFkZEV2ZW50TGlzdGVuZXI/bj1cImFkZEV2ZW50TGlzdGVuZXJcIjoobj1cImF0dGFjaEV2ZW50XCIsbz1cIm9uXCIpO3ZhciBpPVwib253aGVlbFwiaW4gdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpP1wid2hlZWxcIjp2b2lkIDAhPT10Lm9ubW91c2V3aGVlbD9cIm1vdXNld2hlZWxcIjpcIkRPTU1vdXNlU2Nyb2xsXCI7XCJET01Nb3VzZVNjcm9sbFwiPT1pP3Rbbl0obytcIk1vek1vdXNlUGl4ZWxTY3JvbGxcIixZdCwhMSk6dFtuXShvK2ksWXQsITEpfSgpLE5lLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIixzbiksTmUuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIixjbikpOih0LmFkZEV2ZW50TGlzdGVuZXI/KHQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNld2hlZWxcIixZdCwhMSksdC5yZW1vdmVFdmVudExpc3RlbmVyKFwid2hlZWxcIixZdCwhMSksdC5yZW1vdmVFdmVudExpc3RlbmVyKFwiTW96TW91c2VQaXhlbFNjcm9sbFwiLFl0LCExKSk6dC5kZXRhY2hFdmVudChcIm9ubW91c2V3aGVlbFwiLFl0KSxOZS5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsc24pLE5lLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsY24pKX1mdW5jdGlvbiBndChlLHQpe3ZvaWQgMCE9PXQ/KHQ9dC5yZXBsYWNlKC8gL2csXCJcIikuc3BsaXQoXCIsXCIpKS5mb3JFYWNoKGZ1bmN0aW9uKHQpe3puKGUsdCxcIm1cIil9KTp6bihlLFwiYWxsXCIsXCJtXCIpfWZ1bmN0aW9uIG10KGUpe2U/KGh0KCEwKSwoQmV8fHplKSYmKEYuYXV0b1Njcm9sbGluZyYmKHNlLnJlbW92ZUV2ZW50TGlzdGVuZXIoSmUudG91Y2htb3ZlLE50LHtwYXNzaXZlOiExfSksc2UuYWRkRXZlbnRMaXN0ZW5lcihKZS50b3VjaG1vdmUsTnQse3Bhc3NpdmU6ITF9KSksSyhvKVswXS5yZW1vdmVFdmVudExpc3RlbmVyKEplLnRvdWNoc3RhcnQsRHQpLEsobylbMF0ucmVtb3ZlRXZlbnRMaXN0ZW5lcihKZS50b3VjaG1vdmUsanQse3Bhc3NpdmU6ITF9KSxLKG8pWzBdLmFkZEV2ZW50TGlzdGVuZXIoSmUudG91Y2hzdGFydCxEdCksSyhvKVswXS5hZGRFdmVudExpc3RlbmVyKEplLnRvdWNobW92ZSxqdCx7cGFzc2l2ZTohMX0pKSk6KGh0KCExKSwoQmV8fHplKSYmKEYuYXV0b1Njcm9sbGluZyYmKHNlLnJlbW92ZUV2ZW50TGlzdGVuZXIoSmUudG91Y2htb3ZlLGp0LHtwYXNzaXZlOiExfSksc2UucmVtb3ZlRXZlbnRMaXN0ZW5lcihKZS50b3VjaG1vdmUsTnQse3Bhc3NpdmU6ITF9KSksSyhvKVswXS5yZW1vdmVFdmVudExpc3RlbmVyKEplLnRvdWNoc3RhcnQsRHQpLEsobylbMF0ucmVtb3ZlRXZlbnRMaXN0ZW5lcihKZS50b3VjaG1vdmUsanQse3Bhc3NpdmU6ITF9KSkpfWZ1bmN0aW9uIFN0KGUsdCl7dm9pZCAwIT09dD8odD10LnJlcGxhY2UoLyAvZyxcIlwiKS5zcGxpdChcIixcIikpLmZvckVhY2goZnVuY3Rpb24odCl7em4oZSx0LFwia1wiKX0pOih6bihlLFwiYWxsXCIsXCJrXCIpLEYua2V5Ym9hcmRTY3JvbGxpbmc9ZSl9ZnVuY3Rpb24gYnQoKXt2YXIgZT1aKEsoZylbMF0saCk7ZXx8IUYubG9vcFRvcCYmIUYuY29udGludW91c1ZlcnRpY2FsfHwoZT1vZShLKGgpKSksbnVsbCE9ZSYmV3QoZSxudWxsLCEwKX1mdW5jdGlvbiB3dCgpe3ZhciBlPWVlKEsoZylbMF0saCk7ZXx8IUYubG9vcEJvdHRvbSYmIUYuY29udGludW91c1ZlcnRpY2FsfHwoZT1LKGgpWzBdKSxudWxsIT1lJiZXdChlLG51bGwsITEpfWZ1bmN0aW9uIHl0KGUsdCl7dnQoMCxcImludGVybmFsXCIpLEV0KGUsdCksdnQoZXQuc2Nyb2xsaW5nU3BlZWQsXCJpbnRlcm5hbFwiKX1mdW5jdGlvbiBFdChlLHQpe3ZhciBuPXhuKGUpO3ZvaWQgMCE9PXQ/VG4oZSx0KTpudWxsIT1uJiZXdChuKX1mdW5jdGlvbiBMdChlKXtVdChcInJpZ2h0XCIsZSl9ZnVuY3Rpb24geHQoZSl7VXQoXCJsZWZ0XCIsZSl9ZnVuY3Rpb24gVHQodCl7aWYoIVEoTmUsbCkpe1BlPSEwLGplPUcoKTtmb3IodmFyIG49SyhoKSxvPTA7bzxuLmxlbmd0aDsrK28pe3ZhciBpPW5bb10scj1LKEgsaSlbMF0sYT1LKE0saSk7Ri52ZXJ0aWNhbENlbnRlcmVkJiYkKEsoUyxpKSx7aGVpZ2h0OkVuKGkpK1wicHhcIn0pLCQoaSx7aGVpZ2h0OmplK1wicHhcIn0pLGEubGVuZ3RoPjEmJnZuKHIsSyhPLHIpWzBdKX1GLnNjcm9sbE92ZXJmbG93JiZGZS5jcmVhdGVTY3JvbGxCYXJGb3JBbGwoKTt2YXIgcz1pZShLKGcpWzBdLGgpO3MmJnl0KHMrMSksUGU9ITEsRWUoRi5hZnRlclJlc2l6ZSkmJnQmJkYuYWZ0ZXJSZXNpemUuY2FsbChOZSxlLmlubmVyV2lkdGgsZS5pbm5lckhlaWdodCksRWUoRi5hZnRlclJlQnVpbGQpJiYhdCYmRi5hZnRlclJlQnVpbGQuY2FsbChOZSl9fWZ1bmN0aW9uIEF0KGUpe3ZhciB0PVEoc2UsaSk7ZT90fHwoZnQoITEsXCJpbnRlcm5hbFwiKSxwdCghMSxcImludGVybmFsXCIpLGxlKEsoRSkpLGNlKHNlLGkpLEVlKEYuYWZ0ZXJSZXNwb25zaXZlKSYmRi5hZnRlclJlc3BvbnNpdmUuY2FsbChOZSxlKSk6dCYmKGZ0KGV0LmF1dG9TY3JvbGxpbmcsXCJpbnRlcm5hbFwiKSxwdChldC5hdXRvU2Nyb2xsaW5nLFwiaW50ZXJuYWxcIiksYWUoSyhFKSksdWUoc2UsaSksRWUoRi5hZnRlclJlc3BvbnNpdmUpJiZGLmFmdGVyUmVzcG9uc2l2ZS5jYWxsKE5lLGUpKX1mdW5jdGlvbiBrdChlKXt2YXIgdD1lLnRhcmdldDt0JiZoZSh0LEUrXCIgYVwiKT9mdW5jdGlvbihlKXt5ZShlKTt2YXIgdD1pZShoZSh0aGlzLEUrXCIgbGlcIikpO1d0KEsoaClbdF0pfS5jYWxsKHQsZSk6eGUodCx4KT9mdW5jdGlvbigpe0xlKHRlKHRoaXMpLFwiY2xpY2tcIil9LmNhbGwodCk6eGUodCxEKT9mdW5jdGlvbigpe3ZhciBlPWhlKHRoaXMsaCk7USh0aGlzLFYpP1VlLm0ubGVmdCYmeHQoZSk6VWUubS5yaWdodCYmTHQoZSl9LmNhbGwodCxlKTooeGUodCxqKXx8bnVsbCE9aGUodCxqKSkmJmZ1bmN0aW9uKGUpe3llKGUpO3ZhciB0PUsoSCxoZSh0aGlzLGgpKVswXSxuPUsoTSx0KVtpZShoZSh0aGlzLFwibGlcIikpXTt2bih0LG4pfS5jYWxsKHQsZSl9ZnVuY3Rpb24gTXQoZSxuKXt0W1wiZnBfXCIrZV09bix0LmFkZEV2ZW50TGlzdGVuZXIoZSxPdCwhMCl9ZnVuY3Rpb24gT3QoZSl7ZS50YXJnZXQhPXQmJkYubm9ybWFsU2Nyb2xsRWxlbWVudHMuc3BsaXQoXCIsXCIpLmZvckVhY2goZnVuY3Rpb24obil7eGUoZS50YXJnZXQsbikmJm10KHRbXCJmcF9cIitlLnR5cGVdKX0pfWZ1bmN0aW9uIEN0KGUsbixvKXt2YXIgaT0xMDAqbyxyPTEwMC9vLGw9dC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO2wuY2xhc3NOYW1lPUMsdmUobixsKTt2YXIgYSxzLHU9dC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO3UuY2xhc3NOYW1lPUksdmUobix1KSwkKEsoUixlKSx7d2lkdGg6aStcIiVcIn0pLG8+MSYmKEYuY29udHJvbEFycm93cyYmKGE9ZSxzPVtBZSgnPGRpdiBjbGFzcz1cIicrWSsnXCI+PC9kaXY+JyksQWUoJzxkaXYgY2xhc3M9XCInK1crJ1wiPjwvZGl2PicpXSxnZShLKEgsYSlbMF0scyksXCIjZmZmXCIhPT1GLmNvbnRyb2xBcnJvd0NvbG9yJiYoJChLKFgsYSkse1wiYm9yZGVyLWNvbG9yXCI6XCJ0cmFuc3BhcmVudCB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCBcIitGLmNvbnRyb2xBcnJvd0NvbG9yfSksJChLKFUsYSkse1wiYm9yZGVyLWNvbG9yXCI6XCJ0cmFuc3BhcmVudCBcIitGLmNvbnRyb2xBcnJvd0NvbG9yK1wiIHRyYW5zcGFyZW50IHRyYW5zcGFyZW50XCJ9KSksRi5sb29wSG9yaXpvbnRhbHx8bGUoSyhVLGEpKSksRi5zbGlkZXNOYXZpZ2F0aW9uJiZmdW5jdGlvbihlLHQpe2ZlKEFlKCc8ZGl2IGNsYXNzPVwiJyt6KydcIj48dWw+PC91bD48L2Rpdj4nKSxlKTt2YXIgbj1LKE4sZSlbMF07Y2UobixcImZwLVwiK0Yuc2xpZGVzTmF2UG9zaXRpb24pO2Zvcih2YXIgbz0wO288dDtvKyspZmUoQWUoJzxsaT48YSBocmVmPVwiI1wiPjxzcGFuIGNsYXNzPVwiZnAtc3Itb25seVwiPicrSHQobyxcIlNsaWRlXCIpK1wiPC9zcGFuPjxzcGFuPjwvc3Bhbj48L2E+PC9saT5cIiksSyhcInVsXCIsbilbMF0pOyQobix7XCJtYXJnaW4tbGVmdFwiOlwiLVwiK24uaW5uZXJXaWR0aC8yK1wicHhcIn0pLGNlKEsoXCJhXCIsSyhcImxpXCIsbilbMF0pLGMpfShlLG8pKSxuLmZvckVhY2goZnVuY3Rpb24oZSl7JChlLHt3aWR0aDpyK1wiJVwifSksRi52ZXJ0aWNhbENlbnRlcmVkJiZ5bihlKX0pO3ZhciBmPUsoTyxlKVswXTtudWxsIT1mJiYoMCE9PWllKEsoZyksaCl8fDA9PT1pZShLKGcpLGgpJiYwIT09aWUoZikpP0luKGYsXCJpbnRlcm5hbFwiKTpjZShuWzBdLGMpfWZ1bmN0aW9uIEh0KGUsdCl7cmV0dXJuIEYubmF2aWdhdGlvblRvb2x0aXBzW2VdfHxGLmFuY2hvcnNbZV18fHQrXCIgXCIrKGUrMSl9ZnVuY3Rpb24gSXQoKXt2YXIgZSx0PUsoZylbMF07Y2UodCxmKSwkdCh0KSxKdCh0KSxGLnNjcm9sbE92ZXJmbG93JiZGLnNjcm9sbE92ZXJmbG93SGFuZGxlci5hZnRlckxvYWQoKSwoIShlPXhuKHJuKCkuc2VjdGlvbikpfHx2b2lkIDAhPT1lJiZpZShlKT09PWllKEllKSkmJkVlKEYuYWZ0ZXJMb2FkKSYmWHQoXCJhZnRlckxvYWRcIix7YWN0aXZlU2VjdGlvbjpudWxsLGVsZW1lbnQ6dCxkaXJlY3Rpb246bnVsbCxhbmNob3JMaW5rOnQuZ2V0QXR0cmlidXRlKFwiZGF0YS1hbmNob3JcIiksc2VjdGlvbkluZGV4OmllKHQsaCl9KSxFZShGLmFmdGVyUmVuZGVyKSYmWHQoXCJhZnRlclJlbmRlclwiKX1mdW5jdGlvbiBSdCgpe3ZhciBlLHQsbixvLGkscjtpZighRi5hdXRvU2Nyb2xsaW5nfHxGLnNjcm9sbEJhcil7dmFyIGw9YmUoKSxhPShuPSh0PWwpPm50P1wiZG93blwiOlwidXBcIixudD10LHN0PXQsbikscz0wLHU9bCtHKCkvMixkPXNlLm9mZnNldEhlaWdodC1HKCk9PT1sLHY9SyhoKTtpZihkKXM9di5sZW5ndGgtMTtlbHNlIGlmKGwpZm9yKHZhciBwPTA7cDx2Lmxlbmd0aDsrK3ApdltwXS5vZmZzZXRUb3A8PXUmJihzPXApO2Vsc2Ugcz0wO2lmKG89YSxpPUsoZylbMF0ub2Zmc2V0VG9wLHI9aStHKCksKFwidXBcIj09bz9yPj1iZSgpK0coKTppPD1iZSgpKSYmKFEoSyhnKVswXSxmKXx8KGNlKEsoZylbMF0sZiksdWUod2UoSyhnKVswXSksZikpKSwhUShlPXZbc10sYykpe3R0PSEwO3ZhciBtLFMsYj1LKGcpWzBdLHc9aWUoYixoKSsxLHk9d24oZSksRT1lLmdldEF0dHJpYnV0ZShcImRhdGEtYW5jaG9yXCIpLEw9aWUoZSxoKSsxLHg9SyhPLGUpWzBdLFQ9e2FjdGl2ZVNlY3Rpb246YixzZWN0aW9uSW5kZXg6TC0xLGFuY2hvckxpbms6RSxlbGVtZW50OmUsbGVhdmluZ1NlY3Rpb246dyxkaXJlY3Rpb246eX07eCYmKFM9eC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWFuY2hvclwiKSxtPWllKHgpKSxWZSYmKGNlKGUsYyksdWUod2UoZSksYyksRWUoRi5vbkxlYXZlKSYmWHQoXCJvbkxlYXZlXCIsVCksRWUoRi5hZnRlckxvYWQpJiZYdChcImFmdGVyTG9hZFwiLFQpLGVuKGIpLCR0KGUpLEp0KGUpLGJuKEUsTC0xKSxGLmFuY2hvcnMubGVuZ3RoJiYoU2U9RSksa24obSxTLEUpKSxjbGVhclRpbWVvdXQoS2UpLEtlPXNldFRpbWVvdXQoZnVuY3Rpb24oKXt0dD0hMX0sMTAwKX1GLmZpdFRvU2VjdGlvbiYmKGNsZWFyVGltZW91dChxZSkscWU9c2V0VGltZW91dChmdW5jdGlvbigpe0YuZml0VG9TZWN0aW9uJiZLKGcpWzBdLm9mZnNldEhlaWdodDw9amUmJkJ0KCl9LEYuZml0VG9TZWN0aW9uRGVsYXkpKX19ZnVuY3Rpb24gQnQoKXtWZSYmKFBlPSEwLFd0KEsoZylbMF0pLFBlPSExKX1mdW5jdGlvbiB6dChlKXtpZihVZS5tW2VdKXt2YXIgdD1cImRvd25cIj09PWU/d3Q6YnQ7aWYoRi5zY3JvbGxPdmVyZmxvdyl7dmFyIG49Ri5zY3JvbGxPdmVyZmxvd0hhbmRsZXIuc2Nyb2xsYWJsZShLKGcpWzBdKSxvPVwiZG93blwiPT09ZT9cImJvdHRvbVwiOlwidG9wXCI7aWYobnVsbCE9bil7aWYoIUYuc2Nyb2xsT3ZlcmZsb3dIYW5kbGVyLmlzU2Nyb2xsZWQobyxuKSlyZXR1cm4hMDt0KCl9ZWxzZSB0KCl9ZWxzZSB0KCl9fWZ1bmN0aW9uIE50KGUpe0YuYXV0b1Njcm9sbGluZyYmUHQoZSkmJnllKGUpfWZ1bmN0aW9uIGp0KHQpe3ZhciBuPWhlKHQudGFyZ2V0LGgpO2lmKFB0KHQpKXtGLmF1dG9TY3JvbGxpbmcmJnllKHQpO3ZhciBvPUhuKHQpO3J0PW8ueSxsdD1vLngsSyhILG4pLmxlbmd0aCYmTWF0aC5hYnMoaXQtbHQpPk1hdGguYWJzKG90LXJ0KT8hUmUmJk1hdGguYWJzKGl0LWx0KT5lLmlubmVyV2lkdGgvMTAwKkYudG91Y2hTZW5zaXRpdml0eSYmKGl0Pmx0P1VlLm0ucmlnaHQmJkx0KG4pOlVlLm0ubGVmdCYmeHQobikpOkYuYXV0b1Njcm9sbGluZyYmVmUmJk1hdGguYWJzKG90LXJ0KT5lLmlubmVySGVpZ2h0LzEwMCpGLnRvdWNoU2Vuc2l0aXZpdHkmJihvdD5ydD96dChcImRvd25cIik6cnQ+b3QmJnp0KFwidXBcIikpfX1mdW5jdGlvbiBQdChlKXtyZXR1cm4gdm9pZCAwPT09ZS5wb2ludGVyVHlwZXx8XCJtb3VzZVwiIT1lLnBvaW50ZXJUeXBlfWZ1bmN0aW9uIER0KGUpe2lmKEYuZml0VG9TZWN0aW9uJiYoR2U9ITEpLFB0KGUpKXt2YXIgdD1IbihlKTtvdD10LnksaXQ9dC54fX1mdW5jdGlvbiBWdChlLHQpe2Zvcih2YXIgbj0wLG89ZS5zbGljZShNYXRoLm1heChlLmxlbmd0aC10LDEpKSxpPTA7aTxvLmxlbmd0aDtpKyspbis9b1tpXTtyZXR1cm4gTWF0aC5jZWlsKG4vdCl9ZnVuY3Rpb24gWXQodCl7dmFyIG49KG5ldyBEYXRlKS5nZXRUaW1lKCksbz1RKEsoZClbMF0sdyk7aWYoIVVlLm0uZG93biYmIVVlLm0udXApcmV0dXJuIHllKHQpLCExO2lmKEYuYXV0b1Njcm9sbGluZyYmIUhlJiYhbyl7dmFyIGk9KHQ9dHx8ZS5ldmVudCkud2hlZWxEZWx0YXx8LXQuZGVsdGFZfHwtdC5kZXRhaWwscj1NYXRoLm1heCgtMSxNYXRoLm1pbigxLGkpKSxsPXZvaWQgMCE9PXQud2hlZWxEZWx0YVh8fHZvaWQgMCE9PXQuZGVsdGFYLGE9TWF0aC5hYnModC53aGVlbERlbHRhWCk8TWF0aC5hYnModC53aGVlbERlbHRhKXx8TWF0aC5hYnModC5kZWx0YVgpPE1hdGguYWJzKHQuZGVsdGFZKXx8IWw7WWUubGVuZ3RoPjE0OSYmWWUuc2hpZnQoKSxZZS5wdXNoKE1hdGguYWJzKGkpKSxGLnNjcm9sbEJhciYmeWUodCk7dmFyIHM9bi1hdDtyZXR1cm4gYXQ9bixzPjIwMCYmKFllPVtdKSxWZSYmVnQoWWUsMTApPj1WdChZZSw3MCkmJmEmJnp0KHI8MD9cImRvd25cIjpcInVwXCIpLCExfUYuZml0VG9TZWN0aW9uJiYoR2U9ITEpfWZ1bmN0aW9uIFV0KGUsdCl7dmFyIG49bnVsbD09dD9LKGcpWzBdOnQsbz1LKEgsbilbMF07aWYoIShudWxsPT1vfHxSZXx8SyhNLG8pLmxlbmd0aDwyKSl7dmFyIGk9SyhPLG8pWzBdLHI9bnVsbDtpZihudWxsPT0ocj1cImxlZnRcIj09PWU/WihpLE0pOmVlKGksTSkpKXtpZighRi5sb29wSG9yaXpvbnRhbClyZXR1cm47dmFyIGw9d2UoaSk7cj1cImxlZnRcIj09PWU/bFtsLmxlbmd0aC0xXTpsWzBdfVJlPSFkZS50ZXN0LmlzVGVzdGluZyx2bihvLHIsZSl9fWZ1bmN0aW9uIEZ0KCl7Zm9yKHZhciBlPUsoTyksdD0wO3Q8ZS5sZW5ndGg7dCsrKUluKGVbdF0sXCJpbnRlcm5hbFwiKX1mdW5jdGlvbiBXdChlLHQsbil7aWYobnVsbCE9ZSl7dmFyIG8saSxyLGwsYSxzLHUsZixkLHY9e2VsZW1lbnQ6ZSxjYWxsYmFjazp0LGlzTW92ZW1lbnRVcDpuLGR0b3A6KGk9KG89ZSkub2Zmc2V0SGVpZ2h0LHI9by5vZmZzZXRUb3AsYT1yPnN0LHM9KGw9ciktamUraSx1PUYuYmlnU2VjdGlvbnNEZXN0aW5hdGlvbixpPmplPyhhfHx1KSYmXCJib3R0b21cIiE9PXV8fChsPXMpOihhfHxQZSYmbnVsbD09bmUobykpJiYobD1zKSxzdD1sLGwpLHlNb3ZlbWVudDp3bihlKSxhbmNob3JMaW5rOmUuZ2V0QXR0cmlidXRlKFwiZGF0YS1hbmNob3JcIiksc2VjdGlvbkluZGV4OmllKGUsaCksYWN0aXZlU2xpZGU6SyhPLGUpWzBdLGFjdGl2ZVNlY3Rpb246SyhnKVswXSxsZWF2aW5nU2VjdGlvbjppZShLKGcpLGgpKzEsbG9jYWxJc1Jlc2l6aW5nOlBlfTtpZighKHYuYWN0aXZlU2VjdGlvbj09ZSYmIVBlfHxGLnNjcm9sbEJhciYmYmUoKT09PXYuZHRvcCYmIVEoZSxiKSkpe2lmKG51bGwhPXYuYWN0aXZlU2xpZGUmJihmPXYuYWN0aXZlU2xpZGUuZ2V0QXR0cmlidXRlKFwiZGF0YS1hbmNob3JcIiksZD1pZSh2LmFjdGl2ZVNsaWRlKSksRWUoRi5vbkxlYXZlKSYmIXYubG9jYWxJc1Jlc2l6aW5nKXt2YXIgcD12LnlNb3ZlbWVudDtpZih2b2lkIDAhPT1uJiYocD1uP1widXBcIjpcImRvd25cIiksdi5kaXJlY3Rpb249cCwhMT09PVh0KFwib25MZWF2ZVwiLHYpKXJldHVybn1GLmF1dG9TY3JvbGxpbmcmJkYuY29udGludW91c1ZlcnRpY2FsJiZ2b2lkIDAhPT12LmlzTW92ZW1lbnRVcCYmKCF2LmlzTW92ZW1lbnRVcCYmXCJ1cFwiPT12LnlNb3ZlbWVudHx8di5pc01vdmVtZW50VXAmJlwiZG93blwiPT12LnlNb3ZlbWVudCkmJigobT12KS5pc01vdmVtZW50VXA/bWUoSyhnKVswXSxPZShtLmFjdGl2ZVNlY3Rpb24saCkpOmdlKEsoZylbMF0sQ2UobS5hY3RpdmVTZWN0aW9uLGgpLnJldmVyc2UoKSksUm4oSyhnKVswXS5vZmZzZXRUb3ApLEZ0KCksbS53cmFwQXJvdW5kRWxlbWVudHM9bS5hY3RpdmVTZWN0aW9uLG0uZHRvcD1tLmVsZW1lbnQub2Zmc2V0VG9wLG0ueU1vdmVtZW50PXduKG0uZWxlbWVudCksbS5sZWF2aW5nU2VjdGlvbj1pZShtLmFjdGl2ZVNlY3Rpb24saCkrMSxtLnNlY3Rpb25JbmRleD1pZShtLmVsZW1lbnQsaCksdj1tKSx2LmxvY2FsSXNSZXNpemluZ3x8ZW4odi5hY3RpdmVTZWN0aW9uKSxGLnNjcm9sbE92ZXJmbG93JiZGLnNjcm9sbE92ZXJmbG93SGFuZGxlci5iZWZvcmVMZWF2ZSgpLGNlKGUsYyksdWUod2UoZSksYyksJHQoZSksRi5zY3JvbGxPdmVyZmxvdyYmRi5zY3JvbGxPdmVyZmxvd0hhbmRsZXIub25MZWF2ZSgpLFZlPWRlLnRlc3QuaXNUZXN0aW5nLGtuKGQsZix2LmFuY2hvckxpbmssdi5zZWN0aW9uSW5kZXgpLGZ1bmN0aW9uKGUpe2lmKEYuY3NzMyYmRi5hdXRvU2Nyb2xsaW5nJiYhRi5zY3JvbGxCYXIpe3ZhciB0PVwidHJhbnNsYXRlM2QoMHB4LCAtXCIrTWF0aC5yb3VuZChlLmR0b3ApK1wicHgsIDBweClcIjtMbih0LCEwKSxGLnNjcm9sbGluZ1NwZWVkPyhjbGVhclRpbWVvdXQoWGUpLFhlPXNldFRpbWVvdXQoZnVuY3Rpb24oKXtRdChlKX0sRi5zY3JvbGxpbmdTcGVlZCkpOlF0KGUpfWVsc2V7dmFyIG49cXQoZS5kdG9wKTtkZS50ZXN0LnRvcD0tZS5kdG9wK1wicHhcIixQbihuLmVsZW1lbnQsbi5vcHRpb25zLEYuc2Nyb2xsaW5nU3BlZWQsZnVuY3Rpb24oKXtGLnNjcm9sbEJhcj9zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7UXQoZSl9LDMwKTpRdChlKX0pfX0odiksU2U9di5hbmNob3JMaW5rLGJuKHYuYW5jaG9yTGluayx2LnNlY3Rpb25JbmRleCl9fXZhciBtfWZ1bmN0aW9uIFh0KGUsdCl7dmFyIG4sbyxpLHIsbD0obz1lLGk9dCwocj1GLnYyY29tcGF0aWJsZT97YWZ0ZXJSZW5kZXI6ZnVuY3Rpb24oKXtyZXR1cm5bTmVdfSxvbkxlYXZlOmZ1bmN0aW9uKCl7cmV0dXJuW2kuYWN0aXZlU2VjdGlvbixpLmxlYXZpbmdTZWN0aW9uLGkuc2VjdGlvbkluZGV4KzEsaS5kaXJlY3Rpb25dfSxhZnRlckxvYWQ6ZnVuY3Rpb24oKXtyZXR1cm5baS5lbGVtZW50LGkuYW5jaG9yTGluayxpLnNlY3Rpb25JbmRleCsxXX0sYWZ0ZXJTbGlkZUxvYWQ6ZnVuY3Rpb24oKXtyZXR1cm5baS5kZXN0aW55LGkuYW5jaG9yTGluayxpLnNlY3Rpb25JbmRleCsxLGkuc2xpZGVBbmNob3IsaS5zbGlkZUluZGV4XX0sb25TbGlkZUxlYXZlOmZ1bmN0aW9uKCl7cmV0dXJuW2kucHJldlNsaWRlLGkuYW5jaG9yTGluayxpLnNlY3Rpb25JbmRleCsxLGkucHJldlNsaWRlSW5kZXgsaS5kaXJlY3Rpb24saS5zbGlkZUluZGV4XX19OnthZnRlclJlbmRlcjpmdW5jdGlvbigpe3JldHVybntzZWN0aW9uOl90KEsoZylbMF0pLHNsaWRlOkt0KEsoTyxLKGcpWzBdKVswXSl9fSxvbkxlYXZlOmZ1bmN0aW9uKCl7cmV0dXJue29yaWdpbjpfdChpLmFjdGl2ZVNlY3Rpb24pLGRlc3RpbmF0aW9uOl90KGkuZWxlbWVudCksZGlyZWN0aW9uOmkuZGlyZWN0aW9ufX0sYWZ0ZXJMb2FkOmZ1bmN0aW9uKCl7cmV0dXJuIHIub25MZWF2ZSgpfSxhZnRlclNsaWRlTG9hZDpmdW5jdGlvbigpe3JldHVybntzZWN0aW9uOl90KGkuc2VjdGlvbiksb3JpZ2luOkt0KGkucHJldlNsaWRlKSxkZXN0aW5hdGlvbjpLdChpLmRlc3RpbnkpLGRpcmVjdGlvbjppLmRpcmVjdGlvbn19LG9uU2xpZGVMZWF2ZTpmdW5jdGlvbigpe3JldHVybiByLmFmdGVyU2xpZGVMb2FkKCl9fSlbb10oKSk7aWYoRi52MmNvbXBhdGlibGUpe2lmKCExPT09RltlXS5hcHBseShsWzBdLGwuc2xpY2UoMSkpKXJldHVybiExfWVsc2UgaWYoTGUoTmUsZSxsKSwhMT09PUZbZV0uYXBwbHkobFtPYmplY3Qua2V5cyhsKVswXV0sKG49bCxPYmplY3Qua2V5cyhuKS5tYXAoZnVuY3Rpb24oZSl7cmV0dXJuIG5bZV19KSkpKXJldHVybiExO3JldHVybiEwfWZ1bmN0aW9uIF90KGUpe3JldHVybiBlP25ldyBZbihlKTpudWxsfWZ1bmN0aW9uIEt0KGUpe3JldHVybiBlP25ldyBmdW5jdGlvbihlKXtWbi5jYWxsKHRoaXMsZSxNKX0oZSk6bnVsbH1mdW5jdGlvbiBxdCh0KXt2YXIgbj17fTtyZXR1cm4gRi5hdXRvU2Nyb2xsaW5nJiYhRi5zY3JvbGxCYXI/KG4ub3B0aW9ucz0tdCxuLmVsZW1lbnQ9SyhvKVswXSk6KG4ub3B0aW9ucz10LG4uZWxlbWVudD1lKSxufWZ1bmN0aW9uIFF0KGUpe3ZhciB0O251bGwhPSh0PWUpLndyYXBBcm91bmRFbGVtZW50cyYmKHQuaXNNb3ZlbWVudFVwP21lKEsoaClbMF0sdC53cmFwQXJvdW5kRWxlbWVudHMpOmdlKEsoaClbSyhoKS5sZW5ndGgtMV0sdC53cmFwQXJvdW5kRWxlbWVudHMpLFJuKEsoZylbMF0ub2Zmc2V0VG9wKSxGdCgpKSxFZShGLmFmdGVyTG9hZCkmJiFlLmxvY2FsSXNSZXNpemluZyYmWHQoXCJhZnRlckxvYWRcIixlKSxGLnNjcm9sbE92ZXJmbG93JiZGLnNjcm9sbE92ZXJmbG93SGFuZGxlci5hZnRlckxvYWQoKSxlLmxvY2FsSXNSZXNpemluZ3x8SnQoZS5lbGVtZW50KSxjZShlLmVsZW1lbnQsZiksdWUod2UoZS5lbGVtZW50KSxmKSxWZT0hMCxFZShlLmNhbGxiYWNrKSYmZS5jYWxsYmFjaygpfWZ1bmN0aW9uIEd0KGUsdCl7ZS5zZXRBdHRyaWJ1dGUodCxlLmdldEF0dHJpYnV0ZShcImRhdGEtXCIrdCkpLGUucmVtb3ZlQXR0cmlidXRlKFwiZGF0YS1cIit0KX1mdW5jdGlvbiAkdChlKXtGLmxhenlMb2FkaW5nJiZLKFwiaW1nW2RhdGEtc3JjXSwgaW1nW2RhdGEtc3Jjc2V0XSwgc291cmNlW2RhdGEtc3JjXSwgc291cmNlW2RhdGEtc3Jjc2V0XSwgdmlkZW9bZGF0YS1zcmNdLCBhdWRpb1tkYXRhLXNyY10sIGlmcmFtZVtkYXRhLXNyY11cIix0bihlKSkuZm9yRWFjaChmdW5jdGlvbihlKXtpZihbXCJzcmNcIixcInNyY3NldFwiXS5mb3JFYWNoKGZ1bmN0aW9uKHQpe3ZhciBuPWUuZ2V0QXR0cmlidXRlKFwiZGF0YS1cIit0KTtudWxsIT1uJiZuJiZHdChlLHQpfSkseGUoZSxcInNvdXJjZVwiKSl7dmFyIHQ9aGUoZSxcInZpZGVvLCBhdWRpb1wiKTt0JiZ0LmxvYWQoKX19KX1mdW5jdGlvbiBKdChlKXt2YXIgdD10bihlKTtLKFwidmlkZW8sIGF1ZGlvXCIsdCkuZm9yRWFjaChmdW5jdGlvbihlKXtlLmhhc0F0dHJpYnV0ZShcImRhdGEtYXV0b3BsYXlcIikmJlwiZnVuY3Rpb25cIj09dHlwZW9mIGUucGxheSYmZS5wbGF5KCl9KSxLKCdpZnJhbWVbc3JjKj1cInlvdXR1YmUuY29tL2VtYmVkL1wiXScsdCkuZm9yRWFjaChmdW5jdGlvbihlKXtlLmhhc0F0dHJpYnV0ZShcImRhdGEtYXV0b3BsYXlcIikmJlp0KGUpLGUub25sb2FkPWZ1bmN0aW9uKCl7ZS5oYXNBdHRyaWJ1dGUoXCJkYXRhLWF1dG9wbGF5XCIpJiZadChlKX19KX1mdW5jdGlvbiBadChlKXtlLmNvbnRlbnRXaW5kb3cucG9zdE1lc3NhZ2UoJ3tcImV2ZW50XCI6XCJjb21tYW5kXCIsXCJmdW5jXCI6XCJwbGF5VmlkZW9cIixcImFyZ3NcIjpcIlwifScsXCIqXCIpfWZ1bmN0aW9uIGVuKGUpe3ZhciB0PXRuKGUpO0soXCJ2aWRlbywgYXVkaW9cIix0KS5mb3JFYWNoKGZ1bmN0aW9uKGUpe2UuaGFzQXR0cmlidXRlKFwiZGF0YS1rZWVwcGxheWluZ1wiKXx8XCJmdW5jdGlvblwiIT10eXBlb2YgZS5wYXVzZXx8ZS5wYXVzZSgpfSksSygnaWZyYW1lW3NyYyo9XCJ5b3V0dWJlLmNvbS9lbWJlZC9cIl0nLHQpLmZvckVhY2goZnVuY3Rpb24oZSl7L3lvdXR1YmVcXC5jb21cXC9lbWJlZFxcLy8udGVzdChlLmdldEF0dHJpYnV0ZShcInNyY1wiKSkmJiFlLmhhc0F0dHJpYnV0ZShcImRhdGEta2VlcHBsYXlpbmdcIikmJmUuY29udGVudFdpbmRvdy5wb3N0TWVzc2FnZSgne1wiZXZlbnRcIjpcImNvbW1hbmRcIixcImZ1bmNcIjpcInBhdXNlVmlkZW9cIixcImFyZ3NcIjpcIlwifScsXCIqXCIpfSl9ZnVuY3Rpb24gdG4oZSl7dmFyIHQ9SyhPLGUpO3JldHVybiB0Lmxlbmd0aCYmKGU9dFswXSksZX1mdW5jdGlvbiBubigpe3ZhciBlPXJuKCksdD1lLnNlY3Rpb24sbj1lLnNsaWRlO3QmJihGLmFuaW1hdGVBbmNob3I/VG4odCxuKTp5dCh0LG4pKX1mdW5jdGlvbiBvbigpe2lmKCF0dCYmIUYubG9ja0FuY2hvcnMpe3ZhciBlPXJuKCksdD1lLnNlY3Rpb24sbj1lLnNsaWRlLG89dm9pZCAwPT09U2UsaT12b2lkIDA9PT1TZSYmdm9pZCAwPT09biYmIVJlO3QmJnQubGVuZ3RoJiYodCYmdCE9PVNlJiYhb3x8aXx8IVJlJiZNZSE9bikmJlRuKHQsbil9fWZ1bmN0aW9uIHJuKCl7dmFyIHQsbixvPWUubG9jYXRpb24uaGFzaDtpZihvLmxlbmd0aCl7dmFyIGk9by5yZXBsYWNlKFwiI1wiLFwiXCIpLnNwbGl0KFwiL1wiKSxyPW8uaW5kZXhPZihcIiMvXCIpPi0xO3Q9cj9cIi9cIitpWzFdOmRlY29kZVVSSUNvbXBvbmVudChpWzBdKTt2YXIgbD1yP2lbMl06aVsxXTtsJiZsLmxlbmd0aCYmKG49ZGVjb2RlVVJJQ29tcG9uZW50KGwpKX1yZXR1cm57c2VjdGlvbjp0LHNsaWRlOm59fWZ1bmN0aW9uIGxuKGUpe2NsZWFyVGltZW91dChRZSk7dmFyIG49dC5hY3RpdmVFbGVtZW50LG89ZS5rZXlDb2RlOzk9PT1vP2Z1bmN0aW9uKGUpe3ZhciBuLG8saSxyLGwsYSxzLGM9ZS5zaGlmdEtleSx1PXQuYWN0aXZlRWxlbWVudCxmPXVuKHRuKEsoZylbMF0pKTtmdW5jdGlvbiBkKGUpe3JldHVybiB5ZShlKSxmWzBdP2ZbMF0uZm9jdXMoKTpudWxsfShuPWUsbz11bih0KSxpPW8uaW5kZXhPZih0LmFjdGl2ZUVsZW1lbnQpLHI9bi5zaGlmdEtleT9pLTE6aSsxLGw9b1tyXSxhPUt0KGhlKGwsTSkpLHM9X3QoaGUobCxoKSksYXx8cykmJih1P251bGw9PWhlKHUsZytcIixcIitnK1wiIFwiK08pJiYodT1kKGUpKTpkKGUpLCghYyYmdT09ZltmLmxlbmd0aC0xXXx8YyYmdT09ZlswXSkmJnllKGUpKX0oZSk6eGUobixcInRleHRhcmVhXCIpfHx4ZShuLFwiaW5wdXRcIil8fHhlKG4sXCJzZWxlY3RcIil8fFwidHJ1ZVwiPT09bi5nZXRBdHRyaWJ1dGUoXCJjb250ZW50RWRpdGFibGVcIil8fFwiXCI9PT1uLmdldEF0dHJpYnV0ZShcImNvbnRlbnRFZGl0YWJsZVwiKXx8IUYua2V5Ym9hcmRTY3JvbGxpbmd8fCFGLmF1dG9TY3JvbGxpbmd8fChbNDAsMzgsMzIsMzMsMzRdLmluZGV4T2Yobyk+LTEmJnllKGUpLEhlPWUuY3RybEtleSxRZT1zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7IWZ1bmN0aW9uKGUpe3ZhciB0PWUuc2hpZnRLZXk7aWYoVmV8fCEoWzM3LDM5XS5pbmRleE9mKGUua2V5Q29kZSk8MCkpc3dpdGNoKGUua2V5Q29kZSl7Y2FzZSAzODpjYXNlIDMzOlVlLmsudXAmJmJ0KCk7YnJlYWs7Y2FzZSAzMjppZih0JiZVZS5rLnVwKXtidCgpO2JyZWFrfWNhc2UgNDA6Y2FzZSAzNDpVZS5rLmRvd24mJnd0KCk7YnJlYWs7Y2FzZSAzNjpVZS5rLnVwJiZFdCgxKTticmVhaztjYXNlIDM1OlVlLmsuZG93biYmRXQoSyhoKS5sZW5ndGgpO2JyZWFrO2Nhc2UgMzc6VWUuay5sZWZ0JiZ4dCgpO2JyZWFrO2Nhc2UgMzk6VWUuay5yaWdodCYmTHQoKX19KGUpfSwxNTApKX1mdW5jdGlvbiBhbihlKXtEZSYmKEhlPWUuY3RybEtleSl9ZnVuY3Rpb24gc24oZSl7Mj09ZS53aGljaCYmKGN0PWUucGFnZVksTmUuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLGRuKSl9ZnVuY3Rpb24gY24oZSl7Mj09ZS53aGljaCYmTmUucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLGRuKX1mdW5jdGlvbiB1bihlKXtyZXR1cm5bXS5zbGljZS5jYWxsKEsoWmUsZSkpLmZpbHRlcihmdW5jdGlvbihlKXtyZXR1cm5cIi0xXCIhPT1lLmdldEF0dHJpYnV0ZShcInRhYmluZGV4XCIpJiZudWxsIT09ZS5vZmZzZXRQYXJlbnR9KX1mdW5jdGlvbiBmbigpe0RlPSExLEhlPSExfWZ1bmN0aW9uIGRuKGUpe1ZlJiYoZS5wYWdlWTxjdCYmVWUubS51cD9idCgpOmUucGFnZVk+Y3QmJlVlLm0uZG93biYmd3QoKSksY3Q9ZS5wYWdlWX1mdW5jdGlvbiB2bihlLHQsbil7dmFyIG8saSxyPWhlKGUsaCksbD17c2xpZGVzOmUsZGVzdGlueTp0LGRpcmVjdGlvbjpuLGRlc3RpbnlQb3M6e2xlZnQ6dC5vZmZzZXRMZWZ0fSxzbGlkZUluZGV4OmllKHQpLHNlY3Rpb246cixzZWN0aW9uSW5kZXg6aWUocixoKSxhbmNob3JMaW5rOnIuZ2V0QXR0cmlidXRlKFwiZGF0YS1hbmNob3JcIiksc2xpZGVzTmF2OksoTixyKVswXSxzbGlkZUFuY2hvcjpPbih0KSxwcmV2U2xpZGU6SyhPLHIpWzBdLHByZXZTbGlkZUluZGV4OmllKEsoTyxyKVswXSksbG9jYWxJc1Jlc2l6aW5nOlBlfTtsLnhNb3ZlbWVudD0obz1sLnByZXZTbGlkZUluZGV4LGk9bC5zbGlkZUluZGV4LG89PWk/XCJub25lXCI6bz5pP1wibGVmdFwiOlwicmlnaHRcIiksbC5sb2NhbElzUmVzaXppbmd8fChWZT0hMSksRi5vblNsaWRlTGVhdmUmJiFsLmxvY2FsSXNSZXNpemluZyYmXCJub25lXCIhPT1sLnhNb3ZlbWVudCYmRWUoRi5vblNsaWRlTGVhdmUpJiYhMT09PVh0KFwib25TbGlkZUxlYXZlXCIsbCk/UmU9ITE6KGNlKHQsYyksdWUod2UodCksYyksbC5sb2NhbElzUmVzaXppbmd8fChlbihsLnByZXZTbGlkZSksJHQodCkpLCFGLmxvb3BIb3Jpem9udGFsJiZGLmNvbnRyb2xBcnJvd3MmJihUZShLKFUsciksMCE9PWwuc2xpZGVJbmRleCksVGUoSyhYLHIpLG51bGwhPW5lKHQpKSksUShyLGMpJiYhbC5sb2NhbElzUmVzaXppbmcmJmtuKGwuc2xpZGVJbmRleCxsLnNsaWRlQW5jaG9yLGwuYW5jaG9yTGluayxsLnNlY3Rpb25JbmRleCksZnVuY3Rpb24oZSx0LG4pe3ZhciBvPXQuZGVzdGlueVBvcztpZihGLmNzczMpe3ZhciBpPVwidHJhbnNsYXRlM2QoLVwiK01hdGgucm91bmQoby5sZWZ0KStcInB4LCAwcHgsIDBweClcIjtkZS50ZXN0LnRyYW5zbGF0ZTNkSFt0LnNlY3Rpb25JbmRleF09aSwkKG1uKEsoUixlKSksQm4oaSkpLF9lPXNldFRpbWVvdXQoZnVuY3Rpb24oKXtuJiZwbih0KX0sRi5zY3JvbGxpbmdTcGVlZCl9ZWxzZSBkZS50ZXN0LmxlZnRbdC5zZWN0aW9uSW5kZXhdPU1hdGgucm91bmQoby5sZWZ0KSxQbihlLE1hdGgucm91bmQoby5sZWZ0KSxGLnNjcm9sbGluZ1NwZWVkLGZ1bmN0aW9uKCl7biYmcG4odCl9KX0oZSxsLCEwKSl9ZnVuY3Rpb24gcG4oZSl7dmFyIHQsbjt0PWUuc2xpZGVzTmF2LG49ZS5zbGlkZUluZGV4LEYuc2xpZGVzTmF2aWdhdGlvbiYmbnVsbCE9dCYmKHVlKEsodSx0KSxjKSxjZShLKFwiYVwiLEsoXCJsaVwiLHQpW25dKSxjKSksZS5sb2NhbElzUmVzaXppbmd8fChFZShGLmFmdGVyU2xpZGVMb2FkKSYmWHQoXCJhZnRlclNsaWRlTG9hZFwiLGUpLFZlPSEwLEp0KGUuZGVzdGlueSkpLFJlPSExfWZ1bmN0aW9uIGhuKCl7aWYoZ24oKSxCZSl7dmFyIGU9dC5hY3RpdmVFbGVtZW50O2lmKCF4ZShlLFwidGV4dGFyZWFcIikmJiF4ZShlLFwiaW5wdXRcIikmJiF4ZShlLFwic2VsZWN0XCIpKXt2YXIgbj1HKCk7TWF0aC5hYnMobi11dCk+MjAqTWF0aC5tYXgodXQsbikvMTAwJiYoVHQoITApLHV0PW4pfX1lbHNlIGNsZWFyVGltZW91dChXZSksV2U9c2V0VGltZW91dChmdW5jdGlvbigpe1R0KCEwKX0sMzUwKX1mdW5jdGlvbiBnbigpe3ZhciB0PUYucmVzcG9uc2l2ZXx8Ri5yZXNwb25zaXZlV2lkdGgsbj1GLnJlc3BvbnNpdmVIZWlnaHQsbz10JiZlLmlubmVyV2lkdGg8dCxpPW4mJmUuaW5uZXJIZWlnaHQ8bjt0JiZuP0F0KG98fGkpOnQ/QXQobyk6biYmQXQoaSl9ZnVuY3Rpb24gbW4oZSl7dmFyIHQ9XCJhbGwgXCIrRi5zY3JvbGxpbmdTcGVlZCtcIm1zIFwiK0YuZWFzaW5nY3NzMztyZXR1cm4gdWUoZSxyKSwkKGUse1wiLXdlYmtpdC10cmFuc2l0aW9uXCI6dCx0cmFuc2l0aW9uOnR9KX1mdW5jdGlvbiBTbihlKXtyZXR1cm4gY2UoZSxyKX1mdW5jdGlvbiBibihlLHQpe3ZhciBuLG8saSxyO249ZSxvPUsoRi5tZW51KVswXSxGLm1lbnUmJm51bGwhPW8mJih1ZShLKHUsbyksYyksY2UoSygnW2RhdGEtbWVudWFuY2hvcj1cIicrbisnXCJdJyxvKSxjKSksaT1lLHI9dCxGLm5hdmlnYXRpb24mJm51bGwhPUsoRSlbMF0mJih1ZShLKHUsSyhFKVswXSksYyksY2UoaT9LKCdhW2hyZWY9XCIjJytpKydcIl0nLEsoRSlbMF0pOksoXCJhXCIsSyhcImxpXCIsSyhFKVswXSlbcl0pLGMpKX1mdW5jdGlvbiB3bihlKXt2YXIgdD1pZShLKGcpWzBdLGgpLG49aWUoZSxoKTtyZXR1cm4gdD09bj9cIm5vbmVcIjp0Pm4/XCJ1cFwiOlwiZG93blwifWZ1bmN0aW9uIHluKGUpe2lmKCFRKGUsQikpe3ZhciBuPXQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtuLmNsYXNzTmFtZT1tLG4uc3R5bGUuaGVpZ2h0PUVuKGUpK1wicHhcIixjZShlLEIpLHBlKGUsbil9fWZ1bmN0aW9uIEVuKGUpe3ZhciB0PWplO2lmKEYucGFkZGluZ1RvcHx8Ri5wYWRkaW5nQm90dG9tKXt2YXIgbj1lO1EobixwKXx8KG49aGUoZSxoKSk7dmFyIG89cGFyc2VJbnQoZ2V0Q29tcHV0ZWRTdHlsZShuKVtcInBhZGRpbmctdG9wXCJdKStwYXJzZUludChnZXRDb21wdXRlZFN0eWxlKG4pW1wicGFkZGluZy1ib3R0b21cIl0pO3Q9amUtb31yZXR1cm4gdH1mdW5jdGlvbiBMbihlLHQpe3Q/bW4oTmUpOlNuKE5lKSwkKE5lLEJuKGUpKSxkZS50ZXN0LnRyYW5zbGF0ZTNkPWUsc2V0VGltZW91dChmdW5jdGlvbigpe3VlKE5lLHIpfSwxMCl9ZnVuY3Rpb24geG4oZSl7dmFyIHQ9SyhoKydbZGF0YS1hbmNob3I9XCInK2UrJ1wiXScsTmUpWzBdO2lmKCF0KXt2YXIgbj12b2lkIDAhPT1lP2UtMTowO3Q9SyhoKVtuXX1yZXR1cm4gdH1mdW5jdGlvbiBUbihlLHQpe3ZhciBuPXhuKGUpO2lmKG51bGwhPW4pe3ZhciBvLGkscixsPShudWxsPT0ocj1LKE0rJ1tkYXRhLWFuY2hvcj1cIicrKG89dCkrJ1wiXScsaT1uKVswXSkmJihvPXZvaWQgMCE9PW8/bzowLHI9SyhNLGkpW29dKSxyKTtPbihuKT09PVNlfHxRKG4sYyk/QW4obCk6V3QobixmdW5jdGlvbigpe0FuKGwpfSl9fWZ1bmN0aW9uIEFuKGUpe251bGwhPWUmJnZuKGhlKGUsSCksZSl9ZnVuY3Rpb24ga24oZSx0LG4sbyl7dmFyIGk9XCJcIjtGLmFuY2hvcnMubGVuZ3RoJiYhRi5sb2NrQW5jaG9ycyYmKGU/KG51bGwhPW4mJihpPW4pLG51bGw9PXQmJih0PWUpLE1lPXQsTW4oaStcIi9cIit0KSk6bnVsbCE9ZT8oTWU9dCxNbihuKSk6TW4obikpLENuKCl9ZnVuY3Rpb24gTW4odCl7aWYoRi5yZWNvcmRIaXN0b3J5KWxvY2F0aW9uLmhhc2g9dDtlbHNlIGlmKEJlfHx6ZSllLmhpc3RvcnkucmVwbGFjZVN0YXRlKHZvaWQgMCx2b2lkIDAsXCIjXCIrdCk7ZWxzZXt2YXIgbj1lLmxvY2F0aW9uLmhyZWYuc3BsaXQoXCIjXCIpWzBdO2UubG9jYXRpb24ucmVwbGFjZShuK1wiI1wiK3QpfX1mdW5jdGlvbiBPbihlKXtpZighZSlyZXR1cm4gbnVsbDt2YXIgdD1lLmdldEF0dHJpYnV0ZShcImRhdGEtYW5jaG9yXCIpLG49aWUoZSk7cmV0dXJuIG51bGw9PXQmJih0PW4pLHR9ZnVuY3Rpb24gQ24oKXt2YXIgZT1LKGcpWzBdLHQ9SyhPLGUpWzBdLG49T24oZSksbz1Pbih0KSxpPVN0cmluZyhuKTt0JiYoaT1pK1wiLVwiK28pLGk9aS5yZXBsYWNlKFwiL1wiLFwiLVwiKS5yZXBsYWNlKFwiI1wiLFwiXCIpO3ZhciByPW5ldyBSZWdFeHAoXCJcXFxcYlxcXFxzP1wiK3MrXCItW15cXFxcc10rXFxcXGJcIixcImdcIik7c2UuY2xhc3NOYW1lPXNlLmNsYXNzTmFtZS5yZXBsYWNlKHIsXCJcIiksY2Uoc2UscytcIi1cIitpKX1mdW5jdGlvbiBIbihlKXt2YXIgdD1bXTtyZXR1cm4gdC55PXZvaWQgMCE9PWUucGFnZVkmJihlLnBhZ2VZfHxlLnBhZ2VYKT9lLnBhZ2VZOmUudG91Y2hlc1swXS5wYWdlWSx0Lng9dm9pZCAwIT09ZS5wYWdlWCYmKGUucGFnZVl8fGUucGFnZVgpP2UucGFnZVg6ZS50b3VjaGVzWzBdLnBhZ2VYLHplJiZQdChlKSYmRi5zY3JvbGxCYXImJnZvaWQgMCE9PWUudG91Y2hlcyYmKHQueT1lLnRvdWNoZXNbMF0ucGFnZVksdC54PWUudG91Y2hlc1swXS5wYWdlWCksdH1mdW5jdGlvbiBJbihlLHQpe3Z0KDAsXCJpbnRlcm5hbFwiKSx2b2lkIDAhPT10JiYoUGU9ITApLHZuKGhlKGUsSCksZSksdm9pZCAwIT09dCYmKFBlPSExKSx2dChldC5zY3JvbGxpbmdTcGVlZCxcImludGVybmFsXCIpfWZ1bmN0aW9uIFJuKGUpe3ZhciB0PU1hdGgucm91bmQoZSk7aWYoRi5jc3MzJiZGLmF1dG9TY3JvbGxpbmcmJiFGLnNjcm9sbEJhcilMbihcInRyYW5zbGF0ZTNkKDBweCwgLVwiK3QrXCJweCwgMHB4KVwiLCExKTtlbHNlIGlmKEYuYXV0b1Njcm9sbGluZyYmIUYuc2Nyb2xsQmFyKSQoTmUse3RvcDotdCtcInB4XCJ9KSxkZS50ZXN0LnRvcD0tdCtcInB4XCI7ZWxzZXt2YXIgbj1xdCh0KTtEbihuLmVsZW1lbnQsbi5vcHRpb25zKX19ZnVuY3Rpb24gQm4oZSl7cmV0dXJue1wiLXdlYmtpdC10cmFuc2Zvcm1cIjplLFwiLW1vei10cmFuc2Zvcm1cIjplLFwiLW1zLXRyYW5zZm9ybVwiOmUsdHJhbnNmb3JtOmV9fWZ1bmN0aW9uIHpuKGUsdCxuKXtcImFsbFwiIT09dD9VZVtuXVt0XT1lOk9iamVjdC5rZXlzKFVlW25dKS5mb3JFYWNoKGZ1bmN0aW9uKHQpe1VlW25dW3RdPWV9KX1mdW5jdGlvbiBObihlLHQsbil7RltlXT10LFwiaW50ZXJuYWxcIiE9PW4mJihldFtlXT10KX1mdW5jdGlvbiBqbigpe0p8fChfKFwiZXJyb3JcIixcIkZ1bGxwYWdlLmpzIHZlcnNpb24gMyBoYXMgY2hhbmdlZCBpdHMgbGljZW5zZSB0byBHUEx2MyBhbmQgaXQgcmVxdWlyZXMgYSBgbGljZW5zZUtleWAgb3B0aW9uLiBSZWFkIGFib3V0IGl0IGhlcmU6XCIpLF8oXCJlcnJvclwiLFwiaHR0cHM6Ly9naXRodWIuY29tL2FsdmFyb3RyaWdvL2Z1bGxQYWdlLmpzI29wdGlvbnMuXCIpKSxRKEsoXCJodG1sXCIpLGEpP18oXCJlcnJvclwiLFwiRnVsbHBhZ2UuanMgY2FuIG9ubHkgYmUgaW5pdGlhbGl6ZWQgb25jZSBhbmQgeW91IGFyZSBkb2luZyBpdCBtdWx0aXBsZSB0aW1lcyFcIik6KEYuY29udGludW91c1ZlcnRpY2FsJiYoRi5sb29wVG9wfHxGLmxvb3BCb3R0b20pJiYoRi5jb250aW51b3VzVmVydGljYWw9ITEsXyhcIndhcm5cIixcIk9wdGlvbiBgbG9vcFRvcC9sb29wQm90dG9tYCBpcyBtdXR1YWxseSBleGNsdXNpdmUgd2l0aCBgY29udGludW91c1ZlcnRpY2FsYDsgYGNvbnRpbnVvdXNWZXJ0aWNhbGAgZGlzYWJsZWRcIikpLCFGLnNjcm9sbE92ZXJmbG93fHwhRi5zY3JvbGxCYXImJkYuYXV0b1Njcm9sbGluZ3x8XyhcIndhcm5cIixcIk9wdGlvbnMgc2Nyb2xsQmFyOnRydWUgYW5kIGF1dG9TY3JvbGxpbmc6ZmFsc2UgYXJlIG11dHVhbGx5IGV4Y2x1c2l2ZSB3aXRoIHNjcm9sbE92ZXJmbG93OnRydWUuIFNlY3Rpb25zIHdpdGggc2Nyb2xsT3ZlcmZsb3cgbWlnaHQgbm90IHdvcmsgd2VsbCBpbiBGaXJlZm94XCIpLCFGLmNvbnRpbnVvdXNWZXJ0aWNhbHx8IUYuc2Nyb2xsQmFyJiZGLmF1dG9TY3JvbGxpbmd8fChGLmNvbnRpbnVvdXNWZXJ0aWNhbD0hMSxfKFwid2FyblwiLFwiU2Nyb2xsIGJhcnMgKGBzY3JvbGxCYXI6dHJ1ZWAgb3IgYGF1dG9TY3JvbGxpbmc6ZmFsc2VgKSBhcmUgbXV0dWFsbHkgZXhjbHVzaXZlIHdpdGggYGNvbnRpbnVvdXNWZXJ0aWNhbGA7IGBjb250aW51b3VzVmVydGljYWxgIGRpc2FibGVkXCIpKSxGLnNjcm9sbE92ZXJmbG93JiZudWxsPT1GLnNjcm9sbE92ZXJmbG93SGFuZGxlciYmKEYuc2Nyb2xsT3ZlcmZsb3c9ITEsXyhcImVycm9yXCIsXCJUaGUgb3B0aW9uIGBzY3JvbGxPdmVyZmxvdzp0cnVlYCByZXF1aXJlcyB0aGUgZmlsZSBgc2Nyb2xsb3ZlcmZsb3cubWluLmpzYC4gUGxlYXNlIGluY2x1ZGUgaXQgYmVmb3JlIGZ1bGxQYWdlLmpzLlwiKSksW1wiZmFkaW5nRWZmZWN0XCIsXCJjb250aW51b3VzSG9yaXpvbnRhbFwiLFwic2Nyb2xsSG9yaXpvbnRhbGx5XCIsXCJpbnRlcmxvY2tlZFNsaWRlc1wiLFwicmVzZXRTbGlkZXJzXCIsXCJyZXNwb25zaXZlU2xpZGVzXCIsXCJvZmZzZXRTZWN0aW9uc1wiLFwiZHJhZ0FuZE1vdmVcIixcInNjcm9sbE92ZXJmbG93UmVzZXRcIixcInBhcmFsbGF4XCJdLmZvckVhY2goZnVuY3Rpb24oZSl7RltlXSYmXyhcIndhcm5cIixcImZ1bGxwYWdlLmpzIGV4dGVuc2lvbnMgcmVxdWlyZSBmdWxscGFnZS5leHRlbnNpb25zLm1pbi5qcyBmaWxlIGluc3RlYWQgb2YgdGhlIHVzdWFsIGZ1bGxwYWdlLmpzLiBSZXF1ZXN0ZWQ6IFwiK2UpfSksRi5hbmNob3JzLmZvckVhY2goZnVuY3Rpb24oZSl7dmFyIHQ9W10uc2xpY2UuY2FsbChLKFwiW25hbWVdXCIpKS5maWx0ZXIoZnVuY3Rpb24odCl7cmV0dXJuIHQuZ2V0QXR0cmlidXRlKFwibmFtZVwiKSYmdC5nZXRBdHRyaWJ1dGUoXCJuYW1lXCIpLnRvTG93ZXJDYXNlKCk9PWUudG9Mb3dlckNhc2UoKX0pLG49W10uc2xpY2UuY2FsbChLKFwiW2lkXVwiKSkuZmlsdGVyKGZ1bmN0aW9uKHQpe3JldHVybiB0LmdldEF0dHJpYnV0ZShcImlkXCIpJiZ0LmdldEF0dHJpYnV0ZShcImlkXCIpLnRvTG93ZXJDYXNlKCk9PWUudG9Mb3dlckNhc2UoKX0pOyhuLmxlbmd0aHx8dC5sZW5ndGgpJiYoXyhcImVycm9yXCIsXCJkYXRhLWFuY2hvciB0YWdzIGNhbiBub3QgaGF2ZSB0aGUgc2FtZSB2YWx1ZSBhcyBhbnkgYGlkYCBlbGVtZW50IG9uIHRoZSBzaXRlIChvciBgbmFtZWAgZWxlbWVudCBmb3IgSUUpLlwiKSxuLmxlbmd0aCYmXyhcImVycm9yXCIsJ1wiJytlKydcIiBpcyBpcyBiZWluZyB1c2VkIGJ5IGFub3RoZXIgZWxlbWVudCBgaWRgIHByb3BlcnR5JyksdC5sZW5ndGgmJl8oXCJlcnJvclwiLCdcIicrZSsnXCIgaXMgaXMgYmVpbmcgdXNlZCBieSBhbm90aGVyIGVsZW1lbnQgYG5hbWVgIHByb3BlcnR5JykpfSkpfWZ1bmN0aW9uIFBuKHQsbixvLGkpe3ZhciByLGw9KHI9dCkuc2VsZiE9ZSYmUShyLEMpP3Iuc2Nyb2xsTGVmdDohRi5hdXRvU2Nyb2xsaW5nfHxGLnNjcm9sbEJhcj9iZSgpOnIub2Zmc2V0VG9wLGE9bi1sLHM9MDtHZT0hMDt2YXIgYz1mdW5jdGlvbigpe2lmKEdlKXt2YXIgcj1uO3MrPTIwLG8mJihyPWUuZnBfZWFzaW5nc1tGLmVhc2luZ10ocyxsLGEsbykpLERuKHQsciksczxvP3NldFRpbWVvdXQoYywyMCk6dm9pZCAwIT09aSYmaSgpfWVsc2UgczxvJiZpKCl9O2MoKX1mdW5jdGlvbiBEbih0LG4peyFGLmF1dG9TY3JvbGxpbmd8fEYuc2Nyb2xsQmFyfHx0LnNlbGYhPWUmJlEodCxDKT90LnNlbGYhPWUmJlEodCxDKT90LnNjcm9sbExlZnQ9bjp0LnNjcm9sbFRvKDAsbik6dC5zdHlsZS50b3A9bitcInB4XCJ9ZnVuY3Rpb24gVm4oZSx0KXt0aGlzLmFuY2hvcj1lLmdldEF0dHJpYnV0ZShcImRhdGEtYW5jaG9yXCIpLHRoaXMuaXRlbT1lLHRoaXMuaW5kZXg9aWUoZSx0KSx0aGlzLmlzTGFzdD10aGlzLmluZGV4PT09Syh0KS5sZW5ndGgtMSx0aGlzLmlzRmlyc3Q9IXRoaXMuaW5kZXh9ZnVuY3Rpb24gWW4oZSl7Vm4uY2FsbCh0aGlzLGUsaCl9am4oKX19KSx3aW5kb3cualF1ZXJ5JiZ3aW5kb3cuZnVsbHBhZ2UmJmZ1bmN0aW9uKGUsdCl7XCJ1c2Ugc3RyaWN0XCI7ZSYmdD9lLmZuLmZ1bGxwYWdlPWZ1bmN0aW9uKG4pe3ZhciBvPW5ldyB0KFwiI1wiK2UodGhpcykuYXR0cihcImlkXCIpLG4pO09iamVjdC5rZXlzKG8pLmZvckVhY2goZnVuY3Rpb24odCl7ZS5mbi5mdWxscGFnZVt0XT1vW3RdfSl9OndpbmRvdy5mcF91dGlscy5zaG93RXJyb3IoXCJlcnJvclwiLFwialF1ZXJ5IGlzIHJlcXVpcmVkIHRvIHVzZSB0aGUgalF1ZXJ5IGZ1bGxwYWdlIGFkYXB0ZXIhXCIpfSh3aW5kb3cualF1ZXJ5LHdpbmRvdy5mdWxscGFnZSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1mdWxscGFnZS5taW4uanMubWFwXG47XG4oZnVuY3Rpb24gKCQpIHtcbiAgICAvLyB2YXIgcGxheWVyO1xuICAgIC8vIHZhciBwbGF5ZXIyO1xuICAgdmFyIHZpZGVvID0gJCgnI3BsYXllcicpLmNoaWxkcmVuKCd2aWRlbycpO1xuICAvLyAgdmFyIHZpZGVvRWxlbWVudCA9IHZpZGVvLmdldCgwKTtcblxuICAgIGZ1bmN0aW9uIGRldGVjdF9zaXplKCkge1xuICAgICAgICBpZigoJCh3aW5kb3cpLndpZHRoKCkgPCAxMDI0KSB8fCAoJCh3aW5kb3cpLmhlaWdodCgpIDwgNjAwKSl7XG4gICAgICAgICAgICAkKCdib2R5JykuYWRkQ2xhc3MoJ3NlY3Rfd3JhcHBlcicpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ21vYmlsZScpO1xuICAgICAgICAgICAgJCgnI2Z1bGxwYWdlJykucmVtb3ZlQ2xhc3MoJ2Rlc2MnKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgLy8gZnVuY3Rpb24gcmVhZHlZb3V0dWJlKCl7XG4gICAgICAgICAgICAvLyAgICAgaWYoKHR5cGVvZiBZVCAhPT0gXCJ1bmRlZmluZWRcIikgJiYgWVQgJiYgWVQuUGxheWVyKXtcbiAgICAgICAgICAgIC8vICAgICAgICAgcGxheWVyID0gbmV3IFlULlBsYXllcigncGxheWVyJywge1xuICAgICAgICAgICAgLy8gICAgICAgICAgICAgdmlkZW9JZDogJ3pGd0wzMDF2ZDRBJyxcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIHBsYXllclZhcnM6IHtcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICBtdXRlOiAxLFxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIGF1dG9wbGF5OiAxLFxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIGxvb3A6IDEsXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgY29udHJvbHM6IDAsXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgc2hvd2luZm86IDAsXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgYXV0b2hpZGU6IDAsXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgZW5hYmxlanNhcGk6IDEsXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgbW9kZXN0YnJhbmRpbmc6IDEsXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgcGxheWxpc3Q6ICd6RndMMzAxdmQ0QScsXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgdnE6ICdoZDEwODAnXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgZXZlbnRzOiB7XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgJ29uUmVhZHknOiBvblBsYXllclJlYWR5LFxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICdvblN0YXRlQ2hhbmdlJzogb25QbGF5ZXJTdGF0ZUNoYW5nZVxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIC8vICAgICAgICAgfVxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIGFsbG93ZnVsbHNjcmVlbjogMVxuICAgICAgICAgICAgLy8gICAgICAgICB9KTtcbiAgICAgICAgICAgIC8vICAgICAgICAgLy8gcGxheWVyMiA9IG5ldyBZVC5QbGF5ZXIoJ3BvcF9wbGF5ZXInLCB7XG4gICAgICAgICAgICAvLyAgICAgICAgIC8vICAgICB2aWRlb0lkOiAnekZ3TDMwMXZkNEEnLFxuICAgICAgICAgICAgLy8gICAgICAgICAvLyAgICAgcGxheWVyVmFyczoge1xuICAgICAgICAgICAgLy8gICAgICAgICAvLyAgICAgICAgIC8vIGNvbnRyb2xzOiAxLFxuICAgICAgICAgICAgLy8gICAgICAgICAvLyAgICAgICAgIGVuYWJsZWpzYXBpOiAxLFxuICAgICAgICAgICAgLy8gICAgICAgICAvLyAgICAgICAgIGV2ZW50czoge1xuICAgICAgICAgICAgLy8gICAgICAgICAvLyAgICAgICAgICAgICAnb25SZWFkeSc6IG9uUGxheWVyUmVhZHksXG4gICAgICAgICAgICAvLyAgICAgICAgIC8vICAgICAgICAgICAgICdvblN0YXRlQ2hhbmdlJzogb25QbGF5ZXJTdGF0ZUNoYW5nZVxuICAgICAgICAgICAgLy8gICAgICAgICAvLyAgICAgICAgIH1cbiAgICAgICAgICAgIC8vICAgICAgICAgLy8gICAgIH1cbiAgICAgICAgICAgIC8vICAgICAgICAgLy8gICAgIC8vIGFsbG93ZnVsbHNjcmVlbjogMVxuICAgICAgICAgICAgLy8gICAgICAgICAvLyB9KTtcbiAgICAgICAgICAgIC8vICAgICB9ZWxzZXtcbiAgICAgICAgICAgIC8vICAgICAgICAgY29uc29sZS5sb2coJ29sb2xvJyk7XG4gICAgICAgICAgICAvLyAgICAgICAgIHNldFRpbWVvdXQocmVhZHlZb3V0dWJlLCAxMDApO1xuICAgICAgICAgICAgLy8gICAgIH1cbiAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgIC8vIHJlYWR5WW91dHViZSgpO1xuICAgICAgICAgICAgJCgnYm9keScpLnJlbW92ZUNsYXNzKCdzZWN0X3dyYXBwZXInKTtcbiAgICAgICAgICAgIGlmKCEkKCcjZnVsbHBhZ2UnKS5oYXNDbGFzcygnZGVzYycpKXtcbiAgICAgICAgICAgICAgICAkKCcjZnVsbHBhZ2UnKS5hZGRDbGFzcygnZGVzYycpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2Rlc2MnKTtcbiAgICAgICAgfVxuICAgICAgICBpZigoJCh3aW5kb3cpLndpZHRoKCkgPCA4MDEpIHx8ICgkKCcuc2VjdF93cmFwcGVyJykubGVuZ3RoKSl7XG4gICAgICAgICAgICBpZighJCgnI2Jfc29sdXRpb24gLmZsZXgtd3JhcHBlcicpLmhhc0NsYXNzKCdvd2wtY2Fyb3VzZWwnKSl7XG4gICAgICAgICAgICAgICAgJCgnI2Jfc29sdXRpb24gLmZsZXgtd3JhcHBlcicpLmFkZENsYXNzKCdvd2wtY2Fyb3VzZWwnKS5vd2xDYXJvdXNlbCh7XG4gICAgICAgICAgICAgICAgICAgIGxvb3A6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBuYXY6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBkb3RzOnRydWUsXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1zOjFcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAkKCcjYl9zb2x1dGlvbiAuZmxleC13cmFwcGVyJykub3dsQ2Fyb3VzZWwoJ2Rlc3Ryb3knKTtcbiAgICAgICAgICAgICQoJyNiX3NvbHV0aW9uIC5mbGV4LXdyYXBwZXInKS5yZW1vdmVDbGFzcygnb3dsLWNhcm91c2VsJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAkKHdpbmRvdykucmVzaXplKGZ1bmN0aW9uKCkge1xuICAgICAgICBkZXRlY3Rfc2l6ZSgpO1xuICAgIH0pO1xuXG5cbiAgICAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgZGV0ZWN0X3NpemUoKTtcblxuICAgICAgICAvLyBpZiAoIXZpZGVvRWxlbWVudC5wYXVzZWQpIHtcbiAgICAgICAgLy8gICAgIHZpZGVvRWxlbWVudC5wbGF5O1xuICAgICAgICAvLyB9XG5cbiAgICAgICAgLy8gYXV0b3BsYXkgdmlkZW9cbiAgICAgICAgZnVuY3Rpb24gb25QbGF5ZXJSZWFkeShldmVudCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ3JlYWR5Jyk7XG4gICAgICAgICAgLy8gIHBsYXllci5wbGF5VmlkZW8oKTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBvblBsYXllclN0YXRlQ2hhbmdlKGV2ZW50KSB7XG4gICAgICAgICAgICBpZihldmVudC5kYXRhID09IFlULlBsYXllclN0YXRlLkVOREVEKSB7XG4gICAgICAgICAgICAgICAgJCgnLmJhY2tncm91bmQtdmlkZW8nKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgLy8gcGxheWVyLnN0b3BWaWRlbygpO1xuICAgICAgICAgICAgICAgIC8vIHBsYXllci5tdXRlKCk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2ZpbmlzaGVkIDMnKTtcbiAgICAgICAgICAgICAgICAvLyBwbGF5ZXIucGxheVZpZGVvKCk7XG4gICAgICAgICAgICAgICAgJC5mbi5mdWxscGFnZS5zZXRBbGxvd1Njcm9sbGluZyh0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG5cblxuICAgICAgICAkKCcuZnBfcG9wX2J0bicpLm9uKCdjbGljaycsZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYoJCgnI2Z1bGxwYWdlJykubGVuZ3RoKXtcbiAgICAgICAgICAgICAgLy8gICQuZm4uZnVsbHBhZ2Uuc2V0QWxsb3dTY3JvbGxpbmcoZmFsc2UpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdmcHNjcm9sbCAtIHRydWUnKTtcbiAgICAgICAgICAgICAgICAkKCcuZnBfcG9wdXAnKS5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAkKCdib2R5JykuYWRkQ2xhc3MoJ29oJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vcmVidWlsZCBmb3IgY2xvc2UgYnRuXG4gICAgICAgICAgICAvLyAkKCcub3dsLXJldmlld3MnKS5vd2xDYXJvdXNlbCgnZGVzdHJveScpO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ2Rlc3Ryb3knKTtcbiAgICAgICAgICAgIC8vIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgLy8gICAgICQoJy5vd2wtcmV2aWV3cycpLm93bENhcm91c2VsKHtcbiAgICAgICAgICAgIC8vICAgICAgICAgbG9vcDogdHJ1ZSxcbiAgICAgICAgICAgIC8vICAgICAgICAgbmF2OiB0cnVlLFxuICAgICAgICAgICAgLy8gICAgICAgICBkb3RzOmZhbHNlLFxuICAgICAgICAgICAgLy8gICAgICAgICBuYXZUZXh0OiBbICc8aSBjbGFzcz1cImZhbCBmYS1hbmdsZS1sZWZ0XCI+PC9pPicsJzxpIGNsYXNzPVwiZmFsIGZhLWFuZ2xlLXJpZ2h0XCI+PC9pPicgXSxcbiAgICAgICAgICAgIC8vICAgICAgICAgcmVzcG9uc2l2ZToge1xuICAgICAgICAgICAgLy8gICAgICAgICAgICAgMDoge1xuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIGl0ZW1zOjFcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICA0MjA6IHtcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICBpdGVtczoxLFxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIHN0YWdlUGFkZGluZzozMFxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIDcyMDoge1xuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIGl0ZW1zOiAyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgMTIwMDoge1xuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIGl0ZW1zOiAzXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICB9XG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgLy8gICAgICAgICB9XG4gICAgICAgICAgICAvLyAgICAgfSk7XG4gICAgICAgICAgICAvLyB9LDMwMDApXG4gICAgICAgIH0pO1xuICAgICAgICAkKCcuZnBfY2xvc2UnKS5vbignY2xpY2snLGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vcmVidWlsZCBmb3IgY2xvc2UgYnRuXG4gICAgICAgICAgICAkKCcub3dsLXJldmlld3MnKS5vd2xDYXJvdXNlbCgnZGVzdHJveScpO1xuICAgICAgICAgICAgJCgnLm93bC1yZXZpZXdzJykub3dsQ2Fyb3VzZWwoe1xuICAgICAgICAgICAgICAgIGxvb3A6IHRydWUsXG4gICAgICAgICAgICAgICAgbmF2OiB0cnVlLFxuICAgICAgICAgICAgICAgIGRvdHM6ZmFsc2UsXG4gICAgICAgICAgICAgICAgbmF2VGV4dDogWyAnPGkgY2xhc3M9XCJmYSBmYS1hbmdsZS1sZWZ0XCI+PC9pPicsJzxpIGNsYXNzPVwiZmEgZmEtYW5nbGUtcmlnaHRcIj48L2k+JyBdLFxuICAgICAgICAgICAgICAgIHJlc3BvbnNpdmU6IHtcbiAgICAgICAgICAgICAgICAgICAgMDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXM6MVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICA0MjA6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zOjEsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFnZVBhZGRpbmc6MzBcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgNzIwOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtczogMlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAxMjAwOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtczogM1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmKCQoJyNmdWxscGFnZScpLmxlbmd0aCl7XG4gICAgICAgICAgICAgICAgJC5mbi5mdWxscGFnZS5zZXRBbGxvd1Njcm9sbGluZyh0cnVlKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZnAgLSB0cnVlJyk7XG4gICAgICAgICAgICAgICAgJCgnLmZwX3BvcHVwJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgJCgnYm9keScpLnJlbW92ZUNsYXNzKCdvaCcpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vYWN0aXZhdGUgZnVsbHBhZ2VcbiAgICAgICAgaWYoJCgnI2Z1bGxwYWdlJykubGVuZ3RoKXtcbiAgICAgICAgICAgICQoJyNmdWxscGFnZScpLmZ1bGxwYWdlKHtcbiAgICAgICAgICAgICAgICAvL29wdGlvbnMgaGVyZVxuICAgICAgICAgICAgICAgIHJlc3BvbnNpdmVXaWR0aDoxMDI0LFxuICAgICAgICAgICAgICAgIHJlc3BvbnNpdmVIZWlnaHQ6NjAyLFxuICAgICAgICAgICAgICAgIC8vYXV0b1Njcm9sbGluZzp0cnVlLFxuICAgICAgICAgICAgICAgIC8vc2Nyb2xsSG9yaXpvbnRhbGx5OiB0cnVlLFxuICAgICAgICAgICAgICAgIC8vcGFyYWxsYXg6dHJ1ZSxcbiAgICAgICAgICAgICAgICBsaWNlbnNlS2V5OiAnT1BFTi1TT1VSQ0UtR1BMVjMtTElDRU5TRScsXG4gICAgICAgICAgICAgICAgLy9zY3JvbGxPdmVyZmxvdzogZmFsc2UsXG4gICAgICAgICAgICAgICAgLy9pZiBlbmFibGUgYW5jaG9ycyAtIGNoYW5nZSBhbmNob3JzIGluIGh0bWxcbiAgICAgICAgICAgICAgICBhbmNob3JzOiBbJ2hlYWRlcicsICdwcm9ibGVtZScsICdzb2x1dGlvbicsICd2b3Ntb3RzJywgJ3NvdXRpZW4nLCAnYXV0ZXVpbCddLFxuICAgICAgICAgICAgICAgIG5vcm1hbFNjcm9sbEVsZW1lbnRzIDonI2xsZWdhbGVzJyxcbiAgICAgICAgICAgICAgICBhZnRlclJlbmRlcjogZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICAgICAgJCgnI215VmlkZW8nKVswXS5wbGF5KCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBvbkxlYXZlOiBmdW5jdGlvbihvcmlnaW4sIGRlc3RpbmF0aW9uLCBkaXJlY3Rpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGxlYXZpbmdTZWN0aW9uID0gdGhpcztcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9yaWdpbi5pbmRleCA9PSAwICYmIGRpcmVjdGlvbiA9PSAnZG93bicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdsZWF2aW5nJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAkKCcuaF9vdmVybGF5Jykuc2hvdygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2FuaW1hdGUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCcjYW5pbS0xMSwjYW5pbS0yMiwjYW5pbS0zMywjYW5pbS00NCcpLmFkZENsYXNzKCdhbmltYXRlZCcpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB9LDEwMCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZVxuICAgICAgICAgICAgICAgICAgICAvL2FmdGVyIGxlYXZpbmcgc2VjdGlvbiAyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcmlnaW4uaW5kZXggPT0gMSAmJiBkaXJlY3Rpb24gPT0gJ3VwJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCgnLmhfb3ZlcmxheScpLmhpZGUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sMTAwKTtcbiAgICAgICAgICAgICAgICAgICAgICAvLyAgY29uc29sZS5sb2codmlkZW8pO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gaWYgKCF2aWRlb0VsZW1lbnQucGF1c2VkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgdmlkZW9FbGVtZW50LnBsYXk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAgICAgICAgICAgICAkKCcjbXlWaWRlbycpWzBdLnBsYXkoKVxuXG4gICAgICAgICAgICAgICAgICAgICAgLy8gIHBsYXllci5wbGF5VmlkZW8oKTsgLy8gcmVzdGFydCBwbGF5ZXJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgLy9tZXRob2RzXG4gICAgICAgICAgICAvL1xuXG4gICAgICAgIH1cblxuICAgICAgICAkKCcud2hpdGVfYnRuJykub24oJ2NsaWNrJyxmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZ29fdG8gMycpO1xuICAgICAgICAgICAvLyAkLmZuLmZ1bGxwYWdlLnNpbGVudE1vdmVUbygnc29sdXRpb24nLCAyKTtcbiAgICAgICAgICAgICQuZm4uZnVsbHBhZ2UubW92ZVRvKDMpO1xuICAgICAgICB9KTtcblxuXG4gICAgICAgICQoJy5vd2wtcmV2aWV3cycpLm93bENhcm91c2VsKHtcbiAgICAgICAgICAgIGxvb3A6IHRydWUsXG4gICAgICAgICAgICBuYXY6IHRydWUsXG4gICAgICAgICAgICBkb3RzOmZhbHNlLFxuICAgICAgICAgICAgbmF2VGV4dDogWyAnPGkgY2xhc3M9XCJmYSBmYS1hbmdsZS1sZWZ0XCI+PC9pPicsJzxpIGNsYXNzPVwiZmEgZmEtYW5nbGUtcmlnaHRcIj48L2k+JyBdLFxuICAgICAgICAgICAgcmVzcG9uc2l2ZToge1xuICAgICAgICAgICAgICAgIDA6IHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbXM6MVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgNDIwOiB7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW1zOjEsXG4gICAgICAgICAgICAgICAgICAgIHN0YWdlUGFkZGluZzozMFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgNzIwOiB7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW1zOiAyXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAxMjAwOiB7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW1zOiAzXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG5cblxuICAgICAgICAkKCcjY3VzdG9tX3ByaWNlJykuY2xpY2soZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICQoJyNyYWRpbzQnKS50cmlnZ2VyKCdjbGljaycpO1xuICAgICAgICB9KTtcblxuICAgICAgICAkKCcjY3VzdG9tX3ByaWNlJykub24oJ2NoYW5nZScsZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHggPSAkKHRoaXMpLnZhbCgpO1xuICAgICAgICAgICAgeCA9IHgucmVwbGFjZSgvW15cXGRdL2csICcnKTtcbiAgICAgICAgICAgIHggPSB4LnJlcGxhY2UoLyhcXGQpKD89KFxcZFxcZFxcZCkrKFteXFxkXXwkKSkvZywgJyQxICcpO1xuICAgICAgICAgICAgJCh0aGlzKS52YWwoeCk7XG4gICAgICAgIH0pO1xuXG5cbiAgICAgICAgJCgnYm9keScpLm9uKCdjbGljaycsJy52aWRlb19idG4nLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAkKCcuYmFja2dyb3VuZC12aWRlbycpLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICQoJyNzaXRlX2hlYWRlcicpLmZhZGVPdXQoJ3Nsb3cnKTtcbiAgICAgICAgICAgICQoJyNteVZpZGVvJylbMF0ucGF1c2UoKTtcbiAgICAgICAgICAgIGlmKCAkKFwiI215VmlkZW9cIikucHJvcCgnbXV0ZWQnLCB0cnVlKSApe1xuICAgICAgICAgICAgICAgICQoXCIjbXlWaWRlb1wiKS5wcm9wKCdtdXRlZCcsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygndW5tdXRlJylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICQoJyNteVZpZGVvJylbMF0ucGxheSgpO1xuICAgICAgICAgICAgLy8gcGxheWVyLnN0b3BWaWRlbygpO1xuICAgICAgICAgICAgLy8gcGxheWVyLnVuTXV0ZSgpO1xuICAgICAgICAgICAgLy8gcGxheWVyLnBsYXlWaWRlbygpO1xuICAgICAgICAgICAgJC5mbi5mdWxscGFnZS5zZXRBbGxvd1Njcm9sbGluZyhmYWxzZSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgICQoJ2JvZHknKS5vbignY2xpY2snLCcuaGlkZV9idG4nLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAkKCcuYmFja2dyb3VuZC12aWRlbycpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICQoJyNzaXRlX2hlYWRlcicpLmZhZGVJbignc2xvdycpO1xuICAgICAgICAgICAgJC5mbi5mdWxscGFnZS5zZXRBbGxvd1Njcm9sbGluZyh0cnVlKTtcbiAgICAgICAgICAgIC8vIHBsYXllci5zdG9wVmlkZW8oKTtcbiAgICAgICAgICAgIC8vIHBsYXllci5tdXRlKCk7XG4gICAgICAgICAgICAvLyBwbGF5ZXIucGxheVZpZGVvKCk7XG4gICAgICAgICAgICAkKCcjbXlWaWRlbycpWzBdLnBhdXNlKCk7XG4gICAgICAgICAgICBpZiggJChcIiNteVZpZGVvXCIpLnByb3AoJ211dGVkJywgZmFsc2UpICl7XG4gICAgICAgICAgICAgICAgJChcIiNteVZpZGVvXCIpLnByb3AoJ211dGVkJywgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ211dGUnKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgJCgnI215VmlkZW8nKVswXS5wbGF5KCk7XG5cbiAgICAgICAgfSk7XG5cbiAgICAgICAgZnVuY3Rpb24gdHJ1ZV9zY3JvbGwoKSB7XG4gICAgICAgICAgICAkLmZuLmZ1bGxwYWdlLnNldEFsbG93U2Nyb2xsaW5nKHRydWUpO1xuICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnbGVnYWxlcyB5ZXMgc2Nyb2xsJyk7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gZmFsc2Vfc2Nyb2xsKCkge1xuICAgICAgICAgICAgJC5mbi5mdWxscGFnZS5zZXRBbGxvd1Njcm9sbGluZyhmYWxzZSk7XG4gICAgICAgICAgICAgIC8vICAsJyNiX3Byb2JsZW1lJywnI2Jfc29sdXRpb24nLCcjYl92b3Ntb3RzJywnI2Jfc291dGllbicpLmhpZGUoKTtcbiAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ2xlZ2FsZXMgbm8gc2Nyb2xsJyk7XG4gICAgICAgIH1cblxuXG5cbiAgICAgICAgaWYgKCQod2luZG93KS53aWR0aCgpID4gMTAyNCkge1xuXG5cbiAgICAgICAgICAgICQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHZhciBtb3VzZVkgPSAwO1xuICAgICAgICAgICAgICAgIHZhciB0b3BWYWx1ZSA9IDA7XG4gICAgICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW91dFwiLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbW91c2VZID0gZS5jbGllbnRZO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1vdXNlWSA8IHRvcFZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEkKCdib2R5JykuaGFzQ2xhc3MoJ2V4aXQtb25jZS1vcGVuZWQnKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZygnZXhpdCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTWljcm9Nb2RhbC5zaG93KCdtb2RhbC0zJyk7IC8vIHNob3cgZXhpdCBtb2RhbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCgnYm9keScpLmFkZENsYXNzKCdleGl0LW9uY2Utb3BlbmVkJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIDUwMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBmYWxzZSk7XG4gICAgICAgICAgICAgICAgLy8gJChkb2N1bWVudCkuYmluZCgnY2JveF9jb21wbGV0ZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgIC8vIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBNaWNyb01vZGFsLmluaXQoe1xuICAgICAgICAvLyAgICAgb25TaG93OiBmYWxzZV9zY3JvbGwoKSxcbiAgICAgICAgLy8gICAgIG9uQ2xvc2U6IHRydWVfc2Nyb2xsKClcbiAgICAgICAgLy8gfSk7XG5cbiAgICAgICAgJCgnLm1lbnRpb25fbGVnYWxlcycpLm9uKCdjbGljaycsZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgLy9jb25zb2xlLmxvZygnY2xpY2snKTtcbiAgICAgICAgICAgIC8vIE1pY3JvTW9kYWwuc2hvdygnbGVnYWxlcycpO1xuICAgICAgICAgICAgZmFsc2Vfc2Nyb2xsKCk7XG4gICAgICAgICAgICBNaWNyb01vZGFsLnNob3coJ2xlZ2FsZXMnLCB7XG4gICAgICAgICAgICAgICAgY2xvc2VUcmlnZ2VyOiAnbGVnX2Nsb3NlJ1xuICAgICAgICAgICAgICAgIC8vIGF3YWl0Q2xvc2VBbmltYXRpb246IHRydWVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuXG5cbiAgICAgICAgJCgnI2xlZ19jbG9zZScpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHt0cnVlX3Njcm9sbCgpO1xuICAgICAgICAgIC8vICBjb25zb2xlLmxvZygnbGVnYWxlc19jbG9zZScpO1xuICAgICAgICAgICAgTWljcm9Nb2RhbC5jbG9zZSgnbGVnYWxlcycpO1xuICAgICAgICAgICAgdHJ1ZV9zY3JvbGwoKTtcbiAgICAgICAgfSk7XG4gICAgICAvLyAgTWljcm9Nb2RhbC5jbG9zZSgnJyk7XG5cblxuXG4gICAgICAgICQod2luZG93KS5vbignc2Nyb2xsJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ3Njcm9sbCcpO1xuICAgICAgICB9KTtcblxuXG4gICAgICAgICQoJyNsZWdhbGVzJykub24oJ21vdXNld2hlZWwgRE9NTW91c2VTY3JvbGwnLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICB2YXIgc2Nyb2xsVG8gPSBudWxsO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ21vdXNld2hlZWwnKTtcbiAgICAgICAgICAgIGlmIChlLnR5cGUgPT0gJ21vdXNld2hlZWwnKSB7XG4gICAgICAgICAgICAgICAgc2Nyb2xsVG8gPSAoZS5vcmlnaW5hbEV2ZW50LndoZWVsRGVsdGEgKiAtMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChlLnR5cGUgPT0gJ0RPTU1vdXNlU2Nyb2xsJykge1xuICAgICAgICAgICAgICAgIHNjcm9sbFRvID0gNDAgKiBlLm9yaWdpbmFsRXZlbnQuZGV0YWlsO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoc2Nyb2xsVG8pIHtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5maW5kKCcubW9kYWxfX2NvbnRhaW5lcicpLnNjcm9sbFRvcChzY3JvbGxUbyArICQodGhpcykuZmluZCgnLm1vZGFsX19jb250YWluZXInKS5zY3JvbGxUb3AoKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG5cbiAgICAgICAgdmFyIHNvdXRfbGluayA9ICQoJy5zb3V0X2J0bicpLmF0dHIoJ2hyZWYnKTtcbiAgICAgICAgY29uc29sZS5sb2coc291dF9saW5rKTtcblxuXG4gICAgICAgIC8vICQoXCIuZl9wb3BfZm9ybSBpbnB1dFtuYW1lPVBhc3N3b3JkXVwiKVswXS5vbmludmFsaWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vICAgICB0aGlzLnNldEN1c3RvbVZhbGlkaXR5KFwiUGxlYXNlIGVudGVyIGF0IGxlYXN0IDUgY2hhcmFjdGVycy5cIik7XG4gICAgICAgIC8vICAgICB0aGlzLnNldEN1c3RvbVZhbGlkaXR5KFwiXCIpO1xuICAgICAgICAvLyB9O1xuXG5cbiAgICB9KTtcblxuXG59KShqUXVlcnkpOzsiXSwiZmlsZSI6Im1haW4uanMifQ==
