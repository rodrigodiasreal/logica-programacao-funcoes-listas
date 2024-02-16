// O "document" serve para manipular algum conteúdo no HTML, porém, já que o html tem muitos elementos. O "querySelector" expõe o que deve ser selecionado.

// let titulo = document.querySelector('h1');
// titulo.innerHTML = 'Jogo do número secreto';

// let paragrafo = document.querySelector('p');
// paragrafo.innerHTML = 'Escolha um número entre 1 e 10.';

//As linhas de baixo é uma forma de simplificar e não repetir códigos. 

let numeroSecreto = numeroAleatorio();

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirTextoNaTela('h1', 'Jogo do número secreto');
exibirTextoNaTela('p', 'Escolha um número entre 1 e 10.');

function verificarChute() {

    let chute = document.querySelector('input').value;
    console.log (chute == numeroSecreto);
}

function numeroAleatorio () {
    return parseInt(Math.random() * 10 + 1);
}
