(this.webpackJsonpk1weather=this.webpackJsonpk1weather||[]).push([[5],{58:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(17),r=Object(n.a)((function(e){return{enter:{opacity:0},enterActive:{opacity:1,transition:"opacity 500ms ease-in"},exit:{opacity:1},exitActive:{opacity:0,transition:"opacity 500ms ease-out"}}}))},61:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var n=a(67),r=a(0),o=a.n(r),c=a(17),i=a(59),l=Object(c.a)((function(e){return{root:{display:"inline-flex",textAlign:"center",flex:"0 0 auto",padding:8,borderRadius:"50%",overflow:"visible",color:e.action.active,border:0,margin:0,cursor:"pointer",transition:"background-color 300ms ease","&:hover":{backgroundColor:"".concat(e.primary.main,"44"),"@media (hover: none)":{backgroundColor:"transparent"}},"&$disabled":{backgroundColor:"transparent",color:e.action.disabled}},disabled:{}}})),u=function(e){var t=e.children,a=e.className,r=Object(n.a)(e,["children","className"]),u=Object(c.c)(),s=l({theme:u});return o.a.createElement("button",Object.assign({className:Object(i.a)(s.root,a)},r),t)}},62:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var n=a(0),r=a.n(n),o=function(e){var t=Object.assign({},e);return r.a.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24"},t),r.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),r.a.createElement("path",{fill:"currentColor",d:"M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"}))}},63:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var n=a(0),r=a.n(n),o=function(e){var t=Object.assign({},e);return r.a.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24"},t),r.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),r.a.createElement("path",{fill:"currentColor",d:"M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"}))}},64:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(17),c=a(66),i=a(27),l=a(78);var u=function(e){var t=Object.assign({},e);return r.a.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24"},t),r.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),r.a.createElement("path",{fill:"currentColor",d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}))},s=a(59),d=a(79),m=a(58),p=a(5),b=38,h=40,f=27,v=13,g=7,x=Object(o.a)((function(e){return{root:{display:"flex",alignItems:"center",borderRadius:4,backgroundColor:"".concat(e.primary.dark,"cc"),padding:4,color:e.primary.text,width:32,maxWidth:480,transition:"width 300ms ease"},rootActive:{width:"100%"},label:{display:"flex",alignItems:"center"},icon:{color:e.primary.text},query:{border:0,borderRadius:4,width:0,padding:0,transition:"width 300ms ease"},queryFocused:{marginLeft:4,padding:4,width:"calc(100% - 30px)"},hidden:{display:"none"},listbox:{background:e.background.main,border:"1px solid ".concat(e.border.main),listStyle:"none",margin:0,padding:0,position:"absolute",top:42,width:"calc(100% - 16px)",left:8,maxWidth:480,maxHeight:"calc(100% - 52px)",zIndex:1,overflow:"auto",borderRadius:"0 0 4px 4px"},resultRow:{padding:2,cursor:"default",color:e.text.primary,margin:0,"&:hover":{backgroundColor:"".concat(e.primary.main,"11")}},resultRowActive:{backgroundColor:"".concat(e.primary.main,"55")}}})),w=function(){var e=Object(o.c)(),t=x({theme:e}),a=Object(i.b)(),n=function(e,t){var a;return function(){for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];clearTimeout(a),a=setTimeout((function(){return e.apply(void 0,r)}),t)}}((function(e){a.setLookup(e)}),300),l=r.a.useState(!1),d=Object(c.a)(l,2),m=d[0],w=d[1],y=r.a.useRef(null),E=Object(p.f)(),j=function(e){E.push("/city/".concat(e.country,"/").concat(e.region,"/").concat(e.name)),w(!1)};return r.a.createElement("div",{className:Object(s.a)(t.root,m&&t.rootActive),id:"lookup",role:"combobox","aria-owns":"lookup-listbox","aria-expanded":m?"true":"false","aria-controls":"lookup-listbox","aria-haspopup":"listbox"},r.a.createElement("label",{htmlFor:"lookup-input",id:"lookup-label",className:t.label},r.a.createElement(u,{className:t.icon,onClick:function(){w((function(e){return!e}))}})),r.a.createElement("input",{ref:y,type:"text",className:Object(s.a)(t.query,m&&t.queryFocused),defaultValue:a.lookup,onChange:function(e){return n(e.target.value)},id:"lookup-input","aria-autocomplete":"list","aria-controls":"lookup-listbox",onKeyUp:function(e){switch(e.which||e.keyCode){case b:case h:case f:case v:return void e.preventDefault()}},onKeyDown:function(e){var t,n,r=e.which||e.keyCode;if(r!==f){var o=null!==(t=a.lookupActiveIndex)&&void 0!==t?t:-1;switch(r){case b:o<=0?a.setLookupActiveIndex(a.lookupResult.length-1):a.setLookupActiveIndex(o-1);break;case h:-1===o||o>=a.lookupResult.length-1?a.setLookupActiveIndex(0):a.setLookupActiveIndex(o+1);break;case v:return void(null!==a.lookupActiveIndex&&j(a.lookupResult[a.lookupActiveIndex]));case g:return void w(!1);default:return}e.preventDefault(),null===(n=y.current)||void 0===n||n.setAttribute("aria-activedescendant",null===a.lookupActiveIndex?"":"result-item-"+a.lookupActiveIndex)}else w(!1)}}),r.a.createElement(k,{active:m,showResult:j}))},k=Object(l.a)((function(e){var t=e.active,a=e.showResult,n=Object(o.c)(),c=x({theme:n}),l=Object(m.a)({theme:n}),u=Object(i.b)(),p=u.lookupResult;return r.a.createElement(d.a,{in:t,unmountOnExit:!0,timeout:500,classNames:l},r.a.createElement("ul",{id:"lookup-listbox",role:"listbox","aria-labelledby":"lookup-label",className:Object(s.a)(c.listbox)},p.map((function(e,t){var n=u.lookupActiveIndex===t;return r.a.createElement("li",{key:e.name,role:"option",id:"result-item-".concat(t),"aria-selected":n?"true":"false",className:Object(s.a)(c.resultRow,n&&c.resultRowActive),onClick:function(){return a(e)}},e.name," / ",e.region," / ",e.country)}))))})),y=Object(o.a)((function(e){return{root:{backgroundColor:e.background.main},container:{width:"100%",margin:"0 auto",padding:"0 24px",maxWidth:972},"@media (max-width: 1024px)":{container:{maxWidth:680}},"@media (max-width: 480px)":{container:{padding:"0 8px"}},header:{display:"flex",alignItems:"center",height:48,padding:8,marginBottom:16,color:e.primary.text,backgroundColor:e.primary.main},footer:{marginTop:24,color:e.secondary.text,backgroundColor:e.secondary.main}}})),E=(t.a=function(e){var t=e.children,a=Object(o.c)(),n=y({theme:a});return r.a.createElement("div",{className:n.root},r.a.createElement("header",{className:n.header},r.a.createElement(w,null)),r.a.createElement("div",{className:n.container},t),r.a.createElement("footer",{className:n.footer},r.a.createElement(E,null)))},function(){return r.a.createElement("div",null,"Powered by ",r.a.createElement("a",{href:"https://www.weatherapi.com/",title:"Free Weather API"},"WeatherAPI.com"))})},76:function(e,t,a){"use strict";a.r(t);var n=a(4),r=a.n(n),o=a(13),c=a(0),i=a.n(c),l=a(17),u=a(5),s=a(27),d=a(78),m=a(64),p=a(61),b=a(62),h=a(63),f=Object(l.a)((function(e){return{root:{display:"flex",flexDirection:"column",justifyContent:"space-between",minHeight:300,borderRadius:"4px",border:"1px solid ".concat(e.border.main)},actions:{display:"flex",justifyContent:"flex-end",padding:8}}})),v=Object(d.a)((function(){var e,t=Object(l.c)(),a=f({theme:t}),n=Object(u.g)(),c=n.country,d=n.region,v=n.name,g=Object(s.b)(),x=Object(u.f)(),w=g.findCity(c,d,v);i.a.useEffect((function(){w||Object(o.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.fetchCity(v);case 2:(t=e.sent)&&(t.country===c&&t.region===d&&t.name===v||x.replace("/city/".concat(t.country,"/").concat(t.region,"/").concat(t.name)));case 4:case"end":return e.stop()}}),e)})))()}),[w,c,d,v,g,x]);var k=null===w||void 0===w?void 0:w.isFavorite();return i.a.createElement(m.a,null,i.a.createElement("div",{className:a.root},w&&i.a.createElement(i.a.Fragment,null,"City ",w.name,w.currentWeather&&i.a.createElement(i.a.Fragment,null,"Temp ",null===(e=w.currentWeather)||void 0===e?void 0:e.temp_c),!w.currentWeather&&i.a.createElement(i.a.Fragment,null,":D"),i.a.createElement("div",{className:a.actions},w.currentWeather&&k&&i.a.createElement(p.a,{onClick:function(){w&&(g.removeFromFavorite(w),g.addToTopCity(w))}},i.a.createElement(b.a,null)),w.currentWeather&&!k&&i.a.createElement(p.a,{onClick:function(){w&&g.addToFavorite(w)}},i.a.createElement(h.a,null)))),!w&&i.a.createElement("span",null,"...")))}));t.default=v}}]);
//# sourceMappingURL=5.ecfab789.chunk.js.map