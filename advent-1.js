import fs from 'fs';

function partOne(file) {
  const lines = fs.readFileSync(file, 'utf-8').toString().split('\n');

  const values = lines
    .map((v) => {
      const firstValue = v.split('').find((v) => !Number.isNaN(Number(v)));
      const lastValue = v.split('').findLast((v) => !Number.isNaN(Number(v)));
      return firstValue + lastValue;
    })
    .reduce((acc, prev) => +acc + +prev, 0);

  return values;
}

console.log(partOne('./data.txt'));

const numbers = {
  one: 'o1e',
  two: 't2o',
  three: 't3e',
  four: 'f4r',
  five: 'f5e',
  six: 's6x',
  seven: 's7n',
  eight: 'e8t',
  nine: 'n9e'
};

function partTwo(file) {
  const lines = fs.readFileSync(file, 'utf-8').toString().replace(/\r/g, '');

  const convertStringToNumber = Object.keys(numbers).reduce((acc, number) => {
    return acc.replaceAll(number, numbers[number]);
  }, lines);

  const numbersArray = convertStringToNumber.split('\n').map((word) => {
    return word.replace(/\D/g, '');
  });

  const firstAndLastCombined = numbersArray.map((number) => {
    if (number === null || number === undefined) return;

    const firstIndex = number.at(0);
    const lastIndex = number.at(-1);
    return `${firstIndex}${lastIndex}`;
  });

  return firstAndLastCombined.reduce((acc, prev) => +acc + +prev, 0);
}

console.log(partTwo('./data.txt'));
