function anexarNumero(numero) {
    const display = document.getElementById('display');
    display.value += numero;
}

function anexarOperador(operador) {
    const display = document.getElementById('display');
    display.value += operador;
}

function limparDisplay() {
    const display = document.getElementById('display');
    display.value = '';
}

function calcularResultado() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch {
        display.value = 'Erro';
    }
}
