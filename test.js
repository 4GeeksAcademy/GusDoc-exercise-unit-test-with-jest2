
const { sum } = require('./app.js');


test('adds 14 + 9 to equal 23', () => {

    let total = sum(14, 9);


    expect(total).toBe(23);
});

test("One euro should be 1.07 dollars", function () {

    const { fromEuroToDollar } = require('./app.js');


    const dollars = fromEuroToDollar(3.5);


    const expected = 3.5 * 1.07;


    expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})

test("One euro should be 156.5 yens", function () {

    const { fromEuroToYen } = require('./app.js');


    const yens = fromEuroToYen(3.5);


    const expected = 3.5 * 156.5;

    expect(fromEuroToYen(3.5)).toBe(547.75); // 1 euro son 156.5 yens, entonces 3.5 euros deberían ser = (3.5 * 156.5)
})


test("One euro should be 0.87 pounds", function () {

    const { fromEuroToPound } = require('./app.js');


    const yens = fromEuroToPound(3.5);


    const expected = 3.5 * 0.87;


    expect(fromEuroToPound(3.5)).toBe(3.045); // 1 euro son 0.87 pounds, entonces 3.5 euros deberían ser = (3.5 * 0.87)
})