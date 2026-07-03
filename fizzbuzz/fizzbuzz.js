function fizzBuzz(number) {
  if (typeof number !== 'number' || Number.isNaN(number) || !Number.isFinite(number)) {
    throw new TypeError('Expected a finite number');
  }

  if (number % 15 === 0) {
    return 'FizzBuzz';
  }

  if (number % 3 === 0) {
    return 'Fizz';
  }

  if (number % 5 === 0) {
    return 'Buzz';
  }

  return String(number);
}

module.exports = fizzBuzz;
module.exports.fizzBuzz = fizzBuzz;
module.exports.fizzbuzz = fizzBuzz;
