"use strict";(self.webpackChunkso=self.webpackChunkso||[]).push([[156],{5680:(e,t,r)=>{r.d(t,{xA:()=>s,yg:()=>v});var n=r(6540);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=l(r),y=i,v=u["".concat(c,".").concat(y)]||u[y]||m[y]||o;return r?n.createElement(v,a(a({ref:t},s),{},{components:r})):n.createElement(v,a({ref:t},s))}));function v(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=y;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p[u]="string"==typeof e?e:i,a[1]=p;for(var l=2;l<o;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},3635:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var n=r(8168),i=(r(6540),r(5680));const o={},a="Time Server",p={unversionedId:"Application Interaction/Lab 12 - Application Interaction/Time Server/time-server",id:"Application Interaction/Lab 12 - Application Interaction/Time Server/time-server",title:"Time Server",description:"Check out the code in chapters/app-interact/time-server/support/server.c and chapters/app-interact/time-server/support/client.c.",source:"@site/docs/Application Interaction/Lab 12 - Application Interaction/Time Server/time-server.md",sourceDirName:"Application Interaction/Lab 12 - Application Interaction/Time Server",slug:"/Application Interaction/Lab 12 - Application Interaction/Time Server/time-server",permalink:"/operating-systems/76/Application Interaction/Lab 12 - Application Interaction/Time Server/time-server",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Time Server",permalink:"/operating-systems/76/Application Interaction/Lab 12 - Application Interaction/Time Server/"},next:{title:"Drills",permalink:"/operating-systems/76/Application Interaction/Lab 12 - Application Interaction/Time Server/Drills/"}},c={},l=[{value:"Python Version",id:"python-version",level:2}],s={toc:l},u="wrapper";function m(e){let{components:t,...r}=e;return(0,i.yg)(u,(0,n.A)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"time-server"},"Time Server"),(0,i.yg)("p",null,"Check out the code in ",(0,i.yg)("inlineCode",{parentName:"p"},"chapters/app-interact/time-server/support/server.c")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"chapters/app-interact/time-server/support/client.c"),"."),(0,i.yg)("p",null,"This is a simple program consisting of a server and a client.\nThe server uses a tcp socket to wait for connections.\nOnce a client has connected, the server will send the current time to it.\nThe client will then print the received time to the console."),(0,i.yg)("p",null,"Let's build and run this example:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-console"},"student@os:~/.../support$ make\ngcc -Wall -o server server.c\ngcc -Wall -o client client.c\nstudent@os:~/.../support$ ./server\n")),(0,i.yg)("p",null,"Then, in another terminal:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-console"},"student@os:~/.../support$ ./client 127.0.0.1 2000\nThe time is Thu Sep  1 11:48:03 2022\n")),(0,i.yg)("h2",{id:"python-version"},"Python Version"),(0,i.yg)("p",null,"In ",(0,i.yg)("inlineCode",{parentName:"p"},"chapters/app-interact/time-server/support/python")," we have the equivalent python implementation for both the server and client:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-console"},"student@os:~/.../support/python$ python3 server.py\n")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-console"},"student@os:~/.../support/python$ python3 client.py 127.0.0.1 2000\nThe time is Thu Sep  1 11:58:01 2022\n")))}m.isMDXComponent=!0}}]);