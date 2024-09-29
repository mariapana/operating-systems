"use strict";(self.webpackChunkso=self.webpackChunkso||[]).push([[1727],{5680:(e,t,r)=>{r.d(t,{xA:()=>m,yg:()=>f});var n=r(6540);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),p=c(r),y=o,f=p["".concat(l,".").concat(y)]||p[y]||u[y]||a;return r?n.createElement(f,i(i({ref:t},m),{},{components:r})):n.createElement(f,i({ref:t},m))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=y;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},5915:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var n=r(8168),o=(r(6540),r(5680));const a={},i="`mmap()` file",s={unversionedId:"Data/Process Memory/Process Memory/questions/mmap-file",id:"Data/Process Memory/Process Memory/questions/mmap-file",title:"`mmap()` file",description:"Question Text",source:"@site/docs/Data/Process Memory/Process Memory/questions/mmap-file.md",sourceDirName:"Data/Process Memory/Process Memory/questions",slug:"/Data/Process Memory/Process Memory/questions/mmap-file",permalink:"/operating-systems/77/Data/Process Memory/Process Memory/questions/mmap-file",draft:!1,tags:[],version:"current",frontMatter:{}},l={},c=[{value:"Question Text",id:"question-text",level:2},{value:"Question Answers",id:"question-answers",level:2},{value:"Feedback",id:"feedback",level:2}],m={toc:c},p="wrapper";function u(e){let{components:t,...r}=e;return(0,o.yg)(p,(0,n.A)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"mmap-file"},(0,o.yg)("inlineCode",{parentName:"h1"},"mmap()")," file"),(0,o.yg)("h2",{id:"question-text"},"Question Text"),(0,o.yg)("p",null,"What is one advantage of mapping a file in memory?"),(0,o.yg)("h2",{id:"question-answers"},"Question Answers"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"It reduces interaction with the disk")),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"Consumes less memory")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"It is faster because it does not uses the file API")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"Allows all threads to use the same memory area"))),(0,o.yg)("h2",{id:"feedback"},"Feedback"),(0,o.yg)("p",null,"After mapping a file in memory, all changes will be visible only in memory.\nWhen removing the mapping or explicitely calling ",(0,o.yg)("inlineCode",{parentName:"p"},"msync()")," the information from memory will be visible on disk."))}u.isMDXComponent=!0}}]);