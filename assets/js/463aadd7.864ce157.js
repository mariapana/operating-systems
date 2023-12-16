"use strict";(self.webpackChunkso=self.webpackChunkso||[]).push([[13],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>c});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=p(n),h=i,c=u["".concat(s,".").concat(h)]||u[h]||m[h]||r;return n?a.createElement(c,l(l({ref:t},d),{},{components:n})):a.createElement(c,l({ref:t},d))}));function c(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=h;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:i,l[1]=o;for(var p=2;p<r;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},5611:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var a=n(7462),i=(n(7294),n(3905));const r={},l="Minishell",o={unversionedId:"Assignments/Mini Shell/README",id:"Assignments/Mini Shell/README",title:"Minishell",description:"Objectives",source:"@site/docs/Assignments/Mini Shell/README.md",sourceDirName:"Assignments/Mini Shell",slug:"/Assignments/Mini Shell/",permalink:"/operating-systems/Assignments/Mini Shell/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Parallel Graph",permalink:"/operating-systems/Assignments/Parallel Graph/"},next:{title:"Asynchronous Web Server",permalink:"/operating-systems/Assignments/Asynchronous Web Server/"}},s={},p=[{value:"Objectives",id:"objectives",level:2},{value:"Statement",id:"statement",level:2},{value:"Introduction",id:"introduction",level:3},{value:"Shell Functionalities",id:"shell-functionalities",level:3},{value:"Changing the Current Directory",id:"changing-the-current-directory",level:4},{value:"Closing the Shell",id:"closing-the-shell",level:4},{value:"Running an Application",id:"running-an-application",level:4},{value:"Environment Variables",id:"environment-variables",level:4},{value:"Operators",id:"operators",level:4},{value:"Sequential Operator",id:"sequential-operator",level:5},{value:"Parallel Operator",id:"parallel-operator",level:5},{value:"Pipe Operator",id:"pipe-operator",level:5},{value:"Chain Operators for Conditional Execution",id:"chain-operators-for-conditional-execution",level:5},{value:"Operator Priority",id:"operator-priority",level:5},{value:"I/O Redirection",id:"io-redirection",level:4},{value:"Support Code",id:"support-code",level:2},{value:"Building mini-shell",id:"building-mini-shell",level:3},{value:"Testing and Grading",id:"testing-and-grading",level:2},{value:"Running the Checker",id:"running-the-checker",level:3},{value:"Running the Linters",id:"running-the-linters",level:3},{value:"Debugging",id:"debugging",level:3},{value:"Memory leaks",id:"memory-leaks",level:3}],d={toc:p},u="wrapper";function m(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"minishell"},"Minishell"),(0,i.kt)("h2",{id:"objectives"},"Objectives"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Learn how shells create new child processes and connect the I/O to the terminal."),(0,i.kt)("li",{parentName:"ul"},"Gain a better understanding of the ",(0,i.kt)("inlineCode",{parentName:"li"},"fork()")," function wrapper."),(0,i.kt)("li",{parentName:"ul"},"Learn to correctly execute commands written by the user and treat errors.")),(0,i.kt)("h2",{id:"statement"},"Statement"),(0,i.kt)("h3",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"A shell is a command-line interpreter that provides a text-based user interface for operating systems.\nBash is both an interactive command language and a scripting language.\nIt is used to interact with the file system, applications, operating system and more."),(0,i.kt)("p",null,"For this assignment you will build a Bash-like shell with minimal functionalities like traversing the file system, running applications, redirecting their output or piping the output from one application into the input of another.\nThe details of the functionalities that must be implemented will be further explained."),(0,i.kt)("h3",{id:"shell-functionalities"},"Shell Functionalities"),(0,i.kt)("h4",{id:"changing-the-current-directory"},"Changing the Current Directory"),(0,i.kt)("p",null,"The shell will support a built-in command for navigating the file system, called ",(0,i.kt)("inlineCode",{parentName:"p"},"cd"),".\nTo implement this feature you will need to store the current directory path because the user can provide either relative or absolute paths as arguments to the ",(0,i.kt)("inlineCode",{parentName:"p"},"cd")," command."),(0,i.kt)("p",null,"The built-in ",(0,i.kt)("inlineCode",{parentName:"p"},"pwd")," command will show the current directory path."),(0,i.kt)("p",null,"Check the following examples below to understand these functionalities."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"> pwd\n/home/student\n> cd operating-systems/assignments/minishell\n> pwd\n/home/student/operating-systems/assignments/minishell\n> cd inexitent\nno such file or directory\n> cd /usr/lib\n> pwd\n/usr/lib\n")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"NOTE:"))," Using the ",(0,i.kt)("inlineCode",{parentName:"p"},"cd")," command without any arguments or with more than one argument doesn't affect the current directory path.\nMake sure this edge case is handled in a way that prevents crashes.")),(0,i.kt)("h4",{id:"closing-the-shell"},"Closing the Shell"),(0,i.kt)("p",null,"Inputting either ",(0,i.kt)("inlineCode",{parentName:"p"},"quit")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"exit")," should close the minishell."),(0,i.kt)("h4",{id:"running-an-application"},"Running an Application"),(0,i.kt)("p",null,"Suppose you have an executable named ",(0,i.kt)("inlineCode",{parentName:"p"},"sum")," in the current directory.\nIt takes arbitrarily many numbers as arguments and prints their sum to ",(0,i.kt)("inlineCode",{parentName:"p"},"stdout"),".\nThe following example shows how the minishell implemented by you should behave."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"> ./sum 2 4 1\n7\n")),(0,i.kt)("p",null,"If the executable is located at the ",(0,i.kt)("inlineCode",{parentName:"p"},"/home/student/sum")," absolute path, the following example should also be valid."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"> /home/student/sum 2 4 1\n7\n")),(0,i.kt)("p",null,"Each application will run in a separate child process of the minishell created using ",(0,i.kt)("a",{parentName:"p",href:"https://man7.org/linux/man-pages/man2/fork.2.html"},"fork"),"."),(0,i.kt)("h4",{id:"environment-variables"},"Environment Variables"),(0,i.kt)("p",null,"Your shell will support using environment variables.\nThe environment variables will be initially inherited from the ",(0,i.kt)("inlineCode",{parentName:"p"},"bash")," process that started your minishell application."),(0,i.kt)("p",null,"If an undefined variable is used, its value is the empty string: ",(0,i.kt)("inlineCode",{parentName:"p"},'""'),"."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"NOTE:"))," The following examples contain comments which don't need to be supported by the minishell.\nThey are present here only to give a better understanding of the minishell's functionalities.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},'> NAME="John Doe"                    # Will assign the value "John Doe" to the NAME variable\n> AGE=27                             # Will assign the value 27 to the AGE variable\n> ./identify $NAME $LOCATION $AGE    # Will translate to ./identify "John Doe" "" 27 because $LOCATION is not defined\n')),(0,i.kt)("p",null,"A variable can be assigned to another variable."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"> OLD_NAME=$NAME    # Will assign the value of the NAME variable to OLD_NAME\n")),(0,i.kt)("h4",{id:"operators"},"Operators"),(0,i.kt)("h5",{id:"sequential-operator"},"Sequential Operator"),(0,i.kt)("p",null,"By using the ",(0,i.kt)("inlineCode",{parentName:"p"},";")," operator, you can chain multiple commands that will run sequentially, one after another.\nIn the command ",(0,i.kt)("inlineCode",{parentName:"p"},"expr1; expr2")," it is guaranteed that ",(0,i.kt)("inlineCode",{parentName:"p"},"expr1")," will finish before ",(0,i.kt)("inlineCode",{parentName:"p"},"expr2")," is be evaluated."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},'> echo "Hello"; echo "world!"; echo "Bye!"\nHello\nworld!\nBye!\n')),(0,i.kt)("h5",{id:"parallel-operator"},"Parallel Operator"),(0,i.kt)("p",null,"By using the ",(0,i.kt)("inlineCode",{parentName:"p"},"&")," operator you can chain multiple commands that will run in parallel.\nWhen running the command ",(0,i.kt)("inlineCode",{parentName:"p"},"expr1 & expr2"),", both expressions are evaluated at the same time (by different processes).\nThe order in which the two commands finish is not guaranteed."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},'> echo "Hello" & echo "world!" & echo "Bye!"  # The words may be printed in any order\nworld!\nBye!\nHello\n')),(0,i.kt)("h5",{id:"pipe-operator"},"Pipe Operator"),(0,i.kt)("p",null,"With the ",(0,i.kt)("inlineCode",{parentName:"p"},"|")," operator you can chain multiple commands so that the standard output of the first command is redirected to the standard input of the second command."),(0,i.kt)("p",null,"Hint: Look into ",(0,i.kt)("a",{parentName:"p",href:"https://man7.org/linux/man-pages/man2/pipe.2.html"},"anonymous pipes")," and file descriptor inheritance while using ",(0,i.kt)("a",{parentName:"p",href:"https://man7.org/linux/man-pages/man2/fork.2.html"},"fork"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},'> echo "Bye"                      # command outputs "Bye"\nBye\n> ./reverse_input\nHello                             # command reads input "Hello"\nolleH                             # outputs the reversed string "olleH"\n> echo "world" | ./reverse_input  # the output generated by the echo command will be used as input for the reverse_input executable\ndlrow\n')),(0,i.kt)("h5",{id:"chain-operators-for-conditional-execution"},"Chain Operators for Conditional Execution"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"&&")," operator allows chaining commands that are executed sequentially, from left to right.\nThe chain of execution stops at the first command ",(0,i.kt)("strong",{parentName:"p"},"that exits with an error (return code not 0)"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},'# throw_error always exits with a return code different than 0 and outputs to stderr "ERROR: I always fail"\n> echo "H" && echo "e" && echo "l" && ./throw_error && echo "l" && echo "o"\nH\ne\nl\nERROR: I always fail\n')),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"||")," operator allows chaining commands that are executed sequentially, from left to right.\nThe chain of execution stops at the first command ",(0,i.kt)("strong",{parentName:"p"},"that exits successfully (return code is 0)"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},'# throw_error always exits with a return code different than 0 and outputs to stderr "ERROR: I always fail"\n> ./throw_error || ./throw_error || echo "Hello" || echo "world!" || echo "Bye!"\nERROR: I always fail\nERROR: I always fail\nHello\n')),(0,i.kt)("h5",{id:"operator-priority"},"Operator Priority"),(0,i.kt)("p",null,"The priority of the available operators is the following.\nThe lower the number, the ",(0,i.kt)("strong",{parentName:"p"},"higher")," the priority:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Pipe operator (",(0,i.kt)("inlineCode",{parentName:"li"},"|"),")"),(0,i.kt)("li",{parentName:"ol"},"Conditional execution operators (",(0,i.kt)("inlineCode",{parentName:"li"},"&&")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"||"),")"),(0,i.kt)("li",{parentName:"ol"},"Parallel operator (",(0,i.kt)("inlineCode",{parentName:"li"},"&"),")"),(0,i.kt)("li",{parentName:"ol"},"Sequential operator (",(0,i.kt)("inlineCode",{parentName:"li"},";"),")")),(0,i.kt)("h4",{id:"io-redirection"},"I/O Redirection"),(0,i.kt)("p",null,"The shell must support the following redirection options:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"< filename")," - redirects ",(0,i.kt)("inlineCode",{parentName:"li"},"filename")," to standard input"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"> filename")," - redirects standard output to ",(0,i.kt)("inlineCode",{parentName:"li"},"filename")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"2> filename")," - redirects standard error to ",(0,i.kt)("inlineCode",{parentName:"li"},"filename")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"&> filename")," - redirects standard output and standard error to ",(0,i.kt)("inlineCode",{parentName:"li"},"filename")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},">> filename")," - redirects standard output to ",(0,i.kt)("inlineCode",{parentName:"li"},"filename")," in append mode"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"2>> filename")," - redirects standard error to ",(0,i.kt)("inlineCode",{parentName:"li"},"filename")," in append mode")),(0,i.kt)("p",null,"Hint: Look into ",(0,i.kt)("a",{parentName:"p",href:"https://man7.org/linux/man-pages/man2/open.2.html"},"open"),", ",(0,i.kt)("a",{parentName:"p",href:"https://man7.org/linux/man-pages/man2/dup.2.html"},"dup2")," and ",(0,i.kt)("a",{parentName:"p",href:"https://man7.org/linux/man-pages/man2/close.2.html"},"close"),"."),(0,i.kt)("h2",{id:"support-code"},"Support Code"),(0,i.kt)("p",null,"The support code consists of three directories:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"src/")," is the skeleton mini-shell implementation.\nYou will have to implement missing parts marked as ",(0,i.kt)("inlineCode",{parentName:"p"},"TODO")," items.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"util/")," stores a parser to be used as support code for implementing the assignment.\nFor more information, you can check the ",(0,i.kt)("inlineCode",{parentName:"p"},"util/parser/README.md")," file.\nYou can use this parser or write your own.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"tests/")," are tests used to validate (and grade) the assignment."))),(0,i.kt)("h3",{id:"building-mini-shell"},"Building mini-shell"),(0,i.kt)("p",null,"To build mini-shell, run ",(0,i.kt)("inlineCode",{parentName:"p"},"make")," in the ",(0,i.kt)("inlineCode",{parentName:"p"},"src/")," directory:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},"student@so:~/.../assignment-mini-shell$ cd src/\n\nstudent@so:~/.../assignment-mini-shell/src$ make\n")),(0,i.kt)("h2",{id:"testing-and-grading"},"Testing and Grading"),(0,i.kt)("p",null,"The testing is automated.\nTests are located in the ",(0,i.kt)("inlineCode",{parentName:"p"},"tests/")," directory."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},"student@so:~/.../assignment-mini-shell/tests$ ls -F\nMakefile  grade.sh*  run_all.sh*  _test/\n")),(0,i.kt)("p",null,"To test and grade your assignment solution, enter the ",(0,i.kt)("inlineCode",{parentName:"p"},"tests/")," directory and run ",(0,i.kt)("inlineCode",{parentName:"p"},"grade.sh"),".\nNote that this requires linters being available.\nThe easiest is to use a Docker-based setup with everything installed, as shown in the section ",(0,i.kt)("a",{parentName:"p",href:"#running-the-linters"},'"Running the Linters"'),".\nWhen using ",(0,i.kt)("inlineCode",{parentName:"p"},"grade.sh")," you will get grades for correctness (maximum ",(0,i.kt)("inlineCode",{parentName:"p"},"90")," points) and for coding style (maximum ",(0,i.kt)("inlineCode",{parentName:"p"},"10")," points).\nA successful run will provide you an output ending with:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},"### GRADE\n\n\nChecker:                                                         90/ 90\nStyle:                                                           10/ 10\nTotal:                                                          100/100\n\n\n### STYLE SUMMARY\n\n\n")),(0,i.kt)("h3",{id:"running-the-checker"},"Running the Checker"),(0,i.kt)("p",null,"To run the checker and everything else required, use the ",(0,i.kt)("inlineCode",{parentName:"p"},"make check")," command in the ",(0,i.kt)("inlineCode",{parentName:"p"},"tests/")," directory:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},"student@so:~/.../assignment-mini-shell/tests$ make check\nmake[1]: Entering directory '...'\nrm -f *~\n[...]\n16) Testing sleep command...................................failed  [ 0/100]\n17) Testing fscanf function.................................failed  [ 0/100]\n18) Testing unknown command.................................failed  [ 0/100]\n\n                                                            Total:    0/100\n")),(0,i.kt)("p",null,"For starters, tests will fail."),(0,i.kt)("p",null,"Each test is worth a number of points.\nThe total number of points is ",(0,i.kt)("inlineCode",{parentName:"p"},"90"),".\nThe maximum grade is obtained by dividing the number of points to ",(0,i.kt)("inlineCode",{parentName:"p"},"10"),", for a maximum grade of ",(0,i.kt)("inlineCode",{parentName:"p"},"9.00"),"."),(0,i.kt)("p",null,"A successful test run will show the output:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},"student@so:~/.../assignment-mini-shell/tests$ make check\nmake[1]: Entering directory '...'\nrm -f *~\n[...]\n01) Testing commands without arguments......................passed  [03/100]\n02) Testing commands with arguments.........................passed  [02/100]\n03) Testing simple redirect operators.......................passed  [05/100]\n04) Testing append redirect operators.......................passed  [05/100]\n05) Testing current directory...............................passed  [05/100]\n06) Testing conditional operators...........................passed  [05/100]\n07) Testing sequential commands.............................passed  [03/100]\n08) Testing environment variables...........................passed  [05/100]\n09) Testing single pipe.....................................passed  [05/100]\n10) Testing multiple pipes..................................passed  [10/100]\n11) Testing variables and redirect..........................passed  [05/100]\n12) Testing overwritten variables...........................passed  [02/100]\n13) Testing all operators...................................passed  [02/100]\n14) Testing parallel operator...............................passed  [10/100]\n15) Testing big file........................................passed  [05/100]\n16) Testing sleep command...................................passed  [07/100]\n17) Testing fscanf function.................................passed  [07/100]\n18) Testing unknown command.................................passed  [04/100]\n\n                                                            Total:   90/100\n")),(0,i.kt)("p",null,"The actual tests are located in the ",(0,i.kt)("inlineCode",{parentName:"p"},"inputs/")," directory."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},"student@os:~/.../assignment-mini-shell/tests/$ ls -F _test/inputs\ntest_01.txt  test_03.txt  test_05.txt  test_07.txt  test_09.txt  test_11.txt  test_13.txt  test_15.txt  test_17.txt\ntest_02.txt  test_04.txt  test_06.txt  test_08.txt  test_10.txt  test_12.txt  test_14.txt  test_16.txt  test_18.txt\n")),(0,i.kt)("h3",{id:"running-the-linters"},"Running the Linters"),(0,i.kt)("p",null,"To run the linters, use the make lint command in the ",(0,i.kt)("inlineCode",{parentName:"p"},"tests/")," directory:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},"student@so:~/.../assignment-mini-shell/tests/$ make lint\n[...]\ncd .. && checkpatch.pl -f checker/*.sh tests/*.sh\n[...]\ncd .. && cpplint --recursive src/ tests/ checker/\n[...]\ncd .. && shellcheck checker/*.sh tests/*.sh\n")),(0,i.kt)("p",null,"Note that the linters have to be installed on your system: ",(0,i.kt)("a",{parentName:"p",href:"https://.com/torvalds/linux/blob/master/scripts/checkpatch.pl"},(0,i.kt)("inlineCode",{parentName:"a"},"checkpatch.pl")),", ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/cpplint/cpplint"},(0,i.kt)("inlineCode",{parentName:"a"},"cpplint")),", ",(0,i.kt)("a",{parentName:"p",href:"https://www.shellcheck.net/"},(0,i.kt)("inlineCode",{parentName:"a"},"shellcheck"))," with certain configuration options."),(0,i.kt)("h3",{id:"debugging"},"Debugging"),(0,i.kt)("p",null,"To inspect the differences between the output of the mini-shell and the reference binary set ",(0,i.kt)("inlineCode",{parentName:"p"},"DO_CLEANUP=no")," in ",(0,i.kt)("inlineCode",{parentName:"p"},"tests/_test/run_test.sh"),".\nTo see the results of the tests, you can check ",(0,i.kt)("inlineCode",{parentName:"p"},"tests/_test/outputs/")," directory."),(0,i.kt)("h3",{id:"memory-leaks"},"Memory leaks"),(0,i.kt)("p",null,"To inspect the unreleased resources (memory leaks, file descriptors) set ",(0,i.kt)("inlineCode",{parentName:"p"},"USE_VALGRIND=yes")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"DO_CLEANUP=no")," in ",(0,i.kt)("inlineCode",{parentName:"p"},"tests/_test/run_test.sh"),".\nYou can modify both the path to the Valgrind log file and the command parameters.\nTo see the results of the tests, you can check ",(0,i.kt)("inlineCode",{parentName:"p"},"tests/_test/outputs/")," directory."))}m.isMDXComponent=!0}}]);