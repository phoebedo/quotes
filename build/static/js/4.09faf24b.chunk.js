(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[4],{48:function(e,t,c){e.exports={card:"Card_card__1m44e"}},49:function(e,t,c){e.exports={form:"QuoteForm_form__3Ndw9",loading:"QuoteForm_loading__iDpS0",control:"QuoteForm_control__2lCiE",actions:"QuoteForm_actions__354La"}},57:function(e,t,c){"use strict";c.r(t);var n=c(1),o=c(21),r=c(2),a=c(30),s=c(48),i=c.n(s),u=c(0),l=function(e){return Object(u.jsx)("div",{className:i.a.card,children:e.children})},d=c(14),j=c(49),b=c.n(j),f=function(e){var t=Object(n.useState)(!1),c=Object(o.a)(t,2),s=c[0],i=c[1],j=Object(n.useRef)(),f=Object(n.useRef)();return Object(u.jsxs)(a.Fragment,{children:[Object(u.jsx)(l,{children:Object(u.jsxs)("form",{onFocus:function(){i(!0)},className:b.a.form,onSubmit:function(t){t.preventDefault();var c=j.current.value,n=f.current.value;e.onAddQuote({author:c,text:n})},children:[e.isLoading&&Object(u.jsx)("div",{className:b.a.loading,children:Object(u.jsx)(d.a,{})}),Object(u.jsxs)("div",{className:b.a.control,children:[Object(u.jsx)("label",{htmlFor:"author",children:"Author"}),Object(u.jsx)("input",{type:"text",id:"author",ref:j})]}),Object(u.jsxs)("div",{className:b.a.control,children:[Object(u.jsx)("label",{htmlFor:"text",children:"Text"}),Object(u.jsx)("textarea",{id:"text",rows:"5",ref:f})]}),Object(u.jsx)("div",{className:b.a.actions,children:Object(u.jsx)("button",{onClick:function(){return i(!1)},className:"btn",children:"Add Quote"})})]})}),Object(u.jsx)(r.a,{when:s,message:function(e){return"All entered data will cannot to restored if you leave this page.Are you sure you want to leave?"}})]})},h=c(19),m=c(20);t.default=function(){var e=Object(h.a)(m.b),t=e.sendRequest,c=e.status,o=Object(r.h)();Object(n.useEffect)((function(){"completed"===c&&o.push("/quotes")}),[c,o]);return Object(u.jsx)(f,{isLoading:"pending"===c,onAddQuote:function(e){t(e)}})}}}]);
//# sourceMappingURL=4.09faf24b.chunk.js.map