const texto1 = "Olá, mundo!";
const texto2 = 'Olá, mundo!';
const senha = "senhaSegura456!";
const stringDeNumeros = '34567';

const citacao = 'Meu nome é ';
const meuNome = "Lênin"

// concatenação (+) 

const concatenacao = citacao + meuNome;

// Unicode
const cifrao = '\u0024'
const aMaiusculo = '\u0041'
const tique = '\u2705'
const arroba = '\u0040'
const hiragana = '\u3041'

/*console.log(cifrao)
console.log(aMaiusculo)
console.log(tique)
console.log(arroba)
console.log(hiragana)*/

// template string ou template literal 

const texto = `Ciclo novo, novas caras. O técnico Tite fez jus à expectativa
de novidades na seleção brasileira e divulgou a primeira convocação depois...`

/*console.log(texto);*/

//  interpolação Exemplo 01

const produto = { id: 1, nome: 'Grampo', preco: 60, desconto: 0.1 }

const descricao = `${produto.nome} por apenas R$ ${produto.preco}`

/*console.log(descricao)*/

//  interpolação Exemplo 02

const data = new Date(1534342979126);

const mensagem = `O sistema foi iniciado as ${data.getHours()}:${data.getMinutes()}:${data.getSeconds()}`

/*console.log(mensagem);*/

//  interpolação Exemplo 03
const mensagem2 = `O valor do desconto é: ${(produto.preco - (produto.preco * produto.desconto))}`

/*console.log(mensagem2);*/

//  interpolação Exemplo 04

const contato = {
    nome: "Estevão Dias",
    login: "edrd"
}

const urlAtivacaoCadastro = "https://devmedia.com.br/cadastro/ativacao/"

const mensagem3 = `Parabéns, ${contato.nome}!

Agora você faz parte da maior comunidade de programadores do país 

Falta apenas ativar a sua conta, mas isso é bem rapidinho

Dá um pulo aqui $?usuario=${contato.login}&ativaocao=true`

/*console.log(mensagem3)*/

// o JavaScript diferencia minúsculas e maiúsculas, tanto nos valores dos dados quanto no código que escrevemos.

const cidade = "belo horizonte";
const input = "Belo Horizonte";

const inputMinusculo = input.toLowerCase(); //transformando todos os caracteres em letras minúsculas.

/*console.log(cidade === input);
console.log(cidade === inputMinusculo);*/

// quantidade de caracteres

const senha2 = "minhaSenha123"
console.log(senha2.length);
console.log(senha2.length>=15);

// null e undefined

let input1 = null;

if (input1 === null) {
 console.log('não há informação');
} else {
 console.log(input1);
}

let input2 = null;
let input3;

console.log(input2); // null
console.log(input3); // undefined

console.log(null == undefined); // true
console.log(null === undefined); // false