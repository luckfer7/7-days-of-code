let numero = 7;
let tentativas = 3


while (tentativas > 0) {
    let chute = prompt("Bem vindo ao jogo do número secreto. Escolha um número entre 1 e 10:");

    if (chute == numero) {
        alert("Parabens!")
        break;
    } else {
        tentativas--;
        alert("Você errou. Tentativas restantes:" + tentativas)
    }
}

if (tentativas == 0) {
    alert("Você disperdiçou todas as tentativas. Jogo encerrado!")
    alert("O número era:" + numero);
}