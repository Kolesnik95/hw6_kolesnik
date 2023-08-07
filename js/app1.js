let start = 10;
let end = 20;
let number = ' '
  for (let i = start; i <= end; i++) {
    number += i + ', ';
  }
console.log(number.slice(0, -2));
