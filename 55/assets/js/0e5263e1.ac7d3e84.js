"use strict";(self.webpackChunkso=self.webpackChunkso||[]).push([[748],{5680:(e,t,a)=>{a.d(t,{xA:()=>c,yg:()=>d});var n=a(6540);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var o=n.createContext({}),p=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},y="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,s=e.mdxType,l=e.originalType,o=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),y=p(a),g=s,d=y["".concat(o,".").concat(g)]||y[g]||m[g]||l;return a?n.createElement(d,r(r({ref:t},c),{},{components:a})):n.createElement(d,r({ref:t},c))}));function d(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var l=a.length,r=new Array(l);r[0]=g;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[y]="string"==typeof e?e:s,r[1]=i;for(var p=2;p<l;p++)r[p]=a[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},1984:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var n=a(8168),s=(a(6540),a(5680));const l={},r="Analyzing the Software Stack",i={unversionedId:"Software Stack/Lab 1 - Operating System Perspective/System Calls/Reading/basic-syscall",id:"Software Stack/Lab 1 - Operating System Perspective/System Calls/Reading/basic-syscall",title:"Analyzing the Software Stack",description:"To get a better grasp on how the software stack works, let's do a bottom-up approach:",source:"@site/docs/Software Stack/Lab 1 - Operating System Perspective/System Calls/Reading/basic-syscall.md",sourceDirName:"Software Stack/Lab 1 - Operating System Perspective/System Calls/Reading",slug:"/Software Stack/Lab 1 - Operating System Perspective/System Calls/Reading/basic-syscall",permalink:"/operating-systems/55/Software Stack/Lab 1 - Operating System Perspective/System Calls/Reading/basic-syscall",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Reading",permalink:"/operating-systems/55/Software Stack/Lab 1 - Operating System Perspective/System Calls/Reading/"},next:{title:"System Call Wrappers",permalink:"/operating-systems/55/Software Stack/Lab 1 - Operating System Perspective/System Calls/Reading/syscall-wrapper"}},o={},p=[{value:"System Calls Explained",id:"system-calls-explained",level:2},{value:"Basic System Calls",id:"basic-system-calls",level:2}],c={toc:p},y="wrapper";function m(e){let{components:t,...l}=e;return(0,s.yg)(y,(0,n.A)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,s.yg)("h1",{id:"analyzing-the-software-stack"},"Analyzing the Software Stack"),(0,s.yg)("p",null,"To get a better grasp on how the software stack works, let's do a bottom-up approach:\nwe build and run different programs, that start off by using the system call API (the lowest layer in the software stack) and progressively use higher layers."),(0,s.yg)("h2",{id:"system-calls-explained"},"System Calls Explained"),(0,s.yg)("p",null,"A system call, or syscall for short, is a method used by applications to communicate with the operating system's kernel."),(0,s.yg)("p",null,"The need for syscalls is tied to the modern operating systems model of conceptually separating into kernel space and user space."),(0,s.yg)("p",null,"The kernel space manages the hardware resources such as CPU, I/O devices, disk or memory.\nMoreover, the kernel also provides an interface for the user space applications to interact with the hardware."),(0,s.yg)("p",null,"The user space is where you are running your applications and processes.\nFrom the user space, we cannot directly access the hardware or perform privileged operations.\nYou need to use syscalls to perform privileged operations such as accessing the hardware."),(0,s.yg)("p",null,"Below, you can see some examples of system calls and what resource they request from the kernel:"),(0,s.yg)("ul",null,(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("inlineCode",{parentName:"li"},"brk()")," is used to allocate memory"),(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("inlineCode",{parentName:"li"},"open()")," is used to access the file system and open a specific file"),(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("inlineCode",{parentName:"li"},"write()")," is used to access the file system and modify the contents of a specific file")),(0,s.yg)("p",null,(0,s.yg)("img",{alt:"System Call API Explained",src:a(5919).A})),(0,s.yg)("h2",{id:"basic-system-calls"},"Basic System Calls"),(0,s.yg)("p",null,"The ",(0,s.yg)("inlineCode",{parentName:"p"},"basic-syscall/support/")," folder stores the implementation of a simple program in assembly language for the x86_64 (64 bit) architecture.\nThe program invokes two system calls: ",(0,s.yg)("inlineCode",{parentName:"p"},"write")," and ",(0,s.yg)("inlineCode",{parentName:"p"},"exit"),".\nThe program is duplicated in two files using the two x86 assembly language syntaxes: the Intel / NASM syntax (",(0,s.yg)("inlineCode",{parentName:"p"},"hello.asm"),") and the AT&T / GAS syntax (",(0,s.yg)("inlineCode",{parentName:"p"},"hello.s"),")."),(0,s.yg)("p",null,"The implementation follows the ",(0,s.yg)("a",{parentName:"p",href:"https://x64.syscall.sh/"},"x86_64 Linux calling convention"),":"),(0,s.yg)("ul",null,(0,s.yg)("li",{parentName:"ul"},"system call ID is passed in the ",(0,s.yg)("inlineCode",{parentName:"li"},"rax")," register"),(0,s.yg)("li",{parentName:"ul"},"system call arguments are passed, in order, in the ",(0,s.yg)("inlineCode",{parentName:"li"},"rdi"),", ",(0,s.yg)("inlineCode",{parentName:"li"},"rsi"),", ",(0,s.yg)("inlineCode",{parentName:"li"},"rdx"),", ",(0,s.yg)("inlineCode",{parentName:"li"},"r10"),", ",(0,s.yg)("inlineCode",{parentName:"li"},"r8"),", ",(0,s.yg)("inlineCode",{parentName:"li"},"r9")," registers")),(0,s.yg)("p",null,"Let's build and run the two programs:"),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-console"},"student@os:~/.../tasks/basic-syscall/support$ ls\nhello.asm  hello.s  Makefile\n\nstudent@os:~/.../tasks/basic-syscall/support$ make\nnasm -f elf64 -o hello-nasm.o hello.asm\ncc -nostdlib -no-pie -Wl,--entry=main -Wl,--build-id=none  hello-nasm.o   -o hello-nasm\ngcc -c -o hello-gas.o hello.s\ncc -nostdlib -no-pie -Wl,--entry=main -Wl,--build-id=none  hello-gas.o   -o hello-gas\n\nstudent@os:~/.../tasks/basic-syscall/support$ ls\nhello.asm  hello-gas  hello-gas.o  hello-nasm  hello-nasm.o  hello.s  Makefile\n\nstudent@os:~/.../tasks/basic-syscall/support$ ./hello-nasm\nHello, world!\nstudent@os:~/.../tasks/basic-syscall/support$ ./hello-gas\nHello, world!\n")),(0,s.yg)("p",null,"The two programs end up printing the ",(0,s.yg)("inlineCode",{parentName:"p"},"Hello, world!")," message at standard output by issuing the ",(0,s.yg)("inlineCode",{parentName:"p"},"write")," system call.\nThen they complete their work by issuing the ",(0,s.yg)("inlineCode",{parentName:"p"},"exit")," system call."),(0,s.yg)("p",null,"The ",(0,s.yg)("inlineCode",{parentName:"p"},"write")," system call writes a buffer to the file referred by the first argument, which is the file descriptor.\nFile descriptors are going to be studied in-depth in future chapters.\nFor now, it is enough for you to know that they are integers that behave like file handlers.\nThe 3 most common file descriptors are:"),(0,s.yg)("ul",null,(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("p",{parentName:"li"},(0,s.yg)("inlineCode",{parentName:"p"},"0")," references the standard input (",(0,s.yg)("inlineCode",{parentName:"p"},"stdin"),")")),(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("p",{parentName:"li"},(0,s.yg)("inlineCode",{parentName:"p"},"1")," references the standard output (",(0,s.yg)("inlineCode",{parentName:"p"},"stdout"),")")),(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("p",{parentName:"li"},(0,s.yg)("inlineCode",{parentName:"p"},"2")," references the standard error (",(0,s.yg)("inlineCode",{parentName:"p"},"stderr"),")"))),(0,s.yg)("p",null,"Use ",(0,s.yg)("inlineCode",{parentName:"p"},"man 2 write")," and ",(0,s.yg)("inlineCode",{parentName:"p"},"man 3 exit")," to get a detailed understanding of the syntax and use of the two system calls.\nYou can also check the online man pages: ",(0,s.yg)("a",{parentName:"p",href:"https://man7.org/linux/man-pages/man2/write.2.html"},(0,s.yg)("inlineCode",{parentName:"a"},"write")),", ",(0,s.yg)("a",{parentName:"p",href:"https://man7.org/linux/man-pages/man3/exit.3.html"},(0,s.yg)("inlineCode",{parentName:"a"},"exit"))),(0,s.yg)("p",null,"We use ",(0,s.yg)("inlineCode",{parentName:"p"},"strace")," to inspect system calls issued by a program:"),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-console"},'student@os:~/.../tasks/basic-syscall/support$ strace ./hello-nasm\nexecve("./hello-nasm", ["./hello-nasm"], 0x7ffc4e175f00 /- 63 vars */) = 0\nwrite(1, "Hello, world!\\n", 14Hello, world!\n)         = 14\nexit(0)                                 = ?\n+++ exited with 0 +++\n')),(0,s.yg)("p",null,"There are three system calls captured by ",(0,s.yg)("inlineCode",{parentName:"p"},"strace"),":"),(0,s.yg)("ul",null,(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("inlineCode",{parentName:"li"},"execve()"),": this is issued by the shell to create the new process;\nyou'll find out more about ",(0,s.yg)("inlineCode",{parentName:"li"},"execve"),' in the "Compute" chapter'),(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("inlineCode",{parentName:"li"},"write()"),": called by the program to print ",(0,s.yg)("inlineCode",{parentName:"li"},"Hello, world!")," to standard output"),(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("inlineCode",{parentName:"li"},"exit()"),": to exit the program")),(0,s.yg)("p",null,"This is the most basic program for doing system calls.\nGiven that system calls require a specific calling convention, their invocation can only be done in assembly language.\nObviously, this is not portable (specific to a given CPU architecture, x86_64 in our case) and too verbose and difficult to maintain.\nFor portability and maintainability, we require a higher level language, such as C.\nIn order to use C, we need function wrappers around system calls."))}m.isMDXComponent=!0},5919:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/syscall-explained-ff8f5182d632fa4fcf77ffd5f5fe958c.svg"}}]);