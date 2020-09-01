(this.webpackJsonpk1weather=this.webpackJsonpk1weather||[]).push([[1],{17:function(e,t,n){"use strict";n.d(t,"b",(function(){return a}));var r=n(18);n.d(t,"a",(function(){return r.b})),n.d(t,"c",(function(){return r.c}));var a={background:{main:"#fafafa"},primary:{main:"#3d5afe",light:"#8187ff",dark:"#0031ca",text:"#fff"},secondary:{main:"#455a64",light:"#718792",dark:"#1c313a",text:"#fff"},action:{active:"#333333",disabled:"#999999"},border:{main:"#999999"},icon:{main:"#333333"},text:{primary:"#333333",secondary:"#666666"},temperature:{cold:"blue",warm:"red"},mobileBreakPoint:480,tabletBreakPoint:1024}},27:function(e,t,n){"use strict";n.d(t,"a",(function(){return k})),n.d(t,"b",(function(){return _}));var r=n(4),a=n.n(r),i=n(13),o=n(26),c=n(0),u=n.n(c),s=n(57),d=n(2),l=n(35),p=n(36),m=function(){function e(){Object(l.a)(this,e),this.WeatherAPIKey=void 0,this.WeatherAPIKey="2922a44e877441d5b6e114043203108"}return Object(p.a)(e,[{key:"fetchTopCities",value:function(){var e=Object(i.a)(a.a.mark((function e(){var t,n,r,i;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://public.opendatasoft.com/api/records/1.0/search/?dataset=worldcitiespop&q=&rows=15&sort=population&facet=country",e.prev=1,e.next=4,fetch("https://public.opendatasoft.com/api/records/1.0/search/?dataset=worldcitiespop&q=&rows=15&sort=population&facet=country");case 4:return n=e.sent,e.next=7,n.json();case 7:return r=e.sent,i=null===r||void 0===r||null===(t=r.records)||void 0===t?void 0:t.map((function(e){var t,n,r,a;return{name:(null===e||void 0===e||null===(t=e.fields)||void 0===t?void 0:t.accentcity)||(null===e||void 0===e||null===(n=e.fields)||void 0===n?void 0:n.name),country:null===e||void 0===e||null===(r=e.fields)||void 0===r?void 0:r.country,region:null===e||void 0===e||null===(a=e.fields)||void 0===a?void 0:a.region}})).sort((function(e,t){return e.name.localeCompare(t.name)})),e.abrupt("return",i);case 12:e.prev=12,e.t0=e.catch(1),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(){return e.apply(this,arguments)}}()},{key:"fetchWeatherForCity",value:function(){var e=Object(i.a)(a.a.mark((function e(t){var n,r,i,o;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://api.weatherapi.com/v1/current.json?key=".concat(this.WeatherAPIKey,"&q=").concat(t),e.prev=1,e.next=4,fetch(n);case 4:return r=e.sent,e.next=7,r.json();case 7:return i=e.sent,o={city:{name:i.location.name,country:i.location.country,region:i.location.region},current:{last_updated_epoch:i.current.last_updated_epoch,last_updated:i.current.last_updated,temp_c:i.current.temp_c,temp_f:i.current.temp_f,is_day:i.current.is_day,condition:{text:i.current.condition.text,icon:i.current.condition.icon,code:i.current.condition.code},wind_mph:i.current.wind_mph,wind_kph:i.current.wind_kph,wind_degree:i.current.wind_degree,wind_dir:i.current.wind_dir,pressure_mb:i.current.pressure_mb,pressure_in:i.current.pressure_in,precip_mm:i.current.precip_mm,precip_in:i.current.precip_in,humidity:i.current.humidity,cloud:i.current.cloud,feelslike_c:i.current.feelslike_c,feelslike_f:i.current.feelslike_f,vis_km:i.current.vis_km,vis_miles:i.current.vis_miles,uv:i.current.uv,gust_mph:i.current.gust_mph,gust_kph:i.current.gust_kph,updated_at:new Date}},e.abrupt("return",o);case 12:e.prev=12,e.t0=e.catch(1),console.log(e.t0);case 15:case"end":return e.stop()}}),e,this,[[1,12]])})));return function(t){return e.apply(this,arguments)}}()},{key:"fetchWeatherForLocation",value:function(){var e=Object(i.a)(a.a.mark((function e(t,n){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return");case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"fetchWeatherForMyIP",value:function(){var e=Object(i.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return");case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"fetchLookup",value:function(){var e=Object(i.a)(a.a.mark((function e(t){var n,r,i,o;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://api.weatherapi.com/v1/search.json?key=".concat(this.WeatherAPIKey,"&q=").concat(t),e.prev=1,e.next=4,fetch(n);case 4:return r=e.sent,e.next=7,r.json();case 7:return i=e.sent,o=i.map((function(e){return{name:e.name,region:e.region,country:e.country}})),e.abrupt("return",o);case 12:e.prev=12,e.t0=e.catch(1),console.log(e.t0);case 15:case"end":return e.stop()}}),e,this,[[1,12]])})));return function(t){return e.apply(this,arguments)}}()}]),e}(),f=d.d.model("WeatherState",{last_updated_epoch:d.d.number,last_updated:d.d.string,temp_c:d.d.number,temp_f:d.d.number,is_day:d.d.number,condition:d.d.model({text:d.d.string,icon:d.d.string,code:d.d.number}),wind_mph:d.d.number,wind_kph:d.d.number,wind_degree:d.d.number,wind_dir:d.d.string,pressure_mb:d.d.number,pressure_in:d.d.number,precip_mm:d.d.number,precip_in:d.d.number,humidity:d.d.number,cloud:d.d.number,feelslike_c:d.d.number,feelslike_f:d.d.number,vis_km:d.d.number,vis_miles:d.d.number,uv:d.d.number,gust_mph:d.d.number,gust_kph:d.d.number,updated_at:d.d.Date}).actions((function(e){return{}})),h=d.d.model("CityState",{id:d.d.identifier,name:d.d.string,country:d.d.string,region:d.d.string,note:d.d.optional(d.d.string,""),currentWeather:d.d.maybeNull(f)}).views((function(e){return{isUpdated:function(t){var n;return t.getTime()-((null===(n=e.currentWeather)||void 0===n?void 0:n.updated_at.getTime())||0)<6e5},isFavorite:function(){return-1!==Object(d.b)(e,y).favoriteCities.findIndex((function(t){return t===e}))}}})).actions((function(e){return{setCurrentWeather:function(t){e.currentWeather=f.create(t.current)},setNote:function(t){e.note=t}}})),v=d.d.model("LookupResultState",{name:d.d.string,country:d.d.string,region:d.d.string}),y=d.d.model("AppState",{topCities:d.d.array(d.d.reference(h)),favoriteCities:d.d.array(d.d.reference(h)),cities:d.d.map(h),lookup:d.d.optional(d.d.string,""),lookupResult:d.d.array(v),lookupActiveIndex:d.d.maybeNull(d.d.number)}).views((function(e){return{findCity:function(t,n,r){return e.cities.get("".concat(t,"/").concat(n,"/").concat(r))}}})).actions((function(e){return{addToTopCity:function(t){var n=e.topCities.findIndex((function(e){return e.name.localeCompare(t.name)>0}));-1===n?e.topCities.push(t):e.topCities.splice(n,0,t)},removeFromTopCity:function(t){var n=e.topCities.findIndex((function(e){return e===t}));-1!==n&&e.topCities.splice(n,1)}}})).actions((function(e){return{setTopCities:function(t){e.topCities.clear(),t.forEach((function(t){var n=e.cities.put(h.create({id:"".concat(t.country,"/").concat(t.region,"/").concat(t.name),name:t.name,country:t.country,region:t.region}));n.isFavorite()||e.topCities.push(n)}))},addToFavorite:function(t){var n=e.favoriteCities.findIndex((function(e){return e.name.localeCompare(t.name)>0}));-1===n?e.favoriteCities.push(t):e.favoriteCities.splice(n,0,t),e.removeFromTopCity(t)},removeFromFavorite:function(t){var n=e.favoriteCities.findIndex((function(e){return e===t}));-1!==n&&e.favoriteCities.splice(n,1)},addCityWeather:function(t){return e.cities.put(h.create({id:"".concat(t.city.country,"/").concat(t.city.region,"/").concat(t.city.name),name:t.city.name,country:t.city.country,region:t.city.region,currentWeather:f.create(t.current)}))},removeCityWeather:function(t){e.cities.delete(t.id)},setLookupResult:function(t){var n;e.lookupResult.clear(),e.lookupActiveIndex=null,t&&(n=e.lookupResult).push.apply(n,Object(o.a)(t))},setLookupActiveIndex:function(t){e.lookupActiveIndex=t}}})).actions((function(e){return{setLookup:function(t){return Object(i.a)(a.a.mark((function n(){var r;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(e.lookup=t,!t){n.next=8;break}return n.next=4,Object(d.a)(e).api.fetchLookup(t);case 4:r=n.sent,e.lookup===t&&e.setLookupResult(r),n.next=9;break;case 8:e.setLookupResult(void 0);case 9:case"end":return n.stop()}}),n)})))()},updateCurrentWeather:function(){return Object(i.a)(a.a.mark((function t(){var n,r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=Object(d.a)(e).api,r=new Date,t.next=4,Promise.all(Object(o.a)(e.cities.values()).map(function(){var t=Object(i.a)(a.a.mark((function t(i){var o,c;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!i.isUpdated(r)){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,n.fetchWeatherForCity(i.name);case 4:(o=t.sent)&&("".concat(o.city.country,"/").concat(o.city.region,"/").concat(o.city.name)===i.id?i.setCurrentWeather(o):(c=e.addCityWeather(o),e.removeFromTopCity(i),e.removeFromFavorite(i),e.removeCityWeather(i),e.addToTopCity(c)));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()));case 4:case"end":return t.stop()}}),t)})))()}}})).actions((function(e){return{init:function(){return Object(i.a)(a.a.mark((function t(){var n,r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(null===(n=e.topCities)||void 0===n?void 0:n.length){t.next=5;break}return t.next=3,Object(d.a)(e).api.fetchTopCities();case 3:(r=t.sent)&&e.setTopCities(r);case 5:return t.next=7,e.updateCurrentWeather();case 7:case"end":return t.stop()}}),t)})))()},fetchCity:function(t){return Object(i.a)(a.a.mark((function n(){var r,i;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(d.a)(e).api.fetchWeatherForCity(t);case 2:if(!(r=n.sent)){n.next=6;break}return i=e.addCityWeather(r),n.abrupt("return",i);case 6:case"end":return n.stop()}}),n)})))()}}})),b=u.a.createContext(null),k=function(e){var t=e.children,n=Object(s.a)(g);return u.a.createElement(b.Provider,{value:n},t)},_=function(){var e=u.a.useContext(b);if(!e)throw new Error("useStore must be used within a StoreProvider.");return e};function g(){var e,t=localStorage.getItem("app-store"),n={api:new m};try{e=y.create(t?JSON.parse(t):{},n)}catch(r){console.error("could not restore, with the following error. fallback to empty store."),console.error(r),e=y.create({},n)}return Object(d.c)(e,(function(e){localStorage.setItem("app-store",JSON.stringify(e))})),e}},39:function(e,t,n){e.exports=n(53)},53:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),i=n(30),o=n.n(i),c=n(28),u=n(5),s=n(17),d=n(27),l=Object(r.lazy)((function(){return n.e(6).then(n.bind(null,75))})),p=Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(5)]).then(n.bind(null,76))})),m=Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(4)]).then(n.bind(null,79))})),f=Object(s.a)((function(e){return{"@global":{html:{backgroundColor:e.background,color:e.text.primary},body:{margin:0},a:{textDecoration:"none",color:e.text.primary},"html *":{fontFamily:"Yekan Bakh",boxSizing:"border-box",WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale",WebkitTextSizeAdjust:"100%"}}}})),h=function(){var e=Object(s.c)();return f({theme:e}),a.a.createElement(d.a,null,a.a.createElement(c.a,null,a.a.createElement(u.c,null,a.a.createElement(u.a,{path:"/city/:country/:region/:name"},a.a.createElement(m,null)),a.a.createElement(u.a,{path:"/"},a.a.createElement(p,null)),a.a.createElement(u.a,{path:"*"},a.a.createElement(l,null)))))},v=function(){return a.a.createElement("div",null,"Loading...")};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var y=n(18),b=n(25),k=n(56),_={en:{translation:{home:"Home",city_weather_details:"City Weather Details",top_city_list_title:"Top Cities",favorite_city_list_title:"Favorite Cities",feels_like:"Feels like",kph:"km/h",gust:"Gust",uv:"UV factor",humidity:"Humidity",vis:"Visibility",precip:"Precipitation",pressure:"Pressure",km:"Km",mm:"mm",mb:"hPa",note:"Note"}},de:{translation:{ttest:"Das wetter"}}};b.a.use(k.e).init({resources:_,lng:"en",interpolation:{escapeValue:!1}});b.a;o.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(y.a,{theme:s.b},a.a.createElement(r.Suspense,{fallback:a.a.createElement(v,null)},a.a.createElement(h,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[39,2,3]]]);
//# sourceMappingURL=main.0d738d59.chunk.js.map