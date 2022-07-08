"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[388],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=c(n),d=r,h=u["".concat(s,".").concat(d)]||u[d]||p[d]||i;return n?a.createElement(h,o(o({ref:t},m),{},{components:n})):a.createElement(h,o({ref:t},m))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6147:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const i={},o="Cross Compiling in C++",l={unversionedId:"software/cross-compile-c",id:"software/cross-compile-c",title:"Cross Compiling in C++",description:"Cross compilation happens when we are compiling the program on a system different to what the program will be running on.",source:"@site/kb/software/cross-compile-c.md",sourceDirName:"software",slug:"/software/cross-compile-c",permalink:"/kb/software/cross-compile-c",draft:!1,editUrl:"https://github.com/yechs/website/edit/master/kb/software/cross-compile-c.md",tags:[],version:"current",lastUpdatedAt:1643559577,formattedLastUpdatedAt:"1/30/2022",frontMatter:{},sidebar:"kbSidebar",previous:{title:"C Macros",permalink:"/kb/software/c-macros"},next:{title:"Yarn Version Manager",permalink:"/kb/software/yarn"}},s={},c=[{value:"Compile for ARMv7 under x64 Linux",id:"compile-for-armv7-under-x64-linux",level:2},{value:"Using CMake + GCC Toolchain",id:"using-cmake--gcc-toolchain",level:3},{value:"References",id:"references",level:4},{value:"Using CMake + LLVM Toolchain",id:"using-cmake--llvm-toolchain",level:3},{value:"Reference",id:"reference",level:4}],m={toc:c};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"cross-compiling-in-c"},"Cross Compiling in C++"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"http://en.wikipedia.org/wiki/Cross_compilation"},"Cross compilation")," happens when we are compiling the program on a system different to what the program will be running on."),(0,r.kt)("p",null,"It is used widely in embedded development, because many embedded devices lack the capacity for some serious compiling work. Hence, we would compile these programs on a powerful host machine and then ship them to the target machine (",(0,r.kt)("em",{parentName:"p"},"i.e.")," the embedded system)."),(0,r.kt)("h2",{id:"compile-for-armv7-under-x64-linux"},"Compile for ARMv7 under x64 Linux"),(0,r.kt)("h3",{id:"using-cmake--gcc-toolchain"},"Using CMake + GCC Toolchain"),(0,r.kt)("p",null,"A more conventional way to do so is to use the GCC toolchain, ",(0,r.kt)("em",{parentName:"p"},"i.e.")," the ",(0,r.kt)("inlineCode",{parentName:"p"},"gcc"),"/",(0,r.kt)("inlineCode",{parentName:"p"},"g++")," compilers, the ",(0,r.kt)("inlineCode",{parentName:"p"},"ld")," linker, and the ",(0,r.kt)("inlineCode",{parentName:"p"},"libstdc++")," libraries."),(0,r.kt)("p",null,"The toolchain should be included in most of the GNU/Linux systems. However, for cross compiling, we need to separately install the compilers and libraries for that specific architecture."),(0,r.kt)("p",null,"Here is a list of packages that worked for me under Ubuntu 18.04:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"gcc-7-arm-linux-gnueabihf")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"gcc-7-multilib-arm-linux-gnueabihf")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"g++-7-arm-linux-gnueabihf")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"g++-7-multilib-arm-linux-gnueabihf")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"binutils-arm-linux-gnueabihf")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"libgcc1-armhf-cross")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"libstdc++-7-dev-armhf-cross"))),(0,r.kt)("p",null,"To do the actual compiling, you should include the following lines in the CMake file, which specifically tells it to use the gcc cross compiler for armhf and to compile for that architecture. Tweak the ",(0,r.kt)("inlineCode",{parentName:"p"},"-march")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"-mcpu")," flag according to your platform and then you should be able to compile it as usual."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cmake"},'set(CMAKE_SYSTEM_NAME Linux)\nset(CMAKE_SYSTEM_PROCESSOR arm)\n\nset(CMAKE_C_COMPILER arm-linux-gnueabihf-gcc-7)\nset(CMAKE_CXX_COMPILER arm-linux-gnueabihf-g++-7)\n\n# Some websites also adds "-mfloat-abi=hard" which produces error in my environment (gcc v7.5)\nset(CMAKE_CXX_FLAGS "${CMAKE_CXX_FLAGS} -march=armv7-a -mcpu=cortex-a9")\n')),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"If there are still errors produced at the linking stage, check if the linked libraries are also compiled in the wanted architecture (i.e. armhf). You may also need to cross-compile them from source."))),(0,r.kt)("h4",{id:"references"},"References"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://cmake.org/cmake/help/latest/manual/cmake-toolchains.7.html#cross-compiling-for-linux"},"cmake-toolchains(7)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://llvm.org/docs/HowToCrossCompileLLVM.html#cross-compiling-from-x86-64-to-arm"},"Cross-Compiling from x86_64 to ARM - How To Cross-Compile Clang/LLVM using Clang/LLVM"))),(0,r.kt)("h3",{id:"using-cmake--llvm-toolchain"},"Using CMake + LLVM Toolchain"),(0,r.kt)("p",null,"Clang in the LLVM Toolchain is inherently a cross compiler, so it ",(0,r.kt)("em",{parentName:"p"},"should")," ",(0,r.kt)("em",{parentName:"p"},"theoretically")," be easier to work (while in reality...I gave up while compiling on a Ubuntu 18.04)"),(0,r.kt)("p",null,"In LLVM, we use ",(0,r.kt)("inlineCode",{parentName:"p"},"clang")," as compiler, ",(0,r.kt)("inlineCode",{parentName:"p"},"lld")," as linker, and ",(0,r.kt)("inlineCode",{parentName:"p"},"libc++")," as libraries."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"TODO"),": figure out how to get this to work."),(0,r.kt)("p",null,"You should set the target triplet based on the architecture you wan to compile to. Then, you should be able to compile as usual."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cmake"},"set(CMAKE_SYSTEM_NAME Linux)\nset(CMAKE_SYSTEM_PROCESSOR arm)\n\nset(triple arm-linux-gnueabihf)\n\nset(CMAKE_C_COMPILER clang)\nset(CMAKE_C_COMPILER_TARGET ${triple})\nset(CMAKE_CXX_COMPILER clang++)\nset(CMAKE_CXX_COMPILER_TARGET ${triple})\n")),(0,r.kt)("h4",{id:"reference"},"Reference"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://clang.llvm.org/docs/CrossCompilation.html"},"Cross-compilation using Clang - Clang documentation")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://cmake.org/cmake/help/latest/manual/cmake-toolchains.7.html#cross-compiling-using-clang"},"Cross Compiling using Clang - cmake-toolchains(7)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://archive.fosdem.org/2018/schedule/event/crosscompile/attachments/slides/2107/export/events/attachments/crosscompile/slides/2107/How_to_cross_compile_with_LLVM_based_tools.pdf"},"How to cross compile with LLVM based tools (slide)"))))}p.isMDXComponent=!0}}]);