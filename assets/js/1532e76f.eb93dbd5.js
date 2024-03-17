"use strict";(self.webpackChunkso=self.webpackChunkso||[]).push([[6506],{5680:(e,t,r)=>{r.d(t,{xA:()=>p,yg:()=>m});var n=r(6540);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var o=n.createContext({}),c=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(o.Provider,{value:t},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(r),f=i,m=u["".concat(o,".").concat(f)]||u[f]||y[f]||a;return r?n.createElement(m,l(l({ref:t},p),{},{components:r})):n.createElement(m,l({ref:t},p))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,l=new Array(a);l[0]=f;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[u]="string"==typeof e?e:i,l[1]=s;for(var c=2;c<a;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},7801:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>y,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var n=r(8168),i=(r(6540),r(5680));const a={},l="printf() System Call",s={unversionedId:"Software Stack/Lab 2 - Library Perspective/Libc/Drills/Questions/printf-syscall",id:"Software Stack/Lab 2 - Library Perspective/Libc/Drills/Questions/printf-syscall",title:"printf() System Call",description:"Question Text",source:"@site/docs/Software Stack/Lab 2 - Library Perspective/Libc/Drills/Questions/printf-syscall.md",sourceDirName:"Software Stack/Lab 2 - Library Perspective/Libc/Drills/Questions",slug:"/Software Stack/Lab 2 - Library Perspective/Libc/Drills/Questions/printf-syscall",permalink:"/operating-systems/Software Stack/Lab 2 - Library Perspective/Libc/Drills/Questions/printf-syscall",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Questions",permalink:"/operating-systems/Software Stack/Lab 2 - Library Perspective/Libc/Drills/Questions/"},next:{title:"strcpy() System Call",permalink:"/operating-systems/Software Stack/Lab 2 - Library Perspective/Libc/Drills/Questions/strcpy-syscall"}},o={},c=[{value:"Question Text",id:"question-text",level:2},{value:"Question Answers",id:"question-answers",level:2},{value:"Feedback",id:"feedback",level:2}],p={toc:c},u="wrapper";function y(e){let{components:t,...r}=e;return(0,i.yg)(u,(0,n.A)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"printf-system-call"},"printf() System Call"),(0,i.yg)("h2",{id:"question-text"},"Question Text"),(0,i.yg)("p",null,"What system call does the ",(0,i.yg)("inlineCode",{parentName:"p"},"printf()")," function invoke?"),(0,i.yg)("h2",{id:"question-answers"},"Question Answers"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"read"))),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"write"))),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"p"},"exec"))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"p"},"exit")))),(0,i.yg)("h2",{id:"feedback"},"Feedback"),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"printf()")," invokes the ",(0,i.yg)("inlineCode",{parentName:"p"},"write")," system call to print messages to standard output."))}y.isMDXComponent=!0}}]);