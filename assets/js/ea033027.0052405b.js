"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[958],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>d});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),p=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},l=function(e){var n=p(e.components);return r.createElement(c.Provider,{value:n},e.children)},y={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=p(t),d=o,m=u["".concat(c,".").concat(d)]||u[d]||y[d]||a;return t?r.createElement(m,s(s({ref:n},l),{},{components:t})):r.createElement(m,s({ref:n},l))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,s=new Array(a);s[0]=u;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var p=2;p<a;p++)s[p]=t[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},6649:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>y,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var r=t(7462),o=(t(7294),t(3905));const a={},s="Yarn Version Manager",i={unversionedId:"software/yarn",id:"software/yarn",title:"Yarn Version Manager",description:"yarn.lock",source:"@site/kb/software/yarn.md",sourceDirName:"software",slug:"/software/yarn",permalink:"/kb/software/yarn",draft:!1,editUrl:"https://github.com/yechs/website/edit/master/kb/software/yarn.md",tags:[],version:"current",frontMatter:{},sidebar:"kbSidebar",previous:{title:"Cross Compiling in C++",permalink:"/kb/software/cross-compile-c"}},c={},p=[],l={toc:p};function y(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"yarn-version-manager"},"Yarn Version Manager"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"$ /Users/yeshu/Coding/Personal/website/node_modules/.bin/tsc\nsrc/components/Gallery/index.tsx:13:6 - error TS2786: 'Masonry' cannot be used as a JSX component.\n  Its instance type 'Component<MasonryPropTypes, any, any>' is not a valid JSX element.\n    The types returned by 'render()' are incompatible between these types.\n      Type 'React.ReactNode' is not assignable to type 'import(\"/Users/yeshu/Coding/Personal/website/node_modules/@types/react-router-config/node_modules/@types/react/index\").ReactNode'.\n        Type '{}' is not assignable to type 'ReactNode'.\n\n13     <Masonry options={masonryOptions}>\n        ~~~~~~~\n\nFound 1 error in src/components/Gallery/index.tsx:13\n\nerror Command failed with exit code 2.\n")),(0,o.kt)("p",null,"yarn.lock"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yarn.lock"},'"@types/react@*":\n  version "18.0.14"\n  resolved "https://registry.yarnpkg.com/@types/react/-/react-18.0.14.tgz#e016616ffff51dba01b04945610fe3671fdbe06d"\n  integrity sha512-x4gGuASSiWmo0xjDLpm5mPb52syZHJx02VKbqUKdLmKtAwIh63XClGsiTI1K6DO5q7ox4xAsQrU+Gl3+gGXF9Q==\n  dependencies:\n    "@types/prop-types" "*"\n    "@types/scheduler" "*"\n    csstype "^3.0.2"\n\n"@types/react@17.0.47":\n  version "17.0.47"\n  resolved "https://registry.yarnpkg.com/@types/react/-/react-17.0.47.tgz#4ee71aaf4c5a9e290e03aa4d0d313c5d666b3b78"\n  integrity sha512-mk0BL8zBinf2ozNr3qPnlu1oyVTYq+4V7WA76RgxUAtf0Em/Wbid38KN6n4abEkvO4xMTBWmnP1FtQzgkEiJoA==\n  dependencies:\n    "@types/prop-types" "*"\n    "@types/scheduler" "*"\n    csstype "^3.0.2"\n')),(0,o.kt)("p",null,"Solution: package.json"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'"resolutions": {\n    "@types/react": "17.0.47"\n},\n')))}y.isMDXComponent=!0}}]);