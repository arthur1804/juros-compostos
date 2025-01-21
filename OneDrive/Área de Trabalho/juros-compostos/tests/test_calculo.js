const calcularJurosCompostos = require('../src/calculo');

console.log(calcularJurosCompostos(1000, 0.05, 12)); // Deve retornar ~1795.85
console.log(calcularJurosCompostos(1500, -0.02, 10)); // Deve retornar ~1221.68
