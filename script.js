// Seleciona os elementos do formulário
const amount = document.getElementById("amount")

// Aceitando somentos números no valor da despesa
amount.oninput = () => {
  let value = amount.value.replace(/\D/g, "")
  
  amount.value = value
}