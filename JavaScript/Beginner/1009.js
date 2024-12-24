var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let employeeName = lines.shift();
let fixedSalary = parseFloat(lines.shift());
let totalSales = parseFloat(lines.shift());

let salary = 0.15 * totalSales + fixedSalary

console.log(`TOTAL = R$ ${salary.toFixed(2)}`);