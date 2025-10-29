// Seleciona os elementos do formulário
const amount = document.getElementById("amount")

// Captura o evento de input para formatar o valor
amount.oninput = () => {
  // Obtém o valor atual do input e remove os caracteres não númericos
  let value = amount.value.replace(/\D/g, "")
  
  // Atualiza o valor do input para o usuário
  amount.value = value
}
