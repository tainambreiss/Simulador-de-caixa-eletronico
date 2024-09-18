let saldo = 1000; // Saldo inicial fictício

function realizarOperacao() {
    const operacao = document.getElementById('operation').value;
    const valorInput = document.getElementById('amount').value;
    const valor = parseFloat(valorInput);
    const resultadoDiv = document.getElementById('result');

    // Validação de valor inválido
    if (isNaN(valor) && operacao !== 'saldo') {
        resultadoDiv.innerHTML = 'Por favor, insira um valor válido.';
        resultadoDiv.className = 'alert alert-danger';
        resultadoDiv.style.display = 'block';
        return;
    }

    if (operacao === 'saldo') {
        resultadoDiv.innerHTML = `Seu saldo atual é: R$ ${saldo.toFixed(2)}`;
        resultadoDiv.className = 'alert alert-info';
    } else if (operacao === 'sacar') {
        if (valor > saldo) {
            resultadoDiv.innerHTML = 'Saldo insuficiente para realizar o saque.';
            resultadoDiv.className = 'alert alert-danger';
        } else {
            saldo -= valor;
            resultadoDiv.innerHTML = `Saque de R$ ${valor.toFixed(2)} realizado com sucesso. Saldo atual: R$ ${saldo.toFixed(2)}`;
            resultadoDiv.className = 'alert alert-success';
        }
    } else if (operacao === 'depositar') {
        saldo += valor;
        resultadoDiv.innerHTML = `Depósito de R$ ${valor.toFixed(2)} realizado com sucesso. Saldo atual: R$ ${saldo.toFixed(2)}`;
        resultadoDiv.className = 'alert alert-success';
    }

    resultadoDiv.style.display = 'block'; // Exibe o resultado
}
