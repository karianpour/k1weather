(this.webpackJsonpk1weather=this.webpackJsonpk1weather||[]).push([[0],{17:function(e,t,n){"use strict";n.d(t,"b",(function(){return a}));var r=n(18);n.d(t,"a",(function(){return r.b})),n.d(t,"c",(function(){return r.c}));var a={colorPrimary:"green",colorSecondary:"red",textPrimary:"#ccc",textSecondary:"#eee",background:"#eee"}},26:function(e,t,n){"use strict";n.d(t,"a",(function(){return g})),n.d(t,"b",(function(){return k}));var r=n(4),a=n.n(r),o=n(13),c=n(25),i=n(0),u=n.n(i),s=n(55),d=n(2),l=n(33),p=n(34),f=function(){function e(){Object(l.a)(this,e),this.WeatherAPIKey=void 0,this.WeatherAPIKey="2922a44e877441d5b6e114043203108"}return Object(p.a)(e,[{key:"fetchTopCities",value:function(){var e=Object(o.a)(a.a.mark((function e(){var t,n,r,o;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://public.opendatasoft.com/api/records/1.0/search/?dataset=worldcitiespop&q=&rows=15&sort=population&facet=country",e.prev=1,e.next=4,fetch("https://public.opendatasoft.com/api/records/1.0/search/?dataset=worldcitiespop&q=&rows=15&sort=population&facet=country");case 4:return n=e.sent,e.next=7,n.json();case 7:return r=e.sent,o=null===r||void 0===r||null===(t=r.records)||void 0===t?void 0:t.map((function(e){var t,n,r,a;return{name:(null===e||void 0===e||null===(t=e.fields)||void 0===t?void 0:t.accentcity)||(null===e||void 0===e||null===(n=e.fields)||void 0===n?void 0:n.name),country:null===e||void 0===e||null===(r=e.fields)||void 0===r?void 0:r.country,region:null===e||void 0===e||null===(a=e.fields)||void 0===a?void 0:a.region}})).sort((function(e,t){return e.name.localeCompare(t.name)})),e.abrupt("return",o);case 12:e.prev=12,e.t0=e.catch(1),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(){return e.apply(this,arguments)}}()},{key:"fetchWeatherForCity",value:function(){var e=Object(o.a)(a.a.mark((function e(t){var n,r,o,c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://api.weatherapi.com/v1/current.json?key=".concat(this.WeatherAPIKey,"&q=").concat(t),e.prev=1,e.next=4,fetch(n);case 4:return r=e.sent,e.next=7,r.json();case 7:return o=e.sent,c={city:{name:o.location.name,country:o.location.country,region:o.location.region},current:{last_updated_epoch:o.current.last_updated_epoch,last_updated:o.current.last_updated,temp_c:o.current.temp_c,temp_f:o.current.temp_f,is_day:o.current.is_day,condition:{text:o.current.condition.text,icon:o.current.condition.icon,code:o.current.condition.code},wind_mph:o.current.wind_mph,wind_kph:o.current.wind_kph,wind_degree:o.current.wind_degree,wind_dir:o.current.wind_dir,pressure_mb:o.current.pressure_mb,pressure_in:o.current.pressure_in,precip_mm:o.current.precip_mm,precip_in:o.current.precip_in,humidity:o.current.humidity,cloud:o.current.cloud,feelslike_c:o.current.feelslike_c,feelslike_f:o.current.feelslike_f,vis_km:o.current.vis_km,vis_miles:o.current.vis_miles,uv:o.current.uv,gust_mph:o.current.gust_mph,gust_kph:o.current.gust_kph,updated_at:new Date}},e.abrupt("return",c);case 12:e.prev=12,e.t0=e.catch(1),console.log(e.t0);case 15:case"end":return e.stop()}}),e,this,[[1,12]])})));return function(t){return e.apply(this,arguments)}}()},{key:"fetchWeatherForLocation",value:function(){var e=Object(o.a)(a.a.mark((function e(t,n){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.weatherapi.com/v1/current.json?key=".concat(this.WeatherAPIKey,"&query=").concat(t,",").concat(n),e.abrupt("return");case 2:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"fetchWeatherForMyIP",value:function(){var e=Object(o.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.weatherapi.com/v1/current.json?key=".concat(this.WeatherAPIKey,"&query=fetch:ip"),e.abrupt("return");case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"fetchLookup",value:function(){var e=Object(o.a)(a.a.mark((function e(t){var n,r,o,c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://api.weatherapi.com/v1/search.json?key=".concat(this.WeatherAPIKey,"&q=").concat(t),e.prev=1,e.next=4,fetch(n);case 4:return r=e.sent,e.next=7,r.json();case 7:return o=e.sent,c=o.map((function(e){return{name:e.name,region:e.region,country:e.country}})),e.abrupt("return",c);case 12:e.prev=12,e.t0=e.catch(1),console.log(e.t0);case 15:case"end":return e.stop()}}),e,this,[[1,12]])})));return function(t){return e.apply(this,arguments)}}()}]),e}(),m=d.d.model("WeatherState",{last_updated_epoch:d.d.number,last_updated:d.d.string,temp_c:d.d.number,temp_f:d.d.number,is_day:d.d.number,condition:d.d.model({text:d.d.string,icon:d.d.string,code:d.d.number}),wind_mph:d.d.number,wind_kph:d.d.number,wind_degree:d.d.number,wind_dir:d.d.string,pressure_mb:d.d.number,pressure_in:d.d.number,precip_mm:d.d.number,precip_in:d.d.number,humidity:d.d.number,cloud:d.d.number,feelslike_c:d.d.number,feelslike_f:d.d.number,vis_km:d.d.number,vis_miles:d.d.number,uv:d.d.number,gust_mph:d.d.number,gust_kph:d.d.number,updated_at:d.d.Date}).actions((function(e){return{}})),h=d.d.model("CityState",{id:d.d.identifier,name:d.d.string,country:d.d.string,region:d.d.string,currentWeather:d.d.maybeNull(m)}).views((function(e){return{isUpdated:function(t){var n;return t.getTime()-((null===(n=e.currentWeather)||void 0===n?void 0:n.updated_at.getTime())||0)<6e5},isFavorite:function(){return-1!==Object(d.b)(e,y).favoriteCities.findIndex((function(t){return t===e}))}}})).actions((function(e){return{setCurrentWeather:function(t){e.currentWeather=m.create(t.current)}}})),v=d.d.model("LookupResultState",{name:d.d.string,country:d.d.string,region:d.d.string}),y=d.d.model("AppState",{topCities:d.d.array(d.d.reference(h)),favoriteCities:d.d.array(d.d.reference(h)),cities:d.d.map(h),lookup:d.d.optional(d.d.string,""),lookupResult:d.d.array(v)}).views((function(e){return{findCity:function(t,n,r){return e.cities.get("".concat(t,"/").concat(n,"/").concat(r))}}})).actions((function(e){return{addToTopCity:function(t){var n=e.topCities.findIndex((function(e){return e.name.localeCompare(t.name)>0}));-1===n?e.topCities.push(t):e.topCities.splice(n,0,t)},removeFromTopCity:function(t){var n=e.topCities.findIndex((function(e){return e===t}));-1!==n&&e.topCities.splice(n,1)}}})).actions((function(e){return{setTopCities:function(t){e.topCities.clear(),t.forEach((function(t){var n=e.cities.put(h.create({id:"".concat(t.country,"/").concat(t.region,"/").concat(t.name),name:t.name,country:t.country,region:t.region}));n.isFavorite()||e.topCities.push(n)}))},addToFavorite:function(t){var n=e.favoriteCities.findIndex((function(e){return e.name.localeCompare(t.name)>0}));-1===n?e.favoriteCities.push(t):e.favoriteCities.splice(n,0,t),e.removeFromTopCity(t)},removeFromFavorite:function(t){var n=e.favoriteCities.findIndex((function(e){return e===t}));-1!==n&&e.favoriteCities.splice(n,1)},addCityWeather:function(t){return e.cities.put(h.create({id:"".concat(t.city.country,"/").concat(t.city.region,"/").concat(t.city.name),name:t.city.name,country:t.city.country,region:t.city.region,currentWeather:m.create(t.current)}))},removeCityWeather:function(t){e.cities.delete(t.id)},setLookupResult:function(t){var n;e.lookupResult.clear(),t&&(n=e.lookupResult).push.apply(n,Object(c.a)(t)),console.log("lookup result set")}}})).actions((function(e){return{setLookup:function(t){return Object(o.a)(a.a.mark((function n(){var r;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(e.lookup=t,console.log("looking up"),!t){n.next=9;break}return n.next=5,Object(d.a)(e).api.fetchLookup(t);case 5:r=n.sent,e.lookup===t?(e.setLookupResult(r),console.log("same qeury, setting")):console.log("not same qeury, ignoring"),n.next=11;break;case 9:console.log("empty query , make it empty"),e.setLookupResult(void 0);case 11:case"end":return n.stop()}}),n)})))()},updateCurrentWeather:function(){return Object(o.a)(a.a.mark((function t(){var n,r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=Object(d.a)(e).api,r=new Date,t.next=4,Promise.all(Object(c.a)(e.cities.values()).map(function(){var t=Object(o.a)(a.a.mark((function t(o){var c,i;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!o.isUpdated(r)){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,n.fetchWeatherForCity(o.name);case 4:(c=t.sent)&&("".concat(c.city.country,"/").concat(c.city.region,"/").concat(c.city.name)===o.id?o.setCurrentWeather(c):(i=e.addCityWeather(c),e.removeFromTopCity(o),e.removeFromFavorite(o),e.removeCityWeather(o),e.addToTopCity(i)));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()));case 4:case"end":return t.stop()}}),t)})))()}}})).actions((function(e){return{init:function(){return Object(o.a)(a.a.mark((function t(){var n,r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(null===(n=e.topCities)||void 0===n?void 0:n.length){t.next=5;break}return t.next=3,Object(d.a)(e).api.fetchTopCities();case 3:(r=t.sent)&&e.setTopCities(r);case 5:return t.next=7,e.updateCurrentWeather();case 7:case"end":return t.stop()}}),t)})))()},fetchCity:function(t){return Object(o.a)(a.a.mark((function n(){var r;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(d.a)(e).api.fetchWeatherForCity(t);case 2:(r=n.sent)&&e.addCityWeather(r);case 4:case"end":return n.stop()}}),n)})))()}}})),b=u.a.createContext(null),g=function(e){var t=e.children,n=Object(s.a)(_);return u.a.createElement(b.Provider,{value:n},t)},k=function(){var e=u.a.useContext(b);if(!e)throw new Error("useStore must be used within a StoreProvider.");return e};function _(){var e,t=localStorage.getItem("app-store"),n={api:new f};try{e=y.create(t?JSON.parse(t):{},n)}catch(r){console.error("could not restore, with the following error. fallback to empty store."),console.error(r),e=y.create({},n)}return Object(d.c)(e,(function(e){localStorage.setItem("app-store",JSON.stringify(e))})),e}},37:function(e,t,n){e.exports=n(51)},51:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(31),c=n.n(o),i=n(27),u=n(5),s=n(17),d=n(26),l=Object(r.lazy)((function(){return n.e(5).then(n.bind(null,64))})),p=Object(r.lazy)((function(){return n.e(3).then(n.bind(null,66))})),f=Object(r.lazy)((function(){return n.e(4).then(n.bind(null,65))})),m=Object(s.a)((function(e){return{"@global":{html:{backgroundColor:e.background},body:{margin:0},"html *":{fontFamily:"Yekan Bakh"}}}})),h=function(){var e=Object(s.c)();return m({theme:e}),a.a.createElement(d.a,null,a.a.createElement(i.a,null,a.a.createElement(u.c,null,a.a.createElement(u.a,{path:"/city/:country/:region/:name"},a.a.createElement(f,null)),a.a.createElement(u.a,{path:"/"},a.a.createElement(p,null)),a.a.createElement(u.a,{path:"*"},a.a.createElement(l,null)))))},v=function(){return a.a.createElement("div",null,"Loading...")};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var y=n(18),b=n(24),g=n(54),k={en:{translation:{ttest:"TWeathr Test"}},de:{translation:{ttest:"Das wetter"}}};b.a.use(g.e).init({resources:k,lng:"en",interpolation:{escapeValue:!1}});b.a;c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(y.a,{theme:s.b},a.a.createElement(r.Suspense,{fallback:a.a.createElement(v,null)},a.a.createElement(h,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[37,1,2]]]);
//# sourceMappingURL=main.ed415a65.chunk.js.map