(this["webpackJsonp@js-widgets/widget-registry-boilerplate"]=this["webpackJsonp@js-widgets/widget-registry-boilerplate"]||[]).push([[8],{132:function(e,t,s){"use strict";s.r(t);var i=s(41),c=s(3),n=s(47),a=s(59),r=s(0),d=s(53),o=s(137),l=s(119),j=s(116),b=s(117),h=s(138),g=s(134),p=s(123),m=s(135),x=s(126),u=s(127),O=s(118),w=s(46),y=s(45),f=function(e){var t="render"+e.shortcode.split("-").map((function(e){return"".concat(e[0].toUpperCase()).concat(e.substr(1))})).join(""),s=e.version.split(".")[0];return'\n<html>\n    \x3c!-- ... --\x3e\n  <body>\n    \x3c!-- ... --\x3e\n    <div id="widget-id"></div>\n    \x3c!-- ... --\x3e\n    <script src="http://s3.us.cloud-object-storage.appdomain.cloud/widget-registry/'.concat(e.shortcode,"/").concat(s,'/js/main.js" defer><\/script>\n    <script src="http://s3.us.cloud-object-storage.appdomain.cloud/widget-registry/loader.js" defer><\/script>\n    <script defer>\n      document.loadWidget({\n        instanceId: "widget-id",\n        language: "",\n        onRenderFinish: domElement => {},\n        origin: "",\n        renderFunctionName: "').concat(t,'",\n      });\n    <\/script>\n  </body>\n</html>\n')},v=s(121),N=s(106),k=s(125),_=s(122),S=s(115),T=s(114),C=s(128),P=function(e,t){var s=e.shortcode.replace(/^([a-z])|-([a-z])/g,(function(e){return e.toUpperCase()})).replace(/-/g,""),i="render".concat(s),c=window[i],n=document.getElementById(t);c&&n&&!n.getAttribute("rendered")&&c(t,"","",(function(e){e.setAttribute("rendered",!0)}))},U=s(139),E=function(e){var t=e.widget,s=e.doLoad,n=e.moreProps,d=Object(r.useState)(!1),o=Object(a.a)(d,2),l=o[0],j=o[1],b="widget-id--".concat(t.shortcode,"--").concat(JSON.stringify(n).split("").reduce((function(e,t){return e+t.charCodeAt(0)}),0)),h=Object(c.jsx)("div",Object(i.a)(Object(i.a)({id:b},n),{},{children:Object(c.jsx)(U.a,{})}));return Object(r.useEffect)((function(){l||function(e){var t=e.externalPeerDependencies||{},s=Object.keys(t);return s.length?Promise.all(s.map((function(e){return new Promise((function(s,i){var c="widget-type-runtime-dep--".concat(e);if(document.getElementById(c))return s(e);var n=document.createElement("script");n.id=c,n.src=t[e].src,n.crossorigin="anonymous",n.async=!1,n.onload=s,n.onerror=i,document.body.appendChild(n)}))}))):Promise.resolve([])}(t).then((function(){return j(!0)}))})),s?(function(e,t){var s="widget-type-".concat(e.shortcode,"-runtime-code");if(document.getElementById(s))return Promise.resolve().then((function(){return P(e,t)}));var i=[new Promise((function(t,i){var c=document.createElement("script");c.id=s,c.src="".concat(e.directoryUrl,"/js/main.js"),c.crossorigin="anonymous",c.async=!0,c.onload=t,c.onerror=i,document.body.appendChild(c)}))];e.files.includes("css/main.css")&&i.push(new Promise((function(t,s){var i=document.createElement("link");i.crossOrigin="anonymous",i.type="text/css",i.media="all",i.rel="stylesheet",i.href="".concat(e.directoryUrl,"/css/main.css"),i.onload=t,i.onerror=s,document.head.appendChild(i)}))),Promise.all(i).then((function(){return P(e,t)}))}(t,b),h):h},I=function(e){var t=e.match.params.shortCode,s=d.find((function(e){return e.shortcode===t})),P={role:"presentation",tabIndex:0},U=Object(r.useState)(!1),I=Object(a.a)(U,2),W=I[0],A=I[1],D=function(e){return e.settingsSchema&&e.settingsSchema.properties.fields&&Object.keys(e.settingsSchema.properties.fields.properties).length?Object.keys(e.settingsSchema.properties.fields.properties).reduce((function(t,s){var i=e.settingsSchema.properties.fields.properties[s],c=Math.floor(Math.random()*i.examples.length),a=i.examples[c];return Object.assign(t,Object(n.a)({},s,a))}),{}):[]}(s),L=Object.keys(D).reduce((function(e,t){return e["data-".concat(t)]=D[t],e}),{});return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(w.a,{}),Object(c.jsxs)("div",{className:"bx--grid bx--grid--full-width landing-page widget-type",children:[Object(c.jsxs)(o.a,Object(i.a)(Object(i.a)({className:"widget-type--tabs"},{role:"presentation",tabIndex:0}),{},{children:[Object(c.jsxs)(l.a,Object(i.a)(Object(i.a)({},P),{},{id:"".concat(s.shortcode,"--tab-1"),label:"Information",children:[Object(c.jsx)("div",{className:"bx--row bx--row--r1",children:Object(c.jsxs)("div",{className:"bx--col-lg-16",children:[Object(c.jsxs)(j.a,{noTrailingSlash:!0,children:[Object(c.jsx)(b.a,{href:"/",children:"Home"}),Object(c.jsx)(b.a,{href:"/widget-types",children:"Widget types"}),Object(c.jsx)(b.a,{isCurrentPage:!0,href:"/",children:s.title})]}),Object(c.jsxs)("div",{className:"widget-type__heading--wrapper",children:[Object(c.jsxs)("div",{className:"widget-type__heading",children:[Object(c.jsx)("div",{className:"widget-type__heading--icon",children:Object(c.jsx)(v.a,{})}),Object(c.jsx)("h1",{className:"widget-type__heading--text",children:s.title})]}),s.repositoryUrl?Object(c.jsx)("div",{className:"widget-type__heading--repo-link",children:Object(c.jsx)(h.a,{href:s.repositoryUrl,renderIcon:N.a,kind:"tertiary",children:"Source code"})}):Object(c.jsx)(c.Fragment,{})]})]})}),Object(c.jsx)("div",{className:"bx--row bx--row--r2",children:Object(c.jsx)("div",{className:"bx--col-lg-8",children:Object(c.jsxs)("p",{className:"widget-type--notes",children:["All the information contained in this page has been extracted from the widget registry. Some info is generated by the compilation process, while some other is provided by the widget developer in the"," ",Object(c.jsx)(g.a,{type:"inline",children:"widget.json"})," file."]})})}),Object(c.jsxs)("div",{className:"bx--row bx--row--r3",children:[Object(c.jsxs)("div",{className:"bx--col-lg-8",children:[Object(c.jsx)(p.a,{children:Object(c.jsx)(m.a,{triggerText:"Thumbnail",children:"Thumbnail image as stored in the widget type code base. Check the \u201cLive preview\u201d tab for an interactive demo."})}),s.files.find((function(e){return"thumbnail.svg"===e}))?Object(c.jsx)("div",{children:Object(c.jsx)("img",{src:"".concat(s.directoryUrl,"/thumbnail.svg"),alt:"Widget thumbnail"})}):Object(c.jsx)("div",{children:Object(c.jsx)(k.a,{})})]}),Object(c.jsxs)("div",{className:"bx--col-lg-4",children:[Object(c.jsx)(p.a,{children:"Version"}),Object(c.jsxs)("div",{children:[s.status?Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(g.a,{type:"inline",className:"status--".concat(s.status),children:s.status})," "]}):Object(c.jsx)(c.Fragment,{}),Object(c.jsx)("code",{className:"widget-type--version",children:s.version})]})]}),Object(c.jsxs)("div",{className:"bx--col-lg-4",children:[Object(c.jsx)(p.a,{children:"Date"}),Object(c.jsxs)(x.a,{children:[Object(c.jsxs)(u.a,{children:["Created on"," ",s.createdAt?new Date(s.createdAt).toDateString():"Unknown"]}),Object(c.jsxs)(u.a,{children:["Updated on"," ",s.updatedAt?new Date(s.updatedAt).toDateString():"Unknown"]})]})]})]}),Object(c.jsxs)("article",{className:"bx--row bx--row--r4",children:[Object(c.jsxs)("section",{className:"bx--col-lg-8 bx--col-md-8",children:[Object(c.jsx)(p.a,{children:"Description"}),Object(c.jsx)("p",{className:"widget-type--description",children:s.description})]}),Object(c.jsxs)("aside",{className:"bx--col-lg-4 bx--col-md-4 bx--col-sm-4",children:[Object(c.jsxs)("div",{children:[Object(c.jsx)(p.a,{children:Object(c.jsx)(m.a,{triggerText:"Files",children:"Technical information about the compiled assets of the widget."})}),Object(c.jsx)(x.a,{children:s.files.map((function(e,t){return Object(c.jsx)(u.a,{children:Object(c.jsx)(g.a,{type:"inline",children:e})},"key-".concat(t))}))})]}),Object(c.jsxs)("div",{children:[Object(c.jsx)(p.a,{className:"bx--label--inline--sm",children:Object(c.jsx)(m.a,{triggerText:"External dependencies",children:"This widget expects the following dependecies to exist in the page when being rendered."})}),Object(c.jsx)(x.a,{children:Object.keys(s.externalPeerDependencies||{}).map((function(e,t){return Object(c.jsx)(u.a,{children:Object(c.jsxs)(m.a,{triggerText:e,renderIcon:_.b,children:[Object(c.jsx)("p",{id:"tooltip-body",children:s.externalPeerDependencies[e].src}),Object(c.jsx)("div",{className:"bx--tooltip__footer",children:Object(c.jsx)(h.a,{href:s.externalPeerDependencies[e].src,size:"small",renderIcon:S.b,children:"Visit"})})]})},"key-".concat(t))}))})]})]}),Object(c.jsxs)("aside",{className:"bx--col-lg-4 bx--col-md-4 bx--col-sm-4",children:[Object(c.jsx)(p.a,{children:"Translations"}),Object(c.jsx)(x.a,{children:s.availableTranslations.map((function(e,t){return Object(c.jsx)(u.a,{children:Object(c.jsx)(g.a,{type:"inline",children:e})},"key-".concat(t))}))})]})]})]})),Object(c.jsxs)(l.a,Object(i.a)(Object(i.a)({},P),{},{id:"".concat(s.shortcode,"--tab-3"),label:"Code snippet",children:[Object(c.jsx)("div",{className:"bx--row bx--row--r1",children:Object(c.jsxs)("div",{className:"bx--col-lg-16",children:[Object(c.jsxs)(j.a,{noTrailingSlash:!0,children:[Object(c.jsx)(b.a,{href:"/",children:"Home"}),Object(c.jsx)(b.a,{href:"/widget-types",children:"Widget types"}),Object(c.jsx)(b.a,{isCurrentPage:!0,href:"/",children:s.title})]}),Object(c.jsxs)("div",{className:"widget-type__heading--wrapper",children:[Object(c.jsxs)("div",{className:"widget-type__heading",children:[Object(c.jsx)("div",{className:"widget-type__heading--icon",children:Object(c.jsx)(T.a,{})}),Object(c.jsx)("h1",{className:"widget-type__heading--text",children:s.title})]}),s.repositoryUrl?Object(c.jsx)("div",{className:"widget-type__heading--repo-link",children:Object(c.jsx)(h.a,{href:s.repositoryUrl,renderIcon:N.a,kind:"tertiary",children:"Source code"})}):Object(c.jsx)(c.Fragment,{})]})]})}),Object(c.jsxs)("div",{className:"bx--row bx--row--r2",children:[Object(c.jsx)("div",{className:"bx--col-lg-8",children:Object(c.jsxs)("p",{children:["Use the following snippet of code to inject this widget in an static HTML page. If you are looking for a more advanced integration, take a look at the"," ",Object(c.jsx)(O.a,{href:"https://drupal.org/project/widget_instance",children:"Drupal module"}),", and the ",Object(c.jsx)(O.a,{href:"https://www.youtube.com/watch?v=SdDEbP-vtZg",children:"demo video"}),"."]})}),Object(c.jsx)("div",{className:"bx--col-lg-16",children:Object(c.jsx)(g.a,{type:"multi",hideCopyButton:!0,children:f(s)})})]})]})),Object(c.jsxs)(l.a,Object(i.a)(Object(i.a)({},P),{},{id:"".concat(s.shortcode,"--tab-3"),label:"Live Preview",onClick:function(){return A(!0)},children:[Object(c.jsx)("div",{className:"bx--row bx--row--r1",children:Object(c.jsxs)("div",{className:"bx--col-lg-16",children:[Object(c.jsxs)(j.a,{noTrailingSlash:!0,children:[Object(c.jsx)(b.a,{href:"/",children:"Home"}),Object(c.jsx)(b.a,{href:"/widget-types",children:"Widget types"}),Object(c.jsx)(b.a,{isCurrentPage:!0,href:"/",children:s.title})]}),Object(c.jsxs)("div",{className:"widget-type__heading--wrapper",children:[Object(c.jsxs)("div",{className:"widget-type__heading",children:[Object(c.jsx)("div",{className:"widget-type__heading--icon",children:Object(c.jsx)(v.b,{})}),Object(c.jsx)("h1",{className:"widget-type__heading--text",children:s.title})]}),s.repositoryUrl?Object(c.jsx)("div",{className:"widget-type__heading--repo-link",children:Object(c.jsx)(h.a,{href:s.repositoryUrl,renderIcon:N.a,kind:"tertiary",children:"Source code"})}):Object(c.jsx)(c.Fragment,{})]})]})}),Object(c.jsxs)("div",{className:"bx--row bx--row--r2",children:[Object(c.jsx)("div",{className:"bx--col-lg-12 some-content",style:{display:"flex"},children:Object(c.jsx)(E,{widget:s,doLoad:W,moreProps:L})}),Object(c.jsxs)("div",{className:"bx--col-lg-4",children:[Object(c.jsx)("h3",{children:"Widget settings"}),Object(c.jsxs)("div",{className:"widget-type--settings-warning",children:[Object(c.jsx)(C.a,{style:{marginRight:"5px"}}),Object(c.jsx)("div",{children:"Some widget types require settings at the time of embedding the widget. Here are some example values."})]}),Object(c.jsx)(x.a,{className:"widget-type--settings-values",children:Object.keys(D).map((function(e){var t=s.settingsSchema.properties.fields.properties[e];return Object(c.jsxs)(u.a,{children:[Object(c.jsx)(p.a,{children:Object(c.jsx)(m.a,{triggerText:"".concat(t.title," (").concat(t.type,")"),children:t.description})}),Object(c.jsx)("div",{children:D[e]})]},e)}))})]})]})]}))]})),Object(c.jsx)(y.a,{})]})]})};t.default=I},45:function(e,t,s){"use strict";var i=s(3);s(0);var c=function(e){var t=e.className,s=e.children,c=e.heading;return Object(i.jsxs)("section",{className:"bx--row ".concat(t," info-section"),children:[Object(i.jsx)("div",{className:"bx--col-md-8 bx--col-lg-4 bx--col-xlg-3",children:Object(i.jsx)("h3",{className:"info-section__heading",children:c})}),s]})},n=function(e){var t=function(e){var t=e.split(" "),s=t.pop();return[t.join(" "),s]}(e.heading);return Object(i.jsxs)("article",{className:"info-card bx--col-md-4 bx--col-lg-4 bx--col-xlg-3 bx--offset-xlg-1",children:[Object(i.jsxs)("h4",{className:"info-card__heading",children:["".concat(t[0]," "),Object(i.jsx)("strong",{children:t[1]})]}),Object(i.jsx)("p",{className:"info-card__body",children:e.body}),e.icon]})},a=s(114),r=s(115),d=s(106),o=function(){return Object(i.jsxs)(c,{heading:"The Principles",className:"landing-page__r3",children:[Object(i.jsx)(n,{heading:"Widgets are Configurable",body:'Build once and embed many times. Configure your widgets when embedding to leverage the same widget in multiple situations. "Tweak the widget knobs and stamp".',icon:Object(i.jsx)(a.d,{})}),Object(i.jsx)(n,{heading:"Widgets are Modular",body:"Widgets are designed to work seamlessly with each other in any digital experience. Use them in a website, or an application, as your digital building blocks.",icon:Object(i.jsx)(r.a,{})}),Object(i.jsx)(n,{heading:"Widgets are Consistent",body:"Weather your organization uses a CMS, static HTML, or any other tech widgets stay the same. Feel free to re-platform while keeping your widgets intact. Leverage the CMS integrations for a better editorial experience.",icon:Object(i.jsx)(d.c,{})})]})};t.a=o},46:function(e,t,s){"use strict";var i=s(3),c=(s(0),s(15)),n=s(101),a=s(102),r=s(103),d=s(104),o=s(107),l=s(108),j=s(109),b=s(110),h=s(111),g=s(112),p=s(113),m=function(){return Object(i.jsx)(n.a,{render:function(e){var t=e.isSideNavExpanded,s=e.onClickSideNavExpand;return Object(i.jsxs)(a.a,{"aria-label":"Widget Catalog",children:[Object(i.jsx)(r.a,{}),Object(i.jsx)(d.a,{"aria-label":"Open menu",onClick:s,isActive:t}),Object(i.jsx)(o.a,{element:c.b,to:"/",prefix:"JS Widgets",children:"Widget Catalog"}),Object(i.jsx)(l.a,{"aria-label":"Widget Catalog",children:Object(i.jsx)(j.a,{element:c.b,to:"/widget-types",children:"Widget Types"})}),Object(i.jsx)(b.a,{"aria-label":"Side navigation",expanded:t,isPersistent:!1,children:Object(i.jsx)(h.a,{children:Object(i.jsx)(g.a,{children:Object(i.jsx)(j.a,{element:c.b,to:"/widget-types",children:"Widget Types"})})})}),Object(i.jsx)(p.a,{})]})}})};t.a=m},53:function(e){e.exports=JSON.parse('[{"repositoryUrl":"https://github.com/js-widgets/example-widget","shortcode":"example-widget","version":"v1.3.0","directoryUrl":"https://js-widgets.github.io/widget-registry-boilerplate/widget-registry/sandbox/example-widget/v1","tarballUrl":"/tmp/widget-definitions-phgubi/example-widget.tar.gz","files":["css/main.css","css/main.css.map","js/main.js","js/main.js.LICENSE.txt","js/main.js.map","thumbnail.svg"],"updatedAt":"2021-01-04T14:12:16.929Z","createdAt":"2021-01-04T14:12:16.929Z","availableTranslations":["ar","de","en","es","esla","fr","it","ja","ko","pl","pt","ru","tr","zh-cn","zh-tw"],"description":"This example contains documentation and example code for creating widgets using React.","settingsSchema":{"type":"object","additionalProperties":false,"properties":{"fields":{"type":"object","properties":{"button-text":{"type":"string","title":"Button text","description":"Some random string to be displayed when the widget is rendered.","examples":["I am a button","Please, click me","CLICK"]}}}}},"externalPeerDependencies":{"react":{"src":"https://unpkg.com/react@^17/umd/react.production.min.js"},"react-dom":{"src":"https://unpkg.com/react-dom@^17/umd/react-dom.production.min.js"},"react-intl":{"src":"https://unpkg.com/react-intl-bundle@^1/dist/react-intl.production.min.js"}},"title":"Example Widget","status":"stable","assetManifest":{"files":{"main.css":"https://js-widgets.github.io/widget-registry-boilerplate/widget-registry/sandbox/example-widget/v1/css/main.css","main.js":"https://js-widgets.github.io/widget-registry-boilerplate/widget-registry/sandbox/example-widget/v1/js/main.js"},"entrypoints":["static/css/main.91ee73ca.css","css/main.css","js/main.js"]}},{"repositoryUrl":"https://github.com/js-widgets/example-emojis","shortcode":"example-emojis","version":"v1.0.3","directoryUrl":"https://js-widgets.github.io/widget-registry-boilerplate/widget-registry/sandbox/example-emojis/v1","tarballUrl":"/tmp/widget-definitions-gjEJ26/example-emojis.tar.gz","files":["css/main.css","css/main.css.map","js/main.js","js/main.js.LICENSE.txt","js/main.js.map","thumbnail.svg"],"updatedAt":"2021-01-25T21:27:38.787Z","createdAt":"2021-01-25T21:27:38.787Z","availableTranslations":["en"],"description":"This example contains emojis.","externalPeerDependencies":{"react":{"src":"https://unpkg.com/react@^17/umd/react.production.min.js"},"react-dom":{"src":"https://unpkg.com/react-dom@^17/umd/react-dom.production.min.js"}},"title":"Example Emojis","status":"wip","assetManifest":{"files":{"main.css":"https://js-widgets.github.io/widget-registry-boilerplate/widget-registry/sandbox/example-emojis/v1/css/main.css","main.js":"https://js-widgets.github.io/widget-registry-boilerplate/widget-registry/sandbox/example-emojis/v1/js/main.js"},"entrypoints":["static/css/main.f58d7633.css","css/main.css","js/main.js"]}},{"repositoryUrl":"https://github.com/js-widgets/example-calculator","shortcode":"example-calculator","version":"v1.0.5","directoryUrl":"https://js-widgets.github.io/widget-registry-boilerplate/widget-registry/sandbox/example-calculator/v1","tarballUrl":"/tmp/widget-definitions-9zRcSp/example-calculator.tar.gz","files":["css/main.css","css/main.css.map","js/main.js","js/main.js.LICENSE.txt","js/main.js.map","thumbnail.svg"],"updatedAt":"2021-01-25T21:47:33.941Z","createdAt":"2021-01-25T21:47:33.941Z","availableTranslations":["en"],"description":"This example contains a calculator.","externalPeerDependencies":{"react":{"src":"https://unpkg.com/react@^17/umd/react.production.min.js"},"react-dom":{"src":"https://unpkg.com/react-dom@^17/umd/react-dom.production.min.js"}},"title":"Example Calculator","status":"wip","assetManifest":{"files":{"main.css":"https://js-widgets.github.io/widget-registry-boilerplate/widget-registry/sandbox/example-calculator/v1/css/main.css","main.js":"https://js-widgets.github.io/widget-registry-boilerplate/widget-registry/sandbox/example-calculator/v1/js/main.js"},"entrypoints":["static/css/main.5f7e2e23.css","css/main.css","js/main.js"]}}]')}}]);
//# sourceMappingURL=8.927ebba3.chunk.js.map