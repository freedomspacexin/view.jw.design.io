webpackJsonp([22],{KWce:function(t,s){},"LUk+":function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i={data:function(){return{imgs:[],domain:""}},props:["title","url","categoryId"],created:function(){var t=this,s=this.url.split("?");switch(this.domain="/view.jw.design.io",s[0]){case"products-simplest-list.json":this.$ajax("products-simplest-list.json").then(function(s){t.imgs=s.data}).catch(function(t){console.log(t)});break;case"products-modern-list.json":this.$ajax("products-modern-list.json").then(function(s){t.imgs=s.data}).catch(function(t){console.log(t)});break;case"products-restore-list.json":this.$ajax("products-restore-list.json").then(function(s){t.imgs=s.data}).catch(function(t){console.log(t)});break;case"products-mashup-list.json":this.$ajax("products-mashup-list.json").then(function(s){t.imgs=s.data}).catch(function(t){console.log(t)})}},mounted:function(){var t=this;mui(".product-content").on("tap","a",function(s){var a=this.getAttribute("data-id");t.$router.push({name:"DesignDetail",query:{id:a}})}),mui(".product-head").on("tap","a",function(s){var a=this.getAttribute("data-id");t.$router.push({name:"category_items",query:{dataId:a}})})}},e={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"product-items",attrs:{id:"product-items"}},[a("div",{staticClass:"product-head clearfix"},[a("h3",{},[t._v(t._s(t.title))]),a("a",{attrs:{href:"javascript:;","data-id":t.categoryId}},[t._v("更多")])]),t._v(" "),a("div",{staticClass:"product-content"},t._l(t.imgs,function(s,i){return a("div",{key:i,staticClass:"product-item"},[a("a",{attrs:{href:"javascript:;","data-id":s.id}},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.domain+s.img_url,expression:"domain + img.img_url"}],key:s.img_url}),t._v(" "),a("div",{staticClass:"product-describe"},[a("h3",{},[t._v(t._s(s.title))]),t._v(" "),a("span",{staticClass:"sell_price"},[t._v(t._s(s.designer)+"  ")]),t._v(" "),a("span",{staticClass:"market_price"},[t._v("找他设计")])])])])}),0)])},staticRenderFns:[]};var n=a("VU/8")(i,e,!1,function(t){a("KWce")},"data-v-5cf62dc2",null);s.default=n.exports}});