(this["webpackJsonpacme-cx"]=this["webpackJsonpacme-cx"]||[]).push([[0],{16:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),c=n(7),s=n.n(c),i=n(3),o=n.n(i),u=n(4),d=n(5),l={apiKey:"ecad512d7413eacd976a3932b8c18e10"};function p(){return j.apply(this,arguments)}function j(){return(j=Object(u.a)(o.a.mark((function e(){var t,n,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=l.apiKey,e.next=3,fetch("https://api.openweathermap.org/data/2.5/forecast?id=5037649&appid=".concat(t,"&units=imperial"));case 3:return n=e.sent,e.next=6,n.json();case 6:return r=e.sent,e.abrupt("return",r);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var b=n(2),h=n(8),O=n(0),m=function(e){var t=e.forecast,n=Object(r.useState)(),a=Object(d.a)(n,2),c=a[0],s=a[1];Object(r.useEffect)((function(){t&&s(t)}),[t]);var i=Object(r.useMemo)((function(){return c}),[c]),o=Object(r.useMemo)((function(){return[{Header:"Date/Time",accessor:"dateTime"},{Header:"Temp",accessor:"temp"},{Header:"Weather",accessor:"weather"},{Header:"Contact Type",accessor:"contactType"}]}),[]),u=Object(h.useTable)({columns:o,data:i}),l=u.getTableProps,p=u.getTableBodyProps,j=u.headerGroups,m=u.rows,f=u.prepareRow;return Object(O.jsxs)("table",Object(b.a)(Object(b.a)({},l()),{},{children:[Object(O.jsx)("thead",{children:j.map((function(e){return Object(O.jsx)("tr",Object(b.a)(Object(b.a)({},e.getHeaderGroupProps()),{},{children:e.headers.map((function(e){return Object(O.jsx)("th",Object(b.a)(Object(b.a)({},e.getHeaderProps()),{},{children:e.render("Header")}))}))}))}))}),Object(O.jsx)("tbody",Object(b.a)(Object(b.a)({},p()),{},{children:m.map((function(e){return f(e),Object(O.jsx)("tr",Object(b.a)(Object(b.a)({},e.getRowProps()),{},{children:e.cells.map((function(e){return Object(O.jsx)("td",Object(b.a)(Object(b.a)({},e.getCellProps()),{},{children:e.render("Cell")}))}))}))}))}))]}))},f=function(){var e,t=Object(r.useState)({}),n=Object(d.a)(t,2),a=n[0],c=n[1];Object(r.useEffect)((function(){function e(){return(e=Object(u.a)(o.a.mark((function e(){var t,n,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p();case 2:n=e.sent,r=null===(t=n.list)||void 0===t?void 0:t.map((function(e){var t,n,r,a;return{dateTime:null===e||void 0===e?void 0:e.dt_txt,temp:parseInt(null===e||void 0===e||null===(t=e.main)||void 0===t?void 0:t.temp),weather:null===e||void 0===e||null===(n=e.weather[0])||void 0===n?void 0:n.main,contactType:s(parseInt(null===e||void 0===e||null===(r=e.main)||void 0===r?void 0:r.temp),null===e||void 0===e||null===(a=e.weather[0])||void 0===a?void 0:a.main)}})),c(r);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var s=function(e,t){return e>75&&"Clear"===t?"text message":e>55&&e<75?"email":e<55&&"Rain"===t?"phone call":"No recommendation"};return Object(O.jsxs)(O.Fragment,{children:["Forecast for ",null===a||void 0===a||null===(e=a.city)||void 0===e?void 0:e.name,a&&Object(O.jsx)(m,{forecast:a})]})},v=function(){return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)("div",{className:"header",children:[Object(O.jsx)("h1",{className:"app-title",children:"ACME CX"}),Object(O.jsx)("p",{className:"app-subtitle",children:Object(O.jsx)("em",{children:"Forecasting Better Connections"})})]}),Object(O.jsx)(f,{})]})},x=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),r(e),a(e),c(e),s(e)}))};s.a.render(Object(O.jsx)(a.a.StrictMode,{children:Object(O.jsx)(v,{})}),document.getElementById("root")),x()}},[[16,1,2]]]);
//# sourceMappingURL=main.6c0f000e.chunk.js.map