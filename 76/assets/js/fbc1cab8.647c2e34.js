"use strict";(self.webpackChunkso=self.webpackChunkso||[]).push([[5918],{5680:(e,t,a)=>{a.d(t,{xA:()=>c,yg:()=>h});var n=a(6540);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),m=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=m(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=m(a),y=o,h=p["".concat(l,".").concat(y)]||p[y]||d[y]||r;return a?n.createElement(h,i(i({ref:t},c),{},{components:a})):n.createElement(h,i({ref:t},c))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=y;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:o,i[1]=s;for(var m=2;m<r;m++)i[m]=a[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}y.displayName="MDXCreateElement"},5430:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>m});var n=a(8168),o=(a(6540),a(5680));const r={},i="Working with Memory",s={unversionedId:"Lab/Data/working-memory",id:"Lab/Data/working-memory",title:"Working with Memory",description:"As previously stated, from a programmer's perspective, memory is abstracted into variables.",source:"@site/docs/Lab/Data/working-memory.md",sourceDirName:"Lab/Data",slug:"/Lab/Data/working-memory",permalink:"/operating-systems/76/Lab/Data/working-memory",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Data",permalink:"/operating-systems/76/Lab/Data/overview"},next:{title:"Process Memory",permalink:"/operating-systems/76/Lab/Data/process-memory"}},l={},m=[{value:"Memory Access",id:"memory-access",level:2},{value:"Practice",id:"practice",level:3},{value:"Quiz",id:"quiz",level:3},{value:"Memory Protection",id:"memory-protection",level:2},{value:"Practice",id:"practice-1",level:3},{value:"Memory Allocation Strategy",id:"memory-allocation-strategy",level:2},{value:"C",id:"c",level:3},{value:"Python",id:"python",level:3},{value:"D",id:"d",level:3},{value:"Memory Vulnerabilities",id:"memory-vulnerabilities",level:2},{value:"C",id:"c-1",level:3},{value:"Python",id:"python-1",level:3},{value:"D",id:"d-1",level:3},{value:"Memory Corruption",id:"memory-corruption",level:2}],c={toc:m},p="wrapper";function d(e){let{components:t,...a}=e;return(0,o.yg)(p,(0,n.A)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"working-with-memory"},"Working with Memory"),(0,o.yg)("p",null,"As previously stated, from a programmer's perspective, memory is abstracted into variables.\nThis hides most of the lower level abstractions.\nEach variable is characterized by an address (or location in memory), type and access rights.\nSome languages require that the developer spells out these attributes explicitly (",(0,o.yg)("strong",{parentName:"p"},"statically typed languages")," - notable examples: C\\C++, D, Java) whereas others deduce them by analyzing the context (",(0,o.yg)("strong",{parentName:"p"},"dynamically typed languages")," - notable examples: Python, JavaScript).\nNevertheless, the language compiler needs to handle this information and, based on it, generate code that manages memory correctly and efficiently."),(0,o.yg)("h2",{id:"memory-access"},"Memory Access"),(0,o.yg)("p",null,"Accessing memory is defined by reading or writing values to or from a variable.\nFrom a programmer's perspective, this looks pretty straightforward:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-c"},'int main(void)\n{\n    int a;               // declare variable\n    a = 42;              // write 42 to variable a\n    printf("%d\\n", a);   // read variable a and print its contents\n\n    return 0;\n}\n')),(0,o.yg)("p",null,"However, from a lower level perspective, there are other attributes that need to be taken care of.\nFor instance, variable ",(0,o.yg)("inlineCode",{parentName:"p"},"a")," needs to have a correspondent area that is reserved in memory.\nThat specific chunk of memory is described by an address and a size.\nThe address for ",(0,o.yg)("inlineCode",{parentName:"p"},"a")," is automatically generated by going through multiple layers of abstractions, but the size is spelled out indirectly by the programmer by using the keyword ",(0,o.yg)("inlineCode",{parentName:"p"},"int"),".\nAnother aspect is represented by the access rights for a specific memory area.\nIn our example, ",(0,o.yg)("inlineCode",{parentName:"p"},"a")," is defined as being plain mutable, however, it is possible to declare constant variables which are stored in memory location with no writing rights."),(0,o.yg)("p",null,"Using the above information, the compiler and the operating system co-work to allocate memory that can represent the contents of the variable."),(0,o.yg)("p",null,"No matter what sort of language you are using, statically or dynamically typed, a variable is always described by the ",(0,o.yg)("strong",{parentName:"p"},"(address, size, access rights)")," triplet.\nBy using this triplet, the content of a variable is stored, retrieved or rewritten."),(0,o.yg)("h3",{id:"practice"},"Practice"),(0,o.yg)("p",null,"Navigate to the ",(0,o.yg)("inlineCode",{parentName:"p"},"support/memory-access/")," directory.\nInspect the ",(0,o.yg)("inlineCode",{parentName:"p"},"mem_access.c")," source file."),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Describe each variable by completing its ",(0,o.yg)("strong",{parentName:"p"},"(address, size, access rights)")," tuple.")),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Try to modify the ",(0,o.yg)("inlineCode",{parentName:"p"},"ca"),", ",(0,o.yg)("inlineCode",{parentName:"p"},"cp")," and ",(0,o.yg)("inlineCode",{parentName:"p"},"cp2")," variables by assigning some other value to them.\nExplain the behavior."))),(0,o.yg)("h3",{id:"quiz"},"Quiz"),(0,o.yg)("p",null,(0,o.yg)("a",{parentName:"p",href:"/operating-systems/76/Lab/Data/quiz/memory-access"},"Quiz")),(0,o.yg)("h2",{id:"memory-protection"},"Memory Protection"),(0,o.yg)("p",null,"Memory contents (both code and data) are separated into sections or zones.\nThis makes it easier to manage.\nMore than that, it allows different zones to have different permissions.\nThis follows the ",(0,o.yg)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Principle_of_least_privilege"},"principle of least privilege")," where only required permissions are part of a given section."),(0,o.yg)("p",null,"Code is usually placed in a section (",(0,o.yg)("inlineCode",{parentName:"p"},".text"),") with read and execute permissions;\nno write permissions.\nVariables are placed in different sections (",(0,o.yg)("inlineCode",{parentName:"p"},".data"),", ",(0,o.yg)("inlineCode",{parentName:"p"},".bss"),", stack, heap) with read and write permissions;\nno execute permissions."),(0,o.yg)("p",null,"Let's navigate to the ",(0,o.yg)("inlineCode",{parentName:"p"},"support/memory-protection/")," directory and inspect the ",(0,o.yg)("inlineCode",{parentName:"p"},"mem_prot.c")," source file.\nThe file uses different access types for the ",(0,o.yg)("inlineCode",{parentName:"p"},"data")," variable and the ",(0,o.yg)("inlineCode",{parentName:"p"},"do_nothing")," function."),(0,o.yg)("p",null,"Build it:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-console"},"student@os:~/.../lab/support/memory-protection$ make\ngcc -g -Wall -Wextra -Werror -I../../../../../common/makefile/../utils -I../../../../../common/makefile/../utils/log  -c -o mem_prot.o mem_prot.c\ngcc mem_prot.o ../../../../../common/makefile/../utils/log/log.o  -o mem_prot\n\nstudent@os:~/.../lab/support/memory-protection$ ./mem_prot\nreading from .data section\nwriting to .data section\nreading from .text section\nexecuting .text section\n")),(0,o.yg)("p",null,"All current actions in the program are valid."),(0,o.yg)("p",null,"Let's uncomment each commented line in the program and try again:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-console"},"student@os:~/.../lab/support/memory-protection$ ./mem_prot\nreading from .data section\nwriting to .data section\nreading from .text section\nexecuting .text section\nexecuting .data section\nSegmentation fault (core dumped)\n")),(0,o.yg)("p",null,"We now receive the dreaded ",(0,o.yg)("em",{parentName:"p"},"Segmentation fault")," message when we try to access a memory section with wrong permissions."),(0,o.yg)("p",null,"Permissions come into play when we control the memory address via pointers.\nBut even for programming languages that don't offer pointers (such as Python) issues may still arise."),(0,o.yg)("p",null,"In the ",(0,o.yg)("inlineCode",{parentName:"p"},"str.py")," file, we look to modify ",(0,o.yg)("inlineCode",{parentName:"p"},"str[1]"),", but this fails:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-console"},"student@os:~/.../lab/support/memory-protection$ ./str.py\nn, 110, n\nTraceback (most recent call last):\n  File \"./str.py\", line 5, in <module>\n    str[1] = 'z'\nTypeError: 'str' object does not support item assignment\n")),(0,o.yg)("p",null,"This fails because strings are, in Python, immutable.\nOnce a string is being created, it can not be modified;\nyou have to create a new string."),(0,o.yg)("h3",{id:"practice-1"},"Practice"),(0,o.yg)("p",null,"Go to the ",(0,o.yg)("inlineCode",{parentName:"p"},"support/memory-protection/")," folder and solve the practice items below."),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Add a variable named ",(0,o.yg)("inlineCode",{parentName:"p"},"ro")," that you define as ",(0,o.yg)("inlineCode",{parentName:"p"},"const"),".\nThe variable will be placed on a read-only section (",(0,o.yg)("inlineCode",{parentName:"p"},".rodata"),") such as that write and execution access would result in ",(0,o.yg)("em",{parentName:"p"},"Segmentation fault"),"."),(0,o.yg)("p",{parentName:"li"},"Access the ",(0,o.yg)("inlineCode",{parentName:"p"},"ro")," variable and show that, indeed, for write and execution access, ",(0,o.yg)("em",{parentName:"p"},"Segmentation fault")," is issued."))),(0,o.yg)("h2",{id:"memory-allocation-strategy"},"Memory Allocation Strategy"),(0,o.yg)("p",null,"Navigate to the ",(0,o.yg)("inlineCode",{parentName:"p"},"support/memory-alloc/")," directory.\nIt contains 3 implementations of the same program in different languages: C, Python and D.\nThe program creates a list of entries, each entry storing a name and an id.\nThe purpose of this exercise is to present the different strategies that programming languages adopt to manage memory."),(0,o.yg)("h3",{id:"c"},"C"),(0,o.yg)("p",null,"The C implementation manages the memory manually.\nYou can observe that all allocations are performed via ",(0,o.yg)("inlineCode",{parentName:"p"},"malloc")," and the memory is freed using ",(0,o.yg)("inlineCode",{parentName:"p"},"free"),".\nArrays can be defined as static (on the stack) or dynamic (a pointer to some heap memory).\nStack memory doesn't need to be freed, hence static arrays are automatically deallocated.\nHeap memory, however, is managed by the user, therefore it is the burden of the programmer to find the optimal memory strategy.\nThis offers the advantage that you can fine tune the memory usage depending on your application, but this comes with a cost: more often than not, managing memory is a highly complex error-prone task."),(0,o.yg)("h3",{id:"python"},"Python"),(0,o.yg)("p",null,"The Python implementation of the program has no notion of memory allocation.\nIt simply defines variables and the garbage collector takes care of allocating and deallocating memory.\nNotice how the destructor is called automatically at some point when the garbage collector deems that the list is not used anymore.\nGarbage collection lifts the burden of memory management from the user, however, it may be unsuitable for certain scenarios.\nFor example, real-time applications that need to take action immediately once a certain event occurs cannot use a garbage collector (GC).\nThat is because the GC usually stops the application to free dead objects."),(0,o.yg)("h3",{id:"d"},"D"),(0,o.yg)("p",null,"The previous 2 examples have showcased extreme situations: fully manual vs fully automatic memory management.\nIn D, both worlds are combined: variables may be allocated manually on the stack/heap or allocated via the garbage collector (for brevity, ",(0,o.yg)("inlineCode",{parentName:"p"},"malloc"),"-based allocation is not presented in this example).\nArrays that are allocated on the stack behave the same as in C, whereas arrays allocated with the garbage collector mimic Python lists.\nClasses are also garbage collected."),(0,o.yg)("h2",{id:"memory-vulnerabilities"},"Memory Vulnerabilities"),(0,o.yg)("p",null,"The purpose of this exercise is to provide examples on how memory corruption may occur and what are the safety guards implemented by different programming languages."),(0,o.yg)("p",null,"Navigate to the ",(0,o.yg)("inlineCode",{parentName:"p"},"support/memory-vuln/")," directory.\nIt features 3 files, each showcasing what happens in case of actions that may lead to memory corruption."),(0,o.yg)("h3",{id:"c-1"},"C"),(0,o.yg)("p",null,"The C implementation showcases some of the design flaws of the language can lead to memory corruption."),(0,o.yg)("p",null,"The first example demonstrates how a pointer to an expired stack frame may be leaked to an outer scope.\nThe C language does not implement any guards against such behavior, although data flow analysis could be used to detect such cases."),(0,o.yg)("p",null,"The second example highlights the fact that C does not check any bounds when performing array operations.\nThis leads to all sorts of undefined behavior.\nIn this scenario, some random memory is overwritten with ",(0,o.yg)("inlineCode",{parentName:"p"},"5"),".\nThe third example exhibits a manifestation of the previous design flaw, where the return address of the ",(0,o.yg)("inlineCode",{parentName:"p"},"main")," function is overwritten with ",(0,o.yg)("inlineCode",{parentName:"p"},"0"),", thus leading to a segmentation fault."),(0,o.yg)("p",null,"Although today it seems obvious that such behavior should not be accepted, we should take into account that the context in which the C language was created was entirely different from today.\nAt that time the resource constraints - DRAM memory was around a few KBs, operating systems were in their infancy, branch predictors did not exist etc. - were overwhelming.\nMoreover, security was not a concern because the internet basically did not exist.\nAs a consequence, the language was not developed with memory safety in mind."),(0,o.yg)("h3",{id:"python-1"},"Python"),(0,o.yg)("p",null,"Technically, it is not possible to do any memory corruption in Python (that is, if you avoid calling C functions from it).\nPointers do not formally exist, and any kind of array access is checked to be within its bounds.\nThe example simply showcases what happens when an out-of-bounds access is performed - an ",(0,o.yg)("inlineCode",{parentName:"p"},"IndexError")," is thrown and execution halts."),(0,o.yg)("h3",{id:"d-1"},"D"),(0,o.yg)("p",null,"The D implementation uses almost the same code as the C implementation, but suffers from minor syntax modifications.\nIn essence, the two implement the same logic.\nWhen compiling this code, it can be observed that the D compiler notices at compile time that an out-of-bounds access is performed.\nThis makes sense, since a static array cannot modify its length and therefore the compiler has all the information to spot the mistake.\nThe only way to make the code compile is to comment the faulting lines or to replace the out-of-bounds index with a correct one.\nAfter doing so, the program compiles and we can see that memory corruption occurs.\nHowever, D also has safety checks, however, these are not performed by default.\nTo enable such checks, the user must annotate a function with the ",(0,o.yg)("inlineCode",{parentName:"p"},"@safe")," keyword:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-d"},"int* bad() @safe\n")),(0,o.yg)("p",null,"By doing so, the mechanical checks are enabled and a new set of criteria needs to be followed for the code to be accepted.\nTaking the address of a local, doing pointer arithmetic, reinterpret casts, calling non-",(0,o.yg)("inlineCode",{parentName:"p"},"@safe")," functions etc. are not allowed in ",(0,o.yg)("inlineCode",{parentName:"p"},"@safe")," code.\nIf any of these unsafe features are manually proven to be safe, the ",(0,o.yg)("inlineCode",{parentName:"p"},"@trusted")," keyword may be used to disable the checks but still consider the code ",(0,o.yg)("inlineCode",{parentName:"p"},"@safe"),".\nThis is to allow writing system code, which by its nature is unsafe."),(0,o.yg)("h2",{id:"memory-corruption"},"Memory Corruption"),(0,o.yg)("p",null,"For this practice item, you will need to identify the programming mistake that makes it possible to corrupt memory."),(0,o.yg)("p",null,"Navigate to the ",(0,o.yg)("inlineCode",{parentName:"p"},"support/memory-corruption")," folder.\nInspect the source file ",(0,o.yg)("inlineCode",{parentName:"p"},"segfault.c"),"."),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},"What does the program do? (this could be a quiz in the final form)"),(0,o.yg)("li",{parentName:"ol"},"Compile and run it.\nWhat happens?"),(0,o.yg)("li",{parentName:"ol"},"Debug the program and find the line that causes the segfault.\n",(0,o.yg)("strong",{parentName:"li"},"Note"),": Although using ",(0,o.yg)("inlineCode",{parentName:"li"},"printf()")," calls is a viable option, we strongly suggest you use GDB."),(0,o.yg)("li",{parentName:"ol"},"Fix the program."),(0,o.yg)("li",{parentName:"ol"},"Analyze the corresponding Python and D implementation.")),(0,o.yg)("p",null,"What is the expected result in each case?\nWhy?\nRun the programs and see what happens."))}d.isMDXComponent=!0}}]);