(this["webpackJsonpreact_people-table-advanced"]=this["webpackJsonpreact_people-table-advanced"]||[]).push([[0],{39:function(e,t,c){},40:function(e,t,c){},41:function(e,t,c){"use strict";c.r(t);var n=c(26),s=(c(36),c(37),c(8)),r=c(3),a=c(10),l=c.n(a),i=c(1),j=function(e){var t=e.isActive;return l()("navbar-item",{"has-background-grey-lighter":t})},o=function(){return Object(i.jsx)("nav",{"data-cy":"nav",className:"navbar is-fixed-top has-shadow",role:"navigation","aria-label":"main navigation",children:Object(i.jsx)("div",{className:"container",children:Object(i.jsxs)("div",{className:"navbar-brand",children:[Object(i.jsx)(s.c,{to:"/",className:j,children:"Home"}),Object(i.jsx)(s.c,{to:"/people",className:j,children:"People"})]})})})},d=(c(39),function(){return Object(i.jsxs)("div",{"data-cy":"app",children:[Object(i.jsx)(o,{}),Object(i.jsx)("div",{className:"section",children:Object(i.jsx)("div",{className:"container",children:Object(i.jsx)(r.b,{})})})]})}),u=c(9),b=c(5),h=c(0),x=c.n(h),O=c(4),p=c(7),m="https://mate-academy.github.io/react_people-table/api/people.json";function f(e){return new Promise((function(t){return setTimeout(t,e)}))}function v(){return(v=Object(p.a)(Object(O.a)().mark((function e(){return Object(O.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",f(500).then((function(){return fetch(m)})).then((function(e){return e.json()})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var N=x.a.createContext({people:[],loading:!1,loadingError:!1,filterPeople:function(){return[]}}),g=function(e){return e.name="name",e.sex="sex",e.born="born",e.died="died",e}(g||{}),y=function(e){return e.desc="desc",e}(y||{}),w=function(e){var t=e.children,c=Object(h.useState)([]),n=Object(b.a)(c,2),s=n[0],r=n[1],a=Object(h.useState)(!1),l=Object(b.a)(a,2),j=l[0],o=l[1],d=Object(h.useState)(!1),x=Object(b.a)(d,2),O=x[0],p=x[1];Object(h.useEffect)((function(){o(!0),function(){return v.apply(this,arguments)}().then(r).catch((function(){return p(!0)})).finally((function(){return o(!1)}))}),[]);var m={people:s,loading:j,loadingError:O,filterPeople:function(e){var t=e.query,c=void 0===t?"":t,n=e.sex,r=void 0===n?"":n,a=e.centuries,l=void 0===a?[]:a,i=e.sort,j=void 0===i?"":i,o=e.order,d=void 0===o?"":o,b=Object(u.a)(s),h=c.trim().toLowerCase();return h&&(b=b.filter((function(e){var t=e.name,c=e.motherName,n=e.fatherName;return t.toLowerCase().includes(h)||(null===c||void 0===c?void 0:c.toLowerCase().includes(h))||(null===n||void 0===n?void 0:n.toLowerCase().includes(h))}))),r&&(b=b.filter((function(e){return e.sex===r}))),l.length>0&&(b=b.filter((function(e){var t,c=e.born,n=(t=c,String(t%100?Math.trunc(t/100)+1:Math.trunc(t/100)));return l.includes(n)}))),j&&b.sort((function(e,t){switch(j){case g.name:case g.sex:return e[j].localeCompare(t[j]);case g.born:case g.died:return e[j]-t[j];default:return 0}})),d===y.desc&&b.reverse(),b}};return Object(i.jsx)(N.Provider,{value:m,children:t})};var k=function(){return Object(i.jsx)("h1",{className:"title",children:"Home Page"})};function P(e,t){var c=new URLSearchParams(e.toString());return Object.entries(t).forEach((function(e){var t=Object(b.a)(e,2),n=t[0],s=t[1];null===s?c.delete(n):Array.isArray(s)?(c.delete(n),s.forEach((function(e){c.append(n,e)}))):c.set(n,s)})),c.toString()}var S=c(24),L=c(27),C=["children","params"],A=function(e){var t=e.children,c=e.params,n=Object(L.a)(e,C),r=Object(s.d)(),a=Object(b.a)(r,1)[0];return Object(i.jsx)(s.b,Object(S.a)(Object(S.a)({to:{search:P(a,c)}},n),{},{children:t}))},E=function(){var e=Object(s.d)(),t=Object(b.a)(e,2),c=t[0],n=t[1],r=c.get("query")||"",a=c.getAll("centuries")||[],j=c.get("sex")||null;function o(e){return a.includes(e)?a.filter((function(t){return t!==e})):[].concat(Object(u.a)(a),[e])}var d;return Object(i.jsxs)("nav",{className:"panel",children:[Object(i.jsx)("p",{className:"panel-heading",children:"Filters"}),Object(i.jsxs)("p",{className:"panel-tabs","data-cy":"SexFilter",children:[Object(i.jsx)(A,{params:{sex:null},className:l()({"is-active":!j}),children:"All"}),Object(i.jsx)(A,{params:{sex:"m"},className:l()({"is-active":"m"===j}),children:"Male"}),Object(i.jsx)(A,{params:{sex:"f"},className:l()({"is-active":"f"===j}),children:"Female"})]}),Object(i.jsx)("div",{className:"panel-block",children:Object(i.jsxs)("p",{className:"control has-icons-left",children:[Object(i.jsx)("input",{"data-cy":"NameFilter",type:"search",className:"input",value:r,onChange:function(e){!function(e){var t=P(c,e);n(t)}({query:e.target.value||null})},placeholder:"Search"}),Object(i.jsx)("span",{className:"icon is-left",children:Object(i.jsx)("i",{className:"fas fa-search","aria-hidden":"true"})})]})}),Object(i.jsx)("div",{className:"panel-block",children:Object(i.jsxs)("div",{className:"level is-flex-grow-1 is-mobile","data-cy":"CenturyFilter",children:[Object(i.jsx)("div",{className:"level-left",children:(d=["16","17","18","19","20"],d.map((function(e){return Object(i.jsx)(A,{params:{centuries:o(e)},"data-cy":"century",className:l()("button mr-1",{"is-info":a.includes(e)}),children:e},e)})))}),Object(i.jsx)("div",{className:"level-right ml-4",children:Object(i.jsx)(A,{params:{centuries:null},"data-cy":"centuryALL",className:l()("button is-success",{"is-outlined":a.length>0}),children:"All"})})]})}),Object(i.jsx)("div",{className:"panel-block",children:Object(i.jsx)(A,{params:{sex:null,query:null,centuries:null},className:"button is-link is-outlined is-fullwidth",children:"Reset all filters"})})]})},F=(c(40),function(){return Object(i.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(i.jsx)("div",{className:"Loader__content"})})}),q=function(e){var t=e.person,c=t.name,n=t.slug,r=t.sex;return Object(i.jsx)(s.c,{to:n,className:l()({"has-text-danger":"f"===r}),children:c})},M=function(e){var t=e.people,c=Object(s.d)(),n=Object(b.a)(c,1)[0],a=Object(r.r)().slugId,j=n.get("sort")||null,o=n.get("order")||null,d=function(e){if(!e)return"-";var c=t.find((function(t){return t.name===e}));return c?Object(i.jsx)(q,{person:c}):e},u=function(e){var t=null;return j===e&&(t=o?null:"desc"),{sort:j===e&&"desc"===o?null:e,order:t}},h=function(e){return l()("fas",{"fa-sort":j!==e},{"fa-sort-up":j===e&&"desc"!==o},{"fa-sort-down":j===e&&"desc"===o})};return Object(i.jsxs)("table",{"data-cy":"peopleTable",className:"table is-striped is-hoverable is-narrow is-fullwidth",children:[Object(i.jsx)("thead",{children:Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{children:Object(i.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:["Name",Object(i.jsx)(A,{params:u("name"),children:Object(i.jsx)("span",{className:"icon",children:Object(i.jsx)("i",{className:h("name")})})})]})}),Object(i.jsx)("th",{children:Object(i.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:["Sex",Object(i.jsx)(A,{params:u("sex"),children:Object(i.jsx)("span",{className:"icon",children:Object(i.jsx)("i",{className:h("sex")})})})]})}),Object(i.jsx)("th",{children:Object(i.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:["Born",Object(i.jsx)(A,{params:u("born"),children:Object(i.jsx)("span",{className:"icon",children:Object(i.jsx)("i",{className:h("born")})})})]})}),Object(i.jsx)("th",{children:Object(i.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:["Died",Object(i.jsx)(A,{params:u("died"),children:Object(i.jsx)("span",{className:"icon",children:Object(i.jsx)("i",{className:h("died")})})})]})}),Object(i.jsx)("th",{children:"Mother"}),Object(i.jsx)("th",{children:"Father"})]})}),Object(i.jsx)("tbody",{children:t.map((function(e){var t=e.sex,c=e.born,n=e.died,s=e.fatherName,r=e.motherName;return Object(i.jsxs)("tr",{"data-cy":"person",className:l()({"has-background-warning":e.slug===a}),children:[Object(i.jsx)("td",{children:Object(i.jsx)(q,{person:e})}),Object(i.jsx)("td",{children:t}),Object(i.jsx)("td",{children:c}),Object(i.jsx)("td",{children:n}),Object(i.jsx)("td",{children:d(r)}),Object(i.jsx)("td",{children:d(s)})]},e.name)}))})]})},_=function(){var e=Object(h.useContext)(N),t=e.people,c=e.loading,n=e.loadingError,r=e.filterPeople,a=Object(s.d)(),l=Object(b.a)(a,1)[0],j=l.get("query")||"",o=l.get("sex")||"",d=l.getAll("centuries")||[],u=l.get("sort")||"",x=l.get("order")||"",O=Object(h.useMemo)((function(){return r({query:j,sex:o,centuries:d,sort:u,order:x})}),[t,j,d,o,u,x]);return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("h1",{className:"title",children:"People Page"}),Object(i.jsx)("div",{className:"block",children:Object(i.jsxs)("div",{className:"columns is-desktop is-flex-direction-row-reverse",children:[Object(i.jsx)("div",{className:"column is-7-tablet is-narrow-desktop",children:t.length>0&&Object(i.jsx)(E,{})}),Object(i.jsx)("div",{className:"column",children:Object(i.jsxs)("div",{className:"box table-container",children:[c&&Object(i.jsx)(F,{}),n&&Object(i.jsx)("p",{"data-cy":"peopleLoadingError",children:"Something went wrong"}),!t.length&&!n&&!c&&Object(i.jsx)("p",{"data-cy":"noPeopleMessage",children:"There are no people on the server"}),!O.length&&Object(i.jsx)("p",{children:"There are no people matching the current search criteria"}),O.length&&!c&&Object(i.jsx)(M,{people:O})]})})]})})]})},T=function(){return Object(i.jsx)("h1",{className:"title",children:"Page not found"})},I=function(){return Object(i.jsx)(s.a,{children:Object(i.jsx)(w,{children:Object(i.jsx)(r.e,{children:Object(i.jsxs)(r.c,{path:"/",element:Object(i.jsx)(d,{}),children:[Object(i.jsx)(r.c,{index:!0,element:Object(i.jsx)(k,{})}),Object(i.jsx)(r.c,{path:"/home",element:Object(i.jsx)(r.a,{to:"/"})}),Object(i.jsx)(r.c,{path:"people",element:Object(i.jsx)(_,{}),children:Object(i.jsx)(r.c,{path:":slugId",element:Object(i.jsx)(_,{})})}),Object(i.jsx)(r.c,{path:"*",element:Object(i.jsx)(T,{})})]})})})})};Object(n.createRoot)(document.getElementById("root")).render(Object(i.jsx)(I,{}))}},[[41,1,2]]]);
//# sourceMappingURL=main.43387762.chunk.js.map