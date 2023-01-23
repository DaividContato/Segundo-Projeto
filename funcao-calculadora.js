const calculate = (numero1, numero2, operação) => {
    let result
    switch (operação) {
        case "+":
            result = numero1 + numero2
            break;

        case "-":
            result = numero1 - numero2
            break;

        case "/":
            result = numero1 / numero2
            break;

        case "*":
            result = numero1 * numero2
            break;

        default:  result = numero1 + numero2
            break;
    }
     return result
}

console.log(calculate( 2,4, '*'))
console.log(calculate( 2,4, '-'))
console.log(calculate( 2,4, '+'))
console.log(calculate( 2,4, '/'))
