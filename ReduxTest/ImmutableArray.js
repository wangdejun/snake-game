var colors = ['red', 'yellow', 'orange', 'blue'];
console.dir(colors);
colors.push('purple');
var newColors = colors.concat('green');

console.dir(colors);
console.dir(newColors);
console.dir(colors);


var newColors_1 = colors.slice(1);
console.log('--------');
console.dir(colors);
console.dir(newColors_1);


