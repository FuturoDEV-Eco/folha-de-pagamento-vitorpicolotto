const calcularImposto = require("./calculo_imposto");
const calcularInss = require("./calculo_inss");
const calcularSalarioLiquido = require("./calculo_salario-liquido");



console.log(calcularInss(2000))
console.log(calcularImposto(2000))
console.log(calcularSalarioLiquido(2000))