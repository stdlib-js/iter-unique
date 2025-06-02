"use strict";var d=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var s=d(function(y,f){
var a=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),h=require('@stdlib/assert-is-function/dist'),p=require('@stdlib/assert-is-iterator-like/dist'),i=require('@stdlib/symbol-iterator/dist'),q=require('@stdlib/error-tools-fmtprodmsg/dist');function m(r,e){var u,t;for(u=r.length,t=0;t<u;t++)if(r[t]===e)return!0;return!1}function o(r){var e,u,t;if(!p(r))throw new TypeError(q('0Q93y',r));return u=[],e={},a(e,"next",v),a(e,"return",l),i&&h(r[i])&&a(e,i,c),e;function v(){var n;if(t)return{done:!0};for(;;){if(n=r.next(),n.done)return t=!0,n;if(n=n.value,m(u,n)===!1){u.push(n);break}}return{value:n,done:!1}}function l(n){return t=!0,arguments.length?{value:n,done:!0}:{done:!0}}function c(){return o(r[i]())}}f.exports=o
});var x=s();module.exports=x;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
