import{d as O,r as x,o as F,p as W,c as S,w as P,a as E,b as re,i as G,n as H,h as _e,e as Oe,f as N,g as _,j as r,k as w,l as I,u as k,F as Z,m as U,q as Y,s as ve,t as pe,v as B,T as je}from"./entry.3U0uJRDQ.js";import{o as b,i as Ne,w as He,a as Ve,h as Ze,t as ke,A as V,I as J,l as Se,N as ae,b as M,v as Ue,c as he,_ as Me,O as We,u as Q,d as C,e as Te,s as qe,f as Ye,T as Ke,S as L,W as ze,G as Qe,r as Ge,g as Je}from"./XMarkIcon.XqRNa09D.js";const Xe=Symbol.for("nuxt:client-only"),et=O({name:"ClientOnly",inheritAttrs:!1,props:["fallback","placeholder","placeholderTag","fallbackTag"],setup(e,{slots:n,attrs:l}){const i=x(!1);return F(()=>{i.value=!0}),W(Xe,!0),u=>{var s;if(i.value)return(s=n.default)==null?void 0:s.call(n);const a=n.fallback||n.placeholder;if(a)return a();const t=u.fallback||u.placeholder||"",d=u.fallbackTag||u.placeholderTag||"span";return S(d,l,t)}}});function me(e,n){if(e)return e;let l=n??"button";if(typeof l=="string"&&l.toLowerCase()==="button")return"button"}function tt(e,n){let l=x(me(e.value.type,e.value.as));return F(()=>{l.value=me(e.value.type,e.value.as)}),P(()=>{var i;l.value||b(n)&&b(n)instanceof HTMLButtonElement&&!((i=b(n))!=null&&i.hasAttribute("type"))&&(l.value="button")}),l}function ge(e){return[e.screenX,e.screenY]}function nt(){let e=x([-1,-1]);return{wasMoved(n){let l=ge(n);return e.value[0]===l[0]&&e.value[1]===l[1]?!1:(e.value=l,!0)},update(n){e.value=ge(n)}}}function at({container:e,accept:n,walk:l,enabled:i}){P(()=>{let u=e.value;if(!u||i!==void 0&&!i.value)return;let a=Ne(e);if(!a)return;let t=Object.assign(s=>n(s),{acceptNode:n}),d=a.createTreeWalker(u,NodeFilter.SHOW_ELEMENT,t,!1);for(;d.nextNode();)l(d.currentNode)})}function lt(e){throw new Error("Unexpected object: "+e)}var T=(e=>(e[e.First=0]="First",e[e.Previous=1]="Previous",e[e.Next=2]="Next",e[e.Last=3]="Last",e[e.Specific=4]="Specific",e[e.Nothing=5]="Nothing",e))(T||{});function rt(e,n){let l=n.resolveItems();if(l.length<=0)return null;let i=n.resolveActiveIndex(),u=i??-1;switch(e.focus){case 0:{for(let a=0;a<l.length;++a)if(!n.resolveDisabled(l[a],a,l))return a;return i}case 1:{u===-1&&(u=l.length);for(let a=u-1;a>=0;--a)if(!n.resolveDisabled(l[a],a,l))return a;return i}case 2:{for(let a=u+1;a<l.length;++a)if(!n.resolveDisabled(l[a],a,l))return a;return i}case 3:{for(let a=l.length-1;a>=0;--a)if(!n.resolveDisabled(l[a],a,l))return a;return i}case 4:{for(let a=0;a<l.length;++a)if(n.resolveId(l[a],a,l)===e.id)return a;return i}case 5:return null;default:lt(e)}}let xe=/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;function be(e){var n,l;let i=(n=e.innerText)!=null?n:"",u=e.cloneNode(!0);if(!(u instanceof HTMLElement))return i;let a=!1;for(let d of u.querySelectorAll('[hidden],[aria-hidden],[role="img"]'))d.remove(),a=!0;let t=a?(l=u.innerText)!=null?l:"":i;return xe.test(t)&&(t=t.replace(xe,"")),t}function ot(e){let n=e.getAttribute("aria-label");if(typeof n=="string")return n.trim();let l=e.getAttribute("aria-labelledby");if(l){let i=l.split(" ").map(u=>{let a=document.getElementById(u);if(a){let t=a.getAttribute("aria-label");return typeof t=="string"?t.trim():be(a).trim()}return null}).filter(Boolean);if(i.length>0)return i.join(", ")}return be(e).trim()}function st(e){let n=x(""),l=x("");return()=>{let i=b(e);if(!i)return"";let u=i.innerText;if(n.value===u)return l.value;let a=ot(i).trim().toLowerCase();return n.value=u,l.value=a,a}}var it=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(it||{}),ut=(e=>(e[e.Pointer=0]="Pointer",e[e.Other=1]="Other",e))(ut||{});function dt(e){requestAnimationFrame(()=>requestAnimationFrame(e))}let Ie=Symbol("MenuContext");function X(e){let n=G(Ie,null);if(n===null){let l=new Error(`<${e} /> is missing a parent <Menu /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(l,X),l}return n}let ct=O({name:"Menu",props:{as:{type:[Object,String],default:"template"}},setup(e,{slots:n,attrs:l}){let i=x(1),u=x(null),a=x(null),t=x([]),d=x(""),s=x(null),p=x(1);function y(o=f=>f){let f=s.value!==null?t.value[s.value]:null,c=We(o(t.value.slice()),m=>b(m.dataRef.domRef)),h=f?c.indexOf(f):null;return h===-1&&(h=null),{items:c,activeItemIndex:h}}let v={menuState:i,buttonRef:u,itemsRef:a,items:t,searchQuery:d,activeItemIndex:s,activationTrigger:p,closeMenu:()=>{i.value=1,s.value=null},openMenu:()=>i.value=0,goToItem(o,f,c){let h=y(),m=rt(o===T.Specific?{focus:T.Specific,id:f}:{focus:o},{resolveItems:()=>h.items,resolveActiveIndex:()=>h.activeItemIndex,resolveId:g=>g.id,resolveDisabled:g=>g.dataRef.disabled});d.value="",s.value=m,p.value=c??1,t.value=h.items},search(o){let f=d.value!==""?0:1;d.value+=o.toLowerCase();let c=(s.value!==null?t.value.slice(s.value+f).concat(t.value.slice(0,s.value+f)):t.value).find(m=>m.dataRef.textValue.startsWith(d.value)&&!m.dataRef.disabled),h=c?t.value.indexOf(c):-1;h===-1||h===s.value||(s.value=h,p.value=1)},clearSearch(){d.value=""},registerItem(o,f){let c=y(h=>[...h,{id:o,dataRef:f}]);t.value=c.items,s.value=c.activeItemIndex,p.value=1},unregisterItem(o){let f=y(c=>{let h=c.findIndex(m=>m.id===o);return h!==-1&&c.splice(h,1),c});t.value=f.items,s.value=f.activeItemIndex,p.value=1}};return He([u,a],(o,f)=>{var c;v.closeMenu(),Ve(f,Ze.Loose)||(o.preventDefault(),(c=b(u))==null||c.focus())},E(()=>i.value===0)),W(Ie,v),ke(E(()=>Q(i.value,{0:C.Open,1:C.Closed}))),()=>{let o={open:i.value===0,close:v.closeMenu};return V({ourProps:{},theirProps:e,slot:o,slots:n,attrs:l,name:"Menu"})}}}),ft=O({name:"MenuButton",props:{disabled:{type:Boolean,default:!1},as:{type:[Object,String],default:"button"},id:{type:String,default:null}},setup(e,{attrs:n,slots:l,expose:i}){var u;let a=(u=e.id)!=null?u:`headlessui-menu-button-${J()}`,t=X("MenuButton");i({el:t.buttonRef,$el:t.buttonRef});function d(v){switch(v.key){case M.Space:case M.Enter:case M.ArrowDown:v.preventDefault(),v.stopPropagation(),t.openMenu(),H(()=>{var o;(o=b(t.itemsRef))==null||o.focus({preventScroll:!0}),t.goToItem(T.First)});break;case M.ArrowUp:v.preventDefault(),v.stopPropagation(),t.openMenu(),H(()=>{var o;(o=b(t.itemsRef))==null||o.focus({preventScroll:!0}),t.goToItem(T.Last)});break}}function s(v){switch(v.key){case M.Space:v.preventDefault();break}}function p(v){e.disabled||(t.menuState.value===0?(t.closeMenu(),H(()=>{var o;return(o=b(t.buttonRef))==null?void 0:o.focus({preventScroll:!0})})):(v.preventDefault(),t.openMenu(),dt(()=>{var o;return(o=b(t.itemsRef))==null?void 0:o.focus({preventScroll:!0})})))}let y=tt(E(()=>({as:e.as,type:n.type})),t.buttonRef);return()=>{var v;let o={open:t.menuState.value===0},{...f}=e,c={ref:t.buttonRef,id:a,type:y.value,"aria-haspopup":"menu","aria-controls":(v=b(t.itemsRef))==null?void 0:v.id,"aria-expanded":t.menuState.value===0,onKeydown:d,onKeyup:s,onClick:p};return V({ourProps:c,theirProps:f,slot:o,attrs:n,slots:l,name:"MenuButton"})}}}),vt=O({name:"MenuItems",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},id:{type:String,default:null}},setup(e,{attrs:n,slots:l,expose:i}){var u;let a=(u=e.id)!=null?u:`headlessui-menu-items-${J()}`,t=X("MenuItems"),d=x(null);i({el:t.itemsRef,$el:t.itemsRef}),at({container:E(()=>b(t.itemsRef)),enabled:E(()=>t.menuState.value===0),accept(o){return o.getAttribute("role")==="menuitem"?NodeFilter.FILTER_REJECT:o.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT},walk(o){o.setAttribute("role","none")}});function s(o){var f;switch(d.value&&clearTimeout(d.value),o.key){case M.Space:if(t.searchQuery.value!=="")return o.preventDefault(),o.stopPropagation(),t.search(o.key);case M.Enter:if(o.preventDefault(),o.stopPropagation(),t.activeItemIndex.value!==null){let c=t.items.value[t.activeItemIndex.value];(f=b(c.dataRef.domRef))==null||f.click()}t.closeMenu(),Me(b(t.buttonRef));break;case M.ArrowDown:return o.preventDefault(),o.stopPropagation(),t.goToItem(T.Next);case M.ArrowUp:return o.preventDefault(),o.stopPropagation(),t.goToItem(T.Previous);case M.Home:case M.PageUp:return o.preventDefault(),o.stopPropagation(),t.goToItem(T.First);case M.End:case M.PageDown:return o.preventDefault(),o.stopPropagation(),t.goToItem(T.Last);case M.Escape:o.preventDefault(),o.stopPropagation(),t.closeMenu(),H(()=>{var c;return(c=b(t.buttonRef))==null?void 0:c.focus({preventScroll:!0})});break;case M.Tab:o.preventDefault(),o.stopPropagation(),t.closeMenu(),H(()=>Ue(b(t.buttonRef),o.shiftKey?he.Previous:he.Next));break;default:o.key.length===1&&(t.search(o.key),d.value=setTimeout(()=>t.clearSearch(),350));break}}function p(o){switch(o.key){case M.Space:o.preventDefault();break}}let y=Se(),v=E(()=>y!==null?(y.value&C.Open)===C.Open:t.menuState.value===0);return()=>{var o,f;let c={open:t.menuState.value===0},{...h}=e,m={"aria-activedescendant":t.activeItemIndex.value===null||(o=t.items.value[t.activeItemIndex.value])==null?void 0:o.id,"aria-labelledby":(f=b(t.buttonRef))==null?void 0:f.id,id:a,onKeydown:s,onKeyup:p,role:"menu",tabIndex:0,ref:t.itemsRef};return V({ourProps:m,theirProps:h,slot:c,attrs:n,slots:l,features:ae.RenderStrategy|ae.Static,visible:v.value,name:"MenuItems"})}}}),pt=O({name:"MenuItem",inheritAttrs:!1,props:{as:{type:[Object,String],default:"template"},disabled:{type:Boolean,default:!1},id:{type:String,default:null}},setup(e,{slots:n,attrs:l,expose:i}){var u;let a=(u=e.id)!=null?u:`headlessui-menu-item-${J()}`,t=X("MenuItem"),d=x(null);i({el:d,$el:d});let s=E(()=>t.activeItemIndex.value!==null?t.items.value[t.activeItemIndex.value].id===a:!1),p=st(d),y=E(()=>({disabled:e.disabled,get textValue(){return p()},domRef:d}));F(()=>t.registerItem(a,y)),re(()=>t.unregisterItem(a)),P(()=>{t.menuState.value===0&&s.value&&t.activationTrigger.value!==0&&H(()=>{var g,A;return(A=(g=b(d))==null?void 0:g.scrollIntoView)==null?void 0:A.call(g,{block:"nearest"})})});function v(g){if(e.disabled)return g.preventDefault();t.closeMenu(),Me(b(t.buttonRef))}function o(){if(e.disabled)return t.goToItem(T.Nothing);t.goToItem(T.Specific,a)}let f=nt();function c(g){f.update(g)}function h(g){f.wasMoved(g)&&(e.disabled||s.value||t.goToItem(T.Specific,a,0))}function m(g){f.wasMoved(g)&&(e.disabled||s.value&&t.goToItem(T.Nothing))}return()=>{let{disabled:g}=e,A={active:s.value,disabled:g,close:t.closeMenu},{...j}=e;return V({ourProps:{id:a,ref:d,role:"menuitem",tabIndex:g===!0?void 0:-1,"aria-disabled":g===!0?!0:void 0,disabled:void 0,onClick:v,onFocus:o,onPointerenter:c,onMouseenter:c,onPointermove:h,onMousemove:h,onPointerleave:m,onMouseleave:m},theirProps:{...l,...j},slot:A,attrs:l,slots:n,name:"MenuItem"})}}});function ht(e){let n={called:!1};return(...l)=>{if(!n.called)return n.called=!0,e(...l)}}function ne(e,...n){e&&n.length>0&&e.classList.add(...n)}function K(e,...n){e&&n.length>0&&e.classList.remove(...n)}var le=(e=>(e.Finished="finished",e.Cancelled="cancelled",e))(le||{});function mt(e,n){let l=Te();if(!e)return l.dispose;let{transitionDuration:i,transitionDelay:u}=getComputedStyle(e),[a,t]=[i,u].map(d=>{let[s=0]=d.split(",").filter(Boolean).map(p=>p.includes("ms")?parseFloat(p):parseFloat(p)*1e3).sort((p,y)=>y-p);return s});return a!==0?l.setTimeout(()=>n("finished"),a+t):n("finished"),l.add(()=>n("cancelled")),l.dispose}function ye(e,n,l,i,u,a){let t=Te(),d=a!==void 0?ht(a):()=>{};return K(e,...u),ne(e,...n,...l),t.nextFrame(()=>{K(e,...l),ne(e,...i),t.add(mt(e,s=>(K(e,...i,...n),ne(e,...u),d(s))))}),t.add(()=>K(e,...n,...l,...i,...u)),t.add(()=>d("cancelled")),t.dispose}function R(e=""){return e.split(/\s+/).filter(n=>n.length>1)}let oe=Symbol("TransitionContext");var gt=(e=>(e.Visible="visible",e.Hidden="hidden",e))(gt||{});function xt(){return G(oe,null)!==null}function bt(){let e=G(oe,null);if(e===null)throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");return e}function yt(){let e=G(se,null);if(e===null)throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");return e}let se=Symbol("NestingContext");function ee(e){return"children"in e?ee(e.children):e.value.filter(({state:n})=>n==="visible").length>0}function Ce(e){let n=x([]),l=x(!1);F(()=>l.value=!0),re(()=>l.value=!1);function i(a,t=L.Hidden){let d=n.value.findIndex(({id:s})=>s===a);d!==-1&&(Q(t,{[L.Unmount](){n.value.splice(d,1)},[L.Hidden](){n.value[d].state="hidden"}}),!ee(n)&&l.value&&(e==null||e()))}function u(a){let t=n.value.find(({id:d})=>d===a);return t?t.state!=="visible"&&(t.state="visible"):n.value.push({id:a,state:"visible"}),()=>i(a,L.Unmount)}return{children:n,register:u,unregister:i}}let Ee=ae.RenderStrategy,z=O({props:{as:{type:[Object,String],default:"div"},show:{type:[Boolean],default:null},unmount:{type:[Boolean],default:!0},appear:{type:[Boolean],default:!1},enter:{type:[String],default:""},enterFrom:{type:[String],default:""},enterTo:{type:[String],default:""},entered:{type:[String],default:""},leave:{type:[String],default:""},leaveFrom:{type:[String],default:""},leaveTo:{type:[String],default:""}},emits:{beforeEnter:()=>!0,afterEnter:()=>!0,beforeLeave:()=>!0,afterLeave:()=>!0},setup(e,{emit:n,attrs:l,slots:i,expose:u}){let a=x(0);function t(){a.value|=C.Opening,n("beforeEnter")}function d(){a.value&=~C.Opening,n("afterEnter")}function s(){a.value|=C.Closing,n("beforeLeave")}function p(){a.value&=~C.Closing,n("afterLeave")}if(!xt()&&qe())return()=>_e(Ae,{...e,onBeforeEnter:t,onAfterEnter:d,onBeforeLeave:s,onAfterLeave:p},i);let y=x(null),v=E(()=>e.unmount?L.Unmount:L.Hidden);u({el:y,$el:y});let{show:o,appear:f}=bt(),{register:c,unregister:h}=yt(),m=x(o.value?"visible":"hidden"),g={value:!0},A=J(),j={value:!1},ie=Ce(()=>{!j.value&&m.value!=="hidden"&&(m.value="hidden",h(A),p())});F(()=>{let D=c(A);re(D)}),P(()=>{if(v.value===L.Hidden&&A){if(o.value&&m.value!=="visible"){m.value="visible";return}Q(m.value,{hidden:()=>h(A),visible:()=>c(A)})}});let ue=R(e.enter),de=R(e.enterFrom),De=R(e.enterTo),ce=R(e.entered),Fe=R(e.leave),$e=R(e.leaveFrom),Be=R(e.leaveTo);F(()=>{P(()=>{if(m.value==="visible"){let D=b(y);if(D instanceof Comment&&D.data==="")throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")}})});function Re(D){let te=g.value&&!f.value,$=b(y);!$||!($ instanceof HTMLElement)||te||(j.value=!0,o.value&&t(),o.value||s(),D(o.value?ye($,ue,de,De,ce,q=>{j.value=!1,q===le.Finished&&d()}):ye($,Fe,$e,Be,ce,q=>{j.value=!1,q===le.Finished&&(ee(ie)||(m.value="hidden",h(A),p()))})))}return F(()=>{Oe([o],(D,te,$)=>{Re($),g.value=!1},{immediate:!0})}),W(se,ie),ke(E(()=>Q(m.value,{visible:C.Open,hidden:C.Closed})|a.value)),()=>{let{appear:D,show:te,enter:$,enterFrom:q,enterTo:In,entered:Cn,leave:En,leaveFrom:An,leaveTo:Dn,...fe}=e,Le={ref:y},Pe={...fe,...f.value&&o.value&&Ye.isServer?{class:N([l.class,fe.class,...ue,...de])}:{}};return V({theirProps:Pe,ourProps:Le,slot:{},slots:i,attrs:l,features:Ee,visible:m.value==="visible",name:"TransitionChild"})}}}),wt=z,Ae=O({inheritAttrs:!1,props:{as:{type:[Object,String],default:"div"},show:{type:[Boolean],default:null},unmount:{type:[Boolean],default:!0},appear:{type:[Boolean],default:!1},enter:{type:[String],default:""},enterFrom:{type:[String],default:""},enterTo:{type:[String],default:""},entered:{type:[String],default:""},leave:{type:[String],default:""},leaveFrom:{type:[String],default:""},leaveTo:{type:[String],default:""}},emits:{beforeEnter:()=>!0,afterEnter:()=>!0,beforeLeave:()=>!0,afterLeave:()=>!0},setup(e,{emit:n,attrs:l,slots:i}){let u=Se(),a=E(()=>e.show===null&&u!==null?(u.value&C.Open)===C.Open:e.show);P(()=>{if(![!0,!1].includes(a.value))throw new Error('A <Transition /> is used but it is missing a `:show="true | false"` prop.')});let t=x(a.value?"visible":"hidden"),d=Ce(()=>{t.value="hidden"}),s=x(!0),p={show:a,appear:E(()=>e.appear||!s.value)};return F(()=>{P(()=>{s.value=!1,a.value?t.value="visible":ee(d)||(t.value="hidden")})}),W(se,d),W(oe,p),()=>{let y=Ke(e,["show","appear","unmount","onBeforeEnter","onBeforeLeave","onAfterEnter","onAfterLeave"]),v={unmount:e.unmount};return V({ourProps:{...v,as:"template"},theirProps:{},slot:{},slots:{...i,default:()=>[_e(wt,{onBeforeEnter:()=>n("beforeEnter"),onAfterEnter:()=>n("afterEnter"),onBeforeLeave:()=>n("beforeLeave"),onAfterLeave:()=>n("afterLeave"),...l,...v,...y},i.default)]},attrs:{},features:Ee,visible:t.value==="visible",name:"Transition"})}}});function _t(e,n){return _(),S("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true","data-slot":"icon"},[r("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"})])}function kt(e,n){return _(),S("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true","data-slot":"icon"},[r("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"})])}function St(e,n){return _(),S("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true","data-slot":"icon"},[r("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z"}),r("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z"})])}function we(e,n){return _(),S("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true","data-slot":"icon"},[r("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z"}),r("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"})])}function Mt(e,n){return _(),S("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true","data-slot":"icon"},[r("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75"})])}function Tt(e,n){return _(),S("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true","data-slot":"icon"},[r("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z"})])}function It(e,n){return _(),S("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true","data-slot":"icon"},[r("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"})])}function Ct(e,n){return _(),S("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true","data-slot":"icon"},[r("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"})])}function Et(e,n){return _(),S("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true","data-slot":"icon"},[r("path",{"fill-rule":"evenodd",d:"M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z","clip-rule":"evenodd"})])}function At(e,n){return _(),S("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true","data-slot":"icon"},[r("path",{"fill-rule":"evenodd",d:"M9 3.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11ZM2 9a7 7 0 1 1 12.452 4.391l3.328 3.329a.75.75 0 1 1-1.06 1.06l-3.329-3.328A7 7 0 0 1 2 9Z","clip-rule":"evenodd"})])}const Dt=r("div",{class:"fixed inset-0 bg-gray-900/80"},null,-1),Ft={class:"fixed inset-0 flex"},$t={class:"absolute left-full top-0 flex w-16 justify-center pt-5"},Bt=r("span",{class:"sr-only"},"Close sidebar",-1),Rt={class:"flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6 pb-4 ring-1 ring-white/10"},Lt=r("div",{class:"flex h-16 shrink-0 items-center"},[r("img",{class:"h-8 w-auto",src:"https://hc1319-1300215870.file.myqcloud.com/img/logos/mark.svg?color=indigo&shade=500",alt:"Your Company"})],-1),Pt={class:"flex flex-1 flex-col"},Ot={role:"list",class:"flex flex-1 flex-col gap-y-7"},jt={role:"list",class:"-mx-2 space-y-1"},Nt=["href"],Ht=r("div",{class:"text-xs font-semibold leading-6 text-gray-400"}," Your teams ",-1),Vt={role:"list",class:"-mx-2 mt-2 space-y-1"},Zt=["href"],Ut={class:"flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-gray-700 bg-gray-800 text-[0.625rem] font-medium text-gray-400 group-hover:text-white"},Wt={class:"truncate"},qt={class:"mt-auto"},Yt={href:"#",class:"group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-400 hover:bg-gray-800 hover:text-white"},Kt={class:"hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col"},zt={class:"flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6 pb-4"},Qt=r("div",{class:"flex h-16 shrink-0 items-center"},[r("img",{class:"h-8 w-auto",src:"https://hc1319-1300215870.file.myqcloud.com/img/logos/mark.svg?color=indigo&shade=500",alt:"Your Company"})],-1),Gt={class:"flex flex-1 flex-col"},Jt={role:"list",class:"flex flex-1 flex-col gap-y-7"},Xt={role:"list",class:"-mx-2 space-y-1"},en=["href"],tn=r("div",{class:"text-xs font-semibold leading-6 text-gray-400"}," Your teams ",-1),nn={role:"list",class:"-mx-2 mt-2 space-y-1"},an=["href"],ln={class:"flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-gray-700 bg-gray-800 text-[0.625rem] font-medium text-gray-400 group-hover:text-white"},rn={class:"truncate"},on={class:"mt-auto"},sn={href:"#",class:"group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-400 hover:bg-gray-800 hover:text-white"},un={class:"lg:pl-72"},dn={class:"sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8"},cn=r("span",{class:"sr-only"},"Open sidebar",-1),fn=r("div",{class:"h-6 w-px bg-gray-900/10 lg:hidden","aria-hidden":"true"},null,-1),vn={class:"flex flex-1 gap-x-4 self-stretch lg:gap-x-6"},pn={class:"relative flex flex-1",action:"#",method:"GET"},hn=r("label",{for:"search-field",class:"sr-only"},"Search",-1),mn=r("input",{id:"search-field",class:"block h-full w-full border-0 py-0 pl-8 pr-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm",placeholder:"Search...",type:"search",name:"search"},null,-1),gn={class:"flex items-center gap-x-4 lg:gap-x-6"},xn={type:"button",class:"-m-2.5 p-2.5 text-gray-400 hover:text-gray-500"},bn=r("span",{class:"sr-only"},"View notifications",-1),yn=r("div",{class:"hidden lg:block lg:h-6 lg:w-px lg:bg-gray-900/10","aria-hidden":"true"},null,-1),wn=r("span",{class:"sr-only"},"Open user menu",-1),_n=r("img",{class:"h-8 w-8 rounded-full bg-gray-50",src:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",alt:""},null,-1),kn={class:"hidden lg:flex lg:items-center"},Sn=r("span",{class:"ml-4 text-sm font-semibold leading-6 text-gray-900","aria-hidden":"true"},"Tom Cook",-1),Mn=["href"],Tn=r("main",{class:"py-10"},[r("div",{class:"px-4 sm:px-6 lg:px-8"})],-1),Bn={__name:"dashboard",setup(e){const n=[{name:"Dashboard",href:"#",icon:It,current:!0},{name:"Team",href:"#",icon:Ct,current:!1},{name:"Projects",href:"#",icon:Tt,current:!1},{name:"Calendar",href:"#",icon:kt,current:!1},{name:"Documents",href:"#",icon:Mt,current:!1},{name:"Reports",href:"#",icon:St,current:!1}],l=[{id:1,name:"Heroicons",href:"#",initial:"H",current:!1},{id:2,name:"Tailwind Labs",href:"#",initial:"T",current:!1},{id:3,name:"Workcation",href:"#",initial:"W",current:!1}],i=[{name:"Your profile",href:"#"},{name:"Sign out",href:"#"}],u=x(!1);return(a,t)=>{const d=et;return _(),S("div",null,[w(k(Ae),{as:"template",show:u.value},{default:I(()=>[w(k(ze),{as:"div",class:"relative z-50 lg:hidden",onClose:t[1]||(t[1]=s=>u.value=!1)},{default:I(()=>[w(k(z),{as:"template",enter:"transition-opacity ease-linear duration-300","enter-from":"opacity-0","enter-to":"opacity-100",leave:"transition-opacity ease-linear duration-300","leave-from":"opacity-100","leave-to":"opacity-0"},{default:I(()=>[Dt]),_:1}),r("div",Ft,[w(k(z),{as:"template",enter:"transition ease-in-out duration-300 transform","enter-from":"-translate-x-full","enter-to":"translate-x-0",leave:"transition ease-in-out duration-300 transform","leave-from":"translate-x-0","leave-to":"-translate-x-full"},{default:I(()=>[w(k(Qe),{class:"relative mr-16 flex w-full max-w-xs flex-1"},{default:I(()=>[w(k(z),{as:"template",enter:"ease-in-out duration-300","enter-from":"opacity-0","enter-to":"opacity-100",leave:"ease-in-out duration-300","leave-from":"opacity-100","leave-to":"opacity-0"},{default:I(()=>[r("div",$t,[r("button",{type:"button",class:"-m-2.5 p-2.5",onClick:t[0]||(t[0]=s=>u.value=!1)},[Bt,w(k(Ge),{class:"h-6 w-6 text-white","aria-hidden":"true"})])])]),_:1}),r("div",Rt,[Lt,r("nav",Pt,[r("ul",Ot,[r("li",null,[r("ul",jt,[(_(),S(Z,null,U(n,s=>r("li",{key:s.name},[r("a",{href:s.href,class:N([s.current?"bg-gray-800 text-white":"text-gray-400 hover:text-white hover:bg-gray-800","group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"])},[(_(),ve(pe(s.icon),{class:"h-6 w-6 shrink-0","aria-hidden":"true"})),Y(" "+B(s.name),1)],10,Nt)])),64))])]),r("li",null,[Ht,r("ul",Vt,[(_(),S(Z,null,U(l,s=>r("li",{key:s.name},[r("a",{href:s.href,class:N([s.current?"bg-gray-800 text-white":"text-gray-400 hover:text-white hover:bg-gray-800","group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"])},[r("span",Ut,B(s.initial),1),r("span",Wt,B(s.name),1)],10,Zt)])),64))])]),r("li",qt,[r("a",Yt,[w(k(we),{class:"h-6 w-6 shrink-0","aria-hidden":"true"}),Y(" Settings ")])])])])])]),_:1})]),_:1})])]),_:1})]),_:1},8,["show"]),r("div",Kt,[r("div",zt,[Qt,r("nav",Gt,[r("ul",Jt,[r("li",null,[r("ul",Xt,[(_(),S(Z,null,U(n,s=>r("li",{key:s.name},[r("a",{href:s.href,class:N([s.current?"bg-gray-800 text-white":"text-gray-400 hover:text-white hover:bg-gray-800","group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"])},[(_(),ve(pe(s.icon),{class:"h-6 w-6 shrink-0","aria-hidden":"true"})),Y(" "+B(s.name),1)],10,en)])),64))])]),r("li",null,[tn,r("ul",nn,[(_(),S(Z,null,U(l,s=>r("li",{key:s.name},[r("a",{href:s.href,class:N([s.current?"bg-gray-800 text-white":"text-gray-400 hover:text-white hover:bg-gray-800","group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"])},[r("span",ln,B(s.initial),1),r("span",rn,B(s.name),1)],10,an)])),64))])]),r("li",on,[r("a",sn,[w(k(we),{class:"h-6 w-6 shrink-0","aria-hidden":"true"}),Y(" Settings ")])])])])])]),r("div",un,[r("div",dn,[r("button",{type:"button",class:"-m-2.5 p-2.5 text-gray-700 lg:hidden",onClick:t[2]||(t[2]=s=>u.value=!0)},[cn,w(k(Je),{class:"h-6 w-6","aria-hidden":"true"})]),fn,r("div",vn,[r("form",pn,[hn,w(k(At),{class:"pointer-events-none absolute inset-y-0 left-0 h-full w-5 text-gray-400","aria-hidden":"true"}),mn]),r("div",gn,[r("button",xn,[bn,w(k(_t),{class:"h-6 w-6","aria-hidden":"true"})]),yn,w(k(ct),{as:"div",class:"relative"},{default:I(()=>[w(d,null,{default:I(()=>[w(k(ft),{class:"-m-1.5 flex items-center p-1.5"},{default:I(()=>[wn,_n,r("span",kn,[Sn,w(k(Et),{class:"ml-2 h-5 w-5 text-gray-400","aria-hidden":"true"})])]),_:1})]),_:1}),w(je,{"enter-active-class":"transition ease-out duration-100","enter-from-class":"transform opacity-0 scale-95","enter-to-class":"transform opacity-100 scale-100","leave-active-class":"transition ease-in duration-75","leave-from-class":"transform opacity-100 scale-100","leave-to-class":"transform opacity-0 scale-95"},{default:I(()=>[w(k(vt),{class:"absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none"},{default:I(()=>[(_(),S(Z,null,U(i,s=>w(k(pt),{key:s.name},{default:I(({active:p})=>[r("a",{href:s.href,class:N([p?"bg-gray-50":"","block px-3 py-1 text-sm leading-6 text-gray-900"])},B(s.name),11,Mn)]),_:2},1024)),64))]),_:1})]),_:1})]),_:1})])])]),Tn])])}}};export{Bn as default};
