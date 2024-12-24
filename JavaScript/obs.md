# Observações sobre simulação de entrada de usuários no JS do Beecrowd

you can't use prompt( ) to take input, try to use lines.shift()

## Node.JS não consegue ler prompt ou lineshift, usar o seguinte:

const readline = require('readline'); 

const rl = readline.createInterface({ 
    input: process.stdin, 
    output: process.stdout 
});