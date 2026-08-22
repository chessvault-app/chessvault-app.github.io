const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./fs-BSZ7ItCU.js","./fs-BmQEFYy6.js","./__vite-browser-external-Cl-YgGEM.js","./__vite-browser-external-BbTE95wW.js","./rolldown-runtime-hePW80VL.js"])))=>i.map(i=>d[i]);
import{r as e,t}from"./rolldown-runtime-hePW80VL.js";import{t as n}from"./homeLayout-BT1i37-H.js";import{t as r}from"./preload-helper-HclGiUj8.js";import{n as i}from"./training-CiVbfUXT.js";import{O as a,T as o,a as s,p as c,r as l,s as u,t as d}from"./san-DpBJhXWL.js";import{c as f,l as p,n as m,r as h,s as g}from"./pgn-CiqrWHWh.js";import{a as _,c as v,d as y,f as b,i as x,l as S,m as C,n as ee,o as w,p as T,r as E,s as te,t as ne,u as D}from"./fs-BmQEFYy6.js";import{n as O,t as re}from"./vaultNames-BG2-zKxi.js";import{n as k,t as A}from"./zobrist-Di1-Po8U.js";import{t as ie}from"./__vite-browser-external-BbTE95wW.js";var ae=(e,t,n)=>(r,i)=>{let a=-1;return o(0);async function o(s){if(s<=a)throw Error(`next() called multiple times`);a=s;let c,l=!1,u;if(e[s]?(u=e[s][0][0],r.req.routeIndex=s):u=s===e.length&&i||void 0,u)try{c=await u(r,()=>o(s+1))}catch(e){if(e instanceof Error&&t)r.error=e,c=await t(e,r),l=!0;else throw e}else r.finalized===!1&&n&&(c=await n(r));return c&&(r.finalized===!1||l)&&(r.res=c),r}},oe=Symbol(),j=(e,t)=>new Response(e,{headers:{"Content-Type":t.replace(/^[^;]+/,e=>e.toLowerCase())}}).formData(),M=e=>`headers`in e,N=async(e,t=Object.create(null))=>{let{all:n=!1,dot:r=!1}=t,i=(M(e)?e.headers:e.raw.headers).get(`Content-Type`)?.split(`;`)[0].trim().toLowerCase();return i===`multipart/form-data`||i===`application/x-www-form-urlencoded`?se(e,{all:n,dot:r}):{}};async function se(e,t){if(!M(e)&&e.bodyCache.formData)return ce(await e.bodyCache.formData,t);let n=M(e)?e.headers:e.raw.headers,r=j(await e.arrayBuffer(),n.get(`Content-Type`)||``);M(e)||(e.bodyCache.formData=r);let i=await r;return i?ce(i,t):{}}function ce(e,t){let n=Object.create(null);return e.forEach((e,r)=>{t.all||r.endsWith(`[]`)?le(n,r,e):n[r]=e}),t.dot&&Object.entries(n).forEach(([e,t])=>{e.includes(`.`)&&(ue(n,e,t),delete n[e])}),n}var le=(e,t,n)=>{e[t]===void 0?e[t]=t.endsWith(`[]`)?[n]:n:Array.isArray(e[t])?e[t].push(n):e[t]=[e[t],n]},ue=(e,t,n)=>{if(/(?:^|\.)__proto__\./.test(t))return;let r=e,i=t.split(`.`);i.forEach((e,t)=>{t===i.length-1?r[e]=n:((!r[e]||typeof r[e]!=`object`||Array.isArray(r[e])||r[e]instanceof File)&&(r[e]=Object.create(null)),r=r[e])})},P=e=>{let t=e.split(`/`);return t[0]===``&&t.shift(),t},de=e=>{let{groups:t,path:n}=fe(e);return pe(P(n),t)},fe=e=>{let t=[];return e=e.replace(/\{[^}]+\}/g,(e,n)=>{let r=`@${n}`;return t.push([r,e]),r}),{groups:t,path:e}},pe=(e,t)=>{for(let n=t.length-1;n>=0;n--){let[r]=t[n];for(let i=e.length-1;i>=0;i--)if(e[i].includes(r)){e[i]=e[i].replace(r,t[n][1]);break}}return e},me={},he=(e,t)=>{if(e===`*`)return`*`;let n=e.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);if(n){let r=`${e}#${t}`;return me[r]||(me[r]=n[2]?t&&t[0]!==`:`&&t[0]!==`*`?[r,n[1],RegExp(`^${n[2]}(?=/${t})`)]:[e,n[1],RegExp(`^${n[2]}$`)]:[e,n[1],!0]),me[r]}return null},ge=(e,t)=>{try{return t(e)}catch{return e.replace(/(?:%[0-9A-Fa-f]{2})+/g,e=>{try{return t(e)}catch{return e}})}},_e=e=>ge(e,decodeURI),ve=e=>{let t=e.url,n=t.indexOf(`/`,t.indexOf(`:`)+4),r=n;for(;r<t.length;r++){let e=t.charCodeAt(r);if(e===37){let e=t.indexOf(`?`,r),i=t.indexOf(`#`,r),a=e===-1?i===-1?void 0:i:i===-1?e:Math.min(e,i),o=t.slice(n,a);return _e(o.includes(`%25`)?o.replace(/%25/g,`%2525`):o)}if(e===63||e===35)break}return t.slice(n,r)},ye=e=>{let t=ve(e);return t.length>1&&t.at(-1)===`/`?t.slice(0,-1):t},F=(e,t,...n)=>(n.length&&(t=F(t,...n)),`${e?.[0]===`/`?``:`/`}${e}${t===`/`?``:`${e?.at(-1)===`/`?``:`/`}${t?.[0]===`/`?t.slice(1):t}`}`),I=e=>{if(e.charCodeAt(e.length-1)!==63||!e.includes(`:`))return null;let t=e.split(`/`),n=[],r=``;return t.forEach(e=>{if(e!==``&&!/\:/.test(e))r+=`/`+e;else if(/\:/.test(e)){if(/\?/.test(e)){n.length===0&&r===``?n.push(`/`):n.push(r);let t=e.replace(`?`,``);r+=`/`+t,n.push(r)}else r+=`/`+e}}),n.filter((e,t,n)=>n.indexOf(e)===t)},be=e=>e.indexOf(`%`)===-1?e:ge(e,L),xe=e=>(e.indexOf(`+`)!==-1&&(e=e.replace(/\+/g,` `)),be(e)),Se=(e,t,n)=>{let r;if(!n&&t&&t.indexOf(`%`)===-1&&t.indexOf(`+`)===-1){let n=e.indexOf(`?`,8);if(n===-1)return;for(e.startsWith(t,n+1)||(n=e.indexOf(`&${t}`,n+1));n!==-1;){let r=e.charCodeAt(n+t.length+1);if(r===61){let r=n+t.length+2,i=e.indexOf(`&`,r);return xe(e.slice(r,i===-1?void 0:i))}if(r==38||isNaN(r))return``;n=e.indexOf(`&${t}`,n+1)}if(r=/[%+]/.test(e),!r)return}let i=Object.create(null);r??=/[%+]/.test(e);let a=e.indexOf(`?`,8);for(;a!==-1;){let t=e.indexOf(`&`,a+1),o=e.indexOf(`=`,a);o>t&&t!==-1&&(o=-1);let s=e.slice(a+1,o===-1?t===-1?void 0:t:o);if(r&&(s=xe(s)),a=t,s===``)continue;let c;o===-1?c=``:(c=e.slice(o+1,t===-1?void 0:t),r&&(c=xe(c))),n?(i[s]&&Array.isArray(i[s])||(i[s]=[]),i[s].push(c)):i[s]??=c}return t?i[t]:i},Ce=Se,we=(e,t)=>Se(e,t,!0),L=decodeURIComponent,Te=class{raw;#e;#t;routeIndex=0;path;bodyCache={};constructor(e,t=`/`,n=[[]]){this.raw=e,this.path=t,this.#t=n}param(e){return e?this.#n(e):this.#r()}#n(e){let t=this.#t[0][this.routeIndex][1][e],n=this.#i(t);return n&&be(n)}#r(){let e={},t=Object.keys(this.#t[0][this.routeIndex][1]);for(let n of t){let t=this.#i(this.#t[0][this.routeIndex][1][n]);t!==void 0&&(e[n]=be(t))}return e}#i(e){return this.#t[1]?this.#t[1][e]:e}query(e){return Ce(this.url,e)}queries(e){return we(this.url,e)}header(e){if(e)return this.raw.headers.get(e)??void 0;let t=Object.create(null);return this.raw.headers.forEach((e,n)=>{t[n]=e}),t}async parseBody(e){return N(this,e)}#a=e=>{let{bodyCache:t,raw:n}=this,r=t[e];if(r)return r;for(let n in t)return t[n].then(t=>(n===`json`&&(t=JSON.stringify(t)),new Response(t)[e]()));return t[e]=n[e]()};json(){return this.#a(`text`).then(e=>JSON.parse(e))}text(){return this.#a(`text`)}arrayBuffer(){return this.#a(`arrayBuffer`)}bytes(){return this.#a(`arrayBuffer`).then(e=>new Uint8Array(e))}blob(){return this.#a(`blob`)}formData(){return this.#a(`formData`)}addValidatedData(e,t){(this.#e??={})[e]=t}valid(e){return this.#e?.[e]}get url(){return this.raw.url}get method(){return this.raw.method}get[oe](){return this.#t}get matchedRoutes(){return this.#t[0].map(([[,e]])=>e)}get routePath(){return this.#t[0].map(([[,e]])=>e)[this.routeIndex].path}},Ee={Stringify:1,BeforeStream:2,Stream:3},De=(e,t)=>{let n=new String(e);return n.isEscaped=!0,n.callbacks=t,n},Oe=async(e,t,n,r,i)=>{typeof e==`object`&&!(e instanceof String)&&(e instanceof Promise||(e=e.toString()),e instanceof Promise&&(e=await e));let a=e.callbacks;if(!a?.length)return Promise.resolve(e);i?i[0]+=e:i=[e];let o=Promise.all(a.map(e=>e({phase:t,buffer:i,context:r}))).then(e=>Promise.all(e.filter(Boolean).map(e=>Oe(e,t,!1,r,i))).then(()=>i[0]));return n?De(await o,a):o},ke=`text/plain; charset=UTF-8`,R=(e,t)=>({"Content-Type":e,...t}),Ae=(e,t)=>new Response(e,t),je=class{#e;#t;env={};#n;finalized=!1;error;#r;#i;#a;#o;#s;#c;#l;#u;#d;constructor(e,t){this.#e=e,t&&(this.#i=t.executionCtx,this.env=t.env,this.#c=t.notFoundHandler,this.#d=t.path,this.#u=t.matchResult)}get req(){return this.#t??=new Te(this.#e,this.#d,this.#u),this.#t}get event(){if(this.#i&&`respondWith`in this.#i)return this.#i;throw Error(`This context has no FetchEvent`)}get executionCtx(){if(this.#i)return this.#i;throw Error(`This context has no ExecutionContext`)}get res(){return this.#a||=Ae(null,{headers:this.#l??=new Headers})}set res(e){if(this.#a&&e){e=Ae(e.body,e);for(let[t,n]of this.#a.headers.entries())if(t!==`content-type`){if(t===`set-cookie`){let t=this.#a.headers.getSetCookie();e.headers.delete(`set-cookie`);for(let n of t)e.headers.append(`set-cookie`,n)}else e.headers.set(t,n)}}this.#a=e,this.finalized=!0}render=(...e)=>(this.#s??=e=>this.html(e),this.#s(...e));setLayout=e=>this.#o=e;getLayout=()=>this.#o;setRenderer=e=>{this.#s=e};header=(e,t,n)=>{this.finalized&&(this.#a=Ae(this.#a.body,this.#a));let r=this.#a?this.#a.headers:this.#l??=new Headers;t===void 0?r.delete(e):n?.append?r.append(e,t):r.set(e,t)};status=e=>{this.#r=e};set=(e,t)=>{this.#n??=new Map,this.#n.set(e,t)};get=e=>this.#n?this.#n.get(e):void 0;get var(){return this.#n?Object.fromEntries(this.#n):{}}#f(e,t,n){let r=this.#a?new Headers(this.#a.headers):this.#l;if(typeof t==`object`&&t.headers){r??=new Headers;for(let[e,n]of new Headers(t.headers))e===`set-cookie`?r.append(e,n):r.set(e,n)}if(n){if(!r){let e=0;for(let t in n)if(++e>1||typeof n[t]!=`string`){r=new Headers;break}}if(r)for(let e in n){let t=n[e];if(typeof t==`string`)r.set(e,t);else{r.delete(e);for(let n of t)r.append(e,n)}}}return Ae(e,{status:typeof t==`number`?t:t?.status??this.#r,headers:r??n})}newResponse=(...e)=>this.#f(...e);body=(e,t,n)=>this.#f(e,t,n);text=(e,t,n)=>!this.#l&&!this.#r&&!t&&!n&&!this.finalized?new Response(e):this.#f(e,t,R(ke,n));json=(e,t,n)=>this.#f(JSON.stringify(e),t,R(`application/json`,n));html=(e,t,n)=>{let r=e=>this.#f(e,t,R(`text/html; charset=UTF-8`,n));return typeof e==`object`?Oe(e,Ee.Stringify,!1,{}).then(r):r(e)};redirect=(e,t)=>{let n=String(e);return this.header(`Location`,/[^\x00-\xFF]/.test(n)?encodeURI(n):n),this.newResponse(null,t??302)};notFound=()=>(this.#c??=()=>Ae(),this.#c(this))},z=[`get`,`post`,`put`,`delete`,`options`,`patch`,`query`],Me=`Can not add a route since the matcher is already built.`,Ne=class extends Error{},B=`__COMPOSED_HANDLER`,Pe=e=>e.text(`404 Not Found`,404),Fe=(e,t)=>{if(`getResponse`in e){let n=e.getResponse();return t.newResponse(n.body,n)}return console.error(e),t.text(`Internal Server Error`,500)},Ie=class e{get;post;put;delete;options;patch;query;all;on;use;router;getPath;_basePath=`/`;#e=`/`;routes=[];constructor(e={}){[...z,`all`].forEach(e=>{this[e]=(t,...n)=>(typeof t==`string`?this.#e=t:this.#r(e,this.#e,t),n.forEach(t=>{this.#r(e,this.#e,t)}),this)}),this.on=(e,t,...n)=>{for(let r of[t].flat()){this.#e=r;for(let t of[e].flat())n.map(e=>{this.#r(t.toUpperCase(),this.#e,e)})}return this},this.use=(e,...t)=>(typeof e==`string`?this.#e=e:(this.#e=`*`,t.unshift(e)),t.forEach(e=>{this.#r(`ALL`,this.#e,e)}),this);let{strict:t,...n}=e;Object.assign(this,n),this.getPath=t??!0?e.getPath??ve:ye}#t(){let t=new e({router:this.router,getPath:this.getPath});return t.errorHandler=this.errorHandler,t.#n=this.#n,t.routes=this.routes,t}#n=Pe;errorHandler=Fe;route(e,t){let n=this.basePath(e);return t.routes.map(e=>{let r;t.errorHandler===Fe?r=e.handler:(r=async(n,r)=>(await ae([],t.errorHandler)(n,()=>e.handler(n,r))).res,r[B]=e.handler),n.#r(e.method,e.path,r,e.basePath)}),this}basePath(e){let t=this.#t();return t._basePath=F(this._basePath,e),t}onError=e=>(this.errorHandler=e,this);notFound=e=>(this.#n=e,this);mount(e,t,n){let r,i;n&&(typeof n==`function`?i=n:(i=n.optionHandler,r=n.replaceRequest===!1?e=>e:n.replaceRequest));let a=i?e=>{let t=i(e);return Array.isArray(t)?t:[t]}:e=>{let t;try{t=e.executionCtx}catch{}return[e.env,t]};return r||=(()=>{let t=F(this._basePath,e),n=t===`/`?0:t.length;return e=>{let t=new URL(e.url);return t.pathname=this.getPath(e).slice(n)||`/`,new Request(t,e)}})(),this.#r(`ALL`,F(e,`*`),async(e,n)=>{let i=await t(r(e.req.raw),...a(e));if(i)return i;await n()}),this}#r(e,t,n,r){e=e.toUpperCase(),t=F(this._basePath,t);let i={basePath:r===void 0?this._basePath:F(this._basePath,r),path:t,method:e,handler:n};this.router.add(e,t,[n,i]),this.routes.push(i)}#i(e,t){if(e instanceof Error)return this.errorHandler(e,t);throw e}#a(e,t,n,r){if(r===`HEAD`)return(async()=>new Response(null,await this.#a(e,t,n,`GET`)))();let i=this.getPath(e,{env:n}),a=this.router.match(r,i),o=new je(e,{path:i,matchResult:a,env:n,executionCtx:t,notFoundHandler:this.#n});if(a[0].length===1){let e;try{e=a[0][0][0][0](o,async()=>{o.res=await this.#n(o)})}catch(e){return this.#i(e,o)}return e instanceof Promise?e.then(e=>e||(o.finalized?o.res:this.#n(o))).catch(e=>this.#i(e,o)):e??this.#n(o)}let s=ae(a[0],this.errorHandler,this.#n);return(async()=>{try{let e=await s(o);if(!e.finalized)throw Error("Context is not finalized. Did you forget to return a Response object or `await next()`?");return e.res}catch(e){return this.#i(e,o)}})()}fetch=(e,...t)=>this.#a(e,t[1],t[0],e.method);request=(e,t,n,r)=>e instanceof Request?this.fetch(t?new Request(e,t):e,n,r):(e=e.toString(),this.fetch(new Request(/^https?:\/\//.test(e)?e:`http://localhost${F(`/`,e)}`,t),n,r));fire=()=>{addEventListener(`fetch`,e=>{e.respondWith(this.#a(e.request,e,void 0,e.request.method))})}},Le=[];function Re(e,t){let n=this.buildAllMatchers(),r=((e,t)=>{let r=n[e]||n.ALL,i=r[2][t];if(i)return i;let a=t.match(r[0]);if(!a)return[[],Le];let o=a.indexOf(``,1);return[r[1][o],a]});return this.match=r,r(e,t)}var V=`[^/]+`,H=`.*`,ze=`(?:|/.*)`,Be=Symbol(),Ve=new Set(`.\\+*[^]$()`);function U(e,t){return e.length===1?t.length===1?e<t?-1:1:-1:t.length===1?1:e===H||e===ze?t===ze?-1:1:t===H||t===ze?-1:e===V?1:t===V?-1:e.length===t.length?e<t?-1:1:t.length-e.length}var He=class e{#e;#t;#n=Object.create(null);insert(t,n,r,i,a){let o=this;for(let n=0,a=t.length;n<a;n++){let s=t[n],c=s.length===1?s===`*`?n===a-1?[``,``,H]:[``,``,V]:null:s===`/*`?[``,``,ze]:s.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/),l;if(c){let t=c[1],n=c[2]||V;if(t&&c[2]&&(n===`.*`||(n=n.replace(/^\((?!\?:)(?=[^)]+\)$)/,`(?:`),/\((?!\?:)/.test(n))||n.length===1&&Ve.has(n)))throw Be;if(l=o.#n[n],!l){if(n!==H&&n!==ze){for(let e in o.#n)if((n.length>1||e.length>1)&&e!==H&&e!==ze)throw Be}l=o.#n[n]=new e}t!==``&&(l.#t??=i.varIndex++,r.push([t,l.#t]))}else if(l=o.#n[s],!l){for(let e in o.#n)if(e.length>1&&e!==H&&e!==ze)throw Be;l=o.#n[s]=new e}o=l}if(o.#e!==void 0)throw Be;o.#e=a?-1:n}buildRegExpStr(){let e=Object.keys(this.#n).sort(U).map(e=>{let t=this.#n[e],n=t.buildRegExpStr();return n===``?``:(typeof t.#t==`number`?`(${e})@${t.#t}`:Ve.has(e)?`\\${e}`:e)+n}).filter(Boolean);return typeof this.#e==`number`&&this.#e!==-1&&e.unshift(`#${this.#e}`),e.length===0?``:e.length===1?e[0]:`(?:`+e.join(`|`)+`)`}},Ue=class{#e={varIndex:0};#t=new He;#n=0;paths=Object.create(null);insert(e,t){if(t){this.#t.insert(e.split(``),0,[],this.#e,!0);return}let n=[],r=[],i=e;for(let e=0;;){let t=!1;if(i=i.replace(/\{[^}]+\}/g,n=>{let i=`@\\${e}`;return r[e]=[i,n],e++,t=!0,i}),!t)break}let a=i.match(/(?::[^\/]+)|(?:\/\*$)|./g)||[];for(let e=r.length-1;e>=0;e--){let[t]=r[e];for(let n=a.length-1;n>=0;n--)if(a[n].indexOf(t)!==-1){a[n]=a[n].replace(t,r[e][1]);break}}this.#t.insert(a,this.#n,n,this.#e,!1),this.paths[e]=[this.#n++,n]}buildRegExp(){let e=this.#t.buildRegExpStr();if(e===``)return[/^$/,[],[]];let t=0,n=[],r=[];return e=e.replace(/#(\d+)|@(\d+)|\.\*\$/g,(e,i,a)=>i===void 0?(a===void 0||(r[Number(a)]=++t),``):(n[++t]=Number(i),`$()`)),[RegExp(`^${e}`),n,r]}},We=Object.create(null);function Ge(e){return We[e]??=RegExp(e===`*`?``:`^${e.replace(/\/\*$|([.\\+*[^\]$()])/g,(e,t)=>t?`\\${t}`:`(?:|/.*)`)}$`)}function Ke(){We=Object.create(null)}function qe(e,t){if(e){for(let n of Object.keys(e).sort((e,t)=>t.length-e.length))if(Ge(n).test(t))return[...e[n]]}}var Je=class{name=`RegExpRouter`;#e;#t;#n;constructor(){this.#e={ALL:Object.create(null)},this.#t={ALL:Object.create(null)},this.#n={ALL:new Ue}}#r(e,t){try{this.#n[e].insert(t,!/\*|\/:/.test(t))}catch(e){throw e===Be?new Ne(t):e}}add(e,t,n){let r=this.#e,i=this.#t;if(!r||!i)throw Error(Me);r[e]||(this.#n[e]=new Ue,[r,i].forEach(t=>{t[e]=Object.create(null),Object.keys(t.ALL).forEach(n=>{t[e][n]=[...t.ALL[n]],this.#r(e,n)})})),t===`/*`&&(t=`*`);let a=(t.match(/\/:/g)||[]).length;if(/\*$/.test(t)){let o=Ge(t);Object.keys(r).forEach(n=>{(e===`ALL`||e===n)&&!r[n][t]&&(this.#r(n,t),r[n][t]=qe(r[n],t)||qe(r.ALL,t)||[])}),Object.keys(r).forEach(t=>{(e===`ALL`||e===t)&&Object.keys(r[t]).forEach(e=>{o.test(e)&&r[t][e].push([n,a])})}),Object.keys(i).forEach(t=>{(e===`ALL`||e===t)&&Object.keys(i[t]).forEach(e=>o.test(e)&&i[t][e].push([n,a]))});return}let o=I(t)||[t];for(let t=0,s=o.length;t<s;t++){let c=o[t];Object.keys(i).forEach(o=>{(e===`ALL`||e===o)&&(i[o][c]||(this.#r(o,c),i[o][c]=[...qe(r[o],c)||qe(r.ALL,c)||[]]),i[o][c].push([n,a-s+t+1]))})}}match=Re;buildAllMatchers(){let e=Object.create(null);return Object.keys(this.#t).concat(Object.keys(this.#e)).forEach(t=>{e[t]||=this.#i(t)}),this.#e=this.#t=this.#n=void 0,Ke(),e}#i(e){let t=this.#e[e],n=this.#t[e],r=this.#n[e],i=Object.create(null),a=[];[t,n].forEach(e=>{for(let t in e){let n=e[t],o=r.paths[t];if(!o){i[t]=[n.map(([e])=>[e,Object.create(null)]),Le];continue}let s=o[1];a[o[0]]=n.map(([e,t])=>{let n=Object.create(null);for(--t;t>=0;t--){let[e,r]=s[t];n[e]=r}return[e,n]})}});let[o,s,c]=r.buildRegExp();for(let e=0,t=a.length;e<t;e++)for(let t=0,n=a[e].length;t<n;t++){let n=a[e][t]?.[1];if(!n)continue;let r=Object.keys(n);for(let e=0,t=r.length;e<t;e++)n[r[e]]=c[n[r[e]]]}let l=[];for(let e in s)l[e]=a[s[e]];return[o,l,i]}},Ye=class{name=`SmartRouter`;#e=[];#t=[];constructor(e){this.#e=e.routers}add(e,t,n){if(!this.#t)throw Error(Me);this.#t.push([e,t,n])}match(e,t){if(!this.#t)throw Error(`Fatal error`);let n=this.#e,r=this.#t,i=n.length,a=0,o;for(;a<i;a++){let i=n[a];try{for(let e=0,t=r.length;e<t;e++)i.add(...r[e]);o=i.match(e,t)}catch(e){if(e instanceof Ne)continue;throw e}this.match=i.match.bind(i),this.#e=[i],this.#t=void 0;break}if(a===i)throw Error(`Fatal error`);return this.name=`SmartRouter + ${this.activeRouter.name}`,o}get activeRouter(){if(this.#t||this.#e.length!==1)throw Error(`No active router has been determined yet.`);return this.#e[0]}},W=Object.create(null),Xe=e=>{for(let t in e)return!0;return!1},Ze=class e{#e;#t;#n;#r=0;#i=W;constructor(e,t,n){if(this.#t=n||Object.create(null),this.#e=[],e&&t){let n=Object.create(null);n[e]={handler:t,possibleKeys:[],score:0},this.#e=[n]}this.#n=[]}insert(t,n,r){this.#r=++this.#r;let i=this,a=de(n),o=[];for(let t=0,n=a.length;t<n;t++){let n=a[t],r=a[t+1],s=he(n,r),c=Array.isArray(s)?s[0]:n;if(c in i.#t){i=i.#t[c],s&&o.push(s[1]);continue}i.#t[c]=new e,s&&(i.#n.push(s),o.push(s[1])),i=i.#t[c]}return i.#e.push({[t]:{handler:r,possibleKeys:o.filter((e,t,n)=>n.indexOf(e)===t),score:this.#r}}),i}#a(e,t,n,r,i){for(let a=0,o=t.#e.length;a<o;a++){let o=t.#e[a],s=o[n]||o.ALL,c={};if(s!==void 0&&(s.params=Object.create(null),e.push(s),r!==W||i&&i!==W))for(let e=0,t=s.possibleKeys.length;e<t;e++){let t=s.possibleKeys[e],n=c[s.score];s.params[t]=i?.[t]&&!n?i[t]:r[t]??i?.[t],c[s.score]=!0}}}search(e,t){let n=[];this.#i=W;let r=[this],i=P(t),a=[],o=i.length,s=null;for(let c=0;c<o;c++){let l=i[c],u=c===o-1,d=[];for(let f=0,p=r.length;f<p;f++){let p=r[f],m=p.#t[l];m&&(m.#i=p.#i,u?(m.#t[`*`]&&this.#a(n,m.#t[`*`],e,p.#i),this.#a(n,m,e,p.#i)):d.push(m));for(let r=0,f=p.#n.length;r<f;r++){let f=p.#n[r],m=p.#i===W?{}:{...p.#i};if(f===`*`){let t=p.#t[`*`];t&&(this.#a(n,t,e,p.#i),t.#i=m,d.push(t));continue}let[h,g,_]=f;if(!l&&!(_ instanceof RegExp))continue;let v=p.#t[h];if(_ instanceof RegExp){if(s===null){s=Array(o);let e=+(t[0]===`/`);for(let t=0;t<o;t++)s[t]=e,e+=i[t].length+1}let r=t.substring(s[c]),l=_.exec(r);if(l){if(m[g]=l[0],this.#a(n,v,e,p.#i,m),l[0].length===r.length&&v.#t[`*`]&&this.#a(n,v.#t[`*`],e,p.#i,m),Xe(v.#t)){v.#i=m;let e=l[0].match(/\//g)?.length??0;(a[e]||=[]).push(v)}continue}}(_===!0||_.test(l))&&(m[g]=l,u?(this.#a(n,v,e,m,p.#i),v.#t[`*`]&&this.#a(n,v.#t[`*`],e,m,p.#i)):(v.#i=m,d.push(v)))}}let f=a.shift();r=f?d.concat(f):d}return n.length>1&&n.sort((e,t)=>e.score-t.score),[n.map(({handler:e,params:t})=>[e,t])]}},Qe=class{name=`TrieRouter`;#e;constructor(){this.#e=new Ze}add(e,t,n){let r=I(t);if(r){for(let t=0,i=r.length;t<i;t++)this.#e.insert(e,r[t],n);return}this.#e.insert(e,t,n)}match(e,t){return this.#e.search(e,t)}},G=class extends Ie{constructor(e={}){super(e),this.router=e.router??new Ye({routers:[new Je,new Qe]})}},$e=new TextEncoder,et=class extends Uint8Array{toString(e=`utf-8`){return new TextDecoder(e).decode(this)}},tt={byteLength(e){return typeof e==`string`?$e.encode(e).length:e.byteLength},from(e){return $e.encode(e)},alloc(e){return new et(e)}};function nt(){let e=globalThis;e.Buffer??=tt}var rt=e(t(((e,t)=>{var n=void 0,r=function(e){return n||(n=new Promise(function(n,r){var i=e===void 0?{}:e,a=i.onAbort;i.onAbort=function(e){r(Error(e)),a&&a(e)},i.postRun=i.postRun||[],i.postRun.push(function(){n(i)}),t=void 0;var o;o||=i===void 0?{}:i;var s=!!globalThis.window,c=!!globalThis.WorkerGlobalScope;o.onRuntimeInitialized=function(){function e(e,t){switch(typeof t){case`boolean`:me(e,+!!t);break;case`number`:le(e,t);break;case`string`:de(e,t,-1,-1);break;case`object`:if(t===null)ue(e);else if(t.length!=null){var n=Ot(t.length);y.set(t,n),pe(e,n,t.length,-1),kt(n)}else he(e,`Wrong API use : tried to return a value of an unknown type (`+t+`).`,-1);break;default:ue(e)}}function t(e,t){for(var n=[],r=0;r<e;r+=1){var i=N(t+4*r,`i32`),a=ae(i);if(a===1||a===2)i=se(i);else if(a===3)i=j(i);else if(a===4){a=i,i=oe(a),a=M(a);for(var o=new Uint8Array(i),s=0;s<i;s+=1)o[s]=y[a+s];i=o}else i=null;n.push(i)}return n}function n(e,t){this.Qa=e,this.db=t,this.Oa=1,this.yb=[]}function r(e,t){if(this.db=t,this.ob=xt(e),this.ob===null)throw Error(`Unable to allocate memory for the SQL string`);this.ub=this.ob,this.gb=this.Fb=null}function i(e){if(this.filename=`dbfile_`+(4294967295*Math.random()>>>0),e!=null){var t=this.filename,n=`/`,r=t;if(n&&(n=typeof n==`string`?n:Pe(n),r=t?fe(n+`/`+t):n),t=Te(!0,!0),r=Ye(r,t),e){if(typeof e==`string`){n=Array(e.length);for(var i=0,o=e.length;i<o;++i)n[i]=e.charCodeAt(i);e=n}tt(r,t|146),n=rt(r,577),st(n,e,0,e.length,0),it(n),tt(r,t)}}this.handleError(c(this.filename,a)),this.db=N(a,`i32`),_e(this.db),this.pb={},this.Sa={}}var a=Nt(4),s=o.cwrap,c=s(`sqlite3_open`,`number`,[`string`,`number`]),l=s(`sqlite3_close_v2`,`number`,[`number`]),u=s(`sqlite3_exec`,`number`,[`number`,`string`,`number`,`number`,`number`]),d=s(`sqlite3_changes`,`number`,[`number`]),f=s(`sqlite3_prepare_v2`,`number`,[`number`,`string`,`number`,`number`,`number`]),p=s(`sqlite3_sql`,`string`,[`number`]),m=s(`sqlite3_normalized_sql`,`string`,[`number`]),h=s(`sqlite3_prepare_v2`,`number`,[`number`,`number`,`number`,`number`,`number`]),g=s(`sqlite3_bind_text`,`number`,[`number`,`number`,`number`,`number`,`number`]),_=s(`sqlite3_bind_blob`,`number`,[`number`,`number`,`number`,`number`,`number`]),v=s(`sqlite3_bind_double`,`number`,[`number`,`number`,`number`]),b=s(`sqlite3_bind_int`,`number`,[`number`,`number`,`number`]),x=s(`sqlite3_bind_parameter_index`,`number`,[`number`,`string`]),S=s(`sqlite3_step`,`number`,[`number`]),C=s(`sqlite3_errmsg`,`string`,[`number`]),ee=s(`sqlite3_column_count`,`number`,[`number`]),w=s(`sqlite3_data_count`,`number`,[`number`]),T=s(`sqlite3_column_double`,`number`,[`number`,`number`]),E=s(`sqlite3_column_text`,`string`,[`number`,`number`]),te=s(`sqlite3_column_blob`,`number`,[`number`,`number`]),ne=s(`sqlite3_column_bytes`,`number`,[`number`,`number`]),D=s(`sqlite3_column_type`,`number`,[`number`,`number`]),O=s(`sqlite3_column_name`,`string`,[`number`,`number`]),re=s(`sqlite3_reset`,`number`,[`number`]),k=s(`sqlite3_clear_bindings`,`number`,[`number`]),A=s(`sqlite3_finalize`,`number`,[`number`]),ie=s(`sqlite3_create_function_v2`,`number`,`number string number number number number number number number`.split(` `)),ae=s(`sqlite3_value_type`,`number`,[`number`]),oe=s(`sqlite3_value_bytes`,`number`,[`number`]),j=s(`sqlite3_value_text`,`string`,[`number`]),M=s(`sqlite3_value_blob`,`number`,[`number`]),se=s(`sqlite3_value_double`,`number`,[`number`]),le=s(`sqlite3_result_double`,``,[`number`,`number`]),ue=s(`sqlite3_result_null`,``,[`number`]),de=s(`sqlite3_result_text`,``,[`number`,`string`,`number`,`number`]),pe=s(`sqlite3_result_blob`,``,[`number`,`number`,`number`,`number`]),me=s(`sqlite3_result_int`,``,[`number`,`number`]),he=s(`sqlite3_result_error`,``,[`number`,`string`,`number`]),ge=s(`sqlite3_aggregate_context`,`number`,[`number`,`number`]),_e=s(`RegisterExtensionFunctions`,`number`,[`number`]),ve=s(`sqlite3_update_hook`,`number`,[`number`,`number`,`number`]);n.prototype.bind=function(e){if(!this.Qa)throw`Statement closed`;return this.reset(),Array.isArray(e)?this.Wb(e):typeof e==`object`&&e?this.Xb(e):!0},n.prototype.step=function(){if(!this.Qa)throw`Statement closed`;this.Oa=1;var e=S(this.Qa);switch(e){case 100:return!0;case 101:return!1;default:throw this.db.handleError(e)}},n.prototype.Pb=function(e){return e??(e=this.Oa,this.Oa+=1),T(this.Qa,e)},n.prototype.hc=function(e){if(e??(e=this.Oa,this.Oa+=1),e=E(this.Qa,e),typeof BigInt!=`function`)throw Error(`BigInt is not supported`);return BigInt(e)},n.prototype.mc=function(e){return e??(e=this.Oa,this.Oa+=1),E(this.Qa,e)},n.prototype.getBlob=function(e){e??(e=this.Oa,this.Oa+=1);var t=ne(this.Qa,e);e=te(this.Qa,e);for(var n=new Uint8Array(t),r=0;r<t;r+=1)n[r]=y[e+r];return n},n.prototype.get=function(e,t){t||={},e!=null&&this.bind(e)&&this.step(),e=[];for(var n=w(this.Qa),r=0;r<n;r+=1)switch(D(this.Qa,r)){case 1:var i=t.useBigInt?this.hc(r):this.Pb(r);e.push(i);break;case 2:e.push(this.Pb(r));break;case 3:e.push(this.mc(r));break;case 4:e.push(this.getBlob(r));break;default:e.push(null)}return e},n.prototype.Db=function(){for(var e=[],t=ee(this.Qa),n=0;n<t;n+=1)e.push(O(this.Qa,n));return e},n.prototype.Ob=function(e,t){e=this.get(e,t),t=this.Db();for(var n={},r=0;r<t.length;r+=1)n[t[r]]=e[r];return n},n.prototype.lc=function(){return p(this.Qa)},n.prototype.ic=function(){return m(this.Qa)},n.prototype.Jb=function(e){return e!=null&&this.bind(e),this.step(),this.reset()},n.prototype.Lb=function(e,t){t??(t=this.Oa,this.Oa+=1),e=xt(e),this.yb.push(e),this.db.handleError(g(this.Qa,t,e,-1,0))},n.prototype.Vb=function(e,t){t??(t=this.Oa,this.Oa+=1);var n=Ot(e.length);y.set(e,n),this.yb.push(n),this.db.handleError(_(this.Qa,t,n,e.length,0))},n.prototype.Kb=function(e,t){t??(t=this.Oa,this.Oa+=1),this.db.handleError((e===(e|0)?b:v)(this.Qa,t,e))},n.prototype.Yb=function(e){e??(e=this.Oa,this.Oa+=1),_(this.Qa,e,0,0,0)},n.prototype.Mb=function(e,t){switch(t??(t=this.Oa,this.Oa+=1),typeof e){case`string`:this.Lb(e,t);return;case`number`:this.Kb(e,t);return;case`bigint`:this.Lb(e.toString(),t);return;case`boolean`:this.Kb(e+0,t);return;case`object`:if(e===null){this.Yb(t);return}if(e.length!=null){this.Vb(e,t);return}}throw`Wrong API use : tried to bind a value of an unknown type (`+e+`).`},n.prototype.Xb=function(e){var t=this;return Object.keys(e).forEach(function(n){var r=x(t.Qa,n);r!==0&&t.Mb(e[n],r)}),!0},n.prototype.Wb=function(e){for(var t=0;t<e.length;t+=1)this.Mb(e[t],t+1);return!0},n.prototype.reset=function(){return this.Cb(),k(this.Qa)===0&&re(this.Qa)===0},n.prototype.Cb=function(){for(var e;(e=this.yb.pop())!==void 0;)kt(e)},n.prototype.cb=function(){this.Cb();var e=A(this.Qa)===0;return delete this.db.pb[this.Qa],this.Qa=0,e},r.prototype.next=function(){if(this.ob===null)return{done:!0};if(this.gb!==null&&(this.gb.cb(),this.gb=null),!this.db.db)throw this.Ab(),Error(`Database closed`);var e=Pt(),t=Nt(4);ce(a),ce(t);try{this.db.handleError(h(this.db.db,this.ub,-1,a,t)),this.ub=N(t,`i32`);var r=N(a,`i32`);return r===0?(this.Ab(),{done:!0}):(this.gb=new n(r,this.db),this.db.pb[r]=this.gb,{value:this.gb,done:!1})}catch(e){throw this.Fb=P(this.ub),this.Ab(),e}finally{Mt(e)}},r.prototype.Ab=function(){kt(this.ob),this.ob=null},r.prototype.jc=function(){return this.Fb===null?P(this.ub):this.Fb},typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`&&(r.prototype[Symbol.iterator]=function(){return this}),i.prototype.Jb=function(e,t){if(!this.db)throw`Database closed`;if(t){e=this.Gb(e,t);try{e.step()}finally{e.cb()}}else this.handleError(u(this.db,e,0,0,a));return this},i.prototype.exec=function(e,t,r){if(!this.db)throw`Database closed`;var i=null,o=null,s=null;try{s=o=xt(e);var c=Nt(4);for(e=[];N(s,`i8`)!==0;){ce(a),ce(c),this.handleError(h(this.db,s,-1,a,c));var l=N(a,`i32`);if(s=N(c,`i32`),l!==0){var u=null;for(i=new n(l,this),t!=null&&i.bind(t);i.step();)u===null&&(u={columns:i.Db(),values:[]},e.push(u)),u.values.push(i.get(null,r));i.cb()}}return e}catch(e){throw i&&i.cb(),e}finally{o&&kt(o)}},i.prototype.ec=function(e,t,n,r,i){typeof t==`function`&&(r=n,n=t,t=void 0),e=this.Gb(e,t);try{for(;e.step();)n(e.Ob(null,i))}finally{e.cb()}if(typeof r==`function`)return r()},i.prototype.Gb=function(e,t){if(ce(a),this.handleError(f(this.db,e,-1,a,0)),e=N(a,`i32`),e===0)throw`Nothing to prepare`;var r=new n(e,this);return t!=null&&r.bind(t),this.pb[e]=r},i.prototype.pc=function(e){return new r(e,this)},i.prototype.fc=function(){Object.values(this.pb).forEach(function(e){e.cb()}),Object.values(this.Sa).forEach(Z),this.Sa={},this.handleError(l(this.db));var e=ct(this.filename);return this.handleError(c(this.filename,a)),this.db=N(a,`i32`),_e(this.db),e},i.prototype.close=function(){this.db!==null&&(Object.values(this.pb).forEach(function(e){e.cb()}),Object.values(this.Sa).forEach(Z),this.Sa={},this.fb&&=(Z(this.fb),void 0),this.handleError(l(this.db)),G(`/`+this.filename),this.db=null)},i.prototype.handleError=function(e){if(e===0)return null;throw e=C(this.db),Error(e)},i.prototype.kc=function(){return d(this.db)},i.prototype.bc=function(n,r){Object.prototype.hasOwnProperty.call(this.Sa,n)&&(Z(this.Sa[n]),delete this.Sa[n]);var i=Dt(function(n,i,a){i=t(i,a);try{var o=r.apply(null,i)}catch(e){he(n,e,-1);return}e(n,o)},`viii`);return this.Sa[n]=i,this.handleError(ie(this.db,n,r.length,1,0,i,0,0,0)),this},i.prototype.ac=function(n,r){var i=r.init||function(){return null},a=r.finalize||function(e){return e},o=r.step;if(!o)throw`An aggregate function must have a step function in `+n;var s={};Object.hasOwnProperty.call(this.Sa,n)&&(Z(this.Sa[n]),delete this.Sa[n]),r=n+`__finalize`,Object.hasOwnProperty.call(this.Sa,r)&&(Z(this.Sa[r]),delete this.Sa[r]);var c=Dt(function(e,n,r){var a=ge(e,1);Object.hasOwnProperty.call(s,a)||(s[a]=i()),n=t(n,r),n=[s[a]].concat(n);try{s[a]=o.apply(null,n)}catch(t){delete s[a],he(e,t,-1)}},`viii`),l=Dt(function(t){var n=ge(t,1);try{var r=a(s[n])}catch(e){delete s[n],he(t,e,-1);return}e(t,r),delete s[n]},`vi`);return this.Sa[n]=c,this.Sa[r]=l,this.handleError(ie(this.db,n,o.length-1,1,0,0,c,l,0)),this},i.prototype.vc=function(e){return this.fb&&=(ve(this.db,0,0),Z(this.fb),void 0),e?(this.fb=Dt(function(t,n,r,i,a){switch(n){case 18:t=`insert`;break;case 23:t=`update`;break;case 9:t=`delete`;break;default:throw`unknown operationCode in updateHook callback: `+n}if(r=P(r),i=P(i),a>2**53-1)throw`rowId too big to fit inside a Number`;e(t,r,i,Number(a))},`viiiij`),ve(this.db,this.fb,0),this):this},n.prototype.bind=n.prototype.bind,n.prototype.step=n.prototype.step,n.prototype.get=n.prototype.get,n.prototype.getColumnNames=n.prototype.Db,n.prototype.getAsObject=n.prototype.Ob,n.prototype.getSQL=n.prototype.lc,n.prototype.getNormalizedSQL=n.prototype.ic,n.prototype.run=n.prototype.Jb,n.prototype.reset=n.prototype.reset,n.prototype.freemem=n.prototype.Cb,n.prototype.free=n.prototype.cb,r.prototype.next=r.prototype.next,r.prototype.getRemainingSQL=r.prototype.jc,i.prototype.run=i.prototype.Jb,i.prototype.exec=i.prototype.exec,i.prototype.each=i.prototype.ec,i.prototype.prepare=i.prototype.Gb,i.prototype.iterateStatements=i.prototype.pc,i.prototype.export=i.prototype.fc,i.prototype.close=i.prototype.close,i.prototype.handleError=i.prototype.handleError,i.prototype.getRowsModified=i.prototype.kc,i.prototype.create_function=i.prototype.bc,i.prototype.create_aggregate=i.prototype.ac,i.prototype.updateHook=i.prototype.vc,o.Database=i};var l=`./this.program`,u=globalThis.document?.currentScript?.src;c&&(u=self.location.href);var d=``,f,p;if(s||c){try{d=new URL(`.`,u).href}catch{}c&&(p=e=>{var t=new XMLHttpRequest;return t.open(`GET`,e,!1),t.responseType=`arraybuffer`,t.send(null),new Uint8Array(t.response)}),f=async e=>{if(e=await fetch(e,{credentials:`same-origin`}),e.ok)return e.arrayBuffer();throw Error(e.status+` : `+e.url)}}var m=console.log.bind(console),h=console.error.bind(console),g,_=!1,v,y,b,x,S,C,ee,w,T;function E(){var e=Ft.buffer;y=new Int8Array(e),x=new Int16Array(e),b=new Uint8Array(e),new Uint16Array(e),S=new Int32Array(e),C=new Uint32Array(e),ee=new Float32Array(e),w=new Float64Array(e),T=new BigInt64Array(e),new BigUint64Array(e)}function te(e){throw o.onAbort?.(e),e=`Aborted(`+e+`)`,h(e),_=!0,new WebAssembly.RuntimeError(e+`. Build with -sASSERTIONS for more info.`)}var ne;async function D(e){if(!g)try{var t=await f(e);return new Uint8Array(t)}catch{}if(e==ne&&g)e=new Uint8Array(g);else if(p)e=p(e);else throw`both async and sync fetching of the wasm failed`;return e}async function O(e,t){try{var n=await D(e);return await WebAssembly.instantiate(n,t)}catch(e){h(`failed to asynchronously prepare wasm: ${e}`),te(e)}}async function re(e){var t=ne;if(!g)try{var n=fetch(t,{credentials:`same-origin`});return await WebAssembly.instantiateStreaming(n,e)}catch(e){h(`wasm streaming compile failed: ${e}`),h(`falling back to ArrayBuffer instantiation`)}return O(t,e)}class k{name=`ExitStatus`;constructor(e){this.message=`Program terminated with exit(${e})`,this.status=e}}var A=e=>{for(;0<e.length;)e.shift()(o)},ie=[],ae=[],oe=()=>{var e=o.preRun.shift();ae.push(e)},j=0,M=null;function N(e,t=`i8`){switch(t.endsWith(`*`)&&(t=`*`),t){case`i1`:return y[e];case`i8`:return y[e];case`i16`:return x[e>>1];case`i32`:return S[e>>2];case`i64`:return T[e>>3];case`float`:return ee[e>>2];case`double`:return w[e>>3];case`*`:return C[e>>2];default:te(`invalid type for getValue: ${t}`)}}var se=!0;function ce(e){var t=`i32`;switch(t.endsWith(`*`)&&(t=`*`),t){case`i1`:y[e]=0;break;case`i8`:y[e]=0;break;case`i16`:x[e>>1]=0;break;case`i32`:S[e>>2]=0;break;case`i64`:T[e>>3]=BigInt(0);break;case`float`:ee[e>>2]=0;break;case`double`:w[e>>3]=0;break;case`*`:C[e>>2]=0;break;default:te(`invalid type for setValue: ${t}`)}}var le=new TextDecoder,ue=(e,t,n,r)=>{if(n=t+n,r)return n;for(;e[t]&&!(t>=n);)++t;return t},P=(e,t,n)=>e?le.decode(b.subarray(e,ue(b,e,t,n))):``,de=(e,t)=>{for(var n=0,r=e.length-1;0<=r;r--){var i=e[r];i===`.`?e.splice(r,1):i===`..`?(e.splice(r,1),n++):n&&(e.splice(r,1),n--)}if(t)for(;n;n--)e.unshift(`..`);return e},fe=e=>{var t=e.charAt(0)===`/`,n=e.slice(-1)===`/`;return(e=de(e.split(`/`).filter(e=>!!e),!t).join(`/`))||t||(e=`.`),e&&n&&(e+=`/`),(t?`/`:``)+e},pe=e=>{var t=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/.exec(e).slice(1);return e=t[0],t=t[1],!e&&!t?`.`:(t&&=t.slice(0,-1),e+t)},me=e=>e&&e.match(/([^\/]+|\/)\/*$/)[1],he=()=>e=>crypto.getRandomValues(e),ge=e=>{(ge=he())(e)},_e=(...e)=>{for(var t=``,n=!1,r=e.length-1;-1<=r&&!n;r--){if(n=0<=r?e[r]:`/`,typeof n!=`string`)throw TypeError(`Arguments to path.resolve must be strings`);if(!n)return``;t=n+`/`+t,n=n.charAt(0)===`/`}return t=de(t.split(`/`).filter(e=>!!e),!n).join(`/`),(n?`/`:``)+t||`.`},ve=e=>{var t=ue(e,0);return le.decode(e.buffer?e.subarray(0,t):new Uint8Array(e.slice(0,t)))},ye=[],F=e=>{for(var t=0,n=0;n<e.length;++n){var r=e.charCodeAt(n);127>=r?t++:2047>=r?t+=2:55296<=r&&57343>=r?(t+=4,++n):t+=3}return t},I=(e,t,n,r)=>{if(!(0<r))return 0;var i=n;r=n+r-1;for(var a=0;a<e.length;++a){var o=e.codePointAt(a);if(127>=o){if(n>=r)break;t[n++]=o}else if(2047>=o){if(n+1>=r)break;t[n++]=192|o>>6,t[n++]=128|o&63}else if(65535>=o){if(n+2>=r)break;t[n++]=224|o>>12,t[n++]=128|o>>6&63,t[n++]=128|o&63}else{if(n+3>=r)break;t[n++]=240|o>>18,t[n++]=128|o>>12&63,t[n++]=128|o>>6&63,t[n++]=128|o&63,a++}}return t[n]=0,n-i},be=[];function xe(e,t){be[e]={input:[],output:[],kb:t},Ke(e,Se)}var Se={open(e){var t=be[e.node.nb];if(!t)throw new z(43);e.Va=t,e.seekable=!1},close(e){e.Va.kb.lb(e.Va)},lb(e){e.Va.kb.lb(e.Va)},read(e,t,n,r){if(!e.Va||!e.Va.kb.Qb)throw new z(60);for(var i=0,a=0;a<r;a++){try{var o=e.Va.kb.Qb(e.Va)}catch{throw new z(29)}if(o===void 0&&i===0)throw new z(6);if(o==null)break;i++,t[n+a]=o}return i&&(e.node.$a=Date.now()),i},write(e,t,n,r){if(!e.Va||!e.Va.kb.Hb)throw new z(60);try{for(var i=0;i<r;i++)e.Va.kb.Hb(e.Va,t[n+i])}catch{throw new z(29)}return r&&(e.node.Ua=e.node.Ta=Date.now()),i}},Ce={Qb(){a:{if(!ye.length){var e=null;if(globalThis.window?.prompt&&(e=window.prompt(`Input: `),e!==null&&(e+=`
`)),!e){var t=null;break a}t=Array(F(e)+1),e=I(e,t,0,t.length),t.length=e,ye=t}t=ye.shift()}return t},Hb(e,t){t===null||t===10?(m(ve(e.output)),e.output=[]):t!=0&&e.output.push(t)},lb(e){0<e.output?.length&&(m(ve(e.output)),e.output=[])},Dc(){return{yc:25856,Ac:5,xc:191,zc:35387,wc:[3,28,127,21,4,0,1,0,17,19,26,0,18,15,23,22,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}},Ec(){return 0},Fc(){return[24,80]}},we={Hb(e,t){t===null||t===10?(h(ve(e.output)),e.output=[]):t!=0&&e.output.push(t)},lb(e){0<e.output?.length&&(h(ve(e.output)),e.output=[])}},L={Za:null,ab(){return L.createNode(null,`/`,16895,0)},createNode(e,t,n,r){if((n&61440)==24576||(n&61440)==4096)throw new z(63);return L.Za||={dir:{node:{Wa:L.La.Wa,Xa:L.La.Xa,mb:L.La.mb,rb:L.La.rb,Tb:L.La.Tb,xb:L.La.xb,vb:L.La.vb,Ib:L.La.Ib,wb:L.La.wb},stream:{Ya:L.Ma.Ya}},file:{node:{Wa:L.La.Wa,Xa:L.La.Xa},stream:{Ya:L.Ma.Ya,read:L.Ma.read,write:L.Ma.write,sb:L.Ma.sb,tb:L.Ma.tb}},link:{node:{Wa:L.La.Wa,Xa:L.La.Xa,eb:L.La.eb},stream:{}},Nb:{node:{Wa:L.La.Wa,Xa:L.La.Xa},stream:Ge}},n=Re(e,t,n,r),V(n.mode)?(n.La=L.Za.dir.node,n.Ma=L.Za.dir.stream,n.Na={}):(n.mode&61440)==32768?(n.La=L.Za.file.node,n.Ma=L.Za.file.stream,n.Ra=0,n.Na=null):(n.mode&61440)==40960?(n.La=L.Za.link.node,n.Ma=L.Za.link.stream):(n.mode&61440)==8192&&(n.La=L.Za.Nb.node,n.Ma=L.Za.Nb.stream),n.$a=n.Ua=n.Ta=Date.now(),e&&(e.Na[t]=n,e.$a=e.Ua=e.Ta=n.$a),n},Cc(e){return e.Na?e.Na.subarray?e.Na.subarray(0,e.Ra):new Uint8Array(e.Na):new Uint8Array},La:{Wa(e){var t={};return t.cc=(e.mode&61440)==8192?e.id:1,t.oc=e.id,t.mode=e.mode,t.rc=1,t.uid=0,t.nc=0,t.nb=e.nb,t.size=V(e.mode)?4096:(e.mode&61440)==32768?e.Ra:(e.mode&61440)==40960?e.link.length:0,t.$a=new Date(e.$a),t.Ua=new Date(e.Ua),t.Ta=new Date(e.Ta),t.Zb=4096,t.$b=Math.ceil(t.size/t.Zb),t},Xa(e,t){for(var n of[`mode`,`atime`,`mtime`,`ctime`])t[n]!=null&&(e[n]=t[n]);t.size!==void 0&&(t=t.size,e.Ra!=t&&(t==0?(e.Na=null,e.Ra=0):(n=e.Na,e.Na=new Uint8Array(t),n&&e.Na.set(n.subarray(0,Math.min(t,e.Ra))),e.Ra=t)))},mb(){throw L.zb||(L.zb=new z(44),L.zb.stack=`<generic error, no stack>`),L.zb},rb(e,t,n,r){return L.createNode(e,t,n,r)},Tb(e,t,n){try{var r=Le(t,n)}catch{}if(r){if(V(e.mode))for(var i in r.Na)throw new z(55);Ie(r)}delete e.parent.Na[e.name],t.Na[n]=e,e.name=n,t.Ta=t.Ua=e.parent.Ta=e.parent.Ua=Date.now()},xb(e,t){delete e.Na[t],e.Ta=e.Ua=Date.now()},vb(e,t){var n=Le(e,t),r;for(r in n.Na)throw new z(55);delete e.Na[t],e.Ta=e.Ua=Date.now()},Ib(e){return[`.`,`..`,...Object.keys(e.Na)]},wb(e,t,n){return e=L.createNode(e,t,41471,0),e.link=n,e},eb(e){if((e.mode&61440)!=40960)throw new z(28);return e.link}},Ma:{read(e,t,n,r,i){var a=e.node.Na;if(i>=e.node.Ra)return 0;if(e=Math.min(e.node.Ra-i,r),8<e&&a.subarray)t.set(a.subarray(i,i+e),n);else for(r=0;r<e;r++)t[n+r]=a[i+r];return e},write(e,t,n,r,i,a){if(t.buffer===y.buffer&&(a=!1),!r)return 0;if(e=e.node,e.Ua=e.Ta=Date.now(),t.subarray&&(!e.Na||e.Na.subarray)){if(a)return e.Na=t.subarray(n,n+r),e.Ra=r;if(e.Ra===0&&i===0)return e.Na=t.slice(n,n+r),e.Ra=r;if(i+r<=e.Ra)return e.Na.set(t.subarray(n,n+r),i),r}a=i+r;var o=e.Na?e.Na.length:0;if(o>=a||(a=Math.max(a,o*(1048576>o?2:1.125)>>>0),o!=0&&(a=Math.max(a,256)),o=e.Na,e.Na=new Uint8Array(a),0<e.Ra&&e.Na.set(o.subarray(0,e.Ra),0)),e.Na.subarray&&t.subarray)e.Na.set(t.subarray(n,n+r),i);else for(a=0;a<r;a++)e.Na[i+a]=t[n+a];return e.Ra=Math.max(e.Ra,i+r),r},Ya(e,t,n){if(n===1?t+=e.position:n===2&&(e.node.mode&61440)==32768&&(t+=e.node.Ra),0>t)throw new z(28);return t},sb(e,t,n,r,i){if((e.node.mode&61440)!=32768)throw new z(43);if(e=e.node.Na,i&2||!e||e.buffer!==y.buffer){i=!0,r=65536*Math.ceil(t/65536);var a=At(65536,r);if(a&&b.fill(0,a,a+r),r=a,!r)throw new z(48);e&&((0<n||n+t<e.length)&&(e=e.subarray?e.subarray(n,n+t):Array.prototype.slice.call(e,n,n+t)),y.set(e,r))}else i=!1,r=e.byteOffset;return{tc:r,Ub:i}},tb(e,t,n,r){return L.Ma.write(e,t,0,r,n,!1),0}}},Te=(e,t)=>{var n=0;return e&&(n|=365),t&&(n|=146),n},Ee=null,De={},Oe=[],ke=1,R=null,Ae=!1,je=!0,z=class{name=`ErrnoError`;constructor(e){this.Pa=e}},Me=class{qb={};node=null;get flags(){return this.qb.flags}set flags(e){this.qb.flags=e}get position(){return this.qb.position}set position(e){this.qb.position=e}},Ne=class{La={};Ma={};ib=null;constructor(e,t,n,r){e||=this,this.parent=e,this.ab=e.ab,this.id=ke++,this.name=t,this.mode=n,this.nb=r,this.$a=this.Ua=this.Ta=Date.now()}get read(){return(this.mode&365)==365}set read(e){e?this.mode|=365:this.mode&=-366}get write(){return(this.mode&146)==146}set write(e){e?this.mode|=146:this.mode&=-147}};function B(e,t={}){if(!e)throw new z(44);t.Bb??=!0,e.charAt(0)===`/`||(e=`//`+e);var n=0;a:for(;40>n;n++){e=e.split(`/`).filter(e=>!!e);for(var r=Ee,i=`/`,a=0;a<e.length;a++){var o=a===e.length-1;if(o&&t.parent)break;if(e[a]!==`.`){if(e[a]===`..`){if(i=pe(i),r===r.parent){e=i+`/`+e.slice(a+1).join(`/`),n--;continue a}r=r.parent}else{i=fe(i+`/`+e[a]);try{r=Le(r,e[a])}catch(e){if(e?.Pa===44&&o&&t.sc)return{path:i};throw e}if(!r.ib||o&&!t.Bb||(r=r.ib.root),(r.mode&61440)==40960&&(!o||t.hb)){if(!r.La.eb)throw new z(52);r=r.La.eb(r),r.charAt(0)===`/`||(r=pe(i)+`/`+r),e=r+`/`+e.slice(a+1).join(`/`);continue a}}}}return{path:i,node:r}}throw new z(32)}function Pe(e){for(var t;;){if(e===e.parent)return e=e.ab.Sb,t?e[e.length-1]===`/`?e+t:`${e}/${t}`:e;t=t?`${e.name}/${t}`:e.name,e=e.parent}}function Fe(e,t){for(var n=0,r=0;r<t.length;r++)n=(n<<5)-n+t.charCodeAt(r)|0;return(e+n>>>0)%R.length}function Ie(e){var t=Fe(e.parent.id,e.name);if(R[t]===e)R[t]=e.jb;else for(t=R[t];t;){if(t.jb===e){t.jb=e.jb;break}t=t.jb}}function Le(e,t){var n=V(e.mode)?(n=H(e,`x`))?n:e.La.mb?0:2:54;if(n)throw new z(n);for(n=R[Fe(e.id,t)];n;n=n.jb){var r=n.name;if(n.parent.id===e.id&&r===t)return n}return e.La.mb(e,t)}function Re(e,t,n,r){return e=new Ne(e,t,n,r),t=Fe(e.parent.id,e.name),e.jb=R[t],R[t]=e}function V(e){return(e&61440)==16384}function H(e,t){return je?0:t.includes(`r`)&&!(e.mode&292)||t.includes(`w`)&&!(e.mode&146)||t.includes(`x`)&&!(e.mode&73)?2:0}function ze(e,t){if(!V(e.mode))return 54;try{return Le(e,t),20}catch{}return H(e,`wx`)}function Be(e,t,n){try{var r=Le(e,t)}catch(e){return e.Pa}if(e=H(e,`wx`))return e;if(n){if(!V(r.mode))return 54;if(r===r.parent||Pe(r)===`/`)return 10}else if(V(r.mode))return 31;return 0}function Ve(e){if(!e)throw new z(63);return e}function U(e){if(e=Oe[e],!e)throw new z(8);return e}function He(e,t=-1){if(e=Object.assign(new Me,e),t==-1)a:{for(t=0;4096>=t;t++)if(!Oe[t])break a;throw new z(33)}return e.bb=t,Oe[t]=e}function Ue(e,t=-1){return e=He(e,t),e.Ma?.Bc?.(e),e}function We(e,t,n){var r=e?.Ma.Xa;e=r?e:t,r??=t.La.Xa,Ve(r),r(e,n)}var Ge={open(e){e.Ma=De[e.node.nb].Ma,e.Ma.open?.(e)},Ya(){throw new z(70)}};function Ke(e,t){De[e]={Ma:t}}function qe(e,t){var n=t===`/`;if(n&&Ee)throw new z(10);if(!n&&t){var r=B(t,{Bb:!1});if(t=r.path,r=r.node,r.ib)throw new z(10);if(!V(r.mode))throw new z(54)}t={type:e,Gc:{},Sb:t,qc:[]},e=e.ab(t),e.ab=t,t.root=e,n?Ee=e:r&&(r.ib=t,r.ab&&r.ab.qc.push(t))}function Je(e,t,n){var r=B(e,{parent:!0}).node;if(e=me(e),!e)throw new z(28);if(e===`.`||e===`..`)throw new z(20);var i=ze(r,e);if(i)throw new z(i);if(!r.La.rb)throw new z(63);return r.La.rb(r,e,t,n)}function Ye(e,t=438){return Je(e,t&4095|32768,0)}function W(e,t=511){return Je(e,t&1023|16384,0)}function Xe(e,t,n){n===void 0&&(n=t,t=438),Je(e,t|8192,n)}function Ze(e,t){if(!_e(e))throw new z(44);var n=B(t,{parent:!0}).node;if(!n)throw new z(44);t=me(t);var r=ze(n,t);if(r)throw new z(r);if(!n.La.wb)throw new z(63);n.La.wb(n,t,e)}function Qe(e){var t=B(e,{parent:!0}).node;e=me(e);var n=Le(t,e),r=Be(t,e,!0);if(r)throw new z(r);if(!t.La.vb)throw new z(63);if(n.ib)throw new z(10);t.La.vb(t,e),Ie(n)}function G(e){var t=B(e,{parent:!0}).node;if(!t)throw new z(44);e=me(e);var n=Le(t,e),r=Be(t,e,!1);if(r)throw new z(r);if(!t.La.xb)throw new z(63);if(n.ib)throw new z(10);t.La.xb(t,e),Ie(n)}function $e(e,t){return e=B(e,{hb:!t}).node,Ve(e.La.Wa)(e)}function et(e,t,n,r){We(e,t,{mode:n&4095|t.mode&-4096,Ta:Date.now(),dc:r})}function tt(e,t){e=typeof e==`string`?B(e,{hb:!0}).node:e,et(null,e,t)}function nt(e,t,n){if(V(t.mode))throw new z(31);if((t.mode&61440)!=32768)throw new z(28);var r=H(t,`w`);if(r)throw new z(r);We(e,t,{size:n,timestamp:Date.now()})}function rt(e,t,n=438){if(e===``)throw new z(44);if(typeof t==`string`){var r={r:0,"r+":2,w:577,"w+":578,a:1089,"a+":1090}[t];if(r===void 0)throw Error(`Unknown file open mode: ${t}`);t=r}if(n=t&64?n&4095|32768:0,typeof e==`object`)r=e;else{var i=e.endsWith(`/`),a=B(e,{hb:!(t&131072),sc:!0});r=a.node,e=a.path}if(a=!1,t&64){if(r){if(t&128)throw new z(20)}else{if(i)throw new z(31);r=Je(e,n|511,0),a=!0}}if(!r)throw new z(44);if((r.mode&61440)==8192&&(t&=-513),t&65536&&!V(r.mode))throw new z(54);if(!a&&(r?(r.mode&61440)==40960?i=32:(i=[`r`,`w`,`rw`][t&3],t&512&&(i+=`w`),i=V(r.mode)&&(i!==`r`||t&576)?31:H(r,i)):i=44,i))throw new z(i);return t&512&&!a&&(i=r,i=typeof i==`string`?B(i,{hb:!0}).node:i,nt(null,i,0)),t=He({node:r,path:Pe(r),flags:t&-131713,seekable:!0,position:0,Ma:r.Ma,uc:[],error:!1}),t.Ma.open&&t.Ma.open(t),a&&tt(r,n&511),t}function it(e){if(e.bb===null)throw new z(8);e.Eb&&=null;try{e.Ma.close&&e.Ma.close(e)}catch(e){throw e}finally{Oe[e.bb]=null}e.bb=null}function at(e,t,n){if(e.bb===null)throw new z(8);if(!e.seekable||!e.Ma.Ya)throw new z(70);if(n!=0&&n!=1&&n!=2)throw new z(28);e.position=e.Ma.Ya(e,t,n),e.uc=[]}function ot(e,t,n,r,i){if(0>r||0>i)throw new z(28);if(e.bb===null||(e.flags&2097155)==1)throw new z(8);if(V(e.node.mode))throw new z(31);if(!e.Ma.read)throw new z(28);var a=i!==void 0;if(!a)i=e.position;else if(!e.seekable)throw new z(70);return t=e.Ma.read(e,t,n,r,i),a||(e.position+=t),t}function st(e,t,n,r,i){if(0>r||0>i)throw new z(28);if(e.bb===null||!(e.flags&2097155))throw new z(8);if(V(e.node.mode))throw new z(31);if(!e.Ma.write)throw new z(28);e.seekable&&e.flags&1024&&at(e,0,2);var a=i!==void 0;if(!a)i=e.position;else if(!e.seekable)throw new z(70);return t=e.Ma.write(e,t,n,r,i,void 0),a||(e.position+=t),t}function ct(e){var t=t||0,n=`binary`;n!==`utf8`&&n!==`binary`&&te(`Invalid encoding type "${n}"`),t=rt(e,t),e=$e(e).size;var r=new Uint8Array(e);return ot(t,r,0,e,0),n===`utf8`&&(r=ve(r)),it(t),r}function K(e,t,n){e=fe(`/dev/`+e);var r=Te(!!t,!!n);K.Rb??=64;var i=K.Rb++<<8|0;Ke(i,{open(e){e.seekable=!1},close(){n?.buffer?.length&&n(10)},read(e,n,r,i){for(var a=0,o=0;o<i;o++){try{var s=t()}catch{throw new z(29)}if(s===void 0&&a===0)throw new z(6);if(s==null)break;a++,n[r+o]=s}return a&&(e.node.$a=Date.now()),a},write(e,t,r,i){for(var a=0;a<i;a++)try{n(t[r+a])}catch{throw new z(29)}return i&&(e.node.Ua=e.node.Ta=Date.now()),a}}),Xe(e,r,i)}var q={};function lt(e,t,n){if(t.charAt(0)===`/`)return t;if(e=e===-100?`/`:U(e).path,t.length==0){if(!n)throw new z(44);return e}return e+`/`+t}function ut(e,t){C[e>>2]=t.cc,C[e+4>>2]=t.mode,C[e+8>>2]=t.rc,C[e+12>>2]=t.uid,C[e+16>>2]=t.nc,C[e+20>>2]=t.nb,T[e+24>>3]=BigInt(t.size),S[e+32>>2]=4096,S[e+36>>2]=t.$b;var n=t.$a.getTime(),r=t.Ua.getTime(),i=t.Ta.getTime();return T[e+40>>3]=BigInt(Math.floor(n/1e3)),C[e+48>>2]=n%1e3*1e6,T[e+56>>3]=BigInt(Math.floor(r/1e3)),C[e+64>>2]=r%1e3*1e6,T[e+72>>3]=BigInt(Math.floor(i/1e3)),C[e+80>>2]=i%1e3*1e6,T[e+88>>3]=BigInt(t.oc),0}var dt=void 0,ft=()=>{var e=S[dt>>2];return dt+=4,e},J=0,pt=[0,31,60,91,121,152,182,213,244,274,305,335],Y=[0,31,59,90,120,151,181,212,243,273,304,334],mt={},ht=e=>{if(!(e instanceof k||e==`unwind`))throw e},gt=e=>{throw v=e,se||0<J||(o.onExit?.(e),_=!0),new k(e)},_t=e=>{if(!_)try{e()}catch(e){ht(e)}finally{if(!(se||0<J))try{v=e=v,gt(e)}catch(e){ht(e)}}},vt={},yt=()=>{if(!bt){var e={USER:`web_user`,LOGNAME:`web_user`,PATH:`/`,PWD:`/`,HOME:`/home/web_user`,LANG:(globalThis.navigator?.language??`C`).replace(`-`,`_`)+`.UTF-8`,_:l||`./this.program`},t;for(t in vt)vt[t]===void 0?delete e[t]:e[t]=vt[t];var n=[];for(t in e)n.push(`${t}=${e[t]}`);bt=n}return bt},bt,X=(e,t,n,r)=>{var i={string:e=>{var t=0;if(e!=null&&e!==0){t=F(e)+1;var n=Nt(t);I(e,b,n,t),t=n}return t},array:e=>{var t=Nt(e.length);return y.set(e,t),t}};e=o[`_`+e];var a=[],s=0;if(r)for(var c=0;c<r.length;c++){var l=i[n[c]];l?(s===0&&(s=Pt()),a[c]=l(r[c])):a[c]=r[c]}return n=e(...a),n=function(e){return s!==0&&Mt(s),t===`string`?P(e):t===`boolean`?!!e:e}(n)},xt=e=>{var t=F(e)+1,n=Ot(t);return n&&I(e,b,n,t),n},St,Ct=[],Z=e=>{St.delete(Q.get(e)),Q.set(e,null),Ct.push(e)},wt=e=>{let t=e.length;return[t%128|128,t>>7,...e]},Tt={i:127,p:127,j:126,f:125,d:124,e:111},Et=e=>wt(Array.from(e,e=>Tt[e])),Dt=(e,t)=>{if(!St){St=new WeakMap;var n=Q.length;if(St)for(var r=0;r<0+n;r++){var i=Q.get(r);i&&St.set(i,r)}}if(n=St.get(e)||0)return n;n=Ct.length?Ct.pop():Q.grow(1);try{Q.set(n,e)}catch(r){if(!(r instanceof TypeError))throw r;t=Uint8Array.of(0,97,115,109,1,0,0,0,1,...wt([1,96,...Et(t.slice(1)),...Et(t[0]===`v`?``:t[0])]),2,7,1,1,101,1,102,0,0,7,5,1,1,102,0,0),t=new WebAssembly.Module(t),t=new WebAssembly.Instance(t,{e:{f:e}}).exports.f,Q.set(n,t)}return St.set(e,n),n};if(R=Array(4096),qe(L,`/`),W(`/tmp`),W(`/home`),W(`/home/web_user`),(function(){W(`/dev`),Ke(259,{read:()=>0,write:(e,t,n,r)=>r,Ya:()=>0}),Xe(`/dev/null`,259),xe(1280,Ce),xe(1536,we),Xe(`/dev/tty`,1280),Xe(`/dev/tty1`,1536);var e=new Uint8Array(1024),t=0,n=()=>(t===0&&(ge(e),t=e.byteLength),e[--t]);K(`random`,n),K(`urandom`,n),W(`/dev/shm`),W(`/dev/shm/tmp`)})(),(function(){W(`/proc`);var e=W(`/proc/self`);W(`/proc/self/fd`),qe({ab(){var t=Re(e,`fd`,16895,73);return t.Ma={Ya:L.Ma.Ya},t.La={mb(e,t){e=+t;var n=U(e);return e={parent:null,ab:{Sb:`fake`},La:{eb:()=>n.path},id:e+1},e.parent=e},Ib(){return Array.from(Oe.entries()).filter(([,e])=>e).map(([e])=>e.toString())}},t}},`/proc/self/fd`)})(),o.noExitRuntime&&(se=o.noExitRuntime),o.print&&(m=o.print),o.printErr&&(h=o.printErr),o.wasmBinary&&(g=o.wasmBinary),o.thisProgram&&(l=o.thisProgram),o.preInit)for(typeof o.preInit==`function`&&(o.preInit=[o.preInit]);0<o.preInit.length;)o.preInit.shift()();o.stackSave=()=>Pt(),o.stackRestore=e=>Mt(e),o.stackAlloc=e=>Nt(e),o.cwrap=(e,t,n,r)=>{var i=!n||n.every(e=>e===`number`||e===`boolean`);return t!==`string`&&i&&!r?o[`_`+e]:(...r)=>X(e,t,n,r)},o.addFunction=Dt,o.removeFunction=Z,o.UTF8ToString=P,o.stringToNewUTF8=xt,o.writeArrayToMemory=(e,t)=>{y.set(e,t)};var Ot,kt,At,jt,Mt,Nt,Pt,Ft,Q,It={a:(e,t,n,r)=>te(`Assertion failed: ${P(e)}, at: `+[t?P(t):`unknown filename`,n,r?P(r):`unknown function`]),i:function(e,t){try{return e=P(e),tt(e,t),0}catch(e){if(q===void 0||e.name!==`ErrnoError`)throw e;return-e.Pa}},L:function(e,t,n){try{if(t=P(t),t=lt(e,t),n&-8)return-28;var r=B(t,{hb:!0}).node;return r?(e=``,n&4&&(e+=`r`),n&2&&(e+=`w`),n&1&&(e+=`x`),e&&H(r,e)?-2:0):-44}catch(e){if(q===void 0||e.name!==`ErrnoError`)throw e;return-e.Pa}},j:function(e,t){try{var n=U(e);return et(n,n.node,t,!1),0}catch(e){if(q===void 0||e.name!==`ErrnoError`)throw e;return-e.Pa}},h:function(e){try{var t=U(e);return We(t,t.node,{timestamp:Date.now(),dc:!1}),0}catch(e){if(q===void 0||e.name!==`ErrnoError`)throw e;return-e.Pa}},b:function(e,t,n){dt=n;try{var r=U(e);switch(t){case 0:var i=ft();if(0>i)break;for(;Oe[i];)i++;return Ue(r,i).bb;case 1:case 2:return 0;case 3:return r.flags;case 4:return i=ft(),r.flags|=i,0;case 12:return i=ft(),x[i+0>>1]=2,0;case 13:case 14:return 0}return-28}catch(e){if(q===void 0||e.name!==`ErrnoError`)throw e;return-e.Pa}},g:function(e,t){try{var n=U(e),r=n.node,i=n.Ma.Wa;return e=i?n:r,i??=r.La.Wa,Ve(i),ut(t,i(e))}catch(e){if(q===void 0||e.name!==`ErrnoError`)throw e;return-e.Pa}},H:function(e,t){t=-9007199254740992>t||9007199254740992<t?NaN:Number(t);try{if(isNaN(t))return-61;var n=U(e);if(0>t||!(n.flags&2097155))throw new z(28);return nt(n,n.node,t),0}catch(e){if(q===void 0||e.name!==`ErrnoError`)throw e;return-e.Pa}},G:function(e,t){try{if(t===0)return-28;var n=F(`/`)+1;return t<n?-68:(I(`/`,b,e,t),n)}catch(e){if(q===void 0||e.name!==`ErrnoError`)throw e;return-e.Pa}},K:function(e,t){try{return e=P(e),ut(t,$e(e,!0))}catch(e){if(q===void 0||e.name!==`ErrnoError`)throw e;return-e.Pa}},C:function(e,t,n){try{return t=P(t),t=lt(e,t),W(t,n),0}catch(e){if(q===void 0||e.name!==`ErrnoError`)throw e;return-e.Pa}},J:function(e,t,n,r){try{t=P(t);var i=r&256;return t=lt(e,t,r&4096),ut(n,i?$e(t,!0):$e(t))}catch(e){if(q===void 0||e.name!==`ErrnoError`)throw e;return-e.Pa}},x:function(e,t,n,r){dt=r;try{t=P(t),t=lt(e,t);var i=r?ft():0;return rt(t,n,i).bb}catch(e){if(q===void 0||e.name!==`ErrnoError`)throw e;return-e.Pa}},v:function(e,t,n,r){try{if(t=P(t),t=lt(e,t),0>=r)return-28;var i=B(t).node;if(!i)throw new z(44);if(!i.La.eb)throw new z(28);var a=i.La.eb(i),o=Math.min(r,F(a)),s=y[n+o];return I(a,b,n,r+1),y[n+o]=s,o}catch(e){if(q===void 0||e.name!==`ErrnoError`)throw e;return-e.Pa}},u:function(e){try{return e=P(e),Qe(e),0}catch(e){if(q===void 0||e.name!==`ErrnoError`)throw e;return-e.Pa}},f:function(e,t){try{return e=P(e),ut(t,$e(e))}catch(e){if(q===void 0||e.name!==`ErrnoError`)throw e;return-e.Pa}},r:function(e,t,n){try{if(t=P(t),t=lt(e,t),n){if(n===512)Qe(t);else return-28}else G(t);return 0}catch(e){if(q===void 0||e.name!==`ErrnoError`)throw e;return-e.Pa}},q:function(e,t,n){try{t=P(t),t=lt(e,t,!0);var r=Date.now(),i,a;if(n){var o=C[n>>2]+4294967296*S[n+4>>2],s=S[n+8>>2];i=s==1073741823?r:s==1073741822?null:1e3*o+s/1e6,n+=16,o=C[n>>2]+4294967296*S[n+4>>2],s=S[n+8>>2],a=s==1073741823?r:s==1073741822?null:1e3*o+s/1e6}else a=i=r;if((a??i)!==null){e=i;var c=B(t,{hb:!0}).node;Ve(c.La.Xa)(c,{$a:e,Ua:a})}return 0}catch(e){if(q===void 0||e.name!==`ErrnoError`)throw e;return-e.Pa}},m:()=>te(``),l:()=>{se=!1,J=0},A:function(e,t){e=-9007199254740992>e||9007199254740992<e?NaN:Number(e),e=new Date(1e3*e),S[t>>2]=e.getSeconds(),S[t+4>>2]=e.getMinutes(),S[t+8>>2]=e.getHours(),S[t+12>>2]=e.getDate(),S[t+16>>2]=e.getMonth(),S[t+20>>2]=e.getFullYear()-1900,S[t+24>>2]=e.getDay();var n=e.getFullYear();S[t+28>>2]=(n%4!=0||n%100==0&&n%400!=0?Y:pt)[e.getMonth()]+e.getDate()-1|0,S[t+36>>2]=-(60*e.getTimezoneOffset()),n=new Date(e.getFullYear(),6,1).getTimezoneOffset();var r=new Date(e.getFullYear(),0,1).getTimezoneOffset();S[t+32>>2]=(n!=r&&e.getTimezoneOffset()==Math.min(r,n))|0},y:function(e,t,n,r,i,a,o){i=-9007199254740992>i||9007199254740992<i?NaN:Number(i);try{var s=U(r);if(t&2&&!(n&2)&&(s.flags&2097155)!=2||(s.flags&2097155)==1)throw new z(2);if(!s.Ma.sb)throw new z(43);if(!e)throw new z(28);var c=s.Ma.sb(s,e,i,t,n),l=c.tc;return S[a>>2]=c.Ub,C[o>>2]=l,0}catch(e){if(q===void 0||e.name!==`ErrnoError`)throw e;return-e.Pa}},z:function(e,t,n,r,i,a){a=-9007199254740992>a||9007199254740992<a?NaN:Number(a);try{var o=U(i);if(n&2){if((o.node.mode&61440)!=32768)throw new z(43);r&2||o.Ma.tb&&o.Ma.tb(o,b.slice(e,e+t),a,t,r)}}catch(e){if(q===void 0||e.name!==`ErrnoError`)throw e;return-e.Pa}},n:(e,t)=>(mt[e]&&(clearTimeout(mt[e].id),delete mt[e]),t&&(mt[e]={id:setTimeout(()=>{delete mt[e],_t(()=>jt(e,performance.now()))},t),Hc:t}),0),B:(e,t,n,r)=>{var i=new Date().getFullYear(),a=new Date(i,0,1).getTimezoneOffset();i=new Date(i,6,1).getTimezoneOffset(),C[e>>2]=60*Math.max(a,i),S[t>>2]=Number(a!=i),t=e=>{var t=Math.abs(e);return`UTC${0<=e?`-`:`+`}${String(Math.floor(t/60)).padStart(2,`0`)}${String(t%60).padStart(2,`0`)}`},e=t(a),t=t(i),i<a?(I(e,b,n,17),I(t,b,r,17)):(I(e,b,r,17),I(t,b,n,17))},d:()=>Date.now(),s:()=>2147483648,c:()=>performance.now(),o:e=>{var t=b.length;if(e>>>=0,2147483648<e)return!1;for(var n=1;4>=n;n*=2){var r=t*(1+.2/n);r=Math.min(r,e+100663296);a:{r=(Math.min(2147483648,65536*Math.ceil(Math.max(e,r)/65536))-Ft.buffer.byteLength+65535)/65536|0;try{Ft.grow(r),E();var i=1;break a}catch{}i=void 0}if(i)return!0}return!1},E:(e,t)=>{var n=0,r=0,i;for(i of yt()){var a=t+n;C[e+r>>2]=a,n+=I(i,b,a,1/0)+1,r+=4}return 0},F:(e,t)=>{var n=yt();C[e>>2]=n.length,e=0;for(var r of n)e+=F(r)+1;return C[t>>2]=e,0},e:function(e){try{return it(U(e)),0}catch(e){if(q===void 0||e.name!==`ErrnoError`)throw e;return e.Pa}},p:function(e,t){try{var n=U(e);return y[t]=n.Va?2:V(n.mode)?3:(n.mode&61440)==40960?7:4,x[t+2>>1]=0,T[t+8>>3]=BigInt(0),T[t+16>>3]=BigInt(0),0}catch(e){if(q===void 0||e.name!==`ErrnoError`)throw e;return e.Pa}},w:function(e,t,n,r){try{a:{var i=U(e);e=t;for(var a,o=t=0;o<n;o++){var s=C[e>>2],c=C[e+4>>2];e+=8;var l=ot(i,y,s,c,a);if(0>l){var u=-1;break a}if(t+=l,l<c)break;a!==void 0&&(a+=l)}u=t}return C[r>>2]=u,0}catch(e){if(q===void 0||e.name!==`ErrnoError`)throw e;return e.Pa}},D:function(e,t,n,r){t=-9007199254740992>t||9007199254740992<t?NaN:Number(t);try{if(isNaN(t))return 61;var i=U(e);return at(i,t,n),T[r>>3]=BigInt(i.position),i.Eb&&t===0&&n===0&&(i.Eb=null),0}catch(e){if(q===void 0||e.name!==`ErrnoError`)throw e;return e.Pa}},I:function(e){try{var t=U(e);return t.Ma?.lb?.(t)}catch(e){if(q===void 0||e.name!==`ErrnoError`)throw e;return e.Pa}},t:function(e,t,n,r){try{a:{var i=U(e);e=t;for(var a,o=t=0;o<n;o++){var s=C[e>>2],c=C[e+4>>2];e+=8;var l=st(i,y,s,c,a);if(0>l){var u=-1;break a}if(t+=l,l<c)break;a!==void 0&&(a+=l)}u=t}return C[r>>2]=u,0}catch(e){if(q===void 0||e.name!==`ErrnoError`)throw e;return e.Pa}},k:gt};function Lt(){function e(){if(o.calledRun=!0,!_){if(!o.noFSInit&&!Ae){var e,t;Ae=!0,e??=o.stdin,t??=o.stdout,n??=o.stderr,e?K(`stdin`,e):Ze(`/dev/tty`,`/dev/stdin`),t?K(`stdout`,null,t):Ze(`/dev/tty`,`/dev/stdout`),n?K(`stderr`,null,n):Ze(`/dev/tty1`,`/dev/stderr`),rt(`/dev/stdin`,0),rt(`/dev/stdout`,1),rt(`/dev/stderr`,1)}if(Rt.N(),je=!1,o.onRuntimeInitialized?.(),o.postRun)for(typeof o.postRun==`function`&&(o.postRun=[o.postRun]);o.postRun.length;){var n=o.postRun.shift();ie.push(n)}A(ie)}}if(0<j)M=Lt;else{if(o.preRun)for(typeof o.preRun==`function`&&(o.preRun=[o.preRun]);o.preRun.length;)oe();A(ae),0<j?M=Lt:o.setStatus?(o.setStatus(`Running...`),setTimeout(()=>{setTimeout(()=>o.setStatus(``),1),e()},1)):e()}}var Rt;return(async function(){function e(e){return e=Rt=e.exports,o._sqlite3_free=e.P,o._sqlite3_value_text=e.Q,o._sqlite3_prepare_v2=e.R,o._sqlite3_step=e.S,o._sqlite3_reset=e.T,o._sqlite3_exec=e.U,o._sqlite3_finalize=e.V,o._sqlite3_column_name=e.W,o._sqlite3_column_text=e.X,o._sqlite3_column_type=e.Y,o._sqlite3_errmsg=e.Z,o._sqlite3_clear_bindings=e._,o._sqlite3_value_blob=e.$,o._sqlite3_value_bytes=e.aa,o._sqlite3_value_double=e.ba,o._sqlite3_value_int=e.ca,o._sqlite3_value_type=e.da,o._sqlite3_result_blob=e.ea,o._sqlite3_result_double=e.fa,o._sqlite3_result_error=e.ga,o._sqlite3_result_int=e.ha,o._sqlite3_result_int64=e.ia,o._sqlite3_result_null=e.ja,o._sqlite3_result_text=e.ka,o._sqlite3_aggregate_context=e.la,o._sqlite3_column_count=e.ma,o._sqlite3_data_count=e.na,o._sqlite3_column_blob=e.oa,o._sqlite3_column_bytes=e.pa,o._sqlite3_column_double=e.qa,o._sqlite3_bind_blob=e.ra,o._sqlite3_bind_double=e.sa,o._sqlite3_bind_int=e.ta,o._sqlite3_bind_text=e.ua,o._sqlite3_bind_parameter_index=e.va,o._sqlite3_sql=e.wa,o._sqlite3_normalized_sql=e.xa,o._sqlite3_changes=e.ya,o._sqlite3_close_v2=e.za,o._sqlite3_create_function_v2=e.Aa,o._sqlite3_update_hook=e.Ba,o._sqlite3_open=e.Ca,Ot=o._malloc=e.Da,kt=o._free=e.Ea,o._RegisterExtensionFunctions=e.Fa,At=e.Ga,jt=e.Ha,Mt=e.Ia,Nt=e.Ja,Pt=e.Ka,Ft=e.M,Q=e.O,E(),j--,o.monitorRunDependencies?.(j),j==0&&M&&(e=M,M=null,e()),Rt}j++,o.monitorRunDependencies?.(j);var t={a:It};return o.instantiateWasm?new Promise(n=>{o.instantiateWasm(t,(t,r)=>{n(e(t,r))})}):(ne??=o.locateFile?o.locateFile(`sql-wasm-browser.wasm`,d):d+`sql-wasm-browser.wasm`,e((await re(t)).instance))})(),Lt(),i}),n)};typeof e==`object`&&typeof t==`object`?(t.exports=r,t.exports.default=r):typeof define==`function`&&define.amd?define([],function(){return r}):typeof e==`object`&&(e.Module=r)}))(),1),it=null,at=new Map;async function ot(e){let t=new URL(`sqljs/sql-wasm.wasm`,document.baseURI),n=await fetch(t);if(!n.ok)throw Error(`demo: no sqlite runtime at ${t} (${n.status})`);it=await(0,rt.default)({wasmBinary:await n.arrayBuffer()});for(let[t,n]of Object.entries(e)){let e=await fetch(new URL(n,document.baseURI),{cache:`no-cache`});if(!e.ok){console.warn(`demo: no database at ${n} (${e.status})`);continue}at.set(t,new it.Database(new Uint8Array(await e.arrayBuffer()))),b(t,``,Date.now())}}var st=class{db;sql;constructor(e,t){this.db=e,this.sql=t}bind(e){if(e.length===1&&e[0]!==null&&typeof e[0]==`object`){let t=e[0];return Object.fromEntries(Object.entries(t).map(([e,t])=>[`@${e}`,t]))}return e.map(e=>typeof e==`bigint`?e.toString():e)}all(...e){let t=this.db.prepare(this.sql);try{t.bind(this.bind(e));let n=[];for(;t.step();)n.push(t.getAsObject());return n}finally{t.free()}}get(...e){return this.all(...e)[0]}run(...e){return this.db.run(this.sql,this.bind(e)),{changes:this.db.getRowsModified(),lastInsertRowid:0}}raw(){return this}pluck(){return this}},ct=class{name;db;constructor(e,t){let n=at.get(e);if(!n){if(it&&!t?.readonly&&!t?.fileMustExist)n=new it.Database,at.set(e,n),b(e,``,Date.now());else throw Object.assign(Error(`demo: database not loaded: ${e}`),{code:`SQLITE_CANTOPEN`})}this.name=e,this.db=n}prepare(e){return new st(this.db,e)}exec(e){this.db.run(e)}pragma(){return[]}transaction(e){return e}close(){}};function K(...e){let t=[];for(let n of e){n.startsWith(`/`)&&(t.length=0);for(let e of n.split(/[\\/]+/))e!==``&&e!==`.`&&(e===`..`?t.pop():t.push(e))}return`/${t.join(`/`)}`}function q(e){let t=K(e).split(`/`);return t.pop(),t.join(`/`)||`/`}function lt(e,t){let n=K(e).split(`/`).pop()??``;return t&&n.endsWith(t)?n.slice(0,-t.length):n}function ut(e,t){let n=K(e).split(`/`).filter(Boolean),r=K(t).split(`/`).filter(Boolean),i=0;for(;i<n.length&&i<r.length&&n[i]===r[i];)i++;return[...Array(n.length-i).fill(`..`),...r.slice(i)].join(`/`)}function dt(e){return`/app/server/paths.ts`}var ft=q(dt(import.meta.url)),J=K(ft,`..`),pt=e=>{let t={}[e]?.trim();return t?K(t):void 0},Y=pt(`CHESS_VAULT_DIR`)??K(J,`vault`),mt=K(Y,`studies`),ht=K(Y,`notes`),gt=K(Y,`games`),_t=K(Y,`sources`),vt=K(Y,`config.json`);K(Y,`sessions.json`);var yt=pt(`CHESS_VAULT_DATA`)??K(J,`data`),bt=K(yt,`puzzles.sqlite`),X=K(yt,`openings.json`),xt=K(yt,`mygames.sqlite`);K(yt,`explorer-cache`),pt(`CHESS_VAULT_UPDATES`)??K(J,`updates`),(()=>{for(let e of[K(J,`package.json`),K(ft,`package.json`)])try{let t=JSON.parse(w(e,`utf-8`));if(t.version)return t.version}catch{}return`unknown`})();var St=/^[A-Za-z0-9][A-Za-z0-9_.-]*$/;function Ct(t=_t,n={}){let i=new G;return i.get(`/sources`,e=>{let n=[];try{n=v(t).filter(e=>e.endsWith(`.pgn`)).map(e=>({name:e,bytes:T(K(t,e)).size}))}catch{}return e.json({sources:n})}),i.post(`/sources`,async n=>{let i=n.req.query(`name`)??``;if(!St.test(i)||!i.toLowerCase().endsWith(`.pgn`))return n.json({error:`name must be a plain .pgn filename`},400);let a=K(t,i);if(K(a,`..`)!==K(t))return n.json({error:`invalid name`},400);if(E(a))return n.json({error:`a file with that name is already here`},409);if(!n.req.raw.body)return n.json({error:`empty upload`},400);let o=2*1024**3,s=Number(n.req.header(`content-length`));if(Number.isFinite(s)&&s>o)return n.json({error:`source file too large (2 GB cap)`},413);x(t,{recursive:!0});let c=`${a}.part`;try{let{createWriteStream:t}=await r(async()=>{let{createWriteStream:e}=await import(`./fs-BSZ7ItCU.js`);return{createWriteStream:e}},__vite__mapDeps([0,1]),import.meta.url),{Readable:i}=await r(async()=>{let{Readable:t}=await import(`./__vite-browser-external-Cl-YgGEM.js`).then(t=>e(t.default,1));return{Readable:t}},__vite__mapDeps([2,3,4]),import.meta.url),{pipeline:s}=await r(async()=>{let{pipeline:t}=await import(`./__vite-browser-external-Cl-YgGEM.js`).then(t=>e(t.default,1));return{pipeline:t}},__vite__mapDeps([2,3,4]),import.meta.url),l=0;await s(i.fromWeb(n.req.raw.body),async function*(e){for await(let t of e){if(l+=t.byteLength,l>o)throw Error(`source file too large`);yield t}},t(c)),S(c,a)}catch(e){return D(c,{force:!0}),e.message===`source file too large`?n.json({error:`source file too large (2 GB cap)`},413):n.json({error:`upload failed: ${e.message}`},500)}return n.json({name:i,bytes:T(a).size})}),i.delete(`/sources/:name`,e=>{let r=e.req.param(`name`);if(!St.test(r)||!r.toLowerCase().endsWith(`.pgn`))return e.json({error:`invalid name`},400);let i=K(t,r);if(K(i,`..`)!==K(t))return e.json({error:`invalid name`},400);if(!E(i))return e.json({error:`no such file`},404);if(n.busy?.())return e.json({error:`a build is reading the collections right now`},409);try{D(i)}catch(t){return e.json({error:`could not delete it: ${t.message}`},500)}return e.json({deleted:r})}),i}function Z(e,t,n){let r=`${e}.tmp`;n===void 0?C(r,t):C(r,t,n),wt(r,e)}function wt(e,t){for(let n=0;;n+=1)try{S(e,t);return}catch(e){let t=e.code;if(t!==`EPERM`&&t!==`EACCES`&&t!==`EBUSY`||n>=4)throw e;Atomics.wait(new Int32Array(new SharedArrayBuffer(4)),0,0,5*(n+1))}}function Tt(e){return/^(chesscom|lichess)\//.test(e)?e.split(`/`)[1]?.toLowerCase()??null:null}function Et(e,t,n,r){return n===`white`||n===`black`?n:r?e.toLowerCase()===r?`white`:t.toLowerCase()===r?`black`:null:null}function Dt(e){if(!e||e===`-`)return null;if(e.includes(`/`))return`correspondence`;let[t,n]=e.split(`+`),r=Number(t);if(!Number.isFinite(r))return null;let i=r+40*(Number(n)||0);return i>=86400?`correspondence`:i<180?`bullet`:i<480?`blitz`:i<1500?`rapid`:`classical`}function Ot(e){if(!e)return null;let t=/^(\d{4})[.\-/](\d{2})[.\-/](\d{2})$/.exec(e.trim());return t?`${t[1]}-${t[2]}-${t[3]}`:null}var kt={"1-0":1,"1/2-1/2":0,"0-1":-1};function At(e,t){let n=t=>e.headers.get(t),r=(n(`Variant`)??`standard`).toLowerCase();if(![`standard`,`chess`,`classical`,`normal`].includes(r)||e.headers.has(`FEN`))return null;let i=kt[n(`Result`)??``];if(i===void 0)return null;let a=n(`White`)??`?`,s=n(`Black`)??`?`,u=n(`TimeControl`)??null,d=[],f=c.default(),p=0;for(let t of e.moves.mainline()){if(p>=60)break;let e=l(f,t.san);if(!e)break;d.push({hash:A(f.toSetup()),uci:o(e),ply:p}),f.play(e),p+=1}return d.length===0?null:{file:t.file,idx:t.idx,white:a,black:s,whiteElo:Number(n(`WhiteElo`))||0,blackElo:Number(n(`BlackElo`))||0,score:i,date:Ot(n(`UTCDate`)??n(`Date`)),timeControl:u,speed:Dt(u),eco:n(`ECO`)??null,userSide:Et(a,s,n(`VaultSide`),t.user),site:n(`Link`)??(n(`Site`)?.startsWith(`http`)?n(`Site`):null),plies:d}}var jt=K(J,`scripts`,`vendor`,`chess-openings`);function*Mt(){for(let e of[`a`,`b`,`c`,`d`,`e`])for(let t of w(K(jt,`${e}.tsv`),`utf-8`).split(`
`)){let[e,n,r]=t.split(`	`);!e||!n||!r||e===`eco`||(yield[e,n,r])}}function Nt(){let e={},t=new Set,n=0,r=0;for(let[i,a,o]of Mt()){let s=c.default(),u=``;for(let e of o.split(/\s+/)){if(!e||/^\d+\.+$/.test(e))continue;let n=l(s,e);if(!n)throw Error(`bad SAN "${e}" in ${i} ${a}`);s.play(n),u=A(s.toSetup()).toString(16),t.add(u)}e[u]?r+=1:e[u]=[i,a],n+=1}return{file:{schemaVersion:1,count:Object.keys(e).length,byKey:e,memberKeys:[...t]},lines:n,collisions:r}}function Pt(){let{file:e,lines:t,collisions:n}=Nt();return x(q(X),{recursive:!0}),C(X,JSON.stringify(e)),{path:X,count:e.count,lines:t,collisions:n}}var Ft=null,Q=!1;function It(){let e;try{e=T(X).mtimeMs}catch{if(Q)return null;try{let{count:t}=Pt();console.log(`openings: compiled ${t} positions -> ${X}`),e=T(X).mtimeMs}catch(e){return Q=!0,console.warn(`openings: no index and none could be built (${e.message})`),null}}if(!Ft||Ft.mtimeMs!==e){let t=JSON.parse(w(X,`utf-8`));if(!t.memberKeys&&!Q)try{Pt(),console.log(`openings: recompiled ${X} with the membership set`),e=T(X).mtimeMs,t=JSON.parse(w(X,`utf-8`))}catch(e){Q=!0,console.warn(`openings: stale index kept, none could be rebuilt (${e.message})`)}Ft={mtimeMs:e,byKey:t.byKey,members:new Set(t.memberKeys??Object.keys(t.byKey))}}return Ft}function Lt(){return It()?.byKey??null}function Rt(e){return It()?.members.has(e)??!1}function zt(e){let t=Lt()?.[e];return t?{eco:t[0],name:t[1]}:null}var Bt=null;function Vt(){if(Bt)return Bt;let e=new Map;for(let[t,n,r]of Mt()){let i=r.split(/\s+/).filter(e=>e&&!/^\d+\.+$/.test(e)),a=`${t}\t${n}`,o=e.get(a);(!o||i.length<o.sans.length)&&e.set(a,{eco:t,name:n,sans:i})}return Bt=[...e.values()],Bt}function Ht(){let e=new G;return e.get(`/openings`,e=>{try{let t=Vt();return e.header(`cache-control`,`private, max-age=86400`),e.json({openings:t})}catch{return e.json({error:`the opening catalogue is missing from this install`},503)}}),e.get(`/opening`,e=>{let t=e.req.query(`fen`);if(!t)return e.json({error:`missing ?fen=`},400);try{let n=c.fromSetup(u(t).unwrap()).unwrap(),r=A(n.toSetup()).toString(16);return e.json({opening:zt(r),book:Rt(r)})}catch{return e.json({error:`invalid FEN`},400)}}),e.post(`/opening/batch`,async e=>{let t=await e.req.json().catch(()=>null),n=Array.isArray(t?.fens)?t.fens.filter(e=>typeof e==`string`):null;if(!n)return e.json({error:`expected fens`},400);if(n.length>1024)return e.json({error:`too many positions`},400);let r=n.map(e=>{try{let t=c.fromSetup(u(e).unwrap()).unwrap(),n=A(t.toSetup()).toString(16);return{fen:e,opening:zt(n),book:Rt(n)}}catch{return{fen:e,opening:null,book:!1}}});return e.json({positions:r})}),e}var Ut=/^[A-Za-z0-9][A-Za-z0-9_.-]{0,59}$/,Wt=/^\d{4}-\d{2}$/,Gt={"User-Agent":`chess-vault (personal offline study app)`},Kt=class extends Error{status;constructor(e,t){super(`${t} replied ${e}`),this.status=e}};async function qt(e){let t=await fetch(e,{headers:Gt,signal:AbortSignal.timeout(2e4)});if(!t.ok)throw new Kt(t.status,new URL(e).host);return await t.json()}function Jt(e){let t=!1;for(let n of e.moves.mainlineNodes())if(n.children.length>1&&(t=!0),n.data.nags?.length&&(t=!0),n.data.comments?.some(e=>m(p(e).text).length>0)&&(t=!0),t)break;let n=(e.headers.get(`Variant`)??`standard`).toLowerCase();if(![`standard`,`chess`,`classical`,`normal`].includes(n)||e.headers.has(`FEN`))return{opening:null,finalFen:null,annotated:t};let r=c.default(),i=null,a=0,o=Lt();for(let t of e.moves.mainline()){let e=l(r,t.san);if(!e)break;if(r.play(e),a+=1,a<=40&&o){let e=o[A(r.toSetup()).toString(16)];e&&(i={eco:e[0],name:e[1]})}}return{opening:i,finalFen:s(r.toSetup()),annotated:t}}var Yt=new Map;function Xt(e,t){let n=T(t),r=ut(e,t).split(`/`).join(`/`),i=Yt.get(r);if(i&&i.mtimeMs===n.mtimeMs)return i.games;let a=Tt(r),o=[];return new g((e,t)=>{if(t)return;let n=t=>e.headers.get(t),i=n(`White`)??`?`,s=n(`Black`)??`?`,c=Et(i,s,n(`VaultSide`),a);o.push({file:r,index:o.length,white:i,black:s,whiteElo:Number(n(`WhiteElo`))||0,blackElo:Number(n(`BlackElo`))||0,result:n(`Result`)??`*`,date:n(`UTCDate`)??n(`Date`)??`????.??.??`,timeControl:n(`TimeControl`)??null,eco:n(`ECO`)??null,link:n(`Link`)??(n(`Site`)?.startsWith(`http`)?n(`Site`):null),userSide:c,...Jt(e)})}).parse(w(t,`utf-8`)),Yt.set(r,{mtimeMs:n.mtimeMs,games:o}),o}var Zt=new Map;function Qt(e){let t=T(e).mtimeMs,n=Zt.get(e);if(n&&n.mtimeMs===t)return n.games;let r=[];return new g((e,t)=>{t||r.push(e)}).parse(w(e,`utf-8`)),Zt.set(e,{mtimeMs:t,games:r}),r}function $t(e,t){let n=K(e,t);return n.startsWith(e+`/`)&&n.endsWith(`.pgn`)?n:null}function en(e,t,n){return K(e,`chesscom`,t.toLowerCase(),`${n}.pgn`)}function tn(e,t,n){return K(e,t,n.toLowerCase(),`.cache.json`)}function nn(e,t,n){try{return{months:JSON.parse(w(tn(e,t,n),`utf-8`)).months??{}}}catch{return{months:{}}}}function rn(e,t,n,r){x(K(e,t,n.toLowerCase()),{recursive:!0}),Z(tn(e,t,n),`${JSON.stringify(r,null,2)}\n`)}async function an(e,t,n){let[r,i]=n.split(`-`),a=en(e,t,n),o=nn(e,`chesscom`,t),s=E(a)?o.months[n]?.lastModified:void 0,c=await fetch(`https://api.chess.com/pub/player/${encodeURIComponent(t.toLowerCase())}/games/${r}/${i}`,{headers:{...Gt,...s?{"If-Modified-Since":s}:{}},signal:AbortSignal.timeout(2e4)});if(c.status===304){o.months[n]={...o.months[n],fetchedAt:Date.now()},rn(e,`chesscom`,t,o);return}if(!c.ok)throw Error(`chess.com replied ${c.status}`);let l=(await c.json()).games.map(e=>e.pgn).filter(e=>!!e);x(K(e,`chesscom`,t.toLowerCase()),{recursive:!0}),Z(a,l.length>0?`${l.join(`

`)}\n`:``),o.months[n]={lastModified:c.headers.get(`last-modified`)??void 0,fetchedAt:Date.now()},rn(e,`chesscom`,t,o)}function on(e){return K(e,`bookmarks.json`)}function sn(e){try{let t=JSON.parse(w(on(e),`utf-8`));return new Set(t.keys??[])}catch{return new Set}}function cn(e,t){Z(on(e),`${JSON.stringify({keys:[...t].sort()},null,2)}\n`)}function ln(e=gt,t=vt){let n=K(e,`collection`);x(n,{recursive:!0});let r=new G,i=e=>{try{return JSON.parse(w(t,`utf-8`)).profile?.[e]?.trim().toLowerCase()||null}catch{return null}},a=-2,o=()=>{let e=-1;try{e=T(t).mtimeMs}catch{}if(e===a)return;a=e;let r=[`chesscom`,`lichess`].map(i).filter(e=>e!==null);if(r.length!==0)for(let e of v(n)){if(!e.endsWith(`.pgn`))continue;let t=K(n,e);try{let e=!1,n=Qt(t).map(t=>{let n=new Map(t.headers),i=(n.get(`White`)??``).toLowerCase(),a=(n.get(`Black`)??``).toLowerCase(),o=r.includes(i)?`white`:r.includes(a)?`black`:null,s=n.get(`VaultSide`),c=n.get(`Site`)??``,l=c===`Chess.com`||c.startsWith(`https://lichess.org`)||n.has(`Link`);if(o!==null&&s!==o)n.set(`VaultSide`,o);else if(o===null&&s&&l)n.delete(`VaultSide`);else return t;return e=!0,{...t,headers:n}});e&&Z(t,n.map(e=>f(e)).join(`
`))}catch{}}};o(),r.get(`/games`,t=>{o();let r=v(n).filter(e=>e.endsWith(`.pgn`)).flatMap(t=>Xt(e,K(n,t))).sort((e,t)=>t.date.localeCompare(e.date)||e.file.localeCompare(t.file));return t.json({total:r.length,games:r})});let s=async(e,t,n)=>{if(!n)return null;try{let i=await r.request(`/games/${e}/month?user=${encodeURIComponent(t)}&month=${n}`);if(!i.ok)return null;let a=await i.json();return Array.isArray(a.games)?{month:n,games:a.games}:null}catch{return null}};r.get(`/games/archive/months`,async t=>{let n=t.req.query(`user`)?.trim();if(!n||!Ut.test(n))return t.json({error:`invalid username`},400);let r=new Map,i=K(e,`chesscom`,n.toLowerCase());if(E(i))for(let t of v(i).filter(e=>e.endsWith(`.pgn`))){let n=t.slice(0,-4);r.set(n,Xt(e,K(i,t)).length)}let a=[],o=!1,c=!1;try{a=(await qt(`https://api.chess.com/pub/player/${encodeURIComponent(n.toLowerCase())}/games/archives`)).archives.map(e=>e.split(`/`).slice(-2).join(`-`))}catch(e){e instanceof Kt&&e.status===404?c=!0:o=!0}if(c&&r.size===0)return t.json({error:`chess.com has no player called "${n}"`},404);let l=null;if(!o)try{let e=await qt(`https://api.chess.com/pub/player/${encodeURIComponent(n.toLowerCase())}/stats`);l=Object.values(e).reduce((e,t)=>{let n=t?.record;return n?e+(n.win??0)+(n.loss??0)+(n.draw??0):e},0)}catch{}let u=[...new Set([...a,...r.keys()])].sort().reverse();return t.json({offline:o,total:l,newest:await s(`archive`,n,u[0]),months:u.map(e=>({month:e,cached:r.has(e),games:r.get(e)??null}))})}),r.get(`/games/archive/month`,async t=>{let n=t.req.query(`user`)?.trim(),r=t.req.query(`month`)?.trim();if(!n||!Ut.test(n))return t.json({error:`invalid username`},400);if(!r||!Wt.test(r))return t.json({error:`invalid month`},400);let i=en(e,n,r),a=new Date,o=`${a.getUTCFullYear()}-${String(a.getUTCMonth()+1).padStart(2,`0`)}`;if(!E(i)||r===o)try{await an(e,n,r)}catch(e){if(!E(i))return t.json({error:`could not fetch that month (${e.message})`},502)}return t.json({month:r,games:Xt(e,i).slice().reverse()})}),r.post(`/games/collect`,async t=>{let n=await t.req.json().catch(()=>null);if(!n?.file)return t.json({error:`need file`},400);let r=$t(e,n.file);if(!r||!E(r))return t.json({error:`no such file`},404);let a=Qt(r),o;if(n.all)o=a.map((e,t)=>t);else if(Array.isArray(n.indexes))o=n.indexes;else if(Number.isInteger(n.index))o=[n.index];else return t.json({error:`need index, indexes or all`},400);if(!o.length)return t.json({error:`no games chosen`},400);if(o.some(e=>!Number.isInteger(e)||e<0||e>=a.length))return t.json({error:`index out of range`},400);let s=Tt(n.file),c=n.file.startsWith(`lichess/`)?`lichess`:`chesscom`,l=s!==null&&s===i(c)?s:null,u=[];for(let e of o){let t=a[e],n={...t,headers:new Map(t.headers)},r=(n.headers.get(`White`)??``).toLowerCase(),i=(n.headers.get(`Black`)??``).toLowerCase();l===r?n.headers.set(`VaultSide`,`white`):l===i&&n.headers.set(`VaultSide`,`black`),u.push(d(n))}return t.json({id:u[0],ids:u,added:u.length})});function u(e){let t=(e.headers.get(`UTCDate`)??e.headers.get(`Date`)??``).replaceAll(`.`,`-`);return re(`${e.headers.get(`White`)??`?`} vs ${e.headers.get(`Black`)??`?`} ${t}`,`Game`)}function d(e){let t=u(e),r=t;for(let e=2;E(K(n,`${r}.pgn`));e+=1)r=`${t} (${e})`;return C(K(n,`${r}.pgn`),f(e)),r}return r.post(`/games/collect-pgn`,async e=>{let t=await e.req.json().catch(()=>null);if(!t?.pgn)return e.json({error:`need pgn`},400);let r=[];new g((e,t)=>{!t&&r.length===0&&r.push(e)}).parse(t.pgn);let i=r[0];if(!i)return e.json({error:`that PGN could not be read`},400);let a=i.headers.get(`Result`);if(!a||a===`*`){let e=c.default(),t=!0;for(let n of i.moves.mainline()){let r=l(e,n.san);if(!r){t=!1;break}e.play(r)}t&&(e.isCheckmate()?i.headers.set(`Result`,e.turn===`white`?`0-1`:`1-0`):(e.isStalemate()||e.isInsufficientMaterial())&&i.headers.set(`Result`,`1/2-1/2`))}return E(K(n,`${u(i)}.pgn`))?e.json({error:`already in the collection`},409):e.json({id:d(i)})}),r.get(`/games/lichess/months`,async t=>{let n=t.req.query(`user`)?.trim().toLowerCase();if(!n||!Ut.test(n))return t.json({error:`invalid username`},400);let r=K(e,`lichess`,n),i=new Map;if(E(r))for(let t of v(r))t.endsWith(`.pgn`)&&i.set(t.slice(0,-4),Xt(e,K(r,t)).length);try{let e=await qt(`https://lichess.org/api/user/${encodeURIComponent(n)}`),r=new Date(e.createdAt),a=[],o=new Date,c=o.getUTCFullYear(),l=o.getUTCMonth();for(;a.length<240;){let e=`${c}-${String(l+1).padStart(2,`0`)}`;if(a.push({month:e,cached:i.has(e),games:i.get(e)??null}),c===r.getUTCFullYear()&&l===r.getUTCMonth())break;--l,l<0&&(l=11,--c)}return t.json({offline:!1,total:e.count?.all??null,newest:await s(`lichess`,n,a[0]?.month),months:a})}catch(e){if(e instanceof Kt&&e.status===404&&i.size===0)return t.json({error:`lichess has no player called "${n}"`},404);if(i.size===0)return t.json({error:`lichess unreachable and nothing cached yet`},502);let r=[...i.entries()].sort((e,t)=>t[0].localeCompare(e[0])).map(([e,t])=>({month:e,cached:!0,games:t}));return t.json({offline:!0,total:null,newest:await s(`lichess`,n,r[0]?.month),months:r})}}),r.get(`/games/lichess/month`,async t=>{let n=t.req.query(`user`)?.trim().toLowerCase(),r=t.req.query(`month`)??``;if(!n||!Ut.test(n))return t.json({error:`invalid username`},400);if(!Wt.test(r))return t.json({error:`invalid month`},400);let i=K(e,`lichess`,n,`${r}.pgn`),a=E(i),o=nn(e,`lichess`,n),[s,c]=r.split(`-`).map(Number),l=Date.UTC(s,c-1,1),u=Date.UTC(c===12?s+1:s,c===12?0:c,1);if(!a||Date.now()<u){let s=a?o.months[r]?.fetchedAt??l:l;try{let c=await fetch(`https://lichess.org/api/games/user/${encodeURIComponent(n)}?since=${s}&until=${u}&max=300&moves=true&tags=true`,{headers:{...Gt,Accept:`application/x-chess-pgn`},signal:AbortSignal.timeout(3e4)});if(c.ok){let t=await c.text();if(x(K(e,`lichess`,n),{recursive:!0}),!a)C(i,t);else if(t.trim()){let e=w(i,`utf-8`),n=t.split(/\n\n(?=\[Event )/).filter(t=>{let n=/\[Site "([^"]+)"\]/.exec(t)?.[1];return t.trim()&&(!n||!e.includes(n))});n.length&&C(i,`${n.join(`

`)}\n\n${e}`)}o.months[r]={fetchedAt:Date.now()},rn(e,`lichess`,n,o)}else if(!a)return t.json({error:`lichess replied ${c.status}`},502)}catch{if(!a)return t.json({error:`lichess unreachable`},502)}}return t.json({games:Xt(e,i)})}),r.get(`/games/cache`,t=>{let n=[];for(let t of[`chesscom`,`lichess`]){let r=K(e,t);if(E(r))for(let e of v(r)){let i=K(r,e);if(!T(i).isDirectory())continue;let a=v(i).filter(e=>e.endsWith(`.pgn`));a.length&&n.push({provider:t,user:e,months:a.length,bytes:a.reduce((e,t)=>e+T(K(i,t)).size,0)})}}return n.sort((e,t)=>t.bytes-e.bytes||e.user.localeCompare(t.user)),t.json({bytes:n.reduce((e,t)=>e+t.bytes,0),users:n})}),r.delete(`/games/cache`,t=>{let n=0;for(let t of[`chesscom`,`lichess`]){let r=K(e,t);if(E(r))for(let e of v(r)){let t=K(r,e);if(T(t).isDirectory()){for(let e of v(t))e.endsWith(`.pgn`)&&(n+=T(K(t,e)).size);D(t,{recursive:!0,force:!0})}}}return t.json({bytes:n})}),r.get(`/games/bookmarks`,t=>t.json({keys:[...sn(e)]})),r.post(`/games/bookmarks/toggle`,async t=>{let n=await t.req.json().catch(()=>null);if(!n?.file||!Number.isInteger(n.index)||n.index<0)return t.json({error:`need file and index`},400);if(!$t(e,n.file))return t.json({error:`invalid file`},400);let r=`${n.file}#${n.index}`,i=sn(e),a=!i.has(r);return a?i.add(r):i.delete(r),cn(e,i),t.json({key:r,bookmarked:a})}),r.get(`/games/pgn`,t=>{let n=t.req.query(`file`),r=Number(t.req.query(`index`));if(!n||!Number.isInteger(r)||r<0)return t.json({error:`need ?file= and ?index=`},400);let i=$t(e,n);if(!i||!E(i))return t.json({error:`no such file`},404);let a=Qt(i)[r];return a?t.json({pgn:f(a)}):t.json({error:`no such game`},404)}),r}var un=`
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
    shadowed INTEGER NOT NULL DEFAULT 0
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
`;function dn(e){try{return v(e,{recursive:!0}).map(e=>String(e).split(`\\`).join(`/`)).filter(e=>e.endsWith(`.pgn`))}catch{return[]}}var fn=class e{gamesDir;dbPath;db=null;nextId=1;lastScan=0;broken=!1;constructor(e,t){this.gamesDir=e,this.dbPath=t}static SCAN_INTERVAL_MS=2e3;open(){if(this.db)return this.db;if(this.broken)return null;try{x(q(this.dbPath),{recursive:!0})}catch{}try{let e=new ct(this.dbPath);e.pragma(`journal_mode = WAL`),e.exec(un),e.prepare(`PRAGMA table_info(games)`).all().some(e=>e.name===`shadowed`)||(e.exec(`ALTER TABLE games ADD COLUMN shadowed INTEGER NOT NULL DEFAULT 0`),this.stamp(e));let t=e.prepare(`SELECT MAX(id) AS id FROM games`).get();return this.nextId=(t.id??0)+1,this.db=e,e}catch{return this.broken=!0,null}}sync(t=!1){let n=this.open();if(!n)return;let r=Date.now();if(!t&&r-this.lastScan<e.SCAN_INTERVAL_MS)return;this.lastScan=r;let i=new Map(n.prepare(`SELECT path, mtime_ms, bytes FROM files`).all().map(e=>[e.path,e])),a=new Set,o=!1;for(let e of dn(this.gamesDir)){a.add(e);let t;try{t=T(`${this.gamesDir}/${e}`)}catch{continue}let r=i.get(e);r&&r.mtime_ms===t.mtimeMs&&r.bytes===t.size||(this.indexFile(n,e,t.mtimeMs,t.size),o=!0)}for(let e of i.keys())a.has(e)||(this.forget(n,e),o=!0);o&&this.stamp(n)}stamp(e){e.prepare(`
      UPDATE games SET shadowed = CASE WHEN site IS NOT NULL AND EXISTS (
        SELECT 1 FROM games o
        WHERE o.site = games.site
          AND o.id <> games.id
          AND o.user_side IS games.user_side
          AND (o.collection > games.collection
               OR (o.collection = games.collection AND o.id < games.id))
      ) THEN 1 ELSE 0 END
    `).run()}forget(e,t){e.prepare(`DELETE FROM plies WHERE game_id IN (SELECT id FROM games WHERE file = ?)`).run(t),e.prepare(`DELETE FROM games WHERE file = ?`).run(t),e.prepare(`DELETE FROM files WHERE path = ?`).run(t)}indexFile(e,t,n,r){let i;try{i=w(`${this.gamesDir}/${t}`,`utf-8`)}catch{return}let a=Tt(t),o=+!!t.startsWith(`collection/`),s=e.prepare(`
      INSERT INTO games (id, file, idx, white, black, white_elo, black_elo, result, date, speed, eco, user_side, collection, site)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `),c=e.prepare(`INSERT INTO plies (pos, uci, game_id, ply) VALUES (?, ?, ?, ?)`);e.transaction(()=>{this.forget(e,t);let l=0;new g((e,n)=>{let r=l;if(l+=1,n)return;let i=At(e,{file:t,idx:r,user:a});if(!i)return;let u=this.nextId;this.nextId+=1,s.run(u,t,r,i.white,i.black,i.whiteElo,i.blackElo,i.score,i.date,i.speed,i.eco,i.userSide,o,i.site);for(let e of i.plies)c.run(k(e.hash),e.uci,u,e.ply)}).parse(i),e.prepare(`INSERT INTO files (path, mtime_ms, bytes) VALUES (?, ?, ?)`).run(t,n,r)})()}where(e){let t=[`g.shadowed = 0`],n=[];if(e.side&&(t.push(`g.user_side = ?`),n.push(e.side)),e.outcome){if(t.push(`g.user_side IS NOT NULL`),e.outcome===`draw`)t.push(`g.result = 0`);else{let r=e.outcome===`win`;t.push(`((g.user_side = 'white' AND g.result = ?) OR (g.user_side = 'black' AND g.result = ?))`),n.push(r?1:-1,r?-1:1)}}return e.speeds?.length&&(t.push(`g.speed IN (${e.speeds.map(()=>`?`).join(`, `)})`),n.push(...e.speeds)),e.from&&(t.push(`g.date >= ?`),n.push(e.from)),e.to&&(t.push(`g.date <= ?`),n.push(e.to)),e.collectionOnly&&t.push(`g.collection = 1`),{sql:` AND ${t.join(` AND `)}`,binds:n}}movesAt(e,t){let n=this.open();if(!n)return[];let r=k(A(e.toSetup())),{sql:i,binds:o}=this.where(t);return n.prepare(`
        SELECT p.uci AS uci,
               SUM(g.result = 1) AS w,
               SUM(g.result = 0) AS d,
               SUM(g.result = -1) AS b
        FROM plies p JOIN games g ON g.id = p.game_id
        WHERE p.pos = ?${i}
        GROUP BY p.uci
        ORDER BY w + d + b DESC, p.uci
      `).all(r,...o).flatMap(t=>{let n=a(t.uci);return!n||!e.isLegal(n)?[]:[{...t,san:d(e,n),total:t.w+t.d+t.b}]})}lookup(e,t,n=8){let r=this.open();if(!r)return{moves:[],topGames:[],games:0};let i=k(A(e.toSetup())),{sql:a,binds:o}=this.where(t),s=this.movesAt(e,t);return{moves:s,topGames:r.prepare(`
        SELECT p.uci AS uci, g.white, g.black, g.white_elo, g.black_elo,
               g.result, g.date, g.site, g.file, g.idx
        FROM plies p JOIN games g ON g.id = p.game_id
        WHERE p.pos = ?${a}
        ORDER BY g.date DESC, g.id DESC
        LIMIT ?
      `).all(i,...o,n),games:s.reduce((e,t)=>e+t.total,0)}}deviations(e,t,n){let r=this.open();if(!r)return[];let i=r.prepare(`
        SELECT id, file, idx, white, black, result, date, site, collection
        FROM games g
        WHERE g.user_side = ? AND g.shadowed = 0
        ORDER BY g.date DESC, g.id DESC
        LIMIT ?
      `).all(t,n),o=r.prepare(`SELECT CAST(pos AS TEXT) AS pos, uci FROM plies WHERE game_id = ? ORDER BY ply`),s=[];for(let n of i){let r=o.all(n.id).map(e=>({pos:BigInt(e.pos),uci:e.uci}));if(r.length===0||!e.has(r[0].pos))continue;let i=-1;for(let t=0;t<r.length&&e.has(r[t].pos);t+=1)if(t+1>=r.length||!e.has(r[t+1].pos)){i=t;break}if(i<0||i+1>=r.length)continue;let l=c.default(),u=[],f=!0;for(let e=0;e<=i;e+=1){let t=a(r[e].uci);if(!t||!l.isLegal(t)){f=!1;break}u.push(d(l,t)),l.play(t)}f&&s.push({file:n.file,idx:n.idx,white:n.white,black:n.black,result:n.result,date:n.date,site:n.site,collection:n.collection===1,ply:i,sans:u,key:BigInt.asUintN(64,r[i].pos).toString(16),userDeviated:i%2==0==(t===`white`)})}return s}stats(e={}){let t=this.open();if(!t)return{games:0,positions:0,matching:0};let n=t.prepare(`SELECT COUNT(*) AS n FROM games WHERE shadowed = 0`).get().n,r=t.prepare(`SELECT COUNT(DISTINCT pos) AS n FROM plies`).get().n,{sql:i,binds:a}=this.where(e);return{games:n,positions:r,matching:t.prepare(`SELECT COUNT(*) AS n FROM games g WHERE 1 = 1${i}`).get(...a).n}}close(){this.db?.close(),this.db=null}},pn={1:`1-0`,0:`1/2-1/2`,[-1]:`0-1`},mn=[`bullet`,`blitz`,`rapid`,`classical`,`correspondence`],hn=/^\d{4}-\d{2}-\d{2}$/;function gn(e){let t=e(`side`),n=e(`outcome`),r=(e(`speeds`)??``).split(`,`).filter(e=>mn.includes(e)),i=e(`from`),a=e(`to`);return{side:t===`white`||t===`black`?t:void 0,outcome:n===`win`||n===`loss`||n===`draw`?n:void 0,speeds:r.length>0&&r.length<mn.length?r:void 0,from:i&&hn.test(i)?i:void 0,to:a&&hn.test(a)?a:void 0,collectionOnly:e(`collection`)===`1`}}function _n(e=gt,t=xt){let n=new fn(e,t),r=new G;return r.get(`/mygames`,e=>{let t=e.req.query(`fen`);if(!t)return e.json({error:`missing ?fen=`},400);let r;try{r=c.fromSetup(u(t).unwrap()).unwrap()}catch{return e.json({error:`invalid FEN`},400)}n.sync();let i=gn(t=>e.req.query(t)),{moves:a,topGames:o,games:s}=n.lookup(r,i);return e.json({opening:zt(A(r.toSetup()).toString(16)),moves:a,games:s,topGames:o.map(e=>({uci:e.uci,white:e.white,black:e.black,whiteElo:e.white_elo,blackElo:e.black_elo,result:pn[e.result]??`*`,date:e.date,site:e.site,file:e.file,index:e.idx}))})}),r.post(`/mygames/explore-batch`,async e=>{let t=await e.req.json().catch(()=>null),r=Array.isArray(t?.fens)?t.fens.filter(e=>typeof e==`string`):null;if(!r)return e.json({error:`expected fens`},400);if(r.length>256)return e.json({error:`too many positions`},400);n.sync();let i=gn(t=>e.req.query(t)),a=r.map(e=>{let t;try{t=c.fromSetup(u(e).unwrap()).unwrap()}catch{return{fen:e,moves:[]}}return{fen:e,moves:n.movesAt(t,i)}});return e.json({positions:a})}),r.post(`/mygames/deviations`,async e=>{let t=await e.req.json().catch(()=>null),r=t?.side,i=t?.keys;if(r!==`white`&&r!==`black`||!Array.isArray(i)||i.length===0||i.length>5e4||!i.every(e=>typeof e==`string`&&/^[0-9a-f]{1,16}$/.test(e)))return e.json({error:`expected { keys: hex[], side }`},400);let a=Math.min(500,Math.max(1,Number(t?.limit)||200)),o=new Set(i.map(e=>k(BigInt(`0x${e}`))));return n.sync(),e.json({deviations:n.deviations(o,r,a).map(e=>({...e,result:pn[e.result]??`*`}))})}),r.get(`/mygames/status`,e=>(n.sync(),e.json(n.stats(gn(t=>e.req.query(t)))))),r.post(`/mygames/reindex`,e=>(n.sync(!0),e.json(n.stats()))),r}var vn=ie(),yn=5,bn={attempts:0,wins:0,streak:0},xn=e=>({attempts:e.attempts,wins:e.wins,streak:e.streak}),Sn=1500,Cn=e=>Math.min(3e3,Math.max(600,e)),wn=(e,t,n,r)=>{let i=t<30?40:20,a=1/(1+10**((n-e)/400));return Cn(e+i*(+!!r-a))},Tn=new Map,En=256,Dn=new Map,On=(e,t)=>e.prepare(`SELECT 1 FROM sqlite_master WHERE type = 'table' AND name = ?`).get(t)!==void 0;function kn(e,t,n,r,i){let a=Dn.get(i);if(a!==void 0)return a;let o=r?`theme_rating_counts`:`rating_counts`,s=null;if(On(e,o)){let i=r?e.prepare(`SELECT rating, n FROM theme_rating_counts WHERE theme = ? AND rating BETWEEN ? AND ? ORDER BY rating`).all(r,t,n):e.prepare(`SELECT rating, n FROM rating_counts WHERE rating BETWEEN ? AND ? ORDER BY rating`).all(t,n),a=[],o=[],c=0;for(let e of i)c+=e.n,a.push(e.rating),o.push(c);s={ratings:a,cum:o,total:c}}return Dn.set(i,s),s}function An(e,t){let n=0,r=e.length-1;for(;n<r;){let i=n+r>>1;e[i]>t?r=i:n=i+1}return n}function jn(e,t,n,r,i){let a=`${e.name}|${r??``}|${t}|${n}`,o=kn(e,t,n,r,a),s;if(o){if(o.total===0)return null;let t=e.prepare(r?`SELECT id FROM themes WHERE theme = ? AND rating = ? LIMIT 1 OFFSET ?`:`SELECT id FROM puzzles WHERE rating = ? LIMIT 1 OFFSET ?`);s=()=>{let e=Math.floor(Math.random()*o.total),n=An(o.cum,e),i=e-(n>0?o.cum[n-1]:0),a=o.ratings[n];return(r?t.get(r,a,i):t.get(a,i)).id}}else{let i=r?`FROM themes WHERE theme = ? AND rating BETWEEN ? AND ?`:`FROM puzzles WHERE rating BETWEEN ? AND ?`,o=r?[r,t,n]:[t,n],c=Tn.get(a);if(c===void 0&&(c=e.prepare(`SELECT COUNT(*) AS n ${i}`).get(...o).n,Tn.set(a,c)),c===0)return null;let l=e.prepare(`SELECT id ${i} LIMIT 1 OFFSET ?`);s=()=>l.get(...o,Math.floor(Math.random()*c)).id}let c=e.prepare(`SELECT id, fen, moves, rating, popularity, plays, themes, game_url, opening_tags FROM puzzles WHERE id = ?`),l=o?o.total:Tn.get(a)??0;if(l>0&&l<=En){let a=r?`FROM themes WHERE theme = ? AND rating BETWEEN ? AND ?`:`FROM puzzles WHERE rating BETWEEN ? AND ?`,o=r?[r,t,n]:[t,n],s=e.prepare(`SELECT id ${a}`).all(...o).map(e=>e.id),l=s.filter(e=>!i.has(e)),u=l.length>0?l:s;return u.length===0?null:c.get(u[Math.floor(Math.random()*u.length)])}let u=null;for(let e=0;e<12;e++){let e=s();if(!i.has(e))return c.get(e);u=e}return u?c.get(u):null}function Mn(e=bt,t=K(Y,`puzzles`)){let n=K(t,`state.json`),r=K(t,`history.jsonl`),i=()=>{try{let e=JSON.parse(w(n,`utf-8`));return{attempts:e.attempts??0,wins:e.wins??0,streak:e.streak??0,...typeof e.skill==`number`&&{skill:e.skill},...typeof e.skillAttempts==`number`&&{skillAttempts:e.skillAttempts}}}catch{return{...bn}}},a=e=>{x(t,{recursive:!0}),Z(n,`${JSON.stringify(e,null,2)}\n`)},o=()=>{let e;try{e=w(r,`utf-8`)}catch{return[]}return e.trimEnd().split(`
`).flatMap(e=>{try{let t=JSON.parse(e);return typeof t?.id==`string`?[t]:[]}catch{return[]}})},s=()=>new Set(o().map(e=>e.id)),c=e=>{let t=o().filter(e=>e.counted!==!1);if(t.length===0)return null;let n=[...new Set(t.map(e=>e.id))],r=new Map;for(let t=0;t<n.length;t+=500){let i=n.slice(t,t+500),a=e.prepare(`SELECT id, themes FROM puzzles WHERE id IN (${i.map(()=>`?`).join(`,`)})`).all(...i);for(let e of a)r.set(e.id,e.themes.split(` `).filter(Boolean))}let i=new Map,a=0;for(let e of t){e.win&&(a+=1);for(let t of r.get(e.id)??[]){let n=i.get(t)??{attempts:0,wins:0};n.attempts+=1,e.win&&(n.wins+=1),i.set(t,n)}}let s=a/t.length,c=null;for(let[e,t]of i){if(t.attempts<yn)continue;let n=t.wins/t.attempts;n>=s||(!c||n<c.wins/c.attempts)&&(c={theme:e,...t})}return c},l=(e=o())=>{let t=new Map,n=new Set;for(let r of e)t.set(r.id,r.win),r.counted!==!1&&n.add(r.id);return[...t].filter(([e,t])=>!t&&n.has(e)).map(([e])=>e)},u=e=>{if(typeof e.skill==`number`)return{...e,skill:e.skill,skillAttempts:e.skillAttempts??0};let t=Sn,n=0;for(let e of o()){if(e.counted===!1)continue;let r=e.puzzleRating;typeof r==`number`&&(t=wn(t,n,r,e.win),n+=1)}let r={...e,skill:t,skillAttempts:n};return a(r),r},d=null,f=()=>d||(E(e)?(d=new ct(e,{readonly:!0,fileMustExist:!0}),d):null),p=()=>{d?.close(),d=null},m=new G,h=null,g=()=>{let t={startedAt:Date.now(),running:!0,progress:{phase:`downloading`,bytes:0,total:0},error:null};h=t;let n=K(J,`server`,`build-puzzles.mjs`),r=E(n)?[n,`--progress-json`]:[`--import`,`tsx`,`scripts/build-puzzles.ts`,`--progress-json`],i=(0,vn.spawn)(process.execPath,r,{cwd:J,stdio:[`ignore`,`pipe`,`pipe`]}),a=``;i.stdout.on(`data`,e=>{a+=e.toString();let n=a.split(`
`);a=n.pop()??``;for(let e of n)if(e.startsWith(`{`))try{t.progress=JSON.parse(e)}catch{}});let o=``;i.stderr.on(`data`,e=>{let t=e.toString().trim();t&&(o=t.split(`
`).pop()??t)}),i.on(`error`,e=>{t.running=!1,t.error=e.message}),i.on(`close`,n=>{if(t.running=!1,n!==0){t.error=o||`the build stopped unexpectedly (exit ${n})`;return}p();let r=`${e}.building`;if(E(r)){p();try{S(r,e)}catch(e){t.error=`the database was built but could not be swapped in (${e.message})`;return}}_=null})};m.get(`/puzzles/build`,e=>e.json(h?{running:h.running,seconds:(Date.now()-h.startedAt)/1e3,error:h.error,...h.progress}:{running:!1})),m.post(`/puzzles/build`,e=>h?.running?e.json({error:`a build is already running`},409):(g(),e.json({running:!0})));let _=null,v=e=>_||(_=e.prepare(`SELECT 1 FROM sqlite_master WHERE type = 'table' AND name = 'theme_counts'`).get()?e.prepare(`SELECT theme, count FROM theme_counts ORDER BY count DESC`).all():e.prepare(`SELECT theme, COUNT(*) AS count FROM themes GROUP BY theme ORDER BY count DESC`).all(),_);return m.get(`/puzzles/meta`,e=>{let t=f(),n=i();if(!t)return e.json({ready:!1,user:xn(n)});let r=Object.fromEntries(t.prepare(`SELECT key, value FROM meta`).all().map(e=>[e.key,e.value]));return e.json({ready:!0,puzzles:Number(r.puzzles??0),themes:v(t),failed:l().length,weakTheme:c(t),user:xn(n)})}),m.get(`/puzzles/next`,e=>{let t=f();if(!t)return e.json({error:`No puzzle database yet — build it from the Puzzles page.`},503);if(e.req.query(`mode`)===`failed`){let n=o(),r=l(n),i=n.at(-1)?.id??null,a=r.length>1?r.filter(e=>e!==i):r;if(a.length===0)return e.json({error:`No failed puzzles to review — nothing to fix.`},404);let s=a[Math.floor(Math.random()*a.length)],c=t.prepare(`SELECT id, fen, moves, rating, popularity, plays, themes, game_url, opening_tags FROM puzzles WHERE id = ?`).get(s);return c?e.json({puzzle:c}):e.json({error:`unknown puzzle: ${s}`},404)}let n=e.req.query(`theme`)||null;if(e.req.query(`adaptive`)){let{skill:r}=u(i()),a=Math.round(r/50)*50,o=s();for(let r of[[a-100,a+200],[a-300,a+400],[0,9999]]){let i=jn(t,r[0],r[1],n,o);if(i)return e.json({puzzle:i})}return e.json({error:`No puzzle matches that filter.`},404)}let r=jn(t,Number(e.req.query(`min`))||0,Number(e.req.query(`max`))||9999,n,s());return r?e.json({puzzle:r}):e.json({error:`No puzzle matches that filter.`},404)}),m.get(`/puzzles/by-id/:id`,e=>{let t=f();if(!t)return e.json({error:`no puzzle database`},503);let n=t.prepare(`SELECT id, fen, moves, rating, popularity, plays, themes, game_url, opening_tags FROM puzzles WHERE id = ?`).get(e.req.param(`id`));return n?e.json({puzzle:n}):e.json({error:`unknown puzzle: ${e.req.param(`id`)}`},404)}),m.post(`/puzzles/attempt`,async e=>{let n=await e.req.json();if(typeof n.id!=`string`||typeof n.win!=`boolean`)return e.json({error:`expected { id, win }`},400);let o=f(),s=o?o.prepare(`SELECT rating FROM puzzles WHERE id = ?`).get(n.id):void 0;if(!s)return e.json({error:`unknown puzzle: ${n.id}`},404);let c=n.counted!==!1,l=c?u(i()):i(),d=c?{attempts:l.attempts+1,wins:l.wins+ +!!n.win,streak:n.win?l.streak+1:0,skill:wn(l.skill,l.skillAttempts,s.rating,n.win),skillAttempts:l.skillAttempts+1}:l;return c&&a(d),x(t,{recursive:!0}),ne(r,`${JSON.stringify({id:n.id,win:n.win,counted:c,puzzleRating:s.rating,at:new Date().toISOString()})}\n`),e.json({user:xn(d)})}),m.post(`/puzzles/reset`,e=>(D(n,{force:!0}),D(r,{force:!0}),e.json({ok:!0,user:{...bn}}))),m.get(`/puzzles/history`,e=>{let t=Math.min(Number(e.req.query(`limit`)||50),500);return e.json({attempts:o().slice(-t).reverse()})}),Object.assign(m,{closeDb:p})}function Nn(e){if(!e.prepare(`SELECT name FROM sqlite_master WHERE type = 'table' AND name = 'plies'`).get())return{indexed:!1,plies:0};let t=e.prepare(`SELECT value FROM meta WHERE key = 'plies'`).get();return{indexed:!0,plies:Number(t?.value)||e.prepare(`SELECT COUNT(*) AS n FROM plies`).get().n}}var Pn=K(yt,`refgames`);K(yt,`refgames.sqlite`);var Fn=50,In=/^[A-Za-z0-9][A-Za-z0-9_.-]*$/;function Ln(e){return e.prepare(`SELECT 1 FROM sqlite_master WHERE type = 'table' AND name = 'move_counts'`).get()!==void 0}function Rn(e,t=``){let n=[],r=[],i=e=>`%${e}%`,a=e(`result`);(a===`1-0`||a===`0-1`||a===`1/2-1/2`)&&(n.push(`${t}result = ?`),r.push(a));let o=Math.max(0,Number(e(`minElo`))||0);o>0&&(n.push(`${t}white_elo >= ? AND ${t}black_elo >= ?`),r.push(o,o));let s=e(`player`)?.trim(),c=e(`side`);if(s){c===`white`?(n.push(`${t}white LIKE ?`),r.push(i(s))):c===`black`?(n.push(`${t}black LIKE ?`),r.push(i(s))):(n.push(`(${t}white LIKE ? OR ${t}black LIKE ?)`),r.push(i(s),i(s)));let a=e(`outcome`);if(a===`drawn`)n.push(`${t}result = '1/2-1/2'`);else if(a===`won`||a===`lost`){let e=a===`won`?`1-0`:`0-1`,o=a===`won`?`0-1`:`1-0`;c===`white`||c===`black`?(n.push(`${t}result = ?`),r.push(c===`white`?e:o)):(n.push(`((${t}white LIKE ? AND ${t}result = ?) OR (${t}black LIKE ? AND ${t}result = ?))`),r.push(i(s),e,i(s),o))}}let l=e(`opening`)?.trim();l&&(n.push(`(${t}opening LIKE ? OR ${t}eco LIKE ?)`),r.push(i(l),`${l}%`));let u=e(`event`)?.trim();u&&(n.push(`${t}event LIKE ?`),r.push(i(u)));let d=/^\d{4}-\d{2}-\d{2}$/,f=e(`from`),p=e(`to`);return f&&d.test(f)&&(n.push(`REPLACE(${t}date, '.', '-') >= ?`),r.push(f)),p&&d.test(p)&&(n.push(`REPLACE(${t}date, '.', '-') <= ?`),r.push(p)),{clauses:n,binds:r}}var $=null;function zn(){return $?.running===!0}function Bn(e={dir:Pn}){let t=typeof e==`string`?e:null,n=typeof e==`string`?null:e.dir,r=new Map,i=new Map,o=e=>t??K(n,`${e}.sqlite`),s=()=>{if(t)return E(t)?[``]:[];try{return v(n).filter(e=>e.endsWith(`.sqlite`)).map(e=>lt(e,`.sqlite`)).sort()}catch{return[]}},f=e=>{let t=r.get(e);if(t)return t;let n=o(e);if(!E(n))return null;let i=new ct(n,{readonly:!0,fileMustExist:!0});return r.set(e,i),i},p=e=>{for(let[t,n]of r)(e===void 0||t===e)&&(n.close(),r.delete(t),i.delete(t))},m=e=>Object.fromEntries(e.prepare(`SELECT key, value FROM meta`).all().map(e=>[e.key,e.value])),h=(e,t)=>{let n=i.get(e);if(n===void 0){let r=t.prepare(`SELECT value FROM meta WHERE key = 'games'`).get();n=Number(r?.value)||t.prepare(`SELECT COUNT(*) AS n FROM games`).get().n,i.set(e,n)}return n},g=e=>{let n=s();if(n.length===0)return null;let r=t?void 0:e.req.query(`db`),i=r!==void 0&&In.test(r)&&n.includes(r)?r:n[0],a=f(i);return a?{name:i,db:a}:null},_=new G;if(n===Pn){let e=e=>{if(!e.toLowerCase().endsWith(`.pgn`)||e.includes(`/`)||e.includes(`\\`))return null;let t=K(_t),n=K(t,e);return n.startsWith(t+`/`)&&E(n)?n:null},t=(e,t,n,r,i)=>{$=e;let a=K(J,`server`,t),o=E(a)?[a,...r]:[`--import`,`tsx`,n,...r],s=(0,vn.spawn)(process.execPath,o,{cwd:J,stdio:[`ignore`,`pipe`,`pipe`]}),c=t=>{for(let n of t.toString().split(`
`))n.trim()&&e.log.push(n);e.log.length>100&&e.log.splice(0,e.log.length-100)};s.stdout.on(`data`,c),s.stderr.on(`data`,c),s.on(`close`,t=>{e.running=!1,e.exitCode=t,i(t)})},r=(e,n)=>{let r={name:e,startedAt:Date.now(),running:!0,exitCode:null,log:[]};t(r,`build-refgames.mjs`,`scripts/build-refgames.ts`,[...n,`--name`,e],t=>{p(e);let n=`${o(e)}.building`;if(t===0&&E(n))try{S(n,o(e))}catch{r.log.push(`could not swap in the new database — rebuild after a restart`)}})};_.post(`/refgames/build`,async t=>{if($?.running)return t.json({error:`a build is already running`},409);let i=await t.req.json().catch(()=>null),a=i?.sources??(()=>{try{return v(_t).filter(e=>e.toLowerCase().endsWith(`.pgn`))}catch{return[]}})();if(a.length===0)return t.json({error:`no PGN collections to index`},400);let o=[];for(let n of a){let r=e(n);if(!r)return t.json({error:`invalid or missing source: ${n}`},400);o.push(r)}let s=a.length===1?a[0].replace(/\.pgn$/i,``):`refgames`,c=i?.name??(In.test(s)?s:`refgames`);return In.test(c)?(x(n,{recursive:!0}),r(c,o),t.json({started:!0,name:c})):t.json({error:`invalid database name`},400)}),_.post(`/refgames/index-positions`,async e=>{if($?.running)return e.json({error:`a build is already running`},409);let n=(await e.req.json().catch(()=>null))?.db??s()[0];return!n||!In.test(n)||!s().includes(n)?e.json({error:`no such database`},400):(t({name:n,startedAt:Date.now(),running:!0,exitCode:null,log:[]},`index-refgames-positions.mjs`,`scripts/index-refgames-positions.ts`,[n],()=>p(n)),e.json({started:!0,name:n}))}),_.get(`/refgames/build/status`,e=>e.json($?{running:$.running,name:$.name,exitCode:$.exitCode,seconds:(Date.now()-$.startedAt)/1e3,log:$.log.slice(-15)}:{running:!1})),_.delete(`/refgames/:name`,e=>{let t=e.req.param(`name`);return In.test(t)?$?.running&&$.name===t?e.json({error:`that database is being built right now`},409):E(o(t))?(p(t),D(o(t)),e.json({deleted:t})):e.json({error:`no such database`},404):e.json({error:`invalid database name`},400)})}_.get(`/refgames`,e=>{if(t){let t=g(e);if(!t)return e.json({ready:!1});let n=m(t.db);return e.json({ready:!0,games:Number(n.games??0),sources:n.sources??``})}let n=s().flatMap(e=>{let t=f(e);if(!t)return[];let n=m(t),r=Nn(t);return[{name:e,games:h(e,t),sources:n.sources??``,bytes:T(o(e)).size,builtAt:n.built_at??null,indexed:r.indexed,positions:r.plies}]});return e.json({ready:n.length>0,databases:n})});let y=e=>{let t=c.default(),n=null,r=e.split(` `);for(let e=0;e<r.length&&e<24;e+=1){let i=l(t,r[e]);if(!i)break;t.play(i);let a=zt(A(t.toSetup()).toString(16));a&&(n=a)}return n};return _.get(`/refgames/search`,e=>{let t=g(e);if(!t)return e.json({error:`no reference games database`},503);let{name:n,db:r}=t,i=(e.req.query(`q`)??``).trim(),a=Math.max(0,Number(e.req.query(`offset`))||0),o=Rn(t=>e.req.query(t)),s=[...o.clauses],c=[...o.binds];i&&(s.unshift(`(white LIKE ? OR black LIKE ? OR opening LIKE ? OR eco LIKE ?)`),c.unshift(`%${i}%`,`%${i}%`,`%${i}%`,`${i}%`));let l=s.length?`WHERE ${s.join(` AND `)}`:``,u=l===``?h(n,r):a===0?r.prepare(`SELECT COUNT(*) AS n FROM games ${l}`).get(...c).n:null,d=r.prepare(`SELECT id, white, black, white_elo, black_elo, result, date, event, eco, opening, moves
         FROM games ${l} ORDER BY id DESC LIMIT ${Fn} OFFSET ?`).all(...c,a);return e.json({total:u,rows:d.map(({moves:e,...t})=>{if(t.opening)return t;let n=y(e);return n?{...t,eco:t.eco??n.eco,opening:n.name}:t})})}),_.get(`/refgames/explore`,e=>{let t=g(e);if(!t)return e.json({error:`no reference games database`},503);let{db:n}=t,r=e.req.query(`fen`)?.trim();if(!r)return e.json({error:`expected fen`},400);let i=u(r);if(i.isErr)return e.json({error:`bad fen`},400);let o=c.fromSetup(i.unwrap());if(o.isErr)return e.json({error:`bad position`},400);let s=o.unwrap();if(!Nn(n).indexed)return e.json({indexed:!1,opening:null,games:0,moves:[],topGames:[]});let l=k(A(s.toSetup())),{clauses:f,binds:p}=Rn(t=>e.req.query(t),`g.`),m=f.length?` AND ${f.join(` AND `)}`:``,h=(f.length===0&&Ln(n)?n.prepare(`SELECT uci, w, d, b FROM move_counts WHERE pos = ? ORDER BY w + d + b DESC, uci`).all(l):n.prepare(`SELECT p.uci AS uci,
                SUM(g.result = '1-0') AS w,
                SUM(g.result = '1/2-1/2') AS d,
                SUM(g.result = '0-1') AS b
         FROM plies p JOIN games g ON g.id = p.game_id
         WHERE p.pos = ?${m}
         GROUP BY p.uci
         ORDER BY w + d + b DESC, p.uci`).all(l,...p)).flatMap(e=>{let t=a(e.uci);return!t||!s.isLegal(t)?[]:[{uci:e.uci,san:d(s,t),w:e.w,d:e.d,b:e.b,total:e.w+e.d+e.b}]}),_=n.prepare(`SELECT p.uci AS uci, g.white, g.black, g.white_elo AS whiteElo,
                  g.black_elo AS blackElo, g.result, g.date
           FROM plies p JOIN games g ON g.id = p.game_id
           WHERE p.pos = ?${m}
           ORDER BY g.white_elo + g.black_elo DESC, g.id DESC
           LIMIT 8`).all(l,...p).filter(e=>{let t=a(e.uci);return t!==void 0&&s.isLegal(t)});return e.json({indexed:!0,opening:zt(A(s.toSetup()).toString(16)),games:h.reduce((e,t)=>e+t.total,0),moves:h,topGames:_.map(e=>({...e,site:null}))})}),_.post(`/refgames/explore-batch`,async e=>{let t=g(e);if(!t)return e.json({error:`no reference games database`},503);let{db:n}=t,r=await e.req.json().catch(()=>null),i=Array.isArray(r?.fens)?r.fens.filter(e=>typeof e==`string`):null;if(!i)return e.json({error:`expected fens`},400);if(i.length>256)return e.json({error:`too many positions`},400);if(!Nn(n).indexed)return e.json({indexed:!1,positions:[]});let{clauses:o,binds:s}=Rn(t=>e.req.query(t),`g.`),l=o.length?` AND ${o.join(` AND `)}`:``,f=o.length===0&&Ln(n)?n.prepare(`SELECT uci, w, d, b FROM move_counts WHERE pos = ? ORDER BY w + d + b DESC, uci`):n.prepare(`SELECT p.uci AS uci,
              SUM(g.result = '1-0') AS w,
              SUM(g.result = '1/2-1/2') AS d,
              SUM(g.result = '0-1') AS b
       FROM plies p JOIN games g ON g.id = p.game_id
       WHERE p.pos = ?${l}
       GROUP BY p.uci
       ORDER BY w + d + b DESC, p.uci`),p=i.map(e=>{let t=u(e.trim());if(t.isErr)return{fen:e,moves:[]};let n=c.fromSetup(t.unwrap());if(n.isErr)return{fen:e,moves:[]};let r=n.unwrap();return{fen:e,moves:f.all(k(A(r.toSetup())),...s).flatMap(e=>{let t=a(e.uci);return!t||!r.isLegal(t)?[]:[{uci:e.uci,san:d(r,t),w:e.w,d:e.d,b:e.b,total:e.w+e.d+e.b}]})}});return e.json({indexed:!0,positions:p})}),_.get(`/refgames/find`,e=>{let n=s();if(n.length===0)return e.json({error:`no reference games database`},503);let{white:r,black:i,date:a,result:o}=e.req.query();if(!r||!i)return e.json({error:`expected white & black`},400);for(let s of n){let n=f(s);if(!n)continue;let c=n.prepare(`SELECT id FROM games
           WHERE white = ? AND black = ? AND (? IS NULL OR date = ?) AND (? IS NULL OR result = ?)
           LIMIT 1`).get(r,i,a??null,a??null,o??null,o??null);if(c)return e.json(t?{id:c.id}:{id:c.id,db:s})}return e.json({error:`not indexed`},404)}),_.get(`/refgames/:id/pgn`,e=>{let t=g(e);if(!t)return e.json({error:`no reference games database`},503);let n=t.db.prepare(`SELECT * FROM games WHERE id = ?`).get(Number(e.req.param(`id`)));if(!n)return e.json({error:`unknown game`},404);let r=(e,t)=>t?`[${e} "${t.replace(/"/g,``)}"]\n`:``,i=r(`Event`,n.event)+r(`White`,n.white)+r(`Black`,n.black)+r(`WhiteElo`,n.white_elo?String(n.white_elo):null)+r(`BlackElo`,n.black_elo?String(n.black_elo):null)+r(`Date`,n.date)+r(`ECO`,n.eco)+r(`Opening`,n.opening??y(n.moves)?.name??null)+r(`Result`,n.result)+`\n${n.moves} ${n.result}\n`;return e.json({pgn:i})}),Object.assign(_,{closeDb:()=>p()})}var Vn=new Set([`study`,`note`,`game`]),Hn=5e3,Un=1e6,Wn=(e,t)=>typeof e==`string`&&e.length>0&&e.length<=t,Gn=e=>{if(typeof e!=`object`||!e)return!1;let t=e;return Vn.has(t.kind)&&Wn(t.id,512)&&(t.chapter===void 0||Wn(t.chapter,200))},Kn=(e,t)=>{if(typeof e!=`object`||!e)return-1;let n=e;if(!Wn(n.id,32)||(t?n.san!==void 0:!Wn(n.san,12))||n.name!==void 0&&!Wn(n.name,200)||n.note!==void 0&&(typeof n.note!=`string`||n.note.length>2e3)||n.depth!==void 0&&(typeof n.depth!=`number`||!Number.isFinite(n.depth))||n.tags!==void 0&&!(Array.isArray(n.tags)&&n.tags.every(Gn))||!Array.isArray(n.children))return-1;let r=1;for(let e of n.children){let t=Kn(e,!1);if(t<0)return-1;r+=t}return r},qn=e=>{if(typeof e!=`object`||!e)return!1;let t=e;if(t.version!==1||!Array.isArray(t.maps))return!1;let n=0;for(let e of t.maps){let t=e;if(typeof t!=`object`||!t||!Wn(t.id,32)||t.color!==`white`&&t.color!==`black`||t.name!==void 0&&!Wn(t.name,200))return!1;let r=Kn(t.root,!0);if(r<0)return!1;n+=r}return n<=Hn};function Jn(e,t,n){let r=K(e,`map.json`),i;try{i=JSON.parse(w(r,`utf-8`))}catch{return}if(!Array.isArray(i?.maps))return;let a=!1,o=e=>n.folder?e.startsWith(`${n.from}/`)?`${n.to}${e.slice(n.from.length)}`:e:e===n.from?n.to:e,s=e=>{for(let n of e.tags??[]){if(n.kind!==t)continue;let e=o(n.id);e!==n.id&&(n.id=e,a=!0)}for(let t of e.children??[])s(t)};for(let e of i.maps)e?.root&&s(e.root);a&&Z(r,`${JSON.stringify(i,null,2)}\n`)}function Yn(e=K(Y,`repertoire`)){let t=K(e,`map.json`),n=new G;return n.get(`/openingmap`,e=>{let n;try{n=w(t,`utf-8`)}catch{return e.json({version:1,maps:[]})}try{return e.json(JSON.parse(n))}catch{return e.json({error:`map.json is damaged; fix or remove it`},500)}}),n.put(`/openingmap`,async n=>{let r=await n.req.json().catch(()=>null);if(!qn(r))return n.json({error:`not a valid opening map document`},400);let i=JSON.stringify(r,null,2);return i.length>Un?n.json({error:`map too large`},400):(x(e,{recursive:!0}),Z(t,`${i}\n`),n.json({ok:!0}))}),n}var Xn=new Set([`hit`,`miss`,`gap`]),Zn=(e,t)=>Array.isArray(e)&&e.length<=t&&e.every(e=>typeof e==`string`&&e.length<=12);function Qn(e=K(Y,`repertoire`)){let t=K(e,`history.jsonl`),n=()=>{let e;try{e=w(t,`utf-8`)}catch{return[]}return e.trimEnd().split(`
`).flatMap(e=>{try{let t=JSON.parse(e);return typeof t?.study==`string`&&typeof t?.key==`string`&&Xn.has(t?.result)?[t]:[]}catch{return[]}})},r=new G;return r.post(`/repertoire/attempt`,async n=>{let r=await n.req.json().catch(()=>null);if(!r||typeof r.study!=`string`||typeof r.chapter!=`string`||typeof r.key!=`string`||!Xn.has(r.result))return n.json({error:`expected { study, chapter, key, result }`},400);let i={study:r.study,chapter:r.chapter,key:r.key,result:r.result,...Zn(r.path,200)&&{path:r.path},...Zn(r.expected,16)&&{expected:r.expected},...typeof r.played==`string`&&r.played.length<=12&&{played:r.played},at:new Date().toISOString()};return x(e,{recursive:!0}),ne(t,`${JSON.stringify(i)}\n`),n.json({ok:!0})}),r.get(`/repertoire/summary`,e=>{let t=e.req.query(`study`);if(!t)return e.json({error:`study is required`},400);let r=e.req.query(`chapter`)||null,i=new Map;for(let e of n())e.study===t&&(r&&e.chapter!==r||i.set(`${e.chapter}\n${e.key}`,e));let a=e=>({chapter:e.chapter,key:e.key,path:e.path??[],expected:e.expected??[],played:e.played}),o=[...i.values()];return e.json({attempted:o.length,review:o.filter(e=>e.result===`miss`).slice(-100).map(a),gaps:o.filter(e=>e.result===`gap`).slice(-100).map(a)})}),r.post(`/repertoire/reset`,e=>(D(t,{force:!0}),e.json({ok:!0}))),r}var $n=20971520;function er(e){let t=[...e.matchAll(/^\[Event\s+"([^"]*)"\]/gm)].map(e=>e[1].trim()),n=t.length||+!!e.trim(),r=[...e.matchAll(/^\[ChapterName\s+"([^"]*)"\]/gm)].map(e=>e[1].trim()),i=r.length===t.length&&r.length>0?r:t;if(i===t&&t.length>0){let e=t.map(e=>{let t=e.indexOf(`:`);return t===-1?null:e.slice(0,t).trim()});e[0]&&e.every(t=>t===e[0])&&(i=t.map(e=>e.slice(e.indexOf(`:`)+1).trim()))}let a=i.filter(e=>e&&e!==`?`);return a.every(e=>/^Chapter \d+$/.test(e))?{count:n,names:[]}:{count:n,names:a.slice(0,4)}}var tr=8192,nr=`rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1`;function rr(e){return e?e.split(` `)[0]===nr.split(` `)[0]?null:e:null}function ir(e){let t=e.split(`
`);if(t[0]?.trim()===`---`){let e=t.findIndex((e,t)=>t>0&&e.trim()===`---`);if(e>0)return{front:`${t.slice(0,e+1).join(`
`)}\n`,body:t.slice(e+1)}}return{front:``,body:t}}function ar(e){let t=e.findIndex(e=>e.trim()==="```chess");if(t<0)return null;let n=e.findIndex((e,n)=>n>t&&e.trim().startsWith("```"));if(n<0)return null;let r=e.slice(t+1,n).join(`
`).trim();return r?rr(h(r.startsWith(`[`)?r:`[Result "*"]\n\n${r}`)):null}function or(e){let t=!1;for(let n of e){let e=n.trim();if(e.startsWith("```")||e.startsWith(`~~~`)){t=!t;continue}if(t||!e||e.startsWith(`#`)||e.startsWith(`---`)||e.startsWith(`===`))continue;let r=e.replace(/^[-*+>]\s+/,``).replace(/^\d+[.)]\s+/,``).replace(/!?\[([^\]]*)\]\([^)]*\)/g,`$1`).replace(/[*_`]/g,``).trim();if(r)return r.length>140?`${r.slice(0,139)}…`:r}return null}function sr(e,t){let n=e.indexOf(`[Event `,1),r=n>0?e.slice(0,n):e;return!(n>0||t<tr)&&!/\s(\*|1-0|0-1|1\/2-1\/2)\s*$/.test(r.trimEnd())?null:rr(h(r))}function cr(e){let{body:t}=ir(e);return{excerpt:or(t),fen:ar(t)}}function lr(e=mt,t=`studies`,n=`.pgn`,r={}){x(e,{recursive:!0});let i=new G,a=t=>K(e,`${t}${n}`),o=t=>{let r=t.lastIndexOf(`/`);return K(e,r<0?``:t.slice(0,r),`.${r<0?t:t.slice(r+1)}${n}.swp`)},s=e=>{let t=o(e);try{let e=T(t);return{draft:w(t,`utf-8`),draftAt:e.mtime.toISOString()}}catch{return null}},c=e=>{try{D(o(e))}catch{}},l=new Map,u=(e,t)=>{let n=l.get(e);if(n&&n.mtimeMs===t)return n.info;let r=er(w(e,`utf-8`));return l.set(e,{mtimeMs:t,info:r}),r},d=new Map,f=(e,t)=>{let r=d.get(e);if(r&&r.mtimeMs===t)return r.preview;let i={excerpt:null,fen:null};try{let t=_(e,`r`);try{let e=Buffer.alloc(tr),r=te(t,e,0,tr,0),a=e.subarray(0,r).toString(`utf-8`);i=n===`.md`?cr(a):{excerpt:null,fen:sr(a,r)}}finally{ee(t)}}catch{}return d.set(e,{mtimeMs:t,preview:i}),i},p=K(e,`.bookmarks.json`),m=K(e,`.pins.json`),h=()=>{for(let e of[p,m])try{let t=JSON.parse(w(e,`utf-8`));if(Array.isArray(t.ids))return t.ids}catch{}return[]},g=e=>{Z(p,`${JSON.stringify({ids:e},null,2)}\n`)},b=(e,t)=>{let n=h(),r=n.indexOf(e);r<0||(t===null?n.splice(r,1):n[r]=t,g(n))};i.get(`/${t}/bookmarks`,e=>e.json({ids:h()})),i.post(`/${t}/bookmarks/toggle`,async e=>{let t=(await e.req.json().catch(()=>null))?.id?.trim();if(!t||!O(t))return e.json({error:`invalid study id`},400);let n=h(),r=n.indexOf(t),i=r<0;return i?n.unshift(t):n.splice(r,1),g(n),e.json({id:t,bookmarked:i})}),i.get(`/${t}`,t=>{let r=v(e,{recursive:!0,encoding:`utf-8`}),i=[];for(let t of r)try{let n=T(K(e,t));i.push({file:t,isFile:n.isFile(),isDir:n.isDirectory(),size:n.size,mtime:n.mtime})}catch{}let a=i.filter(({file:e,isFile:t})=>t&&e.endsWith(n)).map(({file:t,size:r,mtime:i})=>{let a=K(e,t),o=f(a,i.getTime()),s=n===`.pgn`?u(a,i.getTime()):null;return{id:t.slice(0,-n.length).split(`/`).join(`/`),chapters:s?s.count:1,...s&&s.names.length>0?{chapterNames:s.names}:{},bytes:r,updatedAt:i.toISOString(),...o}}).sort((e,t)=>t.updatedAt.localeCompare(e.updatedAt)),o=i.filter(({isDir:e})=>e).map(({file:e})=>e.split(`/`).join(`/`)).sort();return t.json({studies:a,folders:o})}),i.post(`/${t}/folders`,async t=>{let n=(await t.req.json().catch(()=>null))?.name?.trim();return!n||!O(n)?t.json({error:`invalid collection name`},400):(x(K(e,n),{recursive:!0}),t.json({folder:n}))}),i.post(`/${t}/move`,async e=>{let t=await e.req.json().catch(()=>null),n=t?.from?.trim(),i=t?.to?.trim();if(!n||!i||!O(n)||!O(i))return e.json({error:`invalid study id`},400);if(!E(a(n)))return e.json({error:`no such study`},404);if(E(a(i)))return e.json({error:`a study with that name exists`},409);x(K(a(i),`..`),{recursive:!0}),S(a(n),a(i));try{S(o(n),o(i))}catch{}return b(n,i),r.onMoved?.(n,i),e.json({moved:i})}),i.post(`/${t}/folders/move`,async t=>{let n=await t.req.json().catch(()=>null),i=n?.from?.trim(),a=n?.to?.trim();if(!i||!a||!O(i)||!O(a))return t.json({error:`invalid collection name`},400);let o=K(e,i);if(!E(o)||!T(o).isDirectory())return t.json({error:`no such collection`},404);let s=K(e,a);if(E(s))return t.json({error:`a collection with that name exists`},409);x(K(s,`..`),{recursive:!0}),S(o,s);let c=h(),l=c.map(e=>e.startsWith(`${i}/`)?`${a}${e.slice(i.length)}`:e);return l.some((e,t)=>e!==c[t])&&g(l),r.onFolderMoved?.(i,a),t.json({moved:a})}),i.delete(`/${t}/folders/:name{.+}`,t=>{let n=t.req.param(`name`);if(!O(n))return t.json({error:`invalid collection name`},400);let r=K(e,n);if(!E(r)||!T(r).isDirectory())return t.json({error:`no such collection`},404);let i=v(r);if(i.some(e=>!e.endsWith(`.swp`)))return t.json({error:`collection is not empty — move or delete its studies first`},409);for(let e of i)D(K(r,e));return y(r),t.json({deleted:n})}),i.get(`/${t}/:id{.+}`,e=>{let t=e.req.param(`id`);if(!O(t))return e.json({error:`invalid study id`},400);let n=a(t);if(!E(n))return e.json({error:`no such study`},404);let r=w(n,`utf-8`),i=s(t);return i&&i.draft===r?(c(t),e.json({id:t,pgn:r})):e.json({id:t,pgn:r,...i??{}})}),i.post(`/${t}`,async e=>{let t=await e.req.json().catch(()=>null),r=t?.name?.trim();if(!r||!O(r))return e.json({error:`study name must be letters, digits, spaces, _ . - (use / for a collection)`},400);if(typeof t?.pgn==`string`&&Buffer.byteLength(t.pgn)>$n)return e.json({error:`study too large`},413);let i=a(r);if(E(i))return e.json({error:`a study with that name exists`},409);x(K(i,`..`),{recursive:!0});let o=r.split(`/`).at(-1);return C(i,t?.pgn?.trim()?t.pgn:n===`.md`?`# ${o}\n\n`:`[Event "${o}: Chapter 1"]\n[ChapterName "Chapter 1"]\n[Result "*"]\n\n*\n`),e.json({id:r})});let ne=e=>e.req.query(`draft`)===`1`;return i.put(`/${t}/:id{.+}`,async e=>{let t=e.req.param(`id`);if(!O(t))return e.json({error:`invalid study id`},400);let n=await e.req.json().catch(()=>null);return typeof n?.pgn==`string`?Buffer.byteLength(n.pgn)>$n?e.json({error:`study too large`},413):E(a(t))?ne(e)?(Z(o(t),n.pgn),e.json({parked:t,bytes:n.pgn.length})):(Z(a(t),n.pgn),c(t),e.json({saved:t,bytes:n.pgn.length})):e.json({error:`no such study`},404):e.json({error:`missing pgn`},400)}),i.delete(`/${t}/:id{.+}`,e=>{let t=e.req.param(`id`);if(!O(t))return e.json({error:`invalid study id`},400);if(ne(e))return c(t),e.json({discarded:t});let n=a(t);return E(n)?(D(n),c(t),b(t,null),e.json({deleted:t})):e.json({error:`no such study`},404)}),i}function ur(e,t={}){let n=t.studies??mt,r=t.notes??ht,i=t.games??gt,a=t.repertoireState??K(Y,`repertoire`),o=e=>({onMoved:(t,n)=>Jn(a,e,{from:t,to:n}),onFolderMoved:(t,n)=>Jn(a,e,{from:t,to:n,folder:!0})});e.route(`/api`,Ct(t.sources??_t,{busy:zn})),e.route(`/api`,Ht()),e.route(`/api`,lr(n,`studies`,`.pgn`,o(`study`))),e.route(`/api`,lr(K(i,`collection`),`games/docs`,`.pgn`,o(`game`))),e.route(`/api`,lr(r,`notes`,`.md`,o(`note`))),e.route(`/api`,ln(i,K(i,`..`,`config.json`))),e.route(`/api`,t.myGamesDb?_n(i,t.myGamesDb):_n(i)),e.route(`/api`,t.puzzlesDb||t.puzzlesState?Mn(t.puzzlesDb??bt,t.puzzlesState??K(Y,`puzzles`)):Mn()),e.route(`/api`,t.refgamesDb?Bn(t.refgamesDb):Bn()),e.route(`/api`,Qn(a)),e.route(`/api`,Yn(a))}var dr={"games/collection/Alderman R vs Pereira V 2026-01-01.pgn":`[Event "Tata Steel Masters"]
[Site "Chess Vault demo (sample data — invented players)"]
[Date "2026.01.01"]
[Round "1"]
[White "Alderman, R"]
[Black "Pereira, V"]
[Result "1/2-1/2"]
[WhiteElo "2844"]
[BlackElo "2917"]
[ECO "A95"]
[Opening "Dutch Defense: Stonewall Variation"]

{Dutch Defense: Stonewall Variation. A slight inaccuracy in move order — the bishop is better placed before this pawn commits.}
1. d4 f5 2. Nf3 e6 3. g3 Nf6 4. c4 Be7 5. Nc3 O-O {Book so far. The plan is the usual one: finish development, then decide which side to open.} 6. Bg2 d5 7. O-O c6 8. b3 ! Ne4 {The critical moment. The pieces are as good as they are going to get; something has to happen now.} (8... dxc4 Rb1 cxb3 {was the alternative — playable, but it hands over the initiative.}) 9. Qc2 Nd7 10. Bf4 a5 11. Rad1 b5 ?! 12. Nxe4 fxe4 13. Ne5 Nxe5 14. Bxe5 bxc4 15. bxc4 Bf6 16. cxd5 cxd5 17. Bxf6 Rxf6 18. f3 exf3 19. Rxf3 Ba6 20. Rxf6 gxf6 21. Rb1 Rb8 22. Bf3 Bc4 23. Rxb8 Qxb8 24. Kg2 Qb4 25. Qc1 Qe7 26. a3 e5 27. dxe5 Qxe5 28. Kf2 Kg7 29. h4 Qd4+ 30. Kg2 Qe5 31. Kf2 Qd4+ 32. Qe3 Qxe3+ 33. Kxe3 Kf7 34. Kd4 Ke6 35. e4 Kd6 36. Bh5 Ke6 37. Bg4+ Kd6 38. Bf5 h6 39. Bg6 Ke6 40. Bh7 Kd6 41. Bg8 Bf1 42. exd5 Bg2 43. Be6 Bf3 44. Kc4 Be2+ 45. Kd4 Bf3 46. Bf7 Bg2 47. Bg8 Bf3 48. Be6 Bg2 49. Bg8 Bf3 50. Be6 Bg2 51. Bf7 Bf3 52. Bg8 Bg2 53. Bf7 Bf3 54. Kc4 Be2+ 55. Kc3 Kc5 56. Kd2 Bc4 57. Ke3 Bxd5 {The rest is technique, which is another way of saying it still has to be played accurately.} 58. Bxd5 1/2-1/2
`,"games/collection/Alderman R vs Pereira V 2026-01-13.pgn":`[Event "Club championship"]
[Site "Chess Vault demo (sample data — invented players)"]
[Date "2026.01.13"]
[Round "4"]
[White "Alderman, R"]
[Black "Pereira, V"]
[Result "1/2-1/2"]
[WhiteElo "3041"]
[BlackElo "3035"]
[ECO "E51"]
[Opening "Nimzo-Indian Defense: Normal Variation, Ragozin Variation"]

{Nimzo-Indian Defense: Normal Variation, Ragozin Variation. A slight inaccuracy in move order — the bishop is better placed before this pawn commits.}
1. d4 Nf6 2. c4 e6 3. Nf3 d5 4. Nc3 Bb4 5. e3 O-O {Book so far. The plan is the usual one: finish development, then decide which side to open.} 6. Bd2 b6 7. cxd5 exd5 8. Bd3 ! Bd6 {Prophylaxis. The move looks slow, and it takes away every active idea the opponent had.} (8... Ba3 Rb1 Bxb2 {was the alternative — playable, but it hands over the initiative.}) 9. O-O Bb7 10. Ne5 c5 11. Nb5 Be7 ?! 12. Be1 Nc6 13. Rc1 a6 14. Nc3 Qd6 15. f4 cxd4 16. exd4 Nxd4 17. Bxh7+ Nxh7 18. Qxd4 Rfe8 19. Na4 Bd8 20. Rc3 Rc8 21. Rxc8 Bxc8 22. Bf2 Re6 23. Bg3 Qc7 24. Qc3 Bb7 25. Qxc7 Bxc7 26. Rc1 Bd8 27. Nf3 Re4 28. Nc3 Re8 29. Re1 Rxe1+ 30. Bxe1 Bc7 31. Ne2 Nf6 32. Bc3 Ne4 33. Be5 Bd8 34. Bd4 f6 35. Kf1 a5 36. Ke1 b5 37. Be3 b4 38. f5 Bc7 39. g3 Bc8 40. Nfd4 Be5 41. Nf4 Nd6 42. Nxd5 Kf7 43. Nc6 Bxb2 44. Nxa5 Nxf5 45. Bd2 Nd4 46. Nxb4 Ba3 47. Nac6 Nf3+ 48. Kd1 Nxh2 49. Kc2 Nf3 50. Be3 Ne5 51. Nxe5+ fxe5 52. Kb3 Bxb4 53. Kxb4 Kf6 54. Kc5 {The rest is technique, which is another way of saying it still has to be played accurately.} Kf5 1/2-1/2
`,"games/collection/Alderman R vs Pereira V 2026-01-25.pgn":`[Event "Sinquefield Cup"]
[Site "Chess Vault demo (sample data — invented players)"]
[Date "2026.01.25"]
[Round "7"]
[White "Alderman, R"]
[Black "Pereira, V"]
[Result "1/2-1/2"]
[WhiteElo "2949"]
[BlackElo "2855"]
[ECO "C18"]
[Opening "French Defense: Winawer Variation, Portisch-Hook Variation"]

{French Defense: Winawer Variation, Portisch-Hook Variation. A slight inaccuracy in move order — the bishop is better placed before this pawn commits.}
1. e4 e6 2. d4 d5 3. Nc3 Bb4 4. e5 c5 5. a3 Bxc3+ {Book so far. The plan is the usual one: finish development, then decide which side to open.} 6. bxc3 Qa5 7. Bd2 Qa4 8. h4 ! Nc6 {A long think. Both continuations are playable; this one keeps more pieces on, which suits the attacker.} (8... Qxc2 Rb1 Qxb1 {was the alternative — playable, but it hands over the initiative.}) 9. Qg4 Kf8 10. h5 h6 11. Qf4 Qxc2 ?! 12. Rc1 Qe4+ 13. Qxe4 dxe4 14. Ne2 f6 15. Rh4 fxe5 16. dxc5 Nf6 17. Ng3 Ne7 18. Nxe4 Nf5 19. Nxf6 Nxh4 20. Ng4 e4 21. Rb1 g6 22. Bf4 gxh5 23. Nf6 b6 24. c6 Ba6 25. Nd7+ Ke8 26. Be5 Bxf1 27. Kxf1 Ng6 28. Bxh8 Nxh8 29. c4 Rc8 30. c5 Rxc6 31. cxb6 axb6 32. Nxb6 Ng6 33. a4 Nf4 34. a5 Nd5 35. Nxd5 exd5 36. Rd1 Rd6 37. Ra1 Ra6 38. Ke2 d4 39. Ra4 d3+ 40. Ke3 Kf7 41. Kxe4 d2 42. Rd4 Rxa5 43. Rxd2 h4 44. Kf3 h5 45. Rd4 Rf5+ 46. Ke2 h3 47. gxh3 {The rest is technique, which is another way of saying it still has to be played accurately.} h4 1/2-1/2
`,"games/collection/Bex N vs Ueda K 2026-02-02.pgn":`[Event "Candidates Tournament"]
[Site "Chess Vault demo (sample data — invented players)"]
[Date "2026.02.02"]
[Round "2"]
[White "Bex, N"]
[Black "Ueda, K"]
[Result "0-1"]
[WhiteElo "2818"]
[BlackElo "2963"]
[ECO "E85"]
[Opening "King's Indian Defense: Sämisch Variation, Orthodox Variation"]

{King's Indian Defense: Sämisch Variation, Orthodox Variation. Theory ends about here. From this point the game is decided by understanding rather than memory.}
1. d4 Nf6 2. c4 g6 3. f3 Bg7 4. e4 d6 5. Nc3 O-O {Both sides have what they wanted from the opening. The middlegame will be about the centre.} 6. Be3 e5 7. Nge2 Nh5 8. g4 ! Nf4 {Here the exchange is tempting and wrong: trading the good bishop leaves the dark squares bare.} (8... exd4 Rb1 dxc3 {was the alternative — playable, but it hands over the initiative.}) 9. Nxf4 exf4 10. Bxf4 Nc6 11. d5 Ne5 ?! 12. Be2 f5 13. exf5 gxf5 14. g5 Ng6 15. Qd2 Qe7 16. Kf2 Bd7 17. Rae1 Rae8 18. Bd1 Qf7 19. Rxe8 Rxe8 20. h4 Qe7 21. Be3 f4 22. Bd4 Ne5 23. b3 Bf5 24. Bc2 Bxc2 25. Qxc2 Ng4+ 26. fxg4 Bxd4+ 27. Kg2 {The endgame is winning but not simple — the passed pawn needs its king, not just its rook.} Bxc3 0-1
`,"games/collection/Bex N vs Ueda K 2026-02-14.pgn":`[Event "Online rapid arena"]
[Site "Chess Vault demo (sample data — invented players)"]
[Date "2026.02.14"]
[Round "5"]
[White "Bex, N"]
[Black "Ueda, K"]
[Result "1/2-1/2"]
[WhiteElo "3031"]
[BlackElo "2832"]
[ECO "A70"]
[Opening "Benoni Defense: Classical Variation"]

{Benoni Defense: Classical Variation. Theory ends about here. From this point the game is decided by understanding rather than memory.}
1. c4 c5 2. Nf3 Nf6 3. d4 e6 4. d5 exd5 5. cxd5 d6 {Both sides have what they wanted from the opening. The middlegame will be about the centre.} 6. Nc3 g6 7. e4 Bg7 8. Nd2 ! O-O {The point of the whole plan. Material is level, but only one side has a target to attack.} (8... c4 Rb1 Nxe4 {was the alternative — playable, but it hands over the initiative.}) 9. Be2 Nbd7 10. a4 a6 11. O-O Re8 ?! 12. h3 h6 13. Qc2 Qe7 14. Re1 Rb8 15. Ra3 b6 16. Nf1 Nh7 17. Be3 Qh4 18. Nh2 Qd8 19. Nf1 Qh4 20. Qd2 Ng5 21. f3 f5 22. Rd1 fxe4 23. Bf2 Bd4 24. Bxd4 cxd4 25. Nxe4 Nxe4 26. fxe4 Rxe4 27. Ng3 Re7 28. Rf1 Bb7 29. Rf4 Qg5 30. Qxd4 Rf8 31. Rxf8+ Nxf8 32. Qxb6 Qxd5 33. Qb3 Qxb3 34. Rxb3 a5 35. Rb6 Ne6 36. Rxd6 Nf4 37. Bf1 Kg7 38. Rd4 Nd5 39. Ne4 Ne3 40. Nd2 Rc7 41. b3 Rc2 42. Rd7+ Kf6 43. Nc4 Nxc4 44. bxc4 Be4 45. Ra7 Ke5 46. Rxa5+ Kf4 47. Ra7 Rc1 48. Re7 Ke3 49. a5 Ra1 50. c5 Kf4 51. a6 Bd3 52. Rf7+ Ke5 53. a7 Bxf1 54. Rxf1 Rxa7 55. Kh2 Rc7 56. Rc1 Kd5 57. Kg3 Rxc5 58. Rxc5+ Kxc5 59. h4 Kd5 60. Kf4 Ke6 61. h5 gxh5 62. Ke4 h4 63. Kf4 h3 64. Kg3 hxg2 65. Kh2 g1=R 66. Kxg1 h5 67. Kh2 h4 {The endgame is winning but not simple — the passed pawn needs its king, not just its rook.} 68. Kh3 1/2-1/2
`,"games/collection/Bex N vs Ueda K 2026-02-26.pgn":`[Event "FIDE Grand Swiss"]
[Site "Chess Vault demo (sample data — invented players)"]
[Date "2026.02.26"]
[Round "8"]
[White "Bex, N"]
[Black "Ueda, K"]
[Result "1/2-1/2"]
[WhiteElo "2780"]
[BlackElo "2845"]
[ECO "D09"]
[Opening "Queen's Gambit Declined: Albin Countergambit, Fianchetto Variation, Be6 Line"]

{Queen's Gambit Declined: Albin Countergambit, Fianchetto Variation, Be6 Line. Theory ends about here. From this point the game is decided by understanding rather than memory.}
1. d4 d5 2. c4 e5 3. dxe5 d4 4. Nf3 Nc6 5. g3 Be6 {Both sides have what they wanted from the opening. The middlegame will be about the centre.} 6. Bg2 Bxc4 7. O-O Qd7 8. Nbd2 ! Bd5 {The critical moment. The pieces are as good as they are going to get; something has to happen now.} (8... Bxa2 Rb1 Bxb1 {was the alternative — playable, but it hands over the initiative.}) 9. Nb3 Rd8 10. Bg5 Be7 11. Bf4 Qc8 ?! 12. Rc1 a5 13. a3 a4 14. Nc5 Bxc5 15. Rxc5 Bb3 16. Qd3 h6 17. Nd2 Be6 18. Bxc6+ bxc6 19. Nf3 Qb8 20. Nxd4 Qxb2 21. Rd1 Ne7 22. e4 O-O 23. Bc1 Qb6 24. Qc3 Bh3 25. f3 f6 26. exf6 Rxf6 27. Re1 Rf7 28. Bb2 Kh7 29. Qc2 Ra8 30. Qc3 Rd8 31. Ba1 Ng6 32. Kf2 Bg4 33. Rxc6 Qb7 34. Rc5 Rxd4 35. Qxd4 Rxf3+ 36. Kg1 c6 37. Rc3 Rf8 38. Rxc6 Bh3 39. Qd5 Qe7 40. e5 Rf5 41. Qd3 Nh4 42. Re3 Qa7 43. Rc1 Nf3+ 44. Kf2 Nxe5+ 45. Qxf5+ Bxf5 46. Bxe5 Qf7 47. Ke1 Qb7 48. Rc7 Qh1+ 49. Kd2 Qd5+ 50. Kc1 Qh1+ 51. Kd2 Qd5+ 52. Ke1 Bd7 53. Bc3 h5 54. h4 Qh1+ 55. Kf2 Qh2+ 56. Ke1 Qh1+ 57. Kf2 Qh2+ 58. Ke1 Qg1+ 59. Kd2 Qg2+ 60. Ke1 Bg4 61. Ree7 Kg6 62. Rxg7+ Kf5 63. Rge7 Qg1+ 64. Kd2 Qd1+ 65. Ke3 Qg1+ 66. Kd3 Qd1+ 67. Ke3 Bf3 68. Rcd7 Qe2+ 69. Kd4 Qd1+ 70. Ke3 Qe2+ 71. Kd4 Qa6 72. Bb4 Kg4 73. Rd6 Qa8 74. Re3 Qa7+ 75. Bc5 Qf7 76. Kc3 Qb3+ 77. Kd2 Qd1+ 78. Kc3 Qb3+ 79. Kd2 Qd1+ 80. Kc3 Qb1 81. Kc4 Kh3 82. Bb4 Qc1+ 83. Kd4 Bg4 84. Rc3 Qb2 85. Kc5 Qf2+ 86. Kc6 Be2 87. Re6 Bf3+ 88. Kb5 Be2+ 89. Kc6 Bf3+ 90. Kb5 Qa7 91. Rd6 Be2+ 92. Kc6 Bf3+ 93. Rxf3 Qa8+ 94. Kb6 Qxf3 95. Rg6 {The endgame is winning but not simple — the passed pawn needs its king, not just its rook.} Qd3 1/2-1/2
`,"games/collection/Castellan J vs Novak E 2026-03-03.pgn":`[Event "Norway Chess"]
[Site "Chess Vault demo (sample data — invented players)"]
[Date "2026.03.03"]
[Round "3"]
[White "Castellan, J"]
[Black "Novak, E"]
[Result "1/2-1/2"]
[WhiteElo "2956"]
[BlackElo "3058"]
[ECO "B23"]
[Opening "Sicilian Defense: Closed"]

{Sicilian Defense: Closed. Book so far. The plan is the usual one: finish development, then decide which side to open.}
1. e4 c5 2. Nc3 d6 3. Bb5+ Bd7 4. Bxd7+ Qxd7 5. d4 cxd4 {A slight inaccuracy in move order — the bishop is better placed before this pawn commits.} 6. Qxd4 Nc6 7. Qd3 g6 8. Nf3 ! Bg7 {Prophylaxis. The move looks slow, and it takes away every active idea the opponent had.} (8... Nb4 Rb1 Nxa2 {was the alternative — playable, but it hands over the initiative.}) 9. O-O Nf6 10. Nd5 O-O 11. Bg5 Nxd5 ?! 12. exd5 Ne5 13. Nxe5 Bxe5 14. c3 Bf6 15. h4 Bxg5 16. hxg5 Rae8 17. Rfe1 e5 18. dxe6 Rxe6 19. Re3 Rfe8 20. Rae1 Rxe3 21. Rxe3 Rxe3 22. Qxe3 Qf5 23. Qxa7 Qb1+ 24. Kh2 Qxb2 25. a4 Qe2 26. Qxb7 Qh5+ 27. Kg3 Qxg5+ 28. Kf3 Qf6+ 29. Ke2 Qxc3 30. Qb5 Qc2+ 31. Ke3 Qc1+ 32. Ke4 Qe1+ 33. Kd5 Qe6+ 34. Kd4 Qf6+ 35. Ke3 Qc3+ 36. Ke4 Qe1+ 37. Kd5 Qe6+ 38. Kd4 Qf6+ 39. Kc4 Qxf2 40. Qb8+ Kg7 41. Qxd6 Qxg2 42. a5 h5 43. a6 h4 44. Qd4+ f6 45. a7 h3 46. Qd7+ Kh6 47. a8=R Qxa8 48. Qxh3+ Kg5 49. Qg3+ Kf5 50. Qh3+ Kf4 51. Qh4+ Kf5 52. Qh3+ Ke5 53. Qg3+ Ke6 54. Qg4+ Ke5 55. Qg3+ Ke6 56. Qg4+ Kf7 57. Qd7+ Kf8 58. Qd6+ Kf7 59. Qd7+ Kg8 60. Qe6+ Kg7 61. Qe7+ Kh6 62. Qe3+ g5 63. Qh3+ Kg7 64. Qd7+ Kg6 65. Qd3+ f5 66. Qd6+ Kh5 67. Qh2+ Kg4 68. Qg1+ Kf4 69. Qh2+ Ke3 70. Qg1+ {Precise to the end. A pawn move here instead would have let the defence build a fortress.} Ke2 1/2-1/2
`,"games/collection/Castellan J vs Novak E 2026-03-15.pgn":`[Event "Tata Steel Masters"]
[Site "Chess Vault demo (sample data — invented players)"]
[Date "2026.03.15"]
[Round "6"]
[White "Castellan, J"]
[Black "Novak, E"]
[Result "1/2-1/2"]
[WhiteElo "3023"]
[BlackElo "2980"]
[ECO "D86"]
[Opening "Grünfeld Defense: Exchange Variation, Classical Variation"]

{Grünfeld Defense: Exchange Variation, Classical Variation. Book so far. The plan is the usual one: finish development, then decide which side to open.}
1. d4 Nf6 2. c4 g6 3. Nc3 d5 4. cxd5 Nxd5 5. e4 Nxc3 {A slight inaccuracy in move order — the bishop is better placed before this pawn commits.} 6. bxc3 Bg7 7. Bc4 c5 8. Ne2 ! Nc6 {A long think. Both continuations are playable; this one keeps more pieces on, which suits the attacker.} (8... cxd4 Rb1 dxc3 {was the alternative — playable, but it hands over the initiative.}) 9. Be3 O-O 10. O-O Bg4 11. f3 cxd4 ?! 12. cxd4 Na5 13. Bxf7+ Rxf7 14. fxg4 Rxf1+ 15. Kxf1 Qb6 16. Kg1 Qe6 17. Qd3 Rd8 18. Nf4 Qc4 19. Rd1 e5 20. Nd5 Qxd3 21. Rxd3 Re8 22. Nc3 exd4 23. Bxd4 Bxd4+ 24. Rxd4 Rc8 25. Rd3 Rc4 26. g5 Nc6 27. Nd5 Kf7 28. Nf6 Ne5 29. Ra3 h6 30. Rxa7 Rc1+ 31. Kf2 hxg5 32. Nd5 Rc2+ 33. Kg3 Rb2 34. h3 Ke6 35. Ra3 Re2 36. Nc3 Rd2 37. Nb1 Rc2 38. Rb3 Rxa2 39. Rb6+ Nc6 40. Kh2 g4 41. h4 Re2 42. Rxb7 Rxe4 43. Rb6 Kd7 44. Nc3 Rd4 45. Ne2 Re4 46. Nc3 Rd4 47. Ne2 Re4 {Precise to the end. A pawn move here instead would have let the defence build a fortress.} 48. Nc3 1/2-1/2
`,"games/collection/Castellan J vs Novak E 2026-03-27.pgn":`[Event "Club championship"]
[Site "Chess Vault demo (sample data — invented players)"]
[Date "2026.03.27"]
[Round "9"]
[White "Castellan, J"]
[Black "Novak, E"]
[Result "1-0"]
[WhiteElo "3035"]
[BlackElo "2979"]
[ECO "B36"]
[Opening "Sicilian Defense: Accelerated Dragon, Maróczy Bind"]

{Sicilian Defense: Accelerated Dragon, Maróczy Bind. Book so far. The plan is the usual one: finish development, then decide which side to open.}
1. e4 c5 2. Nf3 Nc6 3. d4 cxd4 4. Nxd4 g6 5. c4 Nf6 {A slight inaccuracy in move order — the bishop is better placed before this pawn commits.} 6. Nc3 d6 7. Be2 Bg7 8. Be3 ! O-O {Here the exchange is tempting and wrong: trading the good bishop leaves the dark squares bare.} (8... Nb4 Rb1 Nxa2 {was the alternative — playable, but it hands over the initiative.}) 9. O-O Nxd4 10. Bxd4 Be6 11. f4 Rc8 ?! 12. b3 Qa5 13. a3 Bg4 14. e5 dxe5 15. fxe5 Bxe2 16. Qxe2 Nd7 17. Nd5 Kh8 18. Bc3 Qa6 19. Rad1 Qe6 20. Qe3 Nc5 21. Rf3 Rfd8 22. Bd4 b6 23. Rdf1 Rf8 24. a4 Kg8 25. Kh1 h5 26. h3 Kh7 27. Qe1 Bh6 28. Bf2 Nxb3 29. Rxb3 Rxc4 30. Rd3 Rfc8 31. Nc3 Rf4 32. Nb5 Bg7 33. Bg3 Rxf1+ 34. Qxf1 Qc4 35. Qd1 Qc1 36. Nxa7 Rc4 37. Qxc1 Rxc1+ 38. Kh2 g5 39. Re3 Kg6 40. h4 Bh6 41. Re4 Kf5 42. hxg5 Bxg5 43. Rb4 Be3 44. Rh4 Kg6 45. Nb5 Bg1+ 46. Kh3 Be3 47. Bh2 Rd1 48. Rc4 Bf2 49. Rc2 Be3 50. Rc6+ Kf5 51. Rc3 Ke4 52. Rb3 Re1 53. Rb4+ Kd3 54. Rh4 Ra1 55. Nc7 Bc5 56. e6 fxe6 57. Nxe6 Bf2 58. Rxh5 Rxa4 59. g4 Be3 60. Bg3 Re4 61. Nc7 Ke2 62. Nd5 Bd4 63. g5 b5 64. g6 b4 65. Nxb4 Re6 66. Nd5 Kf3 67. Nf4 Rc6 68. Rb5 Rc8 69. Rb3+ Ke4 70. Kg4 Rg8 71. Rb4 e5 72. Bf2 Rf8 73. Ne6 Rxf2 74. Ng5+ Kd3 75. g7 Bc3 76. Rb3 e4 77. g8=Q Rg2+ 78. Kh5 Rb2 79. Rxb2 Bxb2 80. Nxe4 Bc1 81. Qd5+ Ke3 82. Qc4 Ba3 83. Kg4 Be7 84. Nc3 Bd8 85. Qe4+ Kd2 86. Na2 Bb6 87. Kf3 Be3 88. Qc4 Bg1 {Precise to the end. A pawn move here instead would have let the defence build a fortress.} 89. Qe2# 1-0
`,"games/collection/Doyle F vs Sorokin Y 2026-04-01.pgn":`[Event "Online rapid arena"]
[Site "Chess Vault demo (sample data — invented players)"]
[Date "2026.04.01"]
[Round "1"]
[White "Doyle, F"]
[Black "Sorokin, Y"]
[Result "1/2-1/2"]
[WhiteElo "2976"]
[BlackElo "2834"]
[ECO "C76"]
[Opening "Ruy Lopez: Morphy Defense, Modern Steinitz Defense, Fianchetto Variation"]

{Ruy Lopez: Morphy Defense, Modern Steinitz Defense, Fianchetto Variation. Both sides have what they wanted from the opening. The middlegame will be about the centre.}
1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 d6 5. c3 g6 {Theory ends about here. From this point the game is decided by understanding rather than memory.} 6. d4 Bd7 7. O-O Bg7 8. Re1 ! Nge7 {Prophylaxis. The move looks slow, and it takes away every active idea the opponent had.} (8... exd4 Nbd2 dxc3 {was the alternative — playable, but it hands over the initiative.}) 9. d5 Na5 10. Bxd7+ Qxd7 11. b3 O-O ?! 12. c4 b5 13. Nc3 Rab8 14. Be3 bxc4 15. Nd2 f5 16. f3 Bf6 17. bxc4 Bh4 18. g3 f4 19. Bxf4 exf4 20. gxh4 Qh3 21. Qc2 Qxh4 22. Kh1 Nb7 23. Ne2 c6 24. Nd4 Rfc8 25. Ne6 Nd8 26. Nxd8 Rxd8 27. Nb3 Qh3 28. Rf1 cxd5 29. cxd5 g5 30. Rf2 Ng6 31. Rg1 h6 32. Nd4 Rd7 33. Nc6 Rb6 34. e5 Nxe5 35. Qe4 Rdb7 36. Nxe5 dxe5 37. Rc1 Rf7 38. Rc6 Rxc6 39. dxc6 Qe6 40. Rc2 Rc7 41. h4 Kg7 42. a3 Kf8 43. Kh2 Qf6 44. Kh3 Qe6+ 45. Kh2 Qf6 46. Kg2 g4 47. fxg4 Qxh4 48. Qf5+ Kg8 49. Qe6+ Kh7 50. Rc3 Qe1 51. Qf5+ Kg7 52. Rd3 Qe2+ 53. Kg1 Qe1+ 54. Kg2 Qe2+ 55. Kg1 f3 56. Rxf3 Qd1+ 57. Kh2 Qd6 58. Rd3 Qxc6 59. Qxe5+ {Resignation is timely: the king cannot be defended and the counterplay is one move too slow.} Kh7 1/2-1/2
`,"games/collection/Doyle F vs Sorokin Y 2026-04-04.pgn":`[Event "Sinquefield Cup"]
[Site "Chess Vault demo (sample data — invented players)"]
[Date "2026.04.04"]
[Round "4"]
[White "Doyle, F"]
[Black "Sorokin, Y"]
[Result "1-0"]
[WhiteElo "3010"]
[BlackElo "2976"]
[ECO "B39"]
[Opening "Sicilian Defense: Accelerated Dragon, Maróczy Bind, Breyer Variation"]

{Sicilian Defense: Accelerated Dragon, Maróczy Bind, Breyer Variation. Both sides have what they wanted from the opening. The middlegame will be about the centre.}
1. e4 c5 2. Nf3 Nc6 3. d4 cxd4 4. Nxd4 g6 5. c4 Bg7 {Theory ends about here. From this point the game is decided by understanding rather than memory.} 6. Be3 Nf6 7. Nc3 Ng4 8. Qxg4 ! Nxd4 {The point of the whole plan. Material is level, but only one side has a target to attack.} (8... Nb4 Rb1 Nxa2 {was the alternative — playable, but it hands over the initiative.}) 9. Qd1 Ne6 10. Rc1 Qa5 11. Bd3 b6 ?! 12. O-O Bb7 13. f4 Nc5 14. Bb1 Bxc3 15. Rxc3 Qa4 16. Qe2 f6 17. Bd2 a5 18. b3 Qc6 19. a3 Ne6 20. Rf2 Nc5 21. Rf1 Ne6 22. Rf2 Nc5 23. Re3 a4 24. b4 Nb3 25. b5 Qc7 26. Bb4 Rg8 27. e5 f5 28. e6 d6 29. Rh3 O-O-O 30. Rxh7 Kb8 31. Qe3 Ka7 32. Bd3 Nc5 33. Rd2 Rge8 34. Rg7 Rg8 35. Rf7 Rge8 36. Bc2 d5 37. Bxc5 bxc5 38. b6+ Qxb6 39. Bxa4 d4 40. Qe1 Be4 41. Rg7 Qa5 42. Bxe8 Rxe8 43. Rxg6 Rb8 44. Rd1 Qd8 45. h4 Ka6 46. Qf2 Qh8 47. Rg5 Ka5 48. a4 Rb4 49. h5 Rb8 50. Kh2 Qc8 51. Qe1+ Ka6 52. Qh4 Ka5 53. Rg6 Qc7 54. h6 Kb4 55. h7 Rh8 56. Rg7 Qb6 57. Qxe7 Qb8 58. Rf1 Bc2 59. Rg3 d3 60. Rh3 Bb3 61. Rxd3 Bc2 62. Rh3 Be4 63. Qd7 Ka5 64. e7 Bxg2 65. Kxg2 Qb2+ 66. Rf2 Qb8 67. Rh6 Qb1 68. Qa7+ Kb4 69. Qb7+ Kxc4 70. Qxb1 Rxh7 71. Rxh7 Kd5 72. e8=Q c4 73. Qe5+ Kc6 {Resignation is timely: the king cannot be defended and the counterplay is one move too slow.} 74. Qbb5# 1-0
`,"games/collection/Doyle F vs Sorokin Y 2026-04-16.pgn":`[Event "Candidates Tournament"]
[Site "Chess Vault demo (sample data — invented players)"]
[Date "2026.04.16"]
[Round "7"]
[White "Doyle, F"]
[Black "Sorokin, Y"]
[Result "1-0"]
[WhiteElo "2727"]
[BlackElo "2771"]
[ECO "D94"]
[Opening "Grünfeld Defense: Opocensky Variation"]

{Grünfeld Defense: Opocensky Variation. Both sides have what they wanted from the opening. The middlegame will be about the centre.}
1. d4 Nf6 2. c4 g6 3. Nc3 d5 4. Nf3 Bg7 5. e3 O-O {Theory ends about here. From this point the game is decided by understanding rather than memory.} 6. Bd2 c6 7. Bd3 Bf5 8. Qe2 ! Bxd3 {The critical moment. The pieces are as good as they are going to get; something has to happen now.} (8... dxc4 Rb1 cxd3 {was the alternative — playable, but it hands over the initiative.}) 9. Qxd3 Nbd7 10. O-O Re8 11. b4 Nb6 ?! 12. c5 Nc4 13. Bc1 e5 14. Nxe5 Nxe5 15. dxe5 Rxe5 16. a4 Ne4 17. Ne2 Rh5 18. Ra2 Qh4 19. h3 Rg5 20. Nf4 Be5 21. Qc2 Re8 22. Bb2 Rf5 23. b5 g5 24. Nd3 Bxb2 25. Rxb2 g4 26. Nf4 Rg5 27. bxc6 bxc6 28. Qd1 gxh3 29. g3 h2+ 30. Kh1 Rxg3 31. Re1 Rg1+ 32. Rxg1+ hxg1=Q+ 33. Kxg1 Re5 34. Qf3 Rg5+ 35. Kf1 Kg7 36. Ke2 Qh2 37. Nd3 Rg6 38. Nf4 Rg5 39. Nd3 Nc3+ 40. Kd2 Ne4+ 41. Kc2 Rg2 42. Kb3 Qb8+ 43. Ka3 Qh2 44. Rb7 Ng5 45. Qf4 Qxf4 46. exf4 Ne6 47. Rxa7 Rh2 48. f3 Rh3 49. Ne5 Nxc5 50. Rxf7+ Kg8 51. a5 Nd3 52. Rf6 Nxe5 53. fxe5 Rh1 54. Rxc6 Ra1+ 55. Kb4 d4 56. Rd6 Rb1+ 57. Kc5 Ra1 58. Kb6 Rb1+ 59. Kc7 Rb4 60. Kd7 Ra4 61. a6 Kf8 62. e6 Kg7 63. e7 d3 64. e8=Q Rxa6 {Resignation is timely: the king cannot be defended and the counterplay is one move too slow.} 65. Qe7+ 1-0
`,"games/collection/Ekström P vs Zahavi O 2026-05-02.pgn":`[Event "Tata Steel Masters"]
[Site "Chess Vault demo (sample data — invented players)"]
[Date "2026.05.02"]
[Round "2"]
[White "Ekström, P"]
[Black "Zahavi, O"]
[Result "1/2-1/2"]
[WhiteElo "2684"]
[BlackElo "2959"]
[ECO "B57"]
[Opening "Sicilian Defense: Classical Variation, Sozin Attack"]

{Sicilian Defense: Classical Variation, Sozin Attack. A slight inaccuracy in move order — the bishop is better placed before this pawn commits.}
1. e4 c5 2. Nf3 d6 3. Bc4 Nf6 4. Nc3 Nc6 5. d4 cxd4 {Book so far. The plan is the usual one: finish development, then decide which side to open.} 6. Nxd4 e5 7. Nf5 Bxf5 8. exf5 ! Be7 {The point of the whole plan. Material is level, but only one side has a target to attack.} (8... e4 Rb1 e3 {was the alternative — playable, but it hands over the initiative.}) 9. Nd5 O-O 10. c3 Nxd5 11. Bxd5 Bg5 ?! 12. Qf3 Bxc1 13. Rxc1 Qf6 14. O-O Rab8 15. Rcd1 Ne7 16. Be4 b5 17. Rd2 Rfd8 18. g4 h5 19. h3 g6 20. Qe2 b4 21. fxg6 Nxg6 22. Bxg6 Qxg6 23. Rfd1 bxc3 24. bxc3 Kf8 25. c4 hxg4 26. hxg4 Rb4 27. a3 Rb3 28. Rd5 e4 29. R1d4 e3 30. fxe3 Re8 31. Rxd6 Qg5 32. Rd3 Rb1+ 33. Kg2 Qh4 34. Rd1 Rb3 35. R1d3 Rb1 36. Rd1 Rb3 37. R1d3 Re4 38. R6d4 Qxg4+ 39. Qxg4 Rxg4+ 40. Kf3 Rxd3 41. Rxg4 Rxa3 42. Ke4 Ke7 43. Rg1 a5 44. Kd4 a4 45. Rf1 Rb3 46. Rf5 Ra3 47. Ra5 Ra1 48. Kc5 Re1 49. Rxa4 Rxe3 50. Kc6 f5 51. c5 Ke6 52. Kb6 Rb3+ 53. Kc6 Ke5 54. Ra1 f4 55. Kc7 Rc3 56. c6 f3 57. Kb7 Rb3+ 58. Kc8 Rc3 59. c7 Ke4 60. Kb7 Ke3 61. c8=Q Rxc8 62. Kxc8 f2 63. Kb7 Kf3 64. Ka6 Kg2 65. Ka7 f1=Q 66. Rxf1 {The rest is technique, which is another way of saying it still has to be played accurately.} Kxf1 1/2-1/2
`,"games/collection/Ekström P vs Zahavi O 2026-05-05.pgn":`[Event "FIDE Grand Swiss"]
[Site "Chess Vault demo (sample data — invented players)"]
[Date "2026.05.05"]
[Round "5"]
[White "Ekström, P"]
[Black "Zahavi, O"]
[Result "0-1"]
[WhiteElo "2736"]
[BlackElo "2902"]
[ECO "E41"]
[Opening "Nimzo-Indian Defense: Rubinstein System"]

{Nimzo-Indian Defense: Rubinstein System. A slight inaccuracy in move order — the bishop is better placed before this pawn commits.}
1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. e3 c5 5. Nf3 O-O {Book so far. The plan is the usual one: finish development, then decide which side to open.} 6. Bd2 cxd4 7. Nxd4 a6 8. Qc2 ! Qc7 {A long think. Both continuations are playable; this one keeps more pieces on, which suits the attacker.} (8... Ba3 Rb1 Bxb2 {was the alternative — playable, but it hands over the initiative.}) 9. a3 Be7 10. Be2 b6 11. Bf3 Bb7 ?! 12. Bxb7 Qxb7 13. O-O Rc8 14. Qd3 Nc6 15. Nxc6 Rxc6 16. b3 Rd8 17. e4 d6 18. h3 Nd7 19. Qe2 Rdc8 20. a4 Bf6 21. Rac1 Nc5 22. Rb1 R6c7 23. Rfe1 g6 24. Na2 d5 25. e5 Be7 26. cxd5 exd5 27. Nb4 Ne6 28. Qxa6 Qxa6 29. Nxa6 Rc2 30. Red1 d4 31. Bb4 Bh4 32. g3 Bg5 33. Bd6 h5 34. h4 Bh6 35. Nb4 Re2 36. Kf1 Rd2 37. Rxd2 Bxd2 38. Nd5 Rc2 39. Nxb6 d3 40. Nc4 Bc3 41. Rd1 Bd4 42. Rd2 Rc3 43. a5 Rxb3 44. a6 Rc3 45. Na5 Rc1+ 46. Kg2 Ra1 47. Bb4 Bc5 48. Bxc5 Rxa5 49. Bb4 Rxa6 50. Rxd3 Ra8 51. Re3 Rd8 52. Bd6 Re8 53. Re4 Ng7 54. g4 hxg4 55. Rxg4 Nf5 56. h5 Kh7 57. hxg6+ fxg6 58. Rc4 Kg7 59. Rc7+ Kg8 60. Kf3 Nd4+ 61. Kf4 Ne6+ 62. Kg4 Nxc7 63. Bxc7 Kf7 64. Bd6 Ke6 65. f4 Rg8 66. Kg5 Rg7 67. Kh6 Rg8 68. Kh7 Ra8 69. Kxg6 Rg8+ 70. Kh5 Rg1 71. Kh4 Kf5 72. Kh5 {The rest is technique, which is another way of saying it still has to be played accurately.} Rh1# 0-1
`,"games/collection/Ekström P vs Zahavi O 2026-05-17.pgn":`[Event "Norway Chess"]
[Site "Chess Vault demo (sample data — invented players)"]
[Date "2026.05.17"]
[Round "8"]
[White "Ekström, P"]
[Black "Zahavi, O"]
[Result "1/2-1/2"]
[WhiteElo "2978"]
[BlackElo "2947"]
[ECO "A27"]
[Opening "English Opening: King's English Variation, Three Knights System"]

{English Opening: King's English Variation, Three Knights System. A slight inaccuracy in move order — the bishop is better placed before this pawn commits.}
1. c4 e5 2. Nc3 Nc6 3. Nf3 f5 4. g3 g6 5. d4 e4 {Book so far. The plan is the usual one: finish development, then decide which side to open.} 6. Nh4 Bg7 7. e3 Nf6 8. Ng2 ! d5 {Here the exchange is tempting and wrong: trading the good bishop leaves the dark squares bare.} (8... f4 Rb1 fxe3 {was the alternative — playable, but it hands over the initiative.}) 9. Nf4 Ne7 10. h4 Bh6 11. Nfxd5 Nexd5 ?! 12. cxd5 Bf8 13. a4 Bd6 14. a5 O-O 15. a6 Qe7 16. Qb3 bxa6 17. Bc4 h6 18. Qa2 Rb8 19. b3 Kg7 20. Ba3 Bb7 21. Qb2 g5 22. Ra2 Kg6 23. Qa1 Ng4 24. Qc1 Nf6 25. Kd2 Bc8 26. Bxd6 cxd6 27. Qg1 Qc7 28. Qg2 Rb4 29. hxg5 hxg5 30. Qh3 Rg8 31. Qh2 Kf7 32. Qg1 Kg6 33. Qh2 Kf7 34. Qh6 Qb8 35. Kc2 Qc7 36. Kd2 Qb8 37. Kc2 Qc7 38. g4 a5 39. gxf5 Bd7 40. Kd2 a4 41. Rc1 g4 42. Ne2 Qb6 43. Ng3 axb3 44. Ra6 b2 45. Rxb6 bxc1=Q+ 46. Kxc1 Rxc4+ 47. Kb2 axb6 48. Nh5 Nxh5 49. Qxh5+ Kf6 50. Qh6+ Kf7 51. Qh5+ Kf6 52. Qh4+ Kf7 53. Qh7+ Rg7 54. Qh5+ Kg8 55. f6 Rf7 56. Qg6+ Kf8 57. Qh6+ Kg8 58. Qg6+ Kf8 59. Qh6+ Kg8 60. Qg5+ Kh7 61. Qh5+ Kg8 62. Qg5+ Kh7 63. Kb1 Rb4+ 64. Kc1 Bb5 65. Qh5+ Kg8 66. Qg5+ Kf8 67. Qh6+ Kg8 68. Qg6+ Kf8 69. Qh6+ Kg8 70. Qg5+ Kf8 {The rest is technique, which is another way of saying it still has to be played accurately.} 71. Qh6+ 1/2-1/2
`,"games/collection/Farrow K vs Quinn H 2026-06-03.pgn":`[Event "Candidates Tournament"]
[Site "Chess Vault demo (sample data — invented players)"]
[Date "2026.06.03"]
[Round "3"]
[White "Farrow, K"]
[Black "Quinn, H"]
[Result "0-1"]
[WhiteElo "2725"]
[BlackElo "2600"]
[ECO "E89"]
[Opening "King's Indian Defense: Sämisch Variation, Closed Variation, Main Line"]

{King's Indian Defense: Sämisch Variation, Closed Variation, Main Line. Theory ends about here. From this point the game is decided by understanding rather than memory.}
1. d4 Nf6 2. c4 g6 3. f3 Bg7 4. e4 d6 5. Nc3 O-O {Both sides have what they wanted from the opening. The middlegame will be about the centre.} 6. Be3 e5 7. Nge2 c6 8. d5 ! cxd5 {A long think. Both continuations are playable; this one keeps more pieces on, which suits the attacker.} (8... c5 Rb1 Nxe4 {was the alternative — playable, but it hands over the initiative.}) 9. cxd5 a6 10. Qd2 b5 11. g4 h5 ?! 12. g5 Ne8 13. Nc1 Nd7 14. Nd3 Bb7 15. O-O-O Rc8 16. Kb1 Nc5 17. Nxc5 dxc5 18. d6 Qd7 19. h4 Rc6 20. Bh3 Qxd6 21. Qxd6 Nxd6 22. Bd7 Rfc8 23. Bxc6 Rxc6 24. Bxc5 Nc4 25. Rd8+ Kh7 26. b4 Bc8 27. Rhd1 Be6 28. Nd5 a5 29. Nf6+ Bxf6 30. gxf6 Na3+ 31. Kb2 axb4 32. Rc1 Nc4+ 33. Rxc4 Bxc4 34. Bxb4 Rxf6 35. Bd6 Rxf3 36. Bxe5 f6 37. Bc3 Rf2+ 38. Ka3 Rxa2+ 39. Kb4 Rf2 40. Rd7+ Kg8 41. Kc5 Rf3 42. Kb4 Kf8 43. e5 Ke8 44. Rg7 fxe5 45. Bxe5 Rf5 46. Bc3 Bf7 47. Rh7 Rf4+ 48. Kxb5 Rxh4 49. Bf6 Rg4 50. Kc5 Rf4 51. Bd4 Kd7 52. Be5 Ke6 53. Bxf4 Be8 54. Bb8 Bf7 55. Bd6 g5 56. Kd4 Bg6 57. Rg7 Kf5 58. Be7 g4 59. Bh4 Be8 60. Bg3 Bc6 61. Rc7 Bf3 62. Rc5+ {The endgame is winning but not simple — the passed pawn needs its king, not just its rook.} Kg6 0-1
`,"games/collection/Farrow K vs Quinn H 2026-06-06.pgn":`[Event "Club championship"]
[Site "Chess Vault demo (sample data — invented players)"]
[Date "2026.06.06"]
[Round "6"]
[White "Farrow, K"]
[Black "Quinn, H"]
[Result "1/2-1/2"]
[WhiteElo "2521"]
[BlackElo "3049"]
[ECO "D51"]
[Opening "Queen's Gambit Declined: Modern Variation, Knight Defense"]

{Queen's Gambit Declined: Modern Variation, Knight Defense. Theory ends about here. From this point the game is decided by understanding rather than memory.}
1. d4 d5 2. Bg5 Nd7 3. e3 Ngf6 4. c4 e6 5. Nc3 Be7 {Both sides have what they wanted from the opening. The middlegame will be about the centre.} 6. cxd5 exd5 7. Bd3 O-O 8. Qc2 ! c6 {The critical moment. The pieces are as good as they are going to get; something has to happen now.} (8... Ne4 Rb1 Nd2 {was the alternative — playable, but it hands over the initiative.}) 9. Nge2 Re8 10. O-O Nf8 11. Rae1 g6 ?! 12. f3 Ne6 13. Bh4 Ng7 14. e4 dxe4 15. fxe4 Ng4 16. Bxe7 Qxe7 17. Qd2 Bd7 18. Qf4 f5 19. exf5 gxf5 20. h3 Nf6 21. Ng3 Qxe1 22. Rxe1 Rxe1+ 23. Kf2 Rae8 24. Nxf5 Nxf5 25. Bxf5 Bxf5 26. Qxf5 R8e6 27. d5 cxd5 28. Nxd5 R1e2+ 29. Kf1 Re1+ 30. Kf2 R1e2+ 31. Kf1 Re1+ {The endgame is winning but not simple — the passed pawn needs its king, not just its rook.} 32. Kf2 1/2-1/2
`,"games/collection/Farrow K vs Quinn H 2026-06-18.pgn":`[Event "Sinquefield Cup"]
[Site "Chess Vault demo (sample data — invented players)"]
[Date "2026.06.18"]
[Round "9"]
[White "Farrow, K"]
[Black "Quinn, H"]
[Result "1/2-1/2"]
[WhiteElo "3045"]
[BlackElo "3132"]
[ECO "C11"]
[Opening "French Defense: Steinitz Variation, Boleslavsky Variation"]

{French Defense: Steinitz Variation, Boleslavsky Variation. Theory ends about here. From this point the game is decided by understanding rather than memory.}
1. e4 e6 2. d4 d5 3. Nc3 Nf6 4. e5 Nfd7 5. f4 c5 {Both sides have what they wanted from the opening. The middlegame will be about the centre.} 6. Nf3 Nc6 7. Be3 cxd4 8. Nxd4 ! Qb6 {Prophylaxis. The move looks slow, and it takes away every active idea the opponent had.} (8... Nb4 Rb1 Nxa2 {was the alternative — playable, but it hands over the initiative.}) 9. Qd2 Qxb2 10. Rb1 Qa3 11. Bb5 Nxd4 ?! 12. Bxd4 a6 13. Bxd7+ Bxd7 14. Rb3 Qe7 15. Rxb7 Qd8 16. O-O Qc8 17. Rb3 Bc5 18. Rf2 Qc6 19. Ne2 O-O 20. g4 Rfc8 21. f5 Bf8 22. c3 Rcb8 23. h4 Qc4 24. Nc1 a5 25. h5 a4 26. Rxb8 Rxb8 27. Kh2 Bb5 28. Ne2 a3 29. h6 gxh6 30. Qf4 Qc8 31. Ng3 Bd3 32. fxe6 Qxe6 33. Nh5 Rb2 34. Nf6+ Kh8 35. Kg3 Bg7 36. Nh5 Rxf2 37. Kxf2 Bc4 38. Qg3 Qg6 39. Qf4 Qe6 40. Qg3 {The endgame is winning but not simple — the passed pawn needs its king, not just its rook.} Qg6 1/2-1/2
`,"games/collection/Grieve M vs Verhoeven J 2026-07-07.pgn":`[Event "Online rapid arena"]
[Site "Chess Vault demo (sample data — invented players)"]
[Date "2026.07.07"]
[Round "7"]
[White "Grieve, M"]
[Black "Verhoeven, J"]
[Result "1/2-1/2"]
[WhiteElo "3001"]
[BlackElo "2963"]
[ECO "A31"]
[Opening "English Opening: Symmetrical Variation, Anti-Benoni Variation"]

{English Opening: Symmetrical Variation, Anti-Benoni Variation. Book so far. The plan is the usual one: finish development, then decide which side to open.}
1. c4 c5 2. Nf3 Nf6 3. d4 cxd4 4. Nxd4 g6 5. g3 h5 {A slight inaccuracy in move order — the bishop is better placed before this pawn commits.} 6. h3 d5 7. Bg2 e5 8. Nb3 ! Bb4+ {Here the exchange is tempting and wrong: trading the good bishop leaves the dark squares bare.} (8... dxc4 N1d2 cxb3 {was the alternative — playable, but it hands over the initiative.}) 9. Bd2 Nc6 10. cxd5 Nxd5 11. Bxb4 Ndxb4 ?! 12. Nc3 Bf5 13. O-O Qxd1 14. Rfxd1 Bc2 15. Rd2 Bxb3 16. axb3 Rd8 17. Bxc6+ Nxc6 18. Rxd8+ Kxd8 19. b4 Nxb4 20. Rxa7 Kc7 21. Ra5 Nc6 22. Rb5 Ra8 23. Nd5+ Kd6 24. Ne3 Kc7 25. Nd5+ Kd6 26. Nc3 Kc7 {Precise to the end. A pawn move here instead would have let the defence build a fortress.} 27. Nd5+ 1/2-1/2
`,"games/collection/Grieve M vs Verhoeven J 2026-07-19.pgn":`[Event "FIDE Grand Swiss"]
[Site "Chess Vault demo (sample data — invented players)"]
[Date "2026.07.19"]
[Round "1"]
[White "Grieve, M"]
[Black "Verhoeven, J"]
[Result "0-1"]
[WhiteElo "2504"]
[BlackElo "2557"]
[ECO "D62"]
[Opening "Queen's Gambit Declined: Orthodox Defense, Rubinstein Variation, Flohr Line"]

{Queen's Gambit Declined: Orthodox Defense, Rubinstein Variation, Flohr Line. Book so far. The plan is the usual one: finish development, then decide which side to open.}
1. d4 d5 2. c4 e6 3. Nc3 Nf6 4. Nf3 Be7 5. Bg5 O-O {A slight inaccuracy in move order — the bishop is better placed before this pawn commits.} 6. e3 Nbd7 7. Qc2 c5 8. cxd5 ! Nxd5 {The point of the whole plan. Material is level, but only one side has a target to attack.} (8... c4 Rb1 exd5 {was the alternative — playable, but it hands over the initiative.}) 9. Bxe7 Nxe7 10. Be2 b6 11. O-O Bb7 ?! 12. Rfd1 Nd5 13. Nxd5 exd5 14. dxc5 Nxc5 15. Qf5 Qd6 16. b4 Ne6 17. e4 Qxb4 18. exd5 Nf4 19. Bf1 Qd6 20. Ng5 g6 21. Qg4 h6 22. Ne4 Qe5 23. Re1 f5 24. Nf6+ Rxf6 25. Qg3 Qd6 26. Re6 Rxe6 27. dxe6 Bxg2 28. Bc4 Bb7 29. e7+ Kg7 30. Re1 Re8 31. h4 Qc6 32. Qc3+ Kh7 33. f3 Qxf3 34. Qxf3 Bxf3 35. Bb5 Rc8 36. e8=Q Rxe8 37. Bxe8 Be4 38. Re3 g5 39. hxg5 hxg5 40. Ra3 a5 41. Rb3 Ne2+ 42. Kf2 Nc1 43. Rxb6 Nxa2 44. Ra6 Nc3 45. Rxa5 Kg7 46. Ra6 Nd5 47. Rg6+ Kf8 48. Bc6 Nf4 49. Rh6 Nd3+ 50. Ke3 Ne5 51. Rf6+ Ke7 52. Bxe4 {Precise to the end. A pawn move here instead would have let the defence build a fortress.} Ng4+ 0-1
`,"games/collection/Halvorsen T vs Oyelaran B 2026-08-08.pgn":`[Event "Tata Steel Masters"]
[Site "Chess Vault demo (sample data — invented players)"]
[Date "2026.08.08"]
[Round "8"]
[White "Halvorsen, T"]
[Black "Oyelaran, B"]
[Result "1/2-1/2"]
[WhiteElo "2818"]
[BlackElo "2990"]
[ECO "A26"]
[Opening "English Opening: King's English Variation, Botvinnik System"]

{English Opening: King's English Variation, Botvinnik System. Both sides have what they wanted from the opening. The middlegame will be about the centre.}
1. c4 e5 2. g3 Nc6 3. Nc3 g6 4. Bg2 Bg7 5. d3 d6 {Theory ends about here. From this point the game is decided by understanding rather than memory.} 6. e4 Be6 7. Nge2 h5 8. h3 ! Qd7 {Prophylaxis. The move looks slow, and it takes away every active idea the opponent had.} (8... h4 Rb1 hxg3 {was the alternative — playable, but it hands over the initiative.}) 9. h4 Nf6 10. Nd5 O-O 11. O-O Kh7 ?! 12. Rb1 a5 13. b3 Rab8 14. Bg5 Ng4 15. Rc1 f6 16. Bd2 Rf7 17. f3 Nh6 18. Be3 Nb4 19. a3 Nc6 20. Qd2 b5 21. Kh2 Qe8 22. Rb1 b4 23. Ra1 bxa3 24. Rxa3 Qf8 25. Kh1 Rb7 26. Ng1 Qc8 27. Kh2 Qb8 28. Rb1 Qd8 29. Nh3 Qe8 30. Nf2 Rf8 31. Kh1 Bd7 32. Rg1 Qb8 33. Bh3 f5 34. exf5 Nxf5 35. Bxf5 gxf5 36. Qd1 Kg8 37. Kh2 Nb4 38. Nxb4 Rxb4 39. Bd2 Rb7 40. Nh3 c5 41. f4 a4 42. Ng5 Bf6 43. bxa4 Rb2 44. Kh3 Bxg5 45. hxg5 Bc6 46. a5 h4 47. gxh4 exf4 48. Bxf4 Rf2 49. Qh5 Rxf4 50. Qg6+ Kh8 51. Qh5+ Kg7 52. Qh6+ Kg8 53. Qg6+ Kh8 54. Qh6+ Kg8 55. Qe6+ Kg7 56. d4 Rf3+ 57. Rxf3 Bxf3 58. Qh6+ Kg8 59. Qg6+ Kh8 60. Qh6+ Kg8 61. Qg6+ Kh8 62. h5 Qe8 63. Qxe8 Rxe8 64. dxc5 dxc5 65. Kg3 Bg4 66. a6 Re3+ 67. Kf4 Re4+ 68. Kg3 Re3+ 69. Kg2 Re2+ 70. Kg3 Ra2 71. h6 Rxa6 {Resignation is timely: the king cannot be defended and the counterplay is one move too slow.} 72. Re1 1/2-1/2
`,"games/collection/Halvorsen T vs Oyelaran B 2026-08-20.pgn":`[Event "Club championship"]
[Site "Chess Vault demo (sample data — invented players)"]
[Date "2026.08.20"]
[Round "2"]
[White "Halvorsen, T"]
[Black "Oyelaran, B"]
[Result "1-0"]
[WhiteElo "3037"]
[BlackElo "2588"]
[ECO "E75"]
[Opening "King's Indian Defense: Averbakh Variation, Main Line"]

{King's Indian Defense: Averbakh Variation, Main Line. Both sides have what they wanted from the opening. The middlegame will be about the centre.}
1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. Be2 O-O {Theory ends about here. From this point the game is decided by understanding rather than memory.} 6. Bg5 c5 7. d5 e6 8. Qd2 ! Re8 {A long think. Both continuations are playable; this one keeps more pieces on, which suits the attacker.} (8... exd5 Rb1 dxc4 {was the alternative — playable, but it hands over the initiative.}) 9. Nf3 exd5 10. exd5 Bg4 11. O-O Bxf3 ?! 12. Bxf3 Nbd7 13. h3 a6 14. a4 Qa5 15. Qc2 h5 16. Bd2 Qc7 17. g3 Re7 18. Rae1 Rxe1 19. Rxe1 Re8 20. Rxe8+ Nxe8 21. b3 Bd4 22. Kg2 Qb8 23. Bd1 Qd8 24. Ne2 Bf6 25. a5 Ng7 26. g4 Bg5 27. f4 Bh4 28. Qd3 Qe7 29. Bc2 Nf8 30. Ng3 Bxg3 31. Kxg3 f5 32. Qe3 Qxe3+ 33. Bxe3 Kf7 34. Kh4 hxg4 35. hxg4 Nh7 36. Bc1 Nf6 37. gxf5 gxf5 38. Kg5 Ne4+ 39. Bxe4 fxe4 40. Be3 Ne8 41. Kf5 Ng7+ 42. Kxe4 Kf6 43. Bd2 Nh5 44. Be1 Kg6 45. Bh4 Kg7 46. Kf5 Kf7 47. Kg4 Ng7 48. f5 Kf8 49. Bd8 Ne8 50. f6 Kg8 51. Kf5 b5 52. axb6 a5 53. Kg6 a4 54. b7 a3 55. Be7 Kh8 56. f7 a2 {Resignation is timely: the king cannot be defended and the counterplay is one move too slow.} 57. fxe8=Q# 1-0
`,"games/collection/Ibarra L vs Tavares M 2026-09-09.pgn":`[Event "Candidates Tournament"]
[Site "Chess Vault demo (sample data — invented players)"]
[Date "2026.09.09"]
[Round "9"]
[White "Ibarra, L"]
[Black "Tavares, M"]
[Result "0-1"]
[WhiteElo "2550"]
[BlackElo "2809"]
[ECO "A69"]
[Opening "Benoni Defense: Four Pawns Attack, Main Line"]

{Benoni Defense: Four Pawns Attack, Main Line. A slight inaccuracy in move order — the bishop is better placed before this pawn commits.}
1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. f4 O-O {Book so far. The plan is the usual one: finish development, then decide which side to open.} 6. Nf3 c5 7. d5 e6 8. Be2 ! exd5 {The point of the whole plan. Material is level, but only one side has a target to attack.} (8... e5 Rb1 exf4 {was the alternative — playable, but it hands over the initiative.}) 9. cxd5 Re8 10. e5 dxe5 11. fxe5 Ng4 ?! 12. e6 fxe6 13. d6 Nc6 14. O-O a6 15. Bg5 Qd7 16. Ne4 h6 17. Nxc5 Qf7 18. Ne5 Qxf1+ 19. Qxf1 Ngxe5 20. Bh4 Nd7 21. Nxd7 Bxd7 22. Rd1 Nd4 23. Bc4 Rac8 24. Be7 Nf5 25. Qe2 Kh7 26. Bxe6 Nd4 27. Bxd7 Nxe2+ 28. Kf2 Nd4 29. Bxc8 Rxc8 30. d7 Rc2+ 31. Kf1 Nc6 32. b4 Rxa2 33. Rd6 Ra1+ 34. Ke2 Nd4+ 35. Rxd4 Bxd4 36. d8=Q Bg7 37. Bf6 Ra2+ 38. Kd1 Bxf6 39. Qxf6 Rxg2 40. Qf7+ Kh8 41. Qe8+ Kg7 42. Qe7+ Kg8 43. Qd8+ Kg7 44. Qc7+ {The rest is technique, which is another way of saying it still has to be played accurately.} Kf6 0-1
`,"games/collection/Ibarra L vs Tavares M 2026-09-21.pgn":`[Event "Online rapid arena"]
[Site "Chess Vault demo (sample data — invented players)"]
[Date "2026.09.21"]
[Round "3"]
[White "Ibarra, L"]
[Black "Tavares, M"]
[Result "1/2-1/2"]
[WhiteElo "2945"]
[BlackElo "3033"]
[ECO "B56"]
[Opening "Sicilian Defense: Kupreichik Variation"]

{Sicilian Defense: Kupreichik Variation. A slight inaccuracy in move order — the bishop is better placed before this pawn commits.}
1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 Bd7 {Book so far. The plan is the usual one: finish development, then decide which side to open.} 6. Bc4 e6 7. Bb3 Be7 8. O-O ! Nc6 {The critical moment. The pieces are as good as they are going to get; something has to happen now.} (8... d5 Rb1 dxe4 {was the alternative — playable, but it hands over the initiative.}) 9. Be3 O-O 10. h3 Nxd4 11. Qxd4 Bc6 ?! 12. Rad1 Nd7 13. a4 Nc5 14. Qc4 Nxb3 15. cxb3 Rc8 16. Nb5 Bxb5 17. Qxb5 b6 18. Bd4 Qc7 19. Bc3 f5 20. exf5 Rxf5 21. Qe2 e5 22. f4 Rcf8 23. fxe5 dxe5 24. Rxf5 Rxf5 25. b4 Bf6 26. Qe4 Rf4 27. Qd5+ Kf8 28. a5 bxa5 29. bxa5 a6 30. Qe6 Qc4 31. Qd6+ Be7 32. Qxe5 Qc5+ 33. Qxc5 Bxc5+ 34. Kh2 Ke7 35. Bxg7 Bd6 36. Kg1 Ke6 37. Re1+ Kd5 38. Bc3 h5 39. Re8 h4 40. Rd8 Kc6 41. Rh8 Bc5+ 42. Kh2 Bd6 43. Kg1 Bc5+ 44. Kh2 Bd6 {The rest is technique, which is another way of saying it still has to be played accurately.} 45. Kg1 1/2-1/2
`,"games/collection/Jessel A vs Marchetti C 2026-10-10.pgn":`[Event "Norway Chess"]
[Site "Chess Vault demo (sample data — invented players)"]
[Date "2026.10.10"]
[Round "1"]
[White "Jessel, A"]
[Black "Marchetti, C"]
[Result "0-1"]
[WhiteElo "2934"]
[BlackElo "3015"]
[ECO "E65"]
[Opening "King's Indian Defense: Fianchetto Variation, Yugoslav Variation, Exchange Line"]

{King's Indian Defense: Fianchetto Variation, Yugoslav Variation, Exchange Line. Theory ends about here. From this point the game is decided by understanding rather than memory.}
1. d4 Nf6 2. Nf3 g6 3. g3 Bg7 4. Bg2 O-O 5. O-O d6 {Both sides have what they wanted from the opening. The middlegame will be about the centre.} 6. c4 c5 7. Nc3 Nc6 8. dxc5 ! dxc5 {A long think. Both continuations are playable; this one keeps more pieces on, which suits the attacker.} (8... Nb4 Rb1 Nxa2 {was the alternative — playable, but it hands over the initiative.}) 9. Bf4 Nh5 10. Be3 b6 11. Qc1 Bb7 ?! 12. Rd1 Qe8 13. Bh6 Rd8 14. Qe3 Bxh6 15. Qxh6 f6 16. Ne1 Ng7 17. Rxd8 Nxd8 18. Rd1 Nf7 19. Qd2 Bxg2 20. Nxg2 Nd6 21. b3 Qf7 22. Qd5 Qxd5 23. Nxd5 Kf7 24. f3 Ngf5 25. Kf2 Nd4 26. Nc3 Rd8 27. Nf4 e6 28. g4 Ke7 29. h4 Nc6 30. g5 f5 31. h5 Rg8 32. hxg6 hxg6 33. Rh1 Nf7 34. Rh7 Nd8 35. Nb5 a6 36. Nc3 Kd6 37. Na4 Kc6 38. Nxe6 Nxe6 39. Rxf7 b5 40. Rf6 Re8 41. Nc3 bxc4 42. bxc4 Kd6 43. Rxg6 Ke5 44. e3 f4 45. Ne4 Rb8 46. Rxe6+ Kxe6 47. exf4 Rb2+ 48. Kg3 Rxa2 49. Nxc5+ Kf5 50. Nb3 a5 51. c5 Kg6 52. c6 Rc2 53. Nxa5 Rc5 54. Nb3 Rxc6 55. Nd4 Rc1 56. Ne2 Re1 57. Nc3 Ra1 58. Nd5 Rg1+ 59. Kf2 Ra1 60. Ne3 Ra2+ 61. Kg3 Ra1 62. Ng2 Rg1 63. Kf2 Ra1 64. Nh4+ Kh5 65. Nf5 Kg6 66. Ne7+ Kf7 67. Nc6 Kg6 68. Kg2 Kf5 69. Ne7+ Kxf4 70. g6 Ra5 71. Kh3 Rg5 72. Kh4 Rg1 73. Kh3 Ke5 74. f4+ Kxf4 75. Nd5+ Ke5 76. Ne3 Rxg6 77. Ng4+ Kf4 78. Nf2 Kf3 79. Kh4 Kxf2 80. Kh5 Rg3 81. Kh4 Kf3 82. Kh5 Rg4 83. Kh6 {The endgame is winning but not simple — the passed pawn needs its king, not just its rook.} Kf4 0-1
`,"games/collection/Jessel A vs Marchetti C 2026-10-22.pgn":`[Event "Tata Steel Masters"]
[Site "Chess Vault demo (sample data — invented players)"]
[Date "2026.10.22"]
[Round "4"]
[White "Jessel, A"]
[Black "Marchetti, C"]
[Result "0-1"]
[WhiteElo "2741"]
[BlackElo "3001"]
[ECO "C69"]
[Opening "Ruy Lopez: Exchange Variation, Alapin Gambit"]

{Ruy Lopez: Exchange Variation, Alapin Gambit. Theory ends about here. From this point the game is decided by understanding rather than memory.}
1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Bxc6 dxc6 5. O-O Bg4 {Both sides have what they wanted from the opening. The middlegame will be about the centre.} 6. h3 h5 7. d3 Qf6 8. Nbd2 ! Ne7 {Here the exchange is tempting and wrong: trading the good bishop leaves the dark squares bare.} (8... Bxf3 Rb1 Bxd1 {was the alternative — playable, but it hands over the initiative.}) 9. b3 Ng6 10. Bb2 Bc5 11. Rb1 O-O-O ?! 12. hxg4 hxg4 13. Nh2 Rh4 14. g3 Rdh8 15. gxh4 Rxh4 16. Ndf3 gxf3 17. Qxf3 Nf4 18. Kh1 Qh6 19. Qg3 Rh3 20. Bc1 Qh5 21. Bxf4 exf4 22. Qg1 f3 23. Rbe1 f5 24. d4 Bd6 25. e5 Be7 26. Re3 Bg5 27. Rxf3 Rxf3 28. Rd1 Rh3 29. Rd3 Rh4 30. Rg3 Bf4 31. a3 {The endgame is winning but not simple — the passed pawn needs its king, not just its rook.} b6 0-1
`,"games/collection/Kowal D vs Rasmussen I 2026-11-11.pgn":`[Event "Sinquefield Cup"]
[Site "Chess Vault demo (sample data — invented players)"]
[Date "2026.11.11"]
[Round "2"]
[White "Kowal, D"]
[Black "Rasmussen, I"]
[Result "1/2-1/2"]
[WhiteElo "3074"]
[BlackElo "3034"]
[ECO "E08"]
[Opening "Catalan Opening: Closed"]

{Catalan Opening: Closed. Book so far. The plan is the usual one: finish development, then decide which side to open.}
1. d4 Nf6 2. c4 e6 3. Nf3 d5 4. g3 Bb4+ 5. Bd2 Be7 {A slight inaccuracy in move order — the bishop is better placed before this pawn commits.} 6. Bg2 c6 7. Qc2 Nbd7 8. Bf4 ! O-O {The critical moment. The pieces are as good as they are going to get; something has to happen now.} (8... dxc4 Nbd2 c3 {was the alternative — playable, but it hands over the initiative.}) 9. O-O b6 10. Rd1 Bb7 11. Ne5 Nh5 ?! 12. Bd2 Nhf6 13. cxd5 cxd5 14. Nc6 Qe8 15. Nxe7+ Qxe7 16. Nc3 Rfc8 17. Qd3 a5 18. a4 Ba6 19. Qe3 Bc4 20. Rdc1 h6 21. h4 Nf8 22. Be1 Qd7 23. f3 Ng6 24. Qd2 Rc6 25. g4 h5 26. g5 Ne8 27. Bg3 Rd8 28. e4 Nd6 29. Qf2 Rcc8 30. Bh3 Qb7 31. Qe3 Qb8 32. Kf2 Qb7 33. Kg1 Qb8 34. Kh2 Qb7 {Precise to the end. A pawn move here instead would have let the defence build a fortress.} 35. Kg1 1/2-1/2
`,"games/collection/Kowal D vs Rasmussen I 2026-11-23.pgn":`[Event "Candidates Tournament"]
[Site "Chess Vault demo (sample data — invented players)"]
[Date "2026.11.23"]
[Round "5"]
[White "Kowal, D"]
[Black "Rasmussen, I"]
[Result "1/2-1/2"]
[WhiteElo "2960"]
[BlackElo "2969"]
[ECO "C39"]
[Opening "King's Gambit Accepted: Kieseritzky Gambit, Berlin Defense"]

{King's Gambit Accepted: Kieseritzky Gambit, Berlin Defense. Book so far. The plan is the usual one: finish development, then decide which side to open.}
1. e4 e5 2. f4 exf4 3. Nf3 g5 4. h4 g4 5. Ne5 Nf6 {A slight inaccuracy in move order — the bishop is better placed before this pawn commits.} 6. Nxg4 Nc6 7. Nc3 Nd4 8. Nxf6+ ! Qxf6 {Prophylaxis. The move looks slow, and it takes away every active idea the opponent had.} (8... Ke7 Rb1 Nxc2+ {was the alternative — playable, but it hands over the initiative.}) 9. d3 c6 10. Ne2 Ne6 11. Qd2 d5 ?! 12. Nxf4 dxe4 13. dxe4 Rg8 14. Nd3 Rg4 15. Qf2 Rxe4+ 16. Be2 Be7 17. Qxf6 Bxf6 18. Nf2 Rxh4 19. Rxh4 Bxh4 20. Be3 Nc7 21. O-O-O Bf5 22. Rh1 Bf6 23. Bf3 a6 24. Ne4 Be7 25. Bf4 O-O-O 26. Bg5 Bxg5+ 27. Nxg5 f6 28. Be4 Bg6 29. Bxg6 hxg6 30. Nf7 Rg8 31. Nd6+ Kb8 32. Rh7 f5 33. Rf7 Rd8 34. Nc4 Nd5 35. Rg7 Nf4 36. b3 b5 37. Ne5 Rd6 38. Rg8+ Kc7 39. Rg7+ Kc8 40. Rg8+ Rd8 41. Rg7 Rd6 42. Rg8+ Kc7 43. Rg7+ {Precise to the end. A pawn move here instead would have let the defence build a fortress.} Kb8 1/2-1/2
`,"games/collection/Lindqvist S vs Whitlock A 2026-12-12.pgn":`[Event "FIDE Grand Swiss"]
[Site "Chess Vault demo (sample data — invented players)"]
[Date "2026.12.12"]
[Round "3"]
[White "Lindqvist, S"]
[Black "Whitlock, A"]
[Result "1-0"]
[WhiteElo "2900"]
[BlackElo "3661"]
[ECO "D30"]
[Opening "Queen's Gambit Declined"]

{Queen's Gambit Declined. Both sides have what they wanted from the opening. The middlegame will be about the centre.}
1. d4 d5 2. c4 e6 3. cxd5 exd5 4. Nf3 Nc6 5. Nc3 Nf6 {Theory ends about here. From this point the game is decided by understanding rather than memory.} 6. Bf4 Bf5 7. e3 Be7 8. Be2 ! O-O {Here the exchange is tempting and wrong: trading the good bishop leaves the dark squares bare.} (8... Bb1 Rxb1 Nb4 {was the alternative — playable, but it hands over the initiative.}) 9. Rc1 Qd7 10. O-O h6 11. h3 Bxh3 ?! 12. gxh3 Qxh3 13. Re1 Ng4 14. Bf1 Qh5 15. Bg2 Qg6 16. Qc2 Qxc2 17. Rxc2 Bb4 18. a3 Bxc3 19. Rxc3 Rae8 20. Bxc7 Re6 21. Bg3 g6 22. a4 a6 23. b3 Rfe8 24. Rcc1 Nxe3 25. fxe3 Rxe3 26. Rxe3 Rxe3 27. Rb1 f6 28. Bf2 Re7 29. b4 Nd8 30. b5 axb5 31. axb5 b6 32. Nd2 f5 33. Bxd5+ Kg7 34. Bg3 g5 35. Be5+ Kg6 36. Nc4 Kh5 37. Rc1 Kg6 {Resignation is timely: the king cannot be defended and the counterplay is one move too slow.} 38. Nd6 1-0
`,"games/collection/Lindqvist S vs Whitlock A 2026-12-24.pgn":`[Event "Norway Chess"]
[Site "Chess Vault demo (sample data — invented players)"]
[Date "2026.12.24"]
[Round "6"]
[White "Lindqvist, S"]
[Black "Whitlock, A"]
[Result "1/2-1/2"]
[WhiteElo "3015"]
[BlackElo "3030"]
[ECO "B46"]
[Opening "Sicilian Defense: Taimanov Variation"]

{Sicilian Defense: Taimanov Variation. Both sides have what they wanted from the opening. The middlegame will be about the centre.}
1. e4 c5 2. Nf3 Nc6 3. d4 cxd4 4. Nxd4 e6 5. Nc3 a6 {Theory ends about here. From this point the game is decided by understanding rather than memory.} 6. Nxc6 bxc6 7. Bd3 Bb7 8. Qf3 ! d5 {The point of the whole plan. Material is level, but only one side has a target to attack.} (8... a5 Rb1 a4 {was the alternative — playable, but it hands over the initiative.}) 9. O-O Nf6 10. Re1 Be7 11. Qg3 O-O ?! 12. Bh6 Ne8 13. Bf4 Rc8 14. Rad1 Nf6 15. Bh6 Ne8 16. Bc1 g6 17. Bf1 Nf6 18. Na4 Qa5 19. b3 dxe4 20. Nb2 Nh5 21. Qe3 Nf6 22. Nc4 Qc7 23. Qh6 Ng4 24. Qf4 Qxf4 25. Bxf4 Bc5 26. Bg3 f5 27. h3 Nf6 28. Bd6 Bxd6 29. Nxd6 Rc7 30. f3 exf3 31. gxf3 Bc8 32. Nxc8 Rfxc8 33. Rxe6 Kf7 34. Bc4 Kg7 35. Rdd6 Ne8 36. Rd4 Nf6 37. Rdd6 Ne8 38. Rd4 Nf6 39. a3 a5 40. Ba6 Ra8 41. Bf1 c5 42. Rc4 Kf7 43. Rb6 Rd8 44. Rb5 Rd2 45. Rcxc5 Rcd7 46. Rxa5 Kg7 47. Bd3 {Resignation is timely: the king cannot be defended and the counterplay is one move too slow.} Nh5 1/2-1/2
`,"notes/Blunders to stop making 2.md":`# Blunders to stop making 2

*The same three, forever*

- Moving a piece that was holding something together.
- Playing the plan I prepared instead of the position in front of me.
- Taking a pawn when I was already winning.

## A position to remember

\`\`\`chess
8/8/8/4k3/8/4K3/4P3/8 w - - 0 1
\`\`\`

The board above is live — step through it, try a move, and it stays in the note.

## Related

See [[Attacking the castled king]] for the attacking side of this, and
[[Endgames/Rook endings - Lucena and Philidor]] for what it becomes when it fails.
`,"notes/Blunders to stop making 3.md":`# Blunders to stop making 3

*The same three, forever*

- Moving a piece that was holding something together.
- Playing the plan I prepared instead of the position in front of me.
- Taking a pawn when I was already winning.

## A position to remember

\`\`\`chess
8/8/8/4k3/8/4K3/4P3/8 w - - 0 1
\`\`\`

The board above is live — step through it, try a move, and it stays in the note.

## Related

See [[Attacking the castled king]] for the attacking side of this, and
[[Endgames/Rook endings - Lucena and Philidor]] for what it becomes when it fails.
`,"notes/Blunders to stop making 4.md":`# Blunders to stop making 4

*The same three, forever*

- Moving a piece that was holding something together.
- Playing the plan I prepared instead of the position in front of me.
- Taking a pawn when I was already winning.

## A position to remember

\`\`\`chess
8/8/8/4k3/8/4K3/4P3/8 w - - 0 1
\`\`\`

The board above is live — step through it, try a move, and it stays in the note.

## Related

See [[Attacking the castled king]] for the attacking side of this, and
[[Endgames/Rook endings - Lucena and Philidor]] for what it becomes when it fails.
`,"notes/Blunders to stop making.md":`# Blunders to stop making

*The same three, forever*

- Moving a piece that was holding something together.
- Playing the plan I prepared instead of the position in front of me.
- Taking a pawn when I was already winning.

## A position to remember

\`\`\`chess
8/8/8/4k3/8/4K3/4P3/8 w - - 0 1
\`\`\`

The board above is live — step through it, try a move, and it stays in the note.

## Related

See [[Attacking the castled king]] for the attacking side of this, and
[[Endgames/Rook endings - Lucena and Philidor]] for what it becomes when it fails.
`,"notes/Endgame drills for the week 2.md":`# Endgame drills for the week 2

*Twenty minutes a day*

- Lucena and Philidor until they are automatic.
- King and pawn versus king from every square.
- Rook behind the passed pawn — mine and theirs.

## A position to remember

\`\`\`chess
r2q1rk1/pp2bppp/2n1bn2/2pp4/3P4/2N1PN2/PPQ1BPPP/R1B2RK1 w - - 0 10
\`\`\`

The board above is live — step through it, try a move, and it stays in the note.

## Related

See [[Attacking the castled king]] for the attacking side of this, and
[[Endgames/Rook endings - Lucena and Philidor]] for what it becomes when it fails.
`,"notes/Endgame drills for the week 3.md":`# Endgame drills for the week 3

*Twenty minutes a day*

- Lucena and Philidor until they are automatic.
- King and pawn versus king from every square.
- Rook behind the passed pawn — mine and theirs.

## A position to remember

\`\`\`chess
r2q1rk1/pp2bppp/2n1bn2/2pp4/3P4/2N1PN2/PPQ1BPPP/R1B2RK1 w - - 0 10
\`\`\`

The board above is live — step through it, try a move, and it stays in the note.

## Related

See [[Attacking the castled king]] for the attacking side of this, and
[[Endgames/Rook endings - Lucena and Philidor]] for what it becomes when it fails.
`,"notes/Endgame drills for the week 4.md":`# Endgame drills for the week 4

*Twenty minutes a day*

- Lucena and Philidor until they are automatic.
- King and pawn versus king from every square.
- Rook behind the passed pawn — mine and theirs.

## A position to remember

\`\`\`chess
r2q1rk1/pp2bppp/2n1bn2/2pp4/3P4/2N1PN2/PPQ1BPPP/R1B2RK1 w - - 0 10
\`\`\`

The board above is live — step through it, try a move, and it stays in the note.

## Related

See [[Attacking the castled king]] for the attacking side of this, and
[[Endgames/Rook endings - Lucena and Philidor]] for what it becomes when it fails.
`,"notes/Endgame drills for the week.md":`# Endgame drills for the week

*Twenty minutes a day*

- Lucena and Philidor until they are automatic.
- King and pawn versus king from every square.
- Rook behind the passed pawn — mine and theirs.

## A position to remember

\`\`\`chess
r2q1rk1/pp2bppp/2n1bn2/2pp4/3P4/2N1PN2/PPQ1BPPP/R1B2RK1 w - - 0 10
\`\`\`

The board above is live — step through it, try a move, and it stays in the note.

## Related

See [[Attacking the castled king]] for the attacking side of this, and
[[Endgames/Rook endings - Lucena and Philidor]] for what it becomes when it fails.
`,"notes/Opening prep checklist 2.md":`# Opening prep checklist 2

*Before a tournament*

- Know the first ten moves of everything I play, and the ideas of the eleventh.
- One surprise weapon, prepared properly, beats three half-learned ones.
- Check what the opponent played last time. People repeat themselves.

## A position to remember

\`\`\`chess
r1bqkb1r/pppp1ppp/2n2n2/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 4 4
\`\`\`

The board above is live — step through it, try a move, and it stays in the note.

## Related

See [[Attacking the castled king]] for the attacking side of this, and
[[Endgames/Rook endings - Lucena and Philidor]] for what it becomes when it fails.
`,"notes/Opening prep checklist 3.md":`# Opening prep checklist 3

*Before a tournament*

- Know the first ten moves of everything I play, and the ideas of the eleventh.
- One surprise weapon, prepared properly, beats three half-learned ones.
- Check what the opponent played last time. People repeat themselves.

## A position to remember

\`\`\`chess
r1bqkb1r/pppp1ppp/2n2n2/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 4 4
\`\`\`

The board above is live — step through it, try a move, and it stays in the note.

## Related

See [[Attacking the castled king]] for the attacking side of this, and
[[Endgames/Rook endings - Lucena and Philidor]] for what it becomes when it fails.
`,"notes/Opening prep checklist 4.md":`# Opening prep checklist 4

*Before a tournament*

- Know the first ten moves of everything I play, and the ideas of the eleventh.
- One surprise weapon, prepared properly, beats three half-learned ones.
- Check what the opponent played last time. People repeat themselves.

## A position to remember

\`\`\`chess
r1bqkb1r/pppp1ppp/2n2n2/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 4 4
\`\`\`

The board above is live — step through it, try a move, and it stays in the note.

## Related

See [[Attacking the castled king]] for the attacking side of this, and
[[Endgames/Rook endings - Lucena and Philidor]] for what it becomes when it fails.
`,"notes/Opening prep checklist.md":`# Opening prep checklist

*Before a tournament*

- Know the first ten moves of everything I play, and the ideas of the eleventh.
- One surprise weapon, prepared properly, beats three half-learned ones.
- Check what the opponent played last time. People repeat themselves.

## A position to remember

\`\`\`chess
r1bqkb1r/pppp1ppp/2n2n2/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 4 4
\`\`\`

The board above is live — step through it, try a move, and it stays in the note.

## Related

See [[Attacking the castled king]] for the attacking side of this, and
[[Endgames/Rook endings - Lucena and Philidor]] for what it becomes when it fails.
`,"notes/Thinking process 2.md":`# Thinking process 2

*A written version*

- What changed with the last move?
- What is the opponent threatening?
- What is my worst piece, and where does it want to be?

## A position to remember

\`\`\`chess
6k1/5ppp/8/8/8/8/5PPP/R5K1 w - - 0 1
\`\`\`

The board above is live — step through it, try a move, and it stays in the note.

## Related

See [[Attacking the castled king]] for the attacking side of this, and
[[Endgames/Rook endings - Lucena and Philidor]] for what it becomes when it fails.
`,"notes/Thinking process 3.md":`# Thinking process 3

*A written version*

- What changed with the last move?
- What is the opponent threatening?
- What is my worst piece, and where does it want to be?

## A position to remember

\`\`\`chess
6k1/5ppp/8/8/8/8/5PPP/R5K1 w - - 0 1
\`\`\`

The board above is live — step through it, try a move, and it stays in the note.

## Related

See [[Attacking the castled king]] for the attacking side of this, and
[[Endgames/Rook endings - Lucena and Philidor]] for what it becomes when it fails.
`,"notes/Thinking process 4.md":`# Thinking process 4

*A written version*

- What changed with the last move?
- What is the opponent threatening?
- What is my worst piece, and where does it want to be?

## A position to remember

\`\`\`chess
6k1/5ppp/8/8/8/8/5PPP/R5K1 w - - 0 1
\`\`\`

The board above is live — step through it, try a move, and it stays in the note.

## Related

See [[Attacking the castled king]] for the attacking side of this, and
[[Endgames/Rook endings - Lucena and Philidor]] for what it becomes when it fails.
`,"notes/Thinking process.md":`# Thinking process

*A written version*

- What changed with the last move?
- What is the opponent threatening?
- What is my worst piece, and where does it want to be?

## A position to remember

\`\`\`chess
6k1/5ppp/8/8/8/8/5PPP/R5K1 w - - 0 1
\`\`\`

The board above is live — step through it, try a move, and it stays in the note.

## Related

See [[Attacking the castled king]] for the attacking side of this, and
[[Endgames/Rook endings - Lucena and Philidor]] for what it becomes when it fails.
`,"notes/What to review after each game 2.md":`# What to review after each game 2

*Not the whole game*

- The move where I first felt uncomfortable.
- The move the engine hates most.
- Whether the opening gave me a position I understood.

## A position to remember

\`\`\`chess
r1bq1rk1/pp1nbppp/2p1pn2/3p4/2PP4/2N1PN2/PPQ1BPPP/R1B2RK1 w - - 0 9
\`\`\`

The board above is live — step through it, try a move, and it stays in the note.

## Related

See [[Attacking the castled king]] for the attacking side of this, and
[[Endgames/Rook endings - Lucena and Philidor]] for what it becomes when it fails.
`,"notes/What to review after each game 3.md":`# What to review after each game 3

*Not the whole game*

- The move where I first felt uncomfortable.
- The move the engine hates most.
- Whether the opening gave me a position I understood.

## A position to remember

\`\`\`chess
r1bq1rk1/pp1nbppp/2p1pn2/3p4/2PP4/2N1PN2/PPQ1BPPP/R1B2RK1 w - - 0 9
\`\`\`

The board above is live — step through it, try a move, and it stays in the note.

## Related

See [[Attacking the castled king]] for the attacking side of this, and
[[Endgames/Rook endings - Lucena and Philidor]] for what it becomes when it fails.
`,"notes/What to review after each game 4.md":`# What to review after each game 4

*Not the whole game*

- The move where I first felt uncomfortable.
- The move the engine hates most.
- Whether the opening gave me a position I understood.

## A position to remember

\`\`\`chess
r1bq1rk1/pp1nbppp/2p1pn2/3p4/2PP4/2N1PN2/PPQ1BPPP/R1B2RK1 w - - 0 9
\`\`\`

The board above is live — step through it, try a move, and it stays in the note.

## Related

See [[Attacking the castled king]] for the attacking side of this, and
[[Endgames/Rook endings - Lucena and Philidor]] for what it becomes when it fails.
`,"notes/What to review after each game.md":`# What to review after each game

*Not the whole game*

- The move where I first felt uncomfortable.
- The move the engine hates most.
- Whether the opening gave me a position I understood.

## A position to remember

\`\`\`chess
r1bq1rk1/pp1nbppp/2p1pn2/3p4/2PP4/2N1PN2/PPQ1BPPP/R1B2RK1 w - - 0 9
\`\`\`

The board above is live — step through it, try a move, and it stays in the note.

## Related

See [[Attacking the castled king]] for the attacking side of this, and
[[Endgames/Rook endings - Lucena and Philidor]] for what it becomes when it fails.
`,"puzzles/history.jsonl":`{"id":"tkJXM","win":true,"counted":true,"puzzleRating":902,"at":"2026-08-10T23:23:56.976Z"}
{"id":"068LN","win":true,"counted":true,"puzzleRating":1015,"at":"2026-08-10T23:23:56.988Z"}
{"id":"pWIow","win":false,"counted":true,"puzzleRating":1631,"at":"2026-08-10T23:23:57.004Z"}
{"id":"VGRng","win":true,"counted":true,"puzzleRating":1123,"at":"2026-08-10T23:23:57.018Z"}
{"id":"fbHhB","win":true,"counted":true,"puzzleRating":650,"at":"2026-08-10T23:23:57.033Z"}
{"id":"bk0H9","win":true,"counted":true,"puzzleRating":2167,"at":"2026-08-10T23:23:57.048Z"}
{"id":"nwd70","win":false,"counted":true,"puzzleRating":793,"at":"2026-08-10T23:23:57.064Z"}
{"id":"C0ocf","win":true,"counted":true,"puzzleRating":1366,"at":"2026-08-10T23:23:57.080Z"}
{"id":"07clZ","win":true,"counted":true,"puzzleRating":1029,"at":"2026-08-10T23:23:57.095Z"}
{"id":"I6vId","win":true,"counted":true,"puzzleRating":1009,"at":"2026-08-10T23:23:57.111Z"}
{"id":"gOx6d","win":false,"counted":true,"puzzleRating":793,"at":"2026-08-10T23:23:57.127Z"}
{"id":"G1abP","win":true,"counted":true,"puzzleRating":1297,"at":"2026-08-10T23:23:57.142Z"}
{"id":"Kd96y","win":false,"counted":true,"puzzleRating":555,"at":"2026-08-10T23:23:57.158Z"}
{"id":"EItAo","win":false,"counted":true,"puzzleRating":762,"at":"2026-08-10T23:23:57.173Z"}
{"id":"pf59W","win":false,"counted":true,"puzzleRating":1635,"at":"2026-08-10T23:23:57.189Z"}
{"id":"LjPDD","win":true,"counted":true,"puzzleRating":1612,"at":"2026-08-10T23:23:57.205Z"}
{"id":"x0GZ6","win":true,"counted":true,"puzzleRating":1648,"at":"2026-08-10T23:23:57.221Z"}
{"id":"ZeBSz","win":true,"counted":true,"puzzleRating":2299,"at":"2026-08-10T23:23:57.236Z"}
{"id":"rUQzq","win":false,"counted":true,"puzzleRating":1185,"at":"2026-08-10T23:23:57.251Z"}
{"id":"XAgxg","win":true,"counted":true,"puzzleRating":2082,"at":"2026-08-10T23:23:57.267Z"}
{"id":"UxsbN","win":true,"counted":true,"puzzleRating":985,"at":"2026-08-10T23:23:57.283Z"}
{"id":"WPYsm","win":true,"counted":true,"puzzleRating":2180,"at":"2026-08-10T23:23:57.298Z"}
{"id":"0AQRf","win":false,"counted":true,"puzzleRating":1621,"at":"2026-08-10T23:23:57.314Z"}
{"id":"Pjsfr","win":true,"counted":true,"puzzleRating":1872,"at":"2026-08-10T23:23:57.330Z"}
{"id":"49gLk","win":true,"counted":true,"puzzleRating":1061,"at":"2026-08-10T23:23:57.345Z"}
{"id":"Xk1Fh","win":true,"counted":true,"puzzleRating":526,"at":"2026-08-10T23:23:57.360Z"}
{"id":"NOplR","win":false,"counted":true,"puzzleRating":1195,"at":"2026-08-10T23:23:57.376Z"}
{"id":"bxgLa","win":true,"counted":true,"puzzleRating":759,"at":"2026-08-10T23:23:57.392Z"}
{"id":"xq67Y","win":true,"counted":true,"puzzleRating":1594,"at":"2026-08-10T23:23:57.407Z"}
{"id":"p8wNm","win":true,"counted":true,"puzzleRating":958,"at":"2026-08-10T23:23:57.439Z"}
`,"puzzles/state.json":`{
  "attempts": 30,
  "wins": 21,
  "streak": 3
}
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
`,"studies/Attacking the castled king.pgn":`[Event "Attacking the castled king: Chapter 1"]
[ChapterName "Main line"]
[Date "2026.10.22"]
[Round "4"]
[White "Jessel, A"]
[Black "Marchetti, C"]
[Result "1/2-1/2"]
[WhiteElo "3042"]
[BlackElo "3073"]
[ECO "A34"]
[Opening "English Opening: Symmetrical Variation"]

{English Opening: Symmetrical Variation. Theory ends about here. From this point the game is decided by understanding rather than memory.}
1. Nf3 Nf6 2. c4 c5 3. Nc3 Nc6 4. g3 d5 5. d4 cxd4 {Both sides have what they wanted from the opening. The middlegame will be about the centre.} 6. Nxd4 dxc4 7. Nxc6 Qxd1+ 8. Nxd1 ! bxc6 {Here the exchange is tempting and wrong: trading the good bishop leaves the dark squares bare.} (8... c3 Rb1 cxb2 {was the alternative — playable, but it hands over the initiative.}) 9. Bg2 Nd5 10. Ne3 e6 11. Nxc4 Ba6 ?! 12. Na5 Rc8 13. Bd2 Be7 14. Rc1 c5 15. Bf1 c4 16. e4 Nb6 17. b3 Ba3 18. Rc2 cxb3 19. Rxc8+ Bxc8 20. axb3 O-O 21. Bb5 f5 22. exf5 Rxf5 23. Bd3 Rd5 24. Ke2 Re5+ 25. Kd1 Bd7 26. f4 Rh5 27. Be2 Rd5 28. Nc4 Bb4 29. Kc2 Bxd2 30. Nxd2 Rc5+ 31. Nc4 a5 32. Kc3 a4 33. bxa4 Bxa4 34. Kd4 Rd5+ 35. Ke3 Nxc4+ 36. Bxc4 Rd6 37. Ra1 Bc2 38. g4 Kf8 39. Ra2 Bd1 40. h3 h6 41. g5 hxg5 42. fxg5 {The endgame is winning but not simple — the passed pawn needs its king, not just its rook.} Bh5 1/2-1/2

[Event "Attacking the castled king: Chapter 2"]
[ChapterName "The critical sideline"]
[Date "2026.11.23"]
[Round "5"]
[White "Kowal, D"]
[Black "Rasmussen, I"]
[Result "0-1"]
[WhiteElo "2702"]
[BlackElo "3037"]
[ECO "E33"]
[Opening "Nimzo-Indian Defense: Classical Variation, Milner-Barry Variation"]

{Nimzo-Indian Defense: Classical Variation, Milner-Barry Variation. Book so far. The plan is the usual one: finish development, then decide which side to open.}
1. d4 Nf6 2. c4 e6 3. Nc3 Nc6 4. Nf3 Bb4 5. Qc2 d6 {A slight inaccuracy in move order — the bishop is better placed before this pawn commits.} 6. e4 O-O 7. e5 dxe5 8. dxe5 ! Ng4 {Prophylaxis. The move looks slow, and it takes away every active idea the opponent had.} (8... Ba3 Rb1 Bxb2 {was the alternative — playable, but it hands over the initiative.}) 9. a3 Bc5 10. Ne4 Nd4 11. Nxd4 Bxd4 ?! 12. Bg5 f6 13. exf6 gxf6 14. Bh4 c5 15. O-O-O Bd7 16. Qd2 Ba4 17. Re1 Qb6 18. Be2 Ne5 19. Nxf6+ Kh8 20. Kb1 Qb3 21. Bd1 Nxc4 22. Qxd4 cxd4 23. Bxb3 Bxb3 24. Nd7 Rf5 25. Bf6+ Kg8 26. Bxd4 Rd8 27. Nf6+ Kf7 28. Bc3 Rxf6 29. Bxf6 Kxf6 30. Re2 e5 31. Rc1 {Precise to the end. A pawn move here instead would have let the defence build a fortress.} a5 0-1

[Event "Attacking the castled king: Chapter 3"]
[ChapterName "A model game"]
[Date "2026.12.24"]
[Round "6"]
[White "Lindqvist, S"]
[Black "Whitlock, A"]
[Result "1-0"]
[WhiteElo "2748"]
[BlackElo "2563"]
[ECO "A79"]
[Opening "Benoni Defense: Classical Variation, Czerniak Defense"]

{Benoni Defense: Classical Variation, Czerniak Defense. Both sides have what they wanted from the opening. The middlegame will be about the centre.}
1. d4 Nf6 2. c4 e6 3. Nf3 c5 4. d5 d6 5. Nc3 exd5 {Theory ends about here. From this point the game is decided by understanding rather than memory.} 6. cxd5 g6 7. Nd2 Bg7 8. e4 ! O-O {The point of the whole plan. Material is level, but only one side has a target to attack.} (8... c4 Rb1 Nxe4 {was the alternative — playable, but it hands over the initiative.}) 9. Be2 Re8 10. O-O Na6 11. f3 Nd7 ?! 12. Nc4 Ne5 13. Ne3 Nc7 14. a4 Rb8 15. f4 Nd7 16. Nc4 Nb6 17. Nd2 Na6 18. a5 Nd7 19. Nc4 Qe7 20. Bf3 b5 21. axb6 Nxb6 22. Na5 Nb4 23. Kh1 Ba6 24. Re1 Nd3 25. Nc6 Nf2+ 26. Kg1 Nxd1 27. Nxe7+ Rxe7 28. Rxd1 Bd4+ 29. Kh1 Bc4 30. Ra5 a6 31. Ne2 Bg7 32. Ng3 h5 33. e5 dxe5 34. d6 Rd7 35. Ne4 Rdd8 36. fxe5 Bxe5 37. Bg5 Rd7 38. Rxc5 Bb3 39. Rd3 f6 40. Bxf6 Ba2 41. Bxe5 Kf7 42. Ng5+ Kg8 43. Bc6 Rdd8 44. d7 a5 45. Bxb8 Bb1 46. Bc7 Rxd7 47. Bxd7 Bxd3 {Resignation is timely: the king cannot be defended and the counterplay is one move too slow.} 48. Bxb6 1-0
`,"studies/Endgames/Bishop versus knight.pgn":`[Event "Bishop versus knight: Chapter 1"]
[ChapterName "Main line"]
[Date "2026.07.19"]
[Round "1"]
[White "Grieve, M"]
[Black "Verhoeven, J"]
[Result "0-1"]
[WhiteElo "2690"]
[BlackElo "2883"]
[ECO "B89"]
[Opening "Sicilian Defense: Velimirovic Attack"]

{Sicilian Defense: Velimirovic Attack. Book so far. The plan is the usual one: finish development, then decide which side to open.}
1. e4 c5 2. Nf3 Nc6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 d6 {A slight inaccuracy in move order — the bishop is better placed before this pawn commits.} 6. Bc4 e6 7. Be3 Be7 8. Qe2 ! a6 {The point of the whole plan. Material is level, but only one side has a target to attack.} (8... Nb4 Rb1 Nxa2 {was the alternative — playable, but it hands over the initiative.}) 9. O-O-O Qc7 10. Rhg1 h5 11. Kb1 Bd7 ?! 12. h3 h4 13. g4 hxg3 14. Rxg3 g6 15. f4 b5 16. Bb3 Na5 17. e5 dxe5 18. fxe5 Qxe5 19. Qf3 Rc8 20. Rg5 Qh2 21. Rh1 Qb8 22. Bf4 Qb7 23. Qf1 Nxb3 24. axb3 b4 25. Be5 bxc3 26. Rhg1 Nh7 27. Rxg6 fxg6 28. Bxh8 Nf8 29. Bg7 Qe4 30. Rg4 Qd5 31. bxc3 e5 32. Bxf8 Bxf8 33. Nf3 Bxg4 34. hxg4 Qe6 35. Ng5 Qd7 36. Qxa6 Qc6 37. Qa7 Be7 38. Qe3 Qxc3 39. Qe4 Qxc2+ 40. Qxc2 Rxc2 41. Ne6 {Precise to the end. A pawn move here instead would have let the defence build a fortress.} Rc6 0-1

[Event "Bishop versus knight: Chapter 2"]
[ChapterName "The critical sideline"]
[Date "2026.08.20"]
[Round "2"]
[White "Halvorsen, T"]
[Black "Oyelaran, B"]
[Result "1-0"]
[WhiteElo "3079"]
[BlackElo "2972"]
[ECO "B42"]
[Opening "Sicilian Defense: Kan Variation, Polugaevsky Variation"]

{Sicilian Defense: Kan Variation, Polugaevsky Variation. Both sides have what they wanted from the opening. The middlegame will be about the centre.}
1. e4 c5 2. Nf3 e6 3. d4 cxd4 4. Nxd4 a6 5. Bd3 Bc5 {Theory ends about here. From this point the game is decided by understanding rather than memory.} 6. Nb3 Ba7 7. Qe2 Ne7 8. Nc3 ! O-O {A long think. Both continuations are playable; this one keeps more pieces on, which suits the attacker.} (8... a5 Rb1 a4 {was the alternative — playable, but it hands over the initiative.}) 9. e5 d5 10. exd6 Qxd6 11. Be3 Qc7 ?! 12. Bxa7 Rxa7 13. Qe4 Ng6 14. Qe3 Nc6 15. O-O-O Nge5 16. Be2 b5 17. a3 Ng6 18. Kb1 Nge7 19. Rd2 b4 20. axb4 Nxb4 21. Bf3 Qb8 22. Nc5 Nf5 23. Qe4 Rc7 24. Qf4 Nc6 25. Bxc6 Qb6 26. Rhd1 Rxc6 27. N3a4 Qa5 28. b4 Qb5 29. Nc3 Qb6 30. N3a4 Qb5 31. Rd8 f6 32. Qe4 Ne7 33. Kc1 f5 34. Rxf8+ Kxf8 35. Qd4 Kf7 36. Nb2 e5 37. Qc3 Be6 38. Nbd3 Ng6 39. Qa1 e4 40. Nxe6 Rxe6 41. Nc5 Re7 42. Qa2+ Kf6 43. Qb3 Qc6 44. Qc3+ Ne5 45. g4 g6 46. gxf5 Kxf5 47. Qh3+ Ng4 48. Qg3 Ne5 49. Rd4 Nf3 50. Rd6 Qe8 51. Nd7 Qf7 52. Rf6+ Qxf6 53. Qh3+ Kg5 54. Qg3+ Kf5 55. Nxf6 Kxf6 56. Qf4+ Kg7 57. Qd6 Rb7 58. Qe6 Rf7 59. Qxa6 Nxh2 60. b5 e3 61. fxe3 Ng4 62. b6 Nxe3 63. b7 Nc4 64. c3 Rf1+ 65. Kc2 Rf2+ 66. Kb3 Nd2+ 67. Kb4 Ne4 68. Qa7 Rf7 69. Qd4+ Nf6 70. b8=Q g5 71. Qbe5 h6 72. Kc5 Kh7 73. Qf5+ Kg7 74. Qde5 g4 75. Kd6 Kg8 76. Qg6+ Rg7 77. Qgxf6 Rd7+ 78. Kxd7 Kh7 {Resignation is timely: the king cannot be defended and the counterplay is one move too slow.} 79. Qg7# 1-0

[Event "Bishop versus knight: Chapter 3"]
[ChapterName "A model game"]
[Date "2026.09.21"]
[Round "3"]
[White "Ibarra, L"]
[Black "Tavares, M"]
[Result "1/2-1/2"]
[WhiteElo "3078"]
[BlackElo "3010"]
[ECO "C78"]
[Opening "Ruy Lopez: Morphy Defense"]

{Ruy Lopez: Morphy Defense. A slight inaccuracy in move order — the bishop is better placed before this pawn commits.}
1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O b5 {Book so far. The plan is the usual one: finish development, then decide which side to open.} 6. Bb3 Bc5 7. a4 Rb8 8. c3 ! d6 {The critical moment. The pieces are as good as they are going to get; something has to happen now.} (8... bxa4 Ra2 a3 {was the alternative — playable, but it hands over the initiative.}) 9. d4 Bb6 10. a5 Ba7 11. h3 O-O ?! 12. Be3 Ra8 13. Re1 h6 14. Nbd2 Re8 15. Qc2 exd4 16. Bxd4 Bd7 17. Bxa7 Rxa7 18. Nf1 Ra8 19. Ng3 Ne5 20. Nxe5 dxe5 21. Re3 g6 22. c4 Kg7 23. cxb5 Bxb5 24. h4 Re7 25. h5 Rd7 26. hxg6 fxg6 27. Qc5 Qe7 28. Rc3 Rb8 29. Rd1 Qxc5 30. Rxc5 Re7 31. f3 h5 32. Ba2 c6 33. Nf1 Bxf1 34. Rxf1 Rxb2 35. Rf2 Reb7 36. Bc4 Rxf2 37. Kxf2 Rb2+ 38. Kg1 Rc2 39. Rxc6 Rc1+ 40. Kf2 Rc2+ 41. Kf1 Rc1+ 42. Kf2 Rc2+ 43. Kf1 Rc1+ 44. Ke2 Rc2+ {The rest is technique, which is another way of saying it still has to be played accurately.} 45. Kf1 1/2-1/2
`,"studies/Endgames/Pawn endings - opposition.pgn":`[Event "Pawn endings - opposition: Chapter 1"]
[ChapterName "Main line"]
[Date "2026.04.16"]
[Round "7"]
[White "Doyle, F"]
[Black "Sorokin, Y"]
[Result "1-0"]
[WhiteElo "3305"]
[BlackElo "2846"]
[ECO "B12"]
[Opening "Caro-Kann Defense: Advance Variation, Short Variation"]

{Caro-Kann Defense: Advance Variation, Short Variation. Both sides have what they wanted from the opening. The middlegame will be about the centre.}
1. e4 c6 2. d4 d5 3. e5 Bf5 4. Nf3 e6 5. Be2 Nd7 {Theory ends about here. From this point the game is decided by understanding rather than memory.} 6. O-O h6 7. a4 Ne7 8. a5 ! c5 {The critical moment. The pieces are as good as they are going to get; something has to happen now.} (8... Bxc2 Ra2 Bxb1 {was the alternative — playable, but it hands over the initiative.}) 9. c4 dxc4 10. Nbd2 a6 11. Nxc4 Nd5 ?! 12. Qb3 Be7 13. Nh4 Bh7 14. Qg3 Kf8 15. Nf3 Bg6 16. Ne3 Be4 17. Rd1 Rc8 18. h4 g6 19. Nc4 Kg7 20. h5 g5 21. dxc5 Nxc5 22. Nd4 Bh7 23. Nb6 Ne4 24. Qh3 Rc5 25. Be3 Qe8 26. Nxd5 Rxd5 27. Nxe6+ fxe6 28. Qxe6 Rd8 29. Rac1 Rxd1+ 30. Rxd1 Qf7 31. Qb6 Bf5 32. Bf3 Rf8 33. e6 Qxe6 34. Qxe6 Bxe6 35. Bxe4 Kf7 36. Rc1 Rc8 37. Bxb7 Rxc1+ 38. Bxc1 Bb4 39. Bxa6 Bxa5 40. Kf1 Bd5 41. Be3 Bb4 42. Bd4 Kf8 43. Be5 Be6 44. Bd3 Bd7 45. f3 Bc6 46. Bc4 Be8 47. g4 Bd7 48. Bd4 Be8 49. Kf2 Bd6 50. Bc3 Bc5+ 51. Ke2 Bb6 52. Bb4+ Kg7 53. Bc3+ Kf8 54. b4 Bc6 55. b5 Bb7 56. Bd3 Bd5 57. Bd2 Bd8 58. Kf2 Bc7 59. Bb4+ Kf7 60. Bc5 Ke6 61. Be4 Bc4 62. b6 Be5 63. b7 Ba6 64. Ba7 Ke7 65. b8=Q Bxb8 66. Bxb8 Kf7 67. Ke3 Ke7 68. Kd4 Bb5 69. Ke5 Bc4 70. Bd6+ Ke8 71. Bd5 Ba6 72. Kf6 Bf1 73. Kg7 Kd7 74. Be5 Ke7 75. Kxh6 Kf8 76. Kxg5 Bd3 77. Be4 Bxe4 78. fxe4 Kf7 79. Kf5 Ke8 80. h6 Kd7 81. Bf4 Kc6 82. h7 Kc5 83. h8=Q Kc4 84. g5 Kb4 85. g6 Kc5 86. g7 Kd4 87. g8=Q+ Kd3 88. Qb3+ Ke2 89. Qh2+ Kf1 {Resignation is timely: the king cannot be defended and the counterplay is one move too slow.} 90. Qb1# 1-0

[Event "Pawn endings - opposition: Chapter 2"]
[ChapterName "The critical sideline"]
[Date "2026.05.17"]
[Round "8"]
[White "Ekström, P"]
[Black "Zahavi, O"]
[Result "0-1"]
[WhiteElo "2837"]
[BlackElo "2846"]
[ECO "B05"]
[Opening "Alekhine Defense: Modern Variation, Panov Variation"]

{Alekhine Defense: Modern Variation, Panov Variation. A slight inaccuracy in move order — the bishop is better placed before this pawn commits.}
1. e4 Nf6 2. e5 Nd5 3. d4 d6 4. Nf3 Bg4 5. h3 Bxf3 {Book so far. The plan is the usual one: finish development, then decide which side to open.} 6. Qxf3 e6 7. Bd3 Nc6 8. exd6 ! Bxd6 {Here the exchange is tempting and wrong: trading the good bishop leaves the dark squares bare.} (8... Nc3 Nd2 Nb1 {was the alternative — playable, but it hands over the initiative.}) 9. c3 O-O 10. O-O Qf6 11. Nd2 Nf4 ?! 12. Bb1 Ng6 13. Qd1 Qe7 14. Re1 Rad8 15. g3 e5 16. Qg4 Kh8 17. Kg2 f5 18. Qh5 Qf7 19. Qd1 exd4 20. Qb3 Qf6 21. Nf3 f4 22. g4 dxc3 23. Bxg6 Qxg6 24. bxc3 h5 25. Re6 Qd3 26. Ba3 Na5 27. Qa4 Nc4 28. Rd1 Qxc3 29. Bxd6 Nxd6 30. Rd5 hxg4 31. hxg4 Kg8 32. Qd1 Qc4 33. Re7 Nf7 34. Rxd8 Rxd8 35. Qb1 Qc6 36. Qf5 Rf8 37. g5 Qd6 38. Rd7 Nxg5 39. Qg4 Qe6 40. Qxe6+ Nxe6 41. Re7 Rf6 42. Ne5 Kf8 43. Rd7 Ke8 44. Rd1 Rf5 45. Kf3 Ng5+ 46. Kg4 Rxe5 47. Rb1 Ne6 48. Rb5 Rxb5 49. Kf3 {The rest is technique, which is another way of saying it still has to be played accurately.} Re5 0-1

[Event "Pawn endings - opposition: Chapter 3"]
[ChapterName "A model game"]
[Date "2026.06.18"]
[Round "9"]
[White "Farrow, K"]
[Black "Quinn, H"]
[Result "1/2-1/2"]
[WhiteElo "2696"]
[BlackElo "2765"]
[ECO "C73"]
[Opening "Ruy Lopez: Morphy Defense, Modern Steinitz Defense"]

{Ruy Lopez: Morphy Defense, Modern Steinitz Defense. Theory ends about here. From this point the game is decided by understanding rather than memory.}
1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 d6 5. Bxc6+ bxc6 {Both sides have what they wanted from the opening. The middlegame will be about the centre.} 6. d4 f6 7. c4 g6 8. O-O ! Bg7 {Prophylaxis. The move looks slow, and it takes away every active idea the opponent had.} (8... exd4 Nbd2 d3 {was the alternative — playable, but it hands over the initiative.}) 9. Be3 Ne7 10. c5 O-O 11. Qc2 Be6 ?! 12. Rd1 Qe8 13. h3 h6 14. Nc3 f5 15. dxe5 dxe5 16. exf5 gxf5 17. Re1 Qh5 18. Bf4 e4 19. Rad1 Ng6 20. Bxc7 Bf7 21. Nd4 Rac8 22. Bd6 Rfe8 23. Qe2 Qg5 24. Kh1 a5 25. Qd2 Qh5 26. f4 Kh7 27. Qe2 Qxe2 28. Rxe2 Bxd4 29. Rxd4 Red8 30. g3 Be6 31. Kh2 Ra8 32. b3 Ne7 33. Red2 Nd5 34. Nxd5 Bxd5 35. Rxd5 cxd5 36. Rxd5 Kg6 37. Kg2 Kf6 38. Kf2 a4 39. b4 Rab8 40. a3 Rb5 41. Ke3 Rg8 42. Kf2 Re8 43. Be5+ Kf7 44. Rd6 Re6 45. Rd7+ Re7 46. Rd5 Rbb7 47. c6 Ra7 48. b5 Ra5 49. c7 Re8 50. Rd8 Ra8 51. Rxa8 Rxa8 52. b6 Ra6 53. c8=Q Rxb6 54. Qc7+ Ke6 55. Qxb6+ Kd5 56. Qxh6 Kc4 57. Qg6 Kb3 58. Qxf5 Kxa3 59. Qxe4 Kb3 60. Qxa4+ Kxa4 61. g4 Kb5 62. g5 Kc6 63. g6 Kd7 64. g7 Ke7 65. g8=Q Kd7 66. Qd5+ Ke7 67. Qd6+ Kf7 68. Qf6+ Ke8 69. Qg7 Kd8 70. Ke3 Kc8 71. Ke4 Kd8 72. Kd5 Ke8 73. Kd6 {The endgame is winning but not simple — the passed pawn needs its king, not just its rook.} Kd8 1/2-1/2
`,"studies/Endgames/Rook endings - Lucena and Philidor.pgn":`[Event "Rook endings - Lucena and Philidor: Chapter 1"]
[ChapterName "Main line"]
[Date "2026.01.13"]
[Round "4"]
[White "Alderman, R"]
[Black "Pereira, V"]
[Result "1/2-1/2"]
[WhiteElo "2994"]
[BlackElo "2933"]
[ECO "D67"]
[Opening "Queen's Gambit Declined: Orthodox Defense, Main Line"]

{Queen's Gambit Declined: Orthodox Defense, Main Line. A slight inaccuracy in move order — the bishop is better placed before this pawn commits.}
1. d4 Nf6 2. c4 e6 3. Nf3 d5 4. Nc3 c6 5. Bg5 Be7 {Book so far. The plan is the usual one: finish development, then decide which side to open.} 6. e3 Nbd7 7. Bd3 O-O 8. Rc1 ! dxc4 {Prophylaxis. The move looks slow, and it takes away every active idea the opponent had.} (8... c5 Ra1 cxd4 {was the alternative — playable, but it hands over the initiative.}) 9. Bxc4 Nd5 10. Bxe7 Qxe7 11. O-O b6 ?! 12. Bxd5 exd5 13. Qa4 Bb7 14. Rfd1 h6 15. Ne1 Rfc8 16. Nd3 Nf6 17. h3 Rc7 18. Qb4 Qd8 19. a4 Ba6 20. Ne5 Rac8 21. Qa3 c5 22. a5 bxa5 23. Qxa5 cxd4 24. Rxd4 Qd6 25. Nf3 Ne4 26. Rxd5 Qb6 27. Qxb6 axb6 28. Ne5 f6 29. Ng6 Nxc3 30. Rxc3 Rxc3 31. bxc3 Rxc3 32. Rd6 Rb3 33. Rc6 Bd3 34. Nf4 Bf5 35. Kh2 Rb2 36. f3 Bd7 37. Rd6 Be8 38. e4 Bf7 39. Rd8+ Kh7 40. Rd7 Kg8 41. Rd8+ Kh7 42. Rf8 Bc4 43. Rc8 Bf7 44. Rc7 Kg8 45. Rc8+ Kh7 46. Rc7 Kg8 47. h4 g5 48. Nd5 Bxd5 49. exd5 Rd2 50. hxg5 hxg5 51. Rc6 b5 52. Rxf6 Kg7 53. Rd6 Kf8 54. Rd7 Ke8 55. Rb7 Rxd5 56. f4 gxf4 57. Rh7 Rd3 58. Rg7 b4 59. Rb7 Rb3 60. Rh7 Rb2 61. Kh3 Rb1 62. Rh8+ Kd7 63. Rf8 b3 64. Rb8 b2 65. Kg4 Ke6 66. Re8+ Kd6 67. Rd8+ Ke5 68. Rb8 Kd4 69. Kf5 Kc3 70. Rc8+ Kb4 71. Rb8+ Ka3 72. Ra8+ Kb4 73. Rb8+ Kc3 74. Rc8+ Kd4 75. Rd8+ Ke3 76. Rb8 Kd3 77. Rd8+ Kc2 78. Rc8+ Kd2 79. Rd8+ Ke2 80. Rb8 Ke3 81. Rb7 Kd3 82. Rb8 Kc2 83. Rc8+ Kb3 84. Rb8+ Ka2 85. Ra8+ Kb3 86. Rb8+ Kc4 87. Rc8+ Kd3 88. Rd8+ Kc4 89. Rc8+ Kd5 90. Rd8+ Kc5 91. Rc8+ Kd5 92. Rd8+ Kc5 93. Rc8+ Kb5 94. Rh8 Ka5 95. Rb8 Ka4 96. Ra8+ Kb5 97. Rh8 Kc6 98. Rc8+ {The rest is technique, which is another way of saying it still has to be played accurately.} Kd5 1/2-1/2

[Event "Rook endings - Lucena and Philidor: Chapter 2"]
[ChapterName "The critical sideline"]
[Date "2026.02.14"]
[Round "5"]
[White "Bex, N"]
[Black "Ueda, K"]
[Result "1/2-1/2"]
[WhiteElo "3022"]
[BlackElo "2981"]
[ECO "B53"]
[Opening "Sicilian Defense: Chekhover Variation"]

{Sicilian Defense: Chekhover Variation. Theory ends about here. From this point the game is decided by understanding rather than memory.}
1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Qxd4 Nc6 5. Bb5 Bd7 {Both sides have what they wanted from the opening. The middlegame will be about the centre.} 6. Qd3 Nf6 7. Bg5 e6 8. Nc3 ! h6 {The point of the whole plan. Material is level, but only one side has a target to attack.} (8... Nb4 Rb1 Nxa2 {was the alternative — playable, but it hands over the initiative.}) 9. Bh4 a6 10. Bxc6 Bxc6 11. O-O-O Be7 ?! 12. Nd4 O-O 13. f4 Rc8 14. Rhe1 b5 15. e5 Ne8 16. Bxe7 Qxe7 17. exd6 Nxd6 18. Nxe6 fxe6 19. Qxd6 Qxd6 20. Rxd6 Rxf4 21. Rd2 Kf7 22. g3 Rf5 23. b3 h5 24. Ne4 Bxe4 25. Rxe4 e5 26. a4 Ke6 27. axb5 axb5 28. Rde2 Rc5 29. g4 Rf3 30. gxh5 Rxb3 31. Rg4 Rh3 32. Rg6+ Kd5 33. Rd2+ Ke4 34. Rxg7 Rxh5 35. Rg3 Kf4 36. Rf2+ Ke4 37. Re2+ Kd5 38. Rd2+ Ke6 39. Rgg2 e4 40. Rg8 Rce5 41. Re8+ Kf7 42. Rxe5 Rxe5 43. Kd1 Ke6 44. Rd4 Kf5 45. Rd8 Kf4 46. Ke2 Rh5 47. h4 Rxh4 48. Rf8+ Kg3 49. Ke3 b4 50. Rb8 Rh6 51. Rb7 Ra6 52. Rg7+ Kh2 53. Re7 b3 54. cxb3 Rb6 55. Kf4 Rxb3 56. Rxe4 Rb1 57. Kf5 Ra1 58. Kg4 Rb1 59. Re8 Ra1 60. Re5 Rb1 61. Rh5+ Kg1 62. Rg5 Ra1 63. Kf3+ Kf1 64. Rh5 Ra3+ 65. Kf4 Ra2 66. Rh1+ Kg2 67. Re1 Rb2 68. Re6 Rb1 69. Rg6+ Kf1 70. Kf5 Ra1 71. Ke4 Rb1 72. Rh6 Rd1 73. Rh1+ Ke2 74. Rh2+ Kf1 75. Rh1+ Ke2 76. Rh7 Rb1 77. Rg7 Ra1 78. Rh7 Rb1 79. Rg7 Ra1 80. Rh7 {The endgame is winning but not simple — the passed pawn needs its king, not just its rook.} Rb1 1/2-1/2

[Event "Rook endings - Lucena and Philidor: Chapter 3"]
[ChapterName "A model game"]
[Date "2026.03.15"]
[Round "6"]
[White "Castellan, J"]
[Black "Novak, E"]
[Result "1/2-1/2"]
[WhiteElo "2743"]
[BlackElo "2699"]
[ECO "A12"]
[Opening "Réti Opening: Anglo-Slav Variation, Capablanca Variation"]

{Réti Opening: Anglo-Slav Variation, Capablanca Variation. Book so far. The plan is the usual one: finish development, then decide which side to open.}
1. Nf3 c6 2. b3 d5 3. Bb2 Nf6 4. c4 Bg4 5. h3 Bh5 {A slight inaccuracy in move order — the bishop is better placed before this pawn commits.} 6. g4 Bg6 7. d3 e6 8. Nbd2 ! Nbd7 {A long think. Both continuations are playable; this one keeps more pieces on, which suits the attacker.} (8... dxc4 Rb1 cxb3 {was the alternative — playable, but it hands over the initiative.}) 9. Bg2 Bc5 10. a3 a5 11. g5 Nh5 ?! 12. d4 Be7 13. h4 h6 14. e3 hxg5 15. hxg5 Bxg5 16. Nxg5 Qxg5 17. Bf3 O-O-O 18. Bc3 Nhf6 19. Rxh8 Rxh8 20. Qe2 Ne4 21. Bxe4 Bxe4 22. Nxe4 dxe4 23. O-O-O Rh2 24. c5 a4 25. bxa4 Qf5 26. Be1 Qd5 27. Kb2 f5 28. Ka1 Qb3 29. Bb4 Rxf2 30. Qxf2 Qxd1+ 31. Kb2 Nf6 32. Qg3 Qe2+ 33. Ka1 Qf1+ 34. Kb2 Qe2+ 35. Ka1 Nd5 36. Qxg7 Qd1+ 37. Kb2 Qe2+ 38. Ka1 Qf1+ 39. Kb2 Qf2+ 40. Ka1 Nxb4 41. axb4 Qe1+ 42. Ka2 Qd2+ 43. Kb3 Qxe3+ 44. Kb2 Qd2+ 45. Kb3 Qd3+ 46. Kb2 Qc4 47. Qf8+ Kd7 48. Qd6+ Ke8 49. Qb8+ Kf7 50. Qc7+ Kf6 51. Qe5+ Kg6 52. Qg3+ Kf7 53. Qc7+ Kg6 54. Qg3+ Kf7 {Precise to the end. A pawn move here instead would have let the defence build a fortress.} 55. Qc7+ 1/2-1/2
`,"studies/Minority attack.pgn":`[Event "Minority attack: Chapter 1"]
[ChapterName "Main line"]
[Date "2026.07.04"]
[Round "4"]
[White "Grieve, M"]
[Black "Verhoeven, J"]
[Result "1/2-1/2"]
[WhiteElo "2888"]
[BlackElo "2982"]
[ECO "A38"]
[Opening "English Opening: Symmetrical Variation, Full Symmetry Line"]

{English Opening: Symmetrical Variation, Full Symmetry Line. Book so far. The plan is the usual one: finish development, then decide which side to open.}
1. c4 c5 2. g3 g6 3. Nf3 Bg7 4. Bg2 Nc6 5. Nc3 Nf6 {A slight inaccuracy in move order — the bishop is better placed before this pawn commits.} 6. d4 cxd4 7. Nxd4 h5 8. h3 ! Nxd4 {The critical moment. The pieces are as good as they are going to get; something has to happen now.} (8... h4 Rb1 hxg3 {was the alternative — playable, but it hands over the initiative.}) 9. Qxd4 O-O 10. Bd2 d6 11. Rc1 a5 ?! 12. O-O a4 13. Rfd1 Bf5 14. Qe3 Qd7 15. Kh2 h4 16. gxh4 Rfc8 17. b3 Rc5 18. Nd5 Nxd5 19. Bxd5 Be5+ 20. Kg2 Bb2 21. h5 axb3 22. axb3 e6 23. Bf3 Qe7 24. Qf4 gxh5 25. Be3 Bxc1 26. Bxc1 Bc2 27. Rxd6 e5 28. Qg3+ Bg6 29. b4 Qxd6 30. bxc5 {Precise to the end. A pawn move here instead would have let the defence build a fortress.} Qe7 1/2-1/2

[Event "Minority attack: Chapter 2"]
[ChapterName "The critical sideline"]
[Date "2026.08.05"]
[Round "5"]
[White "Halvorsen, T"]
[Black "Oyelaran, B"]
[Result "1/2-1/2"]
[WhiteElo "3029"]
[BlackElo "3035"]
[ECO "C92"]
[Opening "Ruy Lopez: Closed"]

{Ruy Lopez: Closed. Both sides have what they wanted from the opening. The middlegame will be about the centre.}
1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Be7 5. O-O Nf6 {Theory ends about here. From this point the game is decided by understanding rather than memory.} 6. Re1 b5 7. Bb3 d6 8. c3 ! O-O {Here the exchange is tempting and wrong: trading the good bishop leaves the dark squares bare.} (8... b4 Na3 bxa3 {was the alternative — playable, but it hands over the initiative.}) 9. h3 a5 10. d4 Bb7 11. Qe2 a4 ?! 12. Bc2 Ba6 13. Nbd2 b4 14. Qe3 Bb5 15. dxe5 bxc3 16. bxc3 Nxe5 17. Rb1 Bc6 18. Nd4 Bd7 19. f4 Ng6 20. c4 a3 21. N2f3 Re8 22. Nb5 c6 23. Nc3 Bf8 24. Qd3 Rb8 25. Rxb8 Qxb8 26. Be3 Qc7 27. Rd1 Qa5 28. Qd2 Bc8 29. Rb1 Nd7 30. Nd4 Ne7 31. Nb3 Qc7 32. Qc1 Ba6 33. c5 dxc5 34. Qxa3 Qc8 35. Qc1 c4 36. Nd2 Ng6 37. e5 f6 38. Nde4 fxe5 39. f5 Nf4 40. Bxf4 exf4 41. Qxf4 Qd8 42. Rd1 Qe7 43. Qf2 Nf6 44. Nxf6+ gxf6 45. Ne4 Rd8 46. Rxd8 Qxd8 47. Qa7 Bc8 48. g4 c5 49. Kf1 Qd4 50. Qa8 Qb2 51. Qd5+ Kg7 52. Qxc4 Bb7 53. a4 Bxe4 54. Qxe4 Qc3 55. Bd3 c4 56. Qxc4 Qd2 57. Qd4 Bb4 58. h4 Qd1+ 59. Kg2 Qxa4 60. g5 Qa8+ 61. Be4 Qa2+ 62. Kg3 Be7 63. h5 Qa3+ 64. Kg4 Qd6 65. h6+ Kh8 66. Qxd6 {Resignation is timely: the king cannot be defended and the counterplay is one move too slow.} Bxd6 1/2-1/2

[Event "Minority attack: Chapter 3"]
[ChapterName "A model game"]
[Date "2026.09.06"]
[Round "6"]
[White "Ibarra, L"]
[Black "Tavares, M"]
[Result "1/2-1/2"]
[WhiteElo "3030"]
[BlackElo "2902"]
[ECO "E73"]
[Opening "King's Indian Defense: Semi-Averbakh System"]

{King's Indian Defense: Semi-Averbakh System. A slight inaccuracy in move order — the bishop is better placed before this pawn commits.}
1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 d6 5. Be2 O-O {Book so far. The plan is the usual one: finish development, then decide which side to open.} 6. Be3 Na6 7. h3 e5 8. d5 ! Nc5 {Prophylaxis. The move looks slow, and it takes away every active idea the opponent had.} (8... Nb4 Rb1 Nxa2 {was the alternative — playable, but it hands over the initiative.}) 9. Qc2 Ne8 10. b4 Nd7 11. Nf3 a5 ?! 12. b5 f5 13. g4 Qe7 14. Rg1 Nc5 15. O-O-O Nxe4 16. Nxe4 fxe4 17. Ng5 a4 18. h4 Bh6 19. Qd2 Bd7 20. Rg3 Nf6 21. Rh1 a3 22. h5 gxh5 23. Nxh7 Bxe3 24. Nxf6+ Qxf6 25. fxe3 h4 26. Rgh3 Kg7 27. Rxh4 Rh8 28. Rh5 Rxh5 29. gxh5 Qg5 30. c5 Kh6 31. Bc4 b6 32. cxd6 cxd6 33. Kc2 Bg4 34. Qb4 Rc8 35. Qxd6+ Kg7 36. Qxb6 Rxc4+ 37. Kb3 Rc8 38. h6+ Kh8 39. Rg1 Rg8 40. Kb4 Qe7+ 41. Qc5 Qh4 42. Rc1 Bd7 43. Qd6 Qh2 44. Qf6+ Kh7 45. Qf7+ Kh8 46. Qf6+ Kh7 47. Qe7+ Kh8 48. Rc3 Qb2+ 49. Rb3 Qd2+ 50. Kc5 Qxa2 51. Qxe5+ Kh7 52. Qxe4+ Kh8 53. Qd4+ Kh7 54. Qe4+ Kh8 55. Qe5+ Kh7 {The rest is technique, which is another way of saying it still has to be played accurately.} 56. Qe4+ 1/2-1/2
`,"studies/Open files and outposts.pgn":`[Event "Open files and outposts: Chapter 1"]
[ChapterName "Main line"]
[Date "2026.10.07"]
[Round "7"]
[White "Jessel, A"]
[Black "Marchetti, C"]
[Result "1-0"]
[WhiteElo "2915"]
[BlackElo "2814"]
[ECO "A94"]
[Opening "Dutch Defense: Stonewall Variation"]

{Dutch Defense: Stonewall Variation. Theory ends about here. From this point the game is decided by understanding rather than memory.}
1. d4 d5 2. Nf3 e6 3. g3 f5 4. c4 Nf6 5. Bg2 c6 {Both sides have what they wanted from the opening. The middlegame will be about the centre.} 6. O-O Be7 7. b3 O-O 8. Ba3 ! Bxa3 {The point of the whole plan. Material is level, but only one side has a target to attack.} (8... dxc4 Nbd2 cxb3 {was the alternative — playable, but it hands over the initiative.}) 9. Nxa3 Qe7 10. Qc1 Rd8 11. Nc2 b6 ?! 12. Nce1 Ba6 13. Nd3 Nbd7 14. Qe3 dxc4 15. bxc4 Bxc4 16. Nfe5 Nxe5 17. Nxe5 Bd5 18. Nxc6 Bxc6 19. Bxc6 Rac8 20. Rac1 Qd6 21. Bf3 Nd5 22. Qb3 Qd7 23. e3 g6 24. h4 Kg7 25. Kg2 h6 26. Rh1 Nf6 27. a4 g5 28. hxg5 hxg5 29. Qb5 g4 30. Bc6 Qd6 31. Bb7 Rb8 32. Qc6 Qe7 33. Ba6 Rd7 34. Bb5 Rbd8 35. Qc3 Nd5 36. Qa1 Rc7 37. Rxc7 Qxc7 38. Rc1 Qf7 39. Bc6 Nf6 40. d5 exd5 41. Qe5 Kg6 42. Bb5 d4 43. exd4 Qb3 44. Rc6 Qf7 45. Bc4 Qf8 46. Bd3 Qf7 47. Qxf5+ Kg7 {The endgame is winning but not simple — the passed pawn needs its king, not just its rook.} 48. Qg5+ 1-0

[Event "Open files and outposts: Chapter 2"]
[ChapterName "The critical sideline"]
[Date "2026.11.08"]
[Round "8"]
[White "Kowal, D"]
[Black "Rasmussen, I"]
[Result "1-0"]
[WhiteElo "2750"]
[BlackElo "2719"]
[ECO "D70"]
[Opening "Neo-Grünfeld Defense: with Nf3"]

{Neo-Grünfeld Defense: with Nf3. Book so far. The plan is the usual one: finish development, then decide which side to open.}
1. d4 Nf6 2. c4 g6 3. Nf3 d5 4. cxd5 Bg7 5. Qa4+ Bd7 {A slight inaccuracy in move order — the bishop is better placed before this pawn commits.} 6. Qb3 b5 7. Nc3 a5 8. a3 ! Na6 {A long think. Both continuations are playable; this one keeps more pieces on, which suits the attacker.} (8... a4 Rb1 axb3 {was the alternative — playable, but it hands over the initiative.}) 9. e4 b4 10. axb4 axb4 11. Rxa6 Rxa6 ?! 12. Bxa6 bxc3 13. e5 cxb2 14. Bxb2 Ne4 15. O-O Bg4 16. Bb5+ Kf8 17. Re1 f5 18. Bc1 Qb8 19. Qc4 Bxf3 20. gxf3 Nc3 21. Bc6 Nb1 22. Re2 Qa7 23. Ra2 Qb6 24. Rb2 Na3 25. Rxb6 Nxc4 26. Rb7 Nxe5 27. dxe5 Bxe5 28. Rb8+ Kf7 29. Rxh8 Bxh8 30. Bf4 e5 31. dxe6+ Kxe6 32. Bxc7 g5 33. f4 g4 34. Kg2 h5 35. Bd8 Bc3 36. Be8 Bd2 37. Kg3 Kd5 38. Bxh5 Ke4 39. Bg5 Be1 40. Bg6 Bd2 41. Be8 Be1 42. Bc6+ Kd3 43. Bd7 Ke4 44. Ba4 Kd3 45. Bd1 Kd2 46. Bxg4 fxg4 47. Kxg4 Bxf2 48. f5+ Kd3 49. f6 Ke4 50. f7 Bc5 51. Bh6 Ke5 52. f8=R Bxf8 53. Bxf8 Kf6 54. Bh6 Kg6 55. Bg5 Kh7 56. h4 Kg8 57. h5 Kh7 58. Kf5 Kg8 59. Kg6 Kh8 60. h6 Kg8 61. h7+ Kf8 {Precise to the end. A pawn move here instead would have let the defence build a fortress.} 62. h8=R# 1-0

[Event "Open files and outposts: Chapter 3"]
[ChapterName "A model game"]
[Date "2026.12.09"]
[Round "9"]
[White "Lindqvist, S"]
[Black "Whitlock, A"]
[Result "0-1"]
[WhiteElo "2688"]
[BlackElo "2730"]
[ECO "A68"]
[Opening "Benoni Defense: Four Pawns Attack"]

{Benoni Defense: Four Pawns Attack. Both sides have what they wanted from the opening. The middlegame will be about the centre.}
1. d4 Nf6 2. c4 c5 3. d5 e6 4. Nc3 exd5 5. cxd5 d6 {Theory ends about here. From this point the game is decided by understanding rather than memory.} 6. e4 g6 7. f4 Bg7 8. Nf3 ! O-O {The critical moment. The pieces are as good as they are going to get; something has to happen now.} (8... c4 Rb1 Nxe4 {was the alternative — playable, but it hands over the initiative.}) 9. Bd3 b5 10. O-O c4 11. Bc2 b4 ?! 12. Ne2 Qb6+ 13. Kh1 Re8 14. Ng3 Ng4 15. Qe1 Ba6 16. h3 c3 17. hxg4 Bxf1 18. Be3 Qc7 19. Ba4 cxb2 20. Rb1 Bd3 21. Bxe8 Qc2 22. Rxb2 Qxb2 23. e5 Na6 24. Bc6 Rf8 25. e6 Nc7 26. e7 Rc8 27. Bxa7 Qxa2 28. Bb6 Ne8 29. Ng5 b3 30. Nxf7 Qa1 31. Qxa1 Bxa1 32. Bd7 Kxf7 33. Bxc8 b2 34. Be6+ Kxe7 35. f5 b1=Q+ 36. Kh2 Be5 37. Kh3 Qxb6 38. fxg6 Qe3 {Resignation is timely: the king cannot be defended and the counterplay is one move too slow.} 39. Kh4 0-1
`,"studies/Openings/Catalan - the long diagonal.pgn":`[Event "Catalan - the long diagonal: Chapter 1"]
[ChapterName "Main line"]
[Date "2026.10.10"]
[Round "1"]
[White "Jessel, A"]
[Black "Marchetti, C"]
[Result "0-1"]
[WhiteElo "2502"]
[BlackElo "2528"]
[ECO "D69"]
[Opening "Queen's Gambit Declined: Orthodox Defense, Classical Variation"]

{Queen's Gambit Declined: Orthodox Defense, Classical Variation. Theory ends about here. From this point the game is decided by understanding rather than memory.}
1. d4 d5 2. c4 e6 3. Nc3 Nf6 4. Nf3 Nbd7 5. Bg5 Be7 {Both sides have what they wanted from the opening. The middlegame will be about the centre.} 6. e3 Ne4 7. Bxe7 Qxe7 8. Rc1 ! c6 {A long think. Both continuations are playable; this one keeps more pieces on, which suits the attacker.} (8... Nd2 Ra1 Nb1 {was the alternative — playable, but it hands over the initiative.}) 9. Bd3 Nxc3 10. Rxc3 O-O 11. O-O dxc4 ?! 12. Bxc4 e5 13. Nxe5 Nxe5 14. dxe5 Qxe5 15. f4 Qe7 16. Qc2 Be6 17. Bd3 f5 18. e4 fxe4 19. Bxe4 h6 20. Re3 Qf6 21. Rfe1 Bf7 22. g3 Rfe8 23. Bh7+ Kh8 24. Rxe8+ Rxe8 25. Rxe8+ Bxe8 26. Bf5 Qd4+ 27. Kg2 Bf7 28. Be4 Bxa2 29. Bf3 Bd5 30. Qg6 Qxb2+ 31. Kh3 {The endgame is winning but not simple — the passed pawn needs its king, not just its rook.} Bxf3 0-1

[Event "Catalan - the long diagonal: Chapter 2"]
[ChapterName "The critical sideline"]
[Date "2026.11.11"]
[Round "2"]
[White "Kowal, D"]
[Black "Rasmussen, I"]
[Result "1/2-1/2"]
[WhiteElo "3058"]
[BlackElo "3078"]
[ECO "E54"]
[Opening "Nimzo-Indian Defense: Normal Variation, Gligoric System, Exchange Variation"]

{Nimzo-Indian Defense: Normal Variation, Gligoric System, Exchange Variation. Book so far. The plan is the usual one: finish development, then decide which side to open.}
1. d4 Nf6 2. c4 e6 3. Nf3 d5 4. Nc3 Bb4 5. e3 O-O {A slight inaccuracy in move order — the bishop is better placed before this pawn commits.} 6. Bd3 dxc4 7. Bxc4 c5 8. O-O ! cxd4 {The critical moment. The pieces are as good as they are going to get; something has to happen now.} (8... Ba3 Rb1 Bxb2 {was the alternative — playable, but it hands over the initiative.}) 9. exd4 b6 10. Bg5 Bb7 11. Qe2 Nbd7 ?! 12. Rac1 Bxc3 13. Rxc3 Qb8 14. h3 Rc8 15. Re1 a6 16. Bd3 Rxc3 17. bxc3 b5 18. a4 h6 19. Bxf6 Nxf6 20. axb5 axb5 21. Ne5 Ra5 22. Rb1 Qc7 23. Qc2 Nd5 24. c4 bxc4 25. Qxc4 Ra7 26. Qc5 Qxc5 27. dxc5 f6 28. Nc4 g5 29. Be4 Kg7 30. Ne3 h5 31. h4 gxh4 32. Bxd5 Bxd5 33. Nxd5 exd5 34. c6 Kg6 35. Rc1 Rc7 36. Rc5 f5 37. Rxd5 Rxc6 38. Kh2 Kg5 39. Rd8 Rc2 40. Rg8+ Kf4 41. Rh8 Rxf2 42. Rxh5 h3 43. Kxh3 Rf1 44. g4 fxg4+ 45. Kh2 g3+ 46. Kg2 Ra1 47. Rh8 Rb1 48. Rg8 Ra1 49. Rxg3 Rb1 50. Ra3 Rc1 51. Rh3 Ra1 52. Rh6 Rb1 53. Ra6 Rc1 54. Kf2 Rb1 55. Rh6 Ra1 56. Rf6+ Ke4 57. Kg2 Rb1 58. Rd6 Ra1 59. Rd8 Rb1 60. Kh3 Ra1 61. Rb8 Rc1 62. Kg2 Ra1 63. Kg3 Rc1 64. Rb2 Ra1 65. Rb4+ Kd3 66. Kf4 Rc1 67. Kg5 Ra1 68. Rb7 Rc1 69. Kf6 Ra1 70. Kg7 Rc1 71. Rd7+ Kc2 72. Rd6 Ra1 73. Kf7 Rb1 74. Rh6 Ra1 75. Kg8 Rb1 76. Kf7 Ra1 77. Rb6 Rb1 78. Rxb1 {Precise to the end. A pawn move here instead would have let the defence build a fortress.} Kxb1 1/2-1/2

[Event "Catalan - the long diagonal: Chapter 3"]
[ChapterName "A model game"]
[Date "2026.12.12"]
[Round "3"]
[White "Lindqvist, S"]
[Black "Whitlock, A"]
[Result "1/2-1/2"]
[WhiteElo "2996"]
[BlackElo "2972"]
[ECO "D49"]
[Opening "Semi-Slav Defense: Meran Variation, Blumenfeld Variation"]

{Semi-Slav Defense: Meran Variation, Blumenfeld Variation. Both sides have what they wanted from the opening. The middlegame will be about the centre.}
1. d4 Nf6 2. c4 e6 3. Nf3 d5 4. Nc3 c6 5. e3 Nbd7 {Theory ends about here. From this point the game is decided by understanding rather than memory.} 6. Bd3 dxc4 7. Bxc4 b5 8. Bd3 ! a6 {Here the exchange is tempting and wrong: trading the good bishop leaves the dark squares bare.} (8... b4 Rb1 b3 {was the alternative — playable, but it hands over the initiative.}) 9. e4 c5 10. e5 cxd4 11. Nxb5 axb5 ?! 12. exf6 gxf6 13. O-O Qb6 14. Qe2 b4 15. Bf4 Bc5 16. Nd2 Bb7 17. a4 e5 18. Ne4 Rg8 19. a5 Qe6 20. Bg3 Be7 21. a6 Bd5 22. a7 f5 23. Ra6 Nb6 24. Nd2 Kf8 25. Bxf5 Qxf5 26. Rxb6 Rxa7 27. Rb8+ Kg7 28. Bxe5+ f6 29. Bxd4 Rd7 30. Rxg8+ Kxg8 31. Ra1 h5 32. Be3 Qg6 33. f3 Qc2 34. Qb5 Bc6 35. Qc4+ Qxc4 36. Nxc4 Kf7 37. Ra5 Rd5 38. Ra7 Rd7 39. Ra5 Rd5 40. Ra7 Rd7 {Resignation is timely: the king cannot be defended and the counterplay is one move too slow.} 41. Ra5 1/2-1/2
`,"studies/Openings/Queens Gambit Declined.pgn":`[Event "Queens Gambit Declined: Chapter 1"]
[ChapterName "Main line"]
[Date "2026.07.07"]
[Round "7"]
[White "Grieve, M"]
[Black "Verhoeven, J"]
[Result "0-1"]
[WhiteElo "2911"]
[BlackElo "2784"]
[ECO "B44"]
[Opening "Sicilian Defense: Taimanov Variation"]

{Sicilian Defense: Taimanov Variation. Book so far. The plan is the usual one: finish development, then decide which side to open.}
1. e4 c5 2. Nf3 e6 3. d4 cxd4 4. Nxd4 Nc6 5. a3 Nf6 {A slight inaccuracy in move order — the bishop is better placed before this pawn commits.} 6. Nc3 d6 7. Be3 Be7 8. Qe2 ! Nxd4 {Here the exchange is tempting and wrong: trading the good bishop leaves the dark squares bare.} (8... Nb4 Rb1 Na2 {was the alternative — playable, but it hands over the initiative.}) 9. Bxd4 e5 10. Be3 O-O 11. O-O-O Be6 ?! 12. f3 Rc8 13. Qd2 a6 14. Kb1 b5 15. g4 Nd7 16. h4 Nb6 17. g5 Nc4 18. Bxc4 Rxc4 19. Nd5 Bxd5 20. Qxd5 Qc7 21. Rh2 b4 22. a4 Rb8 23. b3 Rc3 24. Rd3 Rc8 25. Rxc3 Qxc3 26. Qd2 g6 27. Rf2 f5 28. Qxc3 bxc3 29. Ka2 Kf7 30. Re2 Ke6 31. Bb6 fxe4 32. fxe4 Rf8 33. Rf2 Rxf2 34. Bxf2 d5 35. exd5+ Kxd5 36. Be1 Bb4 37. Kb1 Ke4 38. Kc1 Kf3 39. Kd1 {Precise to the end. A pawn move here instead would have let the defence build a fortress.} e4 0-1

[Event "Queens Gambit Declined: Chapter 2"]
[ChapterName "The critical sideline"]
[Date "2026.08.08"]
[Round "8"]
[White "Halvorsen, T"]
[Black "Oyelaran, B"]
[Result "0-1"]
[WhiteElo "2959"]
[BlackElo "3076"]
[ECO "D48"]
[Opening "Semi-Slav Defense: Meran Variation, Reynolds' Variation"]

{Semi-Slav Defense: Meran Variation, Reynolds' Variation. Both sides have what they wanted from the opening. The middlegame will be about the centre.}
1. d4 Nf6 2. c4 e6 3. Nf3 d5 4. Nc3 c6 5. e3 Nbd7 {Theory ends about here. From this point the game is decided by understanding rather than memory.} 6. Bd3 dxc4 7. Bxc4 b5 8. Bd3 ! a6 {Prophylaxis. The move looks slow, and it takes away every active idea the opponent had.} (8... b4 Rb1 b3 {was the alternative — playable, but it hands over the initiative.}) 9. e4 c5 10. d5 c4 11. Bc2 e5 ?! 12. O-O Bd6 13. Ne2 O-O 14. b3 Nb6 15. h3 Bd7 16. Ng3 Qc7 17. Nh4 g6 18. Bg5 Ne8 19. bxc4 Nxc4 20. Bh6 Ng7 21. Qe2 Rfc8 22. Bd3 Qd8 23. Nf3 Nb6 24. Kh1 Qe7 25. Nh2 Rab8 26. Rac1 Rxc1 27. Rxc1 Rc8 28. Rxc8+ Bxc8 29. Ngf1 Ne8 30. Qe1 Qc7 31. Bd2 Na4 32. Ne3 Bc5 33. g4 Bb6 34. Kg2 Nc5 35. Bc2 Nd6 36. Qb1 Qd8 37. Nf3 f6 38. Bc1 h6 39. Nh2 h5 40. Nhf1 a5 41. gxh5 gxh5 42. Ng3 h4 43. Ngf5 Bxf5 44. exf5 Kf8 45. Bd2 Ke7 46. Kh2 Qg8 47. Qe1 Ncb7 48. Qd1 Qc8 49. Bb1 Qc5 50. Ng4 Nc4 51. Bh6 Nbd6 52. Qg1 Ne8 53. Qg2 Qd6 54. Be4 Kd8 55. Qf3 a4 56. Kg1 Qb4 57. Bd3 Ncd6 58. Bf8 Qd2 59. Qe2 Qxe2 60. Bxe2 b4 61. Bd3 e4 62. Bb1 Bd4 63. Kf1 Kd7 64. f3 exf3 65. Nh2 f2 66. Ng4 Nc7 67. Nxf2 Bxf2 68. Kxf2 Nxd5 69. Bh6 Nc3 70. Bc2 a3 71. Bb3 Nce4+ 72. Kf3 Nc5 73. Bd2 Nxb3 74. Bxb4 Nd4+ 75. Kg4 Nc2 76. Ba5 Nc4 77. Bc3 N4e3+ 78. Kxh4 Nd5 79. Bd2 Ndb4 80. Kg3 Nxa2 81. Kf3 Nd4+ 82. Ke3 Nb5 83. Kf3 Ke7 84. h4 Kf7 85. Kg2 Nac3 86. Bc1 a2 87. Bb2 Nd1 88. Ba1 Na3 89. Kf3 Nc2 90. Ke4 Nxa1 91. Kd5 Nc2 92. Ke4 a1=Q 93. Kd3 Qc3+ 94. Ke2 Nd4+ 95. Kxd1 Qc2+ 96. Ke1 {Resignation is timely: the king cannot be defended and the counterplay is one move too slow.} Qe2# 0-1

[Event "Queens Gambit Declined: Chapter 3"]
[ChapterName "A model game"]
[Date "2026.09.09"]
[Round "9"]
[White "Ibarra, L"]
[Black "Tavares, M"]
[Result "1/2-1/2"]
[WhiteElo "3023"]
[BlackElo "3027"]
[ECO "C97"]
[Opening "Ruy Lopez: Closed, Chigorin Defense"]

{Ruy Lopez: Closed, Chigorin Defense. A slight inaccuracy in move order — the bishop is better placed before this pawn commits.}
1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Be7 {Book so far. The plan is the usual one: finish development, then decide which side to open.} 6. Re1 b5 7. Bb3 O-O 8. c3 ! d6 {The point of the whole plan. Material is level, but only one side has a target to attack.} (8... b4 Na3 bxa3 {was the alternative — playable, but it hands over the initiative.}) 9. h3 Na5 10. Bc2 c5 11. d4 Qc7 ?! 12. d5 Nd7 13. b3 Nb6 14. Nbd2 Bd7 15. Nf1 Nb7 16. Ng3 a5 17. Nf5 Bd8 18. g4 Bf6 19. Be3 a4 20. Qe2 Bxf5 21. gxf5 b4 22. bxa4 Nxa4 23. cxb4 cxb4 24. Bxa4 Rxa4 25. Qb5 Rfa8 26. Rec1 Qb8 27. Rab1 Nc5 28. Qxb8+ Rxb8 29. Bxc5 dxc5 30. Rxc5 g6 31. fxg6 hxg6 32. Rc4 Kg7 33. Rb2 Rb5 34. Kf1 Rb8 35. Kg2 Rb7 36. Kg3 Rb6 37. Kh2 Rb8 38. Kg1 Rb5 39. Kg2 Rb7 40. h4 Kh6 41. Kh3 Kg7 42. Kg2 Kh6 43. Kg3 Kg7 44. Kh3 Rb8 45. Kg2 Rb7 46. Kg3 Rb6 47. Nh2 Be7 48. Nf3 Rba6 49. Rc7 Bd6 50. Rb7 Ra7 51. Rb6 R7a6 52. Rb7 Ra7 53. Rb6 R7a6 54. Rc6 Rxc6 55. dxc6 Bc7 56. Kg2 Ra6 57. Rc2 Ra3 58. Rd2 Ra6 59. Rc2 Ra3 60. Ne1 Kf6 61. Kf1 Ke6 62. Ke2 Kd6 63. Nd3 b3 64. axb3 Rxb3 65. Nc5 Rb6 66. Nb7+ Ke7 67. f3 Ra6 68. Kd3 f5 69. Rc5 Kf7 70. Kc4 Ke6 71. Kb5 Rb6+ 72. Kc4 Ra6 73. Kb3 Kf7 74. Rc3 Rb6+ 75. Kc2 Ke7 76. Rc5 Ra6 77. Kb3 Rb6+ 78. Kc4 Ke6 79. Kd3 Ra6 80. Kc2 Ke7 81. Kc3 Rb6 82. Rc4 Kf7 83. Rc5 Ra6 84. Kd3 Kf6 85. Kd2 Ra4 86. Kd3 Ra6 87. Rc3 Kg7 88. exf5 gxf5 89. Rc5 Kf6 90. h5 Ra3+ 91. Rc3 e4+ 92. fxe4 {The rest is technique, which is another way of saying it still has to be played accurately.} fxe4+ 1/2-1/2
`,"studies/Openings/Ruy Lopez - the Berlin.pgn":`[Event "Ruy Lopez - the Berlin: Chapter 1"]
[ChapterName "Main line"]
[Date "2026.01.01"]
[Round "1"]
[White "Alderman, R"]
[Black "Pereira, V"]
[Result "1/2-1/2"]
[WhiteElo "2956"]
[BlackElo "2981"]
[ECO "B45"]
[Opening "Sicilian Defense: Taimanov Variation, Normal Variation"]

{Sicilian Defense: Taimanov Variation, Normal Variation. A slight inaccuracy in move order — the bishop is better placed before this pawn commits.}
1. e4 c5 2. Nf3 Nc6 3. d4 cxd4 4. Nxd4 e6 5. Nc3 d6 {Book so far. The plan is the usual one: finish development, then decide which side to open.} 6. g4 a6 7. Be3 Nge7 8. Nb3 ! b5 {The critical moment. The pieces are as good as they are going to get; something has to happen now.} (8... a5 Rb1 a4 {was the alternative — playable, but it hands over the initiative.}) 9. f4 g5 10. f5 Ne5 11. Be2 h5 ?! 12. fxe6 Bxe6 13. Qd2 hxg4 14. O-O-O b4 15. Nd5 Nxd5 16. exd5 Bf5 17. Nd4 Be4 18. Nc6 Qc8 19. Nxe5 dxe5 20. Rhf1 b3 21. axb3 Rxh2 22. c4 Qb7 23. Bg1 Rg2 24. Rf6 Be7 25. Rb6 Qd7 26. Rh6 f6 27. Rh8+ Bf8 28. d6 Kf7 29. c5 Kg7 30. Rh2 Rxh2 31. Bxh2 Qc6 32. Qc3 Bf5 33. Bg1 Rd8 34. b4 g3 35. Rd2 Qg2 36. Qe3 Qc6 37. Qc3 Be4 38. Bc4 g2 39. b3 Bxd6 {The rest is technique, which is another way of saying it still has to be played accurately.} 40. cxd6 1/2-1/2

[Event "Ruy Lopez - the Berlin: Chapter 2"]
[ChapterName "The critical sideline"]
[Date "2026.02.02"]
[Round "2"]
[White "Bex, N"]
[Black "Ueda, K"]
[Result "1/2-1/2"]
[WhiteElo "2978"]
[BlackElo "2760"]
[ECO "B41"]
[Opening "Sicilian Defense: Kan Variation, Maróczy Bind, Réti Variation"]

{Sicilian Defense: Kan Variation, Maróczy Bind, Réti Variation. Theory ends about here. From this point the game is decided by understanding rather than memory.}
1. e4 c5 2. Nf3 e6 3. d4 cxd4 4. Nxd4 a6 5. c4 Nf6 {Both sides have what they wanted from the opening. The middlegame will be about the centre.} 6. Nc3 Bb4 7. Qd3 Qc7 8. Nc2 ! Bd6 {Here the exchange is tempting and wrong: trading the good bishop leaves the dark squares bare.} (8... Ba3 Rb1 Bxb2 {was the alternative — playable, but it hands over the initiative.}) 9. g3 O-O 10. Bg2 Nc6 11. Qe2 Be5 ?! 12. O-O Na5 13. Ne3 b5 14. cxb5 axb5 15. Nxb5 Qb6 16. Qd3 Ba6 17. a4 Nc6 18. Bd2 Rab8 19. Nc4 Bxb5 20. axb5 Qxb5 21. Nxe5 Qxe5 22. Bc3 Qc5 23. Rfd1 h6 24. Rdc1 e5 25. Ra4 Qe7 26. Rb1 Rb3 27. Rba1 Rbb8 28. Rd1 Rfe8 29. Rb1 Rb3 30. Rba1 Rbb8 31. Bf1 Nb4 32. Qc4 d5 33. Bxb4 dxc4 34. Bxe7 Rxe7 35. Ra8 Ree8 36. Rxb8 Rxb8 37. Bxc4 Rxb2 38. Ra8+ Kh7 39. Bxf7 Nxe4 40. Bg8+ Kg6 41. Ra6+ Nf6 42. h4 h5 43. f3 Rd2 44. Kf1 Kh6 45. Bf7 Rd4 46. Ra5 Rd7 47. Be6 Rd3 48. Ke2 e4 49. g4 Rxf3 50. g5+ Kg6 51. Ra6 Rf4 52. Bd7 Rxh4 53. gxf6 gxf6 54. Ra5 Rf4 55. Ke3 Rf1 56. Kxe4 h4 57. Bf5+ Kg5 58. Bh3+ f5+ 59. Rxf5+ Rxf5 60. Bxf5 h3 {The endgame is winning but not simple — the passed pawn needs its king, not just its rook.} 61. Bxh3 1/2-1/2

[Event "Ruy Lopez - the Berlin: Chapter 3"]
[ChapterName "A model game"]
[Date "2026.03.03"]
[Round "3"]
[White "Castellan, J"]
[Black "Novak, E"]
[Result "1-0"]
[WhiteElo "3294"]
[BlackElo "2910"]
[ECO "B03"]
[Opening "Alekhine Defense"]

{Alekhine Defense. Book so far. The plan is the usual one: finish development, then decide which side to open.}
1. e4 Nf6 2. e5 Nd5 3. d4 c5 4. dxc5 Qa5+ 5. c3 Qxc5 {A slight inaccuracy in move order — the bishop is better placed before this pawn commits.} 6. Nf3 f6 7. b4 Qc6 8. b5 ! Qe6 {Prophylaxis. The move looks slow, and it takes away every active idea the opponent had.} (8... Nxc3 Nbd2 Nb1 {was the alternative — playable, but it hands over the initiative.}) 9. Bc4 Nxc3 10. Bxe6 Nxd1 11. Bb3 Nxf2 ?! 12. Kxf2 fxe5 13. Be3 d6 14. Ng5 h6 15. Ne6 Bxe6 16. Bxe6 Nd7 17. Nc3 b6 18. Nd5 Kd8 19. Rhc1 Nc5 20. Bxc5 bxc5 21. Ke2 Rb8 22. a4 g6 23. Rf1 h5 24. a5 Bh6 25. b6 a6 26. Nc7 Rb7 27. Nxa6 Bf4 28. Nc7 Rxc7 29. a6 Ra7 30. bxa7 Kc7 31. Rfb1 d5 32. Rb8 Kd6 33. Bxd5 e6 34. Be4 Re8 35. Rxe8 c4 36. a8=Q Kc5 37. Qa7+ Kb4 {Precise to the end. A pawn move here instead would have let the defence build a fortress.} 38. Qb6+ 1-0
`,"studies/Openings/Sicilian - Najdorf structures.pgn":`[Event "Sicilian - Najdorf structures: Chapter 1"]
[ChapterName "Main line"]
[Date "2026.04.04"]
[Round "4"]
[White "Doyle, F"]
[Black "Sorokin, Y"]
[Result "1/2-1/2"]
[WhiteElo "2784"]
[BlackElo "3079"]
[ECO "C66"]
[Opening "Ruy Lopez: Berlin Defense, Improved Steinitz Defense"]

{Ruy Lopez: Berlin Defense, Improved Steinitz Defense. Both sides have what they wanted from the opening. The middlegame will be about the centre.}
1. e4 e5 2. Nf3 Nc6 3. Bb5 Nf6 4. O-O d6 5. c3 Nxe4 {Theory ends about here. From this point the game is decided by understanding rather than memory.} 6. d4 Bd7 7. Re1 Nf6 8. Bxc6 ! Bxc6 {The point of the whole plan. Material is level, but only one side has a target to attack.} (8... e4 Nbd2 e3 {was the alternative — playable, but it hands over the initiative.}) 9. dxe5 dxe5 10. Qxd8+ Kxd8 11. Nxe5 Be8 ?! 12. Bg5 h6 13. Bxf6+ gxf6 14. Ng4 Be7 15. Ne3 c6 16. Nf5 Bf8 17. Nd2 Bd7 18. Nd4 Rg8 19. Ne4 Rg6 20. h4 h5 21. Ne2 Kc7 22. Nf4 Rh6 23. Rad1 Re8 24. Rd4 Bf5 25. Kf1 Re5 26. Ng3 Rxe1+ 27. Kxe1 Be6 28. Ngxh5 Bc5 29. Re4 Bxa2 30. g3 Bb1 31. Ra4 Bf5 32. f3 Kb6 33. Kd2 Bc8 34. g4 Bd6 35. Ke3 a5 36. Ra1 Kb5 37. b3 Be5 38. c4+ Kb4 39. Nd3+ Kxb3 40. Rxa5 Bc3 41. Ra8 Be6 42. Nc5+ Kxc4 43. Nxb7 Bd4+ 44. Ke4 f5+ 45. Kf4 c5 46. Rd8 fxg4 47. fxg4 Bb2 48. Nd6+ Kb3 49. Rb8+ Ka2 50. Nf5 Bxf5 51. Kxf5 c4 52. Nf4 Rxh4 53. Nd5 Rh2 54. g5 Rd2 55. Rb5 c3 56. Nxc3+ Bxc3 57. Rb7 Rf2+ 58. Ke4 Bd2 59. Rb5 Bc1 60. Rf5 Rxf5 61. Kxf5 Kb3 62. g6 fxg6+ {Resignation is timely: the king cannot be defended and the counterplay is one move too slow.} 63. Kxg6 1/2-1/2

[Event "Sicilian - Najdorf structures: Chapter 2"]
[ChapterName "The critical sideline"]
[Date "2026.05.05"]
[Round "5"]
[White "Ekström, P"]
[Black "Zahavi, O"]
[Result "1/2-1/2"]
[WhiteElo "2995"]
[BlackElo "3016"]
[ECO "A84"]
[Opening "Dutch Defense: Classical Variation"]

{Dutch Defense: Classical Variation. A slight inaccuracy in move order — the bishop is better placed before this pawn commits.}
1. c4 f5 2. d4 e6 3. Nf3 Nf6 4. g3 Be7 5. Qc2 c5 {Book so far. The plan is the usual one: finish development, then decide which side to open.} 6. dxc5 Bxc5 7. Bg2 d6 8. O-O ! O-O {A long think. Both continuations are playable; this one keeps more pieces on, which suits the attacker.} (8... Bxf2+ Rxf2 f4 {was the alternative — playable, but it hands over the initiative.}) 9. Nc3 Nc6 10. e4 fxe4 11. Nxe4 Nxe4 ?! 12. Qxe4 h6 13. Nh4 Qb6 14. Be3 Ne5 15. Rae1 Bd7 16. Bxc5 Qxc5 17. Qxb7 Rad8 18. b3 g5 19. Rxe5 dxe5 20. Ng6 Bc8 21. Ne7+ Kh8 22. Ng6+ Kg8 23. Qe4 Rf5 24. Bh3 Re8 25. Bg2 Rd8 26. Bh3 Re8 27. b4 Qc7 28. Bg2 Rd8 29. g4 Rd4 30. Qe2 Rf6 31. Nxe5 Bb7 32. Qe3 Rff4 33. Bxb7 Qxb7 34. f3 Qxb4 35. Ng6 Qxc4 36. Qe5 Kh7 37. Nxf4 Rxf4 38. Rf2 Qd4 39. Qc7+ Kg6 40. Qc2+ Kg7 41. Kg2 Qd5 42. Qc7+ Kg6 43. Qc2+ Kg7 44. Qc7+ Kg6 45. h3 a5 46. Qc2+ Kg7 47. Qc7+ Kg8 48. Qc3 e5 49. Qc8+ Kf7 50. Qc2 Kg7 51. Qc7+ Kg8 52. Qb8+ Kf7 53. Qa7+ Kg6 54. Qb6+ Kh7 55. Qc7+ Kg8 56. Qc8+ Kg7 57. Qc3 Rc4 58. Qb2 Rf4 59. Qc3 Rc4 60. Qb2 Rb4 61. Qc3 Rf4 62. Re2 Kf6 63. Qa3 Rb4 64. Qc3 Rd4 65. Rc2 Rd3 66. Qc6+ Qxc6 67. Rxc6+ Kg7 68. Re6 Rd2+ 69. Kg3 Rxa2 70. Rxe5 a4 71. h4 gxh4+ 72. Kxh4 a3 73. Kg3 Ra1 74. Ra5 a2 75. Ra7+ Kf6 76. Kg2 Ke5 77. Ra4 Kd5 78. f4 Ke6 79. f5+ Ke5 80. Ra6 Rb1 81. Rxa2 Kf4 82. Rf2+ Kg5 83. Kf3 h5 84. gxh5 Kxf5 85. Rh2 Kf6 86. Ke4 Kg7 87. h6+ Kh8 88. h7 Rb8 89. Kd5 Kg7 90. Rh1 Rh8 91. Ke5 Rf8 92. Ke6 Rh8 93. Rg1+ Kf8 94. Rh1 Kg7 95. Rg1+ Kf8 96. Rf1+ Kg7 97. Rh1 Rf8 98. Ke7 Rc8 99. h8=Q+ Rxh8 100. Rxh8 {The rest is technique, which is another way of saying it still has to be played accurately.} Kxh8 1/2-1/2

[Event "Sicilian - Najdorf structures: Chapter 3"]
[ChapterName "A model game"]
[Date "2026.06.06"]
[Round "6"]
[White "Farrow, K"]
[Black "Quinn, H"]
[Result "0-1"]
[WhiteElo "2905"]
[BlackElo "2820"]
[ECO "A14"]
[Opening "English Opening: Agincourt Defense, Neo-Catalan Declined"]

{English Opening: Agincourt Defense, Neo-Catalan Declined. Theory ends about here. From this point the game is decided by understanding rather than memory.}
1. c4 Nf6 2. g3 e6 3. Bg2 d5 4. Nf3 Be7 5. O-O O-O {Both sides have what they wanted from the opening. The middlegame will be about the centre.} 6. d3 b6 7. cxd5 Nxd5 8. Nc3 ! Bb7 {The critical moment. The pieces are as good as they are going to get; something has to happen now.} (8... Nxc3 Rb1 Nxb1 {was the alternative — playable, but it hands over the initiative.}) 9. Bd2 c5 10. d4 Na6 11. Rc1 Rc8 ?! 12. Qa4 Nxc3 13. Bxc3 cxd4 14. Nxd4 Bxg2 15. Kxg2 Nc5 16. Qc2 Qd5+ 17. Kg1 Bf6 18. Rfd1 Qxa2 19. Ra1 Qc4 20. Rxa7 Rfd8 21. e3 Qd5 22. Raa1 Qe4 23. Qxe4 Nxe4 24. Be1 h5 25. f3 Nc5 26. Bc3 g5 27. Kf2 g4 28. Ke2 Kg7 29. Rf1 gxf3+ 30. Rxf3 Ne4 31. Raf1 e5 32. Nf5+ Kg6 33. Nh4+ Bxh4 34. gxh4 f6 35. Rc1 Rd5 36. Rff1 Rb5 37. Rfd1 Kf5 38. Rf1+ Ke6 39. Rfd1 Rc6 40. Kf3 Kf5 41. Be1 Rbc5 42. Rxc5 Rxc5 43. Rd3 Rc2 44. Bg3 Nd2+ {The endgame is winning but not simple — the passed pawn needs its king, not just its rook.} 45. Ke2 0-1
`,"studies/Prophylaxis - Nimzowitsch ideas.pgn":`[Event "Prophylaxis - Nimzowitsch ideas: Chapter 1"]
[ChapterName "Main line"]
[Date "2026.01.25"]
[Round "7"]
[White "Alderman, R"]
[Black "Pereira, V"]
[Result "1/2-1/2"]
[WhiteElo "2991"]
[BlackElo "2979"]
[ECO "D80"]
[Opening "Grünfeld Defense"]

{Grünfeld Defense. A slight inaccuracy in move order — the bishop is better placed before this pawn commits.}
1. d4 Nf6 2. c4 g6 3. Nc3 d5 4. e3 Bg7 5. Qb3 e6 {Book so far. The plan is the usual one: finish development, then decide which side to open.} 6. Qa3 a5 7. Nf3 c6 8. b3 ! Ne4 {A long think. Both continuations are playable; this one keeps more pieces on, which suits the attacker.} (8... a4 Rb1 axb3 {was the alternative — playable, but it hands over the initiative.}) 9. Bb2 Nf6 10. Bc1 Ne4 11. Nxe4 dxe4 ?! 12. Nd2 f5 13. c5 O-O 14. Bc4 Re8 15. O-O Nd7 16. b4 a4 17. Be2 e5 18. Nc4 exd4 19. exd4 b5 20. cxb6 Nxb6 21. Nxb6 Qxb6 22. Be3 Bxd4 23. Bxd4 Qxd4 24. Rfd1 Qf6 25. b5 cxb5 26. Bxb5 Re5 27. Bxa4 Be6 28. Qb4 e3 29. fxe3 Rxe3 30. Bb5 Rxa2 31. Rxa2 Bxa2 32. Bc4+ Bxc4 33. Qxc4+ Kg7 34. Rd7+ Re7 35. Rxe7+ Qxe7 36. Qd4+ Kh6 37. Kf2 g5 38. g4 f4 39. h4 Qe6 40. Qc5 Qxg4 41. hxg5+ Qxg5 42. Qf8+ Kh5 43. Qf7+ Kg4 44. Qd7+ Kh4 45. Qxh7+ Kg4 46. Qd7+ Kh5 47. Qh7+ Kg4 48. Qd3 Qg8 49. Ke2 Qh8 50. Qd7+ Kg5 51. Qb5+ Kh6 52. Qd5 Qf8 53. Kd2 Qh8 54. Qc4 Qf8 55. Qe2 Qh8 56. Qe1 Qg8 57. Kd3 Qh8 58. Qh1+ Kg7 59. Qg1+ Kf8 60. Qc1 Qg8 61. Kc3 Qh8+ 62. Kc4 Qg8+ 63. Kd4 Qh8+ 64. Kd5 Qg8+ 65. Ke5 Qh8+ 66. Ke6 Qg8+ 67. Kf6 Qh8+ 68. Kg6 Qg8+ 69. Kh6 Qh8+ 70. Kg6 Qg8+ 71. Kh6 Qh8+ {The rest is technique, which is another way of saying it still has to be played accurately.} 72. Kg6 1/2-1/2

[Event "Prophylaxis - Nimzowitsch ideas: Chapter 2"]
[ChapterName "The critical sideline"]
[Date "2026.02.26"]
[Round "8"]
[White "Bex, N"]
[Black "Ueda, K"]
[Result "0-1"]
[WhiteElo "2518"]
[BlackElo "2667"]
[ECO "D42"]
[Opening "Queen's Gambit Declined: Semi-Tarrasch Defense, Main Line"]

{Queen's Gambit Declined: Semi-Tarrasch Defense, Main Line. Theory ends about here. From this point the game is decided by understanding rather than memory.}
1. d4 Nf6 2. c4 e6 3. Nf3 d5 4. Nc3 c5 5. cxd5 Nxd5 {Both sides have what they wanted from the opening. The middlegame will be about the centre.} 6. e3 Nc6 7. Bd3 cxd4 8. exd4 ! Be7 {The critical moment. The pieces are as good as they are going to get; something has to happen now.} (8... Nxc3 Rb1 Nxb1 {was the alternative — playable, but it hands over the initiative.}) 9. O-O O-O 10. Re1 Bf6 11. Be4 b6 ?! 12. Nxd5 exd5 13. Bxh7+ Kxh7 14. Qc2+ Kg8 15. Qxc6 Bg4 16. Ne5 Rc8 17. Qa4 Bf5 18. Qxa7 Rc2 19. Qa3 Re8 20. Bf4 Bxe5 21. Bxe5 Qg5 22. Qg3 Qxg3 23. Bxg3 Rxe1+ 24. Rxe1 Rxb2 25. a3 Rb3 26. Bd6 Rd3 27. f3 Rxd4 28. Re8+ Kh7 29. Rb8 Rd1+ 30. Kf2 Rb1 31. Bb4 Rb2+ 32. Kg3 Bd3 33. Rxb6 Bf1 34. Kf4 Bxg2 35. h4 Rb3 36. Kg3 Bxf3 37. Kf4 Be4 38. Rd6 f6 39. Rd7 Rf3+ 40. Kg4 Rf1 41. Kg3 f5 42. Bd6 Rf3+ 43. Kh2 f4 44. Rf7 Rf2+ 45. Kg1 Rg2+ 46. Kf1 f3 47. Be5 Bd3+ 48. Ke1 Re2+ 49. Kd1 Rxe5 50. Kd2 Be4 51. a4 Rf5 52. Rxf5 Bxf5 53. Ke3 Be4 54. a5 d4+ 55. Kxe4 f2 56. a6 f1=Q 57. Kxd4 {The endgame is winning but not simple — the passed pawn needs its king, not just its rook.} Qxa6 0-1

[Event "Prophylaxis - Nimzowitsch ideas: Chapter 3"]
[ChapterName "A model game"]
[Date "2026.03.27"]
[Round "9"]
[White "Castellan, J"]
[Black "Novak, E"]
[Result "1-0"]
[WhiteElo "3046"]
[BlackElo "2800"]
[ECO "D50"]
[Opening "Queen's Gambit Declined: Modern Variation"]

{Queen's Gambit Declined: Modern Variation. Book so far. The plan is the usual one: finish development, then decide which side to open.}
1. d4 d5 2. c4 e6 3. Nc3 Nf6 4. Bg5 dxc4 5. e3 c5 {A slight inaccuracy in move order — the bishop is better placed before this pawn commits.} 6. Nf3 cxd4 7. Nxd4 Bd7 8. Bxc4 ! Be7 {Here the exchange is tempting and wrong: trading the good bishop leaves the dark squares bare.} (8... e5 Rb1 exd4 {was the alternative — playable, but it hands over the initiative.}) 9. O-O O-O 10. Rc1 h6 11. Bh4 Nc6 ?! 12. Nf3 Rc8 13. Be2 Qb6 14. Nd2 Qc7 15. Nc4 Rcd8 16. Bg3 e5 17. Nxe5 Nxe5 18. Qd4 Be6 19. Qxe5 Qb6 20. Rc2 Bd6 21. Qb5 Qxb5 22. Nxb5 Bxg3 23. hxg3 Bf5 24. Rc5 Rd2 25. Nd4 Be4 26. f3 Bg6 27. Rb5 Re8 28. Rb3 Rxd4 29. Bb5 Rdd8 30. Bxe8 Rxe8 31. Rxb7 Rxe3 32. Rxa7 Re2 33. b4 Nd5 34. b5 Bd3 35. Rc1 Ne3 36. b6 Rxg2+ 37. Kh1 Rb2 38. Ra3 Nf5 39. Rc8+ Kh7 40. Rxd3 Nxg3+ 41. Kg1 Rxb6 42. Rc2 Rb1+ 43. Kf2 Nf5 44. Rdd2 Rb4 45. a3 Ra4 46. Ra2 Nd4 47. Rdb2 Nc6 48. Kg3 g6 49. Rb6 Ne5 50. Rb4 Ra5 51. a4 Ra6 52. Rb5 Nc6 53. Rc5 Kg7 54. Rd2 Na5 55. Rd7 g5 56. Rf5 Kg6 57. Rfxf7 Nc6 58. Rg7+ Kf6 59. Rdf7+ Ke6 60. Rb7 Ne5 61. Rb4 Kd5 62. Rb5+ Kd4 63. Re7 Nc4 64. Re4+ Kd3 65. Rd5+ Kc3 66. a5 Nd6 67. Rc5+ Kb3 68. Rg4 Nf7 69. Rb5+ Ka3 70. Rd4 Nd6 71. Rd3+ Ka4 72. Rb6 Rxb6 73. axb6 Nb7 74. Rd7 Nc5 75. Rh7 h5 76. b7 Na6 77. Rxh5 Ka5 78. b8=Q Nxb8 79. Rxg5+ Kb4 80. f4 Nc6 81. f5 Kc5 82. f6+ Kd6 83. f7 Ke7 84. Rc5 Nd4 85. Rc7+ Kf8 86. Rd7 Ne6 87. Kg4 Nc5 88. Ra7 Kg7 89. Kf5 Nd3 90. f8=Q+ Kxf8 91. Kf6 Ke8 92. Ra5 Nf4 93. Rf5 Nd3 94. Rb5 Nf4 95. Kf5 Nh5 96. Kg5 Ng3 {Precise to the end. A pawn move here instead would have let the defence build a fortress.} 97. Re5+ 1-0
`,"studies/The isolated queens pawn.pgn":`[Event "The isolated queens pawn: Chapter 1"]
[ChapterName "Main line"]
[Date "2026.04.01"]
[Round "1"]
[White "Doyle, F"]
[Black "Sorokin, Y"]
[Result "1/2-1/2"]
[WhiteElo "2963"]
[BlackElo "2956"]
[ECO "B91"]
[Opening "Sicilian Defense: Najdorf Variation, Zagreb Variation"]

{Sicilian Defense: Najdorf Variation, Zagreb Variation. Both sides have what they wanted from the opening. The middlegame will be about the centre.}
1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 a6 {Theory ends about here. From this point the game is decided by understanding rather than memory.} 6. g3 e5 7. Nb3 Be7 8. Bg2 ! O-O {Prophylaxis. The move looks slow, and it takes away every active idea the opponent had.} (8... a5 Rb1 a4 {was the alternative — playable, but it hands over the initiative.}) 9. O-O Nbd7 10. a4 Nb6 11. Re1 Be6 ?! 12. Nd2 d5 13. Nxd5 Nbxd5 14. exd5 Bxd5 15. Rxe5 Bxg2 16. Kxg2 Re8 17. c3 Qc7 18. Nf3 Qc6 19. h3 Rad8 20. Bd2 Nd7 21. Re3 Nb6 22. b3 Nd5 23. Rd3 Qg6 24. Ne1 Nf6 25. Be3 Qe4+ 26. Kg1 Qf5 27. g4 Qc8 28. Bd4 Ne4 29. Ng2 h6 30. Qf1 Qc6 31. Ne3 {Resignation is timely: the king cannot be defended and the counterplay is one move too slow.} Ng5 1/2-1/2

[Event "The isolated queens pawn: Chapter 2"]
[ChapterName "The critical sideline"]
[Date "2026.05.02"]
[Round "2"]
[White "Ekström, P"]
[Black "Zahavi, O"]
[Result "1-0"]
[WhiteElo "2837"]
[BlackElo "2668"]
[ECO "E80"]
[Opening "King's Indian Defense: Sämisch Variation"]

{King's Indian Defense: Sämisch Variation. A slight inaccuracy in move order — the bishop is better placed before this pawn commits.}
1. d4 d6 2. e4 Nf6 3. f3 g6 4. c4 Bg7 5. Nc3 a5 {Book so far. The plan is the usual one: finish development, then decide which side to open.} 6. Be3 Na6 7. Qd2 h5 8. Bd3 ! c6 {The point of the whole plan. Material is level, but only one side has a target to attack.} (8... a4 Rb1 a3 {was the alternative — playable, but it hands over the initiative.}) 9. Nge2 Nb4 10. Bb1 e5 11. a3 Na6 ?! 12. d5 Qc7 13. O-O O-O 14. Bc2 Rd8 15. h3 Nd7 16. b4 c5 17. Nb5 Qb8 18. bxa5 Nf6 19. Rae1 Bd7 20. f4 exf4 21. Bxf4 Bxb5 22. cxb5 Nc7 23. Bg5 Nce8 24. Nc3 Rc8 25. Na4 Nd7 26. Qf4 Bd4+ 27. Kh1 f6 28. Bh4 Rxa5 29. Qh6 Nf8 30. e5 f5 31. Bxf5 gxf5 32. Rxf5 Qc7 {The rest is technique, which is another way of saying it still has to be played accurately.} 33. Rxf8# 1-0

[Event "The isolated queens pawn: Chapter 3"]
[ChapterName "A model game"]
[Date "2026.06.03"]
[Round "3"]
[White "Farrow, K"]
[Black "Quinn, H"]
[Result "1-0"]
[WhiteElo "3307"]
[BlackElo "2845"]
[ECO "B97"]
[Opening "Sicilian Defense: Najdorf Variation, Poisoned Pawn Accepted"]

{Sicilian Defense: Najdorf Variation, Poisoned Pawn Accepted. Theory ends about here. From this point the game is decided by understanding rather than memory.}
1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 a6 {Both sides have what they wanted from the opening. The middlegame will be about the centre.} 6. Bg5 e6 7. f4 Qb6 8. Qd2 ! Qxb2 {A long think. Both continuations are playable; this one keeps more pieces on, which suits the attacker.} (8... a5 Rb1 a4 {was the alternative — playable, but it hands over the initiative.}) 9. Rb1 Qa3 10. f5 b5 11. fxe6 fxe6 ?! 12. Be2 Be7 13. O-O Ra7 14. Rb3 Qa5 15. Bxf6 Bxf6 16. Bh5+ Kd8 17. Rxf6 gxf6 18. Qf4 Re8 19. Qxf6+ Rae7 20. Bxe8 Kxe8 21. e5 dxe5 22. Nf3 Qb6+ 23. Kh1 Rf7 24. Qh8+ Rf8 25. Qxh7 Bb7 26. Ne4 Bxe4 27. Qxe4 Rf5 28. g4 Rf7 29. Nxe5 Rf1+ 30. Kg2 Qg1+ 31. Kh3 Rf6 32. Qe3 Rf2 33. Nf3 Qg2+ 34. Kh4 Rxc2 35. Qxe6+ Kd8 36. Rd3+ Kc7 37. h3 Qf1 38. Qe7+ Kb6 39. Rd6+ Ka5 40. Qe3 Qf2+ 41. Qxf2 Rxf2 42. Nd4 Kb4 43. Rd8 Kc4 44. g5 Rf4+ 45. Kh5 Rxd4 46. Rxb8 Rd2 47. Rc8+ Kb4 48. g6 Rxa2 49. Rc6 Rg2 50. Rxa6 Kc5 51. Ra8 b4 52. Rb8 Kc4 53. h4 Kc3 54. Kh6 b3 55. g7 b2 56. h5 Rg4 57. Rxb2 Kxb2 58. Kh7 Rg5 59. h6 Rg2 60. g8=Q Re2 61. Qd5 Kc3 62. Qf3+ Kd2 63. Qxe2+ Kxe2 64. Kg6 Kf3 65. Kf5 Ke3 66. h7 Kd3 67. h8=Q Kc4 68. Qe5 Kd3 69. Qc5 Ke2 70. Kf4 Kd3 71. Kf3 Kd2 72. Qc4 Kd1 73. Ke3 Ke1 {The endgame is winning but not simple — the passed pawn needs its king, not just its rook.} 74. Qc1# 1-0
`},fr=`/vault`,pr=`/demo/puzzles.sqlite`,mr=`/demo/refgames.sqlite`,hr=`/demo/mygames.sqlite`;function gr(){nt();for(let[e,t]of Object.entries(dr))b(`${fr}/${e}`,t,Date.now()-Object.keys(dr).indexOf(e)*36e5);let e=new G;ur(e,{studies:`${fr}/studies`,notes:`${fr}/notes`,games:`${fr}/games`,puzzlesDb:pr,puzzlesState:`${fr}/puzzles`,refgamesDb:mr,myGamesDb:hr,repertoireState:`${fr}/repertoire`}),e.get(`/api/health`,e=>e.json({ok:!0,crossOriginIsolated:!1,demo:!0}));let t=null,r={};return e.get(`/api/settings`,e=>e.json({profile:{},gate:!1,totp:!1,lichess:{configured:!1,last4:null},home:t,training:r,vaultPath:`demo`,version:`demo`,demo:!0})),e.put(`/api/settings/training`,async e=>{let t=await e.req.json().catch(()=>null);return!t||typeof t!=`object`?e.json({error:`invalid training`},400):(r={...r,...i(t)},e.json({ok:!0}))}),e.put(`/api/settings/home`,async e=>{let r=n(await e.req.json().catch(()=>null));return r?(t=r,e.json({ok:!0})):e.json({error:`invalid home layout`},400)}),e.delete(`/api/settings/home`,e=>(t=null,e.json({ok:!0}))),e.get(`/api/explorer/:db`,async t=>{let n=t.req.query(`fen`)??``,r=await e.request(`/api/refgames/explore?fen=${encodeURIComponent(n)}`);if(!r.ok)return t.json({opening:null,moves:[],topGames:[]});let i=await r.json();return t.json({opening:null,moves:i.moves??[],topGames:i.topGames??[]})}),e.get(`/api/puzzlebooks`,e=>e.json({books:[]})),e.all(`/api/*`,e=>e.json({error:`not available in the static demo`},404)),e}async function _r(){try{let e=await fetch(new URL(`demo/openings.json`,document.baseURI));e.ok&&b(X,await e.text(),Date.now()),await Promise.all([`a`,`b`,`c`,`d`,`e`].map(async e=>{let t=await fetch(new URL(`demo/eco/${e}.tsv`,document.baseURI));t.ok&&b(`${J}/scripts/vendor/chess-openings/${e}.tsv`,await t.text(),Date.now())}))}catch{}try{await ot({[pr]:`demo/puzzles.sqlite`,[mr]:`demo/refgames.sqlite`})}catch(e){console.warn(`demo: puzzles and reference games unavailable —`,e)}let e=gr(),t=window.fetch.bind(window);window.fetch=async(n,r)=>{let i=new Request(n,r),a=new URL(i.url,window.location.href);return a.origin!==window.location.origin||!a.pathname.startsWith(`/api/`)?t(n,r):e.fetch(new Request(a.toString(),i))}}export{_r as installDemoBackend};