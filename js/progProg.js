// 1) Crescente
function ordenarCrescente() {
    let res20 = document.getElementById("res20");
    let lista = [];
    for (let i = 1; i <= 20; i++) {
        lista.push(i);
    }
    res20.innerHTML = `${lista}`;
}

// 2) Decrescente
function ordenarDecrescente() {
    let res20 = document.getElementById("res20");
    let lista = [];

    for (let i = 20; i >= 1; i--) {
        lista.push(i);
    }

    res20.innerHTML = `${lista}`;
}

// 3) Bubble Sort
function executarBubble() {
    let resBubble = document.getElementById("resBubble");
    let arr = [];

    for (let i = 0; i < 10; i++) {
        arr.push(Math.floor(Math.random() * 20) + 1);
    }

    let original = arr.slice();

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let aux = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = aux;
            }
        }
    }
    resBubble.innerHTML = ``
    resBubble.innerHTML +=  `Original: ${original}<br>`
    resBubble.innerHTML +=  `Ordenado: ${arr}`
}

// 4) Soma aleatória
function somarAleatorios() {
    let resSoma = document.getElementById("resSoma");
    let arr = [];
    let soma = 0;

    for (let i = 0; i < 10; i++) {
        arr.push(Math.floor(Math.random() * 220) + 1);
    }
    for (let i = 0; i < arr.length; i++) {
        soma += arr[i];
    }

    resSoma.innerHTML = ``
    resSoma.innerHTML += `Números: ${arr}<br>`
    resSoma.innerHTML += `Soma Total: ${soma}`
}

// 5) Matriz 3x3
function gerarMatriz() {
    let resMatriz = document.getElementById("resMatriz");
    let matriz = [];

    for (let i = 0; i < 3; i++) {
        matriz[i] = [];
        for (let j = 0; j < 3; j++) {
            matriz[i][j] = Math.floor(Math.random() * 20) + 1;
        }
    }
    resMatriz.innerHTML = `Os itens da matriz são: ${matriz}`;
}

// 6) IMC
function calcularIMC() {
    let peso = Number(document.getElementById("peso").value);
    let altura = Number(document.getElementById("altura").value);
    let resIMC = document.getElementById("resIMC");
    if (peso === '' || altura === '') {
        resIMC.innerHTML = "Preencha peso e altura.";
        return;
    }
    let imc = peso / (altura * altura)
    resIMC.innerHTML = `IMC: ${imc.toFixed(2)}`;
}

// 7) Celsius para Fahrenheit
function converterCtoF() {
    let resTemp = document.getElementById("resTemp");
    let temp = Number(document.getElementById("temp").value);

    let total = (temp * 9/5) + 32
    resTemp.innerHTML = `${total.toFixed(2)}F°`;
}

// 8) Fahrenheit para Celsius
function converterFtoC() {
    let resTemp = document.getElementById("resTemp");
    let temp = Number(document.getElementById("temp").value);

    let total = temp - 32 * 5/9
    resTemp.innerHTML = `${total.toFixed(2)}°C`;
}

// 9) Busca Linear
function buscarLinear() {
    let resBusca = document.getElementById("resBusca");
    let valor = Number(document.getElementById("buscaValor").value);

    let lista = [3, 7, 12, 4, 9, 22, 15, 2];
    let posicao = -1;

    for (let i = 0; i < lista.length; i++) {
        if (lista[i] === valor) {
            posicao = i;
            break;
        }
    }

    if (posicao === -1) {
        resBusca.innerHTML = `Valor não encontrado.`;
    } else {
        resBusca.innerHTML = `Valor encontrado na posição: ${posicao}`;
    }
}

