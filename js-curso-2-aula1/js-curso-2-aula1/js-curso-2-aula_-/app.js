// O "document" serve para manipular algum conteúdo no HTML, porém, já que o html tem muitos elementos. O "querySelector" expõe o que deve ser selecionado.

let titulo = document.querySelector('h1');
titulo.innerHTML = 'Jogo do número secreto';

let paragrafo = document.querySelector('p');
paragrafo.innerHTML = 'Escolha um número entre 1 e 10.';

function verificarChute() {

    console.log ("O botão foi clicado!");
}