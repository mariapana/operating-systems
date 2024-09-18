"use strict";(self.webpackChunkso=self.webpackChunkso||[]).push([[1643],{5680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>h});var r=n(6540);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(n),y=s,h=m["".concat(l,".").concat(y)]||m[y]||u[y]||a;return n?r.createElement(h,o(o({ref:t},p),{},{components:n})):r.createElement(h,o({ref:t},p))}));function h(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=n.length,o=new Array(a);o[0]=y;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[m]="string"==typeof e?e:s,o[1]=i;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},9620:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var r=n(8168),s=(n(6540),n(5680));const a={},o="Nightly Builds System",i={unversionedId:"Exams/Nightly Builds System/nightly-builds-system",id:"Exams/Nightly Builds System/nightly-builds-system",title:"Nightly Builds System",description:"Scenario",source:"@site/docs/Exams/Nightly Builds System/nightly-builds-system.md",sourceDirName:"Exams/Nightly Builds System",slug:"/Exams/Nightly Builds System/nightly-builds-system",permalink:"/operating-systems/76/Exams/Nightly Builds System/nightly-builds-system",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Network Performance Utility",permalink:"/operating-systems/76/Exams/Network Performance Utility/network-performance-utility"},next:{title:"User-level Threading Library",permalink:"/operating-systems/76/Exams/User-level Threading Library/user-level-threading-library"}},l={},c=[{value:"Scenario",id:"scenario",level:2},{value:"Questions",id:"questions",level:2}],p={toc:c},m="wrapper";function u(e){let{components:t,...n}=e;return(0,s.yg)(m,(0,r.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,s.yg)("h1",{id:"nightly-builds-system"},"Nightly Builds System"),(0,s.yg)("h2",{id:"scenario"},"Scenario"),(0,s.yg)("p",null,"We are designing and implementing a nightly builds system, where different components and versions are compiled.\nThe system receives build requests in the form of build files (e.g., Makefiles).\nThe reception is done by a dispatcher component, which then forwards the requests to worker components to be executed.\nThe worker components can (and it's recommended) run on other systems\nIn this case, the sources for building are located on a shared storage space (network file system).\nDispatcher components collect the build results and, in case of system errors, transmit them to another component.\nIn case of runs without system errors, they transmit them back to the build requester."),(0,s.yg)("p",null,'Answer the following questions with "True" or "False" and justify your answer.\nThe justification should be simple, 2-3 sentences for each answer.'),(0,s.yg)("h2",{id:"questions"},"Questions"),(0,s.yg)("ol",null,(0,s.yg)("li",{parentName:"ol"},(0,s.yg)("p",{parentName:"li"},"The dispatcher component is a CPU-intensive process.\nAnswer: False")),(0,s.yg)("li",{parentName:"ol"},(0,s.yg)("p",{parentName:"li"},"The connection between the dispatcher component and the worker components can be established through network sockets.\nAnswer: True")),(0,s.yg)("li",{parentName:"ol"},(0,s.yg)("p",{parentName:"li"},"To utilize all available resources, worker components should use all system cores.\nFor this, we prefer a multi-threaded implementation over a multiprocess one.\nAnswer: False")),(0,s.yg)("li",{parentName:"ol"},(0,s.yg)("p",{parentName:"li"},"The dispatcher component can run on a Windows system.\nAnswer: True")),(0,s.yg)("li",{parentName:"ol"},(0,s.yg)("p",{parentName:"li"},"The dispatcher component can be implemented in an interpreted language (such as Python, Lua, Ruby).\nAnswer: True")),(0,s.yg)("li",{parentName:"ol"},(0,s.yg)("p",{parentName:"li"},"Build systems (where workers run) need to have processors specific to the targets they obtain (if we want to compile ARM targets, we need ARM processors).\nAnswer: False")),(0,s.yg)("li",{parentName:"ol"},(0,s.yg)("p",{parentName:"li"},"If we measure the time spent by the worker components, we will see that most of the time is spent in user space (user time) compared to kernel space (system time).\nAnswer: True")),(0,s.yg)("li",{parentName:"ol"},(0,s.yg)("p",{parentName:"li"},"The storage space requirement is higher for a worker component than for the dispatcher component.\nAnswer: True")),(0,s.yg)("li",{parentName:"ol"},(0,s.yg)("p",{parentName:"li"},"The system can function with just one worker component.\nAnswer: True")),(0,s.yg)("li",{parentName:"ol"},(0,s.yg)("p",{parentName:"li"},"The dispatcher component does not cause page faults.\nAnswer: False")),(0,s.yg)("li",{parentName:"ol"},(0,s.yg)("p",{parentName:"li"},"The dispatcher system can function as both a statically compiled and a dynamically compiled application.\nAnswer: True"))))}u.isMDXComponent=!0}}]);