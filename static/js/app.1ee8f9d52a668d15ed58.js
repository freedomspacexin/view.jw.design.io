webpackJsonp([20],{"991W":function(n,t){},Aehb:function(n,t){},NHnr:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=e("yVX/"),a=e("Qk47"),i={data:function(){return{goodsNum:a.a.getTotalProdsNum()}},created:function(){var n=this;o.a.$on("addShopCart",function(t){n.goodsNum+=t})},mounted:function(){mui("body").on("tap","a",function(){window.location.href=this.href})}},r={render:function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",[e("transition",{attrs:{name:"router",mode:"out-in"}},[e("router-view")],1),n._v(" "),e("nav",{staticClass:"mui-bar mui-bar-tab"},[e("router-link",{staticClass:"mui-tab-item",attrs:{to:{name:"Home"}}},[e("span",{staticClass:"icomoon_font icomoon_font_home"}),n._v(" "),e("span",{staticClass:"mui-tab-label"},[n._v("首页")])]),n._v(" "),e("router-link",{staticClass:"mui-tab-item",attrs:{to:{name:"Category"}}},[e("span",{staticClass:"icomoon_font icomoon_font_category"}),n._v(" "),e("span",{staticClass:"mui-tab-label"},[n._v("分类")])]),n._v(" "),e("router-link",{staticClass:"mui-tab-item",attrs:{to:{name:"Activity"}}},[e("span",{staticClass:"icomoon_font icomoon_font_active"}),n._v(" "),e("span",{staticClass:"mui-tab-label"},[n._v("活动")])]),n._v(" "),e("router-link",{staticClass:"mui-tab-item cart",attrs:{to:{name:"Cart"}}},[e("span",{staticClass:"icomoon_font icomoon_font_cart"},[e("span",{staticClass:"cart-count"},[n._v(n._s(n.goodsNum))])]),n._v(" "),e("span",{staticClass:"mui-tab-label"},[n._v("购物车")])]),n._v(" "),e("router-link",{staticClass:"mui-tab-item",attrs:{to:{name:"Personal"}}},[e("span",{staticClass:"icomoon_font icomoon_font_personal"}),n._v(" "),e("span",{staticClass:"mui-tab-label"},[n._v("个人中心")])])],1)],1)},staticRenderFns:[]};var u=e("VU/8")(i,r,!1,function(n){e("YTuh")},null,null).exports;Vue.use(VueRouter);var c=new VueRouter({linkActiveClass:"mui-active",routes:[{path:"/",redirect:"/home"},{path:"/home",name:"Home",component:function(n){return Promise.all([e.e(0),e.e(1)]).then(function(){var t=[e("LqM4")];n.apply(null,t)}.bind(this)).catch(e.oe)}},{path:"/category",name:"Category",component:function(n){return e.e(5).then(function(){var t=[e("zlCH")];n.apply(null,t)}.bind(this)).catch(e.oe)},children:[{name:"category_items",path:"items",component:function(n){return e.e(11).then(function(){var t=[e("HGCB")];n.apply(null,t)}.bind(this)).catch(e.oe)}},{name:"category_grides",path:"grides",component:function(n){return e.e(16).then(function(){var t=[e("QWiF")];n.apply(null,t)}.bind(this)).catch(e.oe)}},{name:"category_curtain",path:"curtain",component:function(n){return e.e(13).then(function(){var t=[e("rdpL")];n.apply(null,t)}.bind(this)).catch(e.oe)}}]},{path:"/activity",name:"Activity",component:function(n){return e.e(17).then(function(){var t=[e("HEEz")];n.apply(null,t)}.bind(this)).catch(e.oe)}},{path:"/cart",name:"Cart",component:function(n){return Promise.all([e.e(0),e.e(2)]).then(function(){var t=[e("jzGn")];n.apply(null,t)}.bind(this)).catch(e.oe)}},{path:"/personal",name:"Personal",component:function(n){return Promise.all([e.e(0),e.e(6)]).then(function(){var t=[e("PoLk")];n.apply(null,t)}.bind(this)).catch(e.oe)}},{path:"/productDetail",name:"ProductDetail",component:function(n){return Promise.all([e.e(0),e.e(15)]).then(function(){var t=[e("iVTN")];n.apply(null,t)}.bind(this)).catch(e.oe)}},{path:"/designDetail",name:"DesignDetail",component:function(n){return Promise.all([e.e(0),e.e(7)]).then(function(){var t=[e("mPud")];n.apply(null,t)}.bind(this)).catch(e.oe)}},{path:"/booksDesign",name:"BooksDesign",component:function(n){return e.e(4).then(function(){var t=[e("TOdx")];n.apply(null,t)}.bind(this)).catch(e.oe)}}]}),s=e("UQTY"),l=e.n(s),p=e("gAYL"),m=e.n(p),f=e("IqSH"),h=e.n(f),d=e("w3jz"),v=e.n(d),b=(e("d8/S"),e("Aehb"),e("by22"),e("mtWM")),_=e.n(b);e("991W"),e("erWL");Vue.config.productionTip=!1,Vue.component(m.a.name,m.a),Vue.component(h.a.name,h.a),Vue.use(v.a),Vue.prototype.$ajax=_.a;var y="";y="/view.jw.design.io",_.a.defaults.baseURL=y+"/static/server/api/";_.a.interceptors.request.use(function(n){return l.a.open({text:"加载中...",spinnerType:"fading-circle"}),n}),_.a.interceptors.response.use(function(n){return l.a.close(),n}),Vue.component("topSearch",function(){return e.e(12).then(e.bind(null,"ny9n"))}),Vue.component("mySwiper",function(){return e.e(18).then(e.bind(null,"4GCb"))}),Vue.component("categoryTitle",function(){return e.e(8).then(e.bind(null,"4BCh"))}),Vue.component("rightSwiper",function(){return e.e(14).then(e.bind(null,"tRhx"))}),Vue.component("productGride",function(){return e.e(9).then(e.bind(null,"JCbq"))}),Vue.component("copyright",function(){return e.e(10).then(e.bind(null,"a1xv"))}),Vue.component("topBar",function(){return Promise.all([e.e(0),e.e(3)]).then(e.bind(null,"2rDN"))}),new Vue({el:"#app",router:c,components:{App:u},template:"<App/>"})},Qk47:function(n,t,e){"use strict";var o=e("mvHQ"),a=e.n(o),i={},r=window.localStorage,u=JSON.parse(r.getItem("prods")||"{}");i.saveProds=function(n){r.setItem("prods",a()(n))},i.deleteProdById=function(n){delete u[n],this.saveProds(u)},i.updateProds=function(n,t){u[n.id]?u[n.id]+=n.num:u[n.id]=n.num,this.saveProds(u),t&&t()},i.getProds=function(){return JSON.parse(r.getItem("prods")||"{}")},i.getTotalProdsNum=function(){var n=0;for(var t in u)n+=u[t];return n},t.a=i},ULTG:function(n,t){},YTuh:function(n,t){},by22:function(n,t){},"d8/S":function(n,t){},erWL:function(n,t){},lRwf:function(n,t){n.exports=Vue},"yVX/":function(n,t,e){"use strict";var o=e("lRwf"),a=e.n(o);t.a=new a.a}},["NHnr"]);