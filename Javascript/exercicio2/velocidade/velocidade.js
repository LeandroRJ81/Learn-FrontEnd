const carro1= prompt("Informe o nome do primeiro veículo:")
const velocidade1 = parseFloat(prompt("Insira a velocidade do carro 1:"))

const carro2= prompt("Informe o nome do segundo veículo:")
const velocidade2 = parseFloat(prompt("Insira a velocidade do carro 2:"))

if (velocidade1 > velocidade2) {
    alert(carro1 + " é mais rápido que " + carro2)
} else if (carro1 < carro2) {
    alertalert(carro2 + " é mais rápido que " + carro1)
} else {
    alert(carro1 + " e " + carro2 + " estão na mesma velocidade")
}