(this["webpackJsonpacme-cx"]=this["webpackJsonpacme-cx"]||[]).push([[0],{13:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(5),i=n.n(a),s=n(2),o=n.n(s),l=n(3),d=n(6),u={apiKey:"09110e603c1d5c272f94f64305c09436"};function j(){return p.apply(this,arguments)}function p(){return(p=Object(l.a)(o.a.mark((function e(){var t,n,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=u.apiKey,e.next=3,fetch("https://api.openweathermap.org/data/2.5/forecast?id=5037649&appid=".concat(t,"&units=imperial"));case 3:return n=e.sent,e.next=6,n.json();case 6:return c=e.sent,e.abrupt("return",c);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var h=n(0),m=function(e){var t=e.forecast;return Object(h.jsxs)("table",{children:[Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{children:"Date/Time"}),Object(h.jsx)("th",{children:"Temp"}),Object(h.jsx)("th",{children:"Weather"}),Object(h.jsx)("th",{children:"Contact Type"})]}),t.hasOwnProperty(0)&&t.map((function(e){return Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:e.dateTime}),Object(h.jsx)("td",{children:e.temp}),Object(h.jsx)("td",{children:e.weather}),Object(h.jsx)("td",{children:e.contactType})]})}))]})},b=function(){var e,t=Object(c.useState)({}),n=Object(d.a)(t,2),r=n[0],a=n[1];Object(c.useEffect)((function(){function e(){return(e=Object(l.a)(o.a.mark((function e(){var t,n,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j();case 2:n=e.sent,c=null===(t=n.list)||void 0===t?void 0:t.map((function(e){var t,n,c,r;return{dateTime:null===e||void 0===e?void 0:e.dt_txt,temp:parseInt(null===e||void 0===e||null===(t=e.main)||void 0===t?void 0:t.temp),weather:null===e||void 0===e||null===(n=e.weather[0])||void 0===n?void 0:n.main,contactType:i(parseInt(null===e||void 0===e||null===(c=e.main)||void 0===c?void 0:c.temp),null===e||void 0===e||null===(r=e.weather[0])||void 0===r?void 0:r.main)}})),a(c);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var i=function(e,t){return e>75&&"Clear"===t?"text message":e>55&&e<75?"email":e<55&&"Rain"===t?"phone call":"No recommendation"};return Object(h.jsxs)(h.Fragment,{children:["Forecast for ",null===r||void 0===r||null===(e=r.city)||void 0===e?void 0:e.name,r&&Object(h.jsx)(m,{forecast:r})]})},v=function(){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("div",{className:"header",children:[Object(h.jsx)("h1",{className:"app-title",children:"ACME CX"}),Object(h.jsx)("p",{className:"app-subtitle",children:Object(h.jsx)("em",{children:"Forecasting Better Connections"})})]}),Object(h.jsx)(b,{})]})},f=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,14)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),r(e),a(e),i(e)}))};i.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(v,{})}),document.getElementById("root")),f()}},[[13,1,2]]]);
//# sourceMappingURL=main.78339c8e.chunk.js.map