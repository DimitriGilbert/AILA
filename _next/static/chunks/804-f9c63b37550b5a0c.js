(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[804],{1719:(e,t,r)=>{"use strict";r.d(t,{A:()=>n});let n=(0,r(7401).A)("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]])},2104:(e,t,r)=>{"use strict";r.d(t,{A:()=>n});let n=(0,r(7401).A)("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]])},7725:(e,t,r)=>{"use strict";r.d(t,{A:()=>n});let n=(0,r(7401).A)("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]])},9412:e=>{e.exports={style:{fontFamily:"'GeistSans', 'GeistSans Fallback'"},className:"__className_daf08a",variable:"__variable_daf08a"}},7896:(e,t,r)=>{"use strict";r.d(t,{UC:()=>eb,C1:()=>eg,q7:()=>em,N_:()=>ey,B8:()=>ep,bL:()=>ef,l9:()=>ev,LM:()=>ew});var n=r(2115),i=r(7650),s=r(8166),a=r(3610),o=r(3360),u=r(1488),l=r(8068),c=r(4256),h=r(7028),d=r(7668),f=r(9741),p=r(9674),m=r(858),v=r(6611),y=r(1524),g=r(5155),b=n.forwardRef((e,t)=>(0,g.jsx)(o.sG.span,{...e,ref:t,style:{position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal",...e.style}}));b.displayName="VisuallyHidden";var w="NavigationMenu",[C,E,S]=(0,f.N)(w),[x,M,R]=(0,f.N)(w),[O,P]=(0,s.A)(w,[S,R]),[A,q]=O(w),[T,D]=O(w),j=n.forwardRef((e,t)=>{let{__scopeNavigationMenu:r,value:i,onValueChange:s,defaultValue:a,delayDuration:h=200,skipDelayDuration:d=300,orientation:f="horizontal",dir:p,...m}=e,[v,y]=n.useState(null),b=(0,l.s)(t,e=>y(e)),w=(0,c.jH)(p),C=n.useRef(0),E=n.useRef(0),S=n.useRef(0),[x,M]=n.useState(!0),[R="",O]=(0,u.i)({prop:i,onChange:e=>{let t=d>0;""!==e?(window.clearTimeout(S.current),t&&M(!1)):(window.clearTimeout(S.current),S.current=window.setTimeout(()=>M(!0),d)),null==s||s(e)},defaultProp:a}),P=n.useCallback(()=>{window.clearTimeout(E.current),E.current=window.setTimeout(()=>O(""),150)},[O]),A=n.useCallback(e=>{window.clearTimeout(E.current),O(e)},[O]),q=n.useCallback(e=>{R===e?window.clearTimeout(E.current):C.current=window.setTimeout(()=>{window.clearTimeout(E.current),O(e)},h)},[R,O,h]);return n.useEffect(()=>()=>{window.clearTimeout(C.current),window.clearTimeout(E.current),window.clearTimeout(S.current)},[]),(0,g.jsx)(F,{scope:r,isRootMenu:!0,value:R,dir:w,orientation:f,rootNavigationMenu:v,onTriggerEnter:e=>{window.clearTimeout(C.current),x?q(e):A(e)},onTriggerLeave:()=>{window.clearTimeout(C.current),P()},onContentEnter:()=>window.clearTimeout(E.current),onContentLeave:P,onItemSelect:e=>{O(t=>t===e?"":e)},onItemDismiss:()=>O(""),children:(0,g.jsx)(o.sG.nav,{"aria-label":"Main","data-orientation":f,dir:w,...m,ref:b})})});j.displayName=w;var k="NavigationMenuSub";n.forwardRef((e,t)=>{let{__scopeNavigationMenu:r,value:n,onValueChange:i,defaultValue:s,orientation:a="horizontal",...l}=e,c=q(k,r),[h="",d]=(0,u.i)({prop:n,onChange:i,defaultProp:s});return(0,g.jsx)(F,{scope:r,isRootMenu:!1,value:h,dir:c.dir,orientation:a,rootNavigationMenu:c.rootNavigationMenu,onTriggerEnter:e=>d(e),onItemSelect:e=>d(e),onItemDismiss:()=>d(""),children:(0,g.jsx)(o.sG.div,{"data-orientation":a,...l,ref:t})})}).displayName=k;var F=e=>{let{scope:t,isRootMenu:r,rootNavigationMenu:i,dir:s,orientation:a,children:o,value:u,onItemSelect:l,onItemDismiss:c,onTriggerEnter:h,onTriggerLeave:f,onContentEnter:p,onContentLeave:v}=e,[b,w]=n.useState(null),[E,S]=n.useState(new Map),[x,M]=n.useState(null);return(0,g.jsx)(A,{scope:t,isRootMenu:r,rootNavigationMenu:i,value:u,previousValue:(0,m.Z)(u),baseId:(0,d.B)(),dir:s,orientation:a,viewport:b,onViewportChange:w,indicatorTrack:x,onIndicatorTrackChange:M,onTriggerEnter:(0,y.c)(h),onTriggerLeave:(0,y.c)(f),onContentEnter:(0,y.c)(p),onContentLeave:(0,y.c)(v),onItemSelect:(0,y.c)(l),onItemDismiss:(0,y.c)(c),onViewportContentChange:n.useCallback((e,t)=>{S(r=>(r.set(e,t),new Map(r)))},[]),onViewportContentRemove:n.useCallback(e=>{S(t=>t.has(e)?(t.delete(e),new Map(t)):t)},[]),children:(0,g.jsx)(C.Provider,{scope:t,children:(0,g.jsx)(T,{scope:t,items:E,children:o})})})},N="NavigationMenuList",Q=n.forwardRef((e,t)=>{let{__scopeNavigationMenu:r,...n}=e,i=q(N,r),s=(0,g.jsx)(o.sG.ul,{"data-orientation":i.orientation,...n,ref:t});return(0,g.jsx)(o.sG.div,{style:{position:"relative"},ref:i.onIndicatorTrackChange,children:(0,g.jsx)(C.Slot,{scope:r,children:i.isRootMenu?(0,g.jsx)(en,{asChild:!0,children:s}):s})})});Q.displayName=N;var I="NavigationMenuItem",[_,L]=O(I),K=n.forwardRef((e,t)=>{let{__scopeNavigationMenu:r,value:i,...s}=e,a=(0,d.B)(),u=n.useRef(null),l=n.useRef(null),c=n.useRef(null),h=n.useRef(()=>{}),f=n.useRef(!1),p=n.useCallback(function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"start";if(u.current){h.current();let t=ea(u.current);t.length&&eo("start"===e?t:t.reverse())}},[]),m=n.useCallback(()=>{if(u.current){let e=ea(u.current);e.length&&(h.current=function(e){return e.forEach(e=>{e.dataset.tabindex=e.getAttribute("tabindex")||"",e.setAttribute("tabindex","-1")}),()=>{e.forEach(e=>{let t=e.dataset.tabindex;e.setAttribute("tabindex",t)})}}(e))}},[]);return(0,g.jsx)(_,{scope:r,value:i||a||"LEGACY_REACT_AUTO_VALUE",triggerRef:l,contentRef:u,focusProxyRef:c,wasEscapeCloseRef:f,onEntryKeyDown:p,onFocusProxyEnter:p,onRootContentClose:m,onContentFocusOutside:m,children:(0,g.jsx)(o.sG.li,{...s,ref:t})})});K.displayName=I;var U="NavigationMenuTrigger",G=n.forwardRef((e,t)=>{let{__scopeNavigationMenu:r,disabled:i,...s}=e,u=q(U,e.__scopeNavigationMenu),c=L(U,e.__scopeNavigationMenu),h=n.useRef(null),d=(0,l.s)(h,c.triggerRef,t),f=ec(u.baseId,c.value),p=eh(u.baseId,c.value),m=n.useRef(!1),v=n.useRef(!1),y=c.value===u.value;return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(C.ItemSlot,{scope:r,value:c.value,children:(0,g.jsx)(es,{asChild:!0,children:(0,g.jsx)(o.sG.button,{id:f,disabled:i,"data-disabled":i?"":void 0,"data-state":el(y),"aria-expanded":y,"aria-controls":p,...s,ref:d,onPointerEnter:(0,a.m)(e.onPointerEnter,()=>{v.current=!1,c.wasEscapeCloseRef.current=!1}),onPointerMove:(0,a.m)(e.onPointerMove,ed(()=>{i||v.current||c.wasEscapeCloseRef.current||m.current||(u.onTriggerEnter(c.value),m.current=!0)})),onPointerLeave:(0,a.m)(e.onPointerLeave,ed(()=>{i||(u.onTriggerLeave(),m.current=!1)})),onClick:(0,a.m)(e.onClick,()=>{u.onItemSelect(c.value),v.current=y}),onKeyDown:(0,a.m)(e.onKeyDown,e=>{let t={horizontal:"ArrowDown",vertical:"rtl"===u.dir?"ArrowLeft":"ArrowRight"}[u.orientation];y&&e.key===t&&(c.onEntryKeyDown(),e.preventDefault())})})})}),y&&(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(b,{"aria-hidden":!0,tabIndex:0,ref:c.focusProxyRef,onFocus:e=>{let t=c.contentRef.current,r=e.relatedTarget,n=r===h.current,i=null==t?void 0:t.contains(r);(n||!i)&&c.onFocusProxyEnter(n?"start":"end")}}),u.viewport&&(0,g.jsx)("span",{"aria-owns":p})]})]})});G.displayName=U;var H="navigationMenu.linkSelect",V=n.forwardRef((e,t)=>{let{__scopeNavigationMenu:r,active:n,onSelect:i,...s}=e;return(0,g.jsx)(es,{asChild:!0,children:(0,g.jsx)(o.sG.a,{"data-active":n?"":void 0,"aria-current":n?"page":void 0,...s,ref:t,onClick:(0,a.m)(e.onClick,e=>{let t=e.target,r=new CustomEvent(H,{bubbles:!0,cancelable:!0});if(t.addEventListener(H,e=>null==i?void 0:i(e),{once:!0}),(0,o.hO)(t,r),!r.defaultPrevented&&!e.metaKey){let e=new CustomEvent(Y,{bubbles:!0,cancelable:!0});(0,o.hO)(t,e)}},{checkForDefaultPrevented:!1})})})});V.displayName="NavigationMenuLink";var z="NavigationMenuIndicator",W=n.forwardRef((e,t)=>{let{forceMount:r,...n}=e,s=q(z,e.__scopeNavigationMenu),a=!!s.value;return s.indicatorTrack?i.createPortal((0,g.jsx)(h.C,{present:r||a,children:(0,g.jsx)(Z,{...n,ref:t})}),s.indicatorTrack):null});W.displayName=z;var Z=n.forwardRef((e,t)=>{let{__scopeNavigationMenu:r,...i}=e,s=q(z,r),a=E(r),[u,l]=n.useState(null),[c,h]=n.useState(null),d="horizontal"===s.orientation,f=!!s.value;n.useEffect(()=>{var e;let t=null===(e=a().find(e=>e.value===s.value))||void 0===e?void 0:e.ref.current;t&&l(t)},[a,s.value]);let p=()=>{u&&h({size:d?u.offsetWidth:u.offsetHeight,offset:d?u.offsetLeft:u.offsetTop})};return eu(u,p),eu(s.indicatorTrack,p),c?(0,g.jsx)(o.sG.div,{"aria-hidden":!0,"data-state":f?"visible":"hidden","data-orientation":s.orientation,...i,ref:t,style:{position:"absolute",...d?{left:0,width:c.size+"px",transform:"translateX(".concat(c.offset,"px)")}:{top:0,height:c.size+"px",transform:"translateY(".concat(c.offset,"px)")},...i.style}}):null}),B="NavigationMenuContent",J=n.forwardRef((e,t)=>{let{forceMount:r,...n}=e,i=q(B,e.__scopeNavigationMenu),s=L(B,e.__scopeNavigationMenu),o=(0,l.s)(s.contentRef,t),u=s.value===i.value,c={value:s.value,triggerRef:s.triggerRef,focusProxyRef:s.focusProxyRef,wasEscapeCloseRef:s.wasEscapeCloseRef,onContentFocusOutside:s.onContentFocusOutside,onRootContentClose:s.onRootContentClose,...n};return i.viewport?(0,g.jsx)($,{forceMount:r,...c,ref:o}):(0,g.jsx)(h.C,{present:r||u,children:(0,g.jsx)(X,{"data-state":el(u),...c,ref:o,onPointerEnter:(0,a.m)(e.onPointerEnter,i.onContentEnter),onPointerLeave:(0,a.m)(e.onPointerLeave,ed(i.onContentLeave)),style:{pointerEvents:!u&&i.isRootMenu?"none":void 0,...c.style}})})});J.displayName=B;var $=n.forwardRef((e,t)=>{let{onViewportContentChange:r,onViewportContentRemove:n}=q(B,e.__scopeNavigationMenu);return(0,v.N)(()=>{r(e.value,{ref:t,...e})},[e,t,r]),(0,v.N)(()=>()=>n(e.value),[e.value,n]),null}),Y="navigationMenu.rootContentDismiss",X=n.forwardRef((e,t)=>{let{__scopeNavigationMenu:r,value:i,triggerRef:s,focusProxyRef:o,wasEscapeCloseRef:u,onRootContentClose:c,onContentFocusOutside:h,...d}=e,f=q(B,r),m=n.useRef(null),v=(0,l.s)(m,t),y=ec(f.baseId,i),b=eh(f.baseId,i),w=E(r),C=n.useRef(null),{onItemDismiss:S}=f;n.useEffect(()=>{let e=m.current;if(f.isRootMenu&&e){let t=()=>{var t;S(),c(),e.contains(document.activeElement)&&(null===(t=s.current)||void 0===t||t.focus())};return e.addEventListener(Y,t),()=>e.removeEventListener(Y,t)}},[f.isRootMenu,e.value,s,S,c]);let x=n.useMemo(()=>{let e=w().map(e=>e.value);"rtl"===f.dir&&e.reverse();let t=e.indexOf(f.value),r=e.indexOf(f.previousValue),n=i===f.value,s=r===e.indexOf(i);if(!n&&!s)return C.current;let a=(()=>{if(t!==r){if(n&&-1!==r)return t>r?"from-end":"from-start";if(s&&-1!==t)return t>r?"to-start":"to-end"}return null})();return C.current=a,a},[f.previousValue,f.value,f.dir,w,i]);return(0,g.jsx)(en,{asChild:!0,children:(0,g.jsx)(p.qW,{id:b,"aria-labelledby":y,"data-motion":x,"data-orientation":f.orientation,...d,ref:v,disableOutsidePointerEvents:!1,onDismiss:()=>{var e;let t=new Event(Y,{bubbles:!0,cancelable:!0});null===(e=m.current)||void 0===e||e.dispatchEvent(t)},onFocusOutside:(0,a.m)(e.onFocusOutside,e=>{var t;h();let r=e.target;(null===(t=f.rootNavigationMenu)||void 0===t?void 0:t.contains(r))&&e.preventDefault()}),onPointerDownOutside:(0,a.m)(e.onPointerDownOutside,e=>{var t;let r=e.target,n=w().some(e=>{var t;return null===(t=e.ref.current)||void 0===t?void 0:t.contains(r)}),i=f.isRootMenu&&(null===(t=f.viewport)||void 0===t?void 0:t.contains(r));(n||i||!f.isRootMenu)&&e.preventDefault()}),onKeyDown:(0,a.m)(e.onKeyDown,e=>{let t=e.altKey||e.ctrlKey||e.metaKey;if("Tab"===e.key&&!t){let t=ea(e.currentTarget),n=document.activeElement,i=t.findIndex(e=>e===n);if(eo(e.shiftKey?t.slice(0,i).reverse():t.slice(i+1,t.length)))e.preventDefault();else{var r;null===(r=o.current)||void 0===r||r.focus()}}}),onEscapeKeyDown:(0,a.m)(e.onEscapeKeyDown,e=>{u.current=!0})})})}),ee="NavigationMenuViewport",et=n.forwardRef((e,t)=>{let{forceMount:r,...n}=e,i=!!q(ee,e.__scopeNavigationMenu).value;return(0,g.jsx)(h.C,{present:r||i,children:(0,g.jsx)(er,{...n,ref:t})})});et.displayName=ee;var er=n.forwardRef((e,t)=>{let{__scopeNavigationMenu:r,children:i,...s}=e,u=q(ee,r),c=(0,l.s)(t,u.onViewportChange),d=D(B,e.__scopeNavigationMenu),[f,p]=n.useState(null),[m,v]=n.useState(null),y=f?(null==f?void 0:f.width)+"px":void 0,b=f?(null==f?void 0:f.height)+"px":void 0,w=!!u.value,C=w?u.value:u.previousValue;return eu(m,()=>{m&&p({width:m.offsetWidth,height:m.offsetHeight})}),(0,g.jsx)(o.sG.div,{"data-state":el(w),"data-orientation":u.orientation,...s,ref:c,style:{pointerEvents:!w&&u.isRootMenu?"none":void 0,"--radix-navigation-menu-viewport-width":y,"--radix-navigation-menu-viewport-height":b,...s.style},onPointerEnter:(0,a.m)(e.onPointerEnter,u.onContentEnter),onPointerLeave:(0,a.m)(e.onPointerLeave,ed(u.onContentLeave)),children:Array.from(d.items).map(e=>{let[t,{ref:r,forceMount:n,...i}]=e,s=C===t;return(0,g.jsx)(h.C,{present:n||s,children:(0,g.jsx)(X,{...i,ref:(0,l.t)(r,e=>{s&&e&&v(e)})})},t)})})}),en=n.forwardRef((e,t)=>{let{__scopeNavigationMenu:r,...n}=e,i=q("FocusGroup",r);return(0,g.jsx)(x.Provider,{scope:r,children:(0,g.jsx)(x.Slot,{scope:r,children:(0,g.jsx)(o.sG.div,{dir:i.dir,...n,ref:t})})})}),ei=["ArrowRight","ArrowLeft","ArrowUp","ArrowDown"],es=n.forwardRef((e,t)=>{let{__scopeNavigationMenu:r,...n}=e,i=M(r),s=q("FocusGroupItem",r);return(0,g.jsx)(x.ItemSlot,{scope:r,children:(0,g.jsx)(o.sG.button,{...n,ref:t,onKeyDown:(0,a.m)(e.onKeyDown,e=>{if(["Home","End",...ei].includes(e.key)){let t=i().map(e=>e.ref.current);if(["rtl"===s.dir?"ArrowRight":"ArrowLeft","ArrowUp","End"].includes(e.key)&&t.reverse(),ei.includes(e.key)){let r=t.indexOf(e.currentTarget);t=t.slice(r+1)}setTimeout(()=>eo(t)),e.preventDefault()}})})})});function ea(e){let t=[],r=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:e=>{let t="INPUT"===e.tagName&&"hidden"===e.type;return e.disabled||e.hidden||t?NodeFilter.FILTER_SKIP:e.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;r.nextNode();)t.push(r.currentNode);return t}function eo(e){let t=document.activeElement;return e.some(e=>e===t||(e.focus(),document.activeElement!==t))}function eu(e,t){let r=(0,y.c)(t);(0,v.N)(()=>{let t=0;if(e){let n=new ResizeObserver(()=>{cancelAnimationFrame(t),t=window.requestAnimationFrame(r)});return n.observe(e),()=>{window.cancelAnimationFrame(t),n.unobserve(e)}}},[e,r])}function el(e){return e?"open":"closed"}function ec(e,t){return"".concat(e,"-trigger-").concat(t)}function eh(e,t){return"".concat(e,"-content-").concat(t)}function ed(e){return t=>"mouse"===t.pointerType?e(t):void 0}var ef=j,ep=Q,em=K,ev=G,ey=V,eg=W,eb=J,ew=et},4939:(e,t,r)=>{"use strict";r.d(t,{E:()=>y});var n=r(4403),i=r(5586),s=r(5655),a=r(2955),o=class extends a.k{#e;#t;#r;#n;#i;#s;constructor(e){super(),this.#s=!1,this.#i=e.defaultOptions,this.setOptions(e.options),this.observers=[],this.#r=e.cache,this.queryKey=e.queryKey,this.queryHash=e.queryHash,this.#e=function(e){let t="function"==typeof e.initialData?e.initialData():e.initialData,r=void 0!==t,n=r?"function"==typeof e.initialDataUpdatedAt?e.initialDataUpdatedAt():e.initialDataUpdatedAt:0;return{data:t,dataUpdateCount:0,dataUpdatedAt:r?n??Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:r?"success":"pending",fetchStatus:"idle"}}(this.options),this.state=e.state??this.#e,this.scheduleGc()}get meta(){return this.options.meta}get promise(){return this.#n?.promise}setOptions(e){this.options={...this.#i,...e},this.updateGcTime(this.options.gcTime)}optionalRemove(){this.observers.length||"idle"!==this.state.fetchStatus||this.#r.remove(this)}setData(e,t){let r=(0,n.pl)(this.state.data,e,this.options);return this.#a({data:r,type:"success",dataUpdatedAt:t?.updatedAt,manual:t?.manual}),r}setState(e,t){this.#a({type:"setState",state:e,setStateOptions:t})}cancel(e){let t=this.#n?.promise;return this.#n?.cancel(e),t?t.then(n.lQ).catch(n.lQ):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}reset(){this.destroy(),this.setState(this.#e)}isActive(){return this.observers.some(e=>!1!==(0,n.Eh)(e.options.enabled,this))}isDisabled(){return this.getObserversCount()>0?!this.isActive():this.options.queryFn===n.hT||this.state.dataUpdateCount+this.state.errorUpdateCount===0}isStale(){return!!this.state.isInvalidated||(this.getObserversCount()>0?this.observers.some(e=>e.getCurrentResult().isStale):void 0===this.state.data)}isStaleByTime(e=0){return this.state.isInvalidated||void 0===this.state.data||!(0,n.j3)(this.state.dataUpdatedAt,e)}onFocus(){let e=this.observers.find(e=>e.shouldFetchOnWindowFocus());e?.refetch({cancelRefetch:!1}),this.#n?.continue()}onOnline(){let e=this.observers.find(e=>e.shouldFetchOnReconnect());e?.refetch({cancelRefetch:!1}),this.#n?.continue()}addObserver(e){this.observers.includes(e)||(this.observers.push(e),this.clearGcTimeout(),this.#r.notify({type:"observerAdded",query:this,observer:e}))}removeObserver(e){this.observers.includes(e)&&(this.observers=this.observers.filter(t=>t!==e),this.observers.length||(this.#n&&(this.#s?this.#n.cancel({revert:!0}):this.#n.cancelRetry()),this.scheduleGc()),this.#r.notify({type:"observerRemoved",query:this,observer:e}))}getObserversCount(){return this.observers.length}invalidate(){this.state.isInvalidated||this.#a({type:"invalidate"})}fetch(e,t){if("idle"!==this.state.fetchStatus){if(void 0!==this.state.data&&t?.cancelRefetch)this.cancel({silent:!0});else if(this.#n)return this.#n.continueRetry(),this.#n.promise}if(e&&this.setOptions(e),!this.options.queryFn){let e=this.observers.find(e=>e.options.queryFn);e&&this.setOptions(e.options)}let r=new AbortController,i=e=>{Object.defineProperty(e,"signal",{enumerable:!0,get:()=>(this.#s=!0,r.signal)})},a={fetchOptions:t,options:this.options,queryKey:this.queryKey,state:this.state,fetchFn:()=>{let e=(0,n.ZM)(this.options,t),r={queryKey:this.queryKey,meta:this.meta};return(i(r),this.#s=!1,this.options.persister)?this.options.persister(e,r,this):e(r)}};i(a),this.options.behavior?.onFetch(a,this),this.#t=this.state,("idle"===this.state.fetchStatus||this.state.fetchMeta!==a.fetchOptions?.meta)&&this.#a({type:"fetch",meta:a.fetchOptions?.meta});let o=e=>{(0,s.wm)(e)&&e.silent||this.#a({type:"error",error:e}),(0,s.wm)(e)||(this.#r.config.onError?.(e,this),this.#r.config.onSettled?.(this.state.data,e,this)),this.scheduleGc()};return this.#n=(0,s.II)({initialPromise:t?.initialPromise,fn:a.fetchFn,abort:r.abort.bind(r),onSuccess:e=>{if(void 0===e){o(Error(`${this.queryHash} data is undefined`));return}try{this.setData(e)}catch(e){o(e);return}this.#r.config.onSuccess?.(e,this),this.#r.config.onSettled?.(e,this.state.error,this),this.scheduleGc()},onError:o,onFail:(e,t)=>{this.#a({type:"failed",failureCount:e,error:t})},onPause:()=>{this.#a({type:"pause"})},onContinue:()=>{this.#a({type:"continue"})},retry:a.options.retry,retryDelay:a.options.retryDelay,networkMode:a.options.networkMode,canRun:()=>!0}),this.#n.start()}#a(e){this.state=(t=>{switch(e.type){case"failed":return{...t,fetchFailureCount:e.failureCount,fetchFailureReason:e.error};case"pause":return{...t,fetchStatus:"paused"};case"continue":return{...t,fetchStatus:"fetching"};case"fetch":var r,n;return{...t,...(r=t.data,n=this.options,{fetchFailureCount:0,fetchFailureReason:null,fetchStatus:(0,s.v_)(n.networkMode)?"fetching":"paused",...void 0===r&&{error:null,status:"pending"}}),fetchMeta:e.meta??null};case"success":return{...t,data:e.data,dataUpdateCount:t.dataUpdateCount+1,dataUpdatedAt:e.dataUpdatedAt??Date.now(),error:null,isInvalidated:!1,status:"success",...!e.manual&&{fetchStatus:"idle",fetchFailureCount:0,fetchFailureReason:null}};case"error":let i=e.error;if((0,s.wm)(i)&&i.revert&&this.#t)return{...this.#t,fetchStatus:"idle"};return{...t,error:i,errorUpdateCount:t.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:t.fetchFailureCount+1,fetchFailureReason:i,fetchStatus:"idle",status:"error"};case"invalidate":return{...t,isInvalidated:!0};case"setState":return{...t,...e.state}}})(this.state),i.j.batch(()=>{this.observers.forEach(e=>{e.onQueryUpdate()}),this.#r.notify({query:this,type:"updated",action:e})})}},u=r(9323),l=class extends u.Q{constructor(e={}){super(),this.config=e,this.#o=new Map}#o;build(e,t,r){let i=t.queryKey,s=t.queryHash??(0,n.F$)(i,t),a=this.get(s);return a||(a=new o({cache:this,queryKey:i,queryHash:s,options:e.defaultQueryOptions(t),state:r,defaultOptions:e.getQueryDefaults(i)}),this.add(a)),a}add(e){this.#o.has(e.queryHash)||(this.#o.set(e.queryHash,e),this.notify({type:"added",query:e}))}remove(e){let t=this.#o.get(e.queryHash);t&&(e.destroy(),t===e&&this.#o.delete(e.queryHash),this.notify({type:"removed",query:e}))}clear(){i.j.batch(()=>{this.getAll().forEach(e=>{this.remove(e)})})}get(e){return this.#o.get(e)}getAll(){return[...this.#o.values()]}find(e){let t={exact:!0,...e};return this.getAll().find(e=>(0,n.MK)(t,e))}findAll(e={}){let t=this.getAll();return Object.keys(e).length>0?t.filter(t=>(0,n.MK)(e,t)):t}notify(e){i.j.batch(()=>{this.listeners.forEach(t=>{t(e)})})}onFocus(){i.j.batch(()=>{this.getAll().forEach(e=>{e.onFocus()})})}onOnline(){i.j.batch(()=>{this.getAll().forEach(e=>{e.onOnline()})})}},c=r(1049),h=class extends u.Q{constructor(e={}){super(),this.config=e,this.#u=new Set,this.#l=new Map,this.#c=0}#u;#l;#c;build(e,t,r){let n=new c.s({mutationCache:this,mutationId:++this.#c,options:e.defaultMutationOptions(t),state:r});return this.add(n),n}add(e){this.#u.add(e);let t=d(e);if("string"==typeof t){let r=this.#l.get(t);r?r.push(e):this.#l.set(t,[e])}this.notify({type:"added",mutation:e})}remove(e){if(this.#u.delete(e)){let t=d(e);if("string"==typeof t){let r=this.#l.get(t);if(r){if(r.length>1){let t=r.indexOf(e);-1!==t&&r.splice(t,1)}else r[0]===e&&this.#l.delete(t)}}}this.notify({type:"removed",mutation:e})}canRun(e){let t=d(e);if("string"!=typeof t)return!0;{let r=this.#l.get(t),n=r?.find(e=>"pending"===e.state.status);return!n||n===e}}runNext(e){let t=d(e);if("string"!=typeof t)return Promise.resolve();{let r=this.#l.get(t)?.find(t=>t!==e&&t.state.isPaused);return r?.continue()??Promise.resolve()}}clear(){i.j.batch(()=>{this.#u.forEach(e=>{this.notify({type:"removed",mutation:e})}),this.#u.clear(),this.#l.clear()})}getAll(){return Array.from(this.#u)}find(e){let t={exact:!0,...e};return this.getAll().find(e=>(0,n.nJ)(t,e))}findAll(e={}){return this.getAll().filter(t=>(0,n.nJ)(e,t))}notify(e){i.j.batch(()=>{this.listeners.forEach(t=>{t(e)})})}resumePausedMutations(){let e=this.getAll().filter(e=>e.state.isPaused);return i.j.batch(()=>Promise.all(e.map(e=>e.continue().catch(n.lQ))))}};function d(e){return e.options.scope?.id}var f=r(4017),p=r(8248);function m(e){return{onFetch:(t,r)=>{let i=t.options,s=t.fetchOptions?.meta?.fetchMore?.direction,a=t.state.data?.pages||[],o=t.state.data?.pageParams||[],u={pages:[],pageParams:[]},l=0,c=async()=>{let r=!1,c=e=>{Object.defineProperty(e,"signal",{enumerable:!0,get:()=>(t.signal.aborted?r=!0:t.signal.addEventListener("abort",()=>{r=!0}),t.signal)})},h=(0,n.ZM)(t.options,t.fetchOptions),d=async(e,i,s)=>{if(r)return Promise.reject();if(null==i&&e.pages.length)return Promise.resolve(e);let a={queryKey:t.queryKey,pageParam:i,direction:s?"backward":"forward",meta:t.options.meta};c(a);let o=await h(a),{maxPages:u}=t.options,l=s?n.ZZ:n.y9;return{pages:l(e.pages,o,u),pageParams:l(e.pageParams,i,u)}};if(s&&a.length){let e="backward"===s,t={pages:a,pageParams:o},r=(e?function(e,{pages:t,pageParams:r}){return t.length>0?e.getPreviousPageParam?.(t[0],t,r[0],r):void 0}:v)(i,t);u=await d(t,r,e)}else{let t=e??a.length;do{let e=0===l?o[0]??i.initialPageParam:v(i,u);if(l>0&&null==e)break;u=await d(u,e),l++}while(l<t)}return u};t.options.persister?t.fetchFn=()=>t.options.persister?.(c,{queryKey:t.queryKey,meta:t.options.meta,signal:t.signal},r):t.fetchFn=c}}}function v(e,{pages:t,pageParams:r}){let n=t.length-1;return t.length>0?e.getNextPageParam(t[n],t,r[n],r):void 0}var y=class{#h;#d;#i;#f;#p;#m;#v;#y;constructor(e={}){this.#h=e.queryCache||new l,this.#d=e.mutationCache||new h,this.#i=e.defaultOptions||{},this.#f=new Map,this.#p=new Map,this.#m=0}mount(){this.#m++,1===this.#m&&(this.#v=f.m.subscribe(async e=>{e&&(await this.resumePausedMutations(),this.#h.onFocus())}),this.#y=p.t.subscribe(async e=>{e&&(await this.resumePausedMutations(),this.#h.onOnline())}))}unmount(){this.#m--,0===this.#m&&(this.#v?.(),this.#v=void 0,this.#y?.(),this.#y=void 0)}isFetching(e){return this.#h.findAll({...e,fetchStatus:"fetching"}).length}isMutating(e){return this.#d.findAll({...e,status:"pending"}).length}getQueryData(e){let t=this.defaultQueryOptions({queryKey:e});return this.#h.get(t.queryHash)?.state.data}ensureQueryData(e){let t=this.defaultQueryOptions(e),r=this.#h.build(this,t),i=r.state.data;return void 0===i?this.fetchQuery(e):(e.revalidateIfStale&&r.isStaleByTime((0,n.d2)(t.staleTime,r))&&this.prefetchQuery(t),Promise.resolve(i))}getQueriesData(e){return this.#h.findAll(e).map(({queryKey:e,state:t})=>[e,t.data])}setQueryData(e,t,r){let i=this.defaultQueryOptions({queryKey:e}),s=this.#h.get(i.queryHash),a=s?.state.data,o=(0,n.Zw)(t,a);if(void 0!==o)return this.#h.build(this,i).setData(o,{...r,manual:!0})}setQueriesData(e,t,r){return i.j.batch(()=>this.#h.findAll(e).map(({queryKey:e})=>[e,this.setQueryData(e,t,r)]))}getQueryState(e){let t=this.defaultQueryOptions({queryKey:e});return this.#h.get(t.queryHash)?.state}removeQueries(e){let t=this.#h;i.j.batch(()=>{t.findAll(e).forEach(e=>{t.remove(e)})})}resetQueries(e,t){let r=this.#h,n={type:"active",...e};return i.j.batch(()=>(r.findAll(e).forEach(e=>{e.reset()}),this.refetchQueries(n,t)))}cancelQueries(e,t={}){let r={revert:!0,...t};return Promise.all(i.j.batch(()=>this.#h.findAll(e).map(e=>e.cancel(r)))).then(n.lQ).catch(n.lQ)}invalidateQueries(e,t={}){return i.j.batch(()=>{if(this.#h.findAll(e).forEach(e=>{e.invalidate()}),e?.refetchType==="none")return Promise.resolve();let r={...e,type:e?.refetchType??e?.type??"active"};return this.refetchQueries(r,t)})}refetchQueries(e,t={}){let r={...t,cancelRefetch:t.cancelRefetch??!0};return Promise.all(i.j.batch(()=>this.#h.findAll(e).filter(e=>!e.isDisabled()).map(e=>{let t=e.fetch(void 0,r);return r.throwOnError||(t=t.catch(n.lQ)),"paused"===e.state.fetchStatus?Promise.resolve():t}))).then(n.lQ)}fetchQuery(e){let t=this.defaultQueryOptions(e);void 0===t.retry&&(t.retry=!1);let r=this.#h.build(this,t);return r.isStaleByTime((0,n.d2)(t.staleTime,r))?r.fetch(t):Promise.resolve(r.state.data)}prefetchQuery(e){return this.fetchQuery(e).then(n.lQ).catch(n.lQ)}fetchInfiniteQuery(e){return e.behavior=m(e.pages),this.fetchQuery(e)}prefetchInfiniteQuery(e){return this.fetchInfiniteQuery(e).then(n.lQ).catch(n.lQ)}ensureInfiniteQueryData(e){return e.behavior=m(e.pages),this.ensureQueryData(e)}resumePausedMutations(){return p.t.isOnline()?this.#d.resumePausedMutations():Promise.resolve()}getQueryCache(){return this.#h}getMutationCache(){return this.#d}getDefaultOptions(){return this.#i}setDefaultOptions(e){this.#i=e}setQueryDefaults(e,t){this.#f.set((0,n.EN)(e),{queryKey:e,defaultOptions:t})}getQueryDefaults(e){let t=[...this.#f.values()],r={};return t.forEach(t=>{(0,n.Cp)(e,t.queryKey)&&Object.assign(r,t.defaultOptions)}),r}setMutationDefaults(e,t){this.#p.set((0,n.EN)(e),{mutationKey:e,defaultOptions:t})}getMutationDefaults(e){let t=[...this.#p.values()],r={};return t.forEach(t=>{(0,n.Cp)(e,t.mutationKey)&&(r={...r,...t.defaultOptions})}),r}defaultQueryOptions(e){if(e._defaulted)return e;let t={...this.#i.queries,...this.getQueryDefaults(e.queryKey),...e,_defaulted:!0};return t.queryHash||(t.queryHash=(0,n.F$)(t.queryKey,t)),void 0===t.refetchOnReconnect&&(t.refetchOnReconnect="always"!==t.networkMode),void 0===t.throwOnError&&(t.throwOnError=!!t.suspense),!t.networkMode&&t.persister&&(t.networkMode="offlineFirst"),t.queryFn===n.hT&&(t.enabled=!1),t}defaultMutationOptions(e){return e?._defaulted?e:{...this.#i.mutations,...e?.mutationKey&&this.getMutationDefaults(e.mutationKey),...e,_defaulted:!0}}clear(){this.#h.clear(),this.#d.clear()}}},7113:(e,t,r)=>{"use strict";r.d(t,{D:()=>c,N:()=>h});var n=r(2115),i=(e,t,r,n,i,s,a,o)=>{let u=document.documentElement,l=["light","dark"];function c(t){(Array.isArray(e)?e:[e]).forEach(e=>{let r="class"===e,n=r&&s?i.map(e=>s[e]||e):i;r?(u.classList.remove(...n),u.classList.add(t)):u.setAttribute(e,t)}),o&&l.includes(t)&&(u.style.colorScheme=t)}if(n)c(n);else try{let e=localStorage.getItem(t)||r,n=a&&"system"===e?window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light":e;c(n)}catch(e){}},s=["light","dark"],a="(prefers-color-scheme: dark)",o="undefined"==typeof window,u=n.createContext(void 0),l={setTheme:e=>{},themes:[]},c=()=>{var e;return null!=(e=n.useContext(u))?e:l},h=e=>n.useContext(u)?n.createElement(n.Fragment,null,e.children):n.createElement(f,{...e}),d=["light","dark"],f=e=>{let{forcedTheme:t,disableTransitionOnChange:r=!1,enableSystem:i=!0,enableColorScheme:o=!0,storageKey:l="theme",themes:c=d,defaultTheme:h=i?"system":"light",attribute:f="data-theme",value:g,children:b,nonce:w,scriptProps:C}=e,[E,S]=n.useState(()=>m(l,h)),[x,M]=n.useState(()=>m(l)),R=g?Object.values(g):c,O=n.useCallback(e=>{let t=e;if(!t)return;"system"===e&&i&&(t=y());let n=g?g[t]:t,a=r?v(w):null,u=document.documentElement,l=e=>{"class"===e?(u.classList.remove(...R),n&&u.classList.add(n)):e.startsWith("data-")&&(n?u.setAttribute(e,n):u.removeAttribute(e))};if(Array.isArray(f)?f.forEach(l):l(f),o){let e=s.includes(h)?h:null,r=s.includes(t)?t:e;u.style.colorScheme=r}null==a||a()},[w]),P=n.useCallback(e=>{let t="function"==typeof e?e(E):e;S(t);try{localStorage.setItem(l,t)}catch(e){}},[E]),A=n.useCallback(e=>{M(y(e)),"system"===E&&i&&!t&&O("system")},[E,t]);n.useEffect(()=>{let e=window.matchMedia(a);return e.addListener(A),A(e),()=>e.removeListener(A)},[A]),n.useEffect(()=>{let e=e=>{e.key===l&&(e.newValue?S(e.newValue):P(h))};return window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)},[P]),n.useEffect(()=>{O(null!=t?t:E)},[t,E]);let q=n.useMemo(()=>({theme:E,setTheme:P,forcedTheme:t,resolvedTheme:"system"===E?x:E,themes:i?[...c,"system"]:c,systemTheme:i?x:void 0}),[E,P,t,x,i,c]);return n.createElement(u.Provider,{value:q},n.createElement(p,{forcedTheme:t,storageKey:l,attribute:f,enableSystem:i,enableColorScheme:o,defaultTheme:h,value:g,themes:c,nonce:w,scriptProps:C}),b)},p=n.memo(e=>{let{forcedTheme:t,storageKey:r,attribute:s,enableSystem:a,enableColorScheme:o,defaultTheme:u,value:l,themes:c,nonce:h,scriptProps:d}=e,f=JSON.stringify([s,r,u,t,c,l,a,o]).slice(1,-1);return n.createElement("script",{...d,suppressHydrationWarning:!0,nonce:"undefined"==typeof window?h:"",dangerouslySetInnerHTML:{__html:"(".concat(i.toString(),")(").concat(f,")")}})}),m=(e,t)=>{let r;if(!o){try{r=localStorage.getItem(e)||void 0}catch(e){}return r||t}},v=e=>{let t=document.createElement("style");return e&&t.setAttribute("nonce",e),t.appendChild(document.createTextNode("*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(t),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(t)},1)}},y=e=>(e||(e=window.matchMedia(a)),e.matches?"dark":"light")}}]);