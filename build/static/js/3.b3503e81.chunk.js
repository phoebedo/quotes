(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[3],{50:function(e,t,c){e.exports={comments:"Comments_comments__iZX-v"}},51:function(e,t,c){e.exports={form:"NewCommentForm_form__2Te8b",loading:"NewCommentForm_loading__2veC2",control:"NewCommentForm_control__3NVeP",actions:"NewCommentForm_actions__2fwWP"}},52:function(e,t,c){e.exports={item:"CommentItem_item__24mbD"}},53:function(e,t,c){e.exports={comments:"CommentsList_comments__valp0"}},54:function(e,t,c){e.exports={quote:"HighlightedQuote_quote__nE9T6"}},56:function(e,t,c){"use strict";c.r(t);var n=c(2),s=c(8),o=c(1),a=c(14),m=c(22),r=c(21),j=c(50),i=c.n(j),d=c(51),u=c.n(d),l=c(19),b=c(20),x=c(0),O=function(e){var t=Object(o.useRef)(),c=Object(l.a)(b.a),n=c.sendRequest,s=c.status,m=c.error,r=e.onAddedComment;Object(o.useEffect)((function(){"completed"===s&!m&&r()}),[s,m,r]);var j=function(c){c.preventDefault();var s=t.current.value;n({commentData:{text:s},quoteId:e.quoteId})};return Object(x.jsxs)("form",{className:u.a.form,onSubmit:j,children:["pending"===s&&Object(x.jsx)("div",{className:"centered",children:Object(x.jsx)(a.a,{})}),Object(x.jsxs)("div",{className:u.a.control,onSubmit:j,children:[Object(x.jsx)("label",{htmlFor:"comment",children:"Your Comment"}),Object(x.jsx)("textarea",{id:"comment",rows:"5",ref:t})]}),Object(x.jsx)("div",{className:u.a.actions,children:Object(x.jsx)("button",{className:"btn",children:"Add Comment"})})]})},h=c(52),f=c.n(h),p=function(e){return Object(x.jsx)("li",{className:f.a.item,children:Object(x.jsx)("p",{children:e.text})})},_=c(53),N=c.n(_),v=function(e){return Object(x.jsx)("ul",{className:N.a.comments,children:e.comments.map((function(e){return Object(x.jsx)(p,{text:e.text},e.id)}))})},C=function(){var e=Object(o.useState)(!1),t=Object(r.a)(e,2),c=t[0],s=t[1],m=Object(n.j)(),j=Object(l.a)(b.c),d=j.sendRequest,u=j.status,h=j.data;Object(o.useEffect)((function(){d(m.quoteId)}),[d,m.quoteId]);var f,p=Object(o.useCallback)((function(){d(m.quoteId)}),[d,m.quoteId]);return"pending"===u&&(f=Object(x.jsx)("div",{className:"centered",children:Object(x.jsx)(a.a,{})})),"completed"===u&&h&&h.length>0&&(f=Object(x.jsx)(v,{comments:h})),"completed"!==u||h&&0!==h.length||(f=Object(x.jsx)("p",{className:"centered",children:"No comment to show!"})),Object(x.jsxs)("section",{className:i.a.comments,children:[Object(x.jsx)("h2",{children:"User Comments"}),!c&&Object(x.jsx)("button",{className:"btn",onClick:function(){s(!0)},children:"Add a Comment"}),c&&Object(x.jsx)(O,{quoteId:m.quoteId,onAddedComment:p}),f]})},q=c(54),g=c.n(q),I=function(e){return Object(x.jsxs)("figure",{className:g.a.quote,children:[Object(x.jsx)("p",{children:e.text}),Object(x.jsx)("figcaption",{children:e.author})]})};t.default=function(){var e=Object(n.k)(),t=Object(n.j)().quoteId,c=Object(l.a)(b.e,!0),r=c.sendRequest,j=c.status,i=c.data,d=c.error;return Object(o.useEffect)((function(){r(t)}),[r,t]),"pending"===j?Object(x.jsx)("div",{className:"centered",children:Object(x.jsx)(a.a,{})}):d?Object(x.jsx)("p",{className:"centered focused",children:d}):"completed"!==j||i.text?Object(x.jsxs)(o.Fragment,{children:[Object(x.jsx)(I,{author:i.author,text:i.text}),Object(x.jsx)(n.c,{path:e.path,exact:!0,children:Object(x.jsx)("div",{className:"centered",children:Object(x.jsx)(s.b,{className:"btn--flat",to:"".concat(e.url,"/comments"),children:"Load Comment"})})}),Object(x.jsx)(n.c,{path:"".concat(e.path,"/comments"),children:Object(x.jsx)(C,{})})]}):Object(x.jsx)(m.a,{})}}}]);
//# sourceMappingURL=3.b3503e81.chunk.js.map