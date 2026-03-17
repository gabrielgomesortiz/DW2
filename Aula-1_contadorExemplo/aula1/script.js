let contador = 0;

const valor = document.getElementById("valor");
const botaoIncrementar = document.getElementById("incrementar");
const botaoDecrementar = document.getElementById("decrementar");
const botaoReset = document.getElementById("reset");
const historico = document.getElementById("historico");

botaoIncrementar.addEventListener("click", () => {
    contador++
    adicionarHistorico(contador)
})
botaoDecrementar.addEventListener("click", () => {
    if (contador == 0) {
        alert('não pode decrementar estando com o contador zerado')
    }
    else {
        contador--
        adicionarHistorico(contador)
    }
})

botaoReset.addEventListener("click", () => {
    contador = ''
    adicionarHistorico(contador)
})

function adicionarHistorico(contador) {
    valor.textContent = contador
    historico.innerHTML += '<div class = "historico-item">' + contador + "</div>"
}