
let number = parseInt(prompt('digit'));
let start = 1;
let end = number+1;
let sum = 0
for (let i = start; i < end; i++) {
    if(number%i===0){
        console.log(i)
        if(i%2===0){
            sum = sum + i;
        } 
    }
    }
console.log(sum + ' sum')


