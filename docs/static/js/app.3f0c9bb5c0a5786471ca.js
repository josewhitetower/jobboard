webpackJsonp([2],{"3OJ6":function(e,t){},"6rsj":function(e,t){},EAo2:function(e,t){},HRpe:function(e,t){},LUiK:function(e,t){},NHnr:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=s("7+uW"),a={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-toolbar",{staticClass:"blue",attrs:{fixed:"",dark:""}},[s("span",{staticClass:"PageHeader-logo"},[s("v-toolbar-title",{staticClass:"mr-4"},[s("router-link",{staticClass:"home",attrs:{tag:"span",to:{path:"/"}}},[e._v("\n                Job Board\n            ")])],1)],1),e._v(" "),s("v-btn",{attrs:{flat:"",dark:"",to:{name:"jobs"}}},[e._v("\n              Browse\n            ")]),e._v(" "),s("v-spacer"),e._v(" "),s("v-toolbar-items",[e.$store.state.isUserLoggedIn?e._e():s("v-btn",{attrs:{flat:"",dark:"",to:{name:"login"}}},[e._v("\n                Log in\n            ")]),e._v(" "),e.$store.state.isUserLoggedIn?e._e():s("v-btn",{attrs:{flat:"",dark:"",to:{name:"register"}}},[e._v("\n                Sign Up\n            ")]),e._v(" "),e.$store.state.isUserLoggedIn?s("v-btn",{attrs:{flat:"",dark:""},on:{click:e.logout}},[e._v("\n               Log out\n            ")]):e._e()],1)],1)},staticRenderFns:[]},n={name:"app",components:{PageHeader:s("VU/8")({methods:{logout:function(){this.$store.dispatch("setToken",null),this.$store.dispatch("setUser",null),this.$router.push("/"),this.$bus.$emit("message",{message:"Bye...",color:"success"})}}},a,!1,function(e){s("rwJh")},"data-v-4d9f03a8",null).exports},data:function(){return{snackbar:null,text:null,color:null,timeout:3e3}},mounted:function(){var e=this;this.$bus.$on("message",function(t){e.snackbar=!0,e.text=t.message,e.color=t.color})}},o={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-app",[s("v-content",{attrs:{fluid:""}},[s("v-container",[s("div",{attrs:{id:"app"}},[s("page-header"),e._v(" "),s("router-view"),e._v(" "),s("v-snackbar",{attrs:{color:e.color,timeout:e.timeout,top:""},model:{value:e.snackbar,callback:function(t){e.snackbar=t},expression:"snackbar"}},[e._v("\n          "+e._s(e.text)+"\n  "),s("v-btn",{attrs:{dark:"",flat:""},nativeOn:{click:function(t){e.snackbar=!1}}},[e._v("x")])],1)],1)])],1)],1)},staticRenderFns:[]},i=s("VU/8")(n,o,!1,function(e){s("HRpe")},null,null).exports,l=s("3EgV"),c=s.n(l),u=s("9JMe"),d=s("/ocq"),p=s("Xxa5"),v=s.n(p),f=s("exGp"),m=s.n(f),b=s("M4fF"),h={data:function(){return{search:""}},watch:{search:s.n(b).a.debounce(function(){var e=m()(v.a.mark(function e(t){var s;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:s={name:"jobs"},""!==this.search&&(s.query={search:this.search}),this.$router.push(s);case 3:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),700),"$route.query.search":{immediate:!0,handler:function(e){this.search=e}}}},_={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("panel",{attrs:{title:"Search"}},[s("v-text-field",{attrs:{label:"Search for title, company or description"},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1)},staticRenderFns:[]},g=s("VU/8")(h,_,!1,function(e){s("6rsj")},null,null).exports,w=s("mtWM"),x=s.n(w),k=void 0;k="http://138.68.94.242/";var $=function(){return x.a.create({baseURL:k})},j=function(e){return $().post("add",e)},y=function(e){return $().get("jobs",{params:{search:e}})},R=function(e){return $().get("jobs/"+e)},C=function(e){return $().put("jobs/"+e._id,e)},U=function(e){return console.log("deleting"),$().delete("jobs/"+e._id)},q={name:"JobBoard",components:{Search:g},data:function(){return{title:"Job Board",jobs:[],id:null}},watch:{"$route.query.search":{immediate:!0,handler:function(e){var t=this;return m()(v.a.mark(function s(){return v.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,y(e).then(function(e){return t.jobs=e.data});case 2:case"end":return s.stop()}},s,t)}))()}}}},E={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-layout",{attrs:{column:""}},[s("v-flex",[s("search"),e._v(" "),s("panel",{staticClass:"mt-3",attrs:{title:"Jobs"}},[s("router-link",{attrs:{slot:"action",to:{name:"add"}},slot:"action"},[e.$store.state.isUserLoggedIn?s("v-btn",{staticClass:"blue accent-2",attrs:{fab:"",light:"",small:"",absolute:"",right:"",middle:""}},[s("v-icon",[e._v("add")])],1):e._e()],1),e._v(" "),e._l(e.jobs,function(t){return s("v-card",{key:t.id,staticClass:"job"},[s("v-layout",[s("v-flex",[s("div",{staticClass:"job-title "},[e._v("     "+e._s(t.title))]),e._v(" "),s("div",{staticClass:"job-company"},[e._v("     "+e._s(t.company))]),e._v(" "),s("div",{staticClass:"job-description"},[e._v("     "+e._s(t.description))]),e._v(" "),s("v-btn",{staticClass:"blue",attrs:{to:{path:"jobs/"+t._id},dark:""}},[e._v("View")])],1)],1)],1)})],2)],1)],1)},staticRenderFns:[]},J=s("VU/8")(q,E,!1,function(e){s("pUNR")},"data-v-0761e88c",null).exports,P={name:"JobAdd",data:function(){return{valid:!0,job:{},titleRules:[function(e){return!!e||"Title is required"}],companyRules:[function(e){return!!e||"Company is required"}],descriptionRules:[function(e){return!!e||"Description is required"}]}},methods:{add:function(){var e=this;return m()(v.a.mark(function t(){var s,r;return v.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return s=e.job,t.next=3,j(s);case 3:(r=t.sent).data.error?e.$bus.$emit("message",{message:r.data.error,color:"error"}):(e.$refs.form.reset(),e.$router.push("/jobs"),e.$bus.$emit("message",{message:"Job saved",color:"success"}));case 5:case"end":return t.stop()}},t,e)}))()},clear:function(){this.$refs.form.reset()}}},L={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-layout",{attrs:{column:""}},[s("v-flex",[s("panel",{attrs:{title:"Add a job"}},[s("v-form",{ref:"form",staticClass:"pl-4 pr-4 pb-2 pt-2",attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[s("v-text-field",{attrs:{label:"Title",required:"",rules:e.titleRules},model:{value:e.job.title,callback:function(t){e.$set(e.job,"title",t)},expression:"job.title"}}),e._v(" "),s("v-text-field",{attrs:{label:"Company",required:"",rules:e.companyRules},model:{value:e.job.company,callback:function(t){e.$set(e.job,"company",t)},expression:"job.company"}}),e._v(" "),s("v-text-field",{attrs:{label:"Description",required:"",rules:e.descriptionRules,textarea:""},model:{value:e.job.description,callback:function(t){e.$set(e.job,"description",t)},expression:"job.description"}}),e._v(" "),s("v-btn",{attrs:{flat:"",light:""},on:{click:e.clear}},[e._v("clear")]),e._v(" "),s("v-btn",{staticClass:"blue",attrs:{disabled:!e.valid},on:{click:e.add}},[e._v("add")])],1)],1)],1)],1)},staticRenderFns:[]},V=s("VU/8")(P,L,!1,function(e){s("nsiG")},"data-v-837ca26e",null).exports,F=function(e){return $().post("register",e)},T=function(e){return $().post("login",e)},I={data:function(){var e=this;return{valid:!0,password:"",passwordRules:[function(e){return!!e||"Password is required"},function(e){return e.length>=3||"Password must be more than 3 characters"}],confirmPassword:"",confirmPasswordRules:[function(t){return e.password===e.confirmPassword||"Passwords do not coincide"}],email:"",emailRules:[function(e){return!!e||"E-mail is required"},function(e){return/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e)||"E-mail must be valid"}],e1:!0,e2:!0}},methods:{register:function(){var e=this;return m()(v.a.mark(function t(){var s;return v.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return s={email:e.email,password:e.password},t.next=3,F(s).then(function(t){t.data.error?e.$bus.$emit("message",{message:t.data.error,color:"error"}):(e.$store.dispatch("setToken",t.data.token),e.$store.dispatch("setUser",t.data.user),e.$refs.form.reset(),e.$router.push("/jobs"),e.$bus.$emit("message",{message:"User succesfully registered",color:"success"}))});case 3:case"end":return t.stop()}},t,e)}))()}}},A={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-layout",{attrs:{column:""}},[s("v-flex",[s("panel",{attrs:{title:"Register"}},[s("v-form",{ref:"form",staticClass:"pl-4 pr-4 pb-2 pt-2",attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[s("v-text-field",{attrs:{label:"E-mail",rules:e.emailRules,required:""},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),e._v(" "),s("v-text-field",{attrs:{label:"Password",rules:e.passwordRules,required:"",min:"3","append-icon":e.e1?"visibility":"visibility_off","append-icon-cb":function(){return e.e1=!e.e1},type:e.e1?"password":"text",counter:""},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),e._v(" "),s("v-text-field",{attrs:{label:"Confirm Password",rules:e.confirmPasswordRules,required:"",min:"3","append-icon":e.e2?"visibility":"visibility_off","append-icon-cb":function(){return e.e2=!e.e2},type:e.e2?"password":"text",counter:""},model:{value:e.confirmPassword,callback:function(t){e.confirmPassword=t},expression:"confirmPassword"}}),e._v(" "),s("v-btn",{staticClass:"blue",attrs:{dark:"",disabled:!e.valid},on:{click:e.register}},[e._v("register")])],1)],1)],1)],1)},staticRenderFns:[]},O=s("VU/8")(I,A,!1,null,null,null).exports,S={data:function(){return{valid:!0,password:"",passwordRules:[function(e){return!!e||"Password is required"}],email:"",emailRules:[function(e){return!!e||"E-mail is required"},function(e){return/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e)||"E-mail must be valid"}]}},methods:{login:function(){var e=this;return m()(v.a.mark(function t(){var s;return v.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return s={email:e.email,password:e.password},t.next=3,T(s).then(function(t){t.data.error?e.EventBus.$emit("message",{message:t.data.error,color:"error"}):(e.$store.dispatch("setToken",t.data.token),e.$store.dispatch("setUser",t.data.user),e.text=t.data.message,e.color="success",e.snackbar=!0,e.$refs.form.reset(),e.$router.push("/"),e.$bus.$emit("message",{message:"Welcome...",color:"success"}))}).catch(function(e){return console.log(e)});case 3:case"end":return t.stop()}},t,e)}))()}}},B={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-layout",{attrs:{column:""}},[s("v-flex",[s("panel",{attrs:{title:"Login"}},[s("v-form",{ref:"form",staticClass:"pl-4 pr-4 pb-2 pt-2",attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[s("v-text-field",{attrs:{label:"E-mail",rules:e.emailRules,required:""},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),e._v(" "),s("v-text-field",{attrs:{label:"Password",rules:e.passwordRules,required:"",type:"password"},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),e._v(" "),s("v-btn",{staticClass:"blue",attrs:{dark:"",disabled:!e.valid},on:{click:e.login}},[e._v("login")])],1)],1)],1)],1)},staticRenderFns:[]},H=s("VU/8")(S,B,!1,null,null,null).exports,N={data:function(){return{job:{}}},mounted:function(){var e=this;return m()(v.a.mark(function t(){var s;return v.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return s=e.$store.state.route.params.id,t.next=3,R(s).then(function(t){e.job=t.data});case 3:case"end":return t.stop()}},t,e)}))()},methods:{deleteJob:function(){var e=this;return m()(v.a.mark(function t(){return v.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,U(e.job).then(function(t){t.data.error?e.$bus.$emit("message",{message:t.data.error,color:"error"}):(e.$router.push("/jobs"),e.$bus.$emit("message",{message:"Job deleted",color:"success"}))});case 2:case"end":return t.stop()}},t,e)}))()}}},z={render:function(){var e=this.$createElement,t=this._self._c||e;return t("v-layout",{attrs:{column:""}},[t("v-flex",[t("panel",{attrs:{title:this.job.title}},[t("v-layout",[t("v-flex",[t("div",{staticClass:"job-company"},[this._v("     "+this._s(this.job.company))]),this._v(" "),t("div",{staticClass:"job-description"},[this._v("     "+this._s(this.job.description))]),this._v(" "),this.$store.state.isUserLoggedIn?t("v-btn",{staticClass:"blue",attrs:{to:{path:"/jobs/"+this.job._id+"/edit"},dark:""}},[this._v("Edit ")]):this._e(),this._v(" "),this.$store.state.isUserLoggedIn?t("v-btn",{staticClass:"danger",attrs:{dark:""},on:{click:this.deleteJob}},[this._v("Delete ")]):this._e()],1)],1)],1)],1)],1)},staticRenderFns:[]},D=s("VU/8")(N,z,!1,function(e){s("LUiK")},"data-v-813efea2",null).exports,M={name:"JobAdd",data:function(){return{valid:!0,job:{},titleRules:[function(e){return!!e||"Title is required"}],companyRules:[function(e){return!!e||"Company is required"}],descriptionRules:[function(e){return!!e||"Description is required"}]}},mounted:function(){var e=this;return m()(v.a.mark(function t(){var s;return v.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return s=e.$store.state.route.params.id,t.next=3,R(s).then(function(t){e.job=t.data});case 3:case"end":return t.stop()}},t,e)}))()},methods:{save:function(){var e=this;return m()(v.a.mark(function t(){var s,r;return v.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return s=e.job,t.next=3,C(s);case 3:r=t.sent,console.log(s),console.log(r),r.data.error?e.$bus.$emit("message",{message:r.data.error,color:"error"}):(e.$refs.form.reset(),e.$router.push("/jobs/"+e.job._id),e.$bus.$emit("message",{message:"Job edited",color:"success"}));case 7:case"end":return t.stop()}},t,e)}))()},clear:function(){this.$refs.form.reset()}}},G={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-layout",{attrs:{column:""}},[s("v-flex",[s("panel",{attrs:{title:"Edit a job"}},[s("v-form",{ref:"form",staticClass:"pl-4 pr-4 pb-2 pt-2",attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[s("v-text-field",{attrs:{label:"Title",required:"",rules:e.titleRules},model:{value:e.job.title,callback:function(t){e.$set(e.job,"title",t)},expression:"job.title"}}),e._v(" "),s("v-text-field",{attrs:{label:"Company",required:"",rules:e.companyRules},model:{value:e.job.company,callback:function(t){e.$set(e.job,"company",t)},expression:"job.company"}}),e._v(" "),s("v-text-field",{attrs:{label:"Description",required:"",rules:e.descriptionRules,textarea:""},model:{value:e.job.description,callback:function(t){e.$set(e.job,"description",t)},expression:"job.description"}}),e._v(" "),s("v-btn",{attrs:{flat:"",light:""},on:{click:e.clear}},[e._v("clear")]),e._v(" "),s("v-btn",{staticClass:"blue",attrs:{disabled:!e.valid},on:{click:e.save}},[e._v("save")])],1)],1)],1)],1)},staticRenderFns:[]},W=s("VU/8")(M,G,!1,function(e){s("3OJ6")},"data-v-be109d74",null).exports;r.a.use(d.a);var K=new d.a({routes:[{path:"/register",name:"register",component:O},{path:"/login",name:"login",component:H},{path:"/jobs",name:"jobs",component:J},{path:"/jobs/:id",name:"job",component:D},{path:"/jobs/:id/edit",name:"edit",component:W},{path:"/add",name:"add",component:V},{path:"/",component:J}]}),X=s("NYxO"),Y=s("424j");r.a.use(X.a);var Q=new X.a.Store({strict:!0,plugins:[Object(Y.a)({key:"session",storage:window.sessionStorage})],state:{token:null,user:null,isUserLoggedIn:!1},mutations:{setToken:function(e,t){e.token=t,e.isUserLoggedIn=!!t},setUser:function(e,t){e.user=t}},actions:{setToken:function(e,t){(0,e.commit)("setToken",t)},setUser:function(e,t){(0,e.commit)("setUser",t)}}}),Z={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"white elevation-2"},[t("v-toolbar",{staticClass:"blue",attrs:{flat:"",dense:"",dark:""}},[t("v-toolbar-title",[this._v(this._s(this.title))]),this._v(" "),this._t("action")],2),this._v(" "),t("div",{staticClass:"pl-4 pr-4 pb-2 pt-2"},[this._t("default",[this._v("No Slot defined")])],2)],1)},staticRenderFns:[]},ee=s("VU/8")({props:["title"]},Z,!1,function(e){s("EAo2")},null,null).exports;s.e(0).then(s.bind(null,"7zck")),r.a.use(c.a),r.a.prototype.$bus=new r.a,Object(u.sync)(Q,K),r.a.component("panel",ee),r.a.config.productionTip=!1,new r.a({el:"#app",router:K,store:Q,template:"<App/>",components:{App:i}})},nsiG:function(e,t){},pUNR:function(e,t){},rwJh:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.3f0c9bb5c0a5786471ca.js.map