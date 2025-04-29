
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}


const fromEuroToYen = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInYen = valueInEuro * 156.5;
    // Retornamos el valor en dólares
    return valueInYen;
}


const fromEuroToPound = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInPound = valueInEuro * 0.87;
    // Retornamos el valor en dólares
    return valueInPound;
}



const sum = (a,b) => {
    return a + b
}


console.log(sum(7,3))


module.exports = { sum, fromEuroToDollar, fromEuroToYen, fromEuroToPound };
