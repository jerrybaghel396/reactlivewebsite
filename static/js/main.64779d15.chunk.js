(this.webpackJsonptut=this.webpackJsonptut||[]).push([[0],[,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),s=n(3),a=n.n(s),o=(n(12),n(4)),i=n(5),u=n(7),h=n(6),l=(n.p,n(13),n(14),n(0));var j=function(e){return Object(l.jsxs)("div",{className:"card-container",children:[Object(l.jsx)("img",{src:"https://robohash.org/".concat(e.monster.id,"?set=set4&size=190x180"),alt:"monsters"}),Object(l.jsx)("h1",{children:e.monster.name}),Object(l.jsx)("p",{children:e.monster.email})]})};var d=function(e){return Object(l.jsx)("div",{className:"card-list",children:e.monsters.map((function(e){return Object(l.jsx)(j,{monster:e},e.id)}))})};n(16);var m=function(e){var t=e.placeholder,n=e.handlechange;return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("input",{className:"search",type:"search",placeholder:t,onChange:n})})},b=(n(17),function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).state={monsters:[],searchField:""},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({monsters:t})}))}},{key:"render",value:function(){var e=this,t=this.state,n=t.monsters,c=t.searchField,r=n.filter((function(e){return e.name.toLowerCase().includes(c.toLowerCase())}));return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)("h1",{className:"title",children:"MALKIN ROLODEX"}),Object(l.jsx)(m,{type:"search",placeholder:"enter monster",handlechange:function(t){return e.setState({searchField:t.target.value})}}),Object(l.jsx)(d,{monsters:r})]})})}}]),n}(c.Component)),f=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),c(e),r(e),s(e),a(e)}))};a.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(b,{})}),document.getElementById("root")),f()}],[[18,1,2]]]);
//# sourceMappingURL=main.64779d15.chunk.js.map