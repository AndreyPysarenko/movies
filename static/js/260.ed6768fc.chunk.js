"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[260],{9160:function(e,n,t){t.d(n,{Ai:function(){return s},HW:function(){return i},SB:function(){return p},fS:function(){return o},yd:function(){return f}});var r=t(4165),a=t(5861),u=t(1243);u.Z.defaults.baseURL="https://api.themoviedb.org/3/";var c="8ae0eb13b175efdd49cca3af4a1ffe3d",i=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(){var n,t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("trending/movie/day?api_key=".concat(c));case 2:return n=e.sent,t=n.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),s=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n){var t,a;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("search/movie?api_key=".concat(c,"&include_adult=false&language=en-US&page=1&query=").concat(n));case 2:return t=e.sent,a=t.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),o=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n){var t,a;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("movie/".concat(n,"?api_key=").concat(c,"&language=en-US"));case 2:return t=e.sent,a=t.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),f=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n){var t,a;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("movie/".concat(n,"/credits?api_key=").concat(c,"&language=en-US"));case 2:return t=e.sent,a=t.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),p=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n){var t,a;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("movie/".concat(n,"/reviews?api_key=").concat(c,"&language=en-US&page=1"));case 2:return t=e.sent,a=t.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},8260:function(e,n,t){t.r(n),t.d(n,{default:function(){return Z}});var r,a=t(4165),u=t(5861),c=t(9439),i=t(9160),s=t(7938),o=t(1686),f=t.n(o),p=t(2791),v=t(7689),d=t(168),h=t(7109).Z.ul(r||(r=(0,d.Z)(["\n  list-style-type: none;\n"]))),l=t(184),Z=function(){var e=(0,v.UO)().movieId,n=(0,p.useState)([]),t=(0,c.Z)(n,2),r=t[0],o=t[1],d=(0,p.useState)(!1),Z=(0,c.Z)(d,2),g=Z[0],m=Z[1];return(0,p.useEffect)((function(){var n=function(){var n=(0,u.Z)((0,a.Z)().mark((function n(){var t;return(0,a.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,m(!0),n.next=4,(0,i.SB)(e);case 4:t=n.sent,o(t.results),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),f().Notify.failure("Something went wrong. Try to reload your page!");case 11:return n.prev=11,m(!1),n.finish(11);case 14:case"end":return n.stop()}}),n,null,[[0,8,11,14]])})));return function(){return n.apply(this,arguments)}}();n()}),[e]),(0,l.jsxs)(l.Fragment,{children:[g&&(0,l.jsx)(s.Z,{}),0!==r.length&&(0,l.jsx)("div",{children:(0,l.jsx)(h,{children:r.map((function(e){var n=e.id,t=e.author,r=e.content;return(0,l.jsxs)("li",{children:[(0,l.jsxs)("h2",{children:["Author: ",t]}),(0,l.jsx)("p",{children:r})]},n)}))})}),0===r.length&&(0,l.jsx)("div",{children:"We don't have any reviews for this movie"})]})}}}]);
//# sourceMappingURL=260.ed6768fc.chunk.js.map