_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[8],{UaXI:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),c=a.n(n),s=a("o0o1"),o=a.n(s),l=a("HaE+"),r=a("ODXe"),u=a("r5vi"),i=a("nOHt"),p=a("Lxlj"),m=a.n(p),d=function(){var e=Object(l.a)(o.a.mark((function e(t){var a,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://apiblets.herokuapp.com","/v1/product/transaction"),{body:JSON.stringify(t),method:"POST",headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*"}});case 2:return a=e.sent,e.next=5,a.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),b=a("wzql"),g=a("bkLi"),f=a("+xep"),N=c.a.createElement,h=function(e){var t=Object(i.useRouter)().query.id,a=Object(n.useRef)(null),s=Object(n.useState)(""),p=s[0],h=s[1],y=Object(n.useState)(""),x=y[0],k=y[1],w=Object(u.a)(["user"]),v=Object(r.a)(w,2),O=v[0],j=(v[1],Object(n.useState)([])),_=j[0],S=j[1],E=Object(n.useState)("d-none"),C=E[0],T=E[1],P=Object(n.useState)(""),A=P[0],I=P[1],L=Object(n.useState)(""),z=L[0],R=L[1],U=Object(n.useState)("accept-payment-close"),X=U[0],H=U[1],J=Object(n.useState)("Compralo en un instante!"),M=J[0],q=J[1],F=Object(n.useState)("d-none"),W=F[0],$=F[1];Object(n.useEffect)((function(){O.user&&"master"!==O.user.rol?h("false"):O.user||h("false"),O.user&&"master"===O.user.rol&&h("true");O.user&&O.user.discount_token?(T(""),R("d-none"),I("")):(T("d-none"),R(""),I("d-none"))}),null);return Object(n.useEffect)((function(){var e=function(){var e=Object(l.a)(o.a.mark((function e(){var a,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://apiblets.herokuapp.com","/v1/product/").concat(t),{headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*"}});case 2:return a=e.sent,e.next=5,a.json();case 5:n=e.sent,S(n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();k(a.current.offsetWidth),e()}),[t]),N(c.a.Fragment,null,N("section",{className:"row section-product"},N("article",{className:"col-12 col-sm-12 col-lg-8 col-xl-8"},N("article",{ref:a,className:"col-12 content-img-prod-open"},"true"===p&&N(b.a,{product:_}),"true"===p&&N(g.a,{product:_}),N(f.CloudinaryContext,{cloudName:"blets"},N(f.Image,{cloudName:"blets",publicId:_.img,alt:_.title},N(f.Transformation,{width:x-50,crop:"scale"})))),N("article",{className:"col-12"},N("h2",null,"Descripci\xf3n"),N("hr",null),N("ul",{type:"none"},N("li",null,"- Categor\xeda: ",N("span",{className:"text-dark"},N("strong",null,_.type)),N("br",null)),N("li",null,"- Nombre del negocio: ",N("span",{className:"text-dark"},N("strong",null,_.business))),N("li",null,"- Ubicaci\xf3n: ",N("span",{className:"text-dark"},N("strong",null,_.location)))),N("hr",null),N("p",null,_.description))),N("article",{className:"col-12 col-sm-12 col-lg-4 col-xl-4"},N("article",{className:"col-12"},N("h1",{className:"component-info-buy"},_.title),N("h4",{className:"text-primary component-info-buy ".concat(A)},0!==_.amount?N(m.a,{value:_.amount,displayType:"text",thousandSeparator:!0,prefix:"$"}):N("span",{className:"text-success"},"GRATIS")),N("h4",{className:"text-primary component-info-buy ".concat(z)},0!==_.amount?N(m.a,{value:_.amount,displayType:"text",thousandSeparator:!0,prefix:"$"}):N("span",{className:"text-success"},"GRATIS")),N("strike",{className:C},N("h5",{className:"text-secondary component-info-buy ".concat(0===_.discount?"d-none":"")},N(m.a,{value:_.amount*_.discount/100,displayType:"text",thousandSeparator:!0,prefix:"$"}))),N("p",{className:"col-12 col-sm-12 col-lg-6 col-xl-6 p-0 m-0"},N("span",{className:"".concat(_.shipping?"d-block":"d-none"," shipping-open bg-primary text-light")},"Lo recib\xeds en tu domicilio"),N("span",{className:"shipping-open bg-success text-light d-block"},"Env\xedo gratis"))),N("article",{className:"col-12"},N("p",{className:"component-info-buy"},"Pag\xe1 al contado o en cuotas con",N("span",{className:"text-primary"}," ",N("strong",null,"Mercado Pago"))),N("p",null,N("span",{className:"bg-primary p-2 text-light"},"Se encuentra en ",N("strong",null,_.location))),N("article",{className:"col-12 p-1 content-method-buy-steps mb-2 text-dark"},N("ol",{type:"1"},N("li",{className:"p-1"},"Hac\xe9 click en ",N("small",null,'"Compralo en un instante!"')),N("li",{className:"p-1"},"Hac\xe9 el pago con Mercado Pago"),N("li",{className:"p-1"},"Sacale una foto o screenshot al comprobante de pago"),N("li",{className:"p-1"},N("a",{href:"#",className:"btn btn-success"},"Env\xedalo por WhatsApp!")))),N("article",{className:"col-12 accept-payment ".concat(X)},N("article",{className:"content--btn-payment p-5 ".concat(X)},N("article",{className:"btn-content"},N("p",{className:"".concat(X)},"Finaliza tu pago, y te lo enviamos a tu casa!"),N("a",{href:_.payment,onClick:function(){var e={id_product:_._id,token_influencer:O.user.discount_token?O.user.discount_token:"organic",id_client:O.user.id,status_transaction:"pending"};d(e).then((function(e){$("d-block")})).catch((function(e){return console.error(e)}))},target:"_blank",className:"btn btn-primary text-light d-block ".concat(X)},"Pagar con Mercado Pago!"),N("p",{className:"mt-4 ".concat(W)},"Est\xe1s a un paso de finalizar tu compra!",N("br",null),"Env\xeda una foto del comprobante ",N("a",{href:"#",className:"btn btn-success"},"Env\xedalo por WhatsApp!"))))),N("input",{onClick:function(e){O.user?"accept-payment-close"===X?(e.target.classList.toggle("btn-danger"),e.target.classList.remove("btn-buy-now"),q("Cerrar"),H("")):(e.target.classList.toggle("btn-danger"),e.target.classList.add("btn-buy-now"),q("Pagar con Mercado Pago!"),H("accept-payment-close")):window.location="/iniciar-sesion"},type:"button",className:"btn btn-buy-now text-light d-block col-12",value:M})))))},y=a("yTzP"),x=a("7VV5"),k=a("BRJb"),w=a("zyEs"),v=c.a.createElement,O=function(){return v(c.a.Fragment,null,v(w.a,null,v(y.a,null),v("main",{className:"container-fluid"},v(x.a,null),v(h,null),v(k.a,null))))},j=c.a.createElement;t.default=function(){return j(O,null)}},grU0:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/[name]/[id]",function(){return a("UaXI")}])}},[["grU0",0,1,5,2,3,4,6]]]);