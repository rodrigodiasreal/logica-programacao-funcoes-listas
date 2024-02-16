//Desafio da aula 1, etá no tópico 7.

let desafio = document.querySelector('h1');
desafio.innerHTML = 'Hora do desafio';

function exibirMensagemNoConsole() {

    console.log('O botão foi clicado!');
}

function alerta() {

    alert('Eu amo JS');
}

function exibePrompt() {

    let nomeDaCidade = prompt('Qual o nome da cidade do Brasil que você gosta muito?');
    alert(`Estive em ${nomeDaCidade} e me lembrei de você.`);
}

function soma(){

    let numero1 = parseInt(prompt('Diga um número'));
    let numero2 = parseInt(prompt('Diga outro número'));
    let resultado = numero1 + numero2;
    alert (`${numero1} + ${numero2} = ${resultado}`);
}