const readline = require('readline');

function verificarSePertenceASequencia(numero) {
    let a = 0;
    let b = 1;

    while (b <= numero) {
        if (b === numero) {
            return true;
        }

        const temp = a;
        a = b;
        b = temp + b;
    }

    return false;
}

async function main() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question("Informe um número: ", (numero) => {
        if (isNaN(numero)) {
            console.log("Entrada inválida. Por favor, insira um número válido.");
            rl.close();
            return;
        }

        const pertenceASequencia = verificarSePertenceASequencia(parseInt(numero));

        if (pertenceASequencia) {
            console.log("O número informado pertence à sequência de Fibonacci.");
        } else {
            console.log("O número informado não pertence à sequência de Fibonacci.");
        }

        rl.close();
    });
}

main();
