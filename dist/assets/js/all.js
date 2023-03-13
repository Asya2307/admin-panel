"use strict";function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}!function(n){var r={};function o(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,o),t.l=!0,t.exports}o.m=n,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==_typeof(t)&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=10)}([function(e,t,n){var o=n(2),r=Object.prototype.toString;function i(e){return"[object Array]"===r.call(e)}function s(e){return void 0===e}function a(e){return null!==e&&"object"==_typeof(e)}function u(e){if("[object Object]"!==r.call(e))return!1;var t=Object.getPrototypeOf(e);return null===t||t===Object.prototype}function c(e){return"[object Function]"===r.call(e)}function f(e,t){if(null!=e)if("object"!=_typeof(e)&&(e=[e]),i(e))for(var n=0,r=e.length;n<r;n++)t.call(null,e[n],n,e);else for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.call(null,e[o],o,e)}e.exports={isArray:i,isArrayBuffer:function(e){return"[object ArrayBuffer]"===r.call(e)},isBuffer:function(e){return null!==e&&!s(e)&&null!==e.constructor&&!s(e.constructor)&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)},isFormData:function(e){return"undefined"!=typeof FormData&&e instanceof FormData},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:a,isPlainObject:u,isUndefined:s,isDate:function(e){return"[object Date]"===r.call(e)},isFile:function(e){return"[object File]"===r.call(e)},isBlob:function(e){return"[object Blob]"===r.call(e)},isFunction:c,isStream:function(e){return a(e)&&c(e.pipe)},isURLSearchParams:function(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&"undefined"!=typeof window&&"undefined"!=typeof document},forEach:f,merge:function n(){var r={};function e(e,t){u(r[t])&&u(e)?r[t]=n(r[t],e):u(e)?r[t]=n({},e):i(e)?r[t]=e.slice():r[t]=e}for(var t=0,o=arguments.length;t<o;t++)f(arguments[t],e);return r},extend:function(n,e,r){return f(e,function(e,t){n[t]=r&&"function"==typeof e?o(e,r):e}),n},trim:function(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")},stripBOM:function(e){return 65279===e.charCodeAt(0)&&(e=e.slice(1)),e}}},function(e,t,n){e.exports=n(11)},function(e,t,n){e.exports=function(n,r){return function(){for(var e=new Array(arguments.length),t=0;t<e.length;t++)e[t]=arguments[t];return n.apply(r,e)}}},function(e,t,n){var s=n(0);function a(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,t,n){if(!t)return e;var r;if(n)r=n(t);else if(s.isURLSearchParams(t))r=t.toString();else{var o=[];s.forEach(t,function(e,t){null!=e&&(s.isArray(e)?t+="[]":e=[e],s.forEach(e,function(e){s.isDate(e)?e=e.toISOString():s.isObject(e)&&(e=JSON.stringify(e)),o.push(a(t)+"="+a(e))}))}),r=o.join("&")}if(r){var i=e.indexOf("#");-1!==i&&(e=e.slice(0,i)),e+=(-1===e.indexOf("?")?"?":"&")+r}return e}},function(e,t,n){e.exports=function(e){return!(!e||!e.__CANCEL__)}},function(a,e,u){(function(e){var n=u(0),r=u(17),t={"Content-Type":"application/x-www-form-urlencoded"};function o(e,t){!n.isUndefined(e)&&n.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var i,s={adapter:(("undefined"!=typeof XMLHttpRequest||void 0!==e&&"[object process]"===Object.prototype.toString.call(e))&&(i=u(6)),i),transformRequest:[function(e,t){return r(t,"Accept"),r(t,"Content-Type"),n.isFormData(e)||n.isArrayBuffer(e)||n.isBuffer(e)||n.isStream(e)||n.isFile(e)||n.isBlob(e)?e:n.isArrayBufferView(e)?e.buffer:n.isURLSearchParams(e)?(o(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):n.isObject(e)?(o(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(e){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(e){return 200<=e&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};n.forEach(["delete","get","head"],function(e){s.headers[e]={}}),n.forEach(["post","put","patch"],function(e){s.headers[e]=n.merge(t)}),a.exports=s}).call(this,u(16))},function(e,t,n){var f=n(0),l=n(18),p=n(20),d=n(3),h=n(21),m=n(24),y=n(25),v=n(7);e.exports=function(c){return new Promise(function(n,r){var o=c.data,i=c.headers;f.isFormData(o)&&delete i["Content-Type"];var s=new XMLHttpRequest;if(c.auth){var e=c.auth.username||"",t=c.auth.password?unescape(encodeURIComponent(c.auth.password)):"";i.Authorization="Basic "+btoa(e+":"+t)}var a=h(c.baseURL,c.url);if(s.open(c.method.toUpperCase(),d(a,c.params,c.paramsSerializer),!0),s.timeout=c.timeout,s.onreadystatechange=function(){if(s&&4===s.readyState&&(0!==s.status||s.responseURL&&0===s.responseURL.indexOf("file:"))){var e="getAllResponseHeaders"in s?m(s.getAllResponseHeaders()):null,t={data:c.responseType&&"text"!==c.responseType?s.response:s.responseText,status:s.status,statusText:s.statusText,headers:e,config:c,request:s};l(n,r,t),s=null}},s.onabort=function(){s&&(r(v("Request aborted",c,"ECONNABORTED",s)),s=null)},s.onerror=function(){r(v("Network Error",c,null,s)),s=null},s.ontimeout=function(){var e="timeout of "+c.timeout+"ms exceeded";c.timeoutErrorMessage&&(e=c.timeoutErrorMessage),r(v(e,c,"ECONNABORTED",s)),s=null},f.isStandardBrowserEnv()){var u=(c.withCredentials||y(a))&&c.xsrfCookieName?p.read(c.xsrfCookieName):void 0;u&&(i[c.xsrfHeaderName]=u)}if("setRequestHeader"in s&&f.forEach(i,function(e,t){void 0===o&&"content-type"===t.toLowerCase()?delete i[t]:s.setRequestHeader(t,e)}),f.isUndefined(c.withCredentials)||(s.withCredentials=!!c.withCredentials),c.responseType)try{s.responseType=c.responseType}catch(n){if("json"!==c.responseType)throw n}"function"==typeof c.onDownloadProgress&&s.addEventListener("progress",c.onDownloadProgress),"function"==typeof c.onUploadProgress&&s.upload&&s.upload.addEventListener("progress",c.onUploadProgress),c.cancelToken&&c.cancelToken.promise.then(function(e){s&&(s.abort(),r(e),s=null)}),o||(o=null),s.send(o)})}},function(e,t,n){var s=n(19);e.exports=function(e,t,n,r,o){var i=new Error(e);return s(i,t,n,r,o)}},function(e,t,n){var l=n(0);e.exports=function(t,n){n=n||{};var r={},e=["url","method","data"],o=["headers","auth","proxy","params"],i=["baseURL","transformRequest","transformResponse","paramsSerializer","timeout","timeoutMessage","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","decompress","maxContentLength","maxBodyLength","maxRedirects","transport","httpAgent","httpsAgent","cancelToken","socketPath","responseEncoding"],s=["validateStatus"];function a(e,t){return l.isPlainObject(e)&&l.isPlainObject(t)?l.merge(e,t):l.isPlainObject(t)?l.merge({},t):l.isArray(t)?t.slice():t}function u(e){l.isUndefined(n[e])?l.isUndefined(t[e])||(r[e]=a(void 0,t[e])):r[e]=a(t[e],n[e])}l.forEach(e,function(e){l.isUndefined(n[e])||(r[e]=a(void 0,n[e]))}),l.forEach(o,u),l.forEach(i,function(e){l.isUndefined(n[e])?l.isUndefined(t[e])||(r[e]=a(void 0,t[e])):r[e]=a(void 0,n[e])}),l.forEach(s,function(e){e in n?r[e]=a(t[e],n[e]):e in t&&(r[e]=a(void 0,t[e]))});var c=e.concat(o).concat(i).concat(s),f=Object.keys(t).concat(Object.keys(n)).filter(function(e){return-1===c.indexOf(e)});return l.forEach(f,u),r}},function(e,t,n){function r(e){this.message=e}r.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},r.prototype.__CANCEL__=!0,e.exports=r},function(e,t,n){n.r(t);var r=n(1),o=n.n(r),i="http://localhost:3004/settings",s=document.querySelector(".js-color"),a=document.querySelector(".js-panel-open"),u=document.querySelector(".js-panel-close"),c=document.querySelector(".js-panel-form"),f=function(e){document.documentElement.style.setProperty("--prm",e),s.value=e};s&&s.addEventListener("input",function(e){return f(e.target.value)}),a&&a.addEventListener("click",function(e){return(t=e).currentTarget.classList.add("hide"),void t.currentTarget.closest(".js-panel").classList.add("active");var t}),u&&u.addEventListener("click",function(e){return t=e.currentTarget,setTimeout(function(){t.closest(".js-panel").querySelector(".js-panel-open").classList.remove("hide")},200),void t.closest(".js-panel").classList.remove("active");var t});c&&(o()({method:"get",url:i}).then(function(n){console.log(n),document.querySelectorAll("[data-type]").forEach(function(e){var t=e.dataset.type;if("colorScheme"!=t)return e.checked=n.data[t];f(n.data[t])})}).catch(function(e){return 404===e.response.status?console.log("Resource could not be found!"):console.log(e.message)}),c.addEventListener("submit",function(e){var t={};e.preventDefault(),e.currentTarget.closest(".js-panel").querySelectorAll("[data-type]").forEach(function(e){"color"==e.getAttribute("type")?t[e.dataset.type]=e.value:t[e.dataset.type]=e.checked}),function(e,t){var n,r=e.currentTarget;(n=t,o()({method:"put",url:i,data:n})).then(function(e){r.querySelector(".js-alert").classList.add("active"),setTimeout(function(){r.querySelector(".js-alert").classList.remove("active")},1e3)}).catch(function(e){return 404===e.response.status?console.log("Resource could not be found!"):console.log(e.message)})}(e,t)}))},function(e,t,n){var r=n(0),o=n(2),i=n(12),s=n(8);function a(e){var t=new i(e),n=o(i.prototype.request,t);return r.extend(n,i.prototype,t),r.extend(n,t),n}var u=a(n(5));u.Axios=i,u.create=function(e){return a(s(u.defaults,e))},u.Cancel=n(9),u.CancelToken=n(26),u.isCancel=n(4),u.all=function(e){return Promise.all(e)},u.spread=n(27),u.isAxiosError=n(28),e.exports=u,e.exports.default=u},function(e,t,n){var r=n(0),o=n(3),i=n(13),s=n(14),a=n(8);function u(e){this.defaults=e,this.interceptors={request:new i,response:new i}}u.prototype.request=function(e){"string"==typeof e?(e=arguments[1]||{}).url=arguments[0]:e=e||{},(e=a(this.defaults,e)).method?e.method=e.method.toLowerCase():this.defaults.method?e.method=this.defaults.method.toLowerCase():e.method="get";var t=[s,void 0],n=Promise.resolve(e);for(this.interceptors.request.forEach(function(e){t.unshift(e.fulfilled,e.rejected)}),this.interceptors.response.forEach(function(e){t.push(e.fulfilled,e.rejected)});t.length;)n=n.then(t.shift(),t.shift());return n},u.prototype.getUri=function(e){return e=a(this.defaults,e),o(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},r.forEach(["delete","get","head","options"],function(n){u.prototype[n]=function(e,t){return this.request(a(t||{},{method:n,url:e,data:(t||{}).data}))}}),r.forEach(["post","put","patch"],function(r){u.prototype[r]=function(e,t,n){return this.request(a(n||{},{method:r,url:e,data:t}))}}),e.exports=u},function(e,t,n){var r=n(0);function o(){this.handlers=[]}o.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},o.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},o.prototype.forEach=function(t){r.forEach(this.handlers,function(e){null!==e&&t(e)})},e.exports=o},function(e,t,n){var r=n(0),o=n(15),i=n(4),s=n(5);function a(e){e.cancelToken&&e.cancelToken.throwIfRequested()}e.exports=function(t){return a(t),t.headers=t.headers||{},t.data=o(t.data,t.headers,t.transformRequest),t.headers=r.merge(t.headers.common||{},t.headers[t.method]||{},t.headers),r.forEach(["delete","get","head","post","put","patch","common"],function(e){delete t.headers[e]}),(t.adapter||s.adapter)(t).then(function(e){return a(t),e.data=o(e.data,e.headers,t.transformResponse),e},function(e){return i(e)||(a(t),e&&e.response&&(e.response.data=o(e.response.data,e.response.headers,t.transformResponse))),Promise.reject(e)})}},function(e,t,n){var r=n(0);e.exports=function(t,n,e){return r.forEach(e,function(e){t=e(t,n)}),t}},function(e,t){var n,r,o=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function s(){throw new Error("clearTimeout has not been defined")}function a(t){if(n===setTimeout)return setTimeout(t,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(t,0);try{return n(t,0)}catch(e){try{return n.call(null,t,0)}catch(e){return n.call(this,t,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:i}catch(e){n=i}try{r="function"==typeof clearTimeout?clearTimeout:s}catch(e){r=s}}();var u,c=[],f=!1,l=-1;function p(){f&&u&&(f=!1,u.length?c=u.concat(c):l=-1,c.length&&d())}function d(){if(!f){var e=a(p);f=!0;for(var t=c.length;t;){for(u=c,c=[];++l<t;)u&&u[l].run();l=-1,t=c.length}u=null,f=!1,function(t){if(r===clearTimeout)return clearTimeout(t);if((r===s||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(t);try{r(t)}catch(e){try{return r.call(null,t)}catch(e){return r.call(this,t)}}}(e)}}function h(e,t){this.fun=e,this.array=t}function m(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(1<arguments.length)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];c.push(new h(e,t)),1!==c.length||f||a(d)},h.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=m,o.addListener=m,o.once=m,o.off=m,o.removeListener=m,o.removeAllListeners=m,o.emit=m,o.prependListener=m,o.prependOnceListener=m,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},function(e,t,n){var o=n(0);e.exports=function(n,r){o.forEach(n,function(e,t){t!==r&&t.toUpperCase()===r.toUpperCase()&&(n[r]=e,delete n[t])})}},function(e,t,n){var o=n(7);e.exports=function(e,t,n){var r=n.config.validateStatus;n.status&&r&&!r(n.status)?t(o("Request failed with status code "+n.status,n.config,null,n.request,n)):e(n)}},function(e,t,n){e.exports=function(e,t,n,r,o){return e.config=t,n&&(e.code=n),e.request=r,e.response=o,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},e}},function(e,t,n){var a=n(0);e.exports=a.isStandardBrowserEnv()?{write:function(e,t,n,r,o,i){var s=[];s.push(e+"="+encodeURIComponent(t)),a.isNumber(n)&&s.push("expires="+new Date(n).toGMTString()),a.isString(r)&&s.push("path="+r),a.isString(o)&&s.push("domain="+o),!0===i&&s.push("secure"),document.cookie=s.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},function(e,t,n){var r=n(22),o=n(23);e.exports=function(e,t){return e&&!r(t)?o(e,t):t}},function(e,t,n){e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},function(e,t,n){e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},function(e,t,n){var i=n(0),s=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,n,r,o={};return e&&i.forEach(e.split("\n"),function(e){if(r=e.indexOf(":"),t=i.trim(e.substr(0,r)).toLowerCase(),n=i.trim(e.substr(r+1)),t){if(o[t]&&0<=s.indexOf(t))return;o[t]="set-cookie"===t?(o[t]?o[t]:[]).concat([n]):o[t]?o[t]+", "+n:n}}),o}},function(e,t,n){var s=n(0);e.exports=s.isStandardBrowserEnv()?function(){var n,r=/(msie|trident)/i.test(navigator.userAgent),o=document.createElement("a");function i(e){var t=e;return r&&(o.setAttribute("href",t),t=o.href),o.setAttribute("href",t),{href:o.href,protocol:o.protocol?o.protocol.replace(/:$/,""):"",host:o.host,search:o.search?o.search.replace(/^\?/,""):"",hash:o.hash?o.hash.replace(/^#/,""):"",hostname:o.hostname,port:o.port,pathname:"/"===o.pathname.charAt(0)?o.pathname:"/"+o.pathname}}return n=i(window.location.href),function(e){var t=s.isString(e)?i(e):e;return t.protocol===n.protocol&&t.host===n.host}}():function(){return!0}},function(e,t,n){var r=n(9);function o(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise(function(e){t=e});var n=this;e(function(e){n.reason||(n.reason=new r(e),t(n.reason))})}o.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},o.source=function(){var t;return{token:new o(function(e){t=e}),cancel:t}},e.exports=o},function(e,t,n){e.exports=function(t){return function(e){return t.apply(null,e)}}},function(e,t,n){e.exports=function(e){return"object"==_typeof(e)&&!0===e.isAxiosError}}]);
//# sourceMappingURL=all.js.map