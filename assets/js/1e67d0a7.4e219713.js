"use strict";(self.webpackChunkrtx=self.webpackChunkrtx||[]).push([[3394],{8892:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var r=n(5893),o=n(1151);const s={title:"ECR"},a=void 0,c={id:"1 Infrastructure/2 Cloud/1 AWS/ECR",title:"ECR",description:"docker login to AWS ECR",source:"@site/ops/1 Infrastructure/2 Cloud/1 AWS/ECR.md",sourceDirName:"1 Infrastructure/2 Cloud/1 AWS",slug:"/1 Infrastructure/2 Cloud/1 AWS/ECR",permalink:"/rtx/ops/1 Infrastructure/2 Cloud/1 AWS/ECR",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"ECR"},sidebar:"tutorialSidebar",previous:{title:"EC2",permalink:"/rtx/ops/1 Infrastructure/2 Cloud/1 AWS/EC2"},next:{title:"EKS",permalink:"/rtx/ops/1 Infrastructure/2 Cloud/1 AWS/EKS"}},i={},l=[{value:"docker login to AWS ECR",id:"docker-login-to-aws-ecr",level:3}];function u(e){const t={a:"a",code:"code",h3:"h3",li:"li",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h3,{id:"docker-login-to-aws-ecr",children:"docker login to AWS ECR"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-shell",children:"aws ecr get-login-password --region region | docker login \\\n   --username AWS --password-stdin \\\n   aws_account_id.dkr.ecr.region.amazonaws.com\n   \n# Example\n\naws ecr get-login-password --region ap-southeast-1 | podman login \\\n   --username AWS --password-stdin \\\n      105638660012.dkr.ecr.ap-southeast-1.amazonaws.com\n"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Ref: ",(0,r.jsx)(t.a,{href:"https://docs.aws.amazon.com/AmazonECR/latest/userguide/getting-started-cli.html",children:"https://docs.aws.amazon.com/AmazonECR/latest/userguide/getting-started-cli.html"})]}),"\n"]})]})}function d(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>c,a:()=>a});var r=n(7294);const o={},s=r.createContext(o);function a(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);