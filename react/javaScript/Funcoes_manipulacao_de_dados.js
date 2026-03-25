/*Em JavaScript crie um mini-projeto:
Projeto: Analisador de lista
Entrada:
[
    {nome:"Ana", idade:22},
    {nome:"Carlos", idade:30},
    {nome:"Maria", idade:18}
]

Funções que você deve implementar:

retornar idade média

retornar pessoa mais velha

retornar lista ordenada

filtrar maiores de idade

Use:

map

filter

reduce

sort*/

function controle_fluxo() {
    entrada = [
        { nome: "Ana", idade: 12 },
        { nome: "teste", idade: 2 },
        { nome: "teste", idade: 30 },
        { nome: "Carlos", idade: 90 },
        { nome: "Maria", idade: 18 }
    ]
    let idade_media = entrada
        .map((entrada) => entrada.idade)
        .reduce((acumalador, idades) => {
            return acumalador += idades
        }, 0)

    let pessoa_velha = entrada.reduce((a, b) => {
        if (a.idade > b.idade) {
            return a
        } else {
            return b
        }
    })
    let lista_ordenada = entrada.sort((a, b) => a.idade - b.idade)
    let maiores_idade = entrada.filter((a) => a.idade >= 18)
    console.log(idade_media)
    console.log(lista_ordenada)
    console.log(pessoa_velha)
    console.log(maiores_idade)

}

controle_fluxo()