import{b7 as j,aP as q,u as D,bO as G,H as N,aN as S,N as k,bP as K,bQ as Q,aL as R,bR as J,aM as X,bw as h,b as B,k as w,d as ee,A as oe,h as E,aR as te,i as le,ab as F,aW as ne,bS as ae,aB as P,m as v,bT as se,bU as ue,c as T,a9 as ce,an as de,p as ie,a6 as re,D as I}from"./index-711bad6c.js";import{P as x}from"./vnode-27e25623.js";const fe=(e,o={})=>{j(e)||q("[useLockscreen]","You need to pass a ref param to this function");const u=o.ns||D("popup"),t=G(()=>u.bm("parent","hidden"));if(!N||S(document.body,t.value))return;let c=0,s=!1,l="0";const i=()=>{setTimeout(()=>{X(document==null?void 0:document.body,t.value),s&&document&&(document.body.style.width=l)},200)};k(e,a=>{if(!a){i();return}s=!S(document.body,t.value),s&&(l=document.body.style.width),c=K(u.namespace.value);const f=document.documentElement.clientHeight<document.body.scrollHeight,r=Q(document.body,"overflowY");c>0&&(f||r==="scroll")&&s&&(document.body.style.width=`calc(100% - ${c}px)`),R(document.body,t.value)}),J(()=>i())},ye=e=>{if(!e)return{onClick:h,onMousedown:h,onMouseup:h};let o=!1,u=!1;return{onClick:l=>{o&&u&&e(l),o=u=!1},onMousedown:l=>{o=l.target===l.currentTarget},onMouseup:l=>{u=l.target===l.currentTarget}}},me=B({mask:{type:Boolean,default:!0},customMaskEvent:{type:Boolean,default:!1},overlayClass:{type:w([String,Array,Object])},zIndex:{type:w([String,Number])}}),ve={click:e=>e instanceof MouseEvent},pe="overlay";var be=ee({name:"ElOverlay",props:me,emits:ve,setup(e,{slots:o,emit:u}){const t=D(pe),c=a=>{u("click",a)},{onClick:s,onMousedown:l,onMouseup:i}=ye(e.customMaskEvent?void 0:c);return()=>e.mask?oe("div",{class:[t.b(),e.overlayClass],style:{zIndex:e.zIndex},onClick:s,onMousedown:l,onMouseup:i},[E(o,"default")],x.STYLE|x.CLASS|x.PROPS,["onClick","onMouseup","onMousedown"]):te("div",{class:e.overlayClass,style:{zIndex:e.zIndex,position:"fixed",top:"0px",right:"0px",bottom:"0px",left:"0px"}},[E(o,"default")])}});const xe=be,Ce=B({center:{type:Boolean,default:!1},alignCenter:{type:Boolean,default:!1},closeIcon:{type:le},customClass:{type:String,default:""},draggable:{type:Boolean,default:!1},fullscreen:{type:Boolean,default:!1},showClose:{type:Boolean,default:!0},title:{type:String,default:""}}),ke={close:()=>!0},we=B({...Ce,appendToBody:{type:Boolean,default:!1},beforeClose:{type:w(Function)},destroyOnClose:{type:Boolean,default:!1},closeOnClickModal:{type:Boolean,default:!0},closeOnPressEscape:{type:Boolean,default:!0},lockScroll:{type:Boolean,default:!0},modal:{type:Boolean,default:!0},openDelay:{type:Number,default:0},closeDelay:{type:Number,default:0},top:{type:String},modelValue:{type:Boolean,default:!1},modalClass:String,width:{type:[String,Number]},zIndex:{type:Number},trapFocus:{type:Boolean,default:!1}}),Be={open:()=>!0,opened:()=>!0,close:()=>!0,closed:()=>!0,[F]:e=>ne(e),openAutoFocus:()=>!0,closeAutoFocus:()=>!0},Oe=(e,o)=>{const t=re().emit,{nextZIndex:c}=ae();let s="";const l=P(),i=P(),a=v(!1),f=v(!1),r=v(!1),p=v(e.zIndex||c());let y,m;const A=se("namespace",ue),z=T(()=>{const n={},d=`--${A.value}-dialog`;return e.fullscreen||(e.top&&(n[`${d}-margin-top`]=e.top),e.width&&(n[`${d}-width`]=ce(e.width))),n}),L=T(()=>e.alignCenter?{display:"flex"}:{});function H(){t("opened")}function V(){t("closed"),t(F,!1),e.destroyOnClose&&(r.value=!1)}function $(){t("close")}function O(){m==null||m(),y==null||y(),e.openDelay&&e.openDelay>0?{stop:y}=I(()=>M(),e.openDelay):M()}function b(){y==null||y(),m==null||m(),e.closeDelay&&e.closeDelay>0?{stop:m}=I(()=>g(),e.closeDelay):g()}function C(){function n(d){d||(f.value=!0,a.value=!1)}e.beforeClose?e.beforeClose(n):b()}function W(){e.closeOnClickModal&&C()}function M(){N&&(a.value=!0)}function g(){a.value=!1}function Y(){t("openAutoFocus")}function U(){t("closeAutoFocus")}function _(n){var d;((d=n.detail)==null?void 0:d.focusReason)==="pointer"&&n.preventDefault()}e.lockScroll&&fe(a);function Z(){e.closeOnPressEscape&&C()}return k(()=>e.modelValue,n=>{n?(f.value=!1,O(),r.value=!0,p.value=e.zIndex?p.value++:c(),de(()=>{t("open"),o.value&&(o.value.scrollTop=0)})):a.value&&b()}),k(()=>e.fullscreen,n=>{o.value&&(n?(s=o.value.style.transform,o.value.style.transform=""):o.value.style.transform=s)}),ie(()=>{e.modelValue&&(a.value=!0,r.value=!0,O())}),{afterEnter:H,afterLeave:V,beforeLeave:$,handleClose:C,onModalClick:W,close:b,doClose:g,onOpenAutoFocus:Y,onCloseAutoFocus:U,onCloseRequested:Z,onFocusoutPrevented:_,titleId:l,bodyId:i,closed:f,style:z,overlayDialogStyle:L,rendered:r,visible:a,zIndex:p}};export{xe as E,ke as a,we as b,Be as c,Ce as d,ye as e,Oe as u};