console.log("Hello from Node");

const tut = require ('./tutorial');
console.log(tut);

console.log("Sum = ", tut.sum(1,1));
console.log("Pi = ", tut.PI);
console.log(new tut.SomeMathObject());
