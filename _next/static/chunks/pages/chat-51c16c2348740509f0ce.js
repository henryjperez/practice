_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[7],{obeH:function(e,n,t){"use strict";function a(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,a=new Array(n);t<n;t++)a[t]=e[t];return a}function r(e){return function(e){if(Array.isArray(e))return a(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,n){if(e){if("string"===typeof e)return a(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?a(e,n):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.r(n);var o=t("q1tI"),c=t.n(o),s=t("nOHt"),l=t("obyI"),i=t("HbWr"),u=c.a.createElement;var m=function(e){var n=e.message,t=e.setMessage,a=e.sendMessage;return u("form",{className:"input-form",onSubmit:a,autoComplete:"off"},u("input",{className:"input-text",type:"text",placeholder:"Write your world...",value:n,onChange:function(e){var n=e.target.value;t(n)},name:"text_message"}),u("button",{className:"send-button",type:"submit"},"SEND"))},h=c.a.createElement;var d=function(e){var n=e.titleName,t=e.menu,a=e.children,r=e.channel_id,c=e.setMessagesArray,s=e.styleProp,l=e.stylePropNavShape,u=Object(o.useContext)(i.b),m=u.socket,d=u.dropdown,p=u.setDropdown,f=u.renderChat,v=u.setDropForm,b=u.setRenderChat,g=h("button",{className:"go-back button-nav",onClick:function(){b(!1),m.emit("leave",r),c([])}},"V");return h("nav",{className:"title-nav"},h("ul",{className:"display-wrapper "+l},h("li",null,f&&g),h("li",{className:"title-displayed"},h("strong",null,n)),h("li",null,h("button",{className:"button-nav-menu button-nav "+s,onClick:function(){p(!d),v(!1)}},t))),d&&a)},p=c.a.createElement;var f=function(e){var n=e.text,t=e.owner;return p("li",{className:"message "+t},p("p",null,n))},v=c.a.createElement;var b=function(){var e=Object(o.useContext)(i.b),n=e.isItDark,t=e.setIsItDark;return v("li",{className:"dark-mode"},n?"Light Mode":"Dark Mode",v("input",{type:"checkbox",className:"checkbox",id:"checkMode",onChange:function(e){t(!n),localStorage.setItem("dark",!n)},checked:n}),v("label",{className:"switch",htmlFor:"checkMode"}))},g=c.a.createElement;var N=function(){var e=Object(s.useRouter)(),n=Object(o.useContext)(i.b),t=n.socket,a=n.channelRender;return g("li",{onClick:function(){t.emit("leave",a.channel_id),localStorage.removeItem("token"),localStorage.removeItem("username"),localStorage.removeItem("user_id"),e.push("/")},className:"logout"},"LogOut")},y=c.a.createElement;var w=function(e){var n=e.children,t=e.styleProp;return y("div",{className:"dropdown "+t},y("ul",{className:"dropdown-menu"},n))},_=c.a.createElement,k=function(){var e=Object(o.useState)(""),n=e[0],t=e[1],a=Object(o.useState)([]),c=a[0],s=a[1],u=Object(o.useContext)(i.b),h=u.socket,p=u.renderChat,v=u.channelRender,g=u.sessionVariables;function y(){var e=document.querySelector(".message-area");window.matchMedia("(min-width: 700px)").matches?(console.log("yes matches"),e.scrollTop=e.scrollHeight):(console.log("no natch"),e.scrollIntoView(!1))}return Object(o.useEffect)((function(){return v.channel_id&&(fetch(l.URI+"/api/messages",{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer "+g.token,channel_id:v.channel_id}}).then((function(e){return e.json()})).then((function(e){e.messages&&s(e.messages)})).then((function(){return y()})).catch((function(e){return console.log("error in getting the channels, brah")})),h.open(),h.emit("join",v.channel_id)),function(){h.emit("leave",v.channel_id),s([])}}),[v]),Object(o.useEffect)((function(){h.on("new-message",(function(e){console.log("perrito mesajero",e),s((function(n){return[].concat(r(n),[e])})),y()}))}),[]),_("div",{className:p?"chat-area":"chat-area-none"},_("section",{className:"chat-area-nav-chat"},_(d,{titleName:v.user,menu:"...",channel_id:v.channel_id,setMessagesArray:s,stylePropNavShape:"nav-shape-chat-area"},_(w,null,_(b,null),_(N,null)))),_("section",{className:"message-section"},_("ul",{className:"message-area"},c.map((function(e){var n=e._id,t=(e.date,e.author),a=e.content;return t===g.username?_(f,{key:n,text:a,owner:"own"}):_(f,{key:n,text:a,owner:"not-own"})})))),_("section",{className:"chat-area-input-section"},_(m,{message:n,setMessage:t,sendMessage:function(e){e.preventDefault(),fetch(l.URI+"/api/messages",{method:"POST",headers:{Authorization:"Bearer "+g.token,"Content-Type":"application/json"},body:JSON.stringify({content:n,channel_id:v.channel_id})}).then((function(e){return console.log(e)})).catch((function(e){console.error(e)})),t("")}})))},j=c.a.createElement;var C=function(e){var n=e.user,t=e.channel_id,a=Object(o.useContext)(i.b),r=a.renderChat,c=a.setRenderChat,s=a.setChannelRender;return j("li",{className:"channel"},j("div",{className:"channel-wrapper"},j("div",{className:"crop-picture"},j("img",{src:"../../public/img/default.jpg",alt:"profile",className:"profile-picture"})),j("div",{className:"channel-preview",onClick:function(){s({channel_id:t,user:n}),c(!r)}},j("h2",{className:"channel-name"},n))))},S=c.a.createElement;var E=function(e){var n=e.children,t=Object(o.useContext)(i.b),a=t.dropForm,r=t.setDropForm,c=t.setDropdown;return S("div",{className:"new-channel-div"},a&&n,S("button",{className:"new-channel-button new-channel-button-"+a,onClick:function(){r(!a),c(!1)}},"+"))},O=c.a.createElement;var I=function(){var e=Object(o.useContext)(i.b),n=e.sessionVariables,t=e.setChannelsArray;return O("form",{className:"new-channel-form",onSubmit:function(e){e.preventDefault();var a=e.target[0].value,o=e.target[1].value;fetch(l.URI+"/api/channels",{method:"POST",headers:{Authorization:"Bearer "+n.token,"Content-Type":"application/json"},body:JSON.stringify({receptor:a,content:o,date:Date()})}).then((function(e){return e.json()})).then((function(e){e.channel&&t((function(n){return[e.channel].concat(r(n))}))})).catch((function(e){console.error(e)})),e.target[0].value="",e.target[1].value=""}},O("input",{type:"text",placeholder:"to: <username />",className:"first-input"}),O("input",{type:"text",placeholder:"Write your world..."}),O("button",{className:"send-channel",type:"submit"},"SEND"))},x=c.a.createElement;var A=function(){var e=Object(o.useContext)(i.b),n=e.renderChat,t=e.channelsArray,a=e.sessionVariables;return x("div",{className:n?"channel-list-wrapper-true":"channel-list-wrapper-false"},x("section",{className:"channels-nav-bar"},x(d,{titleName:"Welcome, "+a.username,menu:"...",styleProp:"display-none-menu",stylePropNavShape:"nav-shape-channels"},x(w,{styleProp:"display-none-menu"},x(b,null),x(N,null)))),x("section",{className:"channel-list-section"},x("ul",{className:"channel-list"},t.map((function(e){var n=e.channel_username,t=e.channel_id;return x(C,{key:t,user:n,channel_id:t})})))),x("section",{className:"new-channel-section"},x(E,null,x(I,null))))},D=c.a.createElement;var T=function(e){var n=e.children;return D("div",{className:"chat-wrapper"},n)},M=c.a.createElement;n.default=function(){var e=Object(o.useContext)(i.b),n=e.socket,t=e.isItDark,a=e.setIsItDark,c=e.channelRender,u=e.setChannelsArray,m=e.setSessionVariables,h=Object(s.useRouter)();return Object(o.useEffect)((function(){var e=localStorage.getItem("token"),t=localStorage.getItem("username"),o=localStorage.getItem("user_id"),c=localStorage.getItem("dark");return a("true"==c),e&&t&&o?(m({token:e,username:t,user_id:o}),fetch(l.URI+"/api/channels",{method:"GET",headers:{Authorization:"Bearer "+e,"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){e.channels_id?(console.log(e),u(e.channels_id)):h.push("/")})).catch((function(e){console.log("error in getting the channels, brah"),console.log(e),h.push("/")}))):(console.log("Naah, brah"),h.push("/")),document.title="Text.js | "+t,n.emit("login",o),n.on("new-channel",(function(e){console.log("perrito",e),u((function(n){return[e].concat(r(n))}))})),function(){n.emit("leave",o),u([]),m("")}}),[]),M("main",{className:"chat-main it-is-dark-"+t},M("div",null,M(A,null)),M("div",null,M(T,null,M(k,{username_title:c.user,channel_id:c.channel_id}))))}},wuLQ:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/chat",function(){return t("obeH")}])}},[["wuLQ",1,2,0,3]]]);