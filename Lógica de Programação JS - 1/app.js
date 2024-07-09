alert('Boas vindas ao jogo do número secreto');
let multiplicador = 30;
let numeroSecreto = parseInt(Math.random()*multiplicador+1);
console.log(numeroSecreto);
let chute;
let tentativas = 1;

// Enquanto não for igual ao número secreto (!= não igual)
while (chute != numeroSecreto) {
       chute = prompt(`Escolha um número entre 1 e ${multiplicador}`);
    // Se chute for igual ao número secreto
    if (chute == numeroSecreto) {
        break;
    } else {
        if (numeroSecreto > chute) {
            alert(`O número secreto é maior que ${chute}`);
        }else {
            alert(`O número secreto é menor que ${chute}`);
    }
    //tentativas = tentativas + 1;
    tentativas++;
}
}

// outra forma de escrever "se, então, se não"
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Isso ai! Você descobriu o número secreto (${numeroSecreto}) com ${tentativas} ${palavraTentativa}.`);

/*
if (tentativas > 1) {
    alert(`Isso ai! Você descobriu o número secreto (${numeroSecreto}) com ${tentativas} tentativas.`);
} else {
    alert(`Isso ai! Você descobriu o número secreto (${numeroSecreto}) com ${tentativas} tentativa.`);
}
*/










/*
alert('Bem vindo a meu primeiro código Javascript');
console.log('Bem vindo a meu primeiro código Javascript');
let numero = 1;

console.log(parseInt(Math.random()*1000+1));

let nota = prompt('Digite sua nota:');
if (nota >= 7) {
    console.log('Aprovado.')
        alert('Aprovado.');
} else {
    console.log('Reprovado')
        alert('Reprovado');
}


while (numero <= 10) {
    console.log(numero);
    numero++;   
}


let numero = prompt('Digite um número:');
console.log(numero);
if(numero > 0) {
    alert('Você digitou um número positivo.');
}
else {
    if(numero == 0) {
        alert('Você digitou um número neutro.');
    }
    else {
        alert('Você digitou um número negativo.');
    }
}
    



let idade = prompt('Digite sua idade:');
if (idade >= 18) {
    console.log('Você é maior de idade.')
        alert('Você é maior de idade.');
} else {
    console.log('Você é menor de idade.')
        alert('Você é menor de idade.');
}


let valor1 = 10;
let valor2 = 15;
let resultado = valor1+valor2;
console.log(resultado);

let nome = 'Marcelo';
alert(`Olá, ${nome}`);

let resposta = prompt('Qual linguagem de programação você mais gosta?');
console.log(resposta);
*/
