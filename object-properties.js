const students = [
    {id:12, name:'jamal molla'},
    {id: 13, name: 'kamal molla'},
    {id: 14, name: 'Fahim sarker'},
    {id: 15, name: 'pavel molla'},
    {id: 16, name: 'Kajol miah'}
];
 
const output = [];
for(let i = 0; i < Students.length; i++){
    const element = Students[i];
    const name = element.name;
    output.push(name);
     
}
const names = students.map(x => x . name); 
const ids = students.map(x => x.id);
const bigger = students.filter(x => x.id < 15);
const biggerOne = students.find(c => c.id > 14);
console.log(biggerOne);