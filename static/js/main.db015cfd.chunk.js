(this["webpackJsonprecipe-search-app"]=this["webpackJsonprecipe-search-app"]||[]).push([[0],{52:function(e,n,t){},77:function(e,n,t){"use strict";t.r(n);var c,i,r,a,o,s,d,l,p,j,b,x,h,u,O,g=t(0),f=t.n(g),w=t(11),m=t.n(w),v=(t(52),t(28)),y=t.n(v),k=t(41),C=t(22),S=t(6),z=t(42),I=t.n(z),R=t(7),J=t(104),M=t(102),T=t(105),_=t(103),q=t(3),B=R.a.div(c||(c=Object(S.a)(["\n  display: flex;\n  flex-direction: column;\n  padding: 10px;\n  width: 300px;\n  box-shadow: 0 3px 10px 0 #aaa;\n"]))),E=R.a.img(i||(i=Object(S.a)(["\n  object-fit: cover;\n  height: 200px;\n"]))),F=R.a.span(r||(r=Object(S.a)(["\n  font-size: 18px;\n  font-weight: 600;\n  color: black;\n  margin: 10px 0;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n"]))),N=R.a.span(a||(a=Object(S.a)(["\n  color: #eb3300;\n  font-size: 18px;\n  text-align: center;\n  border: solid 1px #eb3300;\n  border-radius: 3px;\n  padding: 10px 15px;\n  cursor: pointer;\n"]))),W=Object(R.a)(N)(o||(o=Object(S.a)(["\n  color: green;\n  border: solid 1px green;\n  margin-bottom: 12px;\n"]))),A=Object(R.a)(N)(s||(s=Object(S.a)(["\n  color: green;\n  border: solid 1px green;\n"]))),D=function(e){var n=Object(g.useState)(""),t=Object(C.a)(n,2),c=t[0],i=t[1],r=e.recipe,a=r.label,o=r.image,s=r.ingredients,d=r.url;return Object(q.jsxs)(B,{children:[Object(q.jsxs)(J.a,{onClose:function(){return console.log("adsadad")},"aria-labelledby":"simple-dialog-title",open:!!c,children:[Object(q.jsx)(T.a,{children:"Ingredients"}),Object(q.jsxs)(M.a,{children:[Object(q.jsx)(F,{children:a}),Object(q.jsxs)("table",{children:[Object(q.jsxs)("thead",{children:[Object(q.jsx)("th",{children:"Ingredient"}),Object(q.jsx)("th",{children:"Weight"})]}),Object(q.jsx)("tbody",{children:s.map((function(e,n){return Object(q.jsxs)("tr",{className:"ingredient-list",children:[Object(q.jsx)("td",{children:e.text}),Object(q.jsx)("td",{children:e.weight})]},n)}))})]})]}),Object(q.jsxs)(_.a,{children:[Object(q.jsx)(A,{onClick:function(){return window.open(d)},children:"See More"}),Object(q.jsx)(N,{onClick:function(){return i("")},children:"Close"})]})]}),Object(q.jsx)(E,{src:o,alt:a}),Object(q.jsx)(F,{children:a}),Object(q.jsx)(W,{onClick:function(){return i(!c)},children:"Ingredients"}),Object(q.jsx)(N,{onClick:function(){return window.open(d)},children:"See Complete Recipe"})]})},G=R.a.div(d||(d=Object(S.a)(["\n  display: flex;\n  flex-direction: column;\n"]))),H=R.a.div(l||(l=Object(S.a)(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n"]))),K=R.a.div(p||(p=Object(S.a)(["\n  background-color: black;\n  color: white;\n  display: flex;\n  justify-content: space-between;\n  flex-direction: row;\n  align-items: center;\n  padding: 20px;\n  font-size: 25px;\n  font-weight: bold;\n  box-shadow: 0 3px 6px 0 #555;\n"]))),L=R.a.div(j||(j=Object(S.a)(["\n  display: flex;\n  flex-direction: row;\n  padding: 10px 10px;\n  border-radius: 6px;\n  margin-left: 20px;\n  width: 50%;\n  background-color: white;\n"]))),P=R.a.img(b||(b=Object(S.a)(["\n  width: 32px;\n  height: 32px;\n"]))),Q=R.a.img(x||(x=Object(S.a)(["\n  width: 36px;\n  height: 36px;\n  margin: 15px;\n"]))),U=R.a.img(h||(h=Object(S.a)(["\n  width: 120px;\n  height: 120px;\n  margin: 200px;\n  opacity: 50%;\n"]))),V=R.a.input(u||(u=Object(S.a)(["\n  color: black;\n  font-size: 16px;\n  font-weight: bold;\n  border: none;\n  outline: none;\n  margin-left: 15px;\n"]))),X=R.a.div(O||(O=Object(S.a)(["\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  padding: 30px;\n  gap: 20px;\n  justify-content: space-evenly;\n"]))),Y=function(){var e=Object(g.useState)(""),n=Object(C.a)(e,2),t=n[0],c=n[1],i=Object(g.useState)([]),r=Object(C.a)(i,2),a=r[0],o=r[1],s=Object(g.useState)(),d=Object(C.a)(s,2),l=d[0],p=d[1],j=function(){var e=Object(k.a)(y.a.mark((function e(n){var t;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I.a.get("https://api.edamam.com/search?q=".concat(n,"&app_id=").concat("b90824c6","&app_key=").concat("f2a580856d9df6087d94f04da374d749\t"));case 2:t=e.sent,o(t.data.hits);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return Object(q.jsxs)(G,{children:[Object(q.jsxs)(K,{children:[Object(q.jsxs)(H,{children:[Object(q.jsx)(Q,{src:"/recipee-finder/hamburger.svg"}),"Recipe Finder"]}),Object(q.jsxs)(L,{children:[Object(q.jsx)(P,{src:"/recipee-finder/search-icon.svg"}),Object(q.jsx)(V,{placeholder:"Search Recipe",value:t,onChange:function(e){clearTimeout(l),c(e.target.value);var n=setTimeout((function(){return j(e.target.value)}),500);p(n)}})]})]}),Object(q.jsx)(X,{children:(null===a||void 0===a?void 0:a.length)?a.map((function(e,n){return Object(q.jsx)(D,{recipe:e.recipe},n)})):Object(q.jsx)(U,{src:"/recipee-finder/hamburger.svg"})})]})};m.a.render(Object(q.jsx)(f.a.StrictMode,{children:Object(q.jsx)(Y,{})}),document.getElementById("root"))}},[[77,1,2]]]);
//# sourceMappingURL=main.db015cfd.chunk.js.map