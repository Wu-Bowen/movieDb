(this.webpackJsonpmoviedb=this.webpackJsonpmoviedb||[]).push([[0],{55:function(e,t,n){},56:function(e,t,n){},92:function(e,t,n){},99:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),c=n(4),o=n.n(c),s=(n(55),n(46)),r=n(19),l=(n(56),n(2)),d=function(e){var t,n=e.title,a=e.poster_path,i=e.overview,c=e.vote_average;return Object(l.jsxs)("div",{className:"movie",children:[Object(l.jsx)("img",{src:a?"https://image.tmdb.org/t/p/w1280"+a:"https://images.unsplash.com/photo-1542204165-65bf26472b9b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80",alt:n}),Object(l.jsxs)("div",{className:"movie-info",children:[Object(l.jsx)("h3",{children:n}),Object(l.jsx)("span",{className:"tag ".concat((t=c,t>=8?"green":t>=6?"orange":0==t?"na":"red")),children:0===c?"N/A":c})]}),Object(l.jsxs)("div",{className:"movie-hover",children:[Object(l.jsx)("h2",{children:" Summary: "}),Object(l.jsxs)("p",{children:[" ",i," "]})]})]})},b=n(42),u=n.n(b),h=(n(91),n(92),function(e){return e.preventDefault()});var j=function(e){var t=e.id,n=Object(a.useState)([]),i=Object(r.a)(n,2),c=i[0],o=i[1],s="https://api.themoviedb.org/3/movie/".concat(t,"/credits?api_key=").concat("189ca95032984aa8b4eb88bd864c72e2","&language=en-US"),d=c.map((function(e){return Object(l.jsxs)("div",{className:"carouselItem",children:[Object(l.jsx)("img",{src:e.profile_path?"".concat("https://image.tmdb.org/t/p/w300").concat(e.profile_path):"https://upload.wikimedia.org/wikipedia/en/6/60/No_Picture.jpg",alt:null===e||void 0===e?void 0:e.name,onDragStart:h,className:"carouselItem__img"}),Object(l.jsx)("b",{className:"carouselItem__txt",children:null===e||void 0===e?void 0:e.name})]})}));return Object(a.useEffect)((function(){fetch(s).then((function(e){return e.json()})).then((function(e){o(e.cast)}))}),[]),Object(l.jsx)(u.a,{mouseTracking:!0,infinite:!0,disableDotsControls:!0,disableButtonsControls:!0,responsive:{0:{items:3},512:{items:5},1024:{items:7}},items:d,autoPlay:!0})},m=n(43),p=n.n(m),f=n(124),v=n(123),g=n(101),O=n(125),x=n(45),w=n.n(x),_=n(120),y="https://api.themoviedb.org/3/search/movie?&api_key=189ca95032984aa8b4eb88bd864c72e2&query=",N="https://image.tmdb.org/t/p/w500",k=Object(_.a)((function(e){return{modal:{display:"flex",alignItems:"center",justifyContent:"center"},paper:{width:"90%",height:"80%",backgroundColor:"#39445a",border:"1px solid #282c34",borderRadius:10,color:"white",boxShadow:e.shadows[5],padding:e.spacing(1,1,3)}}}));var C=function(){var e=k(),t=Object(a.useState)([]),n=Object(r.a)(t,2),i=n[0],c=n[1],o=Object(a.useState)(""),b=Object(r.a)(o,2),u=b[0],h=b[1],m=Object(a.useState)(!1),x=Object(r.a)(m,2),_=x[0],C=x[1],S=Object(a.useState)({}),M=Object(r.a)(S,2),D=M[0],B=M[1],I=Object(a.useState)({}),F=Object(r.a)(I,2),P=F[0],T=F[1];Object(a.useEffect)((function(){if(window.location.href.includes("search?=")){var e=y+window.location.href.substring(window.location.href.indexOf("search?=")+8);A(e)}else A("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=189ca95032984aa8b4eb88bd864c72e2")}),[]);var A=function(e){fetch(e).then((function(e){return e.json()})).then((function(e){c(e.results)}))};return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("header",{children:[Object(l.jsx)(p.a,{style:{visibility:"hidden"}}),Object(l.jsx)("button",{type:"button",className:"title",onClick:function(){return window.location=window.location.origin+"/movieDb/"},children:"MovieDB"}),Object(l.jsx)("form",{onSubmit:function(e){e.preventDefault(),u&&(A(y+u),h(""),window.history.pushState({},null,window.location.href.split("/")[0]+"search?="+u))},children:Object(l.jsx)("input",{className:"search",type:"search",placeholder:"Search Movies...",value:u,onChange:function(e){h(e.target.value)}})})]}),Object(l.jsx)("div",{className:"movie-container",children:i.length>0&&i.map((function(e){return Object(l.jsx)("button",{type:"button",className:"button",onClick:function(){return function(e){B(e),fetch("https://api.themoviedb.org/3/movie/".concat(e.id,"/videos?api_key=").concat("189ca95032984aa8b4eb88bd864c72e2","&language=en-US")).then((function(e){return e.json()})).then((function(e){var t;T(null===(t=e.results[0])||void 0===t?void 0:t.key)})),C(!0)}(e)},children:Object(l.jsx)(d,Object(s.a)({},e))},e.id)}))}),Object(l.jsx)(f.a,{"aria-labelledby":"transition-modal-title","aria-describedby":"transition-modal-description",className:e.modal,open:_,onClose:function(){C(!1)},closeAfterTransition:!0,BackdropComponent:v.a,BackdropProps:{timeout:500},children:Object(l.jsx)(g.a,{in:_,children:D&&Object(l.jsx)("div",{className:e.paper,children:Object(l.jsxs)("div",{className:"ContentModal",children:[Object(l.jsx)("img",{src:D.poster_path?N+D.poster_path:"https://www.movienewz.com/img/films/poster-holder.jpg",alt:D.name||D.title,className:"ContentModal__portrait"}),Object(l.jsx)("img",{src:D.backdrop_path?N+D.backdrop_path:"https://user-images.githubusercontent.com/10515204/56117400-9a911800-5f85-11e9-878b-3f998609a6c8.jpg",alt:D.name||D.title,className:"ContentModal__landscape"}),Object(l.jsxs)("div",{className:"ContentModal__about",children:[Object(l.jsxs)("span",{className:"ContentModal__title",children:[D.name||D.title," (",(D.first_air_date||D.release_date||"-----").substring(0,4),")"]}),D.tagline&&Object(l.jsx)("i",{className:"tagline",children:D.tagline}),Object(l.jsx)("span",{className:"ContentModal__description",children:D.overview}),Object(l.jsx)("div",{children:Object(l.jsx)(j,{id:D.id})}),Object(l.jsx)(O.a,{variant:"contained",startIcon:Object(l.jsx)(w.a,{}),color:"secondary",target:"__blank",href:"https://www.youtube.com/watch?v=".concat(P),children:"Watch the Trailer"})]})]})})})})]})},S=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,127)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),a(e),i(e),c(e),o(e)}))};o.a.render(Object(l.jsx)(i.a.StrictMode,{children:Object(l.jsx)(C,{})}),document.getElementById("root")),S()}},[[99,1,2]]]);
//# sourceMappingURL=main.b4e07e32.chunk.js.map