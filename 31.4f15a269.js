(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{138:function(e,a,n){"use strict";n(12),n(53),n(139),n(135),n(132);var t=n(0),r=n.n(t),c=n(129),o=n.n(c),l=n(134),i=n(128),s=!1;a.a=function(e){var a=Object(t.useRef)(!1),c=Object(t.useRef)(null),u=Object(l.b)(),h=Object(i.a)().siteConfig,d=(void 0===h?{}:h).baseUrl,f=function(){a.current||(new window.DocSearch({searchData:window.searchData,inputSelector:"#search_input_react",handleSelected:function(e,a,n){var t=d+n.url;document.createElement("a").href=t,u.push(t)}}),a.current=!0)},b=function(){s?f():Promise.all([fetch(d+"search-data.json").then((function(e){return e.json()})),Promise.all([n.e(30),n.e(32)]).then(n.bind(null,142)),n.e(23).then(n.t.bind(null,141,7))]).then((function(e){var a=e[0],n=e[1].default;s=!0,window.searchData=a,window.DocSearch=n,f()}))},m=Object(t.useCallback)((function(a){c.current.contains(a.target)||c.current.focus(),e.handleSearchBarToggle(!e.isSearchBarExpanded)}),[e.isSearchBarExpanded]);return r.a.createElement("div",{className:"navbar__search",key:"search-box"},r.a.createElement("span",{"aria-label":"expand searchbar",role:"button",className:o()("search-icon",{"search-icon-hidden":e.isSearchBarExpanded}),onClick:m,onKeyDown:m,tabIndex:0}),r.a.createElement("input",{id:"search_input_react",type:"search",placeholder:"Search","aria-label":"Search",className:o()("navbar__search-input",{"search-bar-expanded":e.isSearchBarExpanded},{"search-bar":!e.isSearchBarExpanded}),onClick:b,onMouseOver:b,onFocus:m,onBlur:m,ref:c}))}},171:function(e,a,n){"use strict";n.r(a);var t=n(0),r=n.n(t),c=n(137);a.default=function(){return r.a.createElement(c.a,{title:"Page Not Found"},r.a.createElement("div",{className:"container margin-vert--xl"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--6 col--offset-3"},r.a.createElement("h1",{className:"hero__title"},"Page Not Found"),r.a.createElement("p",null,"We could not find what you were looking for."),r.a.createElement("p",null,"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))}}}]);