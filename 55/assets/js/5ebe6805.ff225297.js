"use strict";(self.webpackChunkso=self.webpackChunkso||[]).push([[517],{5680:(e,t,r)=>{r.d(t,{xA:()=>l,yg:()=>y});var n=r(6540);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=s(r),m=o,y=u["".concat(p,".").concat(m)]||u[m]||f[m]||i;return r?n.createElement(y,a(a({ref:t},l),{},{components:r})):n.createElement(y,a({ref:t},l))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=m;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c[u]="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5418:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>m,frontMatter:()=>a,metadata:()=>p,toc:()=>l});var n=r(8168),o=(r(6540),r(5680)),i=r(6025);const a={title:"Compute"},c=void 0,p={unversionedId:"Lecture/Compute",id:"Lecture/Compute",title:"Compute",description:"Focus the slides and press F for fullscreen viewing.",source:"@site/docs/Lecture/Compute.mdx",sourceDirName:"Lecture",slug:"/Lecture/Compute",permalink:"/operating-systems/55/Lecture/Compute",draft:!1,tags:[],version:"current",frontMatter:{title:"Compute"},sidebar:"sidebar",previous:{title:"Data",permalink:"/operating-systems/55/Lecture/Data"},next:{title:"IO",permalink:"/operating-systems/55/Lecture/IO"}},s={},l=[],u={toc:l},f="wrapper";function m(e){let{components:t,...r}=e;return(0,o.yg)(f,(0,n.A)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("div",{style:{display:"flex",width:"100%",height:"100%",flexDirection:"row"}},(0,o.yg)("iframe",{style:{flexGrow:1,border:"none",margin:0,padding:0},width:"100%",height:"500px",src:(0,i.A)("/slides/Compute/index.html")})),(0,o.yg)("br",null),(0,o.yg)("admonition",{type:"tip"},(0,o.yg)("p",{parentName:"admonition"},"Focus the slides and press ",(0,o.yg)("strong",{parentName:"p"},"F")," for fullscreen viewing.")))}m.isMDXComponent=!0}}]);