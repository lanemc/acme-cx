(this["webpackJsonpacme-cx"]=this["webpackJsonpacme-cx"]||[]).push([[0],{13:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(5),i=n.n(a),s=n(2),o=n.n(s),l=n(3),d=n(6),u={apiKey:"09110e603c1d5c272f94f64305c09436"};function p(){return j.apply(this,arguments)}function j(){return(j=Object(l.a)(o.a.mark((function e(){var t,n,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=u.apiKey,e.next=3,fetch("https://api.openweathermap.org/data/2.5/forecast?id=5037649&appid=".concat(t,"&units=imperial"));case 3:return n=e.sent,e.next=6,n.json();case 6:return c=e.sent,e.abrupt("return",c);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var h=n(0),b=function(e){var t=e.forecast;return Object(h.jsxs)("table",{children:[Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{children:"Date/Time"}),Object(h.jsx)("th",{children:"Temp"}),Object(h.jsx)("th",{children:"Weather"}),Object(h.jsx)("th",{children:"Contact Type"})]}),t.hasOwnProperty(0)&&t.map((function(e){return Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:e.dateTime}),Object(h.jsx)("td",{children:e.temp}),Object(h.jsx)("td",{children:e.weather}),Object(h.jsx)("td",{children:e.contactType})]})}))]})},m=function(){var e=Object(c.useState)(),t=Object(d.a)(e,2),n=t[0],r=t[1];Object(c.useEffect)((function(){function e(){return(e=Object(l.a)(o.a.mark((function e(){var t,c,i;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p();case 3:c=e.sent,i=null===(t=c.list)||void 0===t?void 0:t.map((function(e){var t,n,c,r;return{dateTime:null===e||void 0===e?void 0:e.dt_txt,temp:parseInt(null===e||void 0===e||null===(t=e.main)||void 0===t?void 0:t.temp),weather:null===e||void 0===e||null===(n=e.weather[0])||void 0===n?void 0:n.main,contactType:a(parseInt(null===e||void 0===e||null===(c=e.main)||void 0===c?void 0:c.temp),null===e||void 0===e||null===(r=e.weather[0])||void 0===r?void 0:r.main)}})),r(i),console.log("forecast",n),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[n]);var a=function(e,t){return e>75&&"Clear"===t?"text message":e>55&&e<75?"email":e<55||"Rain"===t?"phone call":"No recommendation"};return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("h3",{children:"Forecast for Minneapolis"}),n&&Object(h.jsx)(b,{forecast:n})]})},x=function(){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("div",{className:"header",children:[Object(h.jsx)("h1",{className:"app-title",children:"ACME CX"}),Object(h.jsx)("p",{className:"app-subtitle",children:Object(h.jsx)("em",{children:"Forecasting Better Connections"})})]}),Object(h.jsx)(m,{})]})};i.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(x,{})}),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.40103041.chunk.js.map