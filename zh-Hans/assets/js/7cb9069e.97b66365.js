"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[941],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),f=r,d=u["".concat(c,".").concat(f)]||u[f]||m[f]||o;return n?a.createElement(d,i(i({ref:t},p),{},{components:n})):a.createElement(d,i({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3616:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var a=n(7462),r=(n(7294),n(3905));const o={},i="C Macros",s={unversionedId:"software/c-macros",id:"software/c-macros",title:"C Macros",description:"A macro is a fragment of code which has been given a name. Whenever the name is used, it is replaced by the contents of the macro. There are two kinds of macros. They differ mostly in what they look like when they are used",source:"@site/kb/software/c-macros.md",sourceDirName:"software",slug:"/software/c-macros",permalink:"/zh-Hans/kb/software/c-macros",draft:!1,editUrl:"https://github.com/yechs/website/edit/master/kb/software/c-macros.md",tags:[],version:"current",lastUpdatedAt:1643559577,formattedLastUpdatedAt:"2022/1/30",frontMatter:{},sidebar:"kbSidebar",previous:{title:"Export Model w/ Weights",permalink:"/zh-Hans/kb/AI-engineering/Model-export"},next:{title:"Cross Compiling in C++",permalink:"/zh-Hans/kb/software/cross-compile-c"}},c={},l=[{value:"Stringify",id:"stringify",level:3},{value:"Min and Max",id:"min-and-max",level:3},{value:"Caveats",id:"caveats",level:2},{value:"Surround arguments in parentheses",id:"surround-arguments-in-parentheses",level:3}],p={toc:l};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"c-macros"},"C Macros"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"A macro is a fragment of code which has been given a name. Whenever the name is used, it is replaced by the contents of the macro. There are two kinds of macros. They differ mostly in what they look like when they are used\n",(0,r.kt)("em",{parentName:"p"},"Source: ",(0,r.kt)("a",{parentName:"em",href:"https://gcc.gnu.org/onlinedocs/cpp/Macros.html"},"https://gcc.gnu.org/onlinedocs/cpp/Macros.html")))),(0,r.kt)("p",null,"Here are some useful macros:"),(0,r.kt)("h3",{id:"stringify"},"Stringify"),(0,r.kt)("p",null,"The idea from Linux Kernel ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/torvalds/linux/blob/master/include/linux/stringify.h"},(0,r.kt)("inlineCode",{parentName:"a"},"stringify.h")),".\nIt translates any macros into a string."),(0,r.kt)("p",null,"By using nested calling of macros, ",(0,r.kt)("a",{parentName:"p",href:"https://gcc.gnu.org/onlinedocs/gcc-8.4.0/cpp/Argument-Prescan.html"},"Preprocessor Argument Prescan")," does not occur, so the argument is not macro-expanded."),(0,r.kt)("p",null,"For more details, read the gcc doc on ",(0,r.kt)("a",{parentName:"p",href:"https://gcc.gnu.org/onlinedocs/gcc-4.8.5/cpp/Stringification.html"},"Stringification"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},'#define __stringify_1(x...) #x\n#define __stringify(x...) __stringify_1(x)\n\n#define MAX_LEN 50\n\n\nscanf("%" __stringify(MAX_LEN) "s", &p);\n')),(0,r.kt)("h3",{id:"min-and-max"},"Min and Max"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"#define MAX(a,b) ((a) > (b) ? (a) : (b))\n#define MIN(a,b) ((a) < (b) ? (a) : (b))\n")),(0,r.kt)("p",null,"Note that C Macro is not the safest approach to do min and max. Some better alternatives are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://gcc.gnu.org/onlinedocs/gcc/Statement-Exprs.html#Statement-Exprs"},"Statement Expression")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-c"},"#define max(a,b)             \\\n({                           \\\n    __typeof__ (a) _a = (a); \\\n    __typeof__ (b) _b = (b); \\\n    _a > _b ? _a : _b;       \\\n})\n\n#define min(a,b)             \\\n({                           \\\n    __typeof__ (a) _a = (a); \\\n    __typeof__ (b) _b = (b); \\\n    _a < _b ? _a : _b;       \\\n})\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"C++ Template"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"template <typename T>\nT max(T a, T b)\n{\n    return a > b ? a : b;\n}\n\ntemplate <typename T>\nT min(T a, T b)\n{\n    return a < b ? a : b;\n}\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"C++ ",(0,r.kt)("inlineCode",{parentName:"p"},"std::max()")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"std::min()")))),(0,r.kt)("p",null,"Reference: ",(0,r.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/3437404/min-and-max-in-c/58532788#58532788"},"MIN and MAX in C - Stack Overflow")),(0,r.kt)("h2",{id:"caveats"},"Caveats"),(0,r.kt)("h3",{id:"surround-arguments-in-parentheses"},"Surround arguments in parentheses"),(0,r.kt)("p",null,"Since the macro does merely a textual substitution, the argument is not evaluated first (as in the form of a function)."),(0,r.kt)("p",null,"Consider the following example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"#define mul(x, y)  x * y\n#define mul2(x, y)  ((x) * (y))\n\nmul(a + 5, 6); /* a + 5 * 6 */\nmul2(a + 5, 6); /* ((a + 5) * (6)) */\n")),(0,r.kt)("p",null,"Reference: ",(0,r.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/7186504/c-macros-and-use-of-arguments-in-parentheses/7186517#7186517"},"C macros and use of arguments in parentheses - Stack Overflow")))}m.isMDXComponent=!0}}]);