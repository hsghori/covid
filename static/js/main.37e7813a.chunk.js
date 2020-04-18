(this.webpackJsonpcovid=this.webpackJsonpcovid||[]).push([[0],{227:function(e,t,a){e.exports=a(429)},232:function(e,t,a){},429:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),r=a(13),o=a.n(r),l=(a(232),a(59)),s=a(177),i=a.n(s),u=a(192),m=a(473),d=a(489),f=a(481),h=a(483),p=a(482),v=a(189),E=a.n(v),g=a(190),b=a.n(g),w=a(484),y=a(485),x=a(486),j=a(490),O=a(478),k=a(491),C=a(479),S=a(487),N=a(476),I=a(477),z=a(480),L=a(432),W=a(178),D=a.n(W),B=a(179),M=a.n(B),J=a(113),K=a(40),U={ln:{text:"Log base e",fn:Math.log},log2:{text:"Log base 2",fn:Math.log2},log10:{text:"Log base 10",fn:Math.log10},unscaled:{text:"Unscaled",fn:function(e){return e}}},P=function(e){var t=U[e.scale],a={};e.states.forEach((function(n){e.statesData[n].forEach((function(e){var c;e.date in a?a[e.date][n]=t.fn(e.cases):a[e.date]=(c={},Object(J.a)(c,n,t.fn(e.cases)),Object(J.a)(c,"date",e.date),c)}))}));var n=Object.keys(a).sort().map((function(t){var n=a[t];return e.states.forEach((function(e){e in n||(n[e]=0)})),n}));if(e.derivative&&(n=n.map((function(t,a){var c=a>0?n[a-1]:n[a],r={date:t.date};return e.states.forEach((function(e){r[e]=t[e]-c[e]})),r}))),e.windowSize>1){for(var r=[],o=function(t){var a={date:n[t].date};e.states.forEach((function(c){for(var r=0,o=0,l=t;l<t+e.windowSize&&!(l>=n.length);l++)r+=n[l][c],o+=1;a[c]=r/o})),r.push(a)},l=0;l<n.length;l+=e.windowSize)o(l);n=r}return c.a.createElement(K.c,null,c.a.createElement(K.b,{data:n},c.a.createElement(K.e,{dataKey:"date"}),c.a.createElement(K.f,null),c.a.createElement(K.d,null),e.states.map((function(e){return c.a.createElement(K.a,{type:"monotone",dot:!1,activeDot:!0,key:e,dataKey:e})}))))};P.defaultProps={derivative:!1,windowSize:1};var T=Object(u.a)({palette:{type:"dark",primary:E.a,secondary:b.a}}),Y=Object(m.a)((function(e){return Object(d.a)({root:{height:"100%",width:"80%",marginTop:"16px",display:"flex",flexDirection:"column",alignItems:"center"},app:{width:"80%",height:"100%",overflowY:"auto"},formControl:{margin:e.spacing(1),minWidth:120,maxWidth:640},filterCard:{width:"100%",padding:"16px",flexShrink:.2},chartCard:{width:"100%",padding:"16px 16px 40px 16px",margin:"32px 0 32px 0",flex:.75},derivativeCheckbox:{marginLeft:"8px"}})})),$=function(){var e=Y(T),t=Object(n.useState)(),a=Object(l.a)(t,2),r=a[0],o=a[1],s=Object(n.useState)([]),u=Object(l.a)(s,2),m=u[0],d=u[1],v=Object(n.useState)("unscaled"),E=Object(l.a)(v,2),g=E[0],b=E[1],W=Object(n.useState)(!1),B=Object(l.a)(W,2),J=B[0],K=B[1],$=Object(n.useState)(1),q=Object(l.a)($,2),A=q[0],F=q[1];Object(n.useEffect)((function(){var e={};D.a.get("https://raw.githubusercontent.com/nytimes/covid-19-data/master/us-states.csv").then((function(t){var a=t.data;i.a.toObjects(a).forEach((function(t){var a=t.date,n=t.state,c=t.cases,r=t.deaths;n in e?e[n].push({date:a,cases:parseInt(c),deaths:parseInt(r)}):e[n]=[{date:a,cases:parseInt(c),deaths:parseInt(r)}]})),Object.keys(e).forEach((function(t){e[t].sort((function(e,t){return e.date>t.date?1:-1}))})),o(e)}))}),[]);var G=function(e){d(e.target.value)},H=function(e){b(e.target.value)},Q=function(e){K(e.target.checked)},R=function(e){F(e.target.value)},V=Object.keys(r||{}).sort((function(e,t){return e>t?1:-1})).map((function(e){return c.a.createElement(j.a,{key:e,value:e},e)})),X=Object.keys(U).map((function(e,t){return c.a.createElement(j.a,{key:t,value:e},U[e].text)})),Z=M.a.range(1,8).map((function(e){return c.a.createElement(j.a,{key:e,value:e},e)}));return c.a.createElement(f.a,{theme:T},c.a.createElement(p.a,null,c.a.createElement(h.a,{className:e.root},c.a.createElement(w.a,{container:!0,direction:"column",alignItems:"center",justify:"flex-start",display:"flex",className:e.app},c.a.createElement(y.a,{className:e.filterCard},c.a.createElement(L.a,{variant:"h5",component:"h5"},"Options"),r?c.a.createElement(I.a,{row:!0},c.a.createElement(O.a,{className:e.formControl},c.a.createElement(k.a,null,"States"),c.a.createElement(x.a,{multiple:!0,value:m,displayEmpty:!0,input:c.a.createElement(C.a,null),onChange:G},V)),c.a.createElement(O.a,{className:e.formControl},c.a.createElement(k.a,null,"Scales"),c.a.createElement(x.a,{value:g,displayEmpty:!0,input:c.a.createElement(C.a,null),onChange:H},X)),c.a.createElement(O.a,{className:e.formControl,row:!0},c.a.createElement(k.a,null,"Window (days)"),c.a.createElement(x.a,{value:A,input:c.a.createElement(C.a,null),onChange:R},Z)),c.a.createElement(z.a,{className:e.derivativeCheckbox,control:c.a.createElement(S.a,{checked:J,onChange:Q,color:"primary"}),label:c.a.createElement(k.a,{className:e.checkboxLabel},"Use derivative")})):c.a.createElement(N.a,null)),m.length>0&&c.a.createElement(y.a,{className:e.chartCard},c.a.createElement(L.a,{component:"h6",gutterBottom:!0},function(){var e=J?" New":"",t="".concat(A," day").concat(A>1?"s":""," window");return"".concat(U[g].text," Number of").concat(e," Cases - ").concat(t)}()),c.a.createElement(P,{states:m,statesData:r,scale:g,derivative:J,windowSize:A}))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement($,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[227,1,2]]]);
//# sourceMappingURL=main.37e7813a.chunk.js.map