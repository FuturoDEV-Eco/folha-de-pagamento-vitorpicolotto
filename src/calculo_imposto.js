function calcularImposto(salarioBruto){
    let imposto = 0;
    
    if (salarioBruto <= 2112){
        imposto = 0
    } else if (salarioBruto > 2112 && salarioBruto <= 2826.65){
        imposto = 158.4
    } else if (salarioBruto > 2826.65 && salarioBruto <= 3751.05){
        imposto = 370.40
    } else if (salarioBruto > 3751.06 && salarioBruto <= 4664.68){
        imposto = 651.73
    } else {
        imposto = 884.95
    }

    return imposto
}

module.exports = calcularImposto