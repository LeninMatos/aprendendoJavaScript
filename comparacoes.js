// == (comparção implícita) compara só o valor.

const numero = 5;
const texto = "5";

console.log(numero == texto)

// === (comparção explícita) compara o valor e o tipo de dado. --> As boas práticas pedem para usar essa comparação

console.log(numero === texto)

// usar 
Number()
String()

//typeoff 

console.log(typeof numero)
console.log(typeof texto)

// || Operador “ou”, retorna true caso uma condição seja válida;

// && Operador “e”, retorna true somente se todas as condições forem válidas;

// != e !==  Operadores “não igual” e “estritamente não igual”, utilizados para comparação, da mesma forma 
//que == e === retornam true ou false.

// mais operadores https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Expressions_and_operators