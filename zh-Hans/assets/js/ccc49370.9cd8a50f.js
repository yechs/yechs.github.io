(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[103],{6165:function(e,t,a){"use strict";a.d(t,{Z:function(){return E}});var l=a(9756),r=a(7294),n=a(6010),i=a(261),s=a(6742),m="sidebar_2ahu",o="sidebarItemTitle_2hhb",c="sidebarItemList_2xAf",d="sidebarItem_2UVv",g="sidebarItemLink_1RT6",u="sidebarItemLinkActive_12pM",p=a(4973);function v(e){var t=e.sidebar;return 0===t.items.length?null:r.createElement("nav",{className:(0,n.Z)(m,"thin-scrollbar"),"aria-label":(0,p.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},r.createElement("div",{className:(0,n.Z)(o,"margin-bottom--md")},t.title),r.createElement("ul",{className:c},t.items.map((function(e){return r.createElement("li",{key:e.permalink,className:d},r.createElement(s.Z,{isNavLink:!0,to:e.permalink,className:g,activeClassName:u},e.title))}))))}var b=a(571);var E=function(e){var t=e.sidebar,a=e.toc,s=e.children,m=(0,l.Z)(e,["sidebar","toc","children"]),o=t&&t.items.length>0;return r.createElement(i.Z,m,r.createElement("div",{className:"container margin-vert--lg"},r.createElement("div",{className:"row"},o&&r.createElement("aside",{className:"col col--3"},r.createElement(v,{sidebar:t})),r.createElement("main",{className:(0,n.Z)("col",{"col--7":o,"col--9 col--offset-1":!o})},s),a&&r.createElement("div",{className:"col col--2"},r.createElement(b.Z,{toc:a})))))}},3146:function(e,t,a){"use strict";a.d(t,{Z:function(){return v}});var l=a(7294),r=a(6010),n=a(3905),i=a(4973),s=a(6742),m=a(3018),o=a(637),c=a(1217),d=a(6146),g="blogPostTitle_GeHD",u="blogPostData_291c",p="blogPostDetailsFull_3kfx";var v=function(e){var t,a,v,b=(a=(0,m.c2)().selectMessage,function(e){var t=Math.ceil(e);return a(t,(0,i.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:t}))}),E=e.children,h=e.frontMatter,_=e.metadata,f=e.truncated,N=e.isBlogPostPage,Z=void 0!==N&&N,k=_.date,w=_.formattedDate,T=_.permalink,I=_.tags,P=_.readingTime,x=_.title,L=_.editUrl,M=h.author,A=h.image,R=h.keywords,U=h.author_url||h.authorURL,y=h.author_title||h.authorTitle,C=h.author_image_url||h.authorImageURL;return l.createElement(l.Fragment,null,l.createElement(c.Z,{keywords:R,image:A}),l.createElement("article",{className:Z?void 0:"margin-bottom--xl"},(v=Z?"h1":"h2",l.createElement("header",null,l.createElement(v,{className:g},Z?x:l.createElement(s.Z,{to:T},x)),l.createElement("div",{className:(0,r.Z)(u,"margin-vert--md")},l.createElement("time",{dateTime:k},w),P&&l.createElement(l.Fragment,null," \xb7 ",b(P))),l.createElement("div",{className:"avatar margin-vert--md"},C&&l.createElement(s.Z,{className:"avatar__photo-link avatar__photo",href:U},l.createElement("img",{src:C,alt:M})),l.createElement("div",{className:"avatar__intro"},M&&l.createElement(l.Fragment,null,l.createElement("div",{className:"avatar__name"},l.createElement(s.Z,{href:U},M)),l.createElement("small",{className:"avatar__subtitle"},y)))))),l.createElement("div",{className:"markdown"},l.createElement(n.Zo,{components:o.Z},E)),(I.length>0||f)&&l.createElement("footer",{className:(0,r.Z)("row docusaurus-mt-lg",(t={},t[p]=Z,t))},I.length>0&&l.createElement("div",{className:"col"},l.createElement("b",null,l.createElement(i.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),I.map((function(e){var t=e.label,a=e.permalink;return l.createElement(s.Z,{key:a,className:"margin-horiz--sm",to:a},t)}))),Z&&L&&l.createElement("div",{className:"col margin-top--sm"},l.createElement(d.Z,{editUrl:L})),!Z&&f&&l.createElement("div",{className:"col text--right"},l.createElement(s.Z,{to:_.permalink,"aria-label":"Read more about "+x},l.createElement("b",null,l.createElement(i.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More")))))))}},4147:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return c}});var l=a(7294),r=a(6165),n=a(3146),i=a(4973),s=a(6742);var m=function(e){var t=e.nextItem,a=e.prevItem;return l.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,i.I)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"})},l.createElement("div",{className:"pagination-nav__item"},a&&l.createElement(s.Z,{className:"pagination-nav__link",to:a.permalink},l.createElement("div",{className:"pagination-nav__sublabel"},l.createElement(i.Z,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post"},"Newer Post")),l.createElement("div",{className:"pagination-nav__label"},"\xab ",a.title))),l.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},t&&l.createElement(s.Z,{className:"pagination-nav__link",to:t.permalink},l.createElement("div",{className:"pagination-nav__sublabel"},l.createElement(i.Z,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post"},"Older Post")),l.createElement("div",{className:"pagination-nav__label"},t.title," \xbb"))))},o=a(3018);var c=function(e){var t=e.content,a=e.sidebar,i=t.frontMatter,s=t.metadata,c=s.title,d=s.description,g=s.nextItem,u=s.prevItem,p=i.hide_table_of_contents;return l.createElement(r.Z,{title:c,description:d,wrapperClassName:o.kM.wrapper.blogPages,pageClassName:o.kM.page.blogPostPage,sidebar:a,toc:!p&&t.toc?t.toc:void 0},l.createElement(n.Z,{frontMatter:i,metadata:s,isBlogPostPage:!0},l.createElement(t,null)),(g||u)&&l.createElement(m,{nextItem:g,prevItem:u}))}},6146:function(e,t,a){"use strict";a.d(t,{Z:function(){return c}});var l=a(7294),r=a(4973),n=a(2122),i=a(9756),s=a(6010),m="iconEdit_2_ui",o=function(e){var t=e.className,a=(0,i.Z)(e,["className"]);return l.createElement("svg",(0,n.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,s.Z)(m,t),"aria-hidden":"true"},a),l.createElement("g",null,l.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))};function c(e){var t=e.editUrl;return l.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener"},l.createElement(o,null),l.createElement(r.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}}}]);