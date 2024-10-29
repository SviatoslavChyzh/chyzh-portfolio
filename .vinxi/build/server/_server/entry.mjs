import{defaultParseSearch as C,isRedirect as m,isNotFound as w}from"@tanstack/react-router";import E from"tiny-invariant";import{H3Event as d,getRequestURL as F,getResponseStatus as N,getRequestWebStream as H,eventHandler as L}from"h3";import{getContext as A}from"unctx";import{AsyncLocalStorage as O}from"node:async_hooks";function P(e){let n;const t=T(e),s={duplex:"half",method:e.method,headers:e.headers};return e.node.req.body instanceof ArrayBuffer?new Request(t,{...s,body:e.node.req.body}):new Request(t,{...s,get body(){return n||(n=q(e),n)}})}function j(e){return e.web??={request:P(e),url:T(e)},e.web.request}function I(){return b()}const S=Symbol("$HTTPEvent");function U(e){return typeof e=="object"&&(e instanceof d||e?.[S]instanceof d||e?.__is_event__===!0)}function y(e){return function(...n){let t=n[0];if(U(t))n[0]=t instanceof d||t.__is_event__?t:t[S];else{if(!globalThis.app.config.server.experimental?.asyncContext)throw new Error("AsyncLocalStorage was not enabled. Use the `server.experimental.asyncContext: true` option in your app configuration to enable it. Or, pass the instance of HTTPEvent that you have as the first argument to the function.");if(t=I(),!t)throw new Error("No HTTPEvent found in AsyncLocalStorage. Make sure you are using the function within the server runtime.");n.unshift(t)}return e(...n)}}const T=y(F),W=y(N),q=y(H);function J(){return A("nitro-app",{asyncContext:!!globalThis.app.config.server.experimental?.asyncContext,AsyncLocalStorage:O})}function b(){return J().use().event}function $(e){return globalThis.MANIFEST[e]}const p="server-fn-return-type",l="server-fn-payload-type",V=L(M);async function M(e){return k(j(e))}async function k(e,n){var t,s;const a=e.method,h=new URL(e.url,"http://localhost:3000"),i=Object.fromEntries(new URLSearchParams(h.search).entries()),c=i._serverFnId,v=i._serverFnName;if(!c||!v)throw new Error("Invalid request");E(typeof c=="string","Invalid server action");const _=(s=await((t=$("server").chunks[c])==null?void 0:t.import()))==null?void 0:s[v],u=await(async()=>{try{const r=await(async()=>{var g;return e.headers.get(l)==="payload"?[a.toLowerCase()==="get"?(()=>{var f;return(f=C(h.search))==null?void 0:f.payload})():await e.json(),{method:a,request:e}]:e.headers.get(l)==="formData"||(g=e.headers.get("Content-Type"))!=null&&g.includes("multipart/form-data")?[a.toLowerCase()==="get"?(()=>{const{_serverFnId:f,_serverFnName:D,payload:x}=i;return x})():await e.formData(),{method:a,request:e}]:e.headers.get(l)==="request"?[e,{method:a,request:e}]:await e.json()})(),o=await _(...r);return o instanceof Response?o:m(o)||w(o)?R(o):new Response(o!==void 0?JSON.stringify(o):void 0,{status:W(b()),headers:{"Content-Type":"application/json",[p]:"json"}})}catch(r){return r instanceof Response?r:m(r)||w(r)?R(r):(console.error("Server Fn Error!"),console.error(r),console.info(),new Response(JSON.stringify(r),{status:500,headers:{"Content-Type":"application/json",[p]:"error"}}))}})();if(u.headers.get("Content-Type")==="application/json"){const o=await u.clone().text();o&&JSON.stringify(JSON.parse(o))}return u}function R(e){const{headers:n,...t}=e;return new Response(JSON.stringify(t),{status:200,headers:{"Content-Type":"application/json",[p]:"json",...e.headers||{}}})}export{V as default};
