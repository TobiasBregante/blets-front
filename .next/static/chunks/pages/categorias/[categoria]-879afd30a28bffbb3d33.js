_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[13],{HC4Z:function(a,e,t){"use strict";t.r(e);var c=t("q1tI"),n=t.n(c),l=t("yTzP"),r=t("7VV5"),o=t("BRJb"),s=t("o0o1"),u=t.n(s),i=t("HaE+"),p=t("YFqc"),m=t.n(p),d=t("nOHt"),f=t("Lxlj"),N=t.n(f),g=t("+xep"),h=n.a.createElement,y=function(a){Object(c.useRef)(null);var e=Object(d.useRouter)().query.categoria,t=Object(c.useState)([]),l=t[0],r=t[1];return Object(c.useEffect)((function(){(function(){var a=Object(i.a)(u.a.mark((function a(){var t,c;return u.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,fetch("".concat("https://apiblets.herokuapp.com","/v1/product/category/").concat(e),{headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*"}});case 2:return t=a.sent,a.next=5,t.json();case 5:c=a.sent,r(c);case 7:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}})()()}),[a]),h(n.a.Fragment,null,l&&l.length>0?l.map((function(a,e){return h(m.a,{key:e,href:"/[name]/[id]",as:"/".concat(a.title,"/").concat(a._id)},h("a",{className:"card-product-all card col-12 col-sm-12 col-lg-12 col-xl-12"},h("article",{className:"card-body"},h("article",{className:"img-title-payment-product-all"},h(g.CloudinaryContext,{cloudName:"blets",className:"img-product-all",style:{backgroundImage:"url('http://res.cloudinary.com/blets/image/upload/".concat(a.img,"')")}}),h("p",{className:"card-title"},a.title),h("p",{className:"card-price"},0!==a.amount?h(N.a,{value:a.amount,displayType:"text",thousandSeparator:!0,prefix:"$"}):h("span",{className:"text-success"},"GRATIS"))),h("article",{className:"description-product-all"},h("p",{className:"card-description"},a.description)))))})):h("h3",{className:"p-2 m-auto not-products-title"},"No hay art\xedculos disponibles"))},b=t("zyEs"),w=n.a.createElement,_=function(){return w(n.a.Fragment,null,w(b.a,null,w(l.a,null),w("main",{className:"container-fluid"},w(r.a,null),w("section",{className:"row section-home"},w("article",{className:"col-6"},w(y,{api:"all"}))),w(o.a,null))))},E=n.a.createElement;e.default=function(){return E(_,null)}},XUkP:function(a,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/categorias/[categoria]",function(){return t("HC4Z")}])}},[["XUkP",0,1,5,2,3,4]]]);