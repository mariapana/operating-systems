"use strict";(self.webpackChunkso=self.webpackChunkso||[]).push([[8028],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},h="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),h=p(n),c=r,m=h["".concat(s,".").concat(c)]||h[c]||u[c]||i;return n?a.createElement(m,l(l({ref:t},d),{},{components:n})):a.createElement(m,l({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[h]="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},5558:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const i={},l="Parallel Graph",o={unversionedId:"Assignments/Parallel Graph/README",id:"Assignments/Parallel Graph/README",title:"Parallel Graph",description:"For this assignment we will implement a generic thread pool, which we will then use to traverse a graph and compute the sum of the elements contained by the nodes.",source:"@site/docs/Assignments/Parallel Graph/README.md",sourceDirName:"Assignments/Parallel Graph",slug:"/Assignments/Parallel Graph/",permalink:"/operating-systems/18/Assignments/Parallel Graph/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Memory Allocator",permalink:"/operating-systems/18/Assignments/Memory Allocator/"},next:{title:"Minishell",permalink:"/operating-systems/18/Assignments/Mini Shell/"}},s={},p=[{value:"Thread Pool Description",id:"thread-pool-description",level:2},{value:"Graph Traversal",id:"graph-traversal",level:2},{value:"Synchronization",id:"synchronization",level:2},{value:"Input Files",id:"input-files",level:2},{value:"Data Structures",id:"data-structures",level:2},{value:"Graph",id:"graph",level:3},{value:"List",id:"list",level:3},{value:"Thread pool",id:"thread-pool",level:3},{value:"Infrastructure",id:"infrastructure",level:2},{value:"Compilation",id:"compilation",level:3},{value:"Testing",id:"testing",level:3},{value:"Checker",id:"checker",level:3},{value:"Grading",id:"grading",level:2},{value:"Deployment",id:"deployment",level:2}],d={toc:p},h="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(h,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"parallel-graph"},"Parallel Graph"),(0,r.kt)("p",null,"For this assignment we will implement a generic thread pool, which we will then use to traverse a graph and compute the sum of the elements contained by the nodes.\nYou will be provided with a serial implementation of the graph traversal and with most of the data structures needed to implement the thread pool.\nYour job is to write the thread pool routines and then use the thread pool to traverse the graph."),(0,r.kt)("h2",{id:"thread-pool-description"},"Thread Pool Description"),(0,r.kt)("p",null,"A thread pool contains a given number of active threads that simply wait to be given specific tasks.\nThe threads are created when the thread pool is created they poll a task queue until a task is available.\nOnce tasks are put in the task queue, the threads start running the task.\nA thread pool creates N threads when the thread pool is created and does not destroy (join) them throughout the lifetime of the thread pool.\nThat way, the penalty of creating and destroying threads ad hoc is avoided.\nAs such, you must implement the following functions (marked with ",(0,r.kt)("inlineCode",{parentName:"p"},"TODO")," in the provided skeleton):"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"task_create"),": creates an ",(0,r.kt)("inlineCode",{parentName:"li"},"os_task_t")," that will be put in the task queue - a task consists of a function pointer and an argument."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"add_task_in_queue"),": adds a given task in the thread pool's task queue."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"get_task"),": get a task from the thread pool's task queue."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"threadpool_create"),": allocate and initialize a new thread pool."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"thread_loop_function"),": all the threads in the thread pool will execute this function - they all wait until a task is available in the task queue; once they grab a task they simply invoke the function that was provided to ",(0,r.kt)("inlineCode",{parentName:"li"},"task_create"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"threadpool_stop"),": stop all the threads from execution.")),(0,r.kt)("p",null,"Notice that the thread pool is completely independent from any given application.\nAny function can be registered in the task queue."),(0,r.kt)("h2",{id:"graph-traversal"},"Graph Traversal"),(0,r.kt)("p",null,"Once you have implemented the thread pool, you need to test it by using it for computing the sum of all the nodes of a graph.\nA serial implementation for this algorithm is provided in ",(0,r.kt)("inlineCode",{parentName:"p"},"skep/serial.c"),"\nTo make use of the thread pool, you will need to create tasks that will be put in the task queue.\nA task consists of 2 steps:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"adding the current node value to the overall sum."),(0,r.kt)("li",{parentName:"ul"},"creating tasks and adding them to the task queue for the neighbouring nodes.")),(0,r.kt)("p",null,"Since the threads are polling the task queue indefinitely, you need to find a condition for the threads to stop once the graph has been traversed completely.\nThis condition should be implemented in a function that is passed to ",(0,r.kt)("inlineCode",{parentName:"p"},"threadpool_stop"),".\n",(0,r.kt)("inlineCode",{parentName:"p"},"threadpool_stop")," then needs to wait for the condition to be satisfied and then joins all the threads."),(0,r.kt)("h2",{id:"synchronization"},"Synchronization"),(0,r.kt)("p",null,"For synchronization you can use mutexes, semaphores, spinlocks, condition variables - anything that grinds your gear.\nHowever, you are not allowed to use hacks such as ",(0,r.kt)("inlineCode",{parentName:"p"},"sleep"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"printf")," synchronization or adding superfluous computation."),(0,r.kt)("h2",{id:"input-files"},"Input Files"),(0,r.kt)("p",null,"Reading the graphs from the input files is being taken care of the functions implemented in ",(0,r.kt)("inlineCode",{parentName:"p"},"src/os_graph.c"),".\nA graph is represented in input files as follows:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"first line contains 2 integers N and M: N - number of nodes, M - numbed or edges"),(0,r.kt)("li",{parentName:"ul"},"second line contains N integer numbers - the values of the nodes"),(0,r.kt)("li",{parentName:"ul"},"the next M lines contain each 2 integers that represent the source and the destination of an edge")),(0,r.kt)("h2",{id:"data-structures"},"Data Structures"),(0,r.kt)("h3",{id:"graph"},"Graph"),(0,r.kt)("p",null,"A graph is represented internally as an ",(0,r.kt)("inlineCode",{parentName:"p"},"os_graph_t")," (see ",(0,r.kt)("inlineCode",{parentName:"p"},"src/os_graph.h"),")."),(0,r.kt)("h3",{id:"list"},"List"),(0,r.kt)("p",null,"A list is represented internally as an ",(0,r.kt)("inlineCode",{parentName:"p"},"os_queue_t")," (see ",(0,r.kt)("inlineCode",{parentName:"p"},"src/os_list.h"),").\nYou will use this list to implement the task queue."),(0,r.kt)("h3",{id:"thread-pool"},"Thread pool"),(0,r.kt)("p",null,"A thread pool is represented internally as an ",(0,r.kt)("inlineCode",{parentName:"p"},"os_threadpool_t")," (see ",(0,r.kt)("inlineCode",{parentName:"p"},"src/os_threadpool.h"),")\nThe thread pool contains information about the task queue and the threads."),(0,r.kt)("p",null,"You are not allowed to modify these data structures.\nHowever, you can create other data structures that leverage these ones."),(0,r.kt)("h2",{id:"infrastructure"},"Infrastructure"),(0,r.kt)("h3",{id:"compilation"},"Compilation"),(0,r.kt)("p",null,"To compile both the serial and the parallel version, enter the ",(0,r.kt)("inlineCode",{parentName:"p"},"src/")," directory and run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"make\n")),(0,r.kt)("p",null,"That will create the ",(0,r.kt)("inlineCode",{parentName:"p"},"serial")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"parallel")," binaries/"),(0,r.kt)("h3",{id:"testing"},"Testing"),(0,r.kt)("p",null,"Input tests cases are located in ",(0,r.kt)("inlineCode",{parentName:"p"},"tests/in/"),".\nThe parallel and the serial version should provide the same results for the same input test case."),(0,r.kt)("p",null,"If you want manually run a single test, use commands such as below while in the ",(0,r.kt)("inlineCode",{parentName:"p"},"src/")," directory:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"$./parallel ../tests/in/test5.in\n-11\n\n$ ./serial ../tests/in/test5.in\n-11\n")),(0,r.kt)("h3",{id:"checker"},"Checker"),(0,r.kt)("p",null,"The testing is automated and performed with the ",(0,r.kt)("inlineCode",{parentName:"p"},"checker.py")," script from the ",(0,r.kt)("inlineCode",{parentName:"p"},"tests/")," directory.\nIt's easiest to use the ",(0,r.kt)("inlineCode",{parentName:"p"},"Makefile")," to run the tests:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"$ make check\n[...]\nSRC_PATH=../src python checker.py\ntest1.in                         ....................... passed ...   4.5\ntest2.in                         ....................... passed ...   4.5\ntest3.in                         ....................... passed ...   4.5\ntest4.in                         ....................... passed ...   4.5\ntest5.in                         ....................... passed ...   4.5\ntest6.in                         ....................... passed ...   4.5\ntest7.in                         ....................... passed ...   4.5\ntest8.in                         ....................... passed ...   4.5\ntest9.in                         ....................... passed ...   4.5\ntest10.in                        ....................... passed ...   4.5\ntest11.in                        ....................... passed ...   4.5\ntest12.in                        ....................... passed ...   4.5\ntest13.in                        ....................... passed ...   4.5\ntest14.in                        ....................... passed ...   4.5\ntest15.in                        ....................... passed ...   4.5\ntest16.in                        ....................... passed ...   4.5\ntest17.in                        ....................... passed ...   4.5\ntest18.in                        ....................... passed ...   4.5\ntest19.in                        ....................... passed ...   4.5\ntest20.in                        ....................... passed ...   4.5\n\nTotal:                                                              90/100\n")),(0,r.kt)("p",null,"It's recommended that you use the ",(0,r.kt)("a",{parentName:"p",href:"README.checker.md#local-checker"},"local Docker-based checker"),".\nYou would use the command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"./local.sh checker\n")),(0,r.kt)("p",null,"to run the checker in a Docker-based environment that is identical to the one used for the official assignment evaluation."),(0,r.kt)("h2",{id:"grading"},"Grading"),(0,r.kt)("p",null,"The grade that the checker outputs is not the final grade.\nYour homework will be manually inspected and may suffer from penalties ranging from 1 to 100 points depending on the severity of the hack, including, but not limited to:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"using a single mutex at the beginning of the traversal"),(0,r.kt)("li",{parentName:"ul"},"not using the thread pool to solve the homework"),(0,r.kt)("li",{parentName:"ul"},"inefficient usage of synchronization"),(0,r.kt)("li",{parentName:"ul"},"incorrect graph traversal")),(0,r.kt)("h2",{id:"deployment"},"Deployment"),(0,r.kt)("p",null,"Your implementation needs to be contained in the ",(0,r.kt)("inlineCode",{parentName:"p"},"src/os_threadpool.c")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"src/os_parallel.c")," files.\nAny other files that you are using will not be taken into account.\nAny modifications that you are doing to the other files in the ",(0,r.kt)("inlineCode",{parentName:"p"},"src/")," directory will not be taken into account."))}u.isMDXComponent=!0}}]);