"use strict";var d=function(t,r){return function(){return r||t((r={exports:{}}).exports,r),r.exports}};var v=d(function(b,s){
var a=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),q=require('@stdlib/assert-is-function/dist'),p=require('@stdlib/assert-is-iterator-like/dist'),h=require('@stdlib/array-base-assert-contains/dist'),n=require('@stdlib/symbol-iterator/dist'),m=require('@stdlib/error-tools-fmtprodmsg/dist');function o(t){var r,u,i;if(!p(t))throw new TypeError(m('0Q93y',t));return u=[],r={},a(r,"next",f),a(r,"return",l),n&&q(t[n])&&a(r,n,c),r;function f(){var e;if(i)return{done:!0};for(;;){if(e=t.next(),e.done)return i=!0,e;if(e=e.value,h(u,e)===!1){u.push(e);break}}return{value:e,done:!1}}function l(e){return i=!0,arguments.length?{value:e,done:!0}:{done:!0}}function c(){return o(t[n]())}}s.exports=o
});var x=v();module.exports=x;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
