"use strict";(self.webpackChunkso=self.webpackChunkso||[]).push([[4675],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),c=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),d=a,h=p["".concat(s,".").concat(d)]||p[d]||m[d]||r;return n?i.createElement(h,o(o({ref:t},u),{},{components:n})):i.createElement(h,o({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<r;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3381:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var i=n(7462),a=(n(7294),n(3905));const r={},o="Lambda Function Loader",l={unversionedId:"Hackathons/Lambda Function Loader/README",id:"Hackathons/Lambda Function Loader/README",title:"Lambda Function Loader",description:"Application Development",source:"@site/docs/Hackathons/Lambda Function Loader/README.md",sourceDirName:"Hackathons/Lambda Function Loader",slug:"/Hackathons/Lambda Function Loader/",permalink:"/operating-systems/44/Hackathons/Lambda Function Loader/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Hackathons",permalink:"/operating-systems/44/Hackathons/"},next:{title:"Rules and Grading",permalink:"/operating-systems/44/rules-and-grading"}},s={},c=[{value:"Application Development",id:"application-development",level:2},{value:"Implementation Details and Notes",id:"implementation-details-and-notes",level:3},{value:"Necessary Theoretical Concepts",id:"necessary-theoretical-concepts",level:3},{value:"Testing",id:"testing",level:3},{value:"Example Run",id:"example-run",level:4},{value:"Checker Run",id:"checker-run",level:4},{value:"Additional Tasks / Tie-breakers",id:"additional-tasks--tie-breakers",level:3}],u={toc:c},p="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"lambda-function-loader"},"Lambda Function Loader"),(0,a.kt)("h2",{id:"application-development"},"Application Development"),(0,a.kt)("p",null,"All development work should be carried out exclusively within the ",(0,a.kt)("a",{parentName:"p",href:"https://cs-pub-ro.github.io/operating-systems/resources#virtual-machine"},"virtual machines dedicated to Operating Systems"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note:"),"\nIt's crucial to avoid running tests locally, either on personal computers or within your allocated virtual machines.\nDiscrepancies might arise between local environments and the dedicated OS virtual machines.\nGrading will consider results obtained solely in the OS virtual machine environment."),(0,a.kt)("p",null,"The core of this project revolves around the construction of a system capable of dynamic library loading and subsequent function execution.\nThe project architecture embraces a ",(0,a.kt)("a",{parentName:"p",href:"https://cs-pub-ro.github.io/operating-systems/Lab/IO/client-server-model"},"client-server model"),", where the server is responsible for receiving and fulfilling requests to execute functions sourced from specific dynamic libraries present within the system."),(0,a.kt)("p",null,"This functionality marks the initial phase toward realizing capabilities akin to ",(0,a.kt)("a",{parentName:"p",href:"https://aws.amazon.com/lambda/"},"AWS Lambda"),".\nIn this context, users can load and execute functions across distinct servers upon request.\nIn our envisioned project, these functions are pre-implemented within libraries, and the client instigates their execution by issuing specific commands to the server.\nDetailed below are the primary requisites and potential enhancements."),(0,a.kt)("h3",{id:"implementation-details-and-notes"},"Implementation Details and Notes"),(0,a.kt)("p",null,"The implementation involves the capability to receive commands utilizing ",(0,a.kt)("a",{parentName:"p",href:"https://cs-pub-ro.github.io/operating-systems/Lab/IO/beyond-network-sockets#unix-sockets"},"UNIX sockets"),", encompassing the designation of a library (the path to the library file) and optionally specifying a function.\nA command transmitted from the client to the server conforms to the format: ",(0,a.kt)("inlineCode",{parentName:"p"},"<libname> [<funcname> [<filename>]]")," where:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"libname")," represents the path to the intended library."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"funcname")," is an optional parameter denoting the function's name within the library.\nBy default, if unspecified, the function used is named ",(0,a.kt)("inlineCode",{parentName:"li"},"run"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"filename")," is an optional parameter indicating the filename containing input data, provided as an argument to the ",(0,a.kt)("inlineCode",{parentName:"li"},"funcname")," function.")),(0,a.kt)("p",null,"The resulting output data generated from execution will be written to a file, and the file's name is returned as a response to the client.\nThis returned file exclusively contains messages printed to the standard output by the invoked library function."),(0,a.kt)("p",null,"The communication sequence between the client and server follows this structure:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-plaintext"},"Client                                              Server\n                                                    listen()\nconnect()                                           accept()\nsend()     -\u2014---libname [funcname [filename]]-----\x3e recv()\nrecv()     <--------------outputfile--------------- send()\n")),(0,a.kt)("p",null,"Post receiving and parsing a message from a client, the server systematically triggers a series of functions, each serving distinct purposes:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Prepare/pre-hooks: Initial operations independent of loading the library or executing functions."),(0,a.kt)("li",{parentName:"ul"},"Library loading: Loading the library and other related management tasks."),(0,a.kt)("li",{parentName:"ul"},"Execution of requested functionality:\nExecution of the specified function from the library.\nIf ",(0,a.kt)("inlineCode",{parentName:"li"},"funcname")," is absent, the ",(0,a.kt)("inlineCode",{parentName:"li"},"run")," function is invoked.\nThe ",(0,a.kt)("inlineCode",{parentName:"li"},"filename")," parameter is permissible only when ",(0,a.kt)("inlineCode",{parentName:"li"},"funcname")," is specified."),(0,a.kt)("li",{parentName:"ul"},"Unloading the library: Procedures associated with unloading the library from memory."),(0,a.kt)("li",{parentName:"ul"},"Post-hooks:\nOperations conducted after execution, regardless of the library's presence in memory.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Tip:"),"\nThe mentioned five functions serve as guidelines.\nDepending on the implementation, some functions might remain as stubs if not fully implemented."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Important:"),"\nThe server's implementation must be ",(0,a.kt)("strong",{parentName:"p"},"parallelized")," to expedite the handling of client requests.\nEach team is responsible for selecting the parallelization model (via processes, threads, hybrid methods, utilizing work pools, etc.) based on the project's objectives."),(0,a.kt)("p",null,"Fundamental functionality necessitates implementation in C, designed for the Linux operating system, employing the POSIX API:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Establishment of client-server connection.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"The connection will utilize UNIX Sockets through the ",(0,a.kt)("inlineCode",{parentName:"li"},"libipc.so")," library."),(0,a.kt)("li",{parentName:"ul"},"Necessary functions for creating, connecting, and sending/receiving data in this library (",(0,a.kt)("inlineCode",{parentName:"li"},"libipc.so"),") will be included."),(0,a.kt)("li",{parentName:"ul"},"The library can be modified as long as the provided test client (",(0,a.kt)("inlineCode",{parentName:"li"},"checker/client.c"),") compiles and connects to the server successfully."),(0,a.kt)("li",{parentName:"ul"},"The test client (",(0,a.kt)("inlineCode",{parentName:"li"},"checker/client.c"),") remains unmodifiable.\nAny changes required for additional functionalities should be implemented in a new test client."))),(0,a.kt)("li",{parentName:"ul"},"Communication between client and server: The client transmits requests following the specified format and awaits the response, which contains the file path in the system storing the results.\nThe server receives and processes the client's request."),(0,a.kt)("li",{parentName:"ul"},"Server request handling: Parsing the received command, loading the library, and executing the requested function from the library.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"In case of an error, an error message, ",(0,a.kt)("inlineCode",{parentName:"li"},"Error: <command> could not be executed."),", followed by relevant error messages (Hint: utilize ",(0,a.kt)("inlineCode",{parentName:"li"},"strerror()"),"), will be written to the output file."),(0,a.kt)("li",{parentName:"ul"},"The output file will be created with a randomly generated name employing the ",(0,a.kt)("inlineCode",{parentName:"li"},"mkstemp()")," function, utilizing ",(0,a.kt)("inlineCode",{parentName:"li"},"OUTPUTFILE_TEMPLATE")," as a filename template."))),(0,a.kt)("li",{parentName:"ul"},"Returning a response to the client:\nThe response entails the filename generated in the preceding step based on ",(0,a.kt)("inlineCode",{parentName:"li"},"OUTPUTFILE_TEMPLATE"),"."),(0,a.kt)("li",{parentName:"ul"},"Parallelizing the client handling mode.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Ensuring synchronization of output data and library loading/unloading does not hinder the functionality of other threads/processes.")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Warning:"),"\nIt is crucial to ensure proper server functionality in your implementation.\nExecuting functions from a user-requested library can result in unexpected behavior (e.g. invalid accesses, forced closures, etc.).\nThe server's implementation must be robust, enabling continuous execution even in such cases."),(0,a.kt)("h3",{id:"necessary-theoretical-concepts"},"Necessary Theoretical Concepts"),(0,a.kt)("p",null,"What is needed for the implementation of the proposed project:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Understanding inter-process communication - using Unix sockets and read/write or send/receive operations:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://cs-pub-ro.github.io/operating-systems/Lecture/IO/"},"I/O Course")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://cs-pub-ro.github.io/operating-systems/I/O/"},"I/O Lab")))),(0,a.kt)("li",{parentName:"ul"},"Understanding the API for loading/unloading libraries and executing functions from dynamic libraries:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Hint: ",(0,a.kt)("inlineCode",{parentName:"li"},"man dlopen")))),(0,a.kt)("li",{parentName:"ul"},"Working with shared data between processes or threads:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://cs-pub-ro.github.io/operating-systems/Lecture/Compute/"},"Compute Course")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://cs-pub-ro.github.io/operating-systems/Compute/"},"Compute Lab")))),(0,a.kt)("li",{parentName:"ul"},"Working with memory"),(0,a.kt)("li",{parentName:"ul"},"Working with files")),(0,a.kt)("h3",{id:"testing"},"Testing"),(0,a.kt)("h4",{id:"example-run"},"Example Run"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'## Starting the server\nstudent@os:~/skel$ ./server\n\n## Client\n# Execute the "run" function from libbasic.so\nstudent@os:~/checker$ ./client $(realpath libbasic.so)\nOutput file: /home/so/checker/output/out-cfy0fl\n\nstudent@os:~/checker$ cat /home/so/output/out-cfy0fl\nrun\n\n# Execute the "function" function from libbasic.so\nstudent@os:~/checker$ ./client $(realpath libbasic.so) function\nOutput file: /home/so/checker/output/out-vc7s03\n\nstudent@os:~/checker$ cat /home/so/output/out-vc7s03\nfunction\n\n# Execute the "cat" function from libbasic.so with the argument "/home/so/checker/Makefile"\nstudent@os:~/checker$ ./client $(realpath libbasic.so) cat $(realpath Makefile)\nOutput file: /home/so/checker/output/out-y732bN\n\nstudent@os:~/checker$ cat /home/so/output/out-y732bN\nCC=gcc\n[...]\n')),(0,a.kt)("h4",{id:"checker-run"},"Checker Run"),(0,a.kt)("p",null,"You have a checker available for partial verification of your implementation."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"student@os~$ cd checker\n\nstudent@os~$ ./checker.sh\n")),(0,a.kt)("h3",{id:"additional-tasks--tie-breakers"},"Additional Tasks / Tie-breakers"),(0,a.kt)("p",null,"All teams must implement the fundamental features as a base requirement.\nAdditionally, for differentiation purposes, teams have the option to introduce supplementary functionalities to the application.\nEach added functionality should be thoroughly documented in a README file, providing details on its purpose and the testing methodologies employed."),(0,a.kt)("p",null,"Here are some potential additional functionalities to consider (or propose other relevant ones):"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Developing an interface for client-server connectivity:\nDepending on runtime parameters, utilize either network or UNIX sockets."),(0,a.kt)("li",{parentName:"ul"},'Expanding the client handling mode:\nAllow the server to process multiple commands until encountering an "exit"/"quit" command.'),(0,a.kt)("li",{parentName:"ul"},"Enhancing server security:\nImplement measures to prevent data leaks."),(0,a.kt)("li",{parentName:"ul"},"Conducting performance optimizations."),(0,a.kt)("li",{parentName:"ul"},"Establishing application logging."),(0,a.kt)("li",{parentName:"ul"},"Managing configuration files/options:\nConfigure the server during startup based on specified options/configuration files such as maximum client count, socket type preferences, etc."),(0,a.kt)("li",{parentName:"ul"},"Real-time server monitoring and statistical extraction (e.g. client count, loaded libraries, memory usage, etc.)."),(0,a.kt)("li",{parentName:"ul"},"Adapting the implementation to another programming language (the initial skeleton is in C, but the communication's nature allows implementation in any language meeting project requirements)."),(0,a.kt)("li",{parentName:"ul"},"Generating a suitable response in cases where the requested function exceeds a ",(0,a.kt)("inlineCode",{parentName:"li"},"TIMEOUT")," or performs actions leading to server shutdown (e.g. invalid memory access, exit/abort calls).\nThe solution's complexity may vary based on how the client's connection termination is handled (whether an error message is conveyed) and how the cause of execution termination is identified.")))}m.isMDXComponent=!0}}]);