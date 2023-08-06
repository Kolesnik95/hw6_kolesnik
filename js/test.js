// let a = 0;

// while(a < 5) {
//   console.log( + a );
//   a++;
// }

//_____________________
// let a = 0;

// do {
//   console.log("A равно " + a);
//   a++;
// } while (a < 5);


//________________________

// let digit;
// let minValue = 10;

// do {
//   digit = parseInt(prompt('Enter digit bigger than ' + minValue));
// } while(digit <= minValue);
 //__________________



 //для четных чисел
//  let number = prompt('digit');
//  for( let i = 0; i < +number; i++) {
//     if (i%2 === 0) {
//         console.log(i)
//     } 
//  }

//____________________
// for(let i = 0; i < 10; i++) {
//     if (i % 2 === 0) {
//       continue;
//     }
//     if (i === 9) {
//       break;
//     }
//     console.log(i);
//    }
   //_________________
// let a = 0;
// let b = 0;

// for(let i = 0; i < 10; i++) {
//   a++;
//   for(let j = 0; j < 10; j++) {
//      b++;
//   }
// }
// document.write(a); 
// document.write(b); 
//___________________________
let str = ' '
for ( let i = 0; i < 10; i++){
    str += `${i},`   //либо str += i ','
}
console.log(str);