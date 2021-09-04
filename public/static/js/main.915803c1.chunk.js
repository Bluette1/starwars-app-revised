(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{110:function(e,t,n){},132:function(e,t,n){},134:function(e,t,n){"use strict";n.r(t);var r=n(22),a=n(2),c=n.n(a),s=n(97),o=n.n(s),l=n(14),i=n(26),j=(n(110),n(13)),m=n(35),d=n(36),u=n(39),b=n(38),p=n(3),O=function(e){Object(u.a)(n,e);var t=Object(b.a)(n);function n(){return Object(m.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(p.jsx)("div",{children:"Me View"})}}]),n}(a.Component),h=n(68),g=n(105),f=n(25),x=n(72),v=n(103),y=Object(v.a)((function(e,t){var n=t.headers,r=localStorage.getItem("token");return{headers:Object(x.a)(Object(x.a)({},n),{},{authorization:r?"Bearer ".concat(r):""})}}));var w,N,k=n(73),I=c.a.lazy((function(){return n.e(3).then(n.bind(null,137))})),A=Object(j.gql)(w||(w=Object(r.a)(["\n  query People($page: Int) {\n    people(page: $page) {\n      name\n      height\n      gender\n      homeworld\n    }\n  }\n"]))),S=Object(j.gql)(N||(N=Object(r.a)(["\n  query MyPeople {\n    myPeople {\n      name\n    }\n  }\n"]))),C=Object(g.a)(Object(h.graphql)(S,{name:"myPeopleData",options:{context:y}}),Object(h.graphql)(A,{name:"pageData",options:{context:y,variables:{page:1}}}))((function(e){var t=e.pageData,n=e.myPeopleData;if(t.error||n.error)return console.log("Error while getting data"),null;if(t.loading||n.loading)return Object(p.jsx)("p",{children:"Loading..."});var r,c=Object(k.a)(f.c).setFavourites,s=(r=f.e,{getPeople:function(){var e=parseInt(Object(f.b)(),10),t=r();return t[e]?t[e]:[]},setPeople:function(e,t){var n=r();n[e]=t,localStorage.setItem("peopleData",JSON.stringify(n)),r(n)}}),o=s.getPeople,l=s.setPeople;l(1,t.people);var i=[];return n.myPeople.forEach((function(e){return i.push(e.name)})),c(i),Object(p.jsx)(a.Suspense,{fallback:Object(p.jsx)("p",{children:"Loading..."}),children:Object(p.jsx)(I,{refetch:t.refetch,setPeople:l,getPeople:o})})})),D=n(48),L=n.n(D),P=n(104),F=n.n(P),q=n(40);function M(){return Object(p.jsx)("div",{style:{textAlign:"center"},children:Object(p.jsx)("button",{className:"btn btn-secondary",type:"submit",onClick:function(){window.location.href="/"},children:"Back"})})}var E,K=n(95);function B(){return Object(p.jsxs)("div",{className:"d-flex m-md-0 m-1",children:["Is a favourite:\xa0",Object(p.jsx)("img",{className:"mt-n2",role:"presentation",src:K.a,alt:"Like icon"})]})}var V=Object(j.gql)(E||(E=Object(r.a)(["\n  query PersonDetails($name: String!) {\n    personDetails(name: $name) {\n      name\n      height\n      gender\n      homeworld\n      eyeColor\n      hairColor\n      skinColor\n      films\n      species\n      vehicles\n      starships\n      url\n    }\n  }\n"]))),G=function(e){var t=e.location,n=!1,r=F.a.parse(t.search),a=r.search;r.favourite&&(n=!0);var c=Object(j.useQuery)(V,{variables:{name:a},context:y}),s=c.loading,o=c.error,l=c.data;if(s)return Object(p.jsx)("p",{children:"Loading..."});if(o)return Object(p.jsx)("p",{children:"Error :( ".concat(o)});var i=l.personDetails,m=i.name,d=i.height,u=i.gender,b=i.homeworld,O=i.eyeColor,h=i.hairColor,g=i.skinColor,f=i.films,x=i.species,v=i.vehicles,w=i.starships,N=i.url;return Object(p.jsxs)("div",{className:"pt-5 mb-3",children:[Object(p.jsx)(M,{}),Object(p.jsxs)("div",{className:"d-md-flex justify-content-md-between",children:[Object(p.jsxs)("h1",{className:"display-4 my-5",children:[Object(p.jsx)("span",{className:"text-dark",children:"Name: "}),m]}),Object(p.jsx)("div",{className:"p-md-5",children:n?Object(p.jsx)(B,{}):null})]}),Object(p.jsx)("h4",{className:"mb-3",children:"Person Details"}),Object(p.jsxs)("p",{children:["Height:\xa0",d]}),Object(p.jsxs)("p",{children:["Gender:\xa0",u]}),Object(p.jsxs)("p",{children:["Homeworld:\xa0Planet ID No\xa0",Object(p.jsx)("a",{style:{textDecoration:"underline"},href:b,target:"_blank",rel:"noopener noreferrer",children:Object(q.b)(b)})]}),Object(p.jsxs)("ul",{className:"list-group",children:[Object(p.jsxs)("li",{className:"list-group-item",children:["Eye color:\xa0",O]}),Object(p.jsxs)("li",{className:"list-group-item",children:["Hair color:\xa0",h]}),Object(p.jsxs)("li",{className:"list-group-item",children:["Skin color:\xa0",g]})]}),Object(p.jsx)("h4",{className:"my-3",children:"More details"}),Object(p.jsxs)("ul",{className:"list-group",children:[Object(p.jsxs)("li",{className:"list-group-item",children:["Film IDs:\xa0",f.map((function(e){return Object(p.jsx)(q.a,{link:e},"film-".concat(L()()))}))]}),Object(p.jsxs)("li",{className:"list-group-item",children:["Species IDs:\xa0",x.map((function(e){return Object(p.jsx)(q.a,{link:e},"species-".concat(L()()))}))]}),Object(p.jsxs)("li",{className:"list-group-item",children:["Vehicles IDs:\xa0",v.map((function(e){return Object(p.jsx)(q.a,{link:e},"vehicle-".concat(L()()))}))]}),Object(p.jsxs)("li",{className:"list-group-item",children:["Starship IDs:\xa0",w.map((function(e){return Object(p.jsx)(q.a,{link:e},"vehicle-".concat(L()()))}))]})]}),Object(p.jsxs)("h4",{className:"mb-3",children:["Person Url:\xa0",Object(p.jsx)("a",{href:N,target:"_blank",rel:"noopener noreferrer",children:N})]}),Object(p.jsx)("hr",{}),Object(p.jsx)(M,{})]})},H=n.p+"static/media/star-wars-logo.057103d6.svg";n(132);var T,R,X=function(){return Object(p.jsx)("div",{className:"header",children:Object(p.jsx)("img",{src:H,alt:"StarWars",style:{width:"300px",margin:"auto",display:"block"}})})},Q=function(e){Object(u.a)(n,e);var t=Object(b.a)(n);function n(){return Object(m.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(p.jsxs)("div",{children:[Object(p.jsx)(X,{}),Object(p.jsx)(l.a,{exact:!0,path:"/me",component:O}),Object(p.jsx)(l.a,{exact:!0,path:"/",component:C}),Object(p.jsx)(l.a,{exact:!0,path:"/people",component:C}),Object(p.jsx)(l.a,{exact:!0,path:"/person",component:G})]})}}]),n}(a.Component),U=n(49),J=function(){return Object(p.jsx)(i.b,{to:"/register",className:"btn btn-secondary",children:"Register"})},W=Object(j.gql)(T||(T=Object(r.a)(["\n  mutation Login($email: String!, $password: String!) {\n    login(email: $email, password: $password) {\n      id\n      token\n    }\n  }\n"]))),z=function(){var e=Object(l.e)(),t=Object(j.useMutation)(W,{onCompleted:function(t){var n=t.login;n?(localStorage.setItem("token",n.token),localStorage.setItem("userId",n.id),Object(f.d)(!0),e.push("/"),window.location.reload()):alert("Login failed. Please register first before trying to login.")}}),n=Object(U.a)(t,2),r=n[0],a=n[1],c=a.loading,s=a.error;return c?Object(p.jsx)("h4",{children:"Loading..."}):s?Object(p.jsx)("p",{children:"An error occurred"}):Object(p.jsx)("div",{className:"row m-md-0 m-5 d-flex justify-content-center form mt-5 pb-5",children:Object(p.jsxs)("div",{className:"col-md-3",children:[Object(p.jsx)("h4",{className:"ml-n3",children:"Login"}),Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)("form",{id:"login",className:"d-flex flex-column",children:[Object(p.jsxs)("label",{htmlFor:"email",className:"row d-flex flex-column",children:["Email:",Object(p.jsx)("input",{className:"col-md-10",type:"email",name:"email",id:"email"})]}),Object(p.jsxs)("label",{htmlFor:"password",className:"row mb-3 mt-3",children:["Password:",Object(p.jsx)("input",{className:"col-md-10",type:"password",name:"password",id:"password"})]}),Object(p.jsx)("input",{type:"submit",value:"Submit",className:"form-elements btn btn-secondary",onClick:function(e){e.preventDefault();var t=document.getElementById("email"),n=document.getElementById("password");r({variables:{email:t.value,password:n.value}})}})]})}),Object(p.jsx)(J,{})]})})},Z=function(){return Object(p.jsx)(i.b,{to:"/login",className:"btn btn-secondary",children:"Login"})},$=Object(j.gql)(R||(R=Object(r.a)(["\n  mutation Signup($email: String!, $password: String!, $name: String!) {\n    signup(email: $email, password: $password, name: $name) {\n      id\n      token\n    }\n  }\n"])));function Y(){var e=Object(l.e)(),t=Object(j.useMutation)($,{onCompleted:function(t){var n=t.signup;n&&(localStorage.setItem("token",n.token),localStorage.setItem("userId",n.id),Object(f.d)(!0),e.push("/"),window.location.reload())}}),n=Object(U.a)(t,2),r=n[0],a=n[1],c=a.loading,s=a.error;return c?Object(p.jsx)("h4",{children:"Loading..."}):s?Object(p.jsx)("p",{children:"An error occurred"}):Object(p.jsx)("div",{className:"row m-md-0 m-5 d-flex justify-content-center form mt-5 pb-5",children:Object(p.jsxs)("div",{className:"col-md-3",children:[Object(p.jsx)("h4",{className:"ml-n3",children:"Register"}),Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)("form",{id:"login",className:"d-flex flex-column",children:[Object(p.jsxs)("label",{htmlFor:"email",className:"row d-flex flex-column",children:[Object(p.jsx)("p",{children:"Email:"}),Object(p.jsx)("input",{className:"col-md-10",type:"email",name:"email",id:"email"})]}),Object(p.jsxs)("label",{htmlFor:"password",className:"row d-flex flex-column mb-3 mt-3",children:[Object(p.jsx)("p",{children:"Password:"}),Object(p.jsx)("input",{className:"col-md-10",type:"password",name:"password",id:"password"})]}),Object(p.jsxs)("label",{htmlFor:"password",className:"row d-flex flex-column mb-3 mt-3",children:[Object(p.jsx)("p",{children:"Confirm password:"}),Object(p.jsx)("input",{className:"col-md-10",type:"password",name:"confirm-password",id:"confirm-password"})]}),Object(p.jsxs)("label",{htmlFor:"name",className:"row d-flex flex-column mb-3 mt-3",children:[Object(p.jsx)("p",{children:"Name:"}),Object(p.jsx)("input",{className:"col-md-10",type:"text",name:"name",id:"name"})]}),Object(p.jsx)("input",{type:"submit",value:"Submit",className:"form-elements btn btn-secondary",onClick:function(e){e.preventDefault();var t=document.getElementById("email"),n=document.getElementById("password"),a=document.getElementById("name");r({variables:{email:t.value,password:n.value,name:a.value}})}})]})}),Object(p.jsx)(Z,{})]})})}var _,ee,te=function(e){Object(u.a)(n,e);var t=Object(b.a)(n);function n(){return Object(m.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(p.jsxs)("div",{children:[Object(p.jsx)(X,{}),Object(p.jsx)(l.a,{exact:!0,path:"/register",component:Y}),Object(p.jsx)(l.a,{exact:!0,path:"/login",component:z})]})}}]),n}(a.Component),ne=Object(j.gql)(_||(_=Object(r.a)(["\n  extend type Query {\n    isLoggedIn: Boolean!\n  }\n"]))),re=new j.ApolloClient({cache:f.a,uri:"/graphql",headers:{authorization:localStorage.getItem("token")||"","client-name":"Star Wars [web]","client-version":"1.0.0"},typeDefs:ne,resolvers:{}}),ae=Object(j.gql)(ee||(ee=Object(r.a)(["\n  query IsUserLoggedIn {\n    isLoggedIn @client\n  }\n"])));function ce(){var e,t=Object(j.useQuery)(ae).data,n=Object(l.e)();return t.isLoggedIn?(n.push("/"),e=Object(p.jsx)(Q,{})):(n.push("/login"),e=Object(p.jsx)(te,{})),e}o.a.render(Object(p.jsx)(j.ApolloProvider,{client:re,children:Object(p.jsx)(i.a,{children:Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(ce,{})})})}),document.getElementById("root"))},25:function(e,t,n){"use strict";n.d(t,"d",(function(){return a})),n.d(t,"e",(function(){return s})),n.d(t,"c",(function(){return o})),n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return i}));var r=n(13),a=Object(r.makeVar)(!!localStorage.getItem("token")),c=function(e){var t,n=localStorage.getItem(e);return n&&(t=JSON.parse(n)),t},s=Object(r.makeVar)(c("peopleData")||{}),o=Object(r.makeVar)(c("favourites")||[]),l=Object(r.makeVar)(function(){var e=localStorage.getItem("page"),t="1";return e&&(t=e),t}()),i=new r.InMemoryCache({typePolicies:{Query:{fields:{isLoggedIn:{read:function(){return a()}},currPage:{read:function(){return l()}},favourites:{read:function(){return o()}},peopleCurrent:{read:function(){return s()}}}}}})},40:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return c}));n(2);var r=n(3),a=function(e){var t=e.split("/");return parseInt(t[t.length-2],10)},c=function(e){var t=e.link;return Object(r.jsx)("a",{style:{textDecoration:"underline"},href:t,target:"_blank",rel:"noreferrer",children:"[".concat(a(t),"]")})}},73:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(61);function a(e){return{getFavourites:e(),setFavourites:function(t){localStorage.setItem("favourites",JSON.stringify([].concat(Object(r.a)(e()),Object(r.a)(t)))),e(t)},deleteFavourite:function(t){var n=e().filter((function(e){return e!==t}));localStorage.setItem("favourites",JSON.stringify(n)),e(n)},addFavourite:function(t){var n=[].concat(Object(r.a)(e()),[t]);localStorage.setItem("favourites",JSON.stringify(n)),e(n)},isFavourite:function(t){return!!t&&e().includes(t)}}}},95:function(e,t,n){"use strict";t.a="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAAC6ElEQVRoge3YzWucVRTH8c+ZlBZF6UKkRLpSxKULX8tMXhqKFheVKIiCINnoHyD+AW6jEnTTXVGMom66EAuC1DGZGKKtgi+IqFlpC7VqE0RJjXNdOEobnidP5pl5zMLnuzzn3HN+v7l3LnOHmpqampr/M9FPcZowpmtaOKxrVLgRP+FrnDbi1Wj7dtse426VPI4p3IYbJD9qOC85LTkZHZ2hGkgtdwgvYKKgtCvM2/RMfOjCVT2arhfmhBk0Cvq08XQs+qRIW6GB1DIjHMe+otorOKfrwVhyBlLTnRrexM199NgQnooFr2xXtK2BnvgTfQy9kkuSSQ0NyfvYX7LPTCx6OS+ZayBNuEtXB3tLDobvejP6+eS3siFpRsfZrGT+WeyaM5h4uMVg4vn76M7lJTMNpJZJNAccPDzCWBo3npXK3oHwcKWCytD1UFY47whlut1VGtlXeJ6BgxVKKUfK1pRn4NoKpZTluqxgnoELOfHd5HxWMM/A5xUKKcuXWcE8A+9UKKQsmZqyDVz2Gn6pUk2frBnxRlYi00CsWBdmq9XUF7PRdikrkf9TouF5fFSVoj741G+ey0vmGoi2TcljdvdGumjEI3HWH3kF2z4somNVcgzrQ5dWzK8ajhW98IpeRqJjRXKf//ZLvY6j8YHlosJCA/RMhHvw1aDKdsCqEc1YtLST4h0ZgFjwjcvuFd4ur62AZNGfDkXbFztdsmMD9K7XA6Yxi9Svvm1IkhftMbX1z4BCTaUnthzBvHCgbI8ea8KTseCtMotLG4A06aBNrwtjJVt8LHk0OlbLaujrCG0l2r436rDwLLp9LE3CS37WGkQ8A+7AVYrGTUnmMVpQelF4IhacGsbcoRmA1HSThlO4PafkM5seiGU/DGvmQEdoK7HknBGTksWM9Iq9poYpniHvwD+kQ66xx0nc3wu9a9N0LPt92LMqMQDpiP02nEHXPnfHe9aqmlUZqeVoGvt3F2pqampqaobOX8UGtOavmkzUAAAAAElFTkSuQmCC"}},[[134,1,2]]]);
//# sourceMappingURL=main.915803c1.chunk.js.map