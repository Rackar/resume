(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{201:function(e,t,l){var content=l(224);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,l(21).default)("4913e931",content,!0,{sourceMap:!1})},223:function(e,t,l){"use strict";var r=l(201);l.n(r).a},224:function(e,t,l){(t=l(20)(!1)).push([e.i,'.demo-carousel[data-v-0aa514e4]{text-align:center;color:#fff;font-size:20px;background:#fff}.cycle-gallery[data-v-0aa514e4]{position:relative;text-align:center;padding:40px 200px 33px;margin:0 0 60px;line-height:1.6}.cycle-gallery p[data-v-0aa514e4]{color:#515a6e}.cycle-gallery .img-box[data-v-0aa514e4]{display:block;line-height:1.5;padding:0 0 40px}.cycle-gallery .img-box .img-holder[data-v-0aa514e4]{display:inline-block;vertical-align:middle;margin:0 22px 0 0;overflow:hidden}.cycle-gallery .img-box .img-holder img[data-v-0aa514e4]{width:100px;height:100px;border-radius:50%}.cycle-gallery .img-box .text-holder[data-v-0aa514e4]{display:inline-block;vertical-align:middle;text-align:left}.cycle-gallery .img-box h3[data-v-0aa514e4]{margin:0;line-height:1.33333;color:#635c73}.cycle-gallery .img-box a[data-v-0aa514e4]{font-weight:700}.cycle-gallery[data-v-0aa514e4]:after{content:"";position:absolute;bottom:0;left:180px;right:180px;height:1px;background:#f4f4f4}.cycle-gallery .date[data-v-0aa514e4]{display:block;font-style:normal;line-height:1.5;font-weight:400;color:#848e97}',""]),e.exports=t},236:function(e,t,l){"use strict";l.r(t);l(29);var r=l(4),o=l(39),n=l.n(o),c={name:"Projects",data:function(){return{projectData:[]}},mounted:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.a.get("https://www.jxtxzzw.com/resume/data/static/projectInfo.json").then((function(t){e.projectData=t.data}));case 2:case"end":return t.stop()}}),t)})))()}},d=(l(223),l(19)),component=Object(d.a)(c,(function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("Carousel",{attrs:{autoplay:"",loop:""}},e._l(e.projectData,(function(t){return l("CarouselItem",{key:t.id},[l("div",{staticClass:"demo-carousel"},[l("div",{staticClass:"cycle-gallery"},[l("div",{staticClass:"img-box"},[l("div",{staticClass:"img-holder"},[l("img",{attrs:{src:t.logo}})]),l("div",{staticClass:"text-holder"},[l("h3",[e._v(e._s(t.title))]),e._l(t.href,(function(hr){return l("a",{key:hr.id,attrs:{href:hr.link}},[e._v(e._s(hr.prompt))])}))],2)]),l("p",[e._v(e._s(t.description))]),l("em",{staticClass:"date"},[e._v("最后更新 "+e._s(t.date))])])])])})),1)}),[],!1,null,"0aa514e4",null);t.default=component.exports}}]);