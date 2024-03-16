"use strict";(self.webpackChunkso=self.webpackChunkso||[]).push([[6142],{5680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>g});var r=n(6540);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(n),y=i,g=m["".concat(l,".").concat(y)]||m[y]||u[y]||a;return n?r.createElement(g,o(o({ref:t},c),{},{components:n})):r.createElement(g,o({ref:t},c))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=y;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:i,o[1]=s;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},9211:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var r=n(8168),i=(n(6540),n(5680));const a={},o="Digital Forensics",s={unversionedId:"Exams/Digital Forensics/digital-forensics",id:"Exams/Digital Forensics/digital-forensics",title:"Digital Forensics",description:"Scenario",source:"@site/docs/Exams/Digital Forensics/digital-forensics.md",sourceDirName:"Exams/Digital Forensics",slug:"/Exams/Digital Forensics/digital-forensics",permalink:"/operating-systems/63/Exams/Digital Forensics/digital-forensics",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Exams",permalink:"/operating-systems/63/Exams/"},next:{title:"Distributed system",permalink:"/operating-systems/63/Exams/Distributed System/distributed-system"}},l={},p=[{value:"Scenario",id:"scenario",level:2},{value:"Questions",id:"questions",level:2}],c={toc:p},m="wrapper";function u(e){let{components:t,...n}=e;return(0,i.yg)(m,(0,r.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"digital-forensics"},"Digital Forensics"),(0,i.yg)("h2",{id:"scenario"},"Scenario"),(0,i.yg)("p",null,"For digital forensics operations (digital evidence investigation), we want to develop an application that dumps the entire physical memory (RAM) of a modern operating system (such as Linux, Windows, macOS).\nWe assume there is a dedicated interface of the operating system that allows reading of physical memory for dumping.\nThe application can dump to a file or to standard output (for redirection to a file or network redirection).\nThe result is a dump with the size of the physical memory (RAM) of the system."),(0,i.yg)("p",null,'Answer the following questions with "True" or "False" and justify your answer.\nThe justification should be simple, 2-3 sentences for each answer.'),(0,i.yg)("h2",{id:"questions"},"Questions"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"The application must be run in privileged mode, as root.\nAnswer: True")),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"During its execution, the application does not make system calls.\nAnswer: False")),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"The application will benefit from a multithreaded implementation.\nAnswer: True")),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"The memory dump will contain information about the application itself.\nAnswer: True")),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"At runtime, the application will use network sockets.\nAnswer: False")),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Two instances of the application CANNOT run simultaneously on the same system.\nAnswer: False")),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"In its implementation, the application must use synchronization primitives.\nAnswer: False")),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"The application must be implemented in the form of a static executable.\nAnswer: False")),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"During its execution, the application uses the virtual memory mechanism.\nAnswer: True")),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"The application cannot realistically be used on a 64-bit system, only on a 32-bit system.\nAnswer: False")),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"As long as the operating system provides support, the application can work on both x86 and ARM processor architectures.\nAnswer: False"))))}u.isMDXComponent=!0}}]);