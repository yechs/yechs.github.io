"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[780],{9984:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var s=t(5893),r=t(1151),o=t(7999);const i={},a="Yarn Version Manager",c={id:"webdev/yarn",title:"Yarn Version Manager",description:"@types/... * version resolution",source:"@site/kb/webdev/yarn.mdx",sourceDirName:"webdev",slug:"/webdev/yarn",permalink:"/kb/webdev/yarn",draft:!1,unlisted:!1,editUrl:"https://github.com/yechs/website/edit/master/kb/webdev/yarn.mdx",tags:[],version:"current",lastUpdatedAt:1674254922,formattedLastUpdatedAt:"Jan 20, 2023",frontMatter:{},sidebar:"kbSidebar",previous:{title:"Picture Preprocessing",permalink:"/kb/webdev/pictures"}},d={},l=[{value:"<code>@types/... *</code> version resolution",id:"types--version-resolution",level:2},{value:"TL;DR",id:"tldr",level:3},{value:"Explanation",id:"explanation",level:3}];function p(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,r.a)(),...e.components},{Details:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"yarn-version-manager",children:"Yarn Version Manager"}),"\n",(0,s.jsxs)(n.h2,{id:"types--version-resolution",children:[(0,s.jsx)(n.code,{children:"@types/... *"})," version resolution"]}),"\n",(0,s.jsx)(n.h3,{id:"tldr",children:"TL;DR"}),"\n",(0,s.jsxs)(n.p,{children:['Add the following lines, and replace "17.0.47" with your expected version, to your package.json. Normally you should keep ',(0,s.jsx)(n.code,{children:"@types/react"})," at the same major version with ",(0,s.jsx)(n.code,{children:"react"}),". So, consider using ",(0,s.jsxs)(n.a,{href:"https://docs.npmjs.com/about-semantic-versioning#using-semantic-versioning-to-specify-update-types-your-package-can-accept",children:[(0,s.jsx)(n.code,{children:"^"})," specifier"]}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",metastring:'title="package.json"',children:'"resolutions": {\n    "@types/react": "17.0.47"\n},\n'})}),"\n",(0,s.jsx)(n.h3,{id:"explanation",children:"Explanation"}),"\n",(0,s.jsxs)(n.p,{children:["Many typescript packages may depend on ",(0,s.jsx)(n.code,{children:'"@types/react" "*"'})," for React typing. However, without further specification, the ",(0,s.jsx)(n.code,{children:"*"})," will be resolved to the latest version."]}),"\n",(0,s.jsx)(n.p,{children:"This will be problematic if the latest React version introduces a breaking change to the current version. For example, I once experienced an error message shown below:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell-session",children:"$ <REDACTED>/node_modules/.bin/tsc\nsrc/components/Gallery/index.tsx:13:6 - error TS2786: 'Masonry' cannot be used as a JSX component.\n  Its instance type 'Component<MasonryPropTypes, any, any>' is not a valid JSX element.\n    The types returned by 'render()' are incompatible between these types.\n      Type 'React.ReactNode' is not assignable to type 'import(\"<REDACTED>/node_modules/@types/react-router-config/node_modules/@types/react/index\").ReactNode'.\n        Type '{}' is not assignable to type 'ReactNode'.\n\n13     <Masonry options={masonryOptions}>\n        ~~~~~~~\n"})}),"\n",(0,s.jsxs)(n.p,{children:["It turns out that I have multiple ",(0,s.jsx)(n.code,{children:"@types/react"})," installed. Even though I have explicitly required ",(0,s.jsx)(n.code,{children:"@types/react 17.0.47"})," in devDependencies, the ",(0,s.jsx)(n.code,{children:"@types/react *"})," required by other dependencies (such as ",(0,s.jsx)(n.code,{children:"@types/react-router-config"})," in this case) is still resolved to the latest v18.0.14."]}),"\n","\n","\n",(0,s.jsxs)(t,{children:[(0,s.jsxs)("summary",{children:["See the ",(0,s.jsx)("code",{children:"yarn.lock"})," file"]}),(0,s.jsxs)(o.Z,{language:"lock",title:"yarn.lock",children:['"@types/react@*":\n  version "18.0.14"\n  resolved "https://registry.yarnpkg.com/@types/react/-/react-18.0.14.tgz#e016616ffff51dba01b04945610fe3671fdbe06d"\n  integrity sha512-x4gGuASSiWmo0xjDLpm5mPb52syZHJx02VKbqUKdLmKtAwIh63XClGsiTI1K6DO5q7ox4xAsQrU+Gl3+gGXF9Q==\n  dependencies:\n    "@types/prop-types" "*"\n    "@types/scheduler" "*"\n    csstype "^3.0.2"\n','\n"@types/react@17.0.47":\n  version "17.0.47"\n  resolved "https://registry.yarnpkg.com/@types/react/-/react-17.0.47.tgz#4ee71aaf4c5a9e290e03aa4d0d313c5d666b3b78"\n  integrity sha512-mk0BL8zBinf2ozNr3qPnlu1oyVTYq+4V7WA76RgxUAtf0Em/Wbid38KN6n4abEkvO4xMTBWmnP1FtQzgkEiJoA==\n  dependencies:\n    "@types/prop-types" "*"\n    "@types/scheduler" "*"\n    csstype "^3.0.2"\n']})]}),"\n",(0,s.jsxs)(n.p,{children:["By adding the ",(0,s.jsx)(n.code,{children:"resolutions"})," configuration to package.json, the ",(0,s.jsx)(n.code,{children:"@types/react"})," package is pointing correctly to the React version used (v17), resolving this error message."]})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}}}]);