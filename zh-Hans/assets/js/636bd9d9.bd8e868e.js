"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[782],{6762:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return u},metadata:function(){return s},assets:function(){return c},toc:function(){return h},default:function(){return m}});var a=n(3117),l=n(102),o=(n(7294),n(3905)),r=["components"],i={slug:"malloc_chunk",title:"\u5185\u5b58\u6cc4\u6f0f \u4e0e malloc chunk",author:"Ye Shu",author_title:"Studying how C++ allocates and frees chunks in memory",author_url:"https://github.com/yechs",author_image_url:"https://avatars.githubusercontent.com/u/49149993",image:"https://shuye.dev/img/yechs.jpeg",tags:["c++","pwn"]},u="\u5185\u5b58\u6cc4\u6f0f \u4e0e malloc chunk",s={permalink:"/zh-Hans/blog/malloc_chunk",editUrl:"https://github.com/yechs/website/edit/master/blog/blog/2021-08-13-malloc_chunks.mdx",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-blog/2021-08-13-malloc_chunks.mdx",title:"\u5185\u5b58\u6cc4\u6f0f \u4e0e malloc chunk",description:"\u6211\u4e3a\u4ec0\u4e48\u5199\u8fd9\u7bc7\u6587\u7ae0",date:"2021-08-13T00:00:00.000Z",formattedDate:"2021\u5e748\u670813\u65e5",tags:[{label:"c++",permalink:"/zh-Hans/blog/tags/c"},{label:"pwn",permalink:"/zh-Hans/blog/tags/pwn"}],readingTime:23.555,truncated:!0,authors:[{name:"Ye Shu",title:"Studying how C++ allocates and frees chunks in memory",url:"https://github.com/yechs",imageURL:"https://avatars.githubusercontent.com/u/49149993"}],nextItem:{title:"Me and My Broken Site(s)",permalink:"/zh-Hans/blog/welcome"}},c={authorsImageUrls:[void 0]},h=[{value:"\u6211\u4e3a\u4ec0\u4e48\u5199\u8fd9\u7bc7\u6587\u7ae0",id:"how-it-all-started",children:[],level:2}],p={toc:h};function m(e){var t=e.components,n=(0,l.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"how-it-all-started"},"\u6211\u4e3a\u4ec0\u4e48\u5199\u8fd9\u7bc7\u6587\u7ae0"),(0,o.kt)("p",null,"\u5728\u6211\u6691\u671f\u5b9e\u4e60\u671f\u95f4 debug \u4e00\u4e2a\u5185\u5b58\u6cc4\u6f0f\u7684\u95ee\u9898\u65f6\uff0c\u6211\u53d1\u73b0\u6211\u4f7f\u7528\u7684\u5176\u4e2d\u4e00\u4e2a API return \u4e86\u4e00\u4e2a\u88f8\u6307\u9488\uff0c\u4ece\u800c\u628a\u8fd9\u4e2a\u76ee\u6807\u7684 ownership \u8f6c\u79fb\u7ed9\u4e86\u8c03\u7528\u8005\uff08\u6211\uff09\u3002\u6362\u8a00\u4e4b\uff0c\u6211\u73b0\u5728\u9700\u8981\u8d1f\u8d23\u5728\u4ee3\u7801\u8fd0\u884c\u5b8c\u6bd5\u4e4b\u540e\u624b\u52a8 ",(0,o.kt)("inlineCode",{parentName:"p"},"delete")," \u6389\u8fd9\u4e2a\u6307\u9488\u3002\u5c3d\u7ba1\u8fd9\u662f\u4e00\u4e2a ",(0,o.kt)("a",{parentName:"p",href:"https://isocpp.github.io/CppCoreGuidelines/CppCoreGuidelines#i11-never-transfer-ownership-by-a-raw-pointer-t-or-reference-t"},"\u975e\u5e38\u7cdf\u7cd5\u7684\u5de5\u7a0b\u5b9e\u8df5"),"\uff0c\u6211\u5f00\u59cb\u5bf9\u5185\u5b58\u6cc4\u6f0f\u662f\u5982\u4f55\u4ea7\u751f\u7684\uff0c\u4ee5\u53ca ",(0,o.kt)("inlineCode",{parentName:"p"},"delete[]")," \u662f\u5982\u4f55\u5220\u9664\u5185\u5b58\u7684\u4ea7\u751f\u4e86\u5174\u8da3\u3002"),(0,o.kt)("p",null,"\u5728\u505a\u4e86\u4e00\u4e9b\u7814\u7a76\u4e0e\u5b9e\u9a8c\u540e\uff0c\u6211\u5199\u4e0b\u4e86\u8fd9\u7bc7\u6587\u7ae0\u3002\u672c\u6587\u5c06\u8bd5\u56fe\u56de\u7b54\u4e09\u7ec4\u95ee\u9898\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u4ec0\u4e48\u662f\u5185\u5b58\u6cc4\u6f0f\uff1f"),(0,o.kt)("li",{parentName:"ol"},"\u5bf9\u8c61\u662f\u5982\u4f55\u5728 \u5806 (heap) \u4e0a\u88ab\u5206\u914d\u7684\uff1f",(0,o.kt)("inlineCode",{parentName:"li"},"delete[]")," \u5982\u4f55\u77e5\u9053\u5b83\u9700\u8981\u91ca\u653e\u54ea\u5757\u5185\u5b58\uff1f"),(0,o.kt)("li",{parentName:"ol"},"\u6211\u4eec\u5982\u4f55\u9884\u9632\u5185\u5b58\u6cc4\u6f0f\uff1f")))}m.isMDXComponent=!0}}]);