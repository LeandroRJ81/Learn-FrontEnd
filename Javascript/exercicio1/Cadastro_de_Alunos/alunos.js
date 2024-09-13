const nome = prompt("Insira seu nome:")
const sobrenome = prompt("Insira seu sobrenome:")
const campo_estudo = prompt("Qual campo de estudo?")
const ano_nascimento = parseFloat(prompt("Ano de nascimento:"))

/* Como eu fiz:
const idade = (2024 - ano_nascimento)

alert(nome + " " + sobrenome + " " + campo_estudo + " " + idade)

alert(`${nome} ${sobrenome} ${campo_estudo} ${idade}`)
*/

// Correção da aula:

alert(
    "Aluno cadastrado com sucesso!\n" +
    "\nNome completo: " + nome + " " + sobrenome +
    "\nCampo de estudo: " + campo_estudo +
    "\nIdade: " + (2024 - ano_nascimento)
  )