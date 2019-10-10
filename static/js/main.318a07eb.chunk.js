(this["webpackJsonpsaga-test"]=this["webpackJsonpsaga-test"]||[]).push([[0],{194:function(e,t,n){e.exports=n(355)},196:function(e,t,n){},197:function(e,t,n){},198:function(e,t,n){},306:function(e,t,n){},355:function(e,t,n){"use strict";n.r(t);n(195),n(196),n(197);var r=n(362),a=n(371),s=(n(198),n(370)),c=n(369),u=n(61),o=n(367),l=n(361),i=n(366),E=n(42),S=function(e){return e.users},d=Object(E.a)(S,(function(e){return e.users})),f=Object(E.a)(S,(function(e){return e.selectedUser})),p=Object(E.a)(S,(function(e){return e.isUsersLoading})),m=Object(E.a)(S,(function(e){return e.posts})),b=Object(E.a)(S,(function(e){return e.albums})),_=Object(E.a)(S,(function(e){return e.isContentLoading})),U=Object(E.a)(S,(function(e){return e.showing})),g="USERS_GET_USER_ALBUMS_REQUEST",h="USERS_GET_USER_POSTS_REQUEST",O=function(e){return{type:"USERS_GET_ALL_USERS_SUCCESS",payload:{users:e}}},v=function(){return{type:"USERS_GET_ALL_USERS_FAIL"}},R=function(e){return{type:"USERS_SET_SELECTED_USER",payload:{id:e}}},j=function(e){return{type:"USERS_GET_USER_ALBUMS_SUCCESS",payload:{albums:e}}},y=function(){return{type:"USERS_GET_USER_ALBUMS_FAIL"}},L=function(e){return{type:"USERS_GET_USER_POSTS_SUCCESS",payload:{posts:e}}},C=function(){return{type:"USERS_GET_USER_POSTS_FAIL"}},T=function(e){return{type:"USERS_SET_SHOWING",payload:{type:e}}},w=n(0),x=n.n(w),A=function(e){var t=e.post,n=t.title,r=t.body;return x.a.createElement(i.a,{className:"full-width"},x.a.createElement(i.a.Content,{header:n}),x.a.createElement(i.a.Content,{description:r}))},P=n(59),k=Object(P.b)((function(e){return{selectedUser:f(e),posts:m(e),albums:b(e),isContentLoading:_(e),showing:U(e)}}),(function(e){return{usersSetSelecteduser:function(t){return e(R(t))},usersClearContent:function(t){return e({type:"USERS_CLEAR_CONTENT"})},usersSetShowing:function(t){return e(T(t))}}}))((function(e){var t=e.albums,n=e.isContentLoading,r=e.posts,a=e.selectedUser,E=e.usersClearContent,S=e.usersSetSelecteduser,d=e.usersSetShowing,f=e.showing;return x.a.createElement(x.a.Fragment,null,a&&x.a.createElement(s.a,{className:"content full-height"},x.a.createElement("div",{className:"content__header"},x.a.createElement(c.a,{onClick:function(){E(),S(null),d(null)},icon:!0},x.a.createElement(u.a,{name:"times"}))),x.a.createElement("div",{className:"content__inner"},n&&x.a.createElement(o.a,{active:!0,inverted:!0},x.a.createElement(l.a,{inverted:!0},"Waiting")),!n&&"posts"===f&&x.a.createElement("div",{className:"content__info"},r.map((function(e,t){return x.a.createElement(A,{post:e,key:t})}))),!n&&"albums"===f&&x.a.createElement(i.a.Group,{itemsPerRow:4},t.map((function(e,t){return x.a.createElement(i.a,{key:t,color:"green"},x.a.createElement(i.a.Content,null,x.a.createElement(i.a.Description,null,e.title)))}))))))})),G=n(66),N=(n(306),n(365)),I=n(364),M=function(e){var t=e.user,n=t.id,r=t.name,a=t.username,s=t.email,u=t.address,o=u.street,l=u.suite,E=u.city,S=u.zipcode,d=t.phone,f=t.company,p=f.name,m=f.catchPhrase,b=e.disabled,_=e.onPosts,U=void 0===_?function(){}:_,g=e.onAlbums,h=void 0===g?function(){}:g;return x.a.createElement(i.a,null,x.a.createElement(i.a.Content,null,x.a.createElement(i.a.Header,null,r),x.a.createElement(i.a.Meta,null,a),x.a.createElement(i.a.Meta,null,s),x.a.createElement(i.a.Description,null,x.a.createElement(i.a.Meta,null,"Address"),"".concat(o," ").concat(l," ").concat(E," ").concat(S)),x.a.createElement("br",null),x.a.createElement(i.a.Description,null,x.a.createElement(i.a.Meta,null,"Phone"),d),x.a.createElement("br",null),x.a.createElement(i.a.Description,null,x.a.createElement(i.a.Meta,null,"Address"),"".concat(p,": ").concat(m," "))),x.a.createElement(i.a.Content,{extra:!0},x.a.createElement("div",{className:"ui two buttons"},x.a.createElement(c.a,{disabled:b,onClick:U.bind(null,n),basic:!0,color:"green"},"Posts"),x.a.createElement(c.a,{disabled:b,onClick:h.bind(null,n),basic:!0,color:"green"},"Albums"))))},D=Object(P.b)((function(e){return{users:d(e),selectedUser:f(e),isUsersLoading:p(e)}}),(function(e){return{getAllUsersRequest:function(t){return e({type:"USERS_GET_ALL_USERS_REQUEST"})},usersSetSelecteduser:function(t){return e(R(t))},usersGetUserPostsRequest:function(t){return e(function(e){return{type:h,payload:{id:e}}}(t))},usersGetUserAlbumsRequest:function(t){return e(function(e){return{type:g,payload:{id:e}}}(t))},usersSetShowing:function(t){return e(T(t))}}}))((function(e){var t=e.getAllUsersRequest,n=e.isUsersLoading,r=e.selectedUser,a=e.users,s=e.usersGetUserAlbumsRequest,c=e.usersGetUserPostsRequest,u=e.usersOnPageCount,E=e.usersSetSelecteduser,S=e.usersSetShowing,d=Object(w.useState)([]),f=Object(G.a)(d,2),p=f[0],m=f[1],b=Object(w.useState)(0),_=Object(G.a)(b,2),U=_[0],g=_[1],h=Object(w.useState)(0),O=Object(G.a)(h,2),v=O[0],R=O[1],j=Object(w.useState)(1),y=Object(G.a)(j,2),L=y[0],C=y[1];return Object(w.useEffect)((function(){var e=a.length%v===0?a.length/v:parseInt(a.length/v)+1;a.length&&v&&g(e)}),[g,v,a]),Object(w.useEffect)((function(){if(U&&a.length)if(L>U)C(U);else{var e=v*(L-1),t=a.slice(e,e+v);t.length&&m(t)}}),[a,v,L,U]),Object(w.useEffect)((function(){t()}),[t]),Object(w.useEffect)((function(){R(u)}),[u]),x.a.createElement("div",{className:"users"},x.a.createElement("div",{className:"users__pagination",style:{opacity:p.length?1:0}},x.a.createElement(N.a,{secondary:!0,pointing:!0,disabled:!!r,boundaryRange:0,activePage:L,ellipsisItem:null,firstItem:null,lastItem:null,siblingRange:1,totalPages:U,onPageChange:function(e,t){return n=t.activePage,void C(n);var n}}),x.a.createElement(I.a,{disabled:!!r,onChange:function(e,t){return function(e){R(parseInt(e))}(t.value)},selection:!0,floating:!0,value:v,options:[{key:2,text:"2",value:2},{key:3,text:"3",value:3},{key:4,text:"4",value:4}]})),x.a.createElement("div",{className:"users__inner"},n,x.a.createElement("div",{className:"users__container "+(n&&"users__container_loaded")},x.a.createElement(o.a,{active:!0,inverted:!0},x.a.createElement(l.a,{inverted:!0},"Waiting"))),x.a.createElement(i.a.Group,{className:"users__container "+(!n&&"users__container_loaded")},p.length>0&&p.map((function(e,t){return x.a.createElement(M,{disabled:r&&e.id!==r,onPosts:function(e){return function(e){E(e),c(e),S("posts")}(e)},onAlbums:function(e){return function(e){E(e),s(e),S("albums")}(e)},key:t,user:e})})))))}));var B=function(){return x.a.createElement(r.a,{className:"full-height",columns:2},x.a.createElement(a.a,{className:"full-height"},x.a.createElement(a.a.Row,{className:"full-height"},x.a.createElement(a.a.Column,{className:"full-height",width:6},x.a.createElement(D,{usersOnPageCount:3})),x.a.createElement(a.a.Column,{className:"full-height",width:10},x.a.createElement(k,null)))))},F=n(35),Q=n.n(F),q=n(29),W=n(182),H=n(183),J={},z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,t=arguments.length>1?arguments[1]:void 0;t.type,t.payload;return e},K=n(30);function V(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function X(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?V(n,!0).forEach((function(t){Object(K.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):V(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Y={albums:[],isContentLoading:!1,isUsersLoading:!0,posts:[],selectedUser:null,users:[],showing:null},Z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,t=arguments.length>1?arguments[1]:void 0,n=t.type,r=t.payload;switch(n){case"USERS_GET_ALL_USERS_REQUEST":return X({},e,{isUsersLoading:!0});case"USERS_GET_ALL_USERS_SUCCESS":var a=r.users;return X({},e,{users:a,isUsersLoading:!1});case"USERS_GET_ALL_USERS_FAIL":return X({},e,{isUsersLoading:!1});case"USERS_SET_SELECTED_USER":return X({},e,{selectedUser:r.id});case"USERS_CLEAR_SELECTED_USER":return X({},e,{selectedUser:null});case g:case h:return X({},e,{isContentLoading:!0});case"USERS_GET_USER_POSTS_FAIL":case"USERS_GET_USER_ALBUMS_FAIL":return X({},e,{isContentLoading:!1});case"USERS_GET_USER_POSTS_SUCCESS":return X({},e,{isContentLoading:!1,posts:r.posts});case"USERS_GET_USER_ALBUMS_SUCCESS":return X({},e,{isContentLoading:!1,albums:r.albums});case"USERS_CLEAR_CONTENT":return X({},e,{albums:[],posts:[]});case"USERS_SET_SHOWING":return X({},e,{showing:r.type});default:return e}},$=Object(q.combineReducers)({ui:z,users:Z});var ee=n(21),te=n.n(ee),ne=n(17),re=te.a.mark(ae);function ae(){return te.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ne.a)([]);case 2:case"end":return e.stop()}}),re)}var se=n(55),ce=n(56),ue=n(58),oe=n.n(ue),le=oe.a.create({baseURL:"https://jsonplaceholder.typicode.com/users"}),ie=oe.a.create({baseURL:"https://jsonplaceholder.typicode.com/posts"}),Ee=oe.a.create({baseURL:"https://jsonplaceholder.typicode.com/albums"}),Se=function(){function e(){Object(se.a)(this,e)}return Object(ce.a)(e,null,[{key:"getAllusers",value:function(){return le.get().then((function(e){return e.data}))}},{key:"getUserPosts",value:function(e){return ie.get("?userId=".concat(e)).then((function(e){return e.data}))}},{key:"getUserAlbums",value:function(e){return Ee.get("?userId=".concat(e)).then((function(e){return e.data}))}}]),e}(),de=te.a.mark(Ue),fe=te.a.mark(ge),pe=te.a.mark(he),me=te.a.mark(Oe),be=te.a.mark(ve),_e=te.a.mark(Re);function Ue(){var e;return te.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(ne.b)(Se.getAllusers);case 3:return e=t.sent,t.next=6,Object(ne.e)(O(e));case 6:t.next=12;break;case 8:return t.prev=8,t.t0=t.catch(0),t.next=12,Object(ne.e)(v());case 12:case"end":return t.stop()}}),de,null,[[0,8]])}function ge(e){var t;return te.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Object(ne.b)(Se.getUserPosts,e);case 3:return t=n.sent,n.next=6,Object(ne.e)(L(t));case 6:n.next=13;break;case 8:return n.prev=8,n.t0=n.catch(0),console.error(n.t0),n.next=13,Object(ne.e)(C());case 13:case"end":return n.stop()}}),fe,null,[[0,8]])}function he(e){var t;return te.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Object(ne.b)(Se.getUserAlbums,e);case 3:return t=n.sent,n.next=6,Object(ne.e)(j(t));case 6:n.next=13;break;case 8:return n.prev=8,n.t0=n.catch(0),console.error(n.t0),n.next=13,Object(ne.e)(y());case 13:case"end":return n.stop()}}),pe,null,[[0,8]])}function Oe(e){var t,n,r;return te.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Object(ne.f)(m);case 2:if(!(t=a.sent).length){a.next=7;break}return a.next=6,Object(ne.e)(L(t));case 6:return a.abrupt("return",a.sent);case 7:return n=e.payload.id,a.next=10,Object(ne.d)(ge,n);case 10:return r=a.sent,a.next=13,Object(ne.g)(g);case 13:return a.next=15,Object(ne.c)(r);case 15:case"end":return a.stop()}}),me)}function ve(e){var t,n,r;return te.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Object(ne.f)(b);case 2:if(!(t=a.sent).length){a.next=7;break}return a.next=6,Object(ne.e)(j(t));case 6:return a.abrupt("return",a.sent);case 7:return n=e.payload.id,a.next=10,Object(ne.d)(he,n);case 10:return r=a.sent,a.next=13,Object(ne.g)(h);case 13:return a.next=15,Object(ne.c)(r);case 15:case"end":return a.stop()}}),be)}function Re(){return te.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=ne.a,e.next=3,Object(ne.h)("USERS_GET_ALL_USERS_REQUEST",Ue);case 3:return e.t1=e.sent,e.next=6,Object(ne.h)("USERS_GET_USER_POSTS_REQUEST",Oe);case 6:return e.t2=e.sent,e.next=9,Object(ne.h)("USERS_GET_USER_ALBUMS_REQUEST",ve);case 9:return e.t3=e.sent,e.t4=[e.t1,e.t2,e.t3],e.next=13,(0,e.t0)(e.t4);case 13:case"end":return e.stop()}}),_e)}var je=te.a.mark(ye);function ye(){return te.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ne.a)([ae(),Re()]);case 2:case"end":return e.stop()}}),je)}var Le=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(H.a)(),n=[t];return{store:Object(q.createStore)($,e,Object(W.composeWithDevTools)(q.applyMiddleware.apply(void 0,n))),sagaMiddleware:t}}(),Ce=Le.store;Le.sagaMiddleware.run(ye);var Te=x.a.createElement(P.a,{store:Ce},x.a.createElement(B,null));Q.a.render(Te,document.getElementById("root"))}},[[194,1,2]]]);
//# sourceMappingURL=main.318a07eb.chunk.js.map