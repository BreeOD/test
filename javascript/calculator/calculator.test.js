const { add, multiply, divide, subtract } = require('./calculator');



test( 'the sum of 5 and 6 ', () => {
    expect(add(5, 6)).toBe(11);
});

test( 'the sum of 11 and 20 ', () => {
    expect(add(11, 20)).toBe(31);
});

test( 'the multiplication of 5 and 6 ', () => {
    expect(multiply(5, 6)).toBe(30);
});

test( 'the multiplication of 11 and 20 ', () => {   
    expect(multiply(11, 20)).toBe(220);
}); 

test( 'the division of 5 and 6 ', () => {
    expect(divide(5, 6)).toBe(0.8333333333333334);
});

test( 'the division of 11 and 20 ', () => {   
    expect(divide(11, 20)).toBe(0.55);
});

test( 'the subtraction of 5 and 6 ', () => {
    expect(subtract(5, 6)).toBe(-1);
});

test( 'the subtraction of 11 and 20 ', () => {   
    expect(subtract(11, 20)).toBe(-9);
});


