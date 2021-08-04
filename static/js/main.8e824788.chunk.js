(this["webpackJsonpnotes-1.0"]=this["webpackJsonpnotes-1.0"]||[]).push([[0],{16:function(e,t,s){},17:function(e,t,s){},18:function(e,t,s){},19:function(e,t,s){},21:function(e,t,s){},23:function(e,t,s){"use strict";s.r(t);var c=s(1),a=s.n(c),n=s(10),i=s.n(n),r=(s(16),s(17),s(4)),l=(s(18),s(19),s(0));var j=function(e){return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{className:"card",children:[Object(l.jsxs)("div",{className:"card-header",children:[Object(l.jsxs)("div",{className:"card-timing",children:[Object(l.jsxs)("span",{children:[Object(l.jsx)("i",{className:"fas fa-clock"}),"\xa0",e.time]}),Object(l.jsxs)("span",{children:[Object(l.jsx)("i",{class:"far fa-calendar-alt"}),"\xa0",e.date]})]}),Object(l.jsx)("p",{className:"title",children:e.title})]}),Object(l.jsx)("div",{class:"hr"}),Object(l.jsx)("div",{className:"card-body",children:Object(l.jsx)("p",{children:e.content})}),Object(l.jsxs)("div",{className:"card-footer",children:[Object(l.jsx)("div",{className:"hr"}),Object(l.jsxs)("div",{className:"footer-btn",children:[Object(l.jsx)("div",{children:Object(l.jsx)("span",{children:Object(l.jsx)("i",{class:"fa fa-heart"})})}),Object(l.jsxs)("div",{children:[Object(l.jsx)("span",{children:Object(l.jsx)("i",{class:"fa fa-edit"})}),"\xa0\xa0\xa0\xa0\xa0",Object(l.jsx)("span",{children:Object(l.jsx)("i",{class:"fa fa-trash"})})]})]})]})]})})},o=s(8),d=s(3),b=(s(21),s(11));var O=function(e){var t=Object(b.a)(),s=t.register,a=t.handleSubmit,n=(t.watch,t.reset),i=t.formState.errors,j=Object(c.useState)([{}]),O=Object(r.a)(j,2),h=(O[0],O[1],Object(c.useState)("")),m=Object(r.a)(h,2),u=m[0],x=m[1],f=Object(c.useState)({date:"",time:"",title:"",content:""}),v=Object(r.a)(f,2),N=v[0],g=v[1];return Object(c.useEffect)((function(){if("done"==u){console.log(N);var t=localStorage.getItem("Notes");t=JSON.parse(t),[].push(N),null!=t?(localStorage.setItem("Notes",JSON.stringify([].concat(Object(d.a)(t),[N]))),e.update()):(localStorage.setItem("Notes",JSON.stringify([N])),e.update())}x("")})),Object(l.jsx)("div",{class:"modal",children:Object(l.jsx)("div",{className:"modal-content",children:Object(l.jsxs)("form",{onSubmit:a((function(e){g({date:(new Date).toLocaleDateString("en-IN",{year:"numeric",month:"short",day:"2-digit"}),time:(new Date).toLocaleTimeString("en-IN",{hour:"2-digit",minute:"2-digit",hour12:!0}),title:e.title,content:e.content}),setTimeout((function(){x("done")}),10),n()})),children:[Object(l.jsxs)("div",{className:"modal-header",children:[Object(l.jsxs)("div",{children:["\xa0",Object(l.jsx)("strong",{children:"Write Note"})]}),Object(l.jsx)("div",{className:"dismiss",onClick:function(){e.dismiss(!1)},children:Object(l.jsx)("i",{className:"fa fa-times"})})]}),Object(l.jsx)("div",{class:"hr"}),Object(l.jsxs)("div",{className:"modal-body",children:[Object(l.jsxs)("div",{className:"form-group",children:[Object(l.jsx)("input",Object(o.a)(Object(o.a)({autoComplete:"off",autoFocus:!0},s("title",{required:!0})),{},{type:"text",className:"form-input"})),Object(l.jsx)("label",{children:"Title"}),i.title&&Object(l.jsx)("span",{className:"err",children:"This field is required"})]}),Object(l.jsxs)("div",{className:"form-group",children:[Object(l.jsx)("textarea",Object(o.a)(Object(o.a)({},s("content",{required:!0})),{},{placeholder:"Type your notes here...",rows:"14",className:"form-area"})),Object(l.jsx)("label",{children:"Write Notes here"}),i.content&&Object(l.jsx)("span",{className:"err",children:"This field is required"})]})]}),Object(l.jsxs)("div",{className:"modal-footer",children:[Object(l.jsx)("div",{class:"hr"}),Object(l.jsxs)("div",{class:"footer-content",children:[Object(l.jsx)("div",{}),Object(l.jsxs)("div",{children:[Object(l.jsx)("button",{onClick:function(){e.dismiss(!1)},class:"btn-close",children:" Close"}),"\xa0\xa0\xa0",Object(l.jsx)("button",{type:"submit",class:"btn-submit",children:" Save"})]})]})]})]})})})};var h=function(){var e=Object(c.useState)(!1),t=Object(r.a)(e,2),s=t[0],a=t[1],n=Object(c.useState)(null!=JSON.parse(localStorage.getItem("Notes"))?JSON.parse(localStorage.getItem("Notes")):[]),i=Object(r.a)(n,2),o=i[0],d=i[1];return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("div",{class:"header",children:[Object(l.jsx)("div",{className:"logo",children:Object(l.jsxs)("h4",{children:["Notes 1.0",Object(l.jsx)("br",{})]})}),Object(l.jsx)("div",{className:"nav"})]}),Object(l.jsx)("div",{className:"container",children:o.reverse().map((function(e,t){return Object(l.jsx)(j,{time:e.time,date:e.date,title:e.title,content:e.content})}))}),Object(l.jsxs)("footer",{children:[Object(l.jsx)("span",{}),Object(l.jsx)("span",{onClick:function(){a(!0)},className:"btn btn-add",children:Object(l.jsx)("i",{class:"fa fa-plus"})})]}),1==s?Object(l.jsx)(O,{update:function(e){var t=localStorage.getItem("Notes");t=JSON.parse(t),console.log("data",t),d(t),console.clear(),console.log(o),a(!1)},dismiss:function(e){console.log(e),a(!1)}}):null]})};var m=function(){return Object(l.jsx)("div",{children:Object(l.jsx)(h,{})})},u=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,24)).then((function(t){var s=t.getCLS,c=t.getFID,a=t.getFCP,n=t.getLCP,i=t.getTTFB;s(e),c(e),a(e),n(e),i(e)}))};i.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(m,{})}),document.getElementById("root")),u()}},[[23,1,2]]]);
//# sourceMappingURL=main.8e824788.chunk.js.map