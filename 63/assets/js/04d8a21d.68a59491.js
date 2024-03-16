"use strict";(self.webpackChunkso=self.webpackChunkso||[]).push([[2445],{5680:(e,t,n)=>{n.d(t,{xA:()=>s,yg:()=>g});var r=n(6540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),p=u(n),d=a,g=p["".concat(c,".").concat(d)]||p[d]||y[d]||l;return n?r.createElement(g,i(i({ref:t},s),{},{components:n})):r.createElement(g,i({ref:t},s))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[p]="string"==typeof e?e:a,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6144:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>y,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var r=n(8168),a=(n(6540),n(5680));const l={},i="libc",o={unversionedId:"Lab/Software Stack/quiz/libc",id:"Lab/Software Stack/quiz/libc",title:"libc",description:"malloc()",source:"@site/docs/Lab/Software Stack/quiz/libc.md",sourceDirName:"Lab/Software Stack/quiz",slug:"/Lab/Software Stack/quiz/libc",permalink:"/operating-systems/63/Lab/Software Stack/quiz/libc",draft:!1,tags:[],version:"current",frontMatter:{}},c={},u=[{value:"<code>malloc()</code>",id:"malloc",level:2},{value:"Question Text",id:"question-text",level:3},{value:"Question Answers",id:"question-answers",level:3},{value:"Feedback",id:"feedback",level:3},{value:"Syscall Tool",id:"syscall-tool",level:2},{value:"Question Text",id:"question-text-1",level:3},{value:"Question Answers",id:"question-answers-1",level:3},{value:"Feedback",id:"feedback-1",level:3}],s={toc:u},p="wrapper";function y(e){let{components:t,...n}=e;return(0,a.yg)(p,(0,r.A)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"libc"},"libc"),(0,a.yg)("h2",{id:"malloc"},(0,a.yg)("inlineCode",{parentName:"h2"},"malloc()")),(0,a.yg)("h3",{id:"question-text"},"Question Text"),(0,a.yg)("p",null,"What system calls are invoked by the ",(0,a.yg)("inlineCode",{parentName:"p"},"malloc()")," library call for Linux libc? (choose 2 answers)"),(0,a.yg)("h3",{id:"question-answers"},"Question Answers"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"brk"))),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"p"},"free"))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"p"},"dup")))),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"mmap"))),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"copy"))),(0,a.yg)("h3",{id:"feedback"},"Feedback"),(0,a.yg)("p",null,"Depending on the allocation size, ",(0,a.yg)("inlineCode",{parentName:"p"},"malloc()")," invokes ",(0,a.yg)("inlineCode",{parentName:"p"},"brk")," or ",(0,a.yg)("inlineCode",{parentName:"p"},"mmap"),"."),(0,a.yg)("h2",{id:"syscall-tool"},"Syscall Tool"),(0,a.yg)("h3",{id:"question-text-1"},"Question Text"),(0,a.yg)("p",null,"Which of following is ",(0,a.yg)("strong",{parentName:"p"},"not")," and advantage of using libc for programs?"),(0,a.yg)("h3",{id:"question-answers-1"},"Question Answers"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"increased portability")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"reduced executable size")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"richer set of features")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"easier development"))),(0,a.yg)("h3",{id:"feedback-1"},"Feedback"),(0,a.yg)("p",null,"When using libc, because we add a new software component, the size of the resulting executable increases."))}y.isMDXComponent=!0}}]);