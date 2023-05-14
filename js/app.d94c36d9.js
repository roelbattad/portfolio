(function(){"use strict";var t={1924:function(t,e,o){var n=o(9242),s=o(3396);const a={class:"bg-main-background-under text-highlights font-montserrat"},r={class:"bg-main-background-over mx-auto relative"};function i(t,e,o,n,i,l){const c=(0,s.up)("NavBar"),u=(0,s.up)("router-view"),d=(0,s.up)("FooterSection");return(0,s.wg)(),(0,s.iD)("div",a,[(0,s._)("div",r,[(0,s.Wm)(c),(0,s.Wm)(u),(0,s.Wm)(d)])])}var l=o(7139),c=o.p+"img/menu.49282487.svg",u=o.p+"img/close.56978e81.svg";const d={class:"flex items-center justify-between p-3 md:hidden"},f={class:"font-montserratAlternates font-bold text-4xl tracking-tighter"},v=(0,s._)("img",{src:c,alt:"menu",class:"h-10 w-10",style:{filter:"invert(98%) sepia(7%) saturate(1631%) hue-rotate(296deg) brightness(113%) contrast(88%)"}},null,-1),p=[v],m={class:"flex items-center justify-between"},b=(0,s._)("p",{class:"font-montserrat font-bold text-2xl"},"menu",-1),g=(0,s._)("img",{src:u,alt:"menu",class:"h-10 w-10",style:{filter:"invert(98%) sepia(7%) saturate(1631%) hue-rotate(296deg) brightness(113%) contrast(88%)"}},null,-1),x=[g],h={class:"text-3xl text-center"},w={class:"bg-menu-background px-12"},_={class:"mx-auto max-w-7xl hidden md:flex justify-between py-3 items-center"},k={class:"font-montserratAlternates font-bold text-4xl tracking-tighter"},y={class:"text-xl flex space-x-6 font-medium"};function j(t,e,o,a,r,i){const c=(0,s.up)("router-link"),u=(0,s.Q2)("click-outside");return(0,s.wg)(),(0,s.iD)("div",null,[(0,s._)("div",d,[(0,s._)("p",f,[(0,s.Wm)(c,{to:"/portfolio/"},{default:(0,s.w5)((()=>[(0,s.Uk)("battad")])),_:1})]),(0,s._)("div",{class:"cursor-pointer",onClick:e[0]||(e[0]=(0,n.iM)(((...t)=>a.showNav&&a.showNav(...t)),["stop"]))},p),(0,s.wy)(((0,s.wg)(),(0,s.iD)("div",{class:(0,l.C_)(["absolute w-full bg-mobile-menu bg-opacity-90 text-white left-0 top-0 p-3",a.showHideMenu])},[(0,s._)("div",m,[b,(0,s._)("div",{class:"cursor-pointer",onClick:e[1]||(e[1]=(...t)=>a.closeNav&&a.closeNav(...t))},x)]),(0,s._)("ul",h,[(0,s._)("li",{class:"py-4",onClick:e[2]||(e[2]=(...t)=>a.closeNav&&a.closeNav(...t))},[(0,s.Wm)(c,{to:"/portfolio/about","active-class":"font-bold"},{default:(0,s.w5)((()=>[(0,s.Uk)("about")])),_:1})]),(0,s._)("li",{class:"py-4",onClick:e[3]||(e[3]=(...t)=>a.closeNav&&a.closeNav(...t))},[(0,s.Wm)(c,{to:"/portfolio/projects","active-class":"font-bold"},{default:(0,s.w5)((()=>[(0,s.Uk)("projects")])),_:1})]),(0,s._)("li",{class:"py-4",onClick:e[4]||(e[4]=(...t)=>a.closeNav&&a.closeNav(...t))},[(0,s.Wm)(c,{to:"/portfolio/job-history","active-class":"font-bold"},{default:(0,s.w5)((()=>[(0,s.Uk)("job history")])),_:1})]),(0,s._)("li",{class:"py-4",onClick:e[5]||(e[5]=(...t)=>a.closeNav&&a.closeNav(...t))},[(0,s.Wm)(c,{to:"/portfolio/contacts","active-class":"font-bold"},{default:(0,s.w5)((()=>[(0,s.Uk)("contacts")])),_:1})])])],2)),[[u,a.closeNav]])]),(0,s._)("div",w,[(0,s._)("div",_,[(0,s._)("p",k,[(0,s.Wm)(c,{to:"/portfolio/"},{default:(0,s.w5)((()=>[(0,s.Uk)("roel battad")])),_:1})]),(0,s._)("div",null,[(0,s._)("ul",y,[(0,s._)("li",null,[(0,s.Wm)(c,{to:"/portfolio/about","active-class":"font-bold"},{default:(0,s.w5)((()=>[(0,s.Uk)("about")])),_:1})]),(0,s._)("li",null,[(0,s.Wm)(c,{to:"/portfolio/projects","active-class":"font-bold"},{default:(0,s.w5)((()=>[(0,s.Uk)("projects")])),_:1})]),(0,s._)("li",null,[(0,s.Wm)(c,{to:"/portfolio/job-history","active-class":"font-bold"},{default:(0,s.w5)((()=>[(0,s.Uk)("job history")])),_:1})]),(0,s._)("li",null,[(0,s.Wm)(c,{to:"/portfolio/contacts","active-class":"font-bold"},{default:(0,s.w5)((()=>[(0,s.Uk)("contacts")])),_:1})])])])])])])}var N=o(4870),W=o(2483),P={name:"NavBar",directives:{"click-outside":{updated:function(t,e){const o=o=>{t.contains(o.target)||t===o.target||e.value(o)};t.__vueClickEventHandler__=o,document.addEventListener("click",o)},unmounted:function(t){document.removeEventListener("click",t.__vueClickEventHandler__)}}},setup(){const t=(0,N.iH)("hidden"),e=(0,W.tv)();function o(){t.value="hidden"}function n(){t.value="animate__animated animate__fadeInDown"}function a(){t.value="hidden"}return(0,s.bv)((()=>{window.addEventListener("resize",o)})),(0,s.Ah)((()=>{window.removeEventListener("resize",o)})),{showHideMenu:t,showNav:n,closeNav:a,router:e}}},C=o(89);const U=(0,C.Z)(P,[["render",j]]);var A=U;const H={class:"bg-menu-background px-4 md:px-12 border-sentences border-t-2"},O={class:"mx-auto max-w-7xl py-4 items-center"},D={class:"text-lg flex justify-start space-x-2 text-sm"},B=(0,s._)("div",{class:"mt-4 text-left text-xs text-sentences"}," © 2023 Roel Battad. All rights reserved. ",-1);function E(t,e,o,n,a,r){const i=(0,s.up)("router-link");return(0,s.wg)(),(0,s.iD)("div",H,[(0,s._)("div",O,[(0,s._)("div",null,[(0,s._)("ul",D,[(0,s._)("li",null,[(0,s.Wm)(i,{to:"/portfolio/about","active-class":"font-bold"},{default:(0,s.w5)((()=>[(0,s.Uk)("about")])),_:1})]),(0,s._)("li",null,[(0,s.Wm)(i,{to:"/portfolio/projects","active-class":"font-bold"},{default:(0,s.w5)((()=>[(0,s.Uk)("projects")])),_:1})]),(0,s._)("li",null,[(0,s.Wm)(i,{to:"/portfolio/job-history","active-class":"font-bold"},{default:(0,s.w5)((()=>[(0,s.Uk)("job history")])),_:1})]),(0,s._)("li",null,[(0,s.Wm)(i,{to:"/portfolio/contacts","active-class":"font-bold"},{default:(0,s.w5)((()=>[(0,s.Uk)("contacts")])),_:1})])])]),B])])}var Z={name:"FooterSection"};const F=(0,C.Z)(Z,[["render",E]]);var L=F,R={name:"App",components:{NavBar:A,FooterSection:L}};const M=(0,C.Z)(R,[["render",i]]);var J=M;const I={class:"p-3 sm:px-12"},S=(0,s._)("div",{class:"max-w-7xl mx-auto h-screen"}," About me ",-1),z=[S];function T(t,e,o,n,a,r){return(0,s.wg)(),(0,s.iD)("div",I,z)}var G={name:"AboutPage",setup(){(0,s.bv)((()=>{document.title="About - Roel Battad"}))}};const Q=(0,C.Z)(G,[["render",T]]);var q=Q,K=o.p+"img/github.5ce87ef5.svg",V=o.p+"img/instagram.e4be655f.svg",X=o.p+"img/linkedin.c9d51930.svg";const Y={class:"px-4 md:px-12"},$=(0,s.uE)('<div class="max-w-7xl mx-auto font-montserrat h-screen"><div class="text-start"><p class="text-4xl tracking-tighter font-bold mt-8 w-3/4">Full stack developer and electronics engineer</p><p class="mt-8 text-sentences text-lg tracking-tight font-medium"> Hi! I&#39;m a full stack developer and electronics engineer based in the Philippines. Most of my work are related to building and providing the best scalable solutions for e-commerce websites and applications. </p></div><div class="flex flex-col items-start space-y-6 mt-8 text-sm"><div class="flex items-center space-x-2"><img src="'+K+'" alt="menu" class="h-8 w-8" style="filter:invert(98%) sepia(7%) saturate(1631%) hue-rotate(296deg) brightness(113%) contrast(88%);"><p class="font-montserratAlternates">Follow me on Github.</p></div><div class="flex items-center space-x-2"><img src="'+V+'" alt="menu" class="h-8 w-8" style="filter:invert(98%) sepia(7%) saturate(1631%) hue-rotate(296deg) brightness(113%) contrast(88%);"><p class="font-montserratAlternates">Follow me on Instagram.</p></div><div class="flex items-center space-x-2"><img src="'+X+'" alt="menu" class="h-8 w-8" style="filter:invert(98%) sepia(7%) saturate(1631%) hue-rotate(296deg) brightness(113%) contrast(88%);"><p class="font-montserratAlternates">Let&#39;s connect on Linkedin.</p></div></div></div>',1),tt=[$];function et(t,e,o,n,a,r){return(0,s.wg)(),(0,s.iD)("div",Y,tt)}var ot={name:"HomePage",setup(){(0,s.bv)((()=>{document.title="Home - Roel Battad"}))}};const nt=(0,C.Z)(ot,[["render",et]]);var st=nt;const at={class:"p-3 sm:px-12"},rt=(0,s._)("div",{class:"max-w-7xl mx-auto h-screen"}," Job History Page ",-1),it=[rt];function lt(t,e,o,n,a,r){return(0,s.wg)(),(0,s.iD)("div",at,it)}var ct={name:"JobHistoryPage",setup(){(0,s.bv)((()=>{document.title="Job History - Roel Battad"}))}};const ut=(0,C.Z)(ct,[["render",lt]]);var dt=ut;const ft={class:"p-3 sm:px-12"},vt=(0,s._)("div",{class:"max-w-7xl mx-auto h-screen"}," Project Page ",-1),pt=[vt];function mt(t,e,o,n,a,r){return(0,s.wg)(),(0,s.iD)("div",ft,pt)}var bt={name:"ProjectsPage",setup(){(0,s.bv)((()=>{document.title="Projects - Roel Battad"}))}};const gt=(0,C.Z)(bt,[["render",mt]]);var xt=gt;const ht={class:"p-3 sm:px-12"},wt=(0,s._)("div",{class:"max-w-7xl mx-auto h-screen"}," Contacts Page ",-1),_t=[wt];function kt(t,e,o,n,a,r){return(0,s.wg)(),(0,s.iD)("div",ht,_t)}var yt={name:"ContactsPage",setup(){(0,s.bv)((()=>{document.title="Contacts - Roel Battad"}))}};const jt=(0,C.Z)(yt,[["render",kt]]);var Nt=jt;const Wt=[{path:"/portfolio",name:"Home",component:st},{path:"/portfolio/about",name:"About",component:q},{path:"/portfolio/projects",name:"Projects",component:xt},{path:"/portfolio/job-history",name:"Job-History",component:dt},{path:"/portfolio/contacts",name:"Contacts",component:Nt},{path:"/:catchAll(.*)",redirect:"/portfolio"}],Pt=(0,W.p7)({history:(0,W.PO)(),routes:Wt});var Ct=Pt;(0,n.ri)(J).use(Ct).mount("#app")}},e={};function o(n){var s=e[n];if(void 0!==s)return s.exports;var a=e[n]={exports:{}};return t[n].call(a.exports,a,a.exports,o),a.exports}o.m=t,function(){var t=[];o.O=function(e,n,s,a){if(!n){var r=1/0;for(u=0;u<t.length;u++){n=t[u][0],s=t[u][1],a=t[u][2];for(var i=!0,l=0;l<n.length;l++)(!1&a||r>=a)&&Object.keys(o.O).every((function(t){return o.O[t](n[l])}))?n.splice(l--,1):(i=!1,a<r&&(r=a));if(i){t.splice(u--,1);var c=s();void 0!==c&&(e=c)}}return e}a=a||0;for(var u=t.length;u>0&&t[u-1][2]>a;u--)t[u]=t[u-1];t[u]=[n,s,a]}}(),function(){o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,{a:e}),e}}(),function(){o.d=function(t,e){for(var n in e)o.o(e,n)&&!o.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){o.p="/portfolio/"}(),function(){var t={143:0};o.O.j=function(e){return 0===t[e]};var e=function(e,n){var s,a,r=n[0],i=n[1],l=n[2],c=0;if(r.some((function(e){return 0!==t[e]}))){for(s in i)o.o(i,s)&&(o.m[s]=i[s]);if(l)var u=l(o)}for(e&&e(n);c<r.length;c++)a=r[c],o.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return o.O(u)},n=self["webpackChunkportfolio"]=self["webpackChunkportfolio"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=o.O(void 0,[998],(function(){return o(1924)}));n=o.O(n)})();
//# sourceMappingURL=app.d94c36d9.js.map