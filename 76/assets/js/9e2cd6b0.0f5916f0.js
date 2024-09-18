"use strict";(self.webpackChunkso=self.webpackChunkso||[]).push([[1668],{5680:(e,t,r)=>{r.d(t,{xA:()=>l,yg:()=>f});var n=r(6540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(r),y=a,f=u["".concat(s,".").concat(y)]||u[y]||d[y]||o;return r?n.createElement(f,i(i({ref:t},l),{},{components:r})):n.createElement(f,i({ref:t},l))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=y;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[u]="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},777:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var n=r(8168),a=(r(6540),r(5680));const o={},i=void 0,c={unversionedId:"Application Interaction/Lab 12 - Application Interaction/Password Cracker/tasks/password-cracker/README",id:"Application Interaction/Lab 12 - Application Interaction/Password Cracker/tasks/password-cracker/README",title:"README",description:"Creating 26 processes is not very realistic, since it's unlikely that a usual machine has that many cores.",source:"@site/docs/Application Interaction/Lab 12 - Application Interaction/Password Cracker/tasks/password-cracker/README.md",sourceDirName:"Application Interaction/Lab 12 - Application Interaction/Password Cracker/tasks/password-cracker",slug:"/Application Interaction/Lab 12 - Application Interaction/Password Cracker/tasks/password-cracker/",permalink:"/operating-systems/76/Application Interaction/Lab 12 - Application Interaction/Password Cracker/tasks/password-cracker/",draft:!1,tags:[],version:"current",frontMatter:{}},s={},p=[],l={toc:p},u="wrapper";function d(e){let{components:t,...r}=e;return(0,a.yg)(u,(0,n.A)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"Creating 26 processes is not very realistic, since it's unlikely that a usual machine has that many cores."),(0,a.yg)("p",null,"Modify the program so that it only creates 4 workers.\nEach worker will receive 2 characters instead of one, defining an interval to search.\nFor example, the first worker will receive ",(0,a.yg)("inlineCode",{parentName:"p"},"a")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"f"),", meaning it will brute-force passwords starting with ",(0,a.yg)("inlineCode",{parentName:"p"},"a"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"b"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"c"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"d"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"e"),", or ",(0,a.yg)("inlineCode",{parentName:"p"},"f"),", the second ",(0,a.yg)("inlineCode",{parentName:"p"},"g")," - ",(0,a.yg)("inlineCode",{parentName:"p"},"l"),", and so on."),(0,a.yg)("p",null,"Check that the ",(0,a.yg)("inlineCode",{parentName:"p"},"worker")," function is indeed called from different worker processes.\nOne simple way to do this is to print out the current process ID at the beginning of the function.\nTo get the current process ID, use the ",(0,a.yg)("inlineCode",{parentName:"p"},"getpid")," function from the ",(0,a.yg)("inlineCode",{parentName:"p"},"os")," module."))}d.isMDXComponent=!0}}]);