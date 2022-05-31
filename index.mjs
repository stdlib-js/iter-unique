// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0

/// <reference types="./index.d.ts" />
import require$$0 from 'https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs';
import require$$1 from 'https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@esm/index.mjs';
import require$$2 from 'https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-iterator-like@esm/index.mjs';
import require$$3 from 'https://cdn.jsdelivr.net/gh/stdlib-js/symbol-iterator@esm/index.mjs';
import require$$4 from 'https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@esm/index.mjs';

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

var setReadOnly = require$$0;
var isFunction = require$$1;
var isIteratorLike = require$$2;
var iteratorSymbol = require$$3;
var format = require$$4;


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

export { lib as default };
//# sourceMappingURL=index.mjs.map
