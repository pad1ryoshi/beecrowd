var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var n = 3.14159;

let r = parseFloat(lines.shift());
let A = (r * r) * n
console.log(`A=${A.toFixed(4)}`);