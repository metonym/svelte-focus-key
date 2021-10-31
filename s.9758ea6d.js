var app=function(){"use strict";function n(){}function t(n){return n()}function s(){return Object.create(null)}function e(n){n.forEach(t)}function a(n){return"function"==typeof n}function o(n,t){return n!=n?t==t:n!==t}function p(n,t){n.appendChild(t)}function c(n){n.parentNode.removeChild(n)}function l(n){return document.createElement(n)}function i(){return n=" ",document.createTextNode(n);var n}function u(n,t,s){null==s?n.removeAttribute(t):n.getAttribute(t)!==s&&n.setAttribute(t,s)}let r;function k(n){r=n}const d=[],f=[],g=[],h=[],m=Promise.resolve();let y=!1;function v(n){g.push(n)}let $=!1;const b=new Set;function x(){if(!$){$=!0;do{for(let n=0;n<d.length;n+=1){const t=d[n];k(t),T(t.$$)}for(k(null),d.length=0;f.length;)f.pop()();for(let n=0;n<g.length;n+=1){const t=g[n];b.has(t)||(b.add(t),t())}g.length=0}while(d.length);for(;h.length;)h.pop()();y=!1,$=!1,b.clear()}}function T(n){if(null!==n.fragment){n.update(),e(n.before_update);const t=n.dirty;n.dirty=[-1],n.fragment&&n.fragment.p(n.ctx,t),n.after_update.forEach(v)}}const L=new Set;function w(n,t){n&&n.i&&(L.delete(n),n.i(t))}function M(n,t,s,e){if(n&&n.o){if(L.has(n))return;L.add(n),undefined.c.push((()=>{L.delete(n),e&&(s&&n.d(1),e())})),n.o(t)}}const H="undefined"!=typeof window?window:"undefined"!=typeof globalThis?globalThis:global;function C(n){n&&n.c()}function _(n,s,o,p){const{fragment:c,on_mount:l,on_destroy:i,after_update:u}=n.$$;c&&c.m(s,o),p||v((()=>{const s=l.map(t).filter(a);i?i.push(...s):e(s),n.$$.on_mount=[]})),u.forEach(v)}function E(n,t){const s=n.$$;null!==s.fragment&&(e(s.on_destroy),s.fragment&&s.fragment.d(t),s.on_destroy=s.fragment=null,s.ctx=[])}function j(n,t){-1===n.$$.dirty[0]&&(d.push(n),y||(y=!0,m.then(x)),n.$$.dirty.fill(0)),n.$$.dirty[t/31|0]|=1<<t%31}function P(t,a,o,p,l,i,u,d=[-1]){const f=r;k(t);const g=t.$$={fragment:null,ctx:null,props:i,update:n,not_equal:l,bound:s(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(a.context||(f?f.$$.context:[])),callbacks:s(),dirty:d,skip_bound:!1,root:a.target||f.$$.root};u&&u(g.root);let h=!1;if(g.ctx=o?o(t,a.props||{},((n,s,...e)=>{const a=e.length?e[0]:s;return g.ctx&&l(g.ctx[n],g.ctx[n]=a)&&(!g.skip_bound&&g.bound[n]&&g.bound[n](a),h&&j(t,n)),s})):[],g.update(),h=!0,e(g.before_update),g.fragment=!!p&&p(g.ctx),a.target){if(a.hydrate){const n=function(n){return Array.from(n.childNodes)}(a.target);g.fragment&&g.fragment.l(n),n.forEach(c)}else g.fragment&&g.fragment.c();a.intro&&w(t.$$.fragment),_(t,a.target,a.anchor,a.customElement),x()}k(f)}class N{$destroy(){E(this,1),this.$destroy=n}$on(n,t){const s=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return s.push(t),()=>{const n=s.indexOf(t);-1!==n&&s.splice(n,1)}}$set(n){var t;this.$$set&&(t=n,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(n),this.$$.skip_bound=!1)}}const{document:S}=H;function K(t){let s,e;return{c:n,m(n,a){var o,p,c,l;s||(o=S.body,p="keydown",c=t[2],o.addEventListener(p,c,l),e=()=>o.removeEventListener(p,c,l),s=!0)},p:n,i:n,o:n,d(n){s=!1,e()}}}function A(n,t,s){let{element:e=null}=t,{key:a="/"}=t;return n.$$set=n=>{"element"in n&&s(0,e=n.element),"key"in n&&s(1,a=n.key)},[e,a,n=>{n.key===a&&null!=e&&"BODY"===document.activeElement.tagName&&document.activeElement!==e&&(n.preventDefault(),e.focus())}]}var D=class extends N{constructor(n){super(),P(this,n,A,K,o,{element:0,key:1})}};function O(n,t={}){const s=t.key||"/",e=t=>{t.key===s&&null!=n&&"BODY"===document.activeElement.tagName&&document.activeElement!==n&&(t.preventDefault(),n.focus())};return document.body.addEventListener("keydown",e),{destroy(){document.body.removeEventListener("keydown",e)}}}function I(t){let s,e,o,r,k,d,f,g,h,m,y,v,$,b,x,T,L,H,j,P,N,S,K,A,I,q,B,F,G,U,Y,z,J,Q,R,V,W,X,Z,nn,tn,sn,en,an,on,pn,cn,ln,un,rn,kn,dn,fn,gn,hn,mn,yn,vn,$n,bn,xn,Tn,Ln,wn,Mn,Hn,Cn,_n,En,jn,Pn,Nn,Sn,Kn,An,Dn,On,In,qn,Bn,Fn,Gn;return nn=new D({props:{element:t[0]}}),rn=new D({props:{element:t[1],key:"s"}}),{c(){s=l("main"),e=l("h1"),e.textContent="svelte-focus-key",o=i(),r=l("p"),r.innerHTML='<a href="https://npmjs.com/package/svelte-focus-key"><img src="https://img.shields.io/npm/v/svelte-focus-key.svg?style=for-the-badge&amp;color=%23ff3e00" alt="NPM"/></a>',k=i(),d=l("blockquote"),d.innerHTML="<p>Svelte component and action to focus an element when pressing a key</p>",f=i(),g=l("p"),g.innerHTML='<a href="https://github.com/metonym/svelte-focus-key">GitHub repo</a>',h=i(),m=l("p"),m.textContent="The primary use case is to focus a search input when pressing the forward slash key (“/”).",y=i(),v=l("hr"),$=i(),b=l("p"),b.innerHTML="<strong>Table of Contents</strong>",x=l("ul"),x.innerHTML='<li><a href="#installation">Installation</a></li> \n<li><a href="#usage">Usage</a></li> \n<ul><li><a href="#basic">Basic</a></li> \n<li><a href="#custom-focus-key">Custom focus key</a></li> \n<li><a href="#focuskey-action">focusKey action</a></li> \n</ul><li><a href="#api">API</a></li> \n<ul><li><a href="#props">Props</a></li> \n</ul><li><a href="#typescript">TypeScript</a></li> \n<li><a href="#changelog">Changelog</a></li> \n<li><a href="#license">License</a></li>',T=i(),L=l("h2"),L.textContent="Installation",H=i(),j=l("p"),j.innerHTML="<strong>Yarn</strong>",P=i(),N=l("pre"),S=i(),K=l("p"),K.innerHTML="<strong>NPM</strong>",A=i(),I=l("pre"),q=i(),B=l("p"),B.innerHTML="<strong>pnpm</strong>",F=i(),G=l("pre"),U=i(),Y=l("h2"),Y.textContent="Usage",z=i(),J=l("h3"),J.textContent="Basic",Q=i(),R=l("p"),R.innerHTML='Use the <a href="https://svelte.dev/docs#bind_element">bind:this</a> directive to pass the element to focus to the <code>FocusKey</code> component.',V=i(),W=l("div"),X=l("input"),Z=i(),C(nn.$$.fragment),tn=l("pre"),sn=i(),en=l("h3"),en.textContent="Custom focus key",an=i(),on=l("p"),on.innerHTML="The default focus key is the forward slash (<code>/</code>). Customize the key using the <code>key</code> prop.",pn=i(),cn=l("div"),ln=l("textarea"),un=i(),C(rn.$$.fragment),kn=l("pre"),dn=i(),fn=l("h3"),fn.textContent="focusKey action",gn=i(),hn=l("p"),hn.innerHTML='This utility is also available as a <a href="https://svelte.dev/docs#use_action">Svelte action</a>.',mn=i(),yn=l("div"),vn=l("input"),$n=l("pre"),bn=i(),xn=l("h2"),xn.textContent="API",Tn=i(),Ln=l("h3"),Ln.textContent="Props",wn=i(),Mn=l("table"),Mn.innerHTML='<thead><tr><th style="text-align:left">Prop name</th> \n<th style="text-align:left">Type</th> \n<th style="text-align:left">Default value</th></tr></thead> \n<tbody><tr><td style="text-align:left">element</td> \n<td style="text-align:left"><code>HTMLElement</code></td> \n<td style="text-align:left"><code>null</code></td></tr> \n<tr><td style="text-align:left">key</td> \n<td style="text-align:left"><code>string</code></td> \n<td style="text-align:left"><code>&quot;/&quot;</code></td></tr></tbody>',Hn=i(),Cn=l("h2"),Cn.textContent="TypeScript",_n=i(),En=l("p"),En.textContent="Svelte version 3.31 or greater is required to use this component with TypeScript.",jn=i(),Pn=l("p"),Pn.innerHTML='TypeScript definitions are located in the <a href="https://github.com/metonym/svelte-focus-key/tree/master/types/">types folder</a>.',Nn=i(),Sn=l("h2"),Sn.textContent="Changelog",Kn=i(),An=l("p"),An.innerHTML='<a href="https://github.com/metonym/svelte-focus-key/tree/master/CHANGELOG.md">CHANGELOG.md</a>',Dn=i(),On=l("h2"),On.textContent="License",In=i(),qn=l("p"),qn.innerHTML='<a href="https://github.com/metonym/svelte-focus-key/tree/master/LICENSE">MIT</a>',u(e,"id","svelte-focus-key"),u(L,"id","installation"),u(N,"class","language-bash"),u(I,"class","language-bash"),u(G,"class","language-bash"),u(Y,"id","usage"),u(J,"id","basic"),u(X,"placeholder",'Press "/" to focus'),u(W,"class","code-fence"),u(tn,"class","language-svelte"),u(tn,"data-svelte",""),u(en,"id","custom-focus-key"),u(ln,"placeholder",'Press "s" to focus'),u(cn,"class","code-fence"),u(kn,"class","language-svelte"),u(kn,"data-svelte",""),u(fn,"id","focuskey-action"),u(vn,"placeholder",'Press "k" to focus'),u(yn,"class","code-fence"),u($n,"class","language-svelte"),u($n,"data-svelte",""),u(xn,"id","api"),u(Ln,"id","props"),u(Cn,"id","typescript"),u(Sn,"id","changelog"),u(On,"id","license"),u(s,"class","markdown-body")},m(c,l){var i;!function(n,t,s){n.insertBefore(t,s||null)}(c,s,l),p(s,e),p(s,o),p(s,r),p(s,k),p(s,d),p(s,f),p(s,g),p(s,h),p(s,m),p(s,y),p(s,v),p(s,$),p(s,b),p(s,x),p(s,T),p(s,L),p(s,H),p(s,j),p(s,P),p(s,N),N.innerHTML='<span class="token function">yarn</span> <span class="token function">add</span> -D svelte-focus-key\n',p(s,S),p(s,K),p(s,A),p(s,I),I.innerHTML='<span class="token function">npm</span> i -D svelte-focus-key\n',p(s,q),p(s,B),p(s,F),p(s,G),G.innerHTML='<span class="token function">pnpm</span> i -D svelte-focus-key\n',p(s,U),p(s,Y),p(s,z),p(s,J),p(s,Q),p(s,R),p(s,V),p(s,W),p(W,X),t[2](X),p(W,Z),_(nn,W,null),p(s,tn),tn.innerHTML='<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">\n  <span class="token keyword">import</span> FocusKey <span class="token keyword">from</span> <span class="token string">"svelte-focus-key"</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">let</span> element<span class="token punctuation">;</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name"><span class="token namespace">bind:</span>this=</span><span class="token language-javascript"><span class="token punctuation">{</span>element<span class="token punctuation">}</span></span> <span class="token attr-name">placeholder=</span><span class="token language-javascript"><span class="token punctuation">{</span><span class="token string">\'Press "/" to focus\'</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>FocusKey</span> <span class="token language-javascript"><span class="token punctuation">{</span>element<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n',p(s,sn),p(s,en),p(s,an),p(s,on),p(s,pn),p(s,cn),p(cn,ln),t[3](ln),p(cn,un),_(rn,cn,null),p(s,kn),kn.innerHTML='<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">\n  <span class="token keyword">import</span> FocusKey <span class="token keyword">from</span> <span class="token string">"svelte-focus-key"</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">let</span> textarea<span class="token punctuation">;</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>textarea</span> <span class="token attr-name"><span class="token namespace">bind:</span>this=</span><span class="token language-javascript"><span class="token punctuation">{</span>textarea<span class="token punctuation">}</span></span> <span class="token attr-name">placeholder=</span><span class="token language-javascript"><span class="token punctuation">{</span><span class="token string">\'Press "s" to focus\'</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>FocusKey</span> <span class="token attr-name">element=</span><span class="token language-javascript"><span class="token punctuation">{</span>textarea<span class="token punctuation">}</span></span> <span class="token attr-name">key</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>s<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n',p(s,dn),p(s,fn),p(s,gn),p(s,hn),p(s,mn),p(s,yn),p(yn,vn),p(s,$n),$n.innerHTML='<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">\n  <span class="token keyword">import</span> <span class="token punctuation">{</span> focusKey <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"svelte-focus-key"</span><span class="token punctuation">;</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name"><span class="token namespace">use:</span>focusKey=</span><span class="token language-javascript"><span class="token punctuation">{</span><span class="token punctuation">{</span> key<span class="token operator">:</span> <span class="token string">"k"</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span> <span class="token attr-name">placeholder=</span><span class="token language-javascript"><span class="token punctuation">{</span><span class="token string">\'Press "k" to focus\'</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n',p(s,bn),p(s,xn),p(s,Tn),p(s,Ln),p(s,wn),p(s,Mn),p(s,Hn),p(s,Cn),p(s,_n),p(s,En),p(s,jn),p(s,Pn),p(s,Nn),p(s,Sn),p(s,Kn),p(s,An),p(s,Dn),p(s,On),p(s,In),p(s,qn),Bn=!0,Fn||(i=O.call(null,vn,{key:"k"}),Gn=i&&a(i.destroy)?i.destroy:n,Fn=!0)},p(n,[t]){const s={};1&t&&(s.element=n[0]),nn.$set(s);const e={};2&t&&(e.element=n[1]),rn.$set(e)},i(n){Bn||(w(nn.$$.fragment,n),w(rn.$$.fragment,n),Bn=!0)},o(n){M(nn.$$.fragment,n),M(rn.$$.fragment,n),Bn=!1},d(n){n&&c(s),t[2](null),E(nn),t[3](null),E(rn),Fn=!1,Gn()}}}function q(n,t,s){let e,a;return[e,a,function(n){f[n?"unshift":"push"]((()=>{e=n,s(0,e)}))},function(n){f[n?"unshift":"push"]((()=>{a=n,s(1,a)}))}]}return new class extends N{constructor(n){super(),P(this,n,q,I,o,{})}}({target:document.body})}();
