_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[13],{HC4Z:function(a,e,t){"use strict";t.r(e);var c=t("q1tI"),n=t.n(c),l=t("yTzP"),s=t("7VV5"),r=t("BRJb"),o=t("o0o1"),i=t.n(o),u=t("HaE+"),m=t("YFqc"),p=t.n(m),d=t("nOHt"),N=t("Lxlj"),b=t.n(N),f=t("+xep"),h=n.a.createElement,x=function(a){Object(c.useRef)(null);var e=Object(d.useRouter)().query.categoria,t=Object(c.useState)([]),l=t[0],s=t[1];return Object(c.useEffect)((function(){(function(){var a=Object(u.a)(i.a.mark((function a(){var t,c;return i.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,fetch("".concat("https://apiblets.herokuapp.com","/v1/product/category/").concat(e),{headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*"}});case 2:return t=a.sent,a.next=5,t.json();case 5:c=a.sent,s(c);case 7:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}})()()}),[a]),h(n.a.Fragment,null,h("nav",{"aria-label":"breadcrumb"},h("ol",{className:"breadcrumb"},h("li",{className:"breadcrumb-item"},h(p.a,{href:"/",as:"/"},h("a",null,"Inicio"))),h("li",{className:"breadcrumb-item active","aria-current":"page"},e))),l&&l.length>0?l.map((function(a,e){return h(p.a,{key:e,href:"/[name]/[id]",as:"/".concat(a.title,"/").concat(a._id)},h("a",{className:"card-product-all card mb-3 col-12 col-sm-12 col-lg-12 col-xl-12",style:{maxWidth:"540px"}},h("article",{className:"row no-gutters"},h("article",{className:"col-md-4"},h(f.CloudinaryContext,{cloudName:"blets"},h(f.Image,{className:"card-img",src:"https://res.cloudinary.com/blets/image/upload/".concat(a.img)}))),h("article",{className:"col-md-8"},h("article",{className:"card-body"},h("h5",{className:"card-title"},a.title),h("p",{className:"card-text"},a.description),h("p",{className:"card-price card-text"},0!==a.amount?h(b.a,{value:a.amount,displayType:"text",thousandSeparator:!0,prefix:"$"}):h("span",{className:"text-success"},"GRATIS")),h("p",{className:"card-text"},h("small",{className:"text-muted"},a.last_since)))))))})):h("h3",{className:"p-2 m-auto not-products-title"},"No hay art\xedculos disponibles"))},g=t("zyEs"),w=n.a.createElement,y=function(){return w(n.a.Fragment,null,w(g.a,null,w(l.a,null),w("main",{className:"container-fluid"},w(s.a,null),w("section",{className:"row section-home"},w("article",{className:"col-10 col-sm-10 col-lg-8 col-xl-6"},w(x,{api:"all"}))),w(r.a,null))))},_=n.a.createElement;e.default=function(){return _(y,null)}},XUkP:function(a,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/categorias/[categoria]",function(){return t("HC4Z")}])}},[["XUkP",0,1,5,2,3,4]]]);