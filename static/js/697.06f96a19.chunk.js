"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[697],{697:function(n,t,e){e.r(t),e.d(t,{default:function(){return _}});var r,c,o,i,u,a,h,f=e(439),s=e(791),l=e(689),d=e(658),m=e(966),p=e(168),g=e(706),v=g.Z.ul(r||(r=(0,p.Z)(["\n  margin-left: 20px;\n"]))),x=g.Z.span(c||(c=(0,p.Z)(["\n  font-weight: 700;\n"]))),Z=g.Z.p(o||(o=(0,p.Z)(["\n  margin-top: 15px;\n  font-size: 14px;\n\n  &:not(:last-child) {\n    margin-bottom: 20px;\n  }\n"]))),j=g.Z.li(i||(i=(0,p.Z)(["\n  &:not(:last-child) {\n    margin-bottom: 20px;\n  }\n"]))),w=g.Z.span(u||(u=(0,p.Z)(["\n  margin-right: 3px;\n"]))),b=g.Z.p(a||(a=(0,p.Z)(["\n  margin-left: 20px;\n"]))),k=g.Z.div(h||(h=(0,p.Z)(["\n  margin-left: 20px;\n  margin-top: 50px;\n"]))),y=e(184),_=function(){var n=(0,l.UO)().movieId,t=(0,s.useState)([]),e=(0,f.Z)(t,2),r=e[0],c=e[1],o=(0,s.useState)(!1),i=(0,f.Z)(o,2),u=i[0],a=i[1];return(0,s.useEffect)((function(){a(!0),(0,d.Bt)(n).then((function(n){var t=n.results;c(t),a(!1)})).catch((function(n){return console.log(n)}))}),[n]),(0,y.jsx)(y.Fragment,{children:u?(0,y.jsx)(k,{children:(0,y.jsx)(m.Z1,{height:"100",width:"100",color:"orangered",visible:!0})}):(0,y.jsx)("div",{children:0!==r.length?(0,y.jsx)(v,{children:r.map((function(n){var t=n.id,e=n.author,r=n.content;return(0,y.jsxs)(j,{children:[(0,y.jsx)(w,{children:"\u2022"}),(0,y.jsxs)(x,{children:["Author: ",e]}),(0,y.jsx)(Z,{children:r})]},t)}))}):(0,y.jsx)(b,{children:"We don't have any reviews for this movie."})})})}},658:function(n,t,e){e.d(t,{Bt:function(){return a},Pg:function(){return h},XI:function(){return f},Y5:function(){return i},ZR:function(){return o},y:function(){return u}});var r="https://api.themoviedb.org/3",c=new URLSearchParams({api_key:"59106e174e5800a0537739a6d2a5791b"}),o=function(){var n="".concat(r,"/trending/movie/day?").concat(c);return fetch(n).then((function(n){return n.json()})).then((function(n){return n.results})).catch((function(n){return console.log(n)}))},i=function(n){var t="".concat(r,"/movie/").concat(n,"?").concat(c);return fetch(t).then((function(n){return n.json()})).then((function(n){return n})).catch((function(n){return console.log(n)}))},u=function(n){var t="".concat(r,"/movie/").concat(n,"/credits?").concat(c);return fetch(t).then((function(n){return n.json()})).then((function(n){return n})).catch((function(n){return console.log(n)}))},a=function(n){var t="".concat(r,"/movie/").concat(n,"/reviews?").concat(c);return fetch(t).then((function(n){return n.json()})).then((function(n){return n})).catch((function(n){return console.log(n)}))},h=function(n){var t="".concat(r,"/search/movie?query=").concat(n,"&").concat(c);return fetch(t).then((function(n){return n.json()})).then((function(n){return n})).catch((function(n){return console.log(n)}))},f=function(n){return"https://image.tmdb.org/t/p/w500/".concat(n)}}}]);
//# sourceMappingURL=697.06f96a19.chunk.js.map