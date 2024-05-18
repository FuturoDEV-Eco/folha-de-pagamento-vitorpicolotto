const calcularImposto = require("./calculo_imposto");
const calcularInss = require("./calculo_inss");
const calcularSalarioLiquido = require("./calculo_salario-liquido");
const readline = require('readline')
const fs = require('fs')
const PDFDocument = require('pdfkit')

const doc = new PDFDocument({ margin: 50, size: 'A4', fontSize: '12'})

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
                doc.pipe(fs.createWriteStream('folha_pagamento.pdf'))
                doc.text("Folha de Pagamento")
                doc.text("Data e geração:" + new Date())
                doc.text(`Nome: ${nome}`)
                doc.text(`CPF: ${cpf}`)
                doc.text(`Mês de pagamento: ${mes}`)
                doc.text("-------------------------")
                doc.text(`Salário Bruto: R$ ${salarioBruto}`)
                doc.text("-------------------------")
                doc.text(`Desconto INSS: R$ ${calcularInss(salarioBruto)}`)
                doc.text(`Imposto de Renda: R$ ${calcularImposto(salarioBruto)}`)
                doc.text("-------------------------")
                doc.text(`Salário líquido: R$ ${calcularSalarioLiquido(salarioBruto)}`)
                doc.end()
                input.close();
            });
        });
    });
})
