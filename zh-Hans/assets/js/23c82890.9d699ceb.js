"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[628],{2188:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>y,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var a=n(7462),s=(n(7294),n(3905)),r=n(814);const o={},i="Yarn Version Manager",p={unversionedId:"software/yarn",id:"software/yarn",title:"Yarn Version Manager",description:"@types/... * version resolution",source:"@site/kb/software/yarn.mdx",sourceDirName:"software",slug:"/software/yarn",permalink:"/zh-Hans/kb/software/yarn",draft:!1,editUrl:"https://github.com/yechs/website/edit/master/kb/software/yarn.mdx",tags:[],version:"current",lastUpdatedAt:1657395537,formattedLastUpdatedAt:"2022\u5e747\u67089\u65e5",frontMatter:{},sidebar:"kbSidebar",previous:{title:"Cross Compiling in C++",permalink:"/zh-Hans/kb/software/cross-compile-c"}},l={},c=[{value:"<code>@types/... *</code> version resolution",id:"types--version-resolution",level:2},{value:"TL;DR",id:"tldr",level:3},{value:"Explanation",id:"explanation",level:3}],d={toc:c};function y(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"yarn-version-manager"},"Yarn Version Manager"),(0,s.kt)("h2",{id:"types--version-resolution"},(0,s.kt)("inlineCode",{parentName:"h2"},"@types/... *")," version resolution"),(0,s.kt)("h3",{id:"tldr"},"TL;DR"),(0,s.kt)("p",null,'Add the following lines, and replace "17.0.47" with your expected version, to your package.json. Normally you should keep ',(0,s.kt)("inlineCode",{parentName:"p"},"@types/react")," at the same major version with ",(0,s.kt)("inlineCode",{parentName:"p"},"react"),". So, consider using ",(0,s.kt)("a",{parentName:"p",href:"https://docs.npmjs.com/about-semantic-versioning#using-semantic-versioning-to-specify-update-types-your-package-can-accept"},(0,s.kt)("inlineCode",{parentName:"a"},"^")," specifier"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="package.json"',title:'"package.json"'},'"resolutions": {\n    "@types/react": "17.0.47"\n},\n')),(0,s.kt)("h3",{id:"explanation"},"Explanation"),(0,s.kt)("p",null,"Many typescript packages may depend on ",(0,s.kt)("inlineCode",{parentName:"p"},'"@types/react" "*"')," for React typing. However, without further specification, the ",(0,s.kt)("inlineCode",{parentName:"p"},"*")," will be resolved to the latest version."),(0,s.kt)("p",null,"This will be problematic if the latest React version introduces a breaking change to the current version. For example, I once experienced an error message shown below:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell-session"},"$ <REDACTED>/node_modules/.bin/tsc\nsrc/components/Gallery/index.tsx:13:6 - error TS2786: 'Masonry' cannot be used as a JSX component.\n  Its instance type 'Component<MasonryPropTypes, any, any>' is not a valid JSX element.\n    The types returned by 'render()' are incompatible between these types.\n      Type 'React.ReactNode' is not assignable to type 'import(\"<REDACTED>/node_modules/@types/react-router-config/node_modules/@types/react/index\").ReactNode'.\n        Type '{}' is not assignable to type 'ReactNode'.\n\n13     <Masonry options={masonryOptions}>\n        ~~~~~~~\n")),(0,s.kt)("p",null,"It turns out that I have multiple ",(0,s.kt)("inlineCode",{parentName:"p"},"@types/react")," installed. Even though I have explicitly required ",(0,s.kt)("inlineCode",{parentName:"p"},"@types/react 17.0.47")," in devDependencies, the ",(0,s.kt)("inlineCode",{parentName:"p"},"@types/react *")," required by other dependencies (such as ",(0,s.kt)("inlineCode",{parentName:"p"},"@types/react-router-config")," in this case) is still resolved to the latest v18.0.14."),(0,s.kt)("details",null,(0,s.kt)("summary",null,"See the ",(0,s.kt)("code",null,"yarn.lock")," file"),(0,s.kt)(r.Z,{language:"lock",title:"yarn.lock",mdxType:"CodeBlock"},'"@types/react@*":\n  version "18.0.14"\n  resolved "https://registry.yarnpkg.com/@types/react/-/react-18.0.14.tgz#e016616ffff51dba01b04945610fe3671fdbe06d"\n  integrity sha512-x4gGuASSiWmo0xjDLpm5mPb52syZHJx02VKbqUKdLmKtAwIh63XClGsiTI1K6DO5q7ox4xAsQrU+Gl3+gGXF9Q==\n  dependencies:\n    "@types/prop-types" "*"\n    "@types/scheduler" "*"\n    csstype "^3.0.2"\n','\n"@types/react@17.0.47":\n  version "17.0.47"\n  resolved "https://registry.yarnpkg.com/@types/react/-/react-17.0.47.tgz#4ee71aaf4c5a9e290e03aa4d0d313c5d666b3b78"\n  integrity sha512-mk0BL8zBinf2ozNr3qPnlu1oyVTYq+4V7WA76RgxUAtf0Em/Wbid38KN6n4abEkvO4xMTBWmnP1FtQzgkEiJoA==\n  dependencies:\n    "@types/prop-types" "*"\n    "@types/scheduler" "*"\n    csstype "^3.0.2"\n')),(0,s.kt)("p",null,"By adding the ",(0,s.kt)("inlineCode",{parentName:"p"},"resolutions")," configuration to package.json, the ",(0,s.kt)("inlineCode",{parentName:"p"},"@types/react")," package is pointing correctly to the React version used (v17), resolving this error message."))}y.isMDXComponent=!0}}]);