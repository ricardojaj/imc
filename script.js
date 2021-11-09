function resultado() {
  let valorAltura = document.getElementById('altura').value
  let valorPeso = document.getElementById('peso').value
  const nome = document.getElementById('nome').value

  if (nome !== '' && valorAltura != '' && valorPeso !== '') {
    valorAltura = parseFloat(valorAltura)
    valorPeso = parseFloat(valorPeso)

    let resultadoImc = valorPeso / (valorAltura * valorAltura)

    if (resultadoImc < 18.5) {
      let resposta = `${nome}, a classificação é magreza. Seu IMC é `

      document.getElementById('resultado').value =
        resposta + resultadoImc.toFixed(2) + '!'
    } else if (resultadoImc >= 18.5 && resultadoImc <= 24.9) {
      let resposta = `${nome}, a classificação esta normal. Seu IMC é `

      document.getElementById('resultado').value =
        resposta + resultadoImc.toFixed(2) + '!'
    } else if (resultadoImc >= 25.0 && resultadoImc <= 29.9) {
      let resposta = `${nome}, a classificação é sobrepeso. Seu IMC é `

      document.getElementById('resultado').value =
        resposta + resultadoImc.toFixed(2) + '!'
    } else if (resultadoImc >= 30 && resultadoImc <= 34.9) {
      let resposta = `${nome}, a classificação é obesidade grau 1. Seu IMC é `

      document.getElementById('resultado').value =
        resposta + resultadoImc.toFixed(2) + '!'
    } else if (resultadoImc >= 35 && resultadoImc <= 39.9) {
      let resposta = `${nome}, a classificação é obesidade grau 2. Seu IMC é `

      document.getElementById('resultado').value =
        resposta + resultadoImc.toFixed(2) + '!'
    } else {
      let resposta = `${nome}, a classificação é obesidade grau 3. Seu IMC é `

      document.getElementById('resultado').value =
        resposta + resultadoImc.toFixed(2) + '!'
    }
  } else {
    alert('Todos os campos devem ser preenchidos')
  }
}
