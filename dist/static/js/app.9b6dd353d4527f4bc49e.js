webpackJsonp([2],{NHnr:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=e("7+uW"),o={name:"App",methods:{button:function(){alert(1)}}},s={render:function(){var n=this.$createElement,t=this._self._c||n;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]};var l=e("VU/8")(o,s,!1,function(n){e("ptPY")},null,null).exports,r=e("/ocq");i.a.use(r.a);var u=new r.a({routes:[{path:"/button",name:"button",component:function(){return e.e(0).then(e.bind(null,"rnqt"))}}]}),a=e("nvbp"),c=e.n(a),p=e("fZjL"),d=e.n(p),f={name:"YiButton",props:{type:{type:String,default:"default",validator:function(n){return-1!==["success","primary","warning","info","danger","default","text"].indexOf(n)}},icon:{type:String,default:""},size:{type:String,default:"",validator:function(n){return-1!==["lg","sm","xs",""].indexOf(n)}},plain:Boolean,round:Boolean,circle:Boolean,block:Boolean,disable:Boolean},methods:{className:function(){return{class:[this.type?"yi-btn-"+this.type:"",""!==this.size||this.size?"yi-btn-"+this.size:"",{"is-plain":this.plain,"is-round":this.round,"is-circle":this.circle,"is-block":this.block,disabled:this.disabled}]}}},render:function(){var n=this,t=arguments[0],e=d()(this.$slots).reduce(function(t,e){return t.concat(n.$slots[e])},[]),i={on:this.$listeners};return t("button",c()([{attrs:{type:"button"}},i,{class:"yi-btn"},this.className()]),[""!==this.icon?t("yi-icon",{attrs:{type:this.icon}}):"",e.length?t("span",[e]):""])}},h=e("VU/8")(f,null,!1,null,null,null).exports;h.install=function(n){n.component(h.name,h)};var m=h,b=e("VU/8")({name:"YiButtonGroup",render:function(){return(0,arguments[0])("div",{class:"yi-btn-group"},[this.$slots.default])}},null,!1,null,null,null).exports;b.install=function(n){n.component(b.name,b)};var y=b,v={name:"YiIcon",props:{type:String},render:function(){return(0,arguments[0])("i",{class:"yi-icon-"+this.type})}},w=e("VU/8")(v,null,!1,null,null,null).exports;w.install=function(n){n.component(w.name,w)};var g=w,B=[m,g,y],x=function(n){B.map(function(t){n.component(t.name,t)})};"undefined"!=typeof window&&window.Vue&&x(window.Vue);var Y={install:x,Button:m,Icon:g,ButtonGroup:y};e("YLK3");i.a.config.productionTip=!1,i.a.use(Y),new i.a({el:"#app",router:u,components:{App:l},template:"<App/>"})},YLK3:function(n,t){},ptPY:function(n,t){}},["NHnr"]);
//# sourceMappingURL=app.9b6dd353d4527f4bc49e.js.map