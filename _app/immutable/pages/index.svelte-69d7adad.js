import{S as lt,i as st,s as at,l as b,u as n,a as R,m as w,p as D,v as r,h as v,c as Z,q as M,r as et,b as it,J as e,w as z,n as Y,o as nt,x as rt,y as ot,z as dt,f as ut,t as ct,C as mt}from"../chunks/index-03969575.js";function ht(t){let l,s,o,u,_,T,d,E,i,a,S,h,c,K,P,I,V,W,F,C=Math.floor(t[0])+"",k,J,f,g,j,A,B,G,N,O,Q,U;return{c(){l=b("div"),s=b("p"),o=n(t[1]),u=R(),_=b("div"),T=b("div"),d=b("div"),E=R(),i=b("div"),a=b("p"),S=n("Elapsed: "),h=n(t[5]),c=n(" days - "),K=n(t[4]),P=n(":"),I=n(t[3]),V=n(":"),W=n(t[2]),F=n(" ("),k=n(C),J=n("%)"),f=R(),g=b("p"),j=n("Total: "),A=n(t[6]),B=n(" days - "),G=n(t[7]),N=n(":"),O=n(t[8]),Q=n(":"),U=n(t[9]),this.h()},l(p){l=w(p,"DIV",{class:!0});var m=D(l);s=w(m,"P",{class:!0});var x=D(s);o=r(x,t[1]),x.forEach(v),u=Z(m),_=w(m,"DIV",{class:!0});var $=D(_);T=w($,"DIV",{class:!0});var tt=D(T);d=w(tt,"DIV",{class:!0,style:!0}),D(d).forEach(v),tt.forEach(v),$.forEach(v),E=Z(m),i=w(m,"DIV",{class:!0});var L=D(i);a=w(L,"P",{class:!0});var y=D(a);S=r(y,"Elapsed: "),h=r(y,t[5]),c=r(y," days - "),K=r(y,t[4]),P=r(y,":"),I=r(y,t[3]),V=r(y,":"),W=r(y,t[2]),F=r(y," ("),k=r(y,C),J=r(y,"%)"),y.forEach(v),f=Z(L),g=w(L,"P",{class:!0});var H=D(g);j=r(H,"Total: "),A=r(H,t[6]),B=r(H," days - "),G=r(H,t[7]),N=r(H,":"),O=r(H,t[8]),Q=r(H,":"),U=r(H,t[9]),H.forEach(v),L.forEach(v),m.forEach(v),this.h()},h(){M(s,"class","absolute -top-7 font-bold text-white"),M(d,"class","bar bg-green-500 h-full svelte-p8mp6v"),et(d,"--bar-width",t[0]+"%"),M(T,"class","bg-white h-4"),M(_,"class","absolute h-full w-full px-4 py-6"),M(a,"class","absolute right-4 top-1 text-sm"),M(g,"class","absolute right-4 bottom-1 text-sm"),M(i,"class","absolute h-full w-full text-white font-bold"),M(l,"class","bg-gray-800 mb-4 mt-16 h-16 flex flex-col relative")},m(p,m){it(p,l,m),e(l,s),e(s,o),e(l,u),e(l,_),e(_,T),e(T,d),e(l,E),e(l,i),e(i,a),e(a,S),e(a,h),e(a,c),e(a,K),e(a,P),e(a,I),e(a,V),e(a,W),e(a,F),e(a,k),e(a,J),e(i,f),e(i,g),e(g,j),e(g,A),e(g,B),e(g,G),e(g,N),e(g,O),e(g,Q),e(g,U)},p(p,[m]){m&2&&z(o,p[1]),m&1&&et(d,"--bar-width",p[0]+"%"),m&32&&z(h,p[5]),m&16&&z(K,p[4]),m&8&&z(I,p[3]),m&4&&z(W,p[2]),m&1&&C!==(C=Math.floor(p[0])+"")&&z(k,C)},i:Y,o:Y,d(p){p&&v(l)}}}const ft=0,vt=100,X=1e3;function _t(t,l,s){return Math.min(Math.max(t,l),s)}function q(t){return t=Math.floor(t),t.toString().padStart(2,"0")}function Tt(t,l,s){let o,u,_,T,d,E,{title:i="Shelter Time Vis"}=l,{startTime:a="2022-06-21T20:00:00"}=l;a=new Date(a);let S=a.getTime(),{endTime:h="2022-06-21T20:30:00"}=l;h=new Date(h);let c=h.getTime(),K=Date.now();nt(()=>{const f=setInterval(()=>{s(13,K=Date.now())},1e3);return()=>{clearInterval(f)}}),c=c-S;let{barWidth:P=0}=l;const I=X*60,V=I*60,W=V*24;let F=q(c/W),C=q(c%W/V),k=q(c%V/I),J=q(c%I/X);return t.$$set=f=>{"title"in f&&s(1,i=f.title),"startTime"in f&&s(10,a=f.startTime),"endTime"in f&&s(11,h=f.endTime),"barWidth"in f&&s(0,P=f.barWidth)},t.$$.update=()=>{t.$$.dirty&8192&&s(15,o=K-S),t.$$.dirty&36864&&s(0,P=Math.min(Math.max(o/c*100,ft),vt)),t.$$.dirty&36864&&s(14,u=_t(o,0,c)),t.$$.dirty&16384&&s(5,_=q(u/W)),t.$$.dirty&16384&&s(4,T=q(u%W/V)),t.$$.dirty&16384&&s(3,d=q(u%V/I)),t.$$.dirty&16384&&s(2,E=q(u%I/X)),t.$$.dirty&1&&P.toLocaleString("da-DK",{style:"currency",currency:"DKK",minimumFractionDigits:2})},[P,i,E,d,T,_,F,C,k,J,a,h,c,K,u,o]}class gt extends lt{constructor(l){super(),st(this,l,Tt,ht,at,{title:1,startTime:10,endTime:11,barWidth:0})}}function pt(t){let l,s,o,u,_,T,d,E;return d=new gt({props:{startTime:"2022-07-18T22:00:00",endTime:"2023-07-20T07:00:00"}}),{c(){l=b("div"),s=b("div"),o=b("div"),u=b("h1"),_=n("Shelter time vis !"),T=R(),rt(d.$$.fragment),this.h()},l(i){l=w(i,"DIV",{class:!0});var a=D(l);s=w(a,"DIV",{class:!0});var S=D(s);o=w(S,"DIV",{class:!0});var h=D(o);u=w(h,"H1",{class:!0});var c=D(u);_=r(c,"Shelter time vis !"),c.forEach(v),T=Z(h),ot(d.$$.fragment,h),h.forEach(v),S.forEach(v),a.forEach(v),this.h()},h(){M(u,"class","font-black text-2xl text-white"),M(o,"class","w-full"),M(s,"class","mx-auto my-auto max-w-6xl md:w-2/3 w-full p-8"),M(l,"class","bg-blue-500 w-full min-h-screen flex")},m(i,a){it(i,l,a),e(l,s),e(s,o),e(o,u),e(u,_),e(o,T),dt(d,o,null),E=!0},p:Y,i(i){E||(ut(d.$$.fragment,i),E=!0)},o(i){ct(d.$$.fragment,i),E=!1},d(i){i&&v(l),mt(d)}}}class bt extends lt{constructor(l){super(),st(this,l,null,pt,at,{})}}export{bt as default};