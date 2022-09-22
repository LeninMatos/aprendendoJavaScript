// var --> funciona em qualquer parte do código

//var altura = 5;
//var comprimento = 7;
//area = altura * comprimento;
//console.log(area)
//var area;

//let  --> primeiro declara, depois chama para usar
//Blocos de códigos são definidos pelas {}, então não é interessante termos uma variável que podemos mexer fora do bloco,
//por isso é melhor utilizarmos a let, que fica fora do bloco.

//let forma = 'retângulo';
//let altura = 5;
//let comprimento = 7;
//let area;
//if (forma === 'retângulo') {
//    area = altura * comprimento;
//} else {
//    area = (altura * comprimento) / 2;
//}
//
//console.log(area);

//const
//let area;
//const forma = 'triangulo';
//const altura = 5;
//const comprimento = 7;
//
//if (forma === 'quadrado') {
//    area = altura * comprimento;
//} else {
//    area = (altura * comprimento) / 2;
//}

//console.log(area);

var exibeMensagem = function() { 
    var mensagemForaDoIf = 'Caelum'; 
    if(true) { 
        var mensagemDentroDoIf = 'Alura'; 
        console.log(mensagemDentroDoIf)// Alura ;
    } 
    console.log(mensagemForaDoIf); // Caelum 

    console.log(mensagemDentroDoIf); // Alura 
}

exibeMensagem(); // Imprime 'Alura', 'Caelum' e 'Alura'

//Hoisting
//Em JavaScript, toda variável é “elevada/içada” (hoisting) até o topo do seu contexto de execução.
//Esse mecanismo move as variáveis para o topo do seu escopo antes da execução do código.

//Graças ao hoisting, variáveis declaradas com a palavra-chave var podem ser utilizadas mesmo antes de sua declaração.
//Por outro lado, as variáveis criadas com let só podem ser utilizadas após sua declaração, pois, apesar de serem elevadas,
//elas não são inicializadas.
//Além das variáveis declaradas com var temos a possibilidade de usar constantes por meio da palavra-chave const ou 
//utilizar variáveis com escopo de bloco através da let.