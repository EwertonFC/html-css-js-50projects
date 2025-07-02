const paineis = document.querySelectorAll(".painel")

paineis.forEach((painel) => {
  painel.addEventListener("click", () => {
    removerClassesAtivas()
    painel.classList.add("ativo")
  })
})

//retira os atributos da class 'ativo' do elemento que não está clicado.
function removerClassesAtivas() {
  paineis.forEach(painel => {
    painel.classList.remove("ativo")
  })
}