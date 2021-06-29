/* console.log("Un %s y un %s", "Perro", "Gato");

console.info('Hello, World!');
console.warn('Hello, Error!');

console.assert(42 == '42');
console.assert(42 === '42'); */

// console.trace('Hello');

const util = require('util');
const debuglog = util.debuglog('foo');

debuglog('Hello from foo');