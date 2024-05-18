const calcularImposto = require("./calculo_imposto");
const calcularInss = require("./calculo_inss");
const calcularSalarioLiquido = require("./calculo_salario-liquido");
const readline = require('readline')

const input = readline.createInterface(
    process.stdin,
    process.stdout
)

let nome = ""
let cpf = 0;
let mes = 0;
let salarioBruto = 0


input.question ("Qual é seu nome?", (nomeDigitado) => {
    nome = nomeDigitado;

    input.question("Digite seu CPF (apenas números)", (cpfDigitado)=>{
        cpf = cpfDigitado;
        input.question("Qual é o mês do pagamento? De 1 (Janeiro) a 12 (Dezembro)", (mesDigitado) =>{
            mes = mesDigitado;
            input.question("Qual é o seu salário bruto?", (salarioBrutoDigitado) =>{
                salarioBruto = salarioBrutoDigitado;
                console.log(`Nome: ${nome}`)
                console.log(`CPF: ${cpf}`)
                console.log(`Mês de pagamento: ${mes}`)
                console.log(`Salário Bruto: R$ ${salarioBruto}`)
                console.log(`Desconto INSS: R$ ${calcularInss(salarioBruto)}`)
                console.log(`Imposto de Renda: R$ ${calcularImposto(salarioBruto)}`)
                console.log(`Salário líquido: R$ ${calcularSalarioLiquido(salarioBruto)}`)
                input.close();
            });
        });
    });
})
