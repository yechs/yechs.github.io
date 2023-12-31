"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[941],{2580:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var t=s(5893),a=s(1151);const r={},i="C Macros",c={id:"software/c-macros",title:"C Macros",description:"A macro is a fragment of code which has been given a name. Whenever the name is used, it is replaced by the contents of the macro. There are two kinds of macros. They differ mostly in what they look like when they are used",source:"@site/kb/software/c-macros.md",sourceDirName:"software",slug:"/software/c-macros",permalink:"/zh-Hans/kb/software/c-macros",draft:!1,unlisted:!1,editUrl:"https://github.com/yechs/website/edit/master/kb/software/c-macros.md",tags:[],version:"current",lastUpdatedAt:1643559577,formattedLastUpdatedAt:"2022\u5e741\u670830\u65e5",frontMatter:{},sidebar:"kbSidebar",previous:{title:"\u5f15\u8a00 \ud83d\udea7",permalink:"/zh-Hans/kb/intro"},next:{title:"Cross Compiling in C++",permalink:"/zh-Hans/kb/software/cross-compile-c"}},o={},l=[{value:"Stringify",id:"stringify",level:3},{value:"Min and Max",id:"min-and-max",level:3},{value:"Caveats",id:"caveats",level:2},{value:"Surround arguments in parentheses",id:"surround-arguments-in-parentheses",level:3}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"c-macros",children:"C Macros"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["A macro is a fragment of code which has been given a name. Whenever the name is used, it is replaced by the contents of the macro. There are two kinds of macros. They differ mostly in what they look like when they are used\n",(0,t.jsxs)(n.em,{children:["Source: ",(0,t.jsx)(n.a,{href:"https://gcc.gnu.org/onlinedocs/cpp/Macros.html",children:"https://gcc.gnu.org/onlinedocs/cpp/Macros.html"})]})]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Here are some useful macros:"}),"\n",(0,t.jsx)(n.h3,{id:"stringify",children:"Stringify"}),"\n",(0,t.jsxs)(n.p,{children:["The idea from Linux Kernel ",(0,t.jsx)(n.a,{href:"https://github.com/torvalds/linux/blob/master/include/linux/stringify.h",children:(0,t.jsx)(n.code,{children:"stringify.h"})}),".\nIt translates any macros into a string."]}),"\n",(0,t.jsxs)(n.p,{children:["By using nested calling of macros, ",(0,t.jsx)(n.a,{href:"https://gcc.gnu.org/onlinedocs/gcc-8.4.0/cpp/Argument-Prescan.html",children:"Preprocessor Argument Prescan"})," does not occur, so the argument is not macro-expanded."]}),"\n",(0,t.jsxs)(n.p,{children:["For more details, read the gcc doc on ",(0,t.jsx)(n.a,{href:"https://gcc.gnu.org/onlinedocs/gcc-4.8.5/cpp/Stringification.html",children:"Stringification"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:'#define __stringify_1(x...) #x\n#define __stringify(x...) __stringify_1(x)\n\n#define MAX_LEN 50\n\n\nscanf("%" __stringify(MAX_LEN) "s", &p);\n'})}),"\n",(0,t.jsx)(n.h3,{id:"min-and-max",children:"Min and Max"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:"#define MAX(a,b) ((a) > (b) ? (a) : (b))\n#define MIN(a,b) ((a) < (b) ? (a) : (b))\n"})}),"\n",(0,t.jsx)(n.p,{children:"Note that C Macro is not the safest approach to do min and max. Some better alternatives are:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://gcc.gnu.org/onlinedocs/gcc/Statement-Exprs.html#Statement-Exprs",children:"Statement Expression"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:"#define max(a,b)             \\\n({                           \\\n    __typeof__ (a) _a = (a); \\\n    __typeof__ (b) _b = (b); \\\n    _a > _b ? _a : _b;       \\\n})\n\n#define min(a,b)             \\\n({                           \\\n    __typeof__ (a) _a = (a); \\\n    __typeof__ (b) _b = (b); \\\n    _a < _b ? _a : _b;       \\\n})\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"C++ Template"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cpp",children:"template <typename T>\nT max(T a, T b)\n{\n    return a > b ? a : b;\n}\n\ntemplate <typename T>\nT min(T a, T b)\n{\n    return a < b ? a : b;\n}\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["C++ ",(0,t.jsx)(n.code,{children:"std::max()"})," and ",(0,t.jsx)(n.code,{children:"std::min()"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Reference: ",(0,t.jsx)(n.a,{href:"https://stackoverflow.com/questions/3437404/min-and-max-in-c/58532788#58532788",children:"MIN and MAX in C - Stack Overflow"})]}),"\n",(0,t.jsx)(n.h2,{id:"caveats",children:"Caveats"}),"\n",(0,t.jsx)(n.h3,{id:"surround-arguments-in-parentheses",children:"Surround arguments in parentheses"}),"\n",(0,t.jsx)(n.p,{children:"Since the macro does merely a textual substitution, the argument is not evaluated first (as in the form of a function)."}),"\n",(0,t.jsx)(n.p,{children:"Consider the following example:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:"#define mul(x, y)  x * y\n#define mul2(x, y)  ((x) * (y))\n\nmul(a + 5, 6); /* a + 5 * 6 */\nmul2(a + 5, 6); /* ((a + 5) * (6)) */\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Reference: ",(0,t.jsx)(n.a,{href:"https://stackoverflow.com/questions/7186504/c-macros-and-use-of-arguments-in-parentheses/7186517#7186517",children:"C macros and use of arguments in parentheses - Stack Overflow"})]})]})}function h(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>c,a:()=>i});var t=s(7294);const a={},r=t.createContext(a);function i(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);