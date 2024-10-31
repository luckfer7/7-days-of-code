let primeroNumero = Number(prompt("digite o primero numero:"))
let segundoNumero = Number(prompt("Digite o segundo número:"))

let operacao = prompt("Qual operação matematica você quer realizar?")

if (operacao == "somar") {
    
function somar () {
    let resultado = primeroNumero + segundoNumero;
    alert(resultado);
}
somar()
} else if (operacao == "subtrair") {
    function subtrair () {
        resultado = primeroNumero - segundoNumero;
        alert(resultado)
    }
    subtrair()
} else if (operacao == "multiplicar") {
    function multiplicar () {
        resultado = primeroNumero * segundoNumero;
        alert(resultado)
    }
    multiplicar()
} else if (operacao == "dividir") {
    function dividir () {
        resultado = primeroNumero / segundoNumero;
        alert(resultado)
    }
    dividir()
}



