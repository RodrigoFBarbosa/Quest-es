function inverterString(str) {
    return str.split('').reverse().join('');
}


const stringOriginal = "Olá, mundo!";
const stringInvertida = inverterString(stringOriginal);
console.log("String original:", stringOriginal);
console.log("String invertida:", stringInvertida);