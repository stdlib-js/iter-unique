// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@v0.2.2-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-iterator-like@v0.2.2-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/symbol-iterator@v0.2.2-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.2-esm/index.mjs";function i(e,r){var t,n;for(t=e.length,n=0;n<t;n++)if(e[n]===r)return!0;return!1}function o(d){var m,u,f;if(!t(d))throw new TypeError(s("0Q93y",d));return u=[],e(m={},"next",(function(){var e;if(f)return{done:!0};for(;;){if((e=d.next()).done)return f=!0,e;if(e=e.value,!1===i(u,e)){u.push(e);break}}return{value:e,done:!1}})),e(m,"return",(function(e){if(f=!0,arguments.length)return{value:e,done:!0};return{done:!0}})),n&&r(d[n])&&e(m,n,(function(){return o(d[n]())})),m}export{o as default};
//# sourceMappingURL=index.mjs.map
