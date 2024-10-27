let resposta = prompt("Você quer seguir para a área de front-end ou de back-end?");

// while (resposta === "front-end") {
//     let respostaFramework = prompt(`Qual framework você deseja aprender no mundo do ${resposta}: React ou Vue?`);
//     let respostaOutrosFrameworks = prompt(`Vi que você quer aprender ${respostaFramework}. O que mais você gostaria de aprender?`);
//     alert(`Que bom que você quer aprender ${respostaFramework} e ${respostaOutrosFrameworks}. Desejo sucesso na sua jornada!`)
//     break;
// }

if (resposta === "front-end") {
    let respostaFramework = prompt(`Qual framework você deseja aprender no mundo do ${resposta}: React ou Vue?`)
    let respostaOutrosFrameworks = prompt(`Vi que você quer aprender ${respostaFramework}. O que mais você gostaria de aprender?`);
    alert(`Que bom que você quer aprender ${respostaFramework} e ${respostaOutrosFrameworks}. Desejo sucesso na sua jornada!`)
} else if (resposta === "back-end") {
    let respostaLinguagemBack = prompt(`Qual linguagem você deseja aprender no mundo do ${resposta}: C# ou Java?`)
    alert(`Vejo que quer aprender ${respostaLinguagemBack}`);
} else {
    alert("Você não diigitou nenhuma resposta! :(")
}