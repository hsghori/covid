(this.webpackJsonpcovid=this.webpackJsonpcovid||[]).push([[0],{227:function(e,t,a){e.exports=a(429)},232:function(e,t,a){},429:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(13),o=a.n(c),l=(a(232),a(59)),i=a(177),s=a.n(i),u=a(192),m=a(473),d=a(489),f=a(481),h=a(483),p=a(482),v=a(189),E=a.n(v),g=a(190),b=a.n(g),w=a(484),y=a(485),x=a(486),j=a(490),O=a(478),k=a(491),C=a(479),S=a(487),N=a(476),I=a(477),z=a(480),L=a(432),W=a(178),D=a.n(W),B=a(179),M=a.n(B),J=a(113),K=a(40),U={ln:{text:"Log base e",fn:Math.log},log2:{text:"Log base 2",fn:Math.log2},log10:{text:"Log base 10",fn:Math.log10},unscaled:{text:"Unscaled",fn:function(e){return e}}},P=["green","red","blue","yellow","violet","orange","pink"],T=function(e){var t=U[e.scale],a={};e.states.forEach((function(n){e.statesData[n].forEach((function(e){var r;e.date in a?a[e.date][n]=t.fn(e.cases):a[e.date]=(r={},Object(J.a)(r,n,t.fn(e.cases)),Object(J.a)(r,"date",e.date),r)}))}));var n=Object.keys(a).sort().map((function(t){var n=a[t];return e.states.forEach((function(e){e in n||(n[e]=0)})),n}));if(e.derivative&&(n=n.map((function(t,a){var r=a>0?n[a-1]:n[a],c={date:t.date};return e.states.forEach((function(e){c[e]=t[e]-r[e]})),c}))),e.windowSize>1){for(var c=[],o=function(t){var a={date:n[t].date};e.states.forEach((function(r){for(var c=0,o=0,l=t;l<t+e.windowSize&&!(l>=n.length);l++)c+=n[l][r],o+=1;a[r]=c/o})),c.push(a)},l=0;l<n.length;l+=e.windowSize)o(l);n=c}return r.a.createElement(K.c,null,r.a.createElement(K.b,{data:n},r.a.createElement(K.e,{dataKey:"date"}),r.a.createElement(K.f,null),r.a.createElement(K.d,null),e.states.map((function(e,t){return r.a.createElement(K.a,{type:"monotone",dot:!1,activeDot:!0,key:e,dataKey:e,label:e,stroke:P[t%P.length]})}))))};T.defaultProps={derivative:!1,windowSize:1};var Y=Object(u.a)({palette:{type:"dark",primary:E.a,secondary:b.a}}),$=Object(m.a)((function(e){return Object(d.a)({root:{height:"100%",width:"80%",marginTop:"16px",display:"flex",flexDirection:"column",alignItems:"center"},app:{width:"80%",height:"100%",overflowY:"auto"},formControl:{margin:e.spacing(1),minWidth:120,maxWidth:640},filterCard:{width:"100%",padding:"16px",flexShrink:.2},chartCard:{width:"100%",padding:"16px 16px 40px 16px",margin:"32px 0 32px 0",flex:.75},derivativeCheckbox:{marginLeft:"8px"}})})),q=function(){var e=$(Y),t=Object(n.useState)(),a=Object(l.a)(t,2),c=a[0],o=a[1],i=Object(n.useState)([]),u=Object(l.a)(i,2),m=u[0],d=u[1],v=Object(n.useState)("unscaled"),E=Object(l.a)(v,2),g=E[0],b=E[1],W=Object(n.useState)(!1),B=Object(l.a)(W,2),J=B[0],K=B[1],P=Object(n.useState)(1),q=Object(l.a)(P,2),A=q[0],F=q[1];Object(n.useEffect)((function(){var e={};D.a.get("https://raw.githubusercontent.com/nytimes/covid-19-data/master/us-states.csv").then((function(t){var a=t.data;s.a.toObjects(a).forEach((function(t){var a=t.date,n=t.state,r=t.cases,c=t.deaths;n in e?e[n].push({date:a,cases:parseInt(r),deaths:parseInt(c)}):e[n]=[{date:a,cases:parseInt(r),deaths:parseInt(c)}]})),Object.keys(e).forEach((function(t){e[t].sort((function(e,t){return e.date>t.date?1:-1}))})),o(e)}))}),[]);var G=function(e){d(e.target.value)},H=function(e){b(e.target.value)},Q=function(e){K(e.target.checked)},R=function(e){F(e.target.value)},V=Object.keys(c||{}).sort((function(e,t){return e>t?1:-1})).map((function(e){return r.a.createElement(j.a,{key:e,value:e},e)})),X=Object.keys(U).map((function(e,t){return r.a.createElement(j.a,{key:t,value:e},U[e].text)})),Z=M.a.range(1,8).map((function(e){return r.a.createElement(j.a,{key:e,value:e},e)}));return r.a.createElement(f.a,{theme:Y},r.a.createElement(p.a,null,r.a.createElement(h.a,{className:e.root},r.a.createElement(w.a,{container:!0,direction:"column",alignItems:"center",justify:"flex-start",display:"flex",className:e.app},r.a.createElement(y.a,{className:e.filterCard},r.a.createElement(L.a,{variant:"h5",component:"h5"},"Options"),c?r.a.createElement(I.a,{row:!0},r.a.createElement(O.a,{className:e.formControl},r.a.createElement(k.a,null,"States"),r.a.createElement(x.a,{multiple:!0,value:m,displayEmpty:!0,input:r.a.createElement(C.a,null),onChange:G},V)),r.a.createElement(O.a,{className:e.formControl},r.a.createElement(k.a,null,"Scales"),r.a.createElement(x.a,{value:g,displayEmpty:!0,input:r.a.createElement(C.a,null),onChange:H},X)),r.a.createElement(O.a,{className:e.formControl,row:!0},r.a.createElement(k.a,null,"Window (days)"),r.a.createElement(x.a,{value:A,input:r.a.createElement(C.a,null),onChange:R},Z)),r.a.createElement(z.a,{className:e.derivativeCheckbox,control:r.a.createElement(S.a,{checked:J,onChange:Q,color:"primary"}),label:r.a.createElement(k.a,{className:e.checkboxLabel},"Use derivative")})):r.a.createElement(N.a,null)),m.length>0&&r.a.createElement(y.a,{className:e.chartCard},r.a.createElement(L.a,{component:"h6",gutterBottom:!0},function(){var e=J?" New":"",t="".concat(A," day").concat(A>1?"s":""," window");return"".concat(U[g].text," Number of").concat(e," Cases - ").concat(t)}()),r.a.createElement(T,{states:m,statesData:c,scale:g,derivative:J,windowSize:A}))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(q,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[227,1,2]]]);
//# sourceMappingURL=main.cc69d4d4.chunk.js.map