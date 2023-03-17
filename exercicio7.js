var entrada7 = require("readline-sync");
var h1 = parseFloat(entrada7.question("digite sua idade: "));
var h2 = parseFloat(entrada7.question("digite sua idade: "));
var m1 = parseFloat(entrada7.question("digite sua idade: "));
var m2 = parseFloat(entrada7.question("digite sua idade: "));
if (h1 > h2 && m1 > m2) {
    var idadem = h1 + m2;
    var idadex = h2 * m1;
    console.log("a soma é: " + idadem + " e a multiplicação é: " + idadex);
}
if (h1 > h2 && m2 > m1) {
    var idadem = h1 + m1;
    var idadex = h2 * m2;
    console.log(" a soma é: " + idadem + "e a multiplicação é : " + idadex);
}
if (h2 > h1 && m1 > m2) {
    var idadem = h2 + m2;
    var idadex = h1 * m1;
    console.log("a soma é: " + idadem + "e a multiplicação é: " + idadex);
}
if (h2 > h1 && m2 > m1) {
    var idadem = h2 + m1;
    var idadex = h1 * m2;
    console.log("a soma é: " + idadem + "e a multiplicação é: " + idadex);
}
