(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[473],{9557:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/quantum/season",function(){return t(7989)}])},2254:function(e,n,t){"use strict";var s=t(5893),i=t(6046);n.Z=function(e){var n=e.withMenu;return(0,s.jsxs)(s.Fragment,{children:[n&&(0,s.jsx)(i.Z,{}),(0,s.jsx)("div",{className:"flex items-center justify-center",style:{background:'url("/assets/images/bg_quantum.jpg") top center no-repeat',backgroundSize:"cover",height:"100vh"},children:(0,s.jsx)("img",{src:"/assets/images/loading.gif",className:"w-[60px] h-[60px] mt-[50px] mx-auto",alt:"loading"})})]})}},8829:function(e,n,t){"use strict";t.d(n,{Z:function(){return i}});var s=t(5893);function i(e){var n=e.label,t=e.type,i=e.onClick,a=e.loading,r=e.className,l=e.children,o=e.style;return(0,s.jsxs)("button",{onClick:i,type:t||"button",className:"flex justify-center items-center ".concat(r),style:o,children:[a&&(0,s.jsx)("i",{className:"material-icons motion-reduce:hidden animate-spin mr-2",children:"cached"}),(0,s.jsx)("span",{dangerouslySetInnerHTML:{__html:n}}),l]})}},4570:function(e,n,t){"use strict";t.d(n,{Z:function(){return i}});var s=t(5893);function i(e){var n=e.children,t=e.className,i=e.style;return(0,s.jsx)("header",{className:t,style:i,children:n})}},6046:function(e,n,t){"use strict";t.d(n,{Z:function(){return l}});var s=t(5893),i=t(1163),a=t(1721);function r(e){var n=e.image,t=e.link,i=e.label,a=e.active,r=e.locked;return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("a",{className:"item cursor-pointer ".concat(a?"active":""," ").concat(r?"locked":""),onClick:t,children:[(0,s.jsx)("img",{width:22,height:22,src:n,alt:i}),(0,s.jsx)("span",{children:i})]})})}function l(e){var n=e.active,t=(0,a.Z)(),l=t.authUser,o=t.loading,u=t._signOut,c=(0,i.useRouter)();return o?(0,s.jsx)(s.Fragment,{}):(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("div",{id:"menu","data-role":null===l||void 0===l?void 0:l.role,children:[(0,s.jsxs)("div",{className:"hidden lg:flex lg:flex-col h-full",children:[(0,s.jsxs)("div",{className:"top-menu-container",children:[(0,s.jsx)(r,{image:"/assets/images/menu/profit.svg",label:"Quantum",link:function(){return c.push("/quantum")},locked:!o&&l&&"demo"==l.role}),(0,s.jsx)(r,{image:"/assets/images/menu/season.svg",label:"Stagionalit\xe0",link:function(){return c.push("/quantum/season")},locked:!o&&l&&"demo"==l.role}),(0,s.jsx)(r,{image:"/assets/images/menu/course.svg",label:"Formazione",link:function(){return window.open("https://app.plutonis.com/","_blank")}}),(0,s.jsx)(r,{image:"/assets/images/menu/calculator.svg",label:"Hedging",link:function(){return c.push("/quantum/hedging")},locked:!o&&l&&["basic","demo"].indexOf(l.role)>-1}),(0,s.jsx)(r,{image:"/assets/images/menu/profit.svg",label:"Momentum",link:function(){return c.push("/momentum")},locked:!o&&l&&"admin"!=l.role&&!l.momentum}),(0,s.jsx)(r,{image:"/assets/images/menu/result.svg",label:"Risultati",link:function(){return c.push("/result")}})]}),(0,s.jsxs)("div",{className:"bottom-menu-container mt-auto ",children:[l&&"demo"!=l.role&&(0,s.jsx)(r,{image:"/assets/images/menu/icon-regalo-stroke.svg",label:"100\u20ac",link:function(){return window.open("https://plutonis.com/invito","_blank")}}),(0,s.jsx)(r,{image:"/assets/images/menu/profile.svg",label:"Profilo",link:function(){return c.push("/profile")}}),!o&&l&&"admin"==l.role&&(0,s.jsx)(r,{image:"/assets/images/menu/admin-2.svg",label:"Admin",link:function(){return c.push("/admin")}}),(0,s.jsx)(r,{image:"/assets/images/menu/logout.svg",label:"Logout",link:function(){return u()}})]}),(0,s.jsx)("div",{className:"logo flex flex-row gap-[5px]",children:(0,s.jsx)("img",{alt:"logo",src:"/assets/images/logo.png",className:"w-auto"})})]}),(0,s.jsxs)("div",{className:"flex mobile lg:hidden justify-center",children:[(0,s.jsx)(r,{active:"profit-risk"==n,image:"/assets/images/menu/profit.svg",label:"Quantum",link:function(){return c.push("/quantum")}}),(0,s.jsx)(r,{active:"season"==n,image:"/assets/images/menu/season.svg",label:"Stagionalit\xe0",link:function(){return c.push("/quantum/season")}}),(0,s.jsx)(r,{image:"/assets/images/menu/course.svg",label:"Formazione",link:function(){return window.open("https://app.plutonis.com/","_blank")}}),(0,s.jsx)(r,{active:"hedging"==n,image:"/assets/images/menu/calculator.svg",label:"Hedging",link:function(){return c.push("/quantum/hedging")},locked:!o&&l&&"basic"==l.role}),(0,s.jsx)(r,{active:"result"==n,image:"/assets/images/menu/result.svg",label:"Risultati",link:function(){return c.push("/result")}}),(0,s.jsx)(r,{active:"momentum"==n,image:"/assets/images/menu/profit.svg",label:"Momentum",link:function(){return c.push("/momentum")},locked:!o&&l&&"admin"!=l.role&&!l.momentum}),(0,s.jsx)(r,{image:"/assets/images/menu/icon-regalo-stroke.svg",label:"100\u20ac",link:function(){return window.open("https://plutonis.com/invito","_blank")}})]})]})})}},8161:function(e,n,t){"use strict";t.d(n,{Z:function(){return a}});var s=t(5893),i=t(9008);function a(e){var n=e.title;return(0,s.jsxs)(i.default,{children:[(0,s.jsxs)("title",{children:["Quantum Platform ",n?"- ".concat(n):""]}),(0,s.jsx)("meta",{charSet:"utf-8"}),(0,s.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"}),(0,s.jsx)("link",{rel:"shortcut icon",type:"image/svg+xml",href:"/assets/icons/favicon.png?v=1"}),(0,s.jsx)("meta",{property:"og:title",content:"Quantum Platform ".concat(n?"- ".concat(n):"")})]})}},815:function(e,n,t){"use strict";function s(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";if(!e)return!1;if(["demo"].indexOf(e.role)>-1)return!1;switch(n){default:return!0;case"quantum":return!("hedging"==t&&["basic"].indexOf(e.role)>-1)&&["admin","pro","basic"].indexOf(e.role)>-1;case"momentum":return["admin"].indexOf(e.role)>-1||["pro","basic"].indexOf(e.momentum)>-1}}t.d(n,{Z:function(){return s}})},7989:function(e,n,t){"use strict";t.r(n);var s=t(5893),i=t(1163),a=t(7294),r=t(8829),l=t(8489),o=t(4570),u=t(6046),c=t(8161),m=t(2254),d=t(815),h=t(4755),g=t(1721),x=t(9491),f=t(4046);n.default=function(){var e=(0,x.Z)().t,n=(new Date).getFullYear()+1,t=(0,g.Z)(),j=t.authUser,p=t.loading,v=t.isLoggedin,b=t._signOut,k=(0,i.useRouter)(),w=(0,a.useState)("sp500"),N=w[0],y=w[1],_=Array.from({length:n-1990},(function(e,n){return n+1990})),Z=(0,a.useState)({}),S=Z[0],F=Z[1],O=(0,a.useState)(0),q=O[0],M=O[1],A=(0,a.useState)(0),C=A[0],E=A[1],z=(0,a.useState)([]),P=z[0],R=z[1],U=(0,a.useState)(!1),L=U[0],Q=U[1];(0,a.useEffect)((function(){v(j)||(b(),k.push("/login")),Q((0,d.Z)(j,"quantum"))}),[j,p]),(0,a.useEffect)((function(){N&&(0,h.UG)(N).then((function(e){var n=0,t=0,s=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];Object.keys(e).map((function(i){Object.keys(e[i]).map((function(a){var r=e[i][a];t=Math.max(t,r),n=Math.min(n,r),s[Number(a)]+=r}))})),R(s),F(e),M(n),E(t)}))}),[N]);var T,H;return!j||p?(0,s.jsx)(m.Z,{withMenu:!0}):(0,s.jsxs)("div",{className:"flex pb-[100px] lg:pb-3 h-full",children:[(0,s.jsx)(c.Z,{title:"Stagionalit\xe0"}),(0,s.jsx)(u.Z,{active:"season"}),L||p?(0,s.jsxs)("div",{className:"w-full",children:[(0,s.jsx)(o.Z,{className:"season-header",children:(0,s.jsx)("div",{className:"flex",children:L&&["sp500","eu50"].map((function(e){return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(r.Z,{onClick:function(){return y(e)},label:e.toUpperCase(),className:"mb-0 mx-2 px-[15px] py-[4px] h-[41px] leading-[41px] text-[16px] text-bold ".concat(N!==e?"bg-white text-[#212121]":"bg-[#0086ff]")})})}))})}),(0,s.jsx)(l.Z,{title:"Stagionalit\xe0",footer:(T=q,H=C,(0,s.jsxs)("div",{className:"flex flex-row items-center w-full",children:[(0,s.jsxs)("div",{className:"px-2",children:[T>0?"+":"",T.toFixed(2)]}),(0,s.jsx)("div",{className:"w-full h-[8px]",children:(0,s.jsx)("div",{className:"w-full h-[8px]",style:{background:"linear-gradient(270deg,#33b74f 0.01%,#b83333 99.99%)",borderRadius:"15px"}})}),(0,s.jsxs)("div",{className:"px-2",children:[H>0?"+":"",H.toFixed(2)]})]})),className:"season-card",children:(0,s.jsx)("div",{className:"scroll",children:(0,s.jsxs)("table",{style:{borderRadius:0},children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:e("common.year")}),(0,s.jsx)("th",{children:e("month.0")}),(0,s.jsx)("th",{children:e("month.1")}),(0,s.jsx)("th",{children:e("month.2")}),(0,s.jsx)("th",{children:e("month.3")}),(0,s.jsx)("th",{children:e("month.4")}),(0,s.jsx)("th",{children:e("month.5")}),(0,s.jsx)("th",{children:e("month.6")}),(0,s.jsx)("th",{children:e("month.7")}),(0,s.jsx)("th",{children:e("month.8")}),(0,s.jsx)("th",{children:e("month.9")}),(0,s.jsx)("th",{children:e("month.10")}),(0,s.jsx)("th",{children:e("month.11")})]})}),(0,s.jsxs)("tbody",{children:[P&&(0,s.jsxs)("tr",{children:[(0,s.jsxs)("td",{children:[_.length-1,"Yr Avg"]}),Array.from(Array(12).keys()).map((function(e){return(0,s.jsx)("td",{style:{color:"white",background:P[e]<0?"#c10015":"#21ba45"},children:(Number(P[e])/(_.length-1)).toFixed(2)},e)}))]}),_.reverse().map((function(e){var n=S[e];if(n)return(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:e}),Array.from(Array(12).keys()).map((function(e){return!n[e]&&n[e+1]?(0,s.jsx)("td",{style:{color:"white",background:"#21ba45"},children:"0"}):n[e]?(0,s.jsx)("td",{style:{color:"white",background:n[e]<0?"#c10015":"#21ba45"},children:(0,f.u)(n[e])},e):(0,s.jsx)("td",{})}))]},e)}))]})]})})})]}):(0,s.jsxs)("div",{className:"text-center w-full flex flex-col justify-center ",children:["Per visualizzare la stagionalit\xe0 aggiorna il tuo piano",(0,s.jsx)(r.Z,{label:"Upgrade",className:"w-[300px] mx-auto mt-4 bg-[#009a0f]"})]})]})}},4046:function(e,n,t){"use strict";t.d(n,{z:function(){return s},u:function(){return i}});var s=function(e){switch(e){case"eur":return"\u20ac";case"usd":return"$";case"gbp":return"\xa3"}return""},i=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,t=arguments.length>2&&void 0!==arguments[2]&&arguments[2],s=Math.pow(10,n),i=Math.round(Number(e)*s)/s;return t?i:i.toLocaleString("it-IT",{minimumFractionDigits:n})}},9008:function(e,n,t){e.exports=t(3121)}},function(e){e.O(0,[335,774,888,179],(function(){return n=9557,e(e.s=n);var n}));var n=e.O();_N_E=n}]);