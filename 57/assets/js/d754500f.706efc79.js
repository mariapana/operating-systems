"use strict";(self.webpackChunkso=self.webpackChunkso||[]).push([[8334],{5680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>m});var r=n(6540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),f=a,m=p["".concat(c,".").concat(f)]||p[f]||y[f]||i;return n?r.createElement(m,o(o({ref:t},u),{},{components:n})):r.createElement(m,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},1293:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>y,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=n(8168),a=(n(6540),n(5680));const i={},o="Effect of `execve()` Syscall",l={unversionedId:"Lab/IO/quiz/execve",id:"Lab/IO/quiz/execve",title:"Effect of `execve()` Syscall",description:"Question Text",source:"@site/docs/Lab/IO/quiz/execve.md",sourceDirName:"Lab/IO/quiz",slug:"/Lab/IO/quiz/execve",permalink:"/operating-systems/57/Lab/IO/quiz/execve",draft:!1,tags:[],version:"current",frontMatter:{}},c={},s=[{value:"Question Text",id:"question-text",level:2},{value:"Question Answers",id:"question-answers",level:2},{value:"Feedback",id:"feedback",level:2}],u={toc:s},p="wrapper";function y(e){let{components:t,...n}=e;return(0,a.yg)(p,(0,r.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"effect-of-execve-syscall"},"Effect of ",(0,a.yg)("inlineCode",{parentName:"h1"},"execve()")," Syscall"),(0,a.yg)("h2",{id:"question-text"},"Question Text"),(0,a.yg)("p",null,"What is the effect of the ",(0,a.yg)("inlineCode",{parentName:"p"},"execve()")," syscall?"),(0,a.yg)("h2",{id:"question-answers"},"Question Answers"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"it spawns a new process as the child of the current one")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"it executes a given shell command"))),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"it replaces the VAS of the current process with that of the file given as argument")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"it spawns a new shell and executes the given command")),(0,a.yg)("h2",{id:"feedback"},"Feedback"),(0,a.yg)("p",null,"The ",(0,a.yg)("a",{parentName:"p",href:"https://man7.org/linux/man-pages/man2/execve.2.html"},(0,a.yg)("inlineCode",{parentName:"a"},"man")," page")," says it all:"),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"execve() executes the program referred to by pathname.  This\ncauses the program that is currently being run by the calling\nprocess to be replaced with a new program, with newly initialized\nstack, heap, and (initialized and uninitialized) data segments.")),(0,a.yg)("p",null,"Simply put, we can say that ",(0,a.yg)("inlineCode",{parentName:"p"},"execve()")," replaces the VAS of the current process with that of the program given as argument."))}y.isMDXComponent=!0}}]);