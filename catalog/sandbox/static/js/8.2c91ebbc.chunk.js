(this["webpackJsonp@js-widgets/widget-registry-boilerplate"]=this["webpackJsonp@js-widgets/widget-registry-boilerplate"]||[]).push([[8],{132:function(e,t,i){"use strict";i.r(t);var s=i(41),c=i(3),n=i(47),r=i(59),a=i(0),d=i(53),l=i(137),o=i(119),j=i(116),b=i(117),h=i(138),g=i(134),x=i(123),p=i(135),m=i(126),O=i(127),u=i(118),w=i(46),y=i(45),f=function(e){var t="render"+e.shortcode.split("-").map((function(e){return"".concat(e[0].toUpperCase()).concat(e.substr(1))})).join(""),i=e.version.split(".")[0];return'\n<html>\n    \x3c!-- ... --\x3e\n  <body>\n    \x3c!-- ... --\x3e\n    <div id="widget-id"></div>\n    \x3c!-- ... --\x3e\n    <script src="http://s3.us.cloud-object-storage.appdomain.cloud/widget-registry/'.concat(e.shortcode,"/").concat(i,'/js/main.js" defer><\/script>\n    <script src="http://s3.us.cloud-object-storage.appdomain.cloud/widget-registry/loader.js" defer><\/script>\n    <script defer>\n      document.loadWidget({\n        instanceId: "widget-id",\n        language: "",\n        onRenderFinish: domElement => {},\n        origin: "",\n        renderFunctionName: "').concat(t,'",\n      });\n    <\/script>\n  </body>\n</html>\n')},v=i(121),N=i(106),_=i(125),k=i(122),S=i(115),C=i(114),T=i(128),P=function(e,t){var i=e.shortcode.replace(/^([a-z])|-([a-z])/g,(function(e){return e.toUpperCase()})).replace(/-/g,""),s="render".concat(i),c=window[s],n=document.getElementById(t);c&&n&&!n.getAttribute("rendered")&&c(t,"","",(function(e){e.setAttribute("rendered",!0)}))},U=i(139),W=function(e){var t=e.widget,i=e.doLoad,n=e.moreProps,d=Object(a.useState)(!1),l=Object(r.a)(d,2),o=l[0],j=l[1],b="widget-id--".concat(t.shortcode,"--").concat(JSON.stringify(n).split("").reduce((function(e,t){return e+t.charCodeAt(0)}),0)),h=Object(c.jsx)("div",Object(s.a)(Object(s.a)({id:b},n),{},{children:Object(c.jsx)(U.a,{})}));return Object(a.useEffect)((function(){o||function(e){var t=e.externalPeerDependencies||{},i=Object.keys(t);return i.length?Promise.all(i.map((function(e){return new Promise((function(i,s){var c="widget-type-runtime-dep--".concat(e);if(document.getElementById(c))return i(e);var n=document.createElement("script");n.id=c,n.src=t[e].src,n.crossorigin="anonymous",n.async=!1,n.onload=i,n.onerror=s,document.body.appendChild(n)}))}))):Promise.resolve([])}(t).then((function(){return j(!0)}))})),i?(function(e,t){var i="widget-type-".concat(e.shortcode,"-runtime-code");document.getElementById(i)?Promise.resolve().then((function(){return P(e,t)})):new Promise((function(t,s){var c=document.createElement("script");c.id=i,c.src="".concat(e.directoryUrl,"/js/main.js"),c.crossorigin="anonymous",c.async=!0,c.onload=t,c.onerror=s,document.body.appendChild(c)})).then((function(){return P(e,t)}))}(t,b),h):h},I=function(e){var t=e.match.params.shortCode,i=d.find((function(e){return e.shortcode===t})),P={role:"presentation",tabIndex:0},U=Object(a.useState)(!1),I=Object(r.a)(U,2),E=I[0],D=I[1],A=function(e){return e.settingsSchema&&e.settingsSchema.properties.fields&&Object.keys(e.settingsSchema.properties.fields.properties).length?Object.keys(e.settingsSchema.properties.fields.properties).reduce((function(t,i){var s=e.settingsSchema.properties.fields.properties[i],c=Math.floor(Math.random()*s.examples.length),r=s.examples[c];return Object.assign(t,Object(n.a)({},i,r))}),{}):[]}(i),F=Object.keys(A).reduce((function(e,t){return e["data-".concat(t)]=A[t],e}),{});return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(w.a,{}),Object(c.jsxs)("div",{className:"bx--grid bx--grid--full-width landing-page widget-type",children:[Object(c.jsxs)(l.a,Object(s.a)(Object(s.a)({className:"widget-type--tabs"},{role:"presentation",tabIndex:0}),{},{children:[Object(c.jsxs)(o.a,Object(s.a)(Object(s.a)({},P),{},{id:"".concat(i.shortcode,"--tab-1"),label:"Information",children:[Object(c.jsx)("div",{className:"bx--row bx--row--r1",children:Object(c.jsxs)("div",{className:"bx--col-lg-16",children:[Object(c.jsxs)(j.a,{noTrailingSlash:!0,children:[Object(c.jsx)(b.a,{href:"/",children:"Home"}),Object(c.jsx)(b.a,{href:"/widget-types",children:"Widget types"}),Object(c.jsx)(b.a,{isCurrentPage:!0,href:"/",children:i.title})]}),Object(c.jsxs)("div",{className:"widget-type__heading--wrapper",children:[Object(c.jsxs)("div",{className:"widget-type__heading",children:[Object(c.jsx)("div",{className:"widget-type__heading--icon",children:Object(c.jsx)(v.a,{})}),Object(c.jsx)("h1",{className:"widget-type__heading--text",children:i.title})]}),i.repositoryUrl?Object(c.jsx)("div",{className:"widget-type__heading--repo-link",children:Object(c.jsx)(h.a,{href:i.repositoryUrl,renderIcon:N.a,kind:"tertiary",children:"Source code"})}):Object(c.jsx)(c.Fragment,{})]})]})}),Object(c.jsx)("div",{className:"bx--row bx--row--r2",children:Object(c.jsx)("div",{className:"bx--col-lg-8",children:Object(c.jsxs)("p",{className:"widget-type--notes",children:["All the information contained in this page has been extracted from the widget registry. Some info is generated by the compilation process, while some other is provided by the widget developer in the"," ",Object(c.jsx)(g.a,{type:"inline",children:"widget.json"})," file."]})})}),Object(c.jsxs)("div",{className:"bx--row bx--row--r3",children:[Object(c.jsxs)("div",{className:"bx--col-lg-8",children:[Object(c.jsx)(x.a,{children:Object(c.jsx)(p.a,{triggerText:"Thumbnail",children:"Thumbnail image as stored in the widget type code base. Check the \u201cLive preview\u201d tab for an interactive demo."})}),i.files.find((function(e){return"thumbnail.svg"===e}))?Object(c.jsx)("div",{children:Object(c.jsx)("img",{src:"".concat(i.directoryUrl,"/thumbnail.svg"),alt:"Widget thumbnail"})}):Object(c.jsx)("div",{children:Object(c.jsx)(_.a,{})})]}),Object(c.jsxs)("div",{className:"bx--col-lg-4",children:[Object(c.jsx)(x.a,{children:"Version"}),Object(c.jsxs)("div",{children:[i.status?Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(g.a,{type:"inline",className:"status--".concat(i.status),children:i.status})," "]}):Object(c.jsx)(c.Fragment,{}),Object(c.jsx)("code",{className:"widget-type--version",children:i.version})]})]}),Object(c.jsxs)("div",{className:"bx--col-lg-4",children:[Object(c.jsx)(x.a,{children:"Date"}),Object(c.jsxs)(m.a,{children:[Object(c.jsxs)(O.a,{children:["Created on"," ",i.createdAt?new Date(i.createdAt).toDateString():"Unknown"]}),Object(c.jsxs)(O.a,{children:["Updated on"," ",i.updatedAt?new Date(i.updatedAt).toDateString():"Unknown"]})]})]})]}),Object(c.jsxs)("article",{className:"bx--row bx--row--r4",children:[Object(c.jsxs)("section",{className:"bx--col-lg-8 bx--col-md-8",children:[Object(c.jsx)(x.a,{children:"Description"}),Object(c.jsx)("p",{className:"widget-type--description",children:i.description})]}),Object(c.jsxs)("aside",{className:"bx--col-lg-4 bx--col-md-4 bx--col-sm-4",children:[Object(c.jsxs)("div",{children:[Object(c.jsx)(x.a,{children:Object(c.jsx)(p.a,{triggerText:"Files",children:"Technical information about the compiled assets of the widget."})}),Object(c.jsx)(m.a,{children:i.files.map((function(e,t){return Object(c.jsx)(O.a,{children:Object(c.jsx)(g.a,{type:"inline",children:e})},"key-".concat(t))}))})]}),Object(c.jsxs)("div",{children:[Object(c.jsx)(x.a,{className:"bx--label--inline--sm",children:Object(c.jsx)(p.a,{triggerText:"External dependencies",children:"This widget expects the following dependecies to exist in the page when being rendered."})}),Object(c.jsx)(m.a,{children:Object.keys(i.externalPeerDependencies||{}).map((function(e,t){return Object(c.jsx)(O.a,{children:Object(c.jsxs)(p.a,{triggerText:e,renderIcon:k.b,children:[Object(c.jsx)("p",{id:"tooltip-body",children:i.externalPeerDependencies[e].src}),Object(c.jsx)("div",{className:"bx--tooltip__footer",children:Object(c.jsx)(h.a,{href:i.externalPeerDependencies[e].src,size:"small",renderIcon:S.b,children:"Visit"})})]})},"key-".concat(t))}))})]})]}),Object(c.jsxs)("aside",{className:"bx--col-lg-4 bx--col-md-4 bx--col-sm-4",children:[Object(c.jsx)(x.a,{children:"Translations"}),Object(c.jsx)(m.a,{children:i.availableTranslations.map((function(e,t){return Object(c.jsx)(O.a,{children:Object(c.jsx)(g.a,{type:"inline",children:e})},"key-".concat(t))}))})]})]})]})),Object(c.jsxs)(o.a,Object(s.a)(Object(s.a)({},P),{},{id:"".concat(i.shortcode,"--tab-3"),label:"Code snippet",children:[Object(c.jsx)("div",{className:"bx--row bx--row--r1",children:Object(c.jsxs)("div",{className:"bx--col-lg-16",children:[Object(c.jsxs)(j.a,{noTrailingSlash:!0,children:[Object(c.jsx)(b.a,{href:"/",children:"Home"}),Object(c.jsx)(b.a,{href:"/widget-types",children:"Widget types"}),Object(c.jsx)(b.a,{isCurrentPage:!0,href:"/",children:i.title})]}),Object(c.jsxs)("div",{className:"widget-type__heading--wrapper",children:[Object(c.jsxs)("div",{className:"widget-type__heading",children:[Object(c.jsx)("div",{className:"widget-type__heading--icon",children:Object(c.jsx)(C.a,{})}),Object(c.jsx)("h1",{className:"widget-type__heading--text",children:i.title})]}),i.repositoryUrl?Object(c.jsx)("div",{className:"widget-type__heading--repo-link",children:Object(c.jsx)(h.a,{href:i.repositoryUrl,renderIcon:N.a,kind:"tertiary",children:"Source code"})}):Object(c.jsx)(c.Fragment,{})]})]})}),Object(c.jsxs)("div",{className:"bx--row bx--row--r2",children:[Object(c.jsx)("div",{className:"bx--col-lg-8",children:Object(c.jsxs)("p",{children:["Use the following snippet of code to inject this widget in an static HTML page. If you are looking for a more advanced integration, take a look at the"," ",Object(c.jsx)(u.a,{href:"https://drupal.org/project/widget_instance",children:"Drupal module"}),", and the ",Object(c.jsx)(u.a,{href:"https://www.youtube.com/watch?v=SdDEbP-vtZg",children:"demo video"}),"."]})}),Object(c.jsx)("div",{className:"bx--col-lg-16",children:Object(c.jsx)(g.a,{type:"multi",hideCopyButton:!0,children:f(i)})})]})]})),Object(c.jsxs)(o.a,Object(s.a)(Object(s.a)({},P),{},{id:"".concat(i.shortcode,"--tab-3"),label:"Live Preview",onClick:function(){return D(!0)},children:[Object(c.jsx)("div",{className:"bx--row bx--row--r1",children:Object(c.jsxs)("div",{className:"bx--col-lg-16",children:[Object(c.jsxs)(j.a,{noTrailingSlash:!0,children:[Object(c.jsx)(b.a,{href:"/",children:"Home"}),Object(c.jsx)(b.a,{href:"/widget-types",children:"Widget types"}),Object(c.jsx)(b.a,{isCurrentPage:!0,href:"/",children:i.title})]}),Object(c.jsxs)("div",{className:"widget-type__heading--wrapper",children:[Object(c.jsxs)("div",{className:"widget-type__heading",children:[Object(c.jsx)("div",{className:"widget-type__heading--icon",children:Object(c.jsx)(v.b,{})}),Object(c.jsx)("h1",{className:"widget-type__heading--text",children:i.title})]}),i.repositoryUrl?Object(c.jsx)("div",{className:"widget-type__heading--repo-link",children:Object(c.jsx)(h.a,{href:i.repositoryUrl,renderIcon:N.a,kind:"tertiary",children:"Source code"})}):Object(c.jsx)(c.Fragment,{})]})]})}),Object(c.jsxs)("div",{className:"bx--row bx--row--r2",children:[Object(c.jsx)("div",{className:"bx--col-lg-12 some-content",style:{display:"flex"},children:Object(c.jsx)(W,{widget:i,doLoad:E,moreProps:F})}),Object(c.jsxs)("div",{className:"bx--col-lg-4",children:[Object(c.jsx)("h3",{children:"Widget settings"}),Object(c.jsxs)("div",{className:"widget-type--settings-warning",children:[Object(c.jsx)(T.a,{style:{marginRight:"5px"}}),Object(c.jsx)("div",{children:"Some widget types require settings at the time of embedding the widget. Here are some example values."})]}),Object(c.jsx)(m.a,{className:"widget-type--settings-values",children:Object.keys(A).map((function(e){var t=i.settingsSchema.properties.fields.properties[e];return Object(c.jsxs)(O.a,{children:[Object(c.jsx)(x.a,{children:Object(c.jsx)(p.a,{triggerText:"".concat(t.title," (").concat(t.type,")"),children:t.description})}),Object(c.jsx)("div",{children:A[e]})]},e)}))})]})]})]}))]})),Object(c.jsx)(y.a,{})]})]})};t.default=I},45:function(e,t,i){"use strict";var s=i(3);i(0);var c=function(e){var t=e.className,i=e.children,c=e.heading;return Object(s.jsxs)("section",{className:"bx--row ".concat(t," info-section"),children:[Object(s.jsx)("div",{className:"bx--col-md-8 bx--col-lg-4 bx--col-xlg-3",children:Object(s.jsx)("h3",{className:"info-section__heading",children:c})}),i]})},n=function(e){var t=function(e){var t=e.split(" "),i=t.pop();return[t.join(" "),i]}(e.heading);return Object(s.jsxs)("article",{className:"info-card bx--col-md-4 bx--col-lg-4 bx--col-xlg-3 bx--offset-xlg-1",children:[Object(s.jsxs)("h4",{className:"info-card__heading",children:["".concat(t[0]," "),Object(s.jsx)("strong",{children:t[1]})]}),Object(s.jsx)("p",{className:"info-card__body",children:e.body}),e.icon]})},r=i(114),a=i(115),d=i(106),l=function(){return Object(s.jsxs)(c,{heading:"The Principles",className:"landing-page__r3",children:[Object(s.jsx)(n,{heading:"Widgets are Configurable",body:'Build once and embed many times. Configure your widgets when embedding to leverage the same widget in multiple situations. "Tweak the widget knobs and stamp".',icon:Object(s.jsx)(r.d,{})}),Object(s.jsx)(n,{heading:"Widgets are Modular",body:"Widgets are designed to work seamlessly with each other in any digital experience. Use them in a website, or an application, as your digital building blocks.",icon:Object(s.jsx)(a.a,{})}),Object(s.jsx)(n,{heading:"Widgets are Consistent",body:"Weather your organization uses a CMS, static HTML, or any other tech widgets stay the same. Feel free to re-platform while keeping your widgets intact. Leverage the CMS integrations for a better editorial experience.",icon:Object(s.jsx)(d.c,{})})]})};t.a=l},46:function(e,t,i){"use strict";var s=i(3),c=(i(0),i(15)),n=i(101),r=i(102),a=i(103),d=i(104),l=i(107),o=i(108),j=i(109),b=i(110),h=i(111),g=i(112),x=i(113),p=function(){return Object(s.jsx)(n.a,{render:function(e){var t=e.isSideNavExpanded,i=e.onClickSideNavExpand;return Object(s.jsxs)(r.a,{"aria-label":"Widget Catalog",children:[Object(s.jsx)(a.a,{}),Object(s.jsx)(d.a,{"aria-label":"Open menu",onClick:i,isActive:t}),Object(s.jsx)(l.a,{element:c.b,to:"/",prefix:"JS Widgets",children:"Widget Catalog"}),Object(s.jsx)(o.a,{"aria-label":"Widget Catalog",children:Object(s.jsx)(j.a,{element:c.b,to:"/widget-types",children:"Widget Types"})}),Object(s.jsx)(b.a,{"aria-label":"Side navigation",expanded:t,isPersistent:!1,children:Object(s.jsx)(h.a,{children:Object(s.jsx)(g.a,{children:Object(s.jsx)(j.a,{element:c.b,to:"/widget-types",children:"Widget Types"})})})}),Object(s.jsx)(x.a,{})]})}})};t.a=p},53:function(e){e.exports=JSON.parse('[{"repositoryUrl":"https://github.com/js-widgets/example-widget","shortcode":"example-widget","version":"v1.3.0","directoryUrl":"https://js-widgets.github.io/widget-registry-boilerplate/widget-registry/sandbox/example-widget/v1","tarballUrl":"/tmp/widget-definitions-phgubi/example-widget.tar.gz","files":["css/main.css","css/main.css.map","js/main.js","js/main.js.LICENSE.txt","js/main.js.map","thumbnail.svg"],"updatedAt":"2021-01-04T14:12:16.929Z","createdAt":"2021-01-04T14:12:16.929Z","availableTranslations":["ar","de","en","es","esla","fr","it","ja","ko","pl","pt","ru","tr","zh-cn","zh-tw"],"description":"This example contains documentation and example code for creating widgets using React.","settingsSchema":{"type":"object","additionalProperties":false,"properties":{"fields":{"type":"object","properties":{"button-text":{"type":"string","title":"Button text","description":"Some random string to be displayed when the widget is rendered.","examples":["I am a button","Please, click me","CLICK"]}}}}},"externalPeerDependencies":{"react":{"src":"https://unpkg.com/react@^17/umd/react.production.min.js"},"react-dom":{"src":"https://unpkg.com/react-dom@^17/umd/react-dom.production.min.js"},"react-intl":{"src":"https://unpkg.com/react-intl-bundle@^1/dist/react-intl.production.min.js"}},"title":"Example Widget","status":"stable","assetManifest":{"files":{"main.css":"https://js-widgets.github.io/widget-registry-boilerplate/widget-registry/sandbox/example-widget/v1/css/main.css","main.js":"https://js-widgets.github.io/widget-registry-boilerplate/widget-registry/sandbox/example-widget/v1/js/main.js"},"entrypoints":["static/css/main.91ee73ca.css","css/main.css","js/main.js"]}}]')}}]);
//# sourceMappingURL=8.2c91ebbc.chunk.js.map