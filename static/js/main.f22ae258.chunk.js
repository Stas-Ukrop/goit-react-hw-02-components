(this["webpackJsonpgoit-react-hw-02-components"]=this["webpackJsonpgoit-react-hw-02-components"]||[]).push([[0],{10:function(e){e.exports=JSON.parse('[{"id":"id-1","name":"Rosie Simpson","number":"459-12-56"},{"id":"id-2","name":"Hermione Kline","number":"443-89-12"},{"id":"id-3","name":"Eden Clements","number":"645-17-79"},{"id":"id-4","name":"Annie Copeland","number":"227-91-26"}]')},17:function(e,t,n){},20:function(e,t,n){},21:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(8),i=n.n(a),s=n(11),o=n(2),j=n(0),u=function(e){var t=e.message;return Object(j.jsx)("h2",{children:t})},b=function(e){var t=e.good,n=e.neutral,r=e.bad,a=e.title,i=Object(c.useState)(0),s=Object(o.a)(i,2),b=s[0],O=s[1],l=Object(c.useState)(0),d=Object(o.a)(l,2),m=d[0],f=d[1];return Object(c.useEffect)((function(){if(O(t+n+r),0!==t)return 0===n&&0===r?f(100):0!==n||0!==r?f(Math.round(t/b*100)):void 0}),[t,n,r,b]),Object(j.jsx)(j.Fragment,{children:t||r||n?Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{children:a}),Object(j.jsxs)("span",{children:["Good:",t]}),Object(j.jsx)("br",{}),Object(j.jsxs)("span",{children:["Neutral:",n]}),Object(j.jsx)("br",{}),Object(j.jsxs)("span",{children:["Bad:",r]}),Object(j.jsx)("br",{}),Object(j.jsxs)("span",{children:["Total:",b]}),Object(j.jsx)("br",{}),Object(j.jsxs)("span",{children:["Positive feedback:",m]})]}):Object(j.jsx)(u,{message:"No feedback given"})})},O=(n(17),function(e){var t=e.options,n=e.setOptions,c=t.map((function(e,t){return Object(j.jsx)("button",{type:"button",onClick:n[t],children:e},t.toString())}));return Object(j.jsx)(j.Fragment,{children:c})}),l=function(e){var t=e.options,n=e.setOptions;return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(O,{options:t,setOptions:n})})},d=n(9),m=function(e){var t=e.children;return Object(j.jsx)(j.Fragment,{children:t})},f=m;m.propTypes={children:n.n(d).a.any};var x=n(10),h=(n(20),function(e){var t=e.list,n=e.remoteContact,c=t.map((function(e){var t=e.id,c=e.name,r=e.number;return Object(j.jsxs)("li",{children:[Object(j.jsxs)("p",{children:[c,":"]}),Object(j.jsx)("span",{children:r}),Object(j.jsx)("button",{type:"button",onClick:function(){return n(t)},children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"})]},t)}));return Object(j.jsx)("div",{children:Object(j.jsx)("ul",{children:c})})}),p=function(e){var t=e.list,n=e.remoteContact;return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(h,{list:t,remoteContact:n})})},g=n(4),v=n(5),C=n(23),S=function(e){var t=e.addContacts,n=document.querySelectorAll("input[type='text']"),r=Object(c.useState)({id:"",nameContact:"",number:""}),a=Object(o.a)(r,2),i=a[0],s=a[1];return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("label",{children:"Input name"}),Object(j.jsx)("br",{}),Object(j.jsx)("input",{type:"text",name:"nameContact",onChange:function(e){s((function(t){return Object(v.a)(Object(v.a)({},t),{},Object(g.a)({},e.target.name,e.target.value))}))}}),Object(j.jsx)("br",{}),Object(j.jsx)("label",{children:"Input number"}),Object(j.jsx)("br",{}),Object(j.jsx)("input",{type:"text",name:"number",onChange:function(e){s((function(t){return Object(v.a)(Object(v.a)({},t),{},Object(g.a)({},e.target.name,e.target.value))}))}}),Object(j.jsx)("br",{}),Object(j.jsx)("button",{type:"button",onClick:function(){if(""!==i.nameContact&&""!==i.number){t(i.id=Object(C.a)(),i.nameContact,i.number),s({id:"",nameContact:"",number:""});for(var e=0;e<n.length;e++)n[e].value=""}else alert("\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430 \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0441\u0435 \u0434\u0430\u043d\u043d\u044b\u0435 \u0432 \u043f\u043e\u043b\u044f \u0444\u043e\u0440\u043c\u044b")},children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043a\u043e\u043d\u0442\u0430\u043a\u0442"})]})},y=function(e){var t=e.filterFunc;return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("input",{type:"text",onChange:function(e){t(e.target.value)}})})},F=function(){var e=Object(c.useState)(0),t=Object(o.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(0),i=Object(o.a)(a,2),u=i[0],O=i[1],d=Object(c.useState)(0),m=Object(o.a)(d,2),h=m[0],g=m[1],v=Object(c.useState)([]),C=Object(o.a)(v,2),F=C[0],k=C[1],w=Object(c.useState)(F),I=Object(o.a)(w,2),E=I[0],J=I[1];Object(c.useEffect)((function(){var e=localStorage.getItem("massItem"),t=JSON.parse(e);k(t||x)}),[]),Object(c.useEffect)((function(){J(F),localStorage.setItem("massItem",JSON.stringify(F))}),[F]);return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h1",{children:"Please leave feedback"}),Object(j.jsxs)(f,{children:[Object(j.jsx)(l,{options:["good","neutral","bad"],setOptions:[function(){r((function(e){return e+1}))},function(){O((function(e){return e+1}))},function(){g((function(e){return e+1}))}]}),Object(j.jsx)(b,{title:"Statistics",good:n,neutral:u,bad:h})]}),Object(j.jsxs)(f,{children:[Object(j.jsx)("h1",{children:"Phonebook"}),Object(j.jsx)(S,{addContacts:function(e,t,n){k((function(c){return c.map((function(e){return e.name.toLowerCase()})).includes(t.toLowerCase())?(alert("\u0442\u0430\u043a\u043e\u0435 \u0438\u043c\u044f \u0443\u0436\u0435 \u0435\u0441\u0442\u044c, \u043f\u0440\u0438\u0434\u0443\u043c\u0430\u0439\u0442\u0435 \u0434\u0440\u0443\u0433\u043e\u0435"),c):[].concat(Object(s.a)(c),[{id:e,name:t,number:n}])}))}}),Object(j.jsx)("h2",{children:"Contacts"}),Object(j.jsx)(y,{filterFunc:function(e){J(F),J((function(t){return t.filter((function(t){return t.name.toLowerCase().includes(e.toLowerCase())}))}))}}),Object(j.jsx)(p,{list:E,remoteContact:function(e){k((function(t){return t.filter((function(t){return t.id!==e}))}))}})]})]})};i.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(F,{})}),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.f22ae258.chunk.js.map