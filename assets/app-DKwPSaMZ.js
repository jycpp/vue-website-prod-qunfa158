(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))u(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&u(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function u(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();/**
* @vue/shared v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function hr(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return n=>n in t}const xe={},cn=[],Et=()=>{},Ps=()=>!1,pu=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),ei=e=>e.startsWith("onUpdate:"),Pe=Object.assign,mr=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Ka=Object.prototype.hasOwnProperty,de=(e,t)=>Ka.call(e,t),J=Array.isArray,Wt=e=>hu(e)==="[object Map]",Ru=e=>hu(e)==="[object Set]",Jr=e=>hu(e)==="[object Date]",ne=e=>typeof e=="function",ve=e=>typeof e=="string",dt=e=>typeof e=="symbol",he=e=>e!==null&&typeof e=="object",Ms=e=>(he(e)||ne(e))&&ne(e.then)&&ne(e.catch),qs=Object.prototype.toString,hu=e=>qs.call(e),Xa=e=>hu(e).slice(8,-1),Fs=e=>hu(e)==="[object Object]",gr=e=>ve(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,fn=hr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ti=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},Za=/-\w/g,Ue=ti(e=>e.replace(Za,t=>t.slice(1).toUpperCase())),Ja=/\B([A-Z])/g,mn=ti(e=>e.replace(Ja,"-$1").toLowerCase()),ni=ti(e=>e.charAt(0).toUpperCase()+e.slice(1)),Ei=ti(e=>e?`on${ni(e)}`:""),xt=(e,t)=>!Object.is(e,t),Mu=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},Is=(e,t,n,u=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:u,value:n})},br=e=>{const t=parseFloat(e);return isNaN(t)?e:t},Ya=e=>{const t=ve(e)?Number(e):NaN;return isNaN(t)?e:t};let Yr;const ui=()=>Yr||(Yr=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function _r(e){if(J(e)){const t={};for(let n=0;n<e.length;n++){const u=e[n],i=ve(u)?ul(u):_r(u);if(i)for(const r in i)t[r]=i[r]}return t}else if(ve(e)||he(e))return e}const el=/;(?![^(]*\))/g,tl=/:([^]+)/,nl=/"(?:[^"\\]|\\[^])*"|'(?:[^'\\]|\\[^])*'|\\[^]|\/\*[^]*?\*\//g;function ul(e){const t={};return e.replace(nl,n=>n.startsWith("/*")?"":n).split(el).forEach(n=>{if(n){const u=n.split(tl);u.length>1&&(t[u[0].trim()]=u[1].trim())}}),t}function at(e){let t="";if(ve(e))t=e;else if(J(e))for(let n=0;n<e.length;n++){const u=at(e[n]);u&&(t+=u+" ")}else if(he(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const il="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",rl=hr(il);function Qs(e){return!!e||e===""}function ol(e,t,n){if(e.length!==t.length)return!1;let u=!0;for(let i=0;u&&i<e.length;i++)u=ii(e[i],t[i],n);return u}function eo(e,t,n){if(e.size!==t.size)return!1;const u=Array.from(t),i=new Uint8Array(u.length);for(const r of e){let o=-1;for(let s=0;s<u.length;s++)if(!i[s]&&ii(r,u[s],n)){o=s;break}if(o<0)return!1;i[o]=1}return!0}function sl(e,t,n){let u=Wt(e),i=Wt(t);if(u||i||(u=Ru(e),i=Ru(t),u||i))return u&&i?eo(e,t,n):!1;const r=Object.keys(e).length,o=Object.keys(t).length;if(r!==o)return!1;for(const s in e){const c=e.hasOwnProperty(s),a=t.hasOwnProperty(s);if(c&&!a||!c&&a||!ii(e[s],t[s],n))return!1}return String(e)===String(t)}function to(e,t,n,u){n||(n=[new Map,new Map]);const[i,r]=n;if(i.has(e)||r.has(t))return i.get(e)===t&&r.get(t)===e;i.set(e,t),r.set(t,e);const o=u(e,t,n);return i.delete(e),r.delete(t),o}function ii(e,t,n){if(e===t)return!0;let u=Jr(e),i=Jr(t);return u||i?u&&i?e.getTime()===t.getTime():!1:(u=dt(e),i=dt(t),u||i?e===t:(u=J(e),i=J(t),u||i?u&&i?to(e,t,n,ol):!1:(u=he(e),i=he(t),u||i?!u||!i?!1:to(e,t,n,sl):String(e)===String(t))))}const Rs=e=>!!(e&&e.__v_isRef===!0),oe=e=>ve(e)?e:e==null?"":J(e)||he(e)&&(e.toString===qs||!ne(e.toString))?Rs(e)?oe(e.value):JSON.stringify(e,Os,2):String(e),Os=(e,t)=>Rs(t)?Os(e,t.value):Wt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[u,i],r)=>(n[vi(u,r)+" =>"]=i,n),{})}:Ru(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>vi(n))}:dt(t)?vi(t):he(t)&&!J(t)&&!Fs(t)?String(t):t,vi=(e,t="")=>{var n;return dt(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};/**
* @vue/reactivity v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Re;class cl{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!t&&Re&&(Re.active?(this.parent=Re,this.index=(Re.scopes||(Re.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,n;if(this.scopes){const u=this.scopes.slice();for(t=0,n=u.length;t<n;t++)u[t].pause()}for(t=0,n=this.effects.length;t<n;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,n;if(this.scopes){const i=this.scopes.slice();for(t=0,n=i.length;t<n;t++)i[t].resume()}const u=this.effects.slice();for(t=0,n=u.length;t<n;t++)u[t].resume()}}run(t){if(this._active){const n=Re;try{return Re=this,t()}finally{Re=n}}}on(){++this._on===1&&(this.prevScope=Re,Re=this)}off(){if(this._on>0&&--this._on===0){if(Re===this)Re=this.prevScope;else{let t=Re;for(;t;){if(t.prevScope===this){t.prevScope=this.prevScope;break}t=t.prevScope}}this.prevScope=void 0}}stop(t){if(this._active){this._active=!1;let n,u;for(n=0,u=this.effects.length;n<u;n++)this.effects[n].stop();for(this.effects.length=0,n=0,u=this.cleanups.length;n<u;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){const i=this.scopes.slice();for(n=0,u=i.length;n<u;n++)i[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0}}}function al(){return Re}let ye;const ki=new WeakSet;class Ls{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Re&&(Re.active?Re.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,ki.has(this)&&(ki.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Ns(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,no(this),$s(this);const t=ye,n=lt;ye=this,lt=!0;try{return this.fn()}finally{Hs(this),ye=t,lt=n,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)wr(t);this.deps=this.depsTail=void 0,no(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?ki.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Gi(this)&&this.run()}get dirty(){return Gi(this)}}let Bs=0,jn,zn;function Ns(e,t=!1){if(e.flags|=8,t){e.next=zn,zn=e;return}e.next=jn,jn=e}function xr(){Bs++}function yr(){if(--Bs>0)return;if(zn){let t=zn;for(zn=void 0;t;){const n=t.next;t.next=void 0,t.flags&=-9,t=n}}let e;for(;jn;){let t=jn;for(jn=void 0;t;){const n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(u){e||(e=u)}t=n}}if(e)throw e}function $s(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function Hs(e){let t,n=e.depsTail,u=n;for(;u;){const i=u.prevDep;u.version===-1?(u===n&&(n=i),wr(u),ll(u)):t=u,u.dep.activeLink=u.prevActiveLink,u.prevActiveLink=void 0,u=i}e.deps=t,e.depsTail=n}function Gi(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(js(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function js(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===Zn)||(e.globalVersion=Zn,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!Gi(e))))return;e.flags|=2;const t=e.dep,n=ye,u=lt;ye=e,lt=!0;try{$s(e);const i=e.fn(e._value);(t.version===0||xt(i,e._value))&&(e.flags|=128,e._value=i,t.version++)}catch(i){throw t.version++,i}finally{ye=n,lt=u,Hs(e),e.flags&=-3}}function wr(e,t=!1){const{dep:n,prevSub:u,nextSub:i}=e;if(u&&(u.nextSub=i,e.prevSub=void 0),i&&(i.prevSub=u,e.nextSub=void 0),n.subs===e&&(n.subs=u,!u&&n.computed)){n.computed.flags&=-5;for(let r=n.computed.deps;r;r=r.nextDep)wr(r,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function ll(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let lt=!0;const zs=[];function Lt(){zs.push(lt),lt=!1}function Bt(){const e=zs.pop();lt=e===void 0?!0:e}function no(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const n=ye;ye=void 0;try{t()}finally{ye=n}}}let Zn=0;class fl{constructor(t,n){this.sub=t,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Er{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!ye||!lt||ye===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==ye)n=this.activeLink=new fl(ye,this),ye.deps?(n.prevDep=ye.depsTail,ye.depsTail.nextDep=n,ye.depsTail=n):ye.deps=ye.depsTail=n,Us(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const u=n.nextDep;u.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=u),n.prevDep=ye.depsTail,n.nextDep=void 0,ye.depsTail.nextDep=n,ye.depsTail=n,ye.deps===n&&(ye.deps=u)}return n}trigger(t){this.version++,Zn++,this.notify(t)}notify(t){xr();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{yr()}}}function Us(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let u=t.deps;u;u=u.nextDep)Us(u)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}const Wi=new WeakMap,dn=Symbol(""),Ki=Symbol(""),Jn=Symbol("");function Le(e,t,n){if(lt&&ye){let u=Wi.get(e);u||Wi.set(e,u=new Map);let i=u.get(n);i||(u.set(n,i=new Er),i.map=u,i.key=n),i.track()}}function Ft(e,t,n,u,i,r){const o=Wi.get(e);if(!o){Zn++;return}const s=c=>{c&&c.trigger()};if(xr(),t==="clear")o.forEach(s);else{const c=J(e),a=c&&gr(n);if(c&&n==="length"){const l=Number(u);o.forEach((f,d)=>{(d==="length"||d===Jn||!dt(d)&&d>=l)&&s(f)})}else switch((n!==void 0||o.has(void 0))&&s(o.get(n)),a&&s(o.get(Jn)),t){case"add":c?a&&s(o.get("length")):(s(o.get(dn)),Wt(e)&&s(o.get(Ki)));break;case"delete":c||(s(o.get(dn)),Wt(e)&&s(o.get(Ki)));break;case"set":Wt(e)&&s(o.get(dn));break}}yr()}function yn(e){const t=ae(e);return t===e||(Le(t,"iterate",Jn),rt(e))?t:kt(e)?Rt(e)?t.map(n=>Xt(ot(n))):t.map(Xt):t.map(ot)}function ri(e){return Le(e=ae(e),"iterate",Jn),e}function _t(e,t){return kt(e)?Xt(Rt(e)?ot(t):t):ot(t)}const dl={__proto__:null,[Symbol.iterator](){return Ai(this,Symbol.iterator,e=>_t(this,e))},concat(...e){return yn(this).concat(...e.map(t=>J(t)?yn(t):t))},entries(){return Ai(this,"entries",e=>(e[1]=_t(this,e[1]),e))},every(e,t){return Dt(this,"every",e,t,void 0,arguments)},filter(e,t){return Dt(this,"filter",e,t,n=>n.map(u=>_t(this,u)),arguments)},find(e,t){return Dt(this,"find",e,t,n=>_t(this,n),arguments)},findIndex(e,t){return Dt(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return Dt(this,"findLast",e,t,n=>_t(this,n),arguments)},findLastIndex(e,t){return Dt(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return Dt(this,"forEach",e,t,void 0,arguments)},includes(...e){return Ci(this,"includes",e)},indexOf(...e){return Ci(this,"indexOf",e)},join(e){return yn(this).join(e)},lastIndexOf(...e){return Ci(this,"lastIndexOf",e)},map(e,t){return Dt(this,"map",e,t,void 0,arguments)},pop(){return Rn(this,"pop")},push(...e){return Rn(this,"push",e)},reduce(e,...t){return uo(this,"reduce",e,t)},reduceRight(e,...t){return uo(this,"reduceRight",e,t)},shift(){return Rn(this,"shift")},some(e,t){return Dt(this,"some",e,t,void 0,arguments)},splice(...e){return Rn(this,"splice",e)},toReversed(){return yn(this).toReversed()},toSorted(e){return yn(this).toSorted(e)},toSpliced(...e){return yn(this).toSpliced(...e)},unshift(...e){return Rn(this,"unshift",e)},values(){return Ai(this,"values",e=>_t(this,e))}};function Ai(e,t,n){const u=ri(e),i=u[t]();return u!==e&&!rt(e)&&(i._next=i.next,i.next=()=>{const r=i._next();return r.done||(r.value=n(r.value)),r}),i}const pl=Array.prototype;function Dt(e,t,n,u,i,r){const o=ri(e),s=o!==e&&!rt(e),c=o[t];if(c!==pl[t]){const f=c.apply(e,r);return s?ot(f):f}let a=n;o!==e&&(s?a=function(f,d){return n.call(this,_t(e,f),d,e)}:n.length>2&&(a=function(f,d){return n.call(this,f,d,e)}));const l=c.call(o,a,u);return s&&i?i(l):l}function uo(e,t,n,u){const i=ri(e),r=i!==e&&!rt(e);let o=n,s=!1;i!==e&&(r?(s=u.length===0,o=function(a,l,f){return s&&(s=!1,a=_t(e,a)),n.call(this,a,_t(e,l),f,e)}):n.length>3&&(o=function(a,l,f){return n.call(this,a,l,f,e)}));const c=i[t](o,...u);return s?_t(e,c):c}function Ci(e,t,n){const u=ae(e);Le(u,"iterate",Jn);const i=u[t](...n);return(i===-1||i===!1)&&Ar(n[0])?(n[0]=ae(n[0]),u[t](...n)):i}function Rn(e,t,n=[]){Lt(),xr();const u=ae(e)[t].apply(e,n);return yr(),Bt(),u}const hl=hr("__proto__,__v_isRef,__isVue"),Vs=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(dt));function ml(e){dt(e)||(e=String(e));const t=ae(this);return Le(t,"has",e),t.hasOwnProperty(e)}class Gs{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,u){if(n==="__v_skip")return t.__v_skip;const i=this._isReadonly,r=this._isShallow;if(n==="__v_isReactive")return!i;if(n==="__v_isReadonly")return i;if(n==="__v_isShallow")return r;if(n==="__v_raw")return u===(i?r?Al:Zs:r?Xs:Ks).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(u)?t:void 0;const o=J(t);if(!i){let c;if(o&&(c=dl[n]))return c;if(n==="hasOwnProperty")return ml}const s=Reflect.get(t,n,Ne(t)?t:u);if((dt(n)?Vs.has(n):hl(n))||(i||Le(t,"get",n),r))return s;if(Ne(s)){const c=o&&gr(n)?s:s.value;return i&&he(c)?Zi(c):c}return he(s)?i?Zi(s):oi(s):s}}class Ws extends Gs{constructor(t=!1){super(!1,t)}set(t,n,u,i){let r=t[n];const o=J(t)&&gr(n);if(!this._isShallow){const a=kt(r);if(!rt(u)&&!kt(u)&&(r=ae(r),u=ae(u)),!o&&Ne(r)&&!Ne(u))return a||(r.value=u),!0}const s=o?Number(n)<t.length:de(t,n),c=Reflect.set(t,n,u,Ne(t)?t:i);return t===ae(i)&&c&&(s?xt(u,r)&&Ft(t,"set",n,u):Ft(t,"add",n,u)),c}deleteProperty(t,n){const u=de(t,n);t[n];const i=Reflect.deleteProperty(t,n);return i&&u&&Ft(t,"delete",n,void 0),i}has(t,n){const u=Reflect.has(t,n);return(!dt(n)||!Vs.has(n))&&Le(t,"has",n),u}ownKeys(t){return Le(t,"iterate",J(t)?"length":dn),Reflect.ownKeys(t)}}class gl extends Gs{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const bl=new Ws,_l=new gl,xl=new Ws(!0);const Xi=e=>e,yu=e=>Reflect.getPrototypeOf(e);function yl(e,t,n){return function(...u){const i=this.__v_raw,r=ae(i),o=Wt(r),s=e==="entries"||e===Symbol.iterator&&o,c=e==="keys"&&o,a=i[e](...u),l=n?Xi:t?Xt:ot;return!t&&Le(r,"iterate",c?Ki:dn),Pe(Object.create(a),{next(){const{value:f,done:d}=a.next();return d?{value:f,done:d}:{value:s?[l(f[0]),l(f[1])]:l(f),done:d}}})}}function wu(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function wl(e,t){const n={get(i){const r=this.__v_raw,o=ae(r),s=ae(i);e||(xt(i,s)&&Le(o,"get",i),Le(o,"get",s));const{has:c}=yu(o),a=t?Xi:e?Xt:ot;if(c.call(o,i))return a(r.get(i));if(c.call(o,s))return a(r.get(s));r!==o&&r.get(i)},get size(){const i=this.__v_raw;return!e&&Le(ae(i),"iterate",dn),i.size},has(i){const r=this.__v_raw,o=ae(r),s=ae(i);return e||(xt(i,s)&&Le(o,"has",i),Le(o,"has",s)),i===s?r.has(i):r.has(i)||r.has(s)},forEach(i,r){const o=this,s=o.__v_raw,c=ae(s),a=t?Xi:e?Xt:ot;return!e&&Le(c,"iterate",dn),s.forEach((l,f)=>i.call(r,a(l),a(f),o))}};return Pe(n,e?{add:wu("add"),set:wu("set"),delete:wu("delete"),clear:wu("clear")}:{add(i){const r=ae(this),o=yu(r),s=ae(i),c=!t&&!rt(i)&&!kt(i)?s:i;return o.has.call(r,c)||xt(i,c)&&o.has.call(r,i)||xt(s,c)&&o.has.call(r,s)||(r.add(c),Ft(r,"add",c,c)),this},set(i,r){!t&&!rt(r)&&!kt(r)&&(r=ae(r));const o=ae(this),{has:s,get:c}=yu(o);let a=s.call(o,i);a||(i=ae(i),a=s.call(o,i));const l=c.call(o,i);return o.set(i,r),a?xt(r,l)&&Ft(o,"set",i,r):Ft(o,"add",i,r),this},delete(i){const r=ae(this),{has:o,get:s}=yu(r);let c=o.call(r,i);c||(i=ae(i),c=o.call(r,i)),s&&s.call(r,i);const a=r.delete(i);return c&&Ft(r,"delete",i,void 0),a},clear(){const i=ae(this),r=i.size!==0,o=i.clear();return r&&Ft(i,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(i=>{n[i]=yl(i,e,t)}),n}function vr(e,t){const n=wl(e,t);return(u,i,r)=>i==="__v_isReactive"?!e:i==="__v_isReadonly"?e:i==="__v_raw"?u:Reflect.get(de(n,i)&&i in u?n:u,i,r)}const El={get:vr(!1,!1)},vl={get:vr(!1,!0)},kl={get:vr(!0,!1)};const Ks=new WeakMap,Xs=new WeakMap,Zs=new WeakMap,Al=new WeakMap;function Cl(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function oi(e){return kt(e)?e:kr(e,!1,bl,El,Ks)}function Js(e){return kr(e,!1,xl,vl,Xs)}function Zi(e){return kr(e,!0,_l,kl,Zs)}function kr(e,t,n,u,i){if(!he(e)||e.__v_raw&&!(t&&e.__v_isReactive)||e.__v_skip||!Object.isExtensible(e))return e;const r=i.get(e);if(r)return r;const o=Cl(Xa(e));if(o===0)return e;const s=new Proxy(e,o===2?u:n);return i.set(e,s),s}function Rt(e){return kt(e)?Rt(e.__v_raw):!!(e&&e.__v_isReactive)}function kt(e){return!!(e&&e.__v_isReadonly)}function rt(e){return!!(e&&e.__v_isShallow)}function Ar(e){return e?!!e.__v_raw:!1}function ae(e){const t=e&&e.__v_raw;return t?ae(t):e}function Sl(e){return!de(e,"__v_skip")&&Object.isExtensible(e)&&Is(e,"__v_skip",!0),e}const ot=e=>he(e)?oi(e):e,Xt=e=>he(e)?Zi(e):e;function Ne(e){return e?e.__v_isRef===!0:!1}function Kt(e){return Ys(e,!1)}function Dl(e){return Ys(e,!0)}function Ys(e,t){return Ne(e)?e:new Tl(e,t)}class Tl{constructor(t,n){this.dep=new Er,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?t:ae(t),this._value=n?t:ot(t),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(t){const n=this._rawValue,u=this.__v_isShallow||rt(t)||kt(t);t=u?t:ae(t),xt(t,n)&&(this._rawValue=t,this._value=u?t:ot(t),this.dep.trigger())}}function Te(e){return Ne(e)?e.value:e}const Pl={get:(e,t,n)=>t==="__v_raw"?e:Te(Reflect.get(e,t,n)),set:(e,t,n,u)=>{const i=e[t];return Ne(i)&&!Ne(n)?(i.value=n,!0):Reflect.set(e,t,n,u)}};function ec(e){return Rt(e)?e:new Proxy(e,Pl)}class Ml{constructor(t,n,u){this.fn=t,this.setter=n,this._value=void 0,this.dep=new Er(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Zn-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=u}notify(){if(this.flags|=16,!(this.flags&8)&&ye!==this)return Ns(this,!0),!0}get value(){const t=this.dep.track();return js(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function ql(e,t,n=!1){let u,i;return ne(e)?u=e:(u=e.get,i=e.set),new Ml(u,i,n)}const Eu={},Ou=new WeakMap;let on;function Fl(e,t=!1,n=on){if(n){let u=Ou.get(n);u||Ou.set(n,u=[]),u.push(e)}}function Il(e,t,n=xe){const{immediate:u,deep:i,once:r,scheduler:o,augmentJob:s,call:c}=n,a=_=>i?_:rt(_)||i===!1||i===0?It(_,1):It(_);let l,f,d,p,m=!1,w=!1;if(Ne(e)?(f=()=>e.value,m=rt(e)):Rt(e)?(f=()=>a(e),m=!0):J(e)?(w=!0,m=e.some(_=>Rt(_)||rt(_)),f=()=>e.map(_=>{if(Ne(_))return _.value;if(Rt(_))return a(_);if(ne(_))return c?c(_,2):_()})):ne(e)?t?f=c?()=>c(e,2):e:f=()=>{if(d){Lt();try{d()}finally{Bt()}}const _=on;on=l;try{return c?c(e,3,[p]):e(p)}finally{on=_}}:f=Et,t&&i){const _=f,v=i===!0?1/0:i;f=()=>It(_(),v)}const A=al(),S=()=>{l.stop(),A&&A.active&&mr(A.effects,l)};if(r&&t){const _=t;t=(...v)=>{const M=_(...v);return S(),M}}let E=w?new Array(e.length).fill(Eu):Eu;const g=_=>{if(!(!(l.flags&1)||!l.dirty&&!_))if(t){const v=l.run();if(_||i||m||(w?v.some((M,q)=>xt(M,E[q])):xt(v,E))){d&&d();const M=on;on=l;try{const q=[v,E===Eu?void 0:w&&E[0]===Eu?[]:E,p];E=v,c?c(t,3,q):t(...q)}finally{on=M}}}else l.run()};return s&&s(g),l=new Ls(f),l.scheduler=o?()=>o(g,!1):g,p=_=>Fl(_,!1,l),d=l.onStop=()=>{const _=Ou.get(l);if(_){if(c)c(_,4);else for(const v of _)v();Ou.delete(l)}},t?u?g(!0):E=l.run():o?o(g.bind(null,!0),!0):l.run(),S.pause=l.pause.bind(l),S.resume=l.resume.bind(l),S.stop=S,S}function It(e,t=1/0,n){if(t<=0||!he(e)||e.__v_skip||(n=n||new Map,(n.get(e)||0)>=t))return e;if(n.set(e,t),t--,Ne(e))It(e.value,t,n);else if(J(e))for(let u=0;u<e.length;u++)It(e[u],t,n);else if(Ru(e)||Wt(e))e.forEach(u=>{It(u,t,n)});else if(Fs(e)){for(const u in e)It(e[u],t,n);for(const u of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,u)&&It(e[u],t,n)}return e}/**
* @vue/runtime-core v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function mu(e,t,n,u){try{return u?e(...u):e()}catch(i){si(i,t,n)}}function st(e,t,n,u){if(ne(e)){const i=mu(e,t,n,u);return i&&Ms(i)&&i.catch(r=>{si(r,t,n)}),i}if(J(e)){const i=[];for(let r=0;r<e.length;r++)i.push(st(e[r],t,n,u));return i}}function si(e,t,n,u=!0){const i=t?t.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=t&&t.appContext.config||xe;if(t){let s=t.parent;const c=t.proxy,a=`https://vuejs.org/error-reference/#runtime-${n}`;for(;s;){const l=s.ec;if(l){for(let f=0;f<l.length;f++)if(l[f](e,c,a)===!1)return}s=s.parent}if(r){Lt(),mu(r,null,10,[e,c,a]),Bt();return}}Ql(e,n,i,u,o)}function Ql(e,t,n,u=!0,i=!1){if(i)throw e;console.error(e)}const ze=[];let gt=-1;const An=[];let jt=null,En=0;const tc=Promise.resolve();let Lu=null;function Cr(e){const t=Lu||tc;return e?t.then(this?e.bind(this):e):t}function Rl(e){let t=gt+1,n=ze.length;for(;t<n;){const u=t+n>>>1,i=ze[u],r=Yn(i);r<e||r===e&&i.flags&2?t=u+1:n=u}return t}function Sr(e){if(!(e.flags&1)){const t=Yn(e),n=ze[ze.length-1];!n||!(e.flags&2)&&t>=Yn(n)?ze.push(e):ze.splice(Rl(t),0,e),e.flags|=1,nc()}}function nc(){Lu||(Lu=tc.then(uc))}function Ol(e){if(!J(e))jt&&e.id===-1?jt.splice(En+1,0,e):e.flags&1||(An.push(e),e.flags|=1);else for(let t=0;t<e.length;t++)An.push(e[t]);nc()}function io(e,t,n=gt+1){for(;n<ze.length;n++){const u=ze[n];if(u&&u.flags&2){if(e&&u.id!==e.uid)continue;ze.splice(n,1),n--,u.flags&4&&(u.flags&=-2),u(),u.flags&4||(u.flags&=-2)}}}function Bu(e){if(An.length){const t=[...new Set(An)].sort((n,u)=>Yn(n)-Yn(u));if(An.length=0,jt){for(let n=0;n<t.length;n++)jt.push(t[n]);return}for(jt=t,En=0;En<jt.length;En++){const n=jt[En];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}jt=null,En=0}}const Yn=e=>e.id==null?e.flags&2?-1:1/0:e.id;function uc(e){try{for(gt=0;gt<ze.length;gt++){const t=ze[gt];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),mu(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;gt<ze.length;gt++){const t=ze[gt];t&&(t.flags&=-2)}gt=-1,ze.length=0,Bu(),Lu=null,(ze.length||An.length)&&uc()}}let Oe=null,ic=null;function Nu(e){const t=Oe;return Oe=e,ic=e&&e.type.__scopeId||null,t}function X(e,t=Oe,n){if(!t||e._n)return e;const u=(...i)=>{u._d&&Uu(-1);const r=Nu(t),o=Ot.length;let s;try{s=e(...i)}finally{for(let c=Ot.length;c>o;c--)Qr();Nu(r),u._d&&Uu(1)}return s};return u._n=!0,u._c=!0,u._d=!0,u}function ro(e,t){if(Oe===null)return e;const n=di(Oe),u=e.dirs||(e.dirs=[]);for(let i=0;i<t.length;i++){let[r,o,s,c=xe]=t[i];r&&(ne(r)&&(r={mounted:r,updated:r}),r.deep&&It(o),u.push({dir:r,instance:n,value:o,oldValue:void 0,arg:s,modifiers:c}))}return e}function bt(e,t,n,u){const i=e.dirs,r=t&&t.dirs;for(let o=0;o<i.length;o++){const s=i[o];r&&(s.oldValue=r[o].value);let c=s.dir[u];c&&(Lt(),st(c,n,8,[e.el,s,e,t]),Bt())}}function qu(e,t){if(Be){let n=Be.provides;const u=Be.parent&&Be.parent.provides;u===n&&(n=Be.provides=Object.create(u)),n[e]=t}}function ft(e,t,n=!1){const u=Rr();if(u||Dn){let i=Dn?Dn._context.provides:u?u.parent==null||u.ce?u.vnode.appContext&&u.vnode.appContext.provides:u.parent.provides:void 0;if(i&&e in i)return i[e];if(arguments.length>1)return n&&ne(t)?t.call(u&&u.proxy):t}}const Ll=Symbol.for("v-scx"),Bl=()=>ft(Ll);function Nl(e,t){return Dr(e,null,t)}function Un(e,t,n){return Dr(e,t,n)}function Dr(e,t,n=xe){const{immediate:u,deep:i,flush:r,once:o}=n,s=Pe({},n),c=t&&u||!t&&r!=="post";let a;if(ru){if(r==="sync"){const p=Bl();a=p.__watcherHandles||(p.__watcherHandles=[])}else if(!c){const p=()=>{};return p.stop=Et,p.resume=Et,p.pause=Et,p}}const l=Be;s.call=(p,m,w)=>st(p,l,m,w);let f=!1;r==="post"?s.scheduler=p=>{Ge(p,l&&l.suspense)}:r!=="sync"&&(f=!0,s.scheduler=(p,m)=>{m?p():Sr(p)}),s.augmentJob=p=>{t&&(p.flags|=4),f&&(p.flags|=2,l&&(p.id=l.uid,p.i=l))};const d=Il(e,t,s);return ru&&(a?a.push(d):c&&d()),d}function $l(e,t,n){const u=this.proxy,i=ve(e)?e.includes(".")?rc(u,e):()=>u[e]:e.bind(u,u);let r;ne(t)?r=t:(r=t.handler,n=t);const o=gu(this),s=Dr(i,r.bind(u),n);return o(),s}function rc(e,t){const n=t.split(".");return()=>{let u=e;for(let i=0;i<n.length&&u;i++)u=u[n[i]];return u}}const Hl=Symbol("_vte"),ci=e=>e.__isTeleport,ut=Symbol("_leaveCb"),On=Symbol("_enterCb");function jl(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Mr(()=>{e.isMounted=!0}),qr(()=>{e.isUnmounting=!0}),e}const tt=[Function,Array],oc={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:tt,onEnter:tt,onAfterEnter:tt,onEnterCancelled:tt,onBeforeLeave:tt,onLeave:tt,onAfterLeave:tt,onLeaveCancelled:tt,onBeforeAppear:tt,onAppear:tt,onAfterAppear:tt,onAppearCancelled:tt},sc=e=>{const t=e.subTree;return t.component?sc(t.component):t},zl={name:"BaseTransition",props:oc,setup(e,{slots:t}){const n=Rr(),u=jl();return()=>{const i=t.default&&lc(t.default(),!0),r=i&&i.length?cc(i):n.subTree?vt():void 0;if(!r)return;const o=ae(e),{mode:s}=o;if(u.isLeaving)return Si(r);const c=$u(r);if(!c)return Si(r);let a=Ji(c,o,u,n,f=>a=f);c.type!==qe&&eu(c,a);let l=n.subTree&&$u(n.subTree);if(l&&l.type!==qe&&!sn(l,c)&&sc(n).type!==qe){let f=Ji(l,o,u,n);if(eu(l,f),s==="out-in"&&c.type!==qe)return u.isLeaving=!0,f.afterLeave=()=>{u.isLeaving=!1,n.job.flags&8||n.update(),delete f.afterLeave,l=void 0},Si(r);s==="in-out"&&c.type!==qe?f.delayLeave=(d,p,m)=>{const w=ac(u,l);w[String(l.key)]=l,d[ut]=()=>{p(),d[ut]=void 0,delete a.delayedLeave,l=void 0},a.delayedLeave=()=>{m(),delete a.delayedLeave,l=void 0}}:l=void 0}else l&&(l=void 0);return r}}};function cc(e){let t=e[0];if(e.length>1){for(const n of e)if(n.type!==qe){t=n;break}}return t}const Ul=zl;function ac(e,t){const{leavingVNodes:n}=e;let u=n.get(t.type);return u||(u=Object.create(null),n.set(t.type,u)),u}function Ji(e,t,n,u,i){const{appear:r,mode:o,persisted:s=!1,onBeforeEnter:c,onEnter:a,onAfterEnter:l,onEnterCancelled:f,onBeforeLeave:d,onLeave:p,onAfterLeave:m,onLeaveCancelled:w,onBeforeAppear:A,onAppear:S,onAfterAppear:E,onAppearCancelled:g}=t,_=String(e.key),v=ac(n,e),M=(O,j)=>{O&&st(O,u,9,j)},q=(O,j)=>{const H=j[1];M(O,j),J(O)?O.every(I=>I.length<=1)&&H():O.length<=1&&H()},G={mode:o,persisted:s,beforeEnter(O){let j=c;if(!n.isMounted)if(r)j=A||c;else return;O[ut]&&O[ut](!0);const H=v[_];H&&sn(e,H)&&H.el[ut]&&H.el[ut](),M(j,[O])},enter(O){if(v[_]===e)return;let j=a,H=l,I=f;if(!n.isMounted)if(r)j=S||a,H=E||l,I=g||f;else return;let Y=!1;O[On]=se=>{Y||(Y=!0,se?M(I,[O]):M(H,[O]),G.delayedLeave&&G.delayedLeave(),O[On]=void 0)};const re=O[On].bind(null,!1);j?q(j,[O,re]):re()},leave(O,j){const H=String(e.key);if(O[On]&&O[On](!0),n.isUnmounting)return j();M(d,[O]);let I=!1;O[ut]=re=>{I||(I=!0,j(),re?M(w,[O]):M(m,[O]),O[ut]=void 0,v[H]===e&&delete v[H])};const Y=O[ut].bind(null,!1);v[H]=e,p?q(p,[O,Y]):Y()},clone(O){const j=Ji(O,t,n,u,i);return i&&i(j),j}};return G}function Si(e){if(ai(e))return e=Zt(e),e.children=null,e}function $u(e){if(!ai(e))return ci(e.type)&&e.children?cc(e.children):e;if(e.component)return e.component.subTree;const{shapeFlag:t,children:n}=e;if(n){if(t&16)return n[0];if(t&32&&ne(n.default))return n.default()}}function eu(e,t){if(e.shapeFlag&6&&e.component){e.transition=t;const n=e.component.subTree;eu(ci(n.type)&&$u(n)||n,t)}else e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function lc(e,t=!1,n){let u=[],i=0;for(let r=0;r<e.length;r++){let o=e[r];const s=n==null?o.key:String(n)+String(o.key!=null?o.key:r);o.type===pe?(o.patchFlag&128&&i++,u=u.concat(lc(o.children,t,s))):(t||o.type!==qe)&&u.push(s!=null?Zt(o,{key:s}):o)}if(i>1)for(let r=0;r<u.length;r++)u[r].patchFlag=-2;return u}function Tr(e,t){return ne(e)?Pe({name:e.name},t,{setup:e}):e}function fc(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function oo(e,t){let n;return!!((n=Object.getOwnPropertyDescriptor(e,t))&&!n.configurable)}const Hu=new WeakMap;function Cn(e,t,n,u,i=!1){if(J(e)){e.forEach((w,A)=>Cn(w,t&&(J(t)?t[A]:t),n,u,i));return}if(pn(u)&&!i){u.shapeFlag&512&&u.type.__asyncResolved&&u.component.subTree.component&&Cn(e,t,n,u.component.subTree);return}const r=u.shapeFlag&4?di(u.component):u.el,o=i?null:r,{i:s,r:c}=e,a=t&&t.r,l=s.refs===xe?s.refs={}:s.refs,f=s.setupState,d=ae(f),p=f===xe?Ps:w=>oo(l,w)?!1:de(d,w),m=(w,A)=>!(A&&oo(l,A));if(a!=null&&a!==c){if(so(t),ve(a))l[a]=null,p(a)&&(f[a]=null);else if(Ne(a)){const w=t;m(a,w.k)&&(a.value=null),w.k&&(l[w.k]=null)}}if(ne(c))mu(c,s,12,[o,l]);else{const w=ve(c),A=Ne(c);if(w||A){const S=()=>{if(e.f){const E=w?p(c)?f[c]:l[c]:m()||!e.k?c.value:l[e.k];if(i)J(E)&&mr(E,r);else if(J(E))E.includes(r)||E.push(r);else if(w)l[c]=[r],p(c)&&(f[c]=l[c]);else{const g=[r];m(c,e.k)&&(c.value=g),e.k&&(l[e.k]=g)}}else w?(l[c]=o,p(c)&&(f[c]=o)):A&&(m(c,e.k)&&(c.value=o),e.k&&(l[e.k]=o))};if(o){const E=()=>{S(),Hu.delete(e)};E.id=-1,Hu.set(e,E),Ge(E,n)}else so(e),S()}}}function so(e){const t=Hu.get(e);t&&(t.flags|=8,Hu.delete(e))}let co=!1;const wn=()=>{co||(console.error("Hydration completed but contains mismatches."),co=!0)},Vl=e=>e.namespaceURI.includes("svg")&&e.tagName!=="foreignObject",Gl=e=>e.namespaceURI.includes("MathML"),vu=e=>{if(e.nodeType===1){if(Vl(e))return"svg";if(Gl(e))return"mathml"}},ku=e=>e.nodeType===8;function Wl(e){const{mt:t,p:n,o:{patchProp:u,createText:i,nextSibling:r,parentNode:o,remove:s,insert:c,createComment:a}}=e,l=(g,_)=>{if(!_.hasChildNodes()){n(null,g,_),Bu(),_._vnode=g;return}f(_.firstChild,g,null,null,null),Bu(),_._vnode=g},f=(g,_,v,M,q,G=!1)=>{G=G||!!_.dynamicChildren;const O=ku(g)&&g.data==="[",j=()=>w(g,_,v,M,q,O),{type:H,ref:I,shapeFlag:Y,patchFlag:re}=_;let se=g.nodeType;_.el=g,re===-2&&(G=!1,_.dynamicChildren=null);let U=null;switch(H){case hn:se!==3?_.children===""?(c(_.el=i(""),o(g),g),U=g):U=j():(g.data!==_.children&&(wn(),g.data=_.children),U=r(g));break;case qe:E(g)?(U=r(g),S(_.el=g.content.firstChild,g,v)):se!==8||O?U=j():U=r(g);break;case Gn:if(O&&(g=r(g),se=g.nodeType),se===1||se===3){U=g;const ue=!_.children.length;for(let te=0;te<_.staticCount;te++)ue&&(_.children+=U.nodeType===1?U.outerHTML:U.data),te===_.staticCount-1&&(_.anchor=U),U=r(U);return O?r(U):U}else j();break;case pe:O?U=m(g,_,v,M,q,G):U=j();break;default:if(Y&1)(se!==1||_.type.toLowerCase()!==g.tagName.toLowerCase())&&!E(g)?U=j():U=d(g,_,v,M,q,G);else if(Y&6){_.slotScopeIds=q;const ue=o(g);if(O?U=A(g):ku(g)&&g.data==="teleport start"?U=A(g,g.data,"teleport end"):U=r(g),t(_,ue,null,v,M,vu(ue),G),(pn(_)||_.component.asyncDep)&&!_.component.subTree){let te;O?(te=Q(Gn),te.anchor=U?U.previousSibling:ue.lastChild):te=g.nodeType===3?me(""):Q(g.nodeType===8?qe:"div"),te.el=g,_.component.subTree=te}}else Y&64?se!==8?U=j():U=_.type.hydrate(g,_,v,M,q,G,e,p):Y&128&&(U=_.type.hydrate(g,_,v,M,vu(o(g)),q,G,e,f))}return I!=null&&Cn(I,null,M,_),U},d=(g,_,v,M,q,G)=>{G=G||!!_.dynamicChildren;const{type:O,dynamicProps:j,props:H,patchFlag:I,shapeFlag:Y,dirs:re,transition:se}=_,U=O==="input"||O==="option",ue=!!j;if(U||ue||I!==-1){re&&bt(_,null,v,"created");let te=!1;if(E(g)){te=qc(null,se)&&v&&v.vnode.props&&v.vnode.props.appear;const le=g.content.firstChild;if(te){const Ae=le.getAttribute("class");Ae&&(le.$cls=Ae),se.beforeEnter(le)}S(le,g,v),_.el=g=le}if(Y&16&&!(H&&(H.innerHTML||H.textContent))){let le=p(g.firstChild,_,g,v,M,q,G);for(le&&!Fu(g,1)&&wn();le;){const Ae=le;le=le.nextSibling,s(Ae)}}else if(Y&8){let le=_.children;le[0]===`
`&&(g.tagName==="PRE"||g.tagName==="TEXTAREA")&&(le=le.slice(1));const{textContent:Ae}=g;Ae!==le&&Ae!==le.replace(/\r\n|\r/g,`
`)&&(Fu(g,0)||wn(),g.textContent=_.children)}if(H){if(U||ue||!G||I&48){const le=g.tagName.includes("-"),Ae=g.namespaceURI.includes("svg")?"svg":g.namespaceURI.includes("MathML")?"mathml":void 0;for(const be in H)if(U&&(be.endsWith("value")||be==="indeterminate")||pu(be)&&!fn(be)||be[0]==="."||le&&!fn(be)||j&&j.includes(be)){if(Xl(g,be,H[be]))continue;u(g,be,null,H[be],Ae,v)}}else if(H.onClick)u(g,"onClick",null,H.onClick,void 0,v);else if(I&4&&Rt(H.style))for(const le in H.style)H.style[le]}let $e;($e=H&&H.onVnodeBeforeMount)&&nt($e,v,_),re&&bt(_,null,v,"beforeMount"),(($e=H&&H.onVnodeMounted)||re||te)&&Oc(()=>{$e&&nt($e,v,_),te&&se.enter(g),re&&bt(_,null,v,"mounted")},M)}return g.nextSibling},p=(g,_,v,M,q,G,O)=>{O=O||!!_.dynamicChildren;const j=_.children,H=j.length;let I=!1;for(let Y=0;Y<H;Y++){const re=O?j[Y]:j[Y]=it(j[Y]),se=re.type===hn;g?(se&&!O&&Y+1<H&&it(j[Y+1]).type===hn&&(c(i(g.data.slice(re.children.length)),v,r(g)),g.data=re.children),g=f(g,re,M,q,G,O)):se&&!re.children?c(re.el=i(""),v):(I||(I=!0,Fu(v,1)||wn()),n(null,re,v,null,M,q,vu(v),G))}return g},m=(g,_,v,M,q,G)=>{const{slotScopeIds:O}=_;O&&(q=q?q.concat(O):O);const j=o(g),H=p(r(g),_,j,v,M,q,G);return H&&ku(H)&&H.data==="]"?r(_.anchor=H):(wn(),c(_.anchor=a("]"),j,H),H)},w=(g,_,v,M,q,G)=>{if(Jl(g,_)||wn(),_.el=null,G){const H=A(g);for(;;){const I=r(g);if(I&&I!==H)s(I);else break}}const O=r(g),j=o(g);return s(g),n(null,_,j,O,v,M,vu(j),q),v&&(v.vnode.el=_.el,Ec(v,_.el)),O},A=(g,_="[",v="]")=>{let M=0;for(;g;)if(g=r(g),g&&ku(g)&&(g.data===_&&M++,g.data===v)){if(M===0)return r(g);M--}return g},S=(g,_,v)=>{const M=_.parentNode;M&&M.replaceChild(g,_);let q=v;for(;q;)q.vnode.el===_&&(q.vnode.el=q.subTree.el=g),q=q.parent},E=g=>g.nodeType===1&&g.tagName==="TEMPLATE";return[l,f]}const Kl=new Set(["src","srcset","href","poster"]);function Xl(e,t,n){return Kl.has(t)?e.getAttribute(t)===(n==null?null:`${n}`):!1}const ju="data-allow-mismatch",Zl={0:"text",1:"children",2:"class",3:"style",4:"attribute"};function Fu(e,t){if(t===0||t===1)for(;e&&!e.hasAttribute(ju);)e=e.parentElement;return Pr(e&&e.getAttribute(ju),t)}function Pr(e,t){if(e==null)return!1;if(e==="")return!0;{const n=e.split(",");return t===0&&n.includes("children")?!0:n.includes(Zl[t])}}function Jl(e,t){return Fu(e.parentElement,1)||Yl(e)||e0(t)}function Yl(e){return e.nodeType===1&&Pr(e.getAttribute(ju),1)}function e0({props:e}){const t=e&&e[ju];return typeof t=="string"&&Pr(t,1)}ui().requestIdleCallback;ui().cancelIdleCallback;const pn=e=>!!e.type.__asyncLoader,ai=e=>e.type.__isKeepAlive;function dc(e,t){hc(e,"a",t)}function pc(e,t){hc(e,"da",t)}function hc(e,t,n=Be){const u=e.__wdc||(e.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return e()});if(li(t,u,n),n){let i=n.parent;for(;i&&i.parent;)ai(i.parent.vnode)&&t0(u,t,n,i),i=i.parent}}function t0(e,t,n,u){const i=li(t,e,u,!0);mc(()=>{mr(u[t],i)},n)}function li(e,t,n=Be,u=!1){if(n){const i=n[e]||(n[e]=[]),r=t.__weh||(t.__weh=(...o)=>{Lt();const s=gu(n),c=st(t,n,e,o);return s(),Bt(),c});return u?i.unshift(r):i.push(r),r}}const Nt=e=>(t,n=Be)=>{(!ru||e==="sp")&&li(e,(...u)=>t(...u),n)},n0=Nt("bm"),Mr=Nt("m"),u0=Nt("bu"),i0=Nt("u"),qr=Nt("bum"),mc=Nt("um"),r0=Nt("sp"),o0=Nt("rtg"),s0=Nt("rtc");function c0(e,t=Be){li("ec",e,t)}const a0="components";function gn(e,t){return f0(a0,e,!0,t)||e}const l0=Symbol.for("v-ndc");function f0(e,t,n=!0,u=!1){const i=Oe||Be;if(i){const r=i.type;{const s=U0(r,!1);if(s&&(s===t||s===Ue(t)||s===ni(Ue(t))))return r}const o=ao(i[e]||r[e],t)||ao(i.appContext[e],t);return!o&&u?r:o}}function ao(e,t){return e&&(e[t]||e[Ue(t)]||e[ni(Ue(t))])}function Je(e,t,n,u){let i;const r=n,o=J(e);if(o||ve(e)){const s=o&&Rt(e);let c=!1,a=!1;s&&(c=!rt(e),a=kt(e),e=ri(e)),i=new Array(e.length);for(let l=0,f=e.length;l<f;l++)i[l]=t(c?a?Xt(ot(e[l])):ot(e[l]):e[l],l,void 0,r)}else if(typeof e=="number"){i=new Array(e);for(let s=0;s<e;s++)i[s]=t(s+1,s,void 0,r)}else if(he(e))if(e[Symbol.iterator])i=Array.from(e,(s,c)=>t(s,c,void 0,r));else{const s=Object.keys(e);i=new Array(s.length);for(let c=0,a=s.length;c<a;c++){const l=s[c];i[c]=t(e[l],l,c,r)}}else i=[];return i}function Sn(e,t,n,u,i,r){if(n==null&&(n={}),Oe.ce||Oe.parent&&pn(Oe.parent)&&Oe.parent.ce){const a=n,l=Object.keys(a).length>0;return t!=="default"&&(a.name=t),z(),nu(pe,null,[Q("slot",a,u)],l?-2:64)}let o=e[t];o&&o._c&&(o._d=!1);const s=Ot.length;z();let c;try{const a=o&&gc(o(n)),l=n.key||r||a&&a.key;c=nu(pe,{key:(l&&!dt(l)?l:`_${t}`)+(!a&&u?"_fb":"")},a||(u?u():[]),a&&e._===1?64:-2)}catch(a){for(let l=Ot.length;l>s;l--)Qr();throw a}finally{o&&o._c&&(o._d=!0)}return c.scopeId&&(c.slotScopeIds=[c.scopeId+"-s"]),c}function gc(e){return e.some(t=>uu(t)?!(t.type===qe||t.type===pe&&!gc(t.children)):!0)?e:null}const Yi=e=>e?Nc(e)?di(e):Yi(e.parent):null,Vn=Pe(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Yi(e.parent),$root:e=>Yi(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>_c(e),$forceUpdate:e=>e.f||(e.f=()=>{Sr(e.update)}),$nextTick:e=>e.n||(e.n=Cr.bind(e.proxy)),$watch:e=>$l.bind(e)}),Di=(e,t)=>e!==xe&&!e.__isScriptSetup&&de(e,t),d0={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:u,data:i,props:r,accessCache:o,type:s,appContext:c}=e;if(t[0]!=="$"){const d=o[t];if(d!==void 0)switch(d){case 1:return u[t];case 2:return i[t];case 4:return n[t];case 3:return r[t]}else{if(Di(u,t))return o[t]=1,u[t];if(i!==xe&&de(i,t))return o[t]=2,i[t];if(de(r,t))return o[t]=3,r[t];if(n!==xe&&de(n,t))return o[t]=4,n[t];er&&(o[t]=0)}}const a=Vn[t];let l,f;if(a)return t==="$attrs"&&Le(e.attrs,"get",""),a(e);if((l=s.__cssModules)&&(l=l[t]))return l;if(n!==xe&&de(n,t))return o[t]=4,n[t];if(f=c.config.globalProperties,de(f,t))return f[t]},set({_:e},t,n){const{data:u,setupState:i,ctx:r}=e;return Di(i,t)?(i[t]=n,!0):u!==xe&&de(u,t)?(u[t]=n,!0):de(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(r[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:u,appContext:i,props:r,type:o}},s){let c;return!!(n[s]||e!==xe&&s[0]!=="$"&&de(e,s)||Di(t,s)||de(r,s)||de(u,s)||de(Vn,s)||de(i.config.globalProperties,s)||(c=o.__cssModules)&&c[s])},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:de(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function lo(e){return J(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let er=!0;function p0(e){const t=_c(e),n=e.proxy,u=e.ctx;er=!1,t.beforeCreate&&fo(t.beforeCreate,e,"bc");const{data:i,computed:r,methods:o,watch:s,provide:c,inject:a,created:l,beforeMount:f,mounted:d,beforeUpdate:p,updated:m,activated:w,deactivated:A,beforeDestroy:S,beforeUnmount:E,destroyed:g,unmounted:_,render:v,renderTracked:M,renderTriggered:q,errorCaptured:G,serverPrefetch:O,expose:j,inheritAttrs:H,components:I,directives:Y,filters:re}=t;if(a&&h0(a,u,null),o)for(const ue in o){const te=o[ue];ne(te)&&(u[ue]=te.bind(n))}if(i){const ue=i.call(n,n);he(ue)&&(e.data=oi(ue))}if(er=!0,r)for(const ue in r){const te=r[ue],$e=ne(te)?te.bind(n,n):ne(te.get)?te.get.bind(n,n):Et,le=!ne(te)&&ne(te.set)?te.set.bind(n):Et,Ae=Fe({get:$e,set:le});Object.defineProperty(u,ue,{enumerable:!0,configurable:!0,get:()=>Ae.value,set:be=>Ae.value=be})}if(s)for(const ue in s)bc(s[ue],u,n,ue);if(c){const ue=ne(c)?c.call(n):c;Reflect.ownKeys(ue).forEach(te=>{qu(te,ue[te])})}l&&fo(l,e,"c");function U(ue,te){J(te)?te.forEach($e=>ue($e.bind(n))):te&&ue(te.bind(n))}if(U(n0,f),U(Mr,d),U(u0,p),U(i0,m),U(dc,w),U(pc,A),U(c0,G),U(s0,M),U(o0,q),U(qr,E),U(mc,_),U(r0,O),J(j))if(j.length){const ue=e.exposed||(e.exposed={});j.forEach(te=>{Object.defineProperty(ue,te,{get:()=>n[te],set:$e=>n[te]=$e,enumerable:!0})})}else e.exposed||(e.exposed={});v&&e.render===Et&&(e.render=v),H!=null&&(e.inheritAttrs=H),I&&(e.components=I),Y&&(e.directives=Y),O&&fc(e)}function h0(e,t,n=Et){J(e)&&(e=tr(e));for(const u in e){const i=e[u];let r;he(i)?"default"in i?r=ft(i.from||u,i.default,!0):r=ft(i.from||u):r=ft(i),Ne(r)?Object.defineProperty(t,u,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):t[u]=r}}function fo(e,t,n){st(J(e)?e.map(u=>u.bind(t.proxy)):e.bind(t.proxy),t,n)}function bc(e,t,n,u){let i=u.includes(".")?rc(n,u):()=>n[u];if(ve(e)){const r=t[e];ne(r)&&Un(i,r)}else if(ne(e))Un(i,e.bind(n));else if(he(e))if(J(e))e.forEach(r=>bc(r,t,n,u));else{const r=ne(e.handler)?e.handler.bind(n):t[e.handler];ne(r)&&Un(i,r,e)}}function _c(e){const t=e.type,{mixins:n,extends:u}=t,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=e.appContext,s=r.get(t);let c;return s?c=s:!i.length&&!n&&!u?c=t:(c={},i.length&&i.forEach(a=>zu(c,a,o,!0)),zu(c,t,o)),he(t)&&r.set(t,c),c}function zu(e,t,n,u=!1){const{mixins:i,extends:r}=t;r&&zu(e,r,n,!0),i&&i.forEach(o=>zu(e,o,n,!0));for(const o in t)if(!(u&&o==="expose")){const s=m0[o]||n&&n[o];e[o]=s?s(e[o],t[o]):t[o]}return e}const m0={data:po,props:ho,emits:ho,methods:Nn,computed:Nn,beforeCreate:He,created:He,beforeMount:He,mounted:He,beforeUpdate:He,updated:He,beforeDestroy:He,beforeUnmount:He,destroyed:He,unmounted:He,activated:He,deactivated:He,errorCaptured:He,serverPrefetch:He,components:Nn,directives:Nn,watch:b0,provide:po,inject:g0};function po(e,t){return t?e?function(){return Pe(ne(e)?e.call(this,this):e,ne(t)?t.call(this,this):t)}:t:e}function g0(e,t){return Nn(tr(e),tr(t))}function tr(e){if(J(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function He(e,t){return e?[...new Set([].concat(e,t))]:t}function Nn(e,t){return e?Pe(Object.create(null),e,t):t}function ho(e,t){return e?J(e)&&J(t)?[...new Set([...e,...t])]:Pe(Object.create(null),lo(e),lo(t??{})):t}function b0(e,t){if(!e)return t;if(!t)return e;const n=Pe(Object.create(null),e);for(const u in t)n[u]=He(e[u],t[u]);return n}function xc(){return{app:null,config:{isNativeTag:Ps,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let _0=0;function x0(e,t){return function(u,i=null){ne(u)||(u=Pe({},u)),i!=null&&!he(i)&&(i=null);const r=xc(),o=new WeakSet,s=[];let c=!1;const a=r.app={_uid:_0++,_component:u,_props:i,_container:null,_context:r,_instance:null,version:Hc,get config(){return r.config},set config(l){},use(l,...f){return o.has(l)||(l&&ne(l.install)?(o.add(l),l.install(a,...f)):ne(l)&&(o.add(l),l(a,...f))),a},mixin(l){return r.mixins.includes(l)||r.mixins.push(l),a},component(l,f){return f?(r.components[l]=f,a):r.components[l]},directive(l,f){return f?(r.directives[l]=f,a):r.directives[l]},mount(l,f,d){if(!c){const p=a._ceVNode||Q(u,i);return p.appContext=r,d===!0?d="svg":d===!1&&(d=void 0),f&&t?t(p,l):e(p,l,d),c=!0,a._container=l,l.__vue_app__=a,di(p.component)}},onUnmount(l){s.push(l)},unmount(){c&&(st(s,a._instance,16),e(null,a._container),delete a._container.__vue_app__)},provide(l,f){return r.provides[l]=f,a},runWithContext(l){const f=Dn;Dn=a;try{return l()}finally{Dn=f}}};return a}}let Dn=null;const y0=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${Ue(t)}Modifiers`]||e[`${mn(t)}Modifiers`];function w0(e,t,...n){if(e.isUnmounted)return;const u=e.vnode.props||xe;let i=n;const r=t.startsWith("update:"),o=r&&y0(u,t.slice(7));o&&(o.trim&&(i=n.map(l=>ve(l)?l.trim():l)),o.number&&(i=i.map(br)));let s,c=u[s=Ei(t)]||u[s=Ei(Ue(t))];!c&&r&&(c=u[s=Ei(mn(t))]),c&&st(c,e,6,i);const a=u[s+"Once"];if(a){if(!e.emitted)e.emitted={};else if(e.emitted[s])return;e.emitted[s]=!0,st(a,e,6,i)}}const E0=new WeakMap;function yc(e,t,n=!1){const u=n?E0:t.emitsCache,i=u.get(e);if(i!==void 0)return i;const r=e.emits;let o={},s=!1;if(!ne(e)){const c=a=>{const l=yc(a,t,!0);l&&(s=!0,Pe(o,l))};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!r&&!s?(he(e)&&u.set(e,null),null):(J(r)?r.forEach(c=>o[c]=null):Pe(o,r),he(e)&&u.set(e,o),o)}function fi(e,t){return!e||!pu(t)?!1:(t=t.slice(2),t=t==="Once"?t:t.replace(/Once$/,""),de(e,t[0].toLowerCase()+t.slice(1))||de(e,mn(t))||de(e,t))}function Ti(e){const{type:t,vnode:n,proxy:u,withProxy:i,propsOptions:[r],slots:o,attrs:s,emit:c,render:a,renderCache:l,props:f,data:d,setupState:p,ctx:m,inheritAttrs:w}=e,A=Nu(e);let S,E;try{if(n.shapeFlag&4){const _=i||u,v=_;S=it(a.call(v,_,l,f,p,d,m)),E=s}else{const _=t;S=it(_.length>1?_(f,{attrs:s,slots:o,emit:c}):_(f,null)),E=t.props?s:v0(s)}}catch(_){Ot.length=0,si(_,e,1),S=Q(qe)}let g=S;if(E&&w!==!1){const _=Object.keys(E),{shapeFlag:v}=g;_.length&&v&7&&(r&&_.some(ei)&&(E=k0(E,r)),g=Zt(g,E,!1,!0))}if(n.dirs&&(g=Zt(g,null,!1,!0),g.dirs=g.dirs?g.dirs.concat(n.dirs):n.dirs),n.transition){const _=ci(g.type)&&$u(g)||g;eu(_,n.transition)}return S=g,Nu(A),S}const v0=e=>{let t;for(const n in e)(n==="class"||n==="style"||pu(n))&&((t||(t={}))[n]=e[n]);return t},k0=(e,t)=>{const n={};for(const u in e)(!ei(u)||!(u.slice(9)in t))&&(n[u]=e[u]);return n};function A0(e,t,n){const{props:u,children:i,component:r}=e,{props:o,children:s,patchFlag:c}=t,a=r.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return u?mo(u,o,a):!!o;if(c&8){const l=t.dynamicProps;for(let f=0;f<l.length;f++){const d=l[f];if(wc(o,u,d)&&!fi(a,d))return!0}}}else return(i||s)&&(!s||!s.$stable)?!0:u===o?!1:u?o?mo(u,o,a):!0:!!o;return!1}function mo(e,t,n){const u=Object.keys(t);if(u.length!==Object.keys(e).length)return!0;for(let i=0;i<u.length;i++){const r=u[i];if(wc(t,e,r)&&!fi(n,r))return!0}return!1}function wc(e,t,n){const u=e[n],i=t[n];return n==="style"&&he(u)&&he(i)?!ii(u,i):u!==i}function Ec({vnode:e,parent:t,suspense:n},u){for(;t;){const i=t.subTree;if(i.suspense&&i.suspense.activeBranch===e&&(i.suspense.vnode.el=i.el=u,e=i),i===e)(e=t.vnode).el=u,t=t.parent;else break}n&&n.activeBranch===e&&(n.vnode.el=u)}const vc={},kc=()=>Object.create(vc),Ac=e=>Object.getPrototypeOf(e)===vc;function C0(e,t,n,u=!1){const i={},r=kc();e.propsDefaults=Object.create(null),Cc(e,t,i,r);for(const o in e.propsOptions[0])o in i||(i[o]=void 0);n?e.props=u?i:Js(i):e.type.props?e.props=i:e.props=r,e.attrs=r}function S0(e,t,n,u){const{props:i,attrs:r,vnode:{patchFlag:o}}=e,s=ae(i),[c]=e.propsOptions;let a=!1;if((u||o>0)&&!(o&16)){if(o&8){const l=e.vnode.dynamicProps;for(let f=0;f<l.length;f++){let d=l[f];if(fi(e.emitsOptions,d))continue;const p=t[d];if(c)if(de(r,d))p!==r[d]&&(r[d]=p,a=!0);else{const m=Ue(d);i[m]=nr(c,s,m,p,e,!1)}else p!==r[d]&&(r[d]=p,a=!0)}}}else{Cc(e,t,i,r)&&(a=!0);let l;for(const f in s)(!t||!de(t,f)&&((l=mn(f))===f||!de(t,l)))&&(c?n&&(n[f]!==void 0||n[l]!==void 0)&&(i[f]=nr(c,s,f,void 0,e,!0)):delete i[f]);if(r!==s)for(const f in r)(!t||!de(t,f))&&(delete r[f],a=!0)}a&&Ft(e.attrs,"set","")}function Cc(e,t,n,u){const[i,r]=e.propsOptions;let o=!1,s;if(t)for(let c in t){if(fn(c))continue;const a=t[c];let l;i&&de(i,l=Ue(c))?!r||!r.includes(l)?n[l]=a:(s||(s={}))[l]=a:fi(e.emitsOptions,c)||(!(c in u)||a!==u[c])&&(u[c]=a,o=!0)}if(r){const c=ae(n),a=s||xe;for(let l=0;l<r.length;l++){const f=r[l];n[f]=nr(i,c,f,a[f],e,!de(a,f))}}return o}function nr(e,t,n,u,i,r){const o=e[n];if(o!=null){const s=de(o,"default");if(s&&u===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&ne(c)){const{propsDefaults:a}=i;if(n in a)u=a[n];else{const l=gu(i);u=a[n]=c.call(null,t),l()}}else u=c;i.ce&&i.ce._setProp(n,u)}o[0]&&(r&&!s?u=!1:o[1]&&(u===""||u===mn(n))&&(u=!0))}return u}const D0=new WeakMap;function Sc(e,t,n=!1){const u=n?D0:t.propsCache,i=u.get(e);if(i)return i;const r=e.props,o={},s=[];let c=!1;if(!ne(e)){const l=f=>{c=!0;const[d,p]=Sc(f,t,!0);Pe(o,d),p&&s.push(...p)};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}if(!r&&!c)return he(e)&&u.set(e,cn),cn;if(J(r))for(let l=0;l<r.length;l++){const f=Ue(r[l]);go(f)&&(o[f]=xe)}else if(r)for(const l in r){const f=Ue(l);if(go(f)){const d=r[l],p=o[f]=J(d)||ne(d)?{type:d}:Pe({},d),m=p.type;let w=!1,A=!0;if(J(m))for(let S=0;S<m.length;++S){const E=m[S],g=ne(E)&&E.name;if(g==="Boolean"){w=!0;break}else g==="String"&&(A=!1)}else w=ne(m)&&m.name==="Boolean";p[0]=w,p[1]=A,(w||de(p,"default"))&&s.push(f)}}const a=[o,s];return he(e)&&u.set(e,a),a}function go(e){return e[0]!=="$"&&!fn(e)}const Fr=e=>e==="_"||e==="_ctx"||e==="$stable",Ir=e=>J(e)?e.map(it):[it(e)],T0=(e,t,n)=>{if(t._n)return t;const u=X((...i)=>Ir(t(...i)),n);return u._c=!1,u},Dc=(e,t,n)=>{const u=e._ctx;for(const i in e){if(Fr(i))continue;const r=e[i];if(ne(r))t[i]=T0(i,r,u);else if(r!=null){const o=Ir(r);t[i]=()=>o}}},Tc=(e,t)=>{const n=Ir(t);e.slots.default=()=>n},Pc=(e,t,n)=>{for(const u in t)(n||!Fr(u))&&(e[u]=t[u])},P0=(e,t,n)=>{const u=e.slots=kc();if(e.vnode.shapeFlag&32){const i=t._;i?(Pc(u,t,n),n&&Is(u,"_",i,!0)):Dc(t,u)}else t&&Tc(e,t)},M0=(e,t,n)=>{const{vnode:u,slots:i}=e;let r=!0,o=xe;if(u.shapeFlag&32){const s=t._;s?n&&s===1?r=!1:Pc(i,t,n):(r=!t.$stable,Dc(t,i)),o=t}else t&&(Tc(e,t),o={default:1});if(r)for(const s in i)!Fr(s)&&o[s]==null&&delete i[s]},Ge=Oc;function q0(e){return Mc(e)}function F0(e){return Mc(e,Wl)}function Mc(e,t){const n=ui();n.__VUE__=!0;const{insert:u,remove:i,patchProp:r,createElement:o,createText:s,createComment:c,setText:a,setElementText:l,parentNode:f,nextSibling:d,setScopeId:p=Et,insertStaticContent:m}=e,w=(h,b,y,P=null,k=null,T=null,L=void 0,R=null,F=!!b.dynamicChildren)=>{if(h===b)return;h&&!sn(h,b)&&(P=C(h),be(h,k,T,!0),h=null),b.patchFlag===-2&&(F=!1,b.dynamicChildren=null),b.dynamicChildren&&h&&h.dynamicChildren&&h.dynamicChildren.hasOnce&&(b.dynamicChildren===cn&&(b.dynamicChildren=[]),b.dynamicChildren.hasOnce=!0);const{type:D,ref:Z,shapeFlag:N}=b;switch(D){case hn:A(h,b,y,P);break;case qe:S(h,b,y,P);break;case Gn:h==null&&E(b,y,P,L);break;case pe:I(h,b,y,P,k,T,L,R,F);break;default:N&1?v(h,b,y,P,k,T,L,R,F):N&6?Y(h,b,y,P,k,T,L,R,F):(N&64||N&128)&&D.process(h,b,y,P,k,T,L,R,F,W)}Z!=null&&k?Cn(Z,h&&h.ref,T,b||h,!b):Z==null&&h&&h.ref!=null&&Cn(h.ref,null,T,h,!0)},A=(h,b,y,P)=>{if(h==null)u(b.el=s(b.children),y,P);else{const k=b.el=h.el;b.children!==h.children&&a(k,b.children)}},S=(h,b,y,P)=>{h==null?u(b.el=c(b.children||""),y,P):b.el=h.el},E=(h,b,y,P)=>{[h.el,h.anchor]=m(h.children,b,y,P,h.el,h.anchor)},g=({el:h,anchor:b},y,P)=>{let k;for(;h&&h!==b;)k=d(h),u(h,y,P),h=k;u(b,y,P)},_=({el:h,anchor:b})=>{let y;for(;h&&h!==b;)y=d(h),i(h),h=y;i(b)},v=(h,b,y,P,k,T,L,R,F)=>{if(b.type==="svg"?L="svg":b.type==="math"&&(L="mathml"),h==null)M(b,y,P,k,T,L,R,F);else{const D=h.el&&h.el._isVueCE?h.el:null;try{D&&D._beginPatch(),O(h,b,k,T,L,R,F)}finally{D&&D._endPatch()}}},M=(h,b,y,P,k,T,L,R)=>{let F,D;const{props:Z,shapeFlag:N,transition:V,dirs:ee}=h;if(F=h.el=o(h.type,T,Z&&Z.is,Z),N&8?l(F,h.children):N&16&&G(h.children,F,null,P,k,Pi(h,T),L,R),ee&&bt(h,null,P,"created"),q(F,h,h.scopeId,L,P),Z){for(const _e in Z)_e!=="value"&&!fn(_e)&&r(F,_e,null,Z[_e],T,P);"value"in Z&&r(F,"value",null,Z.value,T),(D=Z.onVnodeBeforeMount)&&nt(D,P,h)}ee&&bt(h,null,P,"beforeMount");const ce=qc(k,V);ce&&V.beforeEnter(F),u(F,b,y),((D=Z&&Z.onVnodeMounted)||ce||ee)&&Ge(()=>{try{D&&nt(D,P,h),ce&&V.enter(F),ee&&bt(h,null,P,"mounted")}finally{}},k)},q=(h,b,y,P,k)=>{if(y&&p(h,y),P)for(let T=0;T<P.length;T++)p(h,P[T]);if(k){let T=k.subTree;if(b===T||Rc(T.type)&&(T.ssContent===b||T.ssFallback===b)){const L=k.vnode;q(h,L,L.scopeId,L.slotScopeIds,k.parent)}}},G=(h,b,y,P,k,T,L,R,F=0)=>{for(let D=F;D<h.length;D++){const Z=h[D]=R?qt(h[D]):it(h[D]);w(null,Z,b,y,P,k,T,L,R)}},O=(h,b,y,P,k,T,L)=>{const R=b.el=h.el;let{patchFlag:F,dynamicChildren:D,dirs:Z}=b;F|=h.patchFlag&16;const N=h.props||xe,V=b.props||xe;let ee;if(y&&tn(y,!1),(ee=V.onVnodeBeforeUpdate)&&nt(ee,y,b,h),Z&&bt(b,h,y,"beforeUpdate"),y&&tn(y,!0),D&&(!h.dynamicChildren||h.dynamicChildren.length!==D.length)&&(F=0,L=!1,D=null),(N.innerHTML&&V.innerHTML==null||N.textContent&&V.textContent==null)&&l(R,""),D?j(h.dynamicChildren,D,R,y,P,Pi(b,k),T):L||te(h,b,R,null,y,P,Pi(b,k),T,!1),F>0){if(F&16)H(R,N,V,y,k);else if(F&2&&N.class!==V.class&&r(R,"class",null,V.class,k),F&4&&r(R,"style",N.style,V.style,k),F&8){const ce=b.dynamicProps;for(let _e=0;_e<ce.length;_e++){const ge=ce[_e],Ce=N[ge],Se=V[ge];(Se!==Ce||ge==="value")&&r(R,ge,Ce,Se,k,y)}}F&1&&h.children!==b.children&&l(R,b.children)}else!L&&D==null&&H(R,N,V,y,k);((ee=V.onVnodeUpdated)||Z)&&Ge(()=>{ee&&nt(ee,y,b,h),Z&&bt(b,h,y,"updated")},P)},j=(h,b,y,P,k,T,L)=>{for(let R=0;R<b.length;R++){const F=h[R],D=b[R],Z=F.el&&(F.type===pe||!sn(F,D)||F.shapeFlag&198)?f(F.el):y;w(F,D,Z,null,P,k,T,L,!0)}},H=(h,b,y,P,k)=>{if(b!==y){if(b!==xe)for(const T in b)!fn(T)&&!(T in y)&&r(h,T,b[T],null,k,P);for(const T in y){if(fn(T))continue;const L=y[T],R=b[T];L!==R&&T!=="value"&&r(h,T,R,L,k,P)}"value"in y&&r(h,"value",b.value,y.value,k)}},I=(h,b,y,P,k,T,L,R,F)=>{const D=b.el=h?h.el:s(""),Z=b.anchor=h?h.anchor:s("");let{patchFlag:N,dynamicChildren:V,slotScopeIds:ee}=b;ee&&(R=R?R.concat(ee):ee),h==null?(u(D,y,P),u(Z,y,P),G(b.children||[],y,Z,k,T,L,R,F)):N>0&&N&64&&V&&h.dynamicChildren&&h.dynamicChildren.length===V.length?(j(h.dynamicChildren,V,y,k,T,L,R),(b.key!=null||k&&b===k.subTree)&&Fc(h,b,!0)):te(h,b,y,Z,k,T,L,R,F)},Y=(h,b,y,P,k,T,L,R,F)=>{b.slotScopeIds=R,h==null?b.shapeFlag&512?k.ctx.activate(b,y,P,L,F):re(b,y,P,k,T,L,F):se(h,b,F)},re=(h,b,y,P,k,T,L)=>{const R=h.component=N0(h,P,k);if(ai(h)&&(R.ctx.renderer=W),$0(R,!1,L),R.asyncDep){if(k&&k.registerDep(R,U,L),!h.el){const F=R.subTree=Q(qe);S(null,F,b,y),h.placeholder=F.el}}else U(R,h,b,y,k,T,L)},se=(h,b,y)=>{const P=b.component=h.component;if(A0(h,b,y))if(P.asyncDep&&!P.asyncResolved){b.el=h.el,ue(P,b,y);return}else P.next=b,P.update();else b.el=h.el,P.vnode=b},U=(h,b,y,P,k,T,L)=>{const R=()=>{if(h.isMounted){let{next:N,bu:V,u:ee,parent:ce,vnode:_e}=h;{const Ke=Ic(h);if(Ke){N&&(N.el=_e.el,ue(h,N,L)),Ke.asyncDep.then(()=>{Ge(()=>{h.isUnmounted||D()},k)});return}}let ge=N,Ce;tn(h,!1),N?(N.el=_e.el,ue(h,N,L)):N=_e,V&&Mu(V),(Ce=N.props&&N.props.onVnodeBeforeUpdate)&&nt(Ce,ce,N,_e),tn(h,!0);const Se=Ti(h),ct=h.subTree;h.subTree=Se,w(ct,Se,f(ct.el),C(ct),h,k,T),N.el=Se.el,ge===null&&Ec(h,Se.el),ee&&Ge(ee,k),(Ce=N.props&&N.props.onVnodeUpdated)&&Ge(()=>nt(Ce,ce,N,_e),k)}else{let N;const{el:V,props:ee}=b,{bm:ce,m:_e,parent:ge,root:Ce,type:Se}=h,ct=pn(b);if(tn(h,!1),ce&&Mu(ce),!ct&&(N=ee&&ee.onVnodeBeforeMount)&&nt(N,ge,b),tn(h,!0),V&&Ee){const Ke=()=>{h.subTree=Ti(h),Ee(V,h.subTree,h,k,null)};ct&&Se.__asyncHydrate?Se.__asyncHydrate(V,h,Ke):Ke()}else{Ce.ce&&Ce.ce._hasShadowRoot()&&Ce.ce._injectChildStyle(Se,h.parent?h.parent.type:void 0);const Ke=h.subTree=Ti(h);w(null,Ke,y,P,h,k,T),b.el=Ke.el}if(_e&&Ge(_e,k),!ct&&(N=ee&&ee.onVnodeMounted)){const Ke=b;Ge(()=>nt(N,ge,Ke),k)}(b.shapeFlag&256||ge&&pn(ge.vnode)&&ge.vnode.shapeFlag&256)&&h.a&&Ge(h.a,k),h.isMounted=!0,b=y=P=null}};h.scope.on();const F=h.effect=new Ls(R);h.scope.off();const D=h.update=F.run.bind(F),Z=h.job=F.runIfDirty.bind(F);Z.i=h,Z.id=h.uid,F.scheduler=()=>Sr(Z),tn(h,!0),D()},ue=(h,b,y)=>{b.component=h;const P=h.vnode.props;h.vnode=b,h.next=null,S0(h,b.props,P,y),M0(h,b.children,y),Lt(),io(h),Bt()},te=(h,b,y,P,k,T,L,R,F=!1)=>{const D=h&&h.children,Z=h?h.shapeFlag:0,N=b.children,{patchFlag:V,shapeFlag:ee}=b;if(V>0){if(V&128){le(D,N,y,P,k,T,L,R,F);return}else if(V&256){$e(D,N,y,P,k,T,L,R,F);return}}ee&8?(Z&16&&et(D,k,T),N!==D&&l(y,N)):Z&16?ee&16?le(D,N,y,P,k,T,L,R,F):et(D,k,T,!0):(Z&8&&l(y,""),ee&16&&G(N,y,P,k,T,L,R,F))},$e=(h,b,y,P,k,T,L,R,F)=>{h=h||cn,b=b||cn;const D=h.length,Z=b.length,N=Math.min(D,Z);let V;for(V=0;V<N;V++){const ee=b[V]=F?qt(b[V]):it(b[V]);w(h[V],ee,y,null,k,T,L,R,F)}D>Z?et(h,k,T,!0,!1,N):G(b,y,P,k,T,L,R,F,N)},le=(h,b,y,P,k,T,L,R,F)=>{let D=0;const Z=b.length;let N=h.length-1,V=Z-1;for(;D<=N&&D<=V;){const ee=h[D],ce=b[D]=F?qt(b[D]):it(b[D]);if(sn(ee,ce))w(ee,ce,y,null,k,T,L,R,F);else break;D++}for(;D<=N&&D<=V;){const ee=h[N],ce=b[V]=F?qt(b[V]):it(b[V]);if(sn(ee,ce))w(ee,ce,y,null,k,T,L,R,F);else break;N--,V--}if(D>N){if(D<=V){const ee=V+1,ce=ee<Z?b[ee].el:P;for(;D<=V;)w(null,b[D]=F?qt(b[D]):it(b[D]),y,ce,k,T,L,R,F),D++}}else if(D>V)for(;D<=N;)be(h[D],k,T,!0),D++;else{const ee=D,ce=D,_e=new Map;for(D=ce;D<=V;D++){const Xe=b[D]=F?qt(b[D]):it(b[D]);Xe.key!=null&&_e.set(Xe.key,D)}let ge,Ce=0;const Se=V-ce+1;let ct=!1,Ke=0;const Qn=new Array(Se);for(D=0;D<Se;D++)Qn[D]=0;for(D=ee;D<=N;D++){const Xe=h[D];if(Ce>=Se){be(Xe,k,T,!0);continue}let mt;if(Xe.key!=null)mt=_e.get(Xe.key);else for(ge=ce;ge<=V;ge++)if(Qn[ge-ce]===0&&sn(Xe,b[ge])){mt=ge;break}mt===void 0?be(Xe,k,T,!0):(Qn[mt-ce]=D+1,mt>=Ke?Ke=mt:ct=!0,w(Xe,b[mt],y,null,k,T,L,R,F),Ce++)}const Kr=ct?I0(Qn):cn;for(ge=Kr.length-1,D=Se-1;D>=0;D--){const Xe=ce+D,mt=b[Xe],Xr=b[Xe+1],Zr=Xe+1<Z?Xr.el||Qc(Xr):P;Qn[D]===0?w(null,mt,y,Zr,k,T,L,R,F):ct&&(ge<0||D!==Kr[ge]?Ae(mt,y,Zr,2):ge--)}}},Ae=(h,b,y,P,k=null)=>{const{el:T,type:L,transition:R,children:F,shapeFlag:D}=h;if(D&6){Ae(h.component.subTree,b,y,P);return}if(D&128){h.suspense.move(b,y,P);return}if(D&64){L.move(h,b,y,W);return}if(L===pe){u(T,b,y);for(let N=0;N<F.length;N++)Ae(F[N],b,y,P);u(h.anchor,b,y);return}if(L===Gn){g(h,b,y);return}if(P!==2&&D&1&&R)if(P===0)R.persisted&&!T[ut]?u(T,b,y):(R.beforeEnter(T),u(T,b,y),Ge(()=>R.enter(T),k));else{const{leave:N,delayLeave:V,afterLeave:ee}=R,ce=()=>{h.ctx.isUnmounted?i(T):u(T,b,y)},_e=()=>{const ge=T._isLeaving||!!T[ut];T._isLeaving&&T[ut](!0),R.persisted&&!ge?ce():N(T,()=>{ce(),ee&&ee()})};V?V(T,ce,_e):_e()}else u(T,b,y)},be=(h,b,y,P=!1,k=!1)=>{const{type:T,props:L,ref:R,children:F,dynamicChildren:D,shapeFlag:Z,patchFlag:N,dirs:V,cacheIndex:ee,memo:ce}=h;if((N===-2||D&&D.hasOnce)&&(k=!1),R!=null&&(Lt(),Cn(R,null,y,h,!0),Bt()),ee!=null&&(!h.ctx||h.ctx===b)&&(b.renderCache[ee]=void 0),Z&256){b.ctx.deactivate(h);return}const _e=Z&1&&V,ge=!pn(h);let Ce;if(ge&&(Ce=L&&L.onVnodeBeforeUnmount)&&nt(Ce,b,h),Z&6)en(h.component,y,P);else{if(Z&128){h.suspense.unmount(y,P);return}_e&&bt(h,null,b,"beforeUnmount"),Z&64?h.type.remove(h,b,y,W,P):D&&!D.hasOnce&&(T!==pe||N>0&&N&64)?et(D,b,y,!1,!0):(T===pe&&N&384||!k&&Z&16)&&et(F,b,y),P&&_n(h)}const Se=ce!=null&&ee==null;(ge&&(Ce=L&&L.onVnodeUnmounted)||_e||Se)&&Ge(()=>{Ce&&nt(Ce,b,h),_e&&bt(h,null,b,"unmounted"),Se&&(h.el=null)},y)},_n=h=>{const{type:b,el:y,anchor:P,transition:k}=h;if(b===pe){xn(y,P);return}if(b===Gn){_(h),k&&!k.persisted&&k.afterLeave&&k.afterLeave();return}const T=()=>{i(y),k&&!k.persisted&&k.afterLeave&&k.afterLeave()};if(h.shapeFlag&1&&k&&!k.persisted){const{leave:L,delayLeave:R}=k,F=()=>L(y,T);R?R(h.el,T,F):F()}else T()},xn=(h,b)=>{let y;for(;h!==b;)y=d(h),i(h),h=y;i(b)},en=(h,b,y)=>{const{bum:P,scope:k,job:T,subTree:L,um:R,m:F,a:D}=h;bo(F),bo(D),P&&Mu(P),k.stop(),T?(T.flags|=8,be(L,h,b,y)):h.vnode.el&&L&&(L.transition=h.vnode.transition,be(L,h,b,y)),R&&Ge(R,b),Ge(()=>{h.isUnmounted=!0},b)},et=(h,b,y,P=!1,k=!1,T=0)=>{for(let L=T;L<h.length;L++)be(h[L],b,y,P,k)},C=h=>{if(h.shapeFlag&6)return C(h.component.subTree);if(h.shapeFlag&128)return h.suspense.next();const b=d(h.anchor||h.el),y=b&&b[Hl];return y?d(y):b};let $=!1;const B=(h,b,y)=>{let P;h==null?b._vnode&&(be(b._vnode,null,null,!0),P=b._vnode.component):w(b._vnode||null,h,b,null,null,null,y),b._vnode=h,$||($=!0,io(P),Bu(),$=!1)},W={p:w,um:be,m:Ae,r:_n,mt:re,mc:G,pc:te,pbc:j,n:C,o:e};let ie,Ee;return t&&([ie,Ee]=t(W)),{render:B,hydrate:ie,createApp:x0(B,ie)}}function Pi({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function tn({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function qc(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Fc(e,t,n=!1){const u=e.children,i=t.children;if(J(u)&&J(i))for(let r=0;r<u.length;r++){const o=u[r];let s=i[r];s.shapeFlag&1&&!s.dynamicChildren&&((s.patchFlag<=0||s.patchFlag===32)&&(s=i[r]=qt(i[r]),s.el=o.el),!n&&s.patchFlag!==-2&&Fc(o,s)),s.type===hn&&(s.patchFlag===-1&&(s=i[r]=qt(s)),s.el=o.el),s.type===qe&&!s.el&&(s.el=o.el)}}function I0(e){const t=e.slice(),n=[0];let u,i,r,o,s;const c=e.length;for(u=0;u<c;u++){const a=e[u];if(a!==0){if(i=n[n.length-1],e[i]<a){t[u]=i,n.push(u);continue}for(r=0,o=n.length-1;r<o;)s=r+o>>1,e[n[s]]<a?r=s+1:o=s;a<e[n[r]]&&(r>0&&(t[u]=n[r-1]),n[r]=u)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=t[o];return n}function Ic(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Ic(t)}function bo(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}function Qc(e){if(e.placeholder)return e.placeholder;const t=e.component;return t?Qc(t.subTree):null}const Rc=e=>e.__isSuspense;function Oc(e,t){t&&t.pendingBranch?J(e)?t.effects.push(...e):t.effects.push(e):Ol(e)}const pe=Symbol.for("v-fgt"),hn=Symbol.for("v-txt"),qe=Symbol.for("v-cmt"),Gn=Symbol.for("v-stc"),Ot=[];let Ze=null;function z(e=!1){Ot.push(Ze=e?null:[])}function Qr(){Ot.pop(),Ze=Ot[Ot.length-1]||null}let tu=1;function Uu(e,t=!1){tu+=e,e<0&&Ze&&t&&(Ze.hasOnce=!0)}function Lc(e){return e.dynamicChildren=tu>0?Ze||cn:null,Qr(),tu>0&&Ze&&Ze.push(e),e}function K(e,t,n,u,i,r){return Lc(x(e,t,n,u,i,r,!0))}function nu(e,t,n,u,i){return Lc(Q(e,t,n,u,i,!0))}function uu(e){return e?e.__v_isVNode===!0:!1}function sn(e,t){return e.type===t.type&&e.key===t.key}const Bc=({key:e})=>e??null,Iu=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?ve(e)||Ne(e)||ne(e)?{i:Oe,r:e,k:t,f:!!n}:e:null);function x(e,t=null,n=null,u=0,i=null,r=e===pe?0:1,o=!1,s=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Bc(t),ref:t&&Iu(t),scopeId:ic,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:u,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:Oe};return s?(Vu(c,n),r&128&&e.normalize(c)):n&&(c.shapeFlag|=ve(n)?8:16),tu>0&&!o&&Ze&&(c.patchFlag>0||r&6)&&c.patchFlag!==32&&Ze.push(c),c}const Q=Q0;function Q0(e,t=null,n=null,u=0,i=null,r=!1){if((!e||e===l0)&&(e=qe),uu(e)){const s=Zt(e,t,!0);return n&&Vu(s,n),tu>0&&!r&&Ze&&(s.shapeFlag&6?Ze[Ze.indexOf(e)]=s:Ze.push(s)),s.patchFlag=-2,s}if(V0(e)&&(e=e.__vccOpts),t){t=R0(t);let{class:s,style:c}=t;s&&!ve(s)&&(t.class=at(s)),he(c)&&(Ar(c)&&!J(c)&&(c=Pe({},c)),t.style=_r(c))}const o=ve(e)?1:Rc(e)?128:ci(e)?64:he(e)?4:ne(e)?2:0;return x(e,t,n,u,i,o,r,!0)}function R0(e){return e?Ar(e)||Ac(e)?Pe({},e):e:null}function Zt(e,t,n=!1,u=!1){const{props:i,ref:r,patchFlag:o,children:s,transition:c}=e,a=t?O0(i||{},t):i,l={__v_isVNode:!0,__v_skip:!0,type:e.type,props:a,key:a&&Bc(a),ref:t&&t.ref?n&&r?J(r)?r.concat(Iu(t)):[r,Iu(t)]:Iu(t):r,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:s,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==pe?o===-1?16:o|16:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:c,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Zt(e.ssContent),ssFallback:e.ssFallback&&Zt(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce,cacheIndex:e.cacheIndex};return c&&u&&eu(l,c.clone(l)),l}function me(e=" ",t=0){return Q(hn,null,e,t)}function vt(e="",t=!1){return t?(z(),nu(qe,null,e)):Q(qe,null,e)}function it(e){return e==null||typeof e=="boolean"?Q(qe):J(e)?Q(pe,null,e.slice()):uu(e)?qt(e):Q(hn,null,String(e))}function qt(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Zt(e)}function Vu(e,t){let n=0;const{shapeFlag:u}=e;if(t==null)t=null;else if(J(t))n=16;else if(typeof t=="object")if(u&65){const i=t.default;i&&(i._c&&(i._d=!1),Vu(e,i()),i._c&&(i._d=!0));return}else{n=32;const i=t._;!i&&!Ac(t)?t._ctx=Oe:i===3&&Oe&&(Oe.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else if(ne(t)){if(u&65){Vu(e,{default:t});return}t={default:t,_ctx:Oe},n=32}else t=String(t),u&64?(n=16,t=[me(t)]):n=8;e.children=t,e.shapeFlag|=n}function O0(...e){const t={};for(let n=0;n<e.length;n++){const u=e[n];for(const i in u)if(i==="class")t.class!==u.class&&(t.class=at([t.class,u.class]));else if(i==="style")t.style=_r([t.style,u.style]);else if(pu(i)){const r=t[i],o=u[i];o&&r!==o&&!(J(r)&&r.includes(o))?t[i]=r?[].concat(r,o):o:o==null&&r==null&&!ei(i)&&(t[i]=o)}else i!==""&&(t[i]=u[i])}return t}function nt(e,t,n,u=null){st(e,t,7,[n,u])}const L0=xc();let B0=0;function N0(e,t,n){const u=e.type,i=(t?t.appContext:e.appContext)||L0,r={uid:B0++,vnode:e,type:u,parent:t,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new cl(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(i.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Sc(u,i),emitsOptions:yc(u,i),emit:null,emitted:null,propsDefaults:xe,inheritAttrs:u.inheritAttrs,ctx:xe,data:xe,props:xe,attrs:xe,slots:xe,refs:xe,setupState:xe,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=t?t.root:r,r.emit=w0.bind(null,r),e.ce&&e.ce(r),r}let Be=null;const Rr=()=>Be||Oe;let Gu,iu;{const e=ui(),t=(n,u)=>{let i;return(i=e[n])||(i=e[n]=[]),i.push(u),r=>{i.length>1?i.forEach(o=>o(r)):i[0](r)}};Gu=t("__VUE_INSTANCE_SETTERS__",n=>Be=n),iu=t("__VUE_SSR_SETTERS__",n=>ru=n)}const gu=e=>{const t=Be;return Gu(e),e.scope.on(),()=>{e.scope.off(),Gu(t)}},_o=()=>{Be&&Be.scope.off(),Gu(null)};function Nc(e){return e.vnode.shapeFlag&4}let ru=!1;function $0(e,t=!1,n=!1){t&&iu(t);const{props:u,children:i}=e.vnode,r=Nc(e);C0(e,u,r,t),P0(e,i,n||t);const o=r?H0(e,t):void 0;return t&&iu(!1),o}function H0(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,d0);const{setup:u}=n;if(u){Lt();const i=e.setupContext=u.length>1?z0(e):null,r=gu(e),o=mu(u,e,0,[e.props,i]),s=Ms(o);if(Bt(),r(),(s||e.sp)&&!pn(e)&&fc(e),s){if(o.then(_o,_o),t)return o.then(c=>{iu(!0);try{xo(e,c,t)}finally{iu(!1)}}).catch(c=>{si(c,e,0)});e.asyncDep=o}else xo(e,o)}else $c(e)}function xo(e,t,n){ne(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:he(t)&&(e.setupState=ec(t)),$c(e)}function $c(e,t,n){const u=e.type;e.render||(e.render=u.render||Et);{const i=gu(e);Lt();try{p0(e)}finally{Bt(),i()}}}const j0={get(e,t){return Le(e,"get",""),e[t]}};function z0(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,j0),slots:e.slots,emit:e.emit,expose:t}}function di(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(ec(Sl(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Vn)return Vn[n](e)},has(t,n){return n in t||n in Vn}})):e.proxy}function U0(e,t=!0){return ne(e)?e.displayName||e.name:e.name||t&&e.__name}function V0(e){return ne(e)&&"__vccOpts"in e}const Fe=(e,t)=>ql(e,t,ru);function Or(e,t,n){try{Uu(-1);const u=arguments.length;return u===2?he(t)&&!J(t)?uu(t)?Q(e,null,[t]):Q(e,t):Q(e,null,t):(u>3?n=Array.prototype.slice.call(arguments,2):u===3&&uu(n)&&(n=[n]),Q(e,t,n))}finally{Uu(1)}}const Hc="3.5.43";/**
* @vue/runtime-dom v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ur;const yo=typeof window<"u"&&window.trustedTypes;if(yo)try{ur=yo.createPolicy("vue",{createHTML:e=>e})}catch{}const jc=ur?e=>ur.createHTML(e):e=>e,G0="http://www.w3.org/2000/svg",W0="http://www.w3.org/1998/Math/MathML",Mt=typeof document<"u"?document:null,wo=Mt&&Mt.createElement("template"),K0={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,u)=>{const i=t==="svg"?Mt.createElementNS(G0,e):t==="mathml"?Mt.createElementNS(W0,e):n?Mt.createElement(e,{is:n}):Mt.createElement(e);return e==="select"&&u&&u.multiple!=null&&i.setAttribute("multiple",u.multiple),i},createText:e=>Mt.createTextNode(e),createComment:e=>Mt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Mt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,u,i,r){const o=n?n.previousSibling:t.lastChild;if(i&&(i===r||i.nextSibling))for(;t.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{wo.innerHTML=jc(u==="svg"?`<svg>${e}</svg>`:u==="mathml"?`<math>${e}</math>`:e);const s=wo.content;if(u==="svg"||u==="mathml"){const c=s.firstChild;for(;c.firstChild;)s.appendChild(c.firstChild);s.removeChild(c)}t.insertBefore(s,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},$t="transition",Ln="animation",ou=Symbol("_vtc"),zc={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},X0=Pe({},oc,zc),Z0=e=>(e.displayName="Transition",e.props=X0,e),J0=Z0((e,{slots:t})=>Or(Ul,Y0(e),t)),nn=(e,t=[])=>{J(e)?e.forEach(n=>n(...t)):e&&e(...t)},Eo=e=>e?J(e)?e.some(t=>t.length>1):e.length>1:!1;function Y0(e){const t={};for(const I in e)I in zc||(t[I]=e[I]);if(e.css===!1)return t;const{name:n="v",type:u,duration:i,enterFromClass:r=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:s=`${n}-enter-to`,appearFromClass:c=r,appearActiveClass:a=o,appearToClass:l=s,leaveFromClass:f=`${n}-leave-from`,leaveActiveClass:d=`${n}-leave-active`,leaveToClass:p=`${n}-leave-to`}=e,m=ef(i),w=m&&m[0],A=m&&m[1],{onBeforeEnter:S,onEnter:E,onEnterCancelled:g,onLeave:_,onLeaveCancelled:v,onBeforeAppear:M=S,onAppear:q=E,onAppearCancelled:G=g}=t,O=(I,Y,re,se)=>{I._enterCancelled=se,un(I,Y?l:s),un(I,Y?a:o),re&&re()},j=(I,Y)=>{I._isLeaving=!1,un(I,f),un(I,p),un(I,d),Y&&Y()},H=I=>(Y,re)=>{const se=I?q:E,U=()=>O(Y,I,re);nn(se,[Y,U]),vo(()=>{un(Y,I?c:r),Tt(Y,I?l:s),Eo(se)||ko(Y,u,w,U)})};return Pe(t,{onBeforeEnter(I){nn(S,[I]),Tt(I,r),Tt(I,o)},onBeforeAppear(I){nn(M,[I]),Tt(I,c),Tt(I,a)},onEnter:H(!1),onAppear:H(!0),onLeave(I,Y){I._isLeaving=!0;const re=()=>j(I,Y);Tt(I,f),I._enterCancelled?(Tt(I,d),So(I)):(So(I),Tt(I,d)),vo(()=>{I._isLeaving&&(un(I,f),Tt(I,p),Eo(_)||ko(I,u,A,re))}),nn(_,[I,re])},onEnterCancelled(I){O(I,!1,void 0,!0),nn(g,[I])},onAppearCancelled(I){O(I,!0,void 0,!0),nn(G,[I])},onLeaveCancelled(I){j(I),nn(v,[I])}})}function ef(e){if(e==null)return null;if(he(e))return[Mi(e.enter),Mi(e.leave)];{const t=Mi(e);return[t,t]}}function Mi(e){return Ya(e)}function Tt(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e[ou]||(e[ou]=new Set)).add(t)}function un(e,t){t.split(/\s+/).forEach(u=>u&&e.classList.remove(u));const n=e[ou];n&&(n.delete(t),n.size||(e[ou]=void 0))}function vo(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let tf=0;function ko(e,t,n,u){const i=e._endId=++tf,r=()=>{i===e._endId&&u()};if(n!=null)return setTimeout(r,n);const{type:o,timeout:s,propCount:c}=nf(e,t);if(!o)return u();const a=o+"end";let l=0;const f=()=>{e.removeEventListener(a,d),r()},d=p=>{p.target===e&&++l>=c&&f()};setTimeout(()=>{l<c&&f()},s+1),e.addEventListener(a,d)}function nf(e,t){const n=window.getComputedStyle(e),u=m=>(n[m]||"").split(", "),i=u(`${$t}Delay`),r=u(`${$t}Duration`),o=Ao(i,r),s=u(`${Ln}Delay`),c=u(`${Ln}Duration`),a=Ao(s,c);let l=null,f=0,d=0;t===$t?o>0&&(l=$t,f=o,d=r.length):t===Ln?a>0&&(l=Ln,f=a,d=c.length):(f=Math.max(o,a),l=f>0?o>a?$t:Ln:null,d=l?l===$t?r.length:c.length:0);const p=l===$t&&/\b(?:transform|all)(?:,|$)/.test(u(`${$t}Property`).toString());return{type:l,timeout:f,propCount:d,hasTransform:p}}function Ao(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((n,u)=>Co(n)+Co(e[u])))}function Co(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function So(e){return(e?e.ownerDocument:document).body.offsetHeight}function uf(e,t,n){const u=e[ou];u&&(t=(t?[t,...u]:[...u]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const Do=Symbol("_vod"),rf=Symbol("_vsh"),of=Symbol(""),sf=/(?:^|;)\s*display\s*:/;function cf(e,t,n){const u=e.style,i=ve(n);let r=!1;if(n&&!i){if(t)if(ve(t))for(const o of t.split(";")){const s=o.slice(0,o.indexOf(":")).trim();n[s]==null&&$n(u,s,"")}else for(const o in t)n[o]==null&&$n(u,o,"");for(const o in n){o==="display"&&(r=!0);const s=n[o];s!=null?lf(e,o,!ve(t)&&t?t[o]:void 0,s)||$n(u,o,s):$n(u,o,"")}}else if(i){if(t!==n){const o=u[of];o&&(n+=";"+o),u.cssText=n,r=sf.test(n)}}else t&&e.removeAttribute("style");Do in e&&(e[Do]=r?u.display:"",e[rf]&&(u.display="none"))}const Au=/\s*!important$/;function $n(e,t,n){if(J(n))n.forEach(u=>$n(e,t,u));else if(n==null&&(n=""),t.startsWith("--"))Au.test(n)?e.setProperty(t,n.replace(Au,""),"important"):e.setProperty(t,n);else{const u=af(e,t);Au.test(n)?e.setProperty(mn(u),n.replace(Au,""),"important"):e[u]=n}}const To=["Webkit","Moz","ms"],qi={};function af(e,t){const n=qi[t];if(n)return n;let u=Ue(t);if(u!=="filter"&&u in e)return qi[t]=u;u=ni(u);for(let i=0;i<To.length;i++){const r=To[i]+u;if(r in e)return qi[t]=r}return t}function lf(e,t,n,u){return e.tagName==="TEXTAREA"&&(t==="width"||t==="height")&&ve(u)&&n===u}const Po="http://www.w3.org/1999/xlink";function Mo(e,t,n,u,i,r=rl(t)){u&&t.startsWith("xlink:")?n==null?e.removeAttributeNS(Po,t.slice(6,t.length)):e.setAttributeNS(Po,t,n):n==null||r&&!Qs(n)?e.removeAttribute(t):e.setAttribute(t,r?"":dt(n)?String(n):n)}function qo(e,t,n,u,i){if(t==="innerHTML"||t==="textContent"){n!=null&&(e[t]=t==="innerHTML"?jc(n):n);return}const r=e.tagName;if(t==="value"&&r!=="PROGRESS"&&!r.includes("-")){const s=r==="OPTION"?e.getAttribute("value")||"":e.value,c=n==null?e.type==="checkbox"?"on":"":String(n);(s!==c||!("_value"in e))&&(e.value=c),n==null&&e.removeAttribute(t),e._value=n;return}let o=!1;if(n===""||n==null){const s=typeof e[t];s==="boolean"?n=Qs(n):n==null&&s==="string"?(n="",o=!0):s==="number"&&(n=0,o=!0)}try{e[t]=n}catch{}o&&e.removeAttribute(i||t)}function vn(e,t,n,u){e.addEventListener(t,n,u)}function ff(e,t,n,u){e.removeEventListener(t,n,u)}const Fo=Symbol("_vei");function df(e,t,n,u,i=null){const r=e[Fo]||(e[Fo]={}),o=r[t];if(u&&o)o.value=u;else{const[s,c]=mf(t);if(u){const a=r[t]=_f(u,i);vn(e,s,a,c)}else o&&(ff(e,s,o,c),r[t]=void 0)}}const pf=/(Once|Passive|Capture)$/,hf=/^on:?(?:Once|Passive|Capture)$/;function mf(e){let t,n;for(;(n=e.match(pf))&&!hf.test(e);)t||(t={}),e=e.slice(0,e.length-n[1].length),t[n[1].toLowerCase()]=!0;return[e[2]===":"?e.slice(3):mn(e.slice(2)),t]}let Fi=0;const gf=Promise.resolve(),bf=()=>Fi||(gf.then(()=>Fi=0),Fi=Date.now());function _f(e,t){const n=u=>{if(!u._vts)u._vts=Date.now();else if(u._vts<=n.attached)return;const i=n.value;if(J(i)){const r=u.stopImmediatePropagation;u.stopImmediatePropagation=()=>{r.call(u),u._stopped=!0};const o=i.slice(),s=[u];for(let c=0;c<o.length&&!u._stopped;c++){const a=o[c];a&&st(a,t,5,s)}}else st(i,t,5,[u])};return n.value=e,n.attached=bf(),n}const Io=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,xf=(e,t,n,u,i,r)=>{const o=i==="svg";t==="class"?uf(e,u,o):t==="style"?cf(e,n,u):pu(t)?ei(t)||df(e,t,n,u,r):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):yf(e,t,u,o))?(qo(e,t,u),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&Mo(e,t,u,o,r,t!=="value")):e._isVueCE&&(wf(e,t)||e._def.__asyncLoader&&(/[A-Z]/.test(t)||!ve(u)))?qo(e,Ue(t),u,r,t):(t==="true-value"?e._trueValue=u:t==="false-value"&&(e._falseValue=u),Mo(e,t,u,o))};function yf(e,t,n,u){if(u)return!!(t==="innerHTML"||t==="textContent"||t in e&&Io(t)&&ne(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="sandbox"&&e.tagName==="IFRAME"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const i=e.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return Io(t)&&ve(n)?!1:t in e}function wf(e,t){const n=e._def.props;if(!n)return!1;const u=Ue(t);return Array.isArray(n)?n.some(i=>Ue(i)===u):Object.keys(n).some(i=>Ue(i)===u)}const Qo=e=>{const t=e.props["onUpdate:modelValue"]||!1;return J(t)?n=>Mu(t,n):t};function Ef(e){e.target.composing=!0}function Ro(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const Cu=Symbol("_assign"),Su=Symbol("_initialValue");function Ii(e,t,n){return t&&(e=e.trim()),n&&(e=br(e)),e}const Oo={created(e,{modifiers:{lazy:t,trim:n,number:u}},i){e.parentNode&&(e.type==="text"?e[Su]=e.defaultValue.replace(/[\r\n]/g,""):e.type==="textarea"&&(e[Su]=e.defaultValue.replace(/\r\n?/g,`
`))),e[Cu]=Qo(i);const r=u||i.props&&i.props.type==="number";vn(e,t?"change":"input",o=>{o.target.composing||e[Cu](Ii(e.value,n,r))}),(n||r)&&vn(e,"change",()=>{e.value=Ii(e.value,n,r)}),t||(vn(e,"compositionstart",Ef),vn(e,"compositionend",Ro),vn(e,"change",Ro))},mounted(e,{value:t,modifiers:{trim:n,number:u}}){const i=t??"",r=e[Su];delete e[Su],r!==void 0&&(e.type==="text"||e.type==="textarea")&&e.value!==r?e[Cu](Ii(e.value,n,u)):e.value=i},beforeUpdate(e,{value:t,oldValue:n,modifiers:{lazy:u,trim:i,number:r}},o){if(e[Cu]=Qo(o),e.composing)return;const s=(r||e.type==="number")&&!/^0\d/.test(e.value)?br(e.value):e.value,c=t??"";if(s===c)return;const a=e.getRootNode();(a instanceof Document||a instanceof ShadowRoot)&&a.activeElement===e&&e.type!=="range"&&(u&&t===n||i&&e.value.trim()===c)||(e.value=c)}},vf=["ctrl","shift","alt","meta"],kf={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>vf.some(n=>e[`${n}Key`]&&!t.includes(n))},Af=(e,t)=>{if(!e)return e;const n=e._withMods||(e._withMods={}),u=t.join(".");return n[u]||(n[u]=(i,...r)=>{for(let o=0;o<t.length;o++){const s=kf[t[o]];if(s&&s(i,t))return}return e(i,...r)})},Uc=Pe({patchProp:xf},K0);let Wn,Lo=!1;function Cf(){return Wn||(Wn=q0(Uc))}function Sf(){return Wn=Lo?Wn:F0(Uc),Lo=!0,Wn}const Df=(...e)=>{const t=Cf().createApp(...e),{mount:n}=t;return t.mount=u=>{const i=Gc(u);if(!i)return;const r=t._component;!ne(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.nodeType===1&&(i.textContent="");const o=n(i,!1,Vc(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},t},Tf=(...e)=>{const t=Sf().createApp(...e),{mount:n}=t;return t.mount=u=>{const i=Gc(u);if(i)return n(i,!0,Vc(i))},t};function Vc(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function Gc(e){return ve(e)?document.querySelector(e):e}/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const kn=typeof document<"u";function Wc(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Pf(e){return e.__esModule||e[Symbol.toStringTag]==="Module"||e.default&&Wc(e.default)}const fe=Object.assign;function Qi(e,t){const n={};for(const u in t){const i=t[u];n[u]=pt(i)?i.map(e):e(i)}return n}const Kn=()=>{},pt=Array.isArray;function Bo(e,t){const n={};for(const u in e)n[u]=u in t?t[u]:e[u];return n}const Kc=/#/g,Mf=/&/g,qf=/\//g,Ff=/=/g,If=/\?/g,Xc=/\+/g,Qf=/%5B/g,Rf=/%5D/g,Zc=/%5E/g,Of=/%60/g,Jc=/%7B/g,Lf=/%7C/g,Yc=/%7D/g,Bf=/%20/g;function Lr(e){return e==null?"":encodeURI(""+e).replace(Lf,"|").replace(Qf,"[").replace(Rf,"]")}function Nf(e){return Lr(e).replace(Jc,"{").replace(Yc,"}").replace(Zc,"^")}function ir(e){return Lr(e).replace(Xc,"%2B").replace(Bf,"+").replace(Kc,"%23").replace(Mf,"%26").replace(Of,"`").replace(Jc,"{").replace(Yc,"}").replace(Zc,"^")}function $f(e){return ir(e).replace(Ff,"%3D")}function Hf(e){return Lr(e).replace(Kc,"%23").replace(If,"%3F")}function jf(e){return Hf(e).replace(qf,"%2F")}function su(e){if(e==null)return null;try{return decodeURIComponent(""+e)}catch{}return""+e}const zf=/\/$/,Uf=e=>e.replace(zf,"");function Ri(e,t,n="/"){let u,i={},r="",o="";const s=t.indexOf("#");let c=t.indexOf("?");return c=s>=0&&c>s?-1:c,c>=0&&(u=t.slice(0,c),r=t.slice(c,s>0?s:t.length),i=e(r.slice(1))),s>=0&&(u=u||t.slice(0,s),o=t.slice(s,t.length)),u=Kf(u??t,n),{fullPath:u+r+o,path:u,query:i,hash:su(o)}}function Vf(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function No(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function Gf(e,t,n){const u=t.matched.length-1,i=n.matched.length-1;return u>-1&&u===i&&Pn(t.matched[u],n.matched[i])&&ea(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function Pn(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function ea(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(var n in e)if(!Wf(e[n],t[n]))return!1;return!0}function Wf(e,t){return pt(e)?$o(e,t):pt(t)?$o(t,e):(e==null?void 0:e.valueOf())===(t==null?void 0:t.valueOf())}function $o(e,t){return pt(t)?e.length===t.length&&e.every((n,u)=>n===t[u]):e.length===1&&e[0]===t}function Kf(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),u=e.split("/"),i=u[u.length-1];(i===".."||i===".")&&u.push("");let r=n.length-1,o,s;for(o=0;o<u.length;o++)if(s=u[o],s!==".")if(s==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+u.slice(o).join("/")}const Ht={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let Wu=function(e){return e.pop="pop",e.push="push",e}({}),Xn=function(e){return e.back="back",e.forward="forward",e.unknown="",e}({});const Oi="";function ta(e){if(!e)if(kn){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),Uf(e)}const Xf=/^[^#]+#/;function na(e,t){return e.replace(Xf,"#")+t}function Zf(e,t){const n=document.documentElement.getBoundingClientRect(),u=e.getBoundingClientRect();return{behavior:t.behavior,left:u.left-n.left-(t.left||0),top:u.top-n.top-(t.top||0)}}const pi=()=>({left:window.scrollX,top:window.scrollY});function Jf(e){let t;if("el"in e){const n=e.el,u=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?u?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;t=Zf(i,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function Ho(e,t){return(history.state?history.state.position-t:-1)+e}const rr=new Map;function Yf(e,t){rr.set(e,t)}function e1(e){const t=rr.get(e);return rr.delete(e),t}function t1(e){return typeof e=="string"||e&&typeof e=="object"}function ua(e){return typeof e=="string"||typeof e=="symbol"}let ke=function(e){return e[e.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",e[e.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",e[e.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",e[e.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",e[e.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",e}({});const ia=Symbol("");ke.MATCHER_NOT_FOUND+"",ke.NAVIGATION_GUARD_REDIRECT+"",ke.NAVIGATION_ABORTED+"",ke.NAVIGATION_CANCELLED+"",ke.NAVIGATION_DUPLICATED+"";function Mn(e,t){return fe(new Error,{type:e,[ia]:!0},t)}function Pt(e,t){return e instanceof Error&&ia in e&&(t==null||!!(e.type&t))}const n1=["params","query","hash"];function u1(e){if(typeof e=="string")return e;if(e.path!=null)return e.path;const t={};for(const n of n1)n in e&&(t[n]=e[n]);return JSON.stringify(t,null,2)}function i1(e){const t={};if(e===""||e==="?")return t;const n=(e[0]==="?"?e.slice(1):e).split("&");for(let u=0;u<n.length;++u){const i=n[u].replace(Xc," "),r=i.indexOf("="),o=su(r<0?i:i.slice(0,r)),s=r<0?null:su(i.slice(r+1));if(o in t){let c=t[o];pt(c)||(c=t[o]=[c]),c.push(s)}else t[o]=s}return t}function jo(e){let t="";for(let n in e){const u=e[n];if(n=$f(n),u==null){u!==void 0&&(t+=(t.length?"&":"")+n);continue}(pt(u)?u.map(i=>i&&ir(i)):[u&&ir(u)]).forEach(i=>{i!==void 0&&(t+=(t.length?"&":"")+n,i!=null&&(t+="="+i))})}return t}function r1(e){const t={};for(const n in e){const u=e[n];u!==void 0&&(t[n]=pt(u)?u.map(i=>i==null?null:""+i):u==null?u:""+u)}return t}const o1=Symbol(""),zo=Symbol(""),Br=Symbol(""),Nr=Symbol(""),or=Symbol("");function Bn(){let e=[];function t(u){return e.push(u),()=>{const i=e.indexOf(u);i>-1&&e.splice(i,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function zt(e,t,n,u,i,r=o=>o()){const o=u&&(u.enterCallbacks[i]=u.enterCallbacks[i]||[]);return()=>new Promise((s,c)=>{const a=d=>{d===!1?c(Mn(ke.NAVIGATION_ABORTED,{from:n,to:t})):d instanceof Error?c(d):t1(d)?c(Mn(ke.NAVIGATION_GUARD_REDIRECT,{from:t,to:d})):(o&&u.enterCallbacks[i]===o&&typeof d=="function"&&o.push(d),s())},l=r(()=>e.call(u&&u.instances[i],t,n,a));let f=Promise.resolve(l);e.length<3&&(f=f.then(a)),f.catch(d=>c(d))})}function Li(e,t,n,u,i=r=>r()){const r=[];for(const o of e)for(const s in o.components){let c=o.components[s];if(!(t!=="beforeRouteEnter"&&!o.instances[s]))if(Wc(c)){const a=(c.__vccOpts||c)[t];a&&r.push(zt(a,n,u,o,s,i))}else{let a=c();r.push(()=>a.then(l=>{if(!l)throw new Error(`Couldn't resolve component "${s}" at "${o.path}"`);const f=Pf(l)?l.default:l;o.mods[s]=l,o.components[s]=f;const d=(f.__vccOpts||f)[t];return d&&zt(d,n,u,o,s,i)()}))}}return r}function s1(e,t){const n=[],u=[],i=[],r=Math.max(t.matched.length,e.matched.length);for(let o=0;o<r;o++){const s=t.matched[o];s&&(e.matched.find(a=>Pn(a,s))?u.push(s):n.push(s));const c=e.matched[o];c&&(t.matched.find(a=>Pn(a,c))||i.push(c))}return[n,u,i]}/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let c1=()=>location.protocol+"//"+location.host;function ra(e,t){const{pathname:n,search:u,hash:i}=t,r=e.indexOf("#");if(r>-1){let o=i.includes(e.slice(r))?e.slice(r).length:1,s=i.slice(o);return s[0]!=="/"&&(s="/"+s),No(s,"")}return No(n,e)+u+i}function a1(e,t,n,u){let i=[],r=[],o=null;const s=({state:d})=>{const p=ra(e,location),m=n.value,w=t.value;let A=0;if(d){if(n.value=p,t.value=d,o&&o===m){o=null;return}A=w?d.position-w.position:0}else u(p);i.forEach(S=>{S(n.value,m,{delta:A,type:Wu.pop,direction:A?A>0?Xn.forward:Xn.back:Xn.unknown})})};function c(){o=n.value}function a(d){i.push(d);const p=()=>{const m=i.indexOf(d);m>-1&&i.splice(m,1)};return r.push(p),p}function l(){if(document.visibilityState==="hidden"){const{history:d}=window;if(!d.state)return;d.replaceState(fe({},d.state,{scroll:pi()}),"")}}function f(){for(const d of r)d();r=[],window.removeEventListener("popstate",s),window.removeEventListener("pagehide",l),document.removeEventListener("visibilitychange",l)}return window.addEventListener("popstate",s),window.addEventListener("pagehide",l),document.addEventListener("visibilitychange",l),{pauseListeners:c,listen:a,destroy:f}}function Uo(e,t,n,u=!1,i=!1){return{back:e,current:t,forward:n,replaced:u,position:window.history.length,scroll:i?pi():null}}function l1(e){const{history:t,location:n}=window,u={value:ra(e,n)},i={value:t.state};i.value||r(u.value,{back:null,current:u.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function r(c,a,l){const f=e.indexOf("#"),d=f>-1?(n.host&&document.querySelector("base")?e:e.slice(f))+c:c1()+e+c;try{t[l?"replaceState":"pushState"](a,"",d),i.value=a}catch(p){console.error(p),n[l?"replace":"assign"](d)}}function o(c,a){r(c,fe({},t.state,Uo(i.value.back,c,i.value.forward,!0),a,{position:i.value.position}),!0),u.value=c}function s(c,a){const l=fe({},i.value,t.state,{forward:c,scroll:pi()});r(l.current,l,!0),r(c,fe({},Uo(u.value,c,null),{position:l.position+1},a),!1),u.value=c}return{location:u,state:i,push:s,replace:o}}function oa(e){e=ta(e);const t=l1(e),n=a1(e,t.state,t.location,t.replace);function u(r,o=!0){o||n.pauseListeners(),history.go(r)}const i=fe({location:"",base:e,go:u,createHref:na.bind(null,e)},t,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>t.state.value}),i}function f1(e=""){let t=[],n=[[Oi,{}]],u=0;e=ta(e);function i(s,c={}){u++,u!==n.length&&n.splice(u),n.push([s,c])}function r(s,c,{direction:a,delta:l}){const f={direction:a,delta:l,type:Wu.pop};for(const d of t)d(s,c,f)}const o={location:Oi,state:{},base:e,createHref:na.bind(null,e),replace(s,c){n.splice(u--,1),i(s,c)},push(s,c){i(s,c)},listen(s){return t.push(s),()=>{const c=t.indexOf(s);c>-1&&t.splice(c,1)}},destroy(){t=[],n=[[Oi,{}]],u=0},go(s,c=!0){const a=this.location,l=s<0?Xn.back:Xn.forward;u=Math.max(0,Math.min(u+s,n.length-1)),c&&r(this.location,a,{direction:l,delta:s})}};return Object.defineProperty(o,"location",{enumerable:!0,get:()=>n[u][0]}),Object.defineProperty(o,"state",{enumerable:!0,get:()=>n[u][1]}),o}let an=function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.Group=2]="Group",e}({});var De=function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.ParamRegExp=2]="ParamRegExp",e[e.ParamRegExpEnd=3]="ParamRegExpEnd",e[e.EscapeNext=4]="EscapeNext",e}(De||{});const d1={type:an.Static,value:""},p1=/[a-zA-Z0-9_]/;function h1(e){if(!e)return[[]];if(e==="/")return[[d1]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(p){throw new Error(`ERR (${n})/"${a}": ${p}`)}let n=De.Static,u=n;const i=[];let r;function o(){r&&i.push(r),r=[]}let s=0,c,a="",l="";function f(){a&&(n===De.Static?r.push({type:an.Static,value:a}):n===De.Param||n===De.ParamRegExp||n===De.ParamRegExpEnd?(r.length>1&&(c==="*"||c==="+")&&t(`A repeatable param (${a}) must be alone in its segment. eg: '/:ids+.`),r.push({type:an.Param,value:a,regexp:l,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):t("Invalid state to consume buffer"),a="")}function d(){a+=c}for(;s<e.length;){if(c=e[s++],c==="\\"&&n!==De.ParamRegExp){u=n,n=De.EscapeNext;continue}switch(n){case De.Static:c==="/"?(a&&f(),o()):c===":"?(f(),n=De.Param):d();break;case De.EscapeNext:d(),n=u;break;case De.Param:c==="("?n=De.ParamRegExp:p1.test(c)?d():(f(),n=De.Static,c!=="*"&&c!=="?"&&c!=="+"&&s--);break;case De.ParamRegExp:c===")"?l[l.length-1]=="\\"?l=l.slice(0,-1)+c:n=De.ParamRegExpEnd:l+=c;break;case De.ParamRegExpEnd:f(),n=De.Static,c!=="*"&&c!=="?"&&c!=="+"&&s--,l="";break;default:t("Unknown state");break}}return n===De.ParamRegExp&&t(`Unfinished custom RegExp for param "${a}"`),f(),o(),i}const Vo="[^/]+?",m1={sensitive:!1,strict:!1,start:!0,end:!0};var je=function(e){return e[e._multiplier=10]="_multiplier",e[e.Root=90]="Root",e[e.Segment=40]="Segment",e[e.SubSegment=30]="SubSegment",e[e.Static=40]="Static",e[e.Dynamic=20]="Dynamic",e[e.BonusCustomRegExp=10]="BonusCustomRegExp",e[e.BonusWildcard=-50]="BonusWildcard",e[e.BonusRepeatable=-20]="BonusRepeatable",e[e.BonusOptional=-8]="BonusOptional",e[e.BonusStrict=.7000000000000001]="BonusStrict",e[e.BonusCaseSensitive=.25]="BonusCaseSensitive",e}(je||{});const g1=/[.+*?^${}()[\]/\\]/g;function b1(e,t){const n=fe({},m1,t),u=[];let i=n.start?"^":"";const r=[];for(const a of e){const l=a.length?[]:[je.Root];n.strict&&!a.length&&(i+="/");for(let f=0;f<a.length;f++){const d=a[f];let p=je.Segment+(n.sensitive?je.BonusCaseSensitive:0);if(d.type===an.Static)f||(i+="/"),i+=d.value.replace(g1,"\\$&"),p+=je.Static;else if(d.type===an.Param){const{value:m,repeatable:w,optional:A,regexp:S}=d;r.push({name:m,repeatable:w,optional:A});const E=S||Vo;if(E!==Vo){p+=je.BonusCustomRegExp;try{`${E}`}catch(_){throw new Error(`Invalid custom RegExp for param "${m}" (${E}): `+_.message)}}let g=w?`((?:${E})(?:/(?:${E}))*)`:`(${E})`;f||(g=A&&a.length<2?`(?:/${g})`:"/"+g),A&&(g+="?"),i+=g,p+=je.Dynamic,A&&(p+=je.BonusOptional),w&&(p+=je.BonusRepeatable),E===".*"&&(p+=je.BonusWildcard)}l.push(p)}u.push(l)}if(n.strict&&n.end){const a=u.length-1;u[a][u[a].length-1]+=je.BonusStrict}n.strict||(i+="/?"),n.end?i+="$":n.strict&&!i.endsWith("/")&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function s(a){const l=a.match(o),f={};if(!l)return null;for(let d=1;d<l.length;d++){const p=l[d]||"",m=r[d-1];f[m.name]=p&&m.repeatable?p.split("/"):p}return f}function c(a){let l="",f=!1;for(const d of e){(!f||!l.endsWith("/"))&&(l+="/"),f=!1;for(const p of d)if(p.type===an.Static)l+=p.value;else if(p.type===an.Param){const{value:m,repeatable:w,optional:A}=p,S=m in a?a[m]:"";if(pt(S)&&!w)throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);const E=pt(S)?S.join("/"):S;if(!E)if(A)d.length<2&&(l.endsWith("/")?l=l.slice(0,-1):f=!0);else throw new Error(`Missing required param "${m}"`);l+=E}}return l||"/"}return{re:o,score:u,keys:r,parse:s,stringify:c}}function _1(e,t){let n=0;for(;n<e.length&&n<t.length;){const u=t[n]-e[n];if(u)return u;n++}return e.length<t.length?e.length===1&&e[0]===je.Static+je.Segment?-1:1:e.length>t.length?t.length===1&&t[0]===je.Static+je.Segment?1:-1:0}function sa(e,t){let n=0;const u=e.score,i=t.score;for(;n<u.length&&n<i.length;){const r=_1(u[n],i[n]);if(r)return r;n++}if(Math.abs(i.length-u.length)===1){if(Go(u))return 1;if(Go(i))return-1}return i.length-u.length}function Go(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const x1={strict:!1,end:!0,sensitive:!1};function y1(e,t,n){const u=b1(h1(e.path),n),i=fe(u,{record:e,parent:t,children:[],alias:[]});return t&&!i.record.aliasOf==!t.record.aliasOf&&t.children.push(i),i}function w1(e,t){const n=[],u=new Map;t=Bo(x1,t);function i(f){return u.get(f)}function r(f,d,p){const m=!p,w=Ko(f);w.aliasOf=p&&p.record;const A=Bo(t,f),S=[w];if("alias"in f){const _=typeof f.alias=="string"?[f.alias]:f.alias;for(const v of _)S.push(Ko(fe({},w,{components:p?p.record.components:w.components,path:v,aliasOf:p?p.record:w})))}let E,g;for(const _ of S){const{path:v}=_;if(d&&v[0]!=="/"){const M=d.record.path,q=M[M.length-1]==="/"?"":"/";_.path=d.record.path+(v&&q+v)}if(E=y1(_,d,A),p?p.alias.push(E):(g=g||E,g!==E&&g.alias.push(E),m&&f.name&&!Xo(E)&&o(f.name)),ca(E)&&c(E),w.children){const M=w.children;for(let q=0;q<M.length;q++)r(M[q],E,p&&p.children[q])}p=p||E}return g?()=>{o(g)}:Kn}function o(f){if(ua(f)){const d=u.get(f);d&&(u.delete(f),n.splice(n.indexOf(d),1),d.children.forEach(o),d.alias.forEach(o))}else{const d=n.indexOf(f);d>-1&&(n.splice(d,1),f.record.name&&u.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function s(){return n}function c(f){const d=k1(f,n);n.splice(d,0,f),f.record.name&&!Xo(f)&&u.set(f.record.name,f)}function a(f,d){let p,m={},w,A;if("name"in f&&f.name){if(p=u.get(f.name),!p)throw Mn(ke.MATCHER_NOT_FOUND,{location:f});A=p.record.name,m=fe(Wo(d.params,p.keys.filter(g=>!g.optional).concat(p.parent?p.parent.keys.filter(g=>g.optional):[]).map(g=>g.name)),f.params&&Wo(f.params,p.keys.map(g=>g.name))),w=p.stringify(m)}else if(f.path!=null)w=f.path,p=n.find(g=>g.re.test(w)),p&&(m=p.parse(w),A=p.record.name);else{if(p=d.name?u.get(d.name):n.find(g=>g.re.test(d.path)),!p)throw Mn(ke.MATCHER_NOT_FOUND,{location:f,currentLocation:d});A=p.record.name,m=fe({},d.params,f.params),w=p.stringify(m)}const S=[];let E=p;for(;E;)S.unshift(E.record),E=E.parent;return{name:A,path:w,params:m,matched:S,meta:v1(S)}}e.forEach(f=>r(f));function l(){n.length=0,u.clear()}return{addRoute:r,resolve:a,removeRoute:o,clearRoutes:l,getRoutes:s,getRecordMatcher:i}}function Wo(e,t){const n={};for(const u of t)u in e&&(n[u]=e[u]);return n}function Ko(e){const t={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:E1(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function E1(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const u in e.components)t[u]=typeof n=="object"?n[u]:n;return t}function Xo(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function v1(e){return e.reduce((t,n)=>fe(t,n.meta),{})}function k1(e,t){let n=0,u=t.length;for(;n!==u;){const r=n+u>>1;sa(e,t[r])<0?u=r:n=r+1}const i=A1(e);return i&&(u=t.lastIndexOf(i,u-1)),u}function A1(e){let t=e;for(;t=t.parent;)if(ca(t)&&sa(e,t)===0)return t}function ca({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function Zo(e){const t=ft(Br),n=ft(Nr),u=Fe(()=>{const c=Te(e.to);return t.resolve(c)}),i=Fe(()=>{const{matched:c}=u.value,{length:a}=c,l=c[a-1],f=n.matched;if(!l||!f.length)return-1;const d=f.findIndex(Pn.bind(null,l));if(d>-1)return d;const p=Jo(c[a-2]);return a>1&&Jo(l)===p&&f[f.length-1].path!==p?f.findIndex(Pn.bind(null,c[a-2])):d}),r=Fe(()=>i.value>-1&&P1(n.params,u.value.params)),o=Fe(()=>i.value>-1&&i.value===n.matched.length-1&&ea(n.params,u.value.params));function s(c={}){if(T1(c)){const a=t[Te(e.replace)?"replace":"push"](Te(e.to)).catch(Kn);return e.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>a),a}return Promise.resolve()}return{route:u,href:Fe(()=>u.value.href),isActive:r,isExactActive:o,navigate:s}}function C1(e){return e.length===1?e[0]:e}const S1=Tr({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:Zo,setup(e,{slots:t}){const n=oi(Zo(e)),{options:u}=ft(Br),i=Fe(()=>({[Yo(e.activeClass,u.linkActiveClass,"router-link-active")]:n.isActive,[Yo(e.exactActiveClass,u.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=t.default&&C1(t.default(n));return e.custom?r:Or("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},r)}}}),D1=S1;function T1(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function P1(e,t){for(const n in t){const u=t[n],i=e[n];if(typeof u=="string"){if(u!==i)return!1}else if(!pt(i)||i.length!==u.length||u.some((r,o)=>r.valueOf()!==i[o].valueOf()))return!1}return!0}function Jo(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Yo=(e,t,n)=>e??t??n,M1=Tr({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const u=ft(or),i=Fe(()=>e.route||u.value),r=ft(zo,0),o=Fe(()=>{let a=Te(r);const{matched:l}=i.value;let f;for(;(f=l[a])&&!f.components;)a++;return a}),s=Fe(()=>i.value.matched[o.value]);qu(zo,Fe(()=>o.value+1)),qu(o1,s),qu(or,i);const c=Kt();return Un(()=>[c.value,s.value,e.name],([a,l,f],[d,p,m])=>{l&&(l.instances[f]=a,p&&p!==l&&a&&a===d&&(l.leaveGuards.size||(l.leaveGuards=p.leaveGuards),l.updateGuards.size||(l.updateGuards=p.updateGuards))),a&&l&&(!p||!Pn(l,p)||!d)&&(l.enterCallbacks[f]||[]).forEach(w=>w(a))},{flush:"post"}),()=>{const a=i.value,l=e.name,f=s.value,d=f&&f.components[l];if(!d)return es(n.default,{Component:d,route:a});const p=f.props[l],m=p?p===!0?a.params:typeof p=="function"?p(a):p:null,A=Or(d,fe({},m,t,{onVnodeUnmounted:S=>{S.component.isUnmounted&&(f.instances[l]=null)},ref:c}));return es(n.default,{Component:A,route:a})||A}}});function es(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const q1=M1;function aa(e){const t=w1(e.routes,e),n=e.parseQuery||i1,u=e.stringifyQuery||jo,i=e.history,r=Bn(),o=Bn(),s=Bn(),c=Dl(Ht);let a=Ht;kn&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const l=Qi.bind(null,C=>""+C),f=Qi.bind(null,jf),d=Qi.bind(null,su);function p(C,$){let B,W;return ua(C)?(B=t.getRecordMatcher(C),W=$):W=C,t.addRoute(W,B)}function m(C){const $=t.getRecordMatcher(C);$&&t.removeRoute($)}function w(){return t.getRoutes().map(C=>C.record)}function A(C){return!!t.getRecordMatcher(C)}function S(C,$){if($=fe({},$||c.value),typeof C=="string"){const b=Ri(n,C,$.path),y=t.resolve({path:b.path},$),P=i.createHref(b.fullPath);return fe(b,y,{params:d(y.params),hash:su(b.hash),redirectedFrom:void 0,href:P})}let B;if(C.path!=null)B=fe({},C,{path:Ri(n,C.path,$.path).path});else{const b=fe({},C.params);for(const y in b)b[y]==null&&delete b[y];B=fe({},C,{params:f(b)}),$.params=f($.params)}const W=t.resolve(B,$),ie=C.hash||"";W.params=l(d(W.params));const Ee=Vf(u,fe({},C,{hash:Nf(ie),path:W.path})),h=i.createHref(Ee);return fe({fullPath:Ee,hash:ie,query:u===jo?r1(C.query):C.query||{}},W,{redirectedFrom:void 0,href:h})}function E(C){return typeof C=="string"?Ri(n,C,c.value.path):fe({},C)}function g(C,$){if(a!==C)return Mn(ke.NAVIGATION_CANCELLED,{from:$,to:C})}function _(C){return q(C)}function v(C){return _(fe(E(C),{replace:!0}))}function M(C,$){const B=C.matched[C.matched.length-1];if(B&&B.redirect){const{redirect:W}=B;let ie=typeof W=="function"?W(C,$):W;return typeof ie=="string"&&(ie=ie.includes("?")||ie.includes("#")?ie=E(ie):{path:ie},ie.params={}),fe({query:C.query,hash:C.hash,params:ie.path!=null?{}:C.params},ie)}}function q(C,$){const B=a=S(C),W=c.value,ie=C.state,Ee=C.force,h=C.replace===!0,b=M(B,W);if(b)return q(fe(E(b),{state:typeof b=="object"?fe({},ie,b.state):ie,force:Ee,replace:h}),$||B);const y=B;y.redirectedFrom=$;let P;return!Ee&&Gf(u,W,B)&&(P=Mn(ke.NAVIGATION_DUPLICATED,{to:y,from:W}),Ae(W,W,!0,!1)),(P?Promise.resolve(P):j(y,W)).catch(k=>Pt(k)?Pt(k,ke.NAVIGATION_GUARD_REDIRECT)?k:le(k):te(k,y,W)).then(k=>{if(k){if(Pt(k,ke.NAVIGATION_GUARD_REDIRECT))return q(fe({replace:h},E(k.to),{state:typeof k.to=="object"?fe({},ie,k.to.state):ie,force:Ee}),$||y)}else k=I(y,W,!0,h,ie);return H(y,W,k),k})}function G(C,$){const B=g(C,$);return B?Promise.reject(B):Promise.resolve()}function O(C){const $=xn.values().next().value;return $&&typeof $.runWithContext=="function"?$.runWithContext(C):C()}function j(C,$){let B;const[W,ie,Ee]=s1(C,$);B=Li(W.reverse(),"beforeRouteLeave",C,$);for(const b of W)b.leaveGuards.forEach(y=>{B.push(zt(y,C,$))});const h=G.bind(null,C,$);return B.push(h),et(B).then(()=>{B=[];for(const b of r.list())B.push(zt(b,C,$));return B.push(h),et(B)}).then(()=>{B=Li(ie,"beforeRouteUpdate",C,$);for(const b of ie)b.updateGuards.forEach(y=>{B.push(zt(y,C,$))});return B.push(h),et(B)}).then(()=>{B=[];for(const b of Ee)if(b.beforeEnter)if(pt(b.beforeEnter))for(const y of b.beforeEnter)B.push(zt(y,C,$));else B.push(zt(b.beforeEnter,C,$));return B.push(h),et(B)}).then(()=>(C.matched.forEach(b=>b.enterCallbacks={}),B=Li(Ee,"beforeRouteEnter",C,$,O),B.push(h),et(B))).then(()=>{B=[];for(const b of o.list())B.push(zt(b,C,$));return B.push(h),et(B)}).catch(b=>Pt(b,ke.NAVIGATION_CANCELLED)?b:Promise.reject(b))}function H(C,$,B){s.list().forEach(W=>O(()=>W(C,$,B)))}function I(C,$,B,W,ie){const Ee=g(C,$);if(Ee)return Ee;const h=$===Ht,b=kn?history.state:{};B&&(W||h?i.replace(C.fullPath,fe({scroll:h&&b&&b.scroll},ie)):i.push(C.fullPath,ie)),c.value=C,Ae(C,$,B,h),le()}let Y;function re(){Y||(Y=i.listen((C,$,B)=>{if(!en.listening)return;const W=S(C),ie=M(W,en.currentRoute.value);if(ie){q(fe(ie,{replace:!0,force:!0}),W).catch(Kn);return}a=W;const Ee=c.value;kn&&Yf(Ho(Ee.fullPath,B.delta),pi()),j(W,Ee).catch(h=>Pt(h,ke.NAVIGATION_ABORTED|ke.NAVIGATION_CANCELLED)?h:Pt(h,ke.NAVIGATION_GUARD_REDIRECT)?(q(fe(E(h.to),{force:!0}),W).then(b=>{Pt(b,ke.NAVIGATION_ABORTED|ke.NAVIGATION_DUPLICATED)&&!B.delta&&B.type===Wu.pop&&i.go(-1,!1)}).catch(Kn),Promise.reject()):(B.delta&&i.go(-B.delta,!1),te(h,W,Ee))).then(h=>{h=h||I(W,Ee,!1),h&&(B.delta&&!Pt(h,ke.NAVIGATION_CANCELLED)?i.go(-B.delta,!1):B.type===Wu.pop&&Pt(h,ke.NAVIGATION_ABORTED|ke.NAVIGATION_DUPLICATED)&&i.go(-1,!1)),H(W,Ee,h)}).catch(Kn)}))}let se=Bn(),U=Bn(),ue;function te(C,$,B){le(C);const W=U.list();return W.length?W.forEach(ie=>ie(C,$,B)):console.error(C),Promise.reject(C)}function $e(){return ue&&c.value!==Ht?Promise.resolve():new Promise((C,$)=>{se.add([C,$])})}function le(C){return ue||(ue=!C,re(),se.list().forEach(([$,B])=>C?B(C):$()),se.reset()),C}function Ae(C,$,B,W){const{scrollBehavior:ie}=e;if(!kn||!ie)return Promise.resolve();const Ee=!B&&e1(Ho(C.fullPath,0))||(W||!B)&&history.state&&history.state.scroll||null;return Cr().then(()=>ie(C,$,Ee)).then(h=>h&&Jf(h)).catch(h=>te(h,C,$))}const be=C=>i.go(C);let _n;const xn=new Set,en={currentRoute:c,listening:!0,addRoute:p,removeRoute:m,clearRoutes:t.clearRoutes,hasRoute:A,getRoutes:w,resolve:S,options:e,push:_,replace:v,go:be,back:()=>be(-1),forward:()=>be(1),beforeEach:r.add,beforeResolve:o.add,afterEach:s.add,onError:U.add,isReady:$e,install(C){C.component("RouterLink",D1),C.component("RouterView",q1),C.config.globalProperties.$router=en,Object.defineProperty(C.config.globalProperties,"$route",{enumerable:!0,get:()=>Te(c)}),kn&&!_n&&c.value===Ht&&(_n=!0,_(i.location).catch(W=>{}));const $={};for(const W in Ht)Object.defineProperty($,W,{get:()=>c.value[W],enumerable:!0});C.provide(Br,en),C.provide(Nr,Js($)),C.provide(or,c);const B=C.unmount;xn.add(C),C.unmount=function(){xn.delete(C),xn.size<1&&(a=Ht,Y&&Y(),Y=null,c.value=Ht,_n=!1,ue=!1),B()}}};function et(C){return C.reduce(($,B)=>$.then(()=>O(B)),Promise.resolve())}return en}function hi(e){return ft(Nr)}const F1=new Set(["title","titleTemplate","script","style","noscript"]),Qu=new Set(["base","meta","link","style","script","noscript"]),I1=new Set(["title","titleTemplate","templateParams","base","htmlAttrs","bodyAttrs","meta","link","style","script","noscript"]),Q1=new Set(["base","title","titleTemplate","bodyAttrs","htmlAttrs","templateParams"]),la=new Set(["tagPosition","tagPriority","tagDuplicateStrategy","children","innerHTML","textContent","processTemplateParams"]),R1=typeof window<"u";function Ku(e){let t=9;for(let n=0;n<e.length;)t=Math.imul(t^e.charCodeAt(n++),9**9);return((t^t>>>9)+65536).toString(16).substring(1,8).toLowerCase()}function sr(e){if(e._h)return e._h;if(e._d)return Ku(e._d);let t=`${e.tag}:${e.textContent||e.innerHTML||""}:`;for(const n in e.props)t+=`${n}:${String(e.props[n])},`;return Ku(t)}function O1(e,t){return e instanceof Promise?e.then(t):t(e)}function cr(e,t,n,u){const i=u||da(typeof t=="object"&&typeof t!="function"&&!(t instanceof Promise)?{...t}:{[e==="script"||e==="noscript"||e==="style"?"innerHTML":"textContent"]:t},e==="templateParams"||e==="titleTemplate");if(i instanceof Promise)return i.then(o=>cr(e,t,n,o));const r={tag:e,props:i};for(const o of la){const s=r.props[o]!==void 0?r.props[o]:n[o];s!==void 0&&((!(o==="innerHTML"||o==="textContent"||o==="children")||F1.has(r.tag))&&(r[o==="children"?"innerHTML":o]=s),delete r.props[o])}return r.props.body&&(r.tagPosition="bodyClose",delete r.props.body),r.tag==="script"&&typeof r.innerHTML=="object"&&(r.innerHTML=JSON.stringify(r.innerHTML),r.props.type=r.props.type||"application/json"),Array.isArray(r.props.content)?r.props.content.map(o=>({...r,props:{...r.props,content:o}})):r}function L1(e,t){var u;const n=e==="class"?" ":";";return t&&typeof t=="object"&&!Array.isArray(t)&&(t=Object.entries(t).filter(([,i])=>i).map(([i,r])=>e==="style"?`${i}:${r}`:i)),(u=String(Array.isArray(t)?t.join(n):t))==null?void 0:u.split(n).filter(i=>!!i.trim()).join(n)}function fa(e,t,n,u){for(let i=u;i<n.length;i+=1){const r=n[i];if(r==="class"||r==="style"){e[r]=L1(r,e[r]);continue}if(e[r]instanceof Promise)return e[r].then(o=>(e[r]=o,fa(e,t,n,i)));if(!t&&!la.has(r)){const o=String(e[r]),s=r.startsWith("data-");o==="true"||o===""?e[r]=s?"true":!0:e[r]||(s&&o==="false"?e[r]="false":delete e[r])}}}function da(e,t=!1){const n=fa(e,t,Object.keys(e),0);return n instanceof Promise?n.then(()=>e):e}const B1=10;function pa(e,t,n){for(let u=n;u<t.length;u+=1){const i=t[u];if(i instanceof Promise)return i.then(r=>(t[u]=r,pa(e,t,u)));Array.isArray(i)?e.push(...i):e.push(i)}}function N1(e){const t=[],n=e.resolvedInput;for(const i in n){if(!Object.prototype.hasOwnProperty.call(n,i))continue;const r=n[i];if(!(r===void 0||!I1.has(i))){if(Array.isArray(r)){for(const o of r)t.push(cr(i,o,e));continue}t.push(cr(i,r,e))}}if(t.length===0)return[];const u=[];return O1(pa(u,t,0),()=>u.map((i,r)=>(i._e=e._i,e.mode&&(i._m=e.mode),i._p=(e._i<<B1)+r,i)))}const ts=new Set(["onload","onerror","onabort","onprogress","onloadstart"]),ns={base:-10,title:10},us={critical:-80,high:-10,low:20};function Xu(e){const t=e.tagPriority;if(typeof t=="number")return t;let n=100;return e.tag==="meta"?e.props["http-equiv"]==="content-security-policy"?n=-30:e.props.charset?n=-20:e.props.name==="viewport"&&(n=-15):e.tag==="link"&&e.props.rel==="preconnect"?n=20:e.tag in ns&&(n=ns[e.tag]),t&&t in us?n+us[t]:n}const $1=[{prefix:"before:",offset:-1},{prefix:"after:",offset:1}],H1=["name","property","http-equiv"];function ha(e){const{props:t,tag:n}=e;if(Q1.has(n))return n;if(n==="link"&&t.rel==="canonical")return"canonical";if(t.charset)return"charset";if(t.id)return`${n}:id:${t.id}`;for(const u of H1)if(t[u]!==void 0)return`${n}:${u}:${t[u]}`;return!1}const Ut="%separator";function j1(e,t,n=!1){var i;let u;if(t==="s"||t==="pageTitle")u=e.pageTitle;else if(t.includes(".")){const r=t.indexOf(".");u=(i=e[t.substring(0,r)])==null?void 0:i[t.substring(r+1)]}else u=e[t];if(u!==void 0)return n?(u||"").replace(/"/g,'\\"'):u||""}const z1=new RegExp(`${Ut}(?:\\s*${Ut})*`,"g");function Du(e,t,n,u=!1){if(typeof e!="string"||!e.includes("%"))return e;let i=e;try{i=decodeURI(e)}catch{}const r=i.match(/%\w+(?:\.\w+)?/g);if(!r)return e;const o=e.includes(Ut);return e=e.replace(/%\w+(?:\.\w+)?/g,s=>{if(s===Ut||!r.includes(s))return s;const c=j1(t,s.slice(1),u);return c!==void 0?c:s}).trim(),o&&(e.endsWith(Ut)&&(e=e.slice(0,-Ut.length)),e.startsWith(Ut)&&(e=e.slice(Ut.length)),e=e.replace(z1,n).trim()),e}function is(e,t){return e==null?t||null:typeof e=="function"?e(t):e}async function U1(e,t={}){const n=t.document||e.resolvedOptions.document;if(!n||!e.dirty)return;const u={shouldRender:!0,tags:[]};if(await e.hooks.callHook("dom:beforeRender",u),!!u.shouldRender)return e._domUpdatePromise||(e._domUpdatePromise=new Promise(async i=>{var f;const r=(await e.resolveTags()).map(d=>({tag:d,id:Qu.has(d.tag)?sr(d):d.tag,shouldRender:!0}));let o=e._dom;if(!o){o={elMap:{htmlAttrs:n.documentElement,bodyAttrs:n.body}};const d=new Set;for(const p of["body","head"]){const m=(f=n[p])==null?void 0:f.children;for(const w of m){const A=w.tagName.toLowerCase();if(!Qu.has(A))continue;const S={tag:A,props:await da(w.getAttributeNames().reduce((v,M)=>({...v,[M]:w.getAttribute(M)}),{})),innerHTML:w.innerHTML},E=ha(S);let g=E,_=1;for(;g&&d.has(g);)g=`${E}:${_++}`;g&&(S._d=g,d.add(g)),o.elMap[w.getAttribute("data-hid")||sr(S)]=w}}}o.pendingSideEffects={...o.sideEffects},o.sideEffects={};function s(d,p,m){const w=`${d}:${p}`;o.sideEffects[w]=m,delete o.pendingSideEffects[w]}function c({id:d,$el:p,tag:m}){const w=m.tag.endsWith("Attrs");if(o.elMap[d]=p,w||(m.textContent&&m.textContent!==p.textContent&&(p.textContent=m.textContent),m.innerHTML&&m.innerHTML!==p.innerHTML&&(p.innerHTML=m.innerHTML),s(d,"el",()=>{var A;(A=o.elMap[d])==null||A.remove(),delete o.elMap[d]})),m._eventHandlers)for(const A in m._eventHandlers)Object.prototype.hasOwnProperty.call(m._eventHandlers,A)&&p.getAttribute(`data-${A}`)!==""&&((m.tag==="bodyAttrs"?n.defaultView:p).addEventListener(A.substring(2),m._eventHandlers[A].bind(p)),p.setAttribute(`data-${A}`,""));for(const A in m.props){if(!Object.prototype.hasOwnProperty.call(m.props,A))continue;const S=m.props[A],E=`attr:${A}`;if(A==="class"){if(!S)continue;for(const g of S.split(" "))w&&s(d,`${E}:${g}`,()=>p.classList.remove(g)),!p.classList.contains(g)&&p.classList.add(g)}else if(A==="style"){if(!S)continue;for(const g of S.split(";")){const _=g.indexOf(":"),v=g.substring(0,_).trim(),M=g.substring(_+1).trim();s(d,`${E}:${v}`,()=>{p.style.removeProperty(v)}),p.style.setProperty(v,M)}}else p.getAttribute(A)!==S&&p.setAttribute(A,S===!0?"":String(S)),w&&s(d,E,()=>p.removeAttribute(A))}}const a=[],l={bodyClose:void 0,bodyOpen:void 0,head:void 0};for(const d of r){const{tag:p,shouldRender:m,id:w}=d;if(m){if(p.tag==="title"){n.title=p.textContent;continue}d.$el=d.$el||o.elMap[w],d.$el?c(d):Qu.has(p.tag)&&a.push(d)}}for(const d of a){const p=d.tag.tagPosition||"head";d.$el=n.createElement(d.tag.tag),c(d),l[p]=l[p]||n.createDocumentFragment(),l[p].appendChild(d.$el)}for(const d of r)await e.hooks.callHook("dom:renderTag",d,n,s);l.head&&n.head.appendChild(l.head),l.bodyOpen&&n.body.insertBefore(l.bodyOpen,n.body.firstChild),l.bodyClose&&n.body.appendChild(l.bodyClose);for(const d in o.pendingSideEffects)o.pendingSideEffects[d]();e._dom=o,await e.hooks.callHook("dom:rendered",{renders:r}),i()}).finally(()=>{e._domUpdatePromise=void 0,e.dirty=!1})),e._domUpdatePromise}function V1(e,t={}){const n=t.delayFn||(u=>setTimeout(u,10));return e._domDebouncedUpdatePromise=e._domDebouncedUpdatePromise||new Promise(u=>n(()=>U1(e,t).then(()=>{delete e._domDebouncedUpdatePromise,u()})))}function G1(e){return t=>{var u,i;const n=((i=(u=t.resolvedOptions.document)==null?void 0:u.head.querySelector('script[id="unhead:payload"]'))==null?void 0:i.innerHTML)||!1;return n&&t.push(JSON.parse(n)),{mode:"client",hooks:{"entries:updated":r=>{V1(r,e)}}}}}function ar(e,t={},n){for(const u in e){const i=e[u],r=n?`${n}:${u}`:u;typeof i=="object"&&i!==null?ar(i,t,r):typeof i=="function"&&(t[r]=i)}return t}const W1={run:e=>e()},K1=()=>W1,ma=typeof console.createTask<"u"?console.createTask:K1;function X1(e,t){const n=t.shift(),u=ma(n);return e.reduce((i,r)=>i.then(()=>u.run(()=>r(...t))),Promise.resolve())}function Z1(e,t){const n=t.shift(),u=ma(n);return Promise.all(e.map(i=>u.run(()=>i(...t))))}function Bi(e,t){for(const n of[...e])n(t)}class J1{constructor(){this._hooks={},this._before=void 0,this._after=void 0,this._deprecatedMessages=void 0,this._deprecatedHooks={},this.hook=this.hook.bind(this),this.callHook=this.callHook.bind(this),this.callHookWith=this.callHookWith.bind(this)}hook(t,n,u={}){if(!t||typeof n!="function")return()=>{};const i=t;let r;for(;this._deprecatedHooks[t];)r=this._deprecatedHooks[t],t=r.to;if(r&&!u.allowDeprecated){let o=r.message;o||(o=`${i} hook has been deprecated`+(r.to?`, please use ${r.to}`:"")),this._deprecatedMessages||(this._deprecatedMessages=new Set),this._deprecatedMessages.has(o)||(console.warn(o),this._deprecatedMessages.add(o))}if(!n.name)try{Object.defineProperty(n,"name",{get:()=>"_"+t.replace(/\W+/g,"_")+"_hook_cb",configurable:!0})}catch{}return this._hooks[t]=this._hooks[t]||[],this._hooks[t].push(n),()=>{n&&(this.removeHook(t,n),n=void 0)}}hookOnce(t,n){let u,i=(...r)=>(typeof u=="function"&&u(),u=void 0,i=void 0,n(...r));return u=this.hook(t,i),u}removeHook(t,n){if(this._hooks[t]){const u=this._hooks[t].indexOf(n);u!==-1&&this._hooks[t].splice(u,1),this._hooks[t].length===0&&delete this._hooks[t]}}deprecateHook(t,n){this._deprecatedHooks[t]=typeof n=="string"?{to:n}:n;const u=this._hooks[t]||[];delete this._hooks[t];for(const i of u)this.hook(t,i)}deprecateHooks(t){Object.assign(this._deprecatedHooks,t);for(const n in t)this.deprecateHook(n,t[n])}addHooks(t){const n=ar(t),u=Object.keys(n).map(i=>this.hook(i,n[i]));return()=>{for(const i of u.splice(0,u.length))i()}}removeHooks(t){const n=ar(t);for(const u in n)this.removeHook(u,n[u])}removeAllHooks(){for(const t in this._hooks)delete this._hooks[t]}callHook(t,...n){return n.unshift(t),this.callHookWith(X1,t,...n)}callHookParallel(t,...n){return n.unshift(t),this.callHookWith(Z1,t,...n)}callHookWith(t,n,...u){const i=this._before||this._after?{name:n,args:u,context:{}}:void 0;this._before&&Bi(this._before,i);const r=t(n in this._hooks?[...this._hooks[n]]:[],u);return r instanceof Promise?r.finally(()=>{this._after&&i&&Bi(this._after,i)}):(this._after&&i&&Bi(this._after,i),r)}beforeEach(t){return this._before=this._before||[],this._before.push(t),()=>{if(this._before!==void 0){const n=this._before.indexOf(t);n!==-1&&this._before.splice(n,1)}}}afterEach(t){return this._after=this._after||[],this._after.push(t),()=>{if(this._after!==void 0){const n=this._after.indexOf(t);n!==-1&&this._after.splice(n,1)}}}}function Y1(){return new J1}const ed=new Set(["templateParams","htmlAttrs","bodyAttrs"]),td={hooks:{"tag:normalise":({tag:e})=>{e.props.hid&&(e.key=e.props.hid,delete e.props.hid),e.props.vmid&&(e.key=e.props.vmid,delete e.props.vmid),e.props.key&&(e.key=e.props.key,delete e.props.key);const t=ha(e);t&&!t.startsWith("meta:og:")&&!t.startsWith("meta:twitter:")&&delete e.key;const n=t||(e.key?`${e.tag}:${e.key}`:!1);n&&(e._d=n)},"tags:resolve":e=>{const t=Object.create(null);for(const u of e.tags){const i=(u.key?`${u.tag}:${u.key}`:u._d)||sr(u),r=t[i];if(r){let s=u==null?void 0:u.tagDuplicateStrategy;if(!s&&ed.has(u.tag)&&(s="merge"),s==="merge"){const c=r.props;c.style&&u.props.style&&(c.style[c.style.length-1]!==";"&&(c.style+=";"),u.props.style=`${c.style} ${u.props.style}`),c.class&&u.props.class?u.props.class=`${c.class} ${u.props.class}`:c.class&&(u.props.class=c.class),t[i].props={...c,...u.props};continue}else if(u._e===r._e){r._duped=r._duped||[],u._d=`${r._d}:${r._duped.length+1}`,r._duped.push(u);continue}else if(Xu(u)>Xu(r))continue}if(!(u.innerHTML||u.textContent||Object.keys(u.props).length!==0)&&Qu.has(u.tag)){delete t[i];continue}t[i]=u}const n=[];for(const u in t){const i=t[u],r=i._duped;n.push(i),r&&(delete i._duped,n.push(...r))}e.tags=n,e.tags=e.tags.filter(u=>!(u.tag==="meta"&&(u.props.name||u.props.property)&&!u.props.content))}}},nd=new Set(["script","link","bodyAttrs"]),ud=e=>({hooks:{"tags:resolve":t=>{for(const n of t.tags){if(!nd.has(n.tag))continue;const u=n.props;for(const i in u){if(i[0]!=="o"||i[1]!=="n"||!Object.prototype.hasOwnProperty.call(u,i))continue;const r=u[i];typeof r=="function"&&(e.ssr&&ts.has(i)?u[i]=`this.dataset.${i}fired = true`:delete u[i],n._eventHandlers=n._eventHandlers||{},n._eventHandlers[i]=r)}e.ssr&&n._eventHandlers&&(n.props.src||n.props.href)&&(n.key=n.key||Ku(n.props.src||n.props.href))}},"dom:renderTag":({$el:t,tag:n})=>{var i,r;const u=t==null?void 0:t.dataset;if(u)for(const o in u){if(!o.endsWith("fired"))continue;const s=o.slice(0,-5);ts.has(s)&&((r=(i=n._eventHandlers)==null?void 0:i[s])==null||r.call(t,new Event(s.substring(2))))}}}}),id=new Set(["link","style","script","noscript"]),rd={hooks:{"tag:normalise":({tag:e})=>{e.key&&id.has(e.tag)&&(e.props["data-hid"]=e._h=Ku(e.key))}}},od={mode:"server",hooks:{"tags:beforeResolve":e=>{const t={};let n=!1;for(const u of e.tags)u._m!=="server"||u.tag!=="titleTemplate"&&u.tag!=="templateParams"&&u.tag!=="title"||(t[u.tag]=u.tag==="title"||u.tag==="titleTemplate"?u.textContent:u.props,n=!0);n&&e.tags.push({tag:"script",innerHTML:JSON.stringify(t),props:{id:"unhead:payload",type:"application/json"}})}}},sd={hooks:{"tags:resolve":e=>{var t;for(const n of e.tags)if(typeof n.tagPriority=="string")for(const{prefix:u,offset:i}of $1){if(!n.tagPriority.startsWith(u))continue;const r=n.tagPriority.substring(u.length),o=(t=e.tags.find(s=>s._d===r))==null?void 0:t._p;if(o!==void 0){n._p=o+i;break}}e.tags.sort((n,u)=>{const i=Xu(n),r=Xu(u);return i<r?-1:i>r?1:n._p-u._p})}}},cd={meta:"content",link:"href",htmlAttrs:"lang"},ad=["innerHTML","textContent"],ld=e=>({hooks:{"tags:resolve":t=>{var o;const{tags:n}=t;let u;for(let s=0;s<n.length;s+=1)n[s].tag==="templateParams"&&(u=t.tags.splice(s,1)[0].props,s-=1);const i=u||{},r=i.separator||"|";delete i.separator,i.pageTitle=Du(i.pageTitle||((o=n.find(s=>s.tag==="title"))==null?void 0:o.textContent)||"",i,r);for(const s of n){if(s.processTemplateParams===!1)continue;const c=cd[s.tag];if(c&&typeof s.props[c]=="string")s.props[c]=Du(s.props[c],i,r);else if(s.processTemplateParams||s.tag==="titleTemplate"||s.tag==="title")for(const a of ad)typeof s[a]=="string"&&(s[a]=Du(s[a],i,r,s.tag==="script"&&s.props.type.endsWith("json")))}e._templateParams=i,e._separator=r},"tags:afterResolve":({tags:t})=>{let n;for(let u=0;u<t.length;u+=1){const i=t[u];i.tag==="title"&&i.processTemplateParams!==!1&&(n=i)}n!=null&&n.textContent&&(n.textContent=Du(n.textContent,e._templateParams,e._separator))}}}),fd={hooks:{"tags:resolve":e=>{const{tags:t}=e;let n,u;for(let i=0;i<t.length;i+=1){const r=t[i];r.tag==="title"?n=r:r.tag==="titleTemplate"&&(u=r)}if(u&&n){const i=is(u.textContent,n.textContent);i!==null?n.textContent=i||n.textContent:e.tags.splice(e.tags.indexOf(n),1)}else if(u){const i=is(u.textContent);i!==null&&(u.textContent=i,u.tag="title",u=void 0)}u&&e.tags.splice(e.tags.indexOf(u),1)}}},dd={hooks:{"tags:afterResolve":e=>{for(const t of e.tags)typeof t.innerHTML=="string"&&(t.innerHTML&&(t.props.type==="application/ld+json"||t.props.type==="application/json")?t.innerHTML=t.innerHTML.replace(/</g,"\\u003C"):t.innerHTML=t.innerHTML.replace(new RegExp(`</${t.tag}`,"g"),`<\\/${t.tag}`))}}};let ga;function pd(e={}){const t=hd(e);return t.use(G1()),ga=t}function rs(e,t){return!e||e==="server"&&t||e==="client"&&!t}function hd(e={}){const t=Y1();t.addHooks(e.hooks||{}),e.document=e.document||(R1?document:void 0);const n=!e.document,u=()=>{s.dirty=!0,t.callHook("entries:updated",s)};let i=0,r=[];const o=[],s={plugins:o,dirty:!1,resolvedOptions:e,hooks:t,headEntries(){return r},use(c){const a=typeof c=="function"?c(s):c;(!a.key||!o.some(l=>l.key===a.key))&&(o.push(a),rs(a.mode,n)&&t.addHooks(a.hooks||{}))},push(c,a){a==null||delete a.head;const l={_i:i++,input:c,...a};return rs(l.mode,n)&&(r.push(l),u()),{dispose(){r=r.filter(f=>f._i!==l._i),u()},patch(f){for(const d of r)d._i===l._i&&(d.input=l.input=f);u()}}},async resolveTags(){const c={tags:[],entries:[...r]};await t.callHook("entries:resolve",c);for(const a of c.entries){const l=a.resolvedInput||a.input;if(a.resolvedInput=await(a.transform?a.transform(l):l),a.resolvedInput)for(const f of await N1(a)){const d={tag:f,entry:a,resolvedOptions:s.resolvedOptions};await t.callHook("tag:normalise",d),c.tags.push(d.tag)}}return await t.callHook("tags:beforeResolve",c),await t.callHook("tags:resolve",c),await t.callHook("tags:afterResolve",c),c.tags},ssr:n};return[td,od,ud,rd,sd,ld,fd,dd,...(e==null?void 0:e.plugins)||[]].forEach(c=>s.use(c)),s.hooks.callHook("init",s),s}function md(){return ga}const gd=Hc[0]==="3";function bd(e){return typeof e=="function"?e():Te(e)}function Zu(e){if(e instanceof Promise||e instanceof Date||e instanceof RegExp)return e;const t=bd(e);if(!e||!t)return t;if(Array.isArray(t))return t.map(n=>Zu(n));if(typeof t=="object"){const n={};for(const u in t)if(Object.prototype.hasOwnProperty.call(t,u)){if(u==="titleTemplate"||u[0]==="o"&&u[1]==="n"){n[u]=Te(t[u]);continue}n[u]=Zu(t[u])}return n}return t}const _d={hooks:{"entries:resolve":e=>{for(const t of e.entries)t.resolvedInput=Zu(t.input)}}},ba="usehead";function xd(e){return{install(n){gd&&(n.config.globalProperties.$unhead=e,n.config.globalProperties.$head=e,n.provide(ba,e))}}.install}function _a(e={}){e.domDelayFn=e.domDelayFn||(n=>Cr(()=>setTimeout(()=>n(),0)));const t=pd(e);return t.use(_d),t.install=xd(t),t}const os=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},ss="__unhead_injection_handler__";function yd(){return ss in os?os[ss]():ft(ba)||md()}function At(e,t={}){const n=t.head||yd();if(n)return n.ssr?n.push(e,t):wd(n,e,t)}function wd(e,t,n={}){const u=Kt(!1),i=Kt({});Nl(()=>{i.value=u.value?{}:Zu(t)});const r=e.push(i.value,n);return Un(i,s=>{r.patch(s)}),Rr()&&(qr(()=>{r.dispose()}),pc(()=>{u.value=!0}),dc(()=>{u.value=!1})),r}function Ed(e){try{return JSON.parse(e||"{}")}catch(t){return console.error("[SSG] On state deserialization -",t,e),{}}}function vd(e){return document.readyState==="loading"?new Promise(t=>{document.addEventListener("DOMContentLoaded",()=>t(e))}):Promise.resolve(e)}const kd=Tr({setup(e,{slots:t}){const n=Kt(!1);return Mr(()=>n.value=!0),()=>n.value?t.default&&t.default({}):t.placeholder&&t.placeholder({})}});function Ad(e,t,n,u={}){const{transformState:i,registerComponents:r=!0,useHead:o=!0,rootContainer:s="#app"}=u,c=typeof window<"u";async function a(l=!1,f){const d=l?Df(e):Tf(e);let p;o&&(p=_a(),d.use(p));const m=aa({history:l?oa(t.base):f1(t.base),...t}),{routes:w}=t;r&&d.component("ClientOnly",kd);const A=[],g={app:d,head:p,isClient:c,router:m,routes:w,onSSRAppRendered:l?()=>{}:q=>A.push(q),triggerOnSSRAppRendered:()=>Promise.all(A.map(q=>q())),initialState:{},transformState:i,routePath:f};l&&(await vd(),g.initialState=(i==null?void 0:i(window.__INITIAL_STATE__||{}))||Ed(window.__INITIAL_STATE__)),await(n==null?void 0:n(g)),d.use(m);let _,v=!0;if(m.beforeEach((q,G,O)=>{(v||_&&_===q.path)&&(v=!1,_=q.path,q.meta.state=g.initialState),O()}),!l){const q=g.routePath??"/";m.push(q),await m.isReady(),g.initialState=m.currentRoute.value.meta.state||{}}const M=g.initialState;return{...g,initialState:M}}return c&&(async()=>{const{app:l,router:f}=await a(!0);await f.isReady(),l.mount(s,!0)})(),a}function Cd(e){const t=e;return t.headTags=e.resolveTags,t.addEntry=e.push,t.addHeadObjs=e.push,t.addReactiveEntry=(n,u)=>{const i=At(n,u);return i!==void 0?i.dispose:()=>{}},t.removeHeadObjs=()=>{},t.updateDOM=()=>{e.hooks.callHook("entries:updated",e)},t.unhead=e,t}function Sd(e,t){const n=_a({});return Cd(n)}const Yt=(e,t)=>{const n=e.__vccOpts||e;for(const[u,i]of t)n[u]=i;return n},Dd={};function Td(e,t){const n=gn("RouterView");return z(),nu(n)}const Pd=Yt(Dd,[["render",Td]]),Md=`---
title: 快速上手
date: 2026-10-04
hide: true
author: 张三
description: 如何使用这个静态博客框架
---

# 快速上手

这篇文章告诉你如何使用这个 Vue 静态博客框架。

## 新增文章

在 \`src/content/posts/\` 目录下新建一个 \`.md\` 文件即可。

## 修改模板

直接修改 \`src/components/\` 和 \`src/pages/\` 下的 Vue 文件。
`,qd=`---
title: Hello World
date: 2026-10-05
hide: true
author: 张三
description: 第一篇文章
---

# Hello World

这是我的第一篇文章，用 Markdown 写。

## 特点

- 简单
- 快速
- 静态生成

> 这是一段引用。

\`\`\`python
print("Hello, World!")
\`\`\`
`,Fd=`---
title: 如何获取158营销软件的序列号
date: 2014-04-17
author: 158软件
description: 如何获取158营销软件的序列号 158系列营销软件的序列号一般在软件的 菜单=>>帮助=>>序列号 中找到，如下图所示：在软件主界面顶部找到菜单所在行，点击帮助，自动出现下拉菜单，
---

# 如何获取158营销软件的序列号

158系列营销软件的序列号一般在软件的  菜单=>>帮助=>>序列号 中找到，如下图所示：

![邮件群发软件](/static/images/qunfa158-158-139-0.jpg)

在软件主界面顶部找到菜单所在行，点击帮助，自动出现下拉菜单，选择机器码这一项。

打开后会有如下图所示的窗口内容：

![邮件群发软件](/static/images/qunfa158-158-139-1.jpg)

如果您是未注册版本，则安装后打开我们软件的第一个窗口，也是相同的内容。

使用复制按钮，将机器码复制粘贴到系统剪切板上，在需要的地方粘贴即可。
`,Id=`---
title: 158群发营销软件如何更换电脑？
date: 2021-10-19
author: 158软件
description: 158群发营销软件如何更换电脑？ 158群发营销软件包括158邮件营销专家、158邮件地址搜索专家、158企业名录搜索专家等，软件的注册过程是通过序列号绑定电脑的，如果更换电脑，对
---

# 158群发营销软件如何更换电脑？

158群发营销软件包括158邮件营销专家、158邮件地址搜索专家、158企业名录搜索专家等，软件的注册过程是通过序列号绑定电脑的，如果更换电脑，对应的注册码就不能使用了，这种情况下，需要将新电脑的机器码发过来我们帮您重新做注册码，而不需要支付其他费用。具体更换事宜请及时联系我们在线客服即可，无后顾之忧。

![](/static/images/qunfa158-158-178-0.jpg)

问题返回的内容形式如下：

**订单号：20XXXXXXXXXX （必填）  
软件名称：一个或多个软件名称  （可选）  
原序列号：XXXXXXXXXXX （可选）  
新序列号：XXXXXXXXXXXXXXXX （必填）**

主要注明新旧序列号即可。
`,Qd=`---
title: 158软件限时特惠小伙伴们别走神
date: 2014-07-01
author: 158软件
description: 158软件限时特惠小伙伴们别走神 五月，注定是一个不平常的！158软件全新改版，以更加清新的面目亮相。为了回馈广大用户以及长期关注158软件的客户，我们策划了本次限时特惠活动，是限
---

# 158软件限时特惠小伙伴们别走神

五月，注定是一个不平常的！158软件全新改版，以更加清新的面目亮相。为了回馈广大用户以及长期关注158软件的客户，我们策划了本次限时特惠活动，是限时的哦，小伙伴们别走神了！所有软件注册购买七折优惠！

参与方式：在线购买的时候选择“我有优惠码”，输入“CODE70”，小写的话是“code70”，大小写不限。如果找不到输入优惠码的地方，那是你真的走神了哦。

活动时间：2014年5月1日至5月11日。

相关活动图片：

![158软件显示特惠](/static/images/qunfa158-158-27-0.png)

158邮件营销专家是邮件群发软件首选品牌，由于销售量大，在一定程度上抵消了软件在开发、升级和维护等方面的成本，所以定价在同类产品中一直偏低，但对好多创业初期的客户来说，还是觉得价格偏高。此次活动可谓“惠中惠”，长期关注的小伙伴们千万别错过哦！

![邮件群发软件](/static/images/qunfa158-158-27-1.png)
`,Rd=`---
title: 158硬件序列号
date: 2014-08-21
author: 158软件
description: 158硬件序列号 158硬件序列号是基于158系列软件的USB口加密锁，它不需要任何额外驱动，免安装，可以直接插在电脑的USB上使用。使用硬件序列号注册的158系列的所有软件，不受
---

# 158硬件序列号

158硬件序列号是基于158系列软件的USB口加密锁，它不需要任何额外驱动，免安装，可以直接插在电脑的USB上使用。使用硬件序列号注册的158系列的所有软件，不受电脑机器码绑定限制，可以任意更换电脑。

![](/static/images/qunfa158-158-319-0.gif)[![购买硬件序列号](/static/images/qunfa158-158-319-1.gif)](http://www.qunfa158.com/buynow?id=snkey)

使用案例：

我购买了158邮件营销专家，同时购买了158硬件序列号（硬件Key）， 那么我可以在任意一台插入“硬件序列号”的电脑上使用正版的158邮件群发软件，而使用过程中没有任何功能限制；后来我又购买158邮件地址搜索专家，因为我已经有了一个158硬件序列号，所以我不需要再购买一个了，也同样可以在任何插入该软件狗的电脑上使用正版的158邮件地址搜索专家。

使用硬件序列号的注意事项：

原则上说， 158硬件序列号是即插即用的，可随时插拔。实际上，因为现在的计算机主板都有很好的保护措施，大多数情况带电插拔也没有什么问题。要注意的是在比较干燥的环境 下，主机和人体间可能存在很高的电压差(几百到几千伏)，若带电插拔，也可能会造成锁中芯片的过压损坏。158硬件序列号是即插即用，但如果在程序正在访问的过程中拔出加密锁，可能会导致系统的不稳定。

[![下载硬件序列号管理器](/static/images/qunfa158-158-319-2.png)](http://d.qunfa158.com/download/SnKeyMgr158.exe)

**常见问题：**

为什么我的158硬件序列号插上后显示未知设备？

答：这是个偶然情况，一般是有干扰或是接触不良，重新插入即可。

我的计算机带USB接口，又安装了WINDOWS操作系统，为什么设备管理器中看不到USB设备？

答：可能BIOS里关闭了USB的支持选项，或者不同的USB的电压不同，可以将电脑前面和后面的USB口都试一下。

只买一套硬件序列号，不买具体的158软件产品可以吗？

不可以的，因为158硬件序列号不是独立的一套软件。唯一不同的地方是，配合了硬件序列号的软件，可以在任意一台电脑上使用，而不需要序列号、注册码等信息。如果没有购买对应的158软件产品，注册时候会给出具体的错误提示，错误代码为402。

158硬件序列号的质量有保障吗？

我们提供三个月的质量保障，保质期内出现硬件序列号质量问题（不包括人为损坏等情况），我们提供更换服务，并免费为其更新对应的软件。保质期之后出现问题，可重新购买或者维修。

使用158硬件序列号管理器注册软件失败，是什么原因？

根据错误代码具体判断：  
402：没有购买过要注册的软件；  
40X：获取注册信息失败，需要联系管理员；  
\\-3：分析网络协议失败；  
\\-5：电脑用户权限不够，需要用有管理员权限的用户登录Windows；  
\\-1：计划外的未知异常。
`,Od=`---
title: QQ邮件群发必备利器——158批量QQ号码采集
date: 2014-05-16
author: 158软件
description: QQ邮件群发必备利器——158批量QQ号码采集 做为邮件群发软件的首选品牌，158邮件营销专家八年信誉保障，完美支持Gmail和AOL等邮箱发信，模拟人工，少进垃圾邮件，是低成本营
---

# QQ邮件群发必备利器——158批量QQ号码采集

做为邮件群发软件的首选品牌，158邮件营销专家八年信誉保障，完美支持Gmail和AOL等邮箱发信，模拟人工，少进垃圾邮件，是低成本营销利器。该软件的1对1个性化邮件群发设置，以及多邮箱轮流发送，确保了其强大的邮件投递功能，其操作简单，入门快，也降低了好多初次接触邮件营销的用户的学习时间成本。

158软件近期推出批量QQ号码采集助手则是对**邮件群发软件**的一个有益补充。该软件支持搜索QQ达人的资料，并且将QQ号码自动转换为QQ邮箱。而转换出来的QQ邮箱可以直接导入邮件群发软件中作为收件人，是邮件营销过程中事半功倍的必备利器。

[158批量QQ号码采集助手](http://www.qunfa158.com/software-search-qq)可以搜索qq号码和qq邮箱，速度极快，海量搜索，没有数量限制！

网上有很多类似的号码和邮箱搜索器，大多基于屏幕抓取，调用QQ软件，这样不但会导致自己使用多年的QQ号码被封掉而且一旦QQ软件用任何变化，对应的采集器就不能用了。

158批量QQ号码采集助手基于QQ城市达人的网站接口搜索，不需要登录自己的QQ号，不用担心自己的QQ账号被封杀。

基于158邮件营销专家的QQ邮箱营销，对方在收到邮件后QQ软件都会提示，发送广告立即见效，效果远比其他邮箱好，是推广营销必备的组合套装。

158批量QQ号码采集助手目前正在搞新品促销，注册购买仅需88元即可，如果现在还犹豫不出手，记得联系158软件的在线客服及时保价哦。

[![QQ邮件群发软件](/static/images/qunfa158-158-352-0.png)](http://www.qunfa158.com/buynow?id=searchqq "QQ邮件群发软件")
`,Ld=`---
title: 网络营销你不得不知的四大神器
date: 2014-05-19
author: 158软件
description: 网络营销你不得不知的四大神器 神马微信营销，神马微博群发，都是浮云，让你见识一下网络营销必备的四大神器，你不得不知道的，如果你要网络营销的话。直接到他们的产品主页上去看吧：http
---

# 网络营销你不得不知的四大神器

![网络营销四大神器](/static/images/qunfa158-158-363-0.jpg)

神马微信营销，神马微博群发，都是浮云，让你见识一下[网络营销](http://www.qunfa158.com)必备的**四大神器**，你不得不知道的，如果你要网络营销的话。直接到他们的产品主页上去看吧：

[http://www.qunfa158.com/products](http://www.qunfa158.com/products "邮件群发软件")

包括158邮件营销专家、158邮件地址搜索专家、158企业名录搜索专家和158批量QQ号码采集助手。
`,Bd=`---
title: 如何导出QQ好友列表用于邮件群发
date: 2014-05-20
author: 158软件
description: 如何导出QQ好友列表用于邮件群发 QQ软件是一款对安全性限制很严格的工具，其中为了防止好友QQ列表被导出，他们是煞费苦心。不过有矛必有盾，作为QQ邮件群发的重要一步，158邮件营销
---

# 如何导出QQ好友列表用于邮件群发

QQ软件是一款对安全性限制很严格的工具，其中为了防止好友QQ列表被导出，他们是煞费苦心。不过有矛必有盾，作为[QQ邮件群发](http://www.qunfa158.com/tag/qq邮件群发)的重要一步，158邮件营销专家里提供一个思路供大家参考。

首先登陆到你的QQ邮箱中，按照如下图所示的步骤，打开所有的QQ邮箱列表。

[![导出QQ好友列表](/static/images/qunfa158-158-369-0.gif)](http://www.qunfa158.com/wp-content/themes/qunfa158v2/abotpictures/upload/201405/how-to-export-qq-buddy-list.gif)

接下来的工作就是全选、复制和粘贴了。将其集中到记事本中的话，可以使用158邮件地址搜索专家做一个本地Email搜索，提取出来即可，具体软件可以这里下载：

[http://www.qunfa158.com/download/EmailSpider158.zip](http://www.qunfa158.com/download/EmailSpider158.zip "158邮件地址搜索专家")

如果没有这个工具，我们也提供在线的免费工具，具体网址是：

[http://www.qunfa158.com/qunfa/304.html](http://www.qunfa158.com/qunfa/304.html "2014年QQ群的邮件群发怎么做？")

使用其中的第二步和第三步，分别提取QQ号码，并将QQ号码转为QQ邮箱即可。
`,Nd=`---
title: EDM邮件内容设计标准及规范
date: 2013-12-04
author: 158软件
description: EDM邮件内容设计标准及规范 1,图片样式与背景图片颜色使用模板尽量不要使用背景图片。背景图片在某些邮件客户端或或web界面中默认不显示。模板中每张图的地址都一定要用绝对地址，否则
---

# EDM邮件内容设计标准及规范

1,图片样式与背景图片颜色使用  
模板尽量不要使用背景图片。背景图片在某些邮件客户端或或web界面中默认不显示。模板中每张图的地址都一定要用绝对地址，否则会不显示；每张图都要指定alt属性，可以在图片被拦截的时候显示图片的内容；每张图都要指定width宽度、height高度，在图片被拦截的时候，不会因图片大小无法读取而被打乱布局。body中不要设定背景色，不然在转发邮件的时候，转发人写的信息背景色都会变为被转发邮件的背景色，影响浏览。如果一定要给邮件模板设定整体背景色，请在模板文件最外面加一个table，设定此table的背景色。  
在切割模板的时候，要注意限制图片的大小和数量，不要为了效果使图片过大，会使邮件接收者打开过于缓慢，甚至直接关闭邮件。更不要完全把模板切为图片形式，那样会在图片被拦截的时候使用户看不到内容，并且很可能会直接被邮件运营商或邮件客户端认定为垃圾邮件。  
2,不要使用div，使用最简单的嵌套table定位  
Div+css是近几年新兴的web2.0定位方式，这种方式不适合在邮件模板切割中使用，不同邮件客户端或在线浏览器对css模型解释不尽相同，会造成错位或布局混乱等问题。同时也不要使用单一table重复多次colspan，可能会被邮件客户端判断为结构过于复杂，归类为垃圾邮件；同时也容易被打乱布局而影响用户浏览。  
3,模板编码语言选择  
模板编码设定与使用的发送软件有关，一般来说，utf-8为较常用的选择，错误的编码会造成用户浏览的时候出现乱码；  
4,css样式编写  
不要使用外部样式表引用，将样式表写入模板内部，如果模板有完全相同样式的列表型文本，可以吧样式表写在页面内<style></style> 中引用，但缺点是在邮件转发过程中经过web编辑器或邮件客户端的编辑，<style></style>被去掉，导致此列表样式变形。这种页面内引用的方式却能节省大量代码，使代码与内容比降低，同时也缩减了模板文件大小，有利于模板评分。  
5,动画与互动元素的处理  
可以使用简单的gif动画来表达某些需要明显突出的要素，但要控制gif文件的大小，不要影响整封邮件的下载浏览速度；不要使用flash动画或JavaScript Active等，前些年邮件病毒泛滥，大部分邮件运营商都已经屏蔽了这些元素。  
6,模板html标签规则  
尽量不要使用提交表单；padding和margin标签：table中，某些邮件客户端或web界面（如Gmail），对浮动的标签(padding、margin等)支持很差，所以尽量不要使用；float浮动标签：某些邮件客户端不支持浮动属性，尽量避免使用。在页面内调用<style></style>的情况下，尽量不要使用<h2>、<ul>、<li>、<p>、<ol>等有默认样式的标签，防止<style></style>被隔离时页面布局混乱。  
7,邮件附件夹带  
邮件一定不要夹带附件，发送大量附件会占用大量珍贵的网络带宽，切大部分附件用户根本不会打开，这部分占用的带宽基本都是浪费的。带有附件的邮件有很大可能被用户认为是病毒，对品牌产生不良影响。在模板上设置下载按钮，链接到网站上下载页面，还可以给网站带来一部分流量，何乐而不为。  
8,使用所见即所得工具，在制作完成后手动优化代码  
使用主流所见即所得工具可以节省大量时间、提高工作效率，但所见即所得工具生成的代码会有许多垃圾代码掺杂其中，最好在制作完成后手动优化。  
9,图片与文本链接规则  
模板中所有链接，都必须使用绝对路径；链接长度不能超过255个字符，不能存在空格，也不能有中文字符，否则可能会导致连接无法追踪；图片链接不要使用标签，否则可能被邮件客户端判定为垃圾邮件，甚至被邮件运营商直接屏蔽。模板中文本文字不能使用过大的字体，否则可能会被邮件客户端判定为垃圾邮件。
`,$d=`---
title: 158软件年中大促，限时特惠！
date: 2014-07-02
author: 158软件
description: 158软件年中大促，限时特惠！ 邮件群发软件365天稳定技术支持,直达QQ邮箱百发百中!低至158元的邮件群发软件.送Email采集.日发送5W以上.QQ邮件群发软件.邮件群发很简
---

# 158软件年中大促，限时特惠！

[![邮件群发软件](/static/images/qunfa158-158-471-0.png)](http://www.qunfa158.com/buynow?id=vip2014)

邮件群发软件365天稳定技术支持,直达QQ邮箱百发百中!

低至158元的邮件群发软件.送Email采集.日发送5W以上.QQ邮件群发软件.邮件群发很简单.邮件群发必备利器!QQ邮件群发软件.Gmail群发很简单.免费下载试用.大小仅2.5M

上海正规公司提供邮件群发软件含税价格不加点!

邮件群发软件低成本营销利器,邮件群发首选工具软件!1对1个性化邮件群发,多邮箱轮流发送,操作简单入门快.<限时优惠>

## 四大神器套餐年中大促，158软件在同类产品中本身定价就不高，性价比是实实在在的，而限时优惠仅需851元，没有理由再还价了。马上有订单，营销更给力！马上行动吧，错过了至少再等一年哦！

**158邮件营销专家**： 快速，精准，一步到位，邮件直达收件人邮箱。

**158邮件地址搜索专家**：根据网址搜索Email，精准信息一举拿下。

**158企业名录搜索专家**：针对网页扫描，客户手机号码一个不漏。

**158批量QQ号码采集助手**：qq号码快速采集，一键导出可变QQ邮箱。
`,Hd=`---
title: 视频教程：快速下载和安装邮件营销软件
date: 2014-06-15
author: 158软件
description: 视频教程：快速下载和安装邮件营销软件 邮件营销软件包括158邮件营销专家、158邮件地址搜索专家、158批量QQ号码采集助手以及电话营销必备的158企业名录搜索专家，做为网络营销的
---

# 视频教程：快速下载和安装邮件营销软件

邮件营销软件包括158邮件营销专家、158邮件地址搜索专家、158批量QQ号码采集助手以及电话营销必备的158企业名录搜索专家，做为网络营销的必备软件，如何快速下载并安装，是提供邮件营销、电话营销效率的关键的，这个视频通过图文并茂的讲解，在几分钟时间让大家快速掌握这些内容。

[![QQ邮件群发软件促销](/static/images/qunfa158-158-507-0.png)](http://www.qunfa158.com/buynow?id=searchqq "购买QQ邮件群发软件")
`,jd=`---
title: 158QQ号码采集新品促销本周末结束
date: 2014-07-14
author: 158软件
description: 158QQ号码采集新品促销本周末结束 旨在回馈广大老客户的158批量QQ号码采集助手新品促销活动将于本周末（2014年7月4日）结束，恢复原价108元，同时我们也推出了该软件更为优
---

# 158QQ号码采集新品促销本周末结束

旨在回馈广大老客户的158批量QQ号码采集助手新品促销活动将于本周末（2014年7月4日）结束，恢复原价**108元**，同时我们也推出了该软件更为优惠的与其他软件的组合套餐：

购买**158邮件营销专家**，加30元即可注册158QQ号码采集软件，套餐优惠价为718元![邮件群发软件优惠](/static/images/qunfa158-158-542-0.gif)；

购买**158企业名录搜索专家**，加50元即可注册158QQ号码采集软件，套餐优惠价为568元；

购买**158邮件地址搜索专家**，加60元即可注册158QQ号码采集软件，套餐优惠价为458元。

软件注册方式请参考[注册购买](http://www.qunfa158.com/buy "注册购买邮件群发软件")页面。

做为一款快速搜索QQ号码的工具软件，158批量QQ号码采集助手无需登录QQ，可以一键转换为QQ邮箱，是邮件营销首选的采集工具，**邮件群发软件**的重要组件。

[![QQ号码采集](/static/images/qunfa158-158-542-1.png)](http://www.qunfa158.com/buynow?id=searchqq)

[![QQ号码采集](/static/images/qunfa158-158-542-2.png)](http://www.qunfa158.com/buynow?id=searchqq)
`,zd=`---
title: 158软件微信公众号金币赠送兑换规则
date: 2014-10-31
author: 158软件
description: 158软件微信公众号金币赠送兑换规则 158软件微信公众号：qunfa158，或微信中搜索“158软件”，或扫描以下二维码：158软件微信公众号提供了关于邮件群发软件使用的常见问题
---

# 158软件微信公众号金币赠送兑换规则

![邮件群发软件](/static/images/qunfa158-158-671-0.png)

158软件微信公众号：qunfa158，或微信中搜索“158软件”，或扫描以下二维码：

![](/static/images/qunfa158-158-671-1.jpg)

158软件微信公众号提供了关于[邮件群发软件](http://www.qunfa158.com/tag/%e9%82%ae%e4%bb%b6%e7%be%a4%e5%8f%91%e8%bd%af%e4%bb%b6 "邮件群发软件")使用的常见问题的智能解答，无需等待能够立即收到回复，是您做好邮件营销的得力助手！

158软件是上海延誉信息技术有限公司在现有成熟的邮件营销类软件产品的基础上，整合优秀的技术资源精心打造的企业级的网络营销工具，包括158邮件营销专家、158邮件地址搜索专家、158企业名录搜索专家等，158邮件群发是一对一的个性化邮件营销工具，操作简单入门快，完美支持SSL，企业名录搜索和Email搜索软件是必备的网页信息采集利器。

关注158软件微信公众号，每日签到即赠送金币，金币多了可以兑换为现金券，注册购买158软件可以享受相应的折扣。金币具体的赠送规则为：

首次签到，赠送1000个金币。

每天连续签到的金币赠送规则是：

第一天签到，增加5个金币；

第二天签到，增加10个金币；

第三天签到，增加20个金币；

第四天签到，增加40个金币；

第五天签到，增加80个金币；

第六天签到，增加160个金币。

每天最多赠送160个金币。

超过2000个金币即可参与兑换现金券，每2000个金币可以兑换一张20元的现金抵用券，不限兑换次数。现金券长期有效不过期。购买158软件每满100元即可抵用一张现金券，不限金额不限次数。
`,Ud=`---
title: 真情回馈老客户微信营销平台免费送
date: 2014-10-31
author: 158软件
description: 真情回馈老客户微信营销平台免费送 想拥有158软件一样的微信营销号吗？现在可以了！158软件真情回馈老客户，微信营销平台免费送，软件用了多久，微信营销平台使用权限就送多久，额外再送
---

# 真情回馈老客户微信营销平台免费送

![邮件群发软件优惠促销720x368](/static/images/qunfa158-158-678-0.png)

**想拥有158软件一样的微信营销号吗？**

**现在可以了！**

**158软件真情回馈老客户，微信营销平台免费送，软件用了多久，微信营销平台使用权限就送多久，额外再送三个月！**

**如果您是158软件新用户，包括使用邮件群发软件、邮件地址搜索软件，手机号码搜索软件等，也不用担心，新用户直接送三个月！**

[![微信营销平台](/static/images/qunfa158-158-678-1.png)](http://cms.weiduke.com/index.php/Index/register.shtml)

活动参与办法：在微读客上注册账号之后，联系您的158软件销售顾问，告知您在微读客上注册的账号或Email即可，我们会及时与微读客沟通，为您延长平台使用期限。机会难得，名额有限，送完为止，下手要快啊！

![邮件群发软件](/static/images/qunfa158-158-678-2.png)

![](/static/images/qunfa158-158-678-3.jpg) ![](/static/images/qunfa158-158-678-4.jpg)
`,Vd=`---
title: 可定制的邮件群发软件功能模块
date: 2014-12-08
author: 158软件
description: 可定制的邮件群发软件功能模块 在158营销软件现有功能的基础上，为客户个性化需求提供个性化的开发定制，这是产品销售过程中经常遇到的需求。多年来，158软件定制的个性化需求中几个典型
---

# 可定制的邮件群发软件功能模块

在158营销软件现有功能的基础上，为客户个性化需求提供个性化的开发定制，这是产品销售过程中经常遇到的需求。多年来，158软件定制的个性化需求中几个典型的客户案例罗列如下，客户可以根据自己的实际需求与我们的在线客服联系定制开发事宜。

**邮件群发软件**客户软件定制案例  
1、Gmail邮件批量接收和备份：对于必须使用SSL才能做POP3和SMTP操作的Gmail邮箱，目前市场上只有延誉信息具有成熟的加密邮件收发可定制模块。此软件为在158邮件营销专家的基础上定制。  
2、邮件群发软件的SQL Server版本：该客户要求158邮件营销专家的收件人不是从Excel或者记事本文件中导入，而是直接连接客户的SQL Server 2008数据库。此软件为在[邮件群发软件](http://www.qunfa158.com)的基础上定制。  
3、雅虎邮箱群发助手：根据雅虎网站的HTTP请求消息包，分析出账号登录，邮件内容撰写，邮件发送，以及验证码等具体的操作过程，用软件模拟整个过程。改项目分析HTTP协议，属于全新开发的项目。

Email采集客户软件定制案例  
1、某外贸网站的Email采集：改网站为英文网站，网页上的Email地址都是经过Javascript加密后显示出来的，需要对网页上指定的元素内容做反加密处理才可获取真实的Email地址。基于158邮件地址搜索专家，挂接相应的功能模块实现客户的需求。

手机号码采集客户软件定制案例  
1、 普通电话号码的采集：某企业黄页网站提供了内容丰富的企业信息名录，但留的电话号码居多。由于电话号码没有明显的可识别特性，盲目提取会出现大量的假号码 和错号码。在158手机号码强大的多线程网页扫描引擎的基础上，增加了对该网站具体页面指定元素的判断，成功提取了企业名称、联系人、电话号码、 Email等信息。  
2、图片格式的手机号码提取：某信息发布类网站为了避免信息被采集，将手机号码做成了图片显示出来。在158手机号码搜索专家的基础上，增加了图片转文字的模块，对网页上指定元素的图片做处理，成功的提取了信息。

详细的客户案例说明见具体的[详情页面](http://www.qunfa158.com/develop "邮件群发软件定制开发")。
`,Gd=`---
title: 哪个免费的电子邮箱更好用？
date: 2019-07-17
author: 158软件
description: 哪个免费的电子邮箱更好用？ 电子邮箱按照收费标准分收费邮箱和免费邮箱，按照使用对象的不同分为个人邮箱和企业邮箱，按照服务器所在的地域不同，分为国内邮箱和国外邮箱，更多的分类推荐大家
---

# 哪个免费的电子邮箱更好用？

电子邮箱按照收费标准分收费邮箱和免费邮箱，按照使用对象的不同分为个人邮箱和企业邮箱，按照服务器所在的地域不同，分为国内邮箱和国外邮箱，更多的分类推荐大家查询免费邮箱地址大全m981.com，我们这里主要讨论免费的个人邮箱，分为国内邮箱和国外邮箱两大类。

![](/static/images/qunfa158-158-853-0.jpg)

**1，QQ邮箱。**从邮箱的使用体验和发送邮件的稳定性方面来说，QQ邮箱在国内绝对是遥遥领先的。QQ邮箱使用起来非常方便，在安全性方面也比较让人放心，在国内是属于比较早的启用HTTPS协议的电子邮箱。

**2，网易邮箱。**网易邮箱主要包括163和126两个主要的域名后缀，其次还有yeah.net和188.com两个主要的后缀。网易在国内是最老牌的免费电子邮箱提供商。虽然之前被315晚会曝光过，其中的广告投放手段涉及到用户邮件内容的隐私，但是总体来说，作为一款免费的电子邮箱，其提供的邮件收发功能还是蛮不错的。

**3，Gmail邮箱。**Gmail是谷歌开发的免费电子邮件系统，同时也有针对企业的付费邮箱服务，在欧洲的一些国家也被称为Google Mail。虽然在国内无法使用Gmail服务，但是由于早期使用谷歌邮箱的用户比较多，所以有一些邮箱软件还是可以提供Gmail的邮件收发服务的。

**4，Yahoo邮箱。**雅虎是最早的互联网搜索引擎，在Google之前，Yahoo是世界上最大的互联网公司，虽然现在雅虎已经风光不在，但是由于雅虎邮箱的注册用户相当多，好多用户不会轻易更换Email地址，所以雅虎邮箱的用户量很大。历史版本的雅虎邮箱不提供SMTP服务，邮件收发只能登录到雅虎Web网页上操作，所以雅虎邮箱的web版本曾提供过各种各样的扩展功能，像今天的QQ邮箱中的一些记事本、语音邮件之类的服务，最早都是雅虎邮箱倡导的。

![](/static/images/qunfa158-158-853-1.jpg)

**5，阿里邮箱。**说到阿里邮箱，不得不提上面说的雅虎邮箱的最大的败笔，就是将雅虎中国的邮箱，全部转移到了中国服务器上，由于雅虎中国属于阿里巴巴运营，后来所有yahoo.com.cn结尾的电子邮箱都转成了aliyun.com，由于邮箱地址被改变了，所以使用雅虎中国邮箱的用户量急剧下降。虽然基于阿里云提供的免费电子邮箱服务功能很强大，性能也非常稳定，但是用户的粘性不够，所以我们现在很少看到阿里云结尾的电子邮箱了。

**6，其他的国内邮箱**，如新浪邮箱，中国移动139邮箱，中国电信189邮箱，中国联通沃邮箱等，也是各有各的特色，就不逐个介绍了。

![](/static/images/qunfa158-158-853-2.png)

**7，其他的国外邮箱**，如微软的hotmail，后来改为MSN.com，现在叫Outlook.com，苹果公司手机也有自己特定域名mobileme结尾的免费电子邮箱服务，gmx.com这几年的使用率也比较高，aol、icq等后缀的邮箱使用量越来越少了。

![](/static/images/qunfa158-158-853-3.jpg)
`,Wd=`---
title: 群发最大限度的降低垃圾邮件风险
date: 2014-04-20
author: 158软件
description: 群发最大限度的降低垃圾邮件风险 电子邮件（E-mail）的成功到达率是衡量电子邮件营销(E-mail营销)效果的重要指标之一，随着垃圾邮件越来越泛滥，世界上所有的ISP服务器提供商
---

# 群发最大限度的降低垃圾邮件风险

电子邮件（E-mail）的成功到达率是衡量电子邮件营销(E-mail营销)效果的重要指标之一，随着垃圾邮件越来越泛滥，世界上所有的ISP服务器提供商均采取了越来越严厉的垃圾邮件过滤规则，即使是正确的、合理合法的用户邮件或者电子邮件营销，也有可能进入垃圾信箱。我们要做的就是了解垃圾邮件过滤规则，尽量避免[邮件群发](http://www.qunfa158.com/tag/qunfa)过程中进入垃圾箱。

1． 以触发式的过滤算法鉴别垃圾邮件

这种垃圾邮件过滤器通常安装在电子邮件客户端软件或者邮件服务器上，其过滤垃圾邮件原理是过滤软件检查邮件发送人、标题、正文内容、邮件中出现的链接和域名，甚至电话号码。当发现带明显垃圾邮件的典型特征，则给予这封邮件一定的垃圾邮件特征分数。当分数达到一定数值，邮件将被标记为垃圾邮件，直接过滤到邮件垃圾箱。

比如，邮件标题中出现￥、$符号，则可以给予2分垃圾邮件分数；邮件内容中出现“免费”、“发票”、“促销”等典型垃圾邮件词汇，给予1分；邮件中如包含已经被确认为经常发送垃圾邮件的域名，再加1分；甚至邮件内容中出现被确认与垃圾邮件相关的电话号码，也给个分数。当这些垃圾分数相加达到某一个数值时，比如达到10分，这封邮件将被标识为垃圾邮件，将会被ISP商丢进垃圾邮箱。

2． 以黑名单为基础

有些创建和维护邮件黑名单的组织，专门接受用户的垃圾邮件投诉，如果确认是垃圾邮件，黑名单管理者将把发送垃圾邮件的服务器和用户IP地址放入黑名单。比较知名的垃圾邮件黑名单通常都与其他ISP商共享黑名单数据库。一旦某个IP地址被列入黑名单，世界上很多ISP都将拒收来自这个IP

地址的所有邮件。

有时候用户投诉，其实收到的邮件并不是垃圾邮件，而是用户忘记了曾经注册过相关电子杂志。如果你的IP地址被错误的投诉而列入黑名单，Jeasin.com建议您，唯一的办法就是联系黑名单维护组织，说明情况，提出证据，要求把你的IP地址从黑名单中删除，此过程比较复杂困难。

3． 邮件防火墙

很多邮件服务器运行在邮件防火墙之后，这些防火墙会共同地使用各种过滤器和黑名单，再加上自行研究的一些算法，来鉴别和剔除垃圾邮件。这些防火墙的算法更复杂，并且不与他人分享细节，对正常的邮件送达也可能有致命的影响，如部分邮件服务器要求有人工添加确认功能，针对大部分陌生地址邮件，将采用拒收的策略。

4． 使用电子邮件确认

当电子邮件账户收到一封Email时，这封Email会首先进入待送达队列中，同时邮件系统会自动回复给发信人一封确认邮件。确认邮件中包含有一个确认链接，或者标题中包含一个特殊的序列号，只有发件人单击确认链接，或者回复这封确认邮件，发信人的邮件地址才会被列入白名单，原来所发送的第一封电子邮件才真正被送达到目标收件账户。

鉴别和阻挡垃圾邮件大致就这几种方法，有些邮件服务器会综合使用这些方法。正规的ESP商比较熟悉ISP商的各种规则，能制作出符合大部分ISP的邮件模板，并对邮件模板进行审核、测试，这样才能降低电子邮件进入垃圾箱的风险。
`,Kd=`---
title: 邮件群发软件的宏定义设置说明
date: 2014-05-23
author: 158软件
description: 邮件群发软件的宏定义设置说明 大批量邮件群发过程中使用变量来确保每封邮件的内容都不一样，可以有效避免垃圾邮件。158邮件营销专家的宏定义功能就是解决这个问题的。最新版本的158邮件
---

# 邮件群发软件的宏定义设置说明

大批量邮件群发过程中使用变量来确保每封邮件的内容都不一样，可以有效避免垃圾邮件。158邮件营销专家的宏定义功能就是解决这个问题的。

最新版本的158邮件群发软件在原有的收件人姓名和Email地址的基础上，新增了随机字符串、各种日期和时间格式等新的宏定义功能。

1、传统的收件人姓名和Email地址宏定义。

为了使您的邮件内容更加贴切，158邮件群发支持对邮件标题和内容的宏定义，对应关系如下： %TO\\_EMAIL% 接收者Email地址，%TO\\_NAME% 接收者姓名，%FROM\\_EMAIL% 发送者Email地址，%FROM\\_NAME% 发送者姓名。

您可以将这些宏定义嵌入在要发送Email的邮件标题和邮件内容中，当发送的时候，系统会自动将这些宏替换成对应的内容。

其中 %TO\\_EMAIL% 是 nickname<user@domail.com> 中的<>里面的部分，即user@domail.com，而%TO\\_NAME%是<>外面的部分，即nickname。 所以，要实现动态显示收件人名称，您需要将收件人的地址设置为nickname<user@domail.com>这种格式。

%FROM\\_EMAIL%是发件人Email，%FROM\\_NAME%是发件人称谓。

2、随机字符串定义

3、日期和时间格式的定义

4、Excel格式收件人地址本的宏定义
`,Xd=`---
title: 常用的SMTP邮箱推荐（发送账号设置指南）
date: 2022-04-15
author: 158软件
description: 常用的SMTP邮箱推荐（发送账号设置指南） 158邮件营销专家收集整理了部分网络上留下的免费邮箱的设置方法，并对其在邮件群发软件中的具体配置给出实例，是进行邮件群发的网络营销必看的
---

# 常用的SMTP邮箱推荐（发送账号设置指南）

158邮件营销专家收集整理了部分网络上留下的**免费邮箱**的设置方法，并对其在邮件群发软件中的具体配置给出实例，是进行邮件群发的网络营销必看的指南型内容！

![配置邮件群发账号](/static/images/qunfa158-qunfa-141-0.png)

**【打开发送账号配置窗体】**

需要指出的是，  
（1）以下举例的发送邮箱基本按照性能优劣排序，越靠前的邮箱综合性能越好，但不排除因为反复或接收发送重复，以及通过非正常途径快速自动申请的降级账号等情况而带来的个别账号的性能下降。  
（2）对于本文档未涉及到的通用邮箱的设置，请联系在线客服咨询。  
（3）对于正规的企业邮箱的设置，请联系贵单位网管关于SMTP的信息。  
（4）关于SSL支持的问题，如果没有特别指出，使用前请咨询在线客服。

* * *

我们提供收费的专门用于邮件营销的邮件群发账号，是深度定制的SMTP投递服务，包括附件在内，邮件大小限制不超过20K，对于优化过的HTML网页邮件发送完全没有问题，结合158邮件营销专家使用，平均发送速度可以达到每小时500封，每天超过一万封，相当于市面上100个普通的企业邮箱，[需提前申请，一个工作日内开通，具体付费购买和账号开设事宜请联系我们](http://www.qunfa158.com/contact "邮件群发软件")。

* * *

![QQ邮件群发](/static/images/qunfa158-qunfa-141-1.png)

**【QQ邮箱的设置】**

国内用QQ邮箱速度稳定，限制是新的QQ邮箱要激活后14天可用SMTP服务。 QQ邮箱的SMTP服务器也已经支持SSL连接了，因此配置QQ邮箱时候SSL也是可以选择的。2014年2月份最新动态：使用QQ邮箱建议选择SSL方式，这样刚激活SMTP的账号成功率更大一些。[QQ邮箱要支持SMTP，需要简单的设置，点击这里查看如何设置！](http://service.mail.qq.com/cgi-bin/help?subtype=1&&id=28&&no=166)

* * *

![QQ邮件群发](/static/images/qunfa158-qunfa-141-2.png)

**【QQ企业邮箱的设置】**

我们以kf@qunfa158.com这个邮箱为例，假设使用的是QQ企业邮箱服务，那么设置如上图所示，其中服务器为：smtp.exmail.qq.com，用户名是整个邮箱地址，SSL建议选中。

* * *

![Gmail邮件群发](/static/images/qunfa158-qunfa-141-3.png)

**【Gmail邮箱的设置】**

现在新申请的Gmail邮箱默认都是开通SMTP服务的，可以直接使用。具体的设置如上图。设置Gmail邮箱的时候，建议用户的地方填写整个Email地址，因为企业邮箱也是同样的SMTP服务器地址，而邮箱账号则不是@gmail.com结尾的。

使用Gmail邮箱的注意事项：Gmail邮箱如果被禁用了，一般情况下只要能在Gmail的网页中成功登陆进去即可自动重新激活。

* * *

![雅虎邮件群发](/static/images/qunfa158-qunfa-141-4.png)

**【Yahoo.com邮箱的设置】**

Yahoo.com的免费邮箱曾经默认开通了SMTP服务，但是在2022年的服务中，需要开通付费邮箱，这一方面是由于被AOL收购之后，业务范围有所调整；同时，从2021年11月份开始，雅虎收缩在中国的业务，从免费邮箱区分出收费功能，也是大势所趋。如果开通的SMTP，使用的时候需要选择SSL支持。对应的SMTP信息如下为， 服务器：smtp.mail.yahoo.com， 用户名：如果是yahoo.com结尾的，@前面部分即可；如果是ymail.com结尾的，则是整个Email地址。 雅虎邮箱其他可用邮箱还包括：yahoo.co.jp、yahoo.ca、yahoo.co.uk、yahoo.com.hk等，他们都是相互独立的邮件服务器，具体SMTP服 务器设置见他们网站上提供的帮助文档，本站收集的部分仅供参考。

* * *

![新浪邮件群发](/static/images/qunfa158-qunfa-141-5.png)

**【新浪邮箱 @sina.com】**

使用新浪邮箱的注意事项：（1）最近sina邮箱调整过的，单次连接发送数建议设置为1~5；（2）新浪邮箱发QQ邮箱最近经常出现丢失或者拒绝投递现象，因此成功率较低， 使用sina邮箱发QQ邮箱需要注意。（3） 请先在web页面登录邮箱，确认邮箱设置的“POP/SMTP设置”开启；新浪VIP邮箱不需要此操作。（4） 最新申请的新浪邮箱，除了网页激活POP3 / SMTP选项外，至少还要在网页邮箱中发送一封Email，然后才可以再客户端使用SMTP服务，省略 这个步骤发出去的邮件一般都是被新浪服务器自动丢弃的（在没有退信的情况下）。 （5）密码设置不要过于简单，不要是123456以及111111之类的密码，相对复杂一些。

* * *

![新浪CN邮箱群发邮件](/static/images/qunfa158-qunfa-141-6.png)

**【新浪CN邮箱的配置】**

新浪CN邮箱 @sina.cn的服务器 smtp.sina.cn 用户名 @前面部分。Sina.cn邮箱需要网页登陆，在右上角Email地址下面，选择“设置”，进入“账户”这个选项页，找到“POP3/SMTP服务”，将状态设置为“开启”，保存并退出。

* * *

**【 GMX邮箱的设置】**

GMX邮箱 [http://www.gmx.com](http://www.gmx.com) （最新推荐） 【备注：GMX新版本服务器目前是同时支持SSL，因此不一定要选择SSL连接】 为英文邮箱，很稳定，可以到主页注册。注册后，在我们软件中输入的信息为： SMTP服务器地址是：mail.gmx.com，用户名为 [xxxx@gmx.com](mailto:xxxx@gmx.com)。

* * *

**【中国移动139邮箱】**

中国移动139邮箱 [http://www.139.com](http://www.139.com) 139邮箱（中国移动）不需要激活SMTP，手机注册登录之后即可使用。

* * *

**【网易邮箱的设置】**

网易邮箱，包括163.com 126.com yeah.net  
（1）网易邮箱已经重新开放SMTP服务，有的账号申请后 还是需要先Web网页登录激活SMTP/POP服务，但并不是所有账号都需要，因此建议每个都检查。  
（2）重新开放的网易邮箱SMTP服务，对大批量邮件群发的 限制更加严格，性能一般。  
（3）网易系列邮箱，包括126、163、yeah以及域名邮箱，对邮件内容的限制过于苛刻，比如邮件内容中出现商业敏感词汇以及HTML代码、 http://等内容，都是投递不出去的；同时，包含这些内容的邮件也很难投递进去。  
（4）126、163、yeah虽然域名不同，但属于同一个邮箱服务器，对于群发垃圾邮件的拦截是相通的。  
（5）激活SMTP之后，至少在网页上发送一封Email给其他邮箱，内容不限，不然客户端直接发送出去的邮件很容易丢失。  
（6）密码设置不要过于简单，不要是123456以及111111之类的密码，相对复杂一些。

* * *

**【Mail邮箱的设置】**

Mail邮箱（英文） 申请地址为：http://www.mail.com 配置的SMTP信息如下： 服务器：smtp.mail.com 用户名：@前面部分，或者整个Email地址。 建议使用SSL支持。

* * *

**【PCHome邮箱的设置】**

台湾PCHome邮箱 http://mail.pchome.com.tw 【最新：台湾邮箱投递大陆的邮箱邮件丢失比较大，其他地区暂时没发现有异常】 SMTP服务器：smtp.pchome.com.tw 用户名是@前面的部分

* * *

**【天涯邮箱的设置】**

天涯邮箱 tianya.cn 申请地址：http://mail.tianya.cn/ SMTP服务器：smtp.tianya.cn 用户名：yourid@tianya.cn

* * *

GaWab  申请地址 http://www.gawab.com SMTP地址是：smtp.gawab.com  用户名是@前面的部分。

中国经济网 http://freemail.ce.cn SMTP：freemail.ce.cn 用户名：xxxx@ce.cn （带@后面的部分）

Hainan.net 可以直接申请并使用SMTP服务。 SMTP服务器：smtp.hainan.net 用户名：yourid@hainan.net

3126免费邮箱 http://www.3126.com POP及SMTP地址分别为pop3.3126.com、smtp.3126.com

\\===========参考内容：客户端投递性能一般的服务器=========================

部分邮箱服务器的帮助文档虽然说明提供SMTP/POP3服务，但是由于过于严格的病毒扫描、垃圾邮件监控等机制，导致从客户端投递Email的功能形态虚设，因此总体性能表现较差，比如tom、sohu、21cn等。这类服务器可以适当使用，建议适当配置一些进去比例不要太大，单次连接发送数设置为1~2 。

搜狐邮箱 Sohu邮箱是支持SMTP的，但是很不稳定，包括sogou邮箱，和21cn以及tom一样，不推荐使用。 这几个服务器邮箱最大的问题在于基于SMTP连接时候用户身份认证的等待时间很长，需要增大[邮件群发软件](http://www.qunfa158.com)中的发送时间间隔的值，比如设置为2~10，而这样会大大降低了邮件群发的效率。
`,Zd=`---
title: 如何导入Excel格式的收件人Email列表
date: 2020-09-04
author: 158软件
description: 如何导入Excel格式的收件人Email列表 158邮件营销专家是一款功能强大，性能稳定，操作简单方便的邮件群发软件，支持Gmail、AOL等需要SSL加密连接才能发送邮件的邮箱，
---

# 如何导入Excel格式的收件人Email列表

158邮件营销专家是一款功能强大，性能稳定，操作简单方便的邮件群发软件，支持Gmail、AOL等需要SSL加密连接才能发送邮件的邮箱，自带简单易用的所见即所得的图文编辑器功能，收件人列表支持Text格式和Excel格式两种。对于Text格式的收件人，这里就不赘述了，主要每行一个email地址即可。这里对如何导入Excel格式的收件人Email列表做说明。

首先要明确Excel中文件和表单的区别。一个Excel文件可以包含若干个表单，每个表单的内容就是我们通常见到的表格。因此在158邮件营销专家中，选择了一个Excel文件之后，紧接着就要选择表单了，如下图所示：  
![邮件群发](/static/images/qunfa158-qunfa-143-0.jpg)

Excel文件中要导入的表单（Sheet）必须符合以下两点：  
（1）第一行必须是列名；  
（2）第一列必须是Email地址。

![](/static/images/qunfa158-qunfa-143-1.png)

[点击这里下载Excel格式的邮件群发地址示例。](http://yanyubao.tseo.cn/download/Email%E5%9C%B0%E5%9D%80%E4%BE%8B%E5%AD%90.xls)

158邮件营销专家提供了对于Excel列表动态宏定义的强大功能，大家可以参考软件的帮助手册具体操作。

![](/static/images/qunfa158-qunfa-143-2.png)
`,Jd=`---
title: 158邮件营销专家帮助手册
date: 2022-04-13
author: 158软件
description: 158邮件营销专家帮助手册 158邮件营销软件是著名的邮件群发工具软件，支持SSL安全加密技术，无需太多专业知识也可以轻松操作，模拟人工的邮件群发。在一定程度上避免了垃圾邮件的问题
---

# 158邮件营销专家帮助手册

158邮件营销软件是著名的邮件群发工具软件，支持SSL安全加密技术，无需太多专业知识也可以轻松操作，模拟人工的邮件群发。在一定程度上避免了垃圾邮件的问题。在邮件群发过程中，可以通过使用宏定义、交替使用不同类型服务器等方式，避免邮件内容和发送账号被服务器封杀。

## 1 软件界面概览

软件主界面如下图所示，分区情况如下：

![](/static/images/qunfa158-qunfa-208-0.png)

（1）发件人基本信息，包括Email地址和姓名等。

（2）邮件内容：包括标题、内容、附件、邮件编码等信息。

（3）发送日志和统计：提供详细的发送日志、成功数量、失败数量以及详情。

（4）收件人列表：可以选择从Text或者Excel中导入。

（5）发送账号（SMTP账号）以及发送控制。

## 2 填写发信人基本信息

发送邮件前，发件人的“Email”和“姓名”这两项是必须填写的。

![](/static/images/qunfa158-qunfa-208-1.png)

这里的发件人Email地址，就是“回复地址”，而不是真实发送邮件的Email地址。  
“回复地址”是对方收到邮件后，点击回复按钮，他的新撰写邮件的收件人地址栏的Email地址。

对于大批量的邮件群发，有时候一个回复地址或者一个发送者姓名是不够的，需要设置多个，其技巧就是，将这两个字段的内容的多个部分都要用“||”分割开来，群发软件在发送每封邮件的时候，会随机选择一个，这样就实现了发件人姓名和回复地址的动态改变。

对于多个邮箱轮流发送邮件的情况，这个功能很有用处，它将回复的邮件都集中到了一个或者几个邮箱中，便于及时收集用户反馈。

需要指出的是：

（1）自动回复以及因为对方服务器用户不存在、邮箱满等情况而产生的退信，则还是到最原始的发送邮箱中。

（2）某些邮件客户端，特别是一些企业内部搭建的邮箱网页客户端，不是完全支持标准SMTP协议，往往忽略回复地址这个标签。

## 3 撰写邮件内容

### 3.1 文本邮件和网页邮件

158邮件营销专家主界面的邮件编辑器是纯文本格式的，对于发送多媒体邮件，可以选择软件自带的图文编辑器。

打开后可以看到一个简单的图文编辑，这里可以编辑HTML格式的网页邮件。使用这个编辑编辑问题的大小、颜色，插入图片、设置文字超级链接以及图片超链接等功能是足够了。如果需要插入表格和层等复杂的网页结构，建议使用Dreamweaver等专业的网页编辑器。

编辑好邮件内容后，保存，退出，可以在主界面看到邮件内容的源代码（HTML代码）。这不影响多媒体格式的邮件内容的发送，邮件群发过程中软件会自动将其做HTML邮件格式编码。

您可以在我们软件的菜单–>>工具–>>预览邮件内容中查看发送出去后的效果，或者先给自己的邮箱发送几封看看邮件内容是否有需要修改的地方。

### 3.2 动态改变邮件标题和内容

为了减少进垃圾邮件的可能性，同时避免发送邮箱账号被SMTP服务器封杀，在撰写邮件的时候，建议适当增加宏定义标签，即我们常说的动态变量，让发出去的每一封邮件的内容各不相同。

![](/static/images/qunfa158-qunfa-208-2.png)

### 3.3 邮件内容的其他选项

（1）要求对方发送阅读收条：要求对方发送阅读收条就是对方打开你的email并阅读完之后，提醒对方给你发一封信，说“我已经拜读了你的email啦”，呵呵。

![](/static/images/qunfa158-qunfa-208-3.png)

（2）使用本地SMTP服务器：需要本地电脑安装Windows自带的IIS组件中的SMTP组件。

（3）邮件格式：邮件格式我们目前支持两种格式：纯文本格式和HTML格式。  
纯文本格式大家都知道了，就不多说了。HTML格式就是一般的网页代码，可以嵌入图片等信息。新版的邮件群发软件已经支持图文编辑器，方便大家编辑带图片和链接的群发邮件内容。

（4）邮件编码：默认简体中文，编码为GB2312格式；日文为Japanese (JIS)（iso-2022-jp），韩文是ks\\_c\\_5601，纯英文邮件一般用Western European (ISO)或Western European (Windows)。

（5）MIME格式：这是SMTP协议的范畴，就是一封邮件由多个部分组成。如果再发送过程中添加了附件或者图片到邮件内容中，我们软件会自动使用这个选项，因此如果对此不理解，可以忽略此配置项。

（6）附件：支持多个附件发送。支持鼠标拖拽添加附件，可以添加多个附件，一个添加完之后，继续添加下一个即可；附件不宜太大，不然会严重影响你的发送速度，例如一个Word文档，建议放到一个网址里让别人去下载，在邮件内容里说明网址即可。

（7）直接用EML文件群发邮件：Outlook等邮件阅读工具，都支持将邮件内容保存为eml文件，直接选择这个文件作为邮件内容发送，其中的图片和文字都不会丢失。

## 4 导入收件人列表

导入Email地址我们支持两种文本格式：Text文件导入和Excel文件导入。

![](/static/images/qunfa158-qunfa-208-4.png)

### 4.1 文本格式的收件人列表

群发要求文件格式的收件人列表必须每行一个Email地址，不允许使用逗号或者分号等特殊分隔符号。文本文件的编码格式建议为ASCII，因为Unicode或者其他编码格式可能存在兼容性问题。

### 4.2 导入Excel格式的收件人列表

对于Excel格式的收件人地址列表，软件要求第一行必须是标题，不可以出现Email地址；而第一列必须是Email地址，不可以是其他信息，提供一个例子截图如下：

![](/static/images/qunfa158-qunfa-208-5.png)

## 5 配置邮件发送服务器

配置邮件发送服务器是使用158邮件营销专家的重要步骤和主要工作。

![](/static/images/qunfa158-qunfa-208-6.png)

### 5.1 基本配置过程

如果是第一次使用，打开后里面默认配置了3个，这只是例子，用于演示如果配置邮箱账号，他们的用户名和密码是错误，全部删除，然后配置自己的。

![](/static/images/qunfa158-qunfa-208-7.png)

![](/static/images/qunfa158-qunfa-208-8.png)

对于常用的Email邮箱，比如Gmail、Sina、QQ、139等，只需要输入Email地址，将输入光标移走，或者按键盘上的F2键，软件会自动填写“服务器”以及“用户名”等信息，那么剩下的事情只要输入密码保存就可以了。

在配置的过程中，您还可以测试配置的邮箱是否可用。不过需要指出的是，测试账号和实际群发过程还是有很大差别的，而且测试后软件设置了最大处理超时，因此这个结果仅供群发前参考。

普通的SMTP邮箱，包括QQ、网易、新浪等，根据发送频率、邮件内容、账号属性等因素的不同，限制的发送量也略有区别，一般情况下，每天200封左右的邮件投递量，因此可以组合大量的邮件群发账号，由邮件群发软件自动分配使用。

常用的免费电子邮箱的SMTP配置方法见：[http://www.qunfa158.com/qunfa/141.html](http://www.qunfa158.com/qunfa/141.html)

以上是免费邮件发送账号的解决方案，单账号大批量邮件投递方案基本都是收费项目，但是收费邮箱的每日投递量正常不会超过2000封。可以选择自建邮件服务器，也可以购买我们现成的独立邮件群发服务器解决方案，查看详情：[http://www.qunfa158.com/qunfa/758.html](http://www.qunfa158.com/qunfa/758.html)

### 5.2 关于“一次连接服务器连续发送”的参数

“一次连接服务器连续发送”，根据不同邮箱服务器提供的服务标准，以及SMTP的服务器性能而定，一般设置在1~10之间比较合理。

### 5.3 大批量配置发送服务器邮箱

对于大批量的邮件群发，配置3~5个发送账号是远远不够的，我们建议常规维持50个左右的可用发送账号比较合适。当然，这些账号不一定一次性全部配置进去，您可以在第一天使用的时候配置10个左右或者更多，以后每天陆续增加几个，这样累计起来就多了。需要注意的是，这样账号要间隔开来配置，不然依然会造成发送过程的不稳定。

同一个Email发送账号，有时候测试或者发送是正常的，有时候失败，这是服务器不稳定，或者对应的Email账号在服务器上不稳定造成的，可以过几分钟或者几个小时候再试；如果问题依然存在，可能是邮箱账号被服务器禁用了，用Web方式在网页上登录，找找对应的重新激活方式。

配置发送邮箱的时候，第一项，即“启用此账号”请打钩，这样群发过程中这个发送邮箱账号才会被使用；同理，如果你先暂时不使用这个邮箱，不要选择这项即可。

### 5.4 批量导入导出发送邮箱

批量导入发件人Email地址，支持Excel和Text两种格式。可以在菜单–>>工具–>>批量导入SMTP账号中操作。

批量导出发送邮箱账号可以在账号配置界面操作。导出格式为Excel。

### 5.5 隐藏真实发送邮箱

在我们软件的菜单–>>设置–>>高级选项中，可以隐藏真实的发送地址，而伪装回复地址作为发件人地址。而且我们还可以调整发送邮件的时间间隔以及最大连接。

需要注意的是，这个操作有一定风险，不是对所有服务器都有效的。

## 6 发送邮件

在完成上述配置，并导入收件人地址后，可以开始发送邮件的。在发送过程中，可以随时暂停或者停止发送过程。

## 7 发送完成后的工作

邮件发送过程中，会有一些Email不存在，或者因为发送服务器异常而不能投递出去，这是很正常的。您可以随时通过软件主界面右上方的“日志”查看最新的发送动态。

在一轮发送任务完成后，可以将投递失败的邮件列表导出来，重新导入群发软件中，再次发送。可以在菜单–>>查看–>>SMTP健康报告中，查看配置的邮件发送服务器是否还工作良好，对于无法连接或者连接失败的发送账号，可以暂时禁用或者到对应的Web页面登录查看具体的错误原因。

如果是中途停止了邮件发送过程，可以在菜单–>>工具–>>导出未发送Email中，将剩余的Email地址导出来，以便于下次发送。
`,Yd=`---
title: 被忽略的邮件群发细节
date: 2014-05-14
author: 158软件
description: 被忽略的邮件群发细节 邮件群发效果如何，相信大部分接触过电子商务的人都了解邮件群发，邮件群发是现在网站推广用的比较多的一种方式，特别是158邮件营销专家，功能虽然强大，性能虽然很好
---

# 被忽略的邮件群发细节

![邮件群发软件](/static/images/qunfa158-qunfa-256-0.jpg)

邮件群发效果如何，相信大部分接触过电子商务的人都了解邮件群发，邮件群发是现在网站推广用的比较多的一种方式，特别是[**158邮件营销专家**](http://www.qunfa158.com/tag/158%E9%82%AE%E4%BB%B6%E8%90%A5%E9%94%80%E4%B8%93%E5%AE%B6)，功能虽然强大，性能虽然很好，但是一开始使用的时候没有注意其中的一些细节，常常弄巧成拙，因此这里特别总结一下。

首先指出几个邮件营销过程中的误区。  
1、邮件营销是有目的的[邮件群发](http://www.qunfa158.com)过程，不是漫无目的的邮件发送，选定目标收件人群是关键。  
2、邮件的可读性很重要，不能光发广告。  
3、有人说邮件群发器的发送成功率一般会在99%以上，这个结果是不切实际的。  
4、邮件群发能有0.5%的转化率已经很好了，根据你推销的产品不同相差也会很大。

接下来对以上几点展开说一下，他们都是觉得邮件群发效果的重要因素。  
**1、邮件地址的准确性**：如果邮件地址列表超过50%是无效地址，那注定这次邮件营销会以失败告终。一般市场上采集来的信息有效性都比较低，使用虫虫Email搜索，匹配Email地址非常精准，但有效邮箱地址不超过90%，这已经是相当不错的水平了。所以在邮件群发的时候，务必在电子邮件逐个发中打开邮件真实性检测。  
**2、邮件模板的设计**：一个好的模板能够让人一目了然的知道邮件的主题。但是很多模板设计者总是想着通过一次邮件营销就带来产出，导致所做的模板触犯了ESP的垃圾邮件规则，无论怎么发都是垃圾邮件。因此，必须在界面美观和内容合适中找出最优点。  
**3、邮件标题的创意**：一个有创意的标题会吸引接收者打开邮件，只有打开邮件才会看到邮件里面的内容，在我们的经验中邮件标题会直接影响到邮件的打开率，所以我们在邮件营销的过程中需要反复的测试邮件接收者的喜好，进行对比选择一个可以令邮件接收者打开邮件的创意。  
**4、邮件发送报告的分析**：通过发送报告我们可以将发送效果进行量化，比如：到达率、打开率、内容点击率等重要参数的分析，将没有到达的邮件进行过滤，将不同的邮件内容和标题进行多次测试。选择最优的方案进行持续营销。这里推荐的是邮件营销分析系统，即http://ema.qunfa.co，非常的简单实用，很容易看懂。

最后需要给大家纠正的几点是：  
1、仅靠一次邮件发送就能带来大量的业绩产出，是非常不现实的。  
2、邮件内容在不会对邮件接收者反感的基础上进行策划。  
3、邮件发送的数量多少一定要在尊重邮件接收方意愿的前提下进行。
`,ep=`---
title: 批量转换SMTP账号用于邮件群发
date: 2014-11-26
author: 158软件
description: 批量转换SMTP账号用于邮件群发 158邮件营销专家做为一款功能强大，性能稳定的邮件群发软件，其自身提供了所见即所得的图文邮件编辑器，可以在邮件内容中插入图片、设置字体大小和颜色，
---

# 批量转换SMTP账号用于邮件群发

158邮件营销专家做为一款功能强大，性能稳定的[邮件群发软件](http://www.qunfa158.com/tag/%E9%82%AE%E4%BB%B6%E7%BE%A4%E5%8F%91%E8%BD%AF%E4%BB%B6)，其自身提供了所见即所得的图文邮件编辑器，可以在邮件内容中插入图片、设置字体大小和颜色，同时也可以直接将专业的网页编辑软件中的HTML代码复制黏贴进来，组织内容丰富的邮件内容来群发。除了邮件内容，158邮件营销专家还提供了功能丰富的发送邮箱账号批量管理功能，其中的导入导出就是亮点之一。

要批量导入SMTP账号，首先需要组织成Excel格式的文件，如下图所示：

![批量导入SMTP账号](/static/images/qunfa158-qunfa-281-0.png)

很多人认为这是比较繁琐的，所以我们这里提供将记事本格式的SMTP账号文件批量转换为Excel的发送邮箱账号并于邮件群发的在线工具。

首先准备记事本文件，要求简单的格式，如下图：

![邮件群发SMTP账号](/static/images/qunfa158-qunfa-281-1.png)

即每行一条记录，每条记录包含Email地址和对应的邮箱密码，目前支持的常用电子邮箱包括：@gmail.com @sina.com @sina.cn @vip.sina.com @qq.com @139.com @eyou.com @tom.com @21cn.com @163.com @126.com @yeah.net @vip.163.com @yahoo.com @yahoo.ca @yahoo.co.jp @yahoo.co.uk @yahoo.com.cn @yahoo.com.hk @yahoo.cn @sohu.com @sogou.com @hexun.com @yahoo.com.tw

组织好记事本文件放在你的电脑上的任意位置，在以下工具中选择该文件，并转换。  
目前版本转换限制如下：  
（1）单个记事本文件大小不超过1M；  
（2）单个记事本文件中的邮箱数量不超过5000个。

选择要转换的记事本文件:

转换完成之后，会自动生成一个Excel文件让您下载，这就是符合158邮件营销专家SMTP账号规则的批量文件。在邮件群发软件中如何导入请参考文档：

[http://www.qunfa158.com/qunfa/288.html](http://www.qunfa158.com/qunfa/288.html)
`,tp=`---
title: 批量导入导出邮件群发软件中的SMTP账号
date: 2014-05-14
author: 158软件
description: 批量导入导出邮件群发软件中的SMTP账号 邮件群发软件158邮件营销专家支持最多65535个发送邮箱账号（即SMTP账号）管理，因此对齐备份和恢复也就有必要了，这就涉及到对这些SM
---

# 批量导入导出邮件群发软件中的SMTP账号

邮件群发软件158邮件营销专家支持最多65535个发送邮箱账号（即SMTP账号）管理，因此对齐备份和恢复也就有必要了，这就涉及到对这些SMTP账号的批量导入和导出操作。

1、批量导出SMTP账号

这个过程很简单，一张图说明问题：

![批量导入导出邮件群发账号](/static/images/qunfa158-qunfa-288-0.png)

批量导出来的SMTP账号是以Excel格式保存的，可以直接使用Excel、WPS等软件打开并编辑，导出之后的格式应该如下图所示。

![](/static/images/qunfa158-qunfa-288-1.png)

下面说一下大批量导入的。

2、批量导入SMTP账号

在158邮件营销专家版的“菜单”–>>工具–>>“批量导入SMTP账号”这个选项中，注册版可以打开批量导入工具如下图所示：

![](/static/images/qunfa158-qunfa-288-2.png)

打开的工具如下图所示，选择如上图所示的Excel格式文件，按照以下画圈的地方逐个操作。

![](/static/images/qunfa158-qunfa-288-3.png)

从以上截图不难看出，在组织Excel文件过程中，第一列的序号可以不填写，而最后一列的标志也不会被读取，因此也可以不填。

如果你没有现成的Excel格式，可以使用我们的在线工具做一个转换即可，工具网页地址是：

[http://www.qunfa158.com/qunfa/281.html](http://www.qunfa158.com/qunfa/281.html)

至此，一个完整的批量导入导出邮件群发账号的过程如上。
`,np=`---
title: 邮件群发营销选哪种邮箱
date: 2014-11-26
author: 158软件
description: 邮件群发营销选哪种邮箱 既然要发邮件，那少不了要有发送邮件的邮箱，我们大多数人用的都是免费邮箱进行发送，如网易的163和126邮箱、Gmail、新浪邮箱、QQ邮箱、foxmail等
---

# 邮件群发营销选哪种邮箱

既然要发邮件，那少不了要有发送邮件的邮箱，我们大多数人用的都是免费邮箱进行发送，如网易的163和126邮箱、Gmail、新浪邮箱、QQ邮箱、foxmail等，此外还有一些企业邮箱和收费邮箱。那么在**158邮件营销专家**中使用哪种邮箱比较合适呢？

1：免费邮箱群发

说到免费邮箱，我们最熟悉不过了，相信每个人都有个免费邮箱，常见的有163、126、QQ、新浪、搜狐、Gmail、foxmail、21cn、139等等。

说实话，大规模群发邮件是不可能在免费邮箱里进行的，就拿126为例，登陆邮箱后，每次最后只能群发一二十个，发多了就要输入验证码，甚至被封禁。我们必须要选择支持SMTP的邮局，通过第三方邮件发送软件进行发送。

新浪、搜狐、Gmail虽然支持客户端发送，但是你一天正常发几十封是没问题的，一旦发多了，SMTP就失效了，有时候你以为发出去了，其实对方根本没收到。QQ邮箱和foxmail同属一家，用腾讯的邮箱群发只要不发太多，通常不会被封，你发过了它只会不准你发，你第二天又可以发了。

这类免费邮箱群发方式非常适合我们这些穷的叮当响的站长做群发推广，158软件提醒，**邮件推广是点对点的推广，费用低，甚至不要钱，是最好的一种网络推广方式，但也要坚持下去才能有效。**

2：收费邮箱群发

网易的163、126、188，新浪搜狐都有收费邮箱，其中网易的VIP邮箱很不错，最大的优点是可以通过网页进行邮件群发，每月收费在10-60元不等，这类收费邮箱一般占长还是承受的起这费用的。以10元的126收费邮箱为例，一次就能群发100封邮件，30元以上的VIP邮箱一次可以群发400封邮件，它还有个特点就是可以群发单显（就是在群发邮件时，会采取一对一发送方式，给人感觉每个收件人看到的都是该邮件单独发给自己，不会有群发的感觉）。

虽然是收费邮箱，但并不是可以无止境的发送邮件，网易的收费邮箱通常发1-2千封就提示今天不能再发了，有时候甚至会封禁。封禁的原因有很多，跟群发内容有关，也跟无效地址太多有关。

3：企业邮箱群发

一个邮箱大小100M的企业邮箱价格是100-300元/年不等，价格不算贵，但用来进行邮件营销的风险却很大，假如每天要发送上千封邮件，很容易被企业邮箱服务提供商封禁，如果封禁后再开通，除了要缴纳保证金，还要写保证书。即使你的企业邮箱没有被封，这些大型的邮箱运营商很容易就能监测到你的企业邮箱在大量发送邮件，从而把你的邮箱列为黑名单。

2010年关于企业邮箱的事好像特别多，网易域名邮箱摇身变为“网易免费企业邮”、网易推出域名邮箱服务。腾讯企业邮箱也进行开始小范围内测。而使用这些免费企业邮箱的好处就是可以强力群发邮件，每天可以群发500封，有兴趣的朋友可以注册个属于你域名的企业邮箱。
`,up=`---
title: 群发出去的邮件中为什么会有“显示图片”的确认提示
date: 2014-05-22
author: 158软件
description: 群发出去的邮件中为什么会有“显示图片”的确认提示 158邮件营销专家提供了小巧灵活的图文邮件内容编辑器，可以自由的在邮件内容中插入链接、图片等信息，所有的编辑都是所见即所得的，非常
---

# 群发出去的邮件中为什么会有“显示图片”的确认提示

158邮件营销专家提供了小巧灵活的图文邮件内容编辑器，可以自由的在邮件内容中插入链接、图片等信息，所有的编辑都是所见即所得的，非常方便。但是群发出去的邮件经常会出现“显示图片”的安全提醒。随着各种邮件阅读工具的功能改善，以及对安全性要求的不断提高，邮件内容中出现这类“显示图片”提示是很正常的，而不是因为你使用了邮件群发软件而引起的。由于这些多媒体内容总可能包含木马、病毒以及其他可执行代码，而一旦包含这些东西，会感染用户电脑。因此，你给其他人发送Email，邮件阅读工具友善提醒收件人，是合乎情理的。

另一方面，如果发件人在收件人的通讯录或者白名单中，一般不会有这个提示，因为邮件阅读工具认为来自熟人的邮件内容是安全的。

我们最常见的网页登陆QQ遇到的也是一个问题，如下图：

![QQ邮件群发](/static/images/qunfa158-qunfa-297-0.gif)

只有发件人在收件人的可信列表，比如QQ邮箱通讯录/联系人或者QQ好友中情况下，图片才会自动显示出来。

这是可以理解的最基础的安全常识，和是不是群发的电子邮件，以及用哪个软件发送的没有关系。

换而言之，任何软件发出去都可能会有这样的提示，和158邮件营销专家没有关系，这是发件人不在白名单中等客观因素所决定的。

从上述分析也可以看出，  
（1）出现这类安全性提示不是邮件发送方可以控制和调配的，与邮件群发与否没有直接关系；  
（2）是否发送Html格式邮件要根据自己内容需要来设计的，没有必要过滤这个提示而不发送Html邮件。

以下是另外两个我们经常遇到的例子。

（1）支付宝的群发邮件

![](/static/images/qunfa158-qunfa-297-1.gif)

（2）糯米团的广告邮件群发

![邮件群发](/static/images/qunfa158-qunfa-297-2.gif)
`,ip=`---
title: 是否需要变换IP群发电子邮件
date: 2014-05-14
author: 158软件
description: 是否需要变换IP群发电子邮件 158邮件营销专家做为一款性能稳定，功能强大的邮件群发软件，多年来在用户群中有着良好的口碑，其中关于是否要自动更换IP地址群发电子邮件的需求也经过几次
---

# 是否需要变换IP群发电子邮件

158邮件营销专家做为一款性能稳定，功能强大的**邮件群发软件**，多年来在用户群中有着良好的口碑，其中关于是否要自动更换IP地址群发电子邮件的需求也经过几次删改，而最终选择去掉这个功能，主要是出于以下几点考虑。

1、根据我们做邮件群发的经验，变换IP发送非但没有效果，而且容易造成发送帐号被永久性禁用。

2、我们都知道，一般上网用的IP是动态分配的。 试想，邮件服务器将你的IP地址封杀了，你换了IP，这个IP就会被分配到其他上网用户那里。为什么呢？因为这个IP如果没有被其他上网用户占用，那么你 下次拨号上网的时候，交换机还是会优先将这个IP给你的。所以，你得到了其他IP，原来的IP肯定已经给别人用了。这是基于前面所述的原因，群发性能好的 邮件发送服务器（SMTP）都不会以封IP左右限制邮件群发的手段，因为这样做的代价是殃及无辜的上网用户。

3、目前市面上好多邮件群发软件都号 称可以变化IP，主要方式有三种：  
（1）不断拨号上网，要求软件运行的电脑是直接连接在电信或网通的ADSL Modem上，如果用户是通过路由器或其他局域网上网，则这个功能无效；  
（2）使用代理服务器连接出去，这种方式基本上行不通，因为现在互联网上没有那么多可供选择使用的代理服务器；  
（3）VPN上网，反复更换VPN账号。VPN是另外一个网络，这种方式的确可以有效改变IP地址，但对于具体的一个SMTP账号来说，反复使用不同的IP地址登录面临的最直接的问题就是账号被禁用。

4、另一方面，一个邮件发送帐号不断来自变换的IP，会让SMTP（邮件发送服务器）认为这个帐号在发送垃圾邮件，而且是恶意的，进而暂时屏蔽网段，并且永久封杀你的Email帐号。

5、由于158邮件营销专家支持在多种类型的邮件发送服务器（SMTP，比如163、GMail、QQ邮箱等）之间自动切换，即使一个服务器封了IP，其他服务器还是可以正常投递的；IP经过一段时间后解封，则Email账号还可以正常使用。

所以，自动更换IP在SMTP的邮件群发过程中，非但没有帮助，而且让发送邮箱账号更容易被服务器封掉，所以158邮件营销专家的早期版本也曾经集成的自动IP功能已经去掉了。
`,rp=`---
title: 2014年QQ群的邮件群发怎么做？
date: 2014-11-26
author: 158软件
description: 2014年QQ群的邮件群发怎么做？ 2014年QQ群中进行邮件群发营销的方法和注意事项，希望对广大158邮件营销软件群发电子邮件的用户有所帮助。158邮件群发软件提醒大家，要获取Q
---

# 2014年QQ群的邮件群发怎么做？

2014年QQ群中进行邮件群发营销的方法和注意事项，希望对广大158邮件营销软件群发电子邮件的用户有所帮助。[158邮件群发软件](http://www.qunfa158.com/tag/158%E9%82%AE%E4%BB%B6%E7%BE%A4%E5%8F%91%E8%BD%AF%E4%BB%B6 "邮件群发软件")提醒大家，要获取QQ群内的QQ号码，一般都是要加群的，不需要加群就能看信息的QQ群档次都不会太高的，从里面抓取的QQ号码对你最终的营销结果也不会有太大帮助。

一、寻找QQ号码集中的地方

这是最困扰大家的一个问题，其实不是很难，只是平时很少有人注意而已。在最新版本的QQ软件（如QQ 2013）中，打开QQ群，如下图，

![QQ群内邮件群发](/static/images/qunfa158-qunfa-304-0.png)

进入论坛之后选择右上角的“旧版本群论坛”，如下图：

![QQ邮件群发](/static/images/qunfa158-qunfa-304-1.png)

进入旧版本群论坛之后，可以看到论坛总人数汇总的地方，如图：

![QQ邮件群发](/static/images/qunfa158-qunfa-304-2.png)

如果在最新版本的QQ软件中找不到对应的论坛连接，可以直接使用以下这个地址：

**http://qun.qzone.qq.com/group#!/XXXXXXXXXX/home**

记得将XXXXXXXXXX换成您加入的对应的群号哦！

点击进去之后，就看到了所有会员列表了，剩下的操作就是Ctrl + C（复制），然后找个地方Ctrl + V（粘贴），你懂的，不细说了。

二、提取QQ号码

这时候你会发现其中的昵称夹杂在QQ号码中，很不工整，看起来也不舒服，而我们只想要QQ号码。怎么办？可以使用一个转换工具，将你刚才Ctrl + C（复制）获取的内容，在这里Ctrl + V（粘贴）。然后点击提取就可以了。

（批量提取数字的网页小工具）

通过以上操作过程，你会发现其中一些明星不是QQ号码的，删除掉他们，然后进入第三步操作。

三、追加@qq.com的尾巴

这一步骤的操作大家都很熟悉了，不赘述，毕竟用了那么多年了。

（将QQ号码变成QQ邮箱）

经过以上三个步骤，一份有价值的QQ邮箱列表就产生了，剩下发送邮件的过程，依然是老方法，在158邮件营销专家中导入对应的收件人Email，及以上步骤提取到的内容，然后群发就可以了。
`,op=`---
title: 邮件群发成功而对方却没有收到的情况分析
date: 2021-06-07
author: 158软件
description: 邮件群发成功而对方却没有收到的情况分析 邮件群发是大批量邮件投递的过程，由于复杂的网络原因以及许多人为设置的因素，邮件发送成功而对方却没有收到的情况是经常会出现的。邮件的群发与单封
---

# 邮件群发成功而对方却没有收到的情况分析

邮件群发是大批量邮件投递的过程，由于复杂的网络原因以及许多人为设置的因素，邮件发送成功而对方却没有收到的情况是经常会出现的。邮件的群发与单封既有相同的地方，也有一定的区别，因此不能认为群发出去的电子邮箱都是百分百成功的。发件人得到邮件发送服务器的反馈“成功”，不代表收件人服务器一定接收这封Email，或者收件人服务器接收了但一定转给收件人。

![邮件群发软件](/static/images/qunfa158-qunfa-315-0.gif)

数以千封的邮件群发，在确保收件人地址全部存在的情况下，成功率在80%左右是正常的范围值。而具体分析这些没有收到的情况，有以下几种可能：

**一、邮件正在传递途中。**

Email的发送过程不是同步的，各个传递中继处理需要时间；如果发送方服务器或者收信方服务器短时间内囤积了大批量邮件传递任务，也会有一定的时间去排队。这个周期最长是三天，如果三天内投递不成功，发件箱会有退信通知的。

**二、邮件在多个服务器或网段之间传递，延迟或拒绝投递。**

不同邮件域名或邮件服务器直接Email传递有一个过程，这个一般要几个小时甚至更长时间。如果这些服务器不在同一个网段，那么这封Email的传递过程肯定不是即时的。例如从Gmail邮箱给QQ邮箱发送邮件，经常会遇到这个情况，特别是用软件做邮件群发的过程中，短时间内的大量邮件会造成网络堵塞，从而降低了传递速度；而这个时候用网页直接发送，选择的路由与客户端发送的路由是不同的，速度则会提高，没有可比性。

另一方面，服务器也会决绝投递跨网域的Email。比如用QQ邮箱去发送QQ邮箱，很快就能收到了，而用sina邮箱通过SMTP去发送Email给QQ邮箱，数量稍微多一些或者内容稍有重复，新浪邮箱服务器往往拒绝投递而不做任何通知；但也不全部是这样的，比如Gmail邮箱去发送QQ邮件，如果拒绝投递，会Email通知你。

**三、收信服务器或者收件人直接拒收或丢弃。**

这种情况有很多种，这里着重说一下黑名单机制。服务器端要维护一个域名黑名单，对于每封过来的邮件，判断其所在域是否在这个黑名单中，形象的说，你的邮件地址是xxx@qunfa158.com，那么所有来自@后面的这个段的Email，都会被Block掉，但这不是等价的，比如你的Email地址是xxx@youjian.qunfa158.com，根据算法，同样符合qunfa158.com这个黑名单规则。

另一种就是内容过滤，比如网易系列邮箱经常会提高安全级别，将来自网易系列邮箱（163、126、yeah等）之外的，内容中包含附件、http字样的内容全部拒收或直接丢弃。21cn、sohu之类的收件服务器对此过滤较为严格。

基于这一点，大家要注意了，不要动辄用自己的公司域名的邮箱去群发大批量的邮件。这也是邮件群发的成功达不到100%的原因所在，一般大规模的邮件群发（一台电脑一天发送量大于2000），成功率在60%~80%之间已经不错了。

**四、进入垃圾邮件了。**

这种情况是很常见的，如果某个客户端发送频率过高，或者包含大量可疑为垃圾邮件内容的关键字，甚至收件人将你的email地址列入黑名单，你发过去的邮件，都会被判断垃圾邮件。详细的过程大家可参考158软件垃圾邮件避免方法的说明，其提供了比较多的避免垃圾邮件的办法。需要说明的是，垃圾邮件只能最大限度的去避免，不可能杜绝的，所谓的完全不进垃圾邮件的邮件群发软件，都是欺骗性的广告用语。

**五、发件服务器（SMTP服务器）不通知的情况下丢邮件。**

这种情况在新浪和网易邮箱中最为常见，包括sina.com和sina.cn，以及163、126、yeah等，这几个邮箱发出去的邮件。这类SMTP服务器认为某个账号可能群发邮件时候，会悄悄放弃传递，而告之用户投递成功，做法与Gmail相反。

**六、发件服务器（SMTP服务器）放弃投递。**

另一种情况就是发信方的SMTP服务器放弃投递，同时在发件箱中给出标记，告知“邮件未投递”，或者“投递不成功”。这种方式最早是QQ邮箱使用的方式，后来网页邮箱升级，也增加了这个功能。

**七、被发送方客户端或者服务器的杀毒软件或者防火墙过滤掉。**

客户端电脑的情况：如果你的客户端安装了瑞星、诺顿、卡巴斯基、金山网镖等杀毒软件或者防火墙之类的软件，并且设置了严格的网络过滤规则，他们可能过滤掉你正常群发的电子邮件。

服务前段过滤的情况：如果服务器端对内容检查比较严格，通过其SMTP传递Email会变得非常困难，比如sohu.com以及21cn.com等邮箱，虽然是开通SMTP服务了，但是他们的杀毒软件检查太严格，即使是正常的邮件内容，也很难通过他们传递出去。

**八、隐藏真实发件人连带出的问题。**

158邮件营销专家中隐藏真实发件人的选项需要谨慎使用，详情请参考软件的相关说明文档。

以上只是简单列出最常见的几种情况，虽不完全，但百分之八九十的邮件都跳不出这几点，至于解决方式，第一和第二种情况，只能耐心等；第三种情况，要检查自己的域名，包括是否支持反向域名解析等；第四种情况的解决方式，请看上文。

需要指出，如果您使用的是158邮件营销专家的试用版，那么以上分析仅供参考。因为注册版没有尾巴广告，单次连成发送多封，都可以提供邮件群发的成功率；而且注册用户有稳定的技术支持，在遇到这些问题的时候，会获得有针对性的指导，做出响应的改进来有效避免邮件群发软件中这类问题。
`,sp=`---
title: 如何避免邮件群发过程中的垃圾邮件
date: 2020-07-23
author: 158软件
description: 如何避免邮件群发过程中的垃圾邮件 为什么会有邮件群发成功而对方却没有收到的情况出现？有网友抱怨“邮件群发”过程中发出去的邮件进入了垃圾邮件，想知道为什么，是不是我们158邮件营销专
---

# 如何避免邮件群发过程中的垃圾邮件

为什么会有邮件群发成功而对方却没有收到的情况出现？有网友抱怨“邮件群发”过程中发出去的邮件进入了垃圾邮件，想知道为什么，是不是我们158邮件营销专家的问题？

进入垃圾邮件的原因很多，比如接收方服务器对垃圾邮件的判断标准不同（比如内容、发送频率、关键字等），问题不一定出在你那边。另外，现在很多邮箱服务提供商，经常神经过敏，即使通过网页登录进去发，也有可能进垃圾箱。还有一些杀毒软件，比如瑞星，有一段时间，只要是经过它扫描的邮件，几乎全是垃圾邮件。

**这种情况下，可以试着对照下面几点检查：**  
（1）修改邮件的标题内容。如果您的邮件中含有诸如“广告”、“代理”、“发票”等字眼，很容易被接收方当作垃圾邮件处理的；  
（2）SMTP账号太少，更换发送邮件发服务器太快，同一个发送服务器被多次使用，发送服务器会通知接受方，“我送过去的可能是垃圾邮件”；  
（3）发送的html邮件的HTML代码存在语法错误；  
（4）不要一直发送到一种类型的邮箱里。比如你的10000多个收件人都是QQ邮箱的（@qq.com），那么QQ邮箱服务器不断收到来自同一个IP地址的内容相同的邮件，当然会被误认为是垃圾邮件啦。  
（5）有些服务器整体对垃圾邮箱的界定标准非常严格，比如网易邮箱，只有邮件内容中包含网址（链接），或者不是来自网易邮箱发出去的Email，基本都被判断为垃圾邮件；这个标准肯定是不对的。避免被这类服务器判定为垃圾邮件，只能尽可能使用它们SMTP服务器投递对应的邮件（例：用163.com的SMTP账号给其他163.com邮箱发信），同时尽可能减少邮件内容中的敏感信息（例：http://、发票、发piao、中奖等字样）。

158邮件营销专家模拟人工发送，连接的是真实的网络服务器而不是特快专递之类的，因此进入垃圾邮件的几率大大降低了。

**由于不同的收件人服务器以及收件邮箱对垃圾邮件的判断和过滤标准错综复杂，有时候不是发送方的问题，所以任何软件都没有办法百分百避免进入垃圾邮件的归类。**但是邮件营销过程中，可以通过以上几点，最大限度的避免这类情况。

在邮件营销群发过程中，最好多注册一些支持SMTP的邮箱，免费的如Gmail.com、新浪、QQ等，如果您有一些稳定的收费邮箱，那么发送自由度就提高很多。每天轮发发送速度快效果好。
`,cp=`---
title: 邮件群发六大误区
date: 2014-04-20
author: 158软件
description: 邮件群发六大误区 电商可谓是近几年最热的词，像京东、苏宁易购、国美等都是较大型的电商巨头，拥有充足的电商经验，对于各种邮件营销战略是深喑其道。但对于初入电商之门的中小企业，在EDM
---

# 邮件群发六大误区

电商可谓是近几年最热的词，像京东、苏宁易购、国美等都是较大型的电商巨头，拥有充足的电商经验，对于各种邮件营销战略是深喑其道。但对于初入电商之门的中小企业，在EDM邮件营销上，还有很多欠缺之处，对邮件营销的认知也处于一个初级范畴。在实际的群发应用中，效果远不如意，让很多中小企业主百思不得其解。在此，小编就目前中小企业进行[邮件群发](http://www.qunfa158.com)中的六大误区晒出来为大家进行解读。

误区一：混淆许可/非许可EDM邮件营销定义

很多企业在进行邮件群发时，不会关注该用户对于你的邮件是否感兴趣，是否获得了用户许可，实行强制性的邮件推送，导致用户对邮件产生反感情绪，对产品印象极差，甚至直接列为垃圾邮件。如此一来，你还想有好的成效只能是空谈。所以说，在进行邮件营销推广时，用户对邮件的许可/非许可是要特别重视的。

误区二：过渡夸张的标题，邮件内容与之不符

邮件标题的吸引度是用户点击邮件重要因素，也是企业进行邮件营销要把握的因素之一。很多企业明白标题的重要性，但却忽视了邮件内容与标题的吻合性，一味的夸大其词，虽邮件打开率不错，但真正的用户转换却不尽如意。这主要是因为用户感受到内容与标题的差距，提不起兴趣，甚至产生反感，对你的描述不认同。因此，企业在进行邮件编辑时，标题一定切合邮件主题，万不可偏离其道。

误区三：邮件发的多，效果必然显著

“狂轰滥炸”原本是可用来形容垃圾邮件的猖獗滥送，但对于一些认为邮件数量多就能占据优势的中小企业邮件营销方式来说，用来形容一点不为过。且长此以往，都与垃圾邮件无异了。中小企业在进行邮件群发时，必需要有一个投送计划，最好能固定一个周期，比如每周一封的定期投递，同时在节假日、促销活动、新品上市等时期还可进行不定期邮件发送，以达到特定时期的宣传效果。

误区四：邮件发送后期与客户沟通不足

有些企业发送的邮件带给用户很大的反响，纷纷前来咨询，但无从得知咨询渠道或良久未得到回复，无从获取更多的信息，这对企业的邮件营销来说是一大禁忌，很容易造成目标客户的流失。所以企业在进行邮件编辑时，一定要留下联系方式，并确保该联系方式时刻有人监管，用户能实时与商家取得联系，并协调与用户之间的关系，以便沟通到位。

误区五：用户源单一，未时常进行新用户挖掘

在进行EDM邮件营销时，用户列表的收集是相当重要的。然而，现在却有这样一个现象：企业单靠一份购买来的列表或者原有的注册用户列表进行推广，而不进行其他用户列表的多样收集，扩充用户资源。面对这种情况，我只能说挖掘新目标客户与维系老客户对于企业推广来说，是处于一个天平状态，切不可厚此薄彼，否则对企业的发展是相当不利。古有诗云：“问渠那得清如许，为有源头活水来”，也正是说明了新用户源的重要性。

误区六：贪图低成本，群发工具选择不慎重

为了节约成本，某些中小企业直接采用免费邮箱来进行邮件群发，而每次发送需要申请大量账号才能完成所有邮件地址的投递，占用了员工大量工作时间，且群发效果不明显，退信、丢信、失败率相当之高。如此不科学的邮件营销方式，是企业之大忌。相对来说，邮件营销本身就是低成本、高效果的营销模式，选购一套有效的群发工具是邮件营销效果保证的前提，且将为企业邮件群发带来更多的帮助。

总而言之，在进行邮件群发时，一定要走出自身对邮件群发的认知误区，精选好用户、编辑好邮件、制定好发送周期、搞好与用户的关系，再配上可靠的邮件群发工具如**158邮件营销专家**，相信邮件群发的效果也会大步跟上来，为企业带来更多的实际效益。
`,ap=`---
title: 常见退信原因分析
date: 2014-04-20
author: 158软件
description: 常见退信原因分析 经常上网发送邮件的人可能会有邮件被退回的经历，收到被退回的邮件要具体分析，退回的信件一般都会有简短的说明，结合这些说明你可以进一步了解具体的退信原因并作出相应处理
---

# 常见退信原因分析

经常上网发送邮件的人可能会有邮件被退回的经历，收到被退回的邮件要具体分析，退回的信件一般都会有简短的说明，结合这些说明你可以进一步了解具体的退信原因并作出相应处理。

一、退信由哪些内容组成  
由于退信是由收发信系统自动回复的，所以信件大都是英文内容，下面我们先来了解退信中都包含了哪些内容。退信的发件人一般是Mail Administrator（系统管理员），信件的主题一般是Returned Mail之类的句子。退信的上端标明了退信的原因：Invalid User、Connection time out ……等。退信的中部内容是信件往来发生的时间、用户名等具体信息。没有正常发送的信件一般都是将附在最后，便于你及时采取相应的补救措施。

二、退信的原因及解决方法  
1、邮件地址错误  
如果退信原因中有如下信息之一，请检查收信人的邮件地址是否有误。  
550 <xxx@xxx.xxx.xx.xx>…User unknow  
550 Requested action not taken:mailbox unavailable  
550.5.1.1 <xxx@xxx.xxx.xx.xx> is not a valid mailbox  
Sorry, no mailbox here by that name  
550 Invalid recipient <xxx@xxx.xxx.xx.xx>  
xxx@xxx.xxx.xx.xx(user not found)  
如果邮件地址是正确的，那可能对方的这个电子邮件信箱已经不再使用了。为了确定，可再重发一次以防是由于对方邮箱的收件服务器的技术故障而导致的退信。  
2、邮箱空间不够  
如果退信原因中显示如下信息之一,表示邮箱溢出。  
552 Message size exceeds fixed maximum message size(5000000)  
552 Message size exceeds maximum message size  
552 Message size exceeds fixed maximum message size:5242880 bytes  
这是指对方邮箱作了限制，剩余空间不够大，你发出的信件超过了它的容量限制，对方只好把它退回来。解决方法是将信件“减肥”，比如将附件压缩、删除不必要的内容、，也可以等对方将邮箱清理后你再发邮件。  
3、邮箱空间已满  
由于对方邮箱容量作了限制，一旦邮箱被塞满，则退信原因中会出现如下信息之一：  
User is over the quota  
552 <xxx@xxx.xxx.xx.xx>…Mailbox is full  
550 <xxx@xxx.xxx.xx.xx>…Can’t create output  
552 Requested mail action aborted: storage allocation  
这种情况你只有等一两天或者通知你的朋友删除（或从服务器取走）旧信，然后再次发送邮件。  
4、邮箱设置有误  
如果退信原因中出现下列提示：  
554 Too many hops 27 (25 max): from <user@>firstdomain.com> via mail. firstdomain.com, to <sameuser@seconddomain.com>  
说明你蹦跳太多了，这是因为你发出的信抵达对方的A邮箱后，由于A邮箱设置了自动转发至B邮箱，而B邮箱又设置了自动转发回A邮箱。因此，你的信就在A邮箱和B邮箱之间没完没了地做旅行，时间一长，收发信服务器也不堪其扰，只好把信退回给你。  
5、发信服务器故障  
如果退信原因中出现：  
<user@xxx.xxx.xxx.xxx>: connect to xxx.xxx.xxx.xxx timed out  
表示超时错误，大多是由于收信一方的服务器同一时间收到了过多的邮件，当然这些邮件里少不了垃圾邮件在作祟，而你的邮件却因此无法正常发送了。这类问题不会困扰太长时间，稍等片刻重新发送即可。  
6、发信服务器被屏蔽  
如果退信原因为：  
554 <xxx@xxx.xxx.xx>: Recipient Address rejected:Relay access denied  
则与收信方无关，一般是由于你的发信服务器有了问题，它拒绝为你将信发送到这个地址。不过这种问题出现的机率较小。  
7、其他  
除此以外，一次发送的信件太大，造成发送失败的机率也比较大。因此，如果有很多附件要发送，最好分成几个小邮件发送。
`,lp=`---
title: 常用国家邮箱后缀大全
date: 2014-04-20
author: 158软件
description: 常用国家邮箱后缀大全 美国常用邮箱后缀 @netzero.net,@twcny.rr.com,@comcast.net,@warwick.net,@comcast.net,@cs.
---

# 常用国家邮箱后缀大全

美国常用邮箱后缀 @netzero.net,@twcny.rr.com,@comcast.net,@warwick.net,@comcast.net,@cs.com,@verizon.net  
德国常用邮箱后缀 @t-online.de,@multi-industrie.de  
法国常用邮箱后缀 @wannado.fr,@mindspring.com,@excite.com,@club-internet.fr  
日本常用邮箱后缀 @yahoo.co.jp,@candel.co.jp  
英国常用邮箱后缀 @cwgsy.net,@btinternet.com,@sltnet.lk  
印度常用邮箱后缀 @wilnetonline.net @cal3.vsnl.net.in @rediffmail.com @sancharnet.in @vsnl.com @del3.vsnl.net.in  
新西兰常用邮箱后缀 @xtra.co.nz  
俄罗斯常用邮箱后缀 @yandex.ru @mail.ru  
德国常用邮箱后缀 @t-online.de @multi-industrie.de  
香港常用邮箱后缀 @hongkong.com @ctimail.com @hknet.com @biznetvigator.com @netvigator.com @mail.hk.com @swe.com.hk @itccolp.com.hk  
台湾省常用邮箱后缀 @seed.net.tw @topmarkeplg.com.tw @pchome.com.tw  
新加坡常用邮箱后缀 @pacific.net.sg  
以色列常用邮箱后缀 @netvision.net.il;@candel.co.jp;@xx.org.il @zahav.net.il @fastmail.fm  
赞比亚常用邮箱后缀 @zamnet.zm  
阿根廷常用邮箱后缀 @amet.com.ar; @infovia.com.ar  
马其顿常用邮箱后缀 @mt.net.mk  
几内亚常用邮箱后缀 @sotelgui.net.gn  
墨西哥常用邮箱后缀 @prodigy.net.mx  
法国常用邮箱后缀 @wannado.fr @mindspring.com @excite.com @club-internet.fr  
津巴布韦常用邮箱后缀 @africaonline.co.zw;@samara.co.zw;@zol.co.zw;@mweb.co.zw  
科特迪瓦常用邮箱后缀 @aviso.ci;@africaonline.co.ci;@afnet.net  
纳米比亚常用邮箱后缀 @mti.gov.na;@namibnet.com;@iway.na;@be-local.com  
尼泊尔常用邮箱后缀 @infoclub.com.np;@mos.com.np;@ntc.net.np  
蒙古常用邮箱后缀 @mongol.net; magicnet.com @mail.mn  
汤加常用邮箱后缀 @kalianet.to  
阿塞拜疆常用邮箱后缀 @mail.ru  
日本常用邮箱后缀 @yahoo.co.jp @candel.co.jp  
阿曼常用邮箱后缀 @omantel.net.om  
南非常用邮箱后缀 @webmail.co.za @vodamail.co.za @iafrica.com  
爱尔兰常用邮箱后缀 @indigo.ie @eircom.net  
沙特阿拉伯常用邮箱后缀 @nesma.net.sa  
瑞典常用邮箱后缀 @caron.se  
希腊常用邮箱后缀 @spark.net.gr @otenet.gr  
泰国常用邮箱后缀 @ji-net.com @adsl.loxinfo.com  
澳大利亚常用邮箱后缀 @bigpond.com @westnet.com.all @cairns.net.au @gionline.com.au @eunet.at  
卡塔尔常用邮箱后缀 @qatar.net.qa  
英国常用邮箱后缀 @cwgsy.net @btinternet.com @sltnet.lk  
加拿大常用邮箱后缀 @mondis.com @sourcesexpert.com  
马来西亚常用邮箱后缀 @tm.net.my  
韩国常用邮箱后缀 @hanmail.com/net @naver.com @daum.net(hanmail.net) @kornet.net @korea.com @naver.com @hanafos.com @yahoo.co.kr  
巴基斯坦常用邮箱后缀 @cyber.net.pk @wilnetonline.net @cal3.vsnl.net.in @rediffmail.com @sancharnet.in @ndf.vsnl.net.in @del3.vsnl.net.in  
阿拉伯联合酋长国常用邮箱后缀 @emirates.net.ae  
科威特常用邮箱后缀 @qualitynet.net  
越南常用邮箱后缀 @hn.vnn.vn @hcm.fpt.vn @hcm.vnn.vn  
孟加拉常用邮箱后缀 @citechco.net  
意大利常用邮箱后缀 @xxx.meh.es @terra.es @libero.it  
科特迪瓦常用邮箱后缀 @aviso.ci @africaonline.co.ci @afnet.net  
纳米比亚常用邮箱后缀 @mti.gov.na @namibnet.com @iway.na @be-local.com  
阿塞拜疆常用邮箱后缀 @mail.ru  
印尼常用邮箱后缀 @dnet.net.id  
巴西常用邮箱后缀 @sinos.net  
联合国常用邮箱后缀 @sbcglobal.net @ntlworld.com  
日耳曼常用邮箱后缀 @tiscali.co.uk  
奥地利常用邮箱后缀 @eunet.at  
波兰常用邮箱后缀 @swiszcz.com @poczta.onet.pl  
挪威常用邮箱后缀 @walla.com  
埃及常用邮箱后缀 @rawagegypt.com  
中国香港： @hongkong.com @ctimail.com @hknet.com @netvigator.com @mail.hk.com @swe.com.hk @ITCCOLP.COM.HK @BIZNETVIGATOR.COM  
中国台湾：@SEED.NET.TW @TOPMARKEPLG.COM.TW @PCHOME.COM.TW @\\*\\*\\*.hinet.net  
巴基斯坦：@cyber.net.pk  
阿曼：omantel.net.om  
意大利：@libero.it  
南非：@webmail.co.za  
新西兰：@xtra.co.nz  
新加坡：@pacific.net.sg @FASTMAIL.FM  
阿联酋：@emirates.net.ae @eim.ae  
叙利亚：@net.sy @scs-net.org @mail.sy  
土耳其：@ttnet.net.tr @superonline.com  
也门：@yemen.net.ye @y.net.ye  
塞浦路斯：@cytanet.com.cy  
美国：@aol.com @netzero.net @twcny.rr.com @comcast.net @warwick.net @comcast.net @cs.com @verizon.net  
澳大利亚：@bigpond.com  
希腊：@otenet.gr  
巴基斯坦 : @cyber.net.pk  
印度：@vsnl.com @wilnetonline.net @cal3.vsnl.net.in @rediffmail.com @sancharnet.in @NDF.VSNL.NET.IN DEL3.VSNL.NET.IN  
新西兰 : @xtra.co.nz  
俄罗斯：@yandex.ru  
德国：@t-online.de  
以色列：@NETVISION.NET.IL  
澳大利亚：@BIGPOND.NET.AU  
俄罗斯：@MAIL.RU  
泰国：@ADSL.LOXINFO.COM  
叙利亚：@SCS-NET.ORG  
阿拉伯联合酋长国@EMIRATES.NET.AE  
科威特：@QUALITYNET.NET  
以色列：@ZAHAV.NET.IL @netvision.net.il @xx.org.il  
越南：@hn.vnn.vn @hcm.fpt.vn @hcm.vnn.vn  
日本@candel.co.jp  
赞比亚：@zamnet.zm  
阿根廷：@amet.com.ar @infovia.com.ar  
马其顿：@mt.net.mk  
几内亚：@sotelgui.net.gn  
墨西哥：@prodigy.net.mx  
孟加拉：@citechco.net  
意大利：@xxx.meh.es @terra.es  
法国：@wannado.fr @mindspring.com @excite.com  
津巴布韦：@africaonline.co.zw @samara.co.zw @zol.co.zw @mweb.co.zw  
科特迪瓦：@aviso.ci @africaonline.co.ci @afnet.net  
纳米比亚：@mti.gov.na @namibnet.com @iway.na @be-local.com  
尼泊尔：@infoclub.com.np @mos.com.np www.syyxrj.com外贸SOHO论坛 @ntc.net.np  
汤加：@kalianet.to  
阿塞拜疆：@mail.ru  
印尼：@dnet.net.id  
巴西：@sinos.net  
澳大利亚：@westnet.com.au @gionline.com.au @cairns.net.au  
土耳其：@mynet.com  
马其顿：@mt.net.mk  
爱尔兰：@indigo.ie @eircom.net  
联合国：@sbcglobal.net @ntlworld.com  
沙特阿拉伯：@nesma.net.sa  
蒙古：@mail.mn  
日耳曼：@tiscali.co.uk  
瑞典：@caron.se  
南非：@vodamail.co.za  
奥地利：@eunet.at  
希腊：@spark.net.gr  @otenet.gr  
波兰：@swiszcz.com  
法国：@club-internet.fr  
挪威：@walla.com  
埃及：@rawagegypt.com
`,fp=`---
title: 多个账号群发邮件如何集中一个邮箱接收回复
date: 2014-05-23
author: 158软件
description: 多个账号群发邮件如何集中一个邮箱接收回复 群发邮件过程中，为了达到短时间内大批量发送的目的，我们往往会设置多个发送邮箱账号同时发送邮件，如下图所示，那么如果收件人回复的话，是不是也
---

# 多个账号群发邮件如何集中一个邮箱接收回复

群发邮件过程中，为了达到短时间内大批量发送的目的，我们往往会设置多个发送邮箱账号同时发送邮件，如下图所示，那么如果收件人回复的话，是不是也要到这个邮箱中逐个去检查呢？

![](/static/images/qunfa158-qunfa-394-0.png)

如果这样去检查的话，[邮件群发](http://www.qunfa158.com/tag/qunfa)肯定会很麻烦，而且很累。发件人设置这么多。这么把回复的信息集中在一个邮件中呢？158邮件营销专家提供的“接收回复的邮箱”的功能就很好的解决了这个问题。

如下图所示，只需要一步，在【接收回复的邮箱】功能里填写您要接收的回复邮箱地址就可以了。

![](/static/images/qunfa158-qunfa-394-1.png)

关键词：接收邮件，回复邮件，接收回复。
`,dp=`---
title: 使用本地SMTP服务群发Email
date: 2014-06-06
author: 158软件
description: 使用本地SMTP服务群发Email 自己搭建SMTP服务器发送邮件也是一种邮件投递途径，关于自建本地服务器的弊端我们另文讨论，我们这里只讨论具体的搭建过程。158邮件营销专家提供了
---

# 使用本地SMTP服务群发Email

自己搭建SMTP服务器发送邮件也是一种邮件投递途径，关于自建本地服务器的弊端我们另文讨论，我们这里只讨论具体的搭建过程。158邮件营销专家提供了使用本地SMTP服务群发电子邮件的功能，**邮件群发软件**使用此功能之前，需要客户本地搭建自己的邮箱服务器，因此这也是一种SMTP中转的邮件投递过程。

我们以Windows 2003（Win2003）为例，用Windows自带的服务组件，不需要额外软件，搭建一起来的就是企业邮箱，可以设置200个企业邮箱账号，也可以设置2000个，总归数量你自己设置就可以了，因为服务器是你自己的嘛！具体的操作步骤及设置方法为：

（1）安装SMTP组件。  
Windows Server 2003默认情况下是没有安装SMTP服务组件的，因此我们要手工添加。以系统管理员身份登录Windows Server 2003   系统。依次进入“控制面板→添加或删除程序→添加/删除Windows组件”，在弹出的“Windows组件向导”对话框中，选中“应用程序服务器”选项，点击“详细信息”按钮，接着在“Internet信息服务（IIS）”选项中查看详细信息，选中“SMTP   Service”选项，最后点击“确定”按钮。此外，如果用户需要对邮件服务器进行远程Web管理，一定要选中“万维网服务”中的“远程管理（HTML）”组件。完成以上设置后，点击“下一步”按钮，系统就开始安装配置POP3和SMTP服务了。  
(2)配置Windows自带的SMTP服务。  
安装完成后，请检查一下：”Internet信息服务器”—>在”默认 SMTP 虚拟服务器”上点击右键，进入“属性”—>”访问”—-“中继限制”，然后选中“仅以下列表除外”和最下边的”允许所有通过身份验证的计算机进行中继，而忽略上表。” ，这样就OK了。

（3）本地防火墙的设置  
如果还出现不能连接的情况，请检查一下本地的防火墙软件是否打开，因为有些防火墙或杀毒软件会限制电脑中只有Outlook或者Foxmail可以发送邮件的。例如下面两个场景：  
（a）Windows防火墙：在控制面板 –>> Windows防火墙 中，如果防火墙是打开的，请将25端口设置到例外中；  
（b）VirusScan：右键点击屏幕右下角的VirusScan图标，进入“VirusScan控制台”，查看“访问保护”项的属性，将“禁止大量发送邮件的蠕虫病毒发送邮件”前面的勾去掉。

基于本地SMTP服务群邮件速度，效率高，但是需要指出的是：

（1）虽然不依赖于任何SMTP（邮件发送服务器），但是由于你架设的服务器是临时的，没有做过域名的反向解析（即：根据IP地址查找域名，我们平时都是根据域名查找IP地址的），而目前的hotmail、163等，都将这个作为判断垃圾邮件重要指标，因此，进入垃圾邮件的几率大大增加；

（2）由于你所在网络的DNS服务器的级别不同，级别太低的DNS（如内网DNS）传递过去的Email，目前主流的邮件服务器都是直接拒绝掉而不通知的，这样的话就造成一个假象，用自己架设的服务器，很快就发送完了，而实际上成功率很小。

（3）做为自建的SMTP服务器，可以不设置任何账号，而将发送权限放开，因为毕竟邮件是要从你的电脑上发出去的，别人也不可能通过互联网使用你开设的企业邮箱账号。
`,pp=`---
title: 邮件群发软件的发送速度
date: 2014-11-28
author: 158软件
description: 邮件群发软件的发送速度 邮件群发软件的发送速度主要依赖于邮件内容的大小，同时与您所在网络连接SMTP服务器的速度以及单次投递的成功率有关系，根据158邮件营销专家的实际测评，得到的
---

# 邮件群发软件的发送速度

邮件群发软件的发送速度主要依赖于邮件内容的大小，同时与您所在网络连接SMTP服务器的速度以及单次投递的成功率有关系，根据**158邮件营销专家**的实际测评，得到的具体数据为：

（1）邮件的大小，主要是附件的大小，附件越大，发送速度越慢，建议邮件不要超过10K。

（2）你连接到SMTP服务器的网络速度，网络连接速度越快，发送越快。

（3）国内的网络的上行带宽一般都是512K（比特），相当于下载速度的64K（字节）。

（4）正确的邮件地址的比率，错误的或者坏Email地址越多，速度越慢。

（5）对于中转群发，邮件发送服务器的性能，常规应维持大于50个可用的SMTP账号以增加单个发送邮箱的使用频率。

综合下来，每小时的发送速度2000 ~ 5000封左右，这是[邮件群发软件](http://www.qunfa158.com/tag/%E9%82%AE%E4%BB%B6%E7%BE%A4%E5%8F%91%E8%BD%AF%E4%BB%B6)正常的投递过程。为了进一步提高投递速度，在网络上行带宽充裕的前提下，可以同时多台电脑群发。

邮件群发是一个循序渐进的过程，不是说发送速度太快了，就会被服务器封掉；在158邮件营销专家中，你可以配置多个SMTP服务器账号，软件会自动交替使用，这样在每个SMTP服务器看来，你的发送就不快了，发送账号也就不容易被封掉。

每天成功发送3-5万封邮件这是一个比较切合实际的 发送数量，这是按照每天8~10小时的发送时间计算的。至于那些宣称每天可以发送几十万几百万邮件的软件，其真实性有待商榷，大量发出的邮件基本上会被收信邮局全部拦截，或者发件局拒绝投递。如果提高每 个邮箱的单次发信数量和发信数上限，邮件群发软件158邮件营销专家每天可以成功投递邮件10万封左右。这是每天24小时排满的极限值，但这样的操作有可能会导致发信邮箱被邮局封锁，不建议用户采用，也没有参考价值。
`,hp=`---
title: 如何给需要群发的大邮件瘦身
date: 2015-06-29
author: 158软件
description: 如何给需要群发的大邮件瘦身 158邮件营销专家支持发送附件和图片，图片也可以直接嵌入在邮件内容中，但是图片和附件往往会导致邮件内容臃肿，降低群发效率，甚至导致发送账号不堪重负而提前
---

# 如何给需要群发的大邮件瘦身

158邮件营销专家支持发送附件和图片，图片也可以直接嵌入在邮件内容中，但是图片和附件往往会导致邮件内容臃肿，降低群发效率，甚至导致发送账号不堪重负而提前罢工！

**大图片群发**

对于图片较多的邮件内容，可以将图片设置为网址引用的方式，显示效果和本地发送出去一样。我们以两个解决方案来说明这个问题。

解决方案1：  
<b>下面的图片是我要讲内容</b>  
<img src=”http://www.qunfa158.com/wp-content/themes/qunfa158v2/abotpictures/upload/201405/banner10.png” />  
<br>好的，以上是图片以上是图片。

解决方案2：  
<b>下面的图片是我要讲内容</b>  
<img src=”d:\\\\emails\\\\qunfa158\\\\case\\\\banner10.jpg” />  
<br>好的，以上是图片以上是图片。

方案1是将图片做为URL引用过来的，图片还是保留在服务器上，收件人阅读邮件的时候，会根据引用地址http://www.qunfa158.com/wp-content/themes/qunfa158v2/abotpictures/upload/201405/banner10.png，到服务器上去下载图片；这样发送出去的邮件小，一般5K~10K足够了，邮件群发的速度也非常快；缺点是用户打开email的速度会慢一些，而且要求做邮件群发的人要有自己的互联网网页空间，或者有一些免费和收费的相册空间并且要支持外链。

方案2是将图片做base64编码，嵌入email的内容中，直接投递到收件人信箱中；这样发出去的邮件大，一般要100K~300K左右，邮件群发速度会慢一些；优点是用户打开email的速度快，用户体验比较好，而且省去了设置网络相册等麻烦。

要实现以上两个方案的图片群发，在158邮件营销专家中，打开图文编辑器，点击插入图片的按钮，分别选择来自网络以及来自本地电脑即可。对于方案2，除了设置邮件格式为HTML之外，必须使用“MIME方式”。

**大附件群发**

对于附件太大的邮件，压缩附件的同时，更建议将附件设置为超级链接，供收件人有选择的打开。以100K附件为例，群发1000份，上传的大小已经超过100M。

或许您会认为，平时下载100M的文件或者视频，不是很快就完成了嘛！而且现在是宽带接入，有的地区还是光纤入户。但您忽略了一个关键因素，即“上传”和“下载”，不管下载的速度如何，国内目前主流的接入，上传速度都不会超过512K，而且这是理论上的上传带宽。

具体到SMTP发送邮件，涉及到你的电脑终端到远程SMTP服务器的上传速度以及对方对连接速度的限制。SMTP本身就不是高速传输的网络协议，传输性能远不如HTTP协议。

因此，上传100M的内容，对于SMTP不会很快的，这不能和下载相比较。大附件的群发，我们推荐网址链接或者下载按钮的形式嵌入在邮件内容中。
`,mp=`---
title: 导出邮件群发软件的发送日志
date: 2014-05-23
author: 158软件
description: 导出邮件群发软件的发送日志 邮件群发是大批量数据处理的过程，因此会产生大量的日志文件，这些日志文件记录了详细发送过程，认真阅读和分析这些文件，可以邮箱分析邮件群发过程中的错误并且寻
---

# 导出邮件群发软件的发送日志

邮件群发是大批量数据处理的过程，因此会产生大量的日志文件，这些日志文件记录了详细发送过程，认真阅读和分析这些文件，可以邮箱分析邮件群发过程中的错误并且寻找改进方法。如何查看158邮件营销专家的发送日志（发送记录）并保存这些日志信息呢？

在158邮件营销专家的主界面的右上方，有日志文件的管理入口，如图所示：

![](/static/images/qunfa158-qunfa-404-0.png)

进入日志管理窗口，可以选择要查看和导出的日志（按照日期排序）

![邮件群发软件](/static/images/qunfa158-qunfa-404-1.png)

将其另存为文本文件即可。
`,gp=`---
title: 158邮件营销专家常见问题（FAQ）
date: 2022-04-13
author: 158软件
description: 158邮件营销专家常见问题（FAQ） 邮件群发软件一次最多可以发多少邮件？158邮件营销专家单次可以导入的收件人Email地址数量没有限制，建议单次不要超过五万个Email地址。邮
---

# 158邮件营销专家常见问题（FAQ）

邮件群发软件一次最多可以发多少邮件？  
158邮件营销专家单次可以导入的收件人Email地址数量没有限制，建议单次不要超过五万个Email地址。邮件群发软件可以配置多个SMTP服务器并自动轮流使用，从而避免了因瞬间负载过大而出现的屏蔽或拒发等情况。

邮件群发软件需要发送账号吗？  
邮件营销过程中邮件需要从指定的账号中发送出去，类似从邮局寄信的过程；不通过邮局途径的，例如，直接投递到收件人邮箱中的直投广告，属于EDM邮件营销过程，不是158邮件营销专家解决的问题。

有哪些常用的邮件群发账号？  
几乎所有支持SMTP服务的邮箱账号都可以做邮件群发账号，具体的配置见：[http://www.qunfa158.com/qunfa/141.html](http://www.qunfa158.com/qunfa/141.html) 。

可以自建邮件群发服务器吗？  
可以的，邮件群发服务器基于独立IP地址，独立邮件营销账号，每天发送速度为1万封，具体查看详情：[http://www.qunfa158.com/qunfa/758.html](http://www.qunfa158.com/qunfa/758.html)。

邮件群发软件可以发送超链接和彩色文字吗？  
可以的。158邮件营销专家提供了功能丰富的图文邮件编辑器，可以设置超级链接，设置文字的大小、颜色等属性，插入本地图片、网络图片。如果您需要做复杂的特效，建议使用Dreamweaver等专业的网页制作工具，将制作好的邮件HTML代码复制粘贴到我们软件中即可。

使用158邮件营销专家发送图片要先传到某个服务器上吗？  
158邮件营销专家支持将图片直接嵌入在邮件内容中，使用MIME格式编码到邮件内容中去，不需要传到网站上的。在您编辑的HTML代码中，将图片地址写成本地绝对路径就可以，例如<img src=”d:\\\\emails\\\\2014\\\\case\\\\www-qunfa158.com.jpg” />，我们的群发软件会自动读取，并按照多媒体格式整合到Email中；如果您使用158邮件群发软件的图文编辑器，插入图片的时候选择本地电脑图片即可。

158邮件营销专家可以发送多个附件文件吗？  
邮件群发软件支持发送多个附件文件，添加在软件的主界面上即可。可以通过选择浏览文件的形式逐个添加附件文件，也可以直接使用鼠标将要添加的多个附件拖拽到附件区。软件本身不限制附件格式，可以添加包括doc、xls、ppt、zip、rar、png、jpg等格式的文件，对于exe以及包含exe但没有加密的zip或者rar，由于收件人服务器多拒收这类文件，所以不建议放在邮件附件中，可以在邮件内容中提供下载链接。

如何将网页作为邮件内容群发出去？  
![群发网页内容邮件](/static/images/qunfa158-qunfa-417-0.png)

配置好了邮件发送账号和主界面上的一些信息，是否就可以大规模发送了？  
建议您发送前给自己或同事多发一些测试，然后再大规模群发，免得邮件内容出错，因为发送任务一旦开始，邮件内容和发送服务器的修改就无效了！因此大批量群发前要多验证。但是需要指出，不要总是拿几个Email地址反复发送和测试，任何服务器总是收到相同或相似内容的电子邮件之后都会屏蔽的，这是最基本的常识。

可以使用HOTMAIL  MSN发送邮件吗？  
使用158邮件营销专家可以送到 HOTMAIL  MSN，不可以用 HOTMAIL  MSN 发送。

如果遇到断电或者电脑故障突然关机怎么办？  
突然关机或断电属于意外情况，挽救方法是：在日志中查询到最后送出的一封Email地址，在地址本中找到这个Email地址，这个地址之后的，都是未发送的。

我的一个新产品要做推广，想发几十万封，你估计得用多少个SMTP账户啊？  
当然是越多越好啦，一般情况，每个帐号一天发送不超过200封，不容易被封掉，发送时候适当控制一下。邮件群发软件正常情况下一个小时可以发送2000~5000封。

我购买的软件是光盘形式的，还是网上下载？  
建议网上下载，版本升级以及最新版本的发布，都是通过我们产品主页的。刻盘也是可以的，需要支付一定的快递费，详情参考[注册购买页面](http://www.qunfa158.com/buy)，不过以后的升级版您还要在我们产品主页上下载。

软件提示邮件发送成功，为什么对方还没收到？  
1、邮件正在传递途中。Email的发送过程不是同步的，各个传递中继处理需要时间；如果发送方服务器或者收信方服务器短时间内囤积了大批量邮件传递任务，也会有一定的时间去排队。这个周期最长是三天，如果三天内投递不成功，发件箱会有退信通知的；  
2、收信服务器或者收件人直接拒收或丢弃；  
3、进入垃圾邮件了。  
可以尝试的解决方式：  
1、尽可能使用种类多的发送服务器，例如，不要只是用gmail和sina这两种或者三种换来换去，适当夹杂其他的。  
2、适当延长发送时间间隔，在菜单–>>设置–>>高级选项中，将发送时间间隔设置为 10~50之间。  
详情请参考 [http://www.qunfa158.com/qunfa/315.html](http://www.qunfa158.com/qunfa/315.html)。

为什么我们发送的邮箱都是显示的发送成功，然后邮箱里又都是没有发送成功的邮件呢  
SMTP服务器帮你投递Email，不是每次都成功的，一次投递失败，SMTP服务器会间隔一个小时左右再试一次，如果还是失败，就间隔2个小时，下次四个小时，以此类推，如果超过三天还是失败，SMTP服务器会发送邮件告诉你某封Email投递失败了。

如何让收到邮件的人在邮件发件人一栏不显示“由XXXX代发”？  
这是不同的邮件阅读工具对邮件内容的解释，如果对方的邮件阅读工具解释成这个样子，这不是发件人能决定是否隐藏的。  
158邮件营销专家的注册版本提供隐藏真实发件人的功能，在软件的“菜单–>>设置–>>高级选项–>>”中选择“在发件人栏中显示回复地址”。

设置好的邮件发送账号大概多久要换一次啊 ？  
邮件发送账号的切换周期依赖于您设置的邮件发送间隔，单次连接服务器投递数量，单封邮件投递时间等因素；您可以配置多一些邮件发送帐号到158邮件营销专家中，**邮件群发软件**会自动轮流使用，不需人工切换。

发送成功的邮件为什么会有退信？  
在邮件群发过程中，有退信是很正常的。主要包括投递超时和对方拒收两种情况。  
对于超时退信的情况：SMTP服务器告诉你，某封Email我刚才没有及时给你送出去，现在正在全力给你送，稍安勿躁；失败就是告诉你，这份Email送不出去，至于原因，SMTP服务器也会在给你的信息里告诉你的，请仔细阅读。至于多少时间算是投递超时，要看不同的SMTP服务器的设置了。  
对方拒收的情况将退信的具体内容，包括邮件包含敏感词等多种原因。

邮件发送失败的原因有哪些？  
主要的三种原因：  
（1）连接SMTP服务器（即发送服务器）失败，没有进入发送过程；  
（2）SMTP服务器发送过程中处理失败，比如发送信息填写不全、对方服务器拒收等原因；  
（3）该邮件地址不存在，无法送达。
`,bp=`---
title: QQ邮箱如何配置邮件群发（快速入门）
date: 2014-06-14
author: 158软件
description: QQ邮箱如何配置邮件群发（快速入门） QQ邮箱是目前使用用户非常多，综合性能较好的免费邮箱，使用QQ邮箱群发电子邮件可以极大降低企业的营销成本。但是使用QQ邮箱群发邮件必须使用SS
---

# QQ邮箱如何配置邮件群发（快速入门）

QQ邮箱是目前使用用户非常多，综合性能较好的免费邮箱，使用QQ邮箱群发电子邮件可以极大降低企业的营销成本。但是使用QQ邮箱群发邮件必须使用SSL选项才能更稳定的群发邮件，而目前市面上支持这个功能邮件群发软件非常少，甚至要求客户花费数千元购买所谓的企业版才可以使用SSL。其实完全没有这个必要，158邮件营销专家不管试用版还是注册版本，完全开放SSL功能，我们这里提供快速入门教程，具体操作步骤如下：

第一步，登录QQ邮箱。

![QQ邮件群发](/static/images/qunfa158-qunfa-428-0.png)

第二步，点击邮箱—设置

![QQ邮件群发](/static/images/qunfa158-qunfa-428-1.jpg)

第三步，进入邮箱设置后找到账户设置，点击。

![QQ邮件群发](/static/images/qunfa158-qunfa-428-2.png)

第四步，进入账户设置后，将滚动往下滑动，找到POP3设置打上勾。点击保存。配置完成。  
切记，注意保存。

![QQ邮件群发](/static/images/qunfa158-qunfa-428-3.png)

然后打开158邮件营销专家软件。点击【配置邮件发送服务器】

![QQ邮件群发软件](/static/images/qunfa158-qunfa-428-4.png)

点击—【增加】

![QQ邮件群发](/static/images/qunfa158-qunfa-428-5.png)

按步骤填写。只需要填写账号和密码，点击【测试】。完成测试之后点击【保存】。

![QQ邮件群发](/static/images/qunfa158-qunfa-428-6.png)

之后就可以进行qq邮箱群发了。

百度文库《[QQ邮箱如何设置邮件群发](http://jingyan.baidu.com/article/c14654134bf9de0bfdfc4c6c.html)》
`,_p=`---
title: 使用邮件群发软件的基础：Email是如何投递的？
date: 2014-06-03
author: 158软件
description: 使用邮件群发软件的基础：Email是如何投递的？ 邮件群发软件虽然多，但真正好用的不多，其主要原因在于绝大多数都是营销型公司在推产品，甚至只是卖概念！所以选择软件一定要买技术型公司
---

# 使用邮件群发软件的基础：Email是如何投递的？

邮件群发软件虽然多，但真正好用的不多，其主要原因在于绝大多数都是营销型公司在推产品，甚至只是卖概念！所以选择软件一定要买技术型公司的产品，包括158系列的**邮件群发软件**，都是实实在在的功能性产品，不去做夸大和虚假宣传。

![邮件群发软件](/static/images/qunfa158-qunfa-446-0.gif)

使用**邮件群发软件**应该要了解Email是如何投递的，是邮件营销的基础知识。我们用一幅图，并在图中做了比喻，来形象的描述这个过程。

其实SMTP协议的设计，也是按照传统邮件的方式进行的，只是在网络世界中虚拟化而已。SMTP协议的全称是Simple Mail Transfer Protocol，翻译成中文即“简单邮件传输协议”，它是一组用于由源地址到目的地址传送邮件的规则，由它来控制信件的中转方式。通过SMTP协议所指定的服务器，就可以把E-mail寄到收信人的服务器上了，整个过程只要几分钟。[158邮件营销专家](http://www.qunfa158.com/software-email-qunfa)连接的SMTP服务器，同样是遵循SMTP协议的发送邮件服务器，用来发送或中转发出的电子邮件。
`,xp=`---
title: 最好用的邮件群发软件排行
date: 2014-06-04
author: 158软件
description: 最好用的邮件群发软件排行 近来公司要推销产品，于是业务员就想起了网上营销。上网发布产品信息，费用低、效果好，可是如何把产品Email发送到每个客户手里呢？一个一个地发送邮件？假如有
---

# 最好用的邮件群发软件排行

近来公司要推销产品，于是业务员就想起了网上营销。上网发布产品信息，费用低、效果好，可是如何把产品Email发送到每个客户手里呢？一个一个地发送邮件？假如有几百万个客户Email地址，那会把你累死的！为此，技术员小张给出了对策：使用邮件群发软件。

目前邮件群发软件很多，但是都需要你花钱购买注册的，想免费就只能用未注册版了！未注册版与正式版相比，功能上有一些限制，例如158邮件营销专家，虽然未注册版本一次只能发送几十封邮件，但比起其他的提供商问了半天也不给软件，或者动辄让你下载一个几十兆的垃圾程序来说，已经很不错了！

一、如何选择[邮件群发软件](http://www.qunfa158.com/tag/%E9%82%AE%E4%BB%B6%E7%BE%A4%E5%8F%91%E8%BD%AF%E4%BB%B6)？

要选择一款优秀的群发软件，需要注意以下几点。

1、首先应该检查它是否内置SMTP发送方式。如果只是基于抓网页来群发邮件，就会很容易被封杀、以至不能发送邮件了！为什么呢？很容易理解的啊，你反复刷新一个网页，很快IP就会被禁掉，HTTP拦截垃圾请求的技术比SMTP高多啦！

2、其次要检查发送邮件的速度，即能多少个线程同时发送。邮件群发并不是速度越快越好。

3、最后要注意免SMTP群发软件中有种通病，即群发软件发送的Email，某一类邮箱(例如@sohu.com)可能会收不到，为此建议你打开网址[http://www.qunfa158.com/qunfa/141.html](http://www.qunfa158.com/qunfa/141.html)，在sina.com、qq.com、gmail.com、yahoo.com等服务商处多申请一些免费邮箱；然后用群发软件发送测试，检查哪些邮箱会收不到Email；最后根据测试结果选择不同的群发软件，有针对性地对不同的邮箱群发邮件。

二、邮件群发软件使用方法

**邮件群发软件**虽然很多，但真正好用的不多，简单易用的就更不多啦，这里就介绍158软件的使用方法，包括了Email采集和邮件群发。

1、获取邮件地址

邮件群发前首先应该有很多的收件人Email地址，可以在邮件地址搜索专家中，按照关键词“Email”、“联系方式”等，在百度或者Google中搜索。导出来的搜索结果应该是一行一个Email地址的，对于该文件，你可以用记事本、写字板等软件编辑，默认都已经是文本的txt格式，群发时导入即可。

2、邮件群发

邮件群发软件中，158邮件营销专家的性价比最高，也是非常简单易用的，按照软件主界面上的序号快速完成设置即可群发邮件啦，没有太多的参数和专业知识。
`,yp=`---
title: 158邮件营销专家如何实现大批量群发
date: 2014-06-09
author: 158软件
description: 158邮件营销专家如何实现大批量群发 如何避免群发的邮件被屏蔽，从而实现大批量群发Email，158邮件营销专家这方面的处理功能在业界遥遥领先。目前绝大多数免费的电子邮箱都是限定每
---

# 158邮件营销专家如何实现大批量群发

如何避免群发的邮件被屏蔽，从而实现大批量群发Email，158邮件营销专家这方面的处理功能在业界遥遥领先。

目前绝大多数免费的电子邮箱都是限定每天的发送量100~400不等，国内的免费邮箱以200为主，国外的Gmail目前限定的是单个账号每天400封邮件；而收费的电子邮箱，则是按照每月付费标准的不同，每天可以发送量也有所不同，一般在500~2000不等。至于买空间赠送的所谓企业邮箱，性能层次不齐，限制每天发送不超过50封邮件的也是有的。

邮件群发软件的任务，就是要综合组织这些发送邮箱账号，最大限度延长单个发送账号被使用的时间间隔，同时在发送账号允许的范围内，最大限度的提高单次连接的投递次数，158邮件营销专家自第一个版本推出以来就不断在这方面做功能改进和更新，并随着主流免费发送邮箱的参数调整而升级，多年来逐渐成为邮件群发首选软件品牌。

基于以上的发送过程分析，在158邮件营销专家中设置50个左右的发送邮箱，每天可以发送10000封邮件，每个帐号每天平均发送200封左右。需要说明的是，以上数据是基于配置的可用发送邮箱大于等于50个，而不是说您配置了几个发送服务器进去，让他们每个连续平均发送200封 的。总的原则是，发送间隔越大，单个帐号发信速度越慢，帐号被封的可能性越小；短时间内大批量发送邮件，比如五分钟内单个帐号发出50封，那么这个时候帐号可能会服务器暂时禁用，而造成后续发送出现无法连接或连接太快的情况。因此，需要根据自己的邮件内容、网络速度等因素，在发送速度和稳定性之间寻找一个平衡点。

大批量群发与IP地址的关系请参考《[是否需要变换IP群发电子邮件](http://www.qunfa158.com/qunfa/302.html)》http://www.qunfa158.com/qunfa/302.html，158邮件营销专家基于SMTP中转群发电子邮件，因此群发邮件过程中不需要反复更换IP地址。
`,wp=`---
title: 158邮件营销专家快速视频教程
date: 2014-06-15
author: 158软件
description: 158邮件营销专家快速视频教程 158邮件营销专家快速视频教程如需下载邮件群发软件视频教程到本地电脑上，请使用以下链接：视频演示和视频教程 下载到本地观看（图文并茂有声教程） 更多
---

# 158邮件营销专家快速视频教程

## 158邮件营销专家快速视频教程

[![QQ邮件群发软件促销](/static/images/qunfa158-qunfa-504-0.png)](http://www.qunfa158.com/buynow?id=searchqq "购买QQ邮件群发软件")

如需下载**邮件群发软件视频教程**到本地电脑上，请使用以下链接：

![邮件群发软件视频教程](/static/images/qunfa158-qunfa-504-1.png "邮件群发软件视频教程")[视频演示和视频教程](http://pan.baidu.com/s/1dD3Utup "邮件群发软件视频教程")![邮件群发软件视频教程](/static/images/qunfa158-qunfa-504-2.png "邮件群发软件视频教程") [下载到本地观看](http://pan.baidu.com/s/1eQpFje6 "邮件群发软件视频教程")（图文并茂有声教程）
`,Ep=`---
title: 隐藏真实Email地址群发邮件
date: 2014-06-18
author: 158软件
description: 隐藏真实Email地址群发邮件 隐藏真实的Email地址是邮件群发软件要支持的最基本的功能特性之一。邮件群发过程中，为了统一对外的形象，对于通过多个账号分别发送出去的邮件，需要显示
---

# 隐藏真实Email地址群发邮件

隐藏真实的Email地址是[邮件群发软件](http://www.qunfa158.com/software-email-qunfa "邮件群发软件")要支持的最基本的功能特性之一。邮件群发过程中，为了统一对外的形象，对于通过多个账号分别发送出去的邮件，需要显示为统一的一个邮箱发送出去的，158邮件营销专家提供了这样的功能，具体设置如下图：

![邮件群发软件](/static/images/qunfa158-qunfa-516-0.png)

注意：本文提及的功能是注册版本所有，试用版本中对以下选项的设置不会生效。

隐藏发信人Email地址，并不是所有邮箱都支持隐藏发件人投递Email的。到目前为止我们收集的情况如下：

bn163：提示拒绝投递（备注：是bn163，不是163）；

sina：无提示，直接丢弃；

gmail：不受设置影响，依旧显示真实发件人；但是可以在服务器端设置，具体操作方法见本文附录；

QQ邮箱：如果发件人和回复邮箱同为QQ邮箱，两者邮箱必须一致，否则拒绝投递；因此，如果是用QQ邮箱群发Email并且隐藏真实发送地址，回复地址只要不是QQ邮箱就可以了

\\==============================================  
Gmail邮箱隐藏真实发件人的设置步骤如下图所示：

![Gmail群发](/static/images/qunfa158-qunfa-516-1.png)

![](/static/images/qunfa158-qunfa-516-2.png)

![](/static/images/qunfa158-qunfa-516-3.png)

![](/static/images/qunfa158-qunfa-516-4.png)
`,vp=`---
title: 邮件群发：错误代码汇总及解释
date: 2014-07-11
author: 158软件
description: 邮件群发：错误代码汇总及解释 模拟人工的邮件群发遵循标准的SMTP协议，在操作过程中难免会有一些错误提示，158软件对此做了统计和总结，按照出现的频率挑选部分错误代码并做详细的解释
---

# 邮件群发：错误代码汇总及解释

模拟人工的邮件群发遵循标准的SMTP协议，在操作过程中难免会有一些错误提示，158软件对此做了统计和总结，按照出现的频率挑选部分错误代码并做详细的解释，希望对大家的邮件营销过程有帮助。

500   格式错误，命令不可识别（此错误也包括命令行过长）  
原因：1. 最后一个从发信端邮件服务器发出的SMTP或ESMTP指令无法为收件者的服务器所辨识。 原因2. 或是指令的格式不符合对方服务器的要求，此间包含指令字符串太长 上述两个原因通常是防病毒软件或是防火墙程序对于SMTP进或出的端口造成影响。

501   参数格式错误  
原因1：DNS的问题 原因2：发件人邮件地址域名可能输入错误。收信者邮件服务器要求发件人邮件服务器发送正确的指令语法。

502   命令不可实现  
收件者邮件服务器主机不支持某些基本的 SMTP 指令

503   错误的命令序列  
这类问题通常是某些设计不良的**邮件群发软件**造成的，158邮件营销专家基础组件稳定，多年一直保持更新状态，所以极少遇到这类错误代码。

504   命令参数不可实现  
在邮件服务器内，此指令无设此参数而造成验证失败，一般也是由于软件更新跟不上造成的。

450   要求的邮件操作未完成，邮箱不可用。  
这里包括的情况有：收信端无此账户，邮件大小超过收信端的上限，邮箱繁忙无法接受邮件（多数是由于收件方SMTP服务器故障造成的）

451   放弃要求的操作；处理过程中出错  
一般都是由于DNS解析的引发出的问题。

550   要求的邮件操作未完成  
这里包括收件人邮箱不可用等多种状态，以及收件端邮件账号不存在、停用或被删除。通常意指寄信者已经被反垃圾信机制或是防火墙列入黑名单，包括最常见的怀疑为垃圾邮件发送的情况。最常见与邮件群发客户端与SMTP服务器的交互过程中。

551   用户非本地，却尝试不需要身份验证的邮件投递  
这种情况在[邮件群发软件](http://www.qunfa158.com/tag/%E9%82%AE%E4%BB%B6%E7%BE%A4%E5%8F%91%E8%BD%AF%E4%BB%B6)中很少用到，除非使用158邮件营销专家的“使用本地服务器”这种特殊情况。

552   过量的存储分配，要求的操作未执行  
通俗的解释就是对方的邮箱满了。在网络存储很便宜的今天，大多数免费的邮箱也都是大肚邮，容量动辄上G，所以已经很少遇到这样的情况了。在网络存储成本高昂的互联网初期，大多数的邮箱是2M大小，很容易出现这样的错误代码。

553   邮箱名不可用，要求的操作未执行（例如邮箱格式错误）  
这种情况在158邮件营销专家中一般属于选择身份认证方式为“不认证”造成的。在不明白这个参数的具体含义的情况下，建议选择“LOGIN认证”。

554   操作失败  
通常见于用户输入了错误的账号密码而返回的错误。

535   用户验证失败  
请参考错误代码554。
`,kp=`---
title: 财务会计必备工资条邮件群发软件
date: 2014-09-19
author: 158软件
description: 财务会计必备工资条邮件群发软件 我们常用Excel文件管理每个月的工资，如下图。那么如何通过Email自动将这些工资逐个分发给每个人，并且保证不让其他人的工资信息被看到呢？手工逐个
---

# 财务会计必备工资条邮件群发软件

我们常用Excel文件管理每个月的工资，如下图。  
![](/static/images/qunfa158-qunfa-664-0.png)

那么如何通过Email自动将这些工资逐个分发给每个人，并且保证不让其他人的工资信息被看到呢？

手工逐个黏贴并发送邮件是个好办法，但是既费时又费力，而且人乃血肉之躯，难免会出差错。那么，让我们通过一个邮件群发软件来自动完成吧。

首先下载安装软件，下载地址为：  
[http://www.qunfa158.com/download/EmailQunfa158.exe](http://www.qunfa158.com/download/EmailQunfa158.exe)  
或者到他的产品主页上去获取最新版本  
[http://www.qunfa158.com/software-email-qunfa](http://www.qunfa158.com/software-email-qunfa)

然后运行软件，填写简单的发件人信息，如某某公司财务部等，导入刚才的那个Excel工资表。

![邮件群发软件](/static/images/qunfa158-qunfa-664-1.jpg)

下面将邮件格式选择为HTML，打开图文编辑器，制作邮件内容如下，并且保存退出。  
![邮件群发软件](/static/images/qunfa158-qunfa-664-2.jpg)

_Tips解析：  
这里的技巧其实很简单，就是将Excel表单的上第一行（即：列名）与软件要求的宏定义对应，每个词两边加%%即可，如下图所示：_

![邮件群发软件](/static/images/qunfa158-qunfa-664-3.jpg)

接下来的工作就是配置用于发送电子邮件的邮箱，点击“配置邮件发送服务器”（软件主界面上最大的按钮），可以设置你发送工资条的电子邮箱。只有支持SMTP服务的电子邮箱就可以，这里就不赘述了，可以参考软件的操作手册[http://www.qunfa158.com/qunfa/208.html](http://www.qunfa158.com/qunfa/208.html)。

如果你是一名财务会计，还在为每个月如何给大家逐个用Email发送工资条而困扰，还在因为错发了工资条信息被领导骂，被同事抱怨，那么，这款工资条邮件群发软件就是你必备的帮手！

_Tips解析:  
哪些电子邮箱支持SMTP服务？只要能在Foxmail、Outlook等客户端工具中收发邮件的电子邮箱一般都是支持SMTP服务的，大多数的企业邮箱也是支持的，具体可以联系网管询问SMTP服务器地址以及用户名等信息。_
`,Ap=`---
title: 支持hotmail的邮件群发软件
date: 2014-10-31
author: 158软件
description: 支持hotmail的邮件群发软件 网络上的邮件群发软件鱼龙混杂，真正能发出去的不多，而158邮件营销专家在群发性能稳定的基础上，新版本还增加了对hotmail邮箱的支持，有了这款软
---

# 支持hotmail的邮件群发软件

网络上的邮件群发软件鱼龙混杂，真正能发出去的不多，而158邮件营销专家在群发性能稳定的基础上，新版本还增加了对hotmail邮箱的支持，有了这款软件，使用hotmail群发邮件不再是个梦想了。

![邮件群发软件](/static/images/qunfa158-qunfa-696-0.png)

hotmail是每个做外贸邮件群发的人都会接触到的，稍微了解一点网络营销的都在，hotmail是国外用户量相当大的免费邮箱服务商，旗下有hotmail、msn、live、Outlook等多个品牌和域名后缀。但是由于hotmail一直以来只坚持的邮件传输协议，而不是支持标准的，因此使用hotmail群发邮件一直是不可行的。158邮件营销专家经过长期对hotmail邮件传输协议的研究，历时一年多，对158邮件群发软件的底层通信组件做了大幅度升级，其中重点就是对hotmail邮件传输协议的支持。

![外贸邮件群发](/static/images/qunfa158-qunfa-696-1.png)

以前，做邮件群发，只能发送到hotmail中，而不能使用hotmail群发；现在，不要再为用hotmail群发邮件发愁了，用158邮件营销专家一款邮件群发软件就搞定了！因为live邮箱和outlook邮箱与hotmail属于一个邮件系统，因此这个软件同样支持，至于Gmail等需要强制使用SSL连接的邮箱，158邮件营销专家早N年前就已经支持了。
`,Cp=`---
title: QQ邮箱新规出台158邮件群发软件更给力
date: 2014-10-31
author: 158软件
description: QQ邮箱新规出台158邮件群发软件更给力 十月份QQ邮箱对其安全规则做了新的调整，让好多平时在百度里面打广告卖邮件群发软件的人无奈转做论坛群发之类的软件了。说白了，平时基本功不扎实
---

# QQ邮箱新规出台158邮件群发软件更给力

十月份QQ邮箱对其安全规则做了新的调整，让好多平时在百度里面打广告卖邮件群发软件的人无奈转做论坛群发之类的软件了。说白了，平时基本功不扎实，稍微遇到一点问题就翘辫子了，偶尔有那么几个付费用户，也就扔下来不管了，而所谓的论坛群发呢，也就是发到几个永远也不会有人去看的，甚至是自己搭建的Discuz论坛中，美其名曰部署外链做SEO，但是这样的论坛搜索引擎会看吗？你把百度搜索蜘蛛和360搜索蜘蛛拉过来问问，如果他们会说话。当然这是后话，本文不展开论述。

![邮件群发软件](/static/images/qunfa158-qunfa-706-0.png)

做为邮件群发软件的首选品牌，158邮件营销专家就不同了。最初版本的158邮件群发软件也只是支持普通的SMTP发送，但是随着Gmail邮箱被广泛应用，158软件增加了对SSL的支持，并且一直领先同类产品。而随着hotmail逐步开放自己的SMTP协议，158软件也在今年增加了对包括MSN邮箱、Live邮箱和Outlook邮箱在内的所有hotmail邮箱做为发送账号群发邮件的支持。目前市面上好多号称支持Gmail和hotmail的邮箱，要么是模拟网页只能发送几封就被要求输入验证码的，要么就是完全做不到只是一种宣传而已，反正不提供试用版任何怎么说都好。

在各类免费的可用于邮件群发的邮箱中，指的的国内，QQ邮箱的综合性能一直是最好的；如果是做外贸的，并且将服务器或者VPS架设在国外，那么可选择的Gmail、Hotmail、AOL Mail等就更多了，这里也不展开论述了。最开始的那几年，大家都能用QQ邮箱群发邮件，但是今年下半年开始QQ邮箱逐步实行强制的SSL连接，这样大多数邮件群发软件无法适应，而让158邮件营销专家的优势逐步发挥出来，并且越来越广泛的被大家所关注。

QQ邮箱本月新规的主要焦点集中在激活SMTP，或者说开通QQ邮箱的SMTP服务功能上。我们都知道，QQ邮箱的申请比一般邮箱的申请步骤多，因此时间成本也就较其他邮箱高出几个数量级。所以淘宝卖家的处理方法往往是只卖QQ邮箱账号和密码给买家，而对于QQ号码申请时候留的三个问题一直讳莫如深。卖家们将邮箱卖出一段时间后，通过三个问题重置QQ邮箱密码，从而再次转卖，从而最大限度的降低成本，获取微薄的利润。而这次的新规明显是针对这样的现象动刀子的。开通SMTP服务，必须设置独立的QQ邮箱密码，而设置独立的QQ邮箱密码，必须有QQ号码申请时候的三个问题，及所谓的密码保护。

QQ邮箱新规将过滤掉一大部分临时使用QQ邮箱的用户，从而提升正常用户的邮件发送体验。158邮件营销专家作为大家首选的邮件群发软件品牌，整个邮件群发过程完全模拟人工发送，对于QQ邮件营销更给力了。

![邮件群发软件](/static/images/qunfa158-qunfa-706-1.png)
`,Sp=`---
title: 购买邮件群发账号（邮件群发服务器）的常见问题
date: 2024-02-26
author: 158软件
description: 购买邮件群发账号（邮件群发服务器）的常见问题 购买现成的邮件群发账号（邮件群发服务器），不需要被如何设置那么多的邮件群发账号困扰，只要一个服务器端没有苛刻限制的邮箱账号，就可以一直
---

# 购买邮件群发账号（邮件群发服务器）的常见问题

购买现成的邮件群发账号（邮件群发服务器），不需要被如何设置那么多的邮件群发账号困扰，只要一个服务器端没有苛刻限制的邮箱账号，就可以一直投递邮件。但购买前的常见问题还是要看的。

### 常见问题

**邮件内容**：用户必须承诺群发的目标Email地址是基于可信邮件列表收集获取的，群发的内容征得收件人同意，而不是收集过来甚至杜撰出来的Email地址。如果符合这个最基本的要求，请继续向下看。

**群发速度**：邮件群发服务器发送速度是每小时500封左右，每天发送量超过一万封，每个服务器只开一个账号，相当于市面上100个收费的企业邮箱；多开账号不会增加发送量，这是由于收件人服务器对投递方IP的限制造成的。在我们邮件群发软件使用该账号的具体设置为：将单次连接设置为2，发送间隔设置为15，我们不对任何其他软件中使用我们邮件群发服务器账号的日发送量负责。

**发送限制**：单封邮件大小不能超过20K。因为邮件服务器是搭建在海外，为了提供传输效率做了此限制，大了传输出错概率会加大很多，群发效率降低。如何优化图片发送请参考 [http://www.qunfa158.com/qunfa/402.html](http://www.qunfa158.com/qunfa/402.html)。

**接收回复**：这只是邮件群发服务器，没有收取邮件的功能，接收回复的邮箱请在邮件群发软件的主界面上设置自己的QQ邮箱、新浪邮箱、163邮箱等均可以。

**垃圾邮件**：托管于公网的邮件服务器按照SMTP协议标准做好SPF反向解析认证等配置，但由于收件人方关键词等原因过滤造成的邮件被判为垃圾邮件甚至丢弃的情况是无法避免的，这方面我们不做任何承诺。本地搭建的服务器默认是没有SPF反向解析的，但这并不是造成垃圾邮件的唯一原因或者主要原因。如果本地邮件服务器要做SPF反向解析，需要联系客户自己的宽带提供商洽谈。

**域名绑定**：客户可以绑定用户自己的域名，不另外收取费用，代申请域名也可以联系我们。

**收费标准**：每一台独立的服务器您需要支付一次性搭建费用，以及服务器每个月的租赁费用。为了更好的群发邮件，建议大家使用自己的独立域名，如果没有域名我们也可以代注册，价格是每年约100元。因为一些收件人邮箱服务器的限制，开通邮件群发服务器都是每个客户独立云主机，独立IP，独立域名，相互不影响，因此这个费用扣除云主机月租和服务器搭建技术费等费用，基本没有利润空间，请不要在这方面讨价还价。

**如何开通**：提前申请，2个工作日内开通。

### 价格相关

邮件群发服务器首年价格为2800元，每年续费为1440元：

[点击这里在线购买](http://www.qunfa158.com/buynow?id=youhui&orderamount=2800&softname=%E7%8B%AC%E7%AB%8BIP%E6%97%A5%E5%8F%91%E4%B8%87%E5%B0%81%E9%82%AE%E4%BB%B6%E6%9C%8D%E5%8A%A1%E5%99%A8)

因为是租用的VPS服务器，每台服务器都是独立IP，重新搭建，所以购买多台没有优惠。

### 如何使用

邮件群发服务器如何使用呢？点击这里了解详情：

[http://www.qunfa158.com/qunfa/866.html](http://www.qunfa158.com/qunfa/866.html)

可以搭配158邮件营销软件使用（需要支付软件注册费），也可以基于延誉宝邮件营销控制台使用（除了服务器的费用之外，不需要另外再支付费用）。
`,Dp=`---
title: 独立IP独立账号日发万封的邮件群发服务器
date: 2015-03-10
author: 158软件
description: 独立IP独立账号日发万封的邮件群发服务器 一句顶一万句不一定，一个顶一百个必须的。邮件群发软件中我们常常受到如何找发送邮箱账号的困扰，如果再加上在群发软件中配置不当，或者使用不熟悉
---

# 独立IP独立账号日发万封的邮件群发服务器

[![邮件群发服务器日发万封惊爆价1580元](/static/images/qunfa158-qunfa-767-0.png "邮件群发服务器日发万封惊爆价1580元")](http://www.qunfa158.com/buy)

一句顶一万句不一定，一个顶一百个必须的。

邮件群发软件中我们常常受到如何找发送邮箱账号的困扰，如果再加上在群发软件中配置不当，或者使用不熟悉，被发送邮箱账号配置搞得焦头烂额的情况也是有的。那么有没有一劳永逸的发送邮箱账号或者**邮件群发服务器**呢？答案是否定的。

任何发送邮箱账号处于系统自身的保护，都是对SMTP账号的投递做限制的，这是邮件发送服务器由生俱来的；但是可以通过合理的配置，将邮件的投递性能发挥到最优，158软件提供的邮件群发服务器开设的邮件群发账号就是这样的。

常规的免费发送邮箱，在邮件群发软件——158邮件营销专家——中通过合理的配置，可以确保每条投递达到约200封邮件，而在没有优化过的邮件群发软件中，往往只能发送十几封就给封掉了。

市面上的企业邮箱，一般每天限制发送也不会超过100封邮件。158软件（qunfa158.com）的邮件群发服务器通过性能调优，可以在一个小时内发送约500封Email，一天综合下来的投递量超过一万封，所以概况的说“一个顶一百个”是不夸张的。

那么是否多开一个账号投递量就能翻倍呢？当然不是！因为收件人的服务器也对投递方服务器每天的投递量或多或少的有限制。

158软件的**邮件群发服务器**基于Oracle的VirtualBox，采用CentOS平台搭建，稳定性方面绝对靠得住；如果需要进步一提高成功率，建议对其做公网IP映射，以及设置其他一些安全认证信息即可。

下载邮件群发服务器可以在以下百度网盘上获取：

[http://pan.baidu.com/s/1ntoPWwD](http://pan.baidu.com/s/1ntoPWwD "邮件群发服务器")

使用上的问题请及时联系我们，也可以参考《[购买邮件群发账号（邮件群发服务器）的常见问题](http://www.qunfa158.com/qunfa/758.html)》！

[![买邮件群发软件体验日发万封邮件群发服务器](/static/images/qunfa158-qunfa-767-1.png "买邮件群发软件体验日发万封邮件群发服务器")](http://www.qunfa158.com/buy)
`,Tp=`---
title: 邮件群发软件的随机文本行变量
date: 2014-12-30
author: 158软件
description: 邮件群发软件的随机文本行变量 158邮件营销专家是一款操作方便，功能强大的邮件群发软件，最新的版本增加了随机文本行的变量，灵活使用这个新功能，每封邮件的内容最大限度的不同，让邮件营
---

# 邮件群发软件的随机文本行变量

158邮件营销专家是一款操作方便，功能强大的邮件群发软件，最新的版本增加了随机文本行的变量，灵活使用这个新功能，每封邮件的内容最大限度的不同，让邮件营销如虎添翼。

先上一幅截图说明如何使用：

[![邮件群发软件](/static/images/qunfa158-qunfa-789-0.png)](http://www.qunfa158.com/wp-content/themes/qunfa158v2/pictures/upload/201412/1419904217.png)

邮件群发出去之后收到的效果如下：

[![邮件群发](/static/images/qunfa158-qunfa-789-1.png)](http://www.qunfa158.com/wp-content/themes/qunfa158v2/pictures/upload/201412/1419904320.png)

收件人没有感觉任何异常，而邮件的内容中却最大限度的插入了变量，包括QQ这两个字母，其中已经夹杂很多其他内容。如果您能看得懂网页代码，稍微阅读以下这封邮件内容的源代码就明白了。

![邮件群发软件](/static/images/qunfa158-qunfa-789-2.png)

最新版本支持随机文本行变量的邮件群发软件可以在158软件的产品主页http://www.qunfa158.com下载。
`,Pp=`---
title: QQ邮箱如何配置邮件群发（2018快速入门版）
date: 2019-07-17
author: 158软件
description: QQ邮箱如何配置邮件群发（2018快速入门版） QQ邮箱是目前使用用户非常多，综合性能较好的免费邮箱，使用QQ邮箱群发电子邮件可以极大降低企业的营销成本。但是使用QQ邮箱群发邮件必
---

# QQ邮箱如何配置邮件群发（2018快速入门版）

QQ邮箱是目前使用用户非常多，综合性能较好的免费邮箱，使用QQ邮箱群发电子邮件可以极大降低企业的营销成本。但是使用QQ邮箱群发邮件必须使用SSL选项才能更稳定的群发邮件，而目前市面上支持这个功能邮件群发软件非常少，甚至要求客户花费数千元购买所谓的企业版才可以使用SSL。其实完全没有这个必要，158邮件营销专家不管试用版还是注册版本，完全开放SSL功能。

QQ邮箱要支持SMTP，需要简单的设置，具体操作步骤如下：  
第一步、登录QQ邮箱  
![QQ邮件群发](/static/images/qunfa158-qunfa-815-0.png)

第二步、打开邮箱主界面点击【设置】。  
![QQ邮件群发软件](/static/images/qunfa158-qunfa-815-1.png)

第三步、进入邮箱设置后找到【账户】 点击。  
![群发QQ邮件](/static/images/qunfa158-qunfa-815-2.png)

第四步、进入账户设置后，将滚动往下滑动，找到【POP3/SMTP】服务点击开启，并按照提示设置独立密码，完成开启SMTP。  
![QQ邮件群发](/static/images/qunfa158-qunfa-815-3.jpg)

![邮件群发软件](/static/images/qunfa158-qunfa-815-4.png)

第五步、打开158邮件营销专家软件。点击【配置】邮件发送账号  
![邮件群发软件](/static/images/qunfa158-qunfa-815-5.png)

然后点击 【增加】  
![邮件群发软件](/static/images/qunfa158-qunfa-815-6.png)

接下来按步骤填写。只需要填写账号和密码，点击【测试】。完成测试之后点击【保存】。  
![邮件群发软件](/static/images/qunfa158-qunfa-815-7.jpg)

配置完成，现在可以进行邮件发送了。
`,Mp=`---
title: 邮件代发 邮件营销 费用与价格，后台操作说明，常见问题
date: 2020-04-11
author: 158软件
description: 邮件代发 邮件营销 费用与价格，后台操作说明，常见问题 常见问题（FAQ）邮件代发与客户端软件群发有什么区别？邮件代发不需要安装客户端软件，群发过程中也不需要电脑开机，因为这些事情
---

# 邮件代发 邮件营销 费用与价格，后台操作说明，常见问题

## 常见问题（FAQ）

### 邮件代发与客户端软件群发有什么区别？

**邮件代发**不需要安装客户端软件，群发过程中也不需要电脑开机，因为这些事情都由服务器来完成了。**客户端邮件群发**是[下载158邮件营销专家](http://www.qunfa158.com/software-email-qunfa)，安装在自己的电脑上群发，邮件群发过程中需要电脑始终开机。

### 邮件群发服务器只能邮件代发过程中使用吗？

不是的，我们的邮件群发服务器解决方法支持邮件代发和158邮件营销专家客户端两种情况下使用，功能和性能完全相同，具体详情见：

[http://www.qunfa158.com/qunfa/758.html](http://www.qunfa158.com/qunfa/758.html)

### 邮件代发价格如何？

与直接注册购买158邮件营销专家在自己的电脑上群发不同，邮件代发按照发送量收费，分为200元、500元和5000元等套餐，具体详情请查看：

[http://yanyubao.tseo.cn/Supplier/EmailMarketingMgr/index/setting\\_type/chongzhi\\_online.html](http://yanyubao.tseo.cn/Supplier/EmailMarketingMgr/index/setting_type/chongzhi_online.html)

可以在线充值，即时生效。需要注册才能查看，使用手机号码登录即可。

### 如何设计邮件营销内容？支持群发附件吗？

延誉宝邮件营销解决方案支持在线设计邮件营销内容，模板化保存，方便随时复用。邮件营销内容支持以下特性：

> 1、固定变量：如收件人姓名、email，发件人姓名、email，当前时间，随机字符串等。
> 
> 2、自定义变量：随机字符串文本，Excel的列名等。
> 
> 3、文字的大小、字体、颜色任意变换。
> 
> 4、更多富媒体属性：支持超链接，任意引用和插入网络图片。
> 
> 5、添加多个附件群发邮件。
> 
> 6、不限模板数量。

关于邮件附件，虽然邮件代发平台不限制附件个数，但是为了提高邮件群发的效率和到达率，建议控制总的附件大小，不超过200KB为宜，太大的附件，可以在邮件内容中设置超链接。

![](/static/images/qunfa158-qunfa-866-0.png)

### 邮件代发可以自己操作吗？后台什么样子的？

邮件代发功能是延誉宝邮件营销控制的一部分，而邮件营销是延誉宝SaaS云软件的一个功能模块，所以登录到延誉宝SaaS云，都可以看到这样的操作后台，如下图所示：

![](/static/images/qunfa158-qunfa-866-1.png)

### 如何注册延誉宝后台？

使用手机号码注册即可，一个账号，通行所有的SaaS云软件。

### 邮件群发服务器具体什么情况？

点击这里查看邮件群发服务的详细功能和性能指标：

[http://yanyubao.tseo.cn/Supplier/EmailMarketingMgr/index/setting\\_type/booking\\_vps.html](http://yanyubao.tseo.cn/Supplier/EmailMarketingMgr/index/setting_type/booking_vps.html)

邮件群发服务器支持绑定自己的独立域名。
`,qp=`---
title: QQ邮件群发：使用授权码代替QQ邮箱独立密码
date: 2020-09-01
author: 158软件
description: QQ邮件群发：使用授权码代替QQ邮箱独立密码 基于第三方使用电子邮件，QQ邮箱的性能是名列前茅的。我们有时候需要使用QQ邮箱做邮件群发，在邮件群发软件中，需要设置邮箱密码，而QQ邮
---

# QQ邮件群发：使用授权码代替QQ邮箱独立密码

基于第三方使用电子邮件，QQ邮箱的性能是名列前茅的。我们有时候需要使用QQ邮箱做邮件群发，在**邮件群发软件**中，需要设置邮箱密码，而QQ邮箱出于安全性考虑，已经逐步摒弃了“QQ登录密码”以及后来的“QQ邮箱独立密码”，使用“授权码”这种新的安全机制。

其实，不管是哪种密码管理形式，在SMTP协议中，都是授权密码的概念。因为Web版本的邮箱不管做的多么花哨和复杂，标准的SMTP协议是不变的。因此，使用QQ邮箱在第三方软件中群发邮件，只需要设置**授权码**就可以了。

设置路径：QQ邮箱的电脑端后台>>设置>>帐户>>POP3/IMAP/SMTP，如下图所示：

![](http://www.qunfa158.com/wp-content/uploads/2020/09/QQ邮箱授权码01.png)

在SMTP和POP3的设置选项中，看对应的服务状态是否开启：

![](http://www.qunfa158.com/wp-content/uploads/2020/09/QQ邮箱授权码02.png)

如果已经开启，建议使用“授权码”作为SMTP帐户对应的密码。

### 获取授权码的过程

获取授权码的过程是：使用QQ的密保手机（手机号码），发送指定的汉字“配置邮件客户端”到1069开头的腾讯的ICP号，发送完成后，点击“我已发送”，页面上会显示对应授权码，复制，保存。

![](http://www.qunfa158.com/wp-content/uploads/2020/09/QQ邮箱授权码03.png)

### 邮件群发软件的配置

邮件群发软件的配置如下图，画圈的密码栏填写刚才复制保存的授权码即可。

![](http://www.qunfa158.com/wp-content/uploads/2020/09/QQ邮箱授权码04.png)

另外一些QQ邮箱的常规配置也注意选择，其中SSL默认是可选的，但是如果采用了授权码机制，“支持SSL”就是必选项了，一定要选择。
`,Fp=`---
title: 雅虎群组（Yahoo Group）终将谢幕，邮件营销是否日暮西山?
date: 2020-10-13
author: 158软件
description: 雅虎群组（Yahoo Group）终将谢幕，邮件营销是否日暮西山? 虽然关闭的日子一再推迟，雅虎群组（Yahoo Group）服务还是熬不过2020年12月15日这个坎。作为雅虎的
---

# 雅虎群组（Yahoo Group）终将谢幕，邮件营销是否日暮西山?

虽然关闭的日子一再推迟，雅虎群组（Yahoo Group）服务还是熬不过2020年12月15日这个坎。作为雅虎的大老板，美国电信运营商Verizon最终还是做出了这个关闭的动作。

Verizon是2017年收购的雅虎公司 ，Groups是作为雅虎的一项服务，也属于这个公司运营。去年，即2019年，Verizon已经宣布永久删除Yahoo Group中所有过去的用户内容，但是网站仍然继续运营。失去内容的网站，实际上就是一个空壳和傀儡，运营没有任何的意义。

![](http://www.qunfa158.com/wp-content/uploads/2020/10/QQ图片20201013164052.png)

雅虎群组是一项什么服务呢？熟悉邮件营销的人都懂的。用户可以将自己的Email登记到某一个雅虎群组中，也就完成了对这个群组的订阅。而群组的管理员有权限向所有的订阅者分发邮件，邮件内容比如通知、分享，甚至广告和推销信息。管理员也可以将权限放开，让所有订阅了该群组的订阅者其他所有订阅者群发邮件，虽然这样容易导致Group中的广告内容泛滥，但是作为小范围的讨论，在没有即时通讯工具的时代，这个功能还是非常有用的。这项服务在国内也成为“邮件列表”，从技术层面上说，是一种邮件群发技术。

雅虎群组的主要传播方式是邮件，在移动互联网时代，虽然即时通讯工具盛行，沟通效率也非常高，但是作为最传统的互联网通讯方式，邮件（Email）依然有着不可替代的作用。与发微博、微信消息不同，邮件可以传递更丰富的内容信息，而且在内容审查和信息过滤方面也没有那么严格，所以作为营销工具，邮件营销依然没有更好的替代方案。

关闭雅虎群组服务，代表类似“邮件列表”方式的订阅，作为一种社交联系方式，已经逐步被新的技术替代，但是作为内容表达和传递的方式，Email还是会继续发挥其办公、广告推广等最初的作用，邮件营销没有日暮西山，反而活力依旧。最直接的例子，就是雅虎依然保持着免费邮件这个功能，而早期跟yahoo mail几乎同时产生的hotmail，经过微软公司的持续技术升级，依然以live、outlook等方式存在。在国内，QQ邮箱和网易邮箱就不用说了，第二梯队的新浪免费邮箱和搜狐邮箱也同样保持活力，连专心做电商的阿里巴巴，在阿里云中还提供付费或免费的邮件服务。
`,Ip=`---
title: 邮件群发小号多，维护不易苦难说
date: 2023-10-07
author: 158软件
description: 邮件群发小号多，维护不易苦难说 维护邮件群发的小号，可以借助记事本等工具，但同时也可以使用邮件群发软件自带的SMTP账号批量管理功能来实现，例如像158邮件营销专家这样的软件，还可
---

# 邮件群发小号多，维护不易苦难说

维护邮件群发的小号，可以借助记事本等工具，但同时也可以使用邮件群发软件自带的SMTP账号批量管理功能来实现，例如像158邮件营销专家这样的软件，还可以通过“测试”按钮随时查看小账户当前的状态是否可用。

![](/static/images/qunfa158-qunfa-942-0.png)

![](/static/images/qunfa158-qunfa-942-1.png)

维护多个用于邮件群发的小号需要一定的时间和精力，但可以使用专业的邮件群发工具和策略来简化这个过程，确保邮件的发送，如果您需要大量发送邮件并且希望避免个人邮箱和企业邮箱的限制，那么使用小号可能是一个不错的选择，可以给我们带来以下两个好处：

1.  邮件发送数量：使用小号可以增加邮件发送数量。与个人邮箱和企业邮箱相比，小号的邮件发送数量通常可以更高，更适合进行邮件营销和群发邮件。
    
2.  避免发送限制：个人邮箱和企业邮箱通常会有发送数量和内容的限制，而小号可以避免这些限制。
    

我们同时也应该看到，使用小号进行邮件群发可能会导致邮件被标记为垃圾邮件，甚至被拦截或删除。这可能会影响您的邮件到达率和转化率，降低邮件质量。使用小号需要更多的管理，包括创建和验证小号、配置发件箱、维护发件箱等，这些操作可能会增加您的时间和精力。

随着这些账号被反复的时候，其状态也会经历“正常”、“封禁”、“受限”等过程而不断变化，所以维护这些小号不易。

用于邮件群发的小号如果共享给别人，或者使用别人的小号，则可能会带来一些风险和问题。以下是一些需要考虑的因素：

1.  隐私保护：共享小号可能会泄露个人信息和隐私，因为你需要向共享对象提供小号和相关的验证信息。这样做可能会被视为违反隐私保护法规和规定。
    
2.  邮件质量：共享小号可能会影响邮件的质量和到达率。如果共享对象使用小号发送垃圾邮件或不合法的内容，可能会影响小号的声誉和邮件的信誉度。
    
3.  安全性：共享小号可能会影响邮件的安全性。如果共享对象使用小号进行不当的操作，可能会影响小号的稳定性和可用性。
    

因此，建议不要将用于邮件群发的小号共享给别人，毕竟一个邮箱账号可以群发的频率和单位时间段的数量是有限的，共享这些小号，非但不能提高发送效率，反而还会降低邮件营销的质量。

使用独立的邮件群发服务器代替小号则是一劳永逸的方案，使用独立的邮件群发服务器可以避免个人信息被泄露和被垃圾邮件攻击。与使用小号相比，您不需要向邮件群发服务器提供个人信息或敏感信息，从而更好地保护您的隐私。同时，使用独立的邮件群发服务器可以提供更好的邮件质量，因为您可以更好地控制邮件的发送和接收。您可以设置自己的SMTP服务器、DNS记录、SPF记录等，以确保邮件的发送和接收符合最佳实践，提高邮件的到达率和转化率。在管理难度方面，使用独立的邮件群发服务器需要更多的管理，包括搭建服务器、配置SMTP服务器、设置DNS记录、配置SPF记录等。这些操作需要更多的技术知识和时间精力，但也可以提供更多的灵活性和控制性。

总而言之，使用独立的邮件群发服务器可以提供更好的隐私保护和邮件质量，但需要更多的管理难度和技术知识。您需要根据自己的需求和情况来决定是否使用独立的邮件群发服务器代替小号。
`,Qp=`---
title: 158邮件地址搜索专家使用手册
date: 2022-09-26
author: 158软件
description: 158邮件地址搜索专家使用手册 158邮件地址搜索专家，是一款操作简单而功能强大的邮件地址采集和提取工具，可用于邮件地址采集、邮件地址搜索，是搜索软件地址的便捷软件，邮件群发必备的
---

# 158邮件地址搜索专家使用手册

158邮件地址搜索专家，是一款操作简单而功能强大的邮件地址采集和提取工具，可用于邮件地址采集、邮件地址搜索，是搜索软件地址的便捷软件，邮件群发必备的辅助工具软件之一。软件支持本地文件搜索、目录搜索，以及互联网络搜索，可以轻松实现邮件地址采集。

[![邮件地址搜索](/static/images/qunfa158-spider-210-0.png)](http://www.qunfa158.com/wp-content/themes/qunfa158v2/pictures/upload/201407/1405476175.png)

我们重点从网络搜索和本地硬盘搜索介绍使用这款Email地址提取利器的方法和技巧。

# 1 从网站提取Email地址

![](/static/images/qunfa158-spider-210-1.png)

从网站中提取Email地址，有三种方式：

## 1.1 根据网址搜索

直接根据网址，逐级搜索，需要设置搜索深度，搜索深度越大，读取的网页越多，搜索到Email地址的机会也就越大。

以百度贴吧为例，我们知道MSN吧是百度交友比较集中的地方，他的地址是：

http://tieba.baidu.com/f?kw=email

我们将这个地址作为入口地址，搜索深度可以设置为3，线程池设置为3，点击软件界面上方的“开始搜索”即可。

## 1.2 根据搜索引擎搜索

根据搜索引擎搜索。原理和网页直接搜索是一样的，也可以设置搜索深度和线程池。在百度和谷歌的基础上，158邮件地址搜索专家还增加了Google（谷歌英文版）、雅虎、Yahoo!、Live、搜狗、搜搜等搜索引擎的支持。

比如我们想搜索印刷行业的Email地址，那么这些Email地址一般都是出现在包含印刷字样的网页上，以Google为例，我们输入印刷，先搜搜看，发现 的确集中了很多的印刷行业。好了，按照下图的配置，开始搜索，为了增大搜索到Email的几率，可以将搜索深度设置到4，线程池可以设置在3左右。线程池 设置越大，搜索的速度越快，占用系统CPU资源也就越多。

如果要同时搜索多个关键词，具体设置方法是：将要搜索的多个关键词之间用“||”分割开来。例如要同时搜索“上海礼品”和“北京火车票”，那么可将关键词设定为：

“上海礼品||北京火车票”

三个或者更多关键词的情况以此类推。在点击界面右上方“开始搜索”之后，软件会自动拆分这些关键词，并分别发出搜索请求。

## 1.3 按照行业和地区搜索

这种搜索方式基于百度搜索引擎，按照设定好的关键词进行搜索。使用的时候，可以从列表中选择关键字，如果对这些关键字都不满意，也可以自己输入，这个下拉列表是可编辑的，很方便。

搜索完毕，可以导出搜索结果，在导出搜索结果的同时，可以过滤重复的Email地址。（备注：只有注册用户才可以导出搜索结果，试用版不支持该功能）

![搜索网站邮件地址](/static/images/qunfa158-spider-210-2.png)

# 2 从本地硬盘提取Email地址

158邮件地址搜索专家支持从文件和包含文件的目录中提取Email地址。

![搜索电脑上Email地址](/static/images/qunfa158-spider-210-3.png)

如图所示，可以选择搜索一个具体的文件，或者搜索目录。这里需要指出的是，搜索目录的话，是包括这些目录下的子目录的，因此不需要设置软件界面中的搜索深 度。本地硬盘的Email地址搜索是线性的，也不需要设置线程池大小。至于这些文件中的Email地址，可以是杂乱无章的，只要具有Email地址的特 性，都是可以被识别出来的。

最新版本的邮件地址采集软件已经支持Word、Excel、HTM等格式文件的搜索，因此这里不仅仅可以选择文本文件。

# 3 搜索结果的导出

经过长时间的搜索，比如一个晚上之后，如果你的电脑开启的服务太多，或者内存太小，会出现按导出结果的按钮无反应的情况。

![无法分配更多的Internet句柄](http://qunfa.abot.cn/upload/202209261303455715.png)

这里由于系统可以分配的资源耗尽造成的，采集Email地址需要过程中不断的创建和销毁文件句柄，但Windows对于要销毁的文件句柄，采用队列和排队的形式，这样会造成系统资源得不到及时释放，所以保存文件时会打不开Windows自带的资源管理器。Windows资源管理器打不开，你就没办法指定保存文件的位置。

解决办法为：关掉软件，重启，不要开始新的搜索，直接导出搜索结果。不开始新的搜索任务之前，上一次的搜索结果依然保存在本地数据库中，不会丢失。

导出的搜索结果，可以在[邮件群发软件](http://www.qunfa158.com/software-email-qunfa)中作为收件人列表导入进去。目前主流的**邮件群发软件**，包括158邮件营销专家，都支持Text格式和Excel格式的收件人地址本。
`,Rp=`---
title: 158企业名录搜索专家使用手册
date: 2014-08-25
author: 158软件
description: 158企业名录搜索专家使用手册 158企业名录搜索专家是一款操作简单而功能强大的手机号码提取工具，它支持本地文件搜索、目录搜索，以及互联网络搜索，可以轻松实现手机号码的采集。这款软
---

# 158企业名录搜索专家使用手册

**158企业名录搜索专家**是一款操作简单而功能强大的手机号码提取工具，它支持本地文件搜索、目录搜索，以及互联网络搜索，可以轻松实现手机号码的采集。

这款软件的安装比较简单，这里就不赘述了。可以在这里下载：[http://www.qunfa158.com](http://www.qunfa158.com "邮件群发软件")。

# 1 软件主界面

打开软件之后，我们首先看到软件的主界面如下图所示：

[![企业名录搜索](/static/images/qunfa158-spider-212-0.png)](http://www.qunfa158.com/wp-content/themes/qunfa158v2/pictures/upload/201407/1405484170.png)

软件主界面分为以下几块内容：

1、搜索条件设置区：这里可以设置根据网页搜索、本地文件搜索和目录搜索三种方式，具体的搜索方式我们会在下面逐个讲解。

2、搜索过程展示区：显示正在搜索的任务，以及队列中的网页地址排队情况等。

3、搜索结果展示区：这里只展示最新搜索到的100条记录，搜索过程中的手机号码会如实展示出来，需要过滤重复请在导出时候完成。

4、搜索结果处理区：这里可以选择导出搜索结果，具体见下文的详细说明。

下面我们从网络搜索和本地硬盘搜索介绍使用这款手机号码提取利器的方法和技巧。

# 2 从网站提取手机号码

从网站中提取Email地址，有三种方式：

![企业名录搜索与采集](/static/images/qunfa158-spider-212-1.png)

## 2.1 直接根据网址

根据网址搜索是逐级搜索，需要设置搜索深度，搜索深度越大，读取的网页越多，搜索到手机号码的机会也就越大。

我们以51job为例，我们知道51job是人群比较集中的地方。地址是：

http://search.51job.com/jobsearch/search\\_result.php?fromJs=1&jobarea=010000&funtype=0100&industrytype=00&issuedate=3&lang=c&fromType=18

我们将这个地址作为入口地址，搜索深度可以设置为3，线程池设置为3，点击软件界面上方的“开始搜索”即可。

## 2.2 根据搜索引擎搜索

原理和网页直接搜索是一样的，也可以设置搜索深度和线程池。在百度和谷歌的基础上，158企业名录搜索专家还增加了Google（谷歌英文版）、雅虎、Yahoo!、Live、搜狗、搜搜等搜索引擎的支持。

比如我们想搜索手机行业的手机号码，那么这些手机号码一般都是出现在包含手机关键 字的网页上，以百度为例，我们输入手机，先搜搜看，发现 的确集中了很多的手机行业。好了，按照下图的配置，开始搜索，为了增大搜索到手机号码的几率，可以将搜索深度设置到4，线程池可以设置在3左右。线程池 设置越大，搜索的速度越快，占用系统CPU资源也就越多。

如果要同时搜索多个关键词，具体设置方法是：将要搜索的多个关键词之间用“||”分割开来。例如要同时搜索“上海礼品”和“北京火车票”，那么可将关键词设定为：

“上海礼品||北京火车票”，如图所示：

三个或者更多关键词的情况以此类推。在点击界面右上方“开始搜索”之后，软件会自动拆分这些关键词，并分别发出搜索请求。

## 2.3 按照行业和地区搜索

这种搜索方式基于百度等搜索引擎，按照设定好的关键进行搜索。使用的时候，可以从列表中选择关键字，如果对这些关键字都不满意，也可以自己输入，这个下拉列表是可编辑的，很方便。

搜索完毕，可以导出搜索结果，在导出搜索结果的同时，可以过滤重复的手机号码。（备注：只有注册用户才可以导出搜索结果，试用版不支持该功能）

# 3 从本地硬盘提取手机号码

158企业名录搜索专家支持从文件和包含文件的目录中提取手机号码。

![企业名录采集](/static/images/qunfa158-spider-212-2.png)

如图所示，可以选择搜索一个具体的文件，或者搜索目录。这里需要指出的是，搜索目录的话，是包括这些目录下的子目录的，因此不需要设置软件界面中的搜索深 度。本地硬盘的企业名录搜索是线性的，也不需要设置线程池大小。至于这些文件中的手机号码，可以是杂乱无章的，只要具有Email地址的特 性，都是可以被识别出来的。

最新版本的企业名录采集软件已经支持Word、Excel、HTM等格式文件的搜索，因此这里不仅仅可以选择文本文件。

# 4 搜索结果的导出

![搜索网页手机号码](/static/images/qunfa158-spider-212-3.png)

## 4.1 按照手机号码归属地和运营商的过滤

158企业名录搜索专家在搜索过程中可以批量查询手机号码的归属地，在导出搜索结果的过程中，可以根据这些信息对搜索结果过滤，获取您需要的手机号码。

导出手机号码的时候，可以选择按照归属地导出和按照运营商导出，也可以是两个条件的组合。

另一方面，导出过程中依然可以过滤重复。以上三个条件可以组合使用，无冲突。

## 4.2 导出过程中可能遇到的问题

经过长时间的搜索，比如一个晚上之后，如果你的电脑开启的服务太多，或者内存太小，会出现按导出结果的按钮无反应的情况。

这里由于系统可以分配的资源耗尽造成的，采集网页上的手机的号码需要过程中不断的创建和销毁文件句柄，但Windows对于要销毁的文件句柄，采用队列和排队的形式，这样会造成系统资源得不到及时释放，所以保存文件时会打不开Windows自带的资源管理器。Windows资源管理器打不开，你就没办法指定保存文件的位置。

解决办法为：关掉软件，重启，不要开始新的搜索，直接导出搜索结果。不开始新的搜索任务之前，上一次的搜索结果依然保存在本地数据库中，不会丢失。
`,Op=`---
title: 邮箱采集常用方法
date: 2014-04-20
author: 158软件
description: 邮箱采集常用方法 对于做外贸的朋友来说，利用电子邮件群发来找客户是一种最常用的方法。但是很多做外贸的朋友觉得：要找到比较精准的客户邮箱地址很难，特别是对于这些外贸新人来说，更是无从
---

# 邮箱采集常用方法

对于做外贸的朋友来说，利用电子邮件群发来找客户是一种最常用的方法。但是很多做外贸的朋友觉得：要找到比较精准的客户邮箱地址很难，特别是对于这些外贸新人来说，更是无从下手。我们这里总结了一些使用**158邮件地址搜索专家**扫描网页，提取Email地址，从而寻找潜在客户的方法分享给大家。  
在这里要提醒大家的是，在搜集目标邮箱地址之前一定要先分析好你的产品终端市场，你的产品适合或畅销哪些国家和地区，分析好谁在采购你的产品，中间商或直接的批发的人，找对市场，找对人，做正确的事。  
一、利用搜索引擎  
1、搜索引擎选择  
1)www.google.com英文界面，可以按照国家搜索，很方便。在中国不能直接打开会跳转到www.google.com.hk，需要用VPN，或者使用其他国家的谷歌搜索，如加拿大www.google.ca  
2)www.alltheweb.com可以按照地区搜索，对于不知道国家名称的那些地区很好用，而且可以把格式定义为html格式，这样就可以提高打开的效率了。但是对于亚洲就不太好了，因为搜索到的大多是中国的B2B网站的，建议与google、yahoo配合使用。  
3)search.yahoo.com  
还有MSNSEARCH和livesearch  
2、google设置  
进行搜索前建议把每页显结果改成100。因为这个样子可以看到10000个结果，如果一页10个的话，只能看到1000个结果。  
3、关键词的选择  
关键词选择很重要，一个精准关键词可大大提高你的做事效率。这里给大家一个链接（https://adwords.google.com/select/KeywordToolExternal），可以查找相关关键词，及用户搜索该次的指数，指数越高，说明搜索的人越多。  
4、公司后缀搜索方法。把每个国家公司的后缀名放到Google搜索栏中，然后加上产品名称搜索，比如：LLC rubber sheet，搜索，就会有很多公司的网址，然后通过网址找到邮箱。  
5.网址+email。有的客户网站，没有邮箱地址，只有一个feedback表格让你填，你可以用下面方法找到客户的有效邮箱(以www.magvision.com为例)。在google中输入“magvision.com email”进行搜索，结果中就可以看到很多连接，不用打开，看有邮箱地址，粘贴过来可以了，如果结果链接超过100个，就不要发了，搜索一下：“magvision.com president”看看有没有结果，没有就算了。回去把表格填了就好了。  
6、google图片搜索方法进入英文google，点击image，然后在地址栏中输入产品名称，就会出来很多图片，如果图片和自己的产品一样，再判断下面的网址是不是公司的网址，把公司网址粘贴到新的internet地址栏中打开，进行网址+email的搜索步骤。  
7、多语言搜索。比如你要搜索德国的客户，那么你就可以用翻译工具翻译成德语，在德语搜索引擎中搜索。这些词语不能仅仅是用翻译工具翻译，毕竟机器是死的，我们在浏览其他语种的网站时也应该把该语种页面中的产品名称整理出来，慢慢积累就多了。  
二、黄页+搜索引擎搜集  
利用黄页可帮助我们有针对性地找到客户邮箱，当前世界各国都有一定规模的企业黄页。在正规黄页中的企业，一般都会将邮箱等联系方式留下。外贸人要做的，便是找到最合适的企业黄页网站，并从中筛选有用信息。不过建议大家不要发上面的邮箱，通过上面的公司名去找公司网址，再找邮箱，虽然费时费事，但是可以减少退信，因为邮箱很多都变了。  
三、行业性网站  
具体的外贸产品都会有些专业性的行业网站、产品供求网站，从上面找国外生产商，再去他们的主页上找，有些会有EMAIL地址的。普通B2B网站上面的客户虽然大家虽然不大重视，但是我认为还是有必要看看的，找找tradelead，找到客户的公司名称，然后利用搜索工具搜索自己所知道的进口商名，有时会找到潜在客户的EMAIL地址。另外据经验人士介绍，付费的平台精准度更高，客户信息也会更详细。
`,Lp=`---
title: 企业名录搜索中的地区搜索与归属地及运行商的关系
date: 2014-08-25
author: 158软件
description: 企业名录搜索中的地区搜索与归属地及运行商的关系 在使用158企业名录搜索专家采集网页上的手机的号码过程中，也可以直接根据地区和行业搜索网页上的手机的号码。但是在搜索的过程中，大家会
---

# 企业名录搜索中的地区搜索与归属地及运行商的关系

在使用158企业名录搜索专家采集网页上的手机的号码过程中，也可以直接根据地区和行业搜索网页上的手机的号码。但是在搜索的过程中，大家会发现搜索出来的号码归属地与所设置的地区不一致的情况，如下图所示。

![企业名录搜索](/static/images/qunfa158-spider-389-0.gif)

这不是使用上设置的问题，也不是软件的BUG。大家看过158企业名录搜索专家的帮助手册之后不难发现，地区和行业搜索，最终都是转换为关键词，然后使用百度搜索去逐级扫描网页。因此，只要是网页上出现的，符合手机号码规则的字符串，都会被提取出来。这个按照地区搜索的工作原理。

而右侧显示的手机号码的归属地和运营商，是根据软件自动的当前最新的手机号码段分配的数据库来判断的。只需要手机号码的前7位数字，就可以做出这个判断。对于移动公司新增的一些号段，企业名录搜索软件中还没有添加进去，因此这时候会出现未知的情况。

因此，这个两者同样是地区，但是没有联系的。在导出手机号码的时候，可以按照“归属地”过滤并导出手机号码。
`,Bp=`---
title: 158企业名录搜索专家常见问题（FAQ）
date: 2014-08-25
author: 158软件
description: 158企业名录搜索专家常见问题（FAQ） 企业名录搜索软件一天可以搜索多少手机号码？158企业名录搜索专家本身不限制搜索的数量，其后台强大的数据库管理功能可以同时管理数十万手机号码
---

# 158企业名录搜索专家常见问题（FAQ）

企业名录搜索软件一天可以搜索多少手机号码？  
158企业名录搜索专家本身不限制搜索的数量，其后台强大的数据库管理功能可以同时管理数十万手机号码并对他们按条件过滤，具体的搜索数量依赖于你的搜索目标的，比如搜索新浪新闻网站，一天也搜不到几个手机号码；到百度贴吧，或者一些交友论坛，一会可以搜出好多。

如何升级158企业名录搜索专家？  
您可以到产品主页 http://www.qunfa158.com 获取最新版本。注册用户升级方法：下载最新版覆盖安装，原有注册信息不会丢失。

我搜索的手机号码为什么导不出？  
试用版只提供号码搜索功能，要导出企业名录搜索结果，请购买注册版本。

为什么我搜索了两天，还是没有搜索完？  
158企业名录搜索专家 是根据设置的“搜索深度”去读取网页的，“搜索深度”的概念可以参考其他问答，根据这个概念，每个网页中有10个链接，那么深度为5的 时候，连接数理论上是 10\\*10\\*10\\*10，而实际搜索过程中，页面出现的链接数远远不止10个。因此，可以形象的将搜索比喻成一棵数，搜索是从树根开始的，越向上，枝叶越 多，所以，如果深度设置比较大，而链接又很多，就会出现“搜不完”的假象。这时候，可以主动停止搜索过程，导出搜索结果。

是否有常用的手机号码比较集中的网站推荐呢？  
这类网站很多的，您可以针对自己的行业自己收集一些，我们这里只是提供一个没有行业针对性但是手机号码集中的网址：  
http://b2b.hc360.com/supplyself/202743607.html  
http://lyg.edai.com/  
http://sh.58.com  
http://www.1688.com/

线程池和搜索深度要如何设置？  
设置的线程池越大，搜索速度越快；设置的搜索深度越大，搜索的网页越多。可以根据自己的实际需要设置，2～8都可以。

158企业名录搜索专家的线程池一般设置为多大？  
要根据你电脑的性能来设定的，一般设置1～10比较合适。高性能的电脑，可以设置为高于10，除非对多线程支持特别好的电脑，设置15及以上的。  
如果你电脑是双核的CPU，建议设置为2的整数倍，如4、6、8、10等；同理，如果是三核的CPU，比如AMD的一些品牌，可以设置为3、6、9、12；四核CPU可以设置4、8、12等。  
线程池设置太大，在提供处理速度的同时，也会造成任务队列积累的待处理任务越来越多，所以如果这时候电脑的配置不高，待处理的任务不能及时完成，会造成系统暂时堵塞。

网页搜索深度一般是多少？  
搜索深度为1，代表只搜索当前的一个页面；搜索深度为2，则搜索当前页面和在这个页面里能够找到的链接对应的页面；依次类推。一般情况下，设置搜索深度3比较合适，设置为5，则搜索过程会漫长很多，就好比一棵树，越向上，枝叶越多。

有好多论坛是需要登录之后才能看到内容的，你们的企业名录搜索软件也可以搜索吗？  
不一定的，有一些论坛将登陆后的参数设置在session中，就不能够被调用搜索了，还有一些经过加密和图片形式的号码也很难被抓取。而对于直接在网址中表现的用户登录过程，则是可以的，具体的方式是：先用IE浏览器（注意：一定是微软的IE浏览器）登录论坛，登录后选择保存用户名和密码一天或一个月，总之就是要记住你的登录。然后在158邮件地址搜索专家中，选择“搜索互联网”–>>“根据网址搜索”，将您要搜索的IE地址栏出现的目标网址输入进去，点击“开始搜索”即可。

158企业名录搜索专家可以针对地区和行业搜索吗？准确率多高？  
158企业名录搜索专家 基于网页关键词或者指定网址对网页进行扫描，提取其中的手机号码，即，只要有关键词存在，或者网址匹配，则认为手机号码符合搜索条件，因此，谈论准确率意义不大。

你们的企业名录搜索软件和市面上的企业名录搜索软件有什么区别？  
158企业名录搜索专家 涵盖了百度搜索和Google搜索的所有功能；除此之外，它还支持针对网页的企业名录搜索、可以搜索指定的文本文件，可以搜索本地硬盘具体目录中的手机号码，是一款功能强大的企业名录搜索工具。

158企业名录搜索专家采集的手机号码都是真实存在的吗？  
作为一款企业名录采集软件，158企业名录搜索专家是逐个扫描网页，按照手机号码的格式来采集网页上的手机的号码，即符合格式的字符串，即认为是手机号码。例如182\\*\\*\\*\\*6319等，都是符合手机号码正则表达式的，软件本身不对手机号码的真实性做判断。

为什么我搜索出来的手机号码有很多是重复的？  
在Email的搜索过程中，158企业名录搜索专家 如实的记录搜索任务和搜索结果。例如，一个网站的几乎搜索页面都会出现他的客服电话，那么这个客服电话就会在不同的页面被搜索到，这也是为什么你看看搜索一些重复的手机号码出来的原因。  
为了提高搜索的效率，158企业名录搜索专家 没有在搜索过程中没有选择立即过滤掉这些重复的手机号码；在导出搜索结果的过程中，你可以选择过滤重复的手机号码。
`,Np=`---
title: 158邮件地址搜索专家常见问题（FAQ）
date: 2014-05-30
author: 158软件
description: 158邮件地址搜索专家常见问题（FAQ） 线程池和搜索深度要如何设置？设置的线程池越大，搜索速度越快；设置的搜索深度越大，搜索的网页越多。可以根据自己的实际需要设置，2～8都可以。
---

# 158邮件地址搜索专家常见问题（FAQ）

线程池和搜索深度要如何设置？  
设置的线程池越大，搜索速度越快；设置的搜索深度越大，搜索的网页越多。可以根据自己的实际需要设置，2～8都可以。

158邮件地址搜索专家的线程池一般设置为多大？  
要根据你电脑的性能来设定的，一般设置1～10比较合适。高性能的电脑，可以设置为高于10，除非对多线程支持特别好的电脑，设置15及以上的。  
如果你电脑是双核的CPU，建议设置为2的整数倍，如4、6、8、10等；同理，如果是三核的CPU，比如AMD的一些品牌，可以设置为3、6、9、12；四核CPU可以设置4、8、12等。  
线程池设置太大，在提供处理速度的同时，也会造成任务队列积累的待处理任务越来越多，所以如果这时候电脑的配置不高，待处理的任务不能及时完成，会造成系统暂时堵塞。

网页搜索深度一般是多少？  
搜索深度为1，代表只搜索当前的一个页面；搜索深度为2，则搜索当前页面和在这个页面里能够找到的链接对应的页面；依次类推。一般情况下，设置搜索深度3比较合适，设置为5，则搜索过程会漫长很多，就好比一棵树，越向上，枝叶越多。

我搜索的Email地址为什么导不出？  
试用版只提供Email搜索功能，要导出邮件地址搜索结果，请购买注册版本。

如何升级158邮件地址搜索专家？  
您可以到产品主页 http://www.qunfa158.com 获取最新版本。注册用户升级方法：下载最新版覆盖安装，原有注册信息不会丢失。

Email搜索软件一天可以搜索邮件地址？  
这是依赖于你的搜索目标的，比如搜索新浪新闻网站，一天也搜不到几个Email地址；到百度贴吧，或者一些交友论坛，一会可以搜出好多。

为什么我搜索了两天，还是没有搜索完？  
158邮件地址搜索专家是根据设置的“搜索深度”去读取网页的，“搜索深度”的概念可以参考其他问答，根据这个概念，每个网页中有10个链接，那么深度为5的 时候，连接数理论上是 10\\*10\\*10\\*10，而实际搜索过程中，页面出现的链接数远远不止10个。因此，可以形象的将搜索比喻成一棵数，搜索是从树根开始的，越向上，枝叶越 多，所以，如果深度设置比较大，而链接又很多，就会出现“搜不完”的假象。这时候，可以主动停止搜索过程，导出搜索结果。

是否有常用的Email地址比较集中的网站推荐呢？  
这类网站很多的，您可以针对自己的行业自己收集一些，

（1）没有行业针对性但是Email地址集中的网址：  
http://tieba.baidu.com/f?kw=email  
http://tieba.baidu.com/f?kw=msn  
（2）再举一个论坛的例子  
http://www.douban.com/group/topic/16987876/  
（3）以51job为例，这个网站上集中了很多招聘企业的信息，采集页面上的Email地址基本都是企业邮箱地址，可以搜索域名  
http://www.51job.com  
为了提高搜索精度，软件主界面上选择“只搜索当前域名下的网页”，在菜单–>>设置–>>参数设置中，选择“当前域名为顶级域名”，这样51job.com的子域名比如http://ac.51job.com也可以被搜索到。

有好多论坛是需要登录之后才能看到内容的，你们的Email搜索软件也可以搜索吗？  
不一定的，有一些论坛将登陆后的参数设置在session中，就不能够被调用搜索了。而对于直接在网址中表现的用户登录过程，则是可以的，具体的方式是：先用IE浏览器（注意：一定是微软的IE浏览器）登录论坛，登录后选择保存用户名和密码一天或一个月，总之就是要记住你的登录。然后在158邮件地址搜索专家中，选择“搜索互联网”–>>“根据网址搜索”，将您要搜索的IE地址栏出现的目标网址输入进去，点击“开始搜索”即可。

158邮件地址搜索专家可以针对地区和行业搜索吗？准确率多高？  
158邮件地址搜索专家基于网页关键词或者指定网址对网页进行扫描，提取其中的Email，即，只要有关键词存在，或者网址匹配，则认为Email地址符合搜索条件，而不是基于Email地址的注册信息，因此，谈论准确率意义不大；举个例子，一个北京人，完全可以写博客讲述上海的故事，而在文章中留下自己的Email。

Email搜索软件可以搜索QQ邮箱吗？  
可以搜索到QQ邮箱的。158邮件地址搜索专家是基于对网页的扫描，按照email地址的规则提取的，如果搜索目标中包含QQ邮箱就可以搜索出来。如果只是搜索QQ邮箱建议使用[158批量QQ号码采集助手](http://www.qunfa158.com/software-search-qq)。

158的Email搜索软件和市面上的百度邮箱搜索、Google邮箱搜索有什么区别？  
158邮件地址搜索专家涵盖了百度邮箱搜索和Google邮箱搜索的所有功能；除此之外，它还支持针对网页的Email搜索、可以搜索指定的文本文件，可以搜索本地硬盘具体目录中的Email地址，是一款功能强大的Email搜索工具。

158邮件地址搜索专家采集的Email地址都是真实存在的吗？  
作为一款邮件地址采集软件，158邮件地址搜索专家是逐个扫描网页，按照Email地址的格式来采集邮箱地址的，即符合格式的字符串，即认为是Email地址。例如test@test.com，test@test123.jpg等，都是符合邮件地址正则表达式的。  
为了提供邮件地址的采集效率，这个软件不会去逐个发邮件验证是否真实存在，你可以在邮件群发过程中做这些检查，[158邮件营销专家](http://www.qunfa158.com/software-email-qunfa)就提供了这个功能。

为什么我搜索出来的Email有很多是重复的？  
在Email的搜索过程中，158邮件地址搜索专家如实的记录搜索任务和搜索结果。例如，一个网站的几乎搜索页面都会出现他的客服Email，那么这个Email就会在不同的页面被搜索到，这也是为什么你看看搜索一些重复的Email出来的原因。  
为了提高搜索的效率，爱博Email搜索圣手没有在搜索过程中没有选择立即过滤掉这些重复的Email地址；在导出搜索结果的过程中，你可以选择过滤重复的Email地址。

我是做外贸的，应该怎么使用你们软件搜索？  
针对具体的行业，应该去搜索行业相关的网站，比如做外贸的，可以去搜索一些外贸论坛之类的网站，里面应该有大量的email地址可供抓取。  
英文网站如：  
http://www.rcci.bg/download/Ambient\\_catalog\\_2008/engleza/alfa\\_list.htm  
http://www.hotstats.eu/dir.html  
http://alltrades.com.au/index.php

158邮件地址搜索专家可以搜索国外的邮箱吗？  
158邮件地址搜索专家是基于指定的网址，逐级扫描网页并提取Email地址的，因此没有地区限制，只要你指定的国外的网站，一般搜索到的也是国外的Email地址。软件集成了英文Google的搜索引擎，同时你也可以使用其他国家和地区的搜索引擎，方法就是：通过网页搜索关键词，获取第一个页面的地址，然后在158邮件地址搜索专家中，选择搜索方式为“按网址搜索”，复制这个地址，开始搜索即可。因为“按关键词搜索”最终也是转换为“按网址搜索”的。

我们是搞招生的  你们的Email搜索软件能否安装年龄段搜索？  
158邮件地址搜索专家只是email地址扫描软件不可能那么精准的。你说的那么精准的数据库，需要自己长期积累的客户关系，或者通过电信、银行等这些部门取得可信的数据。

搜索在海外的国人，或者有留学意向的人，需要如何使用158的Email搜索软件？  
只要到这类社区网站去搜索就可以了，留学论坛的网址比如：  
http://bbs.gter.net/  
http://bbs.usastudy.com.cn/  
http://bbs.icnkr.com/  
以及其他同行网站，虽然搜索的速度不快，但毕竟属于行业针对的搜索。
`,$p=`---
title: 如何提高QQ号码采集的质量
date: 2014-08-07
author: 158软件
description: 如何提高QQ号码采集的质量 如何采集到高质量的QQ号码是QQ邮件群发出单率的关键。目前网络上有根据QQ群采集其中的QQ号码的方法，仔细研究不难发现，其是通过收集一些不需要身份验证的
---

# 如何提高QQ号码采集的质量

如何采集到高质量的QQ号码是QQ邮件群发出单率的关键。

目前网络上有根据QQ群采集其中的QQ号码的方法，仔细研究不难发现，其是通过收集一些不需要身份验证的QQ群，并提取其中的QQ号码。我们知道，QQ群是相对稳定的网络社区，一个正常的网络社区，怎么会不去做身份验证就加入进去然后发言呢？答案很简单，就是使用僵尸帐号骗取人气。所以这样的群中采集到号码也只是充数量而已，几乎所有的QQ号码都是常年不登陆的，试想，这样的QQ号码，你去给他做营销会有效果吗？无异于和死人说话。

摒弃上述这种方法，我们看看158批量QQ号码采集，其提取目标是腾讯曾经非常活跃的QQ达人社区，虽然现在该社区已经不更新了，但其已经汇总了腾讯用户中最活跃的QQ号码，无论是QQ邮件群发还是其他网络营销途径，效果都是事半功倍的。

**没有身份验证的群中百分之九十以上都是僵尸QQ，所以你能随便加入，随便发小广告，关键是没人看**，而你自己也在白费力气；而有质量的群都是有群主的，稍有言行不慎，就会被踢出群。因此加入这些有质量的群中提取其中的QQ号码并转为QQ邮箱根本不需要付费购买什么软件，有免费的在线工具，可以在这里使用，

[http://www.qunfa158.com/qunfa/304.html](http://www.qunfa158.com/qunfa/304.html "QQ群邮件群发")

给群成员逐个发送邮件和发送“群邮件”不是一回事，首先，群邮件在QQ邮箱的网页版本中是单独放置的，几乎没有人进去看；其次，群邮件也是严格审核的，群主，可以撤回和删除成员发送的群邮件。因此，给群成员逐个发送邮件的效果就显而易见了。

![QQ号码采集](/static/images/qunfa158-spider-523-0.png)
`,Hp=`---
title: 手机号码采集软件哪个好？
date: 2014-11-26
author: 158软件
description: 手机号码采集软件哪个好？ 通过扫描网页和本地文档搜索手机号码，实现手机号码采集，必须提高号码匹配的准确度，比较下来，158手机号码搜索专家在这方面的功能的确非常好。我 们都知道，中
---

# 手机号码采集软件哪个好？

通过扫描网页和本地文档搜索手机号码，实现**手机号码采集**，必须提高号码匹配的准确度，比较下来，158**手机号码搜索**专家在这方面的功能的确非常好。

我 们都知道，中国的手机号码是有规律可循的，比如131，132，138，139等开头，后面追加8位数字，合计是11个数字，网页上如果出现这样的字符 串，基本可以保证是一个手机号码了。但是需要注意一些特殊的字符串，比如GFRSDD139123456780454543.jpg，如果能够从这样的字 符串中提取出139开头的手机号码，那么这个采集软件肯定是有问题的。另一方面，再比如131 1234 1234，以及135-1234-1234，大家可以将这个网址放到正在使用的手机号码搜索采集软件中去测试一下，如果软件不能采集这样的手机号码，那么 这个软件也是有问题。

所以综合对比下来，158手机号码搜索专家在功能和性能方面的确优秀，值得选择，而更多关于这个采集工具的使用细节，大家可以持续关注158软件的官网以及最新的软件版本。

![手机号码采集](/static/images/qunfa158-spider-583-0.png)
`,jp=`---
title: 搜索网页上邮件地址必读
date: 2014-07-15
author: 158软件
description: 搜索网页上邮件地址必读 网络信息浩瀚无垠，要采集适合自己的信息，比如email地址，你需要先了解两个基本概念，即线程池和搜索深度。线程池就是同时 工作的数量。要根据你电脑的性能来设
---

# 搜索网页上邮件地址必读

网络信息浩瀚无垠，要采集适合自己的信息，比如email地址，你需要先了解两个基本概念，即线程池和搜索深度。

线程池就是同时 工作的数量。要根据你电脑的性能来设定的，一般设置1～10比较合适。高性能的电脑，可以设置为高于10，除非对多线程支持特别好的电脑，设置15及以上 的。如果你电脑是双核的CPU，建议设置为2的整数倍，如4、6、8、10等；同理，如果是三核的CPU，比如AMD的一些品牌，可以设置为3、6、9、 12；四核CPU可以设置4、8、12等。线程池设置太大，在提供处理速度的同时，也会造成任务队列积累的待处理任务越来越多，所以如果这时候电脑的配置 不高，待处理的任务不能及时完成，会造成系统暂时堵塞。

深度这个概念如果你不是太了解。搜索深度为1，代表只搜索当前的一个页面；搜索深度为2，则搜索当前页面和在这个页面里能够找到的链接对应的页面；依次类推。一般情况下，设置搜索深度3比较合适，设置为5，则搜索过程会漫长很多，就好比一棵树，越向上，枝叶越多。

这是批量搜索网页上邮件地址必读的两个参数，在使用158邮件地址搜索专家这个软件的过程中，了解并灵活运用这两个基本参数，是下一步使用**邮件群发软件**的前提和基础，将采集到的数据做为目标收件人email展开你的网络营销之旅吧！

![搜索Email地址](/static/images/qunfa158-spider-589-0.png)
`,zp=`---
title: 如何采集图片上的手机号码
date: 2014-07-28
author: 158软件
description: 如何采集图片上的手机号码 好多网站出于信息保护的考虑，避免自己的客户信息给竞争对手抓取，经常将email地址和手机号码字段在显示的时候做特殊处理，常用的方法不外乎JavaScrip
---

# 如何采集图片上的手机号码

好多网站出于信息保护的考虑，避免自己的客户信息给竞争对手抓取，经常将email地址和手机号码字段在显示的时候做特殊处理，常用的方法不外乎JavaScript加密和转成图片两种方式。对于前一种方式，定制版本的158企业名录搜索软件和邮件地址搜索软件已经实现了无缝抓取，而对于图片格式的识别，最新的定制版本也集成了图片转文字的引擎，识别率相当高，因此，这是继两个搜索采集软件对word、Excel和powerpoint之后又一重要功能集成。

与其他功能集成不同，因为一个网页上图片可能会很多，如果我们逐个识别转换，一来效率会极大降低，二来由于图片较大造成系统异常的可能性也也增加，因此，对于这类网页上手机号码的抓取，是实现不了通用版本的。需要这类抓取功能可直接联系158软件的在线销售顾问。

[![158企业名录搜索专家](/static/images/qunfa158-spider-608-0.png "158企业名录搜索专家")](http://www.qunfa158.com/tag/158%E6%89%8B%E6%9C%BA%E5%8F%B7%E7%A0%81%E6%90%9C%E7%B4%A2%E4%B8%93%E5%AE%B6)
`,Up=`---
title: 扫描word文档提取email地址
date: 2014-10-25
author: 158软件
description: 扫描word文档提取email地址 word文档是我们经常使用的文档格式，最初是由微软定义并开发的.doc格式是目前word文档的主流格式，WPS以及open office等软件也
---

# 扫描word文档提取email地址

word文档是我们经常使用的文档格式，最初是由微软定义并开发的.doc格式是目前word文档的主流格式，WPS以及open office等软件也已经相继支持doc格式的word文档。由于word文档是一种特殊的二进制格式，而不像TXT，HTML等是文本格式，因此，需要从这些文档中提取email地址一直是让人头疼的事情。这里推荐的是158邮件地址搜索专家，凭借这个让用户眼前一亮的功能，让其在同类软件中脱颖而出。

[![158邮件地址搜索专家](/static/images/qunfa158-spider-611-0.png "158邮件地址搜索专家")](http://www.qunfa158.com/wp-content/themes/qunfa158v2/pictures/upload/201407/1405476175.png)

158邮件地址搜索专家对word文档的搜索，支持单文件搜索和目录搜索两种基本方式。word经过多年的版本变更，其二进制格式也有多个版本，特别是2003版本之后，基于XML格式的二进制word文档让解析更加复杂。158软件基于Microsoft office的多版本组件API接口，在扫描和调用周期上做了反复的更新和优化，最终使其达到功能和性能的最优，为下一步邮件群发打下了坚实基础。

[![158邮件地址搜索专家](/static/images/qunfa158-spider-611-1.png)](http://www.qunfa158.com/tag/158%E9%82%AE%E4%BB%B6%E5%9C%B0%E5%9D%80%E6%90%9C%E7%B4%A2%E4%B8%93%E5%AE%B6)

做为邮件营销必备的两个组合：158邮件营销专家和158邮件地址搜索专家，邮件群发软件和邮件地址搜索软件让复杂的文档格式的采集和信息提取，群发，转化变得更加简单！
`,Vp=`---
title: 图片上的手机号码和Email地址采集解决方案
date: 2014-12-02
author: 158软件
description: 图片上的手机号码和Email地址采集解决方案 将手机号码和Email地址做成图片显示给访问者，给复制粘贴造成难度，可以有效提高网站的访问量，但是对于数据的收集整理则带来诸多不便。在
---

# 图片上的手机号码和Email地址采集解决方案

将手机号码和Email地址做成图片显示给访问者，给复制粘贴造成难度，可以有效提高网站的访问量，但是对于数据的收集整理则带来诸多不便。在邮件群发、电话营销过程中，我们还是需要将这些资料整理成数据，以方便在[邮件群发软件](http://www.qunfa158.com/tag/%e9%82%ae%e4%bb%b6%e7%be%a4%e5%8f%91%e8%bd%af%e4%bb%b6 "邮件群发软件")中批量导入，在电话呼叫系统中定时拨号。

目前将这类数据转成图片的网站有一些，小的网站就不说了，访问量高网站的如58同城、赶集网等，都是邮件群发营销和电话短信营销青睐的目标。对于这类数据的采集，不可能采用抓取网页，然后按照正则表达式的规则匹配，因为一个页面上会有很多图片，如果软件不做定制，是无法确定哪一张图片上显示的信息是你想要的，而如果将每张图片都转换成文字再做判断，这也是不现实的，至少目前的电脑是受不了这么频繁的转换的。

我们以58同城的企业名录为例来叙述解决方案的基本处理过程。

1、首先通过 http://qy.58.com/sh/pn2/ 主页查找企业目录；

2、打开具体的页面如：  
http://qy.58.com/213346056198/?PGTID=14140325831750.05128938476721712&ClickID=25  
读取公司名称，公司资质，公司行业，公司性质，公司规模，联系人，联系电话，邮箱，企业网址，公司地址。  
其中联系电话可能是手机号码或者固定电话；联系电话和邮箱都是混淆加密显示的图片。

3、使用正则表达式采集以上对应的字段。

4、对上海延誉自主开发的图文识别模块有针对性的进行训练至少50个案例图片，以提高图片转电话和邮箱的精确度。

5、将采集到的电话和邮箱转成对应的文字，并且每条记录保存一行。

6、在采集结果的Excel中，人工逐行校对。

从以上的处理过程不难看出，要最大限度的准确提取这类网页上的手机号码、Email地址等信息，必须有人工参与的过程，这也是为什么这方面可以出解决方案，而不出具体产品的原因所在，更具体的解决方案可登陆158软件官网www.qunfa158.com上查询。

欢迎致电咨询软件定制开发事宜：

![软件定制开发](/static/images/qunfa158-spider-741-0.png)
`,Gp=`---
title: 关于我们
description: 上海延誉信息技术有限公司 —— 从单机群发工具到 AI 邮件营销工作台的演进，以及联系方式与交通指引。
---

# 158智能营销云

**158 软件**由延誉宝运营，是一家长期专注邮件营销与联系人数据处理的技术团队。我们见证了邮件营销从"单机工具"到"AI 工作台"的演进，并把自己的产品同步升级。

## 公司信息

- 主体：上海延誉信息技术有限公司
- 地址：上海市长宁区协和路 787 号 D 北 208 室
- 邮编：200335
- 站点：[延誉宝](https://www.abot.cn)

## 发展历程

- **早期**：以单机邮件群发、数据采集工具（邮件营销专家、地址搜索、号码采集等）服务广大中小企业。
- **现在**：升级为 **AI 邮件营销工作台**——你的邮件发送仍由你自己的本地客户端（自有域名、独立 IP、SMTP/ESMTP）完成，AI 层提供内容、受众、触达、策略四类智能能力。
- **承诺**：发送能力始终留在客户端，云端 AI 只处理脱敏特征与聚合效果，数据合规可控。

## 联系我们

用手机微信扫描以下二维码，您可以：

<div class="grid grid-cols-1 gap-6 my-6 sm:grid-cols-3">
  <div class="flex flex-col items-center rounded-xl border border-gray-200 p-4">
    <img src="/static/images/wechat-qr.jpg" alt="微信二维码" class="h-40 w-40 object-contain" />
    <p class="mt-3 text-sm font-medium text-ink">微信二维码</p>
    <p class="mt-1 text-center text-xs text-ink-soft">选择"联系我们"&raquo;"在线客服"，直接通过微信联系我们</p>
  </div>
  <div class="flex flex-col items-center rounded-xl border border-gray-200 p-4">
    <img src="/static/images/douyin-qr.jpg" alt="抖音二维码" class="h-40 w-40 object-contain" />
    <p class="mt-3 text-sm font-medium text-ink">抖音二维码</p>
    <p class="mt-1 text-center text-xs text-ink-soft">用抖音 APP 扫码，通过私信联系我们</p>
  </div>
  <div class="flex flex-col items-center rounded-xl border border-gray-200 p-4">
    <img src="/static/images/bilibili-qr.jpg" alt="B站二维码" class="h-40 w-40 object-contain" />
    <p class="mt-3 text-sm font-medium text-ink">B站二维码</p>
    <p class="mt-1 text-center text-xs text-ink-soft">用 B站 APP 扫码，通过私信联系我们</p>
  </div>
</div>

1. 为了提升沟通效率，您也可以直接通过**抖音 APP 扫码**，或者 **B站 APP 扫码**，通过私信联系我们；

<img src="/static/images/202401041732514634.jpg" alt="交通指引-地图" style="max-width: 500px;" />

2. 选择"联系我们"&raquo;"在线客服"，直接通过微信联系我们。

<img src="/static/images/thumb_5c95d00e80ae2.jpg" alt="交通指引-地图" style="max-width: 200px;" />

您也可以直接在线提交问题：[点击这里提交您的问题](http://cms.weiduke.com/index.php/Wap/Selfform/index/token/gwcuuk1411034699/id/7.shtml)

但是我们更建议您登陆到商户控制台之后提交问题：[点击这里登陆后提交问题，有回复第一时间有消息通知哦！](http://shang.abot.cn)

### 交通指引

1. 地铁 2 号线淞虹路站 5 号口出。
2. 高铁建议从虹桥火车站换乘地铁 2 号线约 15 分钟到。
3. 飞机到浦东或虹桥机场都可以，换乘地铁 2 号线。

<img src="/static/images/202412261043037970.jpg" alt="交通指引-地图" style="max-width: 100%;" />
`,Wp=`---
title: 产品能力
description: 158 AI 邮件营销工作台的四层能力——内容 AI、受众 AI、触达 AI、策略 AI，发送始终留在你的本地客户端。
---
`,Kp=`---
title: 客户案例
description: 158 AI 邮件营销工作台的脱敏客户效果案例，仅展示聚合与去标识化指标。
---
`,Xp=`---
title: 合规说明
description: 158 软件的数据合规立场与法律提示，含退订机制与 AI 生成内容标注要求。
---

# 合规说明

158 软件坚持"发送在客户端、能力在云端、数据合规可控"的边界。以下为我们的合规立场与法律提示。

## 数据来源与处理

- 营销联系人数据须来自**同意、公开合法来源**，并做**去标识化**处理。
- 原始名单 / 邮箱不离开你的本地客户端；云端 AI 仅交换脱敏特征与聚合统计。
- 禁止未经授权批量获取、提供公民个人信息。

## 退订机制（opt-out）

所有营销邮件必须提供清晰、免费的**退订 / 取消订阅**入口，并在收到退订请求后及时处理。

## 内容真实性

- 不得承诺"保证进收件箱""绕过垃圾邮件过滤"等违规表述。
- 到达率优化只走"认证（SPF/DKIM/DMARC）+ 内容相关"的正道。

## AI 生成内容标注

由 AI 生成的文案 / 策略建议需经人工审核，并在必要时标注"AI 生成"。

## 法律提示（陈述性，非规避指引）

- 境内处理个人信息须遵守《中华人民共和国个人信息保护法》。
- 未经授权批量获取 / 提供公民个人信息，可能触及《刑法》第二百五十三条之一。
- 营销邮件须遵守 CAN-SPAM、GDPR 等关于退订与明示身份的要求。

> 本页为合规立场陈述，不构成法律意见；具体合规方案请结合自身业务咨询专业法律人士。
`,Zp=`---
title: 老用户专区
description: 158 软件老用户专区——旧版软件下载、授权查询、版本迁移指引与历史版本说明。
---
`,Jp=`---
title: 解决方案
description: 按行业与场景拆分的 158 AI 邮件营销解决方案——电商复购、B2B 线索、活动邀约、会员生命周期。
---
`,cs={};function Yp(e){let t=cs[e];if(t)return t;t=cs[e]=[];for(let n=0;n<128;n++){const u=String.fromCharCode(n);t.push(u)}for(let n=0;n<e.length;n++){const u=e.charCodeAt(n);t[u]="%"+("0"+u.toString(16).toUpperCase()).slice(-2)}return t}function qn(e,t){typeof t!="string"&&(t=qn.defaultChars);const n=Yp(t);return e.replace(/(%[a-f0-9]{2})+/gi,function(u){let i="";for(let r=0,o=u.length;r<o;r+=3){const s=parseInt(u.slice(r+1,r+3),16);if(s<128){i+=n[s];continue}if((s&224)===192&&r+3<o){const c=parseInt(u.slice(r+4,r+6),16);if((c&192)===128){const a=s<<6&1984|c&63;a<128?i+="��":i+=String.fromCharCode(a),r+=3;continue}}if((s&240)===224&&r+6<o){const c=parseInt(u.slice(r+4,r+6),16),a=parseInt(u.slice(r+7,r+9),16);if((c&192)===128&&(a&192)===128){const l=s<<12&61440|c<<6&4032|a&63;l<2048||l>=55296&&l<=57343?i+="���":i+=String.fromCharCode(l),r+=6;continue}}if((s&248)===240&&r+9<o){const c=parseInt(u.slice(r+4,r+6),16),a=parseInt(u.slice(r+7,r+9),16),l=parseInt(u.slice(r+10,r+12),16);if((c&192)===128&&(a&192)===128&&(l&192)===128){let f=s<<18&1835008|c<<12&258048|a<<6&4032|l&63;f<65536||f>1114111?i+="����":(f-=65536,i+=String.fromCharCode(55296+(f>>10),56320+(f&1023))),r+=9;continue}}i+="�"}return i})}qn.defaultChars=";/?:@&=+$,#";qn.componentChars="";const as={};function eh(e){let t=as[e];if(t)return t;t=as[e]=[];for(let n=0;n<128;n++){const u=String.fromCharCode(n);/^[0-9a-z]$/i.test(u)?t.push(u):t.push("%"+("0"+n.toString(16).toUpperCase()).slice(-2))}for(let n=0;n<e.length;n++)t[e.charCodeAt(n)]=e[n];return t}function bu(e,t,n){typeof t!="string"&&(n=t,t=bu.defaultChars),typeof n>"u"&&(n=!0);const u=eh(t);let i="";for(let r=0,o=e.length;r<o;r++){const s=e.charCodeAt(r);if(n&&s===37&&r+2<o&&/^[0-9a-f]{2}$/i.test(e.slice(r+1,r+3))){i+=e.slice(r,r+3),r+=2;continue}if(s<128){i+=u[s];continue}if(s>=55296&&s<=57343){if(s>=55296&&s<=56319&&r+1<o){const c=e.charCodeAt(r+1);if(c>=56320&&c<=57343){i+=encodeURIComponent(e[r]+e[r+1]),r++;continue}}i+="%EF%BF%BD";continue}i+=encodeURIComponent(e[r])}return i}bu.defaultChars=";/?:@&=+$,-_.!~*'()#";bu.componentChars="-_.!~*'()";function $r(e){let t="";return t+=e.protocol||"",t+=e.slashes?"//":"",t+=e.auth?e.auth+"@":"",e.hostname&&e.hostname.indexOf(":")!==-1?t+="["+e.hostname+"]":t+=e.hostname||"",t+=e.port?":"+e.port:"",t+=e.pathname||"",t+=e.search||"",t+=e.hash||"",t}function Ju(){this.protocol=null,this.slashes=null,this.auth=null,this.port=null,this.hostname=null,this.hash=null,this.search=null,this.pathname=null}const th=/^([a-z0-9.+-]+:)/i,nh=/:[0-9]*$/,uh=/^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,ih=["<",">",'"',"`"," ","\r",`
`,"	"],rh=["{","}","|","\\","^","`"].concat(ih),oh=["'"].concat(rh),ls=["%","/","?",";","#"].concat(oh),fs=["/","?","#"],sh=255,ds=/^[+a-z0-9A-Z_-]{0,63}$/,ch=/^([+a-z0-9A-Z_-]{0,63})(.*)$/,ps={javascript:!0,"javascript:":!0},hs={http:!0,https:!0,ftp:!0,gopher:!0,file:!0,"http:":!0,"https:":!0,"ftp:":!0,"gopher:":!0,"file:":!0};function Hr(e,t){if(e&&e instanceof Ju)return e;const n=new Ju;return n.parse(e,t),n}Ju.prototype.parse=function(e,t){let n,u,i,r=e;if(r=r.trim(),!t&&e.split("#").length===1){const a=uh.exec(r);if(a)return this.pathname=a[1],a[2]&&(this.search=a[2]),this}let o=th.exec(r);if(o&&(o=o[0],n=o.toLowerCase(),this.protocol=o,r=r.substr(o.length)),(t||o||r.match(/^\/\/[^@\/]+@[^@\/]+/))&&(i=r.substr(0,2)==="//",i&&!(o&&ps[o])&&(r=r.substr(2),this.slashes=!0)),!ps[o]&&(i||o&&!hs[o])){let a=-1;for(let m=0;m<fs.length;m++)u=r.indexOf(fs[m]),u!==-1&&(a===-1||u<a)&&(a=u);let l,f;a===-1?f=r.lastIndexOf("@"):f=r.lastIndexOf("@",a),f!==-1&&(l=r.slice(0,f),r=r.slice(f+1),this.auth=l),a=-1;for(let m=0;m<ls.length;m++)u=r.indexOf(ls[m]),u!==-1&&(a===-1||u<a)&&(a=u);a===-1&&(a=r.length),r[a-1]===":"&&a--;const d=r.slice(0,a);r=r.slice(a),this.parseHost(d),this.hostname=this.hostname||"";const p=this.hostname[0]==="["&&this.hostname[this.hostname.length-1]==="]";if(!p){const m=this.hostname.split(/\./);for(let w=0,A=m.length;w<A;w++){const S=m[w];if(S&&!S.match(ds)){let E="";for(let g=0,_=S.length;g<_;g++)S.charCodeAt(g)>127?E+="x":E+=S[g];if(!E.match(ds)){const g=m.slice(0,w),_=m.slice(w+1),v=S.match(ch);v&&(g.push(v[1]),_.unshift(v[2])),_.length&&(r=_.join(".")+r),this.hostname=g.join(".");break}}}}this.hostname.length>sh&&(this.hostname=""),p&&(this.hostname=this.hostname.substr(1,this.hostname.length-2))}const s=r.indexOf("#");s!==-1&&(this.hash=r.substr(s),r=r.slice(0,s));const c=r.indexOf("?");return c!==-1&&(this.search=r.substr(c),r=r.slice(0,c)),r&&(this.pathname=r),hs[n]&&this.hostname&&!this.pathname&&(this.pathname=""),this};Ju.prototype.parseHost=function(e){let t=nh.exec(e);t&&(t=t[0],t!==":"&&(this.port=t.substr(1)),e=e.substr(0,e.length-t.length)),e&&(this.hostname=e)};const ah=Object.freeze(Object.defineProperty({__proto__:null,decode:qn,encode:bu,format:$r,parse:Hr},Symbol.toStringTag,{value:"Module"})),xa=/[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,ya=/[\0-\x1F\x7F-\x9F]/,lh=/[\xAD\u0600-\u0605\u061C\u06DD\u070F\u0890\u0891\u08E2\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804[\uDCBD\uDCCD]|\uD80D[\uDC30-\uDC3F]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]/,jr=/[!-#%-\*,-\/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061D-\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1B7D\u1B7E\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52-\u2E5D\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDEAD\uDF55-\uDF59\uDF86-\uDF89]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5A\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDEB9\uDF3C-\uDF3E]|\uD806[\uDC3B\uDD44-\uDD46\uDDE2\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2\uDF00-\uDF09]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8\uDF43-\uDF4F\uDFFF]|\uD809[\uDC70-\uDC74]|\uD80B[\uDFF1\uDFF2]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A\uDFE2]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]/,wa=/[\$\+<->\^`\|~\xA2-\xA6\xA8\xA9\xAC\xAE-\xB1\xB4\xB8\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0384\u0385\u03F6\u0482\u058D-\u058F\u0606-\u0608\u060B\u060E\u060F\u06DE\u06E9\u06FD\u06FE\u07F6\u07FE\u07FF\u0888\u09F2\u09F3\u09FA\u09FB\u0AF1\u0B70\u0BF3-\u0BFA\u0C7F\u0D4F\u0D79\u0E3F\u0F01-\u0F03\u0F13\u0F15-\u0F17\u0F1A-\u0F1F\u0F34\u0F36\u0F38\u0FBE-\u0FC5\u0FC7-\u0FCC\u0FCE\u0FCF\u0FD5-\u0FD8\u109E\u109F\u1390-\u1399\u166D\u17DB\u1940\u19DE-\u19FF\u1B61-\u1B6A\u1B74-\u1B7C\u1FBD\u1FBF-\u1FC1\u1FCD-\u1FCF\u1FDD-\u1FDF\u1FED-\u1FEF\u1FFD\u1FFE\u2044\u2052\u207A-\u207C\u208A-\u208C\u20A0-\u20C0\u2100\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F\u218A\u218B\u2190-\u2307\u230C-\u2328\u232B-\u2426\u2440-\u244A\u249C-\u24E9\u2500-\u2767\u2794-\u27C4\u27C7-\u27E5\u27F0-\u2982\u2999-\u29D7\u29DC-\u29FB\u29FE-\u2B73\u2B76-\u2B95\u2B97-\u2BFF\u2CE5-\u2CEA\u2E50\u2E51\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u2FF0-\u2FFF\u3004\u3012\u3013\u3020\u3036\u3037\u303E\u303F\u309B\u309C\u3190\u3191\u3196-\u319F\u31C0-\u31E3\u31EF\u3200-\u321E\u322A-\u3247\u3250\u3260-\u327F\u328A-\u32B0\u32C0-\u33FF\u4DC0-\u4DFF\uA490-\uA4C6\uA700-\uA716\uA720\uA721\uA789\uA78A\uA828-\uA82B\uA836-\uA839\uAA77-\uAA79\uAB5B\uAB6A\uAB6B\uFB29\uFBB2-\uFBC2\uFD40-\uFD4F\uFDCF\uFDFC-\uFDFF\uFE62\uFE64-\uFE66\uFE69\uFF04\uFF0B\uFF1C-\uFF1E\uFF3E\uFF40\uFF5C\uFF5E\uFFE0-\uFFE6\uFFE8-\uFFEE\uFFFC\uFFFD]|\uD800[\uDD37-\uDD3F\uDD79-\uDD89\uDD8C-\uDD8E\uDD90-\uDD9C\uDDA0\uDDD0-\uDDFC]|\uD802[\uDC77\uDC78\uDEC8]|\uD805\uDF3F|\uD807[\uDFD5-\uDFF1]|\uD81A[\uDF3C-\uDF3F\uDF45]|\uD82F\uDC9C|\uD833[\uDF50-\uDFC3]|\uD834[\uDC00-\uDCF5\uDD00-\uDD26\uDD29-\uDD64\uDD6A-\uDD6C\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDDEA\uDE00-\uDE41\uDE45\uDF00-\uDF56]|\uD835[\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85\uDE86]|\uD838[\uDD4F\uDEFF]|\uD83B[\uDCAC\uDCB0\uDD2E\uDEF0\uDEF1]|\uD83C[\uDC00-\uDC2B\uDC30-\uDC93\uDCA0-\uDCAE\uDCB1-\uDCBF\uDCC1-\uDCCF\uDCD1-\uDCF5\uDD0D-\uDDAD\uDDE6-\uDE02\uDE10-\uDE3B\uDE40-\uDE48\uDE50\uDE51\uDE60-\uDE65\uDF00-\uDFFF]|\uD83D[\uDC00-\uDED7\uDEDC-\uDEEC\uDEF0-\uDEFC\uDF00-\uDF76\uDF7B-\uDFD9\uDFE0-\uDFEB\uDFF0]|\uD83E[\uDC00-\uDC0B\uDC10-\uDC47\uDC50-\uDC59\uDC60-\uDC87\uDC90-\uDCAD\uDCB0\uDCB1\uDD00-\uDE53\uDE60-\uDE6D\uDE70-\uDE7C\uDE80-\uDE88\uDE90-\uDEBD\uDEBF-\uDEC5\uDECE-\uDEDB\uDEE0-\uDEE8\uDEF0-\uDEF8\uDF00-\uDF92\uDF94-\uDFCA]/,Ea=/[ \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/,fh=Object.freeze(Object.defineProperty({__proto__:null,Any:xa,Cc:ya,Cf:lh,P:jr,S:wa,Z:Ea},Symbol.toStringTag,{value:"Module"})),dh=new Uint16Array('ᵁ<Õıʊҝջאٵ۞ޢߖࠏ੊ઑඡ๭༉༦჊ረዡᐕᒝᓃᓟᔥ\0\0\0\0\0\0ᕫᛍᦍᰒᷝ὾⁠↰⊍⏀⏻⑂⠤⤒ⴈ⹈⿎〖㊺㘹㞬㣾㨨㩱㫠㬮ࠀEMabcfglmnoprstu\\bfms¦³¹ÈÏlig耻Æ䃆P耻&䀦cute耻Á䃁reve;䄂Āiyx}rc耻Â䃂;䐐r;쀀𝔄rave耻À䃀pha;䎑acr;䄀d;橓Āgp¡on;䄄f;쀀𝔸plyFunction;恡ing耻Å䃅Ācs¾Ãr;쀀𝒜ign;扔ilde耻Ã䃃ml耻Ä䃄ЀaceforsuåûþėĜĢħĪĀcrêòkslash;或Ŷöø;櫧ed;挆y;䐑ƀcrtąċĔause;戵noullis;愬a;䎒r;쀀𝔅pf;쀀𝔹eve;䋘còēmpeq;扎܀HOacdefhilorsuōőŖƀƞƢƵƷƺǜȕɳɸɾcy;䐧PY耻©䂩ƀcpyŝŢźute;䄆Ā;iŧŨ拒talDifferentialD;慅leys;愭ȀaeioƉƎƔƘron;䄌dil耻Ç䃇rc;䄈nint;戰ot;䄊ĀdnƧƭilla;䂸terDot;䂷òſi;䎧rcleȀDMPTǇǋǑǖot;抙inus;抖lus;投imes;抗oĀcsǢǸkwiseContourIntegral;戲eCurlyĀDQȃȏoubleQuote;思uote;怙ȀlnpuȞȨɇɕonĀ;eȥȦ户;橴ƀgitȯȶȺruent;扡nt;戯ourIntegral;戮ĀfrɌɎ;愂oduct;成nterClockwiseContourIntegral;戳oss;樯cr;쀀𝒞pĀ;Cʄʅ拓ap;才րDJSZacefiosʠʬʰʴʸˋ˗ˡ˦̳ҍĀ;oŹʥtrahd;椑cy;䐂cy;䐅cy;䐏ƀgrsʿ˄ˇger;怡r;憡hv;櫤Āayː˕ron;䄎;䐔lĀ;t˝˞戇a;䎔r;쀀𝔇Āaf˫̧Ācm˰̢riticalȀADGT̖̜̀̆cute;䂴oŴ̋̍;䋙bleAcute;䋝rave;䁠ilde;䋜ond;拄ferentialD;慆Ѱ̽\0\0\0͔͂\0Ѕf;쀀𝔻ƀ;DE͈͉͍䂨ot;惜qual;扐blèCDLRUVͣͲ΂ϏϢϸontourIntegraìȹoɴ͹\0\0ͻ»͉nArrow;懓Āeo·ΤftƀARTΐΖΡrrow;懐ightArrow;懔eåˊngĀLRΫτeftĀARγιrrow;柸ightArrow;柺ightArrow;柹ightĀATϘϞrrow;懒ee;抨pɁϩ\0\0ϯrrow;懑ownArrow;懕erticalBar;戥ǹABLRTaВЪаўѿͼrrowƀ;BUНОТ憓ar;椓pArrow;懵reve;䌑eft˒к\0ц\0ѐightVector;楐eeVector;楞ectorĀ;Bљњ憽ar;楖ightǔѧ\0ѱeeVector;楟ectorĀ;BѺѻ懁ar;楗eeĀ;A҆҇护rrow;憧ĀctҒҗr;쀀𝒟rok;䄐ࠀNTacdfglmopqstuxҽӀӄӋӞӢӧӮӵԡԯԶՒ՝ՠեG;䅊H耻Ð䃐cute耻É䃉ƀaiyӒӗӜron;䄚rc耻Ê䃊;䐭ot;䄖r;쀀𝔈rave耻È䃈ement;戈ĀapӺӾcr;䄒tyɓԆ\0\0ԒmallSquare;旻erySmallSquare;斫ĀgpԦԪon;䄘f;쀀𝔼silon;䎕uĀaiԼՉlĀ;TՂՃ橵ilde;扂librium;懌Āci՗՚r;愰m;橳a;䎗ml耻Ë䃋Āipժկsts;戃onentialE;慇ʀcfiosօֈ֍ֲ׌y;䐤r;쀀𝔉lledɓ֗\0\0֣mallSquare;旼erySmallSquare;斪Ͱֺ\0ֿ\0\0ׄf;쀀𝔽All;戀riertrf;愱cò׋؀JTabcdfgorstר׬ׯ׺؀ؒؖ؛؝أ٬ٲcy;䐃耻>䀾mmaĀ;d׷׸䎓;䏜reve;䄞ƀeiy؇،ؐdil;䄢rc;䄜;䐓ot;䄠r;쀀𝔊;拙pf;쀀𝔾eater̀EFGLSTصلَٖٛ٦qualĀ;Lؾؿ扥ess;招ullEqual;执reater;檢ess;扷lantEqual;橾ilde;扳cr;쀀𝒢;扫ЀAacfiosuڅڋږڛڞڪھۊRDcy;䐪Āctڐڔek;䋇;䁞irc;䄤r;愌lbertSpace;愋ǰگ\0ڲf;愍izontalLine;攀Āctۃۅòکrok;䄦mpńېۘownHumðįqual;扏܀EJOacdfgmnostuۺ۾܃܇܎ܚܞܡܨ݄ݸދޏޕcy;䐕lig;䄲cy;䐁cute耻Í䃍Āiyܓܘrc耻Î䃎;䐘ot;䄰r;愑rave耻Ì䃌ƀ;apܠܯܿĀcgܴܷr;䄪inaryI;慈lieóϝǴ݉\0ݢĀ;eݍݎ戬Āgrݓݘral;戫section;拂isibleĀCTݬݲomma;恣imes;恢ƀgptݿރވon;䄮f;쀀𝕀a;䎙cr;愐ilde;䄨ǫޚ\0ޞcy;䐆l耻Ï䃏ʀcfosuެ޷޼߂ߐĀiyޱ޵rc;䄴;䐙r;쀀𝔍pf;쀀𝕁ǣ߇\0ߌr;쀀𝒥rcy;䐈kcy;䐄΀HJacfosߤߨ߽߬߱ࠂࠈcy;䐥cy;䐌ppa;䎚Āey߶߻dil;䄶;䐚r;쀀𝔎pf;쀀𝕂cr;쀀𝒦րJTaceflmostࠥࠩࠬࡐࡣ঳সে্਷ੇcy;䐉耻<䀼ʀcmnpr࠷࠼ࡁࡄࡍute;䄹bda;䎛g;柪lacetrf;愒r;憞ƀaeyࡗ࡜ࡡron;䄽dil;䄻;䐛Āfsࡨ॰tԀACDFRTUVarࡾࢩࢱࣦ࣠ࣼयज़ΐ४Ānrࢃ࢏gleBracket;柨rowƀ;BR࢙࢚࢞憐ar;懤ightArrow;懆eiling;挈oǵࢷ\0ࣃbleBracket;柦nǔࣈ\0࣒eeVector;楡ectorĀ;Bࣛࣜ懃ar;楙loor;挊ightĀAV࣯ࣵrrow;憔ector;楎Āerँगeƀ;AVउऊऐ抣rrow;憤ector;楚iangleƀ;BEतथऩ抲ar;槏qual;抴pƀDTVषूौownVector;楑eeVector;楠ectorĀ;Bॖॗ憿ar;楘ectorĀ;B॥०憼ar;楒ightáΜs̀EFGLSTॾঋকঝঢভqualGreater;拚ullEqual;扦reater;扶ess;檡lantEqual;橽ilde;扲r;쀀𝔏Ā;eঽা拘ftarrow;懚idot;䄿ƀnpw৔ਖਛgȀLRlr৞৷ਂਐeftĀAR০৬rrow;柵ightArrow;柷ightArrow;柶eftĀarγਊightáοightáϊf;쀀𝕃erĀLRਢਬeftArrow;憙ightArrow;憘ƀchtਾੀੂòࡌ;憰rok;䅁;扪Ѐacefiosuਗ਼੝੠੷੼અઋ઎p;椅y;䐜Ādl੥੯iumSpace;恟lintrf;愳r;쀀𝔐nusPlus;戓pf;쀀𝕄cò੶;䎜ҀJacefostuણધભીଔଙඑ඗ඞcy;䐊cute;䅃ƀaey઴હાron;䅇dil;䅅;䐝ƀgswે૰଎ativeƀMTV૓૟૨ediumSpace;怋hiĀcn૦૘ë૙eryThiî૙tedĀGL૸ଆreaterGreateòٳessLesóੈLine;䀊r;쀀𝔑ȀBnptଢନଷ଺reak;恠BreakingSpace;䂠f;愕ڀ;CDEGHLNPRSTV୕ୖ୪୼஡௫ఄ౞಄ದ೘ൡඅ櫬Āou୛୤ngruent;扢pCap;扭oubleVerticalBar;戦ƀlqxஃஊ஛ement;戉ualĀ;Tஒஓ扠ilde;쀀≂̸ists;戄reater΀;EFGLSTஶஷ஽௉௓௘௥扯qual;扱ullEqual;쀀≧̸reater;쀀≫̸ess;批lantEqual;쀀⩾̸ilde;扵umpń௲௽ownHump;쀀≎̸qual;쀀≏̸eĀfsఊధtTriangleƀ;BEచఛడ拪ar;쀀⧏̸qual;括s̀;EGLSTవశ఼ౄోౘ扮qual;扰reater;扸ess;쀀≪̸lantEqual;쀀⩽̸ilde;扴estedĀGL౨౹reaterGreater;쀀⪢̸essLess;쀀⪡̸recedesƀ;ESಒಓಛ技qual;쀀⪯̸lantEqual;拠ĀeiಫಹverseElement;戌ghtTriangleƀ;BEೋೌ೒拫ar;쀀⧐̸qual;拭ĀquೝഌuareSuĀbp೨೹setĀ;E೰ೳ쀀⊏̸qual;拢ersetĀ;Eഃആ쀀⊐̸qual;拣ƀbcpഓതൎsetĀ;Eഛഞ쀀⊂⃒qual;抈ceedsȀ;ESTലള഻െ抁qual;쀀⪰̸lantEqual;拡ilde;쀀≿̸ersetĀ;E൘൛쀀⊃⃒qual;抉ildeȀ;EFT൮൯൵ൿ扁qual;扄ullEqual;扇ilde;扉erticalBar;戤cr;쀀𝒩ilde耻Ñ䃑;䎝܀Eacdfgmoprstuvලෂ෉෕ෛ෠෧෼ขภยา฿ไlig;䅒cute耻Ó䃓Āiy෎ීrc耻Ô䃔;䐞blac;䅐r;쀀𝔒rave耻Ò䃒ƀaei෮ෲ෶cr;䅌ga;䎩cron;䎟pf;쀀𝕆enCurlyĀDQฎบoubleQuote;怜uote;怘;橔Āclวฬr;쀀𝒪ash耻Ø䃘iŬื฼de耻Õ䃕es;樷ml耻Ö䃖erĀBP๋๠Āar๐๓r;怾acĀek๚๜;揞et;掴arenthesis;揜Ҁacfhilors๿ງຊຏຒດຝະ໼rtialD;戂y;䐟r;쀀𝔓i;䎦;䎠usMinus;䂱Āipຢອncareplanåڝf;愙Ȁ;eio຺ູ໠໤檻cedesȀ;EST່້໏໚扺qual;檯lantEqual;扼ilde;找me;怳Ādp໩໮uct;戏ortionĀ;aȥ໹l;戝Āci༁༆r;쀀𝒫;䎨ȀUfos༑༖༛༟OT耻"䀢r;쀀𝔔pf;愚cr;쀀𝒬؀BEacefhiorsu༾གྷཇའཱིྦྷྪྭ႖ႩႴႾarr;椐G耻®䂮ƀcnrཎནབute;䅔g;柫rĀ;tཛྷཝ憠l;椖ƀaeyཧཬཱron;䅘dil;䅖;䐠Ā;vླྀཹ愜erseĀEUྂྙĀlq྇ྎement;戋uilibrium;懋pEquilibrium;楯r»ཹo;䎡ghtЀACDFTUVa࿁࿫࿳ဢဨၛႇϘĀnr࿆࿒gleBracket;柩rowƀ;BL࿜࿝࿡憒ar;懥eftArrow;懄eiling;按oǵ࿹\0စbleBracket;柧nǔည\0နeeVector;楝ectorĀ;Bဝသ懂ar;楕loor;挋Āerိ၃eƀ;AVဵံြ抢rrow;憦ector;楛iangleƀ;BEၐၑၕ抳ar;槐qual;抵pƀDTVၣၮၸownVector;楏eeVector;楜ectorĀ;Bႂႃ憾ar;楔ectorĀ;B႑႒懀ar;楓Āpuႛ႞f;愝ndImplies;楰ightarrow;懛ĀchႹႼr;愛;憱leDelayed;槴ڀHOacfhimoqstuფჱჷჽᄙᄞᅑᅖᅡᅧᆵᆻᆿĀCcჩხHcy;䐩y;䐨FTcy;䐬cute;䅚ʀ;aeiyᄈᄉᄎᄓᄗ檼ron;䅠dil;䅞rc;䅜;䐡r;쀀𝔖ortȀDLRUᄪᄴᄾᅉownArrow»ОeftArrow»࢚ightArrow»࿝pArrow;憑gma;䎣allCircle;战pf;쀀𝕊ɲᅭ\0\0ᅰt;戚areȀ;ISUᅻᅼᆉᆯ斡ntersection;抓uĀbpᆏᆞsetĀ;Eᆗᆘ抏qual;抑ersetĀ;Eᆨᆩ抐qual;抒nion;抔cr;쀀𝒮ar;拆ȀbcmpᇈᇛሉላĀ;sᇍᇎ拐etĀ;Eᇍᇕqual;抆ĀchᇠህeedsȀ;ESTᇭᇮᇴᇿ扻qual;檰lantEqual;扽ilde;承Tháྌ;我ƀ;esሒሓሣ拑rsetĀ;Eሜም抃qual;抇et»ሓրHRSacfhiorsሾቄ቉ቕ቞ቱቶኟዂወዑORN耻Þ䃞ADE;愢ĀHc቎ቒcy;䐋y;䐦Ābuቚቜ;䀉;䎤ƀaeyብቪቯron;䅤dil;䅢;䐢r;쀀𝔗Āeiቻ኉ǲኀ\0ኇefore;戴a;䎘Ācn኎ኘkSpace;쀀  Space;怉ldeȀ;EFTካኬኲኼ戼qual;扃ullEqual;扅ilde;扈pf;쀀𝕋ipleDot;惛Āctዖዛr;쀀𝒯rok;䅦ૡዷጎጚጦ\0ጬጱ\0\0\0\0\0ጸጽ፷ᎅ\0᏿ᐄᐊᐐĀcrዻጁute耻Ú䃚rĀ;oጇገ憟cir;楉rǣጓ\0጖y;䐎ve;䅬Āiyጞጣrc耻Û䃛;䐣blac;䅰r;쀀𝔘rave耻Ù䃙acr;䅪Ādiፁ፩erĀBPፈ፝Āarፍፐr;䁟acĀekፗፙ;揟et;掵arenthesis;揝onĀ;P፰፱拃lus;抎Āgp፻፿on;䅲f;쀀𝕌ЀADETadps᎕ᎮᎸᏄϨᏒᏗᏳrrowƀ;BDᅐᎠᎤar;椒ownArrow;懅ownArrow;憕quilibrium;楮eeĀ;AᏋᏌ报rrow;憥ownáϳerĀLRᏞᏨeftArrow;憖ightArrow;憗iĀ;lᏹᏺ䏒on;䎥ing;䅮cr;쀀𝒰ilde;䅨ml耻Ü䃜ҀDbcdefosvᐧᐬᐰᐳᐾᒅᒊᒐᒖash;披ar;櫫y;䐒ashĀ;lᐻᐼ抩;櫦Āerᑃᑅ;拁ƀbtyᑌᑐᑺar;怖Ā;iᑏᑕcalȀBLSTᑡᑥᑪᑴar;戣ine;䁼eparator;杘ilde;所ThinSpace;怊r;쀀𝔙pf;쀀𝕍cr;쀀𝒱dash;抪ʀcefosᒧᒬᒱᒶᒼirc;䅴dge;拀r;쀀𝔚pf;쀀𝕎cr;쀀𝒲Ȁfiosᓋᓐᓒᓘr;쀀𝔛;䎞pf;쀀𝕏cr;쀀𝒳ҀAIUacfosuᓱᓵᓹᓽᔄᔏᔔᔚᔠcy;䐯cy;䐇cy;䐮cute耻Ý䃝Āiyᔉᔍrc;䅶;䐫r;쀀𝔜pf;쀀𝕐cr;쀀𝒴ml;䅸ЀHacdefosᔵᔹᔿᕋᕏᕝᕠᕤcy;䐖cute;䅹Āayᕄᕉron;䅽;䐗ot;䅻ǲᕔ\0ᕛoWidtè૙a;䎖r;愨pf;愤cr;쀀𝒵௡ᖃᖊᖐ\0ᖰᖶᖿ\0\0\0\0ᗆᗛᗫᙟ᙭\0ᚕ᚛ᚲᚹ\0ᚾcute耻á䃡reve;䄃̀;Ediuyᖜᖝᖡᖣᖨᖭ戾;쀀∾̳;房rc耻â䃢te肻´̆;䐰lig耻æ䃦Ā;r²ᖺ;쀀𝔞rave耻à䃠ĀepᗊᗖĀfpᗏᗔsym;愵èᗓha;䎱ĀapᗟcĀclᗤᗧr;䄁g;樿ɤᗰ\0\0ᘊʀ;adsvᗺᗻᗿᘁᘇ戧nd;橕;橜lope;橘;橚΀;elmrszᘘᘙᘛᘞᘿᙏᙙ戠;榤e»ᘙsdĀ;aᘥᘦ戡ѡᘰᘲᘴᘶᘸᘺᘼᘾ;榨;榩;榪;榫;榬;榭;榮;榯tĀ;vᙅᙆ戟bĀ;dᙌᙍ抾;榝Āptᙔᙗh;戢»¹arr;捼Āgpᙣᙧon;䄅f;쀀𝕒΀;Eaeiop዁ᙻᙽᚂᚄᚇᚊ;橰cir;橯;扊d;手s;䀧roxĀ;e዁ᚒñᚃing耻å䃥ƀctyᚡᚦᚨr;쀀𝒶;䀪mpĀ;e዁ᚯñʈilde耻ã䃣ml耻ä䃤Āciᛂᛈoninôɲnt;樑ࠀNabcdefiklnoprsu᛭ᛱᜰ᜼ᝃᝈ᝸᝽០៦ᠹᡐᜍ᤽᥈ᥰot;櫭Ācrᛶ᜞kȀcepsᜀᜅᜍᜓong;扌psilon;䏶rime;怵imĀ;e᜚᜛戽q;拍Ŷᜢᜦee;抽edĀ;gᜬᜭ挅e»ᜭrkĀ;t፜᜷brk;掶Āoyᜁᝁ;䐱quo;怞ʀcmprtᝓ᝛ᝡᝤᝨausĀ;eĊĉptyv;榰séᜌnoõēƀahwᝯ᝱ᝳ;䎲;愶een;扬r;쀀𝔟g΀costuvwឍឝឳេ៕៛៞ƀaiuបពរðݠrc;旯p»፱ƀdptឤឨឭot;樀lus;樁imes;樂ɱឹ\0\0ើcup;樆ar;昅riangleĀdu៍្own;施p;斳plus;樄eåᑄåᒭarow;植ƀako៭ᠦᠵĀcn៲ᠣkƀlst៺֫᠂ozenge;槫riangleȀ;dlr᠒᠓᠘᠝斴own;斾eft;旂ight;斸k;搣Ʊᠫ\0ᠳƲᠯ\0ᠱ;斒;斑4;斓ck;斈ĀeoᠾᡍĀ;qᡃᡆ쀀=⃥uiv;쀀≡⃥t;挐Ȁptwxᡙᡞᡧᡬf;쀀𝕓Ā;tᏋᡣom»Ꮜtie;拈؀DHUVbdhmptuvᢅᢖᢪᢻᣗᣛᣬ᣿ᤅᤊᤐᤡȀLRlrᢎᢐᢒᢔ;敗;敔;敖;敓ʀ;DUduᢡᢢᢤᢦᢨ敐;敦;敩;敤;敧ȀLRlrᢳᢵᢷᢹ;敝;敚;敜;教΀;HLRhlrᣊᣋᣍᣏᣑᣓᣕ救;敬;散;敠;敫;敢;敟ox;槉ȀLRlrᣤᣦᣨᣪ;敕;敒;攐;攌ʀ;DUduڽ᣷᣹᣻᣽;敥;敨;攬;攴inus;抟lus;択imes;抠ȀLRlrᤙᤛᤝ᤟;敛;敘;攘;攔΀;HLRhlrᤰᤱᤳᤵᤷ᤻᤹攂;敪;敡;敞;攼;攤;攜Āevģ᥂bar耻¦䂦Ȁceioᥑᥖᥚᥠr;쀀𝒷mi;恏mĀ;e᜚᜜lƀ;bhᥨᥩᥫ䁜;槅sub;柈Ŭᥴ᥾lĀ;e᥹᥺怢t»᥺pƀ;Eeįᦅᦇ;檮Ā;qۜۛೡᦧ\0᧨ᨑᨕᨲ\0ᨷᩐ\0\0᪴\0\0᫁\0\0ᬡᬮ᭍᭒\0᯽\0ᰌƀcpr᦭ᦲ᧝ute;䄇̀;abcdsᦿᧀᧄ᧊᧕᧙戩nd;橄rcup;橉Āau᧏᧒p;橋p;橇ot;橀;쀀∩︀Āeo᧢᧥t;恁îړȀaeiu᧰᧻ᨁᨅǰ᧵\0᧸s;橍on;䄍dil耻ç䃧rc;䄉psĀ;sᨌᨍ橌m;橐ot;䄋ƀdmnᨛᨠᨦil肻¸ƭptyv;榲t脀¢;eᨭᨮ䂢räƲr;쀀𝔠ƀceiᨽᩀᩍy;䑇ckĀ;mᩇᩈ朓ark»ᩈ;䏇r΀;Ecefms᩟᩠ᩢᩫ᪤᪪᪮旋;槃ƀ;elᩩᩪᩭ䋆q;扗eɡᩴ\0\0᪈rrowĀlr᩼᪁eft;憺ight;憻ʀRSacd᪒᪔᪖᪚᪟»ཇ;擈st;抛irc;抚ash;抝nint;樐id;櫯cir;槂ubsĀ;u᪻᪼晣it»᪼ˬ᫇᫔᫺\0ᬊonĀ;eᫍᫎ䀺Ā;qÇÆɭ᫙\0\0᫢aĀ;t᫞᫟䀬;䁀ƀ;fl᫨᫩᫫戁îᅠeĀmx᫱᫶ent»᫩eóɍǧ᫾\0ᬇĀ;dኻᬂot;橭nôɆƀfryᬐᬔᬗ;쀀𝕔oäɔ脀©;sŕᬝr;愗Āaoᬥᬩrr;憵ss;朗Ācuᬲᬷr;쀀𝒸Ābpᬼ᭄Ā;eᭁᭂ櫏;櫑Ā;eᭉᭊ櫐;櫒dot;拯΀delprvw᭠᭬᭷ᮂᮬᯔ᯹arrĀlr᭨᭪;椸;椵ɰ᭲\0\0᭵r;拞c;拟arrĀ;p᭿ᮀ憶;椽̀;bcdosᮏᮐᮖᮡᮥᮨ截rcap;橈Āauᮛᮞp;橆p;橊ot;抍r;橅;쀀∪︀Ȁalrv᮵ᮿᯞᯣrrĀ;mᮼᮽ憷;椼yƀevwᯇᯔᯘqɰᯎ\0\0ᯒreã᭳uã᭵ee;拎edge;拏en耻¤䂤earrowĀlrᯮ᯳eft»ᮀight»ᮽeäᯝĀciᰁᰇoninôǷnt;戱lcty;挭ঀAHabcdefhijlorstuwz᰸᰻᰿ᱝᱩᱵᲊᲞᲬᲷ᳻᳿ᴍᵻᶑᶫᶻ᷆᷍rò΁ar;楥Ȁglrs᱈ᱍ᱒᱔ger;怠eth;愸òᄳhĀ;vᱚᱛ怐»ऊūᱡᱧarow;椏aã̕Āayᱮᱳron;䄏;䐴ƀ;ao̲ᱼᲄĀgrʿᲁr;懊tseq;橷ƀglmᲑᲔᲘ耻°䂰ta;䎴ptyv;榱ĀirᲣᲨsht;楿;쀀𝔡arĀlrᲳᲵ»ࣜ»သʀaegsv᳂͸᳖᳜᳠mƀ;oș᳊᳔ndĀ;ș᳑uit;晦amma;䏝in;拲ƀ;io᳧᳨᳸䃷de脀÷;o᳧ᳰntimes;拇nø᳷cy;䑒cɯᴆ\0\0ᴊrn;挞op;挍ʀlptuwᴘᴝᴢᵉᵕlar;䀤f;쀀𝕕ʀ;emps̋ᴭᴷᴽᵂqĀ;d͒ᴳot;扑inus;戸lus;戔quare;抡blebarwedgåúnƀadhᄮᵝᵧownarrowóᲃarpoonĀlrᵲᵶefôᲴighôᲶŢᵿᶅkaro÷གɯᶊ\0\0ᶎrn;挟op;挌ƀcotᶘᶣᶦĀryᶝᶡ;쀀𝒹;䑕l;槶rok;䄑Ādrᶰᶴot;拱iĀ;fᶺ᠖斿Āah᷀᷃ròЩaòྦangle;榦Āci᷒ᷕy;䑟grarr;柿ऀDacdefglmnopqrstuxḁḉḙḸոḼṉṡṾấắẽỡἪἷὄ὎὚ĀDoḆᴴoôᲉĀcsḎḔute耻é䃩ter;橮ȀaioyḢḧḱḶron;䄛rĀ;cḭḮ扖耻ê䃪lon;払;䑍ot;䄗ĀDrṁṅot;扒;쀀𝔢ƀ;rsṐṑṗ檚ave耻è䃨Ā;dṜṝ檖ot;檘Ȁ;ilsṪṫṲṴ檙nters;揧;愓Ā;dṹṺ檕ot;檗ƀapsẅẉẗcr;䄓tyƀ;svẒẓẕ戅et»ẓpĀ1;ẝẤĳạả;怄;怅怃ĀgsẪẬ;䅋p;怂ĀgpẴẸon;䄙f;쀀𝕖ƀalsỄỎỒrĀ;sỊị拕l;槣us;橱iƀ;lvỚớở䎵on»ớ;䏵ȀcsuvỪỳἋἣĀioữḱrc»Ḯɩỹ\0\0ỻíՈantĀglἂἆtr»ṝess»Ṻƀaeiἒ἖Ἒls;䀽st;扟vĀ;DȵἠD;橸parsl;槥ĀDaἯἳot;打rr;楱ƀcdiἾὁỸr;愯oô͒ĀahὉὋ;䎷耻ð䃰Āmrὓὗl耻ë䃫o;悬ƀcipὡὤὧl;䀡sôծĀeoὬὴctatioîՙnentialåչৡᾒ\0ᾞ\0ᾡᾧ\0\0ῆῌ\0ΐ\0ῦῪ \0 ⁚llingdotseñṄy;䑄male;晀ƀilrᾭᾳ῁lig;耀ﬃɩᾹ\0\0᾽g;耀ﬀig;耀ﬄ;쀀𝔣lig;耀ﬁlig;쀀fjƀaltῙ῜ῡt;晭ig;耀ﬂns;斱of;䆒ǰ΅\0ῳf;쀀𝕗ĀakֿῷĀ;vῼ´拔;櫙artint;樍Āao‌⁕Ācs‑⁒α‚‰‸⁅⁈\0⁐β•‥‧‪‬\0‮耻½䂽;慓耻¼䂼;慕;慙;慛Ƴ‴\0‶;慔;慖ʴ‾⁁\0\0⁃耻¾䂾;慗;慜5;慘ƶ⁌\0⁎;慚;慝8;慞l;恄wn;挢cr;쀀𝒻ࢀEabcdefgijlnorstv₂₉₟₥₰₴⃰⃵⃺⃿℃ℒℸ̗ℾ⅒↞Ā;lٍ₇;檌ƀcmpₐₕ₝ute;䇵maĀ;dₜ᳚䎳;檆reve;䄟Āiy₪₮rc;䄝;䐳ot;䄡Ȁ;lqsؾق₽⃉ƀ;qsؾٌ⃄lanô٥Ȁ;cdl٥⃒⃥⃕c;檩otĀ;o⃜⃝檀Ā;l⃢⃣檂;檄Ā;e⃪⃭쀀⋛︀s;檔r;쀀𝔤Ā;gٳ؛mel;愷cy;䑓Ȁ;Eajٚℌℎℐ;檒;檥;檤ȀEaesℛℝ℩ℴ;扩pĀ;p℣ℤ檊rox»ℤĀ;q℮ℯ檈Ā;q℮ℛim;拧pf;쀀𝕘Āci⅃ⅆr;愊mƀ;el٫ⅎ⅐;檎;檐茀>;cdlqr׮ⅠⅪⅮⅳⅹĀciⅥⅧ;檧r;橺ot;拗Par;榕uest;橼ʀadelsↄⅪ←ٖ↛ǰ↉\0↎proø₞r;楸qĀlqؿ↖lesó₈ií٫Āen↣↭rtneqq;쀀≩︀Å↪ԀAabcefkosy⇄⇇⇱⇵⇺∘∝∯≨≽ròΠȀilmr⇐⇔⇗⇛rsðᒄf»․ilôکĀdr⇠⇤cy;䑊ƀ;cwࣴ⇫⇯ir;楈;憭ar;意irc;䄥ƀalr∁∎∓rtsĀ;u∉∊晥it»∊lip;怦con;抹r;쀀𝔥sĀew∣∩arow;椥arow;椦ʀamopr∺∾≃≞≣rr;懿tht;戻kĀlr≉≓eftarrow;憩ightarrow;憪f;쀀𝕙bar;怕ƀclt≯≴≸r;쀀𝒽asè⇴rok;䄧Ābp⊂⊇ull;恃hen»ᱛૡ⊣\0⊪\0⊸⋅⋎\0⋕⋳\0\0⋸⌢⍧⍢⍿\0⎆⎪⎴cute耻í䃭ƀ;iyݱ⊰⊵rc耻î䃮;䐸Ācx⊼⊿y;䐵cl耻¡䂡ĀfrΟ⋉;쀀𝔦rave耻ì䃬Ȁ;inoܾ⋝⋩⋮Āin⋢⋦nt;樌t;戭fin;槜ta;愩lig;䄳ƀaop⋾⌚⌝ƀcgt⌅⌈⌗r;䄫ƀelpܟ⌏⌓inåގarôܠh;䄱f;抷ed;䆵ʀ;cfotӴ⌬⌱⌽⍁are;愅inĀ;t⌸⌹戞ie;槝doô⌙ʀ;celpݗ⍌⍐⍛⍡al;抺Āgr⍕⍙eróᕣã⍍arhk;樗rod;樼Ȁcgpt⍯⍲⍶⍻y;䑑on;䄯f;쀀𝕚a;䎹uest耻¿䂿Āci⎊⎏r;쀀𝒾nʀ;EdsvӴ⎛⎝⎡ӳ;拹ot;拵Ā;v⎦⎧拴;拳Ā;iݷ⎮lde;䄩ǫ⎸\0⎼cy;䑖l耻ï䃯̀cfmosu⏌⏗⏜⏡⏧⏵Āiy⏑⏕rc;䄵;䐹r;쀀𝔧ath;䈷pf;쀀𝕛ǣ⏬\0⏱r;쀀𝒿rcy;䑘kcy;䑔Ѐacfghjos␋␖␢␧␭␱␵␻ppaĀ;v␓␔䎺;䏰Āey␛␠dil;䄷;䐺r;쀀𝔨reen;䄸cy;䑅cy;䑜pf;쀀𝕜cr;쀀𝓀஀ABEHabcdefghjlmnoprstuv⑰⒁⒆⒍⒑┎┽╚▀♎♞♥♹♽⚚⚲⛘❝❨➋⟀⠁⠒ƀart⑷⑺⑼rò৆òΕail;椛arr;椎Ā;gঔ⒋;檋ar;楢ॣ⒥\0⒪\0⒱\0\0\0\0\0⒵Ⓔ\0ⓆⓈⓍ\0⓹ute;䄺mptyv;榴raîࡌbda;䎻gƀ;dlࢎⓁⓃ;榑åࢎ;檅uo耻«䂫rЀ;bfhlpst࢙ⓞⓦⓩ⓫⓮⓱⓵Ā;f࢝ⓣs;椟s;椝ë≒p;憫l;椹im;楳l;憢ƀ;ae⓿─┄檫il;椙Ā;s┉┊檭;쀀⪭︀ƀabr┕┙┝rr;椌rk;杲Āak┢┬cĀek┨┪;䁻;䁛Āes┱┳;榋lĀdu┹┻;榏;榍Ȁaeuy╆╋╖╘ron;䄾Ādi═╔il;䄼ìࢰâ┩;䐻Ȁcqrs╣╦╭╽a;椶uoĀ;rนᝆĀdu╲╷har;楧shar;楋h;憲ʀ;fgqs▋▌উ◳◿扤tʀahlrt▘▤▷◂◨rrowĀ;t࢙□aé⓶arpoonĀdu▯▴own»њp»०eftarrows;懇ightƀahs◍◖◞rrowĀ;sࣴࢧarpoonó྘quigarro÷⇰hreetimes;拋ƀ;qs▋ও◺lanôবʀ;cdgsব☊☍☝☨c;檨otĀ;o☔☕橿Ā;r☚☛檁;檃Ā;e☢☥쀀⋚︀s;檓ʀadegs☳☹☽♉♋pproøⓆot;拖qĀgq♃♅ôউgtò⒌ôছiíলƀilr♕࣡♚sht;楼;쀀𝔩Ā;Eজ♣;檑š♩♶rĀdu▲♮Ā;l॥♳;楪lk;斄cy;䑙ʀ;achtੈ⚈⚋⚑⚖rò◁orneòᴈard;楫ri;旺Āio⚟⚤dot;䅀ustĀ;a⚬⚭掰che»⚭ȀEaes⚻⚽⛉⛔;扨pĀ;p⛃⛄檉rox»⛄Ā;q⛎⛏檇Ā;q⛎⚻im;拦Ѐabnoptwz⛩⛴⛷✚✯❁❇❐Ānr⛮⛱g;柬r;懽rëࣁgƀlmr⛿✍✔eftĀar০✇ightá৲apsto;柼ightá৽parrowĀlr✥✩efô⓭ight;憬ƀafl✶✹✽r;榅;쀀𝕝us;樭imes;樴š❋❏st;戗áፎƀ;ef❗❘᠀旊nge»❘arĀ;l❤❥䀨t;榓ʀachmt❳❶❼➅➇ròࢨorneòᶌarĀ;d྘➃;業;怎ri;抿̀achiqt➘➝ੀ➢➮➻quo;怹r;쀀𝓁mƀ;egল➪➬;檍;檏Ābu┪➳oĀ;rฟ➹;怚rok;䅂萀<;cdhilqrࠫ⟒☹⟜⟠⟥⟪⟰Āci⟗⟙;檦r;橹reå◲mes;拉arr;楶uest;橻ĀPi⟵⟹ar;榖ƀ;ef⠀भ᠛旃rĀdu⠇⠍shar;楊har;楦Āen⠗⠡rtneqq;쀀≨︀Å⠞܀Dacdefhilnopsu⡀⡅⢂⢎⢓⢠⢥⢨⣚⣢⣤ઃ⣳⤂Dot;戺Ȁclpr⡎⡒⡣⡽r耻¯䂯Āet⡗⡙;時Ā;e⡞⡟朠se»⡟Ā;sျ⡨toȀ;dluျ⡳⡷⡻owîҌefôएðᏑker;斮Āoy⢇⢌mma;権;䐼ash;怔asuredangle»ᘦr;쀀𝔪o;愧ƀcdn⢯⢴⣉ro耻µ䂵Ȁ;acdᑤ⢽⣀⣄sôᚧir;櫰ot肻·Ƶusƀ;bd⣒ᤃ⣓戒Ā;uᴼ⣘;横ţ⣞⣡p;櫛ò−ðઁĀdp⣩⣮els;抧f;쀀𝕞Āct⣸⣽r;쀀𝓂pos»ᖝƀ;lm⤉⤊⤍䎼timap;抸ఀGLRVabcdefghijlmoprstuvw⥂⥓⥾⦉⦘⧚⧩⨕⨚⩘⩝⪃⪕⪤⪨⬄⬇⭄⭿⮮ⰴⱧⱼ⳩Āgt⥇⥋;쀀⋙̸Ā;v⥐௏쀀≫⃒ƀelt⥚⥲⥶ftĀar⥡⥧rrow;懍ightarrow;懎;쀀⋘̸Ā;v⥻ే쀀≪⃒ightarrow;懏ĀDd⦎⦓ash;抯ash;抮ʀbcnpt⦣⦧⦬⦱⧌la»˞ute;䅄g;쀀∠⃒ʀ;Eiop඄⦼⧀⧅⧈;쀀⩰̸d;쀀≋̸s;䅉roø඄urĀ;a⧓⧔普lĀ;s⧓ସǳ⧟\0⧣p肻 ଷmpĀ;e௹ఀʀaeouy⧴⧾⨃⨐⨓ǰ⧹\0⧻;橃on;䅈dil;䅆ngĀ;dൾ⨊ot;쀀⩭̸p;橂;䐽ash;怓΀;Aadqsxஒ⨩⨭⨻⩁⩅⩐rr;懗rĀhr⨳⨶k;椤Ā;oᏲᏰot;쀀≐̸uiöୣĀei⩊⩎ar;椨í஘istĀ;s஠டr;쀀𝔫ȀEest௅⩦⩹⩼ƀ;qs஼⩭௡ƀ;qs஼௅⩴lanô௢ií௪Ā;rஶ⪁»ஷƀAap⪊⪍⪑rò⥱rr;憮ar;櫲ƀ;svྍ⪜ྌĀ;d⪡⪢拼;拺cy;䑚΀AEadest⪷⪺⪾⫂⫅⫶⫹rò⥦;쀀≦̸rr;憚r;急Ȁ;fqs఻⫎⫣⫯tĀar⫔⫙rro÷⫁ightarro÷⪐ƀ;qs఻⪺⫪lanôౕĀ;sౕ⫴»శiíౝĀ;rవ⫾iĀ;eచథiäඐĀpt⬌⬑f;쀀𝕟膀¬;in⬙⬚⬶䂬nȀ;Edvஉ⬤⬨⬮;쀀⋹̸ot;쀀⋵̸ǡஉ⬳⬵;拷;拶iĀ;vಸ⬼ǡಸ⭁⭃;拾;拽ƀaor⭋⭣⭩rȀ;ast୻⭕⭚⭟lleì୻l;쀀⫽⃥;쀀∂̸lint;樔ƀ;ceಒ⭰⭳uåಥĀ;cಘ⭸Ā;eಒ⭽ñಘȀAait⮈⮋⮝⮧rò⦈rrƀ;cw⮔⮕⮙憛;쀀⤳̸;쀀↝̸ghtarrow»⮕riĀ;eೋೖ΀chimpqu⮽⯍⯙⬄୸⯤⯯Ȁ;cerല⯆ഷ⯉uå൅;쀀𝓃ortɭ⬅\0\0⯖ará⭖mĀ;e൮⯟Ā;q൴൳suĀbp⯫⯭å೸åഋƀbcp⯶ⰑⰙȀ;Ees⯿ⰀഢⰄ抄;쀀⫅̸etĀ;eഛⰋqĀ;qണⰀcĀ;eലⰗñസȀ;EesⰢⰣൟⰧ抅;쀀⫆̸etĀ;e൘ⰮqĀ;qൠⰣȀgilrⰽⰿⱅⱇìௗlde耻ñ䃱çృiangleĀlrⱒⱜeftĀ;eచⱚñదightĀ;eೋⱥñ೗Ā;mⱬⱭ䎽ƀ;esⱴⱵⱹ䀣ro;愖p;怇ҀDHadgilrsⲏⲔⲙⲞⲣⲰⲶⳓⳣash;抭arr;椄p;쀀≍⃒ash;抬ĀetⲨⲬ;쀀≥⃒;쀀>⃒nfin;槞ƀAetⲽⳁⳅrr;椂;쀀≤⃒Ā;rⳊⳍ쀀<⃒ie;쀀⊴⃒ĀAtⳘⳜrr;椃rie;쀀⊵⃒im;쀀∼⃒ƀAan⳰⳴ⴂrr;懖rĀhr⳺⳽k;椣Ā;oᏧᏥear;椧ቓ᪕\0\0\0\0\0\0\0\0\0\0\0\0\0ⴭ\0ⴸⵈⵠⵥ⵲ⶄᬇ\0\0ⶍⶫ\0ⷈⷎ\0ⷜ⸙⸫⸾⹃Ācsⴱ᪗ute耻ó䃳ĀiyⴼⵅrĀ;c᪞ⵂ耻ô䃴;䐾ʀabios᪠ⵒⵗǈⵚlac;䅑v;樸old;榼lig;䅓Ācr⵩⵭ir;榿;쀀𝔬ͯ⵹\0\0⵼\0ⶂn;䋛ave耻ò䃲;槁Ābmⶈ෴ar;榵Ȁacitⶕ⶘ⶥⶨrò᪀Āir⶝ⶠr;榾oss;榻nå๒;槀ƀaeiⶱⶵⶹcr;䅍ga;䏉ƀcdnⷀⷅǍron;䎿;榶pf;쀀𝕠ƀaelⷔ⷗ǒr;榷rp;榹΀;adiosvⷪⷫⷮ⸈⸍⸐⸖戨rò᪆Ȁ;efmⷷⷸ⸂⸅橝rĀ;oⷾⷿ愴f»ⷿ耻ª䂪耻º䂺gof;抶r;橖lope;橗;橛ƀclo⸟⸡⸧ò⸁ash耻ø䃸l;折iŬⸯ⸴de耻õ䃵esĀ;aǛ⸺s;樶ml耻ö䃶bar;挽ૡ⹞\0⹽\0⺀⺝\0⺢⺹\0\0⻋ຜ\0⼓\0\0⼫⾼\0⿈rȀ;astЃ⹧⹲຅脀¶;l⹭⹮䂶leìЃɩ⹸\0\0⹻m;櫳;櫽y;䐿rʀcimpt⺋⺏⺓ᡥ⺗nt;䀥od;䀮il;怰enk;怱r;쀀𝔭ƀimo⺨⺰⺴Ā;v⺭⺮䏆;䏕maô੶ne;明ƀ;tv⺿⻀⻈䏀chfork»´;䏖Āau⻏⻟nĀck⻕⻝kĀ;h⇴⻛;愎ö⇴sҀ;abcdemst⻳⻴ᤈ⻹⻽⼄⼆⼊⼎䀫cir;樣ir;樢Āouᵀ⼂;樥;橲n肻±ຝim;樦wo;樧ƀipu⼙⼠⼥ntint;樕f;쀀𝕡nd耻£䂣Ԁ;Eaceinosu່⼿⽁⽄⽇⾁⾉⾒⽾⾶;檳p;檷uå໙Ā;c໎⽌̀;acens່⽙⽟⽦⽨⽾pproø⽃urlyeñ໙ñ໎ƀaes⽯⽶⽺pprox;檹qq;檵im;拨iíໟmeĀ;s⾈ຮ怲ƀEas⽸⾐⽺ð⽵ƀdfp໬⾙⾯ƀals⾠⾥⾪lar;挮ine;挒urf;挓Ā;t໻⾴ï໻rel;抰Āci⿀⿅r;쀀𝓅;䏈ncsp;怈̀fiopsu⿚⋢⿟⿥⿫⿱r;쀀𝔮pf;쀀𝕢rime;恗cr;쀀𝓆ƀaeo⿸〉〓tĀei⿾々rnionóڰnt;樖stĀ;e【】䀿ñἙô༔઀ABHabcdefhilmnoprstux぀けさすムㄎㄫㅇㅢㅲㆎ㈆㈕㈤㈩㉘㉮㉲㊐㊰㊷ƀartぇおがròႳòϝail;検aròᱥar;楤΀cdenqrtとふへみわゔヌĀeuねぱ;쀀∽̱te;䅕iãᅮmptyv;榳gȀ;del࿑らるろ;榒;榥å࿑uo耻»䂻rր;abcfhlpstw࿜ガクシスゼゾダッデナp;極Ā;f࿠ゴs;椠;椳s;椞ë≝ð✮l;楅im;楴l;憣;憝Āaiパフil;椚oĀ;nホボ戶aló༞ƀabrョリヮrò៥rk;杳ĀakンヽcĀekヹ・;䁽;䁝Āes㄂㄄;榌lĀduㄊㄌ;榎;榐Ȁaeuyㄗㄜㄧㄩron;䅙Ādiㄡㄥil;䅗ì࿲âヺ;䑀Ȁclqsㄴㄷㄽㅄa;椷dhar;楩uoĀ;rȎȍh;憳ƀacgㅎㅟངlȀ;ipsླྀㅘㅛႜnåႻarôྩt;断ƀilrㅩဣㅮsht;楽;쀀𝔯ĀaoㅷㆆrĀduㅽㅿ»ѻĀ;l႑ㆄ;楬Ā;vㆋㆌ䏁;䏱ƀgns㆕ㇹㇼht̀ahlrstㆤㆰ㇂㇘㇤㇮rrowĀ;t࿜ㆭaéトarpoonĀduㆻㆿowîㅾp»႒eftĀah㇊㇐rrowó࿪arpoonóՑightarrows;應quigarro÷ニhreetimes;拌g;䋚ingdotseñἲƀahm㈍㈐㈓rò࿪aòՑ;怏oustĀ;a㈞㈟掱che»㈟mid;櫮Ȁabpt㈲㈽㉀㉒Ānr㈷㈺g;柭r;懾rëဃƀafl㉇㉊㉎r;榆;쀀𝕣us;樮imes;樵Āap㉝㉧rĀ;g㉣㉤䀩t;榔olint;樒arò㇣Ȁachq㉻㊀Ⴜ㊅quo;怺r;쀀𝓇Ābu・㊊oĀ;rȔȓƀhir㊗㊛㊠reåㇸmes;拊iȀ;efl㊪ၙᠡ㊫方tri;槎luhar;楨;愞ൡ㋕㋛㋟㌬㌸㍱\0㍺㎤\0\0㏬㏰\0㐨㑈㑚㒭㒱㓊㓱\0㘖\0\0㘳cute;䅛quï➺Ԁ;Eaceinpsyᇭ㋳㋵㋿㌂㌋㌏㌟㌦㌩;檴ǰ㋺\0㋼;檸on;䅡uåᇾĀ;dᇳ㌇il;䅟rc;䅝ƀEas㌖㌘㌛;檶p;檺im;择olint;樓iíሄ;䑁otƀ;be㌴ᵇ㌵担;橦΀Aacmstx㍆㍊㍗㍛㍞㍣㍭rr;懘rĀhr㍐㍒ë∨Ā;oਸ਼਴t耻§䂧i;䀻war;椩mĀin㍩ðnuóñt;朶rĀ;o㍶⁕쀀𝔰Ȁacoy㎂㎆㎑㎠rp;景Āhy㎋㎏cy;䑉;䑈rtɭ㎙\0\0㎜iäᑤaraì⹯耻­䂭Āgm㎨㎴maƀ;fv㎱㎲㎲䏃;䏂Ѐ;deglnprካ㏅㏉㏎㏖㏞㏡㏦ot;橪Ā;q኱ኰĀ;E㏓㏔檞;檠Ā;E㏛㏜檝;檟e;扆lus;樤arr;楲aròᄽȀaeit㏸㐈㐏㐗Āls㏽㐄lsetmé㍪hp;樳parsl;槤Ādlᑣ㐔e;挣Ā;e㐜㐝檪Ā;s㐢㐣檬;쀀⪬︀ƀflp㐮㐳㑂tcy;䑌Ā;b㐸㐹䀯Ā;a㐾㐿槄r;挿f;쀀𝕤aĀdr㑍ЂesĀ;u㑔㑕晠it»㑕ƀcsu㑠㑹㒟Āau㑥㑯pĀ;sᆈ㑫;쀀⊓︀pĀ;sᆴ㑵;쀀⊔︀uĀbp㑿㒏ƀ;esᆗᆜ㒆etĀ;eᆗ㒍ñᆝƀ;esᆨᆭ㒖etĀ;eᆨ㒝ñᆮƀ;afᅻ㒦ְrť㒫ֱ»ᅼaròᅈȀcemt㒹㒾㓂㓅r;쀀𝓈tmîñiì㐕aræᆾĀar㓎㓕rĀ;f㓔ឿ昆Āan㓚㓭ightĀep㓣㓪psiloîỠhé⺯s»⡒ʀbcmnp㓻㕞ሉ㖋㖎Ҁ;Edemnprs㔎㔏㔑㔕㔞㔣㔬㔱㔶抂;櫅ot;檽Ā;dᇚ㔚ot;櫃ult;櫁ĀEe㔨㔪;櫋;把lus;檿arr;楹ƀeiu㔽㕒㕕tƀ;en㔎㕅㕋qĀ;qᇚ㔏eqĀ;q㔫㔨m;櫇Ābp㕚㕜;櫕;櫓c̀;acensᇭ㕬㕲㕹㕻㌦pproø㋺urlyeñᇾñᇳƀaes㖂㖈㌛pproø㌚qñ㌗g;晪ڀ123;Edehlmnps㖩㖬㖯ሜ㖲㖴㗀㗉㗕㗚㗟㗨㗭耻¹䂹耻²䂲耻³䂳;櫆Āos㖹㖼t;檾ub;櫘Ā;dሢ㗅ot;櫄sĀou㗏㗒l;柉b;櫗arr;楻ult;櫂ĀEe㗤㗦;櫌;抋lus;櫀ƀeiu㗴㘉㘌tƀ;enሜ㗼㘂qĀ;qሢ㖲eqĀ;q㗧㗤m;櫈Ābp㘑㘓;櫔;櫖ƀAan㘜㘠㘭rr;懙rĀhr㘦㘨ë∮Ā;oਫ਩war;椪lig耻ß䃟௡㙑㙝㙠ዎ㙳㙹\0㙾㛂\0\0\0\0\0㛛㜃\0㜉㝬\0\0\0㞇ɲ㙖\0\0㙛get;挖;䏄rë๟ƀaey㙦㙫㙰ron;䅥dil;䅣;䑂lrec;挕r;쀀𝔱Ȁeiko㚆㚝㚵㚼ǲ㚋\0㚑eĀ4fኄኁaƀ;sv㚘㚙㚛䎸ym;䏑Ācn㚢㚲kĀas㚨㚮pproø዁im»ኬsðኞĀas㚺㚮ð዁rn耻þ䃾Ǭ̟㛆⋧es膀×;bd㛏㛐㛘䃗Ā;aᤏ㛕r;樱;樰ƀeps㛡㛣㜀á⩍Ȁ;bcf҆㛬㛰㛴ot;挶ir;櫱Ā;o㛹㛼쀀𝕥rk;櫚á㍢rime;怴ƀaip㜏㜒㝤dåቈ΀adempst㜡㝍㝀㝑㝗㝜㝟ngleʀ;dlqr㜰㜱㜶㝀㝂斵own»ᶻeftĀ;e⠀㜾ñम;扜ightĀ;e㊪㝋ñၚot;旬inus;樺lus;樹b;槍ime;樻ezium;揢ƀcht㝲㝽㞁Āry㝷㝻;쀀𝓉;䑆cy;䑛rok;䅧Āio㞋㞎xô᝷headĀlr㞗㞠eftarro÷ࡏightarrow»ཝऀAHabcdfghlmoprstuw㟐㟓㟗㟤㟰㟼㠎㠜㠣㠴㡑㡝㡫㢩㣌㣒㣪㣶ròϭar;楣Ācr㟜㟢ute耻ú䃺òᅐrǣ㟪\0㟭y;䑞ve;䅭Āiy㟵㟺rc耻û䃻;䑃ƀabh㠃㠆㠋ròᎭlac;䅱aòᏃĀir㠓㠘sht;楾;쀀𝔲rave耻ù䃹š㠧㠱rĀlr㠬㠮»ॗ»ႃlk;斀Āct㠹㡍ɯ㠿\0\0㡊rnĀ;e㡅㡆挜r»㡆op;挏ri;旸Āal㡖㡚cr;䅫肻¨͉Āgp㡢㡦on;䅳f;쀀𝕦̀adhlsuᅋ㡸㡽፲㢑㢠ownáᎳarpoonĀlr㢈㢌efô㠭ighô㠯iƀ;hl㢙㢚㢜䏅»ᏺon»㢚parrows;懈ƀcit㢰㣄㣈ɯ㢶\0\0㣁rnĀ;e㢼㢽挝r»㢽op;挎ng;䅯ri;旹cr;쀀𝓊ƀdir㣙㣝㣢ot;拰lde;䅩iĀ;f㜰㣨»᠓Āam㣯㣲rò㢨l耻ü䃼angle;榧ހABDacdeflnoprsz㤜㤟㤩㤭㦵㦸㦽㧟㧤㧨㧳㧹㧽㨁㨠ròϷarĀ;v㤦㤧櫨;櫩asèϡĀnr㤲㤷grt;榜΀eknprst㓣㥆㥋㥒㥝㥤㦖appá␕othinçẖƀhir㓫⻈㥙opô⾵Ā;hᎷ㥢ïㆍĀiu㥩㥭gmá㎳Ābp㥲㦄setneqĀ;q㥽㦀쀀⊊︀;쀀⫋︀setneqĀ;q㦏㦒쀀⊋︀;쀀⫌︀Āhr㦛㦟etá㚜iangleĀlr㦪㦯eft»थight»ၑy;䐲ash»ံƀelr㧄㧒㧗ƀ;beⷪ㧋㧏ar;抻q;扚lip;拮Ābt㧜ᑨaòᑩr;쀀𝔳tré㦮suĀbp㧯㧱»ജ»൙pf;쀀𝕧roð໻tré㦴Ācu㨆㨋r;쀀𝓋Ābp㨐㨘nĀEe㦀㨖»㥾nĀEe㦒㨞»㦐igzag;榚΀cefoprs㨶㨻㩖㩛㩔㩡㩪irc;䅵Ādi㩀㩑Ābg㩅㩉ar;機eĀ;qᗺ㩏;扙erp;愘r;쀀𝔴pf;쀀𝕨Ā;eᑹ㩦atèᑹcr;쀀𝓌ૣណ㪇\0㪋\0㪐㪛\0\0㪝㪨㪫㪯\0\0㫃㫎\0㫘ៜ៟tré៑r;쀀𝔵ĀAa㪔㪗ròσrò৶;䎾ĀAa㪡㪤ròθrò৫að✓is;拻ƀdptឤ㪵㪾Āfl㪺ឩ;쀀𝕩imåឲĀAa㫇㫊ròώròਁĀcq㫒ីr;쀀𝓍Āpt៖㫜ré។Ѐacefiosu㫰㫽㬈㬌㬑㬕㬛㬡cĀuy㫶㫻te耻ý䃽;䑏Āiy㬂㬆rc;䅷;䑋n耻¥䂥r;쀀𝔶cy;䑗pf;쀀𝕪cr;쀀𝓎Ācm㬦㬩y;䑎l耻ÿ䃿Ԁacdefhiosw㭂㭈㭔㭘㭤㭩㭭㭴㭺㮀cute;䅺Āay㭍㭒ron;䅾;䐷ot;䅼Āet㭝㭡træᕟa;䎶r;쀀𝔷cy;䐶grarr;懝pf;쀀𝕫cr;쀀𝓏Ājn㮅㮇;怍j;怌'.split("").map(e=>e.charCodeAt(0))),ph=new Uint16Array("Ȁaglq	\x1Bɭ\0\0p;䀦os;䀧t;䀾t;䀼uot;䀢".split("").map(e=>e.charCodeAt(0)));var Ni;const hh=new Map([[0,65533],[128,8364],[130,8218],[131,402],[132,8222],[133,8230],[134,8224],[135,8225],[136,710],[137,8240],[138,352],[139,8249],[140,338],[142,381],[145,8216],[146,8217],[147,8220],[148,8221],[149,8226],[150,8211],[151,8212],[152,732],[153,8482],[154,353],[155,8250],[156,339],[158,382],[159,376]]),mh=(Ni=String.fromCodePoint)!==null&&Ni!==void 0?Ni:function(e){let t="";return e>65535&&(e-=65536,t+=String.fromCharCode(e>>>10&1023|55296),e=56320|e&1023),t+=String.fromCharCode(e),t};function gh(e){var t;return e>=55296&&e<=57343||e>1114111?65533:(t=hh.get(e))!==null&&t!==void 0?t:e}var Ie;(function(e){e[e.NUM=35]="NUM",e[e.SEMI=59]="SEMI",e[e.EQUALS=61]="EQUALS",e[e.ZERO=48]="ZERO",e[e.NINE=57]="NINE",e[e.LOWER_A=97]="LOWER_A",e[e.LOWER_F=102]="LOWER_F",e[e.LOWER_X=120]="LOWER_X",e[e.LOWER_Z=122]="LOWER_Z",e[e.UPPER_A=65]="UPPER_A",e[e.UPPER_F=70]="UPPER_F",e[e.UPPER_Z=90]="UPPER_Z"})(Ie||(Ie={}));const bh=32;var Gt;(function(e){e[e.VALUE_LENGTH=49152]="VALUE_LENGTH",e[e.BRANCH_LENGTH=16256]="BRANCH_LENGTH",e[e.JUMP_TABLE=127]="JUMP_TABLE"})(Gt||(Gt={}));function lr(e){return e>=Ie.ZERO&&e<=Ie.NINE}function _h(e){return e>=Ie.UPPER_A&&e<=Ie.UPPER_F||e>=Ie.LOWER_A&&e<=Ie.LOWER_F}function xh(e){return e>=Ie.UPPER_A&&e<=Ie.UPPER_Z||e>=Ie.LOWER_A&&e<=Ie.LOWER_Z||lr(e)}function yh(e){return e===Ie.EQUALS||xh(e)}var Me;(function(e){e[e.EntityStart=0]="EntityStart",e[e.NumericStart=1]="NumericStart",e[e.NumericDecimal=2]="NumericDecimal",e[e.NumericHex=3]="NumericHex",e[e.NamedEntity=4]="NamedEntity"})(Me||(Me={}));var Qt;(function(e){e[e.Legacy=0]="Legacy",e[e.Strict=1]="Strict",e[e.Attribute=2]="Attribute"})(Qt||(Qt={}));class wh{constructor(t,n,u){this.decodeTree=t,this.emitCodePoint=n,this.errors=u,this.state=Me.EntityStart,this.consumed=1,this.result=0,this.treeIndex=0,this.excess=1,this.decodeMode=Qt.Strict}startEntity(t){this.decodeMode=t,this.state=Me.EntityStart,this.result=0,this.treeIndex=0,this.excess=1,this.consumed=1}write(t,n){switch(this.state){case Me.EntityStart:return t.charCodeAt(n)===Ie.NUM?(this.state=Me.NumericStart,this.consumed+=1,this.stateNumericStart(t,n+1)):(this.state=Me.NamedEntity,this.stateNamedEntity(t,n));case Me.NumericStart:return this.stateNumericStart(t,n);case Me.NumericDecimal:return this.stateNumericDecimal(t,n);case Me.NumericHex:return this.stateNumericHex(t,n);case Me.NamedEntity:return this.stateNamedEntity(t,n)}}stateNumericStart(t,n){return n>=t.length?-1:(t.charCodeAt(n)|bh)===Ie.LOWER_X?(this.state=Me.NumericHex,this.consumed+=1,this.stateNumericHex(t,n+1)):(this.state=Me.NumericDecimal,this.stateNumericDecimal(t,n))}addToNumericResult(t,n,u,i){if(n!==u){const r=u-n;this.result=this.result*Math.pow(i,r)+parseInt(t.substr(n,r),i),this.consumed+=r}}stateNumericHex(t,n){const u=n;for(;n<t.length;){const i=t.charCodeAt(n);if(lr(i)||_h(i))n+=1;else return this.addToNumericResult(t,u,n,16),this.emitNumericEntity(i,3)}return this.addToNumericResult(t,u,n,16),-1}stateNumericDecimal(t,n){const u=n;for(;n<t.length;){const i=t.charCodeAt(n);if(lr(i))n+=1;else return this.addToNumericResult(t,u,n,10),this.emitNumericEntity(i,2)}return this.addToNumericResult(t,u,n,10),-1}emitNumericEntity(t,n){var u;if(this.consumed<=n)return(u=this.errors)===null||u===void 0||u.absenceOfDigitsInNumericCharacterReference(this.consumed),0;if(t===Ie.SEMI)this.consumed+=1;else if(this.decodeMode===Qt.Strict)return 0;return this.emitCodePoint(gh(this.result),this.consumed),this.errors&&(t!==Ie.SEMI&&this.errors.missingSemicolonAfterCharacterReference(),this.errors.validateNumericCharacterReference(this.result)),this.consumed}stateNamedEntity(t,n){const{decodeTree:u}=this;let i=u[this.treeIndex],r=(i&Gt.VALUE_LENGTH)>>14;for(;n<t.length;n++,this.excess++){const o=t.charCodeAt(n);if(this.treeIndex=Eh(u,i,this.treeIndex+Math.max(1,r),o),this.treeIndex<0)return this.result===0||this.decodeMode===Qt.Attribute&&(r===0||yh(o))?0:this.emitNotTerminatedNamedEntity();if(i=u[this.treeIndex],r=(i&Gt.VALUE_LENGTH)>>14,r!==0){if(o===Ie.SEMI)return this.emitNamedEntityData(this.treeIndex,r,this.consumed+this.excess);this.decodeMode!==Qt.Strict&&(this.result=this.treeIndex,this.consumed+=this.excess,this.excess=0)}}return-1}emitNotTerminatedNamedEntity(){var t;const{result:n,decodeTree:u}=this,i=(u[n]&Gt.VALUE_LENGTH)>>14;return this.emitNamedEntityData(n,i,this.consumed),(t=this.errors)===null||t===void 0||t.missingSemicolonAfterCharacterReference(),this.consumed}emitNamedEntityData(t,n,u){const{decodeTree:i}=this;return this.emitCodePoint(n===1?i[t]&~Gt.VALUE_LENGTH:i[t+1],u),n===3&&this.emitCodePoint(i[t+2],u),u}end(){var t;switch(this.state){case Me.NamedEntity:return this.result!==0&&(this.decodeMode!==Qt.Attribute||this.result===this.treeIndex)?this.emitNotTerminatedNamedEntity():0;case Me.NumericDecimal:return this.emitNumericEntity(0,2);case Me.NumericHex:return this.emitNumericEntity(0,3);case Me.NumericStart:return(t=this.errors)===null||t===void 0||t.absenceOfDigitsInNumericCharacterReference(this.consumed),0;case Me.EntityStart:return 0}}}function va(e){let t="";const n=new wh(e,u=>t+=mh(u));return function(i,r){let o=0,s=0;for(;(s=i.indexOf("&",s))>=0;){t+=i.slice(o,s),n.startEntity(r);const a=n.write(i,s+1);if(a<0){o=s+n.end();break}o=s+a,s=a===0?o+1:o}const c=t+i.slice(o);return t="",c}}function Eh(e,t,n,u){const i=(t&Gt.BRANCH_LENGTH)>>7,r=t&Gt.JUMP_TABLE;if(i===0)return r!==0&&u===r?n:-1;if(r){const c=u-r;return c<0||c>=i?-1:e[n+c]-1}let o=n,s=o+i-1;for(;o<=s;){const c=o+s>>>1,a=e[c];if(a<u)o=c+1;else if(a>u)s=c-1;else return e[c+i]}return-1}const ka=va(dh);va(ph);function vh(e,t=Qt.Legacy){return ka(e,t)}function kh(e){return ka(e,Qt.Strict)}function Ah(e){return Object.prototype.toString.call(e)}function zr(e){return Ah(e)==="[object String]"}const Ch=Object.prototype.hasOwnProperty;function Sh(e,t){return Ch.call(e,t)}function mi(e){return Array.prototype.slice.call(arguments,1).forEach(function(n){if(n){if(typeof n!="object")throw new TypeError(n+"must be object");Object.keys(n).forEach(function(u){e[u]=n[u]})}}),e}function Dh(e,t,n){return[].concat(e.slice(0,t),n,e.slice(t+1))}function Ur(e){return!(e>=55296&&e<=57343||e>=64976&&e<=65007||(e&65535)===65535||(e&65535)===65534||e>=0&&e<=8||e===11||e>=14&&e<=31||e>=127&&e<=159||e>1114111)}function cu(e){if(e>65535){e-=65536;const t=55296+(e>>10),n=56320+(e&1023);return String.fromCharCode(t,n)}return String.fromCharCode(e)}const Aa=/\\([!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~])/g,Th=/&([a-z#][a-z0-9]{1,31});/gi,Ph=new RegExp(Aa.source+"|"+Th.source,"gi"),Mh=/^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))$/i;function qh(e,t){if(t.charCodeAt(0)===35&&Mh.test(t)){const u=t[1].toLowerCase()==="x"?parseInt(t.slice(2),16):parseInt(t.slice(1),10);return Ur(u)?cu(u):e}const n=vh(e);return n!==e?n:e}function Fh(e){return e.indexOf("\\")<0?e:e.replace(Aa,"$1")}function Fn(e){return e.indexOf("\\")<0&&e.indexOf("&")<0?e:e.replace(Ph,function(t,n,u){return n||qh(t,u)})}const Ih=/[&<>"]/,Qh=/[&<>"]/g,Rh={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"};function Oh(e){return Rh[e]}function Jt(e){return Ih.test(e)?e.replace(Qh,Oh):e}const Lh=/[.?*+^$[\]\\(){}|-]/g;function Bh(e){return e.replace(Lh,"\\$&")}function we(e){switch(e){case 9:case 32:return!0}return!1}function au(e){if(e>=8192&&e<=8202)return!0;switch(e){case 9:case 10:case 11:case 12:case 13:case 32:case 160:case 5760:case 8239:case 8287:case 12288:return!0}return!1}function Ca(e){return jr.test(e)||wa.test(e)}function lu(e){return Ca(cu(e))}function fu(e){switch(e){case 33:case 34:case 35:case 36:case 37:case 38:case 39:case 40:case 41:case 42:case 43:case 44:case 45:case 46:case 47:case 58:case 59:case 60:case 61:case 62:case 63:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 123:case 124:case 125:case 126:return!0;default:return!1}}function gi(e){return e=e.trim().replace(/\s+/g," "),"ẞ".toLowerCase()==="Ṿ"&&(e=e.replace(/ẞ/g,"ß")),e.toLowerCase().toUpperCase()}function ms(e){return e===32||e===9||e===10||e===13}function bi(e){let t=0;for(;t<e.length&&ms(e.charCodeAt(t));t++);let n=e.length-1;for(;n>=t&&ms(e.charCodeAt(n));n--);return e.slice(t,n+1)}const Nh={mdurl:ah,ucmicro:fh},$h=Object.freeze(Object.defineProperty({__proto__:null,arrayReplaceAt:Dh,asciiTrim:bi,assign:mi,escapeHtml:Jt,escapeRE:Bh,fromCodePoint:cu,has:Sh,isMdAsciiPunct:fu,isPunctChar:Ca,isPunctCharCode:lu,isSpace:we,isString:zr,isValidEntityCode:Ur,isWhiteSpace:au,lib:Nh,normalizeReference:gi,unescapeAll:Fn,unescapeMd:Fh},Symbol.toStringTag,{value:"Module"}));function Hh(e,t,n){let u,i,r,o;const s=e.posMax,c=e.pos;for(e.pos=t+1,u=1;e.pos<s;){if(r=e.src.charCodeAt(e.pos),r===93&&(u--,u===0)){i=!0;break}if(o=e.pos,e.md.inline.skipToken(e),r===91){if(o===e.pos-1)u++;else if(n)return e.pos=c,-1}}let a=-1;return i&&(a=e.pos),e.pos=c,a}function jh(e,t,n){let u,i=t;const r={ok:!1,pos:0,str:""};if(e.charCodeAt(i)===60){for(i++;i<n;){if(u=e.charCodeAt(i),u===10||u===60)return r;if(u===62)return r.pos=i+1,r.str=Fn(e.slice(t+1,i)),r.ok=!0,r;if(u===92&&i+1<n){i+=2;continue}i++}return r}let o=0;for(;i<n&&(u=e.charCodeAt(i),!(u===32||u<32||u===127));){if(u===92&&i+1<n){if(e.charCodeAt(i+1)===32){i++;continue}i+=2;continue}if(u===40&&(o++,o>32))return r;if(u===41){if(o===0)break;o--}i++}return t===i||o!==0||(r.str=Fn(e.slice(t,i)),r.pos=i,r.ok=!0),r}function zh(e,t,n,u){let i,r=t;const o={ok:!1,can_continue:!1,pos:0,str:"",marker:0};if(u)o.str=u.str,o.marker=u.marker;else{if(r>=n)return o;let s=e.charCodeAt(r);if(s!==34&&s!==39&&s!==40)return o;t++,r++,s===40&&(s=41),o.marker=s}for(;r<n;){if(i=e.charCodeAt(r),i===o.marker)return o.pos=r+1,o.str+=Fn(e.slice(t,r)),o.ok=!0,o;if(i===40&&o.marker===41)return o;i===92&&r+1<n&&r++,r++}return o.can_continue=!0,o.str+=Fn(e.slice(t,r)),o}const Uh=Object.freeze(Object.defineProperty({__proto__:null,parseLinkDestination:jh,parseLinkLabel:Hh,parseLinkTitle:zh},Symbol.toStringTag,{value:"Module"})),Ct={};Ct.code_inline=function(e,t,n,u,i){const r=e[t];return"<code"+i.renderAttrs(r)+">"+Jt(r.content)+"</code>"};Ct.code_block=function(e,t,n,u,i){const r=e[t];return"<pre"+i.renderAttrs(r)+"><code>"+Jt(e[t].content)+`</code></pre>
`};Ct.fence=function(e,t,n,u,i){const r=e[t],o=r.info?Fn(r.info).trim():"";let s="",c="";if(o){const l=o.split(/(\s+)/g);s=l[0],c=l.slice(2).join("")}let a;if(n.highlight?a=n.highlight(r.content,s,c)||Jt(r.content):a=Jt(r.content),a.indexOf("<pre")===0)return a+`
`;if(o){const l=r.attrIndex("class"),f=r.attrs?r.attrs.slice():[];l<0?f.push(["class",n.langPrefix+s]):(f[l]=f[l].slice(),f[l][1]+=" "+n.langPrefix+s);const d={attrs:f};return`<pre><code${i.renderAttrs(d)}>${a}</code></pre>
`}return`<pre><code${i.renderAttrs(r)}>${a}</code></pre>
`};Ct.image=function(e,t,n,u,i){const r=e[t];return r.attrs[r.attrIndex("alt")][1]=i.renderInlineAsText(r.children,n,u),i.renderToken(e,t,n)};Ct.hardbreak=function(e,t,n){return n.xhtmlOut?`<br />
`:`<br>
`};Ct.softbreak=function(e,t,n){return n.breaks?n.xhtmlOut?`<br />
`:`<br>
`:`
`};Ct.text=function(e,t){return Jt(e[t].content)};Ct.html_block=function(e,t){return e[t].content};Ct.html_inline=function(e,t){return e[t].content};function In(){this.rules=mi({},Ct)}In.prototype.renderAttrs=function(t){let n,u,i;if(!t.attrs)return"";for(i="",n=0,u=t.attrs.length;n<u;n++)i+=" "+Jt(t.attrs[n][0])+'="'+Jt(t.attrs[n][1])+'"';return i};In.prototype.renderToken=function(t,n,u){const i=t[n];let r="";if(i.hidden)return"";i.block&&i.nesting!==-1&&n&&t[n-1].hidden&&(r+=`
`),r+=(i.nesting===-1?"</":"<")+i.tag,r+=this.renderAttrs(i),i.nesting===0&&u.xhtmlOut&&(r+=" /");let o=!1;if(i.block&&(o=!0,i.nesting===1&&n+1<t.length)){const s=t[n+1];(s.type==="inline"||s.hidden||s.nesting===-1&&s.tag===i.tag)&&(o=!1)}return r+=o?`>
`:">",r};In.prototype.renderInline=function(e,t,n){let u="";const i=this.rules;for(let r=0,o=e.length;r<o;r++){const s=e[r].type;typeof i[s]<"u"?u+=i[s](e,r,t,n,this):u+=this.renderToken(e,r,t)}return u};In.prototype.renderInlineAsText=function(e,t,n){let u="";for(let i=0,r=e.length;i<r;i++)switch(e[i].type){case"text":u+=e[i].content;break;case"image":u+=this.renderInlineAsText(e[i].children,t,n);break;case"html_inline":case"html_block":u+=e[i].content;break;case"softbreak":case"hardbreak":u+=`
`;break}return u};In.prototype.render=function(e,t,n){let u="";const i=this.rules;for(let r=0,o=e.length;r<o;r++){const s=e[r].type;s==="inline"?u+=this.renderInline(e[r].children,t,n):typeof i[s]<"u"?u+=i[s](e,r,t,n,this):u+=this.renderToken(e,r,t,n)}return u};function We(){this.__rules__=[],this.__cache__=null}We.prototype.__find__=function(e){for(let t=0;t<this.__rules__.length;t++)if(this.__rules__[t].name===e)return t;return-1};We.prototype.__compile__=function(){const e=this,t=[""];e.__rules__.forEach(function(n){n.enabled&&n.alt.forEach(function(u){t.indexOf(u)<0&&t.push(u)})}),e.__cache__={},t.forEach(function(n){e.__cache__[n]=[],e.__rules__.forEach(function(u){u.enabled&&(n&&u.alt.indexOf(n)<0||e.__cache__[n].push(u.fn))})})};We.prototype.at=function(e,t,n){const u=this.__find__(e),i=n||{};if(u===-1)throw new Error("Parser rule not found: "+e);this.__rules__[u].fn=t,this.__rules__[u].alt=i.alt||[],this.__cache__=null};We.prototype.before=function(e,t,n,u){const i=this.__find__(e),r=u||{};if(i===-1)throw new Error("Parser rule not found: "+e);this.__rules__.splice(i,0,{name:t,enabled:!0,fn:n,alt:r.alt||[]}),this.__cache__=null};We.prototype.after=function(e,t,n,u){const i=this.__find__(e),r=u||{};if(i===-1)throw new Error("Parser rule not found: "+e);this.__rules__.splice(i+1,0,{name:t,enabled:!0,fn:n,alt:r.alt||[]}),this.__cache__=null};We.prototype.push=function(e,t,n){const u=n||{};this.__rules__.push({name:e,enabled:!0,fn:t,alt:u.alt||[]}),this.__cache__=null};We.prototype.enable=function(e,t){Array.isArray(e)||(e=[e]);const n=[];return e.forEach(function(u){const i=this.__find__(u);if(i<0){if(t)return;throw new Error("Rules manager: invalid rule name "+u)}this.__rules__[i].enabled=!0,n.push(u)},this),this.__cache__=null,n};We.prototype.enableOnly=function(e,t){Array.isArray(e)||(e=[e]),this.__rules__.forEach(function(n){n.enabled=!1}),this.enable(e,t)};We.prototype.disable=function(e,t){Array.isArray(e)||(e=[e]);const n=[];return e.forEach(function(u){const i=this.__find__(u);if(i<0){if(t)return;throw new Error("Rules manager: invalid rule name "+u)}this.__rules__[i].enabled=!1,n.push(u)},this),this.__cache__=null,n};We.prototype.getRules=function(e){return this.__cache__===null&&this.__compile__(),this.__cache__[e]||[]};function ht(e,t,n){this.type=e,this.tag=t,this.attrs=null,this.map=null,this.nesting=n,this.level=0,this.children=null,this.content="",this.markup="",this.info="",this.meta=null,this.block=!1,this.hidden=!1}ht.prototype.attrIndex=function(t){if(!this.attrs)return-1;const n=this.attrs;for(let u=0,i=n.length;u<i;u++)if(n[u][0]===t)return u;return-1};ht.prototype.attrPush=function(t){this.attrs?this.attrs.push(t):this.attrs=[t]};ht.prototype.attrSet=function(t,n){const u=this.attrIndex(t),i=[t,n];u<0?this.attrPush(i):this.attrs[u]=i};ht.prototype.attrGet=function(t){const n=this.attrIndex(t);let u=null;return n>=0&&(u=this.attrs[n][1]),u};ht.prototype.attrJoin=function(t,n){const u=this.attrIndex(t);u<0?this.attrPush([t,n]):this.attrs[u][1]=this.attrs[u][1]+" "+n};function Sa(e,t,n){this.src=e,this.env=n,this.tokens=[],this.inlineMode=!1,this.md=t}Sa.prototype.Token=ht;const Vh=/\r\n?|\n/g,Gh=/\0/g;function Wh(e){let t;t=e.src.replace(Vh,`
`),t=t.replace(Gh,"�"),e.src=t}function Kh(e){let t;e.inlineMode?(t=new e.Token("inline","",0),t.content=e.src,t.map=[0,1],t.children=[],e.tokens.push(t)):e.md.block.parse(e.src,e.md,e.env,e.tokens)}function Xh(e){const t=e.tokens;for(let n=0,u=t.length;n<u;n++){const i=t[n];i.type==="inline"&&e.md.inline.parse(i.content,e.md,e.env,i.children)}}function Zh(e){return/^<a[>\s]/i.test(e)}function Jh(e){return/^<\/a\s*>/i.test(e)}function Yh(e){const t=e.tokens;if(e.md.options.linkify)for(let n=0,u=t.length;n<u;n++){if(t[n].type!=="inline"||!e.md.linkify.pretest(t[n].content))continue;const i=t[n].children,r=[];let o=0;for(let s=i.length-1;s>=0;s--){const c=i[s];if(c.type==="link_close"){for(s--;i[s].level!==c.level&&i[s].type!=="link_open";)s--;continue}if(c.type==="html_inline"&&(Zh(c.content)&&o>0&&o--,Jh(c.content)&&o++),!(o>0)&&c.type==="text"&&e.md.linkify.test(c.content)){const a=c.content;let l=e.md.linkify.match(a);const f=[];let d=c.level,p=0;l.length>0&&l[0].index===0&&s>0&&i[s-1].type==="text_special"&&(l=l.slice(1));for(let m=0;m<l.length;m++){const w=l[m].url,A=e.md.normalizeLink(w);if(!e.md.validateLink(A))continue;let S=l[m].text;l[m].schema?l[m].schema==="mailto:"&&!/^mailto:/i.test(S)?S=e.md.normalizeLinkText("mailto:"+S).replace(/^mailto:/,""):S=e.md.normalizeLinkText(S):S=e.md.normalizeLinkText("http://"+S).replace(/^http:\/\//,"");const E=l[m].index;if(E>p){const M=new e.Token("text","",0);M.content=a.slice(p,E),M.level=d,f.push(M)}const g=new e.Token("link_open","a",1);g.attrs=[["href",A]],g.level=d++,g.markup="linkify",g.info="auto",f.push(g);const _=new e.Token("text","",0);_.content=S,_.level=d,f.push(_);const v=new e.Token("link_close","a",-1);v.level=--d,v.markup="linkify",v.info="auto",f.push(v),p=l[m].lastIndex}if(p<a.length){const m=new e.Token("text","",0);m.content=a.slice(p),m.level=d,f.push(m)}r.push({index:s,nodes:f})}}if(r.length>0){let s=i.length;for(const f of r)s+=f.nodes.length-1;const c=new Array(s);let a=0,l=0;r.reverse();for(let f=0;f<i.length;f++){const d=r[a];if((d==null?void 0:d.index)===f){for(const p of d.nodes)c[l++]=p;a++}else c[l++]=i[f]}t[n].children=c}}}const Da=/\+-|\.\.|\?\?\?\?|!!!!|,,|--/,e2=/\((c|tm|r)\)/i,t2=/\((c|tm|r)\)/ig,n2={c:"©",r:"®",tm:"™"};function u2(e,t){return n2[t.toLowerCase()]}function i2(e){let t=0;for(let n=e.length-1;n>=0;n--){const u=e[n];u.type==="text"&&!t&&(u.content=u.content.replace(t2,u2)),u.type==="link_open"&&u.info==="auto"&&t--,u.type==="link_close"&&u.info==="auto"&&t++}}function r2(e){let t=0;for(let n=e.length-1;n>=0;n--){const u=e[n];u.type==="text"&&!t&&Da.test(u.content)&&(u.content=u.content.replace(/\+-/g,"±").replace(/\.{2,}/g,"…").replace(/([?!])…/g,"$1..").replace(/([?!]){4,}/g,"$1$1$1").replace(/,{2,}/g,",").replace(/(^|[^-])---(?=[^-]|$)/mg,"$1—").replace(/(^|\s)--(?=\s|$)/mg,"$1–").replace(/(^|[^-\s])--(?=[^-\s]|$)/mg,"$1–")),u.type==="link_open"&&u.info==="auto"&&t--,u.type==="link_close"&&u.info==="auto"&&t++}}function o2(e){let t;if(e.md.options.typographer)for(t=e.tokens.length-1;t>=0;t--)e.tokens[t].type==="inline"&&(e2.test(e.tokens[t].content)&&i2(e.tokens[t].children),Da.test(e.tokens[t].content)&&r2(e.tokens[t].children))}const s2=/['"]/,gs=/['"]/g,bs="’",c2=1e3;function _s(e,t,n){for(;e.length>n;){const u=e.pop();u.isSingleQuote?t.single=u.prevSameQuoteIdx:t.double=u.prevSameQuoteIdx}}function Tu(e,t,n,u){e[t]||(e[t]=[]),e[t].push({pos:n,ch:u})}function a2(e,t){let n="",u=0;t.sort((i,r)=>i.pos-r.pos);for(let i=0;i<t.length;i++){const r=t[i];n+=e.slice(u,r.pos)+r.ch,u=r.pos+1}return n+e.slice(u)}function l2(e,t){let n;const u=[],i={single:-1,double:-1},r={};for(let o=0;o<e.length;o++){const s=e[o],c=e[o].level;for(n=u.length-1;n>=0&&!(u[n].level<=c);n--);if(_s(u,i,n+1),s.type!=="text")continue;const a=s.content;let l=0;const f=a.length;e:for(;l<f;){gs.lastIndex=l;const d=gs.exec(a);if(!d)break;let p=!0,m=!0;l=d.index+1;const w=d[0]==="'";let A=32;if(d.index-1>=0)A=a.charCodeAt(d.index-1);else for(n=o-1;n>=0&&!(e[n].type==="softbreak"||e[n].type==="hardbreak");n--)if(e[n].content){A=e[n].content.charCodeAt(e[n].content.length-1);break}let S=32;if(l<f)S=a.charCodeAt(l);else for(n=o+1;n<e.length&&!(e[n].type==="softbreak"||e[n].type==="hardbreak");n++)if(e[n].content){S=e[n].content.charCodeAt(0);break}const E=fu(A)||lu(A),g=fu(S)||lu(S),_=au(A),v=au(S);if(v?p=!1:g&&(_||E||(p=!1)),_?m=!1:E&&(v||g||(m=!1)),S===34&&d[0]==='"'&&A>=48&&A<=57&&(m=p=!1),p&&m&&(p=E,m=g),!p&&!m){w&&Tu(r,o,d.index,bs);continue}if(m&&(n=w?i.single:i.double,n>=0&&u[n].level===c)){const M=u[n];let q,G;w?(q=t.md.options.quotes[2],G=t.md.options.quotes[3]):(q=t.md.options.quotes[0],G=t.md.options.quotes[1]),Tu(r,o,d.index,G),Tu(r,M.tokenIdx,M.contentPos,q),_s(u,i,n);continue e}if(p){if(u.length>=c2)return;u.push({tokenIdx:o,contentPos:d.index,isSingleQuote:w,level:c,prevSameQuoteIdx:w?i.single:i.double}),w?i.single=u.length-1:i.double=u.length-1}else m&&w&&Tu(r,o,d.index,bs)}}Object.keys(r).forEach(function(o){e[o].content=a2(e[o].content,r[o])})}function f2(e){if(e.md.options.typographer)for(let t=e.tokens.length-1;t>=0;t--)e.tokens[t].type!=="inline"||!s2.test(e.tokens[t].content)||l2(e.tokens[t].children,e)}function d2(e){let t,n;const u=e.tokens,i=u.length;for(let r=0;r<i;r++){if(u[r].type!=="inline")continue;const o=u[r].children,s=o.length;for(t=0;t<s;t++)o[t].type==="text_special"&&(o[t].type="text");for(t=n=0;t<s;t++)o[t].type==="text"&&t+1<s&&o[t+1].type==="text"?o[t+1].content=o[t].content+o[t+1].content:(t!==n&&(o[n]=o[t]),n++);t!==n&&(o.length=n)}}const $i=[["normalize",Wh],["block",Kh],["inline",Xh],["linkify",Yh],["replacements",o2],["smartquotes",f2],["text_join",d2]];function Vr(){this.ruler=new We;for(let e=0;e<$i.length;e++)this.ruler.push($i[e][0],$i[e][1])}Vr.prototype.process=function(e){const t=this.ruler.getRules("");for(let n=0,u=t.length;n<u;n++)t[n](e)};Vr.prototype.State=Sa;function St(e,t,n,u){this.src=e,this.md=t,this.env=n,this.tokens=u,this.bMarks=[],this.eMarks=[],this.tShift=[],this.sCount=[],this.bsCount=[],this.blkIndent=0,this.line=0,this.lineMax=0,this.tight=!1,this.ddIndent=-1,this.listIndent=-1,this.parentType="root",this.level=0;const i=this.src;for(let r=0,o=0,s=0,c=0,a=i.length,l=!1;o<a;o++){const f=i.charCodeAt(o);if(!l)if(we(f)){s++,f===9?c+=4-c%4:c++;continue}else l=!0;(f===10||o===a-1)&&(f!==10&&o++,this.bMarks.push(r),this.eMarks.push(o),this.tShift.push(s),this.sCount.push(c),this.bsCount.push(0),l=!1,s=0,c=0,r=o+1)}this.bMarks.push(i.length),this.eMarks.push(i.length),this.tShift.push(0),this.sCount.push(0),this.bsCount.push(0),this.lineMax=this.bMarks.length-1}St.prototype.push=function(e,t,n){const u=new ht(e,t,n);return u.block=!0,n<0&&this.level--,u.level=this.level,n>0&&this.level++,this.tokens.push(u),u};St.prototype.isEmpty=function(t){return this.bMarks[t]+this.tShift[t]>=this.eMarks[t]};St.prototype.skipEmptyLines=function(t){for(let n=this.lineMax;t<n&&!(this.bMarks[t]+this.tShift[t]<this.eMarks[t]);t++);return t};St.prototype.skipSpaces=function(t){for(let n=this.src.length;t<n;t++){const u=this.src.charCodeAt(t);if(!we(u))break}return t};St.prototype.skipSpacesBack=function(t,n){if(t<=n)return t;for(;t>n;)if(!we(this.src.charCodeAt(--t)))return t+1;return t};St.prototype.skipChars=function(t,n){for(let u=this.src.length;t<u&&this.src.charCodeAt(t)===n;t++);return t};St.prototype.skipCharsBack=function(t,n,u){if(t<=u)return t;for(;t>u;)if(n!==this.src.charCodeAt(--t))return t+1;return t};St.prototype.getLines=function(t,n,u,i){if(t>=n)return"";const r=new Array(n-t);for(let o=0,s=t;s<n;s++,o++){let c=0;const a=this.bMarks[s];let l=a,f;for(s+1<n||i?f=this.eMarks[s]+1:f=this.eMarks[s];l<f&&c<u;){const d=this.src.charCodeAt(l);if(we(d))d===9?c+=4-(c+this.bsCount[s])%4:c++;else if(l-a<this.tShift[s])c++;else break;l++}c>u?r[o]=new Array(c-u+1).join(" ")+this.src.slice(l,f):r[o]=this.src.slice(l,f)}return r.join("")};St.prototype.Token=ht;const p2=65536;function Hi(e,t){const n=e.bMarks[t]+e.tShift[t],u=e.eMarks[t];return e.src.slice(n,u)}function xs(e){const t=[],n=e.length;let u=0,i=e.charCodeAt(u),r=!1,o=0,s="";for(;u<n;)i===124&&(r?(s+=e.substring(o,u-1),o=u):(t.push(s+e.substring(o,u)),s="",o=u+1)),r=i===92,u++,i=e.charCodeAt(u);return t.push(s+e.substring(o)),t}function h2(e,t,n,u){if(t+2>n)return!1;let i=t+1;if(e.sCount[i]<e.blkIndent||e.sCount[i]-e.blkIndent>=4)return!1;let r=e.bMarks[i]+e.tShift[i];if(r>=e.eMarks[i])return!1;const o=e.src.charCodeAt(r++);if(o!==124&&o!==45&&o!==58||r>=e.eMarks[i])return!1;const s=e.src.charCodeAt(r++);if(s!==124&&s!==45&&s!==58&&!we(s)||o===45&&we(s))return!1;for(;r<e.eMarks[i];){const _=e.src.charCodeAt(r);if(_!==124&&_!==45&&_!==58&&!we(_))return!1;r++}let c=Hi(e,t+1),a=c.split("|");const l=[];for(let _=0;_<a.length;_++){const v=a[_].trim();if(!v){if(_===0||_===a.length-1)continue;return!1}if(!/^:?-+:?$/.test(v))return!1;v.charCodeAt(v.length-1)===58?l.push(v.charCodeAt(0)===58?"center":"right"):v.charCodeAt(0)===58?l.push("left"):l.push("")}if(c=Hi(e,t).trim(),c.indexOf("|")===-1||e.sCount[t]-e.blkIndent>=4)return!1;a=xs(c),a.length&&a[0]===""&&a.shift(),a.length&&a[a.length-1]===""&&a.pop();const f=a.length;if(f===0||f!==l.length)return!1;if(u)return!0;const d=e.parentType;e.parentType="table";const p=e.md.block.ruler.getRules("blockquote"),m=e.push("table_open","table",1),w=[t,0];m.map=w;const A=e.push("thead_open","thead",1);A.map=[t,t+1];const S=e.push("tr_open","tr",1);S.map=[t,t+1];for(let _=0;_<a.length;_++){const v=e.push("th_open","th",1);l[_]&&(v.attrs=[["style","text-align:"+l[_]]]);const M=e.push("inline","",0);M.content=a[_].trim(),M.children=[],e.push("th_close","th",-1)}e.push("tr_close","tr",-1),e.push("thead_close","thead",-1);let E,g=0;for(i=t+2;i<n&&!(e.sCount[i]<e.blkIndent);i++){let _=!1;for(let M=0,q=p.length;M<q;M++)if(p[M](e,i,n,!0)){_=!0;break}if(_||(c=Hi(e,i).trim(),!c)||e.sCount[i]-e.blkIndent>=4||(a=xs(c),a.length&&a[0]===""&&a.shift(),a.length&&a[a.length-1]===""&&a.pop(),g+=f-a.length,g>p2))break;if(i===t+2){const M=e.push("tbody_open","tbody",1);M.map=E=[t+2,0]}const v=e.push("tr_open","tr",1);v.map=[i,i+1];for(let M=0;M<f;M++){const q=e.push("td_open","td",1);l[M]&&(q.attrs=[["style","text-align:"+l[M]]]);const G=e.push("inline","",0);G.content=a[M]?a[M].trim():"",G.children=[],e.push("td_close","td",-1)}e.push("tr_close","tr",-1)}return E&&(e.push("tbody_close","tbody",-1),E[1]=i),e.push("table_close","table",-1),w[1]=i,e.parentType=d,e.line=i,!0}function m2(e,t,n){if(e.sCount[t]-e.blkIndent<4)return!1;let u=t+1,i=u;for(;u<n;){if(e.isEmpty(u)){u++;continue}if(e.sCount[u]-e.blkIndent>=4){u++,i=u;continue}break}e.line=i;const r=e.push("code_block","code",0);return r.content=e.getLines(t,i,4+e.blkIndent,!1)+`
`,r.map=[t,e.line],!0}function g2(e,t,n,u){let i=e.bMarks[t]+e.tShift[t],r=e.eMarks[t];if(e.sCount[t]-e.blkIndent>=4||i+3>r)return!1;const o=e.src.charCodeAt(i);if(o!==126&&o!==96)return!1;let s=i;i=e.skipChars(i,o);let c=i-s;if(c<3)return!1;const a=e.src.slice(s,i),l=e.src.slice(i,r);if(o===96&&l.indexOf(String.fromCharCode(o))>=0)return!1;if(u)return!0;let f=t,d=!1;for(;f++,!(f>=n||(i=s=e.bMarks[f]+e.tShift[f],r=e.eMarks[f],i<r&&e.sCount[f]<e.blkIndent));)if(e.src.charCodeAt(i)===o&&!(e.sCount[f]-e.blkIndent>=4)&&(i=e.skipChars(i,o),!(i-s<c)&&(i=e.skipSpaces(i),!(i<r)))){d=!0;break}c=e.sCount[t],e.line=f+(d?1:0);const p=e.push("fence","code",0);return p.info=l,p.content=e.getLines(t+1,f,c,!0),p.markup=a,p.map=[t,e.line],!0}function b2(e,t,n,u){let i=e.bMarks[t]+e.tShift[t],r=e.eMarks[t];const o=e.lineMax;if(e.sCount[t]-e.blkIndent>=4||e.src.charCodeAt(i)!==62)return!1;if(u)return!0;const s=[],c=[],a=[],l=[],f=e.md.block.ruler.getRules("blockquote"),d=e.parentType;e.parentType="blockquote";let p=!1,m;for(m=t;m<n;m++){const g=e.sCount[m]<e.blkIndent;if(i=e.bMarks[m]+e.tShift[m],r=e.eMarks[m],i>=r)break;if(e.src.charCodeAt(i++)===62&&!g){let v=e.sCount[m]+1,M,q;e.src.charCodeAt(i)===32?(i++,v++,q=!1,M=!0):e.src.charCodeAt(i)===9?(M=!0,(e.bsCount[m]+v)%4===3?(i++,v++,q=!1):q=!0):M=!1;let G=v;for(s.push(e.bMarks[m]),e.bMarks[m]=i;i<r;){const O=e.src.charCodeAt(i);if(we(O))O===9?G+=4-(G+e.bsCount[m]+(q?1:0))%4:G++;else break;i++}p=i>=r,c.push(e.bsCount[m]),e.bsCount[m]=e.sCount[m]+1+(M?1:0),a.push(e.sCount[m]),e.sCount[m]=G-v,l.push(e.tShift[m]),e.tShift[m]=i-e.bMarks[m];continue}if(p)break;let _=!1;for(let v=0,M=f.length;v<M;v++)if(f[v](e,m,n,!0)){_=!0;break}if(_){e.lineMax=m,e.blkIndent!==0&&(s.push(e.bMarks[m]),c.push(e.bsCount[m]),l.push(e.tShift[m]),a.push(e.sCount[m]),e.sCount[m]-=e.blkIndent);break}s.push(e.bMarks[m]),c.push(e.bsCount[m]),l.push(e.tShift[m]),a.push(e.sCount[m]),e.sCount[m]=-1}const w=e.blkIndent;e.blkIndent=0;const A=e.push("blockquote_open","blockquote",1);A.markup=">";const S=[t,0];A.map=S,e.md.block.tokenize(e,t,m);const E=e.push("blockquote_close","blockquote",-1);E.markup=">",e.lineMax=o,e.parentType=d,S[1]=e.line;for(let g=0;g<l.length;g++)e.bMarks[g+t]=s[g],e.tShift[g+t]=l[g],e.sCount[g+t]=a[g],e.bsCount[g+t]=c[g];return e.blkIndent=w,!0}function _2(e,t,n,u){const i=e.eMarks[t];if(e.sCount[t]-e.blkIndent>=4)return!1;let r=e.bMarks[t]+e.tShift[t];const o=e.src.charCodeAt(r++);if(o!==42&&o!==45&&o!==95)return!1;let s=1;for(;r<i;){const a=e.src.charCodeAt(r++);if(a!==o&&!we(a))return!1;a===o&&s++}if(s<3)return!1;if(u)return!0;e.line=t+1;const c=e.push("hr","hr",0);return c.map=[t,e.line],c.markup=Array(s+1).join(String.fromCharCode(o)),!0}function ys(e,t){const n=e.eMarks[t];let u=e.bMarks[t]+e.tShift[t];const i=e.src.charCodeAt(u++);if(i!==42&&i!==45&&i!==43)return-1;if(u<n){const r=e.src.charCodeAt(u);if(!we(r))return-1}return u}function ws(e,t){const n=e.bMarks[t]+e.tShift[t],u=e.eMarks[t];let i=n;if(i+1>=u)return-1;let r=e.src.charCodeAt(i++);if(r<48||r>57)return-1;for(;;){if(i>=u)return-1;if(r=e.src.charCodeAt(i++),r>=48&&r<=57){if(i-n>=10)return-1;continue}if(r===41||r===46)break;return-1}return i<u&&(r=e.src.charCodeAt(i),!we(r))?-1:i}function x2(e,t){const n=e.level+2;for(let u=t+2,i=e.tokens.length-2;u<i;u++)e.tokens[u].level===n&&e.tokens[u].type==="paragraph_open"&&(e.tokens[u+2].hidden=!0,e.tokens[u].hidden=!0,u+=2)}function y2(e,t,n,u){let i,r,o,s,c=t,a=!0;if(e.sCount[c]-e.blkIndent>=4||e.listIndent>=0&&e.sCount[c]-e.listIndent>=4&&e.sCount[c]<e.blkIndent)return!1;let l=!1;u&&e.parentType==="paragraph"&&e.sCount[c]>=e.blkIndent&&(l=!0);let f,d,p;if((p=ws(e,c))>=0){if(f=!0,o=e.bMarks[c]+e.tShift[c],d=Number(e.src.slice(o,p-1)),l&&d!==1)return!1}else if((p=ys(e,c))>=0)f=!1;else return!1;if(l&&e.skipSpaces(p)>=e.eMarks[c])return!1;if(u)return!0;const m=e.src.charCodeAt(p-1),w=e.tokens.length;f?(s=e.push("ordered_list_open","ol",1),d!==1&&(s.attrs=[["start",d]])):s=e.push("bullet_list_open","ul",1);const A=[c,0];s.map=A,s.markup=String.fromCharCode(m);let S=!1;const E=e.md.block.ruler.getRules("list"),g=e.parentType;for(e.parentType="list";c<n;){r=p,i=e.eMarks[c];const _=e.sCount[c]+p-(e.bMarks[c]+e.tShift[c]);let v=_;for(;r<i;){const se=e.src.charCodeAt(r);if(se===9)v+=4-(v+e.bsCount[c])%4;else if(se===32)v++;else break;r++}const M=r;let q;M>=i?q=1:q=v-_,q>4&&(q=1);const G=_+q;s=e.push("list_item_open","li",1),s.markup=String.fromCharCode(m);const O=[c,0];s.map=O,f&&(s.info=e.src.slice(o,p-1));const j=e.tight,H=e.tShift[c],I=e.sCount[c],Y=e.listIndent;if(e.listIndent=e.blkIndent,e.blkIndent=G,e.tight=!0,e.tShift[c]=M-e.bMarks[c],e.sCount[c]=v,M>=i&&e.isEmpty(c+1)?e.line=Math.min(e.line+2,n):e.md.block.tokenize(e,c,n,!0),(!e.tight||S)&&(a=!1),S=e.line-c>1&&e.isEmpty(e.line-1),e.blkIndent=e.listIndent,e.listIndent=Y,e.tShift[c]=H,e.sCount[c]=I,e.tight=j,s=e.push("list_item_close","li",-1),s.markup=String.fromCharCode(m),c=e.line,O[1]=c,c>=n||e.sCount[c]<e.blkIndent||e.sCount[c]-e.blkIndent>=4)break;let re=!1;for(let se=0,U=E.length;se<U;se++)if(E[se](e,c,n,!0)){re=!0;break}if(re)break;if(f){if(p=ws(e,c),p<0)break;o=e.bMarks[c]+e.tShift[c]}else if(p=ys(e,c),p<0)break;if(m!==e.src.charCodeAt(p-1))break}return f?s=e.push("ordered_list_close","ol",-1):s=e.push("bullet_list_close","ul",-1),s.markup=String.fromCharCode(m),A[1]=c,e.line=c,e.parentType=g,a&&x2(e,w),!0}function w2(e,t,n,u){let i=e.bMarks[t]+e.tShift[t],r=e.eMarks[t],o=t+1;if(e.sCount[t]-e.blkIndent>=4||e.src.charCodeAt(i)!==91)return!1;function s(E){const g=e.lineMax;if(E>=g||e.isEmpty(E))return null;let _=!1;if(e.sCount[E]-e.blkIndent>3&&(_=!0),e.sCount[E]<0&&(_=!0),!_){const q=e.md.block.ruler.getRules("reference"),G=e.parentType;e.parentType="reference";let O=!1;for(let j=0,H=q.length;j<H;j++)if(q[j](e,E,g,!0)){O=!0;break}if(e.parentType=G,O)return null}const v=e.bMarks[E]+e.tShift[E],M=e.eMarks[E];return e.src.slice(v,M+1)}let c=e.src.slice(i,r+1);r=c.length;let a=-1;for(i=1;i<r;i++){const E=c.charCodeAt(i);if(E===91)return!1;if(E===93){a=i;break}else if(E===10){const g=s(o);g!==null&&(c+=g,r=c.length,o++)}else if(E===92&&(i++,i<r&&c.charCodeAt(i)===10)){const g=s(o);g!==null&&(c+=g,r=c.length,o++)}}if(a<0||c.charCodeAt(a+1)!==58)return!1;for(i=a+2;i<r;i++){const E=c.charCodeAt(i);if(E===10){const g=s(o);g!==null&&(c+=g,r=c.length,o++)}else if(!we(E))break}const l=e.md.helpers.parseLinkDestination(c,i,r);if(!l.ok)return!1;const f=e.md.normalizeLink(l.str);if(!e.md.validateLink(f))return!1;i=l.pos;const d=i,p=o,m=i;for(;i<r;i++){const E=c.charCodeAt(i);if(E===10){const g=s(o);g!==null&&(c+=g,r=c.length,o++)}else if(!we(E))break}let w=e.md.helpers.parseLinkTitle(c,i,r);for(;w.can_continue;){const E=s(o);if(E===null)break;c+=E,i=r,r=c.length,o++,w=e.md.helpers.parseLinkTitle(c,i,r,w)}let A;for(i<r&&m!==i&&w.ok?(A=w.str,i=w.pos):(A="",i=d,o=p);i<r;){const E=c.charCodeAt(i);if(!we(E))break;i++}if(i<r&&c.charCodeAt(i)!==10&&A)for(A="",i=d,o=p;i<r;){const E=c.charCodeAt(i);if(!we(E))break;i++}if(i<r&&c.charCodeAt(i)!==10)return!1;const S=gi(c.slice(1,a));return S?(u||(typeof e.env.references>"u"&&(e.env.references={}),typeof e.env.references[S]>"u"&&(e.env.references[S]={title:A,href:f}),e.line=o),!0):!1}const E2=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],v2="[a-zA-Z_:][a-zA-Z0-9:._-]*",k2="[^\"'=<>`\\x00-\\x20]+",A2="'[^']*'",C2='"[^"]*"',S2="(?:"+k2+"|"+A2+"|"+C2+")",D2="(?:\\s+"+v2+"(?:\\s*=\\s*"+S2+")?)",Ta="<[A-Za-z][A-Za-z0-9\\-]*"+D2+"*\\s*\\/?>",Pa="<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>",T2="<!---?>|<!--(?:[^-]|-[^-]|--[^>])*-->",P2="<[?][\\s\\S]*?[?]>",M2="<![A-Za-z][^>]*>",q2="<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",F2=new RegExp("^(?:"+Ta+"|"+Pa+"|"+T2+"|"+P2+"|"+M2+"|"+q2+")"),I2=new RegExp("^(?:"+Ta+"|"+Pa+")"),rn=[[/^<(script|pre|style|textarea)(?=(\s|>|$))/i,/<\/(script|pre|style|textarea)>/i,!0],[/^<!--/,/-->/,!0],[/^<\?/,/\?>/,!0],[/^<![A-Za-z]/,/>/,!0],[/^<!\[CDATA\[/,/\]\]>/,!0],[new RegExp("^</?("+E2.join("|")+")(?=(\\s|/?>|$))","i"),/^$/,!0],[new RegExp(I2.source+"\\s*$"),/^$/,!1]];function Q2(e,t,n,u){let i=e.bMarks[t]+e.tShift[t],r=e.eMarks[t];if(e.sCount[t]-e.blkIndent>=4||!e.md.options.html||e.src.charCodeAt(i)!==60)return!1;let o=e.src.slice(i,r),s=0;for(;s<rn.length&&!rn[s][0].test(o);s++);if(s===rn.length)return!1;if(u)return rn[s][2];let c=t+1;const a=rn[s][1].test("");if(!rn[s][1].test(o)){for(;c<n&&!(e.sCount[c]<e.blkIndent&&(a||!e.isEmpty(c)));c++)if(i=e.bMarks[c]+e.tShift[c],r=e.eMarks[c],o=e.src.slice(i,r),rn[s][1].test(o)){o.length!==0&&c++;break}}e.line=c;const l=e.push("html_block","",0);return l.map=[t,c],l.content=e.getLines(t,c,e.blkIndent,!0),!0}function R2(e,t,n,u){let i=e.bMarks[t]+e.tShift[t],r=e.eMarks[t];if(e.sCount[t]-e.blkIndent>=4)return!1;let o=e.src.charCodeAt(i);if(o!==35||i>=r)return!1;let s=1;for(o=e.src.charCodeAt(++i);o===35&&i<r&&s<=6;)s++,o=e.src.charCodeAt(++i);if(s>6||i<r&&!we(o))return!1;if(u)return!0;r=e.skipSpacesBack(r,i);const c=e.skipCharsBack(r,35,i);c>i&&we(e.src.charCodeAt(c-1))&&(r=c),e.line=t+1;const a=e.push("heading_open","h"+String(s),1);a.markup="########".slice(0,s),a.map=[t,e.line];const l=e.push("inline","",0);l.content=bi(e.src.slice(i,r)),l.map=[t,e.line],l.children=[];const f=e.push("heading_close","h"+String(s),-1);return f.markup="########".slice(0,s),!0}function O2(e,t,n){const u=e.md.block.ruler.getRules("paragraph");if(e.sCount[t]-e.blkIndent>=4)return!1;const i=e.parentType;e.parentType="paragraph";let r=0,o,s=t+1;for(;s<n&&!e.isEmpty(s);s++){if(e.sCount[s]-e.blkIndent>3)continue;if(e.sCount[s]>=e.blkIndent){let p=e.bMarks[s]+e.tShift[s];const m=e.eMarks[s];if(p<m&&(o=e.src.charCodeAt(p),(o===45||o===61)&&(p=e.skipChars(p,o),p=e.skipSpaces(p),p>=m))){r=o===61?1:2;break}}if(e.sCount[s]<0)continue;let d=!1;for(let p=0,m=u.length;p<m;p++)if(u[p](e,s,n,!0)){d=!0;break}if(d)break}if(!r)return e.parentType=i,!1;const c=bi(e.getLines(t,s,e.blkIndent,!1));e.line=s+1;const a=e.push("heading_open","h"+String(r),1);a.markup=String.fromCharCode(o),a.map=[t,e.line];const l=e.push("inline","",0);l.content=c,l.map=[t,e.line-1],l.children=[];const f=e.push("heading_close","h"+String(r),-1);return f.markup=String.fromCharCode(o),e.parentType=i,!0}function L2(e,t,n){const u=e.md.block.ruler.getRules("paragraph"),i=e.parentType;let r=t+1;for(e.parentType="paragraph";r<n&&!e.isEmpty(r);r++){if(e.sCount[r]-e.blkIndent>3||e.sCount[r]<0)continue;let a=!1;for(let l=0,f=u.length;l<f;l++)if(u[l](e,r,n,!0)){a=!0;break}if(a)break}const o=bi(e.getLines(t,r,e.blkIndent,!1));e.line=r;const s=e.push("paragraph_open","p",1);s.map=[t,e.line];const c=e.push("inline","",0);return c.content=o,c.map=[t,e.line],c.children=[],e.push("paragraph_close","p",-1),e.parentType=i,!0}const Pu=[["table",h2,["paragraph","reference"]],["code",m2],["fence",g2,["paragraph","reference","blockquote","list"]],["blockquote",b2,["paragraph","reference","blockquote","list"]],["hr",_2,["paragraph","reference","blockquote","list"]],["list",y2,["paragraph","reference","blockquote"]],["reference",w2],["html_block",Q2,["paragraph","reference","blockquote"]],["heading",R2,["paragraph","reference","blockquote"]],["lheading",O2],["paragraph",L2]];function _i(){this.ruler=new We;for(let e=0;e<Pu.length;e++)this.ruler.push(Pu[e][0],Pu[e][1],{alt:(Pu[e][2]||[]).slice()})}_i.prototype.tokenize=function(e,t,n){const u=this.ruler.getRules(""),i=u.length,r=e.md.options.maxNesting;let o=t,s=!1;for(;o<n&&(e.line=o=e.skipEmptyLines(o),!(o>=n||e.sCount[o]<e.blkIndent));){if(e.level>=r){e.line=n;break}const c=e.line;let a=!1;for(let l=0;l<i;l++)if(a=u[l](e,o,n,!1),a){if(c>=e.line)throw new Error("block rule didn't increment state.line");break}if(!a)throw new Error("none of the block rules matched");e.tight=!s,e.isEmpty(e.line-1)&&(s=!0),o=e.line,o<n&&e.isEmpty(o)&&(s=!0,o++,e.line=o)}};_i.prototype.parse=function(e,t,n,u){if(!e)return;const i=new this.State(e,t,n,u);this.tokenize(i,i.line,i.lineMax)};_i.prototype.State=St;function _u(e,t,n,u){this.src=e,this.env=n,this.md=t,this.tokens=u,this.tokens_meta=Array(u.length),this.pos=0,this.posMax=this.src.length,this.level=0,this.pending="",this.pendingLevel=0,this.cache={},this.delimiters=[],this._prev_delimiters=[],this.backticks={},this.backticksScanned=!1,this.linkLevel=0}_u.prototype.pushPending=function(){const e=new ht("text","",0);return e.content=this.pending,e.level=this.pendingLevel,this.tokens.push(e),this.pending="",e};_u.prototype.push=function(e,t,n){this.pending&&this.pushPending();const u=new ht(e,t,n);let i=null;return n<0&&(this.level--,this.delimiters=this._prev_delimiters.pop()),u.level=this.level,n>0&&(this.level++,this._prev_delimiters.push(this.delimiters),this.delimiters=[],i={delimiters:this.delimiters}),this.pendingLevel=this.level,this.tokens.push(u),this.tokens_meta.push(i),u};_u.prototype.scanDelims=function(e,t){const n=this.posMax,u=this.src.charCodeAt(e);let i;if(e===0)i=32;else if(e===1)i=this.src.charCodeAt(0),(i&63488)===55296&&(i=65533);else if(i=this.src.charCodeAt(e-1),(i&64512)===56320){const A=this.src.charCodeAt(e-2);i=(A&64512)===55296?65536+(A-55296<<10)+(i-56320):65533}else(i&64512)===55296&&(i=65533);let r=e;for(;r<n&&this.src.charCodeAt(r)===u;)r++;const o=r-e;let s=r<n?this.src.charCodeAt(r):32;if((s&64512)===55296){const A=this.src.charCodeAt(r+1);s=(A&64512)===56320?65536+(s-55296<<10)+(A-56320):65533}else(s&64512)===56320&&(s=65533);const c=fu(i)||lu(i),a=fu(s)||lu(s),l=au(i),f=au(s),d=!f&&(!a||l||c),p=!l&&(!c||f||a);return{can_open:d&&(t||!p||c),can_close:p&&(t||!d||a),length:o}};_u.prototype.Token=ht;function B2(e){switch(e){case 10:case 33:case 35:case 36:case 37:case 38:case 42:case 43:case 45:case 58:case 60:case 61:case 62:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 123:case 125:case 126:return!0;default:return!1}}function N2(e,t){let n=e.pos;for(;n<e.posMax&&!B2(e.src.charCodeAt(n));)n++;return n===e.pos?!1:(t||(e.pending+=e.src.slice(e.pos,n)),e.pos=n,!0)}function $2(e){return e>=65&&e<=90||e>=97&&e<=122}function H2(e){return e>=65&&e<=90||e>=97&&e<=122||e>=48&&e<=57||e===43||e===45||e===46}function j2(e,t){if(!e.md.options.linkify||e.linkLevel>0)return!1;const n=e.pos,u=e.posMax;if(n+3>u||e.src.charCodeAt(n)!==58||e.src.charCodeAt(n+1)!==47||e.src.charCodeAt(n+2)!==47)return!1;const i=n-Math.min(10,e.pending.length,n);let r=n;for(;r>i&&H2(e.src.charCodeAt(r-1));)r--;if(r===n||!$2(e.src.charCodeAt(r)))return!1;const o=n-r,s=e.md.linkify.matchAtStart(e.src.slice(r));if(!s)return!1;let c=s.url;if(c.length<=o)return!1;let a=c.length;for(;a>0&&c.charCodeAt(a-1)===42;)a--;a!==c.length&&(c=c.slice(0,a));const l=e.md.normalizeLink(c);if(!e.md.validateLink(l))return!1;if(!t){e.pending=e.pending.slice(0,-o);const f=e.push("link_open","a",1);f.attrs=[["href",l]],f.markup="linkify",f.info="auto";const d=e.push("text","",0);d.content=e.md.normalizeLinkText(c);const p=e.push("link_close","a",-1);p.markup="linkify",p.info="auto"}return e.pos+=c.length-o,!0}function z2(e,t){let n=e.pos;if(e.src.charCodeAt(n)!==10)return!1;const u=e.pending.length-1,i=e.posMax;if(!t)if(u>=0&&e.pending.charCodeAt(u)===32)if(u>=1&&e.pending.charCodeAt(u-1)===32){let r=u-1;for(;r>=1&&e.pending.charCodeAt(r-1)===32;)r--;e.pending=e.pending.slice(0,r),e.push("hardbreak","br",0)}else e.pending=e.pending.slice(0,-1),e.push("softbreak","br",0);else e.push("softbreak","br",0);for(n++;n<i&&we(e.src.charCodeAt(n));)n++;return e.pos=n,!0}const Gr=[];for(let e=0;e<256;e++)Gr.push(0);"\\!\"#$%&'()*+,./:;<=>?@[]^_`{|}~-".split("").forEach(function(e){Gr[e.charCodeAt(0)]=1});function U2(e,t){let n=e.pos;const u=e.posMax;if(e.src.charCodeAt(n)!==92||(n++,n>=u))return!1;let i=e.src.charCodeAt(n);if(i===10){for(t||e.push("hardbreak","br",0),n++;n<u&&(i=e.src.charCodeAt(n),!!we(i));)n++;return e.pos=n,!0}if(i===32){if(!t){const s=e.push("text_special","",0);s.content="\\",s.markup="\\",s.info="escape"}return e.pos=n,!0}let r=e.src[n];if(i>=55296&&i<=56319&&n+1<u){const s=e.src.charCodeAt(n+1);s>=56320&&s<=57343&&(r+=e.src[n+1],n++)}const o="\\"+r;if(!t){const s=e.push("text_special","",0);i<256&&Gr[i]!==0?s.content=r:s.content=o,s.markup=o,s.info="escape"}return e.pos=n+1,!0}function V2(e,t){let n=e.pos;if(e.src.charCodeAt(n)!==96)return!1;const i=n;n++;const r=e.posMax;for(;n<r&&e.src.charCodeAt(n)===96;)n++;const o=e.src.slice(i,n),s=o.length;if(e.backticksScanned&&(e.backticks[s]||0)<=i)return t||(e.pending+=o),e.pos+=s,!0;let c=n,a;for(;(a=e.src.indexOf("`",c))!==-1;){for(c=a+1;c<r&&e.src.charCodeAt(c)===96;)c++;const l=c-a;if(l===s){if(!t){const f=e.push("code_inline","code",0);f.markup=o,f.content=e.src.slice(n,a).replace(/\n/g," ").replace(/^ (.+) $/,"$1")}return e.pos=c,!0}e.backticks[l]=a}return e.backticksScanned=!0,t||(e.pending+=o),e.pos+=s,!0}function G2(e,t){const n=e.pos,u=e.src.charCodeAt(n);if(t||u!==126)return!1;const i=e.scanDelims(e.pos,!0);let r=i.length;const o=String.fromCharCode(u);if(r<2)return!1;let s;r%2&&(s=e.push("text","",0),s.content=o,r--);for(let c=0;c<r;c+=2)s=e.push("text","",0),s.content=o+o,e.delimiters.push({marker:u,length:0,token:e.tokens.length-1,end:-1,open:i.can_open,close:i.can_close});return e.pos+=i.length,!0}function Es(e,t){let n;const u=[],i=t.length;for(let r=0;r<i;r++){const o=t[r];if(o.marker!==126||o.end===-1)continue;const s=t[o.end];n=e.tokens[o.token],n.type="s_open",n.tag="s",n.nesting=1,n.markup="~~",n.content="",n=e.tokens[s.token],n.type="s_close",n.tag="s",n.nesting=-1,n.markup="~~",n.content="",e.tokens[s.token-1].type==="text"&&e.tokens[s.token-1].content==="~"&&u.push(s.token-1)}for(;u.length;){const r=u.pop();let o=r+1;for(;o<e.tokens.length&&e.tokens[o].type==="s_close";)o++;o--,r!==o&&(n=e.tokens[o],e.tokens[o]=e.tokens[r],e.tokens[r]=n)}}function W2(e){const t=e.tokens_meta,n=e.tokens_meta.length;Es(e,e.delimiters);for(let u=0;u<n;u++)t[u]&&t[u].delimiters&&Es(e,t[u].delimiters)}const Ma={tokenize:G2,postProcess:W2};function K2(e,t){const n=e.pos,u=e.src.charCodeAt(n);if(t||u!==95&&u!==42)return!1;const i=e.scanDelims(e.pos,u===42);for(let r=0;r<i.length;r++){const o=e.push("text","",0);o.content=String.fromCharCode(u),e.delimiters.push({marker:u,length:i.length,token:e.tokens.length-1,end:-1,open:i.can_open,close:i.can_close})}return e.pos+=i.length,!0}function vs(e,t){const n=t.length;for(let u=n-1;u>=0;u--){const i=t[u];if(i.marker!==95&&i.marker!==42||i.end===-1)continue;const r=t[i.end],o=u>0&&t[u-1].end===i.end+1&&t[u-1].marker===i.marker&&t[u-1].token===i.token-1&&t[i.end+1].token===r.token+1,s=String.fromCharCode(i.marker),c=e.tokens[i.token];c.type=o?"strong_open":"em_open",c.tag=o?"strong":"em",c.nesting=1,c.markup=o?s+s:s,c.content="";const a=e.tokens[r.token];a.type=o?"strong_close":"em_close",a.tag=o?"strong":"em",a.nesting=-1,a.markup=o?s+s:s,a.content="",o&&(e.tokens[t[u-1].token].content="",e.tokens[t[i.end+1].token].content="",u--)}}function X2(e){const t=e.tokens_meta,n=e.tokens_meta.length;vs(e,e.delimiters);for(let u=0;u<n;u++)t[u]&&t[u].delimiters&&vs(e,t[u].delimiters)}const qa={tokenize:K2,postProcess:X2};function Z2(e,t){let n,u,i,r,o="",s="",c=e.pos,a=!0;if(e.src.charCodeAt(e.pos)!==91)return!1;const l=e.pos,f=e.posMax,d=e.pos+1,p=e.md.helpers.parseLinkLabel(e,e.pos,!0);if(p<0)return!1;let m=p+1;if(m<f&&e.src.charCodeAt(m)===40){for(a=!1,m++;m<f&&(n=e.src.charCodeAt(m),!(!we(n)&&n!==10));m++);if(m>=f)return!1;if(c=m,i=e.md.helpers.parseLinkDestination(e.src,m,e.posMax),i.ok){for(o=e.md.normalizeLink(i.str),e.md.validateLink(o)?m=i.pos:o="",c=m;m<f&&(n=e.src.charCodeAt(m),!(!we(n)&&n!==10));m++);if(i=e.md.helpers.parseLinkTitle(e.src,m,e.posMax),m<f&&c!==m&&i.ok)for(s=i.str,m=i.pos;m<f&&(n=e.src.charCodeAt(m),!(!we(n)&&n!==10));m++);}(m>=f||e.src.charCodeAt(m)!==41)&&(a=!0),m++}if(a){if(typeof e.env.references>"u")return!1;if(m<f&&e.src.charCodeAt(m)===91?(c=m+1,m=e.md.helpers.parseLinkLabel(e,m),m>=0?u=e.src.slice(c,m++):m=p+1):m=p+1,u||(u=e.src.slice(d,p)),r=e.env.references[gi(u)],!r)return e.pos=l,!1;o=r.href,s=r.title}if(!t){e.pos=d,e.posMax=p;const w=e.push("link_open","a",1),A=[["href",o]];w.attrs=A,s&&A.push(["title",s]),e.linkLevel++,e.md.inline.tokenize(e),e.linkLevel--,e.push("link_close","a",-1)}return e.pos=m,e.posMax=f,!0}function J2(e,t){let n,u,i,r,o,s,c,a,l="";const f=e.pos,d=e.posMax;if(e.src.charCodeAt(e.pos)!==33||e.src.charCodeAt(e.pos+1)!==91)return!1;const p=e.pos+2,m=e.md.helpers.parseLinkLabel(e,e.pos+1,!1);if(m<0)return!1;if(r=m+1,r<d&&e.src.charCodeAt(r)===40){for(r++;r<d&&(n=e.src.charCodeAt(r),!(!we(n)&&n!==10));r++);if(r>=d)return!1;for(a=r,s=e.md.helpers.parseLinkDestination(e.src,r,e.posMax),s.ok&&(l=e.md.normalizeLink(s.str),e.md.validateLink(l)?r=s.pos:l=""),a=r;r<d&&(n=e.src.charCodeAt(r),!(!we(n)&&n!==10));r++);if(s=e.md.helpers.parseLinkTitle(e.src,r,e.posMax),r<d&&a!==r&&s.ok)for(c=s.str,r=s.pos;r<d&&(n=e.src.charCodeAt(r),!(!we(n)&&n!==10));r++);else c="";if(r>=d||e.src.charCodeAt(r)!==41)return e.pos=f,!1;r++}else{if(typeof e.env.references>"u")return!1;if(r<d&&e.src.charCodeAt(r)===91?(a=r+1,r=e.md.helpers.parseLinkLabel(e,r),r>=0?i=e.src.slice(a,r++):r=m+1):r=m+1,i||(i=e.src.slice(p,m)),o=e.env.references[gi(i)],!o)return e.pos=f,!1;l=o.href,c=o.title}if(!t){u=e.src.slice(p,m);const w=[];e.md.inline.parse(u,e.md,e.env,w);const A=e.push("image","img",0),S=[["src",l],["alt",""]];A.attrs=S,A.children=w,A.content=u,c&&S.push(["title",c])}return e.pos=r,e.posMax=d,!0}const Y2=/^([a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)$/,em=/^([a-zA-Z][a-zA-Z0-9+.-]{1,31}):([^<>\x00-\x20]*)$/;function tm(e,t){let n=e.pos;if(e.src.charCodeAt(n)!==60)return!1;const u=e.pos,i=e.posMax;for(;;){if(++n>=i)return!1;const o=e.src.charCodeAt(n);if(o===60)return!1;if(o===62)break}const r=e.src.slice(u+1,n);if(em.test(r)){const o=e.md.normalizeLink(r);if(!e.md.validateLink(o))return!1;if(!t){const s=e.push("link_open","a",1);s.attrs=[["href",o]],s.markup="autolink",s.info="auto";const c=e.push("text","",0);c.content=e.md.normalizeLinkText(r);const a=e.push("link_close","a",-1);a.markup="autolink",a.info="auto"}return e.pos+=r.length+2,!0}if(Y2.test(r)){const o=e.md.normalizeLink("mailto:"+r);if(!e.md.validateLink(o))return!1;if(!t){const s=e.push("link_open","a",1);s.attrs=[["href",o]],s.markup="autolink",s.info="auto";const c=e.push("text","",0);c.content=e.md.normalizeLinkText(r);const a=e.push("link_close","a",-1);a.markup="autolink",a.info="auto"}return e.pos+=r.length+2,!0}return!1}function nm(e){return/^<a[>\s]/i.test(e)}function um(e){return/^<\/a\s*>/i.test(e)}function im(e){const t=e|32;return t>=97&&t<=122}function rm(e,t){if(!e.md.options.html)return!1;const n=e.posMax,u=e.pos;if(e.src.charCodeAt(u)!==60||u+2>=n)return!1;const i=e.src.charCodeAt(u+1);if(i!==33&&i!==63&&i!==47&&!im(i))return!1;const r=e.src.slice(u).match(F2);if(!r)return!1;if(!t){const o=e.push("html_inline","",0);o.content=r[0],nm(o.content)&&e.linkLevel++,um(o.content)&&e.linkLevel--}return e.pos+=r[0].length,!0}const om=/^&#((?:x[a-f0-9]{1,6}|[0-9]{1,7}));/i,sm=/^&([a-z][a-z0-9]{1,31});/i;function cm(e,t){const n=e.pos,u=e.posMax;if(e.src.charCodeAt(n)!==38||n+1>=u)return!1;if(e.src.charCodeAt(n+1)===35){const r=e.src.slice(n).match(om);if(r){if(!t){const o=r[1][0].toLowerCase()==="x"?parseInt(r[1].slice(1),16):parseInt(r[1],10),s=e.push("text_special","",0);s.content=Ur(o)?cu(o):cu(65533),s.markup=r[0],s.info="entity"}return e.pos+=r[0].length,!0}}else{const r=e.src.slice(n).match(sm);if(r){const o=kh(r[0]);if(o!==r[0]){if(!t){const s=e.push("text_special","",0);s.content=o,s.markup=r[0],s.info="entity"}return e.pos+=r[0].length,!0}}}return!1}function ks(e){const t={},n=e.length;if(!n)return;let u=0,i=-2;const r=[];for(let o=0;o<n;o++){const s=e[o];if(r.push(0),(e[u].marker!==s.marker||i!==s.token-1)&&(u=o),i=s.token,s.length=s.length||0,!s.close)continue;t.hasOwnProperty(s.marker)||(t[s.marker]=[-1,-1,-1,-1,-1,-1]);const c=t[s.marker][(s.open?3:0)+s.length%3];let a=u-r[u]-1,l=a;for(;a>c;a-=r[a]+1){const f=e[a];if(f.marker===s.marker&&f.open&&f.end<0){let d=!1;if((f.close||s.open)&&(f.length+s.length)%3===0&&(f.length%3!==0||s.length%3!==0)&&(d=!0),!d){const p=a>0&&!e[a-1].open?r[a-1]+1:0;r[o]=o-a+p,r[a]=p,s.open=!1,f.end=o,f.close=!1,l=-1,i=-2;break}}}l!==-1&&(t[s.marker][(s.open?3:0)+(s.length||0)%3]=l)}}function am(e){const t=e.tokens_meta,n=e.tokens_meta.length;ks(e.delimiters);for(let u=0;u<n;u++)t[u]&&t[u].delimiters&&ks(t[u].delimiters)}function lm(e){let t,n,u=0;const i=e.tokens,r=e.tokens.length;for(t=n=0;t<r;t++)i[t].nesting<0&&u--,i[t].level=u,i[t].nesting>0&&u++,i[t].type==="text"&&t+1<r&&i[t+1].type==="text"?i[t+1].content=i[t].content+i[t+1].content:(t!==n&&(i[n]=i[t]),n++);t!==n&&(i.length=n)}const ji=[["text",N2],["linkify",j2],["newline",z2],["escape",U2],["backticks",V2],["strikethrough",Ma.tokenize],["emphasis",qa.tokenize],["link",Z2],["image",J2],["autolink",tm],["html_inline",rm],["entity",cm]],zi=[["balance_pairs",am],["strikethrough",Ma.postProcess],["emphasis",qa.postProcess],["fragments_join",lm]];function xu(){this.ruler=new We;for(let e=0;e<ji.length;e++)this.ruler.push(ji[e][0],ji[e][1]);this.ruler2=new We;for(let e=0;e<zi.length;e++)this.ruler2.push(zi[e][0],zi[e][1])}xu.prototype.skipToken=function(e){const t=e.pos,n=this.ruler.getRules(""),u=n.length,i=e.md.options.maxNesting,r=e.cache;if(typeof r[t]<"u"){e.pos=r[t];return}let o=!1;if(e.level<i){for(let s=0;s<u;s++)if(e.level++,o=n[s](e,!0),e.level--,o){if(t>=e.pos)throw new Error("inline rule didn't increment state.pos");break}}else e.pos=e.posMax;o||e.pos++,r[t]=e.pos};xu.prototype.tokenize=function(e){const t=this.ruler.getRules(""),n=t.length,u=e.posMax,i=e.md.options.maxNesting;for(;e.pos<u;){const r=e.pos;let o=!1;if(e.level<i){for(let s=0;s<n;s++)if(o=t[s](e,!1),o){if(r>=e.pos)throw new Error("inline rule didn't increment state.pos");break}}if(o){if(e.pos>=u)break;continue}e.pending+=e.src[e.pos++]}e.pending&&e.pushPending()};xu.prototype.parse=function(e,t,n,u){const i=new this.State(e,t,n,u);this.tokenize(i);const r=this.ruler2.getRules(""),o=r.length;for(let s=0;s<o;s++)r[s](i)};xu.prototype.State=_u;function fm(e){const t={};e=e||{},t.src_Any=xa.source,t.src_Cc=ya.source,t.src_Z=Ea.source,t.src_P=jr.source,t.src_ZPCc=[t.src_Z,t.src_P,t.src_Cc].join("|"),t.src_ZCc=[t.src_Z,t.src_Cc].join("|");const n="[><｜]";return t.src_pseudo_letter=`(?:(?!${n}|${t.src_ZPCc})${t.src_Any})`,t.src_ip4="(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)",t.src_auth=`(?:(?:(?!${t.src_ZCc}|[@/\\[\\]()]).){1,50}@)?`,t.src_port="(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?",t.src_host_terminator=`(?=$|${n}|${t.src_ZPCc})(?!${e["---"]?"-(?!--)|":"-|"}_|:\\d|\\.-|\\.(?!$|${t.src_ZPCc}))`,t.src_path=`(?:[/?#](?:(?!${t.src_ZCc}|${n}|[()[\\]{}.,"'?!\\-;]).|\\[(?:(?!${t.src_ZCc}|\\]).)*\\]|\\((?:(?!${t.src_ZCc}|[)]).)*\\)|\\{(?:(?!${t.src_ZCc}|[}]).)*\\}|\\"(?:(?!${t.src_ZCc}|["]).)+\\"|\\'(?:(?!${t.src_ZCc}|[']).)+\\'|\\'(?=${t.src_pseudo_letter}|[-])|\\.{2,}[a-zA-Z0-9%/&]|\\.(?!${t.src_ZCc}|[.]|$)|`+(e["---"]?"\\-(?!--(?:[^-]|$))(?:-*)|":"\\-+|")+`,(?!${t.src_ZCc}|$)|;(?!${t.src_ZCc}|$)|\\!+(?!${t.src_ZCc}|[!]|$)|\\?(?!${t.src_ZCc}|[?]|$))+|\\/)?`,t.src_email_name='[\\-;:&=\\+\\$,\\.a-zA-Z0-9_][\\-;:&=\\+\\$,\\"\\.a-zA-Z0-9_]{0,63}',t.src_xn="xn--[a-z0-9\\-]{1,59}",t.src_domain_root="(?:"+t.src_xn+`|${t.src_pseudo_letter}{1,63})`,t.src_domain="(?:"+t.src_xn+`|(?:${t.src_pseudo_letter})|(?:${t.src_pseudo_letter}(?:-|${t.src_pseudo_letter}){0,61}${t.src_pseudo_letter}))`,t.src_host=`(?:(?:(?:(?:${t.src_domain})\\.)*${t.src_domain}))`,t.tpl_host_fuzzy="(?:"+t.src_ip4+`|(?:(?:(?:${t.src_domain})\\.)+(?:%TLDS%)))`,t.tpl_host_no_ip_fuzzy=`(?:(?:(?:${t.src_domain})\\.)+(?:%TLDS%))`,t.src_host_strict=t.src_host+t.src_host_terminator,t.tpl_host_fuzzy_strict=t.tpl_host_fuzzy+t.src_host_terminator,t.src_host_port_strict=t.src_host+t.src_port+t.src_host_terminator,t.tpl_host_port_fuzzy_strict=t.tpl_host_fuzzy+t.src_port+t.src_host_terminator,t.tpl_host_port_no_ip_fuzzy_strict=t.tpl_host_no_ip_fuzzy+t.src_port+t.src_host_terminator,t.tpl_host_fuzzy_test=`localhost|www\\.|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:${t.src_ZPCc}|>|$))`,t.tpl_email_fuzzy=`(^|${n}|"|\\(|${t.src_ZCc})(${t.src_email_name}@${t.tpl_host_fuzzy_strict})`,t.tpl_link_fuzzy=`(^|(?![.:/\\-_@])(?:[$+<=>^\`|｜]|${t.src_ZPCc}))((?![$+<=>^\`|｜])${t.tpl_host_port_fuzzy_strict}${t.src_path})`,t.tpl_link_no_ip_fuzzy=`(^|(?![.:/\\-_@])(?:[$+<=>^\`|｜]|${t.src_ZPCc}))((?![$+<=>^\`|｜])${t.tpl_host_port_no_ip_fuzzy_strict}${t.src_path})`,t}function fr(e){return Array.prototype.slice.call(arguments,1).forEach(function(n){n&&Object.keys(n).forEach(function(u){e[u]=n[u]})}),e}function xi(e){return Object.prototype.toString.call(e)}function dm(e){return xi(e)==="[object String]"}function pm(e){return xi(e)==="[object Object]"}function hm(e){return xi(e)==="[object RegExp]"}function As(e){return xi(e)==="[object Function]"}function mm(e){return e.replace(/[.?*+^$[\]\\(){}|-]/g,"\\$&")}const Fa={fuzzyLink:!0,fuzzyEmail:!0,fuzzyIP:!1};function gm(e){return Object.keys(e||{}).reduce(function(t,n){return t||Fa.hasOwnProperty(n)},!1)}const bm={"http:":{validate:function(e,t,n){const u=e.slice(t);return n.re.http||(n.re.http=new RegExp(`^\\/\\/${n.re.src_auth}${n.re.src_host_port_strict}${n.re.src_path}`,"i")),n.re.http.test(u)?u.match(n.re.http)[0].length:0}},"https:":"http:","ftp:":"http:","//":{validate:function(e,t,n){const u=e.slice(t);return n.re.no_http||(n.re.no_http=new RegExp("^"+n.re.src_auth+`(?:localhost|(?:(?:${n.re.src_domain})\\.)+${n.re.src_domain_root})`+n.re.src_port+n.re.src_host_terminator+n.re.src_path,"i")),n.re.no_http.test(u)?t>=3&&e[t-3]===":"||t>=3&&e[t-3]==="/"?0:u.match(n.re.no_http)[0].length:0}},"mailto:":{validate:function(e,t,n){const u=e.slice(t);return n.re.mailto||(n.re.mailto=new RegExp(`^${n.re.src_email_name}@${n.re.src_host_strict}`,"i")),n.re.mailto.test(u)?u.match(n.re.mailto)[0].length:0}}},_m="a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]",xm="biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф".split("|");function ym(e){return function(t,n){const u=t.slice(n);return e.test(u)?u.match(e)[0].length:0}}function Cs(){return function(e,t){t.normalize(e)}}function Yu(e){const t=e.re=fm(e.__opts__),n=e.__tlds__.slice();e.onCompile(),e.__tlds_replaced__||n.push(_m),n.push(t.src_xn),t.src_tlds=n.join("|");function u(s){return s.replace("%TLDS%",t.src_tlds)}t.email_fuzzy=RegExp(u(t.tpl_email_fuzzy),"i"),t.email_fuzzy_global=RegExp(u(t.tpl_email_fuzzy),"ig"),t.link_fuzzy=RegExp(u(t.tpl_link_fuzzy),"i"),t.link_fuzzy_global=RegExp(u(t.tpl_link_fuzzy),"ig"),t.link_no_ip_fuzzy=RegExp(u(t.tpl_link_no_ip_fuzzy),"i"),t.link_no_ip_fuzzy_global=RegExp(u(t.tpl_link_no_ip_fuzzy),"ig"),t.host_fuzzy_test=RegExp(u(t.tpl_host_fuzzy_test),"i");const i=[];e.__compiled__={};function r(s,c){throw new Error(`(LinkifyIt) Invalid schema "${s}": ${c}`)}Object.keys(e.__schemas__).forEach(function(s){const c=e.__schemas__[s];if(c===null)return;const a={validate:null,link:null};if(e.__compiled__[s]=a,pm(c)){hm(c.validate)?a.validate=ym(c.validate):As(c.validate)?a.validate=c.validate:r(s,c),As(c.normalize)?a.normalize=c.normalize:c.normalize?r(s,c):a.normalize=Cs();return}if(dm(c)){i.push(s);return}r(s,c)}),i.forEach(function(s){e.__compiled__[e.__schemas__[s]]&&(e.__compiled__[s].validate=e.__compiled__[e.__schemas__[s]].validate,e.__compiled__[s].normalize=e.__compiled__[e.__schemas__[s]].normalize)}),e.__compiled__[""]={validate:null,normalize:Cs()};const o=Object.keys(e.__compiled__).filter(function(s){return s.length>0&&e.__compiled__[s]}).map(mm).join("|");e.re.schema_test=RegExp(`(^|(?!_)(?:[><｜]|${t.src_ZPCc}))(${o})`,"i"),e.re.schema_search=RegExp(`(^|(?!_)(?:[><｜]|${t.src_ZPCc}))(${o})`,"ig"),e.re.schema_at_start=RegExp(`^${e.re.schema_search.source}`,"i"),e.re.pretest=RegExp(`(${e.re.schema_test.source})|(${e.re.host_fuzzy_test.source})|@`,"i")}function Ia(e,t,n,u){const i=e.slice(n,u);this.schema=t.toLowerCase(),this.index=n,this.lastIndex=u,this.raw=i,this.text=i,this.url=i}function Ye(e,t){if(!(this instanceof Ye))return new Ye(e,t);t||gm(e)&&(t=e,e={}),this.__opts__=fr({},Fa,t),this.__schemas__=fr({},bm,e),this.__compiled__={},this.__tlds__=xm,this.__tlds_replaced__=!1,this.re={},Yu(this)}Ye.prototype.add=function(t,n){return this.__schemas__[t]=n,Yu(this),this};Ye.prototype.set=function(t){return this.__opts__=fr(this.__opts__,t),this};Ye.prototype.test=function(t){if(!t.length)return!1;let n,u;if(this.re.schema_test.test(t)){for(u=this.re.schema_search,u.lastIndex=0;(n=u.exec(t))!==null;)if(this.testSchemaAt(t,n[2],u.lastIndex))return!0}return!!(this.__opts__.fuzzyLink&&this.__compiled__["http:"]&&t.search(this.re.host_fuzzy_test)>=0&&t.match(this.__opts__.fuzzyIP?this.re.link_fuzzy:this.re.link_no_ip_fuzzy)!==null||this.__opts__.fuzzyEmail&&this.__compiled__["mailto:"]&&t.indexOf("@")>=0&&t.match(this.re.email_fuzzy)!==null)};Ye.prototype.pretest=function(t){return this.re.pretest.test(t)};Ye.prototype.testSchemaAt=function(t,n,u){return this.__compiled__[n.toLowerCase()]?this.__compiled__[n.toLowerCase()].validate(t,u,this):0};Ye.prototype.match=function(t){const n=[],u=[],i=[],r=[];let o,s,c;function a(d,p){return d?p?d.index!==p.index?d.index<p.index?d:p:d.lastIndex>=p.lastIndex?d:p:d:p}if(!t.length)return null;if(this.re.schema_test.test(t))for(c=this.re.schema_search,c.lastIndex=0;(o=c.exec(t))!==null;)s=this.testSchemaAt(t,o[2],c.lastIndex),s&&u.push({schema:o[2],index:o.index+o[1].length,lastIndex:o.index+o[0].length+s});if(this.__opts__.fuzzyLink&&this.__compiled__["http:"])for(c=this.__opts__.fuzzyIP?this.re.link_fuzzy_global:this.re.link_no_ip_fuzzy_global,c.lastIndex=0;(o=c.exec(t))!==null;)i.push({schema:"",index:o.index+o[1].length,lastIndex:o.index+o[0].length});if(this.__opts__.fuzzyEmail&&this.__compiled__["mailto:"])for(c=this.re.email_fuzzy_global,c.lastIndex=0;(o=c.exec(t))!==null;)r.push({schema:"mailto:",index:o.index+o[1].length,lastIndex:o.index+o[0].length});const l=[0,0,0];let f=0;for(;;){const d=[u[l[0]],r[l[1]],i[l[2]]],p=a(a(d[0],d[1]),d[2]);if(!p)break;if(p===d[0]?l[0]++:p===d[1]?l[1]++:l[2]++,p.index<f)continue;const m=new Ia(t,p.schema,p.index,p.lastIndex);this.__compiled__[m.schema].normalize(m,this),n.push(m),f=p.lastIndex}return n.length?n:null};Ye.prototype.matchAtStart=function(t){if(!t.length)return null;const n=this.re.schema_at_start.exec(t);if(!n)return null;const u=this.testSchemaAt(t,n[2],n[0].length);if(!u)return null;const i=new Ia(t,n[2],n.index+n[1].length,n.index+n[0].length+u);return this.__compiled__[i.schema].normalize(i,this),i};Ye.prototype.tlds=function(t,n){return t=Array.isArray(t)?t:[t],n?(this.__tlds__=this.__tlds__.concat(t).sort().filter(function(u,i,r){return u!==r[i-1]}).reverse(),Yu(this),this):(this.__tlds__=t.slice(),this.__tlds_replaced__=!0,Yu(this),this)};Ye.prototype.normalize=function(t){t.schema||(t.url=`http://${t.url}`),t.schema==="mailto:"&&!/^mailto:/i.test(t.url)&&(t.url=`mailto:${t.url}`)};Ye.prototype.onCompile=function(){};const Tn=2147483647,yt=36,Wr=1,du=26,wm=38,Em=700,Qa=72,Ra=128,Oa="-",vm=/^xn--/,km=/[^\0-\x7F]/,Am=/[\x2E\u3002\uFF0E\uFF61]/g,Cm={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},Ui=yt-Wr,wt=Math.floor,Vi=String.fromCharCode;function Vt(e){throw new RangeError(Cm[e])}function Sm(e,t){const n=[];let u=e.length;for(;u--;)n[u]=t(e[u]);return n}function La(e,t){const n=e.split("@");let u="";n.length>1&&(u=n[0]+"@",e=n[1]),e=e.replace(Am,".");const i=e.split("."),r=Sm(i,t).join(".");return u+r}function Ba(e){const t=[];let n=0;const u=e.length;for(;n<u;){const i=e.charCodeAt(n++);if(i>=55296&&i<=56319&&n<u){const r=e.charCodeAt(n++);(r&64512)==56320?t.push(((i&1023)<<10)+(r&1023)+65536):(t.push(i),n--)}else t.push(i)}return t}const Dm=e=>String.fromCodePoint(...e),Tm=function(e){return e>=48&&e<58?26+(e-48):e>=65&&e<91?e-65:e>=97&&e<123?e-97:yt},Ss=function(e,t){return e+22+75*(e<26)-((t!=0)<<5)},Na=function(e,t,n){let u=0;for(e=n?wt(e/Em):e>>1,e+=wt(e/t);e>Ui*du>>1;u+=yt)e=wt(e/Ui);return wt(u+(Ui+1)*e/(e+wm))},$a=function(e){const t=[],n=e.length;let u=0,i=Ra,r=Qa,o=e.lastIndexOf(Oa);o<0&&(o=0);for(let s=0;s<o;++s)e.charCodeAt(s)>=128&&Vt("not-basic"),t.push(e.charCodeAt(s));for(let s=o>0?o+1:0;s<n;){const c=u;for(let l=1,f=yt;;f+=yt){s>=n&&Vt("invalid-input");const d=Tm(e.charCodeAt(s++));d>=yt&&Vt("invalid-input"),d>wt((Tn-u)/l)&&Vt("overflow"),u+=d*l;const p=f<=r?Wr:f>=r+du?du:f-r;if(d<p)break;const m=yt-p;l>wt(Tn/m)&&Vt("overflow"),l*=m}const a=t.length+1;r=Na(u-c,a,c==0),wt(u/a)>Tn-i&&Vt("overflow"),i+=wt(u/a),u%=a,t.splice(u++,0,i)}return String.fromCodePoint(...t)},Ha=function(e){const t=[];e=Ba(e);const n=e.length;let u=Ra,i=0,r=Qa;for(const c of e)c<128&&t.push(Vi(c));const o=t.length;let s=o;for(o&&t.push(Oa);s<n;){let c=Tn;for(const l of e)l>=u&&l<c&&(c=l);const a=s+1;c-u>wt((Tn-i)/a)&&Vt("overflow"),i+=(c-u)*a,u=c;for(const l of e)if(l<u&&++i>Tn&&Vt("overflow"),l===u){let f=i;for(let d=yt;;d+=yt){const p=d<=r?Wr:d>=r+du?du:d-r;if(f<p)break;const m=f-p,w=yt-p;t.push(Vi(Ss(p+m%w,0))),f=wt(m/w)}t.push(Vi(Ss(f,0))),r=Na(i,a,s===o),i=0,++s}++i,++u}return t.join("")},Pm=function(e){return La(e,function(t){return vm.test(t)?$a(t.slice(4).toLowerCase()):t})},Mm=function(e){return La(e,function(t){return km.test(t)?"xn--"+Ha(t):t})},ja={version:"2.3.1",ucs2:{decode:Ba,encode:Dm},decode:$a,encode:Ha,toASCII:Mm,toUnicode:Pm},qm={options:{html:!1,xhtmlOut:!1,breaks:!1,langPrefix:"language-",linkify:!1,typographer:!1,quotes:"“”‘’",highlight:null,maxNesting:100},components:{core:{},block:{},inline:{}}},Fm={options:{html:!1,xhtmlOut:!1,breaks:!1,langPrefix:"language-",linkify:!1,typographer:!1,quotes:"“”‘’",highlight:null,maxNesting:20},components:{core:{rules:["normalize","block","inline","text_join"]},block:{rules:["paragraph"]},inline:{rules:["text"],rules2:["balance_pairs","fragments_join"]}}},Im={options:{html:!0,xhtmlOut:!0,breaks:!1,langPrefix:"language-",linkify:!1,typographer:!1,quotes:"“”‘’",highlight:null,maxNesting:20},components:{core:{rules:["normalize","block","inline","text_join"]},block:{rules:["blockquote","code","fence","heading","hr","html_block","lheading","list","reference","paragraph"]},inline:{rules:["autolink","backticks","emphasis","entity","escape","html_inline","image","link","newline","text"],rules2:["balance_pairs","emphasis","fragments_join"]}}},Qm={default:qm,zero:Fm,commonmark:Im},Rm=/^(vbscript|javascript|file|data):/,Om=/^data:image\/(gif|png|jpeg|webp);/;function Lm(e){const t=e.trim().toLowerCase();return Rm.test(t)?Om.test(t):!0}const za=["http:","https:","mailto:"];function Bm(e){const t=Hr(e,!0);if(t.hostname&&(!t.protocol||za.indexOf(t.protocol)>=0))try{t.hostname=ja.toASCII(t.hostname)}catch{}return bu($r(t))}function Nm(e){const t=Hr(e,!0);if(t.hostname&&(!t.protocol||za.indexOf(t.protocol)>=0))try{t.hostname=ja.toUnicode(t.hostname)}catch{}return qn($r(t),qn.defaultChars+"%")}function Ve(e,t){if(!(this instanceof Ve))return new Ve(e,t);t||zr(e)||(t=e||{},e="default"),this.inline=new xu,this.block=new _i,this.core=new Vr,this.renderer=new In,this.linkify=new Ye,this.validateLink=Lm,this.normalizeLink=Bm,this.normalizeLinkText=Nm,this.utils=$h,this.helpers=mi({},Uh),this.options={},this.configure(e),t&&this.set(t)}Ve.prototype.set=function(e){return mi(this.options,e),this};Ve.prototype.configure=function(e){const t=this;if(zr(e)){const n=e;if(e=Qm[n],!e)throw new Error('Wrong `markdown-it` preset "'+n+'", check name')}if(!e)throw new Error("Wrong `markdown-it` preset, can't be empty");return e.options&&t.set(e.options),e.components&&Object.keys(e.components).forEach(function(n){e.components[n].rules&&t[n].ruler.enableOnly(e.components[n].rules),e.components[n].rules2&&t[n].ruler2.enableOnly(e.components[n].rules2)}),this};Ve.prototype.enable=function(e,t){let n=[];Array.isArray(e)||(e=[e]),["core","block","inline"].forEach(function(i){n=n.concat(this[i].ruler.enable(e,!0))},this),n=n.concat(this.inline.ruler2.enable(e,!0));const u=e.filter(function(i){return n.indexOf(i)<0});if(u.length&&!t)throw new Error("MarkdownIt. Failed to enable unknown rule(s): "+u);return this};Ve.prototype.disable=function(e,t){let n=[];Array.isArray(e)||(e=[e]),["core","block","inline"].forEach(function(i){n=n.concat(this[i].ruler.disable(e,!0))},this),n=n.concat(this.inline.ruler2.disable(e,!0));const u=e.filter(function(i){return n.indexOf(i)<0});if(u.length&&!t)throw new Error("MarkdownIt. Failed to disable unknown rule(s): "+u);return this};Ve.prototype.use=function(e){const t=[this].concat(Array.prototype.slice.call(arguments,1));return e.apply(e,t),this};Ve.prototype.parse=function(e,t){if(typeof e!="string")throw new Error("Input data should be a String");const n=new this.core.State(e,this,t);return this.core.process(n),n.tokens};Ve.prototype.render=function(e,t){return t=t||{},this.renderer.render(this.parse(e,t),this.options,t)};Ve.prototype.parseInline=function(e,t){const n=new this.core.State(e,this,t);return n.inlineMode=!0,this.core.process(n),n.tokens};Ve.prototype.renderInline=function(e,t){return t=t||{},this.renderer.render(this.parseInline(e,t),this.options,t)};const $m={},Hm={class:"mx-auto w-full max-w-[1200px] px-4 sm:px-6"};function jm(e,t){return z(),K("div",Hm,[Sn(e.$slots,"default")])}const Qe=Yt($m,[["render",jm]]),zm={class:"post"},Um={class:"mx-auto max-w-3xl py-12 sm:py-16"},Vm={class:"text-3xl font-bold text-ink sm:text-4xl"},Gm={key:0,class:"mt-2 text-sm text-ink-soft"},Wm=["innerHTML"],Km={__name:"default",props:{slug:String},setup(e){const t=e,n=hi(),u=t.slug||n.path.split("/").pop().replace(/\.html$/,""),i=Ga(u),r=Fe(()=>!!i&&(i.meta.hide===!0||i.meta.hide==="true")),o=new Ve({html:!0}),s=Fe(()=>i?o.render(i.content):"");return At({title:`${r.value?"内容已移除":i?i.meta.title:"Post"} - 158 智能营销云`}),(c,a)=>(z(),K("article",zm,[Q(Qe,null,{default:X(()=>[x("div",Um,[r.value?(z(),K(pe,{key:0},[a[0]||(a[0]=x("h1",{class:"text-3xl font-bold text-ink sm:text-4xl"},"内容已移除",-1)),a[1]||(a[1]=x("p",{class:"mt-4 leading-relaxed text-ink-soft"},"该文章的内容已被作者移除，暂时无法访问。",-1))],64)):(z(),K(pe,{key:1},[x("h1",Vm,oe(Te(i)?Te(i).meta.title:"Post"),1),Te(i)?(z(),K("p",Gm,oe(Te(i).meta.date)+" · "+oe(Te(i).meta.author),1)):vt("",!0),x("div",{class:"post-content mt-6",innerHTML:s.value},null,8,Wm)],64))])]),_:1})]))}},Xm=Yt(Km,[["__scopeId","data-v-e1378989"]]),Zm={class:"post"},Jm={class:"mx-auto max-w-3xl py-12 sm:py-16"},Ym=["innerHTML"],e3={__name:"hello-world",props:{slug:String},setup(e){const t=e,n=hi(),u=t.slug||n.path.split("/").pop().replace(/\.html$/,""),i=Ga(u),r=Fe(()=>!!i&&(i.meta.hide===!0||i.meta.hide==="true")),o=new Ve({html:!0}),s=Fe(()=>i?o.render(i.content):"");return At({title:`${r.value?"内容已移除":i?i.meta.title:"Post"} - 158 智能营销云`}),(c,a)=>(z(),K("article",Zm,[Q(Qe,null,{default:X(()=>[x("div",Jm,[r.value?(z(),K(pe,{key:0},[a[0]||(a[0]=x("h1",{class:"text-3xl font-bold text-ink sm:text-4xl"},"内容已移除",-1)),a[1]||(a[1]=x("p",{class:"mt-4 leading-relaxed text-ink-soft"},"该文章的内容已被作者移除，暂时无法访问。",-1))],64)):(z(),K("div",{key:1,class:"post-content mt-6",innerHTML:s.value},null,8,Ym))])]),_:1})]))}},t3=Yt(e3,[["__scopeId","data-v-b46a8f58"]]),n3={class:"relative overflow-hidden bg-gradient-to-br from-canvas-blue via-white to-canvas-green"},u3={key:0,class:"mb-3 text-1xl font-semibold uppercase tracking-widest text-primary"},i3={key:1,class:"mx-auto mt-4 max-w-3xl text-base text-ink-soft sm:text-lg"},r3={key:2,class:"mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row"},bn={__name:"PageHero",props:{eyebrow:{type:String,default:""},title:{type:String,required:!0},subtitle:{type:String,default:""},variant:{type:String,default:"inner"}},setup(e){return(t,n)=>(z(),K("section",n3,[n[0]||(n[0]=x("div",{class:"pointer-events-none absolute inset-0 opacity-70",style:{background:"radial-gradient(60% 60% at 75% 0%, rgba(30,111,194,0.12), transparent)"}},null,-1)),Q(Qe,{class:"relative"},{default:X(()=>[x("div",{class:at([e.variant==="home"?"py-20 lg:py-28":"py-14 lg:py-20","text-center"])},[e.eyebrow?(z(),K("p",u3,oe(e.eyebrow),1)):vt("",!0),x("h1",{class:at([e.variant==="home"?"text-4xl sm:text-5xl lg:text-6xl":"text-3xl sm:text-4xl lg:text-5xl","font-bold leading-tight text-ink"])},oe(e.title),3),e.subtitle?(z(),K("p",i3,oe(e.subtitle),1)):vt("",!0),t.$slots.actions?(z(),K("div",r3,[Sn(t.$slots,"actions")])):vt("",!0)],2)]),_:3})]))}},o3={class:"page"},s3={class:"mx-auto max-w-3xl py-12 sm:py-16"},c3=["innerHTML"],a3={__name:"about",props:{slug:String},setup(e){const t=e,n=hi(),u=t.slug||n.path.split("/").pop().replace(/\.html$/,""),i=Wa(u),r=new Ve({html:!0}),o=Fe(()=>i?r.render(i.content):"");return At({title:`${i?i.meta.title:"Page"} - 158 智能营销云`}),(s,c)=>(z(),K("article",o3,[Q(bn,{variant:"inner",eyebrow:"关于我们",title:"长期专注邮件营销数据处理",subtitle:"我们见证了邮件营销从'单机工具'到'AI 工作台'的演进，并把自己的产品同步升级。"}),Q(Qe,null,{default:X(()=>[x("div",s3,[x("div",{class:"page-content mt-6",innerHTML:o.value},null,8,c3)])]),_:1})]))}},l3=Yt(a3,[["__scopeId","data-v-56234997"]]),f3={},d3={class:"group h-full rounded-2xl border border-transparent bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-card-hover sm:p-7"};function p3(e,t){return z(),K("div",d3,[Sn(e.$slots,"default")])}const yi=Yt(f3,[["render",p3]]),h3={class:"py-14 sm:py-20"},m3={class:"grid grid-cols-1 gap-6 lg:grid-cols-2"},g3={class:"mb-4 flex items-start justify-between gap-4"},b3={class:"flex items-center gap-3"},_3=["innerHTML"],x3={class:"text-xl font-semibold text-ink"},y3={class:"mb-3 text-sm font-medium text-ink"},w3={class:"space-y-2"},E3={__name:"capabilities",setup(e){const t=[{title:"内容 AI",problem:"写文案慢、主题行不会优化、千人一面",abilities:["多版本文案 / 主题行生成","变量自动映射（姓名、公司等）","品牌语气保持一致","发前垃圾邮件评分 + 改写建议"],icon:'<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8"><path stroke-linecap="round" stroke-linejoin="round" d="M4 5h16M4 9h10M4 13h16M4 17h7"/></svg>'},{title:"受众 AI",problem:"名单粗放、转化低、重复联系人",abilities:["RFM + 行为聚类分群","转化倾向评分","沉睡用户唤醒","去重 / 合规清洗（名单全程本地）"],icon:'<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8"><circle cx="9" cy="8" r="3"/><path stroke-linecap="round" stroke-linejoin="round" d="M3 20a6 6 0 0112 0"/></svg>'},{title:"触达 AI",problem:"进了垃圾箱、没人看",abilities:["每收件人最佳发送时间","域名 / 邮箱健康度监控（SPF/DKIM/DMARC/黑名单）","新域名预热计划","到达率预测"],icon:'<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8"><path stroke-linecap="round" stroke-linejoin="round" d="M12 3v6m0 0l3-3m-3 3L9 6M5 14h14v5a1 1 0 01-1 1H6a1 1 0 01-1-1v-5z"/></svg>'},{title:"策略 AI",problem:"不知发什么序列、效果说不清",abilities:["自动生成邮件旅程","A/B 自动优化","效果归因与复盘建议","策略可持续迭代"],icon:'<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8"><path stroke-linecap="round" stroke-linejoin="round" d="M4 19V5m0 14h16M8 15l3-4 3 3 4-6"/></svg>'}];return At({title:"产品能力 - 158 智能营销云"}),(n,u)=>(z(),K("div",null,[Q(bn,{variant:"inner",eyebrow:"产品能力",title:"四层 AI 能力，让邮件营销更聪明",subtitle:"发送始终在本地客户端（自有域名、独立 IP、SMTP/ESMTP），AI只处理脱敏特征与聚合效果"}),x("section",h3,[Q(Qe,null,{default:X(()=>[x("div",m3,[(z(),K(pe,null,Je(t,i=>Q(yi,{key:i.title},{default:X(()=>[x("div",g3,[x("div",b3,[x("span",{class:"inline-flex h-10 w-10 items-center justify-center rounded-xl bg-canvas-blue text-primary",innerHTML:i.icon},null,8,_3),x("h3",x3,oe(i.title),1)]),u[0]||(u[0]=x("span",{class:"shrink-0 rounded-full bg-canvas-green px-3 py-1 text-xs font-medium text-growth"},"敏感数据出台：否",-1))]),x("p",y3,"解决的问题："+oe(i.problem),1),x("ul",w3,[(z(!0),K(pe,null,Je(i.abilities,r=>(z(),K("li",{key:r,class:"flex gap-2 text-sm text-ink-soft"},[u[1]||(u[1]=x("span",{class:"mt-1 text-primary"},"✓",-1)),x("span",null,oe(r),1)]))),128))])]),_:2},1024)),64))]),u[2]||(u[2]=x("div",{class:"mt-10 rounded-2xl bg-canvas-blue px-6 py-5 text-center text-sm text-ink-soft"}," 所有AI能力均符合以下要求：原始名单 / 邮箱不离开你的本地客户端，云端 AI 仅交换脱敏特征与聚合统计。 ",-1))]),_:1})])]))}},v3=["href"],ln={__name:"Button",props:{to:{type:String,default:""},href:{type:String,default:""},variant:{type:String,default:"primary"},size:{type:String,default:"md"}},emits:["click"],setup(e){const t=e,n=Fe(()=>{const u="inline-flex items-center justify-center rounded-xl font-semibold transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 min-h-[44px]",i=t.size==="sm"?"px-4 text-sm min-h-[40px]":"px-6 text-base";return t.variant==="secondary"?`${u} ${i} border border-primary/30 bg-white text-primary hover:border-primary hover:bg-canvas-blue`:t.variant==="ghost"?`${u} ${i} text-ink-soft hover:text-primary`:`${u} ${i} bg-primary text-white shadow-card hover:bg-primary-light hover:shadow-card-hover`});return(u,i)=>{const r=gn("RouterLink");return e.to?(z(),nu(r,{key:0,to:e.to,class:at(n.value)},{default:X(()=>[Sn(u.$slots,"default")]),_:3},8,["to","class"])):e.href?(z(),K("a",{key:1,href:e.href,class:at(n.value),target:"_blank",rel:"noopener"},[Sn(u.$slots,"default")],10,v3)):(z(),K("button",{key:2,class:at(n.value),onClick:i[0]||(i[0]=o=>u.$emit("click"))},[Sn(u.$slots,"default")],2))}}},k3={class:"py-14 sm:py-20"},A3={class:"grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"},C3={class:"text-sm font-medium text-primary"},S3={class:"mb-4 mt-1 text-lg font-semibold text-ink"},D3={class:"grid grid-cols-2 gap-3"},T3={class:"text-xl font-bold text-growth"},P3={class:"mt-0.5 text-xs text-ink-soft"},M3={class:"mt-12 rounded-2xl bg-gradient-to-r from-primary to-primary-light px-6 py-10 text-center text-white"},q3={class:"mt-6 flex justify-center"},F3={__name:"cases",setup(e){const t=[{industry:"电商零售",title:"某服饰电商复购唤醒",metrics:[{label:"打开率提升",value:"X%"},{label:"退订率下降",value:"Y%"},{label:"复购转化",value:"+Z%"},{label:"沉睡唤醒",value:"+W%"}]},{industry:"B2B SaaS",title:"某工具厂商线索培育",metrics:[{label:"MQL→SQL",value:"+Z%"},{label:"培育周期",value:"-D天"},{label:"到达率",value:"99%"},{label:"回复率",value:"+V%"}]},{industry:"教育培训",title:"某机构活动邀约",metrics:[{label:"送达率",value:"稳定"},{label:"到场确认",value:"+W%"},{label:"转化报名",value:"+U%"},{label:"成本",value:"下降"}]}];return At({title:"客户案例 - 158 智能营销云"}),(n,u)=>(z(),K("div",null,[Q(bn,{variant:"inner",eyebrow:"客户案例",title:"用脱敏数据，证明 AI 营销的价值",subtitle:"以下均为聚合 / 去标识化指标，不暴露任何客户原始名单或隐私数据。"}),x("section",k3,[Q(Qe,null,{default:X(()=>[x("div",A3,[(z(),K(pe,null,Je(t,i=>Q(yi,{key:i.title},{default:X(()=>[x("p",C3,oe(i.industry),1),x("h3",S3,oe(i.title),1),x("div",D3,[(z(!0),K(pe,null,Je(i.metrics,r=>(z(),K("div",{key:r.label,class:"rounded-xl bg-canvas-blue px-3 py-3 text-center"},[x("p",T3,oe(r.value),1),x("p",P3,oe(r.label),1)]))),128))])]),_:2},1024)),64))]),x("div",M3,[u[1]||(u[1]=x("h3",{class:"text-2xl font-bold"},"想看看 158 在你的业务里能带来什么？",-1)),u[2]||(u[2]=x("p",{class:"mx-auto mt-2 max-w-2xl text-white/80"},"预约一次 30 分钟演示，我们用你的场景讲清楚能力组合与预期效果。",-1)),x("div",q3,[Q(ln,{to:"/pages/about.html",variant:"secondary"},{default:X(()=>[...u[0]||(u[0]=[me("预约演示",-1)])]),_:1})])])]),_:1})])]))}},I3={class:"page"},Q3={class:"mx-auto max-w-3xl py-12 sm:py-16"},R3={class:"text-3xl font-bold text-ink sm:text-4xl"},O3=["innerHTML"],L3={__name:"default",props:{slug:String},setup(e){const t=e,n=hi(),u=t.slug||n.path.split("/").pop().replace(/\.html$/,""),i=Wa(u),r=new Ve({html:!0}),o=Fe(()=>i?r.render(i.content):"");return At({title:`${i?i.meta.title:"Page"} - 158 智能营销云`}),(s,c)=>(z(),K("article",I3,[Q(Qe,null,{default:X(()=>[x("div",Q3,[x("h1",R3,oe(Te(i)?Te(i).meta.title:"Page"),1),x("div",{class:"page-content mt-6",innerHTML:o.value},null,8,O3)])]),_:1})]))}},B3=Yt(L3,[["__scopeId","data-v-c1656ed0"]]),N3={key:0,class:"mb-2 text-sm font-semibold uppercase tracking-widest text-primary"},$3={class:"text-2xl font-bold text-ink sm:text-3xl lg:text-4xl"},Hn={__name:"SectionTitle",props:{eyebrow:{type:String,default:""},title:{type:String,required:!0},subtitle:{type:String,default:""},align:{type:String,default:"center"}},setup(e){return(t,n)=>(z(),K("div",{class:at([e.align==="center"?"text-center":"text-left","mb-10"])},[e.eyebrow?(z(),K("p",N3,oe(e.eyebrow),1)):vt("",!0),x("h2",$3,oe(e.title),1),e.subtitle?(z(),K("p",{key:1,class:at(["mx-auto mt-3 max-w-3xl text-base text-ink-soft sm:text-lg",e.align==="center"?"mx-auto":"mx-0"])},oe(e.subtitle),3)):vt("",!0)],2))}},H3={class:"py-14 sm:py-20"},j3={id:"download",class:"scroll-mt-24"},z3={class:"grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"},U3={class:"text-sm text-ink"},V3=["href"],G3={id:"license",class:"scroll-mt-24 mt-12 rounded-2xl border border-gray-100 bg-canvas-blue p-6"},W3={class:"sm:col-span-2"},K3={key:0,class:"mt-4 rounded-xl bg-white px-4 py-3 text-sm text-ink-soft"},X3={class:"mt-12"},Z3={class:"overflow-x-auto rounded-2xl border border-gray-100"},J3={class:"w-full min-w-[640px] text-left text-sm"},Y3={class:"divide-y divide-gray-100"},eg={class:"px-4 py-3 text-ink-soft"},tg={class:"px-4 py-3 text-ink"},ng={class:"mt-12"},ug={class:"space-y-3"},ig={class:"text-sm font-medium text-ink"},rg={class:"ml-2 text-xs text-ink-soft"},og={class:"mt-1 text-sm text-ink-soft"},sg={__name:"legacy",setup(e){const t=Kt(""),n=Kt(""),u=Kt(!1),i=[{name:"邮件营销专家",url:"#"},{name:"邮件地址搜索",url:"#"},{name:"手机号码搜索",url:"#"},{name:"QQ 号码采集",url:"#"},{name:"营销 QQ 采集",url:"#"},{name:"邮件地址魔方",url:"#"},{name:"超大文件分割机",url:"#"}],r=[{old:"邮件营销专家（¥688）",new:"AI 智能邮件营销 / 自动化客户旅程"},{old:"邮件 / 手机 / QQ 采集",new:"合规线索挖掘与 AI 清洗（CDP 化）"},{old:"营销 QQ 采集（¥408）",new:"社媒 / 官网触点整合"},{old:"邮件地址魔方",new:"联系人智能分组与去重"},{old:"超大文件分割机",new:"附件 / 名单分片处理工具（保留为辅助能力）"}],o=[{v:"v2024.2",date:"2024-06",note:"本地客户端稳定性优化，兼容新版 SMTP/ESMTP。"},{v:"v2023.5",date:"2023-11",note:"联系人去重与合规清洗能力增强。"},{v:"v2022.1",date:"2022-03",note:"初始 AI 能力预览版（内测）。"}];return At({title:"老用户专区 - 158 智能营销云"}),(s,c)=>(z(),K("div",null,[Q(bn,{variant:"inner",eyebrow:"老用户专区",title:"欢迎回来，老用户",subtitle:"旧版软件下载、授权查询与新旧能力迁移指引，都在这里。"}),x("section",H3,[Q(Qe,null,{default:X(()=>[x("div",j3,[Q(Hn,{align:"left",eyebrow:"下载",title:"旧版软件列表"}),x("div",z3,[(z(),K(pe,null,Je(i,a=>x("div",{key:a.name,class:"flex items-center justify-between rounded-xl border border-gray-100 bg-white px-4 py-3"},[x("span",U3,oe(a.name),1),x("a",{href:a.url,class:"rounded-lg bg-canvas-blue px-3 py-1.5 text-xs font-medium text-primary transition-colors hover:bg-primary hover:text-white"},"⭐️",8,V3)])),64))]),c[3]||(c[3]=x("p",{class:"mt-3 text-xs text-ink-soft"},"历史安装包仅供老用户使用，可执行软件的下载服务器已经关闭，请直接联系我们获取；新用户建议直接使用 AI 邮件营销工作台。",-1))]),x("div",G3,[Q(Hn,{align:"left",eyebrow:"找回",title:"授权查询",subtitle:"用订单编号和序列号查询你曾购买的产品与下载权限。"}),x("form",{class:"grid grid-cols-1 gap-4 sm:grid-cols-2",onSubmit:c[2]||(c[2]=Af(a=>u.value=!0,["prevent"]))},[ro(x("input",{"onUpdate:modelValue":c[0]||(c[0]=a=>t.value=a),type:"email",placeholder:"订单编号",class:"min-h-[44px] rounded-xl border border-gray-200 bg-white px-4 text-sm outline-none focus:border-primary"},null,512),[[Oo,t.value]]),ro(x("input",{"onUpdate:modelValue":c[1]||(c[1]=a=>n.value=a),placeholder:"序列号（可选）",class:"min-h-[44px] rounded-xl border border-gray-200 bg-white px-4 text-sm outline-none focus:border-primary"},null,512),[[Oo,n.value]]),x("div",W3,[Q(ln,{type:"submit",variant:"primary"},{default:X(()=>[...c[4]||(c[4]=[me("查询我的授权",-1)])]),_:1}),c[5]||(c[5]=x("p",{class:"mt-3 text-xs text-ink-soft"},"查询为占位功能，正在对接真实校验数据。",-1))])],32),u.value?(z(),K("p",K3,"已收到查询请求（演示）。如需人工协助，请通过页脚公司信息与关联站点联系。")):vt("",!0)]),x("div",X3,[Q(Hn,{align:"left",eyebrow:"升级",title:"旧产品 → 新能力映射",subtitle:"AI营销可以参考的能力对照表"}),x("div",Z3,[x("table",J3,[c[6]||(c[6]=x("thead",{class:"bg-canvas-blue text-ink"},[x("tr",null,[x("th",{class:"px-4 py-3 font-semibold"},"原产品（旧）"),x("th",{class:"px-4 py-3 font-semibold"},"升级后对应能力模块（新）")])],-1)),x("tbody",Y3,[(z(),K(pe,null,Je(r,a=>x("tr",{key:a.old},[x("td",eg,oe(a.old),1),x("td",tg,oe(a.new),1)])),64))])])])]),x("div",ng,[Q(Hn,{align:"left",eyebrow:"归档",title:"历史版本说明"}),x("ul",ug,[(z(),K(pe,null,Je(o,a=>x("li",{key:a.v,class:"rounded-xl border border-gray-100 px-4 py-3"},[x("p",ig,[me(oe(a.v)+" ",1),x("span",rg,oe(a.date),1)]),x("p",og,oe(a.note),1)])),64))])])]),_:1})])]))}},cg={class:"py-14 sm:py-20"},ag={class:"grid grid-cols-1 gap-6 md:grid-cols-2"},lg={class:"mb-3 text-xl font-semibold text-ink"},fg={class:"space-y-3 text-sm"},dg={class:"text-ink-soft"},pg={class:"text-ink-soft"},hg={class:"text-ink-soft"},mg={__name:"solutions",setup(e){const t=[{title:"电商复购唤醒",pain:"老客沉睡、促销信息打开率低、复购靠硬推。",power:"受众 AI 分群 + 内容 AI 个性化文案 + 触达 AI 最佳发送时间。",result:"某电商复购邮件打开率提升 X%、沉睡客唤醒率提升 Y%。"},{title:"B2B 线索培育",pain:"线索量大但转化慢、销售跟进无序。",power:"转化倾向评分 + 自动邮件旅程 + A/B 策略优化。",result:"某 SaaS 线索培育周期缩短、MQL 转 SQL 比例提升 Z%。"},{title:"活动邀约自动化",pain:"线下/线上活动邀约人工繁琐、到场率低。",power:"变量映射批量邀约 + 到达率监控 +  reminders 自动序列。",result:"某活动邀约送达率稳定、到场确认率提升 W%。"},{title:"会员生命周期运营",pain:"会员分层粗、权益触达不及时。",power:"RFM 聚类 + 生命周期邮件旅程 + 效果归因复盘。",result:"某品牌会员活跃度与续费意向指标改善 V%。"}];return At({title:"解决方案 - 158 智能营销云"}),(n,u)=>(z(),K("div",null,[Q(bn,{variant:"inner",eyebrow:"解决方案",title:"按场景拆分的智能营销方案",subtitle:"从电商复购到会员运营，用 AI 能力组合替换「工具堆叠」，让每一次触达都更精准。"}),x("section",cg,[Q(Qe,null,{default:X(()=>[x("div",ag,[(z(),K(pe,null,Je(t,i=>Q(yi,{key:i.title},{default:X(()=>[x("h3",lg,oe(i.title),1),x("div",fg,[x("div",null,[u[0]||(u[0]=x("p",{class:"mb-1 font-medium text-danger/80"},"痛点与问题",-1)),x("p",dg,oe(i.pain),1)]),x("div",null,[u[1]||(u[1]=x("p",{class:"mb-1 font-medium text-primary"},"158 能力组合",-1)),x("p",pg,oe(i.power),1)]),x("div",null,[u[2]||(u[2]=x("p",{class:"mb-1 font-medium text-growth"},"预期效果（脱敏）",-1)),x("p",hg,oe(i.result),1)])])]),_:2},1024)),64))])]),_:1})])]))}},gg={class:"hidden bg-ink text-white sm:block"},bg={__name:"TopBar",setup(e){return(t,n)=>{const u=gn("RouterLink");return z(),K("div",gg,[Q(Qe,{class:"flex items-center justify-end gap-4 py-1.5 text-xs"},{default:X(()=>[n[2]||(n[2]=x("span",{class:"opacity-80"},"老用户？",-1)),Q(u,{to:"/pages/legacy.html#download",class:"transition-colors hover:text-growth-light"},{default:X(()=>[...n[0]||(n[0]=[me("旧版下载",-1)])]),_:1}),n[3]||(n[3]=x("span",{class:"opacity-40"},"·",-1)),Q(u,{to:"/pages/legacy.html#license",class:"transition-colors hover:text-growth-light"},{default:X(()=>[...n[1]||(n[1]=[me("授权查询",-1)])]),_:1})]),_:1})])}}},_g={class:"sticky top-0 z-50 border-b border-gray-100 bg-white/90 backdrop-blur"},xg={class:"hidden items-center gap-7 text-sm font-medium text-ink-soft md:flex"},yg={class:"hidden md:block"},wg={key:0,xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},Eg={key:1,xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},vg={key:0,class:"border-t border-gray-100 bg-white md:hidden"},kg={__name:"SiteHeader",setup(e){const t=Kt(!1),n=[{label:"首页",to:"/"},{label:"产品能力",to:"/pages/capabilities.html"},{label:"解决方案",to:"/pages/solutions.html"},{label:"客户案例",to:"/pages/cases.html"},{label:"关于我们",to:"/pages/about.html"},{label:"老用户专区",to:"/pages/legacy.html",muted:!0}];return(u,i)=>{const r=gn("RouterLink");return z(),K("header",_g,[Q(Qe,{class:"flex h-16 items-center justify-between"},{default:X(()=>[Q(r,{to:"/",class:"flex items-center gap-2 font-bold text-ink"},{default:X(()=>[...i[3]||(i[3]=[x("span",{class:"inline-flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-sm text-white"},"158",-1),x("span",{class:"text-lg"},"智能营销云",-1)])]),_:1}),x("nav",xg,[(z(),K(pe,null,Je(n,o=>Q(r,{key:o.to,to:o.to,class:at(["transition-colors hover:text-primary",o.muted?"opacity-70 hover:opacity-100":""])},{default:X(()=>[me(oe(o.label),1)]),_:2},1032,["to","class"])),64))]),x("div",yg,[Q(ln,{to:"/pages/capabilities.html",variant:"primary",size:"sm"},{default:X(()=>[...i[4]||(i[4]=[me("免费体验",-1)])]),_:1})]),x("button",{class:"inline-flex h-11 w-11 items-center justify-center rounded-lg text-ink md:hidden","aria-label":"打开菜单",onClick:i[0]||(i[0]=o=>t.value=!t.value)},[t.value?(z(),K("svg",Eg,[...i[6]||(i[6]=[x("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M6 6l12 12M18 6L6 18"},null,-1)])])):(z(),K("svg",wg,[...i[5]||(i[5]=[x("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M4 6h16M4 12h16M4 18h16"},null,-1)])]))])]),_:1}),Q(J0,{name:"drawer"},{default:X(()=>[t.value?(z(),K("nav",vg,[Q(Qe,{class:"flex flex-col py-2"},{default:X(()=>[(z(),K(pe,null,Je(n,o=>Q(r,{key:o.to,to:o.to,class:"min-h-[44px] border-b border-gray-50 py-3 text-ink-soft last:border-0",onClick:i[1]||(i[1]=s=>t.value=!1)},{default:X(()=>[me(oe(o.label),1)]),_:2},1032,["to"])),64)),Q(r,{to:"/pages/capabilities.html",class:"my-2 inline-flex min-h-[44px] items-center justify-center rounded-xl bg-primary text-white",onClick:i[2]||(i[2]=o=>t.value=!1)},{default:X(()=>[...i[7]||(i[7]=[me("免费体验工作台",-1)])]),_:1})]),_:1})])):vt("",!0)]),_:1})])}}},Ag=Yt(kg,[["__scopeId","data-v-c127da81"]]),Cg={class:"bg-ink text-gray-300"},Sg={class:"space-y-2 text-sm"},Dg={class:"space-y-2 text-sm"},Tg={class:"border-t border-white/10"},Pg={class:"flex flex-wrap gap-4"},Mg={__name:"SiteFooter",setup(e){return(t,n)=>{const u=gn("RouterLink");return z(),K("footer",Cg,[Q(Qe,{class:"grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4"},{default:X(()=>[n[9]||(n[9]=x("div",null,[x("div",{class:"mb-3 flex items-center gap-2 text-lg font-bold text-white"},[x("span",{class:"inline-flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-sm"},"158"),me(" 智能营销云 ")]),x("p",{class:"text-sm leading-relaxed"},"AI 邮件营销工作台——你的通道你掌控，AI 让你发得更好。发送留在你的本地客户端，能力由 AI 提供。")],-1)),x("div",null,[n[3]||(n[3]=x("h4",{class:"mb-3 text-sm font-semibold text-white"},"产品",-1)),x("ul",Sg,[x("li",null,[Q(u,{to:"/pages/capabilities.html",class:"transition-colors hover:text-growth-light"},{default:X(()=>[...n[0]||(n[0]=[me("产品能力",-1)])]),_:1})]),x("li",null,[Q(u,{to:"/pages/solutions.html",class:"transition-colors hover:text-growth-light"},{default:X(()=>[...n[1]||(n[1]=[me("解决方案",-1)])]),_:1})]),x("li",null,[Q(u,{to:"/pages/cases.html",class:"transition-colors hover:text-growth-light"},{default:X(()=>[...n[2]||(n[2]=[me("客户案例",-1)])]),_:1})])])]),x("div",null,[n[8]||(n[8]=x("h4",{class:"mb-3 text-sm font-semibold text-white"},"资源",-1)),x("ul",Dg,[x("li",null,[Q(u,{to:"/pages/about.html",class:"transition-colors hover:text-growth-light"},{default:X(()=>[...n[4]||(n[4]=[me("关于我们",-1)])]),_:1})]),x("li",null,[Q(u,{to:"/pages/compliance.html",class:"transition-colors hover:text-growth-light"},{default:X(()=>[...n[5]||(n[5]=[me("合规说明",-1)])]),_:1})]),x("li",null,[Q(u,{to:"/pages/legacy.html",class:"transition-colors hover:text-growth-light"},{default:X(()=>[...n[6]||(n[6]=[me("老用户专区",-1)])]),_:1})]),x("li",null,[Q(u,{to:"/sitemap.html",class:"transition-colors hover:text-growth-light"},{default:X(()=>[...n[7]||(n[7]=[me("站点地图",-1)])]),_:1})])])]),n[10]||(n[10]=x("div",null,[x("h4",{class:"mb-3 text-sm font-semibold text-white"},"联系我们"),x("address",{class:"space-y-1 text-sm not-italic leading-relaxed"},[x("p",null,"上海长宁协和路 787 号 D 北 208"),x("p",null,"邮编 200335"),x("p",null,[x("a",{href:"https://wwww.abot.cn",target:"_blank",rel:"noopener",class:"transition-colors hover:text-growth-light"},"延誉宝")])])],-1))]),_:1}),x("div",Tg,[Q(Qe,{class:"flex flex-col gap-2 py-4 text-xs text-gray-400 sm:flex-row sm:items-center sm:justify-between"},{default:X(()=>[n[14]||(n[14]=x("span",null,"© 2026 158软件　",-1)),x("div",Pg,[Q(u,{to:"/pages/compliance.html",class:"transition-colors hover:text-gray-200"},{default:X(()=>[...n[11]||(n[11]=[me("合规说明",-1)])]),_:1}),Q(u,{to:"/pages/legacy.html",class:"transition-colors hover:text-gray-200"},{default:X(()=>[...n[12]||(n[12]=[me("老用户专区",-1)])]),_:1}),n[13]||(n[13]=x("a",{href:"https://wwww.abot.cn",target:"_blank",rel:"noopener",class:"transition-colors hover:text-gray-200"},"延誉宝",-1))])]),_:1})]),n[15]||(n[15]=x("div",{style:{display:"none"}},null,-1))])}}},qg={class:"flex min-h-screen flex-col bg-white"},Fg={class:"flex-1"},Ig={__name:"DefaultLayout",setup(e){return(t,n)=>{const u=gn("RouterView");return z(),K("div",qg,[Q(bg),Q(Ag),x("main",Fg,[Q(u)]),Q(Mg)])}}},Qg={class:"py-16 sm:py-20"},Rg={class:"grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"},Og=["innerHTML"],Lg={class:"mb-2 text-lg font-semibold text-ink"},Bg={class:"text-sm leading-relaxed text-ink-soft"},Ng={class:"bg-canvas-blue py-10"},$g={class:"py-16 text-center sm:py-20"},Hg={class:"mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row"},jg={__name:"index",setup(e){const t=[{title:"内容 AI",desc:"多版本文案/主题行生成、变量自动映射、品牌语气一致、发前垃圾邮件评分与改写建议。",icon:'<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8"><path stroke-linecap="round" stroke-linejoin="round" d="M4 5h16M4 9h10M4 13h16M4 17h7"/><path stroke-linecap="round" stroke-linejoin="round" d="M14 17l3 3 3-3"/></svg>'},{title:"受众 AI",desc:"RFM 与行为聚类、转化倾向评分、沉睡唤醒、去重与合规清洗，名单全程留本地。",icon:'<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8"><circle cx="9" cy="8" r="3"/><path stroke-linecap="round" stroke-linejoin="round" d="M3 20a6 6 0 0112 0M16 11a3 3 0 100-6M21 20a6 6 0 00-5-5.9"/></svg>'},{title:"触达 AI",desc:"最佳发送时间、域名/邮箱健康度（SPF/DKIM/DMARC/黑名单）监控、新域名预热与到达率预测。",icon:'<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8"><path stroke-linecap="round" stroke-linejoin="round" d="M12 3v6m0 0l3-3m-3 3L9 6"/><path stroke-linecap="round" stroke-linejoin="round" d="M5 14h14v5a1 1 0 01-1 1H6a1 1 0 01-1-1v-5z"/></svg>'},{title:"策略 AI",desc:"自动生成邮件旅程、A/B 自动优化、效果归因与复盘建议，让每次发送都有据可依。",icon:'<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8"><path stroke-linecap="round" stroke-linejoin="round" d="M4 19V5m0 14h16M8 15l3-4 3 3 4-6"/></svg>'}];return(n,u)=>(z(),K("div",null,[Q(bn,{variant:"home",eyebrow:"AI 邮件营销工作台",title:"158 智能营销云",subtitle:"你的邮件，你自己的通道，AI 让你发得更好。"},{actions:X(()=>[Q(ln,{to:"/pages/capabilities.html",variant:"primary"},{default:X(()=>[...u[0]||(u[0]=[me("免费体验工作台",-1)])]),_:1}),Q(ln,{href:"#showreel",variant:"secondary"},{default:X(()=>[...u[1]||(u[1]=[me("观看 3 分钟升级短片",-1)])]),_:1})]),_:1}),x("section",Qg,[Q(Qe,null,{default:X(()=>[Q(Hn,{eyebrow:"能力概览",title:"四层 AI 能力，覆盖邮件营销全链路",subtitle:"内容、受众、触达、策略——发送始终留在你的本地客户端，AI 只处理脱敏特征与聚合效果。"}),x("div",Rg,[(z(),K(pe,null,Je(t,i=>Q(yi,{key:i.title},{default:X(()=>[x("div",{class:"mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-canvas-blue text-primary",innerHTML:i.icon},null,8,Og),x("h3",Lg,oe(i.title),1),x("p",Bg,oe(i.desc),1)]),_:2},1024)),64))])]),_:1})]),x("section",Ng,[Q(Qe,null,{default:X(()=>[...u[2]||(u[2]=[x("div",{class:"grid grid-cols-1 gap-6 text-center sm:grid-cols-3"},[x("div",null,[x("p",{class:"text-3xl font-bold text-primary"},[me("15"),x("span",{class:"text-lg"},"年+")]),x("p",{class:"mt-1 text-sm text-ink-soft"},"邮件营销领域深耕")]),x("div",null,[x("p",{class:"text-3xl font-bold text-primary"},"平滑"),x("p",{class:"mt-1 text-sm text-ink-soft"},"老用户旧版能力无缝迁移")]),x("div",null,[x("p",{class:"text-3xl font-bold text-growth"},"合规可控"),x("p",{class:"mt-1 text-sm text-ink-soft"},"数据本地化、去标识化处理")])],-1)])]),_:1})]),x("section",$g,[Q(Qe,null,{default:X(()=>[u[5]||(u[5]=x("h2",{class:"text-2xl font-bold text-ink sm:text-3xl"},"准备好用 AI 重新定义你的邮件营销了吗？",-1)),u[6]||(u[6]=x("p",{class:"mx-auto mt-3 max-w-2xl text-ink-soft"},'从内容生成到触达优化，158 帮你把"发得多"升级为"发得准、发得合规"。',-1)),x("div",Hg,[Q(ln,{to:"/pages/capabilities.html",variant:"primary"},{default:X(()=>[...u[3]||(u[3]=[me("查看产品能力",-1)])]),_:1}),Q(ln,{to:"/pages/solutions.html",variant:"secondary"},{default:X(()=>[...u[4]||(u[4]=[me("浏览解决方案",-1)])]),_:1})])]),_:1})])]))}},zg={class:"py-12 sm:py-16"},Ug={class:"mx-auto max-w-3xl space-y-10"},Vg={class:"divide-y divide-gray-100 rounded-2xl border border-gray-100"},Gg={class:"px-4 py-3"},Wg={key:0},Kg={class:"mb-3 text-xl font-semibold text-ink"},Xg={class:"divide-y divide-gray-100 rounded-2xl border border-gray-100"},Zg={class:"text-xs text-ink-soft"},Jg={__name:"sitemap",setup(e){const t=Ua(),n=Va(),u=t.filter(r=>!(r.meta.hide===!0||r.meta.hide==="true")),i=n.filter(r=>!(r.meta.hide===!0||r.meta.hide==="true"));return At({title:"站点地图 - 158 智能营销云"}),(r,o)=>{const s=gn("RouterLink");return z(),K("div",null,[Q(bn,{variant:"inner",eyebrow:"导航",title:"站点地图",subtitle:"全站页面与文章一览。"}),x("section",zg,[Q(Qe,null,{default:X(()=>[x("div",Ug,[x("div",null,[o[1]||(o[1]=x("h2",{class:"mb-3 text-xl font-semibold text-ink"},"主要页面",-1)),x("ul",Vg,[(z(!0),K(pe,null,Je(Te(i),c=>(z(),K("li",{key:c.slug,class:"px-4 py-3"},[Q(s,{to:`/pages/${c.slug}.html`,class:"text-primary hover:underline"},{default:X(()=>[me(oe(c.meta.title||c.slug),1)]),_:2},1032,["to"])]))),128)),x("li",Gg,[Q(s,{to:"/sitemap.html",class:"text-primary hover:underline"},{default:X(()=>[...o[0]||(o[0]=[me("站点地图",-1)])]),_:1})])])]),Te(u).length?(z(),K("div",Wg,[x("h2",Kg,"文章（共 "+oe(Te(u).length)+" 篇）",1),x("ul",Xg,[(z(!0),K(pe,null,Je(Te(u),c=>(z(),K("li",{key:c.slug,class:"flex items-center justify-between px-4 py-3"},[Q(s,{to:`/posts/${c.slug}.html`,class:"text-primary hover:underline"},{default:X(()=>[me(oe(c.meta.title||c.slug),1)]),_:2},1032,["to"]),x("span",Zg,oe(c.meta.date),1)]))),128))])])):vt("",!0)])]),_:1})])])}}},dr=Object.assign({"../content/posts/getting-started.md":Md,"../content/posts/hello-world.md":qd,"../content/posts/qunfa158-158-139.md":Fd,"../content/posts/qunfa158-158-178.md":Id,"../content/posts/qunfa158-158-27.md":Qd,"../content/posts/qunfa158-158-319.md":Rd,"../content/posts/qunfa158-158-352.md":Od,"../content/posts/qunfa158-158-363.md":Ld,"../content/posts/qunfa158-158-369.md":Bd,"../content/posts/qunfa158-158-39.md":Nd,"../content/posts/qunfa158-158-471.md":$d,"../content/posts/qunfa158-158-507.md":Hd,"../content/posts/qunfa158-158-542.md":jd,"../content/posts/qunfa158-158-671.md":zd,"../content/posts/qunfa158-158-678.md":Ud,"../content/posts/qunfa158-158-783.md":Vd,"../content/posts/qunfa158-158-853.md":Gd,"../content/posts/qunfa158-qunfa-1.md":Wd,"../content/posts/qunfa158-qunfa-137.md":Kd,"../content/posts/qunfa158-qunfa-141.md":Xd,"../content/posts/qunfa158-qunfa-143.md":Zd,"../content/posts/qunfa158-qunfa-208.md":Jd,"../content/posts/qunfa158-qunfa-256.md":Yd,"../content/posts/qunfa158-qunfa-281.md":ep,"../content/posts/qunfa158-qunfa-288.md":tp,"../content/posts/qunfa158-qunfa-29.md":np,"../content/posts/qunfa158-qunfa-297.md":up,"../content/posts/qunfa158-qunfa-302.md":ip,"../content/posts/qunfa158-qunfa-304.md":rp,"../content/posts/qunfa158-qunfa-315.md":op,"../content/posts/qunfa158-qunfa-317.md":sp,"../content/posts/qunfa158-qunfa-33.md":cp,"../content/posts/qunfa158-qunfa-35.md":ap,"../content/posts/qunfa158-qunfa-37.md":lp,"../content/posts/qunfa158-qunfa-394.md":fp,"../content/posts/qunfa158-qunfa-398.md":dp,"../content/posts/qunfa158-qunfa-400.md":pp,"../content/posts/qunfa158-qunfa-402.md":hp,"../content/posts/qunfa158-qunfa-404.md":mp,"../content/posts/qunfa158-qunfa-417.md":gp,"../content/posts/qunfa158-qunfa-428.md":bp,"../content/posts/qunfa158-qunfa-446.md":_p,"../content/posts/qunfa158-qunfa-454.md":xp,"../content/posts/qunfa158-qunfa-498.md":yp,"../content/posts/qunfa158-qunfa-504.md":wp,"../content/posts/qunfa158-qunfa-516.md":Ep,"../content/posts/qunfa158-qunfa-578.md":vp,"../content/posts/qunfa158-qunfa-664.md":kp,"../content/posts/qunfa158-qunfa-696.md":Ap,"../content/posts/qunfa158-qunfa-706.md":Cp,"../content/posts/qunfa158-qunfa-758.md":Sp,"../content/posts/qunfa158-qunfa-767.md":Dp,"../content/posts/qunfa158-qunfa-789.md":Tp,"../content/posts/qunfa158-qunfa-815.md":Pp,"../content/posts/qunfa158-qunfa-866.md":Mp,"../content/posts/qunfa158-qunfa-880.md":qp,"../content/posts/qunfa158-qunfa-891.md":Fp,"../content/posts/qunfa158-qunfa-942.md":Ip,"../content/posts/qunfa158-spider-210.md":Qp,"../content/posts/qunfa158-spider-212.md":Rp,"../content/posts/qunfa158-spider-31.md":Op,"../content/posts/qunfa158-spider-389.md":Lp,"../content/posts/qunfa158-spider-411.md":Bp,"../content/posts/qunfa158-spider-415.md":Np,"../content/posts/qunfa158-spider-523.md":$p,"../content/posts/qunfa158-spider-583.md":Hp,"../content/posts/qunfa158-spider-589.md":jp,"../content/posts/qunfa158-spider-608.md":zp,"../content/posts/qunfa158-spider-611.md":Up,"../content/posts/qunfa158-spider-741.md":Vp}),pr=Object.assign({"../content/pages/about.md":Gp,"../content/pages/capabilities.md":Wp,"../content/pages/cases.md":Kp,"../content/pages/compliance.md":Xp,"../content/pages/legacy.md":Zp,"../content/pages/solutions.md":Jp}),Ds=Object.assign({"../pages/post/default.vue":Xm,"../pages/post/hello-world.vue":t3}),Ts=Object.assign({"../pages/page/about.vue":l3,"../pages/page/capabilities.vue":E3,"../pages/page/cases.vue":F3,"../pages/page/default.vue":B3,"../pages/page/legacy.vue":sg,"../pages/page/solutions.vue":mg}),Yg=Object.assign({"../layouts/DefaultLayout.vue":Ig}),eb=Object.assign({"../pages/index.vue":jg}),tb=Object.assign({"../pages/sitemap.vue":Jg});function wi(e){const t=e.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);if(!t)return{meta:{},content:e};const n={};return t[1].split(`
`).forEach(u=>{const[i,...r]=u.split(":");i&&r.length&&(n[i.trim()]=r.join(":").trim())}),{meta:n,content:t[2]}}function Ua(){return Object.entries(dr).map(([e,t])=>{const n=e.split("/").pop().replace(".md",""),{meta:u,content:i}=wi(t);return{slug:n,meta:u,content:i}}).sort((e,t)=>new Date(t.meta.date)-new Date(e.meta.date))}function nb(e){const t=Ds[`../pages/post/${e}.vue`],n=Ds["../pages/post/default.vue"];return t||n}function Va(){return Object.entries(pr).map(([e,t])=>{const n=e.split("/").pop().replace(".md",""),{meta:u,content:i}=wi(t);return{slug:n,meta:u,content:i}})}function ub(e){const t=Ts[`../pages/page/${e}.vue`],n=Ts["../pages/page/default.vue"];return t||n}function ib(){return Yg["../layouts/DefaultLayout.vue"]}function rb(){return eb["../pages/index.vue"]}function ob(){return tb["../pages/sitemap.vue"]}function Ga(e){const t=`../content/posts/${e}.md`;if(!dr[t])return null;const{meta:n,content:u}=wi(dr[t]);return{slug:e,meta:n,content:u}}function Wa(e){const t=`../content/pages/${e}.md`;if(!pr[t])return null;const{meta:n,content:u}=wi(pr[t]);return{slug:e,meta:n,content:u}}const sb=[{path:"/",component:ib(),children:[{path:"",component:rb(),alias:"/index.html"},{path:"sitemap",component:ob(),alias:"/sitemap.html"},...Ua().map(e=>({path:`posts/${e.slug}`,component:nb(e.slug),props:{slug:e.slug},alias:`/posts/${e.slug}.html`})),...Va().map(e=>({path:`pages/${e.slug}`,component:ub(e.slug),props:{slug:e.slug},alias:`/pages/${e.slug}.html`}))]}],cb=aa({history:oa("/"),routes:sb});Ad(Pd,{routes:cb.options.routes},({app:e})=>{const t=Sd();e.use(t)},{});
