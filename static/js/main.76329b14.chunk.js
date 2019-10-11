(this["webpackJsonpsaga-test"]=this["webpackJsonpsaga-test"]||[]).push([[0],{335:function(e,t,n){e.exports=n(530)},337:function(e,t,n){},338:function(e,t,n){},340:function(e,t,n){},511:function(e,t,n){},530:function(e,t,n){"use strict";n.r(t);n(336),n(337),n(338),n(339);var r=n(572),a=n(313),s=(n(340),n(213)),c=n(162),u=n(46),o=n(531),i=n(569),l=n(153),f=n(42),d=Object(f.a)((function(e){return e.ui}),(function(e){return e.isOnline})),p=function(e){return e.users},b=Object(f.a)(p,(function(e){return e.users})),E=Object(f.a)(p,(function(e){return e.selectedUser})),m=Object(f.a)(p,(function(e){return e.isUsersLoading})),S=Object(f.a)(p,(function(e){return e.posts})),O=Object(f.a)(p,(function(e){return e.albums})),g=Object(f.a)(p,(function(e){return e.isContentLoading})),v=Object(f.a)(p,(function(e){return e.showing})),h=Object(f.a)(p,(function(e){return e.viewedUsers})),j=Object(f.a)(p,(function(e){return e.usersEdge})),_=Object(f.a)([b,h],(function(e,t){return e.filter((function(e){return t.includes(e.id)}))})),U="USERS_GET_USER_ALBUMS_REQUEST",w="USERS_GET_USER_ALBUMS_SUCCESS",y="USERS_GET_USER_ALBUMS_FAIL",x="USERS_GET_USER_POSTS_REQUEST",R="USERS_GET_USER_POSTS_SUCCESS",L="USERS_GET_USER_POSTS_FAIL",k="USERS_CLEAR_CONTENT",T=function(e){return{type:"USERS_GET_ALL_USERS_SUCCESS",payload:{users:e}}},C=function(){return{type:"USERS_GET_ALL_USERS_FAIL"}},P=function(e){return{type:"USERS_SET_SELECTED_USER",payload:{id:e}}},A=function(e){return{type:w,payload:{albums:e}}},N=function(){return{type:y}},I=function(e){return{type:R,payload:{posts:e}}},G=function(){return{type:L}},D=function(e){return{type:"USERS_SET_SHOWING",payload:{type:e}}},M=function(e){return{type:"UI_SET_IS_ONLINE",payload:{isOnline:e}}},z=n(0),Q=n.n(z),q=function(){return Q.a.createElement("div",{style:{position:"absolute",left:0,right:0,top:0,bottom:0,background:"#cccccc2e",zIndex:9999}})},F=function(e){var t=e.post,n=t.title,r=t.body;return Q.a.createElement(l.a,{className:"full-width"},Q.a.createElement(l.a.Content,{header:n}),Q.a.createElement(l.a.Content,{description:r}))},B=n(99),W=Object(B.b)((function(e){return{selectedUser:E(e),posts:S(e),albums:O(e),isContentLoading:g(e),showing:v(e),isOnLine:d(e)}}),(function(e){return{usersSetSelecteduser:function(t){return e(P(t))},usersClearContent:function(t){return e({type:k})},usersSetShowing:function(t){return e(D(t))}}}))((function(e){var t=e.albums,n=e.isContentLoading,r=e.isOnLine,a=e.posts,f=e.selectedUser,d=e.showing,p=e.usersClearContent,b=e.usersSetSelecteduser,E=e.usersSetShowing;return Q.a.createElement(Q.a.Fragment,null,f&&Q.a.createElement(s.a,{className:"content full-height"},!r&&Q.a.createElement(q,null),Q.a.createElement("div",{className:"content__header"},Q.a.createElement(c.a,{onClick:function(){p(),b(null),E(null)},icon:!0},Q.a.createElement(u.a,{name:"times"}))),Q.a.createElement("div",{className:"content__inner"},n&&Q.a.createElement(o.a,{active:!0,inverted:!0},Q.a.createElement(i.a,{inverted:!0},"Waiting")),!n&&"posts"===d&&Q.a.createElement("div",{className:"content__info"},a.map((function(e,t){return Q.a.createElement(F,{post:e,key:t})}))),!n&&"albums"===d&&Q.a.createElement(l.a.Group,{itemsPerRow:4},t.map((function(e,t){return Q.a.createElement(l.a,{key:t,color:"green"},Q.a.createElement(l.a.Content,null,Q.a.createElement(l.a.Description,null,e.title)))}))))))})),H=n(55),J=n(125),Y=(n(511),n(570)),K=n(571),V=function(e){var t=e.user,n=t.id,r=t.name,a=t.username,s=t.email,u=t.address,o=u.street,i=u.suite,f=u.city,d=u.zipcode,p=t.phone,b=t.company,E=b.name,m=b.catchPhrase,S=e.disabled,O=e.onPosts,g=void 0===O?function(){}:O,v=e.onAlbums,h=void 0===v?function(){}:v;return Q.a.createElement(l.a,null,Q.a.createElement(l.a.Content,null,Q.a.createElement(l.a.Header,null,r),Q.a.createElement(l.a.Meta,null,a),Q.a.createElement(l.a.Meta,null,s),Q.a.createElement(l.a.Description,null,Q.a.createElement(l.a.Meta,null,"Address"),"".concat(o," ").concat(i," ").concat(f," ").concat(d)),Q.a.createElement("br",null),Q.a.createElement(l.a.Description,null,Q.a.createElement(l.a.Meta,null,"Phone"),p),Q.a.createElement("br",null),Q.a.createElement(l.a.Description,null,Q.a.createElement(l.a.Meta,null,"Address"),"".concat(E,": ").concat(m," "))),Q.a.createElement(l.a.Content,{extra:!0},Q.a.createElement("div",{className:"ui two buttons"},Q.a.createElement(c.a,{disabled:S,onClick:g.bind(null,n),basic:!0,color:"green"},"Posts"),Q.a.createElement(c.a,{disabled:S,onClick:h.bind(null,n),basic:!0,color:"green"},"Albums"))))},X=Object(B.b)((function(e){return{users:b(e),selectedUser:E(e),isUsersLoading:m(e),isOnLine:d(e)}}),(function(e){return{getAllUsersRequest:function(t){return e({type:"USERS_GET_ALL_USERS_REQUEST"})},usersSetSelecteduser:function(t){return e(P(t))},usersGetUserPostsRequest:function(t){return e(function(e){return{type:x,payload:{id:e}}}(t))},usersGetUserAlbumsRequest:function(t){return e(function(e){return{type:U,payload:{id:e}}}(t))},usersSetShowing:function(t){return e(D(t))}}}))((function(e){var t=e.getAllUsersRequest,n=e.isUsersLoading,r=e.selectedUser,a=e.users,s=e.usersGetUserAlbumsRequest,c=e.usersGetUserPostsRequest,u=e.usersOnPageCount,f=e.usersSetSelecteduser,d=e.usersSetShowing,p=e.isOnLine,b=Object(z.useState)([]),E=Object(J.a)(b,2),m=E[0],S=E[1],O=Object(z.useState)(0),g=Object(J.a)(O,2),v=g[0],h=g[1],j=Object(z.useState)(0),_=Object(J.a)(j,2),U=_[0],w=_[1],y=Object(z.useState)(1),x=Object(J.a)(y,2),R=x[0],L=x[1];return Object(z.useEffect)((function(){var e=a.length%U===0?a.length/U:parseInt(a.length/U)+1;a.length&&U&&h(e)}),[h,U,a]),Object(z.useEffect)((function(){if(v&&a.length)if(R>v)L(v);else{var e=U*(R-1),t=a.slice(e,e+U);t.length&&S(t)}}),[a,U,R,v]),Object(z.useEffect)((function(){t()}),[t]),Object(z.useEffect)((function(){w(u)}),[u]),Q.a.createElement("div",{className:"users"},!p&&Q.a.createElement(q,null),Q.a.createElement("div",{className:"users__pagination",style:{opacity:m.length?1:0}},Q.a.createElement(Y.a,{secondary:!0,pointing:!0,disabled:!!r,boundaryRange:0,activePage:R,ellipsisItem:null,firstItem:null,lastItem:null,siblingRange:1,totalPages:v,onPageChange:function(e,t){return n=t.activePage,void L(n);var n}}),Q.a.createElement(K.a,{disabled:!!r,onChange:function(e,t){return function(e){w(parseInt(e))}(t.value)},selection:!0,floating:!0,value:U,options:[{key:2,text:"2",value:2},{key:3,text:"3",value:3},{key:4,text:"4",value:4}]})),Q.a.createElement("div",{className:"users__inner"},n,Q.a.createElement("div",{className:"users__container "+(n&&"users__container_loaded")},Q.a.createElement(o.a,{active:!0,inverted:!0},Q.a.createElement(i.a,{inverted:!0},"Waiting"))),Q.a.createElement(l.a.Group,{className:"users__container "+(!n&&"users__container_loaded")},m.length>0&&m.map((function(e,t){return Q.a.createElement(V,{disabled:r&&e.id!==r,onPosts:function(e){return function(e){f(e),c(e),d("posts")}(e)},onAlbums:function(e){return function(e){f(e),s(e),d("albums")}(e)},key:t,user:e})})))))}));var Z=function(){return Q.a.createElement(Q.a.Fragment,null,Q.a.createElement(r.a,{className:"full-height",columns:2},Q.a.createElement(a.a,{className:"full-height"},Q.a.createElement(a.a.Row,{className:"full-height"},Q.a.createElement(a.a.Column,{className:"full-height",width:6},Q.a.createElement(X,{usersOnPageCount:3})),Q.a.createElement(a.a.Column,{className:"full-height",width:10},Q.a.createElement(W,null))))),Q.a.createElement(H.SemanticToastContainer,{position:"bottom-right"}))},$=n(60),ee=n.n($),te=n(52),ne=n(322),re=n(175),ae=n(44);function se(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function ce(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?se(n,!0).forEach((function(t){Object(ae.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):se(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var ue={isOnline:!0},oe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ue,t=arguments.length>1?arguments[1]:void 0,n=t.type,r=t.payload;switch(n){case"UI_SET_IS_ONLINE":var a=r.isOnline;return ce({},e,{isOnline:a});default:return e}},ie=n(217);function le(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function fe(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?le(n,!0).forEach((function(t){Object(ae.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):le(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var de={albums:[],isContentLoading:!1,isUsersLoading:!0,posts:[],selectedUser:null,users:[],showing:null,viewedUsers:[],usersEdge:3},pe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:de,t=arguments.length>1?arguments[1]:void 0,n=t.type,r=t.payload;switch(n){case"USERS_GET_ALL_USERS_REQUEST":return fe({},e,{isUsersLoading:!0});case"USERS_GET_ALL_USERS_SUCCESS":var a=r.users;return fe({},e,{users:a,isUsersLoading:!1});case"USERS_GET_ALL_USERS_FAIL":return fe({},e,{isUsersLoading:!1});case"USERS_SET_SELECTED_USER":var s=r.id;return fe({},e,{selectedUser:s});case"USERS_CLEAR_SELECTED_USER":return fe({},e,{selectedUser:null});case U:case x:return fe({},e,{isContentLoading:!0});case L:case y:return fe({},e,{isContentLoading:!1});case R:var c=e.viewedUsers,u=e.selectedUser;return fe({},e,{isContentLoading:!1,posts:r.posts,viewedUsers:u&&-1===c.indexOf(u)?[].concat(Object(ie.a)(c),[u]):c});case w:var o=e.viewedUsers,i=e.selectedUser;return fe({},e,{isContentLoading:!1,albums:r.albums,viewedUsers:i&&-1===o.indexOf(i)?[].concat(Object(ie.a)(o),[i]):o});case k:return fe({},e,{albums:[],posts:[]});case"USERS_SET_SHOWING":return fe({},e,{showing:r.type});default:return e}},be=Object(te.combineReducers)({ui:oe,users:pe});var Ee=n(25),me=n.n(Ee),Se=n(19),Oe=me.a.mark(ye),ge=me.a.mark(xe),ve=me.a.mark(Re),he=me.a.mark(Le),je=me.a.mark(ke),_e=me.a.mark(Te),Ue=me.a.mark(Ce);function we(){return Object(re.b)((function(e){var t=function(){e(!0)},n=function(){e(!1)};return window.addEventListener("online",t),window.addEventListener("offline",n),function(){window.removeEventListener("online",t),window.removeEventListener("offline",n)}}))}function ye(){var e,t;return me.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(Se.b)(we);case 2:e=n.sent;case 3:return n.next=6,Object(Se.g)(e);case 6:return t=n.sent,n.next=9,Object(Se.e)(M(t));case 9:t?Object(H.toast)({title:"Now you are online!!",description:Q.a.createElement("p",null,"Take a chance to do somethins awesome!"),size:"small"}):Object(H.toast)({title:"Now you are offline (:",description:Q.a.createElement("p",null,"Take a rest. Sure, soon you will be able to do somethig awesome!"),size:"small",type:"warning"},(function(){}),(function(){}),(function(){})),n.next=3;break;case 12:case"end":return n.stop()}}),Oe)}function xe(){return me.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,Object(Se.g)(L);case 3:Object(H.toast)({title:"Error loading posts",description:Q.a.createElement("p",null,"This is a Semantic UI toast"),size:"small",type:"warning"}),e.next=0;break;case 6:case"end":return e.stop()}}),ge)}function Re(){return me.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,Object(Se.g)(y);case 3:Object(H.toast)({title:"Error loading albums",description:Q.a.createElement("p",null,"This is a Semantic UI toast"),size:"small",type:"warning"}),e.next=0;break;case 6:case"end":return e.stop()}}),ve)}function Le(){return me.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,Object(Se.g)(x);case 3:return e.next=5,Object(Se.f)(S);case 5:if(e.sent.length){e.next=10;break}return e.next=9,Object(Se.g)(R);case 9:Object(H.toast)({title:"Posts loaded successfull",description:Q.a.createElement("p",null,"This is a Semantic UI toast"),size:"small"});case 10:e.next=0;break;case 12:case"end":return e.stop()}}),he)}function ke(){return me.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,Object(Se.g)(U);case 3:return e.next=5,Object(Se.f)(O);case 5:if(e.sent.length){e.next=10;break}return e.next=9,Object(Se.g)(w);case 9:Object(H.toast)({title:"Ablums loaded successfull",description:Q.a.createElement("p",null,"This is a Semantic UI toast"),size:"small"});case 10:e.next=0;break;case 12:case"end":return e.stop()}}),je)}function Te(){var e,t,n,r;return me.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=3,Object(Se.g)([R,w]);case 3:return a.next=5,Object(Se.f)(h);case 5:return e=a.sent,a.next=8,Object(Se.f)(j);case 8:if(t=a.sent,e.length!==t){a.next=15;break}return a.next=12,Object(Se.f)(_);case 12:n=a.sent,r=n.map((function(e){return e.name})),Object(H.toast)({title:"Congratulatin! You have shown three users!",description:Q.a.createElement("p",null,"Users: ",r.join(", ")),size:"massive",time:3e3});case 15:a.next=0;break;case 17:case"end":return a.stop()}}),_e)}function Ce(){return me.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Se.a)([ye(),xe(),Le(),Re(),ke(),Te()]);case 2:case"end":return e.stop()}}),Ue)}var Pe=n(92),Ae=n(93),Ne=n(98),Ie=n.n(Ne),Ge=Ie.a.create({baseURL:"https://jsonplaceholder.typicode.com/users"}),De=Ie.a.create({baseURL:"https://jsonplaceholder.typicode.com/posts"}),Me=Ie.a.create({baseURL:"https://jsonplaceholder.typicode.com/albums"}),ze=function(){function e(){Object(Pe.a)(this,e)}return Object(Ae.a)(e,null,[{key:"getAllusers",value:function(){return Ge.get().then((function(e){return e.data}))}},{key:"getUserPosts",value:function(e){return De.get("?userId=".concat(e)).then((function(e){return e.data}))}},{key:"getUserAlbums",value:function(e){return Me.get("?userId=".concat(e)).then((function(e){return e.data}))}}]),e}(),Qe=me.a.mark(Je),qe=me.a.mark(Ye),Fe=me.a.mark(Ke),Be=me.a.mark(Ve),We=me.a.mark(Xe),He=me.a.mark(Ze);function Je(){var e;return me.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(Se.b)(ze.getAllusers);case 3:return e=t.sent,t.next=6,Object(Se.e)(T(e));case 6:t.next=12;break;case 8:return t.prev=8,t.t0=t.catch(0),t.next=12,Object(Se.e)(C());case 12:case"end":return t.stop()}}),Qe,null,[[0,8]])}function Ye(e){var t;return me.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Object(Se.b)(ze.getUserPosts,e);case 3:return t=n.sent,n.next=6,Object(Se.e)(I(t));case 6:n.next=13;break;case 8:return n.prev=8,n.t0=n.catch(0),console.error(n.t0),n.next=13,Object(Se.e)(G());case 13:case"end":return n.stop()}}),qe,null,[[0,8]])}function Ke(e){var t;return me.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Object(Se.b)(ze.getUserAlbums,e);case 3:return t=n.sent,n.next=6,Object(Se.e)(A(t));case 6:n.next=13;break;case 8:return n.prev=8,n.t0=n.catch(0),console.error(n.t0),n.next=13,Object(Se.e)(N());case 13:case"end":return n.stop()}}),Fe,null,[[0,8]])}function Ve(e){var t,n,r;return me.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Object(Se.f)(S);case 2:if(!(t=a.sent).length){a.next=7;break}return a.next=6,Object(Se.e)(I(t));case 6:return a.abrupt("return",a.sent);case 7:return n=e.payload.id,a.next=10,Object(Se.d)(Ye,n);case 10:return r=a.sent,a.next=13,Object(Se.g)([U,k]);case 13:return a.next=15,Object(Se.c)(r);case 15:case"end":return a.stop()}}),Be)}function Xe(e){var t,n,r;return me.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Object(Se.f)(O);case 2:if(!(t=a.sent).length){a.next=7;break}return a.next=6,Object(Se.e)(A(t));case 6:return a.abrupt("return",a.sent);case 7:return n=e.payload.id,a.next=10,Object(Se.d)(Ke,n);case 10:return r=a.sent,a.next=13,Object(Se.g)([U,k]);case 13:return a.next=15,Object(Se.c)(r);case 15:case"end":return a.stop()}}),We)}function Ze(){return me.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=Se.a,e.next=3,Object(Se.h)("USERS_GET_ALL_USERS_REQUEST",Je);case 3:return e.t1=e.sent,e.next=6,Object(Se.h)("USERS_GET_USER_POSTS_REQUEST",Ve);case 6:return e.t2=e.sent,e.next=9,Object(Se.h)("USERS_GET_USER_ALBUMS_REQUEST",Xe);case 9:return e.t3=e.sent,e.t4=[e.t1,e.t2,e.t3],e.next=13,(0,e.t0)(e.t4);case 13:case"end":return e.stop()}}),He)}var $e=me.a.mark(et);function et(){return me.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Se.a)([Ce(),Ze()]);case 2:case"end":return e.stop()}}),$e)}var tt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(re.a)(),n=[t];return{store:Object(te.createStore)(be,e,Object(ne.composeWithDevTools)(te.applyMiddleware.apply(void 0,n))),sagaMiddleware:t}}(),nt=tt.store;tt.sagaMiddleware.run(et);var rt=Q.a.createElement(B.a,{store:nt},Q.a.createElement(Z,null));ee.a.render(rt,document.getElementById("root"))}},[[335,1,2]]]);
//# sourceMappingURL=main.76329b14.chunk.js.map