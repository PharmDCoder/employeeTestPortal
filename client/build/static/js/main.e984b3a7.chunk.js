(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{121:function(e,t,a){},122:function(e,t,a){},123:function(e,t,a){},124:function(e,t,a){},125:function(e,t,a){},126:function(e,t,a){var n={"./ADLs.png":127,"./HIPAA.jpg":128,"./backSafety.jpg":129,"./footCare.jpg":130,"./handHygiene.jpg":131,"./infectionControl.jpg":132,"./nutrition.jpg":133,"./oralHygiene.jpg":134,"./preventingFalls.jpg":135,"./safeTransfers.jpg":136};function r(e){var t=s(e);return a(t)}function s(e){var t=n[e];if(!(t+1)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return t}r.keys=function(){return Object.keys(n)},r.resolve=s,e.exports=r,r.id=126},127:function(e,t,a){e.exports=a.p+"static/media/ADLs.cebd4dcd.png"},128:function(e,t,a){e.exports=a.p+"static/media/HIPAA.53d2a587.jpg"},129:function(e,t,a){e.exports=a.p+"static/media/backSafety.55bf26f4.jpg"},130:function(e,t,a){e.exports=a.p+"static/media/footCare.eac15a1e.jpg"},131:function(e,t,a){e.exports=a.p+"static/media/handHygiene.04aabdd3.jpg"},132:function(e,t,a){e.exports=a.p+"static/media/infectionControl.6598ff41.jpg"},133:function(e,t,a){e.exports=a.p+"static/media/nutrition.743a14a8.jpg"},134:function(e,t,a){e.exports=a.p+"static/media/oralHygiene.2c1d94ef.jpg"},135:function(e,t,a){e.exports=a.p+"static/media/preventingFalls.aca39956.jpg"},136:function(e,t,a){e.exports=a.p+"static/media/safeTransfers.c6a5332e.jpg"},137:function(e,t,a){},140:function(e,t,a){},141:function(e,t,a){},145:function(e,t,a){},146:function(e,t,a){"use strict";a.r(t);var n=a(2),r=a.n(n),s=a(13),c=a.n(s),o=(a(73),a(5)),l=a.n(o),i=a(11),u=a(6),m=a(153),p=a(154);var d=function(e){return r.a.createElement("div",Object.assign({className:"container".concat(e.fluid?"-fluid":"")},e))};var f=function(e){var t=e.size.split(" ").map(function(e){return"col-"+e}).join(" ");return r.a.createElement("div",Object.assign({className:t},e))};var g=function(e){return r.a.createElement("div",Object.assign({className:"row".concat(e.fluid?"-fluid":"")},e))},E=a(25),h=a.n(E);var b={init:function(){},log:function(e){console.error(e)}};h.a.interceptors.response.use(null,function(e){return e.respons&&e.response.status>=500&&e.response.status<500||b.log(e),Promise.reject(e)});var v={get:h.a.get,post:h.a.post,put:h.a.put,delete:h.a.delete,setJwt:function(e){}},w=a(20),N=w.a+"/user";var x=a(53),j=a.n(x),O=w.a+"/auth",y="token";function S(){return(S=Object(i.a)(l.a.mark(function e(t,a){var n;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.post(O,{email:t,password:a});case 2:if(!(n=e.sent).data.error){e.next=7;break}return e.abrupt("return",n.data.error);case 7:return localStorage.setItem(y,n.data),e.abrupt("return",null);case 9:case"end":return e.stop()}},e)}))).apply(this,arguments)}function k(){return localStorage.getItem(y)}v.setJwt(k());var T={login:function(e,t){return S.apply(this,arguments)},loginWithJwt:function(e){localStorage.setItem(y,e)},logout:function(){localStorage.removeItem(y)},getCurrentUser:function(){try{var e=localStorage.getItem(y);return j()(e)}catch(t){return null}},getJwt:k},C=(a(96),function(){var e=Object(n.useState)(),t=Object(u.a)(e,2),a=t[0],s=t[1],c=Object(n.useState)(),o=Object(u.a)(c,2),m=o[0],p=o[1],E=Object(n.useState)(),h=Object(u.a)(E,2),b=h[0],w=h[1],x=function(){var e=Object(i.a)(l.a.mark(function e(t){var n,r;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,s={email:a,password:m,employeeName:b},v.post(N,{email:s.email,password:s.password,employeeName:s.employeeName});case 4:n=e.sent,r=n.data,T.loginWithJwt(r),window.location="/",e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),e.t0.response&&alert(e.t0.response.data);case 13:case"end":return e.stop()}var s},e,null,[[1,10]])}));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",null,r.a.createElement("h2",{className:"signup-welcome"},"Welcome to the SembraCare Employee Portal!"),r.a.createElement("form",{className:"signup-form text-center",onSubmit:x},r.a.createElement(d,null,r.a.createElement(g,{className:"signup-form-group"},r.a.createElement(f,{size:"12"},r.a.createElement("input",{className:"signup-form-control",type:"text",placeholder:"Email",name:"email",onChange:function(e){return s(e.target.value)}}))),r.a.createElement(g,{className:"signup-form-group"},r.a.createElement(f,{size:"12"},r.a.createElement("input",{className:"signup-form-control",type:"password",placeholder:"Password",name:"password",onChange:function(e){return p(e.target.value)}}))),r.a.createElement(g,{className:"signup-form-group"},r.a.createElement(f,{size:"12"},r.a.createElement("input",{className:"signup-form-control",type:"text",placeholder:"First Name",name:"employeeName",onChange:function(e){return w(e.target.value)}}))),r.a.createElement("button",{className:"btn-submit-signup",type:"submit"},"Submit"))))}),P=a(28),A=(a(97),void 0),Q=function(){var e=Object(n.useState)(),t=Object(u.a)(e,2),a=t[0],s=t[1],c=Object(n.useState)(),o=Object(u.a)(c,2),m=o[0],p=o[1],E=function(){var e=Object(i.a)(l.a.mark(function e(t){var n,r;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,T.login(a,m);case 4:(n=e.sent)?alert(n):window.location="/",e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),e.t0.response&&400===e.t0.response.status&&((r=Object(P.a)({},A.state.errors)).username=e.t0.response.data,A.setState({errors:r}));case 11:case"end":return e.stop()}},e,null,[[1,8]])}));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",null,r.a.createElement("div",{className:"login-welcome"},r.a.createElement("h2",null,"Welcome to the SembraCare Employee Portal!")),r.a.createElement("form",{className:"login-form text-center",onSubmit:E},r.a.createElement(d,null,r.a.createElement(g,{className:"login-form-group"},r.a.createElement(f,{size:"12"},r.a.createElement("input",{className:"login-form-control",type:"text",placeholder:"Email",name:"email",onChange:function(e){return s(e.target.value)}}))),r.a.createElement(g,{className:"login-form-group"},r.a.createElement(f,{size:"12"},r.a.createElement("input",{className:"login-form-control",type:"password",placeholder:"Password",name:"password",onChange:function(e){return p(e.target.value)}}))),r.a.createElement("button",{className:"btn-submit-login",type:"submit"},"Submit"))))},I=a(30),q=a(19),D=a(152),H={title:"HIPPA",content:[{text:"The Health Insurance Portability And Accountability Act (HIPAA) was signed into law in the year 1996, by President Bill Clinton.  It is a legislation which provides security provisions and data privacy, in order to keep patients' medical informaion safe."},{text:"NPP stands for Notice of Privacy Practices (US HIPAA medical patient privacy) Suggest new definition. This definition appears very frequently and is found in the following Acronym Finder categories: Military and Government"},{text:"National Provider Identifier Standard. This requires that every single health care entity, like employers, individuals, healthcare providers and health plans, need to have a unique 10-digit provider identifier code \u2013 their NPI (National Provider Identifier)."},{text:"There is no official certification program for HIPAA compliance, but many training companies offer credentials which indicate the understanding of guidelines and regulations the act specifies."}],questions:"What does the abbreviation NPP represent in relation to HIPAA?",choices:[{text:"A. Notice of Patient Practices",isCorrect:!1},{text:"B. Notice of Privacy Practices",isCorrect:!0},{text:"C. Notice of Potential Problems",isCorrect:!1},{text:"D. Notice of Practice Problems",isCorrect:!1}]};function L(){return(L=Object(i.a)(l.a.mark(function e(t){var a,n;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=w.a+"/testRecords/"+t,e.next=3,v.post(a);case 3:return n=e.sent,e.abrupt("return",n);case 5:case"end":return e.stop()}},e)}))).apply(this,arguments)}function _(){return(_=Object(i.a)(l.a.mark(function e(t,a){var n,r;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=w.a+"/addTestRecord/"+a,e.next=3,v.post(n,t);case 3:return r=e.sent,e.abrupt("return",r);case 5:case"end":return e.stop()}},e)}))).apply(this,arguments)}function z(){return(z=Object(i.a)(l.a.mark(function e(){var t,a;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=w.a+"/currentTests",e.next=3,v.post(t);case 3:return a=e.sent,e.abrupt("return",a);case 5:case"end":return e.stop()}},e)}))).apply(this,arguments)}var B={getCurrentTests:function(){return z.apply(this,arguments)},getTestRecords:function(e){return L.apply(this,arguments)},postTestRecord:function(e,t){return _.apply(this,arguments)}},F=a(59),R=a.n(F),G=(a(121),function(e){var t=e.location,a=e.user,s=Object(n.useState)(),c=Object(u.a)(s,2),o=c[0],m=c[1],p=Object(n.useState)(),d=Object(u.a)(p,2),f=d[0],g=d[1],E=Object(n.useState)(),h=Object(u.a)(E,2),b=h[0],v=h[1],w=Object(n.useState)(),N=Object(u.a)(w,2),x=N[0],j=N[1],O=Object(n.useState)(),y=Object(u.a)(O,2),S=y[0],k=y[1],T=Object(n.useState)([]),C=Object(u.a)(T,2),A=C[0],Q=C[1],L=Object(n.useState)(!1),_=Object(u.a)(L,2),z=_[0],F=_[1],G=Object(n.useState)(!1),M=Object(u.a)(G,2),J=M[0],U=M[1],W=Object(n.useState)(!1),Y=Object(u.a)(W,2),V=Y[0],$=Y[1],K={};function X(e){for(var t=e.length-1;t>0;t--){var a=Math.floor(Math.random()*(t+1)),n=[e[a],e[t]];e[t]=n[0],e[a]=n[1]}return e}function Z(e){var t=[];return t.push(e.questionAnswer),1===e.questionOptionsGood.length?t.push(e.questionOptionsGood[0]):(g(Object(P.a)({},f,{currentQuestion:{questionOptionsGood:X(e.questionOptionsGood),questionOptionsBad:X(e.questionOptionsBad)}})),t.push(e.questionOptionsGood[0]),t.push(e.questionOptionsGood[1]),t.push(e.questionOptionsBad[0])),X(t)}Object(n.useEffect)(function(){try{k(new Date);var e=t.state.test;e.testQuestions=X(e.testQuestions),m(e),g({currentQuestion:e.testQuestions[0],currentQuestionIndex:0,currentQuestionOptions:Z(e.testQuestions[0]),selectedAnswer:""}),v(0),j(0)}catch(a){}},[t]);var ee=function(){var e=Object(i.a)(l.a.mark(function e(t){var a,n,r;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),a=f.selectedAnswer,n=f.currentQuestion,r=f.currentQuestionIndex,""!==a){e.next=5;break}return alert("Please select an Answer"),e.abrupt("return");case 5:console.log(S),b+x<=10?a===n.questionAnswer?(v(b+1),Q([].concat(Object(I.a)(A),[{testQuestionText:n.questionText,testQuestionAnswer:n.questionAnswer,testQuestionCorrect:!0}]))):(j(x+1),n.questionOptionsBad.indexOf(a)>-1?Q([].concat(Object(I.a)(A),[{testQuestionText:n.questionText,testQuestionAnswer:n.questionAnswer,testQuestionCorrect:!1,testQuestionBad:!0,testQuestionExplanation:n.questionExplanation}])):Q([].concat(Object(I.a)(A),[{testQuestionText:n.questionText,testQuestionAnswer:n.questionAnswer,testQuestionCorrect:!1,testQuestionExplanation:n.questionExplanation}]))):alert("finished - SCORE: "+b/(b+x)),r+1<10?g({currentQuestionIndex:r+1,currentQuestion:o.testQuestions[r+1],currentQuestionOptions:Z(o.testQuestions[r+1]),selectedAnswer:""}):F(!0);case 8:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),te=function(){var e=Object(i.a)(l.a.mark(function e(t){return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:g(Object(P.a)({},f,{selectedAnswer:t.target.value}));case 1:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),ae=function(){var e=Object(i.a)(l.a.mark(function e(t){var n,r;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault();try{r={testScore:n=b/(b+x)*100,testPass:n>=70,testStart:S,testFinish:new Date,testID:o._id,testQuestionList:A,testSignature:V},B.postTestRecord(r,a.id),window.location="/"}catch(s){s.response&&alert(s.response.data)}case 2:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement(D.a,{show:J,onHide:function(){U(!1)}},r.a.createElement(D.a.Header,{closeButton:!0},r.a.createElement(D.a.Title,null,"Employee Signature:")),r.a.createElement(D.a.Body,null,r.a.createElement(R.a,{canvasProps:{width:300,height:200,className:"sigCanvas"},ref:function(e){K=e}}),r.a.createElement("button",{class:"btn btn-primary",onClick:function(){K.clear()}},"Clear"),r.a.createElement("button",{class:"btn btn-success",onClick:function(){$(K.getTrimmedCanvas().toDataURL("image/png")),U(!1)}},"Save"))),r.a.createElement(q.g,{className:"carousel-container"},r.a.createElement(q.d,{className:"z-depth-1 carousel",activeItem:1,length:2,showControls:!0,showIndicators:!0,interval:!1},r.a.createElement("div",{className:"carousel-content"},r.a.createElement(q.e,null,r.a.createElement(q.f,{itemId:"1"},r.a.createElement(q.l,null,r.a.createElement("div",null,H.content.map(function(e){return r.a.createElement("p",null,e.text)})))),r.a.createElement(q.f,{itemId:"2"},f&&r.a.createElement(q.l,null,r.a.createElement("h3",null,f.currentQuestion.questionText),f.currentQuestionOptions.map(function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("hr",null),r.a.createElement("label",{className:"radio-inline",for:e},r.a.createElement("input",{id:e,type:"radio",name:"currentAnswers",value:e,checked:f.selectedAnswer===e,onChange:te}),e))}),r.a.createElement("hr",null),!z&&r.a.createElement("button",{className:"btn-next",onClick:ee},"Next"),z&&!V&&r.a.createElement(r.a.Fragment,null,r.a.createElement("h6",null,"You scored a:"," ",100*b/(b+x),"%"),r.a.createElement("button",{className:"btn-next",onClick:function(){U(!0)}},"Finish Test")),V&&r.a.createElement("button",{className:"btn-submit",onClick:ae},"Submit Test - ",100*b/(b+x),"%"))))))))}),M=a(151),J=(a(122),function(e){var t=e.user;return r.a.createElement("div",{className:"greeting text-center",to:"/"},r.a.createElement("h2",{className:"greeting text-center"},t&&"Hello "+t.employeeName+"!"),r.a.createElement("h2",null,!t&&"SembraCare Portal"))}),U=(a(123),a(24)),W=a(0),Y=function(e){var t=e.user,a=e.currentTests,n=function(){alert("This test is required")};return r.a.createElement(W.b.Provider,{value:{color:"red",size:"1.5em",className:"global-class-name"}},r.a.createElement("div",null,r.a.createElement(J,{className:"greeting",user:t}),r.a.createElement(d,{className:"table-storage"},r.a.createElement(g,{className:"testList-form-group"},r.a.createElement(f,{size:"12"},r.a.createElement("table",{className:"table table-sm"},r.a.createElement("thead",null,r.a.createElement("tr",{className:"text-center"},r.a.createElement("th",{scope:"col"},"Test Name"),r.a.createElement("th",{scope:"col"},"Due"),r.a.createElement("th",{scope:"col"},"Grade"),r.a.createElement("th",{scope:"col"},"Action"))),r.a.createElement("tbody",null,a&&t&&a.map(function(e,a){var s=function(e){return t.testrecord.filter(function(t){return t.testID===e._id})}(e);return r.a.createElement("tr",{key:e._id+"1",className:"text-center"},r.a.createElement("th",{scope:"row",key:e._id+"2",className:"align-middle"},e.testRequired&&r.a.createElement(U.a,{onClick:n})," ",e.testName),r.a.createElement("td",{key:e._id+"3",className:"align-middle"},"1/1/21"),r.a.createElement("td",{key:e._id+"4",className:"align-middle"},s.length>0?s[0].testScore+"%":"-"),r.a.createElement("td",{key:e._id+"5",className:"align-middle"},s.length>0?r.a.createElement(M.a,{key:e._id+"link1",to:{pathname:"/testView",state:{testid:e._id}},className:"btnLink"},r.a.createElement("button",{key:e._id+"btn1",className:"btn btn-success"},"View")):r.a.createElement(M.a,{key:e._id+"link2",to:{pathname:"/testLanding",state:{testid:e._id}},className:"btnLink"},r.a.createElement("button",{key:e._id+"btn2",className:"btn btn-primary"},"Start"))))}))))))))},V=(a(124),function(e){var t=e.user;return r.a.createElement("nav",{className:"custom-navbar navbar-light justify-content-left"},r.a.createElement("button",{className:"navbar-toggler custom-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent15","aria-controls":"navbarSupportedContent15","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent15"},r.a.createElement("ul",{className:"navbar-nav text-center"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(M.a,{to:"/",className:"/"===window.location.pathname||"/home"===window.location.pathname?"nav-link active":"nav-link"},"Home")),!t&&r.a.createElement(r.a.Fragment,null,r.a.createElement("li",{className:"nav-item","data-toggle":"collapse","data-target":".navbar-collapse.show"},r.a.createElement(M.a,{to:"/signup",className:"/signup"===window.location.pathname?"nav-link active":"nav-link"},"Sign Up")),r.a.createElement("li",{className:"nav-item","data-toggle":"collapse","data-target":".navbar-collapse.show"},r.a.createElement(M.a,{to:"/login",className:"/login"===window.location.pathname?"nav-link active":"nav-link"},"Log In"))),t&&r.a.createElement(r.a.Fragment,null,r.a.createElement("li",{className:"nav-item","data-toggle":"collapse","data-target":".navbar-collapse.show"},r.a.createElement(M.a,{to:"/logout",className:"/logout"===window.location.pathname?"nav-link active":"nav-link"},"Log Out")),r.a.createElement("li",{className:"nav-item","data-toggle":"collapse","data-target":".navbar-collapse.show"},r.a.createElement(M.a,{to:"/testlist",className:"/testlist"===window.location.pathname?"nav-link active":"nav-link"},"Test List"))))))}),$=(a(125),function(e){var t=e.location,s=e.currentTests,c=(e.user,Object(n.useState)()),o=Object(u.a)(c,2),l=o[0],i=o[1];return Object(n.useEffect)(function(){try{var e=s.filter(function(e){return e._id===t.state.testid});console.log(e[0]),i(e[0])}catch(a){}},[]),r.a.createElement(d,null,r.a.createElement(g,{className:"text-center"},l&&r.a.createElement(f,{size:"12"},r.a.createElement("img",{className:"img-fluid",src:a(126)("./"+l.testImage),alt:"test image"}),r.a.createElement("hr",null))),r.a.createElement(g,null,l&&r.a.createElement(f,{size:"12"},r.a.createElement("h2",{className:"text-center"},l.testName),r.a.createElement("hr",null))),r.a.createElement(W.b.Provider,{value:{color:"blue",size:"2em",className:"global-class-name"}},r.a.createElement(g,null,l&&r.a.createElement(f,{size:"12"},r.a.createElement("h4",{className:"text-center"},"Test Instructions"),r.a.createElement("ul",{className:"bg-white"},r.a.createElement("li",null,"This is an Open Book Test"),r.a.createElement("li",null,"Swipe Left ",r.a.createElement(U.b,null)," to View the Test Screen"),r.a.createElement("li",null,"Swipe Right ",r.a.createElement(U.c,null)," to View the Handout"),r.a.createElement("p",{className:"font-weight-bold font-italic"},"(You can Toggle Between the Two Screens Throughout the Exam)"),r.a.createElement("li",null,"There are 10 Questions"),r.a.createElement("li",null,"You Must Answer 7 Correct to Pass"),r.a.createElement("li",null,"At the End of the Exam, Sign Your Name in the Signature Box to Post Your Results")),r.a.createElement("hr",null)))),r.a.createElement(g,null,r.a.createElement(f,{size:"12"},r.a.createElement(M.a,{to:{pathname:"/test",state:{test:l}},className:"btnLink"},r.a.createElement("button",{className:"btn btn-primary"},"Start Test")))))}),K=(a(137),a(40)),X=a.n(K),Z=function(e){var t=e.location,a=e.currentTests,s=e.user,c=Object(n.useState)(),o=Object(u.a)(c,2),l=o[0],i=o[1],m=Object(n.useState)(),p=Object(u.a)(m,2),E=p[0],h=p[1];return Object(n.useEffect)(function(){try{var e=a.filter(function(e){return e._id===t.state.testid});i(e[0]);var n=s.testrecord.filter(function(e){return e.testID===t.state.testid});h(n[0]),console.log(e),console.log(n)}catch(r){}},[]),r.a.createElement(d,null,r.a.createElement(g,{className:"text-center"},l&&r.a.createElement(f,{size:"12",className:"text-light"},r.a.createElement("h2",{className:"text-center"},l.testName),r.a.createElement("hr",null),r.a.createElement("h3",{className:"text-center"},"Test Score: ",E.testScore,"%"),r.a.createElement("h3",null,"Completed On: "," ",r.a.createElement(X.a,{format:"MM/DD/YY"},E.testFinish)),r.a.createElement("h3",null,"Total Test Time: "," ",r.a.createElement(X.a,{diff:E.testStart,unit:"m"},E.testFinish)," "," minutes"),r.a.createElement("img",{src:E.testSignature,alt:"signature",className:"bg-white img-fluid"}),r.a.createElement("hr",null))),E&&r.a.createElement(g,null,r.a.createElement(f,{size:"12"},E.testQuestionList.map(function(e,t){return console.log(e),r.a.createElement("div",{className:e.testQuestionCorrect?"text-light":"text-danger"},r.a.createElement("p",null,t+1," - ",e.testQuestionText),r.a.createElement("p",null,r.a.createElement("strong",null,"Correct Answer:")," ",e.testQuestionAnswer),!e.testQuestionCorrect&&r.a.createElement("p",null,r.a.createElement("strong",null,"Explanation: "),e.testQuestionExplanation),r.a.createElement("hr",null))}))))};a(140);var ee=function(){return r.a.createElement("footer",{className:"footer"},r.a.createElement("p",{className:"footer-title"},"SembraCare"))};a(141),a(142),a(143);var te=function(e){return r.a.createElement("main",Object.assign({className:"wrapper"},e))},ae=a(62),ne=a(63),re=a(65),se=a(64),ce=a(66),oe=function(e){function t(){return Object(ae.a)(this,t),Object(re.a)(this,Object(se.a)(t).apply(this,arguments))}return Object(ce.a)(t,e),Object(ne.a)(t,[{key:"componentDidMount",value:function(){T.logout(),window.location="/Login"}},{key:"render",value:function(){return null}}]),t}(n.Component);a(145);var le=function(){var e=Object(n.useState)(),t=Object(u.a)(e,2),a=t[0],s=t[1],c=Object(n.useState)(),o=Object(u.a)(c,2),d=o[0],f=o[1];Object(n.useEffect)(function(){var e=T.getCurrentUser();e&&(g(e),E())},[]);var g=function(){var e=Object(i.a)(l.a.mark(function e(t){var a,n;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B.getTestRecords(t.id);case 2:a=e.sent,n=a.data,s(n);case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),E=function(){var e=Object(i.a)(l.a.mark(function e(){var t,a;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B.getCurrentTests();case 2:t=e.sent,a=t.data,f(a);case 5:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();return document.title="SembraCare Test Portal",r.a.createElement(m.a,null,r.a.createElement("div",null,a&&r.a.createElement(V,{user:a}),r.a.createElement(te,null,a&&r.a.createElement(p.a,{exact:!0,path:"/",render:function(e){return r.a.createElement(Y,Object.assign({},e,{user:a,currentTests:d}))}}),!a&&r.a.createElement(p.a,{exact:!0,path:"/",component:Q}),r.a.createElement(p.a,{exact:!0,path:"/test",render:function(e){return r.a.createElement(G,Object.assign({},e,{user:a}))}}),r.a.createElement(p.a,{exact:!0,path:"/testLanding",render:function(e){return r.a.createElement($,Object.assign({},e,{user:a,currentTests:d}))}}),r.a.createElement(p.a,{exact:!0,path:"/testView",render:function(e){return r.a.createElement(Z,Object.assign({},e,{user:a,currentTests:d}))}}),r.a.createElement(p.a,{exact:!0,path:"/signup",component:C}),r.a.createElement(p.a,{exact:!0,path:"/login",component:Q}),r.a.createElement(p.a,{exact:!0,path:"/testlist",render:function(e){return r.a.createElement(Y,Object.assign({},e,{user:a,currentTests:d}))}}),r.a.createElement(p.a,{exact:!0,path:"/logout",component:oe})),r.a.createElement(ee,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(le,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},20:function(e){e.exports={a:"/api"}},68:function(e,t,a){e.exports=a(146)},73:function(e,t,a){},96:function(e,t,a){},97:function(e,t,a){}},[[68,1,2]]]);
//# sourceMappingURL=main.e984b3a7.chunk.js.map