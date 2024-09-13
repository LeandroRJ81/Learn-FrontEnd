const x = parseFloat(prompt("Insira um valor:"))
const y = parseFloat(prompt("Insira mais um valor:"))

let soma = (x + y), sub = (x-y), mult = (x*y), div = (x/y)
 
//alert(`soma = ${soma}\nsubtração = ${sub}\nmultiplicação = ${mult}\ndivisão = ${div}`)

//Correção da aula:
alert(
    "Resultados dos números " + x + " e " + y +":\n" +
    "\nSoma: " + soma +
    "\nSubtração: " + sub +
    "\nMultiplicação: " + mult +
    "\nDivisão: " + div
  )