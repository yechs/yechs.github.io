"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[123],{6193:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return h},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return p}});var n=r(3117),o=r(102),a=(r(7294),r(3905)),i=["components"],l={slug:"malloc_chunk",title:"Memory Leak & malloc chunks",author:"Ye Shu",author_title:"Studying how C++ allocates and frees chunks in memory",author_url:"https://github.com/yechs",author_image_url:"https://avatars.githubusercontent.com/u/49149993",image:"https://shuye.dev/img/yechs.jpeg",tags:["c++","pwn"]},u="Memory Leak & malloc chunks",s={permalink:"/blog/malloc_chunk",editUrl:"https://github.com/yechs/website/edit/master/blog/blog/2021-08-13-malloc_chunks.mdx",source:"@site/blog/2021-08-13-malloc_chunks.mdx",title:"Memory Leak & malloc chunks",description:"How it all started",date:"2021-08-13T00:00:00.000Z",formattedDate:"August 13, 2021",tags:[{label:"c++",permalink:"/blog/tags/c"},{label:"pwn",permalink:"/blog/tags/pwn"}],readingTime:16.47,truncated:!0,authors:[{name:"Ye Shu",title:"Studying how C++ allocates and frees chunks in memory",url:"https://github.com/yechs",imageURL:"https://avatars.githubusercontent.com/u/49149993"}],frontMatter:{slug:"malloc_chunk",title:"Memory Leak & malloc chunks",author:"Ye Shu",author_title:"Studying how C++ allocates and frees chunks in memory",author_url:"https://github.com/yechs",author_image_url:"https://avatars.githubusercontent.com/u/49149993",image:"https://shuye.dev/img/yechs.jpeg",tags:["c++","pwn"]},nextItem:{title:"Me and My Broken Site(s)",permalink:"/blog/welcome"}},c={authorsImageUrls:[void 0]},p=[{value:"How it all started",id:"how-it-all-started",level:2}],m={toc:p};function h(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"how-it-all-started"},"How it all started"),(0,a.kt)("p",null,"While debugging a memory leak bug during my summer internship, I found out that one of our APIs returned a raw pointer and thus transferred its ownership to the caller (me). In other words, I'm now responsible of ",(0,a.kt)("inlineCode",{parentName:"p"},"delete"),"-ing the pointer after my code finishes. While this is ",(0,a.kt)("a",{parentName:"p",href:"https://isocpp.github.io/CppCoreGuidelines/CppCoreGuidelines#i11-never-transfer-ownership-by-a-raw-pointer-t-or-reference-t"},"a terrible engineering practice"),", I grew interested in how memory leaks happen, and how ",(0,a.kt)("inlineCode",{parentName:"p"},"delete[]")," solves the problem."),(0,a.kt)("p",null,"After some research & experiments, I wrote this blog post, which hopefully addresses three sets of questions"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"What are memory leaks?"),(0,a.kt)("li",{parentName:"ol"},"How are objects allocated on the heap? How does ",(0,a.kt)("inlineCode",{parentName:"li"},"delete[]")," know which area of memory to be freed?"),(0,a.kt)("li",{parentName:"ol"},"How can we prevent memory leaks from happening?")))}h.isMDXComponent=!0},3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return h}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(r),h=o,f=m["".concat(u,".").concat(h)]||m[h]||p[h]||a;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);