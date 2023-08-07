
let number = parseInt(prompt('digit'));
let start = 1;
let end = number;
let sum = 0
let evenValues = ''
for (let i = start; i <= end; i++) {
    if(number%i===0){
        console.log(i)
        if(i%2===0){
            sum = sum + i;
            evenValues++
        } 
    }
}
console.log(evenValues);
console.log(sum + ' sum')
