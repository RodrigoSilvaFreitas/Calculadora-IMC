const calculo = document.getElementById('calculo');

function imc() {
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    if (altura !== '' && peso !== '') {

        const IMC = (peso / (altura * altura)).toFixed(1);

        let classificacao = '';

        if (IMC < 18.5) {
            classificacao = 'abaixo do peso.';
        } else if (IMC < 25) {
            classificacao = 'com peso ideal. Parabéns!!!';
        } else if (IMC < 30) {
            classificacao = 'levemente acima do peso.';
        } else if (IMC < 35) {
            classificacao = 'com obesidade grau I.';
        } else if (IMC < 40) {
            classificacao = 'com obesidade grau II';
        } else {
            classificacao = 'com obesidade grau III. Cuidado!!';
        }

        resultado.textContent = `Seu IMC é ${IMC} e você está ${classificacao}`;

    } else {
        resultado.textContent = 'Preencha todos os campos!!!';
    }

}

calculo.addEventListener('click', imc);
