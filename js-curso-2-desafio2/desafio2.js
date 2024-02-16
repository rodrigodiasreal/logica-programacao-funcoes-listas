// Criar uma função que exibe "Olá, mundo!" no console.

function exibaNoConsole(){
    console.log('Olá, mundo!');
}

// Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.

function exibirnome(nome){
    console.log(`Olá, ${nome}!`);
}

exibirnome("Dias");

// Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.

function dobraNumero(numero){
    return numero * 2;
}

let resultadodoDobro = dobraNumero(5);
console.log(dobraNumero);

// Criar uma função que recebe três números como parâmetros e retorna a média deles.

function calcularMedia(a,b,c) {
    return (a + b + c) / 3;
}

let media = calcularMedia(2,3,8);
console.log(media);

// Criar uma função que recebe dois números como parâmetros e retorna o maior deles.

function encontrarMaior(a,b){
    let maiorNumero = a > b ? a : b;
}

let maiorNumero = encontrarMaior(15, 9);
console.log(maiorNumero);

// Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo.

function quadrado(numero) {
    return numero * numero;
  }
  
  let resultado = quadrado(2);
  console.log(resultado);






