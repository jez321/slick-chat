(this["webpackJsonpslick-chat"]=this["webpackJsonpslick-chat"]||[]).push([[0],{187:function(e,n,t){e.exports=t(374)},369:function(e,n,t){},374:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),c=t(73),i=t.n(c),u=t(15),o=t(20),l=t(29),s=t(110),m=t.n(s),f=t(179),d=t(185),b={user:""},p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"SET_USER":return Object(d.a)({},e,{user:n.user});default:return e}},v={messages:[]},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,n=arguments.length>1?arguments[1]:void 0;return n.type,e},g=Object(l.c)({app:p,chat:h,firebase:o.firebaseReducer});m.a.initializeApp({apiKey:"AIzaSyB3JgaM3c4n9ApVyPl3NZeRn8LYEjoTvHk",authDomain:"slick-chat-b8396.firebaseapp.com",databaseURL:"https://slick-chat-b8396.firebaseio.com",projectId:"slick-chat-b8396",storageBucket:"slick-chat-b8396.appspot.com",messagingSenderId:"644724896134"});var E=Object(l.d)(g,Object(l.a)(f.a)),j={firebase:m.a,config:{userProfile:"users"},dispatch:E.dispatch},y=(t(369),t(36)),O=t(37),x=t(5),k=t(6);function w(){var e=Object(x.a)(["\n  background-color: ",";\n  padding: 0 2rem;\n  display: flex;\n  justify-content: space-between;\n  color: white;\n  h1,\n  div {\n    font-size: 2rem;\n    margin: 1rem 0;\n  }\n"]);return w=function(){return e},e}function R(){var e=Object(x.a)(["\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  text-align: left;\n  justify-content: space-between;\n  height: 100%;\n"]);return R=function(){return e},e}var S=k.a.div(R()),z=k.a.header(w(),"#282c34"),F=t(74),B=t(184);function C(){var e=Object(x.a)([""]);return C=function(){return e},e}function I(){var e=Object(x.a)(["\n  display: flex;\n  justify-content: stretch;\n  textarea {\n    resize: none;\n    font-size: 1.6rem;\n    padding: 0.85rem 2rem;\n    flex: 1 0 0;\n  }\n"]);return I=function(){return e},e}function T(){var e=Object(x.a)(["\n  background-color: ",";\n  padding: 0.5rem 2rem;\n  color: #ccc;\n"]);return T=function(){return e},e}function D(){var e=Object(x.a)(["\n  text-align: left;\n  width: 100%;\n"]);return D=function(){return e},e}k.a.section(D());var U=k.a.div(T(),"#282c34"),A=k.a.div(I()),J=k.a.section(C());function K(){var e=Object(x.a)(["\n  font-size: 1.6rem;\n  padding: 1rem 2rem;\n  background-color: #444;\n  border: none;\n  color: white;\n  transition-duration: 0.2s;\n  cursor: pointer;\n  &:hover {\n    background-color: #555;\n  }\n  &:active {\n    background-color: #666;\n  }\n  &:disabled {\n    opacity: 0.6;\n  }\n"]);return K=function(){return e},e}var L,M=k.a.button(K()),P=function(e){return a.a.createElement(M,e)},N=function(e){return e.app.user},V=function(){var e=Object(o.useFirebase)(),n=Object(u.c)(N),t=Object(r.useState)(""),c=Object(F.a)(t,2),i=c[0],l=c[1],s=function(){var t,r={text:i,user:n,timestamp:(t=Date.now(),Math.floor(t/1e3))};return l(""),L&&L.focus(),e.push("messages",r)};return a.a.createElement(J,null,a.a.createElement(A,null,a.a.createElement(B.a,{onKeyUp:function(e){""!==i.trim()&&"Enter"===e.key&&e.shiftKey&&s()},onChange:function(e){l(e.target.value)},value:i,maxRows:4,inputRef:function(e){return L=e},autoFocus:!0}),a.a.createElement(P,{style:{fontSize:"1.3rem",height:"4rem"},disabled:""===i.trim(),onClick:function(e){e.preventDefault(),s()}},a.a.createElement(y.a,{icon:O.a}),"\xa0\u9001\u4fe1")),a.a.createElement(U,null,"Chat footer"))};function _(){var e=Object(x.a)(["\n  margin-bottom: 1rem;\n"]);return _=function(){return e},e}function H(){var e=Object(x.a)(["\n  list-style-type: none;\n  padding-left: 0;\n  margin: 0;\n  height: 100%;\n  li {\n    padding: 1rem 0;\n    header {\n      font-weight: bold;\n      .timestamp {\n        font-weight: normal;\n      }\n    }\n  }\n"]);return H=function(){return e},e}function Y(){var e=Object(x.a)(["\n  padding: 0 2rem;\n  display: flex;\n  justify-content: flex-end;\n  flex-direction: column;\n  height: 100%;\n  overflow-y: auto;\n"]);return Y=function(){return e},e}var Z=k.a.section(Y()),q=k.a.ul(H()),G=k.a.div(_()),Q=t(183),W=t.n(Q);function X(){var e=Object(x.a)(["\n  font-weight: normal;\n"]);return X=function(){return e},e}function $(){var e=Object(x.a)(["\n  font-weight: bold;\n"]);return $=function(){return e},e}function ee(){var e=Object(x.a)(["\n  padding: 1rem 0;\n"]);return ee=function(){return e},e}var ne=k.a.li(ee()),te=k.a.header($()),re=k.a.span(X()),ae=function(e){var n=e.children,t=e.user,r=e.timestamp,c=e.color;return a.a.createElement(ne,null,a.a.createElement(te,null,a.a.createElement("span",{style:{color:c}},t),"\xa0",a.a.createElement(re,null,a.a.createElement(W.a,{unix:!0,fromNow:!0},r))),a.a.createElement("pre",null,n))},ce=t(373),ie=!1,ue=function(e){return e.firebase.ordered.messages},oe=function(){Object(o.useFirebaseConnect)(["messages"]);var e=Object(u.c)(ue),n=Object(r.useRef)(null);Object(r.useEffect)((function(){n.current&&(n.current.scrollIntoView({behavior:ie?"smooth":"auto"}),ie=!0)}),[e]);var t={};return a.a.createElement(Z,null,Object(o.isLoaded)(e)?a.a.createElement(q,null,e?e.map((function(e){var n=e.key,r=e.value,c=r.user,i=r.text,u=r.timestamp;return c in t||(t[c]=ce({luminosity:"dark",seed:c})),a.a.createElement(ae,{key:n,user:c,timestamp:u,color:t[c]},i)})):null,a.a.createElement("div",{ref:n})):a.a.createElement(G,null,"\u8aad\u307f\u8fbc\u307f\u4e2d..."))};function le(){var e=Object(x.a)(["\n  height: 100%;\n  margin-top: 2rem;\n  text-align: center;\n"]);return le=function(){return e},e}var se=k.a.section(le()),me=function(){var e=Object(r.useState)(!1),n=Object(F.a)(e,2),t=n[0],c=n[1],i=Object(r.useRef)(null),o=Object(u.b)();return a.a.createElement(se,null,a.a.createElement("h3",{style:{marginTop:0,marginBottom:"1rem"}},"\u30e6\u30fc\u30b6\u30fc\u540d\u3092\u6307\u5b9a\u3057\u3066\u304f\u3060\u3055\u3044"),a.a.createElement("form",{onSubmit:function(e){if(e.preventDefault(),i.current){var n=i.current.value;!n||0===n.length||n.length>30?c(!0):o({type:"SET_USER",user:n})}}},a.a.createElement("div",{style:{marginBottom:"1rem"}},a.a.createElement("input",{autoFocus:!0,ref:i,style:{fontSize:"2rem",padding:"1rem",border:"solid 1px #999",borderRadius:"5px"},type:"text"})),t?a.a.createElement("div",{style:{color:"red"}},"1~30\u6587\u5b57\u306e\u30e6\u30fc\u30b6\u30fc\u540d\u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044\u3002"):null,a.a.createElement("div",{style:{marginTop:"2rem"}},a.a.createElement(P,{style:{borderRadius:"5px"},type:"submit"},a.a.createElement(y.a,{icon:O.b}),"\xa0\u30ed\u30b0\u30a4\u30f3"))))},fe=function(e){return e.app.user},de=function(){var e=Object(u.c)(fe);return a.a.createElement(S,null,a.a.createElement(z,null,a.a.createElement("h1",null,"SlickChat"),e?a.a.createElement("div",null,a.a.createElement(y.a,{icon:O.c}),"\xa0",e):null),e?a.a.createElement(a.a.Fragment,null,a.a.createElement(oe,null),a.a.createElement(V,null)):a.a.createElement(me,null))};i.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(u.a,{store:E},a.a.createElement(o.ReactReduxFirebaseProvider,j,a.a.createElement(de,null)))),document.getElementById("root"))}},[[187,1,2]]]);
//# sourceMappingURL=main.06a91690.chunk.js.map