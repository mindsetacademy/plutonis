(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5301:function(e,s,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(2704)}])},2254:function(e,s,n){"use strict";var a=n(5893),t=n(6046);s.Z=function(e){var s=e.withMenu;return(0,a.jsxs)(a.Fragment,{children:[s&&(0,a.jsx)(t.Z,{}),(0,a.jsx)("div",{className:"flex items-center justify-center",style:{background:'url("/assets/images/bg_quantum.jpg") top center no-repeat',backgroundSize:"cover",height:"100vh"},children:(0,a.jsx)("img",{src:"/assets/images/loading.gif",className:"w-[60px] h-[60px] mt-[50px] mx-auto",alt:"loading"})})]})}},4570:function(e,s,n){"use strict";n.d(s,{Z:function(){return t}});var a=n(5893);function t(e){var s=e.children,n=e.className,t=e.style;return(0,a.jsx)("header",{className:n,style:t,children:s})}},6046:function(e,s,n){"use strict";n.d(s,{Z:function(){return u}});var a=n(5893),t=n(1163),i=n(1721);function l(e){var s=e.image,n=e.link,t=e.label,i=e.active,l=e.locked;return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("a",{className:"item cursor-pointer ".concat(i?"active":""," ").concat(l?"locked":""),onClick:n,children:[(0,a.jsx)("img",{width:22,height:22,src:s,alt:t}),(0,a.jsx)("span",{children:t})]})})}function u(e){var s=e.active,n=(0,i.Z)(),u=n.authUser,r=n.loading,o=n._signOut,m=(0,t.useRouter)();return r?(0,a.jsx)(a.Fragment,{}):(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("div",{id:"menu","data-role":null===u||void 0===u?void 0:u.role,children:[(0,a.jsxs)("div",{className:"hidden lg:flex lg:flex-col h-full",children:[(0,a.jsxs)("div",{className:"top-menu-container",children:[(0,a.jsx)(l,{image:"/assets/images/menu/profit.svg",label:"Quantum",link:function(){return m.push("/quantum")},locked:!r&&u&&"demo"==u.role}),(0,a.jsx)(l,{image:"/assets/images/menu/season.svg",label:"Stagionalit\xe0",link:function(){return m.push("/quantum/season")},locked:!r&&u&&"demo"==u.role}),(0,a.jsx)(l,{image:"/assets/images/menu/course.svg",label:"Formazione",link:function(){return window.open("https://app.plutonis.com/","_blank")}}),(0,a.jsx)(l,{image:"/assets/images/menu/calculator.svg",label:"Hedging",link:function(){return m.push("/quantum/hedging")},locked:!r&&u&&["basic","demo"].indexOf(u.role)>-1}),(0,a.jsx)(l,{image:"/assets/images/menu/profit.svg",label:"Momentum",link:function(){return m.push("/momentum")},locked:!r&&u&&"admin"!=u.role&&!u.momentum}),(0,a.jsx)(l,{image:"/assets/images/menu/result.svg",label:"Risultati",link:function(){return m.push("/result")}})]}),(0,a.jsxs)("div",{className:"bottom-menu-container mt-auto ",children:[u&&"demo"!=u.role&&(0,a.jsx)(l,{image:"/assets/images/menu/icon-regalo-stroke.svg",label:"100\u20ac",link:function(){return window.open("https://plutonis.com/invito","_blank")}}),(0,a.jsx)(l,{image:"/assets/images/menu/profile.svg",label:"Profilo",link:function(){return m.push("/profile")}}),!r&&u&&"admin"==u.role&&(0,a.jsx)(l,{image:"/assets/images/menu/admin-2.svg",label:"Admin",link:function(){return m.push("/admin")}}),(0,a.jsx)(l,{image:"/assets/images/menu/logout.svg",label:"Logout",link:function(){return o()}})]}),(0,a.jsx)("div",{className:"logo flex flex-row gap-[5px]",children:(0,a.jsx)("img",{alt:"logo",src:"/assets/images/logo.png",className:"w-auto"})})]}),(0,a.jsxs)("div",{className:"flex mobile lg:hidden justify-center",children:[(0,a.jsx)(l,{active:"profit-risk"==s,image:"/assets/images/menu/profit.svg",label:"Quantum",link:function(){return m.push("/quantum")}}),(0,a.jsx)(l,{active:"season"==s,image:"/assets/images/menu/season.svg",label:"Stagionalit\xe0",link:function(){return m.push("/quantum/season")}}),(0,a.jsx)(l,{image:"/assets/images/menu/course.svg",label:"Formazione",link:function(){return window.open("https://app.plutonis.com/","_blank")}}),(0,a.jsx)(l,{active:"hedging"==s,image:"/assets/images/menu/calculator.svg",label:"Hedging",link:function(){return m.push("/quantum/hedging")},locked:!r&&u&&"basic"==u.role}),(0,a.jsx)(l,{active:"result"==s,image:"/assets/images/menu/result.svg",label:"Risultati",link:function(){return m.push("/result")}}),(0,a.jsx)(l,{active:"momentum"==s,image:"/assets/images/menu/profit.svg",label:"Momentum",link:function(){return m.push("/momentum")},locked:!r&&u&&"admin"!=u.role&&!u.momentum}),(0,a.jsx)(l,{image:"/assets/images/menu/icon-regalo-stroke.svg",label:"100\u20ac",link:function(){return window.open("https://plutonis.com/invito","_blank")}})]})]})})}},8161:function(e,s,n){"use strict";n.d(s,{Z:function(){return i}});var a=n(5893),t=n(9008);function i(e){var s=e.title;return(0,a.jsxs)(t.default,{children:[(0,a.jsxs)("title",{children:["Quantum Platform ",s?"- ".concat(s):""]}),(0,a.jsx)("meta",{charSet:"utf-8"}),(0,a.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"}),(0,a.jsx)("link",{rel:"shortcut icon",type:"image/svg+xml",href:"/assets/icons/favicon.png?v=1"}),(0,a.jsx)("meta",{property:"og:title",content:"Quantum Platform ".concat(s?"- ".concat(s):"")})]})}},2704:function(e,s,n){"use strict";n.r(s),n.d(s,{default:function(){return g}});var a=n(5893),t=n(1163),i=n(7294),l=n(4570),u=n(6046);function r(e){var s=e.image,n=e.link,t=e.label;return(0,a.jsxs)("div",{className:"home-item",onClick:n,children:[(0,a.jsx)("div",{className:"home-item-img",style:{backgroundImage:'url("'.concat(s,'")')}}),(0,a.jsx)("div",{children:(0,a.jsx)("h5",{children:t})})]})}var o=n(1721),m=n(8161),c=n(2254),g=function(){var e=(0,o.Z)(),s=e.authUser,n=e.loading,g=(0,i.useState)(""),d=g[0],h=g[1],f=(0,i.useState)(!1),x=(f[0],f[1]),p=(0,t.useRouter)();(0,i.useEffect)((function(){n||s||p.push("/login"),s&&(h(s.name),s.survey||x(!0))}),[s,n]);return n||!s?(0,a.jsx)(c.Z,{}):(0,a.jsxs)("div",{className:"flex",children:[(0,a.jsx)(m.Z,{}),(0,a.jsx)(u.Z,{}),(0,a.jsxs)("div",{className:"w-full pb-[100px] lg:pb-0",children:[(0,a.jsxs)(l.Z,{className:"home-header",children:[d&&(0,a.jsxs)("h3",{children:["Ciao, ",d,"!"]}),(0,a.jsx)("h5",{className:"text-center w-full",children:"Plutonis ti aiuta a fare trading senza stress."})]}),(0,a.jsx)("div",{className:"w-full",children:(0,a.jsxs)("div",{className:"home-grid mx-auto",style:{maxWidth:"38rem"},children:[(0,a.jsx)(r,{image:"/assets/images/dashboard/course.png",label:"Formazione",link:function(){return window.open("https://app.plutonis.com/","_blank")}}),(0,a.jsx)(r,{image:"/assets/images/dashboard/hedging.png",label:"Calcolatore Hedging",link:function(){return p.push("/quantum/hedging")}}),(0,a.jsx)(r,{image:"/assets/images/dashboard/profit.png",label:"Quantum Station",link:function(){return p.push("/quantum/")}}),(0,a.jsx)(r,{image:"/assets/images/dashboard/result.png",label:"Risultati",link:function(){return p.push("/result")}})]})})]})]})}},9008:function(e,s,n){e.exports=n(3121)}},function(e){e.O(0,[774,888,179],(function(){return s=5301,e(e.s=s);var s}));var s=e.O();_N_E=s}]);