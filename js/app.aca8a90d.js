(function(t){function e(e){for(var r,o,c=e[0],l=e[1],i=e[2],p=0,d=[];p<c.length;p++)o=c[p],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&d.push(n[o][0]),n[o]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);u&&u(e);while(d.length)d.shift()();return a.push.apply(a,i||[]),s()}function s(){for(var t,e=0;e<a.length;e++){for(var s=a[e],r=!0,c=1;c<s.length;c++){var l=s[c];0!==n[l]&&(r=!1)}r&&(a.splice(e--,1),t=o(o.s=s[0]))}return t}var r={},n={app:0},a=[];function o(e){if(r[e])return r[e].exports;var s=r[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.m=t,o.c=r,o.d=function(t,e,s){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(o.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(s,r,function(e){return t[e]}.bind(null,r));return s},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var i=0;i<c.length;i++)e(c[i]);var u=l;a.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"034f":function(t,e,s){"use strict";var r=s("85ec"),n=s.n(r);n.a},"56d7":function(t,e,s){"use strict";s.r(e);s("e260"),s("e6cf"),s("cca6"),s("a79d");var r=s("2b0e"),n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("b-container",{attrs:{id:"app",fluid:""}},[s("b-jumbotron",[s("h2",{staticClass:"text-left font-weight-bold"},[t._v("四福音書")]),s("h6",{staticClass:"text-left"},[t._v("-- Made by Bobson Lin")])]),s("b-card",{attrs:{"no-body":""},scopedSlots:t._u([{key:"header",fn:function(){return[s("h4",{staticClass:"mb-0 text-left"},[t._v("四福音書文字頻率")])]},proxy:!0}])},[s("b-tabs",{attrs:{card:""}},[s("b-tab",{attrs:{title:"文字雲",active:""}},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-sm-6 py-2"},[s("h5",{staticClass:"py-2"},[t._v("馬太福音")]),s("b-img",{attrs:{alt:"Matthew WordCloud",src:"https://raw.githubusercontent.com/BbsonLin/the-four-gospels/master/uploads/cnt/matthew_wc_100.png",fluid:""}})],1),s("div",{staticClass:"col-sm-6 py-2"},[s("h5",{staticClass:"py-2"},[t._v("馬可福音")]),s("b-img",{attrs:{alt:"Mark WordCloud",src:"https://raw.githubusercontent.com/BbsonLin/the-four-gospels/master/uploads/cnt/mark_wc_100.png",fluid:""}})],1),s("div",{staticClass:"col-sm-6 py-2"},[s("h5",{staticClass:"py-2"},[t._v("路加福音")]),s("b-img",{attrs:{alt:"Luke WordCloud",src:"https://raw.githubusercontent.com/BbsonLin/the-four-gospels/master/uploads/cnt/luke_wc_100.png",fluid:""}})],1),s("div",{staticClass:"col-sm-6 py-2"},[s("h5",{staticClass:"py-2"},[t._v("約翰福音")]),s("b-img",{attrs:{alt:"John WordCloud",src:"https://raw.githubusercontent.com/BbsonLin/the-four-gospels/master/uploads/cnt/john_wc_100.png",fluid:""}})],1)])]),s("b-tab",{attrs:{title:"統計表格",lazy:""}},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-sm-6 py-2 "},[s("h5",{staticClass:"py-2"},[t._v("馬太福音")]),s("div",{staticClass:"b-table-sticky-header",domProps:{innerHTML:t._s(t.matthewHtml)}})]),s("div",{staticClass:"col-sm-6 py-2"},[s("h5",{staticClass:"py-2"},[t._v("馬可福音")]),s("div",{staticClass:"b-table-sticky-header",domProps:{innerHTML:t._s(t.markHtml)}})]),s("div",{staticClass:"col-sm-6 py-2"},[s("h5",{staticClass:"py-2"},[t._v("路加福音")]),s("div",{staticClass:"b-table-sticky-header",domProps:{innerHTML:t._s(t.lukeHtml)}})]),s("div",{staticClass:"col-sm-6 py-2"},[s("h5",{staticClass:"py-2"},[t._v("約翰福音")]),s("div",{staticClass:"b-table-sticky-header",domProps:{innerHTML:t._s(t.johnHtml)}})])])])],1)],1)],1)},a=[],o=(s("96cf"),s("1da1")),c=s("bc3a"),l=s.n(c),i={name:"App",methods:{fetchTable:function(t){return Object(o["a"])(regeneratorRuntime.mark((function e(){var s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,l.a.get("https://raw.githubusercontent.com/BbsonLin/the-four-gospels/master/uploads/cnt/".concat(t,"_stats.html"));case 2:return s=e.sent,console.log(s),e.abrupt("return",s.data);case 5:case"end":return e.stop()}}),e)})))()}},data:function(){return{matthewHtml:"",markHtml:"",lukeHtml:"",johnHtml:""}},mounted:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.fetchTable("matthew");case 2:return t.matthewHtml=e.sent,e.next=5,t.fetchTable("mark");case 5:return t.markHtml=e.sent,e.next=8,t.fetchTable("luke");case 8:return t.lukeHtml=e.sent,e.next=11,t.fetchTable("john");case 11:t.johnHtml=e.sent;case 12:case"end":return e.stop()}}),e)})))()}},u=i,p=(s("034f"),s("2877")),d=Object(p["a"])(u,n,a,!1,null,null,null),f=d.exports,h=s("5f5b"),b=s("b1e0");s("f9e3"),s("2dd8");r["default"].use(h["a"]),r["default"].use(b["a"]),r["default"].config.productionTip=!1,new r["default"]({render:function(t){return t(f)}}).$mount("#app")},"85ec":function(t,e,s){}});
//# sourceMappingURL=app.aca8a90d.js.map