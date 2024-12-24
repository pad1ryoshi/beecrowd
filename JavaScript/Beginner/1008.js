var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let employee = parseInt(lines.shift());
let workedHours = parseInt(lines.shift());
let receiveHour = parseFloat(lines.shift());
let salary = workedHours * receiveHour

console.log(`NUMBER = ${employee}`);
console.log(`SALARY = U$ ${salary.toFixed(2)}`);