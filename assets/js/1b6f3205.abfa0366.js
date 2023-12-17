"use strict";(self.webpackChunkrtx=self.webpackChunkrtx||[]).push([[4576],{2575:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var i=s(5893),t=s(1151);const o={sidebar_position:1,title:"Conditions"},r=void 0,l={id:"2 Shells/Bash/1 Condition",title:"Conditions",description:"1. If any command runs successfully inside if conditional expression then if treats it as true.",source:"@site/linux/2 Shells/Bash/1 Condition.md",sourceDirName:"2 Shells/Bash",slug:"/2 Shells/Bash/1 Condition",permalink:"/rtx/linux/2 Shells/Bash/1 Condition",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Conditions"},sidebar:"tutorialSidebar",previous:{title:"Bash",permalink:"/rtx/linux/2 Shells/Bash/"},next:{title:"Loop",permalink:"/rtx/linux/2 Shells/Bash/2 loop"}},a={},c=[];function d(e){const n={a:"a",code:"code",li:"li",ol:"ol",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"If any command runs successfully inside if conditional expression then if treats it as true."}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:'if print; then echo "foo"; else echo "bar"; fi\n'})}),"\n",(0,i.jsxs)(n.ol,{start:"2",children:["\n",(0,i.jsx)(n.li,{children:"There's a command called test to evaluate conditional expression."}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:'if test $a -ge $b;\nthen\n  echo "a is bigger";\nelse\n  echo "b is bigger";\nfi\n'})}),"\n",(0,i.jsx)(n.p,{children:"see the test command ? It evaluates the conditional expression and return true / false base on the evaluation."}),"\n",(0,i.jsxs)(n.ol,{start:"3",children:["\n",(0,i.jsxs)(n.li,{children:["test is later replaced with ",(0,i.jsx)(n.code,{children:"["}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:'if [ $a -ge $b ];\nthen\n  echo "a is big";\nelse\n  echo "b is big";\nfi\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Yes, the command is ",(0,i.jsx)(n.code,{children:"["})," and it starts evaluating the expression until it gets ",(0,i.jsx)(n.code,{children:"]"}),". You can check it yourself with ",(0,i.jsx)(n.code,{children:"which ["})," or even ",(0,i.jsx)(n.code,{children:"man ["}),". ",(0,i.jsx)(n.code,{children:"["})," is basically another representation of test command."]}),"\n",(0,i.jsxs)(n.ol,{start:"4",children:["\n",(0,i.jsxs)(n.li,{children:["There's some limitations of using ",(0,i.jsx)(n.code,{children:"["})," or ",(0,i.jsx)(n.code,{children:"test"}),". For example, it can't evaluate ",(0,i.jsx)(n.code,{children:"&&"}),", ",(0,i.jsx)(n.code,{children:"||"}),". So here comes ",(0,i.jsx)(n.code,{children:"[["})," with improvements."]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:'if [[ $a > $b || $a == $b ]]; \nthen \n  echo "a is big"; \nelse \n  echo "b is big"; \nfi\n'})}),"\n",(0,i.jsxs)(n.p,{children:["You can also read more about the differences between ",(0,i.jsx)(n.code,{children:"["})," and ",(0,i.jsx)(n.code,{children:"[["})," from ",(0,i.jsx)(n.a,{href:"https://stackoverflow.com/questions/3427872/whats-the-difference-between-and-in-bash",children:"here"}),"."]}),"\n",(0,i.jsxs)(n.ol,{start:"5",children:["\n",(0,i.jsx)(n.li,{children:"There's no ternary operator in bash. But there's a hack ..."}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:'[[ $a == $b ]] && echo "Equal" || echo "Not equal"\n'})})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>l,a:()=>r});var i=s(7294);const t={},o=i.createContext(t);function r(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);