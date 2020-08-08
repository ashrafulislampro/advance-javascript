const number = [12, 34, 45, 56, 67];
const output = [];
for(let i = 0; i< number.length; i++){
    const element = number[i];
    const result = element * element;
    output.push(result);
}
console.log(output);

function square (element ){
    return element * element;
}
const square = element => element * element;
const square = X => X * X;
const result = number.map(function(element){
     return element * element;
})

const result = number.map(x => x * x);
console.log(result);

const bigger = number.filter(x => x < 15);
console.log(bigger);
 
const isHere = number.find(x => x >17);
console.log(isHere);