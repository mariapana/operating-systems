"use strict";(self.webpackChunkso=self.webpackChunkso||[]).push([[5044],{5680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>u});var a=t(6540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),l=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=l(e.components);return a.createElement(p.Provider,{value:n},e.children)},y="mdxType",h={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),y=l(t),m=r,u=y["".concat(p,".").concat(m)]||y[m]||h[m]||o;return t?a.createElement(u,i(i({ref:n},c),{},{components:t})):a.createElement(u,i({ref:n},c))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=m;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s[y]="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=t[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5844:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var a=t(8168),r=(t(6540),t(5680));const o={},i="Asynchronous I/O",s={unversionedId:"Lab/IO/async-io",id:"Lab/IO/async-io",title:"Asynchronous I/O",description:"When doing I/O, the major issue we are facing is that I/O operations are typically much slower than CPU operations.",source:"@site/docs/Lab/IO/async-io.md",sourceDirName:"Lab/IO",slug:"/Lab/IO/async-io",permalink:"/operating-systems/63/Lab/IO/async-io",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Zero-Copy",permalink:"/operating-systems/63/Lab/IO/zero-copy"},next:{title:"I/O Multiplexing",permalink:"/operating-systems/63/Lab/IO/io-multiplexing"}},p={},l=[{value:"Practice",id:"practice",level:2},{value:"Remarks",id:"remarks",level:2}],c={toc:l},y="wrapper";function h(e){let{components:n,...t}=e;return(0,r.yg)(y,(0,a.A)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"asynchronous-io"},"Asynchronous I/O"),(0,r.yg)("p",null,"When doing I/O, the major issue we are facing is that I/O operations are typically much slower than CPU operations.\nBecause of that, in a typical synchronous scenario, a lot of time may be spent waiting for an I/O operation to be complete."),(0,r.yg)("p",null,"Because of that, we have other types of I/O operations."),(0,r.yg)("p",null,"The simplest type of I/O operating is a synchronous, blocking operation.\nIn this operation type, we call a given function (such as ",(0,r.yg)("inlineCode",{parentName:"p"},"read()")," or ",(0,r.yg)("inlineCode",{parentName:"p"},"write()"),") and wait until it completes."),(0,r.yg)("p",null,"Another type of operation is a non-blocking operation.\nIn this type of operation, if data isn't available (in case of ",(0,r.yg)("inlineCode",{parentName:"p"},"read()"),") or can not be sent (in case of ",(0,r.yg)("inlineCode",{parentName:"p"},"write()"),"), the given call will not block, it will simply return with a mark to try again later on."),(0,r.yg)("p",null,"Another type of operation is an asynchronous operation.\nIn the case of an asynchronous operation, the given function returns immediately and the program continues its execution.\nOnce the operation succeeds, a notification may be sent out to the program.\nOr the program can periodically check the state of the operation."),(0,r.yg)("p",null,"Apart from these operating types, there is the option to do I/O multiplexing, i.e. the ability to tackle multiple channels simultaneously.\nThis is useful in case of servers, that get a large number of requests and have to iterate through them."),(0,r.yg)("p",null,'In case of asynchronous I/O, the "backend" used to implement the operations may differ:'),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"It can be a multiprocess backend, where each action / request is passed to a given process.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"It can be a multithreaded backend, where each action / request is passed to a given thread.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"It can be an event-based backend, where an action is scheduled together with a callback that is invoked when an action ends."))),(0,r.yg)("h2",{id:"practice"},"Practice"),(0,r.yg)("p",null,"Enter the ",(0,r.yg)("inlineCode",{parentName:"p"},"support/async/")," folder for some implementations of a simple request-reply server in Python or in C.\nThe server gets requests and serves them in different ways: synchronous, multiprocess-based, multi-threading-based, asynchronous."),(0,r.yg)("p",null,"We use two implementations, in Python and in C."),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"For the Python implementation, enter the ",(0,r.yg)("inlineCode",{parentName:"p"},"python/")," subdirectory.\nTake a look at the implementation of different servers:"),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"synchronous server: ",(0,r.yg)("inlineCode",{parentName:"li"},"server.py")),(0,r.yg)("li",{parentName:"ul"},"multiprocess backend: ",(0,r.yg)("inlineCode",{parentName:"li"},"mp_server.py")),(0,r.yg)("li",{parentName:"ul"},"multithreaded backend: ",(0,r.yg)("inlineCode",{parentName:"li"},"mt_server.py")),(0,r.yg)("li",{parentName:"ul"},"asynchronous API backend: ",(0,r.yg)("inlineCode",{parentName:"li"},"async_server.py")," (requires Python >= 3.7) and ",(0,r.yg)("inlineCode",{parentName:"li"},"async_server_3.6.py")," (works for Python 3.6)")),(0,r.yg)("p",{parentName:"li"},"Let's do a benchmarking session of each server type.\nFor this we will:"),(0,r.yg)("ol",{parentName:"li"},(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Start the server on one console.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Use the ",(0,r.yg)("inlineCode",{parentName:"p"},"client_bench.sh")," script to benchmark the server.\n",(0,r.yg)("inlineCode",{parentName:"p"},"client_bench.sh")," is a simple script that starts multiple clients to connect to the servers, by running ",(0,r.yg)("inlineCode",{parentName:"p"},"client.py"),".\nIt runs ",(0,r.yg)("inlineCode",{parentName:"p"},"NUM_CLIENT")," instances of ",(0,r.yg)("inlineCode",{parentName:"p"},"client.py")," to trigger actions in the remote server."),(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Note")," that you may be required to run servers on different ports in case of an ",(0,r.yg)("inlineCode",{parentName:"p"},"Address already in use error"),".\nIf that is the case, you will also need to run the ",(0,r.yg)("inlineCode",{parentName:"p"},"client_bench.sh")," script."))),(0,r.yg)("p",{parentName:"li"},"To start the server, run each of these commands (one at a time to test the respective server type):"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-console"},"student@os:/.../support/async/python$ ./server.py 2999\n\nstudent@os:/.../support/async/python$ ./mp_server.py 2999\n\nstudent@os:/.../support/async/python$ ./mt_server.py 2999\n\nstudent@os:/.../support/async/python$ ./async_server_3.6.py 2999\n")),(0,r.yg)("p",{parentName:"li"},"For each server, in a different console, we can test to see how well it behaves by running:"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-console"},"student@os:/.../support/async/python$ time ./client_bench.sh\n")),(0,r.yg)("p",{parentName:"li"},"You will see a time duration difference between ",(0,r.yg)("inlineCode",{parentName:"p"},"mp_server.py")," and the others, ",(0,r.yg)("inlineCode",{parentName:"p"},"mp_server.py")," runs requests faster.\nThis is because the multiprocess model works OK for a CPU-intensive server such as this."),(0,r.yg)("p",{parentName:"li"},"But not on threading, because threading suffers from the use of ",(0,r.yg)("a",{parentName:"p",href:"https://realpython.com/python-gil/"},"GIL (",(0,r.yg)("em",{parentName:"a"},"Global Interpreter Lock"),")"),", that prevents multithreaded programs from running Python code simultaneously.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"For the C implementation, enter the ",(0,r.yg)("inlineCode",{parentName:"p"},"c/")," subdirectory.\nTake a look at the implementation of different servers:"),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"synchronous server: ",(0,r.yg)("inlineCode",{parentName:"li"},"server.c")),(0,r.yg)("li",{parentName:"ul"},"multiprocess backend: ",(0,r.yg)("inlineCode",{parentName:"li"},"mp_server.c")),(0,r.yg)("li",{parentName:"ul"},"multithreaded backend: ",(0,r.yg)("inlineCode",{parentName:"li"},"mt_server.c"))),(0,r.yg)("p",{parentName:"li"},"There is no asynchronous C variant, because of the unstable API of ",(0,r.yg)("a",{parentName:"p",href:"https://pagure.io/libaio"},(0,r.yg)("inlineCode",{parentName:"a"},"libaio"))," and ",(0,r.yg)("a",{parentName:"p",href:"https://unixism.net/loti/what_is_io_uring.html"},(0,r.yg)("inlineCode",{parentName:"a"},"io_uring")),"."),(0,r.yg)("p",{parentName:"li"},"First, use ",(0,r.yg)("inlineCode",{parentName:"p"},"make")," to build the servers.\nThen, go through the same steps as above:"),(0,r.yg)("ol",{parentName:"li"},(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Start the server on one console.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Use the ",(0,r.yg)("inlineCode",{parentName:"p"},"client_bench.sh")," script (in the ",(0,r.yg)("inlineCode",{parentName:"p"},"../python/")," directory) to benchmark the server."))),(0,r.yg)("p",{parentName:"li"},"Same as with Python, to start the server, run each of these commands (one at a time to test the respective server type):"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-console"},"student@os:/.../support/async/c$ ./server 2999\n\nstudent@os:/.../support/async/c$ ./mp_server 2999\n\nstudent@os:/.../support/async/c$ ./mt_server 2999\n")),(0,r.yg)("p",{parentName:"li"},"For each server, in a different console, we can test to see how well it behaves by running:"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-console"},"student@os:/.../support/async/python$ time client_bench.sh\n")),(0,r.yg)("p",{parentName:"li"},"We draw 2 conclusions from using the C variant:"),(0,r.yg)("ol",{parentName:"li"},(0,r.yg)("li",{parentName:"ol"},"C is faster than Python"),(0,r.yg)("li",{parentName:"ol"},"The thread variant is indeed parallel, as now the GIL is no longer involved.")))),(0,r.yg)("h2",{id:"remarks"},"Remarks"),(0,r.yg)("p",null,"Asynchronous operations, as with others, provide an API, as is the case with the Python API or the ",(0,r.yg)("a",{parentName:"p",href:"https://pagure.io/libaio"},(0,r.yg)("inlineCode",{parentName:"a"},"libaio"))," and ",(0,r.yg)("a",{parentName:"p",href:"https://unixism.net/loti/what_is_io_uring.html"},(0,r.yg)("inlineCode",{parentName:"a"},"io_uring")),".\nThe backend of these operations may be a thread-based one in the library providing the API, or it may rely on support from the operating system.\nWhen aiming for performance, asynchronous I/O operations are part of the game.\nAnd it's very useful having a good understanding of what's happening behind the scenes."),(0,r.yg)("p",null,"For example, for the Python ",(0,r.yg)("inlineCode",{parentName:"p"},"async_server_3.6.py")," server, a message ",(0,r.yg)("inlineCode",{parentName:"p"},"asyncio: Using selector: EpollSelector")," is provided.\nThis means that the backend relies on the use of the ",(0,r.yg)("a",{parentName:"p",href:"https://man7.org/linux/man-pages/man7/epoll.7.html"},(0,r.yg)("inlineCode",{parentName:"a"},"epoll()")," function")," that's part of the ",(0,r.yg)("a",{parentName:"p",href:"/operating-systems/63/Lab/IO/io-multiplexing"},"I/O Multiplexing section"),"."),(0,r.yg)("p",null,"Also, for Python, the use of the GIL may be an issue when the operations are CPU intensive."),(0,r.yg)("p",null,"This last point deserves a discussion.\nIt's rare that servers or programs using asynchronous operations are CPU intensive.\nIt's more likely that they are I/O intensive, and the challenge is avoiding blocking points in multiple I/O channels;\nnot avoiding doing a lot of processing, as is the case with the ",(0,r.yg)("inlineCode",{parentName:"p"},"fibonacci()")," function.\nIn that particular case, having thread-based asynchronous I/O and the GIL will be a good option, as you rely on the thread scheduler to be able to serve multiple I/O channels simultaneously.\nThis later approach is called I/O multiplexing, discussed in ",(0,r.yg)("a",{parentName:"p",href:"/operating-systems/63/Lab/IO/io-multiplexing"},"the next section"),"."))}h.isMDXComponent=!0}}]);