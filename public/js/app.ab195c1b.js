(function(e){function t(t){for(var r,a,o=t[0],l=t[1],c=t[2],f=0,h=[];f<o.length;f++)a=o[f],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&h.push(i[a][0]),i[a]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);u&&u(t);while(h.length)h.shift()();return s.push.apply(s,c||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],r=!0,o=1;o<n.length;o++){var l=n[o];0!==i[l]&&(r=!1)}r&&(s.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},i={app:0},s=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var u=l;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},2522:function(e,t,n){"use strict";var r=n("ee8a"),i=n.n(r);i.a},3868:function(e,t,n){},"3bf4":function(e,t,n){},"3fa5":function(e,t,n){"use strict";var r=n("472f"),i=n.n(r);i.a},"472f":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),i=n("82ae"),s=n.n(i),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app"},[n("header",{staticClass:"app-header"},[n("Counter",{attrs:{value:e.orderMineCount}}),n("div",{staticClass:"app-action block",on:{click:e.restart}},[n("div",{staticClass:"face",class:e.faceClass})]),n("Counter",{attrs:{value:e._f("time")(e.time)}})],1),n("main",{staticClass:"app-container"},[n("Board",{staticClass:"app-board",attrs:{map:e.map,flag:e.flag,help:e.help,reverse:e.reverse,"error-index":e.errorIndex},on:{click:e.clickHandler,right:e.rightHandler,nears:e.nearsHandler}})],1),n("aside",{staticClass:"app-side"},[n("h2",{staticClass:"app-side-title"},[e._v("游戏规则")]),n("p",{staticClass:"app-side-content"},[e._v("经典扫雷，一款好玩有趣还能提高自己智力的小游戏，是你娱乐休闲打发时间的绝佳游戏，一起来玩吧！")]),n("h2",{staticClass:"app-side-title"},[e._v("游戏目标")]),n("p",{staticClass:"app-side-content"},[e._v("合理操作，扫除所有地雷。")]),n("h2",{staticClass:"app-side-title"},[e._v("操作指南")]),n("p",{staticClass:"app-side-content"},[e._v("鼠标左键点击，右键标注；右键可标注雷或问号，问号代表不确定。游戏左方数字代表雷数，右方数字代表时间。")]),n("button",{staticClass:"btn",on:{click:e.switchLevel}},[e._v("游戏难度："+e._s(e.gameConfig.text))])]),n("Footer")],1)},o=[],l=(n("cb29"),n("4de4"),n("4160"),n("caad"),n("d81d"),n("13d5"),n("2532"),n("159b"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"board",on:{mousedown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"left",37,t.key,["Left","ArrowLeft"])?null:"button"in t&&0!==t.button?null:e.leftDownHandler(t)},mouseup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"left",37,t.key,["Left","ArrowLeft"])?null:"button"in t&&0!==t.button?null:e.leftUpHandler(t)}}},e._l(e.map,(function(t,r){return n("div",{key:r,staticClass:"board-cell",class:{reverse:e.reverse.includes(r)},style:e.cellStyle,on:{mouseup:[function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"left",37,t.key,["Left","ArrowLeft"])?null:"button"in t&&0!==t.button?null:e.clickHandler(r)},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"right",39,t.key,["Right","ArrowRight"])?null:"button"in t&&2!==t.button?null:e.rightHandler(r)}]}},[n("div",{staticClass:"board-cell-front",class:e.blockClass(r)}),n("div",{staticClass:"board-cell-back",class:e.cellClass(r)})])})),0)}),c=[];n("fb6a"),n("a9e3"),n("c975"),n("a434");function u(e,t,n){var r=[],i=e%t,s=Math.floor(e/n),a=s>0,o=i>0,l=i<t-1,c=s<n-1;return a&&r.push(e-n),o&&r.push(e-1),l&&r.push(e+1),c&&r.push(e+n),a&&o&&r.push(e-n-1),a&&l&&r.push(e-n+1),c&&o&&r.push(e+n-1),c&&l&&r.push(e+n+1),r}function f(e,t){var n=e.indexOf(t);return-1!==n&&(e.splice(n,1),!0)}var h={name:"Board",props:{map:Array,help:Array,flag:Array,reverse:Array,errorIndex:Number},data:function(){return{previews:[]}},computed:{cellStyle:function(){var e="".concat(100/Math.sqrt(this.map.length),"%");return{width:e,height:e}}},methods:{cellClass:function(e){var t=this.map[e];if(-1!==this.errorIndex){if(this.flag.includes(e)&&-1!==t)return"mine-error";if(this.errorIndex===e)return"mine-active"}return-1===t?"mine":"bn-".concat(t)},blockClass:function(e){return this.help.includes(e)?"block-help":this.flag.includes(e)?"block-flag":this.previews.includes(e)?"bn-0":"block"},clickHandler:function(e){this.previews=[],this.$emit("click",e)},rightHandler:function(e){this.$emit("right",e)},leftDownHandler:function(e){var t=this;if(e.target===this.$el&&-1===this.errorIndex){var n=Math.sqrt(this.map.length),r=Math.floor(e.offsetX/(this.$el.offsetWidth/n)),i=Math.floor(e.offsetY/(this.$el.offsetHeight/n)),s=r+n*i;if(this.reverse.includes(s)&&!(this.map[s]<0)){var a=u(s,n,n).filter((function(e){return!t.reverse.includes(e)&&(!t.flag.includes(e)&&!t.help.includes(e))}));a.length&&(this.previews=a.slice(0),this.$el.preview=s)}}},leftUpHandler:function(){if(this.previews.length){var e=this.$el.preview;this.$emit("nears",e),this.$el.preview=null}this.previews=[]}}},d=h,p=(n("3fa5"),n("2877")),m=Object(p["a"])(d,l,c,!1,null,"8b3860f8",null),v=m.exports,g=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"counter"},e._l(e.counter,(function(e,t){return n("div",{key:t,staticClass:"counter-num",class:"num-"+e})})),0)},b=[],w=(n("ac1f"),n("1276"),{name:"Counter",props:{value:Number},computed:{counter:function(){var e=String(this.value).split("").reverse();return Array(3).fill(0).map((function(t,n){return e[n]||0})).reverse()}}}),C=w,k=(n("fd84"),Object(p["a"])(C,g,b,!1,null,"55b35f76",null)),y=k.exports,_=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("footer",{staticClass:"footer"},[n("div",{staticClass:"footer-row"},[n("a",{attrs:{href:"javascript:;"}},[e._v("源码索取")]),n("a",{attrs:{href:"javascript:;"},on:{click:e.openFLModal}},[e._v("友情链接")]),n("a",{attrs:{href:"javascript:;"}},[e._v("请喝可乐")])]),n("div",{staticClass:"footer-row"},[n("span",[e._v("© "+e._s(e.year))]),n("a",{attrs:{href:"javascript:;"},on:{click:e.openWechatModal}},[e._v("橙续缘")]),n("a",{attrs:{href:"http://www.beian.gov.cn/",target:"_blank"}},[e._v("粤ICP备18083394号")])])])},x=[],O=(n("b0c0"),n("9911"),n("96cf"),n("1da1")),$=(n("99af"),n("d3b7"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"modal-mask",on:{click:e.maskHandler}},[n("transition",{attrs:{"enter-active-class":"animated faster fadeInDown","leave-active-class":"animated faster fadeOutUp"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"show"}],staticClass:"modal",class:{focus:e.isFocus},on:{animationend:e.onAnimationEnd}},[n("div",{staticClass:"modal-header"},[n("span",{staticClass:"modal-header-title"},[e._v(e._s(e.title))]),n("a",{staticClass:"modal-header-close",attrs:{href:"javascript:;"},on:{click:e.close}},[e._v("×")])]),n("div",{staticClass:"modal-container"},[e._t("default"),e.showFooter?n("div",{staticClass:"modal-footer"},[e._t("footer")],2):e._e()],2)])])],1)}),I=[],M={name:"Modal",props:{title:String},data:function(){return{show:!1,isFocus:!0}},computed:{showFooter:function(){return this.$slots.footer&&this.$slots.footer.length}},methods:{maskHandler:function(e){this.isFocus=e.target!==this.$el},onAnimationEnd:function(){this.$emit("change",this.show)},open:function(){this.show=!0},close:function(){this.show=!1}}},j=M,H=(n("e9fd"),Object(p["a"])(j,$,I,!1,null,null,null)),A=H.exports;function E(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=document.createElement("div"),n=new r["a"]({render:function(t){return t(A,{ref:"modal",on:{change:function(e){e||n.$el.remove()}},props:{title:e.title}},[e.render(t)].concat((e.actions||[]).map((function(e){return t("button",{staticClass:"btn",on:{click:e.onClick},slot:"footer"},e.text)}))))},methods:{open:function(){return this.$refs.modal&&this.$refs.modal.open()},close:function(){return this.$refs.modal&&this.$refs.modal.close()}}});return document.body.appendChild(t),n.$mount(t),n}var S={alert:function(e,t){return new Promise((function(n){var r=E({title:t,render:function(t){return t("div",e)},actions:[{text:"确定",onClick:function(){r.close(),n()}}]});r.open()}))},create:E},F={name:"Footer",data:function(){return{year:(new Date).getFullYear()}},methods:{openWechatModal:function(){S.create({title:"我的微信",render:function(e){return e("img",{attrs:{src:"/image/wechat.jpg"},style:{width:"100%"}})}}).open()},openFLModal:function(){var e=this.$createElement,t=S.create({title:"申请友链",render:function(){return e("form",{class:"form"},[e("div",{class:"notice",style:"margin-bottom: 20px"},["提交后请将本站添加为贵站首页友链，机器人定时检查。"]),e("div",{class:"form-item"},[e("label",{class:"form-label"},["网站名称"]),e("input",{attrs:{name:"name",required:!0},class:"form-input"})]),e("div",{class:"form-item"},[e("label",{class:"form-label"},["网站链接"]),e("input",{attrs:{type:"url",name:"link",required:!0},class:"form-input"})])])},actions:[{text:"提交",onClick:function(){var e=Object(O["a"])(regeneratorRuntime.mark((function e(){var n,r,i,a,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n=document.querySelector(".form",t.$el),n.reportValidity()){e.next=3;break}return e.abrupt("return");case 3:return r=n.name.value,i=n.link.value,e.next=7,s.a.post("/api2020",{name:r,link:i});case 7:a=e.sent,o=a.data,S.alert("ok"===o.status?"提交成功":o.errmsg,"ok"===o.status?"提示":"提交失败").then((function(){return t.close()}));case 10:case"end":return e.stop()}}),e)})));function n(){return e.apply(this,arguments)}return n}()},{text:"取消",onClick:function(){return t.close()}}]});t.open()}}},L=F,W=(n("e4d0"),Object(p["a"])(L,_,x,!1,null,"4470f7d3",null)),P=W.exports,q={name:"App",components:{Board:v,Counter:y,Footer:P},data:function(){return{map:[],flag:[],help:[],reverse:[],errorIndex:-1,isWin:!1,time:0,level:0}},computed:{mapSize:function(){return Math.sqrt(this.map.length)},mapInited:function(){return this.map.filter((function(e){return!!e})).length>0},isOver:function(){return-1!==this.errorIndex||this.isWin},orderMineCount:function(){return this.gameConfig.mineNum-this.flag.length},faceClass:function(){return this.isWin?"face-win":this.isOver?"face-fail":"face"},gameConfig:function(){var e,t,n;switch(this.level){case 2:e=22,n=100,t="高级";break;case 1:e=16,n=40,t="中级";break;default:e=9,n=10,t="初级";break}return{size:e,mineNum:n,text:t}}},watch:{reverse:function(e){this.map.length-e.length===this.gameConfig.mineNum&&this.gameWin()},isOver:function(e){e&&this.timerId&&(clearInterval(this.timerId),this.timerId=null)}},mounted:function(){this.restart()},destroyed:function(){clearInterval(this.timerId)},methods:{createMap:function(e,t,n){var r=this,i=new Array(e*e).fill(0),s=[];while(s.length<t){var a=Math.ceil(Math.random()*(i.length-1));s.includes(a)||a===n||(s.push(a),i[a]=-1)}this.map=i.map((function(t,n){return-1!==t?u(n,e,e).reduce((function(e,t){return-1===i[t]?e+1:e}),0):t})),this.reverseItem(n),this.time=1,this.timerId=setInterval((function(){r.time+=1}),1e3)},reverseItem:function(e){var t=this;if(!this.isOver&&!this.reverse.includes(e)&&!this.flag.includes(e)&&!this.help.includes(e))if(this.reverse.push(e),-1!==this.map[e]){if(0===this.map[e]){var n=this.mapSize,r=u(e,n,n);r.forEach((function(e){t.reverseItem(e)}))}this.reverse.forEach((function(e){f(t.flag,e),f(t.help,e)}))}else this.gameOver(e)},clickHandler:function(e){this.isOver||(this.mapInited?this.reverseItem(e):this.createMap(this.gameConfig.size,this.gameConfig.mineNum,e))},rightHandler:function(e){this.isOver||(this.flag.includes(e)?(f(this.flag,e),this.help.push(e)):this.help.includes(e)?f(this.help,e):this.orderMineCount>0&&this.flag.push(e))},nearsHandler:function(e){var t=this;if(!this.isOver&&this.mapInited){var n=Math.sqrt(this.map.length),r=u(e,n,n),i=r.reduce((function(e,n){return t.flag.includes(n)?e+1:e}),0);this.map[e]>0&&i===this.map[e]&&r.forEach(this.reverseItem)}},gameOver:function(e){this.errorIndex=e,this.reverse=Array(this.map.length).fill(0).map((function(e,t){return t}))},gameWin:function(){this.isWin=!0,this.$alert("游戏胜利！！！用时：".concat(this.time,"秒"),"提示")},restart:function(){clearInterval(this.timerId),this.flag=[],this.help=[],this.reverse=[],this.errorIndex=-1,this.isWin=!1,this.time=0,this.map=Array(this.gameConfig.size*this.gameConfig.size)},switchLevel:function(){var e=this.level+1;e>2&&(e=0),this.level=e,this.restart()}},filters:{time:function(e){return e%1e3}}},N=q,z=(n("2522"),Object(p["a"])(N,a,o,!1,null,"d457f8e8",null)),D=z.exports;n("3868"),n("90b6");r["a"].prototype.$http=s.a,r["a"].prototype.$alert=S.alert,new r["a"]({render:function(e){return e(D)}}).$mount("#app"),window.oncontextmenu=function(e){return e.preventDefault()}},"5be2":function(e,t,n){},e1c1:function(e,t,n){},e4d0:function(e,t,n){"use strict";var r=n("5be2"),i=n.n(r);i.a},e9fd:function(e,t,n){"use strict";var r=n("e1c1"),i=n.n(r);i.a},ee8a:function(e,t,n){},fd84:function(e,t,n){"use strict";var r=n("3bf4"),i=n.n(r);i.a}});
//# sourceMappingURL=app.ab195c1b.js.map