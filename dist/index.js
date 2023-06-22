(()=>{var t={18:(t,e,n)=>{var r;(r=n(566)).keys().forEach(r)},854:function(t,e,n){t.exports=function(){"use strict";var t=function(t){var e=t.id,n=t.viewBox,r=t.content;this.id=e,this.viewBox=n,this.content=r};t.prototype.stringify=function(){return this.content},t.prototype.toString=function(){return this.stringify()},t.prototype.destroy=function(){var t=this;["id","viewBox","content"].forEach((function(e){return delete t[e]}))};function e(t,e){return t(e={exports:{}},e.exports),e.exports}"undefined"!=typeof window?window:void 0!==n.g?n.g:"undefined"!=typeof self&&self;var r=e((function(t,e){t.exports=function(){function t(t){return t&&"object"==typeof t&&"[object RegExp]"!==Object.prototype.toString.call(t)&&"[object Date]"!==Object.prototype.toString.call(t)}function e(t){return Array.isArray(t)?[]:{}}function n(n,r){return r&&!0===r.clone&&t(n)?i(e(n),n,r):n}function r(e,r,o){var a=e.slice();return r.forEach((function(r,c){void 0===a[c]?a[c]=n(r,o):t(r)?a[c]=i(e[c],r,o):-1===e.indexOf(r)&&a.push(n(r,o))})),a}function o(e,r,o){var a={};return t(e)&&Object.keys(e).forEach((function(t){a[t]=n(e[t],o)})),Object.keys(r).forEach((function(c){t(r[c])&&e[c]?a[c]=i(e[c],r[c],o):a[c]=n(r[c],o)})),a}function i(t,e,i){var a=Array.isArray(e),c=(i||{arrayMerge:r}).arrayMerge||r;return a?Array.isArray(t)?c(t,e,i):n(e,i):o(t,e,i)}return i.all=function(t,e){if(!Array.isArray(t)||t.length<2)throw new Error("first argument should be an array with at least two elements");return t.reduce((function(t,n){return i(t,n,e)}))},i}()})),o=e((function(t,e){e.default={svg:{name:"xmlns",uri:"http://www.w3.org/2000/svg"},xlink:{name:"xmlns:xlink",uri:"http://www.w3.org/1999/xlink"}},t.exports=e.default})),i=o.svg,a=o.xlink,c={};c[i.name]=i.uri,c[a.name]=a.uri;var u=function(t,e){return void 0===t&&(t=""),"<svg "+function(t){return Object.keys(t).map((function(e){return e+'="'+t[e].toString().replace(/"/g,"&quot;")+'"'})).join(" ")}(r(c,e||{}))+">"+t+"</svg>"},s=function(t){function e(){t.apply(this,arguments)}t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e;var n={isMounted:{}};return n.isMounted.get=function(){return!!this.node},e.createFromExistingNode=function(t){return new e({id:t.getAttribute("id"),viewBox:t.getAttribute("viewBox"),content:t.outerHTML})},e.prototype.destroy=function(){this.isMounted&&this.unmount(),t.prototype.destroy.call(this)},e.prototype.mount=function(t){if(this.isMounted)return this.node;var e="string"==typeof t?document.querySelector(t):t,n=this.render();return this.node=n,e.appendChild(n),n},e.prototype.render=function(){var t=this.stringify();return function(t){var e=!!document.importNode,n=(new DOMParser).parseFromString(t,"image/svg+xml").documentElement;return e?document.importNode(n,!0):n}(u(t)).childNodes[0]},e.prototype.unmount=function(){this.node.parentNode.removeChild(this.node)},Object.defineProperties(e.prototype,n),e}(t);return s}()},789:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>u});var r=n(854),o=n.n(r),i=n(348),a=n.n(i),c=new(o())({id:"ellipsis",use:"ellipsis-usage",viewBox:"0 0 4 14",content:'<symbol viewBox="0 0 4 14" fill="none" xmlns="http://www.w3.org/2000/svg" id="ellipsis">\r\n<path d="M3.5 12C3.5 12.3978 3.34196 12.7794 3.06066 13.0607C2.77936 13.342 2.39782 13.5 2 13.5C1.60218 13.5 1.22064 13.342 0.93934 13.0607C0.658035 12.7794 0.5 12.3978 0.5 12C0.5 11.6022 0.658035 11.2206 0.93934 10.9393C1.22064 10.658 1.60218 10.5 2 10.5C2.39782 10.5 2.77936 10.658 3.06066 10.9393C3.34196 11.2206 3.5 11.6022 3.5 12ZM3.5 7C3.5 7.39782 3.34196 7.77936 3.06066 8.06066C2.77936 8.34196 2.39782 8.5 2 8.5C1.60218 8.5 1.22064 8.34196 0.93934 8.06066C0.658035 7.77936 0.5 7.39782 0.5 7C0.5 6.60218 0.658035 6.22064 0.93934 5.93934C1.22064 5.65804 1.60218 5.5 2 5.5C2.39782 5.5 2.77936 5.65804 3.06066 5.93934C3.34196 6.22064 3.5 6.60218 3.5 7ZM3.5 2C3.5 2.39782 3.34196 2.77936 3.06066 3.06066C2.77936 3.34196 2.39782 3.5 2 3.5C1.60218 3.5 1.22064 3.34196 0.93934 3.06066C0.658035 2.77936 0.5 2.39782 0.5 2C0.5 1.60218 0.658035 1.22064 0.93934 0.93934C1.22064 0.658035 1.60218 0.5 2 0.5C2.39782 0.5 2.77936 0.658035 3.06066 0.93934C3.34196 1.22064 3.5 1.60218 3.5 2Z" fill="#1C1C1C" />\r\n</symbol>'});a().add(c);const u=c},176:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>u});var r=n(854),o=n.n(r),i=n(348),a=n.n(i),c=new(o())({id:"vector",use:"vector-usage",viewBox:"0 0 14 8",content:'<symbol viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg" id="vector">\r\n<path id="vector_vector" d="M6.99999 4.95L2.04999 0L0.635986 1.414L6.99999 7.778L13.364 1.414L11.95 0L6.99999 4.95Z" fill="currentColor" />\r\n</symbol>'});a().add(c);const u=c},348:function(t,e,n){t.exports=function(){"use strict";function t(t,e){return t(e={exports:{}},e.exports),e.exports}"undefined"!=typeof window?window:void 0!==n.g?n.g:"undefined"!=typeof self&&self;var e=t((function(t,e){t.exports=function(){function t(t){return t&&"object"==typeof t&&"[object RegExp]"!==Object.prototype.toString.call(t)&&"[object Date]"!==Object.prototype.toString.call(t)}function e(t){return Array.isArray(t)?[]:{}}function n(n,r){return r&&!0===r.clone&&t(n)?i(e(n),n,r):n}function r(e,r,o){var a=e.slice();return r.forEach((function(r,c){void 0===a[c]?a[c]=n(r,o):t(r)?a[c]=i(e[c],r,o):-1===e.indexOf(r)&&a.push(n(r,o))})),a}function o(e,r,o){var a={};return t(e)&&Object.keys(e).forEach((function(t){a[t]=n(e[t],o)})),Object.keys(r).forEach((function(c){t(r[c])&&e[c]?a[c]=i(e[c],r[c],o):a[c]=n(r[c],o)})),a}function i(t,e,i){var a=Array.isArray(e),c=(i||{arrayMerge:r}).arrayMerge||r;return a?Array.isArray(t)?c(t,e,i):n(e,i):o(t,e,i)}return i.all=function(t,e){if(!Array.isArray(t)||t.length<2)throw new Error("first argument should be an array with at least two elements");return t.reduce((function(t,n){return i(t,n,e)}))},i}()}));var r=t((function(t,e){e.default={svg:{name:"xmlns",uri:"http://www.w3.org/2000/svg"},xlink:{name:"xmlns:xlink",uri:"http://www.w3.org/1999/xlink"}},t.exports=e.default})),o=r.svg,i=r.xlink,a={};a[o.name]=o.uri,a[i.name]=i.uri;var c,u=function(t,n){return void 0===t&&(t=""),"<svg "+function(t){return Object.keys(t).map((function(e){return e+'="'+t[e].toString().replace(/"/g,"&quot;")+'"'})).join(" ")}(e(a,n||{}))+">"+t+"</svg>"},s=r.svg,d=r.xlink,l={attrs:(c={style:["position: absolute","width: 0","height: 0"].join("; "),"aria-hidden":"true"},c[s.name]=s.uri,c[d.name]=d.uri,c)},p=function(t){this.config=e(l,t||{}),this.symbols=[]};p.prototype.add=function(t){var e=this.symbols,n=this.find(t.id);return n?(e[e.indexOf(n)]=t,!1):(e.push(t),!0)},p.prototype.remove=function(t){var e=this.symbols,n=this.find(t);return!!n&&(e.splice(e.indexOf(n),1),n.destroy(),!0)},p.prototype.find=function(t){return this.symbols.filter((function(e){return e.id===t}))[0]||null},p.prototype.has=function(t){return null!==this.find(t)},p.prototype.stringify=function(){var t=this.config.attrs,e=this.symbols.map((function(t){return t.stringify()})).join("");return u(e,t)},p.prototype.toString=function(){return this.stringify()},p.prototype.destroy=function(){this.symbols.forEach((function(t){return t.destroy()}))};var f=function(t){var e=t.id,n=t.viewBox,r=t.content;this.id=e,this.viewBox=n,this.content=r};f.prototype.stringify=function(){return this.content},f.prototype.toString=function(){return this.stringify()},f.prototype.destroy=function(){var t=this;["id","viewBox","content"].forEach((function(e){return delete t[e]}))};var v=function(t){var e=!!document.importNode,n=(new DOMParser).parseFromString(t,"image/svg+xml").documentElement;return e?document.importNode(n,!0):n},h=function(t){function e(){t.apply(this,arguments)}t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e;var n={isMounted:{}};return n.isMounted.get=function(){return!!this.node},e.createFromExistingNode=function(t){return new e({id:t.getAttribute("id"),viewBox:t.getAttribute("viewBox"),content:t.outerHTML})},e.prototype.destroy=function(){this.isMounted&&this.unmount(),t.prototype.destroy.call(this)},e.prototype.mount=function(t){if(this.isMounted)return this.node;var e="string"==typeof t?document.querySelector(t):t,n=this.render();return this.node=n,e.appendChild(n),n},e.prototype.render=function(){var t=this.stringify();return v(u(t)).childNodes[0]},e.prototype.unmount=function(){this.node.parentNode.removeChild(this.node)},Object.defineProperties(e.prototype,n),e}(f),y={autoConfigure:!0,mountTo:"body",syncUrlsWithBaseTag:!1,listenLocationChangeEvent:!0,locationChangeEvent:"locationChange",locationChangeAngularEmitter:!1,usagesToUpdate:"use[*|href]",moveGradientsOutsideSymbol:!1},m=function(t){return Array.prototype.slice.call(t,0)},g=function(){return/firefox/i.test(navigator.userAgent)},_=function(){return/msie/i.test(navigator.userAgent)||/trident/i.test(navigator.userAgent)},b=function(){return/edge/i.test(navigator.userAgent)},w=function(t){return(t||window.location.href).split("#")[0]},C=function(t){angular.module("ng").run(["$rootScope",function(e){e.$on("$locationChangeSuccess",(function(e,n,r){var o,i,a;o=t,i={oldUrl:r,newUrl:n},(a=document.createEvent("CustomEvent")).initCustomEvent(o,!1,!1,i),window.dispatchEvent(a)}))}])},x=function(t,e){return void 0===e&&(e="linearGradient, radialGradient, pattern, mask, clipPath"),m(t.querySelectorAll("symbol")).forEach((function(t){m(t.querySelectorAll(e)).forEach((function(e){t.parentNode.insertBefore(e,t)}))})),t};var S=r.xlink.uri,E="xlink:href",A=/[{}|\\\^\[\]`"<>]/g;function O(t){return t.replace(A,(function(t){return"%"+t[0].charCodeAt(0).toString(16).toUpperCase()}))}var L,j=["clipPath","colorProfile","src","cursor","fill","filter","marker","markerStart","markerMid","markerEnd","mask","stroke","style"],M=j.map((function(t){return"["+t+"]"})).join(","),k=function(t,e,n,r){var o,i,a=O(n),c=O(r);(o=t.querySelectorAll(M),i=function(t){var e=t.localName,n=t.value;return-1!==j.indexOf(e)&&-1!==n.indexOf("url("+a)},m(o).reduce((function(t,e){if(!e.attributes)return t;var n=m(e.attributes),r=i?n.filter(i):n;return t.concat(r)}),[])).forEach((function(t){return t.value=t.value.replace(new RegExp(a.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),"g"),c)})),function(t,e,n){m(t).forEach((function(t){var r=t.getAttribute(E);if(r&&0===r.indexOf(e)){var o=r.replace(e,n);t.setAttributeNS(S,E,o)}}))}(e,a,c)},q="mount",B="symbol_mount",N=function(t){function n(n){var r=this;void 0===n&&(n={}),t.call(this,e(y,n));var o,i=(o=o||Object.create(null),{on:function(t,e){(o[t]||(o[t]=[])).push(e)},off:function(t,e){o[t]&&o[t].splice(o[t].indexOf(e)>>>0,1)},emit:function(t,e){(o[t]||[]).map((function(t){t(e)})),(o["*"]||[]).map((function(n){n(t,e)}))}});this._emitter=i,this.node=null;var a=this.config;if(a.autoConfigure&&this._autoConfigure(n),a.syncUrlsWithBaseTag){var c=document.getElementsByTagName("base")[0].getAttribute("href");i.on(q,(function(){return r.updateUrls("#",c)}))}var u=this._handleLocationChange.bind(this);this._handleLocationChange=u,a.listenLocationChangeEvent&&window.addEventListener(a.locationChangeEvent,u),a.locationChangeAngularEmitter&&C(a.locationChangeEvent),i.on(q,(function(t){a.moveGradientsOutsideSymbol&&x(t)})),i.on(B,(function(t){var e;a.moveGradientsOutsideSymbol&&x(t.parentNode),(_()||b())&&(e=[],m(t.querySelectorAll("style")).forEach((function(t){t.textContent+="",e.push(t)})))}))}t&&(n.__proto__=t),n.prototype=Object.create(t&&t.prototype),n.prototype.constructor=n;var r={isMounted:{}};return r.isMounted.get=function(){return!!this.node},n.prototype._autoConfigure=function(t){var e=this.config;void 0===t.syncUrlsWithBaseTag&&(e.syncUrlsWithBaseTag=void 0!==document.getElementsByTagName("base")[0]),void 0===t.locationChangeAngularEmitter&&(e.locationChangeAngularEmitter=void 0!==window.angular),void 0===t.moveGradientsOutsideSymbol&&(e.moveGradientsOutsideSymbol=g())},n.prototype._handleLocationChange=function(t){var e=t.detail,n=e.oldUrl,r=e.newUrl;this.updateUrls(n,r)},n.prototype.add=function(e){var n=t.prototype.add.call(this,e);return this.isMounted&&n&&(e.mount(this.node),this._emitter.emit(B,e.node)),n},n.prototype.attach=function(t){var e=this,n=this;if(n.isMounted)return n.node;var r="string"==typeof t?document.querySelector(t):t;return n.node=r,this.symbols.forEach((function(t){t.mount(n.node),e._emitter.emit(B,t.node)})),m(r.querySelectorAll("symbol")).forEach((function(t){var e=h.createFromExistingNode(t);e.node=t,n.add(e)})),this._emitter.emit(q,r),r},n.prototype.destroy=function(){var t=this,e=t.config,n=t.symbols,r=t._emitter;n.forEach((function(t){return t.destroy()})),r.off("*"),window.removeEventListener(e.locationChangeEvent,this._handleLocationChange),this.isMounted&&this.unmount()},n.prototype.mount=function(t,e){void 0===t&&(t=this.config.mountTo),void 0===e&&(e=!1);var n=this;if(n.isMounted)return n.node;var r="string"==typeof t?document.querySelector(t):t,o=n.render();return this.node=o,e&&r.childNodes[0]?r.insertBefore(o,r.childNodes[0]):r.appendChild(o),this._emitter.emit(q,o),o},n.prototype.render=function(){return v(this.stringify())},n.prototype.unmount=function(){this.node.parentNode.removeChild(this.node)},n.prototype.updateUrls=function(t,e){if(!this.isMounted)return!1;var n=document.querySelectorAll(this.config.usagesToUpdate);return k(this.node,n,w(t)+"#",w(e)+"#"),!0},Object.defineProperties(n.prototype,r),n}(p),T=t((function(t){var e;e=function(){var t,e=[],n=document,r=n.documentElement.doScroll,o="DOMContentLoaded",i=(r?/^loaded|^c/:/^loaded|^i|^c/).test(n.readyState);return i||n.addEventListener(o,t=function(){for(n.removeEventListener(o,t),i=1;t=e.shift();)t()}),function(t){i?setTimeout(t,0):e.push(t)}},t.exports=e()})),P="__SVG_SPRITE_NODE__",U="__SVG_SPRITE__";window[U]?L=window[U]:(L=new N({attrs:{id:P,"aria-hidden":"true"}}),window[U]=L);var G=function(){var t=document.getElementById(P);t?L.attach(t):L.mount(document.body,!0)};return document.body?G():T(G),L}()},566:(t,e,n)=>{var r={"./ellipsis.svg":789,"./vector.svg":176};function o(t){var e=i(t);return n(e)}function i(t){if(!n.o(r,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return r[t]}o.keys=function(){return Object.keys(r)},o.resolve=i,t.exports=o,o.id=566}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={exports:{}};return t[r].call(i.exports,i,i.exports,n),i.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},(()=>{var t;n.g.importScripts&&(t=n.g.location+"");var e=n.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var r=e.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&!t;)t=r[o--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=t})(),(()=>{"use strict";n(18);const t=n.p+"4c3a7471a31f8cfc41c8.png";var e=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",r=arguments.length>3&&void 0!==arguments[3]&&arguments[3],o=document.createElement(t);return e.length>0&&o.classList.add(e),r&&o.classList.add("active"),n.length>0&&(o.textContent=n),o},r=function(n,r,o,i,a,c,u){var s=arguments.length>8&&void 0!==arguments[8]?arguments[8]:"",d=e("li","card__item"),l=e("div","card__base"),p=e("div","card__head"),f=e("p","card__name",n);if(p.appendChild(f),u){var v=e("img","card__img");v.setAttribute("src",t),v.setAttribute("alt","Аватар исполнителя"),p.appendChild(v)}var h=e("div","card__body"),y=e("p","card__content"),m=e("span","card__number",r),g=e("span","","".concat(o," создал ").concat(i," назад"));if(y.appendChild(m),y.appendChild(g),u){var _=e("span","card__state",s);y.appendChild(_)}var b=e("p","card__chang","".concat(a," изменил ").concat(c," назад"));h.appendChild(y),h.appendChild(b),l.appendChild(p),l.appendChild(h);var w=e("div","card__menu"),C=e("div","card__icon");C.insertAdjacentHTML("beforeend","<div class='icon'>\n  <svg>\n  <use xlink:href='#ellipsis'>\n  </svg>\n  </div>"),w.appendChild(C);var x=e("div","card__dropdownMenu"),S=e("div","card__edit"),E=e("p","","Редактировать");S.appendChild(E);var A=e("div","card__delete"),O=e("p","","Удалить");return A.appendChild(O),x.appendChild(S),x.appendChild(A),w.appendChild(C),w.appendChild(x),d.appendChild(l),d.appendChild(w),d},o=document.querySelector("#app");function i(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(t){if("string"==typeof t)return a(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(t,e):void 0}}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0,o=function(){};return{s:o,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,c=!0,u=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return c=t.done,t},e:function(t){u=!0,i=t},f:function(){try{c||null==n.return||n.return()}finally{if(u)throw i}}}}function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var c,u,s,d,l,p,f,v,h=document.querySelector("#app");v=function(n,r,o,i){var a=e("header","header"),c=e("ul","navigation"),u=e("li","navigation__item","Проекты",!0),s=e("li","navigation__item","Задачи"),d=e("li","navigation__item","Пользователи");c.appendChild(u),c.appendChild(s),c.appendChild(d);var l=e("div","header__button"),p=e("img","header__img");p.setAttribute("src",t),p.setAttribute("alt","Аватар исполнителя");var f=e("div","header__dropdownMenu"),v=e("div","header__profile"),h=e("p","header__text","Профиль"),y=e("div","header__exit"),m=e("p","header__text","Выход");return v.appendChild(h),y.appendChild(m),f.appendChild(v),f.appendChild(y),l.appendChild(f),l.appendChild(p),l.insertAdjacentHTML("beforeend","<div class='header__icon'>\n  <svg class='header__svg'> <use xlink:href='#vector'> </svg>\n  </div>"),a.appendChild(c),a.appendChild(l),a}(),o.append(v),c=document.createElement("main"),o.append(c),l=document.querySelector("main"),u=e("section","empty-list"),s=e("p","empty-list__text","Нет ни одного пользователя"),d=e("button","empty-list__button","Добавить"),u.appendChild(s),u.appendChild(d),p=u,(f=e("div","user")).append(p),l.append(f),function(){var t=document.querySelector("main"),n=e("section","card"),o=e("ul","card__list"),i=e("div","task"),a=r("НазваниеНазваниеНазваниеНазваниеНазваниеНазваниеНазваниеНазваниеНазваниеНазваниеНазваниеНазваниеНазваниеНазваниеНазваниеНазвНазваниеНазваниеНазваниеНазваниеНазваниеНазваниеНазваниеНазваниеНазваниеНазвНазваниеНазваниеНазваниеНазваниеНазваниеНазваниеНазваниеНазваниеНазваниеНазвНазваниеНазваниеНазваниеНазваниеНазваниеНазваниеНазваниеНазваниеНазваниеНазваниеНазваниеНазваниеНазваниеНазваниеНазваниеНазваниеНазваниеНазваниеНазваниеНазваниеНазваниеНазваниеНазваниеНазваниеНазваниеНазваниеНазваниеНазваниеНазвание","#1","Иванов И.И.","1 час","Баранов В.В.","1 минуту",!0,"../img/profilPicture.png","Черновик");o.append(a);var c=r("звНазваниеНазваниеНазваниеНазваниеНазваниеНазваниеНазваниеНазваниеНиеНаззваниеНазваниеНазваниеНазваниеНазваниеНазваниеНазваниеНазваниеНазваниеНазваниеНазваниеНазваниеНазваниеНазваниеНазваниеНазваниеНазваниеНазваниеНазваниеНазваниеНазваниеНазваниеНазваниеНазвание","#1","Иванов И.И.","1 час","Баранов В.В.","1 минуту",!0,"../img/profilPicture.png","Черновик");o.append(c),n.append(o),i.append(n),t.append(i)}(),function(){var t=document.querySelector("main"),n=e("section","card"),o=e("ul","card__list"),i=e("div","project","",!0),a=r("Название","#1","Иванов И.И.","1 час","Баранов В.В.","1 минуту",!1);o.append(a);var c=r("Название","#1","Иванов И.И.","1 час","Баранов В.В.","1 минуту",!1);o.append(c),n.append(o),i.append(n),t.append(i)}(),function(){var t,e=i(document.querySelectorAll(".card__item"));try{for(e.s();!(t=e.n()).done;)t.value.addEventListener("mouseleave",(function(t){var e,n=i(document.querySelectorAll(".card__menu"));try{for(n.s();!(e=n.n()).done;){var r=e.value;r.classList.contains("active")&&r.classList.remove("active")}}catch(t){n.e(t)}finally{n.f()}}))}catch(t){e.e(t)}finally{e.f()}}(),h.addEventListener("click",(function(t){!function(t){var e=t.target.closest(".navigation__item");if(e&&!e.classList.contains("active"))switch(h.querySelector(".navigation__item.active").classList.remove("active"),e.classList.add("active"),e.textContent){case"Проекты":h.querySelector("main > div.active").classList.remove("active"),h.querySelector(".project").classList.add("active");break;case"Задачи":h.querySelector("main > div.active").classList.remove("active"),h.querySelector(".task").classList.add("active");break;case"Пользователи":h.querySelector("main > div.active").classList.remove("active"),h.querySelector(".user").classList.add("active")}}(t),function(t){var e=t.target.closest(".header__button");if(e)t.target.closest(".header__dropdownMenu")||e.classList.toggle("active");else{var n=document.querySelector(".header__button");n.classList.contains("active")&&n.classList.remove("active")}}(t),function(t){var e=t.target.closest(".card__menu");if(e)t.target.closest(".card__dropdownMenu")||e.classList.toggle("active");else{var n,r=i(document.querySelectorAll(".card__menu"));try{for(r.s();!(n=r.n()).done;){var o=n.value;o.classList.contains("active")&&o.classList.remove("active")}}catch(t){r.e(t)}finally{r.f()}}}(t)}))})()})();