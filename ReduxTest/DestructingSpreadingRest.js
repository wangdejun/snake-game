const person = {
    firstName: 'Bob',
    secondName: 'Smith',
    name: 'wangdejun',
    age: '29'
}

let { a, b} = person;
const {firstName, secondName,...otherProperties} = person;
console.log(a);
console.log(b);
console.log("-------")
console.log(firstName);
console.log(secondName);
console.log(otherProperties);

const {firstName : c, secondName : d} = person;
// rename the variable;
console.log('------------');
console.log('After rename the name');
console.log(c);
console.log(d);


const colors = ['red', 'blue', 'green', 'purple'];

const [favColor, secondFavColor, ...otherColors] = colors;

console.log(favColor);
console.log(secondFavColor);
console.log(otherColors);