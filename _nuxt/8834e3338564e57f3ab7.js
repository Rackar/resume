(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{233:function(t,e,n){"use strict";n.r(e);var o=n(59),r={name:"FootPrint",data:function(){return{map:"china_ch",BASE_URL:o.d}},computed:{URL:function(){return""===this.map?this.BASE_URL:this.BASE_URL+"/?map="+this.map}},mounted:function(){this.$Message.info({content:"人生就是一场旅途，足迹不可能踏遍整个世界，但是走过的每一个地方都值得记录！",duration:8,closable:!0})}},c=n(19),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Alert",[t._v("\n    当前正在查看的是\n    "),n("i-switch",{attrs:{size:"large","false-value":"","true-value":"china_ch"},model:{value:t.map,callback:function(e){t.map=e},expression:"map"}},[n("span",{attrs:{slot:"open"},slot:"open"},[t._v("中国")]),t._v(" "),n("span",{attrs:{slot:"close"},slot:"close"},[t._v("世界")])]),t._v("\n    地图，点击开关可切换。鼠标滚轮可以放大/缩小地图。鼠标悬浮在地点上可以看到地点名称。\n  ")],1),t._v(" "),n("iframe",{staticStyle:{"max-width":"100%"},attrs:{frameborder:"no",border:"0",marginwidth:"0",marginheight:"10",width:"100%",height:"750px",src:t.URL}})],1)}),[],!1,null,"734b5164",null);e.default=component.exports}}]);