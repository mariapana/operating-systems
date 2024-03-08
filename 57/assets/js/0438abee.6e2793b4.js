"use strict";(self.webpackChunkso=self.webpackChunkso||[]).push([[4201],{5680:(e,t,n)=>{n.d(t,{xA:()=>d,yg:()=>m});var i=n(6540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=i.createContext({}),s=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=s(e.components);return i.createElement(p.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},g=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=s(n),g=a,m=c["".concat(p,".").concat(g)]||c[g]||u[g]||r;return n?i.createElement(m,l(l({ref:t},d),{},{components:n})):i.createElement(m,l({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=g;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[c]="string"==typeof e?e:a,l[1]=o;for(var s=2;s<r;s++)l[s]=n[s];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}g.displayName="MDXCreateElement"},9120:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>s});var i=n(8168),a=(n(6540),n(5680));const r={},l="Redirections",o={unversionedId:"Lab/IO/redirections",id:"Lab/IO/redirections",title:"Redirections",description:"In the File Descriptors section, we mentioned redirections such as ls > file.txt.",source:"@site/docs/Lab/IO/redirections.md",sourceDirName:"Lab/IO",slug:"/Lab/IO/redirections",permalink:"/operating-systems/57/Lab/IO/redirections",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"File Descriptors",permalink:"/operating-systems/57/Lab/IO/file-descriptors"},next:{title:"Pipes",permalink:"/operating-systems/57/Lab/IO/pipes"}},p={},s=[{value:"Practice: Naive Redirection",id:"practice-naive-redirection",level:2},{value:"Practice: Thread-unsafe Redirection",id:"practice-thread-unsafe-redirection",level:2},{value:"Practice: Safe Redirection",id:"practice-safe-redirection",level:2},{value:"Practice: Mini-shell Reloaded",id:"practice-mini-shell-reloaded",level:2}],d={toc:s},c="wrapper";function u(e){let{components:t,...r}=e;return(0,a.yg)(c,(0,i.A)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"redirections"},"Redirections"),(0,a.yg)("p",null,"In the ",(0,a.yg)("a",{parentName:"p",href:"/operating-systems/57/Lab/IO/file-descriptors"},"File Descriptors section"),", we mentioned redirections such as ",(0,a.yg)("inlineCode",{parentName:"p"},"ls > file.txt"),".\nWe said ",(0,a.yg)("inlineCode",{parentName:"p"},"file.txt")," has to be opened at some point.\nLet's check that.\nWe'll use ",(0,a.yg)("inlineCode",{parentName:"p"},"strace"),", obviously, to look for ",(0,a.yg)("inlineCode",{parentName:"p"},"open()")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"openat()")," syscalls."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-console"},'student@os:~/.../lab/support/simple-file-handling$ strace -e open,openat ls > file.txt\nopenat(AT_FDCWD, "/etc/ld.so.cache", O_RDONLY|O_CLOEXEC) = 3\nopenat(AT_FDCWD, "/lib/x86_64-linux-gnu/libselinux.so.1", O_RDONLY|O_CLOEXEC) = 3\nopenat(AT_FDCWD, "/lib/x86_64-linux-gnu/libc.so.6", O_RDONLY|O_CLOEXEC) = 3\nopenat(AT_FDCWD, "/lib/x86_64-linux-gnu/libpcre2-8.so.0", O_RDONLY|O_CLOEXEC) = 3\nopenat(AT_FDCWD, "/lib/x86_64-linux-gnu/libdl.so.2", O_RDONLY|O_CLOEXEC) = 3\nopenat(AT_FDCWD, "/lib/x86_64-linux-gnu/libpthread.so.0", O_RDONLY|O_CLOEXEC) = 3\nopenat(AT_FDCWD, "/proc/filesystems", O_RDONLY|O_CLOEXEC) = 3\nopenat(AT_FDCWD, "/usr/lib/locale/locale-archive", O_RDONLY|O_CLOEXEC) = 3\nopenat(AT_FDCWD, ".", O_RDONLY|O_NONBLOCK|O_CLOEXEC|O_DIRECTORY) = 3\n')),(0,a.yg)("p",null,"This looks strange.\nWhere is the call to ",(0,a.yg)("inlineCode",{parentName:"p"},'openat(AT_FDCWD, "file.txt", ...)'),"?\nWell, if we look at the full ",(0,a.yg)("inlineCode",{parentName:"p"},"strace")," output, the first call is ",(0,a.yg)("inlineCode",{parentName:"p"},"execve()"),":"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-console"},'student@os:~/.../lab/support/simple-file-handling$ strace ls > file.txt\nexecve("/usr/bin/ls", ["ls"], 0x7ffe550d59e0 /* 60 vars */) = 0\n[...]\n')),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"/operating-systems/57/Lab/IO/quiz/execve"},"Quiz")),(0,a.yg)("p",null,"So the ",(0,a.yg)("inlineCode",{parentName:"p"},"openat()")," syscalls we saw earlier come from the ",(0,a.yg)("inlineCode",{parentName:"p"},"ls")," process.\nRemember how launching a command works in Bash:"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"The Bash process ",(0,a.yg)("inlineCode",{parentName:"li"},"fork()"),"s itself"),(0,a.yg)("li",{parentName:"ol"},"The child (still a Bash process) then calls ",(0,a.yg)("inlineCode",{parentName:"li"},"execve()")),(0,a.yg)("li",{parentName:"ol"},"The parent (the original Bash process) calls ",(0,a.yg)("inlineCode",{parentName:"li"},"waitpid()")," to wait for the new process to end.")),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"Launching a new command in Bash",src:n(4649).A})),(0,a.yg)("p",null,"So we can deduce that ",(0,a.yg)("inlineCode",{parentName:"p"},"file.txt")," is opened by the child process ",(0,a.yg)("strong",{parentName:"p"},"before")," calling ",(0,a.yg)("inlineCode",{parentName:"p"},"execve()"),".\nNote that despite replacing the VAS of the current process, ",(0,a.yg)("inlineCode",{parentName:"p"},"execve()")," does ",(0,a.yg)("strong",{parentName:"p"},"NOT")," replace its file descriptor table.\nSo whatever files were opened by the original process remain open within the new one.\nThis behaviour is the basis of pipes (the ",(0,a.yg)("inlineCode",{parentName:"p"},"|")," that you use in Bash to use the output of a command as the input of another) and redirections (",(0,a.yg)("inlineCode",{parentName:"p"},">"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"<")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"2>"),")."),(0,a.yg)("h2",{id:"practice-naive-redirection"},"Practice: Naive Redirection"),(0,a.yg)("p",null,"But before diving into reimplementing shell functionalities, let's look at a simpler example.\nNavigate to ",(0,a.yg)("inlineCode",{parentName:"p"},"support/redirect/redirect.c"),".\nThe code makes a naive attempt at redirecting the newly opened file to ",(0,a.yg)("inlineCode",{parentName:"p"},"stdout"),".\nIt simply closes ",(0,a.yg)("inlineCode",{parentName:"p"},"stdout")," first so that when ",(0,a.yg)("inlineCode",{parentName:"p"},"open()")," returns ",(0,a.yg)("strong",{parentName:"p"},"the lowest available file descriptor"),", that value will be 1, which is ",(0,a.yg)("inlineCode",{parentName:"p"},"STDOUT_FILENO"),"."),(0,a.yg)("p",null,"Note there's a difference between ",(0,a.yg)("inlineCode",{parentName:"p"},"stdout")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"STDOUT_FILENO"),".\nWhile ",(0,a.yg)("inlineCode",{parentName:"p"},"stdout")," is of type ",(0,a.yg)("inlineCode",{parentName:"p"},"FILE *")," and is meant to be used with libc functions such as ",(0,a.yg)("inlineCode",{parentName:"p"},"fread()"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"STDOUT_FILENO")," is the default file descriptor for the standard output, which almost always is 1.\nSo ",(0,a.yg)("inlineCode",{parentName:"p"},"STDOUT_FILENO")," is an ",(0,a.yg)("inlineCode",{parentName:"p"},"int")," type with the value 1.\nDon't confuse them!"),(0,a.yg)("p",null,"Compile and run the code without modifying it.\nIt pauses after each file descriptor operation.\nIn another terminal (or in another ",(0,a.yg)("inlineCode",{parentName:"p"},"tmux")," window), run the following each time you press Enter in the first terminal/window: ",(0,a.yg)("inlineCode",{parentName:"p"},"lsof -p $(pidof redirect)")," or try ",(0,a.yg)("a",{parentName:"p",href:"https://man7.org/linux/man-pages/man1/watch.1.html"},(0,a.yg)("inlineCode",{parentName:"a"},"watch")),"-ing it."),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"lsof")," displays the files opened by the given process.\nFrom the output below, we see that these files are mainly files (opened as file descriptors) and libraries, which are memory mapped (",(0,a.yg)("inlineCode",{parentName:"p"},"mem"),").\nOn the third column, you can see the file descriptor corresponding to each file."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-console"},"student@os:~/.../lab/support/redirect$ lsof -w -p $(pidof redirect)  # before any file operations\nCOMMAND    PID     USER   FD   TYPE DEVICE SIZE/OFF    NODE NAME\nredirect 44303  student  cwd    DIR    8,1     4096  299870 /home/student/operating-systems-oer/content/chapters/io/lab/support/redirect\nredirect 44303  student  rtd    DIR  259,6     4096       2 /\nredirect 44303  student  txt    REG    8,1    25848  299929 /home/student/operating-systems-oer/content/chapters/io/lab/support/redirect/redirect\nredirect 44303  student  mem    REG  259,6  2029592 1857435 /usr/lib/x86_64-linux-gnu/libc-2.31.so\nredirect 44303  student  mem    REG  259,6   191504 1835092 /usr/lib/x86_64-linux-gnu/ld-2.31.so\nredirect 44303  student    0u   CHR  136,0      0t0       3 /dev/pts/0\nredirect 44303  student    1u   CHR  136,0      0t0       3 /dev/pts/0\nredirect 44303  student    2u   CHR  136,0      0t0       3 /dev/pts/0\n")),(0,a.yg)("p",null,"Notice that all 3 default file descriptors are first liked to ",(0,a.yg)("inlineCode",{parentName:"p"},"/dev/pts/0"),".\nIt may be different on your machine, but most likely it will be ",(0,a.yg)("inlineCode",{parentName:"p"},"/dev/pts/<some_number>"),".\nThis is a ",(0,a.yg)("a",{parentName:"p",href:"./devices.md"},"character device")," that signifies your current (pseudo)terminal."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-console"},"student@os:~/.../lab/support/redirect$ lsof -w -p $(pidof redirect)  # after closing `STDOUT_FILENO`\nredirect 46906  student    0u   CHR  136,0      0t0       3 /dev/pts/0\nredirect 46906  student    2u   CHR  136,0      0t0       3 /dev/pts/0\n")),(0,a.yg)("p",null,"See that file descriptor 1 (",(0,a.yg)("inlineCode",{parentName:"p"},"stdout"),') has "disappeared".\nNow the second entry in the process\'s FD table is free.'),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-console"},"student@os:~/.../lab/support/redirect$ lsof -w -p $(pidof redirect)  # after opening `redirect_file.txt`\nredirect 46906  student    0u   CHR  136,0      0t0       3 /dev/pts/0\nredirect 46906  student    1w   REG    8,1        0  299958 /.../lab/support/redirect/redirect_file.txt\nredirect 46906  student    2u   CHR  136,0      0t0       3 /dev/pts/0\n")),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"open()")," has assigned the newly opened file to the lowest file descriptor available, which is 1, the former ",(0,a.yg)("inlineCode",{parentName:"p"},"stdout"),".\n",(0,a.yg)("inlineCode",{parentName:"p"},"printf()")," writes its output to ",(0,a.yg)("inlineCode",{parentName:"p"},"stdout"),", which in this case is ",(0,a.yg)("inlineCode",{parentName:"p"},"redirect_file.txt"),".\nNow inspect the contents of this file to make sure that string was written there."),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"/operating-systems/57/Lab/IO/quiz/prints-work-no-stdio"},"Quiz")),(0,a.yg)("h2",{id:"practice-thread-unsafe-redirection"},"Practice: Thread-unsafe Redirection"),(0,a.yg)("p",null,"This is all fine, but it doesn't allow us to ",(0,a.yg)("strong",{parentName:"p"},"copy")," file descriptors.\nWe can only replace an existing file descriptor with another one.\nTo be able to do replacements, we can use the ",(0,a.yg)("a",{parentName:"p",href:"https://man7.org/linux/man-pages/man2/dup.2.html"},(0,a.yg)("inlineCode",{parentName:"a"},"dup()"))," syscall.\nIt simply creates a new file descriptor that refers to the same open file ",(0,a.yg)("inlineCode",{parentName:"p"},"struct")," as the one given to it as an argument.\nBoth file descriptors remain active after calling ",(0,a.yg)("inlineCode",{parentName:"p"},"dup()"),"."),(0,a.yg)("p",null,"Change the ",(0,a.yg)("inlineCode",{parentName:"p"},"do_redirect()")," function in ",(0,a.yg)("inlineCode",{parentName:"p"},"support/redirect/redirect.c")," to employ this new logic.\nIt should follow the steps below.\nTrack them using ",(0,a.yg)("inlineCode",{parentName:"p"},"lsof"),", just like before."),(0,a.yg)("p",null,"Step 1:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"0 -> ",(0,a.yg)("inlineCode",{parentName:"li"},"stdin")),(0,a.yg)("li",{parentName:"ul"},"1 -> ",(0,a.yg)("inlineCode",{parentName:"li"},"stdout")),(0,a.yg)("li",{parentName:"ul"},"2 -> ",(0,a.yg)("inlineCode",{parentName:"li"},"stderr"))),(0,a.yg)("p",null,"Step 2 - after ",(0,a.yg)("inlineCode",{parentName:"p"},'open("redirect_file.txt", ...)'),":"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"0 -> ",(0,a.yg)("inlineCode",{parentName:"li"},"stdin")),(0,a.yg)("li",{parentName:"ul"},"1 -> ",(0,a.yg)("inlineCode",{parentName:"li"},"stdout")),(0,a.yg)("li",{parentName:"ul"},"2 -> ",(0,a.yg)("inlineCode",{parentName:"li"},"stderr")),(0,a.yg)("li",{parentName:"ul"},"3 -> ",(0,a.yg)("inlineCode",{parentName:"li"},"redirect_file.txt"))),(0,a.yg)("p",null,"Step 3 - after ",(0,a.yg)("inlineCode",{parentName:"p"},"close(STDOUT_FILENO)"),":"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"0 -> ",(0,a.yg)("inlineCode",{parentName:"li"},"stdin")),(0,a.yg)("li",{parentName:"ul"},"2 -> ",(0,a.yg)("inlineCode",{parentName:"li"},"stderr")),(0,a.yg)("li",{parentName:"ul"},"3 -> ",(0,a.yg)("inlineCode",{parentName:"li"},"redirect_file.txt"))),(0,a.yg)("p",null,"Step 4 - after ",(0,a.yg)("inlineCode",{parentName:"p"},"dup(3)"),".\nNote that now both 1 and 3 are linked to ",(0,a.yg)("inlineCode",{parentName:"p"},"redirect_file.txt"),", so we managed to successfully copy file descriptor 3."),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"0 -> ",(0,a.yg)("inlineCode",{parentName:"li"},"stdin")),(0,a.yg)("li",{parentName:"ul"},"1 -> ",(0,a.yg)("inlineCode",{parentName:"li"},"redirect_file.txt")),(0,a.yg)("li",{parentName:"ul"},"2 -> ",(0,a.yg)("inlineCode",{parentName:"li"},"stderr")),(0,a.yg)("li",{parentName:"ul"},"3 -> ",(0,a.yg)("inlineCode",{parentName:"li"},"redirect_file.txt"))),(0,a.yg)("p",null,"Step 5 - after ",(0,a.yg)("inlineCode",{parentName:"p"},"close(3)"),".\nWe don't need file descriptor 3 at this point anymore."),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"0 -> ",(0,a.yg)("inlineCode",{parentName:"li"},"stdin")),(0,a.yg)("li",{parentName:"ul"},"1 -> ",(0,a.yg)("inlineCode",{parentName:"li"},"redirect_file.txt")),(0,a.yg)("li",{parentName:"ul"},"2 -> ",(0,a.yg)("inlineCode",{parentName:"li"},"stderr"))),(0,a.yg)("h2",{id:"practice-safe-redirection"},"Practice: Safe Redirection"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"dup()")," is all fine and dandy, but what if 2 threads use the steps above concurrently?\nBecause steps 3 and 4 don't happen atomically, they risk having their results inverted.\nTake a look at ",(0,a.yg)("inlineCode",{parentName:"p"},"support/redirect/redirect_parallel.c"),".\nCompile and run the code, then inspect the resulting files.\nYou'll notice they contain opposing strings:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-console"},"student@os:~/.../lab/support/redirect$ cat redirect_stderr_file.txt\nMessage for STDOUT\n\nstudent@os:~/.../lab/support/redirect$ cat redirect_stdout_file.txt\nMessage for STDERR\n")),(0,a.yg)("p",null,"What happens is that thread 1 is forced to call ",(0,a.yg)("inlineCode",{parentName:"p"},"close(STDOUT_FILENO)"),", then thread 2 calls ",(0,a.yg)("inlineCode",{parentName:"p"},"close(STDERR_FILENO)"),".\nSo far, this is not problematic.\nBut then thread 2 continues to ",(0,a.yg)("inlineCode",{parentName:"p"},"dup()")," ",(0,a.yg)("inlineCode",{parentName:"p"},"redirect_stderr.txt")," into the lowest file descriptor available, which is 1 (",(0,a.yg)("inlineCode",{parentName:"p"},"STDOUT_FILENO"),").\nThen thread 1 resumes to ",(0,a.yg)("inlineCode",{parentName:"p"},"dup()")," ",(0,a.yg)("inlineCode",{parentName:"p"},"redirect_stdout.txt")," into file descriptor 2 (",(0,a.yg)("inlineCode",{parentName:"p"},"STDERR_FILENO"),").\nThus we end up redirecting ",(0,a.yg)("inlineCode",{parentName:"p"},"stdout")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"stderr")," to the opposite files than those we intended."),(0,a.yg)("p",null,"To fix this, we need to call an ",(0,a.yg)("strong",{parentName:"p"},"atomic")," syscall, called ",(0,a.yg)("a",{parentName:"p",href:"https://man7.org/linux/man-pages/man2/dup.2.html"},(0,a.yg)("inlineCode",{parentName:"a"},"dup2()")),".\nIt receives 2 file descriptors (",(0,a.yg)("inlineCode",{parentName:"p"},"dup2(src_fd, dst_fd)"),") and its actions are equivalent to the following, but performed atomically:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-c"},"close(dst_fd);\ndup(src_fd);  // This places `src_fd` into the previous `dst_fd`\n")),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Modify ",(0,a.yg)("inlineCode",{parentName:"p"},"support/redirect/redirect_parallel.c")," and change the calls to ",(0,a.yg)("inlineCode",{parentName:"p"},"close()")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"dup()")," to calls to ",(0,a.yg)("inlineCode",{parentName:"p"},"dup2()")," and check the contents of the resulting files to see they're correct.")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Now go back to ",(0,a.yg)("inlineCode",{parentName:"p"},"support/redirect/redirect.c")," and refactor the code in ",(0,a.yg)("inlineCode",{parentName:"p"},"do_redirect()")," to use ",(0,a.yg)("inlineCode",{parentName:"p"},"dup2()")," as well."))),(0,a.yg)("h2",{id:"practice-mini-shell-reloaded"},"Practice: Mini-shell Reloaded"),(0,a.yg)("p",null,"Remember the mini-shell you implemented in the Arena of the previous lab.\nIt is capable of ",(0,a.yg)("inlineCode",{parentName:"p"},"fork()"),"-ing itself and ",(0,a.yg)("inlineCode",{parentName:"p"},"execvp()"),"-ing commands, just like Bash.\nWe can now extend it to allow redirecting ",(0,a.yg)("inlineCode",{parentName:"p"},"stdout")," to a file."),(0,a.yg)("p",null,"Use what you've learnt so far in this section to allow this mini-shell to redirect the output of its commands to files.\nRedirection is performed just like in bash via ",(0,a.yg)("inlineCode",{parentName:"p"},">"),"."))}u.isMDXComponent=!0},4649:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/fork-exec-e8ff2e7cb057592463ccc850bdaa0228.svg"}}]);