(this.webpackJsonpquiz_app_typescript_react=this.webpackJsonpquiz_app_typescript_react||[]).push([[0],[,,,,,function(e,t,n){e.exports={container:"Main_container__1XSjT",progressBarContainer:"Main_progressBarContainer__2-a3C",bar:"Main_bar__20PvM",checkIcon:"Main_checkIcon__2dnRD",questionNm:"Main_questionNm__1eQus",gameContainer:"Main_gameContainer__3Hv7G",score:"Main_score__3wDyB",question:"Main_question__h_LbU",answersContainer:"Main_answersContainer__12O17",nextIcon:"Main_nextIcon__1bwyC",resultsContainer:"Main_resultsContainer__3qgvg",resultDetails:"Main_resultDetails__sOA9h"}},,,,,,,function(e,t,n){e.exports={container:"App_container__2PWew",github:"App_github__3uwda",rotate:"App_rotate__1JeW-",welcome:"App_welcome__1kp23",loading:"App_loading__3wTc_",loader:"App_loader__3SHLc"}},,,,,,,,,function(e,t,n){e.exports=n.p+"static/media/nextIcon.f7077708.svg"},function(e,t,n){e.exports=n.p+"static/media/checkIcon.2b8a12a1.svg"},function(e,t,n){e.exports=n.p+"static/media/completed.ef837541.svg"},function(e,t,n){e.exports=n.p+"static/media/sad.d14cd80e.svg"},function(e,t,n){e.exports=n.p+"static/media/welcome.acf1332f.svg"},function(e,t,n){e.exports=n.p+"static/media/loader.d4857d8d.svg"},function(e,t,n){e.exports=n.p+"static/media/github.990b9763.svg"},function(e,t,n){e.exports=n(45)},,,,,function(e,t,n){},,,,,,,,,,,,function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(20),o=n.n(c),s=(n(33),n(11)),i=n(9),l=n.n(i),u=n(15),m=n(6),p=n(12),d=n.n(p),g=n(21),f=n.n(g),_=n(22),h=n.n(_),b=n(23),v=n.n(b),w=n(24),E=n.n(w),y=n(5),j=n.n(y),O=function(e){var t=e.question,n=e.setNumber,c=e.number,o=e.answers,i=e.questionNm,l=e.correctAnswer,u=(e.startQuiz,Object(a.useState)(0)),p=Object(m.a)(u,2),d=p[0],g=p[1],_=Object(a.useState)([]),b=Object(m.a)(_,2),w=b[0],y=b[1],O=Object(a.useState)(!1),N=Object(m.a)(O,2),C=N[0],k=N[1],S=Object(a.useState)(!1),x=Object(m.a)(S,2),I=x[0],q=x[1],A=Object(a.useState)(0),M=Object(m.a)(A,2),W=M[0],L=M[1],T=function(e){var n=e.currentTarget.value,a=l===n;a&&(g((function(e){return e+10})),L((function(e){return e+1})));var r={question:t,answer:n,correct:a,correctAnswer:l,questionNm:i};y((function(e){return[].concat(Object(s.a)(e),[r])})),k(!!w)};return r.a.createElement("div",{className:j.a.container,style:I?{overflow:"scroll"}:void 0},r.a.createElement("div",{className:j.a.progressBarContainer},r.a.createElement("progress",{value:c+1,max:10,className:j.a.bar}),10===w.length?r.a.createElement("img",{src:h.a,className:j.a.checkIcon}):r.a.createElement("p",{className:j.a.questionNm},i,"/",10)),I||10===w.length?null:r.a.createElement("div",{className:j.a.gameContainer},r.a.createElement("h6",{className:j.a.question,dangerouslySetInnerHTML:{__html:t}}),r.a.createElement("div",{className:j.a.answersContainer},o.map((function(e){return r.a.createElement("button",{disabled:C,value:e,onClick:T},e)}))),9!==c&&C?r.a.createElement("img",{src:f.a,onClick:function(){if(9===c)return null;n((function(e){return e+1})),k(!1)},className:j.a.nextIcon}):null),10!==w.length||I?null:9===c?r.a.createElement("div",{className:j.a.resultsContainer},r.a.createElement("img",{src:W<5?E.a:v.a}),r.a.createElement("h1",{style:d<50?{color:"#c80e13"}:{color:"green"}},"Completed"),r.a.createElement("h2",{className:j.a.score},"Score: ",r.a.createElement("span",{style:d<50?{color:"#c80e13"}:{color:"green"}},d)),r.a.createElement("h3",null,"Correct: ",r.a.createElement("span",{style:W<5?{color:"#c80e13"}:{color:"green"}},W)),r.a.createElement("p",{style:d<50?{color:"#c80e13"}:{color:"green"}},W<5?"You can do better than this.":"Great Job!"),r.a.createElement("button",{onClick:function(){return 10===w.length?q(!0):null}},"Complete Details")):null,I&&10===w.length?r.a.createElement("div",{className:j.a.resultDetails},w.map((function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Question ",e.questionNm),r.a.createElement("p",{dangerouslySetInnerHTML:{__html:e.question}}),r.a.createElement("p",{dangerouslySetInnerHTML:{__html:"Your answer: ".concat(e.answer)},style:{color:"#7d3cff"}}),r.a.createElement("p",{dangerouslySetInnerHTML:{__html:"Correct Answer: ".concat(e.correctAnswer)},style:{color:"green"}}),r.a.createElement("p",{style:e.correct?{color:"green"}:{color:"red"}},e.correct?"Is your answer correct?: Yes":"Is your answer correct?: No"))}))):null)},N=n(25),C=n.n(N),k=n(26),S=n.n(k),x=n(27),I=n.n(x),q=function(){var e=Object(u.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://opentdb.com/api.php?amount=10&difficulty=easy&type=multiple");case 2:return e.next=4,e.sent.json();case 4:return t=e.sent,e.abrupt("return",t.results);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),A=n(17),M=n.n(A);M.a.initializeApp({apiKey:"AIzaSyCagmrO3EYIyWzqcKj6JwaMdLd0O0FV738",authDomain:"messaging-app-fe33b.firebaseapp.com",databaseURL:"https://messaging-app-fe33b.firebaseio.com",projectId:"messaging-app-fe33b",storageBucket:"messaging-app-fe33b.appspot.com",messagingSenderId:"102951832883",appId:"1:102951832883:web:ff69554080f6053553c246"});var W=M.a,L=function(){var e=W.messaging();e.requestPermission().then((function(){return e.getToken()})).then((function(e){console.log("token",e)}));var t,n=Object(a.useState)(!1),c=Object(m.a)(n,2),o=c[0],i=c[1],p=Object(a.useState)(!1),g=Object(m.a)(p,2),f=g[0],_=g[1],h=Object(a.useState)([]),b=Object(m.a)(h,2),v=b[0],w=b[1],E=Object(a.useState)(0),y=Object(m.a)(E,2),j=y[0],N=y[1],k=function(){var e=Object(u.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i(!0),_(!0),e.next=4,q();case 4:t=e.sent,w(t),_(!1);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:d.a.container},r.a.createElement("div",{className:d.a.github},r.a.createElement("a",{href:"https://github.com/7-baig/Quiz-App"},r.a.createElement("img",{src:I.a,alt:"githubIcon"}))),o?null:r.a.createElement("div",{className:d.a.welcome},r.a.createElement("img",{src:C.a}),r.a.createElement("button",{onClick:k},"Start Quiz")),f?r.a.createElement("div",{className:d.a.loading},r.a.createElement("img",{src:S.a}),r.a.createElement("p",null,"One moment...")):null,o&&!f?r.a.createElement(O,{question:v[j].question,setNumber:N,number:j,answers:(t=[].concat(Object(s.a)(v[j].incorrect_answers),[v[j].correct_answer]),Object(s.a)(t).sort((function(){return Math.random()-.5}))),questionNm:j+1,correctAnswer:v[j].correct_answer,startQuiz:k}):null)},T=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function z(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(L,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");T?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):z(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):z(t,e)}))}}()}],[[28,1,2]]]);
//# sourceMappingURL=main.ebd2c2d4.chunk.js.map