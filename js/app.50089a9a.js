(function(){"use strict";var t={5389:function(t,e,n){var o=n(9242),s=n(3396);const a={class:"bg-main-background-under text-highlights font-montserrat"},r={class:"bg-main-background-over mx-auto relative"};function i(t,e,n,o,i,l){const c=(0,s.up)("NavBar"),u=(0,s.up)("router-view"),d=(0,s.up)("FooterSection");return(0,s.wg)(),(0,s.iD)("div",a,[(0,s._)("div",r,[(0,s.Wm)(c),(0,s.Wm)(u),(0,s.Wm)(d)])])}var l=n(7139),c=n.p+"img/menu.49282487.svg",u=n.p+"img/close.56978e81.svg";const d={class:"flex items-center justify-between p-3 md:hidden"},v={class:"font-montserratAlternates font-bold text-4xl tracking-tighter"},m=(0,s._)("img",{src:c,alt:"menu",class:"h-10 w-10",style:{filter:"invert(98%) sepia(7%) saturate(1631%) hue-rotate(296deg) brightness(113%) contrast(88%)"}},null,-1),f=[m],p={class:"flex items-center justify-between"},b=(0,s._)("p",{class:"font-montserrat font-bold text-2xl"},"menu",-1),g=(0,s._)("img",{src:u,alt:"menu",class:"h-10 w-10",style:{filter:"invert(98%) sepia(7%) saturate(1631%) hue-rotate(296deg) brightness(113%) contrast(88%)"}},null,-1),x=[g],h={class:"text-3xl text-center"},w={class:"bg-menu-background px-12"},_={class:"mx-auto max-w-7xl hidden md:flex justify-between py-3 items-center"},k={class:"font-montserratAlternates font-bold text-4xl tracking-tighter"},y={class:"text-xl flex space-x-6 font-medium"};function j(t,e,n,a,r,i){const c=(0,s.up)("router-link"),u=(0,s.Q2)("click-outside");return(0,s.wg)(),(0,s.iD)("div",null,[(0,s._)("div",d,[(0,s._)("p",v,[(0,s.Wm)(c,{to:"/"},{default:(0,s.w5)((()=>[(0,s.Uk)("battad")])),_:1})]),(0,s._)("div",{class:"cursor-pointer",onClick:e[0]||(e[0]=(0,o.iM)(((...t)=>a.showNav&&a.showNav(...t)),["stop"]))},f),(0,s.wy)(((0,s.wg)(),(0,s.iD)("div",{class:(0,l.C_)(["absolute w-full bg-mobile-menu bg-opacity-90 text-white left-0 top-0 p-3",a.showHideMenu])},[(0,s._)("div",p,[b,(0,s._)("div",{class:"cursor-pointer",onClick:e[1]||(e[1]=(...t)=>a.closeNav&&a.closeNav(...t))},x)]),(0,s._)("ul",h,[(0,s._)("li",{class:"py-4",onClick:e[2]||(e[2]=(...t)=>a.closeNav&&a.closeNav(...t))},[(0,s.Wm)(c,{to:"/about","active-class":"font-bold"},{default:(0,s.w5)((()=>[(0,s.Uk)("about")])),_:1})]),(0,s._)("li",{class:"py-4",onClick:e[3]||(e[3]=(...t)=>a.closeNav&&a.closeNav(...t))},[(0,s.Wm)(c,{to:"/projects","active-class":"font-bold"},{default:(0,s.w5)((()=>[(0,s.Uk)("projects")])),_:1})]),(0,s._)("li",{class:"py-4",onClick:e[4]||(e[4]=(...t)=>a.closeNav&&a.closeNav(...t))},[(0,s.Wm)(c,{to:"/job-history","active-class":"font-bold"},{default:(0,s.w5)((()=>[(0,s.Uk)("job history")])),_:1})]),(0,s._)("li",{class:"py-4",onClick:e[5]||(e[5]=(...t)=>a.closeNav&&a.closeNav(...t))},[(0,s.Wm)(c,{to:"/contacts","active-class":"font-bold"},{default:(0,s.w5)((()=>[(0,s.Uk)("contacts")])),_:1})])])],2)),[[u,a.closeNav]])]),(0,s._)("div",w,[(0,s._)("div",_,[(0,s._)("p",k,[(0,s.Wm)(c,{to:"/"},{default:(0,s.w5)((()=>[(0,s.Uk)("roel battad")])),_:1})]),(0,s._)("div",null,[(0,s._)("ul",y,[(0,s._)("li",null,[(0,s.Wm)(c,{to:"/about","active-class":"font-bold"},{default:(0,s.w5)((()=>[(0,s.Uk)("about")])),_:1})]),(0,s._)("li",null,[(0,s.Wm)(c,{to:"/projects","active-class":"font-bold"},{default:(0,s.w5)((()=>[(0,s.Uk)("projects")])),_:1})]),(0,s._)("li",null,[(0,s.Wm)(c,{to:"/job-history","active-class":"font-bold"},{default:(0,s.w5)((()=>[(0,s.Uk)("job history")])),_:1})]),(0,s._)("li",null,[(0,s.Wm)(c,{to:"/contacts","active-class":"font-bold"},{default:(0,s.w5)((()=>[(0,s.Uk)("contacts")])),_:1})])])])])])])}var N=n(4870),W=n(2483),P={name:"NavBar",directives:{"click-outside":{updated:function(t,e){const n=n=>{t.contains(n.target)||t===n.target||e.value(n)};t.__vueClickEventHandler__=n,document.addEventListener("click",n)},unmounted:function(t){document.removeEventListener("click",t.__vueClickEventHandler__)}}},setup(){const t=(0,N.iH)("hidden"),e=(0,W.tv)();function n(){t.value="hidden"}function o(){t.value="animate__animated animate__fadeInDown"}function a(){t.value="hidden"}return(0,s.bv)((()=>{window.addEventListener("resize",n)})),(0,s.Ah)((()=>{window.removeEventListener("resize",n)})),{showHideMenu:t,showNav:o,closeNav:a,router:e}}},C=n(89);const U=(0,C.Z)(P,[["render",j]]);var H=U;const A={class:"bg-menu-background px-4 md:px-12 border-sentences border-t-2"},O={class:"mx-auto max-w-7xl py-4 items-center"},D={class:"text-xl flex justify-start space-x-2 text-sm"},B=(0,s._)("div",{class:"mt-4 text-left text-xs text-sentences"}," © 2023 Roel Battad. All rights reserved. ",-1);function E(t,e,n,o,a,r){const i=(0,s.up)("router-link");return(0,s.wg)(),(0,s.iD)("div",A,[(0,s._)("div",O,[(0,s._)("div",null,[(0,s._)("ul",D,[(0,s._)("li",null,[(0,s.Wm)(i,{to:"/about","active-class":"font-bold"},{default:(0,s.w5)((()=>[(0,s.Uk)("about")])),_:1})]),(0,s._)("li",null,[(0,s.Wm)(i,{to:"/projects","active-class":"font-bold"},{default:(0,s.w5)((()=>[(0,s.Uk)("projects")])),_:1})]),(0,s._)("li",null,[(0,s.Wm)(i,{to:"/job-history","active-class":"font-bold"},{default:(0,s.w5)((()=>[(0,s.Uk)("job history")])),_:1})]),(0,s._)("li",null,[(0,s.Wm)(i,{to:"/contacts","active-class":"font-bold"},{default:(0,s.w5)((()=>[(0,s.Uk)("contacts")])),_:1})])])]),B])])}var F={name:"FooterSection"};const Z=(0,C.Z)(F,[["render",E]]);var R=Z,L={name:"App",components:{NavBar:H,FooterSection:R}};const M=(0,C.Z)(L,[["render",i]]);var J=M;const I={class:"p-3 sm:px-12"},S=(0,s._)("div",{class:"max-w-7xl mx-auto h-screen"}," About me ",-1),z=[S];function T(t,e,n,o,a,r){return(0,s.wg)(),(0,s.iD)("div",I,z)}var G={name:"AboutPage",setup(){(0,s.bv)((()=>{document.title="About - Roel Battad"}))}};const Q=(0,C.Z)(G,[["render",T]]);var q=Q,K=n.p+"img/github.5ce87ef5.svg",V=n.p+"img/instagram.e4be655f.svg",X=n.p+"img/linkedin.c9d51930.svg";const Y={class:"px-4 md:px-12"},$=(0,s.uE)('<div class="max-w-7xl mx-auto font-montserrat h-screen"><div class="text-start"><p class="text-4xl tracking-tighter font-bold mt-8 w-3/4">Full stack developer and electronics engineer</p><p class="mt-8 text-sentences text-lg tracking-tight font-medium"> Hi! I&#39;m a full stack developer and electronics engineer based in the Philippines. Most of my work are related to building and providing the best scalable solutions for e-commerce websites and applications. </p></div><div class="flex flex-col items-start space-y-6 mt-8 text-sm"><div class="flex items-center space-x-2"><img src="'+K+'" alt="menu" class="h-8 w-8" style="filter:invert(98%) sepia(7%) saturate(1631%) hue-rotate(296deg) brightness(113%) contrast(88%);"><p class="font-montserratAlternates">Follow me on Github.</p></div><div class="flex items-center space-x-2"><img src="'+V+'" alt="menu" class="h-8 w-8" style="filter:invert(98%) sepia(7%) saturate(1631%) hue-rotate(296deg) brightness(113%) contrast(88%);"><p class="font-montserratAlternates">Follow me on Instagram.</p></div><div class="flex items-center space-x-2"><img src="'+X+'" alt="menu" class="h-8 w-8" style="filter:invert(98%) sepia(7%) saturate(1631%) hue-rotate(296deg) brightness(113%) contrast(88%);"><p class="font-montserratAlternates">Follow me on Linkedin.</p></div></div></div>',1),tt=[$];function et(t,e,n,o,a,r){return(0,s.wg)(),(0,s.iD)("div",Y,tt)}var nt={name:"HomePage",setup(){(0,s.bv)((()=>{document.title="Home - Roel Battad"}))}};const ot=(0,C.Z)(nt,[["render",et]]);var st=ot;const at={class:"p-3 sm:px-12"},rt=(0,s._)("div",{class:"max-w-7xl mx-auto h-screen"}," Job History Page ",-1),it=[rt];function lt(t,e,n,o,a,r){return(0,s.wg)(),(0,s.iD)("div",at,it)}var ct={name:"JobHistoryPage",setup(){(0,s.bv)((()=>{document.title="Job History - Roel Battad"}))}};const ut=(0,C.Z)(ct,[["render",lt]]);var dt=ut;const vt={class:"p-3 sm:px-12"},mt=(0,s._)("div",{class:"max-w-7xl mx-auto h-screen"}," Project Page ",-1),ft=[mt];function pt(t,e,n,o,a,r){return(0,s.wg)(),(0,s.iD)("div",vt,ft)}var bt={name:"ProjectsPage",setup(){(0,s.bv)((()=>{document.title="Projects - Roel Battad"}))}};const gt=(0,C.Z)(bt,[["render",pt]]);var xt=gt;const ht={class:"p-3 sm:px-12"},wt=(0,s._)("div",{class:"max-w-7xl mx-auto h-screen"}," Contacts Page ",-1),_t=[wt];function kt(t,e,n,o,a,r){return(0,s.wg)(),(0,s.iD)("div",ht,_t)}var yt={name:"ContactsPage",setup(){(0,s.bv)((()=>{document.title="Contacts - Roel Battad"}))}};const jt=(0,C.Z)(yt,[["render",kt]]);var Nt=jt;const Wt=[{path:"/",name:"Home",component:st},{path:"/about",name:"About",component:q},{path:"/projects",name:"Projects",component:xt},{path:"/job-history",name:"Job-History",component:dt},{path:"/contacts",name:"Contacts",component:Nt}],Pt=(0,W.p7)({history:(0,W.PO)(),routes:Wt});var Ct=Pt;(0,o.ri)(J).use(Ct).mount("#app")}},e={};function n(o){var s=e[o];if(void 0!==s)return s.exports;var a=e[o]={exports:{}};return t[o].call(a.exports,a,a.exports,n),a.exports}n.m=t,function(){var t=[];n.O=function(e,o,s,a){if(!o){var r=1/0;for(u=0;u<t.length;u++){o=t[u][0],s=t[u][1],a=t[u][2];for(var i=!0,l=0;l<o.length;l++)(!1&a||r>=a)&&Object.keys(n.O).every((function(t){return n.O[t](o[l])}))?o.splice(l--,1):(i=!1,a<r&&(r=a));if(i){t.splice(u--,1);var c=s();void 0!==c&&(e=c)}}return e}a=a||0;for(var u=t.length;u>0&&t[u-1][2]>a;u--)t[u]=t[u-1];t[u]=[o,s,a]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){n.p="/portfolio/"}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,o){var s,a,r=o[0],i=o[1],l=o[2],c=0;if(r.some((function(e){return 0!==t[e]}))){for(s in i)n.o(i,s)&&(n.m[s]=i[s]);if(l)var u=l(n)}for(e&&e(o);c<r.length;c++)a=r[c],n.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return n.O(u)},o=self["webpackChunkportfolio"]=self["webpackChunkportfolio"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(5389)}));o=n.O(o)})();
//# sourceMappingURL=app.50089a9a.js.map