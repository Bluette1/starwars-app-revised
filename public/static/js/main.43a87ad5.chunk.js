(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{108:function(e,t,n){},132:function(e,t,n){},133:function(e,t,n){"use strict";n.r(t);var a=n(16),r=n(3),c=n.n(r),s=n(95),o=n.n(s),l=n(14),i=n(18),j=(n(108),n(6)),m=n(36),d=n(37),u=n(40),b=n(39),p=n(1),O=function(e){Object(u.a)(n,e);var t=Object(b.a)(n);function n(){return Object(m.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(p.jsx)("div",{children:"Me View"})}}]),n}(r.Component),h=n(59),g=n(67),x=n(103),f=Object(j.makeVar)(!!localStorage.getItem("token")),v=function(e){var t,n=localStorage.getItem(e);return n&&(console.log("var",n),t=JSON.parse(n)),t},N=Object(j.makeVar)(v("peopleData")||{}),y=Object(j.makeVar)(v("favourites")||[]),A=Object(j.makeVar)(function(){var e=localStorage.getItem("page"),t="1";return e&&(t=e),t}()),w=new j.InMemoryCache({typePolicies:{Query:{fields:{isLoggedIn:{read:function(){return f()}},currPage:{read:function(){return A()}},favourites:{read:function(){return y()}},peopleCurrent:{read:function(){return N()}}}}}}),I=n(48),S=n.n(I),k=n(69),C=n(27),P=n(34),F=n.n(P);function M(e){var t=e.page,n=e.getPage;return Object(p.jsxs)("div",{className:"pb-5 mt-5",children:[Object(p.jsxs)("label",{htmlFor:"page-number",children:["Search people by page:\xa0",Object(p.jsx)("input",{type:"number",name:"page-number",id:"page-number",min:"1",max:"9",className:"ml-3",placeholder:t})]}),Object(p.jsx)("input",{onClick:function(e){e.preventDefault();var t=document.getElementById("page-number");n(t.value)},type:"button",value:"Submit"})]})}var B;function E(e){var t=Object(j.useReactiveVar)(e),n=function(t){localStorage.setItem("favourites",JSON.stringify(t)),e(t)};return{getFavourites:t,setFavourites:n,deleteFavourite:function(e){var a=t.filter((function(t){return t!==e}));localStorage.setItem("favourites",JSON.stringify(a)),n(a)},addFavourite:function(e){var a=[].concat(Object(h.a)(t),[e]);localStorage.setItem("favourites",JSON.stringify(a)),n(a)}}}var q=Object(j.gql)(B||(B=Object(a.a)(["\n  mutation PostPerson($name: String!) {\n    postPersonWithName(name: $name) {\n      id\n      personId\n      name\n      postedById\n    }\n  }\n"])));function L(e){var t=e.name,n=E(y).addFavourite,a=Object(j.useMutation)(q,{onCompleted:function(e){e.postPersonWithName&&n(t)}}),r=Object(C.a)(a,2),c=r[0],s=r[1],o=s.loading,l=s.error;return o?Object(p.jsx)("h4",{children:"Loading..."}):l?Object(p.jsx)("p",{children:"An error occurred"}):Object(p.jsxs)("div",{className:"d-flex p-3",children:["Like:\xa0",Object(p.jsx)("img",{className:"mt-n2",style:{cursor:"pointer"},role:"presentation",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAACjUlEQVRoge3ZSWsUURSG4afjFEGC4ByDiCiKEhe6FH+B/9elE4ouxDEuHBCNmHZAnKLtEBMXp7ssq7srVdWj2O+mu4Z76/su95y65xYTJkyYMOF/plbwvq3Yj1nMNI9r+IZl1PESnwr2N4M57MU2TGMNjWYfS83+Gr0a2IJjOIoNBYS9wm18yBE+jwMF+lrFUyzIMZJnYBfOChNlWMMtPMqcP4zTmCrZ3w9cxetOF7uN6iEhfmPJhxGDMovNYmrBKZxUfMqm2YCD+Ir3nS5m2Y0zyo9Ulp342fyd77GvmojBt/iSvZBmGufE6PWDtS7Pqcp3nBfJA+2jfEL/xBPC+yWeiMfj6RNpA1tFoI07R8RMwd8G5vQ+74fBlNCaHLTYN3wtlUm0pg3MjEBIVRKt2Rj4V0i0pg30M1sMmqm2P1K59R8gWRulDSyPQEhVEq1pA/UON44rida0gZcjEFKVRGvawCe8GL6W0izic+sg++a9JwqJcWUV99Mnssvp7yLC54wnN2VitVM98F6sSHcOQ1EJHuJB9mS3iqwuipFxWR8t4G6nC3mF+jsR2PuNbpW6ihva6+uE9XYaPuKNMFGlPu6FH7hinfReZKvkq9inaRXqw6CBi2IW5FLEAJGdnmOPwa9aP+CCVK7Po6gBWBEmthtc7VDHZTFghShjgAiqRVFc7yjZdj0e4zp+lWlU1kCLJZFm9+pPHbGAO1UaVjVABNg7kaGq9rOCa3hSVUQvBoh1+ZIwsalk2wYu6bLnWZReDRCV3KJyGaqVaYpux3elHwaIqfBMsQz1Sox84UyTR78MUCxDVco0efTTQIsl8fbe4U9cNMQ3g7bVZK8MciulJj4fEcG+lnPvhAkTKvIbYud6xdwWIyMAAAAASUVORK5CYII=",alt:"Like icon",onClick:function(){c({variables:{name:t}})}})]})}var V,D="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAAC6ElEQVRoge3YzWucVRTH8c+ZlBZF6UKkRLpSxKULX8tMXhqKFheVKIiCINnoHyD+AW6jEnTTXVGMom66EAuC1DGZGKKtgi+IqFlpC7VqE0RJjXNdOEobnidP5pl5zMLnuzzn3HN+v7l3LnOHmpqampr/M9FPcZowpmtaOKxrVLgRP+FrnDbi1Wj7dtse426VPI4p3IYbJD9qOC85LTkZHZ2hGkgtdwgvYKKgtCvM2/RMfOjCVT2arhfmhBk0Cvq08XQs+qRIW6GB1DIjHMe+otorOKfrwVhyBlLTnRrexM199NgQnooFr2xXtK2BnvgTfQy9kkuSSQ0NyfvYX7LPTCx6OS+ZayBNuEtXB3tLDobvejP6+eS3siFpRsfZrGT+WeyaM5h4uMVg4vn76M7lJTMNpJZJNAccPDzCWBo3npXK3oHwcKWCytD1UFY47whlut1VGtlXeJ6BgxVKKUfK1pRn4NoKpZTluqxgnoELOfHd5HxWMM/A5xUKKcuXWcE8A+9UKKQsmZqyDVz2Gn6pUk2frBnxRlYi00CsWBdmq9XUF7PRdikrkf9TouF5fFSVoj741G+ey0vmGoi2TcljdvdGumjEI3HWH3kF2z4somNVcgzrQ5dWzK8ajhW98IpeRqJjRXKf//ZLvY6j8YHlosJCA/RMhHvw1aDKdsCqEc1YtLST4h0ZgFjwjcvuFd4ur62AZNGfDkXbFztdsmMD9K7XA6Yxi9Svvm1IkhftMbX1z4BCTaUnthzBvHCgbI8ea8KTseCtMotLG4A06aBNrwtjJVt8LHk0OlbLaujrCG0l2r436rDwLLp9LE3CS37WGkQ8A+7AVYrGTUnmMVpQelF4IhacGsbcoRmA1HSThlO4PafkM5seiGU/DGvmQEdoK7HknBGTksWM9Iq9poYpniHvwD+kQ66xx0nc3wu9a9N0LPt92LMqMQDpiP02nEHXPnfHe9aqmlUZqeVoGvt3F2pqampqaobOX8UGtOavmkzUAAAAAElFTkSuQmCC",G=Object(j.gql)(V||(V=Object(a.a)(["\n  mutation deletePerson($name: String!) {\n    deletePersonWithName(name: $name) {\n      name\n    }\n  }\n"])));function R(e){var t=e.name,n=E(y).deleteFavourite,a=Object(j.useMutation)(G,{onCompleted:function(e){e.deletePersonWithName&&n(t)}}),r=Object(C.a)(a,2),c=r[0],s=r[1],o=s.loading,l=s.error;return o?Object(p.jsx)("h4",{children:"Loading..."}):l?Object(p.jsx)("p",{children:"An error occurred"}):Object(p.jsxs)("div",{className:"d-flex",children:["Unlike:\xa0",Object(p.jsx)("img",{className:"mt-n2",role:"presentation",src:D,alt:"Like icon",style:{cursor:"pointer"},onClick:function(){c({variables:{name:t}})}})]})}function K(e){var t=e.isInFavourites,n=e.name;return Object(p.jsx)("div",{children:t?Object(p.jsx)(R,{name:n}):Object(p.jsx)(L,{name:n})})}var U=function(e){var t=e.person,n=t.name,a=t.height,r=t.gender,c=t.homeworld,s=e.isInFavourites,o=s?"&favourite=true":"";return Object(p.jsx)("div",{className:"card card-body mb-3",children:Object(p.jsxs)("div",{className:"row d-flex",children:[Object(p.jsxs)("div",{className:"col-md-6",children:[Object(p.jsxs)("p",{children:["Name:\xa0",Object(p.jsx)("span",{children:n})]}),Object(p.jsxs)("p",{children:["Height:\xa0",a]}),Object(p.jsxs)("p",{children:["Gender:\xa0",r]}),Object(p.jsxs)("p",{children:["Homeworld:\xa0",c]})]}),Object(p.jsxs)("div",{className:"col-md-6 d-md-flex justify-content-md-between",children:[Object(p.jsx)(K,{isInFavourites:s,name:n}),Object(p.jsx)("div",{children:Object(p.jsx)(i.b,{to:"/person/?search=".concat(n).concat(o),className:"btn btn-secondary",children:"Person Details"})})]})]})})};function H(e){var t=e.pg,n=e.getPage,a=t;return Object(p.jsxs)("div",{className:"btn-group",role:"group","aria-label":"Basic example",children:[a>1?Object(p.jsx)("button",{type:"button",className:"btn btn-secondary",onClick:function(e){e.preventDefault(),n(a-1)},children:"Prev"}):null,Object(p.jsx)("button",{type:"button",className:"btn btn-secondary",children:"".concat(a)}),a<9?Object(p.jsx)("button",{type:"button",className:"btn btn-secondary",onClick:function(e){e.preventDefault(),n(a+1)},children:"Next"}):null]})}var W=function(){var e=Object(l.e)(),t=Object(j.useApolloClient)();return Object(p.jsx)("button",{style:{padding:0},"data-testid":"logout-button",type:"button",className:"btn btn-secondary p-2",onClick:function(){t.cache.evict({fieldName:"me"}),t.resetStore(),localStorage.removeItem("token"),localStorage.removeItem("page"),localStorage.removeItem("userId"),localStorage.removeItem("peopleData"),localStorage.removeItem("favourites"),f(!1),e.push("/"),window.location.reload()},children:"Logout"})},J=function(){return parseInt(A(),10)};function T(e){var t=e.page,n=e.handlePageChange,a=e.favourites;return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)("div",{style:{padding:"5px",textAlign:"center",borderRadius:"50%"},children:[Object(p.jsx)(W,{}),Object(p.jsx)(M,{page:J(),getPage:n}),Object(p.jsx)(H,{pg:J(),getPage:n})]}),Object(p.jsx)("h4",{className:"display-4 my-3",children:"People"}),Object(p.jsx)(p.Fragment,{children:t.map((function(e){return Object(p.jsx)(U,{person:e,isInFavourites:(t=e.name,!!t&&a.includes(t))},"".concat(e.name,"-").concat(F()()));var t}))}),Object(p.jsx)("div",{style:{textAlign:"center"},className:"mb-3",children:Object(p.jsx)(H,{pg:J(),getPage:n})})]})}var Z=function(){return parseInt(A(),10)};function Y(e){var t=e.favourites,n=e.getPeople,a=e.setPeople,c=e.refetch,s=Object(r.useState)(n()),o=Object(C.a)(s,2),l=o[0],i=o[1],j=function(){var e=Object(k.a)(S.a.mark((function e(){var t,n;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c({page:Z()});case 2:t=e.sent,(n=t.data)&&(a(Z(),n.people),i(n.people));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),m=function(){var e=Object(k.a)(S.a.mark((function e(t){return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:localStorage.setItem("page",t),A("".concat(t)),0===n().length?j():i(n());case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(p.jsx)(T,{favourites:t,page:l,handlePageChange:m})}var Q,X,z=n(72),$=n(101),_=Object($.a)((function(e,t){var n=t.headers,a=localStorage.getItem("token");return{headers:Object(z.a)(Object(z.a)({},n),{},{authorization:a?"Bearer ".concat(a):""})}}));var ee,te=Object(j.gql)(Q||(Q=Object(a.a)(["\n  query People($page: Int) {\n    people(page: $page) {\n      name\n      height\n      gender\n      homeworld\n    }\n  }\n"]))),ne=Object(j.gql)(X||(X=Object(a.a)(["\n  query MyPeople {\n    myPeople {\n      name\n    }\n  }\n"]))),ae=Object(x.a)(Object(g.graphql)(ne,{name:"myPeopleData",options:{context:_}}),Object(g.graphql)(te,{name:"pageData",options:{context:_,variables:{page:1}}}))((function(e){var t=e.pageData,n=e.myPeopleData;if(t.error||n.error)return Object(p.jsx)("p",{children:"Error...Please try again"});if(t.loading||n.loading)return Object(p.jsx)("p",{children:"Loading..."});var a,r=E(y),c=r.getFavourites,s=r.setFavourites,o=(a=N,{getPeople:function(){var e=parseInt(A(),10),t=a();return t[e]?t[e]:[]},setPeople:function(e,t){var n=a();n[e]=t,localStorage.setItem("peopleData",JSON.stringify(n)),a(n)}}),l=o.getPeople,i=o.setPeople;i(1,t.people);var j=[];return n.myPeople.forEach((function(e){return j.push(e.name)})),s([].concat(Object(h.a)(y()),j)),Object(p.jsx)(Y,{favourites:c,refetch:t.refetch,setPeople:i,getPeople:l})})),re=n(102),ce=n.n(re),se=function(e){var t=e.link;return Object(p.jsx)("p",{children:"<".concat(t,">")})};function oe(){return Object(p.jsx)("div",{style:{textAlign:"center"},children:Object(p.jsx)(i.b,{to:"/",className:"btn btn-secondary",children:"Back"})})}function le(){return Object(p.jsxs)("div",{className:"d-flex m-md-0 m-1",children:["Is a favourite:\xa0",Object(p.jsx)("img",{className:"mt-n2",role:"presentation",src:D,alt:"Like icon"})]})}var ie=Object(j.gql)(ee||(ee=Object(a.a)(["\n  query PersonDetails($name: String!) {\n    personDetails(name: $name) {\n      name\n      height\n      gender\n      homeworld\n      eyeColor\n      hairColor\n      skinColor\n      films\n      species\n      vehicles\n      starships\n      url\n    }\n  }\n"]))),je=function(e){var t=e.location,n=!1,a=ce.a.parse(t.search),r=a.search;a.favourite&&(n=!0);var c=Object(j.useQuery)(ie,{variables:{name:r},context:_}),s=c.loading,o=c.error,l=c.data;if(s)return Object(p.jsx)("p",{children:"Loading..."});if(o)return Object(p.jsx)("p",{children:"Error :( ".concat(o)});var i=l.personDetails,m=i.name,d=i.height,u=i.gender,b=i.homeworld,O=i.eyeColor,h=i.hairColor,g=i.skinColor,x=i.films,f=i.species,v=i.vehicles,N=i.starships,y=i.url;return Object(p.jsxs)("div",{className:"pt-5 mb-3",children:[Object(p.jsx)(oe,{}),Object(p.jsxs)("div",{className:"d-md-flex justify-content-md-between",children:[Object(p.jsxs)("h1",{className:"display-4 my-5",children:[Object(p.jsx)("span",{className:"text-dark",children:"Name: "}),m]}),Object(p.jsx)("div",{className:"p-md-5",children:n?Object(p.jsx)(le,{}):null})]}),Object(p.jsx)("h4",{className:"mb-3",children:"Person Details"}),Object(p.jsxs)("p",{children:["Height:\xa0",d]}),Object(p.jsxs)("p",{children:["Gender:\xa0",u]}),Object(p.jsxs)("p",{children:["Homeworld:\xa0",b]}),Object(p.jsxs)("ul",{className:"list-group",children:[Object(p.jsxs)("li",{className:"list-group-item",children:["Eye color:\xa0",O]}),Object(p.jsxs)("li",{className:"list-group-item",children:["Hair color:\xa0",h]}),Object(p.jsxs)("li",{className:"list-group-item",children:["Skin color:\xa0",g]})]}),Object(p.jsx)("h4",{className:"my-3",children:"More details"}),Object(p.jsxs)("ul",{className:"list-group",children:[Object(p.jsxs)("li",{className:"list-group-item",children:["Films:",x.map((function(e){return Object(p.jsx)(se,{link:e},"film-".concat(F()()))}))]}),Object(p.jsxs)("li",{className:"list-group-item",children:["Species:",f.map((function(e){return Object(p.jsx)(se,{link:e},"species-".concat(F()()))}))]}),Object(p.jsxs)("li",{className:"list-group-item",children:["Vehicles:",v.map((function(e){return Object(p.jsx)(se,{link:e},"vehicle-".concat(F()()))}))]}),Object(p.jsxs)("li",{className:"list-group-item",children:["Starships:",N.map((function(e){return Object(p.jsx)(se,{link:e},"vehicle-".concat(F()()))}))]})]}),Object(p.jsxs)("h4",{className:"mb-3",children:["Person Url:",Object(p.jsx)(se,{link:y})]}),Object(p.jsx)("hr",{}),Object(p.jsx)(oe,{})]})},me=n.p+"static/media/star-wars-logo.057103d6.svg";n(132);var de,ue,be=function(){return Object(p.jsx)("div",{className:"header",children:Object(p.jsx)("img",{src:me,alt:"StarWars",style:{width:"300px",margin:"auto",display:"block"}})})},pe=function(e){Object(u.a)(n,e);var t=Object(b.a)(n);function n(){return Object(m.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(p.jsxs)("div",{children:[Object(p.jsx)(be,{}),Object(p.jsx)(l.a,{exact:!0,path:"/me",component:O}),Object(p.jsx)(l.a,{exact:!0,path:"/",component:ae}),Object(p.jsx)(l.a,{exact:!0,path:"/people",component:ae}),Object(p.jsx)(l.a,{exact:!0,path:"/person",component:je})]})}}]),n}(r.Component),Oe=function(){return Object(p.jsx)(i.b,{to:"/register",className:"btn btn-secondary",children:"Register"})},he=Object(j.gql)(de||(de=Object(a.a)(["\n  mutation Login($email: String!, $password: String!) {\n    login(email: $email, password: $password) {\n      id\n      token\n    }\n  }\n"]))),ge=function(){var e=Object(l.e)(),t=Object(j.useMutation)(he,{onCompleted:function(t){var n=t.login;n&&(localStorage.setItem("token",n.token),localStorage.setItem("userId",n.id),f(!0),e.push("/"),window.location.reload())}}),n=Object(C.a)(t,2),a=n[0],r=n[1],c=r.loading,s=r.error;return c?Object(p.jsx)("h4",{children:"Loading..."}):s?Object(p.jsx)("p",{children:"An error occurred"}):Object(p.jsx)("div",{className:"row m-md-0 m-5 d-flex justify-content-center form mt-5 pb-5",children:Object(p.jsxs)("div",{className:"col-md-3",children:[Object(p.jsx)("h4",{className:"ml-n3",children:"Login"}),Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)("form",{id:"login",className:"d-flex flex-column",children:[Object(p.jsxs)("label",{htmlFor:"email",className:"row d-flex flex-column",children:["Email:",Object(p.jsx)("input",{className:"col-md-10",type:"email",name:"email",id:"email"})]}),Object(p.jsxs)("label",{htmlFor:"password",className:"row mb-3 mt-3",children:["Password:",Object(p.jsx)("input",{className:"col-md-10",type:"password",name:"password",id:"password"})]}),Object(p.jsx)("input",{type:"submit",value:"Submit",className:"form-elements btn btn-secondary",onClick:function(e){e.preventDefault();var t=document.getElementById("email"),n=document.getElementById("password");a({variables:{email:t.value,password:n.value}})}})]})}),Object(p.jsx)(Oe,{})]})})},xe=function(){return Object(p.jsx)(i.b,{to:"/login",className:"btn btn-secondary",children:"Login"})},fe=Object(j.gql)(ue||(ue=Object(a.a)(["\n  mutation Signup($email: String!, $password: String!, $name: String!) {\n    signup(email: $email, password: $password, name: $name) {\n      id\n      token\n    }\n  }\n"])));function ve(){var e=Object(l.e)(),t=Object(j.useMutation)(fe,{onCompleted:function(t){var n=t.signup;n&&(localStorage.setItem("token",n.token),localStorage.setItem("userId",n.id),f(!0),e.push("/"))}}),n=Object(C.a)(t,2),a=n[0],r=n[1],c=r.loading,s=r.error;return c?Object(p.jsx)("h4",{children:"Loading..."}):s?Object(p.jsx)("p",{children:"An error occurred"}):Object(p.jsx)("div",{className:"row m-md-0 m-5 d-flex justify-content-center form mt-5 pb-5",children:Object(p.jsxs)("div",{className:"col-md-3",children:[Object(p.jsx)("h4",{className:"ml-n3",children:"Register"}),Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)("form",{id:"login",className:"d-flex flex-column",children:[Object(p.jsxs)("label",{htmlFor:"email",className:"row d-flex flex-column",children:[Object(p.jsx)("p",{children:"Email:"}),Object(p.jsx)("input",{className:"col-md-10",type:"email",name:"email",id:"email"})]}),Object(p.jsxs)("label",{htmlFor:"password",className:"row d-flex flex-column mb-3 mt-3",children:[Object(p.jsx)("p",{children:"Password:"}),Object(p.jsx)("input",{className:"col-md-10",type:"password",name:"password",id:"password"})]}),Object(p.jsxs)("label",{htmlFor:"password",className:"row d-flex flex-column mb-3 mt-3",children:[Object(p.jsx)("p",{children:"Confirm password:"}),Object(p.jsx)("input",{className:"col-md-10",type:"password",name:"confirm-password",id:"confirm-password"})]}),Object(p.jsxs)("label",{htmlFor:"name",className:"row d-flex flex-column mb-3 mt-3",children:[Object(p.jsx)("p",{children:"Name:"}),Object(p.jsx)("input",{className:"col-md-10",type:"text",name:"name",id:"name"})]}),Object(p.jsx)("input",{type:"submit",value:"Submit",className:"form-elements btn btn-secondary",onClick:function(e){e.preventDefault();var t=document.getElementById("email"),n=document.getElementById("password"),r=document.getElementById("name");a({variables:{email:t.value,password:n.value,name:r.value}})}})]})}),Object(p.jsx)(xe,{})]})})}var Ne,ye,Ae=function(e){Object(u.a)(n,e);var t=Object(b.a)(n);function n(){return Object(m.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(p.jsxs)("div",{children:[Object(p.jsx)(be,{}),Object(p.jsx)(l.a,{exact:!0,path:"/register",component:ve}),Object(p.jsx)(l.a,{exact:!0,path:"/login",component:ge})]})}}]),n}(r.Component),we=Object(j.gql)(Ne||(Ne=Object(a.a)(["\n  extend type Query {\n    isLoggedIn: Boolean!\n  }\n"]))),Ie=new j.ApolloClient({cache:w,uri:"/graphql",headers:{authorization:localStorage.getItem("token")||"","client-name":"Star Wars [web]","client-version":"1.0.0"},typeDefs:we,resolvers:{}}),Se=Object(j.gql)(ye||(ye=Object(a.a)(["\n  query IsUserLoggedIn {\n    isLoggedIn @client\n  }\n"])));function ke(){var e,t=Object(j.useQuery)(Se).data,n=Object(l.e)();return t.isLoggedIn?(n.push("/"),e=Object(p.jsx)(pe,{})):(n.push("/login"),e=Object(p.jsx)(Ae,{})),e}o.a.render(Object(p.jsx)(j.ApolloProvider,{client:Ie,children:Object(p.jsx)(i.a,{children:Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(ke,{})})})}),document.getElementById("root"))}},[[133,1,2]]]);
//# sourceMappingURL=main.43a87ad5.chunk.js.map