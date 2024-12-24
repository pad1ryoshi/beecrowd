var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let A = parseFloat(lines.shift());
let pA = parseFloat(3.5);
let calcA = A * pA;

let B = parseFloat(lines.shift());
let pB = parseFloat(7.5);
let calcB = B * pB;

const mediaP = ((calcA + calcB)) / ((pA + pB));

console.log(`MEDIA = ${mediaP.toFixed(5)}`);

/**

let input = require("fs").readFileSync("/dev/stdin", "utf8");
let lines = input.split("\n");

let A = parseFloat(lines.shift());
let B = parseFloat(lines.shift());

let media = (3.5 * A + 7.5 * B) / 11;

console.log(`MEDIA = ${media.toFixed(5)}`);

**/
