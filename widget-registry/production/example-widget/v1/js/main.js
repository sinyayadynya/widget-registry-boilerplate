/*! For license information please see main.js.LICENSE.txt */
!function(e){var t={};function r(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="https://js-widgets.github.io/widget-registry-boilerplate/widget-registry/production/example-widget/v1/",r(r.s=22)}([function(e,t,r){"use strict";e.exports=r(19)},function(e,t){e.exports=ReactIntl},function(e,t){e.exports=React},function(e,t){e.exports=ReactDOM},function(e){e.exports=JSON.parse('{"widget.welcome-msg":"\u0623\u0647\u0644\u0627 \u0628\u0643!","widget.welcome-paragraph":"\u0647\u0630\u0627 \u0647\u0648 \u0642\u0627\u0644\u0628 \u0644\u0625\u0646\u0634\u0627\u0621 \u0627\u0644\u062d\u0627\u062c\u064a\u0627\u062a."}')},function(e){e.exports=JSON.parse('{"widget.welcome-msg":"Herzlich willkommen!","widget.welcome-paragraph":"Dies ist eine Vorlage zum Erstellen von Widgets."}')},function(e){e.exports=JSON.parse('{"widget.welcome-msg":"Welcome!","widget.welcome-paragraph":"This is a template for creating widgets."}')},function(e){e.exports=JSON.parse('{"widget.welcome-msg":"\xa1Bienvenido!","widget.welcome-paragraph":"Esta es una plantilla para crear widgets."}')},function(e){e.exports=JSON.parse('{"widget.welcome-msg":"\xa1Bienvenido!","widget.welcome-paragraph":"Esta es una plantilla para crear widgets."}')},function(e){e.exports=JSON.parse('{"widget.welcome-msg":"Bienvenu!","widget.welcome-paragraph":"Ceci est un mod\xe8le pour cr\xe9er des widgets."}')},function(e){e.exports=JSON.parse('{"widget.welcome-msg":"Benvenuto!","widget.welcome-paragraph":"Questo \xe8 un modello per la creazione di widget."}')},function(e){e.exports=JSON.parse('{"widget.welcome-msg":"\u3088\u3046\u3053\u305d\uff01","widget.welcome-paragraph":"\u3053\u308c\u306f\u3001\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8\u3092\u4f5c\u6210\u3059\u308b\u305f\u3081\u306e\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u3067\u3059\u3002"}')},function(e){e.exports=JSON.parse('{"widget.welcome-msg":"\ud658\uc601!","widget.welcome-paragraph":"\uc704\uc82f\uc744 \uc791\uc131\ud558\uae30\uc704\ud55c \ud15c\ud50c\ub9ac\ud2b8\uc785\ub2c8\ub2e4."}')},function(e){e.exports=JSON.parse('{"widget.welcome-msg":"Witamy!","widget.welcome-paragraph":"To jest szablon do tworzenia wid\u017cet\xf3w."}')},function(e){e.exports=JSON.parse('{"widget.welcome-msg":"Bem vinda!","widget.welcome-paragraph":"Este \xe9 um modelo para criar widgets."}')},function(e){e.exports=JSON.parse('{"widget.welcome-msg":"\u0414\u043e\u0431\u0440\u043e \u043f\u043e\u0436\u0430\u043b\u043e\u0432\u0430\u0442\u044c!","widget.welcome-paragraph":"\u042d\u0442\u043e \u0448\u0430\u0431\u043b\u043e\u043d \u0434\u043b\u044f \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u0432\u0438\u0434\u0436\u0435\u0442\u043e\u0432."}')},function(e){e.exports=JSON.parse('{"widget.welcome-msg":"Ho\u015fgeldiniz!","widget.welcome-paragraph":"Bu widget olu\u015fturmak i\xe7in bir \u015fablon."}')},function(e){e.exports=JSON.parse('{"widget.welcome-msg":"\u6b22\u8fce\uff01","widget.welcome-paragraph":"\u8fd9\u662f\u7528\u4e8e\u521b\u5efa\u7a97\u53e3\u5c0f\u90e8\u4ef6\u7684\u6a21\u677f\u3002"}')},function(e){e.exports=JSON.parse('{"widget.welcome-msg":"\u6b61\u8fce\uff01","widget.welcome-paragraph":"\u9019\u662f\u7528\u65bc\u5275\u5efa\u7a97\u53e3\u5c0f\u90e8\u4ef6\u7684\u6a21\u677f\u3002"}')},function(e,t,r){"use strict";r(20);var n=r(2),a=60103;if(t.Fragment=60107,"function"===typeof Symbol&&Symbol.for){var o=Symbol.for;a=o("react.element"),t.Fragment=o("react.fragment")}var i=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s=Object.prototype.hasOwnProperty,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,r){var n,o={},l=null,d=null;for(n in void 0!==r&&(l=""+r),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(d=t.ref),t)s.call(t,n)&&!c.hasOwnProperty(n)&&(o[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===o[n]&&(o[n]=t[n]);return{$$typeof:a,type:e,key:l,ref:d,props:o,_owner:i.current}}t.jsx=l,t.jsxs=l},function(e,t,r){"use strict";var n=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable;function i(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(a){return!1}}()?Object.assign:function(e,t){for(var r,s,c=i(e),l=1;l<arguments.length;l++){for(var d in r=Object(arguments[l]))a.call(r,d)&&(c[d]=r[d]);if(n){s=n(r);for(var g=0;g<s.length;g++)o.call(r,s[g])&&(c[s[g]]=r[s[g]])}}return c}},function(e,t,r){},function(e,t,r){"use strict";r.r(t);var n=r(0),a=r(2),o=r.n(a),i=r(3),s=r.n(i),c=(r(21),r(1));var l=function(e){var t=e.element;return Object(n.jsxs)("div",{className:"Widget example-widget",children:[Object(n.jsx)("h1",{className:"is-size-4 pb-2",children:Object(n.jsx)(c.FormattedMessage,{id:"widget.welcome-msg",defaultMessage:"Welcome!"})}),Object(n.jsx)("p",{className:"is-size-6 pb-2",children:Object(n.jsx)(c.FormattedMessage,{id:"widget.welcome-paragraph",defaultMessage:"This is a template for creating widgets."})}),Object(n.jsx)("p",{className:"is-size-7 pb-4",children:Object(n.jsx)(c.FormattedMessage,{id:"widget.details-paragraph",defaultMessage:"It is not very complex, but it has a button with configurable text (added by the editors while embedding in the CMS), some CSS, some JS, some media, it is translatable, \u2026"})}),Object(n.jsx)("p",{className:"is-size-6 pb-4",children:Object(n.jsx)("button",{className:"button is-primary",children:t.getAttribute("data-button-text")})}),Object(n.jsx)("p",{children:Object(n.jsx)("img",{src:"data:image/png;base64,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",alt:"Logo",width:"48",height:"*"})})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function d(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var g={ar:r(4),de:r(5),en:r(6),es:r(7),esla:r(8),fr:r(9),it:r(10),ja:r(11),ko:r(12),pl:r(13),pt:r(14),ru:r(15),tr:r(16),"zh-cn":r(17),"zh-tw":r(18)},u=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.locale=t}var t,r,n;return t=e,(r=[{key:"mapLocale",value:function(e){switch(e){case"esla":e="es";break;case"zhcn":e="zh-cn";break;case"zhtw":e="zh-tw";break;default:return e}if("undefined"!==typeof g[e.toLowerCase()])return e.toLowerCase();var t=e.split("-",2);return"undefined"!==typeof g[t[0]]?t[0]:"en"}},{key:"locale",set:function(e){this._locale=this.mapLocale(e||"en")},get:function(){return this._locale}},{key:"messages",get:function(){return g[this.locale]}}])&&d(t.prototype,r),n&&d(t,n),e}();window.renderExampleWidget=function(e,t,r,a){var i=document.getElementById(e),d=new u(t||function(){var e=new RegExp("[\\?&]data-locale=([^&#]*)").exec(window.location.search);return null===e?null:decodeURIComponent(e[1].replace(/\+/g," "))}());s.a.render(Object(n.jsx)(o.a.StrictMode,{children:Object(n.jsx)(c.IntlProvider,{locale:d.locale,messages:d.messages,children:Object(n.jsx)(l,{element:i})})}),i,(function(){return a(i)})),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}}]);
//# sourceMappingURL=main.js.map