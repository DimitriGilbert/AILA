(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[766],{617:(e,t,a)=>{Promise.resolve().then(a.bind(a,4212))},4212:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>y});var s=a(5155),r=a(8173),i=a.n(r);let n=["C","F","B"],l=[0,1,2,3,4,5,6,7];function o(e){let[t,a,s,r,i]=e.match(/AILA-(\d)(\d)(\d)-([CBF])/)||[];switch(i){case"C":return"Creator License";case"F":return"Facteur License";case"B":return"Built with AI License";default:return e}}function c(e){let[t,a,s,r,i]=e.match(/AILA-(\d)(\d)(\d)-([CBF])/)||[];switch(i){case"C":return"Specifies how this content can be used for AI training.";case"F":return"Defines the availability of model weights, trained model, and training data.";case"B":return"Content created using a model compliant with AILA-".concat(a).concat(s).concat(r,"-F.");default:return"AILA License"}}var d=a(7871),u=a(4267),f=a(3312),m=a(8369);let h=m.bL,p=m.R6,g=m.Ke;var b=a(2115);let x=[{value:1,label:"Personal Use",description:"Available for personal use"},{value:2,label:"Research & Academic",description:"Available for research and academic purposes"},{value:4,label:"Commercial Use",description:"Available for commercial use"}],v=[{value:1,label:"Open Source/Public",description:"Available if open source or public"},{value:2,label:"Research & Academic",description:"Available for research and academic purposes"},{value:4,label:"Commercial Use",description:"Available for commercial use"}],j=function(){let e=e=>{let t=[];for(let a of l)for(let s of l)for(let r of l){let i="AILA-".concat(a).concat(s).concat(r,"-").concat(e);t.push({code:i,title:o(i),description:c(i)})}return t};return[...n.flatMap(e),...e("C").map(e=>({code:"".concat(e.code,"-1"),title:"".concat(o(e.code)," with exceptions"),description:"".concat(c(e.code)," with case-by-case exceptions")})),{code:"AILA-999-C",title:"No AI Usage License",description:"Content explicitly not available for AI training."}]}();function y(){let[e,t]=(0,b.useState)(!1),[a,r]=(0,b.useState)(null),[n,l]=(0,b.useState)(0),[o,c]=(0,b.useState)(0),[m,y]=(0,b.useState)(0),C=j.filter(e=>{if(a){let t=e.code.includes("-".concat(a)),s="C"===a&&e.code.includes("-C-1");if(!t&&!s)return!1}if("AILA-999-C"===e.code)return!a||"C"===a;let t=e.code.match(/AILA-(\d)(\d)(\d)/);if(!t)return!1;let s=parseInt(t[1]),r=parseInt(t[2]),i=parseInt(t[3]),l=0===o||(r&o)===o,c=0===m||(i&m)===m;return(0===n||(s&n)===n)&&l&&c});return(0,s.jsxs)("section",{className:"space-y-4",children:[(0,s.jsxs)(h,{open:e,onOpenChange:t,children:[(0,s.jsx)("div",{className:"flex items-center justify-end bg-muted p-4",children:(0,s.jsx)(p,{asChild:!0,children:(0,s.jsxs)("h2",{className:"text-xl font-semibold",children:["Filter Licenses"," ",(0,s.jsxs)(f.$,{variant:"outline",size:"icon",children:[(0,s.jsx)(u.A,{className:"h-4 w-4 transition-transform ".concat(e?"rotate-180":"")}),(0,s.jsx)("span",{className:"sr-only",children:"Toggle filters"})]})]})})}),(0,s.jsx)(g,{children:(0,s.jsxs)("div",{className:"grid grid-cols-1 gap-6 bg-muted p-4 lg:grid-cols-3",children:[(0,s.jsx)(f.$,{variant:"C"===a?"default":"outline",onClick:()=>r("C"===a?null:"C"),children:"Creator Content License (C)"}),(0,s.jsx)(f.$,{variant:"B"===a?"default":"outline",onClick:()=>r("B"===a?null:"B"),children:"Creator Built With License (B)"}),(0,s.jsx)(f.$,{variant:"F"===a?"default":"outline",onClick:()=>r("F"===a?null:"F"),children:"Facteur License (F)"}),(0,s.jsx)(d.g,{title:"Training Weight Availability",description:"Filter by weight availability",value:n,onChange:l,options:x}),(0,s.jsx)(d.g,{title:"Trained Model Availability",description:"Filter by model availability",value:o,onChange:c,options:x}),(0,s.jsx)(d.g,{title:"Training Data Availability",description:"Filter by data availability",value:m,onChange:y,options:v})]})})]}),(0,s.jsx)("div",{className:"flex flex-col gap-4 md:flex-row md:flex-wrap",children:C.map(e=>(0,s.jsxs)(i(),{href:"/licenses-list/".concat(e.code.toLowerCase()),className:"block rounded-lg border p-6 transition-colors hover:border-primary md:w-[calc(50%-0.5rem)] lg:w-[calc(33.33%-0.67rem)]",children:[(0,s.jsx)("h2",{className:"mb-2 text-xl font-semibold",children:e.code}),(0,s.jsx)("h3",{className:"mb-2 text-lg text-muted-foreground",children:e.title}),(0,s.jsx)("p",{className:"text-sm",children:e.description})]},e.code))})]})}},7871:(e,t,a)=>{"use strict";a.d(t,{g:()=>f});var s=a(5155),r=a(488),i=a(6835),n=a(2115),l=a(2098),o=a(1567);let c=l.bL,d=l.l9,u=n.forwardRef((e,t)=>{let{className:a,align:r="center",sideOffset:i=4,...n}=e;return(0,s.jsx)(l.UC,{ref:t,align:r,sideOffset:i,className:(0,o.cn)("z-50 w-64 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",a),...n})});function f(e){let{title:t,description:a,value:n,onChange:l,options:o}=e,f=(e,t)=>{t?l(n|e):l(n&~e)};return(0,s.jsxs)("div",{className:"space-y-4 rounded-lg border-2 border-primary/20 bg-card p-4",children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("h3",{className:"text-lg font-semibold",children:t}),(0,s.jsxs)("p",{className:"text-sm text-muted-foreground",children:[a," ",n]}),(0,s.jsx)("p",{className:"ml-2 font-mono text-sm text-muted-foreground",children:function(e){if(0===e)return"(No restrictions)";let t=[];return 1&e&&t.push("Personal"),2&e&&t.push("Research"),4&e&&t.push("Commercial"),"(".concat(t.join(" + "),")")}(n)})]}),(0,s.jsx)("div",{className:"space-y-2",children:o.map(e=>(0,s.jsxs)("div",{className:"flex items-center justify-between",children:[(0,s.jsxs)("div",{className:"flex items-center gap-1.5",children:[(0,s.jsx)("span",{className:"text-sm",children:e.label}),(0,s.jsxs)(c,{children:[(0,s.jsx)(d,{children:(0,s.jsx)(i.A,{className:"h-4 w-4 cursor-help text-muted-foreground hover:text-foreground"})}),(0,s.jsx)(u,{side:"right",align:"start",className:"w-80",children:(0,s.jsxs)("div",{className:"space-y-2",children:[(0,s.jsx)("p",{className:"text-sm",children:e.description}),(0,s.jsxs)("p",{className:"text-xs text-muted-foreground",children:["Bit value:"," ",(0,s.jsx)("span",{className:"font-mono",children:e.value})]})]})})]})]}),(0,s.jsx)(r.d,{checked:(n&e.value)!=0,onCheckedChange:t=>f(e.value,t)})]},e.value))})]})}u.displayName=l.UC.displayName},3312:(e,t,a)=>{"use strict";a.d(t,{$:()=>c});var s=a(5155),r=a(2115),i=a(2317),n=a(1027),l=a(1567);let o=(0,n.F)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),c=r.forwardRef((e,t)=>{let{className:a,variant:r,size:n,asChild:c=!1,...d}=e,u=c?i.DX:"button";return(0,s.jsx)(u,{className:(0,l.cn)(o({variant:r,size:n,className:a})),ref:t,...d})});c.displayName="Button"},488:(e,t,a)=>{"use strict";a.d(t,{d:()=>l});var s=a(5155),r=a(2115),i=a(2413),n=a(1567);let l=r.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,s.jsx)(i.bL,{className:(0,n.cn)("peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",a),...r,ref:t,children:(0,s.jsx)(i.zi,{className:(0,n.cn)("pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0")})})});l.displayName=i.bL.displayName},1567:(e,t,a)=>{"use strict";a.d(t,{cn:()=>i});var s=a(3463),r=a(9795);function i(){for(var e=arguments.length,t=Array(e),a=0;a<e;a++)t[a]=arguments[a];return(0,r.QP)((0,s.$)(t))}}},e=>{var t=t=>e(e.s=t);e.O(0,[173,222,188,441,517,358],()=>t(617)),_N_E=e.O()}]);