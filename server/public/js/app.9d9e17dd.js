(function(t){function e(e){for(var n,o,s=e[0],l=e[1],u=e[2],d=0,p=[];d<s.length;d++)o=s[d],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&p.push(r[o][0]),r[o]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);c&&c(e);while(p.length)p.shift()();return i.push.apply(i,u||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],n=!0,s=1;s<a.length;s++){var l=a[s];0!==r[l]&&(n=!1)}n&&(i.splice(e--,1),t=o(o.s=a[0]))}return t}var n={},r={app:0},i=[];function o(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=n,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(a,n,function(e){return t[e]}.bind(null,n));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var c=l;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",{staticClass:"grey lighten-4"},[a("v-content",[a("router-view")],1)],1)},i=[],o={name:"App"},s=o,l=a("2877"),u=a("6544"),c=a.n(u),d=a("7496"),p=a("a75b"),m=Object(l["a"])(s,r,i,!1,null,null,null),f=m.exports;c()(m,{VApp:d["a"],VContent:p["a"]});a("5363");var v=a("f309");n["a"].use(v["a"]);var h=new v["a"]({icons:{iconfont:"mdi"}}),b=(a("45fc"),a("8c4f")),x=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("Dashboard"),a("v-container",[a("v-card",{staticClass:"mx-auto",attrs:{"max-width":"600px"}},[a("v-card-title",[t._v("Create new exercise log")]),a("v-form",{ref:"form",staticClass:"px-3",attrs:{"lazy-validation":""}},[a("v-text-field",{attrs:{label:"Username",rules:t.usernameRules},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}}),a("v-text-field",{attrs:{label:"Description",rules:t.descriptionRules},model:{value:t.description,callback:function(e){t.description=e},expression:"description"}}),a("v-text-field",{attrs:{label:"Duration (in minutes)",rules:t.durationRules},model:{value:t.duration,callback:function(e){t.duration=e},expression:"duration"}}),a("v-menu",{attrs:{transition:"scale-transition","offset-y":"","max-width":"290px","min-width":"290px"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[a("v-text-field",t._g({attrs:{label:"Date",hint:"MM/DD/YYYY format","persistent-hint":""},on:{blur:function(e){t.date=t.parseDate(t.dateFormatted)}},model:{value:t.dateFormatted,callback:function(e){t.dateFormatted=e},expression:"dateFormatted"}},n))]}}])},[a("v-date-picker",{attrs:{"no-title":""},model:{value:t.date,callback:function(e){t.date=e},expression:"date"}})],1),a("v-btn",{staticClass:"mx-0 mt-3 mb-3",attrs:{outlined:"",color:"indigo",loading:t.loading},on:{click:t.Submit}},[t._v("Submit")])],1)],1)],1)],1)},g=[],w=(a("a4d3"),a("e01a"),a("99af"),a("ac1f"),a("4d90"),a("1276"),a("3835")),_=a("bc3a"),V=a.n(_),k=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",[a("v-app-bar",{attrs:{dark:"",color:"light-blue",app:""}},[a("v-app-bar-nav-icon",{on:{click:function(e){t.drawer=!t.drawer}}}),a("v-toolbar-title",{staticClass:"text-uppercase"},[a("span",{staticClass:"font-weight-light"},[t._v("Exer")]),a("span",[t._v("Tracker")])]),a("v-spacer"),a("v-btn",{staticClass:"error--text",attrs:{light:""},on:{click:t.Signout}},[a("span",[t._v("Sign Out")]),a("v-icon",{staticClass:"material-icons",attrs:{right:""}},[t._v("exit_to_app")])],1),a("v-tabs",{attrs:{slot:"extension"},slot:"extension"},t._l(t.links,(function(e){return a("v-tab",{key:e.id,attrs:{to:e.link}},[t._v(t._s(e.name))])})),1)],1),a("v-navigation-drawer",{attrs:{app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[a("v-list",[a("v-list-item-group",{attrs:{color:"primary"}},t._l(t.items,(function(e){return a("v-list-item",{key:e.id,attrs:{to:e.link}},[a("v-list-item-icon",[a("v-icon",{domProps:{textContent:t._s(e.icon)}})],1),a("v-list-item-title",{domProps:{textContent:t._s(e.name)}})],1)})),1)],1)],1)],1)},S=[],D={name:"Dashboard",data:function(){return{drawer:!1,links:[{id:1,name:"Exercises",link:"/home"},{id:2,name:"Create Exercise Log",link:"/create"}],items:[{id:1,name:"Exercises",icon:"mdi-home",link:"/home"},{id:2,name:"Sign Out",icon:"exit_to_app",link:"/"}]}},methods:{Signout:function(){if("undefined"!==typeof window)return localStorage.removeItem("jwt"),V.a.get("api/auth/signout").then((function(t){return console.log(t)})).catch((function(t){return console.log(t)})),this.$router.push("/")}}},y=D,C=a("40dc"),j=a("5bc1"),O=a("8336"),T=a("132d"),A=a("8860"),R=a("da13"),I=a("1baa"),E=a("34c3"),F=a("5d23"),$=a("f774"),P=a("2fa4"),q=a("71a3"),U=a("fe57"),B=a("2a7f"),L=Object(l["a"])(y,k,S,!1,null,null,null),M=L.exports;c()(L,{VAppBar:C["a"],VAppBarNavIcon:j["a"],VBtn:O["a"],VIcon:T["a"],VList:A["a"],VListItem:R["a"],VListItemGroup:I["a"],VListItemIcon:E["a"],VListItemTitle:F["a"],VNavigationDrawer:$["a"],VSpacer:P["a"],VTab:q["a"],VTabs:U["a"],VToolbarTitle:B["a"]});var Y={components:{Dashboard:M},data:function(t){return{username:"",usernameRules:[function(t){return!!t||"Username is required"}],description:"",descriptionRules:[function(t){return!!t||"Description is required"}],duration:0,durationRules:[function(t){return!!t||"Duration is required"}],date:(new Date).toISOString().substr(0,10),dateFormatted:t.formatDate((new Date).toISOString().substr(0,10)),loading:!1}},computed:{formattedDate:function(){return this.formatDate(this.date)}},watch:{date:function(){this.dateFormatted=this.formatDate(this.date)}},methods:{Submit:function(t){var e=this;if(t.preventDefault(),this.$refs.form.validate()&&"undefined"!==typeof window){this.loading=!0;var a={username:this.username,description:this.description,duration:this.duration,date:this.date},n=JSON.parse(localStorage.getItem("jwt")),r=n.data,i=r.user,o=r.token;V()({method:"post",url:"api/exercise/create/".concat(i.id),headers:{Accept:"*/*","Content-Type":"application/json",Authorization:"Bearer ".concat(o)},data:a}).then((function(t){t&&e.$router.push("/home")}))}},formatDate:function(t){if(!t)return null;var e=t.split("-"),a=Object(w["a"])(e,3),n=a[0],r=a[1],i=a[2];return"".concat(r,"/").concat(i,"/").concat(n)},parseDate:function(t){if(!t)return null;var e=t.split("/"),a=Object(w["a"])(e,3),n=a[0],r=a[1],i=a[2];return"".concat(i,"-").concat(n.padStart(2,"0"),"-").concat(r.padStart(2,"0"))}}},z=Y,J=a("b0af"),N=a("99d9"),G=a("a523"),H=a("2e4b"),K=a("4bd4"),Q=a("e449"),W=a("8654"),X=Object(l["a"])(z,x,g,!1,null,null,null),Z=X.exports;c()(X,{VApp:d["a"],VBtn:O["a"],VCard:J["a"],VCardTitle:N["a"],VContainer:G["a"],VDatePicker:H["a"],VForm:K["a"],VMenu:Q["a"],VTextField:W["a"]});var tt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("Landing"),a("v-container",[a("v-card",{staticClass:"mx-auto",attrs:{"max-width":"600px"}},[a("v-card-title",[t._v("Sign Up")]),a("v-form",{ref:"form",staticClass:"px-3",attrs:{"lazy-validation":""}},[a("v-text-field",{attrs:{label:"Username",rules:t.usernameRules},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}}),a("v-text-field",{attrs:{label:"Email",rules:t.emailRules},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),a("v-text-field",{attrs:{label:"Password",rules:t.passwordRules,type:t.show1?"text":"password"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),a("v-btn",{staticClass:"mx-0 mt-3 mb-3",attrs:{outlined:"",color:"indigo",loading:t.loading},on:{click:t.Submit}},[t._v("Submit")])],1)],1)],1)],1)},et=[],at=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",[a("v-app-bar",{attrs:{dark:"",color:"light-blue",app:""}},[a("v-toolbar-title",{staticClass:"text-uppercase"},[a("span",{staticClass:"font-weight-light"},[t._v("Exer")]),a("span",[t._v("Tracker")])]),a("v-spacer"),a("v-tabs",{attrs:{slot:"extension"},slot:"extension"},t._l(t.links,(function(e){return a("v-tab",{key:e.id,attrs:{to:e.link}},[t._v(t._s(e.name))])})),1)],1)],1)},nt=[],rt={name:"Landing",data:function(){return{links:[{id:1,name:"Sign Up",link:"/signup"},{id:2,name:"Sign In",link:"/signin"}]}}},it=rt,ot=Object(l["a"])(it,at,nt,!1,null,null,null),st=ot.exports;c()(ot,{VAppBar:C["a"],VSpacer:P["a"],VTab:q["a"],VTabs:U["a"],VToolbarTitle:B["a"]});var lt={components:{Landing:st},data:function(){return{username:"",usernameRules:[function(t){return!!t||"Username is required"}],email:"",emailRules:[function(t){return!!t||"Email is required"}],show1:!1,password:"",passwordRules:[function(t){return!!t||"Password is required"},function(t){return t.length>=6||"Minimum 6 characters"}],loading:!1}},methods:{Submit:function(t){var e=this;if(t.preventDefault(),this.$refs.form.validate()){this.loading=!0;var a={username:this.username,email:this.email,password:this.password};V()({method:"post",url:"api/auth/signup",headers:{Accept:"*/*","Content-Type":"application/json"},data:a}).then((function(t){"User created!"===t.data&&e.$router.push("/signin")})).catch((function(t){return console.log(t)}))}}}},ut=lt,ct=Object(l["a"])(ut,tt,et,!1,null,null,null),dt=ct.exports;c()(ct,{VApp:d["a"],VBtn:O["a"],VCard:J["a"],VCardTitle:N["a"],VContainer:G["a"],VForm:K["a"],VTextField:W["a"]});var pt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("Landing"),t.show?a("v-alert",{attrs:{dense:"",outlined:"",type:"error",dismissible:""}},[t._v(" "+t._s(t.error)+" ")]):t._e(),a("v-container",[a("v-card",{staticClass:"mx-auto",attrs:{"max-width":"600px"}},[a("v-card-title",[t._v("Sign In")]),a("v-form",{ref:"form",staticClass:"px-3",attrs:{"lazy-validation":""}},[a("v-text-field",{attrs:{label:"Username",rules:t.usernameRules},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}}),a("v-text-field",{attrs:{label:"Password",rules:t.passwordRules,type:t.show1?"text":"password"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),a("v-btn",{staticClass:"mx-0 mt-3 mb-3",attrs:{outlined:"",color:"indigo",loading:t.loading},on:{click:t.Submit}},[t._v("Submit")])],1)],1)],1)],1)},mt=[],ft={components:{Landing:st},data:function(){return{username:"",usernameRules:[function(t){return!!t||"Username is required"}],show1:!1,password:"",passwordRules:[function(t){return!!t||"Password is required"},function(t){return t.length>=6||"Minimum 6 characters"}],loading:!1,error:"",show:!1}},methods:{Submit:function(t){var e=this;if(t.preventDefault(),this.$refs.form.validate()){this.loading=!0;var a={username:this.username,password:this.password};V()({method:"post",url:"api/auth/signin",headers:{Accept:"*/*","Content-Type":"application/json"},data:a}).then((function(t){localStorage.setItem("jwt",JSON.stringify(t)),void 0!==localStorage.getItem("jwt")&&e.$router.push("/home")})).catch((function(t){t&&(e.show=!0,e.error=t.response.data.error,e.loading=!1)}))}}}},vt=ft,ht=a("0798"),bt=Object(l["a"])(vt,pt,mt,!1,null,null,null),xt=bt.exports;c()(bt,{VAlert:ht["a"],VApp:d["a"],VBtn:O["a"],VCard:J["a"],VCardTitle:N["a"],VContainer:G["a"],VForm:K["a"],VTextField:W["a"]});var gt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{staticClass:"mx-auto",attrs:{"max-width":"800px"}},[a("v-card-title",[t._v("Edit exercise log")]),a("v-form",{ref:"form",staticClass:"px-3",attrs:{"lazy-validation":""}},[a("v-text-field",{attrs:{label:"Username",rules:t.usernameRules},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}}),a("v-text-field",{attrs:{label:"Description",rules:t.descriptionRules},model:{value:t.description,callback:function(e){t.description=e},expression:"description"}}),a("v-text-field",{attrs:{label:"Duration (in minutes)",rules:t.durationRules},model:{value:t.duration,callback:function(e){t.duration=e},expression:"duration"}}),a("v-menu",{attrs:{transition:"scale-transition","offset-y":"","max-width":"290px","min-width":"290px"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[a("v-text-field",t._g({attrs:{label:"Date",hint:"MM/DD/YYYY format","persistent-hint":""},on:{blur:function(e){t.date=t.parseDate(t.dateFormatted)}},model:{value:t.dateFormatted,callback:function(e){t.dateFormatted=e},expression:"dateFormatted"}},n))]}}])},[a("v-date-picker",{attrs:{"no-title":""},model:{value:t.date,callback:function(e){t.date=e},expression:"date"}})],1),a("v-btn",{staticClass:"mx-0 mt-3 mb-3",attrs:{outlined:"",color:"indigo",loading:t.loading},on:{click:t.Submit}},[t._v("Edit exercise")])],1)],1)},wt=[],_t={data:function(t){return{username:"",usernameRules:[function(t){return!!t||"Username is required"}],description:"",descriptionRules:[function(t){return!!t||"Description is required"}],duration:0,durationRules:[function(t){return!!t||"Duration is required"}],date:(new Date).toISOString().substr(0,10),dateFormatted:t.formatDate((new Date).toISOString().substr(0,10)),loading:!1}},computed:{formattedDate:function(){return this.formatDate(this.date)}},watch:{date:function(){this.dateFormatted=this.formatDate(this.date)}},methods:{Submit:function(t){var e=this;if(t.preventDefault(),this.$refs.form.validate()&&"undefined"!==typeof window){this.loading=!0;var a={username:this.username,description:this.description,duration:this.duration,date:this.date},n=JSON.parse(localStorage.getItem("jwt")),r=n.data,i=r.user,o=r.token;console.log(this.$route.params.id),V()({method:"put",url:"/api/exercise/update/".concat(i.id,"/").concat(this.$route.params.id),headers:{Accept:"*/*","Content-Type":"application/json",Authorization:"Bearer ".concat(o)},data:a}).then((function(t){t&&e.$router.push("/home")}))}},formatDate:function(t){if(!t)return null;var e=t.split("-"),a=Object(w["a"])(e,3),n=a[0],r=a[1],i=a[2];return"".concat(r,"/").concat(i,"/").concat(n)},parseDate:function(t){if(!t)return null;var e=t.split("/"),a=Object(w["a"])(e,3),n=a[0],r=a[1],i=a[2];return"".concat(i,"-").concat(n.padStart(2,"0"),"-").concat(r.padStart(2,"0"))}}},Vt=_t,kt=Object(l["a"])(Vt,gt,wt,!1,null,null,null),St=kt.exports;c()(kt,{VBtn:O["a"],VCard:J["a"],VCardTitle:N["a"],VDatePicker:H["a"],VForm:K["a"],VMenu:Q["a"],VTextField:W["a"]});var Dt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("Dashboard"),a("v-container",[a("v-card",{staticClass:"mx-auto",attrs:{width:"1500px"}},[a("v-card-title",[t._v("Logged Exercises")]),a("v-simple-table",[a("thead",[a("tr",[a("th",[t._v("Username")]),a("th",[t._v("Description")]),a("th",[t._v("Duration")]),a("th",[t._v("Date")]),a("th",[t._v("Actions")])])]),a("tbody",t._l(t.exercises,(function(e){return a("tr",{key:e.id},[a("td",[t._v(t._s(e.username))]),a("td",[t._v(t._s(e.description))]),a("td",[t._v(t._s(e.duration))]),a("td",[t._v(t._s(e.date.substring(0,10)))]),a("td",[a("v-btn",{staticClass:"mx-0 mt-3 mb-3",attrs:{outlined:"",href:"/edit/"+e.id}},[t._v("Edit")]),t._v(" | "),a("v-btn",{staticClass:"mx-0 mt-3 mb-3",attrs:{outlined:"",color:"error"},on:{click:function(a){return t.Delete(e.id)}}},[t._v("Delete")])],1)])})),0)])],1)],1)],1)},yt=[],Ct={components:{Dashboard:M},data:function(){return{exercises:[]}},methods:{Delete:function(t){if("undefined"!==typeof window){var e=JSON.parse(localStorage.getItem("jwt")),a=e.data,n=a.user,r=a.token;V()({method:"delete",url:"api/exercise/delete/".concat(n.id,"/").concat(t),headers:{Accept:"*/*","Content-Type":"application/json",Authorization:"Bearer ".concat(r)}}).then((function(t){t&&window.location.reload(!0)}))}}},created:function(){var t=this;V.a.get("api/exercise/").then((function(e){return t.exercises=e.data})).catch((function(t){return console.log(t)}))}},jt=Ct,Ot=a("1f4f"),Tt=Object(l["a"])(jt,Dt,yt,!1,null,null,null),At=Tt.exports;c()(Tt,{VApp:d["a"],VBtn:O["a"],VCard:J["a"],VCardTitle:N["a"],VContainer:G["a"],VSimpleTable:Ot["a"]}),n["a"].use(b["a"]);var Rt=[{path:"/",component:st},{path:"/signin",component:xt,meta:{guest:!0}},{path:"/signup",component:dt,meta:{guest:!0}},{path:"/home",component:At,meta:{requiresAuth:!0}},{path:"/edit/:id",component:St,meta:{requiresAuth:!0}},{path:"/create",component:Z,meta:{requiresAuth:!0}}],It=new b["a"]({mode:"history",routes:Rt});It.beforeEach((function(t,e,a){t.matched.some((function(t){return t.meta.requiresAuth}))?null==localStorage.getItem("jwt")?a({path:"/signin",params:{nextUrl:t.fullPath}}):a():t.matched.some((function(t){return t.meta.requiresAuth}))?null==localStorage.getItem("jwt")?a():a({path:"/home",params:{nextUrl:t.fullPath}}):a()}));var Et=It;n["a"].config.productionTip=!1,new n["a"]({vuetify:h,router:Et,render:function(t){return t(f)}}).$mount("#app")}});
//# sourceMappingURL=app.9d9e17dd.js.map