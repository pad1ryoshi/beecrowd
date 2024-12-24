var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let produto1 = lines.shift().split(' ');
let a1 = parseInt(produto1[0]);
let b1 = parseInt(produto1[1]);
let c1 = parseFloat(produto1[2]);
  
let produto2 = lines.shift().split(' ');
let a2 = parseInt(produto2[0]);
let b2 = parseInt(produto2[1]);
let c2 = parseFloat(produto2[2]);

let valor = b1 * c1 + b2 * c2; 

console.log(`VALOR A PAGAR: R$ ${valor.toFixed(2)}`);