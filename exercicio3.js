var entrada3 = require("readline-sync");
var numero = parseFloat(entrada3.question("Digite o numero da sua conta: "));
var saldo = parseFloat(entrada3.question("digite seu atual saldo: "));
var debito = parseFloat(entrada3.question("digite seu debito: "));
var credito = parseFloat(entrada3.question("digite seu credito: "));
var total = (saldo + credito + debito);
if (total > 0) {
    console.log("Seu saldo positivo é de: ", +total);
}
else {
    console.log("putz, seu saldo é negativo, voce tem: ", +total);
}
