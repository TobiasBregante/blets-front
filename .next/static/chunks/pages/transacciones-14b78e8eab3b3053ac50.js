_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[20],{QIdG:function(e,n,t){"use strict";t.r(n);var a=t("q1tI"),r=t.n(a),c=t("yTzP"),l=t("7VV5"),s=t("BRJb"),o=t("o0o1"),u=t.n(o),i=t("HaE+"),d=t("ODXe"),p=t("nOHt"),f=t("r5vi"),m=r.a.createElement,g=function(e){var n=Object(p.useRouter)(),t=Object(a.useState)([]),r=t[0],c=t[1],l=Object(a.useState)([]),s=l[0],o=l[1],d=Object(a.useRef)(null),f=Object(a.useRef)(null),g=function(){var e=Object(i.a)(u.a.mark((function e(n){var t,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("http://localhost:4000","/v1/product/").concat(n),{headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*"}});case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,c(a);case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),b=function(){var e=Object(i.a)(u.a.mark((function e(n){var t,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("http://localhost:4000","/v1/user/").concat(n),{headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*"}});case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,o(a);case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),h=function(){var e=Object(i.a)(u.a.mark((function e(n,t){var a,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=!1,e.next=3,fetch("".concat("http://localhost:4000","/v1/product/transaction/payments/").concat(n),{method:"PUT",body:JSON.stringify({response:t}),headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*"}});case 3:return r=e.sent,e.next=6,r.json();case 6:return e.sent.update&&(a=!0),e.abrupt("return",a);case 9:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),v=function(t){h(e.dataOrder._id,t.target.value).then((function(e){e&&n.push(window.location.pathname)})).catch((function(e){return console.error(e)}))};Object(a.useEffect)((function(){g(e.idProduct),b(e.dataOrder.id_client)}),[e]);var w="organic"===e.dataOrder.token_influencer?"Org\xe1nico":e.dataOrder.token_influencer;return m("article",{className:"col-12 col-sm-12 col-lg-12 col-xl-12 col-sells"},m("ul",null,m("li",null,"Cliente: ",m("span",{className:"text-dark"},m("strong",null,s.username))),m("li",null,"Canal: ",m("span",{className:"text-primary"}," ",m("strong",null,w))),m("li",null,"Precio: ",m("span",{className:"text-success"},m("strong",null,r?"$".concat(r.amount):m("span",{className:"text-secondary"},"producto no disponible")))),m("li",{className:"success"===e.dataOrder.status_transaction||"refuse"===e.dataOrder.status_transaction?"d-none":""},m("button",{onClick:v,type:"button",value:"success",className:"btn btn-primary"},"Acreditado"),m("button",{onClick:v,type:"button",value:"refuse",className:"btn btn-warning"},"Rechazado")),m("li",{className:"success"===e.dataOrder.status_transaction?"text-success":"d-none"},m("strong",null,"Acreditado"),m("svg",{width:"2em",height:"2em",viewBox:"0 0 16 16",className:"ml-2 bi bi-check-circle-fill",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},m("path",{fillRule:"evenodd",d:"M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"}))),m("li",{className:"refuse"===e.dataOrder.status_transaction?"text-danger":"d-none"},m("strong",null,"Rechazado"),m("svg",{width:"2em",height:"2em",viewBox:"0 0 16 16",className:"ml-2 bi bi-x-octagon-fill",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},m("path",{fillRule:"evenodd",d:"M11.46.146A.5.5 0 0 0 11.107 0H4.893a.5.5 0 0 0-.353.146L.146 4.54A.5.5 0 0 0 0 4.893v6.214a.5.5 0 0 0 .146.353l4.394 4.394a.5.5 0 0 0 .353.146h6.214a.5.5 0 0 0 .353-.146l4.394-4.394a.5.5 0 0 0 .146-.353V4.893a.5.5 0 0 0-.146-.353L11.46.146zm-6.106 4.5a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"})))),m("input",{onClick:function(e){null!==d&&(d.current.classList.toggle("d-block"),e.target.classList.toggle("btn-danger"),e.target.value="Ver descripci\xf3n del producto"===e.target.value?"Cerrar":"Ver descripci\xf3n del producto")},type:"button",className:"btn btn-secondary",value:"Ver descripci\xf3n del producto"}),m("input",{onClick:function(e){null!==f&&(f.current.classList.toggle("d-block"),e.target.classList.toggle("btn-danger"),e.target.value="Ver descripci\xf3n del cliente"===e.target.value?"Cerrar":"Ver descripci\xf3n del cliente")},type:"button",className:"btn btn-info",value:"Ver descripci\xf3n del cliente"}),m("ul",{className:"content-description-prod-transaction d-none",ref:d},m("li",null,"T\xedtulo: ",m("strong",null,r?r.title:"producto no disponible")),m("li",{className:"desc-card-view-transaction"},"Descripci\xf3n: ",m("p",{className:"p-3 d-inline"},m("strong",null,r?r.description:"producto no disponible"))),m("li",null,"Localidad: ",m("strong",null,r?r.location:"producto no disponible")),m("li",null,"Negocio: ",m("strong",null,r?r.business:"producto no disponible")),m("li",null,"Categor\xeda ",m("strong",null,r?r.type:"producto no disponible"))),m("ul",{className:"content-description-prod-transaction d-none",ref:f},m("li",null,"Nombre de Usuario: ",m("strong",null,s.username)),m("li",null,"Nombre completo: ",m("strong",null,s.fullname)),m("li",null,"Correo electr\xf3nico: ",m("strong",null,s.email)),m("li",null,"Localidad: ",m("strong",null,s.location))))},b=r.a.createElement,h=function(e){var n=Object(a.useState)([]),t=n[0],c=n[1],l=Object(f.a)(["user"]),s=Object(d.a)(l,2),o=s[0],m=(s[1],Object(p.useRouter)());return Object(a.useEffect)((function(){o.user&&"seller"!==o.user.rol?m.push("/"):o.user||m.push("/"),function(){var e=Object(i.a)(u.a.mark((function e(){var n,t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("http://localhost:4000","/v1/product/transaction/sells"),{headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*"}});case 2:return n=e.sent,e.next=5,n.json();case 5:t=e.sent,c(t);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[e]),b(r.a.Fragment,null,200==t.status?t.transaction.map((function(e,n){return b(g,{key:n,idProduct:e.id_product,dataOrder:e})})):b("p",null,"No hay transacciones disponibles"))},v=r.a.createElement,w=function(e){var n=Object(a.useState)([]),t=n[0],c=n[1];return Object(a.useEffect)((function(){(function(){var e=Object(i.a)(u.a.mark((function e(){var n,t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("http://localhost:4000","/v1/product/transaction/sells/metrics"),{headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*"}});case 2:return n=e.sent,e.next=5,n.json();case 5:t=e.sent,c(t);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[e]),v(r.a.Fragment,null,v("article",{className:"content-metrics-header-mybusiness col-12 col-sm-12 col-lg-12 col-xl-12"},v("ul",null,v("li",null,"Ventas: ",v("span",{className:"text-primary"},t.success)),v("li",null,"En proceso: ",v("span",{className:"text-secondary"},t.pending)))),v("article",{className:"col-12 col-sm-12 col-lg-12 col-xl-12"},v(h,null)))},O=t("zyEs"),N=r.a.createElement,x=function(){return N(r.a.Fragment,null,N(O.a,null,N(c.a,null),N("main",{className:"container-fluid"},N(l.a,null),N("section",{className:"row section-home"},N(w,null)),N(s.a,null))))},y=r.a.createElement;n.default=function(){return y(x,null)}},yPZu:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/transacciones",function(){return t("QIdG")}])}},[["yPZu",0,1,2,3]]]);