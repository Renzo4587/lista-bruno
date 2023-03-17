var entrada1 = require("readline-sync");
var salario1 = parseFloat(entrada1.question("digite seu salario por hora: "));
var m1 = parseFloat(entrada1.question("digite as horas trabalhadas no mes: "));
if (m1 > 160) {
    var sx = (m1 - 160);
    console.log("Seu salario atual é: ", (160 + sx * 1.5) * salario1, "(com hora extra)");
}
else if (m1 <= 160) {
    console.log("seu salario total é: ", m1 * salario1);
}
else {
    console.log("digite o valor em numeros.");
}
