webpackJsonp([1],{"+r4D":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAeYAAAA6CAMAAABSxgodAAAAQlBMVEUAAAC1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbWJBHefAAAAFnRSTlMAHcHZ/xPQqi/jgFUl+HPqSWQ+CLiSixJeiQAAARtJREFUeAHt21eS4zAMBuGfEpRzuv9Vt1hO2ImvHlR/R3A7iQQEAAAAAAAAAADeUyqSEF0qrUwKj8pG5+iq0rKyUmxUpnN0VW0PNZ3jVw7cGY15jQJCq9TZS5fUKhr0Nmh8de5GDdYL0Srb5DrnypMF64zZ7NZ5sWy5VTabhVCVs2lVu+TKrdbJLFxnKrvOrnKgztjsadrVdq32yZ42IUpl31m3ynS2v+yXU5FZ0mxeE+4F4PSrV9ZzGhbP0fjKbdf6zs0hxHCcdnPp/k9bl92cVI7U2VU215nK8Tpfcqdguqgcz1HYJX+mnTsXVI7mmG+VXeeZygF9um9+M2B6BMyCgclO5rTB1gXYoQIbkWC/GQAAAAAAAAAAAP8A0yETO8qkVtkAAAAASUVORK5CYII="},"1A2P":function(t,e){},"5yxR":function(t,e,n){"use strict";var i={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("header",{staticClass:"jw_search"},[e("div",{staticClass:"jw_search_box"},[e("a",{staticClass:"icon_logo",attrs:{href:"#"}},[this._v("骏威装饰-商品")]),this._v(" "),e("form",{attrs:{action:"#"}},[e("span",{staticClass:"icon_search mintui mintui-search"}),this._v(" "),e("input",{attrs:{type:"text",placeholder:"placeholder"}})]),this._v(" "),e("a",{staticClass:"login",attrs:{href:"#"}},[this._v("登录")])])])}]};e.a=i},"7szB":function(t,e,n){"use strict";var i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("transition",{attrs:{name:"router",mode:"out-in"}},[e("router-view")],1)],1)},staticRenderFns:[]};e.a=i},"7yNj":function(t,e){},"8LnP":function(t,e){},"991W":function(t,e){},DbD4:function(t,e){},LqM4:function(t,e,n){"use strict";var i=n("yUvN"),s=n.n(i),a=n("fzoK");var r=function(t){n("1A2P")},c=n("VU/8")(s.a,a.a,!1,r,null,null);e.default=c.exports},M93x:function(t,e,n){"use strict";var i=n("xJD8"),s=n.n(i),a=n("7szB");var r=function(t){n("rYz8")},c=n("VU/8")(s.a,a.a,!1,r,null,null);e.default=c.exports},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("7+uW"),s=n("M93x"),a=n("/ocq"),r=n("LqM4");i.default.use(a.a);var c=new a.a({routes:[{path:"/",name:"Home",component:r.default}]}),o=n("Au9i"),l=n.n(o),u=(n("d8/S"),n("v2ns"),n("mtWM")),d=n.n(u),f=(n("991W"),n("erWL"),n("ny9n")),p={data:function(){return{imgs:[],domain:""}},props:["url"],created:function(){var t=this,e=this.url.split("?");switch(this.domain="/view.jw.design.io",e[0]){case"home_banner.json":this.$ajax("home_banner.json").then(function(e){t.imgs=e.data}).catch(function(t){console.log(t)});case"goodsDetail.json":var n=e[1].split("=")[1];this.$ajax.get("goodsDetail.json").then(function(e){t.imgs=e.data.find(function(t){return t.id===parseInt(n)}).img_urls}).catch(function(t){})}}},h={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("mt-swipe",{attrs:{auto:4e3}},t._l(t.imgs,function(e,i){return n("mt-swipe-item",{key:i},[n("a",{attrs:{href:e.url}},[n("img",{attrs:{src:t.domain+e.imgurl}})])])}),1)],1)},staticRenderFns:[]};var v=n("VU/8")(p,h,!1,function(t){n("DbD4")},"data-v-cf53c030",null).exports,m={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"text-center line-style"},[e("h3",[this._v(this._s(this.title))]),this._v(" "),e("img",{attrs:{src:n("+r4D")}})])},staticRenderFns:[]};var _=n("VU/8")({props:["title"]},m,!1,function(t){n("7yNj")},"data-v-2eb091aa",null).exports,A=n("DNVT"),g={data:function(){return{imgs:[],domain:""}},props:["url"],created:function(){var t=this,e=this.url.split("?");switch(this.domain="/view.jw.design.io",e[0]){case"products-small-style-list.json":this.$ajax("products-small-style-list.json").then(function(e){t.imgs=e.data}).catch(function(t){console.log(t)})}},updated:function(){new A.a("#swiper-right",{slidesPerView:"auto",spaceBetween:10})}},w={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"swiper-container",attrs:{id:"swiper-right"}},[n("div",{staticClass:"swiper-wrapper"},[t._l(t.imgs,function(e,i){return n("div",{key:i,staticClass:"swiper-slide swiper-slide-active",staticStyle:{"margin-right":"10px"}},[n("a",{attrs:{href:"javascript:;"}},[n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.domain+e.img_url,expression:"domain + img.img_url"}]}),t._v(" "),n("div",{staticClass:"product-describe"},[n("h3",[t._v(t._s(e.title))]),t._v(" "),n("span",{staticClass:"sell_price"},[t._v("$"+t._s(e.sell_price)+"  ")]),t._v(" "),n("del",{staticClass:"market_price"},[t._v("$"+t._s(e.market_price))])])])])}),t._v(" "),t._m(0)],2),t._v(" "),n("div",{staticClass:"right-white"}),t._v(" "),n("div",{staticClass:"left-white"})])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"swiper-slide",staticStyle:{"margin-right":"10px"}},[e("a",{attrs:{href:"javascript:;"}},[e("span",[this._v("查看更多")])])])}]};var b=n("VU/8")(g,w,!1,function(t){n("xLQf")},"data-v-9baa395e",null).exports,y={data:function(){return{imgs:[],domain:""}},props:["url"],created:function(){var t=this,e=this.url.split("?");switch(this.domain="/view.jw.design.io",e[0]){case"products-window-list.json":this.$ajax("products-window-list.json").then(function(e){t.imgs=e.data}).catch(function(t){console.log(t)});break;case"products-other-list.json":this.$ajax("products-other-list.json").then(function(e){t.imgs=e.data}).catch(function(t){console.log(t)})}}},x={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"product-gride-container"},[n("ul",{staticClass:"product-gride clearfix"},t._l(t.imgs,function(e,i){return n("li",{key:i},[n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.domain+e.img_url,expression:"domain+img.img_url"}]}),t._v(" "),n("h3",[t._v(t._s(e.title))])])}),0)])},staticRenderFns:[]};var j=n("VU/8")(y,x,!1,function(t){n("q0/h")},"data-v-35561c2e",null).exports,C={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"footer"},[n("h2",{staticClass:"footer-banner_title"},[t._v("骏威装饰")]),t._v(" "),n("ul",{staticClass:"clearfix"},[n("li",{attrs:{id:"appDownloadLink"}},[n("a",{attrs:{href:"/appdown.html"}},[t._v("下载APP")])]),t._v(" "),n("li",[n("a",{attrs:{href:"tel:0662-3858188"}},[t._v("联系我们")])]),t._v(" "),n("li",[n("a",{attrs:{href:"/article-company.html"}},[t._v("全站公告")])]),t._v(" "),n("li",[n("a",{attrs:{href:"/magazine/detail/189.html"}},[t._v("经营资质")])])]),t._v(" "),n("p",[t._v("Copyright © 2019 广东阳江骏威装饰有限公司 版权所有")]),t._v(" "),n("div",[t._v(" 网站备案号："),n("a",{attrs:{href:"http://www.haoyueyuan.com",target:"_blank"}},[t._v("粤XXXXXXXXX")])])])}]};var W=n("VU/8")({},C,!1,function(t){n("uA0Q")},"data-v-10b5cb8a",null).exports;i.default.config.productionTip=!1,i.default.use(l.a),i.default.prototype.$ajax=d.a;var V="";V="/view.jw.design.io",d.a.defaults.baseURL=V+"/static/server/api/",d.a.interceptors.request.use(function(t){return l.a.Indicator.open({text:"加载中...",spinnerType:"fading-circle"}),t}),d.a.interceptors.response.use(function(t){return l.a.Indicator.close(),t}),i.default.component("topSearch",f.default),i.default.component("mySwiper",v),i.default.component("categoryTitle",_),i.default.component("rightSwiper",b),i.default.component("productGride",j),i.default.component("copyright",W),new i.default({el:"#app",router:c,components:{App:s.default},template:"<App/>"})},aN0c:function(t,e){},"d8/S":function(t,e){},erWL:function(t,e){},fzoK:function(t,e,n){"use strict";var i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("top-search"),this._v(" "),e("my-swiper",{staticClass:"mt-40",attrs:{url:"home_banner.json"}})],1)},staticRenderFns:[]};e.a=i},ny9n:function(t,e,n){"use strict";var i=n("8LnP"),s=n.n(i),a=n("5yxR");var r=function(t){n("aN0c")},c=n("VU/8")(s.a,a.a,!1,r,"data-v-6e88b2e5",null);e.default=c.exports},"q0/h":function(t,e){},rYz8:function(t,e){},uA0Q:function(t,e){},v2ns:function(t,e){},xJD8:function(t,e){},xLQf:function(t,e){},yUvN:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.690342a0d6d621a6fe8f.js.map