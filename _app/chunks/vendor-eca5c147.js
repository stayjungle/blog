function _(){}function I(t,n){for(const e in n)t[e]=n[e];return t}function M(t){return t()}function z(){return Object.create(null)}function m(t){t.forEach(M)}function L(t){return typeof t=="function"}function G(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}function J(t){return Object.keys(t).length===0}function K(t,...n){if(t==null)return _;const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function ut(t,n,e){t.$$.on_destroy.push(K(n,e))}function lt(t,n,e,r){if(t){const c=B(t,n,e,r);return t[0](c)}}function B(t,n,e,r){return t[1]&&r?I(e.ctx.slice(),t[1](r(n))):e.ctx}function st(t,n,e,r){if(t[2]&&r){const c=t[2](r(e));if(n.dirty===void 0)return c;if(typeof c=="object"){const s=[],o=Math.max(n.dirty.length,c.length);for(let u=0;u<o;u+=1)s[u]=n.dirty[u]|c[u];return s}return n.dirty|c}return n.dirty}function ft(t,n,e,r,c,s){if(c){const o=B(n,e,r,s);t.p(o,c)}}function at(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let r=0;r<e;r++)n[r]=-1;return n}return-1}function dt(t){const n={};for(const e in t)e[0]!=="$"&&(n[e]=t[e]);return n}let x=!1;function P(){x=!0}function W(){x=!1}function Q(t,n,e,r){for(;t<n;){const c=t+(n-t>>1);e(c)<=r?t=c+1:n=c}return t}function R(t){if(t.hydrate_init)return;t.hydrate_init=!0;let n=t.childNodes;if(t.nodeName==="HEAD"){const i=[];for(let l=0;l<n.length;l++){const a=n[l];a.claim_order!==void 0&&i.push(a)}n=i}const e=new Int32Array(n.length+1),r=new Int32Array(n.length);e[0]=-1;let c=0;for(let i=0;i<n.length;i++){const l=n[i].claim_order,a=(c>0&&n[e[c]].claim_order<=l?c+1:Q(1,c,g=>n[e[g]].claim_order,l))-1;r[i]=e[a]+1;const f=a+1;e[f]=i,c=Math.max(f,c)}const s=[],o=[];let u=n.length-1;for(let i=e[c]+1;i!=0;i=r[i-1]){for(s.push(n[i-1]);u>=i;u--)o.push(n[u]);u--}for(;u>=0;u--)o.push(n[u]);s.reverse(),o.sort((i,l)=>i.claim_order-l.claim_order);for(let i=0,l=0;i<o.length;i++){for(;l<s.length&&o[i].claim_order>=s[l].claim_order;)l++;const a=l<s.length?s[l]:null;t.insertBefore(o[i],a)}}function U(t,n){if(x){for(R(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;n!==t.actual_end_child?(n.claim_order!==void 0||n.parentNode!==t)&&t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling}else(n.parentNode!==t||n.nextSibling!==null)&&t.appendChild(n)}function _t(t,n,e){x&&!e?U(t,n):(n.parentNode!==t||n.nextSibling!=e)&&t.insertBefore(n,e||null)}function V(t){t.parentNode.removeChild(t)}function X(t){return document.createElement(t)}function E(t){return document.createTextNode(t)}function ht(){return E(" ")}function mt(){return E("")}function pt(t,n,e){e==null?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function Y(t){return Array.from(t.childNodes)}function Z(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function T(t,n,e,r,c=!1){Z(t);const s=(()=>{for(let o=t.claim_info.last_index;o<t.length;o++){const u=t[o];if(n(u)){const i=e(u);return i===void 0?t.splice(o,1):t[o]=i,c||(t.claim_info.last_index=o),u}}for(let o=t.claim_info.last_index-1;o>=0;o--){const u=t[o];if(n(u)){const i=e(u);return i===void 0?t.splice(o,1):t[o]=i,c?i===void 0&&t.claim_info.last_index--:t.claim_info.last_index=o,u}}return r()})();return s.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,s}function tt(t,n,e,r){return T(t,c=>c.nodeName===n,c=>{const s=[];for(let o=0;o<c.attributes.length;o++){const u=c.attributes[o];e[u.name]||s.push(u.name)}s.forEach(o=>c.removeAttribute(o))},()=>r(n))}function yt(t,n,e){return tt(t,n,e,X)}function nt(t,n){return T(t,e=>e.nodeType===3,e=>{const r=""+n;if(e.data.startsWith(r)){if(e.data.length!==r.length)return e.splitText(r.length)}else e.data=r},()=>E(n),!0)}function bt(t){return nt(t," ")}function gt(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function xt(t,n=document.body){return Array.from(n.querySelectorAll(t))}let p;function y(t){p=t}function $(){if(!p)throw new Error("Function called outside component initialization");return p}function $t(t){$().$$.on_mount.push(t)}function wt(t){$().$$.after_update.push(t)}function kt(t,n){$().$$.context.set(t,n)}function At(t){return $().$$.context.get(t)}const b=[],v=[],w=[],O=[],D=Promise.resolve();let S=!1;function F(){S||(S=!0,D.then(H))}function Et(){return F(),D}function j(t){w.push(t)}const N=new Set;let k=0;function H(){const t=p;do{for(;k<b.length;){const n=b[k];k++,y(n),et(n.$$)}for(y(null),b.length=0,k=0;v.length;)v.pop()();for(let n=0;n<w.length;n+=1){const e=w[n];N.has(e)||(N.add(e),e())}w.length=0}while(b.length);for(;O.length;)O.pop()();S=!1,N.clear(),y(t)}function et(t){if(t.fragment!==null){t.update(),m(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(j)}}const A=new Set;let d;function St(){d={r:0,c:[],p:d}}function jt(){d.r||m(d.c),d=d.p}function it(t,n){t&&t.i&&(A.delete(t),t.i(n))}function Nt(t,n,e,r){if(t&&t.o){if(A.has(t))return;A.add(t),d.c.push(()=>{A.delete(t),r&&(e&&t.d(1),r())}),t.o(n)}}function Ct(t,n){const e={},r={},c={$$scope:1};let s=t.length;for(;s--;){const o=t[s],u=n[s];if(u){for(const i in o)i in u||(r[i]=1);for(const i in u)c[i]||(e[i]=u[i],c[i]=1);t[s]=u}else for(const i in o)c[i]=1}for(const o in r)o in e||(e[o]=void 0);return e}function qt(t){return typeof t=="object"&&t!==null?t:{}}function Mt(t){t&&t.c()}function zt(t,n){t&&t.l(n)}function rt(t,n,e,r){const{fragment:c,on_mount:s,on_destroy:o,after_update:u}=t.$$;c&&c.m(n,e),r||j(()=>{const i=s.map(M).filter(L);o?o.push(...i):m(i),t.$$.on_mount=[]}),u.forEach(j)}function ct(t,n){const e=t.$$;e.fragment!==null&&(m(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function ot(t,n){t.$$.dirty[0]===-1&&(b.push(t),F(),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function Bt(t,n,e,r,c,s,o,u=[-1]){const i=p;y(t);const l=t.$$={fragment:null,ctx:null,props:s,update:_,not_equal:c,bound:z(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(i?i.$$.context:[])),callbacks:z(),dirty:u,skip_bound:!1,root:n.target||i.$$.root};o&&o(l.root);let a=!1;if(l.ctx=e?e(t,n.props||{},(f,g,...C)=>{const q=C.length?C[0]:g;return l.ctx&&c(l.ctx[f],l.ctx[f]=q)&&(!l.skip_bound&&l.bound[f]&&l.bound[f](q),a&&ot(t,f)),g}):[],l.update(),a=!0,m(l.before_update),l.fragment=r?r(l.ctx):!1,n.target){if(n.hydrate){P();const f=Y(n.target);l.fragment&&l.fragment.l(f),f.forEach(V)}else l.fragment&&l.fragment.c();n.intro&&it(t.$$.fragment),rt(t,n.target,n.anchor,n.customElement),W(),H()}y(i)}class Tt{$destroy(){ct(this,1),this.$destroy=_}$on(n,e){const r=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return r.push(e),()=>{const c=r.indexOf(e);c!==-1&&r.splice(c,1)}}$set(n){this.$$set&&!J(n)&&(this.$$.skip_bound=!0,this.$$set(n),this.$$.skip_bound=!1)}}const h=[];function vt(t,n=_){let e;const r=new Set;function c(u){if(G(t,u)&&(t=u,e)){const i=!h.length;for(const l of r)l[1](),h.push(l,t);if(i){for(let l=0;l<h.length;l+=2)h[l][0](h[l+1]);h.length=0}}}function s(u){c(u(t))}function o(u,i=_){const l=[u,i];return r.add(l),r.size===1&&(e=n(c)||_),u(t),()=>{r.delete(l),r.size===0&&(e(),e=null)}}return{set:c,update:s,subscribe:o}}export{ct as A,I as B,vt as C,Et as D,lt as E,ft as F,at as G,st as H,U as I,_ as J,dt as K,At as L,xt as M,ut as N,Tt as S,Y as a,pt as b,yt as c,V as d,X as e,_t as f,nt as g,gt as h,Bt as i,ht as j,mt as k,bt as l,St as m,Nt as n,jt as o,it as p,kt as q,wt as r,G as s,E as t,$t as u,Mt as v,zt as w,rt as x,Ct as y,qt as z};