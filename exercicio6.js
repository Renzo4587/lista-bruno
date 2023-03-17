var entrada6 = require("readline-sync");
var time1 = (entrada6.question("qual o primeiro time: "));
var time2 = (entrada6.question("qual o segundo time: "));
var gol1 = parseFloat(entrada6.question("quantos gols o primeiro time fez: "));
var gol2 = parseFloat(entrada6.question("quantos gols o segundo time fez: "));
if (gol1 > gol2) {
    console.log(time1 + "ganhou de: " + gol1 + "a" + gol2);
}
if (gol2 > gol1) {
    console.log(time2 + " ganhou de: " + gol2 + "a" + gol1);
}
if (gol1 == gol2) {
    console.log("o jogo ficou empatado");
}
