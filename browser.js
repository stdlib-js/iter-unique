// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.iterUnique = factory());
})(this, (function () { 'use strict';

	function getAugmentedNamespace(n) {
	  var f = n.default;
		if (typeof f == "function") {
			var a = function () {
				return f.apply(this, arguments);
			};
			a.prototype = f.prototype;
	  } else a = {};
	  Object.defineProperty(a, '__esModule', {value: true});
		Object.keys(n).forEach(function (k) {
			var d = Object.getOwnPropertyDescriptor(n, k);
			Object.defineProperty(a, k, d.get ? d : {
				enumerable: true,
				get: function () {
					return n[k];
				}
			});
		});
		return a;
	}

	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2021 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	// MAIN //

	var main$12 = ( typeof Object.defineProperty === 'function' ) ? Object.defineProperty : null;


	// EXPORTS //

	var define_property = main$12;

	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2021 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	// MODULES //

	var defineProperty$5 = define_property;


	// MAIN //

	/**
	* Tests for `Object.defineProperty` support.
	*
	* @private
	* @returns {boolean} boolean indicating if an environment has `Object.defineProperty` support
	*
	* @example
	* var bool = hasDefinePropertySupport();
	* // returns <boolean>
	*/
	function hasDefinePropertySupport$1() {
		// Test basic support...
		try {
			defineProperty$5( {}, 'x', {} );
			return true;
		} catch ( err ) { // eslint-disable-line no-unused-vars
			return false;
		}
	}


	// EXPORTS //

	var has_define_property_support = hasDefinePropertySupport$1;

	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	// MAIN //

	/**
	* Defines (or modifies) an object property.
	*
	* ## Notes
	*
	* -   Property descriptors come in two flavors: **data descriptors** and **accessor descriptors**. A data descriptor is a property that has a value, which may or may not be writable. An accessor descriptor is a property described by a getter-setter function pair. A descriptor must be one of these two flavors and cannot be both.
	*
	* @name defineProperty
	* @type {Function}
	* @param {Object} obj - object on which to define the property
	* @param {(string|symbol)} prop - property name
	* @param {Object} descriptor - property descriptor
	* @param {boolean} [descriptor.configurable=false] - boolean indicating if property descriptor can be changed and if the property can be deleted from the provided object
	* @param {boolean} [descriptor.enumerable=false] - boolean indicating if the property shows up when enumerating object properties
	* @param {boolean} [descriptor.writable=false] - boolean indicating if the value associated with the property can be changed with an assignment operator
	* @param {*} [descriptor.value] - property value
	* @param {(Function|void)} [descriptor.get=undefined] - function which serves as a getter for the property, or, if no getter, undefined. When the property is accessed, a getter function is called without arguments and with the `this` context set to the object through which the property is accessed (which may not be the object on which the property is defined due to inheritance). The return value will be used as the property value.
	* @param {(Function|void)} [descriptor.set=undefined] - function which serves as a setter for the property, or, if no setter, undefined. When assigning a property value, a setter function is called with one argument (the value being assigned to the property) and with the `this` context set to the object through which the property is assigned.
	* @throws {TypeError} first argument must be an object
	* @throws {TypeError} third argument must be an object
	* @throws {Error} property descriptor cannot have both a value and a setter and/or getter
	* @returns {Object} object with added property
	*
	* @example
	* var obj = {};
	*
	* defineProperty( obj, 'foo', {
	*     'value': 'bar'
	* });
	*
	* var str = obj.foo;
	* // returns 'bar'
	*/
	var defineProperty$4 = Object.defineProperty;


	// EXPORTS //

	var builtin$j = defineProperty$4;

	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	// VARIABLES //

	var objectProtoype = Object.prototype;
	var toStr$3 = objectProtoype.toString;
	var defineGetter = objectProtoype.__defineGetter__;
	var defineSetter = objectProtoype.__defineSetter__;
	var lookupGetter = objectProtoype.__lookupGetter__;
	var lookupSetter = objectProtoype.__lookupSetter__;


	// MAIN //

	/**
	* Defines (or modifies) an object property.
	*
	* ## Notes
	*
	* -   Property descriptors come in two flavors: **data descriptors** and **accessor descriptors**. A data descriptor is a property that has a value, which may or may not be writable. An accessor descriptor is a property described by a getter-setter function pair. A descriptor must be one of these two flavors and cannot be both.
	*
	* @param {Object} obj - object on which to define the property
	* @param {string} prop - property name
	* @param {Object} descriptor - property descriptor
	* @param {boolean} [descriptor.configurable=false] - boolean indicating if property descriptor can be changed and if the property can be deleted from the provided object
	* @param {boolean} [descriptor.enumerable=false] - boolean indicating if the property shows up when enumerating object properties
	* @param {boolean} [descriptor.writable=false] - boolean indicating if the value associated with the property can be changed with an assignment operator
	* @param {*} [descriptor.value] - property value
	* @param {(Function|void)} [descriptor.get=undefined] - function which serves as a getter for the property, or, if no getter, undefined. When the property is accessed, a getter function is called without arguments and with the `this` context set to the object through which the property is accessed (which may not be the object on which the property is defined due to inheritance). The return value will be used as the property value.
	* @param {(Function|void)} [descriptor.set=undefined] - function which serves as a setter for the property, or, if no setter, undefined. When assigning a property value, a setter function is called with one argument (the value being assigned to the property) and with the `this` context set to the object through which the property is assigned.
	* @throws {TypeError} first argument must be an object
	* @throws {TypeError} third argument must be an object
	* @throws {Error} property descriptor cannot have both a value and a setter and/or getter
	* @returns {Object} object with added property
	*
	* @example
	* var obj = {};
	*
	* defineProperty( obj, 'foo', {
	*     'value': 'bar'
	* });
	*
	* var str = obj.foo;
	* // returns 'bar'
	*/
	function defineProperty$3( obj, prop, descriptor ) {
		var prototype;
		var hasValue;
		var hasGet;
		var hasSet;

		if ( typeof obj !== 'object' || obj === null || toStr$3.call( obj ) === '[object Array]' ) {
			throw new TypeError( 'invalid argument. First argument must be an object. Value: `' + obj + '`.' );
		}
		if ( typeof descriptor !== 'object' || descriptor === null || toStr$3.call( descriptor ) === '[object Array]' ) {
			throw new TypeError( 'invalid argument. Property descriptor must be an object. Value: `' + descriptor + '`.' );
		}
		hasValue = ( 'value' in descriptor );
		if ( hasValue ) {
			if (
				lookupGetter.call( obj, prop ) ||
				lookupSetter.call( obj, prop )
			) {
				// Override `__proto__` to avoid touching inherited accessors:
				prototype = obj.__proto__;
				obj.__proto__ = objectProtoype;

				// Delete property as existing getters/setters prevent assigning value to specified property:
				delete obj[ prop ];
				obj[ prop ] = descriptor.value;

				// Restore original prototype:
				obj.__proto__ = prototype;
			} else {
				obj[ prop ] = descriptor.value;
			}
		}
		hasGet = ( 'get' in descriptor );
		hasSet = ( 'set' in descriptor );

		if ( hasValue && ( hasGet || hasSet ) ) {
			throw new Error( 'invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.' );
		}

		if ( hasGet && defineGetter ) {
			defineGetter.call( obj, prop, descriptor.get );
		}
		if ( hasSet && defineSetter ) {
			defineSetter.call( obj, prop, descriptor.set );
		}
		return obj;
	}


	// EXPORTS //

	var polyfill$B = defineProperty$3;

	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	/**
	* Define (or modify) an object property.
	*
	* @module @stdlib/utils-define-property
	*
	* @example
	* var defineProperty = require( '@stdlib/utils-define-property' );
	*
	* var obj = {};
	* defineProperty( obj, 'foo', {
	*     'value': 'bar',
	*     'writable': false,
	*     'configurable': false,
	*     'enumerable': false
	* });
	* obj.foo = 'boop'; // => throws
	*/

	// MODULES //

	var hasDefinePropertySupport = has_define_property_support;
	var builtin$i = builtin$j;
	var polyfill$A = polyfill$B;


	// MAIN //

	var defineProperty$2;
	if ( hasDefinePropertySupport() ) {
		defineProperty$2 = builtin$i;
	} else {
		defineProperty$2 = polyfill$A;
	}


	// EXPORTS //

	var lib$1m = defineProperty$2;

	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	// MODULES //

	var defineProperty$1 = lib$1m;


	// MAIN //

	/**
	* Defines a non-enumerable read-only property.
	*
	* @param {Object} obj - object on which to define the property
	* @param {(string|symbol)} prop - property name
	* @param {*} value - value to set
	*
	* @example
	* var obj = {};
	*
	* setNonEnumerableReadOnly( obj, 'foo', 'bar' );
	*
	* try {
	*     obj.foo = 'boop';
	* } catch ( err ) {
	*     console.error( err.message );
	* }
	*/
	function setNonEnumerableReadOnly$1( obj, prop, value ) {
		defineProperty$1( obj, prop, {
			'configurable': false,
			'enumerable': false,
			'writable': false,
			'value': value
		});
	}


	// EXPORTS //

	var main$11 = setNonEnumerableReadOnly$1;

	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	/**
	* Define a non-enumerable read-only property.
	*
	* @module @stdlib/utils-define-nonenumerable-read-only-property
	*
	* @example
	* var setNonEnumerableReadOnly = require( '@stdlib/utils-define-nonenumerable-read-only-property' );
	*
	* var obj = {};
	*
	* setNonEnumerableReadOnly( obj, 'foo', 'bar' );
	*
	* try {
	*     obj.foo = 'boop';
	* } catch ( err ) {
	*     console.error( err.message );
	* }
	*/

	// MODULES //

	var setNonEnumerableReadOnly = main$11;


	// EXPORTS //

	var lib$1l = setNonEnumerableReadOnly;

	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	var RE$2 = /./;


	// EXPORTS //

	var re = RE$2;

	var _rollupPluginShim2 = () => { return window; };

	var _rollupPluginShim2$1 = /*#__PURE__*/Object.freeze({
		__proto__: null,
		'default': _rollupPluginShim2
	});

	var require$$0$2 = /*@__PURE__*/getAugmentedNamespace(_rollupPluginShim2$1);

	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	// MODULES //

	var getGlobal = require$$0$2;


	// MAIN //

	var root = getGlobal();
	var nodeList$1 = root.document && root.document.childNodes;


	// EXPORTS //

	var nodelist = nodeList$1;

	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	var typedarray$1 = Int8Array; // eslint-disable-line stdlib/require-globals


	// EXPORTS //

	var typedarray_1 = typedarray$1;

	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	// MODULES //

	var RE$1 = re;
	var nodeList = nodelist;
	var typedarray = typedarray_1;


	// MAIN //

	/**
	* Checks whether a polyfill is needed when using the `typeof` operator.
	*
	* @private
	* @returns {boolean} boolean indicating whether a polyfill is needed
	*/
	function check$2() {
		if (
			// Chrome 1-12 returns 'function' for regular expression instances (see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof):
			typeof RE$1 === 'function' ||

			// Safari 8 returns 'object' for typed array and weak map constructors (underscore #1929):
			typeof typedarray === 'object' ||

			// PhantomJS 1.9 returns 'function' for `NodeList` instances (underscore #2236):
			typeof nodeList === 'function'
		) {
			return true;
		}
		return false;
	}


	// EXPORTS //

	var check_1 = check$2;

	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	// MAIN //

	/**
	* Tests for native `Symbol` support.
	*
	* @returns {boolean} boolean indicating if an environment has `Symbol` support
	*
	* @example
	* var bool = hasSymbolSupport();
	* // returns <boolean>
	*/
	function hasSymbolSupport$1() {
		return (
			typeof Symbol === 'function' &&
			typeof Symbol( 'foo' ) === 'symbol'
		);
	}


	// EXPORTS //

	var main$10 = hasSymbolSupport$1;

	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	/**
	* Test for native `Symbol` support.
	*
	* @module @stdlib/assert-has-symbol-support
	*
	* @example
	* var hasSymbolSupport = require( '@stdlib/assert-has-symbol-support' );
	*
	* var bool = hasSymbolSupport();
	* // returns <boolean>
	*/

	// MODULES //

	var hasSymbolSupport = main$10;


	// EXPORTS //

	var lib$1k = hasSymbolSupport;

	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	// MODULES //

	var hasSymbols = lib$1k;


	// VARIABLES //

	var FLG$3 = hasSymbols();


	// MAIN //

	/**
	* Tests for native `toStringTag` support.
	*
	* @returns {boolean} boolean indicating if an environment has `toStringTag` support
	*
	* @example
	* var bool = hasToStringTagSupport();
	* // returns <boolean>
	*/
	function hasToStringTagSupport$1() {
		return ( FLG$3 && typeof Symbol.toStringTag === 'symbol' );
	}


	// EXPORTS //

	var main$$ = hasToStringTagSupport$1;

	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	/**
	* Test for native `toStringTag` support.
	*
	* @module @stdlib/assert-has-tostringtag-support
	*
	* @example
	* var hasToStringTagSupport = require( '@stdlib/assert-has-tostringtag-support' );
	*
	* var bool = hasToStringTagSupport();
	* // returns <boolean>
	*/

	// MODULES //

	var hasToStringTagSupport = main$$;


	// EXPORTS //

	var lib$1j = hasToStringTagSupport;

	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	// MAIN //

	var toStr$2 = Object.prototype.toString;


	// EXPORTS //

	var tostring$1 = toStr$2;

	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	// MODULES //

	var toStr$1 = tostring$1;


	// MAIN //

	/**
	* Returns a string value indicating a specification defined classification (via the internal property `[[Class]]`) of an object.
	*
	* @param {*} v - input value
	* @returns {string} string value indicating a specification defined classification of the input value
	*
	* @example
	* var str = nativeClass( 'a' );
	* // returns '[object String]'
	*
	* @example
	* var str = nativeClass( 5 );
	* // returns '[object Number]'
	*
	* @example
	* function Beep() {
	*     return this;
	* }
	* var str = nativeClass( new Beep() );
	* // returns '[object Object]'
	*/
	function nativeClass$k( v ) {
		return toStr$1.call( v );
	}


	// EXPORTS //

	var native_class = nativeClass$k;

	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	// FUNCTIONS //

	var has = Object.prototype.hasOwnProperty;


	// MAIN //

	/**
	* Tests if an object has a specified property.
	*
	* @param {*} value - value to test
	* @param {*} property - property to test
	* @returns {boolean} boolean indicating if an object has a specified property
	*
	* @example
	* var beep = {
	*     'boop': true
	* };
	*
	* var bool = hasOwnProp( beep, 'boop' );
	* // returns true
	*
	* @example
	* var beep = {
	*     'boop': true
	* };
	*
	* var bool = hasOwnProp( beep, 'bap' );
	* // returns false
	*/
	function hasOwnProp$a( value, property ) {
		if (
			value === void 0 ||
			value === null
		) {
			return false;
		}
		return has.call( value, property );
	}


	// EXPORTS //

	var main$_ = hasOwnProp$a;

	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	/**
	* Test whether an object has a specified property.
	*
	* @module @stdlib/assert-has-own-property
	*
	* @example
	* var hasOwnProp = require( '@stdlib/assert-has-own-property' );
	*
	* var beep = {
	*     'boop': true
	* };
	*
	* var bool = hasOwnProp( beep, 'boop' );
	* // returns true
	*
	* bool = hasOwnProp( beep, 'bop' );
	* // returns false
	*/

	// MODULES //

	var hasOwnProp$9 = main$_;


	// EXPORTS //

	var lib$1i = hasOwnProp$9;

	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	// MAIN //

	var toStrTag = ( typeof Symbol === 'function' ) ? Symbol.toStringTag : '';


	// EXPORTS //

	var tostringtag = toStrTag;

	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	// MODULES //

	var hasOwnProp$8 = lib$1i;
	var toStringTag = tostringtag;
	var toStr = tostring$1;


	// MAIN //

	/**
	* Returns a string value indicating a specification defined classification of an object in environments supporting `Symbol.toStringTag`.
	*
	* @param {*} v - input value
	* @returns {string} string value indicating a specification defined classification of the input value
	*
	* @example
	* var str = nativeClass( 'a' );
	* // returns '[object String]'
	*
	* @example
	* var str = nativeClass( 5 );
	* // returns '[object Number]'
	*
	* @example
	* function Beep() {
	*     return this;
	* }
	* var str = nativeClass( new Beep() );
	* // returns '[object Object]'
	*/
	function nativeClass$j( v ) {
		var isOwn;
		var tag;
		var out;

		if ( v === null || v === void 0 ) {
			return toStr.call( v );
		}
		tag = v[ toStringTag ];
		isOwn = hasOwnProp$8( v, toStringTag );

		// Attempt to override the `toStringTag` property. For built-ins having a `Symbol.toStringTag` property (e.g., `JSON`, `Math`, etc), the `Symbol.toStringTag` property is read-only (e.g., , so we need to wrap in a `try/catch`.
		try {
			v[ toStringTag ] = void 0;
		} catch ( err ) { // eslint-disable-line no-unused-vars
			return toStr.call( v );
		}
		out = toStr.call( v );

		if ( isOwn ) {
			v[ toStringTag ] = tag;
		} else {
			delete v[ toStringTag ];
		}
		return out;
	}


	// EXPORTS //

	var polyfill$z = nativeClass$j;

	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	/**
	* Return a string value indicating a specification defined classification of an object.
	*
	* @module @stdlib/utils-native-class
	*
	* @example
	* var nativeClass = require( '@stdlib/utils-native-class' );
	*
	* var str = nativeClass( 'a' );
	* // returns '[object String]'
	*
	* str = nativeClass( 5 );
	* // returns '[object Number]'
	*
	* function Beep() {
	*     return this;
	* }
	* str = nativeClass( new Beep() );
	* // returns '[object Object]'
	*/

	// MODULES //

	var hasToStringTag$3 = lib$1j;
	var builtin$h = native_class;
	var polyfill$y = polyfill$z;


	// MAIN //

	var nativeClass$i;
	if ( hasToStringTag$3() ) {
		nativeClass$i = polyfill$y;
	} else {
		nativeClass$i = builtin$h;
	}


	// EXPORTS //

	var lib$1h = nativeClass$i;

	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2021 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	// MAIN //

	/**
	* Returns a regular expression to capture everything that is not a space immediately after the `function` keyword and before the first left parenthesis.
	*
	* @returns {RegExp} regular expression
	*
	* @example
	* var RE_FUNCTION_NAME = reFunctionName();
	*
	* function fname( fcn ) {
	*     return RE_FUNCTION_NAME.exec( fcn.toString() )[ 1 ];
	* }
	*
	* var fn = fname( Math.sqrt );
	* // returns 'sqrt'
	*
	* fn = fname( Int8Array );
	* // returns 'Int8Array'
	*
	* fn = fname( Object.prototype.toString );
	* // returns 'toString'
	*
	* fn = fname( function(){} );
	* // returns ''
	*/
	function reFunctionName$2() {
		return /^\s*function\s*([^(]*)/i;
	}


	// EXPORTS //

	var main$Z = reFunctionName$2;

	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	// MODULES //

	var reFunctionName$1 = main$Z;


	// MAIN //

	/**
	* Captures everything that is not a space immediately after the `function` keyword and before the first left parenthesis.
	*
	* Regular expression: `/^\s*function\s*([^(]*)/i`
	*
	* -   `/^\s*`
	*     -   Match zero or more spaces at beginning
	*
	* -   `function`
	*     -   Match the word `function`
	*
	* -   `\s*`
	*     -   Match zero or more spaces after the word `function`
	*
	* -   `()`
	*     -   Capture
	*
	* -   `[^(]*`
	*     -   Match anything except a left parenthesis `(` zero or more times
	*
	* -   `/i`
	*     -   ignore case
	*
	* @constant
	* @type {RegExp}
	* @default /^\s*function\s*([^(]*)/i
	*/
	var RE_FUNCTION_NAME = reFunctionName$1();


	// EXPORTS //

	var regexp$2 = RE_FUNCTION_NAME;

	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2021 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	/**
	* Regular expression to capture everything that is not a space immediately after the `function` keyword and before the first left parenthesis.
	*
	* @module @stdlib/regexp-function-name
	*
	* @example
	* var reFunctionName = require( '@stdlib/regexp-function-name' );
	* var RE_FUNCTION_NAME = reFunctionName();
	*
	* function fname( fcn ) {
	*     return RE_FUNCTION_NAME.exec( fcn.toString() )[ 1 ];
	* }
	*
	* var fn = fname( Math.sqrt );
	* // returns 'sqrt'
	*
	* fn = fname( Int8Array );
	* // returns 'Int8Array'
	*
	* fn = fname( Object.prototype.toString );
	* // returns 'toString'
	*
	* fn = fname( function(){} );
	* // returns ''
	*/

	// MODULES //

	var setReadOnly$9 = lib$1l;
	var reFunctionName = main$Z;
	var REGEXP$1 = regexp$2;


	// MAIN //

	setReadOnly$9( reFunctionName, 'REGEXP', REGEXP$1 );


	// EXPORTS //

	var lib$1g = reFunctionName;

	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	// MODULES //

	var nativeClass$h = lib$1h;


	// VARIABLES //

	var f;


	// FUNCTIONS //

	/**
	* Tests if a value is an array.
	*
	* @param {*} value - value to test
	* @returns {boolean} boolean indicating whether value is an array
	*
	* @example
	* var bool = isArray( [] );
	* // returns true
	*
	* @example
	* var bool = isArray( {} );
	* // returns false
	*/
	function isArray$7( value ) {
		return ( nativeClass$h( value ) === '[object Array]' );
	}


	// MAIN //

	if ( Array.isArray ) {
		f = Array.isArray;
	} else {
		f = isArray$7;
	}


	// EXPORTS //

	var main$Y = f;

	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	/**
	* Test if a value is an array.
	*
	* @module @stdlib/assert-is-array
	*
	* @example
	* var isArray = require( '@stdlib/assert-is-array' );
	*
	* var bool = isArray( [] );
	* // returns true
	*
	* bool = isArray( {} );
	* // returns false
	*/

	// MODULES //

	var isArray$6 = main$Y;


	// EXPORTS //

	var lib$1f = isArray$6;

	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	// MODULES //

	var isArray$5 = lib$1f;


	// MAIN //

	/**
	* Returns a function which tests if every element in an array passes a test condition.
	*
	* @param {Function} predicate - function to apply
	* @throws {TypeError} must provide a function
	* @returns {Function} an array function
	*
	* @example
	* var isOdd = require( '@stdlib/assert-is-odd' );
	*
	* var arr1 = [ 1, 3, 5, 7 ];
	* var arr2 = [ 3, 5, 8 ];
	*
	* var validate = arrayfcn( isOdd );
	*
	* var bool = validate( arr1 );
	* // returns true
	*
	* bool = validate( arr2 );
	* // returns false
	*/
	function arrayfcn$1( predicate ) {
		if ( typeof predicate !== 'function' ) {
			throw new TypeError( 'invalid argument. Must provide a function. Value: `' + predicate + '`.' );
		}
		return every;

		/**
		* Tests if every element in an array passes a test condition.
		*
		* @private
		* @param {*} value - value to test
		* @returns {boolean} boolean indicating whether a value is an array for which all elements pass a test condition
		*/
		function every( value ) {
			var len;
			var i;
			if ( !isArray$5( value ) ) {
				return false;
			}
			len = value.length;
			if ( len === 0 ) {
				return false;
			}
			for ( i = 0; i < len; i++ ) {
				if ( predicate( value[ i ] ) === false ) {
					return false;
				}
			}
			return true;
		}
	}


	// EXPORTS //

	var arrayfcn_1 = arrayfcn$1;

	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	/**
	* Return a function which tests if every element in an array passes a test condition.
	*
	* @module @stdlib/assert-tools-array-function
	*
	* @example
	* var isOdd = require( '@stdlib/assert-is-odd' );
	* var arrayfcn = require( '@stdlib/assert-tools-array-function' );
	*
	* var arr1 = [ 1, 3, 5, 7 ];
	* var arr2 = [ 3, 5, 8 ];
	*
	* var validate = arrayfcn( isOdd );
	*
	* var bool = validate( arr1 );
	* // returns true
	*
	* bool = validate( arr2 );
	* // returns false
	*/

	// MODULES //

	var arrayfcn = arrayfcn_1;


	// EXPORTS //

	var lib$1e = arrayfcn;

	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	/**
	* Tests if a value is object-like.
	*
	* @param {*} value - value to test
	* @returns {boolean} boolean indicating whether a value is object-like
	*
	* @example
	* var bool = isObjectLike( {} );
	* // returns true
	*
	* @example
	* var bool = isObjectLike( [] );
	* // returns true
	*
	* @example
	* var bool = isObjectLike( null );
	* // returns false
	*/
	function isObjectLike$3( value ) {
		return (
			value !== null &&
			typeof value === 'object'
		);
	}


	// EXPORTS //

	var main$X = isObjectLike$3;

	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	/**
	* Test if a value is object-like.
	*
	* @module @stdlib/assert-is-object-like
	*
	* @example
	* var isObjectLike = require( '@stdlib/assert-is-object-like' );
	*
	* var bool = isObjectLike( {} );
	* // returns true
	*
	* bool = isObjectLike( [] );
	* // returns true
	*
	* bool = isObjectLike( null );
	* // returns false
	*
	* @example
	* var isObjectLike = require( '@stdlib/assert-is-object-like' ).isObjectLikeArray;
	*
	* var bool = isObjectLike( [ {}, [] ] );
	* // returns true
	*
	* bool = isObjectLike( [ {}, '3.0' ] );
	* // returns false
	*/

	// MODULES //

	var setReadOnly$8 = lib$1l;
	var arrayfun = lib$1e;
	var isObjectLike$2 = main$X;


	// MAIN //

	setReadOnly$8( isObjectLike$2, 'isObjectLikeArray', arrayfun( isObjectLike$2 ) );


	// EXPORTS //

	var lib$1d = isObjectLike$2;

	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	// MODULES //

	var isObjectLike$1 = lib$1d;


	// MAIN //

	/**
	* Tests if a value is a Buffer instance.
	*
	* @param {*} value - value to validate
	* @returns {boolean} boolean indicating if a value is a Buffer instance
	*
	* @example
	* var v = isBuffer( new Buffer( 'beep' ) );
	* // returns true
	*
	* @example
	* var v = isBuffer( new Buffer( [1,2,3,4] ) );
	* // returns true
	*
	* @example
	* var v = isBuffer( {} );
	* // returns false
	*
	* @example
	* var v = isBuffer( [] );
	* // returns false
	*/
	function isBuffer$6( value ) {
		return (
			isObjectLike$1( value ) &&
			(
				// eslint-disable-next-line no-underscore-dangle
				value._isBuffer || // for envs missing Object.prototype.constructor (e.g., Safari 5-7)
				(
					value.constructor &&

					// WARNING: `typeof` is not a foolproof check, as certain envs consider RegExp and NodeList instances to be functions
					typeof value.constructor.isBuffer === 'function' &&
					value.constructor.isBuffer( value )
				)
			)
		);
	}


	// EXPORTS //

	var main$W = isBuffer$6;

	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	/**
	* Test if a value is a Buffer instance.
	*
	* @module @stdlib/assert-is-buffer
	*
	* @example
	* var isBuffer = require( '@stdlib/assert-is-buffer' );
	*
	* var v = isBuffer( new Buffer( 'beep' ) );
	* // returns true
	*
	* v = isBuffer( {} );
	* // returns false
	*/

	// MODULES //

	var isBuffer$5 = main$W;


	// EXPORTS //

	var lib$1c = isBuffer$5;

	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	// MODULES //

	var nativeClass$g = lib$1h;
	var RE = lib$1g.REGEXP;
	var isBuffer$4 = lib$1c;


	// MAIN //

	/**
	* Determines the name of a value's constructor.
	*
	* @param {*} v - input value
	* @returns {string} name of a value's constructor
	*
	* @example
	* var v = constructorName( 'a' );
	* // returns 'String'
	*
	* @example
	* var v = constructorName( 5 );
	* // returns 'Number'
	*
	* @example
	* var v = constructorName( null );
	* // returns 'Null'
	*
	* @example
	* var v = constructorName( undefined );
	* // returns 'Undefined'
	*
	* @example
	* var v = constructorName( function noop() {} );
	* // returns 'Function'
	*/
	function constructorName$1( v ) {
		var match;
		var name;
		var ctor;
		name = nativeClass$g( v ).slice( 8, -1 );
		if ( (name === 'Object' || name === 'Error') && v.constructor ) {
			ctor = v.constructor;
			if ( typeof ctor.name === 'string' ) {
				return ctor.name;
			}
			match = RE.exec( ctor.toString() );
			if ( match ) {
				return match[ 1 ];
			}
		}
		if ( isBuffer$4( v ) ) {
			return 'Buffer';
		}
		return name;
	}


	// EXPORTS //

	var main$V = constructorName$1;

	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	/**
	* Determine the name of a value's constructor.
	*
	* @module @stdlib/utils-constructor-name
	*
	* @example
	* var constructorName = require( '@stdlib/utils-constructor-name' );
	*
	* var v = constructorName( 'a' );
	* // returns 'String'
	*
	* v = constructorName( {} );
	* // returns 'Object'
	*
	* v = constructorName( true );
	* // returns 'Boolean'
	*/

	// MODULES //

	var constructorName = main$V;


	// EXPORTS //

	var lib$1b = constructorName;

	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	// MODULES //

	var ctorName$1 = lib$1b;


	// NOTES //

	/*
	* Built-in `typeof` operator behavior:
	*
	* ```text
	* typeof null => 'object'
	* typeof undefined => 'undefined'
	* typeof 'a' => 'string'
	* typeof 5 => 'number'
	* typeof NaN => 'number'
	* typeof true => 'boolean'
	* typeof false => 'boolean'
	* typeof {} => 'object'
	* typeof [] => 'object'
	* typeof function foo(){} => 'function'
	* typeof function* foo(){} => 'object'
	* typeof Symbol() => 'symbol'
	* ```
	*
	*/


	// MAIN //

	/**
	* Determines a value's type.
	*
	* @param {*} v - input value
	* @returns {string} string indicating the value's type
	*/
	function typeOf$5( v ) {
		var type;

		// Address `typeof null` => `object` (see http://wiki.ecmascript.org/doku.php?id=harmony:typeof_null):
		if ( v === null ) {
			return 'null';
		}
		type = typeof v;

		// If the `typeof` operator returned something other than `object`, we are done. Otherwise, we need to check for an internal class name or search for a constructor.
		if ( type === 'object' ) {
			return ctorName$1( v ).toLowerCase();
		}
		return type;
	}


	// EXPORTS //

	var _typeof = typeOf$5;

	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	// MODULES //

	var ctorName = lib$1b;


	// MAIN //

	/**
	* Determines a value's type.
	*
	* @param {*} v - input value
	* @returns {string} string indicating the value's type
	*/
	function typeOf$4( v ) {
		return ctorName( v ).toLowerCase();
	}


	// EXPORTS //

	var polyfill$x = typeOf$4;

	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	/**
	* Determine a value's type.
	*
	* @module @stdlib/utils-type-of
	*
	* @example
	* var typeOf = require( '@stdlib/utils-type-of' );
	*
	* var str = typeOf( 'a' );
	* // returns 'string'
	*
	* str = typeOf( 5 );
	* // returns 'number'
	*/

	// MODULES //

	var usePolyfill = check_1;
	var typeOf$3 = _typeof;
	var polyfill$w = polyfill$x;


	// MAIN //

	var main$U = ( usePolyfill() ) ? polyfill$w : typeOf$3;


	// EXPORTS //

	var lib$1a = main$U;

	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	// MODULES //

	var typeOf$2 = lib$1a;


	// MAIN //

	/**
	* Tests if a value is a function.
	*
	* @param {*} value - value to test
	* @returns {boolean} boolean indicating whether value is a function
	*
	* @example
	* function beep() {
	*     return 'beep';
	* }
	*
	* var bool = isFunction( beep );
	* // returns true
	*/
	function isFunction$7( value ) {
		// Note: cannot use `typeof` directly, as various browser engines incorrectly return `'function'` when operating on non-function objects, such as regular expressions and NodeLists.
		return ( typeOf$2( value ) === 'function' );
	}


	// EXPORTS //

	var main$T = isFunction$7;

	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	/**
	* Test if a value is a function.
	*
	* @module @stdlib/assert-is-function
	*
	* @example
	* var isFunction = require( '@stdlib/assert-is-function' );
	*
	* function beep() {
	*     return 'beep';
	* }
	*
	* var bool = isFunction( beep );
	* // returns true
	*/

	// MODULES //

	var isFunction$6 = main$T;


	// EXPORTS //

	var lib$19 = isFunction$6;

	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	// MODULES //

	var isFunction$5 = lib$19;


	// MAIN //

	/**
	* Tests if a value is iterator-like.
	*
	* @param {*} value - value to test
	* @returns {boolean} boolean indicating whether value is iterator-like
	*
	* @example
	* var it = {
	*     'next': function noop() {}
	* };
	* var bool = isIteratorLike( it );
	* // returns true
	*
	* @example
	* var bool = isIteratorLike( {} );
	* // returns false
	*
	* @example
	* var bool = isIteratorLike( null );
	* // returns false
	*/
	function isIteratorLike$1( value ) {
		var t = typeof value;
		return (
			value !== null &&
			( t === 'object' || t === 'function' ) &&
			isFunction$5( value.next )
		);
	}


	// EXPORTS //

	var main$S = isIteratorLike$1;

	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	/**
	* Test if a value is iterator-like.
	*
	* @module @stdlib/assert-is-iterator-like
	*
	* @example
	* var isIteratorLike = require( '@stdlib/assert-is-iterator-like' );
	*
	* var it = {
	*     'next': function noop() {}
	* };
	* var bool = isIteratorLike( it );
	* // returns true
	*
	* bool = isIteratorLike( {} );
	* // returns false
	*/

	// MODULES //

	var isIterator = main$S;


	// EXPORTS //

	var lib$18 = isIterator;

	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	// MODULES //

	var hasOwnProp$7 = lib$1i;


	// MAIN //

	/**
	* Tests for native `Symbol.iterator` support.
	*
	* @returns {boolean} boolean indicating if an environment has `Symbol.iterator` support
	*
	* @example
	* var bool = hasIteratorSymbolSupport();
	* // returns <boolean>
	*/
	function hasIteratorSymbolSupport$2() {
		return (
			typeof Symbol === 'function' &&
			typeof Symbol( 'foo' ) === 'symbol' &&
			hasOwnProp$7( Symbol, 'iterator' ) &&
			typeof Symbol.iterator === 'symbol'
		);
	}


	// EXPORTS //

	var main$R = hasIteratorSymbolSupport$2;

	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	/**
	* Test for native `Symbol.iterator` support.
	*
	* @module @stdlib/assert-has-iterator-symbol-support
	*
	* @example
	* var hasIteratorSymbolSupport = require( '@stdlib/assert-has-iterator-symbol-support' );
	*
	* var bool = hasIteratorSymbolSupport();
	* // returns <boolean>
	*/

	// MODULES //

	var hasIteratorSymbolSupport$1 = main$R;


	// EXPORTS //

	var lib$17 = hasIteratorSymbolSupport$1;

	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	// MODULES //

	var hasIteratorSymbolSupport = lib$17;


	// MAIN //

	/**
	* Iterator symbol.
	*
	* @name IteratorSymbol
	* @constant
	* @type {(symbol|null)}
	*
	* @example
	* function iterator() {
	*     var it;
	*     var i;
	*
	*     i = -1;
	*
	*     it = {};
	*     it.next = next;
	*     it.return = done;
	*
	*     if ( IteratorSymbol ) {
	*         it[ IteratorSymbol ] = iterator;
	*     }
	*     return it;
	*
	*     function next() {
	*         i += 1;
	*         return {
	*             'value': i,
	*             'done': false
	*         };
	*     }
	*
	*     function done( value ) {
	*         if ( arguments.length === 0 ) {
	*             return {
	*                 'done': true
	*             };
	*         }
	*         return {
	*             'value': value,
	*             'done': true
	*         };
	*     }
	* }
	*
	* var obj = iterator();
	*/
	var IteratorSymbol$1 = ( hasIteratorSymbolSupport() ) ? Symbol.iterator : null;


	// EXPORTS //

	var main$Q = IteratorSymbol$1;

	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	/**
	* Iterator symbol.
	*
	* @module @stdlib/symbol-iterator
	*
	* @example
	* var IteratorSymbol = require( '@stdlib/symbol-iterator' );
	*
	* function iterator() {
	*     var it;
	*     var i;
	*
	*     i = -1;
	*
	*     it = {};
	*     it.next = next;
	*     it.return = done;
	*
	*     if ( IteratorSymbol ) {
	*         it[ IteratorSymbol ] = iterator;
	*     }
	*     return it;
	*
	*     function next() {
	*         i += 1;
	*         return {
	*             'value': i,
	*             'done': false
	*         };
	*     }
	*
	*     function done( value ) {
	*         if ( arguments.length === 0 ) {
	*             return {
	*                 'done': true
	*             };
	*         }
	*         return {
	*             'value': value,
	*             'done': true
	*         };
	*     }
	* }
	*
	* var obj = iterator();
	*/

	// MAIN //

	var IteratorSymbol = main$Q;


	// EXPORTS //

	var lib$16 = IteratorSymbol;

	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	/**
	* Tests if a value is a string primitive.
	*
	* @param {*} value - value to test
	* @returns {boolean} boolean indicating if a value is a string primitive
	*
	* @example
	* var bool = isString( 'beep' );
	* // returns true
	*
	* @example
	* var bool = isString( new String( 'beep' ) );
	* // returns false
	*/
	function isString$9( value ) {
		return ( typeof value === 'string' );
	}


	// EXPORTS //

	var primitive$4 = isString$9;

	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	// eslint-disable-next-line stdlib/no-redeclare
	var valueOf$1 = String.prototype.valueOf; // non-generic


	// EXPORTS //

	var valueof = valueOf$1;

	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	// MODULES //

	var valueOf = valueof; // eslint-disable-line stdlib/no-redeclare


	// MAIN //

	/**
	* Attempts to extract a string value.
	*
	* @private
	* @param {*} value - value to test
	* @returns {boolean} boolean indicating if a string can be extracted
	*/
	function test$6( value ) {
		try {
			valueOf.call( value );
			return true;
		} catch ( err ) { // eslint-disable-line no-unused-vars
			return false;
		}
	}


	// EXPORTS //

	var try2valueof = test$6;

	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	// MODULES //

	var hasToStringTag$2 = lib$1j;
	var nativeClass$f = lib$1h;
	var test$5 = try2valueof;


	// VARIABLES //

	var FLG$2 = hasToStringTag$2();


	// MAIN //

	/**
	* Tests if a value is a string object.
	*
	* @param {*} value - value to test
	* @returns {boolean} boolean indicating if a value is a string object
	*
	* @example
	* var bool = isString( new String( 'beep' ) );
	* // returns true
	*
	* @example
	* var bool = isString( 'beep' );
	* // returns false
	*/
	function isString$8( value ) {
		if ( typeof value === 'object' ) {
			if ( value instanceof String ) {
				return true;
			}
			if ( FLG$2 ) {
				return test$5( value );
			}
			return ( nativeClass$f( value ) === '[object String]' );
		}
		return false;
	}


	// EXPORTS //

	var object$4 = isString$8;

	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	// MODULES //

	var isPrimitive$9 = primitive$4;
	var isObject$d = object$4;


	// MAIN //

	/**
	* Tests if a value is a string.
	*
	* @param {*} value - value to test
	* @returns {boolean} boolean indicating whether value is a string
	*
	* @example
	* var bool = isString( new String( 'beep' ) );
	* // returns true
	*
	* @example
	* var bool = isString( 'beep' );
	* // returns true
	*/
	function isString$7( value ) {
		return ( isPrimitive$9( value ) || isObject$d( value ) );
	}


	// EXPORTS //

	var main$P = isString$7;

	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	/**
	* Test if a value is a string.
	*
	* @module @stdlib/assert-is-string
	*
	* @example
	* var isString = require( '@stdlib/assert-is-string' );
	*
	* var bool = isString( 'beep' );
	* // returns true
	*
	* bool = isString( new String( 'beep' ) );
	* // returns true
	*
	* bool = isString( 5 );
	* // returns false
	*
	* @example
	* var isString = require( '@stdlib/assert-is-string' ).isObject;
	*
	* var bool = isString( new String( 'beep' ) );
	* // returns true
	*
	* bool = isString( 'beep' );
	* // returns false
	*
	* @example
	* var isString = require( '@stdlib/assert-is-string' ).isPrimitive;
	*
	* var bool = isString( 'beep' );
	* // returns true
	*
	* bool = isString( new String( 'beep' ) );
	* // returns false
	*/

	// MODULES //

	var setReadOnly$7 = lib$1l;
	var isString$6 = main$P;
	var isPrimitive$8 = primitive$4;
	var isObject$c = object$4;


	// MAIN //

	setReadOnly$7( isString$6, 'isPrimitive', isPrimitive$8 );
	setReadOnly$7( isString$6, 'isObject', isObject$c );


	// EXPORTS //

	var lib$15 = isString$6;

	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	// MODULES //

	var isString$5 = lib$15.isPrimitive;


	// VARIABLES //

	var RE_CHARS = /[-\/\\^$*+?.()|[\]{}]/g; // eslint-disable-line no-useless-escape


	// MAIN //

	/**
	* Escapes a regular expression string.
	*
	* @param {string} str - regular expression string
	* @throws {TypeError} first argument must be a string primitive
	* @returns {string} escaped string
	*
	* @example
	* var str = rescape( '[A-Z]*' );
	* // returns '\\[A\\-Z\\]\\*'
	*/
	function rescape$2( str ) {
		var len;
		var s;
		var i;

		if ( !isString$5( str ) ) {
			throw new TypeError( 'invalid argument. Must provide a regular expression string. Value: `' + str + '`.' );
		}
		// Check if the string starts with a forward slash...
		if ( str[ 0 ] === '/' ) {
			// Find the last forward slash...
			len = str.length;
			for ( i = len-1; i >= 0; i-- ) {
				if ( str[ i ] === '/' ) {
					break;
				}
			}
		}
		// If we searched the string to no avail or if the first letter is not `/`, assume that the string is not of the form `/[...]/[guimy]`:
		if ( i === void 0 || i <= 0 ) {
			return str.replace( RE_CHARS, '\\$&' );
		}
		// We need to de-construct the string...
		s = str.substring( 1, i );

		// Only escape the characters between the `/`:
		s = s.replace( RE_CHARS, '\\$&' );

		// Reassemble:
		str = str[ 0 ] + s + str.substring( i );

		return str;
	}


	// EXPORTS //

	var main$O = rescape$2;

	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	/**
	* Escape a regular expression string or pattern.
	*
	* @module @stdlib/utils-escape-regexp-string
	*
	* @example
	* var rescape = require( '@stdlib/utils-escape-regexp-string' );
	*
	* var str = rescape( '[A-Z]*' );
	* // returns '\\[A\\-Z\\]\\*'
	*/

	// MODULES //

	var rescape$1 = main$O;


	// EXPORTS //

	var lib$14 = rescape$1;

	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	var exec$1 = RegExp.prototype.exec; // non-generic


	// EXPORTS //

	var exec_1 = exec$1;

	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	// MODULES //

	var exec = exec_1;


	// MAIN //

	/**
	* Attempts to call a `RegExp` method.
	*
	* @private
	* @param {*} value - value to test
	* @returns {boolean} boolean indicating if able to call a `RegExp` method
	*/
	function test$4( value ) {
		try {
			exec.call( value );
			return true;
		} catch ( err ) { // eslint-disable-line no-unused-vars
			return false;
		}
	}


	// EXPORTS //

	var try2exec = test$4;

	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	// MODULES //

	var hasToStringTag$1 = lib$1j;
	var nativeClass$e = lib$1h;
	var test$3 = try2exec;


	// VARIABLES //

	var FLG$1 = hasToStringTag$1();


	// MAIN //

	/**
	* Tests if a value is a regular expression.
	*
	* @param {*} value - value to test
	* @returns {boolean} boolean indicating whether value is a regular expression
	*
	* @example
	* var bool = isRegExp( /\.+/ );
	* // returns true
	*
	* @example
	* var bool = isRegExp( {} );
	* // returns false
	*/
	function isRegExp$2( value ) {
		if ( typeof value === 'object' ) {
			if ( value instanceof RegExp ) {
				return true;
			}
			if ( FLG$1 ) {
				return test$3( value );
			}
			return ( nativeClass$e( value ) === '[object RegExp]' );
		}
		return false;
	}


	// EXPORTS //

	var main$N = isRegExp$2;

	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	/**
	* Test if a value is a regular expression.
	*
	* @module @stdlib/assert-is-regexp
	*
	* @example
	* var isRegExp = require( '@stdlib/assert-is-regexp' );
	*
	* var bool = isRegExp( /\.+/ );
	* // returns true
	*
	* bool = isRegExp( {} );
	* // returns false
	*/

	// MODULES //

	var isRegExp$1 = main$N;


	// EXPORTS //

	var lib$13 = isRegExp$1;

	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	// MODULES //

	var rescape = lib$14;
	var isFunction$4 = lib$19;
	var isString$4 = lib$15.isPrimitive;
	var isRegExp = lib$13;


	// MAIN //

	/**
	* Replace search occurrences with a replacement string.
	*
	* @param {string} str - input string
	* @param {(string|RegExp)} search - search expression
	* @param {(string|Function)} newval - replacement value or function
	* @throws {TypeError} first argument must be a string primitive
	* @throws {TypeError} second argument argument must be a string primitive or regular expression
	* @throws {TypeError} third argument must be a string primitive or function
	* @returns {string} new string containing replacement(s)
	*
	* @example
	* var str = 'beep';
	* var out = replace( str, 'e', 'o' );
	* // returns 'boop'
	*
	* @example
	* var str = 'Hello World';
	* var out = replace( str, /world/i, 'Mr. President' );
	* // returns 'Hello Mr. President'
	*
	* @example
	* var capitalize = require( '@stdlib/string-capitalize' );
	*
	* var str = 'Oranges and lemons say the bells of St. Clement\'s';
	*
	* function replacer( match, p1 ) {
	*     return capitalize( p1 );
	* }
	*
	* var out = replace( str, /([^\s]*)/gi, replacer);
	* // returns 'Oranges And Lemons Say The Bells Of St. Clement\'s'
	*/
	function replace$2( str, search, newval ) {
		if ( !isString$4( str ) ) {
			throw new TypeError( 'invalid argument. First argument must be a string primitive. Value: `' + str + '`.' );
		}
		if ( isString$4( search ) ) {
			search = rescape( search );
			search = new RegExp( search, 'g' );
		}
		else if ( !isRegExp( search ) ) {
			throw new TypeError( 'invalid argument. Second argument must be a string primitive or regular expression. Value: `' + search + '`.' );
		}
		if ( !isString$4( newval ) && !isFunction$4( newval ) ) {
			throw new TypeError( 'invalid argument. Third argument must be a string primitive or replacement function. Value: `' + newval + '`.' );
		}
		return str.replace( search, newval );
	}


	// EXPORTS //

	var replace_1 = replace$2;

	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	/**
	* Replace search occurrences with a replacement string.
	*
	* @module @stdlib/string-replace
	*
	* @example
	* var replace = require( '@stdlib/string-replace' );
	*
	* var str = 'beep';
	* var out = replace( str, 'e', 'o' );
	* // returns 'boop'
	*
	* str = 'Hello World';
	* out = replace( str, /world/i, 'Mr. President' );
	* // returns 'Hello Mr. President'
	*/

	// MODULES //

	var replace$1 = replace_1;


	// EXPORTS //

	var lib$12 = replace$1;

	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	/**
	* Tests if a value is a number primitive.
	*
	* @param {*} value - value to test
	* @returns {boolean} boolean indicating if a value is a number primitive
	*
	* @example
	* var bool = isNumber( 3.14 );
	* // returns true
	*
	* @example
	* var bool = isNumber( NaN );
	* // returns true
	*
	* @example
	* var bool = isNumber( new Number( 3.14 ) );
	* // returns false
	*/
	function isNumber$7( value ) {
		return ( typeof value === 'number' );
	}


	// EXPORTS //

	var primitive$3 = isNumber$7;

	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	// EXPORTS //

	var number = Number; // eslint-disable-line stdlib/require-globals

	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	/**
	* Constructor which returns a `Number` object.
	*
	* @module @stdlib/number-ctor
	*
	* @example
	* var Number = require( '@stdlib/number-ctor' );
	*
	* var v = new Number( 10.0 );
	* // returns <Number>
	*/

	// MODULES //

	var Number$4 = number;


	// EXPORTS //

	var lib$11 = Number$4;

	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	// MODULES //

	var Number$3 = lib$11;


	// MAIN //

	// eslint-disable-next-line stdlib/no-redeclare
	var toString$2 = Number$3.prototype.toString; // non-generic


	// EXPORTS //

	var tostring = toString$2;

	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	// MODULES //

	var toString$1 = tostring; // eslint-disable-line stdlib/no-redeclare


	// MAIN //

	/**
	* Attempts to serialize a value to a string.
	*
	* @private
	* @param {*} value - value to test
	* @returns {boolean} boolean indicating if a value can be serialized
	*/
	function test$2( value ) {
		try {
			toString$1.call( value );
			return true;
		} catch ( err ) { // eslint-disable-line no-unused-vars
			return false;
		}
	}


	// EXPORTS //

	var try2serialize = test$2;

	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	// MODULES //

	var hasToStringTag = lib$1j;
	var nativeClass$d = lib$1h;
	var Number$2 = lib$11;
	var test$1 = try2serialize;


	// VARIABLES //

	var FLG = hasToStringTag();


	// MAIN //

	/**
	* Tests if a value is a number object.
	*
	* @param {*} value - value to test
	* @returns {boolean} boolean indicating if a value is a number object
	*
	* @example
	* var bool = isNumber( 3.14 );
	* // returns false
	*
	* @example
	* var bool = isNumber( new Number( 3.14 ) );
	* // returns true
	*/
	function isNumber$6( value ) {
		if ( typeof value === 'object' ) {
			if ( value instanceof Number$2 ) {
				return true;
			}
			if ( FLG ) {
				return test$1( value );
			}
			return ( nativeClass$d( value ) === '[object Number]' );
		}
		return false;
	}


	// EXPORTS //

	var object$3 = isNumber$6;

	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	// MODULES //

	var isPrimitive$7 = primitive$3;
	var isObject$b = object$3;


	// MAIN //

	/**
	* Tests if a value is a number.
	*
	* @param {*} value - value to test
	* @returns {boolean} boolean indicating whether value is a number
	*
	* @example
	* var bool = isNumber( 3.14 );
	* // returns true
	*
	* @example
	* var bool = isNumber( new Number( 3.14 ) );
	* // returns true
	*
	* @example
	* var bool = isNumber( NaN );
	* // returns true
	*
	* @example
	* var bool = isNumber( null );
	* // returns false
	*/
	function isNumber$5( value ) {
		return ( isPrimitive$7( value ) || isObject$b( value ) );
	}


	// EXPORTS //

	var main$M = isNumber$5;

	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	/**
	* Test if a value is a number.
	*
	* @module @stdlib/assert-is-number
	*
	* @example
	* var isNumber = require( '@stdlib/assert-is-number' );
	*
	* var bool = isNumber( 3.14 );
	* // returns true
	*
	* bool = isNumber( new Number( 3.14 ) );
	* // returns true
	*
	* bool = isNumber( NaN );
	* // returns true
	*
	* bool = isNumber( null );
	* // returns false
	*
	* @example
	* var isNumber = require( '@stdlib/assert-is-number' ).isPrimitive;
	*
	* var bool = isNumber( 3.14 );
	* // returns true
	*
	* bool = isNumber( NaN );
	* // returns true
	*
	* bool = isNumber( new Number( 3.14 ) );
	* // returns false
	*
	* @example
	* var isNumber = require( '@stdlib/assert-is-number' ).isObject;
	*
	* var bool = isNumber( 3.14 );
	* // returns false
	*
	* bool = isNumber( new Number( 3.14 ) );
	* // returns true
	*/

	// MODULES //

	var setReadOnly$6 = lib$1l;
	var isNumber$4 = main$M;
	var isPrimitive$6 = primitive$3;
	var isObject$a = object$3;


	// MAIN //

	setReadOnly$6( isNumber$4, 'isPrimitive', isPrimitive$6 );
	setReadOnly$6( isNumber$4, 'isObject', isObject$a );


	// EXPORTS //

	var lib$10 = isNumber$4;

	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	/**
	* Double-precision floating-point positive infinity.
	*
	* @module @stdlib/constants-float64-pinf
	* @type {number}
	*
	* @example
	* var FLOAT64_PINF = require( '@stdlib/constants-float64-pinf' );
	* // returns Infinity
	*/


	// MAIN //

	/**
	* Double-precision floating-point positive infinity.
	*
	* ## Notes
	*
	* Double-precision floating-point positive infinity has the bit sequence
	*
	* ```binarystring
	* 0 11111111111 00000000000000000000 00000000000000000000000000000000
	* ```
	*
	* @constant
	* @type {number}
	* @default Number.POSITIVE_INFINITY
	* @see [IEEE 754]{@link https://en.wikipedia.org/wiki/IEEE_754-1985}
	*/
	var FLOAT64_PINF = Number.POSITIVE_INFINITY; // eslint-disable-line stdlib/require-globals


	// EXPORTS //

	var lib$$ = FLOAT64_PINF;

	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	/**
	* Double-precision floating-point negative infinity.
	*
	* @module @stdlib/constants-float64-ninf
	* @type {number}
	*
	* @example
	* var FLOAT64_NINF = require( '@stdlib/constants-float64-ninf' );
	* // returns -Infinity
	*/

	// MODULES //

	var Number$1 = lib$11;


	// MAIN //

	/**
	* Double-precision floating-point negative infinity.
	*
	* ## Notes
	*
	* Double-precision floating-point negative infinity has the bit sequence
	*
	* ```binarystring
	* 1 11111111111 00000000000000000000 00000000000000000000000000000000
	* ```
	*
	* @constant
	* @type {number}
	* @default Number.NEGATIVE_INFINITY
	* @see [IEEE 754]{@link https://en.wikipedia.org/wiki/IEEE_754-1985}
	*/
	var FLOAT64_NINF = Number$1.NEGATIVE_INFINITY;


	// EXPORTS //

	var lib$_ = FLOAT64_NINF;

	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	// TODO: implementation (?)

	/**
	* Rounds a double-precision floating-point number toward negative infinity.
	*
	* @param {number} x - input value
	* @returns {number} rounded value
	*
	* @example
	* var v = floor( -4.2 );
	* // returns -5.0
	*
	* @example
	* var v = floor( 9.99999 );
	* // returns 9.0
	*
	* @example
	* var v = floor( 0.0 );
	* // returns 0.0
	*
	* @example
	* var v = floor( NaN );
	* // returns NaN
	*/
	var floor$2 = Math.floor; // eslint-disable-line stdlib/no-builtin-math


	// EXPORTS //

	var main$L = floor$2;

	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	/**
	* Round a double-precision floating-point number toward negative infinity.
	*
	* @module @stdlib/math-base-special-floor
	*
	* @example
	* var floor = require( '@stdlib/math-base-special-floor' );
	*
	* var v = floor( -4.2 );
	* // returns -5.0
	*
	* v = floor( 9.99999 );
	* // returns 9.0
	*
	* v = floor( 0.0 );
	* // returns 0.0
	*
	* v = floor( NaN );
	* // returns NaN
	*/

	// MODULES //

	var floor$1 = main$L;


	// EXPORTS //

	var lib$Z = floor$1;

	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	// MODULES //

	var floor = lib$Z;


	// MAIN //

	/**
	* Tests if a finite double-precision floating-point number is an integer.
	*
	* @param {number} x - value to test
	* @returns {boolean} boolean indicating whether the value is an integer
	*
	* @example
	* var bool = isInteger( 1.0 );
	* // returns true
	*
	* @example
	* var bool = isInteger( 3.14 );
	* // returns false
	*/
	function isInteger$c( x ) {
		return (floor(x) === x);
	}


	// EXPORTS //

	var is_integer = isInteger$c;

	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	/**
	* Test if a finite double-precision floating-point number is an integer.
	*
	* @module @stdlib/math-base-assert-is-integer
	*
	* @example
	* var isInteger = require( '@stdlib/math-base-assert-is-integer' );
	*
	* var bool = isInteger( 1.0 );
	* // returns true
	*
	* bool = isInteger( 3.14 );
	* // returns false
	*/

	// MODULES //

	var isInteger$b = is_integer;


	// EXPORTS //

	var lib$Y = isInteger$b;

	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	// MODULES //

	var PINF$2 = lib$$;
	var NINF = lib$_;
	var isInt$2 = lib$Y;


	// MAIN //

	/**
	* Tests if a number primitive is an integer value.
	*
	* @private
	* @param {*} value - value to test
	* @returns {boolean} boolean indicating if a number primitive is an integer value
	*/
	function isInteger$a( value ) {
		return (
			value < PINF$2 &&
			value > NINF &&
			isInt$2( value )
		);
	}


	// EXPORTS //

	var integer = isInteger$a;

	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	// MODULES //

	var isNumber$3 = lib$10.isPrimitive;
	var isInt$1 = integer;


	// MAIN //

	/**
	* Tests if a value is a number primitive having an integer value.
	*
	* @param {*} value - value to test
	* @returns {boolean} boolean indicating if a value is a number primitive having an integer value
	*
	* @example
	* var bool = isInteger( -3.0 );
	* // returns true
	*
	* @example
	* var bool = isInteger( new Number( -3.0 ) );
	* // returns false
	*/
	function isInteger$9( value ) {
		return (
			isNumber$3( value ) &&
			isInt$1( value )
		);
	}


	// EXPORTS //

	var primitive$2 = isInteger$9;

	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	// MODULES //

	var isNumber$2 = lib$10.isObject;
	var isInt = integer;


	// MAIN //

	/**
	* Tests if a value is a number object having an integer value.
	*
	* @param {*} value - value to test
	* @returns {boolean} boolean indicating if a value is a number object having an integer value
	*
	* @example
	* var bool = isInteger( 3.0 );
	* // returns false
	*
	* @example
	* var bool = isInteger( new Number( 3.0 ) );
	* // returns true
	*/
	function isInteger$8( value ) {
		return (
			isNumber$2( value ) &&
			isInt( value.valueOf() )
		);
	}


	// EXPORTS //

	var object$2 = isInteger$8;

	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	// MODULES //

	var isPrimitive$5 = primitive$2;
	var isObject$9 = object$2;


	// MAIN //

	/**
	* Tests if a value is an integer.
	*
	* @param {*} value - value to test
	* @returns {boolean} boolean indicating whether value is an integer
	*
	* @example
	* var bool = isInteger( 5.0 );
	* // returns true
	*
	* @example
	* var bool = isInteger( new Number( 5.0 ) );
	* // returns true
	*
	* @example
	* var bool = isInteger( -3.14 );
	* // returns false
	*
	* @example
	* var bool = isInteger( null );
	* // returns false
	*/
	function isInteger$7( value ) {
		return ( isPrimitive$5( value ) || isObject$9( value ) );
	}


	// EXPORTS //

	var main$K = isInteger$7;

	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	/**
	* Test if a value is an integer.
	*
	* @module @stdlib/assert-is-integer
	*
	* @example
	* var isInteger = require( '@stdlib/assert-is-integer' );
	*
	* var bool = isInteger( 5.0 );
	* // returns true
	*
	* bool = isInteger( new Number( 5.0 ) );
	* // returns true
	*
	* bool = isInteger( -3.14 );
	* // returns false
	*
	* bool = isInteger( null );
	* // returns false
	*
	* @example
	* // Use interface to check for integer primitives...
	* var isInteger = require( '@stdlib/assert-is-integer' ).isPrimitive;
	*
	* var bool = isInteger( -3.0 );
	* // returns true
	*
	* bool = isInteger( new Number( -3.0 ) );
	* // returns false
	*
	* @example
	* // Use interface to check for integer objects...
	* var isInteger = require( '@stdlib/assert-is-integer' ).isObject;
	*
	* var bool = isInteger( 3.0 );
	* // returns false
	*
	* bool = isInteger( new Number( 3.0 ) );
	* // returns true
	*/

	// MODULES //

	var setReadOnly$5 = lib$1l;
	var isInteger$6 = main$K;
	var isPrimitive$4 = primitive$2;
	var isObject$8 = object$2;


	// MAIN //

	setReadOnly$5( isInteger$6, 'isPrimitive', isPrimitive$4 );
	setReadOnly$5( isInteger$6, 'isObject', isObject$8 );


	// EXPORTS //

	var lib$X = isInteger$6;

	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	// MODULES //

	var isInteger$5 = lib$X.isPrimitive;


	// MAIN //

	/**
	* Tests if a value is a number primitive having a nonnegative integer value.
	*
	* @param {*} value - value to test
	* @returns {boolean} boolean indicating if a value is a number primitive having a nonnegative integer value
	*
	* @example
	* var bool = isNonNegativeInteger( 3.0 );
	* // returns true
	*
	* @example
	* var bool = isNonNegativeInteger( new Number( 3.0 ) );
	* // returns false
	*/
	function isNonNegativeInteger$4( value ) {
		return (
			isInteger$5( value ) &&
			value >= 0
		);
	}


	// EXPORTS //

	var primitive$1 = isNonNegativeInteger$4;

	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	// MODULES //

	var isInteger$4 = lib$X.isObject;


	// MAIN //

	/**
	* Tests if a value is a number object having a nonnegative integer value.
	*
	* @param {*} value - value to test
	* @returns {boolean} boolean indicating if a value is a number object having a nonnegative integer value
	*
	* @example
	* var bool = isNonNegativeInteger( 3.0 );
	* // returns false
	*
	* @example
	* var bool = isNonNegativeInteger( new Number( 3.0 ) );
	* // returns true
	*/
	function isNonNegativeInteger$3( value ) {
		return (
			isInteger$4( value ) &&
			value.valueOf() >= 0
		);
	}


	// EXPORTS //

	var object$1 = isNonNegativeInteger$3;

	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	// MODULES //

	var isPrimitive$3 = primitive$1;
	var isObject$7 = object$1;


	// MAIN //

	/**
	* Tests if a value is a nonnegative integer.
	*
	* @param {*} value - value to test
	* @returns {boolean} boolean indicating whether value is a nonnegative integer
	*
	* @example
	* var bool = isNonNegativeInteger( 5.0 );
	* // returns true
	*
	* @example
	* var bool = isNonNegativeInteger( new Number( 5.0 ) );
	* // returns true
	*
	* @example
	* var bool = isNonNegativeInteger( -5.0 );
	* // returns false
	*
	* @example
	* var bool = isNonNegativeInteger( 3.14 );
	* // returns false
	*
	* @example
	* var bool = isNonNegativeInteger( null );
	* // returns false
	*/
	function isNonNegativeInteger$2( value ) {
		return ( isPrimitive$3( value ) || isObject$7( value ) );
	}


	// EXPORTS //

	var main$J = isNonNegativeInteger$2;

	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	/**
	* Test if a value is a nonnegative integer.
	*
	* @module @stdlib/assert-is-nonnegative-integer
	*
	* @example
	* var isNonNegativeInteger = require( '@stdlib/assert-is-nonnegative-integer' );
	*
	* var bool = isNonNegativeInteger( 5.0 );
	* // returns true
	*
	* bool = isNonNegativeInteger( new Number( 5.0 ) );
	* // returns true
	*
	* bool = isNonNegativeInteger( -5.0 );
	* // returns false
	*
	* bool = isNonNegativeInteger( 3.14 );
	* // returns false
	*
	* bool = isNonNegativeInteger( null );
	* // returns false
	*
	* @example
	* var isNonNegativeInteger = require( '@stdlib/assert-is-nonnegative-integer' ).isPrimitive;
	*
	* var bool = isNonNegativeInteger( 3.0 );
	* // returns true
	*
	* bool = isNonNegativeInteger( new Number( 3.0 ) );
	* // returns false
	*
	* @example
	* var isNonNegativeInteger = require( '@stdlib/assert-is-nonnegative-integer' ).isObject;
	*
	* var bool = isNonNegativeInteger( 3.0 );
	* // returns false
	*
	* bool = isNonNegativeInteger( new Number( 3.0 ) );
	* // returns true
	*/

	// MODULES //

	var setReadOnly$4 = lib$1l;
	var isNonNegativeInteger$1 = main$J;
	var isPrimitive$2 = primitive$1;
	var isObject$6 = object$1;


	// MAIN //

	setReadOnly$4( isNonNegativeInteger$1, 'isPrimitive', isPrimitive$2 );
	setReadOnly$4( isNonNegativeInteger$1, 'isObject', isObject$6 );


	// EXPORTS //

	var lib$W = isNonNegativeInteger$1;

	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	// MAIN //

	var getProto$4 = Object.getPrototypeOf;


	// EXPORTS //

	var native$1 = getProto$4;

	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	/**
	* Returns the value of the `__proto__` property.
	*
	* @private
	* @param {Object} obj - input object
	* @returns {*} value of `__proto__` property
	*/
	function getProto$3( obj ) {
		// eslint-disable-next-line no-proto
		return obj.__proto__;
	}


	// EXPORTS //

	var proto = getProto$3;

	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	// MODULES //

	var nativeClass$c = lib$1h;
	var getProto$2 = proto;


	// MAIN //

	/**
	* Returns the prototype of a provided object.
	*
	* @private
	* @param {Object} obj - input object
	* @returns {(Object|null)} prototype
	*/
	function getPrototypeOf$4( obj ) {
		var proto = getProto$2( obj );
		if ( proto || proto === null ) {
			return proto;
		}
		if ( nativeClass$c( obj.constructor ) === '[object Function]' ) {
			// May break if the constructor has been tampered with...
			return obj.constructor.prototype;
		}
		if ( obj instanceof Object ) {
			return Object.prototype;
		}
		// Return `null` for objects created via `Object.create( null )`. Also return `null` for cross-realm objects on browsers that lack `__proto__` support, such as IE < 11.
		return null;
	}


	// EXPORTS //

	var polyfill$v = getPrototypeOf$4;

	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	// MODULES //

	var isFunction$3 = lib$19;
	var builtin$g = native$1;
	var polyfill$u = polyfill$v;


	// MAIN //

	var getProto$1;
	if ( isFunction$3( Object.getPrototypeOf ) ) {
		getProto$1 = builtin$g;
	} else {
		getProto$1 = polyfill$u;
	}


	// EXPORTS //

	var detect$2 = getProto$1;

	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	// MODULES //

	var getProto = detect$2;


	// MAIN //

	/**
	* Returns the prototype of a provided object.
	*
	* @param {*} value - input value
	* @returns {(Object|null)} prototype
	*
	* @example
	* var proto = getPrototypeOf( {} );
	* // returns {}
	*/
	function getPrototypeOf$3( value ) {
		if (
			value === null ||
			value === void 0
		) {
			return null;
		}
		// In order to ensure consistent ES5/ES6 behavior, cast input value to an object (strings, numbers, booleans); ES5 `Object.getPrototypeOf` throws when provided primitives and ES6 `Object.getPrototypeOf` casts:
		value = Object( value );

		return getProto( value );
	}


	// EXPORTS //

	var get_prototype_of = getPrototypeOf$3;

	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	/**
	* Return the prototype of a provided object.
	*
	* @module @stdlib/utils-get-prototype-of
	*
	* @example
	* var getPrototype = require( '@stdlib/utils-get-prototype-of' );
	*
	* var proto = getPrototype( {} );
	* // returns {}
	*/

	// MODULES //

	var getPrototype = get_prototype_of;


	// EXPORTS //

	var lib$V = getPrototype;

	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	// MODULES //

	var getPrototypeOf$2 = lib$V;
	var nativeClass$b = lib$1h;


	// MAIN //

	/**
	* Tests if a value is an `Error` object.
	*
	* @param {*} value - value to test
	* @returns {boolean} boolean indicating whether a value is an `Error` object
	*
	* @example
	* var bool = isError( new Error( 'beep' ) );
	* // returns true
	*
	* @example
	* var bool = isError( {} );
	* // returns false
	*/
	function isError$2( value ) {
		if ( typeof value !== 'object' || value === null ) {
			return false;
		}
		// Check for `Error` objects from the same realm (same Node.js `vm` or same `Window` object)...
		if ( value instanceof Error ) {
			return true;
		}
		// Walk the prototype tree until we find an object having the desired native class...
		while ( value ) {
			if ( nativeClass$b( value ) === '[object Error]' ) {
				return true;
			}
			value = getPrototypeOf$2( value );
		}
		return false;
	}


	// EXPORTS //

	var main$I = isError$2;

	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	/**
	* Test if a value is an `Error` object.
	*
	* @module @stdlib/assert-is-error
	*
	* @example
	* var isError = require( '@stdlib/assert-is-error' );
	*
	* var bool = isError( new Error( 'beep' ) );
	* // returns true
	*
	* bool = isError( {} );
	* // returns false
	*/

	// MODULES //

	var isError$1 = main$I;


	// EXPORTS //

	var lib$U = isError$1;

	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2021 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	// MAIN //

	/**
	* Returns a regular expression to parse a regular expression string.
	*
	* @returns {RegExp} regular expression
	*
	* @example
	* var RE_REGEXP = reRegExp();
	*
	* var bool = RE_REGEXP.test( '/^beep$/' );
	* // returns true
	*
	* bool = RE_REGEXP.test( '' );
	* // returns false
	*/
	function reRegExp$3() {
		return /^\/((?:\\\/|[^\/])+)\/([imgy]*)$/; // eslint-disable-line no-useless-escape
	}


	// EXPORTS //

	var main$H = reRegExp$3;

	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	// MODULES //

	var reRegExp$2 = main$H;


	// MAIN //

	/**
	* Matches parts of a regular expression string.
	*
	* Regular expression: `/^\/((?:\\\/|[^\/])+)\/([imgy]*)$/`
	*
	* -   `/^\/`
	*     -   match a string that begins with a `/`
	*
	* -   `()`
	*     -   capture
	*
	* -   `(?:)+`
	*     -   capture, but do not remember, a group of characters which occur one or more times
	*
	* -   `\\\/`
	*     -   match the literal `\/`
	*
	* -   `|`
	*     -   OR
	*
	* -   `[^\/]`
	*     -   anything which is not the literal `\/`
	*
	* -   `\/`
	*     -   match the literal `/`
	*
	* -   `([imgy]*)`
	*     -   capture any characters matching `imgy` occurring zero or more times
	*
	* -   `$/`
	*     -   string end
	*
	*
	* @constant
	* @type {RegExp}
	* @default /^\/((?:\\\/|[^\/])+)\/([imgy]*)$/
	*/
	var RE_REGEXP = reRegExp$2();


	// EXPORTS //

	var regexp$1 = RE_REGEXP;

	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	/**
	* Return a regular expression to parse a regular expression string.
	*
	* @module @stdlib/regexp-regexp
	*
	* @example
	* var reRegExp = require( '@stdlib/regexp-regexp' );
	*
	* var RE_REGEXP = reRegExp();
	*
	* var bool = RE_REGEXP.test( '/^beep$/' );
	* // returns true
	*
	* bool = RE_REGEXP.test( '' );
	* // returns false
	*
	* @example
	* var reRegExp = require( '@stdlib/regexp-regexp' );
	*
	* var RE_REGEXP = reRegExp();
	*
	* var parts = RE_REGEXP.exec( '/^.*$/ig' );
	* // returns [ '/^.*$/ig', '^.*$', 'ig', 'index': 0, 'input': '/^.*$/ig' ]
	*/

	// MAIN //

	var setReadOnly$3 = lib$1l;
	var reRegExp$1 = main$H;
	var REGEXP = regexp$1;


	// MAIN //

	setReadOnly$3( reRegExp$1, 'REGEXP', REGEXP );


	// EXPORTS //

	var lib$T = reRegExp$1;


	// EXPORTS //

	lib$T = reRegExp$1;

	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	// MODULES //

	var isString$3 = lib$15.isPrimitive;
	var reRegExp = lib$T;


	// MAIN //

	/**
	* Parses a regular expression string and returns a new regular expression.
	*
	* @param {string} str - regular expression string
	* @throws {TypeError} must provide a regular expression string
	* @returns {(RegExp|null)} regular expression or null
	*
	* @example
	* var re = reFromString( '/beep/' );
	* // returns /beep/
	*/
	function reFromString$1( str ) {
		if ( !isString$3( str ) ) {
			throw new TypeError( 'invalid argument. Must provide a regular expression string. Value: `' + str + '`.' );
		}
		// Capture the regular expression pattern and any flags:
		str = reRegExp().exec( str );

		// Create a new regular expression:
		return ( str ) ? new RegExp( str[1], str[2] ) : null;
	}


	// EXPORTS //

	var from_string = reFromString$1;

	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	/**
	* Create a regular expression from a regular expression string.
	*
	* @module @stdlib/utils-regexp-from-string
	*
	* @example
	* var reFromString = require( '@stdlib/utils-regexp-from-string' );
	*
	* var re = reFromString( '/beep/' );
	* // returns /beep/
	*/

	// MODULES //

	var reFromString = from_string;


	// EXPORTS //

	var lib$S = reFromString;

	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	// MAIN //

	/**
	* Tests if a double-precision floating-point numeric value is `NaN`.
	*
	* @param {number} x - value to test
	* @returns {boolean} boolean indicating whether the value is `NaN`
	*
	* @example
	* var bool = isnan( NaN );
	* // returns true
	*
	* @example
	* var bool = isnan( 7.0 );
	* // returns false
	*/
	function isnan$8( x ) {
		return ( x !== x );
	}


	// EXPORTS //

	var main$G = isnan$8;

	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	/**
	* Test if a double-precision floating-point numeric value is `NaN`.
	*
	* @module @stdlib/math-base-assert-is-nan
	*
	* @example
	* var isnan = require( '@stdlib/math-base-assert-is-nan' );
	*
	* var bool = isnan( NaN );
	* // returns true
	*
	* bool = isnan( 7.0 );
	* // returns false
	*/

	// MODULES //

	var isnan$7 = main$G;


	// EXPORTS //

	var lib$R = isnan$7;

	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	// MODULES //

	var isNumber$1 = lib$10.isPrimitive;
	var isNan$1 = lib$R;


	// MAIN //

	/**
	* Tests if a value is a `NaN` number primitive.
	*
	* @param {*} value - value to test
	* @returns {boolean} boolean indicating if a value is a `NaN` number primitive
	*
	* @example
	* var bool = isnan( NaN );
	* // returns true
	*
	* @example
	* var bool = isnan( 3.14 );
	* // returns false
	*
	* @example
	* var bool = isnan( new Number( NaN ) );
	* // returns false
	*/
	function isnan$6( value ) {
		return (
			isNumber$1( value ) &&
			isNan$1( value )
		);
	}


	// EXPORTS //

	var primitive = isnan$6;

	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	// MODULES //

	var isNumber = lib$10.isObject;
	var isNan = lib$R;


	// MAIN //

	/**
	* Tests if a value is a number object having a value of `NaN`.
	*
	* @param {*} value - value to test
	* @returns {boolean} boolean indicating if a value is a number object having a value of `NaN`
	*
	* @example
	* var bool = isnan( NaN );
	* // returns false
	*
	* @example
	* var bool = isnan( new Number( NaN ) );
	* // returns true
	*/
	function isnan$5( value ) {
		return (
			isNumber( value ) &&
			isNan( value.valueOf() )
		);
	}


	// EXPORTS //

	var object = isnan$5;

	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	// MODULES //

	var isPrimitive$1 = primitive;
	var isObject$5 = object;


	// MAIN //

	/**
	* Tests if a value is `NaN`.
	*
	* @param {*} value - value to test
	* @returns {boolean} boolean indicating whether value is `NaN`
	*
	* @example
	* var bool = isnan( NaN );
	* // returns true
	*
	* @example
	* var bool = isnan( new Number( NaN ) );
	* // returns true
	*
	* @example
	* var bool = isnan( 3.14 );
	* // returns false
	*
	* @example
	* var bool = isnan( null );
	* // returns false
	*/
	function isnan$4( value ) {
		return ( isPrimitive$1( value ) || isObject$5( value ) );
	}


	// EXPORTS //

	var main$F = isnan$4;

	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	/**
	* Test if a value is `NaN`.
	*
	* @module @stdlib/assert-is-nan
	*
	* @example
	* var isnan = require( '@stdlib/assert-is-nan' );
	*
	* var bool = isnan( NaN );
	* // returns true
	*
	* bool = isnan( new Number( NaN ) );
	* // returns true
	*
	* bool = isnan( 3.14 );
	* // returns false
	*
	* bool = isnan( null );
	* // returns false
	*
	* @example
	* var isnan = require( '@stdlib/assert-is-nan' ).isPrimitive;
	*
	* var bool = isnan( NaN );
	* // returns true
	*
	* bool = isnan( 3.14 );
	* // returns false
	*
	* bool = isnan( new Number( NaN ) );
	* // returns false
	*
	* @example
	* var isnan = require( '@stdlib/assert-is-nan' ).isObject;
	*
	* var bool = isnan( NaN );
	* // returns false
	*
	* bool = isnan( new Number( NaN ) );
	* // returns true
	*/

	// MODULES //

	var setReadOnly$2 = lib$1l;
	var isnan$3 = main$F;
	var isPrimitive = primitive;
	var isObject$4 = object;


	// MAIN //

	setReadOnly$2( isnan$3, 'isPrimitive', isPrimitive );
	setReadOnly$2( isnan$3, 'isObject', isObject$4 );


	// EXPORTS //

	var lib$Q = isnan$3;

	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	/**
	* Maximum length of a typed array.
	*
	* @module @stdlib/constants-array-max-typed-array-length
	*
	* @example
	* var MAX_TYPED_ARRAY_LENGTH = require( '@stdlib/constants-array-max-typed-array-length' );
	* // returns 9007199254740991
	*/

	// MAIN //

	/**
	* Maximum length of a typed array.
	*
	* ```tex
	* 2^{53} - 1
	* ```
	*
	* @constant
	* @type {number}
	* @default 9007199254740991
	*/
	var MAX_TYPED_ARRAY_LENGTH = 9007199254740991;


	// EXPORTS //

	var lib$P = MAX_TYPED_ARRAY_LENGTH;

	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	// MODULES //

	var isInteger$3 = lib$Y;
	var MAX_LENGTH$1 = lib$P;


	// MAIN //

	/**
	* Tests if a value is a collection.
	*
	* @param {*} value - value to test
	* @returns {boolean} boolean indicating whether a value is a collection
	*
	* @example
	* var bool = isCollection( [] );
	* // returns true
	*
	* @example
	* var bool = isCollection( {} );
	* // returns false
	*/
	function isCollection$2( value ) {
		return (
			typeof value === 'object' &&
			value !== null &&
			typeof value.length === 'number' &&
			isInteger$3( value.length ) &&
			value.length >= 0 &&
			value.length <= MAX_LENGTH$1
		);
	}


	// EXPORTS //

	var main$E = isCollection$2;

	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	/**
	* Test if a value is a collection.
	*
	* @module @stdlib/assert-is-collection
	*
	* @example
	* var isCollection = require( '@stdlib/assert-is-collection' );
	*
	* var bool = isCollection( [] );
	* // returns true
	*
	* bool = isCollection( {} );
	* // returns false
	*/

	// MODULES //

	var isCollection$1 = main$E;


	// EXPORTS //

	var lib$O = isCollection$1;

	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	// MODULES //

	var isnan$2 = lib$Q;
	var isCollection = lib$O;
	var isString$2 = lib$15.isPrimitive;
	var isInteger$2 = lib$X.isPrimitive;


	// MAIN //

	/**
	* Returns the first index at which a given element can be found.
	*
	* @param {ArrayLike} arr - array-like object
	* @param {*} searchElement - element to find
	* @param {integer} [fromIndex] - starting index (if negative, the start index is determined relative to last element)
	* @throws {TypeError} must provide an array-like object
	* @throws {TypeError} `fromIndex` must be an integer
	* @returns {integer} index or -1
	*
	* @example
	* var arr = [ 4, 3, 2, 1 ];
	* var idx = indexOf( arr, 3 );
	* // returns 1
	*
	* @example
	* var arr = [ 4, 3, 2, 1 ];
	* var idx = indexOf( arr, 5 );
	* // returns -1
	*
	* @example
	* // Using a `fromIndex`:
	* var arr = [ 1, 2, 3, 4, 5, 2, 6 ];
	* var idx = indexOf( arr, 2, 3 );
	* // returns 5
	*
	* @example
	* // `fromIndex` which exceeds `array` length:
	* var arr = [ 1, 2, 3, 4, 2, 5 ];
	* var idx = indexOf( arr, 2, 10 );
	* // returns -1
	*
	* @example
	* // Negative `fromIndex`:
	* var arr = [ 1, 2, 3, 4, 5, 2, 6, 2 ];
	* var idx = indexOf( arr, 2, -4 );
	* // returns 5
	*
	* idx = indexOf( arr, 2, -1 );
	* // returns 7
	*
	* @example
	* // Negative `fromIndex` exceeding input `array` length:
	* var arr = [ 1, 2, 3, 4, 5, 2, 6 ];
	* var idx = indexOf( arr, 2, -10 );
	* // returns 1
	*
	* @example
	* // Array-like objects:
	* var str = 'bebop';
	* var idx = indexOf( str, 'o' );
	* // returns 3
	*/
	function indexOf$3( arr, searchElement, fromIndex ) {
		var len;
		var i;
		if ( !isCollection( arr ) && !isString$2( arr ) ) {
			throw new TypeError( 'invalid argument. First argument must be an array-like object. Value: `' + arr + '`.' );
		}
		len = arr.length;
		if ( len === 0 ) {
			return -1;
		}
		if ( arguments.length === 3 ) {
			if ( !isInteger$2( fromIndex ) ) {
				throw new TypeError( 'invalid argument. `fromIndex` must be an integer. Value: `' + fromIndex + '`.' );
			}
			if ( fromIndex >= 0 ) {
				if ( fromIndex >= len ) {
					return -1;
				}
				i = fromIndex;
			} else {
				i = len + fromIndex;
				if ( i < 0 ) {
					i = 0;
				}
			}
		} else {
			i = 0;
		}
		// Check for `NaN`...
		if ( isnan$2( searchElement ) ) {
			for ( ; i < len; i++ ) {
				if ( isnan$2( arr[i] ) ) {
					return i;
				}
			}
		} else {
			for ( ; i < len; i++ ) {
				if ( arr[ i ] === searchElement ) {
					return i;
				}
			}
		}
		return -1;
	}


	// EXPORTS //

	var index_of = indexOf$3;

	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	/**
	* Return the first index at which a given element can be found.
	*
	* @module @stdlib/utils-index-of
	*
	* @example
	* var indexOf = require( '@stdlib/utils-index-of' );
	*
	* var arr = [ 4, 3, 2, 1 ];
	* var idx = indexOf( arr, 3 );
	* // returns 1
	*
	* arr = [ 4, 3, 2, 1 ];
	* idx = indexOf( arr, 5 );
	* // returns -1
	*
	* // Using a `fromIndex`:
	* arr = [ 1, 2, 3, 4, 5, 2, 6 ];
	* idx = indexOf( arr, 2, 3 );
	* // returns 5
	*
	* // `fromIndex` which exceeds `array` length:
	* arr = [ 1, 2, 3, 4, 2, 5 ];
	* idx = indexOf( arr, 2, 10 );
	* // returns -1
	*
	* // Negative `fromIndex`:
	* arr = [ 1, 2, 3, 4, 5, 2, 6, 2 ];
	* idx = indexOf( arr, 2, -4 );
	* // returns 5
	*
	* idx = indexOf( arr, 2, -1 );
	* // returns 7
	*
	* // Negative `fromIndex` exceeding input `array` length:
	* arr = [ 1, 2, 3, 4, 5, 2, 6 ];
	* idx = indexOf( arr, 2, -10 );
	* // returns 1
	*
	* // Array-like objects:
	* var str = 'bebop';
	* idx = indexOf( str, 'o' );
	* // returns 3
	*/

	// MODULES //

	var indexOf$2 = index_of;


	// EXPORTS //

	var lib$N = indexOf$2;

	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	// MAIN //

	/**
	* Returns an array of an object's own enumerable property names.
	*
	* ## Notes
	*
	* -   In contrast to the built-in `Object.keys()`, this function returns an empty array if provided `undefined` or `null`, rather than throwing an error.
	*
	* @private
	* @param {*} value - input object
	* @returns {Array} a list of own enumerable property names
	*
	* @example
	* var obj = {
	*     'beep': 'boop',
	*     'foo': 3.14
	* };
	*
	* var k = keys( obj );
	* // e.g., returns [ 'beep', 'foo' ]
	*/
	function keys$6( value ) {
		return Object.keys( Object( value ) );
	}


	// EXPORTS //

	var builtin$f = keys$6;

	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	// MODULES //

	var keys$5 = builtin$f;


	// FUNCTIONS //

	/**
	* Tests the built-in `Object.keys()` implementation when provided `arguments`.
	*
	* @private
	* @returns {boolean} boolean indicating whether the built-in implementation returns the expected number of keys
	*/
	function test() {
		return ( keys$5( arguments ) || '' ).length !== 2;
	}


	// MAIN //

	/**
	* Tests whether the built-in `Object.keys()` implementation supports providing `arguments` as an input value.
	*
	* ## Notes
	*
	* -   Safari 5.0 does **not** support `arguments` as an input value.
	*
	* @private
	* @returns {boolean} boolean indicating whether a built-in implementation supports `arguments`
	*/
	function check$1() {
		return test( 1, 2 );
	}


	// EXPORTS //

	var has_arguments_bug = check$1;

	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	// MAIN //

	var bool$9 = ( typeof Object.keys !== 'undefined' );


	// EXPORTS //

	var has_builtin$2 = bool$9;

	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	// MODULES //

	var nativeClass$a = lib$1h;


	// MAIN //

	/**
	* Tests whether a value is an `arguments` object.
	*
	* @private
	* @param {*} value - value to test
	* @returns {boolean} boolean indicating whether a value is an `arguments` object
	*
	* @example
	* function foo() {
	*     return arguments;
	* }
	*
	* var bool = isArguments( foo() );
	* // returns true
	*
	* @example
	* var bool = isArguments( [] );
	* // returns false
	*/
	function isArguments$5( value ) {
		return ( nativeClass$a( value ) === '[object Arguments]' );
	}


	// EXPORTS //

	var main$D = isArguments$5;

	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	// MODULES //

	var isArguments$4 = main$D;


	// VARIABLES //

	var bool$8;


	// FUNCTIONS //

	/**
	* Detects whether an environment returns the expected internal class of the `arguments` object.
	*
	* @private
	* @returns {boolean} boolean indicating whether an environment behaves as expected
	*
	* @example
	* var bool = detect();
	* // returns <boolean>
	*/
	function detect$1() {
		return isArguments$4( arguments );
	}


	// MAIN //

	bool$8 = detect$1();


	// EXPORTS //

	var detect_1 = bool$8;

	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	// MAIN //

	/**
	* Tests if an object's own property is enumerable.
	*
	* @private
	* @name isEnumerableProperty
	* @type {Function}
	* @param {*} value - value to test
	* @param {*} property - property to test
	* @returns {boolean} boolean indicating if an object property is enumerable
	*
	* @example
	* var beep = {
	*     'boop': true
	* };
	*
	* var bool = isEnumerableProperty( beep, 'boop' );
	* // returns true
	*
	* @example
	* var beep = {
	*     'boop': true
	* };
	*
	* var bool = isEnumerableProperty( beep, 'hasOwnProperty' );
	* // returns false
	*/
	var isEnumerableProperty$5 = Object.prototype.propertyIsEnumerable;


	// EXPORTS //

	var native = isEnumerableProperty$5;

	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	// MODULES //

	var isEnum$1 = native;


	// VARIABLES //

	var bool$7;


	// FUNCTIONS //

	/**
	* Detects whether an environment has a bug where String indices are not detected as "enumerable" properties. Observed in Node v0.10.
	*
	* @private
	* @returns {boolean} boolean indicating whether an environment has the bug
	*/
	function detect() {
		return !isEnum$1.call( 'beep', '0' );
	}


	// MAIN //

	bool$7 = detect();


	// EXPORTS //

	var has_string_enumerability_bug = bool$7;

	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	// MODULES //

	var isString$1 = lib$15;
	var isnan$1 = lib$Q.isPrimitive;
	var isInteger$1 = lib$X.isPrimitive;
	var isEnum = native;
	var hasStringEnumBug = has_string_enumerability_bug;


	// MAIN //

	/**
	* Tests if an object's own property is enumerable.
	*
	* @param {*} value - value to test
	* @param {*} property - property to test
	* @returns {boolean} boolean indicating if an object property is enumerable
	*
	* @example
	* var beep = {
	*     'boop': true
	* };
	*
	* var bool = isEnumerableProperty( beep, 'boop' );
	* // returns true
	*
	* @example
	* var beep = {
	*     'boop': true
	* };
	*
	* var bool = isEnumerableProperty( beep, 'hasOwnProperty' );
	* // returns false
	*/
	function isEnumerableProperty$4( value, property ) {
		var bool;
		if (
			value === void 0 ||
			value === null
		) {
			return false;
		}
		bool = isEnum.call( value, property );
		if ( !bool && hasStringEnumBug && isString$1( value ) ) {
			// Note: we only check for indices, as properties attached to a `String` object are properly detected as enumerable above.
			property = +property;
			return (
				!isnan$1( property ) &&
				isInteger$1( property ) &&
				property >= 0 &&
				property < value.length
			);
		}
		return bool;
	}


	// EXPORTS //

	var main$C = isEnumerableProperty$4;

	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	/**
	* Test whether an object's own property is enumerable.
	*
	* @module @stdlib/assert-is-enumerable-property
	*
	* @example
	* var isEnumerableProperty = require( '@stdlib/assert-is-enumerable-property' );
	*
	* var beep = {
	*     'boop': true
	* };
	*
	* var bool = isEnumerableProperty( beep, 'boop' );
	* // returns true
	*
	* bool = isEnumerableProperty( beep, 'hasOwnProperty' );
	* // returns false
	*/

	// MODULES //

	var isEnumerableProperty$3 = main$C;


	// EXPORTS //

	var lib$M = isEnumerableProperty$3;

	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	/**
	* Maximum unsigned 32-bit integer.
	*
	* @module @stdlib/constants-uint32-max
	* @type {uinteger32}
	*
	* @example
	* var UINT32_MAX = require( '@stdlib/constants-uint32-max' );
	* // returns 4294967295
	*/


	// MAIN //

	/**
	* Maximum unsigned 32-bit integer.
	*
	* ## Notes
	*
	* The number has the value
	*
	* ```tex
	* 2^{32} - 1
	* ```
	*
	* which corresponds to the bit sequence
	*
	* ```binarystring
	* 11111111111111111111111111111111
	* ```
	*
	* @constant
	* @type {uinteger32}
	* @default 4294967295
	*/
	var UINT32_MAX$1 = 4294967295;


	// EXPORTS //

	var lib$L = UINT32_MAX$1;

	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	// MODULES //

	var hasOwnProp$6 = lib$1i;
	var isEnumerableProperty$2 = lib$M;
	var isArray$4 = lib$1f;
	var isInteger = lib$Y;
	var MAX_LENGTH = lib$L;


	// MAIN //

	/**
	* Tests whether a value is an `arguments` object.
	*
	* @private
	* @param {*} value - value to test
	* @returns {boolean} boolean indicating whether a value is an `arguments` object
	*
	* @example
	* function foo() {
	*     return arguments;
	* }
	*
	* var bool = isArguments( foo() );
	* // returns true
	*
	* @example
	* var bool = isArguments( [] );
	* // returns false
	*/
	function isArguments$3( value ) {
		return (
			value !== null &&
			typeof value === 'object' &&
			!isArray$4( value ) &&
			typeof value.length === 'number' &&
			isInteger( value.length ) &&
			value.length >= 0 &&
			value.length <= MAX_LENGTH &&
			hasOwnProp$6( value, 'callee' ) &&
			!isEnumerableProperty$2( value, 'callee' )
		);
	}


	// EXPORTS //

	var polyfill$t = isArguments$3;

	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	/**
	* Test if a value is an `arguments` object.
	*
	* @module @stdlib/assert-is-arguments
	*
	* @example
	* var isArguments = require( '@stdlib/assert-is-arguments' );
	*
	* function foo() {
	*     return arguments;
	* }
	*
	* var bool = isArguments( foo() );
	* // returns true
	*
	* bool = isArguments( [] );
	* // returns false
	*/

	// MODULES //

	var hasArgumentsClass = detect_1;
	var main$B = main$D;
	var polyfill$s = polyfill$t;


	// MAIN //

	var isArguments$2;
	if ( hasArgumentsClass ) {
		isArguments$2 = main$B;
	} else {
		isArguments$2 = polyfill$s;
	}


	// EXPORTS //

	var lib$K = isArguments$2;

	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	// MODULES //

	var isArguments$1 = lib$K;
	var builtin$e = builtin$f;


	// VARIABLES //

	var slice = Array.prototype.slice;


	// MAIN //

	/**
	* Returns an array of an object's own enumerable property names.
	*
	* @private
	* @param {*} value - input object
	* @returns {Array} a list of own enumerable property names
	*
	* @example
	* var obj = {
	*     'beep': 'boop',
	*     'foo': 3.14
	* };
	*
	* var k = keys( obj );
	* // e.g., returns [ 'beep', 'foo' ]
	*/
	function keys$4( value ) {
		if ( isArguments$1( value ) ) {
			return builtin$e( slice.call( value ) );
		}
		return builtin$e( value );
	}


	// EXPORTS //

	var builtin_wrapper = keys$4;

	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	/**
	* No operation.
	*
	* @example
	* noop();
	* // ...does nothing.
	*/
	function noop$2() {
		// Empty function...
	}


	// EXPORTS //

	var noop_1 = noop$2;

	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	/**
	* No operation.
	*
	* @module @stdlib/utils-noop
	*
	* @example
	* var noop = require( '@stdlib/utils-noop' );
	*
	* noop();
	* // ...does nothing.
	*/

	// MODULES //

	var noop$1 = noop_1;


	// EXPORTS //

	var lib$J = noop$1;

	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	// MODULES //

	var isEnumerableProperty$1 = lib$M;
	var noop = lib$J;


	// MAIN //

	// Note: certain environments treat an object's prototype as enumerable, which, as a matter of convention, it shouldn't be...
	var bool$6 = isEnumerableProperty$1( noop, 'prototype' );


	// EXPORTS //

	var has_enumerable_prototype_bug = bool$6;

	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	// MODULES //

	var isEnumerableProperty = lib$M;


	// VARIABLES //

	var obj = {
		'toString': null
	};


	// MAIN //

	// Note: certain environments don't allow enumeration of overwritten properties which are considered non-enumerable...
	var bool$5 = !isEnumerableProperty( obj, 'toString' );


	// EXPORTS //

	var has_non_enumerable_properties_bug = bool$5;

	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	// MAIN //

	/**
	* Tests whether a value equals the prototype of its constructor.
	*
	* @private
	* @param {*} value - value to test
	* @returns {boolean} boolean indicating whether a value equals the prototype of its constructor
	*/
	function isConstructorPrototype$3( value ) {
		return ( value.constructor && value.constructor.prototype === value );
	}


	// EXPORTS //

	var is_constructor_prototype = isConstructorPrototype$3;

	var require$$4 = ["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"];

	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	// MAIN //

	var w = ( typeof window === 'undefined' ) ? void 0 : window;


	// EXPORTS //

	var window_1 = w;

	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	// MODULES //

	var hasOwnProp$5 = lib$1i;
	var indexOf$1 = lib$N;
	var typeOf$1 = lib$1a;
	var isConstructorPrototype$2 = is_constructor_prototype;
	var EXCLUDED_KEYS = require$$4;
	var win = window_1;


	// VARIABLES //

	var bool$4;


	// FUNCTIONS //

	/**
	* Determines whether an environment throws when comparing to the prototype of a value's constructor (e.g., [IE9][1]).
	*
	* [1]: https://stackoverflow.com/questions/7688070/why-is-comparing-the-constructor-property-of-two-windows-unreliable
	*
	* @private
	* @returns {boolean} boolean indicating whether an environment is buggy
	*/
	function check() {
		var k;
		if ( typeOf$1( win ) === 'undefined' ) {
			return false;
		}
		for ( k in win ) { // eslint-disable-line guard-for-in
			try {
				if (
					indexOf$1( EXCLUDED_KEYS, k ) === -1 &&
					hasOwnProp$5( win, k ) &&
					win[ k ] !== null &&
					typeOf$1( win[ k ] ) === 'object'
				) {
					isConstructorPrototype$2( win[ k ] );
				}
			} catch ( err ) { // eslint-disable-line no-unused-vars
				return true;
			}
		}
		return false;
	}


	// MAIN //

	bool$4 = check();


	// EXPORTS //

	var has_automation_equality_bug = bool$4;

	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	// MAIN //

	var bool$3 = ( typeof window !== 'undefined' );


	// EXPORTS //

	var has_window = bool$3;

	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	// MODULES //

	var hasAutomationEqualityBug = has_automation_equality_bug;
	var isConstructorPrototype$1 = is_constructor_prototype;
	var HAS_WINDOW = has_window;


	// MAIN //

	/**
	* Wraps the test for constructor prototype equality to accommodate buggy environments (e.g., environments which throw when testing equality).
	*
	* @private
	* @param {*} value - value to test
	* @returns {boolean} boolean indicating whether a value equals the prototype of its constructor
	*/
	function wrapper$1( value ) {
		if ( HAS_WINDOW === false && !hasAutomationEqualityBug ) {
			return isConstructorPrototype$1( value );
		}
		try {
			return isConstructorPrototype$1( value );
		} catch ( error ) { // eslint-disable-line no-unused-vars
			return false;
		}
	}


	// EXPORTS //

	var is_constructor_prototype_wrapper = wrapper$1;

	var require$$6 = ["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];

	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	// MODULES //

	var isObjectLike = lib$1d;
	var hasOwnProp$4 = lib$1i;
	var isArguments = lib$K;
	var HAS_ENUM_PROTO_BUG = has_enumerable_prototype_bug;
	var HAS_NON_ENUM_PROPS_BUG = has_non_enumerable_properties_bug;
	var isConstructorPrototype = is_constructor_prototype_wrapper;
	var NON_ENUMERABLE = require$$6;


	// MAIN //

	/**
	* Returns an array of an object's own enumerable property names.
	*
	* @private
	* @param {*} value - input object
	* @returns {Array} a list of own enumerable property names
	*
	* @example
	* var obj = {
	*     'beep': 'boop',
	*     'foo': 3.14
	* };
	*
	* var k = keys( obj );
	* // e.g., returns [ 'beep', 'foo' ]
	*/
	function keys$3( value ) {
		var skipConstructor;
		var skipPrototype;
		var isFcn;
		var out;
		var k;
		var p;
		var i;

		out = [];
		if ( isArguments( value ) ) {
			// Account for environments which treat `arguments` differently...
			for ( i = 0; i < value.length; i++ ) {
				out.push( i.toString() );
			}
			// Note: yes, we are precluding the `arguments` array-like object from having other enumerable properties; however, this should (1) be very rare and (2) not be encouraged (e.g., doing something like `arguments.a = 'b'`; in certain engines directly manipulating the `arguments` value results in automatic de-optimization).
			return out;
		}
		if ( typeof value === 'string' ) {
			// Account for environments which do not treat string character indices as "own" properties...
			if ( value.length > 0 && !hasOwnProp$4( value, '0' ) ) {
				for ( i = 0; i < value.length; i++ ) {
					out.push( i.toString() );
				}
			}
		} else {
			isFcn = ( typeof value === 'function' );
			if ( isFcn === false && !isObjectLike( value ) ) {
				return out;
			}
			skipPrototype = ( HAS_ENUM_PROTO_BUG && isFcn );
		}
		for ( k in value ) {
			if ( !( skipPrototype && k === 'prototype' ) && hasOwnProp$4( value, k ) ) {
				out.push( String( k ) );
			}
		}
		if ( HAS_NON_ENUM_PROPS_BUG ) {
			skipConstructor = isConstructorPrototype( value );
			for ( i = 0; i < NON_ENUMERABLE.length; i++ ) {
				p = NON_ENUMERABLE[ i ];
				if ( !( skipConstructor && p === 'constructor' ) && hasOwnProp$4( value, p ) ) {
					out.push( String( p ) );
				}
			}
		}
		return out;
	}


	// EXPORTS //

	var polyfill$r = keys$3;

	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	// MODULES //

	var hasArgumentsBug = has_arguments_bug;
	var HAS_BUILTIN$2 = has_builtin$2;
	var builtin$d = builtin$f;
	var wrapper = builtin_wrapper;
	var polyfill$q = polyfill$r;


	// MAIN //

	/**
	* Returns an array of an object's own enumerable property names.
	*
	* @name keys
	* @type {Function}
	* @param {*} value - input object
	* @returns {Array} a list of own enumerable property names
	*
	* @example
	* var obj = {
	*     'beep': 'boop',
	*     'foo': 3.14
	* };
	*
	* var k = keys( obj );
	* // e.g., returns [ 'beep', 'foo' ]
	*/
	var keys$2;
	if ( HAS_BUILTIN$2 ) {
		if ( hasArgumentsBug() ) {
			keys$2 = wrapper;
		} else {
			keys$2 = builtin$d;
		}
	} else {
		keys$2 = polyfill$q;
	}


	// EXPORTS //

	var main$A = keys$2;

	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	/**
	* Return an array of an object's own enumerable property names.
	*
	* @module @stdlib/utils-keys
	*
	* @example
	* var keys = require( '@stdlib/utils-keys' );
	*
	* var obj = {
	*     'beep': 'boop',
	*     'foo': 3.14
	* };
	*
	* var k = keys( obj );
	* // e.g., returns [ 'beep', 'foo' ]
	*/

	// MODULES //

	var keys$1 = main$A;


	// EXPORTS //

	var lib$I = keys$1;

	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	// MAIN //

	var bool$2 = ( typeof Object.getOwnPropertyNames !== 'undefined' );


	// EXPORTS //

	var has_builtin$1 = bool$2;

	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	// VARIABLES //

	var propertyNames$1 = Object.getOwnPropertyNames;


	// MAIN //

	/**
	* Returns an array of an object's own enumerable and non-enumerable property names.
	*
	* ## Notes
	*
	* -   In contrast to the built-in `Object.getOwnPropertyNames()`, this function returns an empty array if provided `undefined` or `null`, rather than throwing an error.
	*
	* @private
	* @param {*} value - input object
	* @returns {Array} a list of own property names
	*
	* @example
	* var obj = {
	*     'beep': 'boop',
	*     'foo': 3.14
	* };
	*
	* var keys = getOwnPropertyNames( obj );
	* // e.g., returns [ 'beep', 'foo' ]
	*/
	function getOwnPropertyNames$1( value ) {
		return propertyNames$1( Object( value ) );
	}


	// EXPORTS //

	var builtin$c = getOwnPropertyNames$1;

	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	// MODULES //

	var keys = lib$I;


	// MAIN //

	/**
	* Returns an array of an object's own enumerable and non-enumerable property names.
	*
	* ## Notes
	*
	* -   In contrast to the built-in `Object.getOwnPropertyNames()`, this function returns an empty array if provided `undefined` or `null`, rather than throwing an error.
	* -   In environments lacking support for `Object.getOwnPropertyNames()`, property descriptors are unavailable, and thus all properties can be safely assumed to be enumerable. Hence, we can defer to calling `Object.keys`, which retrieves all own enumerable property names.
	*
	* @private
	* @param {*} value - input object
	* @returns {Array} a list of own property names
	*
	* @example
	* var obj = {
	*     'beep': 'boop',
	*     'foo': 3.14
	* };
	*
	* var keys = getOwnPropertyNames( obj );
	* // e.g., returns [ 'beep', 'foo' ]
	*/
	function getOwnPropertyNames( value ) {
		return keys( Object( value ) );
	}


	// EXPORTS //

	var polyfill$p = getOwnPropertyNames;

	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	/**
	* Return an array of an object's own enumerable and non-enumerable property names.
	*
	* @module @stdlib/utils-property-names
	*
	* @example
	* var getOwnPropertyNames = require( '@stdlib/utils-property-names' );
	*
	* var keys = getOwnPropertyNames({
	*   'foo': 'bar',
	*   'beep': 'boop'
	* });
	* // e.g., returns [ 'foo', 'beep' ]
	*/

	// MODULES //

	var HAS_BUILTIN$1 = has_builtin$1;
	var builtin$b = builtin$c;
	var polyfill$o = polyfill$p;


	// MAIN //

	var main$z;
	if ( HAS_BUILTIN$1 ) {
		main$z = builtin$b;
	} else {
		main$z = polyfill$o;
	}


	// EXPORTS //

	var lib$H = main$z;

	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	// MAIN //

	var bool$1 = ( typeof Object.getOwnPropertyDescriptor !== 'undefined' );


	// EXPORTS //

	var has_builtin = bool$1;

	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	// VARIABLES //

	var propertyDescriptor$1 = Object.getOwnPropertyDescriptor;


	// MAIN //

	/**
	* Returns a property descriptor for an object's own property.
	*
	* ## Notes
	*
	* -   In contrast to the built-in `Object.getOwnPropertyDescriptor()`, this function returns `null` if provided `undefined` or `null`, rather than throwing an error.
	* -   In contrast to the built-in `Object.getOwnPropertyDescriptor()`, this function returns `null` if an object does not have a provided property, rather than `undefined`.
	*
	* @private
	* @param {*} value - input object
	* @param {(string|symbol)} property - property
	* @returns {(Object|null)} property descriptor or null
	*
	* @example
	* var obj = {
	*     'beep': 'boop',
	*     'foo': 3.14
	* };
	*
	* var desc = getOwnPropertyDescriptor( obj, 'foo' );
	* // returns {'configurable':true,'enumerable':true,'writable':true,'value':3.14}
	*/
	function getOwnPropertyDescriptor$1( value, property ) {
		var desc;
		if ( value === null || value === void 0 ) {
			return null;
		}
		desc = propertyDescriptor$1( value, property );
		return ( desc === void 0 ) ? null : desc;
	}


	// EXPORTS //

	var builtin$a = getOwnPropertyDescriptor$1;

	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	// MODULES //

	var hasOwnProp$3 = lib$1i;


	// MAIN //

	/**
	* Returns a property descriptor for an object's own property.
	*
	* ## Notes
	*
	* -   In contrast to the built-in `Object.getOwnPropertyDescriptor()`, this function returns `null` if provided `undefined` or `null`, rather than throwing an error.
	* -   In contrast to the built-in `Object.getOwnPropertyDescriptor()`, this function returns `null` if an object does not have a provided property, rather than `undefined`.
	* -   In environments lacking `Object.getOwnPropertyDescriptor()` support, property descriptors do not exist. In non-supporting environment, if an object has a provided property, this function returns a descriptor object equivalent to that returned in a supporting environment; otherwise, the function returns `null`.
	*
	* @private
	* @param {*} value - input object
	* @param {(string|symbol)} property - property
	* @returns {(Object|null)} property descriptor or null
	*
	* @example
	* var obj = {
	*     'beep': 'boop',
	*     'foo': 3.14
	* };
	*
	* var desc = getOwnPropertyDescriptor( obj, 'foo' );
	* // returns {'configurable':true,'enumerable':true,'writable':true,'value':3.14}
	*/
	function getOwnPropertyDescriptor( value, property ) {
		if ( hasOwnProp$3( value, property ) ) {
			return {
				'configurable': true,
				'enumerable': true,
				'writable': true,
				'value': value[ property ]
			};
		}
		return null;
	}


	// EXPORTS //

	var polyfill$n = getOwnPropertyDescriptor;

	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	/**
	* Return a property descriptor for an object's own property.
	*
	* @module @stdlib/utils-property-descriptor
	*
	* @example
	* var getOwnPropertyDescriptor = require( '@stdlib/utils-property-descriptor' );
	*
	* var obj = {
	*   'foo': 'bar',
	*   'beep': 'boop'
	* };
	*
	* var keys = getOwnPropertyDescriptor( obj, 'foo' );
	* // returns {'configurable':true,'enumerable':true,'writable':true,'value':'bar'}
	*/

	// MODULES //

	var HAS_BUILTIN = has_builtin;
	var builtin$9 = builtin$a;
	var polyfill$m = polyfill$n;


	// MAIN //

	var main$y;
	if ( HAS_BUILTIN ) {
		main$y = builtin$9;
	} else {
		main$y = polyfill$m;
	}


	// EXPORTS //

	var lib$G = main$y;

	var _rollupPluginShim1 = () => false;

	var _rollupPluginShim1$1 = /*#__PURE__*/Object.freeze({
		__proto__: null,
		'default': _rollupPluginShim1
	});

	var require$$0$1 = /*@__PURE__*/getAugmentedNamespace(_rollupPluginShim1$1);

	var global$1 = (typeof global !== "undefined" ? global :
	  typeof self !== "undefined" ? self :
	  typeof window !== "undefined" ? window : {});

	var lookup = [];
	var revLookup = [];
	var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array;
	var inited = false;
	function init () {
	  inited = true;
	  var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
	  for (var i = 0, len = code.length; i < len; ++i) {
	    lookup[i] = code[i];
	    revLookup[code.charCodeAt(i)] = i;
	  }

	  revLookup['-'.charCodeAt(0)] = 62;
	  revLookup['_'.charCodeAt(0)] = 63;
	}

	function toByteArray (b64) {
	  if (!inited) {
	    init();
	  }
	  var i, j, l, tmp, placeHolders, arr;
	  var len = b64.length;

	  if (len % 4 > 0) {
	    throw new Error('Invalid string. Length must be a multiple of 4')
	  }

	  // the number of equal signs (place holders)
	  // if there are two placeholders, than the two characters before it
	  // represent one byte
	  // if there is only one, then the three characters before it represent 2 bytes
	  // this is just a cheap hack to not do indexOf twice
	  placeHolders = b64[len - 2] === '=' ? 2 : b64[len - 1] === '=' ? 1 : 0;

	  // base64 is 4/3 + up to two characters of the original data
	  arr = new Arr(len * 3 / 4 - placeHolders);

	  // if there are placeholders, only get up to the last complete 4 chars
	  l = placeHolders > 0 ? len - 4 : len;

	  var L = 0;

	  for (i = 0, j = 0; i < l; i += 4, j += 3) {
	    tmp = (revLookup[b64.charCodeAt(i)] << 18) | (revLookup[b64.charCodeAt(i + 1)] << 12) | (revLookup[b64.charCodeAt(i + 2)] << 6) | revLookup[b64.charCodeAt(i + 3)];
	    arr[L++] = (tmp >> 16) & 0xFF;
	    arr[L++] = (tmp >> 8) & 0xFF;
	    arr[L++] = tmp & 0xFF;
	  }

	  if (placeHolders === 2) {
	    tmp = (revLookup[b64.charCodeAt(i)] << 2) | (revLookup[b64.charCodeAt(i + 1)] >> 4);
	    arr[L++] = tmp & 0xFF;
	  } else if (placeHolders === 1) {
	    tmp = (revLookup[b64.charCodeAt(i)] << 10) | (revLookup[b64.charCodeAt(i + 1)] << 4) | (revLookup[b64.charCodeAt(i + 2)] >> 2);
	    arr[L++] = (tmp >> 8) & 0xFF;
	    arr[L++] = tmp & 0xFF;
	  }

	  return arr
	}

	function tripletToBase64 (num) {
	  return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F]
	}

	function encodeChunk (uint8, start, end) {
	  var tmp;
	  var output = [];
	  for (var i = start; i < end; i += 3) {
	    tmp = (uint8[i] << 16) + (uint8[i + 1] << 8) + (uint8[i + 2]);
	    output.push(tripletToBase64(tmp));
	  }
	  return output.join('')
	}

	function fromByteArray (uint8) {
	  if (!inited) {
	    init();
	  }
	  var tmp;
	  var len = uint8.length;
	  var extraBytes = len % 3; // if we have 1 byte left, pad 2 bytes
	  var output = '';
	  var parts = [];
	  var maxChunkLength = 16383; // must be multiple of 3

	  // go through the array every three bytes, we'll deal with trailing stuff later
	  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
	    parts.push(encodeChunk(uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)));
	  }

	  // pad the end with zeros, but make sure to not forget the extra bytes
	  if (extraBytes === 1) {
	    tmp = uint8[len - 1];
	    output += lookup[tmp >> 2];
	    output += lookup[(tmp << 4) & 0x3F];
	    output += '==';
	  } else if (extraBytes === 2) {
	    tmp = (uint8[len - 2] << 8) + (uint8[len - 1]);
	    output += lookup[tmp >> 10];
	    output += lookup[(tmp >> 4) & 0x3F];
	    output += lookup[(tmp << 2) & 0x3F];
	    output += '=';
	  }

	  parts.push(output);

	  return parts.join('')
	}

	function read (buffer, offset, isLE, mLen, nBytes) {
	  var e, m;
	  var eLen = nBytes * 8 - mLen - 1;
	  var eMax = (1 << eLen) - 1;
	  var eBias = eMax >> 1;
	  var nBits = -7;
	  var i = isLE ? (nBytes - 1) : 0;
	  var d = isLE ? -1 : 1;
	  var s = buffer[offset + i];

	  i += d;

	  e = s & ((1 << (-nBits)) - 1);
	  s >>= (-nBits);
	  nBits += eLen;
	  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}

	  m = e & ((1 << (-nBits)) - 1);
	  e >>= (-nBits);
	  nBits += mLen;
	  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}

	  if (e === 0) {
	    e = 1 - eBias;
	  } else if (e === eMax) {
	    return m ? NaN : ((s ? -1 : 1) * Infinity)
	  } else {
	    m = m + Math.pow(2, mLen);
	    e = e - eBias;
	  }
	  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
	}

	function write (buffer, value, offset, isLE, mLen, nBytes) {
	  var e, m, c;
	  var eLen = nBytes * 8 - mLen - 1;
	  var eMax = (1 << eLen) - 1;
	  var eBias = eMax >> 1;
	  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0);
	  var i = isLE ? 0 : (nBytes - 1);
	  var d = isLE ? 1 : -1;
	  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0;

	  value = Math.abs(value);

	  if (isNaN(value) || value === Infinity) {
	    m = isNaN(value) ? 1 : 0;
	    e = eMax;
	  } else {
	    e = Math.floor(Math.log(value) / Math.LN2);
	    if (value * (c = Math.pow(2, -e)) < 1) {
	      e--;
	      c *= 2;
	    }
	    if (e + eBias >= 1) {
	      value += rt / c;
	    } else {
	      value += rt * Math.pow(2, 1 - eBias);
	    }
	    if (value * c >= 2) {
	      e++;
	      c /= 2;
	    }

	    if (e + eBias >= eMax) {
	      m = 0;
	      e = eMax;
	    } else if (e + eBias >= 1) {
	      m = (value * c - 1) * Math.pow(2, mLen);
	      e = e + eBias;
	    } else {
	      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
	      e = 0;
	    }
	  }

	  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

	  e = (e << mLen) | m;
	  eLen += mLen;
	  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

	  buffer[offset + i - d] |= s * 128;
	}

	var toString = {}.toString;

	var isArray$3 = Array.isArray || function (arr) {
	  return toString.call(arr) == '[object Array]';
	};

	/*!
	 * The buffer module from node.js, for the browser.
	 *
	 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
	 * @license  MIT
	 */

	var INSPECT_MAX_BYTES = 50;

	/**
	 * If `Buffer.TYPED_ARRAY_SUPPORT`:
	 *   === true    Use Uint8Array implementation (fastest)
	 *   === false   Use Object implementation (most compatible, even IE6)
	 *
	 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
	 * Opera 11.6+, iOS 4.2+.
	 *
	 * Due to various browser bugs, sometimes the Object implementation will be used even
	 * when the browser supports typed arrays.
	 *
	 * Note:
	 *
	 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
	 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
	 *
	 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
	 *
	 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
	 *     incorrect length in some situations.

	 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
	 * get the Object implementation, which is slower but behaves correctly.
	 */
	Buffer$3.TYPED_ARRAY_SUPPORT = global$1.TYPED_ARRAY_SUPPORT !== undefined
	  ? global$1.TYPED_ARRAY_SUPPORT
	  : true;

	/*
	 * Export kMaxLength after typed array support is determined.
	 */
	var _kMaxLength = kMaxLength();

	function kMaxLength () {
	  return Buffer$3.TYPED_ARRAY_SUPPORT
	    ? 0x7fffffff
	    : 0x3fffffff
	}

	function createBuffer (that, length) {
	  if (kMaxLength() < length) {
	    throw new RangeError('Invalid typed array length')
	  }
	  if (Buffer$3.TYPED_ARRAY_SUPPORT) {
	    // Return an augmented `Uint8Array` instance, for best performance
	    that = new Uint8Array(length);
	    that.__proto__ = Buffer$3.prototype;
	  } else {
	    // Fallback: Return an object instance of the Buffer class
	    if (that === null) {
	      that = new Buffer$3(length);
	    }
	    that.length = length;
	  }

	  return that
	}

	/**
	 * The Buffer constructor returns instances of `Uint8Array` that have their
	 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
	 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
	 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
	 * returns a single octet.
	 *
	 * The `Uint8Array` prototype remains unmodified.
	 */

	function Buffer$3 (arg, encodingOrOffset, length) {
	  if (!Buffer$3.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer$3)) {
	    return new Buffer$3(arg, encodingOrOffset, length)
	  }

	  // Common case.
	  if (typeof arg === 'number') {
	    if (typeof encodingOrOffset === 'string') {
	      throw new Error(
	        'If encoding is specified then the first argument must be a string'
	      )
	    }
	    return allocUnsafe(this, arg)
	  }
	  return from(this, arg, encodingOrOffset, length)
	}

	Buffer$3.poolSize = 8192; // not used by this implementation

	// TODO: Legacy, not needed anymore. Remove in next major version.
	Buffer$3._augment = function (arr) {
	  arr.__proto__ = Buffer$3.prototype;
	  return arr
	};

	function from (that, value, encodingOrOffset, length) {
	  if (typeof value === 'number') {
	    throw new TypeError('"value" argument must not be a number')
	  }

	  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
	    return fromArrayBuffer(that, value, encodingOrOffset, length)
	  }

	  if (typeof value === 'string') {
	    return fromString(that, value, encodingOrOffset)
	  }

	  return fromObject(that, value)
	}

	/**
	 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
	 * if value is a number.
	 * Buffer.from(str[, encoding])
	 * Buffer.from(array)
	 * Buffer.from(buffer)
	 * Buffer.from(arrayBuffer[, byteOffset[, length]])
	 **/
	Buffer$3.from = function (value, encodingOrOffset, length) {
	  return from(null, value, encodingOrOffset, length)
	};

	if (Buffer$3.TYPED_ARRAY_SUPPORT) {
	  Buffer$3.prototype.__proto__ = Uint8Array.prototype;
	  Buffer$3.__proto__ = Uint8Array;
	}

	function assertSize (size) {
	  if (typeof size !== 'number') {
	    throw new TypeError('"size" argument must be a number')
	  } else if (size < 0) {
	    throw new RangeError('"size" argument must not be negative')
	  }
	}

	function alloc (that, size, fill, encoding) {
	  assertSize(size);
	  if (size <= 0) {
	    return createBuffer(that, size)
	  }
	  if (fill !== undefined) {
	    // Only pay attention to encoding if it's a string. This
	    // prevents accidentally sending in a number that would
	    // be interpretted as a start offset.
	    return typeof encoding === 'string'
	      ? createBuffer(that, size).fill(fill, encoding)
	      : createBuffer(that, size).fill(fill)
	  }
	  return createBuffer(that, size)
	}

	/**
	 * Creates a new filled Buffer instance.
	 * alloc(size[, fill[, encoding]])
	 **/
	Buffer$3.alloc = function (size, fill, encoding) {
	  return alloc(null, size, fill, encoding)
	};

	function allocUnsafe (that, size) {
	  assertSize(size);
	  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0);
	  if (!Buffer$3.TYPED_ARRAY_SUPPORT) {
	    for (var i = 0; i < size; ++i) {
	      that[i] = 0;
	    }
	  }
	  return that
	}

	/**
	 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
	 * */
	Buffer$3.allocUnsafe = function (size) {
	  return allocUnsafe(null, size)
	};
	/**
	 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
	 */
	Buffer$3.allocUnsafeSlow = function (size) {
	  return allocUnsafe(null, size)
	};

	function fromString (that, string, encoding) {
	  if (typeof encoding !== 'string' || encoding === '') {
	    encoding = 'utf8';
	  }

	  if (!Buffer$3.isEncoding(encoding)) {
	    throw new TypeError('"encoding" must be a valid string encoding')
	  }

	  var length = byteLength(string, encoding) | 0;
	  that = createBuffer(that, length);

	  var actual = that.write(string, encoding);

	  if (actual !== length) {
	    // Writing a hex string, for example, that contains invalid characters will
	    // cause everything after the first invalid character to be ignored. (e.g.
	    // 'abxxcd' will be treated as 'ab')
	    that = that.slice(0, actual);
	  }

	  return that
	}

	function fromArrayLike (that, array) {
	  var length = array.length < 0 ? 0 : checked(array.length) | 0;
	  that = createBuffer(that, length);
	  for (var i = 0; i < length; i += 1) {
	    that[i] = array[i] & 255;
	  }
	  return that
	}

	function fromArrayBuffer (that, array, byteOffset, length) {
	  array.byteLength; // this throws if `array` is not a valid ArrayBuffer

	  if (byteOffset < 0 || array.byteLength < byteOffset) {
	    throw new RangeError('\'offset\' is out of bounds')
	  }

	  if (array.byteLength < byteOffset + (length || 0)) {
	    throw new RangeError('\'length\' is out of bounds')
	  }

	  if (byteOffset === undefined && length === undefined) {
	    array = new Uint8Array(array);
	  } else if (length === undefined) {
	    array = new Uint8Array(array, byteOffset);
	  } else {
	    array = new Uint8Array(array, byteOffset, length);
	  }

	  if (Buffer$3.TYPED_ARRAY_SUPPORT) {
	    // Return an augmented `Uint8Array` instance, for best performance
	    that = array;
	    that.__proto__ = Buffer$3.prototype;
	  } else {
	    // Fallback: Return an object instance of the Buffer class
	    that = fromArrayLike(that, array);
	  }
	  return that
	}

	function fromObject (that, obj) {
	  if (internalIsBuffer(obj)) {
	    var len = checked(obj.length) | 0;
	    that = createBuffer(that, len);

	    if (that.length === 0) {
	      return that
	    }

	    obj.copy(that, 0, 0, len);
	    return that
	  }

	  if (obj) {
	    if ((typeof ArrayBuffer !== 'undefined' &&
	        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
	      if (typeof obj.length !== 'number' || isnan(obj.length)) {
	        return createBuffer(that, 0)
	      }
	      return fromArrayLike(that, obj)
	    }

	    if (obj.type === 'Buffer' && isArray$3(obj.data)) {
	      return fromArrayLike(that, obj.data)
	    }
	  }

	  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
	}

	function checked (length) {
	  // Note: cannot use `length < kMaxLength()` here because that fails when
	  // length is NaN (which is otherwise coerced to zero.)
	  if (length >= kMaxLength()) {
	    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
	                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
	  }
	  return length | 0
	}

	function SlowBuffer (length) {
	  if (+length != length) { // eslint-disable-line eqeqeq
	    length = 0;
	  }
	  return Buffer$3.alloc(+length)
	}
	Buffer$3.isBuffer = isBuffer$3;
	function internalIsBuffer (b) {
	  return !!(b != null && b._isBuffer)
	}

	Buffer$3.compare = function compare (a, b) {
	  if (!internalIsBuffer(a) || !internalIsBuffer(b)) {
	    throw new TypeError('Arguments must be Buffers')
	  }

	  if (a === b) return 0

	  var x = a.length;
	  var y = b.length;

	  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
	    if (a[i] !== b[i]) {
	      x = a[i];
	      y = b[i];
	      break
	    }
	  }

	  if (x < y) return -1
	  if (y < x) return 1
	  return 0
	};

	Buffer$3.isEncoding = function isEncoding (encoding) {
	  switch (String(encoding).toLowerCase()) {
	    case 'hex':
	    case 'utf8':
	    case 'utf-8':
	    case 'ascii':
	    case 'latin1':
	    case 'binary':
	    case 'base64':
	    case 'ucs2':
	    case 'ucs-2':
	    case 'utf16le':
	    case 'utf-16le':
	      return true
	    default:
	      return false
	  }
	};

	Buffer$3.concat = function concat (list, length) {
	  if (!isArray$3(list)) {
	    throw new TypeError('"list" argument must be an Array of Buffers')
	  }

	  if (list.length === 0) {
	    return Buffer$3.alloc(0)
	  }

	  var i;
	  if (length === undefined) {
	    length = 0;
	    for (i = 0; i < list.length; ++i) {
	      length += list[i].length;
	    }
	  }

	  var buffer = Buffer$3.allocUnsafe(length);
	  var pos = 0;
	  for (i = 0; i < list.length; ++i) {
	    var buf = list[i];
	    if (!internalIsBuffer(buf)) {
	      throw new TypeError('"list" argument must be an Array of Buffers')
	    }
	    buf.copy(buffer, pos);
	    pos += buf.length;
	  }
	  return buffer
	};

	function byteLength (string, encoding) {
	  if (internalIsBuffer(string)) {
	    return string.length
	  }
	  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
	      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
	    return string.byteLength
	  }
	  if (typeof string !== 'string') {
	    string = '' + string;
	  }

	  var len = string.length;
	  if (len === 0) return 0

	  // Use a for loop to avoid recursion
	  var loweredCase = false;
	  for (;;) {
	    switch (encoding) {
	      case 'ascii':
	      case 'latin1':
	      case 'binary':
	        return len
	      case 'utf8':
	      case 'utf-8':
	      case undefined:
	        return utf8ToBytes(string).length
	      case 'ucs2':
	      case 'ucs-2':
	      case 'utf16le':
	      case 'utf-16le':
	        return len * 2
	      case 'hex':
	        return len >>> 1
	      case 'base64':
	        return base64ToBytes(string).length
	      default:
	        if (loweredCase) return utf8ToBytes(string).length // assume utf8
	        encoding = ('' + encoding).toLowerCase();
	        loweredCase = true;
	    }
	  }
	}
	Buffer$3.byteLength = byteLength;

	function slowToString (encoding, start, end) {
	  var loweredCase = false;

	  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
	  // property of a typed array.

	  // This behaves neither like String nor Uint8Array in that we set start/end
	  // to their upper/lower bounds if the value passed is out of range.
	  // undefined is handled specially as per ECMA-262 6th Edition,
	  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
	  if (start === undefined || start < 0) {
	    start = 0;
	  }
	  // Return early if start > this.length. Done here to prevent potential uint32
	  // coercion fail below.
	  if (start > this.length) {
	    return ''
	  }

	  if (end === undefined || end > this.length) {
	    end = this.length;
	  }

	  if (end <= 0) {
	    return ''
	  }

	  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
	  end >>>= 0;
	  start >>>= 0;

	  if (end <= start) {
	    return ''
	  }

	  if (!encoding) encoding = 'utf8';

	  while (true) {
	    switch (encoding) {
	      case 'hex':
	        return hexSlice(this, start, end)

	      case 'utf8':
	      case 'utf-8':
	        return utf8Slice(this, start, end)

	      case 'ascii':
	        return asciiSlice(this, start, end)

	      case 'latin1':
	      case 'binary':
	        return latin1Slice(this, start, end)

	      case 'base64':
	        return base64Slice(this, start, end)

	      case 'ucs2':
	      case 'ucs-2':
	      case 'utf16le':
	      case 'utf-16le':
	        return utf16leSlice(this, start, end)

	      default:
	        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
	        encoding = (encoding + '').toLowerCase();
	        loweredCase = true;
	    }
	  }
	}

	// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
	// Buffer instances.
	Buffer$3.prototype._isBuffer = true;

	function swap (b, n, m) {
	  var i = b[n];
	  b[n] = b[m];
	  b[m] = i;
	}

	Buffer$3.prototype.swap16 = function swap16 () {
	  var len = this.length;
	  if (len % 2 !== 0) {
	    throw new RangeError('Buffer size must be a multiple of 16-bits')
	  }
	  for (var i = 0; i < len; i += 2) {
	    swap(this, i, i + 1);
	  }
	  return this
	};

	Buffer$3.prototype.swap32 = function swap32 () {
	  var len = this.length;
	  if (len % 4 !== 0) {
	    throw new RangeError('Buffer size must be a multiple of 32-bits')
	  }
	  for (var i = 0; i < len; i += 4) {
	    swap(this, i, i + 3);
	    swap(this, i + 1, i + 2);
	  }
	  return this
	};

	Buffer$3.prototype.swap64 = function swap64 () {
	  var len = this.length;
	  if (len % 8 !== 0) {
	    throw new RangeError('Buffer size must be a multiple of 64-bits')
	  }
	  for (var i = 0; i < len; i += 8) {
	    swap(this, i, i + 7);
	    swap(this, i + 1, i + 6);
	    swap(this, i + 2, i + 5);
	    swap(this, i + 3, i + 4);
	  }
	  return this
	};

	Buffer$3.prototype.toString = function toString () {
	  var length = this.length | 0;
	  if (length === 0) return ''
	  if (arguments.length === 0) return utf8Slice(this, 0, length)
	  return slowToString.apply(this, arguments)
	};

	Buffer$3.prototype.equals = function equals (b) {
	  if (!internalIsBuffer(b)) throw new TypeError('Argument must be a Buffer')
	  if (this === b) return true
	  return Buffer$3.compare(this, b) === 0
	};

	Buffer$3.prototype.inspect = function inspect () {
	  var str = '';
	  var max = INSPECT_MAX_BYTES;
	  if (this.length > 0) {
	    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ');
	    if (this.length > max) str += ' ... ';
	  }
	  return '<Buffer ' + str + '>'
	};

	Buffer$3.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
	  if (!internalIsBuffer(target)) {
	    throw new TypeError('Argument must be a Buffer')
	  }

	  if (start === undefined) {
	    start = 0;
	  }
	  if (end === undefined) {
	    end = target ? target.length : 0;
	  }
	  if (thisStart === undefined) {
	    thisStart = 0;
	  }
	  if (thisEnd === undefined) {
	    thisEnd = this.length;
	  }

	  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
	    throw new RangeError('out of range index')
	  }

	  if (thisStart >= thisEnd && start >= end) {
	    return 0
	  }
	  if (thisStart >= thisEnd) {
	    return -1
	  }
	  if (start >= end) {
	    return 1
	  }

	  start >>>= 0;
	  end >>>= 0;
	  thisStart >>>= 0;
	  thisEnd >>>= 0;

	  if (this === target) return 0

	  var x = thisEnd - thisStart;
	  var y = end - start;
	  var len = Math.min(x, y);

	  var thisCopy = this.slice(thisStart, thisEnd);
	  var targetCopy = target.slice(start, end);

	  for (var i = 0; i < len; ++i) {
	    if (thisCopy[i] !== targetCopy[i]) {
	      x = thisCopy[i];
	      y = targetCopy[i];
	      break
	    }
	  }

	  if (x < y) return -1
	  if (y < x) return 1
	  return 0
	};

	// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
	// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
	//
	// Arguments:
	// - buffer - a Buffer to search
	// - val - a string, Buffer, or number
	// - byteOffset - an index into `buffer`; will be clamped to an int32
	// - encoding - an optional encoding, relevant is val is a string
	// - dir - true for indexOf, false for lastIndexOf
	function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
	  // Empty buffer means no match
	  if (buffer.length === 0) return -1

	  // Normalize byteOffset
	  if (typeof byteOffset === 'string') {
	    encoding = byteOffset;
	    byteOffset = 0;
	  } else if (byteOffset > 0x7fffffff) {
	    byteOffset = 0x7fffffff;
	  } else if (byteOffset < -0x80000000) {
	    byteOffset = -0x80000000;
	  }
	  byteOffset = +byteOffset;  // Coerce to Number.
	  if (isNaN(byteOffset)) {
	    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
	    byteOffset = dir ? 0 : (buffer.length - 1);
	  }

	  // Normalize byteOffset: negative offsets start from the end of the buffer
	  if (byteOffset < 0) byteOffset = buffer.length + byteOffset;
	  if (byteOffset >= buffer.length) {
	    if (dir) return -1
	    else byteOffset = buffer.length - 1;
	  } else if (byteOffset < 0) {
	    if (dir) byteOffset = 0;
	    else return -1
	  }

	  // Normalize val
	  if (typeof val === 'string') {
	    val = Buffer$3.from(val, encoding);
	  }

	  // Finally, search either indexOf (if dir is true) or lastIndexOf
	  if (internalIsBuffer(val)) {
	    // Special case: looking for empty string/buffer always fails
	    if (val.length === 0) {
	      return -1
	    }
	    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
	  } else if (typeof val === 'number') {
	    val = val & 0xFF; // Search for a byte value [0-255]
	    if (Buffer$3.TYPED_ARRAY_SUPPORT &&
	        typeof Uint8Array.prototype.indexOf === 'function') {
	      if (dir) {
	        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
	      } else {
	        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
	      }
	    }
	    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
	  }

	  throw new TypeError('val must be string, number or Buffer')
	}

	function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
	  var indexSize = 1;
	  var arrLength = arr.length;
	  var valLength = val.length;

	  if (encoding !== undefined) {
	    encoding = String(encoding).toLowerCase();
	    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
	        encoding === 'utf16le' || encoding === 'utf-16le') {
	      if (arr.length < 2 || val.length < 2) {
	        return -1
	      }
	      indexSize = 2;
	      arrLength /= 2;
	      valLength /= 2;
	      byteOffset /= 2;
	    }
	  }

	  function read (buf, i) {
	    if (indexSize === 1) {
	      return buf[i]
	    } else {
	      return buf.readUInt16BE(i * indexSize)
	    }
	  }

	  var i;
	  if (dir) {
	    var foundIndex = -1;
	    for (i = byteOffset; i < arrLength; i++) {
	      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
	        if (foundIndex === -1) foundIndex = i;
	        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
	      } else {
	        if (foundIndex !== -1) i -= i - foundIndex;
	        foundIndex = -1;
	      }
	    }
	  } else {
	    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength;
	    for (i = byteOffset; i >= 0; i--) {
	      var found = true;
	      for (var j = 0; j < valLength; j++) {
	        if (read(arr, i + j) !== read(val, j)) {
	          found = false;
	          break
	        }
	      }
	      if (found) return i
	    }
	  }

	  return -1
	}

	Buffer$3.prototype.includes = function includes (val, byteOffset, encoding) {
	  return this.indexOf(val, byteOffset, encoding) !== -1
	};

	Buffer$3.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
	  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
	};

	Buffer$3.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
	  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
	};

	function hexWrite (buf, string, offset, length) {
	  offset = Number(offset) || 0;
	  var remaining = buf.length - offset;
	  if (!length) {
	    length = remaining;
	  } else {
	    length = Number(length);
	    if (length > remaining) {
	      length = remaining;
	    }
	  }

	  // must be an even number of digits
	  var strLen = string.length;
	  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

	  if (length > strLen / 2) {
	    length = strLen / 2;
	  }
	  for (var i = 0; i < length; ++i) {
	    var parsed = parseInt(string.substr(i * 2, 2), 16);
	    if (isNaN(parsed)) return i
	    buf[offset + i] = parsed;
	  }
	  return i
	}

	function utf8Write (buf, string, offset, length) {
	  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
	}

	function asciiWrite (buf, string, offset, length) {
	  return blitBuffer(asciiToBytes(string), buf, offset, length)
	}

	function latin1Write (buf, string, offset, length) {
	  return asciiWrite(buf, string, offset, length)
	}

	function base64Write (buf, string, offset, length) {
	  return blitBuffer(base64ToBytes(string), buf, offset, length)
	}

	function ucs2Write (buf, string, offset, length) {
	  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
	}

	Buffer$3.prototype.write = function write (string, offset, length, encoding) {
	  // Buffer#write(string)
	  if (offset === undefined) {
	    encoding = 'utf8';
	    length = this.length;
	    offset = 0;
	  // Buffer#write(string, encoding)
	  } else if (length === undefined && typeof offset === 'string') {
	    encoding = offset;
	    length = this.length;
	    offset = 0;
	  // Buffer#write(string, offset[, length][, encoding])
	  } else if (isFinite(offset)) {
	    offset = offset | 0;
	    if (isFinite(length)) {
	      length = length | 0;
	      if (encoding === undefined) encoding = 'utf8';
	    } else {
	      encoding = length;
	      length = undefined;
	    }
	  // legacy write(string, encoding, offset, length) - remove in v0.13
	  } else {
	    throw new Error(
	      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
	    )
	  }

	  var remaining = this.length - offset;
	  if (length === undefined || length > remaining) length = remaining;

	  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
	    throw new RangeError('Attempt to write outside buffer bounds')
	  }

	  if (!encoding) encoding = 'utf8';

	  var loweredCase = false;
	  for (;;) {
	    switch (encoding) {
	      case 'hex':
	        return hexWrite(this, string, offset, length)

	      case 'utf8':
	      case 'utf-8':
	        return utf8Write(this, string, offset, length)

	      case 'ascii':
	        return asciiWrite(this, string, offset, length)

	      case 'latin1':
	      case 'binary':
	        return latin1Write(this, string, offset, length)

	      case 'base64':
	        // Warning: maxLength not taken into account in base64Write
	        return base64Write(this, string, offset, length)

	      case 'ucs2':
	      case 'ucs-2':
	      case 'utf16le':
	      case 'utf-16le':
	        return ucs2Write(this, string, offset, length)

	      default:
	        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
	        encoding = ('' + encoding).toLowerCase();
	        loweredCase = true;
	    }
	  }
	};

	Buffer$3.prototype.toJSON = function toJSON () {
	  return {
	    type: 'Buffer',
	    data: Array.prototype.slice.call(this._arr || this, 0)
	  }
	};

	function base64Slice (buf, start, end) {
	  if (start === 0 && end === buf.length) {
	    return fromByteArray(buf)
	  } else {
	    return fromByteArray(buf.slice(start, end))
	  }
	}

	function utf8Slice (buf, start, end) {
	  end = Math.min(buf.length, end);
	  var res = [];

	  var i = start;
	  while (i < end) {
	    var firstByte = buf[i];
	    var codePoint = null;
	    var bytesPerSequence = (firstByte > 0xEF) ? 4
	      : (firstByte > 0xDF) ? 3
	      : (firstByte > 0xBF) ? 2
	      : 1;

	    if (i + bytesPerSequence <= end) {
	      var secondByte, thirdByte, fourthByte, tempCodePoint;

	      switch (bytesPerSequence) {
	        case 1:
	          if (firstByte < 0x80) {
	            codePoint = firstByte;
	          }
	          break
	        case 2:
	          secondByte = buf[i + 1];
	          if ((secondByte & 0xC0) === 0x80) {
	            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F);
	            if (tempCodePoint > 0x7F) {
	              codePoint = tempCodePoint;
	            }
	          }
	          break
	        case 3:
	          secondByte = buf[i + 1];
	          thirdByte = buf[i + 2];
	          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
	            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F);
	            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
	              codePoint = tempCodePoint;
	            }
	          }
	          break
	        case 4:
	          secondByte = buf[i + 1];
	          thirdByte = buf[i + 2];
	          fourthByte = buf[i + 3];
	          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
	            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F);
	            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
	              codePoint = tempCodePoint;
	            }
	          }
	      }
	    }

	    if (codePoint === null) {
	      // we did not generate a valid codePoint so insert a
	      // replacement char (U+FFFD) and advance only 1 byte
	      codePoint = 0xFFFD;
	      bytesPerSequence = 1;
	    } else if (codePoint > 0xFFFF) {
	      // encode to utf16 (surrogate pair dance)
	      codePoint -= 0x10000;
	      res.push(codePoint >>> 10 & 0x3FF | 0xD800);
	      codePoint = 0xDC00 | codePoint & 0x3FF;
	    }

	    res.push(codePoint);
	    i += bytesPerSequence;
	  }

	  return decodeCodePointsArray(res)
	}

	// Based on http://stackoverflow.com/a/22747272/680742, the browser with
	// the lowest limit is Chrome, with 0x10000 args.
	// We go 1 magnitude less, for safety
	var MAX_ARGUMENTS_LENGTH = 0x1000;

	function decodeCodePointsArray (codePoints) {
	  var len = codePoints.length;
	  if (len <= MAX_ARGUMENTS_LENGTH) {
	    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
	  }

	  // Decode in chunks to avoid "call stack size exceeded".
	  var res = '';
	  var i = 0;
	  while (i < len) {
	    res += String.fromCharCode.apply(
	      String,
	      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
	    );
	  }
	  return res
	}

	function asciiSlice (buf, start, end) {
	  var ret = '';
	  end = Math.min(buf.length, end);

	  for (var i = start; i < end; ++i) {
	    ret += String.fromCharCode(buf[i] & 0x7F);
	  }
	  return ret
	}

	function latin1Slice (buf, start, end) {
	  var ret = '';
	  end = Math.min(buf.length, end);

	  for (var i = start; i < end; ++i) {
	    ret += String.fromCharCode(buf[i]);
	  }
	  return ret
	}

	function hexSlice (buf, start, end) {
	  var len = buf.length;

	  if (!start || start < 0) start = 0;
	  if (!end || end < 0 || end > len) end = len;

	  var out = '';
	  for (var i = start; i < end; ++i) {
	    out += toHex(buf[i]);
	  }
	  return out
	}

	function utf16leSlice (buf, start, end) {
	  var bytes = buf.slice(start, end);
	  var res = '';
	  for (var i = 0; i < bytes.length; i += 2) {
	    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
	  }
	  return res
	}

	Buffer$3.prototype.slice = function slice (start, end) {
	  var len = this.length;
	  start = ~~start;
	  end = end === undefined ? len : ~~end;

	  if (start < 0) {
	    start += len;
	    if (start < 0) start = 0;
	  } else if (start > len) {
	    start = len;
	  }

	  if (end < 0) {
	    end += len;
	    if (end < 0) end = 0;
	  } else if (end > len) {
	    end = len;
	  }

	  if (end < start) end = start;

	  var newBuf;
	  if (Buffer$3.TYPED_ARRAY_SUPPORT) {
	    newBuf = this.subarray(start, end);
	    newBuf.__proto__ = Buffer$3.prototype;
	  } else {
	    var sliceLen = end - start;
	    newBuf = new Buffer$3(sliceLen, undefined);
	    for (var i = 0; i < sliceLen; ++i) {
	      newBuf[i] = this[i + start];
	    }
	  }

	  return newBuf
	};

	/*
	 * Need to make sure that buffer isn't trying to write out of bounds.
	 */
	function checkOffset (offset, ext, length) {
	  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
	  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
	}

	Buffer$3.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
	  offset = offset | 0;
	  byteLength = byteLength | 0;
	  if (!noAssert) checkOffset(offset, byteLength, this.length);

	  var val = this[offset];
	  var mul = 1;
	  var i = 0;
	  while (++i < byteLength && (mul *= 0x100)) {
	    val += this[offset + i] * mul;
	  }

	  return val
	};

	Buffer$3.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
	  offset = offset | 0;
	  byteLength = byteLength | 0;
	  if (!noAssert) {
	    checkOffset(offset, byteLength, this.length);
	  }

	  var val = this[offset + --byteLength];
	  var mul = 1;
	  while (byteLength > 0 && (mul *= 0x100)) {
	    val += this[offset + --byteLength] * mul;
	  }

	  return val
	};

	Buffer$3.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 1, this.length);
	  return this[offset]
	};

	Buffer$3.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length);
	  return this[offset] | (this[offset + 1] << 8)
	};

	Buffer$3.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length);
	  return (this[offset] << 8) | this[offset + 1]
	};

	Buffer$3.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length);

	  return ((this[offset]) |
	      (this[offset + 1] << 8) |
	      (this[offset + 2] << 16)) +
	      (this[offset + 3] * 0x1000000)
	};

	Buffer$3.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length);

	  return (this[offset] * 0x1000000) +
	    ((this[offset + 1] << 16) |
	    (this[offset + 2] << 8) |
	    this[offset + 3])
	};

	Buffer$3.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
	  offset = offset | 0;
	  byteLength = byteLength | 0;
	  if (!noAssert) checkOffset(offset, byteLength, this.length);

	  var val = this[offset];
	  var mul = 1;
	  var i = 0;
	  while (++i < byteLength && (mul *= 0x100)) {
	    val += this[offset + i] * mul;
	  }
	  mul *= 0x80;

	  if (val >= mul) val -= Math.pow(2, 8 * byteLength);

	  return val
	};

	Buffer$3.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
	  offset = offset | 0;
	  byteLength = byteLength | 0;
	  if (!noAssert) checkOffset(offset, byteLength, this.length);

	  var i = byteLength;
	  var mul = 1;
	  var val = this[offset + --i];
	  while (i > 0 && (mul *= 0x100)) {
	    val += this[offset + --i] * mul;
	  }
	  mul *= 0x80;

	  if (val >= mul) val -= Math.pow(2, 8 * byteLength);

	  return val
	};

	Buffer$3.prototype.readInt8 = function readInt8 (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 1, this.length);
	  if (!(this[offset] & 0x80)) return (this[offset])
	  return ((0xff - this[offset] + 1) * -1)
	};

	Buffer$3.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length);
	  var val = this[offset] | (this[offset + 1] << 8);
	  return (val & 0x8000) ? val | 0xFFFF0000 : val
	};

	Buffer$3.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length);
	  var val = this[offset + 1] | (this[offset] << 8);
	  return (val & 0x8000) ? val | 0xFFFF0000 : val
	};

	Buffer$3.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length);

	  return (this[offset]) |
	    (this[offset + 1] << 8) |
	    (this[offset + 2] << 16) |
	    (this[offset + 3] << 24)
	};

	Buffer$3.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length);

	  return (this[offset] << 24) |
	    (this[offset + 1] << 16) |
	    (this[offset + 2] << 8) |
	    (this[offset + 3])
	};

	Buffer$3.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length);
	  return read(this, offset, true, 23, 4)
	};

	Buffer$3.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length);
	  return read(this, offset, false, 23, 4)
	};

	Buffer$3.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 8, this.length);
	  return read(this, offset, true, 52, 8)
	};

	Buffer$3.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 8, this.length);
	  return read(this, offset, false, 52, 8)
	};

	function checkInt (buf, value, offset, ext, max, min) {
	  if (!internalIsBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
	  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
	  if (offset + ext > buf.length) throw new RangeError('Index out of range')
	}

	Buffer$3.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  byteLength = byteLength | 0;
	  if (!noAssert) {
	    var maxBytes = Math.pow(2, 8 * byteLength) - 1;
	    checkInt(this, value, offset, byteLength, maxBytes, 0);
	  }

	  var mul = 1;
	  var i = 0;
	  this[offset] = value & 0xFF;
	  while (++i < byteLength && (mul *= 0x100)) {
	    this[offset + i] = (value / mul) & 0xFF;
	  }

	  return offset + byteLength
	};

	Buffer$3.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  byteLength = byteLength | 0;
	  if (!noAssert) {
	    var maxBytes = Math.pow(2, 8 * byteLength) - 1;
	    checkInt(this, value, offset, byteLength, maxBytes, 0);
	  }

	  var i = byteLength - 1;
	  var mul = 1;
	  this[offset + i] = value & 0xFF;
	  while (--i >= 0 && (mul *= 0x100)) {
	    this[offset + i] = (value / mul) & 0xFF;
	  }

	  return offset + byteLength
	};

	Buffer$3.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0);
	  if (!Buffer$3.TYPED_ARRAY_SUPPORT) value = Math.floor(value);
	  this[offset] = (value & 0xff);
	  return offset + 1
	};

	function objectWriteUInt16 (buf, value, offset, littleEndian) {
	  if (value < 0) value = 0xffff + value + 1;
	  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
	    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
	      (littleEndian ? i : 1 - i) * 8;
	  }
	}

	Buffer$3.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
	  if (Buffer$3.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value & 0xff);
	    this[offset + 1] = (value >>> 8);
	  } else {
	    objectWriteUInt16(this, value, offset, true);
	  }
	  return offset + 2
	};

	Buffer$3.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
	  if (Buffer$3.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 8);
	    this[offset + 1] = (value & 0xff);
	  } else {
	    objectWriteUInt16(this, value, offset, false);
	  }
	  return offset + 2
	};

	function objectWriteUInt32 (buf, value, offset, littleEndian) {
	  if (value < 0) value = 0xffffffff + value + 1;
	  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
	    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff;
	  }
	}

	Buffer$3.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
	  if (Buffer$3.TYPED_ARRAY_SUPPORT) {
	    this[offset + 3] = (value >>> 24);
	    this[offset + 2] = (value >>> 16);
	    this[offset + 1] = (value >>> 8);
	    this[offset] = (value & 0xff);
	  } else {
	    objectWriteUInt32(this, value, offset, true);
	  }
	  return offset + 4
	};

	Buffer$3.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
	  if (Buffer$3.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 24);
	    this[offset + 1] = (value >>> 16);
	    this[offset + 2] = (value >>> 8);
	    this[offset + 3] = (value & 0xff);
	  } else {
	    objectWriteUInt32(this, value, offset, false);
	  }
	  return offset + 4
	};

	Buffer$3.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  if (!noAssert) {
	    var limit = Math.pow(2, 8 * byteLength - 1);

	    checkInt(this, value, offset, byteLength, limit - 1, -limit);
	  }

	  var i = 0;
	  var mul = 1;
	  var sub = 0;
	  this[offset] = value & 0xFF;
	  while (++i < byteLength && (mul *= 0x100)) {
	    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
	      sub = 1;
	    }
	    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF;
	  }

	  return offset + byteLength
	};

	Buffer$3.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  if (!noAssert) {
	    var limit = Math.pow(2, 8 * byteLength - 1);

	    checkInt(this, value, offset, byteLength, limit - 1, -limit);
	  }

	  var i = byteLength - 1;
	  var mul = 1;
	  var sub = 0;
	  this[offset + i] = value & 0xFF;
	  while (--i >= 0 && (mul *= 0x100)) {
	    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
	      sub = 1;
	    }
	    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF;
	  }

	  return offset + byteLength
	};

	Buffer$3.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80);
	  if (!Buffer$3.TYPED_ARRAY_SUPPORT) value = Math.floor(value);
	  if (value < 0) value = 0xff + value + 1;
	  this[offset] = (value & 0xff);
	  return offset + 1
	};

	Buffer$3.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000);
	  if (Buffer$3.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value & 0xff);
	    this[offset + 1] = (value >>> 8);
	  } else {
	    objectWriteUInt16(this, value, offset, true);
	  }
	  return offset + 2
	};

	Buffer$3.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000);
	  if (Buffer$3.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 8);
	    this[offset + 1] = (value & 0xff);
	  } else {
	    objectWriteUInt16(this, value, offset, false);
	  }
	  return offset + 2
	};

	Buffer$3.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);
	  if (Buffer$3.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value & 0xff);
	    this[offset + 1] = (value >>> 8);
	    this[offset + 2] = (value >>> 16);
	    this[offset + 3] = (value >>> 24);
	  } else {
	    objectWriteUInt32(this, value, offset, true);
	  }
	  return offset + 4
	};

	Buffer$3.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);
	  if (value < 0) value = 0xffffffff + value + 1;
	  if (Buffer$3.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 24);
	    this[offset + 1] = (value >>> 16);
	    this[offset + 2] = (value >>> 8);
	    this[offset + 3] = (value & 0xff);
	  } else {
	    objectWriteUInt32(this, value, offset, false);
	  }
	  return offset + 4
	};

	function checkIEEE754 (buf, value, offset, ext, max, min) {
	  if (offset + ext > buf.length) throw new RangeError('Index out of range')
	  if (offset < 0) throw new RangeError('Index out of range')
	}

	function writeFloat (buf, value, offset, littleEndian, noAssert) {
	  if (!noAssert) {
	    checkIEEE754(buf, value, offset, 4);
	  }
	  write(buf, value, offset, littleEndian, 23, 4);
	  return offset + 4
	}

	Buffer$3.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
	  return writeFloat(this, value, offset, true, noAssert)
	};

	Buffer$3.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
	  return writeFloat(this, value, offset, false, noAssert)
	};

	function writeDouble (buf, value, offset, littleEndian, noAssert) {
	  if (!noAssert) {
	    checkIEEE754(buf, value, offset, 8);
	  }
	  write(buf, value, offset, littleEndian, 52, 8);
	  return offset + 8
	}

	Buffer$3.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
	  return writeDouble(this, value, offset, true, noAssert)
	};

	Buffer$3.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
	  return writeDouble(this, value, offset, false, noAssert)
	};

	// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
	Buffer$3.prototype.copy = function copy (target, targetStart, start, end) {
	  if (!start) start = 0;
	  if (!end && end !== 0) end = this.length;
	  if (targetStart >= target.length) targetStart = target.length;
	  if (!targetStart) targetStart = 0;
	  if (end > 0 && end < start) end = start;

	  // Copy 0 bytes; we're done
	  if (end === start) return 0
	  if (target.length === 0 || this.length === 0) return 0

	  // Fatal error conditions
	  if (targetStart < 0) {
	    throw new RangeError('targetStart out of bounds')
	  }
	  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
	  if (end < 0) throw new RangeError('sourceEnd out of bounds')

	  // Are we oob?
	  if (end > this.length) end = this.length;
	  if (target.length - targetStart < end - start) {
	    end = target.length - targetStart + start;
	  }

	  var len = end - start;
	  var i;

	  if (this === target && start < targetStart && targetStart < end) {
	    // descending copy from end
	    for (i = len - 1; i >= 0; --i) {
	      target[i + targetStart] = this[i + start];
	    }
	  } else if (len < 1000 || !Buffer$3.TYPED_ARRAY_SUPPORT) {
	    // ascending copy from start
	    for (i = 0; i < len; ++i) {
	      target[i + targetStart] = this[i + start];
	    }
	  } else {
	    Uint8Array.prototype.set.call(
	      target,
	      this.subarray(start, start + len),
	      targetStart
	    );
	  }

	  return len
	};

	// Usage:
	//    buffer.fill(number[, offset[, end]])
	//    buffer.fill(buffer[, offset[, end]])
	//    buffer.fill(string[, offset[, end]][, encoding])
	Buffer$3.prototype.fill = function fill (val, start, end, encoding) {
	  // Handle string cases:
	  if (typeof val === 'string') {
	    if (typeof start === 'string') {
	      encoding = start;
	      start = 0;
	      end = this.length;
	    } else if (typeof end === 'string') {
	      encoding = end;
	      end = this.length;
	    }
	    if (val.length === 1) {
	      var code = val.charCodeAt(0);
	      if (code < 256) {
	        val = code;
	      }
	    }
	    if (encoding !== undefined && typeof encoding !== 'string') {
	      throw new TypeError('encoding must be a string')
	    }
	    if (typeof encoding === 'string' && !Buffer$3.isEncoding(encoding)) {
	      throw new TypeError('Unknown encoding: ' + encoding)
	    }
	  } else if (typeof val === 'number') {
	    val = val & 255;
	  }

	  // Invalid ranges are not set to a default, so can range check early.
	  if (start < 0 || this.length < start || this.length < end) {
	    throw new RangeError('Out of range index')
	  }

	  if (end <= start) {
	    return this
	  }

	  start = start >>> 0;
	  end = end === undefined ? this.length : end >>> 0;

	  if (!val) val = 0;

	  var i;
	  if (typeof val === 'number') {
	    for (i = start; i < end; ++i) {
	      this[i] = val;
	    }
	  } else {
	    var bytes = internalIsBuffer(val)
	      ? val
	      : utf8ToBytes(new Buffer$3(val, encoding).toString());
	    var len = bytes.length;
	    for (i = 0; i < end - start; ++i) {
	      this[i + start] = bytes[i % len];
	    }
	  }

	  return this
	};

	// HELPER FUNCTIONS
	// ================

	var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g;

	function base64clean (str) {
	  // Node strips out invalid characters like \n and \t from the string, base64-js does not
	  str = stringtrim(str).replace(INVALID_BASE64_RE, '');
	  // Node converts strings with length < 2 to ''
	  if (str.length < 2) return ''
	  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
	  while (str.length % 4 !== 0) {
	    str = str + '=';
	  }
	  return str
	}

	function stringtrim (str) {
	  if (str.trim) return str.trim()
	  return str.replace(/^\s+|\s+$/g, '')
	}

	function toHex (n) {
	  if (n < 16) return '0' + n.toString(16)
	  return n.toString(16)
	}

	function utf8ToBytes (string, units) {
	  units = units || Infinity;
	  var codePoint;
	  var length = string.length;
	  var leadSurrogate = null;
	  var bytes = [];

	  for (var i = 0; i < length; ++i) {
	    codePoint = string.charCodeAt(i);

	    // is surrogate component
	    if (codePoint > 0xD7FF && codePoint < 0xE000) {
	      // last char was a lead
	      if (!leadSurrogate) {
	        // no lead yet
	        if (codePoint > 0xDBFF) {
	          // unexpected trail
	          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
	          continue
	        } else if (i + 1 === length) {
	          // unpaired lead
	          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
	          continue
	        }

	        // valid lead
	        leadSurrogate = codePoint;

	        continue
	      }

	      // 2 leads in a row
	      if (codePoint < 0xDC00) {
	        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
	        leadSurrogate = codePoint;
	        continue
	      }

	      // valid surrogate pair
	      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000;
	    } else if (leadSurrogate) {
	      // valid bmp char, but last char was a lead
	      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
	    }

	    leadSurrogate = null;

	    // encode utf8
	    if (codePoint < 0x80) {
	      if ((units -= 1) < 0) break
	      bytes.push(codePoint);
	    } else if (codePoint < 0x800) {
	      if ((units -= 2) < 0) break
	      bytes.push(
	        codePoint >> 0x6 | 0xC0,
	        codePoint & 0x3F | 0x80
	      );
	    } else if (codePoint < 0x10000) {
	      if ((units -= 3) < 0) break
	      bytes.push(
	        codePoint >> 0xC | 0xE0,
	        codePoint >> 0x6 & 0x3F | 0x80,
	        codePoint & 0x3F | 0x80
	      );
	    } else if (codePoint < 0x110000) {
	      if ((units -= 4) < 0) break
	      bytes.push(
	        codePoint >> 0x12 | 0xF0,
	        codePoint >> 0xC & 0x3F | 0x80,
	        codePoint >> 0x6 & 0x3F | 0x80,
	        codePoint & 0x3F | 0x80
	      );
	    } else {
	      throw new Error('Invalid code point')
	    }
	  }

	  return bytes
	}

	function asciiToBytes (str) {
	  var byteArray = [];
	  for (var i = 0; i < str.length; ++i) {
	    // Node's code seems to be doing this and not & 0x7F..
	    byteArray.push(str.charCodeAt(i) & 0xFF);
	  }
	  return byteArray
	}

	function utf16leToBytes (str, units) {
	  var c, hi, lo;
	  var byteArray = [];
	  for (var i = 0; i < str.length; ++i) {
	    if ((units -= 2) < 0) break

	    c = str.charCodeAt(i);
	    hi = c >> 8;
	    lo = c % 256;
	    byteArray.push(lo);
	    byteArray.push(hi);
	  }

	  return byteArray
	}


	function base64ToBytes (str) {
	  return toByteArray(base64clean(str))
	}

	function blitBuffer (src, dst, offset, length) {
	  for (var i = 0; i < length; ++i) {
	    if ((i + offset >= dst.length) || (i >= src.length)) break
	    dst[i + offset] = src[i];
	  }
	  return i
	}

	function isnan (val) {
	  return val !== val // eslint-disable-line no-self-compare
	}


	// the following is from is-buffer, also by Feross Aboukhadijeh and with same lisence
	// The _isBuffer check is for Safari 5-7 support, because it's missing
	// Object.prototype.constructor. Remove this eventually
	function isBuffer$3(obj) {
	  return obj != null && (!!obj._isBuffer || isFastBuffer(obj) || isSlowBuffer(obj))
	}

	function isFastBuffer (obj) {
	  return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
	}

	// For Node v0.10 support. Remove this eventually.
	function isSlowBuffer (obj) {
	  return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isFastBuffer(obj.slice(0, 0))
	}

	var _polyfillNode_buffer = /*#__PURE__*/Object.freeze({
		__proto__: null,
		Buffer: Buffer$3,
		INSPECT_MAX_BYTES: INSPECT_MAX_BYTES,
		SlowBuffer: SlowBuffer,
		isBuffer: isBuffer$3,
		kMaxLength: _kMaxLength
	});

	var require$$0 = /*@__PURE__*/getAugmentedNamespace(_polyfillNode_buffer);

	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	// MAIN //

	var ctor$j = require$$0.Buffer; // eslint-disable-line stdlib/require-globals


	// EXPORTS //

	var buffer = ctor$j;

	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	// TODO: write (browser) polyfill

	// MAIN //

	/**
	* Buffer constructor.
	*
	* @throws {Error} not implemented
	*/
	function polyfill$l() {
		throw new Error( 'not implemented' );
	}


	// EXPORTS //

	var polyfill_1$9 = polyfill$l;

	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	/**
	* Buffer constructor.
	*
	* @module @stdlib/buffer-ctor
	*
	* @example
	* var ctor = require( '@stdlib/buffer-ctor' );
	*
	* var b = new ctor( [ 1, 2, 3, 4 ] );
	* // returns <Buffer>
	*/

	// MODULES //

	var hasNodeBufferSupport = require$$0$1;
	var main$x = buffer;
	var polyfill$k = polyfill_1$9;


	// MAIN //

	var ctor$i;
	if ( hasNodeBufferSupport() ) {
		ctor$i = main$x;
	} else {
		ctor$i = polyfill$k;
	}


	// EXPORTS //

	var lib$F = ctor$i;

	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	// MODULES //

	var isFunction$2 = lib$19;
	var Buffer$2 = lib$F;


	// MAIN //

	var bool = isFunction$2( Buffer$2.from );


	// EXPORTS //

	var has_from = bool;

	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	// MODULES //

	var isBuffer$2 = lib$1c;
	var Buffer$1 = lib$F;


	// MAIN //

	/**
	* Copies buffer data to a new `Buffer` instance.
	*
	* @param {Buffer} buffer - buffer from which to copy
	* @throws {TypeError} must provide a `Buffer` instance
	* @returns {Buffer} new `Buffer` instance
	*
	* @example
	* var fromArray = require( '@stdlib/buffer-from-array' );
	*
	* var b1 = fromArray( [ 1, 2, 3, 4 ] );
	* // returns <Buffer>
	*
	* var b2 = fromBuffer( b1 );
	* // returns <Buffer>
	*/
	function fromBuffer$1( buffer ) {
		if ( !isBuffer$2( buffer ) ) {
			throw new TypeError( 'invalid argument. Must provide a Buffer. Value: `' + buffer + '`' );
		}
		return Buffer$1.from( buffer );
	}


	// EXPORTS //

	var main$w = fromBuffer$1;

	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	// MODULES //

	var isBuffer$1 = lib$1c;
	var Buffer = lib$F;


	// MAIN //

	/**
	* Copies buffer data to a new `Buffer` instance.
	*
	* @param {Buffer} buffer - buffer from which to copy
	* @throws {TypeError} must provide a `Buffer` instance
	* @returns {Buffer} new `Buffer` instance
	*
	* @example
	* var fromArray = require( '@stdlib/buffer-from-array' );
	*
	* var b1 = fromArray( [ 1, 2, 3, 4 ] );
	* // returns <Buffer>
	*
	* var b2 = fromBuffer( b1 );
	* // returns <Buffer>
	*/
	function fromBuffer( buffer ) {
		if ( !isBuffer$1( buffer ) ) {
			throw new TypeError( 'invalid argument. Must provide a Buffer. Value: `' + buffer + '`' );
		}
		return new Buffer( buffer ); // eslint-disable-line no-buffer-constructor
	}


	// EXPORTS //

	var polyfill$j = fromBuffer;

	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	/**
	* Copy buffer data to a new `Buffer` instance.
	*
	* @module @stdlib/buffer-from-buffer
	*
	* @example
	* var fromArray = require( '@stdlib/buffer-from-array' );
	* var copyBuffer = require( '@stdlib/buffer-from-buffer' );
	*
	* var b1 = fromArray( [ 1, 2, 3, 4 ] );
	* // returns <Buffer>
	*
	* var b2 = copyBuffer( b1 );
	* // returns <Buffer>
	*/

	// MODULES //

	var hasFrom = has_from;
	var main$v = main$w;
	var polyfill$i = polyfill$j;


	// MAIN //

	var copyBuffer$1;
	if ( hasFrom ) {
		copyBuffer$1 = main$v;
	} else {
		copyBuffer$1 = polyfill$i;
	}


	// EXPORTS //

	var lib$E = copyBuffer$1;

	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	// MODULES //

	var nativeClass$9 = lib$1h;


	// VARIABLES //

	var hasInt8Array = ( typeof Int8Array === 'function' ); // eslint-disable-line stdlib/require-globals


	// MAIN //

	/**
	* Tests if a value is an Int8Array.
	*
	* @param {*} value - value to test
	* @returns {boolean} boolean indicating whether value is an Int8Array
	*
	* @example
	* var bool = isInt8Array( new Int8Array( 10 ) );
	* // returns true
	*
	* @example
	* var bool = isInt8Array( [] );
	* // returns false
	*/
	function isInt8Array$2( value ) {
		return (
			( hasInt8Array && value instanceof Int8Array ) || // eslint-disable-line stdlib/require-globals
			nativeClass$9( value ) === '[object Int8Array]'
		);
	}


	// EXPORTS //

	var main$u = isInt8Array$2;

	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	/**
	* Test if a value is an Int8Array.
	*
	* @module @stdlib/assert-is-int8array
	*
	* @example
	* var isInt8Array = require( '@stdlib/assert-is-int8array' );
	*
	* var bool = isInt8Array( new Int8Array( 10 ) );
	* // returns true
	*
	* bool = isInt8Array( [] );
	* // returns false
	*/

	// MODULES //

	var isInt8Array$1 = main$u;


	// EXPORTS //

	var lib$D = isInt8Array$1;

	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	/**
	* Maximum signed 8-bit integer.
	*
	* @module @stdlib/constants-int8-max
	* @type {integer32}
	*
	* @example
	* var INT8_MAX = require( '@stdlib/constants-int8-max' );
	* // returns 127
	*/


	// MAIN //

	/**
	* Maximum signed 8-bit integer.
	*
	* ## Notes
	*
	* The number is given by
	*
	* ```tex
	* 2^{7} - 1
	* ```
	*
	* which corresponds to the bit sequence
	*
	* ```binarystring
	* 01111111
	* ```
	*
	* @constant
	* @type {integer32}
	* @default 127
	*/
	var INT8_MAX$1 = 127|0; // asm type annotation


	// EXPORTS //

	var lib$C = INT8_MAX$1;

	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	/**
	* Minimum signed 8-bit integer.
	*
	* @module @stdlib/constants-int8-min
	* @type {integer32}
	*
	* @example
	* var INT8_MIN = require( '@stdlib/constants-int8-min' );
	* // returns -128
	*/


	// MAIN //

	/**
	* Minimum signed 8-bit integer.
	*
	* ## Notes
	*
	* The number is given by
	*
	* ```tex
	* -(2^{7})
	* ```
	*
	* which corresponds to the two's complement bit sequence
	*
	* ```binarystring
	* 10000000
	* ```
	*
	* @constant
	* @type {integer32}
	* @default -128
	*/
	var INT8_MIN$1 = -128|0; // asm type annotation


	// EXPORTS //

	var lib$B = INT8_MIN$1;

	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	// MAIN //

	var main$t = ( typeof Int8Array === 'function' ) ? Int8Array : null; // eslint-disable-line stdlib/require-globals


	// EXPORTS //

	var int8array$2 = main$t;

	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	// MODULES //

	var isInt8Array = lib$D;
	var INT8_MAX = lib$C;
	var INT8_MIN = lib$B;
	var GlobalInt8Array = int8array$2;


	// MAIN //

	/**
	* Tests for native `Int8Array` support.
	*
	* @returns {boolean} boolean indicating if an environment has `Int8Array` support
	*
	* @example
	* var bool = hasInt8ArraySupport();
	* // returns <boolean>
	*/
	function hasInt8ArraySupport$2() {
		var bool;
		var arr;

		if ( typeof GlobalInt8Array !== 'function' ) {
			return false;
		}
		// Test basic support...
		try {
			arr = new GlobalInt8Array( [ 1, 3.14, -3.14, INT8_MAX+1 ] );
			bool = (
				isInt8Array( arr ) &&
				arr[ 0 ] === 1 &&
				arr[ 1 ] === 3 &&     // truncation
				arr[ 2 ] === -3 &&    // truncation
				arr[ 3 ] === INT8_MIN // wrap around
			);
		} catch ( err ) { // eslint-disable-line no-unused-vars
			bool = false;
		}
		return bool;
	}


	// EXPORTS //

	var main$s = hasInt8ArraySupport$2;

	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	/**
	* Test for native `Int8Array` support.
	*
	* @module @stdlib/assert-has-int8array-support
	*
	* @example
	* var hasInt8ArraySupport = require( '@stdlib/assert-has-int8array-support' );
	*
	* var bool = hasInt8ArraySupport();
	* // returns <boolean>
	*/

	// MODULES //

	var hasInt8ArraySupport$1 = main$s;


	// EXPORTS //

	var lib$A = hasInt8ArraySupport$1;

	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	// MAIN //

	var ctor$h = ( typeof Int8Array === 'function' ) ? Int8Array : void 0; // eslint-disable-line stdlib/require-globals


	// EXPORTS //

	var int8array$1 = ctor$h;

	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	// TODO: write polyfill

	// MAIN //

	/**
	* Typed array which represents an array of twos-complement 8-bit signed integers in the platform byte order.
	*
	* @throws {Error} not implemented
	*/
	function polyfill$h() {
		throw new Error( 'not implemented' );
	}


	// EXPORTS //

	var polyfill_1$8 = polyfill$h;

	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	/**
	* Typed array constructor which returns a typed array representing an array of twos-complement 8-bit signed integers in the platform byte order.
	*
	* @module @stdlib/array-int8
	*
	* @example
	* var ctor = require( '@stdlib/array-int8' );
	*
	* var arr = new ctor( 10 );
	* // returns <Int8Array>
	*/

	// MODULES //

	var hasInt8ArraySupport = lib$A;
	var builtin$8 = int8array$1;
	var polyfill$g = polyfill_1$8;


	// MAIN //

	var ctor$g;
	if ( hasInt8ArraySupport() ) {
		ctor$g = builtin$8;
	} else {
		ctor$g = polyfill$g;
	}


	// EXPORTS //

	var lib$z = ctor$g;

	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	// MODULES //

	var nativeClass$8 = lib$1h;


	// VARIABLES //

	var hasUint8Array = ( typeof Uint8Array === 'function' ); // eslint-disable-line stdlib/require-globals


	// MAIN //

	/**
	* Tests if a value is a Uint8Array.
	*
	* @param {*} value - value to test
	* @returns {boolean} boolean indicating whether value is a Uint8Array
	*
	* @example
	* var bool = isUint8Array( new Uint8Array( 10 ) );
	* // returns true
	*
	* @example
	* var bool = isUint8Array( [] );
	* // returns false
	*/
	function isUint8Array$2( value ) {
		return (
			( hasUint8Array && value instanceof Uint8Array ) || // eslint-disable-line stdlib/require-globals
			nativeClass$8( value ) === '[object Uint8Array]'
		);
	}


	// EXPORTS //

	var main$r = isUint8Array$2;

	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	/**
	* Test if a value is a Uint8Array.
	*
	* @module @stdlib/assert-is-uint8array
	*
	* @example
	* var isUint8Array = require( '@stdlib/assert-is-uint8array' );
	*
	* var bool = isUint8Array( new Uint8Array( 10 ) );
	* // returns true
	*
	* bool = isUint8Array( [] );
	* // returns false
	*/

	// MODULES //

	var isUint8Array$1 = main$r;


	// EXPORTS //

	var lib$y = isUint8Array$1;

	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	/**
	* Maximum unsigned 8-bit integer.
	*
	* @module @stdlib/constants-uint8-max
	* @type {integer32}
	*
	* @example
	* var UINT8_MAX = require( '@stdlib/constants-uint8-max' );
	* // returns 255
	*/


	// MAIN //

	/**
	* Maximum unsigned 8-bit integer.
	*
	* ## Notes
	*
	* The number has the value
	*
	* ```tex
	* 2^{8} - 1
	* ```
	*
	* which corresponds to the bit sequence
	*
	* ```binarystring
	* 11111111
	* ```
	*
	* @constant
	* @type {integer32}
	* @default 255
	*/
	var UINT8_MAX$1 = 255|0; // asm type annotation


	// EXPORTS //

	var lib$x = UINT8_MAX$1;

	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	// MAIN //

	var main$q = ( typeof Uint8Array === 'function' ) ? Uint8Array : null; // eslint-disable-line stdlib/require-globals


	// EXPORTS //

	var uint8array$2 = main$q;

	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	// MODULES //

	var isUint8Array = lib$y;
	var UINT8_MAX = lib$x;
	var GlobalUint8Array = uint8array$2;


	// MAIN //

	/**
	* Tests for native `Uint8Array` support.
	*
	* @returns {boolean} boolean indicating if an environment has `Uint8Array` support
	*
	* @example
	* var bool = hasUint8ArraySupport();
	* // returns <boolean>
	*/
	function hasUint8ArraySupport$2() {
		var bool;
		var arr;

		if ( typeof GlobalUint8Array !== 'function' ) {
			return false;
		}
		// Test basic support...
		try {
			arr = [ 1, 3.14, -3.14, UINT8_MAX+1, UINT8_MAX+2 ];
			arr = new GlobalUint8Array( arr );
			bool = (
				isUint8Array( arr ) &&
				arr[ 0 ] === 1 &&
				arr[ 1 ] === 3 &&           // truncation
				arr[ 2 ] === UINT8_MAX-2 && // truncation and wrap around
				arr[ 3 ] === 0 &&           // wrap around
				arr[ 4 ] === 1              // wrap around
			);
		} catch ( err ) { // eslint-disable-line no-unused-vars
			bool = false;
		}
		return bool;
	}


	// EXPORTS //

	var main$p = hasUint8ArraySupport$2;

	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	/**
	* Test for native `Uint8Array` support.
	*
	* @module @stdlib/assert-has-uint8array-support
	*
	* @example
	* var hasUint8ArraySupport = require( '@stdlib/assert-has-uint8array-support' );
	*
	* var bool = hasUint8ArraySupport();
	* // returns <boolean>
	*/

	// MODULES //

	var hasUint8ArraySupport$1 = main$p;


	// EXPORTS //

	var lib$w = hasUint8ArraySupport$1;

	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	// MAIN //

	var ctor$f = ( typeof Uint8Array === 'function' ) ? Uint8Array : void 0; // eslint-disable-line stdlib/require-globals


	// EXPORTS //

	var uint8array$1 = ctor$f;

	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	// TODO: write polyfill

	// MAIN //

	/**
	* Typed array which represents an array of 8-bit unsigned integers in the platform byte order.
	*
	* @throws {Error} not implemented
	*/
	function polyfill$f() {
		throw new Error( 'not implemented' );
	}


	// EXPORTS //

	var polyfill_1$7 = polyfill$f;

	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	/**
	* Typed array constructor which returns a typed array representing an array of 8-bit unsigned integers in the platform byte order.
	*
	* @module @stdlib/array-uint8
	*
	* @example
	* var ctor = require( '@stdlib/array-uint8' );
	*
	* var arr = new ctor( 10 );
	* // returns <Uint8Array>
	*/

	// MODULES //

	var hasUint8ArraySupport = lib$w;
	var builtin$7 = uint8array$1;
	var polyfill$e = polyfill_1$7;


	// MAIN //

	var ctor$e;
	if ( hasUint8ArraySupport() ) {
		ctor$e = builtin$7;
	} else {
		ctor$e = polyfill$e;
	}


	// EXPORTS //

	var lib$v = ctor$e;

	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	// MODULES //

	var nativeClass$7 = lib$1h;


	// VARIABLES //

	var hasUint8ClampedArray = ( typeof Uint8ClampedArray === 'function' ); // eslint-disable-line stdlib/require-globals


	// MAIN //

	/**
	* Tests if a value is a Uint8ClampedArray.
	*
	* @param {*} value - value to test
	* @returns {boolean} boolean indicating whether value is a Uint8ClampedArray
	*
	* @example
	* var bool = isUint8ClampedArray( new Uint8ClampedArray( 10 ) );
	* // returns true
	*
	* @example
	* var bool = isUint8ClampedArray( [] );
	* // returns false
	*/
	function isUint8ClampedArray$2( value ) {
		return (
			( hasUint8ClampedArray && value instanceof Uint8ClampedArray ) || // eslint-disable-line stdlib/require-globals
			nativeClass$7( value ) === '[object Uint8ClampedArray]'
		);
	}


	// EXPORTS //

	var main$o = isUint8ClampedArray$2;

	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	/**
	* Test if a value is a Uint8ClampedArray.
	*
	* @module @stdlib/assert-is-uint8clampedarray
	*
	* @example
	* var isUint8ClampedArray = require( '@stdlib/assert-is-uint8clampedarray' );
	*
	* var bool = isUint8ClampedArray( new Uint8ClampedArray( 10 ) );
	* // returns true
	*
	* bool = isUint8ClampedArray( [] );
	* // returns false
	*/

	// MODULES //

	var isUint8ClampedArray$1 = main$o;


	// EXPORTS //

	var lib$u = isUint8ClampedArray$1;

	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	// MAIN //

	var main$n = ( typeof Uint8ClampedArray === 'function' ) ? Uint8ClampedArray : null; // eslint-disable-line stdlib/require-globals


	// EXPORTS //

	var uint8clampedarray$2 = main$n;

	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	// MODULES //

	var isUint8ClampedArray = lib$u;
	var GlobalUint8ClampedArray = uint8clampedarray$2;


	// MAIN //

	/**
	* Tests for native `Uint8ClampedArray` support.
	*
	* @returns {boolean} boolean indicating if an environment has `Uint8ClampedArray` support
	*
	* @example
	* var bool = hasUint8ClampedArraySupport();
	* // returns <boolean>
	*/
	function hasUint8ClampedArraySupport$2() { // eslint-disable-line id-length
		var bool;
		var arr;

		if ( typeof GlobalUint8ClampedArray !== 'function' ) {
			return false;
		}
		// Test basic support...
		try {
			arr = new GlobalUint8ClampedArray( [ -1, 0, 1, 3.14, 4.99, 255, 256 ] );
			bool = (
				isUint8ClampedArray( arr ) &&
				arr[ 0 ] === 0 &&   // clamped
				arr[ 1 ] === 0 &&
				arr[ 2 ] === 1 &&
				arr[ 3 ] === 3 &&   // round to nearest
				arr[ 4 ] === 5 &&   // round to nearest
				arr[ 5 ] === 255 &&
				arr[ 6 ] === 255    // clamped
			);
		} catch ( err ) { // eslint-disable-line no-unused-vars
			bool = false;
		}
		return bool;
	}


	// EXPORTS //

	var main$m = hasUint8ClampedArraySupport$2;

	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	/**
	* Test for native `Uint8ClampedArray` support.
	*
	* @module @stdlib/assert-has-uint8clampedarray-support
	*
	* @example
	* var hasUint8ClampedArraySupport = require( '@stdlib/assert-has-uint8clampedarray-support' );
	*
	* var bool = hasUint8ClampedArraySupport();
	* // returns <boolean>
	*/

	// MODULES //

	var hasUint8ClampedArraySupport$1 = main$m;


	// EXPORTS //

	var lib$t = hasUint8ClampedArraySupport$1;

	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	// MAIN //

	var ctor$d = ( typeof Uint8ClampedArray === 'function' ) ? Uint8ClampedArray : void 0; // eslint-disable-line stdlib/require-globals


	// EXPORTS //

	var uint8clampedarray$1 = ctor$d;

	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	// TODO: write polyfill

	// MAIN //

	/**
	* Typed array which represents an array of 8-bit unsigned integers in the platform byte order clamped to 0-255.
	*
	* @throws {Error} not implemented
	*/
	function polyfill$d() {
		throw new Error( 'not implemented' );
	}


	// EXPORTS //

	var polyfill_1$6 = polyfill$d;

	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	/**
	* Typed array constructor which returns a typed array representing an array of 8-bit unsigned integers in the platform byte order clamped to 0-255.
	*
	* @module @stdlib/array-uint8c
	*
	* @example
	* var ctor = require( '@stdlib/array-uint8c' );
	*
	* var arr = new ctor( 10 );
	* // returns <Uint8ClampedArray>
	*/

	// MODULES //

	var hasUint8ClampedArraySupport = lib$t; // eslint-disable-line id-length
	var builtin$6 = uint8clampedarray$1;
	var polyfill$c = polyfill_1$6;


	// MAIN //

	var ctor$c;
	if ( hasUint8ClampedArraySupport() ) {
		ctor$c = builtin$6;
	} else {
		ctor$c = polyfill$c;
	}


	// EXPORTS //

	var lib$s = ctor$c;

	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	// MODULES //

	var nativeClass$6 = lib$1h;


	// VARIABLES //

	var hasInt16Array = ( typeof Int16Array === 'function' ); // eslint-disable-line stdlib/require-globals


	// MAIN //

	/**
	* Tests if a value is an Int16Array.
	*
	* @param {*} value - value to test
	* @returns {boolean} boolean indicating whether value is an Int16Array
	*
	* @example
	* var bool = isInt16Array( new Int16Array( 10 ) );
	* // returns true
	*
	* @example
	* var bool = isInt16Array( [] );
	* // returns false
	*/
	function isInt16Array$2( value ) {
		return (
			( hasInt16Array && value instanceof Int16Array ) || // eslint-disable-line stdlib/require-globals
			nativeClass$6( value ) === '[object Int16Array]'
		);
	}


	// EXPORTS //

	var main$l = isInt16Array$2;

	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	/**
	* Test if a value is an Int16Array.
	*
	* @module @stdlib/assert-is-int16array
	*
	* @example
	* var isInt16Array = require( '@stdlib/assert-is-int16array' );
	*
	* var bool = isInt16Array( new Int16Array( 10 ) );
	* // returns true
	*
	* bool = isInt16Array( [] );
	* // returns false
	*/

	// MODULES //

	var isInt16Array$1 = main$l;


	// EXPORTS //

	var lib$r = isInt16Array$1;

	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	/**
	* Maximum signed 16-bit integer.
	*
	* @module @stdlib/constants-int16-max
	* @type {integer32}
	*
	* @example
	* var INT16_MAX = require( '@stdlib/constants-int16-max' );
	* // returns 32767
	*/


	// MAIN //

	/**
	* Maximum signed 16-bit integer.
	*
	* ## Notes
	*
	* The number has the value
	*
	* ```tex
	* 2^{15} - 1
	* ```
	*
	* which corresponds to the bit sequence
	*
	* ```binarystring
	* 0111111111111111
	* ```
	*
	* @constant
	* @type {integer32}
	* @default 32767
	*/
	var INT16_MAX$1 = 32767|0; // asm type annotation


	// EXPORTS //

	var lib$q = INT16_MAX$1;

	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	/**
	* Minimum signed 16-bit integer.
	*
	* @module @stdlib/constants-int16-min
	* @type {integer32}
	*
	* @example
	* var INT16_MIN = require( '@stdlib/constants-int16-min' );
	* // returns -32768
	*/


	// MAIN //

	/**
	* Minimum signed 16-bit integer.
	*
	* ## Notes
	*
	* The number has the value
	*
	* ```tex
	* -(2^{15})
	* ```
	*
	* which corresponds to the two's complement bit sequence
	*
	* ```binarystring
	* 1000000000000000
	* ```
	*
	* @constant
	* @type {integer32}
	* @default -32768
	*/
	var INT16_MIN$1 = -32768|0; // asm type annotation


	// EXPORTS //

	var lib$p = INT16_MIN$1;

	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	// MAIN //

	var main$k = ( typeof Int16Array === 'function' ) ? Int16Array : null; // eslint-disable-line stdlib/require-globals


	// EXPORTS //

	var int16array$2 = main$k;

	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	// MODULES //

	var isInt16Array = lib$r;
	var INT16_MAX = lib$q;
	var INT16_MIN = lib$p;
	var GlobalInt16Array = int16array$2;


	// MAIN //

	/**
	* Tests for native `Int16Array` support.
	*
	* @returns {boolean} boolean indicating if an environment has `Int16Array` support
	*
	* @example
	* var bool = hasInt16ArraySupport();
	* // returns <boolean>
	*/
	function hasInt16ArraySupport$2() {
		var bool;
		var arr;

		if ( typeof GlobalInt16Array !== 'function' ) {
			return false;
		}
		// Test basic support...
		try {
			arr = new GlobalInt16Array( [ 1, 3.14, -3.14, INT16_MAX+1 ] );
			bool = (
				isInt16Array( arr ) &&
				arr[ 0 ] === 1 &&
				arr[ 1 ] === 3 &&      // truncation
				arr[ 2 ] === -3 &&     // truncation
				arr[ 3 ] === INT16_MIN // wrap around
			);
		} catch ( err ) { // eslint-disable-line no-unused-vars
			bool = false;
		}
		return bool;
	}


	// EXPORTS //

	var main$j = hasInt16ArraySupport$2;

	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	/**
	* Test for native `Int16Array` support.
	*
	* @module @stdlib/assert-has-int16array-support
	*
	* @example
	* var hasInt16ArraySupport = require( '@stdlib/assert-has-int16array-support' );
	*
	* var bool = hasInt16ArraySupport();
	* // returns <boolean>
	*/

	// MODULES //

	var hasInt16ArraySupport$1 = main$j;


	// EXPORTS //

	var lib$o = hasInt16ArraySupport$1;

	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	// MAIN //

	var ctor$b = ( typeof Int16Array === 'function' ) ? Int16Array : void 0; // eslint-disable-line stdlib/require-globals


	// EXPORTS //

	var int16array$1 = ctor$b;

	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	// TODO: write polyfill

	// MAIN //

	/**
	* Typed array which represents an array of twos-complement 16-bit signed integers in the platform byte order.
	*
	* @throws {Error} not implemented
	*/
	function polyfill$b() {
		throw new Error( 'not implemented' );
	}


	// EXPORTS //

	var polyfill_1$5 = polyfill$b;

	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	/**
	* Typed array constructor which returns a typed array representing an array of twos-complement 16-bit signed integers in the platform byte order.
	*
	* @module @stdlib/array-int16
	*
	* @example
	* var ctor = require( '@stdlib/array-int16' );
	*
	* var arr = new ctor( 10 );
	* // returns <Int16Array>
	*/

	// MODULES //

	var hasInt16ArraySupport = lib$o;
	var builtin$5 = int16array$1;
	var polyfill$a = polyfill_1$5;


	// MAIN //

	var ctor$a;
	if ( hasInt16ArraySupport() ) {
		ctor$a = builtin$5;
	} else {
		ctor$a = polyfill$a;
	}


	// EXPORTS //

	var lib$n = ctor$a;

	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	// MODULES //

	var nativeClass$5 = lib$1h;


	// VARIABLES //

	var hasUint16Array = ( typeof Uint16Array === 'function' ); // eslint-disable-line stdlib/require-globals


	// MAIN //

	/**
	* Tests if a value is a Uint16Array.
	*
	* @param {*} value - value to test
	* @returns {boolean} boolean indicating whether value is a Uint16Array
	*
	* @example
	* var bool = isUint16Array( new Uint16Array( 10 ) );
	* // returns true
	*
	* @example
	* var bool = isUint16Array( [] );
	* // returns false
	*/
	function isUint16Array$2( value ) {
		return (
			( hasUint16Array && value instanceof Uint16Array ) || // eslint-disable-line stdlib/require-globals
			nativeClass$5( value ) === '[object Uint16Array]'
		);
	}


	// EXPORTS //

	var main$i = isUint16Array$2;

	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	/**
	* Test if a value is a Uint16Array.
	*
	* @module @stdlib/assert-is-uint16array
	*
	* @example
	* var isUint16Array = require( '@stdlib/assert-is-uint16array' );
	*
	* var bool = isUint16Array( new Uint16Array( 10 ) );
	* // returns true
	*
	* bool = isUint16Array( [] );
	* // returns false
	*/

	// MODULES //

	var isUint16Array$1 = main$i;


	// EXPORTS //

	var lib$m = isUint16Array$1;

	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	/**
	* Maximum unsigned 16-bit integer.
	*
	* @module @stdlib/constants-uint16-max
	* @type {integer32}
	*
	* @example
	* var UINT16_MAX = require( '@stdlib/constants-uint16-max' );
	* // returns 65535
	*/


	// MAIN //

	/**
	* Maximum unsigned 16-bit integer.
	*
	* ## Notes
	*
	* The number has the value
	*
	* ```tex
	* 2^{16} - 1
	* ```
	*
	* which corresponds to the bit sequence
	*
	* ```binarystring
	* 1111111111111111
	* ```
	*
	* @constant
	* @type {integer32}
	* @default 65535
	*/
	var UINT16_MAX$1 = 65535|0; // asm type annotation


	// EXPORTS //

	var lib$l = UINT16_MAX$1;

	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	// MAIN //

	var main$h = ( typeof Uint16Array === 'function' ) ? Uint16Array : null; // eslint-disable-line stdlib/require-globals


	// EXPORTS //

	var uint16array$2 = main$h;

	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	// MODULES //

	var isUint16Array = lib$m;
	var UINT16_MAX = lib$l;
	var GlobalUint16Array = uint16array$2;


	// MAIN //

	/**
	* Tests for native `Uint16Array` support.
	*
	* @returns {boolean} boolean indicating if an environment has `Uint16Array` support
	*
	* @example
	* var bool = hasUint16ArraySupport();
	* // returns <boolean>
	*/
	function hasUint16ArraySupport$2() {
		var bool;
		var arr;

		if ( typeof GlobalUint16Array !== 'function' ) {
			return false;
		}
		// Test basic support...
		try {
			arr = [ 1, 3.14, -3.14, UINT16_MAX+1, UINT16_MAX+2 ];
			arr = new GlobalUint16Array( arr );
			bool = (
				isUint16Array( arr ) &&
				arr[ 0 ] === 1 &&
				arr[ 1 ] === 3 &&            // truncation
				arr[ 2 ] === UINT16_MAX-2 && // truncation and wrap around
				arr[ 3 ] === 0 &&            // wrap around
				arr[ 4 ] === 1               // wrap around
			);
		} catch ( err ) { // eslint-disable-line no-unused-vars
			bool = false;
		}
		return bool;
	}


	// EXPORTS //

	var main$g = hasUint16ArraySupport$2;

	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	/**
	* Test for native `Uint16Array` support.
	*
	* @module @stdlib/assert-has-uint16array-support
	*
	* @example
	* var hasUint16ArraySupport = require( '@stdlib/assert-has-uint16array-support' );
	*
	* var bool = hasUint16ArraySupport();
	* // returns <boolean>
	*/

	// MODULES //

	var hasUint16ArraySupport$1 = main$g;


	// EXPORTS //

	var lib$k = hasUint16ArraySupport$1;

	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	// MAIN //

	var ctor$9 = ( typeof Uint16Array === 'function' ) ? Uint16Array : void 0; // eslint-disable-line stdlib/require-globals


	// EXPORTS //

	var uint16array$1 = ctor$9;

	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	// TODO: write polyfill

	// MAIN //

	/**
	* Typed array which represents an array of 16-bit unsigned integers in the platform byte order.
	*
	* @throws {Error} not implemented
	*/
	function polyfill$9() {
		throw new Error( 'not implemented' );
	}


	// EXPORTS //

	var polyfill_1$4 = polyfill$9;

	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	/**
	* Typed array constructor which returns a typed array representing an array of 16-bit unsigned integers in the platform byte order.
	*
	* @module @stdlib/array-uint16
	*
	* @example
	* var ctor = require( '@stdlib/array-uint16' );
	*
	* var arr = new ctor( 10 );
	* // returns <Uint16Array>
	*/

	// MODULES //

	var hasUint16ArraySupport = lib$k;
	var builtin$4 = uint16array$1;
	var polyfill$8 = polyfill_1$4;


	// MAIN //

	var ctor$8;
	if ( hasUint16ArraySupport() ) {
		ctor$8 = builtin$4;
	} else {
		ctor$8 = polyfill$8;
	}


	// EXPORTS //

	var lib$j = ctor$8;

	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	// MODULES //

	var nativeClass$4 = lib$1h;


	// VARIABLES //

	var hasInt32Array = ( typeof Int32Array === 'function' ); // eslint-disable-line stdlib/require-globals


	// MAIN //

	/**
	* Tests if a value is an Int32Array.
	*
	* @param {*} value - value to test
	* @returns {boolean} boolean indicating whether value is an Int32Array
	*
	* @example
	* var bool = isInt32Array( new Int32Array( 10 ) );
	* // returns true
	*
	* @example
	* var bool = isInt32Array( [] );
	* // returns false
	*/
	function isInt32Array$2( value ) {
		return (
			( hasInt32Array && value instanceof Int32Array ) || // eslint-disable-line stdlib/require-globals
			nativeClass$4( value ) === '[object Int32Array]'
		);
	}


	// EXPORTS //

	var main$f = isInt32Array$2;

	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	/**
	* Test if a value is an Int32Array.
	*
	* @module @stdlib/assert-is-int32array
	*
	* @example
	* var isInt32Array = require( '@stdlib/assert-is-int32array' );
	*
	* var bool = isInt32Array( new Int32Array( 10 ) );
	* // returns true
	*
	* bool = isInt32Array( [] );
	* // returns false
	*/

	// MODULES //

	var isInt32Array$1 = main$f;


	// EXPORTS //

	var lib$i = isInt32Array$1;

	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	/**
	* Maximum signed 32-bit integer.
	*
	* @module @stdlib/constants-int32-max
	* @type {integer32}
	*
	* @example
	* var INT32_MAX = require( '@stdlib/constants-int32-max' );
	* // returns 2147483647
	*/


	// MAIN //

	/**
	* Maximum signed 32-bit integer.
	*
	* ## Notes
	*
	* The number has the value
	*
	* ```tex
	* 2^{31} - 1
	* ```
	*
	* which corresponds to the bit sequence
	*
	* ```binarystring
	* 01111111111111111111111111111111
	* ```
	*
	* @constant
	* @type {integer32}
	* @default 2147483647
	*/
	var INT32_MAX$1 = 2147483647|0; // asm type annotation


	// EXPORTS //

	var lib$h = INT32_MAX$1;

	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	/**
	* Minimum signed 32-bit integer.
	*
	* @module @stdlib/constants-int32-min
	* @type {integer32}
	*
	* @example
	* var INT32_MIN = require( '@stdlib/constants-int32-min' );
	* // returns -2147483648
	*/


	// MAIN //

	/**
	* Minimum signed 32-bit integer.
	*
	* ## Notes
	*
	* The number has the value
	*
	* ```tex
	* -(2^{31})
	* ```
	*
	* which corresponds to the two's complement bit sequence
	*
	* ```binarystring
	* 10000000000000000000000000000000
	* ```
	*
	* @constant
	* @type {integer32}
	* @default -2147483648
	*/
	var INT32_MIN$1 = -2147483648|0; // asm type annotation


	// EXPORTS //

	var lib$g = INT32_MIN$1;

	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	// MAIN //

	var main$e = ( typeof Int32Array === 'function' ) ? Int32Array : null; // eslint-disable-line stdlib/require-globals


	// EXPORTS //

	var int32array$2 = main$e;

	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	// MODULES //

	var isInt32Array = lib$i;
	var INT32_MAX = lib$h;
	var INT32_MIN = lib$g;
	var GlobalInt32Array = int32array$2;


	// MAIN //

	/**
	* Tests for native `Int32Array` support.
	*
	* @returns {boolean} boolean indicating if an environment has `Int32Array` support
	*
	* @example
	* var bool = hasInt32ArraySupport();
	* // returns <boolean>
	*/
	function hasInt32ArraySupport$2() {
		var bool;
		var arr;

		if ( typeof GlobalInt32Array !== 'function' ) {
			return false;
		}
		// Test basic support...
		try {
			arr = new GlobalInt32Array( [ 1, 3.14, -3.14, INT32_MAX+1 ] );
			bool = (
				isInt32Array( arr ) &&
				arr[ 0 ] === 1 &&
				arr[ 1 ] === 3 &&      // truncation
				arr[ 2 ] === -3 &&     // truncation
				arr[ 3 ] === INT32_MIN // wrap around
			);
		} catch ( err ) { // eslint-disable-line no-unused-vars
			bool = false;
		}
		return bool;
	}


	// EXPORTS //

	var main$d = hasInt32ArraySupport$2;

	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	/**
	* Test for native `Int32Array` support.
	*
	* @module @stdlib/assert-has-int32array-support
	*
	* @example
	* var hasInt32ArraySupport = require( '@stdlib/assert-has-int32array-support' );
	*
	* var bool = hasInt32ArraySupport();
	* // returns <boolean>
	*/

	// MODULES //

	var hasInt32ArraySupport$1 = main$d;


	// EXPORTS //

	var lib$f = hasInt32ArraySupport$1;

	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	// MAIN //

	var ctor$7 = ( typeof Int32Array === 'function' ) ? Int32Array : void 0; // eslint-disable-line stdlib/require-globals


	// EXPORTS //

	var int32array$1 = ctor$7;

	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	// TODO: write polyfill

	// MAIN //

	/**
	* Typed array which represents an array of twos-complement 32-bit signed integers in the platform byte order.
	*
	* @throws {Error} not implemented
	*/
	function polyfill$7() {
		throw new Error( 'not implemented' );
	}


	// EXPORTS //

	var polyfill_1$3 = polyfill$7;

	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	/**
	* Typed array constructor which returns a typed array representing an array of twos-complement 32-bit signed integers in the platform byte order.
	*
	* @module @stdlib/array-int32
	*
	* @example
	* var ctor = require( '@stdlib/array-int32' );
	*
	* var arr = new ctor( 10 );
	* // returns <Int32Array>
	*/

	// MODULES //

	var hasInt32ArraySupport = lib$f;
	var builtin$3 = int32array$1;
	var polyfill$6 = polyfill_1$3;


	// MAIN //

	var ctor$6;
	if ( hasInt32ArraySupport() ) {
		ctor$6 = builtin$3;
	} else {
		ctor$6 = polyfill$6;
	}


	// EXPORTS //

	var lib$e = ctor$6;

	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	// MODULES //

	var nativeClass$3 = lib$1h;


	// VARIABLES //

	var hasUint32Array = ( typeof Uint32Array === 'function' ); // eslint-disable-line stdlib/require-globals


	// MAIN //

	/**
	* Tests if a value is a Uint32Array.
	*
	* @param {*} value - value to test
	* @returns {boolean} boolean indicating whether value is a Uint32Array
	*
	* @example
	* var bool = isUint32Array( new Uint32Array( 10 ) );
	* // returns true
	*
	* @example
	* var bool = isUint32Array( [] );
	* // returns false
	*/
	function isUint32Array$2( value ) {
		return (
			( hasUint32Array && value instanceof Uint32Array ) || // eslint-disable-line stdlib/require-globals
			nativeClass$3( value ) === '[object Uint32Array]'
		);
	}


	// EXPORTS //

	var main$c = isUint32Array$2;

	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	/**
	* Test if a value is a Uint32Array.
	*
	* @module @stdlib/assert-is-uint32array
	*
	* @example
	* var isUint32Array = require( '@stdlib/assert-is-uint32array' );
	*
	* var bool = isUint32Array( new Uint32Array( 10 ) );
	* // returns true
	*
	* bool = isUint32Array( [] );
	* // returns false
	*/

	// MODULES //

	var isUint32Array$1 = main$c;


	// EXPORTS //

	var lib$d = isUint32Array$1;

	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	// MAIN //

	var main$b = ( typeof Uint32Array === 'function' ) ? Uint32Array : null; // eslint-disable-line stdlib/require-globals


	// EXPORTS //

	var uint32array$2 = main$b;

	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	// MODULES //

	var isUint32Array = lib$d;
	var UINT32_MAX = lib$L;
	var GlobalUint32Array = uint32array$2;


	// MAIN //

	/**
	* Tests for native `Uint32Array` support.
	*
	* @returns {boolean} boolean indicating if an environment has `Uint32Array` support
	*
	* @example
	* var bool = hasUint32ArraySupport();
	* // returns <boolean>
	*/
	function hasUint32ArraySupport$2() {
		var bool;
		var arr;

		if ( typeof GlobalUint32Array !== 'function' ) {
			return false;
		}
		// Test basic support...
		try {
			arr = [ 1, 3.14, -3.14, UINT32_MAX+1, UINT32_MAX+2 ];
			arr = new GlobalUint32Array( arr );
			bool = (
				isUint32Array( arr ) &&
				arr[ 0 ] === 1 &&
				arr[ 1 ] === 3 &&            // truncation
				arr[ 2 ] === UINT32_MAX-2 && // truncation and wrap around
				arr[ 3 ] === 0 &&            // wrap around
				arr[ 4 ] === 1               // wrap around
			);
		} catch ( err ) { // eslint-disable-line no-unused-vars
			bool = false;
		}
		return bool;
	}


	// EXPORTS //

	var main$a = hasUint32ArraySupport$2;

	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	/**
	* Test for native `Uint32Array` support.
	*
	* @module @stdlib/assert-has-uint32array-support
	*
	* @example
	* var hasUint32ArraySupport = require( '@stdlib/assert-has-uint32array-support' );
	*
	* var bool = hasUint32ArraySupport();
	* // returns <boolean>
	*/

	// MODULES //

	var hasUint32ArraySupport$1 = main$a;


	// EXPORTS //

	var lib$c = hasUint32ArraySupport$1;

	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	// MAIN //

	var ctor$5 = ( typeof Uint32Array === 'function' ) ? Uint32Array : void 0; // eslint-disable-line stdlib/require-globals


	// EXPORTS //

	var uint32array$1 = ctor$5;

	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	// TODO: write polyfill

	// MAIN //

	/**
	* Typed array which represents an array of 32-bit unsigned integers in the platform byte order.
	*
	* @throws {Error} not implemented
	*/
	function polyfill$5() {
		throw new Error( 'not implemented' );
	}


	// EXPORTS //

	var polyfill_1$2 = polyfill$5;

	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	/**
	* Typed array constructor which returns a typed array representing an array of 32-bit unsigned integers in the platform byte order.
	*
	* @module @stdlib/array-uint32
	*
	* @example
	* var ctor = require( '@stdlib/array-uint32' );
	*
	* var arr = new ctor( 10 );
	* // returns <Uint32Array>
	*/

	// MODULES //

	var hasUint32ArraySupport = lib$c;
	var builtin$2 = uint32array$1;
	var polyfill$4 = polyfill_1$2;


	// MAIN //

	var ctor$4;
	if ( hasUint32ArraySupport() ) {
		ctor$4 = builtin$2;
	} else {
		ctor$4 = polyfill$4;
	}


	// EXPORTS //

	var lib$b = ctor$4;

	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	// MODULES //

	var nativeClass$2 = lib$1h;


	// VARIABLES //

	var hasFloat32Array = ( typeof Float32Array === 'function' ); // eslint-disable-line stdlib/require-globals


	// MAIN //

	/**
	* Tests if a value is a Float32Array.
	*
	* @param {*} value - value to test
	* @returns {boolean} boolean indicating whether value is a Float32Array
	*
	* @example
	* var bool = isFloat32Array( new Float32Array( 10 ) );
	* // returns true
	*
	* @example
	* var bool = isFloat32Array( [] );
	* // returns false
	*/
	function isFloat32Array$2( value ) {
		return (
			( hasFloat32Array && value instanceof Float32Array ) || // eslint-disable-line stdlib/require-globals
			nativeClass$2( value ) === '[object Float32Array]'
		);
	}


	// EXPORTS //

	var main$9 = isFloat32Array$2;

	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	/**
	* Test if a value is a Float32Array.
	*
	* @module @stdlib/assert-is-float32array
	*
	* @example
	* var isFloat32Array = require( '@stdlib/assert-is-float32array' );
	*
	* var bool = isFloat32Array( new Float32Array( 10 ) );
	* // returns true
	*
	* bool = isFloat32Array( [] );
	* // returns false
	*/

	// MODULES //

	var isFloat32Array$1 = main$9;


	// EXPORTS //

	var lib$a = isFloat32Array$1;

	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	// MAIN //

	var main$8 = ( typeof Float32Array === 'function' ) ? Float32Array : null; // eslint-disable-line stdlib/require-globals


	// EXPORTS //

	var float32array$2 = main$8;

	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	// MODULES //

	var isFloat32Array = lib$a;
	var PINF$1 = lib$$;
	var GlobalFloat32Array = float32array$2;


	// MAIN //

	/**
	* Tests for native `Float32Array` support.
	*
	* @returns {boolean} boolean indicating if an environment has `Float32Array` support
	*
	* @example
	* var bool = hasFloat32ArraySupport();
	* // returns <boolean>
	*/
	function hasFloat32ArraySupport$2() {
		var bool;
		var arr;

		if ( typeof GlobalFloat32Array !== 'function' ) {
			return false;
		}
		// Test basic support...
		try {
			arr = new GlobalFloat32Array( [ 1.0, 3.14, -3.14, 5.0e40 ] );
			bool = (
				isFloat32Array( arr ) &&
				arr[ 0 ] === 1.0 &&
				arr[ 1 ] === 3.140000104904175 &&
				arr[ 2 ] === -3.140000104904175 &&
				arr[ 3 ] === PINF$1
			);
		} catch ( err ) { // eslint-disable-line no-unused-vars
			bool = false;
		}
		return bool;
	}


	// EXPORTS //

	var main$7 = hasFloat32ArraySupport$2;

	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	/**
	* Test for native `Float32Array` support.
	*
	* @module @stdlib/assert-has-float32array-support
	*
	* @example
	* var hasFloat32ArraySupport = require( '@stdlib/assert-has-float32array-support' );
	*
	* var bool = hasFloat32ArraySupport();
	* // returns <boolean>
	*/

	// MODULES //

	var hasFloat32ArraySupport$1 = main$7;


	// EXPORTS //

	var lib$9 = hasFloat32ArraySupport$1;

	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	// MAIN //

	var ctor$3 = ( typeof Float32Array === 'function' ) ? Float32Array : void 0; // eslint-disable-line stdlib/require-globals


	// EXPORTS //

	var float32array$1 = ctor$3;

	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	// TODO: write polyfill

	// MAIN //

	/**
	* Typed array which represents an array of single-precision floating-point numbers in the platform byte order.
	*
	* @throws {Error} not implemented
	*/
	function polyfill$3() {
		throw new Error( 'not implemented' );
	}


	// EXPORTS //

	var polyfill_1$1 = polyfill$3;

	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	/**
	* Typed array constructor which returns a typed array representing an array of single-precision floating-point numbers in the platform byte order.
	*
	* @module @stdlib/array-float32
	*
	* @example
	* var ctor = require( '@stdlib/array-float32' );
	*
	* var arr = new ctor( 10 );
	* // returns <Float32Array>
	*/

	// MODULES //

	var hasFloat32ArraySupport = lib$9;
	var builtin$1 = float32array$1;
	var polyfill$2 = polyfill_1$1;


	// MAIN //

	var ctor$2;
	if ( hasFloat32ArraySupport() ) {
		ctor$2 = builtin$1;
	} else {
		ctor$2 = polyfill$2;
	}


	// EXPORTS //

	var lib$8 = ctor$2;

	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	// MODULES //

	var nativeClass$1 = lib$1h;


	// VARIABLES //

	var hasFloat64Array = ( typeof Float64Array === 'function' ); // eslint-disable-line stdlib/require-globals


	// MAIN //

	/**
	* Tests if a value is a Float64Array.
	*
	* @param {*} value - value to test
	* @returns {boolean} boolean indicating whether value is a Float64Array
	*
	* @example
	* var bool = isFloat64Array( new Float64Array( 10 ) );
	* // returns true
	*
	* @example
	* var bool = isFloat64Array( [] );
	* // returns false
	*/
	function isFloat64Array$2( value ) {
		return (
			( hasFloat64Array && value instanceof Float64Array ) || // eslint-disable-line stdlib/require-globals
			nativeClass$1( value ) === '[object Float64Array]'
		);
	}


	// EXPORTS //

	var main$6 = isFloat64Array$2;

	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	/**
	* Test if a value is a Float64Array.
	*
	* @module @stdlib/assert-is-float64array
	*
	* @example
	* var isFloat64Array = require( '@stdlib/assert-is-float64array' );
	*
	* var bool = isFloat64Array( new Float64Array( 10 ) );
	* // returns true
	*
	* bool = isFloat64Array( [] );
	* // returns false
	*/

	// MODULES //

	var isFloat64Array$1 = main$6;


	// EXPORTS //

	var lib$7 = isFloat64Array$1;

	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	// MAIN //

	var main$5 = ( typeof Float64Array === 'function' ) ? Float64Array : null; // eslint-disable-line stdlib/require-globals


	// EXPORTS //

	var float64array$2 = main$5;

	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	// MODULES //

	var isFloat64Array = lib$7;
	var GlobalFloat64Array = float64array$2;


	// MAIN //

	/**
	* Tests for native `Float64Array` support.
	*
	* @returns {boolean} boolean indicating if an environment has `Float64Array` support
	*
	* @example
	* var bool = hasFloat64ArraySupport();
	* // returns <boolean>
	*/
	function hasFloat64ArraySupport$2() {
		var bool;
		var arr;

		if ( typeof GlobalFloat64Array !== 'function' ) {
			return false;
		}
		// Test basic support...
		try {
			arr = new GlobalFloat64Array( [ 1.0, 3.14, -3.14, NaN ] );
			bool = (
				isFloat64Array( arr ) &&
				arr[ 0 ] === 1.0 &&
				arr[ 1 ] === 3.14 &&
				arr[ 2 ] === -3.14 &&
				arr[ 3 ] !== arr[ 3 ]
			);
		} catch ( err ) { // eslint-disable-line no-unused-vars
			bool = false;
		}
		return bool;
	}


	// EXPORTS //

	var main$4 = hasFloat64ArraySupport$2;

	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	/**
	* Test for native `Float64Array` support.
	*
	* @module @stdlib/assert-has-float64array-support
	*
	* @example
	* var hasFloat64ArraySupport = require( '@stdlib/assert-has-float64array-support' );
	*
	* var bool = hasFloat64ArraySupport();
	* // returns <boolean>
	*/

	// MODULES //

	var hasFloat64ArraySupport$1 = main$4;


	// EXPORTS //

	var lib$6 = hasFloat64ArraySupport$1;

	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	// MAIN //

	var ctor$1 = ( typeof Float64Array === 'function' ) ? Float64Array : void 0; // eslint-disable-line stdlib/require-globals


	// EXPORTS //

	var float64array$1 = ctor$1;

	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	// TODO: write polyfill

	// MAIN //

	/**
	* Typed array which represents an array of double-precision floating-point numbers in the platform byte order.
	*
	* @throws {Error} not implemented
	*/
	function polyfill$1() {
		throw new Error( 'not implemented' );
	}


	// EXPORTS //

	var polyfill_1 = polyfill$1;

	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	/**
	* Typed array constructor which returns a typed array representing an array of double-precision floating-point numbers in the platform byte order.
	*
	* @module @stdlib/array-float64
	*
	* @example
	* var ctor = require( '@stdlib/array-float64' );
	*
	* var arr = new ctor( 10 );
	* // returns <Float64Array>
	*/

	// MODULES //

	var hasFloat64ArraySupport = lib$6;
	var builtin = float64array$1;
	var polyfill = polyfill_1;


	// MAIN //

	var ctor;
	if ( hasFloat64ArraySupport() ) {
		ctor = builtin;
	} else {
		ctor = polyfill;
	}


	// EXPORTS //

	var lib$5 = ctor;

	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	// MODULES //

	var Int8Array$1 = lib$z;
	var Uint8Array$1 = lib$v;
	var Uint8ClampedArray$1 = lib$s;
	var Int16Array$1 = lib$n;
	var Uint16Array$1 = lib$j;
	var Int32Array$1 = lib$e;
	var Uint32Array$1 = lib$b;
	var Float32Array$1 = lib$8;
	var Float64Array$1 = lib$5;


	// VARIABLES //

	var hash;


	// FUNCTIONS //

	/**
	* Copies an `Int8Array`.
	*
	* @private
	* @param {Int8Array} arr - array to copy
	* @returns {Int8Array} new array
	*/
	function int8array( arr ) {
		return new Int8Array$1( arr );
	}

	/**
	* Copies a `Uint8Array`.
	*
	* @private
	* @param {Uint8Array} arr - array to copy
	* @returns {Uint8Array} new array
	*/
	function uint8array( arr ) {
		return new Uint8Array$1( arr );
	}

	/**
	* Copies a `Uint8ClampedArray`.
	*
	* @private
	* @param {Uint8ClampedArray} arr - array to copy
	* @returns {Uint8ClampedArray} new array
	*/
	function uint8clampedarray( arr ) {
		return new Uint8ClampedArray$1( arr );
	}

	/**
	* Copies an `Int16Array`.
	*
	* @private
	* @param {Int16Array} arr - array to copy
	* @returns {Int16Array} new array
	*/
	function int16array( arr ) {
		return new Int16Array$1( arr );
	}

	/**
	* Copies a `Uint16Array`.
	*
	* @private
	* @param {Uint16Array} arr - array to copy
	* @returns {Uint16Array} new array
	*/
	function uint16array( arr ) {
		return new Uint16Array$1( arr );
	}

	/**
	* Copies an `Int32Array`.
	*
	* @private
	* @param {Int32Array} arr - array to copy
	* @returns {Int32Array} new array
	*/
	function int32array( arr ) {
		return new Int32Array$1( arr );
	}

	/**
	* Copies a `Uint32Array`.
	*
	* @private
	* @param {Uint32Array} arr - array to copy
	* @returns {Uint32Array} new array
	*/
	function uint32array( arr ) {
		return new Uint32Array$1( arr );
	}

	/**
	* Copies a `Float32Array`.
	*
	* @private
	* @param {Float32Array} arr - array to copy
	* @returns {Float32Array} new array
	*/
	function float32array( arr ) {
		return new Float32Array$1( arr );
	}

	/**
	* Copies a `Float64Array`.
	*
	* @private
	* @param {Float64Array} arr - array to copy
	* @returns {Float64Array} new array
	*/
	function float64array( arr ) {
		return new Float64Array$1( arr );
	}

	/**
	* Returns a hash of functions for copying typed arrays.
	*
	* @private
	* @returns {Object} function hash
	*/
	function typedarrays() {
		var out = {
			'int8array': int8array,
			'uint8array': uint8array,
			'uint8clampedarray': uint8clampedarray,
			'int16array': int16array,
			'uint16array': uint16array,
			'int32array': int32array,
			'uint32array': uint32array,
			'float32array': float32array,
			'float64array': float64array
		};
		return out;
	}


	// MAIN //

	hash = typedarrays();


	// EXPORTS //

	var typed_arrays = hash;

	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	// MODULES //

	var hasOwnProp$2 = lib$1i;
	var isArray$2 = lib$1f;
	var isBuffer = lib$1c;
	var isError = lib$U;
	var typeOf = lib$1a;
	var regexp = lib$S;
	var indexOf = lib$N;
	var objectKeys = lib$I;
	var propertyNames = lib$H;
	var propertyDescriptor = lib$G;
	var getPrototypeOf$1 = lib$V;
	var defineProperty = lib$1m;
	var copyBuffer = lib$E;
	var typedArrays = typed_arrays;


	// FUNCTIONS //

	/**
	* Clones a class instance.
	*
	* ## Notes
	*
	* -   This should **only** be used for simple cases. Any instances with privileged access to variables (e.g., within closures) cannot be cloned. This approach should be considered **fragile**.
	* -   The function is greedy, disregarding the notion of a `level`. Instead, the function deep copies all properties, as we assume the concept of `level` applies only to the class instance reference but not to its internal state. This prevents, in theory, two instances from sharing state.
	*
	*
	* @private
	* @param {Object} val - class instance
	* @returns {Object} new instance
	*/
	function cloneInstance( val ) {
		var cache;
		var names;
		var name;
		var refs;
		var desc;
		var tmp;
		var ref;
		var i;

		cache = [];
		refs = [];

		ref = Object.create( getPrototypeOf$1( val ) );
		cache.push( val );
		refs.push( ref );

		names = propertyNames( val );
		for ( i = 0; i < names.length; i++ ) {
			name = names[ i ];
			desc = propertyDescriptor( val, name );
			if ( hasOwnProp$2( desc, 'value' ) ) {
				tmp = ( isArray$2( val[name] ) ) ? [] : {};
				desc.value = deepCopy$1( val[name], tmp, cache, refs, -1 );
			}
			defineProperty( ref, name, desc );
		}
		if ( !Object.isExtensible( val ) ) {
			Object.preventExtensions( ref );
		}
		if ( Object.isSealed( val ) ) {
			Object.seal( ref );
		}
		if ( Object.isFrozen( val ) ) {
			Object.freeze( ref );
		}
		return ref;
	}

	/**
	* Copies an error object.
	*
	* @private
	* @param {(Error|TypeError|SyntaxError|URIError|ReferenceError|RangeError|EvalError)} error - error to copy
	* @returns {(Error|TypeError|SyntaxError|URIError|ReferenceError|RangeError|EvalError)} error copy
	*
	* @example
	* var err1 = new TypeError( 'beep' );
	*
	* var err2 = copyError( err1 );
	* // returns <TypeError>
	*/
	function copyError( error ) {
		var cache = [];
		var refs = [];
		var keys;
		var desc;
		var tmp;
		var key;
		var err;
		var i;

		// Create a new error...
		err = new error.constructor( error.message );

		cache.push( error );
		refs.push( err );

		// If a `stack` property is present, copy it over...
		if ( error.stack ) {
			err.stack = error.stack;
		}
		// Node.js specific (system errors)...
		if ( error.code ) {
			err.code = error.code;
		}
		if ( error.errno ) {
			err.errno = error.errno;
		}
		if ( error.syscall ) {
			err.syscall = error.syscall;
		}
		// Any enumerable properties...
		keys = objectKeys( error );
		for ( i = 0; i < keys.length; i++ ) {
			key = keys[ i ];
			desc = propertyDescriptor( error, key );
			if ( hasOwnProp$2( desc, 'value' ) ) {
				tmp = ( isArray$2( error[ key ] ) ) ? [] : {};
				desc.value = deepCopy$1( error[ key ], tmp, cache, refs, -1 );
			}
			defineProperty( err, key, desc );
		}
		return err;
	}


	// MAIN //

	/**
	* Recursively performs a deep copy of an input object.
	*
	* @private
	* @param {*} val - value to copy
	* @param {(Array|Object)} copy - copy
	* @param {Array} cache - an array of visited objects
	* @param {Array} refs - an array of object references
	* @param {NonNegativeInteger} level - copy depth
	* @returns {*} deep copy
	*/
	function deepCopy$1( val, copy, cache, refs, level ) {
		var parent;
		var keys;
		var name;
		var desc;
		var ctor;
		var key;
		var ref;
		var x;
		var i;
		var j;

		level -= 1;

		// Primitives and functions...
		if (
			typeof val !== 'object' ||
			val === null
		) {
			return val;
		}
		if ( isBuffer( val ) ) {
			return copyBuffer( val );
		}
		if ( isError( val ) ) {
			return copyError( val );
		}
		// Objects...
		name = typeOf( val );

		if ( name === 'date' ) {
			return new Date( +val );
		}
		if ( name === 'regexp' ) {
			return regexp( val.toString() );
		}
		if ( name === 'set' ) {
			return new Set( val );
		}
		if ( name === 'map' ) {
			return new Map( val );
		}
		if (
			name === 'string' ||
			name === 'boolean' ||
			name === 'number'
		) {
			// If provided an `Object`, return an equivalent primitive!
			return val.valueOf();
		}
		ctor = typedArrays[ name ];
		if ( ctor ) {
			return ctor( val );
		}
		// Class instances...
		if (
			name !== 'array' &&
			name !== 'object'
		) {
			// Cloning requires ES5 or higher...
			if ( typeof Object.freeze === 'function' ) {
				return cloneInstance( val );
			}
			return {};
		}
		// Arrays and plain objects...
		keys = objectKeys( val );
		if ( level > 0 ) {
			parent = name;
			for ( j = 0; j < keys.length; j++ ) {
				key = keys[ j ];
				x = val[ key ];

				// Primitive, Buffer, special class instance...
				name = typeOf( x );
				if (
					typeof x !== 'object' ||
					x === null ||
					(
						name !== 'array' &&
						name !== 'object'
					) ||
					isBuffer( x )
				) {
					if ( parent === 'object' ) {
						desc = propertyDescriptor( val, key );
						if ( hasOwnProp$2( desc, 'value' ) ) {
							desc.value = deepCopy$1( x );
						}
						defineProperty( copy, key, desc );
					} else {
						copy[ key ] = deepCopy$1( x );
					}
					continue;
				}
				// Circular reference...
				i = indexOf( cache, x );
				if ( i !== -1 ) {
					copy[ key ] = refs[ i ];
					continue;
				}
				// Plain array or object...
				ref = ( isArray$2( x ) ) ? new Array( x.length ) : {};
				cache.push( x );
				refs.push( ref );
				if ( parent === 'array' ) {
					copy[ key ] = deepCopy$1( x, ref, cache, refs, level );
				} else {
					desc = propertyDescriptor( val, key );
					if ( hasOwnProp$2( desc, 'value' ) ) {
						desc.value = deepCopy$1( x, ref, cache, refs, level );
					}
					defineProperty( copy, key, desc );
				}
			}
		} else if ( name === 'array' ) {
			for ( j = 0; j < keys.length; j++ ) {
				key = keys[ j ];
				copy[ key ] = val[ key ];
			}
		} else {
			for ( j = 0; j < keys.length; j++ ) {
				key = keys[ j ];
				desc = propertyDescriptor( val, key );
				defineProperty( copy, key, desc );
			}
		}
		if ( !Object.isExtensible( val ) ) {
			Object.preventExtensions( copy );
		}
		if ( Object.isSealed( val ) ) {
			Object.seal( copy );
		}
		if ( Object.isFrozen( val ) ) {
			Object.freeze( copy );
		}
		return copy;
	}


	// EXPORTS //

	var deep_copy = deepCopy$1;

	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	// MODULES //

	var isArray$1 = lib$1f;
	var isNonNegativeInteger = lib$W.isPrimitive;
	var PINF = lib$$;
	var deepCopy = deep_copy;


	// MAIN //

	/**
	* Copies or deep clones a value to an arbitrary depth.
	*
	* @param {*} value - value to copy
	* @param {NonNegativeInteger} [level=+infinity] - copy depth
	* @throws {TypeError} `level` must be a nonnegative integer
	* @returns {*} value copy
	*
	* @example
	* var out = copy( 'beep' );
	* // returns 'beep'
	*
	* @example
	* var value = [
	*     {
	*         'a': 1,
	*         'b': true,
	*         'c': [ 1, 2, 3 ]
	*     }
	* ];
	* var out = copy( value );
	* // returns [ { 'a': 1, 'b': true, 'c': [ 1, 2, 3 ] } ]
	*
	* var bool = ( value[0].c === out[0].c );
	* // returns false
	*/
	function copy$2( value, level ) {
		var out;
		if ( arguments.length > 1 ) {
			if ( !isNonNegativeInteger( level ) ) {
				throw new TypeError( 'invalid argument. `level` must be a nonnegative integer. Value: `' + level + '`.' );
			}
			if ( level === 0 ) {
				return value;
			}
		} else {
			level = PINF;
		}
		out = ( isArray$1( value ) ) ? new Array( value.length ) : {};
		return deepCopy( value, out, [value], [out], level );
	}


	// EXPORTS //

	var copy_1 = copy$2;

	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	/**
	* Copy or deep clone a value to an arbitrary depth.
	*
	* @module @stdlib/utils-copy
	*
	* @example
	* var copy = require( '@stdlib/utils-copy' );
	*
	* var out = copy( 'beep' );
	* // returns 'beep'
	*
	* @example
	* var copy = require( '@stdlib/utils-copy' );
	*
	* var value = [
	*     {
	*         'a': 1,
	*         'b': true,
	*         'c': [ 1, 2, 3 ]
	*     }
	* ];
	* var out = copy( value );
	* // returns [ {'a': 1, 'b': true, 'c': [ 1, 2, 3 ] } ]
	*
	* var bool = ( value[0].c === out[0].c );
	* // returns false
	*/

	// MODULES //

	var copy$1 = copy_1;


	// EXPORTS //

	var lib$4 = copy$1;

	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	// MODULES //

	var isArray = lib$1f;


	// MAIN //

	/**
	* Tests if a value is an object; e.g., `{}`.
	*
	* @param {*} value - value to test
	* @returns {boolean} boolean indicating whether value is an object
	*
	* @example
	* var bool = isObject( {} );
	* // returns true
	*
	* @example
	* var bool = isObject( null );
	* // returns false
	*/
	function isObject$3( value ) {
		return (
			typeof value === 'object' &&
			value !== null &&
			!isArray( value )
		);
	}


	// EXPORTS //

	var main$3 = isObject$3;

	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	/**
	* Test if a value is an object.
	*
	* @module @stdlib/assert-is-object
	*
	* @example
	* var isObject = require( '@stdlib/assert-is-object' );
	*
	* var bool = isObject( {} );
	* // returns true
	*
	* bool = isObject( true );
	* // returns false
	*/

	// MODULES //

	var isObject$2 = main$3;


	// EXPORTS //

	var lib$3 = isObject$2;

	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	// MODULES //

	var isObject$1 = lib$3;
	var isFunction$1 = lib$19;
	var getPrototypeOf = lib$V;
	var hasOwnProp$1 = lib$1i;
	var nativeClass = lib$1h;


	// VARIABLES //

	var objectPrototype = Object.prototype;


	// FUNCTIONS //

	/**
	* Tests that an object only has own properties.
	*
	* @private
	* @param {Object} obj - value to test
	* @returns {boolean} boolean indicating if an object only has own properties
	*/
	function ownProps( obj ) {
		var key;

		// NOTE: possibility of perf boost if key enumeration order is known (see http://stackoverflow.com/questions/18531624/isplainobject-thing).
		for ( key in obj ) {
			if ( !hasOwnProp$1( obj, key ) ) {
				return false;
			}
		}
		return true;
	}


	// MAIN //

	/**
	* Tests if a value is a plain object.
	*
	* @param {*} value - value to test
	* @returns {boolean} boolean indicating whether value is a plain object
	*
	* @example
	* var bool = isPlainObject( {} );
	* // returns true
	*
	* @example
	* var bool = isPlainObject( null );
	* // returns false
	*/
	function isPlainObject$1( value ) {
		var proto;

		// Screen for obvious non-objects...
		if ( !isObject$1( value ) ) {
			return false;
		}
		// Objects with no prototype (e.g., `Object.create( null )`) are plain...
		proto = getPrototypeOf( value );
		if ( !proto ) {
			return true;
		}
		// Objects having a prototype are plain if and only if they are constructed with a global `Object` function and the prototype points to the prototype of a plain object...
		return (
			// Cannot have own `constructor` property:
			!hasOwnProp$1( value, 'constructor' ) &&

			// Prototype `constructor` property must be a function (see also https://bugs.jquery.com/ticket/9897 and http://stackoverflow.com/questions/18531624/isplainobject-thing):
			hasOwnProp$1( proto, 'constructor' ) &&
			isFunction$1( proto.constructor ) &&
			nativeClass( proto.constructor ) === '[object Function]' &&

			// Test for object-specific method:
			hasOwnProp$1( proto, 'isPrototypeOf' ) &&
			isFunction$1( proto.isPrototypeOf ) &&

			(
				// Test if the prototype matches the global `Object` prototype (same realm):
				proto === objectPrototype ||

				// Test that all properties are own properties (cross-realm; *most* likely a plain object):
				ownProps( value )
			)
		);
	}


	// EXPORTS //

	var main$2 = isPlainObject$1;

	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	/**
	* Test if a value is a plain object.
	*
	* @module @stdlib/assert-is-plain-object
	*
	* @example
	* var isPlainObject = require( '@stdlib/assert-is-plain-object' );
	*
	* var bool = isPlainObject( {} );
	* // returns true
	*
	* bool = isPlainObject( null );
	* // returns false
	*/

	// MODULES //

	var isPlainObject = main$2;


	// EXPORTS //

	var lib$2 = isPlainObject;

	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2022 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	// MODULES //

	var isObject = lib$2;
	var hasOwnProp = lib$1i;
	var isString = lib$15.isPrimitive;


	// MAIN //

	/**
	* Validates function options.
	*
	* @private
	* @param {Object} opts - destination object
	* @param {Options} options - options to validate
	* @param {string} [options.url] - website URL for full error message
	* @param {string} [options.message] - error message template with `{{url}}` and `{{code}}` placeholders that will be replaced
	* @returns {(Error|null)} error object or null
	*/
	function validate$1( opts, options ) {
		if ( !isObject( options ) ) {
			return new TypeError( 'invalid argument. Options argument must be an object. Value: `' + options + '`.' );
		}
		if ( hasOwnProp( options, 'url' ) ) {
			opts.url = options.url;
			if ( !isString( opts.url ) ) {
				return new TypeError( 'invalid option. `url` option must be a string primitive. Option: `' + opts.url + '`.' );
			}
		}
		if ( hasOwnProp( options, 'message' ) ) {
			opts.message = options.message;
			if ( !isString( opts.message ) ) {
				return new TypeError( 'invalid option. `message` option must be a string primitive. Option: `' + opts.message + '`.' );
			}
		}
		return null;
	}


	// EXPORTS //

	var validate_1 = validate$1;

	var url="https://stdlib.io/docs/api/latest/error-decoder.html";var message="Minified stdlib error code: {{code}}. Visit {{url}} for the full message.";var require$$1 = {url:url,message:message};

	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2022 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	// MODULES //

	var replace = lib$12;
	var copy = lib$4;
	var validate = validate_1;
	var defaults$1 = require$$1;


	// MAIN //

	/**
	* Returns a function which formats an error message for production.
	*
	* @param {Options} options - function options
	* @param {string} [options.url] - website URL for full error message
	* @param {string} [options.message] - error message template with `{{url}}` and `{{code}}` placeholders that will be replaced
	* @returns {Function} error formatting function
	*
	* @example
	* var opts = {
	*     'url': 'https://stdlib.io/error-decoder.html'
	* };
	*
	* var fcn = factory( opts );
	* // returns <Function>
	*/
	function factory$2( options ) {
		var opts;
		var err;
		opts = copy( defaults$1 );
		err = validate( opts, options );
		if ( err ) {
			throw err;
		}
		return formatProdErrorMessage;

		/**
		* Formats an error message for production.
		*
		* @private
		* @param {string} code - error code
		* @param {*} ...args - error message arguments
		* @returns {string} formatted error message
		*/
		function formatProdErrorMessage() {
			var code = arguments[ 0 ];
			var url = opts.url + '?code='+code;
			var msg;
			var i;
			for ( i = 1; i < arguments.length; i++ ) {
				url += '&arg[]=' + encodeURIComponent( arguments[ i ] );
			}
			msg = replace( opts.message, '{{url}}', url );
			msg = replace( msg, '{{code}}', code );
			return msg;
		}
	}


	// EXPORTS //

	var factory_1 = factory$2;

	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2022 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	// MODULES //

	var factory$1 = factory_1;
	var defaults = require$$1;


	// MAIN //

	/**
	* Formats an error message for production.
	*
	* @name formatProdErrorMessage
	* @type {Function}
	* @param {string} code - error code
	* @param {*} ...args - error message arguments
	* @returns {string} formatted error message
	*
	* @example
	* var msg = formatProdErrorMessage( '3', 'wrong_type' );
	* // returns <string>
	*/
	var formatProdErrorMessage$1 = factory$1( defaults );


	// EXPORTS //

	var main$1 = formatProdErrorMessage$1;

	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2022 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	/**
	* Format an error message for production.
	*
	* @module @stdlib/error-tools-fmtprodmsg
	*
	* @example
	* var formatProdErrorMessage = require( '@stdlib/error-tools-fmtprodmsg' );
	*
	* var msg = formatProdErrorMessage( '3', 'wrong_type' );
	* // returns <string>
	*/

	// MODULES //

	var setReadOnly$1 = lib$1l;
	var formatProdErrorMessage = main$1;
	var factory = factory_1;


	// MAIN //

	setReadOnly$1( formatProdErrorMessage, 'factory', factory );


	// EXPORTS //

	var lib$1 = formatProdErrorMessage;

	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2019 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	// MODULES //

	var setReadOnly = lib$1l;
	var isFunction = lib$19;
	var isIteratorLike = lib$18;
	var iteratorSymbol = lib$16;
	var format = lib$1;


	// FUNCTIONS //

	/**
	* Tests whether an array contains a provided value.
	*
	* @private
	* @param {Array} arr - input array
	* @param {*} v - test value
	* @returns {boolean} boolean indicating whether an array contains a provided value
	*
	* @example
	* var bool = contains( [ 1, 2, 3 ], 1 );
	* // returns true
	*
	* bool = contains( [ 1, 2, 3 ], 4 );
	* // returns false
	*/
	function contains( arr, v ) {
		var len;
		var i;

		len = arr.length;
		for ( i = 0; i < len; i++ ) {
			if ( arr[ i ] === v ) {
				return true;
			}
		}
		return false;
	}


	// MAIN //

	/**
	* Returns an iterator which returns unique values.
	*
	* @param {Iterator} iterator - input iterator
	* @throws {TypeError} must provide an iterator protocol-compliant object
	* @returns {Iterator} iterator
	*
	* @example
	* var array2iterator = require( '@stdlib/array-to-iterator' );
	*
	* var iter = iterUnique( array2iterator( [ 1, 2, 1, 2, 4 ] ) );
	*
	* var v = iter.next().value;
	* // returns 1
	*
	* v = iter.next().value;
	* // returns 2
	*
	* v = iter.next().value;
	* // returns 4
	*
	* var bool = iter.next().done;
	* // returns true
	*/
	function iterUnique$1( iterator ) {
		var iter;
		var hash;
		var FLG;
		if ( !isIteratorLike( iterator ) ) {
			throw new TypeError( format( '0Cz4B', iterator ) );
		}
		hash = [];

		// Create an iterator protocol-compliant object:
		iter = {};
		setReadOnly( iter, 'next', next );
		setReadOnly( iter, 'return', end );

		// If an environment supports `Symbol.iterator`, make the iterator iterable:
		if ( iteratorSymbol && isFunction( iterator[ iteratorSymbol ] ) ) {
			setReadOnly( iter, iteratorSymbol, factory );
		}
		return iter;

		/**
		* Returns an iterator protocol-compliant object containing the next iterated value.
		*
		* @private
		* @returns {Object} iterator protocol-compliant object
		*/
		function next() {
			var v;
			if ( FLG ) {
				return {
					'done': true
				};
			}
			while ( true ) {
				v = iterator.next();
				if ( v.done ) {
					FLG = true;
					return v;
				}
				v = v.value;
				if ( contains( hash, v ) === false ) {
					hash.push( v );
					break;
				}
			}
			return {
				'value': v,
				'done': false
			};
		}

		/**
		* Finishes an iterator.
		*
		* @private
		* @param {*} [value] - value to return
		* @returns {Object} iterator protocol-compliant object
		*/
		function end( value ) {
			FLG = true;
			if ( arguments.length ) {
				return {
					'value': value,
					'done': true
				};
			}
			return {
				'done': true
			};
		}

		/**
		* Returns a new iterator.
		*
		* @private
		* @returns {Iterator} iterator
		*/
		function factory() {
			return iterUnique$1( iterator[ iteratorSymbol ]() );
		}
	}


	// EXPORTS //

	var main = iterUnique$1;

	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2019 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/

	/**
	* Create an iterator which returns unique values.
	*
	* @module @stdlib/iter-unique
	*
	* @example
	* var array2iterator = require( '@stdlib/array-to-iterator' );
	* var iterUnique = require( '@stdlib/iter-unique' );
	*
	* var iter = iterUnique( array2iterator( [ 1, 2, 1, 2, 4 ] ) );
	*
	* var v = iter.next().value;
	* // returns 1
	*
	* v = iter.next().value;
	* // returns 2
	*
	* v = iter.next().value;
	* // returns 4
	*
	* var bool = iter.next().done;
	* // returns true
	*/

	// MODULES //

	var iterUnique = main;


	// EXPORTS //

	var lib = iterUnique;

	return lib;

}));
//# sourceMappingURL=browser.js.map
