(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{108:function(e,t,n){},132:function(e,t,n){},133:function(e,t,n){"use strict";n.r(t);var a=n(16),c=n(3),r=n.n(c),s=n(95),l=n.n(s),o=n(14),i=n(18),j=(n(108),n(6)),m=n(36),d=n(37),u=n(40),b=n(39),p=n(1),O=function(e){Object(u.a)(n,e);var t=Object(b.a)(n);function n(){return Object(m.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(p.jsx)("div",{children:"Me View"})}}]),n}(c.Component),h=n(59),x=n(48),g=n.n(x),f=n(67),v=n(27),N=n(34),y=n.n(N),A=n(68),w=n(103),k=Object(j.makeVar)(!!localStorage.getItem("token")),C=Object(j.makeVar)([]),I=Object(j.makeVar)([]),P=Object(j.makeVar)(function(){var e=localStorage.getItem("page"),t="1";return e&&(t=e),t}()),S=new j.InMemoryCache({typePolicies:{Query:{fields:{isLoggedIn:{read:function(){return k()}},currPage:{read:function(){return P()}},favourites:{read:function(){return I()}},peopleCurrent:{read:function(){return C()}}}}}}),F=function(){var e=Object(o.e)(),t=Object(j.useApolloClient)();return Object(p.jsx)("button",{style:{padding:0},"data-testid":"logout-button",type:"button",className:"btn btn-secondary p-2",onClick:function(){t.cache.evict({fieldName:"me"}),t.resetStore(),localStorage.removeItem("token"),localStorage.removeItem("page"),localStorage.removeItem("userId"),k(!1),e.push("/login"),window.location.reload()},children:"Logout"})};function M(e){var t=e.page,n=e.getPage;return Object(p.jsxs)("div",{className:"pb-5 mt-5",children:[Object(p.jsxs)("label",{htmlFor:"page-number",children:["Search people by page:\xa0",Object(p.jsx)("input",{type:"number",name:"page-number",id:"page-number",min:"1",max:"9",className:"ml-3",placeholder:t})]}),Object(p.jsx)("input",{onClick:function(e){e.preventDefault();var t=document.getElementById("page-number");n(t.value)},type:"button",value:"Submit"})]})}var B;function E(e){var t=Object(j.useReactiveVar)(e),n=function(t){e(t)};return{getFavourites:t,setFavourites:n,deleteFavourite:function(e){n(t.filter((function(t){return t!==e})))},addFavourite:function(e){n([].concat(Object(h.a)(t),[e]))}}}var q=Object(j.gql)(B||(B=Object(a.a)(["\n  mutation PostPerson($name: String!) {\n    postPersonWithName(name: $name) {\n      id\n      personId\n      name\n      postedById\n    }\n  }\n"])));function L(e){var t=e.name,n=E(I).addFavourite,a=Object(j.useMutation)(q,{onCompleted:function(e){e.postPersonWithName&&n(t)}}),c=Object(v.a)(a,2),r=c[0],s=c[1],l=s.loading,o=s.error;return l?Object(p.jsx)("h4",{children:"Loading..."}):o?Object(p.jsx)("p",{children:"An error occurred"}):Object(p.jsxs)("div",{className:"d-flex p-3",children:["Like:\xa0",Object(p.jsx)("img",{className:"mt-n2",style:{cursor:"pointer"},role:"presentation",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAACjUlEQVRoge3ZSWsUURSG4afjFEGC4ByDiCiKEhe6FH+B/9elE4ouxDEuHBCNmHZAnKLtEBMXp7ssq7srVdWj2O+mu4Z76/su95y65xYTJkyYMOF/plbwvq3Yj1nMNI9r+IZl1PESnwr2N4M57MU2TGMNjWYfS83+Gr0a2IJjOIoNBYS9wm18yBE+jwMF+lrFUyzIMZJnYBfOChNlWMMtPMqcP4zTmCrZ3w9cxetOF7uN6iEhfmPJhxGDMovNYmrBKZxUfMqm2YCD+Ir3nS5m2Y0zyo9Ulp342fyd77GvmojBt/iSvZBmGufE6PWDtS7Pqcp3nBfJA+2jfEL/xBPC+yWeiMfj6RNpA1tFoI07R8RMwd8G5vQ+74fBlNCaHLTYN3wtlUm0pg3MjEBIVRKt2Rj4V0i0pg30M1sMmqm2P1K59R8gWRulDSyPQEhVEq1pA/UON44rida0gZcjEFKVRGvawCe8GL6W0izic+sg++a9JwqJcWUV99Mnssvp7yLC54wnN2VitVM98F6sSHcOQ1EJHuJB9mS3iqwuipFxWR8t4G6nC3mF+jsR2PuNbpW6ihva6+uE9XYaPuKNMFGlPu6FH7hinfReZKvkq9inaRXqw6CBi2IW5FLEAJGdnmOPwa9aP+CCVK7Po6gBWBEmthtc7VDHZTFghShjgAiqRVFc7yjZdj0e4zp+lWlU1kCLJZFm9+pPHbGAO1UaVjVABNg7kaGq9rOCa3hSVUQvBoh1+ZIwsalk2wYu6bLnWZReDRCV3KJyGaqVaYpux3elHwaIqfBMsQz1Sox84UyTR78MUCxDVco0efTTQIsl8fbe4U9cNMQ3g7bVZK8MciulJj4fEcG+lnPvhAkTKvIbYud6xdwWIyMAAAAASUVORK5CYII=",alt:"Like icon",onClick:function(){r({variables:{name:t}})}})]})}var V,D="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAAC6ElEQVRoge3YzWucVRTH8c+ZlBZF6UKkRLpSxKULX8tMXhqKFheVKIiCINnoHyD+AW6jEnTTXVGMom66EAuC1DGZGKKtgi+IqFlpC7VqE0RJjXNdOEobnidP5pl5zMLnuzzn3HN+v7l3LnOHmpqampr/M9FPcZowpmtaOKxrVLgRP+FrnDbi1Wj7dtse426VPI4p3IYbJD9qOC85LTkZHZ2hGkgtdwgvYKKgtCvM2/RMfOjCVT2arhfmhBk0Cvq08XQs+qRIW6GB1DIjHMe+otorOKfrwVhyBlLTnRrexM199NgQnooFr2xXtK2BnvgTfQy9kkuSSQ0NyfvYX7LPTCx6OS+ZayBNuEtXB3tLDobvejP6+eS3siFpRsfZrGT+WeyaM5h4uMVg4vn76M7lJTMNpJZJNAccPDzCWBo3npXK3oHwcKWCytD1UFY47whlut1VGtlXeJ6BgxVKKUfK1pRn4NoKpZTluqxgnoELOfHd5HxWMM/A5xUKKcuXWcE8A+9UKKQsmZqyDVz2Gn6pUk2frBnxRlYi00CsWBdmq9XUF7PRdikrkf9TouF5fFSVoj741G+ey0vmGoi2TcljdvdGumjEI3HWH3kF2z4somNVcgzrQ5dWzK8ajhW98IpeRqJjRXKf//ZLvY6j8YHlosJCA/RMhHvw1aDKdsCqEc1YtLST4h0ZgFjwjcvuFd4ur62AZNGfDkXbFztdsmMD9K7XA6Yxi9Svvm1IkhftMbX1z4BCTaUnthzBvHCgbI8ea8KTseCtMotLG4A06aBNrwtjJVt8LHk0OlbLaujrCG0l2r436rDwLLp9LE3CS37WGkQ8A+7AVYrGTUnmMVpQelF4IhacGsbcoRmA1HSThlO4PafkM5seiGU/DGvmQEdoK7HknBGTksWM9Iq9poYpniHvwD+kQ66xx0nc3wu9a9N0LPt92LMqMQDpiP02nEHXPnfHe9aqmlUZqeVoGvt3F2pqampqaobOX8UGtOavmkzUAAAAAElFTkSuQmCC",G=Object(j.gql)(V||(V=Object(a.a)(["\n  mutation deletePerson($name: String!) {\n    deletePersonWithName(name: $name) {\n      name\n    }\n  }\n"])));function R(e){var t=e.name,n=E(I).deleteFavourite,a=Object(j.useMutation)(G,{onCompleted:function(e){e.deletePersonWithName&&n(t)}}),c=Object(v.a)(a,2),r=c[0],s=c[1],l=s.loading,o=s.error;return l?Object(p.jsx)("h4",{children:"Loading..."}):o?Object(p.jsx)("p",{children:"An error occurred"}):Object(p.jsxs)("div",{className:"d-flex",children:["Unlike:\xa0",Object(p.jsx)("img",{className:"mt-n2",role:"presentation",src:D,alt:"Like icon",style:{cursor:"pointer"},onClick:function(){r({variables:{name:t}})}})]})}function K(e){var t=e.isInFavourites,n=e.name;return Object(p.jsx)("div",{children:t?Object(p.jsx)(R,{name:n}):Object(p.jsx)(L,{name:n})})}var U,H,W=function(e){var t=e.person,n=t.name,a=t.height,c=t.gender,r=t.homeworld,s=e.isInFavourites,l=s?"&favourite=true":"";return Object(p.jsx)("div",{className:"card card-body mb-3",children:Object(p.jsxs)("div",{className:"row d-flex",children:[Object(p.jsxs)("div",{className:"col-md-6",children:[Object(p.jsxs)("p",{children:["Name:\xa0",Object(p.jsx)("span",{children:n})]}),Object(p.jsxs)("p",{children:["Height:\xa0",a]}),Object(p.jsxs)("p",{children:["Gender:\xa0",c]}),Object(p.jsxs)("p",{children:["Homeworld:\xa0",r]})]}),Object(p.jsxs)("div",{className:"col-md-6 d-md-flex justify-content-md-between",children:[Object(p.jsx)(K,{isInFavourites:s,name:n}),Object(p.jsx)("div",{children:Object(p.jsx)(i.b,{to:"/person/?search=".concat(n).concat(l),className:"btn btn-secondary",children:"Person Details"})})]})]})})},T=n(72),Z=n(101),Y=Object(Z.a)((function(e,t){var n=t.headers,a=localStorage.getItem("token");return{headers:Object(T.a)(Object(T.a)({},n),{},{authorization:a?"Bearer ".concat(a):""})}}));function Q(e){var t=e.page,n=e.getPage;return Object(p.jsxs)("div",{className:"btn-group",role:"group","aria-label":"Basic example",children:[t>1?Object(p.jsx)("button",{type:"button",className:"btn btn-secondary",onClick:function(e){e.preventDefault(),n(t-1)},children:"Prev"}):null,Object(p.jsx)("button",{type:"button",className:"btn btn-secondary",children:"".concat(t)}),t<9?Object(p.jsx)("button",{type:"button",className:"btn btn-secondary",onClick:function(e){e.preventDefault(),n(t+1)},children:"Next"}):null]})}var J,X=Object(j.gql)(U||(U=Object(a.a)(["\n  query People($page: Int) {\n    people(page: $page) {\n      name\n      height\n      gender\n      homeworld\n    }\n  }\n"]))),z=Object(j.gql)(H||(H=Object(a.a)(["\n  query MyPeople {\n    myPeople {\n      name\n    }\n  }\n"]))),$=function(){return parseInt(P(),10)},_=Object(w.a)(Object(A.graphql)(z,{name:"myPeopleData",options:{context:Y}}),Object(A.graphql)(X,{name:"pageData",options:{context:Y,variables:{page:1}}}))((function(e){var t=e.pageData,n=e.myPeopleData;if(t.error||n.error)return Object(p.jsx)("p",{children:"Error...Please try again"});if(t.loading||n.loading)return Object(p.jsx)("p",{children:"Loading..."});var a=E(I),r=a.getFavourites,s=a.setFavourites,l=function(e){return{getPeople:function(){return e()||[]},setPeople:function(t){e(t)}}}(C),o=l.getPeople,i=l.setPeople;i(t.people);var j=Object(c.useState)(o()),m=Object(v.a)(j,2),d=m[0],u=m[1],b=function(){var e=Object(f.a)(g.a.mark((function e(n){var a,c;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.refetch({variables:{pge:n}});case 2:a=e.sent,c=a.data,i(c),u(o());case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),O=function(){var e=Object(f.a)(g.a.mark((function e(t){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:localStorage.setItem("page",t),P("".concat(t)),b(t);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),x=[];return n.myPeople.forEach((function(e){return x.push(e.name)})),s([].concat(Object(h.a)(I()),x)),Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)("div",{style:{padding:"5px",textAlign:"center",borderRadius:"50%"},children:[Object(p.jsx)(F,{}),Object(p.jsx)(M,{page:$(),getPage:O}),Object(p.jsx)(Q,{page:$(),getPage:O})]}),Object(p.jsx)("h4",{className:"display-4 my-3",children:"People"}),Object(p.jsx)(p.Fragment,{children:d.map((function(e){return Object(p.jsx)(W,{person:e,isInFavourites:(t=e.name,!!t&&r.includes(t))},"".concat(e.name,"-").concat(y()()));var t}))}),Object(p.jsx)("div",{style:{textAlign:"center"},className:"mb-3",children:Object(p.jsx)(Q,{page:$(),getPage:O})})]})})),ee=n(102),te=n.n(ee),ne=function(e){var t=e.link;return Object(p.jsx)("p",{children:"<".concat(t,">")})};function ae(){return Object(p.jsx)("div",{style:{textAlign:"center"},children:Object(p.jsx)(i.b,{to:"/",className:"btn btn-secondary",children:"Back"})})}function ce(){return Object(p.jsxs)("div",{className:"d-flex m-md-0 m-1",children:["Is a favourite:\xa0",Object(p.jsx)("img",{className:"mt-n2",role:"presentation",src:D,alt:"Like icon"})]})}var re=Object(j.gql)(J||(J=Object(a.a)(["\n  query PersonDetails($name: String!) {\n    personDetails(name: $name) {\n      name\n      height\n      gender\n      homeworld\n      eyeColor\n      hairColor\n      skinColor\n      films\n      species\n      vehicles\n      starships\n      url\n    }\n  }\n"]))),se=function(e){var t=e.location,n=!1,a=te.a.parse(t.search),c=a.search;a.favourite&&(n=!0);var r=Object(j.useQuery)(re,{variables:{name:c},context:Y}),s=r.loading,l=r.error,o=r.data;if(s)return Object(p.jsx)("p",{children:"Loading..."});if(l)return Object(p.jsx)("p",{children:"Error :( ".concat(l)});var i=o.personDetails,m=i.name,d=i.height,u=i.gender,b=i.homeworld,O=i.eyeColor,h=i.hairColor,x=i.skinColor,g=i.films,f=i.species,v=i.vehicles,N=i.starships,A=i.url;return Object(p.jsxs)("div",{className:"pt-5 mb-3",children:[Object(p.jsx)(ae,{}),Object(p.jsxs)("div",{className:"d-md-flex justify-content-md-between",children:[Object(p.jsxs)("h1",{className:"display-4 my-5",children:[Object(p.jsx)("span",{className:"text-dark",children:"Name: "}),m]}),Object(p.jsx)("div",{className:"p-md-5",children:n?Object(p.jsx)(ce,{}):null})]}),Object(p.jsx)("h4",{className:"mb-3",children:"Person Details"}),Object(p.jsxs)("p",{children:["Height:\xa0",d]}),Object(p.jsxs)("p",{children:["Gender:\xa0",u]}),Object(p.jsxs)("p",{children:["Homeworld:\xa0",b]}),Object(p.jsxs)("ul",{className:"list-group",children:[Object(p.jsxs)("li",{className:"list-group-item",children:["Eye color:\xa0",O]}),Object(p.jsxs)("li",{className:"list-group-item",children:["Hair color:\xa0",h]}),Object(p.jsxs)("li",{className:"list-group-item",children:["Skin color:\xa0",x]})]}),Object(p.jsx)("h4",{className:"my-3",children:"More details"}),Object(p.jsxs)("ul",{className:"list-group",children:[Object(p.jsxs)("li",{className:"list-group-item",children:["Films:",g.map((function(e){return Object(p.jsx)(ne,{link:e},"film-".concat(y()()))}))]}),Object(p.jsxs)("li",{className:"list-group-item",children:["Species:",f.map((function(e){return Object(p.jsx)(ne,{link:e},"species-".concat(y()()))}))]}),Object(p.jsxs)("li",{className:"list-group-item",children:["Vehicles:",v.map((function(e){return Object(p.jsx)(ne,{link:e},"vehicle-".concat(y()()))}))]}),Object(p.jsxs)("li",{className:"list-group-item",children:["Starships:",N.map((function(e){return Object(p.jsx)(ne,{link:e},"vehicle-".concat(y()()))}))]})]}),Object(p.jsxs)("h4",{className:"mb-3",children:["Person Url:",Object(p.jsx)(ne,{link:A})]}),Object(p.jsx)("hr",{}),Object(p.jsx)(ae,{})]})},le=n.p+"static/media/star-wars-logo.057103d6.svg";n(132);var oe,ie,je=function(){return Object(p.jsx)("div",{className:"header",children:Object(p.jsx)("img",{src:le,alt:"StarWars",style:{width:"300px",margin:"auto",display:"block"}})})},me=function(e){Object(u.a)(n,e);var t=Object(b.a)(n);function n(){return Object(m.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(p.jsxs)("div",{children:[Object(p.jsx)(je,{}),Object(p.jsx)(o.a,{exact:!0,path:"/me",component:O}),Object(p.jsx)(o.a,{exact:!0,path:"/",component:_}),Object(p.jsx)(o.a,{exact:!0,path:"/people",component:_}),Object(p.jsx)(o.a,{exact:!0,path:"/person",component:se})]})}}]),n}(c.Component),de=function(){return Object(p.jsx)(i.b,{to:"/register",className:"btn btn-secondary",children:"Register"})},ue=Object(j.gql)(oe||(oe=Object(a.a)(["\n  mutation Login($email: String!, $password: String!) {\n    login(email: $email, password: $password) {\n      id\n      token\n    }\n  }\n"]))),be=function(){var e=Object(o.e)(),t=Object(j.useMutation)(ue,{onCompleted:function(t){var n=t.login;n&&(localStorage.setItem("token",n.token),localStorage.setItem("userId",n.id),k(!0),e.push("/"),window.location.reload())}}),n=Object(v.a)(t,2),a=n[0],c=n[1],r=c.loading,s=c.error;return r?Object(p.jsx)("h4",{children:"Loading..."}):s?Object(p.jsx)("p",{children:"An error occurred"}):Object(p.jsx)("div",{className:"row m-md-0 m-5 d-flex justify-content-center form mt-5 pb-5",children:Object(p.jsxs)("div",{className:"col-md-3",children:[Object(p.jsx)("h4",{className:"ml-n3",children:"Login"}),Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)("form",{id:"login",className:"d-flex flex-column",children:[Object(p.jsxs)("label",{htmlFor:"email",className:"row d-flex flex-column",children:["Email:",Object(p.jsx)("input",{className:"col-md-10",type:"email",name:"email",id:"email"})]}),Object(p.jsxs)("label",{htmlFor:"password",className:"row mb-3 mt-3",children:["Password:",Object(p.jsx)("input",{className:"col-md-10",type:"password",name:"password",id:"password"})]}),Object(p.jsx)("input",{type:"submit",value:"Submit",className:"form-elements btn btn-secondary",onClick:function(e){e.preventDefault();var t=document.getElementById("email"),n=document.getElementById("password");a({variables:{email:t.value,password:n.value}})}})]})}),Object(p.jsx)(de,{})]})})},pe=function(){return Object(p.jsx)(i.b,{to:"/login",className:"btn btn-secondary",children:"Login"})},Oe=Object(j.gql)(ie||(ie=Object(a.a)(["\n  mutation Signup($email: String!, $password: String!, $name: String!) {\n    signup(email: $email, password: $password, name: $name) {\n      id\n      token\n    }\n  }\n"])));function he(){var e=Object(o.e)(),t=Object(j.useMutation)(Oe,{onCompleted:function(t){var n=t.signup;n&&(localStorage.setItem("token",n.token),localStorage.setItem("userId",n.id),k(!0),e.push("/"))}}),n=Object(v.a)(t,2),a=n[0],c=n[1],r=c.loading,s=c.error;return r?Object(p.jsx)("h4",{children:"Loading..."}):s?Object(p.jsx)("p",{children:"An error occurred"}):Object(p.jsx)("div",{className:"row m-md-0 m-5 d-flex justify-content-center form mt-5 pb-5",children:Object(p.jsxs)("div",{className:"col-md-3",children:[Object(p.jsx)("h4",{className:"ml-n3",children:"Register"}),Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)("form",{id:"login",className:"d-flex flex-column",children:[Object(p.jsxs)("label",{htmlFor:"email",className:"row d-flex flex-column",children:[Object(p.jsx)("p",{children:"Email:"}),Object(p.jsx)("input",{className:"col-md-10",type:"email",name:"email",id:"email"})]}),Object(p.jsxs)("label",{htmlFor:"password",className:"row d-flex flex-column mb-3 mt-3",children:[Object(p.jsx)("p",{children:"Password:"}),Object(p.jsx)("input",{className:"col-md-10",type:"password",name:"password",id:"password"})]}),Object(p.jsxs)("label",{htmlFor:"password",className:"row d-flex flex-column mb-3 mt-3",children:[Object(p.jsx)("p",{children:"Confirm password:"}),Object(p.jsx)("input",{className:"col-md-10",type:"password",name:"confirm-password",id:"confirm-password"})]}),Object(p.jsxs)("label",{htmlFor:"name",className:"row d-flex flex-column mb-3 mt-3",children:[Object(p.jsx)("p",{children:"Name:"}),Object(p.jsx)("input",{className:"col-md-10",type:"text",name:"name",id:"name"})]}),Object(p.jsx)("input",{type:"submit",value:"Submit",className:"form-elements btn btn-secondary",onClick:function(e){e.preventDefault();var t=document.getElementById("email"),n=document.getElementById("password"),c=document.getElementById("name");a({variables:{email:t.value,password:n.value,name:c.value}})}})]})}),Object(p.jsx)(pe,{})]})})}var xe,ge,fe=function(e){Object(u.a)(n,e);var t=Object(b.a)(n);function n(){return Object(m.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(p.jsxs)("div",{children:[Object(p.jsx)(je,{}),Object(p.jsx)(o.a,{exact:!0,path:"/register",component:he}),Object(p.jsx)(o.a,{exact:!0,path:"/login",component:be})]})}}]),n}(c.Component),ve=Object(j.gql)(xe||(xe=Object(a.a)(["\n  extend type Query {\n    isLoggedIn: Boolean!\n  }\n"]))),Ne=new j.ApolloClient({cache:S,uri:"/graphql",headers:{authorization:localStorage.getItem("token")||"","client-name":"Star Wars [web]","client-version":"1.0.0"},typeDefs:ve,resolvers:{}}),ye=Object(j.gql)(ge||(ge=Object(a.a)(["\n  query IsUserLoggedIn {\n    isLoggedIn @client\n  }\n"])));function Ae(){var e,t=Object(j.useQuery)(ye).data,n=Object(o.e)();return t.isLoggedIn?(n.push("/"),e=Object(p.jsx)(me,{})):(n.push("/login"),e=Object(p.jsx)(fe,{})),e}l.a.render(Object(p.jsx)(j.ApolloProvider,{client:Ne,children:Object(p.jsx)(i.a,{children:Object(p.jsx)(r.a.StrictMode,{children:Object(p.jsx)(Ae,{})})})}),document.getElementById("root"))}},[[133,1,2]]]);
//# sourceMappingURL=main.a92aa053.chunk.js.map