"use strict";(self.webpackChunkso=self.webpackChunkso||[]).push([[2036],{5680:(e,t,n)=>{n.d(t,{xA:()=>s,yg:()=>u});var a=n(6540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},m="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=r,u=m["".concat(p,".").concat(d)]||m[d]||y[d]||i;return n?a.createElement(u,o(o({ref:t},s),{},{components:n})):a.createElement(u,o({ref:t},s))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[m]="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8333:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>y,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=n(8168),r=(n(6540),n(5680));const i={},o="Libraries and libc",l={unversionedId:"Software Stack/Lab 2 - Library Perspective/Libc/tasks/libc/README",id:"Software Stack/Lab 2 - Library Perspective/Libc/tasks/libc/README",title:"Libraries and libc",description:"Enter the libc/support/ folder and go through the practice items below.",source:"@site/docs/Software Stack/Lab 2 - Library Perspective/Libc/tasks/libc/README.md",sourceDirName:"Software Stack/Lab 2 - Library Perspective/Libc/tasks/libc",slug:"/Software Stack/Lab 2 - Library Perspective/Libc/tasks/libc/",permalink:"/operating-systems/55/Software Stack/Lab 2 - Library Perspective/Libc/tasks/libc/",draft:!1,tags:[],version:"current",frontMatter:{}},p={},c=[],s={toc:c},m="wrapper";function y(e){let{components:t,...n}=e;return(0,r.yg)(m,(0,a.A)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"libraries-and-libc"},"Libraries and libc"),(0,r.yg)("p",null,"Enter the ",(0,r.yg)("inlineCode",{parentName:"p"},"libc/support/")," folder and go through the practice items below."),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Use ",(0,r.yg)("inlineCode",{parentName:"p"},"malloc()")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"free()")," functions in the ",(0,r.yg)("inlineCode",{parentName:"p"},"memory.c")," program.\nMake your own use of the allocated memory."),(0,r.yg)("p",{parentName:"li"},"It's very easy to use memory management functions with the libc.\nThe alternative (without the libc) would be more cumbersome."),(0,r.yg)("p",{parentName:"li"},"Use different values for ",(0,r.yg)("inlineCode",{parentName:"p"},"malloc()"),", i.e. the allocation size.\nUse ",(0,r.yg)("inlineCode",{parentName:"p"},"strace")," to check the system calls invoked by ",(0,r.yg)("inlineCode",{parentName:"p"},"malloc()")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"free()"),".\nYou'll see that, depending on the size, the ",(0,r.yg)("inlineCode",{parentName:"p"},"brk()")," or ",(0,r.yg)("inlineCode",{parentName:"p"},"mmap()")," / ",(0,r.yg)("inlineCode",{parentName:"p"},"munmap()")," system calls are invoked.\nAnd for certain calls to ",(0,r.yg)("inlineCode",{parentName:"p"},"malloc()")," / ",(0,r.yg)("inlineCode",{parentName:"p"},"free()")," no syscall is happening.\nYou'll find more about them in the ",(0,r.yg)("a",{parentName:"p",href:"../../../data/lab"},"Data chapter"),".")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Create your own C program with calls to the standard C library in ",(0,r.yg)("inlineCode",{parentName:"p"},"vendetta.c"),".\nBe as creative as you can about the types of functions being made."),(0,r.yg)("p",{parentName:"li"},(0,r.yg)("a",{parentName:"p",href:"../drills/questions/libc.md"},"Quiz"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Inside the ",(0,r.yg)("inlineCode",{parentName:"p"},"vendetta.c")," file make a call ",(0,r.yg)("inlineCode",{parentName:"p"},'open("a.txt", O_RDWR | O_CREAT, 0644)')," to open / create the ",(0,r.yg)("inlineCode",{parentName:"p"},"a.txt")," file.\nMake sure you include all required headers.\nCheck the system call being made."),(0,r.yg)("p",{parentName:"li"},"Make an ",(0,r.yg)("inlineCode",{parentName:"p"},"fopen()")," with the proper arguments that gets as close as possible to the ",(0,r.yg)("inlineCode",{parentName:"p"},"open()")," call, i.e. the system call arguments are as close as possible.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Inside the ",(0,r.yg)("inlineCode",{parentName:"p"},"vendetta.c")," file make a call to ",(0,r.yg)("inlineCode",{parentName:"p"},"sin()")," function (for sine).\nCompute ",(0,r.yg)("inlineCode",{parentName:"p"},"sin(0)")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"sin(PI/2)"),"."))),(0,r.yg)("p",null,"If you're having difficulties solving this exercise, go through ",(0,r.yg)("a",{parentName:"p",href:"../../../reading/libc.md"},"this")," reading material."))}y.isMDXComponent=!0}}]);