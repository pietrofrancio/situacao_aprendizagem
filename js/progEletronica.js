
let calculadoras = document.querySelectorAll('.containerCalc');

calculadoras.forEach(calc => {
    let select = calc.querySelector('.calculo');
    let valor1 = calc.querySelector('.valor1');
    let valor2 = calc.querySelector('.valor2');
    let label1 = calc.querySelector('.label1');
    let label2 = calc.querySelector('.label2');
    let resultadoDiv = calc.querySelector('.resultadoCalc');
    let resultadoText = calc.querySelector('.resultadoText');
    let botao = calc.querySelector('.btnCalcular');

    select.addEventListener('change', function() {
        valor1.value = '';
        valor2.value = '';
        resultadoDiv.style.display = 'none';

        let escolha = select.value;

        if (escolha === 'corrente') {
            label1.innerHTML = 'Tensão (V):';
            label2.innerHTML = (calc.querySelector('h2').innerText.includes('Potência')) ? 'Potência (W):' : 'Resistência (Ω):';
        } else if (escolha === 'tensao') {
            label1.innerHTML = (calc.querySelector('h2').innerText.includes('Potência')) ? 'Potência (W):' : 'Corrente (A):';
            label2.innerHTML = (calc.querySelector('h2').innerText.includes('Potência')) ? 'Corrente (A):' : 'Resistência (Ω):';
        } else if (escolha === 'resistencia') {
            label1.innerHTML = 'Tensão (V):';
            label2.innerHTML = (calc.querySelector('h2').innerText.includes('Potência')) ? 'Corrente (A):' : 'Corrente (A):';
        } else if (escolha === 'potencia') {
            label1.innerHTML = 'Tensão (V):';
            label2.innerHTML = 'Corrente (A):';
        }
    });

    botao.addEventListener('click', function() {
        let val1 = parseFloat(valor1.value);
        let val2 = parseFloat(valor2.value);
        let escolha = select.value;

        if (isNaN(val1) || isNaN(val2)) {
            resultadoDiv.style.display = 'block';
            resultadoText.innerHTML = 'Por favor, preencha os dois valores corretamente!';
            return;
        }

        let resultado;

        if (calc.querySelector('h2').innerText.includes('Potência')) {
            // Calculadora de potência
            if (escolha === 'potencia') resultado = val1 * val2;
            else if (escolha === 'corrente') resultado = val1 / val2;
            else if (escolha === 'tensao') resultado = val1 / val2;
            else resultado = (val1 * val1) / val2;
        } else {
            // Calculadora Lei de Ohm
            if (escolha === 'corrente') resultado = val1 / val2;
            else if (escolha === 'tensao') resultado = val1 * val2;
            else resultado = val1 / val2;
        }

        let unidade;
        if (calc.querySelector('h2').innerText.includes('Potência')) {
            if (escolha === 'potencia') unidade = 'W';
            else if (escolha === 'corrente') unidade = 'A';
            else if (escolha === 'tensao') unidade = 'V';
            else unidade = 'Ω';
        } else {
            if (escolha === 'corrente') unidade = 'A';
            else if (escolha === 'tensao') unidade = 'V';
            else unidade = 'Ω';
        }

        resultadoDiv.style.display = 'block';
        resultadoText.innerHTML = `${escolha.charAt(0).toUpperCase() + escolha.slice(1)} = ${resultado.toFixed(2)} ${unidade}`;
    });
});