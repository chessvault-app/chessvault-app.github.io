const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./fs-HQYIs3Fp.js","./fs-BFga3_GE.js","./__vite-browser-external-Cl-YgGEM.js","./__vite-browser-external-BbTE95wW.js","./rolldown-runtime-hePW80VL.js"])))=>i.map(i=>d[i]);
import{r as e,t}from"./rolldown-runtime-hePW80VL.js";import{t as n}from"./preload-helper-uBIymjUX.js";import{A as r,B as i,M as a,P as o,V as s,_ as c,i as l,k as u,m as d,n as f,u as p}from"./fen-CgK7-o1P.js";import{n as m}from"./training-CiVbfUXT.js";import{n as h,t as g}from"./vaultNames-BG2-zKxi.js";import{a as _,c as v,i as y,r as b,s as x,t as S}from"./wikiLinks-DENDZvCF.js";import{n as C,r as w,t as T}from"./san-DlywKhfg.js";import{a as E,d as ee,f as D,i as te,o as O,p as ne,t as re}from"./pgn-4lrkhHrT.js";import{a as ie,c as ae,i as oe,n as se,o as ce,s as le,t as ue}from"./scanMatch-DYQ6D5d_.js";import{i as de}from"./searchQuery-CJcPLQux.js";import{i as fe,n as pe,r as me}from"./localDiagrams-CatAQkGt.js";import{_ as he,a as k,c as A,d as ge,f as _e,g as j,h as ve,i as M,l as ye,m as N,n as be,o as P,p as F,r as I,s as xe,t as Se,u as L,v as Ce,y as R}from"./fs-BFga3_GE.js";import{t as we}from"./__vite-browser-external-BbTE95wW.js";import{n as Te,t as z}from"./zobrist-TLKxzxsw.js";import{n as Ee,r as De,t as Oe}from"./frontMatter-DZ-mzxvj.js";import{t as ke}from"./endgameDrill-Bbyba1-9.js";import{t as Ae}from"./chessFence-Czza5fb5.js";var je=(e,t,n)=>(r,i)=>{let a=-1;return o(0);async function o(s){if(s<=a)throw Error(`next() called multiple times`);a=s;let c,l=!1,u;if(e[s]?(u=e[s][0][0],r.req.routeIndex=s):u=s===e.length&&i||void 0,u)try{c=await u(r,()=>o(s+1))}catch(e){if(e instanceof Error&&t)r.error=e,c=await t(e,r),l=!0;else throw e}else r.finalized===!1&&n&&(c=await n(r));return c&&(r.finalized===!1||l)&&(r.res=c),r}},B=Symbol(),Me=(e,t)=>new Response(e,{headers:{"Content-Type":t.replace(/^[^;]+/,e=>e.toLowerCase())}}).formData(),Ne=32,Pe=1e4,Fe=e=>`headers`in e,Ie=async(e,t=Object.create(null))=>{let{all:n=!1,dot:r=!1}=t,i=(Fe(e)?e.headers:e.raw.headers).get(`Content-Type`)?.split(`;`)[0].trim().toLowerCase();return i===`multipart/form-data`||i===`application/x-www-form-urlencoded`?Le(e,{all:n,dot:r}):{}};async function Le(e,t){if(!Fe(e)&&e.bodyCache.formData)return Re(await e.bodyCache.formData,t);let n=Fe(e)?e.headers:e.raw.headers,r=Me(await e.arrayBuffer(),n.get(`Content-Type`)||``);Fe(e)||(e.bodyCache.formData=r);let i=await r;return i?Re(i,t):{}}function Re(e,t){let n=Object.create(null),r={count:0};return e.forEach((e,r)=>{t.all||r.endsWith(`[]`)?ze(n,r,e):n[r]=e}),t.dot&&Object.entries(n).forEach(([e,t])=>{e.includes(`.`)&&(V(n,e,t,r),delete n[e])}),n}var ze=(e,t,n)=>{e[t]===void 0?e[t]=t.endsWith(`[]`)?[n]:n:Array.isArray(e[t])?e[t].push(n):e[t]=[e[t],n]},V=(e,t,n,r)=>{if(/(?:^|\.)__proto__\./.test(t))return;let i=e,a=t.split(`.`,Ne+2);a.length>Ne+1&&Be(),a.forEach((e,t)=>{t===a.length-1?i[e]=n:((!i[e]||typeof i[e]!=`object`||Array.isArray(i[e])||i[e]instanceof File)&&(r.count++>=Pe&&Be(),i[e]=Object.create(null)),i=i[e])})},Be=()=>{throw Error(`Nesting limit exceeded`)},Ve=e=>{let t=e.split(`/`);return t[0]===``&&t.shift(),t},He=e=>{let{groups:t,path:n}=Ue(e);return We(Ve(n),t)},Ue=e=>{let t=[];return e=e.replace(/\{[^}]+\}/g,(e,n)=>{let r=`@${n}`;return t.push([r,e]),r}),{groups:t,path:e}},We=(e,t)=>{for(let n=t.length-1;n>=0;n--){let[r]=t[n];for(let i=e.length-1;i>=0;i--)if(e[i].includes(r)){e[i]=e[i].replace(r,t[n][1]);break}}return e},H={},Ge=(e,t)=>{if(e===`*`)return`*`;let n=e.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);if(n){let r=`${e}#${t}`;return H[r]||(H[r]=n[2]?t&&t[0]!==`:`&&t[0]!==`*`?[r,n[1],RegExp(`^${n[2]}(?=/${t})`)]:[e,n[1],RegExp(`^${n[2]}$`)]:[e,n[1],!0]),H[r]}return null},Ke=(e,t)=>{try{return t(e)}catch{return e.replace(/(?:%[0-9A-Fa-f]{2})+/g,e=>{try{return t(e)}catch{return e}})}},qe=e=>Ke(e,decodeURI),Je=e=>{let t=e.url,n=t.indexOf(`/`,t.indexOf(`:`)+4),r=n;for(;r<t.length;r++){let e=t.charCodeAt(r);if(e===37){let e=t.indexOf(`?`,r),i=t.indexOf(`#`,r),a=e===-1?i===-1?void 0:i:i===-1?e:Math.min(e,i),o=t.slice(n,a);return qe(o.includes(`%25`)?o.replace(/%25/g,`%2525`):o)}if(e===63||e===35)break}return t.slice(n,r)},Ye=e=>{let t=Je(e);return t.length>1&&t.at(-1)===`/`?t.slice(0,-1):t},Xe=(e,t,...n)=>(n.length&&(t=Xe(t,...n)),`${e?.[0]===`/`?``:`/`}${e}${t===`/`?``:`${e?.at(-1)===`/`?``:`/`}${t?.[0]===`/`?t.slice(1):t}`}`),Ze=e=>{if(e.charCodeAt(e.length-1)!==63||!e.includes(`:`))return null;let t=e.split(`/`),n=[],r=``;return t.forEach(e=>{if(e!==``&&!/\:/.test(e))r+=`/`+e;else if(/\:/.test(e)){if(e.charCodeAt(e.length-1)===63){n.length===0&&r===``?n.push(`/`):n.push(r);let t=e.slice(0,-1);r+=`/`+t,n.push(r)}else r+=`/`+e}}),n.filter((e,t,n)=>n.indexOf(e)===t)},Qe=e=>e.indexOf(`%`)===-1?e:Ke(e,rt),$e=e=>(e.indexOf(`+`)!==-1&&(e=e.replace(/\+/g,` `)),Qe(e)),et=(e,t,n)=>{let r=e.indexOf(`#`,8);r!==-1&&(e=e.slice(0,r));let i;if(!n&&t&&t.indexOf(`%`)===-1&&t.indexOf(`+`)===-1){let n=e.indexOf(`?`,8);if(n===-1)return;for(e.startsWith(t,n+1)||(n=e.indexOf(`&${t}`,n+1));n!==-1;){let r=e.charCodeAt(n+t.length+1);if(r===61){let r=n+t.length+2,i=e.indexOf(`&`,r);return $e(e.slice(r,i===-1?void 0:i))}if(r==38||isNaN(r))return``;n=e.indexOf(`&${t}`,n+1)}if(i=/[%+]/.test(e),!i)return}let a=Object.create(null);i??=/[%+]/.test(e);let o=e.indexOf(`?`,8);for(;o!==-1;){let t=e.indexOf(`&`,o+1),r=e.indexOf(`=`,o);r>t&&t!==-1&&(r=-1);let s=e.slice(o+1,r===-1?t===-1?void 0:t:r);if(i&&(s=$e(s)),o=t,s===``)continue;let c;r===-1?c=``:(c=e.slice(r+1,t===-1?void 0:t),i&&(c=$e(c))),n?(a[s]&&Array.isArray(a[s])||(a[s]=[]),a[s].push(c)):a[s]??=c}return t?a[t]:a},tt=et,nt=(e,t)=>et(e,t,!0),rt=decodeURIComponent,it=class{raw;#e;#t;routeIndex=0;path;bodyCache={};constructor(e,t=`/`,n=[[]]){this.raw=e,this.path=t,this.#t=n}param(e){return e?this.#n(e):this.#r()}#n(e){let t=this.#t[0][this.routeIndex]?.[1][e],n=this.#i(t);return n&&Qe(n)}#r(){let e={},t=Object.keys(this.#t[0][this.routeIndex]?.[1]??{});for(let n of t){let t=this.#i(this.#t[0][this.routeIndex][1][n]);t!==void 0&&(e[n]=Qe(t))}return e}#i(e){return this.#t[1]?this.#t[1][e]:e}query(e){return tt(this.url,e)}queries(e){return nt(this.url,e)}header(e){if(e)return this.raw.headers.get(e)??void 0;let t=Object.create(null);return this.raw.headers.forEach((e,n)=>{t[n]=e}),t}async parseBody(e){return Ie(this,e)}#a=e=>{let{bodyCache:t,raw:n}=this,r=t[e];if(r)return r;for(let n in t)return t[n].then(t=>(n===`json`&&(t=JSON.stringify(t)),new Response(t)[e]()));return t[e]=n[e]()};json(){return this.#a(`text`).then(e=>JSON.parse(e))}text(){return this.#a(`text`)}arrayBuffer(){return this.#a(`arrayBuffer`)}bytes(){return this.#a(`arrayBuffer`).then(e=>new Uint8Array(e))}blob(){return this.#a(`blob`)}formData(){return this.#a(`formData`)}addValidatedData(e,t){(this.#e??={})[e]=t}valid(e){return this.#e?.[e]}get url(){return this.raw.url}get method(){return this.raw.method}get[B](){return this.#t}get matchedRoutes(){return this.#t[0].map(([[,e]])=>e)}get routePath(){return this.#t[0].map(([[,e]])=>e)[this.routeIndex].path}},at={Stringify:1,BeforeStream:2,Stream:3},ot=(e,t)=>{let n=new String(e);return n.isEscaped=!0,n.callbacks=t,n},st=async(e,t,n,r,i)=>{typeof e==`object`&&!(e instanceof String)&&(e instanceof Promise||(e=e.toString()),e instanceof Promise&&(e=await e));let a=e.callbacks;if(!a?.length)return Promise.resolve(e);i?i[0]+=e:i=[e];let o=Promise.all(a.map(e=>e({phase:t,buffer:i,context:r}))).then(e=>Promise.all(e.filter(Boolean).map(e=>st(e,t,!1,r,i))).then(()=>i[0]));return n?ot(await o,a):o},ct=`text/plain; charset=UTF-8`,lt=(e,t)=>({"Content-Type":e,...t}),ut=(e,t)=>new Response(e,t),dt=class{#e;#t;env={};#n;finalized=!1;error;#r;#i;#a;#o;#s;#c;#l;#u;#d;constructor(e,t){this.#e=e,t&&(this.#i=t.executionCtx,this.env=t.env,this.#c=t.notFoundHandler,this.#d=t.path,this.#u=t.matchResult)}get req(){return this.#t??=new it(this.#e,this.#d,this.#u),this.#t}get event(){if(this.#i&&`respondWith`in this.#i)return this.#i;throw Error(`This context has no FetchEvent`)}get executionCtx(){if(this.#i)return this.#i;throw Error(`This context has no ExecutionContext`)}get res(){return this.#a||=ut(null,{headers:this.#l??=new Headers})}set res(e){if(this.#a&&e){e=ut(e.body,e);for(let[t,n]of this.#a.headers.entries())if(t!==`content-type`){if(t===`set-cookie`){let t=this.#a.headers.getSetCookie();e.headers.delete(`set-cookie`);for(let n of t)e.headers.append(`set-cookie`,n)}else e.headers.set(t,n)}}this.#a=e,this.finalized=!0}render=(...e)=>(this.#s??=e=>this.html(e),this.#s(...e));setLayout=e=>this.#o=e;getLayout=()=>this.#o;setRenderer=e=>{this.#s=e};header=(e,t,n)=>{this.finalized&&(this.#a=ut(this.#a.body,this.#a));let r=this.#a?this.#a.headers:this.#l??=new Headers;t===void 0?r.delete(e):n?.append?r.append(e,t):r.set(e,t)};status=e=>{this.#r=e};set=(e,t)=>{this.#n??=new Map,this.#n.set(e,t)};get=e=>this.#n?this.#n.get(e):void 0;get var(){return this.#n?Object.fromEntries(this.#n):{}}#f(e,t,n){let r=this.#a?new Headers(this.#a.headers):this.#l;if(typeof t==`object`&&t.headers){r??=new Headers;for(let[e,n]of new Headers(t.headers))e===`set-cookie`?r.append(e,n):r.set(e,n)}if(n){if(!r){let e=0;for(let t in n)if(++e>1||typeof n[t]!=`string`){r=new Headers;break}}if(r)for(let e in n){let t=n[e];if(typeof t==`string`)r.set(e,t);else{r.delete(e);for(let n of t)r.append(e,n)}}}return ut(e,{status:typeof t==`number`?t:t?.status??this.#r,headers:r??n})}newResponse=(...e)=>this.#f(...e);body=(e,t,n)=>this.#f(e,t,n);text=(e,t,n)=>!this.#l&&!this.#r&&!t&&!n&&!this.finalized?new Response(e):this.#f(e,t,lt(ct,n));json=(e,t,n)=>this.#f(JSON.stringify(e),t,lt(`application/json`,n));html=(e,t,n)=>{let r=e=>this.#f(e,t,lt(`text/html; charset=UTF-8`,n));return typeof e==`object`?st(e,at.Stringify,!1,{}).then(r):r(e)};redirect=(e,t)=>{let n=String(e);return this.header(`Location`,/[^\x00-\xFF]/.test(n)?encodeURI(n):n),this.newResponse(null,t??302)};notFound=()=>(this.#c??=()=>ut(),this.#c(this))},ft=[`get`,`post`,`put`,`delete`,`options`,`patch`,`query`],pt=`Can not add a route since the matcher is already built.`,mt=class extends Error{},U=`__COMPOSED_HANDLER`,ht=e=>e.text(`404 Not Found`,404),gt=(e,t)=>{if(`getResponse`in e){let n=e.getResponse();return t.newResponse(n.body,n)}return console.error(e),t.text(`Internal Server Error`,500)},_t=class e{get;post;put;delete;options;patch;query;all;on;use;router;getPath;_basePath=`/`;#e=`/`;routes=[];constructor(e={}){[...ft,`all`].forEach(e=>{this[e]=(t,...n)=>{let r=e.toUpperCase();return typeof t==`string`?this.#e=t:this.#r(r,this.#e,t),n.forEach(e=>{this.#r(r,this.#e,e)}),this}}),this.on=(e,t,...n)=>{for(let r of[t].flat()){this.#e=r;for(let t of[e].flat()){let e=t.toUpperCase();for(let t of n)this.#r(e,this.#e,t)}}return this},this.use=(e,...t)=>(typeof e==`string`?this.#e=e:(this.#e=`*`,t.unshift(e)),t.forEach(e=>{this.#r(`ALL`,this.#e,e)}),this);let{strict:t,...n}=e;Object.assign(this,n),this.getPath=t??!0?e.getPath??Je:Ye}#t(){let t=new e({router:this.router,getPath:this.getPath});return t.errorHandler=this.errorHandler,t.#n=this.#n,t.routes=this.routes,t}#n=ht;errorHandler=gt;route(e,t){let n=this.basePath(e);return t.routes.map(e=>{let r;t.errorHandler===gt?r=e.handler:(r=async(n,r)=>(await je([],t.errorHandler)(n,()=>e.handler(n,r))).res,r[U]=e.handler),n.#r(e.method,e.path,r,e.basePath)}),this}basePath(e){let t=this.#t();return t._basePath=Xe(this._basePath,e),t}onError=e=>(this.errorHandler=e,this);notFound=e=>(this.#n=e,this);mount(e,t,n){let r,i;n&&(typeof n==`function`?i=n:(i=n.optionHandler,r=n.replaceRequest===!1?e=>e:n.replaceRequest));let a=i?e=>{let t=i(e);return Array.isArray(t)?t:[t]}:e=>{let t;try{t=e.executionCtx}catch{}return[e.env,t]};return r||=(()=>{let t=Xe(this._basePath,e),n=t===`/`?0:t.length;return e=>{let t=new URL(e.url);return t.pathname=this.getPath(e).slice(n)||`/`,new Request(t,e)}})(),this.#r(`ALL`,Xe(e,`*`),async(e,n)=>{let i=await t(r(e.req.raw),...a(e));if(i)return i;await n()}),this}#r(e,t,n,r){t=Xe(this._basePath,t);let i={basePath:r===void 0?this._basePath:Xe(this._basePath,r),path:t,method:e,handler:n};this.router.add(e,t,[n,i]),this.routes.push(i)}#i(e,t){if(e instanceof Error)return this.errorHandler(e,t);throw e}#a(e,t,n,r){if(r===`HEAD`)return(async()=>new Response(null,await this.#a(e,t,n,`GET`)))();let i=this.getPath(e,{env:n}),a=this.router.match(r,i),o=new dt(e,{path:i,matchResult:a,env:n,executionCtx:t,notFoundHandler:this.#n});if(a[0].length===1){let e;try{e=a[0][0][0][0](o,async()=>{o.res=await this.#n(o)})}catch(e){return this.#i(e,o)}return e instanceof Promise?e.then(e=>e||(o.finalized?o.res:this.#n(o))).catch(e=>this.#i(e,o)):e??this.#n(o)}let s=je(a[0],this.errorHandler,this.#n);return(async()=>{try{let e=await s(o);if(!e.finalized)throw Error("Context is not finalized. Did you forget to return a Response object or `await next()`?");return e.res}catch(e){return this.#i(e,o)}})()}fetch=(e,...t)=>this.#a(e,t[1],t[0],e.method);request=(e,t,n,r)=>e instanceof Request?this.fetch(t?new Request(e,t):e,n,r):(e=e.toString(),this.fetch(new Request(/^https?:\/\//.test(e)?e:`http://localhost${Xe(`/`,e)}`,t),n,r));fire=()=>{addEventListener(`fetch`,e=>{e.respondWith(this.#a(e.request,e,void 0,e.request.method))})}},W=()=>Object.create(null),vt=[];function yt(e,t){let n=this.buildAllMatchers(),r=((e,t)=>{let r=n[e]||n.ALL,i=r[2][t];if(i)return i;let a=t.match(r[0]);if(!a)return[[],vt];let o=a.indexOf(``,1);return[r[1][o],a]});return this.match=r,r(e,t)}var bt=`[^/]+`,xt=`(?:|/.*)`,St=Symbol(),Ct=new Set(`.\\+*[^]$()`);function wt(e,t){return e.length===1?t.length===1?e<t?-1:1:-1:t.length===1?1:e===`.*`||e===`(?:|/.*)`?t===`(?:|/.*)`?-1:1:t===`.*`||t===`(?:|/.*)`?-1:e===`[^/]+`?1:t===`[^/]+`?-1:e.length===t.length?e<t?-1:1:t.length-e.length}var Tt=class e{#e;#t;#n=W();insert(t,n,r,i,a){let o=this;for(let n=0,a=t.length;n<a;n++){let s=t[n],c=s.length===1?s===`*`?n===a-1?[``,``,`.*`]:[``,``,bt]:null:s===`/*`?[``,``,xt]:s.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/),l;if(c){let t=c[1],n=c[2]||`[^/]+`;if(t&&c[2]&&(n===`.*`||(n=n.replace(/^\((?!\?:)(?=[^)]+\)$)/,`(?:`),/\((?!\?:)/.test(n))||n.length===1&&Ct.has(n)))throw St;if(l=o.#n[n],!l){if(n!==`.*`&&n!==`(?:|/.*)`){for(let e in o.#n)if((n.length>1||e.length>1)&&e!==`.*`&&e!==`(?:|/.*)`)throw St}l=o.#n[n]=new e}t!==``&&(l.#t??=i.varIndex++,r.push([t,l.#t]))}else if(l=o.#n[s],!l){for(let e in o.#n)if(e.length>1&&e!==`.*`&&e!==`(?:|/.*)`)throw St;l=o.#n[s]=new e}o=l}if(o.#e!==void 0)throw St;o.#e=a?-1:n}buildRegExpStr(){let e=Object.keys(this.#n).sort(wt).map(e=>{let t=this.#n[e],n=t.buildRegExpStr();return n===``?``:(typeof t.#t==`number`?`(${e})@${t.#t}`:Ct.has(e)?`\\${e}`:e)+n}).filter(Boolean);return typeof this.#e==`number`&&this.#e!==-1&&e.unshift(`#${this.#e}`),e.length===0?``:e.length===1?e[0]:`(?:`+e.join(`|`)+`)`}},Et=class{#e={varIndex:0};#t=new Tt;#n=0;paths=W();insert(e,t){if(t){this.#t.insert(e.split(``),0,[],this.#e,!0);return}let n=[],r=[],i=e;for(let e=0;;){let t=!1;if(i=i.replace(/\{[^}]+\}/g,n=>{let i=`@\\${e}`;return r[e]=[i,n],e++,t=!0,i}),!t)break}let a=i.match(/(?::[^\/]+)|(?:\/\*$)|./g)||[];for(let e=r.length-1;e>=0;e--){let[t]=r[e];for(let n=a.length-1;n>=0;n--)if(a[n].indexOf(t)!==-1){a[n]=a[n].replace(t,r[e][1]);break}}this.#t.insert(a,this.#n,n,this.#e,!1),this.paths[e]=[this.#n++,n]}buildRegExp(){let e=this.#t.buildRegExpStr();if(e===``)return[/^$/,[],[]];let t=0,n=[],r=[];return e=e.replace(/#(\d+)|@(\d+)|\.\*\$/g,(e,i,a)=>i===void 0?(a===void 0||(r[Number(a)]=++t),``):(n[++t]=Number(i),`$()`)),[RegExp(`^${e}`),n,r]}},Dt=W();function Ot(e){return Dt[e]??=RegExp(`^${e.replace(/\/:[^/{}]+(?:\{\[\^\/]\+})?(?=[/{]|$)|\/?\*$|([.\\+*[^\]$()?{}|])/g,(e,t)=>t?`\\${t}`:e===`/*`?xt:e===`*`?`.*`:`/:${bt}`)}$`)}function kt(e,t){for(let n of Object.keys(e).sort((e,t)=>t.length-e.length))if(Ot(n).test(t))return[...e[n]]}var At=class{name=`RegExpRouter`;#e;#t;#n;constructor(){this.#e={ALL:W()},this.#t={ALL:W()},this.#n={ALL:new Et}}#r(e,t){try{this.#n[e].insert(t,!/\*|\/:/.test(t))}catch(e){throw e===St?new mt(t):e}}add(e,t,n){let r=this.#e,i=this.#t;if(!r)throw Error(pt);if(!r[e]){this.#n[e]=new Et;for(let t of[r,i]){t[e]=W();for(let n in t.ALL)t[e][n]=[...t.ALL[n]],this.#r(e,n)}}t===`/*`&&(t=`*`);let a=e===`ALL`?Object.keys(r):[e];if(/\*$/.test(t)){let e=Ot(t);for(let e of a)r[e][t]||(this.#r(e,t),r[e][t]=kt(r[e],t)||kt(r.ALL,t)||[]);for(let o of[r,i])for(let r of a)for(let i in o[r])e.test(i)&&o[r][i].push([n,t]);return}let o=Ze(t)||[t];for(let e of o)for(let t of a)i[t][e]||(this.#r(t,e),i[t][e]=kt(r[t],e)||kt(r.ALL,e)||[]),i[t][e].push([n,e])}match=yt;buildAllMatchers(){let e=W();for(let t of Object.keys(this.#t))e[t]=this.#i(t);return this.#e=this.#t=this.#n=void 0,Dt=W(),e}#i(e){let t=this.#e[e],n=this.#t[e],r=this.#n[e],i=W(),a=[],[o,s,c]=r.buildRegExp();for(let e of[t,n])for(let t in e){let n=e[t],o=r.paths[t];if(!o){i[t]=[n.map(([e])=>[e,W()]),vt];continue}a[o[0]]=n.map(([e,t])=>[e,r.paths[t][1].reduceRight((e,[t],n)=>(e[t]=c[o[1][n][1]],e),W())])}return[o,s.map(e=>a[e]),i]}},jt=class{name=`SmartRouter`;#e=[];#t=[];constructor(e){this.#e=e.routers}add(e,t,n){if(!this.#t)throw Error(pt);this.#t.push([e,t,n])}match(e,t){if(!this.#t)throw Error(`Fatal error`);let n=this.#e,r=this.#t,i=n.length,a=0,o;for(;a<i;a++){let i=n[a];try{for(let e=0,t=r.length;e<t;e++)i.add(...r[e]);o=i.match(e,t)}catch(e){if(e instanceof mt)continue;throw e}this.match=i.match.bind(i),this.#e=[i],this.#t=void 0;break}if(a===i)throw Error(`Fatal error`);return this.name=`SmartRouter + ${this.activeRouter.name}`,o}get activeRouter(){if(this.#t||this.#e.length!==1)throw Error(`No active router has been determined yet.`);return this.#e[0]}},Mt=W(),Nt=0,Pt=class e{#e=[];#t=W();#n=[];#r;#i=Mt;insert(t,n,r){let i=this,a=He(n),o=new Set,s=0;for(let t of a){let n=a[++s],r=Ge(t,n)||(n===void 0&&t&&t.indexOf(`*`)===t.length-1?t:null),c=Array.isArray(r),l=c?r[0]:r||t,u=i.#t[l]||=new e;r&&!u.#r&&(u.#r=r,i.#n.push(u)),i=u,c&&o.add(r[1])}i.#e.push({[t]:{handler:r,possibleKeys:[...o],score:++Nt}})}#a(e,t,n,r,i){for(let a=0,o=t.#e.length;a<o;a++){let o=t.#e[a],s=o[n]||o.ALL;if(s){s.params=W(),e.push(s);for(let e=0,t=s.possibleKeys.length;e<t;e++){let t=s.possibleKeys[e];s.params[t]=i?.[t]&&!e?i[t]:r[t]??i?.[t]}}}}search(e,t){let n=[];this.#i=Mt;let r=[this],i=Ve(t),a=[],o=i.length,s=null;for(let c=0;c<o;c++){let l=i[c],u=c===o-1,d=[];for(let f=0,p=r.length;f<p;f++){let p=r[f],m=p.#t[l];m&&(m.#i=p.#i,u?(m.#t[`*`]&&this.#a(n,m.#t[`*`],e,p.#i),this.#a(n,m,e,p.#i)):d.push(m));for(let r of p.#n){let f=r.#r,m=p.#i===Mt?{}:{...p.#i};if(typeof f==`string`){(f===`*`||l.startsWith(f.slice(0,-1)))&&(this.#a(n,r,e,p.#i),f===`*`&&(r.#i=m,d.push(r)));continue}let[,h,g]=f;if(l||g!==!0){if(g!==!0){if(!s){s=[];let e=+(t[0]===`/`);for(let t=0;t<o;t++)s[t]=e,e+=i[t].length+1}let l=t.slice(s[c]),u=g.exec(l);if(u){m[h]=u[0],this.#a(n,r,e,p.#i,m),u[0].length===l.length&&r.#t[`*`]&&this.#a(n,r.#t[`*`],e,p.#i,m);for(let e in r.#t){r.#i=m;let e=u[0].match(/\//g)?.length??0;(a[e]||=[]).push(r);break}continue}}(g===!0||g.test(l))&&(m[h]=l,u?(this.#a(n,r,e,m,p.#i),r.#t[`*`]&&this.#a(n,r.#t[`*`],e,m,p.#i)):(r.#i=m,d.push(r)))}}}let f=a.shift();r=f?d.concat(f):d}return n[1]&&n.sort((e,t)=>e.score-t.score),[n.map(({handler:e,params:t})=>[e,t])]}},Ft=class{name=`TrieRouter`;#e=new Pt;add(e,t,n){for(let r of Ze(t)||[t])this.#e.insert(e,r,n)}match(e,t){return this.#e.search(e,t)}},G=class extends _t{constructor(e={}){super(e),this.router=e.router??new jt({routers:[new At,new Ft]})}},It=new TextEncoder,Lt=class extends Uint8Array{toString(e=`utf-8`){return new TextDecoder(e).decode(this)}},Rt={byteLength(e){return typeof e==`string`?It.encode(e).length:e.byteLength},from(e){return It.encode(e)},alloc(e){return new Lt(e)}};function zt(){let e=globalThis;e.Buffer??=Rt}function Bt(){let e=globalThis;e.setImmediate??=((e,...t)=>setTimeout(()=>e(...t),0))}function K(...e){let t=[];for(let n of e){n.startsWith(`/`)&&(t.length=0);for(let e of n.split(/[\\/]+/))e!==``&&e!==`.`&&(e===`..`?t.pop():t.push(e))}return`/${t.join(`/`)}`}function Vt(e){let t=K(e).split(`/`);return t.pop(),t.join(`/`)||`/`}function Ht(e,t){let n=K(e).split(`/`).pop()??``;return t&&n.endsWith(t)?n.slice(0,-t.length):n}function Ut(e,t){let n=K(e).split(`/`).filter(Boolean),r=K(t).split(`/`).filter(Boolean),i=0;for(;i<n.length&&i<r.length&&n[i]===r[i];)i++;return[...Array(n.length-i).fill(`..`),...r.slice(i)].join(`/`)}function q(e,t,n){let r=`${e}.tmp`;n===void 0?j(r,t):j(r,t,n),Wt(r,e)}function Wt(e,t){for(let n=0;;n+=1)try{ye(e,t);return}catch(e){let t=e.code;if(t!==`EPERM`&&t!==`EACCES`&&t!==`EBUSY`||n>=4)throw e;Atomics.wait(new Int32Array(new SharedArrayBuffer(4)),0,0,5*(n+1))}}function J(e,t){try{return JSON.parse(P(e,`utf-8`))}catch{return t}}function Y(e,t){q(e,`${JSON.stringify(t,null,2)}\n`)}function Gt(e){return`/app/server/paths.ts`}var Kt=Vt(Gt(import.meta.url)),X=K(Kt,`..`),qt=e=>{let t={}[e]?.trim();return t?K(t):void 0},Z=qt(`CHESS_VAULT_DIR`)??K(X,`vault`),Jt=K(Z,`studies`),Yt=K(Z,`notes`),Xt=K(Z,`games`),Zt=K(Z,`sources`),Qt=K(Z,`config.json`);K(Z,`sessions.json`),{}.CHESS_BIND?.trim(),{}.CHESS_TRUSTED_PROXY?.trim(),{}.CHESS_SECURE_COOKIE?.trim(),({}.CHESS_ALLOWED_HOSTS??``).split(`,`).map(e=>e.trim().toLowerCase()).filter(Boolean);var $t=qt(`CHESS_VAULT_DATA`)??K(X,`data`),en=K($t,`puzzles.sqlite`),tn=K($t,`openings.json`),nn=K($t,`mygames.sqlite`),rn=K($t,`search-index.json`),an=K($t,`mygames-analysis.sqlite`);K($t,`explorer-cache`);var on=K($t,`tablebase-cache`);qt(`CHESS_VAULT_UPDATES`)??K(X,`updates`),(()=>{for(let e of[K(X,`package.json`),K(Kt,`package.json`)])try{let t=JSON.parse(P(e,`utf-8`));if(t.version)return t.version}catch{}return`unknown`})();var sn=we(),cn=`.history.git`;function ln(e){return K(e,cn)}var un=[`-c`,`user.name=Chess Vault`,`-c`,`user.email=vault@localhost`],dn=[`-c`,`core.fsmonitor=false`,`-c`,`core.hooksPath=`,`-c`,`core.sshCommand=false`,`-c`,`core.askPass=`,`-c`,`core.editor=false`,`-c`,`core.pager=cat`,`-c`,`diff.external=`];function fn(){let e={};for(let[t,n]of Object.entries({}))t.startsWith(`GIT_`)||(e[t]=n);return e.GIT_CONFIG_NOSYSTEM=`1`,e.GIT_CONFIG_GLOBAL=``,e.GIT_TERMINAL_PROMPT=`0`,e}var pn=/^\s*(?:hooksPath|fsmonitor|sshCommand|askPass|editor|pager|externalDiff|alternateRefsCommand|gitProxy|clean|smudge|process|textconv|command|packObjectsHook)\s*=/im;function mn(e){let t=``;try{t=P(K(e,`config`),`utf-8`)}catch{return null}if(pn.test(t))return`its config names a program to run`;try{if(A(K(e,`hooks`)).some(e=>!e.endsWith(`.sample`)))return`it carries git hooks`}catch{}return null}function hn(e,t,n){return new Promise((r,i)=>{(0,sn.execFile)(`git`,[`--literal-pathspecs`,`--git-dir`,e,`--work-tree`,t,...un,...dn,...n],{timeout:6e4,maxBuffer:67108864,env:fn()},(e,t,n)=>{e?i(Error(n.trim()||e.message)):r(t)})})}var gn={studies:{base:`studies`,ext:`.pgn`},notes:{base:`notes`,ext:`.md`},games:{base:`games/collection`,ext:`.pgn`}},_n=Object.keys(gn).join(`|`),vn=/^[0-9a-f]{7,40}$/;function yn(e,t){if(!h(t))return null;let{base:n,ext:r}=gn[e];return`${n}/${t}${r}`}var bn={available:!1};function xn(e=Z,t={}){let n=new G,r=t.run??(t=>hn(ln(e),e,t)),i=()=>t.available?t.available():I(ln(e))&&mn(ln(e))===null;return n.get(`/history`,async e=>{if(!i())return e.json(bn);try{await r([`rev-parse`,`--quiet`,`--verify`,`HEAD`])}catch{return e.json(bn)}return e.json({available:!0})}),n.get(`/history/doc/:kind{${_n}}/:id{.+}`,async e=>{let t=yn(e.req.param(`kind`),e.req.param(`id`));if(!t)return e.json({error:`bad id`},400);if(!i())return e.json(bn);try{let n=(await r([`log`,`--diff-filter=AM`,`--format=%H%x09%aI`,`--`,t])).split(`
`).filter(Boolean).map(e=>{let[t=``,n=``]=e.split(`	`);return{sha:t,at:n}}).filter(e=>vn.test(e.sha)&&e.at);return e.json({available:!0,versions:n})}catch{return e.json(bn)}}),n.get(`/history/at/:sha/:kind{${_n}}/:id{.+}`,async e=>{let t=e.req.param(`sha`);if(!vn.test(t))return e.json({error:`bad sha`},400);let n=yn(e.req.param(`kind`),e.req.param(`id`));if(!n)return e.json({error:`bad id`},400);if(!i())return e.json(bn);try{return e.json({available:!0,content:await r([`show`,`${t}:${n}`])})}catch{return e.json({error:`no such version`},404)}}),n.get(`/history/deleted`,async t=>{if(!i())return t.json(bn);let n=[];try{for(let t of Object.keys(gn)){let{base:i,ext:a}=gn[t],o=await r([`log`,`--diff-filter=D`,`--format=%x00%aI`,`--name-only`,`--`,i]),s=new Set,c=``;for(let r of o.split(`
`)){if(r.startsWith(`\0`)){c=r.slice(1).trim();continue}let o=r.trim();if(!o.startsWith(`${i}/`)||!o.endsWith(a)||s.has(o)||(s.add(o),I(K(e,o))))continue;let l=o.slice(i.length+1,-a.length);h(l)&&n.push({kind:t,id:l,at:c})}}}catch{return t.json(bn)}return n.sort((e,t)=>t.at.localeCompare(e.at)),t.json({available:!0,deleted:n})}),n.post(`/history/restore`,async n=>{if(!i())return n.json({error:`no history`},409);let a=await n.req.json().catch(()=>null),o=a?.kind??``,s=a?.sha??``;if(!(o in gn)||!a?.id)return n.json({error:`bad request`},400);if(!vn.test(s))return n.json({error:`bad sha`},400);let c=yn(o,a.id);if(!c)return n.json({error:`bad id`},400);let l;try{l=await r([`show`,`${s}:${c}`])}catch{return n.json({error:`no such version`},404)}await t.commitNow?.().catch(()=>void 0);try{let t=K(e,c);M(Vt(t),{recursive:!0}),q(t,l)}catch(e){return n.json({error:e.message},500)}return n.json({ok:!0})}),n}var Sn=e(t(((e,t)=>{var n=void 0,r=function(e){return n||(n=new Promise(function(n,r){var i=e===void 0?{}:e,a=i.onAbort;i.onAbort=function(e){r(Error(e)),a&&a(e)},i.postRun=i.postRun||[],i.postRun.push(function(){n(i)}),t=void 0;var o;o||=i===void 0?{}:i;var s=!!globalThis.window,c=!!globalThis.WorkerGlobalScope;o.onRuntimeInitialized=function(){function e(e,t){switch(typeof t){case`boolean`:j(e,+!!t);break;case`number`:me(e,t);break;case`string`:A(e,t,-1,-1);break;case`object`:if(t===null)he(e);else if(t.length!=null){var n=It(t.length);y.set(t,n),_e(e,n,t.length,-1),Lt(n)}else ve(e,`Wrong API use : tried to return a value of an unknown type (`+t+`).`,-1);break;default:he(e)}}function t(e,t){for(var n=[],r=0;r<e;r+=1){var i=de(t+4*r,`i32`),a=se(i);if(a===1||a===2)i=fe(i);else if(a===3)i=le(i);else if(a===4){a=i,i=ce(a),a=ue(a);for(var o=new Uint8Array(i),s=0;s<i;s+=1)o[s]=y[a+s];i=o}else i=null;n.push(i)}return n}function n(e,t){this.Qa=e,this.db=t,this.Oa=1,this.yb=[]}function r(e,t){if(this.db=t,this.ob=kt(e),this.ob===null)throw Error(`Unable to allocate memory for the SQL string`);this.ub=this.ob,this.gb=this.Fb=null}function i(e){if(this.filename=`dbfile_`+(4294967295*Math.random()>>>0),e!=null){var t=this.filename,n=`/`,r=t;if(n&&(n=typeof n==`string`?n:Fe(n),r=t?ge(n+`/`+t):n),t=we(!0,!0),r=Qe(r,t),e){if(typeof e==`string`){n=Array(e.length);for(var i=0,o=e.length;i<o;++i)n[i]=e.charCodeAt(i);e=n}ot(r,t|146),n=ct(r,577),ft(n,e,0,e.length,0),lt(n),ot(r,t)}}this.handleError(c(this.filename,a)),this.db=de(a,`i32`),ye(this.db),this.pb={},this.Sa={}}var a=K(4),s=o.cwrap,c=s(`sqlite3_open`,`number`,[`string`,`number`]),l=s(`sqlite3_close_v2`,`number`,[`number`]),u=s(`sqlite3_exec`,`number`,[`number`,`string`,`number`,`number`,`number`]),d=s(`sqlite3_changes`,`number`,[`number`]),f=s(`sqlite3_prepare_v2`,`number`,[`number`,`string`,`number`,`number`,`number`]),p=s(`sqlite3_sql`,`string`,[`number`]),m=s(`sqlite3_normalized_sql`,`string`,[`number`]),h=s(`sqlite3_prepare_v2`,`number`,[`number`,`number`,`number`,`number`,`number`]),g=s(`sqlite3_bind_text`,`number`,[`number`,`number`,`number`,`number`,`number`]),_=s(`sqlite3_bind_blob`,`number`,[`number`,`number`,`number`,`number`,`number`]),v=s(`sqlite3_bind_double`,`number`,[`number`,`number`,`number`]),b=s(`sqlite3_bind_int`,`number`,[`number`,`number`,`number`]),x=s(`sqlite3_bind_parameter_index`,`number`,[`number`,`string`]),S=s(`sqlite3_step`,`number`,[`number`]),C=s(`sqlite3_errmsg`,`string`,[`number`]),w=s(`sqlite3_column_count`,`number`,[`number`]),T=s(`sqlite3_data_count`,`number`,[`number`]),E=s(`sqlite3_column_double`,`number`,[`number`,`number`]),ee=s(`sqlite3_column_text`,`string`,[`number`,`number`]),D=s(`sqlite3_column_blob`,`number`,[`number`,`number`]),te=s(`sqlite3_column_bytes`,`number`,[`number`,`number`]),O=s(`sqlite3_column_type`,`number`,[`number`,`number`]),ne=s(`sqlite3_column_name`,`string`,[`number`,`number`]),re=s(`sqlite3_reset`,`number`,[`number`]),ie=s(`sqlite3_clear_bindings`,`number`,[`number`]),ae=s(`sqlite3_finalize`,`number`,[`number`]),oe=s(`sqlite3_create_function_v2`,`number`,`number string number number number number number number number`.split(` `)),se=s(`sqlite3_value_type`,`number`,[`number`]),ce=s(`sqlite3_value_bytes`,`number`,[`number`]),le=s(`sqlite3_value_text`,`string`,[`number`]),ue=s(`sqlite3_value_blob`,`number`,[`number`]),fe=s(`sqlite3_value_double`,`number`,[`number`]),me=s(`sqlite3_result_double`,``,[`number`,`number`]),he=s(`sqlite3_result_null`,``,[`number`]),A=s(`sqlite3_result_text`,``,[`number`,`string`,`number`,`number`]),_e=s(`sqlite3_result_blob`,``,[`number`,`number`,`number`,`number`]),j=s(`sqlite3_result_int`,``,[`number`,`number`]),ve=s(`sqlite3_result_error`,``,[`number`,`string`,`number`]),M=s(`sqlite3_aggregate_context`,`number`,[`number`,`number`]),ye=s(`RegisterExtensionFunctions`,`number`,[`number`]),N=s(`sqlite3_update_hook`,`number`,[`number`,`number`,`number`]);n.prototype.bind=function(e){if(!this.Qa)throw`Statement closed`;return this.reset(),Array.isArray(e)?this.Wb(e):typeof e==`object`&&e?this.Xb(e):!0},n.prototype.step=function(){if(!this.Qa)throw`Statement closed`;this.Oa=1;var e=S(this.Qa);switch(e){case 100:return!0;case 101:return!1;default:throw this.db.handleError(e)}},n.prototype.Pb=function(e){return e??(e=this.Oa,this.Oa+=1),E(this.Qa,e)},n.prototype.hc=function(e){if(e??(e=this.Oa,this.Oa+=1),e=ee(this.Qa,e),typeof BigInt!=`function`)throw Error(`BigInt is not supported`);return BigInt(e)},n.prototype.mc=function(e){return e??(e=this.Oa,this.Oa+=1),ee(this.Qa,e)},n.prototype.getBlob=function(e){e??(e=this.Oa,this.Oa+=1);var t=te(this.Qa,e);e=D(this.Qa,e);for(var n=new Uint8Array(t),r=0;r<t;r+=1)n[r]=y[e+r];return n},n.prototype.get=function(e,t){t||={},e!=null&&this.bind(e)&&this.step(),e=[];for(var n=T(this.Qa),r=0;r<n;r+=1)switch(O(this.Qa,r)){case 1:var i=t.useBigInt?this.hc(r):this.Pb(r);e.push(i);break;case 2:e.push(this.Pb(r));break;case 3:e.push(this.mc(r));break;case 4:e.push(this.getBlob(r));break;default:e.push(null)}return e},n.prototype.Db=function(){for(var e=[],t=w(this.Qa),n=0;n<t;n+=1)e.push(ne(this.Qa,n));return e},n.prototype.Ob=function(e,t){e=this.get(e,t),t=this.Db();for(var n={},r=0;r<t.length;r+=1)n[t[r]]=e[r];return n},n.prototype.lc=function(){return p(this.Qa)},n.prototype.ic=function(){return m(this.Qa)},n.prototype.Jb=function(e){return e!=null&&this.bind(e),this.step(),this.reset()},n.prototype.Lb=function(e,t){t??(t=this.Oa,this.Oa+=1),e=kt(e),this.yb.push(e),this.db.handleError(g(this.Qa,t,e,-1,0))},n.prototype.Vb=function(e,t){t??(t=this.Oa,this.Oa+=1);var n=It(e.length);y.set(e,n),this.yb.push(n),this.db.handleError(_(this.Qa,t,n,e.length,0))},n.prototype.Kb=function(e,t){t??(t=this.Oa,this.Oa+=1),this.db.handleError((e===(e|0)?b:v)(this.Qa,t,e))},n.prototype.Yb=function(e){e??(e=this.Oa,this.Oa+=1),_(this.Qa,e,0,0,0)},n.prototype.Mb=function(e,t){switch(t??(t=this.Oa,this.Oa+=1),typeof e){case`string`:this.Lb(e,t);return;case`number`:this.Kb(e,t);return;case`bigint`:this.Lb(e.toString(),t);return;case`boolean`:this.Kb(e+0,t);return;case`object`:if(e===null){this.Yb(t);return}if(e.length!=null){this.Vb(e,t);return}}throw`Wrong API use : tried to bind a value of an unknown type (`+e+`).`},n.prototype.Xb=function(e){var t=this;return Object.keys(e).forEach(function(n){var r=x(t.Qa,n);r!==0&&t.Mb(e[n],r)}),!0},n.prototype.Wb=function(e){for(var t=0;t<e.length;t+=1)this.Mb(e[t],t+1);return!0},n.prototype.reset=function(){return this.Cb(),ie(this.Qa)===0&&re(this.Qa)===0},n.prototype.Cb=function(){for(var e;(e=this.yb.pop())!==void 0;)Lt(e)},n.prototype.cb=function(){this.Cb();var e=ae(this.Qa)===0;return delete this.db.pb[this.Qa],this.Qa=0,e},r.prototype.next=function(){if(this.ob===null)return{done:!0};if(this.gb!==null&&(this.gb.cb(),this.gb=null),!this.db.db)throw this.Ab(),Error(`Database closed`);var e=Vt(),t=K(4);pe(a),pe(t);try{this.db.handleError(h(this.db.db,this.ub,-1,a,t)),this.ub=de(t,`i32`);var r=de(a,`i32`);return r===0?(this.Ab(),{done:!0}):(this.gb=new n(r,this.db),this.db.pb[r]=this.gb,{value:this.gb,done:!1})}catch(e){throw this.Fb=k(this.ub),this.Ab(),e}finally{Bt(e)}},r.prototype.Ab=function(){Lt(this.ob),this.ob=null},r.prototype.jc=function(){return this.Fb===null?k(this.ub):this.Fb},typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`&&(r.prototype[Symbol.iterator]=function(){return this}),i.prototype.Jb=function(e,t){if(!this.db)throw`Database closed`;if(t){e=this.Gb(e,t);try{e.step()}finally{e.cb()}}else this.handleError(u(this.db,e,0,0,a));return this},i.prototype.exec=function(e,t,r){if(!this.db)throw`Database closed`;var i=Vt(),o=null,s=null,c=null;try{c=s=kt(e);var l=K(4);for(e=[];de(c,`i8`)!==0;){pe(a),pe(l),this.handleError(h(this.db,c,-1,a,l));var u=de(a,`i32`);if(c=de(l,`i32`),u!==0){var d=null;for(o=new n(u,this),t!=null&&o.bind(t);o.step();)d===null&&(d={columns:o.Db(),values:[]},e.push(d)),d.values.push(o.get(null,r));o.cb()}}return e}catch(e){throw o&&o.cb(),e}finally{s&&Lt(s),Bt(i)}},i.prototype.ec=function(e,t,n,r,i){typeof t==`function`&&(r=n,n=t,t=void 0),e=this.Gb(e,t);try{for(;e.step();)n(e.Ob(null,i))}finally{e.cb()}if(typeof r==`function`)return r()},i.prototype.Gb=function(e,t){if(pe(a),this.handleError(f(this.db,e,-1,a,0)),e=de(a,`i32`),e===0)throw`Nothing to prepare`;var r=new n(e,this);return t!=null&&r.bind(t),this.pb[e]=r},i.prototype.pc=function(e){return new r(e,this)},i.prototype.fc=function(){Object.values(this.pb).forEach(function(e){e.cb()}),Object.values(this.Sa).forEach(Mt),this.Sa={},this.handleError(l(this.db));var e=pt(this.filename);return this.handleError(c(this.filename,a)),this.db=de(a,`i32`),ye(this.db),e},i.prototype.close=function(){this.db!==null&&(Object.values(this.pb).forEach(function(e){e.cb()}),Object.values(this.Sa).forEach(Mt),this.Sa={},this.fb&&=(Mt(this.fb),void 0),this.handleError(l(this.db)),rt(`/`+this.filename),this.db=null)},i.prototype.handleError=function(e){if(e===0)return null;throw e=C(this.db),Error(e)},i.prototype.kc=function(){return d(this.db)},i.prototype.bc=function(n,r){Object.prototype.hasOwnProperty.call(this.Sa,n)&&(Mt(this.Sa[n]),delete this.Sa[n]);var i=G(function(n,i,a){i=t(i,a);try{var o=r.apply(null,i)}catch(e){ve(n,e,-1);return}e(n,o)},`viii`);return this.Sa[n]=i,this.handleError(oe(this.db,n,r.length,1,0,i,0,0,0)),this},i.prototype.ac=function(n,r){var i=r.init||function(){return null},a=r.finalize||function(e){return e},o=r.step;if(!o)throw`An aggregate function must have a step function in `+n;var s={};Object.hasOwnProperty.call(this.Sa,n)&&(Mt(this.Sa[n]),delete this.Sa[n]),r=n+`__finalize`,Object.hasOwnProperty.call(this.Sa,r)&&(Mt(this.Sa[r]),delete this.Sa[r]);var c=G(function(e,n,r){var a=M(e,1);Object.hasOwnProperty.call(s,a)||(s[a]=i()),n=t(n,r),n=[s[a]].concat(n);try{s[a]=o.apply(null,n)}catch(t){delete s[a],ve(e,t,-1)}},`viii`),l=G(function(t){var n=M(t,1);try{var r=a(s[n])}catch(e){delete s[n],ve(t,e,-1);return}e(t,r),delete s[n]},`vi`);return this.Sa[n]=c,this.Sa[r]=l,this.handleError(oe(this.db,n,o.length-1,1,0,0,c,l,0)),this},i.prototype.vc=function(e){return this.fb&&=(N(this.db,0,0),Mt(this.fb),void 0),e?(this.fb=G(function(t,n,r,i,a){switch(n){case 18:t=`insert`;break;case 23:t=`update`;break;case 9:t=`delete`;break;default:throw`unknown operationCode in updateHook callback: `+n}if(r=k(r),i=k(i),a>2**53-1)throw`rowId too big to fit inside a Number`;e(t,r,i,Number(a))},`viiiij`),N(this.db,this.fb,0),this):this},n.prototype.bind=n.prototype.bind,n.prototype.step=n.prototype.step,n.prototype.get=n.prototype.get,n.prototype.getColumnNames=n.prototype.Db,n.prototype.getAsObject=n.prototype.Ob,n.prototype.getSQL=n.prototype.lc,n.prototype.getNormalizedSQL=n.prototype.ic,n.prototype.run=n.prototype.Jb,n.prototype.reset=n.prototype.reset,n.prototype.freemem=n.prototype.Cb,n.prototype.free=n.prototype.cb,r.prototype.next=r.prototype.next,r.prototype.getRemainingSQL=r.prototype.jc,i.prototype.run=i.prototype.Jb,i.prototype.exec=i.prototype.exec,i.prototype.each=i.prototype.ec,i.prototype.prepare=i.prototype.Gb,i.prototype.iterateStatements=i.prototype.pc,i.prototype.export=i.prototype.fc,i.prototype.close=i.prototype.close,i.prototype.handleError=i.prototype.handleError,i.prototype.getRowsModified=i.prototype.kc,i.prototype.create_function=i.prototype.bc,i.prototype.create_aggregate=i.prototype.ac,i.prototype.updateHook=i.prototype.vc,o.Database=i};var l=`./this.program`,u=globalThis.document?.currentScript?.src;c&&(u=self.location.href);var d=``,f,p;if(s||c){try{d=new URL(`.`,u).href}catch{}c&&(p=e=>{var t=new XMLHttpRequest;return t.open(`GET`,e,!1),t.responseType=`arraybuffer`,t.send(null),new Uint8Array(t.response)}),f=async e=>{if(e=await fetch(e,{credentials:`same-origin`}),e.ok)return e.arrayBuffer();throw Error(e.status+` : `+e.url)}}var m=console.log.bind(console),h=console.error.bind(console),g,_=!1,v,y,b,x,S,C,w,T,E;function ee(){var e=Ht.buffer;y=new Int8Array(e),x=new Int16Array(e),b=new Uint8Array(e),new Uint16Array(e),S=new Int32Array(e),C=new Uint32Array(e),w=new Float32Array(e),T=new Float64Array(e),E=new BigInt64Array(e),new BigUint64Array(e)}function D(e){throw o.onAbort?.(e),e=`Aborted(`+e+`)`,h(e),_=!0,new WebAssembly.RuntimeError(e+`. Build with -sASSERTIONS for more info.`)}var te;async function O(e){if(!g)try{var t=await f(e);return new Uint8Array(t)}catch{}if(e==te&&g)e=new Uint8Array(g);else if(p)e=p(e);else throw`both async and sync fetching of the wasm failed`;return e}async function ne(e,t){try{var n=await O(e);return await WebAssembly.instantiate(n,t)}catch(e){h(`failed to asynchronously prepare wasm: ${e}`),D(e)}}async function re(e){var t=te;if(!g)try{var n=fetch(t,{credentials:`same-origin`});return await WebAssembly.instantiateStreaming(n,e)}catch(e){h(`wasm streaming compile failed: ${e}`),h(`falling back to ArrayBuffer instantiation`)}return ne(t,e)}class ie{name=`ExitStatus`;constructor(e){this.message=`Program terminated with exit(${e})`,this.status=e}}var ae=e=>{for(;0<e.length;)e.shift()(o)},oe=[],se=[],ce=()=>{var e=o.preRun.shift();se.push(e)},le=0,ue=null;function de(e,t=`i8`){switch(t.endsWith(`*`)&&(t=`*`),t){case`i1`:return y[e];case`i8`:return y[e];case`i16`:return x[e>>1];case`i32`:return S[e>>2];case`i64`:return E[e>>3];case`float`:return w[e>>2];case`double`:return T[e>>3];case`*`:return C[e>>2];default:D(`invalid type for getValue: ${t}`)}}var fe=!0;function pe(e){var t=`i32`;switch(t.endsWith(`*`)&&(t=`*`),t){case`i1`:y[e]=0;break;case`i8`:y[e]=0;break;case`i16`:x[e>>1]=0;break;case`i32`:S[e>>2]=0;break;case`i64`:E[e>>3]=BigInt(0);break;case`float`:w[e>>2]=0;break;case`double`:T[e>>3]=0;break;case`*`:C[e>>2]=0;break;default:D(`invalid type for setValue: ${t}`)}}var me=new TextDecoder,he=(e,t,n,r)=>{if(n=t+n,r)return n;for(;e[t]&&!(t>=n);)++t;return t},k=(e,t,n)=>e?me.decode(b.subarray(e,he(b,e,t,n))):``,A=(e,t)=>{for(var n=0,r=e.length-1;0<=r;r--){var i=e[r];i===`.`?e.splice(r,1):i===`..`?(e.splice(r,1),n++):n&&(e.splice(r,1),n--)}if(t)for(;n;n--)e.unshift(`..`);return e},ge=e=>{var t=e.charAt(0)===`/`,n=e.slice(-1)===`/`;return(e=A(e.split(`/`).filter(e=>!!e),!t).join(`/`))||t||(e=`.`),e&&n&&(e+=`/`),(t?`/`:``)+e},_e=e=>{var t=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/.exec(e).slice(1);return e=t[0],t=t[1],!e&&!t?`.`:(t&&=t.slice(0,-1),e+t)},j=e=>e&&e.match(/([^\/]+|\/)\/*$/)[1],ve=()=>e=>crypto.getRandomValues(e),M=e=>{(M=ve())(e)},ye=(...e)=>{for(var t=``,n=!1,r=e.length-1;-1<=r&&!n;r--){if(n=0<=r?e[r]:`/`,typeof n!=`string`)throw TypeError(`Arguments to path.resolve must be strings`);if(!n)return``;t=n+`/`+t,n=n.charAt(0)===`/`}return t=A(t.split(`/`).filter(e=>!!e),!n).join(`/`),(n?`/`:``)+t||`.`},N=e=>{var t=he(e,0);return me.decode(e.buffer?e.subarray(0,t):new Uint8Array(e.slice(0,t)))},be=[],P=e=>{for(var t=0,n=0;n<e.length;++n){var r=e.charCodeAt(n);127>=r?t++:2047>=r?t+=2:55296<=r&&57343>=r?(t+=4,++n):t+=3}return t},F=(e,t,n,r)=>{if(!(0<r))return 0;var i=n;r=n+r-1;for(var a=0;a<e.length;++a){var o=e.codePointAt(a);if(127>=o){if(n>=r)break;t[n++]=o}else if(2047>=o){if(n+1>=r)break;t[n++]=192|o>>6,t[n++]=128|o&63}else if(65535>=o){if(n+2>=r)break;t[n++]=224|o>>12,t[n++]=128|o>>6&63,t[n++]=128|o&63}else{if(n+3>=r)break;t[n++]=240|o>>18,t[n++]=128|o>>12&63,t[n++]=128|o>>6&63,t[n++]=128|o&63,a++}}return t[n]=0,n-i},I=[];function xe(e,t){I[e]={input:[],output:[],kb:t},Ye(e,Se)}var Se={open(e){var t=I[e.node.nb];if(!t)throw new B(43);e.Va=t,e.seekable=!1},close(e){e.Va.kb.lb(e.Va)},lb(e){e.Va.kb.lb(e.Va)},read(e,t,n,r){if(!e.Va||!e.Va.kb.Qb)throw new B(60);for(var i=0,a=0;a<r;a++){try{var o=e.Va.kb.Qb(e.Va)}catch{throw new B(29)}if(o===void 0&&i===0)throw new B(6);if(o==null)break;i++,t[n+a]=o}return i&&(e.node.$a=Date.now()),i},write(e,t,n,r){if(!e.Va||!e.Va.kb.Hb)throw new B(60);try{for(var i=0;i<r;i++)e.Va.kb.Hb(e.Va,t[n+i])}catch{throw new B(29)}return r&&(e.node.Ua=e.node.Ta=Date.now()),i}},L={Qb(){a:{if(!be.length){var e=null;if(globalThis.window?.prompt&&(e=window.prompt(`Input: `),e!==null&&(e+=`
`)),!e){var t=null;break a}t=Array(P(e)+1),e=F(e,t,0,t.length),t.length=e,be=t}t=be.shift()}return t},Hb(e,t){t===null||t===10?(m(N(e.output)),e.output=[]):t!=0&&e.output.push(t)},lb(e){0<e.output?.length&&(m(N(e.output)),e.output=[])},Dc(){return{yc:25856,Ac:5,xc:191,zc:35387,wc:[3,28,127,21,4,0,1,0,17,19,26,0,18,15,23,22,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}},Ec(){return 0},Fc(){return[24,80]}},Ce={Hb(e,t){t===null||t===10?(h(N(e.output)),e.output=[]):t!=0&&e.output.push(t)},lb(e){0<e.output?.length&&(h(N(e.output)),e.output=[])}},R={Za:null,ab(){return R.createNode(null,`/`,16895,0)},createNode(e,t,n,r){if((n&61440)==24576||(n&61440)==4096)throw new B(63);return R.Za||={dir:{node:{Wa:R.La.Wa,Xa:R.La.Xa,mb:R.La.mb,rb:R.La.rb,Tb:R.La.Tb,xb:R.La.xb,vb:R.La.vb,Ib:R.La.Ib,wb:R.La.wb},stream:{Ya:R.Ma.Ya}},file:{node:{Wa:R.La.Wa,Xa:R.La.Xa},stream:{Ya:R.Ma.Ya,read:R.Ma.read,write:R.Ma.write,sb:R.Ma.sb,tb:R.Ma.tb}},link:{node:{Wa:R.La.Wa,Xa:R.La.Xa,eb:R.La.eb},stream:{}},Nb:{node:{Wa:R.La.Wa,Xa:R.La.Xa},stream:Je}},n=ze(e,t,n,r),V(n.mode)?(n.La=R.Za.dir.node,n.Ma=R.Za.dir.stream,n.Na={}):(n.mode&61440)==32768?(n.La=R.Za.file.node,n.Ma=R.Za.file.stream,n.Ra=0,n.Na=null):(n.mode&61440)==40960?(n.La=R.Za.link.node,n.Ma=R.Za.link.stream):(n.mode&61440)==8192&&(n.La=R.Za.Nb.node,n.Ma=R.Za.Nb.stream),n.$a=n.Ua=n.Ta=Date.now(),e&&(e.Na[t]=n,e.$a=e.Ua=e.Ta=n.$a),n},Cc(e){return e.Na?e.Na.subarray?e.Na.subarray(0,e.Ra):new Uint8Array(e.Na):new Uint8Array},La:{Wa(e){var t={};return t.cc=(e.mode&61440)==8192?e.id:1,t.oc=e.id,t.mode=e.mode,t.rc=1,t.uid=0,t.nc=0,t.nb=e.nb,t.size=V(e.mode)?4096:(e.mode&61440)==32768?e.Ra:(e.mode&61440)==40960?e.link.length:0,t.$a=new Date(e.$a),t.Ua=new Date(e.Ua),t.Ta=new Date(e.Ta),t.Zb=4096,t.$b=Math.ceil(t.size/t.Zb),t},Xa(e,t){for(var n of[`mode`,`atime`,`mtime`,`ctime`])t[n]!=null&&(e[n]=t[n]);t.size!==void 0&&(t=t.size,e.Ra!=t&&(t==0?(e.Na=null,e.Ra=0):(n=e.Na,e.Na=new Uint8Array(t),n&&e.Na.set(n.subarray(0,Math.min(t,e.Ra))),e.Ra=t)))},mb(){throw R.zb||(R.zb=new B(44),R.zb.stack=`<generic error, no stack>`),R.zb},rb(e,t,n,r){return R.createNode(e,t,n,r)},Tb(e,t,n){try{var r=Re(t,n)}catch{}if(r){if(V(e.mode))for(var i in r.Na)throw new B(55);Le(r)}delete e.parent.Na[e.name],t.Na[n]=e,e.name=n,t.Ta=t.Ua=e.parent.Ta=e.parent.Ua=Date.now()},xb(e,t){delete e.Na[t],e.Ta=e.Ua=Date.now()},vb(e,t){var n=Re(e,t),r;for(r in n.Na)throw new B(55);delete e.Na[t],e.Ta=e.Ua=Date.now()},Ib(e){return[`.`,`..`,...Object.keys(e.Na)]},wb(e,t,n){return e=R.createNode(e,t,41471,0),e.link=n,e},eb(e){if((e.mode&61440)!=40960)throw new B(28);return e.link}},Ma:{read(e,t,n,r,i){var a=e.node.Na;if(i>=e.node.Ra)return 0;if(e=Math.min(e.node.Ra-i,r),8<e&&a.subarray)t.set(a.subarray(i,i+e),n);else for(r=0;r<e;r++)t[n+r]=a[i+r];return e},write(e,t,n,r,i,a){if(t.buffer===y.buffer&&(a=!1),!r)return 0;if(e=e.node,e.Ua=e.Ta=Date.now(),t.subarray&&(!e.Na||e.Na.subarray)){if(a)return e.Na=t.subarray(n,n+r),e.Ra=r;if(e.Ra===0&&i===0)return e.Na=t.slice(n,n+r),e.Ra=r;if(i+r<=e.Ra)return e.Na.set(t.subarray(n,n+r),i),r}a=i+r;var o=e.Na?e.Na.length:0;if(o>=a||(a=Math.max(a,o*(1048576>o?2:1.125)>>>0),o!=0&&(a=Math.max(a,256)),o=e.Na,e.Na=new Uint8Array(a),0<e.Ra&&e.Na.set(o.subarray(0,e.Ra),0)),e.Na.subarray&&t.subarray)e.Na.set(t.subarray(n,n+r),i);else for(a=0;a<r;a++)e.Na[i+a]=t[n+a];return e.Ra=Math.max(e.Ra,i+r),r},Ya(e,t,n){if(n===1?t+=e.position:n===2&&(e.node.mode&61440)==32768&&(t+=e.node.Ra),0>t)throw new B(28);return t},sb(e,t,n,r,i){if((e.node.mode&61440)!=32768)throw new B(43);if(e=e.node.Na,i&2||!e||e.buffer!==y.buffer){i=!0,r=65536*Math.ceil(t/65536);var a=Rt(65536,r);if(a&&b.fill(0,a,a+r),r=a,!r)throw new B(48);e&&((0<n||n+t<e.length)&&(e=e.subarray?e.subarray(n,n+t):Array.prototype.slice.call(e,n,n+t)),y.set(e,r))}else i=!1,r=e.byteOffset;return{tc:r,Ub:i}},tb(e,t,n,r){return R.Ma.write(e,t,0,r,n,!1),0}}},we=(e,t)=>{var n=0;return e&&(n|=365),t&&(n|=146),n},Te=null,z={},Ee=[],De=1,Oe=null,ke=!1,Ae=!0,je={},B=class{name=`ErrnoError`;constructor(e){this.Pa=e}},Me=class{qb={};node=null;get flags(){return this.qb.flags}set flags(e){this.qb.flags=e}get position(){return this.qb.position}set position(e){this.qb.position=e}},Ne=class{La={};Ma={};ib=null;constructor(e,t,n,r){e||=this,this.parent=e,this.ab=e.ab,this.id=De++,this.name=t,this.mode=n,this.nb=r,this.$a=this.Ua=this.Ta=Date.now()}get read(){return(this.mode&365)==365}set read(e){e?this.mode|=365:this.mode&=-366}get write(){return(this.mode&146)==146}set write(e){e?this.mode|=146:this.mode&=-147}};function Pe(e,t={}){if(!e)throw new B(44);t.Bb??=!0,e.charAt(0)===`/`||(e=`//`+e);var n=0;a:for(;40>n;n++){e=e.split(`/`).filter(e=>!!e);for(var r=Te,i=`/`,a=0;a<e.length;a++){var o=a===e.length-1;if(o&&t.parent)break;if(e[a]!==`.`){if(e[a]===`..`){if(i=_e(i),r===r.parent){e=i+`/`+e.slice(a+1).join(`/`),n--;continue a}r=r.parent}else{i=ge(i+`/`+e[a]);try{r=Re(r,e[a])}catch(e){if(e?.Pa===44&&o&&t.sc)return{path:i};throw e}if(!r.ib||o&&!t.Bb||(r=r.ib.root),(r.mode&61440)==40960&&(!o||t.hb)){if(!r.La.eb)throw new B(52);r=r.La.eb(r),r.charAt(0)===`/`||(r=_e(i)+`/`+r),e=r+`/`+e.slice(a+1).join(`/`);continue a}}}}return{path:i,node:r}}throw new B(32)}function Fe(e){for(var t;;){if(e===e.parent)return e=e.ab.Sb,t?e[e.length-1]===`/`?e+t:`${e}/${t}`:e;t=t?`${e.name}/${t}`:e.name,e=e.parent}}function Ie(e,t){for(var n=0,r=0;r<t.length;r++)n=(n<<5)-n+t.charCodeAt(r)|0;return(e+n>>>0)%Oe.length}function Le(e){var t=Ie(e.parent.id,e.name);if(Oe[t]===e)Oe[t]=e.jb;else for(t=Oe[t];t;){if(t.jb===e){t.jb=e.jb;break}t=t.jb}}function Re(e,t){var n=V(e.mode)?(n=Ve(e,`x`))?n:e.La.mb?0:2:54;if(n)throw new B(n);for(n=Oe[Ie(e.id,t)];n;n=n.jb){var r=n.name;if(n.parent.id===e.id&&r===t)return n}return e.La.mb(e,t)}function ze(e,t,n,r){return e=new Ne(e,t,n,r),t=Ie(e.parent.id,e.name),e.jb=Oe[t],Oe[t]=e}function V(e){return(e&61440)==16384}function Be(e){var t=[`r`,`w`,`rw`][e&3];return e&512&&(t+=`w`),t}function Ve(e,t){if(Ae)return 0;if(!t.includes(`r`)||e.mode&292){if(t.includes(`w`)&&!(e.mode&146)||t.includes(`x`)&&!(e.mode&73))return 2}else return 2;return 0}function He(e,t){if(!V(e.mode))return 54;try{return Re(e,t),20}catch{}return Ve(e,`wx`)}function Ue(e,t,n){try{var r=Re(e,t)}catch(e){return e.Pa}if(e=Ve(e,`wx`))return e;if(n){if(!V(r.mode))return 54;if(r===r.parent||Fe(r)===`/`)return 10}else if(V(r.mode))return 31;return 0}function We(e){if(!e)throw new B(63);return e}function H(e){if(e=Ee[e],!e)throw new B(8);return e}function Ge(e,t=-1){if(e=Object.assign(new Me,e),t==-1)a:{for(t=0;4096>=t;t++)if(!Ee[t])break a;throw new B(33)}return e.bb=t,Ee[t]=e}function Ke(e,t=-1){return e=Ge(e,t),e.Ma?.Bc?.(e),e}function qe(e,t,n){var r=e?.Ma.Xa;e=r?e:t,r??=t.La.Xa,We(r),r(e,n)}var Je={open(e){e.Ma=z[e.node.nb].Ma,e.Ma.open?.(e)},Ya(){throw new B(70)}};function Ye(e,t){z[e]={Ma:t}}function Xe(e,t){var n=t===`/`;if(n&&Te)throw new B(10);if(!n&&t){var r=Pe(t,{Bb:!1});if(t=r.path,r=r.node,r.ib)throw new B(10);if(!V(r.mode))throw new B(54)}t={type:e,Gc:{},Sb:t,qc:[]},e=e.ab(t),e.ab=t,t.root=e,n?Te=e:r&&(r.ib=t,r.ab&&r.ab.qc.push(t))}function Ze(e,t,n){var r=Pe(e,{parent:!0}).node;if(e=j(e),!e)throw new B(28);if(e===`.`||e===`..`)throw new B(20);var i=He(r,e);if(i)throw new B(i);if(!r.La.rb)throw new B(63);return r.La.rb(r,e,t,n)}function Qe(e,t=438){return Ze(e,t&4095|32768,0)}function $e(e,t=511){return Ze(e,t&1023|16384,0)}function et(e,t,n){n===void 0&&(n=t,t=438),Ze(e,t|8192,n)}function tt(e,t){if(!ye(e))throw new B(44);var n=Pe(t,{parent:!0}).node;if(!n)throw new B(44);t=j(t);var r=He(n,t);if(r)throw new B(r);if(!n.La.wb)throw new B(63);n.La.wb(n,t,e)}function nt(e){var t=Pe(e,{parent:!0}).node;e=j(e);var n=Re(t,e),r=Ue(t,e,!0);if(r)throw new B(r);if(!t.La.vb)throw new B(63);if(n.ib)throw new B(10);t.La.vb(t,e),Le(n)}function rt(e){var t=Pe(e,{parent:!0}).node;if(!t)throw new B(44);e=j(e);var n=Re(t,e),r=Ue(t,e,!1);if(r)throw new B(r);if(!t.La.xb)throw new B(63);if(n.ib)throw new B(10);t.La.xb(t,e),Le(n)}function it(e,t){return e=Pe(e,{hb:!t}).node,We(e.La.Wa)(e)}function at(e,t,n,r){qe(e,t,{mode:n&4095|t.mode&-4096,Ta:Date.now(),dc:r})}function ot(e,t){e=typeof e==`string`?Pe(e,{hb:!0}).node:e,at(null,e,t)}function st(e,t,n){if(V(t.mode))throw new B(31);if((t.mode&61440)!=32768)throw new B(28);var r=Ve(t,`w`);if(r)throw new B(r);qe(e,t,{size:n,timestamp:Date.now()})}function ct(e,t,n=438){if(e===``)throw new B(44);if(typeof t==`string`){var r={r:0,"r+":2,w:577,"w+":578,a:1089,"a+":1090}[t];if(r===void 0)throw Error(`Unknown file open mode: ${t}`);t=r}if(n=t&64?n&4095|32768:0,typeof e==`object`)r=e;else{var i=e.endsWith(`/`);e=Pe(e,{hb:!(t&131072),sc:!0}),r=e.node,e=e.path}var a=!1;if(t&64){if(r){if(t&128)throw new B(20)}else{if(i)throw new B(31);r=Ze(e,n|511,0),a=!0}}if(!r)throw new B(44);if((r.mode&61440)==8192&&(t&=-513),t&65536&&!V(r.mode))throw new B(54);if(!a&&(i=r?(r.mode&61440)==40960?32:V(r.mode)&&(Be(t)!==`r`||t&576)?31:Ve(r,Be(t)):44))throw new B(i);return t&512&&!a&&(i=r,i=typeof i==`string`?Pe(i,{hb:!0}).node:i,st(null,i,0)),t&=-131713,i=Ge({node:r,path:Fe(r),flags:t,seekable:!0,position:0,Ma:r.Ma,uc:[],error:!1}),i.Ma.open&&i.Ma.open(i),a&&ot(r,n&511),!o.logReadFiles||t&1||e in je||(je[e]=1),i}function lt(e){if(e.bb===null)throw new B(8);e.Eb&&=null;try{e.Ma.close&&e.Ma.close(e)}catch(e){throw e}finally{Ee[e.bb]=null}e.bb=null}function ut(e,t,n){if(e.bb===null)throw new B(8);if(!e.seekable||!e.Ma.Ya)throw new B(70);if(n!=0&&n!=1&&n!=2)throw new B(28);e.position=e.Ma.Ya(e,t,n),e.uc=[]}function dt(e,t,n,r,i){if(0>r||0>i)throw new B(28);if(e.bb===null||(e.flags&2097155)==1)throw new B(8);if(V(e.node.mode))throw new B(31);if(!e.Ma.read)throw new B(28);var a=i!==void 0;if(!a)i=e.position;else if(!e.seekable)throw new B(70);return t=e.Ma.read(e,t,n,r,i),a||(e.position+=t),t}function ft(e,t,n,r,i){if(0>r||0>i)throw new B(28);if(e.bb===null||!(e.flags&2097155))throw new B(8);if(V(e.node.mode))throw new B(31);if(!e.Ma.write)throw new B(28);e.seekable&&e.flags&1024&&ut(e,0,2);var a=i!==void 0;if(!a)i=e.position;else if(!e.seekable)throw new B(70);return t=e.Ma.write(e,t,n,r,i,void 0),a||(e.position+=t),t}function pt(e){var t=t||0,n=`binary`;n!==`utf8`&&n!==`binary`&&D(`Invalid encoding type "${n}"`),t=ct(e,t),e=it(e).size;var r=new Uint8Array(e);return dt(t,r,0,e,0),n===`utf8`&&(r=N(r)),lt(t),r}function mt(e,t,n){e=ge(`/dev/`+e);var r=we(!!t,!!n);mt.Rb??=64;var i=mt.Rb++<<8|0;Ye(i,{open(e){e.seekable=!1},close(){n?.buffer?.length&&n(10)},read(e,n,r,i){for(var a=0,o=0;o<i;o++){try{var s=t()}catch{throw new B(29)}if(s===void 0&&a===0)throw new B(6);if(s==null)break;a++,n[r+o]=s}return a&&(e.node.$a=Date.now()),a},write(e,t,r,i){for(var a=0;a<i;a++)try{n(t[r+a])}catch{throw new B(29)}return i&&(e.node.Ua=e.node.Ta=Date.now()),a}}),et(e,r,i)}var U={};function ht(e,t,n){if(t.charAt(0)===`/`)return t;if(e=e===-100?`/`:H(e).path,t.length==0){if(!n)throw new B(44);return e}return e+`/`+t}function gt(e,t){C[e>>2]=t.cc,C[e+4>>2]=t.mode,C[e+8>>2]=t.rc,C[e+12>>2]=t.uid,C[e+16>>2]=t.nc,C[e+20>>2]=t.nb,E[e+24>>3]=BigInt(t.size),S[e+32>>2]=4096,S[e+36>>2]=t.$b;var n=t.$a.getTime(),r=t.Ua.getTime(),i=t.Ta.getTime();return E[e+40>>3]=BigInt(Math.floor(n/1e3)),C[e+48>>2]=n%1e3*1e6,E[e+56>>3]=BigInt(Math.floor(r/1e3)),C[e+64>>2]=r%1e3*1e6,E[e+72>>3]=BigInt(Math.floor(i/1e3)),C[e+80>>2]=i%1e3*1e6,E[e+88>>3]=BigInt(t.oc),0}var _t=void 0,W=()=>{var e=S[_t>>2];return _t+=4,e},vt=0,yt=[0,31,60,91,121,152,182,213,244,274,305,335],bt=[0,31,59,90,120,151,181,212,243,273,304,334],xt={},St=e=>{if(!(e instanceof ie||e==`unwind`))throw e},Ct=e=>{throw v=e,fe||0<vt||(o.onExit?.(e),_=!0),new ie(e)},wt=e=>{if(!_)try{e()}catch(e){St(e)}finally{if(!(fe||0<vt))try{v=e=v,Ct(e)}catch(e){St(e)}}},Tt={},Et=()=>{if(!Dt){var e={USER:`web_user`,LOGNAME:`web_user`,PATH:`/`,PWD:`/`,HOME:`/home/web_user`,LANG:(globalThis.navigator?.language??`C`).replace(`-`,`_`)+`.UTF-8`,_:l||`./this.program`},t;for(t in Tt)Tt[t]===void 0?delete e[t]:e[t]=Tt[t];var n=[];for(t in e)n.push(`${t}=${e[t]}`);Dt=n}return Dt},Dt,Ot=(e,t,n,r)=>{var i={string:e=>{var t=0;if(e!=null&&e!==0){t=P(e)+1;var n=K(t);F(e,b,n,t),t=n}return t},array:e=>{var t=K(e.length);return y.set(e,t),t}};e=o[`_`+e];var a=[],s=0;if(r)for(var c=0;c<r.length;c++){var l=i[n[c]];l?(s===0&&(s=Vt()),a[c]=l(r[c])):a[c]=r[c]}return n=e(...a),n=function(e){return s!==0&&Bt(s),t===`string`?k(e):t===`boolean`?!!e:e}(n)},kt=e=>{var t=P(e)+1,n=It(t);return n&&F(e,b,n,t),n},At,jt=[],Mt=e=>{At.delete(Ut.get(e)),Ut.set(e,null),jt.push(e)},Nt=e=>{let t=e.length;return[t%128|128,t>>7,...e]},Pt={i:127,p:127,j:126,f:125,d:124,e:111},Ft=e=>Nt(Array.from(e,e=>Pt[e])),G=(e,t)=>{if(!At){At=new WeakMap;var n=Ut.length;if(At)for(var r=0;r<0+n;r++){var i=Ut.get(r);i&&At.set(i,r)}}if(n=At.get(e)||0)return n;n=jt.length?jt.pop():Ut.grow(1);try{Ut.set(n,e)}catch(r){if(!(r instanceof TypeError))throw r;t=Uint8Array.of(0,97,115,109,1,0,0,0,1,...Nt([1,96,...Ft(t.slice(1)),...Ft(t[0]===`v`?``:t[0])]),2,7,1,1,101,1,102,0,0,7,5,1,1,102,0,0),t=new WebAssembly.Module(t),t=new WebAssembly.Instance(t,{e:{f:e}}).exports.f,Ut.set(n,t)}return At.set(e,n),n};if(Oe=Array(4096),Xe(R,`/`),$e(`/tmp`),$e(`/home`),$e(`/home/web_user`),(function(){$e(`/dev`),Ye(259,{read:()=>0,write:(e,t,n,r)=>r,Ya:()=>0}),et(`/dev/null`,259),xe(1280,L),xe(1536,Ce),et(`/dev/tty`,1280),et(`/dev/tty1`,1536);var e=new Uint8Array(1024),t=0,n=()=>(t===0&&(M(e),t=e.byteLength),e[--t]);mt(`random`,n),mt(`urandom`,n),$e(`/dev/shm`),$e(`/dev/shm/tmp`)})(),(function(){$e(`/proc`);var e=$e(`/proc/self`);$e(`/proc/self/fd`),Xe({ab(){var t=ze(e,`fd`,16895,73);return t.Ma={Ya:R.Ma.Ya},t.La={mb(e,t){e=+t;var n=H(e);return e={parent:null,ab:{Sb:`fake`},La:{eb:()=>n.path},id:e+1},e.parent=e},Ib(){return Array.from(Ee.entries()).filter(([,e])=>e).map(([e])=>e.toString())}},t}},`/proc/self/fd`)})(),o.noExitRuntime&&(fe=o.noExitRuntime),o.print&&(m=o.print),o.printErr&&(h=o.printErr),o.wasmBinary&&(g=o.wasmBinary),o.thisProgram&&(l=o.thisProgram),o.preInit)for(typeof o.preInit==`function`&&(o.preInit=[o.preInit]);0<o.preInit.length;)o.preInit.shift()();o.stackSave=()=>Vt(),o.stackRestore=e=>Bt(e),o.stackAlloc=e=>K(e),o.cwrap=(e,t,n,r)=>{var i=!n||n.every(e=>e===`number`||e===`boolean`);return t!==`string`&&i&&!r?o[`_`+e]:(...r)=>Ot(e,t,n,r)},o.addFunction=G,o.removeFunction=Mt,o.UTF8ToString=k,o.stringToNewUTF8=kt,o.writeArrayToMemory=(e,t)=>{y.set(e,t)};var It,Lt,Rt,zt,Bt,K,Vt,Ht,Ut,q={a:(e,t,n,r)=>D(`Assertion failed: ${k(e)}, at: `+[t?k(t):`unknown filename`,n,r?k(r):`unknown function`]),i:function(e,t){try{return e=k(e),ot(e,t),0}catch(e){if(U===void 0||e.name!==`ErrnoError`)throw e;return-e.Pa}},L:function(e,t,n){try{if(t=k(t),t=ht(e,t),n&-8)return-28;var r=Pe(t,{hb:!0}).node;return r?(e=``,n&4&&(e+=`r`),n&2&&(e+=`w`),n&1&&(e+=`x`),e&&Ve(r,e)?-2:0):-44}catch(e){if(U===void 0||e.name!==`ErrnoError`)throw e;return-e.Pa}},j:function(e,t){try{var n=H(e);return at(n,n.node,t,!1),0}catch(e){if(U===void 0||e.name!==`ErrnoError`)throw e;return-e.Pa}},h:function(e){try{var t=H(e);return qe(t,t.node,{timestamp:Date.now(),dc:!1}),0}catch(e){if(U===void 0||e.name!==`ErrnoError`)throw e;return-e.Pa}},b:function(e,t,n){_t=n;try{var r=H(e);switch(t){case 0:var i=W();if(0>i)break;for(;Ee[i];)i++;return Ke(r,i).bb;case 1:case 2:return 0;case 3:return r.flags;case 4:return i=W(),r.flags|=i,0;case 12:return i=W(),x[i+0>>1]=2,0;case 13:case 14:return 0}return-28}catch(e){if(U===void 0||e.name!==`ErrnoError`)throw e;return-e.Pa}},g:function(e,t){try{var n=H(e),r=n.node,i=n.Ma.Wa;return e=i?n:r,i??=r.La.Wa,We(i),gt(t,i(e))}catch(e){if(U===void 0||e.name!==`ErrnoError`)throw e;return-e.Pa}},H:function(e,t){t=-9007199254740992>t||9007199254740992<t?NaN:Number(t);try{if(isNaN(t))return-61;var n=H(e);if(0>t||!(n.flags&2097155))throw new B(28);return st(n,n.node,t),0}catch(e){if(U===void 0||e.name!==`ErrnoError`)throw e;return-e.Pa}},G:function(e,t){try{if(t===0)return-28;var n=P(`/`)+1;return t<n?-68:(F(`/`,b,e,t),n)}catch(e){if(U===void 0||e.name!==`ErrnoError`)throw e;return-e.Pa}},K:function(e,t){try{return e=k(e),gt(t,it(e,!0))}catch(e){if(U===void 0||e.name!==`ErrnoError`)throw e;return-e.Pa}},C:function(e,t,n){try{return t=k(t),t=ht(e,t),$e(t,n),0}catch(e){if(U===void 0||e.name!==`ErrnoError`)throw e;return-e.Pa}},J:function(e,t,n,r){try{t=k(t);var i=r&256;return t=ht(e,t,r&4096),gt(n,i?it(t,!0):it(t))}catch(e){if(U===void 0||e.name!==`ErrnoError`)throw e;return-e.Pa}},x:function(e,t,n,r){_t=r;try{t=k(t),t=ht(e,t);var i=r?W():0;return ct(t,n,i).bb}catch(e){if(U===void 0||e.name!==`ErrnoError`)throw e;return-e.Pa}},v:function(e,t,n,r){try{if(t=k(t),t=ht(e,t),0>=r)return-28;var i=Pe(t).node;if(!i)throw new B(44);if(!i.La.eb)throw new B(28);var a=i.La.eb(i),o=Math.min(r,P(a)),s=y[n+o];return F(a,b,n,r+1),y[n+o]=s,o}catch(e){if(U===void 0||e.name!==`ErrnoError`)throw e;return-e.Pa}},u:function(e){try{return e=k(e),nt(e),0}catch(e){if(U===void 0||e.name!==`ErrnoError`)throw e;return-e.Pa}},f:function(e,t){try{return e=k(e),gt(t,it(e))}catch(e){if(U===void 0||e.name!==`ErrnoError`)throw e;return-e.Pa}},r:function(e,t,n){try{if(t=k(t),t=ht(e,t),n){if(n===512)nt(t);else return-28}else rt(t);return 0}catch(e){if(U===void 0||e.name!==`ErrnoError`)throw e;return-e.Pa}},q:function(e,t,n){try{t=k(t),t=ht(e,t,!0);var r=Date.now(),i,a;if(n){var o=C[n>>2]+4294967296*S[n+4>>2],s=S[n+8>>2];i=s==1073741823?r:s==1073741822?null:1e3*o+s/1e6,n+=16,o=C[n>>2]+4294967296*S[n+4>>2],s=S[n+8>>2],a=s==1073741823?r:s==1073741822?null:1e3*o+s/1e6}else a=i=r;if((a??i)!==null){e=i;var c=Pe(t,{hb:!0}).node;We(c.La.Xa)(c,{$a:e,Ua:a})}return 0}catch(e){if(U===void 0||e.name!==`ErrnoError`)throw e;return-e.Pa}},m:()=>D(``),l:()=>{fe=!1,vt=0},A:function(e,t){e=-9007199254740992>e||9007199254740992<e?NaN:Number(e),e=new Date(1e3*e),S[t>>2]=e.getSeconds(),S[t+4>>2]=e.getMinutes(),S[t+8>>2]=e.getHours(),S[t+12>>2]=e.getDate(),S[t+16>>2]=e.getMonth(),S[t+20>>2]=e.getFullYear()-1900,S[t+24>>2]=e.getDay();var n=e.getFullYear();S[t+28>>2]=(n%4!=0||n%100==0&&n%400!=0?bt:yt)[e.getMonth()]+e.getDate()-1|0,S[t+36>>2]=-(60*e.getTimezoneOffset()),n=new Date(e.getFullYear(),6,1).getTimezoneOffset();var r=new Date(e.getFullYear(),0,1).getTimezoneOffset();S[t+32>>2]=(n!=r&&e.getTimezoneOffset()==Math.min(r,n))|0},y:function(e,t,n,r,i,a,o){i=-9007199254740992>i||9007199254740992<i?NaN:Number(i);try{var s=H(r);if(t&2&&!(n&2)&&(s.flags&2097155)!=2||(s.flags&2097155)==1)throw new B(2);if(!s.Ma.sb)throw new B(43);if(!e)throw new B(28);var c=s.Ma.sb(s,e,i,t,n),l=c.tc;return S[a>>2]=c.Ub,C[o>>2]=l,0}catch(e){if(U===void 0||e.name!==`ErrnoError`)throw e;return-e.Pa}},z:function(e,t,n,r,i,a){a=-9007199254740992>a||9007199254740992<a?NaN:Number(a);try{var o=H(i);if(n&2){if((o.node.mode&61440)!=32768)throw new B(43);r&2||o.Ma.tb&&o.Ma.tb(o,b.slice(e,e+t),a,t,r)}}catch(e){if(U===void 0||e.name!==`ErrnoError`)throw e;return-e.Pa}},n:(e,t)=>(xt[e]&&(clearTimeout(xt[e].id),delete xt[e]),t&&(xt[e]={id:setTimeout(()=>{delete xt[e],wt(()=>zt(e,performance.now()))},t),Hc:t}),0),B:(e,t,n,r)=>{var i=new Date().getFullYear(),a=new Date(i,0,1).getTimezoneOffset();i=new Date(i,6,1).getTimezoneOffset(),C[e>>2]=60*Math.max(a,i),S[t>>2]=Number(a!=i),t=e=>{var t=Math.abs(e);return`UTC${0<=e?`-`:`+`}${String(Math.floor(t/60)).padStart(2,`0`)}${String(t%60).padStart(2,`0`)}`},e=t(a),t=t(i),i<a?(F(e,b,n,17),F(t,b,r,17)):(F(e,b,r,17),F(t,b,n,17))},d:()=>Date.now(),s:()=>2147483648,c:()=>performance.now(),o:e=>{var t=b.length;if(e>>>=0,2147483648<e)return!1;for(var n=1;4>=n;n*=2){var r=t*(1+.2/n);r=Math.min(r,e+100663296);a:{r=(Math.min(2147483648,65536*Math.ceil(Math.max(e,r)/65536))-Ht.buffer.byteLength+65535)/65536|0;try{Ht.grow(r),ee();var i=1;break a}catch{}i=void 0}if(i)return!0}return!1},E:(e,t)=>{var n=0,r=0,i;for(i of Et()){var a=t+n;C[e+r>>2]=a,n+=F(i,b,a,1/0)+1,r+=4}return 0},F:(e,t)=>{var n=Et();C[e>>2]=n.length,e=0;for(var r of n)e+=P(r)+1;return C[t>>2]=e,0},e:function(e){try{return lt(H(e)),0}catch(e){if(U===void 0||e.name!==`ErrnoError`)throw e;return e.Pa}},p:function(e,t){try{var n=H(e);return y[t]=n.Va?2:V(n.mode)?3:(n.mode&61440)==40960?7:4,x[t+2>>1]=0,E[t+8>>3]=BigInt(0),E[t+16>>3]=BigInt(0),0}catch(e){if(U===void 0||e.name!==`ErrnoError`)throw e;return e.Pa}},w:function(e,t,n,r){try{a:{var i=H(e);e=t;for(var a,o=t=0;o<n;o++){var s=C[e>>2],c=C[e+4>>2];e+=8;var l=dt(i,y,s,c,a);if(0>l){var u=-1;break a}if(t+=l,l<c)break;a!==void 0&&(a+=l)}u=t}return C[r>>2]=u,0}catch(e){if(U===void 0||e.name!==`ErrnoError`)throw e;return e.Pa}},D:function(e,t,n,r){t=-9007199254740992>t||9007199254740992<t?NaN:Number(t);try{if(isNaN(t))return 61;var i=H(e);return ut(i,t,n),E[r>>3]=BigInt(i.position),i.Eb&&t===0&&n===0&&(i.Eb=null),0}catch(e){if(U===void 0||e.name!==`ErrnoError`)throw e;return e.Pa}},I:function(e){try{var t=H(e);return t.Ma?.lb?.(t)}catch(e){if(U===void 0||e.name!==`ErrnoError`)throw e;return e.Pa}},t:function(e,t,n,r){try{a:{var i=H(e);e=t;for(var a,o=t=0;o<n;o++){var s=C[e>>2],c=C[e+4>>2];e+=8;var l=ft(i,y,s,c,a);if(0>l){var u=-1;break a}if(t+=l,l<c)break;a!==void 0&&(a+=l)}u=t}return C[r>>2]=u,0}catch(e){if(U===void 0||e.name!==`ErrnoError`)throw e;return e.Pa}},k:Ct};function Wt(){function e(){if(o.calledRun=!0,!_){if(!o.noFSInit&&!ke){var e,t;ke=!0,e??=o.stdin,t??=o.stdout,n??=o.stderr,e?mt(`stdin`,e):tt(`/dev/tty`,`/dev/stdin`),t?mt(`stdout`,null,t):tt(`/dev/tty`,`/dev/stdout`),n?mt(`stderr`,null,n):tt(`/dev/tty1`,`/dev/stderr`),ct(`/dev/stdin`,0),ct(`/dev/stdout`,1),ct(`/dev/stderr`,1)}if(J.N(),Ae=!1,o.onRuntimeInitialized?.(),o.postRun)for(typeof o.postRun==`function`&&(o.postRun=[o.postRun]);o.postRun.length;){var n=o.postRun.shift();oe.push(n)}ae(oe)}}if(0<le)ue=Wt;else{if(o.preRun)for(typeof o.preRun==`function`&&(o.preRun=[o.preRun]);o.preRun.length;)ce();ae(se),0<le?ue=Wt:o.setStatus?(o.setStatus(`Running...`),setTimeout(()=>{setTimeout(()=>o.setStatus(``),1),e()},1)):e()}}var J;return(async function(){function e(e){return e=J=e.exports,o._sqlite3_free=e.P,o._sqlite3_value_text=e.Q,o._sqlite3_prepare_v2=e.R,o._sqlite3_step=e.S,o._sqlite3_reset=e.T,o._sqlite3_exec=e.U,o._sqlite3_finalize=e.V,o._sqlite3_column_name=e.W,o._sqlite3_column_text=e.X,o._sqlite3_column_type=e.Y,o._sqlite3_errmsg=e.Z,o._sqlite3_clear_bindings=e._,o._sqlite3_value_blob=e.$,o._sqlite3_value_bytes=e.aa,o._sqlite3_value_double=e.ba,o._sqlite3_value_int=e.ca,o._sqlite3_value_type=e.da,o._sqlite3_result_blob=e.ea,o._sqlite3_result_double=e.fa,o._sqlite3_result_error=e.ga,o._sqlite3_result_int=e.ha,o._sqlite3_result_int64=e.ia,o._sqlite3_result_null=e.ja,o._sqlite3_result_text=e.ka,o._sqlite3_aggregate_context=e.la,o._sqlite3_column_count=e.ma,o._sqlite3_data_count=e.na,o._sqlite3_column_blob=e.oa,o._sqlite3_column_bytes=e.pa,o._sqlite3_column_double=e.qa,o._sqlite3_bind_blob=e.ra,o._sqlite3_bind_double=e.sa,o._sqlite3_bind_int=e.ta,o._sqlite3_bind_text=e.ua,o._sqlite3_bind_parameter_index=e.va,o._sqlite3_sql=e.wa,o._sqlite3_normalized_sql=e.xa,o._sqlite3_changes=e.ya,o._sqlite3_close_v2=e.za,o._sqlite3_create_function_v2=e.Aa,o._sqlite3_update_hook=e.Ba,o._sqlite3_open=e.Ca,It=o._malloc=e.Da,Lt=o._free=e.Ea,o._RegisterExtensionFunctions=e.Fa,Rt=e.Ga,zt=e.Ha,Bt=e.Ia,K=e.Ja,Vt=e.Ka,Ht=e.M,Ut=e.O,ee(),le--,o.monitorRunDependencies?.(le),le==0&&ue&&(e=ue,ue=null,e()),J}le++,o.monitorRunDependencies?.(le);var t={a:q};return o.instantiateWasm?new Promise(n=>{o.instantiateWasm(t,(t,r)=>{n(e(t,r))})}):(te??=o.locateFile?o.locateFile(`sql-wasm-browser.wasm`,d):d+`sql-wasm-browser.wasm`,e((await re(t)).instance))})(),Wt(),i}),n)};typeof e==`object`&&typeof t==`object`?(t.exports=r,t.exports.default=r):typeof define==`function`&&define.amd?define([],function(){return r}):typeof e==`object`&&(e.Module=r)}))(),1),Cn=null,wn=new Map;async function Tn(e){let t=new URL(`sqljs/sql-wasm.wasm`,document.baseURI),n=await fetch(t);if(!n.ok)throw Error(`demo: no sqlite runtime at ${t} (${n.status})`);Cn=await(0,Sn.default)({wasmBinary:await n.arrayBuffer()});for(let[t,n]of Object.entries(e)){let e=await fetch(new URL(n,document.baseURI),{cache:`no-cache`});if(!e.ok){console.warn(`demo: no database at ${n} (${e.status})`);continue}wn.set(t,new Cn.Database(new Uint8Array(await e.arrayBuffer()))),F(t,``,Date.now())}}var En=class{db;sql;constructor(e,t){this.db=e,this.sql=t}bind(e){if(e.length===1&&e[0]!==null&&typeof e[0]==`object`){let t=e[0];return Object.fromEntries(Object.entries(t).map(([e,t])=>[`@${e}`,t]))}return e.map(e=>typeof e==`bigint`?e.toString():e)}all(...e){let t=this.db.prepare(this.sql);try{t.bind(this.bind(e));let n=[];for(;t.step();)n.push(t.getAsObject());return n}finally{t.free()}}get(...e){return this.all(...e)[0]}run(...e){return this.db.run(this.sql,this.bind(e)),{changes:this.db.getRowsModified(),lastInsertRowid:0}}raw(){return this}pluck(){return this}},Dn=class{name;db;constructor(e,t){let n=wn.get(e);if(!n){if(Cn&&!t?.readonly&&!t?.fileMustExist)n=new Cn.Database,wn.set(e,n),F(e,``,Date.now());else throw Object.assign(Error(`demo: database not loaded: ${e}`),{code:`SQLITE_CANTOPEN`})}this.name=e,this.db=n}prepare(e){return new En(this.db,e)}exec(e){this.db.run(e)}pragma(){return[]}transaction(e){return e}close(){}},On=/^[A-Za-z0-9][A-Za-z0-9_.-]{0,119}$/,kn=new Set;function An(t=Zt,r={}){let i=new G;return i.get(`/sources`,e=>{let n=[];try{n=A(t).filter(e=>e.endsWith(`.pgn`)).map(e=>({name:e,bytes:N(K(t,e)).size}))}catch{}return e.json({sources:n})}),i.post(`/sources`,async r=>{let i=r.req.query(`name`)??``;if(!On.test(i)||!i.toLowerCase().endsWith(`.pgn`))return r.json({error:`name must be a plain .pgn filename`},400);let a=K(t,i);if(K(a,`..`)!==K(t))return r.json({error:`invalid name`},400);if(I(a)||kn.has(a))return r.json({error:`a file with that name is already here`},409);if(!r.req.raw.body)return r.json({error:`empty upload`},400);kn.add(a);let o=2*1024**3,s=Number(r.req.header(`content-length`));if(Number.isFinite(s)&&s>o)return r.json({error:`source file too large (2 GB cap)`},413);M(t,{recursive:!0});let c=`${a}.part`,{createWriteStream:l}=await n(async()=>{let{createWriteStream:e}=await import(`./fs-HQYIs3Fp.js`);return{createWriteStream:e}},__vite__mapDeps([0,1]),import.meta.url),{Readable:u}=await n(async()=>{let{Readable:t}=await import(`./__vite-browser-external-Cl-YgGEM.js`).then(t=>e(t.default,1));return{Readable:t}},__vite__mapDeps([2,3,4]),import.meta.url),{finished:d,pipeline:f}=await n(async()=>{let{finished:t,pipeline:n}=await import(`./__vite-browser-external-Cl-YgGEM.js`).then(t=>e(t.default,1));return{finished:t,pipeline:n}},__vite__mapDeps([2,3,4]),import.meta.url),p=l(c);try{let e=0;await f(u.fromWeb(r.req.raw.body),async function*(t){for await(let n of t){if(e+=n.byteLength,e>o)throw Error(`source file too large`);yield n}},p),Wt(c,a)}catch(e){return await d(p).catch(()=>{}),L(c,{force:!0}),e.message===`source file too large`?r.json({error:`source file too large (2 GB cap)`},413):(console.error(`sources: upload of ${i} failed: ${e.message}`),r.json({error:`upload failed`},500))}finally{kn.delete(a)}return r.json({name:i,bytes:N(a).size})}),i.delete(`/sources/:name`,e=>{let n=e.req.param(`name`);if(!On.test(n)||!n.toLowerCase().endsWith(`.pgn`))return e.json({error:`invalid name`},400);let i=K(t,n);if(K(i,`..`)!==K(t))return e.json({error:`invalid name`},400);if(!I(i))return e.json({error:`no such file`},404);if(r.busy?.())return e.json({error:`a build is reading the files right now`},409);try{L(i)}catch(t){return console.error(`sources: could not delete ${n}: ${t.message}`),e.json({error:`could not delete it: something else has the file open`},500)}return e.json({deleted:n})}),i}function jn(e,t,n){if(t?.endsWith(`#`))return`mate`;let r=(e??``).toLowerCase();return r.includes(`checkmate`)?`mate`:r.includes(`stalemate`)?`stalemate`:r.includes(`insufficient`)?`insufficient`:r.includes(`repetition`)?`repetition`:r.includes(`agreement`)?`agreement`:r.includes(`50`)||r.includes(`fifty`)?`fifty`:r.includes(`abandon`)?`abandoned`:r.includes(`time`)?`timeout`:r.includes(`resign`)?`resignation`:n===0?`unknown`:`resignation`}function Mn(e){return/^(chesscom|lichess)\//.test(e)?e.split(`/`)[1]?.toLowerCase()??null:null}function Nn(e,t,n,r){return n===`white`||n===`black`?n:r?e.toLowerCase()===r?`white`:t.toLowerCase()===r?`black`:null:null}function Pn(e){if(!e||e===`-`)return null;if(e.includes(`/`))return`correspondence`;let[t,n]=e.split(`+`),r=Number(t);if(!Number.isFinite(r))return null;let i=r+40*(Number(n)||0);return i>=86400?`correspondence`:i<180?`bullet`:i<480?`blitz`:i<1500?`rapid`:`classical`}function Fn(e){if(!e)return null;let t=/^(\d{4})[.\-/](\d{2})[.\-/](\d{2})$/.exec(e.trim());return t?`${t[1]}-${t[2]}-${t[3]}`:null}var In={"1-0":1,"1/2-1/2":0,"0-1":-1};function Ln(e,t){let n=t=>e.headers.get(t),r=(n(`Variant`)??`standard`).toLowerCase();if(![`standard`,`chess`,`classical`,`normal`].includes(r)||e.headers.has(`FEN`))return null;let i=In[n(`Result`)??``];if(i===void 0)return null;let a=n(`White`)??`?`,o=n(`Black`)??`?`,s=n(`TimeControl`)??null,c=[],l=p.default(),d=0,f=0,m;for(let t of e.moves.mainline())f+=1,m=t.san;for(let t of e.moves.mainline()){if(d>=60)break;let e=w(l,t.san);if(!e)break;c.push({hash:z(l.toSetup()),uci:u(e),ply:d}),l.play(e),d+=1}return c.length===0?null:{file:t.file,idx:t.idx,white:a,black:o,whiteElo:Number(n(`WhiteElo`))||0,blackElo:Number(n(`BlackElo`))||0,score:i,date:Fn(n(`UTCDate`)??n(`Date`)),timeControl:s,speed:Pn(s),eco:n(`ECO`)??null,userSide:Nn(a,o,n(`VaultSide`),t.user),site:n(`Link`)??(n(`Site`)?.startsWith(`http`)?n(`Site`):null),plyCount:f,ending:jn(n(`Termination`),m,i),plies:c}}var Rn=K(X,`scripts`,`vendor`,`chess-openings`);function*zn(){for(let e of[`a`,`b`,`c`,`d`,`e`])for(let t of P(K(Rn,`${e}.tsv`),`utf-8`).split(`
`)){let[e,n,r]=t.split(`	`);e&&n&&r&&e!==`eco`&&(yield[e,n,r])}}function Bn(){let e={},t=new Set,n=0,r=0;for(let[i,a,o]of zn()){let s=p.default(),c=``;for(let e of o.split(/\s+/)){if(!e||/^\d+\.+$/.test(e))continue;let n=w(s,e);if(!n)throw Error(`bad SAN "${e}" in ${i} ${a}`);s.play(n),c=z(s.toSetup()).toString(16),t.add(c)}e[c]?r+=1:e[c]=[i,a],n+=1}return{file:{schemaVersion:1,count:Object.keys(e).length,byKey:e,memberKeys:[...t]},lines:n,collisions:r}}function Vn(){let{file:e,lines:t,collisions:n}=Bn();return M(Vt(tn),{recursive:!0}),q(tn,JSON.stringify(e)),{path:tn,count:e.count,lines:t,collisions:n}}var Hn=null,Un=!1;function Wn(){try{let e=JSON.parse(P(tn,`utf-8`));return e&&typeof e.byKey==`object`&&e.byKey!==null?e:null}catch{return null}}function Gn(){let e;try{e=N(tn).mtimeMs}catch{if(Un)return null;try{let{count:t}=Vn();console.log(`openings: compiled ${t} positions -> ${tn}`),e=N(tn).mtimeMs}catch(e){return Un=!0,console.warn(`openings: no index and none could be built (${e.message})`),null}}if(!Hn||Hn.mtimeMs!==e){let t=Wn();if((t===null||!t.memberKeys)&&!Un){let n=t===null?`unreadable`:`without the membership set`;try{Vn(),console.log(`openings: recompiled ${tn}, which was ${n}`),e=N(tn).mtimeMs,t=Wn()}catch(e){Un=!0,console.warn(`openings: index ${n}, none could be rebuilt (${e.message})`)}}if(t===null)return Hn;Hn={mtimeMs:e,byKey:t.byKey,members:new Set(t.memberKeys??Object.keys(t.byKey))}}return Hn}function Kn(){return Gn()?.byKey??null}function qn(){return Gn()}function Jn(e){return Gn()?.members.has(e)??!1}function Yn(e){let t=Kn()?.[e];return t?{eco:t[0],name:t[1]}:null}function Xn(e){let t=Kn();if(!t)return[];let n=e.toLowerCase();if(!n)return[];let r=[];for(let[e,[,i]]of Object.entries(t))i.toLowerCase().includes(n)&&r.push(e);return r}var Zn=null;function Qn(){if(Zn)return Zn;let e=new Map;for(let[t,n,r]of zn()){let i=r.split(/\s+/).filter(e=>e&&!/^\d+\.+$/.test(e)),a=`${t}\t${n}`,o=e.get(a);(!o||i.length<o.sans.length)&&e.set(a,{eco:t,name:n,sans:i})}return Zn=[...e.values()],Zn}function $n(){let e=new G;return e.get(`/openings`,e=>{try{let t=Qn();return e.header(`cache-control`,`private, max-age=86400`),e.json({openings:t})}catch{return e.json({error:`the opening catalogue is missing from this install`},503)}}),e.get(`/opening`,e=>{let t=e.req.query(`fen`);if(!t)return e.json({error:`missing ?fen=`},400);try{let n=p.fromSetup(l(t).unwrap()).unwrap(),r=z(n.toSetup()).toString(16);return e.json({opening:Yn(r),book:Jn(r)})}catch{return e.json({error:`invalid FEN`},400)}}),e.post(`/opening/batch`,async e=>{let t=await e.req.json().catch(()=>null),n=Array.isArray(t?.fens)?t.fens.filter(e=>typeof e==`string`):null;if(!n)return e.json({error:`expected fens`},400);if(n.length>1024)return e.json({error:`too many positions`},400);let r=Gn(),i=n.map(e=>{try{let t=p.fromSetup(l(e).unwrap()).unwrap(),n=z(t.toSetup()).toString(16),i=r?.byKey[n];return{fen:e,opening:i?{eco:i[0],name:i[1]}:null,book:r?.members.has(n)??!1}}catch{return{fen:e,opening:null,book:!1}}});return e.json({positions:i})}),e}var er=/^[A-Za-z0-9][A-Za-z0-9_.-]{0,59}$/,tr=/^\d{4}-\d{2}$/,nr={"User-Agent":`chess-vault (personal offline study app)`},rr=class extends Error{status;constructor(e,t){super(`${t} replied ${e}`),this.status=e}};async function ir(e){let t=await fetch(e,{headers:nr,signal:AbortSignal.timeout(2e4)});if(!t.ok)throw new rr(t.status,new URL(e).host);return await t.json()}var ar=24;function or(e){let t=!1;for(let n of e.moves.mainlineNodes())if(n.children.length>1&&(t=!0),n.data.nags?.length&&(t=!0),n.data.comments?.some(e=>E(ne(e).text).length>0)&&(t=!0),t)break;let n=(e.headers.get(`Variant`)??`standard`).toLowerCase();if(![`standard`,`chess`,`classical`,`normal`].includes(n)||e.headers.has(`FEN`))return{opening:null,finalFen:null,annotated:t};let r=p.default(),i=null,a=0,o=Kn();for(let t of e.moves.mainline()){let e=w(r,t.san);if(!e)break;if(r.play(e),a+=1,a<=40&&o){let e=o[z(r.toSetup()).toString(16)];e&&(i={eco:e[0],name:e[1]})}}return{opening:i,finalFen:f(r.toSetup()),annotated:t}}var sr=256,cr=64;function lr(e,t,n,r){let i=r===void 0?e.get(t):r;if(i!==void 0){e.delete(t),e.set(t,i);for(let t of e.keys()){if(e.size<=n)break;e.delete(t)}return i}}var ur=new Map,dr=new Map;function fr(e,t){let n=N(t),r=Ut(e,t).split(`/`).join(`/`),i=r.startsWith(`collection/`),a=i?dr.get(r):lr(ur,r,sr);if(a&&a.mtimeMs===n.mtimeMs)return a.games;let o=Mn(r),s=[];new ee((e,t)=>{if(t)return;let n=t=>e.headers.get(t),i=n(`White`)??`?`,a=n(`Black`)??`?`,c=Nn(i,a,n(`VaultSide`),o),l=n(`Event`),u=n(`Round`),d=0,f=[];for(let t of e.moves.mainline())d+=1,f.length<ar&&f.push(t.san);s.push({file:r,index:s.length,white:i,black:a,whiteElo:Number(n(`WhiteElo`))||0,blackElo:Number(n(`BlackElo`))||0,result:n(`Result`)??`*`,date:n(`UTCDate`)??n(`Date`)??`????.??.??`,timeControl:n(`TimeControl`)??null,eco:n(`ECO`)??null,link:n(`Link`)??(n(`Site`)?.startsWith(`http`)?n(`Site`):null),event:l&&l!==`?`?l:null,round:u&&u!==`?`&&u!==`-`?u:null,plyCount:d,sanPrefix:f.length?f.join(` `):null,userSide:c,...or(e)})}).parse(P(t,`utf-8`));let c={mtimeMs:n.mtimeMs,games:s};return i?dr.set(r,c):lr(ur,r,sr,c),s}var pr=new Map;function mr(e){let t=N(e).mtimeMs,n=lr(pr,e,cr);if(n&&n.mtimeMs===t)return n.games;let r=[];return new ee((e,t)=>{t||r.push(e)}).parse(P(e,`utf-8`)),lr(pr,e,cr,{mtimeMs:t,games:r}),r}function hr(e,t){let n=K(e,t);return n.startsWith(e+`/`)&&n.endsWith(`.pgn`)?n:null}var gr=[`chesscom`,`lichess`];function _r(e,t,n){if(!gr.includes(t))return null;let r=K(e,t),i=K(r,n),a=Ut(r,i);return a&&!a.startsWith(`..`)&&!a.includes(`/`)?i:null}function vr(e){return A(e).filter(e=>e.endsWith(`.pgn`)).reduce((t,n)=>t+N(K(e,n)).size,0)}function yr(e,t,n){return K(e,`chesscom`,t.toLowerCase(),`${n}.pgn`)}var br=40;function xr(e,t,n){let r=K(e,t);return I(K(r,n))||!I(r)?!1:A(r).filter(e=>N(K(r,e)).isDirectory()).length>=br}var Sr=`the browsing cache already holds 40 players: clear some in Databases first`;function Cr(e,t,n){return K(e,t,n.toLowerCase(),`.cache.json`)}function wr(e,t,n){try{return{months:JSON.parse(P(Cr(e,t,n),`utf-8`)).months??{}}}catch{return{months:{}}}}function Tr(e,t,n,r){M(K(e,t,n.toLowerCase()),{recursive:!0}),q(Cr(e,t,n),`${JSON.stringify(r,null,2)}\n`)}async function Er(e,t,n){let[r,i]=n.split(`-`),a=yr(e,t,n),o=wr(e,`chesscom`,t),s=I(a)?o.months[n]?.lastModified:void 0,c=await fetch(`https://api.chess.com/pub/player/${encodeURIComponent(t.toLowerCase())}/games/${r}/${i}`,{headers:{...nr,...s?{"If-Modified-Since":s}:{}},signal:AbortSignal.timeout(2e4)});if(c.status===304){o.months[n]={...o.months[n],fetchedAt:Date.now()},Tr(e,`chesscom`,t,o);return}if(!c.ok)throw Error(`chess.com replied ${c.status}`);let l=(await c.json()).games.map(e=>e.pgn).filter(e=>!!e);M(K(e,`chesscom`,t.toLowerCase()),{recursive:!0}),q(a,l.length>0?`${l.join(`

`)}\n`:``),o.months[n]={lastModified:c.headers.get(`last-modified`)??void 0,fetchedAt:Date.now()},Tr(e,`chesscom`,t,o)}function Dr(e){return K(e,`bookmarks.json`)}function Or(e){try{let t=JSON.parse(P(Dr(e),`utf-8`));return new Set(t.keys??[])}catch{return new Set}}function kr(e,t){q(Dr(e),`${JSON.stringify({keys:[...t].sort()},null,2)}\n`)}function Ar(e=Xt,t=Qt){let n=K(e,`collection`);M(n,{recursive:!0});let r=new G,i=e=>{try{return JSON.parse(P(t,`utf-8`)).profile?.[e]?.trim().toLowerCase()||null}catch{return null}},a=-2,o=()=>{let e=-1;try{e=N(t).mtimeMs}catch{}if(e===a)return;a=e;let r=[`chesscom`,`lichess`].map(i).filter(e=>e!==null);if(r.length!==0)for(let e of A(n)){if(!e.endsWith(`.pgn`))continue;let t=K(n,e);try{let e=!1,n=mr(t).map(t=>{let n=new Map(t.headers),i=(n.get(`White`)??``).toLowerCase(),a=(n.get(`Black`)??``).toLowerCase(),o=r.includes(i)?`white`:r.includes(a)?`black`:null,s=n.get(`VaultSide`),c=n.get(`Site`)??``,l=c===`Chess.com`||c.startsWith(`https://lichess.org`)||n.has(`Link`);if(o!==null&&s!==o)n.set(`VaultSide`,o);else if(o===null&&s&&l)n.delete(`VaultSide`);else return t;return e=!0,{...t,headers:n}});e&&q(t,n.map(e=>D(e)).join(`
`))}catch{}}};o(),r.get(`/games`,t=>{o();let r=A(n).filter(e=>e.endsWith(`.pgn`)).flatMap(t=>fr(e,K(n,t))).sort((e,t)=>t.date.localeCompare(e.date)||e.file.localeCompare(t.file)),i=Number(t.req.query(`limit`)),a=Number.isInteger(i)&&i>=0?r.slice(0,i):r;return t.json({total:r.length,games:a})});let s=async(e,t,n)=>{if(!n)return null;try{let i=await r.request(`/games/${e}/month?user=${encodeURIComponent(t)}&month=${n}`);if(!i.ok)return null;let a=await i.json();return Array.isArray(a.games)?{month:n,games:a.games}:null}catch{return null}};r.get(`/games/archive/months`,async t=>{let n=t.req.query(`user`)?.trim();if(!n||!er.test(n))return t.json({error:`invalid username`},400);let r=new Map,i=K(e,`chesscom`,n.toLowerCase());if(I(i))for(let t of A(i).filter(e=>e.endsWith(`.pgn`))){let n=t.slice(0,-4);r.set(n,fr(e,K(i,t)).length)}let a=[],o=!1,c=!1;try{a=(await ir(`https://api.chess.com/pub/player/${encodeURIComponent(n.toLowerCase())}/games/archives`)).archives.map(e=>e.split(`/`).slice(-2).join(`-`))}catch(e){e instanceof rr&&e.status===404?c=!0:o=!0}if(c&&r.size===0)return t.json({error:`chess.com has no player called "${n}"`},404);let l=null;if(!o)try{let e=await ir(`https://api.chess.com/pub/player/${encodeURIComponent(n.toLowerCase())}/stats`);l=Object.values(e).reduce((e,t)=>{let n=t?.record;return n?e+(n.win??0)+(n.loss??0)+(n.draw??0):e},0)}catch{}let u=[...new Set([...a,...r.keys()])].sort().reverse();return t.json({offline:o,total:l,newest:await s(`archive`,n,u[0]),months:u.map(e=>({month:e,cached:r.has(e),games:r.get(e)??null}))})}),r.get(`/games/archive/month`,async t=>{let n=t.req.query(`user`)?.trim(),r=t.req.query(`month`)?.trim();if(!n||!er.test(n))return t.json({error:`invalid username`},400);if(!r||!tr.test(r))return t.json({error:`invalid month`},400);let i=yr(e,n,r);if(xr(e,`chesscom`,n.toLowerCase()))return t.json({error:Sr},409);let a=new Date,o=`${a.getUTCFullYear()}-${String(a.getUTCMonth()+1).padStart(2,`0`)}`;if(!I(i)||r===o)try{await Er(e,n,r)}catch(e){if(!I(i))return t.json({error:`could not fetch that month (${e.message})`},502)}return t.json({month:r,games:fr(e,i).slice().reverse()})}),r.post(`/games/collect`,async t=>{let n=await t.req.json().catch(()=>null);if(!n?.file)return t.json({error:`need file`},400);let r=hr(e,n.file);if(!r||!I(r))return t.json({error:`no such file`},404);let a=mr(r),o;if(n.all)o=a.map((e,t)=>t);else if(Array.isArray(n.indexes))o=[...new Set(n.indexes)];else if(Number.isInteger(n.index))o=[n.index];else return t.json({error:`need index, indexes or all`},400);if(!o.length)return t.json({error:`no games chosen`},400);if(o.some(e=>!Number.isInteger(e)||e<0||e>=a.length))return t.json({error:`index out of range`},400);let s=Mn(n.file),c=n.file.startsWith(`lichess/`)?`lichess`:`chesscom`,u=s!==null&&s===i(c)?s:null,d=[];for(let e of o){let t=a[e],n={...t,headers:new Map(t.headers)},r=(n.headers.get(`White`)??``).toLowerCase(),i=(n.headers.get(`Black`)??``).toLowerCase();u===r?n.headers.set(`VaultSide`,`white`):u===i&&n.headers.set(`VaultSide`,`black`),d.push(l(n))}return t.json({id:d[0],ids:d,added:d.length})});function c(e){let t=(e.headers.get(`UTCDate`)??e.headers.get(`Date`)??``).replaceAll(`.`,`-`);return g(`${e.headers.get(`White`)??`?`} vs ${e.headers.get(`Black`)??`?`} ${t}`,`Game`)}function l(e){let t=c(e),r=t;for(let e=2;I(K(n,`${r}.pgn`));e+=1)r=`${t} (${e})`;return j(K(n,`${r}.pgn`),D(e)),r}return r.post(`/games/collect-pgn`,async e=>{let t=await e.req.json().catch(()=>null);if(!t?.pgn)return e.json({error:`need pgn`},400);let r=[],i=0;if(new ee((e,t)=>{t?i+=1:r.push(e)}).parse(t.pgn),r.length===0)return e.json({error:`that PGN could not be read`},400);let a=[],o=0;for(let e of r){let t=e.headers.get(`Result`);if(!t||t===`*`){let t=p.default(),n=!0;for(let r of e.moves.mainline()){let e=w(t,r.san);if(!e){n=!1;break}t.play(e)}n&&(t.isCheckmate()?e.headers.set(`Result`,t.turn===`white`?`0-1`:`1-0`):(t.isStalemate()||t.isInsufficientMaterial())&&e.headers.set(`Result`,`1/2-1/2`))}if(I(K(n,`${c(e)}.pgn`))){o+=1;continue}a.push(l(e))}let s={imported:a.length,duplicates:o,unreadable:i};return a.length===0?e.json({error:`already in the collection`,...s},409):e.json({id:a[0],ids:a,...s})}),r.get(`/games/lichess/months`,async t=>{let n=t.req.query(`user`)?.trim().toLowerCase();if(!n||!er.test(n))return t.json({error:`invalid username`},400);let r=K(e,`lichess`,n),i=new Map;if(I(r))for(let t of A(r))t.endsWith(`.pgn`)&&i.set(t.slice(0,-4),fr(e,K(r,t)).length);try{let e=await ir(`https://lichess.org/api/user/${encodeURIComponent(n)}`),r=new Date(e.createdAt),a=[],o=new Date,c=o.getUTCFullYear(),l=o.getUTCMonth();for(;a.length<240;){let e=`${c}-${String(l+1).padStart(2,`0`)}`;if(a.push({month:e,cached:i.has(e),games:i.get(e)??null}),c===r.getUTCFullYear()&&l===r.getUTCMonth())break;--l,l<0&&(l=11,--c)}return t.json({offline:!1,total:e.count?.all??null,newest:await s(`lichess`,n,a[0]?.month),months:a})}catch(e){if(e instanceof rr&&e.status===404&&i.size===0)return t.json({error:`lichess has no player called "${n}"`},404);if(i.size===0)return t.json({error:`lichess unreachable and nothing cached yet`},502);let r=[...i.entries()].sort((e,t)=>t[0].localeCompare(e[0])).map(([e,t])=>({month:e,cached:!0,games:t}));return t.json({offline:!0,total:null,newest:await s(`lichess`,n,r[0]?.month),months:r})}}),r.get(`/games/lichess/month`,async t=>{let n=t.req.query(`user`)?.trim().toLowerCase(),r=t.req.query(`month`)??``;if(!n||!er.test(n))return t.json({error:`invalid username`},400);if(!tr.test(r))return t.json({error:`invalid month`},400);let i=K(e,`lichess`,n,`${r}.pgn`);if(xr(e,`lichess`,n))return t.json({error:Sr},409);let a=I(i),o=wr(e,`lichess`,n),[s,c]=r.split(`-`).map(Number),l=Date.UTC(s,c-1,1),u=Date.UTC(c===12?s+1:s,c===12?0:c,1);if(!a||Date.now()<u){let s=a?o.months[r]?.fetchedAt??l:l;try{let c=await fetch(`https://lichess.org/api/games/user/${encodeURIComponent(n)}?since=${s}&until=${u}&max=300&moves=true&tags=true`,{headers:{...nr,Accept:`application/x-chess-pgn`},signal:AbortSignal.timeout(3e4)});if(c.ok){let t=await c.text();if(M(K(e,`lichess`,n),{recursive:!0}),!a)j(i,t);else if(t.trim()){let e=P(i,`utf-8`),n=t.split(/\n\n(?=\[Event )/).filter(t=>{let n=/\[Site "([^"]+)"\]/.exec(t)?.[1];return t.trim()&&(!n||!e.includes(n))});n.length&&j(i,`${n.join(`

`)}\n\n${e}`)}o.months[r]={fetchedAt:Date.now()},Tr(e,`lichess`,n,o)}else if(!a)return t.json({error:`lichess replied ${c.status}`},502)}catch{if(!a)return t.json({error:`lichess unreachable`},502)}}return t.json({games:fr(e,i)})}),r.get(`/games/cache`,t=>{let n=[];for(let t of gr){let r=K(e,t);if(I(r))for(let e of A(r)){let i=K(r,e);if(!N(i).isDirectory())continue;let a=A(i).filter(e=>e.endsWith(`.pgn`));a.length&&n.push({provider:t,user:e,months:a.length,bytes:vr(i)})}}return n.sort((e,t)=>t.bytes-e.bytes||e.user.localeCompare(t.user)),t.json({bytes:n.reduce((e,t)=>e+t.bytes,0),users:n})}),r.delete(`/games/cache`,t=>{let n=t.req.query(`provider`),r=t.req.query(`user`);if(n!==void 0||r!==void 0){if(!n||!r)return t.json({error:`need provider and user`},400);let i=_r(e,n,r);if(!i)return t.json({error:`invalid player`},400);if(!I(i)||!N(i).isDirectory())return t.json({bytes:0});let a=vr(i);return L(i,{recursive:!0,force:!0}),t.json({bytes:a})}let i=0;for(let t of gr){let n=K(e,t);if(I(n))for(let e of A(n)){let t=K(n,e);N(t).isDirectory()&&(i+=vr(t),L(t,{recursive:!0,force:!0}))}}return t.json({bytes:i})}),r.get(`/games/bookmarks`,t=>t.json({keys:[...Or(e)]})),r.post(`/games/bookmarks/toggle`,async t=>{let n=await t.req.json().catch(()=>null);if(!n?.file||!Number.isInteger(n.index)||n.index<0)return t.json({error:`need file and index`},400);if(!hr(e,n.file))return t.json({error:`invalid file`},400);let r=`${n.file}#${n.index}`,i=Or(e),a=!i.has(r);return a?i.add(r):i.delete(r),kr(e,i),t.json({key:r,bookmarked:a})}),r.get(`/games/pgn`,t=>{let n=t.req.query(`file`),r=Number(t.req.query(`index`));if(!n||!Number.isInteger(r)||r<0)return t.json({error:`need ?file= and ?index=`},400);let i=hr(e,n);if(!i||!I(i))return t.json({error:`no such file`},404);let a=mr(i)[r];return a?t.json({pgn:D(a)}):t.json({error:`no such game`},404)}),r}var jr=(e,t)=>`${e}:${t}`,Mr=50;function Nr(e,t,n){let r=[];for(let i of n){let n;try{n=P(K(e,`${i}${t}`),`utf-8`).slice(0,8192)}catch{continue}r.push({id:i,aliases:t===`.md`?Oe(De(n).front):Ee(/^\[Aliases\s+"([^"]*)"\]/m.exec(n)?.[1]??``)})}return b(r)}function Pr(e,t){let n;try{n=A(e,{recursive:!0,encoding:`utf-8`})}catch{return[]}let r=[];for(let i of n)if(i.endsWith(t)){try{if(!N(K(e,i)).isFile())continue}catch{continue}r.push(i.slice(0,-t.length).split(`/`).join(`/`))}return r}function Fr(e){let t=[];for(let{dir:n,ext:r}of e){let e;try{e=A(n,{recursive:!0,encoding:`utf-8`})}catch{continue}for(let i of e.sort())if(i.endsWith(r))try{let e=N(K(n,i));e.isFile()&&t.push(`${i}:${e.mtimeMs}:${e.size}`)}catch{}}return t.join(`|`)}function Ir(e,t,n){let r={notes:{dir:e,ext:`.md`},studies:{dir:t,ext:`.pgn`},games:{dir:n,ext:`.pgn`}},i=()=>Object.fromEntries(S.map(e=>[e,Pr(r[e].dir,r[e].ext)])),a=(e,t,n)=>{let r=te(e),i=e;for(let e=r.length-1;e>=0;--e){let a=r[e],o=a.text;for(let{from:e,to:r}of t)o=x(o,e,r,n)??o;o!==a.text&&(i=i.slice(0,a.at)+o+i.slice(a.at+a.text.length))}return i},o=e=>{if(e.length===0)return;let t=i();for(let n of S){let{dir:i,ext:o}=r[n];for(let r of t[n]){let n=K(i,`${r}${o}`),s;try{s=P(n,`utf-8`)}catch{continue}let c=s;if(o===`.md`)for(let{from:n,to:r}of e)c=x(c,n,r,t)??c;else c=a(s,e,t);if(c!==s)try{j(n,c)}catch{}}}};return{moved:(e,t)=>o([{from:e,to:t}]),folderMoved:(e,t,n)=>{let r=i()[e].filter(e=>e===n||e.startsWith(`${n}/`));o(r.map(e=>({from:`${t}${e.slice(n.length)}`,to:e})))}}}function Lr(e,t,n){let r=new G,i={notes:{dir:e,ext:`.md`},studies:{dir:t,ext:`.pgn`},games:{dir:n,ext:`.pgn`}},a=S.map(e=>i[e]),o=null;function s(){let e=Object.fromEntries(S.map(e=>[e,Pr(i[e].dir,i[e].ext)])),t=Object.fromEntries(S.map(t=>[t,Nr(i[t].dir,i[t].ext,e[t])])),n=new Map,r=[],a=new Map;for(let o of S){let{dir:s,ext:c}=i[o];for(let i of e[o]){let l;try{l=P(K(s,`${i}${c}`),`utf-8`)}catch{continue}let u=c===`.md`?[{at:0,text:l}]:te(l).map(e=>({...e,text:re(e.text)}));r.push({section:o,id:i,spans:u});for(let r of u)for(let s of _(r.text)){let c=v(s.target,e,t);if(typeof c==`string`)continue;let l=jr(o,i);if(a.set(l,(a.get(l)??0)+1),c.section===o&&c.id===i)continue;let u=jr(c.section,c.id),d=n.get(u),f={from:i,fromSection:o,...o===`studies`&&r.chapter!==void 0?{chapter:r.chapter}:{},context:s.context,target:s.shown,at:r.at+s.at,markAt:s.markAt};d?d.push(f):n.set(u,[f])}}}return{links:n,prose:r,aliases:t,index:e,outgoing:a}}function c(){let e=Fr(a);return(!o||o.sig!==e)&&(o={sig:e,scan:s()}),o.scan}return r.get(`/links/index`,e=>{let t=c(),n={notes:{},studies:{},games:{}};for(let e of S)for(let r of t.index[e]){let i=t.outgoing.get(jr(e,r));i&&(n[e][r]=i)}return e.json({index:t.index,outgoing:n})}),r.get(`/links/:section{notes|studies|games}/:id{.+}`,e=>{let t=e.req.param(`section`),n=e.req.param(`id`),r=c(),i=r.links.get(jr(t,n))??[],a=new Set([n.split(`/`).at(-1),n]);for(let[e,i]of r.aliases[t])i.length===1&&i[0]===n&&a.add(e);let o=[];outer:for(let e of r.prose)if(e.section!==t||e.id!==n){for(let t of e.spans)for(let n of y(t.text,[...a]))if(o.push({from:e.id,fromSection:e.section,...e.section===`studies`&&t.chapter!==void 0?{chapter:t.chapter}:{},context:n.context,target:n.target,at:t.at+n.at,markAt:n.markAt}),o.length>=Mr)break outer}return e.json({mentions:i,unlinked:o,unlinkedCapped:o.length>=Mr})}),r.post(`/links/link`,async e=>{let t=await e.req.json().catch(()=>null),n=t?.note,r=t?.section??`notes`,a=t?.at,o=t?.text,s=t?.target??o;if(!n||typeof a!=`number`||!o||!s||!h(n))return e.json({error:`note, at, text and target are required`},400);if(!S.includes(r))return e.json({error:`section must be notes, studies or games`},400);let{dir:c,ext:l}=i[r],u=K(c,`${n}${l}`),d;try{d=P(u,`utf-8`)}catch{return e.json({error:`that document could not be read`},404)}if(d.slice(a,a+o.length)!==o)return e.json({error:`that document has changed since; reopen it and try again`},409);let f=o===s?`[[${o}]]`:`[[${s}|${o}]]`,p=`${d.slice(0,a)}${f}${d.slice(a+o.length)}`;try{j(u,p)}catch{return e.json({error:`that document could not be written`},500)}return e.json({linked:n})}),r}var Rr=`
  CREATE TABLE IF NOT EXISTS analysis (
    file TEXT NOT NULL,
    idx INTEGER NOT NULL,
    side TEXT NOT NULL,
    site TEXT,
    plies INTEGER NOT NULL,
    depth INTEGER NOT NULL,
    accuracy REAL NOT NULL,
    acpl INTEGER NOT NULL,
    moves INTEGER NOT NULL,
    inaccuracies INTEGER NOT NULL,
    mistakes INTEGER NOT NULL,
    blunders INTEGER NOT NULL,
    brilliancies INTEGER NOT NULL,
    book_moves INTEGER NOT NULL,
    per_move TEXT NOT NULL,
    analysed_at TEXT NOT NULL,
    PRIMARY KEY (file, idx)
  );
`,zr=e=>({file:e.file,index:e.idx,side:e.side,site:e.site,plies:e.plies,depth:e.depth,accuracy:e.accuracy,acpl:e.acpl,moves:e.moves,inaccuracies:e.inaccuracies,mistakes:e.mistakes,blunders:e.blunders,brilliancies:e.brilliancies,bookMoves:e.book_moves,perMove:JSON.parse(e.per_move)}),Br=(e,t)=>`${e}\t${t}`;function Vr(e,t){return t.site?e.site===t.site:e.site===null&&t.plies!==null&&e.plies===t.plies}var Hr=class{dbPath;db=null;broken=!1;constructor(e){this.dbPath=e}open(){if(this.db)return this.db;if(this.broken)return null;try{M(Vt(this.dbPath),{recursive:!0})}catch{}try{let e=new Dn(this.dbPath);return e.pragma(`journal_mode = WAL`),e.exec(Rr),this.db=e,e}catch{return this.broken=!0,null}}all(){let e=this.open(),t=new Map;if(!e)return t;for(let n of e.prepare(`SELECT * FROM analysis`).all())t.set(Br(n.file,n.idx),zr(n));return t}put(e){let t=this.open();t&&t.prepare(`
      INSERT INTO analysis (file, idx, side, site, plies, depth, accuracy, acpl, moves,
        inaccuracies, mistakes, blunders, brilliancies, book_moves, per_move, analysed_at)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      ON CONFLICT (file, idx) DO UPDATE SET
        side = excluded.side, site = excluded.site, plies = excluded.plies,
        depth = excluded.depth, accuracy = excluded.accuracy, acpl = excluded.acpl,
        moves = excluded.moves, inaccuracies = excluded.inaccuracies,
        mistakes = excluded.mistakes, blunders = excluded.blunders,
        brilliancies = excluded.brilliancies, book_moves = excluded.book_moves,
        per_move = excluded.per_move, analysed_at = excluded.analysed_at
    `).run(e.file,e.index,e.side,e.site,e.plies,e.depth,e.accuracy,e.acpl,e.moves,e.inaccuracies,e.mistakes,e.blunders,e.brilliancies,e.bookMoves,JSON.stringify(e.perMove),new Date().toISOString())}clear(){this.open()?.prepare(`DELETE FROM analysis`).run()}close(){this.db?.close(),this.db=null}};function Ur(e){if(typeof e!=`object`||!e)return null;let t=e,n=(e,t,n)=>typeof e==`number`&&Number.isInteger(e)&&e>=t&&e<=n?e:null,r=(e,t,n)=>typeof e==`number`&&Number.isFinite(e)&&e>=t&&e<=n?e:null,i=typeof t.file==`string`&&t.file.length>0&&t.file.length<1024?t.file:null,a=n(t.index,0,1e6),o=t.side===`white`||t.side===`black`?t.side:null,s=t.site===null||t.site===void 0?null:typeof t.site==`string`?t.site.slice(0,512):void 0,c=n(t.plies,1,2e3),l=n(t.depth,1,60),u=r(t.accuracy,0,100),d=n(t.acpl,0,1e3),f=n(t.moves,0,1e3),p=n(t.inaccuracies,0,1e3),m=n(t.mistakes,0,1e3),h=n(t.blunders,0,1e3),g=n(t.brilliancies,0,1e3),_=n(t.bookMoves,0,1e3),v=Array.isArray(t.perMove)&&t.perMove.length<=1e3?t.perMove:null;if(i===null||a===null||o===null||s===void 0||c===null||l===null||u===null||d===null||f===null||p===null||m===null||h===null||g===null||_===null||v===null)return null;let y=[];for(let e of v){if(!Array.isArray(e)||e.length!==5)return null;let t=n(e[0],0,2e3),i=r(e[1],0,100),a=n(e[2],0,6),o=n(e[3],0,2),s=n(e[4],0,1);if(t===null||i===null||a===null||o===null||s===null)return null;y.push([t,i,a,o,s])}return{file:i,index:a,side:o,site:s,plies:c,depth:l,accuracy:u,acpl:d,moves:f,inaccuracies:p,mistakes:m,blunders:h,brilliancies:g,bookMoves:_,perMove:y}}var Wr=`
  CREATE TABLE IF NOT EXISTS files (
    path TEXT PRIMARY KEY,
    mtime_ms REAL NOT NULL,
    bytes INTEGER NOT NULL
  );
  CREATE TABLE IF NOT EXISTS games (
    id INTEGER PRIMARY KEY,
    file TEXT NOT NULL,
    idx INTEGER NOT NULL,
    white TEXT NOT NULL,
    black TEXT NOT NULL,
    white_elo INTEGER NOT NULL,
    black_elo INTEGER NOT NULL,
    result INTEGER NOT NULL,
    date TEXT,
    speed TEXT,
    eco TEXT,
    user_side TEXT,
    collection INTEGER NOT NULL,
    site TEXT,
    /* One game, two files — see stamp(). The losing copy stays indexed
       and answers nothing: every query goes through where(). */
    shadowed INTEGER NOT NULL DEFAULT 0,
    /* The whole game's length and how it ended (shared/gameIndex.ts),
       for the insights page. Null on rows indexed before the columns
       existed; open() reindexes those. */
    plies INTEGER,
    ending TEXT
  );
  CREATE TABLE IF NOT EXISTS plies (
    pos INTEGER NOT NULL,
    uci TEXT NOT NULL,
    game_id INTEGER NOT NULL,
    ply INTEGER NOT NULL
  );
  CREATE INDEX IF NOT EXISTS plies_pos ON plies (pos);
  CREATE INDEX IF NOT EXISTS games_file ON games (file);
  CREATE INDEX IF NOT EXISTS games_site ON games (site);
`;function Gr(e){try{return A(e,{recursive:!0}).map(e=>String(e).split(`\\`).join(`/`)).filter(e=>e.endsWith(`.pgn`))}catch{return[]}}var Kr=class e{gamesDir;dbPath;analysis;db=null;nextId=1;lastScan=0;broken=!1;constructor(e,t,n){this.gamesDir=e,this.dbPath=t,this.analysis=n}static SCAN_INTERVAL_MS=2e3;open(){if(this.db)return this.db;if(this.broken)return null;try{M(Vt(this.dbPath),{recursive:!0})}catch{}try{let e=new Dn(this.dbPath);e.pragma(`journal_mode = WAL`),e.exec(Wr);let t=e.prepare(`PRAGMA table_info(games)`).all();t.some(e=>e.name===`shadowed`)||(e.exec(`ALTER TABLE games ADD COLUMN shadowed INTEGER NOT NULL DEFAULT 0`),this.stamp(e)),t.some(e=>e.name===`plies`)||(e.exec(`ALTER TABLE games ADD COLUMN plies INTEGER`),e.exec(`ALTER TABLE games ADD COLUMN ending TEXT`),e.exec(`DELETE FROM files`));let n=e.prepare(`SELECT MAX(id) AS id FROM games`).get();return this.nextId=(n.id??0)+1,this.db=e,e}catch{return this.broken=!0,null}}static INLINE_BUDGET_MS=100;pending=[];walking=!1;sync(t=!1){let n=this.open();if(!n)return;let r=Date.now();if(!t&&r-this.lastScan<e.SCAN_INTERVAL_MS)return;this.lastScan=r;let i=new Map(n.prepare(`SELECT path, mtime_ms, bytes FROM files`).all().map(e=>[e.path,e])),a=Date.now(),o=new Set,s=!1,c=new Set(this.pending.map(e=>e.rel));for(let r of Gr(this.gamesDir)){if(o.add(r),c.has(r))continue;let l;try{l=N(`${this.gamesDir}/${r}`)}catch{continue}let u=i.get(r);if(!(u&&u.mtime_ms===l.mtimeMs&&u.bytes===l.size)){if(!t&&Date.now()-a>e.INLINE_BUDGET_MS){this.pending.push({rel:r,mtimeMs:l.mtimeMs,bytes:l.size}),s=!0;continue}this.indexFile(n,r,l.mtimeMs,l.size),s=!0}}for(let e of i.keys())o.has(e)||(this.forget(n,e),s=!0);s&&this.pending.length===0&&this.stamp(n),this.pending.length>0&&!this.walking&&(this.walking=!0,setImmediate(()=>this.walkPending()))}walkPending(){let e=this.db;if(!e){this.pending=[],this.walking=!1;return}let t=Date.now();for(;this.pending.length>0&&Date.now()-t<50;){let t=this.pending.shift();try{this.indexFile(e,t.rel,t.mtimeMs,t.bytes)}catch{}}if(this.pending.length>0){setImmediate(()=>this.walkPending());return}this.stamp(e),this.walking=!1}stamp(e){e.prepare(`
      UPDATE games SET shadowed = CASE WHEN site IS NOT NULL AND EXISTS (
        SELECT 1 FROM games o
        WHERE o.site = games.site
          AND o.id <> games.id
          AND o.user_side IS games.user_side
          AND (o.collection > games.collection
               OR (o.collection = games.collection AND o.id < games.id))
      ) THEN 1 ELSE 0 END
    `).run()}forget(e,t){e.prepare(`DELETE FROM plies WHERE game_id IN (SELECT id FROM games WHERE file = ?)`).run(t),e.prepare(`DELETE FROM games WHERE file = ?`).run(t),e.prepare(`DELETE FROM files WHERE path = ?`).run(t)}indexFile(e,t,n,r){let i;try{i=P(`${this.gamesDir}/${t}`,`utf-8`)}catch{return}let a=Mn(t),o=+!!t.startsWith(`collection/`),s=e.prepare(`
      INSERT INTO games (id, file, idx, white, black, white_elo, black_elo, result, date, speed, eco, user_side, collection, site, plies, ending)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `),c=e.prepare(`INSERT INTO plies (pos, uci, game_id, ply) VALUES (?, ?, ?, ?)`);e.transaction(()=>{this.forget(e,t);let l=0;new ee((e,n)=>{let r=l;if(l+=1,n)return;let i=Ln(e,{file:t,idx:r,user:a});if(!i)return;let u=this.nextId;this.nextId+=1,s.run(u,t,r,i.white,i.black,i.whiteElo,i.blackElo,i.score,i.date,i.speed,i.eco,i.userSide,o,i.site,i.plyCount,i.ending);for(let e of i.plies)c.run(Te(e.hash),e.uci,u,e.ply)}).parse(i),e.prepare(`INSERT INTO files (path, mtime_ms, bytes) VALUES (?, ?, ?)`).run(t,n,r)})()}where(e){let t=[`g.shadowed = 0`],n=[];if(e.side&&(t.push(`g.user_side = ?`),n.push(e.side)),e.outcome){if(t.push(`g.user_side IS NOT NULL`),e.outcome===`draw`)t.push(`g.result = 0`);else{let r=e.outcome===`win`;t.push(`((g.user_side = 'white' AND g.result = ?) OR (g.user_side = 'black' AND g.result = ?))`),n.push(r?1:-1,r?-1:1)}}return e.speeds?.length&&(t.push(`g.speed IN (${e.speeds.map(()=>`?`).join(`, `)})`),n.push(...e.speeds)),e.from&&(t.push(`g.date >= ?`),n.push(e.from)),e.to&&(t.push(`g.date <= ?`),n.push(e.to)),e.collectionOnly&&t.push(`g.collection = 1`),{sql:` AND ${t.join(` AND `)}`,binds:n}}movesAt(e,t){let n=this.open();if(!n)return[];let r=Te(z(e.toSetup())),{sql:i,binds:o}=this.where(t);return n.prepare(`
        SELECT p.uci AS uci,
               SUM(g.result = 1) AS w,
               SUM(g.result = 0) AS d,
               SUM(g.result = -1) AS b
        FROM plies p JOIN games g ON g.id = p.game_id
        WHERE p.pos = ?${i}
        GROUP BY p.uci
        ORDER BY w + d + b DESC, p.uci
      `).all(r,...o).flatMap(t=>{let n=a(t.uci);return!n||!e.isLegal(n)?[]:[{...t,san:T(e,n),total:t.w+t.d+t.b}]})}lookup(e,t,n=8){let r=this.open();if(!r)return{moves:[],topGames:[],games:0};let i=Te(z(e.toSetup())),{sql:a,binds:o}=this.where(t),s=this.movesAt(e,t);return{moves:s,topGames:r.prepare(`
        SELECT p.uci AS uci, g.white, g.black, g.white_elo, g.black_elo,
               g.result, g.date, g.site, g.file, g.idx
        FROM plies p JOIN games g ON g.id = p.game_id
        WHERE p.pos = ?${a}
        ORDER BY g.date DESC, g.id DESC
        LIMIT ?
      `).all(i,...o,n),games:s.reduce((e,t)=>e+t.total,0)}}compareAgainst(e,t,n,r){let i={banded:r===null,rows:[]},o=this.open();if(!o)return i;let s=null;try{s=new Dn(e,{readonly:!0,fileMustExist:!0})}catch{return i}try{if(!(e=>s.prepare(`SELECT 1 FROM sqlite_master WHERE type = 'table' AND name = ?`).get(e)!==void 0)(`move_counts`))return i;let e=s.prepare(`SELECT 1 FROM pragma_table_info('move_counts') WHERE name = 'eb'`).get()!==void 0,c=r===null||e,l=r&&e?r.hi===null?` AND eb >= ?`:` AND eb BETWEEN ? AND ?`:``,u=r&&e?r.hi===null?[r.lo/200]:[r.lo/200,(r.hi+1)/200-1]:[],d=s.prepare(`SELECT uci, SUM(w) AS w, SUM(d) AS d, SUM(b) AS b FROM move_counts
         WHERE pos = ?${l} GROUP BY uci`),f=o.prepare(`SELECT id FROM games g
           WHERE g.user_side = ? AND g.shadowed = 0
           ORDER BY g.date DESC, g.id DESC LIMIT ?`).all(t,n),m=o.prepare(`SELECT CAST(pos AS TEXT) AS pos, uci FROM plies WHERE game_id = ? ORDER BY ply`),h=new Map,g=new Map,_=t===`white`?0:1;for(let e of f){let t=m.all(e.id);for(let n=_;n<t.length;n+=2){let r=t[n].pos,i=h.get(r);i||(i=d.all(BigInt(r),...u),h.set(r,i));let a=i.reduce((e,t)=>e+t.w+t.d+t.b,0);if(a<20)continue;let o=i.find(e=>e.uci===t[n].uci);if((o?o.w+o.d+o.b:0)/a>=.1)continue;let s=g.get(r);s?s.count+=1:g.set(r,{count:1,gameId:e.id,at:n,myUci:t[n].uci})}}let v=[],y=[...g.entries()].sort((e,t)=>t[1].count-e[1].count).slice(0,50);for(let[e,t]of y){let n=m.all(t.gameId),r=p.default(),i=[],o=!0;for(let e=0;e<t.at;e+=1){let t=a(n[e].uci);if(!t||!r.isLegal(t)){o=!1;break}i.push(T(r,t)),r.play(t)}if(!o)continue;let s=a(t.myUci);if(!s||!r.isLegal(s))continue;let c=h.get(e),l=c.reduce((e,t)=>e+t.w+t.d+t.b,0),u=c.find(e=>e.uci===t.myUci),d=c.reduce((e,t)=>t.w+t.d+t.b>e.w+e.d+e.b?t:e),f=a(d.uci);f&&r.isLegal(f)&&v.push({key:e,sans:i,games:t.count,myMove:{san:T(r,s),total:u?u.w+u.d+u.b:0},refTotal:l,top:{san:T(r,f),w:d.w,d:d.d,b:d.b,total:d.w+d.d+d.b}})}return{banded:c,rows:v}}finally{s.close()}}deviations(e,t,n){let r=this.open();if(!r)return[];let i=r.prepare(`
        SELECT id, file, idx, white, black, result, date, site, collection
        FROM games g
        WHERE g.user_side = ? AND g.shadowed = 0
        ORDER BY g.date DESC, g.id DESC
        LIMIT ?
      `).all(t,n),o=r.prepare(`SELECT CAST(pos AS TEXT) AS pos, uci FROM plies WHERE game_id = ? ORDER BY ply`),s=[];for(let n of i){let r=o.all(n.id).map(e=>({pos:BigInt(e.pos),uci:e.uci}));if(r.length===0||!e.has(r[0].pos))continue;let i=-1;for(let t=0;t<r.length&&e.has(r[t].pos);t+=1)if(t+1>=r.length||!e.has(r[t+1].pos)){i=t;break}if(i<0||i+1>=r.length)continue;let c=p.default(),l=[],u=!0;for(let e=0;e<=i;e+=1){let t=a(r[e].uci);if(!t||!c.isLegal(t)){u=!1;break}l.push(T(c,t)),c.play(t)}u&&s.push({file:n.file,idx:n.idx,white:n.white,black:n.black,result:n.result,date:n.date,site:n.site,collection:n.collection===1,ply:i,sans:l,key:BigInt.asUintN(64,r[i].pos).toString(16),userDeviated:i%2==0==(t===`white`)})}return s}insights(e){let t=()=>({months:[],weekdays:[],endings:[],lengths:[]}),n=()=>({games:0,depth:null,accuracy:{sum:0,n:0},acpl:{sum:0,n:0},byOutcome:[],byPhase:[],byMove:[],quality:{book:0,good:0,brilliant:0,inaccuracy:0,mistake:0,blunder:0}}),r=this.open();if(!r)return{games:0,named:!1,partial:!1,cells:[],analysis:n(),...t()};let i=this.pending.length>0||this.walking,{sql:a,binds:o}=this.where(e),s=r.prepare(`SELECT id, file, idx, site, user_side, speed, result, eco, date, white_elo, black_elo, plies, ending
         FROM games g WHERE g.user_side IS NOT NULL${a}`).all(...o),c=new Map;for(let e of s)c.set(e.id,e);if(c.size===0)return{games:0,named:qn()!==null,partial:i,cells:[],analysis:n(),...t()};let l=this.analysis.all(),u=e=>{let t=l.get(Br(e.file,e.idx));return t&&t.moves>0&&Vr(t,e)?t:null},d=()=>new Map,f=(e,t,n,r)=>{let i=e.get(t)??{w:0,d:0,l:0,accSum:0,accN:0};n>0?i.w+=1:n<0?i.l+=1:i.d+=1,r!==null&&(i.accSum+=r,i.accN+=1),e.set(t,i)},p=d(),m=d(),h=d(),g=d();for(let e of c.values()){let t=e.user_side===`white`?e.result:-e.result,n=u(e)?.accuracy??null;if(e.date){f(p,e.date.slice(0,7),t,n);let r=new Date(`${e.date}T12:00:00Z`).getUTCDay();Number.isFinite(r)&&f(m,r,t,n)}e.ending&&f(h,e.ending,t,n),e.plies!==null&&f(g,Math.floor(Math.ceil(e.plies/2)/20)*20,t,n)}let _=(e,t)=>[...e].sort(([e],[t])=>e<t?-1:+(e>t)).map(([e,n])=>({[t]:e,...n})),v={months:_(p,`month`),weekdays:_(m,`day`),endings:_(h,`ending`),lengths:_(g,`band`)},y=n(),b=()=>new Map,x=(e,t,n,r=1)=>{let i=e.get(t)??{sum:0,n:0};i.sum+=n,i.n+=r,e.set(t,i)},S=b(),C=b(),w=b();for(let e of c.values()){let t=u(e);if(!t)continue;y.games+=1,y.depth=y.depth===null?t.depth:Math.min(y.depth,t.depth),y.accuracy.sum+=t.accuracy,y.accuracy.n+=1,y.acpl.sum+=t.acpl,y.acpl.n+=1;let n=e.user_side===`white`?e.result:-e.result;x(S,n>0?`w`:n<0?`l`:`d`,t.accuracy);for(let[e,n,r,i,a]of t.perMove){if(a){y.quality.book+=1;continue}x(C,i,n),x(w,Math.floor(e/2/10)*10+1,n),r===3?y.quality.brilliant+=1:r===6?y.quality.inaccuracy+=1:r===2?y.quality.mistake+=1:r===4?y.quality.blunder+=1:y.quality.good+=1}}let T=(e,t)=>[...e].sort(([e],[t])=>e<t?-1:+(e>t)).map(([e,n])=>({[t]:e,...n}));y.byOutcome=T(S,`outcome`),y.byPhase=T(C,`phase`),y.byMove=T(w,`band`);let E=r.prepare(`SELECT p.game_id AS game_id, CAST(p.pos AS TEXT) AS pos
         FROM plies p JOIN games g ON g.id = p.game_id
         WHERE g.user_side IS NOT NULL${a}
         ORDER BY p.game_id, p.ply`).all(...o),ee=qn(),D=new Map,te=(e,t)=>{let n=e.eco,r=null,i=null;if(ee)for(let e=1;e<t.length;e+=1){let a=t[e],o=ee.byKey[a];if(o&&(n=o[0],r=o[1]),!ee.members.has(a)){i=e-1;break}}let a=e.user_side,o=e.speed??`unknown`,s=`${a}\t${o}\t${n??``}\t${r??``}`,c=D.get(s);c||(c={side:a,speed:o,eco:n,name:r,games:0,w:0,d:0,l:0,exits:0,exitPlySum:0,exitPlyMin:null,youLeft:0,theyLeft:0,accSum:0,accN:0},D.set(s,c)),c.games+=1;let l=u(e);l&&(c.accSum+=l.accuracy,c.accN+=1);let d=a===`white`?e.result:-e.result;d>0?c.w+=1:d<0?c.l+=1:c.d+=1,i!==null&&(c.exits+=1,c.exitPlySum+=i,c.exitPlyMin=c.exitPlyMin===null?i:Math.min(c.exitPlyMin,i),i%2==0==(a===`white`)?c.youLeft+=1:c.theyLeft+=1)},O=null,ne=[],re=new Set;for(let e of E)(O===null||e.game_id!==O.id)&&(O&&te(O,ne),O=c.get(e.game_id)??null,ne=[],O&&re.add(O.id)),O&&ne.push(BigInt.asUintN(64,BigInt(e.pos)).toString(16));O&&te(O,ne);for(let e of c.values())re.has(e.id)||te(e,[]);return{games:c.size,named:ee!==null,partial:i,cells:[...D.values()].sort((e,t)=>t.games-e.games),analysis:y,...v}}analysisQueue(e){let t=this.open();if(!t)return[];let n=this.analysis.all(),r=t.prepare(`SELECT file, idx, user_side, site, plies FROM games g
         WHERE g.user_side IS NOT NULL AND g.shadowed = 0 AND g.plies IS NOT NULL
         ORDER BY g.date DESC, g.id DESC`).all(),i=[];for(let t of r){let r=n.get(Br(t.file,t.idx));if(!(r&&Vr(r,t))&&(i.push({file:t.file,index:t.idx,side:t.user_side,site:t.site,plies:t.plies}),i.length>=e))break}return i}analysisStatus(){let e=this.open();if(!e)return{analysed:0,total:0};let t=this.analysis.all(),n=e.prepare(`SELECT file, idx, site, plies FROM games g
         WHERE g.user_side IS NOT NULL AND g.shadowed = 0 AND g.plies IS NOT NULL`).all(),r=0;for(let e of n){let n=t.get(Br(e.file,e.idx));n&&Vr(n,e)&&(r+=1)}return{analysed:r,total:n.length}}putAnalysis(e){this.analysis.put(e)}clearAnalysis(){this.analysis.clear()}stats(e={}){let t=this.open();if(!t)return{games:0,positions:0,matching:0};let n=t.prepare(`SELECT COUNT(*) AS n FROM games WHERE shadowed = 0`).get().n,r=t.prepare(`SELECT COUNT(DISTINCT pos) AS n FROM plies`).get().n,{sql:i,binds:a}=this.where(e);return{games:n,positions:r,matching:t.prepare(`SELECT COUNT(*) AS n FROM games g WHERE 1 = 1${i}`).get(...a).n}}close(){this.db?.close(),this.db=null}},qr={1:`1-0`,0:`1/2-1/2`,[-1]:`0-1`},Jr=[`bullet`,`blitz`,`rapid`,`classical`,`correspondence`],Yr=/^\d{4}-\d{2}-\d{2}$/;function Xr(e){let t=e(`side`),n=e(`outcome`),r=(e(`speeds`)??``).split(`,`).filter(e=>Jr.includes(e)),i=e(`from`),a=e(`to`);return{side:t===`white`||t===`black`?t:void 0,outcome:n===`win`||n===`loss`||n===`draw`?n:void 0,speeds:r.length>0&&r.length<Jr.length?r:void 0,from:i&&Yr.test(i)?i:void 0,to:a&&Yr.test(a)?a:void 0,collectionOnly:e(`collection`)===`1`}}function Zr(e=Xt,t=nn,n=K($t,`refgames`),r=an){let i=new Kr(e,t,new Hr(r)),a=new G;return a.get(`/mygames`,e=>{let t=e.req.query(`fen`);if(!t)return e.json({error:`missing ?fen=`},400);let n;try{n=p.fromSetup(l(t).unwrap()).unwrap()}catch{return e.json({error:`invalid FEN`},400)}i.sync();let r=Xr(t=>e.req.query(t)),{moves:a,topGames:o,games:s}=i.lookup(n,r);return e.json({opening:Yn(z(n.toSetup()).toString(16)),moves:a,games:s,topGames:o.map(e=>({uci:e.uci,white:e.white,black:e.black,whiteElo:e.white_elo,blackElo:e.black_elo,result:qr[e.result]??`*`,date:e.date,site:e.site,file:e.file,index:e.idx}))})}),a.post(`/mygames/explore-batch`,async e=>{let t=await e.req.json().catch(()=>null),n=Array.isArray(t?.fens)?t.fens.filter(e=>typeof e==`string`):null;if(!n)return e.json({error:`expected fens`},400);if(n.length>256)return e.json({error:`too many positions`},400);i.sync();let r=Xr(t=>e.req.query(t)),a=n.map(e=>{let t;try{t=p.fromSetup(l(e).unwrap()).unwrap()}catch{return{fen:e,moves:[]}}return{fen:e,moves:i.movesAt(t,r)}});return e.json({positions:a})}),a.post(`/mygames/deviations`,async e=>{let t=await e.req.json().catch(()=>null),n=t?.side,r=t?.keys;if(n!==`white`&&n!==`black`||!Array.isArray(r)||r.length===0||r.length>5e4||!r.every(e=>typeof e==`string`&&/^[0-9a-f]{1,16}$/.test(e)))return e.json({error:`expected { keys: hex[], side }`},400);let a=Math.min(500,Math.max(1,Number(t?.limit)||200)),o=new Set(r.map(e=>Te(BigInt(`0x${e}`))));return i.sync(),e.json({deviations:i.deviations(o,n,a).map(e=>({...e,result:qr[e.result]??`*`}))})}),a.get(`/mygames/compare`,e=>{let t=e.req.query(`side`);if(t!==`white`&&t!==`black`)return e.json({error:`expected side=white|black`},400);let r=e.req.query(`db`);if(!r||!/^[A-Za-z0-9][A-Za-z0-9_.-]*$/.test(r))return e.json({error:`expected db=<database>`},400);let a=e.req.query(`band`),o=null;if(a){let t=/^(\d{3,4})-(\d{3,4})?$/.exec(a),n=t?Number(t[1]):NaN,r=t?.[2]===void 0?null:Number(t[2]);if(!t||n%200!=0||r!==null&&(r+1)%200!=0)return e.json({error:`band must sit on the 200-point buckets`},400);o={lo:n,hi:r}}let s=Math.min(500,Math.max(1,Number(e.req.query(`limit`))||200));i.sync();let{banded:c,rows:l}=i.compareAgainst(K(n,`${r}.sqlite`),t,s,o);return e.json({banded:c,rows:l})}),a.get(`/mygames/insights`,e=>(i.sync(),e.json(i.insights(Xr(t=>e.req.query(t)))))),a.get(`/mygames/analysis/status`,e=>(i.sync(),e.json(i.analysisStatus()))),a.get(`/mygames/analysis/queue`,e=>{let t=Math.min(200,Math.max(1,Number(e.req.query(`limit`))||25));return i.sync(),e.json({games:i.analysisQueue(t)})}),a.put(`/mygames/analysis`,async e=>{let t=Ur(await e.req.json().catch(()=>null));return t?(i.putAnalysis(t),e.json({ok:!0})):e.json({error:`expected an analysis record`},400)}),a.delete(`/mygames/analysis`,e=>(i.clearAnalysis(),e.json(i.analysisStatus()))),a.get(`/mygames/status`,e=>(i.sync(),e.json(i.stats(Xr(t=>e.req.query(t)))))),a.post(`/mygames/reindex`,e=>(i.sync(!0),e.json(i.stats()))),a}var Qr=5,$r=(e,t,n,r,i)=>e===`failed`?`failed`:JSON.stringify([t,n,r,i]),ei=e=>typeof e==`object`&&!!e&&typeof e.id==`string`&&typeof e.at==`string`,ti=e=>{if(typeof e!=`object`||!e)return;let t={};for(let[n,r]of Object.entries(e))ei(r)&&(t[n]=r);return Object.keys(t).length>0?t:void 0},ni={attempts:0,wins:0,streak:0},ri=e=>({attempts:e.attempts,wins:e.wins,streak:e.streak}),ii=1500,ai=e=>Math.min(3e3,Math.max(600,e)),oi=(e,t,n,r)=>{let i=t<30?40:20,a=1/(1+10**((n-e)/400));return ai(e+i*(+!!r-a))},si=new Map,ci=256,li=new Map,ui=512;function di(e,t,n){if(e.size>=ui){let t=e.keys().next().value;t!==void 0&&e.delete(t)}e.set(t,n)}function fi(e,t){let n=Math.round(Number(e));return!e||!Number.isFinite(n)?t:Math.min(9999,Math.max(0,n))}var pi=(e,t)=>e.prepare(`SELECT 1 FROM sqlite_master WHERE type = 'table' AND name = ?`).get(t)!==void 0;function mi(e,t,n,r,i){let a=li.get(i);if(a!==void 0)return a;let o=r?`theme_rating_counts`:`rating_counts`,s=null;if(pi(e,o)){let i=r?e.prepare(`SELECT rating, n FROM theme_rating_counts WHERE theme = ? AND rating BETWEEN ? AND ? ORDER BY rating`).all(r,t,n):e.prepare(`SELECT rating, n FROM rating_counts WHERE rating BETWEEN ? AND ? ORDER BY rating`).all(t,n),a=[],o=[],c=0;for(let e of i)c+=e.n,a.push(e.rating),o.push(c);s={ratings:a,cum:o,total:c}}return di(li,i,s),s}function hi(e,t){let n=0,r=e.length-1;for(;n<r;){let i=n+r>>1;e[i]>t?r=i:n=i+1}return n}function gi(e,t,n,r,i){let a=`${e.name}|${r??``}|${t}|${n}`,o=mi(e,t,n,r,a),s;if(o){if(o.total===0)return null;let t=e.prepare(r?`SELECT id FROM themes WHERE theme = ? AND rating = ? LIMIT 1 OFFSET ?`:`SELECT id FROM puzzles WHERE rating = ? LIMIT 1 OFFSET ?`);s=()=>{let e=Math.floor(Math.random()*o.total),n=hi(o.cum,e),i=e-(n>0?o.cum[n-1]:0),a=o.ratings[n];return(r?t.get(r,a,i):t.get(a,i)).id}}else{let i=r?`FROM themes WHERE theme = ? AND rating BETWEEN ? AND ?`:`FROM puzzles WHERE rating BETWEEN ? AND ?`,o=r?[r,t,n]:[t,n],c=si.get(a);if(c===void 0&&(c=e.prepare(`SELECT COUNT(*) AS n ${i}`).get(...o).n,di(si,a,c)),c===0)return null;let l=e.prepare(`SELECT id ${i} LIMIT 1 OFFSET ?`);s=()=>l.get(...o,Math.floor(Math.random()*c)).id}let c=e.prepare(`SELECT id, fen, moves, rating, popularity, plays, themes, game_url, opening_tags FROM puzzles WHERE id = ?`),l=o?o.total:si.get(a)??0;if(l>0&&l<=ci){let a=r?`FROM themes WHERE theme = ? AND rating BETWEEN ? AND ?`:`FROM puzzles WHERE rating BETWEEN ? AND ?`,o=r?[r,t,n]:[t,n],s=e.prepare(`SELECT id ${a}`).all(...o).map(e=>e.id),l=s.filter(e=>!i.has(e)),u=l.length>0?l:s;return u.length===0?null:c.get(u[Math.floor(Math.random()*u.length)])}let u=null;for(let e=0;e<12;e++){let e=s();if(!i.has(e))return c.get(e);u=e}return u?c.get(u):null}function _i(e=en,t=K(Z,`puzzles`)){let n=K(t,`state.json`),r=K(t,`history.jsonl`),i=()=>{try{let e=JSON.parse(P(n,`utf-8`));return{attempts:e.attempts??0,wins:e.wins??0,streak:e.streak??0,...typeof e.skill==`number`&&{skill:e.skill},...typeof e.skillAttempts==`number`&&{skillAttempts:e.skillAttempts},...ti(e.offered)&&{offered:ti(e.offered)}}}catch{return{...ni}}},a=e=>{M(t,{recursive:!0}),q(n,`${JSON.stringify(e,null,2)}\n`)},o=()=>{let e;try{e=P(r,`utf-8`)}catch{return[]}return e.trimEnd().split(`
`).flatMap(e=>{try{let t=JSON.parse(e);return typeof t?.id==`string`?[t]:[]}catch{return[]}})},s=(e,t)=>t.some(t=>t.id===e.id&&typeof t.at==`string`&&t.at>=e.at),c=(e,t,n,r)=>{let i=e.offered?.[t];return!i||i.id===r||s(i,n)?null:i.id},l=(e,t,n,r)=>{let i=Object.entries(e.offered??{}).filter(([e,n])=>e!==t&&!s(n,r));i.push([t,{id:n,at:new Date().toISOString()}]),a({...e,offered:Object.fromEntries(i.slice(-16))})},u=(e,t)=>e.prepare(`SELECT id, fen, moves, rating, popularity, plays, themes, game_url, opening_tags FROM puzzles WHERE id = ?`).get(t),d=e=>{let t=o().filter(e=>e.counted!==!1);if(t.length===0)return null;let n=[...new Set(t.map(e=>e.id))],r=new Map;for(let t=0;t<n.length;t+=500){let i=n.slice(t,t+500),a=e.prepare(`SELECT id, themes FROM puzzles WHERE id IN (${i.map(()=>`?`).join(`,`)})`).all(...i);for(let e of a)r.set(e.id,e.themes.split(` `).filter(Boolean))}let i=new Map,a=0;for(let e of t){e.win&&(a+=1);for(let t of r.get(e.id)??[]){let n=i.get(t)??{attempts:0,wins:0};n.attempts+=1,e.win&&(n.wins+=1),i.set(t,n)}}let s=a/t.length,c=null;for(let[e,t]of i){if(t.attempts<Qr)continue;let n=t.wins/t.attempts;n>=s||(!c||n<c.wins/c.attempts)&&(c={theme:e,...t})}return c},f=(e=o())=>{let t=new Map,n=new Set;for(let r of e)t.set(r.id,r.win),r.counted!==!1&&n.add(r.id);return[...t].filter(([e,t])=>!t&&n.has(e)).map(([e])=>e)},p=(e=o())=>{let t=new Map,n=new Set;for(let r of e){let e=t.get(r.id)??[],i=r.at;e.push({win:r.win,...typeof i==`string`?{at:i}:{}}),t.set(r.id,e),r.counted!==!1&&n.add(r.id)}let r=[];for(let[e,i]of t){if(!n.has(e))continue;let t=fe(i);t!==null&&r.push({id:e,due:t})}return r.sort((e,t)=>e.due<t.due?-1:+(e.due>t.due))},m=e=>{if(typeof e.skill==`number`)return{...e,skill:e.skill,skillAttempts:e.skillAttempts??0};let t=ii,n=0;for(let e of o()){if(e.counted===!1)continue;let r=e.puzzleRating;typeof r==`number`&&(t=oi(t,n,r,e.win),n+=1)}let r={...e,skill:t,skillAttempts:n};return a(r),r},h=null,g=()=>h||(I(e)?(h=new Dn(e,{readonly:!0,fileMustExist:!0}),h):null),_=()=>{h?.close(),h=null},v=new G,y=null,b=()=>{let t={startedAt:Date.now(),running:!0,progress:{phase:`downloading`,bytes:0,total:0},error:null};y=t;let n=K(X,`server`,`build-puzzles.mjs`),r=I(n)?[n,`--progress-json`]:[`--import`,`tsx`,`scripts/build-puzzles.ts`,`--progress-json`],i=(0,sn.spawn)(process.execPath,r,{cwd:X,stdio:[`ignore`,`pipe`,`pipe`]}),a=``;i.stdout.on(`data`,e=>{a+=e.toString();let n=a.split(`
`);a=n.pop()??``;for(let e of n)if(e.startsWith(`{`))try{t.progress=JSON.parse(e)}catch{}});let o=``;i.stderr.on(`data`,e=>{let t=e.toString().trim();t&&(o=t.split(`
`).pop()??t)}),i.on(`error`,e=>{t.running=!1,t.error=e.message}),i.on(`close`,n=>{if(t.running=!1,n!==0){t.error=o||`the build stopped unexpectedly (exit ${n})`;return}_();let r=`${e}.building`;if(I(r)){_();try{Wt(r,e)}catch(e){t.error=`the database was built but could not be swapped in (${e.message})`;return}}x=null})};v.get(`/puzzles/build`,e=>e.json(y?{running:y.running,seconds:(Date.now()-y.startedAt)/1e3,error:y.error,...y.progress}:{running:!1})),v.post(`/puzzles/build`,e=>y?.running?e.json({error:`a build is already running`},409):(b(),e.json({running:!0})));let x=null,S=e=>x||(x=e.prepare(`SELECT 1 FROM sqlite_master WHERE type = 'table' AND name = 'theme_counts'`).get()?e.prepare(`SELECT theme, count FROM theme_counts ORDER BY count DESC`).all():e.prepare(`SELECT theme, COUNT(*) AS count FROM themes GROUP BY theme ORDER BY count DESC`).all(),x);return v.get(`/puzzles/meta`,e=>{let t=g(),n=i();if(!t)return e.json({ready:!1,user:ri(n)});let r=Object.fromEntries(t.prepare(`SELECT key, value FROM meta`).all().map(e=>[e.key,e.value])),a=o(),s=p(a),c=new Date().toISOString();return e.json({ready:!0,puzzles:Number(r.puzzles??0),themes:S(t),failed:f(a).length,due:s.filter(e=>e.due<=c).length,nextDue:s.find(e=>e.due>c)?.due??null,weakTheme:d(t),user:ri(n)})}),v.get(`/puzzles/next`,e=>{let t=g();if(!t)return e.json({error:`No puzzle database yet. Build it from the Puzzles page.`},503);let n=o(),r=e.req.query(`skip`)||null;if(e.req.query(`mode`)===`failed`){let a=n.at(-1)?.id??null,o=new Date().toISOString(),s=p(n).filter(e=>e.due<=o).map(e=>e.id),d=s.length>1?s.filter(e=>e!==a):s,m=f(n),h=i(),g=$r(`failed`,null,!1,0,0),_=c(h,g,n,r);if(_&&(s.includes(_)||m.includes(_))){let n=u(t,_);if(n)return e.json({puzzle:n})}let v=d.find(e=>e!==r);if(v===void 0){let t=m.filter(e=>e!==r&&(m.length<=1||e!==a));if(t.length===0&&(t=d.length>0?d:m),t.length===0)return e.json({error:`No failed puzzles to review. Nothing to fix.`},404);v=t[Math.floor(Math.random()*t.length)]}let y=u(t,v);return y?(l(h,g,y.id,n),e.json({puzzle:y})):e.json({error:`unknown puzzle: ${v}`},404)}let a=e.req.query(`theme`)||null,s=!!e.req.query(`adaptive`),d=fi(e.req.query(`min`),0),h=fi(e.req.query(`max`),9999),_=new Set(n.map(e=>e.id)),v=s?m(i()):i(),y=$r(`fresh`,a,s,d,h),b=c(v,y,n,r);if(b){let n=u(t,b);if(n)return e.json({puzzle:n})}r&&_.add(r);let x=t=>(l(v,y,t.id,n),e.json({puzzle:t}));if(s){let n=Math.round(v.skill/50)*50;for(let e of[[n-100,n+200],[n-300,n+400],[0,9999]]){let n=gi(t,e[0],e[1],a,_);if(n)return x(n)}return e.json({error:`No puzzle matches that filter.`},404)}let S=gi(t,d,h,a,_);return S?x(S):e.json({error:`No puzzle matches that filter.`},404)}),v.get(`/puzzles/by-id/:id`,e=>{let t=g();if(!t)return e.json({error:`no puzzle database`},503);let n=t.prepare(`SELECT id, fen, moves, rating, popularity, plays, themes, game_url, opening_tags FROM puzzles WHERE id = ?`).get(e.req.param(`id`));return n?e.json({puzzle:n}):e.json({error:`unknown puzzle: ${e.req.param(`id`)}`},404)}),v.post(`/puzzles/attempt`,async e=>{let n=await e.req.json().catch(()=>({}));if(typeof n.id!=`string`||typeof n.win!=`boolean`)return e.json({error:`expected { id, win }`},400);let o=g(),s=o?o.prepare(`SELECT rating FROM puzzles WHERE id = ?`).get(n.id):void 0;if(!s)return e.json({error:`unknown puzzle: ${n.id}`},404);let c=n.counted!==!1,l=c?m(i()):i(),u=c?{...l,attempts:l.attempts+1,wins:l.wins+ +!!n.win,streak:n.win?l.streak+1:0,skill:oi(l.skill,l.skillAttempts,s.rating,n.win),skillAttempts:l.skillAttempts+1}:l;return c&&a(u),M(t,{recursive:!0}),Se(r,`${JSON.stringify({id:n.id,win:n.win,counted:c,puzzleRating:s.rating,at:new Date().toISOString()})}\n`),e.json({user:ri(u)})}),v.post(`/puzzles/reset`,e=>(L(n,{force:!0}),L(r,{force:!0}),e.json({ok:!0,user:{...ni}}))),v.get(`/puzzles/history`,e=>{let t=Math.round(Number(e.req.query(`limit`)||50)),n=Number.isFinite(t)?Math.min(500,Math.max(1,t)):50,r=o().slice(-n).reverse(),i=g();if(i){let e=[...new Set(r.map(e=>e.id))],t=new Map;for(let n=0;n<e.length;n+=500){let r=e.slice(n,n+500),a=i.prepare(`SELECT id, themes FROM puzzles WHERE id IN (${r.map(()=>`?`).join(`,`)})`).all(...r);for(let e of a)t.set(e.id,e.themes.split(` `).filter(Boolean))}for(let e of r){let n=t.get(e.id);n&&(e.themes=n)}}return e.json({attempts:r})}),Object.assign(v,{closeDb:_})}function vi(){if({}.CHESS_NATIVE===`0`)return null;let e=process.platform===`win32`?`chessvault-core.exe`:`chessvault-core`;for(let t of[K(X,`server`,e),K(X,`native`,`target`,`release`,e)])if(I(t))return t;return null}new Set(Object.keys({win:`loss`,"cursed-win":`blessed-loss`,"maybe-win":`maybe-loss`,draw:`draw`,"blessed-loss":`cursed-win`,"maybe-loss":`maybe-win`,loss:`win`,unknown:`unknown`}));function yi(e){try{let t=p.fromSetup(l(e).unwrap()).unwrap();if(t.board.occupied.size()>7||t.castles.castlingRights.nonEmpty())return null;let n=t.toSetup();return n.fullmoves=1,f(n)}catch{return null}}function bi(e,t,n){return K(e,t,`${(0,sn.createHash)(`sha256`).update(n).digest(`hex`).slice(0,32)}.json`)}async function xi(e,t,n){let r=bi(e,t.source,n);try{return P(r,`utf-8`)}catch{}let i=await t.probe(n),a=JSON.stringify(i?{available:!0,source:t.source,...i}:{available:!1});return M(K(e,t.source),{recursive:!0}),j(r,a),a}async function Si(e,t,n){let r=yi(n);if(!r)return null;let i=JSON.parse(await xi(e,t,r));return i.available?i:null}var Ci=[`p`,`n`,`b`,`r`,`q`],wi={p:`pawn`,n:`knight`,b:`bishop`,r:`rook`,q:`queen`},Ti={p:4,n:2,b:2,r:2,q:1},Ei=(e,t,n)=>t+Math.floor(e()*(n-t+1));function Di(e,t){let n={white:{p:0,n:0,b:0,r:0,q:0},black:{p:0,n:0,b:0,r:0,q:0}},r=[],i=5;for(let t of[`white`,`black`])for(let a of Ci){let o=e[t][a],s=o?o[0]:0,c=o?o[1]:Ti[a];n[t][a]=s,i-=s,r.push({color:t,letter:a,max:c})}if(i<0)return null;for(let e=r.length-1;e>0;--e){let n=Math.floor(t()*(e+1));[r[e],r[n]]=[r[n],r[e]]}for(let{color:e,letter:a,max:o}of r){let r=Math.min(o-n[e][a],i);if(r<=0)continue;let s=Ei(t,0,r);n[e][a]+=s,i-=s}return n}function Oi(e,t){for(let n=0;n<64;n+=1){let n=Di(e,t);if(!n)return null;let r=c.empty(),i=0;for(let e of[`white`,`black`])for(let t of Ci)for(let a=0;a<n[e][t];a+=1)r.set(i++,{color:e,role:wi[t]});if(ce(r,e))return n}return null}function ki(e,t,n){let r=Oi(e,n);if(!r)return null;let i=c.empty(),a=new Set,o=(e,t,r)=>{for(let o=0;o<64;o+=1){let o=r?Ei(n,8,55):Ei(n,0,63);if(!a.has(o))return a.add(o),i.set(o,{color:e,role:t}),!0}return!1};if(!o(`white`,`king`,!1)||!o(`black`,`king`,!1))return null;for(let e of[`white`,`black`])for(let t of Ci)for(let n=0;n<r[e][t];n+=1)if(!o(e,wi[t],t===`p`))return null;if(!ce(i,e)||i[t].diff(i.king).isEmpty())return null;let l={board:i,pockets:void 0,turn:t,castlingRights:s.empty(),epSquare:void 0,remainingChecks:void 0,halfmoves:0,fullmoves:1},u=p.fromSetup(l);return u.isErr||u.value.isEnd()||u.value.isInsufficientMaterial()?null:f(l)}function Ai(e,t,n){let r=[];if(!ke(e))return r;for(let i=0;r.length<t&&i<t*8;i+=1){let t=ki(e,n()<.5?`white`:`black`,n);t&&r.push(t)}return r}var ji=e=>e===`win`||e===`draw`?e:e==null||e===``?`win`:null,Mi=e=>e.category===`win`?`win`:e.category===`draw`?`draw`:null,Ni=60,Pi=4,Fi=2,Ii=6,Li=e=>e===`win`||e===`maybe-win`,Ri=e=>e!==`loss`&&e!==`unknown`,zi=(e,t)=>e===`win`?Li(t):Ri(t),Bi=(e,t)=>e===`win`?t.category===`win`:t.category===`draw`;function Vi(e,t,n){if(e===`win`){let e=t.dtm??t.dtz;if(e!==null&&e<10)return!0}else if(t.moves.every(e=>Ri(e.category)))return!0;return t.moves.some(t=>{if(!zi(e,t.category))return!1;let r=a(t.uci);return!!r&&`to`in r&&n.board.get(r.to)!==void 0})}async function Hi(e,t,n,r,i){let o=p.fromSetup(l(r).unwrap()).unwrap(),s=[],c=i;for(let r=0;;r+=1){let i=c.moves.filter(e=>zi(n,e.category)).length;if(s.push(c.moves.length?i/c.moves.length:1),r===Fi)break;let l=c.moves[0],u=l&&a(l.uci);if(!u||!o.isLegal(u))break;o.play(u);let d=(await Si(e,t,f(o.toSetup())))?.moves[0],p=d&&a(d.uci);if(!p||!o.isLegal(p))break;o.play(p);let m=await Si(e,t,f(o.toSetup()));if(!m||!Bi(n,m))break;c=m}return s.reduce((e,t)=>e+t,0)/s.length}async function Ui(e,t,n,r){let i=r.moves.filter(e=>e.category===`draw`).slice(0,Ii);if(i.length===0)return r.moves[0]??null;let o=await Promise.all(i.map(async r=>{let i=a(r.uci);if(!i||!n.isLegal(i))return 1/0;let o=n.clone();o.play(i);let s=await Si(e,t,f(o.toSetup()));return s?s.moves.filter(e=>Ri(e.category)).length:1/0})),s=0;return o.forEach((e,t)=>{e<o[s]&&(s=t)}),i[s]}var Wi=(e,t)=>e.isStalemate()||e.isInsufficientMaterial()||e.hasInsufficientMaterial(t),Gi=e=>e.json({error:`No tablebase is answering. Choose a source under Settings, Tablebase.`,reason:`no-tablebase`},503),Ki=e=>e.json({error:`The tablebase in use holds no tables for this many pieces. Point Settings, Tablebase at one that does.`,reason:`no-table`},503),qi=e=>e.json({error:`The tablebase is unreachable and this position is not cached`,reason:`unreachable`,offline:!0},502);function Ji(e=null,t=on,n=Math.random){let i=new G;return i.get(`/endgames/draw`,async r=>{let i=ae(r.req.query(`spec`)??``);if(!i)return r.json({error:`missing or malformed ?spec=`},400);let a=r.req.query(`goal`),o=a==null||a===``?null:ji(a);if(a&&!o)return r.json({error:`?goal= is win or draw`},400);if(!ke(i))return r.json({error:`This material needs more than seven pieces, which no table holds`,reason:`too-many`},400);let s=e?.();if(!s)return Gi(r);let c=n()<.5?i:le(i),u=0,d=0,f=[];for(let e of Ai(c,Ni,n)){if(f.length>=Pi)break;let n;try{n=await Si(t,s,e)}catch{return qi(r)}if(u+=1,!n)continue;d+=1;let i=Mi(n);if(!i||o&&i!==o||n.checkmate||n.stalemate)continue;let a=p.fromSetup(l(e).unwrap()).unwrap();Vi(i,n,a)||f.push({fen:e,answer:n,goal:i})}if(f.length>0){let e;try{e=await Promise.all(f.map(e=>Hi(t,s,e.goal,e.fen,e.answer)))}catch{return qi(r)}let n=0;e.forEach((t,r)=>{t<e[n]&&(n=r)});let{fen:i,goal:a}=f[n];return r.json({fen:i,side:i.split(` `)[1]===`b`?`black`:`white`,goal:a,source:s.source})}return u>0&&d===0?Ki(r):r.json({error:o===`win`?`No winning position of this material turned up. Try again.`:o===`draw`?`No drawn position of this material with something to hold turned up. Try again.`:`No position of this material with something to keep turned up. Try again.`,reason:`none-found`},404)}),i.post(`/endgames/move`,async n=>{let i=await n.req.json().catch(()=>({}));if(typeof i.fen!=`string`||typeof i.uci!=`string`)return n.json({error:`expected { fen, uci }`},400);let o=ji(i.goal);if(!o)return n.json({error:`goal is win or draw`},400);let s=l(i.fen),c=s.isOk?p.fromSetup(s.value):null,u=a(i.uci);if(!c||c.isErr||!u||!c.value.isLegal(u))return n.json({error:`that move is not legal in that position`},400);let d=e?.();if(!d)return Gi(n);let m;try{m=await Si(t,d,i.fen)}catch{return qi(n)}if(!m)return Ki(n);let h=m.moves.find(e=>e.uci===i.uci);if(!h)return Ki(n);let g=c.value,_=g.turn,v=C(g,u),y=f(g.toSetup());if(o===`win`&&g.isCheckmate())return n.json({verdict:`won`,san:v,fen:y});if(!zi(o,h.category)){let e=m.moves[0];return n.json({verdict:`threw`,san:v,fen:y,category:h.category,best:{uci:e.uci,san:e.san}})}if(o===`draw`&&Wi(g,r(_)))return n.json({verdict:`drawn`,san:v,fen:y});let b,x;try{b=await Si(t,d,y),x=b?o===`win`?b.moves[0]??null:await Ui(t,d,g,b):null}catch{return qi(n)}if(!b||!x)return Ki(n);let S=a(x.uci);if(!S||!g.isLegal(S))return Ki(n);let w=C(g,S),T=f(g.toSetup()),E=o===`draw`&&Wi(g,r(_))?`drawn`:`held`;return n.json({verdict:E,san:v,reply:{uci:x.uci,san:w},fen:T})}),i}var Yi=class{writer;encoder;writable;abortSubscribers=[];responseReadable;aborted=!1;closed=!1;constructor(e,t){this.writable=e,this.writer=e.getWriter(),this.encoder=new TextEncoder;let n=t.getReader();this.abortSubscribers.push(async()=>{await n.cancel()}),this.responseReadable=new ReadableStream({async pull(e){let{done:t,value:r}=await n.read();t?e.close():e.enqueue(r)},cancel:()=>{this.closed||this.abort()}})}async write(e){try{typeof e==`string`&&(e=this.encoder.encode(e)),await this.writer.write(e)}catch{}return this}async writeln(e){return await this.write(e+`
`),this}sleep(e){return new Promise(t=>setTimeout(t,e))}async close(){this.closed=!0;try{await this.writer.close()}catch{}}async pipe(e){this.writer.releaseLock();try{await e.pipeTo(this.writable,{preventClose:!0,preventAbort:!0})}finally{this.writer=this.writable.getWriter()}}onAbort(e){this.abortSubscribers.push(e)}abort(){this.aborted||(this.aborted=!0,this.abortSubscribers.forEach(e=>{try{Promise.resolve(e()).catch(()=>{})}catch{}}))}},Xi=()=>{let e=typeof Bun<`u`?Bun.version:void 0;if(e===void 0)return!1;let t=e.startsWith(`1.1`)||e.startsWith(`1.0`)||e.startsWith(`0.`);return Xi=()=>t,t},Zi=new WeakMap,Qi=(e,t,n)=>{let{readable:r,writable:i}=new TransformStream,a=new Yi(i,r);return Xi()&&e.req.raw.signal.addEventListener(`abort`,()=>{a.closed||a.abort()}),Zi.set(a.responseReadable,e),(async()=>{try{await t(a)}catch(e){e===void 0||(e instanceof Error&&n?await n(e,a):console.error(e))}finally{a.close()}})(),e.newResponse(a.responseReadable)},$i=[`iqp`,`doubled-pawns`,`passed-pawn`,`rook-on-seventh`,`fianchetto`,`knight-outpost`,`opposite-bishops`,`opposite-castling`,`same-side-castling`,`greek-gift`,`underpromotion`,`en-passant`],ea={iqp:`board`,"doubled-pawns":`board`,"passed-pawn":`board`,"rook-on-seventh":`board`,fianchetto:`board`,"knight-outpost":`board`,"opposite-bishops":`board`,"opposite-castling":`castling`,"same-side-castling":`castling`,"greek-gift":`move`,underpromotion:`move`,"en-passant":`move`};function ta(e){return ea[e]!==`castling`&&e!==`opposite-bishops`}var na=[`white`,`black`,`either`];function ra(e){let t;try{t=JSON.parse(e)}catch{return null}if(typeof t!=`object`||!t||Array.isArray(t))return null;let n=t;for(let e of Object.keys(n))if(![`id`,`side`,`stable`].includes(e))return null;if(typeof n.id!=`string`||!$i.includes(n.id))return null;let r=n.id,i=`either`;if(n.side!==void 0){if(typeof n.side!=`string`||!na.includes(n.side))return null;i=n.side}if(!ta(r)&&i!==`either`)return null;let a=1;if(n.stable!==void 0){if(typeof n.stable!=`number`||!Number.isInteger(n.stable)||n.stable<1||n.stable>60)return null;a=n.stable}return{id:r,side:i,stable:a}}function ia(e){return JSON.stringify({id:e.id,side:e.side,stable:e.stable})}function aa(e){if(e===void 0)return null;try{let t=JSON.parse(e);if(typeof t!=`object`||!t||Array.isArray(t))return null;let n=t.id;return typeof n==`string`?n:null}catch{return null}}var oa=e=>e&7,sa=e=>e>>3;function ca(e,t,n){let r=n===`white`,i=r?e.white:e.black,a=r?e.black:e.white,o=e.pawn.intersect(i),s=e.pawn.intersect(a),c=(e,t)=>r?e>t:e<t,l=(e,t)=>{for(let n of s)if(e.includes(oa(n))&&c(sa(n),t))return!0;return!1},u=(e,t)=>e.has(t);switch(t){case`iqp`:{let e=0,t=0;for(let n of o){let r=oa(n);r===3?e+=1:(r===2||r===4)&&(t+=1)}if(e!==1||t!==0)return!1;for(let e of s)if(oa(e)===3)return!1;return!0}case`doubled-pawns`:{let e=[0,0,0,0,0,0,0,0];for(let t of o)if(e[oa(t)]=(e[oa(t)]??0)+1,e[oa(t)]>=2)return!0;return!1}case`passed-pawn`:for(let e of o){let t=oa(e);if(!l([t-1,t,t+1],sa(e)))return!0}return!1;case`rook-on-seventh`:{let t=r?6:1;for(let n of e.rook.intersect(i))if(sa(n)===t)return!0;return!1}case`fianchetto`:{let t=e.bishop.intersect(i);return r?u(t,14)&&u(o,22)||u(t,9)&&u(o,17):u(t,54)&&u(o,46)||u(t,49)&&u(o,41)}case`knight-outpost`:for(let t of e.knight.intersect(i)){let e=oa(t),n=sa(t);if(r?n!==4&&n!==5:n!==3&&n!==2)continue;let i=r?n-1:n+1;if((e>0&&u(o,i*8+e-1)||e<7&&u(o,i*8+e+1))&&!l([e-1,e+1],n))return!0}return!1;case`opposite-bishops`:{if(!e.knight.isEmpty()||!e.rook.isEmpty()||!e.queen.isEmpty())return!1;let t=e.bishop.intersect(e.white),n=e.bishop.intersect(e.black);if(t.size()!==1||n.size()!==1)return!1;let r=e=>oa(e)+sa(e)&1;return r(t.first())!==r(n.first())}default:return!1}}function la(e,t,n){return ea[t]===`board`?n===`white`?ca(e,t,`white`):n===`black`?ca(e,t,`black`):ca(e,t,`white`)||ca(e,t,`black`):!1}var ua=`scan_pack`;function da(e){let t=Array(16).fill(0);for(let n of e.pawn.intersect(e.white))t[o(n)]=(t[o(n)]??0)+1;for(let n of e.pawn.intersect(e.black))t[8+o(n)]=(t[8+o(n)]??0)+1;let n=5;for(let e of t)n=n*33+e&255;return n}var fa=4294967295n;function pa(e,t){let n=e instanceof p?e.toSetup():e,r=z(n),i=n.board,a=[i.pawn,i.knight,i.bishop,i.rook,i.queen],o=e=>+!!i.king.intersect(e).isEmpty();return{mode:t,key:Te(r),key32:Number(r&fa),sig:t===`exact`?``:oe(i,t),pawns8:da(i),wCounts:a.map(e=>e.intersect(i.white).size()),bCounts:a.map(e=>e.intersect(i.black).size()),w:i.white.size()+o(i.white),b:i.black.size()+o(i.black),blackToMove:n.turn===`black`}}function ma(e,t){if(t.mode===`structure`)return ha(e,t);let n=p.default(),r=16,i=16,a=0,o=()=>a%2==1===t.blackToMove&&r===t.w&&i===t.b&&(t.mode===`exact`?Te(z(n.toSetup()))===t.key:oe(n.board,t.mode)===t.sig);for(let s of e.split(` `)){if(o())return a;let e=w(n,s);if(!e||s.includes(`x`)&&(a%2==0?--i:--r,r<t.w||i<t.b))break;n.play(e),a+=1}return o()?a:null}function ha(e,t){let n=p.default(),r=0,i=t.wCounts[0],a=t.bCounts[0],o=()=>[n.board.pawn.intersect(n.board.white).size(),n.board.pawn.intersect(n.board.black).size()],s=()=>{let[e,r]=o();return e===i&&r===a&&oe(n.board,`structure`)===t.sig};for(let t of e.split(` `)){if(s())return r;let e=w(n,t);if(!e)break;n.play(e),r+=1;let[c,l]=o();if(c<i||l<a)return null}return s()?r:null}function ga(e,t){let{loW:n,loB:r}=ie(t),i=p.default(),a=16,o=16,s=0,c=0,l=()=>{if(ce(i.board,t)){if(c+=1,c>=t.stable)return s-t.stable+1}else c=0;return null};for(let t of e.split(` `)){let e=l();if(e!==null)return e;let c=w(i,t);if(!c||t.includes(`x`)&&(s%2==0?--o:--a,a<n||o<r))return null;i.play(c),s+=1}return l()}function _a(e,t){let n=ea[t.id],r=p.default(),a=0,o=0,s,c,l=!1,u=!1,f=()=>n===`board`?la(r.board,t.id,t.side):n===`castling`?s===void 0||c===void 0?!1:t.id===`opposite-castling`?s!==c:s===c:t.side===`white`?l:t.side===`black`?u:l||u,m=()=>{if(f()){if(o+=1,o>=t.stable)return a-t.stable+1}else o=0;return null};for(let o of e.split(` `)){let e=m();if(e!==null)return e;let f=w(r,o);if(!f)return null;let p=r.turn===`white`;if(n===`castling`){let e=d(r,f);e!==void 0&&(p?s=e:c=e)}let h=!1;if(n===`move`&&i(f)){let e=r.board.get(f.from);t.id===`underpromotion`?h=f.promotion!==void 0&&f.promotion!==`queen`:t.id===`en-passant`?h=e?.role===`pawn`&&f.to===r.epSquare&&(f.from&7)!=(f.to&7):t.id===`greek-gift`&&(h=e?.role===`bishop`&&f.to===(p?55:15)&&r.board.get(f.to)?.role===`pawn`&&r.board.kingOf(p?`black`:`white`)===(p?62:6))}if(r.play(f),a+=1,h&&t.id===`greek-gift`&&(h=r.isCheck()),h&&(p?l=!0:u=!0),n===`castling`&&(s===void 0&&r.castles.castlingRights.intersect(r.board.white).isEmpty()||c===void 0&&r.castles.castlingRights.intersect(r.board.black).isEmpty()))return null}return m()}var va=e=>e>>>16,ya=e=>Number(e>>16n&4294967295n),ba=e=>{let t=BigInt(e&65535);return{lo:t<<48n,hi:t+1n<<48n}},xa=18e5,Sa=3e5;function Ca(){let e=K(X,`server`,`scan-worker.mjs`);return I(e)?e:K(X,`server`,`scanWorker.ts`)}var wa=new Map,Ta=null;function Ea(){Ta||(Ta=setInterval(()=>{let e=Date.now();for(let[t,n]of wa)e-n.lastUsed>xa&&ja(t);wa.size===0&&Ta&&(clearInterval(Ta),Ta=null)},Sa),Ta.unref())}function Da(e){let t=Ca(),n=new sn.Worker(t,t.endsWith(`.ts`)?{execArgv:[`--import`,`tsx`]}:void 0),r={worker:n,seq:0,pending:new Map,ready:Promise.resolve({games:0,bytes:0}),games:0,bytes:0,lastUsed:Date.now()};n.on(`message`,e=>{let t=r.pending.get(e.seq);t&&(e.type===`hits`?t.onHits?.(e.pairs):e.type===`bad`?t.onBad?.(e.ids):e.type===`progress`?t.onProgress?.(e.scanned):e.type===`done`?(r.pending.delete(e.seq),t.settle({scanned:e.scanned})):e.type===`error`&&(r.pending.delete(e.seq),t.settle(Error(e.message??`scan worker error`))))});let i=t=>{for(let e of r.pending.values())e.settle(Error(t));r.pending.clear(),wa.get(e)===r&&wa.delete(e)};return n.on(`error`,e=>i(e.message)),n.on(`exit`,e=>{e!==0&&i(`scan worker exited with code ${e}`)}),r}function Oa(e){let t=wa.get(e);if(!t){t=Da(e),wa.set(e,t);let n=++t.seq,r=new Promise((r,i)=>{t.pending.set(n,{settle:n=>{n instanceof Error?(ja(e),i(n)):r({games:t.games,bytes:t.bytes})}})});t.ready=r;let i=e=>{e.seq!==n||e.type!==`loaded`&&e.type!==`error`||(t.worker.off(`message`,i),e.type===`loaded`&&(t.games=e.games,t.bytes=e.bytes,t.pending.get(n)?.settle({scanned:0}),t.pending.delete(n)))};t.worker.on(`message`,i),t.worker.postMessage({seq:n,op:`load`,path:e}),Ea()}return t.lastUsed=Date.now(),t.ready}function ka(e,t,n,r){let i=wa.get(e);if(!i)return{done:Promise.reject(Error(`index not resident`)),cancel:()=>{}};i.lastUsed=Date.now();let a=++i.seq,o=new Promise((e,t)=>{i.pending.set(a,{onHits:r.onHits,onBad:r.onBad,onProgress:e=>{i.lastUsed=Date.now(),r.onProgress?.(e)},settle:n=>n instanceof Error?t(n):e(n)})});return i.worker.postMessage({seq:a,op:`scan`,...t,ids:n??void 0}),{done:o,cancel:()=>i.worker.postMessage({op:`cancel`,of:a})}}function Aa(e){let t=wa.get(e);return t&&t.games>0?{games:t.games,bytes:t.bytes}:null}function ja(e){let t=wa.get(e);t&&(wa.delete(e),t.worker.terminate())}function Ma(){for(let e of[...wa.keys()])ja(e);Ta&&=(clearInterval(Ta),null)}`
  CREATE TABLE IF NOT EXISTS move_counts AS
    SELECT pos, uci, eb,
           SUM(r = 0) AS w,
           SUM(r = 1) AS d,
           SUM(r = 2) AS b
    FROM plies
    GROUP BY pos, uci, eb;
  CREATE TEMP TABLE mc_thin AS
    SELECT pos FROM move_counts GROUP BY pos HAVING SUM(w + d + b) < 5;
  DELETE FROM move_counts WHERE pos IN (SELECT pos FROM mc_thin);
  DROP TABLE mc_thin;
  CREATE INDEX IF NOT EXISTS idx_move_counts_pos ON move_counts (pos);
`.replace(/SELECT pos, uci, eb,[\s\S]*?GROUP BY pos, uci, eb;/,`SELECT p.pos AS pos, p.uci AS uci,
           SUM(g.result = '1-0') AS w,
           SUM(g.result = '1/2-1/2') AS d,
           SUM(g.result = '0-1') AS b
    FROM plies p JOIN games g ON g.id = p.game_id
    GROUP BY p.pos, p.uci;`);function Na(e){if(!e.prepare(`SELECT name FROM sqlite_master WHERE type = 'table' AND name = 'plies'`).get())return{indexed:!1,plies:0,stale:!1};let t=e.prepare(`SELECT value FROM meta WHERE key = 'plies'`).get(),n=Number(e.prepare(`SELECT value FROM meta WHERE key = 'indexed_through'`).get()?.value),r=n&&Number(e.prepare(`SELECT MAX(id) AS n FROM games`).get().n)||0;return{indexed:!0,plies:Number(t?.value)||e.prepare(`SELECT COUNT(*) AS n FROM plies`).get().n,stale:n>0&&r>n}}var Pa=class extends Error{constructor(){super(`the request was abandoned`),this.name=`AbortError`}},Fa=e=>e instanceof Error&&e.name===`AbortError`,Ia=new Map;function La(e){let t=Ia.get(e);return t||(t=new Dn(e,{readonly:!0,fileMustExist:!0}),Ia.set(e,t)),t}async function Ra(e,t,n,r,i){if(i?.aborted)throw new Pa;await Promise.resolve();let a=La(e).prepare(t);return r===`get`?a.get(...n):a.all(...n)}function za(e){return{all:(t,n,r)=>Ra(e,t,n,`all`,r),get:(t,n,r)=>Ra(e,t,n,`get`,r)}}function Ba(e){for(let[t,n]of Ia)(e===void 0||t===e)&&(n.close(),Ia.delete(t));return Promise.resolve()}var Va=`
  CREATE TABLE IF NOT EXISTS players AS
    SELECT name, COUNT(*) AS games, SUM(w) AS as_white, SUM(b) AS as_black, MAX(elo) AS max_elo
    FROM (
      SELECT white AS name, 1 AS w, 0 AS b, white_elo AS elo FROM games
      UNION ALL
      SELECT black AS name, 0 AS w, 1 AS b, black_elo AS elo FROM games
    )
    GROUP BY name;
  CREATE UNIQUE INDEX IF NOT EXISTS idx_players_name ON players (name);
  CREATE TABLE IF NOT EXISTS openings AS
    SELECT opening, eco, COUNT(*) AS games FROM games
    WHERE opening IS NOT NULL OR eco IS NOT NULL
    GROUP BY opening, eco;
  CREATE TABLE IF NOT EXISTS events AS
    SELECT event, COUNT(*) AS games FROM games
    WHERE event IS NOT NULL
    GROUP BY event;
`,Ha=K($t,`refgames`),Ua=50,Wa=[`match`,`material`,`motif`];function Ga(e){try{let t=JSON.parse(e),n=e=>Array.isArray(e)&&e.every(e=>typeof e==`string`)?e:null,r=n(t.filters);if(!r)return null;let i=t.scan===void 0?[]:n(t.scan);return!i||t.deep!==void 0&&typeof t.deep!=`string`?null:{filters:new Set(r),scan:new Set(i),deep:t.deep??null}}catch{return null}}var Ka=`hits`;function qa(e,t){return[...oo.filter(n=>t(n)!==void 0&&!e.filters.has(n)),...Wa.filter(n=>t(n)!==void 0&&!e.scan.has(n)),...t(`match`)===`structure`&&!e.scan.has(`match:structure`)?[`match:structure`]:[],...(()=>{let n=aa(t(`motif`));return n!==null&&!e.scan.has(`motif:${n}`)?[`motif:${n}`]:[]})(),...(t(`opening`)!==void 0||Ja(t(`terms`)))&&!e.filters.has(`opening:positions`)?[`opening:positions`]:[]]}function Ja(e){if(!e)return!1;try{let t=JSON.parse(e);return Array.isArray(t)&&t.some(e=>typeof e==`object`&&!!e&&e.kind===`opening`)}catch{return!1}}var Ya=new Map,Xa=new Map;function Za(e){let t;try{t=N(e).mtimeMs}catch{return Promise.resolve(null)}let n=`${e}|${t}`,r=Ya.get(n);return r||(r=Qa(e),Ya.set(n,r)),r}function Qa(e){return new Promise(t=>{let n;try{n=(0,sn.spawn)(e,[`capabilities`],{cwd:X,stdio:[`ignore`,`pipe`,`pipe`]})}catch(n){console.error(`refgames: ${e} gave no capabilities: ${n.message}`),t(null);return}let r=``;n.stdout.on(`data`,e=>{r+=e.toString()});let i=!1,a=(n,r)=>{i||(i=!0,clearTimeout(o),n===null?console.error(`refgames: ${e} gave no capabilities${r?`: ${r}`:``} — deep search stays on the JS path`):n.deep!==`hits`&&console.error(`refgames: ${e} declares deep-search output ${n.deep===null?`nothing`:`"${n.deep}"`}, this server needs "${Ka}" — deep search stays on the JS path until it is rebuilt`),t(n))},o=setTimeout(()=>{n.kill(),a(null,`timed out`)},5e3);n.on(`error`,e=>a(null,e.message)),n.on(`close`,e=>{e===0?a(Ga(r),`unparseable output`):a(null,`exit code ${e}`)})})}var $a=/^[A-Za-z0-9][A-Za-z0-9_.-]*$/;function eo(e){return e.prepare(`SELECT 1 FROM sqlite_master WHERE type = 'table' AND name = 'move_counts'`).get()!==void 0}function to(e){return e.prepare(`SELECT 1 FROM sqlite_master WHERE type = 'table' AND name = 'top_games'`).get()!==void 0}function no(e){return e.prepare(`SELECT 1 FROM sqlite_master WHERE type = 'table' AND name = 'players'`).get()!==void 0}function ro(e){return e.prepare(`SELECT 1 FROM sqlite_master WHERE type = 'table' AND name = 'events'`).get()!==void 0}function io(e){let t=null;try{t=new Dn(e,{readonly:!0,fileMustExist:!0});let n=no(t)&&ro(t);if(t.close(),n)return}catch{t?.close();return}try{let t=new Dn(e);t.pragma(`journal_mode = WAL`),t.exec(Va),t.pragma(`wal_checkpoint(TRUNCATE)`),t.pragma(`journal_mode = DELETE`),t.close()}catch{}}function ao(e){let t=e?/^(\d{3,4})-(\d{3,4})?$/.exec(e):null;if(!t)return null;let n=Number(t[1]),r=t[2]===void 0?null:Number(t[2]);return r!==null&&r<n?null:{lo:n,hi:r}}var oo=[`result`,`minElo`,`band`,`player`,`player2`,`side`,`outcome`,`opening`,`event`,`from`,`to`,`terms`];function so(e){if(!e)return 0;try{let t=JSON.parse(e);return Array.isArray(t)?t.length:0}catch{return 0}}function co(e,t=``,n=!1,r=!1){let i=[],a=[],o=e=>`%${e}%`,s=e=>{if(!r)return null;let n=Xn(e).map(e=>Te(BigInt(`0x${e}`)));return n.length===0?null:{sql:`${t}id IN (SELECT game_id FROM plies WHERE pos IN (${n.map(()=>`?`).join(`,`)}))`,binds:n}},c=n?`${t}white IN (SELECT name FROM players WHERE name LIKE ?)`:`${t}white LIKE ?`,l=n?`${t}black IN (SELECT name FROM players WHERE name LIKE ?)`:`${t}black LIKE ?`,u=e(`result`);(u===`1-0`||u===`0-1`||u===`1/2-1/2`)&&(i.push(`${t}result = ?`),a.push(u));let d=Math.max(0,Number(e(`minElo`))||0);d>0&&(i.push(`${t}white_elo >= ? AND ${t}black_elo >= ?`),a.push(d,d));let f=ao(e(`band`));f&&(i.push(`MIN(${t}white_elo, ${t}black_elo) >= ?`),a.push(f.lo),f.hi!==null&&(i.push(`MIN(${t}white_elo, ${t}black_elo) <= ?`),a.push(f.hi)));let p=e(`player`)?.trim(),m=e(`side`);if(p){m===`white`?(i.push(c),a.push(o(p))):m===`black`?(i.push(l),a.push(o(p))):(i.push(`(${c} OR ${l})`),a.push(o(p),o(p)));let n=e(`outcome`);if(n===`drawn`)i.push(`${t}result = '1/2-1/2'`);else if(n===`won`||n===`lost`){let e=n===`won`?`1-0`:`0-1`,r=n===`won`?`0-1`:`1-0`;m===`white`||m===`black`?(i.push(`${t}result = ?`),a.push(m===`white`?e:r)):(i.push(`((${c} AND ${t}result = ?) OR (${l} AND ${t}result = ?))`),a.push(o(p),e,o(p),r))}}let h=e(`player2`)?.trim();h&&(i.push(`(${c} OR ${l})`),a.push(o(h),o(h)));let g=e(`opening`)?.trim();if(g){let e=s(g);i.push(`(${t}opening LIKE ? OR ${t}eco LIKE ?${e?` OR ${e.sql}`:``})`),a.push(o(g),`${g}%`,...e?.binds??[])}let _=e(`event`)?.trim();_&&(i.push(`${t}event LIKE ?`),a.push(o(_)));let v=/^\d{4}-\d{2}-\d{2}$/,y=e(`from`),b=e(`to`);y&&v.test(y)&&(i.push(`REPLACE(${t}date, '.', '-') >= ?`),a.push(y)),b&&v.test(b)&&(i.push(`REPLACE(${t}date, '.', '-') <= ?`),a.push(b));let x=e(`terms`);if(x){let e=[];try{let t=JSON.parse(x);Array.isArray(t)&&(e=t)}catch{}for(let n of e)if(typeof n==`object`&&n){if(n.kind===`player`&&typeof n.value==`string`)i.push(`(${c} OR ${l})`),a.push(o(n.value),o(n.value));else if(n.kind===`white`&&typeof n.value==`string`)i.push(c),a.push(o(n.value));else if(n.kind===`black`&&typeof n.value==`string`)i.push(l),a.push(o(n.value));else if(n.kind===`opening`&&typeof n.value==`string`){let e=s(n.value);i.push(e?`(${t}opening LIKE ? OR ${e.sql})`:`${t}opening LIKE ?`),a.push(o(n.value),...e?.binds??[])}else n.kind===`eco`&&typeof n.value==`string`?(i.push(`${t}eco LIKE ?`),a.push(`${n.value}%`)):n.kind===`event`&&typeof n.value==`string`?(i.push(`${t}event LIKE ?`),a.push(o(n.value))):n.kind===`result`&&typeof n.value==`string`?(i.push(`${t}result = ?`),a.push(n.value)):n.kind===`year`&&typeof n.from==`number`&&typeof n.to==`number`?(i.push(`REPLACE(${t}date, '.', '-') >= ? AND REPLACE(${t}date, '.', '-') <= ?`),a.push(`${n.from}-01-01`,`${n.to}-12-31`)):n.kind===`elo`&&typeof n.lo==`number`&&(i.push(`MIN(${t}white_elo, ${t}black_elo) >= ?`),a.push(n.lo),typeof n.hi==`number`&&(i.push(`MIN(${t}white_elo, ${t}black_elo) <= ?`),a.push(n.hi)))}}return{clauses:i,binds:a}}var Q=null;function lo(){return Q?.running===!0}function uo(e={dir:Ha}){let t=typeof e==`string`?e:null,n=typeof e==`string`?null:e.dir,r=new Map,i=new Map,o=e=>t??K(n,`${e}.sqlite`),s=()=>{if(t)return I(t)?[``]:[];try{return A(n).filter(e=>e.endsWith(`.sqlite`)).map(e=>Ht(e,`.sqlite`)).sort()}catch{return[]}},c=e=>{let n=r.get(e);if(n)return n;let i=o(e);if(!I(i))return null;t||io(i);let a=new Dn(i,{readonly:!0,fileMustExist:!0});return r.set(e,a),a},u=e=>{let t=[];for(let[n,a]of r)(e===void 0||n===e)&&(a.close(),r.delete(n),i.delete(n),t.push(Ba(o(n))));return Promise.all(t).then(()=>void 0)},d=e=>za(o(e.name)),f=e=>async t=>{try{return await e(t)}catch(e){if(Fa(e))return new Response(null,{status:499});throw e}},m=e=>Object.fromEntries(e.prepare(`SELECT key, value FROM meta`).all().map(e=>[e.key,e.value])),h=(e,t)=>{let n=i.get(e);if(n===void 0){let r=t.prepare(`SELECT value FROM meta WHERE key = 'games'`).get();n=Number(r?.value)||t.prepare(`SELECT COUNT(*) AS n FROM games`).get().n,i.set(e,n)}return n},g=e=>{let n=s();if(n.length===0)return null;let r=t?void 0:e.req.query(`db`),i=r!==void 0&&$a.test(r)&&n.includes(r)?r:n[0],a=c(i);return a?{name:i,db:a}:null},_=new G;if(n===Ha){let e=e=>{if(!e.toLowerCase().endsWith(`.pgn`)||e.includes(`/`)||e.includes(`\\`))return null;let t=K(Zt),n=K(t,e);return n.startsWith(t+`/`)&&I(n)?n:null},t=(e,t,n,r,i,a)=>{Q=e;let o=vi(),s=K(X,`server`,t),[c,l]=o?[o,i]:[process.execPath,I(s)?[s,...r]:[`--import`,`tsx`,n,...r]],u=!1,d=t=>{u||(u=!0,e.running=!1,e.exitCode=t,e.child=null,a(t))},f;try{f=(0,sn.spawn)(c,l,{cwd:X,stdio:[`ignore`,`pipe`,`pipe`]})}catch(t){e.log.push(`could not start the job: ${t.message}`),d(-1);return}e.child=f;let p=t=>{for(let n of t.toString().split(`
`))n.trim()&&(e.log.push(n),e.lineAt=Date.now());e.log.length>100&&e.log.splice(0,e.log.length-100)};f.stdout.on(`data`,p),f.stderr.on(`data`,p),f.on(`error`,t=>{e.log.push(`could not start the job: ${t.message}`),d(-1)}),f.on(`close`,d)},r=(e,n,r)=>{let i={kind:`build`,name:e,startedAt:Date.now(),running:!0,exitCode:null,log:[],lineAt:Date.now(),stopped:!1,child:null};r&&u(e),t(i,`build-refgames.mjs`,`scripts/build-refgames.ts`,[...n,`--name`,e,...r?[`--append`]:[]],[`build`,...n,`--name`,e,...r?[`--append`]:[],`--data`,$t],async t=>{await u(e);let n=`${o(e)}.building`;if(!r&&t===0&&I(n))try{Wt(n,o(e))}catch{i.log.push(`could not swap in the new database — rebuild after a restart`)}if(!r&&i.stopped)for(let e of[n,`${n}-wal`,`${n}-shm`,`${n}-journal`])L(e,{force:!0})})};_.post(`/refgames/build`,async t=>{if(Q?.running)return t.json({error:`a build is already running`},409);let i=await t.req.json().catch(()=>null),a=i?.sources??(()=>{try{return A(Zt).filter(e=>e.toLowerCase().endsWith(`.pgn`))}catch{return[]}})();if(a.length===0)return t.json({error:`no PGN files to index`},400);let s=[];for(let n of a){let r=e(n);if(!r)return t.json({error:`invalid or missing source: ${n}`},400);s.push(r)}let c=a.length===1?a[0].replace(/\.pgn$/i,``):`refgames`,l=i?.name??($a.test(c)?c:`refgames`);if(!$a.test(l))return t.json({error:`invalid database name`},400);let u=i?.mode===`append`;return u&&!I(o(l))?t.json({error:`no such database to add to`},400):(M(n,{recursive:!0}),r(l,s,u),t.json({started:!0,name:l,mode:u?`append`:`replace`}))}),_.post(`/refgames/optimize`,async e=>{if(Q?.running)return e.json({error:`a build is already running`},409);let n=(await e.req.json().catch(()=>null))?.db??s()[0];if(!n||!$a.test(n)||!s().includes(n))return e.json({error:`no such database`},400);let r={kind:`optimize`,name:n,startedAt:Date.now(),running:!0,exitCode:null,log:[],lineAt:Date.now(),stopped:!1,child:null};return u(n),t(r,`optimize-refgames.mjs`,`scripts/optimize-refgames.ts`,[n],[`optimize`,n,`--data`,$t],()=>void u(n)),e.json({started:!0,name:n})}),_.post(`/refgames/index-positions`,async e=>{if(Q?.running)return e.json({error:`a build is already running`},409);let n=(await e.req.json().catch(()=>null))?.db??s()[0];return!n||!$a.test(n)||!s().includes(n)?e.json({error:`no such database`},400):(t({kind:`index`,name:n,startedAt:Date.now(),running:!0,exitCode:null,log:[],lineAt:Date.now(),stopped:!1,child:null},`index-refgames-positions.mjs`,`scripts/index-refgames-positions.ts`,[n],[`index`,n,`--data`,$t],()=>void u(n)),e.json({started:!0,name:n}))});let i=/positions: (\d+)% ([^—…]+?)\s*(?:—|…)/,a=e=>{for(let t=e.length-1;t>=0;--t){let n=i.exec(e[t]);if(n)return{label:n[2],percent:Number(n[1])}}return null},c=/([\d,]+) of ([\d,]+) games/,l=e=>{for(let t=e.length-1;t>=0;--t){let n=c.exec(e[t]);if(n)return{done:Number(n[1].replaceAll(`,`,``)),total:Number(n[2].replaceAll(`,`,``))}}return null};_.post(`/refgames/build/stop`,e=>!Q?.running||!Q.child?e.json({error:`no build is running`},409):(Q.stopped=!0,Q.log.push(`stopped from the app`),Q.lineAt=Date.now(),Q.child.kill(),e.json({stopped:!0,name:Q.name}))),_.get(`/refgames/build/status`,e=>e.json(Q?{running:Q.running,kind:Q.kind,name:Q.name,exitCode:Q.exitCode,stopped:Q.stopped,seconds:(Date.now()-Q.startedAt)/1e3,progress:l(Q.log),phase:a(Q.log),quietSeconds:(Date.now()-Q.lineAt)/1e3,log:Q.log.slice(-15)}:{running:!1})),_.delete(`/refgames/:name`,async e=>{let t=e.req.param(`name`);return $a.test(t)?Q?.running&&Q.name===t?e.json({error:`that database is being built right now`},409):I(o(t))?(await u(t),ja(o(t)),L(o(t)),e.json({deleted:t})):e.json({error:`no such database`},404):e.json({error:`invalid database name`},400)})}_.post(`/refgames/fast-scan`,async e=>{let n=await e.req.json().catch(()=>null);if(!n||typeof n.on!=`boolean`)return e.json({error:`expected db & on`},400);let r=t?``:n.db??``;if(!t&&(!$a.test(r)||!s().includes(r)))return e.json({error:`no such database`},404);let i=o(r),a=c(r);if(!a)return e.json({error:`no such database`},503);let l=m(a);if(n.on&&l.scan_pack!==`1`)return e.json({error:`this database has no scan index yet, re-run Index positions`},409);let u=new Dn(i);try{u.pragma(`busy_timeout = 30000`),n.on?u.prepare(`INSERT OR REPLACE INTO meta (key, value) VALUES ('fast_scan', '1')`).run():u.prepare(`DELETE FROM meta WHERE key = 'fast_scan'`).run()}finally{u.close()}if(n.on)try{let{games:t,bytes:n}=await Oa(i);return e.json({on:!0,resident:{games:t,bytes:n}})}catch(t){return console.error(`refgames: could not load the index for ${r}: ${t.message}`),e.json({error:`could not load the index`},500)}return ja(i),e.json({on:!1})}),_.get(`/refgames`,async e=>{if(t){let t=g(e);if(!t)return e.json({ready:!1});let n=m(t.db);return e.json({ready:!0,games:Number(n.games??0),sources:n.sources??``})}let r=s().flatMap(e=>{let t=c(e);if(!t)return[];let n=m(t),r=Na(t);return[{name:e,games:h(e,t),sources:n.sources??``,bytes:N(o(e)).size,builtAt:n.built_at??null,indexed:r.indexed,stale:r.stale,positions:r.plies,packed:n[ua]===`1`,fastScan:n.fast_scan===`1`,resident:Aa(o(e))!==null}]}),i=n===Ha?vi():null;return e.json({ready:r.length>0,native:i!==null&&await Za(i)!==null,databases:r})});let v=(e,t)=>{if(!eo(e)||co(e=>e===`band`?void 0:t(e),`g.`).clauses.length>0)return null;let n=ao(t(`band`)),r=e.prepare(`SELECT 1 FROM pragma_table_info('move_counts') WHERE name = 'eb'`).get()!==void 0,i=t=>e.prepare(`SELECT uci, SUM(w) AS w, SUM(d) AS d, SUM(b) AS b FROM move_counts
         WHERE pos = ?${t} GROUP BY uci
         ORDER BY SUM(w) + SUM(d) + SUM(b) DESC, uci`);if(!n){let t=r?i(``):e.prepare(`SELECT uci, w, d, b FROM move_counts WHERE pos = ? ORDER BY w + d + b DESC, uci`);return e=>t.all(e)}if(!r||n.lo%200!=0||n.hi!==null&&(n.hi+1)%200!=0)return null;if(n.hi===null){let e=i(` AND eb >= ?`),t=n.lo/200;return n=>e.all(n,t)}let a=i(` AND eb BETWEEN ? AND ?`),o=n.lo/200,s=(n.hi+1)/200-1;return e=>a.all(e,o,s)},y=(e,t)=>{if(!to(e)||!eo(e)||co(e=>e===`band`?void 0:t(e),`g.`).clauses.length>0)return null;let n=ao(t(`band`)),r=``,i=[];if(n){if(n.lo%200!=0||n.hi!==null&&(n.hi+1)%200!=0)return null;i.push(n.lo/200),n.hi===null?r=` AND t.eb >= ?`:(r=` AND t.eb BETWEEN ? AND ?`,i.push((n.hi+1)/200-1))}let a=e.prepare(`SELECT SUM(w + d + b) AS n FROM move_counts WHERE pos = ?`),o=e.prepare(`SELECT t.uci AS uci, g.white, g.black, g.white_elo AS whiteElo,
              g.black_elo AS blackElo, g.result, g.date
       FROM top_games t JOIN games g ON g.id = t.game_id
       WHERE t.pos = ?${r}
       ORDER BY t.elo DESC, t.game_id DESC
       LIMIT 8`);return e=>(a.get(e).n??0)>=5e3?o.all(e,...i):null},b=e=>{if(!e)return{plyCount:0,sanPrefix:null};let t=e.split(` `);return{plyCount:t.length,sanPrefix:t.slice(0,24).join(` `)}},x=e=>{let t=Kn();if(!t)return null;let n=p.default(),r=null,i=e.split(` `);for(let e=0;e<i.length&&e<24;e+=1){let a=w(n,i[e]);if(!a)break;n.play(a);let o=t[z(n.toSetup()).toString(16)];o&&(r={eco:o[0],name:o[1]})}return r},S=1e4;_.get(`/refgames/suggest`,f(async e=>{let t=g(e);if(!t)return e.json({names:[]});let n=(e.req.query(`q`)??``).trim(),r=e.req.raw.signal;if(e.req.query(`field`)===`event`){if(!ro(t.db))return e.json({names:[]});let i=await(n?d(t).all(`SELECT event AS name, games FROM events WHERE event LIKE ? ORDER BY games DESC LIMIT 50`,[`%${n}%`],r):d(t).all(`SELECT event AS name, games FROM events ORDER BY games DESC LIMIT 50`,[],r));return e.json({names:i})}if(!no(t.db))return e.json({names:[]});let i=await(n?d(t).all(`SELECT name, games FROM players WHERE name LIKE ? AND name <> '?' ORDER BY games DESC LIMIT 50`,[`${n}%`],r):d(t).all(`SELECT name, games FROM players WHERE name <> '?' ORDER BY games DESC LIMIT 50`,[],r));return e.json({names:i})})),_.get(`/refgames/search`,f(async e=>{let t=g(e);if(!t)return e.json({error:`no reference games database`},503);let{name:n,db:r}=t,i=e.req.raw.signal,a=de((e.req.query(`q`)??``).trim()),o=a.text,s=Number(e.req.query(`cursor`))||null,c=no(r),l=Na(r).indexed;if(a.terms.length>16)return e.json({error:`too many search terms`},400);let u=co(t=>t===`terms`?a.terms.length>0?JSON.stringify(a.terms):void 0:e.req.query(t),``,c,l),f=[...u.clauses],p=[...u.binds];if(o){if(c){let t=`%${o}%`,n=r.prepare(`SELECT name, games FROM players WHERE name LIKE ? LIMIT ?`).all(t,201),i=r.prepare(`SELECT DISTINCT opening, games FROM openings WHERE opening IS NOT NULL AND opening LIKE ? LIMIT ?`).all(t,201),a=r.prepare(`SELECT eco, SUM(games) AS games FROM openings WHERE eco IS NOT NULL AND eco LIKE ? GROUP BY eco LIMIT ?`).all(`${o}%`,201);if(n.length===0&&i.length===0&&a.length===0)return e.json({total:s===null?0:null,capped:s!==null&&void 0,nextCursor:null,rows:[]});let c=[...n,...i,...a].reduce((e,t)=>e+t.games,0);if(n.length<=200&&i.length<=200&&a.length<=200&&c<=5e4){let e=[],t=[],r=(n,r)=>{r.length!==0&&(e.push(`SELECT id FROM games WHERE ${n} IN (${r.map(()=>`?`).join(`,`)})`),t.push(...r))};r(`white`,n.map(e=>e.name)),r(`black`,n.map(e=>e.name)),r(`opening`,i.map(e=>e.opening)),r(`eco`,a.map(e=>e.eco)),f.unshift(`id IN (${e.join(` UNION `)})`),p.unshift(...t)}else f.unshift(`(white IN (SELECT name FROM players WHERE name LIKE ?)
              OR black IN (SELECT name FROM players WHERE name LIKE ?)
              OR opening IN (SELECT opening FROM openings WHERE opening LIKE ?)
              OR eco IN (SELECT DISTINCT eco FROM openings WHERE eco LIKE ?))`),p.unshift(t,t,t,`${o}%`)}else f.unshift(`(white LIKE ? OR black LIKE ? OR opening LIKE ? OR eco LIKE ?)`),p.unshift(`%${o}%`,`%${o}%`,`%${o}%`,`${o}%`)}let m=f.length?`WHERE ${f.join(` AND `)}`:``,_=null,v=!1;if(s===null){if(m===``)_=h(n,r);else{let e=(await d(t).get(`SELECT COUNT(*) AS n FROM (SELECT 1 FROM games ${m} LIMIT ?)`,[...p,10001],i)).n;v=e>S,_=v?S:e}}let y=await d(t).all(`SELECT id, white, black, white_elo, black_elo, result, date, event, eco, opening, moves
       FROM games ${m}${m?` AND`:` WHERE`} id < ?
       ORDER BY id DESC LIMIT ${Ua}`,[...p,s??2**53-1],i);return e.json({total:_,capped:s===null?v:void 0,nextCursor:y.length===Ua?y[y.length-1].id:null,rows:y.map(({moves:e,...t})=>{let n={...t,...b(e)};if(n.opening)return n;let r=x(e);return r?{...n,eco:n.eco??r.eco,opening:r.name}:n})})}));let C=(e,t,n,r)=>{let i=`SELECT p.uci AS uci,
                SUM(g.result = '1-0') AS w,
                SUM(g.result = '1/2-1/2') AS d,
                SUM(g.result = '0-1') AS b
         FROM plies p JOIN games g ON g.id = p.game_id
         WHERE p.pos = ?${t}
         GROUP BY p.uci
         ORDER BY w + d + b DESC, p.uci`;return t=>d(e).all(i,[t,...n],r)};return _.get(`/refgames/explore`,f(async e=>{let t=g(e);if(!t)return e.json({error:`no reference games database`},503);let{db:n}=t;if(so(e.req.query(`terms`))>16)return e.json({error:`too many search terms`},400);let r=e.req.query(`fen`)?.trim();if(!r)return e.json({error:`expected fen`},400);let i=l(r);if(i.isErr)return e.json({error:`bad fen`},400);let o=p.fromSetup(i.unwrap());if(o.isErr)return e.json({error:`bad position`},400);let s=o.unwrap();if(!Na(n).indexed)return e.json({indexed:!1,opening:null,games:0,moves:[],topGames:[]});let c=Te(z(s.toSetup())),{clauses:u,binds:f}=co(t=>e.req.query(t),`g.`,no(n),Na(n).indexed),m=u.length?` AND ${u.join(` AND `)}`:``,h=e.req.raw.signal,_=C(t,m,f,h),b=v(n,t=>e.req.query(t)),x=b?b(c):await _(c);x.length===0&&b&&(x=await _(c));let S=x.flatMap(e=>{let t=a(e.uci);return!t||!s.isLegal(t)?[]:[{uci:e.uci,san:T(s,t),w:e.w,d:e.d,b:e.b,total:e.w+e.d+e.b}]}),w=(y(n,t=>e.req.query(t))?.(c)??await d(t).all(`SELECT p.uci AS uci, g.white, g.black, g.white_elo AS whiteElo,
                g.black_elo AS blackElo, g.result, g.date
         FROM plies p JOIN games g ON g.id = p.game_id
         WHERE p.pos = ?${m}
         ORDER BY g.white_elo + g.black_elo DESC, g.id DESC
         LIMIT 8`,[c,...f],h)).filter(e=>{let t=a(e.uci);return t!==void 0&&s.isLegal(t)});return e.json({indexed:!0,opening:Yn(z(s.toSetup()).toString(16)),games:S.reduce((e,t)=>e+t.total,0),moves:S,topGames:w.map(e=>({...e,site:null}))})})),_.post(`/refgames/explore-batch`,f(async e=>{let t=g(e);if(!t)return e.json({error:`no reference games database`},503);let{db:n}=t,r=await e.req.json().catch(()=>null),i=Array.isArray(r?.fens)?r.fens.filter(e=>typeof e==`string`):null;if(!i)return e.json({error:`expected fens`},400);if(i.length>256)return e.json({error:`too many positions`},400);if(so(e.req.query(`terms`))>16)return e.json({error:`too many search terms`},400);if(!Na(n).indexed)return e.json({indexed:!1,positions:[]});let{clauses:o,binds:s}=co(t=>e.req.query(t),`g.`,no(n),Na(n).indexed),c=o.length?` AND ${o.join(` AND `)}`:``,u=C(t,c,s,e.req.raw.signal),d=v(n,t=>e.req.query(t)),f=[];for(let e of i){let t=l(e.trim());if(t.isErr){f.push({fen:e,moves:[]});continue}let n=p.fromSetup(t.unwrap());if(n.isErr){f.push({fen:e,moves:[]});continue}let r=n.unwrap(),i=Te(z(r.toSetup())),o=d?d(i):await u(i);o.length===0&&d&&(o=await u(i));let s=o.flatMap(e=>{let t=a(e.uci);return!t||!r.isLegal(t)?[]:[{uci:e.uci,san:T(r,t),w:e.w,d:e.d,b:e.b,total:e.w+e.d+e.b}]});f.push({fen:e,moves:s})}return e.json({indexed:!0,positions:f})})),_.get(`/refgames/deep-search`,async e=>{let t=g(e);if(!t)return e.json({error:`no reference games database`},503);let{db:r}=t,i=e.req.query(`fen`)?.trim(),a=e.req.query(`match`),s=e.req.query(`material`),c=e.req.query(`motif`);if(s!==void 0&&(i!==void 0||a!==void 0))return e.json({error:`material search takes no fen or match`},400);if(c!==void 0&&(i!==void 0||a!==void 0||s!==void 0))return e.json({error:`motif search takes no fen, match or material`},400);if(a!==void 0&&!ue.includes(a))return e.json({error:`bad match mode`},400);let u=a??`exact`,d=s===void 0?null:ae(s);if(s!==void 0&&d===null)return e.json({error:`bad material spec`},400);let f=c===void 0?null:ra(c);if(c!==void 0&&f===null)return e.json({error:`bad motif spec`},400);let m=null,_,v,y;if(f)_=16,v=16,y=f.stable-1;else if(d){let e=ie(d);_=e.hiW,v=e.hiB,y=d.stable-1}else{if(!i)return e.json({error:`expected fen`},400);let t=l(i);if(t.isErr)return e.json({error:`bad fen`},400);let n=p.fromSetup(t.unwrap());if(n.isErr&&u===`exact`)return e.json({error:`bad position`},400);m=n.isErr?pa(t.unwrap(),u):pa(n.unwrap(),u),u===`structure`?(_=16,v=16,y=0):(_=m.w,v=m.b,y=32-m.w-m.b)}let x=de((e.req.query(`q`)??``).trim()),S=x.text?[...x.terms,{kind:`player`,value:x.text}]:x.terms;if(S.length>16)return e.json({error:`too many search terms`},400);let C=t=>t===`terms`?S.length>0?JSON.stringify(S):void 0:e.req.query(t),{clauses:w,binds:T}=co(C,``,no(r),Na(r).indexed),E=w.length?` AND ${w.join(` AND `)}`:``,ee=r.prepare(`SELECT 1 FROM pragma_table_info('games') WHERE name = 'final_wmen'`).get()!==void 0,D=ee?` AND (final_wmen IS NULL OR final_wmen <= ?)
          AND (final_bmen IS NULL OR final_bmen <= ?)
          AND (ply_count IS NULL OR ply_count >= ?)`:``,te=ee?[_,v,y]:[],O=e=>r.prepare(`SELECT value FROM meta WHERE key = ?`).get(e)?.value,ne=o(t.name),re=Number(O(`indexed_through`)??0)>=(r.prepare(`SELECT MAX(id) AS n FROM games`).get().n??0);if(!d&&!f&&u===`exact`&&re&&O(`key_index`)===`1`){let t=r.prepare(`SELECT entries FROM key_index WHERE bucket = ?`).get(va(m.key32)),n=[];if(t){let e=t.entries,r=e.length/8,{lo:i,hi:a}=ba(m.key32),o=0,s=r;for(;o<s;){let t=o+s>>1;e.readBigUInt64LE(t*8)<i?o=t+1:s=t}let c=-1;for(;o<r;o+=1){let t=e.readBigUInt64LE(o*8);if(t>=a)break;let r=ya(t);r!==c&&(n.push(r),c=r)}}let i=null;if(w.length>0){i=new Set;for(let e=0;e<n.length;e+=500){let t=n.slice(e,e+500),a=r.prepare(`SELECT id FROM games WHERE id IN (${t.map(()=>`?`).join(`,`)})${E}`).all(...t,...T);for(let e of a)i.add(e.id)}}let a=i?n.filter(e=>i.has(e)):n,o=r.prepare(`SELECT id, white, black, white_elo, black_elo, result, date, event, eco, opening, moves
         FROM games WHERE id = ?`);return e.header(`Content-Type`,`application/x-ndjson`),e.header(`X-Scan-Path`,`key-index`),Qi(e,async t=>{let n=0,r=0;for(let i of a){if(t.aborted||e.req.raw.signal?.aborted)return;r+=1;let a=o.get(i);if(!a)continue;let s=ma(a.moves,m);if(s===null)continue;n+=1;let{moves:c,...l}=a;if(await t.writeln(JSON.stringify({type:`game`,ply:s,...l,...b(c)})),n>=200)break}await t.writeln(JSON.stringify({type:`done`,scanned:r,total:a.length,matched:n,exhaustive:n<200}))})}let oe=!1;if(!f&&re&&O(`fast_scan`)===`1`&&O(`scan_pack`)===`1`)try{await Oa(ne),oe=Aa(ne)!==null}catch(e){console.error(`deep-search (${t.name}): resident index unavailable: ${e.message}`)}if(oe){let n=null;if(w.length>0){let e=`${O(`indexed_through`)??``}|${O(`indexed_at`)??``}`,t=`${ne}|${E}|${JSON.stringify(T)}`,i=Xa.get(t);i&&i.stamp===e?n=i.ids:(n=new Float64Array(r.prepare(`SELECT id FROM games WHERE 1${E} ORDER BY id`).all(...T).map(e=>e.id)),Xa.set(t,{ids:n,stamp:e}),Xa.size>8&&Xa.delete(Xa.keys().next().value))}let i=n?n.length:h(t.name,r),a=r.prepare(`SELECT id, white, black, white_elo, black_elo, result, date, event, eco, opening, moves
         FROM games WHERE id = ?`);return e.header(`Content-Type`,`application/x-ndjson`),e.header(`X-Scan-Path`,`resident`),Qi(e,async t=>{let r=[],o=0,s=!1,c=!1,l=ka(ne,d?{spec:d}:{target:m},n,{onHits:e=>{for(let t=0;t<e.length;t+=2)r.push({id:e[t],ply:e[t+1]})},onBad:e=>{for(let t of e)r.push({id:t,ply:null})},onProgress:e=>{o=e}});l.done.then(e=>{o=e.scanned,s=!0}).catch(()=>{c=!0,s=!0});let u=0,f=-1;for(;;){if(t.aborted||e.req.raw.signal?.aborted){l.cancel();return}for(;r.length>0&&u<200;){let e=r.shift(),n=a.get(e.id);if(!n)continue;let i=e.ply;if(e.ply===null&&(i=d?ga(n.moves,d):ma(n.moves,m)),i===null)continue;u+=1;let{moves:o,...s}=n;await t.writeln(JSON.stringify({type:`game`,ply:i,...s,...b(o)}))}if(u>=200&&(l.cancel(),r.length=0),s&&r.length===0)break;o!==f&&(f=o,await t.writeln(JSON.stringify({type:`progress`,scanned:o,total:i,matched:u}))),await new Promise(e=>setTimeout(e,15))}c||await t.writeln(JSON.stringify({type:`done`,scanned:o,total:i,matched:u,exhaustive:u<200}))})}let ce=n===Ha?vi():null,le=ce?await Za(ce):null,fe=ce&&le&&le.deep===`hits`&&qa(le,C).length===0?ce:null;if(fe){let n={};for(let e of oo){let t=C(e);t!==void 0&&(n[e]=t)}let a=[`deep-search`,t.name,`--filters`,JSON.stringify(n),`--data`,$t];f?a.push(`--motif`,ia(f)):d?a.push(`--material`,se(d)):(a.push(`--fen`,i),u!==`exact`&&a.push(`--match`,u));let o=r.prepare(`SELECT id, white, black, white_elo, black_elo, result, date, event, eco, opening, moves
         FROM games WHERE id = ?`);return e.header(`Content-Type`,`application/x-ndjson`),e.header(`X-Scan-Path`,`native`),Qi(e,n=>new Promise(r=>{let i;try{i=(0,sn.spawn)(fe,a,{cwd:X,stdio:[`ignore`,`pipe`,`pipe`]})}catch(e){console.error(`deep-search (${t.name}): could not start ${fe}: ${e.message}`),r();return}let s=()=>{i.kill()};e.req.raw.signal?.addEventListener(`abort`,s),n.onAbort(s);let c=0,l=0,u=``,p=Promise.resolve(),h=async e=>{let r;try{r=JSON.parse(e)}catch{console.error(`deep-search (${t.name}): unparseable frame from ${fe}: ${e.slice(0,120)}`);return}if(r.type===`hit`){if(c>=200)return;let e=o.get(r.id);if(!e){l+=1,console.error(`deep-search (${t.name}): native hit on a game that is not there: ${r.id}`);return}let i=f?_a(e.moves,f):d?ga(e.moves,d):ma(e.moves,m);if(i!==r.ply&&(l+=1,console.error(`deep-search (${t.name}): native and the reference replay disagree on game ${r.id}: native ply ${r.ply}, replay ${i??`no hit`} — streaming the replay's answer`)),i===null)return;c+=1;let{moves:a,...s}=e;await n.writeln(JSON.stringify({type:`game`,ply:i,...s,...b(a)}))}else r.type===`progress`?await n.writeln(JSON.stringify({type:`progress`,scanned:r.scanned,total:r.total,matched:c})):r.type===`done`&&await n.writeln(JSON.stringify({type:`done`,scanned:r.scanned,total:r.total,matched:c,exhaustive:r.exhaustive}))};i.stdout.on(`data`,e=>{u+=e.toString();let t=u.split(`
`);u=t.pop();for(let e of t)e&&(p=p.then(()=>h(e)).catch(s))}),i.stderr.on(`data`,e=>{let n=e.toString().trim();n&&console.error(`deep-search (${t.name}): ${n}`)});let g=!1,_=i=>{g||(g=!0,e.req.raw.signal?.removeEventListener(`abort`,s),i!==0&&i!==null&&!n.aborted&&console.error(`deep-search (${t.name}): exited with code ${i}`),p.then(()=>u.trim()?h(u.trim()):void 0).catch(()=>{}).then(()=>{l>0&&console.error(`deep-search (${t.name}): ${l} native hit(s) overruled by the reference replay — the binary and the JS scanner disagree; run npm run fuzz:parity`),r()}))};i.on(`error`,e=>{console.error(`deep-search (${t.name}): could not start ${fe}: ${e.message}`),_(-1)}),i.on(`close`,_)}))}let pe=r.prepare(`SELECT COUNT(*) AS n FROM games WHERE 1${D}${E}`).get(...te,...T).n,me=r.prepare(`SELECT id, white, black, white_elo, black_elo, result, date, event, eco, opening, moves
       FROM games
       WHERE id > ?${D}${E}
       ORDER BY id LIMIT 1000`);return e.header(`Content-Type`,`application/x-ndjson`),e.header(`X-Scan-Path`,`replay`),Qi(e,async t=>{let n=0,r=0,i=0;for(;;){if(t.aborted||e.req.raw.signal?.aborted)return;let a=me.all(n,...te,...T);if(a.length===0)break;for(let e of a){r+=1;let n=f?_a(e.moves,f):d?ga(e.moves,d):ma(e.moves,m);if(n!==null){i+=1;let{moves:r,...a}=e;await t.writeln(JSON.stringify({type:`game`,ply:n,...a,...b(r)}))}if(i>=200)break}if(n=a.at(-1).id,await t.writeln(JSON.stringify({type:`progress`,scanned:r,total:pe,matched:i})),i>=200)break;await new Promise(e=>setImmediate(e))}await t.writeln(JSON.stringify({type:`done`,scanned:r,total:pe,matched:i,exhaustive:i<200}))})}),_.get(`/refgames/find`,f(async e=>{let n=s();if(n.length===0)return e.json({error:`no reference games database`},503);let{white:r,black:i,date:a,result:o}=e.req.query();if(!r||!i)return e.json({error:`expected white & black`},400);for(let s of n){if(!c(s))continue;let n=await d({name:s}).get(`SELECT id FROM games
         WHERE white = ? AND black = ? AND (? IS NULL OR date = ?) AND (? IS NULL OR result = ?)
         LIMIT 1`,[r,i,a??null,a??null,o??null,o??null],e.req.raw.signal);if(n)return e.json(t?{id:n.id}:{id:n.id,db:s})}return e.json({error:`not indexed`},404)})),_.get(`/refgames/:id/pgn`,e=>{let t=g(e);if(!t)return e.json({error:`no reference games database`},503);let n=t.db.prepare(`SELECT * FROM games WHERE id = ?`).get(Number(e.req.param(`id`)));if(!n)return e.json({error:`unknown game`},404);let r=(e,t)=>t?`[${e} "${t.replace(/"/g,``)}"]\n`:``,i=r(`Event`,n.event)+r(`White`,n.white)+r(`Black`,n.black)+r(`WhiteElo`,n.white_elo?String(n.white_elo):null)+r(`BlackElo`,n.black_elo?String(n.black_elo):null)+r(`Date`,n.date)+r(`ECO`,n.eco)+r(`Opening`,n.opening??x(n.moves)?.name??null)+r(`Result`,n.result)+`\n${n.moves} ${n.result}\n`;return e.json({pgn:i})}),Object.assign(_,{closeDb:async()=>{await u(),Ma()}})}var fo=new Set([`study`,`note`,`game`]),po=5e3,mo=1e6,ho=(e,t)=>typeof e==`string`&&e.length>0&&e.length<=t,go=e=>{if(typeof e!=`object`||!e)return!1;let t=e;return fo.has(t.kind)&&ho(t.id,512)&&(t.chapter===void 0||ho(t.chapter,200))},_o=(e,t)=>{if(typeof e!=`object`||!e)return-1;let n=e;if(!ho(n.id,32)||(t?n.san!==void 0:!ho(n.san,12))||n.name!==void 0&&!ho(n.name,200)||n.note!==void 0&&(typeof n.note!=`string`||n.note.length>2e3)||n.depth!==void 0&&(typeof n.depth!=`number`||!Number.isFinite(n.depth))||n.tags!==void 0&&!(Array.isArray(n.tags)&&n.tags.every(go))||!Array.isArray(n.children))return-1;let r=1;for(let e of n.children){let t=_o(e,!1);if(t<0)return-1;r+=t}return r},vo=new Set([`__proto__`,`constructor`,`prototype`]),yo=(e,t)=>vo.has(e)?void 0:t,bo=e=>{if(typeof e!=`object`||!e)return!1;let t=e;if(t.version!==1||!Array.isArray(t.maps))return!1;let n=0;for(let e of t.maps){let t=e;if(typeof t!=`object`||!t||!ho(t.id,32)||t.color!==`white`&&t.color!==`black`||t.name!==void 0&&!ho(t.name,200))return!1;let r=_o(t.root,!0);if(r<0)return!1;n+=r}return n<=po};function xo(e,t,n){let r=K(e,`map.json`),i;try{i=JSON.parse(P(r,`utf-8`))}catch{return}if(!Array.isArray(i?.maps))return;let a=!1,o=e=>n.folder?e.startsWith(`${n.from}/`)?`${n.to}${e.slice(n.from.length)}`:e:e===n.from?n.to:e,s=e=>{for(let n of e.tags??[]){if(n.kind!==t)continue;let e=o(n.id);e!==n.id&&(n.id=e,a=!0)}for(let t of e.children??[])s(t)};for(let e of i.maps)e?.root&&s(e.root);a&&q(r,`${JSON.stringify(i,null,2)}\n`)}function So(e=K(Z,`repertoire`)){let t=K(e,`map.json`),n=new G;return n.get(`/openingmap`,e=>{let n;try{n=P(t,`utf-8`)}catch{return e.json({version:1,maps:[]})}try{return e.json(JSON.parse(n))}catch{return e.json({error:`map.json is damaged; fix or remove it`},500)}}),n.put(`/openingmap`,async n=>{let r=await n.req.text().then(e=>JSON.parse(e,yo)).catch(()=>null);if(!bo(r))return n.json({error:`not a valid opening map document`},400);let i=JSON.stringify(r,null,2);return i.length>mo?n.json({error:`map too large`},400):(M(e,{recursive:!0}),q(t,`${i}\n`),n.json({ok:!0}))}),n}var Co=new Set([`hit`,`miss`,`gap`]),wo=(e,t)=>Array.isArray(e)&&e.length<=t&&e.every(e=>typeof e==`string`&&e.length<=12);function To(e=K(Z,`repertoire`)){let t=K(e,`history.jsonl`),n=()=>{let e;try{e=P(t,`utf-8`)}catch{return[]}return e.trimEnd().split(`
`).flatMap(e=>{try{let t=JSON.parse(e);return typeof t?.study==`string`&&typeof t?.key==`string`&&Co.has(t?.result)?[t]:[]}catch{return[]}})},r=new G;r.post(`/repertoire/attempt`,async n=>{let r=await n.req.json().catch(()=>null);if(!r||typeof r.study!=`string`||typeof r.chapter!=`string`||typeof r.key!=`string`||!Co.has(r.result))return n.json({error:`expected { study, chapter, key, result }`},400);if(r.study.length>400||r.chapter.length>400||r.key.length>200)return n.json({error:`study, chapter or key is too long`},400);let i={study:r.study,chapter:r.chapter,key:r.key,result:r.result,...wo(r.path,200)&&{path:r.path},...wo(r.expected,16)&&{expected:r.expected},...typeof r.played==`string`&&r.played.length<=12&&{played:r.played},at:new Date().toISOString()};return M(e,{recursive:!0}),Se(t,`${JSON.stringify(i)}\n`),n.json({ok:!0})});let i=e=>{let t=new Map,r=new Map,i=new Map;for(let a of n()){if(!e(a))continue;let n=`${a.chapter}\n${a.key}`;if(t.set(n,a),a.result===`gap`)continue;let o=r.get(n)??[];o.push({win:a.result===`hit`,...a.at?{at:a.at}:{}}),r.set(n,o),a.result===`miss`&&i.set(n,a)}let a=e=>({chapter:e.chapter,key:e.key,path:e.path??[],expected:e.expected??[],played:e.played}),o=new Date().toISOString(),s=[];for(let[e,n]of r){if(t.get(e)?.result===`gap`)continue;let r=fe(n);r!==null&&s.push({due:r,entry:i.get(e)??t.get(e),fumbled:t.get(e).result===`miss`})}s.sort((e,t)=>e.due<t.due?-1:+(e.due>t.due));let c=s.filter(e=>e.due<=o),l=[...t.values()];return{attempted:l.length,due:c.length,review:[...c,...s.filter(e=>e.due>o&&e.fumbled)].slice(0,100).map(e=>({...a(e.entry),due:e.due})),scheduled:s.filter(e=>e.due>o&&!e.fumbled).length,nextDue:s.find(e=>e.due>o)?.due??null,gaps:l.filter(e=>e.result===`gap`).slice(-100).map(a)}};return r.get(`/repertoire/summary`,e=>{let t=e.req.query(`study`);if(!t)return e.json({error:`study is required`},400);let n=e.req.query(`chapter`)||null;return e.json(i(e=>e.study===t&&(!n||e.chapter===n)))}),r.get(`/repertoire/meta`,e=>{let{attempted:t,due:n,scheduled:r,nextDue:a}=i(()=>!0);return e.json({attempted:t,due:n,scheduled:r,nextDue:a})}),r.post(`/repertoire/reset`,e=>(L(t,{force:!0}),e.json({ok:!0}))),r}function Eo(e){let{body:t}=De(e);return t.replace(/^```chess[^\n]*\n[\s\S]*?^```[^\n]*$/gm,``).replace(/^```[^\n]*$/gm,``).replace(/!\[([^\]\n]{0,300})\]\([^)\n]{0,2000}\)/g,`$1`).replace(/\[\[([^\]|]*)\|([^\]]*)\]\]/g,`$2`).replace(/\[\[([^\]]*)\]\]/g,`$1`).replace(/\[([^\]\n]{0,300})\]\([^)\n]{0,2000}\)/g,`$1`).replace(/^[ \t]*#{1,6}[ \t]+/gm,``).replace(/^[ \t]*>[ \t]?/gm,``).replace(/^[ \t]*(?:[-*+]|\d+[.)])[ \t]+/gm,``).replace(/^[ \t]*(?:-{3,}|\*{3,}|_{3,})[ \t]*$/gm,``).replace(/(\*\*|__|~~|`)/g,``).replace(/(^|[^\w*])\*(?=\S)/g,`$1`).replace(/(?<=\S)\*(?=[^\w*]|$)/g,``).replace(/[ \t]+/g,` `).replace(/\s*\n\s*/g,`
`).trim()}var Do=24,Oo=96,ko=[`studies`,`notes`,`games`,`books`,`puzzlebooks`],Ao=e=>e.normalize(`NFC`).toLowerCase();function jo(e){return Ao(e).split(/\s+/).filter(e=>e.length>0)}function Mo(e,t){let n=[];for(let r of t){let t=e.indexOf(r);if(t<0)return null;n.push(t)}return n}function No(e,t){let n=0;for(let r of t){let t=e.indexOf(r);for(;t>=0&&n<100;)n+=1,t=e.indexOf(r,t+r.length)}return n}function Po(e,t,n,r){let i=e.length===t.length?e:t,a=Math.max(0,n-Do),o=Math.min(i.length,n+r+Oo);if(a>0){let e=i.indexOf(` `,a);e>=0&&e<n&&(a=e+1)}if(o<i.length){let e=i.lastIndexOf(` `,o);e>n+r&&(o=e)}let s=e=>e.replace(/\s+/g,` `);return{before:(a>0?`…`:``)+s(i.slice(a,n)).trimStart(),match:s(i.slice(n,n+r)),after:s(i.slice(n+r,o)).trimEnd()+(o<i.length?`…`:``)}}function Fo(e,t){let n=jo(t),r=Ao(t).trim(),i=(e,t)=>ko.indexOf(e.section)-ko.indexOf(t.section);if(n.length===0)return{names:[...e].sort((e,t)=>i(e,t)||e.title.localeCompare(t.title)).map(({section:e,id:t,title:n})=>({section:e,id:t,title:n})),content:[]};let a=[],o=new Set;for(let t of e){let e=Ao(t.title),i=Mo(e,n);i&&(a.push({entry:t,prefix:e.startsWith(r),at:Math.min(...i)}),o.add(`${t.section}:${t.id}`))}a.sort((e,t)=>Number(t.prefix)-Number(e.prefix)||e.at-t.at||e.entry.title.length-t.entry.title.length||i(e.entry,t.entry)||e.entry.title.localeCompare(t.entry.title));let s=[];for(let t of e){if(o.has(`${t.section}:${t.id}`)||t.parts.length===0)continue;let e=t.parts.map(e=>Ao(e.text)),r=e.join(`
`);if(!Mo(r,n))continue;let i=n[0],a=e.findIndex(e=>e.includes(i));a<0&&(a=0);let c=t.parts[a],l=e[a].indexOf(i),u=c.chapter;s.push({hit:{section:t.section,id:t.id,title:t.title,snippet:Po(c.text,e[a],l,i.length),...u===void 0?{}:{chapter:u}},count:No(r,n),at:e.slice(0,a).reduce((e,t)=>e+t.length+1,0)+l})}return s.sort((e,t)=>t.count-e.count||e.at-t.at||e.hit.title.localeCompare(t.hit.title)),{names:a.slice(0,50).map(({entry:{section:e,id:t,title:n}})=>({section:e,id:t,title:n})),content:s.slice(0,20).map(e=>e.hit)}}function Io(e,t,n){let r;try{r=A(t,{recursive:!0,encoding:`utf-8`})}catch{return[]}let i=[];for(let a of r){if(!a.endsWith(n))continue;let r=K(t,a);try{let t=N(r);if(!t.isFile())continue;i.push({section:e,id:a.slice(0,-n.length).split(`/`).join(`/`),path:r,mtimeMs:t.mtimeMs,size:t.size})}catch{continue}}return i}function Lo(e,t){let n;try{n=A(t,{encoding:`utf-8`})}catch{return[]}let r=[];for(let i of n){if(i.startsWith(`.`))continue;let n=K(t,i,`book.json`);try{let t=N(n);if(!t.isFile())continue;r.push({section:e,id:i,path:n,mtimeMs:t.mtimeMs,size:t.size})}catch{continue}}return r}function Ro(e){let t;try{t=P(e.path,`utf-8`)}catch{return null}let n={section:e.section,id:e.id,mtimeMs:e.mtimeMs,size:e.size};if(e.section===`books`||e.section===`puzzlebooks`){let r=e.id;try{let e=JSON.parse(t);typeof e.title==`string`&&e.title.trim()&&(r=e.title.trim())}catch{}return{...n,title:r,parts:[]}}if(e.section===`notes`){let r=Eo(t);return{...n,title:e.id,parts:r?[{text:r}]:[]}}let r=new Map;for(let e of te(t)){let t=E(e.text).replace(/\[\[([^\]|]*)\|([^\]]*)\]\]/g,`$2`).replace(/\[\[([^\]]*)\]\]/g,`$1`);if(!t)continue;let n=r.get(e.chapter);n?n.push(t):r.set(e.chapter,[t])}let i=[...r.entries()].sort((e,t)=>e[0]-t[0]).map(([e,t])=>({chapter:e,text:t.join(` `)}));return{...n,title:e.id,parts:i}}var zo=1;function Bo(e,t){let n=null,r=(e,t)=>`${e}:${t}`,i=()=>{if(n)return n;n=new Map;let e=J(t,null);if(e&&e.version===zo&&Array.isArray(e.entries))for(let t of e.entries)n.set(r(t.section,t.id),t);return n},a=()=>[...e.studies?Io(`studies`,e.studies,`.pgn`):[],...e.notes?Io(`notes`,e.notes,`.md`):[],...e.games?Io(`games`,e.games,`.pgn`):[],...e.books?Lo(`books`,e.books):[],...e.puzzleBooks?Lo(`puzzlebooks`,e.puzzleBooks):[]],o=e=>{try{M(Vt(t),{recursive:!0}),Y(t,{version:zo,entries:[...e.values()]})}catch{}},s=()=>{let e=i(),t=new Set,n=!1;for(let i of a()){let a=r(i.section,i.id);t.add(a);let o=e.get(a);if(o&&o.mtimeMs===i.mtimeMs&&o.size===i.size)continue;let s=Ro(i);s?e.set(a,s):e.delete(a),n=!0}for(let r of[...e.keys()])t.has(r)||(e.delete(r),n=!0);return n&&o(e),[...e.values()]};return{current:s,search:e=>Fo(s(),e)}}function Vo(e,t){let n=new G,r=Bo(e,t);return n.get(`/search`,e=>e.json(r.search(e.req.query(`q`)??``))),n}var Ho=20971520;function Uo(e){let t=[...e.matchAll(/^\[Event\s+"([^"]*)"\]/gm)].map(e=>e[1].trim()),n=t.length||+!!e.trim(),r=[...e.matchAll(/^\[ChapterName\s+"([^"]*)"\]/gm)].map(e=>e[1].trim()),i=r.length===t.length&&r.length>0?r:t;if(i===t&&t.length>0){let e=t.map(e=>{let t=e.indexOf(`:`);return t===-1?null:e.slice(0,t).trim()});e[0]&&e.every(t=>t===e[0])&&(i=t.map(e=>e.slice(e.indexOf(`:`)+1).trim()))}let a=i.filter(e=>e&&e!==`?`);return a.every(e=>/^Chapter \d+$/.test(e))?{count:n,names:[]}:{count:n,names:a.slice(0,4)}}var Wo=8192,Go=`rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1`;function Ko(e){return e?e.split(` `)[0]===Go.split(` `)[0]?null:e:null}function qo(e){let t=/^\[Aliases\s+"([^"]*)"\]/m.exec(e),n=t?Ee(t[1]):[];return n.length?{aliases:n}:{}}function Jo(e){let t=e.findIndex(e=>e.trim()==="```chess");if(t<0)return null;let n=e.findIndex((e,n)=>n>t&&e.trim().startsWith("```"));if(n<0)return null;let r=Ae(e.slice(t+1,n).join(`
`));return r===null?null:Ko(O(r))}function Yo(e){let t=!1;for(let n of e){let e=n.trim();if(e.startsWith("```")||e.startsWith(`~~~`)){t=!t;continue}if(t||!e||e.startsWith(`#`)||e.startsWith(`---`)||e.startsWith(`===`))continue;let r=e.replace(/^[-*+>]\s+/,``).replace(/^\d+[.)]\s+/,``).replace(/!?\[([^\]]*)\]\([^)]*\)/g,`$1`).replace(/[*_`]/g,``).trim();if(r)return r.length>140?`${r.slice(0,139)}…`:r}return null}function Xo(e,t){let n=e.indexOf(`[Event `,1),r=n>0?e.slice(0,n):e;return!(n>0||t<Wo)&&!/\s(\*|1-0|0-1|1\/2-1\/2)\s*$/.test(r.trimEnd())?null:Ko(O(r))}function Zo(e){let{front:t,body:n}=De(e),r=n.split(`
`),i=Oe(t);return{excerpt:Yo(r),fen:Jo(r),...i.length?{aliases:i}:{}}}function Qo(e=Jt,t=`studies`,n=`.pgn`,r={}){M(e,{recursive:!0});let i=new G,a=t=>K(e,`${t}${n}`),o=t=>{let r=t.lastIndexOf(`/`);return K(e,r<0?``:t.slice(0,r),`.${r<0?t:t.slice(r+1)}${n}.swp`)},s=e=>{let t=o(e);try{let e=N(t);return{draft:P(t,`utf-8`),draftAt:e.mtime.toISOString()}}catch{return null}},c=e=>{try{L(o(e))}catch{}},l=new Map,u=(e,t)=>{let n=l.get(e);if(n&&n.mtimeMs===t)return n.info;let r=Uo(P(e,`utf-8`));return l.set(e,{mtimeMs:t,info:r}),r},d=new Map,f=(e,t)=>{let r=d.get(e);if(r&&r.mtimeMs===t)return r.preview;let i={excerpt:null,fen:null};try{let t=k(e,`r`);try{let e=Buffer.alloc(Wo),r=xe(t,e,0,Wo,0),a=e.subarray(0,r).toString(`utf-8`);i=n===`.md`?Zo(a):{excerpt:null,fen:Xo(a,r),...qo(a)}}finally{be(t)}}catch{}return d.set(e,{mtimeMs:t,preview:i}),i},p=K(e,`.bookmarks.json`),m=K(e,`.pins.json`),g=()=>{for(let e of[p,m])try{let t=JSON.parse(P(e,`utf-8`));if(Array.isArray(t.ids))return t.ids}catch{}return[]},_=e=>{q(p,`${JSON.stringify({ids:e},null,2)}\n`)},v=(e,t)=>{let n=g(),r=n.indexOf(e);r<0||(t===null?n.splice(r,1):n[r]=t,_(n))};i.get(`/${t}/bookmarks`,e=>e.json({ids:g()})),i.post(`/${t}/bookmarks/toggle`,async e=>{let t=(await e.req.json().catch(()=>null))?.id?.trim();if(!t||!h(t))return e.json({error:`invalid study id`},400);let n=g(),r=n.indexOf(t),i=r<0;return i&&!I(a(t))?e.json({error:`no such study`},404):(i?n.unshift(t):n.splice(r,1),_(n),e.json({id:t,bookmarked:i}))}),i.get(`/${t}`,t=>{let r=A(e,{recursive:!0,encoding:`utf-8`}),i=[];for(let t of r)try{let n=N(K(e,t));i.push({file:t,isFile:n.isFile(),isDir:n.isDirectory(),size:n.size,mtime:n.mtime})}catch{}let a=i.filter(({file:e,isFile:t})=>t&&e.endsWith(n)).map(({file:t,size:r,mtime:i})=>{let a=K(e,t),o=f(a,i.getTime()),s=n===`.pgn`?u(a,i.getTime()):null;return{id:t.slice(0,-n.length).split(`/`).join(`/`),chapters:s?s.count:1,...s&&s.names.length>0?{chapterNames:s.names}:{},bytes:r,updatedAt:i.toISOString(),...o}}).sort((e,t)=>t.updatedAt.localeCompare(e.updatedAt)),o=i.filter(({isDir:e})=>e).map(({file:e})=>e.split(`/`).join(`/`)).sort();return t.json({studies:a,folders:o})}),i.post(`/${t}/folders`,async t=>{let n=(await t.req.json().catch(()=>null))?.name?.trim();return!n||!h(n)?t.json({error:`invalid folder name`},400):(M(K(e,n),{recursive:!0}),t.json({folder:n}))}),i.post(`/${t}/move`,async e=>{let t=await e.req.json().catch(()=>null),n=t?.from?.trim(),i=t?.to?.trim();if(!n||!i||!h(n)||!h(i))return e.json({error:`invalid study id`},400);if(!I(a(n)))return e.json({error:`no such study`},404);if(I(a(i)))return e.json({error:`a study with that name exists`},409);M(K(a(i),`..`),{recursive:!0}),Wt(a(n),a(i));try{Wt(o(n),o(i))}catch{}return v(n,i),r.onMoved?.(n,i),e.json({moved:i})}),i.post(`/${t}/folders/move`,async t=>{let n=await t.req.json().catch(()=>null),i=n?.from?.trim(),a=n?.to?.trim();if(!i||!a||!h(i)||!h(a))return t.json({error:`invalid folder name`},400);let o=K(e,i);if(!I(o)||!N(o).isDirectory())return t.json({error:`no such folder`},404);let s=K(e,a);if(I(s))return t.json({error:`a folder with that name exists`},409);M(K(s,`..`),{recursive:!0}),Wt(o,s);let c=g(),l=c.map(e=>e.startsWith(`${i}/`)?`${a}${e.slice(i.length)}`:e);return l.some((e,t)=>e!==c[t])&&_(l),r.onFolderMoved?.(i,a),t.json({moved:a})}),i.delete(`/${t}/folders/:name{.+}`,t=>{let n=t.req.param(`name`);if(!h(n))return t.json({error:`invalid folder name`},400);let r=K(e,n);if(!I(r)||!N(r).isDirectory())return t.json({error:`no such folder`},404);let i=A(r);if(i.some(e=>!e.endsWith(`.swp`)))return t.json({error:`folder is not empty, move or delete its studies first`},409);for(let e of i)L(K(r,e));return ge(r),t.json({deleted:n})}),i.get(`/${t}/:id{.+}`,e=>{let t=e.req.param(`id`);if(!h(t))return e.json({error:`invalid study id`},400);let n=a(t);if(!I(n))return e.json({error:`no such study`},404);let r=P(n,`utf-8`),i=s(t);return i&&i.draft===r?(c(t),e.json({id:t,pgn:r})):e.json({id:t,pgn:r,...i??{}})}),i.post(`/${t}`,async e=>{let t=await e.req.json().catch(()=>null),r=t?.name?.trim();if(!r||!h(r))return e.json({error:`study name must be letters, digits, spaces, _ . - (use / for a folder)`},400);if(typeof t?.pgn==`string`&&Buffer.byteLength(t.pgn)>Ho)return e.json({error:`study too large`},413);let i=a(r);if(I(i))return e.json({error:`a study with that name exists`},409);M(K(i,`..`),{recursive:!0});let o=r.split(`/`).at(-1);return j(i,t?.pgn?.trim()?t.pgn:n===`.md`?`# ${o}\n\n`:`[Event "${o}: Chapter 1"]\n[ChapterName "Chapter 1"]\n[Result "*"]\n\n*\n`),e.json({id:r})});let y=e=>e.req.query(`draft`)===`1`;return i.put(`/${t}/:id{.+}`,async e=>{let t=e.req.param(`id`);if(!h(t))return e.json({error:`invalid study id`},400);let n=await e.req.json().catch(()=>null);return typeof n?.pgn==`string`?Buffer.byteLength(n.pgn)>Ho?e.json({error:`study too large`},413):I(a(t))?y(e)?(q(o(t),n.pgn),e.json({parked:t,bytes:n.pgn.length})):(q(a(t),n.pgn),c(t),e.json({saved:t,bytes:n.pgn.length})):e.json({error:`no such study`},404):e.json({error:`missing pgn`},400)}),i.delete(`/${t}/:id{.+}`,e=>{let t=e.req.param(`id`);if(!h(t))return e.json({error:`invalid study id`},400);if(y(e))return c(t),e.json({discarded:t});let n=a(t);return I(n)?(L(n),c(t),v(t,null),e.json({deleted:t})):e.json({error:`no such study`},404)}),i}function $o(e,t={}){let n=t.studies??Jt,r=t.notes??Yt,i=t.games??Xt,a=t.repertoireState??K(Z,`repertoire`),o=Ir(r,n,K(i,`collection`)),s={study:`studies`,note:`notes`,game:`games`},c=e=>({onMoved:(t,n)=>{xo(a,e,{from:t,to:n}),o.moved(t,n)},onFolderMoved:(t,n)=>{xo(a,e,{from:t,to:n,folder:!0}),o.folderMoved(s[e],t,n)}});e.route(`/api`,An(t.sources??Zt,{busy:lo})),e.route(`/api`,$n()),e.route(`/api`,Qo(n,`studies`,`.pgn`,c(`study`))),e.route(`/api`,Qo(K(i,`collection`),`games/docs`,`.pgn`,c(`game`))),e.route(`/api`,Qo(r,`notes`,`.md`,c(`note`))),e.route(`/api`,Lr(r,n,K(i,`collection`))),e.route(`/api`,Vo({notes:r,studies:n,games:K(i,`collection`),books:t.books??K(Z,`books`),puzzleBooks:t.puzzleBooks??K(Z,`puzzlebooks`)},t.searchIndex??rn)),e.route(`/api`,Ar(i,K(i,`..`,`config.json`))),e.route(`/api`,t.myGamesDb?Zr(i,t.myGamesDb,void 0,t.myGamesAnalysisDb):Zr(i)),e.route(`/api`,t.puzzlesDb||t.puzzlesState?_i(t.puzzlesDb??en,t.puzzlesState??K(Z,`puzzles`)):_i()),e.route(`/api`,Ji(t.tablebase??null)),e.route(`/api`,t.refgamesDb?uo(t.refgamesDb):uo()),e.route(`/api`,To(a)),e.route(`/api`,So(a))}var es=K(Z,`books`),ts=()=>`b${[...globalThis.crypto.getRandomValues(new Uint8Array(8))].map(e=>e.toString(16).padStart(2,`0`)).join(``)}`,ns=e=>/^b[0-9a-f]{16}$/.test(e);function rs(e,t=es){return ns(e)&&I(K(t,e,`book.pdf`))}var is=K(Z,`puzzlebooks`),as=e=>!e.includes(`/`)&&h(e),os=e=>[...e].sort((e,t)=>(e.number??2**53-1)-(t.number??2**53-1)),ss=[`book-parsed`,`corrected`,`engine-corroborated`,`engine-only`,`engine-unverified`],cs=/^[A-Za-z0-9._-]{1,64}\.(jpg|jpeg|png)$/;function ls(e){let t=e=>Math.round(e*1e4)/1e4;return{x:t(e.x),y:t(e.y),w:t(e.w),h:t(e.h)}}var us=64;function ds(e){if(!e||typeof e!=`object`)return;let{page:t,rect:n,solutionPage:r,solutionPages:i}=e,a={};if(typeof t==`string`&&cs.test(t)&&(a.page=t),typeof r==`string`&&cs.test(r)&&(a.solutionPage=r),Array.isArray(i)){let e=i.filter(e=>typeof e==`string`&&cs.test(e));e.length>0&&(a.solutionPages=e.slice(0,us))}return n&&[`x`,`y`,`w`,`h`].every(e=>typeof n[e]==`number`&&n[e]>=0&&n[e]<=1)&&(a.rect=ls(n)),Object.keys(a).length>0?a:void 0}var fs=e=>e===void 0?[]:e.history??[{win:e.last===`win`,at:e.at}];function ps(e=is,t){let n=t=>K(e,t),r=e=>typeof e.pdfBook==`string`&&rs(e.pdfBook,t)?e.pdfBook:null,i=e=>K(n(e),`puzzles.json`),a=e=>K(n(e),`progress.json`),o=e=>K(n(e),`cycles.json`),s=e=>{let t=J(o(e),{});return Array.isArray(t.cycles)?t.cycles.filter(e=>{let{startedAt:t,finishedAt:n}=e??{};return typeof t==`string`&&(n===void 0||typeof n==`string`)}):[]},c=e=>K(n(e),`ocr.json`),l=e=>K(n(e),`drafts.json`),u=e=>K(n(e),`diagrams`),d=e=>as(e)&&I(K(n(e),`book.json`)),f=e=>{try{return N(e).mtimeMs}catch{return 0}},p=new Map,m=e=>{let t=i(e),n=f(t),r=p.get(e);if(r&&r.mtimeMs===n)return r.ids;let a=new Set(J(t,[]).map(e=>e.id));return p.set(e,{mtimeMs:n,ids:a}),a},h=new Map,g=e=>{let t=f(i(e)),n=f(a(e)),r=f(o(e)),c=h.get(e);if(c&&c.puzzlesMs===t&&c.progressMs===n&&c.cyclesMs===r)return c.tally;let l=J(i(e),[]),u=J(a(e),{}),d=s(e),p=d.find(e=>e.finishedAt===void 0)??null,m=0,g=0,_=0,v=0,y=null,b=[];for(let e of l){let t=u[e.id],n=t?.last;n===`win`?m++:n===`loss`&&g++,t?.at&&(y===null||t.at>y)&&(y=t.at);let r=fe(fs(t));if(r!==null&&b.push(r),p){let e=me(fs(t),p);e!==null&&(_++,e.win&&v++)}}b.sort();let x=p?{n:d.filter(e=>e.finishedAt!==void 0).length+1,attempted:_,wins:v}:null,S={puzzles:l.length,solved:m,failed:g,lastAt:y,dueAts:b,cycle:x};return h.set(e,{puzzlesMs:t,progressMs:n,cyclesMs:r,tally:S}),S},_=e=>{let t=new Date().toISOString(),n=0;for(let r of e.dueAts){if(r>t)break;n++}return n},v=K(e,`.bookmarks.json`),y=()=>{try{let e=JSON.parse(P(v,`utf-8`));return Array.isArray(e.slugs)?e.slugs:[]}catch{return[]}},b=t=>{M(e,{recursive:!0}),q(v,`${JSON.stringify({slugs:t},null,2)}\n`)};if(I(e))for(let t of A(e,{withFileTypes:!0})){if(!t.isDirectory()||ns(t.name))continue;let e=K(n(t.name),`book.json`),r=J(e,{});r.title||Y(e,{...r,title:t.name.normalize(`NFC`)});let i=ts();try{Wt(n(t.name),n(i))}catch{continue}let a=y();a.includes(t.name)&&b(a.map(e=>e===t.name?i:e)),console.log(`puzzlebooks: ${t.name} -> ${i}`)}let x=new G;x.get(`/puzzlebooks/bookmarks`,e=>e.json({slugs:y()})),x.post(`/puzzlebooks/bookmarks/toggle`,async e=>{let t=(await e.req.json().catch(()=>null))?.slug?.trim();if(!t||!d(t))return e.json({error:`unknown book`},404);let n=y(),r=n.indexOf(t),i=r<0;return i?n.unshift(t):n.splice(r,1),b(n),e.json({slug:t,bookmarked:i})}),x.get(`/puzzlebooks`,t=>{if(!I(e))return t.json({books:[]});let i=A(e,{withFileTypes:!0}).filter(e=>e.isDirectory()).map(e=>{let t=e.name,i=J(K(n(t),`book.json`),{}),a=g(t);return{slug:t,title:i.title??t,createdAt:i.createdAt??null,pdfBook:r(i),puzzles:a.puzzles,solved:a.solved,failed:a.failed,due:_(a),cycle:a.cycle,lastAt:a.lastAt,cover:I(K(u(t),`cover.jpg`))}}).sort((e,t)=>e.title.localeCompare(t.title));return t.json({books:i})}),x.post(`/puzzlebooks`,async e=>{let t=(await e.req.json().catch(()=>({}))).title?.trim().normalize(`NFC`);if(!t)return e.json({error:`a book needs a title`},400);let r=ts();return M(n(r),{recursive:!0}),Y(K(n(r),`book.json`),{title:t,createdAt:new Date().toISOString()}),Y(i(r),[]),e.json({slug:r})}),x.patch(`/puzzlebooks/:slug`,async e=>{let t=e.req.param(`slug`);if(!d(t))return e.json({error:`unknown book`},404);let i=await e.req.json().catch(()=>({})),a=K(n(t),`book.json`),o=J(a,{}),s=i.title===void 0?o.title:i.title.trim().normalize(`NFC`);if(!s)return e.json({error:`a book needs a title`},400);let c=o.pdfBook;if(i.pdfBook===null)c=void 0;else if(i.pdfBook!==void 0){if(typeof i.pdfBook!=`string`||!ns(i.pdfBook))return e.json({error:`not a book on the shelf`},400);c=i.pdfBook}let l={...o,title:s};return c?l.pdfBook=c:delete l.pdfBook,Y(a,l),e.json({slug:t,title:s,pdfBook:r(l)})}),x.delete(`/puzzlebooks/:slug`,e=>{let t=e.req.param(`slug`);if(!d(t))return e.json({error:`unknown book`},404);L(n(t),{recursive:!0,force:!0});let r=y();return r.includes(t)&&b(r.filter(e=>e!==t)),e.json({ok:!0})}),x.delete(`/puzzlebooks/:slug/puzzles`,e=>{let t=e.req.param(`slug`);if(!d(t))return e.json({error:`unknown book`},404);let n=J(i(t),[]).length,r=J(l(t),[]).length;L(i(t),{force:!0}),L(l(t),{force:!0});let a=u(t);if(I(a))for(let e of A(a))e!==`cover.jpg`&&L(K(a,e),{force:!0});return e.json({cleared:{puzzles:n,drafts:r}})}),x.delete(`/puzzlebooks/:slug/progress`,e=>{let t=e.req.param(`slug`);return d(t)?(L(a(t),{force:!0}),L(o(t),{force:!0}),e.json({ok:!0})):e.json({error:`unknown book`},404)});let S=(e,t,n)=>{for(let r of t)if(me(fs(e[r]),n)!==null)return!0;return!1},C=(e,t)=>{let n=J(a(e),{}),r=m(e);return t.filter(e=>e.finishedAt===void 0||S(n,r,e))},w=(e,t,n)=>{let r=J(a(e),{}),i=``,o=e=>{e!==void 0&&e>i&&(i=e)};for(let e of t)o(e.startedAt),o(e.finishedAt);for(let e of Object.values(r))for(let t of fs(e))o(t.at);if(i<n)return n;let s=Date.parse(i);return Number.isNaN(s)?n:new Date(s+1).toISOString()};return x.post(`/puzzlebooks/:slug/cycles`,e=>{let t=e.req.param(`slug`);if(!d(t))return e.json({error:`unknown book`},404);let n=s(t),r=new Date().toISOString(),i=n.find(e=>e.finishedAt===void 0);i&&(i.finishedAt=r);let a=w(t,n,r),c=C(t,n);return c.push({startedAt:a}),Y(o(t),{cycles:c}),e.json({cycles:c})}),x.delete(`/puzzlebooks/:slug/cycles`,e=>{let t=e.req.param(`slug`);if(!d(t))return e.json({error:`unknown book`},404);let n=s(t),r=n.find(e=>e.finishedAt===void 0);if(!r)return e.json({error:`no cycle running`},404);r.finishedAt=new Date().toISOString();let i=C(t,n);return Y(o(t),{cycles:i}),e.json({cycles:i})}),x.get(`/puzzlebooks/:slug`,e=>{let t=e.req.param(`slug`);if(!d(t))return e.json({error:`unknown book`},404);let o=J(K(n(t),`book.json`),{});return e.json({slug:t,title:o.title??t,pdfBook:r(o),puzzles:os(J(i(t),[])).map(e=>({id:e.id,...e.number===void 0?{}:{number:e.number},...e.provenance===void 0?{}:{provenance:e.provenance}})),progress:J(a(t),{}),cycles:s(t),drafts:J(l(t),[])})}),x.get(`/puzzlebooks/:slug/next`,e=>{let t=e.req.param(`slug`);if(!d(t))return e.json({error:`unknown book`},404);let n=J(a(t),{}),r=os(J(i(t),[]));if(e.req.query(`mode`)===`review`){let t=new Date().toISOString(),i=r.find(e=>{let r=fe(fs(n[e.id]));return r!==null&&r<=t});return i?e.json({puzzle:{id:i.id,fen:i.fen,...i.number===void 0?{}:{number:i.number}}}):e.json({error:`nothing due for review in this book`},404)}let o=s(t).find(e=>e.finishedAt===void 0),c=o&&r.find(e=>me(fs(n[e.id]),o)===null)||r.find(e=>n[e.id]?.last!==`win`);return c?e.json({puzzle:{id:c.id,fen:c.fen,...c.number===void 0?{}:{number:c.number}}}):e.json({error:`nothing left unsolved in this book`},404)}),x.post(`/puzzlebooks/:slug/puzzles`,async e=>{let t=e.req.param(`slug`);if(!d(t))return e.json({error:`unknown book`},404);let n=await e.req.json().catch(()=>({}));if(typeof n.fen!=`string`||!Array.isArray(n.uci)||!Array.isArray(n.san)||n.uci.length===0||n.uci.length!==n.san.length)return e.json({error:`expected { fen, uci[], san[] } with a non-empty solution`},400);let r=(n.wildcards??[]).filter(e=>Number.isInteger(e)&&e>=0&&e<n.uci.length),a=J(i(t),[]);if(n.replaceId!==void 0){let o=a.findIndex(e=>e.id===n.replaceId);if(o===-1)return e.json({error:`unknown puzzle`},404);let s={...a[o],fen:n.fen,uci:n.uci,san:n.san,added:new Date().toISOString(),provenance:`corrected`};return r.length>0?s.wildcards=r:delete s.wildcards,a[o]=s,Y(i(t),a),e.json({puzzle:s})}let o=Number.isInteger(n.number)&&n.number>0?n.number:void 0,s=ss.includes(n.provenance)?n.provenance:`corrected`,c=ds(n.evidence),l=o===void 0?`p${Date.now().toString(36)}`:`n${o}`,u=a.findIndex(e=>e.id===l),f={id:l,fen:n.fen,uci:n.uci,san:n.san,...r.length>0?{wildcards:r}:{},added:new Date().toISOString(),provenance:s,...o===void 0?{}:{number:o},...c?{evidence:c}:{}};return u===-1?a.push(f):a[u]=f,Y(i(t),a),e.json({puzzle:f})}),x.delete(`/puzzlebooks/:slug/puzzles/:id`,e=>{let t=e.req.param(`slug`);if(!d(t))return e.json({error:`unknown book`},404);let n=J(i(t),[]),r=n.filter(t=>t.id!==e.req.param(`id`));if(r.length===n.length)return e.json({error:`unknown puzzle`},404);Y(i(t),r);let o=J(a(t),{});return delete o[e.req.param(`id`)],Y(a(t),o),e.json({ok:!0})}),x.get(`/puzzlebooks/:slug/ocr`,e=>{let t=e.req.param(`slug`);return d(t)?e.json(J(c(t),{templates:[]})):e.json({error:`unknown book`},404)}),x.put(`/puzzlebooks/:slug/ocr`,async e=>{let t=e.req.param(`slug`);if(!d(t))return e.json({error:`unknown book`},404);let n=await e.req.json().catch(()=>({}));return!Array.isArray(n.templates)||n.templates.length>400?e.json({error:`expected { templates: [...] } (max 400)`},400):n.templates.every(e=>{let t=e;return typeof t.label==`string`&&t.label.length<=8&&typeof t.feature==`string`&&t.feature.length<=512})?(Y(c(t),{templates:n.templates}),e.json({ok:!0,count:n.templates.length})):e.json({error:`malformed template`},400)}),x.put(`/puzzlebooks/:slug/cover`,async e=>{let t=e.req.param(`slug`);if(!d(t))return e.json({error:`unknown book`},404);let n=await e.req.json().catch(()=>({})),r=/^data:image\/(jpeg|png);base64,([A-Za-z0-9+/=]+)$/.exec(n.image??``);if(!r)return e.json({error:`expected a jpeg/png data URL`},400);let i=Buffer.from(r[2],`base64`);return i.length>2e6?e.json({error:`cover too large`},400):(M(u(t),{recursive:!0}),j(K(u(t),`cover.jpg`),i),e.json({ok:!0}))}),x.post(`/puzzlebooks/:slug/drafts`,async e=>{let t=e.req.param(`slug`);if(!d(t))return e.json({error:`unknown book`},404);let n=await e.req.json().catch(()=>({}));if(!Array.isArray(n.drafts)||n.drafts.length===0||n.drafts.length>500)return e.json({error:`expected { drafts: [...] } (1..500)`},400);let r=J(l(t),[]);M(u(t),{recursive:!0});let i=[];for(let[r,a]of n.drafts.entries()){let n=/^data:image\/(jpeg|png);base64,([A-Za-z0-9+/=]+)$/.exec(a.image??``);if(!n)return e.json({error:`draft ${r}: expected a jpeg/png data URL`},400);let o=Buffer.from(n[2],`base64`);if(o.length>4e5)return e.json({error:`draft ${r}: image too large`},400);let s=`d${Date.now().toString(36)}${r.toString(36)}`,c=`${s}.${n[1]===`png`?`png`:`jpg`}`;j(K(u(t),c),o);let l=ds(a.evidence);i.push({id:s,image:c,fen:typeof a.fen==`string`?a.fen:null,added:new Date().toISOString(),...typeof a.number==`number`?{number:a.number}:{},...l?{evidence:l}:{}})}return Y(l(t),[...r,...i]),e.json({added:i.length})}),x.put(`/puzzlebooks/:slug/drafts`,async e=>{let t=e.req.param(`slug`);if(!d(t))return e.json({error:`unknown book`},404);let n=await e.req.json().catch(()=>({}));if(!Array.isArray(n.updates))return e.json({error:`expected { updates: [...] }`},400);let r=J(l(t),[]);for(let e of n.updates){let t=r.find(t=>t.id===e.id);t&&(t.fen=typeof e.fen==`string`?e.fen:null)}return Y(l(t),r),e.json({ok:!0})}),x.delete(`/puzzlebooks/:slug/drafts/:id`,e=>{let t=e.req.param(`slug`);if(!d(t))return e.json({error:`unknown book`},404);let n=J(l(t),[]),r=n.find(t=>t.id===e.req.param(`id`));if(!r)return e.json({error:`unknown draft`},404);try{ve(K(u(t),r.image))}catch{}return Y(l(t),n.filter(e=>e.id!==r.id)),e.json({ok:!0})}),x.post(`/puzzlebooks/:slug/evidence`,async e=>{let t=e.req.param(`slug`);if(!d(t))return e.json({error:`unknown book`},404);let n=await e.req.json().catch(()=>({}));if(!Array.isArray(n.pages)||n.pages.length===0||n.pages.length>100)return e.json({error:`expected { pages: [...] } (1..100)`},400);M(u(t),{recursive:!0});let r=[];for(let[i,a]of n.pages.entries()){let n=a.page;if(!Number.isInteger(n)||n<1||n>9999)return e.json({error:`page ${i}: expected a page number`},400);let o=/^data:image\/(jpeg|png);base64,([A-Za-z0-9+/=]+)$/.exec(a.image??``);if(!o)return e.json({error:`page ${i}: expected a jpeg/png data URL`},400);let s=Buffer.from(o[2],`base64`);if(s.length>12e5)return e.json({error:`page ${i}: image too large`},400);let c=`page${String(n).padStart(3,`0`)}.${o[1]===`png`?`png`:`jpg`}`;j(K(u(t),c),s),r.push(c)}return e.json({written:r})}),x.get(`/puzzlebooks/:slug/solutions`,e=>{let t=e.req.param(`slug`);if(!d(t))return e.json({error:`unknown book`},404);let n={};for(let e of J(i(t),[]))n[e.id]={fen:e.fen,uci:e.uci,san:e.san,...e.wildcards?{wildcards:e.wildcards}:{}};return e.json({solutions:n})}),x.get(`/puzzlebooks/:slug/placements`,e=>{let t=e.req.param(`slug`);if(!d(t))return e.json({error:`unknown book`},404);let n=e=>{let t=/^page(\d+)\./.exec(e??``);return t?Number(t[1]):null},r=[];for(let e of J(i(t),[])){let t=n(e.evidence?.page);t!==null&&e.fen&&r.push({id:e.id,page:t,...e.evidence?.rect?{rect:e.evidence.rect}:{},fen:e.fen})}for(let e of J(l(t),[])){let t=n(e.evidence?.page);t!==null&&e.fen&&r.push({id:e.id,page:t,...e.evidence?.rect?{rect:e.evidence.rect}:{},fen:e.fen})}return e.json({placements:r})}),x.get(`/puzzlebooks/:slug/puzzles/:id/evidence`,e=>{let t=e.req.param(`slug`);if(!d(t))return e.json({error:`unknown book`},404);let n=J(i(t),[]).find(t=>t.id===e.req.param(`id`));if(!n)return e.json({error:`unknown puzzle`},404);let r=n.evidence;return e.json({evidence:r?.rect?{...r,rect:ls(r.rect)}:r})}),x.get(`/puzzlebooks/:slug/diagrams/:file`,e=>{let t=e.req.param(`slug`),n=e.req.param(`file`);if(!d(t)||!/^[A-Za-z0-9]+\.(jpg|png)$/.test(n))return e.json({error:`unknown diagram`},404);let r=K(u(t),n);if(!I(r))return e.json({error:`unknown diagram`},404);let i=n===`cover.jpg`?`private, max-age=3600`:`private, max-age=31536000, immutable`;return e.body(new Uint8Array(P(r)),200,{"content-type":n.endsWith(`.png`)?`image/png`:`image/jpeg`,"cache-control":i})}),x.post(`/puzzlebooks/:slug/attempt`,async e=>{let t=e.req.param(`slug`);if(!d(t))return e.json({error:`unknown book`},404);let n=await e.req.json().catch(()=>({}));if(typeof n.id!=`string`||typeof n.win!=`boolean`)return e.json({error:`expected { id, win }`},400);if(!m(t).has(n.id))return e.json({error:`unknown puzzle`},404);let r=J(a(t),{}),i=r[n.id],c=new Date().toISOString();r[n.id]={tries:(i?.tries??0)+1,wins:(i?.wins??0)+ +!!n.win,last:n.win?`win`:`loss`,at:c,history:[...fs(i),{win:n.win,at:c}].slice(-100)},Y(a(t),r);let l=s(t),u=l.find(e=>e.finishedAt===void 0);if(u){let e=!0;for(let n of m(t))if(me(fs(r[n]),u)===null){e=!1;break}e&&(u.finishedAt=c,Y(o(t),{cycles:l}))}return e.json({progress:r[n.id],...l.length>0?{cycles:l}:{}})}),x}async function ms(e,t){return A(e,t)}async function hs(e){return N(e)}async function gs(e){let t=0,n=0,r;try{r=await ms(e,{withFileTypes:!0})}catch{return{bytes:t,files:n}}for(let i of r){let r=K(e,i.name);if(i.isDirectory()){let e=await gs(r);t+=e.bytes,n+=e.files}else if(i.isFile())try{t+=(await hs(r)).size,n+=1}catch{}}return{bytes:t,files:n}}function _s(e=Z,t=$t){let n=new G,r=[{key:`games`,paths:[K(e,`games`,`collection`)]},{key:`studies`,paths:[K(e,`studies`)]},{key:`notes`,paths:[K(e,`notes`)]},{key:`books`,paths:[K(e,`books`)]},{key:`puzzlebooks`,paths:[K(e,`puzzlebooks`)]},{key:`puzzles`,paths:[K(e,`puzzles`)]},{key:`repertoire`,paths:[K(e,`repertoire`)]},{key:`sources`,paths:[K(e,`sources`)]},{key:`gamesCache`,paths:[K(e,`games`,`chesscom`),K(e,`games`,`lichess`)]},{key:`history`,paths:[K(e,`.history.git`)]},{key:`refgames`,paths:[K(t,`refgames`)]},{key:`explorerCache`,paths:[K(t,`explorer-cache`)]},{key:`tablebaseCache`,paths:[K(t,`tablebase-cache`)]},{key:`engineNets`,paths:[K(t,`engine-nets`)]}],i=new Set([`games`,`studies`,`notes`,`books`,`puzzlebooks`,`puzzles`,`repertoire`,`sources`,`gamesCache`,`history`]);return n.get(`/storage`,async t=>{let n=[];for(let e of r){let t=0,r=0;for(let n of e.paths){let e=await gs(n);t+=e.bytes,r+=e.files}n.push({key:e.key,bytes:t,files:r})}let a=0;try{a=(await hs(K(e,`config.json`))).size}catch{}let o=0;try{o=(await ms(e,{withFileTypes:!0})).filter(e=>e.isDirectory()&&!e.name.startsWith(`.`)).length}catch{}return t.json({areas:n,vault:{config:a,folders:o,inVault:[...i]}})}),n}var vs={".analysis.json":`[{"file":"chesscom/vaultdemo/2026-08.pgn","index":0,"side":"white","site":"https://www.chess.com/game/live/1400000001","plies":33,"depth":12,"accuracy":97.6,"acpl":6,"moves":17,"inaccuracies":0,"mistakes":0,"blunders":0,"brilliancies":0,"bookMoves":14,"perMove":[[0,100,0,0,1],[2,100,0,0,1],[4,99.6,0,0,1],[6,100,0,0,1],[8,98,0,0,1],[10,100,0,0,1],[12,88.7,0,0,1],[14,98.4,0,0,1],[16,100,0,0,1],[18,97.6,0,0,1],[20,95.6,0,0,1],[22,100,0,0,1],[24,100,0,0,1],[26,100,0,1,1],[28,80.8,0,1,0],[30,100,0,1,0],[32,100,0,1,0]]},{"file":"chesscom/vaultdemo/2026-08.pgn","index":1,"side":"white","site":"https://www.chess.com/game/live/1400000002","plies":30,"depth":12,"accuracy":82.6,"acpl":131,"moves":15,"inaccuracies":0,"mistakes":2,"blunders":1,"brilliancies":0,"bookMoves":4,"perMove":[[0,100,0,0,1],[2,99.2,0,0,1],[4,94,0,0,1],[6,24.7,0,0,1],[8,100,0,0,0],[10,100,0,0,0],[12,37.7,4,0,0],[14,53,2,0,0],[16,98.9,0,0,0],[18,55.8,2,0,0],[20,100,0,0,0],[22,94,0,0,0],[24,96.1,0,0,0],[26,100,0,0,0],[28,86.1,0,1,0]]},{"file":"chesscom/vaultdemo/2026-08.pgn","index":2,"side":"white","site":"https://www.chess.com/game/live/1400000003","plies":26,"depth":12,"accuracy":98,"acpl":5,"moves":13,"inaccuracies":0,"mistakes":0,"blunders":0,"brilliancies":0,"bookMoves":9,"perMove":[[0,98.8,0,0,1],[2,98.4,0,0,1],[4,96.4,0,0,1],[6,100,0,0,1],[8,98,0,0,1],[10,100,0,0,1],[12,100,0,0,1],[14,100,0,0,1],[16,98.8,0,1,1],[18,98.4,0,1,0],[20,93.2,0,1,0],[22,100,0,1,0],[24,91.7,0,1,0]]},{"file":"chesscom/vaultdemo/2026-08.pgn","index":3,"side":"white","site":"https://www.chess.com/game/live/1400000004","plies":26,"depth":12,"accuracy":92.6,"acpl":53,"moves":13,"inaccuracies":0,"mistakes":0,"blunders":1,"brilliancies":0,"bookMoves":6,"perMove":[[0,99.6,0,0,1],[2,100,0,0,1],[4,100,0,0,1],[6,97.2,0,0,1],[8,96,0,0,1],[10,98.4,0,0,1],[12,99.6,0,0,0],[14,100,0,0,0],[16,98.8,0,0,0],[18,100,0,0,0],[20,100,0,0,0],[22,14.1,4,0,0],[24,100,0,0,0]]},{"file":"chesscom/vaultdemo/2026-08.pgn","index":4,"side":"white","site":"https://www.chess.com/game/live/1400000005","plies":30,"depth":12,"accuracy":98.5,"acpl":4,"moves":15,"inaccuracies":0,"mistakes":0,"blunders":0,"brilliancies":0,"bookMoves":8,"perMove":[[0,100,0,0,1],[2,98,0,0,1],[4,96.4,0,0,1],[6,100,0,0,1],[8,99.6,0,0,1],[10,96.8,0,0,1],[12,100,0,0,1],[14,100,0,0,1],[16,97.2,0,0,0],[18,100,0,0,0],[20,100,0,0,0],[22,100,0,0,0],[24,91.7,0,0,0],[26,100,0,0,0],[28,98.4,0,0,0]]},{"file":"chesscom/vaultdemo/2026-08.pgn","index":5,"side":"white","site":"https://www.chess.com/game/live/1400000006","plies":29,"depth":12,"accuracy":88.5,"acpl":76,"moves":15,"inaccuracies":0,"mistakes":1,"blunders":1,"brilliancies":0,"bookMoves":3,"perMove":[[0,98.4,0,0,1],[2,100,0,0,1],[4,92.1,0,0,1],[6,92.4,0,0,0],[8,100,0,0,0],[10,95.2,0,0,0],[12,100,0,0,0],[14,98,0,0,0],[16,100,0,0,0],[18,93.6,0,0,0],[20,99.2,0,0,0],[22,86.1,0,1,0],[24,99.6,0,1,0],[26,59.5,2,1,0],[28,14.1,4,1,0]]},{"file":"chesscom/vaultdemo/2026-08.pgn","index":6,"side":"white","site":"https://www.chess.com/game/live/1400000007","plies":29,"depth":12,"accuracy":96.7,"acpl":8,"moves":15,"inaccuracies":0,"mistakes":0,"blunders":0,"brilliancies":0,"bookMoves":7,"perMove":[[0,98.4,0,0,1],[2,92.9,0,0,1],[4,100,0,0,1],[6,96,0,0,1],[8,98,0,0,1],[10,95.6,0,0,1],[12,92.5,0,0,1],[14,97.6,0,0,0],[16,87.7,0,0,0],[18,97.6,0,0,0],[20,100,0,0,0],[22,99.6,0,0,0],[24,100,0,1,0],[26,94.5,0,1,0],[28,100,0,1,0]]},{"file":"chesscom/vaultdemo/2026-08.pgn","index":7,"side":"black","site":"https://www.chess.com/game/live/1400000008","plies":30,"depth":12,"accuracy":97.1,"acpl":7,"moves":15,"inaccuracies":0,"mistakes":0,"blunders":0,"brilliancies":0,"bookMoves":9,"perMove":[[1,94.8,0,0,1],[3,97.6,0,0,1],[5,100,0,0,1],[7,100,0,0,1],[9,98.8,0,0,1],[11,100,0,0,1],[13,96.3,0,0,1],[15,94.4,0,0,1],[17,100,0,0,1],[19,98,0,0,0],[21,91,0,0,0],[23,91.4,0,0,0],[25,100,0,0,0],[27,94.8,0,0,0],[29,99.2,0,0,0]]},{"file":"chesscom/vaultdemo/2026-08.pgn","index":8,"side":"black","site":"https://www.chess.com/game/live/1400000009","plies":37,"depth":12,"accuracy":98.2,"acpl":5,"moves":18,"inaccuracies":1,"mistakes":0,"blunders":0,"brilliancies":0,"bookMoves":12,"perMove":[[1,99.6,0,0,1],[3,100,0,0,1],[5,100,0,0,1],[7,98.8,0,0,1],[9,100,0,0,1],[11,98.4,0,0,1],[13,100,0,0,1],[15,100,0,0,1],[17,100,0,0,1],[19,100,0,0,1],[21,100,0,0,1],[23,97.6,0,0,1],[25,99.6,0,0,0],[27,95.6,0,0,0],[29,100,0,1,0],[31,99.6,0,1,0],[33,78.3,6,1,0],[35,100,0,1,0]]},{"file":"chesscom/vaultdemo/2026-08.pgn","index":9,"side":"black","site":"https://www.chess.com/game/live/1400000010","plies":28,"depth":12,"accuracy":95.8,"acpl":13,"moves":14,"inaccuracies":0,"mistakes":1,"blunders":0,"brilliancies":0,"bookMoves":7,"perMove":[[1,99.6,0,0,1],[3,100,0,0,1],[5,100,0,0,1],[7,100,0,0,1],[9,98,0,0,1],[11,100,0,0,1],[13,100,0,0,1],[15,94.4,0,0,0],[17,100,0,0,0],[19,100,0,0,0],[21,100,0,0,0],[23,97.5,0,0,0],[25,98,0,0,0],[27,54.4,2,0,0]]},{"file":"chesscom/vaultdemo/2026-08.pgn","index":10,"side":"black","site":"https://www.chess.com/game/live/1400000011","plies":32,"depth":12,"accuracy":93.7,"acpl":19,"moves":16,"inaccuracies":0,"mistakes":1,"blunders":0,"brilliancies":0,"bookMoves":12,"perMove":[[1,99.6,0,0,1],[3,96.8,0,0,1],[5,93.6,0,0,1],[7,100,0,0,1],[9,100,0,0,1],[11,100,0,0,1],[13,100,0,0,1],[15,98.8,0,0,1],[17,95.6,0,0,1],[19,99.2,0,0,1],[21,89.3,0,0,1],[23,100,0,0,1],[25,83.3,0,0,0],[27,100,0,0,0],[29,90.9,0,0,0],[31,51.9,2,0,0]]},{"file":"chesscom/vaultdemo/2026-08.pgn","index":11,"side":"black","site":"https://www.chess.com/game/live/1400000012","plies":32,"depth":12,"accuracy":93.1,"acpl":25,"moves":16,"inaccuracies":1,"mistakes":1,"blunders":0,"brilliancies":0,"bookMoves":1,"perMove":[[1,96.4,0,0,1],[3,100,0,0,0],[5,100,0,0,0],[7,100,0,0,0],[9,96.7,0,0,0],[11,94.4,0,0,0],[13,94.4,0,0,0],[15,99.6,0,0,0],[17,100,0,0,0],[19,100,0,0,0],[21,96.7,0,0,0],[23,67.2,6,0,0],[25,57.2,2,0,0],[27,98.3,0,0,0],[29,89.5,0,0,0],[31,100,0,1,0]]},{"file":"chesscom/vaultdemo/2026-08.pgn","index":12,"side":"black","site":"https://www.chess.com/game/live/1400000013","plies":28,"depth":12,"accuracy":95.1,"acpl":15,"moves":14,"inaccuracies":0,"mistakes":0,"blunders":1,"brilliancies":0,"bookMoves":6,"perMove":[[1,98,0,0,1],[3,100,0,0,1],[5,100,0,0,1],[7,100,0,0,1],[9,100,0,0,1],[11,99.2,0,0,1],[13,98,0,0,0],[15,99.2,0,0,0],[17,100,0,0,0],[19,97.1,0,0,0],[21,96.3,0,0,0],[23,100,0,0,0],[25,95.9,0,0,0],[27,48.1,4,0,0]]},{"file":"chesscom/vaultdemo/2026-08.pgn","index":13,"side":"black","site":"https://www.chess.com/game/live/1400000014","plies":29,"depth":12,"accuracy":85.4,"acpl":92,"moves":14,"inaccuracies":0,"mistakes":0,"blunders":2,"brilliancies":0,"bookMoves":11,"perMove":[[1,100,0,0,1],[3,100,0,0,1],[5,94.4,0,0,1],[7,100,0,0,1],[9,60.5,0,0,1],[11,100,0,0,1],[13,99.6,0,0,1],[15,100,0,0,1],[17,100,0,0,1],[19,97.2,0,0,1],[21,99.6,0,0,1],[23,96.4,0,0,0],[25,9,4,0,0],[27,38.3,4,0,0]]},{"file":"chesscom/vaultdemo/2026-08.pgn","index":14,"side":"white","site":"https://www.chess.com/game/live/1400000015","plies":33,"depth":12,"accuracy":86.5,"acpl":107,"moves":17,"inaccuracies":0,"mistakes":0,"blunders":2,"brilliancies":0,"bookMoves":8,"perMove":[[0,100,0,0,1],[2,100,0,0,1],[4,98.4,0,0,1],[6,100,0,0,1],[8,95.2,0,0,1],[10,100,0,0,1],[12,96.4,0,0,1],[14,99.6,0,0,1],[16,99.6,0,0,0],[18,96.8,0,0,0],[20,99.6,0,0,0],[22,87.6,0,0,0],[24,100,0,0,0],[26,8.2,4,0,0],[28,9.4,4,0,0],[30,80.5,0,0,0],[32,98.6,0,1,0]]},{"file":"chesscom/vaultdemo/2026-08.pgn","index":15,"side":"black","site":"https://www.chess.com/game/live/1400000016","plies":26,"depth":12,"accuracy":97.6,"acpl":6,"moves":13,"inaccuracies":0,"mistakes":0,"blunders":0,"brilliancies":0,"bookMoves":5,"perMove":[[1,94.4,0,0,1],[3,100,0,0,1],[5,97.2,0,0,1],[7,100,0,0,1],[9,88.7,0,0,1],[11,99.6,0,0,0],[13,99.6,0,0,0],[15,100,0,0,0],[17,100,0,0,0],[19,100,0,0,0],[21,100,0,0,0],[23,100,0,0,0],[25,89.4,0,0,0]]},{"file":"collection/Alderman R vs Pereira V 2026-01-01.pgn","index":0,"side":"white","site":null,"plies":147,"depth":12,"accuracy":98.1,"acpl":9,"moves":74,"inaccuracies":3,"mistakes":0,"blunders":0,"brilliancies":0,"bookMoves":9,"perMove":[[0,99.2,0,0,1],[2,100,0,0,1],[4,94,0,0,1],[6,100,0,0,1],[8,100,0,0,1],[10,94,0,0,1],[12,100,0,0,1],[14,99.6,0,0,1],[16,100,0,0,1],[18,100,0,0,0],[20,100,0,0,0],[22,100,0,0,0],[24,100,0,0,0],[26,88.2,0,0,0],[28,93.4,0,0,0],[30,100,0,0,0],[32,97.4,0,0,0],[34,100,0,1,0],[36,100,0,1,0],[38,72.8,6,1,0],[40,100,0,1,0],[42,100,0,1,0],[44,100,0,1,0],[46,94.8,0,1,0],[48,97.2,0,1,0],[50,94.8,0,1,0],[52,95.8,0,1,0],[54,86.4,0,2,0],[56,100,0,2,0],[58,100,0,2,0],[60,100,0,2,0],[62,100,0,2,0],[64,100,0,2,0],[66,100,0,2,0],[68,100,0,2,0],[70,97.9,0,2,0],[72,100,0,2,0],[74,100,0,2,0],[76,100,0,2,0],[78,100,0,2,0],[80,100,0,2,0],[82,77.9,6,2,0],[84,100,0,2,0],[86,100,0,2,0],[88,100,0,2,0],[90,100,0,2,0],[92,100,0,2,0],[94,100,0,2,0],[96,78.8,6,2,0],[98,100,0,2,0],[100,100,0,2,0],[102,100,0,2,0],[104,100,0,2,0],[106,100,0,2,0],[108,100,0,2,0],[110,100,0,2,0],[112,100,0,2,0],[114,100,0,2,0],[116,100,0,2,0],[118,100,0,2,0],[120,100,0,2,0],[122,100,0,2,0],[124,99.3,0,2,0],[126,100,0,2,0],[128,100,0,2,0],[130,100,0,2,0],[132,100,0,2,0],[134,94.4,0,2,0],[136,100,0,2,0],[138,100,0,2,0],[140,100,0,2,0],[142,100,0,2,0],[144,100,0,2,0],[146,100,0,2,0]]},{"file":"collection/Alderman R vs Pereira V 2026-01-25.pgn","index":0,"side":"black","site":null,"plies":89,"depth":12,"accuracy":90.5,"acpl":42,"moves":44,"inaccuracies":2,"mistakes":3,"blunders":2,"brilliancies":0,"bookMoves":5,"perMove":[[1,94.4,0,0,1],[3,97.6,0,0,1],[5,95.2,0,0,1],[7,99.6,0,0,1],[9,100,0,0,1],[11,98,0,0,0],[13,99.2,0,0,0],[15,100,0,0,0],[17,100,0,0,0],[19,89.5,0,0,0],[21,97.6,0,0,0],[23,84.4,0,0,0],[25,94.8,0,0,0],[27,75.8,6,0,0],[29,96.7,0,0,0],[31,96.7,0,0,0],[33,95.2,0,0,0],[35,57,2,0,0],[37,96,0,0,0],[39,85.8,0,1,0],[41,57.4,2,1,0],[43,100,0,1,0],[45,59.7,2,1,0],[47,45,4,1,0],[49,78.1,6,1,0],[51,42.1,4,1,0],[53,100,0,1,0],[55,100,0,2,0],[57,98.1,0,2,0],[59,92.7,0,2,0],[61,100,0,2,0],[63,96.9,0,2,0],[65,97.7,0,2,0],[67,100,0,2,0],[69,85.2,0,2,0],[71,95.9,0,2,0],[73,100,0,2,0],[75,99.3,0,2,0],[77,95.3,0,2,0],[79,99.5,0,2,0],[81,100,0,2,0],[83,93.9,0,2,0],[85,98.9,0,2,0],[87,93.6,0,2,0]]},{"file":"collection/Bex N vs Ueda K 2026-02-14.pgn","index":0,"side":"white","site":null,"plies":117,"depth":12,"accuracy":97.7,"acpl":10,"moves":59,"inaccuracies":1,"mistakes":0,"blunders":0,"brilliancies":0,"bookMoves":5,"perMove":[[0,100,0,0,1],[2,99.2,0,0,1],[4,97.6,0,0,1],[6,100,0,0,1],[8,91.3,0,0,1],[10,100,0,0,0],[12,98.4,0,0,0],[14,100,0,0,0],[16,100,0,0,0],[18,100,0,0,0],[20,90.5,0,0,0],[22,100,0,0,0],[24,100,0,0,0],[26,100,0,0,0],[28,75.2,6,0,0],[30,98.4,0,0,0],[32,98.4,0,0,0],[34,81.5,0,0,0],[36,100,0,0,0],[38,100,0,0,0],[40,100,0,0,0],[42,95.3,0,0,0],[44,100,0,0,0],[46,100,0,0,0],[48,100,0,0,0],[50,99.4,0,1,0],[52,100,0,1,0],[54,100,0,1,0],[56,100,0,1,0],[58,100,0,1,0],[60,100,0,1,0],[62,100,0,1,0],[64,100,0,1,0],[66,100,0,1,0],[68,100,0,1,0],[70,89.1,0,1,0],[72,100,0,1,0],[74,94.1,0,1,0],[76,96.1,0,2,0],[78,92.8,0,2,0],[80,93.8,0,2,0],[82,95.7,0,2,0],[84,100,0,2,0],[86,100,0,2,0],[88,100,0,2,0],[90,91.4,0,2,0],[92,98.4,0,2,0],[94,96.1,0,2,0],[96,91.5,0,2,0],[98,100,0,2,0],[100,100,0,2,0],[102,98.3,0,2,0],[104,100,0,2,0],[106,100,0,2,0],[108,100,0,2,0],[110,100,0,2,0],[112,100,0,2,0],[114,100,0,2,0],[116,100,0,2,0]]},{"file":"collection/Castellan J vs Novak E 2026-03-03.pgn","index":0,"side":"black","site":null,"plies":95,"depth":12,"accuracy":96.8,"acpl":10,"moves":47,"inaccuracies":0,"mistakes":0,"blunders":0,"brilliancies":0,"bookMoves":8,"perMove":[[1,94,0,0,1],[3,98.8,0,0,1],[5,100,0,0,1],[7,85.2,0,0,1],[9,98.8,0,0,1],[11,98,0,0,1],[13,100,0,0,1],[15,100,0,0,1],[17,87,0,0,0],[19,100,0,0,0],[21,100,0,0,0],[23,100,0,0,0],[25,98,0,0,0],[27,100,0,0,0],[29,83.2,0,0,0],[31,100,0,0,0],[33,92.1,0,0,0],[35,100,0,1,0],[37,100,0,1,0],[39,94.4,0,1,0],[41,85.2,0,1,0],[43,97.2,0,1,0],[45,100,0,1,0],[47,81.5,0,1,0],[49,100,0,1,0],[51,100,0,1,0],[53,96,0,1,0],[55,93.6,0,1,0],[57,100,0,1,0],[59,89.4,0,1,0],[61,97.9,0,1,0],[63,94.6,0,1,0],[65,100,0,1,0],[67,99.9,0,1,0],[69,98.7,0,2,0],[71,98.7,0,2,0],[73,100,0,2,0],[75,94.7,0,2,0],[77,94.3,0,2,0],[79,100,0,2,0],[81,99.9,0,2,0],[83,97.8,0,2,0],[85,100,0,2,0],[87,100,0,2,0],[89,100,0,2,0],[91,100,0,2,0],[93,100,0,2,0]]},{"file":"collection/Castellan J vs Novak E 2026-03-27.pgn","index":0,"side":"white","site":null,"plies":103,"depth":12,"accuracy":97.7,"acpl":6,"moves":52,"inaccuracies":0,"mistakes":0,"blunders":0,"brilliancies":0,"bookMoves":4,"perMove":[[0,97.6,0,0,1],[2,100,0,0,1],[4,100,0,0,1],[6,99.2,0,0,1],[8,100,0,0,0],[10,94,0,0,0],[12,94,0,0,0],[14,100,0,0,0],[16,99.2,0,0,0],[18,95.2,0,0,0],[20,98,0,0,0],[22,96,0,0,0],[24,100,0,0,0],[26,99.2,0,0,0],[28,100,0,0,0],[30,98,0,0,0],[32,97.6,0,0,0],[34,97.6,0,0,0],[36,96.7,0,0,0],[38,100,0,0,0],[40,100,0,0,0],[42,98.8,0,0,0],[44,100,0,0,0],[46,98,0,0,0],[48,91.3,0,0,0],[50,100,0,1,0],[52,100,0,1,0],[54,95.2,0,1,0],[56,92.4,0,1,0],[58,100,0,1,0],[60,100,0,1,0],[62,98,0,1,0],[64,100,0,1,0],[66,96.4,0,1,0],[68,97.7,0,1,0],[70,97.7,0,1,0],[72,100,0,1,0],[74,93.1,0,1,0],[76,90.2,0,1,0],[78,100,0,2,0],[80,86.3,0,2,0],[82,100,0,2,0],[84,99.6,0,2,0],[86,100,0,2,0],[88,100,0,2,0],[90,94.2,0,2,0],[92,100,0,2,0],[94,100,0,2,0],[96,100,0,2,0],[98,94.9,0,2,0],[100,100,0,2,0],[102,92.5,0,2,0]]},{"file":"collection/Doyle F vs Sorokin Y 2026-04-04.pgn","index":0,"side":"black","site":null,"plies":171,"depth":12,"accuracy":96.7,"acpl":9,"moves":85,"inaccuracies":0,"mistakes":0,"blunders":0,"brilliancies":0,"bookMoves":5,"perMove":[[1,98.4,0,0,1],[3,94.8,0,0,1],[5,97.6,0,0,1],[7,98,0,0,1],[9,100,0,0,1],[11,88.3,0,0,0],[13,97.6,0,0,0],[15,98.4,0,0,0],[17,98.8,0,0,0],[19,95.2,0,0,0],[21,100,0,0,0],[23,97.2,0,0,0],[25,95.2,0,0,0],[27,100,0,0,0],[29,95.6,0,0,0],[31,97.5,0,0,0],[33,100,0,0,0],[35,93.6,0,0,0],[37,96.4,0,0,0],[39,100,0,0,0],[41,94.4,0,0,0],[43,88,0,1,0],[45,96.4,0,1,0],[47,94.8,0,1,0],[49,89.1,0,1,0],[51,100,0,1,0],[53,100,0,1,0],[55,94.8,0,1,0],[57,100,0,1,0],[59,100,0,1,0],[61,92.5,0,1,0],[63,99.2,0,1,0],[65,100,0,1,0],[67,97.2,0,1,0],[69,100,0,1,0],[71,100,0,1,0],[73,97.6,0,1,0],[75,100,0,1,0],[77,97.6,0,1,0],[79,100,0,1,0],[81,93.3,0,1,0],[83,100,0,1,0],[85,98.4,0,1,0],[87,94,0,1,0],[89,100,0,1,0],[91,93.7,0,1,0],[93,100,0,1,0],[95,92.5,0,1,0],[97,97.2,0,1,0],[99,89.5,0,1,0],[101,98.4,0,1,0],[103,100,0,1,0],[105,100,0,1,0],[107,89.3,0,1,0],[109,96.5,0,1,0],[111,95.3,0,1,0],[113,94.6,0,1,0],[115,97,0,1,0],[117,96.3,0,1,0],[119,100,0,1,0],[121,91.3,0,1,0],[123,86.6,0,1,0],[125,100,0,1,0],[127,100,0,1,0],[129,98.9,0,1,0],[131,100,0,2,0],[133,100,0,2,0],[135,99.2,0,2,0],[137,83.1,0,2,0],[139,100,0,2,0],[141,92,0,2,0],[143,100,0,2,0],[145,89.7,0,2,0],[147,100,0,2,0],[149,100,0,2,0],[151,90.2,0,2,0],[153,100,0,2,0],[155,95.6,0,2,0],[157,98.4,0,2,0],[159,93.8,0,2,0],[161,100,0,2,0],[163,92.4,0,2,0],[165,99.6,0,2,0],[167,97.2,0,2,0],[169,99.8,0,2,0]]},{"file":"collection/Ekstr\\u00f6m P vs Zahavi O 2026-05-02.pgn","index":0,"side":"white","site":null,"plies":70,"depth":12,"accuracy":90.3,"acpl":52,"moves":35,"inaccuracies":2,"mistakes":0,"blunders":2,"brilliancies":0,"bookMoves":6,"perMove":[[0,94,0,0,1],[2,100,0,0,1],[4,100,0,0,1],[6,95.6,0,0,1],[8,100,0,0,1],[10,99.2,0,0,1],[12,99.6,0,0,0],[14,100,0,0,0],[16,83.3,0,0,0],[18,94.4,0,0,0],[20,90.2,0,0,0],[22,96.4,0,0,0],[24,100,0,0,0],[26,84.2,0,0,0],[28,98.4,0,0,0],[30,85.1,0,0,0],[32,100,0,0,0],[34,99.2,0,0,0],[36,39.8,4,1,0],[38,74.3,6,1,0],[40,100,0,1,0],[42,96.8,0,1,0],[44,16.6,4,1,0],[46,95.9,0,1,0],[48,93.5,0,1,0],[50,97.4,0,1,0],[52,100,0,1,0],[54,87.7,0,2,0],[56,90.6,0,2,0],[58,91,0,2,0],[60,91.6,0,2,0],[62,91.8,0,2,0],[64,97.8,0,2,0],[66,96.1,0,2,0],[68,79.4,6,2,0]]},{"file":"collection/Ekstr\\u00f6m P vs Zahavi O 2026-05-17.pgn","index":0,"side":"black","site":null,"plies":138,"depth":12,"accuracy":96.7,"acpl":18,"moves":69,"inaccuracies":3,"mistakes":0,"blunders":0,"brilliancies":1,"bookMoves":6,"perMove":[[1,100,0,0,1],[3,96.7,0,0,1],[5,100,0,0,1],[7,95.2,0,0,1],[9,100,0,0,1],[11,100,0,0,1],[13,99.6,0,0,0],[15,100,0,0,0],[17,100,0,0,0],[19,99.2,0,0,0],[21,98.8,0,0,0],[23,93.6,0,0,0],[25,100,3,0,0],[27,100,0,0,0],[29,96.7,0,0,0],[31,100,0,0,0],[33,100,0,0,0],[35,65.5,6,0,0],[37,100,0,1,0],[39,100,0,1,0],[41,100,0,1,0],[43,100,0,1,0],[45,99.6,0,1,0],[47,70.3,6,1,0],[49,100,0,1,0],[51,93.9,0,1,0],[53,100,0,1,0],[55,100,0,1,0],[57,100,0,1,0],[59,100,0,1,0],[61,100,0,1,0],[63,100,0,1,0],[65,94,0,1,0],[67,100,0,2,0],[69,90.5,0,2,0],[71,97.5,0,2,0],[73,91.4,0,2,0],[75,100,0,2,0],[77,100,0,2,0],[79,98.7,0,2,0],[81,95.6,0,2,0],[83,100,0,2,0],[85,100,0,2,0],[87,92.9,0,2,0],[89,91,0,2,0],[91,100,0,2,0],[93,100,0,2,0],[95,98.6,0,2,0],[97,100,0,2,0],[99,70.7,6,2,0],[101,100,0,2,0],[103,100,0,2,0],[105,91.6,0,2,0],[107,100,0,2,0],[109,86.7,0,2,0],[111,97.1,0,2,0],[113,100,0,2,0],[115,100,0,2,0],[117,100,0,2,0],[119,99.9,0,2,0],[121,89.7,0,2,0],[123,98.6,0,2,0],[125,100,0,2,0],[127,97,0,2,0],[129,99.3,0,2,0],[131,84.6,0,2,0],[133,100,0,2,0],[135,100,0,2,0],[137,100,0,2,0]]},{"file":"collection/Farrow K vs Quinn H 2026-06-06.pgn","index":0,"side":"white","site":null,"plies":152,"depth":12,"accuracy":96.6,"acpl":12,"moves":76,"inaccuracies":1,"mistakes":0,"blunders":0,"brilliancies":0,"bookMoves":6,"perMove":[[0,97.6,0,0,1],[2,100,0,0,1],[4,97.6,0,0,1],[6,98,0,0,1],[8,99.6,0,0,1],[10,100,0,0,1],[12,98,0,0,0],[14,97.1,0,0,0],[16,86.9,0,0,0],[18,98.8,0,0,0],[20,88.7,0,0,0],[22,94.4,0,0,0],[24,100,0,0,0],[26,98.8,0,0,0],[28,100,0,1,0],[30,94.8,0,1,0],[32,100,0,1,0],[34,100,0,1,0],[36,97.6,0,1,0],[38,100,0,1,0],[40,94.4,0,1,0],[42,93.3,0,1,0],[44,100,0,1,0],[46,97.2,0,1,0],[48,99.2,0,1,0],[50,87.5,0,1,0],[52,100,0,1,0],[54,81.1,0,2,0],[56,84.9,0,2,0],[58,73.2,6,2,0],[60,92.6,0,2,0],[62,100,0,2,0],[64,93.3,0,2,0],[66,99.2,0,2,0],[68,100,0,2,0],[70,100,0,2,0],[72,97.4,0,2,0],[74,96.3,0,2,0],[76,97.4,0,2,0],[78,97,0,2,0],[80,99.6,0,2,0],[82,100,0,2,0],[84,99.2,0,2,0],[86,100,0,2,0],[88,96.7,0,2,0],[90,93.4,0,2,0],[92,100,0,2,0],[94,97.1,0,2,0],[96,92.8,0,2,0],[98,90.2,0,2,0],[100,97.3,0,2,0],[102,92.3,0,2,0],[104,94.6,0,2,0],[106,100,0,2,0],[108,100,0,2,0],[110,90.4,0,2,0],[112,96,0,2,0],[114,89.2,0,2,0],[116,100,0,2,0],[118,99.3,0,2,0],[120,95.9,0,2,0],[122,99.6,0,2,0],[124,99.7,0,2,0],[126,99.2,0,2,0],[128,96.4,0,2,0],[130,97.9,0,2,0],[132,98.6,0,2,0],[134,99.9,0,2,0],[136,93.8,0,2,0],[138,97.2,0,2,0],[140,100,0,2,0],[142,100,0,2,0],[144,100,0,2,0],[146,100,0,2,0],[148,100,0,2,0],[150,100,0,2,0]]},{"file":"collection/Grieve M vs Verhoeven J 2026-07-07.pgn","index":0,"side":"black","site":null,"plies":84,"depth":12,"accuracy":92.2,"acpl":26,"moves":42,"inaccuracies":4,"mistakes":0,"blunders":2,"brilliancies":0,"bookMoves":6,"perMove":[[1,92.5,0,0,1],[3,100,0,0,1],[5,96.3,0,0,1],[7,91.7,0,0,1],[9,97.6,0,0,1],[11,100,0,0,1],[13,92.1,0,0,0],[15,76.1,6,0,0],[17,97.2,0,0,0],[19,91.8,0,0,0],[21,89.9,0,0,0],[23,98,0,0,0],[25,100,0,0,0],[27,100,0,0,0],[29,98.4,0,0,0],[31,99.6,0,1,0],[33,73.8,6,1,0],[35,96,0,1,0],[37,100,0,1,0],[39,100,0,1,0],[41,100,0,1,0],[43,99.2,0,1,0],[45,81.3,0,1,0],[47,93.6,0,1,0],[49,100,0,1,0],[51,100,0,1,0],[53,89.4,0,1,0],[55,98,0,1,0],[57,75.7,6,1,0],[59,100,0,1,0],[61,100,0,1,0],[63,100,0,1,0],[65,90.6,0,1,0],[67,36.5,4,1,0],[69,77.8,6,1,0],[71,39.5,4,2,0],[73,100,0,2,0],[75,100,0,2,0],[77,100,0,2,0],[79,100,0,2,0],[81,100,0,2,0],[83,100,0,2,0]]},{"file":"collection/Halvorsen T vs Oyelaran B 2026-08-08.pgn","index":0,"side":"white","site":null,"plies":172,"depth":12,"accuracy":95.2,"acpl":27,"moves":86,"inaccuracies":1,"mistakes":1,"blunders":0,"brilliancies":0,"bookMoves":2,"perMove":[[0,92.4,0,0,1],[2,100,0,0,1],[4,100,0,0,0],[6,91.7,0,0,0],[8,100,0,0,0],[10,100,0,0,0],[12,100,0,0,0],[14,100,0,0,0],[16,98,0,0,0],[18,93.6,0,0,0],[20,99.6,0,0,0],[22,96.3,0,0,0],[24,80.7,0,0,0],[26,95.6,0,0,0],[28,98,0,0,0],[30,97.6,0,0,0],[32,90.9,0,0,0],[34,87.6,0,0,0],[36,94.9,0,0,0],[38,88.5,0,0,0],[40,96.5,0,0,0],[42,95,0,0,0],[44,95.6,0,0,0],[46,99.6,0,0,0],[48,100,0,0,0],[50,95.6,0,1,0],[52,74.4,6,1,0],[54,91.4,0,1,0],[56,100,0,1,0],[58,88.8,0,1,0],[60,93.4,0,1,0],[62,88.9,0,2,0],[64,100,0,2,0],[66,99.2,0,2,0],[68,100,0,2,0],[70,95.7,0,2,0],[72,91,0,2,0],[74,97.3,0,2,0],[76,100,0,2,0],[78,100,0,2,0],[80,100,0,2,0],[82,94.1,0,2,0],[84,100,0,2,0],[86,91.9,0,2,0],[88,100,0,2,0],[90,97.8,0,2,0],[92,97.8,0,2,0],[94,100,0,2,0],[96,96.5,0,2,0],[98,84.7,0,2,0],[100,100,0,2,0],[102,94.8,0,2,0],[104,100,0,2,0],[106,100,0,2,0],[108,100,0,2,0],[110,98,0,2,0],[112,99.2,0,2,0],[114,100,0,2,0],[116,100,0,2,0],[118,97.2,0,2,0],[120,87.6,0,2,0],[122,100,0,2,0],[124,87.5,0,2,0],[126,89.6,0,2,0],[128,94.8,0,2,0],[130,98.9,0,2,0],[132,100,0,2,0],[134,97.3,0,2,0],[136,92.4,0,2,0],[138,87.6,0,2,0],[140,98.5,0,2,0],[142,100,0,2,0],[144,89,0,2,0],[146,100,0,2,0],[148,100,0,2,0],[150,85.4,0,2,0],[152,51.5,2,2,0],[154,96,0,2,0],[156,99.8,0,2,0],[158,100,0,2,0],[160,91.6,0,2,0],[162,99.3,0,2,0],[164,81.5,0,2,0],[166,100,0,2,0],[168,100,0,2,0],[170,100,0,2,0]]},{"file":"collection/Ibarra L vs Tavares M 2026-09-09.pgn","index":0,"side":"black","site":null,"plies":126,"depth":12,"accuracy":98.2,"acpl":5,"moves":63,"inaccuracies":0,"mistakes":0,"blunders":0,"brilliancies":1,"bookMoves":7,"perMove":[[1,99.2,0,0,1],[3,97.2,0,0,1],[5,100,0,0,1],[7,92.1,0,0,1],[9,98.8,0,0,1],[11,100,0,0,1],[13,99.2,0,0,1],[15,96.4,0,0,0],[17,100,0,0,0],[19,100,0,0,0],[21,99.6,0,0,0],[23,100,0,0,0],[25,100,0,0,0],[27,94,0,0,0],[29,100,0,0,0],[31,100,0,0,0],[33,87.6,0,1,0],[35,95.6,0,1,0],[37,100,0,1,0],[39,100,0,1,0],[41,98.4,0,1,0],[43,100,0,1,0],[45,100,0,1,0],[47,100,0,1,0],[49,100,0,1,0],[51,97.2,0,1,0],[53,100,0,1,0],[55,100,0,1,0],[57,100,0,1,0],[59,100,0,1,0],[61,94.5,0,1,0],[63,95.4,0,1,0],[65,100,0,1,0],[67,97.1,0,1,0],[69,100,0,1,0],[71,100,0,1,0],[73,94.6,0,1,0],[75,100,0,2,0],[77,100,0,2,0],[79,89.9,0,2,0],[81,100,0,2,0],[83,99.6,0,2,0],[85,100,0,2,0],[87,100,0,2,0],[89,97.5,0,2,0],[91,100,0,2,0],[93,100,0,2,0],[95,95.4,0,2,0],[97,81.5,0,2,0],[99,100,0,2,0],[101,100,3,2,0],[103,90.6,0,2,0],[105,100,0,2,0],[107,100,0,2,0],[109,97.9,0,2,0],[111,100,0,2,0],[113,100,0,2,0],[115,96.7,0,2,0],[117,100,0,2,0],[119,100,0,2,0],[121,100,0,2,0],[123,100,0,2,0],[125,100,0,2,0]]},{"file":"collection/Jessel A vs Marchetti C 2026-10-10.pgn","index":0,"side":"white","site":null,"plies":126,"depth":12,"accuracy":98.5,"acpl":4,"moves":63,"inaccuracies":0,"mistakes":0,"blunders":0,"brilliancies":2,"bookMoves":4,"perMove":[[0,93.6,0,0,1],[2,99.2,0,0,1],[4,100,0,0,1],[6,92.1,0,0,1],[8,95.9,0,0,0],[10,100,0,0,0],[12,98.4,0,0,0],[14,98,0,0,0],[16,100,0,0,0],[18,100,0,0,0],[20,88.3,0,0,0],[22,97.1,0,0,0],[24,100,0,0,0],[26,98.4,0,0,0],[28,100,0,1,0],[30,100,0,1,0],[32,100,0,1,0],[34,94,0,1,0],[36,100,0,1,0],[38,98,0,1,0],[40,100,0,1,0],[42,100,0,1,0],[44,100,0,1,0],[46,98.4,0,1,0],[48,98.4,0,1,0],[50,100,0,1,0],[52,98.8,0,1,0],[54,100,0,1,0],[56,99.2,0,1,0],[58,98.8,0,1,0],[60,100,0,1,0],[62,99.2,0,1,0],[64,100,0,1,0],[66,100,0,1,0],[68,100,0,1,0],[70,100,0,1,0],[72,100,0,1,0],[74,100,0,1,0],[76,83,0,1,0],[78,97.5,0,1,0],[80,100,0,1,0],[82,99.6,0,1,0],[84,100,0,1,0],[86,99.6,0,1,0],[88,98.4,0,1,0],[90,100,0,1,0],[92,100,0,1,0],[94,98.8,3,1,0],[96,97.1,0,1,0],[98,100,0,1,0],[100,100,0,1,0],[102,94,0,2,0],[104,95.2,0,2,0],[106,100,0,2,0],[108,100,0,2,0],[110,100,0,2,0],[112,98,0,2,0],[114,100,3,2,0],[116,100,0,2,0],[118,100,0,2,0],[120,100,0,2,0],[122,100,0,2,0],[124,100,0,2,0]]},{"file":"collection/Kowal D vs Rasmussen I 2026-11-11.pgn","index":0,"side":"black","site":null,"plies":69,"depth":12,"accuracy":98.4,"acpl":4,"moves":34,"inaccuracies":0,"mistakes":0,"blunders":0,"brilliancies":0,"bookMoves":5,"perMove":[[1,100,0,0,1],[3,100,0,0,1],[5,98.8,0,0,1],[7,100,0,0,1],[9,98.4,0,0,1],[11,98.8,0,0,0],[13,98,0,0,0],[15,97.6,0,0,0],[17,100,0,0,0],[19,94.8,0,0,0],[21,100,0,0,0],[23,99.6,0,0,0],[25,100,0,0,0],[27,95.6,0,0,0],[29,100,0,0,0],[31,99.6,0,0,0],[33,100,0,0,0],[35,98.8,0,0,0],[37,100,0,0,0],[39,100,0,0,0],[41,100,0,0,0],[43,97.5,0,0,0],[45,100,0,0,0],[47,99.6,0,0,0],[49,96,0,0,0],[51,100,0,0,0],[53,96.3,0,0,0],[55,88,0,0,0],[57,100,0,0,0],[59,100,0,0,0],[61,97.1,0,0,0],[63,100,0,0,0],[65,90.9,0,0,0],[67,98.8,0,0,0]]},{"file":"collection/Lindqvist S vs Whitlock A 2026-12-12.pgn","index":0,"side":"white","site":null,"plies":72,"depth":12,"accuracy":99.1,"acpl":2,"moves":36,"inaccuracies":0,"mistakes":0,"blunders":0,"brilliancies":0,"bookMoves":4,"perMove":[[0,99.6,0,0,1],[2,97.6,0,0,1],[4,100,0,0,1],[6,97.6,0,0,1],[8,99.6,0,0,0],[10,100,0,0,0],[12,93.6,0,0,0],[14,100,0,0,0],[16,100,0,0,0],[18,99.2,0,0,0],[20,100,0,0,0],[22,100,0,0,0],[24,100,0,0,0],[26,100,0,0,0],[28,98.8,0,0,0],[30,99.6,0,0,0],[32,100,0,0,0],[34,99.6,0,1,0],[36,100,0,1,0],[38,90.2,0,1,0],[40,100,0,1,0],[42,95.6,0,1,0],[44,100,0,1,0],[46,97.5,0,1,0],[48,100,0,1,0],[50,100,0,1,0],[52,100,0,1,0],[54,100,0,1,0],[56,100,0,1,0],[58,100,0,1,0],[60,100,0,1,0],[62,100,0,1,0],[64,100,0,1,0],[66,100,0,1,0],[68,100,0,1,0],[70,100,0,1,0]]}]
`,"games/bookmarks.json":`{
  "keys": [
    "collection/Ibarra L vs Tavares M 2026-09-21.pgn"
  ]
}
`,"games/chesscom/vaultdemo/2026-08.pgn":`[Event "Live Chess"]
[Site "Chess.com"]
[Date "2026.08.01"]
[Round "-"]
[White "vaultdemo"]
[Black "marmalade_knight"]
[Result "1-0"]
[WhiteElo "1512"]
[BlackElo "1498"]
[ECO "C54"]
[TimeControl "600"]
[Termination "vaultdemo won by checkmate"]
[UTCDate "2026.08.01"]
[Link "https://www.chess.com/game/live/1400000001"]

1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. c3 Nf6 5. d4 exd4 6. cxd4 Bb4+ 7. Nc3 Nxe4 8. O-O Bxc3 9. d5 Bf6 10. Re1 Ne7 11. Rxe4 d6 12. Bg5 Bxg5 13. Nxg5 O-O 14. Nxh7 Kxh7 15. Qh5+ Kg8 16. Rh4 f5 17. Qh7# 1-0

[Event "Live Chess"]
[Site "Chess.com"]
[Date "2026.08.02"]
[Round "-"]
[White "vaultdemo"]
[Black "rook_and_roll"]
[Result "0-1"]
[WhiteElo "1512"]
[BlackElo "1498"]
[ECO "C50"]
[TimeControl "180"]
[Termination "rook_and_roll won by resignation"]
[UTCDate "2026.08.02"]
[Link "https://www.chess.com/game/live/1400000002"]

1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. Bxf7+ Kxf7 5. Nxe5+ Nxe5 6. Qh5+ Ng6 7. d4 Bxd4 8. O-O Nf6 9. Qd1 d6 10. c3 Bb6 11. Nd2 Re8 12. Nf3 Kg8 13. Kh1 Ne5 14. Nxe5 dxe5 15. f4 Qe7 0-1

[Event "Live Chess"]
[Site "Chess.com"]
[Date "2026.08.03"]
[Round "-"]
[White "vaultdemo"]
[Black "quiet_bishop"]
[Result "1/2-1/2"]
[WhiteElo "1512"]
[BlackElo "1498"]
[ECO "C67"]
[TimeControl "600"]
[Termination "Game drawn by insufficient material"]
[UTCDate "2026.08.03"]
[Link "https://www.chess.com/game/live/1400000003"]

1. e4 e5 2. Nf3 Nc6 3. Bb5 Nf6 4. O-O Nxe4 5. d4 Nd6 6. Bxc6 dxc6 7. dxe5 Nf5 8. Qxd8+ Kxd8 9. Nc3 Ke8 10. h3 h5 11. Bg5 Be6 12. Rad1 Be7 13. Bxe7 Kxe7 1/2-1/2

[Event "Live Chess"]
[Site "Chess.com"]
[Date "2026.08.05"]
[Round "-"]
[White "vaultdemo"]
[Black "pawnstorm_pete"]
[Result "1-0"]
[WhiteElo "1512"]
[BlackElo "1498"]
[ECO "C45"]
[TimeControl "60"]
[Termination "vaultdemo won by checkmate"]
[UTCDate "2026.08.05"]
[Link "https://www.chess.com/game/live/1400000004"]

1. e4 e5 2. Nf3 Nc6 3. d4 exd4 4. Nxd4 Bc5 5. Be3 Qf6 6. c3 Nge7 7. Bc4 Ne5 8. Be2 Qg6 9. O-O d6 10. f3 O-O 11. Kh1 Bh3 12. Rg1 Bxg2+ 13. Rxg2 Qxg2# 1-0

[Event "Live Chess"]
[Site "Chess.com"]
[Date "2026.08.06"]
[Round "-"]
[White "vaultdemo"]
[Black "najdorf_nina"]
[Result "0-1"]
[WhiteElo "1512"]
[BlackElo "1498"]
[ECO "B90"]
[TimeControl "600"]
[Termination "najdorf_nina won by resignation"]
[UTCDate "2026.08.06"]
[Link "https://www.chess.com/game/live/1400000005"]

1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 a6 6. Be3 e5 7. Nb3 Be6 8. f3 Be7 9. Qd2 O-O 10. O-O-O Nbd7 11. g4 b5 12. g5 b4 13. Ne2 Ne8 14. f4 a5 15. f5 a4 0-1

[Event "Live Chess"]
[Site "Chess.com"]
[Date "2026.08.08"]
[Round "-"]
[White "vaultdemo"]
[Black "marmalade_knight"]
[Result "1-0"]
[WhiteElo "1512"]
[BlackElo "1498"]
[ECO "B31"]
[TimeControl "180"]
[Termination "vaultdemo won by timeout"]
[UTCDate "2026.08.08"]
[Link "https://www.chess.com/game/live/1400000006"]

1. e4 c5 2. Nf3 Nc6 3. Bb5 g6 4. Bxc6 dxc6 5. d3 Bg7 6. h3 Nf6 7. Nc3 O-O 8. Be3 b6 9. Qd2 e5 10. Bh6 Qd6 11. Bxg7 Kxg7 12. O-O-O Be6 13. Ng5 Rad8 14. f4 exf4 15. Qxf4 1-0

[Event "Live Chess"]
[Site "Chess.com"]
[Date "2026.08.10"]
[Round "-"]
[White "vaultdemo"]
[Black "french_fry_fred"]
[Result "1-0"]
[WhiteElo "1512"]
[BlackElo "1498"]
[ECO "C18"]
[TimeControl "900+10"]
[Termination "vaultdemo won by resignation"]
[UTCDate "2026.08.10"]
[Link "https://www.chess.com/game/live/1400000007"]

1. e4 e6 2. d4 d5 3. Nc3 Bb4 4. e5 c5 5. a3 Bxc3+ 6. bxc3 Ne7 7. Qg4 O-O 8. Bd3 Nbc6 9. Qh5 Ng6 10. Nf3 Qc7 11. Be3 c4 12. Bxg6 fxg6 13. Qg4 Bd7 14. h4 Rf5 15. h5 1-0

[Event "Live Chess"]
[Site "Chess.com"]
[Date "2026.08.12"]
[Round "-"]
[White "rook_and_roll"]
[Black "vaultdemo"]
[Result "0-1"]
[WhiteElo "1503"]
[BlackElo "1512"]
[ECO "B96"]
[TimeControl "180"]
[Termination "vaultdemo won by resignation"]
[UTCDate "2026.08.12"]
[Link "https://www.chess.com/game/live/1400000008"]

1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 a6 6. Bg5 e6 7. f4 Be7 8. Qf3 Qc7 9. O-O-O Nbd7 10. g4 b5 11. Bxf6 Nxf6 12. g5 Nd7 13. a3 Rb8 14. h4 b4 15. axb4 Rxb4 0-1

[Event "Live Chess"]
[Site "Chess.com"]
[Date "2026.08.14"]
[Round "-"]
[White "quiet_bishop"]
[Black "vaultdemo"]
[Result "1-0"]
[WhiteElo "1503"]
[BlackElo "1512"]
[ECO "B19"]
[TimeControl "600"]
[Termination "quiet_bishop won by timeout"]
[UTCDate "2026.08.14"]
[Link "https://www.chess.com/game/live/1400000009"]

1. e4 c6 2. d4 d5 3. Nc3 dxe4 4. Nxe4 Bf5 5. Ng3 Bg6 6. h4 h6 7. Nf3 Nd7 8. h5 Bh7 9. Bd3 Bxd3 10. Qxd3 e6 11. Bd2 Ngf6 12. O-O-O Be7 13. Kb1 O-O 14. Ne4 Nxe4 15. Qxe4 Nf6 16. Qe2 Qd5 17. c4 Qe4 18. Qxe4 Nxe4 19. Be3 1-0

[Event "Live Chess"]
[Site "Chess.com"]
[Date "2026.08.16"]
[Round "-"]
[White "pawnstorm_pete"]
[Black "vaultdemo"]
[Result "1/2-1/2"]
[WhiteElo "1503"]
[BlackElo "1512"]
[ECO "D37"]
[TimeControl "600"]
[Termination "Game drawn by agreement"]
[UTCDate "2026.08.16"]
[Link "https://www.chess.com/game/live/1400000010"]

1. d4 d5 2. c4 e6 3. Nc3 Nf6 4. Bg5 Be7 5. e3 O-O 6. Nf3 h6 7. Bh4 b6 8. Be2 Bb7 9. Bxf6 Bxf6 10. cxd5 exd5 11. O-O c5 12. dxc5 bxc5 13. Qc2 Nd7 14. Rfd1 Qe7 1/2-1/2

[Event "Live Chess"]
[Site "Chess.com"]
[Date "2026.08.18"]
[Round "-"]
[White "najdorf_nina"]
[Black "vaultdemo"]
[Result "0-1"]
[WhiteElo "1503"]
[BlackElo "1512"]
[ECO "E97"]
[TimeControl "180"]
[Termination "vaultdemo won by resignation"]
[UTCDate "2026.08.18"]
[Link "https://www.chess.com/game/live/1400000011"]

1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. Nf3 O-O 6. Be2 e5 7. O-O Nc6 8. d5 Ne7 9. Ne1 Nd7 10. Be3 f5 11. f3 f4 12. Bf2 g5 13. a4 Ng6 14. a5 Rf7 15. Nd3 Bf8 16. c5 h5 0-1

[Event "Live Chess"]
[Site "Chess.com"]
[Date "2026.08.20"]
[Round "-"]
[White "french_fry_fred"]
[Black "vaultdemo"]
[Result "1-0"]
[WhiteElo "1503"]
[BlackElo "1512"]
[ECO "D02"]
[TimeControl "60"]
[Termination "french_fry_fred won by timeout"]
[UTCDate "2026.08.20"]
[Link "https://www.chess.com/game/live/1400000012"]

1. d4 d5 2. Bf4 Nf6 3. e3 c5 4. c3 Nc6 5. Nd2 e6 6. Ngf3 Bd6 7. Bg3 O-O 8. Bd3 b6 9. Ne5 Bb7 10. f4 Ne7 11. Qf3 Nf5 12. Bf2 Nd7 13. g4 Nxe5 14. gxf5 Nxd3+ 15. Ke2 Nxf2 16. Kxf2 exf5 1-0

[Event "Live Chess"]
[Site "Chess.com"]
[Date "2026.08.22"]
[Round "-"]
[White "marmalade_knight"]
[Black "vaultdemo"]
[Result "0-1"]
[WhiteElo "1503"]
[BlackElo "1512"]
[ECO "A29"]
[TimeControl "900+10"]
[Termination "vaultdemo won by resignation"]
[UTCDate "2026.08.22"]
[Link "https://www.chess.com/game/live/1400000013"]

1. c4 e5 2. Nc3 Nf6 3. Nf3 Nc6 4. g3 d5 5. cxd5 Nxd5 6. Bg2 Nb6 7. O-O Be7 8. d3 O-O 9. a3 Be6 10. b4 f6 11. Bb2 a5 12. b5 Nd4 13. Nd2 Qd7 14. e3 Nf5 0-1

[Event "Live Chess"]
[Site "Chess.com"]
[Date "2026.08.24"]
[Round "-"]
[White "rook_and_roll"]
[Black "vaultdemo"]
[Result "1-0"]
[WhiteElo "1503"]
[BlackElo "1512"]
[ECO "C57"]
[TimeControl "180"]
[Termination "rook_and_roll won by resignation"]
[UTCDate "2026.08.24"]
[Link "https://www.chess.com/game/live/1400000014"]

1. e4 e5 2. Nf3 Nc6 3. Bc4 Nf6 4. Ng5 d5 5. exd5 Nxd5 6. Nxf7 Kxf7 7. Qf3+ Ke6 8. Nc3 Ncb4 9. Qe4 c6 10. a3 Na6 11. d4 Nac7 12. Bf4 Kf7 13. Bxe5 Kg8 14. O-O-O Be6 15. Rhe1 1-0

[Event "Live Chess"]
[Site "Chess.com"]
[Date "2026.08.26"]
[Round "-"]
[White "vaultdemo"]
[Black "quiet_bishop"]
[Result "1-0"]
[WhiteElo "1512"]
[BlackElo "1498"]
[ECO "C42"]
[TimeControl "600"]
[Termination "vaultdemo won by timeout"]
[UTCDate "2026.08.26"]
[Link "https://www.chess.com/game/live/1400000015"]

1. e4 e5 2. Nf3 Nf6 3. Nxe5 d6 4. Nf3 Nxe4 5. d4 d5 6. Bd3 Bd6 7. O-O O-O 8. c4 c6 9. Nc3 Nxc3 10. bxc3 dxc4 11. Bxc4 Bg4 12. Qd3 Nd7 13. Ng5 Bh5 14. Qh3 Bg6 15. Nxf7 Bxf7 16. Bxf7+ Rxf7 17. Qe6 1-0

[Event "Live Chess"]
[Site "Chess.com"]
[Date "2026.08.28"]
[Round "-"]
[White "pawnstorm_pete"]
[Black "vaultdemo"]
[Result "1/2-1/2"]
[WhiteElo "1503"]
[BlackElo "1512"]
[ECO "B22"]
[TimeControl "60"]
[Termination "Game drawn by agreement"]
[UTCDate "2026.08.28"]
[Link "https://www.chess.com/game/live/1400000016"]

1. e4 c5 2. c3 d5 3. exd5 Qxd5 4. d4 Nf6 5. Nf3 Bg4 6. Be2 e6 7. h3 Bh5 8. O-O Nc6 9. Be3 cxd4 10. cxd4 Be7 11. Nc3 Qd6 12. a3 O-O 13. Qb3 Rab8 1/2-1/2
`,"games/collection/Alderman R vs Pereira V 2026-01-01.pgn":`[Event "Tata Steel Masters"]
[Site "Chess Vault demo (sample data, invented players)"]
[Date "2026.01.01"]
[Round "1"]
[White "Alderman, R"]
[Black "Pereira, V"]
[Result "1-0"]
[WhiteElo "2717"]
[BlackElo "2649"]
[ECO "B97"]
[Opening "Sicilian Defense: Najdorf Variation, Poisoned Pawn Accepted"]
[TimeControl "5400+30"]
[VaultSide "white"]

1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 a6
{The opening is a way of reaching a position worth thinking about, and this one arrives by move ten.}
6. Bg5 e6
{The attacking scheme from here on is the one in [[Attacking the castled king]].} 7. f4
Qb6 8. Qd2 Qxb2 9. Rb1 Qa3 10. f5 b5 11. fxe6 fxe6 12. Be2 Be7 13. O-O Ra7 14. Rb3 Qa5 15.
Bxf6 Bxf6 16. Bh5+ Kd8 17. Rxf6 gxf6 18. Qf4 Re8 19. Qxf6+ Rae7 20. Bxe8 Kxe8 21. e5 dxe5
22. Nf3 Qb6+ 23. Kh1 Rf7 24. Qh8+ Rf8 25. Qxh7 Bb7 26. Ne4 Bxe4 27. Qxe4 Rf5 28. g4 Rf7
29. Nxe5 Rf1+ 30. Kg2 Qg1+ 31. Kh3 Rf6 32. Qe3 Rf2 33. Nf3 Qg2+ 34. Kh4 Rxc2 35. Qxe6+ Kd8
36. Rd3+ Kc7 37. h3 Qf1 38. Qe7+ Kb6 39. Rd6+ Ka5 40. Qe3 Qf2+ 41. Qxf2 Rxf2 42. Nd4 Kb4
43. Rd8 Kc4 44. g5 Rf4+ 45. Kh5 Rxd4 46. Rxb8 Rd2 47. Rc8+ Kb4 48. g6 Rxa2 49. Rc6 Rg2 50.
Rxa6 Kc5 51. Ra8 b4 52. Rb8 Kc4 53. h4 Kc3 54. Kh6 b3 55. g7 b2 56. h5 Rg4 57. Rxb2 Kxb2
58. Kh7 Rg5 59. h6 Rg2 60. g8=Q Re2 61. Qd5 Kc3 62. Qf3+ Kd2 63. Qxe2+ Kxe2 64. Kg6 Kf3
65. Kf5 Ke3 66. h7 Kd3 67. h8=Q Kc4 68. Qe5 Kd3 69. Qc5 Ke2 70. Kf4 Kd3 71. Kf3 Kd2 72.
Qc4 Kd1 73. Ke3 Ke1 74. Qc1# 1-0
`,"games/collection/Alderman R vs Pereira V 2026-01-13.pgn":`[Event "Club championship"]
[Site "Chess Vault demo (sample data, invented players)"]
[Date "2026.01.13"]
[Round "4"]
[White "Alderman, R"]
[Black "Pereira, V"]
[Result "1-0"]
[WhiteElo "2731"]
[BlackElo "2663"]
[ECO "C65"]
[Opening "Ruy Lopez: Berlin Defense"]
[TimeControl "5400+30"]

1. e4 e5 2. Nf3 Nc6 3. Bb5 Nf6 4. d3 Bc5 5. Bxc6 dxc6 6. O-O Bg4 7. h3 Bh5 8. g4 Nxg4 9.
hxg4 Bxg4 10. Be3 Be7 11. Kg2 f5
{Both rooks on open files before either side has a plan for them. The plan is what the next ten moves are about.}
12. Qe1 Bxf3+ 13. Kxf3 f4 14. Bd2 h5 15. Ke2 Qd7 16. Bc3 Bf6 17. Rh1 g5 18. f3 O-O-O 19.
Qf2 b6 20. Nd2 g4 21. a4 g3 22. Qg2 Rdg8 23. Rag1 Qe7 24. Kf1 h4 25. Qh3+ Kb7 26. Rg2 Rh5
27. Re2 Rgh8 28. b4 Qf8 29. Kg2 a6 30. Rb1 Qe8 31. Nc4 Bg7 32. Nb2 Qf7 33. Rc1 Bf8 34. Rd1
Bg7 35. a5 b5 36. d4 exd4 37. Bd2 Rf8 38. Nd3 Be5 39. Rde1 Qc4 40. Kh1 Kb8 41. Qg4 Qf7 42.
Nc5 Ka8 43. Qd7 Qg6 44. Qh3 Rg8 45. Bc1 Rg5 46. Kg2 Rh5 47. Nxa6 Bd6 48. Bb2 Kb7 49. Nc5+
Bxc5 50. bxc5 d3 51. cxd3 Ka6 52. Rd2 Rd8 53. e5 b4 54. Re4 b3 55. e6 Re8 56. e7 Rxc5 57.
Rde2 Qh6 58. Re6 Qh7 59. Ba3 Rd5 60. Rxc6+ Kb7 61. a6+ Kb8 62. Rc3 Rxd3 63. Rc4 Rd5 64.
Rxf4 Qd3 65. Qe6 Ka7 66. Rxh4 Qxa6 67. Qxa6+ Kxa6 68. Rb4 c5 69. Rxb3 c4 70. Rb1 c3 71.
Re6+ Ka5 72. Bb4+ Kb5 73. Bxc3+ Kc5 74. Bb4+ Kc4 75. Rc6+ Kb5 76. Rc2 Rd1 77. Rxd1 Kxb4
78. Rb1+ Ka3 79. Rc7 Ka2 80. Rb6 Ra8 81. e8=Q Ra3 82. Rc2+ Ka1 83. Qe1# 1-0
`,"games/collection/Alderman R vs Pereira V 2026-01-25.pgn":`[Event "Sinquefield Cup"]
[Site "Chess Vault demo (sample data, invented players)"]
[Date "2026.01.25"]
[Round "7"]
[White "Alderman, R"]
[Black "Pereira, V"]
[Result "1-0"]
[WhiteElo "2740"]
[BlackElo "2672"]
[ECO "D45"]
[Opening "Semi-Slav Defense: Normal Variation"]
[TimeControl "5400+30"]
[VaultSide "black"]

1. d4 d5 2. c4 c6 3. Nc3 Nf6 4. e3 e6 5. Nf3 Nbd7 6. cxd5 exd5 7. Bd3 Bd6 8. O-O O-O 9. h3
Re8 10. a3 b6 11. Qc2 Bb7 12. Rd1 Rc8 13. Bd2 c5 14. Rac1 cxd4 15. Nxd4 Nc5 16. b4 Nxd3
17. Qxd3 Be5 18. Nf3 g6 19. Nxe5 Rxe5 20. Ne2 Rxc1 21. Rxc1 Bc8 22. Bc3 Re6 23. Nf4 Rd6
24. Bd4 h5 25. Qc3 Bd7 26. Be5 Qe7 27. Bxd6 Qxd6 28. Qd4 Bf5 29. Rd1 h4 30. Nxd5 Nxd5 31.
Qxd5 Qxd5 32. Rxd5 Be6 33. Rd8+ Kg7 34. Ra8 Kf6 35. Rxa7 Bf5 36. a4 g5 37. a5 bxa5 38.
bxa5 Kg6 39. a6 f6 40. Rc7 Be4 41. a7 f5 42. Rc8 g4 43. hxg4 fxg4 44. f4 g3 45. a8=Q 1-0
`,"games/collection/Bex N vs Ueda K 2026-02-02.pgn":`[Event "Candidates Tournament"]
[Site "Chess Vault demo (sample data, invented players)"]
[Date "2026.02.02"]
[Round "2"]
[White "Bex, N"]
[Black "Ueda, K"]
[Result "1-0"]
[WhiteElo "2674"]
[BlackElo "2665"]
[ECO "E06"]
[Opening "Catalan Opening: Closed"]
[TimeControl "5400+30"]

1. Nf3 Nf6 2. c4 e6 3. d4 Be7 4. g3 d5 5. Bg2 c6 6. b3 a5
{The king walk is the one worked out in [[Endgames/Pawn endings - opposition]].} 7. O-O b5
8. c5 Ne4 9. Ne5 O-O 10. f3 Nf6 11. Nd3 b4 12. a3 bxa3 13. Nxa3 Nbd7
{The kind of move that looks like a waiting move and is the whole idea: every enemy piece now has one square fewer.}
14. Nc2 Ba6 15. Nce1 Bb5 16. Rf2 Re8 17. Bb2 h5 18. e3 h4 19. g4 Nh7 20. f4 Nhf6 21. g5
Ne4 22. Rf3 Nf8 23. Rh3 Ng6 24. Nf3 Bxd3 25. Qxd3 f6 26. Nd2 f5 27. Qc2 Qc7 28. Ba3 Rab8
29. Nf3 Rb7 30. Nxh4 Nxh4 31. Rxh4 Qb8 32. Bxe4 dxe4 33. b4 axb4 34. Bb2 Ra7 35. Rxa7 Qxa7
36. Qc4 Bd8 37. Rh3 b3 38. Qxb3 Qf7 39. Bc3 Re7 40. Qb8 Re8 41. Qb2 Re7 42. Qf2 Re8 43.
Qf1 Be7 44. Qa6 Rb8 45. Qxc6 Rb1+ 46. Kf2 Rc1 47. Bd2 Rc2 48. Ke1 Bf8 49. Qa4 Rb2 50. Bc3
Rb7 51. Qc4 Rb8 52. Kf2 Re8 53. Kg2 Rc8 54. Rg3 Qd7 55. Kh1 Be7 56. Rg1 Ra8 57. c6 Qd5 58.
Qxd5 exd5 59. Ra1 Rc8 60. Ra6 Kf7 61. Ba5 Kg6 62. c7+ Kh5 63. Kg2 Bf8 64. Re6 Kg4 65. h3+
Kh5 66. Re5 Bd6 67. Rxd5 Bxc7 68. Rc5 Ra8 69. Bxc7 Ra2+ 70. Kg3 Re2 71. Rxf5 Rxe3+ 72. Kf2
Rc3 73. Be5 Kg6 74. Rf8 Rxh3 75. d5 Rd3 76. d6 Kh5 77. Ke2 g6 78. Rg8 Kh4 79. Rxg6 Kg4 80.
Rf6 Rb3 81. g6 Rb7 82. Rf8 Ra7 83. g7 Ra2+ 84. Ke1 Kf3 85. g8=Q Re2+ 86. Kd1 Re3 87. Qe6
Kg2 88. Rg8+ Rg3 89. Ke2 Rxg8 90. Qxg8+ Kh3 91. d7 Kh2 92. Qg7 Kh3 93. d8=Q e3 94. Qdh8#
1-0
`,"games/collection/Bex N vs Ueda K 2026-02-14.pgn":`[Event "Online rapid arena"]
[Site "Chess Vault demo (sample data, invented players)"]
[Date "2026.02.14"]
[Round "5"]
[White "Bex, N"]
[Black "Ueda, K"]
[Result "1-0"]
[WhiteElo "2688"]
[BlackElo "2679"]
[ECO "E35"]
[Opening "Nimzo-Indian Defense: Classical Variation, Noa Variation"]
[TimeControl "600+5"]
[VaultSide "white"]

1. d4 {[%clk 0:10:00]} Nf6 {[%clk 0:09:52]} 2. c4 {[%clk 0:09:52]} e6 {[%clk 0:09:27]} 3.
Nc3 {[%clk 0:09:34]} Bb4 {[%clk 0:09:50]} 4. Qc2 {[%clk 0:09:06]} d5 {[%clk 0:09:29]} 5.
cxd5 {[%clk 0:08:28]} exd5 {[%clk 0:08:57]} 6. Bg5 {[%clk 0:09:35]} c5 {[%clk 0:08:16]} 7.
dxc5 {[%clk 0:09:00]} h6 {[%clk 0:07:24]} 8. Bh4 {[%clk 0:08:15]} Nc6 {[%clk 0:09:15]} 9.
e3 {[%clk 0:07:20]} g5
{[%clk 0:08:27] Everything hangs and nothing can be taken. Worth playing out on a board before reading further.}
10. Bg3 {[%clk 0:06:15]} Qa5 {[%clk 0:07:28]} 11. Nf3 {[%clk 0:08:50]} Ne4
{[%clk 0:06:20]} 12. Nd2 {[%clk 0:07:48]} Nxc3 {[%clk 0:09:26]} 13. bxc3 {[%clk 0:06:36]}
Bxc3 {[%clk 0:08:20]} 14. Rb1 {[%clk 0:05:14]} d4 {[%clk 0:07:05]} 15. Bd6
{[%clk 0:09:04]} Be6 {[%clk 0:05:39]} 16. Rxb7 {[%clk 0:07:45]} Nb4 {[%clk 0:04:04]} 17.
Qc1 {[%clk 0:06:16]} d3 {[%clk 0:08:38]} 18. a3 {[%clk 0:04:37]} Nc2+ {[%clk 0:07:05]} 19.
Kd1 {[%clk 0:02:48]} Bg4+ {[%clk 0:05:23]} 20. Nf3 {[%clk 0:08:06]} Bf5 {[%clk 0:03:30]}
21. Qb1 {[%clk 0:06:20]} Nxa3 {[%clk 0:01:28]} 22. Qa2 {[%clk 0:04:24]} Nc4
{[%clk 0:07:30]} 23. Re7+ {[%clk 0:02:18]} Kd8 {[%clk 0:05:30]} 24. Bc7+ {[%clk 0:08:51]}
Kxe7 {[%clk 0:03:21]} 25. Bxa5 {[%clk 0:06:48]} Nxa5 {[%clk 0:01:01]} 26. Nd4
{[%clk 0:04:35]} Bg4+ {[%clk 0:08:18]} 27. f3 {[%clk 0:02:12]} Rab8 {[%clk 0:06:02]} 28.
Bxd3 {[%clk 0:00:20]} Be6 {[%clk 0:03:35]} 29. Qa3 {[%clk 0:07:40]} Bxd4 {[%clk 0:00:59]}
30. c6+ {[%clk 0:05:10]} Kf6 {[%clk 0:00:20]} 31. Qxa5 {[%clk 0:02:30]} Bb2
{[%clk 0:06:57]} 32. h4 {[%clk 0:00:20]} g4 {[%clk 0:04:14]} 33. Ke2 {[%clk 0:00:20]} Rhc8
{[%clk 0:01:20]} 34. Be4 {[%clk 0:06:09]} Kg7 {[%clk 0:00:20]} 35. Rb1 {[%clk 0:03:12]}
Rb3 {[%clk 0:08:17]} 36. Qc5 {[%clk 0:00:20]} Rb6 {[%clk 0:05:16]} 37. f4 {[%clk 0:00:20]}
Bf6 {[%clk 0:02:06]} 38. Rxb6 {[%clk 0:07:32]} axb6 {[%clk 0:00:20]} 39. Qxb6
{[%clk 0:04:18]} h5 {[%clk 0:00:20]} 40. Qb5 {[%clk 0:00:54]} Rd8 {[%clk 0:06:43]} 41. g3
{[%clk 0:00:20]} Re8 {[%clk 0:03:15]} 42. c7 {[%clk 0:00:20]} Re7 {[%clk 0:00:20]} 43. Qc5
{[%clk 0:05:48]} Bc8 {[%clk 0:00:20]} 44. Bd3 {[%clk 0:02:07]} Re6 {[%clk 0:00:20]} 45. e4
{[%clk 0:00:20]} Re8 {[%clk 0:04:49]} 46. e5 {[%clk 0:00:20]} Be7 {[%clk 0:00:54]} 47. Qc6
{[%clk 0:07:42]} Rf8 {[%clk 0:00:20]} 48. f5 {[%clk 0:03:44]} f6 {[%clk 0:00:20]} 49. e6
{[%clk 0:00:20]} Bc5 {[%clk 0:06:46]} 50. Qxc5 {[%clk 0:00:20]} Bb7 {[%clk 0:02:35]} 51.
Qe7+ {[%clk 0:00:20]} Kg8 {[%clk 0:00:20]} 52. Ke3 {[%clk 0:05:45]} Bc8 {[%clk 0:00:20]}
53. Bc4 {[%clk 0:01:20]} Bb7 {[%clk 0:00:20]} 54. Qd7 {[%clk 0:00:20]} Rc8
{[%clk 0:04:39]} 55. e7+ {[%clk 0:00:20]} Bd5 {[%clk 0:00:20]} 56. Bxd5+ {[%clk 0:00:20]}
Kh8 {[%clk 0:00:20]} 57. Qxc8+ {[%clk 0:03:28]} Kh7 {[%clk 0:00:20]} 58. Qg8+
{[%clk 0:00:20]} Kh6 {[%clk 0:07:08]} 59. Qg6# {[%clk 0:00:20]} 1-0
`,"games/collection/Bex N vs Ueda K 2026-02-26.pgn":`[Event "FIDE Grand Swiss"]
[Site "Chess Vault demo (sample data, invented players)"]
[Date "2026.02.26"]
[Round "8"]
[White "Bex, N"]
[Black "Ueda, K"]
[Result "1-0"]
[WhiteElo "2697"]
[BlackElo "2688"]
[ECO "B10"]
[Opening "Caro-Kann Defense"]
[TimeControl "5400+30"]

1. e4 c6 2. g3 b5 3. Bg2 Bb7 4. b3 d5 5. Bb2 dxe4 6. Bxe4 f5 7. Bxf5 Nf6 8. Nf3 g6 9. Bd3
Bg7 10. O-O e6 11. Nc3 b4 12. Ne4 Nxe4 13. Bxg7 Rg8 14. Bb2 Nd6 15. Re1 Qd7 16. Qe2 Ke7
17. Ne5 Qc7 18. Nxg6+ Kd7 19. Nf4 Na6 20. Qxe6+ Kd8 21. Re2 c5 22. Rae1 Qc6 23. Be4 Nxe4
24. Rxe4 Qxe6 25. Rxe6 Nc7 26. Bf6+ Kc8 27. Re7 Na6 28. Ne6 c4 29. bxc4 Bc6 30. Be5 Rg6
31. d4 h6 32. d5 Ba4 33. c5 h5 34. c6 h4 35. Re8# 1-0
`,"games/collection/Castellan J vs Novak E 2026-03-03.pgn":`[Event "Norway Chess"]
[Site "Chess Vault demo (sample data, invented players)"]
[Date "2026.03.03"]
[Round "3"]
[White "Castellan, J"]
[Black "Novak, E"]
[Result "1-0"]
[WhiteElo "2640"]
[BlackElo "2567"]
[ECO "C14"]
[Opening "French Defense: Classical Variation, Steinitz Variation"]
[TimeControl "5400+30"]
[VaultSide "black"]

1. e4 e6 2. d4 d5 3. Nc3 Nf6 4. Bg5 Be7 5. e5 Nfd7 6. Bxe7 Qxe7 7. f4 O-O 8. Nf3 c5 9. Nb5
Nc6 10. c3 f6 11. h4 Nb6 12. Qd2 cxd4 13. cxd4 h6 14. Nd6 Bd7 15. Rc1 Be8 16. h5 Rd8 17.
Be2 Rxd6 18. exd6 Qxd6 19. b3 Nc8 20. Bb5 N8e7 21. Kd1 a5
{This endgame is why the middlegame was played that way. The structure was settled twenty moves before it mattered.}
22. g4 Bd7 23. Re1 Qa3 24. Rg1 Kh8 25. Nh4 Be8 26. Rc3 f5 27. g5 Bxh5+ 28. Be2 hxg5 29.
Bxh5 gxh4 30. Qg2 Rg8 31. Qg5 Qb2 32. Bf7 Qb1+ 33. Ke2 Nxd4+ 34. Ke3 Qxg1+ 35. Qxg1 Rf8
36. Kxd4 Rxf7 37. Qe1 e5+ 38. Qxe5 Ng8 39. Qe8 Re7 40. Qh5+ Nh6 41. Qg6 Re4+ 42. Kxd5 Re8
43. Qxe8+ Kh7 44. Rc7 b6 45. Qd7 Nf7 46. Qxf7 Kh6 47. Qxg7+ Kh5 48. Qg5# 1-0
`,"games/collection/Castellan J vs Novak E 2026-03-15.pgn":`[Event "Tata Steel Masters"]
[Site "Chess Vault demo (sample data, invented players)"]
[Date "2026.03.15"]
[Round "6"]
[White "Castellan, J"]
[Black "Novak, E"]
[Result "1-0"]
[WhiteElo "2654"]
[BlackElo "2581"]
[ECO "C54"]
[Opening "Italian Game: Classical Variation, Giuoco Pianissimo, with a6"]
[TimeControl "5400+30"]

1. e4 e5 2. Nf3 Nc6 3. Bc4 Nf6 4. d3 Bc5 5. c3 a6 6. O-O a5 7. d4 d6 8. dxc5 O-O 9. Re1
dxc5 10. Qxd8 Rxd8 11. a4 Bg4 12. Nbd2 Rxd2 13. Nxd2 Re8 14. f3 Be6
{Two results are still possible and only one of them is a draw, which is what makes the position worth keeping.}
15. Bxe6 Rxe6 16. Nc4 h6 17. Be3 b6 18. Rad1 Re8 19. Bc1 Kh7 20. Kf1 Rb8 21. g4 Kg8 22.
Na3 Ne7 23. Nb5 c6 24. Nd6 b5 25. h4 h5 26. g5 Nh7 27. f4 exf4 28. Bxf4 Ng6 29. Nf5 Ra8
30. Bd6 Nhf8 31. Ke2 Ne6 32. Kd2 c4 33. Kc1 b4 34. Rf1 Kh7 35. Kb1 bxc3 36. bxc3 Re8 37.
Ka1 Ra8 38. Ne7 Nxe7 39. Bxe7 Ra7 40. Ba3 c5 41. Rd5 Re7 42. Rdf5 Nd8 43. Bxc5 Rxe4 44.
R5f4 Rxf4 45. Rxf4 Kg6 46. Rxc4 f6 47. gxf6 gxf6 48. Bb6 Ne6 49. Bxa5 Ng5 50. Bb6 Nf7 51.
a5 Kf5 52. a6 Nd6 53. Rb4 Nc8 54. Bc5 Ke6 55. Rd4 Kf7 56. Kb2 Ke8 57. Kb3 f5 58. Kb2 f4
59. Kb3 f3 60. Rd1 f2 61. Bxf2 Ke7 62. Bc5+ Ke8 63. Rd4 Kf7 64. Rd8 Na7 65. Bxa7 Ke6 66.
Bc5 Kf5 67. a7 Kg4 68. Rf8 Kxh4 69. Rg8 Kh3 70. a8=Q h4 71. Qh1# 1-0
`,"games/collection/Castellan J vs Novak E 2026-03-27.pgn":`[Event "Club championship"]
[Site "Chess Vault demo (sample data, invented players)"]
[Date "2026.03.27"]
[Round "9"]
[White "Castellan, J"]
[Black "Novak, E"]
[Result "1-0"]
[WhiteElo "2663"]
[BlackElo "2590"]
[ECO "D11"]
[Opening "Slav Defense: Quiet Variation"]
[TimeControl "5400+30"]
[VaultSide "white"]

1. Nf3 Nf6 2. d4 c6 3. c4 d5 4. e3 e6 5. b3 c5 6. Bb2 cxd4 7. Nxd4 Bb4+ 8. Nd2 O-O 9. a3
Be7 10. Be2 Nc6 11. O-O Nxd4 12. Bxd4 b6 13. b4 Bb7 14. Qc2 Rc8 15. Qb2 Qd7 16. Rfc1 dxc4
17. Nxc4 Rfd8 18. Ne5 Qa4 19. h3 Ne4 20. b5 Bh4 21. Nd3 Nd6 22. Nb4 Nf5 23. Be5 Be7 24. g4
Rxc1+ 25. Qxc1 Rc8 26. Qb2 Nd6 27. Qd4 Bf8 28. Bd3 Qa5 29. f4 Ba8 30. Rd1 Qa4 31. Rb1 h6
32. g5 hxg5 33. fxg5 Rd8 34. Re1 Qxa3 35. Nc6 Nxb5 36. Qxd8 Bxc6 37. g6 fxg6 38. Bxg6 Qe7
39. Qxe7 Bxe7 40. Rc1 Bd7 41. Kf2 Bh4+ 42. Kf3 Bf6 43. Bxf6 gxf6 44. Rg1 Kh8 45. Kg4 Kg7
46. Kh5 Kf8 47. Kh6 Nc3 48. Rc1 Nd5 49. e4 Ne3 50. Rc7 Ke7 51. Rxa7 Ng2 52. Kg7 1-0
`,"games/collection/Doyle F vs Sorokin Y 2026-04-01.pgn":`[Event "Online rapid arena"]
[Site "Chess Vault demo (sample data, invented players)"]
[Date "2026.04.01"]
[Round "1"]
[White "Doyle, F"]
[Black "Sorokin, Y"]
[Result "1-0"]
[WhiteElo "2761"]
[BlackElo "2634"]
[ECO "A53"]
[Opening "Old Indian Defense: Czech Variation, with Nf3"]
[TimeControl "600+5"]

1. d4 {[%clk 0:10:00]} d6 {[%clk 0:09:52]} 2. c4 {[%clk 0:09:52]} Nf6 {[%clk 0:09:27]} 3.
Nf3 {[%clk 0:09:34]} c6 {[%clk 0:09:50]} 4. Nc3 {[%clk 0:09:06]} g6 {[%clk 0:09:29]} 5. g3
{[%clk 0:08:28]} Bg7 {[%clk 0:08:57]} 6. Bg2 {[%clk 0:09:35]} O-O
{[%clk 0:08:16] The Berlin is a different game entirely — [[Openings/Ruy Lopez - the Berlin]].}
7. O-O {[%clk 0:09:00]} Nbd7 {[%clk 0:07:24]} 8. e3 {[%clk 0:08:15]} b6 {[%clk 0:09:15]}
9. Qe2 {[%clk 0:07:20]} Bb7 {[%clk 0:08:27]} 10. Bd2 {[%clk 0:06:15]} Rc8 {[%clk 0:07:28]}
11. Rfd1 {[%clk 0:08:50]} Qc7
{[%clk 0:06:20] Both rooks on open files before either side has a plan for them. The plan is what the next ten moves are about.}
12. Rac1 {[%clk 0:07:48]} a6 {[%clk 0:09:26]} 13. Be1 {[%clk 0:06:36]} e6 {[%clk 0:08:20]}
14. e4 {[%clk 0:05:14]} e5 {[%clk 0:07:05]} 15. d5 {[%clk 0:09:04]} c5 {[%clk 0:05:39]}
16. a3 {[%clk 0:07:45]} Qb8 {[%clk 0:04:04]} 17. b4 {[%clk 0:06:16]} cxb4 {[%clk 0:08:38]}
18. axb4 {[%clk 0:04:37]} a5 {[%clk 0:07:05]} 19. b5 {[%clk 0:02:48]} Qc7 {[%clk 0:05:23]}
20. Na4 {[%clk 0:08:06]} Qd8 {[%clk 0:03:30]} 21. Bd2 {[%clk 0:06:20]} h5 {[%clk 0:01:28]}
22. h4 {[%clk 0:04:24]} Ng4 {[%clk 0:07:30]} 23. Bh3 {[%clk 0:02:18]} Bf6 {[%clk 0:05:30]}
24. Nh2 {[%clk 0:08:51]} Nxh2 {[%clk 0:03:21]} 25. Kxh2 {[%clk 0:06:48]} Kg7
{[%clk 0:01:01]} 26. f3 {[%clk 0:04:35]} Re8 {[%clk 0:08:18]} 27. Be3 {[%clk 0:02:12]} Qc7
{[%clk 0:06:02]} 28. Qd3 {[%clk 0:00:20]} Kg8 {[%clk 0:03:35]} 29. Bxd7 {[%clk 0:07:40]}
Qxd7 {[%clk 0:00:59]} 30. Nxb6 {[%clk 0:05:10]} Qd8 {[%clk 0:00:20]} 31. Nxc8
{[%clk 0:02:30]} Bxc8 {[%clk 0:06:57]} 32. c5 {[%clk 0:00:20]} dxc5 {[%clk 0:04:14]} 33.
Rxc5 {[%clk 0:00:20]} Qd7 {[%clk 0:01:20]} 34. Rdc1 {[%clk 0:06:09]} Bg7 {[%clk 0:00:20]}
35. Rc7 {[%clk 0:03:12]} Qd8 {[%clk 0:08:17]} 36. Rxc8 {[%clk 0:00:20]} 1-0
`,"games/collection/Doyle F vs Sorokin Y 2026-04-04.pgn":`[Event "Sinquefield Cup"]
[Site "Chess Vault demo (sample data, invented players)"]
[Date "2026.04.04"]
[Round "4"]
[White "Doyle, F"]
[Black "Sorokin, Y"]
[Result "1-0"]
[WhiteElo "2775"]
[BlackElo "2648"]
[ECO "B90"]
[Opening "Sicilian Defense: Najdorf Variation"]
[TimeControl "5400+30"]
[VaultSide "black"]

1. e4 c5 2. Nf3 d6 3. d4 Nf6 4. Nc3 cxd4 5. Nxd4 a6 6. f3 e5 7. Nb3 Be6 8. Be3 h5
{A pawn is not the point. The point is that after this trade one bishop has squares and the other has none.}
9. Nd5 Bxd5 10. exd5 g6 11. Qd2 Nbd7 12. O-O-O Qc7 13. Kb1 Bg7 14. Rg1 O-O 15. Qf2 b5 16.
g4 Rfb8 17. g5 Ne8 18. c3 a5 19. Nd2 Nb6 20. Ne4 Nc4 21. Bxc4 Qxc4 22. Qf1 a4 23. Qd3 Rb7
24. Qc2 Qc8 25. a3 Rab8 26. Rdf1 Kh8 27. Re1 Rc7 28. Qd3 Rcb7 29. Bf2 Kg8 30. Bg3 Qc4 31.
Qd2 Rd8 32. Re3 Qc8 33. Re2 Qc4 34. Rd1 Rc8 35. Ree1 Rbc7 36. Re3 Rd7 37. Rde1 Re7 38. Nf2
Nc7 39. Rd3 Ra8 40. Re4 Qc5 41. Ree3 Rd7 42. Ne4 Qc4 43. h4 Na6 44. Bf2 Rad8 45. Re1 Rb7
46. Qc2 Kf8 47. Rd2 Nc7 48. Qc1 Na6 49. Ka1 Kg8 50. Kb1 Rbb8 51. Rdd1 Kh7 52. Qd2 Nc7 53.
Ng3 Qb3 54. Qd3 e4 55. Qc2 exf3 56. Re7 Na6 57. Rxf7 Qxc2+ 58. Kxc2 Kg8 59. Rxf3 Rf8 60.
Rdd3 Rbe8 61. b3 axb3+ 62. Kxb3 Be5 63. Ne4 Rc8 64. Bd4 Rc4 65. Bxe5 dxe5 66. Nf6+ Kg7 67.
Rde3 e4 68. Rf4 Nc5+ 69. Kc2 Ra4 70. Nxe4 Rxf4 71. Nxc5 Rf2+ 72. Kb3 Rxh4 73. d6 Rd2 74.
d7 Rh1 75. Kb4 Rhd1 76. Kxb5 Rd5 77. Kc4 Rxd7 78. Nxd7 Rxd7 79. a4 Ra7 80. Kb5 Rb7+ 81.
Ka6 Rb3 82. a5 h4 83. Rh3 Kf7 84. Rxh4 Rxc3 85. Rf4+ Ke7 86. Rf6 1-0
`,"games/collection/Doyle F vs Sorokin Y 2026-04-16.pgn":`[Event "Candidates Tournament"]
[Site "Chess Vault demo (sample data, invented players)"]
[Date "2026.04.16"]
[Round "7"]
[White "Doyle, F"]
[Black "Sorokin, Y"]
[Result "1-0"]
[WhiteElo "2784"]
[BlackElo "2657"]
[ECO "C66"]
[Opening "Ruy Lopez: Closed Berlin Defense, Chigorin Variation"]
[TimeControl "5400+30"]

1. e4 e5 2. Nf3 Nc6 3. Bb5 Nf6 4. O-O d6 5. d4 Nd7 6. c3 h6 7. Be3 Be7 8. Re1 O-O 9. Nbd2
Re8 10. Nf1 a6 11. Bd3 Bf6 12. Ng3 Ne7 13. a4 exd4 14. cxd4 c5 15. e5 dxe5 16. dxc5 Nc6
17. Qb3 Be7 18. Bc4 Rf8 19. Rad1 Qc7 20. Bxh6 Nxc5 21. Qe3 Kh7 22. b4 Nxa4 23. Bxg7 Kxg7
24. Nh5+ Kg6 25. Rd5 Kh7 26. Nxe5 Nxe5 27. Rxe5 Qxc4 28. Rxe7 Qc6 29. Qd4 Qg6 30. Nf6+ Kh8
31. R7e4 Kg7 32. Nd7+ f6 33. Nxf8 Kxf8 34. Qd8+ Kg7 35. Re7+ Kh6 36. Qh8+ Kg5 37. f4+ Kf5
38. Qh3+ Qg4 39. Qd3+ Kxf4 40. Qe4+ Kg5 41. h4+ Kxh4 42. Rh7+ Kg5 43. Rg7+ Kh4 44. Qh7+
Qh5 45. g3+ Kh3 46. Qxh5# 1-0
`,"games/collection/Ekström P vs Zahavi O 2026-05-02.pgn":`[Event "Tata Steel Masters"]
[Site "Chess Vault demo (sample data, invented players)"]
[Date "2026.05.02"]
[Round "2"]
[White "Ekström, P"]
[Black "Zahavi, O"]
[Result "0-1"]
[WhiteElo "2688"]
[BlackElo "2680"]
[ECO "B90"]
[Opening "Sicilian Defense: Najdorf Variation"]
[TimeControl "5400+30"]
[VaultSide "white"]

1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 a6 6. Bd3 e5 7. Nde2 Be7 8. O-O Be6 9. f3
O-O
{Everything hangs and nothing can be taken. Worth playing out on a board before reading further.}
10. Be3 Nbd7 11. Qd2 b5 12. a3 Rc8 13. Rad1 Nb6 14. Bxb6 Qxb6+ 15. Kh1 Rfd8 16. h3 d5 17.
exd5 Nxd5 18. Nxd5 Bxd5 19. c3 Bb3 20. Rde1 Bc4 21. Nc1 Bxd3 22. Nxd3 Qg6 23. Rxe5 Rxd3
24. Qc1 Bd6 25. Ree1 h6 26. Rd1 Rd8 27. Rxd3 Qxd3 28. Re1 Bg3 29. Rf1 g5 30. b4 Re8 31.
Qa1 Re2 32. Qc1 Qe3 33. Qxe3 Rxe3 34. Rc1 Kg7 35. c4 bxc4 0-1
`,"games/collection/Ekström P vs Zahavi O 2026-05-05.pgn":`[Event "FIDE Grand Swiss"]
[Site "Chess Vault demo (sample data, invented players)"]
[Date "2026.05.05"]
[Round "5"]
[White "Ekström, P"]
[Black "Zahavi, O"]
[Result "0-1"]
[WhiteElo "2702"]
[BlackElo "2694"]
[ECO "C66"]
[Opening "Ruy Lopez: Berlin Defense, Improved Steinitz Defense"]
[TimeControl "5400+30"]

1. e4 e5 2. Nf3 Nc6 3. Bb5 d6 4. O-O Nf6 5. d3 Be7 6. c4 O-O 7. Nc3 Bg4 8. Be3 a6 9. Bxc6
bxc6 10. h3 Bh5 11. Qe2 Qd7 12. Rfd1 Rae8 13. Nb1 Bg6 14. Nbd2 Nh5 15. Nh2 f5 16. exf5
Qxf5
{Here the clock decided more than the position did — the move played is not the best one, only the fastest to see.}
17. g4 Nf4 18. gxf5 Nxe2+ 19. Kf1 Bh5 20. Ng4 Nf4 21. Bxf4 exf4 22. Re1 Rxf5 23. Nf3 Rff8
24. Nd4 Bf7 25. Nxc6 Bh4 26. b4 h5 27. Nh2 Bf6 28. Rab1 Be6 29. Kg2 d5 30. c5 Bf5 31. Rxe8
Rxe8 32. Rd1 g5 33. Nf3 g4 34. hxg4 hxg4 35. Nfd4 Bd7 36. a4 Kf7 37. b5 axb5 38. axb5 Bxc6
39. Nxc6 Re2 40. Kf1 f3 41. Rb1 Rc2 42. b6 cxb6 43. cxb6 Rxc6 44. b7 Be5 45. d4 Bf4 46.
b8=Q Bxb8 47. Rxb8 Rc1# 0-1
`,"games/collection/Ekström P vs Zahavi O 2026-05-17.pgn":`[Event "Norway Chess"]
[Site "Chess Vault demo (sample data, invented players)"]
[Date "2026.05.17"]
[Round "8"]
[White "Ekström, P"]
[Black "Zahavi, O"]
[Result "0-1"]
[WhiteElo "2711"]
[BlackElo "2703"]
[ECO "D46"]
[Opening "Semi-Slav Defense: Chigorin Defense"]
[TimeControl "5400+30"]
[VaultSide "black"]

1. d4 Nf6 2. Nf3 d5 3. c4 e6 4. Nc3 c6 5. e3 Nbd7 6. Qc2 Bd6 7. Bd3 dxc4 8. Bxc4 O-O 9.
O-O b5 10. Bd3 Bb7 11. e4 e5 12. Bg5 exd4 13. Nxd4 Bxh2+ 14. Kxh2 Ng4+ 15. Kg3 Qxg5 16. f4
Qd8 17. Kxg4 Nf6+ 18. Kh4 Qxd4 19. e5 g5+ 20. Kxg5 Kh8 21. Bf5 Rg8+ 22. Kh4 Qd8 23. exf6
Qxf6+ 24. Kh5 Kg7 25. Bd3 c5 26. Ne4 Qh6+ 27. Kg4 f5+ 28. Kf3 Rae8 29. Kf2 c4 30. Ng5 Qh2
31. Qc3+ Kg6 32. Be4 Bxe4 33. Qg3 Qxg3+ 34. Kxg3 h6 35. Nf3 b4 36. Rf2 c3 37. a3 b3 38.
bxc3 Bc2 39. Rc1 Kf6+ 40. Kh3 Re4 41. Rh1 Re3 42. c4 Rc3 43. Kh2 b2 44. Nd2 Bd3 45. Rf3
Rd8 46. Rh3 Rc1 47. Rxh6+ Ke7 48. Kg3 Bxc4 49. Rh7+ Bf7 50. Nb1 Rg8+ 51. Kf2 Rg7 52. Rh8
Bd5 53. Ke3 Be4 54. R1h7 Rxh7 55. Rxh7+ Ke6 56. Nd2 Re1+ 57. Kf2 Rd1 58. Nxe4 fxe4 59. Rb7
b1=Q 60. Rxb1 Rxb1 61. g4 Kd5 62. g5 Kd4 63. g6 e3+ 64. Ke2 Ke4 65. g7 Rb2+ 66. Ke1 Kf3
67. Kd1 e2+ 68. Ke1 Ke3 69. g8=Q Rb1# 0-1
`,"games/collection/Farrow K vs Quinn H 2026-06-03.pgn":`[Event "Candidates Tournament"]
[Site "Chess Vault demo (sample data, invented players)"]
[Date "2026.06.03"]
[Round "3"]
[White "Farrow, K"]
[Black "Quinn, H"]
[Result "0-1"]
[WhiteElo "2605"]
[BlackElo "2775"]
[ECO "E05"]
[Opening "Catalan Opening: Open Defense, Classical Line"]
[TimeControl "5400+30"]

1. Nf3 d5 2. g3 Nf6 3. Bg2 e6 4. d4 Be7 5. c4 O-O 6. O-O dxc4 7. Qc2 a6 8. a4 Bd7 9. Qxc4
Bc6 10. Bg5 Nbd7 11. Nc3 h6 12. Bxf6 Nxf6 13. Rfd1 Bd5 14. Qd3 Bxf3
{Two results are still possible and only one of them is a draw, which is what makes the position worth keeping.}
15. Bxf3 c6 16. e3 Qc7 17. h4 Rad8 18. Qc4 a5 19. h5 Rd7 20. Ne4 Bb4 21. Rac1 Nxe4 22.
Bxe4 Rfd8 23. Kg2 Rd6 24. Bf3 Qe7 25. b3 Ba3 26. Ra1 Bb4 27. Rac1 Ba3 28. Rc3 Bb4 29. Rcd3
Qg5 30. e4 e5 31. dxe5 Qxe5 32. Bg4 b5 33. Rxd6 Rxd6 34. Qc2 Rxd1 35. Bxd1 Qd4 36. f4 bxa4
37. bxa4 Kf8 38. Bf3 Qd2+ 39. Qxd2 Bxd2 40. Bd1 Ke7 41. Kf3 f6 42. e5 fxe5 43. fxe5 c5 44.
Be2 Bc3 45. Kf4 Bd2+ 46. Kf3 Ke6 47. Ke4 Bc3 48. Bc4+ Ke7 49. g4 Bb4 50. Bd5 c4 51. Bxc4
Be1 0-1
`,"games/collection/Farrow K vs Quinn H 2026-06-06.pgn":`[Event "Club championship"]
[Site "Chess Vault demo (sample data, invented players)"]
[Date "2026.06.06"]
[Round "6"]
[White "Farrow, K"]
[Black "Quinn, H"]
[Result "0-1"]
[WhiteElo "2619"]
[BlackElo "2789"]
[ECO "E28"]
[Opening "Nimzo-Indian Defense: Sämisch Variation"]
[TimeControl "5400+30"]
[VaultSide "white"]

1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. e3 O-O 5. a3 Bxc3+
{The opening is a way of reaching a position worth thinking about, and this one arrives by move ten.}
6. bxc3 d6 7. Ne2 c5 8. Ng3 Nc6 9. d5 Na5 10. Bd3 b6 11. O-O Ba6 12. Qe2 exd5 13. cxd5
Bxd3 14. Qxd3 c4 15. Qf5 g6 16. Qc2 Nxd5 17. e4 Nb3 18. Rb1 Nxc1 19. Qxc1 Nc7 20. f4 Qh4
21. Qe3 Rae8 22. Qf3 d5 23. exd5 Qe7 24. Rfd1 Rd8 25. f5 Qc5+ 26. Rd4 Nb5 27. Rxb5 Qxb5
28. h4 Rfe8 29. h5 Re5 30. fxg6 hxg6 31. Qf6 Rdxd5 32. h6 Re1+ 33. Kh2 Rh5+ 34. Nxh5 Qxh5+
35. Rh4 Qe5+ 36. Qxe5 Rxe5 37. h7+ Kh8 38. Rxc4 Ra5 39. Rc7 Kxh7 40. Rxf7+ Kh6 41. c4 Rxa3
42. Rc7 Ra5 43. g3 Kg5 44. Kh3 Kf5 45. Kh4 Ke5 46. Rg7 Kd4 47. Rxg6 Kxc4 48. g4 b5 49.
Rc6+ Kd4 50. Rf6 b4 51. g5 Rb5 52. Rf4+ Kc3 53. g6 Rb8 54. Rf3+ Kc4 55. Rf4+ Kb3 56. Kg5
a5 57. Rf1 a4 58. g7 Rg8 59. Kg6 Ka2 60. Rf2+ Ka3 61. Kf7 Rxg7+ 62. Kxg7 b3 63. Rf3 Ka2
64. Rf4 a3 65. Kf6 b2 66. Rf2 Ka1 67. Rg2 b1=Q 68. Rg4 Qb7 69. Kg6 a2 70. Kg5 Kb2 71. Rh4
a1=Q 72. Rh2+ Kb1 73. Re2 Qag7+ 74. Kf4 Qf6+ 75. Ke3 Qb3+ 76. Kd2 Qfc3# 0-1
`,"games/collection/Farrow K vs Quinn H 2026-06-18.pgn":`[Event "Sinquefield Cup"]
[Site "Chess Vault demo (sample data, invented players)"]
[Date "2026.06.18"]
[Round "9"]
[White "Farrow, K"]
[Black "Quinn, H"]
[Result "0-1"]
[WhiteElo "2628"]
[BlackElo "2798"]
[ECO "B13"]
[Opening "Caro-Kann Defense: Exchange Variation"]
[TimeControl "5400+30"]

1. e4 c6 2. d4 d5 3. exd5 cxd5 4. Nf3 Nc6 5. Bb5 Qa5+ 6. Nc3 Bg4 7. Bd2 Rc8 8. h3 Bxf3 9.
Qxf3 e6 10. O-O-O Nf6 11. Qg3 Qb6 12. Rhe1 a6 13. Ba4 Qc7 14. Qxc7 Rxc7 15. Ne2 b5 16. Bf4
Rb7 17. Bb3 Be7 18. Kb1 O-O 19. c3 Ne4 20. f3 Nd6 21. Nc1 Rc8 22. Nd3 Nc4 23. a3 a5 24.
Ka2 h6 25. Re2 Nb6 26. Nc5 Ra7 27. Bg3 h5 28. Bf2 b4 29. Bc2 bxc3 30. bxc3 a4 31. Rb1 Nd7
32. Nxd7 Rxd7 33. Be1 Na5 34. Bd3 Bd6 35. Rb6 Nb3 36. Rc2 Bf4 37. Kb1 Ra7 38. Bf2 Raa8 39.
Rb4 Bd6 40. Ka2 g5 41. Rb5 Bf4 42. Bf1 Nd2 43. Bd3 Nc4 44. Bxc4 Rxc4 45. Rb4 Bd6 46. Rb6
Rd8 47. Be1 Kg7 48. Rcb2 h4 49. R6b5 Re8 50. Ra5 Bg3 51. Bd2 Bf4 52. Be1 f6 53. Re2 Bg3
54. Bd2 Kf7 55. Rb5 Rec8 56. Kb1 R8c6 57. Kb2 Kg6 58. Kb1 Kf5 59. Ka2 Ra6 60. Kb1 Rcc6 61.
Kc2 Bd6 62. Kd3 Bxa3 63. Be3 Bd6 64. Ra2 a3 65. Kc2 Rcb6 66. Rxb6 Rxb6 67. Bc1 e5 68. Bd2
exd4 69. cxd4 Rb8 70. Kd3 Rb1 71. Kc3 Ke6 72. Be3 Kd7 73. Kc2 Re1 74. Bf2 Re8 75. Kc3 Kc6
76. Rc2 Rb8 77. f4 Bxf4 78. Kd3+ Kd7 79. Kc3 Ke6 80. Re2+ Kf5 81. Bg1 Bc1 82. Rf2+ Kg6 83.
Ra2 Bb2+ 84. Kd2 f5 85. Bf2 f4 86. Be1 Kf5 87. Bf2 Ke4 88. Bg1 Rb3 89. Bf2 f3 90. g4 Bxd4
91. Bxd4 Kxd4 92. Ke1 Ke3 93. Re2+ Kf4 94. Rc2 Rb2 0-1
`,"games/collection/Grieve M vs Verhoeven J 2026-07-07.pgn":`[Event "Online rapid arena"]
[Site "Chess Vault demo (sample data, invented players)"]
[Date "2026.07.07"]
[Round "7"]
[White "Grieve, M"]
[Black "Verhoeven, J"]
[Result "0-1"]
[WhiteElo "2582"]
[BlackElo "2597"]
[ECO "C11"]
[Opening "French Defense: Steinitz Variation, Boleslavsky Variation"]
[TimeControl "600+5"]
[VaultSide "black"]

1. e4 {[%clk 0:10:00]} e6 {[%clk 0:09:52]} 2. d4 {[%clk 0:09:52]} d5 {[%clk 0:09:27]} 3.
Nc3 {[%clk 0:09:34]} Nf6 {[%clk 0:09:50]} 4. e5 {[%clk 0:09:06]} Nfd7 {[%clk 0:09:29]} 5.
f4 {[%clk 0:08:28]} c5 {[%clk 0:08:57]} 6. Nf3 {[%clk 0:09:35]} Nc6 {[%clk 0:08:16]} 7.
Be3 {[%clk 0:09:00]} cxd4 {[%clk 0:07:24]} 8. Nxd4 {[%clk 0:08:15]} Qb6
{[%clk 0:09:15] A pawn is not the point. The point is that after this trade one bishop has squares and the other has none.}
9. Na4 {[%clk 0:07:20]} Qa5+ {[%clk 0:08:27]} 10. Nc3 {[%clk 0:06:15]} Qb6
{[%clk 0:07:28]} 11. Qd2 {[%clk 0:08:50]} Qxb2 {[%clk 0:06:20]} 12. Rb1 {[%clk 0:07:48]}
Qa3 {[%clk 0:09:26]} 13. Bb5 {[%clk 0:06:36]} Nxd4 {[%clk 0:08:20]} 14. Bxd4
{[%clk 0:05:14]} a6 {[%clk 0:07:05]} 15. Bxd7+ {[%clk 0:09:04]} Bxd7 {[%clk 0:05:39]} 16.
Rb3 {[%clk 0:07:45]} Qe7 {[%clk 0:04:04]} 17. Rxb7 {[%clk 0:06:16]} Rc8 {[%clk 0:08:38]}
18. O-O {[%clk 0:04:37]} Qd8 {[%clk 0:07:05]} 19. Qe3 {[%clk 0:02:48]} Rc4
{[%clk 0:05:23]} 20. Rfb1 {[%clk 0:08:06]} Be7 {[%clk 0:03:30]} 21. f5 {[%clk 0:06:20]}
Bg5 {[%clk 0:01:28]} 22. Qd3 {[%clk 0:04:24]} O-O {[%clk 0:07:30]} 23. f6 {[%clk 0:02:18]}
Bc6 {[%clk 0:05:30]} 24. Re7 {[%clk 0:08:51]} h6 {[%clk 0:03:21]} 25. g3 {[%clk 0:06:48]}
h5 {[%clk 0:01:01]} 26. h4 {[%clk 0:04:35]} Bh6 {[%clk 0:08:18]} 27. Rb6 {[%clk 0:02:12]}
Qa8 {[%clk 0:06:02]} 28. a3 {[%clk 0:00:20]} g6 {[%clk 0:03:35]} 29. Kf2 {[%clk 0:07:40]}
Re8 {[%clk 0:00:59]} 30. g4 {[%clk 0:05:10]} hxg4 {[%clk 0:00:20]} 31. Kg3
{[%clk 0:02:30]} Rxe7 {[%clk 0:06:57]} 32. fxe7 {[%clk 0:00:20]} Be8 {[%clk 0:04:14]} 33.
Nd1 {[%clk 0:00:20]} Qa7 {[%clk 0:01:20]} 34. Nb2 {[%clk 0:06:09]} f5 {[%clk 0:00:20]} 35.
Nxc4 {[%clk 0:03:12]} dxc4 {[%clk 0:08:17]} 36. Qe2 {[%clk 0:00:20]} Kf7 {[%clk 0:05:16]}
37. c3 {[%clk 0:00:20]} Qc7 {[%clk 0:02:06]} 38. a4 {[%clk 0:07:32]} a5 {[%clk 0:00:20]}
39. Qg2 {[%clk 0:04:18]} Qd7 {[%clk 0:00:20]} 40. Rb5 {[%clk 0:00:54]} Qc8
{[%clk 0:06:43]} 41. Rb6 {[%clk 0:00:20]} Qd7 {[%clk 0:03:15]} 42. Rb5 {[%clk 0:00:20]}
Qc8 {[%clk 0:00:20]} 0-1
`,"games/collection/Grieve M vs Verhoeven J 2026-07-19.pgn":`[Event "FIDE Grand Swiss"]
[Site "Chess Vault demo (sample data, invented players)"]
[Date "2026.07.19"]
[Round "1"]
[White "Grieve, M"]
[Black "Verhoeven, J"]
[Result "0-1"]
[WhiteElo "2596"]
[BlackElo "2611"]
[ECO "C54"]
[Opening "Italian Game: Classical Variation, Giuoco Pianissimo"]
[TimeControl "5400+30"]

1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. d3 Nf6 5. Nbd2 O-O 6. O-O d6 7. c3 a5 8. h3 h6 9. Re1
Be6 10. Bb5 Qb8 11. Nf1 Qa7 12. d4 exd4 13. Bxc6 dxc3
{The kind of move that looks like a waiting move and is the whole idea: every enemy piece now has one square fewer.}
14. Ba4 Bxf2+ 15. Kh2 Bxe1 16. Qxe1 Qc5 17. bxc3 d5 18. e5 Ne4 19. Bb2 Ra6 20. Rc1 f5 21.
Bc2 a4 22. Ne3 Ng5 23. Nxg5 hxg5 24. Qe2 a3 25. Ba1 Rf7 26. Rd1 f4 27. Ng4 f3 28. gxf3
Bxg4 29. hxg4 Rh6+ 30. Kg2 g6 31. Rh1 Rxh1 32. Kxh1 Qc4 33. Qd1 Rh7+ 34. Kg1 Kf8 35. Bxg6
Rh3 36. Kg2 Rh6 37. Qc2 Qf4 38. Qf5+ Ke7 39. Qxf4 gxf4 40. Bf5 c5 41. c4 d4 42. e6 Rh8 43.
Be4 Rb8 44. Bd3 Kxe6 45. Bf5+ Kf6 46. Bd7 Kg5 47. Ba4 Ra8 48. Bc2 Re8 49. Kf2 Re3 50. Bd1
Re6 51. Bb3 Rb6 52. Kf1 Rb4 53. Ke2 Kf6 54. Bc2 Ke5 55. Kd3 Rb6 56. Kd2 Rh6 57. Bd1 Rh2+
58. Be2 Rh1 59. Bd1 Rh2+ 60. Be2 Rh1 61. Bd1 Rg1 62. Kc1 Rg2 63. Kb1 Rf2 64. g5 Rg2 65. g6
Rxg6 66. Kc2 Rg2+ 67. Kb3 Rf2 68. Bxd4+ Kxd4 69. Kxa3 Rf1 70. Bc2 Rxf3+ 71. Kb2 Rf2 72.
Kb3 Rf1 73. Bf5 f3 74. Kc2 Rh1 75. Kd2 Rh2+ 76. Kd1 Ke3 77. Bg4 Rh1+ 78. Kc2 f2 79. Be2
Kxe2 80. a3 f1=Q 81. Kb3 Qb1+ 82. Ka4 Rh6 83. Ka5 Ra6# 0-1
`,"games/collection/Halvorsen T vs Oyelaran B 2026-08-08.pgn":`[Event "Tata Steel Masters"]
[Site "Chess Vault demo (sample data, invented players)"]
[Date "2026.08.08"]
[Round "8"]
[White "Halvorsen, T"]
[Black "Oyelaran, B"]
[Result "0-1"]
[WhiteElo "2729"]
[BlackElo "2712"]
[ECO "D10"]
[Opening "Slav Defense"]
[TimeControl "5400+30"]
[VaultSide "white"]

1. d4 d5 2. c4 c6 3. e3 Bf5 4. Nc3 e6 5. g4 Bg6 6. Qb3 Nd7
{Which is where [[Thinking process]] starts being the thing that decides games.} 7. Qxb7
Rb8 8. Qxc6 Bb4 9. Bd2 Nf6 10. h4 Ba5 11. h5 Be4 12. f3 Rxb2 13. Qa4 Rxd2 14. Kxd2 dxc4
15. Rc1 O-O 16. Ke2 Bb7 17. g5 Ng4 18. Qb5 Bb6 19. h6 a6 20. Qb1 Qxg5 21. f4 Qd8 22. Rh3
g5 23. Rg3 f5 24. Bg2 Bxg2 25. Rxg2 gxf4 26. Na4 Kh8 27. Rxc4 Nde5 28. dxe5 Qd5 29. Nxb6
Qxg2+ 30. Kd3 f3 31. Nxf3 Qxf3 32. Qg1 Rg8 33. Kd2 Nxh6 34. Qe1 Ng4 35. Rf4 Nxe5 36. Kc2
Qc6+ 37. Qc3 Rg2+ 38. Kb3 Qxb6+ 39. Rb4 Qd6 40. Rd4 Qc6 41. Qxc6 Nxc6 42. Rd6 Rg3 43. Rxc6
Rxe3+ 44. Kc4 Re4+ 45. Kd3 Kg7 46. Rxa6 h5 47. Kd2 h4 48. Ra3 h3 49. Rxh3 f4 50. Kd3 Ra4
51. Rh5 Rxa2 52. Ke4 Ra4+ 53. Kf3 Kf6 54. Kg4 e5 55. Rh6+ Kg7 56. Rh3 Kg6 57. Rh8 Ra3 58.
Rf8 Re3 59. Kh4 f3 60. Rg8+ Kh7 61. Ra8 e4 62. Rf8 Re1 63. Rf7+ Kg8 64. Rf5 e3 65. Rc5 f2
66. Kh5 f1=Q 67. Kg5 e2 68. Rc8+ Qf8 69. Rc4 Qf5+ 70. Kh4 Qg4+ 71. Kxg4 Rg1+ 72. Kf3 e1=Q
73. Rc8+ Kh7 74. Rh8+ Kxh8 75. Kf4 Qe4+ 76. Kxe4 Kg8 77. Ke5 Kf8 78. Kd5 Kf7 79. Kc4 Ke6
80. Kd4 Rg4+ 81. Kd3 Ke5 82. Ke3 Rd4 83. Ke2 Kf4 84. Kf2 Re4 85. Kg1 Kg3 86. Kh1 Re1# 0-1
`,"games/collection/Halvorsen T vs Oyelaran B 2026-08-20.pgn":`[Event "Club championship"]
[Site "Chess Vault demo (sample data, invented players)"]
[Date "2026.08.20"]
[Round "2"]
[White "Halvorsen, T"]
[Black "Oyelaran, B"]
[Result "0-1"]
[WhiteElo "2743"]
[BlackElo "2726"]
[ECO "A55"]
[Opening "Old Indian Defense: Normal Variation"]
[TimeControl "5400+30"]

1. d4 d6 2. c4 Nf6 3. Nc3 e5 4. Nf3 Nbd7 5. e4 Be7 6. Be2 O-O 7. O-O Re8 8. h3 exd4 9.
Nxd4 Bf8 10. Qc2 Nc5 11. Bf3 Nfd7 12. b3 c6 13. g3 Qf6 14. Be3 Ne6 15. Nxe6 Qxf3 16. Ng5
Qh5
{Here the clock decided more than the position did — the move played is not the best one, only the fastest to see.}
17. g4 Qh4 18. Kg2 h6 19. Nf3 Qf6 20. Rad1 Ne5 21. Nxe5 dxe5 22. Ne2 Be6 23. Ng3 g6 24.
Qc1 Kh7 25. g5 Qe7 26. h4 h5 27. Qc2 Kg8 28. Rd2 Rad8 29. Bxa7 Rxd2 30. Qxd2 b5 31. Be3
bxc4 32. bxc4 Bxc4 33. Rc1 Be6 34. Bc5 Qb7 35. Bxf8 Rxf8 36. Qd6 Bxa2 37. Qxe5 Qd7 38. Qc5
Rc8 39. Rc3 Be6 40. Qe5 Qe7 41. Qc5 Qd8 42. Qe5 Qd2 43. Rc5 Qd1 44. Rc3 Qg4 45. f4 Rd8 46.
Rc2 Qh3+ 47. Kf2 Qh2+ 0-1
`,"games/collection/Ibarra L vs Tavares M 2026-09-09.pgn":`[Event "Candidates Tournament"]
[Site "Chess Vault demo (sample data, invented players)"]
[Date "2026.09.09"]
[Round "9"]
[White "Ibarra, L"]
[Black "Tavares, M"]
[Result "0-1"]
[WhiteElo "2657"]
[BlackElo "2721"]
[ECO "B90"]
[Opening "Sicilian Defense: Najdorf Variation, English Attack"]
[TimeControl "5400+30"]
[VaultSide "black"]

1. e4 c5 2. Nf3 d6 3. d4 Nf6 4. Nc3 cxd4 5. Nxd4 a6 6. Be3 e5 7. Nb3 Be6 8. f3 h5 9. Nd5
Bxd5 10. exd5 g6 11. Qd2 Bg7 12. O-O-O Nbd7 13. Kb1 b5 14. Na5 Nb6 15. Nc6 Qc7 16. Bxb6
Qxb6 17. Bd3 a5 18. Qe2 b4 19. g4 Qc5 20. Bb5 Kf8 21. g5 Nxd5
{This endgame is why the middlegame was played that way. The structure was settled twenty moves before it mattered.}
22. Qd3 Nc7 23. Ba4 d5 24. Rhe1 Re8 25. f4 e4 26. Qh3 Re6 27. Nb8 Ke7 28. Nd7 Qd6 29. Rf1
e3 30. Rde1 e2 31. Rf2 Bd4 32. Rfxe2 Qxf4 33. a3 Rd8 34. axb4 axb4 35. Rxe6+ fxe6 36. Rf1
Qe3 37. Qxe3 Bxe3 38. Ne5 Ra8 39. Bb3 Bxg5 40. Rg1 Bf6 41. Nxg6+ Kd6 42. Nf4 Nb5 43. Rg6
Rf8 44. Ba4 Nd4 45. Nd3 Nf3 46. Nxb4 Nxh2 47. c3 Nf3 48. Nd3 h4 49. Bd1 Ng5 50. Bg4 h3 51.
Rh6 Rh8 52. Rxf6 h2 53. Nf2 Ke7 54. Nh3 h1=Q+ 55. Kc2 Qe4+ 56. Kd2 Kxf6 57. c4 Qxg4 58.
Nf2 Qxc4 59. Ke3 Rh2 60. b4 Qc1+ 61. Kd3 Rxf2 62. Kd4 Qc4+ 63. Ke3 Re2# 0-1
`,"games/collection/Ibarra L vs Tavares M 2026-09-21.pgn":`[Event "Online rapid arena"]
[Site "Chess Vault demo (sample data, invented players)"]
[Date "2026.09.21"]
[Round "3"]
[White "Ibarra, L"]
[Black "Tavares, M"]
[Result "1/2-1/2"]
[WhiteElo "2671"]
[BlackElo "2735"]
[ECO "B97"]
[Opening "Sicilian Defense: Najdorf Variation, Poisoned Pawn Accepted"]
[TimeControl "600+5"]

1. e4 {[%clk 0:10:00]} c5 {[%clk 0:09:52]} 2. Nf3 {[%clk 0:09:52]} d6 {[%clk 0:09:27]} 3.
d4 {[%clk 0:09:34]} cxd4 {[%clk 0:09:50]} 4. Nxd4 {[%clk 0:09:06]} Nf6 {[%clk 0:09:29]} 5.
Nc3 {[%clk 0:08:28]} a6 {[%clk 0:08:57]} 6. Bg5 {[%clk 0:09:35]} e6 {[%clk 0:08:16]} 7. f4
{[%clk 0:09:00]} Qb6 {[%clk 0:07:24]} 8. Qd2 {[%clk 0:08:15]} Qxb2 {[%clk 0:09:15]} 9. Rb1
{[%clk 0:07:20]} Qa3 {[%clk 0:08:27]} 10. f5 {[%clk 0:06:15]} Nc6 {[%clk 0:07:28]} 11.
fxe6 {[%clk 0:08:50]} fxe6 {[%clk 0:06:20]} 12. Nxc6 {[%clk 0:07:48]} bxc6
{[%clk 0:09:26]} 13. Be2 {[%clk 0:06:36]} Be7 {[%clk 0:08:20]} 14. e5 {[%clk 0:05:14]}
dxe5 {[%clk 0:07:05]} 15. Bxf6 {[%clk 0:09:04]} Bxf6 {[%clk 0:05:39]} 16. Bh5+
{[%clk 0:07:45]} g6 {[%clk 0:04:04]} 17. Ne4 {[%clk 0:06:16]} O-O {[%clk 0:08:38]} 18. O-O
{[%clk 0:04:37]} Bd8 {[%clk 0:07:05]} 19. Bg4 {[%clk 0:02:48]} Kg7 {[%clk 0:05:23]} 20. c4
{[%clk 0:08:06]} Ra7 {[%clk 0:03:30]} 21. Rxf8 {[%clk 0:06:20]} Qxf8 {[%clk 0:01:28]} 22.
c5 {[%clk 0:04:24]} h5 {[%clk 0:07:30]} 23. Bf3 {[%clk 0:02:18]} Be7 {[%clk 0:05:30]} 24.
Qc3 {[%clk 0:08:51]} Rd7 {[%clk 0:03:21]} 25. Rb8 {[%clk 0:06:48]} Rd8 {[%clk 0:01:01]}
26. h3 {[%clk 0:04:35]} Kh6 {[%clk 0:08:18]} 27. Qe3+ {[%clk 0:02:12]} Kg7
{[%clk 0:06:02]} 28. Qc3 {[%clk 0:00:20]} Kh6 {[%clk 0:03:35]} 29. Kf2 {[%clk 0:07:40]} h4
{[%clk 0:00:59]} 30. Ke2 {[%clk 0:05:10]} Qf4 {[%clk 0:00:20]} 31. Qe3 {[%clk 0:02:30]}
Kh7 {[%clk 0:06:57]} 32. Ra8 {[%clk 0:00:20]} Kg8 {[%clk 0:04:14]} 33. a4 {[%clk 0:00:20]}
Kf8 {[%clk 0:01:20]} 34. Nd6 {[%clk 0:06:09]} Bd7 {[%clk 0:00:20]} 35. Rxa6
{[%clk 0:03:12]} Bxd6 {[%clk 0:08:17]} 36. cxd6 {[%clk 0:00:20]} Be8 {[%clk 0:05:16]} 37.
Qxf4+ {[%clk 0:00:20]} exf4 {[%clk 0:02:06]} 38. a5 {[%clk 0:07:32]} Rxd6 {[%clk 0:00:20]}
39. Ra8 {[%clk 0:04:18]} c5 {[%clk 0:00:20]} 40. Bb7 {[%clk 0:00:54]} Ke7 {[%clk 0:06:43]}
41. Rxe8+ {[%clk 0:00:20]} Kxe8 {[%clk 0:03:15]} 42. a6 {[%clk 0:00:20]} c4
{[%clk 0:00:20]} 43. a7 {[%clk 0:05:48]} Rd8 {[%clk 0:00:20]} 44. a8=Q {[%clk 0:02:07]}
Rxa8 {[%clk 0:00:20]} 45. Bxa8 {[%clk 0:00:20]} Ke7 {[%clk 0:04:49]} 46. Kf3
{[%clk 0:00:20]} g5 {[%clk 0:00:54]} 47. Ke4 {[%clk 0:07:42]} Kf6 {[%clk 0:00:20]} 48. Bc6
{[%clk 0:03:44]} c3 {[%clk 0:00:20]} 49. Ba4 {[%clk 0:00:20]} e5 {[%clk 0:06:46]} 50. Bc2
{[%clk 0:00:20]} Ke6 {[%clk 0:02:35]} 51. Bd3 {[%clk 0:00:20]} Kd6 {[%clk 0:00:20]} 52.
Bc2 {[%clk 0:05:45]} Ke6 {[%clk 0:00:20]} 53. Bd3 {[%clk 0:01:20]} Kd6 {[%clk 0:00:20]}
54. Bb1 {[%clk 0:00:20]} Ke6 {[%clk 0:04:39]} 55. Bc2 {[%clk 0:00:20]} g4 {[%clk 0:00:20]}
56. hxg4 {[%clk 0:00:20]} Kf6 {[%clk 0:00:20]} 57. Bd3 {[%clk 0:03:28]} Kg6
{[%clk 0:00:20]} 58. Bc2 {[%clk 0:00:20]} Kf6 {[%clk 0:07:08]} 59. Kf3 {[%clk 0:00:20]}
Kg5 {[%clk 0:02:12]} 60. Be4 {[%clk 0:00:20]} Kh6 {[%clk 0:00:20]} 61. Bd3
{[%clk 0:06:00]} Kg5 {[%clk 0:00:20]} 62. Bc2 {[%clk 0:00:51]} Kh6 {[%clk 0:00:20]} 63.
Be4 {[%clk 0:00:20]} Kg5 {[%clk 0:04:48]} 64. Bd3 {[%clk 0:00:20]} Kf6 {[%clk 0:00:20]}
65. Be4 {[%clk 0:00:20]} Kg5 {[%clk 0:00:20]} 66. Bd3 {[%clk 0:03:30]} Kf6
{[%clk 0:00:20]} 67. Bc2 {[%clk 0:00:20]} Kg5 {[%clk 0:00:20]} 68. Bf5 {[%clk 0:00:20]}
Kh6 {[%clk 0:02:08]} 69. Kf2 {[%clk 0:00:20]} Kg5 {[%clk 0:00:20]} 70. Kf3
{[%clk 0:06:33]} Kh6 {[%clk 0:00:20]} 71. Bd3 {[%clk 0:00:40]} Kg5 {[%clk 0:00:20]} 72.
Be4 {[%clk 0:00:20]} Kh6 {[%clk 0:05:14]} 73. Bb1 {[%clk 0:00:20]} Kg5 {[%clk 0:00:20]}
74. Bh7 {[%clk 0:00:20]} Kh6 {[%clk 0:00:20]} 75. Bf5 {[%clk 0:03:50]} Kg5
{[%clk 0:00:20]} 76. Bc2 {[%clk 0:00:20]} Kh6 {[%clk 0:00:20]} 77. Bf5 {[%clk 0:00:20]}
Kg5 {[%clk 0:02:21]} 78. Bh7 {[%clk 0:00:20]} Kh6 {[%clk 0:00:20]} 79. Bb1
{[%clk 0:00:20]} Kg5 {[%clk 0:00:20]} 80. Bh7 {[%clk 0:00:47]} 1/2-1/2
`,"games/collection/Jessel A vs Marchetti C 2026-10-10.pgn":`[Event "Norway Chess"]
[Site "Chess Vault demo (sample data, invented players)"]
[Date "2026.10.10"]
[Round "1"]
[White "Jessel, A"]
[Black "Marchetti, C"]
[Result "1/2-1/2"]
[WhiteElo "2698"]
[BlackElo "2683"]
[ECO "C65"]
[Opening "Ruy Lopez: Berlin Defense"]
[TimeControl "5400+30"]
[VaultSide "white"]

1. e4 e5 2. Nf3 Nc6 3. Bb5 Nf6 4. d3 Bc5 5. Bxc6 dxc6
{The opening is a way of reaching a position worth thinking about, and this one arrives by move ten.}
6. O-O Nd7 7. Nbd2 O-O 8. Nc4 Re8 9. a4 a5 10. Be3 Bb4 11. Bg5 f6 12. Bd2 Nf8 13. Qe1 Bxd2
14. Qxd2 b6 15. b3 Ne6 16. Kh1 c5 17. Ng1 c6 18. Ne2 h6 19. Ng3 Ra7 20. f3 Kh7 21. Ne3 Rf8
22. Rf2 b5 23. Rff1 Nf4 24. Rfb1 Qc7 25. Rd1 Ne6 26. Rf1 Nf4 27. Ngf5 Ne6 28. Qc3 Qb6 29.
Ng3 Bd7 30. Qe1 Nd4 31. f4 exf4 32. Rxf4 Be6 33. Rf1 Qc7 34. Qf2 Rd8 35. Nef5 Qe5 36. Ne3
Rdd7 37. Kg1 Rd8 38. Rfe1 Bf7 39. Ngf1 Be6 40. Ng3 Rdd7 41. Rf1 Rdb7 42. Rfe1 Ra8 43. Kh1
Raa7 44. Kg1 Re7 45. h3 Red7 46. Kh2 Rf7 47. Kh1 g6 48. Nef5 Nxc2 49. Qxc2 gxf5 50. Nxf5
Bxf5 51. exf5 Qd5 52. Rac1 Rg7 53. Re2 b4 54. Qxc5 Qxb3 55. Qd6 Raf7 56. Re8 Rd7 57. Qxc6
Rxd3 58. Qa8 Rd1+ 59. Rxd1 Qxd1+ 60. Kh2 Qd6+ 61. Kh1 Qd1+ 62. Kh2 Qd6+ 63. Kh1 Qd1+
1/2-1/2
`,"games/collection/Jessel A vs Marchetti C 2026-10-22.pgn":`[Event "Tata Steel Masters"]
[Site "Chess Vault demo (sample data, invented players)"]
[Date "2026.10.22"]
[Round "4"]
[White "Jessel, A"]
[Black "Marchetti, C"]
[Result "1/2-1/2"]
[WhiteElo "2712"]
[BlackElo "2697"]
[ECO "D35"]
[Opening "Queen's Gambit Declined: Exchange Variation, Positional Variation"]
[TimeControl "5400+30"]

1. d4 d5 2. c4 e6 3. Nc3 Nf6 4. cxd5 exd5 5. Bg5 Be7 6. e3 O-O 7. Bd3 h6 8. Bh4 c6 9. Qc2
Re8 10. Nge2 Nbd7 11. O-O a5
{Both rooks on open files before either side has a plan for them. The plan is what the next ten moves are about.}
12. Rac1 Nh5 13. Bxe7 Qxe7 14. Rce1 Nf8 15. Qd2 b6 16. b3 Bd7 17. Rc1 Rab8 18. Rfe1 Qg5
19. Qc2 Rbc8 20. Kh1 Qe7 21. Ng1 Nf6 22. Nf3 c5 23. Kg1 Ne6 24. dxc5 Rxc5 25. Qd2 Ng5 26.
Nxg5 hxg5 27. Ne2 g4 28. Rxc5 Qxc5 29. Qb2 Qb4 30. Rc1 a4 31. Qd4 Qa3 32. Rb1 Qxa2 33. Nc3
Qa3 34. Nxa4 Rc8 35. g3 Rc1+ 36. Rxc1 Qxc1+ 37. Kg2 Bxa4 38. bxa4 Qc6 39. Kf1 g6 40. Kg2
Ne4 41. Bxe4 dxe4 42. Qd8+ Kg7 43. Qd1 Kf8 44. Qa1 Kg8 45. a5 bxa5 46. Qxa5 Qe6 47. Qa8+
Kg7 48. Kf1 Qe5 49. Kg2 f5 50. Qb7+ Kf6 51. Qb1 Qe7 52. Qa1+ Kf7 53. Kf1 Qd6 54. Qa2+ Ke7
55. Qa1 Kf7 56. Qa2+ Qe6 57. Qb1 Qc4+ 58. Kg2 Qe6 59. Kg1 Qc4 60. Qb7+ Kf6 61. Qb2+ Kf7
62. Qb7+ Kf6 63. Qb2+ Ke7 64. Qb7+ Kd6 65. Kg2 Qe6 66. Qg7 Kc5 67. Qd4+ Kb5 68. h4 gxh3+
69. Kxh3 Qe7 1/2-1/2
`,"games/collection/Kowal D vs Rasmussen I 2026-11-11.pgn":`[Event "Sinquefield Cup"]
[Site "Chess Vault demo (sample data, invented players)"]
[Date "2026.11.11"]
[Round "2"]
[White "Kowal, D"]
[Black "Rasmussen, I"]
[Result "1/2-1/2"]
[WhiteElo "2744"]
[BlackElo "2693"]
[ECO "E08"]
[Opening "Catalan Opening: Closed"]
[TimeControl "5400+30"]
[VaultSide "black"]

1. d4 Nf6 2. c4 e6 3. Nf3 d5 4. g3 Bb4+ 5. Bd2 Be7 6. Bg2 c6
{Third time this month — it is on the list in [[Blunders to stop making]].} 7. Qc2 Nbd7 8.
Bf4 O-O 9. O-O b6 10. Rd1 Bb7 11. Ne5 Nh5 12. Bd2 Nhf6 13. cxd5 cxd5 14. Nc6 Qe8 15. Nxe7+
Qxe7 16. Nc3 Rfc8 17. Qd3 a5 18. a4 Ba6 19. Qe3 Bc4 20. Rdc1 h6 21. h4 Nf8 22. Be1 Qd7 23.
f3 Ng6 24. Qd2 Rc6 25. g4 h5 26. g5 Ne8 27. Bg3 Rd8 28. e4 Nd6 29. Qf2 Rcc8 30. Bh3 Qb7
31. Qe3 Qb8 32. Kf2 Qb7 33. Kg1 Qb8 34. Kh2 Qb7 35. Kg1 1/2-1/2
`,"games/collection/Kowal D vs Rasmussen I 2026-11-23.pgn":`[Event "Candidates Tournament"]
[Site "Chess Vault demo (sample data, invented players)"]
[Date "2026.11.23"]
[Round "5"]
[White "Kowal, D"]
[Black "Rasmussen, I"]
[Result "1/2-1/2"]
[WhiteElo "2758"]
[BlackElo "2707"]
[ECO "E36"]
[Opening "Nimzo-Indian Defense: Classical Variation, Noa Variation"]
[TimeControl "5400+30"]

1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. Qc2 d5 5. a3 Bxc3+ 6. Qxc3 O-O 7. Bg5 c5 8. dxc5 d4 9.
Qg3 e5 10. O-O-O Re8 11. e3 Nbd7 12. Nf3 Nxc5 13. exd4 exd4
{The kind of move that looks like a waiting move and is the whole idea: every enemy piece now has one square fewer.}
14. Nxd4 Nce4 15. Qf4 Nxg5 16. Qxg5 Ne4 17. Qf4 Bg4 18. Be2 Bxe2 19. Nxe2 Qc8 20. Rhe1
Qxc4+ 21. Nc3 Rac8 22. f3 Qb3 23. fxe4 Rxc3+ 24. bxc3 Qxc3+ 25. Kb1 Qb3+ 26. Ka1 Qxa3+ 27.
Kb1 Qb3+ 28. Ka1 Qa3+ 29. Kb1 Qb3+ 30. Ka1 Qa3+ 1/2-1/2
`,"games/collection/Lindqvist S vs Whitlock A 2026-12-12.pgn":`[Event "FIDE Grand Swiss"]
[Site "Chess Vault demo (sample data, invented players)"]
[Date "2026.12.12"]
[Round "3"]
[White "Lindqvist, S"]
[Black "Whitlock, A"]
[Result "1/2-1/2"]
[WhiteElo "2620"]
[BlackElo "2738"]
[ECO "B12"]
[Opening "Caro-Kann Defense: Advance Variation, Short Variation"]
[TimeControl "5400+30"]
[VaultSide "white"]

1. e4 c6 2. d4 d5 3. e5 Bf5 4. Nf3 e6 5. Be2 c5 6. Be3 cxd4 7. Nxd4 Ne7 8. Nd2 Nbc6 9.
N2f3 Be4
{Everything hangs and nothing can be taken. Worth playing out on a board before reading further.}
10. O-O Bxf3 11. Nxf3 Qc7 12. Rc1 Rd8 13. c3 Ng6 14. Bd4 Be7 15. Qd2 O-O 16. Qe3 Nh4 17.
Nxh4 Bxh4 18. g3 Be7 19. Bd3 Rc8 20. Rc2 Qa5 21. Re2 Qxa2 22. f4 g6 23. g4 Qb3 24. Kh1 Kh8
25. h4 Rg8 26. h5 Nxd4 27. cxd4 Rg7 28. Rh2 Rf8 29. Qh3 Bd8 30. Rf3 Qd1+ 31. Rf1 Qb3 32.
hxg6 fxg6 33. Rf3 Qd1+ 34. Rf1 Qb3 35. Rf3 Qd1+ 36. Rf1 Qb3 1/2-1/2
`,"games/collection/Lindqvist S vs Whitlock A 2026-12-24.pgn":`[Event "Norway Chess"]
[Site "Chess Vault demo (sample data, invented players)"]
[Date "2026.12.24"]
[Round "6"]
[White "Lindqvist, S"]
[Black "Whitlock, A"]
[Result "1/2-1/2"]
[WhiteElo "2634"]
[BlackElo "2752"]
[ECO "C11"]
[Opening "French Defense: Steinitz Variation, Boleslavsky Variation"]
[TimeControl "5400+30"]

1. e4 e6 2. d4 d5 3. Nc3 Nf6 4. e5 Nfd7 5. f4 c5 6. Nf3 Nc6 7. Be3 cxd4 8. Nxd4 Qb6 9. Qd2
Qxb2 10. Rb1 Qa3 11. Bb5 Nxd4 12. Bxd4 a6 13. Bxd7+ Bxd7 14. Rb3 Qe7 15. Rxb7 Qd8 16. O-O
Qc8 17. Rb3 Bc5 18. Rf2 Qc6 19. Ne2 O-O 20. g4 Rfc8 21. f5 Bf8 22. c3 Rcb8 23. h4 Qc4 24.
Nc1 a5 25. h5 a4 26. Rxb8 Rxb8 27. Kh2 Bb5 28. Ne2 a3 29. h6 gxh6 30. Qf4 Qc8 31. Ng3 Bd3
32. fxe6 Qxe6 33. Nh5 Rb2 34. Nf6+ Kh8 35. Kg3 Bg7 36. Nh5 Rxf2 37. Kxf2 Bc4 38. Qg3 Qg6
39. Qf4 Qe6 40. Qg3 Qg6 1/2-1/2
`,"notes/.bookmarks.json":`{
  "ids": [
    "Thinking process"
  ]
}
`,"notes/Blunders to stop making.md":`# Blunders to stop making

*The same three, forever*

1. **Moving the piece that was holding something together.** Almost always a
   knight, almost always because it looked passive.
2. **Answering a threat that was not there.** A move that defends nothing costs
   exactly as much as a move that loses a pawn, and feels safer.
3. **Playing the move I had already decided on.** The position changed and the
   plan did not.

The pattern under all three is the same: I stop looking once I have a move I
like. [[Thinking process]] is the attempt at a fix.

## From this month

\`\`\`chess
r4rk1/pp2ppbp/2np1np1/q7/3PP3/2N1BN2/PP2BPPP/R2Q1RK1 b - - 0 11
\`\`\`

Black to move, and the queen on a5 is the piece holding the position together.
I moved it.
`,"notes/Endgame drills for the week.md":`# Endgame drills for the week

*Twenty minutes a day, one position at a time*

**Monday and Tuesday.** The bridge. Set it up, win it against the engine, then
set it up a square further away and win it again.

\`\`\`chess
3K4/3P1k2/8/8/8/8/7r/2R5 w - - 0 1
\`\`\`

**Wednesday and Thursday.** The third-rank defence, from the defending side,
until holding it is boring.

**Friday.** Whatever went wrong in a game this week.

The drills are the two positions in [[Endgames/Rook endings - Lucena and Philidor]],
which is where the technique is written out move by move.
`,"notes/Notes on the Catalan.md":`# Notes on the Catalan

Taking on c4 and holding the pawn is playable and I keep not doing it, because
the resulting positions look loose and are not.

The thing to understand is that the bishop on g2 is not doing anything yet. It
becomes the best piece on the board only after the centre opens, so the whole
argument is about whether Black can keep it closed for long enough to consolidate.

Worked through in [[Openings/Catalan - the long diagonal]], both chapters.
`,"notes/Opening prep checklist.md":`# Opening prep checklist

*Before adding a line, not after losing to it*

- [ ] Do I know what the pawn structure is called?
- [ ] Do I know which piece is the bad one, and the plan for it?
- [ ] Have I played through three complete games in it, not three opening lines?
- [ ] What is the move that ends preparation and starts thinking?
- [ ] If I forget everything, what is the sensible move?

The last question is the useful one. A line I can only play from memory is a
line I will lose with the first time somebody deviates on move nine.

## Currently working on

[[Openings/Ruy Lopez - the Berlin]] as Black, which fails the third question —
I have read the theory and played none of it.
`,"notes/Openings I have retired.md":`# Openings I have retired

- **The King's Gambit**, after four games and no idea what to do against 3...d5.
- **The Dutch**, which I enjoyed and could not defend against the Staunton.
- **The Grünfeld**, retired for a season and probably coming back.

None of these were bad openings. They were openings I had not done the work in,
which the [[Opening prep checklist]] would have caught before the fourth loss
rather than after it.
`,"notes/Positions worth keeping.md":`# Positions worth keeping

A page for positions that are worth setting up again, with nothing else attached.

## The one where the knight was better

\`\`\`chess
8/5pk1/4p1p1/3pP1Pp/2pP3P/2P2N2/5K2/8 w - - 0 1
\`\`\`

Fixed pawns, one wing, and the knight walks to a square the bishop can never
attack.

## The one I resigned too early

\`\`\`chess
8/8/4k3/8/4KP2/8/8/8 b - - 0 1
\`\`\`

Black to move draws. I did not know that at the time, and it cost half a point
that was sitting on the board.
`,"notes/Reading list.md":`# Reading list

**Finished.** *Silman's Complete Endgame Course* — the rook chapters twice.

**In progress.** The sample book in the library here, which is where the two
rook positions in [[Endgame drills for the week]] came from.

**Next.** Something on pawn structures. The gap in my game is not tactics and
not endings; it is that I do not know what a position wants.
`,"notes/Thinking process.md":`# Thinking process

*A written version, because the one in my head skips steps under time pressure*

- What changed with the last move?
- What is the opponent threatening — not in general, this move?
- What is my worst piece, and where does it want to be?

The third question is the one that gets skipped, and it is the one that
usually has an answer.

## A position to remember

\`\`\`chess
6k1/5ppp/8/8/8/8/5PPP/R5K1 w - - 0 1
\`\`\`

The board above is live — step through it, try a move, and it stays in the note.
A rook ending with everything symmetrical, kept here because it is the position
I most often get wrong while believing there is nothing to get wrong.

## Related

See [[Attacking the castled king]] for the attacking side of this, and
[[Endgames/Rook endings - Lucena and Philidor]] for what it becomes when it fails.
`,"notes/Time management.md":`# Time management

Rapid, 10+5. The pattern from the last thirty games:

| Phase | Time spent | Where it goes |
| --- | --- | --- |
| Moves 1–10 | 1 min | Fine |
| Moves 11–20 | 6 min | One long think, usually wasted |
| Moves 21–40 | 3 min | Not enough |

The long think in the middlegame is nearly always on a move where the
candidates are close together and the choice does not matter much. The moves
that decide the game come later, and by then there is no time to look.

Rule I am trying: no think over two minutes before move 25.
`,"notes/What to review after each game.md":`# What to review after each game

*Not the whole game*

- The move where I first felt uncomfortable.
- The move the engine hates most.
- Whether the opening gave me a position I understood.

Three moves, not thirty. A full engine pass through a game teaches nothing
because there is nothing to remember afterwards.

## A position to remember

\`\`\`chess
r1bq1rk1/pp1nbppp/2p1pn2/3p4/2PP4/2N1PN2/PPQ1BPPP/R1B2RK1 w - - 0 9
\`\`\`

The board above is live — step through it, try a move, and it stays in the note.

## Related

See [[Attacking the castled king]] for the attacking side of this, and
[[Endgames/Rook endings - Lucena and Philidor]] for what it becomes when it fails.
`,"notes/Why I lose won positions.md":`# Why I lose won positions

Three games this year, and the same shape each time: a clear advantage, then
twenty moves of not wanting to spoil it, then a draw or worse.

What actually happens is that I stop making a plan and start making safe moves.
A safe move in a winning position is a move that gives back the thing that made
it winning — usually time.

The fix I am testing: when the position is winning, write down the plan before
the next move. Two words is enough. "Trade rooks." "March the h-pawn."

Related: [[Thinking process]], and the third question in it.
`,"puzzlebooks/.bookmarks.json":`{
  "slugs": [
    "b7d4c1e93a06f52bd"
  ]
}
`,"puzzlebooks/b7d4c1e93a06f52bd/book.json":`{
  "title": "A sample book",
  "createdAt": "2026-08-24T09:00:00.000Z",
  "pdfBook": "b5a3e1c07f2d49b8c"
}
`,"puzzlebooks/b7d4c1e93a06f52bd/progress.json":`{
  "n1": {
    "tries": 1,
    "wins": 1,
    "last": "win",
    "at": "2026-08-28T19:12:00.000Z",
    "history": [
      {
        "win": true,
        "at": "2026-08-28T19:12:00.000Z"
      }
    ]
  },
  "n2": {
    "tries": 2,
    "wins": 1,
    "last": "win",
    "at": "2026-08-30T20:41:00.000Z",
    "history": [
      {
        "win": false,
        "at": "2026-08-29T18:03:00.000Z"
      },
      {
        "win": true,
        "at": "2026-08-30T20:41:00.000Z"
      }
    ]
  }
}
`,"puzzlebooks/b7d4c1e93a06f52bd/puzzles.json":`[
  {
    "id": "n1",
    "fen": "r1bqkbnr/pppp1ppp/2n5/1B2p3/4P3/5N2/PPPP1PPP/RNBQK2R b KQkq - 3 3",
    "uci": [
      "a7a6",
      "b5a4",
      "g8f6",
      "e1h1",
      "f8e7"
    ],
    "san": [
      "a6",
      "Ba4",
      "Nf6",
      "O-O",
      "Be7"
    ],
    "added": "2026-08-24T09:00:00.000Z",
    "provenance": "corrected",
    "number": 1,
    "evidence": {
      "page": "page003.jpg",
      "rect": {
        "x": 0.2136,
        "y": 0.3061,
        "w": 0.5727,
        "h": 0.3706
      }
    }
  },
  {
    "id": "n2",
    "fen": "3K4/3P1k2/8/8/8/8/7r/2R5 w - - 0 1",
    "uci": [
      "c1c4",
      "h2h1",
      "d8c7",
      "h1c1",
      "c7b6",
      "c1b1",
      "b6c6",
      "b1c1",
      "c6b5",
      "c1b1",
      "c4b4"
    ],
    "san": [
      "Rc4",
      "Rh1",
      "Kc7",
      "Rc1+",
      "Kb6",
      "Rb1+",
      "Kc6",
      "Rc1+",
      "Kb5",
      "Rb1+",
      "Rb4"
    ],
    "added": "2026-08-24T09:00:00.000Z",
    "provenance": "corrected",
    "number": 2,
    "evidence": {
      "page": "page005.jpg",
      "rect": {
        "x": 0.2136,
        "y": 0.3061,
        "w": 0.5727,
        "h": 0.3706
      }
    }
  },
  {
    "id": "n3",
    "fen": "4k3/8/r7/3KP3/8/8/4R3/8 b - - 0 1",
    "uci": [
      "a6b6",
      "e5e6",
      "b6b1"
    ],
    "san": [
      "Rb6",
      "e6",
      "Rb1"
    ],
    "added": "2026-08-24T09:00:00.000Z",
    "provenance": "corrected",
    "number": 3,
    "evidence": {
      "page": "page007.jpg",
      "rect": {
        "x": 0.2136,
        "y": 0.2801,
        "w": 0.5727,
        "h": 0.3706
      }
    }
  }
]
`,"puzzles/history.jsonl":`{"id":"000rZ","win":true,"counted":true,"puzzleRating":633,"at":"2026-08-10T23:23:56.976Z"}
{"id":"SOUoj","win":true,"counted":true,"puzzleRating":1204,"at":"2026-08-10T23:23:56.988Z"}
{"id":"4mTfp","win":false,"counted":true,"puzzleRating":1854,"at":"2026-08-10T23:23:57.004Z"}
{"id":"1zx3Y","win":true,"counted":true,"puzzleRating":1426,"at":"2026-08-10T23:23:57.018Z"}
{"id":"0roxk","win":true,"counted":true,"puzzleRating":540,"at":"2026-08-10T23:23:57.033Z"}
{"id":"FpuUE","win":true,"counted":true,"puzzleRating":2311,"at":"2026-08-10T23:23:57.048Z"}
{"id":"0D4Lw","win":false,"counted":true,"puzzleRating":558,"at":"2026-08-10T23:23:57.064Z"}
{"id":"g8AFQ","win":true,"counted":true,"puzzleRating":1355,"at":"2026-08-10T23:23:57.080Z"}
{"id":"l0esh","win":true,"counted":true,"puzzleRating":1296,"at":"2026-08-10T23:23:57.095Z"}
{"id":"16Crt","win":true,"counted":true,"puzzleRating":1450,"at":"2026-08-10T23:23:57.111Z"}
{"id":"0Eg2w","win":false,"counted":true,"puzzleRating":521,"at":"2026-08-10T23:23:57.127Z"}
{"id":"tgAAi","win":true,"counted":true,"puzzleRating":1169,"at":"2026-08-10T23:23:57.142Z"}
{"id":"00Rk3","win":false,"counted":true,"puzzleRating":941,"at":"2026-08-10T23:23:57.158Z"}
{"id":"0L1eT","win":false,"counted":true,"puzzleRating":974,"at":"2026-08-10T23:23:57.173Z"}
{"id":"17vts","win":false,"counted":true,"puzzleRating":1878,"at":"2026-08-10T23:23:57.189Z"}
{"id":"U9kqP","win":true,"counted":true,"puzzleRating":1886,"at":"2026-08-10T23:23:57.205Z"}
{"id":"0zOSD","win":true,"counted":true,"puzzleRating":1743,"at":"2026-08-10T23:23:57.221Z"}
{"id":"xVgEY","win":true,"counted":true,"puzzleRating":2204,"at":"2026-08-10T23:23:57.236Z"}
{"id":"06YlU","win":false,"counted":true,"puzzleRating":1103,"at":"2026-08-10T23:23:57.251Z"}
{"id":"jdRv3","win":true,"counted":true,"puzzleRating":2210,"at":"2026-08-10T23:23:57.267Z"}
{"id":"00ad3","win":true,"counted":true,"puzzleRating":653,"at":"2026-08-10T23:23:57.283Z"}
{"id":"yb5tU","win":true,"counted":true,"puzzleRating":2201,"at":"2026-08-10T23:23:57.298Z"}
{"id":"9e4p3","win":false,"counted":true,"puzzleRating":1828,"at":"2026-08-10T23:23:57.314Z"}
{"id":"TOuFb","win":true,"counted":true,"puzzleRating":1522,"at":"2026-08-10T23:23:57.330Z"}
{"id":"6RZTQ","win":true,"counted":true,"puzzleRating":1301,"at":"2026-08-10T23:23:57.345Z"}
{"id":"0Yxp5","win":true,"counted":true,"puzzleRating":476,"at":"2026-08-10T23:23:57.360Z"}
{"id":"0S8an","win":false,"counted":true,"puzzleRating":1226,"at":"2026-08-10T23:23:57.376Z"}
{"id":"002X3","win":true,"counted":true,"puzzleRating":970,"at":"2026-08-10T23:23:57.392Z"}
{"id":"CgFON","win":true,"counted":true,"puzzleRating":1840,"at":"2026-08-10T23:23:57.407Z"}
{"id":"00Hfa","win":true,"counted":true,"puzzleRating":729,"at":"2026-08-10T23:23:57.439Z"}
`,"puzzles/state.json":`{
  "attempts": 30,
  "wins": 21,
  "streak": 3
}
`,"repertoire/history.jsonl":`{"study":"Openings/Ruy Lopez - the Berlin","chapter":"The endgame after 8...Nxe5","key":"r1bqkbnr/pppp1ppp/2n5/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq -","result":"hit","path":["e4","e5","Nf3","Nc6"],"at":"2026-08-18T18:40:00.000Z"}
{"study":"Openings/Ruy Lopez - the Berlin","chapter":"The endgame after 8...Nxe5","key":"r1bqkb1r/pppp1ppp/2n5/1B2p3/4n3/5N2/PPPP1PPP/RNBQ1RK1 w kq -","result":"hit","path":["e4","e5","Nf3","Nc6","Bb5","Nf6","O-O","Nxe4"],"at":"2026-08-19T01:40:00.000Z"}
{"study":"Openings/Ruy Lopez - the Berlin","chapter":"The endgame after 8...Nxe5","key":"r1bqk2r/ppppbppp/2nn4/1B2N3/8/8/PPPP1PPP/RNBQR1K1 w kq -","result":"miss","path":["e4","e5","Nf3","Nc6","Bb5","Nf6","O-O","Nxe4","Re1","Nd6","Nxe5","Be7"],"at":"2026-08-19T08:40:00.000Z"}
{"study":"Openings/Ruy Lopez - the Berlin","chapter":"The endgame after 8...Nxe5","key":"r1bq1rk1/ppppbppp/3n4/4R3/8/8/PPPP1PPP/RNBQ1BK1 w - -","result":"hit","path":["e4","e5","Nf3","Nc6","Bb5","Nf6","O-O","Nxe4","Re1","Nd6","Nxe5","Be7","Bf1","Nxe5","Rxe5","O-O"],"at":"2026-08-19T15:40:00.000Z"}
{"study":"Openings/Ruy Lopez - the Berlin","chapter":"The endgame after 8...Nxe5","key":"r1bq1rk1/p1pp1ppp/1p1n1b2/8/3P4/8/PPP1RPPP/RNBQ1BK1 w - -","result":"hit","path":["e4","e5","Nf3","Nc6","Bb5","Nf6","O-O","Nxe4","Re1","Nd6","Nxe5","Be7","Bf1","Nxe5","Rxe5","O-O","d4","Bf6","Re2","b6"],"at":"2026-08-19T22:40:00.000Z"}
{"study":"Openings/Ruy Lopez - the Berlin","chapter":"The endgame after 8...Nxe5","key":"r2q1rk1/pbpp1ppp/1p3b2/5n2/3P1B2/8/PPP2PPP/RN1QRBK1 w - -","result":"hit","path":["e4","e5","Nf3","Nc6","Bb5","Nf6","O-O","Nxe4","Re1","Nd6","Nxe5","Be7","Bf1","Nxe5","Rxe5","O-O","d4","Bf6","Re2","b6","Re1","Bb7","Bf4","Nf5"],"at":"2026-08-20T05:40:00.000Z"}
{"study":"Openings/Ruy Lopez - the Berlin","chapter":"The endgame after 8...Nxe5","key":"r2q2k1/pbpp1ppp/1p3b2/5n2/3P1B2/2P5/PP1N1PPP/R2QrBK1 w - -","result":"miss","path":["e4","e5","Nf3","Nc6","Bb5","Nf6","O-O","Nxe4","Re1","Nd6","Nxe5","Be7","Bf1","Nxe5","Rxe5","O-O","d4","Bf6","Re2","b6","Re1","Bb7","Bf4","Nf5","c3","Re8","Nd2","Rxe1"],"at":"2026-08-20T12:40:00.000Z"}
{"study":"Openings/Sicilian - Najdorf structures","chapter":"The English Attack","key":"rnbqkbnr/pp2pppp/3p4/2p5/3PP3/5N2/PPP2PPP/RNBQKB1R b KQkq -","result":"hit","path":["e4","c5","Nf3","d6","d4"],"at":"2026-08-22T20:05:00.000Z"}
{"study":"Openings/Sicilian - Najdorf structures","chapter":"The English Attack","key":"rnbqkb1r/1p2pppp/p2p1n2/8/3NP3/2N5/PPP2PPP/R1BQKB1R w KQkq -","result":"miss","path":["e4","c5","Nf3","d6","d4","cxd4","Nxd4","Nf6","Nc3","a6"],"at":"2026-08-23T03:05:00.000Z"}
{"study":"Openings/Sicilian - Najdorf structures","chapter":"The English Attack","key":"rnbqk2r/1p2bppp/p2p1n2/4p3/4P3/2NB4/PPP1NPPP/R1BQ1RK1 b kq -","result":"hit","path":["e4","c5","Nf3","d6","d4","cxd4","Nxd4","Nf6","Nc3","a6","Bd3","e5","Nde2","Be7","O-O"],"at":"2026-08-23T10:05:00.000Z"}
{"study":"Openings/Sicilian - Najdorf structures","chapter":"The English Attack","key":"r2q1rk1/1p1nbppp/p2pbn2/4p3/4P3/2NBBP2/PPP1N1PP/R2Q1RK1 w - -","result":"hit","path":["e4","c5","Nf3","d6","d4","cxd4","Nxd4","Nf6","Nc3","a6","Bd3","e5","Nde2","Be7","O-O","Be6","f3","O-O","Be3","Nbd7"],"at":"2026-08-23T17:05:00.000Z"}
{"study":"Openings/Sicilian - Najdorf structures","chapter":"The English Attack","key":"2rq1rk1/3nbppp/p2pbn2/1p2p3/4P3/P1NBBP2/1PPQN1PP/3R1RK1 b - -","result":"miss","path":["e4","c5","Nf3","d6","d4","cxd4","Nxd4","Nf6","Nc3","a6","Bd3","e5","Nde2","Be7","O-O","Be6","f3","O-O","Be3","Nbd7","Qd2","b5","a3","Rc8","Rad1"],"at":"2026-08-24T00:05:00.000Z"}
{"study":"Openings/Catalan - the long diagonal","chapter":"The pawn Black keeps","key":"rnbqkb1r/ppp1pppp/5n2/3p4/3P4/5N2/PPP1PPPP/RNBQKB1R w KQkq -","result":"hit","path":["d4","d5","Nf3","Nf6"],"at":"2026-08-27T19:15:00.000Z"}
{"study":"Openings/Catalan - the long diagonal","chapter":"The pawn Black keeps","key":"rnbqk2r/ppp1bppp/4pn2/3p4/2PP4/5NP1/PP2PP1P/RNBQKB1R w KQkq -","result":"hit","path":["d4","d5","Nf3","Nf6","c4","e6","g3","Be7"],"at":"2026-08-28T02:15:00.000Z"}
{"study":"Openings/Catalan - the long diagonal","chapter":"The pawn Black keeps","key":"rnbq1rk1/ppp1bppp/4pn2/8/2pP4/5NP1/PP2PPBP/RNBQ1RK1 w - -","result":"hit","path":["d4","d5","Nf3","Nf6","c4","e6","g3","Be7","Bg2","O-O","O-O","dxc4"],"at":"2026-08-28T09:15:00.000Z"}
{"study":"Openings/Catalan - the long diagonal","chapter":"The pawn Black keeps","key":"rnbq1rk1/1p2bppp/p3pn2/2p5/P1pP4/5NP1/1PQ1PPBP/RNB2RK1 w - -","result":"gap","path":["d4","d5","Nf3","Nf6","c4","e6","g3","Be7","Bg2","O-O","O-O","dxc4","Qc2","a6","a4","c5"],"at":"2026-08-28T16:15:00.000Z"}
{"study":"Openings/Catalan - the long diagonal","chapter":"The pawn Black keeps","key":"rnbq1rk1/5ppp/p3pn2/1pb5/P1p5/5NP1/1PQNPPBP/R1B2RK1 w - -","result":"hit","path":["d4","d5","Nf3","Nf6","c4","e6","g3","Be7","Bg2","O-O","O-O","dxc4","Qc2","a6","a4","c5","dxc5","Bxc5","Nbd2","b5"],"at":"2026-08-28T23:15:00.000Z"}
{"study":"Openings/Catalan - the long diagonal","chapter":"The pawn Black keeps","key":"r2q1rk1/1b3ppp/n3pn2/2b5/2p5/5NP1/1PQNPPBP/R1B2RK1 w - -","result":"hit","path":["d4","d5","Nf3","Nf6","c4","e6","g3","Be7","Bg2","O-O","O-O","dxc4","Qc2","a6","a4","c5","dxc5","Bxc5","Nbd2","b5","axb5","Bb7","bxa6","Nxa6"],"at":"2026-08-29T06:15:00.000Z"}
{"study":"Openings/Catalan - the long diagonal","chapter":"The pawn Black keeps","key":"q4rk1/1b3ppp/4pn2/2b5/1nN5/5NP1/1PQ1PPBP/2B2RK1 w - -","result":"hit","path":["d4","d5","Nf3","Nf6","c4","e6","g3","Be7","Bg2","O-O","O-O","dxc4","Qc2","a6","a4","c5","dxc5","Bxc5","Nbd2","b5","axb5","Bb7","bxa6","Nxa6","Nxc4","Nb4","Rxa8","Qxa8"],"at":"2026-08-29T13:15:00.000Z"}
{"study":"Openings/Queens Gambit Declined","chapter":"The Exchange, and the minority attack","key":"rnbqkb1r/ppp2ppp/4pn2/3p4/2PP4/2N5/PP2PPPP/R1BQKBNR w KQkq -","result":"miss","path":["d4","d5","c4","e6","Nc3","Nf6"],"at":"2026-08-30T21:30:00.000Z"}
{"study":"Openings/Queens Gambit Declined","chapter":"The Exchange, and the minority attack","key":"rnbq1rk1/ppp1bppp/5n2/3p2B1/3P4/2N1P3/PP3PPP/R2QKBNR w KQ -","result":"hit","path":["d4","d5","c4","e6","Nc3","Nf6","cxd5","exd5","Bg5","Be7","e3","O-O"],"at":"2026-08-31T04:30:00.000Z"}
{"study":"Openings/Queens Gambit Declined","chapter":"The Exchange, and the minority attack","key":"rnbqr1k1/pp2bpp1/2p2n1p/3p4/3P3B/2NBP3/PPQ2PPP/R3K1NR w KQ -","result":"miss","path":["d4","d5","c4","e6","Nc3","Nf6","cxd5","exd5","Bg5","Be7","e3","O-O","Bd3","h6","Bh4","c6","Qc2","Re8"],"at":"2026-08-31T11:30:00.000Z"}
{"study":"Openings/Queens Gambit Declined","chapter":"The Exchange, and the minority attack","key":"r1bqr1k1/1p1nbpp1/2p4p/p2p3n/3P3B/2NBP3/PPQ1NPPP/2R2RK1 w - -","result":"hit","path":["d4","d5","c4","e6","Nc3","Nf6","cxd5","exd5","Bg5","Be7","e3","O-O","Bd3","h6","Bh4","c6","Qc2","Re8","Nge2","Nbd7","O-O","a5","Rac1","Nh5"],"at":"2026-08-31T18:30:00.000Z"}
`,"repertoire/map.json":`{
  "version": 1,
  "maps": [
    {
      "id": "demo-w",
      "color": "white",
      "root": {
        "id": "w00",
        "children": [
          {
            "id": "w01",
            "san": "e4",
            "note": "Depth 8 is the promise: eight full moves prepared before the map admits it has run out.",
            "depth": 8,
            "children": [
              {
                "id": "w02",
                "san": "e5",
                "children": [
                  {
                    "id": "w03",
                    "san": "Nf3",
                    "children": [
                      {
                        "id": "w04",
                        "san": "Nc6",
                        "children": [
                          {
                            "id": "w05",
                            "san": "Bb5",
                            "depth": 10,
                            "tags": [
                              {
                                "kind": "study",
                                "id": "Openings/Sicilian - Najdorf structures",
                                "chapter": "Main line"
                              },
                              {
                                "kind": "study",
                                "id": "Openings/Queens Gambit Declined",
                                "chapter": "A model game"
                              },
                              {
                                "kind": "note",
                                "id": "Opening prep checklist"
                              }
                            ],
                            "children": [
                              {
                                "id": "w06",
                                "san": "a6",
                                "children": [
                                  {
                                    "id": "w07",
                                    "san": "Ba4",
                                    "children": [
                                      {
                                        "id": "w08",
                                        "san": "Nf6",
                                        "children": [
                                          {
                                            "id": "w09",
                                            "san": "O-O",
                                            "children": [
                                              {
                                                "id": "w10",
                                                "san": "Be7",
                                                "children": []
                                              }
                                            ]
                                          }
                                        ]
                                      }
                                    ]
                                  }
                                ]
                              },
                              {
                                "id": "w11",
                                "san": "Nf6",
                                "children": [
                                  {
                                    "id": "w12",
                                    "san": "O-O",
                                    "children": [
                                      {
                                        "id": "w13",
                                        "san": "d6",
                                        "children": []
                                      }
                                    ]
                                  }
                                ]
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "id": "w14",
                "san": "c5",
                "depth": 10,
                "children": [
                  {
                    "id": "w15",
                    "san": "Nf3",
                    "children": [
                      {
                        "id": "w16",
                        "san": "Nc6",
                        "children": [
                          {
                            "id": "w17",
                            "san": "d4",
                            "children": [
                              {
                                "id": "w18",
                                "san": "cxd4",
                                "children": [
                                  {
                                    "id": "w19",
                                    "san": "Nxd4",
                                    "children": [
                                      {
                                        "id": "w20",
                                        "san": "e6",
                                        "children": [
                                          {
                                            "id": "w21",
                                            "san": "Nc3",
                                            "children": [
                                              {
                                                "id": "w22",
                                                "san": "d6",
                                                "tags": [
                                                  {
                                                    "kind": "study",
                                                    "id": "Openings/Ruy Lopez - the Berlin",
                                                    "chapter": "Main line"
                                                  }
                                                ],
                                                "children": []
                                              }
                                            ]
                                          }
                                        ]
                                      }
                                    ]
                                  }
                                ]
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "id": "w23",
                        "san": "e6",
                        "children": [
                          {
                            "id": "w24",
                            "san": "d4",
                            "children": [
                              {
                                "id": "w25",
                                "san": "cxd4",
                                "children": [
                                  {
                                    "id": "w26",
                                    "san": "Nxd4",
                                    "children": [
                                      {
                                        "id": "w27",
                                        "san": "a6",
                                        "note": "Two Sicilians answered the same way, which is the point of preparing by position rather than by name.",
                                        "tags": [
                                          {
                                            "kind": "study",
                                            "id": "Openings/Ruy Lopez - the Berlin",
                                            "chapter": "The critical sideline"
                                          }
                                        ],
                                        "children": []
                                      }
                                    ]
                                  }
                                ]
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "id": "w28",
                "san": "e6",
                "children": [
                  {
                    "id": "w29",
                    "san": "d4",
                    "children": [
                      {
                        "id": "w30",
                        "san": "d5",
                        "children": [
                          {
                            "id": "w31",
                            "san": "Nc3",
                            "children": [
                              {
                                "id": "w32",
                                "san": "Bb4",
                                "children": []
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    },
    {
      "id": "demo-b",
      "color": "black",
      "root": {
        "id": "b00",
        "children": [
          {
            "id": "b01",
            "san": "d4",
            "depth": 8,
            "children": [
              {
                "id": "b02",
                "san": "Nf6",
                "children": [
                  {
                    "id": "b03",
                    "san": "c4",
                    "children": [
                      {
                        "id": "b04",
                        "san": "e6",
                        "depth": 10,
                        "children": [
                          {
                            "id": "b05",
                            "san": "Nf3",
                            "children": [
                              {
                                "id": "b06",
                                "san": "d5",
                                "children": [
                                  {
                                    "id": "b07",
                                    "san": "Nc3",
                                    "children": [
                                      {
                                        "id": "b08",
                                        "san": "Bb4",
                                        "tags": [
                                          {
                                            "kind": "study",
                                            "id": "Openings/Catalan - the long diagonal",
                                            "chapter": "The critical sideline"
                                          },
                                          {
                                            "kind": "study",
                                            "id": "Openings/Queens Gambit Declined",
                                            "chapter": "The critical sideline"
                                          }
                                        ],
                                        "children": []
                                      }
                                    ]
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "id": "b09",
                            "san": "Nc3",
                            "children": [
                              {
                                "id": "b10",
                                "san": "Bb4",
                                "children": [
                                  {
                                    "id": "b11",
                                    "san": "e3",
                                    "children": [
                                      {
                                        "id": "b12",
                                        "san": "O-O",
                                        "note": "The Nimzo-Indian: the bishop is traded for the knight and the structure decides the rest.",
                                        "tags": [
                                          {
                                            "kind": "study",
                                            "id": "Openings/Catalan - the long diagonal",
                                            "chapter": "A model game"
                                          }
                                        ],
                                        "children": []
                                      }
                                    ]
                                  }
                                ]
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "id": "b13",
            "san": "e4",
            "depth": 8,
            "children": [
              {
                "id": "b14",
                "san": "c5",
                "note": "One answer to 1. e4, and the games to go with it.",
                "children": [
                  {
                    "id": "b15",
                    "san": "Nf3",
                    "children": [
                      {
                        "id": "b16",
                        "san": "Nc6",
                        "children": [
                          {
                            "id": "b17",
                            "san": "d4",
                            "children": [
                              {
                                "id": "b18",
                                "san": "cxd4",
                                "children": [
                                  {
                                    "id": "b19",
                                    "san": "Nxd4",
                                    "children": [
                                      {
                                        "id": "b20",
                                        "san": "e6",
                                        "tags": [
                                          {
                                            "kind": "study",
                                            "id": "Openings/Ruy Lopez - the Berlin",
                                            "chapter": "Main line"
                                          }
                                        ],
                                        "children": []
                                      }
                                    ]
                                  }
                                ]
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "id": "b21",
            "san": "c4",
            "children": [
              {
                "id": "b22",
                "san": "Nf6",
                "children": [
                  {
                    "id": "b23",
                    "san": "g3",
                    "children": [
                      {
                        "id": "b24",
                        "san": "e6",
                        "children": [
                          {
                            "id": "b25",
                            "san": "Bg2",
                            "children": [
                              {
                                "id": "b26",
                                "san": "d5",
                                "tags": [
                                  {
                                    "kind": "study",
                                    "id": "Openings/Sicilian - Najdorf structures",
                                    "chapter": "A model game"
                                  }
                                ],
                                "children": []
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    }
  ]
}
`,"studies/.bookmarks.json":`{
  "ids": [
    "Openings/Ruy Lopez - the Berlin",
    "Endgames/Rook endings - Lucena and Philidor"
  ]
}
`,"studies/Attacking the castled king.pgn":`[Event "Attacking the castled king: Chapter 1"]
[ChapterName "Opposite wings, opposite castling"]
[Date "2025.11.26"]
[White "MAGIC11BOT"]
[Black "Magic11bot_Pro"]
[Result "0-1"]
[WhiteElo "2861"]
[BlackElo "3288"]
[ECO "B90"]
[Opening "Sicilian Defense: Najdorf Variation, English Attack"]

1. e4 c5 2. Nf3 d6 3. d4 Nf6 4. Nc3 cxd4 5. Nxd4 a6 6. Be3 e5 7. Nb3 Be6 8. f3 h5 9. Nd5
{Both kings are going to be attacked. The only question is whose attack arrives first, and it is a question with a countable answer.}
Bxd5 10. exd5 g6 11. Qd2 Bg7 12. O-O-O Nbd7 13. Kb1 b5 14. Na5 Nb6 15. Nc6
{The rook lift is the move that turns a pawn storm into an attack. Everything before it was preparation nobody had to answer.}
Qc7 16. Bxb6 Qxb6 17. Bd3 a5 18. Qe2 b4 19. g4 Qc5 20. Bb5 Kf8 21. g5 Nxd5 22. Qd3 Nc7 23.
Ba4 d5 24. Rhe1 Re8 25. f4 e4 26. Qh3 Re6 27. Nb8 Ke7 28. Nd7 Qd6 29. Rf1 e3 30. Rde1 e2
31. Rf2 Bd4 32. Rfxe2 Qxf4 33. a3 Rd8 34. axb4 axb4 35. Rxe6+ fxe6 36. Rf1 Qe3 37. Qxe3
Bxe3 38. Ne5 Ra8 39. Bb3 Bxg5 40. Rg1 Bf6 41. Nxg6+ Kd6 42. Nf4 Nb5 43. Rg6 Rf8 44. Ba4
Nd4 45. Nd3 Nf3 46. Nxb4 Nxh2 47. c3 Nf3 48. Nd3 h4 49. Bd1 Ng5 50. Bg4 h3 51. Rh6 Rh8 52.
Rxf6 h2 53. Nf2 Ke7 54. Nh3 h1=Q+ 55. Kc2 Qe4+ 56. Kd2 Kxf6 57. c4 Qxg4 58. Nf2 Qxc4 59.
Ke3 Rh2 60. b4 Qc1+ 61. Kd3 Rxf2 62. Kd4 Qc4+
{The habit this drills is the second question in [[What to review after each game]]: where did it stop being comfortable?}
63. Ke3 Re2# 0-1

[Event "Attacking the castled king: Chapter 2"]
[ChapterName "The Greek gift, and when it is not one"]
[Date "2025.11.09"]
[White "Nyxite"]
[Black "Grzechu86"]
[Result "1/2-1/2"]
[WhiteElo "3045"]
[BlackElo "3132"]
[ECO "C11"]
[Opening "French Defense: Steinitz Variation, Boleslavsky Variation"]

1. e4 e6 2. d4 d5 3. Nc3 Nf6 4. e5 Nfd7 5. f4 c5 6. Nf3 Nc6 7. Be3 cxd4 8. Nxd4 Qb6 9. Qd2
Qxb2 10. Rb1
{The sacrifice needs three pieces and a tempo. Count them before playing it: a bishop, a knight to f5 or g5, and a queen that can reach h5.}
Qa3 11. Bb5 Nxd4 12. Bxd4 a6 13. Bxd7+ Bxd7 14. Rb3 Qe7 15. Rxb7 Qd8 16. O-O Qc8 17. Rb3
Bc5 18. Rf2 Qc6 19. Ne2 O-O 20. g4 Rfc8 21. f5 Bf8 22. c3 Rcb8 23. h4 Qc4 24. Nc1 a5 25.
h5 a4 26. Rxb8 Rxb8 27. Kh2 Bb5 28. Ne2 a3 29. h6 gxh6 30. Qf4 Qc8 31. Ng3 Bd3 32. fxe6
Qxe6 33. Nh5 Rb2 34. Nf6+ Kh8 35. Kg3 Bg7 36. Nh5 Rxf2 37. Kxf2 Bc4 38. Qg3 Qg6 39. Qf4
Qe6 40. Qg3 Qg6 1/2-1/2

[Event "Attacking the castled king: Chapter 3"]
[ChapterName "Attacking without queens"]
[Date "2025.11.26"]
[White "ryffhrnyn"]
[Black "gshxusjn"]
[Result "1-0"]
[WhiteElo "3962"]
[BlackElo "3466"]
[ECO "D45"]
[Opening "Semi-Slav Defense: Normal Variation"]

1. d4 d5 2. c4 c6 3. Nc3 Nf6 4. e3 e6 5. Nf3 Nbd7 6. cxd5 exd5 7. Bd3 Bd6 8. O-O O-O 9. h3
Re8 10. a3 b6 11. Qc2 Bb7 12. Rd1
{No queens and still an attack, because the king is a piece that can be surrounded as easily as it can be checkmated. The same target, reached the same way, decided [[Halvorsen T vs Oyelaran B 2026-08-08]].}
Rc8 13. Bd2 c5 14. Rac1 cxd4 15. Nxd4 Nc5 16. b4 Nxd3 17. Qxd3 Be5 18. Nf3 g6 19. Nxe5
Rxe5 20. Ne2 Rxc1 21. Rxc1 Bc8 22. Bc3 Re6 23. Nf4 Rd6 24. Bd4 h5 25. Qc3 Bd7 26. Be5 Qe7
27. Bxd6 Qxd6 28. Qd4 Bf5 29. Rd1 h4 30. Nxd5 Nxd5 31. Qxd5 Qxd5 32. Rxd5 Be6 33. Rd8+ Kg7
34. Ra8 Kf6 35. Rxa7 Bf5 36. a4 g5 37. a5 bxa5 38. bxa5 Kg6 39. a6 f6 40. Rc7 Be4 41. a7
f5 42. Rc8 g4 43. hxg4 fxg4 44. f4 g3 45. a8=Q 1-0
`,"studies/Endgames/Bishop versus knight.pgn":`[Event "Bishop versus knight: Chapter 1"]
[ChapterName "The bishop in an open position"]
[Date "2025.11.22"]
[White "Magic11bot_Pro"]
[Black "Weiawaga"]
[Result "1/2-1/2"]
[WhiteElo "3298"]
[BlackElo "2845"]
[ECO "B97"]
[Opening "Sicilian Defense: Najdorf Variation, Poisoned Pawn Accepted"]

{Pawns on both wings and the bishop is worth more than the knight — not because it is a better piece, but because it is on the same board as two separate weaknesses.}
1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 a6 6. Bg5 e6 7. f4 Qb6 8. Qd2 Qxb2 9. Rb1
Qa3 10. f5 Nc6 11. fxe6 fxe6 12. Nxc6 bxc6 13. Be2 Be7 14. e5 dxe5 15. Bxf6 Bxf6 16. Bh5+
g6 17. Ne4 O-O 18. O-O Bd8 19. Bg4 Kg7 20. c4 Ra7 21. Rxf8 Qxf8 22. c5 h5 23. Bf3 Be7 24.
Qc3 Rd7 25. Rb8 Rd8 26. h3 Kh6 27. Qe3+ Kg7 28. Qc3 Kh6 29. Kf2 h4 30. Ke2 Qf4 31. Qe3 Kh7
32. Ra8 Kg8 33. a4 Kf8 34. Nd6 Bd7 35. Rxa6 Bxd6 36. cxd6 Be8 37. Qxf4+ exf4 38. a5 Rxd6
39. Ra8 c5 40. Bb7 Ke7 41. Rxe8+ Kxe8 42. a6 c4 43. a7 Rd8 44. a8=Q Rxa8 45. Bxa8 Ke7 46.
Kf3 g5 47. Ke4 Kf6 48. Bc6 c3 49. Ba4 e5 50. Bc2 Ke6 51. Bd3 Kd6 52. Bc2 Ke6 53. Bd3 Kd6
54. Bb1 Ke6 55. Bc2 g4 56. hxg4 Kf6 57. Bd3 Kg6 58. Bc2 Kf6 59. Kf3 Kg5 60. Be4 Kh6 61.
Bd3 Kg5 62. Bc2 Kh6 63. Be4 Kg5 64. Bd3 Kf6 65. Be4 Kg5 66. Bd3 Kf6 67. Bc2 Kg5 68. Bf5
Kh6 69. Kf2 Kg5 70. Kf3 Kh6 71. Bd3 Kg5 72. Be4 Kh6 73. Bb1 Kg5 74. Bh7 Kh6 75. Bf5 Kg5
76. Bc2 Kh6 77. Bf5 Kg5 78. Bh7 Kh6 79. Bb1 Kg5 80. Bh7 1/2-1/2

[Event "Bishop versus knight: Chapter 2"]
[ChapterName "The knight, when the pawns are fixed"]
[Date "2025.11.23"]
[White "TesT-Z"]
[Black "Nyxite"]
[Result "1-0"]
[WhiteElo "3073"]
[BlackElo "3062"]
[ECO "C65"]
[Opening "Ruy Lopez: Berlin Defense"]

{One wing, fixed pawns, and the knight is the better piece. The rule is about the position, never about the piece.}
1. e4 e5 2. Nf3 Nc6 3. Bb5 Nf6 4. d3 Bc5 5. Bxc6 dxc6 6. O-O Bg4 7. h3 Bh5 8. g4 Nxg4 9.
hxg4 Bxg4 10. Be3 Be7 11. Kg2 f5 12. Qe1 Bxf3+ 13. Kxf3 f4 14. Bd2 h5 15. Ke2 Qd7 16. Bc3
Bf6 17. Rh1 g5 18. f3 O-O-O 19. Qf2 b6 20. Nd2 g4 21. a4 g3 22. Qg2 Rdg8 23. Rag1 Qe7 24.
Kf1 h4 25. Qh3+ Kb7 26. Rg2 Rh5 27. Re2 Rgh8 28. b4 Qf8 29. Kg2 a6 30. Rb1 Qe8 31. Nc4 Bg7
32. Nb2 Qf7 33. Rc1 Bf8 34. Rd1 Bg7 35. a5 b5 36. d4 exd4 37. Bd2 Rf8 38. Nd3 Be5 39. Rde1
Qc4 40. Kh1 Kb8 41. Qg4 Qf7 42. Nc5 Ka8 43. Qd7 Qg6 44. Qh3 Rg8 45. Bc1 Rg5 46. Kg2 Rh5
47. Nxa6 Bd6 48. Bb2 Kb7 49. Nc5+ Bxc5 50. bxc5 d3 51. cxd3 Ka6 52. Rd2 Rd8 53. e5 b4 54.
Re4 b3 55. e6 Re8 56. e7 Rxc5 57. Rde2 Qh6 58. Re6 Qh7 59. Ba3 Rd5 60. Rxc6+ Kb7 61. a6+
Kb8 62. Rc3 Rxd3 63. Rc4 Rd5 64. Rxf4 Qd3 65. Qe6 Ka7 66. Rxh4 Qxa6 67. Qxa6+ Kxa6 68. Rb4
c5 69. Rxb3 c4 70. Rb1 c3 71. Re6+ Ka5 72. Bb4+ Kb5 73. Bxc3+ Kc5 74. Bb4+ Kc4 75. Rc6+
Kb5 76. Rc2 Rd1 77. Rxd1 Kxb4 78. Rb1+ Ka3 79. Rc7 Ka2 80. Rb6 Ra8 81. e8=Q Ra3 82. Rc2+
Ka1 83. Qe1# 1-0
`,"studies/Endgames/Pawn endings - opposition.pgn":`[Event "Pawn endings - opposition: Chapter 1"]
[ChapterName "Counting, not calculating"]
[Date "2025.11.06"]
[White "YoBot_v2"]
[Black "Cheszter"]
[Result "1/2-1/2"]
[WhiteElo "3067"]
[BlackElo "3047"]
[ECO "D38"]
[Opening "Queen's Gambit Declined: Ragozin Defense"]

{King and pawn endings are the one part of chess that can be answered with certainty, which is why getting one wrong is so expensive.}
1. d4 Nf6 2. c4 e6 3. Nf3 d5 4. Nc3 Bb4 5. Bg5 h6 6. Bxf6 Qxf6 7. e3 O-O 8. Rc1 dxc4 9.
Bxc4 c5 10. Qb3 cxd4 11. Qxb4 Nc6 12. Ne4 Nxb4 13. Nxf6+ gxf6 14. Nxd4 e5 15. Nc2 Nxc2+
16. Rxc2 Bf5 17. Rc1 Rfd8 18. Ke2 Kf8 19. Rhd1 Rxd1 20. Kxd1 Rd8+ 21. Ke1 Rc8 22. Rc3 Ke7
23. Kd2 Rd8+ 24. Ke1 Rc8 25. Kd2 Rd8+ 26. Ke2 Rc8 27. a3 b6 28. g3 Bg6 29. Kd2 Rd8+ 30.
Kc1 Rc8 31. Kd2 Rd8+ 32. Ke1 Rc8 33. Ke2 Rc6 34. f3 Rc7 35. Kd2 Rd7+ 36. Ke1 Rc7 37. f4
Bf5 38. Be2 Rxc3 39. bxc3 Bd7 40. Kd2 Kd6 41. e4 f5 42. Ke3 f6 43. Bc4 Bc8 44. Bb3 Bd7 45.
exf5 Bxf5 46. h4 Bg4 47. Ke4 f5+ 48. Ke3 Bh5 49. Ba2 Be8 50. fxe5+ Kxe5 51. Bb3 Bb5 52.
Bf7 a5 53. Ba2 Bc6 54. Bf7 Bh1 55. Ba2 Bc6 56. Bg8 Bb5 57. Bf7 Bd7 58. Bc4 Ba4 59. Ba6 Bc6
60. Bf1 Bh1 61. Ba6 Be4 62. Bc4 Bd5 63. Bxd5 Kxd5 64. Kf4 Ke6 65. g4 fxg4 66. Kxg4 Kf6 67.
Kh5 Kg7 68. a4 Kf6 69. Kxh6 b5 70. axb5 Ke6 71. h5 a4 72. b6 Kd7 73. b7 Kc7 74. b8=Q+ Kxb8
75. Kg5 a3 76. h6 a2 77. h7 a1=Q 78. h8=Q+ Kb7 79. Qh2 Qxc3 80. Qh1+ Kb6 81. Qb1+ Kc7 82.
Qd1 Qe5+ 83. Kg4 Qe4+ 84. Kg3 Qe5+ 85. Kf2 Qc5+ 86. Ke1 Qc3+ 87. Kf1 Qc4+ 88. Ke1 Qh4+ 89.
Kf1 Qh1+ 90. Ke2 Qe4+ 91. Kf1 Kc6 92. Qc1+ Kb5 93. Qd1 Qh1+ 94. Ke2 Qe4+ 95. Kf1 Qf4+ 96.
Ke1 Qh4+ 97. Kf1 Qh1+ 98. Ke2 Qh5+ 99. Ke1 Qh4+ 100. Kf1 Qh1+ 1/2-1/2

[Event "Pawn endings - opposition: Chapter 2"]
[ChapterName "When the opposition decides it"]
[Date "2025.11.14"]
[White "Cheszter"]
[Black "Moment-That-Inspires"]
[Result "1/2-1/2"]
[WhiteElo "3036"]
[BlackElo "3074"]
[ECO "A20"]
[Opening "English Opening: King's English Variation"]

{Whoever has to move first loses a square, and a square here is the game. That is the whole of the opposition.}
1. c4 e5 2. g3 Nf6 3. Bg2 c6 4. d4 e4 5. Bg5 d5 6. Bxf6 Bb4+ 7. Nc3 Qxf6 8. e3 Be6 9. Ne2
Nd7 10. cxd5 cxd5 11. O-O Bxc3 12. bxc3 Nb6 13. f3 exf3 14. Bxf3 O-O 15. Nf4 Rac8 16. a4
Qg5 17. a5 Nc4 18. Re1 Rfe8 19. e4 dxe4 20. Rxe4 Bf5 21. Re1 Nd6 22. Qb3 Qd8 23. Qb4 Rxe1+
24. Rxe1 g6 25. h4 Rc4 26. Qa3 Rc8 27. h5 gxh5 28. Nd5 Be6 29. Qc1 Bxd5 30. Bxd5 Kg7 31.
Rf1 Rc7 32. Rf3 Nb5 33. Rxf7+ Rxf7 34. Bxf7 Nxd4 35. Bxh5 Nc6 36. Qf4 Qxa5 37. Qf7+ Kh6
38. Bf3 Qe5 39. Qf8+ Kg6 40. Qg8+ Kf6 41. Kg2 Qe7 42. Qc4 a5 43. Bxc6 bxc6 44. Qxc6+ Qe6
45. Qf3+ Qf5 46. Qc6+ Qe6 47. Qf3+ Kg7 48. Qd3 Qc6+ 49. Kh2 Qh6+ 50. Kg1 Qb6+ 51. Kf1 Qc5
52. Ke2 h5 53. c4 Kf6 54. Qb3 Ke5 55. Qc3+ Kd6 56. Qd3+ Kc7 57. Qc3 Kd6 58. Qb3 Kc7 59.
Qc2 Qe7+ 60. Kd1 Qd6+ 61. Kc1 Qxg3 62. Qh7+ Kd6 63. c5+ Kxc5 64. Qxh5+ Kb4 65. Qe2 Qf4+
66. Kb2 Qf6+ 67. Ka2 Qf7+ 68. Ka1 Qf6+ 69. Kb1 Qg6+ 70. Kb2 Qg7+ 71. Kb1 Qg1+ 72. Ka2 Qg8+
73. Ka1 Qg1+ 74. Kb2 Qg7+ 75. Kb1 Qg1+ 76. Kb2 Qd4+ 77. Ka2 Qd5+ 78. Ka1 Qd4+ 79. Ka2 Qc4+
80. Qxc4+ Kxc4 81. Kb1 Kc3 82. Ka2 Kb4 83. Kb2 Ka4 84. Kc3 Ka3 85. Kc2 a4 86. Kb1 Kb3 87.
Ka1 a3 88. Kb1 Kc3 89. Ka1 Kb3 90. Kb1 1/2-1/2
`,"studies/Endgames/Rook endings - Lucena and Philidor.pgn":`[Event "Rook endings - Lucena and Philidor: Chapter 1"]
[ChapterName "Rook and pawn, from a real game"]
[Date "2025.11.22"]
[White "Magic11bot_Pro"]
[Black "ArasanX"]
[Result "1/2-1/2"]
[WhiteElo "3308"]
[BlackElo "3006"]
[ECO "B30"]
[Opening "Sicilian Defense: Closed, Anti-Sveshnikov Variation, with d6"]

{The whole game, because the ending is not a position that appears from nowhere — it is what this middlegame was always going to become.}
1. e4 c5 2. Nf3 Nc6 3. Nc3 e5 4. Bc4 Be7 5. d3 d6 6. a4 Nf6 7. Bg5 Nb4 8. h3 O-O 9. O-O
Be6 10. Bd2 Qd7 11. Re1 Rad8 12. Bb5 Qc7 13. Bc4 Nxe4 14. Nxe4 d5 15. Nfg5 Bc8 16. Bb3
dxe4 17. Qh5 Bxg5 18. Bxg5 Rde8 19. Rxe4 Bf5 20. Rc4 b6 21. a5 Nc6 22. Be3 Nd4 23. Bxd4
exd4 24. axb6 axb6 25. Rca4 g6 26. Qf3 Be6 27. Bxe6 Rxe6 28. g3 Qe5 29. b4 b5 30. Ra7 cxb4
31. Rd7 Rf6 32. Qe4 Re8 33. Re1 Qxe4 34. Rxe4 Rxe4 35. dxe4 Rc6 36. Rxd4 Rc4 37. Rd5 Rxe4
38. Rxb5 Rc4 39. h4 Rxc2 40. Rxb4 Kg7 41. Ra4 Rc1+ 42. Kg2 Rc7 43. Ra2 Re7 44. Rb2 f6 45.
g4 Rd7 46. g5 fxg5 47. hxg5 Ra7 48. Kf3 Ra8 49. Kg4 Kh8 50. Kf4 Rc8 51. f3 Ra8 52. Ke3 Rc8
53. f4 Rg8 54. f5 gxf5 55. Kf4 Rc8 56. Kxf5 Rc7 57. Rb5 Rf7+ 58. Ke5 Rf8 59. Ra5 Rf7 60.
Ra6 Rf8 61. g6 h6 62. Ra7 Kg8 63. Rh7 Rf3 64. Rxh6 Kg7 65. Rh2 Rd3 66. Rg2 Re3+ 67. Kd5
Rh3 68. Rf2 Rd3+ 69. Kc6 Rg3 70. Rf7+ Kxg6 71. Rf4 Kg5 72. Rd4 Kf5 73. Kc7 Ke5 74. Rd2
Rc3+ 75. Kb6 Rh3 76. Kc6 Ra3 77. Kd7 Re3 78. Ke7 Kf4+ 79. Kf6 Rc3 80. Rd4+ Ke3 81. Ra4 Kd2
82. Rg4 Re3 83. Rg2+ Kc1 84. Ra2 Kb1 85. Rg2 Re1 86. Kf5 Ka1 87. Kf4 Re6 88. Kf5 Re1 89.
Rc2 Rb1 90. Ke4 Rb7 91. Rg2 Re7+ 92. Kd3 Re5 93. Rg6 Re7 94. Kc2 Ra7 95. Rc6 Ka2 96. Rc8
Ra5 97. Kc1 Ka3 98. Kc2 Ra6 99. Kc3 Ka2 100. Kc2 Ra5 101. Rc6 Ra7
{The technique from here is the bridge: cut the king off, walk out, interpose on the fourth rank. Drilled in [[Endgame drills for the week]].}
102. Rc8 Ra5 1/2-1/2

[Event "Rook endings - Lucena and Philidor: Chapter 2"]
[ChapterName "The defence: rook active, king in front"]
[Date "2025.11.22"]
[White "Magic11bot_Pro"]
[Black "Weiawaga"]
[Result "1-0"]
[WhiteElo "3305"]
[BlackElo "2846"]
[ECO "B12"]
[Opening "Caro-Kann Defense: Advance Variation, Short Variation"]

{The other half. A rook ending a pawn down is a draw far more often than it is lost, and the drawing method is shorter than the winning one.}
1. e4 c6 2. d4 d5 3. e5 Bf5 4. Nf3 e6 5. Be2 Nd7 6. O-O h6 7. a4 Ne7 8. a5 c5 9. c4 dxc4
10. Nbd2 a6 11. Nxc4 Nd5 12. Qb3 Be7 13. Nh4 Bh7 14. Qg3 Kf8 15. Nf3 Bg6 16. Ne3 Be4 17.
Rd1 Rc8 18. h4 g6 19. Nc4 Kg7 20. h5 g5 21. dxc5 Nxc5 22. Nd4 Bh7 23. Nb6 Ne4 24. Qh3 Rc5
25. Be3 Qe8 26. Nxd5 Rxd5 27. Nxe6+ fxe6 28. Qxe6 Rd8 29. Rac1 Rxd1+ 30. Rxd1 Qf7 31. Qb6
Bf5 32. Bf3 Rf8 33. e6 Qxe6 34. Qxe6 Bxe6 35. Bxe4 Kf7 36. Rc1 Rc8 37. Bxb7 Rxc1+ 38. Bxc1
Bb4 39. Bxa6 Bxa5 40. Kf1 Bd5 41. Be3 Bb4 42. Bd4 Kf8 43. Be5 Be6 44. Bd3 Bd7 45. f3 Bc6
46. Bc4 Be8 47. g4 Bd7 48. Bd4 Be8 49. Kf2 Bd6 50. Bc3 Bc5+ 51. Ke2 Bb6 52. Bb4+ Kg7 53.
Bc3+ Kf8 54. b4 Bc6 55. b5 Bb7 56. Bd3 Bd5 57. Bd2 Bd8 58. Kf2 Bc7 59. Bb4+ Kf7 60. Bc5
Ke6 61. Be4 Bc4 62. b6 Be5 63. b7 Ba6 64. Ba7 Ke7 65. b8=Q Bxb8 66. Bxb8 Kf7 67. Ke3 Ke7
68. Kd4 Bb5 69. Ke5 Bc4 70. Bd6+ Ke8 71. Bd5 Ba6 72. Kf6 Bf1 73. Kg7 Kd7 74. Be5 Ke7 75.
Kxh6 Kf8 76. Kxg5 Bd3 77. Be4 Bxe4 78. fxe4 Kf7 79. Kf5 Ke8 80. h6 Kd7 81. Bf4 Kc6 82. h7
Kc5 83. h8=Q Kc4 84. g5 Kb4 85. g6 Kc5 86. g7 Kd4 87. g8=Q+ Kd3 88. Qb3+ Ke2 89. Qh2+ Kf1
90. Qb1# 1-0
`,"studies/Minority attack.pgn":`[Event "Minority attack: Chapter 1"]
[ChapterName "Two pawns against three"]
[Date "2025.11.22"]
[White "YoBot_v2"]
[Black "MastacticaTeoriabot"]
[Result "1/2-1/2"]
[WhiteElo "3056"]
[BlackElo "3079"]
[ECO "D35"]
[Opening "Queen's Gambit Declined: Exchange Variation, Positional Variation"]

1. d4 d5 2. c4 e6 3. Nc3 Nf6 4. cxd5 exd5 5. Bg5 c6 6. e3 h6 7. Bh4 Be7 8. Bd3 O-O 9. Nge2
Re8 10. O-O Nbd7 11. a4
{The advance is slow and it is not a threat. It is a promise to leave a weakness behind, and the defender has about ten moves to arrange his pieces around it.}
Bb4 12. Qc1 Be7 13. f3 b6 14. Kh1 Bb7 15. Qd2 c5 16. Rad1 a6 17. Bc2 Rc8 18. Bf5 Ra8 19.
Bb1 b5 20. axb5 axb5 21. Nxb5 Ba6 22. Nbc3 cxd4 23. exd4 Nb6 24. Rfe1 Nc4 25. Qc1 Qb8 26.
Bxf6 Bxf6 27. Nxd5 Bg5 28. Qc2 g6 29. Nec3 Rxe1+ 30. Rxe1 Qxb2 31. Qxb2 Nxb2 32. f4 Bd8
33. f5 Ba5 34. fxg6 fxg6 35. Re3 Bc4 36. Bxg6 Kh8 37. h3 Rd8 38. Ne7 Rxd4 39. Nc6 Bxc3 40.
Rxc3 Rd6 41. Ne5 Re6 42. Re3 Nd1 43. Re1 Nc3 44. Bf5 Rf6 45. Nxc4 Rxf5 46. Re3 Nd5 47. Re5
Rxe5 48. Nxe5 Kg7 49. g3 Kf6 50. Nd3 Kf5 51. g4+ Ke4 52. g5 hxg5 53. h4 gxh4 54. Nc1 Nf4
55. Na2 Ke3 56. Nc1 Kf3 57. Na2 Kg3 58. Nc1 h3 59. Ne2+ Nxe2 1/2-1/2

[Event "Minority attack: Chapter 2"]
[ChapterName "The counterplay in the centre"]
[Date "2025.11.26"]
[White "jfevuienj"]
[Black "gshxusjn"]
[Result "1-0"]
[WhiteElo "2724"]
[BlackElo "3438"]
[ECO "D30"]
[Opening "Queen's Gambit Declined"]

1. d4 d5 2. c4 e6 3. cxd5 exd5 4. Nf3 Be7 5. Nc3 Nf6 6. e3 O-O 7. Bd3 Re8 8. h3 h6 9. O-O
c6 10. Re1
{The answer to a wing attack is a break in the centre — which is a rule, and like every rule the interesting part is the position where it does not apply.}
Be6 11. Bd2 Nbd7 12. Qc2 Rc8 13. a3 b6 14. Ba6 Bd6 15. Bxc8 Qxc8 16. e4 Nxe4 17. Nxe4 dxe4
18. Rxe4 Bf5 19. Rxe8+ Qxe8 20. Qxf5 Nf6 21. Rc1 Nd5 22. g3 f6 23. Kg2 a5 24. Re1 Qf7 25.
h4 b5 26. g4 Ne7 27. Qd3 Qd5 28. h5 a4 29. Qc2 Kf8 30. Bc3 Nc8 31. Qg6 Ne7 32. Qe4 Qxe4
33. Rxe4 Nd5 34. Nd2 Nxc3 35. bxc3 Bxa3 36. c4 b4 37. Re3 b3 38. Nxb3 axb3 39. Rxb3 Bd6
40. c5 Bc7 41. Rb7 Bd8 42. Rb8 Ke7 43. Kf3 Ke6 44. Rxd8 1-0
`,"studies/Open files and outposts.pgn":`[Event "Open files and outposts: Chapter 1"]
[ChapterName "Taking a file, and keeping it"]
[Date "2025.11.17"]
[White "vbkbswvs4"]
[Black "vbkbswvs2"]
[Result "1-0"]
[WhiteElo "3524"]
[BlackElo "2866"]
[ECO "A41"]
[Opening "Queen's Pawn Game"]

1. d4 d6 2. e3 e6 3. f3 c6 4. Qd3 f6 5. b3 Be7 6. Bd2 b6 7. c3 a6 8. Be2 Bb7 9. Na3 a5 10.
Rb1 Kf7 11. Rc1 Qd7 12. Rd1
{Doubling on the file is not the plan. The plan is the square at the end of it, and the rooks are how you get to argue about it.}
Ba6 13. Qc2 Bxe2 14. Kf2 Bxd1 15. Qd3 e5 16. e4 f5 17. b4 d5 18. Nb5 c5 19. a3 c4 20. Qb1
Qxb5 21. Qb2 Qxb4 22. Qc1 Qxc3 23. Qxd1 Qxd4+ 24. Kg3 f4+ 25. Kg4 Qf2 26. Be1 Bd6 27. Bxf2
Bc5 28. Bxc5 Ke6 29. Qxd5+ Kf6 30. Qxe5+ Kg6 31. Qf5+ Kh6 32. Qg5# 1-0

[Event "Open files and outposts: Chapter 2"]
[ChapterName "The knight that cannot be dislodged"]
[Date "2025.11.26"]
[White "gshxusjn"]
[Black "hjsjjsd"]
[Result "1-0"]
[WhiteElo "3635"]
[BlackElo "3100"]
[ECO "B10"]
[Opening "Caro-Kann Defense: Two Knights Attack"]

1. e4 c6 2. Nf3 d5 3. Nc3 dxe4 4. Nxe4 Nf6 5. Nxf6+ exf6 6. Bc4 Be7 7. d4 O-O 8. O-O Nd7
9. Re1 Re8 10. c3 Nf8 11. Bf4 Bd7 12. Qb3 b6 13. Bxf7+ Kh8 14. Bxe8
{A protected knight on the sixth is worth more than the exchange, which is a sentence worth testing rather than believing.}
Qxe8 15. Bd6 Bxd6 16. Rxe8 Bxe8 17. Re1 Bd7 18. h3 h6 19. Qf7 a6 20. Nh4 Rb8 21. Ng6+ Nxg6
22. Qxd7 Bf4 23. g3 Bg5 24. h4 Bxh4 25. gxh4 Nxh4 26. Re7 Ng6 27. Rxg7 1-0
`,"studies/Openings/Catalan - the long diagonal.pgn":`[Event "Catalan - the long diagonal: Chapter 1"]
[ChapterName "The pawn Black keeps"]
[Date "2025.11.18"]
[White "cinder-bot"]
[Black "TesT-Z"]
[Result "1/2-1/2"]
[WhiteElo "3020"]
[BlackElo "3061"]
[ECO "E05"]
[Opening "Catalan Opening: Open Defense, Classical Line"]

1. d4 d5 2. Nf3 Nf6 3. c4 e6 4. g3 Be7 5. Bg2 O-O 6. O-O dxc4 7. Qc2
{Black takes on c4 and holds it. The bishop on g2 is not attacking anything yet, which is exactly why the pawn is worth taking.}
a6 8. a4 c5 9. dxc5 Bxc5 10. Nbd2 b5 11. axb5 Bb7 12. bxa6 Nxa6 13. Nxc4 Nb4 14. Rxa8
{And here it is paid back: the pawn goes, and what is left is the diagonal it was bought with.}
Qxa8 15. Qc3 Na2 16. Qa5 Qxa5 17. Nxa5 Ba6 18. Re1 Bxe2 19. Bd2 Bxf3 20. Bxf3 Bb4 21. Ra1
Bxd2 22. Rxa2 Bxa5 23. Rxa5 Rc8 24. Ra8 Rxa8 25. Bxa8 Kf8 26. f4 Ke7 27. Kf1 Kd6 28. Ke2
Kc5 29. Kd3 Kb4 30. Bf3 Kb3 31. Kd4 Kxb2 32. Ke5 Kc3 33. Kd6 Ng8 34. Kd7 g6 35. Ke8 Nh6
36. Kf8 Kd4 37. Kg7 Nf5+ 38. Kxf7 e5 39. fxe5 1/2-1/2

[Event "Catalan - the long diagonal: Chapter 2"]
[ChapterName "The closed Catalan"]
[Date "2025.11.23"]
[White "TesT-Z"]
[Black "Nyxite"]
[Result "1/2-1/2"]
[WhiteElo "3074"]
[BlackElo "3057"]
[ECO "E08"]
[Opening "Catalan Opening: Closed"]

1. d4 Nf6 2. Nf3 d5 3. c4 e6 4. g3 Bb4+ 5. Bd2 Be7 6. Bg2 c6 7. O-O O-O 8. Qc2 Nbd7 9. Bf4
b6 10. Rd1 Bb7 11. Ne5
{Nobody is attacking. Both sides are improving the worst piece they have, and the game will be decided by who runs out of improvements first.}
Nh5 12. Bd2 Nhf6 13. cxd5 cxd5 14. Nc6 Qe8 15. Nxe7+ Qxe7 16. Nc3 Rfc8 17. Qd3 a5 18. a4
Ba6 19. Qe3 Qd8 20. f3 Nb8 21. Qf2 Nc6 22. g4 Bc4 23. Bf4 Na7 24. Rd2 b5 25. e4 b4 26. Nd1
Nc6 27. Ne3 b3 28. Nxc4 dxc4 29. Bf1 Nb4 30. Rc1 Qd7 31. Rxc4 Qxa4 32. Qe2 Qd7 33. Rxc8+
Qxc8 34. Qb5 Qc1 35. g5 Nh5 36. Be3 Nc2 37. Qxb3 Nxe3 38. Qxe3 Qc7 39. d5 exd5 40. Rxd5
Nf4 41. Rc5 Qd7 42. Bc4 Ne6 43. Bxe6 Qxe6 44. Qd4 Qa6 45. Kg2 Rb8 46. h4 g6 47. Kf2 a4 48.
Rd5 Qc8 49. Kg3 Qc1 50. Rd8+ Rxd8 51. Qxd8+ Kg7 52. Qf6+ Kg8 53. Qd8+ Kg7 54. Qd4+ Kg8 55.
e5 Qe1+ 56. Kg4 Qe2 57. Kg3 Qe1+ 58. Kg4 Qe2 59. Qd8+ Kg7 60. Qf6+ Kg8 61. Qd8+ Kg7 62.
Qf6+ Kg8 63. e6 fxe6 64. Qd8+ Kf7 65. Qf6+ Kg8 66. Qc3 Kf7 67. Qd4 Ke7 68. Qb4+ Kd8 69.
Qa5+ Ke7 70. Qb4+ Kd8 71. Qa5+ Ke7 72. Qc7+ Ke8 73. Qc8+ Ke7 74. Qc7+ Ke8 75. Qc8+ Ke7 76.
Qb7+ Kd8 77. Qb8+ Ke7 78. Qb7+ Kd6 79. Qb6+ Kd5 80. Qa5+ Kd6 81. Qb4+ Kc7 82. Qc5+ Kb7 83.
Qb4+ Kc7 84. Qa5+ Kd6 85. Qb6+ Kd5 86. Qb7+ Kc5 87. Qc7+ Kb4 88. Qb7+ Kc5 89. Qa7+ Kb4 90.
Qb6+ Qb5 91. Qxe6 Qc4+ 92. Qxc4+ Kxc4 93. f4 Kb3 94. f5 gxf5+ 95. Kf4 Kxb2 96. h5 a3 97.
g6 hxg6 98. hxg6 a2 99. g7 a1=Q 100. g8=Q Qf1+ 101. Ke5 Qe1+ 102. Kxf5 Qf2+ 103. Ke4 Qe2+
104. Kd4 Qd1+ 105. Kc5 Qc2+ 106. Kb6 Qf2+ 107. Kb7 Qf3+ 108. Kc7 Qc3+ 109. Kd7 Qd4+ 110.
Kc6 Qa4+ 111. Kb6 Qb4+ 112. Kc6 Qa4+ 113. Kb6 Qd4+ 114. Kb5 Qd7+ 115. Kb6 1/2-1/2
`,"studies/Openings/Queens Gambit Declined.pgn":`[Event "Queens Gambit Declined: Chapter 1"]
[ChapterName "The Exchange, and the minority attack"]
[Date "2025.11.21"]
[White "Test-Q"]
[Black "MastacticaTeoriabot"]
[Result "1/2-1/2"]
[WhiteElo "3068"]
[BlackElo "3088"]
[ECO "D35"]
[Opening "Queen's Gambit Declined: Exchange Variation, Positional Variation"]

1. d4 d5 2. c4 e6 3. Nc3 Nf6 4. cxd5 exd5 5. Bg5 Be7 6. e3 O-O 7. Bd3 h6 8. Bh4 c6 9. Qc2
{Two pawns advancing on three, and the point is not to win a pawn but to leave one behind that cannot be defended by another.}
Re8 10. Nge2 Nbd7 11. O-O a5 12. Rac1 Nh5 13. Bxe7 Qxe7 14. Rce1 Nf8 15. Qd2 b6 16. b3
{The backward c-pawn is the whole plan arriving. Everything before this was preparation for a weakness that does not exist yet.}
Bd7 17. Rc1 Rab8 18. Rfe1 Qg5 19. Qc2 Rbc8 20. Kh1 Qe7 21. Ng1 Nf6 22. Nf3 c5 23. Kg1 Ne6
24. dxc5 Rxc5 25. Qd2 Ng5 26. Nxg5 hxg5 27. Ne2 g4 28. Rxc5 Qxc5 29. Qb2 Qb4 30. Rc1 a4
31. Qd4 Qa3 32. Rb1 Qxa2 33. Nc3 Qa3 34. Nxa4 Rc8 35. g3 Rc1+ 36. Rxc1 Qxc1+ 37. Kg2 Bxa4
38. bxa4 Qc6 39. Kf1 g6 40. Kg2 Ne4 41. Bxe4 dxe4 42. Qd8+ Kg7 43. Qd1 Kf8 44. Qa1 Kg8 45.
a5 bxa5 46. Qxa5 Qe6 47. Qa8+ Kg7 48. Kf1 Qe5 49. Kg2 f5 50. Qb7+ Kf6 51. Qb1 Qe7 52. Qa1+
Kf7 53. Kf1 Qd6 54. Qa2+ Ke7 55. Qa1 Kf7 56. Qa2+ Qe6 57. Qb1 Qc4+ 58. Kg2 Qe6 59. Kg1 Qc4
60. Qb7+ Kf6 61. Qb2+ Kf7 62. Qb7+ Kf6 63. Qb2+ Ke7 64. Qb7+ Kd6 65. Kg2 Qe6 66. Qg7 Kc5
67. Qd4+ Kb5 68. h4 gxh3+ 69. Kxh3 Qe7 1/2-1/2

[Event "Queens Gambit Declined: Chapter 2"]
[ChapterName "Orthodox, with the freeing break"]
[Date "2025.11.24"]
[White "YoBot_v2"]
[Black "HakoAI"]
[Result "1/2-1/2"]
[WhiteElo "3056"]
[BlackElo "2941"]
[ECO "D68"]
[Opening "Queen's Gambit Declined: Orthodox Defense, Classical Variation"]

1. d4 Nf6 2. c4 e6 3. Nf3 d5 4. Nc3 c6 5. Bg5 Be7 6. e3 O-O 7. Rc1 Nbd7 8. Bd3 dxc4 9.
Bxc4 Nd5 10. Bxe7
{Black spends the middlegame trying to play one of two pawn moves. Stopping both is a plan; stopping neither is a lost tempo.}
Qxe7 11. O-O Nxc3 12. Rxc3 e5 13. d5 e4 14. Nd2 cxd5 15. Bxd5 Nf6 16. Bc4 a6 17. Be2 Be6
18. Nb3 Rfc8 19. Rxc8+ Rxc8 20. Nd4 Bd7 21. Qa1 Qc5 22. Nb3 Qc2 23. Re1 h5 24. h3 Be6 25.
Nd4 Qc5 26. Bf1 Bd7 27. Rd1 h4 28. a3 Qg5 29. Kh1 Qc5 30. Kg1 Qg5 31. Kh1 Qc5 32. b3 Qc3
33. Qa2 g5 34. Kg1 g4 35. Ne2 Qe5 36. Qd2 Kg7 37. b4 Ba4 38. Rc1 Rxc1 39. Qxc1 Bb5 40. Nf4
Bxf1 41. Kxf1 gxh3 42. gxh3 Nd5 43. Nxd5 Qxd5 44. Qc3+ Kg6 45. Qc8 Qd1+ 46. Kg2 Qf3+ 47.
Kg1 Qd1+ 48. Kh2 Kg7 49. Qxb7 Qf3 50. Kg1 Qd1+ 51. Kg2 Qf3+ 52. Kg1 Qd1+ 53. Kg2 Qf3+ 54.
Kg1 1/2-1/2

[Event "Queens Gambit Declined: Chapter 3"]
[ChapterName "The Tartakower"]
[Date "2025.11.26"]
[White "gshxusjn"]
[Black "hjsjjsd"]
[Result "1-0"]
[WhiteElo "3571"]
[BlackElo "3138"]
[ECO "D37"]
[Opening "Queen's Gambit Declined: Harrwitz Attack, Main Line"]

1. d4 d5 2. c4 e6 3. Nf3 Nf6 4. Nc3 Be7 5. Bf4 O-O 6. e3 c5 7. dxc5 Bxc5 8. Qc2
{The bishop comes out before the pawn chain closes. Simple, and it took forty years for anyone to trust it.}
Nc6 9. Rd1 a6 10. Be2 Re8 11. O-O h6 12. h3 Qe7 13. cxd5 exd5 14. Nxd5 Nxd5 15. Rxd5 Ba7
16. Rfd1 Be6 17. R5d2 Rad8 18. b3 Rxd2 19. Rxd2 Rd8 20. Rxd8+ Qxd8 21. Bd3 Ne7 22. Be2 Bd5
23. e4 Bxe4 24. Qxe4 Nc6 25. Bc4 Qd7 26. Ne5 Nxe5 27. Qxe5 Qc6 28. Qf5 1-0
`,"studies/Openings/Ruy Lopez - the Berlin.pgn":`[Event "Ruy Lopez - the Berlin: Chapter 1"]
[ChapterName "The endgame after 8...Nxe5"]
[Date "2025.11.10"]
[White "strain-on-veins"]
[Black "pangubot"]
[Result "1/2-1/2"]
[WhiteElo "3054"]
[BlackElo "3077"]
[ECO "C67"]
[Opening "Ruy Lopez: Berlin Defense, Rio Gambit Accepted"]

1. e4 e5 2. Nf3 Nc6 3. Bb5 Nf6 4. O-O
{The queens come off on move eight and the game is still theory. That is the Berlin: an endgame reached before either side has finished developing.}
Nxe4 5. Re1 Nd6 6. Nxe5 Be7 7. Bf1 Nxe5 8. Rxe5 O-O
{White has the better structure, Black has the two bishops, and neither is worth anything until the kings decide where to stand. Everything before this is preparation, and the preparation is listed in [[Opening prep checklist]].}
9. d4 Bf6 10. Re2 b6 11. Re1 Bb7 12. Bf4 Nf5 13. c3 Re8 14. Nd2 Rxe1 15. Qxe1 g6 16. Ne4
Be7 17. Rd1 d5 18. Nd2 Bd6 19. Be5 Bxe5 20. Qxe5 Nd6 21. Re1 Qe8 22. g3 f6 23. Qe7 Qf7 24.
Qe2 Re8 25. Qd1 Rxe1 26. Qxe1 Bc8 27. Qd1 c6 28. h4 Kg7 29. Qa4 Qc7 30. Bg2 Nf5 1/2-1/2

[Event "Ruy Lopez - the Berlin: Chapter 2"]
[ChapterName "When Black keeps the queens on"]
[Date "2025.11.07"]
[White "MastacticaTeoriabot"]
[Black "YoBot_v2"]
[Result "1/2-1/2"]
[WhiteElo "3096"]
[BlackElo "3064"]
[ECO "C65"]
[Opening "Ruy Lopez: Berlin Defense"]

1. e4 e5 2. Nf3 Nc6 3. Bb5 Nf6 4. d3 Bc5 5. Bxc6
{Declining the endgame costs a tempo and buys a middlegame. Whether that is a good trade depends entirely on who is happier with a closed centre.}
dxc6 6. O-O Nd7 7. Nbd2 O-O 8. Nc4 Re8 9. a4 a5 10. Be3 Bb4 11. Bg5 f6 12. Bd2 Nf8 13. Qe1
{The knight on the rim is not badly placed here — it is waiting for f5, and every white piece has to be arranged around stopping it.}
Bxd2 14. Qxd2 b6 15. b3 Ne6 16. Kh1 c5 17. Ng1 c6 18. Ne2 h6 19. Ng3 Ra7 20. f3 Kh7 21.
Ne3 Rf8 22. Rf2 b5 23. Rff1 Nf4 24. Rfb1 Qc7 25. Rd1 Ne6 26. Rf1 Nf4 27. Ngf5 Ne6 28. Qc3
Qb6 29. Ng3 Bd7 30. Qe1 Nd4 31. f4 exf4 32. Rxf4 Be6 33. Rf1 Qc7 34. Qf2 Rd8 35. Nef5 Qe5
36. Ne3 Rdd7 37. Kg1 Rd8 38. Rfe1 Bf7 39. Ngf1 Be6 40. Ng3 Rdd7 41. Rf1 Rdb7 42. Rfe1 Ra8
43. Kh1 Raa7 44. Kg1 Re7 45. h3 Red7 46. Kh2 Rf7 47. Kh1 g6 48. Nef5 Nxc2 49. Qxc2 gxf5
50. Nxf5 Bxf5 51. exf5 Qd5 52. Rac1 Rg7 53. Re2 b4 54. Qxc5 Qxb3 55. Qd6 Raf7 56. Re8 Rd7
57. Qxc6 Rxd3 58. Qa8 Rd1+ 59. Rxd1 Qxd1+ 60. Kh2 Qd6+ 61. Kh1 Qd1+ 62. Kh2 Qd6+ 63. Kh1
Qd1+ 1/2-1/2

[Event "Ruy Lopez - the Berlin: Chapter 3"]
[ChapterName "What the Berlin costs White"]
[Date "2025.11.10"]
[White "pangubot"]
[Black "strain-on-veins"]
[Result "1/2-1/2"]
[WhiteElo "3077"]
[BlackElo "3054"]
[ECO "C67"]
[Opening "Ruy Lopez: Berlin Defense, Berlin Wall"]

1. e4 e5 2. Nf3 Nc6 3. Bb5 Nf6 4. O-O Nxe4 5. d4 Nd6 6. Bxc6
{Nothing has happened yet and White is already playing for two results. Some players will take that; the point of this chapter is to decide before the game, not during it.}
dxc6 7. dxe5 Nf5 8. Qxd8+ Kxd8 9. Nc3 Bd7 10. h3 h6 11. b3 Kc8 12. Bb2 b6 13. Rad1 a5 14.
Rd3 Be7 15. Rfd1 Be6 16. g4 Nh4 17. Nd4 Ng6 18. Nxc6 Bg5 19. Ne4 Nf4 20. Rf3 a4 21. c4
axb3 22. axb3 Ra2 23. Bc3 Re2 24. Rd4 Rc2 25. Rd1 Re2 26. Nd2 Kb7 27. Nb4 c5 28. Nd3 Ng6
29. Rg3 Bh4 30. Rf3 Bg5 31. Kf1 Bxd2 32. Bxd2 Re4 33. Rg3 h5 1/2-1/2
`,"studies/Openings/Sicilian - Najdorf structures.pgn":`[Event "Sicilian - Najdorf structures: Chapter 1"]
[ChapterName "The Poisoned Pawn"]
[Date "2025.11.22"]
[White "Magic11bot_Pro"]
[Black "Weiawaga"]
[Result "1-0"]
[WhiteElo "3307"]
[BlackElo "2845"]
[ECO "B97"]
[Opening "Sicilian Defense: Najdorf Variation, Poisoned Pawn Accepted"]

1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 a6 6. Bg5 e6 7. f4
{Black is a pawn up and every piece is on its first square. The compensation is not an attack; it is that White has to prove something within about fifteen moves.}
Qb6 8. Qd2 Qxb2 9. Rb1 Qa3 10. f5 b5 11. fxe6 fxe6 12. Be2 Be7 13. O-O Ra7 14. Rb3 Qa5 15.
Bxf6
{This is the moment the theory stops. From here both sides are counting tempi rather than remembering them.}
Bxf6 16. Bh5+ Kd8 17. Rxf6 gxf6 18. Qf4 Re8 19. Qxf6+ Rae7 20. Bxe8 Kxe8 21. e5 dxe5 22.
Nf3 Qb6+ 23. Kh1 Rf7 24. Qh8+ Rf8 25. Qxh7 Bb7 26. Ne4 Bxe4 27. Qxe4 Rf5 28. g4 Rf7 29.
Nxe5 Rf1+ 30. Kg2 Qg1+ 31. Kh3 Rf6 32. Qe3 Rf2 33. Nf3 Qg2+ 34. Kh4 Rxc2 35. Qxe6+ Kd8 36.
Rd3+ Kc7 37. h3 Qf1 38. Qe7+ Kb6 39. Rd6+ Ka5 40. Qe3 Qf2+ 41. Qxf2 Rxf2 42. Nd4 Kb4 43.
Rd8 Kc4 44. g5 Rf4+ 45. Kh5 Rxd4 46. Rxb8 Rd2 47. Rc8+ Kb4 48. g6 Rxa2 49. Rc6 Rg2 50.
Rxa6 Kc5 51. Ra8 b4 52. Rb8 Kc4 53. h4 Kc3 54. Kh6 b3 55. g7 b2 56. h5 Rg4 57. Rxb2 Kxb2
58. Kh7 Rg5 59. h6 Rg2 60. g8=Q Re2 61. Qd5 Kc3 62. Qf3+ Kd2 63. Qxe2+ Kxe2 64. Kg6 Kf3
65. Kf5 Ke3 66. h7 Kd3 67. h8=Q Kc4 68. Qe5 Kd3 69. Qc5 Ke2 70. Kf4 Kd3 71. Kf3 Kd2 72.
Qc4 Kd1 73. Ke3 Ke1 74. Qc1# 1-0

[Event "Sicilian - Najdorf structures: Chapter 2"]
[ChapterName "The English Attack"]
[Date "2025.11.26"]
[White "gshxusjn"]
[Black "ryffhrnyn"]
[Result "0-1"]
[WhiteElo "3507"]
[BlackElo "3879"]
[ECO "B90"]
[Opening "Sicilian Defense: Najdorf Variation"]

1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 a6 6. Bd3 e5 7. Nde2 Be7 8. O-O
{Opposite castling, and the race is on. Count the moves each attack needs before choosing which pawn to push.}
Be6 9. f3 O-O 10. Be3 Nbd7 11. Qd2 b5 12. a3 Rc8 13. Rad1 Nb6 14. Bxb6 Qxb6+ 15. Kh1 Rfd8
16. h3 d5 17. exd5
{The defender who opens a file on his own king is usually lost. The exception is when he opens it to trade the attacker off, which is what happens here. A quieter way of asking the same question is [[Openings/Ruy Lopez - the Berlin|the Berlin structure]].}
Nxd5 18. Nxd5 Bxd5 19. c3 Bb3 20. Rde1 Bc4 21. Nc1 Bxd3 22. Nxd3 Qg6 23. Rxe5 Rxd3 24. Qc1
Bd6 25. Ree1 h6 26. Rd1 Rd8 27. Rxd3 Qxd3 28. Re1 Bg3 29. Rf1 g5 30. b4 Re8 31. Qa1 Re2
32. Qc1 Qe3 33. Qxe3 Rxe3 34. Rc1 Kg7 35. c4 bxc4 0-1

[Event "Sicilian - Najdorf structures: Chapter 3"]
[ChapterName "The 6.Bg5 main lines"]
[Date "2025.11.08"]
[White "msksk1"]
[Black "Alexandrya"]
[Result "1/2-1/2"]
[WhiteElo "3029"]
[BlackElo "3056"]
[ECO "B96"]
[Opening "Sicilian Defense: Najdorf Variation"]

1. e4 c5 2. Nf3 d6 3. d4 Nf6 4. Nc3 cxd4 5. Nxd4 a6 6. Bg5 e6 7. f4 Nbd7 8. Qf3 Qc7 9.
O-O-O b5 10. g4 b4 11. Nce2
{The d5 square is the whole argument of the Najdorf, and every trade either wins it or gives it away.}
Bb7 12. Ng3 Be7 13. Bxf6 Bxf6 14. g5 Be7 15. Kb1 g6 16. h4 O-O-O 17. a3 bxa3 18. Qxa3 Nc5
19. Bg2 Kb8 20. Qe3 f5 21. Nb3 Rhe8 22. Nxc5 dxc5 23. Ne2 c4 24. h5 gxh5 25. Bf3 Bc5 26.
Qc3 fxe4 27. Bxh5 Rf8 28. Qxc4 e3 29. Qxe6 Bxh1 30. Rxh1 Qb7 31. Rf1 Qb6 32. Qe5+ Qc7 33.
Qe4 Qb7 34. Qe5+ Qc7 35. Qe6 Rd6 36. Qe4 Ka7 37. Rh1 Rb6 38. b3 Qb7 39. Qxb7+ Rxb7 40. Bf3
Rg7 41. Be4 Bd6 42. Rh4 1/2-1/2
`,"studies/Prophylaxis - Nimzowitsch ideas.pgn":`[Event "Prophylaxis - Nimzowitsch ideas: Chapter 1"]
[ChapterName "Stopping the move before it is played"]
[Date "2025.11.18"]
[White "cinder-bot"]
[Black "Nyxite"]
[Result "1/2-1/2"]
[WhiteElo "3045"]
[BlackElo "3026"]
[ECO "E36"]
[Opening "Nimzo-Indian Defense: Classical Variation, Noa Variation"]

1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. Qc2 d5 5. a3 Bxc3+ 6. Qxc3 O-O 7. Bg5 c5 8. dxc5 d4 9.
Qg3 e5 10. O-O-O
{The move does nothing visible. What it does is take away the one active idea the position contained, which is worth more than any of the moves that looked like progress.}
Re8 11. e3 Nbd7 12. Nf3 Nxc5 13. exd4 exd4 14. Nxd4 Nce4 15. Qf4 Nxg5 16. Qxg5 Ne4 17. Qf4
Bg4 18. Be2 Bxe2 19. Nxe2 Qc8 20. Rhe1 Qxc4+ 21. Nc3 Rac8 22. f3 Qb3 23. fxe4 Rxc3+ 24.
bxc3 Qxc3+ 25. Kb1 Qb3+ 26. Ka1 Qxa3+ 27. Kb1 Qb3+ 28. Ka1 Qa3+ 29. Kb1 Qb3+ 30. Ka1 Qa3+
1/2-1/2

[Event "Prophylaxis - Nimzowitsch ideas: Chapter 2"]
[ChapterName "Overprotection, and what it is for"]
[Date "2025.11.10"]
[White "PreMoveAndCry"]
[Black "ArasanX"]
[Result "0-1"]
[WhiteElo "3125"]
[BlackElo "3014"]
[ECO "C11"]
[Opening "French Defense: Steinitz Variation, Boleslavsky Variation"]

1. e4 e6 2. d4 d5 3. Nc3 Nf6 4. e5 Nfd7 5. f4 c5 6. Nf3 Nc6 7. Be3 cxd4 8. Nxd4 Qb6 9. Na4
Qa5+ 10. Nc3 Qb6 11. Qd2
{Defending a square that is not attacked looks like a wasted move and is a freed one: every piece pointing at e5 is a piece that can leave when e5 is settled.}
Qxb2 12. Rb1 Qa3 13. Bb5 Nxd4 14. Bxd4 a6 15. Bxd7+ Bxd7 16. Rb3 Qe7 17. Rxb7 Rc8 18. O-O
Qd8 19. Qe3 Rc4 20. Rfb1 Be7 21. f5 Bg5 22. Qd3 O-O 23. f6 Bc6 24. Re7 h6 25. g3 h5 26. h4
Bh6 27. Rb6 Qa8 28. a3 g6 29. Kf2 Re8 30. g4 hxg4 31. Kg3 Rxe7 32. fxe7 Be8 33. Nd1 Qa7
34. Nb2 f5 35. Nxc4 dxc4 36. Qe2 Kf7 37. c3 Qc7 38. a4 a5 39. Qg2 Qd7 40. Rb5 Qc8 41. Rb6
Qd7 42. Rb5 Qc8 0-1
`,"studies/The isolated queens pawn.pgn":`[Event "The isolated queens pawn: Chapter 1"]
[ChapterName "The pawn as an asset"]
[Date "2025.11.26"]
[White "ryffhrnyn"]
[Black "gshxusjn"]
[Result "1-0"]
[WhiteElo "3818"]
[BlackElo "3530"]
[ECO "D45"]
[Opening "Semi-Slav Defense: Main Line"]

1. d4 d5 2. c4 c6 3. Nc3 e6 4. Nf3 Nf6 5. e3 Be7 6. Bd2 O-O 7. Bd3 Nbd7 8. O-O
{The isolated pawn gives its owner two open files and an outpost. It is a weakness in the endgame and a set of squares in the middlegame; the whole game is about which one arrives.}
g6 9. Re1 Kg7 10. h3 a6 11. Qc2 Bd6 12. cxd5 exd5 13. Rad1 c5 14. dxc5 Nxc5 15. Nd4 Ne6
16. Nxe6+ Bxe6 17. Qb1 Rc8 18. Rc1 Be7 19. a3 b5 20. b4 Qd7 21. Qb3 Bd6 22. Ne2 h5 23. Nd4
Rxc1 24. Rxc1 Rb8 25. Nc6 Qb7 26. Nxb8 Bxb8 27. Bc3 Qb6 28. Bd4 Qb7 29. Qb2 Qe7 30. Rc5
Bf5 31. Bxf5 gxf5 32. Rc8 Bd6 33. Rc6 Kg6 34. Bxf6 Qxf6 35. Qxf6+ Kxf6 36. Rxd6+ Ke5 37.
Rxa6 1-0

[Event "The isolated queens pawn: Chapter 2"]
[ChapterName "Trading into the weakness"]
[Date "2025.11.26"]
[White "ryffhrnyn"]
[Black "gshxusjn"]
[Result "1-0"]
[WhiteElo "2900"]
[BlackElo "3661"]
[ECO "D30"]
[Opening "Queen's Gambit Declined"]

1. d4 d5 2. c4 e6 3. cxd5 exd5 4. Nf3 Nc6 5. Nc3 Nf6 6. Bf4 Bf5 7. e3 Be7 8. Be2 O-O 9.
Rc1 Qd7 10. O-O h6 11. h3 Bxh3 12. gxh3 Qxh3 13. Re1
{Every trade helps the side playing against the pawn. That is the plan in one sentence, and it takes thirty moves to carry out.}
Ng4 14. Bf1 Qh5 15. Bg2 Qg6 16. Qc2 Qxc2 17. Rxc2 Bb4 18. a3 Bxc3 19. Rxc3 Rae8 20. Bxc7
Re6 21. Bg3 g6 22. a4 a6 23. b3 Rfe8 24. Rcc1 Nxe3 25. fxe3 Rxe3 26. Rxe3 Rxe3 27. Rb1 f6
28. Bf2 Re7 29. b4 Nd8 30. b5 axb5 31. axb5 b6 32. Nd2 f5 33. Bxd5+ Kg7 34. Bg3 g5 35.
Be5+ Kg6 36. Nc4 Kh5 37. Rc1 Kg6 38. Nd6 1-0
`},$=`/vault`,ys=`/demo/puzzles.sqlite`,bs=`/demo/refgames.sqlite`,xs=`/demo/mygames.sqlite`,Ss=`/demo/mygames-analysis.sqlite`,Cs=`.analysis.json`,ws=8,Ts=`b5a3e1c07f2d49b8c`,Es=`b7d4c1e93a06f52bd`,Ds=null,Os=null,ks=new Map;function As(){zt(),Bt();for(let[e,t]of Object.entries(vs))e!==Cs&&F(`${$}/${e}`,t,Date.now()-Object.keys(vs).indexOf(e)*36e5);let e=new G;$o(e,{studies:`${$}/studies`,notes:`${$}/notes`,games:`${$}/games`,puzzlesDb:ys,puzzlesState:`${$}/puzzles`,refgamesDb:bs,myGamesDb:xs,myGamesAnalysisDb:Ss,repertoireState:`${$}/repertoire`,puzzleBooks:`${$}/puzzlebooks`,searchIndex:`${$}/.data/search-index.json`}),e.get(`/api/health`,e=>e.json({ok:!0,crossOriginIsolated:!1,version:`0.11.1`,build:`2026-09-15 06:09:44`,demo:!0}));let t={};return e.get(`/api/settings`,e=>e.json({profile:{},gate:!1,totp:!1,lichess:{configured:!1,last4:null},tablebase:{source:`lichess`,url:null,fallback:`https://tablebase.lichess.ovh/standard`,dir:null,local:!1,sameMachine:!1},training:t,vaultPath:`demo`,name:null,version:`demo`,demo:!0})),e.put(`/api/settings/training`,async e=>{let n=await e.req.json().catch(()=>null);return!n||typeof n!=`object`?e.json({error:`invalid training`},400):(t={...t,...m(n)},e.json({ok:!0}))}),e.get(`/api/explorer/:db`,async t=>{let n=t.req.query(`fen`)??``,r=await e.request(`/api/refgames/explore?fen=${encodeURIComponent(n)}`);if(!r.ok)return t.json({opening:null,moves:[],topGames:[]});let i=await r.json();return t.json({opening:null,moves:i.moves??[],topGames:i.topGames??[]})}),e.route(`/api`,ps(`${$}/puzzlebooks`,`${$}/books`)),e.route(`/api`,_s($,`${$}/.data`)),R($),e.route(`/api`,xn($,{run:Ce,available:he})),e.get(`/api/books/bookmarks`,e=>e.json({ids:[]})),e.post(`/api/books/bookmarks/toggle`,e=>e.json({ids:[]})),e.get(`/api/books`,e=>e.json({books:Ds?[{id:Ts,title:`A sample book`,name:`sample.pdf`,bytes:Ds.byteLength,pages:ws,addedAt:new Date(Date.now()-864e5).toISOString(),lastPage:Os,cover:!1,collection:null,puzzleBook:null}]:[],folders:[]})),e.get(`/api/books/:id/pdf`,e=>{if(e.req.param(`id`)!==Ts||!Ds)return e.json({error:`unknown book`},404);let t=Ds.byteLength,n={"content-type":`application/pdf`,"accept-ranges":`bytes`,"cache-control":`private, no-cache`,etag:`"${t}-demo"`},r=/^bytes=(\d*)-(\d*)$/.exec(e.req.header(`range`)??``);if(r&&(r[1]||r[2])){let i=r[1]?Number(r[1]):Math.max(0,t-Number(r[2])),a=r[1]&&r[2]?Math.min(Number(r[2]),t-1):t-1;return i>a||i>=t?e.body(null,416,{"content-range":`bytes */${t}`}):e.body(Ds.slice(i,a+1),206,{...n,"content-range":`bytes ${i}-${a}/${t}`,"content-length":String(a-i+1)})}return e.body(Ds,200,{...n,"content-length":String(t)})}),e.put(`/api/books/:id/reading`,async e=>{if(e.req.param(`id`)!==Ts)return e.json({error:`unknown book`},404);let t=await e.req.json().catch(()=>({})),n=Number(t.page);return!Number.isInteger(n)||n<1||n>ws?e.json({error:`bad page`},400):(Os=n,e.json({ok:!0}))}),e.get(`/api/books/:id/diagrams`,e=>e.req.param(`id`)===Ts?e.json({pages:Object.fromEntries(ks)}):e.json({error:`unknown book`},404)),e.put(`/api/books/:id/diagrams/:page`,async e=>{if(e.req.param(`id`)!==Ts)return e.json({error:`unknown book`},404);let t=await e.req.json().catch(()=>({}));return ks.set(e.req.param(`page`),Array.isArray(t.diagrams)?t.diagrams:[]),e.json({ok:!0})}),e.all(`/api/*`,e=>e.json({error:`not available in the static demo`},404)),e}function js(){let e=vs[Cs];if(e)try{let t=new Hr(Ss),n=0;for(let r of JSON.parse(e)){let e=Ur(r);e?t.put(e):n+=1}n>0&&console.warn(`demo: ${n} analysis records refused`)}catch(e){console.warn(`demo: analysis seed unreadable —`,e)}}async function Ms(){try{let e=await fetch(new URL(`demo/openings.json`,document.baseURI));e.ok&&F(tn,await e.text(),Date.now()),await Promise.all([`a`,`b`,`c`,`d`,`e`].map(async e=>{let t=await fetch(new URL(`demo/eco/${e}.tsv`,document.baseURI));t.ok&&F(`${X}/scripts/vendor/chess-openings/${e}.tsv`,await t.text(),Date.now())}))}catch{}try{let e=await fetch(new URL(`demo/books/sample.pdf`,document.baseURI),{cache:`no-cache`});e.ok?(Ds=new Uint8Array(await e.arrayBuffer()),F(`${$}/books/${Ts}/book.pdf`,`served from memory — see installDemoBackend`,Date.now())):console.warn(`demo: no sample book (${e.status})`)}catch(e){console.warn(`demo: sample book unavailable —`,e)}try{for(let e of[`page003.jpg`,`page005.jpg`,`page007.jpg`]){let t=await fetch(new URL(`demo/book-pages/${e}`,document.baseURI));if(!t.ok)continue;let n=new Uint8Array(await t.arrayBuffer());_e(`${$}/puzzlebooks/${Es}/diagrams/${e}`,n,Date.now()),pe(Es,e,URL.createObjectURL(new Blob([n],{type:`image/jpeg`})))}}catch(e){console.warn(`demo: book pages unavailable —`,e)}try{await Tn({[ys]:`demo/puzzles.sqlite`,[bs]:`demo/refgames.sqlite`})}catch(e){console.warn(`demo: puzzles and reference games unavailable —`,e)}js();let e=As(),t=window.fetch.bind(window);window.fetch=async(n,r)=>{let i=new Request(n,r),a=new URL(i.url,window.location.href);return a.origin!==window.location.origin||!a.pathname.startsWith(`/api/`)?t(n,r):e.fetch(new Request(a.toString(),i))}}export{Ms as installDemoBackend};