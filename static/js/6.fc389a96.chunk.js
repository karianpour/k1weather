(this.webpackJsonpk1weather=this.webpackJsonpk1weather||[]).push([[6],{60:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(15),r=Object(a.a)((function(e){return{enter:{opacity:0},enterActive:{opacity:1,transition:"opacity 500ms ease-in"},exit:{opacity:1},exitActive:{opacity:0,transition:"opacity 500ms ease-out"}}}))},62:function(e,t,n){"use strict";var a=n(67),r=n(0),o=n.n(r),i=n(15),c=n(59),l=Object(i.a)((function(e){return{root:{display:"inline-flex",textAlign:"center",flex:"0 0 auto",padding:8,borderRadius:"50%",overflow:"visible",color:e.icon.main,border:0,margin:"0 4px",cursor:"pointer",transition:"background-color 300ms ease","&:hover":{backgroundColor:"".concat(e.primary.main,"44"),"@media (hover: none)":{backgroundColor:"transparent"}},"&$disabled":{backgroundColor:"transparent",color:e.action.disabled}},disabled:{}}}));t.a=function(e){var t=e.children,n=e.className,r=Object(a.a)(e,["children","className"]),u=Object(i.c)(),s=l({theme:u});return o.a.createElement("button",Object.assign({className:Object(c.a)(s.root,n)},r),t)}},63:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function(e){var t=Object.assign({},e);return r.a.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24"},t),r.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),r.a.createElement("path",{fill:"currentColor",d:"M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"}))}},64:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function(e){var t=Object.assign({},e);return r.a.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24"},t),r.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),r.a.createElement("path",{fill:"currentColor",d:"M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"}))}},65:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(15),i=n(61),c=n(29),l=n(81);var u=function(e){var t=Object.assign({},e);return r.a.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24"},t),r.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),r.a.createElement("path",{fill:"currentColor",d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}))},s=n(59),d=n(82),m=n(60),p=n(5),h=38,v=40,b=27,f=13,x=7,g=Object(o.a)((function(e){return{root:{display:"flex",alignItems:"center",borderRadius:4,backgroundColor:"".concat(e.primary.dark,"cc"),padding:4,color:e.primary.text,width:32,maxWidth:480,transition:"width 300ms ease"},rootActive:{width:"100%"},label:{display:"flex",alignItems:"center"},icon:{color:e.primary.text,backgroundColor:e.primary.dark},query:{border:0,borderRadius:4,width:0,padding:0,transition:"width 300ms ease"},queryFocused:{marginLeft:4,padding:4,width:"calc(100% - 30px)"},hidden:{display:"none"},listbox:{background:e.background.main,border:"1px solid ".concat(e.border.main),listStyle:"none",margin:0,padding:0,position:"absolute",top:42,width:"calc(100% - 16px)",left:8,maxWidth:480,maxHeight:"calc(100% - 52px)",zIndex:1,overflow:"auto",borderRadius:"0 0 4px 4px"},resultRow:{display:"flex",alignItems:"center",height:48,padding:12,cursor:"default",color:e.text.primary,margin:0,borderTop:"1px dotted ".concat(e.border.main),"&:hover":{backgroundColor:"".concat(e.primary.main,"11")},"&:first-child":{borderTop:"unset"}},resultRowActive:{backgroundColor:"".concat(e.primary.main,"55")}}})),E=function(){var e=Object(o.c)(),t=g({theme:e}),n=Object(c.b)(),a=function(e,t){var n;return function(){for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];clearTimeout(n),n=setTimeout((function(){return e.apply(void 0,r)}),t)}}((function(e){n.setLookup(e)}),300),l=r.a.useState(!1),d=Object(i.a)(l,2),m=d[0],E=d[1],y=r.a.useRef(null),j=Object(p.f)(),O=function(e){j.push("/city/".concat(e.country,"/").concat(e.region,"/").concat(e.name)),E(!1)};return r.a.createElement("div",{className:Object(s.a)(t.root,m&&t.rootActive),id:"lookup",role:"combobox","aria-owns":"lookup-listbox","aria-expanded":m?"true":"false","aria-controls":"lookup-listbox","aria-haspopup":"listbox"},r.a.createElement("label",{htmlFor:"lookup-input",id:"lookup-label",className:t.label},r.a.createElement(u,{"data-testid":"searchIcon",className:t.icon,onClick:function(){document.getElementById("lookup-listbox")||E(!0)}})),r.a.createElement("input",{ref:y,type:"text",className:Object(s.a)(t.query,m&&t.queryFocused),defaultValue:n.lookup,onChange:function(e){return a(e.target.value)},id:"lookup-input","aria-autocomplete":"list","aria-controls":"lookup-listbox",onKeyUp:function(e){switch(e.which||e.keyCode){case h:case v:case b:case f:return void e.preventDefault()}},onKeyDown:function(e){var t,a,r=e.which||e.keyCode;if(r!==b){var o=null!==(t=n.lookupActiveIndex)&&void 0!==t?t:-1;switch(r){case h:o<=0?n.setLookupActiveIndex(n.lookupResult.length-1):n.setLookupActiveIndex(o-1);break;case v:-1===o||o>=n.lookupResult.length-1?n.setLookupActiveIndex(0):n.setLookupActiveIndex(o+1);break;case f:return void(null!==n.lookupActiveIndex&&O(n.lookupResult[n.lookupActiveIndex]));case x:return void E(!1);default:return}e.preventDefault(),null===(a=y.current)||void 0===a||a.setAttribute("aria-activedescendant",null===n.lookupActiveIndex?"":"result-item-"+n.lookupActiveIndex)}else E(!1)},onBlur:function(){E(!1)}}),r.a.createElement(w,{active:m,showResult:O}))},w=Object(l.a)((function(e){var t=e.active,n=e.showResult,a=Object(o.c)(),i=g({theme:a}),l=Object(m.a)({theme:a}),u=Object(c.b)(),p=u.lookupResult;return r.a.createElement(d.a,{in:t,unmountOnExit:!0,timeout:500,classNames:l},r.a.createElement("ul",{id:"lookup-listbox",role:"listbox","aria-labelledby":"lookup-label",className:Object(s.a)(i.listbox)},p.map((function(e,t){var a=u.lookupActiveIndex===t;return r.a.createElement("li",{key:e.name,role:"option",id:"result-item-".concat(t),"aria-selected":a?"true":"false",className:Object(s.a)(i.resultRow,a&&i.resultRowActive),onClick:function(){return n(e)}},e.name)}))))})),y=n(30),j=function(e){var t=Object.assign({},e);return r.a.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24"},t),r.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),r.a.createElement("path",{fill:"currentColor",d:"M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"}))},O=function(e){var t=Object.assign({},e);return r.a.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24"},t),r.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),r.a.createElement("path",{fill:"currentColor",d:"M19.35 10.04C18.67 6.59 15.64 4 12 4c-1.48 0-2.85.43-4.01 1.17l1.46 1.46C10.21 6.23 11.08 6 12 6c3.04 0 5.5 2.46 5.5 5.5v.5H19c1.66 0 3 1.34 3 3 0 1.13-.64 2.11-1.56 2.62l1.45 1.45C23.16 18.16 24 16.68 24 15c0-2.64-2.05-4.78-4.65-4.96zM3 5.27l2.75 2.74C2.56 8.15 0 10.77 0 14c0 3.31 2.69 6 6 6h11.73l2 2L21 20.73 4.27 4 3 5.27zM7.73 10l8 8H6c-2.21 0-4-1.79-4-4s1.79-4 4-4h1.73z"}))},k=n(83),C=Object(o.a)((function(e){return{root:{backgroundColor:e.background.main,minHeight:"100vh",marginBottom:32},container:{width:"100%",margin:"0 auto",padding:"0 24px",maxWidth:972},"@media (max-width: 1024px)":{container:{maxWidth:680}},"@media (max-width: 480px)":{container:{padding:"0 8px"}},header:{display:"flex",alignItems:"center",justifyContent:"space-between",height:48,padding:8,marginBottom:16,color:e.primary.text,backgroundColor:e.primary.main},home:{color:e.primary.text},footer:{display:"flex",justifyContent:"space-between",position:"fixed",bottom:0,width:"100%",marginTop:24,color:e.secondary.text,backgroundColor:e.secondary.main,fontSize:12,padding:"6px 12px","& a":{color:e.background.main}}}})),N=(t.a=function(e){var t=e.children,n=Object(o.c)(),a=C({theme:n});return r.a.createElement("div",{className:a.root},r.a.createElement("header",{className:a.header},r.a.createElement(E,null),r.a.createElement(R,null),r.a.createElement(y.b,{to:"/",className:a.home},r.a.createElement(j,null))),r.a.createElement("div",{className:a.container},t),r.a.createElement("footer",{className:a.footer},r.a.createElement(N,null),r.a.createElement(A,null)))},function(){return r.a.createElement("div",null,"Powered by ",r.a.createElement("a",{href:"https://www.weatherapi.com/",title:"Free Weather API"},"WeatherAPI.com"))}),A=function(){var e=Object(k.a)().t;return r.a.createElement("div",null,e("version"),": ","0.1.6")},R=Object(l.a)((function(){var e=Object(c.b)();return r.a.createElement(r.a.Fragment,null,e.offline&&r.a.createElement(O,null))}))},80:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(15),i=n(83),c=n(29),l=n(81),u=n(30),s=function(e){var t=Object.assign({},e);return r.a.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24"},t),r.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),r.a.createElement("path",{fill:"currentColor",d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}))},d=n(62),m=n(63),p=n(64),h=n(59),v=n(31),b=Object(o.a)((function(e){return{root:{margin:8,padding:"16px",borderRadius:"4px",width:"calc(33% - 14px)",boxShadow:e.shadow.paper,backgroundColor:e.background.paper},"@media (max-width: 1024px)":{root:{width:"calc(50% - 16px)"}},"@media (max-width: 480px)":{root:{width:"100%"}},actions:{display:"flex",justifyContent:"flex-end",padding:"24px 0px 8px 8px"},favorite:{color:e.action.favorite},row:{display:"flex",justifyContent:"space-between",padding:"8px 0",alignItems:"center"},date:{fontSize:10,color:e.text.secondary},temperature:{fontSize:24},negative:{color:e.temperature.cold},positive:{color:e.temperature.warm}}})),f=Object(l.a)((function(e){var t=e.city,n=e.inFavorite,a=e.inTopCity,i=Object(o.c)(),l=b({theme:i}),f=Object(c.b)(),x=null===t||void 0===t?void 0:t.isFavorite(),g=null===t||void 0===t?void 0:t.currentWeather;return r.a.createElement("div",{className:l.root},r.a.createElement(u.b,{to:t?"/city/".concat(t.country,"/").concat(t.region,"/").concat(t.name):"/"},r.a.createElement("div",{className:l.row},r.a.createElement("div",null,r.a.createElement("h3",null,null===t||void 0===t?void 0:t.name),g&&r.a.createElement("div",{className:l.date},g.lastUpdate.toLocaleString())),g&&r.a.createElement("div",null,r.a.createElement("div",{className:Object(h.a)(l.temperature,g.temp_c>0?l.positive:l.negative)},g.temp_c>0&&"+",g.temp_c,"\xb0")),!g&&r.a.createElement(v.a,null)),r.a.createElement("div",{className:l.actions},n&&x&&r.a.createElement(d.a,{onClick:function(e){e.preventDefault(),t&&(f.removeFromFavorite(t),f.addToTopCity(t))},className:l.favorite},r.a.createElement(m.a,null)),a&&!x&&r.a.createElement(d.a,{onClick:function(e){e.preventDefault(),t&&f.addToFavorite(t)},className:l.favorite},r.a.createElement(p.a,null)),a&&!x&&r.a.createElement(d.a,{onClick:function(e){e.preventDefault(),t&&f.removeFromTopCity(t)}},r.a.createElement(s,null)))))})),x=n(10),g=n(3),E=n(13),w=n(7),y=(n(8),n(69));function j(e,t){var n=Object.create(null);return e&&a.Children.map(e,(function(e){return e})).forEach((function(e){n[e.key]=function(e){return t&&Object(a.isValidElement)(e)?t(e):e}(e)})),n}function O(e,t,n){return null!=n[t]?n[t]:e.props[t]}function k(e,t,n){var r=j(e.children),o=function(e,t){function n(n){return n in t?t[n]:e[n]}e=e||{},t=t||{};var a,r=Object.create(null),o=[];for(var i in e)i in t?o.length&&(r[i]=o,o=[]):o.push(i);var c={};for(var l in t){if(r[l])for(a=0;a<r[l].length;a++){var u=r[l][a];c[r[l][a]]=n(u)}c[l]=n(l)}for(a=0;a<o.length;a++)c[o[a]]=n(o[a]);return c}(t,r);return Object.keys(o).forEach((function(i){var c=o[i];if(Object(a.isValidElement)(c)){var l=i in t,u=i in r,s=t[i],d=Object(a.isValidElement)(s)&&!s.props.in;!u||l&&!d?u||!l||d?u&&l&&Object(a.isValidElement)(s)&&(o[i]=Object(a.cloneElement)(c,{onExited:n.bind(null,c),in:s.props.in,exit:O(c,"exit",e),enter:O(c,"enter",e)})):o[i]=Object(a.cloneElement)(c,{in:!1}):o[i]=Object(a.cloneElement)(c,{onExited:n.bind(null,c),in:!0,exit:O(c,"exit",e),enter:O(c,"enter",e)})}})),o}var C=Object.values||function(e){return Object.keys(e).map((function(t){return e[t]}))},N=function(e){function t(t,n){var a,r=(a=e.call(this,t,n)||this).handleExited.bind(Object(E.a)(a));return a.state={contextValue:{isMounting:!0},handleExited:r,firstRender:!0},a}Object(w.a)(t,e);var n=t.prototype;return n.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},n.componentWillUnmount=function(){this.mounted=!1},t.getDerivedStateFromProps=function(e,t){var n,r,o=t.children,i=t.handleExited;return{children:t.firstRender?(n=e,r=i,j(n.children,(function(e){return Object(a.cloneElement)(e,{onExited:r.bind(null,e),in:!0,appear:O(e,"appear",n),enter:O(e,"enter",n),exit:O(e,"exit",n)})}))):k(e,o,i),firstRender:!1}},n.handleExited=function(e,t){var n=j(this.props.children);e.key in n||(e.props.onExited&&e.props.onExited(t),this.mounted&&this.setState((function(t){var n=Object(g.a)({},t.children);return delete n[e.key],{children:n}})))},n.render=function(){var e=this.props,t=e.component,n=e.childFactory,a=Object(x.a)(e,["component","childFactory"]),o=this.state.contextValue,i=C(this.state.children).map(n);return delete a.appear,delete a.enter,delete a.exit,null===t?r.a.createElement(y.a.Provider,{value:o},i):r.a.createElement(y.a.Provider,{value:o},r.a.createElement(t,a,i))},t}(r.a.Component);N.propTypes={},N.defaultProps={component:"div",childFactory:function(e){return e}};var A=N,R=n(82),z=n(60),I=Object(o.a)((function(e){return{root:{},title:{textAlign:"center",backgroundColor:e.primary.light,padding:"8px 0",borderRadius:4},cities:{display:"flex",flexWrap:"wrap"}}})),M=Object(l.a)((function(){var e,t=Object(o.c)(),n=I({theme:t}),a=Object(z.a)({theme:t}),l=Object(i.a)().t,u=Object(c.b)();return r.a.createElement("div",{className:n.root},r.a.createElement("h2",{className:n.title},l("top_city_list_title")),r.a.createElement(A,{className:n.cities},null===(e=u.topCities)||void 0===e?void 0:e.map((function(e){return r.a.createElement(R.a,{key:e.name,timeout:500,classNames:a},r.a.createElement(f,{key:e.name,city:e,inTopCity:!0}))}))))})),F=Object(o.a)((function(e){return{root:{},title:{textAlign:"center",backgroundColor:e.primary.light,padding:"8px 0",borderRadius:4},cities:{display:"flex",flexWrap:"wrap"}}})),L=Object(l.a)((function(){var e,t=Object(o.c)(),n=F({theme:t}),a=Object(z.a)({theme:t}),l=Object(i.a)().t,u=Object(c.b)();return r.a.createElement("div",{className:n.root},r.a.createElement(R.a,{in:u.favoriteCities.length>0,unmountOnExit:!0,timeout:500,classNames:a},r.a.createElement("h2",{className:n.title},l("favorite_city_list_title"))),r.a.createElement(A,{className:n.cities},null===(e=u.favoriteCities)||void 0===e?void 0:e.map((function(e){return r.a.createElement(R.a,{key:e.name,timeout:500,classNames:a},r.a.createElement(f,{city:e,inFavorite:!0}))}))))})),H=n(65),S=n(67),T=Object(o.a)((function(e){return{root:{display:"inline-flex",textAlign:"center",flex:"0 0 auto",padding:8,borderRadius:8,color:e.icon.main,border:"1px solid ".concat(e.border.main),margin:"0 4px",cursor:"pointer",transition:"background-color 300ms ease",backgroundColor:e.background.paper,"&:hover":{backgroundColor:"".concat(e.primary.main,"44"),"@media (hover: none)":{backgroundColor:"transparent"}}}}})),W=function(e){var t=e.children,n=Object(S.a)(e,["children"]),a=Object(o.c)(),i=T({theme:a});return r.a.createElement(u.b,n,r.a.createElement("div",{className:Object(h.a)(i.root)},t))};t.default=function(){var e=Object(c.b)(),t=Object(i.a)().t;return r.a.useEffect((function(){e.init()})),r.a.createElement(H.a,null,r.a.createElement("h1",null,t("home")),r.a.createElement(W,{to:"/currentLocation"},t("showCurrentLocationWeather")),r.a.createElement(L,null),r.a.createElement(M,null))}}}]);
//# sourceMappingURL=6.fc389a96.chunk.js.map