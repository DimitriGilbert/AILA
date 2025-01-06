(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{9171:(e,s,t)=>{Promise.resolve().then(t.bind(t,6115))},6115:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>w});var a=t(5155),r=t(7871),n=t(3312),i=t(488),l=t(2115),o=t(3920),d=t(4857),c=t(814),m=t(6436),h=t(7485),f=t(1567);let u=l.forwardRef((e,s)=>{let{className:t,...r}=e;return(0,a.jsx)("div",{className:"relative w-full overflow-auto",children:(0,a.jsx)("table",{ref:s,className:(0,f.cn)("w-full caption-bottom text-sm",t),...r})})});u.displayName="Table";let x=l.forwardRef((e,s)=>{let{className:t,...r}=e;return(0,a.jsx)("thead",{ref:s,className:(0,f.cn)("[&_tr]:border-b",t),...r})});x.displayName="TableHeader";let p=l.forwardRef((e,s)=>{let{className:t,...r}=e;return(0,a.jsx)("tbody",{ref:s,className:(0,f.cn)("[&_tr:last-child]:border-0",t),...r})});p.displayName="TableBody",l.forwardRef((e,s)=>{let{className:t,...r}=e;return(0,a.jsx)("tfoot",{ref:s,className:(0,f.cn)("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",t),...r})}).displayName="TableFooter";let g=l.forwardRef((e,s)=>{let{className:t,...r}=e;return(0,a.jsx)("tr",{ref:s,className:(0,f.cn)("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",t),...r})});g.displayName="TableRow";let b=l.forwardRef((e,s)=>{let{className:t,...r}=e;return(0,a.jsx)("th",{ref:s,className:(0,f.cn)("h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",t),...r})});b.displayName="TableHead";let j=l.forwardRef((e,s)=>{let{className:t,...r}=e;return(0,a.jsx)("td",{ref:s,className:(0,f.cn)("p-4 align-middle [&:has([role=checkbox])]:pr-0",t),...r})});j.displayName="TableCell",l.forwardRef((e,s)=>{let{className:t,...r}=e;return(0,a.jsx)("caption",{ref:s,className:(0,f.cn)("mt-4 text-sm text-muted-foreground",t),...r})}).displayName="TableCaption";var v=t(1017),N=t(3413);let y=[{value:1,label:"Personal Use",description:"Available for personal use"},{value:2,label:"Research & Academic",description:"Available for research and academic purposes"},{value:4,label:"Commercial Use",description:"Available for commercial use"}];function w(){let[e,s]=(0,l.useState)(null),[t,f]=(0,l.useState)(0),[w,A]=(0,l.useState)(0),[k,C]=(0,l.useState)(0),[L,I]=(0,l.useState)(!1),[R,_]=(0,l.useState)(!1),[T,z]=(0,l.useState)(!1),[S,F]=(0,l.useState)(""),U=(0,m.n)({mutationFn:async e=>{let s=[];if("AILA-999-C"===e){let e=await fetch("/licenses/AILA-999-C.md");if(!e.ok)throw Error("Failed to fetch AILA-999-C.md");let s=await e.text();return(await (0,v.V)().use(N.A).process(s)).toString()}let[t,a,r,n,i,l]=e.match(/AILA-(\d)(\d)(\d)-([CBF]|B)(-1)?/)||[];if(!a||!r||!n||!i)throw Error("Invalid license code");for(let e of(await Promise.all([fetch("/licenses/weights/".concat(a,".md")),fetch("/licenses/model/".concat(r,".md")),fetch("/licenses/data/".concat(n,".md"))]))){if(!e.ok)throw Error("Failed to fetch markdown part");let t=await e.text(),a=await (0,v.V)().use(N.A).process(t);s.push(a.toString())}if("C"===i&&l){let e=await fetch("/licenses/AILA-xxx-C-1.md");if(!e.ok)throw Error("Failed to fetch C-1 variant");let t=await e.text(),a=await (0,v.V)().use(N.A).process(t);s.push(a.toString())}if("B"===i){let e=await fetch("/licenses/AILA-xxx-B.md");if(!e.ok)throw Error("Failed to fetch B license");let t=await e.text(),a=await (0,v.V)().use(N.A).process(t);s.push(a.toString())}return s.join("\n\n")},onSuccess:e=>{F(e),c.oR.success("License generated successfully")},onError:e=>{console.error("Failed to generate license:",e),c.oR.error("Failed to generate license")}}),B=()=>{if(!e&&!T)return"";if(L)return"AILA-999-C";let s="".concat(t).concat(w).concat(k);if(T)return"AILA-".concat(s,"-B");let a="AILA-".concat(s,"-").concat(e);return"C"===e&&R&&(a+="-1"),a},E=async()=>{let e=B();await navigator.clipboard.writeText(S||e),c.oR.success("License copied to clipboard")},P=e=>s=>{e(s),F("")},M=async e=>{let s=B(),t="md"===e?"text/markdown":"text/html",a="md"===e?"md":"html",r=new Blob([S||s],{type:t}),n=URL.createObjectURL(r),i=document.createElement("a");i.href=n,i.download="".concat(s.toLowerCase(),".").concat(a),document.body.appendChild(i),i.click(),document.body.removeChild(i),URL.revokeObjectURL(n),c.oR.success("License downloaded as ".concat(e.toUpperCase()))};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(c.l$,{}),(0,a.jsxs)("main",{className:"container mx-auto space-y-8 p-4",children:[(0,a.jsx)("section",{className:"space-y-4",children:(0,a.jsx)("div",{className:"flex flex-col gap-4 text-lg text-muted-foreground",children:(0,a.jsxs)("div",{className:"flex flex-col md:flex-row md:gap-4",children:[(0,a.jsxs)("div",{className:"flex-1",children:[(0,a.jsxs)("div",{className:"p-4",children:[(0,a.jsx)("h2",{className:"pb-2 text-center text-2xl font-bold",children:"What is AILA ?"}),(0,a.jsxs)("p",{className:"text-justify",children:["The ",(0,a.jsx)("strong",{children:"AI Licence Agreement (AILA)"})," is designed to bring clarity and transparency to the world of AI and content creation."]}),(0,a.jsx)("p",{className:"text-justify",children:"Whether you're a content creator, a researcher, or an AI model developer, AILA provides a simple way to define and communicate the terms of use for AI-related resources."})]}),(0,a.jsxs)("div",{className:"p-4",children:[(0,a.jsx)("h2",{className:"pb-2 text-center text-2xl font-bold",children:"What Makes AILA Unique ?"}),(0,a.jsxs)("p",{className:"text-justify",children:["AILA uses a ",(0,a.jsx)("strong",{children:"bitmask system"})," to clearly outline the openness and permissions of a licence."]}),(0,a.jsx)("p",{className:"text-justify",children:'By breaking down permissions into intuitive "bits", AILA ensures that everyone knows exactly what is allowed—and under what conditions.'})]}),(0,a.jsxs)("div",{className:"p-4",children:[(0,a.jsx)("h2",{className:"pb-2 text-center text-2xl font-bold",children:"Why AILA Matters"}),(0,a.jsx)("p",{className:"text-justify",children:"AILA bridges the gap between human understanding and machine readability, ensuring that AI development respects the rights of content creators while fostering innovation."}),(0,a.jsx)("p",{children:"Whether you're protecting your creative work or building the next generation of AI models, AILA provides the clarity and flexibility you need."}),(0,a.jsx)("p",{className:"text-justify",children:"Join us in shaping a future where AI and creativity thrive together, responsibly and transparently."})]})]}),(0,a.jsxs)("div",{className:"flex-1",children:[(0,a.jsx)("h2",{className:"pb-2 pt-4 text-center text-2xl font-bold",children:"The AILA Bits"}),(0,a.jsx)("p",{className:"mb-4",children:"Each category uses the same bit values to indicate availability:"}),(0,a.jsxs)(u,{children:[(0,a.jsx)(x,{children:(0,a.jsxs)(g,{children:[(0,a.jsx)(b,{className:"w-[100px]",children:"Bit"}),(0,a.jsx)(b,{children:"Meaning"})]})}),(0,a.jsxs)(p,{children:[(0,a.jsxs)(g,{children:[(0,a.jsx)(j,{className:"font-mono",children:"0"}),(0,a.jsx)(j,{children:"Unavailable"})]}),(0,a.jsxs)(g,{children:[(0,a.jsx)(j,{className:"font-mono",children:"1"}),(0,a.jsx)(j,{children:"Available for personal use*"})]}),(0,a.jsxs)(g,{children:[(0,a.jsx)(j,{className:"font-mono",children:"2"}),(0,a.jsx)(j,{children:"Available for research and academic use"})]}),(0,a.jsxs)(g,{children:[(0,a.jsx)(j,{className:"font-mono",children:"4"}),(0,a.jsx)(j,{children:"Available for commercial use"})]})]})]}),(0,a.jsx)("p",{className:"mt-4 text-sm text-muted-foreground",children:'* For Training Data, bit 1 means "Available if open source or public" instead of personal use'}),(0,a.jsx)("p",{className:"mb-2 mt-6",children:"These bits apply to three categories:"}),(0,a.jsxs)("ul",{className:"list-disc space-y-2 pl-6",children:[(0,a.jsxs)("li",{children:[(0,a.jsx)("strong",{children:"Training Weight Availability"}),": Access to the model's training weights"]}),(0,a.jsxs)("li",{children:[(0,a.jsx)("strong",{children:"Trained Model Availability"}),": Access to the trained model itself"]}),(0,a.jsxs)("li",{children:[(0,a.jsx)("strong",{children:"Training Data Availability"}),": Access to the data used for training"]})]}),(0,a.jsx)("p",{className:"mt-4",children:"Bits can be combined (e.g., 3 = personal + research, 7 = all uses) to form a clear, machine-readable license."})]})]})})}),(0,a.jsxs)("section",{className:"space-y-4",children:[(0,a.jsx)("h2",{id:"license-generator",className:"text-center text-4xl font-bold",children:"AILA License Generator"}),(0,a.jsxs)("div",{className:"flex justify-center gap-4",children:[(0,a.jsx)(n.$,{variant:"C"===e?"default":"outline",onClick:()=>s("C"),disabled:T,children:"I create content"}),(0,a.jsx)(n.$,{variant:"F"===e?"default":"outline",onClick:()=>s("F"),disabled:T,children:"I train models"})]}),("C"===e||T)&&(0,a.jsx)("div",{className:"space-y-4",children:(0,a.jsx)("div",{className:"flex justify-center",children:(0,a.jsxs)("div",{className:"w-fit space-y-4",children:[(0,a.jsxs)("div",{className:"flex items-center space-x-2",children:[(0,a.jsx)(i.d,{checked:T,onCheckedChange:e=>{z(e),e&&(I(!1),_(!1))}}),(0,a.jsx)("span",{children:"Content was created with the help of an AI model."})]}),!T&&(0,a.jsxs)("div",{className:"flex items-center space-x-2",children:[(0,a.jsx)(i.d,{checked:L,onCheckedChange:I}),(0,a.jsx)("span",{children:"No AI usage allowed (Use AILA-999-C)"})]}),!L&&!T&&(0,a.jsxs)("div",{className:"flex items-center space-x-2",children:[(0,a.jsx)(i.d,{checked:R,onCheckedChange:_}),(0,a.jsx)("span",{children:"Allow case-by-case exceptions (C-1 variant)"})]})]})})}),!L&&(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("div",{className:"grid grid-cols-1 gap-6 lg:grid-cols-3",children:[(0,a.jsx)(r.g,{title:"Training Weight Availability",description:"Specify the availability of training weights : ",value:t,onChange:P(f),options:y}),(0,a.jsx)(r.g,{title:"Trained Model Availability",description:"Specify the availability of the trained model : ",value:w,onChange:P(A),options:y}),(0,a.jsx)(r.g,{title:"Training Data Availability",description:"Specify the availability of training data : ",value:k,onChange:P(C),options:y})]})}),(0,a.jsx)("div",{className:"space-y-4 rounded-lg p-4",children:(0,a.jsx)("div",{className:"flex justify-center",children:(0,a.jsx)(n.$,{size:"lg",onClick:()=>{let e=B();U.mutate(e)},className:"w-full max-w-md",disabled:U.isPending||!e&&!T,children:U.isPending?"Generating...":"Generate License"})})}),(0,a.jsxs)("div",{className:"space-y-4 rounded-lg bg-muted p-4",children:[(0,a.jsxs)("div",{className:"flex items-center justify-between",children:[(0,a.jsx)("h3",{className:"font-semibold",children:"Current License:"}),(0,a.jsxs)("div",{className:"flex gap-2",children:[(0,a.jsxs)(n.$,{variant:"outline",size:"sm",onClick:E,children:[(0,a.jsx)(o.A,{className:"mr-2 h-4 w-4"}),"Copy"]}),(0,a.jsxs)(h.rI,{children:[(0,a.jsx)(h.ty,{asChild:!0,children:(0,a.jsxs)(n.$,{variant:"outline",size:"sm",children:[(0,a.jsx)(d.A,{className:"mr-2 h-4 w-4"}),"Download"]})}),(0,a.jsxs)(h.SQ,{children:[(0,a.jsx)(h._2,{onClick:()=>M("md"),children:"As Markdown"}),(0,a.jsx)(h._2,{onClick:()=>M("html"),children:"As HTML"})]})]})]})]}),(0,a.jsx)("pre",{className:"rounded border bg-background p-4 font-mono",children:B()}),S&&(0,a.jsx)("div",{className:"prose dark:prose-invert mt-4 max-w-none",children:(0,a.jsx)("div",{dangerouslySetInnerHTML:{__html:S}})})]})]})]})]})}y[0].description="Available if open source or public"},7871:(e,s,t)=>{"use strict";t.d(s,{g:()=>h});var a=t(5155),r=t(488),n=t(6835),i=t(2115),l=t(2098),o=t(1567);let d=l.bL,c=l.l9,m=i.forwardRef((e,s)=>{let{className:t,align:r="center",sideOffset:n=4,...i}=e;return(0,a.jsx)(l.UC,{ref:s,align:r,sideOffset:n,className:(0,o.cn)("z-50 w-64 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",t),...i})});function h(e){let{title:s,description:t,value:i,onChange:l,options:o}=e,h=(e,s)=>{s?l(i|e):l(i&~e)};return(0,a.jsxs)("div",{className:"space-y-4 rounded-lg border bg-card p-4",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("h3",{className:"text-lg font-semibold",children:s}),(0,a.jsxs)("p",{className:"text-sm text-muted-foreground",children:[t," ",i]}),(0,a.jsx)("p",{className:"ml-2 font-mono text-sm text-muted-foreground",children:function(e){if(0===e)return"(No restrictions)";let s=[];return 1&e&&s.push("Personal"),2&e&&s.push("Research"),4&e&&s.push("Commercial"),"(".concat(s.join(" + "),")")}(i)})]}),(0,a.jsx)("div",{className:"space-y-2",children:o.map(e=>(0,a.jsxs)("div",{className:"flex items-center justify-between",children:[(0,a.jsxs)("div",{className:"flex items-center gap-1.5",children:[(0,a.jsx)("span",{className:"text-sm",children:e.label}),(0,a.jsxs)(d,{children:[(0,a.jsx)(c,{children:(0,a.jsx)(n.A,{className:"h-4 w-4 cursor-help text-muted-foreground hover:text-foreground"})}),(0,a.jsx)(m,{side:"right",align:"start",className:"w-80",children:(0,a.jsxs)("div",{className:"space-y-2",children:[(0,a.jsx)("p",{className:"text-sm",children:e.description}),(0,a.jsxs)("p",{className:"text-xs text-muted-foreground",children:["Bit value:"," ",(0,a.jsx)("span",{className:"font-mono",children:e.value})]})]})})]})]}),(0,a.jsx)(r.d,{checked:(i&e.value)!=0,onCheckedChange:s=>h(e.value,s)})]},e.value))})]})}m.displayName=l.UC.displayName},3312:(e,s,t)=>{"use strict";t.d(s,{$:()=>d});var a=t(5155),r=t(2115),n=t(2317),i=t(1027),l=t(1567);let o=(0,i.F)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),d=r.forwardRef((e,s)=>{let{className:t,variant:r,size:i,asChild:d=!1,...c}=e,m=d?n.DX:"button";return(0,a.jsx)(m,{className:(0,l.cn)(o({variant:r,size:i,className:t})),ref:s,...c})});d.displayName="Button"},7485:(e,s,t)=>{"use strict";t.d(s,{SQ:()=>h,_2:()=>f,rI:()=>c,ty:()=>m});var a=t(5155),r=t(2115),n=t(3177),i=t(6967),l=t(8867),o=t(3565),d=t(1567);let c=n.bL,m=n.l9;n.YJ,n.ZL,n.Pb,n.z6,r.forwardRef((e,s)=>{let{className:t,inset:r,children:l,...o}=e;return(0,a.jsxs)(n.ZP,{ref:s,className:(0,d.cn)("flex cursor-default gap-2 select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",r&&"pl-8",t),...o,children:[l,(0,a.jsx)(i.A,{className:"ml-auto"})]})}).displayName=n.ZP.displayName,r.forwardRef((e,s)=>{let{className:t,...r}=e;return(0,a.jsx)(n.G5,{ref:s,className:(0,d.cn)("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",t),...r})}).displayName=n.G5.displayName;let h=r.forwardRef((e,s)=>{let{className:t,sideOffset:r=4,...i}=e;return(0,a.jsx)(n.ZL,{children:(0,a.jsx)(n.UC,{ref:s,sideOffset:r,className:(0,d.cn)("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",t),...i})})});h.displayName=n.UC.displayName;let f=r.forwardRef((e,s)=>{let{className:t,inset:r,...i}=e;return(0,a.jsx)(n.q7,{ref:s,className:(0,d.cn)("relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",r&&"pl-8",t),...i})});f.displayName=n.q7.displayName,r.forwardRef((e,s)=>{let{className:t,children:r,checked:i,...o}=e;return(0,a.jsxs)(n.H_,{ref:s,className:(0,d.cn)("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",t),checked:i,...o,children:[(0,a.jsx)("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:(0,a.jsx)(n.VF,{children:(0,a.jsx)(l.A,{className:"h-4 w-4"})})}),r]})}).displayName=n.H_.displayName,r.forwardRef((e,s)=>{let{className:t,children:r,...i}=e;return(0,a.jsxs)(n.hN,{ref:s,className:(0,d.cn)("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",t),...i,children:[(0,a.jsx)("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:(0,a.jsx)(n.VF,{children:(0,a.jsx)(o.A,{className:"h-2 w-2 fill-current"})})}),r]})}).displayName=n.hN.displayName,r.forwardRef((e,s)=>{let{className:t,inset:r,...i}=e;return(0,a.jsx)(n.JU,{ref:s,className:(0,d.cn)("px-2 py-1.5 text-sm font-semibold",r&&"pl-8",t),...i})}).displayName=n.JU.displayName,r.forwardRef((e,s)=>{let{className:t,...r}=e;return(0,a.jsx)(n.wv,{ref:s,className:(0,d.cn)("-mx-1 my-1 h-px bg-muted",t),...r})}).displayName=n.wv.displayName},488:(e,s,t)=>{"use strict";t.d(s,{d:()=>l});var a=t(5155),r=t(2115),n=t(2413),i=t(1567);let l=r.forwardRef((e,s)=>{let{className:t,...r}=e;return(0,a.jsx)(n.bL,{className:(0,i.cn)("peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",t),...r,ref:s,children:(0,a.jsx)(n.zi,{className:(0,i.cn)("pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0")})})});l.displayName=n.bL.displayName},1567:(e,s,t)=>{"use strict";t.d(s,{cn:()=>n});var a=t(3463),r=t(9795);function n(){for(var e=arguments.length,s=Array(e),t=0;t<e;t++)s[t]=arguments[t];return(0,r.QP)((0,a.$)(s))}}},e=>{var s=s=>e(e.s=s);e.O(0,[222,962,437,441,517,358],()=>s(9171)),_N_E=e.O()}]);