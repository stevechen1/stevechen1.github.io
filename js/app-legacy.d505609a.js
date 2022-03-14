(function(){"use strict";var t={3507:function(t,e,n){n(6992),n(8674),n(9601),n(7727);var i=n(9567),l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("h1",[t._v("todoList")]),n("MyHeader",{attrs:{addList:t.addList,lists:t.lists}}),n("MyList",{attrs:{checkList:t.checkList,lists:t.lists}}),n("MyFooter",{attrs:{checkAll:t.checkAll,lists:t.lists,clearAll:t.clearAll}})],1)},s=[],r=(n(1539),n(4747),n(6699),n(7327),n(8862),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"list-header"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],attrs:{type:"text",placeholder:"输入任务名，回车确认"},domProps:{value:t.title},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.add.apply(null,arguments)},input:function(e){e.target.composing||(t.title=e.target.value)}}})])}),o=[],c=(n(3210),n(562)),u={name:"MyHeader",props:["addList","lists"],data:function(){return{title:""}},methods:{add:function(){if(!this.title.trim())return alert("输入不能为空");var t={id:(0,c.x0)(),title:this.title,done:!1};this.addList(t),this.title=""}}},a=u,f=n(1001),d=(0,f.Z)(a,r,o,!1,null,"2fbba8a1",null),h=d.exports,p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"lis-footer"},[n("label",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.isAll,expression:"isAll"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.isAll)?t._i(t.isAll,null)>-1:t.isAll},on:{change:function(e){var n=t.isAll,i=e.target,l=!!i.checked;if(Array.isArray(n)){var s=null,r=t._i(n,s);i.checked?r<0&&(t.isAll=n.concat([s])):r>-1&&(t.isAll=n.slice(0,r).concat(n.slice(r+1)))}else t.isAll=l}}}),t._v("全选 "),n("span",[t._v("已选"+t._s(t.doneList)+"/"+t._s(t.total))]),n("button",{on:{click:t.clearAll}},[t._v("清除")])])])},m=[],v={name:"MyFooter",props:["clearAll","lists"],computed:{total:function(){return this.lists.length},doneList:function(){return this.lists.reduce((function(t,e){return t+(e.done?1:0)}),0)},isAll:{get:function(){return this.doneList===this.total&&this.total>0},set:function(t){this.$bus.$emit("checkAll",t)}}}},y=v,b=(0,f.Z)(y,p,m,!1,null,"7ad8f714",null),k=b.exports,A=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"list-main"},t._l(t.lists,(function(t,e){return n("MyItem",{key:t.id,attrs:{l:t}})})),1)},_=[],g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{on:{click:function(e){return t.handleCheck(t.l.id)}}},[n("label",[n("input",{attrs:{type:"checkbox"},domProps:{checked:t.l.done}}),n("span",[t._v(t._s(t.l.title))])]),n("button",{on:{click:t.handleDelete}},[t._v("删除")])])},L=[],$={name:"MyItem",props:["l","deleteList"],methods:{handleCheck:function(){this.l.done=!this.l.done},handleDelete:function(t){t.stopPropagation(),this.$bus.$emit("deleteList",this.l.id)}}},x=$,O=(0,f.Z)(x,g,L,!1,null,"2e149b92",null),w=O.exports,M={name:"MyList",components:{MyItem:w},props:["lists"]},E=M,C=(0,f.Z)(E,A,_,!1,null,"1c41552b",null),Z=C.exports,j={name:"App",components:{MyHeader:h,MyFooter:k,MyList:Z},data:function(){return{lists:JSON.parse(localStorage.getItem("lists"))||[]}},methods:{addList:function(t){var e=[];this.lists.forEach((function(t){e.push(t.title)})),e.includes(t.title)?alert("".concat(t.title,"已存在")):this.lists.unshift(t)},checkList:function(){this.lists.forEach((function(t){t.done=!t.done}))},checkAll:function(t){this.lists.forEach((function(e){e.done=t}))},clearAll:function(){var t=this.lists.filter((function(t){return 1==t.done}));t.length?confirm("确定删除选中?")&&(this.lists=this.lists.filter((function(t){return 0==t.done}))):alert("未选中！！！")},deleteList:function(t){confirm("确定删除这一项？")&&(this.lists=this.lists.filter((function(e){return e.id!==t})))}},watch:{lists:{deep:!0,handler:function(t){localStorage.setItem("lists",JSON.stringify(t))}}},mounted:function(){this.$bus.$on("deleteList",this.deleteList),this.$bus.$on("checkAll",this.checkAll)},beforeDestroy:function(){this.$bus.$off("deleteList"),this.$bus.$off("checkAll")}},P=j,I=(0,f.Z)(P,l,s,!1,null,null,null),F=I.exports;i.Z.config.productionTip=!1,new i.Z({render:function(t){return t(F)},beforeCreate:function(){i.Z.prototype.$bus=this}}).$mount("#app")}},e={};function n(i){var l=e[i];if(void 0!==l)return l.exports;var s=e[i]={exports:{}};return t[i](s,s.exports,n),s.exports}n.m=t,function(){var t=[];n.O=function(e,i,l,s){if(!i){var r=1/0;for(a=0;a<t.length;a++){i=t[a][0],l=t[a][1],s=t[a][2];for(var o=!0,c=0;c<i.length;c++)(!1&s||r>=s)&&Object.keys(n.O).every((function(t){return n.O[t](i[c])}))?i.splice(c--,1):(o=!1,s<r&&(r=s));if(o){t.splice(a--,1);var u=l();void 0!==u&&(e=u)}}return e}s=s||0;for(var a=t.length;a>0&&t[a-1][2]>s;a--)t[a]=t[a-1];t[a]=[i,l,s]}}(),function(){n.d=function(t,e){for(var i in e)n.o(e,i)&&!n.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,i){var l,s,r=i[0],o=i[1],c=i[2],u=0;if(r.some((function(e){return 0!==t[e]}))){for(l in o)n.o(o,l)&&(n.m[l]=o[l]);if(c)var a=c(n)}for(e&&e(i);u<r.length;u++)s=r[u],n.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return n.O(a)},i=self["webpackChunkdemo"]=self["webpackChunkdemo"]||[];i.forEach(e.bind(null,0)),i.push=e.bind(null,i.push.bind(i))}();var i=n.O(void 0,[998],(function(){return n(3507)}));i=n.O(i)})();
//# sourceMappingURL=app-legacy.d505609a.js.map