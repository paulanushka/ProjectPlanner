(this.webpackJsonpmarioplan=this.webpackJsonpmarioplan||[]).push([[0],{215:function(e,t,a){e.exports=a(407)},220:function(e,t,a){},407:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(88),o=a.n(c),i=(a(220),a(22)),l=a(23),s=a(25),u=a(24),m=a(6),d=a(3),h=a(5),p=a(30),f=a.n(p),g=(a(63),a(93),Object(h.b)((function(e){return console.log("dog2",e),{initials:sessionStorage.getItem("newId")}}),(function(e){return console.log("cat",e),{signOut:function(){return e((function(e,t,a){(0,a.getFirebase)().auth().signOut().then((function(){e({type:"SIGNOUT_SUCCESS"}),sessionStorage.removeItem("newId")}))}))}}}))((function(e){return console.log("anushka11",e),Object(n.useEffect)((function(){})),r.a.createElement("div",null,r.a.createElement("ul",{className:"right"},r.a.createElement("li",null,r.a.createElement(m.c,{to:"/create"},"New Project")),r.a.createElement("li",null,r.a.createElement("a",{onClick:e.signOut},"Log Out")),r.a.createElement("li",null,r.a.createElement(m.c,{to:"/",className:"btn btn-floating pink lighten-1"},e.initials))))}))),E=function(){return r.a.createElement("ul",{className:"right"},r.a.createElement("li",null,r.a.createElement(m.c,{to:"/signup"},"Signup")),r.a.createElement("li",null,r.a.createElement(m.c,{to:"/signin"},"Login")))},b=a(61),v=a.n(b),j=Object(h.b)((function(e){return console.log("paul",e.auth),{auth:e.firebase.auth,profile:e.firebase.profile}}))((function(e){var t=e.auth,a=e.profile,n=t.uid?r.a.createElement(g,{profile:a}):r.a.createElement(E,null);return r.a.createElement("nav",{className:"nav-wrapper grey darken-3"},r.a.createElement("div",{className:"container"},r.a.createElement(m.b,{to:"/",className:"brand-logo"},"ProjectPlanner"),n))})),N=function(e){var t=e.project;return r.a.createElement("div",{className:"card z-depth-0 project-summary"},r.a.createElement("div",{className:"card-content grey-text text-darken-3"},r.a.createElement("span",{className:"card-title "},r.a.createElement("b",null,t.title)),r.a.createElement("p",null,"Posted by ",t.authorFirstName," ",t.authorLastName),r.a.createElement("p",{className:"grey-text"},v()(t.createdAt.toDate()).calendar())))},O=function(e){var t=e.projects;return r.a.createElement("div",{className:"project-list section"},t&&t.map((function(e){return r.a.createElement(m.b,{to:"/project/"+e.id,key:e.id},r.a.createElement(N,{project:e}))})))},y=function(){return r.a.createElement("div",null,r.a.createElement("p",null,"Notifications"))},w=a(17),C=a(15),S=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props,t=e.projects;return e.auth.uid?r.a.createElement("div",{className:"dashboard container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col s12 m6"},r.a.createElement(O,{projects:t})),r.a.createElement("div",{className:"col s12 m5 offset-m1"},r.a.createElement(y,null)))):r.a.createElement(d.a,{to:"/signin"})}}]),a}(n.Component),I=Object(C.d)(Object(h.b)((function(e){return console.log(e),{projects:e.firestore.ordered.projects,auth:e.firebase.auth}})),Object(w.firestoreConnect)([{collection:"projects"}]))(S),k=Object(C.d)(Object(h.b)((function(e,t){var a=t.match.params.id,n=e.firestore.data.projects;return{project:n?n[a]:null,auth:e.firebase.auth}})),Object(w.firestoreConnect)([{collection:"projects"}]))((function(e){var t=e.project;return e.auth.uid?t?r.a.createElement("div",{className:"container section project-details"},r.a.createElement("div",{className:"card z-depth-0"},r.a.createElement("div",{className:"card-content"},r.a.createElement("span",{className:"card-title"},t.title),r.a.createElement("p",null,t.content)),r.a.createElement("div",{className:"card-action grey lighten-4 grey-text"},r.a.createElement("div",null,"Posted by ",t.authorFirstName," ",t.authorLastName),r.a.createElement("div",null,v()(t.createdAt.toDate()).calendar())))):r.a.createElement("div",{className:"container center"},r.a.createElement("p",null,"Loading Project...")):r.a.createElement(d.a,{to:"/signin"})})),R=a(29),P=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={email:"",password:""},e.handleChange=function(t){e.setState(Object(R.a)({},t.target.id,t.target.value))},e.handleSubmit=function(t){t.preventDefault(),e.props.signIn(e.state)},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props,t=e.authError;return e.auth.uid?r.a.createElement(d.a,{to:"/"}):r.a.createElement("div",{className:"container"},r.a.createElement("form",{className:"white",onSubmit:this.handleSubmit},r.a.createElement("h5",{className:"grey-text text-darken-3"},"Sign In"),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"email"},"Email"),r.a.createElement("input",{type:"email",id:"email",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{type:"password",id:"password",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("button",{className:"btn pink lighten-1 z-depth-0"},"Login"),r.a.createElement("div",{className:"center red-text"},t?r.a.createElement("p",null,t):null))))}}]),a}(n.Component),F=Object(h.b)((function(e){return{authError:e.auth.authError,auth:e.firebase.auth}}),(function(e){return{signIn:function(t){return e((a=t,console.log("signin",a),function(e,t,n){var r=n.getFirebase,c=n.getFirestore,o=r(),i=c(),l=(t().firebase.auth.uid,i.collection("users").doc(sessionStorage.getItem("userId")));console.log("citiesref",l),o.auth().signInWithEmailAndPassword(a.email,a.password).then((function(){l.get().then((function(t){t.exists&&(console.log("Document data:",t.data()),sessionStorage.setItem("newId",t.data().initials),e({type:"LOGIN_SUCCESS",payload:sessionStorage.getItem("newId")}))}))})).catch((function(t){e({type:"LOGIN_ERROR",err:t})}))}));var a}}}))(P),x=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={email:"",password:"",firstName:"",lastName:""},e.handleChange=function(t){e.setState(Object(R.a)({},t.target.id,t.target.value))},e.handleSubmit=function(t){t.preventDefault(),e.props.signUp(e.state)},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props,t=e.auth,a=e.authError;return t.uid?r.a.createElement(d.a,{to:"/"}):r.a.createElement("div",{className:"container"},r.a.createElement("form",{onSubmit:this.handleSubmit,className:"white"},r.a.createElement("h5",{className:"grey-text text-darken-3"},"Sign Up"),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"email"},"Email"),r.a.createElement("input",{type:"email",id:"email",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{type:"password",id:"password",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"firstName"},"First Name"),r.a.createElement("input",{type:"text",id:"firstName",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"lastName"},"Last Name"),r.a.createElement("input",{type:"text",id:"lastName",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("button",{className:"btn pink lighten-1 z-depth-0"},"SIGN UP"),r.a.createElement("div",{className:"red-text center"},a?r.a.createElement("p",null,a):null))))}}]),a}(n.Component),L=Object(h.b)((function(e){return{auth:e.firebase.auth,authError:e.auth.authError}}),(function(e){return{signUp:function(t){return e(function(e){return function(t,a,n){var r=n.getFirebase,c=n.getFirestore,o=r(),i=c();o.auth().createUserWithEmailAndPassword(e.email,e.password).then((function(t){return sessionStorage.setItem("userId",t.user.uid),i.collection("users").doc(t.user.uid).set({firstName:e.firstName,lastName:e.lastName,initials:e.firstName[0]+e.lastName[0]})})).then((function(){console.log("firstname, ".concat(e.firstName[0]," ").concat(e.lastName[0])),sessionStorage.setItem("newId",e.firstName[0]+e.lastName[0]),t({type:"SIGNUP_SUCCESS",payload:sessionStorage.getItem("newId")})})).catch((function(e){t({type:"SIGNUP_ERROR",err:e})}))}}(t))}}}))(x),U=a(8),A=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={title:"",content:""},e.handleChange=function(t){e.setState(Object(R.a)({},t.target.id,t.target.value))},e.handleSubmit=function(t){t.preventDefault(),e.props.createProject(e.state),e.props.history.push("/")},e}return Object(l.a)(a,[{key:"render",value:function(){return this.props.auth.uid?r.a.createElement("div",{className:"container"},r.a.createElement("form",{onSubmit:this.handleSubmit,className:"white"},r.a.createElement("h5",{className:"grey-text text-darken-3"},"Create New Project"),r.a.createElement("div",{className:"input-field"},r.a.createElement("input",{type:"text",id:"title",onChange:this.handleChange}),r.a.createElement("label",{htmlFor:"title"},"Project Title")),r.a.createElement("div",{className:"input-field"},r.a.createElement("textarea",{id:"content",className:"materialize-textarea",onChange:this.handleChange}),r.a.createElement("label",{htmlFor:"content"},"Project Content")),r.a.createElement("div",{className:"input-field"},r.a.createElement("button",{className:"btn pink lighten-1 z-depth-0"},"Create")))):r.a.createElement(d.a,{to:"/signin"})}}]),a}(n.Component),_=Object(h.b)((function(e){return{auth:e.firebase.auth}}),(function(e){return{createProject:function(t){return e(function(e){try{return function(t,a,n){n.getFirebase;var r=(0,n.getFirestore)(),c=a().firebase.auth.uid;r.collection("users").doc(c).get().then((function(a){a.exists?(alert("alert"),console.log("Document data:",a.data()),r.collection("projects").add(Object(U.a)(Object(U.a)({},e),{},{authorFirstName:a.data().firstName,authorLastName:a.data().lastName,createdAt:new Date})).then((function(){t({type:"CREATE_PROJECT",payload:e})})).catch((function(e){t({type:"CREATE_PROJECT_ERROR",err:e})}))):console.log("No such document!")})).catch((function(e){console.log("Error getting document:",e)}))}}catch(t){console.log("anushkammm",t)}}(t))}}}))(A),T=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement(m.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(j,null),r.a.createElement(d.d,null,r.a.createElement(d.b,{exact:!0,path:"/",component:I}),r.a.createElement(d.b,{path:"/project/:id",component:k}),r.a.createElement(d.b,{path:"/signin",component:F}),r.a.createElement(d.b,{path:"/signup",component:L}),r.a.createElement(d.b,{path:"/create",component:_}))))}}]),a}(n.Component),G=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function D(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var z={authError:null,initials:"kaushik"},W=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN_ERROR":return console.log("login error"),Object(U.a)(Object(U.a)({},e),{},{authError:"Login failed"});case"LOGIN_SUCCESS":return console.log("login syccess"),Object(U.a)(Object(U.a)({},e),{},{initials:t.payload,authError:null});case"SIGNOUT_SUCCESS":return console.log("signout success"),e;case"SIGNUP_SUCCESS":return console.log("signup success"),Object(U.a)(Object(U.a)({},e),{},{initials:t.payload,authError:null});case"SIGNUP_ERROR":return console.log("signup error"),Object(U.a)(Object(U.a)({},e),{},{authError:t.err.message});default:return e}},J=a(38),B={projects:[{id:"1",title:"help me find peach",content:"blah blah blah"},{id:"2",title:"collect all the stars",content:"blah blah blah"},{id:"3",title:"egg hunt with yoshi",content:"blah blah blah"}]},M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,t=arguments.length>1?arguments[1]:void 0;switch(console.log("anushka",e),t.type){case"CREATE_PROJECT":return Object(U.a)(Object(U.a)({},e),{},{projects:t.payload});case"CREATE_PROJECT_ERROR":return console.log("create project error",t.err),e;default:return e}},Z=Object(C.c)({auth:W,project:M,firebase:w.firebaseReducer,firestore:J.firestoreReducer}),K=a(214);f.a.initializeApp({apiKey:"AIzaSyCeu42DrewzkuMyWrNE7yuC7ZVMF-7Bufg",authDomain:"project-planner-c10b7.firebaseapp.com",databaseURL:"https://project-planner-c10b7.firebaseio.com",projectId:"project-planner-c10b7",storageBucket:"project-planner-c10b7.appspot.com",messagingSenderId:"780394959219",appId:"1:780394959219:web:c12ba7e316b68e96c93506",measurementId:"G-WL043JCYZP"});var Q=f.a,V=Object(C.e)(Z,Object(C.d)(Object(C.a)(K.a.withExtraArgument({getFirebase:w.getFirebase,getFirestore:J.getFirestore})),Object(J.reduxFirestore)(f.a))),Y={firebase:f.a,config:Q,dispatch:V.dispatch,createFirestoreInstance:J.createFirestoreInstance,userProfile:"users",presence:"presence",sessions:"sessions"};function $(e){var t=e.children,a=Object(h.c)((function(e){return e.firebase.auth}));return Object(w.isLoaded)(a)?t:r.a.createElement("div",null,"Loading Screen...")}f.a,V.dispatch,J.createFirestoreInstance;o.a.render(r.a.createElement(h.a,{store:V}," ",r.a.createElement(w.ReactReduxFirebaseProvider,Y," ",r.a.createElement($,null,r.a.createElement(T,null)," "))),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/ProjectPlanner",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/ProjectPlanner","/service-worker.js");G?(!function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):D(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")}))):D(e)}))}}()}},[[215,1,2]]]);
//# sourceMappingURL=main.eb92857b.chunk.js.map