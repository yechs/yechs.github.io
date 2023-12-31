"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[782],{6419:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>r,toc:()=>i});var s=n(5893),o=n(1151);const a={slug:"malloc_chunk",title:"\u5185\u5b58\u6cc4\u6f0f \u4e0e malloc chunk",author:"Ye Shu",author_title:"Studying how C++ allocates and frees chunks in memory",author_url:"https://github.com/yechs",author_image_url:"https://avatars.githubusercontent.com/u/49149993",image:"https://shuye.dev/img/yechs.jpeg",tags:["c++","pwn"]},l="\u5185\u5b58\u6cc4\u6f0f \u4e0e malloc chunk",r={permalink:"/zh-Hans/blog/malloc_chunk",editUrl:"https://github.com/yechs/website/edit/master/blog/blog/2021-08-13-malloc_chunks.mdx",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-blog/2021-08-13-malloc_chunks.mdx",title:"\u5185\u5b58\u6cc4\u6f0f \u4e0e malloc chunk",description:"\u6211\u4e3a\u4ec0\u4e48\u5199\u8fd9\u7bc7\u6587\u7ae0",date:"2021-08-13T00:00:00.000Z",formattedDate:"2021\u5e748\u670813\u65e5",tags:[{label:"c++",permalink:"/zh-Hans/blog/tags/c"},{label:"pwn",permalink:"/zh-Hans/blog/tags/pwn"}],readingTime:23.555,hasTruncateMarker:!0,authors:[{name:"Ye Shu",title:"Studying how C++ allocates and frees chunks in memory",url:"https://github.com/yechs",imageURL:"https://avatars.githubusercontent.com/u/49149993"}],frontMatter:{slug:"malloc_chunk",title:"\u5185\u5b58\u6cc4\u6f0f \u4e0e malloc chunk",author:"Ye Shu",author_title:"Studying how C++ allocates and frees chunks in memory",author_url:"https://github.com/yechs",author_image_url:"https://avatars.githubusercontent.com/u/49149993",image:"https://shuye.dev/img/yechs.jpeg",tags:["c++","pwn"]},unlisted:!1,nextItem:{title:"Me and My Broken Site(s)",permalink:"/zh-Hans/blog/welcome"}},c={authorsImageUrls:[void 0]},i=[{value:"\u6211\u4e3a\u4ec0\u4e48\u5199\u8fd9\u7bc7\u6587\u7ae0",id:"how-it-all-started",level:2}];function h(e){const t={a:"a",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"how-it-all-started",children:"\u6211\u4e3a\u4ec0\u4e48\u5199\u8fd9\u7bc7\u6587\u7ae0"}),"\n",(0,s.jsxs)(t.p,{children:["\u5728\u6211\u6691\u671f\u5b9e\u4e60\u671f\u95f4 debug \u4e00\u4e2a\u5185\u5b58\u6cc4\u6f0f\u7684\u95ee\u9898\u65f6\uff0c\u6211\u53d1\u73b0\u6211\u4f7f\u7528\u7684\u5176\u4e2d\u4e00\u4e2a API return \u4e86\u4e00\u4e2a\u88f8\u6307\u9488\uff0c\u4ece\u800c\u628a\u8fd9\u4e2a\u76ee\u6807\u7684 ownership \u8f6c\u79fb\u7ed9\u4e86\u8c03\u7528\u8005\uff08\u6211\uff09\u3002\u6362\u8a00\u4e4b\uff0c\u6211\u73b0\u5728\u9700\u8981\u8d1f\u8d23\u5728\u4ee3\u7801\u8fd0\u884c\u5b8c\u6bd5\u4e4b\u540e\u624b\u52a8 ",(0,s.jsx)(t.code,{children:"delete"})," \u6389\u8fd9\u4e2a\u6307\u9488\u3002\u5c3d\u7ba1\u8fd9\u662f\u4e00\u4e2a ",(0,s.jsx)(t.a,{href:"https://isocpp.github.io/CppCoreGuidelines/CppCoreGuidelines#i11-never-transfer-ownership-by-a-raw-pointer-t-or-reference-t",children:"\u975e\u5e38\u7cdf\u7cd5\u7684\u5de5\u7a0b\u5b9e\u8df5"}),"\uff0c\u6211\u5f00\u59cb\u5bf9\u5185\u5b58\u6cc4\u6f0f\u662f\u5982\u4f55\u4ea7\u751f\u7684\uff0c\u4ee5\u53ca ",(0,s.jsx)(t.code,{children:"delete[]"})," \u662f\u5982\u4f55\u5220\u9664\u5185\u5b58\u7684\u4ea7\u751f\u4e86\u5174\u8da3\u3002"]}),"\n",(0,s.jsx)(t.p,{children:"\u5728\u505a\u4e86\u4e00\u4e9b\u7814\u7a76\u4e0e\u5b9e\u9a8c\u540e\uff0c\u6211\u5199\u4e0b\u4e86\u8fd9\u7bc7\u6587\u7ae0\u3002\u672c\u6587\u5c06\u8bd5\u56fe\u56de\u7b54\u4e09\u7ec4\u95ee\u9898\uff1a"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"\u4ec0\u4e48\u662f\u5185\u5b58\u6cc4\u6f0f\uff1f"}),"\n",(0,s.jsxs)(t.li,{children:["\u5bf9\u8c61\u662f\u5982\u4f55\u5728 \u5806 (heap) \u4e0a\u88ab\u5206\u914d\u7684\uff1f",(0,s.jsx)(t.code,{children:"delete[]"})," \u5982\u4f55\u77e5\u9053\u5b83\u9700\u8981\u91ca\u653e\u54ea\u5757\u5185\u5b58\uff1f"]}),"\n",(0,s.jsx)(t.li,{children:"\u6211\u4eec\u5982\u4f55\u9884\u9632\u5185\u5b58\u6cc4\u6f0f\uff1f"}),"\n"]})]})}function u(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>l});var s=n(7294);const o={},a=s.createContext(o);function l(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);