(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{9171:(e,s,t)=>{Promise.resolve().then(t.bind(t,4566))},4566:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>z});var a=t(5155),i=t(7871),r=t(3312),n=t(2115),l=t(1567);let o=n.forwardRef((e,s)=>{let{className:t,...i}=e;return(0,a.jsx)("div",{className:"relative w-full overflow-auto",children:(0,a.jsx)("table",{ref:s,className:(0,l.cn)("w-full caption-bottom text-sm",t),...i})})});o.displayName="Table";let d=n.forwardRef((e,s)=>{let{className:t,...i}=e;return(0,a.jsx)("thead",{ref:s,className:(0,l.cn)("[&_tr]:border-b",t),...i})});d.displayName="TableHeader";let c=n.forwardRef((e,s)=>{let{className:t,...i}=e;return(0,a.jsx)("tbody",{ref:s,className:(0,l.cn)("[&_tr:last-child]:border-0",t),...i})});c.displayName="TableBody",n.forwardRef((e,s)=>{let{className:t,...i}=e;return(0,a.jsx)("tfoot",{ref:s,className:(0,l.cn)("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",t),...i})}).displayName="TableFooter";let h=n.forwardRef((e,s)=>{let{className:t,...i}=e;return(0,a.jsx)("tr",{ref:s,className:(0,l.cn)("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",t),...i})});h.displayName="TableRow";let m=n.forwardRef((e,s)=>{let{className:t,...i}=e;return(0,a.jsx)("th",{ref:s,className:(0,l.cn)("h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",t),...i})});m.displayName="TableHead";let x=n.forwardRef((e,s)=>{let{className:t,...i}=e;return(0,a.jsx)("td",{ref:s,className:(0,l.cn)("p-4 align-middle [&:has([role=checkbox])]:pr-0",t),...i})});x.displayName="TableCell",n.forwardRef((e,s)=>{let{className:t,...i}=e;return(0,a.jsx)("caption",{ref:s,className:(0,l.cn)("mt-4 text-sm text-muted-foreground",t),...i})}).displayName="TableCaption";var f=t(8173),u=t.n(f),p=t(4857),b=t(7485);function j(e){let{code:s,weights:t,model:i,data:n}=e,l=async e=>{let a=["weights","model","data"].map(e=>"".concat("http://localhost:3001","/licenses/").concat(e,"/").concat("weights"===e?t:"model"===e?i:n,".md")),r=(await Promise.all(a.map(e=>fetch(e).then(e=>e.text())))).join("\n\n"),l=new Blob(["html"===e?await fetch("https://api.github.com/markdown",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({text:r,mode:"markdown"})}).then(e=>e.text()):r],{type:"html"===e?"text/html":"text/markdown"}),o=URL.createObjectURL(l),d=document.createElement("a");d.href=o,d.download="".concat(s,".").concat(e),document.body.appendChild(d),d.click(),document.body.removeChild(d),URL.revokeObjectURL(o)};return(0,a.jsxs)(b.rI,{children:[(0,a.jsx)(b.ty,{asChild:!0,children:(0,a.jsxs)(r.$,{size:"lg",className:"w-full max-w-md",children:[(0,a.jsx)(p.A,{className:"mr-2 h-4 w-4"}),"Download License"]})}),(0,a.jsxs)(b.SQ,{children:[(0,a.jsx)(b._2,{onClick:()=>l("md"),children:"Download as MD"}),(0,a.jsx)(b._2,{onClick:()=>l("html"),children:"Download as HTML"})]})]})}var g=t(488),v=t(5054),y=t(4113);let N={hidden:{opacity:0,height:0},visible:{opacity:1,height:"auto",transition:{duration:.2}},exit:{opacity:0,height:0,transition:{duration:.2}}},w={hidden:{height:0,opacity:0},visible:{height:"auto",opacity:1},exit:{opacity:0,height:0,transition:{duration:.2}}};function A(e){let{usedAIModel:s,setUsedAIModel:t,isC999:i,setIsC999:r,isC1Variant:n,setIsC1Variant:l}=e;return(0,a.jsx)(v.P.div,{variants:N,initial:"hidden",animate:"visible",exit:"exit",className:"space-y-4 overflow-hidden",children:(0,a.jsx)("div",{className:"flex justify-center",children:(0,a.jsxs)("div",{className:"w-fit space-y-4",children:[(0,a.jsxs)(v.P.div,{variants:w,className:"flex items-center space-x-2",children:[(0,a.jsx)(g.d,{checked:s,onCheckedChange:e=>{t(e),e&&(r(!1),l(!1))}}),(0,a.jsx)("span",{children:"Content was created with the help of an AI model."})]}),(0,a.jsx)(y.N,{children:!s&&(0,a.jsxs)(v.P.div,{variants:w,initial:"hidden",animate:"visible",exit:"exit",className:"flex items-center space-x-2",children:[(0,a.jsx)(g.d,{checked:i,onCheckedChange:r}),(0,a.jsx)("span",{children:"No AI usage allowed (Use AILA-999-C)"})]})}),(0,a.jsx)(y.N,{children:!i&&!s&&(0,a.jsxs)(v.P.div,{variants:w,initial:"hidden",animate:"visible",exit:"exit",className:"flex items-center space-x-2",children:[(0,a.jsx)(g.d,{checked:n,onCheckedChange:l}),(0,a.jsx)("span",{children:"Allow case-by-case exceptions (C-1 variant)"})]})})]})})})}var k=t(2863);let C={value:1,label:"Personal Use",description:"Available for personal use"},I={value:2,label:"Research & Academic",description:"Available for research and academic purposes"},L={value:4,label:"Commercial Use",description:"Available for commercial use"},R=[C,I,L],_=[C,I,L],T=[{value:1,label:"Open source and public",description:"Available if open source or public"},I,L];function z(){let[e,s]=(0,n.useState)(null),[t,l]=(0,n.useState)(0),[f,p]=(0,n.useState)(0),[b,g]=(0,n.useState)(0),[v,N]=(0,n.useState)(!1),[w,C]=(0,n.useState)(!1),[I,L]=(0,n.useState)(!1),z=e=>s=>{e(s)},U=(()=>{if(!e&&!I)return"";if(v)return"aila-999-c";let s="".concat(t).concat(f).concat(b);if(I)return"aila-".concat(s,"-b");let a="aila-".concat(s,"-").concat(e);return"C"===e&&w&&(a+="-1"),a.toLowerCase()})(),F=U?"".concat("http://localhost:3001","/licenses-list/").concat(U):null;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("section",{className:"space-y-4",children:(0,a.jsx)("div",{className:"flex flex-col gap-4 text-lg text-muted-foreground",children:(0,a.jsxs)("div",{className:"flex flex-col md:flex-row md:gap-4",children:[(0,a.jsx)("div",{className:"flex-1",children:(0,a.jsxs)("div",{className:"p-4",children:[(0,a.jsx)("h2",{className:"pb-2 text-center text-2xl font-bold",children:"What is AILA ?"}),(0,a.jsxs)("p",{className:"text-justify",children:["The ",(0,a.jsx)("strong",{children:"AI Licence Agreement (AILA)"})," is designed to bring clarity and transparency to the world of AI and content creation."]}),(0,a.jsx)("p",{className:"text-justify",children:"Whether you're a content creator, a researcher, an AI model developer, or even a simple consumer, we are all concerned."}),(0,a.jsx)("p",{className:"text-justify",children:"AILA is trying to provide a simple way to define and communicate the terms of use resources for AI-related."})]})}),(0,a.jsxs)("div",{className:"flex-1",children:[(0,a.jsx)("h2",{className:"pb-2 text-center text-2xl font-bold",children:"What is this ... ?"}),(0,a.jsx)("p",{className:"text-justify",children:"This is a working draft for a website for AILA with currently 1 contributor and no organization."}),(0,a.jsx)("p",{className:"text-justify",children:"I sincerly think that this is a good idea but it is far from perfect and it needs much work."}),(0,a.jsxs)("p",{className:"text-justify",children:["Considering the nature of the matter and the public impacted, I think we should organize with a"," ",(0,a.jsx)("a",{href:"https://en.wikipedia.org/wiki/Liquid_democracy",target:"_blank",rel:"noopener noreferrer",children:"governance as liquid as possible."})]}),(0,a.jsxs)("p",{className:"text-justify",children:["If you are interested in contributing to this project, please open an"," ",(0,a.jsx)("a",{href:"https://github.com/DimitriGilbert/AILA/issues",target:"_blank",rel:"noopener noreferrer",children:"issue"})," ","on the"," ",(0,a.jsx)("a",{href:"https://github.com/DimitriGilbert/AILA",target:"_blank",rel:"noopener noreferrer",children:"GitHub repository"}),". (Until a finding a better home, definitly open to suggestions for that !)."]})]})]})})}),(0,a.jsxs)("section",{className:"space-y-4",children:[(0,a.jsx)("h2",{id:"license-selector",className:"text-center text-4xl font-bold",children:"AILA License Selector"}),(0,a.jsxs)("div",{className:"flex justify-center gap-4",children:[(0,a.jsx)(r.$,{variant:"C"===e?"default":"outline",onClick:()=>s("C"),disabled:I,className:"border-2 border-primary px-4 py-2 text-lg font-bold",children:"I create content"}),(0,a.jsx)(r.$,{variant:"F"===e?"default":"outline",onClick:()=>s("F"),disabled:I,className:"border-2 border-primary px-4 py-2 text-lg font-bold",children:"I train models"})]}),(0,a.jsx)(y.N,{children:("C"===e||I)&&(0,a.jsx)(A,{usedAIModel:I,setUsedAIModel:L,isC999:v,setIsC999:N,isC1Variant:w,setIsC1Variant:C})}),(0,a.jsx)(y.N,{children:!v&&(0,a.jsxs)(k.P.div,{initial:{height:0},animate:{height:"auto"},exit:{height:0},transition:{duration:.2},className:"grid grid-cols-1 gap-6 lg:grid-cols-3 overflow-hidden",children:[(0,a.jsx)(i.g,{title:"Training Weight Availability",description:"Specify the availability of training weights : ",value:t,onChange:z(l),options:R}),(0,a.jsx)(i.g,{title:"Trained Model Availability",description:"Specify the availability of the trained model : ",value:f,onChange:z(p),options:_}),(0,a.jsx)(i.g,{title:"Training Data Availability",description:"Specify the availability of training data : ",value:b,onChange:z(g),options:T})]})}),(0,a.jsx)("div",{className:"space-y-4 rounded-lg p-4",children:(0,a.jsx)("div",{className:"mx-auto flex max-w-3xl justify-center gap-4",children:F?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(u(),{href:"/licenses-list/".concat(U),className:"flex-1",children:(0,a.jsxs)(r.$,{size:"lg",className:"w-full",children:["View License ",(0,a.jsx)("strong",{children:U.toUpperCase()})]})}),(0,a.jsx)("div",{className:"flex-1",children:(0,a.jsx)(j,{code:U.toUpperCase(),weights:t,model:f,data:b})})]}):(0,a.jsx)(r.$,{size:"lg",className:"w-full",disabled:!0,children:"Select Options"})})})]}),(0,a.jsx)("section",{className:"space-y-4",children:(0,a.jsx)("div",{className:"flex flex-col gap-4 text-lg text-muted-foreground",children:(0,a.jsxs)("div",{className:"flex flex-col md:flex-row md:gap-4",children:[(0,a.jsxs)("div",{className:"flex-1",children:[(0,a.jsxs)("div",{className:"p-4",children:[(0,a.jsx)("h2",{className:"pb-2 text-center text-2xl font-bold",children:"What Makes AILA Unique ?"}),(0,a.jsxs)("p",{className:"text-justify",children:["AILA uses a ",(0,a.jsx)("strong",{children:"bitmask system"})," to clearly outline the openness and permissions of a licence."]}),(0,a.jsx)("p",{className:"text-justify",children:'By breaking down permissions into intuitive "bits", AILA ensures that everyone knows exactly what is allowed—and under what conditions.'})]}),(0,a.jsxs)("div",{className:"p-4",children:[(0,a.jsx)("h2",{className:"pb-2 text-center text-2xl font-bold",children:"Why AILA Matters"}),(0,a.jsx)("p",{className:"text-justify",children:"AILA bridges the gap between human understanding and machine readability, ensuring that AI development respects the rights of content creators while fostering innovation."}),(0,a.jsx)("p",{children:"Whether you're protecting your creative work or building the next generation of AI models, AILA provides the clarity and flexibility you need."}),(0,a.jsx)("p",{className:"text-justify",children:"Join us in shaping a future where AI and creativity thrive together, responsibly and transparently."})]}),(0,a.jsxs)("div",{className:"p-4",children:[(0,a.jsx)("h2",{className:"pb-2 pt-4 text-center text-2xl font-bold",children:"The AILA Bits"}),(0,a.jsx)("p",{className:"mb-4",children:"Each category uses the same bit values to indicate availability:"}),(0,a.jsxs)(o,{children:[(0,a.jsx)(d,{children:(0,a.jsxs)(h,{children:[(0,a.jsx)(m,{className:"w-[100px]",children:"Bit"}),(0,a.jsx)(m,{children:"Meaning"})]})}),(0,a.jsxs)(c,{children:[(0,a.jsxs)(h,{children:[(0,a.jsx)(x,{className:"font-mono",children:"0"}),(0,a.jsx)(x,{children:"Unavailable"})]}),(0,a.jsxs)(h,{children:[(0,a.jsx)(x,{className:"font-mono",children:"1"}),(0,a.jsx)(x,{children:"Available for personal use*"})]}),(0,a.jsxs)(h,{children:[(0,a.jsx)(x,{className:"font-mono",children:"2"}),(0,a.jsx)(x,{children:"Available for research and academic use"})]}),(0,a.jsxs)(h,{children:[(0,a.jsx)(x,{className:"font-mono",children:"4"}),(0,a.jsx)(x,{children:"Available for commercial use"})]})]})]}),(0,a.jsx)("p",{className:"mt-4 text-sm text-muted-foreground",children:'* For Training Data, bit 1 means "Available if open source or public" instead of personal use'}),(0,a.jsx)("p",{className:"mb-2 mt-6",children:"These bits apply to three categories:"}),(0,a.jsxs)("ul",{className:"list-disc space-y-2 pl-6",children:[(0,a.jsxs)("li",{children:[(0,a.jsx)("strong",{children:"Training Weight Availability"}),": Access to the model's training weights"]}),(0,a.jsxs)("li",{children:[(0,a.jsx)("strong",{children:"Trained Model Availability"}),": Access to the trained model itself"]}),(0,a.jsxs)("li",{children:[(0,a.jsx)("strong",{children:"Training Data Availability"}),": Access to the data used for training"]})]}),(0,a.jsx)("p",{className:"mt-4",children:"Bits can be combined (e.g., 3 = personal + research, 7 = all uses) to form a clear, machine-readable license."})]})]}),(0,a.jsx)("div",{className:"flex-1",children:(0,a.jsxs)("div",{className:"p-4",children:[(0,a.jsx)("h2",{className:"pb-2 text-center text-2xl font-bold",children:"License Targets"}),(0,a.jsx)("p",{className:"text-justify",children:"AILA offers three tailored sub-licenses to address the needs of different stakeholders:"}),(0,a.jsxs)("ul",{className:"mt-4 space-y-4",children:[(0,a.jsxs)("li",{children:[(0,a.jsx)("div",{className:"text-center text-xl font-bold",children:"Creator : -C"}),"For content creators to specify how their work can be used in AI training. ",(0,a.jsx)("br",{}),"Example:",(0,a.jsxs)("ul",{className:"ml-6 mt-2 list-disc space-y-2",children:[(0,a.jsxs)("li",{children:[(0,a.jsx)("strong",{children:"AILA-777-C"})," means content is available for AI training only if weights, models, and training data are fully accessible."]}),(0,a.jsxs)("li",{children:[(0,a.jsx)("strong",{children:"AILA-999-C"}),': A firm "no" to any AI use of the content.']}),(0,a.jsxs)("li",{children:[(0,a.jsx)("strong",{children:"C-1 Variant"}),": Allows for exceptions on a case-by-case basis. ",(0,a.jsx)("br",{}),(0,a.jsx)("strong",{children:"AILA-231-C-1"})," specifies that:",(0,a.jsxs)("ul",{className:"ml-6 mt-2 list-disc space-y-2",children:[(0,a.jsx)("li",{children:"weights are at least available for academic and research use,"}),(0,a.jsx)("li",{children:"models are at least available for personal use,"}),(0,a.jsx)("li",{children:"training data list is available is it is open source or public."}),(0,a.jsx)("li",{children:"you can request exceptions on a case-by-case basis."})]})]})]})]}),(0,a.jsxs)("li",{children:[(0,a.jsx)("div",{className:"text-center text-xl font-bold",children:"Built With : -B"}),"For content creators to inform users that their work was created using AI models under specific AILA terms. ",(0,a.jsx)("br",{}),"Example:",(0,a.jsx)("ul",{className:"ml-6 mt-2 list-disc space-y-2",children:(0,a.jsxs)("li",{children:[(0,a.jsx)("strong",{children:"AILA-777-B"})," indicates the content was built using a model compliant with"," ",(0,a.jsx)("strong",{children:"AILA-777-F"}),"."]})})]}),(0,a.jsxs)("li",{children:[(0,a.jsx)("div",{className:"text-center text-xl font-bold",children:"Facteur : -F"}),"For AI model creators to communicate what resources ( weights, models, training data) are available and for what purposes. ",(0,a.jsx)("br",{}),"Example:",(0,a.jsxs)("ul",{className:"ml-6 mt-2 list-disc space-y-2",children:[(0,a.jsxs)("li",{children:[(0,a.jsx)("strong",{children:"AILA-777-F"})," specifies that weights, models, and training data are available for all usage."]}),(0,a.jsxs)("li",{children:[(0,a.jsx)("strong",{children:"AILA-231-F"})," specifies that:",(0,a.jsxs)("ul",{className:"ml-6 mt-2 list-disc space-y-2",children:[(0,a.jsx)("li",{children:"weights are at least available for academic and research use,"}),(0,a.jsx)("li",{children:"models are at least available for personal use,"}),(0,a.jsx)("li",{children:"training data list is available is it is open source or public."})]})]})]})]})]})]})})]})})})]})}},7871:(e,s,t)=>{"use strict";t.d(s,{g:()=>m});var a=t(5155),i=t(488),r=t(6835),n=t(2115),l=t(2098),o=t(1567);let d=l.bL,c=l.l9,h=n.forwardRef((e,s)=>{let{className:t,align:i="center",sideOffset:r=4,...n}=e;return(0,a.jsx)(l.UC,{ref:s,align:i,sideOffset:r,className:(0,o.cn)("z-50 w-64 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",t),...n})});function m(e){let{title:s,description:t,value:n,onChange:l,options:o}=e,m=(e,s)=>{s?l(n|e):l(n&~e)};return(0,a.jsxs)("div",{className:"space-y-4 rounded-lg border-2 border-primary/20 bg-card p-4",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("h3",{className:"text-lg font-semibold",children:s}),(0,a.jsxs)("p",{className:"text-sm text-muted-foreground",children:[t," ",n]}),(0,a.jsx)("p",{className:"ml-2 font-mono text-sm text-muted-foreground",children:function(e){if(0===e)return"(No restrictions)";let s=[];return 1&e&&s.push("Personal"),2&e&&s.push("Research"),4&e&&s.push("Commercial"),"(".concat(s.join(" + "),")")}(n)})]}),(0,a.jsx)("div",{className:"space-y-2",children:o.map(e=>(0,a.jsxs)("div",{className:"flex items-center justify-between",children:[(0,a.jsxs)("div",{className:"flex items-center gap-1.5",children:[(0,a.jsx)("span",{className:"text-sm",children:e.label}),(0,a.jsxs)(d,{children:[(0,a.jsx)(c,{children:(0,a.jsx)(r.A,{className:"h-4 w-4 cursor-help text-muted-foreground hover:text-foreground"})}),(0,a.jsx)(h,{side:"right",align:"start",className:"w-80",children:(0,a.jsxs)("div",{className:"space-y-2",children:[(0,a.jsx)("p",{className:"text-sm",children:e.description}),(0,a.jsxs)("p",{className:"text-xs text-muted-foreground",children:["Bit value:"," ",(0,a.jsx)("span",{className:"font-mono",children:e.value})]})]})})]})]}),(0,a.jsx)(i.d,{checked:(n&e.value)!=0,onCheckedChange:s=>m(e.value,s)})]},e.value))})]})}h.displayName=l.UC.displayName},3312:(e,s,t)=>{"use strict";t.d(s,{$:()=>d});var a=t(5155),i=t(2115),r=t(2317),n=t(1027),l=t(1567);let o=(0,n.F)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),d=i.forwardRef((e,s)=>{let{className:t,variant:i,size:n,asChild:d=!1,...c}=e,h=d?r.DX:"button";return(0,a.jsx)(h,{className:(0,l.cn)(o({variant:i,size:n,className:t})),ref:s,...c})});d.displayName="Button"},7485:(e,s,t)=>{"use strict";t.d(s,{SQ:()=>m,_2:()=>x,rI:()=>c,ty:()=>h});var a=t(5155),i=t(2115),r=t(3177),n=t(6967),l=t(8867),o=t(3565),d=t(1567);let c=r.bL,h=r.l9;r.YJ,r.ZL,r.Pb,r.z6,i.forwardRef((e,s)=>{let{className:t,inset:i,children:l,...o}=e;return(0,a.jsxs)(r.ZP,{ref:s,className:(0,d.cn)("flex cursor-default gap-2 select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",i&&"pl-8",t),...o,children:[l,(0,a.jsx)(n.A,{className:"ml-auto"})]})}).displayName=r.ZP.displayName,i.forwardRef((e,s)=>{let{className:t,...i}=e;return(0,a.jsx)(r.G5,{ref:s,className:(0,d.cn)("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",t),...i})}).displayName=r.G5.displayName;let m=i.forwardRef((e,s)=>{let{className:t,sideOffset:i=4,...n}=e;return(0,a.jsx)(r.ZL,{children:(0,a.jsx)(r.UC,{ref:s,sideOffset:i,className:(0,d.cn)("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",t),...n})})});m.displayName=r.UC.displayName;let x=i.forwardRef((e,s)=>{let{className:t,inset:i,...n}=e;return(0,a.jsx)(r.q7,{ref:s,className:(0,d.cn)("relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",i&&"pl-8",t),...n})});x.displayName=r.q7.displayName,i.forwardRef((e,s)=>{let{className:t,children:i,checked:n,...o}=e;return(0,a.jsxs)(r.H_,{ref:s,className:(0,d.cn)("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",t),checked:n,...o,children:[(0,a.jsx)("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:(0,a.jsx)(r.VF,{children:(0,a.jsx)(l.A,{className:"h-4 w-4"})})}),i]})}).displayName=r.H_.displayName,i.forwardRef((e,s)=>{let{className:t,children:i,...n}=e;return(0,a.jsxs)(r.hN,{ref:s,className:(0,d.cn)("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",t),...n,children:[(0,a.jsx)("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:(0,a.jsx)(r.VF,{children:(0,a.jsx)(o.A,{className:"h-2 w-2 fill-current"})})}),i]})}).displayName=r.hN.displayName,i.forwardRef((e,s)=>{let{className:t,inset:i,...n}=e;return(0,a.jsx)(r.JU,{ref:s,className:(0,d.cn)("px-2 py-1.5 text-sm font-semibold",i&&"pl-8",t),...n})}).displayName=r.JU.displayName,i.forwardRef((e,s)=>{let{className:t,...i}=e;return(0,a.jsx)(r.wv,{ref:s,className:(0,d.cn)("-mx-1 my-1 h-px bg-muted",t),...i})}).displayName=r.wv.displayName},488:(e,s,t)=>{"use strict";t.d(s,{d:()=>l});var a=t(5155),i=t(2115),r=t(2413),n=t(1567);let l=i.forwardRef((e,s)=>{let{className:t,...i}=e;return(0,a.jsx)(r.bL,{className:(0,n.cn)("peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",t),...i,ref:s,children:(0,a.jsx)(r.zi,{className:(0,n.cn)("pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0")})})});l.displayName=r.bL.displayName},1567:(e,s,t)=>{"use strict";t.d(s,{cn:()=>r});var a=t(3463),i=t(9795);function r(){for(var e=arguments.length,s=Array(e),t=0;t<e;t++)s[t]=arguments[t];return(0,i.QP)((0,a.$)(s))}}},e=>{var s=s=>e(e.s=s);e.O(0,[173,222,185,762,441,517,358],()=>s(9171)),_N_E=e.O()}]);