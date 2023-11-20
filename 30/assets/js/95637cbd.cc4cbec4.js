"use strict";(self.webpackChunkso=self.webpackChunkso||[]).push([[842],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>y});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=s(r),f=o,y=p["".concat(l,".").concat(f)]||p[f]||d[f]||a;return r?n.createElement(y,i(i({ref:t},c),{},{components:r})):n.createElement(y,i({ref:t},c))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u[p]="string"==typeof e?e:o,i[1]=u;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},9472:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>u,toc:()=>s});var n=r(7462),o=(r(7294),r(3905));const a={},i="Deluge: TCP or UDP",u={unversionedId:"Lab/IO/quiz/deluge-tcp-udp",id:"Lab/IO/quiz/deluge-tcp-udp",title:"Deluge: TCP or UDP",description:"Question Text",source:"@site/docs/Lab/IO/quiz/deluge-tcp-udp.md",sourceDirName:"Lab/IO/quiz",slug:"/Lab/IO/quiz/deluge-tcp-udp",permalink:"/operating-systems/30/Lab/IO/quiz/deluge-tcp-udp",draft:!1,tags:[],version:"current",frontMatter:{}},l={},s=[{value:"Question Text",id:"question-text",level:2},{value:"Question Answers",id:"question-answers",level:2},{value:"Feedback",id:"feedback",level:2}],c={toc:s},p="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"deluge-tcp-or-udp"},"Deluge: TCP or UDP"),(0,o.kt)("h2",{id:"question-text"},"Question Text"),(0,o.kt)("p",null,"Should Deluge use UDP or TCP to transfer torrent files?"),(0,o.kt)("h2",{id:"question-answers"},"Question Answers"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"It should use UDP for faster file transfers")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"It should use TCP to guarantee the integrity of the transferred files")),(0,o.kt)("h2",{id:"feedback"},"Feedback"),(0,o.kt)("p",null,"Speed is nice to have.\nCorrectness is mandatory in most scenarios, including this one.\nThe only situation when correctness may be overlooked is when some given data will be quckly replaced by some other data.\nBut files are persistent.\nIf you download a video game from as a torrent (we've all done that), you want to keep it for a while and first and foremost, it has to work properly, i.e. not be corrupt."))}d.isMDXComponent=!0}}]);