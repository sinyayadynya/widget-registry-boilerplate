(this["webpackJsonp@js-widgets/widget-registry-boilerplate"]=this["webpackJsonp@js-widgets/widget-registry-boilerplate"]||[]).push([[9],{132:function(e,t,a){"use strict";a.r(t);var i=a(3),s=a(47),n=a(0),r=a.n(n),c=a(46),o=a(45),l=a(41),d=a(59),j=a(92),b=a(129),h=a(73),x=a(79),g=a(80),p=a(83),O=a(71),m=a(76),u=a(78),w=a(82),f=a(77),y=a(72),v=a(74),N=a(51),S=a(75),k=a(15),_=a(115),C=function(e){var t=e.rows,a=e.headers,s=e.descriptions,c=Object(n.useState)(t),o=Object(d.a)(c,2),C=o[0],W=o[1],T=Object(n.useState)(""),P=Object(d.a)(T,2),M=P[0],E=P[1],U=new j.a(t,{keys:["name"]});return Object(i.jsx)(b.a,{rows:M?C:t,headers:a,render:function(e){var t=e.rows,a=e.headers,n=e.getHeaderProps,c=e.getRowProps,o=e.getTableProps;return Object(i.jsxs)(h.a,{children:[Object(i.jsx)(x.a,{"aria-label":"data table toolbar",children:Object(i.jsx)(g.a,{children:Object(i.jsx)(p.a,{onChange:function(e){E(e.target.value),W(U.search(e.target.value).map((function(e){return e.item})))}})})}),Object(i.jsxs)(O.a,Object(l.a)(Object(l.a)({},o()),{},{children:[Object(i.jsx)(m.a,{children:Object(i.jsxs)(u.a,{children:[Object(i.jsx)(w.a,{}),a.map((function(e){return Object(i.jsx)(f.a,Object(l.a)(Object(l.a)({},n({header:e,isSortable:e.isSortable})),{},{children:e.header}),"header-".concat(e.key))}))]})}),Object(i.jsx)(y.a,{children:t.map((function(e){var t="".concat(c({row:e}).key);return Object(i.jsxs)(r.a.Fragment,{children:[Object(i.jsx)(v.a,Object(l.a)(Object(l.a)({},c({row:e})),{},{children:e.cells.map((function(e){return Object(i.jsx)(N.a,{className:"bx--table-cell__".concat(e.info.header),children:e.value},e.id)}))})),Object(i.jsxs)(S.a,{colSpan:a.length+1,children:[Object(i.jsx)("h6",{children:"Description"}),Object(i.jsx)("div",{children:s[t]}),Object(i.jsx)("div",{className:"bx--expandable-row--ctas",children:Object(i.jsxs)(k.b,{to:"/widget-type/".concat(t),className:"bx--btn bx--btn--tertiary",children:["More details ",Object(i.jsx)(_.b,{className:"bx--btn__icon"})]})})]})]},e.id)}))})]}))]})}})},W=a(128),T=a(123),P=a(118),M=a(125),E=a(126),U=a(133),J=a(130),L=a(53),z=a(116),F=a(117),H=function(){var e,t=L.reduce((function(e,t){var a=t.shortcode,i=t.description;return Object.assign(e,Object(s.a)({},a,i))}),{});return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(c.a,{}),Object(i.jsxs)("div",{className:"bx--grid bx--grid--full-width landing-page",children:[Object(i.jsx)("div",{className:"bx--row landing-page__banner",children:Object(i.jsxs)("div",{className:"bx--col-lg-16",children:[Object(i.jsxs)(z.a,{noTrailingSlash:!0,children:[Object(i.jsx)(F.a,{href:"/",children:"Home"}),Object(i.jsx)(F.a,{isCurrentPage:!0,href:"/",children:"Widget types"})]}),Object(i.jsx)("h1",{className:"landing-page__heading",children:"Widgets types"}),Object(i.jsx)("div",{children:"The collection of available widget types in the widget repository. Widget types in the repository are available in the CMS integrations without any additional effort."})]})}),Object(i.jsx)("div",{className:"bx--row",children:Object(i.jsx)("div",{className:"bx--col-lg-16",children:Object(i.jsx)(C,{variant:"dark",headers:[{key:"name",header:"Name",isSortable:!0},{key:"version",header:"Version",isSortable:!0},{key:"translations",header:"Translations",isSortable:!1},{key:"owner",header:"Owner",isSortable:!0},{key:"links",header:"Links",isSortable:!1},{key:"details",header:"",isSortable:!1}],rows:(e=L,e.map((function(e){return{id:e.shortcode,name:e.title,description:e.description,version:e.version,owner:e.owner?Object(i.jsxs)(P.a,{href:"mailto:".concat(e.owner.email),children:[Object(i.jsx)(W.a,{style:{verticalAlign:"middle"}})," ",e.owner.name]}):"",translations:Object(i.jsx)(M.a,{className:"bx--list__langcodes",children:e.availableTranslations.map((function(e){return Object(i.jsx)(E.a,{children:Object(i.jsx)(U.a,{type:"inline",children:e})},"item-".concat(e))}))}),links:Object(i.jsx)(J.a,{id:"default",label:"- Please select -",items:[{text:"Demo",id:"https://pages.".concat(e.repositoryUrl.substr(8))},{text:"Repository",id:e.repositoryUrl}],itemToString:function(e){return e?e.text:""},onChange:function(e){var t=e.selectedItem.id;window.location.href=t}}),details:Object(i.jsx)(k.b,{to:"/widget-type/".concat(e.shortcode),children:Object(i.jsx)(T.a,{})})}}))),descriptions:t})})}),Object(i.jsx)(o.a,{})]})]})};t.default=H},45:function(e,t,a){"use strict";var i=a(3);a(0);var s=function(e){var t=e.className,a=e.children,s=e.heading;return Object(i.jsxs)("section",{className:"bx--row ".concat(t," info-section"),children:[Object(i.jsx)("div",{className:"bx--col-md-8 bx--col-lg-4 bx--col-xlg-3",children:Object(i.jsx)("h3",{className:"info-section__heading",children:s})}),a]})},n=function(e){var t=function(e){var t=e.split(" "),a=t.pop();return[t.join(" "),a]}(e.heading);return Object(i.jsxs)("article",{className:"info-card bx--col-md-4 bx--col-lg-4 bx--col-xlg-3 bx--offset-xlg-1",children:[Object(i.jsxs)("h4",{className:"info-card__heading",children:["".concat(t[0]," "),Object(i.jsx)("strong",{children:t[1]})]}),Object(i.jsx)("p",{className:"info-card__body",children:e.body}),e.icon]})},r=a(114),c=a(115),o=a(106),l=function(){return Object(i.jsxs)(s,{heading:"The Principles",className:"landing-page__r3",children:[Object(i.jsx)(n,{heading:"Widgets are Configurable",body:'Build once and embed many times. Configure your widgets when embedding to leverage the same widget in multiple situations. "Tweak the widget knobs and stamp".',icon:Object(i.jsx)(r.d,{})}),Object(i.jsx)(n,{heading:"Widgets are Modular",body:"Widgets are designed to work seamlessly with each other in any digital experience. Use them in a website, or an application, as your digital building blocks.",icon:Object(i.jsx)(c.a,{})}),Object(i.jsx)(n,{heading:"Widgets are Consistent",body:"Weather your organization uses a CMS, static HTML, or any other tech widgets stay the same. Feel free to re-platform while keeping your widgets intact. Leverage the CMS integrations for a better editorial experience.",icon:Object(i.jsx)(o.c,{})})]})};t.a=l},46:function(e,t,a){"use strict";var i=a(3),s=(a(0),a(15)),n=a(101),r=a(102),c=a(103),o=a(104),l=a(107),d=a(108),j=a(109),b=a(110),h=a(111),x=a(112),g=a(113),p=function(){return Object(i.jsx)(n.a,{render:function(e){var t=e.isSideNavExpanded,a=e.onClickSideNavExpand;return Object(i.jsxs)(r.a,{"aria-label":"Widget Catalog",children:[Object(i.jsx)(c.a,{}),Object(i.jsx)(o.a,{"aria-label":"Open menu",onClick:a,isActive:t}),Object(i.jsx)(l.a,{element:s.b,to:"/",prefix:"JS Widgets",children:"Widget Catalog"}),Object(i.jsx)(d.a,{"aria-label":"Widget Catalog",children:Object(i.jsx)(j.a,{element:s.b,to:"/widget-types",children:"Widget Types"})}),Object(i.jsx)(b.a,{"aria-label":"Side navigation",expanded:t,isPersistent:!1,children:Object(i.jsx)(h.a,{children:Object(i.jsx)(x.a,{children:Object(i.jsx)(j.a,{element:s.b,to:"/widget-types",children:"Widget Types"})})})}),Object(i.jsx)(g.a,{})]})}})};t.a=p},53:function(e){e.exports=JSON.parse('[{"repositoryUrl":"https://github.com/js-widgets/example-widget","shortcode":"example-widget","version":"v1.1.0","directoryUrl":"https://js-widgets.github.io/widget-registry-boilerplate/widget-registry/production/example-widget/v1","files":["css/main.css","css/main.css.map","js/main.js","js/main.js.LICENSE.txt","js/main.js.map"],"availableTranslations":["ar","de","en","es","esla","fr","it","ja","ko","pl","pt","ru","tr","zh-cn","zh-tw"],"description":"This example contains documentation and example code for creating widgets using React.","settingsSchema":{"type":"object","additionalProperties":false,"properties":{"fields":{"type":"object","properties":{"button-text":{"type":"string","title":"Button text","description":"Some random string to be displayed when the widget is rendered.","examples":["foobar"]}}}}},"title":"Example Widget"}]')}}]);
//# sourceMappingURL=9.13e7afdc.chunk.js.map