"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[833],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),f=i,m=d["".concat(p,".").concat(f)]||d[f]||c[f]||o;return n?r.createElement(m,a(a({ref:t},u),{},{components:n})):r.createElement(m,a({ref:t},u))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var l=2;l<o;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5892:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=n(7462),i=(n(7294),n(3905));const o={},a="Jenkins CI/CD",s={unversionedId:"software/jenkins",id:"software/jenkins",title:"Jenkins CI/CD",description:"Deprecation of Ruby",source:"@site/kb/software/jenkins.md",sourceDirName:"software",slug:"/software/jenkins",permalink:"/kb/software/jenkins",draft:!1,editUrl:"https://github.com/yechs/website/edit/master/kb/software/jenkins.md",tags:[],version:"current",lastUpdatedAt:1660918229,formattedLastUpdatedAt:"Aug 19, 2022",frontMatter:{},sidebar:"kbSidebar",previous:{title:"Cross Compiling in C++",permalink:"/kb/software/cross-compile-c"},next:{title:"Picture Preprocessing",permalink:"/kb/webdev/pictures"}},p={},l=[{value:"Deprecation of Ruby",id:"deprecation-of-ruby",level:2}],u={toc:l};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"jenkins-cicd"},"Jenkins CI/CD"),(0,i.kt)("h2",{id:"deprecation-of-ruby"},"Deprecation of Ruby"),(0,i.kt)("p",null,"I encountered this problem while taking over a very old Jenkins server (looks like it has not been properly maintained for >4 years).\nWhile booting up, I encountered the following problem"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Loading plugin ruby-runtime v0.12 (ruby-runtime) failed perhaps due to plugin dependency issues\njava.lang.RuntimeException: unsupported Java version: 11\n")),(0,i.kt)("p",null,"However, it is impossible to boot up Jenkins with any earlier Java version, as Jenkins ",(0,i.kt)("a",{parentName:"p",href:"https://www.jenkins.io/blog/2022/06/28/require-java-11/"},"requires Java 11"),". Now we seem to end up in a dependency conflict."),(0,i.kt)("p",null,"This error happens because ruby-runtime has been deprecated for a long time (since 2018, see ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/jenkinsci/jep/blob/master/jep/7/README.adoc"},"JEP 7"),"). Thus, the remaining old plugins have prevented Jenkins from starting up.\nThe solution is to ssh into the server and manually disable the related plugins (for us, ",(0,i.kt)("inlineCode",{parentName:"p"},"rvm")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"ruby-runtime"),") by creating the files ",(0,i.kt)("inlineCode",{parentName:"p"},"$JENKINS_HOME/plugins/<plugin_name>.jpi.disabled"),"."),(0,i.kt)("p",null,"Then, restart Jenkins. It should be good to run again."))}c.isMDXComponent=!0}}]);