_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[8],{"HaE+":function(e,t,n){"use strict";function r(e,t,n,r,o,a,l){try{var s=e[a](l),c=s.value}catch(i){return void n(i)}s.done?t(c):Promise.resolve(c).then(r,o)}function o(e){return function(){var t=this,n=arguments;return new Promise((function(o,a){var l=e.apply(t,n);function s(e){r(l,o,a,s,c,"next",e)}function c(e){r(l,o,a,s,c,"throw",e)}s(void 0)}))}}n.d(t,"a",(function(){return o}))},RNiq:function(e,t,n){"use strict";n.r(t);var r=n("o0o1"),o=n.n(r),a=n("HaE+"),l=n("rePB"),s=n("q1tI"),c=n.n(s),i=n("nOHt"),u=n("z1CN"),f=n("HbWr"),p=n("obyI"),d=c.a.createElement;function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach((function(t){Object(l.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t.default=function(){var e=Object(s.useContext)(f.b),t=e.isItDark,n=e.setIsItDark,r=Object(s.useState)({username:"",password:""}),c=r[0],m=r[1],h=Object(s.useState)("../public/img/dark-mode-false.png"),g=h[0],b=h[1],y=Object(i.useRouter)(),w=c.username,O=c.password;function j(e){var t=e.target,n=t.name,r=t.value;m((function(e){return v(v({},e),{},Object(l.a)({},n,r))}))}function N(){return(N=Object(a.a)(o.a.mark((function e(t){var n,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t.preventDefault(),e.next=4,fetch(p.URI+"/api/users/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(c)});case 4:return n=e.sent,e.next=7,n.json();case 7:r=e.sent,localStorage.setItem("token",r.token),localStorage.setItem("username",r.username),localStorage.setItem("user_id",r.user_id),m({username:"",password:""}),y.push("/chat"),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(0),console.log(e.t0);case 18:case"end":return e.stop()}}),e,null,[[0,15]])})))).apply(this,arguments)}return Object(s.useEffect)((function(){var e=localStorage.getItem("dark");"true"==e?(n(!0),b("../public/img/dark-mode-false.png")):(n(!1),b("../public/img/dark-mode-true.png")),document.title="Text.js | Welcome"}),[]),d("main",{className:"login-page it-is-dark-"+t},d("section",{className:"nav-bar"},d(u.a,null)),d("section",{className:"banner"},d("div",{className:"background-mask"},d("div",null)),d("div",{className:"block-container"},d("div",null,d("div",null,d("a",{href:"#log-in",method:"POST",className:"btn"},"Log In")),d("div",{className:"text-js-comments"},d("div",{className:"text-block"},d("h3",null,"Welcome to Text.js"),d("p",null,"And stay connected with the World.")),d("div",{className:"text-block"},d("h3",null,"What is Text.js?"),d("p",null,"The Next Generation of online messaging.")),d("div",{className:"text-block"},d("h3",null,"Why use Text.js?"),d("p",null,"It's awesome. You can do things like send messages, receive messages... and much more!")))))),d("section",{className:"login-block"},d("div",{className:"me"},d("h2",null,'"The Best Telecommunication since the invention of the Telegraph"'),d("p",null),d("img",{src:g,alt:"log in character"})),d("div",{className:"login-wrapper",id:"log-in"},d("h1",null,"Login"),d("form",{onSubmit:function(e){return N.apply(this,arguments)},autoComplete:"off"},d("input",{placeholder:"username",type:"text",name:"username",value:w,onChange:j,required:!0}),d("br",null),d("input",{placeholder:"password",type:"password",name:"password",value:O,onChange:j,required:!0}),d("br",null),d("button",{type:"submit"},"Log-In")))),d("section",{className:"footer"},d("div",null,d("ul",null,d("h1",null,"Text.js"),d("li",null,"About Us"),d("li",null,"Contact"),d("li",null,"Blog"),d("li",null,"Careers"),d("li",null,"Support"),d("li",null,"Privacy Policy")),d("span",null,"\xa9 Text.js. All Rights Reserved"))),d("div",{className:"showcase"}))}},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var r=n("J4zp"),o=n("284h");t.__esModule=!0,t.default=void 0;var a,l=o(n("q1tI")),s=n("elyg"),c=n("nOHt"),i=new Map,u=window.IntersectionObserver,f={};var p=function(e,t){var n=a||(u?a=new u((function(e){e.forEach((function(e){if(i.has(e.target)){var t=i.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(a.unobserve(e.target),i.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0);return n?(n.observe(e),i.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}i.delete(e)}):function(){}};function d(e,t,n,r){(0,s.isLocalURL)(t)&&(e.prefetch(t,n,r).catch((function(e){0})),f[t+"%"+n]=!0)}var m=function(e){var t=!1!==e.prefetch,n=l.default.useState(),o=r(n,2),a=o[0],i=o[1],m=(0,c.useRouter)(),v=m&&m.pathname||"/",h=l.default.useMemo((function(){var t=(0,s.resolveHref)(v,e.href,!0),n=r(t,2),o=n[0],a=n[1];return{href:o,as:e.as?(0,s.resolveHref)(v,e.as):a||o}}),[v,e.href,e.as]),g=h.href,b=h.as;l.default.useEffect((function(){if(t&&u&&a&&a.tagName&&(0,s.isLocalURL)(g)&&!f[g+"%"+b])return p(a,(function(){d(m,g,b)}))}),[t,a,g,b,m]);var y=e.children,w=e.replace,O=e.shallow,j=e.scroll;"string"===typeof y&&(y=l.default.createElement("a",null,y));var N=l.Children.only(y),k={ref:function(e){e&&i(e),N&&"object"===typeof N&&N.ref&&("function"===typeof N.ref?N.ref(e):"object"===typeof N.ref&&(N.ref.current=e))},onClick:function(e){N.props&&"function"===typeof N.props.onClick&&N.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,a,l){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,s.isLocalURL)(n))&&(e.preventDefault(),null==l&&(l=r.indexOf("#")<0),t[o?"replace":"push"](n,r,{shallow:a}).then((function(e){e&&l&&(window.scrollTo(0,0),document.body.focus())})))}(e,m,g,b,w,O,j)}};return t&&(k.onMouseEnter=function(e){(0,s.isLocalURL)(g)&&(N.props&&"function"===typeof N.props.onMouseEnter&&N.props.onMouseEnter(e),d(m,g,b,{priority:!0}))}),(e.passHref||"a"===N.type&&!("href"in N.props))&&(k.href=(0,s.addBasePath)((0,s.addLocale)(b,m&&m.locale,m&&m.defaultLocale))),l.default.cloneElement(N,k)};t.default=m},rePB:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return r}))},vlRD:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("RNiq")}])},z1CN:function(e,t,n){"use strict";var r=n("q1tI"),o=n.n(r),a=n("YFqc"),l=n.n(a),s=n("HbWr"),c=o.a.createElement;t.a=function(e){e.homeLogo;var t=Object(r.useContext)(s.b).isItDark;return c("div",null,c("div",null,c(l.a,{href:"/"},c("div",{className:"logo"},c("img",{src:t?"../../public/img/textjs-logo-dark.svg":"../../public/img/textjs-logo-light.svg",alt:"logo-Text.js"})))),c("div",null,c("div",{className:"menu-bar"},c("ul",null,c("li",null,c(l.a,{className:"btn sign-up",href:"/sign-up"},"Sign Up"))))))}}},[["vlRD",1,2,0,3]]]);