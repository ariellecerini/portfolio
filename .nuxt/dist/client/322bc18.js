(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{376:function(t,e,o){var content=o(410);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(33).default)("c792d41c",content,!0,{sourceMap:!1})},409:function(t,e,o){"use strict";o(376)},410:function(t,e,o){var c=o(32)((function(i){return i[1]}));c.push([t.i,".full-width-background[data-v-45ede120]{margin:auto}.not-full-width[data-v-45ede120]{margin:auto;max-width:1300px}.phoneHolder iframe[data-v-45ede120]{height:650px;margin:auto}.design-system iframe[data-v-45ede120]{height:650px;width:100%}.card-mockup img[data-v-45ede120]{box-shadow:0 15px 35px rgba(50,50,93,.1),0 5px 15px rgba(0,0,0,.07)}.design-system[data-v-45ede120]{margin-bottom:24px}.design-system[data-v-45ede120],.phoneHolder[data-v-45ede120]{background:#f4f4f4;text-align:center}",""]),c.locals={},t.exports=c},439:function(t,e,o){"use strict";o.r(e);o(35),o(51);var c=o(12),r=(o(68),o(17),o(36),o(34),o(322)),n=o(323),l=o(324),d=o(329),m=o(325),f=o(326),v=o(327),y=o(330),_=o(314),h={layout:"core-layout",name:"communications-design",components:{ProjectType:r.default,Buttons:n.default,ProjectDescription:l.default,ProjectDetails:d.default,ProjectSubtitle:f.default,ProjectTitle:m.default,ProjectTimeframe:v.default,ProjectButton:y.default,ButtonLink:_.default},asyncData:function(t){return Object(c.a)(regeneratorRuntime.mark((function e(){var c,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=t.params,e.prev=1,e.next=4,o(328)("./".concat(c.slug,".md"));case 4:return r=e.sent,e.abrupt("return",{post:r});case 8:return e.prev=8,e.t0=e.catch(1),e.abrupt("return",!1);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})))()},computed:{cModules:function(){return this.post.attributes.cModules},tags:function(){return this.post.attributes.media?this.post.attributes.media.split("|"):[]}}},x=(o(409),o(13)),component=Object(x.a)(h,(function(){var t=this,e=t._self._c;return e("div",{staticStyle:{width:"100%"}},[e("section",{staticClass:"row not-full-width"},[e("div",{staticClass:"col-xs-12 col-sm-12 col-md-8 col-lg-8"},[e("project-title",{attrs:{title:"".concat(t.post.attributes.title)}}),t._v(" "),e("project-subtitle",{attrs:{subtitle:"".concat(t.post.attributes.client)}}),t._v(" "),e("div",{staticClass:"row col-no-gutter margin-top-base"},[e("div",{staticClass:"col-xs-6 col-sm-6 col-md-6 col-lg-6 col-no-gutter"},[e("project-timeframe",{attrs:{timeframeStart:"".concat(t.post.attributes.dateStart),timeframeEnd:"".concat(t.post.attributes.dateEnd)}})],1),t._v(" "),e("div",{staticClass:"col-xs-6 col-sm-6 col-md-6 col-lg-6 col-no-gutter"},[e("NuxtLink",{attrs:{to:"/portfolio/communications-design"}},[e("project-type",{attrs:{text:"".concat(t.post.attributes.category)}})],1)],1)])],1),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-xs-12 col-s-12 col-md-6 col-lg-6 col-no-gutter"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-xs-12 col-s-12 col-md-6 col-lg-6"},[e("project-details",{attrs:{title:"Role",details:"".concat(t.post.attributes.role)}})],1),t._v(" "),e("div",{staticClass:"col-xs-12 col-s-12 col-md-6 col-lg-6"},[e("project-details",{attrs:{title:"Tools & Technology",details:"".concat(t.post.attributes.tools)}})],1)])]),t._v(" "),e("div",{staticClass:"col-xs-12 col-s-12 col-md-6 col-lg-6"},[e("project-description",{attrs:{description:"".concat(t.post.attributes.description)}})],1)])]),t._v(" "),e("section",{staticClass:"section-primary-05 full-width-background",staticStyle:{"padding-top":"48px",background:"url('../../section-primary-05.svg')","background-position":"0 0","background-size":"40% auto","background-repeat":"no-repeat"}},[e("div",{staticClass:"not-full-width row"},[e("div",{staticClass:"container page-content"},[e("img",{attrs:{src:t.post.attributes.featuredImage}})]),t._v(" "),t._l(t.cModules,(function(o){return e("div",{key:o.slug,staticClass:"container page-content",class:"".concat(o.class),style:"".concat(o.style),attrs:{cModule:o}},[e("h3",[t._v(" "+t._s(o.header)+" ")]),t._v(" "),"image"=="".concat(o.item)?e("div",[e("img",{staticStyle:{width:"100%"},attrs:{src:"".concat(o.image)}})]):t._e(),t._v(" "),"text"=="".concat(o.item)?e("div",{staticStyle:{"margin-top":"auto","margin-bottom":"auto"}},t._l(o.inner,(function(content){return e("div",{key:content.slug,attrs:{content:content}},[e("p",{style:content.style},[t._v(t._s(content.text))])])})),0):t._e(),t._v(" "),"button"=="".concat(o.item)?e("div",t._l(o.inner,(function(content){return e("div",{key:content.slug,staticStyle:{width:"100%",padding:"0"},attrs:{content:content}},[e("button-link",{attrs:{href:"".concat(content.src),text:"".concat(content.text)}})],1)})),0):t._e(),t._v(" "),"iframe"=="".concat(o.item)?e("div",{attrs:{SameSite:"Strict"}},t._l(o.inner,(function(content){return e("div",{key:content.slug,class:o.class,staticStyle:{margin:"auto",width:"100%"},attrs:{content:content}},[e("iframe",{staticStyle:{"padding-top":"0"},style:content.style,attrs:{src:content,frameborder:"0",allowfullscreen:""}})])})),0):t._e(),t._v(" "),"pdf-grid"=="".concat(o.item)?e("div",t._l(o.inner.contents,(function(content){return e("div",{key:content.slug,attrs:{content:content}},[e("div",{staticClass:"row"},t._l(content.images,(function(image){return e("div",{key:image.slug,class:content.col,attrs:{image:image}},[e("a",{attrs:{href:image}},[e("embed",{staticClass:"document-pdf",staticStyle:{"padding-top":"0","padding-bottom":"0"},attrs:{src:image,type:"application/pdf"}})])])})),0)])})),0):t._e()])}))],2)])])}),[],!1,null,"45ede120",null);e.default=component.exports}}]);