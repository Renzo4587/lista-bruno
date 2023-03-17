var entrada2 = require("readline-sync");
var salario2 = parseFloat(entrada2.question("qual seu atual salario?: "));
var vendas = parseFloat(entrada2.question("numero total das vendas: "));
if (vendas <= 1.500) {
    var soma = vendas * 0.03;
    var total = soma + salario2;
    console.log("seu salario é de: " + total);
}
else {
    var soma = vendas * 0.05;
    var total = soma + salario2;
    console.log("seu novo salario vai ser de: " + total);
}
