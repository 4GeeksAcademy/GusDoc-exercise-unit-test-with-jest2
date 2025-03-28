
const sum = function(a, b) {
    return a + b;
};

  
const fromEuroToDollar = function(valueInEuro){
    // convertimos el valor a dolares
    let valueInDollar = valueInEuro * 1.2;
    // retornamos el valor
    return valueInDollar;
}
const fromDollarToYen = function(valueInDollar) {
  
    let valueInYen = valueInDollar * 4.2;

    return valueInYen;
};

const fromYenToPound = function(valueInYen) {

    let valueInPound = valueInYen * 4.2;
 
    return valueInPound;
};

test("One euro should be 1.206 dollars", function(){

    const { fromEuroToDollar } = require('./app.js')
    

    expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro son 1.2 dolares, entonces 3.5 euros deberian ser = (3.5 * 1.2)
})


module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };