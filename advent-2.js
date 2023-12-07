import fs from 'fs';
const lines = fs
  .readFileSync('./data-2.txt', 'utf-8')
  .trim()
  .replace(/\r/g, '')
  .split('\n');

function partOne() {
  const maxNumbers = {
    red: 12,
    green: 13,
    blue: 14
  };

  return lines
    .map((line) => {
      return line
        .split(': ')[1]
        .split('; ')
        .map((set) => {
          const rounds = set.split(', ');
          return rounds.every((round) => {
            const [count, color] = round.split(' ');
            return maxNumbers[color] >= Number(count);
          });
        })
        .every((v) => v);
    })
    .reduce((s, prev, i) => {
      return prev ? s + (i + 1) : s;
    }, 0);
}

console.log(partOne());

function partTwo() {
  return lines
    .map((line) => {
      const maxNumbers = {
        red: 0,
        green: 0,
        blue: 0
      };
      line
        .split(': ')[1]
        .split('; ')
        .forEach((set) => {
          const rounds = set.split(', ');
          return rounds.forEach((round) => {
            const [count, color] = round.split(' ');
            if (maxNumbers[color] < Number(count)) {
              maxNumbers[color] = Number(count);
            }
          });
        });
      return Object.values(maxNumbers).reduce((s, v) => s * v, 1);
    })
    .reduce((s, v) => s + v, 0);
}

console.log(partTwo());
