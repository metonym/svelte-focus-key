import{S as $e,i as Ce,s as Ke,l as e,u as c,a as r,x as xs,m as p,p as l,v as u,h as a,c as i,y as qs,R as ze,q as k,b as o,J as t,z as Is,O as Be,f as Us,t as Ns,C as zs,K as da,n as Ye}from"../chunks/index-14d8cedd.js";import{F as _a}from"../chunks/FocusKey-2f3c0c51.js";import{f as Ge}from"../chunks/focus-key-ae68d5eb.js";function Je(m){let v,d,f,_,h,D,Ea,ls,H,Y,Bs,y,os,ct,ha,cs,ut,ga,G,He=`<code class="language-bash"><span class="token comment"># Yarn</span>
<span class="token function">yarn</span> <span class="token function">add</span> -D svelte-focus-key

<span class="token comment"># NPM</span>
<span class="token function">npm</span> i -D svelte-focus-key

<span class="token comment"># pnpm</span>
<span class="token function">pnpm</span> i -D svelte-focus-key</code>`,Ta,us,rt,wa,J,Ys,it,kt,ba,P,ft,Q,mt,vt,Gs,yt,dt,Da,rs,Pa,j,$a,X,je=`<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> FocusKey <span class="token keyword">from</span> <span class="token string">"svelte-focus-key"</span><span class="token punctuation">;</span>

  <span class="token keyword">let</span> element<span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name"><span class="token namespace">bind:</span>this=</span><span class="token language-javascript"><span class="token punctuation">&#123;</span>element<span class="token punctuation">&#125;</span></span> <span class="token attr-name">placeholder=</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token string">'Press "/" to focus'</span><span class="token punctuation">&#125;</span></span> <span class="token punctuation">/></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>FocusKey</span> <span class="token language-javascript"><span class="token punctuation">&#123;</span>element<span class="token punctuation">&#125;</span></span> <span class="token punctuation">/></span></span></code>`,Ca,is,_t,Ka,$,Et,Js,ht,gt,Qs,Tt,wt,Ha,V,ja,O,Oa,W,Oe=`<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> FocusKey <span class="token keyword">from</span> <span class="token string">"svelte-focus-key"</span><span class="token punctuation">;</span>

  <span class="token keyword">let</span> textarea<span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>textarea</span> <span class="token attr-name"><span class="token namespace">bind:</span>this=</span><span class="token language-javascript"><span class="token punctuation">&#123;</span>textarea<span class="token punctuation">&#125;</span></span> <span class="token attr-name">placeholder=</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token string">'Press "s" to focus'</span><span class="token punctuation">&#125;</span></span> <span class="token punctuation">/></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>FocusKey</span> <span class="token attr-name">element=</span><span class="token language-javascript"><span class="token punctuation">&#123;</span>textarea<span class="token punctuation">&#125;</span></span> <span class="token attr-name">key</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>s<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></code>`,Ma,ks,bt,Fa,M,Dt,Xs,Pt,$t,Ra,fs,La,F,Aa,Z,Me=`<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> FocusKey <span class="token keyword">from</span> <span class="token string">"svelte-focus-key"</span><span class="token punctuation">;</span>

  <span class="token keyword">let</span> node<span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name"><span class="token namespace">bind:</span>this=</span><span class="token language-javascript"><span class="token punctuation">&#123;</span>node<span class="token punctuation">&#125;</span></span> <span class="token attr-name">placeholder=</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token string">'Press "a" or "b"'</span><span class="token punctuation">&#125;</span></span> <span class="token punctuation">/></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>FocusKey</span> <span class="token attr-name">element=</span><span class="token language-javascript"><span class="token punctuation">&#123;</span>node<span class="token punctuation">&#125;</span></span> <span class="token attr-name">key=</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token punctuation">[</span><span class="token string">"a"</span><span class="token punctuation">,</span> <span class="token string">"b"</span><span class="token punctuation">]</span><span class="token punctuation">&#125;</span></span> <span class="token punctuation">/></span></span></code>`,Sa,ms,Ct,xa,R,Kt,Vs,Ht,jt,qa,vs,Ia,L,Ua,ss,Fe=`<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> FocusKey <span class="token keyword">from</span> <span class="token string">"svelte-focus-key"</span><span class="token punctuation">;</span>

  <span class="token keyword">let</span> element<span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name"><span class="token namespace">bind:</span>this=</span><span class="token language-javascript"><span class="token punctuation">&#123;</span>element<span class="token punctuation">&#125;</span></span> <span class="token attr-name">placeholder=</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token string">'Press "\u2318+k" to focus'</span><span class="token punctuation">&#125;</span></span> <span class="token punctuation">/></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>FocusKey</span> <span class="token language-javascript"><span class="token punctuation">&#123;</span>element<span class="token punctuation">&#125;</span></span> <span class="token attr-name">key</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Meta+k<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></code>`,Na,ys,Ot,za,C,Mt,Ws,Ft,Rt,Zs,Lt,At,Ba,as,Ya,A,Ga,ts,Re=`<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> FocusKey <span class="token keyword">from</span> <span class="token string">"svelte-focus-key"</span><span class="token punctuation">;</span>

  <span class="token keyword">let</span> input<span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span>
  <span class="token attr-name"><span class="token namespace">bind:</span>this=</span><span class="token language-javascript"><span class="token punctuation">&#123;</span>input<span class="token punctuation">&#125;</span></span>
  <span class="token attr-name">value=</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token string">'Press "e" to focus'</span><span class="token punctuation">&#125;</span></span>
  <span class="token attr-name">placeholder=</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token string">'Press "e" to focus'</span><span class="token punctuation">&#125;</span></span>
<span class="token punctuation">/></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>FocusKey</span> <span class="token attr-name">element=</span><span class="token language-javascript"><span class="token punctuation">&#123;</span>input<span class="token punctuation">&#125;</span></span> <span class="token attr-name">key</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>e<span class="token punctuation">"</span></span> <span class="token attr-name">selectText</span> <span class="token punctuation">/></span></span></code>`,Ja,ns,sa,St,xt,Qa,S,qt,es,It,Ut,Xa,ds,Va,ps,Le=`<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> focusKey <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">"svelte-focus-key"</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name"><span class="token namespace">use:</span>focusKey=</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token punctuation">&#123;</span> <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">"q"</span> <span class="token punctuation">&#125;</span><span class="token punctuation">&#125;</span></span> <span class="token attr-name">placeholder=</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token string">'Press "q" to focus'</span><span class="token punctuation">&#125;</span></span> <span class="token punctuation">/></span></span></code>`,Wa,_s,Nt,Za,Es,zt,st,x,aa,g,hs,Bt,Yt,gs,Gt,Jt,Ts,Qt,Xt,ws,Vt,Wt,K,T,bs,Zt,sn,Ds,an,tn,Ps,ta,nn,en,$s,na,pn,ln,w,Cs,on,cn,Ks,un,rn,q,ea,kn,fn,pa,mn,vn,Hs,la,yn,dn,b,js,_n,En,Os,hn,gn,Ms,oa,Tn,wn,Fs,ca,bn,at,E,Dn,ua,Pn,$n,ra,Cn,Kn,ia,Hn,jn,tt,On,Rn;return j=new _a({props:{element:m[0]}}),O=new _a({props:{element:m[1],key:"s"}}),F=new _a({props:{element:m[2],key:["a","b"]}}),L=new _a({props:{element:m[0],key:"Meta+k"}}),A=new _a({props:{element:m[3],key:"e",selectText:!0}}),{c(){v=e("h1"),d=c("svelte-focus-key"),f=r(),_=e("p"),h=e("a"),D=e("img"),ls=r(),H=e("blockquote"),Y=e("p"),Bs=c("Svelte component and action to focus an element when pressing a key"),y=r(),os=e("p"),ct=c('The primary use case is to focus a search input when pressing the forward slash key ("/").'),ha=r(),cs=e("h2"),ut=c("Installation"),ga=r(),G=e("pre"),Ta=r(),us=e("h2"),rt=c("Usage"),wa=r(),J=e("h3"),Ys=e("code"),it=c("FocusKey"),kt=c(" component"),ba=r(),P=e("p"),ft=c("Use the "),Q=e("a"),mt=c("bind:this"),vt=c(" directive to pass the element to focus to the "),Gs=e("code"),yt=c("FocusKey"),dt=c(" component."),Da=r(),rs=e("input"),Pa=r(),xs(j.$$.fragment),$a=r(),X=e("pre"),Ca=r(),is=e("h3"),_t=c("Custom focus key"),Ka=r(),$=e("p"),Et=c("The default focus key is the forward slash ("),Js=e("code"),ht=c("/"),gt=c("). Customize the key using the "),Qs=e("code"),Tt=c("key"),wt=c(" prop."),Ha=r(),V=e("textarea"),ja=r(),xs(O.$$.fragment),Oa=r(),W=e("pre"),Ma=r(),ks=e("h3"),bt=c("Multiple focus keys"),Fa=r(),M=e("p"),Dt=c("The "),Xs=e("code"),Pt=c("key"),$t=c(" prop can also accept an array of keys."),Ra=r(),fs=e("input"),La=r(),xs(F.$$.fragment),Aa=r(),Z=e("pre"),Sa=r(),ms=e("h3"),Ct=c("Combination of keys"),xa=r(),R=e("p"),Kt=c("A combination of keys should be separated by a "),Vs=e("code"),Ht=c("+"),jt=c("."),qa=r(),vs=e("input"),Ia=r(),xs(L.$$.fragment),Ua=r(),ss=e("pre"),Na=r(),ys=e("h3"),Ot=c("Select text on focus"),za=r(),C=e("p"),Mt=c("Set "),Ws=e("code"),Ft=c("selectText"),Rt=c(" to "),Zs=e("code"),Lt=c("true"),At=c(" to select the text in the element when focusing."),Ba=r(),as=e("input"),Ya=r(),xs(A.$$.fragment),Ga=r(),ts=e("pre"),Ja=r(),ns=e("h3"),sa=e("code"),St=c("focusKey"),xt=c(" action"),Qa=r(),S=e("p"),qt=c("This utility also provides a "),es=e("a"),It=c("Svelte action"),Ut=c("."),Xa=r(),ds=e("input"),Va=r(),ps=e("pre"),Wa=r(),_s=e("h2"),Nt=c("API"),Za=r(),Es=e("h3"),zt=c("Props"),st=r(),x=e("table"),aa=e("thead"),g=e("tr"),hs=e("th"),Bt=c("Name"),Yt=r(),gs=e("th"),Gt=c("Description"),Jt=r(),Ts=e("th"),Qt=c("Type"),Xt=r(),ws=e("th"),Vt=c("Default value"),Wt=r(),K=e("tbody"),T=e("tr"),bs=e("td"),Zt=c("element"),sn=r(),Ds=e("td"),an=c("HTML element to focus"),tn=r(),Ps=e("td"),ta=e("code"),nn=c("HTMLElement"),en=r(),$s=e("td"),na=e("code"),pn=c("null"),ln=r(),w=e("tr"),Cs=e("td"),on=c("key"),cn=r(),Ks=e("td"),un=c("Key to trigger focus when pressed"),rn=r(),q=e("td"),ea=e("code"),kn=c("string"),fn=c(" or "),pa=e("code"),mn=c("string[]"),vn=r(),Hs=e("td"),la=e("code"),yn=c('"/"'),dn=r(),b=e("tr"),js=e("td"),_n=c("selectText"),En=r(),Os=e("td"),hn=c("Select element text when focusing"),gn=r(),Ms=e("td"),oa=e("code"),Tn=c("boolean"),wn=r(),Fs=e("td"),ca=e("code"),bn=c("false"),at=r(),E=e("p"),Dn=c("The "),ua=e("code"),Pn=c("focusKey"),$n=c(" action has the same props as "),ra=e("code"),Cn=c("FocusKey"),Kn=c(" except for "),ia=e("code"),Hn=c("element"),jn=c("."),this.h()},l(s){v=p(s,"H1",{});var n=l(v);d=u(n,"svelte-focus-key"),n.forEach(a),f=i(s),_=p(s,"P",{});var ka=l(_);h=p(ka,"A",{href:!0,rel:!0});var fa=l(h);D=p(fa,"IMG",{src:!0,alt:!0}),fa.forEach(a),ka.forEach(a),ls=i(s),H=p(s,"BLOCKQUOTE",{});var ma=l(H);Y=p(ma,"P",{});var va=l(Y);Bs=u(va,"Svelte component and action to focus an element when pressing a key"),va.forEach(a),ma.forEach(a),y=i(s),os=p(s,"P",{});var ya=l(os);ct=u(ya,'The primary use case is to focus a search input when pressing the forward slash key ("/").'),ya.forEach(a),ha=i(s),cs=p(s,"H2",{});var Ln=l(cs);ut=u(Ln,"Installation"),Ln.forEach(a),ga=i(s),G=p(s,"PRE",{class:!0});var Ae=l(G);Ae.forEach(a),Ta=i(s),us=p(s,"H2",{});var An=l(us);rt=u(An,"Usage"),An.forEach(a),wa=i(s),J=p(s,"H3",{});var Mn=l(J);Ys=p(Mn,"CODE",{});var Sn=l(Ys);it=u(Sn,"FocusKey"),Sn.forEach(a),kt=u(Mn," component"),Mn.forEach(a),ba=i(s),P=p(s,"P",{});var Rs=l(P);ft=u(Rs,"Use the "),Q=p(Rs,"A",{href:!0,rel:!0});var xn=l(Q);mt=u(xn,"bind:this"),xn.forEach(a),vt=u(Rs," directive to pass the element to focus to the "),Gs=p(Rs,"CODE",{});var qn=l(Gs);yt=u(qn,"FocusKey"),qn.forEach(a),dt=u(Rs," component."),Rs.forEach(a),Da=i(s),rs=p(s,"INPUT",{placeholder:!0}),Pa=i(s),qs(j.$$.fragment,s),$a=i(s),X=p(s,"PRE",{class:!0});var Se=l(X);Se.forEach(a),Ca=i(s),is=p(s,"H3",{});var In=l(is);_t=u(In,"Custom focus key"),In.forEach(a),Ka=i(s),$=p(s,"P",{});var Ls=l($);Et=u(Ls,"The default focus key is the forward slash ("),Js=p(Ls,"CODE",{});var Un=l(Js);ht=u(Un,"/"),Un.forEach(a),gt=u(Ls,"). Customize the key using the "),Qs=p(Ls,"CODE",{});var Nn=l(Qs);Tt=u(Nn,"key"),Nn.forEach(a),wt=u(Ls," prop."),Ls.forEach(a),Ha=i(s),V=p(s,"TEXTAREA",{placeholder:!0}),l(V).forEach(a),ja=i(s),qs(O.$$.fragment,s),Oa=i(s),W=p(s,"PRE",{class:!0});var xe=l(W);xe.forEach(a),Ma=i(s),ks=p(s,"H3",{});var zn=l(ks);bt=u(zn,"Multiple focus keys"),zn.forEach(a),Fa=i(s),M=p(s,"P",{});var nt=l(M);Dt=u(nt,"The "),Xs=p(nt,"CODE",{});var Bn=l(Xs);Pt=u(Bn,"key"),Bn.forEach(a),$t=u(nt," prop can also accept an array of keys."),nt.forEach(a),Ra=i(s),fs=p(s,"INPUT",{placeholder:!0}),La=i(s),qs(F.$$.fragment,s),Aa=i(s),Z=p(s,"PRE",{class:!0});var qe=l(Z);qe.forEach(a),Sa=i(s),ms=p(s,"H3",{});var Yn=l(ms);Ct=u(Yn,"Combination of keys"),Yn.forEach(a),xa=i(s),R=p(s,"P",{});var et=l(R);Kt=u(et,"A combination of keys should be separated by a "),Vs=p(et,"CODE",{});var Gn=l(Vs);Ht=u(Gn,"+"),Gn.forEach(a),jt=u(et,"."),et.forEach(a),qa=i(s),vs=p(s,"INPUT",{placeholder:!0}),Ia=i(s),qs(L.$$.fragment,s),Ua=i(s),ss=p(s,"PRE",{class:!0});var Ie=l(ss);Ie.forEach(a),Na=i(s),ys=p(s,"H3",{});var Jn=l(ys);Ot=u(Jn,"Select text on focus"),Jn.forEach(a),za=i(s),C=p(s,"P",{});var As=l(C);Mt=u(As,"Set "),Ws=p(As,"CODE",{});var Qn=l(Ws);Ft=u(Qn,"selectText"),Qn.forEach(a),Rt=u(As," to "),Zs=p(As,"CODE",{});var Xn=l(Zs);Lt=u(Xn,"true"),Xn.forEach(a),At=u(As," to select the text in the element when focusing."),As.forEach(a),Ba=i(s),as=p(s,"INPUT",{placeholder:!0}),Ya=i(s),qs(A.$$.fragment,s),Ga=i(s),ts=p(s,"PRE",{class:!0});var Ue=l(ts);Ue.forEach(a),Ja=i(s),ns=p(s,"H3",{});var Fn=l(ns);sa=p(Fn,"CODE",{});var Vn=l(sa);St=u(Vn,"focusKey"),Vn.forEach(a),xt=u(Fn," action"),Fn.forEach(a),Qa=i(s),S=p(s,"P",{});var pt=l(S);qt=u(pt,"This utility also provides a "),es=p(pt,"A",{href:!0,rel:!0});var Wn=l(es);It=u(Wn,"Svelte action"),Wn.forEach(a),Ut=u(pt,"."),pt.forEach(a),Xa=i(s),ds=p(s,"INPUT",{placeholder:!0}),Va=i(s),ps=p(s,"PRE",{class:!0});var Ne=l(ps);Ne.forEach(a),Wa=i(s),_s=p(s,"H2",{});var Zn=l(_s);Nt=u(Zn,"API"),Zn.forEach(a),Za=i(s),Es=p(s,"H3",{});var se=l(Es);zt=u(se,"Props"),se.forEach(a),st=i(s),x=p(s,"TABLE",{});var lt=l(x);aa=p(lt,"THEAD",{});var ae=l(aa);g=p(ae,"TR",{});var I=l(g);hs=p(I,"TH",{align:!0});var te=l(hs);Bt=u(te,"Name"),te.forEach(a),Yt=i(I),gs=p(I,"TH",{align:!0});var ne=l(gs);Gt=u(ne,"Description"),ne.forEach(a),Jt=i(I),Ts=p(I,"TH",{align:!0});var ee=l(Ts);Qt=u(ee,"Type"),ee.forEach(a),Xt=i(I),ws=p(I,"TH",{align:!0});var pe=l(ws);Vt=u(pe,"Default value"),pe.forEach(a),I.forEach(a),ae.forEach(a),Wt=i(lt),K=p(lt,"TBODY",{});var Ss=l(K);T=p(Ss,"TR",{});var U=l(T);bs=p(U,"TD",{align:!0});var le=l(bs);Zt=u(le,"element"),le.forEach(a),sn=i(U),Ds=p(U,"TD",{align:!0});var oe=l(Ds);an=u(oe,"HTML element to focus"),oe.forEach(a),tn=i(U),Ps=p(U,"TD",{align:!0});var ce=l(Ps);ta=p(ce,"CODE",{});var ue=l(ta);nn=u(ue,"HTMLElement"),ue.forEach(a),ce.forEach(a),en=i(U),$s=p(U,"TD",{align:!0});var re=l($s);na=p(re,"CODE",{});var ie=l(na);pn=u(ie,"null"),ie.forEach(a),re.forEach(a),U.forEach(a),ln=i(Ss),w=p(Ss,"TR",{});var N=l(w);Cs=p(N,"TD",{align:!0});var ke=l(Cs);on=u(ke,"key"),ke.forEach(a),cn=i(N),Ks=p(N,"TD",{align:!0});var fe=l(Ks);un=u(fe,"Key to trigger focus when pressed"),fe.forEach(a),rn=i(N),q=p(N,"TD",{align:!0});var ot=l(q);ea=p(ot,"CODE",{});var me=l(ea);kn=u(me,"string"),me.forEach(a),fn=u(ot," or "),pa=p(ot,"CODE",{});var ve=l(pa);mn=u(ve,"string[]"),ve.forEach(a),ot.forEach(a),vn=i(N),Hs=p(N,"TD",{align:!0});var ye=l(Hs);la=p(ye,"CODE",{});var de=l(la);yn=u(de,'"/"'),de.forEach(a),ye.forEach(a),N.forEach(a),dn=i(Ss),b=p(Ss,"TR",{});var z=l(b);js=p(z,"TD",{align:!0});var _e=l(js);_n=u(_e,"selectText"),_e.forEach(a),En=i(z),Os=p(z,"TD",{align:!0});var Ee=l(Os);hn=u(Ee,"Select element text when focusing"),Ee.forEach(a),gn=i(z),Ms=p(z,"TD",{align:!0});var he=l(Ms);oa=p(he,"CODE",{});var ge=l(oa);Tn=u(ge,"boolean"),ge.forEach(a),he.forEach(a),wn=i(z),Fs=p(z,"TD",{align:!0});var Te=l(Fs);ca=p(Te,"CODE",{});var we=l(ca);bn=u(we,"false"),we.forEach(a),Te.forEach(a),z.forEach(a),Ss.forEach(a),lt.forEach(a),at=i(s),E=p(s,"P",{});var B=l(E);Dn=u(B,"The "),ua=p(B,"CODE",{});var be=l(ua);Pn=u(be,"focusKey"),be.forEach(a),$n=u(B," action has the same props as "),ra=p(B,"CODE",{});var De=l(ra);Cn=u(De,"FocusKey"),De.forEach(a),Kn=u(B," except for "),ia=p(B,"CODE",{});var Pe=l(ia);Hn=u(Pe,"element"),Pe.forEach(a),jn=u(B,"."),B.forEach(a),this.h()},h(){ze(D.src,Ea="https://img.shields.io/npm/v/svelte-focus-key.svg?style=for-the-badge&color=%23ff3e00")||k(D,"src",Ea),k(D,"alt","NPM"),k(h,"href","https://npmjs.com/package/svelte-focus-key"),k(h,"rel","nofollow"),k(G,"class","language-bash"),k(Q,"href","https://svelte.dev/docs#bind_element"),k(Q,"rel","nofollow"),k(rs,"placeholder",'Press "/" to focus'),k(X,"class","language-svelte"),k(V,"placeholder",'Press "s" to focus'),k(W,"class","language-svelte"),k(fs,"placeholder",'Press "a" or "b"'),k(Z,"class","language-svelte"),k(vs,"placeholder",'Press "\u2318+k" to focus'),k(ss,"class","language-svelte"),as.value='Press "e" to focus',k(as,"placeholder",'Press "e" to focus'),k(ts,"class","language-svelte"),k(es,"href","https://svelte.dev/docs#use_action"),k(es,"rel","nofollow"),k(ds,"placeholder",'Press "q" to focus'),k(ps,"class","language-svelte"),k(hs,"align","left"),k(gs,"align","left"),k(Ts,"align","left"),k(ws,"align","left"),k(bs,"align","left"),k(Ds,"align","left"),k(Ps,"align","left"),k($s,"align","left"),k(Cs,"align","left"),k(Ks,"align","left"),k(q,"align","left"),k(Hs,"align","left"),k(js,"align","left"),k(Os,"align","left"),k(Ms,"align","left"),k(Fs,"align","left")},m(s,n){o(s,v,n),t(v,d),o(s,f,n),o(s,_,n),t(_,h),t(h,D),o(s,ls,n),o(s,H,n),t(H,Y),t(Y,Bs),o(s,y,n),o(s,os,n),t(os,ct),o(s,ha,n),o(s,cs,n),t(cs,ut),o(s,ga,n),o(s,G,n),G.innerHTML=He,o(s,Ta,n),o(s,us,n),t(us,rt),o(s,wa,n),o(s,J,n),t(J,Ys),t(Ys,it),t(J,kt),o(s,ba,n),o(s,P,n),t(P,ft),t(P,Q),t(Q,mt),t(P,vt),t(P,Gs),t(Gs,yt),t(P,dt),o(s,Da,n),o(s,rs,n),m[4](rs),o(s,Pa,n),Is(j,s,n),o(s,$a,n),o(s,X,n),X.innerHTML=je,o(s,Ca,n),o(s,is,n),t(is,_t),o(s,Ka,n),o(s,$,n),t($,Et),t($,Js),t(Js,ht),t($,gt),t($,Qs),t(Qs,Tt),t($,wt),o(s,Ha,n),o(s,V,n),m[5](V),o(s,ja,n),Is(O,s,n),o(s,Oa,n),o(s,W,n),W.innerHTML=Oe,o(s,Ma,n),o(s,ks,n),t(ks,bt),o(s,Fa,n),o(s,M,n),t(M,Dt),t(M,Xs),t(Xs,Pt),t(M,$t),o(s,Ra,n),o(s,fs,n),m[6](fs),o(s,La,n),Is(F,s,n),o(s,Aa,n),o(s,Z,n),Z.innerHTML=Me,o(s,Sa,n),o(s,ms,n),t(ms,Ct),o(s,xa,n),o(s,R,n),t(R,Kt),t(R,Vs),t(Vs,Ht),t(R,jt),o(s,qa,n),o(s,vs,n),m[7](vs),o(s,Ia,n),Is(L,s,n),o(s,Ua,n),o(s,ss,n),ss.innerHTML=Fe,o(s,Na,n),o(s,ys,n),t(ys,Ot),o(s,za,n),o(s,C,n),t(C,Mt),t(C,Ws),t(Ws,Ft),t(C,Rt),t(C,Zs),t(Zs,Lt),t(C,At),o(s,Ba,n),o(s,as,n),m[8](as),o(s,Ya,n),Is(A,s,n),o(s,Ga,n),o(s,ts,n),ts.innerHTML=Re,o(s,Ja,n),o(s,ns,n),t(ns,sa),t(sa,St),t(ns,xt),o(s,Qa,n),o(s,S,n),t(S,qt),t(S,es),t(es,It),t(S,Ut),o(s,Xa,n),o(s,ds,n),o(s,Va,n),o(s,ps,n),ps.innerHTML=Le,o(s,Wa,n),o(s,_s,n),t(_s,Nt),o(s,Za,n),o(s,Es,n),t(Es,zt),o(s,st,n),o(s,x,n),t(x,aa),t(aa,g),t(g,hs),t(hs,Bt),t(g,Yt),t(g,gs),t(gs,Gt),t(g,Jt),t(g,Ts),t(Ts,Qt),t(g,Xt),t(g,ws),t(ws,Vt),t(x,Wt),t(x,K),t(K,T),t(T,bs),t(bs,Zt),t(T,sn),t(T,Ds),t(Ds,an),t(T,tn),t(T,Ps),t(Ps,ta),t(ta,nn),t(T,en),t(T,$s),t($s,na),t(na,pn),t(K,ln),t(K,w),t(w,Cs),t(Cs,on),t(w,cn),t(w,Ks),t(Ks,un),t(w,rn),t(w,q),t(q,ea),t(ea,kn),t(q,fn),t(q,pa),t(pa,mn),t(w,vn),t(w,Hs),t(Hs,la),t(la,yn),t(K,dn),t(K,b),t(b,js),t(js,_n),t(b,En),t(b,Os),t(Os,hn),t(b,gn),t(b,Ms),t(Ms,oa),t(oa,Tn),t(b,wn),t(b,Fs),t(Fs,ca),t(ca,bn),o(s,at,n),o(s,E,n),t(E,Dn),t(E,ua),t(ua,Pn),t(E,$n),t(E,ra),t(ra,Cn),t(E,Kn),t(E,ia),t(ia,Hn),t(E,jn),tt=!0,On||(Rn=Be(Ge.call(null,ds,{key:"q"})),On=!0)},p(s,[n]){const ka={};n&1&&(ka.element=s[0]),j.$set(ka);const fa={};n&2&&(fa.element=s[1]),O.$set(fa);const ma={};n&4&&(ma.element=s[2]),F.$set(ma);const va={};n&1&&(va.element=s[0]),L.$set(va);const ya={};n&8&&(ya.element=s[3]),A.$set(ya)},i(s){tt||(Us(j.$$.fragment,s),Us(O.$$.fragment,s),Us(F.$$.fragment,s),Us(L.$$.fragment,s),Us(A.$$.fragment,s),tt=!0)},o(s){Ns(j.$$.fragment,s),Ns(O.$$.fragment,s),Ns(F.$$.fragment,s),Ns(L.$$.fragment,s),Ns(A.$$.fragment,s),tt=!1},d(s){s&&a(v),s&&a(f),s&&a(_),s&&a(ls),s&&a(H),s&&a(y),s&&a(os),s&&a(ha),s&&a(cs),s&&a(ga),s&&a(G),s&&a(Ta),s&&a(us),s&&a(wa),s&&a(J),s&&a(ba),s&&a(P),s&&a(Da),s&&a(rs),m[4](null),s&&a(Pa),zs(j,s),s&&a($a),s&&a(X),s&&a(Ca),s&&a(is),s&&a(Ka),s&&a($),s&&a(Ha),s&&a(V),m[5](null),s&&a(ja),zs(O,s),s&&a(Oa),s&&a(W),s&&a(Ma),s&&a(ks),s&&a(Fa),s&&a(M),s&&a(Ra),s&&a(fs),m[6](null),s&&a(La),zs(F,s),s&&a(Aa),s&&a(Z),s&&a(Sa),s&&a(ms),s&&a(xa),s&&a(R),s&&a(qa),s&&a(vs),m[7](null),s&&a(Ia),zs(L,s),s&&a(Ua),s&&a(ss),s&&a(Na),s&&a(ys),s&&a(za),s&&a(C),s&&a(Ba),s&&a(as),m[8](null),s&&a(Ya),zs(A,s),s&&a(Ga),s&&a(ts),s&&a(Ja),s&&a(ns),s&&a(Qa),s&&a(S),s&&a(Xa),s&&a(ds),s&&a(Va),s&&a(ps),s&&a(Wa),s&&a(_s),s&&a(Za),s&&a(Es),s&&a(st),s&&a(x),s&&a(at),s&&a(E),On=!1,Rn()}}}function Qe(m,v,d){let f,_,h,D;function Ea(y){da[y?"unshift":"push"](()=>{f=y,d(0,f)})}function ls(y){da[y?"unshift":"push"](()=>{_=y,d(1,_)})}function H(y){da[y?"unshift":"push"](()=>{h=y,d(2,h)})}function Y(y){da[y?"unshift":"push"](()=>{f=y,d(0,f)})}function Bs(y){da[y?"unshift":"push"](()=>{D=y,d(3,D)})}return[f,_,h,D,Ea,ls,H,Y,Bs]}class Xe extends $e{constructor(v){super(),Ce(this,v,Qe,Je,Ke,{})}}function Ve(m){let v,d;return v=new Xe({}),{c(){xs(v.$$.fragment)},l(f){qs(v.$$.fragment,f)},m(f,_){Is(v,f,_),d=!0},p:Ye,i(f){d||(Us(v.$$.fragment,f),d=!0)},o(f){Ns(v.$$.fragment,f),d=!1},d(f){zs(v,f)}}}class ap extends $e{constructor(v){super(),Ce(this,v,null,Ve,Ke,{})}}export{ap as default};
