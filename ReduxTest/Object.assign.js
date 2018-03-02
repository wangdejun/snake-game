const person  = {
    firstName: 'Bob',
    lastName: 'Smith'
};

const newPerson = Object.assign({}, person, {age: 29});

console.dir(person);
console.dir(newPerson);
console.dir(person === newPerson);