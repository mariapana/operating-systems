"use strict";(self.webpackChunkso=self.webpackChunkso||[]).push([[662],{5680:(e,a,n)=>{n.d(a,{xA:()=>h,yg:()=>u});var t=n(6540);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function o(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?o(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function s(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=t.createContext({}),p=function(e){var a=t.useContext(l),n=a;return e&&(n="function"==typeof e?e(a):i(i({},a),e)),n},h=function(e){var a=p(e.components);return t.createElement(l.Provider,{value:a},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},c=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),m=p(n),c=r,u=m["".concat(l,".").concat(c)]||m[c]||d[c]||o;return n?t.createElement(u,i(i({ref:a},h),{},{components:n})):t.createElement(u,i({ref:a},h))}));function u(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=c;var s={};for(var l in a)hasOwnProperty.call(a,l)&&(s[l]=a[l]);s.originalType=e,s[m]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}c.displayName="MDXCreateElement"},2095:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var t=n(8168),r=(n(6540),n(5680));const o={},i="Arena",s={unversionedId:"Lab/Compute/arena",id:"Lab/Compute/arena",title:"Arena",description:"Threads and Processes: clone",source:"@site/docs/Lab/Compute/arena.md",sourceDirName:"Lab/Compute",slug:"/Lab/Compute/arena",permalink:"/operating-systems/76/Lab/Compute/arena",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"User-Level Threads",permalink:"/operating-systems/76/Lab/Compute/user-level-threads"},next:{title:"IO",permalink:"/operating-systems/76/Lab/IO/"}},l={},p=[{value:"Threads and Processes: <code>clone</code>",id:"threads-and-processes-clone",level:2},{value:"Libraries for Parallel Processing",id:"libraries-for-parallel-processing",level:2},{value:"<code>std.parallelism</code> in D",id:"stdparallelism-in-d",level:3},{value:"OpenMP for C",id:"openmp-for-c",level:3},{value:"Shared Memory",id:"shared-memory",level:2},{value:"Mini-shell",id:"mini-shell",level:2},{value:"First Step: <code>system</code> Dissected",id:"first-step-system-dissected",level:3},{value:"Command Executor in Another language",id:"command-executor-in-another-language",level:3},{value:"The GIL",id:"the-gil",level:2},{value:"Practice: Array Sum in Python",id:"practice-array-sum-in-python",level:3},{value:"But Why?",id:"but-why",level:3},{value:"Atomic Assembly",id:"atomic-assembly",level:2},{value:"Synchronization - Thread-Safe Data Structure",id:"synchronization---thread-safe-data-structure",level:2},{value:"Minor and Major Page Faults",id:"minor-and-major-page-faults",level:2},{value:"Minor Page Faults",id:"minor-page-faults",level:3},{value:"Major Page Faults",id:"major-page-faults",level:3}],h={toc:p},m="wrapper";function d(e){let{components:a,...n}=e;return(0,r.yg)(m,(0,t.A)({},h,n,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"arena"},"Arena"),(0,r.yg)("h2",{id:"threads-and-processes-clone"},"Threads and Processes: ",(0,r.yg)("inlineCode",{parentName:"h2"},"clone")),(0,r.yg)("p",null,"Let's go back to our initial demos that used threads and processes.\nWe'll see that in order to create both threads and processes, the underlying Linux syscall is ",(0,r.yg)("inlineCode",{parentName:"p"},"clone"),".\nFor this, we'll run both ",(0,r.yg)("inlineCode",{parentName:"p"},"sum_array_threads")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"sum_array_processes")," under ",(0,r.yg)("inlineCode",{parentName:"p"},"strace"),".\nAs we've already established, we're only interested in the ",(0,r.yg)("inlineCode",{parentName:"p"},"clone")," syscall:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-console"},"student@os:~/.../lab/support/sum-array/c$ strace -e clone,clone3 ./sum_array_threads 2\nclone(child_stack=0x7f60b56482b0, flags=CLONE_VM|CLONE_FS|CLONE_FILES|CLONE_SIGHAND|CLONE_THREAD|CLONE_SYSVSEM|CLONE_SETTLS|CLONE_PARENT_SETTID|CLONE_CHILD_CLEARTID, parent_tid=[1819693], tls=0x7f60b5649640, child_tidptr=0x7f60b5649910) = 1819693\nclone(child_stack=0x7f60b4e472b0, flags=CLONE_VM|CLONE_FS|CLONE_FILES|CLONE_SIGHAND|CLONE_THREAD|CLONE_SYSVSEM|CLONE_SETTLS|CLONE_PARENT_SETTID|CLONE_CHILD_CLEARTID, parent_tid=[1819694], tls=0x7f60b4e48640, child_tidptr=0x7f60b4e48910) = 1819694\n\nstudent@os:~/.../lab/support/sum-array/c$ strace -e clone,clone3 ./sum_array_processes 2\nclone(child_stack=NULL, flags=CLONE_CHILD_CLEARTID|CLONE_CHILD_SETTID|SIGCHLD, child_tidptr=0x7f7a4e346650) = 1820599\nclone(child_stack=NULL, flags=CLONE_CHILD_CLEARTID|CLONE_CHILD_SETTID|SIGCHLD, child_tidptr=0x7f7a4e346650) = 1820600\n")),(0,r.yg)("p",null,"We ran each program with an argument of 2, so we have 2 calls to ",(0,r.yg)("inlineCode",{parentName:"p"},"clone"),".\nNotice that in the case of threads, the ",(0,r.yg)("inlineCode",{parentName:"p"},"clone3 syscall receives more arguments.\nThe relevant flags passed as arguments when creating threads are documented in ["),"clone`'s man page](",(0,r.yg)("a",{parentName:"p",href:"https://man.archlinux.org/man/clone3.2.en"},"https://man.archlinux.org/man/clone3.2.en"),"):"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"CLONE_VM"),": the child and the parent process share the same VAS"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"CLONE_{FS,FILES,SIGHAND}"),": the new thread shares the filesystem information, file and signal handlers with the one that created it\nThe syscall also receives valid pointers to the new thread's stack and TLS, i.e. the only parts of the VAS that are distinct between threads (although they are technically accessible from all threads).")),(0,r.yg)("p",null,"By contrast, when creating a new process, the arguments of the ",(0,r.yg)("inlineCode",{parentName:"p"},"clone")," syscall are simpler (i.e. fewer flags are present).\nRemember that in both cases ",(0,r.yg)("inlineCode",{parentName:"p"},"clone")," creates a new ",(0,r.yg)("strong",{parentName:"p"},"thread"),".\nWhen creating a process, ",(0,r.yg)("inlineCode",{parentName:"p"},"clone")," creates this new thread within a new separate address space."),(0,r.yg)("h2",{id:"libraries-for-parallel-processing"},"Libraries for Parallel Processing"),(0,r.yg)("p",null,"In ",(0,r.yg)("inlineCode",{parentName:"p"},"support/sum-array/c/sum_array_threads.c"),' we spawned threads "manually" by using the ',(0,r.yg)("inlineCode",{parentName:"p"},"pthread_create()")," function.\nThis is ",(0,r.yg)("strong",{parentName:"p"},"not")," a syscall, but a wrapper over the common syscall used by both ",(0,r.yg)("inlineCode",{parentName:"p"},"fork()")," (which is also not a syscall) and ",(0,r.yg)("inlineCode",{parentName:"p"},"pthread_create()"),"."),(0,r.yg)("p",null,"Still, ",(0,r.yg)("inlineCode",{parentName:"p"},"pthread_create()")," is not yet a syscall.\nIn order to see what syscall ",(0,r.yg)("inlineCode",{parentName:"p"},"pthread_create()")," uses, check out ",(0,r.yg)("a",{parentName:"p",href:"#threads-and-processes-clone"},"this section at the end of the lab"),"."),(0,r.yg)("p",null,"Most programming languages provide a more advanced API for handling parallel computation."),(0,r.yg)("h3",{id:"stdparallelism-in-d"},(0,r.yg)("inlineCode",{parentName:"h3"},"std.parallelism")," in D"),(0,r.yg)("p",null,"D language's standard library exposes the ",(0,r.yg)("a",{parentName:"p",href:"https://dlang.org/phobos/std_parallelism.html"},(0,r.yg)("inlineCode",{parentName:"a"},"std.parallelism")),", which provides a series of parallel processing functions.\nOne such function is ",(0,r.yg)("inlineCode",{parentName:"p"},"reduce()"),", which splits an array between a given number of threads and applies a given operation to these chunks.\nIn our case, the operation simply adds the elements to an accumulator: ",(0,r.yg)("inlineCode",{parentName:"p"},"a + b"),".\nFollow and run the code in ",(0,r.yg)("inlineCode",{parentName:"p"},"support/sum-array/d/sum_array_threads_reduce.d"),"."),(0,r.yg)("p",null,"The number of threads is used within a ",(0,r.yg)("a",{parentName:"p",href:"https://dlang.org/phobos/std_parallelism.html#.TaskPool"},(0,r.yg)("inlineCode",{parentName:"a"},"TaskPool")),".\nThis structure is a thread manager (not scheduler).\nIt silently creates the number of threads we request and then ",(0,r.yg)("inlineCode",{parentName:"p"},"reduce()")," spreads its workload between these threads."),(0,r.yg)("h3",{id:"openmp-for-c"},"OpenMP for C"),(0,r.yg)("p",null,"Unlike D, C does not support parallel computation by design.\nIt needs a library to do advanced things, like ",(0,r.yg)("inlineCode",{parentName:"p"},"reduce()")," from D.\nWe have chosen to use the OpenMP library for this.\nFollow the code in ",(0,r.yg)("inlineCode",{parentName:"p"},"support/sum-array/c/sum_array_threads_openmp.c"),"."),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"#pragma")," used in the code instructs the compiler to enable the ",(0,r.yg)("inlineCode",{parentName:"p"},"omp")," module, and to parallelise the code.\nIn this case, we instruct the compiler to perform a reduce of the array, using the ",(0,r.yg)("inlineCode",{parentName:"p"},"+")," operator, and to store the results in the ",(0,r.yg)("inlineCode",{parentName:"p"},"result")," variable.\nThis reduction uses threads to calculate the sum, similar to ",(0,r.yg)("inlineCode",{parentName:"p"},"summ_array_threads.c"),", but in a much more optimised form."),(0,r.yg)("p",null,"Now compile and run the ",(0,r.yg)("inlineCode",{parentName:"p"},"sum_array_threads_openmp")," binary using 1, 2, 4, and 8 threads as before.\nYou'll see lower running times than ",(0,r.yg)("inlineCode",{parentName:"p"},"sum_array_threads")," due to the highly-optimised code emitted by the compiler.\nFor this reason and because library functions are usually much better tested than your own code, it is always preferred to use a library function for a given task."),(0,r.yg)("h2",{id:"shared-memory"},"Shared Memory"),(0,r.yg)("p",null,"As you remember from the ",(0,r.yg)("a",{parentName:"p",href:"../../../data/"},"Data chapter"),", one way to allocate a given number of pages is to use the ",(0,r.yg)("inlineCode",{parentName:"p"},"mmap()")," syscall.\nLet's look at its ",(0,r.yg)("a",{parentName:"p",href:"https://man7.org/linux/man-pages/man2/mmap.2.html"},"man page"),", specifically at the ",(0,r.yg)("inlineCode",{parentName:"p"},"flags")," argument.\nIts main purpose is to determine the way in which child processes interact with the mapped pages."),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"/operating-systems/76/Lab/Compute/quiz/mmap-cow-flag"},"Quiz")),(0,r.yg)("p",null,"Now let's test this flag, as well as its opposite: ",(0,r.yg)("inlineCode",{parentName:"p"},"MAP_SHARED"),".\nCompile and run the code in ",(0,r.yg)("inlineCode",{parentName:"p"},"support/shared-memory/shared_memory.c"),"."),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"See the value read by the parent is different from that written by the child.\nModify the ",(0,r.yg)("inlineCode",{parentName:"p"},"flags")," parameter of ",(0,r.yg)("inlineCode",{parentName:"p"},"mmap()")," so they are the same.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Create a semaphore in the shared page and use it to make the parent signal the child before it can exit.\nUse the API defined in ",(0,r.yg)("a",{parentName:"p",href:"https://man7.org/linux/man-pages/man0/semaphore.h.0p.html"},(0,r.yg)("inlineCode",{parentName:"a"},"semaphore.h")),".\n",(0,r.yg)("strong",{parentName:"p"},"Be careful!"),"\nThe value written and read previously by the child and the parent, respectively, must not change."))),(0,r.yg)("p",null,'One way of creating a shared semaphore is to place it within a shared memory area, as we\'ve just done.\nThis only works between "related" processes.\nIf you want to share a semaphore or other types of memory between any two processes, you need filesystem support.\nFor this, you should use ',(0,r.yg)("strong",{parentName:"p"},"named semaphores"),", created using ",(0,r.yg)("a",{parentName:"p",href:"https://man7.org/linux/man-pages/man3/sem_open.3.html"},(0,r.yg)("inlineCode",{parentName:"a"},"sem_open()")),".\nYou'll get more accustomed to such functions in the ",(0,r.yg)("a",{parentName:"p",href:"../../../app-interact/"},"Application Interaction chapter"),"."),(0,r.yg)("h2",{id:"mini-shell"},"Mini-shell"),(0,r.yg)("h3",{id:"first-step-system-dissected"},"First Step: ",(0,r.yg)("inlineCode",{parentName:"h3"},"system")," Dissected"),(0,r.yg)("p",null,"You already know that ",(0,r.yg)("inlineCode",{parentName:"p"},"system")," calls ",(0,r.yg)("inlineCode",{parentName:"p"},"fork()")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"execve()")," to create the new process.\nLet's see how and why.\nFirst, we run the following command to trace the ",(0,r.yg)("inlineCode",{parentName:"p"},"execve()")," syscalls used by ",(0,r.yg)("inlineCode",{parentName:"p"},"sleepy_creator"),".\nWe'll leave ",(0,r.yg)("inlineCode",{parentName:"p"},"fork()")," for later."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-console"},"student@os:~/.../support/sleepy$ strace -e execve -ff -o syscalls ./sleepy_creator\n")),(0,r.yg)("p",null,"At this point, you will get two files whose names start with ",(0,r.yg)("inlineCode",{parentName:"p"},"syscalls"),", followed by some numbers.\nThose numbers are the PIDs of the parent and the child process.\nTherefore, the file with the higher number contains logs of the ",(0,r.yg)("inlineCode",{parentName:"p"},"execve")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"clone")," syscalls issued by the parent process, while\nthe other logs those two syscalls when made by the child process.\nLet's take a look at them.\nThe numbers below will differ from those on your system:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-console"},'student@os:~/.../support/sleepy:$ cat syscalls.2523393  # syscalls from parent process\nexecve("sleepy_creator", ["sleepy_creator"], 0x7ffd2c157758 /* 39 vars */) = 0\n--- SIGCHLD {si_signo=SIGCHLD, si_code=CLD_EXITED, si_pid=2523394, si_uid=1052093, si_status=0, si_utime=0, si_stime=0} ---\n+++ exited with 0 +++\n\nstudent@os:~/.../support/sleepy:$ cat syscalls.2523394  # syscalls from child process\nexecve("/bin/sh", ["sh", "-c", "sleep 10"], 0x7ffd36253be8 /* 39 vars */) = 0\nexecve("/usr/bin/sleep", ["sleep", "10"], 0x560f41659d40 /* 38 vars */) = 0\n+++ exited with 0 +++\n')),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"/operating-systems/76/Lab/Compute/quiz/who-calls-execve-parent"},"Quiz")),(0,r.yg)("p",null,"Now notice that the child process doesn't simply call ",(0,r.yg)("inlineCode",{parentName:"p"},'execve("/usr/bin/sleep" ...)'),".\nIt first changes its virtual address space (VAS) to that of a ",(0,r.yg)("inlineCode",{parentName:"p"},"bash")," process (",(0,r.yg)("inlineCode",{parentName:"p"},'execve("/bin/sh" ...)'),") and then that ",(0,r.yg)("inlineCode",{parentName:"p"},"bash")," process switches its VAS to ",(0,r.yg)("inlineCode",{parentName:"p"},"sleep"),".\nTherefore, calling ",(0,r.yg)("inlineCode",{parentName:"p"},"system(<some_command>)")," is equivalent to running ",(0,r.yg)("inlineCode",{parentName:"p"},"<some_command>")," in the command-line."),(0,r.yg)("p",null,"With this knowledge in mind, let's implement our own mini-shell.\nStart from the skeleton code in ",(0,r.yg)("inlineCode",{parentName:"p"},"support/mini-shell/mini_shell.c"),".\nWe're already running our Bash interpreter from the command-line, so there's no need to ",(0,r.yg)("inlineCode",{parentName:"p"},"exec")," another Bash from it.\nSimply ",(0,r.yg)("inlineCode",{parentName:"p"},"exec")," the command."),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"/operating-systems/76/Lab/Compute/quiz/mini-shell-stops-after-command"},"Quiz")),(0,r.yg)("p",null,'So we need a way to "save" the ',(0,r.yg)("inlineCode",{parentName:"p"},"mini_shell")," process before ",(0,r.yg)("inlineCode",{parentName:"p"},"exec()"),"-ing our command.\nFind a way to do this."),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},(0,r.yg)("strong",{parentName:"p"},"Hint"),":  You can see what ",(0,r.yg)("inlineCode",{parentName:"p"},"sleepy")," does and draw inspiration from there.\nUse ",(0,r.yg)("inlineCode",{parentName:"p"},"strace")," to also list the calls to ",(0,r.yg)("inlineCode",{parentName:"p"},"clone()")," performed by ",(0,r.yg)("inlineCode",{parentName:"p"},"sleepy")," or its children.\n",(0,r.yg)("a",{parentName:"p",href:"#threads-and-processes-clone"},"Remember")," what ",(0,r.yg)("inlineCode",{parentName:"p"},"clone()")," is used for and use its parameters to deduce which of the two scenarios happens to ",(0,r.yg)("inlineCode",{parentName:"p"},"sleepy"),".")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Moral of the story"),": We can add another step to the moral of ",(0,r.yg)("a",{parentName:"p",href:"/operating-systems/76/Lab/Compute/processes#practice-fork"},"our previous story"),".\nWhen spawning a new command, the call order is:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"parent: ",(0,r.yg)("inlineCode",{parentName:"li"},"fork()"),", ",(0,r.yg)("inlineCode",{parentName:"li"},"exec()"),", ",(0,r.yg)("inlineCode",{parentName:"li"},"wait()")),(0,r.yg)("li",{parentName:"ul"},"child: ",(0,r.yg)("inlineCode",{parentName:"li"},"exit()"))),(0,r.yg)("h3",{id:"command-executor-in-another-language"},"Command Executor in Another language"),(0,r.yg)("p",null,"Now implement the same functionality (a Bash command executor) in any other language, other than C/C++.\nUse whatever API is provided by your language of choice for creating and waiting for processes."),(0,r.yg)("h2",{id:"the-gil"},"The GIL"),(0,r.yg)("p",null,"Throughout this lab, you might have noticed that there were no thread exercises ",(0,r.yg)("em",{parentName:"p"},"in Python"),".\nIf you did, you probably wondered why.\nIt's not because Python does not support threads, because it does, but because of a mechanism called the ",(0,r.yg)("strong",{parentName:"p"},"Global Interpreter Lock"),", or GIL.\nAs its name suggests, this is a lock implemented inside most commonly used Python interpreter (CPython), which only allows ",(0,r.yg)("strong",{parentName:"p"},"one")," thread to run at a given time.\nAs a consequence, multithreaded programs written in Python run ",(0,r.yg)("strong",{parentName:"p"},"concurrently"),", not in parallel.\nFor this reason, you will see no speedup even when you run an embarrassingly parallel code in parallel."),(0,r.yg)("p",null,"However, keep in mind that this drawback does not make threads useless in Python.\nThey are still useful and widely used when a process needs to perform many IO-bound tasks (i.e.: tasks that involve many file reads / writes or network requests).\nSuch tasks run many blocking syscalls that require the thread to switch from the RUNNING state to WAITING.\nDoing so voluntarily makes threads viable because they rarely run for their entire time slice and spend most of the time waiting for data.\nSo it doesn't hurt them to run concurrently, instead of in parallel."),(0,r.yg)("p",null,"Do not make the confusion to believe threads in Python are ",(0,r.yg)("a",{parentName:"p",href:"./scheduling.md#user-level-vs-kernel-level-threads"},"user-level threads"),".\n",(0,r.yg)("a",{parentName:"p",href:"https://docs.python.org/3/library/threading.html#threading.Thread"},(0,r.yg)("inlineCode",{parentName:"a"},"threading.Thread")),"s are kernel-level threads.\nIt's just that they are forced to run concurrently by the GIL."),(0,r.yg)("h3",{id:"practice-array-sum-in-python"},"Practice: Array Sum in Python"),(0,r.yg)("p",null,"Let's first probe this by implementing two parallel versions of the code in ",(0,r.yg)("inlineCode",{parentName:"p"},"support/sum-array/python/sum_array_sequential.py"),".\nOne version should use threads and the other should use processes.\nRun each of them using 1, 2, 4, and 8 threads / processes respectively and compare the running times.\nNotice that the running times of the multithreaded implementation do not decrease.\nThis is because the GIL makes it so that those threads that you create essentially run sequentially."),(0,r.yg)("p",null,"The GIL also makes it so that individual Python instructions are atomic.\nRun the code in ",(0,r.yg)("inlineCode",{parentName:"p"},"support/race-condition/python/race_condition.py"),".\nEvery time, ",(0,r.yg)("inlineCode",{parentName:"p"},"var")," will be 0 because the GIL doesn't allow the two threads to run in parallel and reach the critical section at the same time.\nThis means that the instructions ",(0,r.yg)("inlineCode",{parentName:"p"},"var += 1")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"var -= 1")," become atomic."),(0,r.yg)("h3",{id:"but-why"},"But Why?"),(0,r.yg)("p",null,"Unlike Bigfoot, or the Loch Ness monster, we have proof that the GIL is real.\nAt first glance, this seems like a huge disadvantage.\nWhy force threads to run sequentially?\nThe answer has to do with memory management.\nIn the ",(0,r.yg)("a",{parentName:"p",href:"../../../data"},"Data chapter"),", you learned that one way of managing memory is via ",(0,r.yg)("em",{parentName:"p"},"garbage collection")," (GC).\nIn Python, the GC uses reference counting, i.e. each object also stores the number of live pointers to it (variables that reference it).\nYou can see that this number needs to be modified atomically by the interpreter to avoid race conditions.\nThis involves adding locks to ",(0,r.yg)("strong",{parentName:"p"},"all")," Python data structures.\nThis large number of locks doesn't scale for a language as large and open as Python.\nIn addition, it also introduces the risk of ",(0,r.yg)("em",{parentName:"p"},"deadlocks"),".\nYou can read more on this topic ",(0,r.yg)("a",{parentName:"p",href:"https://realpython.com/python-gil/"},"in this article")," and if you think eliminating the GIL looks like an easy task, which should have been done long ago, check the requirements ",(0,r.yg)("a",{parentName:"p",href:"https://wiki.python.org/moin/GlobalInterpreterLock"},"here"),".\nThey're not trivial to meet."),(0,r.yg)("p",null,"Single-threaded-ness is a common trope for interpreted languages to use some sort of GIL.\n",(0,r.yg)("a",{parentName:"p",href:"https://git.ruby-lang.org/ruby.git"},"Ruby MRI, the reference Ruby interpreter"),", uses a similar mechanism, called the ",(0,r.yg)("a",{parentName:"p",href:"https://ivoanjo.me/blog/2022/07/17/tracing-ruby-global-vm-lock/"},"Global VM Lock"),".\nJavaScript is even more straightforward: it is single-threaded by design, also for GC-related reasons.\nIt does, however, support asynchronous actions, but these are executed on the same thread as every other code.\nThis is implemented by placing each instruction on a ",(0,r.yg)("a",{parentName:"p",href:"https://medium.com/swlh/what-does-it-mean-by-javascript-is-single-threaded-language-f4130645d8a9"},"call stack"),"."),(0,r.yg)("h2",{id:"atomic-assembly"},"Atomic Assembly"),(0,r.yg)("p",null,"No, this section is not about nukes, sadly :(.\nInstead, we aim to get accustomed to the way in which the x86 ISA provides atomic instructions."),(0,r.yg)("p",null,"This mechanism looks very simple.\nIt is but ",(0,r.yg)("strong",{parentName:"p"},"one instruction prefix"),": ",(0,r.yg)("inlineCode",{parentName:"p"},"lock"),".\nIt is not an instruction with its own separate opcode, but a prefix that slightly modifies the opcode of the following instructions to make the CPU execute it atomically (i.e. with exclusive access to the data bus)."),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"lock")," must only be place before an instruction that executes a ",(0,r.yg)("em",{parentName:"p"},"read-modify-write")," action.\nFor example, we cannot place it before a ",(0,r.yg)("inlineCode",{parentName:"p"},"mov")," instruction, as the action of a ",(0,r.yg)("inlineCode",{parentName:"p"},"mov")," is simply ",(0,r.yg)("inlineCode",{parentName:"p"},"read")," or ",(0,r.yg)("inlineCode",{parentName:"p"},"write"),".\nInstead, we can place it in front of an ",(0,r.yg)("inlineCode",{parentName:"p"},"inc")," instruction if its operand is memory."),(0,r.yg)("p",null,"Look at the code in ",(0,r.yg)("inlineCode",{parentName:"p"},"support/race-condition/asm/race_condition_lock.S"),".\nIt's an Assembly equivalent of the code you've already seen many times so far (such as ",(0,r.yg)("inlineCode",{parentName:"p"},"support/race-condition/c/race_condition.c"),").\nAssemble and run it a few times.\nNotice the different results you get."),(0,r.yg)("p",null,"Now add the ",(0,r.yg)("inlineCode",{parentName:"p"},"lock")," prefix before ",(0,r.yg)("inlineCode",{parentName:"p"},"inc")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"dec"),".\nReassemble and rerun the code.\nAnd now we have synchronized the two threads by leveraging CPU support."),(0,r.yg)("h2",{id:"synchronization---thread-safe-data-structure"},"Synchronization - Thread-Safe Data Structure"),(0,r.yg)("p",null,"Now it's time for a fully practical exercise.\nGo to ",(0,r.yg)("inlineCode",{parentName:"p"},"support/CLIST/"),".\nIn the file ",(0,r.yg)("inlineCode",{parentName:"p"},"clist.c")," you'll find a simple implementation of an array list.\nAlthough correct, it is not (yet) thread-safe."),(0,r.yg)("p",null,"The code in ",(0,r.yg)("inlineCode",{parentName:"p"},"test.c")," verifies its single-threaded correctness, while the one in ",(0,r.yg)("inlineCode",{parentName:"p"},"test_parallel.c")," verifies it works properly with multiple threads.\nYour task is to synchronize this data structure using whichever primitives you like.\nTry to keep the implementation efficient.\nAim to decrease your running times as much as you can."),(0,r.yg)("h2",{id:"minor-and-major-page-faults"},"Minor and Major Page Faults"),(0,r.yg)("p",null,"The code in ",(0,r.yg)("inlineCode",{parentName:"p"},"support/page-faults/page_faults.c")," generates some minor and major page faults.\nOpen 2 terminals: one in which you will run the program, and one which will monitor the page faults of the program.\nIn the monitoring terminal, run the following command:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-console"},"watch -n 1 'ps -eo min_flt,maj_flt,cmd | grep ./page_faults | head -n 1'\n")),(0,r.yg)("p",null,"Compile the program and run it in the other terminal.\nYou must press ",(0,r.yg)("inlineCode",{parentName:"p"},"enter")," one time, before the program will prompt you to press ",(0,r.yg)("inlineCode",{parentName:"p"},"enter")," more times.\nWatch the first number on the monitoring terminal;\nit increases.\nThose are the minor page faults."),(0,r.yg)("h3",{id:"minor-page-faults"},"Minor Page Faults"),(0,r.yg)("p",null,"A minor page fault is generated whenever a requested page is present in the physical memory, as a frame, but that frame isn't allocated to the process generating the request.\nThese types of page faults are the most common, and they happen when calling functions from dynamic libraries, allocating heap memory, loading programs, reading files that have been cached, and many more situations.\nNow back to the program."),(0,r.yg)("p",null,"The monitoring command already starts with some minor page faults, generated when loading the program."),(0,r.yg)("p",null,"After pressing ",(0,r.yg)("inlineCode",{parentName:"p"},"enter"),", the number increases, because a function from a dynamic library (libc) is fetched when the first ",(0,r.yg)("inlineCode",{parentName:"p"},"printf()")," is executed.\nSubsequent calls to functions that are in the same memory page as ",(0,r.yg)("inlineCode",{parentName:"p"},"printf()")," won't generate other page faults."),(0,r.yg)("p",null,'After allocating the 100 Bytes, you might not see the number of page faults increase.\nThis is because the "bookkeeping" data allocated by ',(0,r.yg)("inlineCode",{parentName:"p"},"malloc()")," was able to fit in an already mapped page.\nThe second allocation, the 1GB one, will always gnereate one minor page fault - for the bookkeeping data about the allocated memory zone.\nNotice that not all the pages for the 1GB are allocated.\nThey are allocated - and generate page faults - when modified.\nBy now you should know that this mechanism is called ",(0,r.yg)("a",{parentName:"p",href:"/operating-systems/76/Lab/Compute/copy-on-write"},"copy-on-write"),"."),(0,r.yg)("p",null,"Continue with pressing ",(0,r.yg)("inlineCode",{parentName:"p"},"enter")," and observing the effects util you reach opening ",(0,r.yg)("inlineCode",{parentName:"p"},"file.txt"),"."),(0,r.yg)("p",null,"Note that neither opening a file, getting information about it, nor mapping it in memory using ",(0,r.yg)("inlineCode",{parentName:"p"},"mmap()"),", generate page faults.\nAlso note the ",(0,r.yg)("inlineCode",{parentName:"p"},"posix_fadvise()")," call after the one to ",(0,r.yg)("inlineCode",{parentName:"p"},"fstat()"),".\nWith this call we force the OS to not cache the file, so we can generate a ",(0,r.yg)("strong",{parentName:"p"},"major page fault"),"."),(0,r.yg)("h3",{id:"major-page-faults"},"Major Page Faults"),(0,r.yg)("p",null,"Major page faults happen when a page is requested, but it isn't present in the physical memory.\nThese types of page faults happen in 2 situations:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"a page that was swapped out (to the disk), due to lack of memory, is now accessed - this case is harder to show"),(0,r.yg)("li",{parentName:"ul"},"the OS needs to read a file from the disk, because the file contents aren't present in the cache - the case we are showing now")),(0,r.yg)("p",null,"Press ",(0,r.yg)("inlineCode",{parentName:"p"},"enter")," to print the file contents.\nNote the second number go up in the monitoring terminal."),(0,r.yg)("p",null,"Comment the ",(0,r.yg)("inlineCode",{parentName:"p"},"posix_fadvise()")," call, recompile the program, and run it again.\nYou won't get any major page fault, because the file contents are cached by the OS, to avoid those page faults.\nAs a rule, the OS will avoid major page faults whenever possible, because they are very costly in terms of running time."))}d.isMDXComponent=!0}}]);