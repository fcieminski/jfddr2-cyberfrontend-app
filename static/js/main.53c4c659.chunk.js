(this.webpackJsonpeffi=this.webpackJsonpeffi||[]).push([[0],{15:function(e,t,c){},26:function(e,t,c){},34:function(e,t,c){},42:function(e,t,c){},43:function(e,t,c){},44:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c(2),s=c.n(a),r=c(16),o=c.n(r),i=(c(34),c(13)),l=c(6),d=c(4),u=(c(26),c(17));c(35),c(45),c(46);u.a.initializeApp({apiKey:"AIzaSyBcs9OUlswKK3ACSAUVIy3qihGGQlPJkMI",authDomain:"effi-d406d.firebaseapp.com",projectId:"effi-d406d",storageBucket:"effi-d406d.appspot.com",messagingSenderId:"810856324098",appId:"1:810856324098:web:9dc06130ba685c78501b1b",measurementId:"G-CCEQRXHV1Z"});var j=u.a;c(15);var m=function(e){e.board;var t=e.userId,c=Object(a.useState)(""),s=Object(d.a)(c,2),r=s[0],o=s[1];return Object(n.jsx)("div",{children:Object(n.jsxs)("form",{className:"project__form",onSubmit:function(e){e.preventDefault(),j.firestore().collection("users/".concat(t,"/projects")).add({projectName:r.trim(),archive:!1,favourite:!1,createdAt:Date.now()}).then((function(e){o(""),e.collection("columns").add({columnName:"Todo",createdAt:Date.now()}).then((function(e){e.collection("tasks").add({taskName:"Be awesome",createdAt:Date.now()})})),e.collection("columns").add({columnName:"In Progress",createdAt:Date.now()}),e.collection("columns").add({columnName:"Done",createdAt:Date.now()})}))},autoComplete:"off",children:[Object(n.jsx)("label",{className:"project__label",htmlFor:"project-name",children:"New project"}),Object(n.jsx)("input",{required:!0,pattern:"^[^\\s]+(\\s+[^\\s]+)*$",title:"Give a nice and.. normal title \ud83d\ude09",className:"project__input",id:"project-name",value:r,type:"text",onChange:function(e){return o(e.target.value)}})]})})},b=Object(a.createContext)(null),h=function(e){var t=e.children,c=Object(a.useState)(null),s=Object(d.a)(c,2),r=s[0],o=s[1],i=Object(a.useState)({}),l=Object(d.a)(i,2),j=l[0],m=l[1];Object(a.useEffect)((function(){u.a.auth().onAuthStateChanged((function(e){e&&u.a.firestore().collection("users").doc(e.uid).onSnapshot((function(e){m(e.data())})),o(e)}))}),[]);var h={user:r,userData:j};return Object(n.jsx)(b.Provider,{value:h,children:t})},O=function(){return Object(a.useContext)(b)},p=c(8),f=function(){var e=O().user,t=Object(a.useState)(null),c=Object(d.a)(t,2),s=c[0],r=c[1],l=Object(a.useState)(""),u=Object(d.a)(l,2),m=u[0],b=u[1],h=e.uid;Object(a.useEffect)((function(){var e=j.firestore().collection("users/".concat(h,"/projects")).orderBy("createdAt","desc").onSnapshot((function(e){var t=[];e.forEach((function(e){t.push(Object(p.a)({id:e.id},e.data()))})),r(t)}));return function(){e&&e()}}),[h]);return s&&s.map((function(e){return Object(n.jsxs)("div",{className:"single-project single-row",children:[Object(n.jsx)(i.b,{to:"/board/project/".concat(e.id),children:Object(n.jsx)("div",{children:e.projectName})}),Object(n.jsx)("button",{className:"single-project__option optionBtn",onClick:function(){return b((function(t){return t===e.id?null:e.id}))},children:"..."}),m===e.id&&o.a.createPortal(Object(n.jsx)(n.Fragment,{children:Object(n.jsx)("div",{className:"selectContainer",children:Object(n.jsx)("button",{className:"deleteBtn",onClick:function(){return function(e){var t=j.firestore().collection("users/".concat(h,"/projects")).doc(e.id).delete();return function(){t&&t()}}(e)},children:"\u274c"})})}),document.getElementById("overlay"))]},e.id)}))};var x=function(){var e=O(),t=e.user,c=e.userData;return Object(n.jsxs)("div",{children:[Object(n.jsxs)("div",{className:"board-nav",children:[Object(n.jsxs)("h3",{children:["Hello ",Object(n.jsx)("span",{children:c.username||"Anonymous"})]}),Object(n.jsx)("button",{className:"deleteBtn",onClick:function(){j.auth().signOut()},children:"Logout"})]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("h2",{children:"Your projects:"}),Object(n.jsx)(m,{userId:t.uid}),Object(n.jsx)(f,{})]})]})},v=function(e){return Object(n.jsxs)("svg",Object(p.a)(Object(p.a)({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 59.465 59.465"},e),{},{children:[Object(n.jsx)("path",{d:"M58.862 33.886L45.045 20.069v-9.112a2.056 2.056 0 10-4.113 0v5.001L31.185 6.21a2.053 2.053 0 00-2.905 0L.603 33.886a2.055 2.055 0 102.907 2.907L29.732 10.57l26.223 26.223a2.047 2.047 0 002.907 0 2.055 2.055 0 000-2.907z"}),Object(n.jsx)("path",{d:"M52.979 36.245L31.185 14.449a2.056 2.056 0 00-2.907 0L6.484 36.245a2.038 2.038 0 00-.565 1.062 4.967 4.967 0 00-.091.942v10.638a4.977 4.977 0 004.969 4.971h10.638a4.974 4.974 0 003.645-1.599 4.952 4.952 0 001.324-3.373v-7.812a3.683 3.683 0 013.33-3.658 3.683 3.683 0 013.331 3.658v7.812c0 1.252.472 2.45 1.324 3.373a4.977 4.977 0 003.646 1.599h10.638a4.977 4.977 0 004.971-4.972V38.252c0-.312-.031-.63-.092-.941a2.061 2.061 0 00-.573-1.066z"})]}))};var N=function(e){return Object(n.jsxs)("svg",Object(p.a)(Object(p.a)({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",width:"1em",height:"1em"},e),{},{children:[Object(n.jsx)("path",{d:"M142.716 293.147l-94-107.602 94-107.602c7.596-8.705 6.71-21.924-1.995-29.527-8.705-7.596-21.917-6.703-29.527 1.995L5.169 171.782c-6.892 7.882-6.892 19.65 0 27.532l106.026 121.372a20.913 20.913 0 0015.771 7.157 20.84 20.84 0 0013.755-5.169c8.706-7.603 9.598-20.822 1.995-29.527z"}),Object(n.jsx)("path",{d:"M359.93 164.619H20.926C9.368 164.619 0 173.986 0 185.545c0 11.558 9.368 20.926 20.926 20.926H359.93c60.776 0 110.218 49.441 110.218 110.211S420.706 426.893 359.93 426.893H48.828c-11.558 0-20.926 9.368-20.926 20.926 0 11.558 9.368 20.926 20.926 20.926H359.93c83.844 0 152.07-68.219 152.07-152.063s-68.219-152.063-152.07-152.063z"})]}))};var w=function(){return Object(n.jsx)("nav",{className:"nav",children:Object(n.jsxs)("ul",{className:"class__list",children:[Object(n.jsx)("li",{children:Object(n.jsx)(i.b,{to:"/",children:Object(n.jsx)(v,{})})}),Object(n.jsx)("li",{children:Object(n.jsx)(i.b,{to:"/board",children:Object(n.jsx)(N,{})})})]})})},g=function(e){var t=e.children,c=e.cover,n=O(),a=n.user;n.userData;return null===a?c:t},C=Object(a.createContext)(""),S=function(e){var t=e.children,c=Object(a.useState)(""),s=Object(d.a)(c,2),r=s[0],o=s[1],i=Object(a.useState)(""),l=Object(d.a)(i,2),u={expandedTaskId:r,setExpandedTaskId:o,expandedColumnIndex:l[0],setExpandedColumnIndex:l[1]};return Object(n.jsx)(C.Provider,{value:u,children:t})},y=function(e){var t=e.column,c=e.project,s=e.allColumns,r=e.columnIndex,i=e.deleteColumn,l=O().user,u=Object(a.useState)(null),m=Object(d.a)(u,2),b=m[0],h=m[1],f=Object(a.useState)(""),x=Object(d.a)(f,2),v=x[0],N=x[1],w=Object(a.useContext)(C),g=w.expandedTaskId,S=w.setExpandedTaskId,y=w.expandedColumnIndex,k=w.setExpandedColumnIndex,I=l.uid,_=c.id,D=t.id;Object(a.useEffect)((function(){var e=j.firestore().collection("users/".concat(I,"/projects/").concat(_,"/columns/").concat(D,"/tasks")).orderBy("createdAt","desc").onSnapshot((function(e){h(function(e){var t=[];return e.forEach((function(e){t.push(Object(p.a)({id:e.id},e.data()))})),t}(e))}));return function(){e&&e()}}),[I,_,D]);return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("div",{className:"list-title",onClick:function(){k((function(e){return e===r?"":r}))},children:Object(n.jsx)("span",{children:t.columnName})}),y===r&&Object(n.jsxs)("div",{className:"list-content task",children:[Object(n.jsxs)("form",{className:"task__form",onSubmit:function(e){e.preventDefault(),j.firestore().collection("users/".concat(I,"/projects/").concat(_,"/columns/").concat(D,"/tasks")).add({taskName:v,createdAt:Date.now()}).then((function(){return N("")}))},autoComplete:"off",children:[Object(n.jsx)("label",{className:"task__label",htmlFor:"task-name",children:"New task"}),Object(n.jsx)("input",{className:"task__input",value:v,type:"text",onChange:function(e){return N(e.target.value)},required:!0,pattern:"^[^\\s]+(\\s+[^\\s]+)*$",title:"Give a nice and.. normal title \ud83d\ude09",placeholder:"New Task..."})]}),Object(n.jsx)("ul",{children:b&&b.map((function(e){return Object(n.jsxs)("li",{children:[Object(n.jsxs)("div",{className:"list-row",children:[Object(n.jsx)("h4",{children:e.taskName}),Object(n.jsx)("button",{className:"optionBtn",onClick:function(){return S((function(t){return t===e.id?null:e.id}))},children:"..."})]}),g===e.id&&o.a.createPortal(Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)("div",{className:"selectContainer",children:[Object(n.jsx)("span",{children:"Move to:"}),Object(n.jsx)("select",{className:"selectContainer__select",onChange:function(t){!function(e,t){var c=j.firestore().collection("users/".concat(I,"/projects/").concat(_,"/columns/").concat(t,"/tasks")).doc(e.id).set(e).then((function(){j.firestore().collection("users/".concat(I,"/projects/").concat(_,"/columns/").concat(D,"/tasks")).doc(e.id).delete()}))}(e,t.target.value)},value:D,children:s.map((function(e){return Object(n.jsx)("option",{disabled:e.id===D,value:e.id,children:e.columnName},e.id)}))}),Object(n.jsx)("button",{className:"deleteBtn",onClick:function(){return function(e){j.firestore().collection("users/".concat(I,"/projects/").concat(_,"/columns/").concat(D,"/tasks")).doc(e.id).delete()}(e)},children:"\u274c"})]})}),document.getElementById("overlay"))]},e.id)}))}),Object(n.jsx)("button",{className:"deleteBtn",onClick:function(){return i(t)},children:"\u274c"})]})]})},k=function(){var e=Object(l.f)().projectId,t=O().user,c=Object(a.useState)(null),s=Object(d.a)(c,2),r=s[0],o=s[1],i=Object(a.useState)(null),u=Object(d.a)(i,2),m=u[0],b=u[1],h=Object(a.useState)(""),f=Object(d.a)(h,2),x=f[0],v=f[1],N=t.uid;if(Object(a.useEffect)((function(){var t=j.firestore().collection("users/".concat(N,"/projects")).doc(e),c=t.onSnapshot((function(e){o(Object(p.a)({id:e.id},e.data()))})),n=t.collection("columns").onSnapshot((function(e){var t=[];e.forEach((function(e){t.push(Object(p.a)({id:e.id},e.data()))})),b(t)}));return function(){c&&c(),n&&n()}}),[e,N]),null===r)return Object(n.jsx)("p",{children:"Loading..."});var w=function(t){j.firestore().collection("users/".concat(N,"/projects/").concat(e,"/columns")).doc(t.id).delete()};return Object(n.jsxs)("div",{className:"project",children:[Object(n.jsx)("div",{className:"project__title--wrapper",children:Object(n.jsx)("h1",{className:"project__title",children:r.projectName})}),Object(n.jsxs)("form",{className:"project__form",onSubmit:function(t){t.preventDefault(),j.firestore().collection("users/".concat(N,"/projects/").concat(e,"/columns")).add({columnName:x,createdAt:Date.now()}).then((function(){return v("")}))},autoComplete:"off",children:[Object(n.jsx)("label",{className:"project__label",htmlFor:"column-name",children:"Add New List"}),Object(n.jsx)("input",{required:!0,pattern:"^[^\\s]+(\\s+[^\\s]+)*$",title:"Give a nice and.. normal title \ud83d\ude09",placeholder:"New List...",className:"project__input",id:"column-name",value:x,type:"text",onChange:function(e){return v(e.target.value)}})]}),Object(n.jsx)(S,{children:m&&m.map((function(e,t){return Object(n.jsx)("div",{className:"list",children:Object(n.jsx)(y,{columnIndex:t,project:r,column:e,allColumns:m,deleteColumn:w})},e.id)}))})]})},I=c.p+"static/media/logo.0e55d699.png",_=function(){return Object(n.jsxs)("div",{className:"homeView",children:[Object(n.jsx)("div",{className:"homeView__background"}),Object(n.jsxs)("div",{className:"homeView__title",children:[Object(n.jsx)("img",{src:I,alt:""}),Object(n.jsx)("h2",{children:"From now your tasks gonna fly! Let`s try !"})]})]})},D=(c(42),c(20)),A=function(e,t){var c=Object(a.useState)({username:"",email:"",password:"",password2:""}),n=Object(d.a)(c,2),s=n[0],r=n[1],o=Object(a.useState)({}),i=Object(d.a)(o,2),l=i[0],u=i[1],m=Object(a.useState)(!1),b=Object(d.a)(m,2),h=b[0],O=b[1];return Object(a.useEffect)((function(){0===Object.keys(l).length&&h&&e()}),[e,l,h]),{handleChange:function(e){var t=e.target,c=t.name,n=t.value;r(Object(p.a)(Object(p.a)({},s),{},Object(D.a)({},c,n)))},handleSubmit:function(e){e.preventDefault(),u(t(s)),O(!0),j.auth().createUserWithEmailAndPassword(s.email,s.password).then((function(e){return j.firestore().collection("users").doc(e.user.uid).set({username:s.username,email:s.email}),e})).then((function(e){j.firestore().collection("users/".concat(e.user.uid,"/projects")).add({projectName:"Starter project",archive:!1,favourite:!1,createdAt:Date.now()}).then((function(e){e.collection("columns").add({columnName:"Todo",createdAt:Date.now()}).then((function(e){e.collection("tasks").add({taskName:"Be awesome",createdAt:Date.now()})})),e.collection("columns").add({columnName:"In Progress",createdAt:Date.now()}),e.collection("columns").add({columnName:"Done",createdAt:Date.now()})}))}))},values:s,errors:l}};function E(e){var t={};return e.username.trim()||(t.username="Username required"),e.email?/\S+@\S+\.\S+/.test(e.email)||(t.email="Email address is not correct"):t.email="Email required",e.password?e.password.length<8&&(t.password="Password needs to be 8 characters or more"):t.password="Password is required",e.password2?e.password2!==e.password&&(t.password2="Passwords are not the same"):t.password2="Password is required",t}var P=function(e){var t=e.submitForm,c=A(t,E),a=c.handleSubmit,s=c.handleChange,r=c.values,o=c.errors;return Object(n.jsx)("div",{className:"form-content-right",children:Object(n.jsxs)("form",{className:"form",onSubmit:a,children:[Object(n.jsx)("h2",{children:"Nice to see you!"}),Object(n.jsx)("h3",{children:" Create your account by filling out the form below."}),Object(n.jsxs)("div",{className:"form-inputs",children:[Object(n.jsx)("label",{htmlFor:"username",className:"form-label",children:"Username"}),Object(n.jsx)("input",{id:"username",type:"text",name:"username",className:"form-input",placeholder:"Please enter your username",value:r.username,onChange:s}),o.username&&Object(n.jsx)("p",{children:o.username})]}),Object(n.jsxs)("div",{className:"form-inputs",children:[Object(n.jsx)("label",{htmlFor:"email",className:"form-label",children:"Email"}),Object(n.jsx)("input",{id:"email",type:"email",name:"email",className:"form-input",placeholder:"Please enter your email",value:r.email,onChange:s}),o.email&&Object(n.jsx)("p",{children:o.email})]}),Object(n.jsxs)("div",{className:"form-inputs",children:[Object(n.jsx)("label",{htmlFor:"password",className:"form-label",children:"Password"}),Object(n.jsx)("input",{id:"password",type:"passord",name:"password",className:"form-input",placeholder:"Please enter your password",value:r.password,onChange:s}),o.password&&Object(n.jsx)("p",{children:o.password})]}),Object(n.jsxs)("div",{className:"form-inputs",children:[Object(n.jsx)("label",{htmlFor:"password2",className:"form-label",children:"Confirm your password"}),Object(n.jsx)("input",{id:"password2",type:"passord",name:"password2",className:"form-input",placeholder:"Confirm your password",value:r.password2,onChange:s}),o.password2&&Object(n.jsx)("p",{children:o.password2})]}),Object(n.jsx)("button",{className:"form-input-btn",type:"submit",children:"SIGN UP"}),Object(n.jsx)("br",{}),Object(n.jsxs)("span",{className:"form-input-login",children:["If you have an account press ",Object(n.jsx)("a",{href:"gosia.com",children:"Here"})]})]})})},F=function(){return Object(n.jsx)("div",{className:"form-content-right",children:Object(n.jsx)("div",{className:"form-success",children:Object(n.jsx)("h2",{children:"Welcome to EFFI ! From now your tasks gonna fly! Let`s try !"})})})},B=function(){var e=Object(a.useState)(!1),t=Object(d.a)(e,2),c=t[0],s=t[1];return Object(n.jsx)("div",{children:c?Object(n.jsx)(F,{}):Object(n.jsx)(P,{submitForm:function(){s(!0)}})})},L=(c(43),function(){return Object(n.jsx)("div",{children:Object(n.jsx)(B,{})})}),G=function(){var e=Object(a.useState)(""),t=Object(d.a)(e,2),c=t[0],s=t[1],r=Object(a.useState)(""),o=Object(d.a)(r,2),i=o[0],l=o[1];return Object(n.jsx)("div",{className:"form-content-right",children:Object(n.jsxs)("form",{className:"form",onSubmit:function(e){e.preventDefault(),j.auth().signInWithEmailAndPassword(c,i).catch((function(e){alert("Your email or password is incorrect, please check your data, ".concat(e))}))},children:[Object(n.jsx)("h2",{children:"Nice to see you!"}),Object(n.jsx)("h3",{children:" Login Here."}),Object(n.jsxs)("div",{className:"form-inputs",children:[Object(n.jsx)("label",{htmlFor:"email",className:"form-label",children:"Email"}),Object(n.jsx)("input",{id:"email",type:"email",name:"email",className:"form-input",placeholder:"Enter your email",onChange:function(e){return s(e.target.value)},value:c}),Object(n.jsxs)("div",{className:"form-inputs",children:[Object(n.jsx)("label",{htmlFor:"password",className:"form-label",children:"Password"}),Object(n.jsx)("input",{id:"password",type:"passord",name:"password",className:"form-input",placeholder:"Please enter your password",onChange:function(e){return l(e.target.value)},value:i})]})]}),Object(n.jsx)("button",{className:"form-input-btn",type:"submit",children:"SIGN IN"}),Object(n.jsx)("br",{}),Object(n.jsxs)("span",{className:"form-input-login",children:["Forget your password ? Press",Object(n.jsx)("a",{href:"gosia.com",children:"Here"})]})]})})},q=function(){return Object(n.jsx)("div",{children:Object(n.jsx)(G,{})})},H=function(e){var t=e.data,c=e.setData,s=Object(a.useState)(!1),r=Object(d.a)(s,2),o=r[0],i=r[1],l=Object(a.useState)(!1),u=Object(d.a)(l,2),j=u[0],m=u[1];return Object(n.jsxs)("div",{className:"landingPage-container",children:[Object(n.jsx)("button",{onClick:function(){m(!1),i(!o)},className:"form__containerButtonIn btn-hover login",children:"SIGN UP"}),Object(n.jsx)("button",{onClick:function(){i(!1),m(!j)},className:"form__containerButtonIn btn-hover login",children:"SIGN IN"}),o?Object(n.jsx)(L,{data:t,setData:c}):null,j?Object(n.jsx)(q,{data:t,setData:c}):null,Object(n.jsx)("img",{className:"effiLogo",src:I,alt:"logo"})]})},M=function(){return Object(n.jsx)(i.a,{basename:".",children:Object(n.jsx)(g,{cover:Object(n.jsx)(H,{}),children:Object(n.jsxs)(l.c,{children:[Object(n.jsxs)(l.a,{path:"/board/project/:projectId",children:[Object(n.jsx)(w,{}),Object(n.jsx)(k,{})]}),Object(n.jsxs)(l.a,{path:"/board/",children:[Object(n.jsx)(w,{}),Object(n.jsx)(x,{})]}),Object(n.jsx)(l.a,{exact:!0,path:"/",children:Object(n.jsx)(i.b,{to:"/board",children:Object(n.jsx)(_,{})})})]})})})};o.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(h,{children:Object(n.jsx)(M,{})})}),document.querySelector("#root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.53c4c659.chunk.js.map