function soon(){var P='',wb='" for "gwt:onLoadErrorFn"',ub='" for "gwt:onPropertyErrorFn"',ib='"><\/script>',Z='#',Eb='&',ic='.cache.html',_='/',Wb='14660FDE4926B2EB61CCF990E51C068F',Yb='3F07CF421BB6766C82DB67F678439259',Zb='470078648F667132D3D09DF61362E0EB',$b='7AB33A4853E1F3D5FA9C0253297D457B',_b='859265A9D5EF9F49DDF8A95C145FE99F',ac='8D2CDBFD030888B21D05880DB590B2D5',bc='99CD12CBCD1B5A0CB6C82A5428A48F2A',cc='9E9BA1EF13AEFA45ABA9AEF1653B0D4D',hc=':',ob='::',qc='<script defer="defer">soon.onInjectionDone(\'soon\')<\/script>',hb='<script id="',rb='=',$='?',dc='B0CF84A1A5B141AA72FAC99BDD8AC65C',tb='Bad handler "',pc='DOMContentLoaded',ec='E00D3E6E8A4E014A418E6CB5A9A4B0F5',fc='EA75C834ABE3BA36465A99F49D745032',gc='F4818C66D93F7038607A656D5E17DD28',jb='SCRIPT',Hb='Unexpected exception in locale detection, using default: ',Gb='_',Fb='__gwt_Locale',gb='__gwt_marker_soon',kb='base',cb='baseUrl',T='begin',S='bootstrap',bb='clear.cache.gif',qb='content',Cb='en',Y='end',Xb='fr',Qb='gecko',Rb='gecko1_8',U='gwt.codesvr=',V='gwt.hosted=',W='gwt.hybrid',jc='gwt/clean/clean.css',vb='gwt:onLoadErrorFn',sb='gwt:onPropertyErrorFn',pb='gwt:property',oc='head',Ub='hosted.html?soon',nc='href',Pb='ie6',Ob='ie8',Nb='ie9',xb='iframe',ab='img',yb="javascript:''",kc='link',Tb='loadExternalRefs',Bb='locale',Db='locale=',lb='meta',Ab='moduleRequested',X='moduleStartup',Mb='msie',mb='name',Jb='opera',zb='position:absolute;width:0;height:0;border:none',lc='rel',Lb='safari',db='script',Vb='selectingPermutation',Q='soon',eb='soon.nocache.js',nb='soon::',R='startup',mc='stylesheet',fb='undefined',Sb='unknown',Ib='user.agent',Kb='webkit';var l=window,m=document,n=l.__gwtStatsEvent?function(a){return l.__gwtStatsEvent(a)}:null,o=l.__gwtStatsSessionId?l.__gwtStatsSessionId:null,p,q,r,s=P,t={},u=[],v=[],w=[],x=0,y,z;n&&n({moduleName:Q,sessionId:o,subSystem:R,evtGroup:S,millis:(new Date).getTime(),type:T});if(!l.__gwt_stylesLoaded){l.__gwt_stylesLoaded={}}if(!l.__gwt_scriptsLoaded){l.__gwt_scriptsLoaded={}}function A(){var b=false;try{var c=l.location.search;return (c.indexOf(U)!=-1||(c.indexOf(V)!=-1||l.external&&l.external.gwtOnLoad))&&c.indexOf(W)==-1}catch(a){}A=function(){return b};return b}
function B(){if(p&&q){var b=m.getElementById(Q);var c=b.contentWindow;if(A()){c.__gwt_getProperty=function(a){return H(a)}}soon=null;c.gwtOnLoad(y,Q,s,x);n&&n({moduleName:Q,sessionId:o,subSystem:R,evtGroup:X,millis:(new Date).getTime(),type:Y})}}
function C(){function e(a){var b=a.lastIndexOf(Z);if(b==-1){b=a.length}var c=a.indexOf($);if(c==-1){c=a.length}var d=a.lastIndexOf(_,Math.min(c,b));return d>=0?a.substring(0,d+1):P}
function f(a){if(a.match(/^\w+:\/\//)){}else{var b=m.createElement(ab);b.src=a+bb;a=e(b.src)}return a}
function g(){var a=F(cb);if(a!=null){return a}return P}
function h(){var a=m.getElementsByTagName(db);for(var b=0;b<a.length;++b){if(a[b].src.indexOf(eb)!=-1){return e(a[b].src)}}return P}
function i(){var a;if(typeof isBodyLoaded==fb||!isBodyLoaded()){var b=gb;var c;m.write(hb+b+ib);c=m.getElementById(b);a=c&&c.previousSibling;while(a&&a.tagName!=jb){a=a.previousSibling}if(c){c.parentNode.removeChild(c)}if(a&&a.src){return e(a.src)}}return P}
function j(){var a=m.getElementsByTagName(kb);if(a.length>0){return a[a.length-1].href}return P}
var k=g();if(k==P){k=h()}if(k==P){k=i()}if(k==P){k=j()}if(k==P){k=e(m.location.href)}k=f(k);s=k;return k}
function D(){var b=document.getElementsByTagName(lb);for(var c=0,d=b.length;c<d;++c){var e=b[c],f=e.getAttribute(mb),g;if(f){f=f.replace(nb,P);if(f.indexOf(ob)>=0){continue}if(f==pb){g=e.getAttribute(qb);if(g){var h,i=g.indexOf(rb);if(i>=0){f=g.substring(0,i);h=g.substring(i+1)}else{f=g;h=P}t[f]=h}}else if(f==sb){g=e.getAttribute(qb);if(g){try{z=eval(g)}catch(a){alert(tb+g+ub)}}}else if(f==vb){g=e.getAttribute(qb);if(g){try{y=eval(g)}catch(a){alert(tb+g+wb)}}}}}}
function E(a,b){return b in u[a]}
function F(a){var b=t[a];return b==null?null:b}
function G(a,b){var c=w;for(var d=0,e=a.length-1;d<e;++d){c=c[a[d]]||(c[a[d]]=[])}c[a[e]]=b}
function H(a){var b=v[a](),c=u[a];if(b in c){return b}var d=[];for(var e in c){d[c[e]]=e}if(z){z(a,d,b)}throw null}
var I;function J(){if(!I){I=true;var a=m.createElement(xb);a.src=yb;a.id=Q;a.style.cssText=zb;a.tabIndex=-1;m.body.appendChild(a);n&&n({moduleName:Q,sessionId:o,subSystem:R,evtGroup:X,millis:(new Date).getTime(),type:Ab});a.contentWindow.location.replace(s+L)}}
v[Bb]=function(){var b=null;var c=Cb;try{if(!b){var d=location.search;var e=d.indexOf(Db);if(e>=0){var f=d.substring(e+7);var g=d.indexOf(Eb,e);if(g<0){g=d.length}b=d.substring(e+7,g)}}if(!b){b=F(Bb)}if(!b){b=l[Fb]}if(b){c=b}while(b&&!E(Bb,b)){var h=b.lastIndexOf(Gb);if(h<0){b=null;break}b=b.substring(0,h)}}catch(a){alert(Hb+a)}l[Fb]=c;return b||Cb};u[Bb]={'default':0,en:1,fr:2};v[Ib]=function(){var b=navigator.userAgent.toLowerCase();var c=function(a){return parseInt(a[1])*1000+parseInt(a[2])};if(function(){return b.indexOf(Jb)!=-1}())return Jb;if(function(){return b.indexOf(Kb)!=-1}())return Lb;if(function(){return b.indexOf(Mb)!=-1&&m.documentMode>=9}())return Nb;if(function(){return b.indexOf(Mb)!=-1&&m.documentMode>=8}())return Ob;if(function(){var a=/msie ([0-9]+)\.([0-9]+)/.exec(b);if(a&&a.length==3)return c(a)>=6000}())return Pb;if(function(){return b.indexOf(Qb)!=-1}())return Rb;return Sb};u[Ib]={gecko1_8:0,ie6:1,ie8:2,ie9:3,opera:4,safari:5};soon.onScriptLoad=function(){if(I){q=true;B()}};soon.onInjectionDone=function(){p=true;n&&n({moduleName:Q,sessionId:o,subSystem:R,evtGroup:Tb,millis:(new Date).getTime(),type:Y});B()};D();C();var K;var L;if(A()){if(l.external&&(l.external.initModule&&l.external.initModule(Q))){l.location.reload();return}L=Ub;K=P}n&&n({moduleName:Q,sessionId:o,subSystem:R,evtGroup:S,millis:(new Date).getTime(),type:Vb});if(!A()){try{G([Cb,Lb],Wb);G([Xb,Rb],Yb);G([Cb,Rb],Zb);G([Xb,Nb],$b);G([Xb,Pb],_b);G([Cb,Ob],ac);G([Cb,Pb],bc);G([Xb,Jb],cc);G([Cb,Jb],dc);G([Xb,Ob],ec);G([Cb,Nb],fc);G([Xb,Lb],gc);K=w[H(Bb)][H(Ib)];var M=K.indexOf(hc);if(M!=-1){x=Number(K.substring(M+1));K=K.substring(0,M)}L=K+ic}catch(a){return}}var N;function O(){if(!r){r=true;if(!__gwt_stylesLoaded[jc]){var a=m.createElement(kc);__gwt_stylesLoaded[jc]=a;a.setAttribute(lc,mc);a.setAttribute(nc,s+jc);m.getElementsByTagName(oc)[0].appendChild(a)}B();if(m.removeEventListener){m.removeEventListener(pc,O,false)}if(N){clearInterval(N)}}}
if(m.addEventListener){m.addEventListener(pc,function(){J();O()},false)}var N=setInterval(function(){if(/loaded|complete/.test(m.readyState)){J();O()}},50);n&&n({moduleName:Q,sessionId:o,subSystem:R,evtGroup:S,millis:(new Date).getTime(),type:Y});n&&n({moduleName:Q,sessionId:o,subSystem:R,evtGroup:Tb,millis:(new Date).getTime(),type:T});m.write(qc)}
soon();