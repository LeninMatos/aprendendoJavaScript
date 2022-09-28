//Parametros de Função

function soma(num1, num2) {
    return num1 + num2;
}

console.log(soma(2, 2))
console.log(soma(2, 256))
console.log(soma(-500, 2))

// Parametro vs Argumento

// Ordem dos parâmetros altera o resultado

function nomeIdade(nome, idade) {
    return `meu nome é ${nome} e minha idade é ${idade}`
}

console.log(nomeIdade(36, "Lênin"))

function multipica(num1, num2) {
    return num1 * num2
}

console.log(multipica(soma(4, 5), soma(3, 3)))

//FUNÇÕES SEM RETORNO E SEM PARÂMETRO 

function cumprimentar() {
    console.log('oi gente!')
}

cumprimentar()

// FUNÇÕES SEM RETORNO, COM PARÂMETRO  

function cumprimentaPessoa(pessoa) {
    console.log(`oi, ${pessoa}!`)
}

cumprimentaPessoa('Helena')

//FUNÇÕES COM RETORNO, SEM PARÂMETRO
function cumprimentar() {
    return 'Oi gente!'
}

function cumprimentaPessoa(nomePessoa) {
    console.log(`${cumprimentar()} Meu nome é ${nomePessoa}`)
}

cumprimentaPessoa('Paula') // “Oi gente! Meu nome é Paula”


//FUNÇÕES COM RETORNO, E MAIS DE UM PARÂMETRO

function operacaoMatematica(numero1, numero2, numero3) {
    return numero1 + numero2 + numero3
}

console.log(operacaoMatematica(15, 30, 45)) // 90